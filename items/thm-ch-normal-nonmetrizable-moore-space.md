---
id: thm-ch-normal-nonmetrizable-moore-space
kind: theorem
title: "CH yields a normal nonmetrizable Moore space"
status: draft
origin: pipeline
deps: [def-fleissner-hyp-covering-interface, def-moore-spaces-and-developments, def-normalized-families-and-collectionwise-normality, lem-metrizable-spaces-are-collectionwise-normal, rem-continuum-hypothesis, thm-fleissner-normal-moore-space-construction, def-natural-numbers, def-cardinal, def-club-subsets-of-ordinals, prop-basic-stationary-set-calculus, def-axiom-of-choice, def-function]
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
      locator: "HYP and the CH instance, printed p. 367; construction, printed pp. 368-371"
---

## Statement

$\mathrm{ZFC} + \mathrm{CH}$ proves that a normal nonmetrizable Moore space
exists. By [[lem-metrizable-spaces-are-collectionwise-normal]] such a space is
the CH instance of the failure of the normal Moore space conjecture.

## Facts & Assumptions

**Given:** The continuum hypothesis $\mathrm{CH}$ ([[rem-continuum-hypothesis]]): every uncountable set of reals is equinumerous with $\mathbb{R}$; equivalently here $2^{\aleph_0} = \aleph_1$, i.e. $2^\omega = \omega_1$ in the von Neumann ordinals ([[def-cardinal]], [[def-natural-numbers]]).

[F1] $\omega = \aleph_0$ is the least infinite cardinal and $\omega_1 = \omega^+$ is the least uncountable cardinal; a countable ordinal is one below $\omega_1$, and the limit ordinals below $\omega_1$ are exactly the countable ordinals of cofinality $\omega$ ([[def-natural-numbers]], [[def-cardinal]]).

[F2] Clubs and stationarity in $\omega_1$: the set of nonzero limit ordinals below $\omega_1$ contains the club of all limit ordinals and is therefore stationary ([[def-club-subsets-of-ordinals]], [[prop-basic-stationary-set-calculus]]).

[F3] Fleissner's construction ([[thm-fleissner-normal-moore-space-construction]]): if $\kappa, (\kappa_n), E$ satisfy $\sup_n \kappa_n = \kappa$, $2^{\kappa_n} < \kappa$, $2^\kappa = \kappa^+$, $E \subseteq \{\delta < \kappa^+ : \operatorname{cf}(\delta) = \omega\}$ stationary, and some fixed ladders admit the separation functions $m_\beta$ for every $\beta < \kappa^+$, then a normal nonmetrizable Moore space exists ([[def-fleissner-hyp-covering-interface]], [[def-moore-spaces-and-developments]]).

[F4] In ZFC, for every at-most-countable set $A$ there is an index set $I_A$ which is either a finite initial segment of $\omega$ or all of $\omega$, and a bijection $I_A \to A$; choice permits these bijections to be fixed simultaneously for all $\beta < \omega_1$ ([[def-axiom-of-choice]], [[def-function]]).



## Proof

**Proof technique:** direct; instantiate the construction of [F3].

1.1 Work in $\mathrm{ZFC}+\mathrm{CH}$ and put $\kappa := \omega$, $\kappa_n := n$ for $n \in \omega$, and $E := \{\delta < \omega_1 : \delta$ is a nonzero limit ordinal$\}$. Then $E \subseteq \{\delta < \omega_1 : \operatorname{cf}(\delta) = \omega\}$ by [F1], and $E$ is stationary in $\omega_1$ by [F2]. [given, F1, F2]
2.1 The parameters of step 1.1 satisfy the numerical hypotheses of [F3]: $\sup_n \kappa_n = \sup_n n = \omega = \kappa$; for every $n$ the ordinal $2^n$ is a finite ordinal, hence $2^n < \omega = \kappa$; and $2^\kappa = 2^\omega = \omega_1 = \kappa^+$ is $\mathrm{CH}$. [step 1.1, given, F3]
2.2 Fix, for each $\delta \in E$, an increasing sequence $(\delta_i)_{i \in \omega}$ of nonlimit ordinals cofinal in $\delta$; such a sequence exists because $\delta$ has cofinality $\omega$, and all the sequences are chosen simultaneously by choice. [step 1.1, F4]
3.1 For every $\beta < \omega_1$ there is a function $m_\beta : E \cap \beta \to \omega$ with $\delta_i \ne \eta_i$ whenever $\delta \ne \eta$ are in $E \cap \beta$ and $i \ge \max(m_\beta(\delta), m_\beta(\eta))$. Indeed $E \cap \beta \subseteq \beta$ is at most countable, so by [F4] fix a bijection $k \mapsto \delta^k$ from an index set $I$, where $I$ is either a finite initial segment of $\omega$ or all of $\omega$, onto $E \cap \beta$. For $k < n$ in $I$ the set $F(k,n) := \{i \in \omega : (\delta^k)_i = (\delta^n)_i\}$ is finite, because if the two increasing ladders agreed at infinitely many levels then those common values would be cofinal in both $\delta^k$ and $\delta^n$, forcing $\delta^k = \delta^n$. Recursively for $n \in I$, define $m(n) := 1 + \max\bigl(\{0\} \cup \{m(k) : k < n\} \cup \bigcup_{k<n} F(k,n)\bigr)$. The set maximized over is finite (also when $I$ is finite or empty), so the recursion is well defined. If $k<n$ are in $I$, then $m(n)>m(k)$ and every $i\in F(k,n)$ satisfies $i<m(n)$; hence no coincidence level of the pair reaches $\max(m(k),m(n))=m(n)$. Thus $m_\beta(\delta^k):=m(k)$ is well defined by injectivity of the enumeration and has the required separation property. [step 2.2, F1, F4]

4.1 Steps 2.1, 2.2 and 3.1 put exactly the hypotheses of [F3] at $\kappa = \omega$, and ($\kappa_0 = 0$ already) applying it yields a normal nonmetrizable Moore space. [step 2.1, step 3.1, F3] ∎

## Remarks

- **The CH instance is not literally an instance of HYP as printed.** With this $E$ the all-$\beta$ reading of HYP's clause (3b) fails at $\beta = \omega^2$: the set $\{\omega \cdot n : 1 \le n\}$ is a club in $\omega^2$ contained in $E \cap \omega^2$. The construction nevertheless applies, because it consumes only $\sup_n \kappa_n = \kappa$, $2^{\kappa_n} < \kappa$, $2^\kappa = \kappa^+$, the stationarity of $E$ and the ladder separation of step 3.1, which is proved directly in the countable case exactly as the source's parenthetical indicates ("in the case $\kappa = \omega$ there is a straightforward, noninductive proof, which is left to the reader"). This is the convention recorded for the CH item; no stronger claim is asserted.

- **Where CH is used.** Only in $2^\omega = \omega_1$ (step 2.1). The stationarity of $E$ and the countable ladder separation are theorems of $\mathrm{ZFC}$.
