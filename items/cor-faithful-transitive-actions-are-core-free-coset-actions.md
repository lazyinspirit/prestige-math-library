---
id: cor-faithful-transitive-actions-are-core-free-coset-actions
kind: corollary
title: "A transitive action is faithful exactly when a point stabiliser is core-free"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-group-action, thm-transitive-actions-are-coset-actions, thm-left-coset-action-and-its-kernel, def-core-of-a-subgroup]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. Brosnan, Undergraduate Algebra Notes, 3.14: G-Sets"
      url: "https://www.math.umd.edu/~pbrosnan/notes/ugalg/sect0035.html"
pipeline_run: null
---

## Statement

Let $G$ act transitively on a nonempty set $X$, and let $x\in X$. The action is
faithful if and only if

$$\operatorname{Core}_G(G_x)=\{e\}.$$

Equivalently, faithful transitive $G$-sets are precisely the coset actions
$G/H$ for core-free subgroups $H$.

## Facts & Assumptions

**Given:** A transitive action of $G$ on a nonempty set $X$ and a point $x\in X$.

[L1] An action is faithful when the only group element fixing every point is the identity ([[def-group-action]]).

[L2] The action on $X$ is equivariantly isomorphic to the left-coset action on $G/G_x$ ([[thm-transitive-actions-are-coset-actions]]).

[L3] The kernel of the action on $G/H$ is $\operatorname{Core}_G(H)$ ([[thm-left-coset-action-and-its-kernel]]).

[L4] The core is the intersection of all conjugates of the subgroup ([[def-core-of-a-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], the equivariant isomorphism identifies the given action with the action on $G/G_x$. [L2]

2.1 A group element fixes every point of $X$ exactly when it fixes every point of the equivariantly isomorphic coset set; by [L3] and [L4], the set of such elements is $\operatorname{Core}_G(G_x)$. [step 1.1, L3, L4]

3.1 By [L1], the action is faithful exactly when this kernel is $\{e\}$, proving both directions. [step 2.1, L1] ∎
