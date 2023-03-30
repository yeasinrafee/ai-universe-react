import React from "react";

const Modal = (props) => {
  console.log(props.singleData);
  const { description, image_link, pricing, accuracy, integrations, features } =
    props.singleData;

  console.log(integrations);
  return (
    <>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl mx-5">
          <div className="card lg:card-side bg-base-100">
            <div className="card-body">
              <h2 className="card-title">
                {description ? description : "Not found"}
              </h2>
              <div className="flex justify-between">
                <div>
                  <h1 className="text-xl font-bold">Features</h1>
                  {Object.values(features || {})
                    ? Object.values(features || {}).map((feature, index) => (
                        <p key={index}>{feature?.feature_name}</p>
                      ))
                    : "No data found"}
                </div>
                <div>
                  <h1 className="text-xl font-bold">Integration</h1>
                  {integrations
                    ? integrations.map((int, index) => <p key={index}>{int}</p>)
                    : "No Data found"}
                </div>
              </div>
            </div>
            <figure className="w-full">
              <img
                className="img-full"
                src={image_link ? image_link[0] : null}
                alt="Album"
              />
            </figure>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
