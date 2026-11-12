---
id: lem-author-2389e5bafea8-open-generic-density
kind: lemma
title: Open subsets containing generic points are componentwise dense
status: published
domain: mathematics
deps:
  - math:def-topological-space
  - math:def-irreducible-component-of-a-topological-space
  - math:def-subspace-topology-top
  - math:def-interior-closure-boundary-top
  - math:thm-subspace-closure-and-interior
dependency_roles:
  math:def-topological-space: mathematical-premise
  math:def-irreducible-component-of-a-topological-space: mathematical-premise
  math:def-subspace-topology-top: mathematical-premise
  math:def-interior-closure-boundary-top: mathematical-premise
  math:thm-subspace-closure-and-interior: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 0
---

## Statement
Let $U$ be an open subset of a topological space $X$. If an irreducible component $C$ has generic point $\eta\in U$, then $U\cap C$ is a dense open subset of $C$.

The generic point condition means $\overline{\{\eta\}}=C$; density means that the closure in $C$ is all of $C$.

## Facts & Assumptions

**Given:** An open $U\subseteq X$ and a component $C$ with generic point $\eta\in U$.

**Goal:** Prove that $U\cap C$ is open and dense in $C$.

[F1] Topological spaces and open sets are as in [[math:def-topological-space]], and irreducible components are maximal irreducible subsets as in [[math:def-irreducible-component-of-a-topological-space]]. We use the subspace topology on $C$: its open sets are traces $V\cap C$ of open subsets $V\subseteq X$ ([[math:def-subspace-topology-top]]).

[F2] In any named space, closure is the smallest closed superset ([[math:def-interior-closure-boundary-top]]). Thus, if $A\subseteq B$, the closure of $B$ is a closed set containing $A$, so it contains the closure of $A$; this is the monotonicity of closure used below.

[F3] For $A\subseteq C\subseteq X$, the subspace-closure identity is $\operatorname{cl}_C(A)=\overline{A}^{X}\cap C$ ([[math:thm-subspace-closure-and-interior]], Statement, clause 1). Only this unconditional clause is used; $C$ need not be open in $X$.

## Proof

1.1 The intersection $U\cap C$ is open in the subspace topology on $C$, since $U$ is open in $X$, and it contains $\eta$. [F1, given]

2.1 By [F3] and the generic-point hypothesis, $\operatorname{cl}_C(\{\eta\})=\overline{\{\eta\}}^{X}\cap C=C\cap C=C$. Since $\{\eta\}\subseteq U\cap C$, monotonicity from [F2] gives $C\subseteq\operatorname{cl}_C(U\cap C)\subseteq C$. Thus $U\cap C$ is dense in $C$, and step 1.1 supplies its openness. [F2, F3, step 1.1, given] ∎
