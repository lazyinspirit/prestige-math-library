---
id: rem-the-choice-cost-of-urysohns-lemma-and-of-tietzes-theorem
kind: remark
title: "Which results on this page spend dependent choice, which spend countable choice, and which are theorems of ZF"
status: draft
origin: session
deps: [thm-urysohn-lemma, thm-tietze-extension-theorem,
       thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set,
       lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function, def-dependent-choice,
       def-countable-choice, lem-finite-choice,
       thm-metric-spaces-are-tychonoff-and-perfectly-normal,
       thm-perfectly-normal-implies-completely-normal, rem-separation-axiom-conventions,
       rem-choice-ledger]
justified_by: []
external_refs: [rem-urysohn-lemma-not-a-zf-theorem]
aliases: []
landmark: false
short: "choice-cost ledger for this page"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Axiom of dependent choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_dependent_choice"
    - title: "Urysohn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Urysohn%27s_lemma"
pipeline_run: null
---

This remark extends the choice-strength bookkeeping of [[rem-choice-ledger]]
and of [[rem-separation-axiom-conventions]] §4 to the results proved on this
page, naming exactly which theorem spends which principle and at which single
step, in the spirit both of those items.

## What is proved free of any choice principle

[[def-the-dyadic-rationals-of-the-unit-interval]] is choice free: its density
argument fixes one natural number via [[thm-well-ordering-principle]], a
theorem of ZF, and one dyadic rational via a single existential instantiation,
never a simultaneous selection.

[[lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function]] is choice
free by its own statement: given an *already constructed* family of open
sets, producing the continuous function they define costs nothing. It is
exactly because this step is free that the choice cost of
[[thm-urysohn-lemma]] can be isolated to the single step that builds the
family in the first place.

The converse clauses — that a space whose disjoint closed sets are always
separated by a continuous function is normal
([[thm-urysohn-lemma]], clause 2), and that a space with the closed-subspace
extension property is normal ([[thm-tietze-extension-theorem]], clause 2) —
use no choice principle: each cuts a given continuous function at the value
$1/2$ and reads off two disjoint open sets.

[[lem-a-uniformly-approximable-real-valued-map-is-continuous]] is choice free
throughout, including its Weierstrass-type second clause: every existential
step draws from a single nonempty set of reals or a single continuous
function, never from an infinite family at once.

## What spends dependent choice, and at which single step

[[thm-urysohn-lemma]], clause 1, spends dependent choice exactly once: the
application of [[def-dependent-choice]] that strings together the countably
many *admissible* finite-level open-set assignments built in that item's own
proof, each extending the one before. Every finite level is itself built by
[[lem-finite-choice]], a theorem of ZF, so the only place the sequence of
levels itself is assembled — rather than any one level — is where DC is
spent.

[[thm-tietze-extension-theorem]], clause 1, spends dependent choice in the
same shape and at the same kind of step: the sequence of approximating pairs
$(f_n,g_n)$, where each $g_{n+1}$ is chosen using the *particular* remainder
function $f_{n+1}$ produced from the previous stage. This dependency is
genuine — unlike the corresponding step of
[[thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set]]
below, the relation driving the recursion cannot be replaced by one that
ignores its first argument.

Every other theorem and corollary on this page that assumes dependent choice
does so purely by inheritance, through a citation of one of the two results
above, and spends no further choice principle of its own:
[[cor-urysohns-lemma-closes-the-separation-chain]],
[[thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set]],
[[cor-tietze-for-unbounded-and-open-interval-valued-maps]],
[[thm-a-locally-compact-hausdorff-space-is-completely-regular]], and
[[cor-a-compact-hausdorff-space-is-tychonoff]].

## The one place countable choice appears, and why it costs no more than DC

The forward direction of
[[thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set]]
performs a step shaped like the Axiom of Countable Choice
([[def-countable-choice]]): a Urysohn function is selected for every level of
a fixed countable presentation $C = \bigcap_n U_n$, and the selection at level
$n$ does not depend on the one at any other level. That item's own proof
discharges this as a direct instance of dependent choice, using a relation
that carries no memory of the previous term, so the theorem is stated under
DC alone rather than under DC together with a separately-adopted
$\mathrm{AC}_\omega$.

## Contrast with the choice-free and countable-choice arrows already published

[[thm-metric-spaces-are-tychonoff-and-perfectly-normal]] proves the metric
case of every property this page's headline theorems assert for a general
normal space — Urysohn separation, the zero-set characterisation of perfect
normality — entirely free of choice, the distance function supplying every
function needed by an explicit formula. The contrast confirms that the choice
cost on this page belongs to the passage from *a* topology to *no* topology
beyond normality, not to the properties themselves.

[[thm-perfectly-normal-implies-completely-normal]], by contrast, needs only
countable choice, and for a structurally different reason than the one above:
its single choice-consuming step selects one open set for each member of a
countable family of closed sets that already exists in full before any
selection is made, with no member of the family depending on an earlier
choice. That is the textbook shape of $\mathrm{AC}_\omega$ with no disguise
needed, unlike the two DC arguments on this page.

## What this page does not attempt to show

Nothing here shows dependent choice is *necessary* for Urysohn's lemma or for
Tietze's theorem; that would be an independence result, and this library
proves none. What is recorded, with sources, in
[[rem-urysohn-lemma-not-a-zf-theorem]] is that the classical $T_4$ form of
Urysohn's lemma is a theorem of neither ZF nor ZF together with countable
choice, so the DC hypothesis carried by every theorem on this page cannot be
weakened to countable choice without leaving the space of what has been
established.
