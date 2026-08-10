---
id: thm-transitive-actions-are-coset-actions
kind: theorem
title: "Every transitive $G$-set is equivariantly isomorphic to $G/G_x$ for any chosen point $x$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-equivariant-map-of-group-actions, def-group-action, thm-orbit-stabilizer, thm-left-coset-action-and-its-kernel]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. Brosnan, Undergraduate Algebra Notes, 3.14: G-Sets, Lemma 3.105 and Theorem 3.107"
      url: "https://www.math.umd.edu/~pbrosnan/notes/ugalg/sect0035.html"
pipeline_run: null
---

## Statement

Let $X$ be a transitive $G$-set and choose $x\in X$. Then the orbit map

$$G/G_x\longrightarrow X,\qquad gG_x\longmapsto g\cdot x,$$

is an equivariant isomorphism from the left-coset action on $G/G_x$ to the
given action on $X$.

## Facts & Assumptions

**Given:** A transitive action of a group $G$ on a nonempty set $X$ and a point $x\in X$.

[L1] An isomorphism of $G$-sets is an equivariant bijection ([[def-equivariant-map-of-group-actions]]).

[L2] Transitivity means that for every $y\in X$ there is $g\in G$ with $g\cdot x=y$ ([[def-group-action]]).

[L3] The map $G/G_x\to G\cdot x$, $gG_x\mapsto g\cdot x$, is a bijection ([[thm-orbit-stabilizer]]).

[L4] The left-coset action is $a\cdot(gG_x)=(ag)G_x$ ([[thm-left-coset-action-and-its-kernel]]).

## Proof

**Proof technique:** constructive.

1.1 Define $\Phi(gG_x)=g\cdot x$. By [L3], this is a bijection from $G/G_x$ onto $G\cdot x$. [L1, L3, construct]

2.1 For $a,g\in G$, one has $\Phi(a\cdot(gG_x))=\Phi((ag)G_x)=(ag)\cdot x=a\cdot(g\cdot x)=a\cdot\Phi(gG_x)$, so $\Phi$ is equivariant. [step 1.1, L1, L4]

3.1 By transitivity [L2], $G\cdot x=X$. Thus $\Phi:G/G_x\to X$ is an equivariant bijection and hence an isomorphism of $G$-sets. [step 1.1, step 2.1, L1, L2, discharge-construct] ∎
