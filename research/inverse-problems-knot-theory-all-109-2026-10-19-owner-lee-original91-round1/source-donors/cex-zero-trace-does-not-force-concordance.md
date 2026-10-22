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
  - thm-piccirillo-conway-trace-partner-has-s-two
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

**Given:** Countable choice and the Conway/partner pair fixed above.

[A1] Countable choice, written $\mathrm{AC}_\omega$, is
[[def-countable-choice]].

[F1] [[def-smooth-knot-concordance]]: a smooth concordance is a smooth
properly embedded annulus in $S^3\times[0,1]$ with the specified knot
boundaries and product collars.

[F2] [[lem-piccirillo-knot-lee-computations]]: the intended finite computation
gives $s(C)=0$ and $s(K_P)=2$; its independent certificate is escalated.

[F3] [[lem-lee-cobordism-filtration-genus-bound]]: a smoothly properly embedded oriented
cobordism of genus $g$ in $S^3\times[0,1]$ with product collars satisfies
$|s(K_1)-s(K_0)|\le2g$. The annulus in [F1] meets exactly this embedded hypothesis. The estimate uses a chosen finite movie and does not require independence under movie moves.

[F4] [[thm-piccirillo-conway-trace-partner-has-s-two]]: the two knots have
diffeomorphic zero-traces; the specific diagram and Lee calculation remain
escalated.

## Counterexample

**Proof technique:** direct, conditional on the Lee calculation and
cobordism-filtration supplier.

1.1 The Conway knot $C$ and Piccirillo partner $K_P$ from [F4] have diffeomorphic zero-traces. Suppose there were a smooth concordance between them. By [F1] it is a smooth annulus, hence a genus-zero cobordism. [A1, F1, F4, given, contradiction]

2.1 Applying [F3] with $g=0$ gives $|s(C)-s(K_P)|\le 0$, so $s(C)=s(K_P)$. [A1, F3, step 1.1, algebra]

3.1 By [F2], $s(C)=0$ and $s(K_P)=2$, so their difference has absolute value $2$, contradicting step 2.1. Hence no smooth concordance exists, while [F4] gives equal zero-traces. [A1, F2, F4, step 2.1, algebra, contradiction] ∎

## Escalated proof obligation

The local finite $s$ computation and the Piccirillo trace/diagram certificate remain unresolved. The actual smooth concordance annulus satisfies the properly embedded, product-collared hypothesis of the Lee genus supplier; an abstract labeled annulus would not suffice. No acceptance of the missing numerical and diagram inputs is asserted here.
