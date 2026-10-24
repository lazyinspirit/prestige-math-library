---
id: lem-na-rt0-h1-interpolation-bounded-and-commuting
kind: lemma
title: Boundedness and divergence commutation of RT0 interpolation
status: published
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 8
deps:
  [
    def-na-rt0-h1-interpolation,
    def-na-simplicial-mesh-rt-bdm-spaces,
    lem-na-rt0-unisolvence-and-global-conformity,
    lem-na-simplex-h1-facet-trace-bound,
    lem-shape-regular-affine-simplex-scaling,
    def-na-h0div-space,
    lem-affine-simplex-gauss-green-formula,
    lem-na-smooth-neighborhood-dense-in-h1-simplex,
    def-wkp-zero-as-a-sobolev-closure,
    cor-cauchy-schwarz-inequality-for-l-two,
    def-countable-choice
  ]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Part III Chapter 16: Local
        interpolation in H(div) and H(curl) (I)"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap16.pdf
      locator: "Complete chapter, §§16.1.1–16.1.2: RT interpolation stability and its
        divergence-commuting relation."
    - title: "Daniele Boffi, Franco Brezzi and Michel Fortin, Mixed Finite Element
        Methods and Applications"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Complete textbook, Chapter 2 §§2.2–2.3: interpolation estimates and
        commuting diagram."
verification:
  precheck: pass
---

## Statement

Assume Countable Choice, a shape-regular mesh with $h=\max_Kh_K$, and $I_h$ from [[def-na-rt0-h1-interpolation]]. There is $C$ depending only on dimension and the shape bound such that every $v\in H^1(D;\mathbb R^d)$ satisfies
$$\|I_hv\|_{L^2(D)}\le C(\|v\|_{L^2(D)}+h\|\nabla v\|_{L^2(D)}),\qquad (\operatorname{div}I_hv)|_K=|K|^{-1}\int_K\operatorname{div}v.$$
If $v\in H^1_0(D;\mathbb R^d)$, then $I_hv\in V_h$.

## Facts & Assumptions

**Given:** Countable Choice, a shape-regular conforming mesh, and a vector field $v\in H^1(D;\mathbb R^d)$.

[A1] Countable Choice is inherited through the Sobolev trace and interpolation interfaces. ([[def-countable-choice]])

[F1] $I_Kv$ is the unique RT0 field with the facet moments of $v$; matching moments give a global H(div) field. ([[def-na-rt0-h1-interpolation]], [[lem-na-rt0-unisolvence-and-global-conformity]])

[F2] The simplex trace inequality is $\|\gamma_Fv\|_F\le C(h_K^{-1/2}\|v\|_K+h_K^{1/2}\|\nabla v\|_K)$. ([[lem-na-simplex-h1-facet-trace-bound]])

[F3] Shape regularity gives $|K|\asymp h_K^d$, $|F|\asymp h_K^{d-1}$, and each altitude comparable to $h_K$. ([[lem-shape-regular-affine-simplex-scaling]])

[F4] The Gauss–Green formula holds on smooth fields on each affine simplex. ([[lem-affine-simplex-gauss-green-formula]])

[F5] Smooth-neighborhood functions are dense in H1 on every cell, and H1_0 is the H1 closure of compactly supported smooth functions. ([[lem-na-smooth-neighborhood-dense-in-h1-simplex]], [[def-wkp-zero-as-a-sobolev-closure]])

[F6] $V_h$ is the intersection of the global RT0 space with $H_0(\operatorname{div};D)$. ([[def-na-simplicial-mesh-rt-bdm-spaces]])

[F7] The facet moment is bounded by the product of the $L^2$ facet norms. ([[cor-cauchy-schwarz-inequality-for-l-two]])

## Proof

1.1 Let $a_F$ be the vertex opposite facet $F$ in $K$ and define $\phi_{K,F}(x)=(x-a_F)/(d|K|)$. On $F$, $(x-a_F)\cdot n_K$ is the altitude $H_F$, so $\int_F\phi_{K,F}\cdot n_K=H_F|F|/(d|K|)=1$ by the simplex pyramid identity $d|K|=H_F|F|$. On any other facet, $a_F$ and $x$ lie in its hyperplane, hence $\phi_{K,F}\cdot n_K=0$. Thus $I_Kv=\sum_{F\subset\partial K}m_{K,F}(v)\phi_{K,F}$, where $m_{K,F}$ is the outward moment. By [F2], [F7], and Cauchy–Schwarz, $|m_{K,F}(v)|\le C(h_K^{(d-2)/2}\|v\|_K+h_K^{d/2}\|\nabla v\|_K)$. Also [F3] gives $\|\phi_{K,F}\|_K\le C h_K|K|^{-1/2}\le C h_K^{1-d/2}$. Multiplying and summing the fixed $d+1$ terms proves $\|I_Kv\|_K\le C(\|v\|_K+h_K\|\nabla v\|_K)$. Squaring and summing cells yields the global stability estimate since $h_K\le h$. [A1, F1, F2, F3, F7, algebra]

2.1 The divergence of $I_Kv\in\operatorname{RT}_0(K)$ is constant. For smooth-neighborhood approximants to $v|_K$ from [F5], Gauss–Green [F4] says the sum of their outward facet moments equals the integral of their divergence. The trace bound [F2] and H1 convergence let both sides pass to the limit, so $\int_K\operatorname{div}I_Kv=\sum_{F\subset\partial K}m_{K,F}(v)=\int_K\operatorname{div}v$. Dividing by $|K|$ gives the stated cell average. [A1, F2, F4, F5, step 1.1, algebra]

3.1 If $v\in H^1_0(D;\mathbb R^d)$, choose compactly supported smooth vector fields converging to it in H1 by [F5]. Their boundary facet moments are zero; the trace bound [F2] passes this zero moment to $v$. Hence $I_hv$ has zero boundary facet flux, and [F1] gives membership in $H_0(\operatorname{div};D)$; [F6] then gives $I_hv\in V_h$. [A1, F1, F2, F5, F6, step 2.1, algebra] ∎
