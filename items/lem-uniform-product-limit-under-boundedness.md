---
id: lem-uniform-product-limit-under-boundedness
kind: lemma
title: "Products converge uniformly when both factors converge uniformly and one limiting factor and one approximating family are uniformly bounded"
status: published
origin: session
deps: [def-pointwise-uniform-and-uniformly-cauchy-convergence, def-bounded-set, lem-of-abs-value, lem-of-triangle-inequality]
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
    - title: "J. Lebl, Basic Analysis I, §6.1"
      url: "https://www.jirka.org/ra/html/sec_puconv.html"
pipeline_run: null
---

## Statement

Let $X$ be a set, and suppose $f_k\to f$ and $g_k\to g$ uniformly on $X$.
Assume there are reals $B,C\ge0$ such that

$$|f(x)|\le B\quad\text{and}\quad |g_k(x)|\le C$$

for every $x\in X$ and every $k\in\mathbb{N}$. Then
$f_kg_k\to fg$ uniformly on $X$.

The same conclusion holds after interchanging the two factors: it is enough
that one limit function and the approximating sequence of the other factor
have uniform bounds.

## Facts & Assumptions

**Given:** Uniform convergence $f_k\to f$ and $g_k\to g$ on $X$, with bounds $|f(x)|\le B$ and $|g_k(x)|\le C$ for all $x,k$.

[A1] Uniform convergence gives one index serving all points for any prescribed positive real error ([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

[A2] A subset of $\mathbb{R}$ is bounded when it has real lower and upper bounds; the displayed absolute-value inequalities are the corresponding uniform bounds on the ranges ([[def-bounded-set]]).

[L1] For reals $u,v,c$, $|u+v|\le|u|+|v|$ and $|cu|=|c||u|$ ([[lem-of-triangle-inequality]], [[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 Let $\varepsilon>0$ be real and put $\eta:=\varepsilon/(B+C+1)>0$. [construct]

1.2 Choose $N$ such that, for every $k\ge N$ and every $x\in X$, both $|f_k(x)-f(x)|<\eta$ and $|g_k(x)-g(x)|<\eta$. [A1, choose]

2.1 For $k\ge N$ and $x\in X$, add and subtract $f(x)g_k(x)$ to obtain $|f_k(x)g_k(x)-f(x)g(x)|\le |g_k(x)|\,|f_k(x)-f(x)|+|f(x)|\,|g_k(x)-g(x)|<(B+C)\eta<\varepsilon$. [step 1.1, step 1.2, A2, L1, algebra]

3.1 Since $N$ is independent of $x$, step 2.1 proves $f_kg_k\to fg$ uniformly. Interchanging the names of the factors gives the symmetric clause. [step 2.1, A1] ∎
