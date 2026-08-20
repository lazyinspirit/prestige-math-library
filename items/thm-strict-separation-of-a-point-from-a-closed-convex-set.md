---
id: thm-strict-separation-of-a-point-from-a-closed-convex-set
kind: theorem
title: "A point outside a nonempty closed convex set is strictly separated from it"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-projection-onto-a-closed-convex-set-has-the-variational-inequality, def-supporting-hyperplane-to-a-convex-set, def-metric-interior-closure-boundary]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. Boyd and L. Vandenberghe, Convex Optimization, §2.5.1"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
pipeline_run: null
---

## Statement

Let $n\ge1$, let $C\subseteq\mathbb R^n$ be nonempty, closed, and convex, and let $x\notin C$. Then there are $a\ne0$ and $b\in\mathbb R$ such that $\langle a,z\rangle\le b<\langle a,x\rangle$ for every $z\in C$. Thus a hyperplane strictly separates $x$ from $C$ ([[def-supporting-hyperplane-to-a-convex-set]]).

## Facts & Assumptions

**Given:** The set and exterior point in the Statement; since $C$ is closed, the nearest point cannot equal $x$ ([[def-metric-interior-closure-boundary]]).

[L1] If $p$ is the projection of $x$ onto $C$, then $$\langle x-p,z-p\rangle\le0\qquad(z\in C).$$ ([[lem-projection-onto-a-closed-convex-set-has-the-variational-inequality]])

## Proof

**Proof technique:** direct.

1.1 Let $p$ be the nearest point and put $a=x-p$. By [L1], $\langle a,z\rangle\le\langle a,p\rangle$ for every $z\in C$. Since $x\notin C$, one has $a\ne0$ and $$\langle a,x\rangle=\langle a,p\rangle+\|a\|_2^2>\langle a,p\rangle.$$ [L1, given, algebra]

2.1 Taking $b=\langle a,p\rangle$ in step 1.1 gives the stated strict separation with a nonzero normal. [step 1.1] ∎
