---
id: cex-modifying-a-process-at-each-time-can-destroy-path-continuity-on-an-uncountable-index-set
kind: counterexample
title: "Pointwise modification can destroy path continuity"
status: published
origin: pipeline
deps: [def-law-modification-and-indistinguishability-of-processes, def-probability-measure, thm-lebesgue-measure-is-a-complete-measure, thm-lebesgue-measure-of-a-box-of-every-kind, prop-countable-subsets-of-rn-are-lebesgue-null, thm-borel-sets-are-lebesgue-measurable, prop-indicator-function-is-measurable-iff-its-set-is-measurable, def-continuity-real, cor-interval-uncountable, def-countable-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Perla Sousi, Advanced Probability, Section 3.2"
      url: "https://www.statslab.cam.ac.uk/~ps422/mynotes.pdf"
      locator: "Definition 3.6, Remark 3.7, and Example 3.8, printed pp. 31--32"
---

## Statement

Assume the Axiom of Countable Choice. On $[0,1]$ with normalized Lebesgue
measure let $U(\omega)=\omega$, and for $t\in[0,1]$ put

$$X_t(\omega)=0,\qquad Y_t(\omega)=\mathbf1_{\{U=t\}}(\omega).$$

Then $Y$ is a modification of $X$, but every $X$ path is continuous and every
$Y$ path is discontinuous. The processes are not indistinguishable; indeed,
their simultaneous-equality event is empty.

## Facts & Assumptions

**Given:** Countable choice and the interval $\Omega=[0,1]$.

[F1] Under countable choice, Lebesgue measurable sets form a sigma-algebra and
$\lambda_1$ is a measure. The interval $[0,1]$ is measurable with measure one,
and every singleton is measurable with measure zero.
[[thm-lebesgue-measure-is-a-complete-measure]]
[[thm-lebesgue-measure-of-a-box-of-every-kind]]
[[prop-countable-subsets-of-rn-are-lebesgue-null]]

[F2] Every Borel subset of $\mathbb R$ is Lebesgue measurable, and an
indicator is measurable exactly when its set is measurable.
[[thm-borel-sets-are-lebesgue-measurable]]
[[prop-indicator-function-is-measurable-iff-its-set-is-measurable]]

[F3] A probability measure is a measure of total mass one. A modification
requires almost-sure equality at each fixed time, whereas indistinguishability
requires one measurable probability-one event of equality at every time.
[[def-probability-measure]]
[[def-law-modification-and-indistinguishability-of-processes]]

[F4] Continuity on $[0,1]$ is the unpunctured epsilon--delta condition at
every point, including the one-sided domain condition at its endpoints.
[[def-continuity-real]]

[F5] The nondegenerate closed interval $[0,1]$ is uncountable.
[[cor-interval-uncountable]]

[F6] Countable choice is used through the construction and measure properties
of Lebesgue measure in [F1]--[F2]. No outcome or time is selected from a family
in the proof. [[def-countable-choice]]

## Counterexample

**Proof technique:** direct.

1.1 Let $\mathcal F=\{A\cap\Omega:A\in\mathcal L(\mathbb R)\}$ and define $P(E)=\lambda_1(E)$ for $E\in\mathcal F$. Because $\Omega$ is Lebesgue measurable, every $E\in\mathcal F$ is Lebesgue measurable. The trace family $\mathcal F$ contains $\Omega$, is closed under complements relative to $\Omega$ and under countable unions, so it is a sigma-algebra. Countable additivity of $P$ is inherited from $\lambda_1$, and $P(\Omega)=\lambda_1([0,1])=1$ by [F1]. Thus $(\Omega,\mathcal F,P)$ is a probability space by [F3]; this is normalized Lebesgue measure on the interval. [F1, F3, F6]

1.2 Every path $t\mapsto X_t(\omega)$ is the constant zero function and is continuous by [F4]. Fix any $\omega\in\Omega$. Its $Y$ path equals one at $t=\omega$ and zero at every other time. Test continuity at $\omega$ with $\varepsilon=1/2$. Given any $\delta>0$, if $\omega<1$ set $h=\min\{\delta/2,(1-\omega)/2\}$ and $s=\omega+h$; then $0<h<\delta$, $s\in[0,1]$, and $s\ne\omega$. If $\omega=1$, set $h=\min\{\delta/2,1/2\}$ and $s=1-h$; the same conclusions hold. In either case $|s-\omega|<\delta$ but $|Y_s(\omega)-Y_\omega(\omega)|=|0-1|=1\not<1/2$. Thus [F4] makes the path discontinuous at its spike. The first case includes the one-sided endpoint $\omega=0$ and all interior points; the second is the one-sided endpoint $\omega=1$. [F4, algebra]

2.1 The identity $U:\Omega\to\mathbb R$ is measurable: for Borel $B\subseteq\mathbb R$, $U^{-1}(B)=B\cap\Omega\in\mathcal F$ by [F2]. For fixed $t\in[0,1]$, the event $\{U=t\}=\{t\}$ is measurable by [F1], so $Y_t=\mathbf1_{\{t\}}$ is measurable by [F2]; the constant $X_t=0$ is the indicator of the empty event and is measurable as well. Hence both displayed families are genuine real stochastic processes on the same probability space. [step 1.1, F1, F2]

2.2 The simultaneous-equality event is $$D=\{\omega:X_t(\omega)=Y_t(\omega)\text{ for every }t\in[0,1]\}.$$ For each $\omega\in\Omega$, take the already given time $t=\omega$. Then $X_\omega(\omega)=0$ but $Y_\omega(\omega)=1$, so no outcome belongs to $D$ and $D=\varnothing$. It is measurable and has probability zero, not one; hence [F3] shows that $X$ and $Y$ are not indistinguishable. [step 1.1, F3]

3.1 Fix $t\in[0,1]$. The equality event is $\{X_t=Y_t\}=\Omega\setminus\{t\}$, which is measurable, and disjoint additivity with [F1] gives $P(X_t=Y_t)=P(\Omega)-P(\{t\})=1-0=1$. Since this holds for every fixed $t$, [F3] says that $Y$ is a modification of $X$. In particular every finite-dimensional law of either process is the point mass at the all-zero vector: only the finite null set of outcomes equal to one of the selected times can produce a nonzero coordinate for $Y$. If a displayed tuple repeats a time, its repeated coordinates agree and the same all-zero almost-sure conclusion holds. [step 1.1, step 2.1, F1, F3]

4.1 Steps 1.2--3.1 prove every asserted contrast on the uncountable index set [F5]. The values zero and one, total probability one, the empty simultaneous-equality event, both endpoints, and every interior spike are explicit. There is no biconditional. Countable choice is assumed exactly for the Lebesgue-measure suppliers in [F1]--[F2]; setting $t=\omega$ in step 2.2 and the explicit nearby point in step 1.2 make no choice from an indexed family. [step 1.2, step 2.1, step 2.2, step 3.1, F5, F6] ∎

## Source notes

Sousi, Section 3.2, Definition 3.6, Remark 3.7, and Example 3.8, printed
pp. 31--32, gives this zero-process/uniform-spike construction and records that
it is a version with different sample-path behavior. The trace probability
space, coordinate measurability, empty simultaneous-equality event, and direct
epsilon--delta verification at interior points and both endpoints are supplied
above.
