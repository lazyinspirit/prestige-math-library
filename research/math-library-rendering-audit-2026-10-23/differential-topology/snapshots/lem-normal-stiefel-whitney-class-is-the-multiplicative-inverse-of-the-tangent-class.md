---
id: lem-normal-stiefel-whitney-class-is-the-multiplicative-inverse-of-the-tangent-class
kind: lemma
title: "The normal Stiefel-Whitney class is the multiplicative inverse of the tangent class"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: ["def-stable-normal-inverse-of-the-tangent-bundle", "def-stiefel-whitney-classes-from-the-projective-bundle-relation", "thm-whitney-sum-formula-for-stiefel-whitney-classes", "thm-naturality-of-stiefel-whitney-classes", "lem-second-countable-smooth-manifolds-have-cw-homotopy-type", "def-singular-cohomology-ring", "def-axiom-of-choice", thm-singular-cohomology-is-graded-commutative]
justified_by: []
dependency_level: 1
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

Assume AC. Let $M$ be a closed smooth $m$-manifold, let $(\nu,\varphi)$ be a stable normal inverse of $M$ with $\varphi:TM\oplus\nu\to\varepsilon^N$, and let $w(E)=\sum_iw_i(E)$ denote the total Stiefel-Whitney class in the ring $H^*(M;\mathbb F_2)$ ([[def-stiefel-whitney-classes-from-the-projective-bundle-relation]], [[def-singular-cohomology-ring]]). Then $$w(TM)\,w(\nu)=1\qquad\text{in }H^*(M;\mathbb F_2).$$ Hence $w(\nu)$ is the unique two-sided inverse of $w(TM)$, and the classes $w_i(\nu)$ depend only on $M$, not on the chosen stable normal inverse $(\nu,\varphi)$. Equivalently the total normal class is $w(\nu)=w(TM)^{-1}=:\bar w(M)$, the Whitney-duality form of the normal Stiefel-Whitney class.

## Facts & Assumptions

**Given:** A closed smooth $m$-manifold $M$, a stable normal inverse $(\nu,\varphi)$ with $\varphi:TM\oplus\nu\to\varepsilon^N$ a smooth bundle isomorphism, and AC ([[def-stable-normal-inverse-of-the-tangent-bundle]], [[def-axiom-of-choice]]).

[F1] Stiefel-Whitney classes are defined for numerable real bundles over a paracompact Hausdorff CGWH base of CW homotopy type, with $w_0=1$, $w_i=0$ for $i>\operatorname{rank}$, and total class $w(E)=\sum_iw_i(E)\in H^*(B;\mathbb F_2)$ ([[def-stiefel-whitney-classes-from-the-projective-bundle-relation]], [[def-singular-cohomology-ring]]).

[F2] The Whitney sum formula $w(E\oplus F)=w(E)w(F)$ holds for numerable bundles over such a base, and adjoining a trivial summand does not change the classes: $w(E\oplus\varepsilon^r)=w(E)$, so $w(\varepsilon^r)=1$ ([[thm-whitney-sum-formula-for-stiefel-whitney-classes]]).

[F3] The classes depend only on the isomorphism class of the bundle ([[thm-naturality-of-stiefel-whitney-classes]]).

[F4] A closed smooth manifold is a paracompact Hausdorff CGWH space of CW homotopy type, and every smooth bundle over it, in particular $TM$, $\nu$ and the trivial bundle, is numerable ([[lem-second-countable-smooth-manifolds-have-cw-homotopy-type]]); this puts $M$ and these bundles in the scope of [F1]–[F3]. AC is the hypothesis of those suppliers.

[F5] Singular cohomology is graded commutative; over $\mathbb F_2$ the signs are $1$, so $H^*(M;\mathbb F_2)$ is a commutative unital ring ([[def-singular-cohomology-ring]], [[thm-singular-cohomology-is-graded-commutative]]). If $uv=1=uw$, then $v=v(uw)=(vu)w=w$, so inverses are unique.

## Proof

1.1 By [F3] the isomorphism $\varphi$ gives $w(TM\oplus\nu)=w(\varepsilon^N)$; by [F2], $w(TM\oplus\nu)=w(TM)w(\nu)$ and $w(\varepsilon^N)=1$, the latter because $\varepsilon^N$ is trivial and adjoining trivial summands does not change the classes. Hence $$w(TM)w(\nu)=1\qquad\text{in }H^*(M;\mathbb F_2).$$ The computation happens in the unital ring of [F5], and the bundles involved are numerable over the closed smooth manifold $M$ by [F4], so the cited Whitney and naturality theorems apply. [F2, F3, F4, F5]

2.1 Equation $w(TM)w(\nu)=1$ exhibits $w(\nu)$ as a two-sided inverse of $w(TM)$, and by [F5] the inverse of a unit is unique; in particular if $(\nu_0,\varphi_0)$ and $(\nu_1,\varphi_1)$ are two stable normal inverses then $w(\nu_0)=w(TM)^{-1}=w(\nu_1)$, so each $w_i(\nu)$ depends only on $M$. This justifies the notation $\bar w(M):=w(TM)^{-1}=w(\nu)$. The argument uses no property of $\varphi$ beyond its being a bundle isomorphism, no orientation of $M$, and only the choice assumed in AC, inherited through the AT suppliers [F1]–[F3]. [F2, F5, step 1.1] ∎
