---
id: def-hh-hopf-ideal-and-hopf-subalgebra
kind: definition
title: "Hopf ideals and Hopf subalgebras"
status: published
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 3
deps:
  - def-hh-hopf-algebra-and-antipode
  - def-hh-bialgebra-and-bialgebra-map
  - def-hh-subcoalgebras-coideals-and-quotient-coalgebras
  - def-left-right-and-two-sided-ideal
  - lem-hh-tensor-injections-quotients-and-kernels-over-a-field
  - def-axiom-of-choice
assumptions: [AC]
axiom_use: "The structural-map definition is choice-free. AC is used only for the equivalent closure shorthand, through the tensor-injection lemma that embeds K⊗K in H⊗H and identifies the usual coideal tensor sum."
justified_by:
  - thm-hh-hopf-quotient-kernel-and-tensor-product-constructions
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Andrew Baker, Hopf algebras over fields: an introduction, §§2.22–2.25"
      url: "https://www.maths.gla.ac.uk/~ajb/SMSTC/HopfAlgebrasNotes.pdf"
---

## Definition

Let $k$ be a field and let $H=(H,m,u,\Delta,\varepsilon,S)$ be a Hopf $k$-algebra as in [[def-hh-hopf-algebra-and-antipode]], with $S$ satisfying both convolution antipode equations. A **subbialgebra** of $H$ is a $k$-subspace $K\subseteq H$ equipped with a bialgebra structure as in [[def-hh-bialgebra-and-bialgebra-map]] for which the inclusion $K\hookrightarrow H$ is a bialgebra map. A **Hopf subalgebra** is a subbialgebra $K$ with $S(K)\subseteq K$. Under AC, meaning every family of nonempty sets has a choice function ([[def-axiom-of-choice]]), the tensor-injection lemma [[lem-hh-tensor-injections-quotients-and-kernels-over-a-field]] identifies $K\otimes K$ with its image in $H\otimes H$; in that shorthand, the subbialgebra condition says exactly that $K$ is a unital subalgebra, $\Delta_H(K)\subseteq K\otimes K$, and the counit is restricted from $H$.

A **Hopf ideal** is a two-sided ideal in the sense of [[def-left-right-and-two-sided-ideal]], $I\trianglelefteq H$, satisfying $\varepsilon_H(I)=0$, $S(I)\subseteq I$, and the coideal condition from [[def-hh-subcoalgebras-coideals-and-quotient-coalgebras]]: $\Delta_H(I)\subseteq\operatorname{im}(I\otimes H\to H\otimes H)+\operatorname{im}(H\otimes I\to H\otimes H)$. Under AC, the tensor-injection lemma identifies these tensor products with subspaces of $H\otimes H$, giving the usual shorthand $\Delta_H(I)\subseteq I\otimes H+H\otimes I$. The two-sided ideal condition gives the unital quotient algebra $H/I$; $\varepsilon_H(I)=0$ makes its counit descend, and the remaining conditions are precisely those needed for the coproduct and antipode to descend. A subbialgebra is not called a Hopf subalgebra unless the antipode restricts to it.
