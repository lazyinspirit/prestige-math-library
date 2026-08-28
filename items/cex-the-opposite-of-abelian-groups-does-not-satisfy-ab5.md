---
id: cex-the-opposite-of-abelian-groups-does-not-satisfy-ab5
kind: counterexample
title: "The opposite of abelian groups does not satisfy AB5"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cex-abelian-groups-do-not-satisfy-ab5-star, thm-the-opposite-of-an-abelian-category-is-abelian]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Appendix A.4"
      url: "https://math.mit.edu/~hrm/palestine/weibel/A-category_theory_language.pdf"
pipeline_run: frontier-22
---

## Statement refuted

The opposite category $\mathbf{Ab}^{\mathrm{op}}$ satisfies AB5.

## Facts & Assumptions

**Given:** The abelian category $\mathbf{Ab}$.

[L1] The category $\mathbf{Ab}$ does not satisfy AB5*
([[cex-abelian-groups-do-not-satisfy-ab5-star]]).

[L2] The opposite of an abelian category is abelian
([[thm-the-opposite-of-an-abelian-category-is-abelian]]).

## Counterexample

1.1 By [L2], the opposite category $\mathbf{Ab}^{\mathrm{op}}$ is again abelian. Passing to the opposite exchanges joins with meets and AB5 with AB5*. [L2, algebra]
2.1 If $\mathbf{Ab}^{\mathrm{op}}$ satisfied AB5, then $\mathbf{Ab}$ would satisfy AB5*. This contradicts [L1]. Therefore $\mathbf{Ab}^{\mathrm{op}}$ does not satisfy AB5. [L1, step 1.1] ∎