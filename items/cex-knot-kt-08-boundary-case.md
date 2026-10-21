---
id: cex-knot-kt-08-boundary-case
kind: counterexample
title: "One Fox coloring prime does not classify knots"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [ alg-dihedral-fox-colorings, thm-dihedral-fox-colorings-terminate-and-are-correct, thm-quandle-colorings-are-reidemeister-invariant, thm-fundamental-quandle-and-adjoint-group-from-wirtinger, def-countable-choice ]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "Józef H. Przytycki, 3-coloring and other elementary invariants of knots, §2, arXiv:math/0608172, pp. 10–11"
      url: "https://arxiv.org/pdf/math/0608172"
dependency_level: 6
---

## Statement refuted

For a fixed odd prime $p$, equality of the Fox $p$-coloring counts of two
knots implies that the knots are ambient-isotopic.

## Statement references

[[alg-dihedral-fox-colorings]].

[[thm-quandle-colorings-are-reidemeister-invariant]].

[Przytycki, *3-coloring and other elementary invariants of knots*, §2](https://arxiv.org/pdf/math/0608172).

## Facts & Assumptions

**Given:** The unknot and trefoil diagrams and crossing equations in the Counterexample, and $\mathrm{AC}_\omega$.

[F1] [[alg-dihedral-fox-colorings]]: the Fox system has one variable per arc and one equation $2x_o-x_i-x_j=0$ per crossing.

[F2] [[thm-dihedral-fox-colorings-terminate-and-are-correct]]: the algorithm computes all solutions of that system.

[F3] [[thm-quandle-colorings-are-reidemeister-invariant]]: under $\mathrm{AC}_\omega$, the coloring counts are invariants of oriented knot type.

[F4] Under the stated choice hypothesis, the diagram quandle adjoint group is the positive-meridian Wirtinger group and hence the knot group. [[thm-fundamental-quandle-and-adjoint-group-from-wirtinger]]

[A1] [[def-countable-choice]]: $\mathrm{AC}_\omega$ supplies a choice function for every sequence of nonempty sets.

## Counterexample

Take $p=5$, the standard one-arc unknot diagram, and the standard
three-crossing trefoil diagram with crossing equations
$2a=b+c$, $2b=c+a$, and $2c=a+b$. Both diagrams have exactly five Fox
$5$-colorings, all constant. The knots are nevertheless non-equivalent:
their Fox $3$-coloring counts are $3$ and $9$, and those counts are ambient
isotopy invariants under $\mathrm{AC}_\omega$. Their groups also differ: the unknot group is infinite cyclic, while the trefoil group surjects onto the nonabelian group $S_3$.

1.1 By [F1], the trefoil system over $\mathbb F_5$ consists of the crossing equations in the Counterexample. Subtract the second equation $2b-c-a=0$ from the first $2a-b-c=0$. This gives $3(a-b)=0$; since $3^{-1}=2$ in $\mathbb F_5$, $a=b$. Substitution into the first equation then gives $c=a$. Conversely, every constant triple solves all three equations, so there are exactly five solutions, all constant. [F1, given, algebra]

1.2 The unknot diagram has one arc and no crossings, so its single arc may receive any of the five residues; it has exactly five colorings, all constant. By [F2] these are the algorithmic Fox counts. [F2, given, algebra]

2.1 Over $\mathbb F_3$, the same trefoil equations reduce to the single condition $a+b+c=0$, giving nine solutions, while the unknot has three. By [F3] and [A1] these counts are ambient-isotopy invariants; because they differ, the two knots are not ambient-isotopic. Thus they disprove the refuted statement at $p=5$. [A1, F3, step 1.1, step 1.2, algebra]

3.1 For completeness compute the groups in the same diagrams. The crossing-free diagram gives $G_U=\langle x\mid\ \rangle\cong\mathbb Z$. Label the trefoil meridians so its three crossing relations are $c=aba^{-1}$, $a=bcb^{-1}$ and $b=cac^{-1}$ (the last is the first crossing in the cyclic order used for its Fox system). Eliminating $c$ from the first two gives $aba=bab$; under that relation the third follows since $cac^{-1}=ab ab^{-1}a^{-1}=b$. Thus [F4] gives $G_T\cong\langle a,b\mid aba=bab\rangle$. The assignments $a\mapsto(12)$ and $b\mapsto(23)$ satisfy this relation, because both triple products equal $(13)$, and generate $S_3$. This defines a surjection onto a nonabelian group, so $G_T$ is nonabelian and cannot be isomorphic to $G_U$. This group computation supplements, and agrees with, the Fox-count distinction. [A1, F4, construct, algebra] ∎

## Sources

[[alg-dihedral-fox-colorings]].

[[thm-dihedral-fox-colorings-terminate-and-are-correct]].

[[thm-quandle-colorings-are-reidemeister-invariant]].

[[def-countable-choice]].

[Przytycki, *3-coloring and other elementary invariants of knots, §2](https://arxiv.org/pdf/math/0608172).
