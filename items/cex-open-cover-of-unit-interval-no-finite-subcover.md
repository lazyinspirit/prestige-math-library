---
id: cex-open-cover-of-unit-interval-no-finite-subcover
kind: counterexample
title: "The cover $\\{(1/k, 1)\\}$ of $(0,1)$ has no finite subcover, so $(0,1)$ is not compact"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-open-cover-r, thm-heine-borel-characterisation-r, cor-archimedean-reciprocal, thm-of-archimedean, def-interval, def-open-and-closed-in-r, def-neighbourhood-r, lem-of-naturals-positive, lem-of-inverse-positive, lem-finite-set-has-max, def-max-min, lem-of-abs-value, def-ordered-field, def-complete-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
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
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Example 2.21(h))"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "University of Colorado, Analysis I midterm solutions"
      url: "https://math.colorado.edu/~stade/AnalysisI/TH_Midterm_3001_sol.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** the bounded interval $(0,1)$ is compact
([[def-open-cover-r]]); equivalently, boundedness on its own is enough for
compactness.

The witness is the family

$$\mathcal{U} \;:=\; \{\, V_k : k \ge 1 \,\}, \qquad V_k := (1/k,\ 1),$$

of open subsets of $\mathbb{R}$. The index runs over $k \ge 1$ because $1/0$ is
undefined, and the first member is degenerate: $V_1 = (1,1) = \varnothing$,
which is harmless, since a cover may contain empty members. The family covers
$(0,1)$ and no finite subfamily does.

## Facts & Assumptions

**Given:** For each natural $k \ge 1$ the interval $V_k := (1/k,\ 1)$, where $1/k$ is the inverse of the canonical natural $k \cdot 1_{\mathbb{R}}$, and the family $\mathcal{U} := \{\, V_k : k \ge 1 \,\}$.

[A1] The refuted claim: $(0,1)$ is compact.

[L1] An open cover of $S$ is a family of open subsets of $\mathbb{R}$ whose union contains $S$; $S$ is compact when every open cover has a finite subfamily, empty or of the form $\{U_0, \dots, U_p\}$, whose union contains $S$ ([[def-open-cover-r]]).

[L2] Each interval of the form $(a,b)$ is an open set; $N_\varepsilon(x) = \{\, y : |y-x| < \varepsilon \,\}$ ([[def-open-and-closed-in-r]], [[def-interval]], [[def-neighbourhood-r]]).

[L3] Reciprocal Archimedean property: for every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

[L4] Canonical naturals are positive and increasing for $k \ge 1$, with $1 \cdot 1_{\mathbb{R}} = 1$; reciprocation of positives is positive and reverses the order, so $1 \le m \le n$ gives $0 < 1/n \le 1/m \le 1$ ([[lem-of-naturals-positive]], [[lem-of-inverse-positive]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

[L5] Every nonempty finite set of reals has a maximum and a minimum, each one of its members ([[lem-finite-set-has-max]], [[def-max-min]]).

[L6] Absolute value and ordered-field arithmetic: $|z| = z$ for $z \ge 0$; $0 < 1$, so $2 := 1+1 > 0$ and $0 < d \cdot 2^{-1} < d$ for $d > 0$; the order is total and transitive ([[lem-of-abs-value]], [[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

[L7] A subset of $\mathbb{R}$ is compact exactly when it is closed and bounded ([[thm-heine-borel-characterisation-r]]).

## Counterexample

**Proof technique:** direct.

1.1 Each $V_k$ is an open subset of $\mathbb{R}$ by [L2], and $\mathcal{U}$ covers $(0,1)$: given $x$ with $0 < x < 1$, [L3] supplies a natural $n \ge 1$ with $1/n < x$, so $x \in V_n$. Hence $\mathcal{U}$ is an open cover of $(0,1)$. [L1, L2, L3, L4]

1.2 $(0,1)$ is nonempty, since $1 \cdot 2^{-1}$ satisfies $0 < 1 \cdot 2^{-1} < 1$ by [L6]. [L6]

1.3 $(0,1)$ is not closed: $0 \notin (0,1)$, and for a real $\varepsilon > 0$ the point $t := \min\{\varepsilon, 1\} \cdot 2^{-1}$ is positive, satisfies $t \le 1 \cdot 2^{-1} < 1$ and $|t - 0| = t \le \varepsilon \cdot 2^{-1} < \varepsilon$ by [L5] and [L6], so $t \in N_\varepsilon(0) \cap (0,1)$; hence no neighbourhood of $0$ lies in the complement of $(0,1)$ and that complement is not open. [L2, L5, L6]

2.1 No finite subfamily of $\mathcal{U}$ covers $(0,1)$: the empty subfamily fails by step 1.2, and a nonempty finite subfamily is $\{V_{k_0}, \dots, V_{k_p}\}$ with each $k_i \ge 1$; put $K := \max\{k_0, \dots, k_p\}$ by [L5], one of the $k_i$, so $K \ge 1$. Since $k_i \le K$ gives $1/K \le 1/k_i$ by [L4], each $V_{k_i}$ is contained in $V_K = (1/K, 1)$, so the union of the subfamily lies in $V_K$. The point $z := 1/(K+1)$ satisfies $0 < z \le 1 \cdot 2^{-1} < 1$ by [L4] and [L6], since $K + 1 \ge 2$, so $z \in (0,1)$; and $z \le 1/K$ by [L4], so $1/K < z$ fails and $z \notin V_K$. Thus $z$ is uncovered. [step 1.2, L1, L4, L5, L6]

3.1 The family $\mathcal{U}$ is therefore an open cover of $(0,1)$ with no finite subcover, so $(0,1)$ is not compact and the claim [A1] is refuted. This is consistent with [L7]: $(0,1)$ is bounded but not closed by step 1.3, so [L7] predicts exactly this failure. [step 1.1, step 1.3, step 2.1, A1, L1, L7] ∎

## Remarks

- **The cover creeps up on the missing endpoint.** Every member of
  $\mathcal{U}$ stops short of $0$, and the whole family reaches every point of
  $(0,1)$ only because the reciprocals $1/k$ get arbitrarily small
  ([[cor-archimedean-reciprocal]]). A finite subfamily stops at the largest of
  its indices $K$ and therefore misses every point of $(0,1)$ that is at most
  $1/K$.

- **The empty member is not a defect.** $V_1 = (1,1)$ is empty because
  $1/1 = 1$; a family of open sets is a cover as long as its union contains the
  set, and an empty member contributes nothing either way. Writing the family
  from $k = 2$ instead would change nothing in the argument.

- **The closed interval behaves differently, and that is the whole point.**
  $[0,1]$ is compact by [[thm-heine-borel-r]], and the analogous family
  $\{(1/k, 1)\}$ is not even a cover of it, since it misses both $0$ and $1$.
  The endpoint that the cover above exploits is $0$, which $(0,1)$ omits and
  $[0,1]$ contains.
