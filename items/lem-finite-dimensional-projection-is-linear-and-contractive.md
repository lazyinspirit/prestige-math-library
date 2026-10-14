---
id: lem-finite-dimensional-projection-is-linear-and-contractive
kind: lemma
title: "Finite-dimensional orthogonal projections are linear and contractive"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps:
  - def-orthogonal-projection
  - def-linear-subspace
  - def-orthogonality-and-orthogonal-complement
  - prop-pythagorean-parallelogram-and-polarisation-identities
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Chapter 2, §§7–8"
      url: "https://arxiv.org/pdf/2310.19244v1"
    - title: "Sylvain Arlot, Model/estimator selection, Lecture on model selection, §§1–2"
      url: "https://uq.math.cnrs.fr/media/210618_ecole_ete_cea-edf-inria__modsel_penmin_crossval.pdf"
---

## Statement

Let $V$ be a finite-dimensional real inner-product space, let $W\subseteq V$ be a
linear subspace, and let $P_W:V\to W$ be the orthogonal projection. Then $P_W$
is linear and satisfies $\|P_Wx\|\le \|x\|$ for every $x\in V$. In particular,
$P_W$ is continuous.

## Facts & Assumptions

**Given:** A finite-dimensional real inner-product space $V$, a subspace $W$, its
orthogonal projection $P_W$, and vectors $x,y\in V$.

[F1] $P_Wz\in W$ and $z-P_Wz\in W^\perp$, and this decomposition is unique
([[def-orthogonal-projection]]).

[F2] $W$ and $W^\perp$ are linear subspaces
([[def-linear-subspace]], [[def-orthogonality-and-orthogonal-complement]]).

[F3] If $u\perp v$, then $\|u+v\|^2=\|u\|^2+\|v\|^2$
([[prop-pythagorean-parallelogram-and-polarisation-identities]]).

## Proof

1.1 The vectors $P_Wx+P_Wy\in W$ and $(x+y)-(P_Wx+P_Wy)=(x-P_Wx)+(y-P_Wy)\in W^\perp$ form a decomposition of $x+y$ of the type in [F1] by [F2]. Uniqueness in [F1] therefore gives $P_W(x+y)=P_Wx+P_Wy$. [F1, F2]

2.1 For any scalar $a\in\mathbb R$, $aP_Wx\in W$ and $ax-aP_Wx=a(x-P_Wx)\in W^\perp$ by [F2]. Uniqueness in [F1] gives $P_W(ax)=aP_Wx$. Together with step 1.1 this proves linearity. [F1, F2, step 1.1]

3.1 The decomposition $x=P_Wx+(x-P_Wx)$ is orthogonal by [F1]. Pythagoras [F3] yields $\|x\|^2=\|P_Wx\|^2+\|x-P_Wx\|^2\ge\|P_Wx\|^2$, hence $\|P_Wx\|\le\|x\|$. By linearity, $\|P_Wx-P_Wy\|=\|P_W(x-y)\|\le\|x-y\|$, so $P_W$ is continuous. [F1, F3, step 1.1, step 2.1, algebra] ∎
