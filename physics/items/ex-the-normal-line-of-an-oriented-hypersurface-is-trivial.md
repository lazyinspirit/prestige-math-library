---
id: ex-the-normal-line-of-an-oriented-hypersurface-is-trivial
kind: example
title: "The normal line of an oriented hypersurface is trivial"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: ["prop-a-transverse-oriented-normal-bundle-orients-an-embedded-submanifold", "def-euclidean-spheres-and-closed-balls", "thm-a-regular-level-set-is-an-embedded-submanifold", "prop-tangent-space-of-a-regular-level-set-is-the-kernel", "prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle", "def-normal-and-conormal-bundles-of-an-embedded-submanifold", "prop-smoothness-of-a-section-is-equivalent-to-smooth-local-components", "def-orientable-manifold", "thm-numerable-vector-bundles-admit-bundle-metrics", "cor-a-vector-bundle-is-trivial-if-and-only-if-it-has-a-global-frame", "def-local-frame-and-global-frame-of-a-vector-bundle", "lem-an-embedding-into-r-n-gives-the-same-normal-bundle-identity", "def-normal-stiefel-whitney-and-pontryagin-classes-of-a-closed-manifold", "prop-a-nowhere-zero-section-forces-the-euler-class-to-vanish", "def-euler-class-by-zero-section-pullback-of-the-thom-class", "thm-choice-implies-dependent-implies-countable-choice", "def-axiom-of-choice"]
justified_by: []
dependency_level: 3
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

## Example

Assume AC. Let $M^m\subseteq\mathbb R^{m+1}$ be a closed embedded hypersurface that is oriented (for example the unit sphere $S^m$). The standard orientation of $\mathbb R^{m+1}$ and the orientation of $M$ determine an orientation of the normal line bundle ([[prop-a-transverse-oriented-normal-bundle-orients-an-embedded-submanifold]], [[def-orientable-manifold]]); an oriented real line bundle is trivial, because the smooth Euclidean normal metric ([[prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle]]) and its positive unit vector give a nowhere-zero global section ([[cor-a-vector-bundle-is-trivial-if-and-only-if-it-has-a-global-frame]], [[def-local-frame-and-global-frame-of-a-vector-bundle]]). Hence the normal bundle of the embedding is trivial, $\bar w_1(M)=0$, $\bar w_i(M)=0$ for $i\ge2$ by rank, and $\bar p(M)=1$ ([[lem-an-embedding-into-r-n-gives-the-same-normal-bundle-identity]], [[def-normal-stiefel-whitney-and-pontryagin-classes-of-a-closed-manifold]]): the rank-one characteristic-class tests give no obstruction to codimension-one immersions or embeddings of an oriented hypersurface, since a nowhere-zero normal section forces the Euler class to vanish ([[prop-a-nowhere-zero-section-forces-the-euler-class-to-vanish]], [[def-euler-class-by-zero-section-pullback-of-the-thom-class]]). In particular for $S^m$ one also has $TS^m\oplus\varepsilon^1\cong\varepsilon^{m+1}$, so $\bar w(S^m)=1$ and $\bar p(S^m)=1$.

## Facts & Assumptions

**Given:** A closed oriented embedded hypersurface $M^m\subseteq\mathbb R^{m+1}$ with its normal line bundle $\nu$, and AC ([[def-axiom-of-choice]]).

[F1] For an embedded submanifold, any two of the orientations of the ambient tangent bundle, the tangent bundle and the transverse normal bundle determine the third; here the standard orientation of $\mathbb R^{m+1}$ and the orientation of $M$ determine an orientation of $\nu$ ([[prop-a-transverse-oriented-normal-bundle-orients-an-embedded-submanifold]], [[def-orientable-manifold]]). The statement assumes the countable choice $\mathrm{AC}_\omega$ used by the normal-bundle identifications, which AC supplies ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F2] The standard Euclidean metric induces a smooth metric on the orthogonal normal line, smoothly identified with the quotient ([[prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle]]). On an oriented local frame $v$, the positive unit vector is $v/\sqrt{\langle v,v\rangle}$; it is smooth and independent of the positive frame, so these vectors give a smooth global section ([[prop-smoothness-of-a-section-is-equivalent-to-smooth-local-components]]). A rank-one global frame trivializes the bundle ([[cor-a-vector-bundle-is-trivial-if-and-only-if-it-has-a-global-frame]], [[def-local-frame-and-global-frame-of-a-vector-bundle]]).

[F3] The normal bundle of an embedding into $\mathbb R^N$ is a rank-$(N-m)$ stable normal inverse, so its Stiefel-Whitney and Pontryagin classes are the normal classes $\bar w(M)$ and $\bar p(M)$; in rank one this gives $\bar w_i(M)=0$ for $i>1$ and the top class in degree one otherwise ([[lem-an-embedding-into-r-n-gives-the-same-normal-bundle-identity]], [[def-normal-stiefel-whitney-and-pontryagin-classes-of-a-closed-manifold]]).

[F4] A nowhere-zero section of an oriented rank-one numerable bundle forces its Euler class to vanish: if $\nu$ has a nowhere-zero section then $e(\nu)=0$ ([[prop-a-nowhere-zero-section-forces-the-euler-class-to-vanish]], [[def-euler-class-by-zero-section-pullback-of-the-thom-class]]).

[F5] The unit sphere $S^m=\{x\in\mathbb R^{m+1}:\lvert x\rvert=1\}$ is a closed embedded hypersurface of $\mathbb R^{m+1}$ with $T_xS^m=x^\perp$: it is the level set of the smooth function $x\mapsto\langle x,x\rangle$ at the regular value $1$, whose differential $2\langle x,\cdot\rangle$ is nonzero at every $x\in S^m$ ([[def-euclidean-spheres-and-closed-balls]], [[thm-a-regular-level-set-is-an-embedded-submanifold]], [[prop-tangent-space-of-a-regular-level-set-is-the-kernel]]). Under the Euclidean metric the normal line of this embedding is identified with the orthogonal complement of $TS^m$ ([[prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle]], [[def-normal-and-conormal-bundles-of-an-embedded-submanifold]]), and the radial field $x\mapsto x$ is a nowhere-zero section of that line, smooth because in the standard global frame of the restricted trivial bundle its coefficients are the coordinate functions ([[prop-smoothness-of-a-section-is-equivalent-to-smooth-local-components]]).

## Verification

**Proof technique:** direct.

1.1 By [F1] the standard orientation of $\mathbb R^{m+1}$ together with the orientation of $M$ orients the normal line bundle $\nu$: the orientation of the ambient bundle and of the tangent bundle determine that of the rank-one transverse normal bundle. This is the coorientation of the hypersurface, and it is a datum determined by the two given orientations. [F1]

2.1 Use the Euclidean metric on the orthogonal normal line of $M$. By [F2] its positive unit vectors form a smooth nowhere-zero section: on overlaps two positive frames differ by a positive smooth function, which cancels on normalization. This is a global frame, so $\nu\cong\varepsilon^1$ smoothly. [F1, F2, step 1.1]

3.1 Consequently the normal bundle of the embedding is trivial, and by [F3] the normal line bundle realizes the normal classes of $M$: $\bar w_1(M)=w_1(\nu)=0$ because the trivial bundle has trivial total class, and $\bar w_i(M)=w_i(\nu)=0$ for every $i\ge2$ by the rank convention for a rank-one bundle; likewise $\bar p(M)=p(\nu)=1$. Thus the degree-one and higher normal classes give no obstruction to a codimension-one immersion or embedding of $M$. [F2, F3, step 2.1]

3.2 The Euler class of the normal line also vanishes: the section exhibited in step 2.1 is nowhere zero, so [F4] gives $e(\nu)=0$. Hence a nonzero normal Euler class is likewise no obstruction here, and every rank-one characteristic-class test of the page returns zero for an oriented hypersurface. [F2, F4, step 2.1]

4.1 For the unit sphere $S^m$ the outward normal field $x\mapsto x$ of [F5] is a nowhere-zero global section of the normal line, hence a global frame, so the normal bundle of the inclusion is trivial by [F2] and [F5]; combined with the embedding normal identity [F3] this gives $TS^m\oplus\varepsilon^1\cong\varepsilon^{m+1}$ for the sphere's stable normal inverse, whence $\bar w(S^m)=1$ and $\bar p(S^m)=1$ as in step 3.1. The argument applies to every oriented hypersurface, uses AC through the Euler and characteristic-class suppliers and its countable-choice consequence through the normal-bundle identifications, and asserts nothing about embeddability in higher codimension or about uniqueness of embeddings. [F2, F3, F5, step 3.1] ∎
