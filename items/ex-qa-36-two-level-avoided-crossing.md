---
id: ex-qa-36-two-level-avoided-crossing
kind: example
title: Two-level avoided crossing
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
deps:
  - def-qa-36-finite-adiabatic-path-model
  - thm-qa-36-jrs-finite-adiabatic-bound
  - thm-complex-spectral-theorem-for-normal-endomorphisms
justified_by: []
proof_strategy: direct
axiom_use: None; a direct $2\times2$ spectral calculation and the cited finite JRS theorem are used.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Sabine Jansen, Mary-Beth Ruskai, and Ruedi Seiler, Bounds for the adiabatic approximation with applications to quantum computation
      url: https://arxiv.org/pdf/quant-ph/0603175
      locator: Theorem 3, PDF pp. 5–11; finite gap-dependent bound.
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: Chapter 30, printed pp. 151–156; two-level adiabatic estimates.
---

## Statement

Consider $H(s)=(s-1/2)Z+X/2$ on $\mathbb C^2$, where $X=\begin{pmatrix}0&1\\1&0\end{pmatrix}$ and $Z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$. Compute its full ground-to-excited gap, derivative bounds, and rank-one JRS error bound.

## Facts & Assumptions

**Given:** The finite path and rank-one JRS estimate from [[def-qa-36-finite-adiabatic-path-model]] and [[thm-qa-36-jrs-finite-adiabatic-bound]].

[F1] The eigenvalues of a finite Hermitian matrix determine its ground band and gap ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

[F2] For a rank-one band, the JRS bound is
$$A_1(1)=\frac1T\left(\frac{\|H'(0)\|}{g(0)^2}+\frac{\|H'(1)\|}{g(1)^2}+\int_0^1\left(\frac{\|H''(s)\|}{g(s)^2}+\frac{7\|H'(s)\|^2}{g(s)^3}\right)ds\right)$$
([[thm-qa-36-jrs-finite-adiabatic-bound]]).

## Proof

1.1 Put $x=s-1/2$. Direct multiplication gives $H(s)^2=(x^2+1/4)I$, so its eigenvalues are $\pm\sqrt{x^2+1/4}$. The ground-to-excited gap is therefore $g(s)=2\sqrt{x^2+1/4}$, whose minimum is $1$ at $s=1/2$ and whose endpoint values are $\sqrt2$. The ground band is uniformly isolated and has rank one. [given, F1, algebra]

1.2 Differentiating gives $H'(s)=Z$ and $H''(s)=0$. Since $Z^*Z=I$, $\|H'(s)\|=1$ for every $s$. [given, algebra]

2.1 Substituting the endpoint values and derivatives from steps 1.1–1.2 into [F2] gives endpoint contribution $1/2+1/2=1$. For the integral, with $x=s-1/2$, $\displaystyle \int_0^1\frac{7}{g(s)^3}\,ds=\frac78\int_{-1/2}^{1/2}\frac{dx}{(x^2+1/4)^{3/2}}=\frac7{\sqrt2},$ using the antiderivative $x/((1/4)\sqrt{x^2+1/4})$. Hence $A_1(1)=(1+7/\sqrt2)/T$. [F2, step 1.1, step 1.2, algebra]

3.1 The JRS conclusion consequently bounds the projector deviation by $(1+7/\sqrt2)/T$ and the transition probability out of the ground band by its square. For example, any $T\ge4(1+7/\sqrt2)/\varepsilon$ makes the projector deviation at most $\varepsilon/4$. [F2, step 2.1, algebra] ∎
