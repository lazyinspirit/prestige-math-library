# Adversarial proof reading — `fs-nested-open-intervals-nonempty`

## The item under review, in full

`items/fs-nested-open-intervals-nonempty.md`

```markdown
---
id: fs-nested-open-intervals-nonempty
kind: false-statement
title: "FALSE: a nested sequence of nonempty bounded open intervals has nonempty intersection"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-nested-interval-property, def-interval, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-naturals-positive, def-sequence, def-complete-ordered-field, def-ordered-field]
justified_by: []
forward_refs: [ex-nested-intervals-single-point, cex-nested-open-intervals-empty]
aliases: []
landmark: false
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
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
---

## Statement

**False claim:** if $(J_k)_{k \in \mathbb{N}}$ is a sequence of nonempty bounded
**open** intervals of $\mathbb{R}$ ([[def-interval]]) with
$J_{k+1} \subseteq J_k$ for every $k$, then
$\bigcap_{k \in \mathbb{N}} J_k \ne \emptyset$.

The corresponding statement for **closed** bounded intervals is true and is
[[thm-nested-interval-property]]. The claim above is what one gets by replacing
"closed" with "open" there, and it fails: the intersection can be empty. So
closedness is not a convenience of the proof, it is a hypothesis without which
the conclusion is false.

The witness is $J_k = \big(0,\; 1/(k+1)\big)$, refuted below and recorded
separately as the named counterexample of the companion page. The index shift $1/(k+1)$ is
the usual one for sequences starting at $k = 0$; in the customary notation the
family is $(0, 1/n)$ for $n \ge 1$.

## Facts & Assumptions

**Given:** For $k \in \mathbb{N}$ the open interval $J_k := \{x \in \mathbb{R} : 0 < x < 1/(k+1)\}$, where $k+1$ denotes the canonical natural $(k+1)\cdot 1_{\mathbb{R}}$, which is positive and invertible; this is a sequence of subsets of $\mathbb{R}$ indexed by $\mathbb{N}$ ([[def-sequence]]).

[L1] Intervals: $(a,b) = \{x : a < x < b\}$ is an open interval, bounded, and nonempty whenever $a < b$, since then $a < (a+b)/2 < b$ ([[def-interval]]).

[L2] Canonical naturals: $n \cdot 1_{\mathbb{R}} > 0$ for $n \ge 1$, and $m \mapsto m \cdot 1_{\mathbb{R}}$ is strictly increasing ([[lem-of-naturals-positive]]).

[L3] Reciprocals: if $a > 0$ then $1/a > 0$, and $0 < a < b$ gives $0 < 1/b < 1/a$ ([[lem-of-inverse-positive]]).

[L4] Reciprocal Archimedean property: for every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

[L5] Trichotomy, so $x < y$ and $y < x$ cannot both hold ([[def-complete-ordered-field]], [[def-ordered-field]]).

[L6] The refuted claim: a nested sequence of nonempty bounded open intervals has nonempty intersection.

## Refutation

**Proof technique:** direct.

1.1 Each $J_k$ is an open interval and is bounded, with $0$ a lower bound and $1/(k+1)$ an upper bound. [given, L1]

1.2 Each $J_k$ is nonempty: $k + 1 \ge 1$ gives $1/(k+1) > 0$, so the endpoints satisfy $0 < 1/(k+1)$ and [L1] applies. [given, L1, L2, L3]

2.1 The family is nested: $k + 1 < k + 2$ gives $0 < 1/(k+2) < 1/(k+1)$, so $0 < x < 1/(k+2)$ implies $0 < x < 1/(k+1)$, that is $J_{k+1} \subseteq J_k$. [step 1.2, L2, L3]

2.2 So $(J_k)$ is a sequence of nonempty bounded open intervals, nested, and is therefore an instance of the claim, which asserts that its intersection is nonempty. [step 1.1, step 1.2, L6]

3.1 Suppose $x \in \bigcap_{k} J_k$. Then $x > 0$, and $x < 1/(k+1)$ for every $k \in \mathbb{N}$. [step 2.2, given]

4.1 Since $x > 0$, [L4] supplies a natural $n \ge 1$ with $1/n < x$; writing $n = k+1$ with $k \in \mathbb{N}$, which is possible because $n \ge 1$, step 3.1 gives $x < 1/n$ as well. [step 3.1, L4, choose]

5.1 That is $x < 1/n$ and $1/n < x$, which trichotomy forbids. So no such $x$ exists and $\bigcap_k J_k = \emptyset$. [step 4.1, L5]

6.1 The sequence $(J_k)$ therefore consists of nonempty bounded open intervals, is nested, and has empty intersection: the claim is false. [step 2.2, step 5.1, L6] ∎

## Remarks

- **Which hypothesis of [[thm-nested-interval-property]] is being violated.**
  Only closedness. The intervals here are nonempty and bounded, and the family is
  nested, so the true theorem does not apply, and the refutation shows that no
  weakening of it to open intervals is available.

- **What goes wrong in the proof of the true theorem.** With $J_k = (a_k, b_k)$
  the endpoint sequences still converge, to $a = \sup a_k$ and $b = \inf b_k$,
  and the intersection is still an interval with those endpoints; but for open
  intervals it is $[a, b]$ intersected with the open conditions, and here
  $a = 0 = b$ while $0 \notin J_k$ for any $k$. The candidate point exists as a
  real number and simply fails to lie in the sets. Closedness is exactly the
  hypothesis that puts the endpoint into each interval.

- **The Archimedean property is what makes the intersection empty.** In a
  non-Archimedean ordered field the same family has a nonempty intersection,
  since a positive infinitesimal lies below every $1/n$. So the counterexample is
  a statement about $\mathbb{R}$, and it is [[cor-archimedean-reciprocal]] that
  supplies it.

- **A closely related true statement.** The intersection of the *closures*
  $[0, 1/(k+1)]$ is $\{0\}$ ([[ex-nested-intervals-single-point]]), which is the
  same computation with the endpoint included, and it is exactly what the true
  theorem predicts once the lengths are seen to tend to $0$.

- The witness is recorded as the named counterexample
  [[cex-nested-open-intervals-empty]].
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

### `thm-nested-interval-property` — theorem — A nested sequence of nonempty closed bounded intervals has nonempty intersection, and the intersection is a single point exactly when the lengths tend to $0$

(statement provenance: ai-altered)

### Statement

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

### `cor-archimedean-reciprocal` — corollary — For every $\\varepsilon > 0$ in a complete ordered field there is a natural $n \\ge 1$ with $1/n < \\varepsilon$

(statement provenance: ai-altered)

### Statement

Let $F$ be a complete ordered field ([[def-complete-ordered-field]]) and let
$\varepsilon \in F$ with $\varepsilon > 0$. Then there is a natural number
$n \ge 1$ such that

$$\frac{1}{n \cdot 1_F} < \varepsilon ,$$

where $n \cdot 1_F$ is the canonical natural of $F$ ([[thm-of-archimedean]]) and
$1/(n \cdot 1_F)$ is its multiplicative inverse ([[def-field]]). As is standard
we abbreviate $n \cdot 1_F$ to $n$ and write the conclusion $1/n < \varepsilon$.

This is the **reciprocal form** of the Archimedean property.
[[thm-of-archimedean]] on its own delivers only the assertion that the canonical
naturals are cofinal, $x < n \cdot 1_F$; the form actually used in analysis, that
the reciprocals of the naturals get below every positive bound, is the statement
above, and it is recorded separately so that no proof has to reconstruct the
inversion step in passing.

### `thm-of-archimedean` — theorem — Every complete ordered field is Archimedean

(statement provenance: literature-derived)

### Statement

Every complete ordered field $F$ ([[def-complete-ordered-field]]) is Archimedean:
for every $x \in F$ there is a natural number $n \ge 1$ with $x < n \cdot 1_F$,
where $n \cdot 1_F$ is the canonical natural of the ordered field $F$
([[def-ordered-field]]). Equivalently, the canonical naturals are cofinal in $F$.

### `lem-of-inverse-positive` — lemma — Inverses of positives are positive, and reciprocation reverses order

(statement provenance: ai-altered)

### Statement

Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and
let $a, b \in F$.

1. If $a > 0$ then $a^{-1} > 0$.
2. If $0 < a < b$ then $0 < b^{-1} < a^{-1}$.

### `lem-of-naturals-positive` — lemma — Canonical naturals are positive and strictly increasing

(statement provenance: ai-altered)

### Statement

Let $F$ be an ordered field, with field structure as in [[def-field]], and for
$n \ge 1$ let $n \cdot 1_F$ denote the canonical natural number
$\underbrace{1_F + \cdots + 1_F}_{n}$, defined recursively by $1 \cdot 1_F = 1_F$
and $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$. Then for every $n \ge 1$:

- $n \cdot 1_F > 0$ and $(n+1) \cdot 1_F > n \cdot 1_F$;
- the map $n \mapsto n \cdot 1_F$ is strictly increasing, hence injective, on $\{1, 2, 3, \dots\}$;
- $(m+n) \cdot 1_F = m \cdot 1_F + n \cdot 1_F$ and $(mn) \cdot 1_F = (m \cdot 1_F)(n \cdot 1_F)$ for all $m, n \ge 1$.

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

### `def-ordered-field` — definition — Ordered field

(statement provenance: ai-altered)

### Definition

An **ordered field** is a field $F$ ([[def-field]]) together with a subset
$P \subseteq F$, the set of **positive** elements (the *positive cone*),
satisfying:

- **(O1) Trichotomy.** For each $x \in F$, exactly one of the following holds:
  $x \in P$, or $x = 0$, or $-x \in P$.
- **(O2) Closure.** If $x, y \in P$ then $x + y \in P$ and $x \cdot y \in P$.

We write $x > 0$ for $x \in P$ (read "$x$ is positive"), and define the order by

$$a < b \;:\Longleftrightarrow\; b - a \in P, \qquad a \le b \;:\Longleftrightarrow\; a < b \text{ or } a = b.$$

Thus $a > b$ means $b < a$, and $a \ge b$ means $b \le a$. An element $x$ with
$-x \in P$ (equivalently $x < 0$) is called **negative**.

## What to return

Read `fs-nested-open-intervals-nonempty` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
