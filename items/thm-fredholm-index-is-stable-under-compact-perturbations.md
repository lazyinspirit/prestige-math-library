---
id: thm-fredholm-index-is-stable-under-compact-perturbations
kind: theorem
title: Fredholm index is stable under compact perturbations
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-fredholm-operator-cokernel-and-index, def-compact-linear-operator, def-bounded-linear-operator, def-operator-norm, def-banach-space, thm-atkinson, lem-compositions-with-a-compact-operator-are-compact, lem-linear-combinations-of-compact-operators-are-compact, thm-fredholm-index-is-locally-constant, thm-connected-subsets-of-r-are-intervals, def-connected-r, def-interval, def-metric-convergence, def-metric-ball, def-axiom-of-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, def-dependent-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — §4.4 pp.196–198, Theorem 4.41(i)"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §6.5 p.188, Corollary 6.29"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ and $Y$ be Banach
spaces over the same scalar field, let $T:X\to Y$ be a Fredholm operator and let
$K:X\to Y$ be compact ([[def-fredholm-operator-cokernel-and-index]],
[[def-compact-linear-operator]], [[def-bounded-linear-operator]]). Then $T+K$
is Fredholm and $\operatorname{ind}(T+K)=\operatorname{ind}T$.

## Facts & Assumptions

[A1] By Atkinson's theorem a bounded operator is Fredholm exactly when it has a bounded parametrix modulo compact operators ([[thm-atkinson]]); compact operators are closed under sums, scalar multiples and composition with bounded operators ([[lem-linear-combinations-of-compact-operators-are-compact]], [[lem-compositions-with-a-compact-operator-are-compact]], [[def-fredholm-operator-cokernel-and-index]]).

[A2] The Fredholm operators form an open subset of $\mathcal B(X,Y)$ and the index is locally constant ([[thm-fredholm-index-is-locally-constant]], [[def-operator-norm]]): for each Fredholm $A$ there is $\delta_A>0$ such that every bounded $B$ with $\|B-A\|<\delta_A$ is Fredholm with $\operatorname{ind}B=\operatorname{ind}A$.

[A3] The interval $[0,1]$ is a connected subset of $\mathbb R$ ([[thm-connected-subsets-of-r-are-intervals]], [[def-connected-r]], [[def-interval]]); a subset of $\mathbb R$ that is both open and closed in $[0,1]$ and is neither empty nor all of $[0,1]$ would give a disconnection of $[0,1]$, since a set closed in $[0,1]$ contains no limit point of its complement inside $[0,1]$ and a set open in $[0,1]$ contains none of its complement's closure points either. Convergence in operator norm is metric convergence ([[def-metric-convergence]], [[def-metric-ball]]).

## Proof

**Proof technique:** direct.

**Given:** $\mathrm{AC}$, Banach spaces $X,Y$ over one scalar field, a Fredholm $T:X\to Y$, a compact $K:X\to Y$, and a parametrix $S$ for $T$ with $ST-I_X$ and $TS-I_Y$ compact.

1.1 For every $t\in[0,1]$ the operator $T+tK$ is Fredholm: $S$ is a parametrix for it modulo compact operators, because $S(T+tK)-I_X=(ST-I_X)+t\,SK$ and $(T+tK)S-I_Y=(TS-I_Y)+t\,KS$ are compact by [A1], so Atkinson applies. [A1]

1.2 The path $t\mapsto T+tK$ is continuous for the operator norm: $\|(T+sK)-(T+tK)\|\le|s-t|\,\|K\|$ for all real $s,t$. [A1, A3, algebra]

2.1 The set $U:=\{t\in[0,1]:\operatorname{ind}(T+tK)=\operatorname{ind}T\}$ is open in $[0,1]$: for $t\in U$ the local constancy [A2] gives $\delta>0$ with all operators within $\delta$ of $T+tK$ Fredholm of the same index, and by [step 1.2] every $s$ with $|s-t|\,\|K\|<\delta$ satisfies $\|(T+sK)-(T+tK)\|<\delta$, hence $\operatorname{ind}(T+sK)=\operatorname{ind}(T+tK)=\operatorname{ind}T$ and $s\in U$. [step 1.2, A2]

2.2 The set $U$ is closed in $[0,1]$: its complement is open by the same argument, since for $t\notin U$ the same local constancy ball consists of operators all having index $\operatorname{ind}(T+tK)\ne\operatorname{ind}T$. [step 1.2, A2]

3.1 Hence $U=[0,1]$: the set $U$ is nonempty because $0\in U$, and it is open and closed in $[0,1]$ by [step 2.1] and [step 2.2]; if it were a proper nonempty subset, its two parts would form a disconnection of the connected interval $[0,1]$, contradicting [A3]. [step 2.1, step 2.2, A3]

4.1 In particular $1\in U$, so $T+K$ is Fredholm with $\operatorname{ind}(T+K)=\operatorname{ind}T$, as claimed. [step 1.1, step 3.1] ∎
