# Audit proof-refuter brief — Wave 9, A6

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
For an `ai-generated` proof, actively search for a counterexample. A false
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

## Wave 9 target — `ex-froda-is-sharp`

Selection: mandatory Wave 9 high/critical proof-bearing route.

Normalized current SHA-256: `fcf54b499dfc3b534f5215ae4bbeca91b974c44b2f78541bd772261a21c8aee3`

## Complete current target

````markdown
---
id: ex-froda-is-sharp
kind: example
title: "Froda's countable bound is attained: a bounded nondecreasing function on $\\mathbb{R}$ discontinuous exactly at the points $1 - 1/(k+1)$ for $k \\in \\mathbb{N}$, an infinite discontinuity set inside a bounded interval"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
  evidence: semantic-source
deps: [def-equinumerous, def-injection-surjection-bijection, thm-monotone-with-prescribed-discontinuity-set, thm-froda, def-monotone-function, def-classification-of-discontinuities, def-countable, lem-countable-iff-surjection-from-n, cor-archimedean-reciprocal, thm-of-archimedean, def-interval, def-canonical-natural, lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: false
short: "an infinite discontinuity set in $[0,1)$"
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
    - title: "Discontinuities of monotone functions (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Discontinuities_of_monotone_functions"
pipeline_run: null
---

## Example

Put

$$E \;:=\; \Bigl\{\, 1 - \frac{1}{\iota(k+1)} \;:\; k \in \mathbb{N} \,\Bigr\} \;=\; \Bigl\{\, 0,\ \tfrac12,\ \tfrac23,\ \tfrac34,\ \dots \Bigr\} \;\subseteq\; [0,1)$$

([[def-canonical-natural]], [[def-interval]]). Then:

1. $E$ is countably infinite ([[def-countable]]);
2. there is a nondecreasing $f : \mathbb{R} \to \mathbb{R}$ with
   $0 \le f \le 1$ whose set of discontinuities is exactly $E$, every one of them
   a jump ([[thm-monotone-with-prescribed-discontinuity-set]],
   [[def-monotone-function]], [[def-classification-of-discontinuities]]);
3. $E$ is contained in the bounded interval $[0,1)$, so a monotone function may
   have infinitely many discontinuities inside a bounded interval.

**Indexing.** $\mathbb{N}$ contains $0$, so the points are
$1 - 1/\iota(k+1)$ for $k \in \mathbb{N}$ and never $1 - 1/\iota(k)$, which is
undefined at $k = 0$; the first point of $E$ is $1 - 1/\iota(1) = 0$.

**The point $1$ is not in $E$ and $f$ is continuous there.** $E$ has $1$ as a
limit point but does not contain it, and claim 2 asserts continuity at every
point outside $E$, so in particular at $1$: a monotone function may be
continuous at a limit point of its own discontinuity set.

## Facts & Assumptions

**Given:** The set $E = \{\, 1 - 1/\iota(k+1) : k \in \mathbb{N} \,\}$.

[L1] A nonempty set that is the image of a map defined on $\mathbb{N}$ is at most countable; a set in bijection with $\mathbb{N}$ is countably infinite ([[lem-countable-iff-surjection-from-n]], [[def-countable]], [[def-equinumerous]], [[def-injection-surjection-bijection]]).

[L2] For every at most countable $E \subseteq \mathbb{R}$ there is a nondecreasing $f : \mathbb{R} \to \mathbb{R}$ with $0 \le f \le 1$, continuous at every point outside $E$ and discontinuous at every point of $E$, with every discontinuity a jump ([[thm-monotone-with-prescribed-discontinuity-set]]).

[L3] The set of discontinuities of a monotone function on an interval is at most countable ([[thm-froda]]).

[L4] $\iota$ is positive and strictly increasing on the naturals $\ge 1$, and for every real $\eta > 0$ there is a natural $n \ge 1$ with $1/\iota(n) < \eta$ ([[lem-of-naturals-positive]], [[def-canonical-natural]], [[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

## Verification

**Proof technique:** direct.

1.1 The map $s : \mathbb{N} \to \mathbb{R}$, $s(k) := 1 - 1/\iota(k+1)$, has image $E$, and $E$ is nonempty since $s(0) = 0$; so $E$ is at most countable. [L1, L4]

1.2 $s$ is injective: $j < k$ gives $\iota(j+1) < \iota(k+1)$, hence $1/\iota(k+1) < 1/\iota(j+1)$, hence $s(j) < s(k)$. Being injective with image $E$, it is a bijection $\mathbb{N} \to E$, so $E$ is countably infinite. [L1, L4]

1.3 $E \subseteq [0,1)$: $\iota(k+1) \ge 1 > 0$ gives $0 < 1/\iota(k+1) \le 1$, so $0 \le s(k) < 1$. [L4]

2.1 Claim 2: applying the prescribed-discontinuity theorem to the at most countable set $E$ gives a nondecreasing $f : \mathbb{R} \to \mathbb{R}$ with values in $[0,1]$, discontinuous exactly at the points of $E$, every discontinuity a jump. [step 1.1, L2]

3.1 Claims 1 and 3 are steps 1.1, 1.2 and 1.3, and the whole is consistent with Froda's theorem, which permits any at most countable discontinuity set and no larger one. [step 1.1, step 1.2, step 1.3, step 2.1, L3] ∎

## Remarks

- **What the example is for.** Froda's theorem bounds the discontinuity set of a
  monotone function by countability and by nothing else; in particular it does
  not bound it by finiteness, even inside a bounded interval. The set $E$ above
  is the simplest witness: infinitely many jumps accumulating at a single point,
  all within $[0,1)$.

- **The accumulation point is a point of continuity.** The real $1$ is not a
  member of $E$, so claim 2 gives continuity of $f$ at $1$, even though every
  neighbourhood of $1$ contains infinitely many discontinuities of $f$. Being a
  limit of discontinuities is not itself an obstruction to continuity.

- **A denser example is available.** Taking $E = \mathbb{Q}$ instead gives a
  monotone function discontinuous on a dense set
  ([[ex-monotone-function-discontinuous-exactly-at-the-rationals]]); the present
  example is the smaller and more concrete one, and it is the one where the
  points can be listed.
````

## Current Wave 9 provenance determination

```json
{
  "id": "ex-froda-is-sharp",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://en.wikipedia.org/wiki/Discontinuities_of_monotone_functions"
  ],
  "rationale": "The literature states the prescribed-countable-discontinuity construction, which immediately makes the at-most-countable Froda bound sharp. The item packages that consequence as a separate example.",
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
      "source": "lem-countable-iff-surjection-from-n",
      "source_section": "Statement",
      "quote": "Let $A$ be a nonempty set. Then $A$ is at most countable ([[def-countable]]) if\nand only if there is a surjection $s : \\mathbb{N} \\to A$\n([[def-injection-surjection-bijection]]).",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L1",
      "source": "def-countable",
      "source_section": "Definition",
      "quote": "- $A$ is **finite** if $A \\approx n$ for some $n \\in \\mathbb{N}$.\n- $A$ is **countably infinite** if $A \\approx \\mathbb{N}$.\n- $A$ is **at most countable** if it is finite or countably infinite.\n- $A$ is **uncountable** if it is not at most countable.",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L1",
      "source": "def-equinumerous",
      "source_section": "Definition",
      "quote": "- $A$ and $B$ are **equinumerous**, written $A \\approx B$, if there exists a\n  bijection $f : A \\to B$.\n- $A$ is **dominated by** $B$, written $A \\preceq B$, if there exists an\n  injection $f : A \\to B$.\n- $A \\prec B$ abbreviates: $A \\preceq B$ and not $A \\approx B$.",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L1",
      "source": "def-injection-surjection-bijection",
      "source_section": "Definition",
      "quote": "- $f$ is **injective** (one-to-one) if $f(x) = f(y)$ implies $x = y$, for all\n  $x, y \\in A$.\n- $f$ is **surjective** (onto) if for every $b \\in B$ there is some $x \\in A$\n  with $f(x) = b$; equivalently, the image $f[A] := \\{ f(x) : x \\in A \\}$ equals\n  $B$.\n- $f$ is **bijective** if it is both injective and surjective.",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-monotone-with-prescribed-discontinuity-set",
      "source_section": "Statement",
      "quote": "1. $f$ is nondecreasing ([[def-monotone-function]]) and $0 \\le f(x) \\le 1$ for\n   every real $x$, so $f$ is bounded ([[def-bounded-set]]);\n2. $f$ is continuous at every $x \\notin E$ and discontinuous at every $x \\in E$\n   ([[def-continuity-real]]), so the discontinuity set of $f$ is exactly $E$;\n3. every discontinuity of $f$ is a **jump**\n   ([[def-classification-of-discontinuities]]), with\n   $\\lim_{x \\to c^{-}} f(x) = f(c) < \\lim_{x \\to c^{+}} f(x)$ at every $c \\in E$.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-froda",
      "source_section": "Statement",
      "quote": "([[def-classification-of-discontinuities]]) is **at most countable**\n([[def-countable]]).",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-of-naturals-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field, with field structure as in [[def-field]], and for\n$n \\ge 1$ let $n \\cdot 1_F$ denote the canonical natural number\n$\\underbrace{1_F + \\cdots + 1_F}_{n}$, defined recursively by $1 \\cdot 1_F = 1_F$\nand $(n+1) \\cdot 1_F = n \\cdot 1_F + 1_F$. Then for every $n \\ge 1$:",
      "uses": [
        "1.1",
        "1.2",
        "1.3"
      ]
    },
    {
      "fact": "L4",
      "source": "def-canonical-natural",
      "source_section": "Definition",
      "quote": "Let $F$ be a field ([[def-field]]) with additive identity $0_F$ and\nmultiplicative identity $1_F$. Define\n$\\iota : \\mathbb{N} \\to F$ by recursion on $\\mathbb{N}$\n([[def-natural-numbers]], [[thm-recursion]]):",
      "uses": [
        "1.1",
        "1.2",
        "1.3"
      ]
    },
    {
      "fact": "L4",
      "source": "cor-archimedean-reciprocal",
      "source_section": "Statement",
      "quote": "Let $F$ be a complete ordered field ([[def-complete-ordered-field]]) and let\n$\\varepsilon \\in F$ with $\\varepsilon > 0$. Then there is a natural number\n$n \\ge 1$ such that",
      "uses": [
        "1.1",
        "1.2",
        "1.3"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-of-archimedean",
      "source_section": "Statement",
      "quote": "Every complete ordered field $F$ ([[def-complete-ordered-field]]) is Archimedean:\nfor every $x \\in F$ there is a natural number $n \\ge 1$ with $x < n \\cdot 1_F$,\nwhere $n \\cdot 1_F$ is the canonical natural of the ordered field $F$\n([[def-ordered-field]]). Equivalently, the canonical naturals are cofinal in $F$.",
      "uses": [
        "1.1",
        "1.2",
        "1.3"
      ]
    }
  ],
  "derivations": [
    {
      "id": "ex-froda-is-sharp-step-1-1",
      "claim": "The map $s : \\mathbb{N} \\to \\mathbb{R}$, $s(k) := 1 - 1/\\iota(k+1)$, has image $E$, and $E$ is nonempty since $s(0) = 0$; so $E$ is at most countable. [L1, L4]",
      "step": "1.1",
      "inputs": [
        "L1",
        "L4"
      ]
    },
    {
      "id": "ex-froda-is-sharp-step-1-2",
      "claim": "$s$ is injective: $j < k$ gives $\\iota(j+1) < \\iota(k+1)$, hence $1/\\iota(k+1) < 1/\\iota(j+1)$, hence $s(j) < s(k)$. Being injective with image $E$, it is a bijection $\\mathbb{N} \\to E$, so $E$ is countably infinite. [L1, L4]",
      "step": "1.2",
      "inputs": [
        "L1",
        "L4"
      ]
    },
    {
      "id": "ex-froda-is-sharp-step-1-3",
      "claim": "$E \\subseteq [0,1)$: $\\iota(k+1) \\ge 1 > 0$ gives $0 < 1/\\iota(k+1) \\le 1$, so $0 \\le s(k) < 1$. [L4]",
      "step": "1.3",
      "inputs": [
        "L4"
      ]
    },
    {
      "id": "ex-froda-is-sharp-step-2-1",
      "claim": "Claim 2: applying the prescribed-discontinuity theorem to the at most countable set $E$ gives a nondecreasing $f : \\mathbb{R} \\to \\mathbb{R}$ with values in $[0,1]$, discontinuous exactly at the points of $E$, every discontinuity a jump. [step 1.1, L2]",
      "step": "2.1",
      "inputs": [
        "1.1",
        "L2"
      ]
    },
    {
      "id": "ex-froda-is-sharp-step-3-1",
      "claim": "Claims 1 and 3 are steps 1.1, 1.2 and 1.3, and the whole is consistent with Froda's theorem, which permits any at most countable discontinuity set and no larger one. [step 1.1, step 1.2, step 1.3, step 2.1, L3] ∎",
      "step": "3.1",
      "inputs": [
        "1.1",
        "1.2",
        "1.3",
        "2.1",
        "L3"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "step 1.1: the empty-object convention or its exclusion is explicit in the statement/proof."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "step 1.1: the zero-valued or zero-index boundary is handled explicitly, or is included without division by it."
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
    "source": "ex-froda-is-sharp",
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
    "source": "ex-froda-is-sharp",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "def-injection-surjection-bijection",
    "declared_target": "def-injection-surjection-bijection",
    "target_statement_provenance": "ai-altered",
    "targetPage": "relations-functions-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-froda-is-sharp",
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
    "source": "ex-froda-is-sharp",
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
    "source": "ex-froda-is-sharp",
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
    "source": "ex-froda-is-sharp",
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
    "source": "ex-froda-is-sharp",
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
    "source": "ex-froda-is-sharp",
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
  },
  {
    "source": "ex-froda-is-sharp",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "cor-archimedean-reciprocal",
    "declared_target": "cor-archimedean-reciprocal",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-froda-is-sharp",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "thm-of-archimedean",
    "declared_target": "thm-of-archimedean",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-froda-is-sharp",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "def-interval",
    "declared_target": "def-interval",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-sequences-and-cauchy-completeness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-froda-is-sharp",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "def-canonical-natural",
    "declared_target": "def-canonical-natural",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-froda-is-sharp",
    "sourcePage": "monotone-functions-and-discontinuities-examples",
    "batch": "wave9-real-analysis",
    "target": "lem-of-naturals-positive",
    "declared_target": "lem-of-naturals-positive",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Complete current text of every declared or cited item (14)

### `cor-archimedean-reciprocal`

````markdown
---
id: cor-archimedean-reciprocal
kind: corollary
title: "For every $\\varepsilon > 0$ in a complete ordered field there is a natural $n \\ge 1$ with $1/n < \\varepsilon$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-of-archimedean, lem-of-inverse-positive, def-complete-ordered-field, def-ordered-field, def-field]
justified_by: []
aliases: []
landmark: false
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 (Thm 1.20(a) and its corollaries)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §5.4 (Prop. 5.4.12, the Archimedean property)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
    - title: "UTSA Mathematics: The Archimedean property"
      url: "https://mathresearch.utsa.edu/wiki/index.php?title=Real_Numbers%3AArchimedean_Property"
---

## Statement

Let $F$ be a complete ordered field ([[def-complete-ordered-field]]) and let
$\varepsilon \in F$ with $\varepsilon > 0$. Then there is a natural number
$n \ge 1$ such that

$$\frac{1}{n \cdot 1_F} < \varepsilon ,$$

where $n \cdot 1_F$ is the canonical natural of $F$ ([[thm-of-archimedean]]) and
$1/(n \cdot 1_F)$ is its multiplicative inverse ([[def-field]]). As is standard
we abbreviate $n \cdot 1_F$ to $n$ and write the conclusion $1/n < \varepsilon$.

This is the **reciprocal form** of the Archimedean property.
[[thm-of-archimedean]] on its own delivers only the assertion that the canonical
naturals are cofinal, $x < n \cdot 1_F$; the form actually used in analysis, that
the reciprocals of the naturals get below every positive bound, is the statement
above, and it is recorded separately so that no proof has to reconstruct the
inversion step in passing.

## Facts & Assumptions

**Given:** A complete ordered field $F$ and an element $\varepsilon \in F$ with $\varepsilon > 0$.

[L1] Archimedean property: for every $x \in F$ there is a natural number $n \ge 1$ with $x < n \cdot 1_F$ ([[thm-of-archimedean]], [[def-complete-ordered-field]]).

[L2] Inverses and order: if $a > 0$ then $a^{-1} > 0$, and if $0 < a < b$ then $0 < b^{-1} < a^{-1}$ ([[lem-of-inverse-positive]], [[def-ordered-field]]).

[L3] Field arithmetic: an element $a$ with $a > 0$ is nonzero by trichotomy, hence has a multiplicative inverse $a^{-1}$, and $(a^{-1})^{-1} = a$ ([[def-field]], [[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Since $\varepsilon > 0$, trichotomy gives $\varepsilon \ne 0$, so $\varepsilon^{-1}$ exists, and $\varepsilon^{-1} > 0$. [given, L2, L3]

2.1 Apply [L1] to $x = \varepsilon^{-1}$: fix a natural number $n \ge 1$ with $\varepsilon^{-1} < n \cdot 1_F$. [step 1.1, L1, choose]

3.1 Chaining the two displayed inequalities gives $0 < \varepsilon^{-1} < n \cdot 1_F$; in particular $n \cdot 1_F > 0$, so $n \cdot 1_F \ne 0$ and $1/(n \cdot 1_F)$ is defined. [step 1.1, step 2.1, L3]

4.1 Apply the second claim of [L2] with $a = \varepsilon^{-1}$ and $b = n \cdot 1_F$: $0 < (n \cdot 1_F)^{-1} < (\varepsilon^{-1})^{-1}$. [step 3.1, L2]

5.1 By [L3], $(\varepsilon^{-1})^{-1} = \varepsilon$, so the natural number $n \ge 1$ fixed in step 2.1 satisfies $1/(n \cdot 1_F) < \varepsilon$, which is the assertion. [step 4.1, L3] ∎

## Remarks

- **Monotonicity gives the eventual form for free.** If $m \ge n \ge 1$ then
  $m \cdot 1_F \ge n \cdot 1_F > 0$, because $k \mapsto k \cdot 1_F$ is strictly
  increasing on the naturals $\ge 1$ ([[lem-of-naturals-positive]]), and so
  $1/(m \cdot 1_F) \le 1/(n \cdot 1_F) < \varepsilon$ by [[lem-of-inverse-positive]]
  again. So the corollary yields not merely one index but a threshold: every
  $m \ge n$ satisfies $1/m < \varepsilon$. That one extra line is what a
  convergence proof needs, and it is left to the caller rather than folded into
  the statement, because the caller usually has a threshold of its own to combine
  it with.

- **Completeness is used only through [[thm-of-archimedean]].** Nothing here
  needs the least-upper-bound property directly. The corollary therefore holds
  verbatim in any Archimedean ordered field, in particular in $\mathbb{Q}$, and
  it fails in a non-Archimedean ordered field, where an infinitesimal
  $\varepsilon > 0$ is below every $1/n$ by construction.

- The equivalence is exact: the reciprocal form implies the cofinal form back
  again, since given $x > 0$ one applies it to $\varepsilon = 1/x$. The two are
  the same property written on the two sides of the inversion, and only the
  direction proved above is used in this library.
````

### `def-canonical-natural`

````markdown
---
id: def-canonical-natural
kind: definition
title: "The canonical natural $\\iota(n) = n \\cdot 1_F$ of a field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-field, def-natural-numbers, thm-recursion]
justified_by: []
forward_refs: [def-metric-completion]
aliases: []
landmark: false
short: "$\\iota(n) = n \\cdot 1_F$"
verification:
  precheck: n/a
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Characteristic (algebra) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Characteristic_(algebra)"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Elias Zakon, Mathematical Analysis: Natural Numbers and Induction"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/02%3A_Real_Numbers_and_Fields/2.02%3A_Natural_Numbers._Induction"
pipeline_run: null
---

## Definition

Let $F$ be a field ([[def-field]]) with additive identity $0_F$ and
multiplicative identity $1_F$. Define
$\iota : \mathbb{N} \to F$ by recursion on $\mathbb{N}$
([[def-natural-numbers]], [[thm-recursion]]):

$$\iota(0) \;:=\; 0_F, \qquad \iota(n+1) \;:=\; \iota(n) + 1_F .$$

$\iota(n)$ is the **canonical natural** of $n$ in $F$. It is also written
$n \cdot 1_F$, and for $n \ge 1$ it is $1_F$ added to itself $n$ times.

**Why the notation is needed at all.** A natural number in this library is a von
Neumann natural, that is a set ([[def-natural-numbers]]), and a set is not an
element of $F$. So $1/n$, $n^{\alpha}$ and $x/n$ are not expressions of $F$ when
$n$ is a natural: what they mean is $1/\iota(n)$, $\iota(n)^{\alpha}$ and
$x/\iota(n)$. The map $\iota$ is what carries a counting number into the field,
and writing it is the whole reason a reader meets $1/\iota(k+1)$ where an
informal text would write $1/(k+1)$.

## Remarks

- **Where the index shift comes from.** $\mathbb{N}$ contains $0$
  ([[def-natural-numbers]]) and $\iota(0) = 0_F$, so $1/\iota(k)$ is undefined at
  $k = 0$. A family of reciprocals indexed by $\mathbb{N}$ is therefore written
  over $\iota(k+1)$, which is why the harmonic and telescoping families of this
  library run over $k+1$ rather than over $k$. This is bookkeeping, not a
  restriction: the values are the usual ones.

- **This definition records notation; the arithmetic is proved elsewhere.** That
  $\iota$ is strictly increasing and positive on $n \ge 1$, and that it carries
  sums to sums and products to products, is [[lem-of-naturals-positive]], stated
  for an ordered field. That lemma introduces the same element by the equivalent
  recursion $1 \cdot 1_F = 1_F$, $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$, which
  agrees with the definition above because $\iota(1) = \iota(0) + 1_F = 1_F$.
  Nothing here is new mathematics; the definition exists so that the notation has
  a home a reader can look up.

- **The symbol $\iota$ is used in this library for other canonical maps, and this
  definition does not govern them.** It also denotes the canonical field
  embedding $\iota : \mathbb{Q} \to F$ ([[lem-of-q-embeds]]), the isometric
  embedding of a metric space into a completion ([[def-metric-completion]]), and
  an inclusion map $\iota : S \to X$ of a subspace. Each of those is introduced
  where it is used and means something different from the map defined here. What
  the four share is only that each is the canonical map of its situation.

- **Fields, not just ordered fields.** The recursion needs no order, so the
  definition is stated for a field; every use in this library is in an ordered
  field, and the order is what makes $\iota$ injective
  ([[lem-of-naturals-positive]]). In a field of positive characteristic $\iota$
  is not injective, which is one reason the injectivity is a lemma rather than
  part of the definition.
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

### `def-injection-surjection-bijection`

````markdown
---
id: def-injection-surjection-bijection
kind: definition
title: "Injection, surjection, bijection"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function, def-image-and-preimage-under-a-relation]
justified_by: []
aliases: [def-injective, def-surjective, def-bijective]
landmark: false
short: "injective, surjective, bijective"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-06
    scope: published-rehoming-repair
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "J. Lebl, Basic Analysis: Introduction to Real Analysis, basic set theory"
      url: "https://www.jirka.org/ra/html/sec_basicset.html"
    - title: "Bijection, injection and surjection (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bijection,_injection_and_surjection"
    - title: "T. Tao, Analysis I, 3rd ed., §3.3 (Functions)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Definition

Let $A$ and $B$ be sets and let $f : A \to B$ be a function ([[def-function]]).

- $f$ is **injective** (one-to-one) if $f(x) = f(y)$ implies $x = y$, for all
  $x, y \in A$.
- $f$ is **surjective** (onto) if for every $b \in B$ there is some $x \in A$
  with $f(x) = b$; equivalently, the image $f[A] := \{ f(x) : x \in A \}$ equals
  $B$.
- $f$ is **bijective** if it is both injective and surjective.

For $S \subseteq A$ we write $f[S] = \{ f(x) : x \in S \}$ for the image of $S$,
and for $T \subseteq B$ we write $f^{-1}[T] = \{ x \in A : f(x) \in T \}$ for the
preimage of $T$; these are the image and preimage of a set under $f$ read as a
relation ([[def-image-and-preimage-under-a-relation]]).

## Remarks

- **Composition.** If $f : A \to B$ and $g : B \to C$ are both injective then so
  is $g \circ f$, since $g(f(x)) = g(f(y))$ forces $f(x) = f(y)$ and then
  $x = y$; if both are surjective then so is $g \circ f$, since any $c \in C$ is
  $g(b)$ for some $b \in B$ and that $b$ is $f(a)$ for some $a \in A$. Hence a
  composition of bijections is a bijection. These verifications, together with the
  two partial converses, are
  [[prop-composition-preserves-injectivity-surjectivity-and-bijectivity]].

- **Inverses.** $f : A \to B$ is bijective exactly when there is a function
  $f^{-1} : B \to A$ with $f^{-1}(f(x)) = x$ for all $x \in A$ and
  $f(f^{-1}(b)) = b$ for all $b \in B$; that two-sided inverse is unique, and it
  is itself a bijection. Injectivity alone gives a bijection from $A$ onto the
  image $f[A]$, and hence an inverse defined on $f[A]$ only. No choice principle
  is involved: the value $f^{-1}(b)$ is the *unique* $x$ with $f(x) = b$, so it
  is determined rather than selected. The full statement, with the uniqueness of the
  two-sided inverse, is
  [[thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse]]; the
  corresponding statement for an arbitrary surjection is not available at this point
  in the reading order, because a right inverse for every surjection is equivalent
  to the Axiom of Choice.

- **What this item does and does not do.** A function $A \to B$ is a set of ordered
  pairs, single valued and total on $A$ ([[def-function]]); ordered pairs, Cartesian
  products, images and preimages are fixed by [[def-ordered-pair]],
  [[def-cartesian-product]] and [[def-image-and-preimage-under-a-relation]]. This
  item only fixes the three adjectives and the notation used for them. Nothing here
  is proved.
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

### `ex-monotone-function-discontinuous-exactly-at-the-rationals`

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

### `lem-of-naturals-positive`

````markdown
---
id: lem-of-naturals-positive
kind: lemma
title: "Canonical naturals are positive and strictly increasing"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-of-one-positive, lem-of-add-order, def-field]
aliases: []
landmark: false
short: "n·1 > 0"
proof_strategy: induction
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
    - title: "M. Spivak, Calculus, 4th ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "Elias Zakon, Mathematical Analysis: Natural Numbers and Induction"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/02%3A_Real_Numbers_and_Fields/2.02%3A_Natural_Numbers._Induction"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field, with field structure as in [[def-field]], and for
$n \ge 1$ let $n \cdot 1_F$ denote the canonical natural number
$\underbrace{1_F + \cdots + 1_F}_{n}$, defined recursively by $1 \cdot 1_F = 1_F$
and $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$. Then for every $n \ge 1$:

- $n \cdot 1_F > 0$ and $(n+1) \cdot 1_F > n \cdot 1_F$;
- the map $n \mapsto n \cdot 1_F$ is strictly increasing, hence injective, on $\{1, 2, 3, \dots\}$;
- $(m+n) \cdot 1_F = m \cdot 1_F + n \cdot 1_F$ and $(mn) \cdot 1_F = (m \cdot 1_F)(n \cdot 1_F)$ for all $m, n \ge 1$.

## Facts & Assumptions

**Given:** An ordered field $F$ whose canonical naturals are defined recursively by $1 \cdot 1_F = 1_F$ and $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$, with $0 \cdot 1_F = 0$.

[L1] $0 < 1_F$ in every ordered field ([[cor-of-one-positive]]).

[L2] The order is compatible with addition and positives are closed under addition: $a < b$ implies $a + c < b + c$, and $a > 0$, $b > 0$ imply $a + b > 0$ ([[lem-of-add-order]]).

## Proof

**Proof technique:** induction.

1.1 Base case $n = 1$: by definition $1 \cdot 1_F = 1_F$, and $1_F > 0$. [L1, base]

1.2 Inductive hypothesis: assume $n \cdot 1_F > 0$ for some fixed $n \ge 1$. [ih]

1.3 By the recursion, $(n+1) \cdot 1_F - n \cdot 1_F = 1_F > 0$, so $(n+1) \cdot 1_F > n \cdot 1_F$. [given, L1]

1.4 Additive identity: fix $m$ and induct on $n$; at $n = 1$, $(m+1) \cdot 1_F = m \cdot 1_F + 1_F$ by the recursion, and if $(m+n) \cdot 1_F = m \cdot 1_F + n \cdot 1_F$ then $(m+n+1) \cdot 1_F = (m+n) \cdot 1_F + 1_F = m \cdot 1_F + n \cdot 1_F + 1_F = m \cdot 1_F + (n+1) \cdot 1_F$. [given, algebra]

2.1 Inductive step: $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$ is a sum of two positives, by the hypothesis and $1_F > 0$, hence $(n+1) \cdot 1_F > 0$. [step 1.2, L1, L2]

2.2 Iterating 1.3, for $m < n$ one has $m \cdot 1_F < n \cdot 1_F$, so $n \mapsto n \cdot 1_F$ is strictly increasing and therefore injective on $\{1, 2, 3, \dots\}$. [step 1.3, L2]

2.3 Multiplicative identity: fix $m$ and induct on $n$; at $n = 1$, $(m \cdot 1) \cdot 1_F = m \cdot 1_F = (m \cdot 1_F)(1 \cdot 1_F)$, and the step $(m(n+1)) \cdot 1_F = (mn + m) \cdot 1_F = (mn) \cdot 1_F + m \cdot 1_F = (m \cdot 1_F)(n \cdot 1_F) + (m \cdot 1_F)(1_F) = (m \cdot 1_F)((n+1) \cdot 1_F)$ uses 1.4 and distributivity. [step 1.4, algebra]

3.1 By induction on 1.1, 1.2, 2.1, $n \cdot 1_F > 0$ for every $n \ge 1$; with the strict increase 2.2 and the identities 1.4, 2.3, every claim holds. [step 2.1, step 2.2, step 1.4, step 2.3, discharge-induction] ∎
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

### `thm-of-archimedean`

````markdown
---
id: thm-of-archimedean
kind: theorem
title: "Every complete ordered field is Archimedean"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complete-ordered-field, lem-of-naturals-positive, cor-of-one-positive, def-ordered-field]
aliases: []
landmark: true
short: "complete ⇒ Archimedean"
proof_strategy: contradiction
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
    - title: "Neil Donaldson, Math 140A notes: Completeness and the Archimedean property"
      url: "https://www.math.uci.edu/~ndonalds/math140a/1complete.html"
pipeline_run: null
---

## Statement

Every complete ordered field $F$ ([[def-complete-ordered-field]]) is Archimedean:
for every $x \in F$ there is a natural number $n \ge 1$ with $x < n \cdot 1_F$,
where $n \cdot 1_F$ is the canonical natural of the ordered field $F$
([[def-ordered-field]]). Equivalently, the canonical naturals are cofinal in $F$.

## Facts & Assumptions

**Given:** A complete ordered field $F$; write $A = \{\, n \cdot 1_F : n \ge 1 \,\}$ for the set of its canonical naturals.

[L1] Least-upper-bound property: every nonempty $S \subseteq F$ that is bounded above has a least upper bound $\sup S \in F$ ([[def-complete-ordered-field]]).

[L2] Each canonical natural satisfies $n \cdot 1_F > 0$, one has $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$, and $(n+1) \cdot 1_F > n \cdot 1_F$ ([[lem-of-naturals-positive]]).

[L3] $0 < 1_F$ ([[cor-of-one-positive]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $F$ is not Archimedean: there is some $x \in F$ with $n \cdot 1_F \le x$ for all $n \ge 1$, that is, $x$ is an upper bound of $A$. [assume-contra]

2.1 The set $A$ is nonempty, since $1 \cdot 1_F = 1_F \in A$, and it is bounded above by $x$. [step 1.1, L2]

3.1 By the least-upper-bound property, $A$ has a least upper bound $s = \sup A \in F$. [step 2.1, L1]

4.1 Since $1_F > 0$, we have $s - 1_F < s$; as $s$ is the least upper bound, $s - 1_F$ is not an upper bound of $A$. [step 3.1, L3]

5.1 Hence there is some $m \ge 1$ with $m \cdot 1_F > s - 1_F$. [step 4.1]

6.1 Adding $1_F$ to both sides, $(m+1) \cdot 1_F = m \cdot 1_F + 1_F > s$. [step 5.1, L2]

7.1 But $(m+1) \cdot 1_F \in A$, so $(m+1) \cdot 1_F \le s$ because $s$ is an upper bound of $A$, contradicting 6.1. [step 6.1, step 3.1, L2]

8.1 The assumption is therefore untenable, so $F$ is Archimedean. [step 7.1, discharge-contradiction] ∎
````

