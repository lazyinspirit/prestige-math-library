---
id: rem-lax-milgram-owned-by-pde
kind: remark
title: Lax–Milgram is owned by the PDE track
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-riesz-representation-for-hilbert-space, def-bounded-linear-operator, def-countable-choice]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, Theorem 5.35, p.236"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
---

## Remark

The seam contract of this track assigns the Lax–Milgram theorem and the vocabulary of bounded and coercive sesquilinear forms to the partial-differential-equations development, and this page does not state them. What this page supplies is [[thm-riesz-representation-for-hilbert-space]], which the PDE track may cite, together with the bounded-operator vocabulary of [[def-bounded-linear-operator]]: on a real or complex Hilbert space every bounded linear functional is represented by a vector, and that is the ingredient from which a later page proves Lax–Milgram after defining its own forms, boundedness, coercivity and continuity hypotheses.

Nothing on the present page assumes coercivity, symmetry or continuity of a sesquilinear form, and no representation of a form by an operator is asserted. Assuming the Axiom of Countable Choice, the Riesz theorem available here carries that hypothesis, and any later consumer that invokes it inherits the same assumption ([[def-countable-choice]]).
