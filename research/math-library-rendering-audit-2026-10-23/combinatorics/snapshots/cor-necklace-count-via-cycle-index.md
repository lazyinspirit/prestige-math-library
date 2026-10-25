---
id: cor-necklace-count-via-cycle-index
kind: corollary
title: "Necklace count from the cyclic-group cycle index"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-polya-enumeration-theorem,
       thm-cycle-index-of-cyclic-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Ben Lynn, Polya Theory: The Cycle Index Polynomial"
      url: "https://theory.stanford.edu/~blynn/polya/cycleindex.html"
pipeline_run: null
---

## Statement

For integers $n \ge 1$ and $m \ge 1$, the number of length-$n$ necklaces over
an $m$-letter alphabet is

$$\frac{1}{n}\sum_{d \mid n}\varphi(d)m^{n/d}.$$

## Facts & Assumptions

**Given:** integers $n \ge 1$ and $m \ge 1$.

[L1] Pólya's theorem counts colourings up to rotation by evaluating the cycle index at the number of colours ([[thm-polya-enumeration-theorem]]).

[L2] The rotation action of $C_n$ has cycle index $Z(C_n)=\frac{1}{n}\sum_{d \mid n}\varphi(d)s_d^{n/d}$ ([[thm-cycle-index-of-cyclic-group]]).

## Proof

**Proof technique:** direct.

1.1 A length-$n$ necklace over an $m$-letter alphabet is exactly a colouring of the vertices of a labelled $n$-gon by $m$ colours, up to the rotation action of $C_n$. [construct]

2.1 By [L1] and [L2], the number of such orbits is $Z(C_n)(m,m,\dots,m)=\frac{1}{n}\sum_{d \mid n}\varphi(d)m^{n/d}$. [step 1.1, L1, L2] ∎
