---
id: def-mapping-cone-of-a-chain-map
kind: definition
title: "The mapping cone of a chain map"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-chain-map, def-shift-of-a-chain-complex, thm-the-category-of-complexes-in-an-additive-category-is-additive]
justified_by: [lem-the-mapping-cone-differential-squares-to-zero]
verification:
  audited: 2026-08-31
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
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

Let $f:C_\bullet\to D_\bullet$ be a chain map in an additive category. The
**mapping cone** of $f$ is the chain complex $\operatorname{Cone}(f)_\bullet$
whose degree-$n$ term is
$$\operatorname{Cone}(f)_n:=D_n\oplus C[1]_n=D_n\oplus C_{n-1},$$
and whose differential is
$$d_n^{\operatorname{Cone}(f)}(y,x):=(d_n^D(y)+f_{n-1}(x),-d_{n-1}^C(x)).$$

Thus $\operatorname{Cone}(f)$ is the direct sum of $D$ and the shift $C[1]$ as
a graded object, with the off-diagonal term given by $f$.
