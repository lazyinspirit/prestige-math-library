---
id: cor-schurs-lemma-for-irreducible-representations
kind: corollary
title: "Schur's lemma for irreducible representations: a nonzero intertwiner is an isomorphism, and $\\operatorname{End}_G(V)$ is a division ring"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-subrepresentations-correspond-to-submodules-and-irreducibility-to-simplicity, thm-group-actions-and-group-ring-modules-correspond, thm-schurs-lemma-for-modules]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Theorem 2.1.1"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Proposition 1.16"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
pipeline_run: null
---

## Statement

Let $V$ and $W$ be irreducible representations of a group $G$ over a field $k$.
Then every nonzero intertwiner $f:V \to W$ is an isomorphism. Consequently
$\operatorname{End}_G(V)$ is a division ring.

## Facts & Assumptions

**Given:** Irreducible representations $V$ and $W$ of $G$ over a field $k$.

[L1] Irreducible representations are exactly simple $k[G]$-modules ([[cor-subrepresentations-correspond-to-submodules-and-irreducibility-to-simplicity]]).

[L2] $G$-equivariant maps are exactly $k[G]$-module homomorphisms ([[thm-group-actions-and-group-ring-modules-correspond]]).

[L3] A nonzero homomorphism between simple modules is an isomorphism, and the endomorphism ring of a simple module is a division ring ([[thm-schurs-lemma-for-modules]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the irreducible representations $V$ and $W$ are simple $k[G]$-modules, and by [L2] a nonzero intertwiner $f:V \to W$ is a nonzero $k[G]$-module homomorphism between them. [L1, L2, given]

2.1 Applying [L3] to that module homomorphism shows that $f$ is an isomorphism. Applying [L3] with $V=W$ shows that $\operatorname{End}_G(V)$ is a division ring. [step 1.1, L3] ∎
