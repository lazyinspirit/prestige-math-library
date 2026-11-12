---
id: lem-adjudicate-fc0ec1cc794d-scheme-codimension-conventions
kind: lemma
title: Closed-subset and specialization chains compute the same scheme codimension
status: published
domain: mathematics
deps:
  - math:def-scheme
  - math:def-affine-scheme
  - math:def-morphism-locally-ringed-spaces
  - math:def-morphism-ringed-spaces
  - math:def-homeomorphism-and-open-maps
  - math:def-topological-space
  - math:def-subspace-topology-top
  - math:def-interior-closure-boundary-top
  - math:def-irreducible-topological-space-and-subset
  - math:def-irreducible-component-of-a-topological-space
  - math:def-specialisation-and-generic-point
  - math:thm-spectrum-sober
  - math:thm-subspace-closure-and-interior
  - math:def-axiom-of-choice
dependency_roles:
  math:def-scheme: mathematical-premise
  math:def-affine-scheme: mathematical-premise
  math:def-morphism-locally-ringed-spaces: mathematical-premise
  math:def-morphism-ringed-spaces: mathematical-premise
  math:def-homeomorphism-and-open-maps: mathematical-premise
  math:def-topological-space: mathematical-premise
  math:def-subspace-topology-top: mathematical-premise
  math:def-interior-closure-boundary-top: mathematical-premise
  math:def-irreducible-topological-space-and-subset: mathematical-premise
  math:def-irreducible-component-of-a-topological-space: mathematical-premise
  math:def-specialisation-and-generic-point: mathematical-premise
  math:thm-spectrum-sober: mathematical-premise
  math:thm-subspace-closure-and-interior: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 0
formulation_deps:
  - math:def-scheme
  - math:def-topological-space
  - math:def-subspace-topology-top
  - math:def-interior-closure-boundary-top
  - math:def-irreducible-topological-space-and-subset
  - math:def-irreducible-component-of-a-topological-space
  - math:def-specialisation-and-generic-point
  - math:def-axiom-of-choice
argument_deps:
  - math:def-scheme
  - math:def-affine-scheme
  - math:def-morphism-locally-ringed-spaces
  - math:def-morphism-ringed-spaces
  - math:def-homeomorphism-and-open-maps
  - math:def-topological-space
  - math:def-subspace-topology-top
  - math:def-interior-closure-boundary-top
  - math:def-irreducible-topological-space-and-subset
  - math:def-irreducible-component-of-a-topological-space
  - math:def-specialisation-and-generic-point
  - math:thm-spectrum-sober
  - math:thm-subspace-closure-and-interior
  - math:def-axiom-of-choice
---

## Statement
Assume the Axiom of Choice and let $X$ be a scheme. Every nonempty irreducible closed subset $Z$ of $X$ has a unique generic point $\eta_Z$. The assignment $x\mapsto\overline{\{x\}}$ is a bijection from points of $X$ to its nonempty irreducible closed subsets, and $y$ is a specialization of $x$ if and only if $\overline{\{y\}}\subseteq\overline{\{x\}}$. This inclusion is strict if and only if $y\ne x$, whenever $y$ is a specialization of $x$.

In particular, let $C$ be an irreducible component and $x\in C$. For every nonnegative integer $n$, chains $C=Z_0\supsetneq Z_1\supsetneq\cdots\supsetneq Z_n=\overline{\{x\}}$ of irreducible closed subsets correspond bijectively, with the same length $n$, to chains $\eta_C=x_0,x_1,\ldots,x_n=x$ in which each point is a strict specialization of its predecessor. Therefore the suprema of these two sets of chain lengths agree, with value $+\infty$ if the lengths are unbounded.

Closures are taken in $X$, with every subset given the subspace topology. A nonempty subset is irreducible when it is not the union of two proper relatively closed subsets; an irreducible component is a maximal irreducible subset. A generic point of a closed subset is a point whose closure is that subset. A strict specialization from $a$ to $b$ means $b\in\overline{\{a\}}$ and $b\ne a$. A one-member chain has length zero.

## Statement references

[[math:def-scheme]]

[[math:def-topological-space]]

[[math:def-subspace-topology-top]]

[[math:def-interior-closure-boundary-top]]

[[math:def-irreducible-topological-space-and-subset]]

[[math:def-irreducible-component-of-a-topological-space]]

[[math:def-specialisation-and-generic-point]]

[[math:def-axiom-of-choice]]

## Facts & Assumptions

[F1] Every point of a scheme has an affine open neighborhood ([[math:def-scheme]]). An affine scheme is a locally ringed space isomorphic to $(\operatorname{Spec}A,\mathcal O_{\operatorname{Spec}A})$ for some ring $A$ ([[math:def-affine-scheme]]). A locally ringed space morphism is in particular a ringed space morphism ([[math:def-morphism-locally-ringed-spaces]]), whose underlying map is continuous and whose composition composes underlying maps ([[math:def-morphism-ringed-spaces]]). Consequently an isomorphism has mutually inverse continuous underlying maps: its underlying map is a homeomorphism, meaning a continuous bijection with continuous inverse ([[math:def-homeomorphism-and-open-maps]]). Such a map identifies open and closed subsets and preserves closures. Under the Axiom of Choice, every nonempty irreducible closed subset of an affine spectrum has a unique generic point ([[math:thm-spectrum-sober]]).

[F2] Open sets are closed under finite intersections, and closed sets are their complements ([[math:def-topological-space]]). In a subspace $S\subseteq X$, open and closed subsets are respectively the traces of open and closed subsets of $X$; in particular, a subset closed in a closed subspace is closed in $X$ ([[math:def-subspace-topology-top]]). Irreducibility is the nonempty, two-closed-subsets condition in the subspace topology ([[math:def-irreducible-topological-space-and-subset]]). A component is maximal among irreducible subsets ([[math:def-irreducible-component-of-a-topological-space]]).

[F3] Closure is the smallest closed superset ([[math:def-interior-closure-boundary-top]]). A subset is dense in its ambient space when its closure is that whole space. For $A\subseteq W\subseteq X$, its closure in $W$ equals $W\cap\overline A^{X}$ ([[math:thm-subspace-closure-and-interior]], clause 1). Generic points and specializations have the meanings given in [[math:def-specialisation-and-generic-point]].

[A1] Assume the Axiom of Choice, as required by the affine generic-point theorem in [F1] ([[math:def-axiom-of-choice]]).

## Proof

**Given:** A scheme $X$ and the Axiom of Choice.

**Goal:** Prove the generic-point correspondence, its strict-chain compatibility, and the equality of chain-length suprema.

1.1 In an irreducible space, any two nonempty open subsets meet: otherwise their complements would be two proper closed subsets covering the space. It follows that a nonempty open subset is dense, since a proper closed superset would have a nonempty open complement disjoint from it. Such an open subset is also irreducible: two of its nonempty relatively open subsets are nonempty opens of the original space by [F2], so meet, and taking complements gives the irreducibility criterion. Now take a nonempty irreducible closed subset $Z\subseteq X$, and choose an affine open $W$ meeting it by [F1]. The subset $Z\cap W$ is closed in $W$ and is a nonempty irreducible open subset of $Z$, dense in $Z$. Choose an affine presentation of $W$ as in [F1], with underlying homeomorphism $h:W\to\operatorname{Spec}A$. It bijects the closed subsets of the two spaces and therefore carries smallest closed supersets to smallest closed supersets: $h(\overline B^{W})=\overline{h(B)}^{\operatorname{Spec}A}$ for $B\subseteq W$. It also identifies relatively closed covers of subsets, so $h(Z\cap W)$ is nonempty, irreducible and closed. By the affine-spectrum theorem in [F1], this image has a unique generic point $p$. The closure identity shows that $\eta=h^{-1}(p)$ is the unique generic point of $Z\cap W$ in $W$. Its closure in $X$ lies in $Z$ and, by [F3], contains $Z\cap W$. Density then forces $\overline{\{\eta\}}^{X}=Z$. Any other generic point $\eta'$ of $Z$ must belong to $W$: otherwise the closed set $X\setminus W$ would contain $\eta'$ and hence all of $Z$, contradicting $Z\cap W\ne\varnothing$. By [F3], its closure in $W$ is also $Z\cap W$, so affine uniqueness gives $\eta'=\eta$. This proves existence and uniqueness in $X$. [F1, F2, F3, A1, given, choose]

2.1 The closure of any nonempty irreducible subset is irreducible. Indeed, two relatively closed subsets covering that closure are closed in $X$ by [F2]; their traces cover the original irreducible subset, which lies in one of them, and then its closure lies there by [F3]. In particular the closure of a point is irreducible, since a singleton is irreducible. Also each component $C$ is closed: its irreducible closure contains it, so maximality in [F2] makes that closure equal to $C$. By step 1.1, taking the generic point of a nonempty irreducible closed subset is inverse to taking the closure of a point. For points $a,b$, the relation $b\in\overline{\{a\}}$ implies $\overline{\{b\}}\subseteq\overline{\{a\}}$ by the smallest-closed-superset property; the converse follows from $b\in\overline{\{b\}}$. Equality of these two closures forces $a=b$ by generic-point uniqueness in step 1.1. Thus strict specialization is exactly strict containment of point closures in the indicated direction. Applying the inverse assignments term by term now gives the asserted bijection of chains, with endpoints $C,\overline{\{x\}}$ corresponding to $\eta_C,x$. This preserves each finite length, including zero. The sets of possible lengths are identical, so their suprema agree, also when unbounded. The empty scheme has neither points nor nonempty irreducible closed subsets, and all assertions are then vacuous. [F2, F3, step 1.1] ∎
