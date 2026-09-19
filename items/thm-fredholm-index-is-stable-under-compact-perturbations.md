---
id: thm-fredholm-index-is-stable-under-compact-perturbations
kind: theorem
title: Fredholm index is stable under compact perturbations
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-fredholm-operator-cokernel-and-index, def-compact-linear-operator, def-bounded-linear-operator, def-operator-norm, def-banach-space, thm-atkinson, lem-compositions-with-a-compact-operator-are-compact, lem-linear-combinations-of-compact-operators-are-compact, thm-fredholm-index-is-locally-constant, thm-connected-subsets-of-r-are-intervals, thm-closure-characterisations-r, def-connected-r, def-interval, def-metric-convergence, def-metric-ball, def-axiom-of-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, def-dependent-choice]
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

[A3] The interval $[0,1]$ is a connected subset of $\mathbb R$ ([[thm-connected-subsets-of-r-are-intervals]], [[def-connected-r]], [[def-interval]]). A real point lies in the closure of a set exactly when each of its neighbourhoods meets that set ([[thm-closure-characterisations-r]]). Convergence in operator norm is metric convergence ([[def-metric-convergence]], [[def-metric-ball]]).

## Proof

**Proof technique:** direct.

**Given:** $\mathrm{AC}$, Banach spaces $X,Y$ over one scalar field, a Fredholm $T:X\to Y$, a compact $K:X\to Y$, and a parametrix $S$ for $T$ with $ST-I_X$ and $TS-I_Y$ compact.

1.1 For every $t\in[0,1]$ the operator $T+tK$ is Fredholm: $S$ is a parametrix for it modulo compact operators, because $S(T+tK)-I_X=(ST-I_X)+t\,SK$ and $(T+tK)S-I_Y=(TS-I_Y)+t\,KS$ are compact by [A1], so Atkinson applies. [A1]

1.2 The path $t\mapsto T+tK$ is continuous for the operator norm: $\|(T+sK)-(T+tK)\|\le|s-t|\,\|K\|$ for all real $s,t$. [A1, A3, algebra]

2.1 Put $U:=\{t\in[0,1]:\operatorname{ind}(T+tK)=\operatorname{ind}T\}$. For every $t\in U$, local constancy [A2] gives $\delta>0$ with all operators within $\delta$ of $T+tK$ having the same index. With $\eta:=\delta/(1+\|K\|)>0$, every $s\in[0,1]$ satisfying $|s-t|<\eta$ has $\|(T+sK)-(T+tK)\|\le|s-t|\|K\|<\delta$, hence lies in $U$. [step 1.2, A2]

2.2 Put $V:=[0,1]\setminus U$. For every $t\in V$, the same argument gives $\eta>0$ such that every $s\in[0,1]$ with $|s-t|<\eta$ has index $\operatorname{ind}(T+tK)\ne\operatorname{ind}T$ and hence lies in $V$. [step 1.2, A2]

3.1 Hence $U=[0,1]$. Indeed $0\in U$. If $V$ were nonempty, then $U\cup V=[0,1]$ would be a disconnection: if $t\in V$, step 2.2 supplies a neighbourhood of $t$ whose intersection with $[0,1]$ is contained in $V$, so this neighbourhood misses $U$ and [A3] gives $t\notin\overline U$; hence $\overline U\cap V=\varnothing$. Similarly step 2.1 gives $U\cap\overline V=\varnothing$. Thus the two nonempty sets would be separated, contradicting connectedness of $[0,1]$ in [A3]. [step 2.1, step 2.2, A3]

4.1 In particular $1\in U$, so $T+K$ is Fredholm with $\operatorname{ind}(T+K)=\operatorname{ind}T$, as claimed. [step 1.1, step 3.1] ∎
