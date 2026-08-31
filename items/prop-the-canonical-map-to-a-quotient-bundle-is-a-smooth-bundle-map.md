---
id: prop-the-canonical-map-to-a-quotient-bundle-is-a-smooth-bundle-map
kind: proposition
title: "The canonical map to a quotient bundle is a smooth bundle map"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-quotient-vector-bundle-by-a-subbundle, thm-a-vector-bundle-quotient-by-a-subbundle-is-a-smooth-vector-bundle, def-vector-bundle-map-over-a-smooth-base-map]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---
## Statement

If $S\subseteq E$ is a smooth vector subbundle, then the fibrewise quotient map
$q:E\to E/S$ is a smooth vector bundle map over $\operatorname{id}_M$, and its
kernel is $S$.

## Facts & Assumptions

**Given:** A smooth vector bundle $E\to M$ and a smooth subbundle $S\subseteq E$.

[L1] The quotient $E/S\to M$ is a smooth vector bundle
([[thm-a-vector-bundle-quotient-by-a-subbundle-is-a-smooth-vector-bundle]]).

## Proof

**Proof technique:** direct.

1.1 In an adapted local frame $(e_1,\dots,e_r)$ with $S$ spanned by the first $k$ vectors, the quotient bundle chart from [L1] identifies $q$ with the map $(p,u,w)\mapsto(p,w)$, where $u\in\mathbb R^k$ and $w\in\mathbb R^{r-k}$. Thus $q$ is smooth and fibrewise linear. [L1, given]
2.1 In the same coordinates, $q(p,u,w)=0$ exactly when $w=0$, which means that the vector lies in the span of $e_1,\dots,e_k$, namely in $S_p$. Therefore $\ker q=S$. [step 1.1, algebra] ∎