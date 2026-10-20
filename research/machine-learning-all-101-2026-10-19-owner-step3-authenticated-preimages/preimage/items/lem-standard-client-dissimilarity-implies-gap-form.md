---
id: lem-standard-client-dissimilarity-implies-gap-form
kind: lemma
title: Standard client dissimilarity implies the gap form with unchanged parameters
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps: ["def-bounded-client-gradient-dissimilarity", "lem-l-smoothness-descent-inequality", "lem-finite-sum-gradient-is-average", "thm-cauchy-schwarz-and-the-euclidean-norm", "def-euclidean-inner-product"]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Karimireddy et al., SCAFFOLD, Section 2 (A1) and Appendix D.1, equations (13)–(14)"
      url: https://cs.nyu.edu/~mohri/pub/scaffold.pdf
proof_strategy: direct
---

## Statement

Let $N,d\ge1$ be positive integers, let $\beta>0$, and let
$f_i:\mathbb R^d\to\mathbb R$ be differentiable with $\beta$-Lipschitz
gradients. Put $f=N^{-1}\sum_i f_i$, and suppose $f(x)\ge f^\star$ for
all $x$, where $f^\star\in\mathbb R$ is finite. Then
$$ \|\nabla f(x)\|_2^2\le2\beta(f(x)-f^\star) \qquad(x\in\mathbb R^d). $$
Consequently, if the clients satisfy standard $(G,B)$-bounded gradient
dissimilarity, with $G\ge0$ and $B\ge1$, they satisfy the gap-form condition
with exactly the same $G,B,\beta,f^\star$:
$$ \frac1N\sum_i\|\nabla f_i(x)\|_2^2\le G^2+2\beta B^2(f(x)-f^\star) \qquad(x\in\mathbb R^d). $$
No convexity or attainment of the lower bound is required for this implication.

## Statement references

[[def-bounded-client-gradient-dissimilarity]]

[Karimireddy et al., SCAFFOLD, Appendix D.1, equations (13)–(14)](https://cs.nyu.edu/~mohri/pub/scaffold.pdf)

## Facts & Assumptions

**Given:** The differentiable client functions, common smoothness constant,
finite lower bound and, for the consequence, the standard condition in the Statement.

[F1] [[lem-finite-sum-gradient-is-average]]: $\nabla f=N^{-1}\sum_i\nabla f_i$.

[F2] [[thm-cauchy-schwarz-and-the-euclidean-norm]] and [[def-euclidean-inner-product]]: Euclidean norms satisfy the triangle inequality, positive homogeneity, and $\|v\|_2^2=\langle v,v\rangle$.

[F3] [[lem-l-smoothness-descent-inequality]]: a continuously differentiable function with $\beta$-Lipschitz gradient satisfies $f(y)\le f(x)+\langle\nabla f(x),y-x\rangle+(\beta/2)\|y-x\|_2^2$.

[F4] [[def-bounded-client-gradient-dissimilarity]]: standard dissimilarity bounds the population second moment by $G^2+B^2\|\nabla f(x)\|_2^2$.

## Proof

1.1 By [F1], $\nabla f(u)-\nabla f(v)=N^{-1}\sum_i(\nabla f_i(u)-\nabla f_i(v))$. The triangle inequality and homogeneity in [F2] imply $\|\nabla f(u)-\nabla f(v)\|_2\le N^{-1}\sum_i\beta\|u-v\|_2=\beta\|u-v\|_2$. Thus $f$ is continuously differentiable and has $\beta$-Lipschitz gradient, as required by [F3]. [F1, F2, given, algebra]

2.1 Fix $x$ and set $y=x-\beta^{-1}\nabla f(x)$. By [F3] and the finite global lower bound, $f^\star\le f(y)\le f(x)-\beta^{-1}\|\nabla f(x)\|_2^2+(2\beta)^{-1}\|\nabla f(x)\|_2^2=f(x)-(2\beta)^{-1}\|\nabla f(x)\|_2^2$. Rearrangement proves the first displayed inequality. The point $y$ lies in the domain $\mathbb R^d$; the use of $\beta^{-1}$ is valid because $\beta>0$. [F2, F3, step 1.1, given, construct, algebra]

3.1 Multiply step 2.1 by the nonnegative $B^2$ and substitute it into [F4]. This gives the asserted gap form, with no enlargement of $G$ or $B$ and the factor exactly $2\beta$. [F4, step 2.1, given, algebra] ∎

## Remarks

The reverse implication with the same parameters need not hold, even for
strongly convex clients. For example, on $\mathbb R$ take
$f_1(x)=x^2/2$ and $f_2(x)=3x^2/2$. Their equal-client mean is $f(x)=x^2$,
its minimum is $0$, and both clients are $1$-strongly convex and
$3$-smooth. The population gradient second moment is $5x^2$, while
$\|\nabla f(x)\|_2^2=4x^2$. The gap form holds with $G=0,B=1,\beta=3$
because $5x^2\le6x^2$, whereas the standard form with the same $G,B$
would require $5x^2\le4x^2$. Keeping the gap branch therefore retains
instances beyond the same-parameter standard condition.
