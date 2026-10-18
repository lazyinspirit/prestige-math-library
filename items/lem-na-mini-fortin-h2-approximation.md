---
id: lem-na-mini-fortin-h2-approximation
kind: lemma
title: Second-order L2 approximation by the MINI Fortin map
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 9
deps:
  - thm-na-mini-element-fortin-stability
  - lem-na-scott-zhang-boundary-preserving-p1-interpolant
  - def-na-mini-element-p1-bubble-p1-spaces
  - lem-shape-regular-affine-simplex-scaling
  - def-na-discrete-weak-and-exact-divergence-free-spaces
  - def-na-stokes-zero-mean-pressure-and-velocity-spaces
  - thm-na-discrete-helmholtz-projection-and-pressure-schur
  - thm-orthogonal-decomposition-by-a-closed-subspace
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - thm-holder-inequality-for-integrals
  - def-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 53: Stokes equations"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap53.pdf
      locator: Static mixed approximation context; the second-order estimate for the
        existing face-average MINI Fortin map is derived locally below.
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. Let $D$ be a bounded connected Lipschitz polygonal or polyhedral domain in dimension $d\in\{2,3\}$, with a matching affine shape-regular simplicial mesh and $h=\max_Kh_K$. Let $I_h$ be the face-average interpolant of [[lem-na-scott-zhang-boundary-preserving-p1-interpolant]], and let $\Pi_h$ be exactly the MINI Fortin map constructed in [[thm-na-mini-element-fortin-stability]]:
$$\Pi_hv=I_hv+\sum_Kb_Kc_K,\qquad c_K=\frac{\int_K(v-I_hv)}{\int_Kb_K}.$$
For $\omega_K$ the vertex patch of $K$ and every $v\in H^2(D)^d\cap H^1_0(D)^d$,
$$\|v-\Pi_hv\|_{L^2(K)}\le Ch_K^2\|D^2v\|_{L^2(\omega_K)},\qquad \|\nabla(v-\Pi_hv)\|_{L^2(K)}\le Ch_K\|D^2v\|_{L^2(\omega_K)}.$$
Consequently,
$$\|v-\Pi_hv\|_2\le Ch^2\|D^2v\|_2,\qquad \|v-\Pi_hv\|_V\le Ch\|D^2v\|_2,\qquad \|w\|_V:=\|\nabla w\|_2.$$
The constants depend only on dimension, the fixed domain and the mesh shape-regularity bound. They are independent of the smallest element diameter and require no quasiuniformity.

Let $V_\sigma$ and $Z_h$ be the exact solenoidal space and weak MINI kernel, and let $P_{Z_h}:L^2(D)^d\to Z_h$ be the $L^2$-orthogonal projector. For every $v\in H^2(D)^d\cap V_\sigma$,
$$\Pi_hv\in Z_h,\qquad \|(I-P_{Z_h})v\|_2\le Ch^2\|D^2v\|_2.$$
In particular, if $u\in W^{1,\infty}(0,T;H^2(D)^d\cap V_\sigma)$, then
$$\|(I-P_{Z_h})u\|_{L^\infty(0,T;L^2)}\le Ch^2\|u\|_{L^\infty(0,T;H^2)},\qquad \|(I-P_{Z_h})u_t\|_{L^\infty(0,T;L^2)}\le Ch^2\|u_t\|_{L^\infty(0,T;H^2)}.$$

## Facts & Assumptions

**Given:** Countable Choice, the domain, mesh, spaces, face-average interpolant and existing Fortin map in the Statement.

[A1] Countable Choice is inherited from the face-average interpolant and Fortin construction. No point evaluations or additional choice principle are used. ([[def-countable-choice]], [[lem-na-scott-zhang-boundary-preserving-p1-interpolant]], [[thm-na-mini-element-fortin-stability]])

[F1] The face-average interpolant is defined on $H^1(D)$, reproduces global affine polynomials, and satisfies $\|w-I_hw\|_{L^2(K)}\le Ch_K\|\nabla w\|_{L^2(\omega_K)}$. Its proof step 2.2 establishes that for $v\in H^2(D)$ there is an affine polynomial $p$ on each patch with $\|v-p\|_{L^2(\omega_K)}\le Ch_K^2\|D^2v\|_{L^2(\omega_K)}$ and $\|\nabla(v-p)\|_{L^2(\omega_K)}\le Ch_K\|D^2v\|_{L^2(\omega_K)}$. It also gives $\|\nabla(v-I_hv)\|_{L^2(K)}\le Ch_K\|D^2v\|_{L^2(\omega_K)}$, uniformly bounded patch overlap and comparable cell diameters within each patch. ([[lem-na-scott-zhang-boundary-preserving-p1-interpolant]])

[F2] The existing Fortin construction has the formula in the Statement, maps $H^1_0(D)^d$ into $V_h$, and preserves $b(\Pi_hv,q_h)=b(v,q_h)$ for every $q_h\in Q_h$. ([[thm-na-mini-element-fortin-stability]])

[F3] MINI bubble scaling gives $\int_Kb_K\ge c|K|$, $\|b_K\|_{L^2(K)}\le C|K|^{1/2}$, and $\|\nabla b_K\|_{L^2(K)}\le Ch_K^{-1}|K|^{1/2}$. ([[def-na-mini-element-p1-bubble-p1-spaces]], [[lem-shape-regular-affine-simplex-scaling]])

[F4] The spaces satisfy $V_\sigma=\{v\in H^1_0(D)^d:b(v,q)=0\text{ for all }q\in L^2_0(D)\}$ and $Z_h=\{v_h\in V_h:b(v_h,q_h)=0\text{ for all }q_h\in Q_h\}$. The finite-dimensional kernel $Z_h$ is closed in Hilbert $L^2(D)^d$; its orthogonal projection is the unique best $L^2$ approximation and agrees on $V_h$ with the mass projector of the discrete Helmholtz theorem. ([[def-na-stokes-zero-mean-pressure-and-velocity-spaces]], [[def-na-discrete-weak-and-exact-divergence-free-spaces]], [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], [[thm-orthogonal-decomposition-by-a-closed-subspace]], [[thm-na-discrete-helmholtz-projection-and-pressure-schur]])

[F5] Holder's inequality gives $|\int_Ke|\le |K|^{1/2}\|e\|_{L^2(K)}$ for vector-valued $e$, by Euclidean duality and the scalar inequality. ([[thm-holder-inequality-for-integrals]])

## Proof

**Given:** The inputs and the same operators $I_h,\Pi_h$ specified in the Statement.

1.1 Fix a cell $K$ and first take one scalar component of $v$. Let $p$ be the affine patch approximant from [F1], regarded as a global affine polynomial on $D$. This causes no boundary restriction, because $I_h$ is defined on all of $H^1(D)$. Set $w=v-p$. Affine reproduction gives $v-I_hv=w-I_hw$ on $K$. Apply the first-order local $L^2$ estimate in [F1] to $w$ and its patch gradient estimate to obtain $\|v-I_hv\|_{L^2(K)}\le Ch_K\|\nabla(v-p)\|_{L^2(\omega_K)}\le Ch_K^2\|D^2v\|_{L^2(\omega_K)}$. Apply this componentwise and sum squares for vector $v$. The local gradient bound $\|\nabla(v-I_hv)\|_{L^2(K)}\le Ch_K\|D^2v\|_{L^2(\omega_K)}$ is also [F1]. All these estimates use facet averages and require no representative with point values. [A1, F1, given, choose]

1.2 Write $e_K=v-I_hv$ on $K$. The actual numerator of the Fortin coefficient is the unweighted integral of $e_K$, so [F3] and [F5] give $|c_K|\le |K|^{1/2}(\int_Kb_K)^{-1}\|e_K\|_{L^2(K)}\le C|K|^{-1/2}\|e_K\|_{L^2(K)}$. Hence $\|b_Kc_K\|_{L^2(K)}\le C\|e_K\|_{L^2(K)}$ and $\|\nabla(b_Kc_K)\|_{L^2(K)}\le Ch_K^{-1}\|e_K\|_{L^2(K)}$. No bound involving a global inverse mesh scale is used. [F2, F3, F5, algebra]

2.1 Bubble interiors are disjoint, so on $K$ the existing map satisfies $v-\Pi_hv=e_K-b_Kc_K$. The triangle inequality, step 1.2 and step 1.1 imply $\|v-\Pi_hv\|_{L^2(K)}\le Ch_K^2\|D^2v\|_{L^2(\omega_K)}$ and $\|\nabla(v-\Pi_hv)\|_{L^2(K)}\le Ch_K\|D^2v\|_{L^2(\omega_K)}$. The zero-boundary membership of $\Pi_hv$ is already ensured by [F2]. [F2, step 1.1, step 1.2, algebra]

3.1 Square and sum the two estimates in step 2.1. Since $h_K\le h$ and the patch overlap is uniformly bounded by [F1], $\sum_Kh_K^4\|D^2v\|_{L^2(\omega_K)}^2\le Ch^4\|D^2v\|_2^2$ and $\sum_Kh_K^2\|D^2v\|_{L^2(\omega_K)}^2\le Ch^2\|D^2v\|_2^2$. Taking square roots proves the two global approximation estimates, with the asserted dependence of constants. [F1, step 2.1, algebra]

4.1 Suppose $v\in H^2(D)^d\cap V_\sigma$. Because $Q_h\subset L^2_0(D)$, [F4] gives $b(v,q_h)=0$ for every $q_h\in Q_h$. Fortin preservation [F2] therefore puts $\Pi_hv\in Z_h$. Best approximation [F4] and step 3.1 give $\|(I-P_{Z_h})v\|_2\le\|v-\Pi_hv\|_2\le Ch^2\|D^2v\|_2$. This uses only $L^2$ orthogonality, with no $H^1$ estimate for $P_{Z_h}$. [F2, F4, step 3.1, given]

5.1 Finally let $X=H^2(D)^d\cap V_\sigma$ with its $H^2$ norm and suppose $u\in W^{1,\infty}(0,T;X)$. By this Bochner Sobolev hypothesis, $u(t)$ and $u_t(t)$ belong to $X$ for almost every $t$, and their $H^2$ norms have the stated essential bounds. Apply step 4.1 separately to these two fields at such times and take essential suprema. The two claimed time-dependent estimates follow. Together with steps 2.1 and 3.1 this proves every assertion. [step 2.1, step 3.1, step 4.1, given] ∎

## Remarks

This result concerns the existing face-average Fortin map and the mass-orthogonal projector onto the weak MINI kernel. It supplies neither uniform $H^1$ stability of that mass projector nor an instantaneous evolutionary pressure estimate. Its second-order $L^2$ conclusion is obtained directly from local interpolation and cell moments, with no elliptic duality or domain Stokes regularity assumption.
