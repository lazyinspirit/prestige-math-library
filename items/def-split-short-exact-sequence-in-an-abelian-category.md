---
id: def-split-short-exact-sequence-in-an-abelian-category
kind: definition
title: "Split short exact sequence in an abelian category"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-exact-sequence-and-short-exact-sequence-in-an-abelian-category,
       def-biproduct]
justified_by: []
landmark: false
verification:
  audited: 2026-08-29
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.5, Definition 12.5.9"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, VIII.4"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: frontier-23
---

## Definition

A short exact sequence
$$0\to A\xrightarrow{i}B\xrightarrow{p}C\to 0$$
in an abelian category is **split** when there exist morphisms
$$s:C\to B,\qquad \pi:B\to A$$
such that
$$p s = 1_C,\qquad \pi i = 1_A,\qquad i \pi + s p = 1_B.$$

Equivalently, the five-tuple $(B,i,s,\pi,p)$ is the biproduct diagram of $A$
and $C$ in the sense of [[def-biproduct]]. The point of the definition is the
displayed compatible structure, not merely an abstract isomorphism
$B \cong A \oplus C$.
