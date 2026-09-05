---
id: thm-a-right-enriched-adjoint-preserves-weighted-limits
kind: theorem
title: "Right enriched adjoints preserve weighted limits"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-enriched-adjunction, def-enriched-weighted-limit]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory, Section 3.2"
      url: "https://www.scribd.com/document/891660167/tr10"
---

## Statement

If $F:\mathcal A\to\mathcal B$ is left adjoint to $G:\mathcal B\to\mathcal A$
in the enriched sense, then $G$ preserves every enriched weighted limit that
exists in $\mathcal B$.

## Facts & Assumptions

**Given:** An enriched adjunction $F\dashv_{\mathcal V}G$ and a weighted limit
$\{W,T\}$ in $\mathcal B$.

[L1] An enriched adjunction is a natural isomorphism
$\mathcal B(FA,B)\cong\mathcal A(A,GB)$
([[def-enriched-adjunction]]).

[L2] A weighted limit represents the enriched natural-transformation object
against the hom-functor ([[def-enriched-weighted-limit]]).

## Proof

**Proof technique:** direct.

1.1 For each $A\in\mathcal A$, apply [L1] with $B=\{W,T\}$ to identify $\mathcal A(A,G\{W,T\})$ with $\mathcal B(FA,\{W,T\})$. [L1, given]

2.1 Because $\{W,T\}$ is a weighted limit, [L2] identifies $\mathcal B(FA,\{W,T\})$ with the enriched transformation object $[\mathcal J,\mathcal V](W,\mathcal B(FA,T-))$. Using [L1] again pointwise in the diagram variable replaces $\mathcal B(FA,T-)$ by $\mathcal A(A,GT-)$. [L1, L2, step 1.1]

3.1 Step 2.1 is exactly the representing property for $G\{W,T\}$ as the weighted limit of $GT$. Therefore $G$ preserves the weighted limit. [L2, step 2.1] ∎
