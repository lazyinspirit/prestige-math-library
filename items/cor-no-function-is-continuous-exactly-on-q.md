---
id: cor-no-function-is-continuous-exactly-on-q
kind: corollary
title: "No function $\\mathbb{R} \\to \\mathbb{R}$ is continuous at every rational and discontinuous at every irrational, because $\\mathbb{Q}$ is not $G_\\delta$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
  evidence: semantic-source
deps: [thm-discontinuity-set-is-f-sigma, def-f-sigma-g-delta, cor-q-is-meager-and-not-g-delta, def-continuity-real, lem-rat-embeds-dense]
justified_by: []
aliases: []
landmark: true
short: "nothing is continuous exactly on $\\mathbb{Q}$"
proof_strategy: contradiction
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
    - title: "Gdelta set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/G%CE%B4_set"
    - title: "Baire category theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Baire_category_theorem"
pipeline_run: null
---

## Statement

There is **no** function $f : \mathbb{R} \to \mathbb{R}$ that is continuous at
every rational and discontinuous at every irrational
([[def-continuity-real]], [[lem-rat-embeds-dense]]).

Equivalently: $\mathbb{Q}$ is not the continuity set of any function
$\mathbb{R} \to \mathbb{R}$.

**The contrast with Thomae's function is the point.** There *is* a function
continuous exactly at the irrationals, namely $t$
([[thm-dirichlet-and-thomae-continuity-sets]]), and one might expect the two
arrangements to be symmetric. They are not, because the classes $F_\sigma$ and
$G_\delta$ are exchanged by complementation while $\mathbb{Q}$ and the
irrationals are, and only one of the two sets is $G_\delta$
([[cor-q-is-meager-and-not-g-delta]]).

## Facts & Assumptions

**Given:** $\mathbb{Q}$ denotes the canonical copy of the rationals inside $\mathbb{R}$ ([[lem-rat-embeds-dense]]).

[L1] For every $f : \mathbb{R} \to \mathbb{R}$ the set of points at which $f$ is continuous is a $G_\delta$ subset of $\mathbb{R}$ ([[thm-discontinuity-set-is-f-sigma]], case $A = \mathbb{R}$, [[def-f-sigma-g-delta]]).

[L2] $\mathbb{Q}$ is **not** a $G_\delta$ subset of $\mathbb{R}$ ([[cor-q-is-meager-and-not-g-delta]], claim 3).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that there is $f : \mathbb{R} \to \mathbb{R}$ continuous at every rational and discontinuous at every irrational. [assume-contra]

2.1 Then the set of continuity points of $f$ is exactly $\mathbb{Q}$: it contains every rational by hypothesis, and it contains no irrational, again by hypothesis. [step 1.1]

3.1 By the $G_\delta$ theorem the set of continuity points of $f$ is a $G_\delta$ subset of $\mathbb{R}$, so $\mathbb{Q}$ is $G_\delta$. This contradicts the fact that $\mathbb{Q}$ is not $G_\delta$, so no such $f$ exists. [step 2.1, L1, L2, discharge-contradiction] ∎

## Remarks

- **Where the work actually is.** Nothing in this corollary is hard; all of it
  was done earlier. The $G_\delta$ theorem is [[thm-discontinuity-set-is-f-sigma]],
  which rests on the oscillation, and the failure of $\mathbb{Q}$ to be
  $G_\delta$ is [[cor-q-is-meager-and-not-g-delta]], which is where the Baire
  category theorem is spent. The corollary is the place where those two meet.

- **A weaker statement is true and much cheaper, and is not what is proved
  here.** That no *monotone* function is continuous exactly at the rationals
  follows from [[thm-froda]] alone, since the irrationals are uncountable. The
  statement above is about all functions and needs category.
