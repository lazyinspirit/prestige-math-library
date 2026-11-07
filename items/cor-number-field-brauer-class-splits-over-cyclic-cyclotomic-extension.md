---
id: cor-number-field-brauer-class-splits-over-cyclic-cyclotomic-extension
kind: corollary
title: "Every number-field Brauer class splits over a cyclic cyclotomic extension"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 13
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-number-field-brauer-classes-have-finite-local-support
  - thm-local-brauer-invariant-for-finite-residue-local-field
  - lem-local-invariant-restriction-scaling
  - lem-finite-galois-obstruction-brauer-cohomology-comparison
  - lem-cyclic-cyclotomic-extension-with-prescribed-local-degree-divisibility
  - lem-number-field-brauer-localization-is-injective
  - thm-fundamental-theorem-of-algebra-minimum-modulus-proof
  - lem-central-division-algebra-separable-maximal-subfield
  - lem-finite-density-and-central-simple-base-change
justified_by: []
proof_strategy: direct
axiom_use: "AC supplies the common cyclotomic field/completion interfaces and implies the DC used in local restriction scaling. No global invariant-sum reciprocity or BHN exactness is used."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Chapter VII §7, Lemma 7.3 and its cyclic cyclotomic splitting consequence, printed pp.219–221; deduction here uses the separately proved finite-support and localization-injectivity interfaces."
verification: {}
---

## Statement

Assume the Axiom of Choice. For every number field $K$ and every
finite-dimensional central simple $K$-algebra $A$, there exist an integer
$N\ge1$ and a finite cyclic extension $L/K$ such that $L\subseteq K(\mu_N)$,
$L$ is totally complex, and $A\otimes_KL$ is a matrix algebra over $L$.
Equivalently, every algebraic Brauer class of $K$ is split by such a cyclic
cyclotomic extension.

## Statement references

[J. S. Milne, *Class Field Theory*, Chapter VII §7](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

## Facts & Assumptions

**Given:** AC, the number field $K$, and the central simple algebra $A$ in the Statement.

[F1] Each number-field algebraic Brauer class is zero locally outside a finite set of places. [[thm-number-field-brauer-classes-have-finite-local-support]]

[F2] The finite-place normalized invariant is an isomorphism from the algebraic Brauer group of a finite-residue local field to $\mathbb Q/\mathbb Z$. [[thm-local-brauer-invariant-for-finite-residue-local-field]]

[F3] Under AC and DC, restriction along a finite separable local extension multiplies the normalized invariant by its degree. The finite/continuous comparison commutes with scalar extension and has the same crossed-product normalization, so this formula applies to algebraic Brauer classes. [[lem-local-invariant-restriction-scaling]] [[lem-finite-galois-obstruction-brauer-cohomology-comparison]]

[F4] For any finite set $S$ of finite places and any positive integer $m$, there is a totally complex cyclic $L/K$ inside $K(\mu_N)$ with $m\mid[L_w:K_v]$ for every $v\in S$ and $w\mid v$. [[lem-cyclic-cyclotomic-extension-with-prescribed-local-degree-divisibility]]

[F5] Under AC, a number-field algebraic Brauer class that is zero at every completion is zero over the field. [[lem-number-field-brauer-localization-is-injective]]

[F6] Every nonconstant complex polynomial has a complex root, hence splits by finite successive division. Every central simple algebra has a division representative and a finite Galois splitting field. [[thm-fundamental-theorem-of-algebra-minimum-modulus-proof]] [[lem-finite-density-and-central-simple-base-change]] [[lem-central-division-algebra-separable-maximal-subfield]]

[A1] AC implies CC and DC, as required for [F3]–[F5]. [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

## Proof

**Proof technique:** kill finitely many finite-place invariant denominators and use localization injectivity.

**Given:** The data above and $\alpha=[A]$.

1.1 By [F1], choose a finite set of places outside which $\alpha_v=0$, and let $S$ be its finite-place subset. For each $v\in S$, [F2] writes its invariant as $r_v/n_v\bmod\mathbb Z$ with $n_v\ge1$. Let $m$ be the product of these finitely many positive denominators, taking $m=1$ if $S$ is empty. Then $m\operatorname{inv}_v(\alpha_v)=0$ at every $v\in S$. These are finite choices, all covered by the stated AC. [F1, F2, given, choose, construct]

2.1 Apply [F4] to $S,m$ and obtain $N,L$ with the stated cyclic, cyclotomic and total-complexity properties. For every finite place $w$ of $L$ above $v\in S$, [F3,A1] gives $\operatorname{inv}_w(\alpha_{L_w})=[L_w:K_v]\operatorname{inv}_v(\alpha_v)=0$ because $m$ divides the local degree. Hence $\alpha_{L_w}=0$ by [F2]. At a finite place above $v\notin S$, $\alpha_v=0$ already, so its scalar extension is zero as well. [A1, F2, F3, F4, step 1.1, construct, algebra]

3.1 Every archimedean completion of $L$ is $\mathbb C$ since $L$ is totally complex. Its algebraic Brauer group is zero directly from [F6]: a finite Galois splitting field of a complex central simple algebra can only be $\mathbb C$, because its defining irreducible polynomials are linear by the complex root theorem. Thus it is already a matrix algebra. Consequently $\alpha_L$ is zero at every archimedean completion as well as at the finite completions in step 2.1. No arbitrary-field absolute Brauer/cohomology comparison is needed for this complex assertion. [F6, step 2.1, algebra]

4.1 Apply [F5] over the number field $L$. All its localizations are zero by steps 2.1 and 3.1, so $\alpha_L=0$. A zero similarity class is a matrix algebra by the finite algebraic comparison in [F3]. Thus $A\otimes_KL$ is split, while $L$ has all the properties supplied in step 2.1. This also includes a split original algebra, the zero class, and an empty exceptional finite-place set. [F3, F5, step 2.1, step 3.1, algebra] ∎
