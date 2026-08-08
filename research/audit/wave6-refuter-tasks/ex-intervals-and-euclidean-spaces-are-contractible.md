## Target item — `ex-intervals-and-euclidean-spaces-are-contractible`

Normalized current SHA-256: `81a30a86f3c4d40a241ba880d0037eea7f2642b0816e12f16964be03ba54f089`

The complete current item follows, including frontmatter:

````markdown
---
id: ex-intervals-and-euclidean-spaces-are-contractible
kind: example
title: "Every nonempty interval and every $\\mathbb{R}^n$ with $n\\ge1$ contracts to any chosen point"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-convex-subsets-of-rn-are-contractible, def-interval]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "MIT 18.901, Introduction to Topology lecture notes"
      url: "https://math.mit.edu/~pieloch/teaching/18.901-spring-2025/18.901-spring-2025-Lecture-Notes.pdf"
    - title: "Algebraic Topology lecture notes (UC Riverside)"
      url: "https://math.ucr.edu/~jbergner/SPWM09.pdf"
pipeline_run: null
---

## Example

Every nonempty interval $J\subseteq\mathbb R$ is contractible. If $c\in J$, the contraction is

$$H(x,t)=(1-t)x+tc.$$

Likewise, for every $n\ge1$, every chosen $c\in\mathbb R^n$ gives a contraction of $\mathbb R^n$ by the same formula.

## Facts & Assumptions

**Given:** A nonempty interval $J\subseteq\mathbb R$, a point $c\in J$, and a natural $n\ge1$.

[A1] Intervals are order-convex: if $x,c\in J$ and $x\le z\le c$, or $c\le z\le x$, then $z\in J$ ([[def-interval]]).

[L1] Every nonempty convex subset of $\mathbb R^m$ with $m\ge1$ is contractible to any chosen point by straight lines ([[cor-convex-subsets-of-rn-are-contractible]]).

## Verification

**Proof technique:** direct.

1.1 For $x,c\in J$ and $t\in I$, $(1-t)x+tc$ lies between $x$ and $c$, so it lies in $J$ by [A1]. Thus $J$, viewed as a subset of $\mathbb R^1$, is convex. [A1, algebra]

1.2 The whole space $\mathbb R^n$ is convex, since it is closed under vector addition and scalar multiplication. [algebra]

2.1 Apply [L1] to step 1.1 and the point $c$ to obtain the stated contraction of $J$, and apply it to step 1.2 and any chosen point of $\mathbb R^n$ to obtain the Euclidean contraction. [step 1.1, step 1.2, L1] ∎
````

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "A1",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "**Every one of the nine forms is order-convex.** Each is defined by a conjunction of at most two conditions, each of the shape $a < x$, $a \\le x$, $x < b$ or $x \\le b$, and each such condition is inherited by an intermediate point: if $a < x$ and $x \\le z$ then $a < z$, and if $z \\le y$ and $y < b$ then $z < b$, by transitivity of the order ([[def-ordered-field]]). Applying this to whichever one or two conditions define the form in question gives $z \\in I$ whenever $x, y \\in I$ and $x \\le z \\le y$.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "cor-convex-subsets-of-rn-are-contractible",
      "source_section": "Statement",
      "quote": "Let $n\\ge1$. Every nonempty convex subset $C\\subseteq\\mathbb R^n$, with its Euclidean subspace topology, is contractible. More precisely, for each $c\\in C$ the formula $$H(x,t)=(1-t)x+tc$$ is a homotopy from $\\operatorname{id}_C$ to the constant map at $c$.",
      "uses": [
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "For $x,c\\in J$ and $t\\in I$, $(1-t)x+tc$ lies between $x$ and $c$, so it lies in $J$ by [A1]. Thus $J$, viewed as a subset of $\\mathbb R^1$, is convex. [A1, algebra]",
      "step": "1.1",
      "inputs": [
        "A1"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "The whole space $\\mathbb R^n$ is convex, since it is closed under vector addition and scalar multiplication. [algebra]",
      "step": "1.2",
      "inputs": [
        "statement hypotheses and the definitions or objects introduced in this step"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Apply [L1] to step 1.1 and the point $c$ to obtain the stated contraction of $J$, and apply it to step 1.2 and any chosen point of $\\mathbb R^n$ to obtain the Euclidean contraction. [step 1.1, step 1.2, L1] ∎",
      "step": "2.1",
      "inputs": [
        "L1",
        "1.1",
        "1.2"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "the statement fixes or assumes nonempty spaces or named points, so an empty carrier cannot satisfy its hypotheses"
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "the statement assumes n>=1, so the zero-dimensional case is outside its hypotheses"
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "statement and step 1.1: the displayed Euclidean formulas remain valid for n=1"
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "steps 1.1 and 2.1 include a singleton interval"
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "step 2.1 invokes contractions with identity and constant endpoints"
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "the proof uses only formula-defined maps, fixed quantified data, and cited implications; it selects from no asserted nonempty family"
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "the statement is not a biconditional"
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "the statement is not a biconditional"
    }
  ],
  "finite_smoke": []
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "ex-intervals-and-euclidean-spaces-are-contractible",
    "sourcePage": "homotopy-and-homotopy-equivalence-examples",
    "batch": "wave6-topology",
    "target": "cor-convex-subsets-of-rn-are-contractible",
    "declared_target": "cor-convex-subsets-of-rn-are-contractible",
    "target_statement_provenance": null,
    "targetPage": "homotopy-and-homotopy-equivalence",
    "targetBatch": "wave6-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-intervals-and-euclidean-spaces-are-contractible",
    "sourcePage": "homotopy-and-homotopy-equivalence-examples",
    "batch": "wave6-topology",
    "target": "def-interval",
    "declared_target": "def-interval",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-sequences-and-cauchy-completeness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Full text of every cited or declared item (2)

### `cor-convex-subsets-of-rn-are-contractible`

````markdown
---
id: cor-convex-subsets-of-rn-are-contractible
kind: corollary
title: "Every nonempty convex subset of $\\mathbb{R}^n$ is contractible"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-two-maps-into-a-convex-set-are-homotopic, cor-contractible-iff-identity-nullhomotopic]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "MIT 18.901, Introduction to Topology lecture notes"
      url: "https://math.mit.edu/~pieloch/teaching/18.901-spring-2025/18.901-spring-2025-Lecture-Notes.pdf"
    - title: "Algebraic Topology lecture notes (UC Riverside)"
      url: "https://math.ucr.edu/~jbergner/SPWM09.pdf"
pipeline_run: null
---

## Statement

Let $n\ge1$. Every nonempty convex subset $C\subseteq\mathbb R^n$, with its Euclidean subspace topology, is contractible. More precisely, for each $c\in C$ the formula

$$H(x,t)=(1-t)x+tc$$

is a homotopy from $\operatorname{id}_C$ to the constant map at $c$.

## Facts & Assumptions

**Given:** A nonempty convex subset $C\subseteq\mathbb R^n$ and a point $c\in C$.

[L1] Any two continuous maps into a nonempty convex subset of $\mathbb R^n$ are homotopic by the straight-line formula ([[thm-two-maps-into-a-convex-set-are-homotopic]]).

[L2] A nonempty space is contractible exactly when its identity map is nullhomotopic ([[cor-contractible-iff-identity-nullhomotopic]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] to $\operatorname{id}_C:C\to C$ and the constant map $c_c:C\to C$. The resulting homotopy is $H(x,t)=(1-t)x+tc$. [L1]

2.1 Thus $\operatorname{id}_C$ is nullhomotopic, so $C$ is contractible by [L2]. [step 1.1, L2] ∎
````

### `def-interval`

````markdown
---
id: def-interval
kind: definition
title: "Intervals of $\\mathbb{R}$: the nine order-convex forms, nondegeneracy, and length"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complete-ordered-field, def-ordered-field, def-real-order, def-bounded-set]
justified_by: []
aliases: []
landmark: true
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
    - title: "Interval (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Interval_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (segments and cells)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §0.3 and §1.1"
      url: "https://www.jirka.org/ra/"
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]], [[def-ordered-field]]) with its order
([[def-real-order]]).

A subset $I \subseteq \mathbb{R}$ is **order-convex** when

$$x, y \in I \text{ and } x \le z \le y \;\Longrightarrow\; z \in I .$$

The **intervals** of $\mathbb{R}$ are the sets of the following nine forms, where
$a, b \in \mathbb{R}$:

| | bounded forms | | one-sided and full forms |
|---|---|---|---|
| $(a,b)$ | $\{x : a < x < b\}$ | $(a,\infty)$ | $\{x : a < x\}$ |
| $[a,b]$ | $\{x : a \le x \le b\}$ | $[a,\infty)$ | $\{x : a \le x\}$ |
| $[a,b)$ | $\{x : a \le x < b\}$ | $(-\infty,b)$ | $\{x : x < b\}$ |
| $(a,b]$ | $\{x : a < x \le b\}$ | $(-\infty,b]$ | $\{x : x \le b\}$ |
| | | $(-\infty,\infty)$ | $\mathbb{R}$ |

An interval is **open** when both of its written endpoints are excluded, that is
for the forms $(a,b)$, $(a,\infty)$, $(-\infty,b)$ and $(-\infty,\infty)$; it is
**closed** when both written endpoints are included, that is for $[a,b]$,
$[a,\infty)$, $(-\infty,b]$ and $(-\infty,\infty)$. The forms $[a,b)$ and
$(a,b]$ are **half-open**.

**The symbols $\pm\infty$ are notation and not elements of $\mathbb{R}$.** They
mark which side carries no endpoint condition at all; the five forms in the right
column are defined by the displayed conditions on $x$ alone, and no arithmetic is
ever performed with $\infty$. This is the same refusal to extend $\mathbb{R}$
silently that [[rem-sup-conventions]] records for suprema.

**Every one of the nine forms is order-convex.** Each is defined by a conjunction
of at most two conditions, each of the shape $a < x$, $a \le x$, $x < b$ or
$x \le b$, and each such condition is inherited by an intermediate point: if
$a < x$ and $x \le z$ then $a < z$, and if $z \le y$ and $y < b$ then $z < b$,
by transitivity of the order ([[def-ordered-field]]). Applying this to whichever
one or two conditions define the form in question gives $z \in I$ whenever
$x, y \in I$ and $x \le z \le y$.

**Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly
when it is of one of the four forms in the left column: for those, $a$ is a lower
bound and $b$ an upper bound. The other five forms are unbounded, on the side or
sides written with $\infty$; the verification is in the remarks below.

**Nondegeneracy.** An interval is **degenerate** when it has at most one element,
and **nondegenerate** when it has at least two. For the four bounded forms with
endpoints $a$ and $b$:

- $[a,b]$ is nonempty exactly when $a \le b$, and it is nondegenerate exactly
  when $a < b$. It is the singleton $\{a\}$ when $a = b$.
- $(a,b)$, $[a,b)$ and $(a,b]$ are nonempty exactly when $a < b$, and then each
  is nondegenerate.

The only assertion here that is not immediate from the defining conditions is
that $a < b$ makes $(a,b)$ nonempty with at least two points. It holds because
$a < (a+b)/2 < b$, which follows from $a < b$ by adding $a$, respectively $b$, to
both sides and halving ([[def-ordered-field]]); repeating the halving inside
$(a, (a+b)/2)$ produces a second point.

**Closed bounded intervals.** These are the sets $[a,b]$ with $a \le b$, which is
exactly the condition making them nonempty. They are the intervals the nested
interval property is stated for, and the phrase *closed bounded interval* always
carries the hypothesis $a \le b$ in this library.

**Length.** The **length** of a bounded interval presented by its endpoints
$a \le b$ is

$$\ell = b - a \;\ge\; 0 .$$

Length is attached to the presentation by endpoints and is not recovered from the
set: $(a,b)$, $[a,b)$ and $(a,b]$ are all empty when $a = b$, and so is
$(c,c)$ for any other $c$, while each of these presentations has length $0$, so
nothing inconsistent arises; but the endpoints are named explicitly at every
point where a length is used in this library, and never inferred from the set.
Unbounded intervals are assigned no length.

## Remarks

- **Why the five unbounded forms really are unbounded.** Take $[a,\infty)$ and
  suppose $u \in \mathbb{R}$ were an upper bound of it. The element
  $x = a + |u - a| + 1$ satisfies $x \ge a$, so $x \in [a,\infty)$, and
  $x \ge a + (u - a) + 1 = u + 1 > u$, since $|t| \ge t$ ([[lem-of-abs-value]])
  and $1 > 0$ ([[cor-of-one-positive]]). That contradicts $x \le u$. The same
  computation with $a$ replaced by any element of $(a,\infty)$ handles the open
  form, and reflecting through the origin handles $(-\infty,b)$ and
  $(-\infty,b]$; $\mathbb{R}$ itself is unbounded on both sides for the same
  reason. Note that this uses no Archimedean property: it is the failure of a
  *single* bound, not the cofinality of the naturals.

- **The converse classification is not asserted here.** It is true that every
  order-convex subset of $\mathbb{R}$ is empty or one of the nine forms, and the
  proof runs through suprema and infima, but nothing in this library needs it and
  it is not proved anywhere here. What is used is only the direction proved
  above: each of the nine forms is order-convex.

- **Degenerate intervals are kept, not excluded.** $[a,a] = \{a\}$ and
  $(a,a) = \emptyset$ are intervals under this definition. Excluding them would
  force a nonemptiness hypothesis into every statement that produces an interval,
  and the nested interval property is a good illustration: its conclusion is that
  the intersection is nonempty, and in the equality case the intersection is the
  degenerate interval $[a,a]$, which is exactly the single point.
````

