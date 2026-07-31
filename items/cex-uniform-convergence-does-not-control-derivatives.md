---
id: cex-uniform-convergence-does-not-control-derivatives
kind: counterexample
title: "$x/(1+(k+1)^2x^2)$ converges uniformly to zero on $\\mathbb{R}$ while every derivative at zero equals one"
status: published
origin: session
deps: [def-pointwise-uniform-and-uniformly-cauchy-convergence, def-derivative, def-canonical-natural, cor-archimedean-reciprocal, lem-of-square-positive, lem-of-abs-value, def-integer-power, lem-derivative-of-a-power, thm-algebra-of-derivatives]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-07-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B, Real Analysis, Lectures 20–21"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** if differentiable functions converge uniformly, their
derivatives must converge to the derivative of the limit.

For $k\in\mathbb{N}$ put $a_k:=\iota(k+1)$ and define

$$f_k(x):=\frac{x}{1+a_k^2x^2}\qquad(x\in\mathbb{R}).$$

Then $f_k\to0$ uniformly on $\mathbb{R}$, but $f_k'(0)=1$ for every $k$, whereas
the derivative of the zero function is $0$.

## Facts & Assumptions

**Given:** The functions $f_k$ in the Statement, with $a_k=\iota(k+1)>0$.

[L1] Every square in an ordered field is nonnegative, with a nonzero square positive; absolute value is multiplicative ([[lem-of-square-positive]], [[lem-of-abs-value]]).

[L2] Natural powers are differentiable by the power rule, and sums, products, and quotients with nonzero denominator obey the usual derivative rules ([[lem-derivative-of-a-power]], [[thm-algebra-of-derivatives]], [[def-derivative]], [[def-integer-power]]).

[L3] For every real $\varepsilon>0$ there is $N\ge1$ with $1/\iota(N)<\varepsilon$ ([[cor-archimedean-reciprocal]], [[def-canonical-natural]]).

[L4] Uniform convergence requires one index controlling the error at every point ([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

## Counterexample

**Proof technique:** direct.

1.1 The denominator $1+a_k^2x^2$ is positive for every $x$, so $f_k$ is differentiable on $\mathbb{R}$ by [L2]. [L1, L2]

1.2 From $(a_k|x|-1)^2\ge0$ one obtains $2a_k|x|\le1+a_k^2x^2$, hence $|f_k(x)|\le1/(2a_k)$ for every $x\in\mathbb{R}$. [L1, algebra]

1.3 At $x=0$, the numerator $x$ has derivative $1$, the denominator $1+a_k^2x^2$ has value $1$ and derivative $0$, so the quotient rule gives $f_k'(0)=1$. [L2, algebra]

1.4 The zero function has derivative $0$ by the constant case of the power rule. [L2]

2.1 Given $\varepsilon>0$, [L3] gives $N$ such that $1/(2a_k)<\varepsilon$ for every $k\ge N$; step 1.2 then gives $|f_k(x)|<\varepsilon$ for every $x\in\mathbb{R}$. [step 1.2, L3, choose]

3.1 Step 2.1 proves $f_k\to0$ uniformly, while steps 1.3 and 1.4 show that the derivatives at $0$ do not converge to the derivative of the limit. [step 2.1, step 1.3, step 1.4, L4]

4.1 The uniformly convergent differentiable sequence therefore refutes the claim. [step 3.1] ∎
