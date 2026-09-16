---
id: thm-schauder-compact-adjoint-theorem
kind: theorem
title: Schauder compact adjoint theorem
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-compact-linear-operator, def-transpose-of-a-bounded-operator, lem-transpose-is-bounded-and-has-the-same-norm, def-operator-norm, def-bounded-linear-operator, def-dual-space-of-a-normed-space, thm-bounded-operator-space-is-banach, cor-finite-dimensional-normed-spaces-are-banach, thm-canonical-bidual-map-is-an-isometry, lem-canonical-map-is-natural, thm-metric-compactness-equivalences, thm-complete-subspace-iff-closed, def-axiom-of-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, def-countable-choice, def-dependent-choice, thm-countable-union-of-countable, thm-bolzano-weierstrass, cor-bolzano-weierstrass-in-rn, def-complex-metric-convergence-and-continuity, def-metric-compactness, def-metric-ball, def-metric-convergence, thm-metric-closure-characterisation, lem-finite-choice, def-sequence, lem-index-map-grows, def-banach-space, lem-compositions-with-a-compact-operator-are-compact]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — §4.2 pp.186–187, Theorem 4.28(iii)"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §6.5 p.184, Theorem 6.24"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ and $Y$ be Banach
spaces over the same scalar field and let $T:X\to Y$ be a bounded linear
operator ([[def-bounded-linear-operator]]), with transpose
$T^*:Y^*\to X^*$ ([[def-transpose-of-a-bounded-operator]],
[[def-dual-space-of-a-normed-space]]). Then $T$ is compact
([[def-compact-linear-operator]]) if and only if $T^*$ is compact.

## Facts & Assumptions

[A1] $S$ is compact exactly when $\overline{S(\overline B_X)}$ is compact ([[def-compact-linear-operator]]); the transpose is the bounded linear map $(S^*h)(x)=h(Sx)$ with $\|S^*\|=\|S\|$ ([[def-transpose-of-a-bounded-operator]], [[lem-transpose-is-bounded-and-has-the-same-norm]], [[def-operator-norm]]).

[A2] If $X$ is Banach then $X^*=\mathcal B(X,\mathbb K)$ is Banach ([[thm-bounded-operator-space-is-banach]], [[def-dual-space-of-a-normed-space]], [[cor-finite-dimensional-normed-spaces-are-banach]]), and a closed subset of a Banach space is complete (claim 2 of [[thm-complete-subspace-iff-closed]], [[def-banach-space]]).

[A3] Assume $\mathrm{AC}_\omega$ and $\mathrm{DC}$: compact, sequentially compact and "complete and totally bounded" agree for metric spaces ([[thm-metric-compactness-equivalences]]). Under $\mathrm{AC}$, both hold ([[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]], [[def-countable-choice]], [[def-dependent-choice]]).

[A4] A compact metric space has a finite subcover of every open cover; the balls centred at points of a nonempty compact set cover it, and choosing one index per member of a finite subcover is choice-free ([[def-metric-compactness]], [[def-metric-ball]], [[lem-finite-choice]]). An at most countable union of finite sets is at most countable under $\mathrm{AC}_\omega$ ([[thm-countable-union-of-countable]]).

[A5] For nonempty $A$ in a metric space, $A\subseteq\overline A=\{y:d(y,A)=0\}$ ([[thm-metric-closure-characterisation]]); a bounded sequence in $\mathbb K$ has a convergent subsequence, $\mathbb K=\mathbb R$ by [[thm-bolzano-weierstrass]] and $\mathbb K=\mathbb C$ by the isometry $\mathbb C=\mathbb R^2$ of [[def-complex-metric-convergence-and-continuity]] together with [[cor-bolzano-weierstrass-in-rn]].

[A6] The canonical maps $J_X:X\to X^{**}$ are linear isometries ([[thm-canonical-bidual-map-is-an-isometry]]) with $S^{**}J_X=J_YS$ for bounded $S$ ([[lem-canonical-map-is-natural]]); an isometric image of a Banach space is a closed subspace ([[thm-complete-subspace-iff-closed]]).

[A7] If $S$ is compact and $C$ is bounded linear, then $CS$ and $SC$ are compact ([[lem-compositions-with-a-compact-operator-are-compact]]).

## Proof

**Proof technique:** direct.

**Given:** $\mathrm{AC}$, Banach spaces $X,Y$ over one scalar field, a bounded linear $S:X\to Y$, the transpose $S^*:Y^*\to X^*$, the closed unit balls $\overline B_X,\overline B_{Y^*}$, and $\Theta:=\overline{S(\overline B_X)}$.

1.1 Every bounded sequence in $\mathbb K$ has a convergent subsequence. [A5]

1.2 If $S$ is compact then $\Theta$ is compact by [A1], so for every real $\delta>0$ there are finitely many points $x_0,\dots,x_m\in\overline B_X$ with $\Theta\subseteq\bigcup_{i\le m}B(Sx_i,\delta)$: the balls $\Theta\cap B(Sx,\delta)$, $x\in\overline B_X$, cover $\Theta$ by [A5], compactness gives a finite subcover, and one index per member of that finite subcover may be chosen by [A4]. [A1, A4, A5]

1.3 The dual $X^*$ is Banach by [A2], so the set $C:=\overline{S^*(\overline B_{Y^*})}\subseteq X^*$ is a complete metric space by [A2]. [A2]

1.4 If $K$ is a compact operator and $M$ is a closed subspace of its target containing $K(X)$, then the corestriction $K_0:X\to M$ is compact: for bounded $E\subseteq X$ the closure of $K_0(E)$ in $M$ equals $\overline{K(E)}\cap M$, a closed subset of the compact set $\overline{K(E)}$. [A1]

1.5 The space $J_Y(Y)$ is a closed subspace of $Y^{**}$ and the inverse of $J_Y:Y\to J_Y(Y)$ is a bounded isometry, by [A6]. [A6]

2.1 Under the hypothesis of [step 1.2], the union $D$ of the finite $(1/(k+1))$-nets of $\Theta$ obtained from [step 1.2] for $k\in\mathbb N$ is at most countable and dense in $\Theta$, the nets being chosen together by $\mathrm{AC}_\omega$ and their union counted by [A4]; hence there is a surjection $\mathbb N\to D$ listing $D$ as $(d_j)$. [step 1.2, A3, A4]

2.2 If $(g_n)$ is a sequence in $\overline B_{Y^*}$ and $D=(d_j)$ is a countable subset of $Y$, then there are a strictly increasing index map $n:\mathbb N\to\mathbb N$ and scalars to which $g_{n_j}(d_k)$ converges for all $j,k$: for each fixed $d_k$ the scalar sequence $g_n(d_k)$ is bounded by $\|d_k\|$ and has a convergent subsequence by [step 1.1], and the standard diagonal selection of nested subsequences is licensed by $\mathrm{DC}$. [step 1.1, A3]

3.1 Assume $S$ compact and let $(g_n)$ be a sequence in $\overline B_{Y^*}$. With $D$ as in [step 2.1], [step 2.2] gives a subsequence $(g_{n_j})$ with $g_{n_j}(d)$ convergent for every $d\in D$. Given a real $\varepsilon>0$, choose $k$ with $1/(k+1)<\varepsilon/4$ and let $F_k\subseteq\overline B_X$ be the finite net of [step 1.2] for $\delta=1/(k+1)$; convergence on the finite set $F_k$ gives $J$ with $|(g_{n_j}-g_{n_l})(Sx_i)|<\varepsilon/2$ for all $j,l\ge J$ and all $i\le m$, and for $x\in\overline B_X$ one has $\|Sx-Sx_i\|<\varepsilon/4$ for some $i$, so $|(S^*g_{n_j}-S^*g_{n_l})(x)|\le |(g_{n_j}-g_{n_l})(Sx_i)|+\|g_{n_j}-g_{n_l}\|\,\|Sx-Sx_i\|<\varepsilon/2+2\varepsilon/4=\varepsilon$; hence $(S^*g_{n_j})$ is Cauchy in $X^*$. [step 2.1, step 2.2, A1, A4]

4.1 Under the hypothesis of [step 3.1] the Cauchy sequence $(S^*g_{n_j})$ converges in the complete space $X^*$ by [step 1.3], and its limit lies in $C$ because every $S^*g_{n_j}\in S^*(\overline B_{Y^*})\subseteq C$ and $C$ is closed; so every sequence in $S^*(\overline B_{Y^*})$ has a subsequence converging in $C$. [step 1.3, step 3.1]

5.1 Under the hypothesis of [step 3.1], every sequence $(y_n)$ in $C$ has a subsequence converging in $C$: choosing $g_n\in\overline B_{Y^*}$ with $\|y_n-S^*g_n\|<1/(n+1)$ for every $n$ is a countable selection licensed by [A3], and applying [step 4.1] to $(g_n)$ yields a subsequence with $S^*g_{n_j}\to y\in C$, whence $y_{n_j}\to y$. [step 4.1, A3, A5]

6.1 Under the hypothesis of [step 3.1] the space $C$ is sequentially compact by [step 5.1], hence compact by [A3], and then $S^*$ is compact by [A1]. [step 5.1, A1, A3]

7.1 Suppose now that $T^*:Y^*\to X^*$ is compact. Both $X^*$ and $Y^*$ are Banach by [A2], so [step 6.1] applied to the bounded linear operator $T^*$ between Banach spaces gives that $(T^*)^*=T^{**}$ is compact; with [step 1.5] and [A6], $T^{**}J_X=J_YT$, so $T^{\ast\ast}J_X$ is compact by [A7], and $T=J_Y^{-1}\circ(T^{**}J_X)$ is the composite of the corestriction of $T^{**}J_X$ to the closed subspace $J_Y(Y)$ — compact by [step 1.4] — with the bounded operator $J_Y^{-1}$, hence compact by [A7]. [step 1.4, step 1.5, step 6.1, A2, A6, A7]

8.1 Conversely, if $T$ is compact then $T^*$ is compact by [step 6.1]; and if $T^*$ is compact then $T$ is compact by [step 7.1]; this is the asserted equivalence. [step 6.1, step 7.1] ∎
