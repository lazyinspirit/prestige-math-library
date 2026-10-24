---
id: prop-parallelizable-manifolds-have-no-stable-characteristic-class-obstruction-to-euclidean-immersion
kind: proposition
title: "Parallelizable manifolds have no stable characteristic-class obstruction to Euclidean immersion"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: ["def-stable-normal-inverse-of-the-tangent-bundle", "lem-normal-stiefel-whitney-class-is-the-multiplicative-inverse-of-the-tangent-class", "lem-normal-pontryagin-class-is-the-rational-inverse-of-the-tangent-pontryagin-class", "def-normal-stiefel-whitney-and-pontryagin-classes-of-a-closed-manifold", "prop-smale-hirsch-makes-rank-reduction-sufficient-for-euclidean-immersion-in-positive-codimension", "def-smooth-vector-bundle-rank-fibre-and-trivial-bundle", "def-whitney-sum-of-vector-bundles", "def-axiom-of-choice", "def-countable-choice", "thm-choice-implies-dependent-implies-countable-choice"]
justified_by: []
dependency_level: 13
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "John W. Milnor and James D. Stasheff, Characteristic Classes (Annals of Mathematics Studies 74, Princeton University Press; complete text)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "SS4, printed pp. 43-48 (Lemma 4.4, Theorem 4.5, Corollary 4.6, the immersion paragraph, Theorem 4.8); SS11, printed pp. 119-136 (Theorem 11.3, Corollary 11.12, Wu's formula and Corollary 11.15); SS15, printed pp. 173-178 (Theorem 15.3, Corollary 15.5, Corollary 15.8)"
    - title: "Ralph L. Cohen, Immersions of Manifolds and Homotopy Theory (lecture notes, 30 June 2022; complete 46-page text)"
      url: "https://math.stanford.edu/~ralph/immersions-final.pdf"
      locator: "SS1-3.1, PDF pp. 4-13: Proposition 1, Theorem 2 (Hirsch-Smale), Corollary 3 (k-dimensional inverse of the tangent bundle), Theorems 4-5, Corollary 10 (normal Stiefel-Whitney nonimmersion test) and the RP^{2^k} example, Theorem 11 (Massey)"
    - title: "Arkadiy Skopenkov, Embedding and Knotting of Manifolds in Euclidean Spaces (arXiv:math/0604045)"
      url: "https://arxiv.org/pdf/math/0604045"
      locator: "SS1-2, article pp. 1-13; the subsection 'The Whitney obstruction' on article pp. 11-12 (modulo 2 and integral Whitney obstructions, normal Stiefel-Whitney classes, Pontryagin classes p_i as embedding obstructions), and the knotting boundary in SS2-3 and SS5"
---

## Statement

Assume AC. Let $M$ be a closed smooth $m$-manifold whose tangent bundle is trivial, $TM\cong\varepsilon^m$. Then for every $k\ge1$ the trivial bundle $\varepsilon^k$, together with the composite isomorphism $TM\oplus\varepsilon^k\cong\varepsilon^m\oplus\varepsilon^k\cong\varepsilon^{m+k}$, is a rank-$k$ stable normal inverse of $M$; consequently $M$ admits an immersion into $\mathbb R^{m+k}$ for every $k\ge1$, in particular into $\mathbb R^{m+1}$ ([[prop-smale-hirsch-makes-rank-reduction-sufficient-for-euclidean-immersion-in-positive-codimension]]). Moreover $\bar w(M)=1$ and $\bar p(M)=1$ ([[def-normal-stiefel-whitney-and-pontryagin-classes-of-a-closed-manifold]]): the inverse total classes of the trivial tangent class are trivial, so every immersion and embedding test on this page based on $\bar w_i$ or $\bar p_i$ returns zero for $M$. The proposition asserts nothing about embeddability, about the minimal immersion dimension below $m+1$, or about other obstructions; dimension, rank and embedding-theoretic issues are unaffected.

## Facts & Assumptions

**Given:** A closed smooth $m$-manifold $M$ with a trivialization $TM\cong\varepsilon^m$, and AC ([[def-axiom-of-choice]]).

[F1] A rank-$k$ stable normal inverse of $M$ is a smooth real bundle $\nu$ of rank $k$ together with a smooth bundle isomorphism $\varphi:TM\oplus\nu\to\varepsilon^{m+k}$ ([[def-stable-normal-inverse-of-the-tangent-bundle]], [[def-smooth-vector-bundle-rank-fibre-and-trivial-bundle]], [[def-whitney-sum-of-vector-bundles]]).

[F2] Under the countable choice $\mathrm{AC}_\omega$ (implied by AC by [[thm-choice-implies-dependent-implies-countable-choice]]), a rank-$k$ stable normal inverse of a closed $M$ with $k\ge1$ produces an immersion into $\mathbb R^{m+k}$ ([[prop-smale-hirsch-makes-rank-reduction-sufficient-for-euclidean-immersion-in-positive-codimension]], [[def-countable-choice]]).

[F3] The normal classes of a closed $M$ are $\bar w(M)=w(TM)^{-1}$ in $H^*(M;\mathbb F_2)$ and $\bar p(M)=p(TM)^{-1}$ in $H^*(M;\mathbb Q)$ for connected $M$, realized as $w(\nu)$, $p(\nu)$ for any stable normal inverse $(\nu,\varphi)$ ([[def-normal-stiefel-whitney-and-pontryagin-classes-of-a-closed-manifold]], [[lem-normal-stiefel-whitney-class-is-the-multiplicative-inverse-of-the-tangent-class]], [[lem-normal-pontryagin-class-is-the-rational-inverse-of-the-tangent-pontryagin-class]]).

[F4] The trivial bundle has trivial characteristic classes: $w(\varepsilon^r)=1$ and $p(\varepsilon^r)=1$ ([[lem-normal-stiefel-whitney-class-is-the-multiplicative-inverse-of-the-tangent-class]], [[lem-normal-pontryagin-class-is-the-rational-inverse-of-the-tangent-pontryagin-class]], [[def-smooth-vector-bundle-rank-fibre-and-trivial-bundle]]).

## Proof

1.1 Fix a trivialization $\tau:TM\to\varepsilon^m$ and let $k\ge1$. Let $\varphi:TM\oplus\varepsilon^k\to\varepsilon^{m+k}$ be the composite of $\tau\oplus\operatorname{id}_{\varepsilon^k}:TM\oplus\varepsilon^k\to\varepsilon^m\oplus\varepsilon^k$ with the canonical associativity identification $\varepsilon^m\oplus\varepsilon^k=\varepsilon^{m+k}$. This is a smooth bundle isomorphism, so by [F1] the pair $(\varepsilon^k,\varphi)$ is a rank-$k$ stable normal inverse of $M$. [F1]

2.1 By [F2] and the triviality of AC implies $\mathrm{AC}_\omega$, the rank-$k$ stable normal inverse of step 1.1 produces an immersion $M\looparrowright\mathbb R^{m+k}$ for every $k\ge1$; taking $k=1$ gives an immersion into $\mathbb R^{m+1}$, and any larger codimension is obtained by stabilizing or by the same construction. [F2, step 1.1]

2.2 The characteristic classes vanish in the normal direction. Since $TM\cong\varepsilon^m$, naturality of the characteristic classes gives $w(TM)=w(\varepsilon^m)=1$ and $p(TM)=p(\varepsilon^m)=1$ by [F4]. By [F3] the normal classes are the inverses of these units, so $\bar w(M)=1^{-1}=1$ and $\bar p(M)=1^{-1}=1$; equivalently, the inverse bundle of step 1.1 is trivial, $w(\varepsilon^k)=1$, $p(\varepsilon^k)=1$, and the inverse lemmas identify these with the normal classes. Hence every normal Stiefel-Whitney class $\bar w_i(M)$ with $i\ge1$ and every normal Pontryagin class $\bar p_i(M)$ with $i\ge1$ vanishes, so no immersion or embedding test of this page based on $\bar w$ or $\bar p$ obstructs anything for $M$. [F3, F4, step 1.1]

3.1 Parallelizability supplies a rank-$k$ inverse with trivial normal bundle for every $k\ge1$, hence the stated Euclidean immersions by [F2], while the positive normal characteristic classes vanish by step 2.2. AC is inherited from the characteristic-class suppliers and implies the countable choice used by the immersion-existence supplier. No embedding or minimal-dimension conclusion is asserted. [F1, F2, F3, step 1.1, step 2.2] ∎
