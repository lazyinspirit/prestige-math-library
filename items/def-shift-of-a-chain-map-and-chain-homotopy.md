---
id: def-shift-of-a-chain-map-and-chain-homotopy
kind: definition
title: "Shifted chain maps and shifted chain homotopies"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-shift-of-a-chain-complex, def-chain-map, def-chain-homotopy]
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "The Stacks Project, Section 12.14: Homotopy and the shift functor"
      url: "https://stacks.math.columbia.edu/tag/0119"
pipeline_run: frontier-25
---

## Definition

Let $f:C_\bullet\to D_\bullet$ be a chain map and let $k\in\mathbb Z$. The
**shifted chain map**
$$f[k]:C[k]_\bullet\to D[k]_\bullet$$
is defined degreewise by
$$f[k]_n:=f_{n-k}.$$

If $s:f\simeq g$ is a chain homotopy, its **shifted chain homotopy**
$$s[k]:f[k]\simeq g[k]$$
is the degree-$1$ family
$$s[k]_n:=(-1)^k s_{n-k}.$$

With these conventions,
$$f[k]-g[k]=d^{D[k]}s[k]+s[k]d^{C[k]}.$$
