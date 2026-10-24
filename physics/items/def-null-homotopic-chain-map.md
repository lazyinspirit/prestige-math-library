---
id: def-null-homotopic-chain-map
kind: definition
title: "A null-homotopic chain map"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-chain-homotopy, def-hom-complex-of-chain-complexes]
verification:
  audited: 2026-08-31
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "Joseph J. Rotman, An Introduction to Homological Algebra, 2nd ed."
      url: "https://dokumen.pub/an-introduction-to-homological-algebra-2nbsped-9780387245270-9780387683249.html"
pipeline_run: frontier-25
---

## Definition

Let $C_\bullet,D_\bullet$ be chain complexes in an abelian category. A chain
map $f:C_\bullet\to D_\bullet$ is **null-homotopic** if it is chain
homotopic to the zero chain map.

Equivalently, there is a degree-$1$ graded morphism $s:C_\bullet\to D_\bullet$
such that
$$f_n=d^D_{n+1}s_n+s_{n-1}d^C_n$$
for every $n\in\mathbb Z$, so $f$ is a degree-$0$ boundary in
$\underline{\operatorname{Hom}}(C,D)_\bullet$.
