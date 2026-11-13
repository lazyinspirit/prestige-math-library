---
id: def-expander-prereq-phase-volume
kind: definition
title: Normalized phase volume and almost-everywhere assertions
domain: mathematics
status: draft
origin: pipeline
deps:
  - math:def-quotient-topology
  - math:def-product-topology
  - math:def-countable-choice
  - math:def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - math:thm-lebesgue-measure-is-a-complete-measure
  - math:thm-lebesgue-measure-of-a-box-of-every-kind
  - math:thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - math:thm-lebesgue-measure-under-dilations-and-reflections
  - math:def-the-one-dimensional-torus-and-normalized-haar-integral
  - math:def-probability-measure
  - math:def-random-element-and-real-random-variable
  - math:def-law-or-distribution-of-a-random-element
  - math:def-borel-sigma-algebra
  - math:thm-borel-sets-are-lebesgue-measurable
  - math:cor-lebesgue-measure-is-invariant-under-orthogonal-linear-maps
  - math:def-sigma-algebra
  - math:def-measure
  - math:def-measurable-space
  - math:def-complete-measure-space
  - math:thm-finite-and-countable-subadditivity-of-measures
dependency_roles:
  math:def-quotient-topology: mathematical-premise
  math:def-product-topology: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:def-lebesgue-measure-and-the-lebesgue-sigma-algebra: mathematical-premise
  math:thm-lebesgue-measure-is-a-complete-measure: mathematical-premise
  math:thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
  math:thm-lebesgue-outer-measure-and-measurability-are-translation-invariant: mathematical-premise
  math:thm-lebesgue-measure-under-dilations-and-reflections: mathematical-premise
  math:def-the-one-dimensional-torus-and-normalized-haar-integral: mathematical-premise
  math:def-probability-measure: mathematical-premise
  math:def-random-element-and-real-random-variable: mathematical-premise
  math:def-law-or-distribution-of-a-random-element: mathematical-premise
  math:def-borel-sigma-algebra: mathematical-premise
  math:thm-borel-sets-are-lebesgue-measurable: mathematical-premise
  math:cor-lebesgue-measure-is-invariant-under-orthogonal-linear-maps: mathematical-premise
  math:def-sigma-algebra: mathematical-premise
  math:def-measure: mathematical-premise
  math:def-measurable-space: mathematical-premise
  math:def-complete-measure-space: mathematical-premise
  math:thm-finite-and-countable-subadditivity-of-measures: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 0
---

## Definition

Assume countable choice. Let $V$ be a nonempty finite set, let $n=|V|$, and identify $\mathbb R^V$ with $\mathbb R^n$ by any ordering of $V$. Put $T_V=\mathbb R^V/(2\pi\mathbb Z)^V$, with its quotient topology, and write $q$ for the quotient map. Put $D=(-\pi,\pi]^V$. A subset $E\subseteq T_V$ is phase-measurable exactly when $q^{-1}(E)\cap D$ is Lebesgue measurable; its normalized phase volume is $\mu(E)=(2\pi)^{-n}\lambda_n(q^{-1}(E)\cap D)$. This is the complete probability measure obtained by pushing normalized Lebesgue measure on $D$ through $q$. Write $\mathcal M_V$ for the sigma-algebra of phase-measurable sets. Phase measurability and normalized phase volume are independent of the ordering of $V$.

A set is phase-null when it is phase-measurable and has volume zero. A statement holds for almost every initial phase when it holds outside a phase-null set. A uniformly sampled phase configuration is a random element $X:(\Omega,\mathcal F,\mathbb P)\to(T_V,\mathcal M_V)$ on a probability space, whose law is $\mu$: for every $E\in\mathcal M_V$, $\mathbb P(X^{-1}(E))=\mu(E)$. An angular chart is the inverse of $q$ restricted to a product of open intervals, each of length less than $2\pi$; its domain is the image of that product. A subset of a chart domain is phase-null exactly when its set of chart coordinates is Lebesgue-null. Every nonempty open subset of $T_V$ has positive phase volume. Phase volume is a measure on phase space; a separately specified probability law for a random graph is a different measure.

## Definition references

[[math:def-quotient-topology]]

[[math:def-product-topology]]

[[math:def-countable-choice]]

[[math:def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]

[[math:def-probability-measure]]

[[math:def-random-element-and-real-random-variable]]

[[math:def-law-or-distribution-of-a-random-element]]

[[math:def-borel-sigma-algebra]]

[[math:thm-borel-sets-are-lebesgue-measurable]]

[[math:cor-lebesgue-measure-is-invariant-under-orthogonal-linear-maps]]

[[math:def-sigma-algebra]]

[[math:def-measure]]

[[math:def-measurable-space]]

[[math:def-complete-measure-space]]

## Facts & Assumptions

**Given:** Countable choice and a nonempty finite set $V$ with $n=|V|$.

**Goal:** Verify the measure, ordering independence, uniform sampling, chart-nullity, positivity, and rescaling assertions in the definition.

[F1] Lebesgue measure on $\mathbb R^n$ is complete under countable choice, and a box has measure equal to the product of its side lengths, irrespective of which faces are included ([[math:def-lebesgue-measure-and-the-lebesgue-sigma-algebra]], [[math:thm-lebesgue-measure-is-a-complete-measure]], [[math:thm-lebesgue-measure-of-a-box-of-every-kind]], [[math:def-countable-choice]]).

[F2] Translation preserves Lebesgue outer measure and measurability; dilation by nonzero $c$ preserves measurability and multiplies Lebesgue measure by $|c|^n$ under countable choice ([[math:thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]], [[math:thm-lebesgue-measure-under-dilations-and-reflections]]).

[F3] The quotient topology makes a set open exactly when its inverse image under $q$ is open; finite products of open intervals form a base for Euclidean space ([[math:def-quotient-topology]], [[math:def-product-topology]]).

[F4] On the period-one finite torus, normalized volume of a Borel set is Lebesgue measure of its inverse image in $[0,1)^n$; the same Borel volume is obtained using any translated half-open unit cube ([[math:def-the-one-dimensional-torus-and-normalized-haar-integral]]).

[F5] The Borel sigma-algebra of a topological space is the sigma-algebra generated by its open sets. Under countable choice every Borel subset of $\mathbb R^n$, $n\ge1$, is Lebesgue measurable ([[math:def-borel-sigma-algebra]], [[math:thm-borel-sets-are-lebesgue-measurable]]).

[F6] Under countable choice, every orthogonal linear map of $\mathbb R^n$ preserves Lebesgue measurability and measure. Here orthogonal means a linear bijection preserving the standard inner product $\langle x,y\rangle=\sum_{i=1}^n x_i y_i$ ([[math:cor-lebesgue-measure-is-invariant-under-orthogonal-linear-maps]]).

[F7] A probability space is a measurable space with a measure of total mass one. A random element of a measurable space is a measurable map from a probability space; its law assigns $E$ the probability of its inverse image ([[math:def-probability-measure]], [[math:def-random-element-and-real-random-variable]], [[math:def-law-or-distribution-of-a-random-element]]).

[F8] A sigma-algebra is closed under complements relative to its ambient set and under countable unions. A measurable space is a set together with a sigma-algebra. A measure is a nonnegative extended-real-valued function on a sigma-algebra, zero on the empty set and countably additive on disjoint sequences. A measure space is complete if every subset of every measurable null set is measurable ([[math:def-sigma-algebra]], [[math:def-measurable-space]], [[math:def-measure]], [[math:def-complete-measure-space]]).

[F9] For any measure $\nu$ and sequence of measurable sets $(E_k)$, $\nu(\bigcup_k E_k)\le\sum_k\nu(E_k)$ ([[math:thm-finite-and-countable-subadditivity-of-measures]]).

## Justification

**Proof technique:** direct.

1.1 Each coordinate has a unique representative in $(-\pi,\pi]$ modulo $2\pi\mathbb Z$, so $q|_D$ is a bijection. Inverse images under this bijection preserve complements and countable unions. Consequently the displayed measurable sets form a sigma-algebra, and their assigned values form a measure by countable additivity of Lebesgue measure. The box formula gives $\lambda_n(D)=(2\pi)^n$, so the total mass is one. If a phase-measurable set has zero volume, the inverse image in $D$ of any subset is a subset of a Lebesgue-null set and hence is measurable and null; thus this pushforward measure is complete. [given, F1, F8]

1.2 Let $a,b:\mathbb R^V\to\mathbb R^n$ be the coordinate identifications from two orderings of $V$, and put $P=b\circ a^{-1}$. This is a linear bijection permuting coordinates, with inverse given by the reverse permutation. Reindexing the finite sum gives $\sum_{i=1}^n(Px)_i(Py)_i=\sum_{i=1}^n x_i y_i$, so $P$ is orthogonal. For every $E\subseteq T_V$ it carries $a(D)$ to $b(D)$ and $a(q^{-1}(E)\cap D)$ to $b(q^{-1}(E)\cap D)$. Apply orthogonal invariance to $P$ and $P^{-1}$: one representative set is Lebesgue measurable exactly when the other is, and their measures agree. The factor $(2\pi)^{-n}$ is the same for both orderings, proving independence of phase measurability and volume. Coordinate permutations also carry open boxes to open boxes, so the product and quotient topologies used here do not depend on the ordering. [given, F3, F6]

2.1 By step 1.1, $(T_V,\mathcal M_V,\mu)$ is a probability space. Its identity map is measurable because the inverse image of $E\in\mathcal M_V$ is $E$ itself, and its law assigns $E$ the value $\mu(E)$. It is therefore a uniformly sampled phase configuration in the stated sense, so this formulation has a realization on a probability space. [step 1.1, F7, F8]

2.2 Let $U$ be a product of intervals of length less than $2\pi$. Distinct points of $U$ cannot differ by a nonzero vector in $(2\pi\mathbb Z)^V$, so $q|_U$ is injective. It is an open map onto its image: the inverse image under $q$ of the image of an open subset of $U$ is the union of its lattice translates, which is open. Thus its inverse is an angular chart. For $A\subseteq U$, the set $q^{-1}(q(A))\cap D$ is the countable union over $k\in\mathbb Z^V$ of $(A+2\pi k)\cap D$. Translation invariance and countable subadditivity show that if $A$ is Lebesgue-null then this inverse image is null. Conversely, $A$ is contained in the countable union of translates of $q^{-1}(q(A))\cap D$; if the latter is null, then so is $A$. Completeness makes each null set in this argument measurable, proving the chart equivalence. [step 1.1, F1, F2, F3, F8, F9]

3.1 If $O\subseteq T_V$ is nonempty and open, its inverse image is nonempty and open. It contains a nonempty product $B$ of bounded open intervals, each shorter than $2\pi$. By the box formula $B$ has positive Lebesgue measure. If $O$ had zero phase volume, the chart equivalence would make $B$ null, a contradiction. Also $q^{-1}(O)$ is open, and $D$ is Borel, since it is the finite intersection of the open coordinate conditions $-\pi<x_v$ and the closed coordinate conditions $x_v\le\pi$. Thus $q^{-1}(O)\cap D$ is Borel and is Lebesgue measurable under countable choice, proving that $O$ is phase-measurable. Since $\mathcal M_V$ is a sigma-algebra containing the open sets, it contains the Borel sigma-algebra of $T_V$. [step 1.1, step 2.2, F1, F3, F5]

4.1 Scaling representatives by $1/(2\pi)$ induces a bijection from $T_V$ to $\mathbb R^n/\mathbb Z^n$, and $D$ becomes $(-1/2,1/2]^n$. Scaling and inverse scaling carry Euclidean open sets to open sets, so the induced quotient bijection is a homeomorphism. Its inverse images preserve complements and countable unions, so it and its inverse preserve Borel sets. For a Borel set, the dilation formula turns the normalized volume in the definition into the period-one volume computed on this translated half-open cube. Hence the construction has the stated $2\pi$ normalization and agrees on Borel sets with the supplied finite-torus measure. The completed pushforward in step 1.1 supplies the phase-null and almost-everywhere conventions without imposing a law on any graph. [step 1.1, step 3.1, F2, F3, F4, F5] ∎
