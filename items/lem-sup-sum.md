---
id: lem-sup-sum
kind: lemma
title: "Supremum of a sumset: $\\sup(S + T) = \\sup S + \\sup T$"
status: draft
origin: session
deps: [lem-sup-epsilon, lem-of-add-order, def-complete-ordered-field, cor-of-one-positive, lem-of-sign-rules, def-field, def-ordered-field, lem-of-zero-mult]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
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

Let $S, T \subseteq \mathbb{R}$ be nonempty and bounded above, and write
$S + T := \{s + t : s \in S,\ t \in T\}$. Then $S + T$ is nonempty and bounded
above, and

$$\sup(S + T) = \sup S + \sup T.$$

## Facts & Assumptions

**Given:** Nonempty sets $S, T \subseteq \mathbb{R}$, both bounded above, and the sumset $S + T = \{s + t : s \in S,\ t \in T\}$.

[L1] Epsilon characterisation of the supremum: for a nonempty $X \subseteq \mathbb{R}$ bounded above and an upper bound $w$ of $X$, one has $w = \sup X$ if and only if for every $\varepsilon > 0$ there is $x \in X$ with $w - \varepsilon < x$ ([[lem-sup-epsilon]]).

[L2] Order and addition: $x \le y$ implies $x + c \le y + c$, and inequalities may be added, so $x \le y$ together with $z \le w$ gives $x + z \le y + w$; likewise strict inequalities add ([[lem-of-add-order]]).

[L3] Supremum and the least-upper-bound property: $w = \sup X$ means $w$ is an upper bound of $X$ with $w \le w'$ for every upper bound $w'$ of $X$, and every nonempty $X \subseteq \mathbb{R}$ bounded above has such a $w$ ([[def-complete-ordered-field]]).

[L4] Halving: $0 < 1$ ([[cor-of-one-positive]]); the positives are closed under addition, so $2 := 1 + 1 > 0$, and by trichotomy a positive element is nonzero, so $2 \ne 0$ (axioms O2 and O1 of [[def-ordered-field]]); hence $2^{-1}$ exists ([[def-field]]) and $0 \cdot 2 = 0$ ([[lem-of-zero-mult]]); and for the positive multiplier $2$ one has $x < y$ if and only if $x \cdot 2 < y \cdot 2$ (claim 4 of [[lem-of-sign-rules]]).

## Proof

**Proof technique:** direct.

1.1 Both $S$ and $T$ are nonempty and bounded above, so the least-upper-bound property supplies $u := \sup S$ and $v := \sup T$, upper bounds of $S$ and of $T$ respectively. [given, L3]

1.2 The sumset $S + T$ is nonempty: picking $s \in S$ and $t \in T$, which is possible since both sets are nonempty, gives $s + t \in S + T$. [given]

2.1 For $s \in S$ and $t \in T$ we have $s \le u$ and $t \le v$, and adding these inequalities gives $s + t \le u + v$; since every element of $S + T$ has this form, $u + v$ is an upper bound of $S + T$, so $S + T$ is bounded above. [step 1.1, L2]

2.2 Let $\varepsilon > 0$ and put $\eta := \varepsilon \cdot 2^{-1}$, so that $\eta \cdot 2 = \varepsilon$ and $\eta + \eta = \eta(1 + 1) = \varepsilon$; from $0 \cdot 2 = 0 < \varepsilon = \eta \cdot 2$ and $2 > 0$ we get $\eta > 0$, so the epsilon characterisation applied to $S$ with $u$ and to $T$ with $v$ produces $s \in S$ with $u - \eta < s$ and $t \in T$ with $v - \eta < t$, and adding these strict inequalities gives $(u + v) - \varepsilon = (u - \eta) + (v - \eta) < s + t$, an element of $S + T$. [step 1.1, L1, L2, L4, algebra]

3.1 The set $S + T$ is nonempty and bounded above, so $\sup(S + T)$ exists. [step 1.2, step 2.1, L3]

4.1 Now $u + v$ is an upper bound of $S + T$ and for every $\varepsilon > 0$ some element of $S + T$ exceeds $(u + v) - \varepsilon$, so the epsilon characterisation applied to $S + T$ gives $\sup(S + T) = u + v = \sup S + \sup T$. [step 2.1, step 2.2, step 3.1, L1] ∎

## Remarks

- The inequality $\sup(S + T) \le \sup S + \sup T$ is the easy half and needs only
  that $u + v$ bounds $S + T$; the content is the reverse inequality, and the
  halving of $\varepsilon$ is what lets two separate approximations be combined
  without overshooting.
- The corresponding statement for infima, $\inf(S + T) = \inf S + \inf T$ for
  nonempty $S, T$ bounded below, follows by reflection ([[lem-reflection]],
  [[thm-infimum-property]]), since $-(S + T) = (-S) + (-T)$.
- No analogue holds for products in general: sign changes break the argument, and
  $\sup(ST)$ is not determined by $\sup S$ and $\sup T$ alone.
