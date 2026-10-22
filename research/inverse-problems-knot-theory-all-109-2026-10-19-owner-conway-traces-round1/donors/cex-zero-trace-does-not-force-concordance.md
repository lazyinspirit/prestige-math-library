---
id: cex-zero-trace-does-not-force-concordance
kind: counterexample
title: "Equal zero-traces do not force smooth concordance"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 11
deps:
  - def-piccirillo-conway-pair
  - lem-conway-has-an-explicit-zero-trace-partner-with-s-two
  - lem-piccirillo-knot-lee-computations
  - def-smooth-knot-concordance
  - lem-lee-cobordism-filtration-genus-bound
  - def-countable-choice
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Lisa Piccirillo, The Conway knot is not slice"
      url: "https://arxiv.org/pdf/1808.02923"
      locator: "Introduction, printed p. 583, and §3, printed pp. 586–587 (PDF pp. 2, 5–6)"
    - title: "Jennifer Hom, Getting a handle on the Conway knot"
      url: "https://arxiv.org/pdf/2107.09171"
      locator: "§3, same trace but distinct concordance discussion"
---

## Statement refuted

Assume countable choice. The proposed statement is that for every pair of
smooth oriented knots $K_0,K_1\subset S^3$, a smooth diffeomorphism
$X_0(K_0)\cong X_0(K_1)$ implies that $K_0$ and $K_1$ are smoothly concordant.

## Statement references

[Piccirillo, Introduction and §3](https://arxiv.org/pdf/1808.02923)

[Hom, §3](https://arxiv.org/pdf/2107.09171)

## Facts & Assumptions

**Given:** Countable choice, the Conway knot $C$ and the explicit alternate knot $Q$ below.

[A1] [[def-countable-choice]] is assumed.

[F1] [[def-smooth-knot-concordance]]: a smooth concordance is a properly embedded smooth annulus in $S^3\times[0,1]$ with product collars.

[F2] [[lem-piccirillo-knot-lee-computations]] gives $s(C)=0$ by its direct Conway Lee computation. Only its Conway conclusion is used here.

[F3] [[lem-lee-cobordism-filtration-genus-bound]] gives $|s(K_1)-s(K_0)|\le2g$ for an actual smoothly properly embedded oriented genus-$g$ cobordism with product collars.

[F4] [[lem-conway-has-an-explicit-zero-trace-partner-with-s-two]] specifies $Q$ and proves $X_0(C)\cong X_0(Q)$ and $s(Q)=2$ by the actual framed trace and finite rational calculation.

## Counterexample

1.1 The oriented knots $C,Q$ of [F4] have diffeomorphic zero-traces. Suppose they were smoothly concordant. By [F1] the concordance is a properly embedded product-collared annulus, hence a genus-zero cobordism. [A1, F1, F4, given, contradiction]

2.1 Apply [F3] with $g=0$. It gives $|s(C)-s(Q)|\le0$, so the two invariants must agree. [A1, F3, step 1.1, algebra]

3.1 But [F2] and [F4] give $s(C)=0$, $s(Q)=2$. Their difference has absolute value two, contradicting step 2.1. Thus these actual equal-zero-trace knots are not smoothly concordant, refuting the unchanged universal Statement. This uses no identification of $Q$ with the separately named Figure 2 knot. [F2, F4, step 1.1, step 2.1, algebra, contradiction] ∎
