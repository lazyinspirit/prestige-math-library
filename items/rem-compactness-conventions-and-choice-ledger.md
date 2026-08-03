---
id: rem-compactness-conventions-and-choice-ledger
kind: remark
title: "The quasicompact convention, why compactness of a subset is read intrinsically here, and what each result on this page costs in choice"
status: published
origin: session
deps: [def-compact-space, lem-compactness-of-a-subspace-is-ambient, thm-baire-category-locally-compact-hausdorff, lem-dependent-choice-along-a-sequence-of-relations, thm-compactness-agrees-with-metric-compactness, thm-compact-iff-fip, thm-alexander-subbase-lemma, thm-tychonoff, thm-finite-products-of-compact-spaces, lem-tube-lemma-for-a-compact-factor, def-compactness-variants, thm-compactness-variants-hierarchy, thm-ordinal-spaces-and-compactness, thm-the-long-line-is-countably-compact-and-not-compact, def-locally-compact-space, def-one-point-compactification, def-hausdorff-space, thm-zorn, def-axiom-of-choice, def-countable-choice, def-dependent-choice, lem-finite-choice, rem-choice-strengths]
justified_by: []
external_refs: [rem-schechter-kelley-tychonoff, rem-baire-category-choice-strength]
aliases: [rem-compactness-choice-ledger]
landmark: false
short: "conventions and the choice ledger"
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "H. Herrlich, Axiom of Choice, Lecture Notes in Mathematics 1876, Springer 2006"
      url: "https://link.springer.com/book/10.1007/11601562"
pipeline_run: null
---

## Three conventions, fixed once

**1. Compact means the open-cover condition and nothing more.** Following
Bourbaki, some authors reserve *compact* for a space that is both quasicompact,
meaning every open cover has a finite subcover, and Hausdorff, and then say
*quasicompact* for the cover condition alone. This library takes the more widely
adopted convention: [[def-compact-space]] defines *compact* as the cover
condition, the word *quasicompact* is not used, and every Hausdorff hypothesis is
written into the statement that needs it — as in
[[thm-compact-subset-of-a-hausdorff-space-is-closed]] and
[[thm-locally-compact-hausdorff-basics]]. A reader arriving from the other
convention should read every unqualified "compact" here as "quasicompact".

**2. Compactness of a subset is intrinsic.** [[def-compact-space]] calls
$A \subseteq X$ compact when the subspace $A$ carries is a compact space, not when
every family of open subsets of $X$ covering $A$ has finitely many members
covering it. The two conditions agree, and that is a theorem,
[[lem-compactness-of-a-subspace-is-ambient]]; no proof here uses the ambient
reading without citing it. The point of the choice is that compactness then
belongs to the space $A$ alone, so a set compact in one ambient space is compact
in every other one in which it sits as a subspace. The metric development fixed
the same reading, and that the two developments describe one notion is
[[thm-compactness-agrees-with-metric-compactness]].

**Relative compactness is the exception**, and deliberately so:
[[def-compactness-variants]] defines $A$ to be relatively compact in $X$ when
$\overline{A}$ is compact, and the closure is taken in $X$. That condition really
is about $A$ inside $X$ and changes when the ambient space changes.

**3. A separation axiom is written out rather than named where it is not
available.** Claim 4 of [[thm-compactness-variants-hierarchy]] needs every
singleton to be closed. That condition is a named separation axiom, and the page
naming it is not among this page's declared prerequisites, so the hypothesis is
stated in the vocabulary of open and closed sets and nothing is asserted about the
axiom it belongs to. On this page a neighbourhood need not be open, and the
intersection of no sets is the whole space; these two general conventions are in
force without further comment.

## The choice ledger

Every entry below is a statement about **the proof given in this library**, and
about nothing else. Each is an upper bound on what that proof spends; no item on
this page claims that a choice principle is *necessary*, because that would be an
independence result and this library proves none.

**Theorems of ZF, spending no choice principle at all.**
[[lem-compactness-of-a-subspace-is-ambient]],
[[thm-compactness-agrees-with-metric-compactness]], [[thm-compact-iff-fip]],
[[thm-closed-subspace-of-a-compact-space-is-compact]],
[[thm-compact-subset-of-a-hausdorff-space-is-closed]],
[[thm-compactness-under-continuous-maps]],
[[lem-tube-lemma-for-a-compact-factor]],
[[thm-finite-products-of-compact-spaces]],
[[cor-heine-borel-in-the-product-topology]],
[[thm-locally-compact-hausdorff-basics]],
[[thm-one-point-compactification-properties]],
[[lem-the-order-topology-on-an-ordinal]],
[[thm-quasicomponents-equal-components-in-a-compact-hausdorff-space]], claim 1 of
[[thm-compactness-variants-hierarchy]], claims 1 and 2 of
[[thm-ordinal-spaces-and-compactness]], and claims 1 and 3 of
[[thm-the-long-line-is-countably-compact-and-not-compact]].

Where a proof in that list does make a selection, the selection is over a finite
index set, and [[lem-finite-choice]] is itself a theorem of ZF. Two of those
proofs avoid even that: [[lem-tube-lemma-for-a-compact-factor]] indexes its cover
by *pairs* of open sets, so the compactness criterion hands back the second
entries with the indices, and
[[thm-compact-subset-of-a-hausdorff-space-is-closed]] collects the family of
**all** open sets that work rather than choosing one for each point. The textbook
phrase "for each $y \in K$ choose disjoint open $U_y, V_y$" is a selection over an
arbitrary index set, that is the full Axiom of Choice
([[def-axiom-of-choice]]), and it is avoided throughout this page.

**Spending the Axiom of Choice, through Zorn's lemma
([[thm-zorn]]).** [[thm-alexander-subbase-lemma]] spends it exactly once, to
obtain a maximal open cover without a finite subcover; [[thm-tychonoff]] inherits
that use and spends it a second time directly, to produce a point of a product of
nonempty sets; and [[fs-compact-implies-sequentially-compact]] inherits both,
since its witness is compact by Tychonoff. Tychonoff's theorem **implies** the
Axiom of Choice, which is why no proof of it can be choice-free; the exact form of
that implication, and the correction of the classical derivation, are recorded in
[[rem-schechter-kelley-tychonoff]], which this library states and does not prove.
Where the ultrafilter lemma sits between the two is [[rem-choice-strengths]].

**Spending the Axiom of Countable Choice ([[def-countable-choice]]).** Claims 2
and 4 of [[thm-compactness-variants-hierarchy]], each of which picks a point
outside each of countably many nested unions; claim 3 of
[[thm-ordinal-spaces-and-compactness]]; claims 2 and 4 of
[[thm-the-long-line-is-countably-compact-and-not-compact]]; and the two false
statements whose witnesses those are,
[[fs-sequentially-compact-implies-compact]] and
[[fs-countably-compact-implies-compact]]. In the ordinal and long-ray results the
principle enters through a boundedness theorem for at most countable
subsets, which carries the hypothesis in its own statement — and not only
through it: claim 2 of
[[thm-the-long-line-is-countably-compact-and-not-compact]] spends it once more
directly, to pick a point in each of countably many nonempty sets, and claim 3
of [[thm-ordinal-spaces-and-compactness]] inherits a further use through claim 2
of [[thm-compactness-variants-hierarchy]].

**Spending the Axiom of Dependent Choice ([[def-dependent-choice]]).** Claim 3 of
[[thm-compactness-variants-hierarchy]], where it is spent to extract a countably
infinite subset from an infinite set, which is not a theorem of ZF; the claim
about countably infinite subsets alone, claim 1(d) of the same theorem, is free
of that cost. And [[thm-baire-category-locally-compact-hausdorff]], which spends
it once, through [[lem-dependent-choice-along-a-sequence-of-relations]], to run a
shrinking construction whose admissible successors change with the stage. In both
cases dependent choice is an upper bound on the cost of the argument given here
and is not asserted to be necessary; for the Baire theorem in particular the
several versions of the statement correspond to different principles over ZF, as
[[rem-baire-category-choice-strength]] records.

**The metric ledger is separate and remains in force.** What each implication
between the compactness properties of a *metric* space costs is recorded in
[[rem-compactness-choice-ledger-metric]]. Nothing here supersedes it: by
[[thm-compactness-agrees-with-metric-compactness]] the metric statements are the
statements of this page read in a metric topology, so the two ledgers describe the
same arrows wherever they overlap and different arrows elsewhere.

**A warning about equivalences.** [[thm-compactness-variants-hierarchy]] is
deliberately stated as a list of implications rather than as one equivalence,
because an equivalence proved by going round a cycle charges every arrow in it the
maximum cost. The same discipline is what
[[rem-compactness-choice-ledger-metric]] exists to enforce on the metric side.
