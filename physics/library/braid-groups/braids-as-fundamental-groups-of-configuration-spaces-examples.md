---
page: braids-as-fundamental-groups-of-configuration-spaces-examples
title: "Braids as Fundamental Groups of Configuration Spaces — Examples"
status: published
requires: [braids-as-fundamental-groups-of-configuration-spaces]
items: []
examples: [ex-a-half-twist-loop-traces-the-standard-generator,
           ex-a-pure-full-twist-as-an-ordered-configuration-loop,
           cex-forgetting-labels-can-close-a-nonlooping-coordinate-path,
           cex-a-crossing-diagram-without-height-monotonicity-does-not-define-a-configuration-loop]
---

The worked examples track the distinction between labelled coordinates and
their unordered configuration. The positive elementary half twist is traced
by an explicit semicircle path: its coordinate tuple exchanges the two
endpoints, while its unordered orbit is a based loop, and the traced braid is
isotopic to the chosen positive generator. For two strands, the ordered loop
$$\eta(t)=\bigl(-h,-h+2h\exp(2\pi i t)\bigr),\qquad h=\tfrac1{12},$$
stays in the open disk, avoids collision, and closes at $Q$. Its traced braid
is the positive full twist $[\sigma_1]^2$ with identity endpoint permutation;
under the pure-braid identification on the companion page, its ordered class
appears with the specified inverse.

The first counterexample shows why quotienting by labels matters: the ordered
path $(\rho(t),-\rho(t))$ for the positive two-strand half twist starts at
$Q$ and ends at the transposed tuple, so it is not a based ordered loop, but
both endpoints have the same unordered orbit. The second uses an embedded
folded arc with a local maximum and minimum in height. Although its endpoint
sets agree, its slice at height $1/2$ contains four points rather than two;
the drawing therefore does not define a path in the two-point configuration
space. These calculations exhibit the endpoint and one-point-per-height
conditions needed for the braid/configuration correspondence. No Axiom of
Choice is used in either construction.
