import React, {Component} from 'react';
import Header from '../components/Header';
import Player from '../components/Player';
import AddPlayerForm from '../components/AddPlayerForm';

class Scoreboard extends Component {
    state = {
        players: [
            {
                name: 'Muhammad Moaz',
                score: 61,
            }, {
                name: 'Jim Hopkins',
                score: 26,
            }, {
                name: 'Alena Holligan',
                score: 39,
            },
        ]
    };

    onScoreChange = (index, delta) => {
        this.state.players[index].score += delta;
        this.setState(this.state);
    };

    onAddPlayer = (name) => {
        this.state.players.push({name: name, score: 0});
        this.setState(this.state);
    };

    onRemovePlayer = (index) => {
        this.state.players.splice(index, 1);
        this.setState(this.state);
    };

    render() {
        return (
            <div className="scoreboard">
                <Header players={this.state.players} />
                <div className="players">
                    {this.state.players.map(function(player, index) {
                        return (
                            <Player
                                name={player.name}
                                score={player.score}
                                key={player.name}
                                onScoreChange={(delta) => this.onScoreChange(index, delta)}
                                onRemove={() => this.onRemovePlayer(index)}
                            />
                        );
                    }.bind(this))}
                </div>
                <AddPlayerForm onAdd={this.onAddPlayer}/>
            </div>
        )
    };
};

export default Scoreboard;
