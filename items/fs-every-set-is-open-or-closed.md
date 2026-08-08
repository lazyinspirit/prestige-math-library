---
id: fs-every-set-is-open-or-closed
kind: false-statement
title: "FALSE: every subset of $\\mathbb{R}$ is either open or closed"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-open-and-closed-in-r, def-interval, def-neighbourhood-r, lem-finite-set-has-max, def-max-min, lem-of-abs-value, def-ordered-field, def-complete-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
forward_refs: [cex-half-open-interval-neither-open-nor-closed]
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
    - title: "Open set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Open_set"
    - title: "Closed set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closed_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Remark 2.28)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "MIT 18.100, Test 1 solutions"
      url: "https://math.mit.edu/classes/18.100/Test1_sol.pdf"
pipeline_run: null
---

## Statement

**False claim:** every subset of $\mathbb{R}$ is open or closed
([[def-open-and-closed-in-r]]).

The claim treats "closed" as the negation of "open". It is not: closedness of a
set is openness of its *complement*, and both conditions can fail at once. The
half-open interval $[0,1)$ ([[def-interval]]) is the standard witness, and it
fails each condition at a different point, at $0$ for openness and at $1$ for
closedness.

## Facts & Assumptions

**Given:** The half-open interval $E := [0,1) = \{\, x \in \mathbb{R} : 0 \le x < 1 \,\}$ ([[def-interval]]).

[A1] The false claim: every subset of $\mathbb{R}$ is open or closed.

[L1] $U$ is open when every $x \in U$ admits a real $\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$; $F$ is closed when $\mathbb{R} \setminus F$ is open ([[def-open-and-closed-in-r]]).

[L2] $N_\varepsilon(x) = \{\, y : |y - x| < \varepsilon \,\}$ ([[def-neighbourhood-r]]).

[L3] Every nonempty finite set of reals has a minimum, which is one of its members and is $\le$ both entries of a two-element set ([[lem-finite-set-has-max]], [[def-max-min]]).

[L4] Absolute value: $|z| = z$ for $z \ge 0$ and $|z| = -z$ for $z < 0$; $|z| \ge 0$ ([[lem-of-abs-value]]).

[L5] Ordered-field arithmetic: $0 < 1$, so $2 := 1+1 > 0$ and $0 < d \cdot 2^{-1} < d$ for every $d > 0$; adding a constant preserves an inequality; the order is total and transitive ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Refutation

**Proof technique:** direct.

1.1 $0 \in E$ and $1 \notin E$, since $0 \le 0 < 1$ while $1 < 1$ fails; so $1 \in \mathbb{R} \setminus E$. [given, L5]

1.2 $E$ is not open: let $\varepsilon > 0$ be real and put $y := -(\varepsilon \cdot 2^{-1})$. Then $|y - 0| = \varepsilon \cdot 2^{-1} < \varepsilon$ by [L4] and [L5], so $y \in N_\varepsilon(0)$; but $y < 0$, so $y \notin E$. Hence no neighbourhood of the point $0$ of $E$ is contained in $E$. [L1, L2, L4, L5]

1.3 $\mathbb{R} \setminus E$ is not open: let $\varepsilon > 0$ be real, put $t := \min\{\varepsilon, 1\} \cdot 2^{-1}$, which is positive and satisfies $t \le \varepsilon \cdot 2^{-1} < \varepsilon$ and $t \le 1 \cdot 2^{-1}$ by [L3] and [L5], and put $y := 1 - t$. Then $y \ge 1 - 1 \cdot 2^{-1} > 0$ and $y < 1$, so $y \in E$; and $|y - 1| = t < \varepsilon$ by [L4], so $y \in N_\varepsilon(1)$. Hence no neighbourhood of the point $1$ of $\mathbb{R} \setminus E$ is contained in $\mathbb{R} \setminus E$. [L1, L2, L3, L4, L5]

2.1 By step 1.2 the set $E$ is not open, and by steps 1.1 and 1.3 its complement is not open, so $E$ is not closed either. The subset $E$ of $\mathbb{R}$ is therefore neither open nor closed, and the claim [A1] is false. [step 1.1, step 1.2, step 1.3, A1, L1] ∎

## Remarks

- **The two failures are independent and happen at different points.** Openness
  fails only at $0$: every $x$ with $0 < x < 1$ does have a neighbourhood inside
  $E$. Closedness fails only at $1$: every $x$ outside $E$ other than $1$ does
  have a neighbourhood outside $E$. So the set is one point short of open and one
  point short of closed, and the two repairs move the endpoint in opposite
  directions, as the next remark records.

- **The four possibilities all occur.** $\mathbb{R}$ and $\varnothing$ are both
  open and closed, $(0,1)$ is open and not closed, $[0,1]$ is closed and not
  open, and $[0,1)$ is neither ([[def-open-and-closed-in-r]]). "Open" and
  "closed" are two independent properties, not two values of one property.

- **The named witness** is
  [[cex-half-open-interval-neither-open-nor-closed]]; the refutation itself is
  carried out here.
