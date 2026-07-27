---
id: fs-q-is-g-delta
kind: false-statement
title: "FALSE: $\\mathbb{Q}$ is a $G_\\delta$ subset of $\\mathbb{R}$"
status: published
origin: session
deps: [cor-q-is-meager-and-not-g-delta, def-f-sigma-g-delta, thm-baire-category-r, lem-rat-embeds-dense, def-open-and-closed-in-r]
justified_by: []
forward_refs: [cex-irrationals-are-not-f-sigma]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Gδ set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/G-delta_set"
    - title: "Baire category theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Baire_category_theorem"
pipeline_run: null
---

## Statement

**False claim:** $\mathbb{Q}$, that is the set $\mathbb{Q}_{\mathbb{R}}$ of
rationals inside $\mathbb{R}$ ([[lem-rat-embeds-dense]]), is a $G_\delta$ set
([[def-f-sigma-g-delta]]): there is a sequence $(V_n)$ of open subsets of
$\mathbb{R}$ with $\mathbb{Q}_{\mathbb{R}} = \bigcap_n V_n$.

The claim looks plausible by symmetry. $\mathbb{Q}_{\mathbb{R}}$ is $F_\sigma$,
being a countable union of singletons; the irrationals are $G_\delta$, being a
countable intersection of complements of singletons; and the two classes are
exchanged by complementation. So one expects each set to belong to both classes.
It does not: the symmetry between the two *classes* says nothing about a single
set, and the obstruction is the Baire category theorem.

## Facts & Assumptions

**Given:** The set $\mathbb{Q}_{\mathbb{R}} \subseteq \mathbb{R}$ of rationals.

[A1] The false claim: $\mathbb{Q}_{\mathbb{R}}$ is a $G_\delta$ subset of $\mathbb{R}$.

[L1] $\mathbb{Q}_{\mathbb{R}}$ is $F_\sigma$ and meager, the irrationals are $G_\delta$ and residual, and $\mathbb{Q}_{\mathbb{R}}$ is **not** $G_\delta$ ([[cor-q-is-meager-and-not-g-delta]], claims 1, 2 and 3).

[L2] $A$ is $G_\delta$ when it is the intersection of a sequence of open sets ([[def-f-sigma-g-delta]], [[def-open-and-closed-in-r]]).

[L3] A countable intersection of dense open subsets of $\mathbb{R}$ is dense; in particular it is nonempty ([[thm-baire-category-r]]).

## Refutation

**Proof technique:** direct.

1.1 By claim 3 of [L1], $\mathbb{Q}_{\mathbb{R}}$ is not a $G_\delta$ subset of $\mathbb{R}$, which is the direct negation of [A1]. [A1, L1, L2]

1.2 The reason, recorded here so that the refutation is not merely a pointer: were $\mathbb{Q}_{\mathbb{R}} = \bigcap_n V_n$ with each $V_n$ open, every $V_n$ would contain the dense set $\mathbb{Q}_{\mathbb{R}}$ and so be dense; adjoining the dense open sets $\mathbb{R} \setminus \{q\}$, one for each rational $q$, would produce an at most countable family of dense open sets whose intersection is $\mathbb{Q}_{\mathbb{R}}$ minus every rational, that is $\varnothing$, contradicting [L3]. [L1, L2, L3]

2.1 So [A1] is false, and the refutation is carried out in full in [L1]. [step 1.1, step 1.2, A1] ∎

## Remarks

- **What is true about $\mathbb{Q}$.** It is $F_\sigma$, meager, of measure zero,
  dense, and countable. What fails is only the $G_\delta$ property, and its
  failure is a genuine theorem about $\mathbb{R}$, resting on completeness through
  [[thm-nested-interval-property]] inside [[thm-baire-category-r]]. Inside
  $\mathbb{Q}$ itself the corresponding claim is true and trivial, $\mathbb{Q}$
  being the whole space there.

- **The dual false statement is not recorded separately**, because it is the same
  statement: the irrationals fail to be $F_\sigma$ exactly because
  $\mathbb{Q}_{\mathbb{R}}$ fails to be $G_\delta$
  ([[def-f-sigma-g-delta]]). The witness is
  [[cex-irrationals-are-not-f-sigma]].

- **Context, not a result of this library.** In classical analysis the set of
  points at which a real function is continuous is always $G_\delta$, and it is
  the false statement above that then rules out a function continuous at every
  rational and at no irrational. That classical result is not proved here, and
  continuity is not available at this point in the reading order; the connection
  is recorded as orientation and nothing on this page depends on it.
