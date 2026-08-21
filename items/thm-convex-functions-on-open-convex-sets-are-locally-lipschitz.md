---
id: thm-convex-functions-on-open-convex-sets-are-locally-lipschitz
kind: theorem
title: "A convex function on an open convex set is locally Lipschitz"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-convex-function-bound-on-an-interior-cube, def-convex-and-strictly-convex-functions-on-euclidean-sets, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, def-lipschitz-holder-contraction]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "D. Bertsekas, MIT 6.253 Convex Analysis and Optimization, Lecture 4"
      url: "https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf"
    - title: "S. Boyd and L. Vandenberghe, Convex Optimization, §3.1"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
pipeline_run: null
---

## Statement

Let $n\in\mathbb N$, let $U\subseteq\mathbb R^n$ be open and convex, and let $f:U\to\mathbb R$ be convex. Then $f$ is locally Lipschitz on $U$: every $a\in U$ has a neighbourhood on which one finite constant bounds $|f(x)-f(y)|$ by $\|x-y\|_2$.

## Facts & Assumptions

**Given:** The function and domain in the Statement. When $n\ge1$, the sup and Euclidean norms have the conventions of [[def-p-norms-on-rn]] and are genuine norms inducing the published metrics [[lem-p-norms-are-norms-and-induce-the-published-metrics]].

[L1] If a closed sup-norm cube about an interior point lies in the convex domain, then $f$ is bounded above on that cube and bounded above and below on its concentric half-sized cube ([[lem-convex-function-bound-on-an-interior-cube]]).

[F1] A function is Lipschitz with constant $L$ when its output distance is at most $L$ times its input distance for every pair of domain points ([[def-lipschitz-holder-contraction]]).

## Proof

**Proof technique:** direct.

1.1 If $U=\varnothing$, the conclusion is vacuous. If $n=0$ and $U$ is nonempty, then $U=\mathbb R^0$ is a singleton and $f$ is Lipschitz with constant zero. Hence assume $n\ge1$ and fix $a\in U$. Choose $r>0$ such that $Q(a,2r)\subseteq U$. Apply [L1] to obtain $M\ge0$ with $|f|\le M$ on the half cube $Q(a,r)$, and use $Q(a,r/2)$ as the inner cube of test points. [L1, given]

2.1 Take distinct $x,y\in Q(a,r/2)$, put $d=\|y-x\|_\infty$, and extend the ray from $x$ through $y$ until it first reaches $z\in\partial Q(a,r)$. Writing $z=x+s(y-x)/d$, one has $s\ge r/2$ and $y=(1-d/s)x+(d/s)z$. Convexity and step 1.1 give $f(y)-f(x)\le4Md/r$; reversing $x,y$ gives $|f(y)-f(x)|\le4M\|x-y\|_\infty/r$. [step 1.1, L1, algebra]

3.1 Since $\|x-y\|_\infty\le\|x-y\|_2$, step 2.1 is the condition [F1] on $Q(a,r/2)$ with constant $4M/r$. Hence $f$ is locally Lipschitz at every $a\in U$. [step 2.1, F1, algebra] ∎
