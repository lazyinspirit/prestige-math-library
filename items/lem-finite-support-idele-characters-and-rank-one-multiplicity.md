---
id: lem-finite-support-idele-characters-and-rank-one-multiplicity
kind: lemma
title: Finite-support idele characters and rank-one multiplicity one
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - thm-weak-approximation-for-inequivalent-absolute-values
  - def-idele-group-of-a-global-field
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: J. S. Milne, Class Field Theory
      url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
      locator: Chapter V, Section 4, idelic restricted-product topology; rank-one argument reconstructed below
verification: {}
---

## Statement

Let $F$ be a GIVEN global field with its actual places, pairwise inequivalent nontrivial absolute values, completions $F_v$ containing $F$ densely, and idele group $\mathbb A_F^\times$ with the restricted-product topology. Let $\chi,\chi':\mathbb A_F^\times\to\mathbb C^\times$ be continuous characters trivial on the diagonal $F^\times$. If their restrictions to $F_v^\times$ agree for all but finitely many places, then $\chi=\chi'$. In particular, two rank-one automorphic characters with equal unramified local parameters outside a finite set are equal. The assertion is at rank one; no higher-rank multiplicity-one or converse theorem is claimed.

## Facts & Assumptions

**Given:** The actual field, its indexed inequivalent absolute values, the dense completions, the topological idele group, and the two continuous characters.

[F1] Finitely many pairwise inequivalent nontrivial absolute values satisfy weak approximation for targets in $F$, by finite constructions without Choice. [[thm-weak-approximation-for-inequivalent-absolute-values]]

[F2] The ideles are the restricted product of the local multiplicative groups with respect to the local unit groups, with the displayed restricted-product topology. [[def-idele-group-of-a-global-field]]

## Proof

1.1 Let $\psi=\chi/\chi'$, and choose the given finite exceptional set $S$. For $v\in S$, write $\psi_v:F_v^\times\to\mathbb C^\times$ for the restriction to the idele supported at $v$. Define $P:\prod_{v\in S}F_v^\times\to\mathbb C^\times$ by $P((x_v))=\prod_{v\in S}\psi_v(x_v)$. It is continuous, and for every $a\in F^\times$, $P((a)_v)=\psi(a)=1$: the remaining local restrictions are trivial and continuity reduces the diagonal idele to finite-support truncations. [F2, given, construct, algebra]

2.1 If $S$ is empty the product is a singleton. Otherwise the diagonal $F^\times$ is dense in $\prod_{v\in S}F_v^\times$. For one target tuple choose, at each of the finitely many places, a nearby nonzero target in $F$ using density of the GIVEN completion. Apply [F1] to these finitely many targets and sufficiently small errors. The resulting element is nonzero and lies in the chosen product neighborhood. Thus continuity and step 1.1 imply $P=1$ throughout the product. [F1, step 1.1, given, construct, algebra]

3.1 Taking a tuple supported at one $v\in S$ shows $\psi_v=1$ there; by hypothesis this also holds outside $S$. Finite-support ideles are dense in the restricted product: for one idele and one basic neighborhood, keep its components at the finitely many exceptional places and replace all other components by $1$. Hence continuity gives $\psi=1$ everywhere and $\chi=\chi'$. The empty $S$ case uses the same density argument. [F2, step 2.1, given, algebra]

4.1 For rank-one automorphic characters, an unramified local character is trivial on the local unit group and is determined by its value at a uniformizer. Equality of unramified parameters outside a finite set therefore gives the local equality required above. No higher-rank assertion follows from this reduction. [step 3.1, given, algebra] ∎

## Source notes

The finite-coordinate density and weak-approximation argument is written out locally. The global field, absolute values, completions and characters are given inputs; no independent construction of a family of completions is asserted. The missing higher-rank strong multiplicity-one theorem remains open as a local authoring obligation.
