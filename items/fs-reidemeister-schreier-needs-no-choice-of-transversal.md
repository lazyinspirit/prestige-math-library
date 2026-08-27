---
id: fs-reidemeister-schreier-needs-no-choice-of-transversal
kind: false-statement
title: "FALSE: the Reidemeister-Schreier presentation needs no choice of transversal"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-reidemeister-schreier-presentation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Roger C. Lyndon and Paul E. Schupp, Combinatorial Group Theory"
      url: "https://www.scribd.com/document/384118619/CombinatorialGroupTheory"
---

## Statement

The Reidemeister-Schreier presentation of a subgroup does not depend on the
chosen transversal.

## Facts & Assumptions

**Given:** The false claim above.

[L1] Reidemeister-Schreier uses a chosen Schreier system or transversal and rewrites words through its representatives ([[thm-reidemeister-schreier-presentation]]).

## Refutation

**Proof technique:** direct.

1.1 Let $G=F(a,b)=\langle a,b\mid\ \rangle$, and let $H\le G$ be the subgroup of words with even exponent sum in $a$. The two right cosets are $H$ and $Ha$, so both $\{1,a\}$ and $\{1,a^{-1}\}$ are Schreier systems. [given, construct]

2.1 With the Schreier system $\{1,a\}$, the nontrivial Schreier generators are $b$, $a^2$, and $aba^{-1}$. With the Schreier system $\{1,a^{-1}\}$, the corresponding nontrivial Schreier generators are $b$, $a^2$, and $a^{-1}ba$. These are different generator lists. [L1, step 1.1, algebra]

3.1 The subgroup presented is the same subgroup $H$, but the rewritten generators depend on the chosen representatives. Therefore the Reidemeister-Schreier presentation does depend on the transversal. [step 2.1] ∎
