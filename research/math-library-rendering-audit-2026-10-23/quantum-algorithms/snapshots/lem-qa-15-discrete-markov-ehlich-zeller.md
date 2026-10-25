---
id: lem-qa-15-discrete-markov-ehlich-zeller
kind: lemma
title: "Finite-grid Markov derivative inequality"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 1
deps:
  - lem-qa-15-continuous-markov-derivative-bound
  - lem-qa-15-grid-return-derivative
  - lem-derivative-of-a-power
  - thm-chain-rule
  - thm-algebra-of-continuous-functions
  - thm-extreme-value-r
justified_by: []
proof_strategy: direct
axiom_use: "No choice; rescaling and maxima use finite-dimensional real arithmetic and compact intervals."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "N. L. Carothers, A Short Course on Approximation Theory (1998), Chapter 5, Theorem 5.22"
      url: "https://eigen-space.org/approx2526/pdf/carothers+a-short-course-in-approximation-theory-new.pdf"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (2025), §21.6"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415), §11.2"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

Let $N\ge1$ and let $q$ be a real polynomial with no supported monomial of degree greater than $d\in\mathbb N_0$. Put $h=\max_{[0,N]}q-\min_{[0,N]}q$ and $D=\max_{[0,N]}|q'|$. If $0\le q(k)\le1$ for every integer $k=0,\ldots,N$, then
$$D\le\frac{d^2}{N}h.$$

## Facts & Assumptions

**Given:** An integer $N\ge1$, a real polynomial $q$ of degree at most $d$, and the bounds $0\le q(k)\le1$ on the integer grid.

[F1] [[lem-qa-15-continuous-markov-derivative-bound]]: for a polynomial $p$ of degree at most $d$ on $[-1,1]$, its maximum derivative magnitude is at most $d^2/2$ times its range height.

[F2] [[lem-qa-15-grid-return-derivative]]: under the stated integer-grid bounds, $D\ge\max\{0,h-1\}$; in particular $h\le1+D$.

[F3] [[lem-derivative-of-a-power]], [[thm-chain-rule]], [[thm-algebra-of-continuous-functions]], and [[thm-extreme-value-r]]: polynomial functions are differentiable with polynomial derivative, compositions obey the chain rule, and continuous functions on $[0,N]$ attain their extrema.

## Proof


1.1 The polynomial functions $q,q'$ are continuous and attain extrema on $[0,N]$ by [F3], so $h,D$ are defined. Put $p(u):=q(N(u+1)/2)$ for $u\in[-1,1]$. It has no supported monomial above degree $d$ and the same range height $h$ as $q$ on $[0,N]$. By the chain rule in [F3], $p'(u)=(N/2)q'(N(u+1)/2)$, hence $\max|p'|=(N/2)D$. Applying [F1] gives $(N/2)D\le(d^2/2)h$. [given, F1, F3, algebra]

2.1 Since $N>0$, multiplying the inequality of step 1.1 by $2/N$ yields $D\le d^2h/N$. The grid-return estimate [F2] is compatible with this bound and gives the additional consequence $h\le1+D$ that will be used in the OR lower-bound proof. [step 1.1, F2, algebra] ∎
