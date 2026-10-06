---
id: lem-diagonal-class-expansion-gives-the-alternating-trace
kind: lemma
title: The diagonal and graph classes contract to the alternating trace
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
  - lem-orientation-twisted-diagonal-realizes-the-lefschetz-trace
  - def-algebraic-lefschetz-number
  - def-global-geometric-lefschetz-number
  - def-cap-duality-map-for-an-oriented-manifold
  - thm-poincare-duality-for-oriented-topological-manifolds
  - prop-cap-product-naturality-and-projection-formula
  - def-kronecker-evaluation-pairing
  - lem-the-local-intersection-sign-of-the-graph-and-diagonal
  - def-geometric-intersection-pairing-on-a-closed-oriented-manifold
  - def-axiom-of-choice
  - prop-singular-homology-of-a-disjoint-union-is-the-direct-sum
  - thm-connected-and-locally-path-connected-implies-path-connected
  - prop-topological-manifolds-are-locally-compact-and-locally-path-connected
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: Eleny Ionel, notes by Andrew Lin, Stanford Math 215B Differential
        Topology, Winter 2023 (complete 63-page lecture notes)
      url: https://web.stanford.edu/~lindrew/math215B.pdf
      locator: "Lecture 16, printed pp. 51-52 (Lemma 150: the diagonal splits as sum
        (-1)^{dim h_i} h_i x h_i; the intersection pairing sign rule), and
        Lecture 17, printed p. 54 (the same splitting for the graph)"
    - title: Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall
        1974; complete 236-page PDF)
      url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
      locator: Ch. 3 §4, printed pp. 119-122 (global Lefschetz number as the
        intersection number of graph and diagonal, with the local determinant
        computation)
dependency_level: 10
---

## Statement

Assume AC ([[def-axiom-of-choice]]). Let $M$ be a closed oriented smooth $n$-manifold and $f:M\to M$ smooth. For a homogeneous basis $\alpha_{p,j}$ of $H^p(M;\mathbb Q)$, choose the dual basis $\beta_{p,j}\in H^{n-p}(M;\mathbb Q)$ with $\langle\beta_{p,j}\smile\alpha_{p,k},[M]\rangle=\delta_{jk}$. In the cohomology-first cap convention,
$$\mathrm{PD}[\Delta_M]=\sum_{p,j}(-1)^p\beta_{p,j}\times\alpha_{p,j}.$$
Writing $\gamma_f(x)=(x,f(x))$ for the graph map,
$$\langle\gamma_f^*\mathrm{PD}[\Delta_M],[M]\rangle=\langle\mathrm{PD}[\Gamma_f]\smile\mathrm{PD}[\Delta_M],[M\times M]\rangle=L(f).$$
The graph Poincare dual is characterized by $\langle\mathrm{PD}[\Gamma_f]\smile\varphi,[M\times M]\rangle=\langle\gamma_f^*\varphi,[M]\rangle$ for every degree-$n$ cohomology class $\varphi$. When $n\ge1$ and the fixed points are nondegenerate, this value is $I(f)$, the graph-diagonal intersection number in the local displacement convention $u-v$ ([[def-global-geometric-lefschetz-number]], [[def-geometric-intersection-pairing-on-a-closed-oriented-manifold]]).

## Facts & Assumptions

**Given:** $M,f$, the bases, and AC as in the statement.

[F1] [[lem-orientation-twisted-diagonal-realizes-the-lefschetz-trace]] supplies the normalized diagonal class, the signed dual-basis expansion, graph-pullback trace, and nondegenerate local evaluation. The chosen orientation trivializes its orientation coefficient system. Manifold components are open by local path-connectedness ([[prop-topological-manifolds-are-locally-compact-and-locally-path-connected]], [[thm-connected-and-locally-path-connected-implies-path-connected]]), hence compactness gives finitely many, and homology splits over them ([[prop-singular-homology-of-a-disjoint-union-is-the-direct-sum]]).

[F2] Poincare duality is the inverse of cohomology-first cap with the fundamental class ([[def-cap-duality-map-for-an-oriented-manifold]], [[thm-poincare-duality-for-oriented-topological-manifolds]]). Cup and cap satisfy the composition and naturality formulas ([[prop-cap-product-naturality-and-projection-formula]], [[def-kronecker-evaluation-pairing]]).

[F3] The local displacement convention $u-v$ identifies the graph-diagonal local signs with fixed-point indices ([[lem-the-local-intersection-sign-of-the-graph-and-diagonal]], [[def-geometric-intersection-pairing-on-a-closed-oriented-manifold]]).

## Proof

1.1 For disconnected $M$, apply [F1] on each component: the diagonal has support only in $C\times C$, and the product components $C\times D$ with $C\ne D$ have zero diagonal class. In component-adapted bases its expansion is the sum of the component expansions; it is independent of the basis since a basis change and its inverse dual change cancel in the tensor sum. Components mapped to a different component have zero diagonal trace block and no diagonal intersection. Thus the graph-pullback trace identity also sums over the components, including the empty case. Trivialize the orientation system by the given orientation of $M$. The cap-normalized diagonal class of [F1] becomes $\mathrm{PD}[\Delta_M]$ by [F2]. Its expansion is exactly the displayed formula, and [F1]'s graph pullback gives $\langle\gamma_f^*\mathrm{PD}[\Delta_M],[M]\rangle=L(f)$. [given, F1, F2]

2.1 Since the graph is oriented by $\gamma_f$, its fundamental homology class is $(\gamma_f)_*[M]$. For every degree-$n$ class $\varphi$, [F2] gives $\langle\mathrm{PD}[\Gamma_f]\smile\varphi,[M\times M]\rangle=\langle\varphi,\mathrm{PD}[\Gamma_f]\cap[M\times M]\rangle=\langle\varphi,(\gamma_f)_*[M]\rangle=\langle\gamma_f^*\varphi,[M]\rangle$. Taking $\varphi=\mathrm{PD}[\Delta_M]$ proves the cup contraction identity from step 1.1. [F2, step 1.1]

3.1 If $n\ge1$ and the fixed points are nondegenerate, [F1] evaluates this graph pullback as the sum of the local signs $\operatorname{sign}\det(I-Df_x)$. By [F3] this is both $I(f)$ and the stated graph-diagonal intersection number. AC is inherited from [F1] and Poincare duality. [F1, F3, step 1.1, step 2.1] ∎
