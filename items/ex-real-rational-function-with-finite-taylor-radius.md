---
id: ex-real-rational-function-with-finite-taylor-radius
kind: example
title: "The real function 1/(1+x^2) is smooth on the real line but its Maclaurin series has radius one"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-cauchy-hadamard-for-complex-power-series, thm-algebra-of-derivatives, thm-algebra-of-continuous-functions, def-higher-derivatives-and-smoothness, lem-derivative-of-a-power]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

For real $x$ with $|x|<1$,
$$\frac1{1+x^2}=\sum_{n=0}^{\infty}(-1)^nx^{2n}.$$
The function on the left is smooth on all of $\mathbb R$, but the displayed Maclaurin series has radius $1$.

## Facts & Assumptions

**Given:** The real rational function $f(x)=1/(1+x^2)$.

[L1] If $L=\limsup_{k\to\infty}|c_{k+1}|^{1/(k+1)}$, Cauchy–Hadamard gives radius $+\infty$ for $L=0$, radius $1/L$ for $0<L<+\infty$, and radius $0$ for $L=+\infty$ ([[thm-cauchy-hadamard-for-complex-power-series]]).

[L2] Let $A\subseteq\mathbb R$, let $c\in A$ be a limit point of $A$, and let $f,g:A\to\mathbb R$ be **differentiable at $c$**. Then $f+g$, $\alpha f$ and $fg$ are differentiable at $c$ with the usual formulas, and if $g(c)\ne0$ the quotient $f/g$ is differentiable at $c$ with the quotient rule. Differentiability of the inputs is a hypothesis, not a conclusion ([[thm-algebra-of-derivatives]]).

[L3] Sums, products, and quotients with nonzero denominator of continuous real functions are continuous ([[thm-algebra-of-continuous-functions]]).

[L4] Smooth means having continuous derivatives of every order ([[def-higher-derivatives-and-smoothness]]).

[L5] For $n\in\mathbb N$ the power function $p_n(x)=x^n$ is differentiable at every $c\in\mathbb R$; in particular $p_0$ is the constant function $1$ with $p_0'(c)=0$, and $p_1$ is the identity with $p_1'(c)=1$ ([[lem-derivative-of-a-power]]).

## Verification

**Proof technique:** direct.

1.1 The finite geometric identity with ratio $-x^2$ gives the displayed series for $|x|<1$; its coefficients at even indices have modulus $1$, so [L1] gives radius $1$. [L1, algebra]

1.2 The hypothesis of [L2] is that the inputs are already differentiable, so the induction needs a base: by [L5] the constant and identity functions are differentiable everywhere, and [L2] applied to sums and products makes every real polynomial differentiable everywhere, $1+x^2$ among them. Since $1+x^2>0$ for every real $x$, the quotient clause of [L2] applies at every point, and an induction on the order — each step differentiating a quotient of polynomials with denominator a positive power of $1+x^2$, which [L5] and [L2] make differentiable — expresses every derivative of $f$ as such a quotient. [L3] then makes each derivative continuous. [L2, L3, L5, algebra]

2.1 Therefore $f$ is smooth by [L4] while its Maclaurin series has finite radius. [step 1.1, step 1.2, L4] ∎
