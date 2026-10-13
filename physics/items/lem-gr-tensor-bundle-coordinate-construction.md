---
id: lem-gr-tensor-bundle-coordinate-construction
kind: lemma
title: "The tensor bundle on a smooth four-manifold from coordinate evaluations"
status: published
origin: session
domain: mathematics
dependency_level: 0
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-smooth-manifold, def-topological-manifold-without-boundary, def-countable-choice, def-type-r-s-tensor-on-a-finite-dimensional-vector-space, thm-coordinate-derivations-form-a-basis-of-the-tangent-space, thm-coordinate-differentials-form-the-dual-cotangent-basis, thm-change-of-coordinate-formula-for-tangent-bases, thm-chain-rule-for-total-derivatives, thm-ck-euclidean-maps-closed-under-algebra-and-composition, thm-vector-bundle-construction-from-a-smooth-cocycle, def-smooth-section-local-section-and-support]
dependency_roles:
  def-smooth-manifold: mathematical-premise
  def-topological-manifold-without-boundary: mathematical-premise
  def-countable-choice: mathematical-premise
  def-type-r-s-tensor-on-a-finite-dimensional-vector-space: mathematical-premise
  thm-coordinate-derivations-form-a-basis-of-the-tangent-space: mathematical-premise
  thm-coordinate-differentials-form-the-dual-cotangent-basis: mathematical-premise
  thm-change-of-coordinate-formula-for-tangent-bases: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
  thm-vector-bundle-construction-from-a-smooth-cocycle: mathematical-premise
  def-smooth-section-local-section-and-support: mathematical-premise
sources:
  references:
    - title: "J. M. Lee, Introduction to Smooth Manifolds, 2nd ed., Chapter 12: tensor bundles and smooth tensor fields"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
---

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $M$ be a smooth
four-manifold without boundary and $r,s\ge0$ integers. Write
$E=\coprod_{p\in M}\operatorname{Mult}((T_p^*M)^r\times(T_pM)^s,\mathbb R)$
and $\pi(p,T)=p$. For a smooth chart $(U,x)$, let $C_x(T)$ be the array
of the evaluations $T(dx^{a_1},\ldots,dx^{a_r},\partial_{x^{b_1}},\ldots,\partial_{x^{b_s}})$,
with all indices in $\{0,1,2,3\}$. Then the bijections
$\Phi_x:\pi^{-1}(U)\to U\times\mathbb R^{4^{r+s}}$, $\Phi_x(p,T)=(p,C_x(T))$,
define a unique smooth vector-bundle structure on $E$.

For $J_{yx}(p)=D(y\circ x^{-1})(x(p))$, the transition
$\Phi_y\Phi_x^{-1}$ multiplies each upper component index by $J_{yx}$
and each lower component index by $J_{yx}^{-1}$, with the intermediate
indices summed. These maps obey $g_{xx}=I$ and
$g_{zy}g_{yx}=g_{zx}$. A family $p\mapsto T_p$ is a smooth section
exactly when its arrays $C_x(T_p)$ are smooth in the charts of one smooth
atlas, equivalently in every smooth chart. No metric or global frame is required.

## Facts & Assumptions

**Given:** The smooth four-manifold $M$, integers $r,s\ge0$ and $\mathrm{AC}_\omega$.

[F1] A smooth manifold is Hausdorff and second countable, with smooth coordinate changes ([[def-smooth-manifold]], [[def-topological-manifold-without-boundary]]). Countable choice selects from an at most countable family of nonempty sets ([[def-countable-choice]]).

[F2] Coordinate derivations form a basis and coordinate differentials its dual; on an overlap $\partial_{y^b}=\sum_d(J_{yx}^{-1})^d{}_b\partial_{x^d}$ ([[thm-coordinate-derivations-form-a-basis-of-the-tangent-space]], [[thm-coordinate-differentials-form-the-dual-cotangent-basis]], [[thm-change-of-coordinate-formula-for-tangent-bases]]). Tensors are multilinear maps with $r$ covector and $s$ vector arguments ([[def-type-r-s-tensor-on-a-finite-dimensional-vector-space]]).

[F3] Derivatives of smooth coordinate changes and finite sums, products and composites of smooth functions are smooth, and the chain rule gives $J_{zy}J_{yx}=J_{zx}$ ([[thm-chain-rule-for-total-derivatives]], [[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]).

[F4] A smooth linear cocycle on a supplied countable open cover constructs a smooth vector bundle ([[thm-vector-bundle-construction-from-a-smooth-cocycle]]). A smooth section is a smooth map right-inverse to the projection ([[def-smooth-section-local-section-and-support]]).

## Proof

1.1 If $M$ is empty, all conclusions hold for the empty bundle. Otherwise fix a countable basis $(B_n)$ for its topology. For each nonempty $B_n$ contained in a smooth chart domain let $X_n$ be the nonempty set of such charts restricted to $B_n$. By [F1], countable choice supplies one chart from each $X_n$. These restricted charts cover $M$: a point has a smooth chart neighbourhood and a basis neighbourhood containing it inside that neighbourhood. This is the only selection from infinitely many sets in the construction. Denote the supplied countable chart cover by $(U_\alpha,x_\alpha)$. [given, F1, choose]

1.2 For each chart, multilinearity and the bases in [F2] make $C_x$ a linear isomorphism on every fibre. Explicitly, a prescribed array $c^{a_1\cdots a_r}{}_{b_1\cdots b_s}$ recovers the tensor by $T(\xi_1,\ldots,\xi_r,v_1,\ldots,v_s)=\sum_{a_1,\ldots,a_r,b_1,\ldots,b_s}c^{a_1\cdots a_r}{}_{b_1\cdots b_s}\prod_i\xi_i(\partial_{x^{a_i}})\prod_j dx^{b_j}(v_j)$. Evaluating this formula on the coordinate covectors and vectors recovers the array, and expanding arbitrary arguments in these bases recovers every original tensor. For $r=s=0$ this is simply the one scalar value. Thus $\Phi_x$ is the stated fibrewise linear bijection. [F2, algebra, construct]

2.1 The covector change is $dy^a=\sum_c J_{yx}^a{}_c dx^c$: evaluate both sides on each $\partial_{x^c}$ and use the coordinate derivative of $y^a$. Together with the vector change of [F2], multilinearity gives $C_y(T)^{a_1\cdots a_r}{}_{b_1\cdots b_s}=\sum_{c_1,\ldots,c_r,d_1,\ldots,d_s}\prod_i J_{yx}^{a_i}{}_{c_i}\prod_j(J_{yx}^{-1})^{d_j}{}_{b_j}C_x(T)^{c_1\cdots c_r}{}_{d_1\cdots d_s}$. Call this linear map $g_{yx}$. Its coefficients are smooth by [F3]; the inverse Jacobian entries are the derivatives of the smooth inverse coordinate change, evaluated at $y(p)$. The maps are invertible, since exchanging $x,y$ gives their inverses. [F2, F3, step 1.2, algebra]

3.1 Fibrewise, $g_{yx}=C_y C_x^{-1}$, so $g_{xx}=I$ and $g_{zy}g_{yx}=C_z C_y^{-1}C_y C_x^{-1}=g_{zx}$ on every triple overlap. This proves the cocycle with its direction fixed, including the index contractions of step 2.1; it also agrees with the chain rule of [F3]. [F3, step 1.2, step 2.1, algebra]

4.1 Apply [F4] to the countable cover of step 1.1, with rank $4^{r+s}$ and the cocycle of step 3.1. The resulting quotient bundle maps to the actual set $E$ by $[p,c]_\alpha\mapsto(p,C_{x_\alpha}^{-1}(c))$. The relation identifies precisely the representatives giving the same tensor, by $g_{\beta\alpha}=C_{x_\beta}C_{x_\alpha}^{-1}$; hence this map is well defined and bijective. Transport the topology and smooth structure along it. The bundle charts on the chosen cover become exactly $\Phi_{x_\alpha}$. Any further smooth chart has smooth linear transitions to these charts by step 2.1, so its $\Phi_x$ is also a smooth bundle chart. Uniqueness follows because the charts on the cover determine the topology (a set is open exactly when its intersection with each chart domain has open chart image) and the generated smooth atlas. In particular another countable selection gives the same structure. [F4, step 1.1, step 1.2, step 2.1, step 3.1, construct]

5.1 In the chart $x$, a section has product-coordinate expression $p\mapsto(p,C_x(T_p))$, so it is smooth exactly when these component functions are smooth, by [F4]. If the components are smooth on one smooth atlas, every other smooth chart is covered by overlaps with that atlas. Step 2.1 expresses its components on each overlap as finite sums of products of the original smooth components and smooth transition coefficients, composed with the base coordinate changes; [F3] makes them smooth. Smoothness is local, so they are smooth on the entire new chart. The converse is immediate. This proves the section criterion and all the claims. [F3, F4, step 2.1, step 4.1] ∎
