---
id: def-normal-bundle-of-a-formal-immersion
kind: definition
title: "Normal bundle of a formal immersion"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-formal-immersion-between-smooth-manifolds, def-quotient-vector-bundle-by-a-subbundle, thm-a-vector-bundle-quotient-by-a-subbundle-is-a-smooth-vector-bundle, def-pullback-vector-bundle-as-a-fibre-product, thm-the-pullback-fibre-product-is-a-smooth-vector-bundle, def-vector-bundle-map-over-a-smooth-base-map, thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric, prop-orthogonal-complements-of-subbundles-are-smooth-subbundles, prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle, def-normal-and-conormal-bundles-of-an-embedded-submanifold, def-countable-choice]
justified_by: [lem-formal-immersion-gives-the-tangent-normal-bundle-identity]
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy, Ch. 7 §2 “Obstructions to the existence of embeddings and immersions, the Hirsch–Smale theorem”, printed pp. 226–232 (Theorem 7.5, Corollary 7.6)"
      url: http://math.stanford.edu/~ralph/bookR4.pdf
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery, Ch. 7 §7.4 “The Smale–Hirsch classification of immersions”, printed pp. 142–146 (Theorem 7.35, Proposition 7.39)"
      url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
dependency_level: 1
---

## Definition

Let $(f,F)$ be a formal immersion from $M^m$ to $N^n$. The **normal bundle of the formal immersion** is the quotient vector bundle $$\nu_F:=f^*TN\big/F(TM)$$ over $M$, of rank $n-m$ when $m\le n$, where $f^*TN=M\times_{f}TN$ is the pullback bundle and $F(TM)\subseteq f^*TN$ is the image subbundle (a smooth subbundle because $F$ is a fibrewise injective bundle map over $f$). If $M=\varnothing$ and $m>n$, the quotient is the empty bundle, which we regard as rank zero; no negative rank is assigned. If a smooth bundle metric is chosen on $f^*TN$, the fibrewise orthogonal complement of $F(TM)$ is a smooth subbundle of $f^*TN$ that represents $\nu_F$ canonically and identifies it with the orthogonal normal bundle; different metrics give canonically isomorphic orthogonal complements, so the isomorphism class of $\nu_F$ is intrinsic. When $(f,F)=(f,df)$ for a genuine immersion, $\nu_{df}$ is the normal bundle of the immersion, whose isomorphism class agrees with the normal bundle of the embedded image when the immersion is an embedding.
