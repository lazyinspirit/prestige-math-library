---
page: signed-quiver-flag-convolution-and-klr-ext-realization-examples
title: "Signed Quiver Flag Convolution And Klr Ext Realization Examples"
status: draft
items: []
examples: [ex-equal-color-quiver-flag-correspondence-is-nilhecke,
           ex-signed-two-direction-multiedge-quiver-flag-crossing]
requires:
  - signed-quiver-flag-convolution-and-klr-ext-realization
---

**Objective.** This companion page works the two smallest cases in which the signs of the
signed quiver-flag presentation are visible. In the one-vertex case with no arrows and
$\beta=2\alpha_i$, the incidence variety is $\mathbb P^1$, its self-fiber-product is
$\mathbb P^1\times\mathbb P^1$, and the elementary correspondence acts by the divided
difference $(f-s_1f)/(x_1-x_2)$; the square is zero and the mixed relations have signs
$+1$ and $-1$, so the one-corner convolution algebra is the rank-two nil-Hecke algebra
([[ex-equal-color-quiver-flag-correspondence-is-nilhecke]]). For the two-vertex quiver with
$h_{ij}=2$, $h_{ji}=1$ and $\nu=(i,j,i)$, both arrow directions and a parallel arrow enter the
same triple product: subtracting the two sides of the braid relation gives the nonzero native
correction $-[(x_1-x_2)^2+(x_1-x_2)(x_3-x_2)+(x_3-x_2)^2]$, computed by exact expansion of the
crossing operators ([[ex-signed-two-direction-multiedge-quiver-flag-crossing]]). Both examples
use the definition and relation theorem on
[[signed-quiver-flag-convolution-and-klr-ext-realization]]; the equal-color presentation
isomorphism also uses [[thm-quiver-flag-relative-position-strata-give-a-faithful-geometric-pbw-basis|the geometric PBW theorem]].
