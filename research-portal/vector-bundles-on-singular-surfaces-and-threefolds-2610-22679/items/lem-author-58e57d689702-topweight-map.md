---
id: lem-author-58e57d689702-topweight-map
kind: lemma
title: The full top-weight map with its exact factorization
status: published
domain: mathematics
deps:
  - thm-author-c5b0693f4fc3-top-torsion-topweight-comparison
  - lem-author-e71ff76fe904-comparison-composite
  - lem-author-58e57d689702-independent-gamma
dependency_roles:
  thm-author-c5b0693f4fc3-top-torsion-topweight-comparison: mathematical-premise
  lem-author-e71ff76fe904-comparison-composite: mathematical-premise
  lem-author-58e57d689702-independent-gamma: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 11
---

## Statement
For $X$ finite type over algebraically closed $k$, $\dim X\leq3$ and $p$ invertible, let $j=3,n=p$. The canonical map $\beta_X:\mathbb Z(3)_{\mathrm{mot}}(X)/p\to B_3(X)$ is an equivalence and factors as $\beta_X=\epsilon_X\gamma_X$, where $\epsilon$ is the source map induced from $\tau^{\leq3}B_3\to B_3$ by cdh localization. This statement uses the actual top-weight source comparison, rather than an arbitrary equivalence of complexes.

## Facts & Assumptions
**Given:** The hypotheses in the statement.

**Goal:** Establish the stated exact map or descent conclusion.

[F1] [[thm-author-c5b0693f4fc3-top-torsion-topweight-comparison]].

[F2] [[lem-author-e71ff76fe904-comparison-composite]] and [[lem-author-58e57d689702-independent-gamma]].

## Proof
1.1 The draft top-weight supplier [F1], importing the published Elmanto report Theorem 4, applies to every finite-type scheme over algebraically closed $k$, with $j\geq\dim X$ and any prime; its invertible-prime target is exactly $B_3(X)$. With $j=3$ its actual comparison $\beta_X$ is therefore an equivalence, without requiring affineness, smoothness or reducedness. [F1]

2.1 The draft source-composite supplier [F2] identifies this canonical motivic-to-étale map as $\epsilon\theta\alpha$. This is the same prime-field comparison used in the published report Theorem3(1) and Theorem4, by their explicit assertion that the equivalence is under the motivic-to-syntomic comparison. The preceding lemma defines $\gamma=\theta\alpha$, yielding the equation with actual maps. No equality is inferred from abstractly isomorphic groups. [F1, F2, step 1.1] ∎
