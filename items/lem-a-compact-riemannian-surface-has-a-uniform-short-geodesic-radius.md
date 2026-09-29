---
id: lem-a-compact-riemannian-surface-has-a-uniform-short-geodesic-radius
kind: lemma
title: Uniform short-geodesic scale on a compact surface
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-riemannian-metric-and-riemannian-manifold
  - def-geodesic-of-an-affine-connection
  - def-riemannian-speed-and-length
  - lem-a-compact-surface-metric-extends-across-its-boundary
  - def-regular-oriented-surface-region-with-piecewise-smooth-boundary
  - def-countable-choice
  - thm-existence-of-geodesically-convex-neighborhoods
  - def-extended-riemannian-distance-on-a-disconnected-manifold
  - prop-components-of-a-topological-manifold-are-open-and-at-most-countable
  - thm-the-riemannian-distance-topology-is-the-manifold-topology
  - thm-closed-subspace-of-a-compact-space-is-compact
  - def-riemannian-distance-on-a-connected-manifold
  - lem-finite-choice
  - thm-lebesgue-number-lemma
  - thm-collar-neighborhood-theorem
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "Ved Datar, Lectures on Riemannian Geometry"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Theorem 18.0.1, printed p. 133 (PDF p. 141), lines 7810–7813, and §18.2, printed pp. 136–138 (PDF pp. 144–146), lines 8013–8050: local short minimizing geodesics. Remark 18.0.3 says convex containment follows by refinement; the exit-from-the-normal-ball case is brief."
    - title: "Jürgen Jost, Compact Riemann Surfaces: An Introduction to Contemporary Mathematics"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/jost.pdf"
      locator: "§2.3.A, Corollary 2.3.A.1, printed p. 36 (PDF p. 49), lines 2049–2060, states a uniform short-geodesic scale for compact metric surfaces. Context only: its compact boundaryless hypothesis does not cover the boundary and corner cases proved here, and its proof is not used."
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $K$ be either (i) a compact smooth Riemannian
surface with smooth boundary, identified with either labelled copy in its smooth
double and equipped with the open metric-extension neighbourhood $N$ supplied
by [[lem-a-compact-surface-metric-extends-across-its-boundary]], or (ii) a
compact regular oriented surface region with ordinary corners in a supplied
boundaryless ambient Riemannian surface $N$. In both cases regard $K$ as a
compact subset of the boundaryless Riemannian manifold $N$. Write $d_N$ for the
componentwise Riemannian distance, with value $+\infty$ between distinct
connected components.

If $K\ne\varnothing$, there are finitely many open strongly geodesically
convex sets $V_1,\ldots,V_m\subseteq N$ covering $K$ and a number $r>0$ such
that whenever $p,q\in K$ satisfy $d_N(p,q)<3r$, some selected $V_i$ contains
both points. There is a unique affinely parametrized ambient geodesic
$\gamma:[0,1]\to N$ from $p$ to $q$ that globally minimizes length; it lies
in that $V_i$ and satisfies $L_N(\gamma)=d_N(p,q)<3r$. When $p=q$, this
geodesic is constant. If $K=\varnothing$, take the empty cover and any $r>0$.

For a smooth boundary, the collar lies on the chosen side in the double and
gives half-neighbourhoods there; for a cornered region, the supplied
half-disk and wedge charts give the domain-side neighbourhoods. The short
geodesics above are ambient geodesics and are not asserted to remain in $K$.
Any later finite network using this lemma must retain the supplied smooth
boundary arcs as prescribed edges rather than replacing them by ambient
geodesics.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a supplied Riemannian metric, and one of the two compact surface inputs in the Statement.

[A1] $\mathrm{AC}_\omega$ says that every family $(X_n)_{n\in\mathbb N}$ of nonempty sets has a choice function ([[def-countable-choice]]).

[F1] For a compact smooth surface with boundary, the metric on either chosen labelled copy extends to a smooth Riemannian metric on an open neighbourhood of that copy in the smooth double ([[lem-a-compact-surface-metric-extends-across-its-boundary]]).

[F2] A regular region has boundary half-disk charts along smooth arcs and sector charts at its vertices ([[def-regular-oriented-surface-region-with-piecewise-smooth-boundary]]).

[F3] Under [A1], every point of a boundaryless Riemannian manifold has a strongly geodesically convex neighbourhood, which may be chosen inside any prescribed open neighbourhood; its connector is the unique affinely parametrized globally length-minimizing geodesic ([[thm-existence-of-geodesically-convex-neighborhoods]]).

[F4] On a disconnected manifold, the extended distance is the Riemannian distance within each component and $+\infty$ between distinct components ([[def-extended-riemannian-distance-on-a-disconnected-manifold]]).

[F5] Connected components of a topological manifold are open ([[prop-components-of-a-topological-manifold-are-open-and-at-most-countable]]).

[F6] On each connected Riemannian component, its Riemannian distance induces the manifold topology ([[thm-the-riemannian-distance-topology-is-the-manifold-topology]]).

[F7] A closed subspace of a compact topological space is compact ([[thm-closed-subspace-of-a-compact-space-is-compact]], claim 1).

[F8] Every open cover of a compact metric space has a positive Lebesgue number: every nonempty subset whose diameter is smaller than it lies in one cover member ([[thm-lebesgue-number-lemma]]).

[F9] Under [A1], every smooth manifold with boundary has a smooth collar ([[thm-collar-neighborhood-theorem]]).

[F10] A Riemannian metric is a smooth positive-definite symmetric covariant two-tensor ([[def-riemannian-metric-and-riemannian-manifold]]).

[F11] Every natural-number-indexed finite family of nonempty sets has a choice function in ZF ([[lem-finite-choice]]).

[F12] On a connected Riemannian manifold, $d_g(p,q)$ is the infimum of the lengths of piecewise $C^1$ curves from $p$ to $q$ ([[def-riemannian-distance-on-a-connected-manifold]]).

[F13] A constant smooth curve is an affinely parametrized geodesic ([[def-geodesic-of-an-affine-connection]]).

[F14] Riemannian speed is the nonnegative square root of $g(\dot\gamma,\dot\gamma)$, curve length is the sum of its speed integrals, and a constant curve has length zero ([[def-riemannian-speed-and-length]]).

## Proof

**Proof technique:** take all local convex neighborhoods, extract a finite cover, and apply Lebesgue numbers on the finitely many ambient components meeting $K$.

1.1 If $K$ has smooth boundary, use [A1] and [F1] to identify its chosen labelled copy with a compact subset of a boundaryless open Riemannian neighbourhood $N$ in the double. If $K$ is a regular cornered region, use its supplied ambient surface as $N$; [F10] ensures its metric is positive definite. If $K=\varnothing$, the empty family and any positive $r$ satisfy the Statement. Assume from now on that $K\ne\varnothing$. [A1, F1, F10, given]

2.1 By [F5], the connected components of $N$ are open and cover $K$. Compactness of $K$ gives finitely many components meeting it; list them as $C_1,\ldots,C_s$. For each $j$, put $K_j=K\cap C_j$. Its complement in $K$ is the union of the other open components intersected with $K$, so $K_j$ is closed in $K$ and compact by [F7]. Each $K_j$ is nonempty by the choice of the list. [F5, F7, step 1.1]

3.1 On each $C_j$, [F4] is a finite metric and [F6] identifies its metric topology with the manifold topology. Thus $K_j$, with the restricted distance, is a compact metric space. No finite distance or minimizing assertion is made for points in different components. [F4, F6, step 2.1]

3.2 For each $p\in K$, its component $C_j$ is open. Apply the relative form of [F3] with prescribed open set $C_j$ to obtain a strongly geodesically convex open set $V\subseteq C_j$. The collection of all such open sets is a set and covers $K$; compactness gives a finite subcover $V_1,\ldots,V_m$. This uses no selection from an uncountable family: all admissible neighborhoods are considered at once, and compactness supplies a finite subfamily. [A1, F3, step 2.1]

4.1 For each compact metric space $K_j$, the sets $V_i\cap K_j$ form an open cover. By [F8] each has a positive Lebesgue number; use [F11] to choose one $\delta_j$ for each of the finitely many indices. Let $\delta=\min_{1\le j\le s}\delta_j$ and set $r=\delta/4$. These are positive, and $3r<\delta_j$ for every $j$. [F8, F11, step 2.1, step 3.2]

5.1 Let $p,q\in K$ with $d_N(p,q)<3r$. They belong to the same component $C_j$, and the subset $\{p,q\}\subseteq K_j$ has diameter less than $3r<\delta_j$. By the Lebesgue property it is contained in some $V_i$. If $p=q$, the constant curve is an affinely parametrized geodesic by [F13]; it has length zero by [F14], and all competitor lengths are nonnegative by [F14], so it globally minimizes. Theorem [F3] gives uniqueness, hence this is the connector. For every such pair, [F3] supplies the unique affinely parametrized globally length-minimizing geodesic from $p$ to $q$ and places it in $V_i$. By [F12], $d_N(p,q)$ is the infimum of lengths of piecewise $C^1$ competitors in that component; since this connector globally minimizes among them, its length equals $d_N(p,q)<3r$. [F3, F4, F8, F12, F13, F14, step 3.1, step 4.1]

6.1 In the smooth-boundary case [F9] gives a collar on the chosen copy; its image lies in $K\subseteq N$, so boundary points have one-sided collar neighbourhoods in the extension. In the cornered case [F2] supplies the half-disk and wedge charts inside the given ambient surface. These are domain-side data only, and step 5.1 does not imply its ambient connectors remain in $K$. Later network arguments that use those connectors must retain the supplied smooth boundary arcs as prescribed edges. [F1, F2, F9, step 1.1, step 5.1]

7.1 The use of $\mathrm{AC}_\omega$ is inherited exactly through [F1] for the smooth-boundary metric extension, [F3] for convex neighborhoods, and [F9] for the collar. The family of all admissible neighborhoods in step 3.2 is a set; compactness supplies its finite subcover and the finite component list. The finite list of Lebesgue numbers uses only [F11], and finite minima add no choice; [F8] is choice-free. The empty case is settled in step 1.1, and the zero-distance case in step 5.1. A one-dimensional input is outside the surface hypotheses; positive definiteness excludes metric degeneracy, and distinct components have infinite extended distance by [F4]. The geodesic includes both parameter endpoints $0$ and $1$ by [F3]. The Statement contains no equivalence. [A1, F1, F3, F4, F5, F7, F8, F9, F10, F11, step 1.1, step 2.1, step 3.1, step 3.2, step 4.1, step 5.1, step 6.1] ∎

## Source locator

Datar, *Lectures on Riemannian Geometry*, Theorem 18.0.1, printed p. 133 (PDF p. 141), lines 7810–7813, and §18.2, printed pp. 136–138 (PDF pp. 144–146), lines 8013–8050, treats local short geodesics and minimality; Remark 18.0.3 says containment in the chosen convex set follows by refinement, and the displayed exit-from-the-normal-ball case is brief. This proof relies on the complete library argument [F3]. Jost, *Compact Riemann Surfaces*, §2.3.A, Corollary 2.3.A.1, printed p. 36 (PDF p. 49), lines 2049–2060, states a compact metric surface version of a uniform short-geodesic scale; its compact boundaryless hypothesis does not cover the boundary and corner cases here, and its proof is not used. The common radius over the present compact subset comes directly from the componentwise Lebesgue-number argument in steps 2.1–5.1.
