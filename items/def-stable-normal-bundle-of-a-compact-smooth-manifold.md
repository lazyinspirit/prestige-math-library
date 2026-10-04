---
id: def-stable-normal-bundle-of-a-compact-smooth-manifold
kind: definition
title: "Stable normal bundle of a compact smooth manifold"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: ["def-normal-and-conormal-bundles-of-an-embedded-submanifold", "prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle", "def-countable-choice"]
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology, Chapter 23 §§3–4"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "printed pp.191–193; tangent/normal complement and stable normal data"
    - title: "Hatcher, Vector Bundles and K-Theory"
      url: "https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf"
      locator: "Theorem 1.6, printed pp.20–21; endpoint bundle transport"
    - title: "Lee, Introduction to Smooth Manifolds, tubular neighborhoods"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
      locator: "Tubular Neighborhoods; normal quotient identification"
---

## Definition

For a compact smooth manifold $M$ and a supplied smooth embedding $i:M\hookrightarrow\mathbb R^N$, let $\nu_i=i^*T\mathbb R^N/di(TM)$ be the fibrewise quotient of [[def-normal-and-conormal-bundles-of-an-embedded-submanifold]], in which $di(TM)$ is the image of the tangent bundle. Assume countable choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]), the hypothesis carried by the ambient-metric identification below. When $M$ has empty boundary, [[prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle]] identifies $\nu_i$ with the orthogonal complement $(di(TM))^\perp$ of the Euclidean metric, smoothly over $S=M$, and then $TM\oplus\nu_i\cong\varepsilon^N$; for a compact $M$ with boundary the same fibrewise orthogonal projection is smooth in half-space charts and the identification is used in that form by the following theorem. This inherited hypothesis is the only choice used here.

The stable normal bundle is the equivalence class of these bundles under adding trivial real summands: $E$ and $F$ are equivalent when $E\oplus\varepsilon^a\cong F\oplus\varepsilon^b$ for some finite $a,b$. This relation is reflexive and symmetric, and it is transitive because $E\oplus\varepsilon^a\cong F\oplus\varepsilon^b$ and $F\oplus\varepsilon^c\cong G\oplus\varepsilon^d$ give $E\oplus\varepsilon^{a+c}\cong G\oplus\varepsilon^{b+d}$; independence of the embedding is proved in the following theorem. A normal structure on $M$ additionally includes its specified bundle identification with $\nu_i$, and a framing is an actual trivialization of the normal bundle, not merely stable triviality.
