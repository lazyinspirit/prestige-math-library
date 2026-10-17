---
id: ex-scalar-multiplicative-noise-milstein
kind: example
title: "A bounded scalar multiplicative-noise Milstein step"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-milstein-scheme-and-iterated-integrals
  - thm-commutative-milstein-strong-order-one
  - def-standard-normal-and-normal-laws
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification: {}
sources:
  references:
    - title: "Desmond J. Higham, An Algorithmic Introduction to Numerical Simulation of Stochastic Differential Equations, SIAM Review 43 (2001), Section 6"
      url: "https://people.fjfi.cvut.cz/vybirja2/Seminar/Higham-NumSimulOfSDE.pdf"
    - title: "Kloeden and Platen, Numerical Solution of Stochastic Differential Equations, Section 10.3, printed pp. 345-351"
      url: "https://stevencjxie8.com/files/refs/ref7.pdf"
---

## Example

Consider the bounded scalar multiplicative-noise SDE $dX_t=\sin(X_t)\,dW_t$ with $X_0=\pi/4$, and initialize the numerical method with $Y_0=X_0$. At the state $Y_0=\pi/4$, its first Milstein step of length $h$ is
$$Y_{n+1}=\frac\pi4+\frac{1}{\sqrt2}\Delta W_n+\frac14((\Delta W_n)^2-h).$$
Unlike additive noise, the diffusion derivative contributes a nonzero centered correction. The hypotheses of the strong-order theorem apply to this coefficient field.

## Facts & Assumptions

**Given:** AC; a filtered probability space whose filtration satisfies the usual conditions; and a standard Brownian motion $W$ adapted to that filtration such that $W_t-W_s$ is independent of $\mathcal F_s$ and has law $N(0,t-s)$ for every $0\le s<t$ (for example, the usual augmentation of the natural filtration of $W$), as required by [[def-continuous-brownian-ito-process]]; the SDE initial value $X_0=\pi/4\in L^2$ and matching numerical initial value $Y_0=X_0$; and a first grid step at $t_0=0$ of length $h>0$.

[F1] [[def-milstein-scheme-and-iterated-integrals]]: for scalar noise, the increment contains $\frac12\sigma(Y_n)\sigma'(Y_n)((\Delta W_n)^2-h)$.

[F2] [[def-standard-normal-and-normal-laws]]: if $\Delta W_n\sim N(0,h)$, then its first, second, third and fourth moments are $0,h,0,3h^2$.

[L1] [[thm-commutative-milstein-strong-order-one]]: for coefficients in $C_b^3$ under the stated Brownian hypotheses, the grid root-mean-square error is $O(h)$.

[A1] [[def-axiom-of-choice]]: AC is inherited through the Brownian/strong-Milstein interface [L1].

## Verification

**Given:** The assumptions above.

1.1 Here $b(x)=0$, $\sigma(x)=\sin x$, and $\sigma'(x)=\cos x$. At $Y_n=\pi/4$, both $\sigma(Y_n)$ and $\sigma'(Y_n)$ equal $1/\sqrt2$, so [F1] gives the stated update with correction coefficient $\frac12(1/\sqrt2)^2=1/4$. The function $\sin x$ and its derivatives through order three are bounded and continuous, so it meets the regularity premise of [L1]. [F1, L1, given, algebra]

1.2 By [F2], the correction has conditional mean $\frac14(h-h)=0$ and variance $\frac1{16}(3h^2-2h^2+h^2)=h^2/8$. Its covariance with the linear noise term is $\frac{1}{4\sqrt2}\mathbb E[(\Delta W_n)^3-h\Delta W_n]=0$. Hence the one-step increment variance is $h/2+h^2/8$, and the derivative correction is a separate nonzero fluctuation. [F2, step 1.1, algebra]

2.1 Applying [L1] to the SDE with $b=0$ and $\sigma(x)=\sin x$ yields grid root-mean-square error $O(h)$ on every fixed finite horizon. This is the theorem's bounded-coefficient multiplicative-noise case under the inherited AC convention [A1]; it supplies no weak-order-two statement for Heun. [L1, A1, given] ∎
