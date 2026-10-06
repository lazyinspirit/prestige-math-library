---
id: lem-an-embedding-into-r-n-gives-the-same-normal-bundle-identity
kind: lemma
title: "An embedding into Euclidean space gives a rank-(n-m) stable normal inverse"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: ["def-stable-normal-inverse-of-the-tangent-bundle", "def-normal-and-conormal-bundles-of-an-embedded-submanifold", "prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle", "def-stable-normal-bundle-of-a-compact-smooth-manifold", "thm-every-smooth-manifold-embeds-in-some-finite-dimensional-euclidean-space", "def-countable-choice", "lem-pullback-of-a-trivial-smooth-vector-bundle-is-canonically-trivial", "thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure", "def-induced-tangent-bundle-chart", "def-smooth-vector-bundle-rank-fibre-and-trivial-bundle"]
justified_by: []
dependency_level: 1
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "John W. Milnor and James D. Stasheff, Characteristic Classes (Annals of Mathematics Studies 74, Princeton University Press; complete text)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "SS4, printed pp. 43-48 (Lemma 4.4, Theorem 4.5, Corollary 4.6, the immersion paragraph, Theorem 4.8); SS11, printed pp. 119-136 (Theorem 11.3, Corollary 11.12, Wu's formula and Corollary 11.15); SS15, printed pp. 173-178 (Theorem 15.3, Corollary 15.5, Corollary 15.8)"
    - title: "Ralph L. Cohen, Immersions of Manifolds and Homotopy Theory (lecture notes, 30 June 2022; complete 46-page text)"
      url: "https://math.stanford.edu/~ralph/immersions-final.pdf"
      locator: "SS1-3.1, PDF pp. 4-13: Proposition 1, Theorem 2 (Hirsch-Smale), Corollary 3 (k-dimensional inverse of the tangent bundle), Theorems 4-5, Corollary 10 (normal Stiefel-Whitney nonimmersion test) and the RP^{2^k} example, Theorem 11 (Massey)"
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy (author draft, complete 568-page text)"
      url: "https://math.stanford.edu/~ralph/bookR4.pdf"
      locator: "SS7.2, printed pp. 226-232: Whitney Theorems 7.2-7.3, the RP^{2^k} embedding obstruction (Proposition 7.4), Hirsch-Smale Theorem 7.5, Corollary 7.6 (existence of an immersion iff a k-dimensional inverse bundle exists) and Theorem 7.7"
---

## Statement

Assume countable choice $\mathrm{AC}_\omega$. Let $i:M^m\hookrightarrow\mathbb R^n$ be a smooth embedding of a closed smooth $m$-manifold with $n>m$, and let $\nu_i=i^*T\mathbb R^n/di(TM)$ be its normal quotient, identified with the orthogonal complement of $di(TM)$ by a Euclidean metric ([[def-normal-and-conormal-bundles-of-an-embedded-submanifold]], [[prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle]]). Then $\nu_i$ is a smooth real bundle of rank $n-m$, and the orthogonal splitting together with the canonical trivialization $i^*T\mathbb R^n\cong\varepsilon^n$ gives a smooth bundle isomorphism $\varphi:TM\oplus\nu_i\to\varepsilon^n$. Hence $(\nu_i,\varphi)$ is a rank-$(n-m)$ stable normal inverse of $M$ in the sense of [[def-stable-normal-inverse-of-the-tangent-bundle]]. Consequently every closed smooth $m$-manifold admits a stable normal inverse: apply [[thm-every-smooth-manifold-embeds-in-some-finite-dimensional-euclidean-space]] to obtain an embedding into some $\mathbb R^N$. The countable-choice hypothesis is exactly the one inherited from the metric and tubular identifications of the published embedding normal-bundle definition; no further choice is made.

## Facts & Assumptions

**Given:** A smooth embedding $i:M^m\hookrightarrow\mathbb R^n$ of a closed smooth $m$-manifold with $n>m$, and countable choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[F1] The normal-bundle set of the embedded submanifold $M\subseteq\mathbb R^n$ is the fibrewise quotient $\nu=\coprod_{p\in M}T_p\mathbb R^n/T_pM$, with the smooth vector-bundle structure supplied for such quotients; the defining quotient of the pullback, $\nu_i=i^*T\mathbb R^n/di(TM)$, is the same bundle under the canonical identification of $i^*T\mathbb R^n$ with $T\mathbb R^n|_M$ ([[def-normal-and-conormal-bundles-of-an-embedded-submanifold]]).

[F2] Assume $\mathrm{AC}_\omega$; for an embedded submanifold and a Riemannian metric $g$ on the ambient manifold, the quotient map restricts to a smooth bundle isomorphism $TS^\perp\to TM|_S/TS$; for $S=M\subseteq\mathbb R^n$ with the Euclidean metric this identifies $\nu_i$ with the orthogonal complement $di(TM)^\perp$ ([[prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle]]).

[F3] For a compact (in particular closed) smooth $M$ and a smooth embedding $i:M\hookrightarrow\mathbb R^N$ with $N\ge m$, the published normal-bundle definition gives a smooth real bundle $\nu_i$ of rank $N-m$ with $TM\oplus\nu_i\cong\varepsilon^N$; the only choice used is the inherited $\mathrm{AC}_\omega$ of the metric and tubular identifications ([[def-stable-normal-bundle-of-a-compact-smooth-manifold]], [[def-smooth-vector-bundle-rank-fibre-and-trivial-bundle|the rank of the quotient]]).

[F4] Under $\mathrm{AC}_\omega$ the identity chart of $\mathbb R^n$ is a global smooth chart, so its induced tangent-bundle chart trivializes the Euclidean tangent bundle, $T\mathbb R^n\cong\varepsilon^n_{\mathbb R^n}$; pulling this trivialization back along the smooth map $i$ and applying the choice-free product-pullback lemma gives the canonical trivialization $i^*T\mathbb R^n\cong i^*\varepsilon^n_{\mathbb R^n}\cong\varepsilon^n$ ([[thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure]], [[def-induced-tangent-bundle-chart]], [[lem-pullback-of-a-trivial-smooth-vector-bundle-is-canonically-trivial]]).

[F5] Under $\mathrm{AC}_\omega$ every smooth $m$-manifold embeds smoothly into some finite-dimensional Euclidean space ([[thm-every-smooth-manifold-embeds-in-some-finite-dimensional-euclidean-space]]).

[F6] A stable normal inverse of $M$ is a pair $(\nu,\varphi)$ with $\nu\to M$ a smooth real bundle of finite rank $k$ and $\varphi:TM\oplus\nu\to\varepsilon^{m+k}$ a smooth bundle isomorphism; a rank-$k$ stable normal inverse is one with $\operatorname{rank}\nu=k$ ([[def-stable-normal-inverse-of-the-tangent-bundle]], [[def-smooth-vector-bundle-rank-fibre-and-trivial-bundle]]).

## Proof

1.1 Regard $i$ as an embedding of $M$ as an embedded submanifold $i(M)\subseteq\mathbb R^n$ and let $\nu_i$ be its normal quotient as in [F1]. By [F3] the quotient carries a smooth real vector-bundle structure of rank $n-m$; the rank is the difference of the ranks of the ambient tangent bundle of $\mathbb R^n$ and of $di(TM)$, computed fibrewise, and equals $n-m$ because $di$ is fibrewise injective. [F1, F3, F6]

1.2 By [F2] the Euclidean metric identifies the quotient $\nu_i$ with the orthogonal complement $di(TM)^\perp$, which is a smooth subbundle of $i^*T\mathbb R^n$; the orthogonal decomposition of the Euclidean bundle gives $i^*T\mathbb R^n=di(TM)\oplus di(TM)^\perp\cong TM\oplus\nu_i$, where the first summand is identified with $TM$ through the isomorphism $di:TM\to di(TM)$. Composing this isomorphism with the canonical trivialization $i^*T\mathbb R^n\cong\varepsilon^n$ of [F4], which exists because the identity chart of $\mathbb R^n$ trivializes $T\mathbb R^n$ and the product-pullback lemma trivializes its pullback, gives a smooth bundle isomorphism $$\varphi:TM\oplus\nu_i\longrightarrow\varepsilon^n.$$ [F2, F3, F4]

2.1 Since $\nu_i$ has rank $n-m$ by step 1.1 and $\varphi$ is a smooth bundle isomorphism onto $\varepsilon^{n}=\varepsilon^{m+(n-m)}$, the pair $(\nu_i,\varphi)$ is a rank-$(n-m)$ stable normal inverse of $M$ in the sense of [F6]. [F2, F4, F6, step 1.1, step 1.2]

3.1 For existence, let $M$ be any closed smooth $m$-manifold. By [F5] there is a smooth embedding $j:M\hookrightarrow\mathbb R^N$ into some finite-dimensional Euclidean space; the construction above applies to $j$ provided $N>m$. If $N\le m$ for the particular embedding produced, compose with the inclusion $\mathbb R^N\hookrightarrow\mathbb R^{N+1}\hookrightarrow\cdots\hookrightarrow\mathbb R^{m+1}$ (each an embedding of a linear subspace as a closed subset, hence a smooth embedding with $di$ injective) to obtain an embedding into some $\mathbb R^n$ with $n>m$; replacing the ambient metric by the standard Euclidean one leaves the argument unchanged. Applying steps 1.1–2.1 to that embedding produces a stable normal inverse of $M$. The only choice principle used is the $\mathrm{AC}_\omega$ inherited from [F2] and [F5]; the trivialization [F4] is canonical, and no embedding, metric or complement is selected beyond the given ones. [F3, F4, F5, F6, step 1.1, step 1.2, step 2.1] ∎
