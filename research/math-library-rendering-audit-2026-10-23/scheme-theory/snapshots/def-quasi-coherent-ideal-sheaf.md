---
id: def-quasi-coherent-ideal-sheaf
kind: definition
title: "Quasi-coherent ideal sheaves"
status: published
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-axiom-of-choice, def-ideal-sheaf, def-affine-open-subscheme, def-associated-sheaf-module-affine-scheme, thm-associated-module-sheaf-exists]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Schemes, Section 7"
      url: "https://stacks.math.columbia.edu/tag/01I5"
---
## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]), inherited from the
associated-sheaf existence theorem [[thm-associated-module-sheaf-exists]].
An ideal sheaf $\mathcal I$ on $X$ is **quasi-coherent** if, for every affine
open $U=\operatorname{Spec}A$, there is an ideal $I\subseteq A$ such that
$\mathcal I|_U$ is the ideal sheaf associated to the $A$-module $I$.
