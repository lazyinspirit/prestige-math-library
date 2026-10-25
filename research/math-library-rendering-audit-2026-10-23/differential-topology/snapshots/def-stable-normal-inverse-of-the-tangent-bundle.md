---
id: def-stable-normal-inverse-of-the-tangent-bundle
kind: definition
title: "Stable normal inverse of the tangent bundle"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: ["def-smooth-manifold", "def-tangent-bundle-as-a-disjoint-union", "def-smooth-vector-bundle-rank-fibre-and-trivial-bundle", "def-whitney-sum-of-vector-bundles", "def-vector-bundle-map-section-subbundle-and-isomorphism", "def-stable-normal-bundle-of-a-compact-smooth-manifold", "def-smooth-embedding", "def-countable-choice"]
justified_by: ["lem-an-embedding-into-r-n-gives-the-same-normal-bundle-identity"]
dependency_level: 0
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Ralph L. Cohen, Immersions of Manifolds and Homotopy Theory (lecture notes, 30 June 2022; complete 46-page text)"
      url: "https://math.stanford.edu/~ralph/immersions-final.pdf"
      locator: "SS1-3.1, PDF pp. 4-13: Proposition 1, Theorem 2 (Hirsch-Smale), Corollary 3 (k-dimensional inverse of the tangent bundle), Theorems 4-5, Corollary 10 (normal Stiefel-Whitney nonimmersion test) and the RP^{2^k} example, Theorem 11 (Massey)"
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy (author draft, complete 568-page text)"
      url: "https://math.stanford.edu/~ralph/bookR4.pdf"
      locator: "SS7.2, printed pp. 226-232: Whitney Theorems 7.2-7.3, the RP^{2^k} embedding obstruction (Proposition 7.4), Hirsch-Smale Theorem 7.5, Corollary 7.6 (existence of an immersion iff a k-dimensional inverse bundle exists) and Theorem 7.7"
    - title: "John W. Milnor and James D. Stasheff, Characteristic Classes (Annals of Mathematics Studies 74, Princeton University Press; complete text)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "SS4, printed pp. 43-48 (Lemma 4.4, Theorem 4.5, Corollary 4.6, the immersion paragraph, Theorem 4.8); SS11, printed pp. 119-136 (Theorem 11.3, Corollary 11.12, Wu's formula and Corollary 11.15); SS15, printed pp. 173-178 (Theorem 15.3, Corollary 15.5, Corollary 15.8)"
---

## Definition

Let $M$ be a smooth $m$-manifold ([[def-smooth-manifold]]). A **stable normal inverse of the tangent bundle** is a pair $(\nu,\varphi)$ consisting of a smooth real vector bundle $\nu\to M$ of finite rank $k$ ([[def-smooth-vector-bundle-rank-fibre-and-trivial-bundle]]) and a smooth bundle isomorphism
$$\varphi:TM\oplus\nu\longrightarrow\varepsilon^{m+k}$$
onto the trivial real bundle $\varepsilon^{m+k}=M\times\mathbb R^{m+k}$ ([[def-tangent-bundle-as-a-disjoint-union]], [[def-whitney-sum-of-vector-bundles]], [[def-vector-bundle-map-section-subbundle-and-isomorphism]]). A **rank-$k$ stable normal inverse** is one whose bundle has rank $k$; when the rank is not named, $k=\operatorname{rank}\nu$. Two stable normal inverses $(\nu_0,\varphi_0)$, $(\nu_1,\varphi_1)$ are **stably equivalent** when $\nu_0\oplus\varepsilon^{a}\cong\nu_1\oplus\varepsilon^{b}$ for some $a,b\ge0$. Adding a trivial summand, $(\nu,\varphi)\mapsto(\nu\oplus\varepsilon^{1},\varphi\oplus\operatorname{id}_{\varepsilon^{1}})$, carries rank-$k$ inverses to rank-$(k+1)$ inverses and preserves stable equivalence.

This is the inverse-bundle form of the published stable normal bundle [[def-stable-normal-bundle-of-a-compact-smooth-manifold]]: under $\mathrm{AC}_\omega$, for compact $M$ and a smooth embedding $i:M\hookrightarrow\mathbb R^N$ with $N\ge m$, the normal bundle gives a rank-$(N-m)$ example with $TM\oplus\nu_i\cong\varepsilon^N$ (the $N>m$ case is [[lem-an-embedding-into-r-n-gives-the-same-normal-bundle-identity]]; for $N=m$, $di$ is a fibrewise isomorphism and the normal quotient is the zero bundle). The dimension qualification is needed for an empty source, whose fibrewise immersion condition alone imposes no dimension inequality. Under $\mathrm{AC}_\omega$ every closed smooth $M$ has such an inverse by [[lem-an-embedding-into-r-n-gives-the-same-normal-bundle-identity]]. The converse statement that every stable normal inverse is stably isomorphic to the normal bundle of an embedding is the stable classification statement; it is neither asserted nor used on this page. No choice principle is part of the definition; $\mathrm{AC}_\omega$ enters only through the metric and tubular identifications of the cited embedding lemma.
