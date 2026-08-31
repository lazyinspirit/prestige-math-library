---
id: def-mapping-cylinder-of-a-chain-map
kind: definition
title: "The mapping cylinder of a chain map"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-chain-map, def-mapping-cone-of-a-chain-map, thm-the-category-of-complexes-in-an-additive-category-is-additive]
justified_by: [lem-the-mapping-cylinder-differential-squares-to-zero]
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "The Stacks Project, Section 13.9: Cones and termwise split sequences"
      url: "https://stacks.math.columbia.edu/tag/014D"
pipeline_run: frontier-26
---

## Definition

Let $f:C_\bullet\to D_\bullet$ be a chain map. The **mapping cylinder** of $f$
is the chain complex $\operatorname{Cyl}(f)_\bullet$ with degree-$n$ term
$$\operatorname{Cyl}(f)_n:=C_n\oplus D_n\oplus C_{n-1}$$
and differential
$$d_n^{\operatorname{Cyl}(f)}(x,y,z):=(d_n^C(x)+z,d_n^D(y)-f_{n-1}(z),-d_{n-1}^C(z)).$$

The associated maps are
$$i_n(x):=(x,0,0),\qquad p_n(x,y,z):=f_n(x)+y,\qquad j_n(y):=(0,y,0).$$
Thus $i:C\to\operatorname{Cyl}(f)$, $p:\operatorname{Cyl}(f)\to D$, and $j:D\to\operatorname{Cyl}(f)$ satisfy $pi=f$ and $pj=1_D$.
