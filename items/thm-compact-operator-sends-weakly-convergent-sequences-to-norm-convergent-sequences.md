---
id: thm-compact-operator-sends-weakly-convergent-sequences-to-norm-convergent-sequences
kind: theorem
title: Compact operator sends weakly convergent sequences to norm convergent sequences
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-compact-linear-operator, def-bounded-linear-operator, def-operator-norm, def-banach-space, def-transpose-of-a-bounded-operator, thm-sequential-characterization-of-compact-operators, thm-uniform-boundedness-principle, thm-canonical-bidual-map-is-an-isometry, rem-continuous-dual-completeness-and-pairing, cor-dual-separates-points, def-weak-convergence-of-nets-and-sequences, def-axiom-of-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, def-dependent-choice, def-metric-convergence, def-sequence, lem-index-map-grows]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — §4.2 pp.183–184, Lemma 4.21"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §6.5, weak convergence and compact operators"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ and $Y$ be Banach
spaces over the same scalar field, let $T:X\to Y$ be a compact operator
([[def-compact-linear-operator]]) and let $(x_n)$ be a sequence in $X$
([[def-sequence]]) with $x_n\rightharpoonup x$ weakly
([[def-weak-convergence-of-nets-and-sequences]]). Then
$\|Tx_n-Tx\|\to0$ ([[def-metric-convergence]]).

## Facts & Assumptions

[A1] Under the Axiom of Dependent Choice, a family of bounded linear operators on a Banach space that is pointwise bounded is norm bounded ([[thm-uniform-boundedness-principle]], [[def-banach-space]]); the continuous dual $X^*$ is Banach even when $X$ is incomplete ([[rem-continuous-dual-completeness-and-pairing]]), and the canonical map $J_X:X\to X^{**}$ is a linear isometry ([[thm-canonical-bidual-map-is-an-isometry]]).

[A2] $x_n\rightharpoonup x$ means $f(x_n)\to f(x)$ for every $f\in X^*$; the transpose satisfies $(T^*g)(x)=g(Tx)$ and $T^*g\in X^*$ for $g\in Y^*$ ([[def-weak-convergence-of-nets-and-sequences]], [[def-transpose-of-a-bounded-operator]], [[def-bounded-linear-operator]]).

[A3] Assume $\mathrm{DC}$: if a sequence fails to converge to a point then there are a real $\varepsilon>0$ and a strictly increasing index map $j$ with $\|Tx_{n_j}-Tx\|\ge\varepsilon$ for all $j$ ([[def-metric-convergence]], [[lem-index-map-grows]], [[def-dependent-choice]]).

[A4] Under $\mathrm{DC}$, a compact operator sends bounded sequences to sequences with convergent subsequences ([[thm-sequential-characterization-of-compact-operators]], [[def-compact-linear-operator]]).

[A5] The dual separates points: $u\ne v$ in a normed space gives $g$ with $g(u)\ne g(v)$ ([[cor-dual-separates-points]]); and $\mathrm{AC}$ implies $\mathrm{DC}$ ([[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]], [[def-axiom-of-choice]], [[def-dependent-choice]]).

## Proof

**Proof technique:** direct.

**Given:** $\mathrm{AC}$, Banach spaces $X,Y$ over one scalar field, a compact operator $T:X\to Y$, a sequence $(x_n)$ in $X$ with $x_n\rightharpoonup x$.

1.1 The sequence $(x_n)$ is norm bounded: the operators $J_Xx_n:X^*\to\mathbb K$ are pointwise bounded because $f(x_n)\to f(x)$ makes $(f(x_n))_n$ a bounded scalar sequence for each $f\in X^*$, so [A1] and the isometry property give $\sup_n\|x_n\|=\sup_n\|J_Xx_n\|<\infty$. [A1, A2, A5]

1.2 The sequence $(Tx_n)$ converges to $Tx$ weakly: for $g\in Y^*$ one has $g(Tx_n)=(T^*g)(x_n)\to(T^*g)(x)=g(Tx)$ by [A2]. [A2]

1.3 If $\|Tx_n-Tx\|\not\to0$, then by [A3] there are $\varepsilon>0$ and a strictly increasing $j$ with $\|Tx_{n_j}-Tx\|\ge\varepsilon$ for every $j$. [A3]

2.1 Assume $\|Tx_n-Tx\|\not\to0$ and take $\varepsilon$ and $(x_{n_j})$ as in [step 1.3]. The subsequence $(x_{n_j})$ is bounded by [step 1.1], so [A4] gives a further subsequence $(x_{n_{j_k}})$ with $Tx_{n_{j_k}}\to y$ for some $y\in Y$. [step 1.1, step 1.3, A4]

3.1 For every $g\in Y^*$ the scalar sequence $g(Tx_{n_{j_k}})$ converges to $g(y)$ because $g$ is bounded hence continuous, and to $g(Tx)$ by [step 1.2]; hence $g(y)=g(Tx)$ for every $g$, and [A5] gives $y=Tx$. [step 1.2, step 2.1, A2, A5]

4.1 But $\|Tx_{n_{j_k}}-Tx\|\ge\varepsilon$ for every $k$ by [step 1.3], contradicting $Tx_{n_{j_k}}\to Tx=y$ from [step 3.1]. [step 1.3, step 3.1]

5.1 Hence the assumption $\|Tx_n-Tx\|\not\to0$ is false, that is, $\|Tx_n-Tx\|\to0$. [step 4.1] ∎
