---
id: def-qa-15-acceptance-polynomial
kind: definition
title: "Acceptance polynomials and approximate degree on Boolean domains"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 18
deps:
  - def-qa-15-bit-oracle-query-model
  - def-qa-task-and-promise-domain
  - def-multivariate-polynomial-ring-by-iteration
  - def-monomials-multidegree-and-total-degree
  - lem-finite-set-has-max
  - thm-reals-ordered-field
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (2025), Chapter 21, §§21.3–21.6"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415), §11.2"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Definition

For a local bit-query algorithm $A$ on $N$ input bits, an **acceptance polynomial** is a real polynomial $p(X_0,\ldots,X_{N-1})$ such that $p(x)=\Pr[A\text{ accepts }x]$ for every $x\in\{0,1\}^N$. The probability is the finite output law of [[def-qa-15-bit-oracle-query-model]].

For a promise function $f:D\to\{0,1\}$ with $D\subseteq\{0,1\}^N$ and $\epsilon\ge0$, a polynomial $p$ is an **$\epsilon$-approximant on $D$** if $|p(x)-f(x)|\le\epsilon$ for every $x\in D$. Its **total degree is at most $d$** when each monomial with nonzero coefficient has total degree at most $d$. This support convention includes the zero polynomial at every $d\ge0$, although the formal zero polynomial has no degree ([[def-monomials-multidegree-and-total-degree]]).

The **$\epsilon$-approximate degree** $\widetilde{\deg}_{\epsilon}(f;D)$ is the least $d\in\mathbb N_0$ for which some real polynomial of total degree at most $d$ is an $\epsilon$-approximant on $D$. This minimum exists: for $y\in\{0,1\}^N$ set $\delta_y(X)=\prod_{i<N}(y_iX_i+(1-y_i)(1-X_i))$. For Boolean $x$, each factor is $1$ exactly when $x_i=y_i$ and otherwise is $0$, so $\delta_y(x)=1$ exactly for $x=y$. Therefore $p_D(X)=\sum_{y\in D}f(y)\delta_y(X)$ equals $f$ on $D$ and has degree at most $N$; if $D=\varnothing$, the empty sum is zero and is vacuously an approximant. The admissible degree bounds in $\{0,\ldots,N\}$ form a nonempty finite set (it contains $N$), so it has a least element by [[lem-finite-set-has-max]] applied to its negatives. No choice principle is used.

