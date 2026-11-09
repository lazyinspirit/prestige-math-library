---
id: lem-author-2389e5bafea8-generic-reduced-local-ring
kind: lemma
title: Generic local rings of reduced schemes
status: draft
domain: mathematics
deps:
  - math:thm-stalk-structure-sheaf-prime-localization
  - math:cor-nilradical-as-intersection-of-primes
  - math:def-axiom-of-choice
dependency_roles:
  math:thm-stalk-structure-sheaf-prime-localization: mathematical-premise
  math:cor-nilradical-as-intersection-of-primes: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 0
---

## Statement
Assume the Axiom of Choice. Let $X$ be a reduced scheme and let $\eta$ be the generic point of an irreducible component. Then $\mathcal O_{X,\eta}$ is a field.

A scheme is reduced when its local rings have no nonzero nilpotents. A generic point of a closed irreducible subset is a point whose closure is that subset.

## Facts & Assumptions

**Given:** AC, a reduced scheme $X$ and a generic point $\eta$ of an irreducible component.

**Goal:** Show that $\mathcal O_{X,\eta}$ is a field.

[F1] On $U=\operatorname{Spec} A$, the local ring at the point corresponding to a prime $\mathfrak p$ is $A_{\mathfrak p}$ ([[math:thm-stalk-structure-sheaf-prime-localization]]).

[F2] Under AC the nilradical is the intersection of all prime ideals ([[math:cor-nilradical-as-intersection-of-primes]]). Choice is used only through this supplier ([[math:def-axiom-of-choice]]).

## Proof

1.1 Choose an affine neighborhood $U=\operatorname{Spec} A$ of $\eta$, corresponding to $\mathfrak p$. If $\mathfrak q\subsetneq\mathfrak p$ were prime, the closure in $X$ of the point of $U$ corresponding to $\mathfrak q$ would be irreducible and strictly contain the closure of $\eta$: its intersection with $U$ contains the point $\mathfrak q$, whereas the closure of $\eta$ does not. This contradicts maximality of the component. Thus $\mathfrak p$ is minimal. [F1, given, choose]

2.1 The primes of $A_{\mathfrak p}$ correspond to primes of $A$ contained in $\mathfrak p$, so its only prime is its maximal ideal. The nilradical of a ring is the intersection of its prime ideals; consequently that maximal ideal is the nilradical. Reducedness of $X$ makes this local ring reduced, so the ideal is zero. A local ring with zero maximal ideal is a field. [F1, F2, step 1.1, given] ∎
