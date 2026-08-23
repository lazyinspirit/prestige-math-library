---
id: cor-fixed-field-map-is-injective-on-finite-automorphism-groups
kind: corollary
title: "Distinct finite automorphism groups have distinct fixed fields"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-artin-fixed-field-degree-theorem]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Corollary 3.5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
    - title: "K. Conrad, The Galois Correspondence, Theorem 5.3"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/galoiscorr.pdf"
pipeline_run: null
---

## Statement

For a field $K$, the assignment $G\mapsto K^G$ is injective on finite groups of automorphisms of $K$. Equivalently, distinct finite automorphism groups have distinct fixed fields.

## Facts & Assumptions

**Given:** Finite groups $G,H$ of automorphisms of one field $K$.

[L1] If $G$ is a finite group of automorphisms of $K$, then $[K:K^G]=|G|$ and $\operatorname{Aut}(K/K^G)=G$ ([[thm-artin-fixed-field-degree-theorem]]).

## Proof

**Proof technique:** direct.

1.1 If $K^G=K^H=E$, then [L1] applied to each group gives $G=\operatorname{Aut}(K/E)=H$. Thus equal fixed fields force equal groups, including when either group is trivial. [L1]

2.1 Step 1.1 is precisely injectivity of $G\mapsto K^G$; its contrapositive says that distinct finite automorphism groups have distinct fixed fields. [step 1.1] ∎
