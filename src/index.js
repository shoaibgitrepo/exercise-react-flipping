import React, { useState } from "react";
import { render } from "react-dom";

import "./style.css";

var winningCombos = ["012", "345", "678", "036", "147", "258", "048", "246"];

var initialState = {
    fields: Array(9).fill(false), // start with array of 9 with false filled in
    player1: "x",
    player2: "o",
    currentPlayer: 1
};

function reducer(state, action) {
    switch (action.type) {
        case "HANDLE_PLAY":
            if (state.winner) return state;

            var fields = [...state.fields];
            var piece = state["player" + state.currentPlayer]; //x or o

            fields[action.data.index] = piece;

            return {
                ...state,
                fields: fields,
                currentPlayer: state.currentPlayer === 1 ? 2 : 1 // toggle between player  1 and 2
            };

        case "RESET":
            return {
                ...startingState,
                currentPlayer: state.currentPlayer
            };
        default:
            //throw new Error()
            return state;
    }
}

function App() {
    function handleRestart() {
        dispatch({ type: "RESET" });
    }

    function handlePlay(index, e) {
        // fill in the current piece, and switch player
        dispatch({ type: "HANDLE_PLAY", data: { index } });
    }

    var fields = currState.fields.map((item, i) => {
        if (!item) {
            return (
                <div key={i} onClick={handlePlay.bind(this, i)} className="field empty">
                    &nbsp;
                </div>
            );
        }

        return (
            <div key={i} className="field">
                {item.toUpperCase()}
            </div>
        );
    });

    return (
        <div>
            <button className="clearButton" onClick={handleRestart}>
                Clear
            </button>
            <button className="clearButton" onClick={ }>
                Flip Values
            </button>
            <div className="fieldContainer">{fields}</div>
        </div>
    );
}

render(<App />, document.getElementById("root"));










// STARTING STATE
var initialState1 = {
    fields: Array(9).fill(false), // start with array of 9 with false filled in
    player1: "x",
    player2: "o",
    currentPlayer: 1
};

function reducer1(state, action) {
    switch (action.type) {
        case "HANDLE_PLAY":
            if (state.winner) return state;

            var fields = [...state.fields];
            var piece = state["player" + state.currentPlayer]; //x or o

            fields[action.data.index] = piece;

            return {
                ...state,
                fields: fields,
                currentPlayer: state.currentPlayer === 1 ? 2 : 1 // toggle between player  1 and 2
            };
        case "FLIP_FIELDS":
            var fields = state.fields.map((item) => {
                if (item === "x") return "o"
                if (item === "o") return "x"
                return item
            })

            return {
                ...state,
                fields: fields
            }

        case "RESET":
            return {
                ...startingState,
                currentPlayer: state.currentPlayer
            };
        default:
            //throw new Error()
            return state;
    }
}

function App1() {
    var [state, dispatch] = React.useReducer(reducer, startingState);

    function handleRestart() {
        dispatch({ type: "RESET" });
    }

    function handlePlay(index, e) {
        // fill in the current piece, and switch player
        dispatch({ type: "HANDLE_PLAY", data: { index } });
    }

    var fields = currState.fields.map((item, i) => {
        if (!item) {
            return (
                <div key={i} onClick={handlePlay.bind(this, i)} className="field empty">
                    &nbsp;
                </div>
            );
        }

        return (
            <div key={i} className="field">
                {item.toUpperCase()}
            </div>
        );
    });

    return (
        <div>
            <button className="clearButton" onClick={handleRestart}>
                Clear
            </button>
            <button className="clearButton" onClick={ }>
                Flip Values
            </button>
            <div className="fieldContainer">{fields}</div>
        </div>
    );
}




// FINAL WORKING STATE -------------------------
var startingState2 = {
    fields: Array(9).fill(false), // start with array of 9 with false filled in
    player1: "x",
    player2: "o",
    currentPlayer: 1
};

function reducer2(state, action) {
    switch (action.type) {
        case "HANDLE_PLAY":
            if (state.winner) return state;

            var fields = [...state.fields];
            var piece = state["player" + state.currentPlayer]; //x or o

            fields[action.data.index] = piece;

            return {
                ...state,
                fields: fields,
                currentPlayer: state.currentPlayer === 1 ? 2 : 1 // toggle between player  1 and 2
            };
        case "FLIP_FIELDS":
            var fields = state.fields.map((item) => {
                if (item === "x") return "o"
                if (item === "o") return "x"
                return item
            })

            return {
                ...state,
                fields: fields
            }

        case "RESET":
            return {
                ...startingState,
                currentPlayer: state.currentPlayer
            };
        default:
            //throw new Error()
            return state;
    }
}

function App2() {
    var [state, dispatch] = React.useReducer(reducer, startingState);

    function handleRestart() {
        dispatch({ type: "RESET" });
    }

    function handlePlay(index, e) {
        // fill in the current piece, and switch player
        dispatch({ type: "HANDLE_PLAY", data: { index } });
    }

    function handleFlip() {
        dispatch({ type: "FLIP_FIELDS" });
    }

    var fields = state.fields.map((item, i) => {
        if (!item) {
            return (
                <div key={i} onClick={handlePlay.bind(this, i)} className="field empty">
                    &nbsp;
                </div>
            );
        }

        return (
            <div key={i} className="field">
                {item.toUpperCase()}
            </div>
        );
    });

    return (
        <div>
            <button className="clearButton" onClick={handleRestart}>
                Clear
            </button>
            <button className="clearButton" onClick={handleFlip}>
                Flip Values
            </button>
            <div className="fieldContainer">{fields}</div>
        </div>
    );
}