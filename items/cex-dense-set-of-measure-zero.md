---
id: cex-dense-set-of-measure-zero
kind: counterexample
title: "$\\mathbb{Q}$ is dense in $\\mathbb{R}$ and has measure zero"
status: published
origin: session
deps: [fs-measure-zero-implies-nowhere-dense, lem-countable-sets-are-null, lem-q-and-irrationals-dense-r, def-measure-zero-and-content-zero, def-nowhere-dense-meager, thm-rationals-countable, lem-rat-embeds-dense, def-countable, def-interior-closure-boundary-r, def-open-and-closed-in-r]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
cx_machine_verified: false
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
    - title: "Dense set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dense_set"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** every subset of $\mathbb{R}$ of measure zero is nowhere dense
([[fs-measure-zero-implies-nowhere-dense]]).

The witness is $\mathbb{Q}_{\mathbb{R}}$, the set of rationals inside
$\mathbb{R}$ ([[lem-rat-embeds-dense]]). It is at most countable, hence null
([[lem-countable-sets-are-null]]), and it is dense, so its closure is
$\mathbb{R}$ and the interior of that closure is $\mathbb{R}$, as far from empty
as possible. The refutation is carried out in full in
[[fs-measure-zero-implies-nowhere-dense]]; this item records the witness and the
explicit cover.

## Facts & Assumptions

**Given:** The set $\mathbb{Q}_{\mathbb{R}} \subseteq \mathbb{R}$ of rationals.

[A1] The refuted claim: every subset of $\mathbb{R}$ of measure zero is nowhere dense.

[L1] $\mathbb{Q}$ is countably infinite, so $\mathbb{Q}_{\mathbb{R}}$ is at most countable and therefore null ([[thm-rationals-countable]], [[def-countable]], [[lem-rat-embeds-dense]], [[lem-countable-sets-are-null]], [[def-measure-zero-and-content-zero]]).

[L2] $\mathbb{Q}_{\mathbb{R}}$ is dense: $\overline{\mathbb{Q}_{\mathbb{R}}} = \mathbb{R}$ ([[lem-q-and-irrationals-dense-r]]).

[L3] Nowhere dense means the interior of the closure is empty; $\mathbb{R}$ is open, so its interior is itself ([[def-nowhere-dense-meager]], [[def-interior-closure-boundary-r]], [[def-open-and-closed-in-r]]).

## Counterexample

**Proof technique:** direct.

1.1 $\mathbb{Q}_{\mathbb{R}}$ has measure zero, by [L1]. [L1]

1.2 $\mathbb{Q}_{\mathbb{R}}$ is not nowhere dense: its closure is $\mathbb{R}$ by [L2] and the interior of $\mathbb{R}$ is $\mathbb{R}$ by [L3], which is not empty. [L2, L3]

2.1 So $\mathbb{Q}_{\mathbb{R}}$ witnesses the failure of [A1]. [step 1.1, step 1.2, A1] ∎

## Remarks

- **The cover is explicit and startling.** For every $\varepsilon > 0$ the
  rationals are covered by open intervals of total length exactly $\varepsilon$
  ([[ex-q-covered-by-intervals-of-small-total-length]]), even though every one of
  those intervals meets every other and the union is dense.

- **$\mathbb{Q}$ is small in the other sense too, one level up.** It is meager,
  being a countable union of singletons
  ([[cor-q-is-meager-and-not-g-delta]]); what fails is only nowhere density
  itself. So the counterexample separates "nowhere dense" from "meager", not
  category from measure.

- **The complementary witness** is the Smith-Volterra-Cantor set, nowhere dense
  and not null ([[cex-nowhere-dense-with-positive-measure]]).
