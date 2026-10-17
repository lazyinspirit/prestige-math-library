---
id: lem-finite-temperature-minimizer-is-interior
kind: lemma
title: "A finite-temperature minimizer has strictly interior occupations"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-finite-temperature-density-matrix-free-energy
  - lem-finite-temperature-entropy-continuous-at-endpoints
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - thm-logarithm-derivative-and-integral
  - cor-mean-value-theorem
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Daniel Arovas, Thermodynamics and Statistical Mechanics, §7.4 Variational Density Matrix Method, UC San Diego / Physics LibreTexts"
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Book:_Thermodynamics_and_Statistical_Mechanics_(Arovas)/07:_Mean_Field_Theory_of_Phase_Transitions/7.04:_Variational_Density_Matrix_Method
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-17}}
---

## Statement

Assume $\mathcal E$ in the model of
[[def-finite-temperature-density-matrix-free-energy]] is $C^1$ on an open
neighborhood of $\mathcal D_r$, with $0<r<n$ and $\beta>0$. Every global
minimizer $D$ of $\mathcal F_\beta$ satisfies $0\prec D\prec I$; equivalently,
each eigenvalue of $D$ lies strictly between $0$ and $1$.

## Facts & Assumptions

**Given:** A global minimizer $D\in\mathcal D_r$, a $C^1$ energy on a neighborhood of the compact density domain, $0<r<n$, and $\beta>0$.

[F1] The density domain fixes $\operatorname{tr}D=r$ and the entropy is $\operatorname{tr}\phi(D)$ ([[def-finite-temperature-density-matrix-free-energy]]).

[F2] The eigenvalues of a Hermitian $D$ lie in $[0,1]$ exactly when $0\preceq D\preceq I$ ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

[F3] For $0<x<1$, $\phi'(x)=\log x-\log(1-x)$ and the endpoint behavior follows from $x\log x\to0$ ([[thm-logarithm-derivative-and-integral]], [[lem-finite-temperature-entropy-continuous-at-endpoints]]).

[F4] A differentiable scalar function with bounded derivative on a short interval changes by at most that derivative bound times the interval length ([[cor-mean-value-theorem]]).

## Proof

1.1 Diagonalize $D$ by [F2], with eigenvalues $d_j\in[0,1]$ and $\sum_jd_j=r$. If $d_i=0$, then $r>0$ gives an index $j$ with $d_j>0$. For small $t>0$, $D_t=D+t(e_ie_i^*-e_je_j^*)$ remains in $\mathcal D_r$. If $d_j\in(0,1)$, $\phi'$ is bounded near $d_j$, so [F4] gives $\phi(d_j-t)-\phi(d_j)=O(t)$. Also $(1-t)\log(1-t)=O(t)$ because this scalar function is differentiable at $0$. Thus the entropy change is $\phi(t)+\phi(d_j-t)-\phi(0)-\phi(d_j)=t\log t+O(t)$ by [F3]. If $d_j=1$, it is $\phi(t)+\phi(1-t)=2t\log t+O(t)$ by $\phi(1-t)=\phi(t)$. The energy change is $O(t)$ by Fréchet differentiability of $\mathcal E$ at $D$ along the fixed direction $e_ie_i^*-e_je_j^*$. Dividing the total free-energy change by $t$ gives $\beta^{-1}\log t+O(1)$ (or $2\beta^{-1}\log t+O(1)$), which is negative for sufficiently small $t$. This contradicts minimality. [F1, F2, F3, F4, given, algebra]

2.1 If $d_i=1$, then $r<n$ gives $j$ with $d_j<1$. Transfer $t$ from the $i$th eigendirection to the $j$th: $D_t=D+t(e_je_j^*-e_ie_i^*)$. If $d_j\in(0,1)$, the term that leaves the endpoint $1$ is $\phi(1-t)=\phi(t)=t\log t+O(t)$ and the interior term changes by $O(t)$ by [F4]. If $d_j=0$, the two endpoint terms change by $2\phi(t)=2t\log t+O(t)$. The energy change is $O(t)$ by differentiability as in step 1.1. Dividing by $t$ again gives a negative free-energy change for small $t$, contradicting minimality. No eigenvalue can equal $0$ or $1$, proving the claim. [F1, F2, F3, F4, given, step 1.1, algebra] ∎

