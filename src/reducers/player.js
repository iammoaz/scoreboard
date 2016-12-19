import * as PlayerActionTypes from '../actiontypes/player';

const initialState = {
    players: [
        {
            name: 'Muhammad Moaz',
            score: 61,
            created: '16/12/2016',
            updated: '18/12/2016',
        }, {
            name: 'Jim Hopkins',
            score: 26,
            created: '17/12/2016',
            updated: '18/12/2016',
        }, {
            name: 'Alena Holligan',
            score: 39,
            created: '17/12/2016',
            updated: '18/12/2016',
        }
    ],
    selectedPlayerIndex: -1,
};

export default function Player(state=initialState, action) {

    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();

    switch (action.type) {
        case PlayerActionTypes.ADD_PLAYER: {
            const addPlayerList = [
                ...state.players,
                {
                    name: action.name,
                    score: 0,
                    created: `${day}/${month}/${year}`,
                }
            ];
            return {
                ...state,
                players: addPlayerList,
            };
        }

        case PlayerActionTypes.REMOVE_PLAYER: {
            const removePlayerList = [
                ...state.players.slice(0, action.index),
                ...state.players.slice(action.index + 1)
            ];
            return {
                ...state,
                players: removePlayerList,
            };
        }

        case PlayerActionTypes.UPDATE_PLAYER_SCORE: {
            const updatePlayerList = state.players.map((player, index) => {
                if (index === action.index) {
                    return {
                        ...player,
                        score: player.score + action.score,
                        updated: `${day}/${month}/${year}`,
                    };
                }
                return player;
            });
            return {
                ...state,
                players: updatePlayerList
            };
        }

        case PlayerActionTypes.SELECT_PLAYER:
        return {
            ...state,
            selectedPlayerIndex: action.index
        };

        default:
        return state;
    }
};
