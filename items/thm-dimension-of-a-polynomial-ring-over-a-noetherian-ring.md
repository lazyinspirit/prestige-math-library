---
id: thm-dimension-of-a-polynomial-ring-over-a-noetherian-ring
kind: theorem
title: "A Noetherian polynomial ring has dimension one larger"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-polynomial-ring-dimension-lower-chain, lem-polynomial-ring-dimension-upper-bound]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., §21"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §§18, 21"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "Melvin Hochster, Dimension theory and systems of parameters"
      url: "https://sites.lsa.umich.edu/hochster/wp-content/uploads/sites/1337/2026/04/Dim.pdf"
pipeline_run: null
---


## Statement

Let $R$ be a Noetherian commutative ring of finite Krull dimension. Then
$$
\dim R[x]=\dim R+1.
$$

## Facts & Assumptions

**Given:** A Noetherian commutative ring $R$ of finite dimension.

[L1] Every prime chain in $R$ extends to a prime chain in $R[x]$ that is longer by one step ([[lem-polynomial-ring-dimension-lower-chain]]).

[L2] Every prime chain in $R[x]$ has length at most $\dim R+1$ ([[lem-polynomial-ring-dimension-upper-bound]]).

## Proof

**Proof technique:** direct.

1.1 Fact [L1] gives $\dim R[x]\ge \dim R+1$. [L1, given]

1.2 Fact [L2] gives $\dim R[x]\le \dim R+1$. [L2, given]

2.1 Therefore $\dim R[x]=\dim R+1$. [step 1.1, step 1.2] ∎
