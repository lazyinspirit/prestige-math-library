# Audit proof-refuter brief — Wave 12, A6

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30).** You are read-only and
> tool-less. Do not ask for shell or edit permission. Everything available to
> you is reproduced in the dispatch task.

You are **DeepSeek V4 Pro** at the API's maximum reasoning setting, serving as
an independent adversarial proof-refuter. Return evidence only; Audit-Alpha
alone adjudicates and edits.

## Binding triage

- **Non-negotiable:** mathematical accuracy, logical validity, correct citation.
- **Explicitly acceptable, spend no effort:** minor citational quirks; logical
  gaps a competent reader closes within 30 seconds; other non-fatal quirks;
  imperfection at the level of the letter.

Read the target's title, complete public statement, Facts & Assumptions, every
numbered proof/refutation/verification step, and Remarks. Try to falsify every
load-bearing inference. Before alleging that a cited dependency is too weak,
compare the exact current supplied dependency: domain, hypotheses, quantifiers,
direction, conclusion, boundary cases, and conventions. Check biconditionals,
existence/uniqueness, recursion/induction, limits, index shifts, empty/zero/one/
endpoint/degenerate cases, hidden division, hidden choice, and false Remarks.
For an `ai-generated` Statement or consumer, actively search for a
counterexample or a failure in the witness or cited generated premise. A false
public claim, invalid proof, missing necessary hypothesis, circularity, or
materially inaccurate load-bearing citation is fatal; a quickly closable gap is
nonfatal.

Return no more than 450 words, exactly in this shape:

```text
VERDICT: CLEAN | DEFECTS
```

For each defect:

```text
FINDING 1
  location: [exact section/fact/step]
  severity: fatal | nonfatal
  claim:    [exact assertion]
  evidence: [counterexample, invalid inference, or exact source mismatch]
```

Always end with:

```text
BOUNDARY: [specific boundary/counterexample checks and disposition]
SOURCES:  [confirm every supplied cited item used by the target was inspected]
CHECKED:  [confirm title, public claim, every numbered step, and Remarks]
```


---

# This dispatch

## Selection reasons

- Wave 12 ai-generated Statement seed
- top-20 manifest-edge consumer (30 outgoing relationships)
- Wave 12 generated-risk seed (cone 7)

## Target item — `rem-rn-conventions-and-scope`

Normalized current SHA-256: `e97e0c742250a73d84462738598a4f7664242c3f6afa744403f1d36a1e36cf0d`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: rem-rn-conventions-and-scope
kind: remark
title: "Conventions of this page, the standing $n \\ge 1$ hypothesis, and what is taken up elsewhere in the reading order"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-applicable
deps: [def-norm-and-normed-space, def-linear-map, def-euclidean-inner-product, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, thm-cauchy-schwarz-and-the-euclidean-norm, def-equivalent-norms, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, thm-all-norms-on-rn-are-equivalent, thm-componentwise-convergence-and-completeness, cor-bolzano-weierstrass-in-rn, def-vector-valued-functions-limits-and-continuity, thm-componentwise-limits-and-continuity, def-vector-valued-derivative-and-integral, thm-norm-inequality-for-the-vector-valued-integral, thm-mean-value-inequality, cor-vector-valued-ftc-and-lipschitz-bound, def-series-of-vectors-and-rearrangement, thm-absolute-convergence-in-rn, def-the-space-of-summing-directions, thm-steinitz-polygonal-confinement, thm-rearrangement-sums-lie-in-an-affine-subspace, lem-metrics-on-rn, rem-real-exponents-deferred, def-function-space, def-rational-power, lem-standard-basis-of-f-n, thm-euclidean-space-complete, thm-heine-borel-rn, thm-minkowski-finite]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Norm (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Norm_(mathematics)"
    - title: "Levy-Steinitz theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/L%C3%A9vy%E2%80%93Steinitz_theorem"
pipeline_run: null
---

## 1. The standing hypothesis $n \ge 1$, and exactly where it comes from

The published [[lem-metrics-on-rn]] defines $\mathbb{R}^{n}$ together with the
metrics $d_1$, $d_2$, $d_\infty$ **only for $n \ge 1$**, and says why: at $n = 0$
the value $d_\infty(x,y)$ would be a maximum over the empty index set, which does
not exist. Everything downstream of that item inherits the hypothesis, and this
page inherits it too. In particular [[thm-euclidean-space-complete]] and
[[thm-heine-borel-rn]] are stated for $n \ge 1$ and **are never cited here for
all $n$**.

**The boundary runs between the algebra and the metric, not where a reader would
guess.** The following items of this page carry no hypothesis on the dimension:

- [[def-norm-and-normed-space]] — including the observation that the zero space
  carries exactly one norm;
- [[def-euclidean-inner-product]], whose sum is the empty sum at $n = 0$;
- [[thm-cauchy-schwarz-and-the-euclidean-norm]], all four of whose clauses hold
  for every $n$, apart from the closing sentence of clause 2 identifying the
  induced metric with $d_2$;
- [[def-equivalent-norms]], which is about an arbitrary real vector space;
- clause 1 of [[lem-p-norms-are-norms-and-induce-the-published-metrics]], that
  each $\lVert\cdot\rVert_p$ with rational $p \ge 1$ is a norm;
- clause 1 of [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]],
  the finite and reverse triangle inequalities for a norm on any real vector
  space.

The remaining items all carry $n \ge 1$ (or $m \ge 1$ for the codomain of a
vector-valued function), and each states it in its own Statement:
[[def-p-norms-on-rn]] for $\lVert\cdot\rVert_\infty$; clauses 2 and 3 of
[[lem-p-norms-are-norms-and-induce-the-published-metrics]]; clauses 2, 3, 4 of
[[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]];
[[thm-all-norms-on-rn-are-equivalent]];
[[thm-componentwise-convergence-and-completeness]];
[[cor-bolzano-weierstrass-in-rn]];
[[def-vector-valued-functions-limits-and-continuity]];
[[thm-componentwise-limits-and-continuity]];
[[def-vector-valued-derivative-and-integral]];
[[thm-norm-inequality-for-the-vector-valued-integral]];
[[thm-mean-value-inequality]];
[[cor-vector-valued-ftc-and-lipschitz-bound]];
[[def-series-of-vectors-and-rearrangement]];
[[thm-absolute-convergence-in-rn]];
[[def-the-space-of-summing-directions]];
[[thm-steinitz-polygonal-confinement]]; and
[[thm-rearrangement-sums-lie-in-an-affine-subspace]].

Where a statement about $n = 0$ is nevertheless true, it is proved here from
scratch rather than imported: see the second remark of
[[thm-componentwise-convergence-and-completeness]] for completeness of
$\mathbb{R}^{0}$.

## 2. The exponent of a $p$-norm is rational

[[def-rational-power]] supplies $a^{r}$ for a nonnegative base and a **rational**
exponent, and real exponents do not exist at this point in the reading order;
[[rem-real-exponents-deferred]] records why. Consequently
[[def-p-norms-on-rn]] defines $\lVert\cdot\rVert_p$ for rational $p \ge 1$ only,
and the published Minkowski inequality it rests on is itself stated for rational
$p$. **No statement on this page is written with $p$ ranging over a real
interval**, and the phrase "for $p \in [1,\infty)$" appears nowhere.

## 3. $\mathbb{R}^{n}$ is a function space

$\mathbb{R}^{n}$ is the set of functions $n \to \mathbb{R}$
([[def-function-space]], [[lem-metrics-on-rn]]), so $\mathbb{R}^{1}$ is **not
literally** $\mathbb{R}$: its elements are functions on the one-element set $1$.
Every comparison on this page between the theory in $\mathbb{R}^{n}$ and the
published one-dimensional theory therefore goes through the isometric bijection
$\theta : \mathbb{R} \to \mathbb{R}^{1}$ sending $t$ to the function with value
$t$ at $0$, and each item that makes such a comparison states the identification
explicitly: [[cor-bolzano-weierstrass-in-rn]],
[[def-vector-valued-functions-limits-and-continuity]],
[[def-series-of-vectors-and-rearrangement]] and
[[thm-rearrangement-sums-lie-in-an-affine-subspace]]. Coordinates are indexed
from $0$ throughout, as [[lem-standard-basis-of-f-n]] fixes.

## 4. What is taken up elsewhere in the reading order

Each item below is a statement about **where material sits in this library's
reading order**, and none of them is a claim about mathematics that this library
denies.

- **Linear maps, the operator norm, and "a linear map between finite-dimensional
  normed spaces is Lipschitz".** Abstract linear maps are defined on the earlier
  linear-algebra page in [[def-linear-map]]. This page neither defines an
  operator norm nor proves that every linear map between finite-dimensional
  normed spaces is Lipschitz. The later total-derivative treatment uses a
  concrete Euclidean formulation; identifying that formulation with the
  abstract definition requires an explicit agreement argument rather than a
  second silent meaning of "linear map".
- **Inner product spaces and orthogonality.** [[def-euclidean-inner-product]]
  defines the concrete Euclidean form on $\mathbb{R}^{n}$ and claims nothing
  about abstract inner product spaces: orthonormal bases, Gram-Schmidt,
  orthogonal projection, orthogonal complements of arbitrary subspaces and the
  decomposition $V = W \oplus W^{\perp}$ all belong to a page earlier in the plan
  order that is not yet built. **In particular nothing on this page asserts that
  $\mathbb{R}^{n}$ is the direct sum of $\Gamma$ and $\Gamma^{\perp}$**
  ([[def-the-space-of-summing-directions]]).
- **Uniform convergence, the total derivative, and integration over subsets of
  $\mathbb{R}^{n}$** all come later in this track.
- **The classical mean value witness.** The crispest counterexample to the
  equality form of the mean value theorem for vector-valued functions is
  $t \mapsto (\cos t, \sin t)$ on $[0,2\pi]$. The trigonometric functions are
  introduced later in the reading order than this page, so the companion page
  uses the polynomial curve $t \mapsto (t^{2},t^{3})$ on $[0,1]$ instead. The
  substitution is recorded in the companion item that carries the witness, not
  here, so that a reader meeting the polynomial curve is told at once why the
  classical one is absent; the theorem whose equality form it refutes is
  [[thm-mean-value-inequality]].

## 5. The open half of the rearrangement question

[[thm-rearrangement-sums-lie-in-an-affine-subspace]] proves that the set
$\mathcal{S}(x)$ of rearrangement sums of a convergent series in $\mathbb{R}^{n}$
is nonempty and **contained in** the affine subspace $s + \Gamma^{\perp}$, and
[[thm-steinitz-polygonal-confinement]] proves Steinitz's polygonal confinement
lemma in full. **The reverse inclusion is not proved on this page, and this page
asserts nothing about it in either direction, for any $n \ge 2$.** No
recorded-not-proved item has been created for it either.

The obstruction is machinery and not effort. Every route to the reverse inclusion
known to the author of this page reduces first to the case $\Gamma = \{0\}$ by an
orthogonal projection, which needs the orthogonal decomposition named in §4, and
then runs a separation argument for convex sets in $\mathbb{R}^{n}$, which
exists nowhere in this library and is owned by no planned page. When both exist,
the discharge is an **addition to this page**, not a new page.

The published [[rem-rearrangement-in-higher-dimensions]] raised this question on
the series page and declined to state what the literature answers; this page
answers the part it can and continues to decline the rest. What a reader is
protected from meanwhile is the wrong guess: the companion page refutes outright
the naive $\mathbb{R}^{n}$ analogue of the Riemann series theorem, using the
containment half and nothing more.

## 6. A naming collision worth stating once

[[thm-steinitz-polygonal-confinement]] is Steinitz's polygonal confinement lemma
from his 1913 paper on conditionally convergent series. It is **not** the
Steinitz exchange lemma of linear algebra, which is published in this library
under the id `thm-steinitz-exchange` and additionally carries the alias
`lem-steinitz`. The two are different theorems by the same author; the ids do not
collide, and no item on this page uses the bare alias.
````

## Wave 12 provenance row

```json
{
  "id": "rem-rn-conventions-and-scope",
  "statement": "ai-generated",
  "proof": "not-applicable",
  "evidence": "none",
  "urls": [],
  "rationale": "Conventions of this page, the standing $n \\\\ge 1$ hypothesis, and what is taken up elsewhere in the reading order: This is a site-specific inventory of page scope, conventions, and build/read-order status. No literature statement has a counterpart to that corpus-specific composition; its embedded norm conventions were checked separately against the norm sources. The item has no supplied proof component.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

## Exact-current proof contract

No Wave 12 proof contract is required for this target.

## Generated audit-manifest relationships

```json
[
  {
    "source": "rem-rn-conventions-and-scope",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-norm-and-normed-space",
    "declared_target": "def-norm-and-normed-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-rn-conventions-and-scope",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-linear-map",
    "declared_target": "def-linear-map",
    "target_statement_provenance": "literature-derived",
    "targetPage": "linear-maps-rank-nullity-and-quotient-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-rn-conventions-and-scope",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-euclidean-inner-product",
    "declared_target": "def-euclidean-inner-product",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-rn-conventions-and-scope",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-p-norms-on-rn",
    "declared_target": "def-p-norms-on-rn",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-rn-conventions-and-scope",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "lem-p-norms-are-norms-and-induce-the-published-metrics",
    "declared_target": "lem-p-norms-are-norms-and-induce-the-published-metrics",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-rn-conventions-and-scope",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "thm-cauchy-schwarz-and-the-euclidean-norm",
    "declared_target": "thm-cauchy-schwarz-and-the-euclidean-norm",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-rn-conventions-and-scope",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-equivalent-norms",
    "declared_target": "def-equivalent-norms",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-rn-conventions-and-scope",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric",
    "declared_target": "lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-rn-conventions-and-scope",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "thm-all-norms-on-rn-are-equivalent",
    "declared_target": "thm-all-norms-on-rn-are-equivalent",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-rn-conventions-and-scope",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "thm-componentwise-convergence-and-completeness",
    "declared_target": "thm-componentwise-convergence-and-completeness",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-rn-conventions-and-scope",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "cor-bolzano-weierstrass-in-rn",
    "declared_target": "cor-bolzano-weierstrass-in-rn",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-rn-conventions-and-scope",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-vector-valued-functions-limits-and-continuity",
    "declared_target": "def-vector-valued-functions-limits-and-continuity",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-rn-conventions-and-scope",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "thm-componentwise-limits-and-continuity",
    "declared_target": "thm-componentwise-limits-and-continuity",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-rn-conventions-and-scope",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-vector-valued-derivative-and-integral",
    "declared_target": "def-vector-valued-derivative-and-integral",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-rn-conventions-and-scope",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "thm-norm-inequality-for-the-vector-valued-integral",
    "declared_target": "thm-norm-inequality-for-the-vector-valued-integral",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-rn-conventions-and-scope",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "thm-mean-value-inequality",
    "declared_target": "thm-mean-value-inequality",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-rn-conventions-and-scope",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "cor-vector-valued-ftc-and-lipschitz-bound",
    "declared_target": "cor-vector-valued-ftc-and-lipschitz-bound",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-rn-conventions-and-scope",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-series-of-vectors-and-rearrangement",
    "declared_target": "def-series-of-vectors-and-rearrangement",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-rn-conventions-and-scope",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "thm-absolute-convergence-in-rn",
    "declared_target": "thm-absolute-convergence-in-rn",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-rn-conventions-and-scope",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-the-space-of-summing-directions",
    "declared_target": "def-the-space-of-summing-directions",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-rn-conventions-and-scope",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "thm-steinitz-polygonal-confinement",
    "declared_target": "thm-steinitz-polygonal-confinement",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-rn-conventions-and-scope",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "thm-rearrangement-sums-lie-in-an-affine-subspace",
    "declared_target": "thm-rearrangement-sums-lie-in-an-affine-subspace",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-rn-conventions-and-scope",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "lem-metrics-on-rn",
    "declared_target": "lem-metrics-on-rn",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-rn-conventions-and-scope",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "rem-real-exponents-deferred",
    "declared_target": "rem-real-exponents-deferred",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-rn-conventions-and-scope",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-function-space",
    "declared_target": "def-function-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "vector-spaces-and-subspaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-rn-conventions-and-scope",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-rational-power",
    "declared_target": "def-rational-power",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-rn-conventions-and-scope",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "lem-standard-basis-of-f-n",
    "declared_target": "lem-standard-basis-of-f-n",
    "target_statement_provenance": "ai-altered",
    "targetPage": "linear-independence-bases-and-dimension",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-rn-conventions-and-scope",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "thm-euclidean-space-complete",
    "declared_target": "thm-euclidean-space-complete",
    "target_statement_provenance": "ai-altered",
    "targetPage": "completeness-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-rn-conventions-and-scope",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "thm-heine-borel-rn",
    "declared_target": "thm-heine-borel-rn",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness-in-metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-rn-conventions-and-scope",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "thm-minkowski-finite",
    "declared_target": "thm-minkowski-finite",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Relevant current generated-risk rows

```json
[
  {
    "id": "rem-rn-conventions-and-scope",
    "file": "items/rem-rn-conventions-and-scope.md",
    "source": "provenance",
    "cone_size": 7,
    "logical_consumers": [
      "rem-total-derivative-conventions-and-linear-map-seam"
    ],
    "direct_citation_consumers": [
      {
        "id": "cex-the-one-norm-comes-from-no-inner-product",
        "via": [
          "wikilink"
        ]
      },
      {
        "id": "def-euclidean-inner-product",
        "via": [
          "wikilink"
        ]
      },
      {
        "id": "def-norm-and-normed-space",
        "via": [
          "wikilink"
        ]
      },
      {
        "id": "ex-gamma-and-its-complement-computed-for-a-plane-series",
        "via": [
          "wikilink"
        ]
      },
      {
        "id": "rem-total-derivative-conventions-and-linear-map-seam",
        "via": [
          "deps",
          "wikilink"
        ]
      },
      {
        "id": "thm-absolute-convergence-in-rn",
        "via": [
          "wikilink"
        ]
      },
      {
        "id": "thm-rearrangement-sums-lie-in-an-affine-subspace",
        "via": [
          "wikilink"
        ]
      }
    ],
    "disposition": {
      "status": "pending",
      "by": "",
      "notes": ""
    }
  }
]
```

## Full exact-current text of every cited or declared item (31)

### `cor-bolzano-weierstrass-in-rn`

````markdown
---
id: cor-bolzano-weierstrass-in-rn
kind: corollary
title: "For $n \\ge 1$ every bounded sequence in $\\mathbb{R}^n$ has a convergent subsequence"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-all-norms-on-rn-are-equivalent, def-equivalent-norms, thm-heine-borel-rn, thm-compact-implies-the-other-compactness-forms, thm-metric-compactness-equivalences, def-metric-compactness, def-metric-compactness-variants, def-metric-bounded-diameter, def-metric-ball, thm-bolzano-weierstrass, def-dependent-choice, lem-metrics-on-rn, def-metric-convergence, def-sequence, lem-subsequence-inherits-limit, lem-index-map-grows, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, def-norm-and-normed-space, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, def-isometry-and-metric-embedding, thm-of-square-roots, lem-of-abs-value]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Bolzano-Weierstrass theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bolzano%E2%80%93Weierstrass_theorem"
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ with $n \ge 1$ and let $\bigl(x^{(j)}\bigr)_{j\in\mathbb{N}}$
be a sequence in $\mathbb{R}^{n}$ whose range
$\{\, x^{(j)} : j \in \mathbb{N} \,\}$ is a bounded subset of
$(\mathbb{R}^{n}, d_2)$ ([[def-metric-bounded-diameter]], [[lem-metrics-on-rn]]).
Then there are a strictly increasing $i : \mathbb{N} \to \mathbb{N}$
([[def-sequence]], [[lem-index-map-grows]]) and a point $p \in \mathbb{R}^{n}$
with

$$x^{(i_j)} \longrightarrow p \quad \text{in } (\mathbb{R}^{n}, d_2)$$

([[def-metric-convergence]]). By [[thm-all-norms-on-rn-are-equivalent]] the same
statement holds with $d_2$ replaced by the metric of any norm on
$\mathbb{R}^{n}$, boundedness and convergence both being unchanged by that
replacement ([[def-equivalent-norms]]).

**This is assembled from published theorems and is not proved again by
bisection.** The bisection is in [[thm-heine-borel-rn]], published at order 120;
what is added here is the passage from compactness to sequential compactness and
the reading of the conclusion in $\mathbb{R}^{n}$.

**Choice cost: none.** [[thm-heine-borel-rn]] is proved by bisection and uses no
choice principle, and "compact implies sequentially compact" is a theorem of ZF
([[thm-compact-implies-the-other-compactness-forms]]). The five-way equivalence
[[thm-metric-compactness-equivalences]] is **not** used, precisely because it is
stated under countable choice and dependent choice ([[def-dependent-choice]]) and
would overcharge this corollary; the arrow-by-arrow account is
[[rem-compactness-choice-ledger-metric]].

## Facts & Assumptions

**Given:** A natural $n \ge 1$; a sequence $\bigl(x^{(j)}\bigr)$ in $\mathbb{R}^{n}$ whose range is bounded in $(\mathbb{R}^{n},d_2)$.

[L1] Boundedness: a nonempty $A \subseteq X$ is bounded when $A \subseteq B(q,r)$ for some $q \in X$ and real $r > 0$ ([[def-metric-bounded-diameter]], [[def-metric-ball]]).

[L2] $d_2(u,v) = \lVert u-v\rVert_2$, $\lVert\cdot\rVert_2$ is a norm, and $|y_k| \le \lVert y\rVert_2$ for every $k<n$ ([[lem-p-norms-are-norms-and-induce-the-published-metrics]], [[def-p-norms-on-rn]], [[def-norm-and-normed-space]], [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clause 3).

[L3] Closed boxes are compact: for reals $a_k \le b_k$ $(k<n)$ the set $Q = \{\, y \in \mathbb{R}^{n} : a_k \le y_k \le b_k \text{ for every } k<n \,\}$ is a compact subset of $(\mathbb{R}^{n},d_2)$ ([[thm-heine-borel-rn]] clause 1, [[def-metric-compactness]]).

[L4] In ZF, a compact metric space is countably compact and limit point compact, and each of those implies sequential compactness ([[thm-compact-implies-the-other-compactness-forms]], [[def-metric-compactness-variants]]): every sequence in it has a subsequence converging to a point of it.

[L5] A compact subset $A$ of $X$ is one for which the metric subspace $(A,d_A)$ is a compact metric space, $d_A$ being the restriction of $d$ ([[def-metric-compactness]], [[def-isometry-and-metric-embedding]]).

[L6] Convergence in a metric space, and inheritance of limits by subsequences ([[def-metric-convergence]], [[lem-subsequence-inherits-limit]], [[lem-index-map-grows]]).

## Proof

**Proof technique:** direct.

1.1 The range of the sequence is nonempty and bounded, so there are $q \in \mathbb{R}^{n}$ and a real $r > 0$ with $d_2(x^{(j)}, q) < r$ for every $j \in \mathbb{N}$. [L1]

2.1 Put $M := r + \lVert q\rVert_2$, a real with $M > 0$. By the triangle inequality for the norm, $\lVert x^{(j)}\rVert_2 \le \lVert x^{(j)} - q\rVert_2 + \lVert q\rVert_2 = d_2(x^{(j)},q) + \lVert q\rVert_2 < M$ for every $j$. [step 1.1, L2]

3.1 For every $j$ and every $k<n$: $|x^{(j)}_k| \le \lVert x^{(j)}\rVert_2 < M$, hence $-M \le x^{(j)}_k \le M$. [step 2.1, L2]

4.1 Let $Q := \{\, y \in \mathbb{R}^{n} : -M \le y_k \le M \text{ for every } k<n \,\}$. Since $-M \le M$, $Q$ is a compact subset of $(\mathbb{R}^{n},d_2)$, and by step 3.1 every term $x^{(j)}$ lies in $Q$. [step 3.1, L3]

5.1 By [L5] the metric subspace $(Q, d_Q)$ is a compact metric space, and by [L4] it is sequentially compact. [step 4.1, L4, L5]

6.1 $\bigl(x^{(j)}\bigr)$ is a sequence in $Q$, so there are a strictly increasing $i : \mathbb{N} \to \mathbb{N}$ and $p \in Q$ with $x^{(i_j)} \to p$ in $(Q, d_Q)$. [step 4.1, step 5.1, L4, L6]

7.1 Since $d_Q$ is the restriction of $d_2$ to $Q \times Q$, the reals $d_Q(x^{(i_j)}, p)$ and $d_2(x^{(i_j)}, p)$ are equal for every $j$, so $x^{(i_j)} \to p$ in $(\mathbb{R}^{n},d_2)$ as well. [step 6.1, L5, L6]

8.1 So the bounded sequence $\bigl(x^{(j)}\bigr)$ has a subsequence converging in $(\mathbb{R}^{n},d_2)$, which is the claim. [step 6.1, step 7.1] ∎

## Remarks

- **The case $n = 1$ and the published one-dimensional theorem.** $\mathbb{R}^{1}$ is the set of functions $1 \to \mathbb{R}$ and is therefore **not literally** $\mathbb{R}$. The map $\theta : \mathbb{R} \to \mathbb{R}^{1}$ sending $t$ to the function with value $t$ at $0$ is a bijection, and $d_2(\theta(s),\theta(t)) = \sqrt{(s-t)^{2}} = |s-t|$ ([[thm-of-square-roots]], [[lem-of-abs-value]]), so $\theta$ is an isometric bijection onto $\mathbb{R}^{1}$ ([[def-isometry-and-metric-embedding]]). Under that identification this corollary at $n = 1$ and the published [[thm-bolzano-weierstrass]] are the same statement, and neither is used to prove the other: the published theorem is proved on the real line, and the corollary above is proved from Heine-Borel in $\mathbb{R}^{n}$.

- **Boundedness of the sequence is boundedness of its range**, a set, and not a condition on each coordinate separately. The two do agree here: step 3.1 gives one direction, while the reverse follows from $\lVert y\rVert_2\le\iota(n)\lVert y\rVert_\infty$ in [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clause 3 after taking the maximum of the finitely many coordinate bounds. What does **not** follow from bounded coordinates is convergence, and the companion page carries that false statement.

- **What sequential compactness gives and what it does not.** It produces a convergent subsequence and says nothing about the original sequence. A bounded sequence need not converge, and a sequence with a convergent subsequence need not be bounded; both remarks are already recorded for the real line in [[thm-bolzano-weierstrass]].
````

### `cor-vector-valued-ftc-and-lipschitz-bound`

````markdown
---
id: cor-vector-valued-ftc-and-lipschitz-bound
kind: corollary
title: "If $f : [a,b] \\to \\mathbb{R}^m$ is differentiable with integrable $f'$ then $\\int_a^b f' = f(b)-f(a)$; and a bounded derivative makes $f$ Lipschitz"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-vector-valued-derivative-and-integral, def-vector-valued-functions-limits-and-continuity, thm-mean-value-inequality, thm-norm-inequality-for-the-vector-valued-integral, thm-componentwise-limits-and-continuity, thm-ftc-second-part, cor-primitives-of-a-continuous-function, def-lipschitz-holder-contraction, lem-metrics-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, def-p-norms-on-rn, def-norm-and-normed-space, def-oriented-integral, thm-additivity-over-subintervals, def-derivative, cor-bounded-derivative-implies-lipschitz, def-interval, lem-real-line-is-a-metric-space, def-function-limit, lem-of-abs-value, def-limit-point-r]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Fundamental theorem of calculus (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fundamental_theorem_of_calculus"
    - title: "Lipschitz continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lipschitz_continuity"
    - title: "J. Lebl, Basic Analysis I, Section 8.4"
      url: "https://www.jirka.org/ra/html/sec_svthedercont.html"
pipeline_run: null
---

## Statement

Let $m \in \mathbb{N}$ with $m \ge 1$ and let $a, b \in \mathbb{R}$ with $a < b$.

1. **Fundamental theorem, second part, in $\mathbb{R}^{m}$.** Let
   $f : [a,b] \to \mathbb{R}^{m}$ be differentiable at every point of $[a,b]$ as
   a function on $[a,b]$ ([[def-vector-valued-derivative-and-integral]]), and
   suppose $f' : [a,b] \to \mathbb{R}^{m}$ is integrable. Then
   $$\int_a^b f' \;=\; f(b) - f(a).$$
2. **A bounded derivative gives a Lipschitz function.** Let
   $f : [a,b] \to \mathbb{R}^{m}$ be continuous on $[a,b]$ and differentiable at
   every point of $(a,b)$, and let $M \ge 0$ satisfy
   $\lVert f'(t)\rVert_2 \le M$ for every $t \in (a,b)$. Then
   $$\lVert f(t) - f(s)\rVert_2 \;\le\; M\,|t-s| \qquad \text{for all } s,t \in [a,b],$$
   that is, $f$ is Lipschitz with constant $M$ as a map
   $([a,b], d_{\mathbb{R}}) \to (\mathbb{R}^{m}, d_2)$
   ([[def-lipschitz-holder-contraction]], [[lem-real-line-is-a-metric-space]],
   [[lem-metrics-on-rn]]).

## Facts & Assumptions

**Given:** A natural $m \ge 1$, reals $a < b$, and a function $f : [a,b] \to \mathbb{R}^{m}$ with the hypotheses of the clause under discussion; points $s, t \in [a,b]$.

[L1] The vector-valued derivative and integral are componentwise: $f'(c)_i = f_i'(c)$, and $f$ is integrable exactly when every $f_i$ is, with $\bigl(\int_a^b f\bigr)_i = \int_a^b f_i$; equality of two elements of $\mathbb{R}^{m}$ is equality of all their coordinates ([[def-vector-valued-derivative-and-integral]], [[thm-componentwise-limits-and-continuity]]).

[L2] The second fundamental theorem: if $G$ is differentiable on $[a,b]$ with $G' = g$ and $g$ is integrable on $[a,b]$, then $\int_a^b g = G(b)-G(a)$ ([[thm-ftc-second-part]], [[def-derivative]]).

[L3] The mean value inequality on a subinterval ([[thm-mean-value-inequality]]): for $s<t$, $f$ continuous on $[s,t]$ and differentiable on $(s,t)$ with $\lVert f'\rVert_2 \le M$ there, $\lVert f(t)-f(s)\rVert_2 \le M(t-s)$.

[L4] Restricting the domain of a function preserves a limit and its value, the $\varepsilon$-$\delta$ condition then quantifying over fewer points; in particular if $f$ is differentiable at $c$ as a function on $[a,b]$ and $c$ is a limit point of $[s,t] \subseteq [a,b]$, then the restriction of $f$ to $[s,t]$ is differentiable at $c$ with the same derivative ([[def-function-limit]], [[def-vector-valued-functions-limits-and-continuity]], [[def-limit-point-r]], [[def-interval]]).

[L5] Norms and the induced metric: $\lVert w\rVert_2 \ge 0$, $\lVert -w\rVert_2 = \lVert w\rVert_2$, and $d_2(u,w) = \lVert u-w\rVert_2$ ([[def-norm-and-normed-space]], [[def-p-norms-on-rn]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]]); $d_{\mathbb{R}}(s,t) = |s-t|$ and $|t-s| = |s-t|$ ([[lem-real-line-is-a-metric-space]], [[lem-of-abs-value]]).

[L6] Lipschitz maps: $f$ is Lipschitz with constant $L \ge 0$ when $d_Y(f(x),f(x')) \le L\,d_X(x,x')$ for all $x,x'$ ([[def-lipschitz-holder-contraction]]).

## Proof

**Proof technique:** direct.

1.1 Under the hypotheses of clause 1, each component $f_i$ is differentiable at every point of $[a,b]$ with derivative $f_i' = (f')_i$, and each $(f')_i$ is integrable on $[a,b]$. [L1]

1.2 Under the hypotheses of clause 2, if $s < t$ in $[a,b]$ then $f$ restricted to $[s,t]$ is continuous on $[s,t]$ and differentiable at every point of $(s,t)$ with the same derivative, since $(s,t) \subseteq (a,b)$ and every point of $(s,t)$ is a limit point of $[s,t]$. [L4]

2.1 Applying [L2] to $G := f_i$ and $g := (f')_i$ gives $\int_a^b (f')_i = f_i(b)-f_i(a)$ for every $i<m$. [step 1.1, L2]

2.2 Under the hypotheses of clause 2, for $s<t$ in $[a,b]$ the mean value inequality applies on $[s,t]$ and gives $\lVert f(t)-f(s)\rVert_2 \le M(t-s) = M|t-s|$. [step 1.2, L3, L5]

3.1 The $i$-th coordinate of $\int_a^b f'$ is $\int_a^b (f')_i$ and the $i$-th coordinate of $f(b)-f(a)$ is $f_i(b)-f_i(a)$; by step 2.1 these agree for every $i<m$, so the two vectors are equal, which is clause 1. [step 2.1, L1]

3.2 If $s = t$ then $\lVert f(t)-f(s)\rVert_2 = 0 = M|t-s|$; and if $t < s$ then step 2.2 applied with the roles exchanged gives $\lVert f(s)-f(t)\rVert_2 \le M|s-t|$, and $\lVert f(t)-f(s)\rVert_2 = \lVert -(f(s)-f(t))\rVert_2 = \lVert f(s)-f(t)\rVert_2$ while $|s-t| = |t-s|$. [step 2.2, L5]

4.1 Steps 2.2 and 3.2 cover all pairs $s,t \in [a,b]$, so $\lVert f(t)-f(s)\rVert_2 \le M|t-s|$ always; since $d_2(f(t),f(s)) = \lVert f(t)-f(s)\rVert_2$ and $d_{\mathbb{R}}(t,s) = |t-s|$, this is exactly the Lipschitz condition with constant $M \ge 0$, which is clause 2. [step 2.2, step 3.2, L5, L6] ∎

## Remarks

- **Two routes to the mean value inequality, and why the other one was taken.** When $f'$ happens to be integrable, clause 1 together with [[thm-norm-inequality-for-the-vector-valued-integral]] gives $$\lVert f(b)-f(a)\rVert_2 = \Bigl\lVert\int_a^b f'\Bigr\rVert_2 \le \int_a^b \lVert f'\rVert_2 \le M(b-a),$$ the last step by monotonicity of the integral. That is a second proof of [[thm-mean-value-inequality]] **under an extra hypothesis**. The theorem is proved the other way, from the scalar mean value theorem, precisely because it then needs no integrability at all: it applies to every differentiable $f$. The point is not academic — the companion page's witness for the failure of the equality form is differentiable and is nowhere assumed integrable.

- **When is $f'$ integrable?** Continuity of $f'$ suffices, each component being then continuous and hence integrable, which is the classical form of clause 1 and is what [[cor-primitives-of-a-continuous-function]] supplies for the scalar case. Clause 1 as stated is stronger: it asks only for integrability, exactly as [[thm-ftc-second-part]] does.

- **The scalar case of clause 2 is already published** as [[cor-bounded-derivative-implies-lipschitz]], for a function on an order-convex subset of $\mathbb{R}$. Clause 2 is its $\mathbb{R}^{m}$ analogue on a closed bounded interval, and it is proved from the vector mean value inequality rather than by applying the scalar statement coordinatewise, which would give the worse constant $\iota(m)\,M$.

- **Additivity is not needed above but is available**, so that clause 1 may be applied on any subinterval and the pieces reassembled ([[thm-additivity-over-subintervals]], [[def-oriented-integral]]).
````

### `def-equivalent-norms`

````markdown
---
id: def-equivalent-norms
kind: definition
title: "Equivalent norms, and the dictionary with equivalent metrics"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-norm-and-normed-space, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, def-equivalent-metrics, thm-metric-equivalence-hierarchy, def-metric-topology, def-metric-convergence, def-cauchy-in-metric, def-metric-uniform-continuity, lem-bounded-remetrisation, def-vector-space, lem-of-inverse-positive]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Norm (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Norm_(mathematics)"
    - title: "Equivalence of metrics (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equivalence_of_metrics"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Definition

Let $V$ be a vector space over $\mathbb{R}$ ([[def-vector-space]]) and let $M$
and $N$ be norms on $V$ ([[def-norm-and-normed-space]]). $M$ and $N$ are
**equivalent** when there are reals $c > 0$ and $C > 0$ with

$$c\,M(v) \;\le\; N(v) \;\le\; C\,M(v) \qquad \text{for every } v \in V .$$

The constants are not part of the data and are not unique: any smaller $c$ and
any larger $C$ serve as well.

### This is an equivalence relation on the norms on $V$

- **Reflexive:** take $c = C = 1$.
- **Symmetric:** from $cM \le N \le CM$ and $c, C > 0$ one gets
  $C^{-1}N \le M \le c^{-1}N$, dividing by the positive constants
  ([[lem-of-inverse-positive]]).
- **Transitive:** if $cM \le N \le CM$ and $c'N \le P \le C'N$ then
  $c'c\,M \le P \le C'C\,M$, and $c'c > 0$, $C'C > 0$, a product of positives
  being positive.

### The dictionary with equivalent metrics

Let $d_M(u,v) = M(u-v)$ and $d_N(u,v) = N(u-v)$ be the induced metrics
([[def-norm-and-normed-space]]). Substituting $v := u - w$ in the displayed
condition gives

$$c\,d_M(u,w) \;\le\; d_N(u,w) \;\le\; C\,d_M(u,w) \qquad \text{for all } u, w \in V ,$$

which is **verbatim the Lipschitz equivalence** of $d_M$ and $d_N$ in the sense
of [[def-equivalent-metrics]], with $\alpha = c$ and $\beta = C$. That is the
**strongest** of the three tiers that item distinguishes: by
[[thm-metric-equivalence-hierarchy]], Lipschitz equivalence implies uniform
equivalence, which implies topological equivalence. So equivalent norms give

- the same open sets, hence the same closed sets, closures and interiors
  ([[def-metric-topology]]);
- the same uniformly continuous maps into and out of $V$
  ([[def-metric-uniform-continuity]]);
- the same convergent sequences with the same limits, and the same Cauchy
  sequences ([[def-metric-convergence]], [[def-cauchy-in-metric]]).

The last line deserves its two-line verification, since it is used constantly
below and is not literally a clause of [[thm-metric-equivalence-hierarchy]]. If
$d_M(v_k, v) \to 0$ then $0 \le d_N(v_k,v) \le C\,d_M(v_k,v)$, so given a
rational $\varepsilon > 0$ an index beyond which $d_M(v_k,v) < \varepsilon/C$
serves for $d_N$; the converse uses $d_M \le c^{-1}d_N$ in the same way. The
Cauchy statement is the same estimate applied to $d_N(v_k,v_l)$. In particular
$(V, d_M)$ is complete if and only if $(V,d_N)$ is.

**Naming.** Many texts say *strongly equivalent* for what
[[def-equivalent-metrics]] calls Lipschitz equivalent, and simply *equivalent*
for what it calls topologically equivalent. As there, this library always writes
the qualifier for metrics. For **norms** there is no fork to guard against: the
condition displayed above is the only one anyone calls equivalence of norms, and
it is always the Lipschitz-strength one.

## Remarks

- **The converse of the dictionary fails.** A metric on $V$ that is equivalent to
  a norm metric need not itself come from a norm: [[lem-bounded-remetrisation]]
  turns any metric $d$ into $d' = \min\{d,1\}$, uniformly equivalent to $d$ and
  bounded, and a bounded metric on a nonzero vector space is not induced by any
  norm, since absolute homogeneity would make $d'(\lambda v, 0)$ unbounded in
  $\lambda$ ([[def-norm-and-normed-space]]). So "equivalent to a norm metric" is
  strictly weaker than "induced by an equivalent norm".

- **Equivalence is a statement about a fixed vector space.** Two norms on
  different spaces are never compared. On $\mathbb{R}^{n}$ with $n \ge 1$ the
  norms $\lVert\cdot\rVert_1$, $\lVert\cdot\rVert_2$ and
  $\lVert\cdot\rVert_\infty$ of [[def-p-norms-on-rn]] are equivalent, with
  explicit constants proved in
  [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]]; that every
  pair of norms on $\mathbb{R}^{n}$ is equivalent is
  [[thm-all-norms-on-rn-are-equivalent]]. Neither statement survives to spaces
  that are not finite-dimensional, and the companion page carries the witness.

- **Equivalence says nothing about the geometry.** Equivalent norms have the same
  convergent sequences and the same open sets; they may still have quite
  different unit balls, and one of them may come from an inner product while the
  other does not. [[lem-p-norms-are-norms-and-induce-the-published-metrics]]
  records the metric identifications and nothing more.
````

### `def-euclidean-inner-product`

````markdown
---
id: def-euclidean-inner-product
kind: definition
title: "The Euclidean inner product $\\langle x,y\\rangle = \\sum_{k<n} x_k y_k$ on $\\mathbb{R}^n$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-norm-and-normed-space, def-function-space, def-vector-space, lem-standard-basis-of-f-n, def-finite-sum, lem-finite-sum-laws, lem-metrics-on-rn, lem-of-square-positive, thm-of-square-roots, def-natural-numbers, lem-nat-order-is-membership, def-integer-power, lem-power-laws]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Dot product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dot_product"
    - title: "Euclidean space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Euclidean_space"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Definition

Let $n \in \mathbb{N}$. A natural number is a von Neumann natural, that is a set,
and $n = \{0, 1, \dots, n-1\}$ ([[def-natural-numbers]],
[[lem-nat-order-is-membership]]), so

$$\mathbb{R}^{n} \;=\; \{\, x \;:\; x \text{ is a function } n \to \mathbb{R} \,\}$$

is the function space of [[def-function-space]] at $F = \mathbb{R}$ and $X = n$,
a vector space over $\mathbb{R}$ under the pointwise operations
([[def-vector-space]]). We write $x_k := x(k)$ for $k < n$, and two elements of
$\mathbb{R}^{n}$ are equal exactly when they agree at every $k < n$. This is the
same set that [[lem-metrics-on-rn]] calls $\mathbb{R}^{n}$.

The **Euclidean inner product** of $x, y \in \mathbb{R}^{n}$ is the real number

$$\langle x, y\rangle \;:=\; \sum_{k<n} x_k\,y_k ,$$

the finite sum of [[def-finite-sum]] applied to the list $k \mapsto x_k y_k$
(extended by $0$ beyond $n$, as every finite list in this library is). The
**Euclidean norm** of $x$ is

$$\lVert x\rVert_2 \;:=\; \sqrt{\langle x, x\rangle},$$

which is defined because $\langle x,x\rangle = \sum_{k<n} x_k^{2} \ge 0$ (a sum
of nonnegative terms, [[lem-finite-sum-laws]] clause 4 and
[[lem-of-square-positive]], the case $x_k = 0$ giving $x_k^2 = 0$ by
[[def-integer-power]]) and every nonnegative real has a unique nonnegative square
root ([[thm-of-square-roots]]).

### Both are defined for every $n$, including $n = 0$

At $n = 0$ the set $\mathbb{R}^{0}$ has exactly one element, the empty function,
and it is the zero vector space ([[lem-standard-basis-of-f-n]] clause 5); the sum
above is the empty sum, so $\langle x,y\rangle = 0$ and $\lVert x\rVert_2 = 0$.
**This is the first place on this page where the two index regimes diverge, and
the divergence is deliberate.** The published metrics $d_1$, $d_2$, $d_\infty$ of
[[lem-metrics-on-rn]] are defined only for $n \ge 1$, because $d_\infty$ would
otherwise be a maximum over the empty index set; the algebra above needs no such
restriction. The boundary in this page runs between the algebra and the metric,
not where a reader would guess, and [[rem-rn-conventions-and-scope]] lists
exactly which items inherit $n \ge 1$.

### The algebra of the inner product

For all $x, y, z \in \mathbb{R}^{n}$ and $\lambda \in \mathbb{R}$:

1. **Symmetry.** $\langle x,y\rangle = \langle y,x\rangle$, since $x_ky_k = y_kx_k$
   termwise.
2. **Additivity in the first argument.**
   $\langle x + y, z\rangle = \langle x,z\rangle + \langle y,z\rangle$: the list
   $k \mapsto (x_k+y_k)z_k$ is the termwise sum of $k \mapsto x_kz_k$ and
   $k \mapsto y_kz_k$, so [[lem-finite-sum-laws]] clause 1 applies.
3. **Homogeneity in the first argument.**
   $\langle \lambda x, y\rangle = \lambda\langle x,y\rangle$, by
   [[lem-finite-sum-laws]] clause 2.
4. **Bilinearity.** Clauses 2 and 3 together with symmetry give the same two laws
   in the second argument.
5. **Positive definiteness.** $\langle x,x\rangle \ge 0$, and
   $\langle x,x\rangle = 0$ if and only if $x = 0$. Indeed a vanishing sum of
   nonnegative terms has every term $0$ ([[lem-finite-sum-laws]] clause 4), so
   $x_k^{2} = 0$ for every $k < n$, and a nonzero real has a positive square
   ([[lem-of-square-positive]]), whence $x_k = 0$ for every $k < n$ and $x = 0$.
6. **Agreement with the published Euclidean metric.** For $n \ge 1$ and
   $x, y \in \mathbb{R}^{n}$,
   $\lVert x - y\rVert_2 = \sqrt{\sum_{k<n}(x_k-y_k)^{2}} = d_2(x,y)$, the two
   sides being the same expression ([[lem-metrics-on-rn]]). In particular
   $\lVert x\rVert_2 = d_2(x, 0)$.

That $\lVert\cdot\rVert_2$ is a norm in the sense of [[def-norm-and-normed-space]]
is proved in [[thm-cauchy-schwarz-and-the-euclidean-norm]], where the triangle
inequality is obtained from the Cauchy-Schwarz inequality; it is not assumed
here.

## Remarks

- **Scope: the concrete form only.** What is defined above is the Euclidean inner
  product on $\mathbb{R}^{n}$ and nothing more. The general theory of inner
  product spaces — abstract inner products, orthonormal bases, Gram-Schmidt,
  orthogonal projection and orthogonal complements of arbitrary subspaces — is
  planned for a page of this library that comes **earlier in the plan order** and
  is not yet built. No item on this page claims anything about abstract inner
  product spaces, and no item on this page introduces the general notion.

- **The standard basis and coordinates.** For $i < n$ the standard unit vector
  $e_i \in \mathbb{R}^{n}$ has $e_i(i) = 1$ and $e_i(j) = 0$ for $j \ne i$
  ([[lem-standard-basis-of-f-n]]). Then $\langle x, e_i\rangle = x_i$: the list
  $k \mapsto x_k (e_i)_k$ vanishes except at $k = i$, where its value is $x_i$,
  and a list vanishing off one index sums to its value there
  ([[lem-finite-sum-laws]] clause 3, splitting the range at $i$). So the
  coordinates of $x$ are recovered by testing against the standard basis, which
  is the form used repeatedly below.

- **Powers here are integer powers.** $x_k^{2}$ means the integer power of
  [[def-integer-power]], and $\lVert x\rVert_2^{2} = \langle x,x\rangle$ by
  [[thm-of-square-roots]] and [[lem-power-laws]].
````

### `def-function-space`

````markdown
---
id: def-function-space
kind: definition
title: "The vector space $F^{X}$ of all functions $X \\to F$ with pointwise operations, and $F^{n}$ as the case $X = n = \\{0, 1, \\dots, n-1\\}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-vector-space, def-field, def-binary-operation, def-natural-numbers, lem-nat-order-is-membership]
justified_by: []
aliases: [def-coordinate-space, def-tuple-space]
landmark: true
short: "$F^{X}$, $F^{n}$"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Function space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Function_space"
    - title: "Examples of vector spaces (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Examples_of_vector_spaces"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed. (free PDF, CC BY-NC)"
      url: "https://linear.axler.net/LADR4e.pdf"
pipeline_run: null
---

## Definition

Let $F$ be a field ([[def-field]]) and let $X$ be any set. Write

$$F^{X} \;:=\; \{\, f \;:\; f \text{ is a function } X \to F \,\},$$

and for $f \in F^{X}$ write $f(x)$ for its value at $x \in X$. Two elements of
$F^{X}$ are equal exactly when they agree at every point of $X$. Define

$$(f + g)(x) \;:=\; f(x) + g(x), \qquad (\lambda f)(x) \;:=\; \lambda\, f(x), \qquad 0_{F^{X}}(x) \;:=\; 0_F,$$

for $f, g \in F^{X}$, $\lambda \in F$ and $x \in X$, the operations on the right
being those of $F$. These are the **pointwise** operations.

**These rules really are the required data.** For $f, g \in F^{X}$ the assignment
$x \mapsto f(x) + g(x)$ is a function $X \to F$, so $+$ is a binary operation
$F^{X} \times F^{X} \to F^{X}$ ([[def-binary-operation]]); for $\lambda \in F$ and
$f \in F^{X}$ the assignment $x \mapsto \lambda f(x)$ is a function $X \to F$, so
scalar multiplication is a map $F \times F^{X} \to F^{X}$; and $0_{F^{X}}$, the
constant function at $0_F$, is an element of $F^{X}$.

**$F^{X}$ is a vector space over $F$** ([[def-vector-space]]). Each axiom is an
equation between elements of $F^{X}$, hence holds exactly when it holds at every
$x \in X$ after evaluation, and there it is the corresponding field axiom applied
to the values $f(x), g(x), \lambda, \mu$:

- associativity and commutativity of $+$, and $f + 0_{F^{X}} = f$, come from the
  same laws for $+$ in $F$; the additive inverse of $f$ is $x \mapsto -f(x)$,
  which lies in $F^{X}$ and satisfies $f + (-f) = 0_{F^{X}}$ pointwise. This is
  axiom (V1);
- $\bigl(\lambda(f+g)\bigr)(x) = \lambda(f(x)+g(x)) = \lambda f(x) + \lambda g(x)$
  is (V2), by distributivity in $F$;
- $\bigl((\lambda+\mu)f\bigr)(x) = (\lambda+\mu)f(x) = \lambda f(x) + \mu f(x)$ is
  (V3), by distributivity in $F$;
- $\bigl((\lambda\mu)f\bigr)(x) = (\lambda\mu)f(x) = \lambda(\mu f(x))$ is (V4),
  by associativity of multiplication in $F$;
- $(1_F f)(x) = 1_F f(x) = f(x)$ is (V5), by the multiplicative identity law
  in $F$.

### The case $X = n$

A natural number is a von Neumann natural ([[def-natural-numbers]]), that is a
set, and $n = \{\, m \in \mathbb{N} : m < n \,\} = \{0, 1, \dots, n-1\}$
([[lem-nat-order-is-membership]]). Taking $X = n$ therefore gives

$$F^{n} \;=\; \{\, x \;:\; x \text{ is a function } n \to F \,\},$$

whose elements are written $x = (x_0, x_1, \dots, x_{n-1})$ with $x_i := x(i)$ for
$i < n$. **The coordinates are indexed from $0$**, because $0 \in n$ whenever
$n \ne 0$ and $n \notin n$ always. The operations read

$$(x + y)_i = x_i + y_i, \qquad (\lambda x)_i = \lambda x_i \qquad (i < n),$$

and the zero of $F^{n}$ is the tuple all of whose coordinates are $0_F$.

**The two boundary cases.** $\mathbb{N}$ contains $0$, so $n = 0$ is a genuine
case. Since $0 = \varnothing$, the set $F^{0} = F^{\varnothing}$ has exactly one
element, the empty function; that element is $0_{F^{0}}$, so $F^{0}$ is the
**zero space** $\{0_{F^{0}}\}$, not the empty set. For $n = 1$ we have
$1 = \{0\}$, and the map $F^{1} \to F$ sending $x$ to its single coordinate $x_0$
is a bijection satisfying $(x+y)_0 = x_0 + y_0$ and $(\lambda x)_0 = \lambda x_0$;
we use it to read $F^{1}$ as $F$ where convenient. (No general notion of
isomorphism of vector spaces is available on this page, and none is claimed here:
what is asserted is exactly the displayed bijection and the two displayed
equations.)

## Remarks

- **The same set $F^{X}$ also carries a ring structure, and the two must not be
  conflated.** For a ring $R$ and a set $X$, [[def-ring-of-functions]] equips the
  set $R^{X}$ of all functions $X \to R$ with pointwise addition and pointwise
  multiplication. Taking $R = F$, the underlying set is literally the same set
  $F^{X}$ as here, and **the addition is literally the same operation**,
  $(f+g)(x) = f(x) + g(x)$ in both. What differs is the second operation:

  | | second operation | type |
  |---|---|---|
  | ring of functions | $(fg)(x) = f(x)\,g(x)$ | $F^{X} \times F^{X} \to F^{X}$ |
  | vector space (here) | $(\lambda f)(x) = \lambda\, f(x)$ | $F \times F^{X} \to F^{X}$ |

  Neither is a special case of the other, since they do not even have the same
  domain: one multiplies two functions, the other multiplies a function by a
  scalar. They agree in the following sense, and this is the whole of the
  relation between them: for $\lambda \in F$ let $c_\lambda \in F^{X}$ be the
  constant function at $\lambda$; then $\lambda f$ and the ring product
  $c_\lambda f$ have the same value $\lambda f(x)$ at every $x$, so they are
  equal. Both structures are present on $F^{X}$ at once, and nothing on this page
  uses the ring product.

- **Why $F^{n}$ is defined this way rather than as "$n$-tuples".** An $n$-tuple is
  already a function on an index set, and taking that index set to be the natural
  number $n$ itself makes the coordinates, the finite sums of
  [[def-monoid-finite-product]] and the induction arguments below all run over the
  same object. The price is that every index starts at $0$, and that $F^{0}$ is a
  one-element space; both are recorded above so that no statement on this page or
  its companion is quietly restricted to $n \ge 1$.

- **$X$ is arbitrary.** Nothing above assumes $X$ finite, countable, or nonempty.
  The case $X = \mathbb{N}$ gives the space of all families of scalars indexed by
  $\mathbb{N}$, and the case $X = m \times n$ gives the matrices of
  [[def-matrix-space]].
````

### `def-linear-map`

````markdown
---
id: def-linear-map
kind: definition
title: "Linear map between vector spaces over the same field"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-vector-space, def-field]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-03
sources:
  scraped: []
  references:
    - title: "Axler, Linear Algebra Done Right, Chapter 3"
      url: "https://linear.axler.net/LADR4e.pdf"
pipeline_run: null
---

## Definition

Let $V$ and $W$ be vector spaces over the same field $F$. A function
$T:V\to W$ is **linear** when

$$T(au+bv)=aT(u)+bT(v)$$

for all $a,b\in F$ and $u,v\in V$. Such a function is a **linear map**, or
**linear transformation**.
````

### `def-norm-and-normed-space`

````markdown
---
id: def-norm-and-normed-space
kind: definition
title: "A norm on a real vector space, the induced metric, and the dictionary with the metric axioms"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-vector-space, def-function-space, def-linear-map, def-metric-space, lem-metric-nonnegativity, def-metric-topology, lem-bounded-remetrisation, rem-metric-axiom-conventions, def-abs-value, lem-of-abs-value, lem-of-triangle-inequality, def-complete-ordered-field, lem-vector-space-elementary-consequences]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Norm (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Norm_(mathematics)"
    - title: "Normed vector space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normed_vector_space"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Definition

Throughout this page $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]) constructed in this library, in particular a
field, so that "vector space" below always means vector space over $\mathbb{R}$
([[def-vector-space]]).

Let $V$ be a vector space over $\mathbb{R}$, with zero vector $0_V$. A **norm on
$V$** is a function $N : V \to \mathbb{R}$ such that for all $u, v \in V$ and all
$\lambda \in \mathbb{R}$:

- **(N1) Separation.** $N(v) = 0$ if and only if $v = 0_V$.
- **(N2) Absolute homogeneity.** $N(\lambda v) = |\lambda|\,N(v)$, the absolute
  value being that of [[def-abs-value]].
- **(N3) Triangle inequality.** $N(u + v) \le N(u) + N(v)$.

A **normed space** is a pair $(V, N)$ consisting of a vector space $V$ over
$\mathbb{R}$ and a norm $N$ on it. When only one norm is in play we write
$\lVert v\rVert$ for $N(v)$; when several are, the norm is always named.

**The values of a norm are real numbers.** The codomain is $\mathbb{R}$, so
$N(v)$ is an honest element of the complete ordered field and no infinite value
is permitted. This is the same convention [[rem-metric-axiom-conventions]]
records for metrics.

### Nonnegativity is a theorem, not an axiom

Many texts add a fourth condition $N(v) \ge 0$. It is redundant. Applying (N2)
with $\lambda = -1$ gives $N(-v) = |-1|\,N(v) = N(v)$ ([[lem-of-abs-value]],
[[lem-vector-space-elementary-consequences]] for $(-1)v = -v$), and then (N3)
with $u = v$ and $-v$ gives

$$0 \;=\; N(0_V) \;=\; N\bigl(v + (-v)\bigr) \;\le\; N(v) + N(-v) \;=\; N(v) + N(v),$$

where $N(0_V) = 0$ is (N1). So $N(v) + N(v) \ge 0$, and if $N(v) < 0$ then
$N(v) + N(v) < 0$ by addition of inequalities, which trichotomy forbids
([[def-complete-ordered-field]]). Hence $N(v) \ge 0$ for every $v \in V$.

**Consequently the verification of a candidate norm has three things to check and
not four**, exactly as the verification of a candidate metric has three and not
four ([[def-metric-space]], [[lem-metric-nonnegativity]]). No item in this
library assumes nonnegativity of a norm before the argument above.

### The induced metric

Let $N$ be a norm on $V$ and define

$$d_N(u,v) \;:=\; N(u - v) \qquad (u, v \in V),$$

where $u - v = u + (-v)$ ([[def-vector-space]]). **Then $d_N$ is a metric on
$V$** ([[def-metric-space]]), and the three axioms are the three conditions
above, in order:

- **(M1)** $d_N(u,v) = 0$ means $N(u-v) = 0$, which by (N1) says $u - v = 0_V$,
  that is $u = v$; and conversely $d_N(v,v) = N(0_V) = 0$.
- **(M2)** $d_N(v,u) = N(v-u) = N\bigl((-1)(u-v)\bigr) = |-1|\,N(u-v) = d_N(u,v)$,
  by (N2), [[lem-of-abs-value]] and $(-1)w = -w$
  ([[lem-vector-space-elementary-consequences]]).
- **(M3)** $d_N(u,w) = N\bigl((u-v) + (v-w)\bigr) \le N(u-v) + N(v-w) = d_N(u,v) + d_N(v,w)$,
  by (N3).

A normed space is therefore a metric space, and every notion defined for metric
spaces — open set ([[def-metric-topology]]), convergence, Cauchyness,
continuity, compactness — is available in it with no further definition. **This
library never introduces a second notion of any of them for normed spaces.**

### Two properties an arbitrary metric need not have

The metric $d_N$ satisfies, for all $u, v, w \in V$ and $\lambda \in \mathbb{R}$:

- **translation invariance**, $d_N(u + w, v + w) = N\bigl((u+w)-(v+w)\bigr) = N(u-v) = d_N(u,v)$;
- **absolute homogeneity**, $d_N(\lambda u, \lambda v) = N\bigl(\lambda(u-v)\bigr) = |\lambda|\,d_N(u,v)$, by (N2).

**Not every metric on a vector space arises from a norm**, and homogeneity is
what fails. The published bounded remetrisation [[lem-bounded-remetrisation]]
replaces a metric $d$ by $d' = \min\{d, 1\}$, a metric with the same topology
whose values never exceed $1$; on a vector space $V$ containing a vector $v$ with
$d(v, 0_V) > 0$ this $d'$ cannot be $d_M$ for any norm $M$, since absolute
homogeneity would force $d'(\lambda v, 0_V) = |\lambda|\,d'(v, 0_V)$, which is
unbounded in $\lambda$, while $d'$ is bounded by $1$. So the passage from norms
to metrics is not reversible, and a statement about a metric on a vector space is
strictly weaker than the corresponding statement about a norm.

## Remarks

- **Why (N1) is stated as an equivalence.** The direction $N(0_V) = 0$ is forced
  by (N2) with $\lambda = 0$, since $0\,v = 0_V$
  ([[lem-vector-space-elementary-consequences]]) gives $N(0_V) = |0|\,N(v) = 0$.
  Only the direction "$N(v) = 0$ implies $v = 0_V$" is a genuine assumption, and
  dropping it gives what is usually called a seminorm, a notion this library does
  not use. The situation is exactly the one [[rem-metric-axiom-conventions]]
  describes for (M1) and the pseudometric.

- **The zero space carries exactly one norm.** If $V = \{0_V\}$ then the only
  function $V \to \mathbb{R}$ satisfying (N1) is the one with value $0$, and it
  satisfies (N2) and (N3) trivially. In particular $\mathbb{R}^{0}$, the function
  space on the empty index set ([[def-function-space]]), is a normed space,
  although the metrics of the published metric theory on $\mathbb{R}^n$ are
  defined only for $n \ge 1$.

- **What is not defined here.** This item does not define linear maps; their
  published definition is [[def-linear-map]]. It also does not define operator
  norms, dual spaces, or abstract inner product spaces.
  [[rem-rn-conventions-and-scope]] records the remaining scope boundaries and
  what each later development would license.
````

### `def-p-norms-on-rn`

````markdown
---
id: def-p-norms-on-rn
kind: definition
title: "The $p$-norms $\\lVert x\\rVert_p$ for rational $p \\ge 1$, and $\\lVert x\\rVert_\\infty$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-norm-and-normed-space, def-euclidean-inner-product, def-rational-power, lem-rational-power-well-defined, lem-rational-power-laws, lem-rational-power-monotone, rem-real-exponents-deferred, thm-minkowski-finite, def-finite-sum, lem-finite-sum-laws, lem-finite-set-has-max, def-max-min, lem-metrics-on-rn, def-abs-value, lem-of-abs-value, thm-of-square-roots]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Lp space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lp_space"
    - title: "Norm (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Norm_(mathematics)"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Definition

Let $n \in \mathbb{N}$ and let $\mathbb{R}^{n}$ be the function space of
[[def-euclidean-inner-product]], with $x_k := x(k)$ for $k < n$.

### The $p$-norm, for a rational exponent $p \ge 1$

Let $p \in \mathbb{Q}$ with $p \ge 1$. For $x \in \mathbb{R}^{n}$ put

$$\lVert x\rVert_p \;:=\; \Bigl(\sum_{k<n} |x_k|^{p}\Bigr)^{1/p},$$

where $|\cdot|$ is the absolute value ([[def-abs-value]]), the sum is the finite
sum of [[def-finite-sum]], and both powers are the **rational** powers of
[[def-rational-power]].

**Every power written here is defined.** Each base $|x_k|$ is a nonnegative real
and $p > 0$, so $|x_k|^{p}$ is given by [[def-rational-power]] for $|x_k| > 0$
and by its supplementary clause $0^{p} = 0$ for $|x_k| = 0$; the sum of these
nonnegative terms is nonnegative ([[lem-finite-sum-laws]] clause 4), and
$1/p$ is a positive rational, so the outer power is defined for the same two
reasons. The value does not depend on which representative of $p$ or of $1/p$ is
used ([[lem-rational-power-well-defined]]).

**The exponent is a rational, and that is not a matter of taste.**
[[def-rational-power]] supplies $a^{r}$ for a nonnegative base and a **rational**
exponent only; real exponents do not exist at this point in the reading order,
and [[rem-real-exponents-deferred]] records exactly why. This is also why the
published Minkowski inequality [[thm-minkowski-finite]], which is what makes the
triangle inequality work below, is itself stated for rational $p \ge 1$. **No
statement on this page is written for $p$ ranging over a real interval.**

### The maximum norm

For $n \ge 1$ and $x \in \mathbb{R}^{n}$ put

$$\lVert x\rVert_\infty \;:=\; \max\{\, |x_k| \;:\; k < n \,\},$$

the maximum of a nonempty finite set of reals, which exists and is one of its
elements ([[lem-finite-set-has-max]], [[def-max-min]]).

**The hypothesis $n \ge 1$ is required and propagates.** At $n = 0$ the set
$\{|x_k| : k<n\}$ is empty and has no maximum ([[def-max-min]]). This is the same
restriction the published [[lem-metrics-on-rn]] carries, for the same reason, and
**every statement on this page that mentions $\lVert\cdot\rVert_\infty$ inherits
it**. The $p$-norms for rational $p \ge 1$ carry no such restriction: at $n = 0$
each is the empty sum raised to a positive rational power, hence $0$.

### The three cases the rest of the page uses

- $\lVert x\rVert_1 = \sum_{k<n}|x_k|$, since $t^{1} = t$ for $t \ge 0$
  ([[lem-rational-power-laws]], and $0^{1} = 0$ by the supplementary clause).
- $\lVert x\rVert_2 = \bigl(\sum_{k<n}|x_k|^{2}\bigr)^{1/2} = \sqrt{\sum_{k<n}x_k^{2}}$,
  which is exactly the Euclidean norm of [[def-euclidean-inner-product]]: the
  exponent $2$ agrees with the integer power, so $|x_k|^{2} = x_k^{2}$
  ([[lem-of-abs-value]]), and $t^{1/2}$ is the unique nonnegative square root of
  $t$, which is $\sqrt{t}$ ([[def-rational-power]], [[thm-of-square-roots]]).
  **The two notations denote the same function and no second Euclidean norm is
  introduced.**
- $\lVert x\rVert_\infty$ as above, for $n \ge 1$.

That each of these is a norm in the sense of [[def-norm-and-normed-space]], and
that the metrics they induce are exactly the published $d_1$, $d_2$ and
$d_\infty$ of [[lem-metrics-on-rn]], is
[[lem-p-norms-are-norms-and-induce-the-published-metrics]]; it is proved there
and is not assumed here.

## Remarks

- **Why $p \ge 1$.** The triangle inequality for $\lVert\cdot\rVert_p$ is
  Minkowski's inequality, and [[thm-minkowski-finite]] is stated for rational
  $p \ge 1$. For $0 < p < 1$ the displayed expression is still defined but is not
  a norm on $\mathbb{R}^{n}$ for $n \ge 2$; nothing on this page asserts anything
  about that range, and the expression is never written with such an exponent.

- **Monotonicity in the base is what makes the comparisons below work.** For a
  fixed positive rational $r$ the map $a \mapsto a^{r}$ is strictly increasing on
  the positive reals ([[lem-rational-power-monotone]] clause 2), so an inequality
  between nonnegative sums passes through the outer power. That is the only
  property of rational powers used in the comparison chain of
  [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]].

- **The subscript $\infty$ is a name, not a number.** No arithmetic is performed
  with it, and $\lVert\cdot\rVert_\infty$ is not $\lVert\cdot\rVert_p$ for any
  exponent; it is a separately defined function that happens to sit at the end of
  the family. This is the same refusal to extend $\mathbb{R}$ silently that
  [[def-interval]] records for the interval notation.
````

### `def-rational-power`

````markdown
---
id: def-rational-power
kind: definition
title: "Rational powers $a^r$ of a positive base"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-nth-roots-exist, def-integer-power, def-rationals, lem-rat-positive-denominator, lem-nat-embeds-int, def-rat-order, lem-power-monotone, lem-power-laws, lem-of-inverse-positive]
justified_by: [lem-rational-power-well-defined]
aliases: []
landmark: true
short: "$a^{m/n} := (a^{1/n})^m$, $a>0$"
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-04
    scope: published-audit-targeted
    context_sha256: 22067f1978d2f781dd7327a6f5c81cccbbc2009bd13885930f7d56ba5a2ceb5e
    item_sha256: 4f75fe6e8c39549d9a1c82a4fc920d13b890d3917b367621daddcaf70f377565
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I"
      url: "https://www.jirka.org/ra/realanal.pdf"
    - title: "Radicals and rational exponents (Emory University)"
      url: "https://mathcenter.oxford.emory.edu/site/math100/radicals/"
    - title: "Exponentiation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Exponentiation"
    - title: "Nth root (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nth_root"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Let $a \in \mathbb{R}$ with $a > 0$ and let $r \in \mathbb{Q}$ ([[def-rationals]]).

Every rational has a representative with positive denominator
([[lem-rat-positive-denominator]]), so write $r = m/n$ with $m \in \mathbb{Z}$
and $n$ a positive integer; a positive integer is the image of a unique natural
$\ge 1$ ([[lem-nat-embeds-int]]), and we write $n$ for that natural too. Define

$$a^{r} := \big(a^{1/n}\big)^{m},$$

where $a^{1/n}$ is the unique nonnegative $n$-th root of $a$
([[thm-nth-roots-exist]]) and the outer exponent is an integer power
([[def-integer-power]]). The outer power is legitimate because $a^{1/n} > 0$ when
$a > 0$, so it has an inverse and negative integer exponents are allowed.

**Well-definedness.** The right-hand side must not depend on which representative
$m/n$ of $r$ was chosen. It does not: that is [[lem-rational-power-well-defined]],
which is recorded in this item's `justified_by` rather than in its `deps`, since
it is a statement *about* the operation defined here and therefore depends on
this definition.

**The base must be positive.** For $a < 0$ the same formula is not a definition
at all, because different representatives of the same rational give different
answers, or no answer: see [[fs-rational-power-of-negative-base]], which is
exactly the item that justifies the restriction.

**Supplementary clause for the base $0$.** For $a = 0$ and rational $r > 0$
([[def-rat-order]]) the displayed formula still makes sense and still does not
depend on the representative: $r > 0$ forces $m \ge 1$, and
$\big(0^{1/n}\big)^{m} = 0^{m} = 0$ ([[thm-nth-roots-exist]] applies to every
$a \ge 0$). So we set $0^{r} = 0$ for rational $r > 0$. For $r < 0$ the
expression $0^{r}$ is left undefined, since $0$ has no inverse. This clause is
what lets the inequalities later on this page be stated for nonnegative entries
rather than for positive ones only.

## Remarks

- **Consistency with integer powers.** If $r \in \mathbb{Z}$ then $r = r/1$,
  $a^{1/1} = a$ ([[thm-nth-roots-exist]]), and the definition returns
  $(a^{1})^{r} = a^{r}$ as given by [[def-integer-power]]. So the notation $a^{r}$
  is unambiguous, and rational powers extend integer powers on positive bases.
  At $r = 1/n$ it returns $\big(a^{1/n}\big)^{1} = a^{1/n}$, so the root notation
  of [[thm-nth-roots-exist]] is the special case $r = 1/n$, as intended.
- $a^{r} > 0$ for every $a > 0$ and **every** $r \in \mathbb{Q}$, the exponent $0$
  included. Writing $r = m/n$ with $n \ge 1$: the root $a^{1/n}$ is positive
  ([[thm-nth-roots-exist]]); for $m \ge 0$ the value $\big(a^{1/n}\big)^{m}$ is a
  natural power of a positive element, hence positive, which is claim 1 of
  [[lem-power-monotone]] and covers $m = 0$ as well, since $a^{0} = 1 > 0$; and for
  $m < 0$ the value is $\big(a^{1/n}\big)^{m} = \Big(\big(a^{1/n}\big)^{-m}\Big)^{-1}$
  ([[lem-power-laws]], claim 2), the inverse of a positive element, hence positive
  ([[lem-of-inverse-positive]]). Note that [[lem-power-monotone]] is stated for
  natural exponents only, so it does not by itself settle the negative case; that
  is what the inverse step is for. The exponent laws are
  [[lem-rational-power-laws]] and the order behaviour is
  [[lem-rational-power-monotone]].
- **The exponent is a rational, never a real.** Nothing on this page is a limit,
  a series or a continuous function, and $a^{r}$ is computed in finitely many
  field operations once the root is available. What would be needed to go
  further, why it is deferred here, and where the library later defines $a^{x}$
  for real $x$ are recorded in [[rem-real-exponents-deferred]].
- The convention $0^0 = 1$ of [[def-integer-power]] is untouched: $r = 0$ is not
  covered by the supplementary clause, which asks for $r > 0$. So $0^0 = 1$ while
  $0^{r} = 0$ for every rational $r > 0$. There is no inconsistency, only the
  familiar fact that the two-variable function $(a, r) \mapsto a^{r}$ has no
  continuous extension to $(0,0)$, a statement this library cannot even make yet.
````

### `def-series-of-vectors-and-rearrangement`

````markdown
---
id: def-series-of-vectors-and-rearrangement
kind: definition
title: "Series of vectors in $\\mathbb{R}^n$, absolute convergence, rearrangement, and the set of rearrangement sums"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-euclidean-inner-product, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, thm-componentwise-convergence-and-completeness, thm-all-norms-on-rn-are-equivalent, def-equivalent-norms, def-metric-convergence, def-series, def-absolute-and-conditional-convergence, def-rearrangement-and-unconditional-convergence, lem-standard-basis-of-f-n, def-linear-combination-and-span, def-finite-sum, lem-finite-sum-laws, def-sequence, def-injection-surjection-bijection, def-vector-space, lem-metrics-on-rn, lem-metric-limits-unique, def-isometry-and-metric-embedding, def-norm-and-normed-space]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Series_(mathematics)"
    - title: "Absolute convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Absolute_convergence"
    - title: "T. Banakh, A Simple Inductive Proof of the Levy-Steinitz Theorem"
      url: "https://arxiv.org/abs/1711.04136"
pipeline_run: null
---

## Definition

Let $n \in \mathbb{N}$ with $n \ge 1$, so that $\mathbb{R}^{n}$ carries the
Euclidean metric $d_2$ ([[lem-metrics-on-rn]],
[[lem-p-norms-are-norms-and-induce-the-published-metrics]]). A **sequence of
vectors** is a function $x : \mathbb{N} \to \mathbb{R}^{n}$, written $(x_k)$ with
$x_k := x(k)$; as everywhere in this library $\mathbb{N}$ contains $0$ and a
sequence is indexed from $0$ ([[def-sequence]], [[def-metric-convergence]]).

### Partial sums and convergence

The **partial sums** of $(x_k)$ are

$$s_N \;:=\; \sum_{k<N} x_k \;\in\; \mathbb{R}^{n} \qquad (N \in \mathbb{N}),$$

the finite sum of the vector space $\mathbb{R}^{n}$
([[def-linear-combination-and-span]]), so $s_0 = 0$ and $s_{N+1} = s_N + x_N$.
**No third notion of finite sum is introduced**: by
[[lem-standard-basis-of-f-n]] clause 1 the vector sum is computed pointwise,
$(s_N)(j) = \sum_{k<N} x_k(j)$ for $j<n$, the right-hand side being the real
finite sum of [[def-finite-sum]].

The **series** $\sum x_k$ **converges to $s \in \mathbb{R}^{n}$** when
$s_N \to s$ in $(\mathbb{R}^{n}, d_2)$ ([[def-metric-convergence]]), and then $s$
is **the sum**, written $\sum_{k=0}^{\infty}x_k$. The symbol denotes a single
vector, because a sequence in a metric space has at most one limit
([[lem-metric-limits-unique]]). The series **diverges** when $(s_N)$ does not
converge.

### Absolute convergence

$\sum x_k$ **converges absolutely** when the real series
$\sum \lVert x_k\rVert_2$ converges ([[def-series]]); since
$\lVert x_k\rVert_2 \ge 0$ ([[def-norm-and-normed-space]]), this is a statement
about a series of nonnegative terms, exactly as in
[[def-absolute-and-conditional-convergence]].

**The choice of norm is immaterial.** If $N$ is any norm on $\mathbb{R}^{n}$ then
$c\lVert x_k\rVert_2 \le N(x_k) \le C\lVert x_k\rVert_2$ for fixed $c, C > 0$
([[thm-all-norms-on-rn-are-equivalent]], [[def-equivalent-norms]]), so
$\sum N(x_k)$ converges exactly when $\sum\lVert x_k\rVert_2$ does, both being
series of nonnegative terms. The notion defined above therefore depends on
$\mathbb{R}^{n}$ and not on the norm chosen to test it.

### Rearrangement and the set of rearrangement sums

Let $\sigma : \mathbb{N} \to \mathbb{N}$ be a bijection
([[def-injection-surjection-bijection]]). The **rearrangement of $\sum x_k$ along
$\sigma$** is the series $\sum x_{\sigma(k)}$ of the sequence
$k \mapsto x_{\sigma(k)}$, verbatim as in
[[def-rearrangement-and-unconditional-convergence]] one dimension down. The
**set of rearrangement sums** of $(x_k)$ is

$$\mathcal{S}(x) \;:=\; \Bigl\{\, s \in \mathbb{R}^{n} \;:\; \text{some rearrangement of } \sum x_k \text{ converges to } s \,\Bigr\}.$$

Taking $\sigma$ to be the identity shows that a convergent $\sum x_k$ has its own
sum in $\mathcal{S}(x)$, so $\mathcal{S}(x) \ne \varnothing$ for a convergent
series.

### Agreement with the one-dimensional theory

$\mathbb{R}^{1}$ is the set of functions $1 \to \mathbb{R}$ and is **not
literally** $\mathbb{R}$. The map $\theta : \mathbb{R} \to \mathbb{R}^{1}$ sending
$t$ to the function with value $t$ at $0$ is a bijection; it preserves addition
and scalar multiplication, since both are computed pointwise
([[def-vector-space]], [[lem-standard-basis-of-f-n]]), and
$d_2(\theta(s),\theta(t)) = |s-t|$, so it is an isometric bijection
([[def-isometry-and-metric-embedding]]). Under that identification, and for
$n = 1$:

- the partial sums above are the partial sums of [[def-series]];
- convergence and the sum are those of [[def-series]];
- absolute convergence is that of [[def-absolute-and-conditional-convergence]],
  since $\lVert\theta(t)\rVert_2 = |t|$;
- rearrangement is that of [[def-rearrangement-and-unconditional-convergence]];
- $\mathcal{S}(x)$ is the image under $\theta$ of the set of rearrangement sums
  that the published remark [[rem-rearrangement-in-higher-dimensions]] writes
  $\mathcal{S}(a)$.

**Every comparison on this page between $\mathbb{R}^{n}$ and the published
one-dimensional theory goes through this identification, and it is stated each
time.**

## Remarks

- **Where $n \ge 1$ comes from.** Convergence is tested with $d_2$, and
  [[lem-metrics-on-rn]] defines the metrics on $\mathbb{R}^{n}$ only for
  $n \ge 1$. The algebra above — partial sums, rearrangement, the set
  $\mathcal{S}(x)$ as a set of vectors — makes sense at $n = 0$ as well, but
  nothing on this page is asserted there.

- **Convergence is componentwise.** By
  [[thm-componentwise-convergence-and-completeness]] clause 1 and the pointwise
  formula for partial sums, $\sum x_k$ converges to $s$ if and only if the $n$
  real series $\sum (x_k)_j$ converge, with sums $s_j$. That is the form every
  proof below uses, and it is what reduces the vector theory to the published
  scalar theory rather than duplicating it.

- **Unconditional convergence is not defined here.** The one-dimensional notion is
  [[def-rearrangement-and-unconditional-convergence]], and over $\mathbb{R}$ it
  coincides with absolute convergence ([[cor-unconditional-iff-absolute-in-r]]).
  Whether that coincidence survives to $\mathbb{R}^{n}$ for $n \ge 2$ is not
  settled anywhere on this page, and nothing here asserts it in either direction.
  What **is** proved is that absolute convergence implies convergence of every
  rearrangement to the same sum ([[thm-absolute-convergence-in-rn]]).
````

### `def-the-space-of-summing-directions`

````markdown
---
id: def-the-space-of-summing-directions
kind: definition
title: "The subspace $\\Gamma$ of directions along which a series converges absolutely, and its orthogonal complement $\\Gamma^{\\perp}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-series-of-vectors-and-rearrangement, def-euclidean-inner-product, thm-cauchy-schwarz-and-the-euclidean-norm, thm-absolute-convergence-in-rn, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, def-p-norms-on-rn, def-linear-subspace, lem-linear-subspace-criterion, lem-intersection-of-linear-subspaces, def-vector-space, def-series, lem-series-linearity, thm-direct-comparison-test, lem-standard-basis-of-f-n, def-absolute-and-conditional-convergence, lem-of-abs-value, lem-finite-sum-laws, def-finite-sum, thm-induction-principle, def-norm-and-normed-space]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Levy-Steinitz theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/L%C3%A9vy%E2%80%93Steinitz_theorem"
    - title: "Linear subspace (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Linear_subspace"
    - title: "T. Banakh, A Simple Inductive Proof of the Levy-Steinitz Theorem"
      url: "https://arxiv.org/abs/1711.04136"
pipeline_run: null
---

## Definition

Let $n \in \mathbb{N}$ with $n \ge 1$ and let $(x_k)$ be a sequence in
$\mathbb{R}^{n}$ ([[def-series-of-vectors-and-rearrangement]]). Define

$$\Gamma \;:=\; \Bigl\{\, a \in \mathbb{R}^{n} \;:\; \sum_k \bigl|\langle a, x_k\rangle\bigr| \text{ converges} \,\Bigr\}, \qquad \Gamma^{\perp} \;:=\; \bigl\{\, y \in \mathbb{R}^{n} \;:\; \langle a, y\rangle = 0 \text{ for every } a \in \Gamma \,\bigr\},$$

the inner product being the Euclidean one ([[def-euclidean-inner-product]]) and
the series that of [[def-series]]. Elements of $\Gamma$ are the **summing
directions** of $(x_k)$: those $a$ for which the real series of the projections
$\langle a, x_k\rangle$ converges absolutely
([[def-absolute-and-conditional-convergence]]). Both sets depend on the sequence
$(x_k)$; when several are in play the notation is $\Gamma(x)$ and
$\Gamma(x)^{\perp}$.

**Phrased with the inner product, deliberately.** The classical statement uses
linear functionals and the dual space. This library has no definition of a linear
map at this point in the reading order — the page that introduces linear maps,
rank-nullity and quotient spaces comes **earlier in the plan order** and is not
yet built — so writing $\Gamma$ with functionals would mint that page's canonical
object here. The two descriptions agree on $\mathbb{R}^{n}$, and nothing on this
page depends on their agreement.

### Both are linear subspaces

**$\Gamma$ is a linear subspace of $\mathbb{R}^{n}$** ([[def-linear-subspace]]).
It is nonempty: $\langle 0, x_k\rangle = 0$ for every $k$ by bilinearity, and the
series with all terms $0$ converges. For $\lambda \in \mathbb{R}$ and
$a, b \in \Gamma$, bilinearity and the absolute value laws give

$$\bigl|\langle \lambda a + b, x_k\rangle\bigr| \;=\; \bigl|\lambda\langle a,x_k\rangle + \langle b,x_k\rangle\bigr| \;\le\; |\lambda|\,\bigl|\langle a,x_k\rangle\bigr| + \bigl|\langle b,x_k\rangle\bigr|$$

([[lem-of-abs-value]]), and the series of the right-hand side converges by
[[lem-series-linearity]] clauses 1 and 2, so the left-hand series converges by
the comparison test ([[thm-direct-comparison-test]], the terms being
nonnegative). By the one-step subspace test
([[lem-linear-subspace-criterion]]), $\Gamma$ is a linear subspace.

**$\Gamma^{\perp}$ is a linear subspace of $\mathbb{R}^{n}$.** It contains $0$,
and for $\lambda \in \mathbb{R}$, $y, z \in \Gamma^{\perp}$ and $a \in \Gamma$,
bilinearity gives $\langle a, \lambda y + z\rangle = \lambda\langle a,y\rangle + \langle a,z\rangle = 0$;
again [[lem-linear-subspace-criterion]] applies. Equivalently $\Gamma^{\perp}$ is
the intersection of the linear subspaces
$\{y : \langle a,y\rangle = 0\}$ over $a \in \Gamma$, a nonempty family since
$0 \in \Gamma$, and [[lem-intersection-of-linear-subspaces]] gives the same
conclusion.

### $\Gamma$ is everything exactly when the series converges absolutely

**If $\sum x_k$ converges absolutely then $\Gamma = \mathbb{R}^{n}$.** For any
$a$, Cauchy-Schwarz gives
$|\langle a,x_k\rangle| \le \lVert a\rVert_2\lVert x_k\rVert_2$
([[thm-cauchy-schwarz-and-the-euclidean-norm]]), and
$\sum_k \lVert a\rVert_2\lVert x_k\rVert_2$ converges by
[[lem-series-linearity]] clause 2; the comparison test gives $a \in \Gamma$.

**Conversely, if $\Gamma = \mathbb{R}^{n}$ then $\sum x_k$ converges
absolutely.** Each standard basis vector $e_j$ lies in $\Gamma$, and
$\langle e_j, x_k\rangle = (x_k)_j$ ([[lem-standard-basis-of-f-n]],
[[def-euclidean-inner-product]]), so each real series $\sum_k |(x_k)_j|$
converges. A finite sum of convergent series converges, by
[[lem-series-linearity]] clause 1 and induction on the number of summands
([[thm-induction-principle]], [[lem-finite-sum-laws]], [[def-finite-sum]]), so
$\sum_k \sum_{j<n}|(x_k)_j| = \sum_k \lVert x_k\rVert_1$ converges; and
$\lVert x_k\rVert_2 \le \lVert x_k\rVert_1$
([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clause 3,
[[def-p-norms-on-rn]]), so $\sum_k\lVert x_k\rVert_2$ converges by the comparison
test.

**That equivalence is what makes the containment theorem below contain
[[thm-absolute-convergence-in-rn]] as a special case**: absolute convergence
gives $\Gamma = \mathbb{R}^{n}$, hence $\Gamma^{\perp} = \{0\}$ (any
$y \in \Gamma^{\perp}$ satisfies $\langle y,y\rangle = 0$ and so $y = 0$ by
positive definiteness), and the affine subspace below collapses to a point.

### Affine subspaces

The library has no notion of an affine subspace, so one is fixed here. For a
linear subspace $W \subseteq \mathbb{R}^{n}$ and $s \in \mathbb{R}^{n}$, the
**affine subspace through $s$ with direction $W$** is the coset

$$s + W \;:=\; \{\, s + w \;:\; w \in W \,\} .$$

**A coset is determined by $W$ together with any one of its points.** If
$p \in s + W$, say $p = s + w_0$ with $w_0 \in W$, then $p + W = s + W$: every
$p + w = s + (w_0 + w)$ lies in $s+W$ because $W$ is closed under addition, and
every $s + w = p + (w - w_0)$ lies in $p + W$ because $W$ is closed under
addition and under multiplication by $-1$ ([[def-linear-subspace]],
[[def-vector-space]]). In particular $s + W = s' + W$ if and only if
$s - s' \in W$.

## Remarks

- **$0 \in \Gamma$ always, so $\Gamma$ is never empty and $\Gamma^{\perp}$ is
  never larger than $\mathbb{R}^{n}$ by accident.** At the other extreme, if
  $\Gamma = \{0\}$ then $\Gamma^{\perp} = \mathbb{R}^{n}$, the condition on $y$
  being vacuous apart from $a = 0$.

- **The definition does not presuppose convergence of $\sum x_k$**, and neither
  $\Gamma$ nor $\Gamma^{\perp}$ mentions the sum. Convergence is a hypothesis of
  the theorems that use them, not of the definition.

- **No orthogonal decomposition is claimed.** Nothing here asserts that
  $\mathbb{R}^{n}$ is the direct sum of $\Gamma$ and $\Gamma^{\perp}$, or that
  $(\Gamma^{\perp})^{\perp} = \Gamma$. Those are statements of the theory of
  inner product spaces and orthogonality, which is planned for a page earlier in
  the plan order that is not yet built, and **no item on this page uses them**.
  What is used is only that $\Gamma^{\perp}$ is a linear subspace and that
  $\langle a, y\rangle = 0$ for $a \in \Gamma$, $y \in \Gamma^{\perp}$.

- **The name.** $\Gamma$ is the set of directions in which the series is
  absolutely summable; along a direction outside $\Gamma$ the projected real
  series converges conditionally at best, and it is exactly there that
  rearrangement can move the sum.
````

### `def-vector-valued-derivative-and-integral`

````markdown
---
id: def-vector-valued-derivative-and-integral
kind: definition
title: "The derivative and the Riemann integral of a function $[a,b] \\to \\mathbb{R}^m$, defined componentwise and characterised intrinsically"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-vector-valued-functions-limits-and-continuity, thm-componentwise-limits-and-continuity, thm-all-norms-on-rn-are-equivalent, def-equivalent-norms, def-derivative, def-darboux-integral, def-oriented-integral, thm-linearity-of-the-integral, thm-algebra-of-derivatives, lem-metric-limits-unique, def-function-limit, lem-function-limit-unique, def-function-space, lem-standard-basis-of-f-n, def-interval, lem-integrability-on-a-subinterval, thm-additivity-over-subintervals, def-limit-point-r, def-p-norms-on-rn, def-euclidean-inner-product, def-bounded-set]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Vector-valued function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Vector-valued_function"
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "J. Lebl, Basic Analysis I, Section 8.4"
      url: "https://www.jirka.org/ra/html/sec_svthedercont.html"
pipeline_run: null
---

## Definition

Throughout, $m \in \mathbb{N}$ with $m \ge 1$, and vector-valued functions, their
components and their limits are as in
[[def-vector-valued-functions-limits-and-continuity]].

### The derivative

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}^{m}$ and let $c \in A$ be
a **limit point of $A$** ([[def-limit-point-r]]). The **difference quotient of
$f$ at $c$** is the vector-valued function

$$q_{f,c} : A \setminus \{c\} \to \mathbb{R}^{m}, \qquad q_{f,c}(x) \;:=\; \frac{1}{x - c}\,\bigl(f(x) - f(c)\bigr),$$

the scalar multiple being that of the vector space $\mathbb{R}^{m}$
([[def-function-space]]); the division is legitimate because $x \ne c$ gives
$x - c \ne 0$. As in [[def-derivative]], $c$ is a limit point of
$A \setminus \{c\}$ as well, since a punctured neighbourhood of $c$ omits $c$.

$f$ is **differentiable at $c$** when $\lim_{x \to c} q_{f,c}(x)$ exists in
$\mathbb{R}^{m}$, and then the **derivative** is

$$f'(c) \;:=\; \lim_{x\to c} q_{f,c}(x) \;\in\; \mathbb{R}^{m}.$$

**The notation denotes a single vector.** At most one $L \in \mathbb{R}^{m}$
satisfies the limit condition, as proved in
[[def-vector-valued-functions-limits-and-continuity]]; this is the vector-valued
form of the obligation [[lem-function-limit-unique]] discharges for real-valued
functions and [[lem-metric-limits-unique]] for sequences.

**The intrinsic form is the definition; the componentwise form is a theorem.**
For $i < m$ the $i$-th component of $q_{f,c}(x)$ is
$\bigl(f_i(x)-f_i(c)\bigr)/(x-c)$, which is the real difference quotient of
$f_i$ at $c$ ([[def-derivative]]). So by
[[thm-componentwise-limits-and-continuity]] clause 2:

> $f$ is differentiable at $c$ **if and only if** every $f_i$ is differentiable
> at $c$, and then $f'(c)_i = f_i'(c)$ for every $i<m$.

Nothing below reverses this order of presentation: the intrinsic limit is what is
defined, and the coordinates are read off it.

**Algebra of derivatives.** If $f, g : A \to \mathbb{R}^{m}$ are differentiable at
$c$ and $\lambda \in \mathbb{R}$, then $f + g$ and $\lambda f$ are differentiable
at $c$ with $(f+g)'(c) = f'(c)+g'(c)$ and $(\lambda f)'(c) = \lambda f'(c)$: read
componentwise through the displayed equivalence, these are clauses 1 and 2 of the
published [[thm-algebra-of-derivatives]].

### The integral

Let $a, b \in \mathbb{R}$ with $a < b$ and let $f : [a,b] \to \mathbb{R}^{m}$
([[def-interval]]). $f$ is **integrable on $[a,b]$** when every component
$f_i : [a,b] \to \mathbb{R}$ is bounded ([[def-bounded-set]]) and Darboux
integrable in the sense of [[def-darboux-integral]], and then

$$\int_a^b f \;:=\; \text{the function } m \to \mathbb{R} \text{ sending } i \mapsto \int_a^b f_i .$$

**That really is an element of $\mathbb{R}^{m}$.** In this library
$\mathbb{R}^{m}$ is the set of functions $m \to \mathbb{R}$
([[def-function-space]]), not a set of tuples, so the displayed assignment is
literally an element of it; each value $\int_a^b f_i$ is a single real by
[[def-darboux-integral]]. In the standard basis
([[lem-standard-basis-of-f-n]]) the same object is
$\int_a^b f = \sum_{i<m}\bigl(\int_a^b f_i\bigr)e_i$.

**Oriented limits.** Following [[def-oriented-integral]] componentwise, set

$$\int_a^a f \;:=\; 0 \in \mathbb{R}^{m}, \qquad \int_b^a f \;:=\; -\int_a^b f \quad (a < b),$$

so that $\int_u^v f = -\int_v^u f$ for all $u,v$ in an interval on which $f$ is
integrable. The clauses do not overlap with the case $a<b$, so nothing has to be
checked for consistency, exactly as in [[def-oriented-integral]].

**Linearity.** If $f, g : [a,b] \to \mathbb{R}^{m}$ are integrable and
$\lambda,\mu \in \mathbb{R}$ then $\lambda f + \mu g$ is integrable with

$$\int_a^b (\lambda f + \mu g) \;=\; \lambda\int_a^b f + \mu\int_a^b g ,$$

since each side has $i$-th coordinate $\int_a^b(\lambda f_i + \mu g_i)$ and
$\lambda\int_a^b f_i + \mu\int_a^b g_i$ respectively, and those agree by
[[thm-linearity-of-the-integral]].

**Restriction and splitting.** If $f$ is integrable on $[a,b]$ then it is
integrable on every closed subinterval, and for $a<c<b$,
$\int_a^b f = \int_a^c f + \int_c^b f$; both are the componentwise readings of
[[lem-integrability-on-a-subinterval]] and
[[thm-additivity-over-subintervals]], applied to each $f_i$ and reassembled
coordinate by coordinate.

## Remarks

- **The two halves are independent.** The derivative clause needs no integral and
  the integral clause needs no derivative; they are collected in one item because
  they are the two constructions of the one-dimensional theory that transfer to
  $\mathbb{R}^{m}$ by the same move, and because
  [[cor-vector-valued-ftc-and-lipschitz-bound]] is what joins them.

- **Why the intrinsic derivative is stated first.** The componentwise formula is
  the one used in computations, but it is tied to the standard basis, whereas the
  limit of the difference quotient is not. The intrinsic form is the one that
  survives when the domain is enlarged from an interval to a subset of
  $\mathbb{R}^{n}$, which is a later page of this track.

- **No norm appears in either definition.** The derivative is a limit in
  $(\mathbb{R}^{m}, d_2)$, and by [[thm-all-norms-on-rn-are-equivalent]] the same
  limits are obtained from any other norm, so the notion does not depend on the
  choice ([[def-p-norms-on-rn]], [[def-euclidean-inner-product]]). The integral
  is defined coordinatewise and mentions no metric at all.

- **Integrability of $\lVert f\rVert_2$ is a separate matter** and is not part of
  this definition: it is proved, together with the inequality it belongs to, in
  [[thm-norm-inequality-for-the-vector-valued-integral]].
````

### `def-vector-valued-functions-limits-and-continuity`

````markdown
---
id: def-vector-valued-functions-limits-and-continuity
kind: definition
title: "Vector-valued functions $f : A \\to \\mathbb{R}^m$, their limits and continuity, with the dictionary to the metric notions"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, def-euclidean-inner-product, def-norm-and-normed-space, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, def-metric-space, def-metric-continuity, def-metric-convergence, lem-metrics-on-rn, lem-real-and-metric-notions-agree, def-continuity-real, def-function-limit, def-limit-point-r, def-metric-ball, lem-standard-basis-of-f-n, def-lipschitz-holder-contraction, lem-real-line-is-a-metric-space, def-isometry-and-metric-embedding]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Vector-valued function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Vector-valued_function"
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "J. Lebl, Basic Analysis I, Section 8.4"
      url: "https://www.jirka.org/ra/html/sec_svthedercont.html"
pipeline_run: null
---

## Definition

Throughout, $m \in \mathbb{N}$ with $m \ge 1$, and $\mathbb{R}^{m}$ carries the
Euclidean norm $\lVert\cdot\rVert_2$ of [[def-euclidean-inner-product]] and
[[def-p-norms-on-rn]], whose induced metric is the published $d_2$
([[lem-p-norms-are-norms-and-induce-the-published-metrics]],
[[lem-metrics-on-rn]]). A function into $\mathbb{R}^{m}$ is called
**vector-valued**.

### Continuity

Let $(X, d_X)$ be a metric space ([[def-metric-space]]), let $A \subseteq X$
carry the restricted metric $d_A$ ([[def-isometry-and-metric-embedding]]), let
$f : A \to \mathbb{R}^{m}$ and let $a \in A$. Then $f$ is **continuous at $a$**
when

$$(\forall \varepsilon > 0)\ (\exists \delta > 0)\ (\forall x \in A)\ \bigl[\ d_X(x,a) < \delta \ \Longrightarrow\ \lVert f(x) - f(a)\rVert_2 < \varepsilon\ \bigr],$$

with $\varepsilon, \delta$ ranging over the positive reals, and **continuous on
$A$** when it is continuous at every point of $A$.

**This is not a new notion, and that is the point of writing it down.** Since
$\lVert f(x)-f(a)\rVert_2 = d_2\bigl(f(x),f(a)\bigr)$ and $d_A$ is the
restriction of $d_X$, the displayed condition is **verbatim** the condition of
[[def-metric-continuity]] for the map of metric spaces
$f : (A,d_A) \to (\mathbb{R}^{m}, d_2)$. So every theorem about continuous maps
of metric spaces applies to vector-valued functions with no translation, and
this library has exactly one notion of continuity here. The same move was made
once before, between the $\mathbb{R}$-native and the metric notions, in
[[lem-real-and-metric-notions-agree]]; this item is that move one dimension up in
the codomain.

The two cases used below are $X = \mathbb{R}$ with $d_{\mathbb{R}}(s,t) = |s-t|$
([[lem-real-line-is-a-metric-space]]) and $X = \mathbb{R}^{n}$ with $d_2$, for
$n \ge 1$.

### Limits, for a real domain

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}^{m}$, let $c$ be a limit
point of $A$ ([[def-limit-point-r]]) and let $L \in \mathbb{R}^{m}$. We say
$f(x)$ **tends to $L$ as $x$ tends to $c$**, and write
$\lim_{x\to c} f(x) = L$, when

$$(\forall \varepsilon > 0)\ (\exists \delta > 0)\ (\forall x \in A)\ \bigl[\ 0 < |x - c| < \delta \ \Longrightarrow\ \lVert f(x) - L\rVert_2 < \varepsilon\ \bigr].$$

This is the condition of [[def-function-limit]] with the absolute value in the
codomain replaced by $\lVert\cdot\rVert_2$; as there, the puncture $0 < |x-c|$ is
what makes $c$ a point the function need not be defined at, and the hypothesis
that $c$ is a limit point of $A$ is what stops the condition from being satisfied
vacuously.

**The notation denotes: at most one $L$ satisfies the condition.** Suppose $L$
and $L'$ both do and $L \ne L'$. Then $\varepsilon := \lVert L-L'\rVert_2 / 2 > 0$
by (N1) for $\lVert\cdot\rVert_2$ ([[def-norm-and-normed-space]]). Take $\delta$
and $\delta'$ for this $\varepsilon$ and put $\eta := \min\{\delta,\delta'\} > 0$.
Since $c$ is a limit point of $A$ there is $x \in A$ with $0 < |x-c| < \eta$
([[def-limit-point-r]]), and then

$$\lVert L - L'\rVert_2 \;\le\; \lVert L - f(x)\rVert_2 + \lVert f(x) - L'\rVert_2 \;<\; \varepsilon + \varepsilon \;=\; \lVert L-L'\rVert_2$$

by (N3) and (N2), which trichotomy forbids. So $L = L'$.

### Components

For $i < m$ define the $i$-th **coordinate projection**
$\pi_i : \mathbb{R}^{m} \to \mathbb{R}$ by $\pi_i(y) := y_i = y(i)$, and for
$f : A \to \mathbb{R}^{m}$ the $i$-th **component** $f_i := \pi_i \circ f$, a
real-valued function on $A$.

**Each $\pi_i$ is $1$-Lipschitz** ([[def-lipschitz-holder-contraction]]): for
$y, z \in \mathbb{R}^{m}$,

$$\bigl|\pi_i(y) - \pi_i(z)\bigr| \;=\; |y_i - z_i| \;\le\; \lVert y - z\rVert_2 \;=\; d_2(y,z),$$

the middle inequality being $|w_i| \le \lVert w\rVert_2$ at $w := y-z$
([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clause 3, or
directly because $w_i^{2}$ is one term of the sum $\sum_{k<m}w_k^{2}$). Written
in coordinates, $f(x)$ is the vector whose $i$-th coordinate is $f_i(x)$, and
$f(x) = \sum_{i<m} f_i(x)\,e_i$ in the standard basis
([[lem-standard-basis-of-f-n]]).

## Remarks

- **The codomain $\mathbb{R}^{0}$ is excluded by the standing hypothesis
  $m \ge 1$, and nothing is lost.** $\mathbb{R}^{0}$ has exactly one element, so
  every function into it is constant and every ball condition holds trivially;
  every such map is continuous and every limit is the unique point. That case is
  true, uninteresting, and not what this page is about. It is also outside the
  reach of [[lem-metrics-on-rn]], which defines the metrics only for $m \ge 1$.

- **The domain may be any metric space, and this matters twice below.** The
  derivative of [[def-vector-valued-derivative-and-integral]] needs a real
  domain, so it uses the limit clause; the companion page's function of two real
  variables needs the domain $\mathbb{R}^{2}$, so it uses the continuity clause.
  Both are instances of the same definition, and neither introduces a second
  notion.

- **When $m = 1$ the codomain is $\mathbb{R}^{1}$, not $\mathbb{R}$.** These are
  different sets, $\mathbb{R}^{1}$ being a set of functions $1 \to \mathbb{R}$.
  The map $\theta : \mathbb{R} \to \mathbb{R}^{1}$ sending $t$ to the function
  with value $t$ at $0$ is an isometric bijection for $d_2$
  ([[def-isometry-and-metric-embedding]]), and under it the notions above become
  those of [[def-continuity-real]] and [[def-function-limit]]. Every comparison
  on this page between the vector-valued theory and the one-dimensional theory
  goes through that identification, stated explicitly each time.

- **Convergence of sequences in $\mathbb{R}^{m}$ is not redefined here.** It is
  [[def-metric-convergence]] for $(\mathbb{R}^{m},d_2)$, with balls as in
  [[def-metric-ball]], and its componentwise characterisation is
  [[thm-componentwise-convergence-and-completeness]].
````

### `lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric`

````markdown
---
id: lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric
kind: lemma
title: "The finite and reverse triangle inequalities for a norm; and for $n \\ge 1$ every norm $N$ on $\\mathbb{R}^n$ satisfies $N(x) \\le C\\lVert x\\rVert_1$ and is Lipschitz, hence continuous, for $d_2$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-norm-and-normed-space, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, def-equivalent-norms, lem-standard-basis-of-f-n, def-linear-combination-and-span, thm-unique-coordinates-with-respect-to-an-ordered-basis, thm-cauchy-schwarz-finite, lem-finite-set-has-max, def-max-min, lem-finite-sum-laws, def-finite-sum, def-lipschitz-holder-contraction, thm-metric-regularity-hierarchy, def-metric-continuity, def-canonical-natural, lem-of-naturals-positive, thm-induction-principle, lem-of-abs-value, lem-of-square-monotone, thm-of-square-roots, lem-real-line-is-a-metric-space, lem-metrics-on-rn, def-vector-space, lem-vector-space-elementary-consequences]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Norm (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Norm_(mathematics)"
    - title: "Lipschitz continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lipschitz_continuity"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Statement

**Clause 1 is about an arbitrary norm; clauses 2 to 4 are about
$\mathbb{R}^{n}$ with $n \ge 1$.**

1. **Finite and reverse triangle inequalities.** Let $V$ be a vector space over
   $\mathbb{R}$ and $N$ a norm on it ([[def-norm-and-normed-space]]). For every
   $p \in \mathbb{N}$ and every list $u : p \to V$
   ([[def-linear-combination-and-span]]),
   $$N\Bigl(\sum_{j<p} u_j\Bigr) \;\le\; \sum_{j<p} N(u_j),$$
   and for all $u, w \in V$,
   $$\bigl|N(u) - N(w)\bigr| \;\le\; N(u - w).$$

Now let $n \in \mathbb{N}$ with $n \ge 1$, let $\mathbb{R}^{n}$ carry the norms of
[[def-p-norms-on-rn]] and write $\iota$ for the canonical natural
([[def-canonical-natural]]).

2. **Every norm is dominated by the $1$-norm.** Let $N$ be a norm on
   $\mathbb{R}^{n}$ and put $C := \max\{\, N(e_k) : k<n \,\}$, a maximum over a
   nonempty finite set of reals ([[lem-standard-basis-of-f-n]],
   [[lem-finite-set-has-max]]). Then $C \ge 0$ and
   $$N(x) \;\le\; C\,\lVert x\rVert_1 \qquad \text{for every } x \in \mathbb{R}^{n}.$$
3. **The comparison chain.** For every $x \in \mathbb{R}^{n}$,
   $$\lVert x\rVert_\infty \;\le\; \lVert x\rVert_2 \;\le\; \lVert x\rVert_1 \;\le\; \iota(n)\,\lVert x\rVert_\infty , \qquad \lVert x\rVert_1 \;\le\; \sqrt{\iota(n)}\;\lVert x\rVert_2 .$$
   In particular $\lVert\cdot\rVert_1$, $\lVert\cdot\rVert_2$ and
   $\lVert\cdot\rVert_\infty$ are pairwise equivalent norms on $\mathbb{R}^{n}$,
   with the constants displayed ([[def-equivalent-norms]]).
4. **Every norm is Lipschitz for the Euclidean metric.** With $N$ and $C$ as in
   clause 2, $N : (\mathbb{R}^{n}, d_2) \to (\mathbb{R}, d_{\mathbb{R}})$ is
   Lipschitz with constant $C\sqrt{\iota(n)}$
   ([[def-lipschitz-holder-contraction]], [[lem-metrics-on-rn]],
   [[lem-real-line-is-a-metric-space]]), hence uniformly continuous and
   continuous ([[thm-metric-regularity-hierarchy]], [[def-metric-continuity]]).

**Where $n \ge 1$ enters.** Clauses 2 and 4 need the maximum defining $C$ to
exist, and clause 3 mentions $\lVert\cdot\rVert_\infty$; at $n = 0$ each is a
maximum over the empty index set and does not exist, exactly as in
[[lem-metrics-on-rn]] and [[def-p-norms-on-rn]]. Clause 1 carries no hypothesis
on the dimension and no hypothesis on the space.

## Facts & Assumptions

**Given:** A vector space $V$ over $\mathbb{R}$ with a norm $N$ ([[def-vector-space]], [[def-norm-and-normed-space]]); and, for clauses 2 to 4, a natural $n \ge 1$, the space $\mathbb{R}^{n}$, a norm $N$ on it, and vectors $x, y \in \mathbb{R}^{n}$.

[L1] The norm axioms: $N(v) = 0$ exactly when $v = 0_V$; $N(\lambda v) = |\lambda|N(v)$; $N(u+w) \le N(u)+N(w)$; and $N(v) \ge 0$ ([[def-norm-and-normed-space]]).

[L2] Finite sums in a vector space: $\sum_{j<0}u_j = 0_V$ and $\sum_{j<p+1}u_j = \bigl(\sum_{j<p}u_j\bigr) + u_p$ ([[def-linear-combination-and-span]]); and $(-1)v = -v$ ([[lem-vector-space-elementary-consequences]]).

[L3] The induction principle ([[thm-induction-principle]]).

[L4] Laws of finite sums of reals ([[lem-finite-sum-laws]], [[def-finite-sum]]): additivity, scaling, monotonicity, $\sum_{k<n}\lambda = \iota(n)\lambda$, a sum of nonnegative terms is nonnegative, and every single term is at most such a sum.

[L5] The standard basis: $e_i \in \mathbb{R}^{n}$ has $e_i(i) = 1$ and $e_i(j) = 0$ for $j \ne i$, $e$ is an ordered basis of $\mathbb{R}^{n}$, and every $x$ satisfies $x = \sum_{i<n}x_i e_i$ with coordinate list $i \mapsto x(i)$ ([[lem-standard-basis-of-f-n]] clauses 1 to 3, [[thm-unique-coordinates-with-respect-to-an-ordered-basis]]).

[L6] Maxima ([[lem-finite-set-has-max]], [[def-max-min]]): a nonempty finite set of reals has a maximum, which belongs to the set and bounds it above.

[L7] The three norms ([[def-p-norms-on-rn]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]]): $\lVert x\rVert_1 = \sum_{k<n}|x_k|$, $\lVert x\rVert_2 = \sqrt{\sum_{k<n}x_k^{2}}$, $\lVert x\rVert_\infty = \max\{|x_k| : k<n\}$, and each induces the correspondingly named published metric.

[L8] Cauchy-Schwarz in root form ([[thm-cauchy-schwarz-finite]]): $\bigl|\sum_{k<n}a_kb_k\bigr| \le \sqrt{\sum_{k<n}a_k^{2}}\sqrt{\sum_{k<n}b_k^{2}}$.

[L9] Square roots and squaring ([[thm-of-square-roots]], [[lem-of-square-monotone]]): every $c \ge 0$ has a unique $\sqrt{c} \ge 0$ with $(\sqrt{c})^{2} = c$; for $a,b \ge 0$, $a \le b$ exactly when $a^{2} \le b^{2}$.

[L10] Absolute value ([[lem-of-abs-value]]): $|t| \ge 0$, $|t|^{2} = t^{2}$, $|st| = |s||t|$, $|-t| = |t|$, and $|t|$ equals $t$ or $-t$.

[L11] The canonical natural: $\iota(n) > 0$ for $n \ge 1$ ([[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L12] Lipschitz maps and the regularity hierarchy ([[def-lipschitz-holder-contraction]], [[thm-metric-regularity-hierarchy]], [[def-metric-continuity]]): a map with $d_Y(f(x),f(y)) \le L\,d_X(x,y)$ and $L \ge 0$ is Lipschitz, hence uniformly continuous, hence continuous; $d_{\mathbb{R}}(s,t) = |s-t|$ ([[lem-real-line-is-a-metric-space]]).

## Proof

**Proof technique:** direct.

1.1 The finite triangle inequality holds by induction on $p$: at $p = 0$ both sides are $0$, since $\sum_{j<0}u_j = 0_V$ and $N(0_V) = 0$ and the empty real sum is $0$; and if $N(\sum_{j<p}u_j) \le \sum_{j<p}N(u_j)$, then $N(\sum_{j<p+1}u_j) = N(\sum_{j<p}u_j + u_p) \le N(\sum_{j<p}u_j) + N(u_p) \le \sum_{j<p}N(u_j) + N(u_p) = \sum_{j<p+1}N(u_j)$. [L1, L2, L3, L4]

1.2 For $u, w \in V$: $N(u) = N((u-w)+w) \le N(u-w) + N(w)$, so $N(u)-N(w) \le N(u-w)$; and $N(w-u) = N((-1)(u-w)) = |-1|N(u-w) = N(u-w)$, so the same argument with $u$ and $w$ exchanged gives $N(w)-N(u) \le N(u-w)$. Since $|N(u)-N(w)|$ is one of $N(u)-N(w)$ and $N(w)-N(u)$, the reverse triangle inequality follows, completing clause 1. [L1, L2, L10]

1.3 For every $j<n$: $x_j^{2} \le \sum_{k<n}x_k^{2}$, since every single term of a sum of nonnegative terms is at most the sum; taking nonnegative square roots and using $|x_j|^{2} = x_j^{2}$ gives $|x_j| \le \lVert x\rVert_2$. [L4, L7, L9, L10]

1.4 For every $j<n$: $|x_j| \le \sum_{k<n}|x_k| = \lVert x\rVert_1$, again because a single term is at most the sum. [L4, L7, L10]

1.5 $\sum_{k<n}|x_k| \le \sum_{k<n}\lVert x\rVert_\infty = \iota(n)\lVert x\rVert_\infty$, since $|x_k| \le \lVert x\rVert_\infty$ for every $k<n$ and a constant list sums to $\iota(n)$ times its value; so $\lVert x\rVert_1 \le \iota(n)\lVert x\rVert_\infty$. [L4, L6, L7, L11]

1.6 Instantiating [L8] at $a_k := |x_k|$ and $b_k := 1$ gives $\lVert x\rVert_1 = \bigl|\sum_{k<n}|x_k|\cdot 1\bigr| \le \sqrt{\sum_{k<n}|x_k|^{2}}\,\sqrt{\sum_{k<n}1} = \lVert x\rVert_2\sqrt{\iota(n)}$. [L4, L7, L8, L10]

1.7 The set $\{N(e_k) : k<n\}$ is a nonempty finite set of reals because $n \ge 1$, so $C = \max\{N(e_k) : k<n\}$ exists, belongs to the set, satisfies $N(e_k) \le C$ for every $k<n$, and is $\ge 0$ since every value of $N$ is. [L1, L5, L6]

1.8 $x = \sum_{i<n} x_i e_i$, the coordinate list of $x$ with respect to the ordered basis $e$ being $i \mapsto x(i) = x_i$. [L5]

2.1 $\lVert x\rVert_\infty$ is one of the numbers $|x_j|$ with $j<n$, so step 1.3 gives $\lVert x\rVert_\infty \le \lVert x\rVert_2$. [step 1.3, L6, L7]

2.2 $\sum_{k<n}x_k^{2} = \sum_{k<n}|x_k|\,|x_k| \le \sum_{k<n}|x_k|\,\lVert x\rVert_1 = \lVert x\rVert_1\sum_{k<n}|x_k| = \lVert x\rVert_1^{2}$, using step 1.4 termwise, monotonicity and scaling; taking nonnegative square roots gives $\lVert x\rVert_2 \le \lVert x\rVert_1$. [step 1.4, L4, L7, L9, L10]

2.3 Applying step 1.1 to the list $i \mapsto x_i e_i$ and then (N2): $N(x) = N\bigl(\sum_{i<n}x_ie_i\bigr) \le \sum_{i<n}N(x_ie_i) = \sum_{i<n}|x_i|\,N(e_i) \le \sum_{i<n}|x_i|\,C = C\lVert x\rVert_1$, the last inequality by monotonicity from step 1.7. This is clause 2. [step 1.1, step 1.7, step 1.8, L1, L4, L7]

3.1 Steps 2.1, 2.2, 1.5 and 1.6 are the four inequalities of clause 3; since $\iota(n) > 0$ and $\sqrt{\iota(n)} > 0$, they exhibit positive constants in both directions for each of the three pairs, so the three norms are pairwise equivalent. [step 1.5, step 1.6, step 2.1, step 2.2, L11, L9]

3.2 By step 1.2 applied on $\mathbb{R}^{n}$, then step 2.3, then step 1.6: $\bigl|N(x)-N(y)\bigr| \le N(x-y) \le C\lVert x-y\rVert_1 \le C\sqrt{\iota(n)}\;\lVert x-y\rVert_2$. [step 1.2, step 1.6, step 2.3, L4]

4.1 Since $\lVert x-y\rVert_2 = d_2(x,y)$ and $\bigl|N(x)-N(y)\bigr| = d_{\mathbb{R}}(N(x),N(y))$, step 3.2 says exactly that $N$ is Lipschitz with the nonnegative constant $C\sqrt{\iota(n)}$, hence uniformly continuous and continuous; this is clause 4, and with steps 1.2, 2.3 and 3.1 all four clauses are proved. [step 1.2, step 2.3, step 3.1, step 3.2, L7, L12] ∎

## Remarks

- **Clause 2 is the half of norm equivalence that costs no compactness.** It gives an upper bound for an arbitrary norm in terms of $\lVert\cdot\rVert_1$, and hence in terms of $\lVert\cdot\rVert_2$ by clause 3, by a computation with the standard basis alone. The matching **lower** bound is where compactness of the unit sphere enters, and that is [[thm-all-norms-on-rn-are-equivalent]].

- **The constants of clause 3 are best possible, and the companion page shows it.** Nothing here claims sharpness; the attaining vectors are exhibited on the companion page for $\mathbb{R}^{2}$.

- **Clause 1 is stated for a general norm on purpose.** It is used below for the Euclidean norm on $\mathbb{R}^{n}$ inside [[thm-steinitz-polygonal-confinement]] and for an arbitrary $N$ in clause 2, and it is the only statement on this page that needs no hypothesis on the dimension at all.
````

### `lem-metrics-on-rn`

````markdown
---
id: lem-metrics-on-rn
kind: lemma
title: "$\\mathbb{R}^n$ as the set of functions $n \\to \\mathbb{R}$, and $d_1$, $d_2$, $d_\\infty$ are metrics on it"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-space, def-natural-numbers, def-finite-sum, thm-minkowski-finite,
       thm-cauchy-schwarz-finite, lem-finite-set-has-max, thm-of-square-roots,
       lem-of-abs-value, lem-finite-sum-laws, def-max-min, lem-of-square-monotone,
       lem-of-square-positive, lem-of-triangle-inequality, def-abs-value,
       def-integer-power, def-ordered-field, def-complete-ordered-field,
       lem-of-add-order]
justified_by: []
aliases: [def-euclidean-space]
landmark: true
short: "$\\mathbb{R}^n$ with $d_1, d_2, d_\\infty$"
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
    - title: "Euclidean space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Euclidean_space"
    - title: "Taxicab geometry (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Taxicab_geometry"
    - title: "Lp space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lp_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 20: The Metric Topology (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-20.pdf"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ with $n \ge 1$. A von Neumann natural is the set of its
predecessors, $n = \{0, 1, \dots, n-1\}$ ([[def-natural-numbers]]), so it can be
used directly as an index set. Define

$$\mathbb{R}^n := \{\, x : x \text{ is a function } n \to \mathbb{R} \,\},$$

and write $x_k$ for $x(k)$, $k < n$. Two elements of $\mathbb{R}^n$ are equal
exactly when they agree at every $k < n$, functions being equal when they have
the same values. For $x, y \in \mathbb{R}^n$ put

$$d_1(x,y) := \sum_{k<n} |x_k - y_k|, \qquad d_2(x,y) := \sqrt{\ \sum_{k<n} (x_k - y_k)^2\ }, \qquad d_\infty(x,y) := \max\{\, |x_k - y_k| : k < n \,\}.$$

All three are well defined: the finite sums are those of [[def-finite-sum]]; the
sum of squares is nonnegative ([[lem-finite-sum-laws]], [[lem-of-square-positive]])
so it has a unique nonnegative square root ([[thm-of-square-roots]]); and
$\{|x_k - y_k| : k < n\}$ is a nonempty finite subset of $\mathbb{R}$, because
$n \ge 1$, so it has a maximum ([[lem-finite-set-has-max]], [[def-max-min]]).

**Then $d_1$, $d_2$ and $d_\infty$ are metrics on $\mathbb{R}^n$**
([[def-metric-space]]).

**Why $n \ge 1$.** For $n = 0$ the set $\mathbb{R}^0$ has exactly one element,
the empty function, and $d_1$ and $d_2$ are the empty sum $0$ and its root; but
$d_\infty$ would be the maximum of the empty set, which does not exist. The
hypothesis $n \ge 1$ is therefore not decoration, and it is carried by every
statement about $d_\infty$ in this library.

## Facts & Assumptions

**Given:** A natural $n \ge 1$; elements $x, y, z \in \mathbb{R}^n$; and the lists $a_k := x_k - y_k$, $b_k := y_k - z_k$ for $k < n$, so that $a_k + b_k = x_k - z_k$. Write $A := \sum_{k<n} a_k^2$, $C := \sum_{k<n} b_k^2$ and $B := \sum_{k<n} a_k b_k$.

[L1] Laws of finite sums ([[lem-finite-sum-laws]], [[def-finite-sum]]): additivity, scaling, monotonicity; a sum of nonnegative terms is nonnegative, every single term is at most the sum, and a sum of nonnegative terms that vanishes has every term $0$.

[L2] Absolute value ([[lem-of-abs-value]], [[def-abs-value]]): $|u| \ge 0$; $|u| = 0$ if and only if $u = 0$; $|-u| = |u|$; and $u \le |u|$.

[L3] Two-term triangle inequality: $|u + v| \le |u| + |v|$ ([[lem-of-triangle-inequality]]).

[L4] Minkowski's inequality at the rational exponent $p = 1$ ([[thm-minkowski-finite]]): $\sum_{k<n}|a_k + b_k| \le \sum_{k<n}|a_k| + \sum_{k<n}|b_k|$.

[L5] Cauchy-Schwarz in root form ([[thm-cauchy-schwarz-finite]]): $\big|\sum_{k<n} a_k b_k\big| \le \sqrt{\sum_{k<n} a_k^2}\ \sqrt{\sum_{k<n} b_k^2}$.

[L6] Square roots ([[thm-of-square-roots]]): every $c \ge 0$ has a unique $\sqrt{c} \ge 0$ with $(\sqrt{c})^2 = c$; in particular $\sqrt{c} = 0$ if and only if $c = 0$.

[L7] Squares ([[lem-of-square-positive]], [[def-integer-power]]): $u^2 \ge 0$ always, and $u^2 = 0$ only for $u = 0$; and monotonicity of squaring on the nonnegatives, $s \le t \iff s^2 \le t^2$ for $s, t \ge 0$ ([[lem-of-square-monotone]]).

[L8] Maximum of a nonempty finite set of reals: it exists, it belongs to the set, and it is an upper bound of the set ([[lem-finite-set-has-max]], [[def-max-min]]).

[L9] Order arithmetic in $\mathbb{R}$: inequalities may be added and a constant added to both sides, in the strict form of [[lem-of-add-order]] and, together with the case of equality settled by totality ([[def-ordered-field]], [[def-complete-ordered-field]]), in the nonstrict form used below.

## Proof

**Proof technique:** direct.

1.1 Separation for $d_1$: $d_1(x,y) = \sum_{k<n}|a_k|$ is a sum of nonnegative terms, so it vanishes exactly when every $|a_k|$ vanishes, that is exactly when $x_k = y_k$ for all $k < n$, that is exactly when $x = y$. [L1, L2]

1.2 Separation for $d_2$: $d_2(x,y) = \sqrt{A}$ vanishes exactly when $A = 0$; $A$ is a sum of nonnegative terms, so $A = 0$ exactly when $a_k^2 = 0$ for every $k < n$, which happens exactly when every $a_k = 0$, that is exactly when $x = y$. [L1, L6, L7]

1.3 Separation for $d_\infty$: the maximum $d_\infty(x,y)$ belongs to $\{|a_k| : k < n\}$ and bounds it above, so it is $0$ exactly when every $|a_k| = 0$, that is exactly when $x = y$. [L2, L8]

1.4 Symmetry for all three: $|y_k - x_k| = |-(x_k - y_k)| = |x_k - y_k|$ and $(y_k - x_k)^2 = (x_k - y_k)^2$ for every $k < n$, so the three defining expressions are unchanged when $x$ and $y$ are exchanged. [L2, L7]

1.5 Triangle inequality for $d_1$: applying [L4] to the lists $(a_k)$ and $(b_k)$ gives $d_1(x,z) = \sum_{k<n}|a_k + b_k| \le \sum_{k<n}|a_k| + \sum_{k<n}|b_k| = d_1(x,y) + d_1(y,z)$. [L4]

1.6 Expanding with additivity and scaling: $\sum_{k<n}(a_k + b_k)^2 = \sum_{k<n}\big(a_k^2 + 2a_kb_k + b_k^2\big) = A + 2B + C$. [L1, algebra]

1.7 By [L5] and $B \le |B|$: $B \le \sqrt{A}\,\sqrt{C}$, and $A = (\sqrt{A})^2$, $C = (\sqrt{C})^2$ with $\sqrt{A}, \sqrt{C} \ge 0$. [L2, L5, L6]

1.8 Triangle inequality for $d_\infty$: for each $k < n$, $|a_k + b_k| \le |a_k| + |b_k| \le d_\infty(x,y) + d_\infty(y,z)$ because the two maxima bound their sets; so $d_\infty(x,y) + d_\infty(y,z)$ is an upper bound of $\{|a_k + b_k| : k < n\}$, and the maximum $d_\infty(x,z)$ of that set is one of its elements, whence $d_\infty(x,z) \le d_\infty(x,y) + d_\infty(y,z)$. [L3, L8, L9]

2.1 Combining steps 1.6 and 1.7: $\sum_{k<n}(a_k+b_k)^2 = A + 2B + C \le (\sqrt{A})^2 + 2\sqrt{A}\sqrt{C} + (\sqrt{C})^2 = \big(\sqrt{A} + \sqrt{C}\big)^2$. [step 1.6, step 1.7, L9, algebra]

3.1 Both $d_2(x,z) = \sqrt{\sum_{k<n}(a_k+b_k)^2}$ and $\sqrt{A} + \sqrt{C}$ are nonnegative, and by step 2.1 the square of the first is at most the square of the second, so monotonicity of squaring on the nonnegatives gives $d_2(x,z) \le \sqrt{A} + \sqrt{C} = d_2(x,y) + d_2(y,z)$. [step 2.1, L6, L7]

4.1 Each of $d_1$, $d_2$, $d_\infty$ satisfies (M1) by steps 1.1, 1.2 and 1.3, satisfies (M2) by step 1.4, and satisfies (M3) by steps 1.5, 3.1 and 1.8 respectively; hence all three are metrics on $\mathbb{R}^n$. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 1.8, step 3.1] ∎

## Remarks

- **$\mathbb{R}^n$ is defined ZFC-natively here**, as the set of functions from
  the von Neumann natural $n$ to $\mathbb{R}$, precisely so that its coordinates
  are indexed by $k < n$ and the finite-sum machinery of [[def-finite-sum]],
  [[thm-minkowski-finite]] and [[thm-cauchy-schwarz-finite]], all of which sum
  over $k < n$, applies without any reindexing.
- **No rational power appears anywhere above.** The triangle inequality for
  $d_2$ is obtained from Cauchy-Schwarz and the existence of square roots, not
  from Minkowski at $p = 2$, so this lemma does not depend on the theory of
  rational exponents. Minkowski is used only at $p = 1$, where its statement is
  the termwise sum of the two-term triangle inequality.
- **The three metrics are Lipschitz equivalent, with explicit constants,** and
  in particular have the same topology; that computation is on the companion
  page and is not needed here.
````

### `lem-p-norms-are-norms-and-induce-the-published-metrics`

````markdown
---
id: lem-p-norms-are-norms-and-induce-the-published-metrics
kind: lemma
title: "Each $\\lVert\\cdot\\rVert_p$ is a norm on $\\mathbb{R}^n$, and the induced metrics are exactly $d_1$, $d_2$ and $d_\\infty$ of the published metric-spaces page"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-p-norms-on-rn, def-norm-and-normed-space, def-euclidean-inner-product, thm-cauchy-schwarz-and-the-euclidean-norm, thm-minkowski-finite, lem-rational-power-laws, lem-rational-power-monotone, lem-finite-sum-laws, def-finite-sum, lem-metrics-on-rn, def-metric-space, def-metric-topology, thm-euclidean-space-complete, thm-heine-borel-rn, thm-metric-compactness-equivalences, lem-finite-set-has-max, def-max-min, def-rational-power, lem-of-abs-value, def-abs-value, lem-of-triangle-inequality, lem-of-sign-rules, def-ordered-field, thm-of-square-roots]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lp space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lp_space"
    - title: "Minkowski inequality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Minkowski_inequality"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ and let $p \in \mathbb{Q}$ with $p \ge 1$, with the norms
of [[def-p-norms-on-rn]]. Then:

1. $\lVert\cdot\rVert_p$ is a norm on $\mathbb{R}^{n}$
   ([[def-norm-and-normed-space]]).
2. For $n \ge 1$, $\lVert\cdot\rVert_\infty$ is a norm on $\mathbb{R}^{n}$.
3. **The dictionary.** For $n \ge 1$ and all $x, y \in \mathbb{R}^{n}$,
   $$\lVert x-y\rVert_1 = d_1(x,y), \qquad \lVert x-y\rVert_2 = d_2(x,y), \qquad \lVert x-y\rVert_\infty = d_\infty(x,y),$$
   where $d_1$, $d_2$, $d_\infty$ are the metrics of the published
   [[lem-metrics-on-rn]]. So the metric induced by each of these three norms
   ([[def-norm-and-normed-space]]) **is** the correspondingly named published
   metric, not merely one equivalent to it.

**Consequence, used repeatedly below and stated once here.** By clause 3 at
$p = 2$, the metric space $(\mathbb{R}^{n}, d_2)$ of the published metric-spaces
page and the metric space underlying the normed space
$(\mathbb{R}^{n}, \lVert\cdot\rVert_2)$ of this page are the same object. Hence
completeness ([[thm-euclidean-space-complete]] clause 2), Heine-Borel
([[thm-heine-borel-rn]] clause 2) and the compactness equivalences
([[thm-metric-compactness-equivalences]]) are statements about this page's normed
space, **with their hypothesis $n \ge 1$ inherited unchanged and not weakened**.
Nothing below cites any of those three theorems for $n = 0$.

**Why this lemma exists.** Without it the library would hold a norm-induced
metric on $\mathbb{R}^{n}$ and a separately published metric on the same set with
no recorded relation, and every later citation would have to guess which was
meant. The proof of clause 3 is a comparison of two written expressions; the
value is that the comparison is made and recorded.

## Facts & Assumptions

**Given:** A natural number $n$, a rational $p \ge 1$, vectors $x, y \in \mathbb{R}^{n}$ and a real $\lambda$; write $S(x) := \sum_{k<n}|x_k|^{p}$, so that $\lVert x\rVert_p = S(x)^{1/p}$ ([[def-p-norms-on-rn]], [[def-finite-sum]]).

[A1] For clauses 2 and 3, $n \ge 1$, so that $\{|x_k| : k<n\}$ is a nonempty finite set of reals ([[def-p-norms-on-rn]], [[lem-metrics-on-rn]]).

[L1] Rational powers ([[def-rational-power]], [[lem-rational-power-laws]]): for $a, b \ge 0$ and rationals $r, s > 0$ one has $a^{r} \ge 0$, $(ab)^{r} = a^{r}b^{r}$, $0^{r} = 0$, and $a^{r} > 0$ when $a > 0$; and for $a > 0$, $(a^{r})^{s} = a^{rs}$ and $a^{1} = a$.

[L2] Monotonicity in the base ([[lem-rational-power-monotone]] clause 2): for a rational $r > 0$ and reals $0 \le a < b$ one has $a^{r} < b^{r}$; hence $a \le b$ implies $a^{r} \le b^{r}$, the case $a = b$ being trivial, and $a^{r} = 0$ only for $a = 0$.

[L3] Laws of finite sums ([[lem-finite-sum-laws]], [[def-finite-sum]]): additivity, scaling, monotonicity; a sum of nonnegative terms is nonnegative, each single term is at most such a sum, and a sum of nonnegative terms that vanishes has every term $0$.

[L4] Minkowski's inequality for finite sums at rational $p \ge 1$ ([[thm-minkowski-finite]]): $\bigl(\sum_{k<n}|a_k+b_k|^{p}\bigr)^{1/p} \le \bigl(\sum_{k<n}|a_k|^{p}\bigr)^{1/p} + \bigl(\sum_{k<n}|b_k|^{p}\bigr)^{1/p}$.

[L5] Absolute value ([[lem-of-abs-value]], [[def-abs-value]], [[lem-of-triangle-inequality]]): $|t| \ge 0$; $|t| = 0$ exactly when $t = 0$; $|st| = |s|\,|t|$; $|s+t| \le |s|+|t|$; and $|t|^{2} = t^{2}$.

[L6] Maxima ([[lem-finite-set-has-max]], [[def-max-min]]): a nonempty finite set of reals has a maximum, the maximum belongs to the set and bounds it above, and a set with an upper bound belonging to it has that element as its maximum.

[L7] Order arithmetic: multiplying an inequality by a nonnegative real preserves it ([[lem-of-sign-rules]] in its strict form, together with the case of equality settled by totality), and $\le$ is transitive ([[def-ordered-field]]).

[L8] The norm axioms (N1), (N2), (N3) ([[def-norm-and-normed-space]]); $\lVert\cdot\rVert_2$ agrees with the Euclidean norm of [[def-euclidean-inner-product]], and is a norm by [[thm-cauchy-schwarz-and-the-euclidean-norm]]; square roots are the rational power at exponent $1/2$ ([[thm-of-square-roots]], [[def-p-norms-on-rn]]).

[L9] The published metrics on $\mathbb{R}^{n}$ for $n \ge 1$ are $d_1(x,y) = \sum_{k<n}|x_k-y_k|$, $d_2(x,y) = \sqrt{\sum_{k<n}(x_k-y_k)^{2}}$ and $d_\infty(x,y) = \max\{|x_k-y_k| : k<n\}$, and each is a metric ([[lem-metrics-on-rn]], [[def-metric-space]], [[def-metric-topology]]).

## Proof

**Proof technique:** direct.

1.1 Every term $|x_k|^{p}$ is nonnegative, so $S(x) \ge 0$ and $\lVert x\rVert_p = S(x)^{1/p}$ is defined and nonnegative. [L1, L3]

1.2 $S(x) = 0$ holds exactly when $|x_k|^{p} = 0$ for every $k<n$, a vanishing sum of nonnegative terms having every term $0$; and $|x_k|^{p} = 0$ exactly when $|x_k| = 0$, that is exactly when $x_k = 0$. [L1, L2, L3, L5]

1.3 For every $k<n$, $|(\lambda x)_k|^{p} = \bigl(|\lambda|\,|x_k|\bigr)^{p} = |\lambda|^{p}|x_k|^{p}$, so $S(\lambda x) = |\lambda|^{p}S(x)$ by scaling of finite sums. [L1, L3, L5]

1.4 Instantiating [L4] at $a_k := x_k$ and $b_k := y_k$, and using $(x+y)_k = x_k+y_k$, gives $\lVert x+y\rVert_p \le \lVert x\rVert_p + \lVert y\rVert_p$, which is axiom (N3) for $\lVert\cdot\rVert_p$. [L4, L8]

1.5 Under [A1] the set $\{|x_k| : k<n\}$ is nonempty and finite, so $\lVert x\rVert_\infty$ exists, is one of the $|x_k|$, and satisfies $|x_k| \le \lVert x\rVert_\infty$ for every $k<n$; in particular $\lVert x\rVert_\infty \ge 0$. [A1, L5, L6]

1.6 Under [A1], $\lVert x-y\rVert_1 = \sum_{k<n}|x_k-y_k|$ by the case $p=1$ of the definition, and that is the written expression for $d_1(x,y)$. [L1, L9]

1.7 Under [A1], $\lVert x-y\rVert_2 = \bigl(\sum_{k<n}|x_k-y_k|^{2}\bigr)^{1/2} = \sqrt{\sum_{k<n}(x_k-y_k)^{2}}$, using $|t|^{2} = t^{2}$ and the identification of the exponent $1/2$ with the nonnegative square root, and that is the written expression for $d_2(x,y)$. [L5, L8, L9]

1.8 Under [A1], $\lVert x-y\rVert_\infty = \max\{|x_k-y_k| : k<n\}$ by definition, and that is the written expression for $d_\infty(x,y)$. [L9]

2.1 $\lVert x\rVert_p = 0$ holds exactly when $S(x) = 0$, since $S(x) > 0$ would give $S(x)^{1/p} > 0$ and $0^{1/p} = 0$. [step 1.1, L1, L2]

2.2 Under [A1]: $\lVert x\rVert_\infty = 0$ forces $|x_k| \le 0$ and $|x_k| \ge 0$ for every $k<n$, hence $x = 0$; and $\lVert 0\rVert_\infty = 0$. This is (N1) for $\lVert\cdot\rVert_\infty$. [step 1.5, L5, L8]

2.3 Under [A1]: for every $k<n$, $|(\lambda x)_k| = |\lambda|\,|x_k| \le |\lambda|\,\lVert x\rVert_\infty$, and choosing $j<n$ with $|x_j| = \lVert x\rVert_\infty$ gives $|(\lambda x)_j| = |\lambda|\,\lVert x\rVert_\infty$; so $|\lambda|\lVert x\rVert_\infty$ belongs to the set and bounds it above, whence $\lVert \lambda x\rVert_\infty = |\lambda|\lVert x\rVert_\infty$. This is (N2) for $\lVert\cdot\rVert_\infty$. [step 1.5, L5, L6, L7]

2.4 Under [A1]: for every $k<n$, $|(x+y)_k| = |x_k+y_k| \le |x_k| + |y_k| \le \lVert x\rVert_\infty + \lVert y\rVert_\infty$; choosing $j<n$ with $|(x+y)_j| = \lVert x+y\rVert_\infty$ gives $\lVert x+y\rVert_\infty \le \lVert x\rVert_\infty + \lVert y\rVert_\infty$, which is (N3) for $\lVert\cdot\rVert_\infty$. [step 1.5, L5, L6, L7]

3.1 By steps 2.1 and 1.2, $\lVert x\rVert_p = 0$ exactly when $x_k = 0$ for every $k<n$, that is exactly when $x = 0$; this is axiom (N1) for $\lVert\cdot\rVert_p$. [step 2.1, step 1.2, L8]

3.2 Steps 2.2, 2.3 and 2.4 are (N1), (N2) and (N3) for $\lVert\cdot\rVert_\infty$ under [A1], so clause 2 holds. [step 2.2, step 2.3, step 2.4, A1, L8]

4.1 If $\lambda = 0$ then $\lambda x = 0$ and both sides of (N2) are $0$ by step 3.1; if $\lambda \ne 0$ then $|\lambda| > 0$, and step 1.3 with the power laws gives $\lVert \lambda x\rVert_p = \bigl(|\lambda|^{p}S(x)\bigr)^{1/p} = \bigl(|\lambda|^{p}\bigr)^{1/p}S(x)^{1/p} = |\lambda|^{p\cdot(1/p)}\lVert x\rVert_p = |\lambda|\,\lVert x\rVert_p$; this is axiom (N2). [step 1.3, step 3.1, L1, L5, L8]

5.1 Steps 3.1, 4.1 and 1.4 are (N1), (N2) and (N3) for $\lVert\cdot\rVert_p$, so clause 1 holds. [step 1.4, step 3.1, step 4.1, L8]

6.1 Steps 1.6, 1.7 and 1.8 give clause 3, and with steps 5.1 and 3.2 all three clauses are proved; in particular the metric induced by $\lVert\cdot\rVert_2$ on $\mathbb{R}^{n}$ for $n \ge 1$ is the published $d_2$, which is the consequence recorded in the Statement. [step 5.1, step 3.2, step 1.6, step 1.7, step 1.8, L9] ∎

## Remarks

- **What the consequence does and does not license.** Because the two metric spaces are literally the same, a published theorem about $(\mathbb{R}^{n}, d_2)$ may be quoted here verbatim. It may **not** be quoted with a weaker hypothesis: [[thm-euclidean-space-complete]], [[thm-heine-borel-rn]] and [[lem-metrics-on-rn]] are all stated for $n \ge 1$ only, because $d_\infty$ is a maximum over an empty index set at $n = 0$, and every item on this page that uses one of them carries $n \ge 1$ in its own statement.

- **Clause 1 holds at $n = 0$ and clause 2 does not apply there.** At $n = 0$ every $\lVert\cdot\rVert_p$ is the zero function on the one-element space $\mathbb{R}^{0}$, which is the unique norm on the zero space ([[def-norm-and-normed-space]]); $\lVert\cdot\rVert_\infty$ is not defined there at all.

- **The route to (N3) differs between the two families, and that is not an accident.** For $\lVert\cdot\rVert_p$ the triangle inequality is Minkowski's inequality, a genuine theorem about rational powers; for $\lVert\cdot\rVert_\infty$ it is the elementary argument of step 2.4, that a maximum of sums is at most the sum of the maxima. The second argument is the one that needs a nonempty index set.
````

### `lem-standard-basis-of-f-n`

````markdown
---
id: lem-standard-basis-of-f-n
kind: lemma
title: "The standard list $e : n \\to F^{n}$ with $e_i(i) = 1_F$ and $e_i(j) = 0_F$ for $j \\ne i$ is an ordered basis of $F^{n}$; hence $\\dim_F F^{n} = n$, and $F^{0}$ is the zero space with basis $\\varnothing$ and dimension $0$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-linear-basis, def-dimension, def-linear-independence, thm-unique-coordinates-with-respect-to-an-ordered-basis, def-function-space, def-linear-combination-and-span, def-sum-of-linear-subspaces, def-monoid-finite-product, lem-restriction-of-scalars, def-vector-space, def-field, lem-vector-space-elementary-consequences, thm-induction-principle, def-natural-numbers, lem-nat-order-is-membership, def-injection-surjection-bijection, def-equinumerous, def-countable]
justified_by: []
aliases: [lem-standard-basis, def-standard-unit-vectors]
landmark: true
short: "$\\dim_F F^{n} = n$"
proof_strategy: direct
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Standard basis (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Standard_basis"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Ch. 2"
      url: "https://linear.axler.net/"
    - title: "Cambridge University Press excerpt: Vector spaces and bases"
      url: "https://assets.cambridge.org/97810092/43902/excerpt/9781009243902_excerpt.pdf"
pipeline_run: null
---

## Statement

Let $F$ be a field ([[def-field]]), let $n \in \mathbb{N}$ and let $F^{n}$ be the
function space on the von Neumann natural $n = \{0, \dots, n-1\}$, with the
pointwise operations ([[def-function-space]], [[def-natural-numbers]],
[[lem-nat-order-is-membership]]). For $i < n$ define the **standard unit vector**
$e_i \in F^{n}$ by

$$e_i(i) = 1_F, \qquad e_i(j) = 0_F \ \text{ for } j < n \text{ with } j \ne i .$$

Then:

1. **Finite sums in a function space are pointwise.** For every set $X$, every
   $p \in \mathbb{N}$, every list $u : p \to F^{X}$ and every $j \in X$,
   $$\Bigl(\sum_{k<p} u_k\Bigr)(j) \;=\; \sum_{k<p} u_k(j),$$
   the right-hand sum being taken in $(F,+,0_F)$. (Stated here for an arbitrary
   $X$ because the companion page needs it at $X = \mathbb{N}$.)
2. $e : n \to F^{n}$ is an ordered basis of $F^{n}$ ([[def-linear-basis]]); in
   particular $e$ is injective and its image $e[n] = \{\, e_i : i < n \,\}$ is a
   basis of $F^{n}$ with $e[n] \approx n$ ([[def-equinumerous]]);
3. for every $\lambda : n \to F$ and every $j < n$,
   $\bigl(\sum_{i<n}\lambda_i e_i\bigr)(j) = \lambda_j$; equivalently the
   coordinate list of $x \in F^{n}$ with respect to the ordered basis $e$
   ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]) is
   $i \mapsto x(i)$;
4. $F^{n}$ is finite-dimensional over $F$ with $\dim_F F^{n} = n$
   ([[def-dimension]]);
5. at $n = 0$ this reads: $F^{0}$ has exactly one element, the empty function,
   so $F^{0}$ is the zero space, the empty list is its ordered basis,
   $\varnothing$ is its basis and $\dim_F F^{0} = 0$.

Every index runs from $0$, so the coordinates of an element of $F^{n}$ are
$x_0, \dots, x_{n-1}$ and no statement above is restricted to $n \ge 1$.

## Facts & Assumptions

**Given:** A field $F$, a natural number $n$, the vector space $F^{n}$ with pointwise operations, and the vectors $e_i$ for $i < n$.

[L1] $F^{X}$ is a vector space over $F$ with $(x+y)(j) = x(j)+y(j)$, $(\lambda x)(j) = \lambda\,x(j)$ and zero the constant function at $0_F$; two elements are equal exactly when they agree at every point; and $F^{0}$ has exactly one element, the empty function, which is $0_{F^{0}}$ ([[def-function-space]], [[def-vector-space]]).

[L2] Finite sums: $\sum_{k<0}u_k$ is the zero vector and $\sum_{k<\sigma(p)}u_k = \bigl(\sum_{k<p}u_k\bigr) + u_p$, in any vector space ([[def-monoid-finite-product]], [[def-linear-combination-and-span]]).

[L3] $F$ is a vector space over itself, with the field addition and multiplication ([[lem-restriction-of-scalars]], claim 1), so the finite sums of $\mathbb{N}$-indexed lists of scalars are available in $(F,+,0_F)$ and satisfy (F1) and (F3); in particular a list of scalars vanishing off a single index sums to its value at that index ([[def-sum-of-linear-subspaces]]).

[L4] In $F$: $\lambda 1_F = \lambda$ and $\lambda 0_F = 0_F$ for every $\lambda \in F$ ([[def-field]], [[lem-vector-space-elementary-consequences]]).

[L5] A list $v : n \to V$ is an ordered basis of $V$ if and only if every $x \in V$ is $\sum_{i<n}\lambda_i v_i$ for exactly one $\lambda : n \to F$; an ordered basis is injective and its image is a basis with $v[n] \approx n$ ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]], [[def-linear-basis]], [[def-linear-independence]], [[def-injection-surjection-bijection]]).

[L6] $\dim_F V$ is the unique $p \in \mathbb{N}$ with a basis $B \approx p$, defined when $V$ has a finite basis ([[def-dimension]], [[def-countable]]).

[L7] Induction on $\mathbb{N}$ ([[thm-induction-principle]]).

## Proof

**Proof technique:** direct.

1.1 Claim 1, that a finite sum in $F^{X}$ is computed pointwise: for every $p \in \mathbb{N}$, every list $u : p \to F^{X}$ and every $j \in X$, $\bigl(\sum_{k<p}u_k\bigr)(j) = \sum_{k<p}u_k(j)$, the right-hand sum being taken in $(F,+,0_F)$. By induction on $p$: at $p = 0$ the left side is the value at $j$ of the constant function $0_F$ and the right side is the empty sum $0_F$; and if it holds at $p$, then $\bigl(\sum_{k<\sigma(p)}u_k\bigr)(j) = \bigl(\sum_{k<p}u_k + u_p\bigr)(j) = \bigl(\sum_{k<p}u_k\bigr)(j) + u_p(j) = \sum_{k<p}u_k(j) + u_p(j) = \sum_{k<\sigma(p)}u_k(j)$, using pointwise addition and the recursion. [L1, L2, L3, L7]

2.1 Evaluating a combination of the $e_i$. Let $\lambda : n \to F$ and $j < n$. By step 1.1 and pointwise scalar multiplication, $\bigl(\sum_{i<n}\lambda_i e_i\bigr)(j) = \sum_{i<n}(\lambda_i e_i)(j) = \sum_{i<n}\lambda_i\, e_i(j)$. The list of scalars $i \mapsto \lambda_i\,e_i(j)$ takes the value $\lambda_i 0_F = 0_F$ at every $i \ne j$ and the value $\lambda_j 1_F = \lambda_j$ at $i = j$, so it vanishes off the single index $j$ and therefore sums to $\lambda_j$. Hence $\bigl(\sum_{i<n}\lambda_i e_i\bigr)(j) = \lambda_j$ for every $j < n$. [step 1.1, L1, L3, L4]

3.1 Existence and uniqueness of coordinates. Given $x \in F^{n}$, put $\lambda_i := x(i)$; by step 2.1 the vectors $\sum_{i<n}\lambda_i e_i$ and $x$ agree at every $j < n$, hence are equal. And if $\sum_{i<n}\lambda_i e_i = \sum_{i<n}\mu_i e_i$, then evaluating both sides at $j$ and using step 2.1 gives $\lambda_j = \mu_j$ for every $j < n$. So every $x \in F^{n}$ is $\sum_{i<n}\lambda_i e_i$ for exactly one $\lambda : n \to F$. [step 2.1, L1]

4.1 Claims 2 and 3. Step 2.1 is claim 3, and by the coordinate characterisation of an ordered basis, step 3.1 says exactly that $e$ is an ordered basis of $F^{n}$; hence $e$ is injective, $e[n]$ is a basis of $F^{n}$, and $e[n] \approx n$. [step 2.1, step 3.1, L5]

5.1 Claims 4 and 5. By step 4.1 the space $F^{n}$ has a basis with $n$ elements, so it is finite-dimensional and $\dim_F F^{n} = n$. At $n = 0$ the space $F^{0}$ has exactly one element, the empty function, which is its zero vector, so $F^{0}$ is the zero space; the list $e$ is then the empty list, its image is $\varnothing$, and $\dim_F F^{0} = 0$. [step 4.1, L1, L6] ∎

## Remarks

- **The indices start at $0$ because a natural number is the set of its predecessors.** $F^{n}$ is the function space $F^{X}$ at $X = n = \{0,\dots,n-1\}$ ([[def-function-space]], [[lem-nat-order-is-membership]]), so an element of $F^{n}$ is a function on $\{0,\dots,n-1\}$ and there is no $e_n$. Reading the standard basis off a $1$-indexed source would put a vector outside the space at one end and lose one at the other.

- **Step 1.1 is not a triviality to be skipped.** That a finite sum of functions is the pointwise finite sum is a statement about the recursion defining [[def-monoid-finite-product]] in two different monoids, and it is proved by induction. Every evaluation argument on this page and on the companion page rests on it.

- **This is the concrete counterweight to [[cor-every-vector-space-has-a-basis]].** Here a basis is written down and no choice principle is used anywhere; there a basis is produced by Zorn's lemma and none is exhibited. The companion page carries both extremes for infinite-dimensional spaces as well: an explicit infinite basis for the eventually zero families, and a basis of $\mathbb{R}$ over $\mathbb{Q}$ that no argument exhibits.
````

### `rem-real-exponents-deferred`

````markdown
---
id: rem-real-exponents-deferred
kind: remark
title: "Why real exponents are deferred"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-rational-power, lem-rational-power-monotone, lem-rational-power-laws, def-complete-ordered-field, thm-nth-roots-exist, thm-of-square-roots, thm-cauchy-schwarz-finite, lem-max-is-sup, def-real-limit, lem-of-q-dense, thm-of-archimedean]
forward_refs: [def-real-power, thm-real-power-laws]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I"
      url: "https://www.jirka.org/ra/realanal.pdf"
    - title: "Radicals and rational exponents (Emory University)"
      url: "https://mathcenter.oxford.emory.edu/site/math100/radicals/"
    - title: "Exponentiation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Exponentiation"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 (Exercise 6)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.7"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

What this page has built is $a^{r}$ for a positive real base $a$ and a
**rational** exponent $r$ ([[def-rational-power]]), together with its algebra
([[lem-rational-power-laws]]) and its order behaviour: strictly increasing in
$r$ for $a > 1$, constant for $a = 1$, strictly decreasing for $0 < a < 1$, and
strictly increasing in $a$ for a fixed positive exponent
([[lem-rational-power-monotone]]). Nothing here is a limit, a series or a
continuous function. Every value is produced by finitely many field operations
once the relevant root is available, and the only nonalgebraic ingredient
anywhere on the page is the least-upper-bound property
([[def-complete-ordered-field]]). It enters exactly one proof on the page
directly, the existence of $n$-th roots ([[thm-nth-roots-exist]]); everything
else here that needs a root cites a theorem rather than the property itself, and
those theorems are [[thm-nth-roots-exist]] and, for the root form of
Cauchy-Schwarz ([[thm-cauchy-schwarz-finite]]), the already published
[[thm-of-square-roots]]. In each case completeness is spent on producing a root
and on nothing else.

**The obvious next step, and how far it gets.** For $a > 1$ and a real $x$, put

$$E_a(x) := \sup\{\, a^{r} : r \in \mathbb{Q},\; r \le x \,\}.$$

This supremum exists. The set is nonempty because there is a rational below $x$,
and it is bounded above because there is a rational $R > x$, whence
$a^{r} \le a^{R}$ for every rational $r \le x$ by monotonicity in the exponent;
both rationals are supplied by the density of $\mathbb{Q}$ in $\mathbb{R}$
([[lem-of-q-dense]], [[thm-of-archimedean]]). The definition is also consistent
with what we already have: for a rational $x$ the set has greatest element
$a^{x}$, and a set with a greatest element has that element as its supremum
([[lem-max-is-sup]]), so $E_a(x) = a^{x}$. For $0 < a < 1$ one sets
$E_a(x) := 1/E_{1/a}(x)$, and $E_1(x) := 1$. So the object exists, it is the
right object, and it is monotone.

**Where it stops.** Proving the law $E_a(x+y) = E_a(x)E_a(y)$ from this
definition is not an algebraic manipulation. One has to compare a supremum over
rationals $r \le x + y$ with the products $a^{s}a^{t}$ for $s \le x$, $t \le y$,
and the two families are not the same: every $s + t$ is one of the $r$, but a
given $r \le x+y$ need only be *approximated* by such sums. Closing that gap is
an approximation argument, and an approximation argument needs a notion of limit
and an estimate that controls $a^{r} - a^{s}$ in terms of $r - s$. The library
does have a notion of convergent sequence of reals, introduced in the
construction of $\mathbb{R}$ via Cauchy sequences ([[def-real-limit]]), but no
continuity, no uniform continuity, no series and no derivative is available at
this point in its reading order, and each of those is exactly what the standard
proofs of the power laws for real exponents use. Writing such
a proof here would either import machinery that does not exist yet or quietly
assume it, and the second is the failure mode this library is built to avoid.

**The route the library will actually take.** General powers will be defined not
by the supremum above but through the exponential function and the logarithm,
via $a^{x} = \exp(x \log a)$ for $a > 0$. That route is developed much later,
after limits, continuity, series and differentiation are in place; the
exponential is built as a power series or as the solution of a differential
equation, the logarithm as its inverse, and the power laws for real exponents
then fall out of the functional equation $\exp(u+v) = \exp(u)\exp(v)$ instead of
being fought for one at a time. The supremum definition is then recovered as a
theorem rather than taken as a definition. That later development is now
published: [[def-real-power]] defines $a^{x} := \exp(x \log a)$ for $a > 0$ and
real $x$, and [[thm-real-power-laws]] proves the power laws for those exponents.

**Practical consequence for this page.** Everywhere an exponent appears in a
statement on this page it is an integer or a rational, and where that looks like
a restriction it is a real one. The weights in the weighted AM-GM inequality are
rational for this reason, and the conjugate exponent $q = p/(p-1)$ in Hölder and
Minkowski is rational precisely because $p$ is. Those statements are not weaker
versions of the classical ones waiting to be upgraded; they are the classical
ones, restricted to the exponents that currently have a meaning.
````

### `rem-rearrangement-in-higher-dimensions`

````markdown
---
id: rem-rearrangement-in-higher-dimensions
kind: remark
title: "The same question in $\\mathbb{R}^d$: what the set of rearrangement sums looks like, and why that answer is not reachable at this point in the reading order"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-riemann-series-theorem, thm-dirichlet-rearrangement, cor-unconditional-iff-absolute-in-r, def-rearrangement-and-unconditional-convergence]
justified_by: []
forward_refs: [thm-steinitz-polygonal-confinement, thm-rearrangement-sums-lie-in-an-affine-subspace]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "P. Lévy, Sur les séries semi-convergentes, Nouv. Ann. Math. (4) 5 (1905), 506-511"
      url: "https://www.numdam.org/item/NAM_1905_4_5__506_1/"
    - title: "E. Steinitz, Bedingt konvergente Reihen und konvexe Systeme, J. reine angew. Math. 143 (1913), 128-176"
      url: "https://www.degruyterbrill.com/document/doi/10.1515/crll.1913.143.128/html"
    - title: "Lévy–Steinitz theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/L%C3%A9vy%E2%80%93Steinitz_theorem"
pipeline_run: null
---

## Remark

Everything on this page is about series of **real numbers**, and the answer it
reaches is complete for that case. Write

$$\mathcal{S}(a) \;:=\; \Bigl\{\, s \in \mathbb{R} \ : \ \text{some rearrangement of } \sum a_k \text{ converges to } s \,\Bigr\}$$

for the **set of rearrangement sums** of a convergent series
([[def-rearrangement-and-unconditional-convergence]]). Then this page determines
$\mathcal{S}(a)$ exactly, in two cases and no others.

- If $\sum a_k$ converges absolutely, $\mathcal{S}(a)$ is the single point
  $\bigl\{\sum_{k=0}^{\infty} a_k\bigr\}$: that is
  [[thm-dirichlet-rearrangement]].
- If $\sum a_k$ converges conditionally, $\mathcal{S}(a)$ is the whole of
  $\mathbb{R}$: that is [[thm-riemann-series-theorem]], and moreover
  rearrangements exist whose partial sums diverge to $+\infty$ or to $-\infty$ or
  oscillate between any prescribed pair of extended reals.

[[cor-unconditional-iff-absolute-in-r]] is the statement that these two cases are
distinguished by absolute convergence and by nothing else.

**The same question can be asked of a series of vectors**, once one has a space in
which a series of vectors has a sum: given a convergent series in $\mathbb{R}^d$,
what does its set of rearrangement sums look like? That question was raised by
Paul Lévy in 1905 and taken up by Ernst Steinitz in 1913, and later by Wacław
Sierpiński; the references below are to those papers, and they are given as the
origin of the question. **What the literature answers is not stated here in any
form, and nothing on this page or anywhere else in this library depends on it.**
Part of it is now proved, later in the reading order and marked as forward
material: [[thm-steinitz-polygonal-confinement]] and
[[thm-rearrangement-sums-lie-in-an-affine-subspace]] establish that the set of
rearrangement sums is nonempty and lies inside an affine subspace. The reverse
inclusion, which is what would turn that containment into the classical answer,
is still proved nowhere here.

The reason is a matter of reading order, not of difficulty or of interest. Stating
the theorem requires $\mathbb{R}^d$ as a normed space (a norm, convergence of
vector sequences, and a notion of a convergent series of vectors), and that
vocabulary is introduced later in the reading order than this page. Rather than
borrow it, or state a theorem whose terms are not yet defined, the obligation is
recorded where it can be discharged: on the page that builds $\mathbb{R}^d$ as a
normed space and afterwards. When that page is reached, the question raised here
is the one it will answer.

**What is safe to say now, and is worth saying.** The one-dimensional dichotomy
above is stark: a single point, or everything. Nothing in the proof of
[[thm-riemann-series-theorem]] survives verbatim in higher dimensions, because it
is built on the order of $\mathbb{R}$: the greedy rule "add positive terms until
the running sum exceeds the target, then negative ones until it falls below"
presupposes that the terms are signed and that the target can be approached from
two sides. In $\mathbb{R}^d$ with $d \ge 2$ there is no such order, the terms
point in many directions, and the argument has no analogue. A reader who expects
the one-dimensional answer to generalise unchanged should treat that expectation
as unsupported until the later page settles it.

**No claim of this library is made about $\mathbb{R}^d$ above.** The two Lévy and
Steinitz papers are cited as the historical source of the question, not as
authority for a result used anywhere here; no item on this page or elsewhere in
the library rests on them.
````

### `thm-absolute-convergence-in-rn`

````markdown
---
id: thm-absolute-convergence-in-rn
kind: theorem
title: "An absolutely convergent series in $\\mathbb{R}^n$ converges, and every rearrangement converges to the same sum"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-series-of-vectors-and-rearrangement, thm-componentwise-convergence-and-completeness, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, def-norm-and-normed-space, thm-direct-comparison-test, thm-dirichlet-rearrangement, lem-absolute-convergence-implies-convergence, def-absolute-and-conditional-convergence, def-series, def-cauchy-in-metric, def-complete-metric-space, lem-metric-convergent-implies-cauchy, lem-real-line-is-a-metric-space, lem-metrics-on-rn, lem-finite-sum-laws, def-finite-sum, lem-standard-basis-of-f-n, def-injection-surjection-bijection, def-metric-convergence, def-real-limit]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Absolute convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Absolute_convergence"
    - title: "Riemann series theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_series_theorem"
    - title: "T. Banakh, A Simple Inductive Proof of the Levy-Steinitz Theorem"
      url: "https://arxiv.org/abs/1711.04136"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ with $n \ge 1$ and let $(x_k)$ be a sequence in
$\mathbb{R}^{n}$ whose series converges absolutely
([[def-series-of-vectors-and-rearrangement]]). Then:

1. $\sum x_k$ converges; write $s := \sum_{k=0}^{\infty}x_k$.
2. For every bijection $\sigma : \mathbb{N} \to \mathbb{N}$
   ([[def-injection-surjection-bijection]]) the rearranged series
   $\sum x_{\sigma(k)}$ converges absolutely, with
   $\sum_{k=0}^{\infty}x_{\sigma(k)} = s$.
3. Consequently $\mathcal{S}(x) = \{s\}$: the set of rearrangement sums is a
   single point.

**This is the $\mathbb{R}^{n}$ analogue of the published one-dimensional
statements, not a generalisation of their proofs.**
[[lem-absolute-convergence-implies-convergence]] and
[[thm-dirichlet-rearrangement]] are proved on the real line; everything below
reduces to them coordinatewise, or to completeness of $(\mathbb{R}^{n},d_2)$.

## Facts & Assumptions

**Given:** A natural $n \ge 1$; a sequence $(x_k)$ in $\mathbb{R}^{n}$ with $\sum \lVert x_k\rVert_2$ convergent; the vector partial sums $s_N = \sum_{k<N}x_k$ and the real partial sums $T_N = \sum_{k<N}\lVert x_k\rVert_2$; a bijection $\sigma$ of $\mathbb{N}$; a rational $\varepsilon > 0$.

[L1] Series of vectors, absolute convergence, rearrangement and $\mathcal{S}(x)$ ([[def-series-of-vectors-and-rearrangement]]); partial sums are computed pointwise, $(s_N)(j) = \sum_{k<N}(x_k)_j$ ([[lem-standard-basis-of-f-n]] clause 1, [[def-finite-sum]]).

[L2] The finite triangle inequality for a norm, $N(\sum_{k<p}u_k) \le \sum_{k<p}N(u_k)$, and the coordinate bound $|y_j| \le \lVert y\rVert_2$ for $j<n$ ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clauses 1 and 3, [[def-norm-and-normed-space]], [[def-p-norms-on-rn]]).

[L3] Splitting of finite sums: for $L \le N$, $\sum_{k<N}a_k = \sum_{k<L}a_k + \sum_{k=L}^{N-1}a_k$, and the same identity in $\mathbb{R}^{n}$ read pointwise ([[lem-finite-sum-laws]] clause 3, [[def-finite-sum]], [[lem-standard-basis-of-f-n]] clause 1).

[L4] $(\mathbb{R}^{n},d_2)$ is complete for $n \ge 1$, $d_2(u,v) = \lVert u-v\rVert_2$, and a sequence converging in a metric space is Cauchy ([[thm-componentwise-convergence-and-completeness]] clause 3, [[lem-p-norms-are-norms-and-induce-the-published-metrics]], [[lem-metrics-on-rn]], [[def-complete-metric-space]], [[def-cauchy-in-metric]], [[lem-metric-convergent-implies-cauchy]], [[lem-real-line-is-a-metric-space]]).

[L5] Componentwise convergence in $\mathbb{R}^{n}$ for $n \ge 1$ ([[thm-componentwise-convergence-and-completeness]] clause 1, [[def-metric-convergence]], [[def-real-limit]]).

[L6] The direct comparison test: if $0 \le a_k \le b_k$ from some index on and $\sum b_k$ converges, then $\sum a_k$ converges ([[thm-direct-comparison-test]], [[def-series]]).

[L7] Dirichlet's rearrangement theorem: if $\sum a_k$ converges absolutely then for every bijection $\sigma$ of $\mathbb{N}$ the series $\sum |a_{\sigma(k)}|$ converges with the same sum as $\sum|a_k|$, and $\sum a_{\sigma(k)}$ converges with the same sum as $\sum a_k$ ([[thm-dirichlet-rearrangement]], [[def-absolute-and-conditional-convergence]]).

[L8] Absolute convergence implies convergence for real series, and a convergent series of nonnegative terms is absolutely convergent, its terms being their own absolute values ([[lem-absolute-convergence-implies-convergence]], [[def-absolute-and-conditional-convergence]]).

## Proof

**Proof technique:** direct.

1.1 For $L \le N$: $s_N - s_L = \sum_{k=L}^{N-1}x_k$ and $T_N - T_L = \sum_{k=L}^{N-1}\lVert x_k\rVert_2$, both by splitting, the vector identity being the pointwise reading of the real one. [L1, L3]

1.2 The real sequence $(T_N)$ converges by hypothesis, hence is Cauchy in $(\mathbb{R},d_{\mathbb{R}})$: for every rational $\varepsilon>0$ there is $K$ with $|T_N - T_L| < \varepsilon$ for all $N,L \ge K$. [L4, L8]

1.3 For every $j<n$ and every $k$: $0 \le |(x_k)_j| \le \lVert x_k\rVert_2$. [L2]

1.4 Likewise $k \mapsto \lVert x_{\sigma(k)}\rVert_2$ is the rearrangement along $\sigma$ of $k \mapsto \lVert x_k\rVert_2$, a convergent series of nonnegative terms and therefore absolutely convergent, so $\sum_k\lVert x_{\sigma(k)}\rVert_2$ converges; that is, $\sum x_{\sigma(k)}$ converges absolutely. [L7, L8, L1]

2.1 Hence $\lVert s_N - s_L\rVert_2 \le \sum_{k=L}^{N-1}\lVert x_k\rVert_2 = T_N - T_L$ by the finite triangle inequality. [step 1.1, L2]

2.2 By step 1.3 and the comparison test, the real series $\sum_k |(x_k)_j|$ converges for every $j<n$; so each coordinate series $\sum_k (x_k)_j$ converges absolutely. [step 1.3, L6, L8]

3.1 By steps 2.1 and 1.2, for $N \ge L \ge K$ we get $d_2(s_N,s_L) = \lVert s_N-s_L\rVert_2 \le |T_N-T_L| < \varepsilon$, and the same bound with $N$ and $L$ exchanged; so $(s_N)$ is Cauchy in $(\mathbb{R}^{n},d_2)$. [step 2.1, step 1.2, L4]

3.2 Fix a bijection $\sigma$. For every $j<n$ the sequence $k \mapsto (x_{\sigma(k)})_j$ is the rearrangement along $\sigma$ of the sequence $k \mapsto (x_k)_j$; by step 2.2 the latter series converges absolutely, so Dirichlet's theorem gives that $\sum_k (x_{\sigma(k)})_j$ converges with the same sum as $\sum_k (x_k)_j$. [step 2.2, L7]

4.1 Since $(\mathbb{R}^{n},d_2)$ is complete, the Cauchy sequence $(s_N)$ converges; that is, $\sum x_k$ converges, which is clause 1. Write $s$ for its sum. [step 3.1, L4]

5.1 By clause 1 applied to the sequence $k \mapsto x_{\sigma(k)}$, which converges absolutely by step 1.4, the series $\sum x_{\sigma(k)}$ converges; and by step 3.2 each coordinate of its sum equals the corresponding coordinate of $s$, so its sum is $s$. This is clause 2. [step 4.1, step 3.2, step 1.4, L5]

6.1 By clause 2 every rearrangement of $\sum x_k$ converges to $s$, and the identity bijection shows $s \in \mathcal{S}(x)$; so $\mathcal{S}(x) = \{s\}$, which is clause 3. [step 4.1, step 5.1, L1] ∎

## Remarks

- **Two independent routes to clause 1 are available and only one is used.** The proof above uses completeness of $(\mathbb{R}^{n},d_2)$ together with the finite triangle inequality. The alternative is to run step 2.2 first and reassemble by [[thm-componentwise-convergence-and-completeness]] clause 1, using [[lem-absolute-convergence-implies-convergence]] on each coordinate. The two give the same theorem; mixing them would prove clause 1 twice.

- **The published Cauchy criterion for series** ([[thm-series-cauchy-criterion]]) is the standard packaging of step 1.2 and would serve in its place; the proof uses the plainer statement that a convergent real sequence is Cauchy, so that the index bookkeeping stays visible.

- **Clause 3 is the half of the rearrangement question this theorem settles.** For an absolutely convergent series the set of rearrangement sums is as small as it can be. What $\mathcal{S}(x)$ looks like when the series converges **without** converging absolutely is taken up in [[thm-rearrangement-sums-lie-in-an-affine-subspace]], which proves a containment and no more; see [[rem-rn-conventions-and-scope]] for exactly what this page does and does not settle.
````

### `thm-all-norms-on-rn-are-equivalent`

````markdown
---
id: thm-all-norms-on-rn-are-equivalent
kind: theorem
title: "For $n \\ge 1$ all norms on $\\mathbb{R}^n$ are equivalent"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, def-equivalent-norms, def-norm-and-normed-space, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, thm-heine-borel-rn, thm-extreme-value-metric, thm-metric-continuity-characterisations, def-metric-compactness, def-metric-bounded-diameter, def-metric-topology, def-metric-ball, lem-standard-basis-of-f-n, def-metric-continuity, lem-of-inverse-positive, def-complete-ordered-field, thm-of-square-roots, lem-metrics-on-rn, def-isometry-and-metric-embedding]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Norm (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Norm_(mathematics)"
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ with $n \ge 1$. Then any two norms on $\mathbb{R}^{n}$ are
equivalent ([[def-equivalent-norms]], [[def-norm-and-normed-space]]).

More precisely, for every norm $N$ on $\mathbb{R}^{n}$ there are reals
$c > 0$ and $C' > 0$ with

$$c\,\lVert x\rVert_2 \;\le\; N(x) \;\le\; C'\,\lVert x\rVert_2 \qquad \text{for every } x \in \mathbb{R}^{n},$$

and the general statement follows because equivalence of norms is an equivalence
relation.

**Consequently all the metric notions on $\mathbb{R}^{n}$ are norm independent**
for $n \ge 1$: any two norms give the same open sets, the same convergent
sequences with the same limits, the same Cauchy sequences and the same uniformly
continuous maps ([[def-equivalent-norms]]).

**The hypothesis $n \ge 1$ is used twice in the proof and both uses are marked**:
once so that the constant $C$ of
[[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] exists, and once
so that the Euclidean unit sphere is **nonempty**, which is what the extreme
value theorem needs. At $n = 0$ the conclusion is true but vacuous, the zero
space carrying exactly one norm ([[def-norm-and-normed-space]]), and it is not
obtained from the argument below.

## Facts & Assumptions

**Given:** A natural $n \ge 1$, the space $\mathbb{R}^{n}$ with the norms of [[def-p-norms-on-rn]] and the published metric $d_2$ ([[lem-metrics-on-rn]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]]), and a norm $N$ on $\mathbb{R}^{n}$; write $S := \{\, x \in \mathbb{R}^{n} : \lVert x\rVert_2 = 1 \,\}$.

[L1] For $n \ge 1$: $C := \max\{N(e_k) : k<n\}$ exists with $C \ge 0$, $N(x) \le C\lVert x\rVert_1$, $\lVert x\rVert_1 \le \sqrt{\iota(n)}\lVert x\rVert_2$, and $N$ is continuous as a map $(\mathbb{R}^{n}, d_2) \to (\mathbb{R}, d_{\mathbb{R}})$ ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clauses 2, 3, 4).

[L2] Equivalence of norms is an equivalence relation, and $c M \le N \le C M$ with $c, C > 0$ is what it means ([[def-equivalent-norms]]).

[L3] Heine-Borel in $\mathbb{R}^{n}$ for $n \ge 1$: a subset of $(\mathbb{R}^{n},d_2)$ is compact if and only if it is closed and bounded ([[thm-heine-borel-rn]] clause 2, [[def-metric-compactness]], [[def-metric-topology]], [[def-metric-bounded-diameter]]).

[L4] Extreme value theorem: a continuous real-valued function on a **nonempty** compact metric space attains a least value ([[thm-extreme-value-metric]]).

[L5] Continuity characterisations: a map of metric spaces continuous at every point has closed preimages of closed sets ([[thm-metric-continuity-characterisations]], clause (c)).

[L6] Balls, openness and boundedness ([[def-metric-ball]], [[def-metric-topology]], [[def-metric-bounded-diameter]]): $U$ is open when every point of $U$ has a ball inside $U$; $A$ is bounded when $A = \emptyset$ or $A \subseteq B(x_0,r)$ for some $x_0$ and real $r>0$.

[L7] The norm axioms (N1) and (N2), and nonnegativity of a norm ([[def-norm-and-normed-space]]).

[L8] The standard basis vector $e_0 \in \mathbb{R}^{n}$ exists for $n \ge 1$, with $e_0(0) = 1$ and $e_0(j) = 0$ for $0 \ne j < n$ ([[lem-standard-basis-of-f-n]]); hence $\lVert e_0\rVert_2 = \sqrt{1} = 1$ ([[def-p-norms-on-rn]], [[thm-of-square-roots]]).

[L9] Inverses: $u > 0$ gives $u^{-1} > 0$, and trichotomy of the order of $\mathbb{R}$ ([[lem-of-inverse-positive]], [[def-complete-ordered-field]]).

[L10] Continuity at a point in the $\varepsilon$-$\delta$ form, and the metric subspace $(A, d_A)$ with $d_A$ the restriction of $d$ ([[def-metric-continuity]], [[def-isometry-and-metric-embedding]], [[def-metric-compactness]]).

## Proof

**Proof technique:** direct.

1.1 The singleton $\{1\} \subseteq \mathbb{R}$ is closed: if $y \ne 1$ then $r := |y-1| > 0$ and the ball $B(y,r)$ omits $1$, so the complement of $\{1\}$ is open. [L6, L9]

1.2 $\lVert\cdot\rVert_2$ is itself a norm on $\mathbb{R}^{n}$, so by [L1] applied to it, $\lVert\cdot\rVert_2 : (\mathbb{R}^{n},d_2) \to (\mathbb{R},d_{\mathbb{R}})$ is continuous. [L1, L7]

1.3 $S \subseteq B(0,2)$, since $x \in S$ gives $d_2(x,0) = \lVert x\rVert_2 = 1 < 2$; so $S$ is bounded. [L6, L7]

1.4 $e_0 \in S$, because $\lVert e_0\rVert_2 = 1$; this is where $n \ge 1$ is used, since for $n = 0$ there is no index $0 < n$ and no such vector. So $S \ne \emptyset$. [L8]

1.5 For every $a \in S$ and every real $\varepsilon > 0$, a $\delta > 0$ witnessing continuity of $N$ at $a$ as a map on $\mathbb{R}^{n}$ also witnesses it for the restriction $N|_S$ on the metric subspace $(S, d_S)$, because $d_S$ is the restriction of $d_2$ and the condition is quantified over fewer points; so $N|_S$ is continuous. [L1, L10]

1.6 Put $C' := C\sqrt{\iota(n)} + 1$, a real $> 0$. By [L1], $N(x) \le C\lVert x\rVert_1 \le C\sqrt{\iota(n)}\lVert x\rVert_2 \le C'\lVert x\rVert_2$, the last step because $\lVert x\rVert_2 \ge 0$. [L1, L7]

2.1 $S$ is the preimage of $\{1\}$ under the continuous $\lVert\cdot\rVert_2$, hence closed in $\mathbb{R}^{n}$. [step 1.1, step 1.2, L5]

3.1 $S$ is a compact subset of $(\mathbb{R}^{n},d_2)$, being closed and bounded. [step 1.3, step 2.1, L3]

4.1 By the extreme value theorem applied to the nonempty compact metric space $(S,d_S)$ and the continuous $N|_S$, there is $x_{\min} \in S$ with $N(x_{\min}) \le N(x)$ for every $x \in S$; put $c := N(x_{\min})$. [step 1.4, step 1.5, step 3.1, L4]

5.1 $c > 0$: from $x_{\min} \in S$ we get $\lVert x_{\min}\rVert_2 = 1 \ne 0$, so $x_{\min} \ne 0$ by (N1) for $\lVert\cdot\rVert_2$, so $N(x_{\min}) \ne 0$ by (N1) for $N$, and $N(x_{\min}) \ge 0$; trichotomy leaves $c > 0$. [step 4.1, L7, L9]

5.2 Let $x \ne 0$. Then $\lVert x\rVert_2 > 0$ by (N1) and nonnegativity, so $t := 1/\lVert x\rVert_2 > 0$ and $u := t\,x$ satisfies $\lVert u\rVert_2 = |t|\,\lVert x\rVert_2 = 1$ by (N2); hence $u \in S$ and $c \le N(u) = |t|\,N(x) = N(x)/\lVert x\rVert_2$, that is $c\,\lVert x\rVert_2 \le N(x)$. [step 4.1, L7, L9]

6.1 For $x = 0$ both $c\lVert x\rVert_2$ and $N(x)$ are $0$ by (N1), so $c\lVert x\rVert_2 \le N(x)$ holds for every $x \in \mathbb{R}^{n}$. [step 5.2, L7]

7.1 Steps 5.1, 6.1 and 1.6 give $c\lVert x\rVert_2 \le N(x) \le C'\lVert x\rVert_2$ with $c, C' > 0$, so every norm $N$ on $\mathbb{R}^{n}$ is equivalent to $\lVert\cdot\rVert_2$. [step 5.1, step 6.1, step 1.6, L2]

8.1 Given two norms $M$ and $N$ on $\mathbb{R}^{n}$, each is equivalent to $\lVert\cdot\rVert_2$ by step 7.1, so $M$ is equivalent to $N$ by symmetry and transitivity of the relation. [step 7.1, L2] ∎

## Remarks

- **What the proof spends, and where it stops.** The only nonelementary ingredients are compactness of the Euclidean unit sphere, obtained from [[thm-heine-borel-rn]], and the extreme value theorem [[thm-extreme-value-metric]]. Heine-Borel in $\mathbb{R}^{n}$ is proved by bisection and uses no choice principle, and the extreme value theorem is a theorem of ZF ([[rem-compactness-choice-ledger-metric]]), so this theorem costs no choice either.

- **The sphere is where the argument is finite-dimensional.** The step that fails outside $\mathbb{R}^{n}$ is step 3.1: closed and bounded gives compact by [[thm-heine-borel-rn]], a theorem about $\mathbb{R}^{n}$ for a natural $n$ and about nothing else. The companion page exhibits a real vector space carrying two inequivalent norms, and the same space with a closed bounded set that is not compact. **This remark is a statement about this proof and about that witness; no claim is made here about normed spaces in general, a theory this library has not built.**

- **The constants are not canonical.** Nothing in the statement fixes $c$ or $C'$, and the proof produces one admissible pair, not the best one. Sharp constants for the three named norms on $\mathbb{R}^{2}$ are computed on the companion page.
````

### `thm-cauchy-schwarz-and-the-euclidean-norm`

````markdown
---
id: thm-cauchy-schwarz-and-the-euclidean-norm
kind: theorem
title: "Cauchy-Schwarz $\\lvert\\langle x,y\\rangle\\rvert \\le \\lVert x\\rVert_2\\lVert y\\rVert_2$ with its equality case, the triangle inequality for $\\lVert\\cdot\\rVert_2$, the parallelogram law and polarisation"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-euclidean-inner-product, def-norm-and-normed-space, thm-cauchy-schwarz-finite, thm-minkowski-finite, lem-finite-sum-laws, def-finite-sum, thm-of-square-roots, lem-of-square-monotone, lem-metrics-on-rn, def-integer-power, lem-of-abs-value, def-abs-value]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Cauchy-Schwarz inequality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy%E2%80%93Schwarz_inequality"
    - title: "Parallelogram law (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Parallelogram_law"
    - title: "Polarization identity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Polarization_identity"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ and let $x, y \in \mathbb{R}^{n}$, with the Euclidean
inner product and the Euclidean norm as in [[def-euclidean-inner-product]]. Then:

1. **Cauchy-Schwarz.**
   $$\lvert\langle x,y\rangle\rvert \;\le\; \lVert x\rVert_2\,\lVert y\rVert_2 ,$$
   with equality if and only if there is a pair $(\lambda,\mu) \ne (0,0)$ of
   reals with $\lambda x_k = \mu y_k$ for every $k < n$.
2. **$\lVert\cdot\rVert_2$ is a norm on $\mathbb{R}^{n}$**
   ([[def-norm-and-normed-space]]), for **every** $n \in \mathbb{N}$; the metric
   it induces is $d_2$ of [[lem-metrics-on-rn]] whenever $n \ge 1$.
3. **Parallelogram law.**
   $$\lVert x+y\rVert_2^{2} + \lVert x-y\rVert_2^{2} \;=\; 2\lVert x\rVert_2^{2} + 2\lVert y\rVert_2^{2} .$$
4. **Polarisation.**
   $$\langle x,y\rangle \;=\; \tfrac14\Bigl(\lVert x+y\rVert_2^{2} - \lVert x-y\rVert_2^{2}\Bigr),$$
   so the inner product is recovered from the norm it induces.

**Clause 1 is a citation, not a new proof.** The inequality and its equality case
are the published [[thm-cauchy-schwarz-finite]], stated there for two lists of
reals; all that happens below is that it is read in the vector notation of
[[def-euclidean-inner-product]]. Re-proving it here would put two proofs of one
statement in the library.

## Facts & Assumptions

**Given:** A natural number $n$ and vectors $x, y \in \mathbb{R}^{n}$, so that $\langle x,y\rangle = \sum_{k<n}x_ky_k$ and $\lVert x\rVert_2 = \sqrt{\langle x,x\rangle}$ ([[def-euclidean-inner-product]], [[def-finite-sum]]).

[L1] Cauchy-Schwarz for finite sums ([[thm-cauchy-schwarz-finite]]): $\bigl(\sum_{k<n}a_kb_k\bigr)^{2} \le \bigl(\sum_{k<n}a_k^{2}\bigr)\bigl(\sum_{k<n}b_k^{2}\bigr)$, with equality if and only if there is $(\lambda,\mu) \ne (0,0)$ with $\lambda a_k = \mu b_k$ for every $k<n$; and the root form $\bigl|\sum_{k<n}a_kb_k\bigr| \le \sqrt{\sum_{k<n}a_k^{2}}\sqrt{\sum_{k<n}b_k^{2}}$.

[L2] The inner product is symmetric, bilinear and positive definite, $\langle x,x\rangle = \sum_{k<n}x_k^{2} \ge 0$, and $\langle x,x\rangle = 0$ exactly when $x = 0$ ([[def-euclidean-inner-product]], [[lem-finite-sum-laws]]).

[L3] Square roots ([[thm-of-square-roots]]): every $c \ge 0$ has a unique $s \ge 0$ with $s^{2} = c$, written $\sqrt{c}$; hence $\lVert x\rVert_2 \ge 0$ and $\lVert x\rVert_2^{2} = \langle x,x\rangle$ ([[def-integer-power]]).

[L4] Squaring is monotone on the nonnegatives: for $a,b \ge 0$, $a \le b$ if and only if $a^{2} \le b^{2}$, and $a = b$ if and only if $a^{2} = b^{2}$ ([[lem-of-square-monotone]]).

[L5] Absolute value ([[lem-of-abs-value]], [[def-abs-value]]): $|t| \ge 0$, $|t|^{2} = t^{2}$, and $|st| = |s|\,|t|$.

[L6] The norm axioms (N1), (N2), (N3) ([[def-norm-and-normed-space]]), and the fact that $d_2(u,v) = \lVert u-v\rVert_2$ for $n \ge 1$ ([[lem-metrics-on-rn]], [[def-euclidean-inner-product]] clause 6).

## Proof

**Proof technique:** direct.

1.1 Instantiating [L1] at $a_k := x_k$ and $b_k := y_k$ gives $\langle x,y\rangle^{2} \le \langle x,x\rangle\,\langle y,y\rangle$, with equality exactly when some $(\lambda,\mu) \ne (0,0)$ has $\lambda x_k = \mu y_k$ for every $k<n$. [L1, L2]

1.2 Both $\lvert\langle x,y\rangle\rvert$ and $\lVert x\rVert_2\lVert y\rVert_2$ are nonnegative, and their squares are $\langle x,y\rangle^{2}$ and $\langle x,x\rangle\langle y,y\rangle$. [L3, L5]

1.3 Expanding by bilinearity and symmetry, $\langle x+y, x+y\rangle = \langle x,x\rangle + \langle x,y\rangle + \langle y,x\rangle + \langle y,y\rangle = \lVert x\rVert_2^{2} + 2\langle x,y\rangle + \lVert y\rVert_2^{2}$. [L2, L3]

1.4 The same expansion at $x - y = x + (-1)y$ gives $\lVert x-y\rVert_2^{2} = \lVert x\rVert_2^{2} - 2\langle x,y\rangle + \lVert y\rVert_2^{2}$. [L2, L3]

1.5 For a scalar $\lambda$, $\langle \lambda x, \lambda x\rangle = \lambda^{2}\langle x,x\rangle = |\lambda|^{2}\lVert x\rVert_2^{2}$, so $\lVert \lambda x\rVert_2^{2} = \bigl(|\lambda|\lVert x\rVert_2\bigr)^{2}$. [L2, L3, L5]

1.6 Axiom (N1) holds: $\lVert x\rVert_2 = 0$ if and only if $\lVert x\rVert_2^{2} = \langle x,x\rangle = 0$, which by positive definiteness says $x = 0$. [L2, L3, L4]

2.1 Comparing the squares of step 1.2 through step 1.1 and using monotonicity of squaring on the nonnegatives yields $\lvert\langle x,y\rangle\rvert \le \lVert x\rVert_2\lVert y\rVert_2$, with equality exactly in the proportional case of step 1.1; this is clause 1. [step 1.1, step 1.2, L4]

2.2 Adding the identities of step 1.3 and step 1.4 gives $\lVert x+y\rVert_2^{2} + \lVert x-y\rVert_2^{2} = 2\lVert x\rVert_2^{2} + 2\lVert y\rVert_2^{2}$, which is clause 3. [step 1.3, step 1.4, algebra]

2.3 Subtracting the identity of step 1.4 from that of step 1.3 gives $\lVert x+y\rVert_2^{2} - \lVert x-y\rVert_2^{2} = 4\langle x,y\rangle$, which is clause 4 after dividing by $4$. [step 1.3, step 1.4, algebra]

2.4 Both $\lVert \lambda x\rVert_2$ and $|\lambda|\lVert x\rVert_2$ are nonnegative and by step 1.5 have equal squares, so $\lVert \lambda x\rVert_2 = |\lambda|\lVert x\rVert_2$, which is axiom (N2). [step 1.5, L3, L4, L5]

3.1 By step 2.1 the middle term of step 1.3 satisfies $2\langle x,y\rangle \le 2\lVert x\rVert_2\lVert y\rVert_2$, so $\lVert x+y\rVert_2^{2} \le \lVert x\rVert_2^{2} + 2\lVert x\rVert_2\lVert y\rVert_2 + \lVert y\rVert_2^{2} = \bigl(\lVert x\rVert_2 + \lVert y\rVert_2\bigr)^{2}$. [step 1.3, step 2.1, L5, algebra]

4.1 Both $\lVert x+y\rVert_2$ and $\lVert x\rVert_2 + \lVert y\rVert_2$ are nonnegative, so step 3.1 and monotonicity of squaring give $\lVert x+y\rVert_2 \le \lVert x\rVert_2 + \lVert y\rVert_2$, which is axiom (N3). [step 3.1, L3, L4]

5.1 Steps 2.4, 1.6 and 4.1 are exactly (N1), (N2) and (N3), so $\lVert\cdot\rVert_2$ is a norm on $\mathbb{R}^{n}$ for every $n \in \mathbb{N}$, and for $n \ge 1$ the metric it induces is $d_2$; this is clause 2, and with steps 2.1, 2.2 and 2.3 all four clauses are proved. [step 2.1, step 2.2, step 2.3, step 2.4, step 1.6, step 4.1, L6] ∎

## Remarks

- **Which route to the triangle inequality was taken.** The proof above obtains (N3) by expanding $\lVert x+y\rVert_2^{2}$ and applying Cauchy-Schwarz. The alternative is to quote [[thm-minkowski-finite]] at the rational exponent $p = 2$, which states the same inequality directly; that route is equally legitimate and is the one [[lem-p-norms-are-norms-and-induce-the-published-metrics]] uses for a general exponent. Only one of the two is used here, so no statement is proved twice.

- **Clause 1 holds at $n = 0$, where it reads $0 \le 0$**, and the equality case is then satisfied by every pair $(\lambda,\mu) \ne (0,0)$, the condition quantifying over no indices. Clause 2 also holds at $n = 0$, the zero space carrying exactly one norm ([[def-norm-and-normed-space]]). What is not available at $n = 0$ is the metric $d_2$ of [[lem-metrics-on-rn]], which is why the last sentence of clause 2 carries $n \ge 1$.

- **Clauses 3 and 4 are what the companion page uses.** The parallelogram law is an identity satisfied by every norm of the form $\sqrt{\langle\cdot,\cdot\rangle}$, so a norm violating it is not of that form; that is how the companion page rules out $\lVert\cdot\rVert_1$ on $\mathbb{R}^{2}$. Polarisation says the inner product carries no information the norm does not.
````

### `thm-componentwise-convergence-and-completeness`

````markdown
---
id: thm-componentwise-convergence-and-completeness
kind: theorem
title: "For $n \\ge 1$ a sequence in $\\mathbb{R}^n$ converges iff each coordinate sequence converges, is Cauchy iff each coordinate sequence is Cauchy, and $\\mathbb{R}^n$ is complete in every norm"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, thm-all-norms-on-rn-are-equivalent, def-equivalent-norms, lem-p-norms-are-norms-and-induce-the-published-metrics, def-p-norms-on-rn, thm-euclidean-space-complete, def-complete-metric-space, def-metric-convergence, def-cauchy-in-metric, lem-metric-limits-unique, lem-metric-convergent-implies-cauchy, lem-metrics-on-rn, lem-standard-basis-of-f-n, def-sequence, def-real-limit, def-canonical-natural, lem-of-naturals-positive, lem-of-inverse-positive, lem-finite-set-has-max, def-max-min, lem-real-line-is-a-metric-space, def-norm-and-normed-space, thm-well-ordering-principle]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Complete metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Complete_metric_space"
    - title: "Euclidean space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Euclidean_space"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ with $n \ge 1$, let $\mathbb{R}^{n}$ carry the Euclidean
metric $d_2$ of [[lem-metrics-on-rn]], and let $\bigl(x^{(j)}\bigr)_{j\in\mathbb{N}}$
be a sequence in $\mathbb{R}^{n}$ ([[def-metric-convergence]]). For $k < n$ write
$\bigl(x^{(j)}_k\bigr)_{j\in\mathbb{N}}$ for the $k$-th **coordinate sequence**,
a sequence of reals ([[def-sequence]]). Then:

1. **Convergence is componentwise.** For $x \in \mathbb{R}^{n}$,
   $x^{(j)} \to x$ in $(\mathbb{R}^{n}, d_2)$ if and only if
   $x^{(j)}_k \to x_k$ in $\mathbb{R}$ for every $k<n$
   ([[def-real-limit]]).
2. **Cauchyness is componentwise.** $\bigl(x^{(j)}\bigr)$ is Cauchy in
   $(\mathbb{R}^{n},d_2)$ ([[def-cauchy-in-metric]]) if and only if every
   coordinate sequence is Cauchy in $\mathbb{R}$.
3. **Completeness in every norm.** For every norm $N$ on $\mathbb{R}^{n}$
   ([[def-norm-and-normed-space]]) the metric space $(\mathbb{R}^{n}, d_N)$ is
   complete ([[def-complete-metric-space]]).

**Clause 3 is obtained by citation and is not reproved here.**
[[thm-euclidean-space-complete]] clause 2 states that $(\mathbb{R}^{n},d_2)$ is
complete, **for $n \ge 1$ only**, and this theorem carries that hypothesis
forward without weakening it; what is added is the passage from $d_2$ to an
arbitrary norm, through [[thm-all-norms-on-rn-are-equivalent]] and the dictionary
of [[def-equivalent-norms]].

## Facts & Assumptions

**Given:** A natural $n \ge 1$; the space $\mathbb{R}^{n}$ with the norms of [[def-p-norms-on-rn]] and the metric $d_2$; a sequence $\bigl(x^{(j)}\bigr)$ in $\mathbb{R}^{n}$; a point $x \in \mathbb{R}^{n}$; a norm $N$ on $\mathbb{R}^{n}$; and a rational $\varepsilon > 0$.

[L1] The comparison chain for $n \ge 1$ ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clause 3): $\lVert y\rVert_\infty \le \lVert y\rVert_2 \le \lVert y\rVert_1 \le \iota(n)\lVert y\rVert_\infty$ for every $y \in \mathbb{R}^{n}$, where $\lVert y\rVert_\infty = \max\{|y_k| : k<n\}$ ([[def-p-norms-on-rn]], [[lem-finite-set-has-max]], [[def-max-min]]).

[L2] The dictionary $d_2(u,v) = \lVert u-v\rVert_2$, and $(u-v)_k = u_k - v_k$ ([[lem-p-norms-are-norms-and-induce-the-published-metrics]], [[lem-standard-basis-of-f-n]]).

[L3] Convergence and Cauchyness in a metric space, and their agreement on $\mathbb{R}$ with the real notions ([[def-metric-convergence]], [[def-cauchy-in-metric]], [[def-real-limit]], [[lem-real-line-is-a-metric-space]]); rational and real $\varepsilon$ may be used interchangeably in both.

[L4] $(\mathbb{R}^{n}, d_2)$ is complete for $n \ge 1$ ([[thm-euclidean-space-complete]] clause 2, [[def-complete-metric-space]]).

[L5] All norms on $\mathbb{R}^{n}$ are equivalent for $n \ge 1$ ([[thm-all-norms-on-rn-are-equivalent]]), and equivalent norms have the same convergent sequences with the same limits and the same Cauchy sequences ([[def-equivalent-norms]]).

[L6] Limits in a metric space are unique, and every convergent sequence is Cauchy ([[lem-metric-limits-unique]], [[lem-metric-convergent-implies-cauchy]]).

[L7] $\iota(n) > 0$ for $n \ge 1$, and $u > 0$ gives $u^{-1} > 0$ ([[def-canonical-natural]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

[L8] A nonempty finite set of naturals has a greatest element, and every nonempty set of naturals has a least element ([[lem-finite-set-has-max]], [[def-max-min]], [[thm-well-ordering-principle]]).

## Proof

**Proof technique:** direct.

1.1 For every $y \in \mathbb{R}^{n}$ and every $k<n$: $|y_k| \le \lVert y\rVert_\infty \le \lVert y\rVert_2$, the first inequality because $\lVert y\rVert_\infty$ bounds the set it is the maximum of. [L1]

1.2 For every $y \in \mathbb{R}^{n}$: $\lVert y\rVert_2 \le \iota(n)\lVert y\rVert_\infty$, and $\lVert y\rVert_\infty = |y_{k_0}|$ for some $k_0 < n$. [L1]

1.3 Conversely suppose $x^{(j)}_k \to x_k$ for every $k<n$. Given a rational $\varepsilon > 0$, the real $\varepsilon/\iota(n)$ is positive, so for each $k<n$ the set of indices $K$ such that $|x^{(j)}_k - x_k| < \varepsilon/\iota(n)$ for all $j \ge K$ is a nonempty set of naturals; let $K_k$ be its least element, a determination rather than a selection, and put $K := \max\{K_0,\dots,K_{n-1}\}$, a maximum of a nonempty finite set of naturals. [L3, L7, L8]

1.4 $(\mathbb{R}^{n},d_2)$ is complete, by citation and for $n \ge 1$ only. [L4]

1.5 Let $N$ be any norm on $\mathbb{R}^{n}$. By [L5], $N$ and $\lVert\cdot\rVert_2$ are equivalent, so $d_N$ and $d_2$ have the same Cauchy sequences and the same convergent sequences with the same limits. [L5]

2.1 For all $u,v \in \mathbb{R}^{n}$ and $k<n$: $|u_k - v_k| \le d_2(u,v) \le \iota(n)\max\{|u_k-v_k| : k<n\}$, by steps 1.1 and 1.2 applied to $y := u - v$. [step 1.1, step 1.2, L2]

2.2 Hence a Cauchy sequence in $(\mathbb{R}^{n},d_N)$ is Cauchy in $(\mathbb{R}^{n},d_2)$, converges there by step 1.4, and therefore converges in $(\mathbb{R}^{n},d_N)$ to the same point; so $(\mathbb{R}^{n},d_N)$ is complete, which is clause 3. [step 1.4, step 1.5, L5, L6]

3.1 Suppose $x^{(j)} \to x$ in $(\mathbb{R}^{n},d_2)$ and fix $k<n$. Given a rational $\varepsilon > 0$, take $K$ with $d_2(x^{(j)},x) < \varepsilon$ for $j \ge K$; then $|x^{(j)}_k - x_k| \le d_2(x^{(j)},x) < \varepsilon$ for $j \ge K$, so $x^{(j)}_k \to x_k$. [step 2.1, L3]

3.2 For $j \ge K$ and every $k<n$ we have $|x^{(j)}_k - x_k| < \varepsilon/\iota(n)$; the maximum of these $n$ numbers is one of them, so $\max\{|x^{(j)}_k - x_k| : k<n\} < \varepsilon/\iota(n)$ and hence $d_2(x^{(j)},x) < \iota(n)\cdot\varepsilon/\iota(n) = \varepsilon$ by step 2.1. Therefore $x^{(j)} \to x$. [step 2.1, step 1.3, L1, L7]

3.3 The same two estimates prove clause 2 with $x$ replaced by $x^{(l)}$ throughout: if $d_2(x^{(j)},x^{(l)}) < \varepsilon$ for $j,l \ge K$ then $|x^{(j)}_k - x^{(l)}_k| < \varepsilon$ for $j,l \ge K$ and every $k<n$; and conversely, choosing for each $k<n$ the least $K_k$ beyond which $|x^{(j)}_k - x^{(l)}_k| < \varepsilon/\iota(n)$ for $j,l \ge K_k$ and taking $K := \max\{K_0,\dots,K_{n-1}\}$ gives $d_2(x^{(j)},x^{(l)}) < \varepsilon$ for $j,l \ge K$. [step 2.1, L3, L7, L8]

4.1 Steps 3.1 and 3.2 are the two directions of clause 1. [step 3.1, step 3.2]

5.1 Clauses 1, 2 and 3 are steps 4.1, 3.3 and 2.2. [step 4.1, step 3.3, step 2.2] ∎

## Remarks

- **No choice principle is used.** The only place a family of indices is produced is steps 1.3 and 3.3, where finitely many indices are obtained, each as the **least** element of a nonempty set of naturals ([[thm-well-ordering-principle]]). A least element is determined by the set, not selected from it.

- **What happens at $n = 0$, stated separately because the theorem does not cover it.** $\mathbb{R}^{0}$ has exactly one element, the empty function, and is the zero vector space ([[lem-standard-basis-of-f-n]] clause 5); by [[def-norm-and-normed-space]] it carries exactly one norm, the zero function, whose induced metric is constantly $0$. Every sequence in a one-point metric space is Cauchy and converges to that point, so $(\mathbb{R}^{0}, d_N)$ is complete. **That statement is proved here from scratch in this remark and is not obtained from [[thm-euclidean-space-complete]]**, which is stated for $n \ge 1$ only because $d_\infty$ is a maximum over an empty index set at $n = 0$. Clauses 1 and 2 are vacuous at $n = 0$, there being no index $k<0$.

- **Clause 1 is the reason the rest of this page can work coordinatewise.** Every later item that reduces a statement about $\mathbb{R}^{n}$ or $\mathbb{R}^{m}$ to $n$ or $m$ statements about $\mathbb{R}$ passes through it, and each such item therefore carries the hypothesis $n \ge 1$ or $m \ge 1$ in its own statement.
````

### `thm-componentwise-limits-and-continuity`

````markdown
---
id: thm-componentwise-limits-and-continuity
kind: theorem
title: "A vector-valued function has a limit, or is continuous, if and only if each of its components does; with the algebra of continuous vector-valued functions"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-vector-valued-functions-limits-and-continuity, thm-componentwise-convergence-and-completeness, def-euclidean-inner-product, thm-cauchy-schwarz-and-the-euclidean-norm, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, def-norm-and-normed-space, def-metric-continuity, def-function-limit, def-limit-point-r, lem-finite-sum-laws, def-finite-sum, def-canonical-natural, lem-of-naturals-positive, lem-of-inverse-positive, lem-finite-set-has-max, def-max-min, lem-finite-choice, lem-of-abs-value, def-metric-space, lem-real-line-is-a-metric-space, lem-standard-basis-of-f-n]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Vector-valued function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Vector-valued_function"
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "MAT237 Multivariable Calculus, Section 1.2: Limits and continuity"
      url: "https://www.math.toronto.edu/courses/mat237y1/20189/notes/Chapter1/S1.2.html"
    - title: "APEX Calculus, Section 12.2: Calculus and Vector-Valued Functions"
      url: "https://opentext.uleth.ca/apex-standard/sec_vvf_calc.html"
pipeline_run: null
---

## Statement

Let $m \in \mathbb{N}$ with $m \ge 1$, with vector-valued functions, their
components $f_i = \pi_i \circ f$, their limits and their continuity as in
[[def-vector-valued-functions-limits-and-continuity]].

1. **Continuity is componentwise.** Let $(X,d_X)$ be a metric space, $A \subseteq X$,
   $f : A \to \mathbb{R}^{m}$ and $a \in A$. Then $f$ is continuous at $a$ if and
   only if every component $f_i : A \to \mathbb{R}$ $(i<m)$ is continuous at $a$.
2. **Limits are componentwise.** Let $A \subseteq \mathbb{R}$, let $c$ be a limit
   point of $A$ ([[def-limit-point-r]]), let $f : A \to \mathbb{R}^{m}$ and let
   $L \in \mathbb{R}^{m}$. Then $\lim_{x\to c} f(x) = L$ if and only if
   $\lim_{x\to c} f_i(x) = L_i$ for every $i<m$ ([[def-function-limit]]).
3. **Algebra.** Let $(X,d_X)$, $A$, $a$ be as in clause 1, let
   $f, g : A \to \mathbb{R}^{m}$ be continuous at $a$ and let $\lambda \in \mathbb{R}$.
   Then $f + g$ and $\lambda f$ (defined pointwise) are continuous at $a$; the
   real-valued function $x \mapsto \langle f(x), g(x)\rangle$ is continuous at
   $a$ ([[def-euclidean-inner-product]]); and for every norm $N$ on
   $\mathbb{R}^{m}$ the real-valued function $x \mapsto N(f(x))$ is continuous at
   $a$ ([[def-norm-and-normed-space]]).

**Where $m \ge 1$ is spent.** The "if" direction of clauses 1 and 2 divides
$\varepsilon$ by $\iota(m)$, which requires $\iota(m) \ne 0$; and clause 3's last
part quotes a bound available only for $m \ge 1$. The "only if" directions hold
for every $m$ but say nothing at $m = 0$, there being no index $i < 0$.

## Facts & Assumptions

**Given:** A natural $m \ge 1$; a metric space $(X,d_X)$, a subset $A \subseteq X$, a point $a \in A$ and functions $f, g : A \to \mathbb{R}^{m}$; a real $\lambda$; and a real $\varepsilon > 0$.

[L1] Continuity and limits of vector-valued functions in the $\varepsilon$-$\delta$ form, the coordinate projections $\pi_i$, and $|y_i| \le \lVert y\rVert_2$ for $i<m$ ([[def-vector-valued-functions-limits-and-continuity]], [[def-metric-continuity]], [[def-metric-space]], [[lem-real-line-is-a-metric-space]]).

[L2] The comparison $\lVert y\rVert_2 \le \lVert y\rVert_1 = \sum_{i<m}|y_i|$, and $N(y) \le C\lVert y\rVert_1 \le C\sqrt{\iota(m)}\lVert y\rVert_2$ with $C := \max\{N(e_i) : i<m\} \ge 0$, together with $|N(y)-N(z)| \le N(y-z)$, all for $m \ge 1$ ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clauses 1, 2, 3, [[def-p-norms-on-rn]], [[lem-standard-basis-of-f-n]]).

[L3] The norm axioms for $\lVert\cdot\rVert_2$ ([[def-norm-and-normed-space]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]]), and $\lVert u-v\rVert_2 = d_2(u,v)$.

[L4] Cauchy-Schwarz: $|\langle u,v\rangle| \le \lVert u\rVert_2\lVert v\rVert_2$, together with bilinearity and symmetry of the inner product ([[thm-cauchy-schwarz-and-the-euclidean-norm]], [[def-euclidean-inner-product]]).

[L5] Laws of finite sums ([[lem-finite-sum-laws]], [[def-finite-sum]]): additivity, scaling, monotonicity, $\sum_{i<m}\mu = \iota(m)\mu$, a sum of nonnegative terms is nonnegative, and each single term is at most such a sum.

[L6] $\iota(m) > 0$ for $m \ge 1$, and $u>0$ gives $u^{-1}>0$ ([[def-canonical-natural]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

[L7] A nonempty finite set of reals has a minimum ([[lem-finite-set-has-max]], [[def-max-min]]); and a family of nonempty sets indexed by a natural number has a choice function, this being a theorem of ZF ([[lem-finite-choice]]), which is what licenses picking one $\delta_i$ for each $i<m$.

[L8] Absolute value ([[lem-of-abs-value]]): $|t| \ge 0$, $|st| = |s||t|$, and $|s+t| \le |s|+|t|$.

## Proof

**Proof technique:** direct.

1.1 For every $y \in \mathbb{R}^{m}$: $|y_i| \le \lVert y\rVert_2$ for each $i<m$, and $\lVert y\rVert_2 \le \sum_{i<m}|y_i|$. [L1, L2]

1.2 If $a_i < b_i$ for every $i<m$ and $m \ge 1$, then $\sum_{i<m}a_i < \sum_{i<m}b_i$: the list $i \mapsto b_i - a_i$ has positive terms, so its sum is at least its term at index $0$, hence positive, and additivity gives the strict inequality. [L5, L6]

1.3 For each $i<m$ the set of positive reals $\delta$ witnessing continuity of $f_i$ at $a$ for a given tolerance is nonempty whenever $f_i$ is continuous at $a$, so a choice function on the family indexed by $m$ produces $\delta_0,\dots,\delta_{m-1}$ simultaneously, with no choice principle used. [L7]

1.4 For $f+g$: given $\varepsilon > 0$, pick $\delta_1, \delta_2 > 0$ for the tolerance $\varepsilon/\iota(2)$ at $f$ and at $g$ and put $\delta := \min\{\delta_1,\delta_2\}$; then for $d_X(x,a) < \delta$, $\lVert (f+g)(x)-(f+g)(a)\rVert_2 = \lVert (f(x)-f(a)) + (g(x)-g(a))\rVert_2 \le \lVert f(x)-f(a)\rVert_2 + \lVert g(x)-g(a)\rVert_2 < \varepsilon$. [L1, L3, L6, L7]

1.5 For $\lambda f$: if $\lambda = 0$ then $\lambda f$ is constant and every $\delta$ serves; otherwise $|\lambda| > 0$, and a $\delta$ for the tolerance $\varepsilon/|\lambda|$ at $f$ gives $\lVert \lambda f(x) - \lambda f(a)\rVert_2 = |\lambda|\,\lVert f(x)-f(a)\rVert_2 < \varepsilon$. [L1, L3, L6, L8]

1.6 For $N \circ f$: by [L2], $|N(f(x)) - N(f(a))| \le N\bigl(f(x)-f(a)\bigr) \le C\sqrt{\iota(m)}\,\lVert f(x)-f(a)\rVert_2$; so a $\delta$ for the tolerance $\varepsilon/(C\sqrt{\iota(m)}+1)$ at $f$ serves for $N\circ f$. [L1, L2, L6]

1.7 For $\langle f,g\rangle$: first take $\delta_0 > 0$ with $\lVert g(x)-g(a)\rVert_2 < 1$ for $d_X(x,a) < \delta_0$, so that $\lVert g(x)\rVert_2 \le \lVert g(x)-g(a)\rVert_2 + \lVert g(a)\rVert_2 < B := \lVert g(a)\rVert_2 + 1$ there. [L1, L3]

2.1 Suppose $f$ is continuous at $a$ and fix $i<m$. Given $\varepsilon > 0$, take $\delta$ from the definition; for $x \in A$ with $d_X(x,a) < \delta$, step 1.1 gives $|f_i(x)-f_i(a)| \le \lVert f(x)-f(a)\rVert_2 < \varepsilon$. So $f_i$ is continuous at $a$. [step 1.1, L1]

2.2 Conversely suppose every $f_i$ is continuous at $a$. Given $\varepsilon > 0$, the real $\varepsilon/\iota(m)$ is positive; by step 1.3 choose $\delta_i > 0$ for each $i<m$ with $|f_i(x)-f_i(a)| < \varepsilon/\iota(m)$ whenever $x \in A$ and $d_X(x,a) < \delta_i$, and put $\delta := \min\{\delta_0,\dots,\delta_{m-1}\} > 0$. [step 1.3, L1, L6, L7]

2.3 By bilinearity, $\langle f(x),g(x)\rangle - \langle f(a),g(a)\rangle = \langle f(x)-f(a),\, g(x)\rangle + \langle f(a),\, g(x)-g(a)\rangle$, so Cauchy-Schwarz and step 1.7 give $\bigl|\langle f(x),g(x)\rangle - \langle f(a),g(a)\rangle\bigr| \le B\,\lVert f(x)-f(a)\rVert_2 + \lVert f(a)\rVert_2\,\lVert g(x)-g(a)\rVert_2$ for every $x \in A$ with $d_X(x,a) < \delta_0$. [step 1.7, L4, L8]

3.1 For $x \in A$ with $d_X(x,a) < \delta$: each $|f_i(x)-f_i(a)| < \varepsilon/\iota(m)$, so by steps 1.1 and 1.2, $\lVert f(x)-f(a)\rVert_2 \le \sum_{i<m}|f_i(x)-f_i(a)| < \sum_{i<m}\varepsilon/\iota(m) = \varepsilon$. Hence $f$ is continuous at $a$, and clause 1 is proved. [step 1.1, step 1.2, step 2.2, L5, L6]

3.2 Clause 2 is the same two estimates with $f(a)$ replaced by $L$, $f_i(a)$ by $L_i$, and the condition $d_X(x,a) < \delta$ by $0 < |x-c| < \delta$: step 1.1 gives $|f_i(x)-L_i| \le \lVert f(x)-L\rVert_2$ for the forward direction, and steps 1.1, 1.2 give $\lVert f(x)-L\rVert_2 \le \sum_{i<m}|f_i(x)-L_i| < \varepsilon$ for the converse, with $\delta$ the minimum of $m$ radii obtained as in step 2.2. [step 1.1, step 1.2, step 1.3, L1, L5, L6, L7]

3.3 Put $P := B + \lVert f(a)\rVert_2 + 1 > 0$ and take $\delta \le \delta_0$ positive with both $\lVert f(x)-f(a)\rVert_2 < \varepsilon/P$ and $\lVert g(x)-g(a)\rVert_2 < \varepsilon/P$ for $d_X(x,a) < \delta$; then step 2.3 bounds the difference by $(B + \lVert f(a)\rVert_2)\varepsilon/P < \varepsilon$, so $\langle f,g\rangle$ is continuous at $a$. [step 1.7, step 2.3, L1, L6, L7]

4.1 Steps 1.4, 1.5, 1.6 and 3.3 are clause 3, and with steps 3.1 and 3.2 all three clauses are proved. [step 3.1, step 3.2, step 1.4, step 1.5, step 1.6, step 3.3] ∎

## Remarks

- **Why the algebra is proved here rather than quoted.** The published [[thm-algebra-of-continuous-functions]] and [[thm-algebra-of-function-limits]] are stated for real-valued functions on a subset of $\mathbb{R}$, and the domain in clause 3 is a subset of an arbitrary metric space; quoting them for a metric domain would be a citation to an item for a claim it does not make. The estimates in steps 1.4 to 3.3 are the same ones, written out. When the domain **is** a subset of $\mathbb{R}$, clause 1 and [[lem-real-and-metric-notions-agree]] identify the two readings, and the published theorems may then be used on the components.

- **Clause 3 is what makes the mean value inequality work.** The auxiliary function $t \mapsto \langle u, f(t)\rangle$ of [[thm-mean-value-inequality]] is continuous exactly by the inner-product part of clause 3, applied with the constant function $u$.

- **Nothing here is a sequential argument, so no choice principle is used** beyond the finitely many simultaneous selections of steps 1.3, 2.2 and 3.3, which are covered by [[lem-finite-choice]], a theorem of ZF.
````

### `thm-euclidean-space-complete`

````markdown
---
id: thm-euclidean-space-complete
kind: theorem
title: "$\\mathbb{R}$ and $\\mathbb{R}^n$ for $n \\ge 1$ with the Euclidean metric are complete, componentwise from the Cauchy criterion in $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-complete-metric-space, thm-cauchy-criterion-via-lub, def-cauchy-in-metric,
       def-metric-space, def-metric-convergence, def-finite-sum, thm-of-square-roots,
       lem-metrics-on-rn, lem-real-line-is-a-metric-space, lem-finite-set-has-max,
       def-max-min, lem-finite-sum-laws, def-real-limit, lem-of-square-monotone,
       lem-of-abs-value, lem-of-inverse-positive, thm-well-ordering-principle, lem-limit-unique]
justified_by: []
aliases: []
landmark: true
short: "$\\mathbb{R}$ and $\\mathbb{R}^n$ are complete"
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
    - title: "Complete metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Complete_metric_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

1. $(\mathbb{R}, d_{\mathbb{R}})$ with the usual metric $d_{\mathbb{R}}(x,y) = |x-y|$
   ([[lem-real-line-is-a-metric-space]]) is a complete metric space
   ([[def-complete-metric-space]]).
2. Let $n \in \mathbb{N}$ with $n \ge 1$ and let $d_2$ be the Euclidean metric on
   $\mathbb{R}^n$ ([[lem-metrics-on-rn]]). Then $(\mathbb{R}^n, d_2)$ is complete.

**The hypothesis $n \ge 1$ is inherited and is not decoration.**
[[lem-metrics-on-rn]] defines $\mathbb{R}^n$ and its three metrics only for
$n \ge 1$, because at $n = 0$ the metric $d_\infty$ would be a maximum over the
empty index set. Every statement about $\mathbb{R}^n$ in this library carries the
hypothesis, and this one does too.

## Facts & Assumptions

**Given:** A natural $n \ge 1$; $\mathbb{R}^n$ is the set of functions $n \to \mathbb{R}$ with $d_2(x,y) = \sqrt{\sum_{k<n}(x_k-y_k)^2}$; a real $\varepsilon > 0$.

[A1] Cauchy criterion in $\mathbb{R}$: every Cauchy sequence of reals converges to a real ([[thm-cauchy-criterion-via-lub]], [[def-real-limit]]).

[L1] The usual metric of $\mathbb{R}$ is $d_{\mathbb{R}}(x,y) = |x-y|$ ([[lem-real-line-is-a-metric-space]]).

[L2] Convergence in a metric space: $x_k \to p$ in $(X,d)$ means $d(x_k,p) \to 0$ in $\mathbb{R}$; Cauchyness means $d(x_m,x_n) < \varepsilon$ for $m,n$ beyond an index ([[def-metric-convergence]], [[def-cauchy-in-metric]], [[def-metric-space]]).

[L3] $d_2$ is a metric on $\mathbb{R}^n$ for $n \ge 1$, its defining sum is a finite sum, and the sum of squares is nonnegative with a unique nonnegative square root ([[lem-metrics-on-rn]], [[def-finite-sum]], [[thm-of-square-roots]]).

[L4] Finite sums of nonnegative terms dominate each term and are monotone, and $\sum_{k<n} \lambda = n\lambda$ ([[lem-finite-sum-laws]], claims 2 and 4).

[L5] For $a, b \ge 0$: $a \le b \iff a^2 \le b^2$ and $a < b \iff a^2 < b^2$ ([[lem-of-square-monotone]]); and $|t|^2 = t^2$ for every real $t$ ([[lem-of-abs-value]]).

[L6] A nonempty finite set of naturals has a maximum, and every nonempty set of naturals has a least element ([[lem-finite-set-has-max]], [[def-max-min]], [[thm-well-ordering-principle]]).

[L7] $n \ge 1$ gives $0 < 1/n \le 1$ and $0 < \varepsilon/(2n)$ ([[lem-of-inverse-positive]]).

[L8] Limits of real sequences are unique, which is what licenses writing $\lim_k x_k$ for a sequence already known to converge ([[lem-limit-unique]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] a sequence $(x_k)$ of reals is Cauchy in $(\mathbb{R}, d_{\mathbb{R}})$ exactly when $|x_m - x_n| < \varepsilon$ for all $m,n$ beyond an index and every rational $\varepsilon > 0$, which is verbatim the Cauchy condition of [[def-real-limit]]; and $x_k \to p$ in $(\mathbb{R}, d_{\mathbb{R}})$ exactly when $|x_k - p| \to 0$, which is verbatim convergence to $p$ there. [L1, L2]

1.2 Let $x, y \in \mathbb{R}^n$ and $j < n$. The terms $(x_k - y_k)^2$ are nonnegative, so $(x_j - y_j)^2 \le \sum_{k<n}(x_k-y_k)^2 = d_2(x,y)^2$; both $|x_j - y_j|$ and $d_2(x,y)$ are nonnegative and $|x_j-y_j|^2 = (x_j-y_j)^2$, so $|x_j - y_j| \le d_2(x,y)$. [L3, L4, L5]

1.3 Let $x, y \in \mathbb{R}^n$ satisfy $|x_j - y_j| < \varepsilon/(2n)$ for every $j < n$. Then $(x_j-y_j)^2 \le (\varepsilon/(2n))^2$ for every $j < n$, so $d_2(x,y)^2 \le n \cdot \varepsilon^2/(4n^2) = \varepsilon^2/(4n) \le \varepsilon^2/4 < \varepsilon^2$, and therefore $d_2(x,y) < \varepsilon$. [L3, L4, L5, L7]

2.1 Claim 1: let $(x_k)$ be a Cauchy sequence in $(\mathbb{R}, d_{\mathbb{R}})$. By step 1.1 it is a Cauchy sequence of reals, so by [A1] it converges to some $x \in \mathbb{R}$, and by step 1.1 again $x_k \to x$ in $(\mathbb{R}, d_{\mathbb{R}})$. Hence every Cauchy sequence in $(\mathbb{R}, d_{\mathbb{R}})$ converges in it. [step 1.1, A1, L2]

2.2 Now let $(x^{(k)})$ be a Cauchy sequence in $(\mathbb{R}^n, d_2)$ and fix $j < n$. By step 1.2, $|x^{(m)}_j - x^{(l)}_j| \le d_2(x^{(m)}, x^{(l)})$ for all $m, l$, so the real sequence $(x^{(k)}_j)_{k}$ is Cauchy, and by [A1] it converges; its limit is unique, so the notation $y_j := \lim_{k} x^{(k)}_j$ denotes a single real. [step 1.2, A1, L2, L8]

3.1 The assignment $j \mapsto y_j$ is a function $n \to \mathbb{R}$, hence an element $y \in \mathbb{R}^n$; no choice is used, because $y_j$ is the unique limit of the $j$-th coordinate sequence. [step 2.2, L3, construct]

3.2 For each $j < n$ let $K_j$ be the least natural such that $|x^{(k)}_j - y_j| < \varepsilon/(2n)$ for all $k \ge K_j$, which exists because the coordinate sequence converges to $y_j$ and every nonempty set of naturals has a least element; and put $K := \max\{K_j : j < n\}$, a maximum of a nonempty finite set of naturals since $n \ge 1$. [step 2.2, L6, L7, choose]

4.1 For every $k \ge K$ and every $j < n$ we have $k \ge K_j$, hence $|x^{(k)}_j - y_j| < \varepsilon/(2n)$, and therefore $d_2(x^{(k)}, y) < \varepsilon$ by step 1.3. [step 1.3, step 3.1, step 3.2]

5.1 Since $\varepsilon > 0$ was an arbitrary real, $x^{(k)} \to y$ in $(\mathbb{R}^n, d_2)$ with $y \in \mathbb{R}^n$; so every Cauchy sequence in $(\mathbb{R}^n, d_2)$ converges in it, which with step 2.1 gives claims 1 and 2. [step 2.1, step 4.1, L2] ∎

## Remarks

- **The proof is the Cauchy criterion plus two inequalities.** Step 1.2 says a coordinate difference is at most the Euclidean distance, which turns a Cauchy sequence of points into $n$ Cauchy sequences of reals; step 1.3 says that coordinates uniformly below $\varepsilon/(2n)$ force the Euclidean distance below $\varepsilon$, which turns $n$ convergent coordinate sequences back into one convergent sequence of points. Nothing else about $\mathbb{R}^n$ is used, and in particular the Cauchy-Schwarz inequality is not needed here.
- **The same two inequalities hold for $d_1$ and $d_\infty$**, with the same proof of completeness. For $d_1(x,y) = \sum_{k<n}|x_k-y_k|$: each term is at most the sum ([[lem-finite-sum-laws]]), so $|x_j-y_j| \le d_1(x,y)$; and $|x_j-y_j| < \varepsilon/(2n)$ for all $j < n$ gives $d_1(x,y) \le n\varepsilon/(2n) = \varepsilon/2 < \varepsilon$. For $d_\infty(x,y) = \max\{|x_k-y_k| : k<n\}$: the maximum dominates each entry and is one of them ([[lem-finite-set-has-max]]), so $|x_j-y_j| \le d_\infty(x,y)$, and entries all below $\varepsilon/2$ make the maximum at most $\varepsilon/2$. Substituting either pair of inequalities for steps 1.2 and 1.3 leaves the rest of the proof unchanged, so $(\mathbb{R}^n, d_1)$ and $(\mathbb{R}^n, d_\infty)$ are complete as well. Nothing later on this page uses that.
- **No choice is spent.** The limit point $y$ is assembled coordinatewise in step 3.1 from limits that are unique, and the finitely many indices $K_j$ of step 3.2 are made canonical by taking the least one. This matters because completeness proofs elsewhere on this page do spend $\mathrm{AC}_\omega$, and the contrast is worth keeping visible.
- **Where the least-upper-bound property is.** Entirely inside [[thm-cauchy-criterion-via-lub]]. This theorem is a transfer result: it moves completeness from $\mathbb{R}$ to $\mathbb{R}^n$ and adds no new content about the reals.
````

### `thm-heine-borel-rn`

````markdown
---
id: thm-heine-borel-rn
kind: theorem
title: "Heine-Borel in $\\mathbb{R}^n$: with the Euclidean metric a subset of $\\mathbb{R}^n$ is compact if and only if it is closed and bounded, and the proof by bisection uses no choice principle; the same holds on the real line"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-compactness, lem-compactness-is-intrinsic, thm-compact-subset-is-closed-and-bounded, lem-closed-subset-of-a-compact-space-is-compact, lem-metrics-on-rn, lem-real-line-is-a-metric-space, thm-nested-interval-property, thm-recursion, def-finite-sum, def-interval, def-integer-power, lem-geometric-sequence-null, lem-finite-sum-laws, def-metric-ball, def-metric-bounded-diameter, def-metric-topology, def-isometry-and-metric-embedding, lem-finite-set-has-max, def-max-min, cor-archimedean-reciprocal, thm-of-archimedean, thm-of-square-roots, lem-of-square-monotone, def-abs-value, def-canonical-natural, def-real-limit, def-metric-space]
justified_by: []
aliases: [thm-heine-borel-euclidean]
landmark: true
short: "Heine-Borel in $\\mathbb{R}^n$"
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
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ with $n \ge 1$, let $\mathbb{R}^n$ be the set of functions
$n \to \mathbb{R}$ and let $d_2$ be the Euclidean metric on it
([[lem-metrics-on-rn]]). Then:

1. **Closed boxes are compact.** For reals $a_k \le b_k$ $(k < n)$ the box
   $Q = \{\, x \in \mathbb{R}^n : a_k \le x_k \le b_k \text{ for every } k < n \,\}$
   is a compact subset of $(\mathbb{R}^n, d_2)$ ([[def-metric-compactness]]).
2. **Heine-Borel.** A subset $K \subseteq \mathbb{R}^n$ is a compact subset of
   $(\mathbb{R}^n, d_2)$ if and only if $K$ is closed in $\mathbb{R}^n$
   ([[def-metric-topology]]) and bounded
   ([[def-metric-bounded-diameter]]).
3. **The real line.** A subset $K \subseteq \mathbb{R}$ is a compact subset of
   $(\mathbb{R}, d_{\mathbb{R}})$, the usual metric $d_{\mathbb{R}}(x,y) = |x-y|$
   ([[lem-real-line-is-a-metric-space]]), if and only if $K$ is closed in
   $\mathbb{R}$ and bounded.

**No choice principle is used.** The bisection below halves one coordinate at a
time and takes the **left** half whenever the left half still fails to be finitely
covered, the right half otherwise: a rule with two outcomes, decided by a
property of the box, not a selection. That is the whole reason the theorem is
available in ZF, while the general "complete and totally bounded implies compact"
([[thm-complete-and-totally-bounded-implies-compact]]) is not.

The hypothesis $n \ge 1$ is inherited from [[lem-metrics-on-rn]], which defines
$\mathbb{R}^n$ and its metrics only there; the last remark below records what
happens at $n = 0$.

## Facts & Assumptions

**Given:** A natural number $n \ge 1$, the metric space $(\mathbb{R}^n, d_2)$, and the notions of open, closed, bounded and compact subset in it.

[L1] $\mathbb{R}^n$ is the set of functions $n \to \mathbb{R}$, and $d_2(x,y) = \sqrt{\sum_{k<n}(x_k-y_k)^2}$, $d_\infty(x,y) = \max\{|x_k - y_k| : k < n\}$ are metrics on it ([[lem-metrics-on-rn]], [[def-finite-sum]], [[def-metric-space]]).

[L2] Finite sums of nonnegative terms dominate each term and are monotone, and $\sum_{k<n} c = \iota(n)c$ for a constant $c$, $\iota(n)$ being the canonical natural of $\mathbb{R}$ ([[lem-finite-sum-laws]], [[def-finite-sum]], [[def-canonical-natural]]).

[L3] For $a,b \ge 0$: $a \le b$ exactly when $a^2 \le b^2$; every $a \ge 0$ has a unique nonnegative square root; and $\sqrt{c^2} = |c|$ for every real $c$ ([[lem-of-square-monotone]], [[thm-of-square-roots]], [[def-abs-value]]).

[L4] A subset $A$ is compact exactly when every family $(U_i)_{i \in I}$ of open subsets of the ambient space with $A \subseteq \bigcup_{i \in I} U_i$ has finitely many members whose union contains $A$, or $A = \emptyset$; and the sets open in the subspace $A$ are exactly the traces on $A$ of the open subsets of the ambient space, so, taking complements inside $A$, the sets closed in $A$ are exactly the traces on $A$ of the closed subsets of the ambient space ([[lem-compactness-is-intrinsic]], [[def-metric-compactness]], [[def-metric-topology]], [[def-isometry-and-metric-embedding]]).

[L5] A compact subset of a metric space is closed and bounded ([[thm-compact-subset-is-closed-and-bounded]]).

[L6] A closed subset of a compact metric space is compact ([[lem-closed-subset-of-a-compact-space-is-compact]]).

[L7] Nested closed bounded intervals $I_m = [\alpha_m,\beta_m]$ with $I_{m+1} \subseteq I_m$ have nonempty intersection, and the intersection is a single point exactly when the lengths tend to $0$ ([[thm-nested-interval-property]], [[def-interval]], [[def-real-limit]]).

[L8] Recursion: for a set $A$, an element $a \in A$ and $f : A \to A$ there is a unique $g : \mathbb{N} \to A$ with $g(0) = a$ and $g(m+1) = f(g(m))$; a stage-dependent rule is handled on $A = \mathbb{N} \times Z$, the first coordinate of $g(m)$ then being $m$ ([[thm-recursion]], [[def-finite-sum]]).

[L9] $(1/2)^m \to 0$, integer powers being those of [[def-integer-power]] ([[lem-geometric-sequence-null]], [[def-real-limit]]).

[L10] A nonempty finite set of reals has a maximum, one of its members ([[lem-finite-set-has-max]], [[def-max-min]]).

[L11] $U$ is open exactly when every point of $U$ has a ball inside $U$; a subset is bounded when it is empty or lies in some ball $B(x_0,\rho)$ with $\rho > 0$ ([[def-metric-topology]], [[def-metric-ball]], [[def-metric-bounded-diameter]]).

[L12] For every real $\eta > 0$ there is a natural $N \ge 1$ with $1/N < \eta$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

## Proof

**Proof technique:** direct.

1.1 For $x,y \in \mathbb{R}^n$ and $k < n$ the term $(x_k-y_k)^2$ is one of the nonnegative terms of $\sum_{j<n}(x_j-y_j)^2$, so $(x_k-y_k)^2 \le d_2(x,y)^2$, and taking nonnegative square roots gives $|x_k - y_k| \le d_2(x,y)$; hence $d_\infty(x,y) \le d_2(x,y)$. [L1, L2, L3]

1.2 Conversely each $(x_j-y_j)^2 \le d_\infty(x,y)^2$, so $d_2(x,y)^2 \le \iota(n)\,d_\infty(x,y)^2 \le \big(\iota(n) d_\infty(x,y)\big)^2$, the last step because $\iota(n) \ge 1$; hence $d_2(x,y) \le \iota(n)\, d_\infty(x,y)$. [L1, L2, L3]

2.1 For claim 1 fix reals $a_k \le b_k$ $(k<n)$ and the box $Q$ they determine, let $(U_i)_{i \in I}$ be open subsets of $\mathbb{R}^n$ with $Q \subseteq \bigcup_{i \in I} U_i$, call a set $S \subseteq \mathbb{R}^n$ **finitely covered** when finitely many of the $U_i$ have union containing $S$, and suppose for contradiction that $Q$ is not finitely covered. [L4, step 1.1, step 1.2, assume-contra]

3.1 For a box $P = \{\, x : c_j \le x_j \le e_j \ (j<n) \,\}$ with $c_j \le e_j$ and for $k < n$, let $P^{k,0}$ and $P^{k,1}$ be the boxes obtained by replacing the $k$-th interval $[c_k,e_k]$ by $[c_k, (c_k+e_k)/2]$ and by $[(c_k+e_k)/2, e_k]$; then $P = P^{k,0} \cup P^{k,1}$ by trichotomy applied to $x_k$ against the midpoint, the $k$-th side length of each is $(e_k-c_k)/2$ and the others are unchanged, and if both halves were finitely covered so would $P$ be, the union of two finite subfamilies being finite. Define $H_k(P) := P^{k,0}$ if $P^{k,0}$ is not finitely covered, and $H_k(P) := P^{k,1}$ otherwise; this is a definition by a property, and $H_k(P)$ is not finitely covered whenever $P$ is. [L7, step 2.1]

4.1 Recursion on $\mathbb{N} \times Z$, with $Z$ the set of functions from boxes to boxes, starting value $(0, \mathrm{id})$ and rule $(j, h) \mapsto (j+1,\ H_j \circ h)$ for $j < n$ and $(j,h) \mapsto (j+1,h)$ otherwise, produces $G_j$ for every $j$; put $G := G_n$. By induction on $j \le n$, $G_j(P) \subseteq P$ is a box whose $k$-th side is half that of $P$ for $k < j$ and equal to that of $P$ for $k \ge j$, and $G_j(P)$ is not finitely covered when $P$ is not. So $G(P) \subseteq P$ halves every side and preserves not being finitely covered. [L8, step 3.1]

5.1 Recursion applied to the starting value $Q$ and the rule $G$ produces boxes $P_m$ with $P_0 = Q$ and $P_{m+1} = G(P_m)$; each $P_m$ fails to be finitely covered, $P_{m+1} \subseteq P_m$, and the $k$-th side length of $P_m$ is $\ell_k (1/2)^m$, where $\ell_k := b_k - a_k \ge 0$. [L8, step 4.1]

6.1 For each $k < n$ the $k$-th intervals of the $P_m$ form a nested family of closed bounded intervals whose lengths $\ell_k(1/2)^m$ tend to $0$, so their intersection is a single point $p_k$; the function $p : n \to \mathbb{R}$, $k \mapsto p_k$, is a point of $\mathbb{R}^n$ lying in every $P_m$. [L7, L9, step 5.1]

7.1 Since $p \in P_0 = Q \subseteq \bigcup_{i \in I} U_i$, there is $i^{\ast} \in I$ with $p \in U_{i^{\ast}}$, and openness gives a real $r > 0$ with $B(p,r) \subseteq U_{i^{\ast}}$. [L11, step 6.1]

8.1 Put $L := \max\{\ell_k : k < n\} \ge 0$ and $C := \iota(n) L + 1 > 0$; for $x \in P_m$ each $|x_k - p_k|$ is at most the $k$-th side length of $P_m$, so $d_\infty(x,p) \le L (1/2)^m$ and $d_2(x,p) \le \iota(n) L (1/2)^m \le C (1/2)^m$ by step 1.2. Taking a natural $N \ge 1$ with $1/N < r/C$ and then $m$ with $(1/2)^m < 1/N$ gives $P_m \subseteq B(p,r) \subseteq U_{i^{\ast}}$, so $P_m$ is finitely covered by the single set $U_{i^{\ast}}$, contradicting step 5.1. [L9, L10, L12, step 1.2, step 5.1, step 6.1, step 7.1, discharge-contradiction]

9.1 Therefore every such family has finitely many members covering $Q$, and $Q$ is a compact subset of $(\mathbb{R}^n,d_2)$: claim 1 is proved. [L4, step 2.1, step 8.1]

10.1 For claim 2, a compact $K \subseteq \mathbb{R}^n$ is closed and bounded. [L5, step 9.1]

11.1 Conversely let $K \subseteq \mathbb{R}^n$ be closed and bounded; if $K = \emptyset$ it is compact, and otherwise $K \subseteq B(x_0,\rho)$ for some $x_0$ and real $\rho > 0$, so every $x \in K$ and $k < n$ satisfy $|x_k| \le |(x_0)_k| + |x_k - (x_0)_k| \le |(x_0)_k| + d_2(x,x_0) < |(x_0)_k| + \rho$ by step 1.1; with $M := \max\{|(x_0)_k| : k < n\} + \rho$ the box $Q_M := \{\, x : -M \le x_k \le M \ (k<n) \,\}$ contains $K$. [L10, L11, step 1.1, step 10.1]

12.1 $K$ is the trace on $Q_M$ of a closed subset of $\mathbb{R}^n$, namely of $K$ itself, so $K$ is closed in the metric subspace $Q_M$; that subspace is compact by step 9.1, so $K$ is compact, and claim 2 is proved. [L4, L6, step 9.1, step 11.1]

13.1 For claim 3, let $\psi : \mathbb{R} \to \mathbb{R}^1$ send $t$ to the function $1 \to \mathbb{R}$ with value $t$; it is a bijection and $d_2(\psi(s),\psi(t)) = \sqrt{(s-t)^2} = |s-t| = d_{\mathbb{R}}(s,t)$, so $\psi$ carries each ball onto the corresponding ball, hence open sets onto open sets and open covers onto open covers with matching finite subfamilies, and likewise closed sets onto closed sets and bounded sets onto bounded sets. Applying claim 2 with $n = 1$ to $\psi[K]$ therefore gives claim 3. [L1, L3, L4, L11, step 12.1] ∎

## Remarks

**Why the bisection halves one coordinate at a time.** Halving all $n$ coordinates at once produces $2^n$ sub-boxes, and choosing one of them canonically means enumerating them, which needs a bijection between the functions $n \to \{0,1\}$ and a natural number. Halving a single coordinate produces two sub-boxes, and "the left one if it is still not finitely covered, the right one otherwise" is a definition by cases needing nothing at all. Composing $n$ such halvings, as step 4.1 does, recovers the full halving of every side and keeps the construction canonical, which is what a choice-free proof requires.

**Where each hypothesis is used.** Closedness enters only at step 12.1, through [[lem-closed-subset-of-a-compact-space-is-compact]]; boundedness enters only at step 11.1, to fit $K$ inside a box. Dropping either leaves a non-compact set: the whole of $\mathbb{R}^n$ is closed and unbounded, and an open ball is bounded and not closed, and neither is compact by claim 2.

**The converse direction is what fails in a general metric space.** Claim 2 says that in $\mathbb{R}^n$ closed and bounded is enough; that is special to $\mathbb{R}^n$, and [[fs-closed-and-bounded-implies-compact-in-every-metric-space]] records the false general statement together with a witness. What survives in every metric space is only the direction of step 10.1 ([[thm-compact-subset-is-closed-and-bounded]]).

**The case $n = 0$.** $\mathbb{R}^0$ has exactly one element, the empty function, and [[lem-metrics-on-rn]] does not treat it, because $d_\infty$ would be a maximum over the empty index set. On a one-element set the only metric is the one taking the value $0$, and the resulting space is compact for trivial reasons: it is listed as $\{x_0\}$, and any family of open sets covering it has a member containing $x_0$ ([[def-metric-compactness]]). Nothing above is needed for that case and nothing above claims it.
````

### `thm-mean-value-inequality`

````markdown
---
id: thm-mean-value-inequality
kind: theorem
title: "The mean value inequality: if $f : [a,b] \\to \\mathbb{R}^m$ is continuous and differentiable on $(a,b)$ with $\\lVert f'\\rVert_2 \\le M$, then $\\lVert f(b)-f(a)\\rVert_2 \\le M(b-a)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-vector-valued-derivative-and-integral, def-vector-valued-functions-limits-and-continuity, thm-componentwise-limits-and-continuity, def-euclidean-inner-product, thm-cauchy-schwarz-and-the-euclidean-norm, def-p-norms-on-rn, def-norm-and-normed-space, cor-mean-value-theorem, thm-algebra-of-derivatives, thm-algebra-of-continuous-functions, lem-real-and-metric-notions-agree, def-derivative, cor-differentiable-implies-continuous, def-continuity-real, lem-finite-sum-laws, def-finite-sum, def-interval, thm-induction-principle, lem-of-inverse-positive, lem-of-abs-value, def-limit-point-r]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Mean value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mean_value_theorem"
    - title: "Vector-valued function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Vector-valued_function"
    - title: "J. Lebl, Basic Analysis I, Section 8.4"
      url: "https://www.jirka.org/ra/html/sec_svthedercont.html"
pipeline_run: null
---

## Statement

Let $m \in \mathbb{N}$ with $m \ge 1$, let $a, b \in \mathbb{R}$ with $a < b$,
and let $f : [a,b] \to \mathbb{R}^{m}$ be continuous on $[a,b]$ and
differentiable at every point of $(a,b)$ as a function on $[a,b]$
([[def-vector-valued-functions-limits-and-continuity]],
[[def-vector-valued-derivative-and-integral]], [[def-interval]]). Let
$M \in \mathbb{R}$ with $M \ge 0$ satisfy

$$\lVert f'(t)\rVert_2 \;\le\; M \qquad \text{for every } t \in (a,b).$$

Then

$$\lVert f(b) - f(a)\rVert_2 \;\le\; M\,(b-a).$$

**No integrability of $f'$ is assumed**, so the theorem applies to every
differentiable $f$; that is why it is proved from the scalar mean value theorem
rather than from
[[thm-norm-inequality-for-the-vector-valued-integral]].
[[cor-vector-valued-ftc-and-lipschitz-bound]] records the comparison between the
two routes.

**The equality form is not asserted, and for $m \ge 2$ it is false.** There need
be **no** $\xi \in (a,b)$ with $f(b)-f(a) = f'(\xi)(b-a)$; the companion page
carries a differentiable witness on $[0,1]$. The $\xi$ produced in the proof
below depends on the fixed vector $u = f(b)-f(a)$ and is a mean value point of
the **real** function $t \mapsto \langle u, f(t)\rangle$, not of $f$.

## Facts & Assumptions

**Given:** A natural $m \ge 1$, reals $a < b$, a function $f : [a,b] \to \mathbb{R}^{m}$ continuous on $[a,b]$ and differentiable on $(a,b)$, a real $M \ge 0$ bounding $\lVert f'\rVert_2$ on $(a,b)$, the vector $u := f(b)-f(a) \in \mathbb{R}^{m}$, and the real-valued function $\varphi : [a,b] \to \mathbb{R}$, $\varphi(t) := \langle u, f(t)\rangle$.

[L1] The inner product is bilinear and symmetric, $\langle w,w\rangle = \lVert w\rVert_2^{2}$, and $\langle u,w\rangle = \sum_{i<m}u_iw_i$ ([[def-euclidean-inner-product]], [[def-p-norms-on-rn]]).

[L2] Cauchy-Schwarz: $|\langle u,w\rangle| \le \lVert u\rVert_2\lVert w\rVert_2$, and $t \le |t|$ ([[thm-cauchy-schwarz-and-the-euclidean-norm]], [[lem-of-abs-value]]); $\lVert w\rVert_2 \ge 0$, and $\lVert w\rVert_2 = 0$ exactly when $w = 0$ ([[def-norm-and-normed-space]]).

[L3] Componentwise continuity and differentiability: $f$ is continuous at a point exactly when every $f_i$ is, and differentiable at a point exactly when every $f_i$ is, with $f'(t)_i = f_i'(t)$ ([[thm-componentwise-limits-and-continuity]] clause 1, [[def-vector-valued-derivative-and-integral]], [[def-derivative]], [[def-limit-point-r]]).

[L4] For a real domain, the metric notion of continuity and the notion of [[def-continuity-real]] agree ([[lem-real-and-metric-notions-agree]] clause 1).

[L5] Algebra of continuous real functions: sums and scalar multiples of functions continuous at a point are continuous there ([[thm-algebra-of-continuous-functions]] clause 1).

[L6] Algebra of derivatives: sums and scalar multiples of functions differentiable at a point are differentiable there, with $(w+z)'(c) = w'(c)+z'(c)$ and $(\alpha w)'(c) = \alpha w'(c)$ ([[thm-algebra-of-derivatives]] clauses 1 and 2); and a differentiable function is continuous ([[cor-differentiable-implies-continuous]]).

[L7] The mean value theorem: for $\psi$ continuous on $[a,b]$ with $a<b$ and differentiable on $(a,b)$ there is $\xi \in (a,b)$ with $\psi(b)-\psi(a) = \psi'(\xi)(b-a)$ ([[cor-mean-value-theorem]]).

[L8] Laws of finite sums and induction ([[lem-finite-sum-laws]], [[def-finite-sum]], [[thm-induction-principle]]).

[L9] Order arithmetic: $b - a > 0$; a product of nonnegatives is nonnegative; and $u>0$ gives $u^{-1}>0$, so an inequality may be multiplied by a positive real ([[lem-of-inverse-positive]]).

## Proof

**Proof technique:** direct.

1.1 Every component $f_i$ is continuous on $[a,b]$ in the sense of [[def-continuity-real]] and differentiable at every point of $(a,b)$, with $f'(t)_i = f_i'(t)$. [L3, L4]

1.2 $\varphi(t) = \sum_{i<m}u_i f_i(t)$ by the coordinate formula for the inner product. [L1]

1.3 $\varphi(b)-\varphi(a) = \langle u, f(b)\rangle - \langle u, f(a)\rangle = \langle u, f(b)-f(a)\rangle = \langle u,u\rangle = \lVert u\rVert_2^{2}$, by bilinearity. [L1]

1.4 By Cauchy-Schwarz and the bound on $\lVert f'\rVert_2$, $\langle u,f'(\xi)\rangle \le \bigl|\langle u,f'(\xi)\rangle\bigr| \le \lVert u\rVert_2\lVert f'(\xi)\rVert_2 \le \lVert u\rVert_2 M$. [L2]

1.5 If $u = 0$ then $\lVert u\rVert_2 = 0$ while $M(b-a) \ge 0$, so the conclusion holds. [L2, L9]

2.1 By induction on $p \le m$, each partial sum $t \mapsto \sum_{i<p}u_i f_i(t)$ is continuous on $[a,b]$ and differentiable on $(a,b)$ with derivative $\sum_{i<p}u_i f_i'(t)$: the empty sum is the constant $0$, and each successor step adds one scalar multiple of a function that is continuous and differentiable by step 1.1. [step 1.1, L5, L6, L8]

3.1 Hence $\varphi$ is continuous on $[a,b]$, differentiable at every point of $(a,b)$, and $\varphi'(t) = \sum_{i<m}u_i f_i'(t) = \langle u, f'(t)\rangle$ for $t \in (a,b)$. [step 1.2, step 2.1, L1]

4.1 By the mean value theorem applied to $\varphi$ there is $\xi \in (a,b)$ with $\varphi(b)-\varphi(a) = \varphi'(\xi)(b-a)$. [step 3.1, L7]

5.1 Combining steps 1.3 and 4.1, $\lVert u\rVert_2^{2} = \langle u, f'(\xi)\rangle\,(b-a)$. [step 3.1, step 1.3, step 4.1]

6.1 Since $b-a > 0$, multiplying the inequality of step 1.4 by $b-a$ and using step 5.1 gives $\lVert u\rVert_2^{2} \le \lVert u\rVert_2\,M\,(b-a)$. [step 5.1, step 1.4, L9]

7.1 If $u \ne 0$ then $\lVert u\rVert_2 > 0$, and multiplying step 6.1 by the positive real $1/\lVert u\rVert_2$ gives $\lVert u\rVert_2 \le M(b-a)$. [step 6.1, L2, L9]

8.1 The two cases of steps 1.5 and 7.1 exhaust the possibilities for $u = f(b)-f(a)$, so $\lVert f(b)-f(a)\rVert_2 \le M(b-a)$. [step 1.5, step 7.1] ∎

## Remarks

- **What the auxiliary function buys.** The scalar mean value theorem produces a point at which one real function has its average slope. Applying it to $\varphi = \langle u, f\rangle$ for the **particular** $u = f(b)-f(a)$ turns that into a statement about $f$, at the cost of the equality becoming an inequality. The loss is not an artefact of the proof: the equality form is genuinely false for $m \ge 2$, and the companion page's curve $t \mapsto (t^{2},t^{3})$ on $[0,1]$ is a differentiable witness.

- **The bound is sharp.** No constant smaller than $\sup\lVert f'\rVert_2$ works in general; the companion page exhibits a curve for which the inequality is an equality.

- **The case split at $u = 0$ is where the statement would otherwise be incomplete**, exactly as in [[thm-norm-inequality-for-the-vector-valued-integral]]. When $f(b) = f(a)$ the left-hand side is $0$ and nothing is divided.

- **$M \ge 0$ is a hypothesis, not a deduction.** It follows from $\lVert f'(t)\rVert_2 \le M$ at any single $t \in (a,b)$, and $(a,b)$ is nonempty here because $a<b$; it is stated anyway so that the conclusion reads as a genuine bound, in the style of [[cor-bounded-derivative-implies-lipschitz]].
````

### `thm-minkowski-finite`

````markdown
---
id: thm-minkowski-finite
kind: theorem
title: "Minkowski's inequality for finite sums (rational exponent)"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-holder-finite, def-finite-sum, lem-finite-sum-laws, def-rational-power, lem-rational-power-laws, lem-triangle-inequality-finite, lem-of-triangle-inequality, lem-of-abs-value, def-abs-value, def-rat-operations, def-rat-order, def-rationals, thm-rat-ordered-field, cor-of-one-positive, thm-nth-roots-exist, def-ordered-field, lem-of-sign-rules, lem-of-inverse-positive, lem-of-add-order]
justified_by: []
aliases: []
landmark: true
short: "$\\|a+b\\|_p \\le \\|a\\|_p + \\|b\\|_p$"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "Finite inequalities (Cornell University)"
      url: "https://e.math.cornell.edu/people/belk/measuretheory/Inequalities.pdf"
    - title: "Young, Hölder, and Minkowski inequalities (Oregon State University)"
      url: "https://math.oregonstate.edu/~show/old/142_Luenberger.pdf"
    - title: "Minkowski inequality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Minkowski_inequality"
    - title: "Hölder's inequality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/H%C3%B6lder%27s_inequality"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$, let $a_0, \dots, a_{n-1}$ and $b_0, \dots, b_{n-1}$ be
reals, and let $p \in \mathbb{Q}$ with $p \ge 1$ ([[def-rat-order]]). Then

$$\Big(\sum_{k<n}|a_k + b_k|^{p}\Big)^{1/p} \;\le\; \Big(\sum_{k<n}|a_k|^{p}\Big)^{1/p} + \Big(\sum_{k<n}|b_k|^{p}\Big)^{1/p}.$$

All exponents appearing are positive rationals, so every power is defined for a
nonnegative base by [[def-rational-power]] and its supplementary clause
$0^{r} = 0$.

**The conjugate exponent is rational exactly because $p$ is.** For $p > 1$ the
proof runs through Hölder with $q = p/(p-1)$, and a quotient of rationals with
nonzero denominator is a rational ([[def-rat-operations]]). Had $p$ been an
arbitrary real, $q$ would still be a real, but $|a_k|^{p}$ would already be
undefined: the whole statement lives inside the rational exponents built on this
page, as the closing remark of the page explains.

**On the case $p = 1$.** It reads $\sum_{k<n}|a_k+b_k| \le \sum_{k<n}|a_k| + \sum_{k<n}|b_k|$
and follows by summing the two-term triangle inequality
([[lem-of-triangle-inequality]]) termwise. It is not literally the finite-sum
triangle inequality [[lem-triangle-inequality-finite]], which compares
$\big|\sum_{k<n} c_k\big|$ with $\sum_{k<n}|c_k|$ for one list; combining the two
at $p = 1$ gives the familiar
$\big|\sum_{k<n}(a_k+b_k)\big| \le \sum_{k<n}|a_k| + \sum_{k<n}|b_k|$.

## Facts & Assumptions

**Given:** A natural $n$, reals $a_0, \dots, a_{n-1}$ and $b_0, \dots, b_{n-1}$, and a rational $p \ge 1$. Write $S := \sum_{k<n}|a_k+b_k|^{p}$, $U := \big(\sum_{k<n}|a_k|^{p}\big)^{1/p}$, $V := \big(\sum_{k<n}|b_k|^{p}\big)^{1/p}$, and $c_k := |a_k+b_k|^{\,p-1}$ when $p > 1$.

[L1] Hölder's inequality ([[thm-holder-finite]]): for conjugate rationals $p, q > 1$, $\sum_{k<n}|x_k y_k| \le \big(\sum_{k<n}|x_k|^{p}\big)^{1/p}\big(\sum_{k<n}|y_k|^{q}\big)^{1/q}$.

[L2] Laws of finite sums ([[lem-finite-sum-laws]], [[def-finite-sum]]): additivity, scaling, monotonicity, and the fact that a sum of nonnegative terms is nonnegative.

[L3] Rational power laws ([[lem-rational-power-laws]], [[def-rational-power]], [[thm-nth-roots-exist]]): for $u > 0$ and rationals $r, s$: $u^{r} > 0$, $u^{r+s} = u^{r}u^{s}$, $\big(u^{r}\big)^{s} = u^{rs}$, $u^{1} = u$ and $u^{-r} = \big(u^{r}\big)^{-1}$; and $0^{r} = 0$ for every rational $r > 0$.

[L4] Absolute values ([[lem-of-abs-value]], [[def-abs-value]], [[lem-of-triangle-inequality]]): $|x| \ge 0$, $|xy| = |x||y|$, and $|x+y| \le |x| + |y|$.

[L5] Rational arithmetic ([[def-rat-operations]], [[def-rationals]], [[def-rat-order]]), carried out in the totally ordered field $\mathbb{Q}$ ([[thm-rat-ordered-field]], which is what makes the order comparisons below legitimate, and which supplies totality, compatibility with addition and closure of the positives under multiplication but NOT $1 > 0$; that is [[cor-of-one-positive]], valid in $\mathbb{Q}$ because $\mathbb{Q}$ is an ordered field): for rational $p > 1$ one has $p - 1 > 0$ and, since $1 > 0$, also $p > p - 1 > 0$, so the number $q := p/(p-1)$ is a rational with $q > 1$, $\frac1p + \frac1q = 1$, $(p-1)q = p$ and $1 - \frac1q = \frac1p$.

[L6] Order arithmetic: [[lem-of-add-order]] and [[lem-of-sign-rules]] state adding inequalities and scaling by a positive element for the STRICT order only, so the nonstrict forms used below (adding two $\le$, and scaling a $\le$ by a nonnegative element) are those statements together with the case of equality, which is settled by trichotomy ([[def-ordered-field]]); and the inverse of a positive element is positive ([[lem-of-inverse-positive]], claim 1).

## Proof

**Proof technique:** direct.

1.1 Every quantity is defined and nonnegative: $|a_k + b_k|^{p}$, $|a_k|^{p}$ and $|b_k|^{p}$ are nonnegative because $p > 0$, hence so are $S$, $U$ and $V$. [L2, L3, L4]

1.2 The case $p = 1$: summing the two-term triangle inequality termwise and using monotonicity and additivity gives $\sum_{k<n}|a_k+b_k| \le \sum_{k<n}\big(|a_k| + |b_k|\big) = \sum_{k<n}|a_k| + \sum_{k<n}|b_k|$, and since $x^{1/1} = x$ this is exactly the assertion at $p = 1$. [L2, L3, L4]

1.3 The case $S = 0$: the left-hand side is $0^{1/p} = 0$, which is at most the nonnegative right-hand side. [L2, L3]

2.1 Assume from now on $p > 1$ and $S > 0$, and put $q := p/(p-1)$, a rational with $q > 1$ conjugate to $p$, so that $(p-1)q = p$ and $1 - \frac1q = \frac1p$. [step 1.1, step 1.2, step 1.3, L5]

3.1 Splitting each term: for $u \ge 0$ one has $u^{p} = u^{1 + (p-1)} = u \cdot u^{\,p-1}$, valid for $u > 0$ by the addition law and for $u = 0$ because both sides are $0$; applying this with $u = |a_k+b_k|$ and then the triangle inequality, multiplied by the nonnegative factor $c_k = |a_k+b_k|^{\,p-1}$, gives $|a_k+b_k|^{p} \le \big(|a_k| + |b_k|\big) c_k = |a_k| c_k + |b_k| c_k$ for every $k < n$. [step 2.1, L3, L4, L6]

3.2 The auxiliary list has $q$-th power sum $S$: $c_k^{\,q} = \big(|a_k+b_k|^{\,p-1}\big)^{q} = |a_k+b_k|^{(p-1)q} = |a_k+b_k|^{p}$ for $|a_k+b_k| > 0$ by the iterated-power law, and both sides are $0$ when $a_k + b_k = 0$; hence $\sum_{k<n}|c_k|^{q} = S$. [step 2.1, L3, L4]

4.1 Summing the termwise bound: $S \le \sum_{k<n}|a_k| c_k + \sum_{k<n}|b_k| c_k$. [step 3.1, L2]

4.2 Applying Hölder to the pairs $(a_k, c_k)$ and to $(b_k, c_k)$, and using $|a_k c_k| = |a_k| c_k$ since $c_k \ge 0$: $\sum_{k<n}|a_k| c_k \le U\,S^{1/q}$ and $\sum_{k<n}|b_k| c_k \le V\,S^{1/q}$. [step 3.2, step 2.1, L1, L4]

5.1 Combining, $S \le (U + V)\,S^{1/q}$. [step 4.1, step 4.2, L6]

6.1 Dividing by $S^{1/q} > 0$, which is legitimate because $S > 0$, and computing $S \big(S^{1/q}\big)^{-1} = S^{1}S^{-1/q} = S^{\,1 - 1/q} = S^{1/p}$, we obtain $S^{1/p} \le U + V$; together with the case $p = 1$ and the case $S = 0$ this proves the inequality for every rational $p \ge 1$. [step 5.1, step 2.1, step 1.2, step 1.3, L3, L5, L6] ∎
````

### `thm-norm-inequality-for-the-vector-valued-integral`

````markdown
---
id: thm-norm-inequality-for-the-vector-valued-integral
kind: theorem
title: "For $a \\le b$ and integrable $f : [a,b] \\to \\mathbb{R}^m$, $\\lVert f\\rVert_2$ is integrable and $\\bigl\\lVert\\int_a^b f\\bigr\\rVert_2 \\le \\int_a^b \\lVert f\\rVert_2$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-vector-valued-derivative-and-integral, def-vector-valued-functions-limits-and-continuity, def-euclidean-inner-product, thm-cauchy-schwarz-and-the-euclidean-norm, def-p-norms-on-rn, def-norm-and-normed-space, thm-linearity-of-the-integral, thm-monotonicity-of-the-integral, cor-integrability-of-absolute-values-products-and-lattice-operations, thm-composition-with-a-continuous-function, def-oriented-integral, def-darboux-integral, thm-of-square-roots, thm-continuous-inverse, def-continuity-real, lem-of-inverse-positive, lem-finite-sum-laws, def-finite-sum, thm-induction-principle, def-bounded-set, lem-of-square-monotone, def-interval, thm-algebra-of-continuous-functions, lem-of-abs-value]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "Cauchy-Schwarz inequality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy%E2%80%93Schwarz_inequality"
    - title: "Stephen Semmes, Some Basic Topics in Analysis, Sections 8.1.2–8.1.3"
      url: "https://math.rice.edu/~semmes/math322.pdf"
    - title: "Robert Gressman, Advanced Analysis, Integrating Vector-Valued Functions; Jensen's Inequality"
      url: "https://www2.math.upenn.edu/~gressman/analysis/13-jensen.html"
pipeline_run: null
---

## Statement

Let $m \in \mathbb{N}$ with $m \ge 1$, let $a, b \in \mathbb{R}$ with $a \le b$
and let $f : [a,b] \to \mathbb{R}^{m}$ be integrable
([[def-vector-valued-derivative-and-integral]]). Then:

1. if $a < b$, the real-valued function $t \mapsto \lVert f(t)\rVert_2$ is
   integrable on $[a,b]$ ([[def-darboux-integral]], [[def-p-norms-on-rn]]);
2. $$\Bigl\lVert \int_a^b f \Bigr\rVert_2 \;\le\; \int_a^b \lVert f\rVert_2 .$$

**The hypothesis $a \le b$ is not decoration.** With the orientation convention
of [[def-oriented-integral]] and
[[def-vector-valued-derivative-and-integral]], interchanging the limits changes
the sign of the right-hand side but not of the left, so for $b < a$ the correct
statement is $\bigl\lVert\int_a^b f\bigr\rVert_2 \le \bigl|\int_a^b \lVert f\rVert_2\bigr|$;
the displayed inequality as written is false in that case. This is the same trap
the scalar inequality of
[[cor-integrability-of-absolute-values-products-and-lattice-operations]] carries.

**Clause 1 is a genuine obligation and is discharged before the estimate.** That
each $f_i$ is integrable does not by itself say that
$\sqrt{\sum_{i<m} f_i^{2}}$ is; the square root has to be brought in through
[[thm-composition-with-a-continuous-function]].

## Facts & Assumptions

**Given:** A natural $m \ge 1$, reals $a \le b$, an integrable $f : [a,b] \to \mathbb{R}^{m}$ with components $f_0,\dots,f_{m-1}$, and the vector $v := \int_a^b f \in \mathbb{R}^{m}$; write $g(t) := \sum_{i<m} f_i(t)^{2}$, so that $\lVert f(t)\rVert_2 = \sqrt{g(t)}$ ([[def-euclidean-inner-product]], [[def-p-norms-on-rn]]).

[L1] The vector-valued integral is componentwise: $f$ is integrable exactly when every $f_i$ is bounded and Darboux integrable, and then $\bigl(\int_a^b f\bigr)_i = \int_a^b f_i$; $\int_a^a f = 0$ ([[def-vector-valued-derivative-and-integral]], [[def-darboux-integral]], [[def-oriented-integral]], [[def-bounded-set]]).

[L2] Linearity of the integral: integrable functions on $[a,b]$ are closed under sums and scalar multiples, and $\int_a^b(\lambda u + \mu w) = \lambda\int_a^b u + \mu\int_a^b w$ ([[thm-linearity-of-the-integral]]).

[L3] Monotonicity of the integral: for $a<b$ and integrable $u \le w$ on $[a,b]$, $\int_a^b u \le \int_a^b w$; and an integrable $u \ge 0$ has $\int_a^b u \ge 0$ ([[thm-monotonicity-of-the-integral]]).

[L4] Products and squares: if $u,w$ are integrable on $[a,b]$ then so are $|u|$, $u^{2}$ and $uw$ ([[cor-integrability-of-absolute-values-products-and-lattice-operations]]).

[L5] Composition: if $u$ is integrable on $[a,b]$ with values in $[\alpha,\beta]$ and $\varphi$ is continuous on $[\alpha,\beta]$, then $\varphi\circ u$ is integrable on $[a,b]$ ([[thm-composition-with-a-continuous-function]], [[def-continuity-real]]).

[L6] Square roots ([[thm-of-square-roots]], [[lem-of-square-monotone]]): every $c \ge 0$ has a unique $\sqrt{c} \ge 0$ with $(\sqrt c)^{2} = c$, and $s \mapsto s^{2}$ is strictly increasing on the nonnegatives, hence injective there.

[L7] Continuous inverse theorem: a continuous injective function on an order-convex subset of $\mathbb{R}$ is a bijection onto its order-convex image, whose inverse is continuous ([[thm-continuous-inverse]], [[def-interval]]); and $s \mapsto s^{2}$ is continuous ([[thm-algebra-of-continuous-functions]]).

[L8] Cauchy-Schwarz and the inner product: $\langle u,w\rangle = \sum_{i<m}u_iw_i$ is bilinear and symmetric, $\lVert u\rVert_2 = \sqrt{\langle u,u\rangle}$, $\lVert u\rVert_2 \ge 0$, and $|\langle u,w\rangle| \le \lVert u\rVert_2\lVert w\rVert_2$ ([[def-euclidean-inner-product]], [[thm-cauchy-schwarz-and-the-euclidean-norm]], [[def-norm-and-normed-space]]).

[L9] Laws of finite sums and induction ([[lem-finite-sum-laws]], [[def-finite-sum]], [[thm-induction-principle]]).

[L10] Order arithmetic: $u > 0$ gives $u^{-1} > 0$, a product of nonnegatives is nonnegative, and $t \le |t|$ ([[lem-of-inverse-positive]], [[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 If $a = b$ then $\int_a^b f = 0$ and $\int_a^b\lVert f\rVert_2 = 0$ by the oriented convention, so clause 2 reads $0 \le 0$ and holds, while clause 1 says nothing in that case; assume $a < b$ from here on. [L1]

1.2 Each component $f_i$ is bounded and integrable on $[a,b]$, so each $f_i^{2}$ is integrable. [L1, L4]

1.3 Pointwise, $\langle v, f(t)\rangle \le \bigl|\langle v,f(t)\rangle\bigr| \le \lVert v\rVert_2\,\lVert f(t)\rVert_2$ by Cauchy-Schwarz. [L8, L10]

2.1 By induction on $p \le m$, every finite sum $\sum_{i<p} f_i^{2}$ is integrable, the empty sum being the constant $0$ and each successor step adding one integrable function. Hence $g = \sum_{i<m}f_i^{2}$ is integrable. [step 1.2, L2, L9]

2.2 The real-valued function $t \mapsto \langle v, f(t)\rangle = \sum_{i<m}v_i f_i(t)$ is integrable, being a finite sum of scalar multiples of the integrable $f_i$, and by linearity applied $m$ times $\int_a^b \langle v,f\rangle = \sum_{i<m} v_i\int_a^b f_i = \sum_{i<m}v_i\,v_i = \langle v,v\rangle = \lVert v\rVert_2^{2}$. [step 1.2, L1, L2, L8, L9]

3.1 $g(t) \ge 0$ for every $t$, being a finite sum of squares, and $g$ is bounded above: each $|f_i|$ is bounded by some $B_i$, so $g(t) \le \sum_{i<m}B_i^{2} =: K$. Thus $g$ takes its values in $[0,K]$. [step 2.1, L1, L9, L10]

4.1 The map $s \mapsto s^{2}$ is continuous and injective on the order-convex set $[0,\sqrt K]$, with image $[0,K]$; by the continuous inverse theorem its inverse $\varphi : [0,K] \to [0,\sqrt K]$, $\varphi(u) = \sqrt u$, is continuous on $[0,K]$. [step 3.1, L6, L7]

5.1 $\lVert f(t)\rVert_2 = \sqrt{g(t)} = \varphi(g(t))$ for every $t \in [a,b]$, so $\lVert f\rVert_2 = \varphi \circ g$ is integrable on $[a,b]$; this is clause 1. [step 2.1, step 3.1, step 4.1, L5, L8]

6.1 Both sides of step 1.3 are integrable on $[a,b]$, so monotonicity and linearity give $\lVert v\rVert_2^{2} = \int_a^b\langle v,f\rangle \le \int_a^b \lVert v\rVert_2\lVert f\rVert_2 = \lVert v\rVert_2\int_a^b\lVert f\rVert_2$. [step 5.1, step 2.2, step 1.3, L2, L3]

6.2 If $v = 0$ then $\lVert v\rVert_2 = 0$, while $\int_a^b\lVert f\rVert_2 \ge 0$ because $\lVert f\rVert_2 \ge 0$ pointwise and $a<b$; so clause 2 holds in this case. [step 5.1, L3, L8]

7.1 If $v \ne 0$ then $\lVert v\rVert_2 > 0$, so multiplying the inequality of step 6.1 by the positive $1/\lVert v\rVert_2$ gives $\lVert v\rVert_2 \le \int_a^b\lVert f\rVert_2$, which is clause 2 in this case. [step 6.1, L8, L10]

8.1 The two cases of steps 6.2 and 7.1 exhaust the possibilities for $v$, so clause 2 holds; with step 5.1 both clauses are proved. [step 5.1, step 6.2, step 7.1] ∎

## Remarks

- **The case split at $v = 0$ is mandatory.** Step 6.1 delivers only $\lVert v\rVert_2^{2} \le \lVert v\rVert_2 \int_a^b\lVert f\rVert_2$, and dividing by $\lVert v\rVert_2$ is illegitimate when that number is $0$. Many textbook presentations divide without comment; the missing case is genuinely separate, and it is the one where the right-hand side has to be shown nonnegative on its own.

- **Why the inner-product route rather than a componentwise estimate.** Bounding each coordinate of $\int_a^b f$ separately and reassembling gives a constant depending on $m$; the argument above gives the sharp inequality with no constant, and it uses only bilinearity, Cauchy-Schwarz and monotonicity of the integral. The companion page checks the inequality numerically on an explicit curve and shows it is strict there.

- **Clause 1 is where the hypotheses of [[thm-composition-with-a-continuous-function]] are checked, one by one:** $g$ is integrable, its values lie in a closed bounded interval, and the outer function is continuous on that interval. The order of that theorem's hypotheses matters — continuous **after** integrable — and it is respected here.
````

### `thm-rearrangement-sums-lie-in-an-affine-subspace`

````markdown
---
id: thm-rearrangement-sums-lie-in-an-affine-subspace
kind: theorem
title: "The set of rearrangement sums of a convergent series in $\\mathbb{R}^n$ is a nonempty subset of the affine subspace $s + \\Gamma^{\\perp}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-the-space-of-summing-directions, def-series-of-vectors-and-rearrangement, thm-absolute-convergence-in-rn, thm-componentwise-convergence-and-completeness, thm-cauchy-schwarz-and-the-euclidean-norm, def-euclidean-inner-product, def-p-norms-on-rn, def-norm-and-normed-space, thm-dirichlet-rearrangement, thm-riemann-series-theorem, cor-unconditional-iff-absolute-in-r, def-rearrangement-and-unconditional-convergence, def-absolute-and-conditional-convergence, def-series, lem-finite-sum-laws, def-finite-sum, lem-standard-basis-of-f-n, def-linear-subspace, def-injection-surjection-bijection, def-metric-convergence, def-real-limit, lem-metric-limits-unique, thm-induction-principle, def-isometry-and-metric-embedding, lem-of-abs-value, lem-of-inverse-positive]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Levy-Steinitz theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/L%C3%A9vy%E2%80%93Steinitz_theorem"
    - title: "Riemann series theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_series_theorem"
    - title: "T. Banakh, A Simple Inductive Proof of the Levy-Steinitz Theorem"
      url: "https://arxiv.org/abs/1711.04136"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ with $n \ge 1$, let $(x_k)$ be a sequence in
$\mathbb{R}^{n}$ whose series converges
([[def-series-of-vectors-and-rearrangement]]) and write
$s := \sum_{k=0}^{\infty}x_k$. Let $\Gamma$ and $\Gamma^{\perp}$ be as in
[[def-the-space-of-summing-directions]]. Then:

1. **Nonemptiness.** $s \in \mathcal{S}(x)$, so $\mathcal{S}(x) \ne \varnothing$.
2. **Containment.**
   $$\mathcal{S}(x) \;\subseteq\; s + \Gamma^{\perp},$$
   the affine subspace through $s$ with direction $\Gamma^{\perp}$
   ([[def-the-space-of-summing-directions]]). Equivalently, $t - s \in \Gamma^{\perp}$
   for every rearrangement sum $t$.
3. **The absolutely convergent case.** If $\sum x_k$ converges absolutely then
   $\Gamma = \mathbb{R}^{n}$, $\Gamma^{\perp} = \{0\}$, the affine subspace is
   the single point $\{s\}$, and $\mathcal{S}(x) = \{s\}$.
4. **The one-dimensional conditionally convergent case.** Let $n = 1$ and
   identify $\mathbb{R}^{1}$ with $\mathbb{R}$ as in
   [[def-series-of-vectors-and-rearrangement]]. If $\sum x_k$ converges
   conditionally ([[def-absolute-and-conditional-convergence]]) then
   $\Gamma = \{0\}$, $\Gamma^{\perp} = \mathbb{R}^{1}$, and the containment of
   clause 2 is an **equality**, $\mathcal{S}(x) = s + \Gamma^{\perp} = \mathbb{R}^{1}$,
   by the published [[thm-riemann-series-theorem]].

**What this theorem does not say, stated here and repeated in the Remarks.** It
proves a **containment** and nothing more. Whether $\mathcal{S}(x)$ is all of
$s + \Gamma^{\perp}$ when $n \ge 2$ is **not settled anywhere on this page**, and
no item on this page asserts anything about it in either direction. Clause 4 is
the case $n = 1$, where the answer is supplied by a published theorem about the
real line; it is not evidence for any statement in higher dimensions.

## Facts & Assumptions

**Given:** A natural $n \ge 1$; a sequence $(x_k)$ in $\mathbb{R}^{n}$ with $\sum x_k$ convergent of sum $s$; a bijection $\sigma$ of $\mathbb{N}$; a vector $a \in \Gamma$; the partial sums $s_N = \sum_{k<N}x_k$ and $s^{\sigma}_N = \sum_{k<N}x_{\sigma(k)}$.

[L1] Series of vectors, absolute convergence, rearrangement, $\mathcal{S}(x)$, and the identification of $\mathbb{R}^{1}$ with $\mathbb{R}$ ([[def-series-of-vectors-and-rearrangement]], [[def-rearrangement-and-unconditional-convergence]], [[def-injection-surjection-bijection]], [[def-isometry-and-metric-embedding]]).

[L2] $\Gamma$ and $\Gamma^{\perp}$ are linear subspaces; $a \in \Gamma$ means $\sum_k|\langle a,x_k\rangle|$ converges; $\Gamma = \mathbb{R}^{n}$ exactly when $\sum x_k$ converges absolutely; and $s + W$ denotes the coset of a linear subspace $W$ ([[def-the-space-of-summing-directions]], [[def-linear-subspace]]).

[L3] The inner product is bilinear and symmetric, $\langle y,y\rangle = \lVert y\rVert_2^{2}$, positive definiteness gives $\langle y,y\rangle = 0$ only for $y = 0$, and Cauchy-Schwarz gives $|\langle a,y\rangle| \le \lVert a\rVert_2\lVert y\rVert_2$ ([[def-euclidean-inner-product]], [[thm-cauchy-schwarz-and-the-euclidean-norm]], [[def-p-norms-on-rn]], [[def-norm-and-normed-space]]).

[L4] Laws of finite sums and the induction principle ([[lem-finite-sum-laws]], [[def-finite-sum]], [[thm-induction-principle]]); finite sums in $\mathbb{R}^{n}$ are pointwise ([[lem-standard-basis-of-f-n]] clause 1).

[L5] Dirichlet's rearrangement theorem: an absolutely convergent real series has, for every bijection $\sigma$ of $\mathbb{N}$, a rearrangement converging to the same sum ([[thm-dirichlet-rearrangement]], [[def-absolute-and-conditional-convergence]]).

[L6] The Riemann series theorem: a conditionally convergent real series has, for every $c \in \mathbb{R}$, a rearrangement converging to $c$ ([[thm-riemann-series-theorem]] clause 1); and over $\mathbb{R}$ a convergent series is absolutely convergent or conditionally convergent and not both ([[cor-unconditional-iff-absolute-in-r]], [[def-absolute-and-conditional-convergence]]).

[L7] Convergence in $(\mathbb{R}^{n},d_2)$ and in $\mathbb{R}$, uniqueness of limits, and the componentwise criterion ([[def-metric-convergence]], [[def-real-limit]], [[lem-metric-limits-unique]], [[thm-componentwise-convergence-and-completeness]]).

[L8] An absolutely convergent series in $\mathbb{R}^{n}$ converges, every rearrangement converges to the same sum, and $\mathcal{S}(x)$ is then a single point ([[thm-absolute-convergence-in-rn]]).

[L9] Absolute value and order arithmetic: $|uv| = |u||v|$, $|u| \ge 0$, and $u>0$ gives $u^{-1}>0$ ([[lem-of-abs-value]], [[lem-of-inverse-positive]]).

## Proof

**Proof technique:** direct.

1.1 The identity map of $\mathbb{N}$ is a bijection and the rearrangement along it is the original series, so $s \in \mathcal{S}(x)$ and clause 1 holds. [L1]

1.2 For every $a \in \mathbb{R}^{n}$ and every finite list $u : p \to \mathbb{R}^{n}$, $\bigl\langle a, \sum_{j<p}u_j\bigr\rangle = \sum_{j<p}\langle a, u_j\rangle$: at $p=0$ both sides are $0$, and the successor step is additivity of the inner product in its second argument. [L3, L4]

1.3 If $u_N \to u$ in $(\mathbb{R}^{n},d_2)$ then $\langle a, u_N\rangle \to \langle a,u\rangle$ in $\mathbb{R}$, since $\bigl|\langle a,u_N\rangle - \langle a,u\rangle\bigr| = \bigl|\langle a, u_N-u\rangle\bigr| \le \lVert a\rVert_2\,\lVert u_N-u\rVert_2$, so a tolerance $\varepsilon/(\lVert a\rVert_2+1)$ on the right serves for $\varepsilon$ on the left. [L3, L7, L9]

1.4 Now let $n = 1$ and suppose $\sum x_k$ converges conditionally, so the real series $\sum_k (x_k)_0$ converges and $\sum_k|(x_k)_0|$ diverges. For $a \in \mathbb{R}^{1}$, $\langle a, x_k\rangle = a_0 (x_k)_0$ and $|\langle a,x_k\rangle| = |a_0|\,|(x_k)_0|$; if $a_0 \ne 0$ then convergence of $\sum_k |a_0||(x_k)_0|$ would give convergence of $\sum_k |(x_k)_0|$ after multiplying by the positive $1/|a_0|$, which is false, so $a \in \Gamma$ forces $a_0 = 0$; and $a = 0$ does lie in $\Gamma$. Hence $\Gamma = \{0\}$. [L1, L2, L9]

2.1 Let $t \in \mathcal{S}(x)$, say $s^{\sigma}_N \to t$ for a bijection $\sigma$, and let $a \in \Gamma$. By steps 1.2 and 1.3, $\langle a,t\rangle = \lim_N \langle a, s^{\sigma}_N\rangle = \lim_N \sum_{k<N}\langle a, x_{\sigma(k)}\rangle$, so the real series $\sum_k\langle a,x_{\sigma(k)}\rangle$ converges with sum $\langle a,t\rangle$. [step 1.2, step 1.3, L1, L7]

2.2 In the same way $\langle a, s\rangle = \lim_N\langle a, s_N\rangle = \lim_N\sum_{k<N}\langle a,x_k\rangle$, so $\sum_k\langle a,x_k\rangle$ converges with sum $\langle a,s\rangle$. [step 1.2, step 1.3, L7]

2.3 With $\Gamma = \{0\}$ the condition defining $\Gamma^{\perp}$ is $\langle 0,y\rangle = 0$, which holds for every $y$, so $\Gamma^{\perp} = \mathbb{R}^{1}$ and $s + \Gamma^{\perp} = \mathbb{R}^{1}$. [step 1.4, L2, L3]

3.1 The real sequence $k \mapsto \langle a, x_{\sigma(k)}\rangle$ is the rearrangement along $\sigma$ of the sequence $k \mapsto \langle a,x_k\rangle$, and the latter series converges absolutely because $a \in \Gamma$; so by Dirichlet's theorem the two series have the same sum. [step 2.1, step 2.2, L2, L5]

3.2 By the Riemann series theorem applied to the conditionally convergent real series $\sum_k (x_k)_0$, every real $c$ is the sum of some rearrangement of it; transporting along the identification of $\mathbb{R}$ with $\mathbb{R}^{1}$, every element of $\mathbb{R}^{1}$ lies in $\mathcal{S}(x)$. So $\mathcal{S}(x) = \mathbb{R}^{1} = s + \Gamma^{\perp}$, which with steps 1.4 and 2.3 is clause 4. [step 1.4, step 2.3, L1, L6, L7]

4.1 Combining steps 2.1, 2.2 and 3.1 gives $\langle a,t\rangle = \langle a,s\rangle$, hence $\langle a, t-s\rangle = 0$ by bilinearity. [step 2.1, step 2.2, step 3.1, L3]

5.1 Since $a \in \Gamma$ was arbitrary, $t-s \in \Gamma^{\perp}$, that is $t \in s + \Gamma^{\perp}$; as $t \in \mathcal{S}(x)$ was arbitrary, clause 2 holds. [step 4.1, L2]

6.1 Suppose $\sum x_k$ converges absolutely. Then $\Gamma = \mathbb{R}^{n}$, so any $y \in \Gamma^{\perp}$ satisfies $\langle y,y\rangle = 0$ and hence $y = 0$; thus $\Gamma^{\perp} = \{0\}$ and $s + \Gamma^{\perp} = \{s\}$. Moreover $\mathcal{S}(x) = \{s\}$ by [L8], so clause 3 holds and the containment of clause 2 is an equality in this case. [step 5.1, L2, L3, L8]

7.1 Clauses 1, 2, 3 and 4 are steps 1.1, 5.1, 6.1 and 3.2. [step 1.1, step 5.1, step 6.1, step 3.2] ∎

## Remarks

- **This theorem proves containment only, and the reverse inclusion is not proved, assumed, or asserted anywhere on this page.** For $n \ge 2$ the question whether every point of $s + \Gamma^{\perp}$ is a rearrangement sum is **open as far as this library is concerned**. It is not open in the mathematical literature, and this page deliberately states nothing about what the literature says, exactly as the published [[rem-rearrangement-in-higher-dimensions]] declines to. What is missing here is machinery, not effort: every route known to the author of this page passes through the orthogonal decomposition of a finite-dimensional inner product space and through a separation argument for convex sets, and neither exists in this library — the first belongs to a page earlier in the plan order that is not yet built, and the second to no planned page at all. See [[rem-rn-conventions-and-scope]].

- **The title claims exactly clause 2 and clause 1, and no more.** A title asserting that $\mathcal{S}(x)$ **is** the affine subspace would assert the reverse inclusion, which is not proved here.

- **Clause 4 is the published one-dimensional dichotomy seen from this page.** Over $\mathbb{R}$ a convergent series is either absolutely convergent, and then $\Gamma$ is everything and $\mathcal{S}$ is a point (clause 3), or conditionally convergent, and then $\Gamma$ is $\{0\}$ and $\mathcal{S}$ is the whole line (clause 4). Both extremes are consistent with clause 2, and both are equalities; that is a fact about dimension $1$, where a linear subspace of $\mathbb{R}^{1}$ is $\{0\}$ or everything and there is no room in between.

- **What the containment already rules out.** Even without the reverse inclusion, clause 2 forbids a rearrangement sum from leaving the affine subspace. That is enough to refute the naive $\mathbb{R}^{n}$ analogue of the Riemann series theorem, and the companion page does so with an elementary witness, using clause 2 and nothing further.
````

### `thm-steinitz-polygonal-confinement`

````markdown
---
id: thm-steinitz-polygonal-confinement
kind: theorem
title: "Steinitz's polygonal confinement theorem: finitely many vectors of norm at most $1$ summing to $0$ can be ordered so that every partial sum has norm at most $n$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-series-of-vectors-and-rearrangement, def-euclidean-inner-product, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, thm-cauchy-schwarz-and-the-euclidean-norm, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, def-norm-and-normed-space, cor-independent-set-is-no-larger-than-a-finite-spanning-set, def-linear-independence, def-dimension, lem-standard-basis-of-f-n, def-linear-combination-and-span, thm-well-ordering-principle, lem-finite-set-has-max, def-max-min, lem-finite-sum-laws, def-finite-sum, lem-finite-subsets-listable, def-countable, lem-pigeonhole, def-injection-surjection-bijection, def-canonical-natural, lem-of-naturals-positive, def-function-space, def-vector-space, thm-induction-principle, lem-of-inverse-positive, def-equinumerous, lem-vector-space-elementary-consequences]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Levy-Steinitz theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/L%C3%A9vy%E2%80%93Steinitz_theorem"
    - title: "Ernst Steinitz (Wikipedia), for the 1913 paper in which the rearrangement lemma appears"
      url: "https://en.wikipedia.org/wiki/Ernst_Steinitz"
    - title: "T. Oertel, J. Paat and R. Weismantel, A Colorful Steinitz Lemma with Applications to Block Integer Programs"
      url: "https://arxiv.org/abs/2201.05874"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ with $n \ge 1$, let $m \in \mathbb{N}$ and let
$v : m \to \mathbb{R}^{n}$ be a finite list of vectors with

$$\lVert v_i\rVert_2 \le 1 \ \text{ for every } i<m, \qquad \sum_{i<m} v_i = 0 .$$

Then there is a bijection $\pi : m \to m$
([[def-injection-surjection-bijection]]) such that

$$\Bigl\lVert \sum_{j<k} v_{\pi(j)} \Bigr\rVert_2 \;\le\; \iota(n) \qquad \text{for every } k \le m,$$

where $\iota$ is the canonical natural of $\mathbb{R}$
([[def-canonical-natural]]) and the sums are the finite sums of the vector space
$\mathbb{R}^{n}$ ([[def-linear-combination-and-span]]).

**The bound depends only on the dimension, not on $m$.** That is the whole
content: the triangle inequality alone gives only $\iota(k)$, which grows with
the number of vectors used.

**Which Steinitz result this is.** This is Steinitz's polygonal confinement
lemma, the rearrangement lemma of his 1913 paper on conditionally convergent
series. It is **not** the Steinitz exchange lemma of linear algebra, which is
published in this library as `thm-steinitz-exchange` and carries the alias
`lem-steinitz`. The two are unrelated results by the same author, and no item on
this page uses the bare alias.

## Facts & Assumptions

**Given:** Naturals $n \ge 1$ and $m$; a list $v : m \to \mathbb{R}^{n}$ with $\lVert v_i\rVert_2 \le 1$ for $i<m$ and $\sum_{i<m}v_i = 0$. Every finite list below is extended by $0$ beyond its range, so that the finite sums of [[def-finite-sum]] apply verbatim; a list into $\mathbb{R}^{n}$ is summed in the vector space $\mathbb{R}^{n}$ ([[def-linear-combination-and-span]]).

[L1] Norm facts: $\lVert\cdot\rVert_2$ is a norm on $\mathbb{R}^{n}$, $\lVert\lambda u\rVert_2 = |\lambda|\lVert u\rVert_2$, $\lVert u\rVert_2 \ge 0$, and the finite triangle inequality $\lVert\sum_{j<p}u_j\rVert_2 \le \sum_{j<p}\lVert u_j\rVert_2$ ([[def-norm-and-normed-space]], [[def-p-norms-on-rn]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]], [[thm-cauchy-schwarz-and-the-euclidean-norm]], [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clause 1).

[L2] Laws of finite sums of reals ([[lem-finite-sum-laws]], [[def-finite-sum]]): additivity, scaling, splitting $\sum_{i<r}b_i = \sum_{i<q}b_i + \sum_{i=q}^{r-1}b_i$ for $q \le r$ with $\sum_{i=q}^{r-1}b_i = \sum_{l<r-q}b_{q+l}$, monotonicity, $\sum_{j<p}\lambda = \iota(p)\lambda$, and the fact that a single term of a sum of nonnegative terms is at most the sum.

[L3] Finite sums in $\mathbb{R}^{n}$ are computed pointwise: $\bigl(\sum_{j<p}u_j\bigr)(t) = \sum_{j<p}u_j(t)$ for $t<n$ ([[lem-standard-basis-of-f-n]] clause 1), so every identity between real finite sums yields the corresponding identity between $\mathbb{R}^{n}$-valued ones; and two elements of $\mathbb{R}^{n}$ are equal exactly when all their coordinates are ([[def-function-space]], [[def-vector-space]], [[lem-vector-space-elementary-consequences]]).

[L4] The induction principle ([[thm-induction-principle]]) and the well-ordering principle: every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L5] A nonempty finite set of reals has a maximum and a minimum, each an element of the set ([[lem-finite-set-has-max]], [[def-max-min]], [[lem-finite-subsets-listable]]).

[L6] Dimension count: $\mathbb{R}^{n+1}$ has a basis with $n+1$ elements ([[lem-standard-basis-of-f-n]] clauses 2 and 4, [[def-dimension]]), so every linearly independent subset of $\mathbb{R}^{n+1}$ is finite with at most $n+1$ elements ([[cor-independent-set-is-no-larger-than-a-finite-spanning-set]], [[def-linear-independence]], [[def-countable]], [[def-equinumerous]], [[lem-pigeonhole]]).

[L7] The canonical natural ([[def-canonical-natural]], [[lem-of-naturals-positive]]): $\iota(0) = 0$ by the recursion clause, $\iota(p+q) = \iota(p)+\iota(q)$ for $p,q \ge 1$ by claim 3 there and trivially when $p = 0$ or $q = 0$, $\iota$ is strictly increasing, and $\iota(p) > 0$ for $p \ge 1$.

[L8] Order arithmetic: $u>0$ gives $u^{-1}>0$; an inequality may be multiplied by a nonnegative real; and trichotomy ([[lem-of-inverse-positive]]).

## Proof

**Proof technique:** constructive.

1.1 **Deleting one entry from a finite sum.** Let $b : \mathbb{N} \to \mathbb{R}$, let $r \ge 1$, let $q<r$, and let $b^{\wedge q}$ be the list with $b^{\wedge q}_i := b_i$ for $i<q$ and $b^{\wedge q}_i := b_{i+1}$ for $q \le i < r-1$. Then $\sum_{i<r}b_i = \sum_{i<r-1}b^{\wedge q}_i + b_q$: splitting the left side at $q$ and again at $q+1$ gives $\sum_{i<q}b_i + b_q + \sum_{l<r-1-q}b_{q+1+l}$, and splitting the right side at $q$ gives $\sum_{i<q}b_i + \sum_{l<r-1-q}b_{q+l+1}$, and the two agree. [L2]

1.2 **The easy case $m \le n$.** Take $\pi$ to be the identity of $m$, a bijection. For $k \le m$ the finite triangle inequality and $\lVert v_j\rVert_2 \le 1$ give $\lVert\sum_{j<k}v_j\rVert_2 \le \sum_{j<k}\lVert v_j\rVert_2 \le \sum_{j<k}1 = \iota(k) \le \iota(n)$, since $k \le m \le n$ and $\iota$ is increasing. So the theorem holds in this case, and we assume $m>n$ from here on. [construct, L1, L2, L7]

1.3 **Stage data.** For $n \le k \le m$ call a pair $(b,\mu)$ **admissible at $k$** when $b : k \to m$ is injective, $\mu : \mathbb{N} \to \mathbb{R}$ vanishes at every $j \ge k$, satisfies $0 \le \mu_j \le 1$ for $j<k$, and satisfies $\sum_{j<k}\mu_j v_{b(j)} = 0$ and $\sum_{j<k}\mu_j = \iota(k-n)$. [construct]

1.4 **Stage $m$ is admissible.** Take $b^{m} :=$ the identity of $m$ and $\mu^{m}_j := \iota(m-n)/\iota(m)$ for $j<m$, $\mu^m_j := 0$ for $j \ge m$; here $\iota(m) > 0$ because $m > n \ge 1$, and $0 \le \iota(m-n) \le \iota(m)$ gives $0 \le \mu^m_j \le 1$. Then $\sum_{j<m}\mu^m_j v_j = \bigl(\iota(m-n)/\iota(m)\bigr)\sum_{j<m}v_j = 0$ and $\sum_{j<m}\mu^m_j = \iota(m)\cdot\iota(m-n)/\iota(m) = \iota(m-n)$. [construct, L2, L7, L8]

1.5 **The estimate for $k<n$, for an arbitrary ordering.** For every bijection $\rho : m \to m$ and every $k<n$, the finite triangle inequality gives $\bigl\lVert\sum_{j<k}v_{\rho(j)}\bigr\rVert_2 \le \sum_{j<k}\lVert v_{\rho(j)}\rVert_2 \le \sum_{j<k}1 = \iota(k) \le \iota(n)$. [L1, L2, L7]

2.1 **The reindexing identity.** For every $k \in \mathbb{N}$, every $r \in \mathbb{N}$, every injective $f : r \to k$ and every $c : \mathbb{N} \to \mathbb{R}$ vanishing at every $j<k$ outside the image of $f$, one has $\sum_{j<k}c_j = \sum_{i<r}c_{f(i)}$. This is proved by induction on $k$, with $r$, $f$ and $c$ universally quantified. At $k=0$ the only injective $f : r \to 0$ has $r = 0$ and both sums are empty. At $k+1$, write $\sum_{j<k+1}c_j = \sum_{j<k}c_j + c_k$: if $k$ is not in the image of $f$ then $c_k = 0$ and $f$ maps into $k$, so the inductive hypothesis applies directly; and if $k = f(q)$ for the unique such $q<r$, then $r \ge 1$ and the list $g := f^{\wedge q}$ of step 1.1 is an injective map $r-1 \to k$ off whose image $c$ vanishes on $\{j : j<k\}$, so the inductive hypothesis gives $\sum_{j<k}c_j = \sum_{i<r-1}c_{g(i)}$, while step 1.1 applied to $b_i := c_{f(i)}$ gives $\sum_{i<r}c_{f(i)} = \sum_{i<r-1}c_{g(i)} + c_{f(q)}$; adding $c_k = c_{f(q)}$ to the first identity yields the claim. [step 1.1, L2, L4]

2.2 **The feasible set at $k-1$ is nonempty.** Let $(b,\mu)$ be admissible at $k$ with $n<k\le m$, and let $\Lambda$ be the set of all $\mu' : \mathbb{N} \to \mathbb{R}$ vanishing at every $j\ge k$, with $0 \le \mu'_j \le 1$ for $j<k$, $\sum_{j<k}\mu'_j v_{b(j)} = 0$ and $\sum_{j<k}\mu'_j = \iota(k-1-n)$. The scalar $\rho := \iota(k-1-n)/\iota(k-n)$ is defined and lies in $[0,1]$, since $\iota(k-n)>0$ and $0 \le \iota(k-1-n) \le \iota(k-n)$; and $\rho\mu$ lies in $\Lambda$. [step 1.3, L2, L7, L8]

3.1 Both identities hold verbatim for lists with values in $\mathbb{R}^{n}$, since a vector identity is the conjunction of its $n$ coordinate identities and the coordinates of a vector finite sum are the real finite sums of the coordinates. [step 1.1, step 2.1, L3]

3.2 **The minimal number of fractional coordinates.** Call $\mu' \in \Lambda$ **$r$-simple** when there is an injective $f : r \to k$ with $\mu'_j \in \{0,1\}$ for every $j<k$ outside the image of $f$. The set $R := \{\, r \in \mathbb{N} : \text{some } \mu' \in \Lambda \text{ is } r\text{-simple} \,\}$ contains $k$, taking $f$ to be the identity of $k$, so $R$ is a nonempty set of naturals and has a least element $r_0$; fix $\mu \in \Lambda$ and an injective $f : r_0 \to k$ witnessing it. [step 2.2, L4]

4.1 **Two consequences used repeatedly.** Taking $k = r$ and $f$ a bijection of $k$ in step 2.1 gives $\sum_{j<k}c_{f(j)} = \sum_{j<k}c_j$ for every $c$; and taking $c$ to vanish off the image of an injective $f : r \to k$ gives $\sum_{j<k}c_j = \sum_{i<r}c_{f(i)}$, both in $\mathbb{R}$ and in $\mathbb{R}^{n}$. [step 2.1, step 3.1]

4.2 **Every marked coordinate is strictly fractional.** For every $i<r_0$ one has $0 < \mu_{f(i)} < 1$: otherwise $\mu_{f(i)} \in \{0,1\}$, and then $f^{\wedge i}$, an injective map $r_0-1 \to k$ off whose image $\mu$ takes values in $\{0,1\}$, would witness that $\mu$ is $(r_0-1)$-simple, contradicting minimality of $r_0$. [step 1.1, step 3.2]

4.3 **Suppose $r_0 \ge n+2$, towards a contradiction.** Define $w : r_0 \to \mathbb{R}^{n+1}$ by $w_i(t) := \bigl(v_{b(f(i))}\bigr)(t)$ for $t<n$ and $w_i(n) := 1$. [step 3.2]

5.1 **The list $w$ is linearly dependent:** there is $\lambda : r_0 \to \mathbb{R}$, not identically $0$, with $\sum_{i<r_0}\lambda_i w_i = 0$. If $w$ is not injective, say $w_{i_1} = w_{i_2}$ with $i_1 \ne i_2$, take $\lambda_{i_1} := 1$, $\lambda_{i_2} := -1$ and $\lambda_i := 0$ otherwise; the list $i \mapsto \lambda_i w_i$ then vanishes off $\{i_1,i_2\}$ and sums to $w_{i_1} - w_{i_2} = 0$ by step 4.1. If $w$ is injective, its image is a subset of $\mathbb{R}^{n+1}$ equinumerous with $r_0 \ge n+2$, hence not linearly independent by [L6]; so some injective list $h : p \to \operatorname{im}(w)$ is linearly dependent, giving $\nu : p \to \mathbb{R}$ not identically $0$ with $\sum_{l<p}\nu_l h(l) = 0$, and setting $\lambda_{i} := \nu_l$ when $w_i = h(l)$ and $\lambda_i := 0$ otherwise turns that into $\sum_{i<r_0}\lambda_i w_i = 0$ by step 4.1, the list $i \mapsto \lambda_i w_i$ vanishing off the image of the injective map $l \mapsto$ the unique $i$ with $w_i = h(l)$. [step 4.3, L6]

5.2 **The step length.** Let $i_0$ be the least $i<r_0$ with $\lambda_i \ne 0$, which exists because $\lambda$ is not identically $0$. Define $s : r_0 \to \mathbb{R}$ by $s_i := (1-\mu_{f(i)})/\lambda_i$ if $\lambda_i>0$, by $s_i := \mu_{f(i)}/(-\lambda_i)$ if $\lambda_i<0$, and by $s_i := s_{i_0}$ if $\lambda_i = 0$; every $s_i$ is a positive real by step 4.2. Put $t^{*} := \min\{s_0,\dots,s_{r_0-1}\}$, a minimum over a nonempty finite set of reals, so $t^{*}>0$ and $t^{*} = s_{i}$ for some $i<r_0$; choosing that $i$ if $\lambda_i \ne 0$ and $i_0$ otherwise, there is $i^{*}<r_0$ with $\lambda_{i^{*}} \ne 0$ and $t^{*} = s_{i^{*}}$. [step 4.2, L4, L5, L8]

6.1 **Reading the coordinates of step 5.1.** The coordinate $n$ gives $\sum_{i<r_0}\lambda_i = 0$, and the coordinates $t<n$ give $\sum_{i<r_0}\lambda_i v_{b(f(i))} = 0$ in $\mathbb{R}^{n}$. [step 4.3, step 5.1, L3]

6.2 **The moved point.** Define $\mu' : \mathbb{N} \to \mathbb{R}$ by $\mu'_j := \mu_j + t^{*}\lambda_i$ if $j = f(i)$ for the unique $i<r_0$ with that property, and $\mu'_j := \mu_j$ otherwise. Then $0 \le \mu'_j \le 1$ for every $j<k$: outside the image of $f$ nothing changes; at $j = f(i)$ with $\lambda_i>0$ one has $\mu_{f(i)} < \mu'_j \le \mu_{f(i)} + s_i\lambda_i = 1$; with $\lambda_i<0$ one has $0 = \mu_{f(i)} + s_i\lambda_i \le \mu'_j < \mu_{f(i)}$; and with $\lambda_i = 0$ the value is unchanged. [step 4.2, step 5.2, L8]

7.1 **The moved point is feasible.** The list $j \mapsto \mu'_j - \mu_j$ vanishes at every $j<k$ off the image of $f$ and takes the value $t^{*}\lambda_i$ at $f(i)$, so step 4.1 gives $\sum_{j<k}(\mu'_j-\mu_j) = \sum_{i<r_0}t^{*}\lambda_i = t^{*}\cdot 0 = 0$; likewise the $\mathbb{R}^{n}$-valued list $j \mapsto (\mu'_j-\mu_j)v_{b(j)}$ vanishes off that image and takes the value $t^{*}\lambda_i v_{b(f(i))}$ at $f(i)$, so $\sum_{j<k}(\mu'_j-\mu_j)v_{b(j)} = t^{*}\sum_{i<r_0}\lambda_i v_{b(f(i))} = 0$. Hence $\sum_{j<k}\mu'_j = \iota(k-1-n)$ and $\sum_{j<k}\mu'_j v_{b(j)} = 0$, so $\mu' \in \Lambda$. [step 4.1, step 6.1, step 6.2, L2, L3]

8.1 **The contradiction.** By step 5.2, $\mu'_{f(i^{*})} = \mu_{f(i^{*})} + t^{*}\lambda_{i^{*}} \in \{0,1\}$. So $f^{\wedge i^{*}}$, an injective map $r_0-1 \to k$, witnesses that $\mu'$ is $(r_0-1)$-simple: off the image of $f$ the value $\mu'_j = \mu_j$ lies in $\{0,1\}$, and at $f(i^{*})$ it lies in $\{0,1\}$ as just shown. This contradicts the minimality of $r_0$, so the supposition of step 4.3 is untenable and $r_0 \le n+1$. [step 1.1, step 3.2, step 5.2, step 6.2, step 7.1]

9.1 **The support bound.** There is $j_0<k$ with $\mu_{j_0} = 0$. Suppose instead that $\mu_j>0$ for every $j<k$; then off the image of $f$ the value $\mu_j$ lies in $\{0,1\}$ and is positive, hence equals $1$. Put $\nu_j := 1-\mu_j$ for $j<k$ and $\nu_j := 0$ for $j \ge k$, so $\nu$ vanishes at every $j<k$ off the image of $f$ and satisfies $0<\nu_{f(i)}<1$ for $i<r_0$ by step 4.2, while $\sum_{j<k}\nu_j = \iota(k)-\iota(k-1-n) = \iota(n+1)$ by [L7]. [step 4.2, step 8.1, L2, L7]

10.1 By step 4.1, $\sum_{j<k}\nu_j = \sum_{i<r_0}\nu_{f(i)}$. If $r_0 = 0$ this is the empty sum $0$, contradicting $\iota(n+1)>0$. If $r_0 \ge 1$ then every term of $\sum_{i<r_0}(1-\nu_{f(i)})$ is positive, so that sum is at least its term at index $0$ and hence positive, whence $\sum_{i<r_0}\nu_{f(i)} = \iota(r_0) - \sum_{i<r_0}(1-\nu_{f(i)}) < \iota(r_0) \le \iota(n+1)$ using step 8.1. Either way $\iota(n+1) < \iota(n+1)$ or $\iota(n+1) = 0$, both impossible; so some $\mu_{j_0}$ is $0$. [step 4.1, step 8.1, step 9.1, L2, L7, L8]

11.1 **Descending one stage.** With $j_0$ as in step 9.1, put $b' := b^{\wedge j_0} : k-1 \to m$ and $\mu'' := \mu^{\wedge j_0}$, extended by $0$ beyond $k-1$. Then $b'$ is injective with image $\operatorname{im}(b)\setminus\{b(j_0)\}$, $0 \le \mu''_j \le 1$ for $j<k-1$, and by step 1.1 in both its real and its vector form, $\sum_{j<k-1}\mu''_j = \sum_{j<k}\mu_j - \mu_{j_0} = \iota(k-1-n)$ and $\sum_{j<k-1}\mu''_j v_{b'(j)} = \sum_{j<k}\mu_j v_{b(j)} - \mu_{j_0}v_{b(j_0)} = 0$. So $(b',\mu'')$ is admissible at $k-1$. [construct, step 1.1, step 3.1, step 3.2, step 10.1]

12.1 **Iterating.** Starting from the admissible pair of step 1.4 at $k = m$ and applying step 11.1 once for each $k$ from $m$ down to $n+1$, one obtains admissible pairs $(b^{k},\mu^{k})$ for every $k$ with $n \le k \le m$, with $\operatorname{im}(b^{k-1}) \subseteq \operatorname{im}(b^{k})$ and $\operatorname{im}(b^{k})\setminus\operatorname{im}(b^{k-1})$ a single element. This is a recursion of length $m-n$, each stage determined by the previous one together with finitely many determinations (a least natural, a minimum of a finite set of reals), so no choice principle is involved. [construct, step 1.4, step 11.1, L4, L5]

13.1 **The ordering.** Define $\pi : m \to m$ by $\pi(j) := b^{n}(j)$ for $j<n$ and, for each $k$ with $n<k\le m$, $\pi(k-1) := $ the unique element of $\operatorname{im}(b^{k})\setminus\operatorname{im}(b^{k-1})$. The images $\operatorname{im}(b^{k})$ increase from $\operatorname{im}(b^{n})$, of size $n$, to $\operatorname{im}(b^{m}) = m$, gaining exactly one element at each stage, so $\pi$ is injective with image $m$, that is a bijection, and for every $k$ with $n \le k \le m$ the set $\{\pi(j) : j<k\}$ is exactly $\operatorname{im}(b^{k})$. [construct, step 12.1, L4, L6]

14.1 **Both enumerations give the same partial sum.** Fix $k$ with $n \le k \le m$ and let $c : \mathbb{N} \to \mathbb{R}^{n}$ be $c_i := v_i$ for $i \in \operatorname{im}(b^{k})$ and $c_i := 0$ otherwise. Then $c$ vanishes at every $i<m$ off the image of the injective list $j \mapsto \pi(j)$ on $k$, and also off the image of $b^{k}$, so step 4.1 applied twice gives $\sum_{j<k}v_{\pi(j)} = \sum_{i<m}c_i = \sum_{j<k}v_{b^{k}(j)}$. [step 4.1, step 13.1]

15.1 **The estimate for $n \le k \le m$.** Since $\sum_{j<k}\mu^{k}_j v_{b^{k}(j)} = 0$, additivity gives $\sum_{j<k}v_{b^{k}(j)} = \sum_{j<k}\bigl(1-\mu^{k}_j\bigr)v_{b^{k}(j)}$; each coefficient $1-\mu^{k}_j$ is nonnegative, so the finite triangle inequality and $\lVert v_i\rVert_2 \le 1$ give $\bigl\lVert\sum_{j<k}v_{b^{k}(j)}\bigr\rVert_2 \le \sum_{j<k}\bigl(1-\mu^{k}_j\bigr)\lVert v_{b^{k}(j)}\rVert_2 \le \sum_{j<k}\bigl(1-\mu^{k}_j\bigr) = \iota(k)-\iota(k-n) = \iota(n)$. [step 12.1, step 14.1, L1, L2, L7]

16.1 By steps 14.1 and 15.1 the bound $\lVert\sum_{j<k}v_{\pi(j)}\rVert_2 \le \iota(n)$ holds for $n \le k \le m$, and by step 1.5 it holds for $k<n$; together with the case $m \le n$ of step 1.2, the required bijection $\pi$ has been exhibited in every case. [step 1.2, step 13.1, step 14.1, step 15.1, step 1.5, discharge-construct] ∎

## Remarks

- **The support bound of steps 9.1 and 10.1 is the step most write-ups omit.** From $r_0 \le n+1$ one gets only that the support of $\mu$ has at most $(k-1-n)+(n+1) = k$ elements, which is no information at all. What rules out equality is that the quantities $1-\mu_{f(i)}$ would then be strictly positive at each of at most $n+1$ marked indices while summing to $\iota(n+1)$; that is exactly the computation in steps 9.1 and 10.1, and without a coordinate $\mu_{j_0} = 0$ the descending construction does not start.

- **Where the dimension enters, and only there.** The single place the number $n$ is used is step 5.1, where $n+2$ vectors in $\mathbb{R}^{n+1}$ are linearly dependent. The extra coordinate constantly $1$ is what converts the constraint $\sum_i \lambda_i = 0$ into a linear condition, so that one dependence delivers both identities of step 6.1 at once.

- **No choice principle is used.** The construction is a recursion of length $m-n$; at each stage the objects produced are a least natural number ([[thm-well-ordering-principle]]) and a minimum of a nonempty finite set of reals ([[lem-finite-set-has-max]]), both determined rather than selected, and the pair $(\mu, f)$ of step 3.2 is a single selection from a nonempty set at each of finitely many stages.

- **The reindexing identity of step 2.1 is proved here rather than cited.** [[lem-finite-sum-laws]] is stated for sums $\sum_{k<n}a_k$ over an initial segment of $\mathbb{N}$ and carries no invariance clause, and no lemma available to this page gives the form step 2.1 needs — an injective $f : r \to k$ with the summand vanishing at every $j < k$ off its image. That form is therefore proved here. Step 2.1 contains permutation invariance as the special case $r = k$ with $f$ a bijection.

- **The constant $\iota(n)$ is not claimed to be optimal.** What is proved is that some ordering keeps every partial sum inside the ball of radius $\iota(n)$; on an explicit list of six unit vectors in $\mathbb{R}^{2}$ the companion page exhibits one ordering that meets the bound — with room to spare, so the bound is not attained there — and another that violates it, so the theorem is seen to say something.
````

