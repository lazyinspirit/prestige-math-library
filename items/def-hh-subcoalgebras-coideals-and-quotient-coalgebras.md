---
id: def-hh-subcoalgebras-coideals-and-quotient-coalgebras
kind: definition
title: "Subcoalgebras, coideals, and quotient coalgebras"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 1
deps: [def-hh-coalgebra-and-coalgebra-map, def-hh-scalar-and-tensor-conventions, prop-functoriality-of-module-tensor-products, lem-hh-tensor-injections-quotients-and-kernels-over-a-field, def-axiom-of-choice, def-quotient-module, thm-quotient-module-laws]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: "The familiar identification of tensor products of subspaces with subspaces of the ambient tensor product uses AC through [[lem-hh-tensor-injections-quotients-and-kernels-over-a-field]]. The image-based definitions below remain meaningful without that identification."
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "UCSD Math 207A, Hopf Algebras lecture notes, Spring 2020"
      url: "https://mathweb.ucsd.edu/~drogalsk/207a-s20-lecturenotes.pdf"
      locator: "Chapter 1, Definition 1.19 and Lemma 1.20, printed pp. 15–16."
    - title: "William Chin, A Brief Introduction to Coalgebra Representation Theory"
      url: "https://condor.depaul.edu/~wchin/crt.pdf"
      locator: "§2, coalgebra, subcoalgebra and coideal definitions, printed pp. 2–3."
---

## Definition

Let $(C,\Delta_C,\varepsilon_C)$ be a coalgebra. For every subspace $U\subseteq C$, write $j_U:U\hookrightarrow C$ for its inclusion and interpret the image of $U\otimes C$ or $C\otimes U$ in $C\otimes C$ through the tensor maps induced by inclusion.

A **subcoalgebra** of $C$ is a subspace $D\subseteq C$ equipped with linear maps $\Delta_D:D\to D\otimes D$ and $\varepsilon_D:D\to k$ satisfying the coalgebra axioms, such that the inclusion $j_D$ is a coalgebra map. Under AC, [[lem-hh-tensor-injections-quotients-and-kernels-over-a-field]] makes $j_D\otimes j_D$ and its iterated tensor powers injective. Hence the equivalent image criterion is that $\Delta_C(D)$ lie in the image of $D\otimes D$ and that the counit on $D$ be the restriction of $\varepsilon_C$: the inverse of $j_D\otimes j_D$ on its image gives the unique linear $\Delta_D$, and composing its axioms with the injective tensor powers reduces them to the coalgebra axioms on $C$.

A **coideal** is a subspace $I\subseteq C$ satisfying
$$\varepsilon_C(I)=0,\qquad \Delta_C(I)\subseteq \operatorname{im}(I\otimes C\to C\otimes C)+\operatorname{im}(C\otimes I\to C\otimes C).$$
Under AC the two tensor maps are injective, so the second condition is written in the standard shorthand $\Delta_C(I)\subseteq I\otimes C+C\otimes I$. Both conditions are part of the definition.

A **quotient coalgebra by $I$** means a coalgebra structure on the vector-space quotient $C/I$ for which the canonical projection $q:C\to C/I$ is a coalgebra map. The formula for that structure is not part of this definition.
