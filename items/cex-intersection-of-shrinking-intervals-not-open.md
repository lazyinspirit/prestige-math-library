---
id: cex-intersection-of-shrinking-intervals-not-open
kind: counterexample
title: "$\\bigcap_k (-1/k, 1/k) = \\{0\\}$ is not open"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [fs-arbitrary-intersection-of-open-is-open, def-open-and-closed-in-r, cor-archimedean-reciprocal, thm-of-archimedean, def-interval, def-neighbourhood-r, lem-of-abs-value, lem-of-naturals-positive, lem-of-inverse-positive, def-ordered-field, def-complete-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
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
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Thm 2.24 and the remark following it)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** an arbitrary intersection of open subsets of $\mathbb{R}$ is
open ([[fs-arbitrary-intersection-of-open-is-open]],
[[def-open-and-closed-in-r]]).

The witness is $U_k := (-1/k,\ 1/k)$ for $k \ge 1$: each $U_k$ is a nonempty
open interval, the family is nested, and

$$\bigcap_{k \ge 1} \Big( -\frac{1}{k},\ \frac{1}{k} \Big) \;=\; \{0\},$$

which is not open. The index runs over $k \ge 1$ because $1/0$ is undefined;
read as a family indexed by $\mathbb{N}$ it is $j \mapsto (-1/(j+1),\ 1/(j+1))$.
The refutation is carried out in full in
[[fs-arbitrary-intersection-of-open-is-open]] and is recorded here as the named
counterexample. The comparison worth keeping in view is the finite case: any
finite subfamily of $\{U_k\}$ has intersection the smallest of its members,
which is open.

## Facts & Assumptions

**Given:** For each natural $k \ge 1$ the interval $U_k := (-1/k,\ 1/k)$, where $1/k$ is the inverse of the canonical natural $k \cdot 1_{\mathbb{R}}$.

[A1] The refuted claim: for every family of open subsets of $\mathbb{R}$, the intersection is open.

[L1] Each $U_k$ is open, the intersection of the family is $\{0\}$, and $\{0\}$ is not open ([[fs-arbitrary-intersection-of-open-is-open]]).

[L2] $U$ is open when every point of it has a neighbourhood inside it, and each interval $(a,b)$ is an open set; $N_\varepsilon(x) = \{\, y : |y-x| < \varepsilon \,\}$ ([[def-open-and-closed-in-r]], [[def-interval]], [[def-neighbourhood-r]]).

[L3] Reciprocal Archimedean property: for every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

[L4] Canonical naturals are positive for $k \ge 1$ and their inverses are positive ([[lem-of-naturals-positive]], [[lem-of-inverse-positive]]); $|z| \ge 0$ with $|z| = 0$ only for $z = 0$, and $|z| < c$ exactly when $-c < z < c$ for $c > 0$ ([[lem-of-abs-value]]); $0 < 1$, so $2 := 1+1 > 0$ and $0 < d \cdot 2^{-1} < d$ for $d > 0$ ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Counterexample

**Proof technique:** direct.

1.1 Each $U_k$ is a nonempty open subset of $\mathbb{R}$, being the interval $(-1/k, 1/k)$ with $1/k > 0$, so the family $\{\, U_k : k \ge 1 \,\}$ is an instance of the claim [A1], which asserts that its intersection is open. [A1, L1, L2, L4]

1.2 $0 \in U_k$ for every $k \ge 1$, since $|0| = 0 < 1/k$ by [L4]. [L1, L4]

2.1 If $x \ne 0$ then $|x| > 0$ by [L4], so [L3] supplies a natural $n \ge 1$ with $1/n < |x|$, and $x \in U_n$ would give $|x| < 1/n$, which trichotomy forbids; hence $x \notin U_n$. With step 1.2 this gives $\bigcap_{k \ge 1} U_k = \{0\}$. [step 1.2, L3, L4]

3.1 The singleton $\{0\}$ is not open, since for every real $\varepsilon > 0$ the point $\varepsilon \cdot 2^{-1}$ lies in $N_\varepsilon(0)$ and differs from $0$ by [L4]. So the family of step 1.1 consists of open sets and its intersection, computed in step 2.1, is not open: the claim [A1] is refuted. [step 1.1, step 2.1, A1, L1, L2, L4] ∎

## Remarks

- **Exactly one hypothesis of [[thm-open-set-algebra-r]] is missing.** That
  theorem asserts openness for *finite* intersections, and its proof takes the
  minimum of finitely many positive radii. Here the family is infinite and the
  radii at the surviving point $0$ are the numbers $1/k$, which have no positive
  lower bound ([[cor-archimedean-reciprocal]]). So the true theorem is not
  contradicted; its finiteness hypothesis cannot be dropped.

- **The Archimedean property is doing the work in step 2.1.** In a
  non-Archimedean ordered field a positive infinitesimal lies in every
  $(-1/k, 1/k)$, and the intersection is then strictly larger than $\{0\}$. So
  this is a counterexample about $\mathbb{R}$, supplied by
  [[cor-archimedean-reciprocal]], and not a formal consequence of openness
  alone.

- **The intersection here is a single point, and that is not forced.** An
  infinite intersection of open sets can be open, for instance when all members
  are equal. The claim refuted is a universal one, so one witness settles it.
