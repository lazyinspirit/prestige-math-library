---
id: fs-null-implies-content-zero
kind: false-statement
title: "FALSE: every set of measure zero has content zero"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-content-zero-implies-null, thm-compact-null-is-content-zero, lem-finite-interval-cover-total-length, def-measure-zero-and-content-zero, thm-rationals-countable, lem-countable-sets-are-null, lem-subset-of-countable, lem-q-and-irrationals-dense-r, lem-rat-embeds-dense, thm-open-set-algebra-r, def-open-and-closed-in-r, thm-closure-characterisations-r, def-interval, def-countable, def-neighbourhood-r, lem-finite-set-has-max, def-max-min, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
forward_refs: [cex-null-set-not-of-content-zero]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Jordan measure (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Jordan_measure"
    - title: "Null set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Null_set"
    - title: "MIT 18.125, Homework 2: Measure-zero sets"
      url: "https://math.mit.edu/classes/18.125/HW2.pdf"
    - title: "UAF Math 641, Measure Theory notes"
      url: "https://www.cs.uaf.edu/~maxwell/AY2007/math641/Measure.pdf"
pipeline_run: null
---

## Statement

**False claim:** every set of measure zero has content zero
([[def-measure-zero-and-content-zero]]).

The converse is true and is [[lem-content-zero-implies-null]]; the two notions do
coincide for compact sets ([[thm-compact-null-is-content-zero]]). The claim above
drops the compactness, and boundedness alone is not a substitute: the witness
below is a bounded set of measure zero with no finite cover by intervals of total
length less than $1$.

## Facts & Assumptions

**Given:** The set $E := \mathbb{Q}_{\mathbb{R}} \cap [0,1]$, where $\mathbb{Q}_{\mathbb{R}}$ is the image of $\mathbb{Q}$ in $\mathbb{R}$ ([[lem-rat-embeds-dense]]).

[A1] The false claim: every subset of $\mathbb{R}$ of measure zero has content zero.

[L1] $\mathbb{Q} \approx \mathbb{N}$ and a subset of an at most countable set is at most countable, so $E$ is at most countable, hence null ([[thm-rationals-countable]], [[lem-subset-of-countable]], [[def-countable]], [[lem-countable-sets-are-null]], [[lem-rat-embeds-dense]]).

[L2] $\mathbb{Q}_{\mathbb{R}}$ is dense in $\mathbb{R}$: strictly between any two reals lies a rational ([[lem-q-and-irrationals-dense-r]], [[lem-rat-embeds-dense]]).

[L3] $[c,d]$ is a closed set, a finite union of closed sets is closed, and $\overline{A}$ is the set of points every neighbourhood of which meets $A$, so a closed set containing $A$ contains $\overline{A}$ ([[def-interval]], [[def-open-and-closed-in-r]], [[thm-open-set-algebra-r]], [[thm-closure-characterisations-r]], [[def-neighbourhood-r]]).

[L4] If $[a,b] \subseteq \bigcup_{j \le n}[c_j,d_j]$ with $a \le b$ and $c_j \le d_j$, then $\sum_{j \le n}(d_j - c_j) \ge b - a$ ([[lem-finite-interval-cover-total-length]]).

[L5] $A$ has content zero when for every real $\varepsilon > 0$ it has a finite cover by closed intervals of total length at most $\varepsilon$ ([[def-measure-zero-and-content-zero]]).

[L6] Every nonempty finite set of reals has a maximum and a minimum ([[lem-finite-set-has-max]], [[def-max-min]]).

[L7] Ordered-field arithmetic: $0 < 1$, so $2 > 0$ and $2^{-1} > 0$ and $2^{-1} < 1$; adding a constant and multiplying by a positive preserve an inequality; the order is total and transitive ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Refutation

**Proof technique:** direct.

1.1 $E$ has measure zero by [L1], and $E \subseteq [0,1]$ is bounded. [L1]

1.2 Every $x \in [0,1]$ is adherent to $E$: given a real $\varepsilon > 0$, put $p := \max\{0,\ x - \varepsilon\}$ and $q := \min\{1,\ x + \varepsilon\}$, which exist by [L6]. Then $p < q$: indeed $p \le x \le q$ by [L7] and $0 \le x \le 1$, while $p = x$ would need $x \le 0$ hence $x = 0 < \min\{1,\varepsilon\} = q$, and $q = x$ would need $x \ge 1$ hence $x = 1 > \max\{0, 1-\varepsilon\} = p$, and otherwise $p < x < q$. By [L2] there is a rational strictly between $p$ and $q$; it lies in $[0,1]$ because $0 \le p$ and $q \le 1$, and within $\varepsilon$ of $x$ because $x - \varepsilon \le p$ and $q \le x + \varepsilon$. So $N_\varepsilon(x) \cap E \ne \varnothing$. [L2, L6, L7]

2.1 Let $n \in \mathbb{N}$ and $c_0 \le d_0, \dots, c_n \le d_n$ be any finite family of closed intervals with $E \subseteq \bigcup_{j \le n}[c_j,d_j]$. The union $\bigcup_{j\le n}[c_j,d_j]$ is a closed set by [L3], and it contains $E$, hence contains $\overline{E}$ by [L3]; by step 1.2 every point of $[0,1]$ lies in $\overline{E}$, so $[0,1] \subseteq \bigcup_{j \le n}[c_j,d_j]$ and [L4] gives $\sum_{j \le n}(d_j - c_j) \ge 1$. [step 1.2, L3, L4]

3.1 So no finite family of closed intervals covers $E$ with total length at most $2^{-1} < 1$, and $E$ does not have content zero by [L5] and [L7]; yet $E$ has measure zero by step 1.1. The claim [A1] therefore fails at $E$ and is false. [step 1.1, step 2.1, A1, L5, L7] ∎

## Remarks

- **Boundedness is not the missing hypothesis, closedness is.** $E$ is bounded
  and its failure is total: no finite cover does better than total length $1$,
  the same bound as for all of $[0,1]$. What $E$ lacks is closedness, and with it
  compactness; [[thm-compact-null-is-content-zero]] shows that supplying it
  repairs the implication completely.

- **The gap between the two notions is a quantifier, not a constant.** Given
  $\varepsilon$, the countable cover of $E$ from
  [[lem-countable-sets-are-null]] uses intervals whose lengths shrink
  geometrically; no finite initial segment of it covers $E$, because the rationals
  left over are still dense in $[0,1]$. Compactness is exactly what turns a
  countable cover into a finite one, and that is the whole content of the repair.

- **The named witness** is [[cex-null-set-not-of-content-zero]].
