---
id: ex-sup-of-open-interval
kind: example
title: "$\\sup(0,1) = 1$ and $\\inf(0,1) = 0$, with neither attained"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-sup-epsilon, lem-inf-epsilon, lem-max-is-sup, lem-finite-set-has-max,
       thm-infimum-property, def-max-min, def-bounded-set, def-infimum,
       def-complete-ordered-field, def-ordered-field, def-field,
       cor-of-one-positive, lem-of-add-order, prop-of-reciprocal-order,
       prop-of-ab-less-b]
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
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Infimum and supremum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infimum_and_supremum"
    - title: "Interval (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Interval_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Example

The open unit interval $I = (0,1) = \{x \in \mathbb{R} : 0 < x < 1\}$ has
$\sup I = 1$ and $\inf I = 0$, and neither value belongs to $I$. This is the
smallest interesting computation in the subject: both bounds exist by the
least-upper-bound property ([[def-complete-ordered-field]]) and its dual
([[thm-infimum-property]]), and both are missed by the set, so $I$ has neither a
maximum ([[lem-max-is-sup]]) nor a minimum. The maximum is ruled out by the
attainment criterion; the minimum is ruled out directly, since a minimum would be
a lower bound of $I$ lying in $I$ and therefore at most $\inf I = 0$
([[def-max-min]], [[def-infimum]]).

Nothing here is asserted by inspection. That $1$ bounds $I$ above is checked from
the definition; that no smaller number does is checked with the epsilon
characterisation ([[lem-sup-epsilon]]), by exhibiting, for each $\varepsilon > 0$,
an explicit element of $I$ lying strictly above $1 - \varepsilon$. The witness is
$\max\{1/2,\ 1 - \varepsilon/2\}$: the second entry does the approximating, and
the first keeps the witness inside $I$ when $\varepsilon$ is large. The infimum is
handled symmetrically with [[lem-inf-epsilon]] and the witness
$\min\{1/2,\ \varepsilon/2\}$.

## Facts & Assumptions

**Given:** The complete ordered field $\mathbb{R}$, the open interval $I := \{x \in \mathbb{R} : 0 < x < 1\}$, the abbreviation $2 := 1 + 1$, and the notation $c/2 := c \cdot 2^{-1}$ for $c \in \mathbb{R}$.

[L1] Epsilon characterisation of the supremum: for a nonempty $X \subseteq \mathbb{R}$ bounded above and an upper bound $w$ of $X$, one has $w = \sup X$ if and only if for every $\varepsilon > 0$ there is $x \in X$ with $w - \varepsilon < x$ ([[lem-sup-epsilon]]).

[L2] Epsilon characterisation of the infimum: for a nonempty $X \subseteq \mathbb{R}$ bounded below and a lower bound $m$ of $X$, one has $m = \inf X$ if and only if for every $\varepsilon > 0$ there is $x \in X$ with $x < m + \varepsilon$; such an $\inf X$ exists for every nonempty $X$ bounded below ([[lem-inf-epsilon]], [[thm-infimum-property]], [[def-infimum]]).

[L3] Order: trichotomy holds, so exactly one of $a < b$, $a = b$, $b < a$ is true, $a < a$ is impossible, the negation of $a \le b$ is $b < a$, and $a < b$ implies $a \le b$; the order is transitive; and adding a constant preserves it, that is, $a < b$ implies $a + c < b + c$ (claim 1 of [[lem-of-add-order]]) ([[def-complete-ordered-field]], [[def-ordered-field]], [[lem-of-add-order]]).

[L4] Halving: $0 < 1$, so $2 = 1 + 1 > 1 > 0$; hence $2 \ne 0$ and $2^{-1}$ exists, and $2 > 1$ gives $0 < 2^{-1} < 1$; consequently $0 < c/2 < c$ for every $c > 0$ ([[cor-of-one-positive]], [[lem-of-add-order]], [[prop-of-reciprocal-order]], [[prop-of-ab-less-b]], [[def-field]]).

[L5] Every set $\{a, b\}$ of two reals has a maximum and a minimum, so the notations $\max\{a,b\}$ and $\min\{a,b\}$ are legitimate: each is an element of $\{a,b\}$, the maximum dominates both entries and the minimum is dominated by both ([[lem-finite-set-has-max]], [[def-max-min]]).

[L6] Upper bound, lower bound, maximum, minimum: $u$ bounds $X$ above when $x \le u$ for all $x \in X$, and $\ell$ bounds $X$ below when $\ell \le x$ for all $x \in X$; $m = \max X$ means $m$ is an upper bound of $X$ with $m \in X$, and $m = \min X$ means $m$ is a lower bound of $X$ with $m \in X$ ([[def-complete-ordered-field]], [[def-bounded-set]], [[def-max-min]]).

[L7] Attainment of the supremum: for nonempty $X$ whose supremum exists, $\sup X \in X$ holds exactly when $X$ has a maximum, and then $\sup X = \max X$ ([[lem-max-is-sup]]).

[L8] The infimum is the greatest lower bound: $\inf X$ is a lower bound of $X$, and $\ell \le \inf X$ for every lower bound $\ell$ of $X$ ([[def-infimum]]).

## Verification

**Proof technique:** direct.

1.1 The element $2^{-1}$ lies in $I$, so $I \ne \emptyset$: by [L4] one has $0 < 2^{-1} < 1$, which is exactly the membership condition. [L4, L6]

1.2 The number $1$ is an upper bound of $I$ and the number $0$ is a lower bound of $I$: every $x \in I$ satisfies $0 < x < 1$, hence $0 \le x$ and $x \le 1$; in particular $I$ is bounded above and bounded below. [L3, L6]

1.3 Neither $1$ nor $0$ lies in $I$: membership requires $x < 1$ and $0 < x$, and both $1 < 1$ and $0 < 0$ are impossible by irreflexivity. [L3, L6]

1.4 Let $\varepsilon > 0$ be arbitrary and put $s_\varepsilon := \max\{2^{-1},\ 1 - \varepsilon/2\}$ and $t_\varepsilon := \min\{2^{-1},\ \varepsilon/2\}$, both of which exist. [assume-hyp, L5, choose]

2.1 $s_\varepsilon \in I$: on the one hand $s_\varepsilon \ge 2^{-1} > 0$, so $s_\varepsilon > 0$; on the other hand $s_\varepsilon$ is one of the two entries $2^{-1}$ and $1 - \varepsilon/2$, and each of them is $< 1$, the first by [L4] and the second because $\varepsilon/2 > 0$ gives $1 - \varepsilon/2 < 1$; hence $s_\varepsilon < 1$. [step 1.4, L4, L3]

2.2 $1 - \varepsilon < s_\varepsilon$: from $\varepsilon/2 < \varepsilon$ one gets $1 - \varepsilon < 1 - \varepsilon/2$, and $1 - \varepsilon/2 \le s_\varepsilon$ because $s_\varepsilon$ dominates that entry. [step 1.4, L4, L3, L5]

2.3 $t_\varepsilon \in I$: $t_\varepsilon$ is one of the two entries $2^{-1}$ and $\varepsilon/2$, both of which are positive by [L4], so $t_\varepsilon > 0$; and $t_\varepsilon \le 2^{-1} < 1$, so $t_\varepsilon < 1$. [step 1.4, L4, L3, L5]

2.4 $t_\varepsilon < 0 + \varepsilon$: indeed $t_\varepsilon \le \varepsilon/2 < \varepsilon = 0 + \varepsilon$, using $\varepsilon/2 < \varepsilon$ from [L4] and transitivity. [step 1.4, L4, L3, L5]

3.1 $I$ is nonempty and bounded above by $1$, and for every $\varepsilon > 0$ the element $s_\varepsilon$ of $I$ satisfies $1 - \varepsilon < s_\varepsilon$; the epsilon characterisation therefore gives $\sup I = 1$. [step 1.1, step 1.2, step 2.1, step 2.2, L1]

3.2 $I$ is nonempty and bounded below by $0$, and for every $\varepsilon > 0$ the element $t_\varepsilon$ of $I$ satisfies $t_\varepsilon < 0 + \varepsilon$; the dual characterisation therefore gives $\inf I = 0$. [step 1.1, step 1.2, step 2.3, step 2.4, L2]

4.1 $I$ has no maximum: if $m$ were one, the attainment criterion would give $\sup I = m \in I$, whereas $\sup I = 1 \notin I$; the two are incompatible, so no maximum exists. [step 3.1, step 1.3, L7]

4.2 $I$ has no minimum: a minimum of $I$ would be a lower bound of $I$ lying in $I$, hence at most the greatest lower bound $\inf I = 0$; but every element of $I$ satisfies $0 < x$, and $x \le 0$ together with $0 < x$ is impossible by trichotomy. [step 3.2, L3, L6, L8]

5.1 Hence $\sup I = 1$ and $\inf I = 0$, while $1 \notin I$ and $0 \notin I$, and $I$ has neither a maximum nor a minimum, so both bounds are approached by $I$ and reached by neither. [step 3.1, step 3.2, step 1.3, step 4.1, step 4.2] ∎

## Remarks

- The two entries of the witness $\max\{2^{-1},\ 1 - \varepsilon/2\}$ play different roles, and dropping either breaks the argument. For small $\varepsilon$ the approximating entry $1 - \varepsilon/2$ is the larger one and does the work; for $\varepsilon \ge 2$ that entry falls to $0$ or below and leaves $I$, which is exactly what the guard $2^{-1}$ prevents. Using $1 - \varepsilon$ itself as the witness fails for the same reason and also fails the strict inequality $1 - \varepsilon < s$.
- The interval $I$ is the standard witness that a supremum need not belong to its set ([[fs-sup-belongs-to-set]]); that consequence is recorded separately as [[cex-sup-not-attained]].
- Compare [[ex-sup-of-closed-interval]]: the closed interval $[0,1]$ has the same supremum and the same infimum, and attains both. The value of a supremum therefore carries no information at all about whether it is attained.
