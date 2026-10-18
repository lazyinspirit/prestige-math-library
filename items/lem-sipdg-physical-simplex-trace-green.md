---
id: lem-sipdg-physical-simplex-trace-green
kind: lemma
title: Sobolev traces and Gauss–Green formula on physical simplices
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  [
    def-matching-affine-simplicial-meshes,
    lem-affine-pullback-weak-derivatives-and-scaling,
    lem-smooth-density-on-reference-simplex,
    thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions,
    thm-holder-inequality-for-integrals,
    thm-reference-simplex-trace-and-gauss-green,
    lem-affine-simplex-gauss-green-formula,
    def-countable-choice
  ]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Part VIII, Chapter 38:
        Discontinuous Galerkin"
      url: "https://people.tamu.edu/~guermond/M661_FALL_2025/chap38.pdf"
      locator: "§38.2.1, printed pp. 192–194: affine matching cells, face traces, and
        the elementwise Green identity used in SIP consistency."
    - title: "Douglas N. Arnold, Franco Brezzi, Bernardo Cockburn, and L. Donatella
        Marini, Unified Analysis of Discontinuous Galerkin Methods for Elliptic
        Problems, SIAM Journal on Numerical Analysis 39(5) (2002)"
      url: "https://www.math.purdue.edu/~santos/research/disc_galerkin_ref/siam_DG_20\
        02.pdf"
      locator: "§§3.1–3.3, printed pp. 1756–1759: elementwise Sobolev traces,
        integration by parts, consistency, and adjoint consistency."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice. Let $d\ge2$, let $\widehat S_d$ be the reference simplex, and let $F_K(\widehat x)=b+B\widehat x$ map $\overline{\widehat S_d}$ affinely onto a nondegenerate closed simplex $K$, with $\det B>0$. Sobolev spaces on $K$ mean spaces on its open interior. For every scalar $u\in W^{1,2}(K)$ and vector field $G\in W^{1,2}(K;\mathbb R^d)$, each physical facet has bounded $L^2$ traces $\gamma_Fu$ and $\gamma_FG$, obtained by affine transfer from the reference trace maps. These traces are independent of the chosen orientation-preserving reference map, and they satisfy
$$\int_K u\,\operatorname{div}G+\nabla u\cdot G\,dx=\sum_{F\subset\partial K}\int_F(\gamma_Fu)(\gamma_FG)\cdot n_{K,F}\,dS,$$
where $n_{K,F}$ is the outward unit normal.

## Facts & Assumptions

**Given:** Countable Choice, the reference simplex, an orientation-preserving affine map onto a nondegenerate simplex, $u\in W^{1,2}(K)$, and $G\in W^{1,2}(K;\mathbb R^d)$.

[F1] [[def-matching-affine-simplicial-meshes]]: every physical cell is the image of the reference simplex by an affine bijection; its vertex order is chosen so the map has positive determinant.

[F2] [[lem-affine-pullback-weak-derivatives-and-scaling]]: affine pullbacks of $W^{1,2}$ functions lie in $W^{1,2}$ and satisfy $\nabla_{\widehat x}(v\circ F)=B^T(\nabla_xv)\circ F$.

[F3] [[thm-reference-simplex-trace-and-gauss-green]]: scalar and componentwise vector traces from $W^{1,2}(\widehat S_d)$ to $L^2(\widehat F)$ exist on every reference facet and obey the reference Gauss–Green identity.

[F4] [[lem-affine-simplex-gauss-green-formula]]: the oriented face area element transforms as $n_{K,F}\,dS=\det(B)B^{-T}\widehat n_{\widehat F}\,d\widehat S$.

[F5] [[lem-smooth-density-on-reference-simplex]]: restrictions of smooth functions on a neighborhood of the closed reference simplex are dense in $W^{1,2}(\widehat S_d)$.

[F6] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]: under the affine map, volume integrals transform with the constant Jacobian $\det(B)>0$.

[F7] [[thm-holder-inequality-for-integrals]]: products of two $L^2$ functions on a measure space are integrable and their integrals satisfy the $L^2$ Cauchy–Schwarz bound.

[F8] [[def-countable-choice]]: Countable Choice is the declared hypothesis of the affine pullback, density, change-of-variables, and reference trace suppliers [F2]–[F3], [F5]–[F6].

## Proof

1.1 Put $\widehat u=u\circ F_K$ and $\widehat G=\det(B)B^{-1}(G\circ F_K)$. By [F2], both belong to $W^{1,2}(\widehat S_d)$. Define the physical traces by $\gamma_Fu(F_K(\widehat x))=\gamma_{\widehat F}\widehat u(\widehat x)$ and $\gamma_FG(F_K(\widehat x))=(\det B)^{-1}B\gamma_{\widehat F}\widehat G(\widehat x)$. The reference traces in [F3] are in $L^2(\widehat F)$; the constant affine surface Jacobian $\det(B)|B^{-T}\widehat n_{\widehat F}|>0$ from [F4] and the fixed matrix factor show these definitions give bounded $L^2(F)$ traces. For a fixed map, [F5] supplies smooth approximants to $\widehat u$ and each component of $G\circ F_K$; the reverse estimate in [F2] maps them to smooth approximants on $K$. Thus smooth functions on $K$ are dense in $W^{1,2}(K)$, and any two bounded affine-transfer trace maps agree on this dense smooth class, so they agree on all of $W^{1,2}(K)$. [F1, F2, F3, F4, F5, F8, given]

2.1 Applying the componentwise weak chain rule [F2] and the identity $\sum_jB_{\ell j}(B^{-1})_{ji}=\delta_{\ell i}$ gives $\operatorname{div}_{\widehat x}\widehat G=\det(B)(\operatorname{div}_xG)\circ F_K$. Also $\nabla_{\widehat x}\widehat u\cdot\widehat G=((B^T\nabla_xu)\circ F_K)\cdot(\det(B)B^{-1}(G\circ F_K))=\det(B)(\nabla_xu\cdot G)\circ F_K$. The volume products are integrable by [F7], so [F6] applied to their positive and negative parts identifies the reference volume integral in [F3] with the physical volume integral in the claim. The reference boundary products are integrable by [F3] and [F7]. By the trace definition in step 1.1, $\gamma_{\widehat F}\widehat G=\det(B)B^{-1}(\gamma_FG)\circ F_K$; hence its normal pairing is $\det(B)(\gamma_FG)\cdot B^{-T}\widehat n_{\widehat F}\,d\widehat S=(\gamma_FG)\cdot n_{K,F}\,dS$ by [F4], while the scalar trace is the pullback of $\gamma_Fu$. Applying [F3] and summing over the finitely many facets proves the identity. [F2, F3, F4, F6, F7, F8, step 1.1, algebra] ∎
