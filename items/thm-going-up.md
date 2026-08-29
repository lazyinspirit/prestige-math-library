---
id: thm-going-up
kind: theorem
title: "Going up for integral ring maps"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-integral-ring-extension, thm-lying-over, thm-prime-spectrum-of-a-quotient-bijection]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., Theorem (14.3)(4)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Theorem 7.6"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice.

Let $f:A\to B$ be an integral ring map. Suppose $\mathfrak p_1\subseteq\mathfrak p_2$ are prime ideals of $A$ and $\mathfrak q_1$ is a prime ideal of $B$ with $f^{-1}(\mathfrak q_1)=\mathfrak p_1$. Then there exists a prime ideal $\mathfrak q_2$ of $B$ such that $\mathfrak q_1\subseteq\mathfrak q_2$ and $f^{-1}(\mathfrak q_2)=\mathfrak p_2$.

## Facts & Assumptions

**Given:** An integral ring map $f:A\to B$, primes $\mathfrak p_1\subseteq\mathfrak p_2$ in $A$, and a prime $\mathfrak q_1$ of $B$ lying over $\mathfrak p_1$.

[L1] Integral ring maps are the maps whose target elements satisfy monic equations over the source ring ([[def-integral-ring-extension]]).

[L2] Assuming the Axiom of Choice, every prime of the source containing the kernel has a prime above it under an integral map ([[thm-lying-over]]).

[L3] Prime ideals of a quotient correspond exactly to primes containing the quotient ideal ([[thm-prime-spectrum-of-a-quotient-bijection]]).

## Proof

**Proof technique:** direct.

1.1 The map $f$ induces a ring map $\overline f:A/\mathfrak p_1\to B/\mathfrak q_1$, and this induced map is integral because a monic equation for $b\in B$ over $A$ descends to the same monic equation for $b+\mathfrak q_1$ over $A/\mathfrak p_1$. By [L3], the prime $\mathfrak p_2$ corresponds to the prime $\mathfrak p_2/\mathfrak p_1$ of $A/\mathfrak p_1$. [L1, L3, given]

2.1 Apply [L2] to $\overline f$ and the prime $\mathfrak p_2/\mathfrak p_1$. This yields a prime $\overline{\mathfrak q}_2$ of $B/\mathfrak q_1$ with contraction $\mathfrak p_2/\mathfrak p_1$. [L2, step 1.1]

3.1 By [L3], the prime $\overline{\mathfrak q}_2$ corresponds to a prime ideal $\mathfrak q_2$ of $B$ containing $\mathfrak q_1$. Its contraction to $A$ is exactly $\mathfrak p_2$. Therefore $\mathfrak q_2$ is the required prime above $\mathfrak p_2$. [L3, step 2.1] ∎
