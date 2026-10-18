---
id: cor-every-vector-space-has-a-basis
kind: corollary
title: "Every vector space has a basis"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-every-independent-set-extends-to-a-basis, def-linear-basis, def-linear-independence, def-linear-combination-and-span, lem-span-monotone-and-idempotent, def-linear-subspace, def-vector-space, def-field]
justified_by: []
aliases: [cor-basis-exists]
landmark: true
short: "every vector space has a basis"
proof_strategy: direct
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Basis (linear algebra) (Wikipedia) — where A. Blass, Existence of bases implies the axiom of choice, Contemporary Mathematics 31 (1984), 31-33, is recorded"
      url: "https://en.wikipedia.org/wiki/Basis_(linear_algebra)"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "Cambridge University Press excerpt: Vector spaces and bases"
      url: "https://assets.cambridge.org/97810092/43902/excerpt/9781009243902_excerpt.pdf"
pipeline_run: null
---

## Statement

**Assume the Axiom of Choice**, through
[[thm-every-independent-set-extends-to-a-basis]]. Then every vector space $V$
over a field $F$ ([[def-vector-space]]) has a basis ([[def-linear-basis]]).

In particular the zero space has a basis, namely $\varnothing$.

## Facts & Assumptions

**Given:** A field $F$ and a vector space $V$ over $F$.

[L1] $\varnothing$ is linearly independent ([[def-linear-independence]]).

[L2] $\operatorname{span}(T) = T$ if and only if $T$ is a linear subspace of $V$, and $V$ is a linear subspace of itself ([[lem-span-monotone-and-idempotent]], claim 4, [[def-linear-subspace]], [[def-linear-combination-and-span]]).

[L3] If $L \subseteq S \subseteq V$ with $L$ linearly independent and $\operatorname{span}(S) = V$, there is a basis $B$ of $V$ with $L \subseteq B \subseteq S$ ([[thm-every-independent-set-extends-to-a-basis]]).

## Proof

**Proof technique:** direct.

1.1 $V$ is a linear subspace of itself, so $\operatorname{span}(V) = V$: the whole space satisfies the three closure conditions trivially, and the span of a linear subspace is that subspace. [L2]

1.2 The empty set is linearly independent and $\varnothing \subseteq V \subseteq V$. [L1]

2.1 By steps 1.1 and 1.2 the extension theorem applies with $L := \varnothing$ and $S := V$, and yields a basis $B$ of $V$ with $\varnothing \subseteq B \subseteq V$; so $V$ has a basis. When $V = \{0_V\}$ the basis produced is $\varnothing$, the only linearly independent subset of that space. [step 1.1, step 1.2, L3] ∎

## Remarks

- **The converse is a theorem of Blass, and it is not proved here.** The implication proved above runs from the Axiom of Choice, through Zorn's lemma, to the existence of bases. The opposite implication also holds: the statement that every vector space over every field has a basis implies the Axiom of Choice. That is a hard result of Andreas Blass, published in 1984 as "Existence of bases implies the axiom of choice"; this library does not prove it, does not use it, and nothing here rests on it. It is recorded because it fixes the exact strength of the statement above: existence of bases is not merely a consequence of choice, it is equivalent to it over ZF. The reference is listed in the sources of this item.

- **Where the choice is spent.** In [[thm-zorn]], once, and nowhere else on this page. Every other existence statement here is explicit: the standard basis of $F^{n}$ ([[lem-standard-basis-of-f-n]]) is written down, and so is the infinite basis of the eventually zero families on the companion page. The contrast between those and the present corollary — which produces a basis of $\mathbb{R}$ over $\mathbb{Q}$ while exhibiting none, as the companion page records — is the point of keeping them on the same page.

- **This says nothing about the size of the basis.** For a space with no finite basis, [[def-dimension]] assigns no dimension at all, and the corollary correspondingly asserts only existence.
