---
id: "thm-the-de-rham-map-on-cohomology-is-well-defined"
kind: "theorem"
title: "The de Rham map on cohomology is well defined"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-de-rham-integration-is-a-cochain-map","def-de-rham-cohomology","lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary","def-smooth-singular-chain-and-cochain-complexes","thm-a-chain-map-induces-a-well-defined-map-on-homology"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Peter S. Park, Proof of de Rham's Theorem
      url: https://people.math.harvard.edu/~pspark/derham.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

For every smooth manifold $M$, possibly with boundary, and every integer $k$, integration induces a real linear map
$$I_M:H^k_{\mathrm{dR}}(M)\longrightarrow H_\infty^k(M;\mathbb R),\qquad [\omega]\longmapsto[I_M^k(\omega)].$$
The target is smooth singular cohomology. At a boundary, de Rham cohomology uses the locally extendible complex supplied on this page. No choice assumption is needed for this induced map.

## Facts & Assumptions

[F1] [[thm-de-rham-integration-is-a-cochain-map]] gives a degreewise real linear map with $\delta I_M^k=I_M^{k+1}d$.

[F2] [[def-de-rham-cohomology]] defines the usual de Rham quotient, where two closed representatives differ by an exact form.

[F3] [[lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary]] supplies the same quotient construction for a manifold with boundary.

[F4] [[def-smooth-singular-chain-and-cochain-complexes]] defines smooth singular cohomology as the cocycle space modulo the coboundary space, with zero negative degrees.

[F5] [[thm-a-chain-map-induces-a-well-defined-map-on-homology]] supplies the unique induced map on the homology quotient of a chain map.

## Proof

**Given:** A manifold $M$ and a closed form $\omega\in\Omega^k(M)$, using [F3] when $M$ has boundary.

1.1 By [F1], $\delta I_M^k(\omega)=I_M^{k+1}(d\omega)=I_M^{k+1}(0)=0$. Thus the integration cochain is a cocycle and represents a class in [F4]. If $\omega'=\omega+d\eta$, real linearity and [F1] give $$I_M^k(\omega')-I_M^k(\omega)=I_M^k(d\eta)=\delta I_M^{k-1}(\eta).$$ The two cochains therefore represent the same smooth singular cohomology class. [F1, F2, F3, F4, given]

2.1 To identify this with the induced-map construction in [F5], reindex the de Rham complex as $C_n=\Omega^{-n}(M)$ and the smooth cochain complex as $D_n=C_\infty^{-n}(M;\mathbb R)$. Keep their differentials unchanged; a differential of cochain degree $+1$ now lowers $n$ by one. Identity [F1] makes $f_n=I_M^{-n}$ a chain map. The cycles and boundaries in chain degree $-k$ are exactly the original cocycles and coboundaries in degree $k$. Consequently [F5] gives the displayed quotient map, agreeing with step 1.1 by its defining property. [F1, F3, F4, F5, step 1.1]

3.1 On closed representatives, $[a\omega+b\eta]$ maps to $[aI_M(\omega)+bI_M(\eta)]$ by the real linearity of [F1]. Thus the induced map is real linear. In degree zero there are no nonzero exact forms from degree minus one, and the same calculation maps a closed function to its point-evaluation cocycle. In degree one, a change by the differential of a function maps to its cochain coboundary, exactly as in step 1.1. [F1, F2, F3, F4, step 1.1, step 2.1]

4.1 Negative degrees and degrees above $\dim M$ have zero de Rham source; the target above that dimension need not be zero for the induced map to be defined. On an empty manifold the source and target are both zero. Zero representatives map to zero classes, and all degenerate simplices remain part of the target complex from [F4]. No representatives are selected simultaneously: step 1.1 proves independence for arbitrary representatives, and [F5] defines the quotient map. Hence no choice is used. [F3, F4, F5, step 2.1, step 3.1] ∎
