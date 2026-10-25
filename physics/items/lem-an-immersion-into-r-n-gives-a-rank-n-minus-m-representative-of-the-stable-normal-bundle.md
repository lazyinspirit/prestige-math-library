---
id: lem-an-immersion-into-r-n-gives-a-rank-n-minus-m-representative-of-the-stable-normal-bundle
kind: lemma
title: "An immersion into R^n gives a rank-(n-m) representative of the stable normal bundle"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: ["def-stable-normal-inverse-of-the-tangent-bundle", "def-formal-immersion-between-smooth-manifolds", "def-normal-bundle-of-a-formal-immersion", "lem-formal-immersion-gives-the-tangent-normal-bundle-identity", "def-immersion-submersion-and-constant-rank-map", "def-countable-choice", "lem-pullback-of-a-trivial-smooth-vector-bundle-is-canonically-trivial", "thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure", "def-induced-tangent-bundle-chart"]
justified_by: []
dependency_level: 3
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  precheck: pass
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

## Statement

Assume $\mathrm{AC}_\omega$. Let $f:M^m\looparrowright\mathbb R^n$ be a smooth immersion of a closed smooth $m$-manifold with $n>m$, so that $(f,df)$ is a formal immersion and $\nu_f=f^*T\mathbb R^n/df(TM)$ is its normal bundle of rank $n-m$ ([[def-formal-immersion-between-smooth-manifolds]], [[def-normal-bundle-of-a-formal-immersion]]). Then the splitting of the tangent-normal sequence of [[lem-formal-immersion-gives-the-tangent-normal-bundle-identity]] gives a smooth bundle isomorphism $TM\oplus\nu_f\to f^*T\mathbb R^n$, which under the canonical trivialization $f^*T\mathbb R^n\cong\varepsilon^n$ becomes a smooth isomorphism $\varphi:TM\oplus\nu_f\to\varepsilon^n$. Hence $(\nu_f,\varphi)$ is a rank-$(n-m)$ stable normal inverse of $M$ in the sense of [[def-stable-normal-inverse-of-the-tangent-bundle]]: an immersion of codimension $n-m$ supplies an actual rank-$(n-m)$ representative of the inverse normal class, not merely a stable one. The choice hypothesis is inherited from the bundle-metric splitting in the normal-bundle construction.

## Facts & Assumptions

**Given:** A smooth immersion $f:M^m\looparrowright\mathbb R^n$ of a closed smooth $m$-manifold with $n>m$, and countable choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[F1] A smooth map $f$ is an immersion exactly when $(f,df)$ is a formal immersion; a formal immersion from $M^m$ to $N^n$ is a smooth map together with a fibrewise injective smooth bundle map over it, and, when $M$ is nonempty, necessarily $m\le n$ ([[def-immersion-submersion-and-constant-rank-map]], [[def-formal-immersion-between-smooth-manifolds]]).

[F2] For a formal immersion $(f,F)$ from $M^m$ to $N^n$, the normal bundle $\nu_F=f^*TN/F(TM)$ is a smooth quotient bundle of rank $n-m$ over $M$ when $m\le n$; if $M=\varnothing$ and $m>n$, it is the empty rank-zero bundle; it is intrinsic up to canonical isomorphism, and for $(f,F)=(f,df)$ with $f$ a genuine immersion it is the normal bundle of the immersion ([[def-normal-bundle-of-a-formal-immersion]]).

[F3] For every formal immersion $(f,F)$ the quotient map fits into the short exact sequence of smooth bundles $0\to TM\xrightarrow{F}f^*TN\to\nu_F\to0$ over $M$, which splits: a smooth complement of $F(TM)$ restricts to an isomorphism onto $\nu_F$ and yields a smooth bundle isomorphism $TM\oplus\nu_F\to f^*TN$ restricting to $F$ on the tangent summand. If a smooth bundle metric on $f^*TN$ is chosen, the orthogonal complement $F(TM)^\perp$ is a canonical complement for that metric ([[lem-formal-immersion-gives-the-tangent-normal-bundle-identity]]). The splitting in the general case uses the metric and inherits $\mathrm{AC}_\omega$.

[F4] Under $\mathrm{AC}_\omega$ the identity chart of $\mathbb R^n$ is a global smooth chart, so its induced tangent-bundle chart trivializes the Euclidean tangent bundle, $T\mathbb R^n\cong\varepsilon^n_{\mathbb R^n}$; pulling this trivialization back along $f$ and applying the choice-free product-pullback lemma gives the canonical trivialization $f^*T\mathbb R^n\cong f^*\varepsilon^n_{\mathbb R^n}\cong\varepsilon^n$ ([[thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure]], [[def-induced-tangent-bundle-chart]], [[lem-pullback-of-a-trivial-smooth-vector-bundle-is-canonically-trivial]]).

[F5] A stable normal inverse of $M$ is a pair $(\nu,\varphi)$ with $\nu\to M$ a smooth real vector bundle of finite rank $k$ and $\varphi:TM\oplus\nu\to\varepsilon^{m+k}$ a smooth bundle isomorphism; a rank-$k$ stable normal inverse is one with $\operatorname{rank}\nu=k$ ([[def-stable-normal-inverse-of-the-tangent-bundle]]).

## Proof

1.1 Since $f$ is an immersion, $(f,df)$ is a formal immersion from $M^m$ to $\mathbb R^n$ by [F1]; in particular $df:TM\to f^*T\mathbb R^n$ is fibrewise injective. By [F2] its normal bundle $\nu_f=f^*T\mathbb R^n/df(TM)$ is a smooth real vector bundle over $M$ of rank $n-m$. [F1, F2]

1.2 By [F3] the quotient sequence $0\to TM\xrightarrow{df}f^*T\mathbb R^n\to\nu_f\to0$ splits: the tangent-normal sequence admits a smooth bundle isomorphism $$s:TM\oplus\nu_f\longrightarrow f^*T\mathbb R^n$$ restricting to $df$ on the tangent summand. The splitting uses a smooth bundle metric on the pullback bundle (whose existence is the countable-choice input of that lemma), so this step uses exactly the hypothesis $\mathrm{AC}_\omega$ and no more. [F2, F3]

2.1 Compose the splitting $s$ with the canonical trivialization $t:f^*T\mathbb R^n\to\varepsilon^n$ supplied by [F4], which exists because the identity chart of $\mathbb R^n$ trivializes $T\mathbb R^n$ and the product-pullback lemma trivializes its pullback along $f$: $$\varphi:=t\circ s:TM\oplus\nu_f\longrightarrow\varepsilon^n$$ is a smooth bundle isomorphism, the composite of two smooth bundle isomorphisms. [F3, F4, step 1.2]

3.1 By step 1.1 the bundle $\nu_f$ has rank $n-m$ and by step 2.1 the isomorphism $\varphi$ maps $TM\oplus\nu_f$ onto $\varepsilon^{n}=\varepsilon^{m+(n-m)}$; so $(\nu_f,\varphi)$ is a rank-$(n-m)$ stable normal inverse of $M$ in the sense of [F5]. Thus an immersion of codimension $n-m$ provides an actual rank-$(n-m)$ inverse bundle, not merely a stable one; nothing beyond this rank and the isomorphism is asserted about $\nu_f$. The countable-choice hypothesis is the one inherited from the metric splitting of [F3] and from the canonical trivialization [F4]; no bundle metric, complement or frame is chosen in addition to those data. [F3, F4, F5, step 1.1, step 1.2, step 2.1] ∎
