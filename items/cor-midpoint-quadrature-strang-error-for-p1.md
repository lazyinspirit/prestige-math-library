---
id: cor-midpoint-quadrature-strang-error-for-p1
kind: corollary
title: A midpoint-quadrature P1 solve has an explicit Strang error budget
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps: [def-variational-crime-error-framework, thm-first-strang-lemma-for-conforming-perturbed-galerkin, lem-one-dimensional-p1-interpolation-error, lem-midpoint-quadrature-defect-for-p1-stiffness, lem-one-dimensional-zero-boundary-poincare, lem-w-one-two-is-a-hilbert-space, def-wkp-zero-as-a-sobolev-closure, def-sobolev-space-wkp-and-its-norm, def-countable-choice, thm-holder-inequality-for-integrals, thm-cauchy-schwarz-and-the-euclidean-norm]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Part VI, Chapter 27, Error analysis with variational crimes
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap27.pdf
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 25, Non-conforming Finite Element Methods
      url: https://jschoeberl.github.io/iFEM/FEM/nonconforming.html
---

## Statement

Assume Countable Choice. Put $V:=H^1_0(0,1;\mathbb R)$ with its $H^1$ norm, and let $V_h\subseteq V$ be a finite-dimensional conforming piecewise-linear space on an interval partition with maximum cell width $h$. Let $u\in C^2([0,1])\cap V$ and assume its nodal interpolant $I_hu$ belongs to $V_h$. Let $A\in C^2([0,1])$ satisfy $0<\alpha\le A(x)\le M$, and write $C_A:=\|A''\|_{L^\infty(0,1)}$. Define $a(v,w)=\int_0^1A v'w'$ and let $a_h$ use one midpoint quadrature sample per cell. Let $F$ and $F_h$ be bounded real linear exact and discrete loads, with $F(v)=a(u,v)$ for every $v\in V$, and put $\delta_{F,h}:=\sup_{w_h\ne0}|F(w_h)-F_h(w_h)|/\|w_h\|_{H^1}$, with $\delta_{F,h}=0$ if $V_h=\{0\}$. Then the exact and discrete solutions satisfy

$$\|u-u_h\|_{H^1}\le(1+2M/\alpha)\sqrt2h\|u''\|_\infty+\frac2\alpha\left(\frac{C_Ah^2}{24}(\|u'\|_2+h\|u''\|_\infty)+\delta_{F,h}\right).$$

The explicit $\delta_{F,h}$ is the data/source oscillation term; no rate or vanishing of it is asserted without an additional load approximation hypothesis. Here coercivity follows directly because every sampled coefficient satisfies $A(m_K)\ge\alpha$; this special argument does not infer stability from quadrature exactness.

## Facts & Assumptions

**Given:** Countable Choice; $V=H^1_0(0,1)$; a conforming finite-dimensional P1 space $V_h$; $u\in C^2\cap V$ with $I_hu\in V_h$; $A\in C^2$ with $\alpha\le A\le M$; and bounded loads $F,F_h$.

[F1] [[lem-w-one-two-is-a-hilbert-space]] and [[def-wkp-zero-as-a-sobolev-closure]]: under Countable Choice, $H^1_0(0,1)$ is a Hilbert space for its $H^1$ inner product.

[F2] [[lem-one-dimensional-zero-boundary-poincare]]: $\|v\|_2\le\|v'\|_2$ for $v\in H^1_0(0,1)$.

[F3] [[lem-one-dimensional-p1-interpolation-error]]: $\|(u-I_hu)'\|_2\le h\|u''\|_\infty$.

[F4] [[lem-midpoint-quadrature-defect-for-p1-stiffness]]: $|a(v_h,w_h)-a_h(v_h,w_h)|\le C_Ah^2\|v_h'\|_2\|w_h'\|_2/24$, with $\|v_h'\|_2^2=\sum_Kh_K|v_h'|_K^2$ and the analogous identity for every $w_h\in V_h$.

[F5] [[thm-first-strang-lemma-for-conforming-perturbed-galerkin]]: error is bounded by best approximation plus the form and load defects divided by discrete coercivity.

[F6] Holder's inequality for the exact form and finite Cauchy–Schwarz for the cell sum ([[thm-holder-inequality-for-integrals]], [[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[A1] The exact and discrete equations are $a(u,v)=F(v)$ and $a_h(u_h,w_h)=F_h(w_h)$, and $\delta_{F,h}$ is as in the Statement.

## Proof

1.1 By [F2], $\|v\|_{H^1}^2=\|v\|_2^2+\|v'\|_2^2\le2\|v'\|_2^2$. Holder [F6] gives $|a(v,w)|\le M\|v'\|_2\|w'\|_2\le M\|v\|_{H^1}\|w\|_{H^1}$, while $a(v,v)\ge\alpha\|v'\|_2^2\ge(\alpha/2)\|v\|_{H^1}^2$. Thus $a$ is bounded and coercive in the inherited $H^1$ norm. [F1, F2, F6, given, algebra]

1.2 The norm identity in [F4] and finite Cauchy–Schwarz [F6] give, for $v_h,w_h\in V_h$, $|a_h(v_h,w_h)|\le M\sum_Kh_K|v_h'|_K|w_h'|_K\le M\|v_h'\|_2\|w_h'\|_2\le M\|v_h\|_{H^1}\|w_h\|_{H^1}$, so $a_h$ is bounded. Also $A(m_K)\ge\alpha$ on each cell, so $a_h(v_h,v_h)=\sum_Kh_KA(m_K)|v_h'|_K^2\ge\alpha\|v_h'\|_2^2$. By [F2], $\|v_h\|_{H^1}^2\le2\|v_h'\|_2^2$, hence $a_h(v_h,v_h)\ge(\alpha/2)\|v_h\|_{H^1}^2$ and $\alpha_h\ge\alpha/2$. [F2, F4, F6, given, algebra]

1.3 By [F3] and [F2], $\|u-I_hu\|_{H^1}\le\sqrt2\|(u-I_hu)'\|_2\le\sqrt2h\|u''\|_\infty$. Also the triangle inequality gives $\|(I_hu)'\|_2\le\|u'\|_2+h\|u''\|_\infty$. [F2, F3, given, algebra]

2.1 Apply [F5] with comparison function $I_hu$. Its best-approximation term is bounded by step 1.3; [F4] bounds its form defect by $C_Ah^2(\|u'\|_2+h\|u''\|_\infty)/24$ because $\|w_h'\|_2\le\|w_h\|_{H^1}$. The load defect is exactly $\delta_{F,h}$ by [A1]. [F4, F5, A1, step 1.3]

3.1 Substitute $M$ from step 1.1 and $\alpha_h\ge\alpha/2$ from step 1.2 into the first-Strang bound in step 2.1. This gives the displayed estimate and retains the full load defect. [step 1.1, step 1.2, step 2.1, algebra] ∎
