---
id: lem-vanishing-sets-detect-radicals
kind: lemma
title: "Vanishing sets detect radicals"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-vanishing-set-identities, thm-radical-as-intersection-of-primes, lem-radical-is-an-ideal]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-27
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

Assume the Axiom of Choice.

Let $R$ be a commutative ring and let $I,J\trianglelefteq R$ be ideals. Then
$$
V(I)=V(J)\quad\Longleftrightarrow\quad \sqrt{I}=\sqrt{J}.
$$

## Facts & Assumptions

**Given:** A commutative ring $R$, ideals $I,J\trianglelefteq R$, and the Axiom of Choice.

[L1] The radical of an ideal is the intersection of the prime ideals containing it ([[thm-radical-as-intersection-of-primes]]).

[L2] Radical is an idempotent ideal-valued operation ([[lem-radical-is-an-ideal]]).

## Proof

**Proof technique:** direct.

1.1 If $V(I)=V(J)$, then the two ideals are contained in exactly the same prime ideals. Applying [L1] to both ideals shows that $\sqrt{I}$ and $\sqrt{J}$ are intersections over the same family of prime ideals, hence $\sqrt{I}=\sqrt{J}$. [L1, given]

1.2 Conversely, suppose $\sqrt{I}=\sqrt{J}$. If $\mathfrak p\in V(I)$, then $\mathfrak p$ contains $I$, so [L1] gives $\sqrt{I}\subseteq\mathfrak p$. Therefore $\sqrt{J}\subseteq\mathfrak p$, hence $J\subseteq\sqrt{J}\subseteq\mathfrak p$ by [L2], and $\mathfrak p\in V(J)$. The same argument with $I$ and $J$ reversed shows $V(J)\subseteq V(I)$. [L1, L2, given]

2.1 Steps 1.1 and 1.2 prove that vanishing sets agree exactly when radicals agree. [step 1.1, step 1.2] ∎
