---
id: lem-tgr-mass-shell-measure-tetrad-invariance
kind: lemma
title: Tetrad invariance of the future massive mass-shell measure
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
deps: [def-tgr-future-mass-shell-measure, def-gr-local-frame-and-tetrad-fields, lem-gr-tetrad-change-of-basis-is-lorentz, def-time-orientation-and-future-causal-sets, lem-timelike-cone-has-two-convex-components, lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness, def-countable-choice]
dependency_roles:
  def-tgr-future-mass-shell-measure: mathematical-premise
  def-gr-local-frame-and-tetrad-fields: mathematical-premise
  lem-gr-tetrad-change-of-basis-is-lorentz: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "Rubén O. Acuña-Cárdenas, Carlos Gabarrete, and Olivier Sarbach, An introduction to the relativistic kinetic theory on curved spacetimes, §§II and III.3"
      url: "https://arxiv.org/pdf/2106.09235"
    - title: "David Tong, General Relativity, full Cambridge Part III lecture notes, §§2.3.3 and 4.3.1"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
---

## Statement

Let $x$ be an event of a time-oriented smooth Lorentzian four-manifold, let
$M_*>0$, and let $e$ and $e'$ be any two smooth future orthonormal tetrads
near $x$. The measures $d\mu_{M_*,x,e}$ and $d\mu_{M_*,x,e'}$ defined in
[[def-tgr-future-mass-shell-measure]] agree on every Borel subset of the future
massive shell at $x$. Hence the fiber measure $d\mu_{M_*,x}$ is independent of
the chosen future orthonormal tetrad.

## Facts & Assumptions

**Given:** A future massive shell in one tangent space, mass energy $M_*>0$,
two future orthonormal tetrads, and the countable-choice assumption carried by
the cited change-of-variables supplier.

[F1] In tetrad coordinates the shell is
$P(q)=(E(q),q)$, $E(q)=\sqrt{M_*^2+|q|^2}$, and its measure is
$d^3q/E(q)$ ([[def-tgr-future-mass-shell-measure]]).

[F2] If $e'_A=B^C{}_Ae_C$, the basis-change theorem gives
$B^{\mathsf T}\eta B=\eta$ and $B^0{}_0>0$. Its inverse $\Lambda=B^{-1}$,
which sends the first tetrad's component list to the second's, is also
Lorentz and maps the chosen future timelike component and its massive shell
onto themselves: $B$ maps the component into itself, and as an invertible
linear map it maps that connected component onto the component containing
$Be_0$, which is the future one; the inverse has the same property. Taking
determinants in $\Lambda^{\mathsf T}\eta\Lambda=\eta$ gives
$|\det\Lambda|=1$
([[lem-gr-tetrad-change-of-basis-is-lorentz]],
[[def-time-orientation-and-future-causal-sets]],
[[lem-timelike-cone-has-two-convex-components]]).

[F3] If $Q:\mathbb R^3\to\mathbb R^3$ is a $C^1$ diffeomorphism, then for
every nonnegative Borel $h$,
$\int h(q')d^3q'=\int h(Q(q))|\det DQ(q)|d^3q$, assuming
$\mathrm{AC}_\omega$
([[lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness]],
[[def-countable-choice]]).

## Proof

1.1 Write $P(q)=(E(q),q)$ in the first tetrad and let $q'=Q(q)$ be the
spatial coordinates of the same future-shell vector in the second tetrad.
The tetrad change $\Lambda$ maps the entire future shell bijectively to itself;
the spatial coordinate and its inverse are smooth, so $Q$ is a global $C^1$
diffeomorphism of $\mathbb R^3$. Form the $4\times4$ matrix
$C(q)=[P(q),\partial_1P(q),\partial_2P(q),\partial_3P(q)]$. Block
elimination gives
$\det C(q)=E(q)-|q|^2/E(q)=M_*^2/E(q)$. [given, F1, F2, algebra]

2.1 The chain rule on the shell gives
$\Lambda C(q)=C(q')\operatorname{diag}(1,DQ(q))$. Taking absolute
determinants and using [F2] and step 1.1 yields
$$\frac{M_*^2}{E(q)}=\frac{M_*^2}{E(q')}|\det DQ(q)|,\qquad |\det DQ(q)|=\frac{E(q')}{E(q)}.$$
[step 1.1, F2, algebra]

3.1 For any Borel $A$ on the shell, apply [F3] to the nonnegative Borel
function $h(q')=\mathbf1_A(P_{e'}(q'))/E(q')$. Then
$$\mu_{M_*,x,e'}(A)=\int_{\mathbb R^3}\frac{\mathbf1_A(P_e(q))}{E(q')}|\det DQ(q)|\,d^3q=\int_{\mathbb R^3}\frac{\mathbf1_A(P_e(q))}{E(q)}\,d^3q=\mu_{M_*,x,e}(A),$$
where the first equality uses the common geometric vector and the second uses
step 2.1. This is equality of positive Borel measures, completing the proof.
[step 2.1, F3, algebra] ∎
