---
id: rem-characteristic-class-vanishing-is-only-necessary-for-embedding
kind: remark
title: "Characteristic-class vanishing is only necessary for embedding"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: ["cor-embedding-obstructions-include-all-immersion-normal-class-obstructions", "def-smooth-embedding", "thm-isotopy-extension", "thm-choice-implies-dependent-implies-countable-choice", "def-axiom-of-choice", prop-parallelizable-manifolds-have-no-stable-characteristic-class-obstruction-to-euclidean-immersion, prop-a-nowhere-zero-section-forces-the-euler-class-to-vanish, ex-real-projective-space-from-affine-charts, prop-tangent-space-of-a-regular-level-set-is-the-kernel, thm-cellular-boundary-is-the-incidence-degree-matrix, thm-cellular-homology-computes-singular-homology]
external_refs: ["rem-metastable-embedding-classification-requires-additional-deleted-product-machinery"]
justified_by: []
dependency_level: 10
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, Example 2.42"
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf
      locator: "Printed p.144, the complete two-hemisphere cellular differential calculation for real projective space."
    - title: "Jonathan A. Hillman, Locally Flat Embeddings of 3-Manifolds in S^4 (December 2024 draft)"
      url: https://secure.maths.usyd.edu.au/u/jonh/embkDec24.pdf
      locator: "Chapter 2, §2.1 printed pp.11–12 (locally flat scope); §2.3 printed p.15, Hantzsche direct-double obstruction and its complete UCT/Alexander-duality argument."
    - title: "Arkadiy Skopenkov, Embedding and Knotting of Manifolds in Euclidean Spaces (arXiv:math/0604045)"
      url: "https://arxiv.org/pdf/math/0604045"
      locator: "SS1-2, article pp. 1-13; the subsection 'The Whitney obstruction' on article pp. 11-12 (modulo 2 and integral Whitney obstructions, normal Stiefel-Whitney classes, Pontryagin classes p_i as embedding obstructions), and the knotting boundary in SS2-3 and SS5"
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy (author draft, complete 568-page text)"
      url: "https://math.stanford.edu/~ralph/bookR4.pdf"
      locator: "SS7.2, printed pp. 226-232: Whitney Theorems 7.2-7.3, the RP^{2^k} embedding obstruction (Proposition 7.4), Hirsch-Smale Theorem 7.5, Corollary 7.6 (existence of an immersion iff a k-dimensional inverse bundle exists) and Theorem 7.7"
    - title: "John W. Milnor and James D. Stasheff, Characteristic Classes (Annals of Mathematics Studies 74, Princeton University Press; complete text)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "SS4, printed pp. 43-48 (Lemma 4.4, Theorem 4.5, Corollary 4.6, the immersion paragraph, Theorem 4.8); SS11, printed pp. 119-136 (Theorem 11.3, Corollary 11.12, Wu's formula and Corollary 11.15); SS15, printed pp. 173-178 (Theorem 15.3, Corollary 15.5, Corollary 15.8)"
---

## The boundary recorded

Assume AC. Remark. For a closed smooth $m$-manifold every embedding into $\mathbb R^n$ with $n\ge m$ has a rank-$(n-m)$ normal bundle, so the vanishing of all normal Stiefel-Whitney classes in degrees $i\ge n-m$ (when $m\ge1$ and $n-m\ge1$), of the Euler class of an oriented embedded normal bundle (when $m\ge1$ and $n-m\ge1$), and of all normal Pontryagin classes with $2i>n-m$ is necessary for embeddability; the top Stiefel–Whitney and oriented Euler vanishings are embedding-specific here ([[cor-embedding-obstructions-include-all-immersion-normal-class-obstructions]]). It is not sufficient: $\mathbb{RP}^3$ has a rank-one trivial stable normal inverse. Indeed, for $q=(q_0,q_1,q_2,q_3)\in S^3$, the three fields $(-q_1,q_0,-q_3,q_2)$, $(-q_2,q_3,q_0,-q_1)$ and $(-q_3,-q_2,q_1,q_0)$ are perpendicular to $q$ and pairwise orthonormal, by direct dot products, so frame $T_qS^3$ ([[prop-tangent-space-of-a-regular-level-set-is-the-kernel]]). Each satisfies $X(-q)=-X(q)$, so their differentials descend through $S^3\to\mathbb{RP}^3$. This map is a local diffeomorphism: on an affine chart its two local inverses are the representatives with the chosen coordinate $1$, normalized to unit length with the two signs ([[ex-real-projective-space-from-affine-charts]]). The descended fields therefore give a smooth tangent frame. Thus the parallelizable-manifold proposition gives $\bar w=\bar p=1$ and a trivial rank-one inverse; its Euler class is zero by its constant nonzero section ([[prop-parallelizable-manifolds-have-no-stable-characteristic-class-obstruction-to-euclidean-immersion]], [[prop-a-nowhere-zero-section-forces-the-euler-class-to-vanish]]). Nevertheless $\mathbb{RP}^3$ does not smoothly embed in $\mathbb R^4$: $H_1(\mathbb{RP}^3;\mathbb Z)=\mathbb Z/2$. To compute this, use one cell in each dimension $0,1,2,3$ in the standard quotient cellulation. The 1-cell has coinciding endpoints, so $d_1=0$, and the boundary of the 2-cell maps twice around $\mathbb{RP}^1$, so $d_2=2$ with consistent orientations; hence $\ker d_1/\operatorname{im}d_2=\mathbb Z/2$ by the cellular incidence and homology theorems ([[thm-cellular-boundary-is-the-incidence-degree-matrix]], [[thm-cellular-homology-computes-singular-homology]]; Hatcher, *Algebraic Topology*, Example 2.42, printed p.144). The Hantzsche obstruction requires the torsion in $H_1$ of a closed connected 3-manifold embedded in $S^4$ to be $G\oplus G$; its finite order is therefore a square. Hillman, *Locally Flat Embeddings of 3-Manifolds in $S^4$*, §2.3, printed p.15, proves this from Mayer–Vietoris, Alexander duality and the universal coefficient theorem. A smooth embedding in $\mathbb R^4$ is locally flat and gives such an embedding in $S^4$ by stereographic inclusion, so the obstruction applies. This additional embedding obstruction is cited as a boundary, not constructed on this page.

Separately, characteristic classes do not classify embeddings up to isotopy. Two embeddings can have isomorphic (even trivial) normal bundles and identical stable characteristic classes and still fail to be isotopic: the standard and reflected embeddings of $S^2$ in $\mathbb R^3$ are the elementary example (see the companion page), and in higher codimension knotting phenomena survive every characteristic-class test. The correct additional data are the complement/knotting invariants and the Haefliger-Weber deleted-product (isovariant) classification in the metastable range ([[rem-metastable-embedding-classification-requires-additional-deleted-product-machinery]]), which the present page records only as a boundary and does not build. In particular vanishing of $\bar w$ and $\bar p$ does not imply the existence of an embedding in the same codimension, and Smale-Hirsch theory is not an embedding classification ([[thm-isotopy-extension]] applies only to families of embeddings already given).
