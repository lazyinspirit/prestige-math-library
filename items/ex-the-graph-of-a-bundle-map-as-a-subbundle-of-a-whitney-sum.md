---
id: ex-the-graph-of-a-bundle-map-as-a-subbundle-of-a-whitney-sum
kind: example
title: "The graph of a bundle map as a subbundle of a Whitney sum"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-whitney-sums-are-smooth-vector-bundles, prop-sections-of-hom-are-the-same-as-smooth-fibrewise-linear-maps, prop-constant-rank-kernels-and-images-of-bundle-maps-over-one-base-are-subbundles]
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
## Example

If $\Phi:E\to F$ is a smooth vector bundle map over $\operatorname{id}_M$, then
its graph

$$\Gamma_\Phi:=\{(e,\Phi(e)):e\in E\}\subseteq E\oplus F$$

is a smooth vector subbundle of the Whitney sum.

## Facts & Assumptions

**Given:** A smooth bundle map $\Phi:E\to F$ over one base $M$.

[L1] The Whitney sum $E\oplus F$ is a smooth vector bundle
([[thm-whitney-sums-are-smooth-vector-bundles]]).

[L2] Constant-rank images of bundle maps over one base are smooth subbundles
([[prop-constant-rank-kernels-and-images-of-bundle-maps-over-one-base-are-subbundles]]).

## Verification

**Proof technique:** direct.

1.1 Define $G:E\to E\oplus F$ by $G(e)=(e,\Phi(e))$. This is a smooth bundle map over $\operatorname{id}_M$, and each fibre map $G_p(v)=(v,\Phi_p(v))$ is injective, hence has constant rank $\operatorname{rank}E$. [L1, given, construct]
2.1 The image of $G$ is exactly the graph $\Gamma_\Phi$. Therefore [L2] implies that $\Gamma_\Phi$ is a smooth vector subbundle of $E\oplus F$. [L2, step 1.1] ∎