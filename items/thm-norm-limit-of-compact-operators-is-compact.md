---
id: thm-norm-limit-of-compact-operators-is-compact
kind: theorem
title: Norm limit of compact operators is compact
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-compact-linear-operator, def-bounded-linear-operator, def-operator-norm, def-metric-compactness, def-metric-ball, def-totally-bounded, def-metric-convergence, def-banach-space, def-countable-choice, thm-complete-and-totally-bounded-implies-compact, thm-complete-subspace-iff-closed, thm-metric-closure-characterisation, lem-finite-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §3.1 p.70, Theorem 3.2"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — §4.2 pp.185–186, Theorem 4.28(ii)"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $X$ be a
normed space, let $Y$ be a Banach space ([[def-banach-space]]), and let
$T_n:X\to Y$, $n\in\mathbb N$, be compact operators
([[def-compact-linear-operator]]) with $\|T_n-T\|\to0$ for a bounded linear
operator $T:X\to Y$ ([[def-bounded-linear-operator]],
[[def-operator-norm]], [[def-metric-convergence]]). Then $T$ is compact.

## Facts & Assumptions

[A1] $S:X\to Y$ is compact exactly when $\overline{S(\overline B_X)}$ is compact, where $\overline B_X=\{x\in X:\|x\|\le1\}$ ([[def-compact-linear-operator]]); and $\|Sx\|\le\|S\|\,\|x\|$ for every $x$ ([[def-operator-norm]], [[def-bounded-linear-operator]]).

[A2] A compact metric space $(M,d)$ has a finite subcover of every open cover; in particular, if every point of $M$ has a ball of the family $\{M\cap B(y,\varepsilon):y\in M\}$ containing it, then finitely many of these balls cover $M$ ([[def-metric-compactness]], [[def-metric-ball]]). Selecting one index from each of finitely many nonempty index sets is possible without choice ([[lem-finite-choice]]).

[A3] For nonempty $A$ in a metric space, $\overline A=\{y:d(y,A)=0\}$ (claim 1 of [[thm-metric-closure-characterisation]]); so for $y\in\overline A$ and real $\delta>0$ there is $a\in A$ with $d(y,a)<\delta$ ([[def-metric-ball]]).

[A4] A subset $A$ of a metric space is totally bounded when for every real $\varepsilon>0$ there are finitely many points $f_0,\dots,f_m\in A$ with $A\subseteq\bigcup_{i\le m}B(f_i,\varepsilon)$ ([[def-totally-bounded]], [[def-metric-ball]]).

[A5] A closed subset of a complete metric space is complete (claim 2 of [[thm-complete-subspace-iff-closed]]), and a Banach space is a complete normed space ([[def-banach-space]]); a complete and totally bounded metric space is compact under $\mathrm{AC}_\omega$ ([[thm-complete-and-totally-bounded-implies-compact]]).

## Proof

**Proof technique:** direct.

**Given:** $\mathrm{AC}_\omega$, a normed space $X$, a Banach space $Y$, compact operators $T_n:X\to Y$ with $\|T_n-T\|\to0$, and $C_n:=\overline{T_n(\overline B_X)}$.

1.1 For every real $\varepsilon>0$ there is $n$ with $\|T-T_n\|<\varepsilon$: this is exactly the convergence $\|T_n-T\|\to0$ in the norm metric of $\mathcal B(X,Y)$. [A1]

1.2 For every $c\in C_n$ and every real $\delta>0$ there is $x\in\overline B_X$ with $\|c-T_nx\|<\delta$, because $c\in\overline{T_n(\overline B_X)}$, the set $T_n(\overline B_X)$ is nonempty, and [A3] applies to $A=T_n(\overline B_X)\subseteq Y$. [A3]

1.3 Each $C_n$ is compact by [A1]. [A1]

1.4 Whenever $A$ is a totally bounded nonempty subset of a metric space, its closure is totally bounded: given $\varepsilon>0$, [A4] gives finitely many points $f_0,\dots,f_m\in A$ with $A\subseteq\bigcup_{i\le m}B(f_i,\varepsilon/2)$; for $y\in\overline A$ there is $a\in A$ with $d(y,a)<\varepsilon/2$ by [A3], and $a\in B(f_i,\varepsilon/2)$ for some $i$, so $d(y,f_i)<\varepsilon$; hence the same finite set, whose points lie in $\overline A$, is an $\varepsilon$-net for $\overline A$. [A3, A4, algebra]

1.5 The set $\overline{T(\overline B_X)}$ is closed in the complete space $Y$, hence a complete metric space by [A5]. [A5]

2.1 Fix a real $\varepsilon>0$ and choose $n$ with $\|T-T_n\|<\varepsilon/2$ by [step 1.1]. The family of balls $C_n\cap B(T_nx,\varepsilon/2)$, $x\in\overline B_X$, covers $C_n$ by [step 1.2]; since $C_n$ is compact by [step 1.3], finitely many indices $x_0,\dots,x_m\in\overline B_X$ satisfy $C_n\subseteq\bigcup_{i\le m}B(T_nx_i,\varepsilon/2)$, and one may pick these finitely many indices by [A2]. For every $x\in\overline B_X$ the point $T_nx$ lies in $C_n$, so some $i$ has $\|T_nx-T_nx_i\|<\varepsilon/2$, and then $\|Tx-Tx_i\|\le\|T-T_n\|+\|T_nx-T_nx_i\|<\varepsilon$; thus $\{Tx_0,\dots,Tx_m\}$ is a finite $\varepsilon$-net for $T(\overline B_X)$ with centres in $T(\overline B_X)$, and $T(\overline B_X)$ is totally bounded. [step 1.1, step 1.2, step 1.3, A1, A2, algebra]

3.1 By [step 1.4] the closure $\overline{T(\overline B_X)}$ is totally bounded as well, its finite nets having centres in that closure. [step 1.4, step 2.1]

4.1 The space $\overline{T(\overline B_X)}$ is complete by [step 1.5] and totally bounded by [step 3.1]; by [A5] it is compact, and therefore $T$ is compact by [A1]. [step 1.5, step 3.1, A1, A5] ∎
