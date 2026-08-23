---
id: thm-relative-automorphism-group-and-separable-degree-bound
kind: theorem
title: "$\\operatorname{Aut}(K/F)$ is a group and $|\\operatorname{Aut}(K/F)|\\le [K:F]_s\\le [K:F]$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-relative-field-automorphism-group, def-separable-degree, cor-separable-degree-is-at-most-extension-degree, thm-algebraic-embedding-extension]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Chapter 3"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
    - title: "K. Conrad, The Galois Correspondence, Section 4"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/galoiscorr.pdf"
pipeline_run: null
---

## Statement

For every field extension $K/F$, composition makes
$\operatorname{Aut}(K/F)$ a group. If $K/F$ is finite, then

$$|\operatorname{Aut}(K/F)|\le [K:F]_s\le [K:F].$$

In particular the relative automorphism group is finite.

## Facts & Assumptions

**Given:** A field extension $K/F$; for the inequalities, a finite extension, an algebraic closure $\Omega$ of $F$, and the Axiom of Choice used by the embedding-extension theorem.

[F1] An $F$-automorphism of $K$ is an $F$-isomorphism $K\to K$ ([[def-relative-field-automorphism-group]]).

[A1] Assuming the Axiom of Choice, an embedding $F\to\Omega$ extends across the algebraic extension $K/F$ to an $F$-embedding $\tau:K\to\Omega$ ([[thm-algebraic-embedding-extension]]); the separable degree $[K:F]_s$ is the number of $F$-embeddings $K\to\Omega$ ([[def-separable-degree]]).

[L1] For every finite field extension $K/F$, one has $[K:F]_s\le [K:F]$ ([[cor-separable-degree-is-at-most-extension-degree]]).

## Proof

**Proof technique:** direct.

1.1 The identity map is an $F$-automorphism, the composite of two $F$-automorphisms is an $F$-automorphism, and the inverse of an $F$-isomorphism is again an $F$-isomorphism fixing $F$; associativity is inherited from composition. Thus $\operatorname{Aut}(K/F)$ is a group. Every such map fixes $0$ and $1$, so no zero case is excluded. [F1, algebra]

1.2 For finite $K/F$, choose $\tau:K\to\Omega$ as in [A1]. The map $\sigma\mapsto\tau\circ\sigma$ sends $\operatorname{Aut}(K/F)$ into the set of $F$-embeddings $K\to\Omega$ and is injective, because $\tau\circ\sigma_1=\tau\circ\sigma_2$ and injectivity of $\tau$ imply $\sigma_1=\sigma_2$. [A1, F1, choose]

2.1 Step 1.2 and the definition of separable degree give $|\operatorname{Aut}(K/F)|\le [K:F]_s$, while [L1] gives $[K:F]_s\le [K:F]$. If $K=F$, all three numbers are $1$, so this includes the degree-one endpoint. [step 1.2, L1] ∎
