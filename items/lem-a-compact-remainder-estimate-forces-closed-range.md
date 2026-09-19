---
id: lem-a-compact-remainder-estimate-forces-closed-range
kind: lemma
title: A compact remainder estimate forces closed range
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-compact-linear-operator, def-bounded-linear-operator, thm-bounded-linear-operator-equivalences, def-banach-space, thm-sequential-characterization-of-compact-operators, thm-closed-unit-ball-compact-iff-finite-dimensional, lem-closed-range-iff-quotient-estimate, def-quotient-seminorm, thm-metric-compactness-equivalences, def-dependent-choice, def-countable-choice, lem-dependent-choice-implies-countable-choice, def-metric-convergence, lem-metric-limits-unique, def-sequence, lem-index-map-grows]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — §4.3 pp.193–194, Lemma 4.39"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §6.5, closed range from a compact remainder"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
---

## Statement

Assume the Axiom of Dependent Choice ([[def-dependent-choice]]). Let $X$, $Y$
and $Z$ be Banach spaces over the same scalar field, let $T:X\to Y$ and
$K:X\to Z$ be bounded linear operators with $K$ compact
([[def-bounded-linear-operator]], [[def-compact-linear-operator]]), and suppose
there is a real $C>0$ with

$$\|x\|\le C\|Tx\|+\|Kx\|\qquad\text{for every }x\in X.$$

Then $\ker T$ is finite dimensional and $\operatorname{ran}T$ is closed in $Y$.

## Facts & Assumptions

[A1] Bounded linear operators are continuous, and the kernel of $T$ is a closed subspace of $X$ ([[thm-bounded-linear-operator-equivalences]], [[def-bounded-linear-operator]]); limits of sequences in a metric space are unique ([[lem-metric-limits-unique]], [[def-metric-convergence]]).

[A2] Assume DC. Then Countable Choice holds ([[lem-dependent-choice-implies-countable-choice]], [[def-countable-choice]]); a compact operator maps bounded sequences to sequences with convergent subsequences ([[thm-sequential-characterization-of-compact-operators]], [[def-sequence]], [[lem-index-map-grows]]); a normed space with compact closed unit ball admits an ordered basis of finite length ([[thm-closed-unit-ball-compact-iff-finite-dimensional]]); compact, sequentially compact and complete-and-totally-bounded agree for metric spaces under $\mathrm{AC}_\omega$ and DC ([[thm-metric-compactness-equivalences]]).

[A3] Under DC, $\operatorname{ran}T$ is closed exactly when there is a real $C'>0$ with $\operatorname{dist}(x,\ker T)\le C'\|Tx\|$ for every $x$ ([[lem-closed-range-iff-quotient-estimate]], [[def-quotient-seminorm]]); the distance scales, $\operatorname{dist}(\lambda x,\ker T)=|\lambda|\operatorname{dist}(x,\ker T)$, because $\ker T$ is a subspace, and $\operatorname{dist}(u,M)\le\|u\|$ for nonempty $M\ni0$.

[A4] If $(u_j)$ is Cauchy and some subsequence converges to $u$, then $u_j\to u$ ([[def-metric-convergence]]); a closed set contains the limits of its convergent sequences ([[def-banach-space]], [[lem-metric-limits-unique]]).

## Proof

**Proof technique:** direct.

**Given:** $\mathrm{DC}$, Banach spaces $X,Y,Z$ over one scalar field, bounded $T:X\to Y$, compact $K:X\to Z$, a real $C>0$ with $\|x\|\le C\|Tx\|+\|Kx\|$ for all $x$, and $N:=\ker T$.

1.1 For $x\in N$ the estimate reads $\|x\|\le\|Kx\|$, so $\|Kx-Kx'\|=\|K(x-x')\|\ge\|x-x'\|$ for all $x,x'\in N$. [algebra]

1.2 The set $N$ is a closed subspace, hence a Banach space. [A1, A4]

1.3 For every real $\eta>0$ there is $x$ with $\operatorname{dist}(x,N)=1$, $\|x\|\le2$ and $\|Tx\|<\eta$ whenever the estimate of [A3] fails for every constant: failure for the constant $C'=1/\eta$ gives $x_0$ with $\operatorname{dist}(x_0,N)>\|Tx_0\|/\eta\ge0$ and $\operatorname{dist}(x_0,N)>0$, and choosing $m\in N$ with $\|x_0-m\|<2\operatorname{dist}(x_0,N)$ and setting $x:=(x_0-m)/\operatorname{dist}(x_0,N)$ gives the three properties by scaling. [A3, algebra]

2.1 The closed unit ball $B_N:=N\cap\{x:\|x\|\le1\}$ is compact: if $(x_j)$ is a sequence in $B_N$, then it is bounded so by [A2] some subsequence has $Kx_{j_k}\to z$; by [step 1.1] the subsequence is Cauchy, $\|x_{j_k}-x_{j_l}\|\le\|Kx_{j_k}-Kx_{j_l}\|$, hence converges to some $x\in N$ by [step 1.2], and $\|x\|\le1$; thus every sequence in $B_N$ has a subsequence converging in $B_N$, so $B_N$ is sequentially compact, hence compact by [A2]. [step 1.1, step 1.2, A2]

2.2 If the estimate of [A3] fails for every constant, then [step 1.3] makes the set of witnesses with $\operatorname{dist}(w,N)=1$, $\|w\|\le2$ and $\|Tw\|<1/(j+1)$ nonempty for each $j$; Countable Choice in [A2] therefore supplies a sequence $(w_j)$ with those three properties. [step 1.3, A2]

3.1 $\ker T$ is finite dimensional: its closed unit ball is compact by [step 2.1], so $N$ admits an ordered basis of finite length by [A2]. [step 2.1, A2]

3.2 Under the hypothesis of [step 2.2] the bounded sequence $(w_j)$ has, by [A2], a subsequence with $Kw_{j_k}\to z$ for some $z\in Z$. [step 2.2, A2]

4.1 Under the hypothesis of [step 2.2], the subsequence is Cauchy: $\|w_{j_k}-w_{j_l}\|\le C\|T(w_{j_k}-w_{j_l})\|+\|K(w_{j_k}-w_{j_l})\|\le C(1/(j_k+1)+1/(j_l+1))+\|Kw_{j_k}-Kw_{j_l}\|$, and both terms tend to $0$; hence $w_{j_k}\to w$ for some $w\in X$. [step 2.2, step 3.2, A4, algebra]

5.1 Under the hypothesis of [step 2.2], the limit $w$ lies in $N$: $Tw=\lim_kTw_{j_k}=0$ by the continuity of $T$ and $\|Tw_{j_k}\|<1/(j_k+1)$. [step 2.2, step 4.1, A1, A4]

6.1 Under the hypothesis of [step 2.2], the numbers $\operatorname{dist}(w_{j_k},N)=1$ converge to $\operatorname{dist}(w,N)$ because the distance to a fixed set is 1-Lipschitz, so $\operatorname{dist}(w,N)=1$, contradicting $w\in N$ of [step 5.1], which forces $\operatorname{dist}(w,N)=0$. [step 2.2, step 4.1, step 5.1, A3]

7.1 Hence the estimate of [A3] holds for some constant, and then $\operatorname{ran}T$ is closed by [A3]; together with [step 3.1] this proves the lemma. [step 3.1, step 6.1, A3] ∎
