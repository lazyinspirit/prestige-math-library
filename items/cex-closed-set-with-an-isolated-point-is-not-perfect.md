---
id: cex-closed-set-with-an-isolated-point-is-not-perfect
kind: counterexample
title: "$\\{0\\} \\cup [1,2]$ is closed, has an isolated point, and is not perfect"
status: published
origin: session
deps: [def-perfect-set-r, def-limit-point-r, def-open-and-closed-in-r, def-interval, def-neighbourhood-r, thm-open-set-algebra-r, lem-of-abs-value, def-ordered-field, def-complete-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
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
    - title: "Perfect set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Perfect_set"
    - title: "Isolated point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Isolated_point"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** every closed subset of $\mathbb{R}$ is perfect
([[def-perfect-set-r]]).

The witness is $E := \{0\} \cup [1,2]$. It is closed, being a union of two
closed sets ([[thm-open-set-algebra-r]]), and $0$ is an isolated point of it
([[def-limit-point-r]]), so the second clause of the definition of a perfect set
fails while the first holds.

## Facts & Assumptions

**Given:** The set $E := \{0\} \cup [1,2]$, where $\{0\} = [0,0]$ and $[1,2]$ are closed bounded intervals ([[def-interval]]).

[A1] The refuted claim: every closed subset of $\mathbb{R}$ is perfect.

[L1] A set is perfect when it is closed and no point of it is isolated in it; $x \in P$ is isolated in $P$ when some $N_\varepsilon(x)$ satisfies $N_\varepsilon(x) \cap P = \{x\}$ ([[def-perfect-set-r]], [[def-limit-point-r]]).

[L2] Each interval of the form $[a,b]$ is a closed set, and a union of finitely many closed sets is closed ([[def-open-and-closed-in-r]], [[def-interval]], [[thm-open-set-algebra-r]]).

[L3] $N_\varepsilon(x) = \{\, y : |y - x| < \varepsilon \,\}$, and $|y| = y$ for $y \ge 0$ ([[def-neighbourhood-r]], [[lem-of-abs-value]]).

[L4] $0 < 1$, so $2 := 1 + 1 > 0$ and $0 < 1 \cdot 2^{-1} < 1$; the order is total and transitive ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Counterexample

**Proof technique:** direct.

1.1 $E$ is closed: $\{0\} = [0,0]$ and $[1,2]$ are closed sets by [L2], and their union is closed by [L2]. So $E$ is a legitimate instance of the claim [A1]. [A1, L2]

1.2 $0$ is an isolated point of $E$: certainly $0 \in E$; put $\varepsilon := 1 \cdot 2^{-1}$, which is positive and $< 1$ by [L4]. An element $y$ of $E$ is $0$ or lies in $[1,2]$, and in the second case $|y - 0| = y \ge 1 > \varepsilon$ by [L3] and [L4], so $y \notin N_\varepsilon(0)$. Hence $N_\varepsilon(0) \cap E = \{0\}$. [L1, L3, L4]

2.1 By step 1.2 the closed set $E$ of step 1.1 has an isolated point, so it is not perfect by [L1], and the claim [A1] is refuted. [step 1.1, step 1.2, A1, L1] ∎

## Remarks

- **Only the second clause fails, and by one point.** Every point of $[1,2]$ is
  a limit point of $E$, by the computation in
  [[ex-closed-interval-is-perfect]]; the single point $0$ is what stops $E$ from
  being perfect. Deleting it leaves $[1,2]$, which is perfect.

- **Countability is the visible consequence.** A nonempty perfect set is
  uncountable ([[thm-perfect-set-uncountable-r]]). $E$ is uncountable too, since
  it contains $[1,2]$, so this example does not separate the two notions by
  size; what it shows is that closedness alone does not give perfectness. A
  countable closed set with isolated points is
  $\{\, 1/k : k \ge 1 \,\} \cup \{0\}$ ([[ex-reciprocals-with-zero-are-compact]]),
  and it is likewise not perfect.

- **The empty set is the degenerate case on the other side.** It is closed and
  has no isolated points, hence is perfect, and it is countable; that is why
  [[thm-perfect-set-uncountable-r]] assumes its perfect set is nonempty.
