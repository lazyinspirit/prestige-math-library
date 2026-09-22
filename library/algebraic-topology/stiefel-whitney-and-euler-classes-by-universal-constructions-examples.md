---
page: stiefel-whitney-and-euler-classes-by-universal-constructions-examples
title: "Stiefel Whitney and Euler Classes by Universal Constructions — Examples"
status: published
items: []
examples:
  - ex-stiefel-whitney-class-of-the-universal-real-line
  - ex-total-stiefel-whitney-class-of-a-sum-of-universal-lines
  - ex-euler-class-of-the-universal-oriented-two-plane
  - ex-euler-class-of-zero-and-trivial-positive-rank-bundles
  - cex-zero-euler-class-does-not-in-general-imply-a-nowhere-zero-section
  - cex-odd-rank-euler-class-need-not-vanish-with-two-torsion-coefficients
---

These examples compute the classes at the universal normalization. The
universal real line has $w(\gamma_1)=1+a$; on $(\mathbb{RP}^\infty)^n$ the
pullbacks of the universal line have polynomial cohomology ring
$\mathbb F_2[a_1,\ldots,a_n]$ and their sum has $w=\prod_i(1+a_i)$, so its
classes are the elementary symmetric polynomials. Over
$B\operatorname{SO}(2)\cong\mathbb{CP}^\infty$ the Euler class of the
universal oriented two-plane is the chosen generator of $H^2$ and reduces mod
two to $w_2$. The zero bundle has $e=1$, while every trivial positive-rank
bundle has $e=0$, by the nowhere-zero section of its first coordinate.

The counterexamples mark the limits of the obstruction statements. The bundle
clutched over $S^4$ by the double cover $SU(2)\to SO(3)$ is nontrivial, has
vanishing integral Euler class because $H^3(S^4;\mathbb Z)=0$, and admits no
nowhere-zero section, since such a section would split off a trivial line and
force the rank-two complement to be trivial. On
$\mathbb{RP}^\infty\times\mathbb{RP}^\infty$ the sum
$L_a\oplus L_b\oplus L_{a+b}$ is orientable with top class $ab(a+b)\neq0$, so
its integral Euler class is a nonzero element of order two: the odd-rank
theorem gives only $2e=0$, never unconditional vanishing.
