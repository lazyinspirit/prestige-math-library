---
id: fs-measure-zero-implies-nowhere-dense
kind: false-statement
title: "FALSE: every subset of $\\mathbb{R}$ of measure zero is nowhere dense"
status: published
origin: session
deps: [lem-countable-sets-are-null, def-nowhere-dense-meager, def-measure-zero-and-content-zero, thm-rationals-countable, lem-q-and-irrationals-dense-r, def-interior-closure-boundary-r, def-countable, def-open-and-closed-in-r, lem-rat-embeds-dense, def-limit-point-r]
justified_by: []
forward_refs: [cex-dense-set-of-measure-zero]
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
    - title: "Null set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Null_set"
    - title: "Nowhere dense set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nowhere_dense_set"
pipeline_run: null
---

## Statement

**False claim:** every subset of $\mathbb{R}$ of measure zero
([[def-measure-zero-and-content-zero]]) is nowhere dense
([[def-nowhere-dense-meager]]).

The claim confuses two different smallness conditions. Measure zero constrains
the total length of a cover; nowhere density constrains the *closure*. A set may
be covered by intervals of total length below any $\varepsilon$ and still have
every real as an adherent point, and $\mathbb{Q}$ does exactly that.

## Facts & Assumptions

**Given:** The set $\mathbb{Q}_{\mathbb{R}} \subseteq \mathbb{R}$ of rationals, that is the image of $\mathbb{Q}$ under the canonical embedding ([[lem-rat-embeds-dense]]).

[A1] The false claim: every subset of $\mathbb{R}$ of measure zero is nowhere dense.

[L1] $\mathbb{Q} \approx \mathbb{N}$, so $\mathbb{Q}_{\mathbb{R}}$ is at most countable ([[thm-rationals-countable]], [[def-countable]], [[lem-rat-embeds-dense]]).

[L2] Every at most countable subset of $\mathbb{R}$ has measure zero ([[lem-countable-sets-are-null]]).

[L3] $\mathbb{Q}_{\mathbb{R}}$ is dense in $\mathbb{R}$, that is $\overline{\mathbb{Q}_{\mathbb{R}}} = \mathbb{R}$ ([[lem-q-and-irrationals-dense-r]], [[def-limit-point-r]]).

[L4] A set is nowhere dense when the interior of its closure is empty; the interior of an open set is itself, and $\mathbb{R}$ is open ([[def-nowhere-dense-meager]], [[def-interior-closure-boundary-r]], [[def-open-and-closed-in-r]]).

## Refutation

**Proof technique:** direct.

1.1 $\mathbb{Q}_{\mathbb{R}}$ has measure zero, being at most countable by [L1] and hence null by [L2]. [L1, L2]

1.2 $\mathbb{Q}_{\mathbb{R}}$ is not nowhere dense: its closure is $\mathbb{R}$ by [L3], and the interior of $\mathbb{R}$ is $\mathbb{R}$ itself by [L4], since $\mathbb{R}$ is an open subset of $\mathbb{R}$; so the interior of the closure is $\mathbb{R} \ne \varnothing$. [L3, L4]

2.1 So $\mathbb{Q}_{\mathbb{R}}$ is a subset of $\mathbb{R}$ of measure zero that is not nowhere dense, and the claim [A1] fails at it; the claim is therefore false. [step 1.1, step 1.2, A1] ∎

## Remarks

- **$\mathbb{Q}_{\mathbb{R}}$ is nonetheless meager**, being a union of countably
  many singletons, each of which *is* nowhere dense
  ([[cor-q-is-meager-and-not-g-delta]]). So the failure above is not a failure of
  topological smallness in every sense: it is exactly the failure of the
  one-step condition. Meagreness is the countable-union closure of nowhere
  density, and it is the notion under which $\mathbb{Q}$ is small.

- **The converse implication is also false**, and needs an uncountable witness:
  the Smith-Volterra-Cantor set is nowhere dense and not null
  ([[fs-nowhere-dense-implies-measure-zero]]).

- **The named witness** is [[cex-dense-set-of-measure-zero]].
