---
id: thm-fleissner-hyp-normal-nonmetrizable-moore-space
kind: theorem
title: "HYP produces a normal nonmetrizable Moore space"
status: draft
origin: pipeline
deps: [def-fleissner-hyp-covering-interface, lem-ladder-separation-from-hyp, thm-fleissner-normal-moore-space-construction, def-moore-spaces-and-developments, def-normalized-families-and-collectionwise-normality, lem-metrizable-spaces-are-collectionwise-normal, def-cardinal, def-axiom-of-choice]
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
      locator: "HYP clauses (1a)-(3b) and Lemma 1, printed pp. 366-367; Sections 5-7, printed pp. 368-371"
---

## Statement

$\mathrm{ZFC} + \mathrm{HYP}$ proves that there is a normal nonmetrizable Moore
space ([[def-fleissner-hyp-covering-interface]],
[[thm-fleissner-normal-moore-space-construction]]).

## Facts & Assumptions

**Given:** Witnesses $\kappa, (\kappa_n)_{n \in \omega}, E$ for HYP and fixed ladders $(\delta_i)_{i \in \omega}$ for $\delta \in E$ ([[def-fleissner-hyp-covering-interface]]).

[F1] HYP asserts that $\kappa$ is an infinite cardinal, that $(\kappa_n)_{n \in \omega}$ is an increasing sequence of cardinals, and the conjunction of clauses (1a), (1b), (2), (3a), (3b): $\sup_n \kappa_n = \kappa$; $2^{\kappa_n} < \kappa$ for every $n$; $2^\kappa = \kappa^+$; $E \subseteq \{\delta < \kappa^+ : \operatorname{cf}(\delta) = \omega\}$ is stationary in $\kappa^+$; and $E \cap \beta$ is not stationary in $\beta$ for every $\beta<\kappa^+$ with $\operatorname{cf}(\beta)>\omega$ ([[def-fleissner-hyp-covering-interface]], [[def-cardinal]]).

[F2] Lemma 1 from the same hypotheses: for every $\beta < \kappa^+$ there is $m_\beta : E \cap \beta \to \omega$ such that $\delta_i \ne \eta_i$ for all distinct $\delta, \eta \in E \cap \beta$ and all $i \ge \max(m_\beta(\delta), m_\beta(\eta))$ ([[lem-ladder-separation-from-hyp]]).

[F3] The construction of [[thm-fleissner-normal-moore-space-construction]] converts exactly the data of [F1] together with [F2] into a normal nonmetrizable Moore space ([[def-moore-spaces-and-developments]], [[lem-metrizable-spaces-are-collectionwise-normal]]).



## Proof

**Proof technique:** direct.

1.1 Assume HYP. Then $\kappa$ is infinite, $(\kappa_n)$ is increasing, and clauses (1a), (1b), (2), (3a) of [F1] hold for the given $\kappa$, $(\kappa_n)$, and $E$. [given, F1]

2.1 The separation conclusion of [F2] holds for the fixed ladders. Its proof uses clause (3b) at limit ordinals of uncountable cofinality and uses clause (3a) to obtain an automatic successor club at countable-cofinality stages. [step 1.1, F1, F2]

3.1 Steps 1.1 and 2.1 put all hypotheses of the construction of [F3] at the given parameters, so there is a normal nonmetrizable Moore space. [step 1.1, step 2.1, F3] ∎

## Remarks

- **HYP is used only through [F2].** The source says so explicitly ("we will not use (3b) directly, but rather the following consequence"), and the construction of [F3] is stated with the separation conclusion as an hypothesis, so the formal dependency is exact.
- **The case $\kappa = \omega$ is covered by the same item.** When HYP holds with $\kappa = \omega$ the clause (1b) is literal cardinal arithmetic on finite ordinals and the separation conclusion is supplied by [[lem-ladder-separation-from-hyp]] like every other instance; the CH case with nonreflecting failure is treated separately in [[thm-ch-normal-nonmetrizable-moore-space]].
