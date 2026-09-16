---
id: thm-fredholm-index-is-additive
kind: theorem
title: Fredholm index is additive
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-fredholm-operator-cokernel-and-index, def-bounded-linear-operator, def-banach-space, thm-atkinson, lem-compositions-with-a-compact-operator-are-compact, lem-linear-combinations-of-compact-operators-are-compact, thm-rank-nullity, def-dimension, def-linear-map, def-linear-subspace, def-quotient-vector-space-coset-notation, def-axiom-of-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, def-dependent-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §6.5 p.186, Lemma 6.25"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — §4.4 pp.195–196, Theorem 4.40"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$, $Y$ and $Z$ be
Banach spaces over the same scalar field, and let $T:X\to Y$ and $U:Y\to Z$ be
Fredholm operators ([[def-fredholm-operator-cokernel-and-index]],
[[def-bounded-linear-operator]]). Then $UT:X\to Z$ is Fredholm and

$$\operatorname{ind}(UT)=\operatorname{ind}U+\operatorname{ind}T .$$

## Facts & Assumptions

[A1] By Atkinson's theorem a bounded $A$ is Fredholm exactly when there is a bounded $B$ with $AB-I$ and $BA-I$ compact ([[thm-atkinson]]); the compact operators are closed under sums, scalar multiples and composition with bounded operators ([[lem-linear-combinations-of-compact-operators-are-compact]], [[lem-compositions-with-a-compact-operator-are-compact]], [[def-fredholm-operator-cokernel-and-index]]).

[A2] Rank-nullity: for a linear map $f:V\to W$ with $V$ finite dimensional, $\dim V=\dim\ker f+\dim\operatorname{ran}f$ ([[thm-rank-nullity]], [[def-dimension]]); and $\dim\ker f=\dim\operatorname{im}g$ for an exact predecessor $g$ at that spot, so that a finite exact sequence $0\to V_1\to V_2\to V_3\to V_4\to V_5\to V_6\to0$ of finite-dimensional spaces satisfies $\sum_{i=1}^{6}(-1)^{i+1}\dim V_i=0$ ([[def-linear-map]], [[def-linear-subspace]]).

[A3] For a bounded $T$ the cokernel is the quotient $\operatorname{coker}T=Y/\operatorname{ran}T$ with cosets written $y+\operatorname{ran}T$ ([[def-quotient-vector-space-coset-notation]], [[def-fredholm-operator-cokernel-and-index]]); $\mathrm{AC}$ supplies DC ([[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]], [[def-dependent-choice]], [[def-banach-space]]).

## Proof

**Proof technique:** direct.

**Given:** $\mathrm{AC}$, Banach spaces $X,Y,Z$ over one scalar field, Fredholm operators $T:X\to Y$ and $U:Y\to Z$, and parametrices $S$ for $T$ and $R$ for $U$ as in [A1].

1.1 $UT$ is Fredholm: $SR$ is a parametrix for $UT$, since $(SR)(UT)-I_X=S(RU-I_Y)T+(ST-I_X)$ and $(UT)(SR)-I_Z=U(TS-I_Y)R+(UR-I_Z)$ are compact by [A1], so Atkinson gives Fredholmness of $UT$. [A1]

1.2 The maps $\alpha:V_1\to V_2$, $\alpha(x)=x$; $\beta:V_2\to V_3$, $\beta(x)=Tx$; $\gamma:V_3\to V_4$, $\gamma(y)=y+\operatorname{ran}T$; $\delta:V_4\to V_5$, $\delta(y+\operatorname{ran}T)=Uy+\operatorname{ran}(UT)$; and $\varepsilon:V_5\to V_6$, $\varepsilon(z+\operatorname{ran}(UT))=z+\operatorname{ran}U$ are well-defined linear maps: $\delta$ is well-defined because $y\in\operatorname{ran}T$ gives $Uy\in\operatorname{ran}(UT)$, and the other four are restrictions, inclusions or quotient maps of linear maps. [A3]

2.1 All six spaces $V_1:=\ker T$, $V_2:=\ker(UT)$, $V_3:=\ker U$, $V_4:=\operatorname{coker}T$, $V_5:=\operatorname{coker}(UT)$, $V_6:=\operatorname{coker}U$ are finite dimensional. [step 1.1, A1]

2.2 The sequence is exact at $V_1$, $V_2$ and $V_3$: $\alpha$ is injective; $\ker\beta=\{x\in V_2:Tx=0\}=V_1=\operatorname{im}\alpha$; and $\ker\gamma=\{y\in V_3:y\in\operatorname{ran}T\}=\{Tx:x\in V_2\}=\operatorname{im}\beta$. [step 1.2]

2.3 The sequence is exact at $V_4$, $V_5$ and $V_6$: $\ker\delta=\{y+\operatorname{ran}T:Uy\in\operatorname{ran}(UT)\}=\{y+\operatorname{ran}T:y-Tx\in\ker U\ \text{for some }x\}=\operatorname{im}\gamma$; $\operatorname{im}\delta=\{Uy+\operatorname{ran}(UT):y\in Y\}=\{z+\operatorname{ran}(UT):z\in\operatorname{ran}U\}=\ker\varepsilon$; and $\varepsilon$ is surjective as the quotient map $Z/\operatorname{ran}(UT)\to Z/\operatorname{ran}U$. [step 1.2]

3.1 Rank-nullity telescopes the dimensions: with $f_0:0\to V_1$, $f_i:V_i\to V_{i+1}$ for $1\le i\le5$ and $f_6:V_6\to0$ the maps of [step 1.2], exactness gives $\ker f_i=\operatorname{im}f_{i-1}$, so $\dim V_i=\dim\operatorname{im}f_{i-1}+\dim\operatorname{im}f_i$, and summing with signs $(+,-,+,-,+,-)$ cancels to $\dim V_1-\dim V_2+\dim V_3-\dim V_4+\dim V_5-\dim V_6=0$, because $\operatorname{im}f_0=0$ and $\operatorname{im}f_6=0$. [step 2.1, step 2.2, step 2.3, A2]

4.1 The index identity follows: $\operatorname{ind}(UT)=\dim V_2-\dim V_5=(\dim V_1-\dim V_4)+(\dim V_3-\dim V_6)=\operatorname{ind}T+\operatorname{ind}U$, by the telescoping identity of [step 3.1] and the definition of the index. [step 3.1, A2, A3] ∎
