---
id: lem-finite-join-models-for-circle-and-two-point-groups
kind: lemma
title: Finite join models for the circle and the two-point group
status: draft
origin: pipeline
deps: ["def-milnor-infinite-join-model-of-eg", "thm-of-square-roots", "thm-heine-borel-rn", "thm-finite-products-of-compact-spaces", "thm-compactness-under-continuous-maps", "thm-quotient-universal-property", "thm-product-universal-property", "lem-algebra-of-continuous-real-maps-on-a-space", "lem-metrics-on-rn", "thm-metric-hausdorff-separation"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Dale Husemoller, Fibre Bundles, Third Edition
      url: https://link.springer.com/book/10.1007/978-1-4757-2261-1
      locator: Chapter 4, Examples 11.3--11.4, printed pages 55--56
---

## Statement

For every integer $N\geq0$, there are natural homeomorphisms

$$ (S^1)^{*(N+1)}\cong S^{2N+1}\subseteq\mathbb C^{N+1},\qquad (\mathbb Z/2)^{*(N+1)}\cong S^N\subseteq\mathbb R^{N+1}. $$

They commute with the inclusions obtained by appending a zero join coordinate.
The first intertwines the diagonal right $S^1$-action with scalar multiplication,
so its orbit space is $\mathbb {CP}^N$. The second intertwines the nonidentity
element of $\mathbb Z/2=\{1,-1\}$ with the antipodal map, so its orbit space is
$\mathbb {RP}^N$. These finite-stage identifications are choice-free.

## Facts & Assumptions

[F1] [[def-milnor-infinite-join-model-of-eg]] presents the finite join as the quotient of $\Delta^N\times G^{N+1}$ that ignores precisely the labels whose weights are zero.

[F2] [[thm-of-square-roots]] gives the unique nonnegative square root of every nonnegative real.

[F3] [[thm-heine-borel-rn]] makes closed bounded finite-dimensional Euclidean subsets compact, and [[thm-finite-products-of-compact-spaces]] preserves compactness under finite products without AC.

[F4] A continuous image of a compact space is compact, and a continuous bijection from a compact space to a Hausdorff space is a homeomorphism ([[thm-compactness-under-continuous-maps]]).

[F5] A map constant on quotient fibers descends continuously ([[thm-quotient-universal-property]]). Coordinatewise continuous formulas define continuous maps to finite products ([[thm-product-universal-property]]), and finite real sums and products are continuous ([[lem-algebra-of-continuous-real-maps-on-a-space]]).

[F6] Euclidean distance is a metric ([[lem-metrics-on-rn]]), and every metric space is Hausdorff ([[thm-metric-hausdorff-separation]]).

## Proof

**Given:** $N\geq0$, the geometric circle $S^1\subseteq\mathbb C$, and the discrete subgroup $\{1,-1\}\subseteq\mathbb R$.

1.1 The nonnegative square-root function used below is continuous. Indeed, for $u,v\geq0$, assume without loss that $u\geq v$. Since $v^2\leq uv$, nonnegativity and uniqueness in [F2] give $v\leq\sqrt{uv}=\sqrt u\sqrt v$. Hence [F2, algebra]
$$ (\sqrt u-\sqrt v)^2=u+v-2\sqrt{uv}\leq u-v, $$
so $|\sqrt u-\sqrt v|\leq\sqrt{|u-v|}$. Given $\varepsilon>0$, taking $|u-v|<\varepsilon^2$ proves continuity, including at zero. [F2, algebra]

2.1 On the quotient presentation in [F1], define [F1, F5, step 1.1]
$$ \Phi_N\!\left(\sum_{i=0}^N t_i z_i\right)=(\sqrt{t_0}z_0,\ldots,\sqrt{t_N}z_N)\in\mathbb C^{N+1}. $$
Its squared norm is $\sum_i t_i=1$. The formula is independent of every
$z_i$ with $t_i=0$, and its formula before quotienting is continuous by
[F5] and step 1.1. It therefore descends to a continuous map
$(S^1)^{*(N+1)}\to S^{2N+1}$. It is onto: for
$w=(w_i)$ on the unit sphere use $t_i=|w_i|^2$ and, when $w_i\ne0$,
$z_i=w_i/|w_i|$; labels at zero coordinates may be set to $1$. It is injective,
because its image recovers every $t_i=|w_i|^2$ and every label at a positive
weight, which is exactly the equivalence relation in [F1]. [F1, F5, step 1.1]

2.2 Similarly define [F1, F5, step 1.1]
$$ \Psi_N\!\left(\sum_{i=0}^N t_i\varepsilon_i\right)=(\varepsilon_0\sqrt{t_0},\ldots,\varepsilon_N\sqrt{t_N}). $$
It is well defined and continuous by the same argument as step 2.1. For a
point $x=(x_i)\in S^N$, recover $t_i=x_i^2$ and, at a positive weight,
$\varepsilon_i$ as the sign of $x_i$. This proves bijectivity, because the recovered data agree exactly at every positive weight. [F1, F5, step 1.1]

3.1 The simplex, the circle, the finite subset $\{1,-1\}$, and both target spheres are closed bounded subsets of finite-dimensional Euclidean spaces, hence compact by [F3]; the relevant finite products remain compact. Each quotient source is a continuous image of its compact product and is compact by [F4], while each target sphere is Hausdorff by [F6]. Thus the continuous bijections in steps 2.1--2.2 are homeomorphisms by [F4]. This also shows that the ordinary compact quotients are already compactly generated, so they agree with the standing kified finite-join convention. [F3, F4, F6, step 2.1, step 2.2]

4.1 Appending a zero weight appends the zero target coordinate in both formulas, so the homeomorphisms commute with the standard inclusions. For $\lambda\in S^1$, [F1, step 3.1]
$$ \Phi_N\!\left(\left(\sum_i t_i z_i\right)\lambda\right)=(\sqrt{t_i}z_i\lambda)_i=\Phi_N\!\left(\sum_i t_i z_i\right)\lambda. $$
Thus the first map is equivariant. Its orbit quotient is the unit-sphere quotient by phases, which is $\mathbb {CP}^N$: every nonzero complex vector has a unique positive radial normalization, and two unit vectors span the same complex line exactly when they differ by a unit phase. Likewise multiplication of every $\varepsilon_i$ by $-1$ sends $\Psi_N$ to its antipode, and the second orbit quotient is $S^N/(x\sim-x)=\mathbb {RP}^N$. [F1, step 3.1, algebra]

5.1 At $N=0$, $\Phi_0$ is the identity of $S^1$ and its orbit quotient is one point; $\Psi_0$ identifies the two-element group with $S^0$ and its orbit quotient is one point. No coordinate with zero weight is ever divided by, and all products and label assignments are finite. Thus the endpoint and degenerate cases introduce no choice, and steps 1.1--4.1 prove every claim. $\square$ [step 1.1, step 2.1, step 2.2, step 3.1, step 4.1]
