---
id: lem-negative-tangent-affine-torsor-has-at-most-one-complete-curve
kind: lemma
title: A negative tangent affine torsor has at most one complete curve
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-axiom-of-choice
  - lem-negative-tangent-sums-have-no-complete-curves-off-zero
  - thm-normalization-glues-integral-finite-type-curves
  - thm-regular-equals-smooth-over-perfect-field
  - thm-height-one-localisation-of-normal-noetherian-domain-is-dvr
  - thm-global-functions-proper-integral-variety
  - thm-nonconstant-morphism-proper-curves-finite-surjective
  - lem-degree-pullback-divisor-finite-morphism-curves
  - lem-composite-finite-proper-morphism-proper
  - cor-nilradical-as-intersection-of-primes
  - thm-nilradical-of-a-noetherian-ring-is-nilpotent
  - cor-dimension-preserved-by-integral-extensions
  - lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite
  - thm-proper-ideal-contained-in-maximal-ideal
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Hans Grauert, Mordells Vermutung, §2(2), printed p. 138; finite-flat fibre-product reconstruction"
      url: https://numdam.org/item/PMIHES_1965__25__131_0.pdf
    - title: "P. Samuel, Lectures On Old And New Results On Algebraic Curves, Chapter III §2(B), printed pp. 66–67"
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr36.pdf
verification: {}
---

## Statement

Assume AC. Let $k$ be algebraically closed and $C/k$ smooth proper integral
of genus at least two. Let $n\ge1$, let $E=T_C^{\oplus n}$, and let
$G\to C$ be an affine torsor under $E$: on an open cover it is identified
with $E$, with transitions given by translation by regular sections of $E$.
Thus the difference of two points in the same fibre is a well-defined vector
of $E$, varying regularly. If $A\subseteq G$ is an integral proper closed
curve, then $A\to C$ is finite surjective and every closed fibre has exactly
one point. If $B$ is another such curve, $A$ and $B$ have the same reduced
closed subset in $G$. No assertion that $A\to C$ is a section is made in
positive characteristic.

## Facts & Assumptions

**Given:** AC and the field, curve, torsor and proper closed curves of the
Statement.

[A1] AC is assumed. [[def-axiom-of-choice]]

[F1] Every proper integral curve mapping to $E$ with nonconstant projection
to $C$ has image in the zero section.
[[lem-negative-tangent-sums-have-no-complete-curves-off-zero]]

[F2] A proper integral curve has finite birational normalization; normal
one-dimensional local rings are DVRs, so over $k$ this normalization is a
smooth proper integral curve.
[[thm-normalization-glues-integral-finite-type-curves]]
[[thm-height-one-localisation-of-normal-noetherian-domain-is-dvr]]
[[thm-regular-equals-smooth-over-perfect-field]]
[[lem-composite-finite-proper-morphism-proper]]

[F3] A nonconstant morphism of proper integral curves is finite surjective;
between smooth such curves it is flat. Its finite module over a target DVR
is torsion-free and free, as in the cited proof.
[[thm-nonconstant-morphism-proper-curves-finite-surjective]]
[[lem-degree-pullback-divisor-finite-morphism-curves]]

[F4] Global functions on a proper integral scheme over $k$ are constant.
[[thm-global-functions-proper-integral-variety]]

[F5] The nilradical is the intersection of all prime ideals and is
nilpotent in a Noetherian ring. In particular a Noetherian local ring at a
minimal prime has nilpotent maximal ideal.
[[cor-nilradical-as-intersection-of-primes]]
[[thm-nilradical-of-a-noetherian-ring-is-nilpotent]]

[F6] An injective integral extension preserves Krull dimension.
[[cor-dimension-preserved-by-integral-extensions]]

[F7] A nonzero affine algebra has a maximal ideal under AC, and a maximal
ideal in a finite-type $k$-algebra has residue field finite over $k$, hence
equal to algebraically closed $k$. Thus every nonempty open of a finite-type
$k$-scheme contains a $k$-point.
[[thm-proper-ideal-contained-in-maximal-ideal]]
[[lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite]]

## Axiom use

AC is inherited through [F1]–[F7]. The proof compares one pair of curves at
a time and does not select a family of curves or fibre points.

## Proof

**Proof technique:** direct; subtract points on a finite-flat fibre product
and apply the negative-bundle assertion component by component.

1.1 The projection of $A$ to $C$ cannot be constant. Otherwise $A$ would map into one affine-space fibre of $G$; its coordinate functions are constant by [F4], so its inclusion would have one-point image. Thus [F3] makes $A\to C$ finite surjective. The same applies to $B$, and their normalizations $\widetilde A,\widetilde B$ are smooth proper by [F2]. Their nonconstant maps to $C$ are finite and flat by [F3]. On each local target DVR the two finite algebras are therefore finite free of positive rank. Their tensor product, which defines $W=\widetilde A\times_C\widetilde B$, is also finite free of positive rank over that DVR, with the tensor products of the two bases as a basis. [A1, F2, F3, F4, given, algebra]

2.1 Every irreducible component of $W$ dominates $C$. Indeed work on an affine open of $C$, with domain $R$ and finite locally free algebra $H$ defining $W$. Multiplication by any $0\ne a\in R$ is injective on $H$ and stays injective after localization. If a minimal prime $P$ of $H$ contained such an $a$, the nonzero Noetherian local ring $H_P$ would have only one prime; by [F5] the image of $a$ would be nilpotent. A nilpotent element cannot act injectively on a nonzero ring, a contradiction. Thus $P\cap R=0$. Each reduced component is therefore finite dominant over the curve $C$, hence has dimension one by [F6], and is proper since it is closed in the finite proper scheme $W$. [F5, F6, step 1.1, algebra]

3.1 Compose $W\to A\times_C B\subseteq G\times_C G$ with the difference morphism into $E$. On every reduced irreducible component of $W$, this is a map from a proper integral curve whose projection to $C$ is nonconstant by step 2.1. By [F1] its image is in the zero section. The components cover the underlying space of $W$, so every pair of closed points of the two normalizations above the same point of $C$ has zero difference in $G$. Over algebraically closed $k$, any two closed fibre points of $A$ and $B$ have closed lifts to the finite surjective normalizations and thus give such a pair in $W$. They are therefore equal. [F1, F2, step 1.1, step 2.1]

4.1 Apply the same argument with $B=A$. Surjectivity gives at least one point in each closed fibre, and step 3.1 gives at most one. For two arbitrary $A,B$, step 3.1 and their surjectivity show equality of their closed-point subsets of $G$. If their reduced closed subsets differed, the difference would contain a nonempty open of one curve and hence a $k$-point by [F7], contradicting equality of their closed-point sets. The conclusion asserts a one-point fibre property, retaining the possibility of a finite purely inseparable cover rather than silently identifying it with a section. [F7, given, step 1.1, step 3.1] ∎
