---
id: thm-multiscale-iteration-for-moment-curve-decoupling
kind: theorem
title: Multiscale Iteration for Moment-Curve Decoupling
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
- def-l2-decoupling-constant-for-moment-curve
- lem-moment-curve-finite-branching-iteration
- def-countable-choice
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Jean Bourgain, Ciprian Demeter, and Larry Guth, Proof of the main conjecture
      in Vinogradov’s mean value theorem for degrees higher than three
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf
    locator: §§8–9, pp. 653–678, especially Theorems 8.3, 8.14, 9.1 and Lemma 9.2;
      §8.3 states that arbitrary dimensions follow by a careful but straightforward
      extension and omits the iteration details.
proof_strategy: direct
axiom_use: Countable Choice is inherited from the Euclidean Lebesgue/Fourier and approximation
  suppliers; no full Axiom of Choice is used.
---

## Statement

Assume Countable Choice. Let $n\ge3$, $E\ge100n$, and let $p<n(n+1)$ be sufficiently close to $n(n+1)$. Assume that for every integer $2\le d<n$, every $E'\ge100d$, every $\eta>0$, and every $0<\delta\le1$, the lower-dimensional endpoint estimate $D_{d(d+1),d}(\delta,E')\le C_{d,E',\eta}\delta^{-\eta}$ holds. Define
$$\eta_{p,n,E}=\inf\left\{\alpha\ge0:\text{there is }C_{p,n,E,\alpha}<\infty\text{ such that }D_{p,n}(\delta,E)\le C_{p,n,E,\alpha}\delta^{-\alpha}\text{ for all }0<\delta\le1\right\}.$$
Then $\eta_{p,n,E}=0$.

## Statement references

[Moment-curve decoupling constants]([[def-l2-decoupling-constant-for-moment-curve]])

[Parabola base case]([[thm-parabola-sharp-l2-decoupling-base-case]])

[Lower-dimensional decoupling]([[thm-lower-dimensional-moment-curve-decoupling]])

[BDG, Theorem 8.14 and §8.3](https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf)

[BDG, Theorem 9.1 and Lemma 9.2](https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf)

## Facts & Assumptions

**Given:** All hypotheses of the Statement.

[F1] The complete finite branching, numerical spectral argument, buffered exponent closure and all-scale recovery are [[lem-moment-curve-finite-branching-iteration]].

## Proof

1.1 The hypothesis supplies exactly every lower-dimensional endpoint and every weight exponent required by the finite-branching lemma. Choose its subcritical neighborhood of $n(n+1)$ and apply that lemma to the present $n,p$. It proves, for each $E\ge100n$ and every $\sigma>0$, $D_{p,n}(\delta,E)\le C_{n,p,E,\sigma}\delta^{-\sigma}$ for every real $0<\delta\le1$. Its proof contains the complete all-dimensional state recurrence, finite scale-moment amplification and weight-buffered exponent closure; no arbitrary-dimensional case is left to an omitted modification. [given, F1, construct, algebra]

2.1 The set of admissible exponents in the Statement therefore contains every positive real number. Its infimum is nonnegative by definition and at most every positive real number, hence equals zero. The fine-mesh recovery and $\delta=1$ cases are included in the proved supplier. This proves the exact stated infimum conclusion with all its weight and dimension quantifiers. [given, F1, construct, algebra] ∎

