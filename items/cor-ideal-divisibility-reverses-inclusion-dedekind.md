---
id: cor-ideal-divisibility-reverses-inclusion-dedekind
kind: corollary
title: "For Dedekind ideals, divisibility reverses inclusion"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-unique-factorisation-of-ideals-in-dedekind-domains]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. P. May, Notes on Dedekind Rings"
      url: "https://www.math.uchicago.edu/~may/MISC/Dedekind.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, §20"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice.

Let $R$ be a Dedekind domain and let $I,J\subseteq R$ be nonzero integral ideals. Then $I\supseteq J$ if and only if $I$ divides $J$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a Dedekind domain $R$, and nonzero integral ideals $I,J$.

[L1] Nonzero fractional ideals factor uniquely into prime powers, and every integral ideal has nonnegative exponents ([[thm-unique-factorisation-of-ideals-in-dedekind-domains]]).

## Proof

**Proof technique:** direct.

1.1 Write $I=\prod_{\mathfrak p}\mathfrak p^{a_{\mathfrak p}}$ and $J=\prod_{\mathfrak p}\mathfrak p^{b_{\mathfrak p}}$ with $a_{\mathfrak p},b_{\mathfrak p}\ge0$ by [L1]. Then $I\supseteq J$ exactly when $a_{\mathfrak p}\le b_{\mathfrak p}$ for every $\mathfrak p$, and that coordinatewise inequality is exactly the condition that $J=I\prod_{\mathfrak p}\mathfrak p^{b_{\mathfrak p}-a_{\mathfrak p}}$. [L1, given, algebra]

2.1 Therefore $I\supseteq J$ if and only if $I$ divides $J$. [step 1.1] ∎
