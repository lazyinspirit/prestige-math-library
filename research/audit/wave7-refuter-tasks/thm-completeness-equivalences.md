## Selection reasons

- critical risk (10): 9 declared dependencies; 7 cited facts; 8 numbered proof steps; boundary-sensitive language; analytic limiting/completeness language

## Target item — `thm-completeness-equivalences`

Normalized current SHA-256: `95ea5483cd72b0f13c891ea5295e2f6fdddb5550d2de656ef385e28c3afc55d9`

The complete current item follows, including frontmatter:

````markdown
---
id: thm-completeness-equivalences
kind: theorem
title: "For an ordered field the five completeness properties are equivalent, provided the Archimedean property is assumed alongside nested intervals and Cauchy completeness"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-completeness-properties, def-archimedean-field, lem-lub-implies-nested-intervals, lem-nested-intervals-and-archimedean-imply-bw, lem-bw-implies-archimedean, lem-bw-implies-cauchy-complete, lem-cauchy-complete-and-archimedean-imply-mct, lem-mct-implies-archimedean, lem-mct-implies-lub]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "J. F. Hall, Completeness of Ordered Fields"
      url: "https://arxiv.org/abs/1101.5652"
    - title: "Completeness of the real numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Completeness_of_the_real_numbers"
    - title: "Least-upper-bound property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Least-upper-bound_property"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 and Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §1.2 and §2.3"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field, with the five properties (LUB), (MCT), (NIP), (BW),
(CC) and the Archimedean property (ARCH) as in
[[def-completeness-properties]] and [[def-archimedean-field]]. The following
five statements about $F$ are equivalent:

1. (LUB);
2. (ARCH) and (NIP);
3. (BW);
4. (ARCH) and (CC);
5. (MCT).

Moreover each of (LUB), (BW) and (MCT) implies (ARCH) on its own, so in
statements 1, 3 and 5 the Archimedean property is a consequence rather than a
hypothesis.

**The Archimedean hypothesis in statements 2 and 4 may not be dropped.** It is
not an artefact of the proof: the nested interval property without it does not
imply (LUB) ([[fs-nested-intervals-implies-lub]]), and neither does Cauchy
completeness without it ([[fs-cauchy-complete-implies-lub]]). Both are refuted
by the same witness, the formal Laurent series field
$\mathbb{R}((t^{-1}))$.

The equivalence is proved as a single cycle
$1 \Rightarrow 2 \Rightarrow 3 \Rightarrow 4 \Rightarrow 5 \Rightarrow 1$, each
arrow being one lemma of this page.

## Facts & Assumptions

**Given:** An ordered field $F$.

[L1] (LUB) implies (ARCH) and (NIP) ([[lem-lub-implies-nested-intervals]]).

[L2] (ARCH) together with (NIP) implies (BW) ([[lem-nested-intervals-and-archimedean-imply-bw]]).

[L3] (BW) implies (ARCH) ([[lem-bw-implies-archimedean]]).

[L4] (BW) implies (CC) ([[lem-bw-implies-cauchy-complete]]).

[L5] (ARCH) together with (CC) implies (MCT) ([[lem-cauchy-complete-and-archimedean-imply-mct]]).

[L6] (MCT) implies (ARCH) ([[lem-mct-implies-archimedean]]).

[L7] (ARCH) together with (MCT) implies (LUB) ([[lem-mct-implies-lub]]).

## Proof

**Proof technique:** direct.

1.1 Statement 1 implies statement 2: (LUB) gives both (ARCH) and (NIP). [L1]

1.2 Statement 2 implies statement 3: (ARCH) with (NIP) gives (BW). [L2]

1.3 Statement 3 implies statement 4: (BW) gives (ARCH), and (BW) gives (CC), so it gives their conjunction. [L3, L4]

1.4 Statement 4 implies statement 5: (ARCH) with (CC) gives (MCT). [L5]

1.5 Statement 5 implies statement 1: (MCT) gives (ARCH) by [L6], and (ARCH) with (MCT) gives (LUB) by [L7]. [L6, L7]

2.1 Steps 1.1 to 1.5 form a cycle passing through all five statements, so for any two of them there is a chain of implications from the first to the second; the five are therefore equivalent. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5]

2.2 Each of (LUB), (BW) and (MCT) implies (ARCH): the first by [L1], the second by [L3], the third by [L6]. [step 1.1, step 1.3, step 1.5, L1, L3, L6]

3.1 Both assertions of the statement are established, by steps 2.1 and 2.2. [step 2.1, step 2.2] ∎

## Remarks

- **What the cycle costs.** Seven lemmas suffice for the whole equivalence, because a single cycle through all five statements yields every implication between them, and the arrangement is chosen so that no lemma has to carry an Archimedean hypothesis it cannot discharge. Statement 3 is deliberately the hinge: (BW) is the one property that both implies (ARCH) and is implied by a nested interval argument, so the cycle can enter and leave it without an extra hypothesis.

- **Read as a statement about $\mathbb{R}$**, the theorem says that the five familiar theorems of a first analysis course are not five theorems but one, and that the least-upper-bound axiom could have been replaced by any of the other four (with (ARCH) alongside, where required). This library takes (LUB) as the axiom ([[def-complete-ordered-field]]) and proves the others from it on earlier pages; nothing here re-proves them for $\mathbb{R}$, and nothing here may be cited as a proof about $\mathbb{R}$ that is not already there.

- **The two failures are genuinely different from the three successes.** (NIP) and (CC) are both statements about sequences whose data are already close together, and neither of them ever produces a new element far away; that is why an infinitesimal layer can be added to a field without disturbing them, and why the naturals can stay bounded. (LUB), (BW) and (MCT) each quantify over an object that is only assumed *bounded*, so each of them can be tested against the canonical naturals themselves, and each fails at once when those are bounded. [[rem-where-the-archimedean-hypothesis-is-needed]] develops this.
````

## Wave 7 provenance row for the target

```json
{
  "id": "thm-completeness-equivalences",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://arxiv.org/abs/1101.5652"
  ],
  "rationale": "Hall Theorem 3.11 gives equivalence of Dedekind, monotone, Cantor, Bolzano-Weierstrass, and sequential completeness for Archimedean ordered fields. The local theorem repackages exactly the five selected clauses so ARCH is attached only to NIP and CC.",
  "alpha_concurred": false,
  "at": "2026-08-08",
  "ledger": "wave7-real-analysis-completeness-limits.provenance.jsonl"
}
```

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "lem-lub-implies-nested-intervals",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field with the least-upper-bound property (LUB) of\n[[def-completeness-properties]]. Then:\n\n1. $F$ is Archimedean ([[def-archimedean-field]]);\n2. $F$ has the nested interval property (NIP).\n\nThe intersection point produced in claim 2 is the supremum of the left\nendpoints, and the proof does not use the hypothesis that the lengths tend to\n$0$: an ordered field with (LUB) satisfies the *unrestricted* nested interval\nproperty, of which (NIP) as defined is a special case.",
      "uses": [
        "1.1",
        "2.2"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-nested-intervals-and-archimedean-imply-bw",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field that is Archimedean ([[def-archimedean-field]]) and\nhas the nested interval property (NIP) of [[def-completeness-properties]]. Then\n$F$ has the Bolzano-Weierstrass property (BW): every bounded sequence in $F$ has\na subsequence converging in $F$.\n\nSay that a set $E \\subseteq \\mathbb{N}$ is **cofinal** when for every\n$K \\in \\mathbb{N}$ there is $k \\ge K$ with $k \\in E$. The construction below\nbisects a bracketing interval, keeping at each stage a half that the sequence\nvisits cofinally often, and reads the limit off (NIP).",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-bw-implies-archimedean",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field with the Bolzano-Weierstrass property (BW) of\n[[def-completeness-properties]]. Then $F$ is Archimedean\n([[def-archimedean-field]]).\n\nConsequently (BW) needs no Archimedean hypothesis attached to it, in contrast\nwith the nested interval property and with Cauchy completeness, which do\n([[fs-nested-intervals-implies-lub]], [[fs-cauchy-complete-implies-lub]]).",
      "uses": [
        "1.3",
        "2.2"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-bw-implies-cauchy-complete",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field with the Bolzano-Weierstrass property (BW) of\n[[def-completeness-properties]]. Then $F$ has Cauchy completeness (CC): every\nCauchy sequence in $F$ converges in $F$.\n\nNo Archimedean hypothesis is needed here, and none is hidden: (BW) already\ncarries the Archimedean property on its own\n([[lem-bw-implies-archimedean]]), but that fact is not used below.",
      "uses": [
        "1.3"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-cauchy-complete-and-archimedean-imply-mct",
      "source_section": "Statement",
      "quote": "Let $F$ be an Archimedean ordered field ([[def-archimedean-field]]) with Cauchy\ncompleteness (CC). Then $F$ has the monotone convergence property (MCT) of\n[[def-completeness-properties]]: every nondecreasing sequence in $F$ that is\nbounded above converges in $F$.\n\nThe Archimedean hypothesis is not decoration. Without it the implication is\nfalse: $\\mathbb{R}((t^{-1}))$ has (CC) ([[thm-laurent-cauchy-complete]]) and\nfails (MCT), since (MCT) would force it to be Archimedean\n([[lem-mct-implies-archimedean]]) and it is not\n([[lem-laurent-non-archimedean]]).",
      "uses": [
        "1.4"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-mct-implies-archimedean",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field with the monotone convergence property (MCT) of\n[[def-completeness-properties]]. Then $F$ is Archimedean\n([[def-archimedean-field]]).\n\nSo (MCT), like (BW) and like (LUB), carries the Archimedean property on its own,\nand the hypothesis attached to (CC) in\n[[lem-cauchy-complete-and-archimedean-imply-mct]] need not be attached here.\nThis is what lets [[rem-where-the-archimedean-hypothesis-is-needed]] sort the\nfive properties into those that do and those that do not.",
      "uses": [
        "1.5",
        "2.2"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-mct-implies-lub",
      "source_section": "Statement",
      "quote": "Let $F$ be an Archimedean ordered field ([[def-archimedean-field]]) with the\nmonotone convergence property (MCT) of [[def-completeness-properties]]. Then $F$\nhas the least-upper-bound property (LUB), that is, $F$ is a complete ordered\nfield ([[def-complete-ordered-field]]).\n\nThe Archimedean hypothesis is stated for symmetry with the other implications on\nthis page and is in fact redundant here: (MCT) implies it on its own\n([[lem-mct-implies-archimedean]]).\n\nThe supremum is produced by bisection between an upper bound and a non-upper\nbound, and it is identified as a limit of both bracketing sequences.",
      "uses": [
        "1.5"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "Statement 1 implies statement 2: (LUB) gives both (ARCH) and (NIP).",
      "step": "1.1",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "Statement 2 implies statement 3: (ARCH) with (NIP) gives (BW).",
      "step": "1.2",
      "inputs": [
        "L2"
      ]
    },
    {
      "id": "step-1-3",
      "claim": "Statement 3 implies statement 4: (BW) gives (ARCH), and (BW) gives (CC), so it gives their conjunction.",
      "step": "1.3",
      "inputs": [
        "L3",
        "L4"
      ]
    },
    {
      "id": "step-1-4",
      "claim": "Statement 4 implies statement 5: (ARCH) with (CC) gives (MCT).",
      "step": "1.4",
      "inputs": [
        "L5"
      ]
    },
    {
      "id": "step-1-5",
      "claim": "Statement 5 implies statement 1: (MCT) gives (ARCH) by [L6], and (ARCH) with (MCT) gives (LUB) by [L7].",
      "step": "1.5",
      "inputs": [
        "L6",
        "L7"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "Steps 1.1 to 1.5 form a cycle passing through all five statements, so for any two of them there is a chain of implications from the first to the second; the five are therefore equivalent.",
      "step": "2.1",
      "inputs": [
        "1.1",
        "1.5",
        "1.2",
        "1.3",
        "1.4"
      ]
    },
    {
      "id": "step-2-2",
      "claim": "Each of (LUB), (BW) and (MCT) implies (ARCH): the first by [L1], the second by [L3], the third by [L6].",
      "step": "2.2",
      "inputs": [
        "L1",
        "L3",
        "L6",
        "1.1",
        "1.3",
        "1.5"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "Both assertions of the statement are established, by steps 2.1 and 2.2.",
      "step": "3.1",
      "inputs": [
        "2.1",
        "2.2"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The Statement quantifies over fixed nonempty data and introduces no empty-set or empty-family boundary."
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "No zero-valued parameter, zero denominator, or zero-index boundary affects the Statement."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "step 1.1: Statement 1 implies statement 2: (LUB) gives both (ARCH) and (NIP)."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "The hypotheses exclude or do not involve a degenerate equality/constant case."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "The Statement has no interval endpoint or finite-index endpoint boundary."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "step 2.1: all existence or selection moves were checked; any countable-choice use is explicitly tagged in the cited step."
    },
    {
      "case": "iff-forward",
      "status": "checked",
      "evidence": "step 1.1: the forward direction (or first implication in the stated equivalence cycle) starts here and was checked through the subsequent cited steps."
    },
    {
      "case": "iff-reverse",
      "status": "checked",
      "evidence": "step 3.1: the converse direction (or closing implication in the stated equivalence cycle) is established here and was checked."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "complete",
    "reviewer": "Audit-Alpha wave 7 (owner-delegated); DeepSeek V4 Pro audit-refuter",
    "notes": "critical risk (10): 9 declared dependencies; 7 cited facts; 8 numbered proof steps; boundary-sensitive language; analytic limiting/completeness language, routed by risk-report.mjs. The read-only DeepSeek V4 Pro audit-refuter received the complete target and every cited dependency and returned CLEAN. Boundary evidence: All boundaries (empty, zero, one, degenerate, endpoints, nonempty-choice, iff-forward, iff-reverse) were checked per the supplied proof contract; no boundary condition invalidates the theorem. The equivalence cycle holds for every ordered field, including non-Archimedean ones, and no counterexample exists under the stated definitions. Checked surface: The title, public statement, all numbered proof steps (1.1–3.1), and the Remarks were read and verified. The logical structure is sound; the cycle establishes equivalence; the additional claim that (LUB), (BW), (MCT) each imply (ARCH) is supported; and no false mathematical assertion appears in the Remarks. ``` Alpha adjudicated the return against the current item and cited dependencies on disk and found no fatal mathematical or dependency-citation defect. Evidence: research/audit/wave7-preserved-refuters/thm-completeness-equivalences--82f73da9efa7ec6f.result.json."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "thm-completeness-equivalences",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-completeness-properties",
    "declared_target": "def-completeness-properties",
    "target_statement_provenance": "ai-altered",
    "targetPage": "equivalent-forms-of-completeness",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-completeness-equivalences",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-archimedean-field",
    "declared_target": "def-archimedean-field",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-completeness-equivalences",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "lem-lub-implies-nested-intervals",
    "declared_target": "lem-lub-implies-nested-intervals",
    "target_statement_provenance": "ai-altered",
    "targetPage": "equivalent-forms-of-completeness",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-completeness-equivalences",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "lem-nested-intervals-and-archimedean-imply-bw",
    "declared_target": "lem-nested-intervals-and-archimedean-imply-bw",
    "target_statement_provenance": "ai-altered",
    "targetPage": "equivalent-forms-of-completeness",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-completeness-equivalences",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "lem-bw-implies-archimedean",
    "declared_target": "lem-bw-implies-archimedean",
    "target_statement_provenance": "ai-altered",
    "targetPage": "equivalent-forms-of-completeness",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-completeness-equivalences",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "lem-bw-implies-cauchy-complete",
    "declared_target": "lem-bw-implies-cauchy-complete",
    "target_statement_provenance": "ai-altered",
    "targetPage": "equivalent-forms-of-completeness",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-completeness-equivalences",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "lem-cauchy-complete-and-archimedean-imply-mct",
    "declared_target": "lem-cauchy-complete-and-archimedean-imply-mct",
    "target_statement_provenance": "ai-altered",
    "targetPage": "equivalent-forms-of-completeness",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-completeness-equivalences",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "lem-mct-implies-archimedean",
    "declared_target": "lem-mct-implies-archimedean",
    "target_statement_provenance": "ai-altered",
    "targetPage": "equivalent-forms-of-completeness",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-completeness-equivalences",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "lem-mct-implies-lub",
    "declared_target": "lem-mct-implies-lub",
    "target_statement_provenance": "ai-altered",
    "targetPage": "equivalent-forms-of-completeness",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  }
]
```

## Relevant pending generated-risk rows

```json
[]
```

## Full text of every cited or declared item (13)

### `def-archimedean-field`

````markdown
---
id: def-archimedean-field
kind: definition
title: "Archimedean ordered field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-ordered-field, def-field]
aliases: []
landmark: false
short: "Archimedean"
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
    - title: "UTSA Mathematics: The Archimedean property"
      url: "https://mathresearch.utsa.edu/wiki/index.php?title=Real_Numbers%3AArchimedean_Property"
pipeline_run: null
---

## Definition

Let $F$ be an ordered field ([[def-ordered-field]]). For a natural number
$n \ge 1$, write $n \cdot 1_F := \underbrace{1_F + \cdots + 1_F}_{n}$ for the
$n$-fold sum of the multiplicative identity, and $0 \cdot 1_F := 0$. These are
the **canonical natural numbers** of $F$.

$F$ is **Archimedean** if for every $x \in F$ there is a natural number $n$ with

$$x < n \cdot 1_F.$$

Equivalently, the canonical naturals $(n \cdot 1_F)_{n \ge 1}$ are **cofinal**:
no single element of $F$ is an upper bound for all of them.

## Remarks

- Equivalently (applying the definition to $1/\varepsilon$): for every
  $\varepsilon > 0$ in $F$ there is $n$ with $1/(n \cdot 1_F) < \varepsilon$, so
  the canonical fractions $1/n$ are arbitrarily small.
- That the canonical naturals are well-defined, positive, and strictly
  increasing is [[lem-of-naturals-positive]]. Every complete ordered field is
  Archimedean ([[thm-of-archimedean]]); an ordered field need not be
  ([[cex-ordered-field-not-archimedean]]).
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

### `def-completeness-properties`

````markdown
---
id: def-completeness-properties
kind: definition
title: "The five completeness properties of an ordered field: least upper bound, monotone convergence, nested intervals, Bolzano-Weierstrass, and Cauchy completeness"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-sequences-in-an-ordered-field, def-ordered-field, def-archimedean-field, def-complete-ordered-field, def-upper-bound]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "J. F. Hall, Completeness of Ordered Fields"
      url: "https://arxiv.org/abs/1101.5652"
    - title: "Completeness of the real numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Completeness_of_the_real_numbers"
    - title: "Least-upper-bound property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Least-upper-bound_property"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 and Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §1.2 and §2.3"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Definition

Throughout, $F$ is an ordered field ([[def-ordered-field]]) with its order and
its absolute value. Sequences in $F$, and the notions of convergence in $F$,
Cauchyness in $F$, boundedness, nondecreasing and nonincreasing, subsequence,
closed interval $[a,b]_F$, nesting, and lengths tending to $0$ in $F$, are the
ones fixed once and for all in [[def-sequences-in-an-ordered-field]]. They are
not restated here and they are never read in $\mathbb{R}$: every $\varepsilon$
below ranges over the positive elements of $F$ itself.

A sequence $(x_k)$ in $F$ is **bounded above** when there is $B \in F$ with
$x_k \le B$ for every $k \in \mathbb{N}$, and a subset $S \subseteq F$ is bounded
above when there is $B \in F$ with $s \le B$ for every $s \in S$
([[def-complete-ordered-field]], [[def-upper-bound]]).

The following are five properties that $F$ may or may not have.

- **(LUB), the least-upper-bound property.** Every nonempty $S \subseteq F$ that
  is bounded above has a least upper bound in $F$. This is exactly the condition
  that makes $F$ a complete ordered field ([[def-complete-ordered-field]]), and
  the two names are used interchangeably here.

- **(MCT), the monotone convergence property.** Every nondecreasing sequence in
  $F$ that is bounded above converges in $F$.

- **(NIP), the nested interval property.** For every nested sequence
  $(I_k)_{k \in \mathbb{N}}$ of closed intervals $I_k = [a_k, b_k]_F$ of $F$
  whose lengths tend to $0$ in $F$, the intersection

  $$\bigcap_{k \in \mathbb{N}} I_k$$

  is nonempty.

- **(BW), the Bolzano-Weierstrass property.** Every bounded sequence in $F$ has
  a subsequence that converges in $F$.

- **(CC), Cauchy completeness.** Every Cauchy sequence in $F$ converges in $F$.

Alongside these we use the **Archimedean property (ARCH)** of
[[def-archimedean-field]]: for every $x \in F$ there is a natural number $n$
with $x < n \cdot 1_F$.

## Remarks

- **(NIP) is stated in the shrinking form because that is the form both
  satisfied by the formal Laurent series field and used by the bisection
  theorem.** The field $\mathbb{R}((t^{-1}))$ is Cauchy complete without having
  least upper bounds ([[thm-laurent-cauchy-complete]],
  [[cor-laurent-not-lub-complete]]), and it satisfies shrinking (NIP)
  ([[cor-laurent-nested-intervals]]). The same shrinking condition is exactly
  what the bisection argument of
  [[lem-nested-intervals-and-archimedean-imply-bw]] produces.

- **"Lengths tend to $0$" is read in $F$.** For a non-Archimedean $F$ this is
  strictly stronger than the same words read in $\mathbb{R}$ through some
  identification of the rational scalars, and the difference is not academic:
  the remarks of [[cor-laurent-nested-intervals]] exhibit intervals in
  $\mathbb{R}((t^{-1}))$ whose lengths are the real constants $2/(n+1)$, which
  tend to $0$ in the ordinary real sense and do not tend to $0$ in the order of
  that field.

- **Boundedness of a sequence is two-sided, boundedness above is not.**
  [[def-sequences-in-an-ordered-field]] calls $(x_k)$ bounded when
  $|x_k| \le M$ for every $k$, which is the hypothesis of (BW); (MCT) asks only
  for the one-sided bound $x_k \le B$, which for a nondecreasing sequence is the
  only side in question, since $x_0 \le x_k$ always.

- **(MCT) is stated for nondecreasing sequences only.** The nonincreasing case
  is not a separate assumption: if $(x_k)$ is nonincreasing and bounded below by
  $b$ then $(-x_k)$ is nondecreasing and bounded above by $-b$, and $x_k \to L$
  exactly when $-x_k \to -L$, because $|(-x_k) - (-L)| = |x_k - L|$. That
  reduction is used in the proof of [[lem-mct-implies-lub]].

- **Nothing here presumes that any of the five holds.** They are predicates on
  an ordered field, and the point of the page they open is that in the presence
  of (ARCH) they are all the same predicate ([[thm-completeness-equivalences]]),
  while without it two of them are strictly weaker
  ([[fs-nested-intervals-implies-lub]], [[fs-cauchy-complete-implies-lub]]).

- **(CC) is this library's third rendering of "Cauchy complete", and for $\mathbb{R}$ all three agree.** [[def-cauchy-in-metric]] and [[def-complete-metric-space]] read Cauchyness and completeness in a metric space, and the case $n = 1$ of [[thm-euclidean-space-complete]] proves $(\mathbb{R}, |x-y|)$ complete; [[def-real-limit]] reads both notions for real sequences, with $\varepsilon$ ranging over the positive rationals; the present definition reads them in an ordered field $F$. For $F = \mathbb{R}$ under the metric $d(x,y) = |x-y|$ of [[lem-real-line-is-a-metric-space]] the three unfold to the same quantified statement: below every positive real lies a positive rational ([[lem-rat-embeds-dense]]), so the two ranges of $\varepsilon$ pick out the same Cauchy sequences and the same convergent ones. So "$\mathbb{R}$ satisfies (CC)" is a statement this library has already proved twice, as [[thm-cauchy-criterion-via-lub]] and as the case $n = 1$ of [[thm-euclidean-space-complete]]. The parallel stops at $\mathbb{R}$. The absolute value of an ordered field takes its values in $F$, while a metric is required to take its values in $\mathbb{R}$ ([[def-metric-space]]), so for a non-Archimedean $F$ the map $(x,y) \mapsto |x-y|$ is not a metric in this library's sense and the metric development says nothing about it. That is why [[lem-of-sequence-basics]] had to be proved from the order axioms alone, although its Cauchy clauses reappear for metric spaces as [[lem-metric-convergent-implies-cauchy]], [[lem-metric-cauchy-bounded]] and [[lem-metric-cauchy-with-convergent-subsequence]]. Neither development generalises the other; they meet exactly at $\mathbb{R}$.
````

### `fs-cauchy-complete-implies-lub`

````markdown
---
id: fs-cauchy-complete-implies-lub
kind: false-statement
title: "FALSE: an ordered field in which every Cauchy sequence converges has the least-upper-bound property"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-completeness-equivalences, def-completeness-properties, def-archimedean-field, def-sequences-in-an-ordered-field, def-complete-ordered-field, thm-laurent-cauchy-complete, cor-laurent-not-lub-complete, lem-laurent-non-archimedean, thm-laurent-ordered-field]
justified_by: []
aliases: []
landmark: true
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
    - title: "J. F. Hall, Completeness of Ordered Fields"
      url: "https://arxiv.org/abs/1101.5652"
    - title: "Complete metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Complete_metric_space"
    - title: "Completeness of the real numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Completeness_of_the_real_numbers"
    - title: "Formal power series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Formal_power_series"
pipeline_run: null
---

## Statement

**False claim:** every ordered field in which every Cauchy sequence converges,
that is, every ordered field with (CC) as in [[def-completeness-properties]],
has the least-upper-bound property (LUB).

This is clause 4 of [[thm-completeness-equivalences]] with its Archimedean
hypothesis deleted. The witness is again the formal Laurent series field
$K = \mathbb{R}((t^{-1}))$: every Cauchy sequence in $K$ converges in $K$, and
$K$ has no least upper bound for the set of its own canonical naturals.

**This is the sharpest of the failures on this page**, because "complete" is the
word most often used loosely for both properties at once. In $\mathbb{R}$ they
coincide; in an ordered field they do not, and the difference is exactly the
Archimedean property.

## Facts & Assumptions

**Given:** The formal Laurent series field $K = \mathbb{R}((t^{-1}))$.

[L1] $K$ is an ordered field ([[thm-laurent-ordered-field]]).

[L2] Every sequence in $K$ that is Cauchy in $K$ converges in $K$ ([[thm-laurent-cauchy-complete]]); Cauchyness and convergence in an ordered field are as in [[def-sequences-in-an-ordered-field]], and that is exactly (CC) ([[def-completeness-properties]]).

[L3] $K$ is not a complete ordered field: the set $A = \{\, n \cdot 1_K : n \in \mathbb{N}\,\}$ is nonempty and bounded above by $t$ and has no least upper bound in $K$ ([[cor-laurent-not-lub-complete]], [[def-complete-ordered-field]]).

[L4] $K$ is not Archimedean, since $n \cdot 1_K < t$ for every natural $n$ ([[lem-laurent-non-archimedean]], [[def-archimedean-field]]).

[L5] For an ordered field, the Archimedean property together with (CC) does imply (LUB) ([[thm-completeness-equivalences]], clause 4 implies clause 1).

## Refutation

**Proof technique:** direct.

1.1 $K$ is an ordered field. [L1]

1.2 $K$ has (CC): every Cauchy sequence in $K$ converges in $K$. [L2]

1.3 $K$ does not have (LUB), the set of its canonical naturals being nonempty, bounded above and without a least upper bound. [L3]

2.1 So $K$ is an ordered field with (CC) and without (LUB), and the claim is false. [step 1.1, step 1.2, step 1.3]

3.1 What fails in $K$ is precisely the hypothesis that the claim deleted: $K$ is not Archimedean, and with that hypothesis restored the implication is true. [step 1.1, L4, L5] ∎

## Remarks

- **Where the thresholds are read is what makes this possible.** Cauchyness in
  $K$ is tested against every positive element of $K$, including the
  infinitesimals ([[def-sequences-in-an-ordered-field]]), so the condition is
  much stronger in $K$ than the same words read with rational thresholds. It is
  strong enough that only sequences whose coefficients freeze can satisfy it,
  and those all converge. Meanwhile the canonical naturals, which are what (LUB)
  fails on, are not Cauchy at all, so (CC) never gets a chance to see them.

- **The three properties $K$ has and the three it lacks.** It has (CC) and (NIP)
  in the shrinking form ([[cor-laurent-nested-intervals]]) and it is an ordered
  field; it lacks (LUB), and hence also (BW) and (MCT), each of which would force
  it to be Archimedean ([[lem-bw-implies-archimedean]],
  [[lem-mct-implies-archimedean]]).

- **A reader who wants a single sentence:** Cauchy completeness says the field
  has no holes that a sequence can point at; the least-upper-bound property says
  it has no holes at all. In a non-Archimedean field a sequence indexed by
  $\mathbb{N}$ is too short to point at the holes.
````

### `fs-nested-intervals-implies-lub`

````markdown
---
id: fs-nested-intervals-implies-lub
kind: false-statement
title: "FALSE: the nested interval property alone implies the least-upper-bound property"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-completeness-equivalences, def-completeness-properties, def-archimedean-field, def-sequences-in-an-ordered-field, def-complete-ordered-field, cor-laurent-nested-intervals, cor-laurent-not-lub-complete, lem-laurent-non-archimedean, thm-laurent-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "J. F. Hall, Completeness of Ordered Fields"
      url: "https://arxiv.org/abs/1101.5652"
    - title: "Nested intervals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nested_intervals"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
    - title: "Formal power series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Formal_power_series"
pipeline_run: null
---

## Statement

**False claim:** every ordered field with the nested interval property (NIP) of
[[def-completeness-properties]] has the least-upper-bound property (LUB).

This is clause 2 of [[thm-completeness-equivalences]] with its Archimedean
hypothesis deleted, and the deletion is exactly what makes it false. The witness
is the formal Laurent series field $K = \mathbb{R}((t^{-1}))$, which satisfies
(NIP) and has no least upper bound for the set of its own canonical naturals.

Note that the false claim is being refuted in the *shrinking* form of (NIP),
which is the weaker hypothesis and therefore makes the implication stronger.

## Facts & Assumptions

**Given:** The formal Laurent series field $K = \mathbb{R}((t^{-1}))$.

[L1] $K$ is an ordered field ([[thm-laurent-ordered-field]]).

[L2] Every nested sequence of closed intervals of $K$ whose lengths tend to $0$ in $K$ has exactly one point in its intersection ([[cor-laurent-nested-intervals]]); intervals, nesting and lengths tending to $0$ in an ordered field are as in [[def-sequences-in-an-ordered-field]], and (NIP) asks exactly that such an intersection be nonempty ([[def-completeness-properties]]).

[L3] $K$ is not a complete ordered field: the set $A = \{\, n \cdot 1_K : n \in \mathbb{N}\,\}$ is nonempty and bounded above by $t$ and has no least upper bound in $K$ ([[cor-laurent-not-lub-complete]], [[def-complete-ordered-field]]).

[L4] $K$ is not Archimedean, since $n \cdot 1_K < t$ for every natural $n$ ([[lem-laurent-non-archimedean]], [[def-archimedean-field]]).

[L5] For an ordered field, the Archimedean property together with (NIP) does imply (LUB) ([[thm-completeness-equivalences]], clause 2 implies clause 1).

## Refutation

**Proof technique:** direct.

1.1 $K$ is an ordered field. [L1]

1.2 $K$ has (NIP): any nested sequence of closed intervals of $K$ whose lengths tend to $0$ in $K$ has a point in its intersection, indeed exactly one. [L2]

1.3 $K$ does not have (LUB), the set of its canonical naturals being nonempty, bounded above and without a least upper bound. [L3]

2.1 So $K$ is an ordered field with (NIP) and without (LUB), and the claim is false. [step 1.1, step 1.2, step 1.3]

3.1 What fails in $K$ is precisely the hypothesis that the claim deleted: $K$ is not Archimedean, and with that hypothesis restored the implication is true. [step 1.1, L4, L5] ∎

## Remarks

- **The failure is not an accident of one field.** By [[lem-lub-implies-nested-intervals]] every field with (LUB) is Archimedean, so any witness at all must be non-Archimedean; and in a non-Archimedean field the shrinking hypothesis in (NIP) is a severe restriction, because a length that tends to $0$ in the order of the field must get below every infinitesimal. That is why checking shrinking (NIP) in $K$ is substantive, and why $K$ can satisfy (NIP) while failing (LUB) at all.

- **$\mathbb{R}(t)$ will not do as a witness**, although it is the library's other non-Archimedean ordered field ([[cex-ordered-field-not-archimedean]]). Nothing in this library establishes any nested interval property for it, and the page that built $K$ says why a new field was constructed rather than reusing that one.

- **The companion failure** is [[fs-cauchy-complete-implies-lub]], refuted by the same field. Together they are the exact content of the Archimedean hypotheses in clauses 2 and 4 of [[thm-completeness-equivalences]].
````

### `lem-bw-implies-archimedean`

````markdown
---
id: lem-bw-implies-archimedean
kind: lemma
title: "Bolzano-Weierstrass alone forces the Archimedean property, so it needs no separate Archimedean hypothesis"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-completeness-properties, def-sequences-in-an-ordered-field, def-archimedean-field, def-ordered-field, lem-of-add-order, lem-of-abs-value, lem-of-naturals-positive, lem-of-sequence-basics, cor-of-one-positive, lem-nat-discrete]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
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
    - title: "J. F. Hall, Completeness of Ordered Fields"
      url: "https://arxiv.org/abs/1101.5652"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
    - title: "Bolzano-Weierstrass theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bolzano%E2%80%93Weierstrass_theorem"
    - title: "J. Lebl, Basic Analysis I, §1.2 and §2.3"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field with the Bolzano-Weierstrass property (BW) of
[[def-completeness-properties]]. Then $F$ is Archimedean
([[def-archimedean-field]]).

Consequently (BW) needs no Archimedean hypothesis attached to it, in contrast
with the nested interval property and with Cauchy completeness, which do
([[fs-nested-intervals-implies-lub]], [[fs-cauchy-complete-implies-lub]]).

## Facts & Assumptions

**Given:** An ordered field $F$ with (BW).

[L1] The property (BW): every bounded sequence in $F$ has a subsequence converging in $F$ ([[def-completeness-properties]]).

[L2] Sequences in an ordered field: a sequence is a function $\mathbb{N} \to F$; it is bounded when $|x_k| \le M$ for every $k$ and some $M \in F$; a subsequence is taken along a strictly increasing $n : \mathbb{N} \to \mathbb{N}$; convergence and Cauchyness in $F$ are as fixed there ([[def-sequences-in-an-ordered-field]]).

[L3] Archimedean property: $F$ is Archimedean when for every $x \in F$ there is a natural number $n$ with $x < n \cdot 1_F$, where $0 \cdot 1_F = 0$ and $(n+1)\cdot 1_F = n \cdot 1_F + 1_F$ ([[def-archimedean-field]]).

[L4] Canonical naturals: $n \cdot 1_F > 0$ for $n \ge 1$, the map $n \mapsto n \cdot 1_F$ is strictly increasing on $\{1,2,3,\dots\}$, and $(m+n)\cdot 1_F = m \cdot 1_F + n \cdot 1_F$ ([[lem-of-naturals-positive]]).

[L5] Absolute value: $|u| = u$ whenever $u \ge 0$ ([[lem-of-abs-value]]).

[L6] A sequence converging in $F$ is Cauchy in $F$ (clause 3 of [[lem-of-sequence-basics]]).

[L7] Order arithmetic: $0 < 1_F$ ([[cor-of-one-positive]]); the order is total, so the failure of $x < y$ is $y \le x$; adding a constant preserves the order ([[lem-of-add-order]], [[def-ordered-field]]). Here [[lem-of-add-order]] states the STRICT forms and only those; the nonstrict forms used below are those together with the equality cases, which trichotomy settles, the order being total ([[def-ordered-field]]).

[L8] Discreteness of $\mathbb{N}$: $m < p$ if and only if $m + 1 \le p$ ([[lem-nat-discrete]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $F$ has (BW) and is not Archimedean; then there is $x \in F$ such that $x < n \cdot 1_F$ fails for every natural $n$, that is, $n \cdot 1_F \le x$ for every $n \in \mathbb{N}$. [L3, L7, assume-contra]

1.2 Let $(y_k)$ be the sequence in $F$ given by $y_k := k \cdot 1_F$, so that $y_0 = 0$, $y_{k+1} = y_k + 1_F$, and $y_k \ge 0$ for every $k$. [L2, L3, L4]

2.1 $(y_k)$ is bounded: $|y_k| = y_k \le x$ for every $k$. [step 1.1, step 1.2, L2, L5]

3.1 By (BW) there is a strictly increasing $n : \mathbb{N} \to \mathbb{N}$ and an $L \in F$ with $y_{n_j} \to L$ in $F$. [step 2.1, L1, L2]

4.1 The subsequence $(y_{n_j})$ is therefore Cauchy in $F$, so, $1_F$ being positive, there is $J \in \mathbb{N}$ with $|y_{n_j} - y_{n_i}| < 1_F$ for all $i, j \ge J$. [step 3.1, L2, L6, L7]

5.1 But $n_J < n_{J+1}$ gives $n_J + 1 \le n_{J+1}$ and hence $y_{n_{J+1}} \ge y_{n_J + 1} = y_{n_J} + 1_F$, so $y_{n_{J+1}} - y_{n_J} \ge 1_F > 0$ and $|y_{n_{J+1}} - y_{n_J}| \ge 1_F$, contradicting step 4.1. [step 1.2, step 4.1, L4, L5, L7, L8]

6.1 The assumption of step 1.1 is therefore untenable, and an ordered field with (BW) is Archimedean. [step 5.1, discharge-contradiction] ∎

## Remarks

- **The witness sequence is the obstruction itself.** In a non-Archimedean field
  the canonical naturals are bounded, so they form a bounded sequence; and no
  subsequence of them can converge, because consecutive terms of any
  subsequence stay at distance at least $1_F$. That is the whole argument, and
  it shows that (BW) fails in every non-Archimedean ordered field, for instance
  in $\mathbb{R}(t)$ ([[cex-ordered-field-not-archimedean]]) and in
  $\mathbb{R}((t^{-1}))$ ([[lem-laurent-non-archimedean]]).

- Note which direction is being used: the sequence is bounded and has no
  convergent subsequence, so (BW) is contradicted. Nothing here says that
  $(y_k)$ fails to be Cauchy for some other reason; it is Cauchy along no
  subsequence at all.
````

### `lem-bw-implies-cauchy-complete`

````markdown
---
id: lem-bw-implies-cauchy-complete
kind: lemma
title: "Bolzano-Weierstrass implies Cauchy completeness in any ordered field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-completeness-properties, def-sequences-in-an-ordered-field, lem-of-sequence-basics]
justified_by: []
aliases: []
landmark: false
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
    - title: "J. F. Hall, Completeness of Ordered Fields"
      url: "https://arxiv.org/abs/1101.5652"
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field with the Bolzano-Weierstrass property (BW) of
[[def-completeness-properties]]. Then $F$ has Cauchy completeness (CC): every
Cauchy sequence in $F$ converges in $F$.

No Archimedean hypothesis is needed here, and none is hidden: (BW) already
carries the Archimedean property on its own
([[lem-bw-implies-archimedean]]), but that fact is not used below.

## Facts & Assumptions

**Given:** An ordered field $F$ with (BW), and a Cauchy sequence $(x_k)$ in $F$.

[L1] The properties (BW) and (CC) of [[def-completeness-properties]].

[L2] Sequences in an ordered field: boundedness, subsequences, convergence in $F$ and Cauchyness in $F$ ([[def-sequences-in-an-ordered-field]]).

[L3] In any ordered field, a Cauchy sequence is bounded (clause 4 of [[lem-of-sequence-basics]]), and a Cauchy sequence with a subsequence converging to $L$ converges to $L$ (clause 5 of the same lemma).

## Proof

**Proof technique:** direct.

1.1 Being Cauchy in $F$, the sequence $(x_k)$ is bounded. [L2, L3]

2.1 By (BW) there is a strictly increasing $n : \mathbb{N} \to \mathbb{N}$ and an $L \in F$ with $x_{n_j} \to L$ in $F$. [step 1.1, L1, L2]

3.1 A Cauchy sequence with a convergent subsequence converges to the same limit, so $x_k \to L$ in $F$. [step 2.1, L2, L3]

4.1 An arbitrary Cauchy sequence in $F$ therefore converges in $F$, which is (CC). [step 3.1, L1] ∎

## Remarks

- **This is the only implication on the page that is pure bookkeeping**, and
  that is precisely because both of its ingredients were extracted into
  [[lem-of-sequence-basics]] and proved there for an arbitrary ordered field.
  Written out inline it would repeat the boundedness induction and the
  three-term triangle estimate of that lemma.

- The converse fails: $\mathbb{R}((t^{-1}))$ has (CC)
  ([[thm-laurent-cauchy-complete]]) and, being non-Archimedean
  ([[lem-laurent-non-archimedean]]), fails (BW) by
  [[lem-bw-implies-archimedean]].
````

### `lem-cauchy-complete-and-archimedean-imply-mct`

````markdown
---
id: lem-cauchy-complete-and-archimedean-imply-mct
kind: lemma
title: "Cauchy completeness plus the Archimedean property imply the monotone convergence property"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-completeness-properties, def-sequences-in-an-ordered-field, def-archimedean-field, thm-recursion, thm-well-ordering-principle, thm-induction-principle, thm-nat-linear-order, lem-of-abs-value, lem-of-add-order, lem-of-sign-rules, lem-of-inverse-positive, lem-of-naturals-positive, def-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
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
    - title: "J. F. Hall, Completeness of Ordered Fields"
      url: "https://arxiv.org/abs/1101.5652"
    - title: "Monotone convergence theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotone_convergence_theorem"
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
    - title: "J. Lebl, Basic Analysis I, §2.4"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $F$ be an Archimedean ordered field ([[def-archimedean-field]]) with Cauchy
completeness (CC). Then $F$ has the monotone convergence property (MCT) of
[[def-completeness-properties]]: every nondecreasing sequence in $F$ that is
bounded above converges in $F$.

The Archimedean hypothesis is not decoration. Without it the implication is
false: $\mathbb{R}((t^{-1}))$ has (CC) ([[thm-laurent-cauchy-complete]]) and
fails (MCT), since (MCT) would force it to be Archimedean
([[lem-mct-implies-archimedean]]) and it is not
([[lem-laurent-non-archimedean]]).

## Facts & Assumptions

**Given:** An Archimedean ordered field $F$ with (CC), and a nondecreasing sequence $(x_k)$ in $F$ with $x_k \le B$ for every $k$ and some $B \in F$.

[L1] The properties (MCT) and (CC) of [[def-completeness-properties]].

[L2] Sequences in an ordered field: $(x_k)$ is nondecreasing when $x_j \le x_k$ for all $j \le k$; it is Cauchy in $F$ when for every $\varepsilon > 0$ in $F$ there is $N$ with $|x_k - x_l| < \varepsilon$ for all $k, l \ge N$; convergence in $F$ is as fixed there ([[def-sequences-in-an-ordered-field]]).

[L3] Archimedean property: for every $z \in F$ there is a natural $n \ge 1$ with $z < n \cdot 1_F$ ([[def-archimedean-field]]); the canonical naturals satisfy $n \cdot 1_F > 0$ for $n \ge 1$ and $(m+n)\cdot 1_F = m \cdot 1_F + n \cdot 1_F$, with $0 \cdot 1_F = 0$ ([[lem-of-naturals-positive]]).

[L4] Recursion theorem ([[thm-recursion]]); well-ordering principle, every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]); induction principle ([[thm-induction-principle]]); the order on $\mathbb{N}$ is total ([[thm-nat-linear-order]]).

[L5] Absolute value: $|u| = u$ whenever $u \ge 0$ ([[lem-of-abs-value]]).

[L6] Order arithmetic: adding a constant preserves the strict order and strict inequalities add ([[lem-of-add-order]]), the nonstrict forms following with the equality cases; for $c > 0$ one has $a < b$ if and only if $ac < bc$ ([[lem-of-sign-rules]]); a positive element is invertible with positive inverse ([[lem-of-inverse-positive]]); the order is total and transitive ([[def-ordered-field]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $(x_k)$ is not Cauchy in $F$: there is $\varepsilon > 0$ in $F$ such that for every $N \in \mathbb{N}$ there are $k, l \ge N$ with $|x_k - x_l| \ge \varepsilon$. [L2, assume-contra]

2.1 For every $n \in \mathbb{N}$ there is $k > n$ with $x_k - x_n \ge \varepsilon$: apply step 1.1 with $N := n + 1$ to get $k, l \ge n+1$ with $|x_k - x_l| \ge \varepsilon$, name them so that $l \le k$, note that monotonicity gives $x_l \le x_k$ and hence $|x_k - x_l| = x_k - x_l \ge \varepsilon$, and note that $n < l$ gives $x_n \le x_l$, so $x_k - x_n \ge x_k - x_l \ge \varepsilon$ with $k \ge n+1 > n$. [step 1.1, L2, L4, L5, L6]

3.1 For each $n$ the set $\{\, k \in \mathbb{N} : k > n \text{ and } x_k - x_n \ge \varepsilon \,\}$ is therefore nonempty and has a least element, so $f(n) := \min\{k : k > n, \ x_k - x_n \ge \varepsilon\}$ is a total function $\mathbb{N} \to \mathbb{N}$; the recursion theorem applied to $\mathbb{N}$, the element $0$ and $f$ gives indices $k_0 = 0$ and $k_{j+1} = f(k_j)$, with $k_j < k_{j+1}$ and $x_{k_{j+1}} - x_{k_j} \ge \varepsilon$ for every $j$. [step 2.1, L4]

4.1 By induction on $j$, $x_{k_j} - x_{k_0} \ge (j \cdot 1_F)\,\varepsilon$ for every $j$: at $j = 0$ both sides are $0$, and adding $x_{k_{j+1}} - x_{k_j} \ge \varepsilon$ to the inductive inequality gives $x_{k_{j+1}} - x_{k_0} \ge (j \cdot 1_F)\varepsilon + \varepsilon = ((j+1)\cdot 1_F)\,\varepsilon$. [step 3.1, L3, L4, L6]

5.1 Since $\varepsilon > 0$ is invertible with $\varepsilon^{-1} > 0$, the Archimedean property supplies $j \ge 1$ with $(B - x_{k_0})\varepsilon^{-1} < j \cdot 1_F$, hence $B - x_{k_0} < (j \cdot 1_F)\varepsilon$ and $x_{k_j} \ge x_{k_0} + (j \cdot 1_F)\varepsilon > B$, contradicting the hypothesis that $B$ bounds every term of $(x_k)$. [step 4.1, L3, L6]

6.1 The assumption of step 1.1 is therefore untenable, so $(x_k)$ is Cauchy in $F$ and (CC) makes it converge in $F$; as $(x_k)$ was an arbitrary nondecreasing sequence bounded above, $F$ has (MCT). [step 5.1, L1, L2, discharge-contradiction] ∎

## Remarks

- **What the Archimedean property does here.** It is used exactly once, in the
  final estimate, to say that a fixed positive $\varepsilon$ added to itself
  often enough exceeds a given element. In a non-Archimedean field the increments
  $\varepsilon$ of the recursion can be infinitesimal relative to $B - x_{k_0}$, and
  the sequence $(x_{k_j})$ climbs forever without ever passing $B$; that is
  exactly how (CC) survives while (MCT) fails.

- **No choice is used:** the recursion takes the *least* admissible index,
  supplied by [[thm-well-ordering-principle]], and it is [[thm-recursion]]
  applied to a function defined outright.
````

### `lem-lub-implies-nested-intervals`

````markdown
---
id: lem-lub-implies-nested-intervals
kind: lemma
title: "An ordered field with the least-upper-bound property has the nested interval property and is Archimedean"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-completeness-properties, def-sequences-in-an-ordered-field, def-archimedean-field, thm-of-archimedean, def-complete-ordered-field, def-upper-bound, def-ordered-field, thm-induction-principle, thm-nat-linear-order]
justified_by: []
aliases: []
landmark: false
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
    - title: "J. F. Hall, Completeness of Ordered Fields"
      url: "https://arxiv.org/abs/1101.5652"
    - title: "Nested intervals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nested_intervals"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field with the least-upper-bound property (LUB) of
[[def-completeness-properties]]. Then:

1. $F$ is Archimedean ([[def-archimedean-field]]);
2. $F$ has the nested interval property (NIP).

The intersection point produced in claim 2 is the supremum of the left
endpoints, and the proof does not use the hypothesis that the lengths tend to
$0$: an ordered field with (LUB) satisfies the *unrestricted* nested interval
property, of which (NIP) as defined is a special case.

## Facts & Assumptions

**Given:** An ordered field $F$ with the least-upper-bound property, and a nested sequence $(I_k)_{k \in \mathbb{N}}$ of closed intervals $I_k = [a_k, b_k]_F$ of $F$, so that $a_k \le b_k$ for every $k$ and $I_{k+1} \subseteq I_k$ for every $k$.

[L1] Least upper bounds: every nonempty $S \subseteq F$ bounded above has a least upper bound $\sup S \in F$; a least upper bound is an upper bound and is $\le$ every upper bound ([[def-complete-ordered-field]], [[def-upper-bound]]).

[L2] Every complete ordered field is Archimedean ([[thm-of-archimedean]]).

[L3] The properties (LUB), (NIP) and the Archimedean property, as fixed in [[def-completeness-properties]] and [[def-archimedean-field]]; (LUB) for $F$ is by definition the statement that $F$ is a complete ordered field ([[def-complete-ordered-field]]).

[L4] Closed intervals and nesting in $F$: $[a,b]_F = \{x \in F : a \le x \le b\}$ for $a \le b$, and $(I_k)$ is nested when $I_{k+1} \subseteq I_k$ for every $k$ ([[def-sequences-in-an-ordered-field]]).

[L5] The order of $F$ is total and transitive ([[def-ordered-field]]).

[L6] Induction principle on $\mathbb{N}$ ([[thm-induction-principle]]), and the order on $\mathbb{N}$ is total, so of any two indices one is the larger ([[thm-nat-linear-order]]).

## Proof

**Proof technique:** direct.

1.1 Having (LUB) is by definition being a complete ordered field, so $F$ is a complete ordered field. [L1, L3]

1.2 For every $k$: $a_{k+1}$ and $b_{k+1}$ lie in $I_{k+1}$, hence in $I_k$, so $a_k \le a_{k+1} \le b_{k+1} \le b_k$. [L4, L5]

2.1 $F$ is Archimedean, which is claim 1. [step 1.1, L2]

2.2 By induction on the difference of the indices, $a_j \le a_m$ and $b_m \le b_j$ whenever $j \le m$. [step 1.2, L5, L6]

3.1 For all $j, l \in \mathbb{N}$ one has $a_j \le b_l$: letting $m$ be the larger of $j$ and $l$, $a_j \le a_m \le b_m \le b_l$. [step 1.2, step 2.2, L5, L6]

4.1 The set $A := \{\, a_k : k \in \mathbb{N} \,\}$ is nonempty and is bounded above by $b_0$, so $c := \sup A$ exists in $F$. [step 3.1, L1]

5.1 For every $k$: $a_k \le c$ because $c$ is an upper bound of $A$; and $c \le b_k$ because $b_k$ is an upper bound of $A$ by step 3.1 while $c$ is the least such. [step 3.1, step 4.1, L1]

6.1 So $c \in [a_k, b_k]_F$ for every $k$, the intersection of the $I_k$ is nonempty, and $F$ has (NIP), which with step 2.1 gives both claims. [step 2.1, step 5.1, L3, L4] ∎

## Remarks

- **Where the lengths would be used.** They are not used at all above. Their
  role is to force the intersection to be a *single* point: if the lengths tend
  to $0$ and $c, c'$ both lie in every $I_k$ then $|c - c'| \le b_k - a_k$ for
  every $k$, so $|c - c'|$ is below every positive element of $F$ and therefore
  $0$. Uniqueness is not part of (NIP) as defined in
  [[def-completeness-properties]] and is not needed anywhere on this page.

- **The converse of claim 1 fails, and that is the point of two items later on
  this page.** [[fs-nested-intervals-implies-lub]] shows that (NIP) does not
  imply (LUB), and [[fs-cauchy-complete-implies-lub]] shows the same for (CC);
  in both the witness is a non-Archimedean field, so neither carries the
  Archimedean property that (LUB) carries here.
````

### `lem-mct-implies-archimedean`

````markdown
---
id: lem-mct-implies-archimedean
kind: lemma
title: "The monotone convergence property alone forces the Archimedean property, so it carries no separate Archimedean hypothesis"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-completeness-properties, def-sequences-in-an-ordered-field, def-archimedean-field, def-ordered-field, lem-of-add-order, lem-of-naturals-positive, lem-of-abs-value, lem-of-sequence-basics, cor-of-one-positive]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
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
    - title: "J. F. Hall, Completeness of Ordered Fields"
      url: "https://arxiv.org/abs/1101.5652"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
    - title: "Monotone convergence theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotone_convergence_theorem"
    - title: "J. Lebl, Basic Analysis I, §1.2 and §2.4"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field with the monotone convergence property (MCT) of
[[def-completeness-properties]]. Then $F$ is Archimedean
([[def-archimedean-field]]).

So (MCT), like (BW) and like (LUB), carries the Archimedean property on its own,
and the hypothesis attached to (CC) in
[[lem-cauchy-complete-and-archimedean-imply-mct]] need not be attached here.
This is what lets [[rem-where-the-archimedean-hypothesis-is-needed]] sort the
five properties into those that do and those that do not.

## Facts & Assumptions

**Given:** An ordered field $F$ with (MCT).

[L1] The property (MCT): every nondecreasing sequence in $F$ that is bounded above converges in $F$ ([[def-completeness-properties]]).

[L2] Sequences in an ordered field: a sequence is a function $\mathbb{N} \to F$; it is nondecreasing when $x_j \le x_k$ for all $j \le k$; convergence and Cauchyness in $F$ are as fixed there ([[def-sequences-in-an-ordered-field]]).

[L3] Archimedean property: $F$ is Archimedean when for every $x \in F$ there is a natural $n$ with $x < n \cdot 1_F$, where $0 \cdot 1_F = 0$ and $(n+1)\cdot 1_F = n \cdot 1_F + 1_F$ ([[def-archimedean-field]]).

[L4] Canonical naturals: $n \cdot 1_F > 0$ for $n \ge 1$ and $n \mapsto n \cdot 1_F$ is strictly increasing on $\{1,2,3,\dots\}$ ([[lem-of-naturals-positive]]).

[L5] A sequence converging in $F$ is Cauchy in $F$ (clause 3 of [[lem-of-sequence-basics]]).

[L6] Order arithmetic: $0 < 1_F$ ([[cor-of-one-positive]]); the order is total, so the failure of $x < y$ is $y \le x$; adding a constant preserves the order ([[lem-of-add-order]], [[def-ordered-field]]); and $|u| = u$ whenever $u \ge 0$ ([[lem-of-abs-value]]). Here [[lem-of-add-order]] states the STRICT forms and only those; the nonstrict forms used below are those together with the equality cases, which trichotomy settles, the order being total ([[def-ordered-field]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $F$ has (MCT) and is not Archimedean; then there is $x \in F$ with $n \cdot 1_F \le x$ for every $n \in \mathbb{N}$. [L3, L6, assume-contra]

1.2 Let $(y_k)$ be the sequence $y_k := k \cdot 1_F$ in $F$, so $y_0 = 0$ and $y_{k+1} = y_k + 1_F$; it is nondecreasing, since $0 = y_0 < y_n$ for $n \ge 1$ and $j \mapsto j \cdot 1_F$ is strictly increasing on the positive naturals. [L2, L3, L4]

2.1 $(y_k)$ is bounded above by $x$, so (MCT) makes it converge in $F$ to some $L$. [step 1.1, step 1.2, L1, L2]

3.1 Being convergent, $(y_k)$ is Cauchy in $F$, so, $1_F$ being positive, there is $N \in \mathbb{N}$ with $|y_k - y_l| < 1_F$ for all $k, l \ge N$. [step 2.1, L2, L5, L6]

4.1 But $y_{N+1} - y_N = 1_F > 0$, so $|y_{N+1} - y_N| = 1_F$, which is not $< 1_F$; this contradicts step 3.1. [step 1.2, step 3.1, L6]

5.1 The assumption of step 1.1 is therefore untenable, and an ordered field with (MCT) is Archimedean. [step 4.1, discharge-contradiction] ∎

## Remarks

- **Why this item exists.** Without it, the natural reading of the equivalence
  theorem would attach an Archimedean hypothesis to (MCT) as well, and
  [[rem-where-the-archimedean-hypothesis-is-needed]] would answer its own
  question wrongly. With it the answer is clean: (LUB), (BW) and (MCT) each
  imply the Archimedean property, while (NIP) and (CC) do not
  ([[fs-nested-intervals-implies-lub]], [[fs-cauchy-complete-implies-lub]]).

- **The witness is the same sequence as in [[lem-bw-implies-archimedean]]**, the
  canonical naturals, but the two arguments use different failures of it. There
  the sequence is bounded and has no convergent subsequence; here it is
  nondecreasing and bounded above and has no limit. Neither argument implies the
  other, because neither (BW) nor (MCT) is assumed in the other's proof.

- The gap of exactly $1_F$ between consecutive terms is what does the work, and
  it is available in every ordered field: $1_F > 0$ by
  [[cor-of-one-positive]], and no smallness of $1_F$ relative to $x$ is
  possible, since the Cauchy condition is tested at the threshold $1_F$ itself.
````

### `lem-mct-implies-lub`

````markdown
---
id: lem-mct-implies-lub
kind: lemma
title: "The monotone convergence property plus the Archimedean property imply the least-upper-bound property"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-completeness-properties, def-sequences-in-an-ordered-field, def-archimedean-field, def-complete-ordered-field, def-upper-bound, thm-recursion, thm-induction-principle, thm-nat-linear-order, def-integer-power, lem-bernoulli-inequality, lem-of-inverse-positive, lem-of-naturals-positive, cor-of-one-positive, lem-of-add-order, lem-of-abs-value, lem-of-triangle-inequality, lem-of-sequence-basics, def-ordered-field]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
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
    - title: "J. F. Hall, Completeness of Ordered Fields"
      url: "https://arxiv.org/abs/1101.5652"
    - title: "Least-upper-bound property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Least-upper-bound_property"
    - title: "Monotone convergence theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotone_convergence_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 and Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $F$ be an Archimedean ordered field ([[def-archimedean-field]]) with the
monotone convergence property (MCT) of [[def-completeness-properties]]. Then $F$
has the least-upper-bound property (LUB), that is, $F$ is a complete ordered
field ([[def-complete-ordered-field]]).

The Archimedean hypothesis is stated for symmetry with the other implications on
this page and is in fact redundant here: (MCT) implies it on its own
([[lem-mct-implies-archimedean]]).

The supremum is produced by bisection between an upper bound and a non-upper
bound, and it is identified as a limit of both bracketing sequences.

## Facts & Assumptions

**Given:** An Archimedean ordered field $F$ with (MCT), a nonempty $S \subseteq F$ bounded above by some $B \in F$, and an element $s_0 \in S$.

[L1] The properties (MCT) and (LUB), and least upper bounds: $u$ is an upper bound of $S$ when $s \le u$ for all $s \in S$, and a least upper bound when moreover $u \le v$ for every upper bound $v$; (LUB) says every nonempty subset bounded above has one ([[def-completeness-properties]], [[def-complete-ordered-field]], [[def-upper-bound]]).

[L2] Sequences in an ordered field: nondecreasing, nonincreasing, bounded above, and convergence in $F$ ([[def-sequences-in-an-ordered-field]]).

[L3] Archimedean property: for every $z \in F$ there is a natural $n \ge 1$ with $z < n \cdot 1_F$ ([[def-archimedean-field]]); the canonical naturals are positive for $n \ge 1$ and satisfy $n \cdot 1_F \le m \cdot 1_F$ for $n \le m$ ([[lem-of-naturals-positive]]).

[L4] Recursion theorem ([[thm-recursion]]), induction principle ([[thm-induction-principle]]), and totality of the order on $\mathbb{N}$ ([[thm-nat-linear-order]]).

[L5] Powers and Bernoulli: $a^0 = 1$, $a^{n+1} = a^n a$ ([[def-integer-power]]); $(1_F + x)^n \ge 1_F + n \cdot x$ for $x \ge -1_F$ ([[lem-bernoulli-inequality]]).

[L6] Order arithmetic: $0 < 1_F$ ([[cor-of-one-positive]]); adding a constant preserves the strict order and strict inequalities add ([[lem-of-add-order]]), the nonstrict forms following with the equality cases; $a > 0$ gives $a^{-1} > 0$ and $0 < a < b$ gives $0 < b^{-1} < a^{-1}$ ([[lem-of-inverse-positive]]); the order is total and transitive ([[def-ordered-field]]).

[L7] Absolute value: $|u| \ge 0$, $|u| = |-u|$, $|u| = u$ for $u \ge 0$ ([[lem-of-abs-value]]); and $|u + v| \le |u| + |v|$ ([[lem-of-triangle-inequality]]).

[L8] Limits in an ordered field preserve non-strict inequalities (clause 2 of [[lem-of-sequence-basics]]).

## Proof

**Proof technique:** constructive.

1.1 Put $u_0 := B$ and $l_0 := s_0 - 1_F$; then $u_0$ is an upper bound of $S$, $l_0$ is not one because $s_0 \in S$ and $l_0 < s_0$, and $l_0 < s_0 \le u_0$. [L1, L6, construct]

1.2 Writing $m(l,u) := (l + u)\,(2 \cdot 1_F)^{-1}$, define $f : F \times F \to F \times F$ by $f(l,u) := (l, m(l,u))$ when $m(l,u)$ is an upper bound of $S$ and $f(l,u) := (m(l,u), u)$ otherwise; the recursion theorem applied to $F \times F$, the element $(l_0, u_0)$ and $f$ gives a unique $g : \mathbb{N} \to F \times F$ with $g(0) = (l_0,u_0)$ and $g(n+1) = f(g(n))$, and we write $g(n) = (l_n, u_n)$. [L4, L6, construct]

1.3 A constant sequence in $F$ converges to its value, since $|a - a| = 0 < \varepsilon$ for every $\varepsilon > 0$. [L2, L7]

2.1 By induction on $n$: $u_n$ is an upper bound of $S$; $l_n$ is not an upper bound of $S$; $l_n \le l_{n+1} \le u_{n+1} \le u_n$; and $u_n - l_n = (u_0 - l_0)\,((2 \cdot 1_F)^n)^{-1}$. The base case is step 1.1 together with $(2 \cdot 1_F)^0 = 1_F$; for the step, $m := m(l_n,u_n)$ satisfies $l_n \le m \le u_n$ and $m - l_n = u_n - m = (u_n - l_n)(2 \cdot 1_F)^{-1}$, and whichever of the two clauses of $f$ applies, the retained pair again brackets $S$ in the stated sense with half the previous length. [step 1.1, step 1.2, L1, L5, L6]

3.1 The lengths tend to $0$ in $F$: given $\varepsilon > 0$, the element $(u_0 - l_0)\varepsilon^{-1}$ is positive, so [L3] supplies $n \ge 1$ with $(u_0-l_0)\varepsilon^{-1} < n \cdot 1_F$, and for every $p \ge n$ Bernoulli at $x = 1_F$ gives $(2 \cdot 1_F)^p \ge 1_F + p \cdot 1_F > p \cdot 1_F \ge n \cdot 1_F > (u_0-l_0)\varepsilon^{-1} > 0$, whence $u_p - l_p = (u_0-l_0)((2 \cdot 1_F)^p)^{-1} < \varepsilon$. [step 2.1, L3, L5, L6]

3.2 The sequence $(-u_n)$ is nondecreasing and is bounded above by $-l_0$, since $l_0 \le l_n \le u_n$ for every $n$; so (MCT) gives $w \in F$ with $-u_n \to w$, and putting $c := -w$ one has $|u_n - c| = |{-}((-u_n) - w)| = |(-u_n) - w|$, so $u_n \to c$ in $F$. [step 2.1, L1, L2, L6, L7]

4.1 $l_n \to c$ in $F$: given $\varepsilon > 0$, step 3.1 supplies $N_1$ with $u_n - l_n < \varepsilon/2$ for $n \ge N_1$ and step 3.2 supplies $N_2$ with $|u_n - c| < \varepsilon/2$ for $n \ge N_2$, and for $n$ beyond both, $|l_n - c| \le |l_n - u_n| + |u_n - c| = (u_n - l_n) + |u_n - c| < \varepsilon$. [step 3.1, step 3.2, L2, L4, L6, L7]

4.2 $c$ is an upper bound of $S$: for $s \in S$ one has $s \le u_n$ for every $n$ by step 2.1, and the constant sequence with value $s$ converges to $s$ while $u_n \to c$, so $s \le c$ by [L8]. [step 1.3, step 2.1, step 3.2, L1, L8]

5.1 $c$ is the least upper bound: let $v$ be any upper bound of $S$; for each $n$ the element $l_n$ is not an upper bound, so some $s \in S$ has $l_n < s \le v$ and hence $l_n \le v$; since $l_n \to c$ and the constant sequence with value $v$ converges to $v$, [L8] gives $c \le v$. [step 1.3, step 2.1, step 4.1, L1, L6, L8]

6.1 So $c = \sup S$ exists in $F$; as $S$ was an arbitrary nonempty subset bounded above, $F$ has (LUB) and is a complete ordered field. [step 4.2, step 5.1, L1, discharge-construct] ∎

## Remarks

- **Both bracketing sequences are needed.** The upper endpoints give the
  upper-bound half of the conclusion and the lower endpoints give minimality;
  the shrinking lengths are what force the two to have the same limit, and that
  is the only place the Archimedean property is used.

- **Nonincreasing sequences are handled by reflection**, as announced in
  [[def-completeness-properties]]: (MCT) is stated only for nondecreasing
  sequences, and step 3.2 applies it to $(-u_n)$ rather than assuming a second
  form of the property.

- **No choice is used.** The bisection rule keeps the left half exactly when the
  midpoint is an upper bound of $S$, which is a definite condition, so $f$ is a
  function and [[thm-recursion]] applies.
````

### `lem-nested-intervals-and-archimedean-imply-bw`

````markdown
---
id: lem-nested-intervals-and-archimedean-imply-bw
kind: lemma
title: "Nested intervals plus the Archimedean property imply Bolzano-Weierstrass, by repeated bisection"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-completeness-properties, def-sequences-in-an-ordered-field, def-archimedean-field, thm-recursion, thm-well-ordering-principle, lem-index-map-grows, def-integer-power, lem-bernoulli-inequality, lem-of-inverse-positive, lem-of-naturals-positive, cor-of-one-positive, lem-of-add-order, lem-of-abs-value, thm-induction-principle, thm-nat-linear-order, def-ordered-field]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
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
    - title: "J. F. Hall, Completeness of Ordered Fields"
      url: "https://arxiv.org/abs/1101.5652"
    - title: "Bolzano-Weierstrass theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bolzano%E2%80%93Weierstrass_theorem"
    - title: "Nested intervals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nested_intervals"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field that is Archimedean ([[def-archimedean-field]]) and
has the nested interval property (NIP) of [[def-completeness-properties]]. Then
$F$ has the Bolzano-Weierstrass property (BW): every bounded sequence in $F$ has
a subsequence converging in $F$.

Say that a set $E \subseteq \mathbb{N}$ is **cofinal** when for every
$K \in \mathbb{N}$ there is $k \ge K$ with $k \in E$. The construction below
bisects a bracketing interval, keeping at each stage a half that the sequence
visits cofinally often, and reads the limit off (NIP).

## Facts & Assumptions

**Given:** An Archimedean ordered field $F$ with (NIP), and a bounded sequence $(x_k)$ in $F$, so that $|x_k| \le M_0$ for every $k$ and some $M_0 \in F$.

[L1] The properties (NIP) and (BW) of [[def-completeness-properties]].

[L2] Sequences in an ordered field: boundedness, $[a,b]_F = \{x \in F : a \le x \le b\}$ for $a \le b$, nesting, lengths tending to $0$ in $F$, convergence in $F$, and subsequences along a strictly increasing index map ([[def-sequences-in-an-ordered-field]]).

[L3] Archimedean property: for every $x \in F$ there is a natural number $n$ with $x < n \cdot 1_F$ ([[def-archimedean-field]]); and the canonical naturals satisfy $n \cdot 1_F > 0$ for $n \ge 1$ and $n \cdot 1_F \le m \cdot 1_F$ whenever $n \le m$ ([[lem-of-naturals-positive]]).

[L4] Recursion theorem ([[thm-recursion]]).

[L5] Well-ordering principle: every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L6] Consecutive comparisons suffice for strict increase: if $n_j < n_{j+1}$ for every $j$ then $n$ is strictly increasing ([[lem-index-map-grows]]).

[L7] Powers and Bernoulli: $a^0 = 1$ and $a^{n+1} = a^n a$ ([[def-integer-power]]); and $(1_F + x)^n \ge 1_F + n \cdot x$ for $x \ge -1_F$ ([[lem-bernoulli-inequality]]).

[L8] Order arithmetic: $0 < 1_F$ ([[cor-of-one-positive]]); adding a constant preserves the strict order and strict inequalities add ([[lem-of-add-order]]), the nonstrict forms following with the equality cases; $a > 0$ gives $a^{-1} > 0$, and $0 < a < b$ gives $0 < b^{-1} < a^{-1}$ ([[lem-of-inverse-positive]]); the order is total and transitive and sums and products of positives are positive ([[def-ordered-field]]).

[L9] Absolute value: $|u| \ge 0$, and $|u|$ equals $u$ or $-u$, so $|u| \le c$ whenever both $u \le c$ and $-u \le c$ ([[lem-of-abs-value]]).

[L10] Induction principle ([[thm-induction-principle]]) and totality of the order on $\mathbb{N}$ ([[thm-nat-linear-order]]).

## Proof

**Proof technique:** constructive.

1.1 Since $M_0 \ge |x_0| \ge 0$, the element $M := M_0 + 1_F$ satisfies $M > 0$ and $|x_k| \le M_0 < M$ for every $k$, so $-M \le x_k \le M$ and $x_k \in [-M, M]_F$ for every $k$. [L2, L8, L9, construct]

1.2 Writing $m(a,b) := (a + b) \cdot (2 \cdot 1_F)^{-1}$, define $f : F \times F \to F \times F$ by $f(a,b) := (a, m(a,b))$ when $a \le b$ and the set of $k$ with $x_k \in [a, m(a,b)]_F$ is cofinal, and $f(a,b) := (m(a,b), b)$ otherwise; the recursion theorem applied to $F \times F$, the element $(-M, M)$ and $f$ gives a unique $g : \mathbb{N} \to F \times F$ with $g(0) = (-M, M)$ and $g(n+1) = f(g(n))$, and we write $g(n) = (a_n, b_n)$ and $I_n := [a_n, b_n]_F$. [L4, L8, construct]

2.1 By induction on $n$, all of the following hold: $a_n \le b_n$; $b_n - a_n = 2M \cdot ((2 \cdot 1_F)^n)^{-1}$; $I_{n+1} \subseteq I_n$; and the set $E_n := \{\, k : x_k \in I_n \,\}$ is cofinal. For $n = 0$ this is step 1.1 together with $b_0 - a_0 = 2M$ and $(2 \cdot 1_F)^0 = 1_F$. For the step, put $m := m(a_n,b_n)$, so that $a_n \le m \le b_n$ and $m - a_n = b_n - m = (b_n - a_n) \cdot (2 \cdot 1_F)^{-1}$; if the first clause of $f$ applies then $I_{n+1} = [a_n, m]_F$ has the four properties by construction, and otherwise there is $K$ with $x_k \notin [a_n, m]_F$ for all $k \ge K$, so every $k \ge K$ in the cofinal set $E_n$ has $m < x_k \le b_n$ and hence lies in $\{k : x_k \in [m, b_n]_F\}$, which is therefore cofinal as well. [step 1.1, step 1.2, L2, L7, L8, L9, L10]

3.1 The lengths $b_n - a_n$ tend to $0$ in $F$: given $\varepsilon > 0$, the element $2M \varepsilon^{-1}$ is positive, so [L3] supplies $n \ge 1$ with $2M\varepsilon^{-1} < n \cdot 1_F$, and then for every $p \ge n$ Bernoulli at $x = 1_F$ gives $(2 \cdot 1_F)^p \ge 1_F + p \cdot 1_F > p \cdot 1_F \ge n \cdot 1_F > 2M\varepsilon^{-1} > 0$, whence $((2 \cdot 1_F)^p)^{-1} < \varepsilon (2M)^{-1}$ and $b_p - a_p = 2M \cdot ((2 \cdot 1_F)^p)^{-1} < \varepsilon$. [step 2.1, L3, L7, L8]

3.2 Since each $E_j$ is cofinal, for every $j$ and every $n$ the set $\{\, k \in \mathbb{N} : k > n \text{ and } x_k \in I_{j+1} \,\}$ is nonempty and so has a least element; the recursion theorem applied to $\mathbb{N} \times \mathbb{N}$, the element $(0,0)$ and the map sending $(j,n)$ to $(j+1, \min\{k : k > n, \ x_k \in I_{j+1}\})$ therefore yields indices $n_0 = 0$ and $n_{j+1} = \min\{k : k > n_j, \ x_k \in I_{j+1}\}$. [step 2.1, L4, L5, construct]

4.1 The sequence $(I_n)$ is nested with lengths tending to $0$, so (NIP) supplies an element $c$ lying in $I_n$ for every $n$. [step 2.1, step 3.1, L1, L2]

4.2 Since $n_{j} < n_{j+1}$ for every $j$, the map $j \mapsto n_j$ is strictly increasing and $(x_{n_j})$ is a subsequence of $(x_k)$; moreover $x_{n_j} \in I_j$ for every $j$, the case $j = 0$ being $x_0 \in I_0$ from step 1.1. [step 3.2, L2, L6]

5.1 For every $j$, both $x_{n_j}$ and $c$ lie in $I_j$, so $x_{n_j} - c \le b_j - a_j$ and $c - x_{n_j} \le b_j - a_j$, whence $|x_{n_j} - c| \le b_j - a_j$. [step 4.1, step 4.2, L2, L8, L9]

6.1 Given $\varepsilon > 0$ in $F$, step 3.1 supplies $J$ with $b_j - a_j < \varepsilon$ for all $j \ge J$, so $|x_{n_j} - c| < \varepsilon$ for all $j \ge J$; hence $x_{n_j} \to c$ in $F$. [step 3.1, step 5.1, L2, L8]

7.1 An arbitrary bounded sequence in $F$ has therefore been given a subsequence converging in $F$, so $F$ has (BW). [step 6.1, L1, discharge-construct] ∎

## Remarks

- **No choice is used.** Both recursions are applications of
  [[thm-recursion]] to functions defined outright: the bisection rule keeps the
  left half exactly when that half is visited cofinally often, and the index
  $n_{j+1}$ is the *least* admissible one, supplied by
  [[thm-well-ordering-principle]] rather than chosen.

- **Where each hypothesis enters.** (NIP) is used once, at step 4.1. The
  Archimedean property is used once, at step 3.1, and only to know that the
  halved lengths get below every positive element of $F$. Without it the
  bisection still runs and still produces nested intervals, but their lengths
  need not tend to $0$ in $F$, and (NIP) as stated would not apply.

- **The bracketing interval is widened by $1_F$** in step 1.1 so that $M > 0$
  even when the sequence is identically $0$; the argument of step 3.1 divides by
  $2M$ and would otherwise have to treat that case separately.
````

### `rem-where-the-archimedean-hypothesis-is-needed`

````markdown
---
id: rem-where-the-archimedean-hypothesis-is-needed
kind: remark
title: "Which of the five completeness properties carry the Archimedean property on their own, and which must be handed it"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-applicable
deps: [def-completeness-properties, def-archimedean-field, thm-completeness-equivalences, lem-lub-implies-nested-intervals, lem-bw-implies-archimedean, lem-mct-implies-archimedean, fs-nested-intervals-implies-lub, fs-cauchy-complete-implies-lub, thm-of-archimedean, lem-laurent-non-archimedean, thm-laurent-cauchy-complete, cor-laurent-nested-intervals]
justified_by: []
aliases: []
landmark: false
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
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
    - title: "Completeness of the real numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Completeness_of_the_real_numbers"
pipeline_run: null
---

The statement of [[thm-completeness-equivalences]] attaches the Archimedean
property to two of its five clauses and not to the other three. This remark says
exactly why, clause by clause, and records what is proved on this page rather
than what is customary.

**The three that carry it.** Each of the following is proved here, with no
Archimedean hypothesis anywhere in sight:

- (LUB) implies the Archimedean property. This is claim 1 of
  [[lem-lub-implies-nested-intervals]], which is [[thm-of-archimedean]] applied
  to the field: a complete ordered field is Archimedean, because otherwise the
  canonical naturals would be a nonempty set $A$ bounded above, and then
  $\sup A - 1$, being smaller than $\sup A$, is not an upper bound of $A$, so
  some $n \cdot 1_F$ exceeds it and $(n+1)\cdot 1_F$ exceeds $\sup A$.
- (BW) implies the Archimedean property, by [[lem-bw-implies-archimedean]]. If
  the canonical naturals were bounded they would form a bounded sequence, and
  every subsequence of it has consecutive terms at distance at least $1$, so no
  subsequence converges.
- (MCT) implies the Archimedean property, by [[lem-mct-implies-archimedean]]. If
  the canonical naturals were bounded above they would be a nondecreasing
  bounded sequence, hence convergent, hence Cauchy, which the gap of $1$ between
  consecutive terms forbids.

**The two that do not.** Neither (NIP) nor (CC) implies the Archimedean
property, and one field refutes both: the formal Laurent series field
$K = \mathbb{R}((t^{-1}))$ is not Archimedean
([[lem-laurent-non-archimedean]]), has (CC) ([[thm-laurent-cauchy-complete]])
and has (NIP) in the shrinking form of [[def-completeness-properties]]
([[cor-laurent-nested-intervals]]). The consequences are the two false
statements of this page, [[fs-nested-intervals-implies-lub]] and
[[fs-cauchy-complete-implies-lub]]: without the Archimedean hypothesis neither
clause 2 nor clause 4 of the equivalence theorem implies clause 1.

**What distinguishes the two groups.** (LUB), (BW) and (MCT) each quantify over
an object that is assumed only to be *bounded*: a bounded set, a bounded
sequence, a nondecreasing sequence bounded above. In a non-Archimedean field the
canonical naturals are such an object, so each of the three can be tested
against them directly, and each fails on them at once. (NIP) and (CC) quantify
instead over data that are already forced together: nested intervals whose
lengths tend to $0$ in the field, and sequences whose terms get arbitrarily close
to each other in the field. In a non-Archimedean field that is a much stronger
hypothesis than it looks, because "arbitrarily close" now means below every
infinitesimal as well; so few sequences and few interval families qualify, and
the ones that do converge for reasons that have nothing to do with the naturals
being cofinal.

**Two corollaries worth stating plainly.**

- An Archimedean hypothesis is never needed alongside (LUB), (BW) or (MCT), and
  writing one there is not merely redundant but misleading, since it suggests
  the property is weaker than it is.
- The customary phrase "complete ordered field" is ambiguous in exactly one
  place, and that place is (CC). This library resolves it by reserving
  *complete* for the least-upper-bound property
  ([[def-complete-ordered-field]]) and always writing *Cauchy complete* for the
  other, as [[thm-laurent-cauchy-complete]] does. A text that says "the reals
  are the unique complete ordered field" and means (CC) is stating something
  false, and $K$ is the counterexample.

**A note on what is not claimed.** Nothing above says that (NIP) and (CC) are
equivalent to each other, or that either is equivalent to the Archimedean
property's negation, or that $K$ is the only witness. What is proved is the
implication pattern of [[thm-completeness-equivalences]] and the two failures
just named.
````

