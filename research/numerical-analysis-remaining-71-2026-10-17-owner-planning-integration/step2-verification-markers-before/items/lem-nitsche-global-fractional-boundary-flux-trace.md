---
id: lem-nitsche-global-fractional-boundary-flux-trace
kind: lemma
title: Mesh-uniform fractional boundary flux trace
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-matching-affine-simplicial-meshes, def-nitsche-boundary-penalty-forms, def-nitsche-restriction-bessel-potential-sobolev-spaces, def-real-order-bessel-potential-sobolev-space, thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces, lem-nitsche-fractional-face-trace-on-simplex, lem-nitsche-scaled-fractional-simplex-trace, lem-shape-regular-affine-simplex-scaling, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 37, Nitsche boundary penalty method
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap37.pdf
    - title: Mika Juntunen and Rolf Stenberg, Nitsche's method for general boundary conditions, Mathematics of Computation 78 (2009), 1353–1374
      url: https://aaltodoc.aalto.fi/bitstreams/f6ebc2d5-8166-479a-96c8-45d2538ce179/download
---

## Statement

Assume Countable Choice and the fixed nonempty bounded polyhedral domain, matching shape-regular affine simplicial mesh, and Nitsche face-height convention of [[def-nitsche-boundary-penalty-forms]]. Let $h:=\max_Kh_K$, $\ell_\Omega:=\operatorname{diam}(\Omega)$, and $1/2<s\le1$. For every $\zeta\in H^{1+s}(\Omega)$, with no boundary-value or PDE assumption,
$$\left(\sum_{F\in\mathcal F_h^\partial}h_F\|\partial_n\zeta\|_{L^2(F)}^2\right)^{1/2}\le C h^{1/2}\|\zeta\|_{H^{1+s}(\Omega)}=C_T h^{1/2}\ell_\Omega^{1/2}\|\zeta\|_{H^{1+s}(\Omega)},\qquad C_T:=C\ell_\Omega^{-1/2}.$$
The trace is the restriction of the whole-space Fourier hyperplane trace and agrees with the facet trace in [[lem-nitsche-fractional-face-trace-on-simplex]]. The constant $C_T$ may depend on the fixed domain, $d$, $s$, and the Fourier normalization, but not on the mesh.

## Facts & Assumptions

**Given:** Countable Choice; a fixed nonempty bounded polyhedral $\Omega$ with its matching shape-regular mesh; $h_F=|K_F|/|F|$; and $\zeta\in H^{1+s}(\Omega)$ for $1/2<s\le1$ in the restriction convention.

[F1] The restriction norm is the infimum over whole-space Bessel-potential extensions, and the whole-space $H^s$ norm is the exact weighted Fourier $L^2$ norm ([[def-nitsche-restriction-bessel-potential-sobolev-spaces]], [[def-real-order-bessel-potential-sobolev-space]], [[thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]]).

[F2] For a whole-space $H^s$ extension with $s>1/2$, the unique $L^2$ hyperplane trace restricts on a simplex facet to the existing trace, independently of the chosen extension ([[lem-nitsche-fractional-face-trace-on-simplex]]).

[F3] The Fourier norm is $\|Z\|_{H^r(\mathbb R^d)}^2=\int_{\mathbb R^d}\langle\xi\rangle^{2r}|\widehat Z(\xi)|^2\,d\xi$ ([[def-real-order-bessel-potential-sobolev-space]], [[thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]]).

[A1] Countable Choice is the only choice principle assumed when selecting extensions approaching the quotient norm ([[def-countable-choice]]).

## Proof


**Given:** The hypotheses and [F1]–[F3].



1.1 The boundary of the fixed polyhedral domain lies in finitely many supporting hyperplanes $P_1,\ldots,P_m$. Choose any whole-space extension $Z\in H^{1+s}(\mathbb R^d)$ of $\zeta$. Its distributional derivative has Fourier multiplier $2\pi i\xi_j$; hence by [F3], $|2\pi\xi_j|\langle\xi\rangle^s\le2\pi\langle\xi\rangle^{1+s}$ and $\|\nabla Z\|_{H^s}^2:=\sum_{j=1}^d\|\partial_j Z\|_{H^s}^2\le(2\pi)^2d\|Z\|_{H^{1+s}}^2$. For each $P_j$, choose $d$ affinely independent points in that plane and a point off it to form a nondegenerate simplex having a facet in $P_j$; this only names the plane trace in [F2] and imposes no mesh condition. Apply the scalar Fourier hyperplane trace estimate in [F2] to every component $\partial_k Z$ and sum the finitely many squared inequalities. After a rigid coordinate change this gives the componentwise vector trace and $\|T_{P_j}\nabla Z\|_{L^2(P_j)}^2:=\sum_{k=1}^d\|T_{P_j}(\partial_k Z)\|_{L^2(P_j)}^2\le C_s\|\nabla Z\|_{H^s}^2$. [F2, F3, given, choose, algebra]

2.1 Group the boundary facets by their supporting planes. On a facet $F\subset P_j$, the scalar normal derivative is the dot product of the same plane trace with a fixed unit normal, so $\|\partial_n\zeta\|_F^2\le\|T_{P_j}\nabla Z\|_{L^2(F)}^2$. The boundary facets in one supporting plane have disjoint relative interiors: their relative interiors are boundary points of the polyhedral domain, and the matching mesh has disjoint cell interiors and whole-face intersections. The face-height convention gives $h_F\le h_K/d\le h/d$. Consequently $\sum_{F\in\mathcal F_h^\partial}h_F\|\partial_n\zeta\|_F^2\le\frac hd\sum_{j=1}^m\|T_{P_j}\nabla Z\|_{L^2(P_j)}^2\le C h\|Z\|_{H^{1+s}(\mathbb R^d)}^2,$ using step 1.1 for the last inequality. [F3, step 1.1, algebra]

3.1 For every $\varepsilon>0$, the restriction norm supplies an extension $Z_\varepsilon$ with $\|Z_\varepsilon\|_{H^{1+s}(\mathbb R^d)}\le\|\zeta\|_{H^{1+s}(\Omega)}+\varepsilon$. Apply step 2.1 to $Z_\varepsilon$ and let $\varepsilon\downarrow0$. Taking square roots proves the first estimate; since $\ell_\Omega>0$ is fixed, writing $C_T=C\ell_\Omega^{-1/2}$ gives the displayed normalization. [F1, step 2.1, A1, algebra] ∎
## Source notes

The estimate groups facets by the finitely many fixed domain planes, so each whole-space hyperplane trace is counted once rather than once per mesh face. The face-height bound supplies the single factor $h$; no mesh-dependent facet count, zero-boundary condition, or dual PDE is used.
