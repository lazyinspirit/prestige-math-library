---
id: thm-constant-rank-level-set-local-normal-form
kind: theorem
title: 'A constant-rank level set is locally a coordinate slice'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-regular-critical-points-values-and-level-sets, thm-euclidean-constant-rank-normal-form]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: 'J. M. Lee, Introduction to Smooth Manifolds, Theorem 7.13'
      url: 'https://math.mit.edu/~hrm/palestine/lee-smooth-manifolds.pdf'
    - title: 'L. W. Tu, An Introduction to Manifolds, Theorem 11.1'
      url: 'https://www.math.toronto.edu/~jeffrey/matd67/tu.pdf'
pipeline_run: null
---

## Statement

Let $f:U\subseteq\mathbb R^m\to\mathbb R^n$ be $C^k$, $k\ge1$, and have constant rank $r$ near $a$. Put $c=f(a)$. In the source coordinates of the constant-rank theorem, there is a neighbourhood $W$ of $0$ such that
$$\alpha\bigl(f^{-1}(c)\bigr)\cap W=W\cap\bigl(\{0\}^r\times\mathbb R^{m-r}\bigr).$$
Thus a nonempty constant-rank level set is locally a coordinate slice of dimension $m-r$. If a level set is empty, the pointwise assertion has no instance.

## Facts & Assumptions

**Given:** The map $f$, point $a$, value $c=f(a)$, and constant rank $r$ near $a$.

[L1] The level set over $c$ is $f^{-1}(c)=\{x:f(x)=c\}$ ([[def-regular-critical-points-values-and-level-sets]]).

[L2] Local coordinates may be chosen so that $a$ and $c$ become $0$ and the map becomes $(u,v)\mapsto(u,0)$ ([[thm-euclidean-constant-rank-normal-form]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L2] and restrict to its source coordinate neighbourhood $W$. [given, L2]

2.1 By [L1], a point in $W$ represents a point of $f^{-1}(c)$ exactly when $(u,0)=(0,0)$, which is exactly the condition $u=0$; the $v\in\mathbb R^{m-r}$ coordinates are free. [step 1.1, L1, algebra]

3.1 Pulling this slice back by $\alpha^{-1}$ gives the stated local description. The formula also covers $r=0$ and $r=m$ through the empty-block convention. [step 2.1] ∎
