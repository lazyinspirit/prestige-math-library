---
id: def-ck-tensor-field-on-minkowski-space
kind: definition
title: C^k tensor fields on affine Minkowski space and their inertial components
status: draft
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
domain: mathematics
dependency_level: 8
deps: [def-sr-affine-minkowski-model, def-inertial-frame-and-inertial-chart,
       lem-affine-minkowski-charts-form-a-smooth-atlas,
       lem-tangent-space-of-affine-minkowski-space-is-v,
       def-type-r-s-tensor-on-a-finite-dimensional-vector-space,
       def-algebraic-dual-and-linear-functional,
       def-c-k-map-between-banach-spaces, def-smooth-manifold,
       def-norm-and-normed-space, def-dual-family-associated-to-a-basis,
       cor-finite-dimensional-normed-spaces-are-banach,
       thm-all-norms-on-rn-are-equivalent,
       def-ck-euclidean-maps-and-diffeomorphisms,
       thm-continuous-partial-derivatives-imply-total-differentiability,
       thm-chain-rule-for-total-derivatives]
dependency_roles:
  def-sr-affine-minkowski-model: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  lem-affine-minkowski-charts-form-a-smooth-atlas: mathematical-premise
  lem-tangent-space-of-affine-minkowski-space-is-v: mathematical-premise
  def-type-r-s-tensor-on-a-finite-dimensional-vector-space: mathematical-premise
  def-algebraic-dual-and-linear-functional: mathematical-premise
  def-c-k-map-between-banach-spaces: mathematical-premise
  def-smooth-manifold: mathematical-premise
  def-norm-and-normed-space: mathematical-premise
  def-dual-family-associated-to-a-basis: mathematical-premise
  cor-finite-dimensional-normed-spaces-are-banach: mathematical-premise
  thm-all-norms-on-rn-are-equivalent: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-continuous-partial-derivatives-imply-total-differentiability: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022 revision), Section 2.1 'Manifolds' and Section 2.2 'Lorentzian signature' pp. 25-28 (PDF pp. 26-29); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1 'Special relativity and flat spacetime' pp. 3-7 (PDF pp. 10-14), equations (1.3)-(1.21)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---

## Definition

Let $(A,V,\eta,C^+)$ be the affine Minkowski space of
[[def-sr-affine-minkowski-model]], with its inertial smooth structure
([[lem-affine-minkowski-charts-form-a-smooth-atlas]], [[def-smooth-manifold]]).
Let $\Omega\subseteq A$ be open, let $r,s\in\mathbb N$, and let
$k\in\mathbb N\cup\{\infty\}$. Empty $\Omega$ is allowed; it has the unique
empty field of each type.

Write $T^{r,s}(V)$ for the real vector space, under pointwise operations, of
multilinear maps $(V^*)^r\times V^s\to\mathbb R$
([[def-type-r-s-tensor-on-a-finite-dimensional-vector-space]],
[[def-algebraic-dual-and-linear-functional]]). Identify $T_pA$ with $V$ by
[[lem-tangent-space-of-affine-minkowski-space-is-v]]. For an inertial frame
$(o;e_0,e_1,e_2,e_3)$ with chart $x$, let $(e^{*a})$ be its dual basis,
defined by $e^{*a}(e_b)=\delta^a_b$
([[def-dual-family-associated-to-a-basis]]). The components of a map
$T:\Omega\to T^{r,s}(V)$ are

$$T^{a_1\dots a_r}{}_{b_1\dots b_s}(p):=T(p)(e^{*a_1},\dots,e^{*a_r},e_{b_1},\dots,e_{b_s}).$$

A **$\mathcal C^k$ type-$(r,s)$ tensor field on $\Omega$** is such a map for
which each component, regarded as a function of $u=x(p)$ on the open set
$x(\Omega)\subseteq\mathbb R^4$, is of class $C^k$ in the sense of
[[def-ck-euclidean-maps-and-diffeomorphisms]]; for $k=\infty$ all finite
orders are required.

**Finite-dimensional construction and intrinsic regularity.** Put
$N=4^{r+s}\ge1$, with the component array ordered lexicographically. Every
array of $N$ real numbers defines exactly one tensor: expand each input as
$\alpha_i=\sum_a\alpha_i(e_a)e^{*a}$ and
$v_j=\sum_b e^{*b}(v_j)e_b$, then sum the array entries multiplied by
$\prod_i\alpha_i(e_{a_i})\prod_j e^{*b_j}(v_j)$. This is multilinear and
recovers the array by evaluation on the indicated basis inputs; multilinearity
forces the same formula for any tensor. Thus the component map is a linear
isomorphism $T^{r,s}(V)\to\mathbb R^N$. Pulling back the Euclidean norm gives
a norm on this space ([[def-norm-and-normed-space]]), and every norm makes it
Banach by [[cor-finite-dimensional-normed-spaces-are-banach]]. Any two norms
are equivalent by transporting them to $\mathbb R^N$ and applying
[[thm-all-norms-on-rn-are-equivalent]].

A change of inertial frame expresses each new basis and dual-basis vector as
a constant finite linear combination of the old ones; multilinearity therefore
makes the new component array an invertible constant linear transformation of
the old array. The coordinate precomposition is an invertible affine map by
[[lem-affine-minkowski-charts-form-a-smooth-atlas]]. Finite linear combinations
and affine precomposition preserve $C^k$: each first derivative follows from
[[thm-chain-rule-for-total-derivatives]], and successive derivatives repeat
that rule with constant affine coefficients. Applying the inverse transformations
proves the converse. Hence the definition is independent of frame. Continuous
partials give total derivatives by
[[thm-continuous-partial-derivatives-imply-total-differentiability]], and
induction on order gives the equivalent finite-dimensional Banach-space
$C^k$ definition of [[def-c-k-map-between-banach-spaces]] for $T\circ x^{-1}$.
The norm equivalence inequalities preserve the derivative remainder limits and
continuity of each iterated derivative, so this formulation is also independent
of norm. No definition of a Banach-space map with manifold domain is presumed.

A type-$(0,0)$ field is a **scalar field**, a $C^k$ real-valued function.
A type-$(1,0)$ field is a **vector field**, with the vector $v$ identified with
$\alpha\mapsto\alpha(v)$: conversely a linear functional $Q$ on $V^*$ has
$v=\sum_aQ(e^{*a})e_a$ and $Q(\alpha)=\alpha(v)$. A type-$(0,1)$ field is a
**covector field**, taking values in $V^*$.
