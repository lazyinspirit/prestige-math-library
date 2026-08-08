## Target item — `lem-a-sequence-in-a-hausdorff-space-has-at-most-one-limit`

Normalized current SHA-256: `a13b761a643e14b7cb9844ec022d6fe3fad3f761d76cff665d964fcd234df0be`

The complete current item follows, including frontmatter:

````markdown
---
id: lem-a-sequence-in-a-hausdorff-space-has-at-most-one-limit
kind: lemma
title: "In a Hausdorff space a sequence converges to at most one point"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-hausdorff-space, def-sequence-convergence-top, def-neighbourhood-top,
       fs-unique-sequential-limits-imply-hausdorff, lem-nat-trichotomy]
justified_by: []
aliases: [lem-hausdorff-limits-unique]
landmark: false
short: "sequential limits are unique in a Hausdorff space"
proof_strategy: contradiction
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "Topological Spaces lecture notes (University of Cambridge)"
      url: "https://www.dpmms.cam.ac.uk/~or257/teaching/notes/TopSp.pdf"
pipeline_run: null
---

## Statement

Let $X$ be a Hausdorff space ([[def-hausdorff-space]]), let $(x_k)$ be a
sequence in $X$ and let $p, q \in X$ with $x_k \to p$ and $x_k \to q$
([[def-sequence-convergence-top]]). Then $p = q$.

So in a Hausdorff space a sequence has at most one limit, and the notation
$\lim_k x_k$ that [[def-sequence-convergence-top]] withholds in a general space
is legitimate there.

**The converse is false.** Uniqueness of sequential limits does not imply the
Hausdorff condition: the cocountable topology on $\mathbb{R}$ has unique
sequential limits and is not Hausdorff
([[fs-unique-sequential-limits-imply-hausdorff]]). So this lemma is strictly
weaker than the hypothesis it is proved from, and it is not a characterisation.

## Facts & Assumptions

**Given:** A Hausdorff space $X$, a sequence $(x_k)$ in $X$, and points $p, q \in X$ with $x_k \to p$ and $x_k \to q$.

[A1] $X$ is Hausdorff: distinct points have disjoint open neighbourhoods ([[def-hausdorff-space]]).

[A2] $x_k \to r$ means that for every neighbourhood $N$ of $r$ there is $K \in \mathbb{N}$ with $x_k \in N$ for all $k \ge K$; and an open set containing $r$ is a neighbourhood of $r$ ([[def-sequence-convergence-top]], [[def-neighbourhood-top]]).

[L1] For all $m, n \in \mathbb{N}$ exactly one of $m < n$, $m = n$, $m > n$ holds, so any two natural numbers are comparable ([[lem-nat-trichotomy]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $p \ne q$. [assume-contra]

2.1 By [A1] there are open sets $U \ni p$ and $V \ni q$ with $U \cap V = \varnothing$. [step 1.1, A1]

3.1 $U$ is a neighbourhood of $p$ and $V$ a neighbourhood of $q$, so by [A2] there are $K_1, K_2 \in \mathbb{N}$ with $x_k \in U$ for all $k \ge K_1$ and $x_k \in V$ for all $k \ge K_2$. [step 2.1, A2]

4.1 By [L1] the naturals $K_1$ and $K_2$ are comparable; let $K$ be whichever of them is not smaller than the other, so that $K \ge K_1$ and $K \ge K_2$. [step 3.1, L1, choose]

5.1 By step 3.1 and step 4.1 the term $x_K$ lies in $U$ and in $V$, so $x_K \in U \cap V$. [step 3.1, step 4.1]

6.1 Step 5.1 contradicts $U \cap V = \varnothing$ from step 2.1, so the supposition of step 1.1 fails and $p = q$. [step 2.1, step 5.1, discharge-contradiction] ∎

## Remarks

- **Why this is not the diagonal criterion in disguise.** The criterion of this page characterises the Hausdorff condition exactly; the sequential statement above does not, and the gap is recorded by [[fs-unique-sequential-limits-imply-hausdorff]]. A sequence sees only countably many points, and a space may separate no pair of points by open sets while still admitting no non-trivial convergent sequence at all.

- **No choice principle is used.** The two indices $K_1$ and $K_2$ come from two named neighbourhoods, and step 4.1 compares two given naturals; nothing is selected from a family.

- **The statement is about limits, not about cluster points.** A sequence in a Hausdorff space may well have many cluster points ([[def-sequence-convergence-top]]), and nothing above bears on that.
````

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "A1",
      "source": "def-hausdorff-space",
      "source_section": "Definition",
      "quote": "A topological space $(X, \\mathcal{T})$ ([[def-topological-space]]) is **Hausdorff** when any two distinct points are separated by disjoint open sets: for all $x, y \\in X$ with $x \\ne y$ there are $U, V \\in \\mathcal{T}$ with",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "A2",
      "source": "def-sequence-convergence-top",
      "source_section": "Definition",
      "quote": "**Convergence agrees with the metric notion on a metric topology.** For a metric space the balls around $p$ are a neighbourhood base at $p$ ([[lem-metric-ball-neighbourhood-base]]), so \"eventually in every neighbourhood of $p$\" and \"eventually in every ball around $p$\" are the same condition, and the latter is [[def-metric-convergence]]. The identification is carried out where metrizable spaces are defined, later on this page.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "A2",
      "source": "def-neighbourhood-top",
      "source_section": "Definition",
      "quote": "A set $N \\subseteq X$ is a **neighbourhood of $x$** if there is an open $U \\in \\mathcal{T}$ with $x \\in U \\subseteq N$. The family of all neighbourhoods of $x$ is written $\\mathcal{N}(x)$ and called the **neighbourhood filter** at $x$. A neighbourhood that is itself open is an **open neighbourhood**.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-nat-trichotomy",
      "source_section": "Statement",
      "quote": "For all $m, n \\in \\mathbb{N}$ exactly one of $m < n$, $m = n$, $m > n$ holds. In particular the order ([[def-nat-order]]) is total.",
      "uses": [
        "4.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Suppose $p \\ne q$. [assume-contra]",
      "step": "1.1",
      "inputs": [
        "statement hypotheses and the definitions or objects introduced in this step"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "By [A1] there are open sets $U \\ni p$ and $V \\ni q$ with $U \\cap V = \\varnothing$. [step 1.1, A1]",
      "step": "2.1",
      "inputs": [
        "A1",
        "1.1"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "$U$ is a neighbourhood of $p$ and $V$ a neighbourhood of $q$, so by [A2] there are $K_1, K_2 \\in \\mathbb{N}$ with $x_k \\in U$ for all $k \\ge K_1$ and $x_k \\in V$ for all $k \\ge K_2$. [step 2.1, A2]",
      "step": "3.1",
      "inputs": [
        "A2",
        "2.1"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "By [L1] the naturals $K_1$ and $K_2$ are comparable; let $K$ be whichever of them is not smaller than the other, so that $K \\ge K_1$ and $K \\ge K_2$. [step 3.1, L1, choose]",
      "step": "4.1",
      "inputs": [
        "L1",
        "3.1"
      ]
    },
    {
      "id": "step-5.1",
      "claim": "By step 3.1 and step 4.1 the term $x_K$ lies in $U$ and in $V$, so $x_K \\in U \\cap V$. [step 3.1, step 4.1]",
      "step": "5.1",
      "inputs": [
        "3.1",
        "4.1"
      ]
    },
    {
      "id": "step-6.1",
      "claim": "Step 5.1 contradicts $U \\cap V = \\varnothing$ from step 2.1, so the supposition of step 1.1 fails and $p = q$. [step 2.1, step 5.1, discharge-contradiction] ∎",
      "step": "6.1",
      "inputs": [
        "5.1",
        "2.1",
        "1.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "statement and step 1.1: the empty-domain or empty-space instance is vacuous or formula-defined and selects no point"
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "no independently varying cardinal, dimension, norm, or scalar parameter has a separate zero case"
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "statement and step 1.1: the singleton-space or singleton-subset instance is included and all separation conditions become vacuous or immediate"
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "steps 1.1 and 6.1 isolate equality of the two proposed limits as the degenerate conclusion"
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "no interval endpoint or one-sided boundary enters the statement or proof"
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "step 4.1 takes the larger of two already supplied natural numbers, so no family choice is hidden"
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
    "source": "lem-a-sequence-in-a-hausdorff-space-has-at-most-one-limit",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "def-hausdorff-space",
    "declared_target": "def-hausdorff-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "subspaces-products-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-a-sequence-in-a-hausdorff-space-has-at-most-one-limit",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "def-sequence-convergence-top",
    "declared_target": "def-sequence-convergence-top",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-a-sequence-in-a-hausdorff-space-has-at-most-one-limit",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "def-neighbourhood-top",
    "declared_target": "def-neighbourhood-top",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-a-sequence-in-a-hausdorff-space-has-at-most-one-limit",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "fs-unique-sequential-limits-imply-hausdorff",
    "declared_target": "fs-unique-sequential-limits-imply-hausdorff",
    "target_statement_provenance": "ai-altered",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-a-sequence-in-a-hausdorff-space-has-at-most-one-limit",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "lem-nat-trichotomy",
    "declared_target": "lem-nat-trichotomy",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Full text of every cited or declared item (5)

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

### `def-neighbourhood-top`

````markdown
---
id: def-neighbourhood-top
kind: definition
title: "Neighbourhood of a point and neighbourhood base, with this library's convention that a neighbourhood need not be open"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-topology-basis-subbasis]
justified_by: []
aliases: [def-neighbourhood-base-top]
landmark: false
short: "neighbourhood, neighbourhood base"
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-03
    scope: published-audit-targeted
    context_sha256: bdc41ee3553c62ad7ffa23eb8a9315579cc671c9836708c819eafe237b79eec7
    item_sha256: 4458190d9dd13e026a4be25d56858bc99377b2d4ccf6729c349381630a633343
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Neighbourhood (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Neighbourhood_(mathematics)"
    - title: "Neighbourhood system (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Neighbourhood_system"
    - title: "J. Munkres, Topology, 2nd ed., §12"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$x \in X$.

A set $N \subseteq X$ is a **neighbourhood of $x$** if there is an open
$U \in \mathcal{T}$ with $x \in U \subseteq N$. The family of all neighbourhoods
of $x$ is written $\mathcal{N}(x)$ and called the **neighbourhood filter** at
$x$. A neighbourhood that is itself open is an **open neighbourhood**.

**Convention, and it is a live fork: in this library a neighbourhood need not be
open.** The competing convention, used by Munkres among others, defines a
neighbourhood of $x$ to be an *open* set containing $x$. Both are in current use;
this library follows the one above and writes "open neighbourhood" in full
whenever openness is wanted, so that no statement here depends on which
convention a reader brings.

A family $\mathcal{B}_x \subseteq \mathcal{N}(x)$ is a **neighbourhood base at
$x$** if every neighbourhood of $x$ contains a member of $\mathcal{B}_x$: for
every $N \in \mathcal{N}(x)$ there is $B \in \mathcal{B}_x$ with $B \subseteq N$.

**Four immediate consequences, established here because they are used
constantly.**

1. *$X$ is a neighbourhood of each of its points*, since $x \in X \subseteq X$
   and $X$ is open by (T1); so $\mathcal{N}(x) \ne \varnothing$ and every point
   has at least one neighbourhood base, namely $\mathcal{N}(x)$ itself.
2. *A superset of a neighbourhood of $x$ is a neighbourhood of $x$*: if
   $x \in U \subseteq N \subseteq M$ with $U$ open then $x \in U \subseteq M$.
3. *The intersection of two neighbourhoods of $x$ is a neighbourhood of $x$*: if
   $x \in U \subseteq N$ and $x \in V \subseteq M$ with $U, V$ open, then
   $U \cap V$ is open by (T3) and $x \in U \cap V \subseteq N \cap M$. By
   iteration the same holds for any intersection of finitely many
   neighbourhoods of $x$.
4. *A set is open exactly when it is a neighbourhood of each of its points.* If
   $U$ is open and $x \in U$ then $x \in U \subseteq U$. Conversely, if $N$ is a
   neighbourhood of each of its points, choose for each $x \in N$ an open $U_x$
   with $x \in U_x \subseteq N$; then $N = \bigcup_{x \in N} U_x$ is open by (T2).
   No choice principle is involved: $U_x$ may be taken to be the union of *all*
   open subsets of $N$ containing $x$, which is determined by $x$ and $N$, and is
   open by (T2).

**Basic sets give neighbourhood bases.** If $\mathcal{B}$ is a basis for
$\mathcal{T}$ ([[def-topology-basis-subbasis]]) then
$\mathcal{B}_x := \{\, B \in \mathcal{B} : x \in B \,\}$ is a neighbourhood base
at $x$ consisting of open sets. Each such $B$ is open and contains $x$, hence is
a neighbourhood of $x$; and if $N \in \mathcal{N}(x)$, fix open $U$ with
$x \in U \subseteq N$ and then $B \in \mathcal{B}$ with $x \in B \subseteq U$,
which gives $B \in \mathcal{B}_x$ with $B \subseteq N$. A member of
$\mathcal{B}_x$ is called a **basic neighbourhood** of $x$.

## Remarks

- **The convention costs nothing and buys one thing.** Every statement of the
  form "for every neighbourhood $N$ of $x$ ... " whose predicate is preserved
  when $N$ is enlarged is equivalent to the statement with $N$ restricted to
  open neighbourhoods: every neighbourhood contains an open one, and the
  predicate then passes to the larger set. Eventual-membership and the usual
  local-existence tests have this form; an arbitrary predicate need not. What
  the wider notion buys is that $\mathcal{N}(x)$ is a filter on $X$ in the sense
  of [[def-filter]]: consequence 1 is (F1), consequence 3 is (F3), consequence 2
  is (F4), and (F2) holds because $x \in U \subseteq \varnothing$ is impossible,
  so $\varnothing$ is a neighbourhood of no point. Under the narrower convention
  the family of open sets containing $x$ fails (F4) as soon as some non-open set
  contains an open set around $x$, so the name "neighbourhood filter" would not
  be available.

- **A neighbourhood base is not required to be closed under intersection**, and
  the bases used below usually are not; what is required is only that its members
  be cofinal downwards among neighbourhoods.
````

### `def-sequence-convergence-top`

````markdown
---
id: def-sequence-convergence-top
kind: definition
title: "Convergence and cluster points of a sequence in a topological space, sequential continuity, and the sequential closure"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-neighbourhood-top, def-sequence, def-natural-numbers, def-continuous-map-top,
       lem-limit-unique, lem-metric-limits-unique, lem-metric-ball-neighbourhood-base, def-metric-convergence]
justified_by: []
aliases: [def-sequential-continuity-top, def-sequential-closure-top]
landmark: true
short: "convergence of sequences in a space"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "Sequential space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequential_space"
    - title: "J. Munkres, Topology, 2nd ed., §21"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]), with
neighbourhoods as in [[def-neighbourhood-top]].

A **sequence in $X$** is a function $x : \mathbb{N} \to X$, written $(x_k)$ with
$x_k := x(k)$. As everywhere in this library $\mathbb{N}$ contains $0$
([[def-natural-numbers]]) and a sequence is indexed from $0$
([[def-sequence]]); an index range copied from a text that starts at $1$ must be
shifted before it is used here. The **range** of $(x_k)$ is
$\{\, x_k : k \in \mathbb{N} \,\}$. Following [[def-sequence]], a property of
indices holds **eventually** if it holds for all $k \ge K$ for some
$K \in \mathbb{N}$, and **frequently** if for every $K$ it holds for some
$k \ge K$; that vocabulary is used here for sequences in an arbitrary set.

Let $(x_k)$ be a sequence in $X$ and let $p \in X$.

- $(x_k)$ **converges to $p$**, written $x_k \to p$, if for every neighbourhood
  $N$ of $p$ one has $x_k \in N$ eventually. The point $p$ is then called **a
  limit of $(x_k)$**.
- $p$ is a **cluster point** of $(x_k)$ if for every neighbourhood $N$ of $p$ one
  has $x_k \in N$ frequently.
- For $A \subseteq X$, the **sequential closure** of $A$ is
  $$\operatorname{seqcl}(A) := \{\, p \in X : x_k \to p \text{ for some sequence } (x_k) \text{ with } x_k \in A \text{ for all } k \,\} .$$
- A function $f : X \to Y$ into a topological space $Y$ is **sequentially
  continuous at $p$** if $x_k \to p$ in $X$ implies $f(x_k) \to f(p)$ in $Y$, and
  **sequentially continuous** if it is sequentially continuous at every point of
  $X$ ([[def-continuous-map-top]] for the ordinary notion).

**The notation $\lim_k x_k$ is not available at this generality, and the reason
is not fastidiousness.** In a general topological space a sequence may converge
to more than one point, so there is no function taking a convergent sequence to
"its" limit, and a symbol $\lim_k x_k$ would not denote. In the indiscrete
topology on a set with at least two points the only neighbourhood of any point is
$X$, so **every** sequence converges to **every** point; in the cofinite topology
on an infinite set every injective sequence converges to every point. Both
witnesses are on the companion page. Accordingly this library writes "$p$ is *a*
limit of $(x_k)$" and "$(x_k)$ converges to $p$", never "*the* limit" and never
$\lim_k x_k$, for a sequence in a space that has not been given a hypothesis
restoring uniqueness.

**Where the notation becomes legitimate again.** Uniqueness of limits is what
licenses the symbol, exactly as it does for sequences of reals
([[lem-limit-unique]]) and in a metric space ([[lem-metric-limits-unique]]): in a
metric space a sequence has at most one limit and $\lim_k x_k$ is unambiguous.
Every metrizable space therefore admits the notation, and so does every space in
which distinct points have disjoint neighbourhoods; where this page uses a
metrizable space, and only there, the usual notation is used without further
comment. The general reading of "$x_k \to p$" above never presupposes it.

**Convergence agrees with the metric notion on a metric topology.** For a metric
space the balls around $p$ are a neighbourhood base at $p$
([[lem-metric-ball-neighbourhood-base]]), so "eventually in every neighbourhood
of $p$" and "eventually in every ball around $p$" are the same condition, and the
latter is [[def-metric-convergence]]. The identification is carried out where
metrizable spaces are defined, later on this page.

## Remarks

- **Every limit is a cluster point, and not conversely.** "Eventually" implies
  "frequently", so a point to which $(x_k)$ converges is a cluster point of it.
  A sequence in a two-point discrete space that takes each of the two values
  frequently has both points as cluster points and converges to neither, since
  each singleton is a neighbourhood of its point and is missed frequently.

- **Constant sequences.** If $x_k = a$ for every $k$, then $x_k \to a$, since
  every neighbourhood of $a$ contains $a$. More generally an *eventually*
  constant sequence with eventual value $a$ converges to $a$. This is the only
  convergence available in a discrete space, where $\{a\}$ is a neighbourhood of
  $a$ and forces $x_k = a$ eventually.

- **Sequential continuity is a strictly weaker condition than continuity in
  general**, and the two agree under a countability hypothesis proved later on
  this page. That is the whole reason sequences are treated here as a separate
  notion rather than as the definition of continuity, and it is why nets and
  filters exist as a subject.
````

### `fs-unique-sequential-limits-imply-hausdorff`

````markdown
---
id: fs-unique-sequential-limits-imply-hausdorff
kind: false-statement
title: "FALSE: a space in which every sequence has at most one limit is Hausdorff"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-standard-topologies, def-sequence-convergence-top, def-hausdorff-space,
       def-t0-and-t1-spaces, thm-t1-iff-singletons-are-closed, def-countable,
       lem-subset-of-countable, lem-countable-iff-surjection-from-n,
       thm-r-uncountable, thm-countable-union-of-countable, def-topological-space,
       def-metrizable-space]
justified_by: []
aliases: []
landmark: false
short: "unique sequential limits do not give Hausdorff"
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
    - title: "Cocountable topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cocountable_topology"
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
    - title: "S. Willard, General Topology, §13"
      url: "https://en.wikipedia.org/wiki/General_topology"
    - title: "Sequential space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequential_space"
pipeline_run: null
---

## Statement

**False claim:** if every sequence in a topological space has at most one limit
([[def-sequence-convergence-top]]), then the space is Hausdorff
([[def-hausdorff-space]]).

The refutation is the **cocountable topology** $\mathcal{T}_{\mathrm{coc}}$ on
$\mathbb{R}$ ([[def-standard-topologies]]), whose open sets are $\varnothing$
together with the complements of the at most countable subsets of $\mathbb{R}$.
In it every convergent sequence is eventually constant, so limits are unique; and
no two nonempty open sets are disjoint, so the space is not Hausdorff. It is
nevertheless $T_1$.

**This is why [[def-sequence-convergence-top]] refuses the notation
$\lim_k x_k$ in a general space and restores it only under a hypothesis.**
Uniqueness of sequential limits is strictly weaker than the Hausdorff condition,
so it is uniqueness, and not the Hausdorff condition, that is the exact
licensing condition for the symbol — and the two are not interchangeable.

## Facts & Assumptions

**Given:** $\mathbb{R}$ with the cocountable topology $\mathcal{T}_{\mathrm{coc}}$, a sequence $(x_k)_{k \in \mathbb{N}}$ in $\mathbb{R}$, and points $p, q \in \mathbb{R}$.

[A1] $\mathcal{T}_{\mathrm{coc}}$ consists of $\varnothing$ together with the sets whose complement in $\mathbb{R}$ is at most countable; its closed sets are $\mathbb{R}$ and the at most countable sets ([[def-standard-topologies]]).

[A2] $x_k \to p$ means that for every neighbourhood $N$ of $p$ there is $K \in \mathbb{N}$ with $x_k \in N$ for all $k \ge K$; an open set containing $p$ is such a neighbourhood ([[def-sequence-convergence-top]]).

[A3] A space is Hausdorff when distinct points have disjoint open neighbourhoods ([[def-hausdorff-space]], [[def-topological-space]]).

[L1] The range $\{\, x_k : k \in \mathbb{N} \,\}$ of a sequence is nonempty and at most countable, the sequence itself being a surjection of $\mathbb{N}$ onto it; and a subset of an at most countable set is at most countable ([[lem-countable-iff-surjection-from-n]], [[lem-subset-of-countable]], [[def-countable]]).

[L2] A union of two at most countable sets is at most countable; this is the two-set instance of [[thm-countable-union-of-countable]], padded with copies of $\varnothing$, and it needs no choice principle, exactly as [[def-standard-topologies]] records for the cocountable topology itself.

[L3] $\mathbb{R}$ is uncountable ([[thm-r-uncountable]]).

[L4] A topology is $T_1$ exactly when it contains the cofinite topology on the same set ([[thm-t1-iff-singletons-are-closed]], clause (d), [[def-t0-and-t1-spaces]]); a finite set is at most countable ([[def-countable]]).

## Refutation

**Proof technique:** direct.

1.1 Suppose $x_k \to p$, and put $R := \{\, x_k : k \in \mathbb{N} \,\} \setminus \{p\}$, which is at most countable by [L1]. [A2, L1, assume-hyp]

1.2 Let $U, V \in \mathcal{T}_{\mathrm{coc}}$ be nonempty and suppose $U \cap V = \varnothing$; then $\mathbb{R} = (\mathbb{R} \setminus U) \cup (\mathbb{R} \setminus V)$ is a union of two at most countable sets, hence at most countable by [L2], contradicting [L3]. [A1, L2, L3, assume-hyp]

1.3 The cofinite topology on $\mathbb{R}$ is contained in $\mathcal{T}_{\mathrm{coc}}$, a finite set being at most countable, so $(\mathbb{R},\mathcal{T}_{\mathrm{coc}})$ is $T_1$. [A1, L4]

2.1 Under step 1.1: $\mathbb{R} \setminus R$ is open by [A1] and contains $p$, so by [A2] there is $K$ with $x_k \in \mathbb{R} \setminus R$ for all $k \ge K$. [step 1.1, A1, A2]

2.2 So no two nonempty open sets of $\mathcal{T}_{\mathrm{coc}}$ are disjoint; taking $p = 0$ and $q = 1$, any open $U \ni p$ and $V \ni q$ are nonempty and therefore meet, and $(\mathbb{R},\mathcal{T}_{\mathrm{coc}})$ is not Hausdorff. [step 1.2, A3]

3.1 Under step 1.1: for $k \ge K$ the point $x_k$ lies in the range of the sequence and not in $R$, hence $x_k = p$; so the sequence is eventually constant with value $p$. [step 2.1]

4.1 If also $x_k \to q$ with $q \ne p$, then $\mathbb{R} \setminus \{p\}$ is open by [A1], since $\{p\}$ is at most countable, and it contains $q$; so by [A2] there is $K'$ with $x_k \in \mathbb{R} \setminus \{p\}$ for all $k \ge K'$, contradicting step 3.1 at any index at least $\max\{K, K'\}$. [step 3.1, A1, A2]

5.1 By step 4.1 every sequence in $(\mathbb{R},\mathcal{T}_{\mathrm{coc}})$ has at most one limit. [step 4.1]

6.1 By step 5.1 every sequence has at most one limit and by step 2.2 the space is not Hausdorff, so the claim is false; by step 1.3 the witness is moreover $T_1$. [step 5.1, step 2.2, step 1.3] ∎

## Remarks

- **The refutation is not about pathological sequences but about their scarcity.** In the cocountable topology on an uncountable set a sequence can only reach at most countably many points, and every at most countable set is closed, so convergence degenerates to eventual constancy. Sequences are simply too small to detect this topology, which is also why nothing about it can be read off from sequential arguments.

- **What a countability hypothesis would change is not settled here.** Whether adding first countability to the hypothesis rescues the claim is a question this library does not address, and nothing above asserts an answer. What *is* recorded is the metrizable case, where limits are unique and the space is Hausdorff for reasons independent of each other ([[def-sequence-convergence-top]], [[def-metrizable-space]]).

- **The converse is true and easy.** In a Hausdorff space limits are unique: two distinct limits would have disjoint open neighbourhoods, each of which contains the sequence eventually, which is impossible. That direction is not what this item refutes.
````

### `lem-nat-trichotomy`

````markdown
---
id: lem-nat-trichotomy
kind: lemma
title: "Trichotomy of the order on $\\mathbb{N}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-nat-order, def-nat-addition, lem-nat-add-identity, lem-nat-add-successor-left, lem-nat-add-associative, lem-nat-add-commutative, lem-nat-add-cancellative, lem-nat-nonzero-is-successor, thm-omega-is-peano-system, thm-induction-principle]
aliases: []
landmark: false
short: "exactly one of $<,=,>$"
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
    - title: "T. Tao, Analysis I, 3rd ed., §2.1-2.3 (Peano axioms, recursion, arithmetic)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "W. Aitken, MATH 378 Ch. 1: The Peano Axioms (CSU San Marcos)"
      url: "https://public.csusm.edu/aitken_html/m378_S2016/Ch1PeanoAxioms.pdf"
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
pipeline_run: null
proof_strategy: induction
---

## Statement

For all $m, n \in \mathbb{N}$ exactly one of $m < n$, $m = n$, $m > n$ holds. In particular the order ([[def-nat-order]]) is total.

## Facts & Assumptions

**Given:** The order on $\mathbb{N}$, where $m \le n$ means $\exists k\ (m + k = n)$ and $m < n$ means $m \le n$ with $m \ne n$ ([[def-nat-order]]), and addition with $m + 0 = m$, $m + \sigma(n) = \sigma(m + n)$ ([[def-nat-addition]]).

[L1] $0 + k = k$ ([[lem-nat-add-identity]]).

[L2] Left successor law: $\sigma(a) + k = \sigma(a + k)$ ([[lem-nat-add-successor-left]]).

[L3] Addition is associative ([[lem-nat-add-associative]]).

[L4] Every nonzero natural is a successor: $n \ne 0 \Rightarrow n = \sigma(a)$ for some $a$ ([[lem-nat-nonzero-is-successor]]).

[L5] $\sigma(x) \ne 0$ for every $x$ (axiom P1 of [[thm-omega-is-peano-system]]).

[L6] Cancellation: $x + k = y + k \Rightarrow x = y$ ([[lem-nat-add-cancellative]]).

[L7] Addition is commutative ([[lem-nat-add-commutative]]).

## Proof

**Proof technique:** induction.

1.1 At most one of the three holds where equality is involved: $m < n$ forces $m \ne n$ and $m > n$ forces $n \ne m$, so $m = n$ is incompatible with either strict relation. [given]

1.2 The two strict relations are incompatible: if $m < n$ and $m > n$ then $m + j = n$ and $n + i = m$ with $i, j \ne 0$, so $m + (j + i) = (m + j) + i = n + i = m = m + 0$; by commutativity [L7], $(j + i) + m = 0 + m$, so $j + i = 0$ by cancellation [L6]; yet $j = \sigma(a)$ [L4] gives, by the left successor law [L2], $j + i = \sigma(a) + i = \sigma(a + i) \ne 0$ [L5], a contradiction. [given, L2, L3, L4, L5, L6, L7]

1.3 For every $n$ one has $n < \sigma(n)$, since $n + \sigma(0) = \sigma(n + 0) = \sigma(n)$ by the recursion, with $\sigma(0) \ne 0$ [L5]. [given, L5]

1.4 Base case $n = 0$: for arbitrary $m$, either $m = 0$, giving $m = n$, or $m \ne 0$ so $0 + m = m$ [L1] with $m \ne 0$ gives $0 < m$, that is $n < m$; so at least one of $m < n$, $m = n$, $m > n$ holds. [base, L1, L4]

1.5 Inductive hypothesis: fix $n$ and assume that for every $m$ at least one of $m < n$, $m = n$, $m > n$ holds. [ih]

2.1 Successor step: for arbitrary $m$, apply the hypothesis; if $m < n$ then $n = m + k$ with $k \ne 0$, and the recursion gives $m + \sigma(k) = \sigma(m + k) = \sigma(n)$, so $\sigma(n) = m + \sigma(k)$ with $\sigma(k) \ne 0$ [L5], giving $m < \sigma(n)$; if $m = n$ then $m + \sigma(0) = \sigma(m + 0) = \sigma(m) = \sigma(n)$, so $\sigma(n) = m + \sigma(0)$ with $\sigma(0) \ne 0$, giving $m < \sigma(n)$; if $m > n$ then $m = n + i$ with $i \ne 0$, so $i = \sigma(a)$ [L4], and the recursion gives $n + \sigma(a) = \sigma(n + a)$ while the left successor law [L2] gives $\sigma(n) + a = \sigma(n + a)$, so $m = n + \sigma(a) = \sigma(n + a) = \sigma(n) + a$, whence $a = 0$ gives $m = \sigma(n)$ and $a \ne 0$ gives $\sigma(n) < m$; in every case at least one of $m < \sigma(n)$, $m = \sigma(n)$, $m > \sigma(n)$ holds. [step 1.5, given, L2, L4, L5]

3.1 By the induction principle with base 1.4, hypothesis 1.5, and step 2.1, comparability holds for all $m, n$, and with the incompatibilities 1.1 and 1.2 exactly one of $m < n$, $m = n$, $m > n$ holds, so the order is total. [step 1.1, step 1.2, step 1.4, step 2.1, discharge-induction] ∎
````

