---
id: lem-na-mini-fortin-l2-approximation
kind: lemma
title: "The mini-element Fortin map approximates in L2"
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 8
deps:
  [
    def-na-mini-element-p1-bubble-p1-spaces,
    thm-na-mini-element-fortin-stability,
    lem-na-scott-zhang-boundary-preserving-p1-interpolant,
    lem-shape-regular-affine-simplex-scaling,
    thm-multivariable-taylor-formula-with-lagrange-remainder,
    def-wkp-zero-as-a-sobolev-closure,
    thm-holder-inequality-for-integrals,
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
    - title: "Endre Süli and Tabea Tscherpel, Fully discrete finite element
        approximation of unsteady flows of implicitly constituted incompressible
        fluids, arXiv:1804.02264v1"
      url: https://arxiv.org/pdf/1804.02264
      locator: "§3.1, Assumption 3.3 and Example 3.6(iii): the MINI Fortin projector
        preserves discrete divergence and is uniformly stable."
    - title: "Xiaoming He, Introduction and Basic Implementation for Finite Element
        Methods, Chapter 9: Finite elements for 2D unsteady Navier–Stokes
        equations"
      url: https://bpb-us-e2.wpmucdn.com/sites.mst.edu/dist/a/189/files/2023/09/Finite_Elements_Chapter_9.pdf
      locator: "§§1–2: conforming interpolation and finite-element test spaces; the
        Fortin correction estimate is derived locally."
verification:
  precheck: pass
---

## Statement

Let $\Pi_h:H^1_0(D;\mathbb R^d)\to V_h$ be the MINI Fortin map constructed in [[thm-na-mini-element-fortin-stability]]. On every shape-regular matching mesh, there is a constant $C$ independent of $h$ such that
$$\|v-\Pi_hv\|_{L^2(D)}\le Ch\|\nabla v\|_{L^2(D)}\qquad(v\in H^1_0(D;\mathbb R^d)).$$
For every fixed $v\in H^1_0(D)^d$, $\Pi_hv\to v$ in $H^1_0$ as $h\to0$. If $v\in V_\sigma$, exact Fortin preservation also gives $\Pi_hv\in Z_h$.

## Facts & Assumptions

**Given:** Countable Choice, a bounded connected polyhedral domain, a shape-regular matching mesh, $v\in H^1_0(D)^d$, its face-average interpolant $I_h$, and the MINI bubbles.

[F1] The Fortin construction is $\Pi_hv=I_hv+\sum_K b_Kc_K$, with $c_K=(\int_Kb_K)^{-1}\int_K(v-I_hv)$, and it maps $H^1_0$ into $V_h$. ([[thm-na-mini-element-fortin-stability]])

[F2] The interpolant satisfies $\|v-I_hv\|_{L^2(K)}\le Ch_K\|\nabla v\|_{L^2(\omega_K)}$, with uniformly bounded patch overlap. ([[lem-na-scott-zhang-boundary-preserving-p1-interpolant]])

[F3] Reference scaling gives $\int_Kb_K\asymp h_K^d$ and $\|b_K\|_{L^2(K)}\le Ch_K^{d/2}$. ([[def-na-mini-element-p1-bubble-p1-spaces]], [[lem-shape-regular-affine-simplex-scaling]])

[F4] The Fortin map preserves the MINI pressure pairing: $b(\Pi_hv,q_h)=b(v,q_h)$ for every $q_h\in Q_h$. ([[thm-na-mini-element-fortin-stability]])

[F5] The face-average interpolant reproduces affine fields, has uniformly bounded facet dual moments under shape scaling, and satisfies the global $H^1$ approximation estimate for $H^2$ fields. ([[lem-na-scott-zhang-boundary-preserving-p1-interpolant]], [[lem-shape-regular-affine-simplex-scaling]])

[F6] The multivariable Taylor formula on a convex open set gives a second-order pointwise remainder along each segment from the Taylor base point. ([[thm-multivariable-taylor-formula-with-lagrange-remainder]])

[F7] $H^1_0(D)$ is the closure of $C_c^\infty(D)$, and the Fortin map is uniformly bounded in $H^1_0$. ([[def-wkp-zero-as-a-sobolev-closure]], [[thm-na-mini-element-fortin-stability]])

[F8] Holder's inequality bounds scalar-product integrals by the product of the L2 norms. ([[thm-holder-inequality-for-integrals]])

[A1] Countable Choice is assumed through the Fortin construction and the stated well-definedness inputs. ([[def-countable-choice]], [[thm-na-mini-element-fortin-stability]])

## Proof

1.1 Put $e_K=v-I_hv$. By Holder and [F3], $|c_K|\le\frac{|K|^{1/2}}{\int_Kb_K}\|e_K\|_{L^2(K)}\le Ch_K^{-d/2}\|e_K\|_{L^2(K)}.$ Therefore $\|b_Kc_K\|_{L^2(K)}\le C\|e_K\|_{L^2(K)}$. [F1, F3, F8]

1.2 If $v\in V_\sigma$, then $b(v,q_h)=0$ for all $q_h\in Q_h$ by definition of $V_\sigma$ and $b$. Preservation [F4] gives $b(\Pi_hv,q_h)=0$ for every $q_h$, so $\Pi_hv\in Z_h$. [F1, F4, given]

1.3 Let $v\in C_c^\infty(D)^d$ and extend it by zero to $\mathbb R^d$. On each cell $K$, choose a vertex $x_K$ and let $p_K$ be the affine Taylor polynomial of $v$ there. Every selected facet used in $I_h$ for a vertex of $K$ lies within $Ch_K$ of $x_K$ by the patch geometry in the face-average interpolation supplier. Apply [F6] on the convex open set $\mathbb R^d$; the pointwise Taylor error on those facets is at most $Ch_K^2\|D^2v\|_\infty$. The scaled dual moments in [F5] then bound the coefficients of $I_h(v-p_K)$ on $K$ by the same amount. Since $I_h$ reproduces $p_K$, this yields $\|v-I_hv\|_{L^\infty(K)}\le Ch_K^2\|D^2v\|_\infty$ and $|c_K|\le Ch_K^2\|D^2v\|_\infty$. Bubble scaling [F3] gives $\|\nabla(b_Kc_K)\|_{L^2(K)}\le Ch_K^{d/2+1}\|D^2v\|_\infty$. Also $h_K^d\le C|K|$ by [F3], so summing squares gives $\|\nabla(\Pi_hv-I_hv)\|_2\le Ch\|D^2v\|_\infty$. The H2-to-H1 estimate in [F5] gives $\|I_hv-v\|_V\to0$, hence $\Pi_hv\to v$ in $V$. [F3, F5, F6]

2.1 On each cell, $v-\Pi_hv=e_K-b_Kc_K$, so step 1.1 and the triangle inequality give $\|v-\Pi_hv\|_{L^2(K)}\le C\|v-I_hv\|_{L^2(K)}$. Square, sum over cells, apply [F2], and use bounded patch overlap to obtain $\|v-\Pi_hv\|_{L^2(D)}\le Ch\|\nabla v\|_{L^2(D)}$. [F2, step 1.1, algebra]

3.1 For general $v\in V$, choose $\phi\in C_c^\infty(D)^d$ with $\|v-\phi\|_V<\epsilon$, using [F7]. Uniform Fortin stability [F7] gives $\|\Pi_hv-v\|_V\le(C_F+1)\epsilon+\|\Pi_h\phi-\phi\|_V$. Let $h\to0$ by step 1.3 and then $\epsilon\downarrow0$. This proves strong $H^1_0$ convergence for every fixed $v$. [A1, F7, step 1.3, choose] ∎
