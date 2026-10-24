---
id: "cor-top-de-rham-cohomology-of-a-closed-connected-oriented-manifold-is-real"
kind: "corollary"
title: "Top de Rham cohomology of a closed connected oriented manifold is real"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-integration-is-an-isomorphism-on-top-compactly-supported-de-rham-cohomology","def-compactly-supported-de-rham-cochain-complex-and-cohomology"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Robbin–Salamon, Introduction to Differential Topology
      url: https://zaco.au/lib/math/text/differential-geometry/difftop.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

For a nonempty closed connected oriented smooth $n$-manifold $M$, where closed means compact and without boundary, integration identifies $H_{\mathrm{dR}}^n(M)$ with $\mathbb R$. The integral is the finite-localization integral, and this assertion is choice-free, including dimension zero.

## Facts & Assumptions

[F1] [[thm-integration-is-an-isomorphism-on-top-compactly-supported-de-rham-cohomology]] proves the integration isomorphism for every nonempty connected oriented boundaryless manifold, without choice.

[F2] [[def-compactly-supported-de-rham-cochain-complex-and-cohomology]] proves that on a compact manifold the ordinary and compact-support complexes agree, including their primitive spaces.

## Proof

**Given:** A manifold satisfying the statement, in particular compactness and absence of boundary.

1.1 By [F2], every smooth form on $M$ has compact support, because its support is closed in compact $M$. Consequently $\Omega_c^k(M)=\Omega^k(M)$ in each degree, with the same differential. This includes the degree $n-1$ primitive space, so both kernels and images defining the degree-$n$ quotients agree. Thus $H_c^n(M)=H_{\mathrm{dR}}^n(M)$ by the identity on representatives. [F2, given]

2.1 The other hypotheses are exactly those of [F1]. Its isomorphism sends the common class of $\omega$ to $\int_M\omega$, so under step 1.1 it is the asserted isomorphism on ordinary cohomology. In particular an ordinary exact top form has a compact primitive here, and a zero-integral form is exact. Surjectivity is witnessed by scalar multiples of the normalized bump in [F1]. [F1, step 1.1]

3.1 At $n=0$ the manifold is a single oriented point as proved in [F1]; the map is multiplication by its orientation sign and the negative-degree image is zero. At $n=1$ primitives are ordinary smooth functions, all compactly supported because $M$ is compact. Zero forms have zero image. Nonemptiness is required for surjectivity, and boundarylessness for [F1]; there are no manifold boundary endpoints to omit. No partition or new choice is used in this identity of complexes. [F1, F2, step 1.1, step 2.1] ∎
