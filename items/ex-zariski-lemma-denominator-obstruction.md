---
id: ex-zariski-lemma-denominator-obstruction
kind: example
title: "A new irreducible denominator stays outside a finitely generated subalgebra of k(t)"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-zariski-lemma-one-variable-localisation-not-finite]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Theorem 13.1"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Example

In the subalgebra $B=k[t,1/t]\subseteq k(t)$, the element $1/(t-1)$ does not
belong to $B$.

## Facts & Assumptions

**Given:** A field $k$, the rational function field $k(t)$, and the subalgebra $B=k[t,1/t]$.

[L1] The one-variable denominator obstruction says that finitely many allowed denominator factors cannot generate all of $k(t)$ over $k[t]$ ([[lem-zariski-lemma-one-variable-localisation-not-finite]]).

## Verification

**Proof technique:** direct.

1.1 Every element of $B$ can be written as $h/t^m$ with $h\in k[t]$ and $m\ge 0$. Thus only powers of $t$ occur in the denominator. [given]

2.1 If $1/(t-1)$ belonged to $B$, then $1/(t-1)=h/t^m$ for some $h\in k[t]$. Cross-multiplication would give $t^m=h(t-1)$, so $t-1$ would divide $t^m$. But substituting $t=1$ gives $1=0$, impossible. This is the concrete obstruction behind [L1]. [L1, step 1.1] ∎
