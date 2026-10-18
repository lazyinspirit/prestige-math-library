---
id: thm-supg-one-dimensional-consistency-coercivity
kind: theorem
title: "One-dimensional P1 SUPG is consistent and coercive"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-supg-one-dimensional-convection-diffusion-model, def-supg-one-dimensional-residual-form, lem-supg-one-dimensional-optimal-parameter]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Volker John, Numerical Methods for Convection-Dominated Problems, lecture notes, Chapter 5"
      url: "https://www.wias-berlin.de/people/john/LEHRE/NUM_KONV_PROB_13_14/num_conv_dom.pdf"
      locator: "Lemma 5.20, Corollary 5.23, and the P1 specialization of Theorem 5.22, printed pp. 57–58; the local proof here uses constant $b$, $c=0$."
    - title: "Hans Petter Langtangen, INF5620: Numerical Methods for Partial Differential Equations, lecture slides"
      url: "https://hplgit.github.io/INF5620/doc/web/literature/slides5620_12_8.pdf"
      locator: "Slides 84–86, PDF pp. 10–11: the consistent SUPG residual, P1 cell second derivative, and the scope of the multidimensional extension."
---

## Statement

Assume the one-dimensional model of [[def-supg-one-dimensional-convection-diffusion-model]] with homogeneous data $g_0=g_1=0$, and the form of [[def-supg-one-dimensional-residual-form]]. Let $u\in C^2([0,1])$ solve $-\epsilon u''+bu'=f$ with $u(0)=u(1)=0$. Then $a_h(u,v_h)=F_h(v_h)$ for every $v_h\in V_h$. For every $v_h\in V_h$,
$$a_h(v_h,v_h)=\epsilon\|v_h'\|_{L^2(0,1)}^2+\tau b^2\sum_{K\in\mathcal T_h}\|v_h'\|_{L^2(K)}^2.$$
The right-hand side is a squared norm on $V_h$. Consequently the finite-dimensional SUPG system has a unique solution.

## Facts & Assumptions

**Given:** A uniform interval partition, $\epsilon>0$, $b\ne0$, $f\in C([0,1])$, the homogeneous problem above, and the SUPG form and parameter.

[F1] [[def-supg-one-dimensional-convection-diffusion-model]]: $V_h$ consists of continuous piecewise-affine functions vanishing at both endpoints; the exact solution satisfies $-\epsilon u''+bu'=f$.

[F2] [[def-supg-one-dimensional-residual-form]]: $a_h(w,v_h)$ pairs $-\epsilon w''+bw'$ against $\tau b v_h'$ cellwise and $F_h$ pairs $f$ against the same test perturbation; for P1 $w_h$, $w_h''=0$.

[F3] [[lem-supg-one-dimensional-optimal-parameter]]: $\tau>0$ for $\epsilon>0$, $b\ne0$, and $h>0$.

## Proof

1.1 For $v_h\in V_h$, continuity and piecewise absolute continuity give $\int_0^1bv_h'v_h\,dx=\frac b2\sum_K[v_h^2]_{\partial K}=\frac b2(v_h(1)^2-v_h(0)^2)=0$. The endpoint values vanish by [F1]. [F1, given, algebra]

1.2 Integration by parts, with $v_h(0)=v_h(1)=0$, gives $\epsilon(u',v_h')+(bu',v_h)=(-\epsilon u''+bu',v_h)=(f,v_h)$. The stabilization contribution to $a_h(u,v_h)$ is $\sum_K\tau(-\epsilon u''+bu',bv_h')_K$, which equals $\sum_K\tau(f,bv_h')_K$ by the strong equation. This is exactly the stabilization contribution to $F_h$, so $a_h(u,v_h)=F_h(v_h)$. [F1, F2, given, algebra]

2.1 Substituting step 1.1 into [F2] with $w_h=v_h$ yields the displayed identity. Its right side is nonnegative by [F3] and $\epsilon>0$. If it is zero, then $v_h'=0$ on every cell; continuity makes $v_h$ constant on $[0,1]$, and its zero endpoints force $v_h=0$. Hence this quadratic form is a norm squared. [F2, F3, step 1.1, algebra]

3.1 In a basis of the finite-dimensional space $V_h$, the discrete form defines a square linear map $V_h\to V_h^*$. If a vector is in its kernel, testing with that vector and using step 2.1 gives that it is zero. Thus the map is injective, hence bijective in finite equal dimensions, so each discrete load has exactly one solution. [step 2.1, given, algebra]

4.1 Subtracting the discrete equation from the consistency identity in step 1.2 gives $a_h(u-u_h,v_h)=0$ for every $v_h\in V_h$; the solution exists by step 3.1. [step 1.2, step 3.1, algebra] ∎
