---
id: ex-the-punctured-euclidean-plane-is-geodesically-incomplete
kind: example
title: The punctured Euclidean plane is geodesically incomplete
status: draft
origin: pipeline
pipeline_run: phase-2-next-17
deps: [def-countable-choice, def-riemannian-metric-and-riemannian-manifold, prop-open-subsets-of-euclidean-space-have-the-standard-smooth-structure, prop-christoffel-formula-for-the-levi-civita-connection, prop-coordinate-geodesic-equation, thm-existence-uniqueness-and-smooth-dependence-of-geodesics, lem-the-geodesic-spray-is-a-well-defined-smooth-vector-field-on-tm, thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves, def-geodesically-complete-riemannian-manifold]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ben Andrews, Geodesics and Completeness, §11.5
      url: https://maths-people.anu.edu.au/andrews/DG/DG_chap11.pdf
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
---

## Example

Assume $\mathrm{AC}_\omega$, as required by the library's current maximal-geodesic and geodesic-completeness suppliers. The punctured Euclidean plane
$$M=\mathbb R^2\setminus\{(0,0)\},$$
with the restricted Euclidean metric, is not geodesically complete. More precisely, the unique maximal geodesic with initial point $(1,0)$ and initial velocity $(-1,0)$ is
$$\gamma:(-\infty,1)\longrightarrow M,\qquad \gamma(t)=(1-t,0),$$
and it has unit speed.

## Facts & Assumptions

**Given:** The subset $M=\mathbb R^2\setminus\{(0,0)\}$, the restriction $g$ of the Euclidean metric, and $\mathrm{AC}_\omega$.

[F1] [[prop-open-subsets-of-euclidean-space-have-the-standard-smooth-structure]] gives every open subset of $\mathbb R^2$ its one-chart smooth structure, and [[def-riemannian-metric-and-riemannian-manifold]] characterizes a Riemannian metric as a smooth positive-definite symmetric covariant two-tensor.

[F2] [[prop-christoffel-formula-for-the-levi-civita-connection]] computes the Levi–Civita symbols from the coordinate metric coefficients.

[F3] [[prop-coordinate-geodesic-equation]] says that a curve is geodesic exactly when its coordinates satisfy $$\ddot x^k+\Gamma^k{}_{ij}(x)\dot x^i\dot x^j=0.$$

[F4] Assuming $\mathrm{AC}_\omega$, [[thm-existence-uniqueness-and-smooth-dependence-of-geodesics]] supplies a unique maximal geodesic on an open interval containing zero for every initial vector.

[F5] [[def-countable-choice]] names the assumed $\mathrm{AC}_\omega$, and [[def-geodesically-complete-riemannian-manifold]] says that a boundaryless Riemannian manifold is geodesically complete exactly when every unique maximal geodesic has domain $\mathbb R$.

[F6] [[lem-the-geodesic-spray-is-a-well-defined-smooth-vector-field-on-tm]] identifies velocity lifts of geodesics with integral curves of the geodesic spray. [[thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves]] gives uniqueness for the local integral-curve initial-value problem.

## Verification

1.1 For $z\in M$, one has $\lVert z\rVert>0$, while the distance from $z$ to the origin is exactly $\lVert z\rVert$; hence the ball of radius $\lVert z\rVert/2$ about $z$ misses the origin, so $M$ is open. By [F1], its identity chart makes it a boundaryless smooth two-manifold. In that chart $g_{ij}=\delta_{ij}$, which is a smooth positive-definite symmetric matrix, so [F1] also makes $(M,g)$ a Riemannian manifold. [F1, given, algebra]

2.1 The coefficients $g_{ij}=\delta_{ij}$ are constant, so [F2] gives $\Gamma^k{}_{ij}=0$ throughout $M$. For $t<1$, the point $\gamma(t)=(1-t,0)$ is nonzero; moreover $\gamma(0)=(1,0)$, $\gamma'(0)=(-1,0)$, $\gamma''(t)=0$, and $\lVert\gamma'(t)\rVert_g=1$. Thus [F3] makes $\gamma:(-\infty,1)\to M$ a unit-speed geodesic with the claimed initial data. [F2, F3, step 1.1, algebra]

3.1 Let $\Gamma:I\to M$ be the unique maximal geodesic with those initial data from [F4]. By [F6], the velocity lifts of $\Gamma$ and $\gamma$ are integral curves of the same smooth spray. On their common interval $J=I\cap(-\infty,1)$, let $E$ be the set of times at which the two lifts agree. It contains $0$, is closed by continuity, and is open by applying the local uniqueness statement in [F6] at any time of agreement after translating that time to zero. Since $J$ is an interval, $E=J$. Thus $\Gamma$ and $\gamma$ agree on their common interval. Their union is therefore a well-defined geodesic on the interval $I\cup(-\infty,1)$, so maximality forces $(-\infty,1)\subseteq I$. If $1\in I$, continuity of $M\hookrightarrow\mathbb R^2$ and the equality for $t<1$ would give $\Gamma(1)=\lim_{t\uparrow1}(1-t,0)=(0,0)\notin M$, a contradiction. Because $I$ is an interval containing zero, it cannot contain a time greater than $1$ without containing $1$. Hence $I\subseteq(-\infty,1)$ and therefore $I=(-\infty,1)$. [F4, F6, step 2.1]

4.1 The maximal interval in step 3.1 is not $\mathbb R$, so [F5] makes $(M,g)$ geodesically incomplete. The witness has a finite excluded upper endpoint, while $M$ itself is nonempty and boundaryless; its starting velocity is nonzero and has norm one. The formula for $\gamma$, its geodesic calculation, and the extension obstruction make no choices. The sole use of $\mathrm{AC}_\omega$ is through [F4] and [F5], whose current library formulations use it to supply and name unique maximal geodesics. [F5, step 1.1, step 2.1, step 3.1, given] ∎

## Source locator

Andrews, §11.5, Theorem 11.5.1 and its proof, printed pp. 106–108 (PDF pp. 6–8), state the equivalence between metric completeness and indefinite geodesic extension and prove the metric-limit continuation direction. The complete eight-page chapter does not state a punctured-plane example. The explicit manifold, geodesic, maximal interval, and obstruction above are supplied locally and are not attributed to Andrews.
