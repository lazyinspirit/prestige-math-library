---
id: thm-martingale-central-limit-theorem
kind: theorem
title: Martingale central limit theorem
status: draft
origin: pipeline
deps: [def-square-integrable-martingale-difference-array-and-variance-clock, lem-second-order-characteristic-function-expansion, lem-characteristic-function-of-a-normal-law, cor-characteristic-function-criterion-for-weak-convergence, thm-converging-together-lemma, thm-tower-property-of-conditional-expectation, thm-basic-algebra-and-order-properties-of-conditional-expectation, def-conditional-expectation-as-an-ae-class, thm-dominated-convergence, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - {title: "Roch, Notes 19: Martingale CLT, Theorem 19.15 and proof, pp. 4–8", url: "https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes19.pdf"}
---

## Statement

Assume AC. Let $(Z_{n,k},\mathcal F_{n,k})$ be a square-integrable martingale-difference array such that, for every $n$, $M_{n,m}$ and $\Gamma_{n,m}$ converge almost surely as $m\to\infty$ to finite limits $M_{n,\infty}$ and $\Gamma_{n,\infty}$. If
$$\Gamma_{n,\infty}\longrightarrow1\quad\text{in probability}$$
and, for every $\varepsilon>0$,
$$L_n(\varepsilon):=\sum_{k\ge1}\mathbb E[Z_{n,k}^2 1_{\{|Z_{n,k}|>\varepsilon\}}]\longrightarrow0,$$
then $M_{n,\infty}\Rightarrow N(0,1)$.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[def-square-integrable-martingale-difference-array-and-variance-clock]] supplies $M_{n,m}$, $v_{n,k}$, and $\Gamma_{n,m}$ with the required measurability.

[F2] [[lem-second-order-characteristic-function-expansion]] gives the scalar remainder bounds $|e^{iu}-1-iu+u^2/2|\le\min(|u|^3/3,4u^2)$.

[F3] [[thm-tower-property-of-conditional-expectation]] and [[thm-basic-algebra-and-order-properties-of-conditional-expectation]] permit conditional centering and iteration. The defining event-integral identity is in [[def-conditional-expectation-as-an-ae-class]].

[F4] [[lem-characteristic-function-of-a-normal-law]] identifies $e^{-t^2/2}$, and [[cor-characteristic-function-criterion-for-weak-convergence]] converts convergence of characteristic functions to weak convergence.

[F5] [[thm-converging-together-lemma]] removes variance-clock localization.

[F6] [[def-axiom-of-choice]] states AC, assumed here because F1 and F3 use conditional moments and chosen countable families of representatives.

[F7] [[thm-dominated-convergence]] passes bounded simple-function approximations through integrable products.

## Proof

1.1 Write $v_{n,k}=\mathbb E[Z_{n,k}^2\mid\mathcal F_{n,k-1}]$. For every $\varepsilon>0$, $$v_{n,k}\le\varepsilon^2+ \mathbb E[Z_{n,k}^2 1_{\{|Z_{n,k}|>\varepsilon\}}\mid\mathcal F_{n,k-1}].$$ Taking the supremum in $k$, bounding it by the sum of the nonnegative tail terms, and taking expectations gives $$\mathbb E\sup_k v_{n,k}\le\varepsilon^2+L_n(\varepsilon).$$ Consequently $\mathbb E\sup_kv_{n,k}\to0$ after first taking $n\to\infty$ and then $\varepsilon\downarrow0$. [F1, F3]

1.2 First suppose $\Gamma_{n,\infty}\le c$ almost surely for one deterministic $c$. Fix $t\in\mathbb R$ and put $$Q_{n,m}=\exp(itM_{n,m})\exp(t^2\Gamma_{n,m}/2).$$ The exact telescoping identity is $$Q_{n,m}-Q_{n,m-1} =e^{itM_{n,m-1}}e^{t^2\Gamma_{n,m}/2} \left(e^{itZ_{n,m}}-e^{-t^2v_{n,m}/2}\right).$$ Here the prefactor before the parentheses is $\mathcal F_{n,m-1}$-measurable and has modulus at most $e^{t^2c/2}$. [F1]

2.1 For any bounded $\mathcal F_{n,m-1}$-measurable complex $H$ and integrable complex $Y$, the defining conditional-expectation event integrals in F3 give $\mathbb E[HY]=\mathbb E[H\mathbb E[Y\mid\mathcal F_{n,m-1}]]$: prove it first for simple real $H$, approximate bounded real and imaginary parts by bounded simple functions, and apply F7 to each integrable product. The prefactor in step 1.2 is such an $H$, so this pull-out identity licenses conditioning the telescoping increment. Conditional centering, F2, and a split at $|Z_{n,m}|=\varepsilon$ give $$\left|\mathbb E[e^{itZ_{n,m}}\mid\mathcal F_{n,m-1}] -(1-t^2v_{n,m}/2)\right| \le C_t\varepsilon v_{n,m}+t^2\mathbb E[Z_{n,m}^2 1_{\{|Z_{n,m}|>\varepsilon\}}\mid\mathcal F_{n,m-1}],$$ where $C_t$ is deterministic. The elementary exponential remainder also gives $$|e^{-t^2v_{n,m}/2}-(1-t^2v_{n,m}/2)| \le C_{t,c}v_{n,m}\sup_jv_{n,j}.$$ Sum the expected telescoping errors from step 1.2. Since $\sum_m v_{n,m}=\Gamma_{n,\infty}\le c$, step 1.1 and the Lindeberg hypothesis yield $$|\mathbb EQ_{n,\infty}-1| \le C_{t,c}\bigl(\varepsilon+L_n(\varepsilon)+\mathbb E\sup_jv_{n,j}\bigr)\longrightarrow0$$ after $n\to\infty$ and then $\varepsilon\downarrow0$. The infinite telescoping limit is legitimate because $M_{n,m},\Gamma_{n,m}$ converge almost surely and $|Q_{n,m}|\le e^{t^2c/2}$; the displayed summable error bound controls passage of expectation through the partial telescopes. [F2, F3, F7, step 1.1, step 1.2]

3.1 Still under the bounded clock assumption, $$\begin{aligned} |\mathbb Ee^{itM_{n,\infty}}-e^{-t^2/2}| &\le \mathbb E\left|1-e^{t^2(\Gamma_{n,\infty}-1)/2}\right|\\ &\quad+e^{-t^2/2}|\mathbb EQ_{n,\infty}-1|. \end{aligned}$$ The first term tends to zero by bounded convergence from $\Gamma_{n,\infty}\to1$ in probability (every subsequence has an almost-surely convergent subsubsequence), and the second tends to zero by step 2.1. Thus the characteristic functions converge to $e^{-t^2/2}$. F4 proves $M_{n,\infty}\Rightarrow N(0,1)$ in the bounded-clock case. [F4, step 2.1]

4.1 For the general case fix $c>1$ and define predictable truncated differences $$\widetilde Z_{n,k}=Z_{n,k}1_{\{\Gamma_{n,k}\le c\}}.$$ The event is $\mathcal F_{n,k-1}$-measurable because $\Gamma_{n,k}=\Gamma_{n,k-1}+v_{n,k}$. Their variance clock is bounded by $c$, their Lindeberg sums do not increase, and on $\{\Gamma_{n,\infty}\le c\}$ their terminal sum equals $M_{n,\infty}$. Moreover their clock equals $\Gamma_{n,\infty}$ on that event, so it still converges in probability to $1$. step 3.1 gives $\widetilde M_{n,\infty}\Rightarrow N(0,1)$, while $$\mathbb P(\widetilde M_{n,\infty}\ne M_{n,\infty}) \le\mathbb P(\Gamma_{n,\infty}>c)\longrightarrow0.$$ F5 transfers the weak limit to $M_{n,\infty}$. No independence was used: the clock hypothesis and the unconditional Lindeberg hypothesis entered separately. AC has precisely the role in F6. [F5, F6, step 3.1] ∎
