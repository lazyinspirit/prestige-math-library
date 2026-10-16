---
id: lem-qa-33-bernstein-square-root-bound
kind: lemma
title: Bernstein approximation to the square root
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps:
  - def-binomial-coefficient
  - thm-binomial-theorem-over-a-commutative-ring
  - thm-cauchy-schwarz-and-the-euclidean-norm
justified_by: []
proof_strategy: direct
axiom_use: None; finite binomial identities and Jensen's inequality suffice.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
      locator: Chapter 14, §14.3, PDF pp. 118–120
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: Chapter 33, PDF pp. 181–184
---

## Statement

For each integer $d\ge1$, the degree-$d$ Bernstein polynomial
$$B_d(x)=\sum_{j=0}^d\sqrt{j/d}\binom djx^j(1-x)^{d-j}$$
satisfies $\sup_{x\in[0,1]}|B_d(x)-\sqrt{x}|\le(4d)^{-1/4}$. Consequently degree $d\ge1/(4\eta^4)$ suffices for uniform error at most $\eta>0$.

## Facts & Assumptions

**Given:** An integer $d\ge1$ and $x\in[0,1]$.

[F1] [[thm-binomial-theorem-over-a-commutative-ring]]: $\sum_j\binom djx^j(1-x)^{d-j}=1$.

[F2] The binomial coefficients count subsets ([[def-binomial-coefficient]]). For $1\le j\le d$, counting pairs $(S,a)$ with $|S|=j$ and $a\in S$ gives $j\binom dj=d\binom{d-1}{j-1}$. For $d\ge2$ and $2\le j\le d$, counting triples $(S,a,b)$ with $|S|=j$ and an ordered pair of distinct marked elements gives $j(j-1)\binom dj=d(d-1)\binom{d-2}{j-2}$.

[F3] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: finite weighted sums satisfy Cauchy–Schwarz.

## Proof

1.1 Regard the nonnegative weights $p_j=\binom djx^j(1-x)^{d-j}$ as a finite distribution. [F1] gives $\sum_jp_j=1$. Reindexing the first count in [F2] gives $\mathbb E K=\sum_jjp_j=dx$. For $d\ge2$, reindexing the second count gives $\mathbb E[K(K-1)]=\sum_jj(j-1)p_j=d(d-1)x^2$; for $d=1$ this expectation is $0=d(d-1)x^2$ directly. Since $K^2=K(K-1)+K$, it follows that $\mathbb E(K/d-x)^2=x(1-x)/d\le1/(4d)$. [given, F1, F2, algebra]

2.1 Since $|\sqrt{u}-\sqrt{v}|\le\sqrt{|u-v|}$ for $u,v\ge0$, [F3] gives $\mathbb E\sqrt{|K/d-x|}\le\sqrt{\mathbb E|K/d-x|}$ and $\mathbb E|K/d-x|\le\sqrt{\mathbb E(K/d-x)^2}$. Therefore $|B_d(x)-\sqrt{x}|\le\bigl(\mathbb E(K/d-x)^2\bigr)^{1/4}\le(4d)^{-1/4}.$ The bound is uniform in $x$, and solving $(4d)^{-1/4}\le\eta$ gives the stated degree choice. [F3, step 1.1, algebra] ∎
