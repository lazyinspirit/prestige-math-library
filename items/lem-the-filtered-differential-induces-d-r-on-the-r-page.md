---
id: lem-the-filtered-differential-induces-d-r-on-the-r-page
kind: lemma
title: The filtered differential induces d r on the r page
deps: ["def-r-page-of-the-spectral-sequence-of-a-filtered-complex", "prop-the-associated-graded-of-a-filtered-complex-is-a-bigraded-complex", "lem-spectral-sequence-subquotient-and-local-lifting-calculus"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Charles A. Weibel, An Introduction to Homological Algebra, Chapter 5
      url: https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf
    - title: Romyar Sharifi, Homological Algebra
      url: https://math.ucla.edu/~sharifi/homalg.pdf
status: draft
origin: pipeline
pipeline_run: phase-2-catchup-24
proof_strategy: direct
---



## Statement

For each $r\ge0$, the filtered differential induces a morphism
$$d^r:E^r_{p,q}\longrightarrow E^r_{p-r,q+r-1}$$
characterized on local representatives by $[x]\mapsto[d_nx]$, where $n=p+q$.

## Facts & Assumptions

**Given:** A filtered complex, $n=p+q$, and $r\ge0$; symbols $A^r,B^r$ have [F1] conventions.

[F1] $E^r$ is the quotient of the specified $A^r$ numerator by its two denominator summands ([[def-r-page-of-the-spectral-sequence-of-a-filtered-complex]]).

[F2] The associated graded differential is well defined ([[prop-the-associated-graded-of-a-filtered-complex-is-a-bigraded-complex]]).

[F3] Maps preserving numerator and denominator descend uniquely; image representatives can be lifted after epic pullback ([[lem-spectral-sequence-subquotient-and-local-lifting-calculus]]).

## Proof

**Proof technique:** direct.

1.1 For r=0 use [F2]. For r≥1, the restriction of d to $A^r_{p,n}$ lands in $F_{p-r}C_{n-1}$. Its next differential is zero, so it lands in $A^r_{p-r,n-1}$, the target numerator in [F1]. [F1, F2]

1.2 If $x$ changes by $a\in A^{r-1}_{p-1,n}$, then $da$ lies in the target boundary summand $d(A^{r-1}_{(p-r)+r-1,n})=d(A^{r-1}_{p-1,n})$. If x changes by $db$ with $b\in A^{r-1}_{p+r-1,n+1}$, its differential changes by $d^2b=0$. These are subobject factorization calculations: the sum epimorphism allows their verification after an epic cover by [F3]. [F1, F3, algebra]

2.1 Consequently the map from the source numerator to the target quotient kills both denominator summands and hence their sum. Cokernel descent [F3] gives a unique $d^r$ satisfying the stated rule. Equality after the epic source quotient proves that the rule is independent of every permitted local representative. [F3, step 1.1, step 1.2] ∎

## Source notes

[Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), Construction 5.4.6 and Lemma 5.4.7, pp.133–134; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), Theorem 4.2.3, pp.91–92. Increasing homological indices are used here.
