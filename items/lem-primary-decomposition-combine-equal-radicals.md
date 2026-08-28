---
id: lem-primary-decomposition-combine-equal-radicals
kind: lemma
title: "Equal-radical primary components can be combined"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-primary-decomposition-minimal-and-isolated-components, lem-intersection-of-primary-submodules-with-same-radical]
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Lemma (18.12)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Proposition 19.6"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
---

## Statement

Let $R$ be a Noetherian commutative ring, let $M$ be a finitely generated left
$R$-module, and let
$$
N=Q_1\cap\cdots\cap Q_r
$$
be a finite primary decomposition of a submodule $N \subseteq M$, with each
$Q_i$ $\mathfrak p_i$-primary for a prime ideal $\mathfrak p_i$. If several of
the $\mathfrak p_i$ equal one prime $\mathfrak p$, then replacing that whole
group by the intersection of its components preserves the total intersection
and produces one $\mathfrak p$-primary component.

## Facts & Assumptions

**Given:** A Noetherian commutative ring $R$, a finitely generated left $R$-module $M$, and a finite primary decomposition $N=Q_1\cap\cdots\cap Q_r$ with each $Q_i$ $\mathfrak p_i$-primary for a prime ideal $\mathfrak p_i$.

[L1] For a prime ideal $\mathfrak p$, a nonempty finite intersection of $\mathfrak p$-primary submodules is again $\mathfrak p$-primary ([[lem-intersection-of-primary-submodules-with-same-radical]]).

[L2] Minimality requires both irredundancy and pairwise distinct component radicals ([[def-primary-decomposition-minimal-and-isolated-components]]).

## Proof

**Proof technique:** direct.

1.1 Fix a prime $\mathfrak p$ and let $I(\mathfrak p)$ be the set of indices $i$ for which $Q_i$ is $\mathfrak p$-primary. If $I(\mathfrak p)$ is empty or has one element, there is nothing to combine. Otherwise set $$ Q(\mathfrak p)=\bigcap_{i \in I(\mathfrak p)}Q_i. $$ Fact [L1] shows that $Q(\mathfrak p)$ is again $\mathfrak p$-primary. [L1, given, construct]

2.1 Replacing, for each prime $\mathfrak p$ occurring among the radicals, the whole block $\{Q_i : i \in I(\mathfrak p)\}$ by the single component $Q(\mathfrak p)$ does not change the total intersection, because intersections may be regrouped without changing their value. The resulting components have pairwise distinct radicals, which is the second minimality requirement recorded in [L2]. [L2, step 1.1, algebra]

3.1 Thus equal-radical components may be combined into one primary component with the same radical. [step 2.1] ∎
