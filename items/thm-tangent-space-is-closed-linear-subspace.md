---
id: thm-tangent-space-is-closed-linear-subspace
kind: theorem
title: A tangent space is a closed linear subspace
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 7
deps:
  - def-tangent-space
  - def-linear-subspace
  - def-countable-choice
  - thm-mean-zero-square-integrable-space-is-hilbert
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: A. W. van der Vaart, Semiparametric Statistics, Lecture 1 §1.2
      url: https://sites.stat.washington.edu/jaw/COURSES/EPWG/stflour.pdf
    - title: Edward H. Kennedy, Semiparametric theory, §4
      url: https://arxiv.org/pdf/1709.06418
---

## Statement

Assume Countable Choice. Let $\dot{\mathcal M}(P)$ be any tangent set in the real Hilbert space $L^2_0(P)$. Its tangent space $\mathcal T(P)$, defined as the norm closure of its finite real linear span ([[def-tangent-space]]), is a closed linear subspace of $L^2_0(P)$ ([[def-linear-subspace]]).

## Facts & Assumptions

**Given:** Countable Choice, a probability law $P$, and a tangent set $\dot{\mathcal M}(P)\subseteq L^2_0(P)$.

[A1] Countable Choice is the selection principle required by the general $L^2(P)$ completeness supplier ([[def-countable-choice]]).

[F1] The tangent space is the norm closure of all finite real linear combinations of tangent-set scores ([[def-tangent-space]]).

[F2] Under Countable Choice, $L^2_0(P)$ is a complete real inner-product space ([[thm-mean-zero-square-integrable-space-is-hilbert]]).

[F3] A linear subspace is a subset containing the zero vector and closed under addition and real scalar multiplication ([[def-linear-subspace]]).

## Proof

**Proof technique:** Prove the closure is linear, closed, and complete in the inherited norm.

1.1 Let $V$ be the finite real span in [F1]. By collecting coefficients of each score, the sum of two finite linear combinations is another finite linear combination; scalar multiples have the same form, and $0$ is the empty sum. Thus $V$ is a linear subspace by [F3]. [F1, F3, algebra]

1.2 If $x\notin\overline V$, some $r>0$ has $B(x,r)\cap V=\varnothing$. For any $y$ with $\|y-x\|_2<r/2$, the triangle inequality gives $B(y,r/2)\subset B(x,r)$, so $y\notin\overline V$. Hence the complement of $\overline V$ is open and $\overline V$ is closed. [F1, algebra]

2.1 Write $\overline V=\mathcal T(P)$. If $x,y\in\overline V$ and $\varepsilon>0$, choose $u,v\in V$ with $\|x-u\|_2<\varepsilon/2$ and $\|y-v\|_2<\varepsilon/2$. Then $u+v\in V$ and $\|(x+y)-(u+v)\|_2<\varepsilon$, so $x+y\in\overline V$. For $a\in\mathbb R$, if $a=0$ then $ax=0\in V$; if $a\ne0$, choose $u\in V$ with $\|x-u\|_2<\varepsilon/|a|$, giving $au\in V$ and $\|ax-au\|_2<\varepsilon$. Thus $\overline V$ is linear. [step 1.1, F1, algebra]

3.1 A Cauchy sequence in $\overline V$ converges in $L^2_0(P)$ by [F2] under [A1]. Since $\overline V$ is closed by step 1.2, that limit lies in $\overline V$. Therefore the tangent space is complete as well as a closed linear subspace, as asserted. [F2, A1, step 1.2, step 2.1] ∎
