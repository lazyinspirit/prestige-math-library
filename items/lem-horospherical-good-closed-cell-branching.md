---
dependency_level: 2
id: lem-horospherical-good-closed-cell-branching
kind: lemma
title: "Many good closed cells after horospherical expansion"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - lem-semisimple-horospherical-local-product-and-tiles
  - lem-mixing-horospherical-positive-proportion
  - def-countable-choice
proof_strategy: direct
sources:
  references:
    - title: "Kleinbock, Badly approximable systems of affine forms"
      url: "https://arxiv.org/pdf/math/9808057v2"
      locator: "Proposition 3.1 and Theorem 3.2; closed-cell conventions restored from the PDF"
---

## Statement

Assume Countable Choice and the semisimple mixing horospherical setting. Let $K\subset\Omega$ be compact with $\bar\mu(K)>0$ and $\bar\mu(\partial K)=0$, and let $Q\subset\Omega$ be compact. In the coordinate tilings $V_r,\gamma_b$, sufficiently small $r>0$ admit $T_0$ such that, for every $t\ge T_0$ and $y\in Q$, the finite set
$$\Lambda_t(y)=\{b\in\mathbb Z^k:\overline V_r\gamma_b\subset\Phi_t(V_r),\quad(\overline V_r\gamma_b)a_ty\subset K\}$$
satisfies $\#\Lambda_t(y)\ge\delta e^{\chi t}$, where one may take $\delta=\bar\mu(K)/4>0$. Each inverse expanded cell has volume $e^{-\chi t}\nu_H(V_r)$ and diameter at most $C e^{-\lambda t}\operatorname{diam}(\overline V_r)$. Its next base point $\gamma_ba_ty$ lies in $K$. The waiting time may depend on $r,K,Q$; $\delta$ does not depend on $t,y,r$.

## Statement references

[Kleinbock, Proposition 3.1 and Theorem 3.2](https://arxiv.org/pdf/math/9808057v2) — boundary-cell loss and positive retained proportion.

## Facts & Assumptions

**Given:** Countable Choice, the flow and tiling data, and compact $K,Q$ as stated.

[F1] Closed cells cover $H$, have disjoint open interiors and null boundaries, are locally finite, and have equal volume. The inverse flow has Lipschitz constant at most $Ce^{-\lambda t}$ and volume scale $e^{-\chi t}$. [[lem-semisimple-horospherical-local-product-and-tiles]]

[F2] For sufficiently small $V_r$, the proportion of $h\in V_r$ with $a_thy\in K'$ is at least $\bar\mu(K')$ minus any prescribed error for all sufficiently large $t$, uniformly on compact base-point families, when $K'$ is compact with null boundary. [[lem-mixing-horospherical-positive-proportion]]

[A1] Countable Choice is assumed for the conditional Lie, integration, measure or dimension suppliers actually invoked below. No stronger Choice axiom is adopted. [[def-countable-choice]]

## Proof

**Proof technique:** count the cells covering an interior target and subtract the boundary cells.

1.1 Choose a compact finite union of coordinate boxes $K'\subset\operatorname{int}K$ with null boundary and $\bar\mu(K')\ge3\bar\mu(K)/4$. This is possible by smoothness and null boundary as in the compact-inner-box construction in F2. Choose $r_0>0$ so small that $\overline V_r\overline V_r^{-1}K'\subset\operatorname{int}K$ for $0<r\le r_0$, and the transverse injectivity condition of F2 holds uniformly on $Q$. The first condition follows from continuity of the action on compact $K'$ and $\overline V_r\overline V_r^{-1}\to\{e\}$. Fix one such $r$ and put $V=V_r$, $D_0=\operatorname{diam}(\overline V)$. [given, F1, F2, construct, A1]

2.1 Let $B_t$ be the indices whose closed cells meet $\partial\Phi_t(V)$. There are finitely many by local finiteness. Each inverse image cell has diameter at most $Ce^{-\lambda t}D_0$ and meets $\partial V$, so its entirety lies in that distance neighbourhood of $\partial V$. Its volume is $e^{-\chi t}\nu_H(V)$ and different inverse cells have measure-zero intersections. Thus $e^{-\chi t}\#B_t\le\nu_H(N_{Ce^{-\lambda t}D_0}(\partial V))/\nu_H(V)\to0$. Indeed $\partial V$ is compact and null; sufficiently small such neighbourhoods lie in one fixed compact neighbourhood, so continuity from above makes their measures tend to zero. No global properness theorem for the Riemannian metric is needed for this compact local argument. [F1, step 1.1, algebra]

2.2 Apply F2 to $K'$ with error $\nu_H(V)\bar\mu(K)/4$. For all sufficiently large $t$, uniformly over $y\in Q$, the set $E_t(y)=\{h\in\Phi_t(V):ha_ty\in K'\}$ has volume at least $e^{\chi t}\nu_H(V)\bar\mu(K)/2$, by the volume scale in F1. Its covering closed cells therefore number at least $e^{\chi t}\bar\mu(K)/2$. If such a cell avoids $\partial\Phi_t(V)$, its connected closed box lies entirely inside $\Phi_t(V)$, since it meets the interior and any path to the exterior would cross the boundary. If $v_0\gamma_ba_ty\in K'$ at its meeting point, then every $v\in\overline V$ has $v\gamma_ba_ty\in\overline V\overline V^{-1}K'\subset K$. Hence every covering cell not counted in $B_t$ belongs to $\Lambda_t(y)$. [F1, F2, step 1.1, algebra]

3.1 By step 2.1 enlarge the waiting time so $\#B_t\le e^{\chi t}\bar\mu(K)/4$. Subtracting this loss from step 2.2 gives $\#\Lambda_t(y)\ge\delta e^{\chi t}$ with $\delta=\bar\mu(K)/4$. Finiteness follows from local finiteness on the compact closure of $\Phi_t(V)$. F1 gives the stated volume and diameter of every inverse expanded cell. Since $e\in\overline V$, its full-target condition also gives $\gamma_ba_ty\in K$. The constants and target tests were uniform over $Q$, proving all assertions. [F1, step 2.1, step 2.2, algebra] ∎

