---
id: fs-ab4-implies-ab5
kind: false-statement
title: "FALSE under the Axiom of Choice: AB4 implies AB5"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-axiom-of-choice, def-the-axioms-ab4-and-ab4-star, cex-the-opposite-of-abelian-groups-does-not-satisfy-ab5, thm-abelian-groups-satisfy-ab4-star, thm-the-opposite-of-an-abelian-category-is-abelian]
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

## Statement

Assume the Axiom of Choice. Then AB4 implies AB5.

## Facts & Assumptions

**Given:** The Axiom of Choice and the opposite category $\mathbf{Ab}^{\mathrm{op}}$.

[A1] The Axiom of Choice ([[def-axiom-of-choice]]).

[L1] The category $\mathbf{Ab}^{\mathrm{op}}$ does not satisfy AB5 ([[cex-the-opposite-of-abelian-groups-does-not-satisfy-ab5]]).

[L2] AB4 is the coproduct-monomorphism axiom ([[def-the-axioms-ab4-and-ab4-star]]).

[L3] Assuming the Axiom of Choice, $\mathbf{Ab}$ satisfies AB4* ([[thm-abelian-groups-satisfy-ab4-star]]).

[L4] The opposite of an abelian category is abelian ([[thm-the-opposite-of-an-abelian-category-is-abelian]]).

## Refutation

1.1 By [L4], the opposite category $\mathbf{Ab}^{\mathrm{op}}$ is abelian. Passing to the opposite exchanges AB4 with AB4*, so [L3] implies that $\mathbf{Ab}^{\mathrm{op}}$ satisfies AB4 in the sense of [L2]. [L2, L3, L4, algebra]

2.1 But [L1] shows that $\mathbf{Ab}^{\mathrm{op}}$ does not satisfy AB5. So, even under [A1], AB4 does not imply AB5. [A1, L1, step 1.1] ∎
