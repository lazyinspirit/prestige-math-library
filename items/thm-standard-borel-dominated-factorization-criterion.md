---
id: thm-standard-borel-dominated-factorization-criterion
kind: theorem
title: "Standard Borel dominated factorization criterion"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 6
deps:
  - def-sufficient-statistic
  - def-standard-borel-space
  - def-dominated-statistical-experiment
  - def-likelihood-density
  - thm-countable-mixture-dominates-sigmafinite-dominated-family
  - thm-common-reference-factorization-criterion
  - thm-chain-rule-for-radon-nikodym-derivatives
  - thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality
  - def-axiom-of-choice
  - thm-existence-of-regular-conditional-distributions-for-standard-borel-targets
  - thm-monotone-convergence-for-the-integral
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
proof_strategy: direct
sources:
  references:
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf"
    - title: "Joshua M. Tebbs, STAT 512 Mathematical Statistics Lecture Notes"
      url: "https://people.stat.sc.edu/Tebbs/stat512/s24notes.pdf"
    - title: "Peter Kempthorne, MIT 18.655 Lecture Note 6: Sufficiency"
      url: "https://ocw.mit.edu/courses/18-655-mathematical-statistics-spring-2016/bbbca14a2009e47add8c7ea2a49daa41_MIT18_655S16_LecNote6.pdf"
    - title: "Noah Fithian, Stat 210a Reader: Sufficiency"
      url: "https://stat210a.berkeley.edu/fall-2025/reader/sufficiency.html"
    - title: "Noah Fithian, Stat 210a Reader: Completeness, Ancillarity, and Basu’s Theorem"
      url: "https://stat210a.berkeley.edu/fall-2025/reader/completeness.html"
    - title: "Charles J. Geyer, Stat 5421 Lecture Notes: Exponential Families"
      url: "https://www.stat.umn.edu/geyer/5421/notes/expfam.pdf"
    - title: "Jiahao Tian, Chapter 2: Sufficiency and Exponential Families"
      url: "https://jiahaotian-stat.github.io/Notes/en/Advanced_Stat/2Sufficiency/"
---

## Statement

Assume AC. Let $(\mathcal X,\mathcal A)$ and $(\mathcal Y,\mathcal B)$ be standard Borel, let $(P_\theta)_{\theta\in\Theta}$ be a nonempty family dominated by a $\sigma$-finite positive measure $\mu$, and let $T:\mathcal X\to\mathcal Y$ be a statistic. Then the family is dominated by a positive-weight countable mixture $Q=\sum_jw_jP_{\theta_j}$, and with $h=dQ/d\mu$, $T$ is sufficient if and only if for every $\theta$ there is a nonnegative Borel $g_\theta$ such that

$$p_\theta(x)=h(x)g_\theta(Tx)\quad\mu\text{-almost everywhere}.$$

The exceptional null set may depend on $\theta$. Here $Q$ is a member of the augmented family $\{Q\}\cup\{P_\theta\}$, which is why the common-reference criterion applies. No product-density formula for a singular joint law is used.

## Facts & Assumptions

**Given:** AC; standard Borel data/statistic spaces; and a nonempty family dominated by $\mu$.

[A1] [[def-axiom-of-choice]]: AC is used in the countable-mixture domination theorem and RN version selection.

[F1] [[def-sufficient-statistic]]: the common conditional law criterion for sufficiency.

[F2] [[def-standard-borel-space]] and [[thm-existence-of-regular-conditional-distributions-for-standard-borel-targets]]: every standard Borel reference law admits a regular conditional distribution given $T$.

[F3] [[def-likelihood-density]]: $p_\theta=dP_\theta/d\mu$ denotes a nonnegative RN density, with no common exceptional set asserted for uncountably many $\theta$.

[F4] [[thm-countable-mixture-dominates-sigmafinite-dominated-family]]: a positive-weight countable mixture $Q$ from the family dominates every $P_\theta$.

[F5] [[thm-common-reference-factorization-criterion]]: when a reference probability is a member of the family, sufficiency is equivalent to its likelihood ratios being measurable functions of $T$.

[F6] [[thm-chain-rule-for-radon-nikodym-derivatives]]: derivatives compose along absolutely continuous measures with a common finite exhaustion.

[F7] [[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]]: the derivatives satisfy their setwise integral identities and are unique almost everywhere.

[F8] [[def-dominated-statistical-experiment]]: every family law is absolutely continuous with respect to the stated sigma-finite dominator $\mu$.

[F9] [[thm-monotone-convergence-for-the-integral]]: nonnegative conditional identities pass to countable weighted sums by increasing partial sums.

## Proof

1.1 By [F4], choose a positive-weight countable mixture $Q=\sum_jw_jP_{\theta_j}$ dominating the family, and let $h=dQ/d\mu$. This RN derivative exists under AC because $Q$ is a probability and $Q\ll\mu$. [A1, F4, F7, F8, given, construct]

2.1 Suppose $T$ is sufficient. Let $K$ be the common conditional law from [F1]. For each $A,C$, sum the conditional-law identity under $P_{\theta_j}$ with weights $w_j$; [F9] applied to increasing partial sums gives the same identity under $Q$. Thus the same $K$ is common for the augmented family $\{Q\}\cup\{P_\theta\}$. [F1, F2, F9, step 1.1, given, algebra]

2.2 Conversely suppose the factorization holds. By [F4], $P_\theta\ll Q$ for every $\theta$. The finite measures $P_\theta,Q$ and sigma-finite $\mu$ have a common finite exhaustion, so the RN chain rule [F6] identifies $dP_\theta/dQ=p_\theta/h$ on the $Q$-full set $\{h>0\}$. There the assumed equality gives $dP_\theta/dQ=g_\theta(T)$. [F3, F4, F6, F7, given, step 1.1]

3.1 In this augmented family $Q$ is a member and dominates all laws. Apply [F5] to obtain Borel $g_\theta$ with $dP_\theta/dQ=g_\theta(T)$ $Q$-almost surely. A sigma-finite cover for $\mu$ is a common finite-measure exhaustion for $P_\theta,Q,\mu$, since the first two are finite; the chain rule [F6] and density identities [F3, F7] then give $p_\theta=h g_\theta(T)$ $\mu$-almost everywhere. The exceptional set may depend on the fixed $\theta$. [F3, F5, F6, F7, step 2.1, given, algebra]

4.1 Also $dQ/dQ=1$ is a function of $T$. In the augmented family $\{Q\}\cup\{P_\theta\}$, $Q$ is a member reference and all laws are dominated by it; apply [F5] to these T-measurable derivatives. The criterion gives a common conditional law, so $T$ is sufficient. [F5, step 2.2, given, algebra] ∎
