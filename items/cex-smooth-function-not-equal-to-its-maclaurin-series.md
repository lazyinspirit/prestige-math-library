---
id: cex-smooth-function-not-equal-to-its-maclaurin-series
kind: counterexample
title: "A smooth function not equal to its Maclaurin series"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [ex-flat-exponential-function, thm-chain-rule, thm-algebra-of-derivatives, def-taylor-and-maclaurin-series]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis, Example 10.31 and Corollary 10.30"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "W. F. Trench, Introduction to Real Analysis, §4.5"
      url: "https://digitalcommons.trinity.edu/mono/7/"
pipeline_run: null
---

## Statement refuted

If a smooth real function has a Maclaurin series that converges everywhere,
then the function equals the sum of that series everywhere.

## Counterexample

Define

$$
\psi(x)=
\begin{cases}
e^{-1/x^2},&x\ne0,\\
0,&x=0.
\end{cases}
$$

Then $\psi\in C^\infty(\mathbb R)$ and $\psi^{(n)}(0)=0$ for every $n\ge0$.
Consequently its Maclaurin series is the zero series, which converges for every
real $x$, while $\psi(x)>0$ whenever $x\ne0$.

## Facts & Assumptions

**Given:** The function $\psi$ displayed above.

[C1] Let
$$
\phi(u)=
\begin{cases}
e^{-1/u},&u>0,\\
0,&u\le0,
\end{cases}
\qquad q(x)=x^2,
$$
so that $\psi=\phi\circ q$.

[L1] The function $\phi$ belongs to $C^\infty(\mathbb R)$,
$\phi^{(j)}(0)=0$ for every $j\ge0$, and $\phi(u)>0$ for $u>0$
([[ex-flat-exponential-function]]).

[L2] If $g$ is differentiable at $x$ and $h$ is differentiable at $g(x)$,
then $(h\circ g)'(x)=h'(g(x))g'(x)$ ([[thm-chain-rule]]).

[L3] Sums and products of differentiable functions are differentiable, with
the sum and product rules ([[thm-algebra-of-derivatives]]).

[L4] The Maclaurin series of a smooth function $f$ is
$\sum_{n\ge0}f^{(n)}(0)x^n/n!$; its definition alone asserts neither
convergence nor equality with $f$ ([[def-taylor-and-maclaurin-series]]).

## Proof

**Proof technique:** direct.

1.1 The polynomial $q(x)=x^2$ is smooth, $q'(x)=2x$, and $\psi(x)=\phi(q(x))$ for every $x\in\mathbb R$. [C1, L1, L3, algebra]

1.2 The derivative of any finite sum of functions of the form $p(x)\phi^{(j)}(q(x))$, with $p$ a polynomial, is again a finite sum of this form. [L1, L2, L3, algebra]

1.3 If $x\ne0$, then $q(x)=x^2>0$, and therefore $\psi(x)=\phi(q(x))>0$. [C1, L1, algebra]

2.1 Starting from $\psi=\phi\circ q$ and applying step 1.2 repeatedly shows that every derivative of $\psi$ exists; moreover, for each $m\ge0$, $\psi^{(m)}$ is a finite sum of functions $p(x)\phi^{(j)}(q(x))$. [step 1.1, step 1.2]

3.1 For every $m$, step 2.1 makes $\psi^{(m)}$ differentiable at every point because its next derivative exists. The derivative definition then makes $\psi^{(m)}$ continuous: near a point $x_0$, its difference quotient is bounded by $|\psi^{(m+1)}(x_0)|+1$, so its increment tends to zero with $x-x_0$. Hence $\psi\in C^\infty(\mathbb R)$. [step 2.1, algebra]

3.2 At $x=0$, every summand in step 2.1 vanishes because $q(0)=0$ and $\phi^{(j)}(0)=0$. Hence $\psi^{(m)}(0)=0$ for every $m\ge0$. [L1, step 2.1, algebra]

4.1 By the definition of the Maclaurin series, every coefficient of the Maclaurin series of $\psi$ is zero, so the series converges everywhere to $0$. [L4, step 3.2, algebra]

5.1 Thus the everywhere-convergent Maclaurin series agrees with $\psi$ at $x=0$ but disagrees with it at every $x\ne0$, refuting the stated claim. [step 1.3, step 4.1] ∎
