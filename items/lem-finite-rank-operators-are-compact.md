---
id: lem-finite-rank-operators-are-compact
kind: lemma
title: Bounded finite rank operators are compact
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-compact-linear-operator, def-bounded-linear-operator, def-operator-norm, def-linear-basis, cor-finite-dimensional-subspaces-are-closed, thm-closed-unit-ball-compact-iff-finite-dimensional, thm-compactness-under-continuous-maps, lem-vector-operations-are-continuous-in-a-normed-space, thm-compact-subset-is-closed-and-bounded, thm-closed-subspace-of-a-compact-space-is-compact]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — §4.2 p.184, Example 4.23"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §3.1 p.69, Theorem 3.1"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
verification:
  audited: 2026-09-22
---

## Statement

Let $X$ and $Y$ be normed spaces over the same scalar field and let
$T:X\to Y$ be a bounded linear operator
([[def-bounded-linear-operator]]) whose range $T(X)$ admits an ordered basis of
finite length ([[def-linear-basis]]). Then $T$ is compact
([[def-compact-linear-operator]]).

## Facts & Assumptions

[A1] $T$ is compact exactly when $\overline{T(\overline B_X)}$ is compact, where $\overline B_X=\{x\in X:\|x\|\le1\}$ ([[def-compact-linear-operator]]); the operator norm satisfies $\|Tx\|\le\|T\|\,\|x\|$ for every $x$ ([[def-operator-norm]], [[def-bounded-linear-operator]]).

[A2] A subspace $W$ of a normed space $V$ admitting an ordered basis of finite length is a closed subset of $V$ ([[cor-finite-dimensional-subspaces-are-closed]], [[def-linear-basis]]), and its closed unit ball $\{w\in W:\|w\|\le1\}$ is compact ([[thm-closed-unit-ball-compact-iff-finite-dimensional]]).

[A3] A continuous image of a compact set is compact ([[thm-compactness-under-continuous-maps]]), and scalar multiplication is continuous on a normed space ([[lem-vector-operations-are-continuous-in-a-normed-space]]).

[A4] A compact subset of a metric space is closed and bounded ([[thm-compact-subset-is-closed-and-bounded]]); a closed subset of a compact topological space is a compact subset ([[thm-closed-subspace-of-a-compact-space-is-compact]]).

## Proof

**Proof technique:** direct.

**Given:** Normed spaces $X,Y$ over one scalar field and a bounded linear $T:X\to Y$ whose range $R:=T(X)$ admits an ordered basis of finite length.

1.1 Every point of $T(\overline B_X)$ lies in $R$, and $\|Tx\|\le\|T\|$ for every $x\in\overline B_X$ by [A1]; writing $s:=\|T\|$, this says $T(\overline B_X)\subseteq s\,\overline B_R$, where $\overline B_R=\{v\in R:\|v\|\le1\}$. [A1, algebra]

1.2 By [A2] the set $\overline B_R$ is compact and $R$ is closed in $Y$. [A2]

2.1 The set $s\,\overline B_R$ is the image of the compact set $\overline B_R$ under the continuous map $v\mapsto sv$, so it is a compact subset of $Y$ by [A3]; it is therefore closed in $Y$ by [A4]. [step 1.2, A3, A4]

3.1 Since $T(\overline B_X)\subseteq s\,\overline B_R$ by [step 1.1], the closure $\overline{T(\overline B_X)}$ is contained in the closed set $s\,\overline B_R$; being a closed subset of the compact space $s\,\overline B_R$, it is compact by [A4]. [step 1.1, step 2.1, A4]

4.1 By [A1] compactness of $\overline{T(\overline B_X)}$ is exactly compactness of $T$, so $T$ is compact. [step 3.1, A1] ∎
