# Audit proof-refuter brief — Wave 8, step A6

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30) — binding on every current
> and future agent.** Use commands already allowed inside the workspace sandbox;
> choose non-escalated forms and never ask the owner to approve a shell command.
> If an indispensable operation has no escalation-free form, report a blocker.

You are **DeepSeek V4 Pro** at the API's maximum reasoning setting, serving as a
read-only adversarial proof-refuter for the published-page audit. You are
tool-less: you cannot open a file, run a command, browse, edit, or delegate.
Everything you may rely on is reproduced in the `This dispatch` section. Return
evidence only; Audit-Alpha alone adjudicates and edits.

## Triage — the standing rule (verbatim, binding on you)

- **Non-negotiable:** mathematical accuracy, logical validity, correct
  citation.
- **Explicitly acceptable, spend no effort:** minor citational quirks; logical
  gaps a competent reader closes **within 30 seconds**; other non-fatal quirks;
  imperfection at the level of the letter.

## Adversarial standard

Read the target's title, Statement/Definition/Example/Statement refuted, Facts &
Assumptions, every numbered proof/refutation/verification step, and Remarks.
Try to falsify the public claim and every load-bearing inference.

1. Compare every cited fact with the supplied source text before alleging that
   it is weak. Check domain, quantifiers, hypotheses, direction, conclusion,
   and whether the source licenses the exact use.
2. Check that the title and public statement assert no more than the proof
   establishes, and that every proof step uses only available premises.
3. Check both directions of biconditionals, uniqueness/existence claims,
   induction and limiting arguments, empty/zero/endpoint/degenerate cases,
   extended-real conventions, index shifts, and hidden division or choice.
4. Re-read Remarks as skeptically as a numbered step. A false mathematical
   remark is a defect even when the proof is sound.
5. When the target is marked `ai-generated`, actively search for a
   counterexample to its claim, witness, or refutation rather than merely
   checking prose consistency.
6. Treat a false public claim, logically invalid proof, missing necessary
   hypothesis, circularity, or materially inaccurate load-bearing citation as
   fatal. Do not inflate an expository omission or a gap closable within thirty
   seconds into a defect.

## Output format

Reply with exactly this structure and no preamble:

```text
VERDICT: CLEAN | DEFECTS
```

If `DEFECTS`, give one block per finding:

```text
FINDING 1
  location: [exact title, section, fact label, or numbered step]
  severity: fatal | nonfatal
  claim:    [the exact mathematical assertion]
  evidence: [counterexample, missing hypothesis, invalid inference, or exact source mismatch]
```

Then always end with:

```text
BOUNDARY: [specific boundary/counterexample checks and their disposition]
SOURCES:  [confirm every supplied cited item used by the target was inspected]
CHECKED:  [confirm the title, public claim, every numbered step, and Remarks were read]
```


---

# This dispatch

## Selection reasons

- critical risk (10): 8 declared dependencies; 8 cited facts; biconditional / both-direction claim; boundary-sensitive language

## Target item — `fs-cantor-set-countable`

Normalized current SHA-256: `7a62568266c7ce397e5637542fcc727aabd47b94e568fe9836278e58a0b94529`

The complete current item follows, including frontmatter:

````markdown
---
id: fs-cantor-set-countable
kind: false-statement
title: "FALSE: the Cantor set is countable because only countably many intervals were removed"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-cantor-set-properties, thm-cantor-set-ternary-description, def-cantor-set, def-countable, thm-cantor-powerset, lem-countable-iff-surjection-from-n, def-injection-surjection-bijection, def-equinumerous]
justified_by: []
forward_refs: [cex-cantor-point-that-is-not-an-endpoint]
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
    - title: "Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_set"
    - title: "Cantor's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor%27s_theorem"
    - title: "University of Chicago MATH 395 notes"
      url: "https://math.uchicago.edu/~alephnil/notes/MATH-395-notes.pdf"
pipeline_run: null
---

## Statement

**False claim:** the Cantor set $C$ ([[def-cantor-set]]) is at most countable
([[def-countable]]), because it is obtained from $[0,1]$ by removing at most
countably many intervals, and what survives such a removal is the at most
countable set of their endpoints.

The claim rests on two inferences and both fail. The count of removed intervals
itself is correct, and it is irrelevant: removing an at most countable family of intervals
from $[0,1]$ says nothing about the cardinality of the remainder. And the
endpoints do not exhaust $C$: the point $1/4$ belongs to $C$ and is the endpoint
of no removed interval, as the remarks below record.

## Facts & Assumptions

**Given:** The Cantor set $C$ of [[def-cantor-set]] and the set $\{0,1\}^{\mathbb{N}}$ of sequences with values in $\{0,1\}$.

[A1] The false claim: $C$ is at most countable.

[L1] $C$ is uncountable ([[thm-cantor-set-properties]], claim 4).

[L2] There is a bijection from $\{0,1\}^{\mathbb{N}}$ onto $C$ ([[thm-cantor-set-ternary-description]], claim 3, [[def-injection-surjection-bijection]]).

[L3] There is no surjection from a set $A$ onto its power set $\mathcal{P}(A)$ ([[thm-cantor-powerset]]).

[L4] A nonempty at most countable set admits a surjection from $\mathbb{N}$, and "uncountable" means "not at most countable" ([[lem-countable-iff-surjection-from-n]], [[def-countable]], [[def-equinumerous]]).

## Refutation

**Proof technique:** direct.

1.1 $C$ is uncountable by [L1], which is the direct negation of [A1]. [A1, L1, L4]

1.2 A second and independent refutation, which does not go through perfect sets: the map $b \mapsto \{\, k \in \mathbb{N} : b_k = 1 \,\}$ is a bijection from $\{0,1\}^{\mathbb{N}}$ onto $\mathcal{P}(\mathbb{N})$, its inverse sending a set to its indicator sequence, so composing with [L2] gives a bijection from $C$ onto $\mathcal{P}(\mathbb{N})$. If $C$ were at most countable it would be nonempty and admit a surjection $\mathbb{N} \to C$ by [L4], and composing with that bijection would give a surjection $\mathbb{N} \to \mathcal{P}(\mathbb{N})$, contradicting [L3]. [L2, L3, L4]

2.1 So the claim [A1] is false. The premise about the removed intervals is not what fails; it is the inference from it, and step 1.2 shows why no counting of removed intervals could have settled the question: the surviving set is in bijection with the power set of $\mathbb{N}$. [step 1.1, step 1.2, A1] ∎

## Remarks

- **The correct statement about the removed intervals.** The number removed at each stage doubles and there are countably many stages, so the removed family is at most countable and its endpoints form an at most countable set. That much of the claim survives. What is false is that the endpoints exhaust $C$: an endpoint has an eventually constant digit sequence, and [[cex-cantor-point-that-is-not-an-endpoint]] exhibits a point of $C$ whose digits alternate for ever.

- **Length and cardinality are independent here.** $C$ has measure zero ([[thm-cantor-set-properties]]) and is in bijection with $\{0,1\}^{\mathbb{N}}$ (claim 3 of [[thm-cantor-set-ternary-description]]), hence uncountable ([[thm-cantor-powerset]]), while the Smith-Volterra-Cantor set is uncountable and is not null ([[thm-fat-cantor-set-has-positive-measure]]). Nothing about cardinality follows from a length computation, in either direction.

- **The named witness** is [[cex-cantor-point-that-is-not-an-endpoint]].
````

## Wave 8 provenance row for the target

```json
{
  "id": "fs-cantor-set-countable",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://math.uchicago.edu/~alephnil/notes/MATH-395-notes.pdf"
  ],
  "rationale": "The source states that the Cantor set is perfect and therefore uncountable. The local false claim isolates the familiar mistaken inference from countably many removed intervals.",
  "alpha_concurred": false,
  "at": "2026-08-09",
  "ledger": "wave8-real-analysis-cantor-continuity.provenance.jsonl"
}
```

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "thm-cantor-set-properties",
      "source_section": "Statement",
      "quote": "Let $C$ be the Cantor set ([[def-cantor-set]]). Then: 1. $C$ is closed and bounded, hence compact ([[thm-heine-borel-characterisation-r]], [[def-open-cover-r]]); 2. $C$ has content zero, and therefore measure zero ([[def-measure-zero-and-content-zero]]); 3. $C$ is perfect ([[def-perfect-set-r]]); 4. $C$ is uncountable ([[def-countable]]); 5. $C$ contains no interval with two distinct endpoints, and is nowhere dense ([[def-nowhere-dense-meager]]); 6. every nonempty connected subset of $C$ ([[def-connected-r]]) is a single point. Claim 6 is what the phrase \"totally disconnected\" names elsewhere; that phrase is **not** used here, because no definition of total disconnectedness exists at this point in the reading order. What is proved is exactly the displayed statement, and it is obtained from claim 5 through [[thm-connected-subsets-of-r-are-intervals]].",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-cantor-set-ternary-description",
      "source_section": "Statement",
      "quote": "Let $D$ be the set of sequences $a : \\mathbb{N} \\to \\{0,2\\}$ ([[def-sequence]]), the two values being the real numbers $0$ and $2$. For $a \\in D$ the series $\\sum_{k \\ge 0} a_k 3^{-k-1}$ converges ([[def-series]]); write $$\\Phi(a) \\;:=\\; \\sum_{k=0}^{\\infty} a_k 3^{-k-1} .$$ Then, with $C$ and $(C_n)$ as in [[def-cantor-set]]: 1. $\\Phi(a) \\in [0,1]$ for every $a \\in D$, and $C = \\{\\, \\Phi(a) : a \\in D \\,\\}$; 2. $\\Phi$ is injective, so $\\Phi$ is a bijection from $D$ onto $C$ ([[def-injection-surjection-bijection]]); 3. consequently $b \\mapsto \\Phi\\big((2 b_k)_k\\big)$ is a bijection from $\\{0,1\\}^{\\mathbb{N}}$, the set of sequences with values in $\\{0,1\\}$, onto $C$; 4. $C = \\tfrac13 C \\cup \\big(\\tfrac23 + \\tfrac13 C\\big)$, and the two sets on the right are disjoint. **On the indexing.** The digit $a_k$ carries the weight $3^{-k-1}$, so the series starts at $k = 0$ with the term $a_0/3$; written with the classical $1$-based index it reads $\\sum_{k \\ge 1} a_k 3^{-k}$, which is the form in the title. Sequences in this library are functions on $\\mathbb{N}$ and $\\mathbb{N}$ contains $0$ ([[def-sequence]]), so the $0$-based form is the one used throughout the proof.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "def-injection-surjection-bijection",
      "source_section": "Definition",
      "quote": "$f$ is **surjective** (onto) if for every $b \\in B$ there is some $x \\in A$ with $f(x) = b$",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-cantor-powerset",
      "source_section": "Statement",
      "quote": "Let $A$ be a set and $\\mathcal{P}(A)$ its power set. Then there is **no surjection** $A \\to \\mathcal{P}(A)$ ([[def-injection-surjection-bijection]]). Consequently $A \\not\\approx \\mathcal{P}(A)$ while $A \\preceq \\mathcal{P}(A)$, that is, $A \\prec \\mathcal{P}(A)$ ([[def-equinumerous]]): the power set is strictly larger, for every set whatsoever. This is Cantor's diagonal argument in its non-circular form. It uses nothing about $\\mathbb{R}$, nothing about decimal or binary expansions, and no choice principle: only the Power Set axiom, to form $\\mathcal{P}(A)$, and Separation, to form the diagonal set.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-countable-iff-surjection-from-n",
      "source_section": "Statement",
      "quote": "Let $A$ be a nonempty set. Then $A$ is at most countable ([[def-countable]]) if and only if there is a surjection $s : \\mathbb{N} \\to A$ ([[def-injection-surjection-bijection]]).",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L4",
      "source": "def-countable",
      "source_section": "Definition",
      "quote": "- $A$ is **finite** if $A \\approx n$ for some $n \\in \\mathbb{N}$. - $A$ is **countably infinite** if $A \\approx \\mathbb{N}$. - $A$ is **at most countable** if it is finite or countably infinite. - $A$ is **uncountable** if it is not at most countable.",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L4",
      "source": "def-equinumerous",
      "source_section": "Definition",
      "quote": "Let $A$ and $B$ be sets ([[def-injection-surjection-bijection]] for the terminology). - $A$ and $B$ are **equinumerous**, written $A \\approx B$, if there exists a bijection $f : A \\to B$. - $A$ is **dominated by** $B$, written $A \\preceq B$, if there exists an injection $f : A \\to B$. - $A \\prec B$ abbreviates: $A \\preceq B$ and not $A \\approx B$.",
      "uses": [
        "1.1",
        "1.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "$C$ is uncountable by [L1], which is the direct negation of [A1].",
      "step": "1.1",
      "inputs": [
        "L1",
        "A1",
        "L4"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "A second and independent refutation, which does not go through perfect sets: the map $b \\mapsto \\{\\, k \\in \\mathbb{N} : b_k = 1 \\,\\}$ is a bijection from $\\{0,1\\}^{\\mathbb{N}}$ onto $\\mathcal{P}(\\mathbb{N})$, its inverse sending a set to its indicator sequence",
      "step": "1.2",
      "inputs": [
        "L2",
        "L4",
        "L3"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "So the claim [A1] is false. The premise about the removed intervals is not what fails; it is the inference from it, and step 1.2 shows why no counting of removed intervals could have settled the question: the surviving set is in bijection with the power set of",
      "step": "2.1",
      "inputs": [
        "A1",
        "1.2",
        "1.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The refutation/example uses a fixed nonempty witness, not a variable set whose empty case could establish or defeat the claim."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Step 1.2 notes 0∈C as the nonemptiness input for perfect-set uncountability."
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "No scalar, cardinal, index, or exponent in the Statement of `fs-cantor-set-countable` has a one boundary requiring a separate argument."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "The Statement of `fs-cantor-set-countable` has no coincident-point, singleton, or degenerate-interval case requiring a separate argument."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Step 1.2 uses the retained endpoint 0 to discharge nonemptiness of C."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "The refutation reads perfectness and nonemptiness of the fixed Cantor set; it makes no selection."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The Statement of `fs-cantor-set-countable` is not an equivalence, so it has no forward iff direction."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The Statement of `fs-cantor-set-countable` is not an equivalence, so it has no reverse iff direction."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "pending",
    "reviewer": "Alpha",
    "notes": "Audit-Beta captured this A2 contract by reading the item and each cited target from disk. Independent risk review occurs after A3/A4."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "fs-cantor-set-countable",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-cantor-set-properties",
    "declared_target": "thm-cantor-set-properties",
    "target_statement_provenance": "ai-altered",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-cantor-set-countable",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-cantor-set-ternary-description",
    "declared_target": "thm-cantor-set-ternary-description",
    "target_statement_provenance": "ai-altered",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-cantor-set-countable",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-cantor-set",
    "declared_target": "def-cantor-set",
    "target_statement_provenance": "literature-derived",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-cantor-set-countable",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "fs-cantor-set-countable",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-cantor-powerset",
    "declared_target": "thm-cantor-powerset",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-cantor-set-countable",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "fs-cantor-set-countable",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "fs-cantor-set-countable",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "fs-cantor-set-countable",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "cex-cantor-point-that-is-not-an-endpoint",
    "declared_target": "cex-cantor-point-that-is-not-an-endpoint",
    "target_statement_provenance": "ai-generated",
    "targetPage": "cantor-set-baire-and-measure-zero-examples",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "forward_ref",
    "kind": "forward",
    "requires_semantic_audit": true
  }
]
```

## Relevant pending generated-risk rows

```json
[]
```

## Full text of every cited or declared item (10)

### `cex-cantor-point-that-is-not-an-endpoint`

````markdown
---
id: cex-cantor-point-that-is-not-an-endpoint
kind: counterexample
title: "$1/4$ lies in the Cantor set and is the endpoint of no removed interval, so the endpoints do not exhaust it"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [fs-cantor-set-countable, ex-cantor-set-in-ternary, thm-cantor-set-ternary-description, def-cantor-set, def-integer-power, lem-power-laws, def-series, thm-geometric-series, lem-series-linearity, thm-nonnegative-series-bounded-partial-sums, lem-geometric-sequence-null, def-real-limit, def-interval, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
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
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_set"
    - title: "Ternary numeral system (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ternary_numeral_system"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** the Cantor set $C$ consists of the endpoints of the removed
intervals and is therefore at most countable
([[fs-cantor-set-countable]]).

The witness is $x_0 := 1/4$. It lies in $C$, its ternary digit sequence being the
alternating sequence $(0,2,0,2,\dots)$ ([[ex-cantor-set-in-ternary]]), and it is
the endpoint of no interval removed in the construction. Here, as everywhere on
this page, *$u$ is an endpoint of a removed interval* means that $u \in C$ and
there is $v \ne u$ with the open interval between $u$ and $v$ disjoint from $C$;
that is exactly what "the interval between them was removed" says in the
vocabulary available. What is shown below is that $C$ meets every interval
$(x_0, x_0 + \delta)$ and every interval $(x_0 - \delta, x_0)$, for every real
$\delta > 0$, so no such $v$ exists on either side.

## Facts & Assumptions

**Given:** The Cantor set $C$, the set $D$ of $\{0,2\}$-valued sequences and the bijection $\Phi : D \to C$ of [[thm-cantor-set-ternary-description]]; the alternating sequence $a \in D$, with $a_j = 0$ for even $j$ and $a_j = 2$ for odd $j$; and $x_0 := \Phi(a)$.

[A1] The refuted claim: every point of $C$ is an endpoint of a removed interval, so $C$ is at most countable.

[L1] $\Phi$ is a bijection from $D$ onto $C$ with $\Phi(b) = \sum_{j \ge 0}b_j 3^{-j-1}$, and $x_0 = \Phi(a) = 1/4$ ([[thm-cantor-set-ternary-description]], [[ex-cantor-set-in-ternary]], [[def-cantor-set]]).

[L2] Geometric tails: $\sum_{j \ge m}2 \cdot 3^{-j-1} = 3^{-m}$; a series of nonnegative terms has nonnegative sum and all partial sums at most the sum; convergent series add and scale termwise; and a series splits as $\sum_{j \ge 0} t_j = \sum_{j<m} t_j + \sum_{j \ge m} t_j$ ([[thm-geometric-series]], [[thm-nonnegative-series-bounded-partial-sums]], [[lem-series-linearity]], [[def-series]], [[def-integer-power]], [[lem-power-laws]]).

[L3] $3^{-n} \to 0$, and convergence to $0$ is tested against rational $\varepsilon > 0$ ([[lem-geometric-sequence-null]], [[def-real-limit]]).

[L4] Ordered-field arithmetic: $0 < 1$, so $3 > 0$ and $3^{-1} > 0$ and $2 \cdot 3^{-1} < 1$; $3^{-p} \le 3^{-q}$ whenever $q \le p$, by induction from $0 < 3^{-1} < 1$; adding a constant and multiplying by a positive preserve an inequality ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]], [[def-interval]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Counterexample

**Proof technique:** direct.

1.1 By [L1] the point $x_0 = 1/4$ lies in $C$ and has digit sequence $a$, with $a_{2m} = 0$ and $a_{2m+1} = 2$ for every $m \in \mathbb{N}$. By [L2], for every $m$ one may split $\Phi(a) = \sum_{j<2m}a_j3^{-j-1} + \sum_{j \ge 2m}a_j3^{-j-1}$, and every tail $\sum_{j \ge p}a_j3^{-j-1}$ lies between $0$ and $3^{-p}$. [given, L1, L2]

2.1 **Points of $C$ immediately above $x_0$.** For $m \in \mathbb{N}$ let $b \in D$ agree with $a$ at every index $< 2m$, have $b_{2m} = 2$, and have $b_j = 0$ for $j > 2m$. Writing $P := \sum_{j<2m}a_j3^{-j-1}$, step 1.1 and [L2] give $\Phi(b) = P + 2 \cdot 3^{-2m-1}$ and $\Phi(a) = P + 0 + T$ with $0 \le T \le 3^{-2m-1}$, so $\Phi(b) - x_0 = 2 \cdot 3^{-2m-1} - T$ lies between $3^{-2m-1}$ and $2 \cdot 3^{-2m-1}$; in particular $\Phi(b) > x_0$ and $\Phi(b) - x_0 \le 2 \cdot 3^{-2m-1} < 3^{-2m} \le 3^{-m}$ by [L4]. And $\Phi(b) \in C$ by [L1]. [step 1.1, L1, L2, L4]

2.2 **Points of $C$ immediately below $x_0$.** For $m \in \mathbb{N}$ let $d \in D$ agree with $a$ at every index $< 2m+1$, have $d_{2m+1} = 0$, and have $d_j = 2$ for $j > 2m+1$. Writing $Q := \sum_{j<2m+1}a_j3^{-j-1}$, step 1.1 and [L2] give $\Phi(d) = Q + 0 + 3^{-2m-2}$ and $\Phi(a) = Q + 2 \cdot 3^{-2m-2} + T'$ with $0 \le T' \le 3^{-2m-2}$, so $x_0 - \Phi(d) = 3^{-2m-2} + T'$ lies between $3^{-2m-2}$ and $2 \cdot 3^{-2m-2}$; in particular $\Phi(d) < x_0$ and $x_0 - \Phi(d) < 3^{-2m-1} \le 3^{-m}$ by [L4]. And $\Phi(d) \in C$ by [L1]. [step 1.1, L1, L2, L4]

3.1 Let the real $\delta > 0$ be given; by [L3] fix $m$ with $3^{-m} < \delta$. Steps 2.1 and 2.2 then produce points of $C$ in $(x_0,\ x_0 + \delta)$ and in $(x_0 - \delta,\ x_0)$. Consequently, for every $v > x_0$ the interval $(x_0, v)$ meets $C$, and for every $u < x_0$ the interval $(u, x_0)$ meets $C$; so there is no $v \ne x_0$ with the open interval between $x_0$ and $v$ disjoint from $C$, and $x_0$ is the endpoint of no removed interval. Since $x_0 \in C$, the claim [A1] fails at $x_0$. [step 2.1, step 2.2, A1, L1, L3, L4] ∎

## Remarks

- **The digits diagnose it.** By the argument of
  [[thm-cantor-function-properties]] the two endpoints of a gap have digit
  sequences that are eventually $2$ and eventually $0$ respectively; the digits of
  $1/4$ alternate for ever, so it can be neither. The proof above avoids that
  route and exhibits the approximating points directly, which is what makes it
  self-contained.

- **How many such points there are.** The eventually constant sequences form an
  at most countable set, while $C$ is uncountable
  ([[thm-cantor-set-properties]]); so the endpoints are a vanishing part of $C$
  and the refuted claim fails not marginally but completely.

- **$1/4$ is also where the Cantor function takes the value $1/3$**
  ([[ex-cantor-function-values]]), and it is the one value in that example whose
  computation needs the whole infinite digit sequence rather than a finite
  initial segment.
````

### `def-cantor-set`

````markdown
---
id: def-cantor-set
kind: definition
title: "The Cantor middle-thirds set as the intersection of the sets $C_n$ obtained by removing open middle thirds"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-interval, thm-recursion, thm-induction-principle, def-integer-power, lem-power-laws, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: [def-cantor-middle-thirds-set]
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
    - title: "Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (§2.44)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "University of Chicago MATH 395 notes"
      url: "https://math.uchicago.edu/~alephnil/notes/MATH-395-notes.pdf"
pipeline_run: null
---

## Definition

For $S \subseteq \mathbb{R}$ write

$$\tfrac{1}{3} S \;:=\; \{\, x \cdot 3^{-1} : x \in S \,\}, \qquad \tfrac{2}{3} + \tfrac{1}{3} S \;:=\; \{\, 2 \cdot 3^{-1} + x \cdot 3^{-1} : x \in S \,\},$$

and let $F : \mathcal{P}(\mathbb{R}) \to \mathcal{P}(\mathbb{R})$ be

$$F(S) \;:=\; \tfrac{1}{3} S \ \cup \ \big(\tfrac{2}{3} + \tfrac{1}{3} S\big).$$

By the recursion theorem ([[thm-recursion]]), applied to the set
$\mathcal{P}(\mathbb{R})$, the starting element $[0,1]$ ([[def-interval]]) and
the function $F$, there is a unique family $(C_n)_{n \in \mathbb{N}}$ of subsets
of $\mathbb{R}$ with

$$C_0 = [0,1], \qquad C_{n+1} = F(C_n) = \tfrac{1}{3}C_n \cup \big(\tfrac{2}{3} + \tfrac{1}{3}C_n\big) \quad (n \in \mathbb{N}).$$

The **Cantor middle-thirds set** is

$$C \;:=\; \bigcap_{n \in \mathbb{N}} C_n .$$

**The first step really is the removal of the open middle third.** Directly from
the clauses,

$$C_1 \;=\; \tfrac{1}{3}[0,1] \cup \big(\tfrac{2}{3} + \tfrac{1}{3}[0,1]\big) \;=\; [0, \tfrac13] \cup [\tfrac23, 1] \;=\; [0,1] \setminus (\tfrac13, \tfrac23),$$

the middle equality because $x \mapsto x \cdot 3^{-1}$ is an order isomorphism of
$\mathbb{R}$ onto itself with inverse $x \mapsto 3x$ ([[def-ordered-field]],
[[lem-of-sign-rules]]), and the last because $0 \le x \le 1$ splits, by
totality of the order, into $x \le \tfrac13$, $\tfrac13 < x < \tfrac23$ and
$x \ge \tfrac23$. The recursion then performs the same operation inside each of
the two scaled copies, which is what "removing the open middle thirds" names.

**Every $C_n$ lies in $[0,1]$**, by induction on $n$ ([[thm-induction-principle]]):
$C_0 = [0,1]$; and if $C_n \subseteq [0,1]$ then $\tfrac13 C_n \subseteq [0,\tfrac13]$
and $\tfrac23 + \tfrac13 C_n \subseteq [\tfrac23, 1]$, so
$C_{n+1} \subseteq [0,1]$ ([[lem-of-add-order]], [[lem-of-sign-rules]]). The same
computation shows that **the two halves of $C_{n+1}$ are disjoint**, the first
lying in $[0,\tfrac13]$ and the second in $[\tfrac23,1]$, and $\tfrac13 < \tfrac23$
([[cor-of-one-positive]]).

**The family is nested**, $C_{n+1} \subseteq C_n$ for every $n$, again by
induction. For $n = 0$ this is $C_1 = [0,\tfrac13] \cup [\tfrac23,1] \subseteq
[0,1]$. And $F$ is monotone, in the sense that $S \subseteq T$ implies
$F(S) \subseteq F(T)$, directly from the displayed description of $F$; so
$C_{n+1} \subseteq C_n$ gives $C_{n+2} = F(C_{n+1}) \subseteq F(C_n) = C_{n+1}$.
Consequently $C = \bigcap_n C_n \subseteq C_m$ for every $m$, and
$\bigcap_n C_{n+1} = \bigcap_n C_n = C$.

**Powers.** Here $3^{-n}$ means $(3^{-1})^n$, the integer power of
[[def-integer-power]], so that $3^{0} = 1$, $3^{-(n+1)} \cdot 3 = 3^{-n}$ and
$3^{-n} > 0$ for every $n$ ([[lem-power-laws]], [[def-complete-ordered-field]]).

## Remarks

- **Why the self-similar recursion rather than a description by digits.** The
  clause $C_{n+1} = F(C_n)$ is a single application of [[thm-recursion]] to one
  explicitly given function on $\mathcal{P}(\mathbb{R})$, so nothing is selected
  at any stage and no listing of the $2^n$ intervals making up $C_n$ has to be
  constructed. Every structural property below is then proved by induction on
  $n$ through $F$. The description by ternary digits is a theorem about $C$, not
  its definition, and it is [[thm-cantor-set-ternary-description]].

- **$C$ is not empty.** $0 \in C_n$ for every $n$, by induction:
  $0 \in [0,1]$, and $0 \in C_n$ gives $0 = 0 \cdot 3^{-1} \in \tfrac13 C_n
  \subseteq C_{n+1}$. Likewise $1 \in C$, since $1 \in C_n$ gives
  $1 = \tfrac23 + 1 \cdot \tfrac13 \in C_{n+1}$. So $C$ contains at least the two
  endpoints; that it is in fact uncountable is
  [[thm-cantor-set-properties]].

- **The construction with a different proportion.** Replacing "middle third" by
  an interval of length $4^{-n}$ removed at stage $n$ produces a set that is
  closed, has empty interior and is *not* of measure zero
  ([[def-fat-cantor-set]]). So none of the qualitative properties of $C$ proved
  on this page is a consequence of its being nowhere dense, and the two
  constructions are kept apart deliberately.
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

### `thm-cantor-powerset`

````markdown
---
id: thm-cantor-powerset
kind: theorem
title: "Cantor's theorem: $A \\prec \\mathcal{P}(A)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-injection-surjection-bijection, def-equinumerous]
justified_by: []
aliases: [thm-cantor-diagonal, cantors-theorem]
landmark: true
short: "no surjection $A\\to\\mathcal P(A)$"
proof_strategy: contradiction
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "J. Lebl, Basic Analysis: Introduction to Real Analysis, basic set theory"
      url: "https://www.jirka.org/ra/html/sec_basicset.html"
    - title: "Cantor's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor%27s_theorem"
    - title: "Cantor's diagonal argument (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor%27s_diagonal_argument"
pipeline_run: null
---

## Statement

Let $A$ be a set and $\mathcal{P}(A)$ its power set. Then there is **no
surjection** $A \to \mathcal{P}(A)$ ([[def-injection-surjection-bijection]]).

Consequently $A \not\approx \mathcal{P}(A)$ while $A \preceq \mathcal{P}(A)$,
that is, $A \prec \mathcal{P}(A)$ ([[def-equinumerous]]): the power set is
strictly larger, for every set whatsoever.

This is Cantor's diagonal argument in its non-circular form. It uses nothing
about $\mathbb{R}$, nothing about decimal or binary expansions, and no choice
principle: only the Power Set axiom, to form $\mathcal{P}(A)$, and Separation, to
form the diagonal set.

## Facts & Assumptions

**Given:** A set $A$, its power set $\mathcal{P}(A) = \{\, X : X \subseteq A \,\}$, which is a set by the Power Set axiom, and the Separation axiom scheme, which turns any property of elements of $A$ into a subset of $A$.

[L1] Injection, surjection and bijection; a bijection is in particular a surjection ([[def-injection-surjection-bijection]]).

[L2] $A \approx B$ means a bijection $A \to B$ exists, $A \preceq B$ means an injection $A \to B$ exists, and $A \prec B$ means $A \preceq B$ and $A \not\approx B$ ([[def-equinumerous]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that some function $f : A \to \mathcal{P}(A)$ is surjective. [assume-contra]

1.2 The map $x \mapsto \{x\}$ is a function $A \to \mathcal{P}(A)$ and is injective, since $\{x\} = \{y\}$ forces $x = y$; hence $A \preceq \mathcal{P}(A)$, independently of the assumption. [L1, L2]

2.1 By Separation the diagonal set $D = \{\, x \in A : x \notin f(x) \,\}$ is a subset of $A$, hence an element of $\mathcal{P}(A)$. [step 1.1, given, construct]

3.1 By surjectivity there is $d \in A$ with $f(d) = D$. [step 1.1, step 2.1]

4.1 Then $d \in D$ if and only if $d \notin f(d) = D$, by the definition of $D$ and $f(d) = D$; a statement equivalent to its own negation is impossible, so no surjection $A \to \mathcal{P}(A)$ exists. In particular no bijection does, so $A \not\approx \mathcal{P}(A)$, and with step 1.2, $A \prec \mathcal{P}(A)$. [step 1.2, step 2.1, step 3.1, L1, L2, discharge-contradiction] ∎

## Remarks

- **Where the "diagonal" is.** Reading $f$ as a table whose row $x$ lists which elements belong to $f(x)$, the set $D$ flips the diagonal entries: $x \in D$ exactly when the entry at position $(x,x)$ says "no". The resulting subset differs from every row in at least one place, namely on the diagonal, so it is no row at all.

- **Why this is the diagonal argument that survives in this library.** The familiar diagonal proof that $\mathbb{R}$ is uncountable alters the digits of a decimal expansion. Decimal expansions are infinite series, which this library has not built, so that proof would rest on machinery that is not yet available. Applied to power sets the argument needs nothing but Separation, and $\mathbb{R}$ is instead proved uncountable by Cantor's earlier nested-interval argument ([[thm-r-uncountable]]).

- Taking $A = \mathbb{N}$ gives $\mathbb{N} \prec \mathcal{P}(\mathbb{N})$. It also gives that $\mathcal{P}(\mathbb{N})$ is **uncountable**, and by the shortest possible route: $\mathcal{P}(\mathbb{N})$ is nonempty, so if it were at most countable there would be a surjection $\mathbb{N} \to \mathcal{P}(\mathbb{N})$ ([[lem-countable-iff-surjection-from-n]]), which is exactly what the theorem forbids. No fact about finite sets is needed for this. Iterating gives $\mathbb{N} \prec \mathcal{P}(\mathbb{N}) \prec \mathcal{P}(\mathcal{P}(\mathbb{N})) \prec \cdots$, so there is no largest set and no "set of all sets": such a set would have its own power set as a subset, contradicting the theorem.

- The proof is the same argument as Russell's paradox, in a form where nothing goes wrong: the assumption refuted is not the existence of a set but the surjectivity of a function. See [[rem-continuum-hypothesis]] for what is, and is not, known about the gap between $\mathbb{N}$ and $\mathcal{P}(\mathbb{N})$.
````

### `thm-cantor-set-properties`

````markdown
---
id: thm-cantor-set-properties
kind: theorem
title: "The Cantor set is compact, perfect, uncountable, nowhere dense and of measure zero, and it contains no interval of positive length, so its only nonempty connected subsets are single points"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cantor-set, thm-cantor-set-ternary-description, thm-heine-borel-characterisation-r, def-open-cover-r, def-perfect-set-r, thm-perfect-set-uncountable-r, def-nowhere-dense-meager, def-measure-zero-and-content-zero, lem-content-zero-implies-null, lem-nondegenerate-interval-is-not-null, def-connected-r, thm-connected-subsets-of-r-are-intervals, thm-open-set-algebra-r, def-countable, def-interval, def-integer-power, lem-power-laws, def-open-and-closed-in-r, def-limit-point-r, def-neighbourhood-r, def-interior-closure-boundary-r, thm-closure-characterisations-r, thm-induction-principle, def-finite-sum, lem-finite-sum-laws, lem-series-linearity, def-series, lem-geometric-sequence-null, def-real-limit, lem-of-abs-value, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: []
landmark: true
short: "$C$ compact, perfect, uncountable, null"
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
    - title: "Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_set"
    - title: "Perfect set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Perfect_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (§2.44)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "University of Chicago MATH 395 notes"
      url: "https://math.uchicago.edu/~alephnil/notes/MATH-395-notes.pdf"
    - title: "Stanford Math 205A, Homework 1"
      url: "https://math.stanford.edu/~ryzhik/STANFORD/STANF205-11/hw205-11-1.pdf"
pipeline_run: null
---

## Statement

Let $C$ be the Cantor set ([[def-cantor-set]]). Then:

1. $C$ is closed and bounded, hence compact
   ([[thm-heine-borel-characterisation-r]], [[def-open-cover-r]]);
2. $C$ has content zero, and therefore measure zero
   ([[def-measure-zero-and-content-zero]]);
3. $C$ is perfect ([[def-perfect-set-r]]);
4. $C$ is uncountable ([[def-countable]]);
5. $C$ contains no interval with two distinct endpoints, and is nowhere dense
   ([[def-nowhere-dense-meager]]);
6. every nonempty connected subset of $C$ ([[def-connected-r]]) is a single
   point.

Claim 6 is what the phrase "totally disconnected" names elsewhere; that phrase
is **not** used here, because no definition of total disconnectedness exists at
this point in the reading order. What is proved is exactly the displayed
statement, and it is obtained from claim 5 through
[[thm-connected-subsets-of-r-are-intervals]].

## Facts & Assumptions

**Given:** The sets $C_n$ and $C$ of [[def-cantor-set]], and the map $\Phi$ and the set $D$ of $\{0,2\}$-valued sequences of [[thm-cantor-set-ternary-description]].

[L1] $C_0 = [0,1]$, $C_{n+1} = \tfrac13 C_n \cup (\tfrac23 + \tfrac13 C_n)$, $C = \bigcap_n C_n \subseteq C_m$ for every $m$, every $C_n \subseteq [0,1]$, $0 \in C$, and $3^{-n} = (3^{-1})^n$ ([[def-cantor-set]], [[def-interval]], [[def-integer-power]], [[lem-power-laws]]).

[L2] $\Phi$ is a bijection from $D$ onto $C$, $\Phi(a) = \sum_{k \ge 0} a_k 3^{-k-1}$, and convergent series add and scale termwise ([[thm-cantor-set-ternary-description]], [[lem-series-linearity]], [[def-series]]).

[L3] $[c,d]$ is a closed set and a bounded interval, $(c,d)$ is open, $N_\varepsilon(x) = (x-\varepsilon, x+\varepsilon)$, and every open set contains a neighbourhood of each of its points ([[def-interval]], [[def-open-and-closed-in-r]], [[def-neighbourhood-r]]).

[L4] Finite unions of closed sets are closed, and an intersection of a nonempty family of closed sets is closed ([[thm-open-set-algebra-r]]).

[L5] A subset of $\mathbb{R}$ is compact exactly when it is closed and bounded ([[thm-heine-borel-characterisation-r]], [[def-open-cover-r]]).

[L6] Content zero and measure zero as in [[def-measure-zero-and-content-zero]]; a set of content zero is null ([[lem-content-zero-implies-null]]); no null set contains an interval $[u,v]$ with $u < v$ ([[lem-nondegenerate-interval-is-not-null]]).

[L7] $P$ is perfect when it is closed and no point of it is isolated in it ([[def-perfect-set-r]], [[def-limit-point-r]]); every nonempty perfect subset of $\mathbb{R}$ is uncountable ([[thm-perfect-set-uncountable-r]], [[def-countable]]).

[L8] A set is nowhere dense exactly when the interior of its closure is empty, and a closed set equals its closure ([[def-nowhere-dense-meager]], [[def-interior-closure-boundary-r]], [[thm-closure-characterisations-r]]).

[L9] A subset of $\mathbb{R}$ is connected exactly when it is order-convex ([[thm-connected-subsets-of-r-are-intervals]], [[def-connected-r]], [[def-interval]]).

[L10] $|r|^k \to 0$ for $|r| < 1$ ([[lem-geometric-sequence-null]]); convergence to $0$ is tested against rational $\varepsilon > 0$ ([[def-real-limit]]); $|z| \ge 0$, $|z| = z$ for $z \ge 0$, and $|uv| = |u||v|$ ([[lem-of-abs-value]]).

[L11] Induction on $\mathbb{N}$ ([[thm-induction-principle]]); finite sums split, scale and are monotone in their terms ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L12] Ordered-field arithmetic: $0 < 1$, so $2 > 0$, $3 > 0$, $3^{-1} > 0$ and $0 < 2 \cdot 3^{-1} < 1$; adding a constant and multiplying by a positive preserve an inequality; the order is total and transitive ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** direct.

1.1 **$C$ is compact, claim 1.** First, for $\lambda \ne 0$ and $c \in \mathbb{R}$ the set $\lambda S + c := \{\lambda s + c : s \in S\}$ is closed whenever $S$ is: if $x \notin \lambda S + c$ then $(x - c)\lambda^{-1} \notin S$, so by [L3] there is a real $\eta > 0$ with $N_\eta((x-c)\lambda^{-1}) \cap S = \varnothing$, and every $z$ with $|z - x| < |\lambda|\eta$ satisfies $|(z-c)\lambda^{-1} - (x-c)\lambda^{-1}| = |z-x| \cdot |\lambda|^{-1} < \eta$ by [L10] and [L12], hence $(z-c)\lambda^{-1} \notin S$ and $z \notin \lambda S + c$. Now every $C_n$ is closed, by induction on $n$ ([L11]): $C_0 = [0,1]$ is closed by [L3], and $C_{n+1}$ is the union of the two closed sets $\tfrac13 C_n$ and $\tfrac23 + \tfrac13 C_n$, hence closed by [L4]. So $C = \bigcap_n C_n$ is closed by [L4], and $C \subseteq [0,1]$ is bounded by [L1] and [L3]; by [L5] it is compact. [L1, L3, L4, L5, L10, L11, L12]

1.2 **$C$ has content zero and measure zero, claim 2.** By induction on $n$ ([L11]) the following holds for every $n$: there are $m \in \mathbb{N}$ and reals $u_0 \le v_0, \dots, u_m \le v_m$ with $C_n \subseteq \bigcup_{j \le m}[u_j,v_j]$ and $\sum_{j \le m}(v_j - u_j) = (2 \cdot 3^{-1})^{n}$. At $n = 0$ take the single interval $[0,1]$, of total length $1 = (2 \cdot 3^{-1})^0$ by [L1]. Given such a list at $n$, define $2m + 2$ intervals by $[u_j 3^{-1},\, v_j 3^{-1}]$ for $j \le m$ and $[2 \cdot 3^{-1} + u_{j-m-1}3^{-1},\, 2 \cdot 3^{-1} + v_{j-m-1}3^{-1}]$ for $m < j \le 2m+1$; they cover $\tfrac13 C_n$ and $\tfrac23 + \tfrac13 C_n$ respectively, hence cover $C_{n+1}$, and their total length is $3^{-1}(2 \cdot 3^{-1})^{n} + 3^{-1}(2 \cdot 3^{-1})^{n} = (2 \cdot 3^{-1})^{n+1}$ by [L11] and [L12]. Since $0 < 2 \cdot 3^{-1} < 1$ by [L12], [L10] gives, for every real $\varepsilon > 0$, an $n$ with $(2 \cdot 3^{-1})^{n} \le \varepsilon$; as $C \subseteq C_n$ by [L1], the corresponding finite list covers $C$ with total length at most $\varepsilon$. So $C$ has content zero by [L6], and hence measure zero by [L6]. [L1, L6, L10, L11, L12]

2.1 **$C$ is perfect, claim 3.** $C$ is closed by step 1.1. Let $x \in C$ and let the real $\varepsilon > 0$ be given. By [L2] write $x = \Phi(a)$ with $a \in D$. By [L10] and [L12] fix $k \in \mathbb{N}$ with $2 \cdot 3^{-k-1} < \varepsilon$, and define $b \in D$ by $b_j := a_j$ for $j \ne k$ and $b_k := 2 - a_k$, so $b_k \in \{0,2\}$ and $b \ne a$. Then $\Phi(b) \in C$ and $\Phi(b) \ne \Phi(a)$ by [L2], while $\Phi(b) - \Phi(a) = \sum_{j \ge 0}(b_j - a_j)3^{-j-1} = (b_k - a_k)3^{-k-1}$ by [L2], all other terms being $0$, so $|\Phi(b) - x| = 2 \cdot 3^{-k-1} < \varepsilon$ by [L10]. Thus $N_\varepsilon(x)$ contains a point of $C$ other than $x$, for every $\varepsilon$, so $x$ is not isolated in $C$; by [L7] $C$ is perfect. [step 1.1, L2, L7, L10, L12]

2.2 **$C$ contains no nondegenerate interval and is nowhere dense, claim 5.** By step 1.2 the set $C$ is null, so by [L6] it contains no $[u,v]$ with $u < v$; in particular it contains no interval of any of the four bounded forms with distinct endpoints, since such an interval contains a closed one with distinct endpoints by [L6] and [L12]. Its interior is therefore empty: if $N_\varepsilon(x) \subseteq C$ for some real $\varepsilon > 0$, then $[x - \varepsilon \cdot 2^{-1},\, x + \varepsilon \cdot 2^{-1}] \subseteq N_\varepsilon(x) \subseteq C$ by [L3] and [L12], an interval with distinct endpoints. Since $C$ is closed by step 1.1, it equals its closure, so [L8] gives that $C$ is nowhere dense. [step 1.1, step 1.2, L3, L6, L8, L12]

3.1 **$C$ is uncountable, claim 4.** $C$ is nonempty, since $0 \in C$ by [L1], and perfect by step 2.1, so [L7] applies. [step 2.1, L1, L7]

3.2 **Connected subsets, claim 6.** Let $E \subseteq C$ be connected and nonempty. By [L9] $E$ is order-convex, so if $u, v \in E$ with $u < v$ then $[u,v] \subseteq E \subseteq C$, contradicting step 2.2. Hence no two distinct elements of $E$ exist, and $E$, being nonempty, is a single point. [step 2.2, L9, L12]

4.1 Claims 1 to 6 are steps 1.1, 1.2, 2.1, 3.1, 2.2 and 3.2 respectively, so all six hold. [step 1.1, step 1.2, step 2.1, step 2.2, step 3.1, step 3.2] ∎

## Remarks

- **Two independent proofs of uncountability.** The route above is [[thm-perfect-set-uncountable-r]] applied to a nonempty perfect set. The other is claim 3 of [[thm-cantor-set-ternary-description]]: $C$ is in bijection with $\{0,1\}^{\mathbb{N}}$, which is in bijection with the power set of $\mathbb{N}$, uncountable by [[thm-cantor-powerset]]. The two arguments share nothing, and the second is the one that makes the *size* of $C$ evident: $C$ is in bijection with the power set of $\mathbb{N}$, while having content zero. **It is deliberately not said here that $C$ has as many points as $\mathbb{R}$.** That would require a bijection between $\mathbb{R}$ and the power set of $\mathbb{N}$, and no such bijection is constructed anywhere at this point in the reading order; the two uncountability results available here are separate facts, one proved by the diagonal argument on power sets and one by nested intervals.

- **Claim 2 and claim 4 together are the point of the whole construction.** A set of measure zero may be uncountable, so nullity is not a cardinality condition; and a nowhere dense set need not be null, so it is not a category condition either ([[fs-nowhere-dense-implies-measure-zero]], [[thm-fat-cantor-set-has-positive-measure]]).

- **Why claim 5 is proved through measure and not by inspection.** The intervals making up $C_n$ have length $3^{-n}$, and one can see directly that a long interval cannot fit inside $C$. Doing that rigorously means keeping track of the $2^n$ component intervals of $C_n$ and their gaps; going through [[lem-nondegenerate-interval-is-not-null]] uses the estimate already made in step 1.2 and needs no such bookkeeping.

- **Every point of $C$ is a limit of other points of $C$, and the witnesses are explicit**: change one ternary digit far out, as step 2.1 does. This is also what shows $C$ has no isolated points without any appeal to the structure of its complement.
````

### `thm-cantor-set-ternary-description`

````markdown
---
id: thm-cantor-set-ternary-description
kind: theorem
title: "The Cantor set is exactly the set of $\\sum_{k \\ge 1} a_k 3^{-k}$ with every $a_k \\in \\{0,2\\}$, and this gives a bijection with $\\{0,1\\}^{\\mathbb{N}}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cantor-set, def-series, thm-geometric-series, def-injection-surjection-bijection, def-integer-power, lem-power-laws, thm-nonnegative-series-bounded-partial-sums, def-interval, lem-series-linearity, thm-recursion, thm-induction-principle, thm-well-ordering-principle, lem-geometric-sequence-null, def-real-limit, lem-limit-unique, def-sequence, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules, lem-of-abs-value]
justified_by: []
forward_refs: [cex-cantor-point-that-is-not-an-endpoint]
aliases: []
landmark: true
short: "$C$ = ternary digits in $\\{0,2\\}$"
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
    - title: "Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (§2.44)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Stanford Math 205A, Homework 1"
      url: "https://math.stanford.edu/~ryzhik/STANFORD/STANF205-11/hw205-11-1.pdf"
    - title: "University of Chicago MATH 395 notes"
      url: "https://math.uchicago.edu/~alephnil/notes/MATH-395-notes.pdf"
pipeline_run: null
---

## Statement

Let $D$ be the set of sequences $a : \mathbb{N} \to \{0,2\}$
([[def-sequence]]), the two values being the real numbers $0$ and $2$. For
$a \in D$ the series $\sum_{k \ge 0} a_k 3^{-k-1}$ converges ([[def-series]]);
write

$$\Phi(a) \;:=\; \sum_{k=0}^{\infty} a_k 3^{-k-1} .$$

Then, with $C$ and $(C_n)$ as in [[def-cantor-set]]:

1. $\Phi(a) \in [0,1]$ for every $a \in D$, and $C = \{\, \Phi(a) : a \in D \,\}$;
2. $\Phi$ is injective, so $\Phi$ is a bijection from $D$ onto $C$
   ([[def-injection-surjection-bijection]]);
3. consequently $b \mapsto \Phi\big((2 b_k)_k\big)$ is a bijection from
   $\{0,1\}^{\mathbb{N}}$, the set of sequences with values in $\{0,1\}$, onto
   $C$;
4. $C = \tfrac13 C \cup \big(\tfrac23 + \tfrac13 C\big)$, and the two sets on the
   right are disjoint.

**On the indexing.** The digit $a_k$ carries the weight $3^{-k-1}$, so the
series starts at $k = 0$ with the term $a_0/3$; written with the classical
$1$-based index it reads $\sum_{k \ge 1} a_k 3^{-k}$, which is the form in the
title. Sequences in this library are functions on $\mathbb{N}$ and $\mathbb{N}$
contains $0$ ([[def-sequence]]), so the $0$-based form is the one used
throughout the proof.

## Facts & Assumptions

**Given:** The sets $C_n$ and $C$ of [[def-cantor-set]], the set $D$ of sequences with values in $\{0,2\}$, and for $a \in D$ the shifted sequence $\sigma a$ defined by $(\sigma a)_k := a_{k+1}$, which again lies in $D$.

[L1] The Cantor set: $C_0 = [0,1]$, $C_{n+1} = \tfrac13 C_n \cup (\tfrac23 + \tfrac13 C_n)$, $C = \bigcap_n C_n = \bigcap_n C_{n+1}$, every $C_n \subseteq [0,1]$, the two halves of $C_{n+1}$ lie in $[0,\tfrac13]$ and in $[\tfrac23,1]$ respectively and are disjoint, and $3^{-n}$ denotes $(3^{-1})^n$ ([[def-cantor-set]], [[def-interval]]).

[L2] Series: partial sums $s_n = \sum_{k<n} t_k$, convergence of $(s_n)$, the sum as its limit, the tail clause $\sum_{k \ge m} t_k$ and the identity $\sum_{k<n+1} t_k = t_0 + \sum_{j<n} t_{j+1}$ ([[def-series]], [[def-sequence]]).

[L3] A series of nonnegative terms converges exactly when its partial sums are bounded above, its sum is then their supremum, every partial sum is at most the sum, and a convergent series of nonnegative terms has sum $\ge 0$ ([[thm-nonnegative-series-bounded-partial-sums]]).

[L4] $\sum_{k=0}^{\infty} 3^{-k} = 1/(1 - 3^{-1}) = 3 \cdot 2^{-1}$ ([[thm-geometric-series]], [[def-integer-power]], [[lem-power-laws]]).

[L5] Convergent series add and scale termwise ([[lem-series-linearity]]).

[L6] Recursion and induction on $\mathbb{N}$ ([[thm-recursion]], [[thm-induction-principle]]).

[L7] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L8] $3^{-n} \to 0$ ([[lem-geometric-sequence-null]]); convergence is tested against rational $\varepsilon > 0$ and a convergent sequence has exactly one limit ([[def-real-limit]], [[lem-limit-unique]]); $|z| \ge 0$ and $|z| = z$ for $z \ge 0$ ([[lem-of-abs-value]]).

[L9] Ordered-field arithmetic: $0 < 1$, so $2 > 0$ and $3 > 0$ and $3^{-1} > 0$, and $3^{-1} < 2 \cdot 3^{-1}$; adding a constant and multiplying by a positive preserve an inequality; the order is total and transitive ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** direct.

1.1 **$\Phi$ is well defined and takes values in $[0,1]$.** For $a \in D$ every term $a_k 3^{-k-1}$ is $\ge 0$ by [L1] and [L9], and for every $n$ the partial sum satisfies $\sum_{k<n} a_k 3^{-k-1} \le \sum_{k<n} 2 \cdot 3^{-1} \cdot 3^{-k} = 2 \cdot 3^{-1} \sum_{k<n} 3^{-k} \le 2 \cdot 3^{-1} \cdot 3 \cdot 2^{-1} = 1$, by [L3], [L4] and [L9]. So by [L3] the series converges, its sum $\Phi(a)$ satisfies $0 \le \Phi(a) \le 1$, and $\Phi(a) \in [0,1]$ by [L1]. [given, L1, L3, L4, L9]

1.2 **Shift identity:** $\Phi(a) = a_0 \cdot 3^{-1} + 3^{-1}\Phi(\sigma a)$ for every $a \in D$. Indeed by [L2] the partial sums satisfy $\sum_{k<n+1} a_k 3^{-k-1} = a_0 3^{-1} + \sum_{j<n} a_{j+1} 3^{-j-2} = a_0 3^{-1} + 3^{-1}\sum_{j<n} a_{j+1}3^{-j-1}$, using $3^{-j-2} = 3^{-1}\cdot 3^{-j-1}$ from [L1] and [L9]; letting $n$ grow and using [L5] and [L2] gives the identity. [given, L1, L2, L5, L9]

1.3 **Self-similarity of $C$**, claim 4. If $y \in C$ then $y \in C_n$ for every $n$, so $y \cdot 3^{-1} \in \tfrac13 C_n \subseteq C_{n+1}$ and $2 \cdot 3^{-1} + y \cdot 3^{-1} \in \tfrac23 + \tfrac13 C_n \subseteq C_{n+1}$ for every $n$, whence both lie in $\bigcap_n C_{n+1} = C$ by [L1]; this gives the inclusion $\supseteq$. Conversely let $x \in C$, so $x \in C_{n+1}$ for every $n$. By [L1] the first half of $C_{n+1}$ lies in $[0,\tfrac13]$ and the second in $[\tfrac23,1]$, and $\tfrac13 < \tfrac23$ by [L9]. If $x \le \tfrac13$ then $x \notin [\tfrac23,1]$, so for every $n$ one has $x \in \tfrac13 C_n$, that is $3x \in C_n$; hence $3x \in C$ and $x \in \tfrac13 C$. If $x > \tfrac13$ then $x \notin [0,\tfrac13]$, so for every $n$ one has $x \in \tfrac23 + \tfrac13 C_n$, that is $3x - 2 \in C_n$; hence $3x - 2 \in C$ and $x \in \tfrac23 + \tfrac13 C$. Disjointness is [L1] and [L9], since $\tfrac13 C \subseteq [0,\tfrac13]$ and $\tfrac23 + \tfrac13 C \subseteq [\tfrac23,1]$. [L1, L9]

2.1 **$\Phi(a) \in C$ for every $a \in D$.** By induction on $n$ ([L6]) the statement "for every $a \in D$, $\Phi(a) \in C_n$" holds for every $n$: at $n = 0$ it is step 1.1 and [L1]; and if it holds at $n$, then for $a \in D$ the value $a_0$ is $0$ or $2$, so step 1.2 gives $\Phi(a) = 3^{-1}\Phi(\sigma a) \in \tfrac13 C_n$ in the first case and $\Phi(a) = 2 \cdot 3^{-1} + 3^{-1}\Phi(\sigma a) \in \tfrac23 + \tfrac13 C_n$ in the second, so $\Phi(a) \in C_{n+1}$ by [L1]. Hence $\Phi(a) \in \bigcap_n C_n = C$. [step 1.1, step 1.2, L1, L6]

2.2 **The digit recursion.** Fix $x \in C$ and let $T : \mathbb{R} \to \mathbb{R}$ be $T(y) := 3y$ for $y \le 3^{-1}$ and $T(y) := 3y - 2$ for $y > 3^{-1}$, a definition by cases on the total order ([L9]) and so a genuine function. By [L6] there is $y : \mathbb{N} \to \mathbb{R}$ with $y_0 = x$ and $y_{n+1} = T(y_n)$; put $a_n := 0$ when $y_n \le 3^{-1}$ and $a_n := 2$ otherwise, so that $a \in D$ and $y_{n+1} = 3 y_n - a_n$ for every $n$. Every $y_n$ lies in $C$, by induction on $n$: $y_0 = x \in C$; and if $y_n \in C$ then, by step 1.3, either $y_n \in \tfrac13 C \subseteq [0,\tfrac13]$ or $y_n \in \tfrac23 + \tfrac13 C \subseteq [\tfrac23,1]$, and these two cases are exactly $y_n \le \tfrac13$ and $y_n > \tfrac13$ by [L9]; in the first $y_n = z \cdot 3^{-1}$ with $z \in C$ and $y_{n+1} = 3y_n = z \in C$, in the second $y_n = 2 \cdot 3^{-1} + z \cdot 3^{-1}$ with $z \in C$ and $y_{n+1} = 3y_n - 2 = z \in C$. [step 1.3, L1, L6, L9]

2.3 **$\Phi$ is injective.** Let $a, b \in D$ with $a \ne b$; the set of $k$ with $a_k \ne b_k$ is a nonempty subset of $\mathbb{N}$, so by [L7] it has a least element $k$, and by symmetry we may take $a_k = 0$ and $b_k = 2$. By [L5], $\Phi(b) - \Phi(a) = \sum_{j \ge 0}(b_j - a_j)3^{-j-1}$, and the terms with $j < k$ vanish, so by [L2] this equals $2 \cdot 3^{-k-1} + R$ with $R := \sum_{j \ge k+1}(b_j - a_j)3^{-j-1}$. Every $b_j - a_j$ is at least $-2$, so the series $\sum_{j \ge k+1}\big((b_j - a_j) + 2\big)3^{-j-1}$ has nonnegative terms and hence nonnegative sum by [L3], giving $R \ge -\sum_{j \ge k+1} 2 \cdot 3^{-j-1} = -2 \cdot 3^{-k-2} \cdot 3 \cdot 2^{-1} = -3^{-k-1}$ by [L2], [L4], [L5] and [L9]. Therefore $\Phi(b) - \Phi(a) \ge 2 \cdot 3^{-k-1} - 3^{-k-1} = 3^{-k-1} > 0$ and $\Phi(a) \ne \Phi(b)$. [step 1.1, L2, L3, L4, L5, L7, L9]

3.1 **The value is recovered from the digits.** With $x$, $(y_n)$ and $a$ as in step 2.2, put $s_n := \sum_{k<n} a_k 3^{-k-1}$. Then $x = s_n + 3^{-n} y_n$ for every $n$, by induction on $n$ ([L6]): at $n = 0$ both sides are $x$, since $s_0 = 0$ by [L2] and $3^{0} = 1$; and if $x = s_n + 3^{-n}y_n$ then $s_{n+1} + 3^{-n-1}y_{n+1} = s_n + a_n 3^{-n-1} + 3^{-n-1}(3y_n - a_n) = s_n + 3^{-n}y_n = x$, using [L1], [L2] and [L9]. [step 2.2, L1, L2, L6, L9]

4.1 **Hence $x = \Phi(a)$, so $C \subseteq \Phi[D]$.** Every $y_n$ lies in $C \subseteq [0,1]$ by step 2.2 and [L1], so $0 \le x - s_n = 3^{-n}y_n \le 3^{-n}$ by step 3.1 and [L9]. Given a rational $\varepsilon > 0$, [L8] supplies $N$ with $3^{-n} < \varepsilon$ for all $n \ge N$, and then $|s_n - x| = x - s_n \le 3^{-n} < \varepsilon$ by [L8]; so $s_n \to x$. But $s_n \to \Phi(a)$ by [L2], since $(s_n)$ is the sequence of partial sums of the series defining $\Phi(a)$, and limits are unique by [L8]; therefore $x = \Phi(a)$ with $a \in D$. [step 2.2, step 3.1, L1, L2, L8, L9]

5.1 By steps 2.1 and 4.1 the image of $D$ under $\Phi$ is exactly $C$, which with step 1.1 is claim 1; step 2.3 is claim 2, so $\Phi$ is a surjection from $D$ onto $C$ that is injective, that is, a bijection ([[def-injection-surjection-bijection]]); the map $b \mapsto (2b_k)_k$ is a bijection from $\{0,1\}^{\mathbb{N}}$ onto $D$, with inverse $a \mapsto (a_k \cdot 2^{-1})_k$ by [L9], and a composition of bijections is a bijection, which is claim 3; and step 1.3 is claim 4. [step 1.1, step 1.3, step 2.1, step 2.3, step 4.1, L9] ∎

## Remarks

- **The endpoints are the digit sequences that are eventually constant.** For
  instance $0 = \Phi(0,0,0,\dots)$, $1 = \Phi(2,2,2,\dots)$,
  $\tfrac13 = \Phi(0,2,2,2,\dots)$ and $\tfrac23 = \Phi(2,0,0,0,\dots)$, the
  first two by [[thm-geometric-series]] and the last two by the shift identity of
  step 1.2. That the eventually constant sequences do **not** exhaust $C$ is the
  content of [[cex-cantor-point-that-is-not-an-endpoint]], where $1/4$ is
  computed to be $\Phi(0,2,0,2,\dots)$.

- **No digit is ever $1$, and that is the whole point.** A real of $[0,1]$ with a
  ternary expansion using the digit $1$ at some place and not representable
  without it lies in one of the removed middle thirds. The theorem does not
  assert that every real has a ternary expansion, and it does not need to: the
  map $\Phi$ is constructed from the digits, and the converse direction extracts
  digits from a point of $C$ by the canonical recursion of step 2.2, never by
  invoking a general expansion theorem.

- **Where the choice-freeness lies.** The digit extraction is a definition by
  cases on a total order fed to [[thm-recursion]], so the whole passage from a
  point of $C$ to its digit sequence is a single function, not a sequence of
  selections. The same discipline governs [[thm-perfect-set-uncountable-r]] and
  [[thm-baire-category-r]].

- **Claim 3 is what makes $C$ uncountable.** $\{0,1\}^{\mathbb{N}}$ is in
  bijection with the power set of $\mathbb{N}$, which is uncountable by
  [[thm-cantor-powerset]]; that route and the perfect-set route are both recorded
  in [[thm-cantor-set-properties]].
````

### `thm-fat-cantor-set-has-positive-measure`

````markdown
---
id: thm-fat-cantor-set-has-positive-measure
kind: theorem
title: "The Smith-Volterra-Cantor set is compact, perfect and nowhere dense, and does not have measure zero"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-fat-cantor-set, def-measure-zero-and-content-zero, def-nowhere-dense-meager, thm-heine-borel-characterisation-r, def-open-cover-r, def-bounded-set, def-perfect-set-r, lem-nondegenerate-interval-is-not-null, thm-n-cross-n-countable, def-injection-surjection-bijection, def-finite-sum, lem-finite-sum-laws, def-series, def-interval, def-integer-power, lem-power-laws, thm-open-set-algebra-r, def-open-and-closed-in-r, def-limit-point-r, def-interior-closure-boundary-r, thm-closure-characterisations-r, def-neighbourhood-r, thm-geometric-series, thm-nonnegative-series-bounded-partial-sums, thm-induction-principle, thm-well-ordering-principle, lem-nat-trichotomy, def-nat-order, lem-geometric-sequence-null, def-real-limit, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
forward_refs: [cex-nowhere-dense-with-positive-measure, cex-dense-set-of-measure-zero, ex-fat-cantor-measure-computed]
aliases: []
landmark: true
short: "fat Cantor set: nowhere dense, not null"
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
    - title: "Smith-Volterra-Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Smith%E2%80%93Volterra%E2%80%93Cantor_set"
    - title: "Null set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Null_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 11"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "A. Jin, Cantor sets in topology, analysis, and financial markets"
      url: "https://math.uchicago.edu/~may/REU2021/REUPapers/Jin%2CAlexa.pdf"
pipeline_run: null
---

## Statement

Let $S$ be the Smith-Volterra-Cantor set ([[def-fat-cantor-set]]). Then:

1. $S$ is closed and bounded, hence compact
   ([[thm-heine-borel-characterisation-r]]);
2. $S$ is perfect ([[def-perfect-set-r]]);
3. $S$ is nowhere dense ([[def-nowhere-dense-meager]]);
4. if $(a_k)$ and $(b_k)$ are sequences of reals with $a_k \le b_k$,
   $S \subseteq \bigcup_k [a_k,b_k]$ and $\sum_{k<i}(b_k - a_k) \le M$ for every
   $i \in \mathbb{N}$, then $M \ge 2^{-1}$.

In particular $S$ does **not** have measure zero
([[def-measure-zero-and-content-zero]]): no cover of $S$ by intervals has total
length below $2^{-1}$, let alone below every positive $\varepsilon$.

**Claim 4 is the quantitative form**, and it is what claim 4 of the title asserts
in the only vocabulary available here. This library defines no outer measure, so
"the measure of $S$ is $1/2$" is not a statement it can make; what it can state,
and what is proved below, is that $2^{-1}$ is a lower bound for the total length
of every interval cover of $S$.

## Facts & Assumptions

**Given:** The lengths $(\lambda_n)$, the gaps $g_n = \lambda_n - \lambda_{n+1}$, the finite lists $(N_n, \ell^{(n)})$ with entries $e^{(n)}_j$, and the sets $S_n$, $S$ of [[def-fat-cantor-set]]. For $n \in \mathbb{N}$ and $j < N_n$ write $M^{(n)}_j := \big(e^{(n)}_j + \lambda_{n+1},\ e^{(n)}_j + g_n\big)$ for the open interval removed from the $j$-th piece at stage $n$.

[A1] The negation of claim 4: sequences $(a_k)$, $(b_k)$ with $a_k \le b_k$, $S \subseteq \bigcup_k [a_k,b_k]$, all partial sums $\sum_{k<i}(b_k - a_k) \le M$, and $M < 2^{-1}$.

[L1] The construction: $N_0 = 1$, $e^{(0)}_0 = 0$, $\lambda_0 = 1$, $N_{n+1} = N_n + N_n$, $e^{(n+1)}_j = e^{(n)}_j$ for $j < N_n$ and $e^{(n+1)}_{N_n + j} = e^{(n)}_j + g_n$ for $j < N_n$; $S_n = \bigcup_{j<N_n}[e^{(n)}_j, e^{(n)}_j + \lambda_n]$; $S = \bigcap_n S_n \subseteq S_m \subseteq [0,1]$; $0 < \lambda_{n+1} < g_n < \lambda_n \le 2^{-n}$; $g_n + \lambda_{n+1} = \lambda_n$; $\lambda_n - 2\lambda_{n+1} = 4^{-n-1}$; and $\sum_{j<N_n} c = 2^{n}c$ for every real $c$ ([[def-fat-cantor-set]], [[def-interval]], [[def-integer-power]], [[lem-power-laws]]).

[L2] $[c,d]$ is a closed set, $(c,d)$ is open, $N_\varepsilon(x) = (x-\varepsilon,x+\varepsilon)$, a closed bounded interval is bounded, finite unions of closed sets are closed and an intersection of a nonempty family of closed sets is closed ([[def-interval]], [[def-open-and-closed-in-r]], [[def-neighbourhood-r]], [[def-bounded-set]], [[thm-open-set-algebra-r]]).

[L3] A subset of $\mathbb{R}$ is compact exactly when it is closed and bounded ([[thm-heine-borel-characterisation-r]], [[def-open-cover-r]]).

[L4] Perfect means closed with no isolated point; nowhere dense means the interior of the closure is empty, and a closed set equals its closure ([[def-perfect-set-r]], [[def-limit-point-r]], [[def-nowhere-dense-meager]], [[def-interior-closure-boundary-r]], [[thm-closure-characterisations-r]]).

[L5] If $[u,v] \subseteq \bigcup_k [c_k,d_k]$ with $u \le v$, $c_k \le d_k$ and $\sum_{k<i}(d_k - c_k) \le M'$ for every $i$, then $M' \ge v - u$ ([[lem-nondegenerate-interval-is-not-null]]).

[L6] There is a bijection $J : \mathbb{N} \times \mathbb{N} \to \mathbb{N}$ ([[thm-n-cross-n-countable]], [[def-injection-surjection-bijection]]).

[L7] Finite sums: splitting, scaling, monotonicity in the terms; a finite sum of nonnegative terms indexed injectively inside a finite rectangle is at most the sum over the rectangle ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L8] $\sum_{n=0}^{\infty} 2^{-n} = 2$, every partial sum of a nonnegative series is at most its sum, and $2^{-n} \to 0$ ([[thm-geometric-series]], [[thm-nonnegative-series-bounded-partial-sums]], [[def-series]], [[lem-geometric-sequence-null]], [[def-real-limit]]).

[L9] Induction on $\mathbb{N}$; every nonempty subset of $\mathbb{N}$ has a least element; every finite list of naturals has an upper bound in $\mathbb{N}$, the order of $\mathbb{N}$ being total ([[thm-induction-principle]], [[thm-well-ordering-principle]], [[lem-nat-trichotomy]], [[def-nat-order]]).

[L10] Ordered-field arithmetic: $0 < 1$, so $2 > 0$ and $4 > 0$ and $2^{-1} > 0$; adding a constant and multiplying by a positive preserve an inequality; the order is total and transitive ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that claim 4 fails, and fix $(a_k)$, $(b_k)$ and $M$ as in [A1], so that $M < 2^{-1}$. [assume-contra, given, A1, choose]

1.2 **$S$ is compact, claim 1.** Each $S_n$ is the union of the finite list of closed sets $[e^{(n)}_j, e^{(n)}_j + \lambda_n]$, $j < N_n$, hence closed by [L2]; so $S = \bigcap_n S_n$ is closed by [L2], and $S \subseteq [0,1]$ is bounded by [L1] and [L2]; by [L3] it is compact. [L1, L2, L3]

1.3 **Separation.** For every $n$ and all $i \ne j$ below $N_n$ one has $|e^{(n)}_i - e^{(n)}_j| > \lambda_n$, by induction on $n$ ([L9]). At $n = 0$ there is nothing to prove, since $N_0 = 1$. Assume it at $n$ and let $i \ne j$ below $N_{n+1} = N_n + N_n$. If both indices are $< N_n$, or both are $\ge N_n$, the two entries are $e^{(n)}_{i'}$ and $e^{(n)}_{j'}$ with $i' \ne j'$, possibly both shifted by the same $g_n$, so the difference has absolute value $> \lambda_n > \lambda_{n+1}$ by [L1]. Otherwise the entries are $e^{(n)}_{i'}$ and $e^{(n)}_{j'} + g_n$; if $i' = j'$ the difference is $g_n > \lambda_{n+1}$ by [L1]; if $e^{(n)}_{i'} - e^{(n)}_{j'} > \lambda_n$ then $e^{(n)}_{i'} - e^{(n)}_{j'} - g_n > \lambda_n - g_n = \lambda_{n+1}$, and if $e^{(n)}_{j'} - e^{(n)}_{i'} > \lambda_n$ then $e^{(n)}_{j'} + g_n - e^{(n)}_{i'} > \lambda_n > \lambda_{n+1}$, in each case by [L1] and [L10]. Consequently the pieces $[e^{(n)}_j, e^{(n)}_j + \lambda_n]$, $j < N_n$, are pairwise disjoint. [L1, L9, L10]

1.4 **Every endpoint lies in $S$.** Fix $n$ and $j < N_n$. For $m \le n$ one has $e^{(n)}_j$ and $e^{(n)}_j + \lambda_n$ in $S_n \subseteq S_m$ by [L1]. For $m \ge n$, an induction on $m$ ([L9]) gives indices $j', j'' < N_m$ with $e^{(m)}_{j'} = e^{(n)}_j$ and $e^{(m)}_{j''} + \lambda_m = e^{(n)}_j + \lambda_n$: at $m = n$ take $j' = j'' = j$; and if they exist at $m$, then $e^{(m+1)}_{j'} = e^{(m)}_{j'}$ works for the left endpoint, while $e^{(m+1)}_{N_m + j''} + \lambda_{m+1} = e^{(m)}_{j''} + g_m + \lambda_{m+1} = e^{(m)}_{j''} + \lambda_m$ works for the right one, by [L1]. So both points lie in every $S_m$, hence in $S$. [L1, L9]

1.5 **The complement decomposes over the stages.** $[0,1] \setminus S = \bigcup_{n}(S_n \setminus S_{n+1})$. The inclusion $\supseteq$ holds because $S_n \subseteq S_0 = [0,1]$ and $S \subseteq S_{n+1}$ by [L1]. For $\subseteq$, let $x \in [0,1] \setminus S$; then $x \in S_0$ and, $S$ being $\bigcap_m S_m$, the set of $m$ with $x \notin S_m$ is nonempty, so by [L9] it has a least element $m_0$, and $m_0 \ge 1$ since $x \in S_0$. Put $n := m_0 - 1$; then $x \in S_n$ by minimality and $x \notin S_{n+1}$. [L1, L9]

2.1 **The removed pieces.** Fix $n$ and $j < N_n$. By [L1] the pieces $[e^{(n)}_j, e^{(n)}_j + \lambda_{n+1}]$ and $[e^{(n)}_j + g_n,\ e^{(n)}_j + \lambda_n]$ both occur among the pieces of $S_{n+1}$, so a point $x$ of $[e^{(n)}_j, e^{(n)}_j + \lambda_n]$ outside $S_{n+1}$ satisfies $\lambda_{n+1} < x - e^{(n)}_j < g_n$, that is $x \in M^{(n)}_j$; hence $S_n \setminus S_{n+1} \subseteq \bigcup_{j<N_n} M^{(n)}_j$. Conversely $M^{(n)}_j \cap S_{n+1} = \varnothing$: a piece of $S_{n+1}$ coming from $i \ne j$ lies in $[e^{(n)}_i, e^{(n)}_i + \lambda_n]$, which is disjoint from $[e^{(n)}_j, e^{(n)}_j + \lambda_n] \supseteq M^{(n)}_j$ by step 1.3, while the two pieces coming from $j$ itself are disjoint from the open interval $M^{(n)}_j$ by [L10]. Finally each $M^{(n)}_j$ has length $g_n - \lambda_{n+1} = \lambda_n - 2\lambda_{n+1} = 4^{-n-1}$, so $\sum_{j<N_n} 4^{-n-1} = 2^{n} \cdot 4^{-n-1} = 4^{-1} \cdot 2^{-n}$ by [L1]. [step 1.3, L1, L10]

2.2 **$S$ is perfect, claim 2.** $S$ is closed by step 1.2. Let $x \in S$ and let the real $\varepsilon > 0$ be given; by [L1] and [L8] fix $n$ with $\lambda_n \le 2^{-n} < \varepsilon$. Since $x \in S_n$ there is $j < N_n$ with $x \in [e^{(n)}_j, e^{(n)}_j + \lambda_n]$; the two endpoints of that piece lie in $S$ by step 1.4, are distinct because $\lambda_n > 0$, and each is within $\lambda_n < \varepsilon$ of $x$ by [L10]. So at least one of them is a point of $S \cap N_\varepsilon(x)$ different from $x$, and $x$ is not isolated in $S$; by [L4], $S$ is perfect. [step 1.2, step 1.4, L1, L4, L8, L10]

3.1 **$S$ is nowhere dense, claim 3.** $S$ is closed by step 1.2, so it equals its closure, and by [L4] it suffices that its interior be empty. Suppose $N_\varepsilon(x) \subseteq S$ for some $x$ and some real $\varepsilon > 0$; fix $n$ with $\lambda_n \le 2^{-n} < \varepsilon$ by [L1] and [L8], and $j < N_n$ with $x \in [e^{(n)}_j, e^{(n)}_j + \lambda_n]$. The point $w := e^{(n)}_j + (\lambda_{n+1} + g_n) \cdot 2^{-1}$ lies in $M^{(n)}_j$, since $\lambda_{n+1} < g_n$, and hence in $[e^{(n)}_j, e^{(n)}_j + \lambda_n]$, so $|w - x| \le \lambda_n < \varepsilon$ and $w \in N_\varepsilon(x) \subseteq S \subseteq S_{n+1}$; but $M^{(n)}_j \cap S_{n+1} = \varnothing$ by step 2.1, which is impossible. So no neighbourhood is contained in $S$ and $S$ is nowhere dense. [step 1.2, step 2.1, L1, L4, L8, L10]

3.2 **A cover of $[0,1]$ built from [A1] and the removed pieces.** By [L6] fix a bijection $J$ and define sequences $(c_i)$, $(d_i)$ as follows: for $i \in \mathbb{N}$ write $(m, t) := J^{-1}(i)$; if $m = 0$ put $(c_i, d_i) := (a_t, b_t)$; if $m \ge 1$ and $t < N_{m-1}$ put $(c_i,d_i) := \big(e^{(m-1)}_t + \lambda_{m}, \ e^{(m-1)}_t + g_{m-1}\big)$; and otherwise put $(c_i,d_i) := (0,0)$. Then $c_i \le d_i$ for every $i$ by [L1], and $\bigcup_i [c_i,d_i]$ contains $S$ by [A1] and contains $[0,1] \setminus S$ by steps 1.5 and 2.1, hence contains $[0,1]$. For a partial sum, fix $i_0$; the pairs $J^{-1}(i)$ with $i < i_0$ are distinct, so by [L9] there is $P$ bounding both of their coordinates, and since all the terms are nonnegative [L7] gives $\sum_{i<i_0}(d_i - c_i) \le \sum_{t \le P}(b_t - a_t) + \sum_{n \le P}\sum_{t < N_n} 4^{-n-1} \le M + \sum_{n\le P} 4^{-1}2^{-n} \le M + 4^{-1} \cdot 2 = M + 2^{-1}$, using [A1], step 2.1, [L7] and [L8]. [step 1.1, step 1.5, step 2.1, A1, L1, L6, L7, L8, L9]

4.1 By [L5] applied to $[0,1]$ and the cover of step 3.2, $M + 2^{-1} \ge 1 - 0 = 1$, so $M \ge 2^{-1}$, contradicting step 1.1. Claim 4 therefore holds; and $S$ is not null, since nullity would give, at $\varepsilon := 4^{-1}$, a cover of $S$ with all partial total lengths $\le 4^{-1} < 2^{-1}$, which claim 4 forbids. With steps 1.2, 2.2 and 3.1 all four claims are proved. [step 1.1, step 1.2, step 2.2, step 3.1, step 3.2, L5, L10, discharge-contradiction] ∎

## Remarks

- **Nowhere dense and null are independent.** $S$ is nowhere dense and not null;
  $\mathbb{Q}$ is null and not nowhere dense ([[lem-countable-sets-are-null]],
  [[lem-q-and-irrationals-dense-r]]). The two false statements recording this are
  [[fs-nowhere-dense-implies-measure-zero]] and
  [[fs-measure-zero-implies-nowhere-dense]], with witnesses
  [[cex-nowhere-dense-with-positive-measure]] and
  [[cex-dense-set-of-measure-zero]].

- **Where the construction differs from the Cantor set, and where it does not.**
  Steps 1.2, 1.3, 1.4, 2.2 and 3.1 use only that the pieces shrink to $0$ in
  length, double in number and stay separated, which the middle-thirds
  construction also satisfies; so $S$ and $C$ are indistinguishable at that level.
  The difference is entirely in step 2.1: the removed length at stage $n$ is
  $4^{-1}2^{-n}$ here and $2^{n}3^{-n-1}$ there, and only the first is summable to
  less than $1$. The removed lengths are added up in
  [[ex-fat-cantor-measure-computed]], where they total exactly $2^{-1}$.

- **Compactness is not what is used against nullity.** The proof of claim 4 never
  extracts a finite subcover: it combines the given countable cover of $S$ with
  the countably many removed pieces and appeals to
  [[lem-nondegenerate-interval-is-not-null]], whose own proof is where the
  compactness of $[0,1]$ is spent. Passing through
  [[thm-compact-null-is-content-zero]] would work too and would be longer.
````

