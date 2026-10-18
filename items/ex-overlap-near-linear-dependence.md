---
id: ex-overlap-near-linear-dependence
kind: example
title: Nearly duplicate Gaussian primitives produce an ill-conditioned overlap matrix
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-cartesian-gaussian-primitives-and-contractions, lem-cartesian-gaussian-moments-and-parameter-derivatives, thm-gaussian-product-theorem-and-polynomial-shift]
proof_strategy: direct
axiom_use: None. The example is a two-by-two Gram matrix calculation.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Trygve Helgaker, Molecular Integral Evaluation, 10th Sostrup Summer School lecture notes (2008)"
      url: "https://trygvehelgaker.no/Presentations/Sostrup_Integrals_2008.pdf"
      locator: "Complete 41-page PDF; Cartesian s functions and overlap integrals on pp. 3–6 and 14."
    - title: "L. E. McMurchie and E. R. Davidson, One and Two Electron Integrals over Cartesian Gaussian Functions, UCRL-13791 (1976)"
      url: "https://digital.library.unt.edu/ark:/67531/metadc1057442/m2/1/high_res_d/5184486.pdf"
      locator: "Complete 23-page report; §§II–III, pp. 5–12, Gaussian products and overlap moments."
---

## Example

For $a,b>0$, define normalized s primitives $h_a(x)=(2a/\pi)^{3/4}e^{-a\|x\|^2}$. Their overlap is
$$S(h_a,h_b)=\left(\frac{2\sqrt{ab}}{a+b}\right)^{3/2}.$$
For $a=b$ the two-function overlap matrix has eigenvalues $2$ and $0$. For distinct exponents $a,b$ it has eigenvalues $1\pm S(h_a,h_b)$, and as $b\to a$ its condition number tends to infinity.

## Facts & Assumptions

**Given:** Positive exponents $a,b$, normalized Gaussian functions as defined in the Example, and the overlap integral in [[def-cartesian-gaussian-primitives-and-contractions]].

[F1] [[thm-gaussian-product-theorem-and-polynomial-shift]]: $e^{-a\|x\|^2}e^{-b\|x\|^2}=e^{-(a+b)\|x\|^2}$.

[F2] [[lem-cartesian-gaussian-moments-and-parameter-derivatives]]: $\int e^{-p\|x\|^2}dx=(\pi/p)^{3/2}$.

## Verification

1.1 By [F1]–[F2], the unnormalized overlap is $(\pi/(a+b))^{3/2}$ and each norm squared is $(\pi/(2a))^{3/2}$ or $(\pi/(2b))^{3/2}$. Multiplying by the normalization constants gives $S(h_a,h_b)=(2\sqrt{ab}/(a+b))^{3/2}$. [given, F1, F2, algebra]

2.1 The Gram matrix is $\begin{pmatrix}1&S\\S&1\end{pmatrix}$, whose characteristic polynomial is $(1-\lambda)^2-S^2$, so its eigenvalues are $1\pm S$. At $a=b$, $S=1$ and the lower eigenvalue is zero. For $a\ne b$, $2\sqrt{ab}<a+b$, hence $0<S<1$; continuity of the displayed formula gives $S\to1$ as $b\to a$, and therefore $(1+S)/(1-S)\to\infty$. [given, algebra] ∎
