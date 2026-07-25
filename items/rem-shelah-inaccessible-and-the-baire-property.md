---
id: rem-shelah-inaccessible-and-the-baire-property
kind: remark
title: "Shelah 1984: the inaccessible is needed for measurability, not for the Baire property"
status: published
origin: session
proved_here: false
deps: [rem-solovay-model]
justified_by: []
forward_refs: [rem-choice-ledger]
aliases: []
landmark: false
short: "Con(ZF + DC + all sets Baire) from Con(ZF) alone"
verification:
  precheck: n/a
  sources_checked:
    date: 2026-07-26
    scope: citations
    by: session-audit
sources:
  scraped: []
  references:
    - title: "S. Shelah, Can you take Solovay's inaccessible away?, Israel J. Math. 48 (1984), 1-47"
      url: "https://doi.org/10.1007/BF02760522"
    - title: "Solovay model (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Solovay_model"
pipeline_run: null
---

## Statement

Shelah (1984) settles which half of [[rem-solovay-model]] really needs a large
cardinal.

**If ZF is consistent, then so is ZF + DC + "every set of reals has the Baire
property".** No inaccessible cardinal is required for this half.

**The measurability half is different.** If ZF + DC + "every set of reals is
Lebesgue measurable" is consistent, then so is ZFC + "there exists an inaccessible
cardinal". So the large-cardinal hypothesis in Solovay's theorem is not an
artefact of the proof: the two theories are equiconsistent, and the inaccessible
cannot be removed.

## Remarks

- **Not proved in this library.** Neither direction is proved here. The second
  direction in particular is a reverse-mathematical calculation about
  consistency strength, of a kind this library has no machinery for.

- **What would prove it.** For the first direction, an amalgamated Souslin
  forcing replacing the Levy collapse. For the second, the observation that if
  every set of reals is measurable then $\omega_1$ is inaccessible in $L[r]$ for
  every real $r$, which needs the fine structure of the constructible universe
  relativised to a real. Both belong to a forcing and inner-model track that this
  library does not contain.

- **Why it matters here.** It sharpens the reading of [[rem-solovay-model]] in a
  way that matters for how the library reports costs. "Every set of reals has the
  Baire property" is consistent with ZF + DC at no extra consistency cost at all,
  so any Baire-category pathology on $\mathbb{R}$ that this library later
  produces must be using more than DC. Measurability pathologies sit strictly
  higher. When [[rem-choice-ledger]] records what a theorem costs, this is the
  result that keeps the two cases apart.

- **Conditional discipline.** The first clause is relative to Con(ZF); the second
  is an implication between consistency statements and is not an assertion that
  an inaccessible cardinal exists.
