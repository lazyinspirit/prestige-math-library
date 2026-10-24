---
id: lem-smooth-unit-mass-compact-bump-on-euclidean-space
kind: lemma
title: "Euclidean spaces admit a smooth compactly supported unit-mass bump"
status: published
dependency_level: 0
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: ["def-countable-choice", "thm-exponential-beats-every-polynomial", "thm-derivative-of-exponential", "cor-exponential-reciprocal-and-positivity", "thm-chain-rule", "thm-algebra-of-derivatives", "thm-extreme-value-r", "prop-order-and-scalar-rules-for-the-nonnegative-integral", "thm-lebesgue-measure-of-a-box-of-every-kind", "thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets", "thm-tonelli-theorem-for-sigma-finite-product-spaces"]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
axiom_use: "Countable Choice enters through the box-measure and product-Lebesgue suppliers; the explicit one-dimensional construction is choice-free."
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "MIT 18.102, Chapter 4, §9 Convolution, Lemma 58, printed pp. 136–137"
      url: "https://math.mit.edu/~rbm/18-102-Sp16/Chapter4.pdf"
---
## Statement

Assume Countable Choice. For every integer $d\ge1$ there is a nonnegative function $\rho_d:\mathbb R^d\to\mathbb R$ with continuous partial derivatives of every order, support exactly $[-1,1]^d$, strictly positive on $(-1,1)^d$, and Lebesgue integral $\int_{\mathbb R^d}\rho_d(x)\,dx=1$. Here the support is the closure of the set where the function is nonzero.

## Statement references

[[def-countable-choice]]

[J. K. Hunter, MIT 18.102, Chapter 4, §9 Convolution, Lemma 58](https://math.mit.edu/~rbm/18-102-Sp16/Chapter4.pdf)

## Facts & Assumptions

**Given:** Countable Choice and an integer $d\ge1$.

[A1] Countable Choice is assumed in the product-Lebesgue identification used in [F4]. [[def-countable-choice]]

[F1] For every integer $N\ge0$, $u^N e^{-u}\to0$ as $u\to+\infty$; therefore a polynomial in $u$ times $e^{-u}$ tends to zero. [[thm-exponential-beats-every-polynomial]]

[F2] The exponential is smooth and positive, and the chain and product rules differentiate its affine composites and finite products. [[thm-derivative-of-exponential]] [[cor-exponential-reciprocal-and-positivity]] [[thm-chain-rule]] [[thm-algebra-of-derivatives]]

[F3] Under Countable Choice, the Lebesgue measure of a box is its side-length product; a continuous function on a compact interval is bounded, and the nonnegative integral is monotone and homogeneous. [[thm-lebesgue-measure-of-a-box-of-every-kind]] [[thm-extreme-value-r]] [[prop-order-and-scalar-rules-for-the-nonnegative-integral]] [[def-countable-choice]]

[F4] Under Countable Choice, Euclidean Lebesgue measure on a finite product is the product of the coordinate Lebesgue measures, and Tonelli factors nonnegative product integrals. [[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] [[def-countable-choice]]

## Proof
1.1 Define $\phi(t)=e^{-1/t}$ for $t>0$ and $\phi(t)=0$ for $t\le0$. For each $k\ge0$, repeated chain and product rules give $\phi^{(k)}(t)=P_k(1/t)e^{-1/t}$ on $t>0$ for a polynomial $P_k$: it holds with $P_0=1$, and if $u=1/t$ then differentiation replaces $P_k(u)$ by the polynomial $u^2(P_k(u)-P_k'(u))$. By [F1], this derivative tends to $0$ as $t\downarrow0$. Its difference quotient at $0$ is $uP_k(u)e^{-u}$ with $u=1/t$, which also tends to $0$ by [F1]; from the left it is zero. Induction therefore gives every derivative at $0$ equal to $0$ and continuous there, so $\phi$ is smooth on $\mathbb R$. [F1, F2, given, induction]

2.1 Set $\Phi(t)=\phi(t+1)\phi(1-t)$. By [F2], $\Phi$ is smooth. It vanishes for $t\notin[-1,1]$ and is positive for $-1<t<1$, so its support is $[-1,1]$. Let $I=\int_{\mathbb R}\Phi(t)\,dt$. The extreme-value bound [F3] makes $\Phi$ bounded on $[-1,1]$, so $I<\infty$. Since $\Phi(0)=e^{-2}>0$, continuity gives $\delta\in(0,1)$ with $\Phi(t)\ge e^{-2}/2$ on $[-\delta,\delta]$; [F3] gives $I\ge\delta e^{-2}>0$. Hence $\psi=\Phi/I$ is smooth, supported on $[-1,1]$, positive on $(-1,1)$, and has integral one. [A1, F2, F3, step 1.1]

3.1 Define $\rho_d(x_1,\ldots,x_d)=\prod_{j=1}^d\psi(x_j)$. Repeated coordinatewise chain and product rules give every partial derivative as $\prod_{j=1}^d\psi^{(\alpha_j)}(x_j)$ for its multi-index $\alpha$, so all partial derivatives are continuous. The function is nonnegative, vanishes outside $[-1,1]^d$, and is positive at every point of $(-1,1)^d$; therefore its support is exactly that closed cube. [F2, given, step 2.1]

4.1 For $d=1$, $\int\rho_1=1$ by step 2.1. By step 3.1, $\rho_d$ is a nonnegative Borel function supported in the compact cube. For $d\ge2$, split $\mathbb R^d=\mathbb R^{d-1}\times\mathbb R$. By [F4] and Tonelli, $\int\rho_d\,dx=(\int\rho_{d-1}\,dx)(\int\psi\,dt)$; the second factor is $1$ by step 2.1. Induction on $d$ proves $\int_{\mathbb R^d}\rho_d\,dx=1$. [A1, F4, step 2.1, step 3.1, induction] ∎
