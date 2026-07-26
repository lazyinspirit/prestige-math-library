---
id: fs-closed-bounded-compact-without-completeness
kind: false-statement
title: "FALSE: in every ordered field a closed bounded set is compact, so Heine-Borel needs no completeness"
status: published
origin: session
deps: [thm-heine-borel-characterisation-r, def-open-cover-r, def-open-and-closed-in-r, def-neighbourhood-r, def-bounded-set, def-rationals, thm-rat-ordered-field, thm-rat-field, fs-sqrt2-rational, def-ordered-field, def-abs-value, lem-of-abs-value, lem-of-square-monotone, lem-of-add-order, lem-of-sign-rules, cor-of-one-positive, lem-of-inverse-positive]
justified_by: []
forward_refs: [cex-closed-bounded-in-q-not-compact]
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
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
    - title: "Rational number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Rational_number"
    - title: "Square root of 2 (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Square_root_of_2"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Example 2.21(g) and Thm 2.41)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

**False claim:** in every ordered field $F$ ([[def-ordered-field]]), a subset of
$F$ that is closed in $F$ and bounded is compact in $F$; consequently the
completeness hypothesis in [[thm-heine-borel-characterisation-r]] is
unnecessary.

**How the claim must be read.** It speaks of an arbitrary ordered field, so the
whole vocabulary has to be available there, and it is: for $x \in F$ and
$\varepsilon \in F$ with $\varepsilon > 0$ put
$N^{F}_\varepsilon(x) := \{\, y \in F : |y - x| < \varepsilon \,\}$, using the
absolute value of [[def-abs-value]], which is defined in every ordered field;
call $U \subseteq F$ **open in $F$** when every $x \in U$ admits
$\varepsilon > 0$ in $F$ with $N^{F}_\varepsilon(x) \subseteq U$, call
$C \subseteq F$ **closed in $F$** when $F \setminus C$ is open in $F$, call
$S \subseteq F$ **bounded** when some $\ell, u \in F$ satisfy $\ell \le s \le u$
for all $s \in S$, and call $S$ **compact in $F$** when every family of sets open
in $F$ whose union contains $S$ has a finite subfamily whose union already
contains $S$. These are the definitions of [[def-neighbourhood-r]],
[[def-open-and-closed-in-r]], [[def-bounded-set]] and [[def-open-cover-r]]
transposed word for word from $\mathbb{R}$ to $F$; with $F = \mathbb{R}$ they are
literally those definitions.

The refutation takes $F = \mathbb{Q}$ ([[def-rationals]],
[[thm-rat-ordered-field]]) and the set of nonnegative rationals whose square is
below $2$.

## Facts & Assumptions

**Given:** The ordered field $\mathbb{Q}$ and the set $S := \{\, q \in \mathbb{Q} : q \ge 0 \text{ and } q^2 < 2 \,\}$, together with the notions "open in $\mathbb{Q}$", "closed in $\mathbb{Q}$", "bounded" and "compact in $\mathbb{Q}$" as set out in the Statement. Here $2 := 1 + 1$ and $4 := 2 \cdot 2$ in $\mathbb{Q}$.

[A1] The false claim: in every ordered field, a closed bounded subset is compact.

[L1] $\mathbb{Q}$ is a field and the relation of its order makes it a totally ordered field: the order is total and transitive, adding a constant preserves it, and a product of positives is positive ([[thm-rat-ordered-field]], [[thm-rat-field]], [[def-rationals]], [[def-ordered-field]]).

[L2] Absolute value in an ordered field: $|z| \ge 0$; $|z| = z$ for $z \ge 0$ and $|z| = -z$ for $z < 0$; and for $c > 0$ one has $|z| < c$ exactly when $-c < z < c$ ([[def-abs-value]], [[lem-of-abs-value]]).

[L3] No rational number squares to $2$ ([[fs-sqrt2-rational]]).

[L4] In an ordered field, squaring is strictly monotone on the nonnegatives: $0 \le a < b$ implies $a^2 < b^2$, and $0 \le a \le b$ implies $a^2 \le b^2$ ([[lem-of-square-monotone]]).

[L5] Ordered-field arithmetic: $0 < 1$, hence $0 < 2 < 4$ and $2 \ne 0$; a positive element has a positive inverse; adding a constant and multiplying by a positive preserve an inequality ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[lem-of-inverse-positive]], [[def-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Refutation

**Proof technique:** direct.

1.1 $S$ is nonempty and bounded: $1 \in S$ because $1 \ge 0$ and $1^2 = 1 < 2$ by [L5]; and every $q \in S$ satisfies $0 \le q < 2$, since $q \ge 2 \ge 0$ would give $q^2 \ge 2^2 = 4 > 2$ by [L4] and [L5], contradicting $q^2 < 2$. [L1, L4, L5]

1.2 $S$ has no greatest element: let $q \in S$ and put $h := \min\{\, 1,\ (2 - q^2)(2q+2)^{-1} \,\}$, a definition by cases on the total order of $\mathbb{Q}$; here $2q + 2 > 0$ because $q \ge 0$, and $2 - q^2 > 0$, so both entries are positive and $h > 0$ with $h \le 1$. Put $r := q + h$, so $r > q \ge 0$. Then $h^2 \le h$ because $0 < h \le 1$, and $h(2q+1) \le (2-q^2)(2q+1)(2q+2)^{-1} < 2 - q^2$ because $(2q+1)(2q+2)^{-1} < 1$ and $2 - q^2 > 0$; hence $r^2 = q^2 + 2qh + h^2 \le q^2 + h(2q+1) < q^2 + (2 - q^2) = 2$, so $r \in S$ and $q < r$. [L1, L4, L5]

1.3 $S$ is closed in $\mathbb{Q}$: let $q \in \mathbb{Q} \setminus S$, so $q < 0$, or $q \ge 0$ and $q^2 \ge 2$, in which case $q^2 \ne 2$ by [L3] gives $q^2 > 2$. If $q < 0$, put $\varepsilon := -q > 0$; every $y$ with $|y - q| < \varepsilon$ satisfies $y < q + \varepsilon = 0$ by [L2], hence $y \notin S$. If $q \ge 0$ and $q^2 > 2$, then $q \ne 0$ since $0^2 = 0 < 2$, so $q > 0$; put $\varepsilon := \min\{\, q,\ (q^2 - 2)(2q)^{-1} \,\} > 0$, again a definition by cases. Every $y$ with $|y - q| < \varepsilon$ satisfies $y > q - \varepsilon \ge 0$, so $y^2 > (q - \varepsilon)^2$ by [L4], and $(q-\varepsilon)^2 = q^2 - 2q\varepsilon + \varepsilon^2 \ge q^2 - 2q\varepsilon \ge q^2 - (q^2 - 2) = 2$, whence $y^2 > 2$ and $y \notin S$. In both cases a neighbourhood of $q$ misses $S$, so $\mathbb{Q} \setminus S$ is open in $\mathbb{Q}$. [L1, L2, L3, L4, L5]

1.4 For $r \in S$ put $B_r := \{\, y \in \mathbb{Q} : y < r \,\}$; each $B_r$ is open in $\mathbb{Q}$, since $y \in B_r$ and $\varepsilon := r - y > 0$ give, for every $z$ with $|z - y| < \varepsilon$, the inequality $z < y + \varepsilon = r$ by [L2]. [given, L1, L2]

2.1 The family $\mathcal{U} := \{\, B_r : r \in S \,\}$ is a cover of $S$ by sets open in $\mathbb{Q}$: given $q \in S$, step 1.2 supplies $r \in S$ with $q < r$, so $q \in B_r$. [step 1.2, step 1.4, L1]

2.2 $\mathcal{U}$ has no finite subfamily covering $S$: the empty subfamily fails because $S \ne \varnothing$ by step 1.1; and a nonempty finite subfamily is $\{B_{r_0}, \dots, B_{r_p}\}$ with every $r_i \in S$, so an induction on $p$ using the totality of the order of $\mathbb{Q}$ produces $R := \max\{r_0, \dots, r_p\}$, one of the $r_i$ and hence a member of $S$; for each $i$ one has $r_i \le R$, so $R < r_i$ fails and $R \notin B_{r_i}$. Thus the element $R$ of $S$ lies in no member of the subfamily. [step 1.1, step 1.4, L1]

3.1 The set $S$ is bounded by step 1.1 and closed in $\mathbb{Q}$ by step 1.3, and by steps 2.1 and 2.2 it is not compact in $\mathbb{Q}$, while $\mathbb{Q}$ is an ordered field by [L1]. So the claim [A1] fails at $F = \mathbb{Q}$ and is false. [step 1.1, step 1.3, step 2.1, step 2.2, A1, L1] ∎

## Remarks

- **What the false claim gets wrong.** [[thm-heine-borel-characterisation-r]]
  has two halves of very different strengths. The half that a compact set is
  closed and bounded ([[lem-compact-implies-closed-and-bounded-r]]) uses no
  completeness at all, only the Archimedean property and the existence of maxima
  of finite sets. The converse half is
  the one that rests on completeness, through [[thm-heine-borel-r]] and the
  nested interval property, and it is exactly the half refuted above.

- **Where the missing point is.** The cover of step 2.1 creeps up on a bound that
  $\mathbb{Q}$ does not contain. In $\mathbb{R}$ that bound exists, namely
  $\sqrt 2$ ([[thm-of-square-roots]]), and it is not rational
  ([[fs-sqrt2-rational]]); the set $S$ is thus closed in $\mathbb{Q}$ precisely
  because the point that would have to be adjoined to close it is absent from
  $\mathbb{Q}$. Read inside $\mathbb{R}$, the same set of numbers is bounded and
  not closed, and it is not compact there either.

- **This is a statement about ordered fields, and it is refuted in that
  generality.** One counterexample field suffices to refute a claim about every
  ordered field, and $\mathbb{Q}$ is the smallest one available here. Nothing
  above uses any ordered-field lemma outside its stated generality: [L2], [L4]
  and [L5] are all proved for an arbitrary ordered field, and the results of this
  page that are stated for $\mathbb{R}$ only are not applied to $\mathbb{Q}$.

- **The named witness** is [[cex-closed-bounded-in-q-not-compact]]; the
  refutation is carried out here.
