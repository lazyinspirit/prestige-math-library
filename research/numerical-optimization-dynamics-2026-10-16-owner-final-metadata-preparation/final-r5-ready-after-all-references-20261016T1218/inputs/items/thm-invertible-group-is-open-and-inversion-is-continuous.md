---
id: thm-invertible-group-is-open-and-inversion-is-continuous
kind: theorem
title: Invertible group is open and inversion is continuous
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [lem-neumann-series, def-unital-banach-algebra, def-invertible-element-and-general-linear-group-of-a-banach-algebra]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — Theorem 1.49 and §5.1.1, printed pp. 33 and 209–214"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — Chapter 2 §2.1, printed pp. 19–24"
      url: "https://arxiv.org/pdf/1211.3404"
verification:
  audited: 2026-09-22
---

## Statement

Let $A$ be a unital complex Banach algebra
([[def-unital-banach-algebra]]) and let $a \in A^{\times}$ be invertible with
inverse $a^{-1}$ ([[def-invertible-element-and-general-linear-group-of-a-banach-algebra]]).
Then:

1. every $b \in A$ with $\|a^{-1}\|\,\|b-a\| < 1$ is invertible, with
   $$b^{-1} = \Bigl(1 - a^{-1}(a-b)\Bigr)^{-1} a^{-1} \qquad\text{and}\qquad \|b^{-1}\| \le \frac{\|a^{-1}\|}{1 - \|a^{-1}\|\,\|b-a\|};$$
2. $A^{\times}$ is an open subset of $A$;
3. inversion $A^{\times} \to A^{\times}$, $a \mapsto a^{-1}$, is continuous at
   every point of $A^{\times}$ (with the relative topology on $A^{\times}$).

## Facts & Assumptions

**Given:** A unital complex Banach algebra $A$, an invertible $a \in A^{\times}$, and an element $b \in A$ with $\|a^{-1}\|\,\|b-a\| < 1$. Put $x := a^{-1}(a-b)$, so that $b = a(1-x)$.

[L1] The norm on $A$ is submultiplicative, $\|1\| = 1$, multiplication is associative and bilinear, and the norm is continuous with respect to itself: $\|uv\| \le \|u\|\,\|v\|$ and $\|u - u'\| \le \|u - u''\| + \|u'' - u'\|$ ([[def-unital-banach-algebra]]).

[L2] An element $c \in A$ is invertible exactly when it has a two-sided inverse, which is then unique; inverses satisfy $(uv)^{-1} = v^{-1}u^{-1}$ for invertible $u,v$, and $(u^{-1})^{-1} = u$ ([[def-invertible-element-and-general-linear-group-of-a-banach-algebra]]).

[L3] If $\|y\| < 1$ then $1-y$ is invertible with $(1-y)^{-1} = \sum_{n \ge 0} y^n$ and every tail bound $\|(1-y)^{-1} - \sum_{n\le N} y^n\| \le \|y\|^{N+1}/(1-\|y\|)$; in particular $\|(1-y)^{-1}\| \le 1/(1-\|y\|)$ ([[lem-neumann-series]]).

## Proof

**Proof technique:** direct.

1.1 The element $x := a^{-1}(a-b)$ satisfies $\|x\| \le \|a^{-1}\|\,\|a - b\| = \|a^{-1}\|\,\|b-a\| < 1$ by [L1], and $b = a - (a-b) = a - aa^{-1}(a-b) = a(1 - x)$, where the middle step uses $a a^{-1} = 1$ from [L2]. [L1, L2, algebra]

1.2 For the difference of inverses one has the algebraic identity $b^{-1} - a^{-1} = b^{-1}(a - b)a^{-1}$ whenever both inverses exist, because $b^{-1}(a-b)a^{-1} = b^{-1}aa^{-1} - b^{-1}ba^{-1} = b^{-1} - a^{-1}$, using [L2]. [L2, L1, algebra]

2.1 By [L3] applied to $x$ with $\|x\| < 1$, the element $1-x$ is invertible with $(1-x)^{-1} = \sum_{n\ge0}x^n$ and $\|(1-x)^{-1}\| \le 1/(1-\|x\|) \le 1/(1-\|a^{-1}\|\,\|b-a\|)$. [step 1.1, L3]

3.1 Since $b = a(1-x)$ with both factors invertible, [L2] gives that $b$ is invertible with $b^{-1} = (1-x)^{-1}a^{-1} = \bigl(1 - a^{-1}(a-b)\bigr)^{-1}a^{-1}$, and taking norms with [L1] and [step 2.1] gives $\|b^{-1}\| \le \|(1-x)^{-1}\|\,\|a^{-1}\| \le \|a^{-1}\|/(1-\|a^{-1}\|\,\|b-a\|)$; this is claim 1. [step 2.1, L2, L1, algebra]

4.1 Claim 2 follows: given $a \in A^{\times}$, every $b$ with $\|b - a\| < 1/\|a^{-1}\|$ satisfies the hypothesis verified in [step 3.1] and hence lies in $A^{\times}$, so $A^{\times}$ contains the open ball of that radius about $a$. [step 3.1, L1]

4.2 In particular, whenever $\|b-a\| < 1/(2\|a^{-1}\|)$ the bound of [step 3.1] gives $\|b^{-1}\| \le \|a^{-1}\|/(1 - \tfrac12) = 2\|a^{-1}\|$. [step 3.1, algebra]

5.1 Combining [step 1.2] with [step 4.2] and [L1], for $\|b-a\| < 1/(2\|a^{-1}\|)$ one has $\|b^{-1} - a^{-1}\| \le \|b^{-1}\|\,\|b-a\|\,\|a^{-1}\| \le 2\|a^{-1}\|^2\|b-a\|$, which tends to $0$ as $b \to a$; this is claim 3. [step 1.2, step 4.2, L1, algebra]

6.1 Claims 1, 2 and 3 are exactly the three assertions of the statement, so the theorem is proved. [step 3.1, step 4.1, step 5.1] ∎
