---
id: lem-mcshane-extension-from-a-finite-subset
kind: lemma
title: "The McShane formula extends a 1-Lipschitz function from a finite subset"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-metric-space
  - lem-finite-set-has-max
justified_by: []
axiom_use: "No choice principle is used; the formula takes a minimum over a supplied finite nonempty set."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Dmitriy Panchenko, Lecture Notes on Probability Theory, §4.4"
      url: "https://drive.google.com/uc?export=download&id=0B6JeBUquZ5BwVlV1dEpsTHVVbTA&resourcekey=0-5xbvKhDXZjrYRLfqppsHuQ"
    - title: "Filippo Santambrogio, Introduction to Optimal Transport Theory, §1.3, PDF pp. 5–6"
      url: "https://arxiv.org/pdf/1009.3856"
---

## Statement

Let $(X,d)$ be a metric space, let $F=\{x_1,\ldots,x_m\}\subseteq X$ be finite and nonempty with distinct ordered points, and let $f_1,\ldots,f_m\in\mathbb R$ satisfy $|f_i-f_j|\le d(x_i,x_j)$ for every $i,j$. Define
$$\widetilde f(x):=\min_{1\le i\le m}\bigl(f_i+d(x,x_i)\bigr)\qquad(x\in X).$$
Then $\widetilde f$ is 1-Lipschitz on $X$ and $\widetilde f(x_i)=f_i$ for every $i$.

## Facts & Assumptions

**Given:** The metric space, finite set, and real values in the Statement.

[F1] A metric is symmetric and satisfies the triangle inequality. [[def-metric-space]]

[F2] Every nonempty finite set of reals has an attained minimum. [[lem-finite-set-has-max]]

## Proof

**Proof technique:** direct.

1.1 For each $k$, every term in the defining minimum at $x_k$ satisfies $f_i+d(x_k,x_i)\ge f_k$, because $f_k-f_i\le d(x_k,x_i)$ by [F1] and the hypothesis. The term $i=k$ equals $f_k$, so $\widetilde f(x_k)=f_k$. [given, F1, F2]

2.1 For any $x,y\in X$ and every $i$, [F1] gives $d(x,x_i)\le d(x,y)+d(y,x_i)$. Thus $f_i+d(x,x_i)\le d(x,y)+f_i+d(y,x_i)$ for every $i$; taking finite minima yields $\widetilde f(x)\le d(x,y)+\widetilde f(y)$. Interchanging $x,y$ and using symmetry gives $\widetilde f(y)\le d(x,y)+\widetilde f(x)$, hence $|\widetilde f(x)-\widetilde f(y)|\le d(x,y)$. [given, F1, F2, algebra] ∎
