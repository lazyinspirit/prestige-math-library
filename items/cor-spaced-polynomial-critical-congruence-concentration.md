---
dependency_level: 4
id: cor-spaced-polynomial-critical-congruence-concentration
kind: corollary
title: "Uniform Critical Congruence Concentration"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-spaced-polynomial-weighted-congruence-mean-values
  - thm-spaced-polynomial-critical-congruence-concentration
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Wooley, Nested efficient congruencing and relatives of Vinogradov's mean value theorem, arXiv:1708.01220v2, Corollary 3.2"
      url: "https://arxiv.org/pdf/1708.01220v2"
---

## Statement

Let $k\ge1$, $s=k(k+1)/2$, and $\tau,\epsilon>0$. There is an integer
$B_0=B_0(k,\tau,\epsilon)$ such that, for every $B\ge B_0$, every admissible
place $(R,\pi)$ of rank $k$, every coefficientwise $\pi^c$-spaced system
$\boldsymbol\phi\in R[X]^k$ with $c\ge\tau B$, and every finitely supported
complex coefficient sequence on $R$,

$$
U^B_{s,k}\le Q^{\epsilon B}U^{B,H}_{s,k},\qquad Q=|R/(\pi)|,\quad H=\lceil B/k\rceil.
$$

The means and admissible places are those of
the weighted congruence mean-value definition. In particular the
constant is $1$ above the displayed uniform threshold; the threshold is
independent of the prime, the finite field, the irreducible polynomial, the
degrees and coefficients of the system, and the support and values of the
complex sequence.

## Statement references

[[def-spaced-polynomial-weighted-congruence-mean-values]]

## Facts & Assumptions

**Given:** The ranks, admissible places, finite complex sequences and parameter hypotheses in the Statement.

[F1] The quotient conventions and universal limiting exponents are in
[[def-spaced-polynomial-weighted-congruence-mean-values]].

[F2] The universal exponent vanishes by
[[thm-spaced-polynomial-critical-congruence-concentration]].

## Proof

1.1 By [F2], $\Lambda_{s,k}=0$. Since every $\lambda_{s,k}(\tau)$ is nonnegative and at most this supremum, it is zero. The definition of limsup therefore gives an integer $B_0$, depending only on $k,\tau,\epsilon$, such that $L_{s,k}(B;\tau)\le\epsilon$ for every $B\ge B_0$. The supremum in $L$ ranges simultaneously over all the data in the Statement. [F1, F2]

2.1 For a sequence with $U^{B,H}>0$ this implies $U^B\le Q^{\epsilon H}U^{B,H}\le Q^{\epsilon B}U^{B,H}$, since $H\le B$. If $U^{B,H}=0$, the finite estimate established in the proof of [F2] gives $U^B=0$; equivalently this follows from the elementary residue-refinement inequality used there. The zero coefficient sequence is covered by definition. Thus the inequality holds in every case with the asserted uniformity. [F1, F2, step 1.1] ∎
