---
id: thm-semicontinuous-evt
kind: theorem
title: "Semicontinuous extreme value theorem: an upper semicontinuous function on a nonempty compact $K \\subseteq \\mathbb{R}$ is bounded above and attains a maximum, and a lower semicontinuous one is bounded below and attains a minimum"
status: draft
origin: session
deps: [def-semicontinuity, thm-semicontinuity-level-set-characterisation, def-open-cover-r, def-max-min, def-bounded-set, lem-sup-epsilon, def-complete-ordered-field, cor-archimedean-reciprocal, def-open-and-closed-in-r, lem-finite-set-has-max, thm-of-archimedean, def-canonical-natural, lem-of-naturals-positive]
justified_by: []
aliases: [thm-usc-attains-maximum]
landmark: true
short: "semicontinuous extreme value theorem"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Semi-continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Semi-continuity"
    - title: "Extreme value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Extreme_value_theorem"
pipeline_run: null
---

## Statement

Let $K \subseteq \mathbb{R}$ be nonempty and compact ([[def-open-cover-r]]).

1. If $f : K \to \mathbb{R}$ is upper semicontinuous on $K$
   ([[def-semicontinuity]]) then $f[K]$ is bounded above
   ([[def-bounded-set]]) and $f$ attains a maximum: there is $x_0 \in K$ with
   $f(x) \le f(x_0)$ for every $x \in K$ ([[def-max-min]]).
2. If $f : K \to \mathbb{R}$ is lower semicontinuous on $K$ then $f[K]$ is
   bounded below and $f$ attains a minimum.

**The theorem is genuinely one-sided.** An upper semicontinuous function on a
compact set need be neither bounded below nor a function attaining its infimum;
the companion page gives such a function on $[0,1]$. Only the maximum is
asserted in claim 1, and only the minimum in claim 2.

Taking $f$ continuous, which is upper and lower semicontinuous at once
([[def-semicontinuity]]), recovers the classical extreme value theorem on a
compact subset of $\mathbb{R}$.

## Facts & Assumptions

**Given:** A nonempty compact $K \subseteq \mathbb{R}$ and an upper semicontinuous $f : K \to \mathbb{R}$.

[L1] For every real $\alpha$ there is an open $U_\alpha \subseteq \mathbb{R}$ with $U_\alpha \cap K = \{\, x \in K : f(x) < \alpha \,\}$, namely $U_\alpha = \{y \in \mathbb{R} : K \cap N_\rho(y) \subseteq \{f < \alpha\}$ for some real $\rho > 0\}$ ([[thm-semicontinuity-level-set-characterisation]], [[def-semicontinuity]], [[def-open-and-closed-in-r]]).

[L2] The set $U_\alpha$ of [L1] is monotone in $\alpha$: $\alpha \le \beta$ gives $\{f < \alpha\} \subseteq \{f < \beta\}$ and hence $U_\alpha \subseteq U_\beta$, directly from the displayed description.

[L3] $K$ compact means: every family of open subsets of $\mathbb{R}$ whose union contains $K$ has a finite subfamily whose union contains $K$ ([[def-open-cover-r]]).

[L4] For every real $x$ there is a natural $n \ge 1$ with $x < \iota(n)$, and for every real $\eta > 0$ a natural $n \ge 1$ with $1/\iota(n) < \eta$; $\iota$ is positive and strictly increasing on the naturals $\ge 1$ ([[thm-of-archimedean]], [[cor-archimedean-reciprocal]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L5] A nonempty set of reals bounded above has a least upper bound, and for every real $\varepsilon > 0$ some member of the set exceeds $\sup - \varepsilon$ ([[def-complete-ordered-field]], [[lem-sup-epsilon]], [[def-bounded-set]]).

[L6] A nonempty finite set of reals has a maximum ([[lem-finite-set-has-max]], [[def-max-min]]).

## Proof

**Proof technique:** direct.

1.1 For each real $\alpha$ let $U_\alpha$ be the open set of [L1], so that $U_\alpha \cap K = \{x \in K : f(x) < \alpha\}$ and $\alpha \le \beta$ implies $U_\alpha \subseteq U_\beta$. [L1, L2, construct]

2.1 The family $\{\, U_{\iota(n)} : n \in \mathbb{N},\ n \ge 1 \,\}$ covers $K$: every $x \in K$ has $f(x) < \iota(n)$ for some natural $n \ge 1$, and then $x \in U_{\iota(n)}$. [step 1.1, L4]

3.1 By compactness finitely many members cover $K$, say $U_{\iota(n_0)}, \dots, U_{\iota(n_j)}$ with each $n_i \ge 1$; let $N$ be the greatest of $\iota(n_0), \dots, \iota(n_j)$, which exists as the maximum of a nonempty finite set of reals. Then each $U_{\iota(n_i)} \subseteq U_{N}$, so $K \subseteq U_{N}$ and hence $K = U_{N} \cap K = \{x \in K : f(x) < N\}$. So $f[K]$ is bounded above by $N$. [step 1.1, step 2.1, L2, L3, L6]

4.1 $f[K]$ is nonempty, since $K$ is, and bounded above, so $M := \sup f[K]$ exists. [step 3.1, L5]

5.1 For each natural $n \ge 1$ put $\alpha_n := M - 1/\iota(n)$. The family $\{\, U_{\alpha_n} : n \ge 1 \,\}$ has **no** finite subfamily covering $K$. Indeed, let $U_{\alpha_{n_0}}, \dots, U_{\alpha_{n_j}}$ be finitely many of them; if the list is empty its union is empty and does not contain the nonempty $K$. Otherwise let $n^{*}$ be a natural among $n_0, \dots, n_j$ with $\alpha_{n^{*}}$ greatest, so that every member of the list is contained in $U_{\alpha_{n^{*}}}$. Since $\alpha_{n^{*}} < M = \sup f[K]$, there is $x \in K$ with $f(x) > \alpha_{n^{*}}$, and such an $x$ lies in $K$ but not in $U_{\alpha_{n^{*}}} \cap K = \{f < \alpha_{n^{*}}\}$, hence in no member of the list. [step 1.1, step 4.1, L2, L4, L5, L6]

6.1 By compactness, a family of open sets with no finite subfamily covering $K$ cannot itself cover $K$. So there is $x_{0} \in K$ with $x_{0} \notin U_{\alpha_n}$ for every natural $n \ge 1$, that is $f(x_{0}) \ge \alpha_n = M - 1/\iota(n)$ for every such $n$. [step 1.1, step 5.1, L3]

7.1 Hence $f(x_{0}) = M$. If $f(x_{0}) < M$ then $M - f(x_{0}) > 0$ and there is a natural $n \ge 1$ with $1/\iota(n) < M - f(x_{0})$, that is $f(x_{0}) < M - 1/\iota(n)$, contradicting step 6.1; and $f(x_{0}) \le M$ because $M$ is an upper bound of $f[K]$. [step 4.1, step 6.1, L4, L5]

8.1 So $f$ is bounded above on $K$ and attains the value $M = \sup f[K]$ at $x_{0} \in K$, which is a maximum of $f[K]$: this is claim 1. [step 3.1, step 4.1, step 7.1, L5]

9.1 Claim 2 follows by applying claim 1 to $-f$, which is upper semicontinuous on $K$ when $f$ is lower semicontinuous; then $-f$ is bounded above and attains a maximum at some $x_{1} \in K$, so $f$ is bounded below and $f(x_{1}) \le f(x)$ for every $x \in K$, a minimum. [step 8.1, L1] ∎

## Remarks

- **Where compactness is spent, and in which form.** Twice, and both times as the open-cover property of [[def-open-cover-r]]: once to bound $f$ above, once to find the point where the supremum is attained. No sequence is extracted and no countable choice is used; the second application is stated as the contrapositive of the covering property, which is why step 5.1 proves that no finite subfamily covers rather than assuming a limit point.

- **Semicontinuity cannot be dropped.** Both applications use only that the sets $\{f < \alpha\}$ are relatively open ([[thm-semicontinuity-level-set-characterisation]]), which is exactly upper semicontinuity, and nothing else about $f$ is used at all. A function whose strict sublevel sets are not relatively open can be unbounded above on a compact set: the function on $[0,1]$ equal to $1/x$ for $x \ne 0$ and to $0$ at $0$ is one.
