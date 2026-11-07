---
id: def-adele-ring-of-a-global-field
kind: definition
title: "Adele ring of a global field with restricted-product topology"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-global-field
  - def-place-of-a-global-field
  - def-completion-of-a-global-field-at-a-place
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-axiom-of-choice
  - def-countable-choice
dependency_level: 4
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: >-
  AC supplies the place-classification interface; AC_omega supplies metric
  completions. The restricted-product construction itself is choice-free once
  the places, completions, and valuation rings are given.
sources:
  references:
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach"
      url: "https://wstein.org/books/ant/ant.pdf"
      locator: "Chapter 18, §18.3, Definition 18.3.1, printed p.186."
    - title: "Andrew V. Sutherland, MIT 18.785 Number Theory I lecture notes, Fall 2021"
      url: "https://math.mit.edu/classes/18.785/2021fa/LectureNotes.pdf"
      locator: "Lecture 25, Definition 25.7 and restricted-product topology, pp.4–5."
verification:
  precheck: n/a

---

## Definition

Assume the Axiom of Choice and the Axiom of Countable Choice. Let $F$ be a global field, let $V_f(F)$ be its set of finite places, let $F_v$ be the completion at a place $v$, and for each $v\in V_f(F)$ let $\mathcal O_v$ be the valuation ring of $F_v$. The **adele ring** of $F$ is the set
$$
\mathbb A_F=\left\{(x_v)_v\in\prod_v F_v:\ x_v\in\mathcal O_v\text{ for all but finitely many }v\in V_f(F)\right\}.
$$
It has the restricted-product topology whose basic open sets are products $\prod_v U_v$, where each $U_v$ is open in $F_v$ and $U_v=\mathcal O_v$ for all but finitely many finite places; archimedean factors are unrestricted. Addition and multiplication are coordinatewise.

## Definition references

[[def-global-field|Global-field branches and exact constant field]]

[[def-place-of-a-global-field|Place indexing and finite-place normalization]]

[[def-completion-of-a-global-field-at-a-place|Metric completion and dense embedding]]

[[def-local-field-valuation-ring-uniformizer-and-residue-field|Finite-place valuation ring]]

[[def-axiom-of-choice|Axiom of Choice]]

[[def-countable-choice|Axiom of Countable Choice]]

[William A. Stein, §18.3 Definition 18.3.1](https://wstein.org/books/ant/ant.pdf)

[MIT 18.785 Lecture 25, Definition 25.7](https://math.mit.edu/classes/18.785/2021fa/LectureNotes.pdf)
