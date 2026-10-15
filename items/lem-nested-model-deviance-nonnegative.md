---
id: lem-nested-model-deviance-nonnegative
kind: lemma
title: Nested-model deviance is nonnegative
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 5
deps:
  - def-nested-model-deviance
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "MIT 18.650 Statistics for Applications, Lecture 10: GLM likelihood background; the inequality is proved locally"
      url: "https://ocw.mit.edu/courses/18-650-statistics-for-applications-fall-2016/dff89368051a5feae72b39c6422d0752_MIT18_650F16_GLM.pdf"
---

## Statement

For the deviance in [[def-nested-model-deviance]], $D(y)\ge0$.

## Facts & Assumptions

**Given:** Nonempty nested parameter sets $\Theta_{\mathrm{fit}}\subseteq\Theta_{\mathrm{sat}}$, a common log likelihood $\ell(\beta;y)$, and finite real suprema.

[F1] [[def-nested-model-deviance]]: $D(y)=2\{\sup_{\Theta_{\mathrm{sat}}}\ell(\beta;y)-\sup_{\Theta_{\mathrm{fit}}}\ell(\beta;y)\}$ and $\Theta_{\mathrm{fit}}\subseteq\Theta_{\mathrm{sat}}$.

## Proof

1.1 Every value $\ell(\beta;y)$ with $\beta\in\Theta_{\mathrm{fit}}$ is also among the values over $\Theta_{\mathrm{sat}}$ by [F1]. Therefore $\sup_{\Theta_{\mathrm{fit}}}\ell(\beta;y)\le\sup_{\Theta_{\mathrm{sat}}}\ell(\beta;y)$. [F1, given]

2.1 The suprema are finite real numbers by the definition's hypotheses, so their ordered difference is nonnegative; multiplying by $2>0$ gives $D(y)\ge0$. [F1, step 1.1, algebra] ∎