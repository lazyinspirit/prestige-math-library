---
id: thm-abelian-groups-satisfy-ab4-star
kind: theorem
title: "Assuming the Axiom of Choice, abelian groups satisfy AB4*"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-the-axioms-ab4-and-ab4-star, def-axiom-of-choice]
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

Assume the Axiom of Choice. Then the abelian category $\mathbf{Ab}$ satisfies
AB4*.

## Facts & Assumptions

**Given:** The Axiom of Choice and a small family of epimorphisms of abelian groups $e_i:A_i\twoheadrightarrow B_i$.

[L1] AB4* means that small products of epimorphisms remain epimorphic ([[def-the-axioms-ab4-and-ab4-star]]).

[L2] The Axiom of Choice gives a choice function for every family of nonempty sets ([[def-axiom-of-choice]]).

[F1] In $\mathbf{Ab}$, epimorphisms are exactly surjective homomorphisms.

## Proof

**Proof technique:** direct.

1.1 Let $b=(b_i)\in\prod_i B_i$. By [F1], each $e_i$ is surjective, so every fibre $e_i^{-1}(b_i)$ is nonempty. By [L2], choose $a_i\in A_i$ with $e_i(a_i)=b_i$ for every index $i$. Then $a=(a_i)\in\prod_i A_i$ satisfies $$(\prod_i e_i)(a)=b.$$ So $\prod_i e_i$ is surjective, hence epic in $\mathbf{Ab}$. [L2, F1, construct]

2.1 This is exactly the AB4* condition of [L1]. Therefore, assuming the Axiom of Choice, $\mathbf{Ab}$ satisfies AB4*. [L1, step 1.1] ∎
