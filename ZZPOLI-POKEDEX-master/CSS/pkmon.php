<!DOCTYPE html>
<html>
<title>POLI POKEDEX</title>
<head>
  <link rel="icon" type="image/png" href="CSS/images/polipkdexlogo.png">
  <link rel="stylesheet" href="CSS/stypk.css">

<!--por metodo get tenemos el pokemon seleccionado de la tabla del index -->
  <?php
    $pokemon= $_GET['pkmon'];
    $api = curl_init("https://pokeapi.co/api/v2/pokemon/$pokemon");
    curl_setopt($api, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($api, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($api);
    curl_close($api);

// aqui decodifica el archivo JSON y lo almacena en la variable $json
    $json = json_decode($response);

// este es el condicional que filtra el error en caso que la busqueda no sea exitosa
    if ($response == "Not Found"){
      echo '<p>el pokemon '.$pokemon.' aún no existe</p>';
      exit();
    }
    else {
      $pokemon= $json->id;
    }
  ?>

</head>
<body>
  <div class="cont_glob">

    <div class="encabezado">
      <a href="index.php"> <div class="logo"><img src="CSS/images/polipkdexlogo.png" width="150"></div> </a>
    </div>
      <div>
          <div class="foto_principal">
            <div>
              <?php echo '<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'.$pokemon.'.png"'?>
            </div>
          </div>
      </div>
      <div class="nomytar">
        <div  class="pknombre"><?php echo $json->name; ?>
            <div class="tipopk">
              Tipo:  <?php echo $json->types[0]->type->name;?>
            </div>
        </div>
          <div class="tarjeta_sprite">
            <?php
            echo '<img src="'.$json->sprites->back_default.'" width="200">';
            ?>
          </div>
          <div class="tarjeta_sprite">
            <?php
            echo '<img src="'.$json->sprites->front_default.'" width="200">';
            ?>
          </div>
      </div>
    </div>

    <div class="caracteristicas">
      <div class="tipopk">CARACTERISTICAS</div>
      <div class="habymov">
        <div class="habilities">
          <?php
            echo '<h2>Habilidades</h2>';
            foreach($json->abilities as $k => $v) {
                echo $v->ability->name.'<br>';
            }
          ?>
          <br>
        </div>
        <div class="moveses">
          <?php
            echo '<h2>Movimientos</h2><p>';
            foreach($json->moves as $k => $v) {
                echo $v->move->name." ";
            }
            echo '</p><br>';
           ?>
      </div>
      </div>
      <div class="grafik">
        <h2>Estadisticas de <?php echo $json->name; ?></h2>
          <div class="stat_txt">Poder</div>
          <div class="barra_gris">
            <?php echo '<div class="barra_azul" style="width:'.$json->stats[0]->base_stat.'%">'.$json->stats[0]->base_stat.'%</div>' ?>
          </div>
          <div class="stat_txt">Ataque</div>
          <div class="barra_gris">
            <?php echo '<div class="barra_azul" style="width:'.$json->stats[1]->base_stat.'%">'.$json->stats[1]->base_stat.'%</div>' ?>
          </div>
          <div class="stat_txt">Defensa</div>
          <div class="barra_gris">
            <?php echo '<div class="barra_azul" style="width:'.$json->stats[2]->base_stat.'%">'.$json->stats[2]->base_stat.'%</div>' ?>
          </div>
          <div class="stat_txt">Ataque Especial</div>
          <div class="barra_gris">
            <?php echo '<div class="barra_azul" style="width:'.$json->stats[3]->base_stat.'%">'.$json->stats[3]->base_stat.'%</div>' ?>
          </div>
          <div class="stat_txt">Defensa Especial</div>
          <div class="barra_gris">
            <?php echo '<div class="barra_azul" style="width:'.$json->stats[4]->base_stat.'%">'.$json->stats[4]->base_stat.'%</div>' ?>
          </div>
          <div class="stat_txt">Velocidad</div>
          <div class="barra_gris">
            <?php echo '<div class="barra_azul" style="width:'.$json->stats[5]->base_stat.'%">'.$json->stats[5]->base_stat.'%</div>' ?>
          </div>
      </div>
      <br>
    </div>

  </div>

</body>
</html>
