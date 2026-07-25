---
id: rem-baire-category-choice-strength
kind: remark
title: "The Baire category theorem is four inequivalent statements over ZF"
status: draft
origin: session
proved_here: false
deps: []
justified_by: []
forward_refs: [def-countable-choice, rem-choice-ledger, rem-choice-strengths]
aliases: [rem-bct-choice-strength]
landmark: true
short: "complete metric BCT is equivalent to DC"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Baire category theorem (Wikipedia), section: relation to the axiom of choice"
      url: "https://en.wikipedia.org/wiki/Baire_category_theorem"
    - title: "C. E. Blair, The Baire category theorem implies the principle of dependent choices, Bull. Acad. Polon. Sci. 25 (1977), 933-934"
      url: "https://en.wikipedia.org/wiki/Baire_category_theorem"
    - title: "J. Fossy and M. Morillon, The Baire category property and some notions of compactness, J. London Math. Soc. 57 (1998), 1-19"
      url: "https://www.cambridge.org/core/journals/journal-of-the-london-mathematical-society/article/abs/baire-category-property-and-some-notions-of-compactness/5C6265B552C8D43D21F16C60802D6109"
    - title: "A. Blass, Injectivity, projectivity, and the axiom of choice, Trans. Amer. Math. Soc. 255 (1979), 31-59"
      url: "https://doi.org/10.1090/S0002-9947-1979-0542870-6"
pipeline_run: null
---

## Statement

Over ZF, "the Baire category theorem" is not one statement. Naming the versions
by the class of spaces they quantify over:

**(BCT-metric)** In a complete metric space, a countable intersection of dense
open sets is dense. **Over ZF this is equivalent to the axiom of dependent
choice (DC).** The implication from DC is the usual proof, in which each nested
ball is chosen in terms of the previous one; the converse is Blair (1977).

**(BCT-separable)** The same statement restricted to **separable** complete
metric spaces **is a theorem of ZF**, with no choice principle at all: a fixed
countable dense set removes every choice from the construction.

**(BCT-compact-Hausdorff)** Every compact Hausdorff space is a Baire space. Over
ZF this is equivalent to the principle "every tree has a subtree all of whose
levels are finite", introduced by Blass (1979) and known as **dependent multiple
choice (DMC)**. The equivalence is Fossy and Morillon (1998).

**Separating them.** DMC is strictly weaker than each of DC and the axiom of
multiple choice, and DC and DMC are not equivalent, so BCT-metric and
BCT-compact-Hausdorff are genuinely different assumptions. The Boolean prime
ideal theorem does not imply DMC, so BPI does not give BCT-compact-Hausdorff
either.

**If ZF is consistent**, none of these principles is a theorem of ZF except
BCT-separable, and the non-implications listed are witnessed by models.

## Remarks

- **Not proved in this library.** No direction of any of these equivalences is
  proved here, and the models witnessing the non-implications are symmetric
  extensions and permutation models that this library does not build.

- **What would prove it.** For the equivalences: a careful ZF development of
  metric and compact Hausdorff spaces together with the combinatorics of trees.
  For the separations: permutation models with the Jech-Sochor or Pincus transfer
  theorems, that is, the same track as [[rem-cohen-forcing-ac-independent]].

- **Why it matters here.** Every use of the Baire category theorem in this
  library must name its version and pay for it. It is easy to write "by Baire" and
  quietly consume DC where the separable case would have been free, and easy to
  claim the locally compact or compact Hausdorff case is choice-free when it is
  not. The accounting pages [[rem-choice-ledger]] and [[rem-choice-strengths]]
  record principles by name for exactly this reason, and
  [[def-countable-choice]] is where the weakest of the relevant principles is
  defined. What is **not** affected is availability: nothing about the Baire
  category theorem needs measure theory or functional analysis, so the theorem is
  in scope; only its cost is recorded here.

- **A variant not asserted here.** The locally compact regular form of the
  theorem is sometimes attributed to Bacsich (1972) with the same equivalence.
  That attribution was not confirmed against a primary source, so this item does
  not state it.

- **Conditional discipline.** The unprovability and non-implication clauses are
  relative to the consistency of ZF. The two equivalences are ordinary ZF
  theorems and need no consistency hypothesis; they are on this page because
  their proofs, not their status, are out of reach here.
