---
id: def-reductive-and-linearly-reductive-over-c
kind: definition
title: Reductive and linearly reductive complex algebraic groups
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-rational-action-on-affine-variety, def-completely-reducible-representation, def-semisimple-module]
justified_by: [thm-complete-reducibility-and-reynolds-operator-for-complex-reductive-group]
sources:
  references:
    - title: "Michel Brion, Introduction to actions of algebraic groups, Les cours du CIRM 1 (2010), no. 1, 1-22"
      url: "https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1.pdf"
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
---

## Definition

Let $G$ be a complex affine algebraic group
([[def-rational-action-on-affine-variety]]).

**Unipotent subgroups.** A closed subgroup $U\subseteq G$ is **unipotent** if
every non-zero finite-dimensional rational $U$-module has a non-zero $U$-fixed
vector. This fixed-vector condition is the characterization used in Brion's
Example 1.22 (printed p. 8), and it is
the only form of the notion used in this pair. Equivalently, by the Lie–Kolchin
theorem, $U$ is unipotent in the standard sense that it admits no non-trivial
rational characters and all its elements are unipotent; this equivalence is
recorded as a sourced parenthetical companion to the definition (Brion Example
1.22 cites Lie–Kolchin) and is not used as a supplier anywhere in this pair, so
no edge to the higher-order unipotent/solvable page is introduced.

**Reductive and linearly reductive groups.** The group $G$ is **reductive** if
it has no non-trivial closed normal unipotent subgroup, and **linearly
reductive** if every finite-dimensional rational $G$-module is completely
reducible, i.e. a direct sum of simple $G$-submodules
([[def-completely-reducible-representation]], [[def-semisimple-module]]).

Over $\mathbf C$ the two notions coincide: every complex
reductive affine algebraic group is linearly reductive, and conversely a
linearly reductive $G$ has no non-trivial closed normal unipotent subgroup.
Both implications, together with the identity-component reduction below, are
proved in
[[thm-complete-reducibility-and-reynolds-operator-for-complex-reductive-group]];
this definition only records them for consumers of that theorem.

Both notions depend only on the identity component, in the sense that $G$ is
reductive if and only if $G^\circ$ is, and $G$ is linearly reductive if and
only if $G^\circ$ is; the passage from $G^\circ$ to the finite component group
for both notions is carried out in the same theorem.

## Remarks

- **Positive characteristic.** The equivalence is false in characteristic
  $p>0$ and must never be extended: $\mathrm{SL}_2$ in characteristic $2$ has
  non-semisimple representations, and a linear algebraic group over a field of
  characteristic $p\neq0$ is linearly reductive if and only if its identity
  component is of multiplicative type and $p$ does not divide the component
  index (Milne Definition 12.52, Example 12.55 and Remark 12.56). No statement
  in this pair is made over a field other than $\mathbf C$.
- **Scope.** No notion of geometric reductivity is introduced. The
  fixed-vector definition of unipotence is Brion's Example 1.22 convention;
  the standard-sense equivalence quoted above is not consumed by any proof in
  this pair, and the proofs that do need unipotence of a constructed subgroup
  re-establish it from the fixed-vector condition.
- **Choice.** This definition and its transcriptions of Brion's definitions
  use no Axiom of Choice.
