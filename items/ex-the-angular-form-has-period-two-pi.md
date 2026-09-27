---
id: ex-the-angular-form-has-period-two-pi
title: "The angular period and the obstruction to bounding"
kind: example
status: published
origin: pipeline
deps: ["cor-a-nonzero-period-obstructs-exactness-and-bounding", "prop-integration-of-top-forms-by-finite-parametrizations", "def-countable-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-04-maintenance-receipts.jsonl (ex-the-angular-form-has-period-two-pi). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: "Lee Example 16.16 and Corollary 16.15, p.415"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: "Direct calculation and localization"
---
## Example

Assume countable choice $\mathrm{AC}_\omega$. On $\mathbb R^2\setminus\{0\}$ let
$$\omega=\frac{-y\,dx+x\,dy}{x^2+y^2}.$$
Its integral over the counterclockwise unit circle is $2\pi$. Therefore that circle cannot be the induced oriented boundary of a compact oriented embedded smooth surface contained in the punctured plane; the form is also not exact there.

## Facts & Assumptions

[A1] Countable choice is [[def-countable-choice]]; it is used for the global Stokes and embedded-submanifold integration route in [F1].

[F1] [[cor-a-nonzero-period-obstructs-exactness-and-bounding]]: Under $\mathrm{AC}_\omega$, if $S\hookrightarrow M$ is an oriented compact boundaryless embedded $k$-submanifold, $k\geq1$, and $\omega$ is a closed smooth $k$-form on $M$ with $\int_S\omega\neq0$, then $\omega$ is not exact on $M$ and $S$ cannot be the induced oriented boundary of a compact embedded $(k+1)$-submanifold of $M$.

[F2] [[prop-integration-of-top-forms-by-finite-parametrizations]]: Let $n\geq1$, let $M^n$ be oriented, and let $\omega\in\Omega_c^n(M)$. For $1\leq i\leq m$ let $D_i\subset\mathbb R^n$ be bounded open Jordan domains and $F_i:\overline D_i\to M$ continuous and smooth up to the boundary in target coordinates: near each parameter point, a target coordinate representative extends smoothly to a Euclidean neighborhood. Suppose $F_i|_{D_i}$ is an orientation-preserving diffeomorphism onto an open $W_i\subset M$, the $W_i$ are pairwise disjoint, and $\operatorname{supp}\omega\subset\bigcup_i\overline W_i$. Then $$\int_M\omega=\sum_{i=1}^m\int_{D_i}F_i^*\omega.$$ An empty family is allowed when the support is empty. No nonsingularity of $DF_i$ on $\partial D_i$, and no $M$-valued extension across a genuine target boundary, is assumed.

## Verification

**Given:** $\mathrm{AC}_\omega$ and the objects and hypotheses in the statement above.

1.1 Write $P=-y/(x^2+y^2)$ and $Q=x/(x^2+y^2)$. Direct differentiation gives $Q_x=(y^2-x^2)/(x^2+y^2)^2=P_y$, hence $d\omega=0$ on the punctured plane. The origin is excluded from its domain. [algebra]

1.2 For $c(t)=(\cos t,\sin t)$, $c^*\omega=dt$. The interval $(0,2\pi)$ maps diffeomorphically to the circle minus one point and extends smoothly to its closure. The finite-parametrization formula gives $\int_{S^1}\omega=2\pi$. [F2]

2.1 The circle is compact, embedded, oriented, and boundaryless, with dimension one. Its nonzero period and the closedness calculation meet all hypotheses of the period obstruction, giving both nonexactness and the stated nonbounding conclusion under [A1]. [A1, F1, step 1.1, step 1.2] ∎
