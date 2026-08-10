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

- direct-citation consumer of generated-risk seed rem-rn-conventions-and-scope

## Target item — `def-norm-and-normed-space`

Normalized current SHA-256: `d958c0104cfbe0ca75de31ab85fc0f425c68f882baaea3f1c231b0a4b5356663`

The complete exact-current item follows, including frontmatter:

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

## Wave 12 provenance row

```json
{
  "id": "def-norm-and-normed-space",
  "statement": "ai-altered",
  "proof": "not-applicable",
  "evidence": "semantic-source",
  "urls": [
    "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html",
    "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
  ],
  "rationale": "A norm on a real vector space, the induced metric, and the dictionary with the metric axioms: The literature gives the standard norm definitions and finite-dimensional equivalence, compactness, or coordinate results; the item specializes it to the library’s zero-based function model of R^n, named published metrics, and explicit n-boundary conventions, and sometimes bundles consequences or a refuting witness. The item has no supplied proof component.",
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
    "source": "def-norm-and-normed-space",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-vector-space",
    "declared_target": "def-vector-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "vector-spaces-and-subspaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "def-norm-and-normed-space",
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
    "source": "def-norm-and-normed-space",
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
    "source": "def-norm-and-normed-space",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-metric-space",
    "declared_target": "def-metric-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "def-norm-and-normed-space",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "lem-metric-nonnegativity",
    "declared_target": "lem-metric-nonnegativity",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "def-norm-and-normed-space",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-metric-topology",
    "declared_target": "def-metric-topology",
    "target_statement_provenance": "literature-derived",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "def-norm-and-normed-space",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "lem-bounded-remetrisation",
    "declared_target": "lem-bounded-remetrisation",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "def-norm-and-normed-space",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "rem-metric-axiom-conventions",
    "declared_target": "rem-metric-axiom-conventions",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "def-norm-and-normed-space",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-abs-value",
    "declared_target": "def-abs-value",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "def-norm-and-normed-space",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "lem-of-abs-value",
    "declared_target": "lem-of-abs-value",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "def-norm-and-normed-space",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "lem-of-triangle-inequality",
    "declared_target": "lem-of-triangle-inequality",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "def-norm-and-normed-space",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-complete-ordered-field",
    "declared_target": "def-complete-ordered-field",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "def-norm-and-normed-space",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "lem-vector-space-elementary-consequences",
    "declared_target": "lem-vector-space-elementary-consequences",
    "target_statement_provenance": "ai-altered",
    "targetPage": "vector-spaces-and-subspaces",
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

## Full exact-current text of every cited or declared item (14)

### `def-abs-value`

````markdown
---
id: def-abs-value
kind: definition
title: "Absolute value in an ordered field"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-ordered-field]
aliases: []
landmark: false
short: "|x|"
verification:
  precheck: n/a
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Dartmouth College analysis notes: Absolute value"
      url: "https://math.dartmouth.edu/~m63w21/lecture-m63-02.pdf"
pipeline_run: null
---

## Definition

Let $F$ be an ordered field ([[def-ordered-field]]). The **absolute value** of
$x \in F$ is

$$|x| \;:=\; \begin{cases} x & \text{if } x \ge 0, \\ -x & \text{if } x < 0. \end{cases}$$

## Remarks

- The distance between $x$ and $y$ is $|x - y|$.
- The basic algebraic properties ($|x| \ge 0$, $|x| = 0 \iff x = 0$,
  $|xy| = |x|\,|y|$, and the characterisation $|x| < c \iff -c < x < c$) are
  established in [[lem-of-abs-value]]; the triangle inequality is
  [[lem-of-triangle-inequality]].
````

### `def-complete-ordered-field`

````markdown
---
id: def-complete-ordered-field
kind: definition
title: "Complete ordered field (least-upper-bound property)"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-ordered-field]
aliases: [def-dedekind-complete-field]
landmark: true
short: "complete ordered field"
verification:
  precheck: n/a
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 8"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "University of Wisconsin Math 521 notes: Real analysis"
      url: "https://people.math.wisc.edu/~jwrobbin/521dir/521.pdf"
pipeline_run: null
---

## Definition

Let $F$ be an ordered field ([[def-ordered-field]]) and $S \subseteq F$.

- $u \in F$ is an **upper bound** of $S$ if $s \le u$ for all $s \in S$; $S$ is
  **bounded above** if it has an upper bound.
- $u \in F$ is a **least upper bound** (or **supremum**, $\sup S$) of $S$ if $u$
  is an upper bound of $S$ and $u \le u'$ for every upper bound $u'$ of $S$.

$F$ is a **complete ordered field** (equivalently, $F$ has the
**least-upper-bound property**, or is **Dedekind complete**) if every nonempty
$S \subseteq F$ that is bounded above has a least upper bound in $F$.

## Remarks

- A least upper bound, if it exists, is unique (two least upper bounds are each
  $\le$ the other, so equal by antisymmetry of the order).
- Applying the property to $\{-s : s \in S\}$ yields the dual **greatest lower
  bound** (infimum) property, so the two are equivalent.
- The Dedekind-cut reals have this property by construction
  ([[thm-dedekind-complete]]); the Cauchy-sequence reals acquire it via
  [[cor-cauchy-reals-lub-complete]]. This definition is the target for the
  uniqueness theorem [[thm-uniqueness-complete-ordered-field]].
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

### `def-metric-space`

````markdown
---
id: def-metric-space
kind: definition
title: "Metric space: $d(x,y) = 0$ iff $x = y$, symmetry, and the triangle inequality; pseudometric and ultrametric"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-numbers, def-real-order, def-complete-ordered-field, def-ordered-field,
       def-max-min, lem-finite-set-has-max]
justified_by: []
aliases: [def-metric, def-pseudometric, def-ultrametric]
landmark: true
short: "metric space $(X,d)$"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "Ultrametric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ultrametric_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis II, 3rd ed., Ch. 1"
      url: "https://terrytao.wordpress.com/books/analysis-ii/"
    - title: "Pseudometric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Pseudometric_space"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 20: The Metric Topology (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-20.pdf"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]], [[def-ordered-field]]) constructed in this
library ([[def-real-numbers]]) and carrying its order ([[def-real-order]]).

Let $X$ be a set. A **metric** on $X$ is a function
$d : X \times X \to \mathbb{R}$ such that for all $x, y, z \in X$:

- **(M1) Separation.** $d(x,y) = 0$ if and only if $x = y$.
- **(M2) Symmetry.** $d(x,y) = d(y,x)$.
- **(M3) Triangle inequality.** $d(x,z) \le d(x,y) + d(y,z)$.

A **metric space** is a pair $(X,d)$ consisting of a set $X$ and a metric $d$ on
it. The elements of $X$ are its **points** and $d(x,y)$ is the **distance** from
$x$ to $y$. When only one metric is in play we write $X$ for $(X,d)$; when
several are, the metric is always named.

**The values of a metric are real numbers.** The codomain is $\mathbb{R}$, so
$d(x,y)$ is an honest element of the complete ordered field and every
inequality above is an inequality there. No infinite value is permitted;
[[rem-metric-axiom-conventions]] records why extended metrics are not treated in
this library.

**Nonnegativity is deliberately absent from the axiom list.** Many texts add a
fourth axiom $d(x,y) \ge 0$. It is redundant: (M1), (M2) and (M3) already force
it, as [[lem-metric-nonnegativity]] proves. Nothing below assumes it before that
lemma is available.

**Pseudometric.** A **pseudometric** on $X$ is a function
$p : X \times X \to \mathbb{R}$ satisfying (M2), (M3) and the weakening

- **(M1') Reflexivity.** $p(x,x) = 0$ for every $x \in X$

of (M1). A pseudometric may therefore assign distance $0$ to two distinct
points. Every metric is a pseudometric, and a pseudometric is a metric exactly
when $p(x,y) = 0$ forces $x = y$.

**Ultrametric.** An **ultrametric** on $X$ is a metric $d$ that in addition
satisfies

- **(M3') Strong triangle inequality.** $d(x,z) \le \max\{d(x,y), d(y,z)\}$

for all $x, y, z \in X$, where the maximum is that of a two-element subset of
$\mathbb{R}$, which exists and is one of the two elements
([[def-max-min]], [[lem-finite-set-has-max]]). An **ultrametric space** is a pair
$(X,d)$ with $d$ an ultrametric.

## Remarks

- **(M3') is a genuine strengthening of (M3), not an independent axiom on top of
  it.** A function satisfying (M1), (M2) and (M3') automatically satisfies (M3):
  by [[lem-metric-nonnegativity]] such a function is nonnegative, and for
  nonnegative reals $a, b$ one has $\max\{a,b\} \le a + b$, since the maximum is
  one of $a, b$ and the other summand is $\ge 0$. So "a metric satisfying (M3')"
  and "a function satisfying (M1), (M2), (M3')" describe the same objects, and
  the definition above may be read either way.

- **Why the biconditional form of (M1).** Splitting (M1) into "$d(x,x) = 0$" and
  "$d(x,y) = 0 \Rightarrow x = y$" gives the same notion; the split form is what
  makes the pseudometric weakening above a matter of deleting one clause. The
  naming fork between *pseudometric* and *semimetric*, which is live in the
  literature, is settled for this library in
  [[rem-metric-axiom-conventions]].

- **The metric is part of the data.** Two different metrics on the same set are
  two different metric spaces, even when they have the same open sets. That is
  why [[def-equivalent-metrics]] compares metrics at three separate strengths
  rather than one, and why a property can be invariant under one of them and not
  under another ([[fs-boundedness-is-a-topological-property]]).
````

### `def-metric-topology`

````markdown
---
id: def-metric-topology
kind: definition
title: "The metric topology: a set is open when every one of its points has a ball around it inside the set; closed means open complement"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-metric-ball, def-metric-space]
justified_by: []
aliases: [def-open-set-metric, def-closed-set-metric]
landmark: true
short: "metric topology"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Open set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Open_set"
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 20: The Metric Topology (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-20.pdf"
pipeline_run: null
---

## Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]).

A subset $U \subseteq X$ is **open in $(X,d)$** if for every $x \in U$ there is a
real $r > 0$ with $B(x,r) \subseteq U$ ([[def-metric-ball]]). A subset
$F \subseteq X$ is **closed in $(X,d)$** if its complement $X \setminus F$ is
open.

The collection

$$\mathcal{T}_d := \{\, U \subseteq X : U \text{ is open in } (X,d) \,\}$$

of all open subsets is the **metric topology** of $d$ on $X$. A subset of $X$
that is both open and closed is called **clopen**.

**Two sets are open for trivial reasons.** $\emptyset$ is open, because the
defining condition quantifies over no points; and $X$ is open, because
$B(x,r) \subseteq X$ for every $x$ and every $r > 0$. Consequently $X$ and
$\emptyset$ are also closed, and both are clopen.

**A neighbourhood of a point $x$** is any open set containing $x$. The condition
above therefore reads: $U$ is open exactly when every point of $U$ has a ball
around it inside $U$, and it is the balls alone that have to be tested.

**The metric, not the set, determines $\mathcal{T}_d$.** Two metrics on the same
set may have different metric topologies, and two different metrics may have the
same one; the systematic comparison is [[def-equivalent-metrics]].

## Remarks

- **What "topology" means here.** $\mathcal{T}_d$ is defined above as a
  collection of subsets of $X$; the abstract notion of a topological space, a
  collection of subsets closed under arbitrary unions and finite intersections
  taken as primitive data, is introduced on a later page and is not used
  here. What is proved
  here is that $\mathcal{T}_d$ has exactly those closure properties
  ([[thm-metric-open-set-algebra]]), which is what licenses the word.
- **Open and closed are not opposites.** A set may be neither ($[0,1)$ inside
  $\mathbb{R}$, once the usual metric is available from
  [[lem-real-line-is-a-metric-space]]) or both ($\emptyset$ and $X$ always, and
  in some spaces every subset at once, as the discrete metric on the companion
  page shows). "Not open" is never a synonym for "closed".
- **Closedness is complementation, and nothing else, at this stage.** The
  description of closed sets by limits of sequences, and the description of the
  closure as an infimum of distances, are theorems proved later on this page
  ([[thm-metric-closure-characterisation]], [[thm-metric-sequential-closure]]),
  not part of the definition.
````

### `def-vector-space`

````markdown
---
id: def-vector-space
kind: definition
title: "Vector space over a field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-field, def-group, def-binary-operation, def-identity-element, def-invertible-element, lem-identity-unique, lem-inverse-unique]
justified_by: []
aliases: [def-vector, def-scalar-multiplication]
landmark: true
short: "vector space over $F$"
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
    - title: "Vector space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Vector_space"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Ch. 1"
      url: "https://linear.axler.net/"
pipeline_run: null
---

## Definition

Let $F$ be a field ([[def-field]]), with additive identity $0_F$, multiplicative
identity $1_F$, and the field axioms as stated there. A **vector space over $F$**,
also called an **$F$-vector space**, consists of

- a set $V$, whose elements are called **vectors**;
- a binary operation $+ : V \times V \to V$ on $V$ ([[def-binary-operation]]),
  the **vector addition**;
- an element $0_V \in V$, the **zero vector**;
- a map $\cdot \,:\, F \times V \to V$, the **scalar multiplication**, written
  $\lambda v := \cdot(\lambda, v)$;

subject to the following axioms, in which $u, v \in V$ and $\lambda, \mu \in F$
are arbitrary.

- **(V1)** $(V, +, 0_V)$ is an abelian group ([[def-group]]): $+$ is associative
  and commutative, $0_V$ is a two-sided identity for $+$
  ([[def-identity-element]]), and every $v \in V$ has an additive inverse
  ([[def-invertible-element]]).
- **(V2)** $\lambda(u + v) = \lambda u + \lambda v$.
- **(V3)** $(\lambda + \mu)v = \lambda v + \mu v$.
- **(V4)** $(\lambda\mu)v = \lambda(\mu v)$.
- **(V5)** $1_F v = v$.

The elements of $F$ are called **scalars**. When several vector spaces are in
play we write $0_V$ for the zero of $V$, and we write $-v$ for the additive
inverse of $v$ and $u - v := u + (-v)$.

**The notation $0_V$ and $-v$ is legitimate.** Axiom (V1) asserts only that some
two-sided identity and some additive inverses exist. That there is at most one
two-sided identity for $+$ is [[lem-identity-unique]], and that an invertible
element of a monoid has exactly one inverse is [[lem-inverse-unique]]; both are
proved before [[def-group]] and are inherited here with the group structure. So
$0_V$ and $-v$ denote well-defined elements, and nothing below re-derives them.

**What (V1) buys, and why it is not restated.** Associativity, commutativity, the
identity law $v + 0_V = v = 0_V + v$, the inverse law $v + (-v) = 0_V$,
cancellation ([[lem-group-cancellation]]) and the inverse identities
([[lem-group-inverse-laws]]) are facts about abelian groups. They are quoted from
the group page wherever they are used and are never proved again for vectors.

## Remarks

- **Scalar multiplication is not a binary operation on a set.** It is a map
  $F \times V \to V$ with arguments from two different sets, so
  [[def-binary-operation]], which is about a map $S \times S \to S$, does not
  apply to it and is never cited for it. The definition above cites that item for
  the vector addition only. In particular "closed under scalar multiplication"
  below always means $\lambda v \in W$ for $\lambda \in F$ and $v \in W$, which is
  not an instance of the closure condition defined there.

- **(V5) is an axiom, not a consequence of (V2)–(V4).** Take any abelian group
  $(V,+,0_V)$ and define $\lambda v := 0_V$ for every $\lambda$ and $v$. Then
  (V2), (V3) and (V4) all hold, both sides of each being $0_V$, while (V5) fails
  as soon as $V \ne \{0_V\}$. So (V5) has to be imposed, and it is what ties the
  scalar action to the identity of $F$.

- **Two structures, one set.** A vector space is data: the set $V$, the addition,
  the zero, and the scalar multiplication, over a fixed field $F$. The same set
  may carry vector-space structures over different fields, and the field is part
  of the statement of every result below. [[lem-restriction-of-scalars]] is the
  first place where that matters.

- **The field is the published one.** No field axiom is restated here; $F$ is a
  field in the sense of [[def-field]], whose axiom (A) already says that $(F,+)$
  is an abelian group and whose axiom (M) says the same of
  $(F \setminus \{0_F\}, \cdot)$. In particular every field is a vector space over
  itself, which is [[lem-restriction-of-scalars]].
````

### `lem-bounded-remetrisation`

````markdown
---
id: lem-bounded-remetrisation
kind: lemma
title: "$\\min(d,1)$ and $d/(1+d)$ are metrics uniformly equivalent to $d$, so every metric space carries a bounded metric with the same topology"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-space, def-equivalent-metrics, thm-metric-equivalence-hierarchy,
       def-metric-bounded-diameter, lem-of-add-order, lem-of-inverse-positive,
       def-max-min, lem-finite-set-has-max, lem-of-sign-rules, cor-of-one-positive,
       lem-metric-nonnegativity, def-metric-ball, def-field, def-ordered-field,
       def-complete-ordered-field, lem-sup-unique]
justified_by: []
forward_refs: [cex-uniformly-not-lipschitz-equivalent]
aliases: []
landmark: false
short: "every metric space is boundedly remetrisable"
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
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "Equivalence of metrics (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equivalence_of_metrics"
    - title: "J. Munkres, Topology, 2nd ed., §20"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 20: The Metric Topology (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-20.pdf"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) and define, for
$x, y \in X$,

$$d'(x,y) := \min\{\, d(x,y),\ 1 \,\}, \qquad d''(x,y) := \frac{d(x,y)}{1 + d(x,y)} .$$

Both are well defined: $d(x,y) \ge 0$ ([[lem-metric-nonnegativity]]), so
$1 + d(x,y) > 0$ and is invertible, and the minimum of a two-element set of
reals exists ([[lem-finite-set-has-max]], [[def-max-min]]). Then:

1. $d'$ and $d''$ are metrics on $X$.
2. $d'(x,y) \le 1$ and $d''(x,y) < 1$ for all $x,y$; hence $(X,d')$ and
   $(X,d'')$ are bounded metric spaces
   ([[def-metric-bounded-diameter]]), and if $X \ne \emptyset$ then
   $\operatorname{diam}(X) \le 1$ for both.
3. $d'$ and $d''$ are each uniformly equivalent to $d$, hence topologically
   equivalent to it ([[def-equivalent-metrics]],
   [[thm-metric-equivalence-hierarchy]]).

**Consequently every metric space carries a bounded metric with exactly the same
topology**, so boundedness cannot be read off the topology alone.

## Facts & Assumptions

**Given:** A metric space $(X,d)$, points $x, y, z \in X$, a real $\varepsilon > 0$, and the two functions $\varphi_1(t) := \min\{t, 1\}$ and $\varphi_2(t) := t(1+t)^{-1}$, defined for reals $t \ge 0$, so that $d' = \varphi_1 \circ d$ and $d'' = \varphi_2 \circ d$.

[L1] A metric is nonnegative and satisfies (M1), (M2), (M3) ([[lem-metric-nonnegativity]], [[def-metric-space]]).

[L2] The minimum of a two-element set of reals exists, is one of the two elements, and is a lower bound of both ([[lem-finite-set-has-max]], [[def-max-min]]).

[L3] $0 < 1$ ([[cor-of-one-positive]]); a sum of positives is positive and inequalities may be added, in the strict form of [[lem-of-add-order]] and, with the case of equality settled by totality, in the nonstrict form ([[def-ordered-field]], [[def-complete-ordered-field]]).

[L4] Inverses and order: $u > 0$ gives $u^{-1} > 0$, and $0 < u < v$ gives $0 < v^{-1} < u^{-1}$ ([[lem-of-inverse-positive]]); [[lem-of-inverse-positive]] states only those strict forms, so the nonstrict version used below, that $0 < u \le v$ gives $0 < v^{-1} \le u^{-1}$, is that statement together with the case $u = v$, in which the two inverses are equal, the order being total ([[def-ordered-field]], [[def-complete-ordered-field]]). Multiplying an inequality by a positive preserves it, in the strict form of [[lem-of-sign-rules]] and, with the same equality case, in the nonstrict form; and $u u^{-1} = 1$ ([[def-field]]).

[L5] Bounded subset and diameter: $A$ is bounded when it lies in some ball, and for nonempty bounded $A$ the diameter is the least upper bound of the distances, so any upper bound of those distances bounds the diameter ([[def-metric-bounded-diameter]], [[def-metric-ball]], [[lem-sup-unique]]).

[L6] Uniform and topological equivalence, and the implication between them ([[def-equivalent-metrics]], [[thm-metric-equivalence-hierarchy]]).

## Proof

**Proof technique:** direct.

1.1 Properties of $\varphi_1$ on $t \ge 0$: it is one of $t$ and $1$, so $0 \le \varphi_1(t) \le t$ and $\varphi_1(t) \le 1$; $\varphi_1(t) = 0$ exactly when $t = 0$, since $1 \ne 0$; it is nondecreasing, because for $0 \le s \le t$ the value $\varphi_1(s)$ is $s \le t$ or $1$, and in both cases it is a lower bound of $\{t,1\}$, hence at most $\varphi_1(t)$; and it is subadditive, since for $s, t \ge 0$ either one of $s, t$ is $\ge 1$, and then $\varphi_1(s) + \varphi_1(t) \ge 1 \ge \varphi_1(s+t)$, or both are $< 1$, and then $\varphi_1(s) + \varphi_1(t) = s + t \ge \varphi_1(s+t)$. [L2, L3]

1.2 Properties of $\varphi_2$ on $t \ge 0$: here $1 + t \ge 1 > 0$, so $(1+t)^{-1} > 0$ and $(1+t)^{-1} \le 1$, whence $0 \le \varphi_2(t) \le t$; also $t < 1 + t$ gives $\varphi_2(t) < (1+t)(1+t)^{-1} = 1$; $\varphi_2(t) = 0$ exactly when $t = 0$; $\varphi_2$ is strictly increasing, because $\varphi_2(t) = 1 - (1+t)^{-1}$ and $0 \le s < t$ gives $0 < 1+s < 1+t$, hence $(1+t)^{-1} < (1+s)^{-1}$; and it is subadditive, since for $s,t \ge 0$ one has $0 < 1+s \le 1+s+t$ and $0 < 1+t \le 1+s+t$, so $\varphi_2(s+t) = s(1+s+t)^{-1} + t(1+s+t)^{-1} \le s(1+s)^{-1} + t(1+t)^{-1} = \varphi_2(s) + \varphi_2(t)$. [L3, L4]

1.3 Both $d'$ and $d''$ are symmetric, being $\varphi_i$ applied to the symmetric function $d$, and both vanish exactly on the diagonal, since $\varphi_i(t) = 0$ exactly when $t = 0$ and $d(x,y) = 0$ exactly when $x = y$. [L1]

2.1 $d'$ is a metric: (M1) and (M2) are step 1.3, and (M3) follows because $d(x,z) \le d(x,y) + d(y,z)$ with $\varphi_1$ nondecreasing and subadditive on nonnegatives gives $d'(x,z) = \varphi_1(d(x,z)) \le \varphi_1(d(x,y) + d(y,z)) \le \varphi_1(d(x,y)) + \varphi_1(d(y,z)) = d'(x,y) + d'(y,z)$. [step 1.1, step 1.3, L1]

2.2 $d''$ is a metric: identically, using that $\varphi_2$ is increasing and subadditive on nonnegatives, $d''(x,z) \le \varphi_2(d(x,y) + d(y,z)) \le d''(x,y) + d''(y,z)$. [step 1.2, step 1.3, L1]

2.3 Boundedness: $d'(x,y) \le 1 < 2$ and $d''(x,y) < 1 < 2$ for all $x,y$, so if $X \ne \emptyset$ then fixing any $x_0 \in X$ gives $X \subseteq B_{d'}(x_0,2)$ and $X \subseteq B_{d''}(x_0,2)$, while $X = \emptyset$ is bounded outright; and $1$ is an upper bound of all the distances, so $\operatorname{diam}(X) \le 1$ in both metrics when $X \ne \emptyset$. This is claim 2. [step 1.1, step 1.2, L3, L5]

3.1 $d'$ is uniformly equivalent to $d$: given $\varepsilon > 0$, take $\delta := \varepsilon$, so that $d(x,y) < \delta$ gives $d'(x,y) \le d(x,y) < \varepsilon$; and take $\delta' := \min\{\varepsilon, 1\} > 0$, so that $d'(x,y) < \delta' \le 1$ forces $\varphi_1(d(x,y)) \ne 1$, hence $d'(x,y) = d(x,y)$ by [L2], hence $d(x,y) < \delta' \le \varepsilon$. [step 1.1, step 2.1, L2, L3]

3.2 $d''$ is uniformly equivalent to $d$: given $\varepsilon > 0$, take $\delta := \varepsilon$, so that $d(x,y) < \delta$ gives $d''(x,y) \le d(x,y) < \varepsilon$; and take $\delta' := \varphi_2(\varepsilon) > 0$, so that $d''(x,y) < \delta'$ forces $d(x,y) < \varepsilon$, since $d(x,y) \ge \varepsilon$ would give $\varphi_2(d(x,y)) \ge \varphi_2(\varepsilon) = \delta'$ by monotonicity. [step 1.2, step 2.2, L4]

4.1 Uniform equivalence implies topological equivalence, so $d'$ and $d''$ have exactly the metric topology of $d$; this completes claim 3. [step 3.1, step 3.2, L6]

5.1 Claims 1, 2 and 3 hold by steps 2.1 and 2.2, step 2.3, and steps 3.1, 3.2 and 4.1; hence every metric space carries a bounded metric inducing the same topology. [step 2.1, step 2.2, step 2.3, step 4.1] ∎

## Remarks

- **Two constructions rather than one, on purpose.** $\min\{d,1\}$ is the shorter
  argument and is the one used by the counterexamples on the companion page;
  $d/(1+d)$ is strictly less than $1$ everywhere and is strictly increasing in
  $d$, which makes it the better behaved of the two when the value of the metric
  is to be compared, and it is the form that generalises to countable products.
- **Neither is Lipschitz equivalent to $d$ when $d$ is unbounded.** A Lipschitz
  bound $\alpha d \le d'$ with $\alpha > 0$ would force $d \le \alpha^{-1}$
  everywhere, which fails as soon as $d$ takes arbitrarily large values; the real
  line is the witness ([[cex-uniformly-not-lipschitz-equivalent]]).
- **Boundedness is therefore not a topological property**, which is recorded as
  [[fs-boundedness-is-a-topological-property]] with the real line as witness.
- **The bound $\operatorname{diam}(X) \le 1$ need not be an equality, and the
  two constructions differ on when it is.** For a one-point space both new
  metrics are identically $0$. For $d' = \min\{d,1\}$ the bound is attained as
  soon as $d$ takes some value $\ge 1$, since then $d'$ takes the value $1$
  itself, and the companion page computes one such case. For
  $d'' = d/(1+d)$ the value $1$ is never taken at all, by claim 2, so on a space
  where $d$ is bounded the diameter in $d''$ is strictly below $1$: for instance
  on a two-point space with $d = 1$ the new distance is $1/2$.
````

### `lem-metric-nonnegativity`

````markdown
---
id: lem-metric-nonnegativity
kind: lemma
title: "Nonnegativity of a metric is a consequence of the other axioms, not an axiom"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-space, lem-of-add-order, def-real-order, def-complete-ordered-field,
       def-ordered-field, def-max-min, lem-finite-set-has-max]
justified_by: []
aliases: []
landmark: false
short: "$d \\ge 0$"
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
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis II, 3rd ed., Ch. 1"
      url: "https://terrytao.wordpress.com/books/analysis-ii/"
pipeline_run: null
---

## Statement

Let $X$ be a set and let $p : X \times X \to \mathbb{R}$ satisfy the reflexivity
axiom (M1') $p(x,x) = 0$ and the symmetry axiom (M2) $p(x,y) = p(y,x)$ of
[[def-metric-space]]. Then:

1. If $p$ satisfies the triangle inequality (M3), then $p(x,y) \ge 0$ for all
   $x, y \in X$.
2. If $p$ satisfies the strong triangle inequality (M3'), then
   $p(x,y) \ge 0$ for all $x, y \in X$.

In particular every metric, every pseudometric and every ultrametric
([[def-metric-space]]) takes only nonnegative values. Nonnegativity is therefore
a theorem about the axiom list this library uses, not a fourth axiom, and no
statement on this page needs to assume it separately.

## Facts & Assumptions

**Given:** A set $X$, points $x, y \in X$, and a function $p : X \times X \to \mathbb{R}$ satisfying (M1') $p(a,a) = 0$ for every $a \in X$ and (M2) $p(a,b) = p(b,a)$ for all $a, b \in X$ ([[def-metric-space]]).

[A1] (M3) The triangle inequality $p(a,c) \le p(a,b) + p(b,c)$ holds for all $a, b, c \in X$ ([[def-metric-space]]).

[A2] (M3') The strong triangle inequality $p(a,c) \le \max\{p(a,b), p(b,c)\}$ holds for all $a, b, c \in X$ ([[def-metric-space]]).

[L1] Trichotomy of the order of $\mathbb{R}$: for reals $a, b$ exactly one of $a < b$, $a = b$, $b < a$ holds, so $a \ge 0$ fails exactly when $a < 0$ ([[def-real-order]], [[def-complete-ordered-field]], [[def-ordered-field]]).

[L2] Adding two strict inequalities: if $a < b$ and $c < d$ then $a + c < b + d$ ([[lem-of-add-order]]).

[L3] A two-element subset $\{a,b\}$ of $\mathbb{R}$ has a maximum, and that maximum is $a$ or $b$; if $a = b$ it is $a$ ([[lem-finite-set-has-max]], [[def-max-min]]).

## Proof

**Proof technique:** direct.

1.1 Instantiate [A1] at $a = x$, $b = y$, $c = x$: $p(x,x) \le p(x,y) + p(y,x)$. [A1]

1.2 Instantiate [A2] at $a = x$, $b = y$, $c = x$: $p(x,x) \le \max\{p(x,y), p(y,x)\}$. [A2]

1.3 Suppose, towards ruling it out, that $p(x,y) < 0$. [assume-hyp]

2.1 By (M1') the left side of step 1.1 is $0$ and by (M2) the right side is $p(x,y) + p(x,y)$, so $0 \le p(x,y) + p(x,y)$. [step 1.1, given]

2.2 By (M2) the two entries of the maximum in step 1.2 are the same real number, so that maximum equals $p(x,y)$ by [L3], and (M1') turns step 1.2 into $0 \le p(x,y)$, which is claim 2. [step 1.2, given, L3]

2.3 Adding the supposed inequality of step 1.3 to itself gives $p(x,y) + p(x,y) < 0 + 0 = 0$. [step 1.3, L2]

3.1 Steps 2.1 and 2.3 assert $0 \le p(x,y) + p(x,y)$ and $p(x,y) + p(x,y) < 0$, which trichotomy forbids; so the supposition of step 1.3 is untenable and $p(x,y) \ge 0$, which is claim 1. [step 2.1, step 2.2, step 2.3, L1] ∎

## Remarks

- **What each claim uses.** Claim 1 is the familiar two-line argument
  $0 = p(x,x) \le p(x,y) + p(y,x) = 2p(x,y)$ followed by the observation that a
  negative real added to itself stays negative. Claim 2 does not need that second
  half at all: the strong triangle inequality delivers $0 \le p(x,y)$ in one
  step, because the maximum of a real number with itself is that number.
- **Symmetry is used in both claims and cannot be dropped.** Without (M2) the
  instantiation of step 1.1 only gives $0 \le p(x,y) + p(y,x)$, which leaves the
  possibility that one of the two values is negative and the other larger and
  positive. Dropping (M2) instead of weakening (M1) gives the notion usually
  called a quasimetric, which this library does not treat; for it the argument
  above is unavailable, so nonnegativity is not redundant there and is imposed
  as part of the definition ([[rem-metric-axiom-conventions]]).
````

### `lem-of-abs-value`

````markdown
---
id: lem-of-abs-value
kind: lemma
title: "Basic properties of the absolute value"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-abs-value, def-ordered-field, lem-of-mult-neg, lem-of-sign-rules]
aliases: []
landmark: false
short: "|x| properties"
proof_strategy: cases
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Purdue University analysis notes: Ordered fields and absolute value"
      url: "https://www.math.purdue.edu/~gcavigli/Swanson.pdf"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \in F$, with
$|x|$ the absolute value ([[def-abs-value]]). Then

$$|x| \ge 0; \quad |x| = 0 \iff x = 0; \quad -|x| \le x \le |x|; \quad |-x| = |x|; \quad |xy| = |x|\,|y|;$$

and, for every $c > 0$, one has $|x| < c \iff -c < x < c$.

## Facts & Assumptions

**Given:** An ordered field $F$ and elements $x, y \in F$.

[L1] Absolute value: $|u| = u$ if $u \ge 0$, and $|u| = -u$ if $u < 0$ ([[def-abs-value]]).

[L2] Ordered-field order: trichotomy holds (for each $u$ exactly one of $u > 0$, $u = 0$, $u < 0$), $a < b$ means $b - a$ is positive, and sums and products of positives are positive ([[def-ordered-field]]).

[L3] Signs in products: $(-a)b = -(ab)$ and $(-a)(-b) = ab$ ([[lem-of-mult-neg]]).

[L4] Sign rules: a product of two elements of the same sign is positive, and a product of two elements of opposite sign is negative ([[lem-of-sign-rules]]).

## Proof

**Proof technique:** cases.

1.1 Case $x > 0$: by [L1] $|x| = x > 0$, so $|x| \ge 0$ and $|x| \ne 0$; since $-x < 0$ we get $|-x| = -(-x) = x = |x|$ by [L1], and $-|x| = -x < 0 < x = |x|$, so $-|x| \le x \le |x|$. [assume-case pos, L1, L2, algebra]

1.2 Case $x = 0$: then $|x| = |0| = 0$, so $|x| \ge 0$ holds with $|x| = 0$ and $x = 0$, while $|-x| = |0| = |x|$ and $-|x| = 0 \le 0 \le 0 = |x|$. [assume-case zero, L1]

1.3 Case $x < 0$: by [L1] $|x| = -x$, and [L2] gives $-x > 0$, so $|x| > 0$ and $|x| \ne 0$; here $|-x| = -x = |x|$ by [L1], and $-|x| = -(-x) = x \le x$ while $x < 0 < -x = |x|$, so $-|x| \le x \le |x|$. [assume-case neg, L1, L2, algebra]

1.4 Case $x = 0$ or $y = 0$: then $xy = 0$, so $|xy| = 0$, and one of $|x|, |y|$ is $0$, whence $|x|\,|y| = 0 = |xy|$. [assume-case zerofactor, L1]

1.5 Case $x, y$ have the same sign (both positive or both negative): by [L4] $xy > 0$, so $|xy| = xy$, while $|x|\,|y| = xy$ by [L3] (for $x, y < 0$ this is $(-x)(-y) = xy$), hence $|xy| = |x|\,|y|$. [assume-case same, L1, L3, L4]

1.6 Case $x, y$ have opposite signs (one positive, one negative): by [L4] $xy < 0$, so $|xy| = -(xy)$, while $|x|\,|y| = -(xy)$ by [L3] (namely $x(-y)$ or $(-x)y$), hence $|xy| = |x|\,|y|$. [assume-case opposite, L1, L3, L4]

2.1 By trichotomy [L2] each $x$ lies in exactly one of the cases 1.1-1.3, and in each we verified $|x| \ge 0$, that $|x| = 0 \iff x = 0$, that $|-x| = |x|$, and that $-|x| \le x \le |x|$; hence all four hold for every $x$. [step 1.1, step 1.2, step 1.3, cases-exhaustive]

2.2 By trichotomy [L2] each pair $x, y$ lies in exactly one of the cases 1.4-1.6, and in each $|xy| = |x|\,|y|$; hence $|xy| = |x|\,|y|$ for all $x, y$. [step 1.4, step 1.5, step 1.6, cases-exhaustive]

3.1 Let $c > 0$: if $|x| < c$ then $-c < -|x| \le x \le |x| < c$ by [step 2.1] and [L2], so $-c < x < c$; conversely if $-c < x < c$ then both $x < c$ and $-x < c$, and since $|x|$ equals $x$ or $-x$ by [L1], we get $|x| < c$, so $|x| < c \iff -c < x < c$. [step 2.1, L1, L2] ∎
````

### `lem-of-triangle-inequality`

````markdown
---
id: lem-of-triangle-inequality
kind: lemma
title: "The triangle inequality"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-of-abs-value, lem-of-add-order, def-ordered-field]
aliases: []
landmark: true
short: "Triangle ineq."
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Purdue University analysis notes: Ordered fields and absolute value"
      url: "https://www.math.purdue.edu/~gcavigli/Swanson.pdf"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \in F$. Then

$$|x + y| \le |x| + |y|.$$

## Facts & Assumptions

**Given:** An ordered field $F$ and elements $x, y \in F$.

[L1] For every $u \in F$, $-|u| \le u \le |u|$, and $|u|$ equals $u$ or $-u$ ([[lem-of-abs-value]]).

[L2] Order compatible with addition: if $a \le b$ and $c \le d$, then $a + c \le b + d$. [[lem-of-add-order]] states the STRICT forms and only those ($a < b \Rightarrow a + c < b + c$, and $a < b$ with $c < d$ giving $a + c < b + d$); the nonstrict form used here is those two together with the cases $a = b$ and $c = d$, settled by trichotomy, the order being total ([[def-ordered-field]]). Explicitly: if $a < b$ and $c < d$ the second strict form applies; if $a < b$ and $c = d$ the first gives $a + c < b + c = b + d$; if $a = b$ and $c < d$ the first gives $a + c < a + d = b + d$; and if $a = b$ and $c = d$ the two sides are equal.

[L3] Field and order arithmetic: $-(a + b) = -a + (-b)$, and $a \le b \iff -b \le -a$ ([[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $-|x| \le x \le |x|$ and $-|y| \le y \le |y|$. [L1]

2.1 Adding the two chains of [step 1.1] with [L2] and using $-(|x| + |y|) = -|x| + (-|y|)$ from [L3] gives $-(|x| + |y|) \le x + y \le |x| + |y|$. [step 1.1, L2, L3]

3.1 By [L1] the value $|x + y|$ equals $x + y$ or $-(x + y)$; both $x + y \le |x| + |y|$ and $-(x + y) \le |x| + |y|$ hold by [step 2.1] and [L3] (the latter from $-(|x| + |y|) \le x + y$), so $|x + y| \le |x| + |y|$. [step 2.1, L1, L3] ∎
````

### `lem-vector-space-elementary-consequences`

````markdown
---
id: lem-vector-space-elementary-consequences
kind: lemma
title: "In any vector space $0_F v = 0_V$, $\\lambda 0_V = 0_V$, $(-\\lambda)v = -(\\lambda v)$, $(-1_F)v = -v$, and $\\lambda v = 0_V$ forces $\\lambda = 0_F$ or $v = 0_V$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-vector-space, def-field, def-group, lem-group-cancellation, lem-of-inverse-unique]
justified_by: []
aliases: []
landmark: false
short: "$0_F v = 0_V$, $(-1_F)v = -v$"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Vector space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Vector_space"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Ch. 1"
      url: "https://linear.axler.net/"
pipeline_run: null
---

## Statement

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]). For all
$\lambda \in F$ and $v \in V$:

1. $0_F v = 0_V$;
2. $\lambda 0_V = 0_V$;
3. $(-\lambda)v = -(\lambda v)$, and also $\lambda(-v) = -(\lambda v)$;
4. $(-1_F)v = -v$;
5. if $\lambda v = 0_V$ then $\lambda = 0_F$ or $v = 0_V$.

Here $0_F$ and $1_F$ are the additive and multiplicative identities of $F$, $0_V$
is the zero vector, $-\lambda$ is the additive inverse of $\lambda$ in $F$, and
$-v$ is the additive inverse of $v$ in the abelian group $(V,+,0_V)$.

## Facts & Assumptions

**Given:** A field $F$, a vector space $V$ over $F$ with axioms (V1)–(V5) ([[def-vector-space]]), a scalar $\lambda \in F$ and a vector $v \in V$.

[L1] The four scalar axioms: $\lambda(u+w) = \lambda u + \lambda w$ (V2); $(\lambda+\mu)w = \lambda w + \mu w$ (V3); $(\lambda\mu)w = \lambda(\mu w)$ (V4); $1_F w = w$ (V5) ([[def-vector-space]]).

[L2] $(V,+,0_V)$ is an abelian group (V1): addition is associative and commutative, $0_V$ is a two-sided identity, and each $w \in V$ has an additive inverse $-w$ with $w + (-w) = 0_V = (-w) + w$ ([[def-vector-space]], [[def-group]]).

[L3] Cancellation in a group, read additively: if $x + y = x + z$ then $y = z$, and if $y + x = z + x$ then $y = z$ ([[lem-group-cancellation]]).

[L4] Field arithmetic ([[def-field]]): $0_F + 0_F = 0_F$; $\mu + (-\mu) = 0_F$ for every $\mu \in F$; $1_F$ is the multiplicative identity; multiplication is associative; and every $\mu \ne 0_F$ has a multiplicative inverse $\mu^{-1}$ with $\mu^{-1}\mu = 1_F$.

[L5] The identities $0_F$, $1_F$ and the inverses $-\mu$, $\mu^{-1}$ of a field are unique, so those notations denote well-defined elements ([[lem-of-inverse-unique]]).

## Proof

**Proof technique:** direct.

1.1 By (V3) applied to $0_F$ and $0_F$, and $0_F + 0_F = 0_F$ in $F$: $0_F v + 0_F v = (0_F + 0_F)v = 0_F v$. [L1, L4]

1.2 Since $0_V$ is a two-sided identity for $+$: $0_F v = 0_V + 0_F v$. [L2]

1.3 By (V2) applied to $0_V$ and $0_V$, and $0_V + 0_V = 0_V$ in $V$: $\lambda 0_V + \lambda 0_V = \lambda(0_V + 0_V) = \lambda 0_V$. [L1, L2]

1.4 Since $0_V$ is a two-sided identity for $+$: $\lambda 0_V = 0_V + \lambda 0_V$. [L2]

1.5 The vector $\lambda v$ has an additive inverse $-(\lambda v)$ with $\lambda v + (-(\lambda v)) = 0_V$. [L2]

2.1 Combining steps 1.1 and 1.2 gives $0_F v + 0_F v = 0_V + 0_F v$; cancelling $0_F v$ on the right yields $0_F v = 0_V$, which is claim 1. [step 1.1, step 1.2, L3]

2.2 Combining steps 1.3 and 1.4 gives $\lambda 0_V + \lambda 0_V = 0_V + \lambda 0_V$; cancelling $\lambda 0_V$ on the right yields $\lambda 0_V = 0_V$, which is claim 2. [step 1.3, step 1.4, L3]

3.1 By (V3) applied to $\lambda$ and $-\lambda$, then $\lambda + (-\lambda) = 0_F$, then claim 1: $\lambda v + (-\lambda)v = (\lambda + (-\lambda))v = 0_F v = 0_V$. [step 2.1, L1, L4]

3.2 By (V2) applied to $v$ and $-v$, then $v + (-v) = 0_V$, then claim 2: $\lambda v + \lambda(-v) = \lambda(v + (-v)) = \lambda 0_V = 0_V$. [step 2.2, L1, L2]

3.3 Suppose $\lambda v = 0_V$ and $\lambda \ne 0_F$. Then $\lambda^{-1} \in F$ exists with $\lambda^{-1}\lambda = 1_F$, so $v = 1_F v = (\lambda^{-1}\lambda)v = \lambda^{-1}(\lambda v) = \lambda^{-1} 0_V = 0_V$, using (V5), (V4) and claim 2 in turn. [step 2.2, L1, L4, L5]

4.1 Steps 3.1 and 1.5 exhibit both $(-\lambda)v$ and $-(\lambda v)$ as vectors $x$ with $\lambda v + x = 0_V$; cancelling $\lambda v$ on the left gives $(-\lambda)v = -(\lambda v)$. [step 3.1, step 1.5, L3]

5.1 Likewise steps 3.2 and 1.5 give $\lambda v + \lambda(-v) = 0_V = \lambda v + (-(\lambda v))$, and cancelling $\lambda v$ on the left gives $\lambda(-v) = -(\lambda v)$; with step 4.1 this is claim 3. [step 3.2, step 1.5, L3]

5.2 Taking $\lambda = 1_F$ in step 4.1 and using (V5): $(-1_F)v = -(1_F v) = -v$, which is claim 4. [step 4.1, L1]

6.1 Claim 1 is step 2.1, claim 2 is step 2.2, claim 3 is steps 4.1 and 5.1, and claim 4 is step 5.2; for claim 5, if $\lambda v = 0_V$ then either $\lambda = 0_F$, or $\lambda \ne 0_F$ and step 3.3 gives $v = 0_V$. [step 2.1, step 2.2, step 3.3, step 4.1, step 5.1, step 5.2] ∎

## Remarks

- **None of this is an axiom.** The scalar axioms (V2)–(V5) say nothing directly about $0_F$, $0_V$ or negatives; each claim above is extracted by writing one element in two ways and cancelling in the abelian group $(V,+,0_V)$. That is the same device that gives $0 \cdot a = 0$ in a field ([[lem-of-zero-mult]]), and the proofs are deliberately parallel.

- **Claim 5 is what makes $\{0_V\}$ the only "degenerate" scalar multiple.** It is used below to compute $\operatorname{span}\{v\}$ ([[lem-span-of-a-single-vector]]) and, in that form, is the vector-space analogue of a field having no zero divisors ([[lem-of-no-zero-divisors]]). Its converse directions, claims 1 and 2, say that both degenerate products really are $0_V$.

- **Claim 4 is the bridge to the additive group.** It says the additive inverse of a vector is a scalar multiple of it, which is why closure under scalar multiplication already forces closure under negatives; that is what makes a linear subspace a subgroup of $(V,+)$ without a separate axiom.
````

### `rem-metric-axiom-conventions`

````markdown
---
id: rem-metric-axiom-conventions
kind: remark
title: "Which metric axiom list this library uses, the live naming fork between semimetric and pseudometric, and why extended metrics are not treated here"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-metric-space, lem-metric-nonnegativity, rem-sup-conventions,
       def-complete-ordered-field]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "Pseudometric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Pseudometric_space"
    - title: "Extended real number line (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Extended_real_number_line"
    - title: "Quasimetric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Quasimetric_space"
    - title: "Ultrametric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ultrametric_space"
pipeline_run: null
---

**The axiom list.** [[def-metric-space]] asks a metric $d : X \times X \to \mathbb{R}$
for exactly three things: (M1) $d(x,y) = 0$ if and only if $x = y$; (M2)
$d(x,y) = d(y,x)$; (M3) $d(x,z) \le d(x,y) + d(y,z)$. Many texts add a fourth,
$d(x,y) \ge 0$, or build it into the codomain by writing
$d : X \times X \to [0,\infty)$. That fourth condition is redundant: it follows
from the other three, and [[lem-metric-nonnegativity]] proves it. The list is
kept minimal here so that every verification of "is this a metric" has three
things to check and not four, and so that no proof can quietly assume
nonnegativity before it has been established.

**Splitting (M1).** Some texts state (M1) as two conditions, $d(x,x) = 0$ for all
$x$ together with the implication $d(x,y) = 0 \Rightarrow x = y$. That is the same
notion, and the split form is convenient because deleting the second half is
exactly the weakening that produces a pseudometric.

**The naming fork, which is live and is why this library says pseudometric.**
Two different weakenings of the axiom list circulate under overlapping names.

- Dropping the implication $d(x,y) = 0 \Rightarrow x = y$, keeping symmetry and
  the triangle inequality, gives what most current sources, and this library,
  call a **pseudometric** ([[def-metric-space]]). This is the notion a seminorm
  induces.
- Dropping the triangle inequality, keeping (M1) and (M2), gives what most
  current sources call a **semimetric**.

The fork is that a substantial part of the literature, especially in functional
analysis and in older texts, uses *semimetric* for the first of these, that is
as a synonym for pseudometric. There is no way to use the word *semimetric*
here without inheriting the ambiguity, so this library does not use it at all:
the first weakening is always called a pseudometric, and the second, which
nothing here needs, is never named. Dropping symmetry instead gives a
*quasimetric*, also not treated here; note that [[lem-metric-nonnegativity]]
uses symmetry, so a quasimetric is not automatically nonnegative and the fourth
axiom is not redundant for it.

**Ultrametrics.** The strong triangle inequality
$d(x,z) \le \max\{d(x,y), d(y,z)\}$ implies (M3) in the presence of (M1) and
(M2), by [[lem-metric-nonnegativity]] and the fact that the maximum of two
nonnegative reals is at most their sum. So an ultrametric is a metric, and the
definition may be read either as "a metric that also satisfies (M3')" or as "a
function satisfying (M1), (M2) and (M3')". The two readings pick out the same
objects.

**Why extended metrics are not treated here.** An *extended metric* is allowed
to take the value $+\infty$, so that its codomain is $[0,\infty]$ rather than
$[0,\infty)$; the axioms are read with the usual arithmetic of $+\infty$. The
construction is useful, for instance when one wants to glue metric spaces
without connecting them, and it is standard in metric geometry. It is not
treated here, for one reason: its values would have to live in the extended real
line $\overline{\mathbb{R}} = \mathbb{R} \cup \{-\infty, +\infty\}$, whereas the
axioms of [[def-metric-space]] are stated over the complete ordered field
$\mathbb{R}$ ([[def-complete-ordered-field]]) and are never read anywhere else.
Why they are kept there is set out in [[rem-sup-conventions]]:
$\overline{\mathbb{R}}$ is not a field, the expressions
$(+\infty) + (-\infty)$ and $0 \cdot (+\infty)$ have no definition compatible
with the field axioms, and writing an infinite value silently moves the
discussion into a different structure, after which every algebraic step needs
its own justification. Every value of every metric in this library is therefore
an element of $\mathbb{R}$.

Two consequences of that decision are visible on this page and are not
oversights. First, an unbounded set has no diameter at all here, rather than a
diameter $+\infty$ ([[def-metric-bounded-diameter]]). Second, the supremum
metric is defined on the *bounded* real-valued functions only
([[lem-sup-metric-is-a-metric]]), where texts working in
$\overline{\mathbb{R}}$ define it on all of them.

Adding extended metrics honestly would mean restating [[def-metric-space]] over
a totally ordered set with a greatest element, carrying its own partial
arithmetic, and re-proving over it everything this page proves over
$\mathbb{R}$. No such restatement is made anywhere in this library, and until
one is, every metric here takes real values.
````

### `rem-rn-conventions-and-scope`

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

