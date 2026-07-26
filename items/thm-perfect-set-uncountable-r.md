---
id: thm-perfect-set-uncountable-r
kind: theorem
title: "Every nonempty perfect subset of $\\mathbb{R}$ is uncountable"
status: published
origin: session
deps: [def-perfect-set-r, thm-nested-interval-property, def-countable, lem-countable-iff-surjection-from-n, thm-recursion, def-interval, def-neighbourhood-r, thm-closure-characterisations-r, def-open-and-closed-in-r, def-limit-point-r, lem-rat-embeds-dense, thm-rationals-countable, thm-well-ordering-principle, cor-archimedean-reciprocal, thm-of-archimedean, def-injection-surjection-bijection, def-equinumerous, def-real-limit, def-sequence, lem-of-naturals-positive, lem-of-inverse-positive, lem-of-abs-value, lem-finite-set-has-max, def-max-min, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
forward_refs: [ex-closed-interval-is-perfect, cex-closed-set-with-an-isolated-point-is-not-perfect, ex-reciprocals-with-zero-are-compact]
aliases: []
landmark: true
short: "nonempty perfect $\\Rightarrow$ uncountable"
proof_strategy: contradiction
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
    - title: "Perfect set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Perfect_set"
    - title: "Cantor-Bendixson theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor%E2%80%93Bendixson_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Thm 2.43)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Nested intervals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nested_intervals"
pipeline_run: null
---

## Statement

Let $P \subseteq \mathbb{R}$ be nonempty and perfect ([[def-perfect-set-r]]).
Then $P$ is uncountable ([[def-countable]]).

**The selection is canonical, because this library has no dependent choice.**
The textbook proof shrinks a neighbourhood at every stage by *choosing* a point
of $P$ and then a radius, a choice made infinitely often and each time depending
on the previous one: that is the axiom of dependent choice, and no item of this
library states it; only the axiom of countable choice is available, and it does not
licence a recursive selection. The construction below therefore fixes an
enumeration $e$ of the rationals once ([[thm-rationals-countable]],
[[lem-rat-embeds-dense]]) and, at every stage, takes the interval with
**least-indexed rational endpoints** meeting the requirements. The requirements
are met by some rational-endpoint interval, which is what step 2.1 proves, and
the least such index is determined by [[thm-well-ordering-principle]], so the
whole recursion is a single application of [[thm-recursion]] to a total map and
no choice principle is used anywhere.

## Facts & Assumptions

**Given:** A nonempty perfect set $P \subseteq \mathbb{R}$. Write $\mathbb{Q}_{\mathbb{R}}$ for the image of $\mathbb{Q}$ in $\mathbb{R}$ under $q \mapsto \hat q$. A pair $(p,q) \in \mathbb{Q}_{\mathbb{R}} \times \mathbb{Q}_{\mathbb{R}}$ is called **good** when $p < q$ and $(p,q) \cap P \ne \varnothing$, and $G$ denotes the set of good pairs.

[L1] $P$ is perfect: $P$ is closed and every $x \in P$ is a limit point of $P$, so every punctured neighbourhood of $x$ meets $P$ ([[def-perfect-set-r]], [[def-limit-point-r]]).

[L2] $\overline{A}$ is the set of points every neighbourhood of which meets $A$, and $A$ is closed exactly when $A = \overline{A}$ ([[thm-closure-characterisations-r]], [[def-open-and-closed-in-r]]).

[L3] $N_\varepsilon(x) = (x - \varepsilon, x + \varepsilon)$; $x \in N_\varepsilon(x)$; $N^{*}_\varepsilon(x) = N_\varepsilon(x) \setminus \{x\}$; and $y \in N_\varepsilon(x)$ with $0 < \delta \le \varepsilon - |y - x|$ gives $N_\delta(y) \subseteq N_\varepsilon(x)$ ([[def-neighbourhood-r]]).

[L4] Intervals: $(p,q)$ is an open set and $[p,q]$ is a closed bounded interval, nonempty when $p \le q$ ([[def-interval]], [[def-open-and-closed-in-r]]).

[L5] A nonempty at most countable set admits a surjection from $\mathbb{N}$; uncountable means not at most countable ([[lem-countable-iff-surjection-from-n]], [[def-countable]]).

[L6] $\mathbb{Q} \approx \mathbb{N}$ ([[thm-rationals-countable]]); $q \mapsto \hat q$ is injective with image $\mathbb{Q}_{\mathbb{R}}$ and strictly between any two reals lies an element of $\mathbb{Q}_{\mathbb{R}}$ ([[lem-rat-embeds-dense]]); a composition of bijections is a bijection ([[def-injection-surjection-bijection]], [[def-equinumerous]]).

[L7] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L8] Recursion: for a set $Y$, an element $y_0 \in Y$ and a function $T : Y \to Y$ there is $h : \mathbb{N} \to Y$ with $h(0) = y_0$ and $h(\sigma(k)) = T(h(k))$ ([[thm-recursion]]).

[L9] Nested interval property: for nonempty closed bounded intervals $I_k = [a_k,b_k]$ with $I_{k+1} \subseteq I_k$, the intersection is nonempty, and it is a single point exactly when the lengths $b_k - a_k$ tend to $0$ ([[thm-nested-interval-property]]).

[L10] Reciprocal Archimedean property: for every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]); canonical naturals are positive and increasing, and reciprocation of positives reverses the order ([[lem-of-naturals-positive]], [[lem-of-inverse-positive]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

[L11] Every nonempty finite set of reals has a minimum, which is one of its members ([[lem-finite-set-has-max]], [[def-max-min]]); $0 < 1$, so $2 := 1+1 > 0$ and $0 < d \cdot 2^{-1} < d$ for $d > 0$; adding a constant and multiplying by a positive preserve inequalities ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

[L12] Convergence of a sequence of reals to $0$ is tested against rational $\varepsilon > 0$ ([[def-real-limit]], [[def-sequence]]).

[L13] Absolute value: $|z| \ge 0$, and $|y - x| \le b - a$ whenever $x, y \in [a,b]$ ([[lem-of-abs-value]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that the nonempty perfect set $P$ is at most countable; by [L5] fix a surjection $f : \mathbb{N} \to P$. [assume-contra, L5, choose]

1.2 By [L6] fix a bijection $\beta : \mathbb{N} \to \mathbb{Q}$ and put $e := \iota \circ \beta$ with $\iota(q) = \hat q$, a bijection from $\mathbb{N}$ onto $\mathbb{Q}_{\mathbb{R}}$. [L6, choose]

1.3 Recall the terminology of the Given: a pair $(p,q)$ of elements of $\mathbb{Q}_{\mathbb{R}}$ is good when $p < q$ and $(p,q) \cap P \ne \varnothing$, and $G$ is the set of good pairs. [given, construct]

2.1 **Refinement claim.** For every good $(p,q)$, every $x \in \mathbb{R}$ and every real $\eta > 0$ there is a good $(p',q')$ with $[p',q'] \subseteq (p,q)$, $x \notin [p',q']$ and $q' - p' < \eta$. To see it, fix $y \in (p,q) \cap P$ and, $(p,q)$ being open, a real $\varepsilon > 0$ with $N_\varepsilon(y) \subseteq (p,q)$; since $y \in P$ is not isolated, [L1] gives $z \in N^{*}_\varepsilon(y) \cap P$, so $z \in P \cap (p,q)$ and $z \ne y$. At least one of $y, z$ differs from $x$; let $w$ be $y$ if $y \ne x$ and $z$ otherwise, so $w \in P \cap N_\varepsilon(y)$ and $w \ne x$. Put $\delta := \min\{\, \varepsilon - |w - y|,\ |w - x|,\ \eta \cdot 2^{-1} \,\}$, a positive real by [L11] since each entry is positive, and use [L6] to fix $p', q' \in \mathbb{Q}_{\mathbb{R}}$ with $w - \delta < p' < w < q' < w + \delta$. Then $[p',q'] \subseteq N_\delta(w) \subseteq N_\varepsilon(y) \subseteq (p,q)$ by [L3], the pair $(p',q')$ is good because $w \in (p',q') \cap P$, the point $x$ lies outside $N_\delta(w)$ because $|x - w| \ge \delta$, and $q' - p' < 2\delta \le \eta$. [step 1.3, L1, L3, L4, L6, L11, choose]

3.1 **Successor rule.** For $(k,(p,q)) \in \mathbb{N} \times G$ let $m$ be the least natural for which some natural $n$ makes $(e(m),e(n))$ good with $[e(m),e(n)] \subseteq (p,q)$, $f(k) \notin [e(m),e(n)]$ and $e(n) - e(m) < 1/(k+1)$, and let $n$ be the least natural with those properties for that $m$; put $T(k,(p,q)) := (\sigma(k), (e(m),e(n)))$. The set of eligible $m$ is nonempty by step 2.1 applied with $x = f(k)$ and $\eta = 1/(k+1) > 0$, since $e$ is onto $\mathbb{Q}_{\mathbb{R}}$, so both minima exist by [L7] and $T : \mathbb{N} \times G \to \mathbb{N} \times G$ is a total function defined without any selection. [step 2.1, L6, L7, L10, construct]

4.1 **The recursion.** $P$ is nonempty, so fix $y_0 \in P$ and, by [L6], elements $p_0 < y_0 < q_0$ of $\mathbb{Q}_{\mathbb{R}}$; then $(p_0,q_0)$ is good. Apply [L8] with $Y = \mathbb{N} \times G$, seed $(0,(p_0,q_0))$ and map $T$ to get $h : \mathbb{N} \to \mathbb{N} \times G$ with $h(0) = (0,(p_0,q_0))$ and $h(\sigma(k)) = T(h(k))$; an induction on $k$ shows the first coordinate of $h(k)$ is $k$, so write $h(k) = (k,(p_k,q_k))$ with every $(p_k,q_k)$ good. [step 1.3, step 3.1, L6, L8, construct]

5.1 Writing $I_k := [p_k,q_k]$ and $\ell_k := q_k - p_k > 0$, the rule of step 3.1 gives, for every $k \in \mathbb{N}$: $I_{k+1} \subseteq (p_k,q_k) \subseteq I_k$, so the intervals are nested and nonempty; $f(k) \notin I_{k+1}$; $\ell_{k+1} < 1/(k+1)$; and $I_k \cap P \ne \varnothing$, because $(p_k,q_k) \cap P \ne \varnothing$. [step 3.1, step 4.1, L4]

6.1 For every real $\varepsilon > 0$ there is $k \ge 1$ with $\ell_k < \varepsilon$, and moreover $\ell_k \to 0$: by step 5.1 one has $\ell_j < 1/j$ for every $j \ge 1$, since $\ell_j = \ell_{(j-1)+1} < 1/((j-1)+1) = 1/j$; given $\varepsilon > 0$, [L10] supplies a natural $n \ge 1$ with $1/n < \varepsilon$, and then every $k \ge n$ satisfies $k \ge 1$ and $|\ell_k - 0| = \ell_k < 1/k \le 1/n < \varepsilon$ by [L10] and [L13], which is both assertions, the second by [L12] since a rational $\varepsilon > 0$ is in particular a real one. [step 5.1, L10, L12, L13]

7.1 By [L9] the nested family $(I_k)$ of nonempty closed bounded intervals has an intersection that is a single point, since its lengths tend to $0$ by step 6.1; write $\{x\}$ for it, so $x \in I_k$ for every $k$. [step 5.1, step 6.1, L9]

8.1 $x \in P$: let $\varepsilon > 0$ be real and use step 6.1 to fix $k \ge 1$ with $\ell_k < \varepsilon$; by step 5.1 there is $y \in I_k \cap P$, and $x \in I_k$ by step 7.1, so $|y - x| \le \ell_k < \varepsilon$ by [L13] and $y \in N_\varepsilon(x) \cap P$. Every neighbourhood of $x$ therefore meets $P$, so $x \in \overline{P} = P$ by [L1] and [L2]. [step 5.1, step 6.1, step 7.1, L1, L2, L3, L13]

9.1 For every $k \in \mathbb{N}$ one has $x \in I_{k+1}$ by step 7.1 while $f(k) \notin I_{k+1}$ by step 5.1, so $x \ne f(k)$; thus the element $x$ of $P$ found in step 8.1 is not a value of $f$, contradicting the surjectivity of the $f$ fixed in step 1.1. The assumption is therefore untenable: a nonempty perfect subset of $\mathbb{R}$ is not at most countable, that is, it is uncountable. [step 1.1, step 5.1, step 7.1, step 8.1, L5, discharge-contradiction] ∎

## Remarks

- **Which hypothesis does what.** Closedness of $P$ is used exactly once, at the
  step that puts the limit point $x$ back into $P$; without it the construction
  still produces a point, but that point may lie outside $P$ and the
  contradiction evaporates. Having no isolated points is used exactly once, in
  the refinement claim, to produce a second point of $P$ inside a neighbourhood,
  which is what allows the excluded point $f(k)$ to be dodged. Nonemptiness is
  used to seed the recursion, and it cannot be dropped: $\varnothing$ is perfect
  and countable ([[def-perfect-set-r]]).

- **Why rational endpoints.** They are what make the construction canonical.
  The requirement "some good rational-endpoint interval inside $(p,q)$ misses
  $f(k)$ and is short" is a property of a pair of natural numbers, so it can be
  minimised by [[thm-well-ordering-principle]]; the same requirement stated for
  arbitrary real endpoints comes with no canonical least witness, and picking one
  would be a choice made afresh at every stage. This is the same device that
  keeps
  [[lem-subset-of-countable]] and [[lem-countable-iff-surjection-from-n]] choice
  free, transplanted from subsets of $\mathbb{N}$ to intervals.

- **The shrinking condition is $\ell_{k+1} < 1/(k+1)$ and not $1/k$.** Sequences
  and recursions here are indexed from $0$ ([[def-sequence]]), so the bound
  available at stage $k$ has to be positive at $k = 0$; $1/k$ is undefined
  there. The consequence, $\ell_j < 1/j$ for $j \ge 1$, is what step 6.1 uses,
  and it says nothing about $\ell_0$, which is not needed.

- **The result is sharp in both directions.** A nondegenerate closed interval is
  perfect and uncountable ([[ex-closed-interval-is-perfect]]), and deleting the
  no-isolated-points clause loses the conclusion: a closed set with an isolated
  point need not be perfect
  ([[cex-closed-set-with-an-isolated-point-is-not-perfect]]) and may be
  countable, as $\{\, 1/k : k \ge 1 \,\} \cup \{0\}$ is
  ([[ex-reciprocals-with-zero-are-compact]]). Applied to a
  nondegenerate closed interval, which [[ex-closed-interval-is-perfect]] shows
  to be perfect, the theorem reproves the uncountability of intervals
  ([[cor-interval-uncountable]]) by a different route; the two proofs share
  nothing but the completeness of $\mathbb{R}$, which
  [[cor-interval-uncountable]] spends as a supremum and the argument above
  spends through [[thm-nested-interval-property]].
