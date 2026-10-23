---
id: cex-fd-negative-bulk-viscosity
kind: counterexample
title: "Negative bulk viscosity violates entropy admissibility"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 6
deps:
  - pthm-fd-entropy-production
dependency_roles:
  pthm-fd-entropy-production: physical-result
justified_by: []
aliases: []
physical_scope: >-
  Algebraic counterexample in the Newtonian/Fourier residual family with
  negative bulk coefficient. This coefficient lies outside the adopted
  nonnegative-bulk postulate; the example is not a material observation or
  claim about a realized fluid.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "David Tong, Fluid Mechanics, Part II lecture notes"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf"
      locator: "§3.1.1, printed pp. 60–61"
    - title: "An Introduction to Continuum Mechanics, Second Edition, Chapter 6"
      url: "https://courses.washington.edu/mengr503/Chapter_6.pdf"
      locator: "§§6.1.4 and 6.5.3, printed pp. 224–225 and 244–245"
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-23
---

## Statement refuted

Let $\operatorname{Sym}(3)=\{D\in\mathbb R^{3\times3}:D^T=D\}$ and let $I_3$ be the $3\times3$ identity matrix. For $D\in\operatorname{Sym}(3)$ set $\theta=\operatorname{tr}D$, $D_0=D-\theta I_3/3$, and $|D_0|^2=\sum_{i,j=1}^3(D_0)_{ij}^2$. For $\mu\ge0$, $\zeta\in\mathbb R$, $K\in\mathbb R^{3\times3}$, $g\in\mathbb R^3$, and $T>0$, define the pointwise Newtonian/Fourier residual
$$\mathcal G(D,g,T)=\frac{2\mu|D_0|^2+\zeta\theta^2}{T}+\frac{g^T\operatorname{sym}(K)g}{T^2},\qquad \operatorname{sym}(K)=\frac{K+K^T}{2}.$$
Here $g$ is the temperature-gradient value; in SI units $D$ is in $\mathrm{s^{-1}}$, $\mu,\zeta$ in $\mathrm{Pa\,s}$, $K$ in $\mathrm{W\,m^{-1}\,K^{-1}}$, $g$ in $\mathrm{K\,m^{-1}}$, and $\mathcal G$ in $\mathrm{W\,m^{-3}\,K^{-1}}$. The false assertion is that $\mathcal G(D,g,T)\ge0$ for every such $D,g,T$ whenever $\mu\ge0$, independently of the value of $\zeta$.

## Statement references

[David Tong, *Fluid Mechanics*, Part II lecture notes, §3.1.1, printed pp. 60–61](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf)

[An Introduction to Continuum Mechanics, Second Edition, Chapter 6, §§6.1.4 and 6.5.3, printed pp. 224–225 and 244–245](https://courses.washington.edu/mengr503/Chapter_6.pdf)

## Facts & Assumptions

**Given:** The Newtonian/Fourier residual formula and coefficient test, with the algebraic coefficient family extended to values outside the adopted physical coefficient range.

[L1] [[pthm-fd-entropy-production]]: for the smooth balance/state hypotheses and the closure $\tau=2\mu D_0+\zeta\theta I_3,\ q=-K g$, the residual is $(2\mu|D_0|^2+\zeta\theta^2)/T+g^T\operatorname{sym}(K)g/T^2$. Its exact algebraic test says nonnegativity for every independent $D,g,T>0$ requires $\mu,\zeta\ge0$ and $\operatorname{sym}(K)\succeq0$. This is the parent theorem’s explicitly qualified algebraic coefficient-family test; the negative witness lies outside the separately adopted nonnegative-bulk physical subfamily.

[A1] The negative-$\zeta$ coefficient choice below is a pointwise algebraic extension of the closure. It is excluded by the adopted post-fd-newtonian-fourier sign postulate and is not asserted to describe a measured material.

## Counterexample

**Given:** Fix a local state with $T>0$, choose $\mu>0$ and $\zeta<0$, set $K=0$, choose any $\theta\ne0$, and let $D=(\theta/3)I_3$ and $g=0$. Define $\lambda=\zeta-2\mu/3$ if the stress is written $2\mu D+\lambda(\operatorname{tr}D)I_3$.

1.1 The trace is $\operatorname{tr}D=\theta$, so $D_0=D-\theta I_3/3=0$. By [L1], the residual for these data is $\mathcal G=\zeta\theta^2/T$. [A1, L1, given, algebra]

2.1 Since $\zeta<0$, $\theta^2>0$, and $T>0$, one has $\mathcal G<0$. Thus a positive shear coefficient alone does not guarantee entropy admissibility for compressible strain. This is a coefficient counterexample outside the adopted sign range, not an observation about nature. [A1, L1, step 1.1, algebra] ∎
