---
id: lem-kernel-of-identity-minus-compact-is-finite-dimensional
kind: lemma
title: Kernel of identity minus compact is finite dimensional
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-compact-linear-operator, def-bounded-linear-operator, thm-bounded-linear-operator-equivalences, thm-closed-unit-ball-compact-iff-finite-dimensional, lem-closed-subset-of-a-compact-space-is-compact, thm-metric-open-set-algebra, def-metric-convergence, lem-metric-limits-unique, def-metric-ball, def-linear-basis, def-norm-and-normed-space, lem-compactness-is-intrinsic, rem-real-and-complex-normed-space-convention]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — §4.3, the closed-range and finite-kernel lemmas for I minus compact"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §6.5, Riesz–Schauder theory"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
---

## Statement

Let $X$ be a normed space over $\mathbb R$ or $\mathbb C$ and let
$K:X\to X$ be a compact operator ([[def-compact-linear-operator]]). Then the
kernel

$$\ker(I-K)=\{x\in X: Kx=x\}$$

is a finite-dimensional subspace of $X$: it admits an ordered basis of finite
length ([[def-linear-basis]]).

## Facts & Assumptions

[A1] $K$ is a bounded linear operator, and a bounded linear operator is continuous ([[def-bounded-linear-operator]], [[thm-bounded-linear-operator-equivalences]]); $K$ is compact, that is, $\overline{K(\overline B_X)}$ is compact ([[def-compact-linear-operator]]).

[A2] The normed space $X$ is a metric space with $d(x,y)=\|x-y\|$, convergence is metric convergence and limits of sequences are unique ([[def-metric-convergence]], [[lem-metric-limits-unique]], [[def-norm-and-normed-space]], [[rem-real-and-complex-normed-space-convention]]); the closed unit ball is $\overline B_X=\{x\in X:\|x\|\le1\}$ and is closed ([[def-metric-ball]], [[thm-metric-open-set-algebra]]).

[A3] If the closed unit ball of a normed space is compact, then that space admits an ordered basis of finite length ([[thm-closed-unit-ball-compact-iff-finite-dimensional]]); a closed subset of a compact metric space is a compact metric subspace ([[lem-closed-subset-of-a-compact-space-is-compact]]). Relative openness is the trace of ambient openness, and compactness is the compactness of the restricted metric ([[lem-compactness-is-intrinsic]]).

## Proof

**Proof technique:** direct.

**Given:** A normed space $X$ over $\mathbb R$ or $\mathbb C$, a compact operator $K:X\to X$, and $N:=\ker(I-K)=\{x\in X:Kx=x\}$.

1.1 The set $N$ is a linear subspace of $X$, since $I-K$ is linear. It is closed without using a sequential-closure criterion: take a bound $C\ge0$ for $K$. If $x\notin N$, put $a=\|x-Kx\|>0$. For $\|y-x\|<a/(2(1+C))$, the triangle inequality gives $\|y-Ky\|\ge a-\|(I-K)(y-x)\|\ge a-(1+C)\|y-x\|>a/2>0$. Thus a ball around every $x\notin N$ lies outside $N$, proving its complement open. [A1, A2]

2.1 Every $x$ in the closed unit ball $N\cap\overline B_X$ of $N$ satisfies $x=Kx$ and $\|x\|\le1$, hence $x\in K(\overline B_X)$; therefore $N\cap\overline B_X\subseteq K(\overline B_X)\subseteq\overline{K(\overline B_X)}$, and $N\cap\overline B_X$ is a closed subset of $X$ by [step 1.1] and [A2]. [step 1.1, A2]

3.1 The set $\overline{K(\overline B_X)}$ is compact by [A1], so by [step 2.1] and [A3] the set $N\cap\overline B_X$ is compact with its metric restricted from $X$: it is relatively closed in the compact metric subspace $\overline{K(\overline B_X)}$. Restricting that same metric via $N$ gives exactly the same distance on $N\cap\overline B_X$, so it is also the compact closed unit ball of the normed space $N$, so $N$ admits an ordered basis of finite length by [A3]. [step 2.1, A1, A3]

4.1 Hence $\ker(I-K)$ is finite dimensional, as claimed. [step 3.1] ∎
