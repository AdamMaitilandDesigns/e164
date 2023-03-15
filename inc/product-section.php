<div class="menu">



<ul class="prod-menu">

  <li class="on" id="tnf-class" onclick="productSwitch('tnf')">Telephone Number formatting</li>
  <li id="nrp-class" onclick="productSwitch('nrp')">Number Range Plans</li>
  <li id="nra-class" onclick="productSwitch('nra')">New range announcements</li>
  <li id="tpl-class" onclick="productSwitch('tpl')">Telephone prefix lookup</li>
  <li id="ccd-class" onclick="productSwitch('ccd')">Carrier contact details</li>
  <li id="dnl-class" onclick="productSwitch('dnl')">Disposable number lookup</li>
  <li id="mpnl-class" onclick="productSwitch('mpnl')">MNP / ported number lookup</li>
  <li id="hmsl-class" onclick="productSwitch('hmsl')">HLR / mobile status lookup</li>
  <li id="opd-class" onclick="productSwitch('opd')">Online profile detection</li>
  <li id="fd-class" onclick="productSwitch('fd')">Fraud detection</li>
  <li id="prd-class" onclick="productSwitch('prd')">Premium rate detection</li>
  <li id="dba-class" onclick="productSwitch('dba')">Data breach alert</li>
  <li id="ina-class" onclick="productSwitch('ina')">Inbound Number allocation / DID</li>
  <li id="dnc-class" onclick="productSwitch('dnc')">Do not call</li>
  <li id="dno-class" onclick="productSwitch('dno')">Do not originate</li>
  <li id="ntd-class" onclick="productSwitch('ntd')">Number type detection</li>
  <li id="ss-class" onclick="productSwitch('ss')">STIR / SHAKEN</li>

</ul>

<div class="shadow-right"></div>

</div>

<div class="content">


<?php

include('products/tnf.php');
include('products/nrp.php');
include('products/nra.php');
include('products/tpl.php');
include('products/ccd.php');
include('products/dnl.php');
include('products/mpnl.php');
include('products/hmsl.php');
include('products/opd.php');
include('products/fd.php');
include('products/prd.php');
include('products/dba.php');
include('products/ina.php');
include('products/dnc.php');
include('products/dno.php');
include('products/ntd.php');
include('products/ss.php');

?>


</div>