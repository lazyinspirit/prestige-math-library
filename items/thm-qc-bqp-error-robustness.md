---
id: thm-qc-bqp-error-robustness
kind: theorem
title: "BQP is unchanged by polynomially small bounded error"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
deps:
  - thm-qc-bounded-error-amplification-correct
  - def-qc-bqp-promise-class
  - def-qc-circuit-cost-model
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "John Watrous, Quantum Computational Complexity, Section IV.2"
      url: "https://arxiv.org/pdf/0804.3401"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 13, Section 13.2 and Appendix B.2"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

Let $q:\mathbb N\to\mathbb N$ be computable in deterministic polynomial time and polynomially bounded, with $q(n)\ge2$ for all sufficiently large $n$. For every promise problem, the following are equivalent in the QC14 full-list model:

1. it has a uniformly generated family and polynomial-time acceptance predicate with acceptance at least $2/3$ on YES and at most $1/3$ on NO;
2. it has a uniformly generated family and polynomial-time acceptance predicate with acceptance at least $1-2^{-q(n)}$ on YES and at most $2^{-q(n)}$ on NO.

More generally, suppose a uniformly generated family with a polynomial-time acceptance predicate satisfies $p_{C_n}(x)\ge\alpha(n)$ on length-$n$ YES inputs and $p_{C_n}(x)\le\beta(n)$ on length-$n$ NO inputs, where $\alpha(n),\beta(n)$ are polynomial-time computable rationals and there is a positive integer-valued polynomial $s(n)$ such that $0\le\beta(n)<\alpha(n)\le1$ and $\alpha(n)-\beta(n)\ge1/s(n)$ for all sufficiently large $n$. It can be modified to achieve the same exponentially small target error $2^{-q(n)}$. This result does not assert the gap-only implication $\mathrm{BQP}(\alpha,\beta)=\mathrm{BQP}$ for arbitrary endpoint thresholds.

## Facts & Assumptions

**Given:** A promise problem, the QC14 BQP definition, the amplification-correctness theorem, and a polynomial-time computable polynomially bounded $q$ with the stated eventual lower bound.

[F1] [[def-qc-bqp-promise-class]]: BQP in this model requires acceptance at least $2/3$ on YES and at most $1/3$ on NO, with no off-promise condition.

[F2] [[thm-qc-bounded-error-amplification-correct]]: for a base family satisfying its YES/NO rational thresholds in $[0,1]$, with inverse-polynomial gap and valid rational $0<\delta\le1/2$, repetition gives errors at most $\delta$ with polynomial full-list resources.

## Proof


1.1 If the promise problem is in BQP, take $\alpha=2/3$, $\beta=1/3$, and $s=3$. Use the all-length rational target $\widehat\delta(n)=2^{-q(n)}$ when $q(n)\ge2$ and $\widehat\delta(n)=1/4$ otherwise, and apply [F2]. Retain the amplified circuit and predicate where $q(n)\ge2$, and retain the original circuit and predicate at the remaining lengths; this polynomial-time length test preserves full-list uniformity. The rational values have polynomial bit length because $q$ is polynomially bounded, and the gap is $1/3$, so this gives the second family at those lengths. At any length with $q(n)=0$, the target bounds are $p\ge0$ on YES and $p\le1$ on NO; with $q(n)=1$, they are $p\ge1/2$ and $p\le1/2$. The original $2/3,1/3$ bounds imply each of these finite exceptional cases. [given, F1, F2, algebra]

1.2 Conversely, choose $N$ such that $q(n)\ge2$ for all $n\ge N$. At those lengths, $1-2^{-q(n)}\ge3/4\ge2/3$ and $2^{-q(n)}\le1/4\le1/3$, so the high-confidence family meets the BQP bounds. There are finitely many binary strings of length less than $N$. Change the total classical predicate on this finite set to accept each member of $Y$ and reject each member of $N$, while leaving it unchanged off the promise and on longer strings. The finite table is a fixed finite description and adds only constant time and space. The circuit generator is unchanged, so the modified family remains full-list uniform and satisfies [F1] on every promised input. [given, F1, algebra]

2.1 For the more general thresholds, choose a fixed $N$ beyond both the finitely many gap exceptions and the lengths with $q(n)<2$. To satisfy the all-length input conditions of [F2], define polynomial-time rational functions $\widehat\alpha,\widehat\beta$ to equal $2/3,1/3$ below $N$ and $\alpha,\beta$ at and above $N$; set $\widehat s(n)=s(n)+3$; and define $\widehat\delta(n)=1/4$ below $N$ and $2^{-q(n)}$ at and above $N$. These functions meet the endpoint, positive-gap and $0<\widehat\delta\le1/2$ conditions at every length. Before amplification, change the base predicate below $N$ to accept exactly the YES members of the finite set of short inputs and reject its NO members, independently of the measured string; leave it unchanged at longer lengths. This is legal because the predicate API is $A_n(x,z)$ and explicitly receives $x$. The fixed finite table gives base probabilities $1$ on short YES inputs and $0$ on short NO inputs, so the corrected base family meets $\widehat\alpha,\widehat\beta$ at every length. Apply [F2] to this corrected base family with these functions. For $n\ge N$ the resulting circuits have the desired error and $\ell(2^{q(n)})=q(n)+1$, so $r(n)=2(s(n)+3)^2(q(n)+2)$ is polynomial. At the finitely many lengths below $N$, replace the amplified predicate by a finite table that answers each promised input exactly; this table is a fixed constant-size addition to a polynomial-time predicate. The resulting family is full-list uniform and meets the target on every promised input. The finite table is an existence argument for this fixed promise problem; no algorithm for recovering its short YES membership from an arbitrary family description is asserted. [step 1.2, F2, algebra] ∎

## Source qualification

Watrous, Proposition 3, as printed in Section IV.2 (PDF p. 13), states the broader equality $\mathrm{BQP}(a,b)=\mathrm{BQP}$ from an inverse-polynomial gap alone. The proof here uses only amplification for the standard BQP thresholds and a finite-table treatment of exceptional lengths. It does not use that printed gap-only equality for arbitrary $a,b$.
