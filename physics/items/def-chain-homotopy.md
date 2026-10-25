---
id: def-chain-homotopy
kind: definition
title: "A chain homotopy"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-graded-morphism-of-chain-complexes, def-chain-map, def-hom-complex-of-chain-complexes]
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

Let $C_\bullet,D_\bullet$ be chain complexes in an abelian category
$\mathcal A$, and let $f,g:C_\bullet\to D_\bullet$ be chain maps. A **chain homotopy**
$s:f\simeq g$ is a graded morphism of degree $1$,
$$s_n:C_n\to D_{n+1},$$
such that for every $n\in\mathbb Z$,
$$f_n-g_n=d^D_{n+1}s_n+s_{n-1}d^C_n.$$

Equivalently, $f-g$ is the degree-$0$ boundary of the degree-$1$ family $s$ in
[[def-hom-complex-of-chain-complexes]].
