---
id: thm-cayleys-theorem
kind: theorem
title: "Cayley's theorem: every group $G$ is isomorphic to a subgroup of $\\operatorname{Sym}(G)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-group-action, thm-group-actions-correspond-to-homomorphisms, def-group-isomorphism-and-automorphism, thm-image-subgroup-and-kernel-normal, thm-group-homomorphism-injective-iff-trivial-kernel, def-symmetric-group]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-03
sources:
  scraped: []
  references:
    - title: "Brosnan, Cayley's theorem"
      url: "https://math.umd.edu/~pbrosnan/notes/ugalg/sect0035.html"
pipeline_run: null
---

## Statement

Every group $G$ is isomorphic to the subgroup of $\operatorname{Sym}(G)$ formed
by its left translations $\lambda_g:x\mapsto gx$.

## Facts & Assumptions

**Given:** A group $G$ with identity $e$.

[L1] A left action of $G$ on a set gives a homomorphism into its symmetric group
([[thm-group-actions-correspond-to-homomorphisms]], [[def-group-action]]).

[L2] The image of a group homomorphism is a subgroup, and a homomorphism is
injective exactly when its kernel is trivial
([[thm-image-subgroup-and-kernel-normal]], [[thm-group-homomorphism-injective-iff-trivial-kernel]]).

[L3] A bijective group homomorphism is an isomorphism
([[def-group-isomorphism-and-automorphism]]).

## Proof

**Proof technique:** direct.

1.1 Define $g\cdot x=gx$ on the set underlying $G$. Then $e\cdot x=x$ and $(gh)\cdot x=g\cdot(h\cdot x)$, so this is a left action. [L1, given, algebra]

2.1 By [L1], the action yields a homomorphism $\lambda:G\to\operatorname{Sym}(G)$ with $\lambda(g)(x)=gx$. [step 1.1, L1]

3.1 If $\lambda(g)$ is the identity permutation, then evaluating it at $e$ gives $g=\lambda(g)(e)=e$. Hence $\ker\lambda=\{e\}$ and $\lambda$ is injective. [step 2.1, L2, given]

4.1 The image $\lambda[G]$ is a subgroup of $\operatorname{Sym}(G)$, and the injective homomorphism $\lambda:G\to\lambda[G]$ is bijective. [step 2.1, step 3.1, L2]

5.1 Thus $\lambda$ is an isomorphism from $G$ to a subgroup of $\operatorname{Sym}(G)$. [step 4.1, L3] ∎
