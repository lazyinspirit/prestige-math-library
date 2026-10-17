---
id: cor-relative-hahn-banach-bidual-isometry
kind: corollary
title: Relative Hahn–Banach makes the canonical bidual map an isometry
status: published
origin: pipeline
deps: [cor-relative-hahn-banach-dual-norming, lem-relative-bidual-evaluation-is-a-contraction]
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
  audited: 2026-09-09
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
---

## Statement

Assume HB. For every real or complex normed space $X$, the canonical scalar-linear map $J_X:X\to X^{**}$, given by $J_X(x)(f)=f(x)$, satisfies
$$\|J_Xx\|=\|x\|\qquad(x\in X).$$
It preserves distances and is injective. Surjectivity is not claimed.

## Facts & Assumptions

[F1] Under HB, each nonzero $x$ has a functional $f$ with $\|f\|=1$ and $f(x)=\|x\|$ ([[cor-relative-hahn-banach-dual-norming]]).

[F2] Evaluation defines a scalar-linear $J_X:X\to X^{**}$ with $\|J_Xx\|\le\|x\|$ ([[lem-relative-bidual-evaluation-is-a-contraction]]).

## Proof

**Given:** HB, a normed real or complex space $X$, and the evaluation map $J_X$.

1.1 By the evaluation construction, $J_X$ is scalar-linear and $\|J_Xx\|\le\|x\|$ for every $x$. In particular $J_X0=0$ and equality of the norms holds at zero. [given, F2]

2.1 For $x\ne0$, HB norming gives $f\in X^*$ with $\|f\|=1$ and $f(x)=\|x\|$. The bidual norm is the supremum over the dual unit ball, which contains this $f$, so $\|J_Xx\|\ge|J_Xx(f)|=|f(x)|=\|x\|$. Combining with step 1.1 proves equality at every $x$. [step 1.1, F1, F2]

3.1 For $x,y\in X$, linearity and the established equality give $\|J_Xx-J_Xy\|=\|J_X(x-y)\|=\|x-y\|$. If $J_Xx=J_Xy$, the left side is zero, so definiteness of the norm gives $x=y$. [step 1.1, step 2.1, algebra] ∎

## Source notes

Brezis §1.3, pp.8–9, first displayed isometry calculation; Teschl Theorem 4.20, pp.115–116.
