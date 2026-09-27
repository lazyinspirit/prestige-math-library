---
id: ex-polynomial-dimension-zero-ring-boundary
kind: example
title: "The polynomial-dimension formula at fields, Artinian rings, and the zero-ring boundary"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [cor-dimension-of-a-finite-polynomial-ring-over-a-field, def-krull-dimension-of-a-ring, thm-prime-spectrum-of-a-quotient-bijection]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., §21"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §§18, 21"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-03-height-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---


## Example

The theorem $\dim R[x]=\dim R+1$ behaves as expected for fields and nonreduced Artinian rings, and it deliberately excludes the zero ring.

## Facts & Assumptions

**Given:** A field $k$, the Artinian ring $A=k[t]/(t^2)$, and the zero ring $0$.

[L1] A polynomial ring in one variable over a field has dimension one ([[cor-dimension-of-a-finite-polynomial-ring-over-a-field]]).

[L2] Krull dimension is defined by prime chains, with the zero ring convention recorded separately ([[def-krull-dimension-of-a-ring]]).

[L3] Primes of a quotient correspond to primes containing the quotient ideal ([[thm-prime-spectrum-of-a-quotient-bijection]]).

## Verification

**Proof technique:** cases.

1.1 For the field $k$, one has $\dim k=0$ and [L1] gives $\dim k[x]=1$. [L1, given, cases]

1.2 The ring $A=k[t]/(t^2)$ is Artinian local with the single prime $(\bar t)$, so $\dim A=0$. Every prime of $A[x]=k[t,x]/(t^2)$ contains the nilpotent $\bar t$, and [L3] identifies its prime chains with those of $A[x]/(\bar t)\cong k[x]$. Hence [L1] gives $\dim A[x]=1$. The nilpotent element does not change the one-step dimension jump. [L1, L2, L3, given, cases]

2.1 The zero ring is excluded from the statement because it has no prime ideals at all. Its polynomial ring is again the zero ring, so the expression $\dim 0+1$ does not describe its behavior. Thus the theorem is intentionally stated only for ordinary Noetherian rings with the established zero-ring convention left separate. [L2, step 1.1, step 1.2, given, cases-exhaustive] ∎
