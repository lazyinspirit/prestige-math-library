---
id: lem-nitsche-h-one-zero-functions-have-zero-facet-traces
kind: lemma
title: Zero facet traces of functions in H1_0 on an affine mesh
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  [
    def-matching-affine-simplicial-meshes,
    def-sobolev-space-wkp-and-its-norm,
    def-hk-and-hk-zero-notation,
    def-wkp-zero-as-a-sobolev-closure,
    lem-affine-pullback-weak-derivatives-and-scaling,
    lem-affine-simplex-gauss-green-formula,
    thm-reference-simplex-trace-and-gauss-green,
    def-countable-choice
  ]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 37, Nitsche boundary
        penalty method
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap37.pdf
      locator: §37.1, the zero-boundary Dirichlet space and weak imposition setup.
    - title: Mika Juntunen and Rolf Stenberg, Nitsche's method for general boundary
        conditions, Mathematics of Computation 78 (2009), 1353–1374
      url: https://aaltodoc.aalto.fi/bitstreams/f6ebc2d5-8166-479a-96c8-45d2538ce179/download
      locator: §2, the conforming H1 test space and Dirichlet limit.
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice. Let $\Omega$ have a finite matching affine simplicial mesh $\mathcal T_h$ as in [[def-matching-affine-simplicial-meshes]], and let $H^1_0(\Omega;\mathbb R)=W^{1,2}_0(\Omega;\mathbb R)$ have the closure convention of [[def-wkp-zero-as-a-sobolev-closure]] and [[def-hk-and-hk-zero-notation]]. For every boundary facet $F\subset\partial K$ there is a bounded affine-simplex trace map $T_{K,F}:W^{1,2}(K;\mathbb R)\to L^2(F;\mathbb R)$ agreeing with classical restriction on smooth functions. If $w\in H^1_0(\Omega;\mathbb R)$, then $T_{K,F}(w|_K)=0$ in $L^2(F;\mathbb R)$. In particular, any globally $H^1(\Omega;\mathbb R)$ function that is polynomial on each cell and belongs to $H^1_0(\Omega;\mathbb R)$ has zero classical boundary restriction on every boundary facet.

## Facts & Assumptions

**Given:** Countable Choice; a finite matching affine mesh; a boundary facet $F$ of its incident cell $K$; and the closure-defined real space $H^1_0(\Omega;\mathbb R)$.

[F1] On the reference simplex, restriction of smooth functions extends to a bounded linear trace map $\gamma_{\widehat F}:W^{1,2}(\widehat S_d)\to L^2(\widehat F)$ ([[thm-reference-simplex-trace-and-gauss-green]]).

[F2] Each cell is an invertible affine image of the reference simplex, and affine pullback sends $W^{1,2}(K)$ to $W^{1,2}(\widehat S_d)$ with the weak derivative and norm transformation stated in [[def-matching-affine-simplicial-meshes]] and [[lem-affine-pullback-weak-derivatives-and-scaling]].

[F3] The affine map restricts to a facet map with a positive constant surface Jacobian, so $dS=J_Fd\widehat S$ ([[lem-affine-simplex-gauss-green-formula]]).

[F4] $H^1(\Omega;\mathbb R)=W^{1,2}(\Omega;\mathbb R)$ and $H^1_0(\Omega;\mathbb R)$ is the closure of $C_c^\infty(\Omega;\mathbb R)$ in this Sobolev norm ([[def-hk-and-hk-zero-notation]], [[def-wkp-zero-as-a-sobolev-closure]], [[def-sobolev-space-wkp-and-its-norm]]).

[F5] Countable Choice permits choosing one approximant for each positive integer from the nonempty sets supplied by the closure condition ([[def-countable-choice]]).

## Proof

**Given:** The mesh, cell $K$, facet $F$, and hypotheses in the Statement and [F1]–[F5].

1.1 Let $F_K(\widehat x)=b_K+A_K\widehat x$ be the reference map and let $\widehat w=w\circ F_K$. By [F2], $\widehat w\in W^{1,2}(\widehat S_d)$ and its norm is bounded by a finite constant depending on $A_K$ times $\|w\|_{W^{1,2}(K)}$. The surface Jacobian $J_F$ is positive and constant by [F3]. Define $T_{K,F}w$ by pullback of $\gamma_{\widehat F}\widehat w$; then $$\|T_{K,F}w\|_{L^2(F)}^2=J_F\|\gamma_{\widehat F}\widehat w\|_{L^2(\widehat F)}^2\le J_F C_{\widehat F}^2\|\widehat w\|_{W^{1,2}(\widehat S_d)}^2\le C_{K,F}^2\|w\|_{W^{1,2}(K)}^2.$$ Thus the trace is bounded, and it agrees with ordinary restriction for smooth $w$ by [F1]. [F1, F2, F3, given]

2.1 Let $w\in H^1_0(\Omega;\mathbb R)$. For each $m\ge1$, the closure property [F4] and Countable Choice [F5] give $\phi_m\in C_c^\infty(\Omega;\mathbb R)$ with $\|w-\phi_m\|_{W^{1,2}(\Omega)}<1/m$. Restriction to $K$ cannot increase this norm, so step 1.1 gives $$\|T_{K,F}(w|_K)-T_{K,F}(\phi_m|_K)\|_{L^2(F)}\le C_{K,F}/m.$$ The support of each $\phi_m$ is compactly contained in $\Omega$, hence $\phi_m$ vanishes in a neighborhood of the boundary facet $F$ and its trace is zero by step 1.1. Letting $m\to\infty$ proves $T_{K,F}(w|_K)=0$. [F4, F5, step 1.1, given]

3.1 If $p$ is polynomial on $K$, then it is smooth and step 1.1 identifies $T_{K,F}(p)$ with its classical restriction. Therefore for a global piecewise-polynomial $p\in H^1_0(\Omega)$, step 2.1 makes that restriction zero on each boundary facet. This proves the final assertion. [step 1.1, step 2.1, given] ∎

## Source notes

The zero-trace conclusion is proved from the stated closure convention and a continuous simplex trace map. No trace characterization of $H^1_0$ is imported.
