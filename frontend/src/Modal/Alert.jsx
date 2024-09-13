import PropTypes from "prop-types";
import { redirect } from "react-router-dom";

const Alert = ({ message, height, width, modalVisibilityHandler,redirect }) => {
  return (
    <div className="backdrop-blur-md w-[100vw] h-[100vh] flex justify-center items-center absolute top-0 left-0">
      <div className="relative w-full h-full flex justify-center items-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        neque minima adipisci! Deleniti earum recusandae deserunt. Facilis nobis
        ipsam ad explicabo ut ea accusantium impedit error. Nulla nemo nesciunt
        veritatis laudantium voluptatem laborum. Nemo ex distinctio quasi
        officia minus suscipit, magni vel sunt deleniti dignissimos enim, quam
        sed perferendis ducimus eos molestias! Quasi unde necessitatibus et
        voluptatum corporis vel iure impedit nam facilis provident, ratione
        iusto velit maiores soluta dicta harum cumque autem eum ad itaque nisi
        cupiditate adipisci. Est, nesciunt in! Dicta deleniti, quod quae ullam
        ad provident? Facilis ipsum, sapiente fugit esse inventore dolore
        corrupti rem tenetur corporis, atque quaerat eum nobis, repudiandae
        voluptates. Quisquam, expedita. Quo voluptatem delectus fuga similique
        obcaecati quia ipsum nisi quasi omnis, repudiandae dignissimos ducimus
        aspernatur eos, veniam ut facilis incidunt beatae aperiam aut iste sit,
        et magni neque. Iusto optio ad enim, minus tempora numquam qui
        recusandae quod explicabo aliquid corrupti nesciunt ipsum accusantium
        earum perferendis distinctio, aut itaque animi. Dolores amet eligendi
        voluptates assumenda quisquam est error nobis cupiditate vitae ducimus
        corrupti reiciendis vel architecto itaque culpa illo, at commodi
        maiores. Beatae, sed. Error, soluta ea repellat necessitatibus maxime
        placeat officia quae aliquid commodi fuga fugiat ratione itaque quis
        officiis, animi, quam quos exercitationem veritatis asperiores beatae
        est minus temporibus illum. Aliquam enim omnis eveniet temporibus
        necessitatibus atque optio velit aspernatur reiciendis, magnam officiis,
        ea quisquam quaerat molestiae facilis nulla tempora? Rem omnis
        cupiditate qui harum eligendi nisi, laudantium deleniti, inventore
        accusamus doloribus sed, sunt ipsa! Sequi harum voluptatum quod ratione,
        laudantium vero maxime rerum voluptate quasi voluptatibus, hic id
        praesentium dolorum reiciendis, obcaecati eum omnis nihil sint! Facilis
        officia assumenda, excepturi a perferendis, at delectus pariatur minus
        repudiandae nostrum modi quos id? Nam quae temporibus cumque dolorum
        incidunt quam ipsa ratione vel, ea magnam explicabo nesciunt qui,
        fugiat, excepturi quos. Exercitationem qui facilis, laborum unde quam
        impedit dolores a excepturi quos praesentium cum minima quisquam et
        laudantium veniam ipsum quibusdam? Quam cumque rerum quasi quos natus
        adipisci fugiat veritatis nesciunt a quibusdam praesentium, corrupti
        ipsa reprehenderit quas. Sapiente illo labore maxime magni sed magnam
        deserunt tempore officia consectetur nihil, inventore quidem repellendus
        quas accusantium voluptatem. Porro quo et necessitatibus illo, debitis
        similique qui fugiat tempore esse ut vitae obcaecati vero nihil animi.
        Explicabo nihil consequuntur quis quo? Reiciendis minima distinctio odio
        possimus omnis non impedit deleniti architecto nesciunt accusamus rerum
        ratione vero sed, veniam officia atque iste molestiae voluptate
        molestias nam ipsum quas vitae quam? Ullam aliquid voluptate nostrum
        quidem aperiam quos, odio doloremque aliquam, nesciunt ea suscipit in
        cum accusantium debitis dicta saepe laborum quod id? Non perspiciatis
        ipsum magnam sequi facere perferendis necessitatibus quibusdam laborum
        ratione, ut, saepe, praesentium dolore deleniti aspernatur. Aliquam eum
        id, pariatur dolores aut dolorem sint quas obcaecati beatae quo
        corrupti.
      </div>

      <div
        className="bg-white"
        style={{
          height: height,
          width: width,
        }}
      >
        {message}
      </div>
    </div>
  );
};

Alert.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  message: PropTypes.string,
  modalVisibilityHandler: PropTypes.func,
  redirect : PropTypes.string,
};

export default Alert;
