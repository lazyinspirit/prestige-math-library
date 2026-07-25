---
id: lem-sup-scale
kind: lemma
title: "Supremum of a scalar multiple"
status: draft
origin: session
deps: [lem-sup-epsilon, thm-infimum-property, def-complete-ordered-field, lem-of-sign-rules, def-infimum, def-ordered-field, def-field, lem-of-add-order]
justified_by: []
aliases: []
landmark: false
proof_strategy: cases
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

Let $S \subseteq \mathbb{R}$ be nonempty, let $c \in \mathbb{R}$ with $c \ne 0$,
and write $cS := \{cs : s \in S\}$.

1. If $c > 0$ and $S$ is bounded above, then $cS$ is nonempty and bounded above
   and $\sup(cS) = c \sup S$.
2. If $c < 0$ and $S$ is bounded below, then $cS$ is nonempty and bounded above
   and $\sup(cS) = c \inf S$.

Multiplying by a negative number turns the bottom of a set into the top of its
image, which is why claim 2 has an infimum on the right.

## Facts & Assumptions

**Given:** A nonempty $S \subseteq \mathbb{R}$, a nonzero $c \in \mathbb{R}$, and the dilate $cS = \{cs : s \in S\}$; in claim 1 the set $S$ is bounded above and in claim 2 it is bounded below.

[L1] Supremum and the least-upper-bound property: $v = \sup X$ means $v$ is an upper bound of $X$ with $v \le v'$ for every upper bound $v'$ of $X$, and every nonempty $X \subseteq \mathbb{R}$ bounded above has such a $v$ ([[def-complete-ordered-field]]).

[L2] Multiplying an inequality by a nonzero constant, in equivalence form: for $c > 0$ one has $x < y \iff xc < yc$, and for $c < 0$ one has $x < y \iff yc < xc$ (claims 4 and 5 of [[lem-of-sign-rules]]). Adjoining the case $x = y$, in which $xc = yc$, gives the nonstrict implications used below: for $c > 0$, $x \le y \Rightarrow xc \le yc$; for $c < 0$, $x \le y \Rightarrow yc \le xc$.

[L3] Epsilon characterisation of the supremum: for a nonempty $X \subseteq \mathbb{R}$ bounded above and an upper bound $v$ of $X$, one has $v = \sup X$ if and only if for every $\varepsilon > 0$ there is $x \in X$ with $v - \varepsilon < x$ ([[lem-sup-epsilon]]).

[L4] Infimum: every nonempty $X \subseteq \mathbb{R}$ bounded below has a greatest lower bound $\inf X$, that is, a lower bound with $\ell' \le \inf X$ for every lower bound $\ell'$ of $X$ ([[thm-infimum-property]], [[def-infimum]]).

[L5] Trichotomy: for $a, b \in \mathbb{R}$ exactly one of $a < b$, $a = b$, $b < a$ holds, so the negation of $a \le b$ is $b < a$, and a nonzero $c$ satisfies exactly one of $c > 0$, $c < 0$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

[L6] Field and order arithmetic: a nonzero $c$ has an inverse $c^{-1}$ with $c^{-1} c = 1$; $0 \cdot c = 0$; multiplication distributes over addition; and adding a constant preserves the order ([[def-field]], [[lem-of-add-order]]).

## Proof

**Proof technique:** cases.

1.1 Case $c > 0$, in which $S$ is nonempty and bounded above: the least-upper-bound property supplies $u := \sup S$, an upper bound of $S$ that is $\le$ every upper bound of $S$. [assume-case pos, L1]

1.2 Case $c < 0$, in which $S$ is nonempty and bounded below: $S$ has a greatest lower bound, and we set $\ell := \inf S$, a lower bound of $S$ with $\ell' \le \ell$ for every lower bound $\ell'$ of $S$. [assume-case neg, L4]

2.1 In the case $c > 0$, every $s \in S$ satisfies $s \le u$, hence $sc \le uc$, that is $cs \le cu$; since the elements of $cS$ are exactly these $cs$ and $S \ne \emptyset$, the set $cS$ is nonempty and $cu$ is an upper bound of it. [step 1.1, L2]

2.2 In the case $c < 0$, every $s \in S$ satisfies $\ell \le s$, and multiplying by the negative $c$ reverses this to $sc \le \ell c$, that is $cs \le c\ell$; so $cS$ is nonempty and $c\ell$ is an upper bound of it. [step 1.2, L2]

2.3 In the case $c > 0$, let $\varepsilon > 0$ and put $\delta := \varepsilon c^{-1}$, so that $\delta c = \varepsilon$; from $0 \cdot c = 0 < \varepsilon = \delta c$ and $c > 0$ the equivalence form of [L2] gives $\delta > 0$, so the epsilon characterisation applied to $S$ and $u$ yields $s \in S$ with $u - \delta < s$, and multiplying that inequality by $c > 0$ gives $cu - \varepsilon = (u - \delta)c < sc = cs$, an element of $cS$. [step 1.1, L2, L3, L6, algebra]

2.4 In the case $c < 0$, let $\varepsilon > 0$ and put $\delta := -\varepsilon c^{-1}$, so that $\delta c = -\varepsilon < 0 = 0 \cdot c$, which for the negative multiplier $c$ gives $\delta > 0$ by [L2]; then $\ell < \ell + \delta$, and $\ell + \delta$ cannot be a lower bound of $S$, since greatestness of $\ell$ would force $\ell + \delta \le \ell$ and hence $\delta \le 0$; so some $s \in S$ fails $\ell + \delta \le s$, which by trichotomy means $s < \ell + \delta$, and multiplying by $c < 0$ reverses it to $c\ell - \varepsilon = (\ell + \delta)c < sc = cs$, an element of $cS$. [step 1.2, L2, L4, L5, L6, algebra]

3.1 In the case $c > 0$, the set $cS$ is nonempty and bounded above by $cu$, and for every $\varepsilon > 0$ some element of $cS$ exceeds $cu - \varepsilon$, so $\sup(cS)$ exists and the epsilon characterisation identifies it: $\sup(cS) = cu = c \sup S$, which is claim 1. [step 2.1, step 2.3, L1, L3]

3.2 In the case $c < 0$, the set $cS$ is nonempty and bounded above by $c\ell$, and for every $\varepsilon > 0$ some element of $cS$ exceeds $c\ell - \varepsilon$, so $\sup(cS)$ exists and equals $c\ell = c \inf S$, which is claim 2. [step 2.2, step 2.4, L1, L3]

4.1 A nonzero $c$ satisfies exactly one of $c > 0$ and $c < 0$, so the two cases are mutually exclusive and together exhaust the hypothesis $c \ne 0$, and each has been settled; both claims therefore hold. [step 3.1, step 3.2, L5, cases-exhaustive] ∎

## Remarks

- The value $c = 0$ is excluded because it is degenerate rather than difficult:
  for nonempty $S$ one has $0 \cdot S = \{0\}$, so $\sup(0 \cdot S) = 0$ whatever
  $S$ is, and no information about $\sup S$ or $\inf S$ survives.
- Claim 2 needs $S$ bounded below, not bounded above: for $c < 0$ the image $cS$
  is bounded above exactly when $S$ is bounded below ([[lem-reflection]] is the
  case $c = -1$).
- Combining claim 2 with [[thm-infimum-property]] gives the companion identities
  $\inf(cS) = c \inf S$ for $c > 0$ and $\inf(cS) = c \sup S$ for $c < 0$.
