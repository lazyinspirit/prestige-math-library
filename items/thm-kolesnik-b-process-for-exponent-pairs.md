---
id: thm-kolesnik-b-process-for-exponent-pairs
kind: theorem
title: "Kolesnik B-process transformation under its source hypotheses"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps: [def-kolesnik-exponent-pair-framework, lem-kolesnik-process-substitution-and-constrained-balancing]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-supplied
sources:
  references:
    - title: "G. A. Kolesnik, On the method of exponent pairs"
      url: "https://www.impan.pl/shop/publication/transaction/download/product/104633"
      locator: "Theorem 4, printed p. 119; conditional qualifications immediately following"
verification:
  precheck: pending
---

## Statement

Let $n\ge1$, let $m$ be an integer with $1\le m\le n$, and let $\lambda=(\lambda_0,\ldots,\lambda_n)\in E_n$ in Kolesnik's multidimensional exponent-tuple convention. Assume the source inequalities (1) and (4) of Kolesnik's exponent-tuple framework hold uniformly for every admitted phase, domain, scale and relevant process dimension, with their stated loss convention. All transformed envelopes must be admitted in the same phase/scale convention. The full source process claim below includes its ordinary $E_n$ conclusion; it is not asserted to follow merely by discarding the $N^\varepsilon$ loss. Define
$$\widetilde\lambda_0:=\lambda_0+\lambda_1+\cdots+\lambda_m-\frac m2,$$
$$\widetilde\lambda_j:=1-\lambda_j\quad(1\le j\le m),\qquad \widetilde\lambda_j:=\lambda_j\quad(m<j\le n).$$
Then $(\widetilde\lambda_0,\ldots,\widetilde\lambda_n)\in E_n$ in the same source convention.

## Statement references

[[def-kolesnik-exponent-pair-framework]]

[Kolesnik, Theorem 4, printed p. 119](https://www.impan.pl/shop/publication/transaction/download/product/104633)

## Facts & Assumptions

**Given:** The tuple and phase-class data in the Statement.

[F1] [[def-kolesnik-exponent-pair-framework]]: $E_n$ is Kolesnik's admissible class of $(n+1)$-tuples relative to the specified multidimensional exponential-sum phase class.

[F2] Under the explicit numerical process bounds, the B substitution and the A constrained-balancing estimate hold with their $N^\varepsilon$ loss and endpoint terms retained. [[lem-kolesnik-process-substitution-and-constrained-balancing]]

[A1] Kolesnik's source explicitly makes Theorems 4 and 5 conditional on the baseline and process estimates (1) and (4) holding for every phase in the source class.

## Authoring escalation

The exact partial calculation is now available in [F2]: if the source B estimate (1) applies and its transformed envelope admits the original tuple bound, substitution gives the displayed exponents with the source $N^\varepsilon$ loss intact. This calculation does not provide the ordinary $E_n$ conclusion.

Held. This is source Theorem 4, the B substitution in (1), as the proof on printed p. 142 states. Substituting an admitted monomial into (1) gives the displayed numerical exponents with the source loss bound. A complete local proof of the full ordinary $E_n$ conclusion still requires the loss/convention reconciliation and admissibility of the transformed scales and phase class; no unconditional all-phase Poisson/stationary-phase estimate is supplied.
