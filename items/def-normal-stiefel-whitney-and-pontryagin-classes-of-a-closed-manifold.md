---
id: def-normal-stiefel-whitney-and-pontryagin-classes-of-a-closed-manifold
kind: definition
title: "Normal Stiefel-Whitney and Pontryagin classes of a closed manifold"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: ["def-stable-normal-inverse-of-the-tangent-bundle", "lem-an-embedding-into-r-n-gives-the-same-normal-bundle-identity", "lem-normal-stiefel-whitney-class-is-the-multiplicative-inverse-of-the-tangent-class", "lem-normal-pontryagin-class-is-the-rational-inverse-of-the-tangent-pontryagin-class", "def-stiefel-whitney-classes-from-the-projective-bundle-relation", "def-pontryagin-classes-by-complexification", "def-singular-cohomology-ring", "thm-choice-implies-dependent-implies-countable-choice", "def-axiom-of-choice"]
justified_by: []
dependency_level: 2
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
    - title: "Arkadiy Skopenkov, Embedding and Knotting of Manifolds in Euclidean Spaces (arXiv:math/0604045)"
      url: "https://arxiv.org/pdf/math/0604045"
      locator: "SS1-2, article pp. 1-13; the subsection 'The Whitney obstruction' on article pp. 11-12 (modulo 2 and integral Whitney obstructions, normal Stiefel-Whitney classes, Pontryagin classes p_i as embedding obstructions), and the knotting boundary in SS2-3 and SS5"
    - title: "John W. Milnor and James D. Stasheff, Characteristic Classes (Annals of Mathematics Studies 74, Princeton University Press; complete text)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "SS4, printed pp. 43-48 (Lemma 4.4, Theorem 4.5, Corollary 4.6, the immersion paragraph, Theorem 4.8); SS11, printed pp. 119-136 (Theorem 11.3, Corollary 11.12, Wu's formula and Corollary 11.15); SS15, printed pp. 173-178 (Theorem 15.3, Corollary 15.5, Corollary 15.8)"
    - title: "Ralph L. Cohen, Immersions of Manifolds and Homotopy Theory (lecture notes, 30 June 2022; complete 46-page text)"
      url: "https://math.stanford.edu/~ralph/immersions-final.pdf"
      locator: "SS1-3.1, PDF pp. 4-13: Proposition 1, Theorem 2 (Hirsch-Smale), Corollary 3 (k-dimensional inverse of the tangent bundle), Theorems 4-5, Corollary 10 (normal Stiefel-Whitney nonimmersion test) and the RP^{2^k} example, Theorem 11 (Massey)"
---

## Definition

Assume AC. Let $M$ be a closed smooth $m$-manifold and choose a stable normal inverse $(\nu,\varphi)$ of $M$, which exists by [[lem-an-embedding-into-r-n-gives-the-same-normal-bundle-identity]] ($\mathrm{AC}$ implies the required countable choice by [[thm-choice-implies-dependent-implies-countable-choice]], and the embedding lemma applies to closed $M$). Define the **total normal Stiefel-Whitney class** and the **total normal Pontryagin class** by $$\bar w(M):=w(\nu)\in H^*(M;\mathbb F_2),\qquad \bar p(M):=p(\nu)\in H^*(M;\mathbb Q),$$ with components $\bar w_i(M)\in H^i(M;\mathbb F_2)$ and $\bar p_i(M)\in H^{4i}(M;\mathbb Q)$ ([[def-stiefel-whitney-classes-from-the-projective-bundle-relation]], [[def-pontryagin-classes-by-complexification]], [[def-singular-cohomology-ring]]). By [[lem-normal-stiefel-whitney-class-is-the-multiplicative-inverse-of-the-tangent-class]] and [[lem-normal-pontryagin-class-is-the-rational-inverse-of-the-tangent-pontryagin-class]] the classes $\bar w_i(M)$ and, for connected $M$, the classes $\bar p_i(M)$ are independent of the chosen inverse, so the definition is well posed; equivalently $\bar w(M)=w(TM)^{-1}$ and $\bar p(M)=p(TM)^{-1}$ are the explicit inverses realized by any inverse bundle. For a disconnected closed $M$ the Pontryagin definition is applied componentwise. These are the classes also called the normal, dual, or (in Skopenkov's terminology) Stiefel-Whitney and Pontryagin classes of the manifold; they are the classes read by the immersion and embedding tests of this page.
