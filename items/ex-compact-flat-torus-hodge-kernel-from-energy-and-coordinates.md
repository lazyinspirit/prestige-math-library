---
id: ex-compact-flat-torus-hodge-kernel-from-energy-and-coordinates
kind: example
title: "Flat torus harmonic forms are constant-coefficient forms"
status: draft
origin: pipeline
dependency_level: 11
deps: [def-axiom-of-choice, thm-hodge-laplacian-kernel-represents-de-rham-and-dolbeault-cohomology, prop-flat-torus-model-geometry, def-smooth-differential-k-form, def-interior-product-of-a-form-by-a-vector-field, thm-heine-borel-rn, cor-repeated-riemann-integrals-on-rectangles, thm-newton-leibniz-with-interior-derivative]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
---

## Example

Assume the Axiom of Choice, $n\ge2$ and an integer $k\ge0$, with $\binom nk=0$ when $k>n$. On $T^n=\mathbb R^n/\mathbb Z^n$ with its flat metric, the forms $dx^{i_1}\wedge\cdots\wedge dx^{i_k}$, $i_1<\cdots<i_k$, form a basis of $\mathcal H^k$. Every real de Rham class therefore has a unique constant-coefficient representative, and $\dim H^k_{\mathrm{dR}}(T^n)=\binom nk$.

## Facts & Assumptions

**Given:** full AC, $n\ge2$, an integer $k\ge0$ and the flat torus.

[F1] The compact Hodge theorem supplies a unique harmonic representative of each de Rham class ([[thm-hodge-laplacian-kernel-represents-de-rham-and-dolbeault-cohomology]]).

[F2] The quotient $T^n=\mathbb R^n/\mathbb Z^n$ is a boundaryless smooth manifold, and $q$ is a surjective local isometry with $q^*g=\sum_i dx^i\otimes dx^i$. Its quotient charts have locally translational transition maps ([[prop-flat-torus-model-geometry]], Proof, quotient-chart and metric construction). Smooth $k$-forms are exterior-bundle sections ([[def-smooth-differential-k-form]]), and $\iota_X$ is the contraction of [[def-interior-product-of-a-form-by-a-vector-field]].

[F3] The cube $[0,1]^n$ is compact ([[thm-heine-borel-rn]], assertion 1). For continuous functions on a cube, iterated Riemann integrals equal the multiple integral, and integrating a continuous derivative gives its endpoint difference ([[cor-repeated-riemann-integrals-on-rectangles]], [[thm-newton-leibniz-with-interior-derivative]]).

## Verification

1.1 Each class has a representative in $[0,1]^n$, by subtracting the integer parts of its coordinates. Thus $q([0,1]^n)=T^n$; pulling an open cover back to this compact cube and projecting a finite subcover proves compactness. The local coframes $dx^j$ agree across the translational changes of [F2], so they descend to a global orthonormal coframe, and its dual vector fields are the descended $\partial_j$. For a form $u$, its pullback is invariant under integer translations because $q(x+m)=q(x)$; therefore its coefficients in this coframe are smooth periodic functions. [F2, F3, given]

2.1 Write $u=\sum_Iu_I dx^I$ in that coframe. The coordinate formula and [F1] give $d=\sum_j\varepsilon(dx^j)\partial_j$. Integrating each coefficient derivative over $[0,1]^n$ by [F3] cancels opposite-face terms by periodicity, so the formal adjoint identity gives $d^*=-\sum_j\iota_{\partial_j}\partial_j$. Here the density integral equals the cube integral: subdivide the cube into finitely many small boxes lying in quotient charts and use their Euclidean density; the shared faces have zero Riemann content. The wedge/contraction identity proved in [F1], $\varepsilon(dx^j)\iota_{\partial_l}+\iota_{\partial_l}\varepsilon(dx^j)=\delta_{jl}I$, now gives $\Delta u=-\sum_{I,j}\partial_j^2u_I dx^I$. One more integration by parts using [F3] gives $(\Delta u,u)_2=\sum_{I,j}\int_{[0,1]^n}|\partial_j u_I|^2$. [F1, F2, F3, step 1.1, algebra]

3.1 If $u$ is harmonic, the sum of nonnegative integrals in step 2.1 is zero. Each derivative is continuous, so a nonzero value would give a neighbourhood with positive integral; hence every $\partial_j u_I$ vanishes everywhere. Integration along line segments in $\mathbb R^n$ gives constant coefficients. Conversely constant coefficients give $\Delta u=0$ by step 2.1. The increasing wedge basis has $\binom nk$ members, and [F1] identifies this harmonic space with de Rham cohomology, proving the asserted representative and dimension claims. [F1, step 2.1, algebra] ∎
