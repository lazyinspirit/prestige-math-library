---
id: lem-oppositely-framed-points-are-framed-null-cobordant-in-pairs
kind: lemma
title: Oppositely framed points cancel in pairs
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 3
deps:
- def-framing-sign-of-a-zero-dimensional-regular-preimage
- lem-components-of-the-frame-bundle-of-a-connected-manifold
- lem-framed-points-in-one-component-of-the-frame-bundle-are-framed-cobordant
- def-framed-cobordism-of-embedded-submanifolds
- def-framing-of-a-normal-bundle
- lem-framed-cobordism-is-an-equivalence-relation
- def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary
- ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds
- def-orientation-of-a-finite-dimensional-real-vector-space
- def-diffeomorphism-and-local-diffeomorphism-of-manifolds
- def-neat-submanifold-of-a-manifold-with-boundary
- def-countable-choice
- lem-positively-oriented-bases-are-path-connected
- def-the-standard-smooth-step-function
- thm-euclidean-inverse-function-theorem
- thm-heine-borel-rn
- thm-compactness-under-continuous-maps
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: constructive
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
  - title: 'Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)'
    url: https://people.math.harvard.edu/~dafr/bordism.pdf
    locator: Lemma 2.46 and its proof (2.47)-(2.48), printed p.24
  - title: John Milnor, Topology from the Differentiable Viewpoint
    url: https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf
    locator: Section 7, the union and cancellation of framed 0-manifolds, printed p.50
---
## Statement

Assume $\mathrm{AC}_\omega$. Let $M$ be a closed smooth $m$-manifold, $m\ge1$,
let $U\subseteq M$ be the domain of a chart with image an open ball in
$\mathbb R^m$, and let $x_0,x_1\in U$ be distinct points with framings
$\varphi_0,\varphi_1$ such that, in the chart coordinates, the bases
$\varphi_0,\varphi_1$ induce opposite orientations of $\mathbb R^m$. Then the
closed framed $0$-dimensional submanifold
$\{(x_0,\varphi_0)\}\sqcup\{(x_1,\varphi_1)\}$ of $M$ is framed null-cobordant
by a framed cobordism $W\subseteq U\times I$ supported in $U$; equivalently, in
the orientable chart ball the two points have opposite framing signs. The cobordism can be taken to be a smooth staple with vertical product ends at the actual two points, preceded by changes of framing on their disjoint stationary cylinders.


## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a closed smooth $m$-manifold $M$, $m\ge1$, a chart $u:U\to B$ onto an open Euclidean ball, and distinct framed points $x_0,x_1\in U$ with opposite chart signs.

[F1] A framed cobordism has compact neat embedded underlying manifold, literal product ends, and constant end framings in the normal-quotient convention ([[def-framed-cobordism-of-embedded-submanifolds]], [[def-framing-of-a-normal-bundle]], [[def-neat-submanifold-of-a-manifold-with-boundary]]).

[F2] Two frames of the same orientation are joined by a smooth path ([[lem-positively-oriented-bases-are-path-connected]]); the standard smooth step function makes such a path constant near both ends ([[def-the-standard-smooth-step-function]]).

[F3] Framed cobordisms compose by rescaling and gluing their matching product ends ([[lem-framed-cobordism-is-an-equivalence-relation]]).

[F4] The interval is compact; continuous images of compact spaces are compact, and a continuous bijection from a compact space to a Hausdorff space is a homeomorphism ([[thm-heine-borel-rn]], [[thm-compactness-under-continuous-maps]]). The scalar inverse function theorem gives a $C^1$ square root on positive reals; its derivative identity bootstraps to smoothness ([[thm-euclidean-inverse-function-theorem]]).

## Proof

1.1 Work in $B$, put $z_i=u(x_i)$, $d=|z_1-z_0|>0$, and choose a constant orthonormal basis $(e_1,\ldots,e_m)$ with $e_1=(z_1-z_0)/d$, completing it by finite elimination and normalization. The segment between $z_0,z_1$ lies in $B$. Let $\sigma$ be [F2], fix $0<h<1/4$, and set $a(s)=d\sigma(3s-1)$, $t(s)=hs(1-s)$, and $\gamma(s)=(z_0+a(s)e_1,t(s))$. The standard step function is strictly increasing on $(0,1)$: differentiating $\sigma(r)=\beta(r)/(\beta(r)+\beta(1-r))$ gives a positive numerator $\beta'(r)\beta(1-r)+\beta(r)\beta'(1-r)$ there, since $\beta(r)=e^{-1/r}$ for $r>0$ has $\beta'(r)>0$. Thus $a$ is strictly increasing between its two constant endpoint legs. One has $t(0)=t(1)=0$ and $0<t(s)\le h/4<1$ inside; $t'(s)=h(1-2s)$ vanishes only at $s=1/2$, where $a'(s)>0$. Hence $\gamma$ is an injective immersion: the middle is separated by its horizontal coordinate, and the two distinct vertical legs have strictly monotone heights. Compactness and Hausdorffness give continuity of the inverse on the image. The image is a compact embedded arc with literal vertical product collars of any sufficiently small width $\varepsilon<t(1/3)$, and no top endpoint. [F1, F2, F4, given, construct]

2.1 Write $q(s)=\sqrt{a'(s)^2+t'(s)^2}>0$. The function $q$ is smooth, since the positive square root is $C^1$ by the scalar inverse function theorem and repeated differentiation of its derivative gives smoothness. Use normal vectors $w_1=(-t'(s)e_1,a'(s))/q(s)$ and $w_j=(e_j,0)$ for $2\le j\le m$. Their quotient classes form a basis: the tangent $(a'e_1,t')$ and $w_1$ have determinant $q(s)>0$ in the $(e_1,t)$-plane, and the remaining vectors span the complementary spatial directions. On the first leg $a'=0$, $t'>0$, so $w_1=(-e_1,0)$; on the second $a'=0$, $t'<0$, so $w_1=(e_1,0)$. Thus the framing is constant on both product collars. Use the inverse of this basis map as the normal trivialization. This gives a framed null-cobordism of the model pair at the actual points; reversing the first normal vector throughout reverses both endpoint signs if their order needs to be switched. [F1, F4, step 1.1]

3.1 The prescribed frames have the respective signs of one of those two model choices. By [F2] join each prescribed inverse framing to the corresponding model frame at the same fixed point, making the paths constant near their ends. The two stationary cylinders $\{x_i\}\times I$ have disjoint images; on each, the inverse frame path trivializes the normal quotient $T_{x_i}M$. Their union therefore is an embedded framed cobordism from the prescribed pair to the model pair, with product ends and constant collar framings. This construction needs no claim that unrelated cobordisms can be made disjoint. [F1, F2, step 2.1]

4.1 Glue the stationary-cylinder cobordism to the staple by [F3]. The result is supported in $U\times I$, has the prescribed pair as its bottom end and empty top end, and has the specified normal framing on the bottom collar. Thus the pair is framed null-cobordant. All paths and integrals are finite constructions; the countable-choice hypothesis is inherited from [F1] and [F3]. [F1, F3, step 1.1, step 2.1, step 3.1, discharge-construct] ∎
