---
id: rem-dmc-mc-ac-zfa-qualification
kind: remark
title: "DMC, Multiple Choice, and AC qualifications"
status: draft
origin: pipeline
deps: [def-dependent-multiple-choice-finite-level-tree, thm-dependent-choice-and-finite-multiple-selections, thm-multiple-choice-equivalent-to-choice-in-zf, cor-dmc-is-not-provable-in-zf, def-dependent-choice, def-axiom-of-choice, def-multiple-and-dependent-multiple-choice]
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
---

## Statement

DC implies DMC. DMC together with finite-selection countable choice implies DC.
In $\mathrm{ZF}$, Multiple Choice is equivalent to AC, but that equivalence must
not be imported into $\mathrm{ZFA}$; the cited permutation-model strictness
results are $\mathrm{ZFA}$ qualifications only. No strict DMC-versus-DC claim is
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

- **The ZFA qualification.** The separations known for DMC are obtained in
  permutation models with atoms; they are therefore theorems about
  $\mathrm{ZFA}$ and are not transferred to $\mathrm{ZF}$ by this item. In
  particular the strictness of DMC below DC over $\mathrm{ZF}$ is not asserted,
  and the only ZF-side nonprovability recorded here is
  [[cor-dmc-is-not-provable-in-zf]], conditional on
  $\operatorname{Con}(\mathrm{ZF})$.

- **Consumers.** Any use of "DMC is weaker than DC" must name the theory: the
  $\mathrm{ZFA}$ model supplies the separation there, while over $\mathrm{ZF}$
  the question is open, as recorded by the dated status item of this page.
