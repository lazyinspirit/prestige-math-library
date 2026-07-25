---
id: lem-sup-epsilon
kind: lemma
title: "Epsilon characterisation of the supremum"
status: draft
origin: session
deps: [def-complete-ordered-field, lem-sup-unique, def-ordered-field]
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
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $S \subseteq \mathbb{R}$ be nonempty and bounded above, and let $u$ be an
upper bound of $S$ ([[def-complete-ordered-field]]). Then

$$u = \sup S \quad \Longleftrightarrow \quad \text{for every } \varepsilon > 0 \text{ there exists } s \in S \text{ with } u - \varepsilon < s.$$

In words: among the upper bounds of $S$, the supremum is exactly the one that
cannot be lowered by any positive amount and still bound $S$.

## Facts & Assumptions

**Given:** A nonempty $S \subseteq \mathbb{R}$ that is bounded above, and an upper bound $u$ of $S$; since $S$ is nonempty and bounded above, $\sup S$ exists.

[L1] Supremum: $u = \sup S$ exactly when $u$ is an upper bound of $S$ and $u \le u'$ for every upper bound $u'$ of $S$; and every nonempty subset of $\mathbb{R}$ that is bounded above has such a least upper bound ([[def-complete-ordered-field]]).

[L2] The least upper bound is unique, so the equation $u = \sup S$ says precisely that $u$ is a least upper bound of $S$ ([[lem-sup-unique]]).

[L3] The order is total and translation invariant: for $a, b \in \mathbb{R}$ exactly one of $a < b$, $a = b$, $b < a$ holds, so the negation of $a \le b$ is $b < a$; and $a < b$ holds exactly when $b - a > 0$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 For the forward implication assume $u = \sup S$, that is, $u$ is an upper bound of $S$ that is $\le$ every upper bound of $S$, and let $\varepsilon > 0$ be arbitrary. [assume-hyp, L1, L2]

1.2 For the converse implication assume that $u$ is an upper bound of $S$ such that for every $\varepsilon > 0$ there exists $s \in S$ with $u - \varepsilon < s$, and let $u'$ be an arbitrary upper bound of $S$. [assume-hyp]

2.1 Since $u - (u - \varepsilon) = \varepsilon > 0$, we have $u - \varepsilon < u$. [step 1.1, L3, algebra]

2.2 By totality either $u \le u'$ or $u' < u$; in the second case put $\varepsilon_0 := u - u'$, so that $\varepsilon_0 > 0$ and $u - \varepsilon_0 = u'$. [step 1.2, L3, algebra]

3.1 The element $u - \varepsilon$ is not an upper bound of $S$: if it were, the leastness of $u$ among upper bounds would give $u \le u - \varepsilon$, which contradicts $u - \varepsilon < u$ by trichotomy. [step 2.1, step 1.1, L1, L3]

3.2 In that second case the hypothesis applied to $\varepsilon_0$ yields $s_0 \in S$ with $u' = u - \varepsilon_0 < s_0$, so $s_0 \le u'$ fails, contradicting that $u'$ is an upper bound of $S$; the second case is therefore impossible and $u \le u'$. [step 2.2, step 1.2, L3]

4.1 Failing to be an upper bound of $S$ means precisely that some $s \in S$ does not satisfy $s \le u - \varepsilon$, and by totality that says $u - \varepsilon < s$; since $\varepsilon > 0$ was arbitrary, the forward implication is proved. [step 3.1, L3]

4.2 Since $u'$ was an arbitrary upper bound of $S$, we get $u \le u'$ for every upper bound $u'$; as $u$ is itself an upper bound, $u$ is a least upper bound of $S$, hence $u = \sup S$ by uniqueness, which proves the converse implication. [step 3.2, step 1.2, L1, L2]

5.1 Both implications hold, so for an upper bound $u$ of a nonempty set $S$ bounded above, $u = \sup S$ if and only if for every $\varepsilon > 0$ there is $s \in S$ with $u - \varepsilon < s$. [step 4.1, step 4.2] ∎
