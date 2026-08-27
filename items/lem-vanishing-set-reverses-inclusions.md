---
id: lem-vanishing-set-reverses-inclusions
kind: lemma
title: "Vanishing sets reverse inclusions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-prime-spectrum-and-vanishing-sets]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §14 The spectrum of a ring"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Section 10.17: The spectrum of a ring"
      url: "https://stacks.math.columbia.edu/tag/00DY"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring and let $I\subseteq J\trianglelefteq R$ be ideals. Then $V(J)\subseteq V(I)$.

## Facts & Assumptions

**Given:** A commutative ring $R$ and ideals $I\subseteq J\trianglelefteq R$.

[L1] $V(K)$ is the set of prime ideals containing the ideal $K$ ([[def-prime-spectrum-and-vanishing-sets]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathfrak p\in V(J)$. By [L1], this means $J\subseteq\mathfrak p$. Since $I\subseteq J$, one also has $I\subseteq\mathfrak p$. [L1, given]

2.1 The containment $I\subseteq\mathfrak p$ says exactly that $\mathfrak p\in V(I)$ by [L1]. Therefore every element of $V(J)$ lies in $V(I)$. [L1, step 1.1]

3.1 Hence $V(J)\subseteq V(I)$. [step 2.1] ∎
