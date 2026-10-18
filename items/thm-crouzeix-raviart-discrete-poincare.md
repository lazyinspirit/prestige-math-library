---
id: thm-crouzeix-raviart-discrete-poincare
kind: theorem
title: Discrete Poincare inequality for homogeneous Crouzeix–Raviart functions
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - def-countable-choice
  - def-crouzeix-raviart-global-space
  - lem-crouzeix-raviart-conforming-companion
  - lem-crouzeix-raviart-continuous-poincare
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Part VIII, Chapter 36, Crouzeix–Raviart approximation
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap36.pdf
      locator: "Lemma 36.6 and its proof, PDF pp. 5–6: the discrete Poincare–Steklov inequality, proved there by elliptic duality and face estimates."
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 25, Non-conforming Finite Element Methods
      url: https://jschoeberl.github.io/iFEM/FEM/nonconforming.html
      locator: "§25.2, lines 280–312: the homogeneous CR space, broken-gradient norm, and conforming P1 subspace used for approximation."
---

## Statement

Assume Countable Choice. Let $\Omega$ be a bounded connected Lipschitz polyhedral domain and
$\mathcal T_h$ any finite matching shape-regular simplicial mesh. There is a
constant $C$ depending only on $\Omega$, $d$, and the shape-regularity bound
such that every $v_h\in V_h^{CR,0}$ satisfies
$$\|v_h\|_{L^2(\Omega)}\le C\|\nabla_hv_h\|_{L^2(\Omega)}.$$

## Facts & Assumptions

**Given:** Countable Choice, the mesh and homogeneous CR space of [[def-crouzeix-raviart-global-space]], $v_h\in V_h^{CR,0}$, and a slab $a<x\cdot e<b$ containing $\Omega$.

[A1] Countable Choice is required by the conforming-companion interface used below. ([[def-countable-choice]], [[lem-crouzeix-raviart-conforming-companion]])

[F1] The conforming companion satisfies $E_hv_h\in H^1_0(\Omega)$, $\|v_h-E_hv_h\|_2\le Ch\|\nabla_hv_h\|_2$, and $\|\nabla E_hv_h\|_2\le C\|\nabla_hv_h\|_2$. ([[lem-crouzeix-raviart-conforming-companion]])

[F2] Every $H^1_0(\Omega)$ function satisfies $\|w\|_2\le(b-a)\|\nabla w\|_2$. ([[lem-crouzeix-raviart-continuous-poincare]])

## Proof
1.1 Apply [F2] to $E_hv_h\in H^1_0(\Omega)$ and use [F1] to obtain $\|E_hv_h\|_2\le(b-a)\|\nabla E_hv_h\|_2\le C(b-a)\|\nabla_hv_h\|_2$. [A1, F1, F2, given]

2.1 By the triangle inequality and [F1], $\|v_h\|_2\le\|v_h-E_hv_h\|_2+\|E_hv_h\|_2 \le Ch\|\nabla_hv_h\|_2+C(b-a)\|\nabla_hv_h\|_2.$ The mesh cells lie in the bounded domain, so $h\le\operatorname{diam}(\Omega)$; absorb this fixed bound into $C$. [A1, F1, step 1.1, given, algebra] ∎
