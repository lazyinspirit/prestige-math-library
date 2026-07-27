---
id: cex-irrationals-are-not-f-sigma
kind: counterexample
title: "The irrationals form a residual $G_\\delta$ set that is not $F_\\sigma$"
status: published
origin: session
deps: [fs-q-is-g-delta, cor-q-is-meager-and-not-g-delta, def-f-sigma-g-delta, def-nowhere-dense-meager, thm-baire-category-r, lem-rat-embeds-dense, def-open-and-closed-in-r]
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
    - title: "Gδ set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/G-delta_set"
    - title: "Fσ set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/F-sigma_set"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** $\mathbb{Q}$ is a $G_\delta$ subset of $\mathbb{R}$
([[fs-q-is-g-delta]]); equivalently, by complementation
([[def-f-sigma-g-delta]]), the irrationals are $F_\sigma$.

The witness is the set $X := \mathbb{R} \setminus \mathbb{Q}_{\mathbb{R}}$ of
irrationals ([[lem-rat-embeds-dense]]). It **is** $G_\delta$, being
$\bigcap_n (\mathbb{R} \setminus \{e(n)\})$ for any enumeration $e$ of the
rationals, and it **is** residual, its complement being a countable union of
singletons; but it is **not** $F_\sigma$, and that is the failure of the refuted
claim. The refutation is carried out in full in
[[cor-q-is-meager-and-not-g-delta]]; this item records the witness and the three
properties that make it the right one.

## Facts & Assumptions

**Given:** The set $\mathbb{Q}_{\mathbb{R}}$ of rationals inside $\mathbb{R}$ and its complement $X = \mathbb{R} \setminus \mathbb{Q}_{\mathbb{R}}$.

[A1] The refuted claim: $\mathbb{Q}_{\mathbb{R}}$ is $G_\delta$, equivalently $X$ is $F_\sigma$.

[L1] $\mathbb{Q}_{\mathbb{R}}$ is $F_\sigma$ and meager, $X$ is $G_\delta$ and residual, and $\mathbb{Q}_{\mathbb{R}}$ is not $G_\delta$ ([[cor-q-is-meager-and-not-g-delta]], claims 1, 2, 3).

[L2] $A$ is $F_\sigma$ if and only if $\mathbb{R} \setminus A$ is $G_\delta$ ([[def-f-sigma-g-delta]], [[def-open-and-closed-in-r]]).

[L3] Residual means the complement is meager; $\mathbb{R}$ is not meager ([[def-nowhere-dense-meager]], [[thm-baire-category-r]]).

## Counterexample

**Proof technique:** direct.

1.1 $X$ is $G_\delta$ and residual, by claim 2 of [L1]. [L1]

1.2 $X$ is not $F_\sigma$: were it $F_\sigma$, its complement $\mathbb{Q}_{\mathbb{R}}$ would be $G_\delta$ by [L2], which claim 3 of [L1] forbids. [L1, L2]

2.1 So $X$ is a residual $G_\delta$ set that is not $F_\sigma$, and it witnesses the failure of [A1] in both of the equivalent formulations. [step 1.1, step 1.2, A1, L2] ∎

## Remarks

- **The asymmetry is real and is not a defect of the definitions.** The two
  classes $F_\sigma$ and $G_\delta$ are exchanged by complementation, but a
  *particular* set need not lie in both: $\mathbb{Q}_{\mathbb{R}}$ is $F_\sigma$
  and not $G_\delta$, and $X$ is $G_\delta$ and not $F_\sigma$. A set lying in
  both classes is a genuinely stronger condition, satisfied for instance by every
  open set and every closed set.

- **What forces it is the Baire category theorem**, through the fact that
  $\mathbb{R}$ is not meager ([L3]) while $\mathbb{Q}_{\mathbb{R}}$ is. Both
  $\mathbb{Q}_{\mathbb{R}}$ and $X$ are dense, both are uncountable or countable
  respectively, and no cardinality or density argument distinguishes them in the
  required way; the distinction is one of category.

- **$X$ is large in both senses.** It is residual, so it is large in category;
  and it is not null. For if it were, then, $\mathbb{Q}_{\mathbb{R}}$ being null
  ([[lem-countable-sets-are-null]]), one could interleave a cover of each with
  slack $\varepsilon \cdot 2^{-1}$ and obtain a cover of
  $\mathbb{Q}_{\mathbb{R}} \cup X = \mathbb{R}$ of total length at most
  $\varepsilon$, which [[lem-nondegenerate-interval-is-not-null]] forbids already
  for $[0,1]$. Interleaving two covers needs no choice principle, unlike the
  countably infinite case ([[thm-countable-union-of-null-is-null]]).
