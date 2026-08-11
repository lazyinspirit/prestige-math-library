---
id: cor-finite-section-support-forces-zero-integral
kind: corollary
title: "An integrable function whose sections vanish outside finite sets has multiple integral zero"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-riemann-fubini-on-product-rectangles, def-null-and-content-zero-in-rn]
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
    - title: "J. Lebl, Basic Analysis II, Exercise 10.2.4"
      url: "https://www.jirka.org/ra/realanal2.pdf"
pipeline_run: null
---

## Statement

Let $A\subseteq\mathbb R^p$ and $B\subseteq\mathbb R^q$ be nondegenerate closed rectangles, and let $f:A\times B\to\mathbb R$ be Riemann integrable. If the set
$$S:=\{x\in A:f_x\text{ is not identically }0\}$$
is finite, then $\int_{A\times B}f=0$. The analogous assertion holds with the coordinate blocks exchanged.

## Facts & Assumptions

**Given:** An integrable $f:A\times B\to\mathbb R$ whose nonzero $B$-sections are indexed by a finite set $S$.

[L1] Riemann--Fubini permits a content-zero exceptional set of parameters and identifies the multiple integral with the resulting iterated integral ([[thm-riemann-fubini-on-product-rectangles]]).

[L2] A set has content zero when it admits finite cube covers of arbitrarily small total volume ([[def-null-and-content-zero-in-rn]]).

## Proof

**Proof technique:** direct.

1.1 A finite subset of $\mathbb R^p$ has content zero by [L2]: for a given $\varepsilon>0$, cover its finitely many points by cubes whose total volume is below $\varepsilon$. [L2, given]

2.1 Outside $S$ every section is identically zero and has integral zero. Complete the section-integral function by the value $0$ on $S$ and apply [L1]; the resulting outer function is identically zero, so the multiple integral is zero. [L1, step 1.1]

3.1 If $S$ is empty then $f$ itself is identically zero, and step 2.1 still applies. Exchanging the coordinate blocks proves the symmetric assertion. [step 2.1, algebra] ∎
