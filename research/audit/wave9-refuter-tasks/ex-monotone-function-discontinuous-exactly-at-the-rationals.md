## Wave 9 target — `ex-monotone-function-discontinuous-exactly-at-the-rationals`

Selection: mandatory Wave 9 high/critical proof-bearing route.

Normalized current SHA-256: `e76bbeb24197421d7f2531cf565cde2cbecede05255e89249c81db03bc348d60`

## Complete current target

````markdown
---
id: ex-monotone-function-discontinuous-exactly-at-the-rationals
kind: example
title: "A bounded nondecreasing $f : \\mathbb{R} \\to \\mathbb{R}$ whose set of discontinuities is exactly $\\mathbb{Q}$, obtained from the prescribed-jump construction applied to one fixed enumeration of the rationals"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
  evidence: exact-source
deps: [thm-monotone-with-prescribed-discontinuity-set, def-monotone-function, def-classification-of-discontinuities, thm-froda, thm-rationals-countable, lem-rat-embeds-dense, def-countable, def-series, thm-geometric-series, def-equinumerous, lem-countable-iff-surjection-from-n]
justified_by: []
aliases: []
landmark: false
short: "monotone, discontinuous exactly on $\\mathbb{Q}$"
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
    - title: "Classification of discontinuities (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Classification_of_discontinuities"
    - title: "Froda's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Froda%27s_theorem"
    - title: "Math 402/502 Real Analysis Homework (University of New Mexico)"
      url: "https://math.unm.edu/~crisp/courses/math402/spring19/hwk.html"
    - title: "Discontinuities of monotone functions (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Discontinuities_of_monotone_functions"
pipeline_run: null
---

## Example

Write $\mathbb{Q}$ for the canonical copy of the rationals inside $\mathbb{R}$
([[lem-rat-embeds-dense]]). There is a function $f : \mathbb{R} \to \mathbb{R}$
with all of the following properties:

1. $f$ is nondecreasing ([[def-monotone-function]]) and $0 \le f(x) \le 1$ for
   every real $x$;
2. $f$ is discontinuous at every rational and continuous at every irrational, so
   its discontinuity set is exactly $\mathbb{Q}$;
3. every discontinuity of $f$ is a jump
   ([[def-classification-of-discontinuities]]).

Explicitly, fixing a bijection $e : \mathbb{N} \to \mathbb{Q}$
([[thm-rationals-countable]]), one may take

$$f(x) \;=\; \sum_{k=0}^{\infty} a_{k}(x), \qquad a_{k}(x) = \begin{cases} 1/2^{\,k+1} & \text{if } e(k) < x,\\ 0 & \text{otherwise,}\end{cases}$$

which is the construction of [[thm-monotone-with-prescribed-discontinuity-set]]
applied to $E := \mathbb{Q}$ ([[def-series]], [[thm-geometric-series]]).

**This is the extreme case allowed by Froda's theorem.** [[thm-froda]] says that
a monotone function on an interval has at most countably many discontinuities;
$\mathbb{Q}$ is countable and dense, so the bound is attained by a set that
meets every interval. A monotone function can therefore be discontinuous on a
dense set, and it is nevertheless continuous on a set whose complement is
countable.

## Facts & Assumptions

**Given:** The canonical copy $\mathbb{Q} \subseteq \mathbb{R}$ of the rationals.

[L1] $\mathbb{Q} \approx \mathbb{N}$, and composing a bijection $\mathbb{N} \to \mathbb{Q}$ with the embedding $q \mapsto \hat q$ gives a bijection $e : \mathbb{N} \to \mathbb{Q}$ onto the canonical copy; in particular that copy is nonempty and at most countable ([[thm-rationals-countable]], [[lem-rat-embeds-dense]], [[def-countable]], [[def-equinumerous]], [[lem-countable-iff-surjection-from-n]]).

[L2] For every at most countable $E \subseteq \mathbb{R}$ there is a bounded nondecreasing $f : \mathbb{R} \to \mathbb{R}$ with $0 \le f \le 1$, continuous at every point outside $E$ and discontinuous at every point of $E$, with every discontinuity a jump ([[thm-monotone-with-prescribed-discontinuity-set]], [[def-monotone-function]], [[def-classification-of-discontinuities]]).

[L3] The set of discontinuities of a monotone function on an interval is at most countable ([[thm-froda]]).

## Verification

**Proof technique:** direct.

1.1 $\mathbb{Q}$, as a subset of $\mathbb{R}$, is at most countable. [L1]

2.1 Applying the prescribed-discontinuity theorem with $E := \mathbb{Q}$ produces a nondecreasing $f : \mathbb{R} \to \mathbb{R}$ with values in $[0,1]$, continuous at every irrational, discontinuous at every rational, and with every discontinuity a jump. This is exactly claims 1, 2 and 3. [step 1.1, L2]

3.1 The displayed formula is the function the theorem constructs, for the surjection $e$ of [L1]: the construction there sums the masses $1/2^{\,k+1}$ over the indices $k$ with $e(k) < x$. [step 2.1, L1, L2]

4.1 The example is consistent with Froda's theorem and is extremal for it: the discontinuity set $\mathbb{Q}$ is at most countable, as Froda requires, and no larger discontinuity set is possible for any monotone function. [step 2.1, L1, L3] ∎

## Remarks

- **The jump at a rational $r$ is at least $1/2^{\,k+1}$, where $k$ is the index
  with $e(k) = r$.** That lower bound is what the construction of
  [[thm-monotone-with-prescribed-discontinuity-set]] establishes, and it is what
  makes $r$ a discontinuity; the total mass available is
  $\sum_{k \ge 0} 1/2^{\,k+1} = 1$, which is why $f$ stays inside $[0,1]$. A
  different enumeration gives a different function with the same discontinuity
  set.

- **Continuity at every irrational is not an accident of this construction.**
  The complement of a countable set is where a monotone function built this way
  must be continuous, and [[thm-froda]] says the same thing in general: the
  discontinuities of a monotone function can never fill an uncountable set. The
  companion statement in the other direction, that no function whatever is
  continuous exactly at the rationals
  ([[cor-no-function-is-continuous-exactly-on-q]]), shows that the roles of
  $\mathbb{Q}$ and its complement cannot be exchanged here.
````

## Current Wave 9 provenance determination

```json
{
  "id": "ex-monotone-function-discontinuous-exactly-at-the-rationals",
  "statement": "literature-derived",
  "proof": "ai-altered",
  "evidence": "exact-source",
  "urls": [
    "https://math.unm.edu/~crisp/courses/math402/spring19/hwk.html",
    "https://en.wikipedia.org/wiki/Discontinuities_of_monotone_functions"
  ],
  "rationale": "The university exercise gives the same weighted sum of rational step functions, monotone and discontinuous exactly at the rationals.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

## Current Wave 9 proof contract

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "thm-rationals-countable",
      "source_section": "Statement",
      "quote": "**No choice principle is used.** The one place where a reader expects a choice,\n\"pick a representative $a/b$ of each rational\", is exactly where\n[[lem-rat-positive-denominator]] applies: every rational *has* a representative\nwith positive denominator, so the map $(a,b) \\mapsto [(a,b)]$ defined on\n$\\mathbb{Z} \\times \\mathbb{Z}_{>0}$ is already **surjective** onto $\\mathbb{Q}$,\nand countability follows from a surjection without ever selecting a\nrepresentative. The same device handles $\\mathbb{Z}$, which is a surjective image\nof $\\mathbb{N} \\times \\mathbb{N}$ by construction ([[def-integers]]).",
      "uses": [
        "1.1",
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-rat-embeds-dense",
      "source_section": "Statement",
      "quote": "The map $q \\mapsto \\hat q$ ([[def-real-numbers]]) is an embedding of ordered\nfields. Every real is approximated by rationals: for $x \\in \\mathbb{R}$ and\nrational $\\varepsilon > 0$ there is $q \\in \\mathbb{Q}$ with\n$|x - \\hat q| < \\hat\\varepsilon$. Consequently, strictly between any two\nreals lies a rational.",
      "uses": [
        "1.1",
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-countable",
      "source_section": "Definition",
      "quote": "- $A$ is **finite** if $A \\approx n$ for some $n \\in \\mathbb{N}$.\n- $A$ is **countably infinite** if $A \\approx \\mathbb{N}$.\n- $A$ is **at most countable** if it is finite or countably infinite.\n- $A$ is **uncountable** if it is not at most countable.",
      "uses": [
        "1.1",
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-equinumerous",
      "source_section": "Definition",
      "quote": "- $A$ and $B$ are **equinumerous**, written $A \\approx B$, if there exists a\n  bijection $f : A \\to B$.\n- $A$ is **dominated by** $B$, written $A \\preceq B$, if there exists an\n  injection $f : A \\to B$.\n- $A \\prec B$ abbreviates: $A \\preceq B$ and not $A \\approx B$.",
      "uses": [
        "1.1",
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-countable-iff-surjection-from-n",
      "source_section": "Statement",
      "quote": "Let $A$ be a nonempty set. Then $A$ is at most countable ([[def-countable]]) if\nand only if there is a surjection $s : \\mathbb{N} \\to A$\n([[def-injection-surjection-bijection]]).",
      "uses": [
        "1.1",
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-monotone-with-prescribed-discontinuity-set",
      "source_section": "Statement",
      "quote": "1. $f$ is nondecreasing ([[def-monotone-function]]) and $0 \\le f(x) \\le 1$ for\n   every real $x$, so $f$ is bounded ([[def-bounded-set]]);\n2. $f$ is continuous at every $x \\notin E$ and discontinuous at every $x \\in E$\n   ([[def-continuity-real]]), so the discontinuity set of $f$ is exactly $E$;\n3. every discontinuity of $f$ is a **jump**\n   ([[def-classification-of-discontinuities]]), with\n   $\\lim_{x \\to c^{-}} f(x) = f(c) < \\lim_{x \\to c^{+}} f(x)$ at every $c \\in E$.",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-monotone-function",
      "source_section": "Definition",
      "quote": "A sequence of reals is a function $x : \\mathbb{N} \\to \\mathbb{R}$\n([[def-sequence]]), and [[def-monotone-sequence]] calls it nondecreasing when\n$x_j \\le x_k$ for all $j \\le k$, increasing when $x_j < x_k$ for all $j < k$,\nand so on. Those are **the same four conditions as above**, read with the\nordered set $\\mathbb{N}$ in place of the ordered subset $A \\subseteq \\mathbb{R}$\nand with the comparison of indices in place of the comparison of arguments. So\nnothing new is introduced here for sequences, and the two vocabularies may be\nused interchangeably: the words *nondecreasing*, *increasing*, *nonincreasing*,\n*decreasing*, *monotone* and *strictly monotone* mean the corresponding\ncondition on the domain at hand.",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-classification-of-discontinuities",
      "source_section": "Definition",
      "quote": "**At an isolated point there is nothing to classify.** If $c$ is an isolated\npoint of $A$ ([[def-limit-point-r]]), so that $A \\cap N_{\\rho}(c) = \\{c\\}$ for\nsome real $\\rho > 0$, then $f$ is continuous at $c$: the $\\varepsilon$-$\\delta$\ncondition of [[def-continuity-real]] is satisfied by $\\delta := \\rho$, since the\nonly $x \\in A$ with $|x - c| < \\rho$ is $c$ itself and $|f(c) - f(c)| = 0$. So\nevery discontinuity is a limit point of $A$, and the classification below covers\nevery case that occurs.",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-froda",
      "source_section": "Statement",
      "quote": "([[def-classification-of-discontinuities]]) is **at most countable**\n([[def-countable]]).",
      "uses": [
        "4.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "ex-monotone-function-discontinuous-exactly-at-the-rationals-step-1-1",
      "claim": "$\\mathbb{Q}$, as a subset of $\\mathbb{R}$, is at most countable. [L1]",
      "step": "1.1",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "ex-monotone-function-discontinuous-exactly-at-the-rationals-step-2-1",
      "claim": "Applying the prescribed-discontinuity theorem with $E := \\mathbb{Q}$ produces a nondecreasing $f : \\mathbb{R} \\to \\mathbb{R}$ with values in $[0,1]$, continuous at every irrational, discontinuous at every rational, and with every discontinuity a jump. This is exactly claims 1, 2 and 3. [step 1.1, L2]",
      "step": "2.1",
      "inputs": [
        "1.1",
        "L2"
      ]
    },
    {
      "id": "ex-monotone-function-discontinuous-exactly-at-the-rationals-step-3-1",
      "claim": "The displayed formula is the function the theorem constructs, for the surjection $e$ of [L1]: the construction there sums the masses $1/2^{\\,k+1}$ over the indices $k$ with $e(k) < x$. [step 2.1, L1, L2]",
      "step": "3.1",
      "inputs": [
        "L1",
        "2.1",
        "L2"
      ]
    },
    {
      "id": "ex-monotone-function-discontinuous-exactly-at-the-rationals-step-4-1",
      "claim": "The example is consistent with Froda's theorem and is extremal for it: the discontinuity set $\\mathbb{Q}$ is at most countable, as Froda requires, and no larger discontinuity set is possible for any monotone function. [step 2.1, L1, L3] ∎",
      "step": "4.1",
      "inputs": [
        "2.1",
        "L1",
        "L3"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The statement forms no empty set, empty family, or empty finite sum whose value affects the claim."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "step 2.1: the zero-valued or zero-index boundary is handled explicitly, or is included without division by it."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "step 1.1: the unit or first-index boundary is included explicitly in the stated construction."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Statement: interval degeneracy is either excluded by a strict endpoint hypothesis or included by the stated weak endpoint convention."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "step 1.1: domain endpoints and any one-sided interpretation are kept within the stated relative-domain convention."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "The proof selects no witness from a varying asserted nonempty family."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The statement is not a biconditional or equivalence."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The statement is not a biconditional or equivalence."
    }
  ]
}
```

## Generated cross-batch/cross-level relationships sourced by this target

```json
[
  {
    "source": "ex-monotone-function-discontinuous-exactly-at-the-rationals",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "thm-monotone-with-prescribed-discontinuity-set",
    "declared_target": "thm-monotone-with-prescribed-discontinuity-set",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": "wave9-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-monotone-function-discontinuous-exactly-at-the-rationals",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "def-monotone-function",
    "declared_target": "def-monotone-function",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": "wave9-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-monotone-function-discontinuous-exactly-at-the-rationals",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "def-classification-of-discontinuities",
    "declared_target": "def-classification-of-discontinuities",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": "wave9-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-monotone-function-discontinuous-exactly-at-the-rationals",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "thm-froda",
    "declared_target": "thm-froda",
    "target_statement_provenance": "literature-derived",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": "wave9-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-monotone-function-discontinuous-exactly-at-the-rationals",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "thm-rationals-countable",
    "declared_target": "thm-rationals-countable",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-monotone-function-discontinuous-exactly-at-the-rationals",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "lem-rat-embeds-dense",
    "declared_target": "lem-rat-embeds-dense",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-monotone-function-discontinuous-exactly-at-the-rationals",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "def-countable",
    "declared_target": "def-countable",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-monotone-function-discontinuous-exactly-at-the-rationals",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "def-series",
    "declared_target": "def-series",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-monotone-function-discontinuous-exactly-at-the-rationals",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "thm-geometric-series",
    "declared_target": "thm-geometric-series",
    "target_statement_provenance": "literature-derived",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-monotone-function-discontinuous-exactly-at-the-rationals",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "def-equinumerous",
    "declared_target": "def-equinumerous",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-monotone-function-discontinuous-exactly-at-the-rationals",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "lem-countable-iff-surjection-from-n",
    "declared_target": "lem-countable-iff-surjection-from-n",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Complete current text of every declared or cited item (12)

### `cor-no-function-is-continuous-exactly-on-q`

````markdown
---
id: cor-no-function-is-continuous-exactly-on-q
kind: corollary
title: "No function $\\mathbb{R} \\to \\mathbb{R}$ is continuous at every rational and discontinuous at every irrational, because $\\mathbb{Q}$ is not $G_\\delta$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
  evidence: semantic-source
deps: [thm-discontinuity-set-is-f-sigma, def-f-sigma-g-delta, cor-q-is-meager-and-not-g-delta, def-continuity-real, lem-rat-embeds-dense]
justified_by: []
aliases: []
landmark: true
short: "nothing is continuous exactly on $\\mathbb{Q}$"
proof_strategy: contradiction
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
    - title: "Gdelta set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/G%CE%B4_set"
    - title: "Baire category theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Baire_category_theorem"
pipeline_run: null
---

## Statement

There is **no** function $f : \mathbb{R} \to \mathbb{R}$ that is continuous at
every rational and discontinuous at every irrational
([[def-continuity-real]], [[lem-rat-embeds-dense]]).

Equivalently: $\mathbb{Q}$ is not the continuity set of any function
$\mathbb{R} \to \mathbb{R}$.

**The contrast with Thomae's function is the point.** There *is* a function
continuous exactly at the irrationals, namely $t$
([[thm-dirichlet-and-thomae-continuity-sets]]), and one might expect the two
arrangements to be symmetric. They are not, because the classes $F_\sigma$ and
$G_\delta$ are exchanged by complementation while $\mathbb{Q}$ and the
irrationals are, and only one of the two sets is $G_\delta$
([[cor-q-is-meager-and-not-g-delta]]).

## Facts & Assumptions

**Given:** $\mathbb{Q}$ denotes the canonical copy of the rationals inside $\mathbb{R}$ ([[lem-rat-embeds-dense]]).

[L1] For every $f : \mathbb{R} \to \mathbb{R}$ the set of points at which $f$ is continuous is a $G_\delta$ subset of $\mathbb{R}$ ([[thm-discontinuity-set-is-f-sigma]], case $A = \mathbb{R}$, [[def-f-sigma-g-delta]]).

[L2] $\mathbb{Q}$ is **not** a $G_\delta$ subset of $\mathbb{R}$ ([[cor-q-is-meager-and-not-g-delta]], claim 3).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that there is $f : \mathbb{R} \to \mathbb{R}$ continuous at every rational and discontinuous at every irrational. [assume-contra]

2.1 Then the set of continuity points of $f$ is exactly $\mathbb{Q}$: it contains every rational by hypothesis, and it contains no irrational, again by hypothesis. [step 1.1]

3.1 By the $G_\delta$ theorem the set of continuity points of $f$ is a $G_\delta$ subset of $\mathbb{R}$, so $\mathbb{Q}$ is $G_\delta$. This contradicts the fact that $\mathbb{Q}$ is not $G_\delta$, so no such $f$ exists. [step 2.1, L1, L2, discharge-contradiction] ∎

## Remarks

- **Where the work actually is.** Nothing in this corollary is hard; all of it
  was done earlier. The $G_\delta$ theorem is [[thm-discontinuity-set-is-f-sigma]],
  which rests on the oscillation, and the failure of $\mathbb{Q}$ to be
  $G_\delta$ is [[cor-q-is-meager-and-not-g-delta]], which is where the Baire
  category theorem is spent. The corollary is the place where those two meet.

- **A weaker statement is true and much cheaper, and is not what is proved
  here.** That no *monotone* function is continuous exactly at the rationals
  follows from [[thm-froda]] alone, since the irrationals are uncountable. The
  statement above is about all functions and needs category.
````

### `def-classification-of-discontinuities`

````markdown
---
id: def-classification-of-discontinuities
kind: definition
title: "Discontinuity of $f$ at a point of its domain, and its classification: removable discontinuity, jump discontinuity and essential discontinuity, equivalently Rudin's discontinuities of the first and of the second kind"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
  evidence: semantic-source
deps: [def-continuity-real, def-one-sided-limits, def-function-limit, def-limit-point-r, def-interval, thm-two-sided-limit-iff-both-one-sided]
justified_by: []
aliases: [def-discontinuity, def-jump-discontinuity, def-removable-discontinuity, def-essential-discontinuity]
landmark: true
short: "removable, jump, essential discontinuity"
verification:
  audited: 2026-07-28
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Classification of discontinuities (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Classification_of_discontinuities"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in A$. Then
$f$ is **discontinuous at $c$**, and $c$ is a **discontinuity of $f$**, when $f$
is not continuous at $c$ ([[def-continuity-real]]). As in
[[def-one-sided-limits]] write

$$A^{-} := A \cap (-\infty, c), \qquad A^{+} := A \cap (c, \infty)$$

([[def-interval]]), and recall that $\lim_{x \to c^{-}} f(x)$ is defined only
when $c$ is a limit point of $A^{-}$, and $\lim_{x \to c^{+}} f(x)$ only when
$c$ is a limit point of $A^{+}$ ([[def-limit-point-r]]).

**At an isolated point there is nothing to classify.** If $c$ is an isolated
point of $A$ ([[def-limit-point-r]]), so that $A \cap N_{\rho}(c) = \{c\}$ for
some real $\rho > 0$, then $f$ is continuous at $c$: the $\varepsilon$-$\delta$
condition of [[def-continuity-real]] is satisfied by $\delta := \rho$, since the
only $x \in A$ with $|x - c| < \rho$ is $c$ itself and $|f(c) - f(c)| = 0$. So
every discontinuity is a limit point of $A$, and the classification below covers
every case that occurs.

### Two-sided points

Suppose $c$ is a limit point of **both** $A^{-}$ and $A^{+}$, so that both
one-sided limits are well posed. Say that $c$ is a discontinuity

- **of the first kind** when both one-sided limits exist;
- **of the second kind**, also called **essential**, when at least one of the two
  one-sided limits fails to exist.

A discontinuity of the first kind is further

- **removable** when $\lim_{x \to c^{-}} f(x) = \lim_{x \to c^{+}} f(x)$; the
  common value is then different from $f(c)$, for otherwise
  [[thm-two-sided-limit-iff-both-one-sided]] would give
  $\lim_{x \to c} f(x) = f(c)$ and $f$ would be continuous at $c$
  ([[def-continuity-real]]);
- a **jump** when $\lim_{x \to c^{-}} f(x) \ne \lim_{x \to c^{+}} f(x)$; the
  difference $\lim_{x \to c^{+}} f(x) - \lim_{x \to c^{-}} f(x)$ is then called
  the **jump of $f$ at $c$**.

The three cases *removable*, *jump*, *essential* are mutually exclusive and
exhaust the two-sided discontinuities of $f$: either both one-sided limits
exist, and then they are equal or not, or one of them does not exist.

**Removable is a name for what can be repaired.** If $c$ is a removable
discontinuity with common one-sided value $L$, then the function agreeing with
$f$ off $c$ and taking the value $L$ at $c$ is continuous at $c$, again by
[[thm-two-sided-limit-iff-both-one-sided]] and [[def-continuity-real]]: changing
the single value $f(c)$ removes the discontinuity. No such repair is available at
a jump or at an essential discontinuity, since there the two-sided limit does not
exist at all and no choice of value at $c$ can create it.

### One-sided points

If $c$ is a limit point of exactly one of $A^{-}$ and $A^{+}$, only that side is
defined and only that side is used: $c$ is a discontinuity **of the first kind**
when the one-sided limit on the side in question exists, and **of the second
kind** otherwise. When it exists it is different from $f(c)$, since on such a
point the one-sided condition and the continuity condition are the same
condition; and there is no jump case, there being nothing to compare the value
with. The endpoints of an interval are the typical instance.

**On the two vocabularies.** *First kind* and *second kind* are Rudin's terms and
are recorded because the literature uses them; *removable*, *jump* and
*essential* are the names used in the rest of this library. They name the same
three cases and no third classification is introduced.
````

### `def-countable`

````markdown
---
id: def-countable
kind: definition
title: "Finite, countably infinite, countable, uncountable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-equinumerous, def-natural-numbers, def-nat-order, lem-nat-order-is-membership, lem-pigeonhole]
justified_by: []
aliases: [def-finite-set, def-countably-infinite, def-uncountable]
landmark: true
short: "finite, countable, uncountable"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "J. Lebl, Basic Analysis: Introduction to Real Analysis, basic set theory"
      url: "https://www.jirka.org/ra/html/sec_basicset.html"
    - title: "Countable set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countable_set"
    - title: "Finite set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Finite_set"
    - title: "T. Tao, Analysis I, 3rd ed., §3.6 and §8.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Definition

Recall that a natural number is a von Neumann natural
([[def-natural-numbers]]): $0 = \varnothing$ and $\sigma(n) = n \cup \{n\}$, so
that

$$n = \{\, m \in \mathbb{N} : m < n \,\} = \{0, 1, \dots, n-1\}$$

is itself the set of its predecessors. Here $<$ is the order of
[[def-nat-order]], which is defined additively, so the displayed identity is a
theorem and not a convention: it is [[lem-nat-order-is-membership]], proved
immediately above. Let $A$ be a set, and let $\approx$ be equinumerosity
([[def-equinumerous]]).

- $A$ is **finite** if $A \approx n$ for some $n \in \mathbb{N}$.
- $A$ is **countably infinite** if $A \approx \mathbb{N}$.
- $A$ is **at most countable** if it is finite or countably infinite.
- $A$ is **uncountable** if it is not at most countable.

## Remarks

- **Convention: in this library "countable" alone always means "at most
  countable"**, so a finite set is countable. This is the convention of Halmos
  and of Tao, and it is the one that makes the theorems on this page read
  cleanly: subsets, products and unions of countable sets are countable, with no
  finite/infinite case split in the statement. The competing convention, used by
  Rudin among others, reserves "countable" for "countably infinite" and says
  "at most countable" for the disjunction. Under that convention every statement
  below still holds after replacing "countable" with "at most countable", but
  several would become false as literally written. Where the distinction
  matters, the long forms "countably infinite" and "at most countable" are used
  in full, and "uncountable" always means "not at most countable", on which the
  two conventions agree.

- **The three classes are exhaustive by construction**: every set is finite,
  countably infinite, or uncountable, since "uncountable" is defined as the
  negation of the disjunction. That they are also mutually exclusive, that is,
  that no set is both finite and countably infinite, is a genuine theorem
  amounting to $\mathbb{N} \not\approx n$ for every $n \in \mathbb{N}$, and it is
  proved immediately above as claim 4 of [[lem-pigeonhole]]. So a countably
  infinite set is never finite, and "$A$ is infinite", meaning not finite, is
  implied by $A \approx \mathbb{N}$. The same lemma pins down finiteness itself:
  by its claim 3 a finite set is equinumerous with exactly one natural number, so
  the number of elements of a finite set is well defined, and by its claim 5 no
  finite set is equinumerous with a proper subset of itself.

- **What the exclusivity is and is not used for below.** Nothing on this page
  needs it in order to run: the infinitude of $\mathbb{Q}$, for instance, is
  obtained by exhibiting a bijection $\mathbb{Q} \approx \mathbb{N}$ directly
  ([[thm-rationals-countable]]) rather than by ruling out finiteness. It is used
  where the two notions of infinity are compared
  ([[fs-infinite-has-countable-subset-in-zf]]) and where the continuum hypothesis
  is instantiated at $\mathbb{N}$ ([[rem-continuum-hypothesis]]), both of which
  need $\mathbb{N}$ to be infinite as a fact rather than as a convention.

- **$0$ and the empty set.** $0 = \varnothing$, and $A \approx 0$ holds exactly
  when $A = \varnothing$, so the empty set is finite. This matters in the proofs
  below, where the empty case is always separated out: a surjection
  $\mathbb{N} \to A$ cannot exist when $A = \varnothing$, which is why
  [[lem-countable-iff-surjection-from-n]] assumes $A$ nonempty.

- **Countability is a property of a set alone**, not of a set with structure. In
  particular $\mathbb{Q}$ is countable while carrying a dense order, and
  $\mathbb{R}$ is uncountable; neither statement says anything on its own about
  the order or the arithmetic those sets carry.
````

### `def-equinumerous`

````markdown
---
id: def-equinumerous
kind: definition
title: "Equinumerous sets, $A \\approx B$ and $A \\preceq B$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-injection-surjection-bijection]
justified_by: []
aliases: [def-equipollent, def-same-cardinality]
landmark: false
short: "$A\\approx B$, $A\\preceq B$"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "J. Lebl, Basic Analysis: Introduction to Real Analysis, basic set theory"
      url: "https://www.jirka.org/ra/html/sec_basicset.html"
    - title: "Equinumerosity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equinumerosity"
    - title: "Countable set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countable_set"
pipeline_run: null
---

## Definition

Let $A$ and $B$ be sets ([[def-injection-surjection-bijection]] for the
terminology).

- $A$ and $B$ are **equinumerous**, written $A \approx B$, if there exists a
  bijection $f : A \to B$.
- $A$ is **dominated by** $B$, written $A \preceq B$, if there exists an
  injection $f : A \to B$.
- $A \prec B$ abbreviates: $A \preceq B$ and not $A \approx B$.

## Remarks

- **$\approx$ behaves like an equivalence relation.** It is reflexive
  ($\mathrm{id}_A$ is a bijection), symmetric (the inverse of a bijection is a
  bijection) and transitive (a composition of bijections is a bijection). The
  careful statement is that these three properties hold for all sets, and that
  $\approx$ restricted to any *set* of sets is an equivalence relation on that
  set. It is not a relation on "the set of all sets", which does not exist; the
  reflexivity, symmetry and transitivity statements are schemas about arbitrary
  sets, which is all any argument below uses.

- **$\preceq$ is reflexive and transitive**, for the same reasons, and
  $A \approx B$ implies both $A \preceq B$ and $B \preceq A$. The converse, that
  $A \preceq B$ and $B \preceq A$ together give $A \approx B$, is a theorem and
  not a triviality: it is [[thm-schroder-bernstein]], and it is proved without
  any use of choice.

- **Subsets.** $A \subseteq B$ implies $A \preceq B$, since the inclusion map is
  injective. The reverse fails badly for infinite sets: the successor map
  $\sigma$ is a bijection $\mathbb{N} \to \mathbb{N} \setminus \{0\}$, being
  injective and never zero ([[thm-omega-is-peano-system]]) and hitting every
  nonzero natural ([[lem-nat-nonzero-is-successor]]), so
  $\mathbb{N} \approx \mathbb{N} \setminus \{0\}$ and a proper subset can be
  equinumerous with the whole.

- $\approx$ is the library's substitute for "has the same number of elements",
  stated without introducing cardinal numbers. Everything on this page is phrased
  with $\approx$, $\preceq$ and $\prec$ alone, so no theory of cardinals is
  presupposed.
````

### `def-monotone-function`

````markdown
---
id: def-monotone-function
kind: definition
title: "Nondecreasing, increasing (strictly increasing), nonincreasing, decreasing, monotone and strictly monotone real functions on a subset of $\\mathbb{R}$, with the dictionary to monotone sequences"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
  evidence: semantic-source
deps: [def-complete-ordered-field, def-real-order, def-interval, def-monotone-sequence, def-sequence, def-ordered-field, def-injection-surjection-bijection]
justified_by: []
aliases: [def-monotone-real-function, def-strictly-monotone]
landmark: true
short: "monotone real function"
verification:
  audited: 2026-07-28
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Monotonic function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotonic_function"
    - title: "Monotone Functions (Analysis WebNotes)"
      url: "https://mathcs.org/analysis/reals/cont/defs/monofun.html"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]], [[def-ordered-field]]) with its order
([[def-real-order]]). Let $A \subseteq \mathbb{R}$ and let
$f : A \to \mathbb{R}$. Then $f$ is:

- **nondecreasing** when $f(x) \le f(y)$ for all $x, y \in A$ with $x \le y$;
- **increasing**, or *strictly increasing*, when $f(x) < f(y)$ for all
  $x, y \in A$ with $x < y$;
- **nonincreasing** when $f(x) \ge f(y)$ for all $x, y \in A$ with $x \le y$;
- **decreasing**, or *strictly decreasing*, when $f(x) > f(y)$ for all
  $x, y \in A$ with $x < y$;
- **monotone** when it is nondecreasing or nonincreasing;
- **strictly monotone** when it is increasing or decreasing.

The naming follows the convention of [[def-monotone-sequence]], which is the
convention of this library throughout: *increasing* is the strict notion and
*nondecreasing* the weak one.

**An increasing function is nondecreasing, and a decreasing function is
nonincreasing.** For $x \le y$ either $x < y$, and then $f(x) < f(y)$, hence
$f(x) \le f(y)$; or $x = y$, and then $f(x) = f(y)$. The same argument with the
inequalities reversed gives the second claim. So strictly monotone implies
monotone.

**A strictly monotone function is injective**
([[def-injection-surjection-bijection]]). Let $f$ be increasing and let
$x, y \in A$ with $x \ne y$. By trichotomy either $x < y$, and then
$f(x) < f(y)$, or $y < x$, and then $f(y) < f(x)$; in both cases
$f(x) \ne f(y)$. The decreasing case is the same argument. The converse fails,
and the failure is not exotic: a continuous injection on an interval *is*
strictly monotone ([[thm-continuous-injection-on-an-interval-is-strictly-monotone]]),
but on a domain that is not an interval it need not be.

**Negation exchanges the two directions.** For $g := -f$, that is
$g(x) := -f(x)$, the four conditions above are exchanged in pairs: $f$ is
nondecreasing exactly when $g$ is nonincreasing, and $f$ is increasing exactly
when $g$ is decreasing, because $u \le v$ holds exactly when $-v \le -u$
([[def-ordered-field]]). Several proofs below use this to reduce a nonincreasing
case to a nondecreasing one.

**Monotone on a set, not at a point.** All six conditions are conditions on the
whole of $A$; unlike continuity ([[def-continuity-real]]) there is no pointwise
version, and none is used in this library. The domain $A$ is an arbitrary subset
of $\mathbb{R}$; where a result needs $A$ to be an interval
([[def-interval]]) it says so, and the hypothesis is never decoration.

### The dictionary to monotone sequences

A sequence of reals is a function $x : \mathbb{N} \to \mathbb{R}$
([[def-sequence]]), and [[def-monotone-sequence]] calls it nondecreasing when
$x_j \le x_k$ for all $j \le k$, increasing when $x_j < x_k$ for all $j < k$,
and so on. Those are **the same four conditions as above**, read with the
ordered set $\mathbb{N}$ in place of the ordered subset $A \subseteq \mathbb{R}$
and with the comparison of indices in place of the comparison of arguments. So
nothing new is introduced here for sequences, and the two vocabularies may be
used interchangeably: the words *nondecreasing*, *increasing*, *nonincreasing*,
*decreasing*, *monotone* and *strictly monotone* mean the corresponding
condition on the domain at hand.

One consequence is used repeatedly, and it has to be stated carefully because
composition does **not** simply preserve the four words. Let $(x_k)$ be a
**nondecreasing** sequence with $x_k \in A$ for every $k$, so that $j \le k$ gives
$x_j \le x_k$. Then:

- if $f$ is nondecreasing, $(f(x_k))$ is nondecreasing, since $f(x_j) \le f(x_k)$;
- if $f$ is nonincreasing, $(f(x_k))$ is **nonincreasing**, since
  $f(x_j) \ge f(x_k)$.

So along a nondecreasing sequence the composite inherits the direction of $f$;
and with $(x_k)$ increasing and $f$ increasing, $(f(x_k))$ is increasing, while
with $(x_k)$ increasing and $f$ decreasing, $(f(x_k))$ is decreasing.

**Along a nonincreasing sequence the direction is reversed, not inherited.** If
$(x_k)$ is nonincreasing and $f$ is nonincreasing, then $j \le k$ gives
$x_j \ge x_k$ and hence $f(x_j) \le f(x_k)$: the composite is **nondecreasing**.
The witness is $f(x) = -x$ on $A = \mathbb{R}$ with $x_k = -k$, where both $f$ and
$(x_k)$ are decreasing and $f(x_k) = k$ is increasing. Two order-reversing maps
compose to an order-preserving one, exactly as for the four words applied to
functions.
````

### `def-series`

````markdown
---
id: def-series
kind: definition
title: "Series, partial sums, convergence and the sum, divergence, and the tail series"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-finite-sum, def-sequence, def-real-limit, def-real-numbers, lem-limit-unique]
justified_by: []
aliases: []
landmark: true
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
    - title: "Series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Series_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §7.2"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field ([[def-real-numbers]]) and
a **sequence of reals** is a function $a : \mathbb{N} \to \mathbb{R}$
([[def-sequence]]), written $(a_k)$; recall that $\mathbb{N}$ contains $0$.

**Partial sums.** Let $(a_k)$ be a sequence of reals. Its **sequence of partial
sums** is

$$s_n \;:=\; \sum_{k < n} a_k \qquad (n \in \mathbb{N}),$$

the finite sum of [[def-finite-sum]]. In particular $s_0 = 0$, the empty sum, and
$s_{n+1} = s_n + a_n$ for every $n$, those being exactly the two recursion clauses
that define the finite sum. Note that $s_n$ is the sum of the $n$ terms
$a_0, \dots, a_{n-1}$, so the index $n$ counts terms rather than naming the last
one.

**Convergence, the sum, divergence.** The **series** of $(a_k)$, written
$\sum a_k$, **converges** when the sequence $(s_n)$ of partial sums converges
([[def-real-limit]]), and then the **sum of the series** is

$$\sum_{k=0}^{\infty} a_k \;:=\; \lim_{n} s_n .$$

The series **diverges** when $(s_n)$ does not converge. A convergent sequence of
reals has exactly one limit ([[lem-limit-unique]]), so the displayed symbol names
a single real number and nothing further has to be checked for it to be
well defined.

**Series with a general starting index.** Let $m \in \mathbb{N}$ and let $a$ be a
function on $\{\, k \in \mathbb{N} : k \ge m \,\}$, which we call a **family from
$m$** and write $(a_k)_{k \ge m}$. The series

$$\sum_{k \ge m} a_k$$

is by definition the series of the sequence $b_j := a_{j + m}$,
$j \in \mathbb{N}$, which is a genuine sequence of reals; it converges exactly
when that series converges, and its sum is then written
$\sum_{k = m}^{\infty} a_k$. Its partial sums are

$$\sum_{k=m}^{n-1} a_k \;=\; \sum_{j < n-m} a_{m+j} \qquad (n \ge m),$$

in the notation of [[def-finite-sum]], the value at $n = m$ being the empty sum
$0$. A sequence on $\mathbb{N}$ is the case $m = 0$, and the two readings of
$\sum a_k$ agree there, since $b_j = a_j$.

**This clause is not a convenience.** Sequences in this library are functions on
$\mathbb{N}$ and $\mathbb{N}$ contains $0$ ([[def-sequence]]), while many of the
classical series are built from expressions that are undefined at the index $0$:
$1/k$, $1/k^{p}$ and $|a_k|^{1/k}$ all require $k \ge 1$. Writing such a series as
$\sum_{k \ge 1} a_k$ names an honest object, whereas writing it as a sequence on
$\mathbb{N}$ would require a value at an index where the defining expression has
none. Every statement on this page says which starting index it uses.

**Tail series.** For $N \in \mathbb{N}$, the **$N$-th tail series** of
$\sum a_k$ is $\sum_{k \ge N} a_k$, that is the series of the $N$-th tail
$a^{(N)}$ of [[def-sequence]], whose terms are $a^{(N)}_j = a_{j+N}$. The
$0$-th tail series is the series itself.

## Remarks

- **"Diverges" here means "does not converge", and nothing more.** A divergent
  series may have partial sums that run away to $+\infty$, or to $-\infty$, or
  that oscillate without settling anywhere. The three behaviours are not
  distinguished by the word, and no statement on this page uses "diverges" to
  mean "the partial sums are unbounded" unless it says so.

- **The symbol $\sum_{k=0}^{\infty} a_k$ is defined only for a convergent
  series.** It denotes a real number, not a formal object, and it is illegitimate
  to write it down before convergence has been established. Where a proof needs
  to speak of the series without knowing whether it converges, it speaks of
  $(a_k)$ and of $(s_n)$.

- **Two indices, doing different work.** The index $k$ runs over the terms and is
  bound; the index $n$ runs over the partial sums and is the variable in which the
  limit is taken. Confusing them is the commonest slip in the subject, and it is
  the reason the definition above fixes $s_n = \sum_{k<n} a_k$ rather than
  $\sum_{k \le n} a_k$: with this choice the recursion $s_{n+1} = s_n + a_n$ is
  the one supplied by [[def-finite-sum]], with no shift anywhere.
````

### `lem-countable-iff-surjection-from-n`

````markdown
---
id: lem-countable-iff-surjection-from-n
kind: lemma
title: "A nonempty set is at most countable iff it is a surjective image of $\\mathbb{N}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-countable, thm-well-ordering-principle, def-injection-surjection-bijection, lem-subset-of-countable, def-equinumerous, def-natural-numbers, def-nat-order, lem-nat-order-is-membership]
justified_by: []
aliases: []
landmark: false
short: "countable iff enumerable by a surjection"
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
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "J. Lebl, Basic Analysis: Introduction to Real Analysis, basic set theory"
      url: "https://www.jirka.org/ra/html/sec_basicset.html"
    - title: "Countable set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countable_set"
    - title: "T. Tao, Analysis I, 3rd ed., §8.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $A$ be a nonempty set. Then $A$ is at most countable ([[def-countable]]) if
and only if there is a surjection $s : \mathbb{N} \to A$
([[def-injection-surjection-bijection]]).

Moreover, from any such surjection an injection $A \to \mathbb{N}$ is obtained
explicitly, without any choice, by

$$j(a) := \min\{\, k \in \mathbb{N} : s(k) = a \,\}.$$

This is the working form of countability used everywhere below: to prove a
nonempty set countable it suffices to list its elements, repetitions and all.

**No choice principle is used.** The backward direction is where an appeal to
choice would be natural ("for each $a$ pick some $k$ with $s(k) = a$") and it is
avoided outright, because $\min$ is canonical: every nonempty set of naturals has
a *least* element ([[thm-well-ordering-principle]]), so $j(a)$ is determined by
$a$ and $s$ alone.

## Facts & Assumptions

**Given:** A nonempty set $A$. For $a \in A$ and a function $s : \mathbb{N} \to A$ write $s^{-1}(\{a\}) = \{\, k \in \mathbb{N} : s(k) = a \,\}$.

[L1] $A$ is at most countable when $A \approx n$ for some $n \in \mathbb{N}$ or $A \approx \mathbb{N}$; $A \approx 0 = \varnothing$ holds only for $A = \varnothing$ ([[def-countable]], [[def-natural-numbers]]).

[L2] Bijections, injections, surjections, images and the symmetry and transitivity of $\approx$; an injection is a bijection onto its image ([[def-injection-surjection-bijection]], [[def-equinumerous]]).

[L3] Well-ordering: every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L4] Every subset of an at most countable set is at most countable ([[lem-subset-of-countable]]).

[L5] For naturals, $k \in n \iff k < n$, so a natural number $n$ is the set $\{\, k \in \mathbb{N} : k < n \,\}$ of naturals below it; in particular $0 \in n$ whenever $n \ne 0$ ([[lem-nat-order-is-membership]], proved earlier on this page from the additive order of [[def-nat-order]] on the von Neumann naturals of [[def-natural-numbers]]).

## Proof

**Proof technique:** direct.

1.1 For the forward implication assume $A$ is at most countable; since $A \ne \varnothing$ we have $A \approx \mathbb{N}$, or $A \approx n$ for some $n \in \mathbb{N}$ with $n \ne 0$, and in either case fix a bijection $\psi$ from $\mathbb{N}$, respectively from $n$, onto $A$. [assume-hyp, given, L1, L2]

1.2 For the converse implication assume a surjection $s : \mathbb{N} \to A$ is given. [assume-hyp]

2.1 If $\psi$ is defined on $\mathbb{N}$ it is itself a surjection $\mathbb{N} \to A$; if $\psi$ is defined on $n \ne 0$, then $0 \in n$ by [L5] and the function $s_\psi : \mathbb{N} \to A$ with $s_\psi(k) = \psi(k)$ for $k < n$ and $s_\psi(k) = \psi(0)$ for $k \ge n$ is a surjection, since every element of $A$ is $\psi(k)$ for some $k \in n$. In both cases a surjection $\mathbb{N} \to A$ exists. [step 1.1, L2, L5, construct]

2.2 For each $a \in A$ the set $s^{-1}(\{a\})$ is a nonempty subset of $\mathbb{N}$, because $s$ is surjective, so [L3] provides its least element and $j(a) := \min s^{-1}(\{a\})$ defines a function $j : A \to \mathbb{N}$; no selection is made, since the least element is uniquely determined. [step 1.2, L3, construct]

3.1 $j$ is injective: if $j(a) = j(a') = k$ then $s(k) = a$ and $s(k) = a'$, because $j(a) \in s^{-1}(\{a\})$ and $j(a') \in s^{-1}(\{a'\})$, so $a = a'$. [step 2.2, L2]

4.1 Hence $j$ is a bijection of $A$ onto $j[A] \subseteq \mathbb{N}$, so $A \approx j[A]$; the subset $j[A]$ of the at most countable set $\mathbb{N}$ is at most countable by [L4], and transitivity of $\approx$ transfers this to $A$. [step 3.1, L1, L2, L4]

5.1 The forward implication is step 2.1 and the converse is step 4.1, so for nonempty $A$ countability and the existence of a surjection $\mathbb{N} \to A$ are equivalent, with $j$ of step 2.2 the promised injection $A \to \mathbb{N}$. [step 2.1, step 3.1, step 4.1] ∎

## Remarks

- The hypothesis $A \ne \varnothing$ cannot be dropped in the forward direction: $\varnothing$ is finite, hence at most countable, but no function $\mathbb{N} \to \varnothing$ exists at all. The converse direction needs no such hypothesis, since a surjection onto $A$ already forces $A \ne \varnothing$.

- Combining the two directions: a nonempty $A$ is at most countable if and only if $A \preceq \mathbb{N}$ ([[def-equinumerous]]). The forward direction of that reformulation is immediate, and the backward direction is step 4.1.

- The lemma is what licenses the informal phrase "enumerate $A$ as $a_0, a_1, a_2, \dots$, possibly with repetitions". Repetitions are exactly what distinguishes a surjection from a bijection, and allowing them is what makes the criterion easy to apply: the enumerations built in [[thm-product-of-countable]] and [[thm-countable-union-of-countable]] repeat.
````

### `lem-rat-embeds-dense`

````markdown
---
id: lem-rat-embeds-dense
kind: lemma
title: "The rationals embed densely in the reals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-real-numbers, def-real-order, thm-reals-ordered-field, thm-reals-field, def-rational-cauchy-sequence, thm-rat-ordered-field, thm-rat-field]
aliases: []
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
    - title: "T. Tao, Analysis I, 3rd ed., §5.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Dense set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dense_set"
pipeline_run: null
---

## Statement

The map $q \mapsto \hat q$ ([[def-real-numbers]]) is an embedding of ordered
fields. Every real is approximated by rationals: for $x \in \mathbb{R}$ and
rational $\varepsilon > 0$ there is $q \in \mathbb{Q}$ with
$|x - \hat q| < \hat\varepsilon$. Consequently, strictly between any two
reals lies a rational.

## Facts & Assumptions

**Given:** A real $x = [(a_n)]$ and a rational $\varepsilon > 0$.

[L1] The orders of $\mathbb{Q}$ and $\mathbb{R}$; ordered-field arithmetic ([[thm-rat-ordered-field]], [[thm-reals-ordered-field]]).

[L2] Field arithmetic in $\mathbb{Q}$: $\varepsilon/2, \delta/4$ are positive rationals, and every nonzero rational $q$ has a reciprocal $1/q$ with $q \cdot (1/q) = 1$ ([[thm-rat-field]]).

[L3] Cauchy definition ([[def-rational-cauchy-sequence]]).

[L4] Real positivity via eventual rational lower bounds ([[def-real-order]]).

[L5] $\mathbb{R} = \mathcal{C}/\mathcal{N}$ is a field ([[thm-reals-field]]), and $0_{\mathbb{R}} = \hat 0$, $1_{\mathbb{R}} = \hat 1$ are the classes of the constant sequences ([[def-real-numbers]]). A multiplicative inverse there is unique: if $ab = 1_{\mathbb{R}} = ac$ then $b = b(ac) = (ba)c = c$.

## Proof

**Proof technique:** direct.

1.1 Embedding: constant sequences are Cauchy; $\hat q = \hat r$ iff the constant $q - r$ is null iff $q = r$; operations match termwise; and $q < r$ gives the constant lower bound $r - q > 0$, so $\hat q < \hat r$ and order is preserved and reflected. [L1, L4]

1.2 Fix $N$ with $|a_m - a_n| < \varepsilon/2$ for all $m, n \ge N$, and set $q = a_N$. [L3, L2]

2.1 The difference $\hat q - x$ has representative $(a_N - a_n)$ with $|a_N - a_n| < \varepsilon/2$ for $n \ge N$; hence both $\hat\varepsilon - (x - \hat q)$ and $\hat\varepsilon - (\hat q - x)$ have representatives eventually $> \varepsilon/2$, so both are positive: $|x - \hat q| < \hat\varepsilon$. [step 1.2, L4, L1]

2.2 Inverses: let $q$ be a nonzero rational. Then $\hat q \ne \hat 0 = 0_{\mathbb{R}}$ by the injectivity of step 1.1, and $1/q$ exists in $\mathbb{Q}$ by [L2]; since the operations match termwise (step 1.1), $\hat q \cdot \widehat{1/q} = \widehat{q \cdot (1/q)} = \hat 1 = 1_{\mathbb{R}}$. Inverses in $\mathbb{R}$ are unique by [L5], so $(\hat q)^{-1} = \widehat{1/q}$: the embedding preserves reciprocals. [step 1.1, L2, L5]

3.1 Density: let $x < y$; pick $\delta > 0$ rational and $N$ with the representative of $y - x$ eventually $> \delta$; set $\varepsilon = \delta/4$ and pick $q$ with $|x - \hat q| < \hat\varepsilon$; then $q' = q + 2\varepsilon$ satisfies $\hat q' - x \ge -\hat\varepsilon + 2\hat\varepsilon = \hat\varepsilon > 0$ and $y - \hat q' \ge \hat\delta - \hat\varepsilon - 2\hat\varepsilon = \hat\delta/4 > 0$, so $x < \hat q' < y$. [step 2.1, L4, L1, L2]

4.1 The rationals embed as an ordered subfield — injectively, preserving the order in both directions, the ring operations, and reciprocals — and they approximate every real arbitrarily well and separate any two reals. [step 1.1, step 2.2, step 3.1] ∎
````

### `thm-froda`

````markdown
---
id: thm-froda
kind: theorem
title: "Froda's theorem: the set of discontinuities of a monotone function on an interval is at most countable, the injection into $\\mathbb{N}$ being built from one fixed enumeration of the rationals by least index, so no choice principle is used"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
  evidence: exact-source
deps: [def-monotone-function, thm-monotone-discontinuities-are-jumps, thm-monotone-one-sided-limits-exist, def-classification-of-discontinuities, def-countable, thm-rationals-countable, lem-rat-embeds-dense, lem-subset-of-countable, thm-well-ordering-principle, def-interval, def-injection-surjection-bijection, def-equinumerous, def-continuity-real]
justified_by: []
aliases: [thm-froda-countable-discontinuities]
landmark: true
short: "Froda: countably many discontinuities"
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
    - title: "Froda's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Froda%27s_theorem"
    - title: "Classification of discontinuities (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Classification_of_discontinuities"
    - title: "Discontinuities of monotone functions (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Discontinuities_of_monotone_functions"
pipeline_run: null
---

## Statement

Let $I \subseteq \mathbb{R}$ be order-convex ([[def-interval]]) and let
$f : I \to \mathbb{R}$ be monotone ([[def-monotone-function]]). Then the set

$$D \;:=\; \{\, c \in I : f \text{ is discontinuous at } c \,\}$$

([[def-classification-of-discontinuities]]) is **at most countable**
([[def-countable]]).

More precisely, the proof exhibits an injection $J : D \to \mathbb{N}$
([[def-injection-surjection-bijection]]) built from one fixed enumeration of the
rationals: at a discontinuity $c$ interior to $I$ the value $J(c)$ is read off
the **least index** of a rational lying in the gap
$\bigl(\lim_{x \to c^{-}} f(x),\ \lim_{x \to c^{+}} f(x)\bigr)$, which is a
nonempty open interval by [[thm-monotone-discontinuities-are-jumps]]. The map
$J$ is therefore determined by $f$ and by the fixed enumeration, and **no choice
principle is used**: least indices are canonical by
[[thm-well-ordering-principle]], and nothing anywhere in the proof is selected
without being determined.

## Facts & Assumptions

**Given:** An order-convex $I \subseteq \mathbb{R}$ and a monotone $f : I \to \mathbb{R}$; and $\mathbb{Q}$ denotes the canonical copy of the rationals inside $\mathbb{R}$.

[A1] $I$ is order-convex: $x, y \in I$ and $x \le z \le y$ imply $z \in I$ ([[def-interval]]).

[L1] A nondecreasing $f$ on an order-convex $I$ has, at every $c \in I$, each well-posed one-sided limit; and if both $I^{-} = I \cap (-\infty,c)$ and $I^{+} = I \cap (c,\infty)$ are nonempty then $\lim_{x \to c^{-}} f(x) = \sup\{f(x) : x \in I, x < c\}$ and $\lim_{x \to c^{+}} f(x) = \inf\{f(x) : x \in I, x > c\}$ ([[thm-monotone-one-sided-limits-exist]]).

[L2] For a nondecreasing $f$ on an order-convex $I$ and a point $c$ with both $I^{-}$ and $I^{+}$ nonempty, $f$ is discontinuous at $c$ if and only if $\lim_{x \to c^{-}} f(x) < \lim_{x \to c^{+}} f(x)$ ([[thm-monotone-discontinuities-are-jumps]]).

[L3] $\mathbb{Q} \approx \mathbb{N}$ ([[thm-rationals-countable]]) and the map $q \mapsto \hat q$ embeds $\mathbb{Q}$ in $\mathbb{R}$ injectively ([[lem-rat-embeds-dense]]), so composing a bijection $\mathbb{N} \to \mathbb{Q}$ with that embedding gives a bijection $e : \mathbb{N} \to \mathbb{Q}_{\mathbb{R}}$ onto the canonical copy of the rationals inside $\mathbb{R}$; and strictly between any two distinct reals there lies a point of $\mathbb{Q}_{\mathbb{R}}$ ([[lem-rat-embeds-dense]], [[def-equinumerous]], [[def-injection-surjection-bijection]]).

[L4] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L5] Every subset of $\mathbb{N}$ is at most countable, and a set in bijection with an at most countable set is at most countable ([[lem-subset-of-countable]], [[def-countable]], [[def-equinumerous]], [[def-injection-surjection-bijection]]).

[L6] $f$ is discontinuous at $c$ exactly when it is not continuous there, and $|(-f)(x) - (-f)(c)| = |f(x) - f(c)|$, so $f$ and $-f$ have exactly the same points of discontinuity ([[def-continuity-real]], [[def-monotone-function]]).

## Proof

**Proof technique:** direct.

1.1 It is enough to treat a nondecreasing $f$: if $f$ is nonincreasing then $-f$ is nondecreasing and has the same discontinuity set, so the conclusion for $-f$ is the conclusion for $f$. Assume from here on that $f$ is nondecreasing. [L6]

1.2 Fix once and for all a bijection $e : \mathbb{N} \to \mathbb{Q}_{\mathbb{R}}$; everything below is defined in terms of $f$, $I$ and this one function. [L3, choose]

1.3 Call $c \in I$ **interior** when both $I^{-}$ and $I^{+}$ are nonempty, and write $D_{0}$ for the set of interior points of $I$ at which $f$ is discontinuous. A point of $I$ that is not interior has $I^{-} = \varnothing$, and is then a least element of $I$, or $I^{+} = \varnothing$, and is then a greatest element of $I$; a subset of $\mathbb{R}$ has at most one least and at most one greatest element, so $D \setminus D_{0}$ has at most two elements. [A1]

2.1 For $c \in D_{0}$ put $L^{-}(c) := \lim_{x \to c^{-}} f(x)$ and $L^{+}(c) := \lim_{x \to c^{+}} f(x)$, both of which exist, and note $L^{-}(c) < L^{+}(c)$. [step 1.3, L1, L2]

2.2 Let $c, c' \in D_{0}$ with $c < c'$. Take $t := e(k)$ for the least $k$ with $c < e(k) < c'$, which exists because a point of $\mathbb{Q}_{\mathbb{R}}$ lies strictly between $c$ and $c'$; then $t \in I$, since $c, c' \in I$ and $I$ is order-convex. [step 1.3, A1, L3, L4]

3.1 For $c \in D_{0}$ the set $K(c) := \{\, k \in \mathbb{N} : L^{-}(c) < e(k) < L^{+}(c) \,\}$ is nonempty, since a point of $\mathbb{Q}_{\mathbb{R}}$ lies strictly between the two distinct reals $L^{-}(c)$ and $L^{+}(c)$ and $e$ is onto $\mathbb{Q}_{\mathbb{R}}$; so $j(c) := \min K(c)$ is a well-defined natural number, determined by $c$, $f$ and $e$ alone. [step 2.1, L3, L4]

3.2 With $c < t < c'$ as in step 2.2: $L^{+}(c) = \inf\{f(x) : x \in I, x > c\} \le f(t)$ because $t$ is one of the points in that set, and $f(t) \le \sup\{f(x) : x \in I, x < c'\} = L^{-}(c')$ for the same reason on the other side. Hence $L^{+}(c) \le L^{-}(c')$. [step 2.2, L1]

4.1 The two open intervals $(L^{-}(c), L^{+}(c))$ and $(L^{-}(c'), L^{+}(c'))$ are therefore disjoint, so no point of $\mathbb{Q}_{\mathbb{R}}$ lies in both, so $e(j(c)) \ne e(j(c'))$ and hence $j(c) \ne j(c')$. Since $c < c'$ was an arbitrary pair of distinct elements of $D_{0}$, the map $j : D_{0} \to \mathbb{N}$ is injective. [step 3.1, step 3.2]

5.1 Define $J : D \to \mathbb{N}$ by $J(c) := 2\,j(c) + 1$ for $c \in D_{0}$; $J(c) := 0$ if $c \in D \setminus D_{0}$ is a least element of $I$; and $J(c) := 2$ if $c \in D \setminus D_{0}$ is a greatest element of $I$ and not a least one. Then $J$ is injective: it is injective on $D_{0}$ by step 4.1, it separates the at most two points of $D \setminus D_{0}$ from each other, and its values on $D_{0}$ are odd while its values off $D_{0}$ are even. [step 1.3, step 4.1, construct]

6.1 Consequently $J$ is a bijection from $D$ onto the subset $J[D] \subseteq \mathbb{N}$, which is at most countable; countability transfers along that bijection, so $D$ is at most countable. [step 5.1, L5] ∎

## Remarks

- **The bound is attained.** Froda's theorem gives no better bound than *at most countable*, and none is available: for every at most countable $E \subseteq \mathbb{R}$ there is a bounded nondecreasing function on $\mathbb{R}$ whose discontinuity set is exactly $E$ ([[thm-monotone-with-prescribed-discontinuity-set]]). Taking $E = \mathbb{Q}$ gives a nondecreasing function discontinuous at every rational and continuous at every irrational.

- **What the choice-freedom rests on.** Two canonical selections, and nothing else: one fixed bijection $e : \mathbb{N} \to \mathbb{Q}$, produced by [[thm-rationals-countable]], whose own proof spends no choice principle; and the least element of a nonempty set of naturals ([[thm-well-ordering-principle]]). Replacing "least index" by "some index" would turn step 3.1 into an application of a choice principle over the possibly uncountable index set $D_{0}$.

- **Monotonicity is doing all the work, not continuity of anything.** The only property of $f$ used after step 1.1 is the inequality $L^{+}(c) \le L^{-}(c')$ of step 3.2, which says that the gaps opened by distinct discontinuities are laid out in the same order as the discontinuities themselves and therefore do not overlap. A function that is not monotone can be discontinuous everywhere ([[thm-dirichlet-and-thomae-continuity-sets]]).
````

### `thm-geometric-series`

````markdown
---
id: thm-geometric-series
kind: theorem
title: "For $|r| < 1$, $\\sum_{k \\ge 0} r^k = 1/(1-r)$, and for $|r| \\ge 1$ the series diverges"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-series, lem-power-difference-factorisation, lem-geometric-sequence-null, lem-nth-term-test, def-integer-power, thm-algebra-of-limits, def-finite-sum, lem-of-abs-value, lem-power-monotone, thm-induction-principle, def-real-limit]
justified_by: []
aliases: []
landmark: true
proof_strategy: cases
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
    - title: "Geometric series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Geometric_series"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $r \in \mathbb{R}$ and let $r^k$ be the integer power ([[def-integer-power]]),
so that $r^0 = 1$ for every $r$, including $r = 0$.

1. If $|r| < 1$ then the series $\sum r^k$ converges ([[def-series]]) and
   $$\sum_{k=0}^{\infty} r^{k} \;=\; \frac{1}{1-r} .$$
2. If $|r| \ge 1$ then $\sum r^k$ diverges.

The series starts at $k = 0$ and its first term is $r^0 = 1$; in particular
$\sum_{k=0}^{\infty} 2^{-k} = 2$, while the series starting at $k = 1$ sums to
$1$. Which starting index is meant has to be said, and it is said here.

## Facts & Assumptions

**Given:** A real number $r$, the integer powers $r^k$ ([[def-integer-power]]), and the partial sums $s_n = \sum_{k<n} r^k$ of $\sum r^k$ ([[def-series]], [[def-finite-sum]]).

[L1] Factorisation of a difference of powers: for $a, b \in \mathbb{R}$ and natural $n \ge 1$, $b^n - a^n = (b-a)\sum_{k=0}^{n-1} a^k b^{\,n-1-k}$ ([[lem-power-difference-factorisation]]).

[L2] For $|r| < 1$ the sequence $(r^k)$ is null, that is $r^k \to 0$ ([[lem-geometric-sequence-null]]).

[L3] Algebra of limits: sums, differences and quotients of convergent sequences converge to the corresponding combination, the quotient rule requiring a nonzero limit and nonzero denominators ([[thm-algebra-of-limits]], [[def-real-limit]]).

[L4] Absolute value: $|xy| = |x|\,|y|$, $|x| \ge 0$, and $|x| = 0$ exactly when $x = 0$; also $|1| = 1$, since $1 > 0$ ([[lem-of-abs-value]]).

[L5] Powers and order: $a^0 = 1$ for every $a$; if $a \ge 1$ and $n \ge 1$ then $a^n \ge a \ge 1$; and $1^n = 1$ for every $n$ ([[lem-power-monotone]], [[def-integer-power]]).

[L6] The principle of induction ([[thm-induction-principle]]).

[L7] If a series converges then its terms tend to $0$ ([[lem-nth-term-test]]).

[L8] Notation of [[def-finite-sum]]: $\sum_{k=0}^{n-1} x_k$ is $\sum_{k<n} x_k$, and the empty sum $\sum_{k<0} x_k$ is $0$.

## Proof

**Proof technique:** cases.

1.1 Assume $|r| < 1$. [assume-case lt]

1.2 Assume instead $|r| \ge 1$. [assume-case ge]

1.3 For every natural $n \ge 1$, applying [L1] with $b = 1$ and $a = r$ gives $1 - r^n = (1-r)\sum_{k=0}^{n-1} r^k \cdot 1^{\,n-1-k} = (1-r)\,s_n$, using $1^m = 1$ and the notation of [L8]. [L1, L5, L8]

1.4 At $n = 0$ the identity $1 - r^n = (1-r)s_n$ also holds, both sides being $0$ because $r^0 = 1$ and $s_0$ is the empty sum. [L5, L8]

2.1 In the case $|r| < 1$ we have $r \ne 1$, since $|1| = 1$ and $|r| < 1$; hence $1 - r \ne 0$. [step 1.1, L4, algebra]

2.2 In the case $|r| \ge 1$, an induction gives $|r^k| = |r|^k$ for every $k \in \mathbb{N}$: at $k = 0$ both sides are $1$, and if $|r^k| = |r|^k$ then $|r^{k+1}| = |r^k \cdot r| = |r^k|\,|r| = |r|^k |r| = |r|^{k+1}$. [step 1.2, L4, L5, L6]

2.3 In the case $|r| \ge 1$ we get $|r|^k \ge 1$ for every $k \in \mathbb{N}$: at $k = 0$ this reads $1 \ge 1$, and for $k \ge 1$ it is the comparison $|r|^k \ge |r| \ge 1$. [step 1.2, L5]

3.1 In the case $|r| < 1$, dividing by $1 - r \ne 0$ gives $s_n = (1 - r^n)/(1-r)$ for every $n \in \mathbb{N}$. [step 2.1, step 1.3, step 1.4, algebra]

3.2 In the case $|r| \ge 1$, combining the two previous steps gives $|r^k - 0| = |r^k| = |r|^k \ge 1$ for every $k \in \mathbb{N}$. [step 2.2, step 2.3]

4.1 In the case $|r| < 1$ the sequence $(r^n)$ is null, so $1 - r^n \to 1$ and therefore $s_n \to 1/(1-r)$, the denominator being the nonzero constant $1-r$; hence $\sum r^k$ converges with sum $1/(1-r)$, which is claim 1. [step 1.1, step 3.1, step 2.1, L2, L3]

4.2 In the case $|r| \ge 1$ the sequence $(r^k)$ does not converge to $0$, since the rational tolerance $\varepsilon = 1$ admits no index $K$ with $|r^k - 0| < 1$ for all $k \ge K$; so by the term test $\sum r^k$ diverges, which is claim 2. [step 3.2, L7]

5.1 The two cases $|r| < 1$ and $|r| \ge 1$ exhaust the possibilities, since the order on $\mathbb{R}$ is total, so claims 1 and 2 together cover every real $r$. [step 4.1, step 4.2, cases-exhaustive] ∎

## Remarks

- **The divergence half needs no separate treatment of $r = 1$ and $r = -1$.** Both are covered by $|r| \ge 1$, and the single reason is the same in every case: the terms have absolute value at least $1$, so they cannot tend to $0$. For $r = 1$ the partial sums are $s_n = n$ and run to $+\infty$; for $r = -1$ they oscillate between $0$ and $1$. The theorem says only that neither converges, which is all that "diverges" means here ([[def-series]]).

- **Why the identity is proved at $n = 0$ separately.** [[lem-power-difference-factorisation]] requires $n \ge 1$, since its right-hand side is a sum over $k < n$ of a term involving $b^{\,n-1-k}$, and $n-1$ is not a natural number at $n = 0$. The identity is still true at $n = 0$, but by inspection of two empty objects rather than by that lemma, and step 1.4 says so rather than letting the reader assume the citation covers it.
````

### `thm-monotone-with-prescribed-discontinuity-set`

````markdown
---
id: thm-monotone-with-prescribed-discontinuity-set
kind: theorem
title: "Converse to Froda: for every at most countable $E \\subseteq \\mathbb{R}$ there is a bounded nondecreasing $f : \\mathbb{R} \\to \\mathbb{R}$ whose set of discontinuities is exactly $E$, every one of them a jump"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
  evidence: semantic-source
deps: [def-monotone-function, def-classification-of-discontinuities, thm-monotone-one-sided-limits-exist, thm-monotone-discontinuities-are-jumps, thm-froda, def-countable, lem-countable-iff-surjection-from-n, def-series, thm-geometric-series, thm-nonnegative-series-bounded-partial-sums, lem-series-tail-invariance, def-finite-sum, lem-finite-sum-laws, def-continuity-real, def-bounded-set, def-integer-power, def-real-limit, lem-finite-set-has-max, lem-rat-embeds-dense, def-interval, def-max-min]
justified_by: []
aliases: [thm-prescribed-jump-construction]
landmark: true
short: "every countable set is a discontinuity set"
proof_strategy: constructive
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
    - title: "Classification of discontinuities (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Classification_of_discontinuities"
    - title: "Froda's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Froda%27s_theorem"
    - title: "Discontinuities of monotone functions (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Discontinuities_of_monotone_functions"
pipeline_run: null
---

## Statement

Let $E \subseteq \mathbb{R}$ be at most countable ([[def-countable]]). Then
there is a function $f : \mathbb{R} \to \mathbb{R}$ such that

1. $f$ is nondecreasing ([[def-monotone-function]]) and $0 \le f(x) \le 1$ for
   every real $x$, so $f$ is bounded ([[def-bounded-set]]);
2. $f$ is continuous at every $x \notin E$ and discontinuous at every $x \in E$
   ([[def-continuity-real]]), so the discontinuity set of $f$ is exactly $E$;
3. every discontinuity of $f$ is a **jump**
   ([[def-classification-of-discontinuities]]), with
   $\lim_{x \to c^{-}} f(x) = f(c) < \lim_{x \to c^{+}} f(x)$ at every $c \in E$.

Together with [[thm-froda]] this settles the question completely: the sets that
occur as discontinuity sets of monotone functions on $\mathbb{R}$ are **exactly**
the at most countable ones.

**The construction.** For $E = \varnothing$ take $f := 0$. Otherwise fix a
surjection $s : \mathbb{N} \to E$ ([[lem-countable-iff-surjection-from-n]]) and
set

$$f(x) \;:=\; \sum_{k=0}^{\infty} a_{k}(x), \qquad a_{k}(x) := \begin{cases} 1/2^{\,k+1} & \text{if } s(k) < x,\\ 0 & \text{otherwise,}\end{cases}$$

([[def-series]], [[def-integer-power]]): the mass $1/2^{\,k+1}$ is placed at the
point $s(k)$ and is collected by $f$ strictly to the right of it. Repetitions in
the enumeration are harmless; they only make the jump at a point larger.

## Facts & Assumptions

**Given:** An at most countable $E \subseteq \mathbb{R}$.

[L1] A nonempty at most countable set is the image of a surjection $s : \mathbb{N} \to E$ ([[lem-countable-iff-surjection-from-n]], [[def-countable]]).

[L2] A series of nonnegative terms converges if and only if its partial sums are bounded above, and its sum is then the supremum of its partial sums; in particular every partial sum is at most the sum ([[thm-nonnegative-series-bounded-partial-sums]], [[def-series]], [[def-bounded-set]]).

[L3] Finite sums: $\sum_{k<n}$ is monotone in the terms, splits as $\sum_{k<n} = \sum_{k<m} + \sum_{k=m}^{n-1}$ for $m \le n$, scales, and telescopes as $\sum_{k<n}(c_{k+1} - c_{k}) = c_{n} - c_{0}$ ([[lem-finite-sum-laws]], [[def-finite-sum]]).

[L4] $\sum_{k \ge 0} r^{k}$ converges to $1/(1-r)$ for $|r| < 1$, the first term being $r^{0} = 1$ ([[thm-geometric-series]], [[def-integer-power]]); a series converges if and only if each of its tails does, and $\sum_{k \ge 0} u_{k} = \sum_{k<N} u_{k} + \sum_{k \ge N} u_{k}$ ([[lem-series-tail-invariance]]); a convergent sequence of reals comes within every positive $\varepsilon$ of its limit from some index on ([[def-real-limit]]).

[L5] A nonempty finite set of reals, presented as $\{c_{0}, \dots, c_{m}\}$, has a maximum and a minimum ([[lem-finite-set-has-max]], [[def-max-min]]); and strictly between any two distinct reals there lies a real ([[lem-rat-embeds-dense]]).

[L6] A nondecreasing function on an order-convex set has both one-sided limits at every interior point, and is discontinuous there exactly when they differ, in which case the discontinuity is a jump ([[thm-monotone-one-sided-limits-exist]], [[thm-monotone-discontinuities-are-jumps]], [[def-classification-of-discontinuities]], [[def-interval]]).

## Proof

**Proof technique:** constructive.

1.1 If $E = \varnothing$, the constant function $0$ is nondecreasing, takes values in $[0,1]$, is continuous at every real, and has empty discontinuity set; all three claims hold vacuously for claim 3. Assume from here on that $E \ne \varnothing$ and fix a surjection $s : \mathbb{N} \to E$. [L1, construct]

1.2 For every $n \in \mathbb{N}$, $\sum_{k<n} 1/2^{\,k+1} = 1 - 1/2^{\,n}$: each term is $1/2^{\,k+1} = 1/2^{\,k} - 1/2^{\,k+1}$, so the sum telescopes to $1/2^{\,0} - 1/2^{\,n} = 1 - 1/2^{\,n}$. [L3]

2.1 Define $a_{k}(x) := 1/2^{\,k+1}$ when $s(k) < x$ and $a_{k}(x) := 0$ otherwise, and note $0 \le a_{k}(x) \le 1/2^{\,k+1}$ for every $k$ and every real $x$. [step 1.1, construct]

2.2 For every real $\varepsilon > 0$ there is $n \in \mathbb{N}$ with $1/2^{\,n} < \varepsilon$: the partial sums $t_{n} := \sum_{k<n} 1/2^{\,k}$ converge to $2$, and $t_{n} = 2 - 2/2^{\,n}$ by the same telescoping as in step 1.2, so $|t_{n} - 2| = 2/2^{\,n} < \varepsilon$ for all large $n$, whence $1/2^{\,n} < \varepsilon/2 < \varepsilon$ for those $n$. Consequently the partial sums $1 - 1/2^{\,n}$ of $\sum_{k} 1/2^{\,k+1}$ have supremum $1$, so that series converges with sum $1$. [step 1.2, L2, L3, L4]

3.1 For every real $x$ the series $\sum_{k} a_{k}(x)$ converges and $0 \le f(x) \le 1$: its terms are nonnegative and its partial sums satisfy $\sum_{k<n} a_{k}(x) \le \sum_{k<n} 1/2^{\,k+1} = 1 - 1/2^{\,n} \le 1$, so they are bounded above by $1$ and the sum, being their supremum, lies in $[0,1]$. [step 2.1, step 1.2, L2, L3]

3.2 Left continuity holds at **every** real $c$: given real $\varepsilon > 0$ take $n$ with $1/2^{\,n} < \varepsilon$; let $F := \{\, k < n : s(k) < c \,\}$; if $F = \varnothing$ put $x_{0} := c - 1$, and otherwise put $x_{0}$ to be a real with $\max\{s(k) : k \in F\} < x_{0} < c$, which exists because the maximum of the nonempty finite set $\{s(k) : k \in F\}$ is a real strictly below $c$. [step 2.2, L5]

3.3 Right continuity holds at every $c \notin E$: given real $\varepsilon > 0$ take $n$ with $1/2^{\,n} < \varepsilon$; since $c \notin E$ and $s$ has image $E$, no $k$ has $s(k) = c$, so every $k < n$ has $s(k) < c$ or $s(k) > c$. Let $G := \{\, k < n : s(k) > c \,\}$; if $G = \varnothing$ put $y_{0} := c + 1$, and otherwise put $y_{0}$ to be a real with $c < y_{0} < \min\{s(k) : k \in G\}$. [step 1.1, step 2.2, L5]

4.1 $f$ is nondecreasing: if $x \le y$ then $s(k) < x$ implies $s(k) < y$, so $a_{k}(x) \le a_{k}(y)$ for every $k$, hence $\sum_{k<n} a_{k}(x) \le \sum_{k<n} a_{k}(y)$ for every $n$, and taking suprema gives $f(x) \le f(y)$. [step 2.1, step 3.1, L2, L3]

4.2 For all reals $x \le y$ and every $n \in \mathbb{N}$ with $a_{k}(x) = a_{k}(y)$ for every $k < n$, one has $f(y) - f(x) \le 1/2^{\,n}$: for $N \ge n$ the splitting $\sum_{k<N} a_{k}(y) = \sum_{k<n} a_{k}(y) + \sum_{k=n}^{N-1} a_{k}(y) \le \sum_{k<n} a_{k}(x) + \sum_{k=n}^{N-1} 1/2^{\,k+1}$ holds, the last sum being at most $\sum_{k \ge n} 1/2^{\,k+1} = 1 - (1 - 1/2^{\,n}) = 1/2^{\,n}$; so every partial sum of $\sum_{k} a_{k}(y)$ is at most $f(x) + 1/2^{\,n}$, and so is their supremum $f(y)$. [step 2.1, step 1.2, step 3.1, L2, L3, L4]

4.3 Let $c \in E$ and fix $k_{0}$ with $s(k_{0}) = c$. For every $y > c$ and every $N > k_{0}$ the finite sum $\sum_{k<N} a_{k}(y)$ exceeds $\sum_{k<N} a_{k}(c)$ by at least $1/2^{\,k_{0}+1}$, because the list $k \mapsto a_{k}(y) - a_{k}(c)$ has nonnegative entries, so the finite sum of its first $N$ entries is at least its entry at the index $k_{0}$, which is $a_{k_{0}}(y) - a_{k_{0}}(c) = 1/2^{\,k_{0}+1} - 0$. Hence $f(y) - 1/2^{\,k_{0}+1} \ge \sum_{k<N} a_{k}(c)$ for every $N$, the case $N \le k_{0}$ holding because the partial sums of a nonnegative series are nondecreasing; so $f(y) - 1/2^{\,k_{0}+1}$ is an upper bound of those partial sums and therefore at least their supremum $f(c)$. [step 1.1, step 2.1, step 3.1, L2, L3]

5.1 With $x_{0}$ as in step 3.2 and any $x$ with $x_{0} < x \le c$: for $k < n$ with $s(k) < c$ we have $s(k) \le \max\{s(j) : j \in F\} < x_{0} < x$, so $a_{k}(x) = 1/2^{\,k+1} = a_{k}(c)$; and for $k < n$ with $s(k) \ge c \ge x$ we have $a_{k}(x) = 0 = a_{k}(c)$. So $a_{k}(x) = a_{k}(c)$ for every $k < n$, and step 4.2 applied to the pair $x \le c$ gives $0 \le f(c) - f(x) \le 1/2^{\,n} < \varepsilon$. [step 2.1, step 4.1, step 4.2, step 3.2]

5.2 With $y_{0}$ as in step 3.3 and any $y$ with $c \le y < y_{0}$: for $k < n$ with $s(k) < c \le y$ we get $a_{k}(y) = 1/2^{\,k+1} = a_{k}(c)$, and for $k < n$ with $s(k) > c$ we have $s(k) \ge \min\{s(j) : j \in G\} > y_{0} > y$, so $a_{k}(y) = 0 = a_{k}(c)$. So $a_{k}(y) = a_{k}(c)$ for every $k < n$, and step 4.2 applied to the pair $c \le y$ gives $0 \le f(y) - f(c) \le 1/2^{\,n} < \varepsilon$. [step 2.1, step 4.1, step 4.2, step 3.3]

5.3 So $f$ is discontinuous at $c$: for $\varepsilon := 1/2^{\,k_{0}+1} > 0$ and any real $\delta > 0$ the point $y := c + \delta/2$ satisfies $|y - c| < \delta$ and $|f(y) - f(c)| \ge \varepsilon$, so no $\delta$ witnesses the continuity condition at $c$. [step 4.3]

6.1 Hence $f$ is continuous at every $c \notin E$: fix a real $\varepsilon > 0$, take $x_{0}$ as in step 3.2 and $y_{0}$ as in step 3.3 for that same $\varepsilon$, and put $\delta := \min\{c - x_{0}, y_{0} - c\} > 0$; then every real $x$ with $|x - c| < \delta$ satisfies $x_{0} < x < y_{0}$ and therefore $|f(x) - f(c)| < \varepsilon$, by step 5.1 when $x \le c$ and by step 5.2 when $x \ge c$. [step 5.1, step 5.2, L5]

6.2 Every point of $E$ is an interior point of the order-convex set $\mathbb{R}$, so both one-sided limits of $f$ exist there; step 5.1 gives $\lim_{x \to c^{-}} f(x) = f(c)$ and step 4.3 gives $\lim_{x \to c^{+}} f(x) \ge f(c) + 1/2^{\,k_{0}+1} > f(c)$. The two one-sided limits therefore differ, and the discontinuity at $c$ is a jump. [step 5.1, step 4.3, step 5.3, L6]

7.1 Claims 1, 2 and 3 hold for the function $f$ constructed in steps 1.1 and 2.1: claim 1 by steps 3.1 and 4.1, claim 2 by steps 6.1 and 5.3, and claim 3 by step 6.2. [step 3.1, step 4.1, step 6.1, step 5.3, step 6.2, discharge-construct] ∎

## Remarks

- **Why the mass is collected strictly to the right.** The definition uses $s(k) < x$ rather than $s(k) \le x$, and that is what makes $f$ left continuous everywhere, as steps 3.2 and 5.1 show without any hypothesis on $c$. The value $f(c)$ at a point of $E$ is therefore the **left** limit, and the whole jump sits on the right. Using $s(k) \le x$ would produce a right continuous function with the same discontinuity set; nothing else would change.

- **Repetitions in the enumeration are harmless.** If $s$ takes the value $c$ at several indices, the jump at $c$ is the total mass $\sum \{1/2^{\,k+1} : s(k) = c\}$ rather than a single term. Step 4.3 uses only one index $k_{0}$ and so needs no such sum; it establishes a lower bound for the jump, which is all that discontinuity requires.

- **Boundedness is free, and it is worth recording.** The total mass available is $\sum_{k \ge 0} 1/2^{\,k+1} = 1$, so $f$ maps $\mathbb{R}$ into $[0,1]$ however large $E$ is. A bounded nondecreasing function on $\mathbb{R}$ can therefore have a dense set of discontinuities; the companion page takes $E = \mathbb{Q}$ and gets exactly that.
````

### `thm-rationals-countable`

````markdown
---
id: thm-rationals-countable
kind: theorem
title: "$\\mathbb{Q}$ is countably infinite"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-n-cross-n-countable, thm-product-of-countable, def-rationals, lem-rat-positive-denominator, def-countable, lem-subset-of-countable, def-integers, lem-countable-iff-surjection-from-n, thm-schroder-bernstein, def-equinumerous, def-injection-surjection-bijection, lem-nat-embeds-int, lem-int-embeds-rat, def-int-order, thm-int-ordered-ring, thm-omega-is-peano-system, lem-nat-order-is-membership]
justified_by: []
aliases: []
landmark: true
short: "$\\mathbb{Q}\\approx\\mathbb{N}$"
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
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "J. Lebl, Basic Analysis: Introduction to Real Analysis, basic set theory"
      url: "https://www.jirka.org/ra/html/sec_basicset.html"
    - title: "Countable set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countable_set"
    - title: "Rational number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Rational_number"
    - title: "T. Tao, Analysis I, 3rd ed., §8.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

$\mathbb{Q} \approx \mathbb{N}$ ([[def-equinumerous]]): the rationals are
countably infinite ([[def-countable]]).

**No choice principle is used.** The one place where a reader expects a choice,
"pick a representative $a/b$ of each rational", is exactly where
[[lem-rat-positive-denominator]] applies: every rational *has* a representative
with positive denominator, so the map $(a,b) \mapsto [(a,b)]$ defined on
$\mathbb{Z} \times \mathbb{Z}_{>0}$ is already **surjective** onto $\mathbb{Q}$,
and countability follows from a surjection without ever selecting a
representative. The same device handles $\mathbb{Z}$, which is a surjective image
of $\mathbb{N} \times \mathbb{N}$ by construction ([[def-integers]]).

## Facts & Assumptions

**Given:** $\mathbb{Z} = (\mathbb{N} \times \mathbb{N})/\sim$ with quotient map $(a,b) \mapsto [(a,b)]$ ([[def-integers]]), and $\mathbb{Q}$ the set of classes $[(a,b)]$ of pairs of integers with $b \ne 0$ ([[def-rationals]]). Write $\mathbb{Z}_{>0} = \{\, b \in \mathbb{Z} : b > 0 \,\}$ ([[def-int-order]]).

[L1] Finite, countably infinite, at most countable, uncountable ([[def-countable]]).

[L2] Bijections, injections, surjections, composition; $\approx$ and $\preceq$ ([[def-injection-surjection-bijection]], [[def-equinumerous]]).

[L3] A nonempty $X$ is at most countable iff there is a surjection $\mathbb{N} \to X$; and from such a surjection $s$ the map $x \mapsto \min\{\, k : s(k) = x \,\}$ is an injection $X \to \mathbb{N}$ ([[lem-countable-iff-surjection-from-n]]).

[L4] There is a bijection $\beta : \mathbb{N} \to \mathbb{N} \times \mathbb{N}$ ([[thm-n-cross-n-countable]]).

[L5] A product of two at most countable sets is at most countable ([[thm-product-of-countable]]); a subset of an at most countable set is at most countable ([[lem-subset-of-countable]]).

[L6] Every rational is $[(a,b)]$ for some integers $a$ and $b$ with $b > 0$ ([[lem-rat-positive-denominator]]).

[L7] $\mathbb{N}$ embeds injectively in $\mathbb{Z}$ by $n \mapsto [(n,0)]$ ([[lem-nat-embeds-int]]) and $\mathbb{Z}$ embeds injectively in $\mathbb{Q}$ by $k \mapsto [(k,1)]$ ([[lem-int-embeds-rat]]).

[L8] $\preceq$ in both directions gives $\approx$ ([[thm-schroder-bernstein]]).

[L9] The relation of [[def-int-order]] is a total order on $\mathbb{Z}$ compatible with the ring structure ([[thm-int-ordered-ring]]), and $\mathbb{Z}_{>0} \ne \varnothing$: on representatives $0 < [(a,b)]$ holds exactly when $b < a$ in $\mathbb{N}$ ([[def-int-order]]), and $0 < 1$ in $\mathbb{N}$, since $1 = \sigma(0) \ne 0$ ([[thm-omega-is-peano-system]]) while $0 < n$ for every nonzero natural $n$ (claim 4 of [[lem-nat-order-is-membership]]); so the integer $[(1,0)]$ is positive.

## Proof

**Proof technique:** direct.

1.1 The quotient map $\pi : \mathbb{N} \times \mathbb{N} \to \mathbb{Z}$, $\pi(a,b) = [(a,b)]$, is surjective, since every integer is by definition such a class; hence $\pi \circ \beta : \mathbb{N} \to \mathbb{Z}$ is a surjection, and $\mathbb{Z} \ne \varnothing$, so $\mathbb{Z}$ is at most countable by [L3]. [given, L2, L3, L4]

1.2 The composite $\iota : \mathbb{N} \to \mathbb{Q}$, $n \mapsto [([(n,0)],1)]$, of the two embeddings of [L7] is injective, so $\mathbb{N} \preceq \mathbb{Q}$. [L2, L7]

2.1 $\mathbb{Z}_{>0}$ is a subset of $\mathbb{Z}$, hence at most countable by [L5], and it is nonempty by [L9]; therefore $\mathbb{Z} \times \mathbb{Z}_{>0}$ is at most countable by [L5] and nonempty, so [L3] provides a surjection $u : \mathbb{N} \to \mathbb{Z} \times \mathbb{Z}_{>0}$. [step 1.1, L3, L5, L9]

3.1 The map $\rho : \mathbb{Z} \times \mathbb{Z}_{>0} \to \mathbb{Q}$, $\rho(a,b) = [(a,b)]$, is well defined because $b > 0$ gives $b \ne 0$, and it is surjective by [L6]; hence $\rho \circ u : \mathbb{N} \to \mathbb{Q}$ is a surjection, $\mathbb{Q}$ is at most countable, and [L3] turns that surjection into an injection $j : \mathbb{Q} \to \mathbb{N}$, so $\mathbb{Q} \preceq \mathbb{N}$. [step 2.1, given, L2, L3, L6]

4.1 From $\mathbb{N} \preceq \mathbb{Q}$ and $\mathbb{Q} \preceq \mathbb{N}$, the Schröder-Bernstein theorem [L8] yields a bijection $\mathbb{Q} \to \mathbb{N}$; hence $\mathbb{Q} \approx \mathbb{N}$ and $\mathbb{Q}$ is countably infinite. [step 1.2, step 3.1, L1, L8] ∎

## Remarks

- **Why Schröder-Bernstein rather than a count.** The usual last line is "countable, and infinite because $\mathbb{N}$ injects into it". Turning that into a proof requires knowing that a set containing an injective copy of $\mathbb{N}$ is not finite, which is the pigeonhole principle, [[lem-pigeonhole]], proved earlier on this page. That route is now available, but it is a detour: [[thm-schroder-bernstein]] gets the bijection directly from the two injections already in hand, and it is choice free, so nothing is lost.

- **Lowest terms are not needed and are not available.** A frequent presentation injects $\mathbb{Q}$ into $\mathbb{Z} \times \mathbb{N}$ by sending each rational to its representative in lowest terms. That map needs greatest common divisors, which this library has not developed. Working with a surjection instead of an injection avoids the issue entirely: repetitions in an enumeration are harmless ([[lem-countable-iff-surjection-from-n]]).

- The proof shows in passing that $\mathbb{Z} \approx \mathbb{N}$, by the same two-injection argument applied to [L7] and step 1.1, and that $\mathbb{Q} \times \mathbb{Q}$, $\mathbb{Q}^3$ and so on are countable ([[thm-product-of-countable]]). The contrast with [[thm-r-uncountable]] is the point of the page: adding all limits of rational approximations to $\mathbb{Q}$ changes the size of the set, not merely its arithmetic.
````

