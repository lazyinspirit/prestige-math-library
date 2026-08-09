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

- high risk (5): 5 declared dependencies; 3 cited facts; boundary-sensitive language

## Target item — `cex-nowhere-dense-with-positive-measure`

Normalized current SHA-256: `b3fa4d72860cbeec9fe8765d1656a2fbf209952372fc12b57ea9be66a379fb29`

The complete current item follows, including frontmatter:

````markdown
---
id: cex-nowhere-dense-with-positive-measure
kind: counterexample
title: "The Smith-Volterra-Cantor set is nowhere dense and does not have measure zero"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [fs-nowhere-dense-implies-measure-zero, thm-fat-cantor-set-has-positive-measure, def-fat-cantor-set, def-nowhere-dense-meager, def-measure-zero-and-content-zero]
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
    - title: "Smith-Volterra-Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Smith%E2%80%93Volterra%E2%80%93Cantor_set"
    - title: "Null set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Null_set"
    - title: "A. Jin, Cantor sets in topology, analysis, and financial markets"
      url: "https://math.uchicago.edu/~may/REU2021/REUPapers/Jin%2CAlexa.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** every nowhere dense subset of $\mathbb{R}$ has measure zero
([[fs-nowhere-dense-implies-measure-zero]]).

The witness is the Smith-Volterra-Cantor set $S$ ([[def-fat-cantor-set]]): the
subset of $[0,1]$ obtained by removing, at stage $n$, an open interval of length
$4^{-n-1}$ from the middle of each of the $2^{n}$ intervals then present. It is
nowhere dense ([[def-nowhere-dense-meager]]) and no cover of it by intervals has
total length below $2^{-1}$, so it is not of measure zero
([[def-measure-zero-and-content-zero]]). This item records the witness and says
what makes it work; the refutation is carried out in full in
[[fs-nowhere-dense-implies-measure-zero]] and
[[thm-fat-cantor-set-has-positive-measure]].

## Facts & Assumptions

**Given:** The Smith-Volterra-Cantor set $S$ of [[def-fat-cantor-set]].

[A1] The refuted claim: every nowhere dense subset of $\mathbb{R}$ has measure zero.

[L1] $S$ is compact, perfect and nowhere dense, and any bound $M$ on the partial total lengths of a cover of $S$ by intervals satisfies $M \ge 2^{-1}$ ([[thm-fat-cantor-set-has-positive-measure]], claims 1 to 4).

[L2] A set is null when for every real $\varepsilon > 0$ it admits a cover by a sequence of closed intervals with all partial total lengths at most $\varepsilon$ ([[def-measure-zero-and-content-zero]]).

## Counterexample

**Proof technique:** direct.

1.1 $S$ is a nowhere dense subset of $\mathbb{R}$, by claim 3 of [L1]. [L1]

1.2 $S$ is not null: a cover witnessing nullity at $\varepsilon := 4^{-1}$ would give $4^{-1} \ge 2^{-1}$ by claim 4 of [L1] and [L2], which is false. [L1, L2]

2.1 So $S$ witnesses the failure of [A1]. [step 1.1, step 1.2, A1] ∎

## Remarks

- **What makes it work is a change of proportion, not of shape.** The
  middle-thirds construction removes a fixed *fraction* of each piece and loses
  total length $1$; this one removes a fixed *length* $4^{-n-1}$ at stage $n$ and
  loses only $2^{-1}$ ([[ex-fat-cantor-measure-computed]]). Topologically the two
  sets are indistinguishable at the level of the properties proved here: both are
  compact, perfect and nowhere dense ([[thm-cantor-set-properties]]).

- **The complementary witness.** For the reverse implication the witness is
  $\mathbb{Q}$, which is null and not nowhere dense
  ([[cex-dense-set-of-measure-zero]]). The two counterexamples together show the
  two smallness notions are independent.
````

## Wave 8 provenance row for the target

```json
{
  "id": "cex-nowhere-dense-with-positive-measure",
  "statement": "literature-derived",
  "proof": "ai-generated",
  "evidence": "exact-source",
  "urls": [
    "https://math.uchicago.edu/~may/REU2021/REUPapers/Jin%2CAlexa.pdf"
  ],
  "rationale": "The source explicitly presents the Smith-Volterra-Cantor set as nowhere dense with positive measure. The local counterexample delegates the two properties to its proved construction.",
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
      "source": "thm-fat-cantor-set-has-positive-measure",
      "source_section": "Statement",
      "quote": "In particular $S$ does **not** have measure zero ([[def-measure-zero-and-content-zero]]): no cover of $S$ by intervals has total length below $2^{-1}$, let alone below every positive $\\varepsilon$.",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "def-measure-zero-and-content-zero",
      "source_section": "Definition",
      "quote": "- $A$ has **measure zero**, equivalently $A$ is **null**, when for every real $\\varepsilon > 0$ there are sequences $(a_k)_{k \\in \\mathbb{N}}$ and $(b_k)_{k \\in \\mathbb{N}}$ of reals with $a_k \\le b_k$ for every $k$, such that $$A \\subseteq \\bigcup_{k \\in \\mathbb{N}} [a_k, b_k] \\qquad \\text{and} \\qquad \\sum_{k=0}^{\\infty} (b_k - a_k) \\text{ converges with sum } \\le \\varepsilon .$$ - $A$ has **content zero** when for every real $\\varepsilon > 0$ there are $n \\in \\mathbb{N}$ and reals $a_0 \\le b_0, \\dots, a_n \\le b_n$ with $$A \\subseteq \\bigcup_{j \\le n} [a_j, b_j] \\qquad \\text{and} \\qquad \\sum_{j=0}^{n} (b_j - a_j) \\le \\varepsilon .$$",
      "uses": [
        "1.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "$S$ is a nowhere dense subset of $\\mathbb{R}$, by claim 3 of [L1].",
      "step": "1.1",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "$S$ is not null: a cover witnessing nullity at $\\varepsilon := 4^{-1}$ would give $4^{-1} \\ge 2^{-1}$ by claim 4 of [L1] and [L2], which is false.",
      "step": "1.2",
      "inputs": [
        "L1",
        "L2"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "So $S$ witnesses the failure of [A1].",
      "step": "2.1",
      "inputs": [
        "A1",
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
      "reason": "The refutation/example uses a fixed nonempty witness, not a variable set whose empty case could establish or defeat the claim."
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "No scalar, cardinal, index, or exponent in the Statement of `cex-nowhere-dense-with-positive-measure` has a zero boundary requiring a separate argument."
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "No scalar, cardinal, index, or exponent in the Statement of `cex-nowhere-dense-with-positive-measure` has a one boundary requiring a separate argument."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "The Statement of `cex-nowhere-dense-with-positive-measure` has no coincident-point, singleton, or degenerate-interval case requiring a separate argument."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Steps 1.1–1.2 use the fixed fat Cantor set and its previously verified closed-endpoint construction."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "The counterexample delegates both properties to one fixed cited set."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The Statement of `cex-nowhere-dense-with-positive-measure` is not an equivalence, so it has no forward iff direction."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The Statement of `cex-nowhere-dense-with-positive-measure` is not an equivalence, so it has no reverse iff direction."
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
    "source": "cex-nowhere-dense-with-positive-measure",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "fs-nowhere-dense-implies-measure-zero",
    "declared_target": "fs-nowhere-dense-implies-measure-zero",
    "target_statement_provenance": "ai-altered",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-nowhere-dense-with-positive-measure",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-fat-cantor-set-has-positive-measure",
    "declared_target": "thm-fat-cantor-set-has-positive-measure",
    "target_statement_provenance": "ai-altered",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-nowhere-dense-with-positive-measure",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-fat-cantor-set",
    "declared_target": "def-fat-cantor-set",
    "target_statement_provenance": "ai-altered",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-nowhere-dense-with-positive-measure",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-nowhere-dense-meager",
    "declared_target": "def-nowhere-dense-meager",
    "target_statement_provenance": "ai-altered",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-nowhere-dense-with-positive-measure",
    "sourcePage": "cantor-set-baire-and-measure-zero-examples",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-measure-zero-and-content-zero",
    "declared_target": "def-measure-zero-and-content-zero",
    "target_statement_provenance": "ai-altered",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
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

## Full text of every cited or declared item (8)

### `cex-dense-set-of-measure-zero`

````markdown
---
id: cex-dense-set-of-measure-zero
kind: counterexample
title: "$\\mathbb{Q}$ is dense in $\\mathbb{R}$ and has measure zero"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [fs-measure-zero-implies-nowhere-dense, lem-countable-sets-are-null, lem-q-and-irrationals-dense-r, def-measure-zero-and-content-zero, def-nowhere-dense-meager, thm-rationals-countable, lem-rat-embeds-dense, def-countable, def-interior-closure-boundary-r, def-open-and-closed-in-r]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
cx_machine_verified: false
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Null set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Null_set"
    - title: "Dense set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dense_set"
    - title: "E. Zakon, Mathematical Analysis, §6.8: Baire Categories"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/06%3A_Differentiation_on_E_and_Other_Normed_Linear_Spaces/6.08%3A_Baire_Categories._More_on_Linear_Maps"
    - title: "MIT 18.125, Homework 2: Measure-zero sets"
      url: "https://math.mit.edu/classes/18.125/HW2.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** every subset of $\mathbb{R}$ of measure zero is nowhere dense
([[fs-measure-zero-implies-nowhere-dense]]).

The witness is $\mathbb{Q}_{\mathbb{R}}$, the set of rationals inside
$\mathbb{R}$ ([[lem-rat-embeds-dense]]). It is at most countable, hence null
([[lem-countable-sets-are-null]]), and it is dense, so its closure is
$\mathbb{R}$ and the interior of that closure is $\mathbb{R}$, as far from empty
as possible. The refutation is carried out in full in
[[fs-measure-zero-implies-nowhere-dense]]; this item records the witness and the
explicit cover.

## Facts & Assumptions

**Given:** The set $\mathbb{Q}_{\mathbb{R}} \subseteq \mathbb{R}$ of rationals.

[A1] The refuted claim: every subset of $\mathbb{R}$ of measure zero is nowhere dense.

[L1] $\mathbb{Q}$ is countably infinite, so $\mathbb{Q}_{\mathbb{R}}$ is at most countable and therefore null ([[thm-rationals-countable]], [[def-countable]], [[lem-rat-embeds-dense]], [[lem-countable-sets-are-null]], [[def-measure-zero-and-content-zero]]).

[L2] $\mathbb{Q}_{\mathbb{R}}$ is dense: $\overline{\mathbb{Q}_{\mathbb{R}}} = \mathbb{R}$ ([[lem-q-and-irrationals-dense-r]]).

[L3] Nowhere dense means the interior of the closure is empty; $\mathbb{R}$ is open, so its interior is itself ([[def-nowhere-dense-meager]], [[def-interior-closure-boundary-r]], [[def-open-and-closed-in-r]]).

## Counterexample

**Proof technique:** direct.

1.1 $\mathbb{Q}_{\mathbb{R}}$ has measure zero, by [L1]. [L1]

1.2 $\mathbb{Q}_{\mathbb{R}}$ is not nowhere dense: its closure is $\mathbb{R}$ by [L2] and the interior of $\mathbb{R}$ is $\mathbb{R}$ by [L3], which is not empty. [L2, L3]

2.1 So $\mathbb{Q}_{\mathbb{R}}$ witnesses the failure of [A1]. [step 1.1, step 1.2, A1] ∎

## Remarks

- **The cover is explicit and startling.** For every $\varepsilon > 0$ the rationals are covered by open intervals of total length exactly $\varepsilon$ ([[ex-q-covered-by-intervals-of-small-total-length]]), although their union is dense because it contains $\mathbb{Q}_{\mathbb{R}}$.

- **$\mathbb{Q}$ is small in the other sense too, one level up.** It is meager, being a countable union of singletons ([[cor-q-is-meager-and-not-g-delta]]); what fails is only nowhere density itself. So the counterexample separates "nowhere dense" from "meager", not category from measure.

- **The complementary witness** is the Smith-Volterra-Cantor set, nowhere dense and not null ([[cex-nowhere-dense-with-positive-measure]]).
````

### `def-fat-cantor-set`

````markdown
---
id: def-fat-cantor-set
kind: definition
title: "The Smith-Volterra-Cantor set: the same construction removing, at stage $n \\ge 1$, an open middle interval of length $4^{-n}$ from each of the $2^{n-1}$ remaining intervals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-cantor-set, def-interval, thm-recursion, thm-induction-principle, def-integer-power, lem-power-laws, def-finite-sum, lem-finite-sum-laws, thm-geometric-series, thm-nonnegative-series-bounded-partial-sums, def-series, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: [def-smith-volterra-cantor-set]
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
    - title: "Smith-Volterra-Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Smith%E2%80%93Volterra%E2%80%93Cantor_set"
    - title: "Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_set"
    - title: "A. Jin, Cantor sets in topology, analysis, and financial markets"
      url: "https://math.uchicago.edu/~may/REU2021/REUPapers/Jin%2CAlexa.pdf"
pipeline_run: null
---

## Definition

**The lengths.** By the recursion theorem in the index-carrying form used by
[[def-finite-sum]] ([[thm-recursion]], applied to $\mathbb{N} \times \mathbb{R}$
with starting element $(0,1)$ and the map
$(n,t) \mapsto (n+1,\, (t - 4^{-n-1}) \cdot 2^{-1})$) there is a unique sequence
$(\lambda_n)_{n \in \mathbb{N}}$ of reals with

$$\lambda_0 = 1, \qquad \lambda_{n+1} = (\lambda_n - 4^{-n-1}) \cdot 2^{-1} \quad (n \in \mathbb{N}),$$

powers being those of [[def-integer-power]]. Put $g_n := \lambda_n - \lambda_{n+1}$.

**The left endpoints.** Let $\mathcal{F}$ be the set of pairs $(N, \ell)$ with
$N \in \mathbb{N}$, $N \ge 1$, and $\ell$ a function from
$\{\, j \in \mathbb{N} : j < N \,\}$ to $\mathbb{R}$; such a pair is a *finite
list of reals of length $N$*. Applying [[thm-recursion]] to
$\mathbb{N} \times \mathcal{F}$, the starting element $(0, (1, \ell^{(0)}))$ with
$\ell^{(0)}_0 := 0$, and the map that sends $(n, (N,\ell))$ to
$(n+1, (N + N, \ell'))$ where

$$\ell'_j := \ell_j \ \ (j < N), \qquad \ell'_j := \ell_{j - N} + g_n \ \ (N \le j < N + N),$$

gives a unique family $(N_n, \ell^{(n)})_{n \in \mathbb{N}}$ of finite lists,
with $N_0 = 1$, $N_{n+1} = N_n + N_n$, and $\ell^{(n+1)}$ the concatenation of
$\ell^{(n)}$ with its translate by $g_n$. Write $e^{(n)}_j := \ell^{(n)}_j$.

**The sets.** For $n \in \mathbb{N}$ put

$$S_n \;:=\; \bigcup_{j < N_n} \big[\, e^{(n)}_j,\ e^{(n)}_j + \lambda_n \,\big], \qquad S \;:=\; \bigcap_{n \in \mathbb{N}} S_n ,$$

the intervals being those of [[def-interval]]. $S$ is the
**Smith-Volterra-Cantor set**, also called the *fat Cantor set*.

**Counting.** For every $n$ and every real $c$ one has
$\sum_{j < N_n} c = 2^{n} c$, by induction on $n$ ([[thm-induction-principle]]):
at $n = 0$ both sides are $c$; and $\sum_{j<N_n + N_n} c = \sum_{j<N_n} c +
\sum_{j<N_n} c = 2^{n}c + 2^{n}c = 2^{n+1}c$, by the splitting law
([[lem-finite-sum-laws]], [[def-finite-sum]]) and
$2^{n+1} = 2^{n} \cdot 2 = 2^{n} + 2^{n}$ ([[def-integer-power]],
[[def-ordered-field]]). So stage $n$ has "$2^n$ intervals" in exactly this sense,
and no separate arithmetic of natural-number exponents is needed.

**The lengths are positive and shrink.** By induction on $n$:
$0 < \lambda_{n+1} \le \lambda_n \cdot 2^{-1}$ and $2^{n}\lambda_n \ge 2^{-1}$.
Indeed $2^{n+1}\lambda_{n+1} = 2^{n}(\lambda_n - 4^{-n-1}) = 2^{n}\lambda_n -
4^{-1} \cdot 2^{-n}$ by [[lem-power-laws]], so by induction
$2^{n}\lambda_n = 1 - 4^{-1}\sum_{i<n} 2^{-i} \ge 1 - 4^{-1} \cdot 2 = 2^{-1}$,
using $\sum_{i<n}2^{-i} \le \sum_{i=0}^{\infty} 2^{-i} = 2$
([[thm-geometric-series]], [[thm-nonnegative-series-bounded-partial-sums]],
[[def-series]]). Hence $\lambda_n \ge 2^{-n-1} > 0$; and
$\lambda_{n+1} = (\lambda_n - 4^{-n-1})\cdot 2^{-1} \le \lambda_n \cdot 2^{-1}$
gives $\lambda_n \le 2^{-n}$ by a second induction, so the lengths tend to $0$.

**Each stage removes an open middle interval of length $4^{-n-1}$.** From the
recursion, the two sub-intervals of $[e,\, e + \lambda_n]$ retained at stage
$n+1$ are $[e,\, e + \lambda_{n+1}]$ and $[e + g_n,\, e + g_n + \lambda_{n+1}] =
[e + g_n,\, e + \lambda_n]$, so what is dropped from that piece is the open
interval

$$M \;=\; \big(\, e + \lambda_{n+1},\ e + g_n \,\big), \qquad \text{of length } \ g_n - \lambda_{n+1} \;=\; \lambda_n - 2\lambda_{n+1} \;=\; 4^{-n-1} .$$

In particular $\lambda_{n+1} < g_n$, so $M$ is nonempty, and $g_n > 0$, so
$[e + g_n, e + \lambda_n] \subseteq [e, e+\lambda_n]$. Counting from $1$ as in
the title: at stage $n \ge 1$ an open interval of length $4^{-n}$ is removed from
each of the $2^{n-1}$ intervals then present.

**The family is nested and lies in $[0,1]$.** Each retained sub-interval is
contained in the piece it came from, by the previous paragraph, so
$S_{n+1} \subseteq S_n$; and $S_0 = [0, 1]$ since $N_0 = 1$, $e^{(0)}_0 = 0$ and
$\lambda_0 = 1$. Hence $S \subseteq S_m \subseteq [0,1]$ for every $m$.

## Remarks

- **What is different from [[def-cantor-set]].** There the removed middle is a
  fixed *proportion* of each piece, so the construction is self-similar and the
  total removed length is $1$. Here the removed middle has a fixed *length*
  $4^{-n-1}$, chosen to shrink faster than the pieces multiply, and the total
  removed length is only $2^{-1}$. Everything topological survives the change:
  the set is still compact, perfect and nowhere dense
  ([[thm-fat-cantor-set-has-positive-measure]]). Everything metric fails: $S$ is
  not of measure zero.

- **Why the construction is written with explicit lists.** The set $S_n$ is a
  union of $2^n$ intervals, and both the estimate of the removed length and the
  finite covers used later need those intervals as a *list*, indexed by naturals
  below $N_n$. Building the list by recursion, rather than asserting its
  existence at each stage, is also what keeps the construction free of any
  choice: $(N_n, \ell^{(n)})$ is a single function of $n$.

- **The name.** The set was described by Smith in 1875, by Volterra in 1881 and
  by Cantor in 1883; "fat Cantor set" is the informal name, and the two names are
  used interchangeably below.

- **$0$ and $1$ belong to $S$.** Both are instances of the general fact that
  every $e^{(n)}_j$ and every $e^{(n)}_j + \lambda_n$ lies in $S$, proved where it
  is used, in [[thm-fat-cantor-set-has-positive-measure]]: take $n = 0$ and
  $j = 0$, where $e^{(0)}_0 = 0$ and $e^{(0)}_0 + \lambda_0 = 1$.
````

### `def-measure-zero-and-content-zero`

````markdown
---
id: def-measure-zero-and-content-zero
kind: definition
title: "Measure zero (a countable cover by intervals of total length below every $\\varepsilon$) and content zero (a finite such cover)"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-interval, def-series, def-countable, thm-nonnegative-series-bounded-partial-sums, def-finite-sum, lem-finite-sum-laws, def-complete-ordered-field]
justified_by: []
forward_refs: [cex-null-set-not-of-content-zero]
aliases: [def-null-set]
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
    - title: "Null set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Null_set"
    - title: "Jordan measure (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Jordan_measure"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 11"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "MIT 18.125, Homework 2: Measure-zero sets"
      url: "https://math.mit.edu/classes/18.125/HW2.pdf"
    - title: "UAF Math 641, Measure Theory notes"
      url: "https://www.cs.uaf.edu/~maxwell/AY2007/math641/Measure.pdf"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]), intervals and their lengths are as in
[[def-interval]], and a *sequence* is a function on $\mathbb{N}$, which contains
$0$. Let $A \subseteq \mathbb{R}$.

- $A$ has **measure zero**, equivalently $A$ is **null**, when for every real
  $\varepsilon > 0$ there are sequences $(a_k)_{k \in \mathbb{N}}$ and
  $(b_k)_{k \in \mathbb{N}}$ of reals with $a_k \le b_k$ for every $k$, such
  that
  $$A \subseteq \bigcup_{k \in \mathbb{N}} [a_k, b_k] \qquad \text{and} \qquad \sum_{k=0}^{\infty} (b_k - a_k) \text{ converges with sum } \le \varepsilon .$$
- $A$ has **content zero** when for every real $\varepsilon > 0$ there are
  $n \in \mathbb{N}$ and reals $a_0 \le b_0, \dots, a_n \le b_n$ with
  $$A \subseteq \bigcup_{j \le n} [a_j, b_j] \qquad \text{and} \qquad \sum_{j=0}^{n} (b_j - a_j) \le \varepsilon .$$

The number $b_k - a_k \ge 0$ is the length of $[a_k,b_k]$ ([[def-interval]]), and
the sums are the series and the finite sums of [[def-series]] and
[[def-finite-sum]].

**Working form: only the partial sums have to be checked.** All the terms
$b_k - a_k$ are $\ge 0$, so by claim 2 of
[[thm-nonnegative-series-bounded-partial-sums]] the series converges exactly when
its partial sums are bounded above, and its sum is then their supremum.
Consequently, for a fixed $\varepsilon > 0$,

$$\sum_{k=0}^{\infty}(b_k - a_k) \text{ converges with sum} \le \varepsilon \quad \Longleftrightarrow \quad \sum_{k<n} (b_k - a_k) \le \varepsilon \ \text{ for every } n \in \mathbb{N},$$

since a supremum is $\le \varepsilon$ exactly when $\varepsilon$ is an upper
bound of the set it is the supremum of ([[def-complete-ordered-field]]). Every
verification of nullity below checks the right-hand condition.

**Closed intervals lose nothing.** A bounded interval with endpoints
$a \le b$ is contained in $[a,b]$ and has the same length ([[def-interval]]), so
a cover by intervals of any of the four bounded forms yields a cover by closed
intervals with the same lengths. The definition is therefore stated with closed
intervals once and for all. Covers by *open* intervals are a genuinely different
demand, and passing to one costs a little extra length: the enlargement
$[a_k,b_k] \subseteq (a_k - \delta_k,\ b_k + \delta_k)$ is carried out where it is
needed, in [[lem-nondegenerate-interval-is-not-null]] and in
[[thm-compact-null-is-content-zero]].

**Both notions are inherited by subsets.** If $B \subseteq A$ and $A$ is null,
then any cover of $A$ covers $B$, so $B$ is null; the same sentence with finite
covers shows a subset of a set of content zero has content zero.

**A finite cover is a countable cover, so content zero implies measure zero.**
Padding the list $[a_0,b_0], \dots, [a_n,b_n]$ with the degenerate intervals
$[0,0]$ for $k > n$ leaves the total length unchanged, by the splitting law for
finite sums ([[lem-finite-sum-laws]]). This is recorded as a lemma with its
proof, [[lem-content-zero-implies-null]], because it is cited on its own.

## Remarks

- **The two notions genuinely differ.** $\mathbb{Q} \cap [0,1]$ is null and does
  not have content zero ([[cex-null-set-not-of-content-zero]]), so the two
  quantifier patterns, "a sequence of intervals" and "a finite list of
  intervals", are not interchangeable. They do agree for compact sets
  ([[thm-compact-null-is-content-zero]]), and the compact case is the only one in
  which content zero is used anywhere on this pair of pages. Nothing is claimed
  about what later pages will do with it.

- **Why "content" and not "measure" for the finite version.** The finite-cover
  notion is the vanishing of the Jordan outer content, and the countable-cover
  notion is the vanishing of the Lebesgue outer measure. Neither outer quantity
  is defined in this library, and no item here assigns a nonzero size to any set:
  every statement is of the shape "can, or cannot, be covered by intervals of
  total length below such and such a bound". That is a deliberate restriction of
  scope at this point in the reading order, not a claim that the general notions
  are unavailable in mathematics.

- **Measure zero is not vacuous and not universal.** No interval with two
  distinct endpoints is null ([[lem-nondegenerate-interval-is-not-null]]), while
  every at most countable set is ([[lem-countable-sets-are-null]]) and so is the
  uncountable Cantor set ([[thm-cantor-set-properties]]). The three facts
  together are what make the notion worth having.
````

### `def-nowhere-dense-meager`

````markdown
---
id: def-nowhere-dense-meager
kind: definition
title: "Nowhere dense, meager (first category), residual, and second category subsets of $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-interior-closure-boundary-r, thm-closure-characterisations-r, def-open-and-closed-in-r, def-limit-point-r, def-countable, def-neighbourhood-r, thm-n-cross-n-countable, def-countable-choice]
justified_by: []
forward_refs: [cex-meager-set-of-full-measure]
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
    - title: "Nowhere dense set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nowhere_dense_set"
    - title: "Meagre set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Meagre_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 and Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "E. Zakon, Mathematical Analysis, §6.8: Baire Categories"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/06%3A_Differentiation_on_E_and_Other_Normed_Linear_Spaces/6.08%3A_Baire_Categories._More_on_Linear_Maps"
    - title: "Meager set (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Meager_set"
pipeline_run: null
---

## Definition

Let $A \subseteq \mathbb{R}$, with interior $A^{\circ}$ and closure
$\overline{A}$ as in [[def-interior-closure-boundary-r]].

- $A$ is **nowhere dense** when the interior of its closure is empty:
  $$\big(\overline{A}\big)^{\circ} \;=\; \varnothing .$$
- $A$ is **meager**, or **of the first category**, when there is a sequence
  $(A_n)_{n \in \mathbb{N}}$ of nowhere dense subsets of $\mathbb{R}$ with
  $$A \;=\; \bigcup_{n \in \mathbb{N}} A_n .$$
- $A$ is **of the second category** when it is not meager.
- $A$ is **residual** (also *comeager*) when $\mathbb{R} \setminus A$ is meager.

**Why a sequence, and why that is the same as "an at most countable union".**
Sequences here are indexed by $\mathbb{N}$, which contains $0$. A finite family
$A_0, \dots, A_m$ of nowhere dense sets is turned into a sequence by setting
$A_n := \varnothing$ for $n > m$, and $\varnothing$ is nowhere dense because
$\overline{\varnothing} = \varnothing$ has empty interior; the empty family is
handled the same way and gives $A = \varnothing$. So "a union of an at most
countable family of nowhere dense sets" ([[def-countable]]) and the displayed
condition define the same class, and the sequence form is used below because it
carries an explicit index and needs no case split.

**Nowhere dense means exactly that the complement of the closure is dense.**
For $A \subseteq \mathbb{R}$,

$$\big(\overline{A}\big)^{\circ} = \varnothing \quad \Longleftrightarrow \quad \mathbb{R} \setminus \overline{A} \text{ is dense in } \mathbb{R} .$$

Indeed, by the pointwise description of the interior
([[def-interior-closure-boundary-r]]), $(\overline{A})^{\circ} = \varnothing$
says that no $x \in \mathbb{R}$ admits a real $\varepsilon > 0$ with
$N_\varepsilon(x) \subseteq \overline{A}$ ([[def-neighbourhood-r]]), that is,
that every $N_\varepsilon(x)$ meets $\mathbb{R} \setminus \overline{A}$. By
claim 1 of [[thm-closure-characterisations-r]] that says precisely that every
$x \in \mathbb{R}$ is adherent to $\mathbb{R} \setminus \overline{A}$, that is,
$\overline{\mathbb{R} \setminus \overline{A}} = \mathbb{R}$, which is density
([[def-limit-point-r]]).

**A closed set is nowhere dense exactly when its interior is empty**, since a
closed set equals its own closure (claim 4 of [[thm-closure-characterisations-r]],
[[def-open-and-closed-in-r]]). This is the form in which nowhere density is
verified nearly every time below. (The phrase *almost everywhere* is avoided
throughout this pair: it is a measure-theoretic term, and the only measure notion
defined here is measure zero.)

**Both classes are closed downwards.** If $B \subseteq A$ then
$\overline{B} \subseteq \overline{A}$ and hence
$(\overline{B})^{\circ} \subseteq (\overline{A})^{\circ}$
([[def-interior-closure-boundary-r]]), so a subset of a nowhere dense set is
nowhere dense. If $B \subseteq A = \bigcup_n A_n$ with each $A_n$ nowhere dense,
then $B = \bigcup_n (A_n \cap B)$ and each $A_n \cap B$ is nowhere dense by the
previous sentence, so a subset of a meager set is meager.

**A union of two meager sets is meager.** Let $M = \bigcup_n A_n$ and
$M' = \bigcup_n B_n$ with all $A_n$ and all $B_n$ nowhere dense; fixing one
witnessing sequence for $M$ and one for $M'$ is two instantiations of an
existential statement, not a choice principle. Let
$J : \mathbb{N} \times \mathbb{N} \to \mathbb{N}$ be a bijection
([[thm-n-cross-n-countable]]) and define a sequence $(C_j)_{j \in \mathbb{N}}$ by

$$C_{J(m,n)} \;:=\; \begin{cases} A_n & m = 0, \\ B_n & m \ne 0. \end{cases}$$

This is a total definition because $J$ is a bijection, every $C_j$ is nowhere
dense, and $\bigcup_j C_j = M \cup M'$, since $A_n = C_{J(0,n)}$ and
$B_n = C_{J(1,n)}$ and every $C_j$ is one of the $A_n$ or one of the $B_n$.

## Remarks

- **The countably infinite version of the last observation is a different
  statement.** To show that $\bigcup_i M_i$ is meager for a sequence $(M_i)$ of
  meager sets one must select a witnessing sequence of nowhere dense sets for
  every $i$ at once, which is an application of countable choice
  ([[def-countable-choice]]); the two-set case above avoids it because two
  selections are two instantiations. Nothing on this page uses the countably
  infinite version, and every meager set met below is presented together with an
  explicit witnessing sequence.

- **Nowhere dense is strictly stronger than having empty interior.**
  $\mathbb{Q}$ has empty interior, since no neighbourhood consists of rationals
  alone, yet $\overline{\mathbb{Q}} = \mathbb{R}$ has interior $\mathbb{R}$, so
  $\mathbb{Q}$ is not nowhere dense. It is nevertheless meager, being a union of
  singletons; that computation is [[cor-q-is-meager-and-not-g-delta]].

- **First category, second category and residual are not a trichotomy.** A set
  is meager or of the second category, and those two are exhaustive and
  exclusive by definition. Residual is a separate condition on the complement: a
  residual set is of the second category once $\mathbb{R}$ is known not to be
  meager in itself ([[thm-baire-category-r]]), but before that theorem nothing
  rules out a set that is both meager and residual.

- **Category is a notion of topological smallness, and it is independent of
  smallness in the sense of measure.** Neither of the two implications between
  "nowhere dense" and "measure zero" ([[def-measure-zero-and-content-zero]])
  holds, and $\mathbb{R}$ itself splits into a meager set and a set of measure
  zero; the three items settling this are
  [[fs-nowhere-dense-implies-measure-zero]],
  [[fs-measure-zero-implies-nowhere-dense]] and
  [[cex-meager-set-of-full-measure]].
````

### `ex-fat-cantor-measure-computed`

````markdown
---
id: ex-fat-cantor-measure-computed
kind: example
title: "The intervals removed from the Smith-Volterra-Cantor set have total length $1/2$, so the set cannot be covered by intervals of total length less than $1/2$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-fat-cantor-set-has-positive-measure, def-fat-cantor-set, lem-finite-interval-cover-total-length, lem-nondegenerate-interval-is-not-null, def-measure-zero-and-content-zero, thm-geometric-series, def-series, def-interval, def-integer-power, lem-power-laws, def-finite-sum, lem-finite-sum-laws, thm-nonnegative-series-bounded-partial-sums, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
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
    - title: "Smith-Volterra-Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Smith%E2%80%93Volterra%E2%80%93Cantor_set"
    - title: "Null set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Null_set"
    - title: "A. Jin, Cantor sets in topology, analysis, and financial markets"
      url: "https://math.uchicago.edu/~may/REU2021/REUPapers/Jin%2CAlexa.pdf"
pipeline_run: null
---

## Example

Let $S$ be the Smith-Volterra-Cantor set ([[def-fat-cantor-set]]). At stage $n$
exactly $2^n$ open intervals, each of length $4^{-n-1}$, are removed, so the
lengths removed at that stage total $2^{n} \cdot 4^{-n-1} = 4^{-1} \cdot 2^{-n}$
and over all stages they total

$$\sum_{n=0}^{\infty} 4^{-1} \cdot 2^{-n} \;=\; 4^{-1} \cdot 2 \;=\; \tfrac12 .$$

Correspondingly, **no cover of $S$ by intervals has total length below
$\tfrac12$**: if $(a_k)$, $(b_k)$ are sequences of reals with $a_k \le b_k$,
$S \subseteq \bigcup_k [a_k,b_k]$ and $\sum_{k<i}(b_k - a_k) \le M$ for every
$i$, then $M \ge \tfrac12$ ([[thm-fat-cantor-set-has-positive-measure]]).

The two numbers are the two halves of the unit interval's length, and the second
is what "the set has positive measure" means in the vocabulary available here:
this library defines no outer measure, so the assertion is about covers and their
total lengths, never about a number attached to $S$ itself.

## Facts & Assumptions

**Given:** The Smith-Volterra-Cantor set $S$, the lengths $(\lambda_n)$, the gaps $g_n$, the lists $(N_n, \ell^{(n)})$ and the removed intervals $M^{(n)}_j = (e^{(n)}_j + \lambda_{n+1},\ e^{(n)}_j + g_n)$ of [[def-fat-cantor-set]].

[L1] Each $M^{(n)}_j$ has length $g_n - \lambda_{n+1} = \lambda_n - 2\lambda_{n+1} = 4^{-n-1}$, and $\sum_{j<N_n} c = 2^{n}c$ for every real $c$ ([[def-fat-cantor-set]], [[def-interval]], [[def-integer-power]], [[lem-power-laws]]).

[L2] $\sum_{n=0}^{\infty}2^{-n} = 2$, convergent series scale termwise, and a series of nonnegative terms converges exactly when its partial sums are bounded, the sum being their supremum ([[thm-geometric-series]], [[def-series]], [[thm-nonnegative-series-bounded-partial-sums]], [[def-finite-sum]], [[lem-finite-sum-laws]]).

[L3] If sequences $(a_k)$, $(b_k)$ with $a_k \le b_k$ cover $S$ and all partial total lengths are at most $M$, then $M \ge 2^{-1}$; and $S$ is not null ([[thm-fat-cantor-set-has-positive-measure]], claim 4, [[def-measure-zero-and-content-zero]]).

[L4] A finite family of intervals covering $[a,b]$ has total length at least $b-a$, and the same holds for a countable family ([[lem-finite-interval-cover-total-length]], [[lem-nondegenerate-interval-is-not-null]]).

[L5] Ordered-field arithmetic: $0 < 1$, so $2 > 0$ and $4 > 0$; adding a constant and multiplying by a positive preserve an inequality ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Verification

**Proof technique:** direct.

1.1 **Stage $n$.** By [L1] the intervals removed at stage $n$ are the $M^{(n)}_j$ for $j < N_n$, each of length $4^{-n-1}$, so their lengths total $\sum_{j<N_n} 4^{-n-1} = 2^{n} \cdot 4^{-n-1}$, which equals $4^{-1} \cdot 2^{-n}$ because $4^{-n-1} = 4^{-1} \cdot 4^{-n} = 4^{-1} \cdot 2^{-2n}$ and $2^{n} \cdot 2^{-2n} = 2^{-n}$ by [L1] and [L5]. [given, L1, L5]

2.1 **All stages together.** The terms $4^{-1}2^{-n}$ are nonnegative, and by [L2] the series $\sum_n 4^{-1}2^{-n}$ converges with sum $4^{-1} \cdot 2 = 2^{-1}$. So the total length of all the removed intervals is exactly $2^{-1}$. [step 1.1, L2, L5]

3.1 **The lower bound for covers.** [L3] says precisely that a bound $M$ on all the partial total lengths of a cover of $S$ satisfies $M \ge 2^{-1}$; so no cover of $S$ by intervals, countable or finite, has total length below $2^{-1}$, and in particular $S$ is not null. The two computations fit together: the removed intervals of total length $2^{-1}$ and any cover of $S$ of total length $M$ together cover $[0,1]$, so $M + 2^{-1} \ge 1$ by [L4], which is the same bound. [step 2.1, L3, L4] ∎

## Remarks

- **What the numbers do and do not say.** "Total length of the removed
  intervals" is a sum of lengths of an explicit family, and "no cover below
  $1/2$" is a statement about all covers. Neither says that $S$ *has measure*
  $1/2$: that would require an outer measure, which is not defined at this point
  in the reading order. The pair of statements is nevertheless the exact content
  of the classical assertion.

- **Why $4^{-n}$ and not $3^{-n}$.** For the middle-thirds construction the
  removed length at stage $n$ is $2^{n}3^{-n-1}$, and
  $\sum_n 2^{n}3^{-n-1} = 3^{-1} \cdot 3 = 1$, so everything is removed in the
  sense of total length and the Cantor set is null
  ([[thm-cantor-set-properties]]). Here the removed pieces shrink faster than
  they multiply and only half the length goes.

- **The bound $1/2$ is sharp in one direction only.** The removed intervals
  together with a cover of $S$ must reach total length $1$, so a cover of $S$
  cannot do better than $1/2$; whether total length exactly $1/2$ is approached by
  covers of $S$ is a question about outer measure and is not asked here.
````

### `fs-nowhere-dense-implies-measure-zero`

````markdown
---
id: fs-nowhere-dense-implies-measure-zero
kind: false-statement
title: "FALSE: every nowhere dense subset of $\\mathbb{R}$ has measure zero"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-fat-cantor-set-has-positive-measure, def-fat-cantor-set, def-nowhere-dense-meager, def-measure-zero-and-content-zero]
justified_by: []
forward_refs: [cex-nowhere-dense-with-positive-measure]
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
    - title: "Smith-Volterra-Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Smith%E2%80%93Volterra%E2%80%93Cantor_set"
    - title: "Null set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Null_set"
    - title: "A. Jin, Cantor sets in topology, analysis, and financial markets"
      url: "https://math.uchicago.edu/~may/REU2021/REUPapers/Jin%2CAlexa.pdf"
pipeline_run: null
---

## Statement

**False claim:** every nowhere dense subset of $\mathbb{R}$
([[def-nowhere-dense-meager]]) has measure zero
([[def-measure-zero-and-content-zero]]).

The claim is tempting because a nowhere dense set is topologically thin: its
closure contains no interval at all, so it is "full of holes" everywhere. The
error is to read that as a statement about total length. Holes may be plentiful
and short at the same time, and the Smith-Volterra-Cantor set is built precisely
so that they are.

## Facts & Assumptions

**Given:** The Smith-Volterra-Cantor set $S$ of [[def-fat-cantor-set]].

[A1] The false claim: every nowhere dense subset of $\mathbb{R}$ has measure zero.

[L1] $S$ is nowhere dense ([[thm-fat-cantor-set-has-positive-measure]], claim 3).

[L2] If sequences $(a_k)$, $(b_k)$ with $a_k \le b_k$ cover $S$ and all their partial total lengths are at most $M$, then $M \ge 2^{-1}$; in particular $S$ does not have measure zero ([[thm-fat-cantor-set-has-positive-measure]], claim 4).

[L3] A set is null when for every real $\varepsilon > 0$ it has a cover by a sequence of closed intervals with all partial total lengths at most $\varepsilon$ ([[def-measure-zero-and-content-zero]]).

## Refutation

**Proof technique:** direct.

1.1 The set $S$ is a subset of $\mathbb{R}$ and is nowhere dense, by [L1]. [L1]

1.2 $S$ does not have measure zero: a cover witnessing nullity at $\varepsilon := 4^{-1}$ would have all partial total lengths at most $4^{-1}$, and [L2] then forces $4^{-1} \ge 2^{-1}$, which is false. [L2, L3]

2.1 So $S$ is a nowhere dense subset of $\mathbb{R}$ that does not have measure zero, and the claim [A1] fails at $S$; the claim is therefore false. [step 1.1, step 1.2, A1] ∎

## Remarks

- **The converse implication is also false**, and for a completely different
  reason: $\mathbb{Q}$ has measure zero and is not nowhere dense
  ([[fs-measure-zero-implies-nowhere-dense]]). So neither of the two notions of
  smallness implies the other, and the two failures are witnessed by sets of
  different cardinality, $S$ being uncountable and $\mathbb{Q}$ countable.

- **What is true.** A nowhere dense set contains no interval of positive length,
  which is a genuine consequence of the definition; and a set of measure zero
  also contains no interval of positive length
  ([[lem-nondegenerate-interval-is-not-null]]). The two conditions share that
  consequence and nothing beyond it.

- **The named witness** is [[cex-nowhere-dense-with-positive-measure]].
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

