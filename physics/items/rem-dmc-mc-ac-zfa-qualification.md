---
id: rem-dmc-mc-ac-zfa-qualification
kind: remark
title: "DMC, Multiple Choice, and AC qualifications"
status: published
origin: pipeline
deps: [def-dependent-multiple-choice-finite-level-tree, thm-dependent-choice-and-finite-multiple-selections, thm-multiple-choice-equivalent-to-choice-in-zf, def-dependent-choice, def-axiom-of-choice, def-multiple-and-dependent-multiple-choice]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Marianne Morillon, Axiom of Choice"
      url: "https://lim.univ-reunion.fr/staff/mar/mem-HDR.pdf"
      locator: "Section 2, pp. 5-8"
verification:
  repair: research/recorded-retirement-2026-10-06/receipts/rem-dmc-mc-ac-zfa-qualification.json
---

## Statement

DC implies DMC. DMC together with finite-selection countable choice implies DC.
In $\mathrm{ZF}$, Multiple Choice is equivalent to AC, and the cited proof is specifically over $\mathrm{ZF}$. No strict DMC-versus-DC claim is
made over $\mathrm{ZF}$.

## Remarks

- **The implication and the equivalence.** [[thm-dependent-choice-and-finite-multiple-selections]]
  proves over $\mathrm{ZF}$ that
  $\mathrm{DC} \leftrightarrow (\mathrm{DMC} \wedge \mathrm{AC}_{\omega,\mathrm{fin}})$,
  which gives both the implication DC to DMC and the converse implication from
  DMC plus finite-selection countable choice; the principles are those of
  [[def-dependent-choice]] and [[def-dependent-multiple-choice-finite-level-tree]].

- **Multiple choice in ZF.** [[thm-multiple-choice-equivalent-to-choice-in-zf]]
  proves $\mathrm{MC} \leftrightarrow \mathrm{AC}$ in $\mathrm{ZF}$
  ([[def-multiple-and-dependent-multiple-choice]], [[def-axiom-of-choice]]). That
  is a theorem about $\mathrm{ZF}$; it says nothing about $\mathrm{ZFA}$, where
  the same sentence is not available at this point in the library.

- **The base theory matters.** The two local implications above are stated
  over ZF. A statement proved over ZF is not thereby proved over ZFA; any
  comparison over a theory with atoms needs its own proof and hypotheses.

- **Consumers.** DC implies DMC by the cited local theorem. The strictness of
  that implication is not asserted here.
