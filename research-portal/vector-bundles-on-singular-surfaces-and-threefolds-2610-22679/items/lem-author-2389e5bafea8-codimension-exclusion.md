---
id: lem-author-2389e5bafea8-codimension-exclusion
kind: lemma
title: Excluding points of codimension zero and one
status: published
domain: mathematics
deps:
  - math:def-integral-scheme
  - math:def-irreducible-topological-space-and-subset
  - math:def-interior-closure-boundary-top
  - math:def-subspace-topology-top
dependency_roles:
  math:def-integral-scheme: mathematical-premise
  math:def-irreducible-topological-space-and-subset: mathematical-premise
  math:def-interior-closure-boundary-top: mathematical-premise
  math:def-subspace-topology-top: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 0
---

## Statement
Let $C$ be an integral scheme and $Z\subseteq C$ a subset containing no point of codimension zero or one. Then $Z$ has codimension at least two in $C$.

The codimension of a point $x$ in $C$ is the supremum of lengths of strict chains of irreducible closed subsets of $C$ from $C$ to $\overline{\{x\}}$; the codimension of $Z$ is the infimum of the codimensions of its points, with infimum of the empty set defined as $+\infty$.

## Statement references

[[math:def-integral-scheme]]

[[math:def-irreducible-topological-space-and-subset]]

[[math:def-interior-closure-boundary-top]]

[[math:def-subspace-topology-top]]

## Facts & Assumptions

**Given:** An integral scheme $C$ and a subset $Z$ with no point of codimension zero or one.

**Goal:** Show that $\operatorname{codim}_C Z\geq 2$.

[F1] The underlying topological space of an integral scheme is nonempty and irreducible ([[math:def-integral-scheme]]).

[F2] A space is irreducible if it is nonempty and every expression as a union of two closed subsets has one member equal to the whole space; a subset is irreducible when its subspace is irreducible ([[math:def-irreducible-topological-space-and-subset]]). A finite strict chain has length equal to its number of strict inclusions, so a chain consisting of one subset has length zero.

[F3] The closure of a subset is its smallest closed superset; in particular, it is closed and contains that subset ([[math:def-interior-closure-boundary-top]]).

[F4] A subset $E$ of a subspace $H\subseteq C$ is closed in $H$ exactly when $E=H\cap D$ for some closed subset $D$ of $C$ ([[math:def-subspace-topology-top]], Definition, closed sets of a subspace).

## Proof

1.1 Fix $x\in C$ and put $H=\overline{\{x\}}$. By [F1], $C$ is irreducible, and by [F3], $H$ is a nonempty closed subset of $C$. If $H=E_1\cup E_2$ with each $E_i$ closed in $H$, write $E_i=H\cap D_i$ with $D_i$ closed in $C$ by [F4]. The point $x$ belongs to some $E_i$, hence to $D_i$; minimality of the closure in [F3] gives $H\subseteq D_i$, so $E_i=H$. Thus $H$ is irreducible by [F2]. If $H=C$, the chain consisting only of $C$ has length zero; otherwise $C\supsetneq H$ is a strict chain of irreducible closed subsets of length one. Therefore the family of finite chains defining the codimension of $x$ is nonempty. [F1, F2, F3, F4, given]

2.1 For every $x\in Z$, the lengths in its defining chain family form a nonempty subset of the nonnegative integers by step 1.1 and [F2]. If bounded, this subset is finite and has a largest integer; if unbounded, its supremum is $+\infty$. Thus the codimension of $x$ is a nonnegative integer or $+\infty$. It is neither zero nor one by hypothesis, so it is at least two. Taking the infimum over $x\in Z$ proves the inequality; if $Z$ is empty, the stated convention gives $+\infty$. [F2, step 1.1, given] ∎
