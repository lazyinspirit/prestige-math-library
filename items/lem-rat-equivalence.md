---
id: lem-rat-equivalence
kind: lemma
title: "The rational-defining relation is an equivalence relation"
status: draft
origin: session
deps: [def-rationals, thm-int-comm-ring, lem-int-cancellation]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §4.2"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

The relation $(a,b) \sim (c,d) \iff ad = cb$ on pairs of integers with
nonzero second component ([[def-rationals]]) is an equivalence relation.

## Facts & Assumptions

**Given:** Pairs $(a,b), (c,d), (e,f)$ of integers with $b, d, f \ne 0$.

[L1] $\mathbb{Z}$ is a commutative ring ([[thm-int-comm-ring]]).

[L2] Multiplicative cancellation in $\mathbb{Z}$: $ud = vd$ with $d \ne 0$ implies $u = v$ ([[lem-int-cancellation]]).

## Proof

**Proof technique:** direct.

1.1 Reflexivity: $ab = ba$, so $(a,b) \sim (a,b)$. [L1]

1.2 Symmetry: if $ad = cb$ then $cb = ad$, which is the defining equation for $(c,d) \sim (a,b)$. [L1]

1.3 Suppose $(a,b) \sim (c,d)$ and $(c,d) \sim (e,f)$, i.e. $ad = cb$ and $cf = ed$. [given]

2.1 Multiplying the first equation by $f$ and the second by $b$: $adf = cbf$ and $cfb = edb$. [step 1.3, L1]

3.1 Chaining: $(af)d = adf = cbf = cfb = edb = (eb)d$. [step 2.1, L1]

4.1 Cancelling the nonzero $d$: $af = eb$, so $(a,b) \sim (e,f)$; the relation is transitive. [step 3.1, L2]

5.1 The relation is reflexive, symmetric, and transitive, hence an equivalence relation. [step 1.1, step 1.2, step 4.1] ∎
