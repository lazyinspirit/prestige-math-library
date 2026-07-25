---
id: fs-sup-belongs-to-set
kind: false-statement
title: "FALSE: the supremum of a set belongs to the set"
status: draft
origin: session
deps: [lem-sup-epsilon, def-max-min, def-complete-ordered-field, def-ordered-field, lem-of-add-order, cor-of-one-positive, lem-of-sign-rules, def-field, lem-of-zero-mult]
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
    - title: "Maximum and minimum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Maximum_and_minimum"
pipeline_run: null
---

## Statement

**False claim:** if $S \subseteq \mathbb{R}$ is nonempty and bounded above, then
$\sup S \in S$.

Equivalently, the false claim asserts that every nonempty set bounded above has a
maximum ([[def-max-min]]). It is refuted below by the open unit interval, whose
supremum exists, is unique, and lies outside the set.

## Facts & Assumptions

**Given:** The set $S := \{x \in \mathbb{R} : 0 < x < 1\}$ inside the complete ordered field $\mathbb{R}$, and the abbreviation $2 := 1 + 1$.

[L1] Epsilon characterisation of the supremum: for a nonempty $X \subseteq \mathbb{R}$ bounded above and an upper bound $w$ of $X$, one has $w = \sup X$ if and only if for every $\varepsilon > 0$ there is $x \in X$ with $w - \varepsilon < x$ ([[lem-sup-epsilon]]).

[L2] Maximum: $m = \max X$ means $m \in X$ and $x \le m$ for every $x \in X$ ([[def-max-min]]).

[L3] Order: trichotomy holds, so exactly one of $a < b$, $a = b$, $b < a$ is true, the negation of $a \le b$ is $b < a$, and $a < a$ is impossible; the order is transitive; and adding a constant preserves it, so $a < b$ if and only if $a + c < b + c$ ([[def-complete-ordered-field]], [[def-ordered-field]], [[lem-of-add-order]]).

[L4] Positivity and multiplication: $0 < 1$ ([[cor-of-one-positive]]); sums and products of positive elements are positive (axiom O2 of [[def-ordered-field]]); every nonzero element has a multiplicative inverse ([[def-field]]); $0 \cdot c = 0$ for every $c$ ([[lem-of-zero-mult]]); and for a positive multiplier $c$ one has $x < y$ if and only if $xc < yc$ (claim 4 of [[lem-of-sign-rules]]).

## Refutation

**Proof technique:** direct.

1.1 Since $0 < 1$, the element $2 = 1 + 1$ is positive, hence nonzero, so $2^{-1}$ exists; from $2^{-1} \cdot 2 = 1 > 0 = 0 \cdot 2$ we get $2^{-1} > 0$, and from $2^{-1} \cdot 2 = 1 < 2 = 1 \cdot 2$ (the inequality $1 < 2$ holding because $2 - 1 = 1 > 0$) we get $2^{-1} < 1$; therefore $2^{-1} \in S$ and $S \ne \emptyset$. [L3, L4, algebra]

1.2 Every $x \in S$ satisfies $x < 1$ and hence $x \le 1$, so $1$ is an upper bound of $S$ and $S$ is bounded above. [L3]

1.3 Let $\varepsilon > 0$. Then $1 + \varepsilon > 0$ is nonzero, so we may put $\eta := \varepsilon (1 + \varepsilon)^{-1}$, which satisfies $\eta (1 + \varepsilon) = \varepsilon$; multiplying by the positive $1 + \varepsilon$ is an equivalence, so $\eta > 0$ follows from $\eta(1+\varepsilon) = \varepsilon > 0 = 0 \cdot (1 + \varepsilon)$, next $\eta < 1$ follows from $\eta(1+\varepsilon) = \varepsilon < 1 + \varepsilon = 1 \cdot (1 + \varepsilon)$, and finally $\eta < \varepsilon$ follows from $\eta(1+\varepsilon) = \varepsilon < \varepsilon + \varepsilon^2 = \varepsilon(1 + \varepsilon)$, the last inequality holding because $\varepsilon^2 > 0$. [L3, L4, algebra]

2.1 Put $s := 1 - \eta$. From $0 < \eta$ we get $s = 1 - \eta < 1$, from $\eta < 1$ we get $0 = 1 - 1 < 1 - \eta = s$, so $s \in S$; and from $\eta < \varepsilon$ we get $1 - \varepsilon < 1 - \eta = s$. Since $\varepsilon > 0$ was arbitrary, for every $\varepsilon > 0$ there is an element of $S$ strictly greater than $1 - \varepsilon$. [step 1.3, L3, algebra]

2.2 The number $1$ is not an element of $S$, because membership in $S$ requires $x < 1$ and $1 < 1$ is impossible by trichotomy. [step 1.1, L3]

2.3 The set $S$ has no maximum: if $m$ were one then $m \in S$, so $0 < m < 1$; putting $m' := (m + 1) 2^{-1}$, so that $m' \cdot 2 = m + 1$, the inequality $m \cdot 2 = m + m < m + 1 = m' \cdot 2$ gives $m < m'$, the inequality $m' \cdot 2 = m + 1 < 1 + 1 = 1 \cdot 2$ gives $m' < 1$, and $m' \cdot 2 = m + 1 > 0 = 0 \cdot 2$ gives $m' > 0$; hence $m' \in S$ with $m < m'$, contradicting the requirement $m' \le m$ for a maximum. [step 1.1, L2, L3, L4, algebra]

3.1 The set $S$ is nonempty and bounded above with upper bound $1$, and every $1 - \varepsilon$ with $\varepsilon > 0$ is exceeded by some element of $S$, so the epsilon characterisation gives $\sup S = 1$. [step 1.2, step 2.1, L1]

4.1 Thus $S$ is a nonempty subset of $\mathbb{R}$ that is bounded above, its supremum exists and equals $1$, and $1 \notin S$; the claim that the supremum of a set belongs to the set is therefore false, and correspondingly $S$ has no maximum, so no element of $S$ could have served as its supremum. [step 3.1, step 2.2, step 2.3] ∎

## Remarks

- The refutation is self-contained: the witness $S$, the value of $\sup S$ and
  the failure of membership are all verified here from the complete-ordered-field
  axioms and the items this page has already proved.
- What is true is the corrected statement [[lem-max-is-sup]]: $\sup S \in S$
  exactly when $S$ has a maximum, and then $\sup S = \max S$. Finiteness is a
  sufficient condition for that ([[lem-finite-set-has-max]]); boundedness is not.
- The error is a common one because it is harmless on finite sets, which is where
  intuition is trained. The whole point of the supremum is to name a boundary
  that the set approaches without reaching.
