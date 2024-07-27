import React from "react";

function PokemonDetails() {

  return (

      <div
        className="modal fade "
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        tabIndex='-1'

      >
        <div className="modal-dialog modal-dialog-centred">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {/* {pokemon.name} */}
                This is in develop Mode  !! 
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
                {/* <h5>
                    Id is {props.id()}
                </h5> */}
                <p>
                    {/* {props.pokemon.url} */}
                </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default PokemonDetails;
