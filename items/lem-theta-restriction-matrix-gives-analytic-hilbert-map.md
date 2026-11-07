---
id: lem-theta-restriction-matrix-gives-analytic-hilbert-map
kind: lemma
title: "Holomorphic restriction matrices give analytic Hilbert classifying maps"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: [lem-hilbert-uniform-regularity-fixed-polynomial, lem-hilbert-projective-space-construction, lem-hilbert-regularity-propagation, def-axiom-of-choice, def-dependent-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification: {}
---

## Statement

Assume AC and DC. Let $U$ be a complex manifold and let $\mathcal X\subseteq\mathbb P^N(\mathbb C)\times U$ be a closed complex submanifold, proper and holomorphically submersive over $U$, and suppose $\mathcal O_{\mathcal X}$ is flat over $\mathcal O_U$ in the analytic local-ring sense. Suppose every fibre is the analytification of a projective subscheme of $\mathbb P^N_{\mathbb C}$ with one fixed Hilbert polynomial $P$.

Let $r$ be a degree at which every such fibre ideal and quotient is Castelnuovo–Mumford regular. Suppose locally on $U$ the vector spaces $H^0(\mathcal X_u,\mathcal O(r))$ have holomorphic frames, and in those frames the restriction map from $H^0(\mathbb P^N,\mathcal O(r))$ is represented by a holomorphic matrix. Then there is a unique holomorphic map $c:U\to\operatorname{Hilb}^P(\mathbb P^N)^{\mathrm{an}}$ classifying the fibres, and the analytification of the universal Hilbert family pulled back along $c$ equals $\mathcal X$ as a complex analytic subspace. A degree $r$ satisfying the regularity hypothesis exists by the cited uniform regularity theorem.

The assertion assumes the holomorphic restriction matrices; it does not construct them, the initial embedded family, an algebraic base for $U$, or graphs of additional morphisms.

## Facts & Assumptions

**Given:** AC, DC, the smooth proper analytically flat embedded family, fixed Hilbert polynomial, degree and holomorphic restriction matrices in the Statement.

[F1] One regularity degree works uniformly for ideals and quotients with a fixed Hilbert polynomial ([[lem-hilbert-uniform-regularity-fixed-polynomial]]).

[F2] The fixed-polynomial projective Hilbert functor is represented by a finite-type subscheme of a Grassmannian, with a universal flat family reconstructed from its universal degree-$r$ quotient ([[lem-hilbert-projective-space-construction]]).

[F3] An $r$-regular coherent sheaf has vanishing $H^1$ in degree $r$ and the stated regularity propagates ([[lem-hilbert-regularity-propagation]]).

## Proof

**Proof technique:** take kernels of the holomorphic restriction matrices and identify the universal ideal by fibrewise equality and Nakayama.

1.1 By [F1], a single $r$ makes the ideal and structure sheaf of each fibre regular. The regularity and its propagation give surjectivity of the degree-$r$ restriction map and dimension $P(r)$ of its target; this is the quotient used in [F2]. In a chosen local frame, the restriction matrix therefore has constant rank $P(r)$. A nonzero maximal minor remains nonzero near any point, and elementary row operations express the kernel as a holomorphic graph on that neighbourhood. This gives a holomorphic map to the Grassmannian of degree-$r$ quotients. On overlaps the matrices differ by a holomorphic change of target frame, so their kernels and the Grassmann maps agree. [F1, F2, F3, given, construct, algebra]

2.1 For each $u\in U$, the Grassmann quotient in step 1.1 is the actual degree-$r$ quotient of the given projective fibre. By [F2] it lies in the fixed-polynomial Hilbert subscheme. On an analytic chart of the Grassmannian, each regular function defining that subscheme pulls back to a holomorphic function on the reduced manifold $U$ which vanishes at every point; hence it is zero. Thus the Grassmann map factors holomorphically through the Hilbert scheme with its full scheme structure, not merely its underlying point set. Its pointwise value is the unique Hilbert point of the fibre, so the factorization is unique. [F2, given, step 1.1, algebra]

3.1 Let $I_H$ be the ideal of the analytified pulled-back universal Hilbert family, and $I_X$ the ideal of $\mathcal X$, in a local analytic chart of $\mathbb P^N\times U$. At each parameter their fibres define the same projective subscheme by step 2.1. Every section of $I_H$ therefore restricts to a holomorphic function vanishing at every point of the smooth manifold $\mathcal X$, so $I_H\subseteq I_X$. The structure sheaf of $\mathcal X$ is flat over $U$ by hypothesis. For the exact sequence $0\to Q\to\mathcal O_H\to\mathcal O_X\to0$, this flatness kills the $\operatorname{Tor}_1$ term after tensoring with a base residue field. Equality of the fibre ideals then gives $Q\otimes k(u)=0$. Analytic Nakayama at each local ring gives $Q=0$, so $I_H=I_X$. Thus the analytic family is the pullback of the universal family scheme-theoretically. [F2, given, step 2.1, construct, algebra] ∎

## Boundary

The analytic-flatness and holomorphic restriction-matrix hypotheses are explicit. The separate construction of such matrices for a theta family, graph incidence and the algebraic parameter of group and order actions is not imported by this lemma.
