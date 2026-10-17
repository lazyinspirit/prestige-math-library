---
id: def-completed-product-measure
kind: definition
title: "The completed product measure"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-product-measure-on-sigma-finite-spaces, def-completion-of-a-measure-space, thm-completion-of-a-measure-space, def-countable-choice]
verification:
  audited: 2026-08-29
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Theorem 2.39"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Definition

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$(X,\mathcal A,\mu)$ and $(Y,\mathcal B,\nu)$ be sigma-finite measure spaces.
The **completed product measure** is the completion of the measure
$\mu \times \nu$ on $(X \times Y,\mathcal A \otimes \mathcal B)$:

$$\overline{\mu \times \nu}:=\text{the completion of }\mu \times \nu.$$

Its sigma-algebra consists of sets that differ from an
$(\mathcal A \otimes \mathcal B)$-measurable set by a subset of a
$(\mu \times \nu)$-null set, exactly as in
[[def-completion-of-a-measure-space]].
