---
id: prop-qa-15-promise-domain-scope
kind: proposition
title: "Approximation constraints apply only on the promise domain"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 19
deps:
  - def-qa-15-acceptance-polynomial
  - def-qa-task-and-promise-domain
  - def-multivariate-polynomial-ring-by-iteration
  - def-monomials-multidegree-and-total-degree
justified_by: []
proof_strategy: direct
axiom_use: "No choice; the point indicator is an explicit finite product."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (2025), Chapter 21"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415), §11.2"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

For $f:D\to\{0,1\}$, the condition that a polynomial $p$ is an $\epsilon$-approximant means exactly $|p(x)-f(x)|\le\epsilon$ for $x\in D$; it imposes no condition at inputs outside $D$. If $D\subsetneq\{0,1\}^N$, then for every $y\notin D$ and every polynomial $p$, there is another polynomial agreeing with $p$ on $D$ and having a different value at $y$.

## Facts & Assumptions

**Given:** A finite promise domain $D\subseteq\{0,1\}^N$, a function $f:D\to\{0,1\}$, a real polynomial $p$, and a point $y\in\{0,1\}^N\setminus D$ when $D$ is proper.

[F1] [[def-qa-15-acceptance-polynomial]]: approximation to a promise function is defined by inequalities only at points of $D$.

[F2] [[def-multivariate-polynomial-ring-by-iteration]] and [[def-monomials-multidegree-and-total-degree]]: finite products and sums of coordinate polynomials are real polynomials.

## Proof


1.1 The first assertion is the defining predicate in [F1], whose universal quantifier ranges over $x\in D$ only. [given, F1]

1.2 For $y=(y_0,\ldots,y_{N-1})$, define $\delta_y(X)=\prod_{i<N}(y_iX_i+(1-y_i)(1-X_i))$, an empty product equal to $1$ when $N=0$. This is a polynomial by [F2]. At a Boolean point $x$, its $i$th factor equals $1$ if $x_i=y_i$ and $0$ otherwise, so $\delta_y(x)=1$ exactly when $x=y$ and equals $0$ at every other cube point. [given, F2, construct, algebra]

2.1 Since $y\notin D$, step 1.2 gives $\delta_y(x)=0$ on all $x\in D$ and $\delta_y(y)=1$. Therefore $p+\delta_y$ agrees with $p$ on $D$ but differs from $p$ at $y$. This proves the off-promise freedom claim. [step 1.2, algebra] ∎
