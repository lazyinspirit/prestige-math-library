---
id: def-refined-gysin-pullback-for-regular-embeddings
kind: definition
title: "Refined Gysin pullback for regular embeddings"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 11
deps:
  - def-axiom-of-choice
  - def-deformation-to-the-normal-cone-and-specialization
  - def-intersection-with-a-cartier-divisor-and-first-chern-class
  - lem-gysin-specialization-bivariant-and-base-change
  - lem-operational-chern-classes-and-whitney-formula
  - lem-refined-gysin-commutation-and-composition
  - lem-smooth-immersion-normal-sequence-and-deformation-charts
  - lem-vector-bundle-chow-homotopy-invariance
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "The Stacks Project, Chow Homology and Chern Classes, Sections 42.48, 42.53, 42.54 and 42.59"
      url: "https://stacks.math.columbia.edu/download/chow.pdf"
      locator: "Chapter 42, Sections 42.48 (deformation to the normal cone), 42.53-42.54 (Gysin maps for lci morphisms) and 42.59 (regular embeddings)"
    - title: "Ravi Vakil, Math 245 Topics in Algebraic Geometry, Introduction to Intersection Theory, Classes 16-17"
      url: "https://math.stanford.edu/~vakil/245/245class17.pdf"
      locator: "Class 17: refined Gysin pullback for regular embeddings (statements and construction)"
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]) inherited from the smooth
normal-sequence suppliers. Fix a field $k$; all schemes and base changes below
are locally of finite type over $k$, and all morphisms are $k$-morphisms. Let $i:X\hookrightarrow Y$ be a regular closed
embedding of codimension $d$ with normal bundle $N$. In particular a closed
embedding of smooth schemes of constant codimension is regular. For any
$f:Y'\to Y$, put $X'=X\times_YY'$ and $N'=N|_{X'}$. The pulled-back ideal gives
a closed immersion $a:C_{X'}Y'\hookrightarrow N'$. Define
$$i^!_{Y'}=(p'^*)^{-1}a_*\sigma_{X'/Y'}:A_m(Y')\longrightarrow A_{m-d}(X'),$$
using [[def-deformation-to-the-normal-cone-and-specialization]] and
[[lem-vector-bundle-chow-homotopy-invariance]]. No fibre product of deformation
spaces over $\mathbb P^1$ with a fictitious map to $Y$ is used. The same
construction for a regular locally closed embedding uses restriction to an open
in which it is closed; the operations agree under further restriction and
extension of cycles, so this is intrinsic.

For $h:Y''\to Y'$ and $h_X:X''=X\times_YY''\to X'$, properness of $h$ gives
$i^!_{Y'}h_*=(h_X)_*i^!_{Y''}$, and flatness of $h$ of fixed pure relative dimension gives
$i^!_{Y''}h^*=h_X^*i^!_{Y'}$. These do not require the base-changed embedding to
be regular. If $X'\hookrightarrow Y'$ is regular with normal bundle
$N_0\subset N'$ and excess bundle $Q=N'/N_0$, then
$i^!_{Y'}=c_{d-\operatorname{rank}N_0}(Q)\cap (i')^!$. In particular
$i^!i_*\alpha=c_d(N)\cap\alpha$. Here $c_j$ means the already defined
operational Chern operator of
[[lem-operational-chern-classes-and-whitney-formula]]; it later becomes the
Chow-ring Chern class on a smooth scheme. Codimension-one Gysin equals Cartier
divisor Gysin; refined Gysins commute, and $(ji)^!=i^!j^!$ for composed regular
embeddings. They commute with Chern cap operations. For any operational class
$c$ on $Y$ and $\beta\in A_*(X)$, its projection formula is
$i_*(c|_X\cap\beta)=c\cap i_*\beta$. Under the later smooth operational-ring
identification this is the ring formula
$i_*(i^*\alpha\cdot\beta)=\alpha\cdot i_*\beta$.

**Well-definedness.** The construction and the arbitrary-base-change bivariant
axioms are proved in
[[lem-gysin-specialization-bivariant-and-base-change]]: the specialization
$\sigma_{X'/Y'}$ is well defined on Chow groups by the triviality of the normal
line at infinity, the cone embedding exists by the Rees-algebra surjection, and
$a_*$ and $(p'^*)^{-1}$ are the proper pushforward and inverse flat pullback of
[[lem-vector-bundle-chow-homotopy-invariance]]. The excess formula is the
corresponding statement of [[lem-gysin-specialization-bivariant-and-base-change]];
for the self-intersection formula apply it to the base change $Y'=X$, where the
ideal is zero, the cone is the zero section and the quotient bundle is $N$, and
use proper compatibility to identify the restricted operation with $i^!i_*$. For
the agreement with Cartier divisor Gysin in codimension one, test on an integral
base cycle: if the cycle is not contained in the divisor its cone is the normal
line and the operation is its Cartier fundamental cycle, while if it is
contained the zero-cone computation gives $c_1$ of the restricted normal line,
which are exactly the two cases of the Cartier Gysin of
[[def-intersection-with-a-cartier-divisor-and-first-chern-class]]. Commutation
and composition, including the necessary cone computation with the saturated
strict transforms in the deformation charts, are
[[lem-refined-gysin-commutation-and-composition]]. Locality for locally closed
embeddings follows because on each cycle the identical ideal and normal bundle
give identical operators, and in overlaps the two restrictions agree. The
operational projection formula is the proper axiom of a bivariant class
([[lem-refined-gysin-commutation-and-composition]]); its ring interpretation is
provided by the later smooth-ring theorem and is not a prerequisite for this
construction.
