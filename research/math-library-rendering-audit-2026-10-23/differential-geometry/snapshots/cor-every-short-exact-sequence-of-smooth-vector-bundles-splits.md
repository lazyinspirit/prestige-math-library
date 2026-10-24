---
id: cor-every-short-exact-sequence-of-smooth-vector-bundles-splits
kind: corollary
title: "Every short exact sequence of smooth vector bundles splits"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-constant-rank-kernels-and-images-of-bundle-maps-over-one-base-are-subbundles, cor-every-vector-subbundle-has-a-smooth-complement, prop-the-canonical-map-to-a-quotient-bundle-is-a-smooth-bundle-map, prop-a-fibrewise-bijective-smooth-bundle-map-over-a-diffeomorphism-is-a-bundle-isomorphism, def-countable-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-10-maintenance-receipts.jsonl (cor-every-short-exact-sequence-of-smooth-vector-bundles-splits). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---
## Statement

Assume the Axiom of Countable Choice. Every short exact sequence of smooth vector bundles over one base,

$$0\to E\xrightarrow{i}G\xrightarrow{q}F\to 0,$$

admits a smooth splitting $s:F\to G$ with $q\circ s=\operatorname{id}_F$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and a short exact sequence of smooth vector bundles over one base $M$.

[L1] Constant-rank kernels and images of bundle maps over one base are smooth subbundles ([[prop-constant-rank-kernels-and-images-of-bundle-maps-over-one-base-are-subbundles]]).

[L2] Under Countable Choice, every vector subbundle has a smooth complement ([[cor-every-vector-subbundle-has-a-smooth-complement]], [[def-countable-choice]]).

[L3] A fibrewise bijective smooth bundle map over the identity is a bundle isomorphism ([[prop-a-fibrewise-bijective-smooth-bundle-map-over-a-diffeomorphism-is-a-bundle-isomorphism]]).

## Proof

**Proof technique:** direct.

1.1 Exactness gives $i(E)=\ker q\subseteq G$. By [L1], this image is a smooth subbundle of $G$. Choose a smooth complement $H\subseteq G$ to $i(E)$ by [L2], so $G_p=i(E_p)\oplus H_p$ for every $p\in M$. [L1, L2, given, choose]

2.1 Because $\ker(q|_{H_p})=H_p\cap i(E_p)=0$ and $q_p$ is surjective, $q|_H:H\to F$ is fibrewise bijective. By [L3] it is a smooth bundle isomorphism, so its inverse $s:F\to H\subseteq G$ is smooth and satisfies $q\circ s=\operatorname{id}_F$. Thus the sequence splits. [L3, step 1.1, algebra] ∎
