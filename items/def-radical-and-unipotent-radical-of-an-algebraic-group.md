---
id: def-radical-and-unipotent-radical-of-an-algebraic-group
kind: definition
title: Radical, unipotent radical, semisimple and reductive algebraic groups
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 5
deps: [def-axiom-of-choice, def-group-scheme-over-a-field, def-derived-subgroup-and-solvable-algebraic-group, def-unipotent-algebraic-group, def-rational-representation-and-comodule-of-an-affine-group-scheme, def-borel-subgroup-and-maximal-torus]
justified_by: [thm-solvable-subgroups-and-the-radical-as-borel-intersection, lem-reductive-center-radical-and-semisimple-quotient]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 6 (6.44)-(6.47), printed pp. 135-137 (geometric definitions of radical, unipotent radical, semisimple, reductive and pseudo-reductive); Ch. 19 (19.1), (19.9), (19.20)-(19.22)"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $k$ be a field and let $G$ be a smooth connected affine algebraic group of finite type over $k$ ([[def-group-scheme-over-a-field]]). Its **radical** $R(G)$ is the largest smooth connected normal solvable closed subgroup scheme, and its **unipotent radical** $R_u(G)$ is the largest smooth connected normal unipotent closed subgroup scheme ([[def-derived-subgroup-and-solvable-algebraic-group]], [[def-unipotent-algebraic-group]]). These are subgroup varieties: arbitrary infinitesimal normal subgroups are not included in the maximization. One has $R_u(G)\subseteq R(G)$, because unipotent groups are solvable.

The group is **semisimple** if $R(G_{k^{\mathrm a}})=1$, and **reductive** if $R_u(G_{k^{\mathrm a}})=1$. The smoothness, connectedness and affineness requirements are part of these terms. Over a perfect field, and in particular an algebraically closed field, reductivity is equivalent to $R_u(G)=1$. Over an imperfect field the condition $R_u(G)=1$ alone is weaker; such a smooth connected affine group is called **pseudo-reductive**, and pseudo-reductivity does not imply reductivity.

Assume the Axiom of Choice for the following field-extension and rank assertions and their cited geometric suppliers ([[def-axiom-of-choice]]). Formation of both radicals commutes with separable algebraic field extensions (Milne Propositions 19.1 and 19.9). Consequently, if $k$ is perfect, $R_u(G)_{k^{\mathrm a}}=R_u(G_{k^{\mathrm a}})$ and the analogous equality holds for $R(G)$. These equalities are not asserted for general purely inseparable extensions. The geometric definition of reductivity is retained precisely to handle that distinction.

The **rank** of $G$ is the dimension of a maximal torus ([[def-borel-subgroup-and-maximal-torus]]), and its **semisimple rank** here is the rank of the smooth connected affine quotient $G/R(G)$. Maximal tori exist, remain maximal under field extension, and are geometrically conjugate, so their dimensions are independent of the choice. If $k$ is perfect, $G/R(G)$ is semisimple; this also holds over every field when $G$ is reductive, because then $R(G)$ is the largest central torus and commutes with every base extension ([[lem-reductive-center-radical-and-semisimple-quotient]]). No assertion that $G/R(G)$ is geometrically semisimple for every nonreductive $G$ over an imperfect field is made.

The largest-subgroup property gives uniqueness. Existence follows by taking products of smooth connected normal subgroups with the relevant property: such products are again smooth connected normal, and remain solvable, respectively unipotent; a strict increase of a connected subgroup variety increases dimension, so a finite product attains the maximum dimension and contains every such subgroup. Over an algebraically closed field the radical is also the reduced identity component of the intersection of all Borel subgroups, as proved in [[thm-solvable-subgroups-and-the-radical-as-borel-intersection]]. All representation-theoretic statements below concern affine groups, so the rational-representation/comodule dictionary applies ([[def-rational-representation-and-comodule-of-an-affine-group-scheme]]).
