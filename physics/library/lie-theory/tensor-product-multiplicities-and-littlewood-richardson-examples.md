---
page: tensor-product-multiplicities-and-littlewood-richardson-examples
title: Tensor Product Multiplicities and Littlewood Richardson — Examples
status: published
requires: [tensor-product-multiplicities-and-littlewood-richardson]
items: []
examples:
  - ex-clebsch-gordan-decomposition-for-sl2
  - ex-three-tensor-three-for-sl3
  - ex-littlewood-richardson-product-s21-times-s1
  - ex-a-littlewood-richardson-coefficient-greater-than-one
  - cex-a-semistandard-skew-tableau-with-nonlattice-word-is-not-lr
  - cex-a-partition-with-too-many-rows-vanishes-at-fixed-rank
---

These examples exercise the tensor-product machinery of
[[tensor-product-multiplicities-and-littlewood-richardson]] on the smallest
rank cases and record two boundary phenomena.

[[ex-clebsch-gordan-decomposition-for-sl2]] runs the Racah–Speiser algorithm
for $\mathfrak{sl}_2$ in the normalisation $\rho=\omega$: the unique
irregular weight, when present, is discarded, the reflected weights contribute signs, and
the resulting multiplicities are one exactly on the classical range
$|a-b|\le c\le a+b$ with the parity condition. The equivalent direct-sum form
$L(a)\otimes L(b)=\bigoplus_{j}L(a+b-2j)$ and the dimension check are
included.

[[ex-three-tensor-three-for-sl3]] computes $L(\omega_1)\otimes L(\omega_1)$
from the minuscule rule: the three weights of the standard representation
give dominant translates $2\omega_1$ and $\omega_2$, the third translate is
not dominant and drops out, and the identification with
$\operatorname{Sym}^2V\oplus\Lambda^2V$ is forced by the dimension count
$6+3=9$.

[[ex-littlewood-richardson-product-s21-times-s1]] applies the horizontal
Pieri rule to $s_{(2,1)}s_{(1)}$, lists the three legal added boxes, and
checks the two rank specialisations $15+6+3=24=8\cdot3$ and $3+1=4=2\cdot2$.
[[ex-a-littlewood-richardson-coefficient-greater-than-one]] exhibits the two
Littlewood–Richardson tableaux contributing to
$c^{(3,2,1)}_{(2,1),(2,1)}=2$, shows that the third semistandard filling
fails the lattice condition, and verifies the expansion
$s_{(2,1)}^2=s_{(4,2)}+s_{(4,1,1)}+s_{(3,3)}+2s_{(3,2,1)}+s_{(3,1,1,1)}+s_{(2,2,2)}+s_{(2,2,1,1)}$
at rank $3$.

The two counterexamples separate the hypotheses. [[cex-a-semistandard-skew-tableau-with-nonlattice-word-is-not-lr]]
displays a semistandard tableau of shape $(2,1)$ and content $(1,1,1)$ whose
reading word $3\,1\,2$ is not a lattice word, so semistandardness alone does
not produce a Littlewood–Richardson tableau; both fillings of that shape and
content fail, and the coefficient $c^{(2,1)}_{\varnothing,(1,1,1)}$ is $0$.
[[cex-a-partition-with-too-many-rows-vanishes-at-fixed-rank]] takes
$V=\mathbb C^2$ and $\nu=(1,1,1)$: the coefficient
$c^{(1,1,1)}_{(1,1),(1)}$ is $1$ but the module $S_{(1,1,1)}(\mathbb C^2)$
vanishes, so the row bound $\ell(\nu)\le\dim V$ is needed when listing
nonzero constituents of the Littlewood–Richardson tensor product. The
direct-sum identity may still include zero modules above the rank; the
coefficient is computed by a rank-independent tableau count.
