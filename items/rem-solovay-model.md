---
id: rem-solovay-model
kind: remark
title: "Solovay's model: ZF + DC with every set of reals measurable"
status: draft
origin: session
proved_here: false
deps: [rem-cohen-forcing-ac-independent]
justified_by: []
forward_refs: [def-axiom-of-choice, rem-choice-ledger, thm-zorn]
aliases: []
landmark: true
short: "from an inaccessible: all sets of reals Lebesgue measurable"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "R. M. Solovay, A model of set-theory in which every set of reals is Lebesgue measurable, Ann. of Math. 92 (1970), 1-56"
      url: "https://en.wikipedia.org/wiki/Solovay_model"
    - title: "S. Shelah, Can you take Solovay's inaccessible away?, Israel J. Math. 48 (1984), 1-47"
      url: "https://doi.org/10.1007/BF02760522"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
pipeline_run: null
---

## Statement

**If ZFC together with "there exists an inaccessible cardinal" is consistent,
then so is the theory**

> ZF + DC + "every set of reals is Lebesgue measurable" + "every set of reals has
> the Baire property" + "every uncountable set of reals contains a perfect set",

where DC is the axiom of dependent choice.

Solovay (1970) builds the model by Levy-collapsing an inaccessible cardinal
$\kappa$ to $\omega_1$ and then passing to the inner model $L(\mathbb{R})$ of the
extension, or equivalently to the sets hereditarily definable from a real and an
ordinal. Every set of reals in that model is definable from a real and an
ordinal, and each such set is shown to be measurable by a homogeneity argument
about the collapse.

**What this rules out.** Every classical pathology of the real line that is
proved by well-ordering $\mathbb{R}$ is therefore **not** available from ZF + DC
alone, relative to the stated large-cardinal hypothesis: a Vitali set, a
Bernstein set, a Hamel basis for $\mathbb{R}$ over $\mathbb{Q}$ and with it a
discontinuous additive solution of Cauchy's functional equation, and the
Banach-Tarski decomposition.

## Remarks

- **Not proved in this library.** Neither the Levy collapse nor the measurability
  argument is developed here, and no measure theory is developed here either, so
  even the statement "Lebesgue measurable" is being borrowed.

- **What would prove it.** Three tracks at once: forcing (the Levy collapse and
  its homogeneity), large cardinals (the inaccessible, which
  [[rem-shelah-inaccessible-and-the-baire-property]] shows is genuinely required
  for the measurability clause), and Lebesgue measure theory. None of the three
  exists in this library.

- **Why it matters here.** It is the sharpest available answer to "how much
  choice does the pathology of $\mathbb{R}$ actually cost". DC is enough for
  essentially all of classical analysis of sequences and limits, and this model
  says that DC alone still produces none of the non-measurable objects. So
  whenever a later page produces such an object through [[thm-zorn]] or a
  well-ordering, the use of full [[def-axiom-of-choice]] is not laziness: the
  ledger in [[rem-choice-ledger]] can record it as irreducible.

- **Conditional discipline.** The hypothesis here is stronger than mere
  consistency of ZF: it is the consistency of ZFC plus an inaccessible cardinal,
  which is strictly stronger and is not provable from Con(ZFC). That extra
  hypothesis is needed for the measurability clause and, by Shelah, not for the
  Baire-property clause.
