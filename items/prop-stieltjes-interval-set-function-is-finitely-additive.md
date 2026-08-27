---
id: prop-stieltjes-interval-set-function-is-finitely-additive
kind: proposition
title: "The Stieltjes interval set function is finitely additive on the half-open interval algebra"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-lebesgue-stieltjes-interval-set-function]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Proposition 1.15"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

Let $F : \mathbb{R} \to \mathbb{R}$ be nondecreasing and right-continuous, and let $\mu_{0,F}$ be the
set function of [[def-lebesgue-stieltjes-interval-set-function]]. Then the value
of $\mu_{0,F}(E)$ is independent of the chosen finite disjoint decomposition of
$E \in \mathcal{H}$. Moreover, if $E,G \in \mathcal{H}$ are disjoint, then

$$\mu_{0,F}(E \cup G) = \mu_{0,F}(E) + \mu_{0,F}(G).$$

So $\mu_{0,F}$ is a finitely additive set function on the half-open interval
algebra.

## Facts & Assumptions

**Given:** A nondecreasing right-continuous function
$F : \mathbb{R} \to \mathbb{R}$ and the set function $\mu_{0,F}$ defined from
finite disjoint unions of h-intervals.

[L1] For every disjoint presentation $E = \bigcup_{i=1}^m I_i$ in the half-open interval algebra, the proposed value is $\mu_{0,F}(E) = \sum_{i=1}^m \mu_{0,F}(I_i)$. ([[def-lebesgue-stieltjes-interval-set-function]])

## Proof

**Proof technique:** direct.

1.1 Suppose $E = \bigcup_{i=1}^m I_i = \bigcup_{j=1}^n J_j$ are two finite disjoint h-interval decompositions of the same set. [given, L1]

Collect every finite endpoint appearing among the $I_i$ and $J_j$, and adjoin $-\infty$ or $+\infty$ when a left or right ray occurs. This gives an increasing list $p_0 < \cdots < p_r$ such that each $I_i$ and each $J_j$ is a disjoint union of consecutive h-cells $C_\ell := (p_{\ell-1},p_\ell]$, with the first or last cell possibly a ray.

2.1 If $I$ is one interval from either decomposition, the sum of the $\mu_{0,F}$-values of the consecutive cells inside $I$ telescopes to $\mu_{0,F}(I)$. [step 1.1, L1, algebra]

In the unbounded cases this is exactly the truncation/supremum convention built into [[def-lebesgue-stieltjes-interval-set-function]]. Thus each decomposition gives the same total, namely the sum of the cell values over those $C_\ell$ contained in $E$. So $\mu_{0,F}(E)$ is well defined. [step 1.1, L1, algebra]

3.1 Let $E,G \in \mathcal{H}$ be disjoint, and choose disjoint h-interval decompositions of $E$ and of $G$. [step 2.1, given, algebra]

Refine them to a common endpoint grid as in step 1.1, and sum over the grid cells. The cells belonging to $E \cup G$ are exactly the disjoint union of the cells belonging to $E$ and the cells belonging to $G$, so the corresponding cell sums add:

$$\mu_{0,F}(E \cup G) = \mu_{0,F}(E) + \mu_{0,F}(G).$$

Together with step 2.1 this proves the claim. [step 2.1, given, algebra] ∎
