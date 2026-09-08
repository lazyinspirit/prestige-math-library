---
id: lem-relative-bidual-evaluation-is-a-contraction
kind: lemma
title: Evaluation defines a bounded scalar-linear map into the bidual
status: draft
origin: pipeline
deps: [def-dual-space-of-a-normed-space, lem-operator-norm-is-a-norm]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations, §§1.1–1.2 and §1.3 evaluation paragraph
      url: https://www.math.utoronto.ca/almut/Brezis.pdf
    - title: Gerald Teschl, Topics in Real and Functional Analysis, Theorems 4.13–4.20 and §5.1 (2018 university-hosted copy)
      url: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf
pipeline_run: phase-2-wave-1
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
---

## Statement

Let $X$ be a normed space over $\mathbb K\in\{\mathbb R,\mathbb C\}$. Set $X^{**}=(X^*)^*$. Evaluation defines a bounded $\mathbb K$-linear map
$$J_X:X\longrightarrow X^{**},\qquad (J_Xx)(f)=f(x),$$
with $\|J_Xx\|\le\|x\|$ for every $x\in X$. This assertion uses ZF alone; it does not assert injectivity without HB.

## Facts & Assumptions

[F1] The dual is the space of bounded scalar-linear functionals with norm $\sup_{\|x\|\le1}|f(x)|$ ([[def-dual-space-of-a-normed-space]]).

[F2] The operator norm is a norm on the vector space of bounded linear operators ([[lem-operator-norm-is-a-norm]]).

## Proof

**Given:** A normed $\mathbb K$-space $X$; HB is not assumed.

1.1 By the operator-norm lemma, the space $X^*$ of bounded scalar-linear maps $X\to\mathbb K$ is itself a normed vector space. Therefore its dual $(X^*)^*$ is defined; this is the meaning of $X^{**}$. [given, F1, F2]

2.1 Fix $x\in X$. For $a,b\in\mathbb K$ and $f,g\in X^*$, evaluation gives $(af+bg)(x)=af(x)+bg(x)$, so the map $E_x:f\mapsto f(x)$ is scalar-linear. If $x\ne0$, $|f(x)|=\|x\||f(x/\|x\|)|\le\|x\|\|f\|$; if $x=0$, $f(x)=0$. Thus $E_x$ is bounded and belongs to $X^{**}$. [step 1.1, F1, algebra]

3.1 Define $J_X(x)=E_x$. For $x,y\in X$ and $a,b\in\mathbb K$, evaluating at every $f\in X^*$ gives $J_X(ax+by)(f)=f(ax+by)=aJ_X(x)(f)+bJ_X(y)(f)$. Equality at all arguments is equality of functions, hence $J_X$ is scalar-linear. [step 2.1, algebra]

4.1 Taking the supremum of $|E_x(f)|\le\|x\|\|f\|$ over $\|f\|\le1$ yields $\|J_Xx\|\le\|x\|$. This also proves boundedness of $J_X$ with constant one. At $x=0$, $E_0$ is the zero functional and has norm zero. No step required HB or completeness. [step 2.1, step 3.1, F1] ∎

## Source notes

Brezis §1.3 first paragraph, pp.8–9 through the isometry formula; Teschl paragraph preceding Theorem 4.20 and its upper-bound proof, pp.115–116.
