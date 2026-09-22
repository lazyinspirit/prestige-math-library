---
id: thm-sequential-characterization-of-compact-operators
kind: theorem
title: Sequential characterization of compact operators
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-compact-linear-operator, def-dependent-choice, lem-dependent-choice-implies-countable-choice, thm-metric-compactness-equivalences, def-metric-compactness-variants, def-metric-bounded-diameter, def-metric-convergence, def-metric-ball, thm-metric-closure-characterisation, thm-compactness-under-continuous-maps, def-norm-and-normed-space, rem-real-and-complex-normed-space-convention, def-bounded-linear-operator, def-sequence, lem-index-map-grows]
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
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — §4.2 p.183, Lemma 4.19"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §3.1 p.70, Theorem 3.2"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
---

## Statement

Assume the Axiom of Dependent Choice ([[def-dependent-choice]]). Let $X$ and $Y$
be normed spaces over the same scalar field
([[def-norm-and-normed-space]], [[rem-real-and-complex-normed-space-convention]])
and let $T:X\to Y$ be a bounded linear operator
([[def-bounded-linear-operator]]). Then $T$ is compact
([[def-compact-linear-operator]]) if and only if every bounded sequence
$(x_k)$ in $X$, that is every function $x:\mathbb N\to X$ with bounded range
([[def-sequence]], [[def-metric-bounded-diameter]]), has a subsequence
$(x_{k_j})$, the index map being strictly increasing
([[def-metric-compactness-variants]], [[lem-index-map-grows]]), for which
$(Tx_{k_j})$ converges in the norm metric of $Y$
([[def-metric-convergence]]).

## Facts & Assumptions

[A1] $T$ is compact exactly when $\overline{T(\overline B_X)}$ is a compact subset of $Y$, where $\overline B_X=\{x\in X:\|x\|\le 1\}$ ([[def-compact-linear-operator]]).

[A2] Assume $\mathrm{AC}_\omega$ and $\mathrm{DC}$. For a metric space $(M,d)$, compactness, countable compactness, limit point compactness, sequential compactness and "complete and totally bounded" are equivalent; only "sequentially compact implies totally bounded" spends DC and only "complete and totally bounded implies compact" spends $\mathrm{AC}_\omega$, so every other implication is a theorem of ZF ([[thm-metric-compactness-equivalences]]).

[A3] In ZF, $\mathrm{DC}$ implies $\mathrm{AC}_\omega$ ([[lem-dependent-choice-implies-countable-choice]]); and $\mathrm{DC}$ is the statement that for every nonempty set $X$, every relation $R$ on $X$ entire on $X$ and every $a\in X$ there is $x:\mathbb N\to X$ with $x_0=a$ and $x_n\mathbin R x_{n+1}$ for all $n$ ([[def-dependent-choice]]).

[A4] A subset $A$ of a metric space is bounded when $A=\varnothing$ or $A\subseteq B(x_0,r)$ for some point $x_0$ and real $r>0$ ([[def-metric-bounded-diameter]], [[def-metric-ball]]).

[A5] In a normed space, $\|x\|\le R$ implies $x\in R\overline B_X$; convergence is metric convergence for $d(y,y')=\|y-y'\|$; a set $F\subseteq Y$ is closed exactly when $F=\overline F$; for nonempty $A$ the closure is $\overline A=\{y:d(y,A)=0\}$; and the closure of $A$ is contained in every closed set containing $A$ ([[def-norm-and-normed-space]], [[def-metric-convergence]], [[thm-metric-closure-characterisation]]).

## Proof

**Proof technique:** direct.

**Given:** $\mathrm{DC}$, normed spaces $X,Y$ over one scalar field, a bounded linear $T:X\to Y$, and the notation $\overline B_X=\{x:\|x\|\le1\}$.

1.1 Suppose $T$ compact and let $(x_k)$ be a bounded sequence in $X$. By [A4] the range $\{x_k\}$ is empty or contained in some ball $B(x_0,r)$; because $\|x_k\|\le\|x_k-x_0\|+\|x_0\|$ for every $k$, there is a real $R\ge0$ with $\|x_k\|\le R$ for all $k$ (if the range is empty take $R=0$), and then $Tx_k\in R\,\overline{T(\overline B_X)}$ for every $k$, because $x_k\in R\,\overline B_X$ and $T$ is linear. [A4, A5, algebra]

1.2 Conversely assume every bounded sequence in $X$ has a subsequence whose $T$-images converge, and put $C:=\overline{T(\overline B_X)}$. Let $(y_k)$ be a sequence in $C$. For each $k$ the set $S_k:=\{x\in\overline B_X:\|y_k-Tx\|<1/(k+1)\}$ is nonempty, because $y_k\in\overline{T(\overline B_X)}$, the set $T(\overline B_X)$ is nonempty, and [A5] then gives a point of $T(\overline B_X)$ within $1/(k+1)$ of $y_k$; selecting $x_k\in S_k$ for every $k$ is a countable selection from nonempty sets, which [A3] licenses. [A3, A5]

2.1 By [A1] the set $\overline{T(\overline B_X)}$ is compact, and multiplication by the scalar $R$ is continuous, so $R\,\overline{T(\overline B_X)}$ is a compact subset of $Y$ ([[thm-compactness-under-continuous-maps]]); by [A2] its metric subspace is sequentially compact, so the sequence $(Tx_k)$ of [step 1.1] has a subsequence converging in $Y$. [step 1.1, A1, A2]

2.2 The sequence $(x_k)$ of [step 1.2] is bounded, since its range lies in $\overline B_X$; by hypothesis some subsequence $(x_{k_j})$ has $Tx_{k_j}\to y$ for some $y\in Y$, and since every $Tx_{k_j}$ lies in $T(\overline B_X)\subseteq C$ while $C$ is closed, [A5] gives $y\in C$. [step 1.2, A4, A5]

3.1 Therefore compactness of $T$ implies the stated sequential property for every bounded sequence. [step 2.1]

3.2 Along that subsequence $\|y_{k_j}-y\|\le\|y_{k_j}-Tx_{k_j}\|+\|Tx_{k_j}-y\|<1/(k_j+1)+\|Tx_{k_j}-y\|$, and both terms tend to $0$, so $y_{k_j}\to y$ with $y\in C$. [step 1.2, step 2.2, algebra]

4.1 Thus every sequence in $C$ has a subsequence converging in $C$, that is, $C$ is sequentially compact; by [A2] $C$ is compact, and then $T$ is compact by [A1]. [step 3.2, A1, A2] ∎
