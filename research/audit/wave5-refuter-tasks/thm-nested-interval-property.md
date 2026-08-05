# Adversarial proof reading — `thm-nested-interval-property`

## The item under review, in full

`items/thm-nested-interval-property.md`

```markdown
---
id: thm-nested-interval-property
kind: theorem
title: "A nested sequence of nonempty closed bounded intervals has nonempty intersection, and the intersection is a single point exactly when the lengths tend to $0$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-interval, def-monotone-sequence, thm-monotone-convergence, def-complete-ordered-field, lem-sup-unique, thm-infimum-property, def-bounded-set, def-real-limit, def-sequence, thm-algebra-of-limits, lem-limit-unique, def-nat-order, thm-nat-linear-order]
justified_by: []
forward_refs: [ex-nested-intervals-single-point, cex-nested-open-intervals-empty, cex-nested-unbounded-closed-empty]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Nested intervals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nested_intervals"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Thm 2.38)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. Lebl, Basic Analysis I, §1.4"
      url: "https://www.jirka.org/ra/"
---

## Statement

For each $k \in \mathbb{N}$ let $I_k = [a_k, b_k]$ be a closed bounded interval
with $a_k \le b_k$ ([[def-interval]]), and suppose the family is **nested**:

$$I_{k+1} \subseteq I_k \qquad (k \in \mathbb{N}).$$

Write $\ell_k = b_k - a_k \ge 0$ for the length of $I_k$. Then:

1. $\displaystyle\bigcap_{k \in \mathbb{N}} I_k$ is **nonempty**. More precisely,
   with $a = \sup\{a_k : k \in \mathbb{N}\}$ and
   $b = \inf\{b_k : k \in \mathbb{N}\}$, both of which exist, one has $a \le b$
   and $$\bigcap_{k \in \mathbb{N}} I_k = [a, b].$$
2. $\displaystyle\bigcap_{k \in \mathbb{N}} I_k$ is a **single point** if and only
   if $\ell_k \to 0$ ([[def-real-limit]]).

Every hypothesis is load bearing. Dropping closedness makes the intersection
empty; dropping boundedness does the same; and dropping nonemptiness of the
individual intervals is vacuously fatal.

## Facts & Assumptions

**Given:** Closed bounded intervals $I_k = [a_k, b_k]$ with $a_k \le b_k$ for every $k \in \mathbb{N}$ and $I_{k+1} \subseteq I_k$ for every $k$; the sequences $(a_k)$ and $(b_k)$ of reals ([[def-sequence]]); their ranges $A = \{a_k : k \in \mathbb{N}\}$ and $B = \{b_k : k \in \mathbb{N}\}$, both nonempty; and $\ell_k = b_k - a_k$.

[L1] Closed bounded intervals: $[a,b] = \{x \in \mathbb{R} : a \le x \le b\}$; it is nonempty exactly when $a \le b$, it is the singleton $\{a\}$ when $a = b$, it has two distinct elements $a$ and $b$ when $a < b$, and its length is $b - a$ ([[def-interval]]).

[L2] Least-upper-bound property and uniqueness: a nonempty subset of $\mathbb{R}$ bounded above has a unique supremum; the supremum is an upper bound and is $\le$ every upper bound ([[def-complete-ordered-field]], [[lem-sup-unique]]).

[L3] Greatest-lower-bound property and uniqueness: a nonempty subset of $\mathbb{R}$ bounded below has a unique infimum; the infimum is a lower bound and is $\ge$ every lower bound ([[thm-infimum-property]], [[lem-sup-unique]]).

[L4] Monotone sequences, and the fact that consecutive comparisons suffice: $x_k \le x_{k+1}$ for all $k$ makes $(x_k)$ nondecreasing, and $x_{k+1} \le x_k$ for all $k$ makes it nonincreasing ([[def-monotone-sequence]]).

[L5] Monotone convergence: a nondecreasing sequence whose range is bounded above converges to the supremum of its range, and a nonincreasing sequence whose range is bounded below converges to the infimum ([[thm-monotone-convergence]]).

[L6] Algebra of limits: if $u_k \to u$ and $v_k \to v$ then $u_k - v_k \to u - v$ ([[thm-algebra-of-limits]]).

[L7] A sequence of reals has at most one limit ([[lem-limit-unique]]).

[L8] Bounded above and bounded below, for a subset of $\mathbb{R}$ ([[def-bounded-set]]).

[L9] The order on $\mathbb{N}$ is total and transitive, so any two indices $k, l$ admit an index $m$ with $k \le m$ and $l \le m$, namely the larger of the two ([[def-nat-order]], [[thm-nat-linear-order]]).

## Proof

**Proof technique:** direct.

1.1 Nestedness read on the endpoints: since $a_{k+1} \le b_{k+1}$, both $a_{k+1}$ and $b_{k+1}$ lie in $I_{k+1} \subseteq I_k$, so $a_k \le a_{k+1}$ and $b_{k+1} \le b_k$ for every $k$. [given, L1]

2.1 Hence $(a_k)$ is nondecreasing and $(b_k)$ is nonincreasing. [step 1.1, L4]

3.1 For all indices $k$ and $l$: choosing $m$ with $k \le m$ and $l \le m$ gives $a_k \le a_m \le b_m \le b_l$, so $a_k \le b_l$. [step 2.1, given, L9]

4.1 Every $b_l$ is therefore an upper bound of $A$ and every $a_k$ a lower bound of $B$; both sets are nonempty, so $a := \sup A$ and $b := \inf B$ exist and are unique. [step 3.1, L2, L3, L8]

5.1 $a \le b$: each $b_l$ is an upper bound of $A$, so $a \le b_l$ for every $l$ by leastness of the supremum; thus $a$ is a lower bound of $B$, and $a \le b$ by greatestness of the infimum. [step 4.1, L2, L3]

5.2 By monotone convergence, $a_k \to a$ and $b_k \to b$. [step 2.1, step 4.1, L5]

5.3 The intersection is exactly $[a,b]$: a real $x$ lies in every $I_k$ exactly when $a_k \le x \le b_k$ for every $k$, that is exactly when $x$ is an upper bound of $A$ and a lower bound of $B$, and by leastness of $a$ and greatestness of $b$ that holds exactly when $a \le x \le b$. [step 4.1, L1, L2, L3]

6.1 $\ell_k = b_k - a_k \to b - a$ by the algebra of limits. [step 5.2, L6]

6.2 Since $a \le b$, the interval $[a,b]$ is nonempty, so the intersection is nonempty; together with step 5.3 this is claim 1. [step 5.1, step 5.3, L1]

7.1 If $\ell_k \to 0$ then $b - a = 0$ by uniqueness of limits, so $a = b$ and the intersection is $[a,a] = \{a\}$, a single point. [step 5.3, step 6.1, L1, L7]

7.2 Conversely, if the intersection is a single point then $a = b$: it equals $[a,b]$ with $a \le b$, and $a < b$ would give the two distinct elements $a$ and $b$. Hence $b - a = 0$ and $\ell_k \to 0$ by step 6.1. [step 5.1, step 5.3, step 6.1, L1]

8.1 Claim 1 is step 6.2 and claim 2 is the pair of implications in steps 7.1 and 7.2, so a nested sequence of nonempty closed bounded intervals has nonempty intersection, equal to $[a,b]$, and that intersection is a single point exactly when the lengths tend to $0$. [step 6.2, step 7.1, step 7.2] ∎

## Remarks

- **No Archimedean input is needed.** The lengths are handled entirely by the
  algebra of limits and the uniqueness of limits: $\ell_k$ always converges, to
  $b - a$, and the two directions of claim 2 are then the two directions of
  "$b - a = 0$". A proof that instead argues "if $b - a > 0$ then some $\ell_k$
  is smaller" does need the Archimedean property
  ([[cor-archimedean-reciprocal]]), and it is avoidable, so it is avoided.

- **Nestedness gives more than it is usually stated to give.** The intersection
  is not merely nonempty; it is the closed interval $[a,b]$, and $a$ and $b$ are
  the limits of the endpoint sequences. The single-point case is exactly the case
  in which those two limits agree, and that is what makes the nested interval
  property usable as a *construction* of a real number, as in
  [[ex-nested-intervals-single-point]].

- **This is one of the standard equivalents of completeness.** Nested intervals
  together with the Archimedean property imply the least-upper-bound property, so
  the implication proved here is not reversible for free: it is half of an
  equivalence whose other half needs the Archimedean hypothesis separately.
  [[rem-completeness-routes]] records where this library stands on those routes.

- **The witnesses for the two deleted hypotheses** are
  [[cex-nested-open-intervals-empty]], which keeps boundedness and drops
  closedness, and [[cex-nested-unbounded-closed-empty]], which keeps closedness
  and drops boundedness. Neither is used above; each shows that the corresponding
  hypothesis cannot be removed.
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

### `def-interval` — definition — Intervals of $\\mathbb{R}$: the nine order-convex forms, nondegeneracy, and length

(statement provenance: ai-altered)

### Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]], [[def-ordered-field]]) with its order
([[def-real-order]]).

A subset $I \subseteq \mathbb{R}$ is **order-convex** when

$$x, y \in I \text{ and } x \le z \le y \;\Longrightarrow\; z \in I .$$

The **intervals** of $\mathbb{R}$ are the sets of the following nine forms, where
$a, b \in \mathbb{R}$:

| | bounded forms | | one-sided and full forms |
|---|---|---|---|
| $(a,b)$ | $\{x : a < x < b\}$ | $(a,\infty)$ | $\{x : a < x\}$ |
| $[a,b]$ | $\{x : a \le x \le b\}$ | $[a,\infty)$ | $\{x : a \le x\}$ |
| $[a,b)$ | $\{x : a \le x < b\}$ | $(-\infty,b)$ | $\{x : x < b\}$ |
| $(a,b]$ | $\{x : a < x \le b\}$ | $(-\infty,b]$ | $\{x : x \le b\}$ |
| | | $(-\infty,\infty)$ | $\mathbb{R}$ |

An interval is **open** when both of its written endpoints are excluded, that is
for the forms $(a,b)$, $(a,\infty)$, $(-\infty,b)$ and $(-\infty,\infty)$; it is
**closed** when both written endpoints are included, that is for $[a,b]$,
$[a,\infty)$, $(-\infty,b]$ and $(-\infty,\infty)$. The forms $[a,b)$ and
$(a,b]$ are **half-open**.

**The symbols $\pm\infty$ are notation and not elements of $\mathbb{R}$.** They
mark which side carries no endpoint condition at all; the five forms in the right
column are defined by the displayed conditions on $x$ alone, and no arithmetic is
ever performed with $\infty$. This is the same refusal to extend $\mathbb{R}$
silently that [[rem-sup-conventions]] records for suprema.

**Every one of the nine forms is order-convex.** Each is defined by a conjunction
of at most two conditions, each of the shape $a < x$, $a \le x$, $x < b$ or
$x \le b$, and each such condition is inherited by an intermediate point: if
$a < x$ and $x \le z$ then $a < z$, and if $z \le y$ and $y < b$ then $z < b$,
by transitivity of the order ([[def-ordered-field]]). Applying this to whichever
one or two conditions define the form in question gives $z \in I$ whenever
$x, y \in I$ and $x \le z \le y$.

**Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly
when it is of one of the four forms in the left column: for those, $a$ is a lower
bound and $b$ an upper bound. The other five forms are unbounded, on the side or
sides written with $\infty$; the verification is in the remarks below.

**Nondegeneracy.** An interval is **degenerate** when it has at most one element,
and **nondegenerate** when it has at least two. For the four bounded forms with
endpoints $a$ and $b$:

- $[a,b]$ is nonempty exactly when $a \le b$, and it is nondegenerate exactly
  when $a < b$. It is the singleton $\{a\}$ when $a = b$.
- $(a,b)$, $[a,b)$ and $(a,b]$ are nonempty exactly when $a < b$, and then each
  is nondegenerate.

The only assertion here that is not immediate from the defining conditions is
that $a < b$ makes $(a,b)$ nonempty with at least two points. It holds because
$a < (a+b)/2 < b$, which follows from $a < b$ by adding $a$, respectively $b$, to
both sides and halving ([[def-ordered-field]]); repeating the halving inside
$(a, (a+b)/2)$ produces a second point.

**Closed bounded intervals.** These are the sets $[a,b]$ with $a \le b$, which is
exactly the condition making them nonempty. They are the intervals the nested
interval property is stated for, and the phrase *closed bounded interval* always
carries the hypothesis $a \le b$ in this library.

**Length.** The **length** of a bounded interval presented by its endpoints
$a \le b$ is

$$\ell = b - a \;\ge\; 0 .$$

Length is attached to the presentation by endpoints and is not recovered from the
set: $(a,b)$, $[a,b)$ and $(a,b]$ are all empty when $a = b$, and so is
$(c,c)$ for any other $c$, while each of these presentations has length $0$, so
nothing inconsistent arises; but the endpoints are named explicitly at every
point where a length is used in this library, and never inferred from the set.
Unbounded intervals are assigned no length.

### `def-monotone-sequence` — definition — Nondecreasing, increasing, nonincreasing, decreasing, monotone, and eventually monotone sequences

(statement provenance: ai-altered)

### Definition

Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with $\mathbb{R}$ ordered
as in [[def-real-order]] and [[def-complete-ordered-field]], and with
$\mathbb{N}$ ordered as in [[def-nat-order]]. The sequence is:

- **nondecreasing** when $x_j \le x_k$ for all $j \le k$;
- **increasing** (or *strictly increasing*) when $x_j < x_k$ for all $j < k$;
- **nonincreasing** when $x_j \ge x_k$ for all $j \le k$;
- **decreasing** (or *strictly decreasing*) when $x_j > x_k$ for all $j < k$;
- **monotone** when it is nondecreasing or nonincreasing;
- **strictly monotone** when it is increasing or decreasing;
- **eventually monotone** when some tail $x^{(K)}$ ([[def-sequence]]) is
  monotone, that is when there is $K \in \mathbb{N}$ such that the restriction of
  the comparison to indices $\ge K$ is one-signed.

An increasing sequence is nondecreasing and a decreasing sequence is
nonincreasing, since $j \le k$ means $j < k$ or $j = k$ and the second case gives
equality. A sequence that is both nondecreasing and nonincreasing is constant.

**Consecutive comparisons suffice, and that is an induction.** The four
conditions above quantify over *all* pairs of indices, but what one checks in
practice, and what a recursive construction delivers, is the comparison of
consecutive terms. The two agree:

> $(x_k)$ is nondecreasing **if and only if** $x_k \le x_{\sigma(k)}$ for every
> $k \in \mathbb{N}$, and $(x_k)$ is increasing **if and only if**
> $x_k < x_{\sigma(k)}$ for every $k \in \mathbb{N}$; likewise, with the
> inequalities reversed, for nonincreasing and decreasing.

The forward implications are the instances $j = k$, $k = \sigma(k)$ of the
definitions, using $k < \sigma(k)$ ([[lem-nat-discrete]]). For the converse,
suppose $x_i \le x_{\sigma(i)}$ for every $i$ and fix $k$; we show by induction
on $k$ ([[thm-induction-principle]]) that $x_j \le x_k$ for every $j \le k$. For
$k = 0$: $j \le 0$ forces $j = 0$, and $x_0 \le x_0$. Assume the statement for
$k$ and let $j \le \sigma(k)$. If $j = \sigma(k)$ then $x_j \le x_{\sigma(k)}$ by
reflexivity. Otherwise $j < \sigma(k)$, and then $j \le k$: were $k < j$ we would
have $k < j < \sigma(k)$, which [[lem-nat-discrete]] excludes, so $j \le k$ by
totality of the order on $\mathbb{N}$ ([[thm-nat-linear-order]]). The induction
hypothesis gives $x_j \le x_k$, and $x_k \le x_{\sigma(k)}$ by assumption, so
$x_j \le x_{\sigma(k)}$ by transitivity. This completes the induction. The three
remaining equivalences are the same argument with $\le$ replaced by $<$,
$\ge$ or $>$, transitivity of the strict order being used in the same place.

**Boundedness of a monotone sequence is one-sided.** A nondecreasing sequence is
bounded below by its first term $x_0$, and a nonincreasing sequence is bounded
above by $x_0$, both immediately from the definition with $j = 0$. So for a
nondecreasing sequence the only substantive question is whether it is bounded
above, and for a nonincreasing sequence whether it is bounded below. The range of
$(x_k)$ is the set $\{x_k : k \in \mathbb{N}\}$ ([[def-sequence]]), and it is
bounded above, bounded below or bounded in the sense of [[def-bounded-set]]
exactly when the sequence is.

### `thm-monotone-convergence` — theorem — A nondecreasing sequence bounded above converges to the supremum of its range, and a nonincreasing sequence bounded below to the infimum

(statement provenance: literature-derived)

### Statement

Let $(x_k)$ be a sequence of reals ([[def-sequence]]) and let
$S = \{x_k : k \in \mathbb{N}\}$ be its range.

1. If $(x_k)$ is nondecreasing ([[def-monotone-sequence]]) and $S$ is bounded
   above ([[def-bounded-set]]), then $(x_k)$ converges ([[def-real-limit]]) and
   $$\lim_{k} x_k = \sup S .$$
2. If $(x_k)$ is nonincreasing and $S$ is bounded below, then $(x_k)$ converges
   and $$\lim_{k} x_k = \inf S .$$

Both suprema and infima exist under the stated hypotheses: $S$ is nonempty, so
the least-upper-bound property ([[def-complete-ordered-field]]) supplies the
first and [[thm-infimum-property]] the second, and each is unique
([[lem-sup-unique]]).

This is the first place in this track where the least-upper-bound property
produces a **limit**. Everything on the sequences page held in any Archimedean
ordered field; the theorem below does not, and the sequence of decimal
truncations of $\sqrt 2$ inside $\mathbb{Q}$ is the standard witness of its
failure there.

### `def-complete-ordered-field` — definition — Complete ordered field (least-upper-bound property)

(statement provenance: literature-derived)

### Definition

Let $F$ be an ordered field ([[def-ordered-field]]) and $S \subseteq F$.

- $u \in F$ is an **upper bound** of $S$ if $s \le u$ for all $s \in S$; $S$ is
  **bounded above** if it has an upper bound.
- $u \in F$ is a **least upper bound** (or **supremum**, $\sup S$) of $S$ if $u$
  is an upper bound of $S$ and $u \le u'$ for every upper bound $u'$ of $S$.

$F$ is a **complete ordered field** (equivalently, $F$ has the
**least-upper-bound property**, or is **Dedekind complete**) if every nonempty
$S \subseteq F$ that is bounded above has a least upper bound in $F$.

### `lem-sup-unique` — lemma — Suprema and infima are unique

(statement provenance: literature-derived)

### Statement

Let $S \subseteq \mathbb{R}$. If $u_1$ and $u_2$ are both least upper bounds of
$S$ ([[def-complete-ordered-field]]), then $u_1 = u_2$. If $\ell_1$ and $\ell_2$
are both greatest lower bounds of $S$ ([[def-infimum]]), then
$\ell_1 = \ell_2$.

Consequently a set has at most one supremum and at most one infimum, and the
notations $\sup S$ and $\inf S$ denote single, well-determined real numbers
whenever they exist.

### `thm-infimum-property` — theorem — Every nonempty set bounded below has an infimum

(statement provenance: literature-derived)

### Statement

Let $S \subseteq \mathbb{R}$ be nonempty and bounded below. Then $S$ has a
greatest lower bound in $\mathbb{R}$ ([[def-infimum]]), and it is given by

$$\inf S = -\sup(-S), \qquad \text{where } -S = \{-s : s \in S\}.$$

In particular the complete ordered field $\mathbb{R}$ has the
greatest-lower-bound property, which is therefore not an extra axiom: it is a
consequence of the least-upper-bound property.

### `def-bounded-set` — definition — Lower bound, bounded below, bounded set

(statement provenance: literature-derived)

### Definition

Throughout, $\mathbb{R}$ denotes the complete ordered field
([[def-complete-ordered-field]]) and $S \subseteq \mathbb{R}$ is a subset of it.

The notions **upper bound** and **bounded above** are already fixed by
[[def-complete-ordered-field]] and are only recalled here, never redefined:
$u \in \mathbb{R}$ is an *upper bound* of $S$ if $s \le u$ for all $s \in S$, and
$S$ is *bounded above* if it has at least one upper bound. The dual notions are:

- $\ell \in \mathbb{R}$ is a **lower bound** of $S$ if $\ell \le s$ for all $s \in S$.
- $S$ is **bounded below** if it has at least one lower bound.
- $S$ is **bounded** if it is both bounded above and bounded below, that is, if
  there are $\ell, u \in \mathbb{R}$ with $\ell \le s \le u$ for every $s \in S$.

### `def-real-limit` — definition — Limits and Cauchy sequences of reals

(statement provenance: ai-altered)

### Definition

A sequence $(x_k)$ of reals **converges** to $x \in \mathbb{R}$ when for
every rational $\varepsilon > 0$ there is $K$ with
$|x_k - x| < \hat\varepsilon$ for all $k \ge K$. It is **Cauchy** when for
every rational $\varepsilon > 0$ there is $K$ with
$|x_k - x_l| < \hat\varepsilon$ for all $k, l \ge K$.

### `def-sequence` — definition — Sequences of reals: bounded, eventually, frequently, tails, subsequences

(statement provenance: ai-altered)

### Definition

Throughout, $\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]],
[[def-real-numbers]]) with its order and absolute value ([[def-real-order]]), and
$\mathbb{N}$ is the set of natural numbers with its order ([[def-natural-numbers]],
[[def-nat-order]]).

A **sequence of reals** is a function $x : \mathbb{N} \to \mathbb{R}$. We write
$x_k$ for the value $x(k)$, call it the **$k$-th term**, and write $(x_k)$, or
$(x_k)_{k \in \mathbb{N}}$, for the function itself. The **range** of $(x_k)$ is
the subset $\{\, x_k : k \in \mathbb{N} \,\} \subseteq \mathbb{R}$.

Let $(x_k)$ be a sequence of reals and let $P$ be a property of indices.

- $(x_k)$ is **bounded** if there is $M \in \mathbb{R}$ with $|x_k| \le M$ for
  every $k \in \mathbb{N}$; it is **unbounded** otherwise.
- $P$ holds **eventually** if there is $K \in \mathbb{N}$ such that $P(k)$ holds
  for every $k \ge K$.
- $P$ holds **frequently** if for every $K \in \mathbb{N}$ there is some
  $k \ge K$ for which $P(k)$ holds.
- For $K \in \mathbb{N}$, the **$K$-th tail** of $(x_k)$ is the sequence
  $x^{(K)}$ defined by $x^{(K)}_j := x_{j + K}$ for $j \in \mathbb{N}$; it is
  again a sequence of reals.
- A function $n : \mathbb{N} \to \mathbb{N}$ is **strictly increasing** if
  $n_j < n_k$ whenever $j < k$. For such an $n$, the **subsequence** of $(x_k)$
  along $n$ is the composite $x \circ n$, written $(x_{n_k})_{k \in \mathbb{N}}$;
  it is again a sequence of reals.

**Convergence and Cauchyness are not defined here.** They are already fixed, for
sequences of reals, by the published [[def-real-limit]]: $(x_k)$ *converges* to
$x \in \mathbb{R}$ when for every rational $\varepsilon > 0$ there is
$K \in \mathbb{N}$ with $|x_k - x| < \varepsilon$ for all $k \ge K$, and $(x_k)$
is *Cauchy* when for every rational $\varepsilon > 0$ there is $K \in \mathbb{N}$
with $|x_k - x_l| < \varepsilon$ for all $k, l \ge K$. This page builds the
toolkit for those two notions and does not restate them. A sequence
**converges** if it converges to some real, and **diverges** if it does not.

### `thm-algebra-of-limits` — theorem — Algebra of limits: sums, scalar multiples, products and quotients

(statement provenance: ai-altered)

### Statement

Let $(x_k)$ and $(y_k)$ be sequences of reals ([[def-sequence]]) converging to
$x$ and $y$ respectively ([[def-real-limit]]), and let $c \in \mathbb{R}$. Then

$$x_k + y_k \to x + y, \qquad c\,x_k \to c\,x, \qquad x_k - y_k \to x - y, \qquad x_k y_k \to x y,$$

and if in addition $y \ne 0$ and $y_k \ne 0$ for every $k \in \mathbb{N}$, then

$$\frac{1}{y_k} \to \frac{1}{y} \qquad \text{and} \qquad \frac{x_k}{y_k} \to \frac{x}{y}.$$

The quotient case rests on an eventual lower bound for $|y_k|$, proved below
rather than assumed: $|y_k| > |y|/2$ for all sufficiently large $k$.

### `lem-limit-unique` — lemma — A sequence has at most one limit

(statement provenance: literature-derived)

### Statement

Let $(x_k)$ be a sequence of reals ([[def-sequence]]) and let $x, y \in
\mathbb{R}$. If $(x_k)$ converges to $x$ and $(x_k)$ converges to $y$
([[def-real-limit]]), then $x = y$. A sequence therefore has at most one limit,
and when a limit exists it may be denoted $\lim_{k} x_k$.

### `def-nat-order` — definition — Order on the natural numbers

(statement provenance: literature-derived)

### Definition

For $m, n \in \mathbb{N}$, define the **order** by

$$m \le n \iff \exists k \in \mathbb{N}\ (m + k = n),$$

and the **strict order** by $m < n \iff (m \le n \text{ and } m \neq n)$, using
addition ([[def-nat-addition]]).

### `thm-nat-linear-order` — theorem — $\\le$ is a linear order on $\\mathbb{N}$

(statement provenance: ai-altered)

### Statement

The relation $\le$ on $\mathbb{N}$, where $m \le n \iff \exists k\ (m + k = n)$ ([[def-nat-order]]), is a linear (total) order: reflexive, antisymmetric, transitive, and total.

## What to return

Read `thm-nested-interval-property` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
