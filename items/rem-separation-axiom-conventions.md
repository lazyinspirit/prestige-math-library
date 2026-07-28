---
id: rem-separation-axiom-conventions
kind: remark
title: "Conventions on this page, and the one implication of the classical chain that is not available at this point in the reading order"
status: published
origin: session
deps: [def-t0-and-t1-spaces, def-hausdorff-space, def-urysohn-space,
       def-regular-and-t3-spaces, def-completely-regular-and-tychonoff-spaces,
       def-normal-and-t4-spaces, def-completely-normal-and-perfectly-normal-spaces,
       def-zero-sets-and-cozero-sets, thm-the-separation-implication-chain,
       thm-perfectly-normal-implies-completely-normal, def-metrizable-space,
       def-countable-choice, rem-topology-conventions,
       def-compact-space, thm-compact-subset-of-a-hausdorff-space-is-closed]
justified_by: []
external_refs: [rem-urysohn-lemma-not-a-zf-theorem]
aliases: []
landmark: false
short: "separation-axiom conventions and the missing arrow"
verification:
  precheck: n/a
  verified:
    model: claude-sonnet-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "Urysohn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Urysohn%27s_lemma"
    - title: "J. Munkres, Topology, 2nd ed., §31-33"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

The separation axioms are the part of general topology where textbooks disagree
most sharply about vocabulary, and where a reader arriving with the other
convention misreads statements rather than merely finding them unfamiliar. This
remark settles the disagreements that are live on this page, records the one
implication of the classical chain that this page does not prove, and states the
choice cost of the one implication whose proof spends a choice principle. It
extends [[rem-topology-conventions]], which settles the four forks of the
underlying topological vocabulary and is not repeated here.

## 1. Whether *regular* and *normal* include $T_1$

**They do not, in this library.** *Regular*, *completely regular*, *normal*,
*completely normal* and *perfectly normal* name separation conditions on sets
alone ([[def-regular-and-t3-spaces]],
[[def-completely-regular-and-tychonoff-spaces]], [[def-normal-and-t4-spaces]],
[[def-completely-normal-and-perfectly-normal-spaces]]); the numerals $T_3$,
$T_{3\frac12}$, $T_4$, $T_5$ and $T_6$ name the conjunction of each with $T_1$
([[def-t0-and-t1-spaces]]).

Munkres builds $T_1$ into *regular* and *normal* and then has no separate name
for the bare conditions; Kelley, Willard and Engelking take the side taken here.
Both usages are current, and neither is more correct. The reason for the choice
made here is that the two halves are genuinely independent and each is used
alone on this page: the indiscrete topology on a two-point set is regular,
completely regular, normal, completely normal and perfectly normal, and fails
$T_0$; and the cofinite topology on an infinite set is $T_1$ and fails
everything above it. **Every statement on this page writes the $T_1$ hypothesis
out where it is used**, so a reader may translate to the other convention by
deleting it.

The word *Tychonoff* is used for completely regular plus $T_1$, and $T_{3\frac12}$
is treated as a synonym.

## 2. The name *Urysohn*, which denotes three different things

- **Urysohn space**, $T_{2\frac12}$: distinct points have neighbourhoods with
  disjoint closures ([[def-urysohn-space]]). This is what "Urysohn" means on
  this page.
- **Completely Hausdorff**: distinct points are separated by a continuous
  real-valued function. Some texts attach Urysohn's name to *this* condition
  instead. This library does not define it.
- **Urysohn's lemma**: the theorem that in a normal $T_1$ space two disjoint
  closed sets are separated by a continuous function into $[0,1]$. It is a
  theorem about *sets*, not points, and it is unrelated to either space
  condition.

A statement quoting "Urysohn" without saying which is meant is ambiguous; this
page always says which.

## 3. The one arrow this page does not prove

[[thm-the-separation-implication-chain]] assembles every implication proved
here. Against the classical chain it is short by exactly **one** arrow:

> **$T_4 \Rightarrow T_{3\frac12}$: a normal $T_1$ space is completely regular.**

This is **Urysohn's lemma**, applied to the point $\{x_0\}$ — which is closed by
$T_1$ — and the closed set $C$. Its proof indexes a family of open sets by the
dyadic rationals, choosing each from the previous one by the shrinking lemma; it
is not available at this point in the reading order, and no theorem of this page
proves it. Where it is named — in [[def-completely-regular-and-tychonoff-spaces]]
and in [[thm-completely-regular-implies-regular]] — it is named as the classical
arrow that is missing here, and it is never used as a fact in any proof on this
page. What would license it is a page
proving Urysohn's lemma, which in this library's plan sits above the present
one.

**The gap is not mere bookkeeping.** Urysohn's lemma is not a theorem of ZF, nor
of ZF together with countable choice: this is recorded, with its sources, in
[[rem-urysohn-lemma-not-a-zf-theorem]], which this remark mentions without
depending on. So the missing arrow is missing for a reason stronger than the
reading order — no rearrangement of the material already on this page could
supply it, and any page that does supply it must record a choice principle.

**Everything else in the classical chain is here.** In particular
$T_6 \Rightarrow T_5$ *is* proved ([[thm-perfectly-normal-implies-completely-normal]]),
and proved without any Urysohn function: it needs only normality, the
$F_\sigma$ presentation of open sets, and the Axiom of Countable Choice recorded
in §4 below. A reader who expects that arrow also to be
unavailable is thinking of the route through "every closed set is a zero set",
which does need Urysohn's lemma; the route taken here does not.

## 4. The one choice cost incurred on this page

Every proof on this page is a theorem of ZF **except**
[[thm-perfectly-normal-implies-completely-normal]], which assumes the Axiom of
Countable Choice ([[def-countable-choice]]) and spends it at one step, selecting
one open set for each member of a countable family of closed sets. The
hypothesis is written into that theorem's own statement and into clause 1 of
[[thm-the-separation-implication-chain]], and it is inherited by nothing else:
in particular the metric results are choice free, so "metrizable implies
perfectly normal, completely normal and normal" needs no choice at all, even
though the general arrow from perfect to complete normality does.

## 5. What this page deliberately does not contain

- **Compactness.** "A compact Hausdorff space is normal" is the standard first
  example of a normal space, and it is absent here for a narrower reason than
  before: general topological compactness itself **is** now available at this
  point in the reading order ([[def-compact-space]]), and the two separation
  lemmas the proof needs are proved there too
  ([[thm-compact-subset-of-a-hausdorff-space-is-closed]]). What is still absent
  is the packaged statement itself, which is homed on a page above the present
  one. What would license restating it here is a home for that packaging above
  this page, not below it.
- **A regular space that is not normal.** Every witness reachable from this
  page's material needs either cardinal arithmetic or the hereditary and
  productive behaviour of regularity, neither of which is available here. Rather
  than plant a false statement with no witness, this page omits it; what would
  license it is a page developing either of those two tools.
- **Hereditary and productive behaviour.** Which of these axioms pass to
  subspaces and to products is not asked here. In particular the equivalence
  "completely normal if and only if hereditarily normal" is not proved, and
  [[def-completely-normal-and-perfectly-normal-spaces]] uses only the
  separated-sets form.
- **Zero-set characterisations beyond the metric case.** The equivalence
  "perfectly normal if and only if normal with every closed set a zero set"
  ([[def-zero-sets-and-cozero-sets]]) again needs Urysohn's lemma; only the
  metric direction is proved here, where the distance function supplies the
  function outright ([[def-metrizable-space]]).
