---
id: lem-zeta-two-and-three-converge
kind: lemma
title: "The zeta sums at 2 and 3 are finite"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: [thm-cauchy-condensation, thm-geometric-series, def-integer-power, def-canonical-natural, lem-of-naturals-positive]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Stephen Semmes, Elements of Analysis"
      url: "https://math.rice.edu/~semmes/math331.pdf"
      locator: "Chapter 3 §3.9, Theorem 3.9.1 and complete proof, PDF pp. 65–66 / printed pp. 54–55; §3.9.3 applies condensation to p-series."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Statement

For $p\in\{2,3\}$, let $\zeta_p:=\sum_{k=1}^{\infty} k^{-p}$, where each positive integer in the summand is identified with its canonical real image. Both sums converge and satisfy $\zeta_p\ge1$.

## Statement references

[[thm-cauchy-condensation]]: convergence of a nonnegative nonincreasing series is equivalent to convergence of its condensed series.

[[thm-geometric-series]]: a geometric series with ratio of absolute value less than one converges.

[[def-integer-power]]: negative integer powers of a nonzero real are defined by reciprocals of natural powers.

[[def-canonical-natural]]: positive natural indices are represented by their canonical real images.

[[lem-of-naturals-positive]]: canonical real images of positive naturals are positive.

## Facts & Assumptions

**Given:** An integer $p\in\{2,3\}$ and the sequence $a_k=k^{-p}$ for positive integer $k$, with integer indices interpreted in $\mathbb R$ by the canonical embedding.

[F1] If a nonnegative sequence $(a_k)_{k\ge1}$ is nonincreasing, then $\sum_{k\ge1}a_k$ converges if and only if $\sum_{r\ge0}2^r a_{2^r}$ converges ([[thm-cauchy-condensation]]).

[F2] A geometric series $\sum_{r\ge0}q^r$ converges whenever $|q|<1$ ([[thm-geometric-series]]).

[F3] For a positive integer $k$, its real image is positive, and its negative integer powers are reciprocals of its natural powers ([[def-integer-power]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

## Proof

1.1 For $p=2$ or $p=3$, every $a_k=k^{-p}$ is positive. If $1\le k\le\ell$, then $\ell^p\ge k^p>0$: for $p=2$ this follows from $\ell^2-k^2=(\ell-k)(\ell+k)\ge0$, and for $p=3$ from $\ell^3-k^3=(\ell-k)(\ell^2+\ell k+k^2)\ge0$. Taking reciprocals reverses the inequality, so $a_\ell\le a_k$. [given, F3, algebra]

1.2 For $p=2$, the condensed term is $2^r/(2^r)^2=1/2^r=(1/2)^r$. For $p=3$, it is $2^r/(2^r)^3=1/(2^r)^2=(1/4)^r$. The final power identities follow by induction on $r$ from the recursive definition of natural powers. Thus the condensed series is geometric with ratio $1/2$ or $1/4$, respectively; [F2] makes both series converge. [given, F2, F3, induction, algebra]

2.1 The sequence is nonnegative and nonincreasing by step 1.1, and its condensed series converges by step 1.2. Apply [F1] to conclude that $\zeta_p$ converges. Its first term is $1$ and all terms are positive, hence $\zeta_p\ge1$. [given, F1, step 1.1, step 1.2, algebra] ∎
