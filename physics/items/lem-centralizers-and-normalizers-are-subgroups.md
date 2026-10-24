---
id: lem-centralizers-and-normalizers-are-subgroups
kind: lemma
title: "$C_G(x)$ and $N_G(H)$ are subgroups of $G$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-conjugacy-class-and-centralizer, def-normalizer-of-a-subgroup, lem-subgroup-criterion]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "P. Brosnan, Undergraduate Algebra Notes, 3.14: G-Sets"
      url: "https://www.math.umd.edu/~pbrosnan/notes/ugalg/sect0035.html"
pipeline_run: null
---

## Statement

For every group $G$, element $x\in G$, and subgroup $H\le G$, both the
centralizer $C_G(x)$ and the normalizer $N_G(H)$ are subgroups of $G$.

## Facts & Assumptions

**Given:** A group $G$, an element $x\in G$, and a subgroup $H\le G$.

[L1] The centralizer is $C_G(x)=\{g\in G:gx=xg\}$ ([[def-conjugacy-class-and-centralizer]]).

[L2] The normalizer is $N_G(H)=\{g\in G:gHg^{-1}=H\}$ ([[def-normalizer-of-a-subgroup]]).

[L3] A nonempty subset $S$ is a subgroup if $ab^{-1}\in S$ whenever $a,b\in S$ ([[lem-subgroup-criterion]]).

## Proof

**Proof technique:** direct.

1.1 The identity commutes with $x$. If $a,b\in C_G(x)$, then $b^{-1}$ commutes with $x$, and hence $(ab^{-1})x=a(b^{-1}x)=a(xb^{-1})=x(ab^{-1})$; [L3] gives $C_G(x)\le G$. [L1, L3]

1.2 The identity normalizes $H$. If $a,b\in N_G(H)$, then $b^{-1}Hb=H$, and therefore $(ab^{-1})H(ab^{-1})^{-1}=a(b^{-1}Hb)a^{-1}=aHa^{-1}=H$. [L2]

2.1 Applying [L3] to step 1.2 gives $N_G(H)\le G$, so both asserted sets are subgroups. [step 1.1, step 1.2, L3] ∎
