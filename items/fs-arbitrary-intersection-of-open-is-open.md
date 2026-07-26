---
id: fs-arbitrary-intersection-of-open-is-open
kind: false-statement
title: "FALSE: an arbitrary intersection of open subsets of $\\mathbb{R}$ is open"
status: draft
origin: session
deps: [thm-open-set-algebra-r, def-open-and-closed-in-r, cor-archimedean-reciprocal, thm-of-archimedean, def-neighbourhood-r, def-interval, lem-of-abs-value, lem-of-naturals-positive, lem-of-inverse-positive, def-ordered-field, def-complete-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
forward_refs: [cex-intersection-of-shrinking-intervals-not-open]
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
    - title: "Open set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Open_set"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Thm 2.24 and the remark following it)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

**False claim:** for every family $\mathcal{U}$ of open subsets of $\mathbb{R}$
([[def-open-and-closed-in-r]]), the intersection $\bigcap \mathcal{U}$ is open.

The true statement is [[thm-open-set-algebra-r]], claim 2, which asserts this for
*finite* families only. The claim above deletes the word "finite", and the
refutation below shows that the word cannot be deleted.

## Facts & Assumptions

**Given:** For each natural $k \ge 1$ the interval $U_k := (-1/k,\ 1/k)$, where $1/k$ abbreviates the inverse of the canonical natural $k \cdot 1_{\mathbb{R}}$, which is positive for $k \ge 1$.

[A1] The false claim: for every family $\mathcal{U}$ of open subsets of $\mathbb{R}$, the set $\bigcap \mathcal{U}$ is open.

[L1] $U$ is open when every $x \in U$ admits $\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$, and each interval of the form $(a,b)$ is an open set ([[def-open-and-closed-in-r]], [[def-interval]]).

[L2] $N_\varepsilon(x) = \{\, y : |y - x| < \varepsilon \,\} = (x - \varepsilon, x + \varepsilon)$ ([[def-neighbourhood-r]]).

[L3] Reciprocal Archimedean property: for every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

[L4] Absolute value: $|z| \ge 0$, $|z| = 0$ exactly when $z = 0$, and for $c > 0$ one has $|z| < c$ exactly when $-c < z < c$ ([[lem-of-abs-value]]).

[L5] Canonical naturals are positive for $k \ge 1$ and their inverses are positive ([[lem-of-naturals-positive]], [[lem-of-inverse-positive]]); $0 < 1$, so $2 := 1 + 1 > 0$ and $0 < d \cdot 2^{-1} < d$ for $d > 0$ ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Refutation

**Proof technique:** direct.

1.1 Each $U_k$ is an open subset of $\mathbb{R}$, being an interval of the form $(a,b)$ with $a = -1/k$ and $b = 1/k$, and $1/k > 0$ by [L5]. [L1, L5]

1.2 $0 \in U_k$ for every $k \ge 1$, since $|0 - 0| = 0 < 1/k$ by [L4] and [L5]. [L4, L5]

1.3 The singleton $\{0\}$ is not open: for every real $\varepsilon > 0$ the element $\varepsilon \cdot 2^{-1}$ satisfies $0 < \varepsilon \cdot 2^{-1} < \varepsilon$ by [L5], so it lies in $N_\varepsilon(0)$ by [L2] and [L4] and differs from $0$; hence no $N_\varepsilon(0)$ is contained in $\{0\}$. [L1, L2, L4, L5]

2.1 $\bigcap_{k \ge 1} U_k = \{0\}$: the inclusion $\supseteq$ is step 1.2, and for the other inclusion let $x \ne 0$; then $|x| > 0$ by [L4], so [L3] supplies a natural $n \ge 1$ with $1/n < |x|$, and $x \in U_n$ would mean $|x| < 1/n$ by [L4], which trichotomy forbids; hence $x \notin U_n$ and $x$ is not in the intersection. [step 1.2, L3, L4]

3.1 The family $\{\, U_k : k \ge 1 \,\}$ consists of open subsets of $\mathbb{R}$ by step 1.1, and its intersection is $\{0\}$ by step 2.1, which is not open by step 1.3. So the claim [A1] fails for this family and is false. [step 1.1, step 1.3, step 2.1, A1] ∎

## Remarks

- **Exactly one word is deleted, and it is load bearing.**
  [[thm-open-set-algebra-r]] proves that a finite intersection of open sets is
  open, and the proof takes the minimum of finitely many positive radii. That
  minimum is positive because it is one of the radii. An infinite family need
  supply no such minimum, and the family here supplies none: the radii at the
  point $0$ are the numbers $1/k$, which have no positive lower bound, precisely
  by [[cor-archimedean-reciprocal]].

- **The failure is Archimedean, not merely set-theoretic.** In a non-Archimedean
  ordered field a positive infinitesimal lies in every $(-1/k, 1/k)$, so the
  intersection there is strictly larger than $\{0\}$ and the computation of the
  intersection above is false there. What makes the claim fail over $\mathbb{R}$
  is that the reciprocals of the naturals really do get below every positive
  real.

- **The named witness** is [[cex-intersection-of-shrinking-intervals-not-open]],
  which records the same family as a counterexample; the refutation itself is
  carried out here.

- **The dual statement fails too**, by complementation
  ([[thm-open-set-algebra-r]]): an arbitrary union of closed sets need not be
  closed, and $\mathbb{R} \setminus \{0\}$, the union of the closed sets
  $\mathbb{R} \setminus U_k$, is the witness.
