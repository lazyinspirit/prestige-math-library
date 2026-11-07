---
dependency_level: 7
id: thm-polymath8b-unconditional-h1-at-most-246
kind: theorem
title: Polymath8b’s unconditional bound H_1 ≤ 246
status: draft
origin: pipeline
deps:
- lem-explicit-rational-enlarged-fifty-variable-sieve-witness
- thm-riemann-enlarged-simplex-dhl-sufficient-criterion
- thm-polymath8b-admissible-50-tuple-diameter-246
- thm-choice-free-bombieri-vinogradov-and-prime-level
- def-liminf-consecutive-prime-gap-hm
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
  - title: D. H. J. Polymath, “Variants of the Selberg sieve, and bounded intervals containing many primes” (2014), arXiv v4
    url: https://arxiv.org/pdf/1407.4897v4
  - title: 'Hugh L. Montgomery and Robert C. Vaughan, Multiplicative Number Theory II: Primes and Sieves, Chapter 22'
    url: https://personal.science.psu.edu/rcv4/Vol2/Vol2.pdf
proof_strategy: direct
axiom_use: The new exact bounded Riemann witness, Riemann enlarged sufficient criterion and unqualified level theorem add no choice hypothesis; the old qualified/L2 route is retained as history only.
---

## Statement

Unconditionally, $H_1\le246$; equivalently, infinitely many consecutive prime pairs have gap at most $246$.


## Facts & Assumptions

**Given:** The original unconditional Statement and positive-prime enumeration.

[F1] [[lem-explicit-rational-enlarged-fifty-variable-sieve-witness]] provides a bounded Riemann symmetric50variable function at $A=26/25$, $B=24/25$, all required sections/marginals integrable, and $I>0$, $50J>4I$.

[F2] [[thm-riemann-enlarged-simplex-dhl-sufficient-criterion]] proves the unqualified Riemann enlarged-support sufficient criterion when $A\theta<1$ and total marginal ratio exceeds $2m/\theta$.

[F3] [[thm-choice-free-bombieri-vinogradov-and-prime-level]] supplies every fixed $0<\theta<1/2$ in the actual full-weight prime-level convention, with no choice hypothesis.

[F4] [[thm-polymath8b-admissible-50-tuple-diameter-246]] supplies the explicit admissible50tuple of diameter246.

[F5] [[def-liminf-consecutive-prime-gap-hm]] defines $H_1=\sup_N\inf_{r\ge N}(p_{r+1}-p_r)$.

## Proof

1.1 Put $\rho=50J/I$ for [F1]'s explicit witness. Then $\rho>4$, so $\theta=(2/\rho+1/2)/2$ satisfies $0<2/\rho<\theta<1/2$ and $\rho>2/\theta$. Set $\varepsilon=1/25$. Then $A=26/25$, $B=24/25$, $A\theta<13/25<1$. These are explicit fixed parameters; the witness's symmetry makes its total marginal functional precisely $50J$. [F1, given, construct, algebra]

2.1 Apply [F3] at that fixed $\theta$, then [F2] at $k=50,m=1$, with [F1]'s bounded Riemann witness and [F4]'s admissible tuple. All section/integrability conditions and strict numerical inequalities hold by [F1] and step 1.1. The criterion gives infinitely many translates containing two primes and $H_1\le246$. The full original unconditional conclusion uses no old choice-qualified or full $L^2$ premise. [F1, F2, F3, F4, step 1.1, algebra]

3.1 If only finitely many consecutive prime gaps were at most246, choose an index past that finite set (or1 if it is empty). Every later integer gap would be at least247, implying $H_1\ge247$ by [F5], contrary to step 2.1. Conversely infinitely many such gaps make every tail infimum at most246 and hence $H_1\le246$. This establishes exactly the original equivalence and completes the Statement. No simultaneous choice of prime pairs is needed. [F5, step 2.1, algebra] ∎

## Source notes

The authentic previous local route required the still-held full $L^2$ enlarged criterion and stronger $M_{50,1/25}>4.0043$ certificate, together with old choice-qualified BV/cutoff inputs. Those source bodies, Statements and histories are unchanged. The present alternative needs only an exact bounded Riemann ratio above4, a separately reconstructed Riemann enlarged sufficient criterion, the accepted unqualified level theorem and the same exact tuple. The stronger4.0043 claim is not weakened or accepted. Neither the full $L^2$/GEH theorem nor any60cell, many-gap or growing-parameter assertion follows here.
