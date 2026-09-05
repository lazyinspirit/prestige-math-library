---
id: fs-vitali-covering-theorem-holds-for-arbitrary-covers
kind: false-statement
title: "FALSE: the Vitali covering theorem holds for arbitrary covers"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-interval, def-vitali-cover-and-fine-cover-on-the-line]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Brian S. Thomson, Vitali Coverings and Lebesgue's Differentiation Theorem"
      url: "https://classicalrealanalysis.info/documents/Thomson-RAE2003-euclid.rae.1149698567.pdf"
---

## Statement

Every interval cover of a set of finite outer measure has a countable disjoint
subfamily that covers the set up to a null remainder.

## Facts & Assumptions

**Given:** The statement above.

[A1] We use a cover that is not fine.

## Refutation

**Proof technique:** direct.

1.1 Consider the cover of $[0,1]$ by all intervals $[0,t]$ and $[t,1]$ with $0<t<1$. It covers every point of $[0,1]$, but it is not fine: for an interior point $x$, every interval in the cover that contains $x$ has length at least $\min\{x,1-x\}$. [given]

2.1 Any two left intervals intersect, and any two right intervals intersect, so a disjoint subfamily contains at most one interval of each type. If it contains only one interval, it obviously misses points of $[0,1]$. If it contains one left interval $[0,s]$ and one right interval $[t,1]$, disjointness forces $s<t$, so the open gap $(s,t)$ is uncovered. Thus no disjoint subfamily covers $[0,1]$ up to a null remainder, and the statement is false. [step 1.1] ∎
