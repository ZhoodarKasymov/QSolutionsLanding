import { Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/700.css";
import Button from "../common/button/Button";
import VerticalCarousel from "../common/verticalCarousel/VerticalCarousel";
import TitleSection from "../common/title/TitleSection";
import Card from "./../common/card/Card";

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
                  <div className="suitable_card_fourth suitable_card_dsc mb-3 ">
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
      <div className="mt-5 mb-5 row w-100">
        <div className="line_q col-6"></div>
        <div className="line_q_2 col-6"></div>
      </div>
      <Container className="mb-5">
        <Row>
          <Col lg={12} className="mb-5">
            <TitleSection title="из чего состоит сэо" />
          </Col>
          <Col lg={3}>
            <Card
              folderPath={"seoImages"}
              path={"9674e5e875580555facffd0b45d62034.png"}
              title={"Терминал"}
              link={"https://google.com"}
              key={1}
              height={200}
            ></Card>
          </Col>
          <Col lg={3}>
            <Card
              folderPath={"seoImages"}
              path={"d72aa7b2ca645451f4b5d5b637d6c8d9.png"}
              title={"Табло оператора"}
              link={"https://google.com"}
              key={1}
              height={200}
            ></Card>
          </Col>
          <Col lg={3}>
            <Card
              folderPath={"seoImages"}
              path={"e940b93e9cf936285989bb1d5be82836.png"}
              title={"ПО оператора"}
              link={"https://google.com"}
              key={1}
              height={200}
            ></Card>
          </Col>
          <Col lg={3}>
            <Card
              folderPath={"seoImages"}
              path={"3658e92e53db6fcd0bb41c42f305ff79.png"}
              title={"Главное табло (ТВ)"}
              link={"https://google.com"}
              key={1}
              height={200}
            ></Card>
          </Col>
          <Col lg={6} className="mt-4">
            <Card
              folderPath={"seoImages"}
              path={"ea75e9ddd7d57f4cf8aed048ef831084.png"}
              title={""}
              link={"https://google.com"}
              key={1}
              height={255}
            ></Card>
          </Col>
        </Row>
      </Container>
      <Container className="mb-5">
        <Row>
          <Col lg={12} className="mb-5">
            <TitleSection title="Партнеры" />
          </Col>
          <Col lg={12}>
            <Row>
              <Col className="col-1-5">
                <img
                  src={`${process.env.PUBLIC_URL}/partnersImages/01d8b98a0c1ab6422feddeecab72a2e0.png`}
                  className="d-block"
                  width={150}
                />
              </Col>
              <Col className="col-1-5 position-relative">
                <img
                  src={`${process.env.PUBLIC_URL}/partnersImages/902e6c84827e8a283945b37c34c47f81.png`}
                  className="d-block"
                  width={150}
                />
              </Col>
              <Col className="col-1-5 position-relative">
                <img
                  src={`${process.env.PUBLIC_URL}/partnersImages/3469b2094521a5a7fbe89921c3d9c326.png`}
                  className="d-block"
                  width={150}
                />
              </Col>
              <Col className="col-1-5 position-relative">
                <img
                  src={`${process.env.PUBLIC_URL}/partnersImages/3953b8253d7da393b922beaa08eab0c8.png`}
                  className="d-block"
                  width={80}
                  style={{ position: "absolute", right: "7px", top: '-16px', zIndex: '1' }}
                />
              </Col>
              <Col className="col-1-5 position-relative">
                <img
                  src={`${process.env.PUBLIC_URL}/partnersImages/dbbc20db5986aa9062f84fac3d4c6691.png`}
                  className="d-block"
                  width={260}
                  style={{ position: "absolute", right: "-79px", top: '-22px' }}
                />
              </Col>
              <Col className="col-1-5 position-relative">
                <img
                  src={`${process.env.PUBLIC_URL}/partnersImages/df02a0837f32088983f02db0b111572c.png`}
                  className="d-block"
                  width={80}
                  style={{ position: "absolute", right: "28px", top:'-19' }}
                />
              </Col>
              <Col className="col-1-5 position-relative">
                <img
                  src={`${process.env.PUBLIC_URL}/partnersImages/4cf0cdcd98bc443905801b1fb622be03.png`}
                  className="d-block"
                  width={80}
                  style={{ position: "absolute", left: "44px", zIndex: "1", top: '-18px' }}
                />
              </Col>
              <Col className="col-1-5 position-relative">
                <img
                  src={`${process.env.PUBLIC_URL}/partnersImages/8dc208050e4d04efaf21472480bc8b28.png`}
                  className="d-block"
                  width={250}
                  style={{ position: "absolute", left: "-36px", top: "-25px" }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
