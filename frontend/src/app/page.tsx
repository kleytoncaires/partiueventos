"use client";

import { Instagram } from "@mui/icons-material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Menu from "@mui/icons-material/Menu";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import WhatsApp from "@mui/icons-material/WhatsApp";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  MobileStepper,
  Toolbar,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";

import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const apiUrl = "http://localhost:1337/api/parties?populate=featuredImage";
const localhost = "http://localhost:1337";

export default function Home() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setDados(response.data.data);
      } catch (error) {
        console.error("Erro:", error);
      }
    };

    fetchData();
  }, []);

  console.log(dados);

  const handleAbrirLink = (url: string) => {
    window.open(url, "_blank");
  };

  const handleCompartilharWhatsApp = (url: string) => {
    const textoCompartilhamento = url;
    const urlCompartilhamento = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      textoCompartilhamento
    )}`;
    window.open(urlCompartilhamento, "_blank");
  };

  var ConverterEstados = function (val: string) {
    var data;

    switch (val.toUpperCase()) {
      /* UFs */
      case "AC":
        data = "Acre";
        break;
      case "AL":
        data = "Alagoas";
        break;
      case "AM":
        data = "Amazonas";
        break;
      case "AP":
        data = "Amapá";
        break;
      case "BA":
        data = "Bahia";
        break;
      case "CE":
        data = "Ceará";
        break;
      case "DF":
        data = "Distrito Federal";
        break;
      case "ES":
        data = "Espírito Santo";
        break;
      case "GO":
        data = "Goiás";
        break;
      case "MA":
        data = "Maranhão";
        break;
      case "MG":
        data = "Minas Gerais";
        break;
      case "MS":
        data = "Mato Grosso do Sul";
        break;
      case "MT":
        data = "Mato Grosso";
        break;
      case "PA":
        data = "Pará";
        break;
      case "PB":
        data = "Paraíba";
        break;
      case "PE":
        data = "Pernambuco";
        break;
      case "PI":
        data = "Piauí";
        break;
      case "PR":
        data = "Paraná";
        break;
      case "RJ":
        data = "Rio de Janeiro";
        break;
      case "RN":
        data = "Rio Grande do Norte";
        break;
      case "RO":
        data = "Rondônia";
        break;
      case "RR":
        data = "Roraima";
        break;
      case "RS":
        data = "Rio Grande do Sul";
        break;
      case "SC":
        data = "Santa Catarina";
        break;
      case "SE":
        data = "Sergipe";
        break;
      case "SP":
        data = "São Paulo";
        break;
      case "TO":
        data = "Tocantíns";
        break;

      /* Estados */
      case "ACRE":
        data = "AC";
        break;
      case "ALAGOAS":
        data = "AL";
        break;
      case "AMAZONAS":
        data = "AM";
        break;
      case "AMAPÁ":
        data = "AP";
        break;
      case "BAHIA":
        data = "BA";
        break;
      case "CEARÁ":
        data = "CE";
        break;
      case "DISTRITO FEDERAL":
        data = "DF";
        break;
      case "ESPÍRITO SANTO":
        data = "ES";
        break;
      case "GOIÁS":
        data = "GO";
        break;
      case "MARANHÃO":
        data = "MA";
        break;
      case "MINAS GERAIS":
        data = "MG";
        break;
      case "MATO GROSSO DO SUL":
        data = "MS";
        break;
      case "MATO GROSSO":
        data = "MT";
        break;
      case "PARÁ":
        data = "PA";
        break;
      case "PARAÍBA":
        data = "PB";
        break;
      case "PERNAMBUCO":
        data = "PE";
        break;
      case "PIAUÍ":
        data = "PI";
        break;
      case "PARANÁ":
        data = "PR";
        break;
      case "RIO DE JANEIRO":
        data = "RJ";
        break;
      case "RIO GRANDE DO NORTE":
        data = "RN";
        break;
      case "RONDÔNIA":
        data = "RO";
        break;
      case "RORAIMA":
        data = "RR";
        break;
      case "RIO GRANDE DO SUL":
        data = "RS";
        break;
      case "SANTA CATARINA":
        data = "SC";
        break;
      case "SERGIPE":
        data = "SE";
        break;
      case "SÃO PAULO":
        data = "SP";
        break;
      case "TOCANTÍNS":
        data = "TO";
        break;
    }

    return data;
  };

  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

  const images = [
    {
      label: "San Francisco – Oakland Bay Bridge, United States",
      imgPath:
        "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=1200&h=460&q=60",
    },
    {
      label: "Bird",
      imgPath:
        "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=1200&h=460&q=60",
    },
    {
      label: "Bali, Indonesia",
      imgPath:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&h=460",
    },
    {
      label: "Goč, Serbia",
      imgPath:
        "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=1200&h=460&q=60",
    },
  ];

  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <>
      <CssBaseline />

      <Box sx={{ flexGrow: 1, mb: 2 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Menu />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Partiu Eventos BH
            </Typography>
            <Box>
              <Tooltip title="Instagram">
                <IconButton
                  sx={{ color: theme.palette.common.white }}
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/partiueventosbh/",
                      "_blank"
                    )
                  }
                >
                  <Instagram />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {images.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      display: "block",
                      overflow: "hidden",
                      width: "100%",
                    }}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Próximo
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Anterior
              </Button>
            }
          />
        </Box>

        <Grid container spacing={2} sx={{ my: 3 }}>
          {dados.map(({ id, attributes }) => (
            <Grid item xs={12} lg={3} key={id} mb={2}>
              <Card elevation={0}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: "#0d1b2a", color: "#fff" }}>
                      {ConverterEstados(attributes.state)}
                    </Avatar>
                  }
                  title={attributes.name}
                  subheader={`
                  ${attributes.city}
                  ${"\n\n"}
                  ${moment(attributes.initialDate).format("DD/MM/YYYY")}`}
                  sx={{ cursor: "pointer" }}
                  onClick={() => handleAbrirLink(attributes.url)}
                />
                <CardMedia
                  component="img"
                  image={`${localhost}${attributes.featuredImage.data.attributes.url}`}
                  alt={attributes.name}
                  sx={{ cursor: "pointer" }}
                  onClick={() => handleAbrirLink(attributes.url)}
                />
                <CardActions disableSpacing sx={{ gap: 1 }}>
                  <Tooltip title="Comprar">
                    <IconButton
                      color="primary"
                      onClick={() => handleAbrirLink(attributes.url)}
                    >
                      <ShoppingCart />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Compartilhar no WhatsApp">
                    <IconButton
                      color="primary"
                      onClick={() => handleCompartilharWhatsApp(attributes.url)}
                    >
                      <WhatsApp />
                    </IconButton>
                  </Tooltip>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
