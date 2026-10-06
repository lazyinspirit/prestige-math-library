---
id: prop-suspension-holonomy-is-the-germ-of-the-monodromy-action
kind: proposition
title: "Suspension holonomy is the germ of the represented monodromy action"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 5
deps:
  - def-suspension-foliation-of-a-group-action
  - prop-quotient-foliation-under-a-free-proper-foliated-action
  - def-local-transversal-to-a-regular-foliation
  - def-leaf-of-a-regular-foliation
  - def-plaque-of-a-flat-chart
  - lem-holonomy-germ-is-independent-of-the-foliation-chart-chain
  - thm-holonomy-depends-only-on-leafwise-homotopy-relative-endpoints
  - lem-holonomy-respects-path-concatenation-and-reversal
  - thm-orbit-map-of-a-covering-space-action-is-a-covering
  - thm-deck-group-of-a-universal-cover-is-the-fundamental-group
  - def-universal-covering-space
  - def-based-loops-and-fundamental-group
  - def-diffeomorphism-and-local-diffeomorphism-of-manifolds
  - def-countable-choice
  - def-holonomy-representation-and-holonomy-group-of-a-leaf
  - thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs)"
      url: "https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf"
    - title: "Eckhard Meinrenken, Lie Groupoids and Lie Algebroids, lecture notes (University of Toronto MAT1341, Fall 2017)"
      url: "https://www.math.toronto.edu/mein/teaching/MAT1341_LieGroupoids/Groupoids.pdf"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]). In the
suspension $M_\rho$ of a representation
$\rho:\pi_1(B,b_0)\to\operatorname{Diff}(F)$ as in
[[def-suspension-foliation-of-a-group-action]] let $\gamma:[0,1]\to B$ be a
loop at $b_0$ with class $[\gamma]\in\pi_1(B,b_0)$, let $\tilde x=\tilde b_0$ be the fixed point of $\widetilde B$
used for the deck identification in that definition, let $\tilde x_\gamma$ be the lift of $\gamma$ with
$\tilde x_\gamma(0)=\tilde x$, so that $\tilde x_\gamma(1)=[\gamma]\cdot\tilde x$
[[def-based-loops-and-fundamental-group]], and let $y\in F$. Then
$a(t):=\pi(\tilde x_\gamma(t),y)$ is a leafwise path of $F_\rho$, and its
holonomy germ between the local transversal $T=\pi(\{\tilde x\}\times F)$ at the
start and the corresponding slice at the end is the germ at $y$ of
$\rho([\gamma])^{-1}$:
$$h_a=\operatorname{germ}_y\bigl(\rho([\gamma])^{-1}\bigr).$$
Moreover the leaf $L_y=\pi(\widetilde B\times\{y\})$ is diffeomorphic to
$\widetilde B/K_y$ with $K_y=\{\gamma:\rho(\gamma)y=y\}$ the stabiliser of $y$,
and under $\pi_1(L_y)\cong K_y$ the holonomy representation of the leaf
(as a homomorphism with traversal-order loop multiplication) is
$\gamma\mapsto\operatorname{germ}_y(\rho(\gamma))$. The forward-path
holonomy is the inverse germ. Both maps have the same image and kernel.

## Facts & Assumptions

**Given:** A representation $\rho$ of $\pi_1(B,b_0)$ in the diffeomorphism group of $F$, the diagonal action on $\widetilde B\times F$, the quotient $M_\rho=(\widetilde B\times F)/\pi_1(B,b_0)$ with orbit map $\pi$ and suspension foliation $F_\rho$, a loop $\gamma$ at $b_0$, a point $\tilde x\in\widetilde B$ over $b_0$, its lift $\tilde x_\gamma$ with $\tilde x_\gamma(1)=[\gamma]\cdot\tilde x$, and a point $y\in F$.

[F1] In the suspension the quotient $M_\rho$ is a smooth manifold, $\pi$ is a covering map and a local diffeomorphism, and the product foliation of $\widetilde B\times F$ with leaves $\widetilde B\times\{y'\}$ descends to the regular foliation $F_\rho$ whose leaves are the images of those product leaves ([[def-suspension-foliation-of-a-group-action]], [[prop-quotient-foliation-under-a-free-proper-foliated-action]]).

[F2] The slice $\{\tilde x\}\times F$ is a local transversal to the product foliation at each of its points: the product foliation has tangent distribution $T\widetilde B\times\{0\}$ and the slice has tangent space $\{0\}\times TF$, a complementary direct summand ([[def-local-transversal-to-a-regular-foliation]], [[def-plaque-of-a-flat-chart]]).

[F3] In a product chart of the product foliation the plaques keep the $F$-coordinate fixed, so the transport between two slices of the form $\{\tilde x_0\}\times F$ and $\{\tilde x_1\}\times F$ along a leafwise path in a leaf $\widetilde B\times\{y\}$ keeps the second coordinate: it sends $(\tilde x_0,y_0)$ to $(\tilde x_1,y_0)$ ([[lem-holonomy-germ-is-independent-of-the-foliation-chart-chain]], [[def-plaque-of-a-flat-chart]]).

[F4] The $\pi_1(B,b_0)$-action on $\widetilde B\times F$ is diagonal, $\gamma_0\cdot(\tilde x_0,y_0)=(\gamma_0\tilde x_0,\rho(\gamma_0)y_0)$, so $(\gamma_0\tilde x_0,y_0)$ and $(\tilde x_0,\rho(\gamma_0)^{-1}y_0)$ lie in the same orbit, and $\pi$ identifies them; moreover $\pi(\tilde x_0,y_0)=\pi(\tilde x_1,y_1)$ holds exactly when $(\tilde x_1,y_1)=\gamma_0\cdot(\tilde x_0,y_0)$ for some $\gamma_0$ ([[def-suspension-foliation-of-a-group-action]], [[prop-quotient-foliation-under-a-free-proper-foliated-action]]).

[F5] Holonomy germs are well defined, invariant under leafwise homotopy relative to endpoints, and multiplicative under concatenation ([[lem-holonomy-germ-is-independent-of-the-foliation-chart-chain]], [[thm-holonomy-depends-only-on-leafwise-homotopy-relative-endpoints]], [[lem-holonomy-respects-path-concatenation-and-reversal]]).

[F7] Intrinsic leaves are integral immersions with plaque charts ([[thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds]]). With traversal-order loop multiplication, the holonomy representation uses the inverse of forward-path holonomy ([[def-holonomy-representation-and-holonomy-group-of-a-leaf]]).

[F6] For a covering-space action of a group $G$ on a path-connected space $E$ the orbit map $E\to E/G$ is a covering whose deck group consists exactly of the transformations supplied by $G$; for a universal cover the deck group is isomorphic to the fundamental group of the base, the isomorphism moving a chosen fibre point to the lifted endpoint of the corresponding loop ([[thm-orbit-map-of-a-covering-space-action-is-a-covering]], [[thm-deck-group-of-a-universal-cover-is-the-fundamental-group]], [[def-universal-covering-space]]).

## Proof

**Proof technique:** direct.

1.1 **The lifted path is leafwise.** The path $\tilde t\mapsto(\tilde x_\gamma(t),y)$ lies in the product leaf $\widetilde B\times\{y\}$; applying the local diffeomorphism $\pi$ by [F1] gives a leafwise path $a(t)=\pi(\tilde x_\gamma(t),y)$ of $F_\rho$. Both $T=\pi(\{\tilde x\}\times F)$ and the end slice $\pi(\{\tilde x_\gamma(1)\}\times F)=\pi(\{[\gamma]\tilde x\}\times F)$ are local transversals to $F_\rho$ at the endpoints, being local diffeomorphic images of the transversals of [F2]. [F1, F2, construct]

1.2 **Transport upstairs.** In the product foliation the transport along the path $t\mapsto(\tilde x_\gamma(t),y)$ from the slice $\{\tilde x\}\times F$ to the slice $\{\tilde x_\gamma(1)\}\times F$ keeps the $F$-coordinate by [F3]: a point $(\tilde x,y_0)$ is sent to $(\tilde x_\gamma(1),y_0)$. [F3]

1.3 **The leaf through $y$.** The restriction $\widetilde B\times\{y\}\to M_\rho$ is tangent to the descended distribution. In the quotient's local product charts it maps into plaque neighborhoods of the intrinsic leaf $L_y$, so it factors smoothly as $\Phi:\widetilde B\to L_y$ and is a local diffeomorphism between manifolds of dimension $\dim B$ by [F7]. By [F4], its fibres are exactly the $K_y$-orbits. The group $K_y$ acts freely and properly discontinuously on $\widetilde B$ by the deck action; the quotient proposition supplies its smooth quotient and orbit local diffeomorphism. Hence $\Phi$ descends to a bijective local diffeomorphism $\widetilde B/K_y\to L_y$, and is a diffeomorphism. In particular $\widetilde B\to L_y$ is the corresponding orbit covering. [F1, F4, F6, F7, construct]


2.1 **Descending the transport.** In $M_\rho$ the point $(\tilde x_\gamma(1),y_0)=([\gamma]\tilde x,y_0)$ is identified by [F4] with $(\tilde x,\rho([\gamma])^{-1}y_0)$. Since $\pi$ is a local diffeomorphism and the holonomy germ of $a$ is computed by transporting along the descended local product structure, which is the corresponding chart-wise transport, the holonomy germ $h_a$ satisfies, after identifying both the start and the end transversal with $F$ through the maps $y_0\mapsto\pi(\tilde x,y_0)$, $$h_a=\operatorname{germ}_y\bigl(y_0\mapsto\rho([\gamma])^{-1}y_0\bigr).$$ [F1, F3, F4, step 1.1, step 1.2]

2.2 **The fundamental group of the leaf.** The group $K_y$ acts on $\widetilde B$ by a covering-space action (the restriction of the deck action, which consists of homeomorphisms over $B$) and $\widetilde B$ is path-connected and simply connected, being a universal cover; the covering $\widetilde B\to\widetilde B/K_y\cong L_y$ is then a universal cover of $L_y$ whose deck group consists exactly of the transformations from $K_y$ by [F6]. Hence $\pi_1(L_y)\cong K_y$. [F6, step 1.3]

3.1 **The holonomy representation of the leaf.** For $\gamma\in K_y$, the projected path associated to a based loop representing $\gamma$ closes because $\rho(\gamma)y=y$, and corresponds to $\gamma$ under step 2.2. Its forward holonomy is $\operatorname{germ}_y(\rho(\gamma)^{-1})$ by step 2.1. The representation in [F7] uses the reversed loop, and thus takes the inverse germ, namely $\operatorname{germ}_y(\rho(\gamma))$. This is a homomorphism on $K_y$; the unreversed transport is an antihomomorphism. [F5, F7, step 1.3, step 2.1, step 2.2]


4.1 **Conclusion.** Steps 1.1 and 2.1 give the stated holonomy germ $h_a=\operatorname{germ}_y(\rho([\gamma])^{-1})$ of a base loop, and steps 1.3, 2.2 and 3.1 give the description of the leaf $L_y$ as $\widetilde B/K_y$ together with its holonomy representation. [step 1.1, step 2.1, step 1.3, step 2.2, step 3.1] ∎
