<!DOCTYPE html>
<html>
<title>POLI POKEDEX</title>
<head>
<meta charset="utf-8">
<link rel="stylesheet" href="CSS/estilos.css">
<link rel="icon" type="image/png" href="CSS/images/polipkdexlogo.png">
</head>
<body>
<div>
  <div>
    <div class="logodiv"><img src="CSS/images/polipkdexlogo.png" height="150"></div>
    <div class="buscadordiv">
      <form action="pkmon.php?" method="get">
        <input type="search" placeholder="Busca tu Pokémon" class="Buscador" name="pkmon" pattern="[a-z]{3,10}"/>
      </form>
    </div>
  </div>
  <div class="principalDiv">
    <?php
    $a=1;
    while ($a <= 380) {
        //carga solo la imagen directamente de la url y se linkea por metodo get con pkmon.php
        //enviando un numero para identificar el pokemon al clickearlo  y mostrar sus detalles
        echo '<a href="pkmon.php?pkmon='.$a.'"><img class="btn" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'.$a.'.png" loading="lazy"></a>';
        $a=$a+1;
        }
    ?>
   </div>
</div>
</body>
</html>
