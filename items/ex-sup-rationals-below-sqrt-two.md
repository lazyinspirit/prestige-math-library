---
id: ex-sup-rationals-below-sqrt-two
kind: example
title: "$\\sup\\{q \\in \\mathbb{Q} : q > 0,\\ q^2 < 2\\} = \\sqrt{2}$ in $\\mathbb{R}$, and no supremum in $\\mathbb{Q}$"
status: draft
origin: session
deps: [lem-sup-epsilon, thm-of-square-roots, fs-sqrt2-rational, fs-rationals-complete,
       lem-of-q-embeds, lem-of-q-dense, thm-of-archimedean, lem-of-square-monotone,
       lem-finite-set-has-max, def-max-min, def-archimedean-field,
       def-complete-ordered-field, def-ordered-field, def-field,
       cor-of-one-positive, lem-of-add-order, lem-of-zero-mult]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Least-upper-bound property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Least-upper-bound_property"
    - title: "Square root of 2 (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Square_root_of_2"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Example

Let $\iota : \mathbb{Q} \to \mathbb{R}$ be the canonical embedding of the
rationals as an ordered subfield of $\mathbb{R}$ ([[lem-of-q-embeds]]) and put
$$S = \{\, q \in \mathbb{Q} \ : \ q > 0 \text{ and } q^2 < 2 \,\}.$$
Viewed inside $\mathbb{R}$, the set $S$ has a supremum, namely
$\sup S = \sqrt{2}$, the unique nonnegative real whose square is $2$
([[thm-of-square-roots]]). Viewed inside $\mathbb{Q}$, the same set has **no**
supremum at all: it has upper bounds in $\mathbb{Q}$, but none of them is least.

This is the reason $\mathbb{R}$ exists. The rationals form an ordered field in
which a perfectly ordinary bounded set fails to have a least upper bound, because
the number that ought to be that bound is irrational ([[fs-sqrt2-rational]]). The
least-upper-bound property ([[def-complete-ordered-field]]) is precisely the
repair, and the value it supplies here is $\sqrt{2}$.

The order-theoretic defect exhibited below is the exact counterpart of the metric
defect recorded in [[fs-rationals-complete]], where a Cauchy sequence of rationals
fails to have a rational limit. The two are different statements about the same
hole in $\mathbb{Q}$, and this library repairs it twice, once by Dedekind cuts
and once by Cauchy sequences.

## Facts & Assumptions

**Given:** The complete ordered field $\mathbb{R}$, the canonical embedding $\iota : \mathbb{Q} \to \mathbb{R}$, the abbreviation $2 := 1 + 1$ in each of the two fields, and the set $S := \{\, q \in \mathbb{Q} : q > 0 \text{ and } q^2 < 2 \,\}$, regarded as a subset of $\mathbb{Q}$ and, through $\iota$, as the subset $\iota(S)$ of $\mathbb{R}$. "Upper bound of $S$ in $\mathbb{Q}$" means an element $u \in \mathbb{Q}$ with $q \le u$ for every $q \in S$, and "supremum of $S$ in $\mathbb{Q}$" means such a $u$ that is $\le$ every upper bound of $S$ in $\mathbb{Q}$.

[L1] Square roots: every $a \ge 0$ in $\mathbb{R}$ has a unique $s \ge 0$ with $s^2 = a$ ([[thm-of-square-roots]]).

[L2] Squaring is strictly monotone on the nonnegatives: for $a, b \ge 0$ in $\mathbb{R}$ one has $a < b$ if and only if $a^2 < b^2$ ([[lem-of-square-monotone]]).

[L3] The embedding: $\iota$ is the unique field homomorphism $\mathbb{Q} \to \mathbb{R}$; it is injective and order preserving, so $\iota(q + r) = \iota(q) + \iota(r)$, $\iota(qr) = \iota(q)\iota(r)$, $\iota(1) = 1$ and $q < r$ implies $\iota(q) < \iota(r)$. It also reflects the order: if $\iota(q) < \iota(r)$ then $q < r$, since $r \le q$ would give $\iota(r) \le \iota(q)$ by order preservation and injectivity, contradicting trichotomy ([[lem-of-q-embeds]], [[def-ordered-field]]).

[L4] Density: $\mathbb{R}$ is Archimedean, being a complete ordered field, and its rationals are dense in it, so for $x < y$ in $\mathbb{R}$ there is $q \in \mathbb{Q}$ with $x < \iota(q) < y$ ([[thm-of-archimedean]], [[def-archimedean-field]], [[lem-of-q-dense]]).

[L5] No rational squares to $2$ ([[fs-sqrt2-rational]]).

[L6] Epsilon characterisation of the supremum: for a nonempty $X \subseteq \mathbb{R}$ bounded above and an upper bound $w$ of $X$, one has $w = \sup X$ if and only if for every $\varepsilon > 0$ there is $x \in X$ with $w - \varepsilon < x$ ([[lem-sup-epsilon]]).

[L7] Every set $\{a, b\}$ of two reals has a maximum, which is one of the two entries and dominates both ([[lem-finite-set-has-max]], [[def-max-min]]).

[L8] Order and least upper bounds: $0 < 1$, hence $2 = 1 + 1 > 1 > 0$ in both fields; trichotomy holds, so the negation of $a \le b$ is $b < a$; the order is transitive; adding a constant preserves it; multiplication distributes over addition, so $2 \cdot 2 = 2 + 2$; $0 \cdot a = 0$ for every $a$, so $0^2 = 0$ ([[lem-of-zero-mult]]); and a least upper bound is an upper bound that is $\le$ every upper bound ([[cor-of-one-positive]], [[lem-of-add-order]], [[def-complete-ordered-field]], [[def-ordered-field]], [[def-field]]).

## Verification

**Proof technique:** direct.

1.1 In $\mathbb{R}$ we have $2 = 1 + 1 > 0$, so [L1] supplies a unique $r \ge 0$ with $r^2 = 2$; and $r \ne 0$ because $r = 0$ would give $r^2 = 0 \ne 2$, so $r > 0$. Write $r =: \sqrt{2}$. [L1, L8, choose]

1.2 $S$ is nonempty: the rational $1$ satisfies $1 > 0$ and $1^2 = 1 < 2$, so $1 \in S$. [L8]

1.3 Let $u \in \mathbb{Q}$ be an arbitrary upper bound of $S$ in $\mathbb{Q}$, that is, $q \le u$ for every $q \in S$. [assume-hyp]

1.4 Let $\varepsilon > 0$ in $\mathbb{R}$ be arbitrary. [assume-hyp]

1.5 The rational $2$ is an upper bound of $S$ in $\mathbb{Q}$, so $S$ is bounded above there: for $q \in S$ order preservation gives $\iota(q) > 0$ and $\iota(q)^2 = \iota(q^2) < \iota(2) = 2 < 2 + 2 = 2 \cdot 2 = \iota(2)^2$, whence $\iota(q) < \iota(2)$ by [L2] and $q < 2$ by order reflection. [L2, L3, L8]

2.1 $r$ is an upper bound of $\iota(S)$ in $\mathbb{R}$: for $q \in S$ order preservation gives $\iota(q) > 0$ and $\iota(q)^2 = \iota(q^2) < \iota(2) = 2 = r^2$, so $\iota(q) < r$ by [L2], hence $\iota(q) \le r$. [step 1.1, L2, L3, L8]

2.2 $r$ is not the image of any rational: if $r = \iota(q)$ then $\iota(q^2) = \iota(q)^2 = r^2 = 2 = \iota(2)$, so $q^2 = 2$ by injectivity of $\iota$, which [L5] forbids. [step 1.1, L3, L5]

2.3 Put $a_\varepsilon := \max\{0,\ r - \varepsilon\}$, which exists by [L7]; then $0 \le a_\varepsilon$, and $a_\varepsilon < r$ because $a_\varepsilon$ is one of the two entries $0$ and $r - \varepsilon$, of which the first is $< r$ by 1.1 and the second is $< r$ because $\varepsilon > 0$. [step 1.1, step 1.4, L7, L8, choose]

2.4 The image $\iota(u)$ of the bound $u$ is an upper bound of $\iota(S)$ in $\mathbb{R}$: for $q \in S$ the inequality $q \le u$ in $\mathbb{Q}$ gives $\iota(q) \le \iota(u)$ by order preservation. [step 1.3, L3]

3.1 Density applied to $a_\varepsilon < r$ produces a rational $q_\varepsilon$ with $a_\varepsilon < \iota(q_\varepsilon) < r$; then $\iota(q_\varepsilon) > a_\varepsilon \ge 0$ forces $q_\varepsilon > 0$ by order reflection, and $0 \le \iota(q_\varepsilon) < r$ gives $\iota(q_\varepsilon^2) = \iota(q_\varepsilon)^2 < r^2 = 2 = \iota(2)$ by [L2], hence $q_\varepsilon^2 < 2$ in $\mathbb{Q}$; so $q_\varepsilon \in S$ and $r - \varepsilon \le a_\varepsilon < \iota(q_\varepsilon)$. [step 2.3, step 1.1, L4, L2, L3]

4.1 The set $\iota(S)$ is nonempty and bounded above in $\mathbb{R}$ by $r$, and for every $\varepsilon > 0$ its element $\iota(q_\varepsilon)$ satisfies $r - \varepsilon < \iota(q_\varepsilon)$; the epsilon characterisation therefore gives $\sup \iota(S) = r = \sqrt{2}$. [step 1.2, step 2.1, step 3.1, L6]

5.1 Since $r$ is the least upper bound of $\iota(S)$ and $\iota(u)$ is an upper bound of it, we get $r \le \iota(u)$; and $r \ne \iota(u)$ by 2.2, so $r < \iota(u)$. [step 4.1, step 2.4, step 2.2, L8]

6.1 Density applied to $r < \iota(u)$ produces a rational $v$ with $r < \iota(v) < \iota(u)$; every $q \in S$ satisfies $\iota(q) \le r < \iota(v)$, so $q < v$ by order reflection and $v$ is an upper bound of $S$ in $\mathbb{Q}$; and $v < u$, again by order reflection. Hence $u$ is not $\le$ every upper bound of $S$ in $\mathbb{Q}$, so $u$ is not a supremum of $S$ in $\mathbb{Q}$. [step 5.1, step 2.1, L4, L3, L8]

7.1 The upper bound $u$ was an arbitrary one, so no upper bound of $S$ in $\mathbb{Q}$ is least: $S$ has a supremum in $\mathbb{R}$, equal to $\sqrt{2}$, and has no supremum in $\mathbb{Q}$ even though it is nonempty and bounded above there, for instance by $2$. [step 6.1, step 4.1, step 1.5, L8] ∎

## Remarks

- The set $S$ is bounded above in $\mathbb{Q}$, by $2$, as step 1.5 checks. Both hypotheses of the least-upper-bound property are therefore satisfied *inside* $\mathbb{Q}$, and the conclusion still fails. The property is a genuine assumption about the field, not a consequence of the order axioms alone.
- The proof of leastness uses density twice, once to find an element of $S$ close below $\sqrt{2}$ and once to squeeze a rational between $\sqrt{2}$ and a putative rational least upper bound. Both uses go through [[lem-of-q-dense]], which is itself a consequence of the Archimedean property ([[thm-of-archimedean]]).
- The same argument runs with $2$ replaced by any positive rational $c$ that is not the square of a rational, once its two numerical steps are readjusted: step 1.2 must exhibit a positive rational whose square lies below $c$, and step 1.5 a positive rational whose square lies above it, neither of which is the constant $1$ or $2$ in general. Everything after those two steps is unchanged, so the failure is pervasive rather than a curiosity attached to $\sqrt{2}$.
