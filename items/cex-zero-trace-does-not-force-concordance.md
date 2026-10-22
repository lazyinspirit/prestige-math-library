---
id: cex-zero-trace-does-not-force-concordance
kind: counterexample
title: "Equal zero-traces do not force smooth concordance"
status: published
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
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Lisa Piccirillo, The Conway knot is not slice"
      url: "https://arxiv.org/pdf/1808.02923"
      locator: "Introduction (arXiv v1 PDF p. 1) and §4, proof of Theorem 1.5 (PDF pp. 5–6)"
    - title: "Jennifer Hom, Getting a handle on the Conway knot"
      url: "https://arxiv.org/pdf/2107.09171"
      locator: "§3, same trace but distinct concordance discussion"
---

## Statement refuted

Assume the Axiom of Choice. The proposed statement is that for every pair of
smooth oriented knots $K_0,K_1\subset S^3$, a smooth diffeomorphism
$X_0(K_0)\cong X_0(K_1)$ implies that $K_0$ and $K_1$ are smoothly concordant.

## Statement references

[Piccirillo, Introduction and §4](https://arxiv.org/pdf/1808.02923)

[Hom, §3](https://arxiv.org/pdf/2107.09171)

## Facts & Assumptions

**Given:** Full AC, the Conway knot $C$ and its Figure 2 trace partner $K_P$.

[A1] The Axiom of Choice, written AC, is assumed. [[def-axiom-of-choice]]

[A2] AC implies dependent choice and hence countable choice $\mathrm{AC}_\omega$; this supplies every retained local countable-choice hypothesis. [[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]]

[F1] [[def-smooth-knot-concordance]]: a smooth concordance is a properly embedded smooth annulus in $S^3\times[0,1]$ with product collars.

[F2] [[lem-piccirillo-knot-lee-computations]] gives $s(C)=0$ by its direct Conway Lee computation. Only its Conway conclusion is used here.

[F3] [[lem-lee-cobordism-filtration-genus-bound]] gives $|s(K_1)-s(K_0)|\le2g$ for an actual smoothly properly embedded oriented genus-$g$ cobordism with product collars.

[F4] [[thm-piccirillo-conway-trace-partner-has-s-two]] proves under full AC that $X_0(C)\cong X_0(K_P)$ and $s(K_P)=2$, using the retained local framed witness, the explicitly imported published zero-trace equality for the named knots, and the direct rational Lee calculation.

## Counterexample

1.1 The oriented knots $C,K_P$ of [F4] have diffeomorphic zero-traces. Suppose they were smoothly concordant. By [F1] the concordance is a properly embedded product-collared annulus, hence a genus-zero cobordism. [A1, A2, F1, F4, given, contradiction]

2.1 Apply [F3] with $g=0$. It gives $|s(C)-s(K_P)|\le0$, so the two invariants must agree. [A1, A2, F3, step 1.1, algebra]

3.1 But [F2] and [F4] give $s(C)=0$, $s(K_P)=2$. Their difference has absolute value two, contradicting step 2.1. Thus these actual equal-zero-trace knots are not smoothly concordant, refuting the unchanged universal Statement. [A2, F2, F4, step 1.1, step 2.1, algebra, contradiction] ∎
