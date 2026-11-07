---
id: lem-mellin-inversion-for-exponential-kernel
kind: lemma
title: Mellin inversion for the exponential kernel
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-euler-gamma-function
  - thm-gamma-functional-equation
  - thm-gamma-meromorphic-continuation
  - thm-stirling-formula-gamma
  - thm-residue-theorem-null-homologous-cycle
  - def-natural-logarithm
  - def-complex-exponential
  - def-real-exponential-function-and-e
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: Harold Davenport, Multiplicative Number Theory, §21
      url: https://djvu.online/file/Rh8B8jEVpxFgk
      locator: Printed pp. 126–131, Mellin inversion of the exponential in the proof of Siegel's theorem.
    - title: Ian Petrow, Introduction to Analytic Number Theory
      url: https://www.homepages.ucl.ac.uk/~ucahpet/IANTnotes2018.pdf
      locator: Theorem 10.3 proof, printed pp. 76–79, Mellin inversion and contour shift.
---




## Statement

For every real $x>0$ and $c>0$,
$$e^{-x}=\frac1{2\pi i}\int_{c-i\infty}^{c+i\infty}\Gamma(s)x^{-s}\,ds,$$
where $x^{-s}:=e^{-s\log x}$ and the vertical integral is absolutely convergent.

## Statement references

Harold Davenport, *Multiplicative Number Theory*, §21, printed pp. 126–131.

Ian Petrow, *Introduction to Analytic Number Theory*, Theorem 10.3 proof, printed pp. 76–79.

## Facts & Assumptions

**Given:** Real numbers $x>0$ and $c>0$.

[F1] The Gamma function is defined by Euler's integral on the right half-plane; it satisfies $\Gamma(z+1)=z\Gamma(z)$ and extends meromorphically with simple poles at $0,-1,-2,\ldots$ and residues $\operatorname{Res}_{s=-n}\Gamma(s)=(-1)^n/n!$ ([[def-euler-gamma-function]], [[thm-gamma-functional-equation]], [[thm-gamma-meromorphic-continuation]]).

[F2] On every fixed bounded real interval, Stirling's formula gives $|\Gamma(\sigma+it)|\le C(1+|t|)^A e^{-\pi|t|/2}$ for sufficiently large $|t|$, with constants depending on the interval ([[thm-stirling-formula-gamma]]).

[F3] For a meromorphic function with no poles on a rectangular contour, the contour integral equals $2\pi i$ times the sum of enclosed residues ([[thm-residue-theorem-null-homologous-cycle]]).

[F4] For $x>0$, $x^{-s}=\exp(-s\log x)$; on real inputs the exponential is the function defined by its convergent power series ([[def-natural-logarithm]], [[def-complex-exponential]], [[def-real-exponential-function-and-e]]).

## Proof

**Given:** $x>0$ and $c>0$.

1.1 Fix an integer $N\ge0$ and a height $T>0$. Apply [F3] to $\Gamma(s)x^{-s}$ on the rectangle with vertical sides $\operatorname{Re}s=c$ and $\operatorname{Re}s=-N-\tfrac12$ and horizontal sides $\operatorname{Im}s=\pm T$. Its only enclosed poles are $s=0,-1,\ldots,-N$ by [F1]; [F4] makes $x^{-s}$ entire in $s$. [given, F1, F3, F4, algebra]

2.1 For fixed $N,x,c$, [F4] gives $|x^{-s}|=x^{-\operatorname{Re}s}$, which is bounded on the horizontal segments, while [F2] makes their integrals tend to zero as $T\to\infty$. The integral on the right vertical side converges absolutely by the same exponential bound. [F2, F4, step 1.1, algebra]

3.1 Letting $T\to\infty$ in the contour identity, [F1] gives $$\frac1{2\pi i}\int_{c-i\infty}^{c+i\infty}\Gamma(s)x^{-s}\,ds=\sum_{n=0}^N\frac{(-1)^n x^n}{n!}+\frac1{2\pi i}\int_{-N-1/2-i\infty}^{-N-1/2+i\infty}\Gamma(s)x^{-s}\,ds.$$ [F1, F3, step 2.1, algebra]

4.1 On the left side write $s=-N-\tfrac12+it$. Repeated use of [F1] gives $$|\Gamma(s)|=\frac{|\Gamma(\tfrac12+it)|}{\prod_{j=0}^N\sqrt{(j+\tfrac12)^2+t^2}}\le\frac{|\Gamma(\tfrac12+it)|}{\prod_{j=0}^N(j+\tfrac12)}.$$ The integral of $|\Gamma(\tfrac12+it)|$ over $t\in\mathbb R$ is finite by [F2] and continuity on compact intervals. By [F4], $|x^{-s}|=x^{N+1/2}$, so the left-line integral is at most a constant times $x^{N+1/2}/\prod_{j=0}^N(j+\tfrac12)$. For $N\ge2$, at least $N/2$ factors are at least $N/2$ and every factor is at least $1/2$, so the denominator is at least $(N/4)^{N/2}$; the resulting bound tends to zero for fixed $x$. [F1, F2, F4, step 3.1, algebra]

5.1 Let $N\to\infty$ in step 3.1. The left-line integral vanishes by step 4.1, and the residue sum converges to the real exponential series $\sum_{n\ge0}(-x)^n/n!=e^{-x}$ by [F4]. This proves the asserted Mellin inversion formula. [F4, step 3.1, step 4.1, algebra] ∎

