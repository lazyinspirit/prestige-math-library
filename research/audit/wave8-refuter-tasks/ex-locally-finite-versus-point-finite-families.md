## Selection reasons

- Wave 8 ai-generated Statement/Construction seed
- pending Wave 8 genrisk seed (cone 0)

## Target item — `ex-locally-finite-versus-point-finite-families`

Normalized current SHA-256: `03f398c99e7e09669d3cce7ed60e625deced3ca053272b1f9e8866cfddee15aa`

The complete current item follows, including frontmatter:

````markdown
---
id: ex-locally-finite-versus-point-finite-families
kind: example
title: "Point-finite need not mean locally finite: intervals accumulating at the origin"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-supplied
deps: [def-cover-refinement-and-local-finiteness, def-interval]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Locally finite collection (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Locally_finite_collection"
pipeline_run: null
---

## Example

In $\mathbb R$, let $I_n=(1/(n+1),1/n)$ for positive integers $n$. The intervals
are pairwise disjoint, so no point lies in two intervals and the family is
point-finite. Every neighbourhood of $0$, however, meets $I_n$ for all
sufficiently large $n$. Therefore the family is not locally finite at $0$.

This shows that point-finiteness records membership at a point, whereas local
finiteness controls intersections with a whole neighbourhood.
````

## Wave 8 provenance row for the target

```json
{
  "id": "ex-locally-finite-versus-point-finite-families",
  "statement": "ai-generated",
  "proof": "not-supplied",
  "evidence": "trivial",
  "urls": [],
  "rationale": "The exact interval family is a bespoke elementary witness. Directly, the intervals (1/(n+1),1/n) are pairwise disjoint, so each point lies in at most one member, while every neighbourhood of 0 meets all sufficiently late members; this verifies point-finiteness and failure of local finiteness.",
  "alpha_concurred": false,
  "at": "2026-08-09",
  "ledger": "wave8-topology.provenance.jsonl"
}
```

## Proof contract for the target

No Wave 8 proof contract is required for this target.

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "ex-locally-finite-versus-point-finite-families",
    "sourcePage": "partitions-of-unity-and-paracompactness-examples",
    "batch": "wave8-topology",
    "target": "def-cover-refinement-and-local-finiteness",
    "declared_target": "def-cover-refinement-and-local-finiteness",
    "target_statement_provenance": "ai-altered",
    "targetPage": "partitions-of-unity-and-paracompactness",
    "targetBatch": "wave8-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-locally-finite-versus-point-finite-families",
    "sourcePage": "partitions-of-unity-and-paracompactness-examples",
    "batch": "wave8-topology",
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

## Relevant pending generated-risk rows

```json
[
  {
    "id": "ex-locally-finite-versus-point-finite-families",
    "file": "items/ex-locally-finite-versus-point-finite-families.md",
    "source": "provenance",
    "cone_size": 0,
    "logical_consumers": [],
    "direct_citation_consumers": [],
    "disposition": {
      "status": "pending",
      "by": "",
      "notes": ""
    }
  }
]
```

## Full text of every cited or declared item (2)

### `def-cover-refinement-and-local-finiteness`

````markdown
---
id: def-cover-refinement-and-local-finiteness
kind: definition
title: "Refinements, locally finite families, point-finite families, and star refinements"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-compact-space, def-neighbourhood-top, def-topological-space]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "J. Robbin, Partitions of Unity"
      url: "https://people.math.wisc.edu/~jwrobbin/partitions_of_unity.pdf"
    - title: "Dartmouth Point-Set Topology, Lecture 25"
      url: "https://math.dartmouth.edu/~rmaguire/teaching/dartmouth_math_054_2022_summer/lectures/2022_summer_point_set_topology_lecture_25.pdf"
    - title: "R. Gardner, Notes on Munkres Section 41: Paracompactness (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-41.pdf"
    - title: "Paracompact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Paracompact_space"
pipeline_run: null
---

## Definition

Let $X$ be a topological space. A family $\mathcal V$ of subsets of $X$ is a
**refinement** of a family $\mathcal U$ when every $V\in\mathcal V$ is contained
in some $U\in\mathcal U$. It is an **open refinement** when, additionally, every
$V\in\mathcal V$ is open. A refinement of a cover need not itself cover $X$;
when it does, it is called a **refining cover**.

A family $\mathcal A$ of subsets of $X$ is **locally finite** when every point
$x\in X$ has a neighbourhood meeting only finitely many members of $\mathcal A$.
It is **point-finite** when every $x\in X$ belongs to only finitely many members
of $\mathcal A$. Local finiteness implies point-finiteness: a neighbourhood of
$x$ meeting only finitely many members contains $x$, so every member containing
$x$ is among those finitely many. The converse is not part of the definition and
can fail.

For a family $\mathcal U$ and a subset $A\subseteq X$, its **star about $A$** is
$$\operatorname{St}(A,\mathcal U):=\bigcup\{U\in\mathcal U:U\cap A\ne\varnothing\}.$$
A cover $\mathcal V$ is a **star refinement** of a cover $\mathcal U$ when for
every $V\in\mathcal V$ there is $U\in\mathcal U$ with
$\operatorname{St}(V,\mathcal V)\subseteq U$.

## Remarks

The word “neighbourhood” has the library convention from
[[def-neighbourhood-top]]: it need not itself be open. Replacing it by an open
neighbourhood gives the same local-finiteness condition, because every
neighbourhood contains an open one about the same point.
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

