---
id: ex-z-five-plus-three-z-plus-one-has-four-zeros-in-the-annulus-one-to-two
kind: example
title: "The same polynomial has four zeros in the annulus 1 < |z| < 2"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-rouche-theorem]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. W. Howell and J. H. Mathews, Complex Analysis, §8.7"
      url: "https://complexanalysis.org/web/sec_argument-rouche.html"
pipeline_run: null
---

## Example

The polynomial $z^5+3z+1$ has exactly four zeros in the annulus $1<|z|<2$.

## Facts & Assumptions

**Given:** The polynomial $p(z)=z^5+3z+1$.

[L1] Rouché's theorem preserves the zero count on a circle
([[thm-rouche-theorem]]).

## Verification

**Proof technique:** direct.

1.1 On the circle $|z|=2$, $$|3z+1|\le 3|z|+1=7<32=|z^5|.$$ So [L1] applied to $p$ and $z^5$ shows that $p$ has five zeros in $|z|<2$, counted with multiplicity. [L1, given, algebra]

1.2 On the circle $|z|=1$, $$|z^5+1|\le 2<3=|3z|.$$ Another application of [L1] shows that $p$ has exactly one zero in $|z|<1$. [L1, given, algebra]

2.1 Therefore the number of zeros in the annulus $1<|z|<2$ is $5-1=4$. [step 1.1, step 1.2] ∎
