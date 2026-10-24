---
id: lem-bernstein-polynomial-lipschitz-error
kind: lemma
title: "Uniform error bound for Bernstein approximation of a Lipschitz function"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "George G. Lorentz, Bernstein Polynomials, Chapter 1"
      url: "https://archive.org/download/bernsteinpolynomi0000lore/bernsteinpolynomi0000lore.pdf"
      locator: "Chapter 1, Bernstein basis and binomial expectation representation."
    - title: "Michael J. Sullivan, Deep Learning Theory, §5.1"
      url: "https://mjt.cs.illinois.edu/dlt/index.html"
      locator: "§5.1, binomial random-variable representation of Bernstein polynomials."
---

## Statement

Let $L\ge0$, let $f:[0,1]\to\mathbb R$ satisfy $|f(x)-f(y)|\le L|x-y|$, and let $N\ge1$ be an integer. The Bernstein polynomial $$B_Nf(x):=\sum_{j=0}^N f(j/N)\binom Njx^j(1-x)^{N-j}$$ satisfies $$\sup_{x\in[0,1]}|B_Nf(x)-f(x)|\le\frac{L}{2\sqrt N}.$$

## Statement references

[Lorentz, Chapter 1: Bernstein polynomials and binomial moments](https://archive.org/download/bernsteinpolynomi0000lore/bernsteinpolynomi0000lore.pdf)

[Sullivan, §5.1: Bernstein expectation representation](https://mjt.cs.illinois.edu/dlt/index.html)

## Facts & Assumptions

**Given:** A real number $L\ge0$, an $L$-Lipschitz function $f:[0,1]\to\mathbb R$, an integer $N\ge1$, and $x\in[0,1]$.

## Proof

1.1 Take independent Bernoulli variables $X_1,\ldots,X_N$ with success probability $x$, and put $S=\sum_iX_i$. The binomial formula gives $B_Nf(x)=\mathbb E f(S/N)$, so the Lipschitz hypothesis yields $|B_Nf(x)-f(x)|\le L\mathbb E|S/N-x|$. [given, construct, algebra]

2.1 Independence gives $\mathbb E S=\sum_{i=1}^N\mathbb E X_i=Nx$ and $\operatorname{Var}(S)=\sum_{i=1}^N\operatorname{Var}(X_i)=Nx(1-x)$, because each Bernoulli variable has variance $x(1-x)$. Therefore Cauchy–Schwarz yields $\mathbb E|S/N-x|\le\sqrt{\mathbb E(S/N-x)^2}=\sqrt{x(1-x)/N}\le1/(2\sqrt N)$. The estimate holds for every $x$, proving the uniform bound. [step 1.1, algebra] ∎
