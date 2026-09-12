---
id: "prop-affine-reparametrization-of-a-geodesic-is-a-geodesic"
kind: "proposition"
title: "Affine reparametrization of a geodesic is a geodesic"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-geodesic-of-an-affine-connection","def-riemannian-speed-and-length"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, Remark 15.1.2, pp.113–114
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

If $\gamma:I\to M$ is an affinely parametrized geodesic and $\ell(t)=at+b$ maps an interval $J$ with nonempty interior into $I$, then $\gamma\circ\ell$ is a geodesic. For any supplied Riemannian metric, its speed at $t$ is $|a|$ times the speed of $\gamma$ at $at+b$.

## Facts & Assumptions

**Given:** The geodesic $\gamma$, constants $a,b$, and intervals in the statement.

[F1] [[def-geodesic-of-an-affine-connection]] defines the geodesic equation by $D_s\gamma'=0$.

[F2] [[def-riemannian-speed-and-length]] defines speed as the Riemannian norm of the velocity.

## Proof

1.1 Put $\widetilde\gamma=\gamma\circ\ell$. The ordinary and covariant chain rules give $\widetilde\gamma'(t)=a\gamma'(at+b)$ and $$D_t\widetilde\gamma'=a^2(D_s\gamma')(at+b)=0$$ by [F1]. Hence $\widetilde\gamma$ is geodesic. [F1, given, algebra]

2.1 By homogeneity of the norm in [F2], $|\widetilde\gamma'(t)|=|a|\,|\gamma'(at+b)|$. If $a=0$, the reparametrized curve is constant and both formulas give zero; negative $a$ reverses the parameter and uses the absolute value. Dimensions zero and one require no change, empty manifolds have no curves, and included endpoints use the corresponding one-sided chain rule. The constants and curve are supplied, so no choice principle is used. [F2, step 1.1] ∎
