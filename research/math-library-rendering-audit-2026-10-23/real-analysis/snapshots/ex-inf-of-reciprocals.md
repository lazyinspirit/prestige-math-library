---
id: ex-inf-of-reciprocals
kind: example
title: "$\\inf\\{1/n : n \\ge 1\\} = 0$, not attained, while $\\sup\\{1/n : n \\ge 1\\} = 1$ is"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-inf-epsilon, thm-of-archimedean, lem-max-is-sup, lem-of-naturals-positive,
       lem-of-inverse-positive, lem-of-sign-rules, def-archimedean-field,
       def-max-min, def-infimum, def-bounded-set, def-complete-ordered-field,
       def-ordered-field, def-field, cor-of-one-positive]
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
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
    - title: "Infimum and supremum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infimum_and_supremum"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Example

Write $n \cdot 1$ for the canonical natural number $\underbrace{1 + \cdots + 1}_{n}$
of $\mathbb{R}$ ([[lem-of-naturals-positive]]) and $1/n := (n \cdot 1)^{-1}$. The
set
$$H = \{\, 1/n \ : \ n \ge 1 \,\} = \{\, 1,\ 1/2,\ 1/3,\ \dots \,\}$$
has $\inf H = 0$, which is **not** attained, and $\sup H = 1$, which **is**
attained, being $\max H$ ([[def-max-min]]).

The interesting half is the infimum, and it is exactly the Archimedean property
([[thm-of-archimedean]]) in disguise. That $0$ is a lower bound is immediate from
positivity of the canonical naturals. That no positive number is a lower bound is
the statement that the reciprocals of the naturals get below every positive
$\varepsilon$, which is what the Archimedean property asserts once applied to
$\varepsilon^{-1}$. Leastness is then read off from the epsilon characterisation
[[lem-inf-epsilon]]. Nothing is asserted by inspection: for each $\varepsilon > 0$
an explicit index is produced.

## Facts & Assumptions

**Given:** The complete ordered field $\mathbb{R}$; for a natural number $n \ge 1$ let $n \cdot 1$ denote the canonical natural of $\mathbb{R}$ and write $1/n := (n \cdot 1)^{-1}$; and let $H := \{\, 1/n : n \ge 1 \,\}$.

[L1] Canonical naturals: $1 \cdot 1 = 1$; $n \cdot 1 > 0$ for every $n \ge 1$; and $n \mapsto n \cdot 1$ is strictly increasing on $\{1, 2, 3, \dots\}$, so that $1 = 1 \cdot 1 \le n \cdot 1$ for every $n \ge 1$, with equality exactly when $n = 1$ ([[lem-of-naturals-positive]]).

[L2] Archimedean property: $\mathbb{R}$ is a complete ordered field, hence Archimedean, so for every $x \in \mathbb{R}$ there is a natural $n \ge 1$ with $x < n \cdot 1$ ([[thm-of-archimedean]], [[def-archimedean-field]]).

[L3] Inverses and order: if $a > 0$ then $a^{-1} > 0$; if $0 < a < b$ then $0 < b^{-1} < a^{-1}$ (claims 1 and 2 of [[lem-of-inverse-positive]]); and, from uniqueness of the multiplicative inverse, $(a^{-1})^{-1} = a$ for every $a \ne 0$ and $1^{-1} = 1$, since $a^{-1} a = 1$ exhibits $a$ as an inverse of $a^{-1}$ and the identity axiom $1 \cdot x = x$ at $x = 1$ exhibits $1$ as an inverse of itself ([[def-field]]).

[L4] Multiplying by a positive constant is an order equivalence: for $c > 0$ one has $x < y$ if and only if $xc < yc$, and hence, by trichotomy, $x \le y$ if and only if $xc \le yc$ ([[lem-of-sign-rules]], [[def-ordered-field]]).

[L5] Epsilon characterisation of the infimum: for a nonempty $X \subseteq \mathbb{R}$ bounded below and a lower bound $m$ of $X$, one has $m = \inf X$ if and only if for every $\varepsilon > 0$ there is $x \in X$ with $x < m + \varepsilon$ ([[lem-inf-epsilon]], [[def-infimum]]).

[L6] Maximum and attainment: $m = \max X$ means $m \in X$ and $x \le m$ for all $x \in X$; if a nonempty $X$ has a maximum then $\sup X$ exists and $\sup X = \max X$ ([[def-max-min]], [[lem-max-is-sup]]).

[L7] Order: trichotomy holds, so $a < a$ is impossible and the negation of $a \le b$ is $b < a$; the order is transitive; and $0 < 1$ ([[def-complete-ordered-field]], [[def-ordered-field]], [[cor-of-one-positive]]).

[L8] Lower bound and bounded below: $\ell$ bounds $X$ below when $\ell \le x$ for all $x \in X$, and $X$ is bounded below when such an $\ell$ exists ([[def-bounded-set]]).

[L9] Minimum, and the infimum as greatest lower bound: $m = \min X$ means $m \in X$ and $m \le x$ for all $x \in X$, so a minimum is a lower bound of $X$ belonging to $X$ ([[def-max-min]]); and $\inf X$ is the greatest lower bound, so $\ell \le \inf X$ for every lower bound $\ell$ of $X$ ([[def-infimum]]).

## Verification

**Proof technique:** direct.

1.1 $H$ is nonempty: taking $n = 1$ gives the canonical natural $1 \cdot 1 = 1$ by [L1], and $1/1 = 1^{-1} = 1$ by [L3], so $1 \in H$. [L1, L3]

1.2 Every element of $H$ is positive, so $0$ is a lower bound of $H$ and $H$ is bounded below: for $n \ge 1$ one has $n \cdot 1 > 0$, hence $1/n = (n \cdot 1)^{-1} > 0$ and in particular $0 \le 1/n$. [L1, L3, L8]

1.3 Every element of $H$ is $\le 1$: fix $n \ge 1$ and multiply by the positive constant $n \cdot 1$, which by [L4] turns the inequality $(n \cdot 1)^{-1} \le 1$ into the equivalent inequality $1 = (n \cdot 1)^{-1}(n \cdot 1) \le 1 \cdot (n \cdot 1) = n \cdot 1$, and the latter holds by [L1]. [L1, L3, L4]

1.4 Let $\varepsilon > 0$ be arbitrary; then $\varepsilon^{-1} > 0$, and the Archimedean property applied to $\varepsilon^{-1}$ supplies a natural $n_\varepsilon \ge 1$ with $\varepsilon^{-1} < n_\varepsilon \cdot 1$. [assume-hyp, L2, L3, choose]

2.1 That index witnesses the approximation: from $0 < \varepsilon^{-1} < n_\varepsilon \cdot 1$ and [L3] one gets $0 < (n_\varepsilon \cdot 1)^{-1} < (\varepsilon^{-1})^{-1} = \varepsilon$, that is $1/n_\varepsilon \in H$ with $1/n_\varepsilon < 0 + \varepsilon$. [step 1.4, L3, L7]

2.2 $0 \notin H$: every element of $H$ is $> 0$ by 1.2, whereas $0 > 0$ is impossible by irreflexivity. [step 1.2, L7]

2.3 $1 = \max H$: the element $1$ lies in $H$ by 1.1 and dominates every element of $H$ by 1.3. [step 1.1, step 1.3, L6]

3.1 $H$ is nonempty and bounded below by $0$, and for every $\varepsilon > 0$ some element of $H$ is $< 0 + \varepsilon$; the epsilon characterisation therefore gives $\inf H = 0$. [step 1.1, step 1.2, step 2.1, L5]

3.2 Since $H$ is nonempty with maximum $1$, the attainment criterion gives that $\sup H$ exists and $\sup H = \max H = 1 \in H$. [step 2.3, step 1.1, L6]

4.1 $H$ has no minimum: a minimum of $H$ would be a lower bound of $H$ lying in $H$, hence at most the greatest lower bound $\inf H = 0$; but every element of $H$ is $> 0$ by 1.2, and $x \le 0$ together with $0 < x$ is impossible by trichotomy. [step 3.1, step 1.2, L7, L9]

5.1 Hence $\inf H = 0 \notin H$ and $\sup H = 1 \in H$: the infimum of $H$ is not attained and $H$ has no minimum, while the supremum is attained and is the maximum. [step 3.1, step 3.2, step 2.2, step 4.1, L6] ∎

## Remarks

- The set $H$ is bounded, with $0 \le h \le 1$ for every $h \in H$, and its members are pairwise distinct, since $n \mapsto 1/n$ is strictly decreasing on $\{1, 2, 3, \dots\}$: for $n < m$ the map $n \mapsto n \cdot 1$ is strictly increasing by [L1], so $0 < n \cdot 1 < m \cdot 1$, and inversion reverses that by [L3], giving $1/m < 1/n$. It is the standard example showing that a bounded set with infinitely many members can attain one of its two bounds and miss the other. ("Infinite" is used here in its everyday sense: no definition of finiteness is in scope on this page, and nothing above or below depends on one.)
- Positivity of every element is what makes $0$ a lower bound, and the Archimedean property is what makes it the greatest one. In a non-Archimedean ordered field the argument breaks at exactly one point, step 1.4: it is the Archimedean property ([[thm-of-archimedean]]) that supplies, for a given $\varepsilon > 0$, an index $n_\varepsilon$ with $\varepsilon^{-1} < n_\varepsilon \cdot 1$, and hence with $1/n_\varepsilon < \varepsilon$ in step 2.1. And [[cex-ordered-field-not-archimedean]] exhibits an ordered field where no such natural exists. What that item establishes is the failure of the Archimedean property there; it says nothing about $H$ or its greatest lower bound, and this page does not compute one. So the value $\inf H = 0$ is a statement about $\mathbb{R}$, not a formal manipulation.
- Read as a sequence rather than a set, $H$ is the classical null sequence; the rational form of the same fact is [[ex-one-over-n-null]].
