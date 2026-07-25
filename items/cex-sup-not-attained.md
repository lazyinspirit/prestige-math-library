---
id: cex-sup-not-attained
kind: counterexample
title: "A supremum need not belong to its set: $\\sup(0,1) = 1 \\notin (0,1)$"
status: draft
origin: session
deps: [fs-sup-belongs-to-set, lem-sup-epsilon, ex-sup-of-open-interval,
       lem-max-is-sup, def-max-min, def-complete-ordered-field, def-ordered-field]
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
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Infimum and supremum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infimum_and_supremum"
    - title: "Maximum and minimum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Maximum_and_minimum"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** if $S \subseteq \mathbb{R}$ is nonempty and bounded above then
$\sup S \in S$; equivalently, every nonempty subset of $\mathbb{R}$ that is
bounded above has a maximum ([[fs-sup-belongs-to-set]], [[def-max-min]]).

The witness is the open unit interval $I = (0,1)$. It is nonempty, it is bounded
above by $1$, its supremum exists and equals $1$, and $1 \notin I$. The
supremum computation is carried out in full in [[ex-sup-of-open-interval]] and is
not repeated here; this item records only what that computation refutes.

## Facts & Assumptions

**Given:** The complete ordered field $\mathbb{R}$ and the open interval $I := \{x \in \mathbb{R} : 0 < x < 1\}$.

[L1] The open unit interval: $I$ is nonempty, $1$ is an upper bound of $I$, $\sup I = 1$, and $1 \notin I$ ([[ex-sup-of-open-interval]], [[lem-sup-epsilon]]).

[L2] Attainment: for a nonempty $X \subseteq \mathbb{R}$ whose supremum exists, $\sup X \in X$ holds exactly when $X$ has a maximum, and then $\sup X = \max X$ ([[lem-max-is-sup]], [[def-max-min]]).

[L3] The refuted claim: for every nonempty $S \subseteq \mathbb{R}$ that is bounded above, $\sup S$ exists and $\sup S \in S$ ([[fs-sup-belongs-to-set]]).

[L4] Order: trichotomy holds, so $a < a$ is impossible ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Counterexample

**Proof technique:** direct.

1.1 $I$ is a nonempty subset of $\mathbb{R}$ bounded above by $1$, so it is an instance of the claim, and its supremum exists with $\sup I = 1$. [L1, L3]

1.2 $1 \notin I$: membership in $I$ requires $x < 1$, and $1 < 1$ is impossible by irreflexivity. [L1, L4]

2.1 Hence $\sup I = 1$ and $1 \notin I$, so $\sup I \notin I$ and the claim fails on $I$. [step 1.1, step 1.2, L3]

2.2 Equivalently, $I$ has no maximum: a maximum of $I$ would have to be $\sup I = 1$ and would have to lie in $I$, and $1$ does not. [step 1.1, step 1.2, L2]

3.1 The open unit interval is therefore a nonempty, bounded above subset of $\mathbb{R}$ whose supremum exists and does not belong to it; the claim that a supremum belongs to its set is refuted, and so is the equivalent claim that boundedness above forces a maximum. [step 2.1, step 2.2, L3] ∎

## Remarks

- The false statement [[fs-sup-belongs-to-set]] carries its own self-contained
  refutation with the same witness. This item exists so that the computation and
  the refutation are separated: [[ex-sup-of-open-interval]] establishes the value
  $\sup(0,1) = 1$ from the epsilon characterisation, and the refutation is then a
  two-line consequence of it.
- What survives of the claim is exactly [[lem-max-is-sup]]: the supremum lies in
  the set precisely when a maximum exists. A sufficient condition is being
  nonempty and finite ([[lem-finite-set-has-max]]); finiteness alone is not
  sufficient, since $\emptyset$ is finite and has no maximum
  ([[def-max-min]]). And [[ex-sup-of-closed-interval]] is the attaining
  companion of this witness, with the same supremum.
- Nothing about $I$ is special beyond being open at the top. Any set whose
  supremum is approached but not reached does the same job, which is why the
  supremum, and not the maximum, is the right notion for analysis.
