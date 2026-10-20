---
id: ex-zero-loss-finite-grid-risk-control
kind: example
title: "The all-zero loss boundary"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-finite-nested-decision-family-and-bounded-risk
  - alg-finite-grid-conformal-risk-control
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Anastasios N. Angelopoulos, Stephen Bates, Adam Fisch, Lihua Lei, and Tal Schuster, Conformal Risk Control, arXiv:2208.02814v4"
      url: "https://arxiv.org/pdf/2208.02814v4"
      locator: "§1.1, B-corrected finite-sample calibration rule and fallback."
---

## Example

Let $n,M\ge1$, $B>0$, $\alpha\in[0,B)$, and let every calibration and test loss be zero at every grid point. The rule passes at the first grid point exactly when $\alpha\ge B/(n+1)$; when $\alpha<B/(n+1)$ it returns the maximum-grid fallback. In either case the selected test loss is zero and its expected risk is zero.

## Example references

[[def-finite-nested-decision-family-and-bounded-risk]]: the bounded finite-grid risk setup.

[[alg-finite-grid-conformal-risk-control]]: the B-corrected pass test and fallback.

[Angelopoulos et al., Conformal Risk Control, §1.1](https://arxiv.org/pdf/2208.02814v4)

## Facts & Assumptions

**Given:** The finite grid, the all-zero calibration and test losses, $B>0$, and $\alpha\in[0,B)$.

[F1] The risk family uses a finite deterministic grid and bounded measurable loss rows; expected test risk is the expectation of the selected test loss. [[def-finite-nested-decision-family-and-bounded-risk]]

[F2] The algorithm selects the first grid point whose B-corrected calibration average is at most $\alpha$, and falls back to the maximum point if none passes. [[alg-finite-grid-conformal-risk-control]]

## Verification

1.1 At every grid point, the calibration threshold is $(0+B)/(n+1)=B/(n+1)$. Hence, if $\alpha\ge B/(n+1)$ the first point passes, while if $\alpha<B/(n+1)$ every point fails and the algorithm returns the fallback. [given, F2, algebra]

2.1 The test loss is zero at every grid point, including the first point and the fallback. Its expectation is therefore $0$, which is at most $\alpha$ because $\alpha\ge0$. [given, F1, step 1.1, algebra] ∎
