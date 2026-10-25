---
id: cor-bracelet-count-via-cycle-index
kind: corollary
title: "Bracelet count from the dihedral-group cycle index"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-polya-enumeration-theorem,
       thm-cycle-index-of-dihedral-group]
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

For integers $n \ge 1$ and $m \ge 1$, the number of length-$n$ bracelets over
an $m$-letter alphabet is:

- if $n$ is odd,

  $$\frac{1}{2n}\sum_{d \mid n}\varphi(d)m^{n/d}+\frac12 m^{(n+1)/2};$$

- if $n$ is even,

  $$\frac{1}{2n}\sum_{d \mid n}\varphi(d)m^{n/d}+\frac14\left(m^{n/2}+m^{n/2+1}\right).$$

## Facts & Assumptions

**Given:** integers $n \ge 1$ and $m \ge 1$.

[L1] Pólya's theorem counts colourings up to the acting symmetry group by evaluating the cycle index at the number of colours ([[thm-polya-enumeration-theorem]]).

[L2] The dihedral cycle index is the odd/even formula of [[thm-cycle-index-of-dihedral-group]].

## Proof

**Proof technique:** direct.

1.1 A bracelet is a colouring of a labelled $n$-gon up to all dihedral symmetries, so [L1] counts it by evaluating $Z(D_{2n})$ at $s_d=m$ for all $d$. [L1, construct]

2.1 Substitute $s_d=m$ into the odd case of [L2]. Since $s_1s_2^{(n-1)/2}$ becomes $m^{(n+1)/2}$, the odd-$n$ bracelet count is $\frac{1}{2n}\sum_{d \mid n}\varphi(d)m^{n/d}+\frac12 m^{(n+1)/2}$. [step 1.1, L2, algebra]

2.2 Substitute $s_d=m$ into the even case of [L2]. The two reflection monomials become $m^{n/2+1}$ and $m^{n/2}$, giving $\frac{1}{2n}\sum_{d \mid n}\varphi(d)m^{n/d}+\frac14\left(m^{n/2}+m^{n/2+1}\right)$. [step 1.1, L2, algebra]

3.1 Steps 2.1 and 2.2 are the two parity cases for $n$, so they prove the stated bracelet formulas. [step 2.1, step 2.2] ∎
