import { Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import "@fontsource/inter/800.css";
import Button from "../common/button/Button";
import VerticalCarousel from "../common/verticalCarousel/VerticalCarousel";

const Home = () => {
  return (
    <>
      <div className="home_page">
        <Container>
          <Row>
            <Col lg={6}>
              <Row>
                <h1 className="system_header col-12">Система</h1>
                <h1 className="system_header col-12">Электронных</h1>
                <h1 className="system_header col-12">Очередей</h1>
                <p className="system_text col-12 mt-4">
                  Внедрение и сопровождение систем электронных очередей,
                  автоматизация трудовых процессов.
                </p>
                <Button
                  className="mt-4"
                  standart={true}
                  label="Связаться с нами"
                  height={69}
                  width={229}
                />
              </Row>
            </Col>
            <Col lg={6}>
              <Row>
                <Col lg={6} style={{ paddingLeft: 15 }}>
                  <VerticalCarousel
                    interval={3000}
                    folderPath="carouselImage"
                    picturesPaths={[
                      [
                        "1c06aee8d8cd735bb9fc0bdcb670e460.png",
                        "7c5ff39985eb55e34b3eca9678950f95.png",
                        "93b745a0922f2611512071fc8d8ab9ee.png",
                      ],
                      [
                        "93b745a0922f2611512071fc8d8ab9ee.png",
                        "7c5ff39985eb55e34b3eca9678950f95.png",
                        "1c06aee8d8cd735bb9fc0bdcb670e460.png",
                      ],
                    ]}
                  ></VerticalCarousel>
                </Col>
                <Col lg={6} className="p-0">
                  <VerticalCarousel
                    interval={2500}
                    folderPath="carouselImage"
                    picturesPaths={[
                      [
                        "b8cf15c7a93197459260d4b072dac9cd.png",
                        "cd9b5e963c66843962050a62d26e6718.png",
                        "fdea05dba76aae5b1e6511922e60060d.png",
                      ],
                      [
                        "fdea05dba76aae5b1e6511922e60060d.png",
                        "cd9b5e963c66843962050a62d26e6718.png",
                        "b8cf15c7a93197459260d4b072dac9cd.png",
                      ],
                    ]}
                  ></VerticalCarousel>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="mt-5 w-100 ">
        <Container>
          <Row className="mt-5">
            <Col lg={6} className="p-1">
              <Row className="p-0 m-0">
                <h3 className="suitable_wrapper w-100 col-12 mb-3">
                  Кому это подходит?
                </h3>
                <Col lg={6} className="p-0">
                  <div className="suitable_card_first suitable_card_dsc">
                    <h4>Гос. учреждения</h4>
                    <h4>сервисные центры</h4>
                  </div>
                </Col>
                <Col lg={6} className="p-0">
                  <div className="suitable_card_second suitable_card_dsc">
                    <h4>банки</h4>
                    <h4>страховые компании</h4>
                  </div>
                </Col>
                <Col lg={12} className="p-0 mt-3">
                  <div className="suitable_card_third suitable_card_dsc">
                    <h4>банки</h4>
                    <h4>страховые компании</h4>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col lg={6} className="p-1">
              <Row className="p-0 m-0">
                <Col lg={12} className="p-0">
                  <div className="suitable_card_fourth suitable_card_dsc">
                    <h4>больницы медицинские учреждения</h4>
                    <h4>ОБЩЕСТВЕННЫЕ ПРИЁМНЫЕ</h4>
                    <h4>офисы управляющих компаний жкх</h4>
                  </div>
                </Col>
                <Col lg={6} className="p-0">
                  <div className="suitable_card_fifth suitable_card_dsc">
                    <h4>авиа билеты</h4>
                    <h4>ж/д билеты</h4>
                    <h4>пункты выдачи товаров</h4>
                  </div>
                </Col>
                <Col lg={6} className="p-0">
                  <div className="suitable_card_sixth suitable_card_dsc">
                    <h4>кафе</h4>
                    <h4>ФАСТ-ФУД</h4>
                    <h4>СТОЛОВЫЕ</h4>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
