---
id: lem-ladder-separation-from-hyp
kind: lemma
title: "Ladder separation from HYP"
status: draft
origin: pipeline
deps: [def-fleissner-hyp-covering-interface, def-cardinal, def-natural-numbers, def-function]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "William G. Fleissner, If all normal Moore spaces are metrizable, then there is an inner model with a measurable cardinal"
      url: "https://kuscholarworks.ku.edu/server/api/core/bitstreams/88062b98-5ab8-4fdc-9548-9e00a9c7507d/content"
      locator: "Lemma 1 and its proof, printed pp. 366-367"
---

## Statement

Let $\kappa, (\kappa_n)_{n \in \omega}, E$ satisfy HYP and fix ladders
$(\delta_i)_{i \in \omega}$ for $\delta \in E$
([[def-fleissner-hyp-covering-interface]]). Then for every $\beta < \kappa^+$
there is a function $m_\beta : E \cap \beta \to \omega$ such that for all
distinct $\delta, \eta \in E \cap \beta$, writing $m := \max(m_\beta(\delta),
m_\beta(\eta))$, one has $\delta_m \ne \eta_m$; and in fact
$$\delta_i \ne \eta_i \quad \text{for every } i \ge \max(m_\beta(\delta), m_\beta(\eta)).$$

## Facts & Assumptions

**Given:** Witnesses $\kappa, (\kappa_n), E$ for HYP and ladders $(\delta_i)$ for $\delta \in E$; the induction is on $\beta < \kappa^+$.

[F1] For every limit $\beta<\kappa^+$ there is a club $C\subseteq\beta$ disjoint from $E$. If $\operatorname{cf}(\beta)>\omega$, this is exactly HYP clause (3b). If $\operatorname{cf}(\beta)=\omega$, fix a strictly increasing cofinal sequence $(b_n)$ in $\beta$ and take $C=\{0\}\cup\{b_n+1:n\in\omega\}$. This set is unbounded; it has no limit point below $\beta$ (every proper initial segment of an increasing $\omega$-sequence is finite), hence is closed; and its nonzero members are successors, while every member of $E$ has cofinality $\omega$ by clause (3a). These are all possible cofinalities of a nonzero limit ordinal in ZFC ([[def-fleissner-hyp-covering-interface]], [[def-cardinal]]).

[F2] Every element of $E$ has cofinality $\omega$, so successor ordinals are not in $E$. If $C\subseteq\beta$ is club, $0\in C$, and $\delta<\beta$ is not in $C$, then $\gamma=\sup(C\cap\delta)$ belongs to $C$ and is below $\delta$, while $\min(C\setminus\delta)$ exists and is strictly between $\delta$ and $\beta$ ([[def-cardinal]]).

[L1] Each ladder $(\delta_i)$ is increasing and cofinal in $\delta$, so for every $\gamma < \delta$ there is a least $i$ with $\delta_i > \gamma$, and $\delta_i > \gamma$ for all larger $i$ ([[def-fleissner-hyp-covering-interface]], [[def-natural-numbers]]).

[L2] Induction: if a statement about $m_\beta$ is proved for $\beta = 0$, for $\beta = \alpha + 1$ from $m_\alpha$, and for limit $\beta$ from all $m_{\gamma}$ with $\gamma < \beta$, then it holds for every $\beta < \kappa^+$ ([[def-cardinal]]).

## Proof

**Proof technique:** induction.

1.1 We build $m_\beta$ for all $\beta < \kappa^+$ by induction, maintaining the strengthened property that for distinct $\delta,\eta \in E \cap \beta$ one has $\delta_i \ne \eta_i$ for every $i \ge \max(m_\beta(\delta), m_\beta(\eta))$. [given, L2]

2.1 For $\beta = 0$ take $m_0 := \varnothing$; the domain is empty and both properties are vacuous. [base, step 1.1]

2.2 Successor case. Let $\beta = \alpha + 1$. If $\alpha \notin E$ put $m_\beta := m_\alpha$; this keeps the domain and the strengthened property. If $\alpha \in E$, define, for $\delta \in E \cap \alpha$, $m_\beta(\delta) := \max(m_\alpha(\delta), j(\delta,\alpha))$ where $j(\delta,\alpha)$ is the least $i$ with $\alpha_i > \delta$, and put $m_\beta(\alpha) := 0$. [step 1.1, F2, L1]

2.3 Limit case. Let $\beta$ be a limit ordinal. By [F1] choose a club $C\subseteq\beta$ disjoint from $E$ and containing $0$. For $\delta\in E\cap\beta$, [F2] gives $\gamma(\delta):=\sup(C\cap\delta)\in C$ with $\gamma(\delta)<\delta$ and $\bar\gamma(\delta):=\min(C\setminus\delta)\in C$ with $\delta<\bar\gamma(\delta)<\beta$. Thus $m_{\bar\gamma(\delta)}$ is defined by induction and contains $\delta$ in its domain. Define $m_\beta(\delta):=\max(m_{\bar\gamma(\delta)}(\delta),i(\delta))$, where $i(\delta)$ is the least $i$ with $\delta_i>\gamma(\delta)$. [step 1.1, F1, F2, L1]

3.1 In the successor case, pairs inside $E \cap \alpha$ keep the strengthened property because $m_\beta \ge m_\alpha$ pointwise, so their separating level is not decreased. For $\delta \in E \cap \alpha$ and the new point $\alpha$: for $i \ge \max(m_\beta(\delta), m_\beta(\alpha)) = m_\beta(\delta) \ge j(\delta,\alpha)$ we have $\alpha_i \ge \alpha_{j(\delta,\alpha)} > \delta > \delta_i$, so $\alpha_i \ne \delta_i$. Hence $m_\beta$ works. [step 2.2, F2, L1]

3.2 In the limit case let $\delta < \eta$ in $E \cap \beta$. If $\gamma(\delta) = \gamma(\eta)$ then also $\bar\gamma(\delta) = \bar\gamma(\eta) =: \bar\gamma$, and $m_\beta \ge m_{\bar\gamma}$ pointwise on $\{\delta,\eta\}$, so the strengthened property for $m_{\bar\gamma}$, which is available by induction and holds at levels $\ge \max(m_{\bar\gamma}(\delta), m_{\bar\gamma}(\eta))$, transfers to $m_\beta$. [step 2.3]

3.3 In the limit case, if $\gamma(\delta) < \gamma(\eta)$ then $\bar\gamma(\delta) \le \gamma(\eta)$: otherwise $\gamma(\eta) < \bar\gamma(\delta)$ would put both $\delta$ and $\eta$ in the same gap of $C$, forcing $\gamma(\delta) = \gamma(\eta)$. Then for $i \ge \max(m_\beta(\delta), m_\beta(\eta)) \ge \max(i(\delta), i(\eta))$ we have $\delta_i < \delta < \bar\gamma(\delta) \le \gamma(\eta) < \eta_i$, so $\delta_i \ne \eta_i$. [step 2.3, F2, L1]

4.1 Steps 2.1, 3.1, 3.2 and 3.3 establish the strengthened property for $m_\beta$ in all three cases of the induction, so by [L2] the functions $m_\beta$ exist for every $\beta < \kappa^+$ with the strengthened property. Since $\delta_m \ne \eta_m$ for the single level $m = \max(m_\beta(\delta), m_\beta(\eta))$ is the special case $i = m$, the asserted functions exist. [step 2.1, step 3.1, step 3.2, step 3.3, L2, discharge-induction] ∎

## Remarks

- **Where (3b) is needed.** At limit stages of uncountable cofinality it supplies a club disjoint from $E$. At countable-cofinality stages such a club is automatic from clause (3a), by using a cofinal $\omega$-sequence of successors. In either case the club gaps put each $\delta\in E$ below a smaller ordinal $\bar\gamma(\delta)$ where the induction hypothesis separates ladders.

- **The strengthened form is not needed elsewhere**, but it is what makes both the same-gap and the different-gap cases work at once; the paper's Lemma 1 is the special case of the single level $m$.
