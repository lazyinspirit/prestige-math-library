---
id: lem-contrastive-hinge-and-logistic-loss-properties
kind: lemma
title: "Convexity, Lipschitz bounds, and oscillation of the source contrastive losses"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - cor-second-derivative-characterises-convexity
  - def-natural-logarithm
  - def-real-exponential-function-and-e
  - lem-derivative-algebra-and-chain-rules
  - lem-mean-value-theorem-on-closed-interval
  - thm-derivative-of-exponential
  - thm-logarithm-derivative-and-integral
  - thm-natural-logarithm-laws
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Nikunj Saunshi et al., A Theoretical Analysis of Contrastive Unsupervised Representation Learning, Section 2.2"
      url: "https://proceedings.mlr.press/v97/saunshi19a/saunshi19a.pdf"
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025, Lectures 15–16"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
---

## Statement

Write $\ln$ for the natural logarithm and $\log_2 u:=\ln(u)/\ln(2)$ for $u>0$. Define the one-negative hinge and logistic losses by $\ell_{\rm h}(t):=(1+t)_+$ and $\ell_{\rm log}(t):=\log_2(1+e^t)$ for $t\in\mathbb R$, where $r_+:=\max\{r,0\}$. Put $L_0:=1+1/\ln(2)$. Each loss is convex, nondecreasing, $L_0$-Lipschitz, and has value $1$ at $0$. For $R>0$ and either loss $\ell$, define $B_{\ell,R}:=\ell(2R^2)-\ell(-2R^2)$. Then $0<B_{\ell,R}\le4L_0R^2$.

## Statement references

[[def-natural-logarithm]]

[[thm-natural-logarithm-laws]]: fix the natural-logarithm convention and its strict monotonicity.

[[thm-derivative-of-exponential]]

[[thm-logarithm-derivative-and-integral]]

[[lem-derivative-algebra-and-chain-rules]]: supply the derivatives used for the logistic loss.

[[cor-second-derivative-characterises-convexity]]: nonnegative second derivative implies convexity on an open interval.

[[lem-mean-value-theorem-on-closed-interval]]: a derivative bound gives a Lipschitz bound on each closed interval.

[Saunshi et al., Section 2.2, one-negative hinge and logistic losses](https://proceedings.mlr.press/v97/saunshi19a/saunshi19a.pdf).

[MIT OpenCourseWare, Real Analysis, Lectures 15–16](https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf).

## Facts & Assumptions

**Given:** The two functions and $L_0$ in the Statement, and $R>0$.

[F1] $\ln$ is the inverse of the real exponential, is strictly increasing, and satisfies $\ln 1=0$; hence $\ln 2>0$. [[def-natural-logarithm]], [[thm-natural-logarithm-laws]]

[F2] $e^t>0$, $(e^t)'=e^t$, and $(\ln t)'=1/t$ for $t>0$. [[def-real-exponential-function-and-e]], [[thm-derivative-of-exponential]], [[thm-logarithm-derivative-and-integral]]

[F3] The sum, product, quotient, and chain rules hold for differentiable real functions. [[lem-derivative-algebra-and-chain-rules]]

[F4] A twice-differentiable real function with nonnegative second derivative is convex. [[cor-second-derivative-characterises-convexity]]

[F5] If a real function is continuous on $[a,b]$ and differentiable on $(a,b)$, its increment equals its derivative at some interior point times $b-a$. [[lem-mean-value-theorem-on-closed-interval]]

## Proof

**Given:** The functions and constant in the Statement.

1.1 The positive-part function is nondecreasing and $1$-Lipschitz: if two inputs have the same sign, the positive-part difference is either their difference or zero; if they have opposite signs, the positive part of the nonnegative input is at most the distance between them. It is convex as the maximum of the affine functions $0$ and $1+t$. Therefore $\ell_{\rm h}$ is nondecreasing, convex, and $1$-Lipschitz, and $\ell_{\rm h}(0)=1$. [given, algebra]

1.2 By [F2]–[F3] and the chain rule, $$\ell_{\rm log}'(t)=\frac{e^t}{(1+e^t)\ln2},\qquad \ell_{\rm log}''(t)=\frac{e^t}{(1+e^t)^2\ln2}.$$ [F2, F3, given, algebra]

2.1 By [F1], $\ln2>0$, and [F2] gives $e^t>0$. Step 1.2 therefore shows that $0<\ell_{\rm log}'(t)\le1/\ln2$ for every real $t$. The derivative is positive, so the logistic loss is strictly increasing; applying [F5] on each closed interval gives the global $1/\ln2$ Lipschitz bound. [F1, F2, F5, step 1.2, given, algebra]

2.2 The second derivative in step 1.2 is nonnegative because its numerator and denominator are positive. The convexity criterion [F4] gives convexity of $\ell_{\rm log}$. Also $\ell_{\rm log}(0)=\log_2(2)=1$ from the definition of $\log_2$. [F1, F4, step 1.2, given, algebra]

3.1 Since $L_0$ exceeds both Lipschitz constants, steps 1.1 and 2.1 give the common $L_0$-Lipschitz bound and strict increase for both losses. Hence $B_{\ell,R}=\ell(2R^2)-\ell(-2R^2)>0$. The interval has length $4R^2$, so its Lipschitz bound gives $B_{\ell,R}\le4L_0R^2$. [step 1.1, step 2.1, given, algebra] ∎
