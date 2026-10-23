---
id: ex-fdmath-negative-bulk-residual
kind: example
title: "A negative bulk coefficient yields a negative quadratic residual"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
page: fd-mf03-examples
dependency_level: 5
proof_strategy: direct
deps:
  - lem-fd-newtonian-admissibility
  - def-countable-choice
dependency_roles:
  lem-fd-newtonian-admissibility: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: []
aliases: []
physical_scope: null
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Rohan Abeyaratne, Continuum Mechanics, Volume II, Chapter 12 §12.2, Problem 12.8, printed pp. 358–360"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
verification:
  precheck: pass
---

## Example

Assume $\mathrm{AC}_\omega$: every sequence of nonempty sets admits a choice function. Let $\mu>0$, $\zeta<0$, $T>0$, and $\theta\ne0$; set $\lambda=\zeta-\frac{2\mu}{3}$, $K=I$, $D=\frac{\theta}{3}I$, and $g=0$. With $D_0=D-\frac{\operatorname{tr}D}{3}I$ and
$$\mathcal Q(D,g,T):=\frac{2\mu|D_0|^2+\zeta(\operatorname{tr}D)^2}{T}+\frac{g^T(\operatorname{sym}K)g}{T^2},$$
one has $D_0=0$ and $\operatorname{tr}D=\theta$, so $\mathcal Q(D,g,T)=\zeta\theta^2/T<0$. Thus positive shear coefficient alone does not ensure a nonnegative compressible residual, even with positive semidefinite conductivity.

## Example references

[Rohan Abeyaratne, Continuum Mechanics, Volume II, Chapter 12 §12.2, Problem 12.8, printed pp. 358–360](https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf)

## Facts & Assumptions

**Given:** The coefficient and matrix choices in the Example and the countable-choice assumption stated there.

[F1] [[lem-fd-newtonian-admissibility]]: under its conditional Gibbs-residual interpretation, $\mathcal Q=(2\mu|D_0|^2+\zeta\theta^2)/T+g^T(\operatorname{sym}K)g/T^2$, where $\zeta=\lambda+2\mu/3$.

[F2] [[def-countable-choice]]: $\mathrm{AC}_\omega$ is the axiom that every sequence of nonempty sets admits a choice function.

[A1] The choices satisfy $\mu>0$, $\zeta<0$, $T>0$, and $\theta\ne0$; $K=I$, $D=(\theta/3)I$, and $g=0$.

## Verification


1.1 From the definitions, $\operatorname{tr}D=\theta$, so $D_0=(\theta/3)I-(\theta/3)I=0$. Also $g^T(\operatorname{sym}K)g=0$ because $g=0$. [A1, algebra]

2.1 By [F1] and the countable-choice premise [F2], step 1.1 gives $\mathcal Q=\zeta\theta^2/T$. Since $\zeta<0$, $\theta^2>0$, and $T>0$, this value is strictly negative. Therefore the stated positive-shear example verifies the claimed failure of nonnegative residual. [A1, F1, F2, step 1.1, algebra] ∎
