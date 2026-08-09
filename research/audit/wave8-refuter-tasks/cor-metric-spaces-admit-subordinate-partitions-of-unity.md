## Selection reasons

- high risk (5): 4 declared dependencies; 3 cited facts; existence, choice, uniqueness, or well-definedness

## Target item — `cor-metric-spaces-admit-subordinate-partitions-of-unity`

Normalized current SHA-256: `a925805067c612bf83f57d972c8d89619190c8d8b115a76da10454c88d3071be`

The complete current item follows, including frontmatter:

````markdown
---
id: cor-metric-spaces-admit-subordinate-partitions-of-unity
kind: corollary
title: "Under choice and dependent choice, metric open covers admit locally finite subordinate partitions of unity"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-stone-metric-spaces-are-paracompact, thm-subordinate-partitions-of-unity-exist, def-metric-space, def-hausdorff-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
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
    - title: "D. Ornstein, A New Proof of the Paracompactness of Metric Spaces, Proc. Amer. Math. Soc. 21 (1969), 341–342"
      url: "https://www.ams.org/proc/1969-021-02/"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice and the Axiom of Dependent Choice. Every open cover
of a metric space admits a locally finite partition of unity subordinate to it.

## Facts & Assumptions

**Given:** Choice, dependent choice, a metric space $X$, and an open cover of its metric topology.

[L1] The space $X$ is paracompact under choice ([[thm-stone-metric-spaces-are-paracompact]]).

[L2] Every metrizable space is Hausdorff ([[def-hausdorff-space]]).

[L3] A paracompact Hausdorff space has a subordinate partition of unity under choice and dependent choice ([[thm-subordinate-partitions-of-unity-exist]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], $X$ is paracompact and Hausdorff. [L1, L2]

2.1 Applying [L3] to the given cover yields the required locally finite subordinate partition of unity. [L3, step 1.1] ∎
````

## Wave 8 provenance row for the target

```json
{
  "id": "cor-metric-spaces-admit-subordinate-partitions-of-unity",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://www.ams.org/proc/1969-021-02/",
    "https://people.math.wisc.edu/~jwrobbin/partitions_of_unity.pdf"
  ],
  "rationale": "Stone's theorem and the Hausdorff paracompact partition characterization semantically give the claim. The item exposes Choice/DC and records the immediate two-theorem composition rather than following a separate sourced proof.",
  "alpha_concurred": false,
  "at": "2026-08-09",
  "ledger": "wave8-topology.provenance.jsonl"
}
```

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "thm-stone-metric-spaces-are-paracompact",
      "source_section": "Statement",
      "quote": "Assume the Axiom of Choice. Every metric space is paracompact.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-hausdorff-space",
      "source_section": "Definition",
      "quote": "A topological space $(X, \\mathcal{T})$ ([[def-topological-space]]) is\n**Hausdorff** when any two distinct points are separated by disjoint open sets:\nfor all $x, y \\in X$ with $x \\ne y$ there are $U, V \\in \\mathcal{T}$ with\n\n$$x \\in U, \\qquad y \\in V, \\qquad U \\cap V = \\varnothing .$$\n\nSince an open set containing a point is an open neighbourhood of it\n([[def-neighbourhood-top]]), the condition reads: distinct points have disjoint\nopen neighbourhoods. Nothing is asserted about points that are equal, and the\ncondition is vacuous for a space with at most one point, so every such space is\nHausdorff.\n\n**Every metrizable space is Hausdorff.** This is not proved here, because it is\nalready discharged: [[def-metrizable-space]] records it among the two things\nevery metrizable space has, deriving it from\n[[thm-metric-hausdorff-separation]], which separates $p \\ne q$ in a metric space\nby the disjoint open balls $B(p,r)$ and $B(q,r)$ with $r = d(p,q)/2 > 0$. In\nparticular $\\mathbb{R}$ with its usual topology, every $\\mathbb{R}^n$, and every\nsubspace of a metrizable space are Hausdorff.\n\n**Not every space is Hausdorff.** The indiscrete topology\n$\\mathcal{T}_{\\mathrm{ind}} = \\{\\varnothing, X\\}$ on a set $X = \\{a,b\\}$ with\n$a \\ne b$ ([[def-standard-topologies]]) is not: the only open set containing $a$\nis $X$, the only one containing $b$ is $X$, and $X \\cap X = X \\ne \\varnothing$.\nThis is the same two-point space that [[def-metrizable-space]] uses to exhibit a\ntopology induced by no metric, and the reason is the same one: failure of the\nHausdorff condition is an obstruction to metrizability.\n\n**Being Hausdorff is a topological property** ([[def-homeomorphism-and-open-maps]]).\nIf $h : X \\to Z$ is a homeomorphism and $X$ is Hausdorff, then for $z \\ne z'$ in\n$Z$ the points $h^{-1}(z)$ and $h^{-1}(z')$ are distinct, so they have disjoint\nopen $U, V$; the images $h[U]$ and $h[V]$ are open, disjoint, and contain $z$ and\n$z'$ respectively, a homeomorphism carrying the open sets of one space\nbijectively onto those of the other. So no space homeomorphic to a Hausdorff\nspace fails the condition.\n\n**Scope of this item.** Only the definition, the metrizable case and the\ntwo-point failure are recorded here, because that is all this page uses. The\nHausdorff condition is one of a graded family of separation axioms; that family,\nits ordering, and the questions of which of its members are hereditary or\npreserved by products, are not available at this point in the reading order and\nnothing here anticipates them. What this page does use is a single negative\nresult: a quotient of a Hausdorff space need not be Hausdorff, which is recorded\nbelow as a false statement and witnessed on the companion page.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-subordinate-partitions-of-unity-exist",
      "source_section": "Statement",
      "quote": "Assume the Axiom of Choice and the Axiom of Dependent Choice. Every open cover\nof a paracompact Hausdorff space admits a locally finite partition of unity\nsubordinate to it.",
      "uses": [
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "By [L1] and [L2], $X$ is paracompact and Hausdorff. [L1, L2]",
      "step": "1.1",
      "inputs": [
        "L1",
        "L2"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "Applying [L3] to the given cover yields the required locally finite subordinate partition of unity. [L3, step 1.1]",
      "step": "2.1",
      "inputs": [
        "L3",
        "1.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "Statement and steps 1.1--2.1 include the empty metric space and empty cover."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Step 2.1 inherits the partition theorem zero-component boundary without requiring a nonzero component on empty X."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Steps 1.1--2.1 specialize to a one-member cover."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Steps 1.1--2.1 include singleton and empty metric spaces."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Step 2.1 inherits the [0,1] endpoint checks of the cited partition theorem."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Steps 1.1--2.1 invoke exactly the theorems licensed by Choice and DC."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The statement is one directional."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The statement is one directional."
    }
  ],
  "finite_smoke": []
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "cor-metric-spaces-admit-subordinate-partitions-of-unity",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
    "target": "thm-stone-metric-spaces-are-paracompact",
    "declared_target": "thm-stone-metric-spaces-are-paracompact",
    "target_statement_provenance": "ai-altered",
    "targetPage": "partitions-of-unity-and-paracompactness",
    "targetBatch": "wave8-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-metric-spaces-admit-subordinate-partitions-of-unity",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
    "target": "thm-subordinate-partitions-of-unity-exist",
    "declared_target": "thm-subordinate-partitions-of-unity-exist",
    "target_statement_provenance": "ai-altered",
    "targetPage": "partitions-of-unity-and-paracompactness",
    "targetBatch": "wave8-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-metric-spaces-admit-subordinate-partitions-of-unity",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
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
    "source": "cor-metric-spaces-admit-subordinate-partitions-of-unity",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
    "target": "def-hausdorff-space",
    "declared_target": "def-hausdorff-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "subspaces-products-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Relevant pending generated-risk rows

```json
[]
```

## Full text of every cited or declared item (4)

### `def-hausdorff-space`

````markdown
---
id: def-hausdorff-space
kind: definition
title: "Hausdorff space: distinct points have disjoint open neighbourhoods; every metrizable space is Hausdorff and the indiscrete topology on two points is not"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-neighbourhood-top, def-standard-topologies,
       def-metrizable-space, thm-metric-hausdorff-separation,
       def-homeomorphism-and-open-maps]
justified_by: []
aliases: [def-hausdorff, def-t2-space]
landmark: true
short: "Hausdorff space"
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
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "J. Munkres, Topology, 2nd ed., §17"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

A topological space $(X, \mathcal{T})$ ([[def-topological-space]]) is
**Hausdorff** when any two distinct points are separated by disjoint open sets:
for all $x, y \in X$ with $x \ne y$ there are $U, V \in \mathcal{T}$ with

$$x \in U, \qquad y \in V, \qquad U \cap V = \varnothing .$$

Since an open set containing a point is an open neighbourhood of it
([[def-neighbourhood-top]]), the condition reads: distinct points have disjoint
open neighbourhoods. Nothing is asserted about points that are equal, and the
condition is vacuous for a space with at most one point, so every such space is
Hausdorff.

**Every metrizable space is Hausdorff.** This is not proved here, because it is
already discharged: [[def-metrizable-space]] records it among the two things
every metrizable space has, deriving it from
[[thm-metric-hausdorff-separation]], which separates $p \ne q$ in a metric space
by the disjoint open balls $B(p,r)$ and $B(q,r)$ with $r = d(p,q)/2 > 0$. In
particular $\mathbb{R}$ with its usual topology, every $\mathbb{R}^n$, and every
subspace of a metrizable space are Hausdorff.

**Not every space is Hausdorff.** The indiscrete topology
$\mathcal{T}_{\mathrm{ind}} = \{\varnothing, X\}$ on a set $X = \{a,b\}$ with
$a \ne b$ ([[def-standard-topologies]]) is not: the only open set containing $a$
is $X$, the only one containing $b$ is $X$, and $X \cap X = X \ne \varnothing$.
This is the same two-point space that [[def-metrizable-space]] uses to exhibit a
topology induced by no metric, and the reason is the same one: failure of the
Hausdorff condition is an obstruction to metrizability.

**Being Hausdorff is a topological property** ([[def-homeomorphism-and-open-maps]]).
If $h : X \to Z$ is a homeomorphism and $X$ is Hausdorff, then for $z \ne z'$ in
$Z$ the points $h^{-1}(z)$ and $h^{-1}(z')$ are distinct, so they have disjoint
open $U, V$; the images $h[U]$ and $h[V]$ are open, disjoint, and contain $z$ and
$z'$ respectively, a homeomorphism carrying the open sets of one space
bijectively onto those of the other. So no space homeomorphic to a Hausdorff
space fails the condition.

**Scope of this item.** Only the definition, the metrizable case and the
two-point failure are recorded here, because that is all this page uses. The
Hausdorff condition is one of a graded family of separation axioms; that family,
its ordering, and the questions of which of its members are hereditary or
preserved by products, are not available at this point in the reading order and
nothing here anticipates them. What this page does use is a single negative
result: a quotient of a Hausdorff space need not be Hausdorff, which is recorded
below as a false statement and witnessed on the companion page.

## Remarks

- **Hausdorff spaces have closed singletons.** Fix $x \in X$ and take the union
  of all open subsets of $X$ that avoid $x$. Every $y \ne x$ belongs to one of
  them, by Hausdorff separation of $x$ and $y$, while $x$ belongs to none. The
  union is therefore exactly $X \setminus \{x\}$, so $\{x\}$ is closed.
  Thus the Hausdorff property implies the singleton-closed ($T_1$) property.
  The converse fails: closed singletons need not give disjoint neighbourhoods
  of distinct points.

- **What the Hausdorff condition buys, in the one place this page needs it.**
  Separation of distinct points by disjoint open sets is exactly what a quotient
  map can destroy: identifying points of a Hausdorff space can leave two classes
  every pair of whose open neighbourhoods meet, and the companion page exhibits
  such a quotient of a metrizable space. Nothing weaker than an explicit witness
  settles that, since the condition is a statement about all pairs of open sets.

- **The name.** Hausdorff's own 1914 axiom system for a topological space
  included this condition, so "topological space" once meant what is now called a
  Hausdorff space; this library follows the modern convention in which
  [[def-topological-space]] assumes no separation at all and every separation
  hypothesis is stated where it is used.
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

### `thm-stone-metric-spaces-are-paracompact`

````markdown
---
id: thm-stone-metric-spaces-are-paracompact
kind: theorem
title: "Stone's theorem, under choice: every metric space is paracompact"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-metric-open-covers-have-point-finite-refinements, lem-metric-point-finite-refinements-can-be-made-locally-finite, def-paracompact-space, def-metric-space, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "D. Ornstein, A New Proof of the Paracompactness of Metric Spaces, Proc. Amer. Math. Soc. 21 (1969), 341–342"
      url: "https://www.ams.org/proc/1969-021-02/"
    - title: "C. Good, I. J. Tree and W. S. Watson, On Stone's theorem and the axiom of choice"
      url: "https://doi.org/10.1090/S0002-9939-98-04163-X"
    - title: "Topology 262 notes (California State University, Northridge)"
      url: "https://www.csun.edu/~ac53971/research/topology_262.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. Every metric space is paracompact.

## Facts & Assumptions

**Given:** The Axiom of Choice, a metric space $X$, and an arbitrary open cover $\mathcal U$ of its metric topology.

[L1] Under choice, every metric open cover has a point-finite open refinement, and Ornstein's second construction turns that point-finite cover into a locally finite open refinement ([[lem-metric-open-covers-have-point-finite-refinements]], [[lem-metric-point-finite-refinements-can-be-made-locally-finite]]).

[F1] Paracompactness means that every open cover has such a refinement ([[def-paracompact-space]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] to the arbitrary cover $\mathcal U$. [L1]

2.1 The resulting locally finite open refinement is exactly the condition in [F1], so $X$ is paracompact. [F1, step 1.1] ∎

## Remarks

The theorem is proved here with the Axiom of Choice as a sufficient hypothesis. No assertion is made that this is its exact set-theoretic strength.
````

### `thm-subordinate-partitions-of-unity-exist`

````markdown
---
id: thm-subordinate-partitions-of-unity-exist
kind: theorem
title: "Under choice and dependent choice, every open cover of a paracompact Hausdorff space admits a locally finite subordinate partition of unity"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-paracompact-hausdorff-cover-shrinking, thm-paracompact-hausdorff-implies-normal, thm-urysohn-lemma, lem-normalizing-a-locally-finite-positive-family, def-axiom-of-choice, def-dependent-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Dartmouth Point-Set Topology, Lecture 25"
      url: "https://math.dartmouth.edu/~rmaguire/teaching/dartmouth_math_054_2022_summer/lectures/2022_summer_point_set_topology_lecture_25.pdf"
    - title: "J. Robbin, Partitions of Unity"
      url: "https://people.math.wisc.edu/~jwrobbin/partitions_of_unity.pdf"
    - title: "Topology 262 notes (California State University, Northridge)"
      url: "https://www.csun.edu/~ac53971/research/topology_262.pdf"
    - title: "R. Gardner, Notes on Munkres Section 41: Paracompactness (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-41.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice and the Axiom of Dependent Choice. Every open cover
of a paracompact Hausdorff space admits a locally finite partition of unity
subordinate to it.

## Facts & Assumptions

**Given:** Choice, dependent choice, a paracompact Hausdorff space $X$, and an open cover $\mathcal U$.

[L1] There are locally finite covers $\{V_s\}$, $\{W_s\}$ and $U_s\in\mathcal U$ with $\overline{V_s}\subseteq W_s\subseteq\overline{W_s}\subseteq U_s$ ([[lem-paracompact-hausdorff-cover-shrinking]]).

[L2] Every paracompact Hausdorff space is normal ([[thm-paracompact-hausdorff-implies-normal]]).

[L3] Under dependent choice, Urysohn's lemma separates disjoint closed sets in a normal space by a continuous map into $[0,1]$ ([[thm-urysohn-lemma]], clause 1).

[L4] If $\{f_s:X\to[0,\infty)\}_{s\in S}$ is a continuous family with locally finite cozero family and everywhere-positive sum $f=\sum_sf_s$, then the functions $\varphi_s=f_s/f$ form a partition of unity, with the same cozero sets and supports as the corresponding $f_s$ ([[lem-normalizing-a-locally-finite-positive-family]]).

## Proof

**Proof technique:** constructive.

1.1 Apply [L1] to obtain $V_s,W_s,U_s$ as stated. [L1, construct]

2.1 By [L2], $X$ is normal. For each $s$, the closed sets $\overline{V_s}$ and $X\setminus W_s$ are disjoint, so [L3] gives a continuous $f_s:X\to[0,1]$ equal to $1$ on $\overline{V_s}$ and $0$ on $X\setminus W_s$. [step 1.1, L2, L3, choose]

3.1 The cozero set of $f_s$ lies in $W_s$, while its support lies in $\overline{W_s}\subseteq U_s$; since $\{W_s\}$ is locally finite, so is the cozero family. [step 1.1, step 2.1]

3.2 Because $\{V_s\}$ covers $X$ and $f_s=1$ on $V_s$, the pointwise sum $\sum_sf_s$ is positive everywhere. [step 1.1, step 2.1]

4.1 By [L4], the normalized functions $\varphi_s=f_s/(\sum_tf_t)$ form a locally finite partition of unity; their supports equal those of $f_s$, so step 3.1 makes the partition subordinate to $\mathcal U$. [step 3.1, step 3.2, L4, discharge-construct] ∎
````

