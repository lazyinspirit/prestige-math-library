---
id: "cex-convex-maximum-set-need-not-be-a-face"
kind: "counterexample"
title: "A convex function can have a nonconvex maximum set"
status: "draft"
origin: "pipeline"
deps: ["def-locally-convex-topological-vector-space", "cor-heine-borel-in-the-product-topology"]
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  scraped: []
  references:
    - title: "Harald Hanche-Olsen, Topological vector spaces, version 1.6 (bibliographic origin; complete local argument replaces unavailable backing)"
      url: "https://hanche.folk.ntnu.no/notes/topvec/topvec-a4.pdf"
pipeline_run: "phase-2-next-20"
proof_strategy: "direct"
---

## Statement refuted

The maximum set of a continuous convex real function on a compact convex set is always a face.

Here a **face** of a convex set $K$ means a convex subset $F\subseteq K$ such that, whenever $x,y\in K$, $0<r<1$ and $(1-r)x+ry\in F$, both $x,y$ belong to $F$. A subset with just this endpoint property is called **extremal**; convexity is an additional requirement for being a face.

## Facts & Assumptions

**Given:** $K=[-1,1]\subseteq\mathbb R$ and $q:K\to\mathbb R$, $q(t)=t^2$.

[F1] Convexity uses real coefficients in $[0,1]$ ([[def-locally-convex-topological-vector-space]]).

[F2] Closed bounded subsets of $\mathbb R$ are compact in its usual product topology ([[cor-heine-borel-in-the-product-topology]], dimension one).

## Counterexample

1.1 The interval $[-1,1]$ is convex since $-1\le s,t\le1$ implies $-1\le(1-r)s+rt\le1$ for $0\le r\le1$. It is closed, its complement being the open rays $(-\infty,-1)$ and $(1,\infty)$, and bounded by one in absolute value. Hence it is nonempty compact convex. For $s,t\in K$, $|q(s)-q(t)|=|s-t||s+t|\le2|s-t|$, which proves continuity on $K$ directly. [F1, F2, algebra]

1.2 For $s,t\in K$ and $0\le r\le1$, $$(1-r)s^2+rt^2-\big((1-r)s+rt\big)^2=r(1-r)(s-t)^2\ge0.$$ Thus $q((1-r)s+rt)\le(1-r)q(s)+rq(t)$, the defining convexity inequality for a function. It includes $r=0,1$ and $s=t$, where equality holds. [F1, algebra]

2.1 On $K$, $q(t)\le1$ with equality exactly when $t=-1$ or $t=1$, because $1-t^2=(1-t)(1+t)$ and both factors are nonnegative. The maximum set is therefore $M=\{-1,1\}$. Its midpoint is zero, and $q(0)=0<1$, so $0\notin M$. Thus $M$ is not convex and cannot be a face. This refutes the claim with a continuous convex function on a compact convex set. [step 1.1, step 1.2, algebra]

3.1 Nevertheless $M$ is extremal. If $(1-r)s+rt=1$ with $s,t\in K$ and $0<r<1$, then $(1-r)(1-s)+r(1-t)=0$. Each summand is nonnegative and each coefficient is positive, so $s=t=1$. Similarly a combination equal to $-1$ gives $(1-r)(s+1)+r(t+1)=0$ and forces $s=t=-1$. Thus the endpoint property holds even though convexity fails. All witnesses and computations are explicit and choice-free. [step 2.1, algebra] ∎