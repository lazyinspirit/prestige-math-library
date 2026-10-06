---
id: prop-smale-hirsch-makes-rank-reduction-sufficient-for-euclidean-immersion-in-positive-codimension
kind: proposition
title: "Smale-Hirsch makes rank reduction sufficient for Euclidean immersion in positive codimension"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: ["def-stable-normal-inverse-of-the-tangent-bundle", "lem-pullback-of-a-trivial-smooth-vector-bundle-is-canonically-trivial", "def-formal-immersion-between-smooth-manifolds", "def-space-of-immersions-and-space-of-formal-immersions", "thm-smale-hirsch-immersion-theorem", "def-weak-homotopy-equivalence", "lem-an-immersion-into-r-n-gives-a-rank-n-minus-m-representative-of-the-stable-normal-bundle", "def-countable-choice", thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure, def-induced-tangent-bundle-chart]
justified_by: []
dependency_level: 12
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy (author draft, complete 568-page text)"
      url: "https://math.stanford.edu/~ralph/bookR4.pdf"
      locator: "SS7.2, printed pp. 226-232: Whitney Theorems 7.2-7.3, the RP^{2^k} embedding obstruction (Proposition 7.4), Hirsch-Smale Theorem 7.5, Corollary 7.6 (existence of an immersion iff a k-dimensional inverse bundle exists) and Theorem 7.7"
    - title: "Ralph L. Cohen, Immersions of Manifolds and Homotopy Theory (lecture notes, 30 June 2022; complete 46-page text)"
      url: "https://math.stanford.edu/~ralph/immersions-final.pdf"
      locator: "SS1-3.1, PDF pp. 4-13: Proposition 1, Theorem 2 (Hirsch-Smale), Corollary 3 (k-dimensional inverse of the tangent bundle), Theorems 4-5, Corollary 10 (normal Stiefel-Whitney nonimmersion test) and the RP^{2^k} example, Theorem 11 (Massey)"
    - title: "John W. Milnor and James D. Stasheff, Characteristic Classes (Annals of Mathematics Studies 74, Princeton University Press; complete text)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "SS4, printed pp. 43-48 (Lemma 4.4, Theorem 4.5, Corollary 4.6, the immersion paragraph, Theorem 4.8); SS11, printed pp. 119-136 (Theorem 11.3, Corollary 11.12, Wu's formula and Corollary 11.15); SS15, printed pp. 173-178 (Theorem 15.3, Corollary 15.5, Corollary 15.8)"
---

## Statement

Assume countable choice $\mathrm{AC}_\omega$. Let $M^m$ be a closed smooth $m$-manifold, let $k\ge1$, and let $(\nu,\varphi)$ be a rank-$k$ stable normal inverse of $M$, so that $\varphi:TM\oplus\nu\to\varepsilon^{m+k}$ ([[def-stable-normal-inverse-of-the-tangent-bundle]]). Then there exists an immersion $M\looparrowright\mathbb R^{m+k}$. Together with [[lem-an-immersion-into-r-n-gives-a-rank-n-minus-m-representative-of-the-stable-normal-bundle]] this says that for closed $M$ and $k\ge1$ the existence of an immersion $M\looparrowright\mathbb R^{m+k}$ is equivalent to the existence of a rank-$k$ stable normal inverse; that equivalence is the precise sense in which the normal problem is complete for immersions on this page. No classification of regular homotopy classes and no statement about the normal bundle of the particular immersion produced is asserted.

## Facts & Assumptions

**Given:** A closed smooth $m$-manifold $M$, an integer $k\ge1$, a rank-$k$ stable normal inverse $(\nu,\varphi)$ with $\varphi:TM\oplus\nu\to\varepsilon^{m+k}$, and $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[F1] A formal immersion from $M$ to $N$ is a pair $(f,F)$ with $f:M\to N$ smooth and $F:TM\to TN$ a smooth bundle map over $f$ that is injective on every fibre; a smooth map $f$ is an immersion exactly when $(f,df)$ is a formal immersion. The spaces $\operatorname{Imm}(M,N)$ and $\operatorname{FImm}(M,N)$ carry the weak compact-open topologies, and the derivative map $D:f\mapsto(f,df)$ maps the former into the latter ([[def-formal-immersion-between-smooth-manifolds]], [[def-space-of-immersions-and-space-of-formal-immersions]]).

[F2] Assume $\mathrm{AC}_\omega$; for smooth boundaryless $M^m,N^n$ with $m<n$ (positive codimension), the derivative map $D:\operatorname{Imm}(M,N)\to\operatorname{FImm}(M,N)$ is a weak homotopy equivalence ([[thm-smale-hirsch-immersion-theorem]]).

[F3] A weak homotopy equivalence induces a bijection on path-component sets $\pi_0$ ([[def-weak-homotopy-equivalence]]).

[F4] The constant map $c:M\to\mathbb R^{m+k}$, $x\mapsto0$, pulls the trivial bundle back to $\varepsilon^{m+k}$: $c^*T\mathbb R^{m+k}\cong c^*\varepsilon^{m+k}\cong\varepsilon^{m+k}$ canonically, by the product-pullback lemma and the standard-coordinate trivialization of the Euclidean tangent bundle ([[thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure]], [[def-induced-tangent-bundle-chart]], [[lem-pullback-of-a-trivial-smooth-vector-bundle-is-canonically-trivial]]).

[F5] Conversely, if $M$ is closed and $f:M\looparrowright\mathbb R^{m+k}$ is a smooth immersion with $m+k>m$, its normal bundle is a rank-$k$ stable normal inverse of $M$ ([[lem-an-immersion-into-r-n-gives-a-rank-n-minus-m-representative-of-the-stable-normal-bundle]]).

## Proof

1.1 Define $F:=\varphi|_{TM}:TM\to\varepsilon^{m+k}$ as the restriction of the bundle isomorphism $\varphi$ to the first summand; this is a smooth bundle map over $M$, injective on every fibre. By [F4], it determines a smooth fibrewise injective map $TM\to c^*T\mathbb R^{m+k}$ over $\operatorname{id}_M$. Composing with the canonical map $c^*T\mathbb R^{m+k}\to T\mathbb R^{m+k}$ gives a smooth bundle map $\widetilde F$ over $c$, so $(c,\widetilde F)$ is a formal immersion by [F1]. Thus $\operatorname{FImm}(M,\mathbb R^{m+k})$ is nonempty. [F1, F4]

2.1 By [F2] with $N=\mathbb R^{m+k}$ (boundaryless, positive codimension $k\ge1$) the derivative map $D$ is a weak homotopy equivalence; by [F3] it induces a bijection on path components. Since $\operatorname{FImm}(M,\mathbb R^{m+k})$ is nonempty by step 1.1 and $\pi_0(D)$ is surjective, the target's empty-or-non-empty status matches the source's, so $\operatorname{Imm}(M,\mathbb R^{m+k})$ is nonempty: there exists a smooth immersion $M\looparrowright\mathbb R^{m+k}$. [F1, F2, F3, step 1.1]

3.1 Conversely, every smooth immersion $M\looparrowright\mathbb R^{m+k}$ of the closed $M$ has a rank-$k$ normal bundle which is a rank-$k$ stable normal inverse by [F5], under the same $\mathrm{AC}_\omega$. Therefore for closed $M$ and $k\ge1$ the existence of an immersion into $\mathbb R^{m+k}$ is equivalent to the existence of a rank-$k$ stable normal inverse: reduction of the structure problem to the normal bundle is sufficient as well as necessary, which is the completeness statement of the design. The argument selects no immersion canonically (it only proves nonemptiness of a space), asserts nothing about the regular homotopy class of the immersion produced, and makes no claim about its normal bundle; the only choice used is the $\mathrm{AC}_\omega$ assumed by the Smale-Hirsch theorem and by the normal-bundle splitting. [F2, F5, step 1.1, step 2.1] ∎
