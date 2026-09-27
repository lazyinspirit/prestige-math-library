---
id: ex-polynomial-dimension-zero-ring-boundary
kind: example
title: "The polynomial-dimension formula at fields, Artinian rings, and the zero-ring boundary"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: literature-derived
generation:
  role: example
deps: [def-krull-dimension-of-a-ring, thm-dimension-of-a-polynomial-ring-over-a-noetherian-ring]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., §21"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §§18, 21"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---


## Example

The theorem $\dim R[x]=\dim R+1$ behaves as expected for fields and nonreduced Artinian rings, and it deliberately excludes the zero ring.

## Facts & Assumptions

**Given:** A field $k$, the Artinian ring $A=k[t]/(t^2)$, and the zero ring $0$.

[L1] For a finite-dimensional Noetherian ring, adjoining one polynomial variable raises dimension by one ([[thm-dimension-of-a-polynomial-ring-over-a-noetherian-ring]]).

[L2] Krull dimension is defined by prime chains, with the zero ring convention recorded separately ([[def-krull-dimension-of-a-ring]]).

## Verification

**Proof technique:** cases.

1.1 For the field $k$, one has $\dim k=0$, so [L1] gives $\dim k[x]=1$. [L1, given, cases]

1.2 The ring $A=k[t]/(t^2)$ is Artinian local with the single prime $(\bar t)$, so $\dim A=0$. Applying [L1] again gives $\dim A[x]=1$. The nilpotent element $\bar t$ does not change the one-step dimension jump. [L1, L2, given, cases]

2.1 The zero ring is excluded from the statement because it has no prime ideals at all. Its polynomial ring is again the zero ring, so the expression $\dim 0+1$ does not describe its behavior. Thus the theorem is intentionally stated only for ordinary Noetherian rings with the established zero-ring convention left separate. [L2, step 1.1, step 1.2, given, cases-exhaustive] ∎
