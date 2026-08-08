---
id: cex-half-open-interval-neither-open-nor-closed
kind: counterexample
title: "$[0,1)$ is neither open nor closed in $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [fs-every-set-is-open-or-closed, def-interval, def-open-and-closed-in-r, def-neighbourhood-r, lem-finite-set-has-max, def-max-min, lem-of-abs-value, def-ordered-field, def-complete-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
cx_machine_verified: false
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
    - title: "Open set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Open_set"
    - title: "Closed set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closed_set"
    - title: "Interval (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Interval_(mathematics)"
    - title: "MIT 18.100, Test 1 solutions"
      url: "https://math.mit.edu/classes/18.100/Test1_sol.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** every subset of $\mathbb{R}$ is open or closed
([[fs-every-set-is-open-or-closed]], [[def-open-and-closed-in-r]]).

The witness is the half-open interval $E := [0,1)$ ([[def-interval]]). It fails
openness at its left endpoint $0$, which belongs to $E$ while every
neighbourhood of $0$ reaches below $0$, and it fails closedness at $1$, which
does not belong to $E$ while every neighbourhood of $1$ reaches into $E$. The
refutation is carried out in full in [[fs-every-set-is-open-or-closed]] and is
recorded here as the named counterexample.

## Facts & Assumptions

**Given:** The interval $E := [0,1) = \{\, x \in \mathbb{R} : 0 \le x < 1 \,\}$ ([[def-interval]]).

[A1] The refuted claim: every subset of $\mathbb{R}$ is open or closed.

[L1] $E$ is neither open nor closed ([[fs-every-set-is-open-or-closed]]).

[L2] $U$ is open when every $x \in U$ admits $\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$; $F$ is closed when $\mathbb{R} \setminus F$ is open; $N_\varepsilon(x) = \{\, y : |y-x| < \varepsilon \,\}$ ([[def-open-and-closed-in-r]], [[def-neighbourhood-r]]).

[L3] Every nonempty finite set of reals has a minimum, which is one of its members ([[lem-finite-set-has-max]], [[def-max-min]]).

[L4] Absolute value: $|z| = z$ for $z \ge 0$ and $|z| = -z$ for $z < 0$ ([[lem-of-abs-value]]); $0 < 1$, so $2 := 1+1 > 0$ and $0 < d \cdot 2^{-1} < d$ for $d > 0$; adding a constant preserves an inequality and the order is total ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Counterexample

**Proof technique:** direct.

1.1 $0 \in E$ and $1 \notin E$, so $E$ is a legitimate instance of the claim [A1] and $1 \in \mathbb{R} \setminus E$. [A1, L4]

1.2 $E$ is not open: for a real $\varepsilon > 0$ the point $y := -(\varepsilon \cdot 2^{-1})$ satisfies $|y - 0| = \varepsilon \cdot 2^{-1} < \varepsilon$ by [L4], so $y \in N_\varepsilon(0)$, while $y < 0$ puts $y$ outside $E$. Hence no neighbourhood of the point $0$ of $E$ is contained in $E$. [L1, L2, L4]

1.3 $E$ is not closed: for a real $\varepsilon > 0$ put $t := \min\{\varepsilon, 1\} \cdot 2^{-1}$, positive by [L3] and [L4], and $y := 1 - t$; then $t \le 1 \cdot 2^{-1}$ gives $y \ge 1 - 1 \cdot 2^{-1} > 0$, and $t > 0$ gives $y < 1$, so $y \in E$; and $|y - 1| = t \le \varepsilon \cdot 2^{-1} < \varepsilon$, so $y \in N_\varepsilon(1)$. Hence no neighbourhood of the point $1$ of $\mathbb{R} \setminus E$ is contained in $\mathbb{R} \setminus E$, so $\mathbb{R} \setminus E$ is not open. [L1, L2, L3, L4]

2.1 By steps 1.2 and 1.3 the set $E$ is neither open nor closed, so the claim [A1] fails at $E$ and is refuted. [step 1.1, step 1.2, step 1.3, A1, L1, L2] ∎

## Remarks

- **The two failures are at different points and are independent.** Openness
  fails only at $0$, since every $x$ with $0 < x < 1$ has a neighbourhood inside
  $E$; closedness fails only at $1$, since every point outside $E$ other than
  $1$ has a neighbourhood outside $E$. Repairing either failure separately gives
  a set that is open or closed but not both: $(0,1)$ is open, $[0,1]$ is closed.

- **Nothing about the true results is contradicted.**
  [[thm-open-set-algebra-r]] says which combinations of open sets are open and
  which combinations of closed sets are closed; it says nothing about arbitrary
  sets, and "closed" was never the negation of "open"
  ([[def-open-and-closed-in-r]]).

- **The mirror witness.** $(0,1]$ is neither open nor closed for the same two
  reasons with the roles of the endpoints exchanged, and $\mathbb{Q}$ is a
  subset that is neither open nor closed with no endpoints at all
  ([[ex-closure-interior-boundary-of-q]]).
