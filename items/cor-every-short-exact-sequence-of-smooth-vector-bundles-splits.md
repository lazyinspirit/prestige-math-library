---
id: cor-every-short-exact-sequence-of-smooth-vector-bundles-splits
kind: corollary
title: "Every short exact sequence of smooth vector bundles splits"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-constant-rank-kernels-and-images-of-bundle-maps-over-one-base-are-subbundles, cor-every-vector-subbundle-has-a-smooth-complement, prop-the-canonical-map-to-a-quotient-bundle-is-a-smooth-bundle-map, prop-a-fibrewise-bijective-smooth-bundle-map-over-a-diffeomorphism-is-a-bundle-isomorphism]
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

Every short exact sequence of smooth vector bundles over one base,

$$0\to E\xrightarrow{i}G\xrightarrow{q}F\to 0,$$

admits a smooth splitting $s:F\to G$ with $q\circ s=\operatorname{id}_F$.

## Facts & Assumptions

**Given:** A short exact sequence of smooth vector bundles over one base $M$.

[L1] Constant-rank kernels and images of bundle maps over one base are smooth
subbundles ([[prop-constant-rank-kernels-and-images-of-bundle-maps-over-one-base-are-subbundles]]).

[L2] Every vector subbundle has a smooth complement
([[cor-every-vector-subbundle-has-a-smooth-complement]]).

[L3] A fibrewise bijective smooth bundle map over the identity is a bundle
isomorphism ([[prop-a-fibrewise-bijective-smooth-bundle-map-over-a-diffeomorphism-is-a-bundle-isomorphism]]).

## Proof

**Proof technique:** direct.

1.1 Exactness gives $i(E)=\ker q\subseteq G$. By [L1], this image is a smooth subbundle of $G$. Choose a smooth complement $H\subseteq G$ to $i(E)$ by [L2], so $G_p=i(E_p)\oplus H_p$ for every $p\in M$. [L1, L2, given, choose]
2.1 Because $\ker(q|_{H_p})=H_p\cap i(E_p)=0$ and $q_p$ is surjective, $q|_H:H\to F$ is fibrewise bijective. By [L3] it is a smooth bundle isomorphism, so its inverse $s:F\to H\subseteq G$ is smooth and satisfies $q\circ s=\operatorname{id}_F$. Thus the sequence splits. [L3, step 1.1, algebra] ∎