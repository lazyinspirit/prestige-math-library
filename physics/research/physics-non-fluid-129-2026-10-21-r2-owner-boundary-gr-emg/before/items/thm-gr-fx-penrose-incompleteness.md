---
id: thm-gr-fx-penrose-incompleteness
kind: theorem
title: "Penrose null geodesic incompleteness"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 5
physical_scope: "A conditional Lorentzian-geometric theorem. The null Ricci inequality is assumed directly; no Einstein equation, matter-energy condition, event horizon, curvature blow-up, or singular point in the manifold is concluded."
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-gr-causal-conditions-and-global-hyperbolicity
  - def-gr-causal-curves-and-reachability
  - def-gr-future-and-past-sets
  - def-gr-spacelike-hypersurfaces-and-cauchy-sets
  - def-gr-fx-future-null-geodesic-completeness
  - def-gr-fx-trapped-surface-and-black-region
  - lem-gr-achronal-boundaries-lipschitz-graphs
  - lem-gr-fx-cauchy-slices-are-diffeomorphic
  - lem-gr-fx-trapped-boundary-compactness
  - lem-gr-temporal-functions-and-time-functions
  - lem-gr-finite-smooth-volume-density
  - thm-gr-smooth-cauchy-temporal-splitting
  - thm-gr-volume-time-function
  - thm-invariance-of-domain
  - thm-compactness-under-continuous-maps
  - thm-compact-subset-of-a-hausdorff-space-is-closed
  - def-hausdorff-space
  - def-connected-space
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  thm-choice-implies-dependent-implies-countable-choice: mathematical-premise
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-future-and-past-sets: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-gr-fx-future-null-geodesic-completeness: mathematical-premise
  def-gr-fx-trapped-surface-and-black-region: mathematical-premise
  lem-gr-achronal-boundaries-lipschitz-graphs: mathematical-premise
  lem-gr-fx-cauchy-slices-are-diffeomorphic: mathematical-premise
  lem-gr-fx-trapped-boundary-compactness: mathematical-premise
  lem-gr-temporal-functions-and-time-functions: mathematical-premise
  lem-gr-finite-smooth-volume-density: mathematical-premise
  thm-gr-smooth-cauchy-temporal-splitting: mathematical-premise
  thm-gr-volume-time-function: mathematical-premise
  thm-invariance-of-domain: mathematical-premise
  thm-compactness-under-continuous-maps: mathematical-premise
  thm-compact-subset-of-a-hausdorff-space-is-closed: mathematical-premise
  def-hausdorff-space: mathematical-premise
  def-connected-space: mathematical-premise
aliases: []
proof_strategy: contradiction
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Edward Witten, Light Rays, Singularities, and All That, Clay Mathematics Institute lecture notes, arXiv:1901.03928v6 (2023), §§5.2–5.6, latest v6 PDF (107 pages)."
      url: "https://arxiv.org/pdf/1901.03928v6"
    - title: "José M. M. Senovilla and David Garfinkle, The 1965 Penrose singularity theorem, Classical and Quantum Gravity 32 (2015), 124008, arXiv:1410.5226v2, §4.1, §4.2 and Theorem 2."
      url: "https://arxiv.org/pdf/1410.5226"
    - title: "José Luis Jaramillo, Juan Antonio Valiente Kroon, and Éric Gourgoulhon, From Geometry to Numerics: Interdisciplinary Aspects in Mathematical and Numerical Relativity, arXiv:0712.2332v2 (2008), §§2.1–2.2, full 72-page PDF."
      url: "https://arxiv.org/pdf/0712.2332"
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Choice. Let $(M,g,N)$ be a smooth time-oriented Lorentzian four-manifold of signature $(-,+,+,+)$ that is globally hyperbolic (strongly causal with compact causal diamonds). Let $\Sigma\subset M$ be a connected noncompact smooth spacelike Cauchy hypersurface, meaning that every inextendible causal curve meets $\Sigma$ exactly once. Let $S\subset M$ be a nonempty compact smooth spacelike two-surface on which both future null expansions are negative for the two local future null normal rays. Assume directly that $\operatorname{Ric}_p(v,v)\ge0$ for every point $p\in M$ and every null vector $v\in T_pM$. Then $(M,g,N)$ is future null geodesically incomplete: at least one maximal future-directed affinely parametrized null geodesic has an affine parameter interval with finite upper endpoint. This conclusion asserts no curvature divergence or singular point belonging to $M$.

## Statement references

[[def-axiom-of-choice]]

[[def-gr-causal-conditions-and-global-hyperbolicity]]

[[def-gr-spacelike-hypersurfaces-and-cauchy-sets]]

[[def-gr-fx-trapped-surface-and-black-region]]

[[def-gr-fx-future-null-geodesic-completeness]]

[[def-gr-fx-future-null-geodesic-completeness]]

[[lem-gr-fx-trapped-boundary-compactness]]

[[lem-gr-fx-cauchy-slices-are-diffeomorphic]]

[[lem-gr-achronal-boundaries-lipschitz-graphs]]

[[lem-gr-temporal-functions-and-time-functions]]

[[lem-gr-finite-smooth-volume-density]]

[[thm-gr-volume-time-function]]

[[thm-gr-smooth-cauchy-temporal-splitting]]

[[thm-invariance-of-domain]]

## Facts & Assumptions

**Given:** Axiom of Choice; a globally hyperbolic time-oriented smooth Lorentzian four-manifold; a connected noncompact smooth spacelike Cauchy hypersurface $\Sigma$; a compact future trapped surface $S$; and the pointwise null Ricci inequality.

[A1] [[def-axiom-of-choice]]: AC is the assertion that every family of nonempty sets has a choice function.

[F1] [[thm-choice-implies-dependent-implies-countable-choice]]: in ZF, $\mathrm{AC}\Rightarrow\mathrm{DC}\Rightarrow\mathrm{AC}_\omega$, so the Countable Choice and Dependent Choice hypotheses of the causal suppliers follow from [A1].

[F2] [[lem-gr-finite-smooth-volume-density]], [[thm-gr-volume-time-function]], and [[thm-gr-smooth-cauchy-temporal-splitting]]: under Countable Choice and Dependent Choice, a nonempty time-oriented smooth Lorentzian four-manifold has a normalized smooth volume measure; global hyperbolicity and that measure give the volume time input required by the splitting theorem; the latter then gives a smooth temporal function $T$ with Cauchy levels and a complete future timelike flow diffeomorphism $\Psi:\mathbb R\times S_0\to M$ satisfying $T(\Psi(s,z))=s$.

[F3] [[lem-gr-fx-cauchy-slices-are-diffeomorphic]]: for this complete timelike product flow, projection along its flow lines identifies any smooth spacelike Cauchy hypersurface $\Sigma$ diffeomorphically with the slice $S_0$. Thus $S_0$ is connected and noncompact.

[F4] [[lem-gr-fx-trapped-boundary-compactness]]: under the stated trapped-surface, null Ricci, global-hyperbolicity, and future-null-completeness assumptions, $E^+(S)=\partial I^+(S)$ is a compact topological three-manifold without boundary.

[F5] [[lem-gr-achronal-boundaries-lipschitz-graphs]]: the boundary of an open future set is achronal; in particular no two distinct points of $E^+(S)=\partial I^+(S)$ are chronologically related.

[F6] [[lem-gr-temporal-functions-and-time-functions]]: a temporal function strictly increases along every nonconstant future causal curve, hence along every future timelike curve.

[F7] [[thm-invariance-of-domain]]: assuming AC, a continuous injective map between open subsets of $\mathbb R^3$ has open image; applying this in charts makes a continuous injective map between topological three-manifolds an open map.

[F8] [[thm-compactness-under-continuous-maps]]: a continuous real-valued map on a nonempty compact space attains its minimum, and a continuous image of a compact space is compact.

[F9] [[thm-compact-subset-of-a-hausdorff-space-is-closed]] and [[def-connected-space]]: compact subsets of a Hausdorff space are closed, and a nonempty subset that is both open and closed in a connected space is the whole space.

[F10] [[def-gr-fx-future-null-geodesic-completeness]]: future null geodesic incompleteness means the existence of a maximal future null affine interval with finite upper endpoint.

[A2] The inequality $\operatorname{Ric}(v,v)\ge0$ for null $v$ is a direct mathematical premise. It is not derived from a matter model, energy condition, or Einstein equation.

## Proof

**Proof technique:** contradiction.

**Given:** [A1]–[A2] and [F1]–[F10]. Assume, for contradiction, that every future-directed null geodesic is future complete.

1.1 Assume for contradiction that every future-directed null geodesic is future complete. By [F1], Countable Choice and Dependent Choice hold under the assumed Axiom of Choice, so the hypotheses of the volume-time, Cauchy-splitting and causal-boundary suppliers are satisfied. [A1, F1, assume-contra, given]

2.1 Apply [F2] to obtain a volume time input, a temporal function $T$, a smooth Cauchy slice $S_0=T^{-1}(0)$, and a complete timelike product flow $\Psi$. The splitting satisfies $T(\Psi(s,z))=s$. Hence $T$ tends to $+\infty$ and $-\infty$ along the two ends of every orbit; continuity prevents an endpoint in $M$, so each orbit is an inextendible timelike curve. [F2, step 1.1, given]

3.1 Apply [F3] to identify the given hypersurface $\Sigma$ diffeomorphically with $S_0$ by projection along these flow lines. Therefore $S_0$ is connected and noncompact. [F3, step 2.1, given]

3.2 The restriction $T|_S$ is continuous and $S$ is nonempty compact, so [F8] gives a point $s_0\in S$ at which $T|_S$ is minimal. If $s_0\in I^+(S)$, some $s_1\in S$ satisfies $s_1\ll s_0$; since $T$ is temporal, [F6] gives $T(s_1)<T(s_0)$, contradicting minimality. Thus $s_0\notin I^+(S)$. As $s_0\in S\subseteq J^+(S)$ by reflexivity, $s_0\in E^+(S)$, so this boundary is nonempty. [F2, F4, F6, F8, step 2.1, given, contradiction]

3.3 Define $\pi:M\to S_0$ by $\pi(\Psi(s,z))=z$. This is continuous because $\Psi^{-1}$ is smooth. If $x,y\in E^+(S)$ have $\pi(x)=\pi(y)$ and $x\ne y$, their flow coordinates differ, so the timelike orbit between them makes them chronologically related. This contradicts the achronality in [F5]. Hence $\pi|_{E^+(S)}$ is injective. [F2, F5, step 2.1, given, construct]

4.1 The domain $E^+(S)$ is a topological three-manifold without boundary by [F4], and $S_0$ is a smooth three-manifold by [F2]. For each $x\in E^+(S)$, choose manifold charts about $x$ and $\pi(x)$ and shrink the source chart so its image lies in the target chart. In these coordinates $\pi$ is continuous and injective between open subsets of $\mathbb R^3$; [F7] makes its image open. Taking the union over $x$ shows $\pi(E^+(S))$ is open in $S_0$. [F2, F4, F7, step 3.3, construct]

4.2 By [F4], $E^+(S)$ is compact, and $\pi$ is continuous, so [F8] makes $\pi(E^+(S))$ compact. The smooth manifold $S_0$ is Hausdorff; [F9] therefore makes this image closed in $S_0$. [F2, F4, F8, F9, step 3.3]

5.1 The image $\pi(E^+(S))$ is nonempty by step 3.2 and both open and closed by steps 4.1 and 4.2. Since $S_0$ is connected by step 3.1, [F9] implies $\pi(E^+(S))=S_0$. But $\pi(E^+(S))$ is compact by step 4.2, which would make $S_0$ compact, contradicting step 3.1. Thus the assumed future null completeness is false. By [F10], at least one maximal future-directed null geodesic has finite upper affine endpoint, which is the asserted conclusion. [F9, F10, step 3.1, step 3.2, step 4.1, step 4.2, contradiction, discharge-contradiction] ∎
## Remarks

The null Ricci condition is a geometric hypothesis in the library curvature convention; it is not silently replaced by an Einstein equation or a matter energy condition. The conclusion is affine incompleteness only. It neither identifies an incomplete endpoint inside $M$ nor asserts curvature blow-up, cosmic censorship, or the existence of an event horizon. A trapped surface is not itself an event horizon; that comparison requires separate asymptotic and global hypotheses.
