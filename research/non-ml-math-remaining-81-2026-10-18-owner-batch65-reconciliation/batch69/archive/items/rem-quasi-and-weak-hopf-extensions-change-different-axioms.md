---
id: rem-quasi-and-weak-hopf-extensions-change-different-axioms
kind: remark
title: "Quasi-Hopf and weak-Hopf extensions change different axioms"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-quasi-bialgebra-and-quasi-hopf-algebra, def-weak-bialgebra-and-weak-hopf-algebra]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "Sections 5.12–5.13 and 7.23, printed pp. 110–114 and 186–189."
    - title: "P. Schauenburg, Weak Hopf Algebras and Quantum Groupoids"
      url: "https://www.impan.pl/shop/publication/transaction/download/product/86703"
      locator: "Sections 4–5, printed pp. 176–180."
verification:
  precheck: n/a
---

## Remark

The two extensions alter different parts of the bialgebra axioms. A quasi-bialgebra keeps $\Delta$ and $\varepsilon$ unital algebra maps and replaces strict coassociativity by conjugation with $\Phi$. A weak bialgebra keeps strict coassociativity and multiplicativity of $\Delta$, but weakens the unit and counit identities; its module tensor unit is the target base $H_t$. Thus the reassociator and the source/target base data are distinct structures. They are not mutually exclusive classes: an ordinary Hopf algebra with $\Phi=1$ is a special case of both. The companion examples exhibit a nontrivial associator with the ordinary unit and counit, and a nontrivial weak base with strict coassociativity.
