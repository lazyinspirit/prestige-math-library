---
id: lem-sup-monotone
kind: lemma
title: "Monotonicity of the supremum under inclusion"
status: draft
origin: session
deps: [lem-sup-unique, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Infimum and supremum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infimum_and_supremum"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $S$ and $T$ be subsets of $\mathbb{R}$ with $\emptyset \ne S \subseteq T$,
and suppose $T$ is bounded above. Then $S$ is nonempty and bounded above, both
$\sup S$ and $\sup T$ exist, and

$$\sup S \le \sup T.$$

## Facts & Assumptions

**Given:** Sets $S, T \subseteq \mathbb{R}$ with $S \ne \emptyset$, $S \subseteq T$, and $T$ bounded above.

[L1] Supremum and the least-upper-bound property: $u = \sup X$ means $u$ is an upper bound of $X$ and $u \le u'$ for every upper bound $u'$ of $X$; every nonempty $X \subseteq \mathbb{R}$ that is bounded above has such a $u$ ([[def-complete-ordered-field]]).

[L2] A least upper bound is unique, so $\sup X$ denotes a single real number ([[lem-sup-unique]]).

## Proof

**Proof technique:** direct.

1.1 Since $T$ is bounded above, fix an upper bound $u$ of $T$, so $t \le u$ for every $t \in T$. [given, choose]

1.2 By hypothesis $S$ is nonempty and $S \subseteq T$, so $T$ is nonempty as well. [given]

2.1 Every $s \in S$ lies in $T$ and therefore satisfies $s \le u$; hence $u$ is an upper bound of $S$ and $S$ is bounded above. [step 1.1, step 1.2, L1]

3.1 Both $S$ and $T$ are nonempty and bounded above, so by the least-upper-bound property $\sup S$ and $\sup T$ exist, each uniquely. [step 1.2, step 2.1, L1, L2]

4.1 As $\sup T$ is an upper bound of $T$, every $t \in T$ satisfies $t \le \sup T$; since $S \subseteq T$, every $s \in S$ satisfies $s \le \sup T$, so $\sup T$ is an upper bound of $S$. [step 3.1, step 1.2, L1]

5.1 The number $\sup S$ is the least of the upper bounds of $S$, and $\sup T$ is one of them, hence $\sup S \le \sup T$. [step 4.1, step 3.1, L1] ∎

## Remarks

- The hypothesis that the larger set is bounded above cannot be weakened to the
  smaller one being bounded above: $\sup T$ has to exist for the inequality to
  mean anything.
- The dual statement, $\inf T \le \inf S$ for $\emptyset \ne S \subseteq T$ with
  $T$ bounded below, follows by applying this lemma to
  $\emptyset \ne -S \subseteq -T$, which gives $\sup(-S) \le \sup(-T)$, and then
  negating and using $\inf X = -\sup(-X)$ ([[lem-reflection]],
  [[thm-infimum-property]]).
