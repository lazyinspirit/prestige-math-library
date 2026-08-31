---
id: cor-every-vector-subbundle-has-a-smooth-complement
kind: corollary
title: "Every vector subbundle has a smooth complement"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric, prop-orthogonal-complements-of-subbundles-are-smooth-subbundles]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
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

Every smooth vector subbundle $S\subseteq E$ has a smooth complement in $E$.

## Facts & Assumptions

**Given:** A smooth vector subbundle $S\subseteq E$.

[L1] The bundle $E$ admits a smooth bundle metric
([[thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric]]).

[L2] Orthogonal complements of subbundles are smooth subbundles
([[prop-orthogonal-complements-of-subbundles-are-smooth-subbundles]]).

## Proof

**Proof technique:** direct.

1.1 Choose a smooth bundle metric on $E$ by [L1]. [L1, given, choose]

2.1 With that metric, [L2] gives a smooth subbundle $S^\perp\subseteq E$, and fibrewise one has $E_p=S_p\oplus S_p^\perp$. Thus $S^\perp$ is a smooth complement of $S$. [L2, step 1.1, algebra] ∎