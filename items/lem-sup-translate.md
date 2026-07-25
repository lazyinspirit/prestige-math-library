---
id: lem-sup-translate
kind: lemma
title: "Supremum of a translate: $\\sup(a + S) = a + \\sup S$"
status: published
origin: session
deps: [lem-sup-epsilon, lem-of-add-order, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
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

Let $S \subseteq \mathbb{R}$ be nonempty and bounded above and let
$a \in \mathbb{R}$. Write $a + S := \{a + s : s \in S\}$. Then $a + S$ is
nonempty and bounded above, and

$$\sup(a + S) = a + \sup S.$$

## Facts & Assumptions

**Given:** A nonempty $S \subseteq \mathbb{R}$ that is bounded above, an element $a \in \mathbb{R}$, and the translate $a + S = \{a + s : s \in S\}$.

[L1] Epsilon characterisation of the supremum: for a nonempty $X \subseteq \mathbb{R}$ bounded above and an upper bound $v$ of $X$, one has $v = \sup X$ if and only if for every $\varepsilon > 0$ there is $x \in X$ with $v - \varepsilon < x$ ([[lem-sup-epsilon]]).

[L2] Adding a constant preserves the order: $x < y$ implies $x + c < y + c$, and hence $x \le y$ if and only if $x + c \le y + c$, since one may add $-c$ to return ([[lem-of-add-order]]).

[L3] Supremum and the least-upper-bound property: every nonempty $X \subseteq \mathbb{R}$ bounded above has a least upper bound $\sup X$, an upper bound that is $\le$ every upper bound of $X$ ([[def-complete-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Since $S$ is nonempty and bounded above, the least-upper-bound property gives $u := \sup S$, which is an upper bound of $S$. [given, L3]

1.2 The set $a + S$ is nonempty, because $S$ has an element $s$ and then $a + s \in a + S$. [given]

2.1 Every $s \in S$ satisfies $s \le u$, hence $a + s \le a + u$; as the elements of $a + S$ are exactly these $a + s$, the number $a + u$ is an upper bound of $a + S$, so $a + S$ is bounded above. [step 1.1, L2]

2.2 Let $\varepsilon > 0$. Applying the epsilon characterisation to $S$ and its supremum $u$ produces $s \in S$ with $u - \varepsilon < s$, and adding $a$ gives $(a + u) - \varepsilon = a + (u - \varepsilon) < a + s$, where $a + s \in a + S$. [step 1.1, L1, L2, algebra]

3.1 The set $a + S$ is nonempty and bounded above, so $\sup(a + S)$ exists. [step 1.2, step 2.1, L3]

4.1 Now $a + u$ is an upper bound of $a + S$ and for every $\varepsilon > 0$ some element of $a + S$ exceeds $(a + u) - \varepsilon$, so the epsilon characterisation applied to $a + S$ gives $\sup(a + S) = a + u = a + \sup S$. [step 2.1, step 2.2, step 3.1, L1] ∎
