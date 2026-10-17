---
id: lem-two-cell-hat-and-quadratic-functions-lie-in-h10
kind: lemma
title: The two-cell hat and quadratic functions belong to H¹₀
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-countable-choice
  - def-sobolev-space-wkp-and-its-norm
  - def-the-standard-smooth-step-function
  - def-wkp-zero-as-a-sobolev-closure
  - lem-classical-derivatives-are-weak-derivatives
  - thm-algebra-of-derivatives
  - thm-chain-rule
  - thm-extreme-value-r
  - thm-complex-holder-minkowski-and-the-quotient-norm
  - def-integrable-real-and-complex-functions-and-their-integrals
  - def-nonnegative-lebesgue-integral
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-lebesgue-measure-of-a-box-of-every-kind
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification: {}
sources:
  references:
    - title: "Thomas Richter, Die Finite Elemente Methode für partielle Differentialgleichungen"
      url: "https://numerics.ovgu.de/teaching/numpde/skript.pdf"
      locator: "§3.1.1, printed pp.52–54: conforming Sobolev/finite-element framework. The displayed two-cell functions and explicit compactly supported smooth cutoff approximants are a local adaptation proved in this item, not a quoted source theorem."
---

## Statement

Assume Countable Choice. Let $I=(0,1)$ and define
$$\phi(x)=\begin{cases}2x,&0\le x\le\frac12,\\2(1-x),&\frac12\le x\le1,\end{cases} \qquad p(x)=\frac12x(1-x).$$
Then $\phi|_I,p|_I\in H^1_0(I)=W^{1,2}_0(I)$, the closure of
$C_c^\infty(I)$ in $W^{1,2}(I)$ ([[def-wkp-zero-as-a-sobolev-closure]]).

## Facts & Assumptions

**Given:** Countable Choice; $I=(0,1)$, the piecewise linear hat function
$\phi$, and the quadratic $p$ displayed in **Statement**.

[F1] A $W^{1,2}$ function is an $L^2$ class with an $L^2$ weak derivative,
defined by integration against compactly supported smooth tests
([[def-sobolev-space-wkp-and-its-norm]]).

[F2] $W^{1,2}_0(I)$ is the closure of $C_c^\infty(I)$ in the $W^{1,2}$ norm
([[def-wkp-zero-as-a-sobolev-closure]]).

[F3] A smooth function and each of its classical derivatives are weak
derivatives under Countable Choice
([[lem-classical-derivatives-are-weak-derivatives]]).

[F4] The smooth step $\sigma$ is smooth, equals $0$ on $(-\infty,0]$ and
$1$ on $[1,\infty)$, takes values in $[0,1]$, and is given by
$\sigma(t)=\beta(t)/(\beta(t)+\beta(1-t))$
([[def-the-standard-smooth-step-function]]).

[F5] Products and compositions of differentiable functions obey the product
and chain rules ([[thm-algebra-of-derivatives]], [[thm-chain-rule]]).

[F6] A $C^1$ diffeomorphism satisfies the change-of-variables formula for
nonnegative Lebesgue-measurable integrands when Countable Choice holds
([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]).

[F7] The continuous derivative $\sigma'$ is bounded on $[0,1]$
([[thm-extreme-value-r]]).

[F8] For complex $L^2$ functions, $\int|fg|\le\|f\|_2\|g\|_2$, so these
products are integrable and the pairing is bounded
([[thm-complex-holder-minkowski-and-the-quotient-norm]]).

[F9] For an integrable real function $f$, $\int f=\int f^+-\int f^-$
([[def-integrable-real-and-complex-functions-and-their-integrals]]).

[F10] The interval $I=(0,1)$ has measure one, the integral of its indicator is
its measure, and the nonnegative integral is monotone
([[thm-lebesgue-measure-of-a-box-of-every-kind]],
[[def-nonnegative-lebesgue-integral]],
[[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[A1] Countable Choice is assumed by the Sobolev, zero-boundary, classical weak
derivative and $C^1$ integral-change suppliers used here
([[def-countable-choice]]).

## Proof

1.1 Put $\zeta(t)=1-2\sigma(t)$. Formula [F4] gives $\sigma(1-t)=1-\sigma(t)$ on $[0,1]$, hence $\zeta(1-t)=-\zeta(t)$. Let $T(t)=1-t$ on $I$; it is a $C^1$ diffeomorphism with $|T'(t)|=1$. The continuous functions $\zeta_+=\max(\zeta,0)$ and $\zeta_- =\max(-\zeta,0)$ satisfy $0\le\zeta_\pm\le1$, and [F10] gives $\int_I\zeta_\pm\le\int_I1_I=\lambda_1(I)=1$, so both are integrable. Applying [F6] separately to these nonnegative functions gives $\int_I\zeta_+=\int_I\zeta_+(1-t)=\int_I\zeta_-$, where the last equality uses antisymmetry. By [F9], $\int_I\zeta=\int_I\zeta_+-\int_I\zeta_-=0$. For $0<\varepsilon<1/6$, define $g_\varepsilon(x)=2\zeta((x-1/2+\varepsilon)/(2\varepsilon))$ and $q_\varepsilon(x)=\int_0^xg_\varepsilon(t)\,dt$. By [F4]–[F5], $g_\varepsilon$ is smooth, equals $2$ for $x\le1/2-\varepsilon$ and $-2$ for $x\ge1/2+\varepsilon$. Applying [F6] separately to $\zeta_+$ and $\zeta_-$ under $x=1/2-\varepsilon+2\varepsilon t$, and subtracting by [F9], gives the transition integral $4\varepsilon\int_0^1\zeta=0$; the two constant pieces cancel, so $\int_0^1g_\varepsilon=0$. For $h\ne0$ with $x+h\in[0,1]$, the difference quotient of $q_\varepsilon$ is the average of $g_\varepsilon$ between $x$ and $x+h$; its difference from $g_\varepsilon(x)$ is bounded by $\sup_{|t-x|\le|h|}|g_\varepsilon(t)-g_\varepsilon(x)|$, which tends to zero by continuity. Thus $q_\varepsilon'=g_\varepsilon$ and $q_\varepsilon$ is smooth. It vanishes at both endpoints and agrees with $\phi$ outside $(1/2-\varepsilon,1/2+\varepsilon)$. On that interval, $|q_\varepsilon'-\phi'|\le4$ almost everywhere, so $\|q_\varepsilon'-\phi'\|_2^2\le32\varepsilon$. Also $|q_\varepsilon-\phi|\le8\varepsilon$ there and the difference vanishes outside, so $\|q_\varepsilon-\phi\|_2^2\le128\varepsilon^3$. [F4, F5, F6, F9, F10, given, A1, algebra]

2.1 By [F3], each $q_\varepsilon$ has weak derivative $g_\varepsilon$. The convergence estimates in step 1.1 and [F8] allow passage to the limit in $\int_I q_\varepsilon\psi'=-\int_Ig_\varepsilon\psi$ for every $\psi\in C_c^\infty(I)$, giving $\int_I\phi\psi'=-\int_I\phi'\psi$, where $\phi'=2$ on the left half and $\phi'=-2$ on the right half. Thus $\phi\in W^{1,2}(I)$. The polynomial $p$ is smooth with $p'=1/2-x$ and both $p,p'\in L^2(I)$, so [F1] and [F3] give $p\in W^{1,2}(I)$. [F1, F3, F8, A1, given, step 1.1, algebra]

2.2 Let $C_\sigma=\sup_{[0,1]}|\sigma'|<\infty$ by [F7], and define $\eta_\varepsilon(x)=\sigma(x/\varepsilon-1)\sigma((1-x)/\varepsilon-1)$. By [F4]–[F5], this smooth cutoff vanishes for $x\le\varepsilon$ and $x\ge1-\varepsilon$, equals $1$ on $[2\varepsilon,1-2\varepsilon]$, and $|\eta_\varepsilon'|\le2C_\sigma/\varepsilon$. For the same $\varepsilon$, $q_\varepsilon=2x$ on $(0,2\varepsilon)$ and $q_\varepsilon=2(1-x)$ on $(1-2\varepsilon,1)$. Thus $\eta_\varepsilon q_\varepsilon\in C_c^\infty(I)$, $|q_\varepsilon|\le4\varepsilon$ and $|q_\varepsilon'|=2$ on $E_\varepsilon=(0,2\varepsilon)\cup(1-2\varepsilon,1)$. The function error has squared norm at most $64\varepsilon^3$. For the derivative difference $(\eta_\varepsilon-1)q_\varepsilon'+\eta_\varepsilon'q_\varepsilon$, the first term has squared norm at most $16\varepsilon$; the second has modulus at most $8C_\sigma$ on a set of length $2\varepsilon$, so its squared norm is at most $128C_\sigma^2\varepsilon$. Therefore $\eta_\varepsilon q_\varepsilon-q_\varepsilon\to0$ in $W^{1,2}(I)$. Together with step 1.1 this gives $\eta_\varepsilon q_\varepsilon\to\phi$. [F2, F4, F5, F7, A1, step 1.1, algebra]

3.1 Using the cutoff $\eta_\varepsilon$ from step 2.2, its product with $p$ lies in $C_c^\infty(I)$. Since $|p(x)|\le\min(x,1-x)/2$ and $|p'(x)|\le1/2$, $\|\eta_\varepsilon p-p\|_2^2\le4\varepsilon^3$. The derivative difference is $(\eta_\varepsilon-1)p'+\eta_\varepsilon'p$; the first term has squared norm at most $\varepsilon$, and the second is supported on two intervals of total length $2\varepsilon$ with modulus at most $2C_\sigma$, so its squared norm is at most $8C_\sigma^2\varepsilon$. Hence $\eta_\varepsilon p\to p$ in $W^{1,2}(I)$. [F2, F4, F5, F7, A1, step 2.2, algebra]

4.1 Take the explicit sequence $\varepsilon_n=1/(10(n+1))$, which lies in $(0,1/6)$ and tends to zero. Steps 3.1 and 2.2 approximate $p$ and $\phi$ by members of $C_c^\infty(I)$ along this sequence. By the closure definition [F2], both classes belong to $W^{1,2}_0(I)$, as claimed. [F2, A1, step 3.1, step 2.2, algebra] ∎
