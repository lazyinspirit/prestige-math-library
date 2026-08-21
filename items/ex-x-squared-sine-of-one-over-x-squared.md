---
id: ex-x-squared-sine-of-one-over-x-squared
kind: example
title: "$x^2\\sin(1/x^2)$ has an unbounded, non-Riemann-integrable derivative"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-sine-and-cosine-derivatives, thm-chain-rule,
       thm-algebra-of-derivatives, lem-derivative-of-a-power,
       cor-trigonometric-parity-and-pythagorean-identity, def-derivative,
       def-darboux-integral, thm-sine-cosine-zero-sets-and-fundamental-period,
       thm-quarter-turn-values-and-shift-formulas, thm-nth-roots-exist,
       cor-archimedean-reciprocal, def-pi-via-first-positive-cosine-zero,
       thm-cosine-has-a-smallest-positive-zero]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Adam Coffman, Yifei Pan, and Yuan Zhang, Continuous Solutions of Nonlinear Cauchy–Riemann Equations and Pseudoholomorphic Curves in Normal Coordinates, Remark 3.6"
      url: "https://arxiv.org/pdf/1410.1582"
pipeline_run: null
---

## Example

Define $F:\mathbb R\to\mathbb R$ by

$$F(0):=0,\qquad F(x):=x^2\sin(1/x^2)\quad(x\ne0).$$

The function $F$ is differentiable on $\mathbb R$, with $F'(0)=0$, and $F'$ is unbounded on every neighbourhood of zero. Consequently no extension of
$F'|_{(0,1]}$ to $[0,1]$ is Riemann integrable under the Darboux convention.

## Facts & Assumptions

**Given:** The function $F$ in the Example.

[L1] For every real $u$, $|\sin u|\le1$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

[L2] $(\sin u)'=\cos u$ ([[thm-sine-and-cosine-derivatives]]).

[L3] The chain rule computes the derivative of a composite ([[thm-chain-rule]]).

[L4] Products and scalar multiples of differentiable functions are differentiable with the usual derivative formulas ([[thm-algebra-of-derivatives]]).

[L5] The power rule gives the derivatives of $x^2$ and $x^{-2}$ on their natural domains ([[lem-derivative-of-a-power]]).

[L6] Sine vanishes and cosine equals $1$ at every integer multiple of $2\pi$ ([[thm-sine-cosine-zero-sets-and-fundamental-period]], [[thm-quarter-turn-values-and-shift-formulas]], [[thm-sine-and-cosine-derivatives]]).

[L7] Every positive real has a unique positive square root ([[thm-nth-roots-exist]], case $n=2$).

[L8] For every real $\varepsilon>0$, there is a positive integer $N$ with $1/N<\varepsilon$ ([[cor-archimedean-reciprocal]]).

[L9] Darboux integrability on $[a,b]$ is defined for bounded real functions on that interval ([[def-darboux-integral]]).

[L10] The number $\pi=2\gamma$ is positive because $\gamma\in(0,2)$ ([[def-pi-via-first-positive-cosine-zero]], [[thm-cosine-has-a-smallest-positive-zero]]).

[L11] The derivative at zero is the limit of $(F(h)-F(0))/h$ as $h\to0$ through nonzero reals ([[def-derivative]]).

## Verification

**Proof technique:** direct.

1.1 For $h\ne0$, the difference quotient at zero from [L11] is $h\sin(1/h^2)$, whose absolute value is at most $|h|$ by [L1]. Hence $F'(0)=0$. [L1, L11, algebra]

1.2 For $x\ne0$, [L2] to [L5] give $$F'(x)=2x\sin(1/x^2)-\frac{2\cos(1/x^2)}{x}.$$ [L2, L3, L4, L5, algebra]

2.1 For $k\in\mathbb N$, let $x_k$ be the positive square root of $1/(2\pi(k+1))$. It exists by [L7] and [L10], and $1/x_k^2=2\pi(k+1)$, so [L6] and step 1.2 give $F'(x_k)=-2/x_k$. [step 1.2, L6, L7, L10, construct, algebra]

3.1 Let $\eta>0$. Applying [L8] below the positive real $2\pi\eta^2$ shows that $1/(2\pi(k+1))<\eta^2$ for all sufficiently large $k$, hence $0<x_k<\eta$ by uniqueness and order of the positive square root. Thus $x_k\to0$. Given a real $M>0$, the same argument with $\eta=2/M$ gives $2/x_k>M$ eventually, so $1/x_k\to+\infty$. Therefore the values $|F'(x_k)|=2/x_k$ exceed every real bound arbitrarily close to zero. [step 2.1, L7, L8, L10, algebra]

4.1 Steps 1.1, 1.2, and 3.1 show that $F$ is differentiable on $\mathbb R$, with $F'(0)=0$, while $F'$ is unbounded on every neighbourhood of zero. [step 1.1, step 1.2, step 3.1]

5.1 Every extension of $F'|_{(0,1]}$ to $[0,1]$ retains the unbounded values from step 3.1, but [L9] requires boundedness for Darboux integrability. No such extension is Riemann integrable on $[0,1]$. [step 3.1, step 4.1, L9] ∎
