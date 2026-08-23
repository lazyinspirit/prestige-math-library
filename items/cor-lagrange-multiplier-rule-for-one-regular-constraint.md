---
id: cor-lagrange-multiplier-rule-for-one-regular-constraint
kind: corollary
title: 'For one regular constraint, the objective gradient is a scalar multiple of the constraint gradient'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-lagrange-multipliers-for-regular-level-set-constraints, def-jacobian-matrix-and-gradient]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'University of Toronto MAT237 notes, Section 2.8'
      url: 'https://www.math.utoronto.ca/courses/mat237y1/20199/notes/Chapter2/S2.8.html'
pipeline_run: null
---

## Statement

Let $f,G:U\subseteq\mathbb R^m\to\mathbb R$ be $C^1$, and suppose $a$ is a local maximum or minimum of $f$ subject to $G(x)=c$. If $\nabla G(a)\ne0$, then there is a unique scalar $\lambda$ such that
$$\nabla f(a)=\lambda\nabla G(a).$$

## Facts & Assumptions

**Given:** The functions, constrained local extremum, and nonzero constraint gradient.

[L1] For a scalar function, the Jacobian is the row $\nabla G(a)^{\mathsf T}$ ([[def-jacobian-matrix-and-gradient]]), so $DG(a):\mathbb R^m\to\mathbb R$ is surjective exactly when $\nabla G(a)\ne0$.

[L2] At a constrained local extremum with $DG(a)$ surjective, there is a unique $\lambda\in\mathbb R$ such that $\nabla f(a)=DG(a)^{\mathsf T}\lambda$ ([[thm-lagrange-multipliers-for-regular-level-set-constraints]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the nonzero-gradient hypothesis makes $DG(a)$ surjective. [given, L1]

2.1 Apply [L2]. Since the transpose of the one-row matrix $DG(a)$ sends $\lambda$ to $\lambda\nabla G(a)$, its conclusion is the displayed equation. [step 1.1, L2, algebra]

3.1 Uniqueness is part of [L2] and also follows directly from $\nabla G(a)\ne0$. [step 2.1] ∎
