---
id: thm-real-splitting-principle-with-mod-two-injective-pullback
kind: theorem
title: Real splitting principle with mod-two injective pullback
status: published
origin: pipeline
deps: ["def-real-flag-bundle-and-stiefel-whitney-roots", "thm-mod-two-real-projective-bundle-theorem", "lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type", "prop-vector-bundle-pullback-is-functorial-up-to-canonical-isomorphism", "def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles", "def-axiom-of-choice"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Allen Hatcher, Vector Bundles & K-Theory
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Proposition 3.3 and its proof, printed pp.80–82"
    - title: Haynes Miller, MIT 18.906 Algebraic Topology II lecture notes
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Lecture 34 splitting principle, printed pp.125–127"
    - title: Milnor and Stasheff, Characteristic Classes
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "§7 splitting principle, printed pp.83–96"
verification:
  audited: 2026-09-22
---

## Statement

Assume AC. Let $E\to B$ be a numerable real vector bundle of rank $n\geq0$
over a paracompact Hausdorff CGWH base of CW homotopy type, and let
$q:\operatorname{Fl}(E)\to B$ be its real flag bundle. Then
$\operatorname{Fl}(E)$ is a base of the same kind,
$$q^*E\cong L_1\oplus\cdots\oplus L_n\qquad\text{over }\operatorname{Fl}(E),$$
and the pullback
$$q^*:H^*(B;\mathbb F_2)\longrightarrow H^*(\operatorname{Fl}(E);\mathbb F_2)$$
is injective. Moreover, finitely many numerable real bundles
$E_1,\ldots,E_m$ over $B$ admit a common paracompact Hausdorff CGWH base of
CW homotopy type
$X\to B$ with $X=\operatorname{Fl}(E_1)\times_B\cdots\times_B
\operatorname{Fl}(E_m)$ over which every $q^*E_k$ splits as a sum of line
bundles and whose projection $X\to B$ induces an injection on
$\mathbb F_2$-cohomology.

## Facts & Assumptions

**Given:** AC, a numerable real rank-$n$ bundle $E\to B$ over a paracompact Hausdorff CGWH base of CW homotopy type, and its flag bundle $q:\operatorname{Fl}(E)\to B$.

[F1] The flag bundle is built as the composite of the projections $X_j\to X_{j-1}$, each of which is the projective bundle of a numerable real bundle of positive rank $r_j$, and $q^*E\cong L_1\oplus\cdots\oplus L_n$ ([[def-real-flag-bundle-and-stiefel-whitney-roots]]).

[F2] For a numerable real rank-$r$ bundle $G$ with $r\geq1$ over a paracompact
Hausdorff CGWH base $Y$ of CW homotopy type, the projective bundle theorem
gives $H^*(P(G);\mathbb F_2)$ free over $H^*(Y;\mathbb F_2)$ on
$1,x_G,\ldots,x_G^{r-1}$; in particular the projection $P(G)\to Y$ induces
an injection on $\mathbb F_2$-cohomology, as the inclusion of the
coefficient-of-$1$ summand ([[thm-mod-two-real-projective-bundle-theorem]]).

[F3] Every intermediate $X_j$ and $\operatorname{Fl}(E)$ is paracompact
Hausdorff CGWH of CW homotopy type, and a fiber product over $B$ of finitely
many flag bundles is a numerable bundle with compact CW fiber over $B$, hence
has the same properties
([[lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type]]).

[F4] Pullback is canonically functorial and compatible with direct sums, so the splitting of a pulled-back bundle is the pullback of the splitting ([[prop-vector-bundle-pullback-is-functorial-up-to-canonical-isomorphism]], [[def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles]]).

[A1] AC is the Axiom of Choice in the form fixed by [[def-axiom-of-choice]].

## Proof
1.1 Every stage projection is injective on $\mathbb F_2$-cohomology. By [F1] the map $X_j\to X_{j-1}$ is the projection of a projective bundle $P(G_j)$ of a numerable bundle of positive rank over $X_{j-1}$, and $X_{j-1}$ is admissible by [F3]; [F2] therefore makes the induced map $H^*(X_{j-1};\mathbb F_2)\to H^*(X_j;\mathbb F_2)$ injective. The composite of finitely many injective maps is injective, so $q^*:H^*(B;\mathbb F_2)\to H^*(\operatorname{Fl}(E);\mathbb F_2)$ is injective. [F1, F2, F3]

1.2 The splitting over the flag bundle is [F1]'s second clause, $q^*E\cong L_1\oplus\cdots\oplus L_n$, with each $L_j$ a numerable line bundle over the admissible space $\operatorname{Fl}(E)$. For $n=0$, $\operatorname{Fl}(E)=B$ and the sum is empty, so $q=\operatorname{id}$ and the pullback is the identity, which is injective. [F1, F3]

1.3 Finitely many bundles. Let $E_1,\ldots,E_m$ be numerable real bundles over $B$, of ranks $n_k\geq0$. Define $Y_0=B$ and recursively $$Y_k:=Y_{k-1}\times_B\operatorname{Fl}(E_k),\qquad r_k:Y_k\to Y_{k-1}.$$ We first verify the required base change. For a map $h:W\to Z$ and a positive-rank bundle $G\to Z$, there is a fiberwise map
$$\Psi:P(h^*G)\longrightarrow W\times_ZP(G),\qquad (w,\ell\subseteq G_{h(w)})\longmapsto(w,\ell).$$
Over a linear chart $G|_U\cong U\times\mathbb R^r$, both sides have the
pulled-back projective chart
$h^{-1}(U)\times\mathbb{RP}^{r-1}$ and $\Psi$ is the identity in these
coordinates. Thus $\Psi$ is a homeomorphism over $W$, and the same coordinate
description identifies $\gamma_{h^*G}$ with the pullback of $\gamma_G$.
Choose at each flag stage the pullback of the metric used over $Z$.
Fiberwise orthogonal complement then commutes with pullback, because both
subbundles consist of the vectors orthogonal to the same pulled-back line.
Induction through the projectivization stages of [F1] therefore gives
$$\operatorname{Fl}(h^*E_k)\cong W\times_B\operatorname{Fl}(E_k),$$
with its tautological lines identified with the pulled-back ones.

Apply this with $W=Y_{k-1}$ and $h:Y_{k-1}\to B$. It identifies $r_k:Y_k\to
Y_{k-1}$ with the flag projection of $h^*E_k$, so step 1.1 over the admissible
base $Y_{k-1}$ makes every $r_k^*$ injective. With
$X=Y_m=\operatorname{Fl}(E_1)\times_B\cdots\times_B
\operatorname{Fl}(E_m)$ and $q_X=r_1\circ\cdots\circ r_m$, contravariance gives
$$q_X^*=r_m^*\cdots r_1^*,$$ a composite of injective maps. By [F3] every
$Y_k$, and in particular $X$, is admissible. For each $k$, let
$q_k'':X\to\operatorname{Fl}(E_k)$ be the $k$-th projection. Then
$q_X=q_kq_k''$ and
$q_X^*E_k\cong q_k''^*q_k^*E_k\cong
q_k''^*(L_1^{(k)}\oplus\cdots\oplus L_{n_k}^{(k)})$, which by [F4] is a
direct sum of the line bundles $q_k''^*L_j^{(k)}$. [F1, F3, F4, step 1.1]

2.1 Boundary cases. If some $n_k=0$ then $E_k$ is the zero bundle, its flag bundle is $B$ and $q_X^*E_k=0$ splits as an empty sum; the corresponding factor contributes no projection and does not affect injectivity. If $m=0$ then $X=B$, the empty family of bundles is split vacuously, and $q_X=\operatorname{id}$. If $B=\varnothing$ then all spaces are empty and the cohomology groups are zero, so injectivity is vacuous. AC is used through the metric choices of the flag construction and the projective bundle theorem, as recorded. [F1, F2, A1, step 1.1, step 1.3] ∎
