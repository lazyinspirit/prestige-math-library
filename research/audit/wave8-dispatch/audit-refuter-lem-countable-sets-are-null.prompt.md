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

- critical risk (12): 15 declared dependencies; 15 cited facts; biconditional / both-direction claim; boundary-sensitive language; analytic limiting/completeness language

## Target item — `lem-countable-sets-are-null`

Normalized current SHA-256: `3311dceaf9b7f88c88d5e9d0c326c92eceb8e11dcd79c11ee48c1f45eb4bff15`

The complete current item follows, including frontmatter:

````markdown
---
id: lem-countable-sets-are-null
kind: lemma
title: "Every at most countable subset of $\\mathbb{R}$ has measure zero"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-measure-zero-and-content-zero, def-countable, lem-countable-iff-surjection-from-n, thm-geometric-series, def-series, def-interval, def-integer-power, def-finite-sum, lem-finite-sum-laws, thm-nonnegative-series-bounded-partial-sums, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
forward_refs: [cex-dense-set-of-measure-zero]
aliases: []
landmark: false
short: "countable $\\Rightarrow$ null"
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
    - title: "Null set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Null_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 11"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "MIT 18.125, Homework 2: Measure-zero sets"
      url: "https://math.mit.edu/classes/18.125/HW2.pdf"
pipeline_run: null
---

## Statement

Every at most countable set $A \subseteq \mathbb{R}$ ([[def-countable]]) has
measure zero ([[def-measure-zero-and-content-zero]]).

The cover is explicit: the $k$-th point of a listing of $A$ is put inside an
interval of length $\varepsilon \cdot 2^{-k-1}$, and the lengths sum to
$\varepsilon$ by [[thm-geometric-series]]. **No choice principle is used**: a
listing of $A$ is a single object, fixed once ([[lem-countable-iff-surjection-from-n]]),
and everything after that is a formula in $k$.

## Facts & Assumptions

**Given:** An at most countable set $A \subseteq \mathbb{R}$ and a real $\varepsilon > 0$. Throughout, $\theta := 2^{-1}$.

[L1] $A$ is null when for every real $\varepsilon > 0$ there are sequences $(a_k)$, $(b_k)$ with $a_k \le b_k$, $A \subseteq \bigcup_k [a_k,b_k]$, and $\sum_{k<n}(b_k - a_k) \le \varepsilon$ for every $n \in \mathbb{N}$ ([[def-measure-zero-and-content-zero]]).

[L2] $[c,d] = \{\, x : c \le x \le d \,\}$ has length $d - c$ when $c \le d$, and $[c,c] = \{c\}$ has length $0$ ([[def-interval]]).

[L3] A nonempty at most countable set admits a surjection $s : \mathbb{N} \to A$ ([[lem-countable-iff-surjection-from-n]], [[def-countable]]).

[L4] Powers and the geometric series: $\theta^0 = 1$, $\theta^{k+1} = \theta^k\theta$, $\theta^k > 0$, and $\sum_{k=0}^{\infty}\theta^k = 2$ for $\theta = 2^{-1}$; a series of nonnegative terms has all its partial sums at most its sum ([[def-integer-power]], [[thm-geometric-series]], [[def-series]], [[thm-nonnegative-series-bounded-partial-sums]]).

[L5] Finite sums: scaling by a constant, and $\sum_{k<n} 0 = 0$ ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L6] Ordered-field arithmetic: $0 < 1$, so $2 > 0$, $4 > 0$ and $t \cdot 4^{-1} > 0$ for $t > 0$; adding a constant and multiplying by a positive preserve an inequality ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** direct.

1.1 Let the real $\varepsilon > 0$ be given. If $A = \varnothing$, the constant sequences $a_k := 0$ and $b_k := 0$ satisfy $A \subseteq \bigcup_k [0,0]$ vacuously and $\sum_{k<n}(b_k - a_k) = 0 \le \varepsilon$ for every $n$ by [L5], so the condition of [L1] holds at this $\varepsilon$. Assume from now on that $A \ne \varnothing$ and, by [L3], fix a surjection $s : \mathbb{N} \to A$. [given, L1, L2, L3, L5, choose]

2.1 Put $\delta_k := \varepsilon \cdot 4^{-1} \cdot \theta^{k}$, a positive real by [L4] and [L6], and $a_k := s(k) - \delta_k$, $b_k := s(k) + \delta_k$; then $a_k \le b_k$ and $s(k) \in [a_k,b_k]$ by [L6], so $A = \{\, s(k) : k \in \mathbb{N} \,\} \subseteq \bigcup_k [a_k, b_k]$ by step 1.1. The length of $[a_k,b_k]$ is $b_k - a_k = 2\delta_k = \varepsilon \cdot 2^{-1} \cdot \theta^{k}$ by [L2] and [L6]. [step 1.1, L2, L4, L6]

3.1 For every $n \in \mathbb{N}$, $\sum_{k<n}(b_k - a_k) = \varepsilon \cdot 2^{-1} \sum_{k<n}\theta^{k} \le \varepsilon \cdot 2^{-1} \cdot 2 = \varepsilon$, using scaling from [L5] and the bound on the partial sums of the geometric series from [L4]. [step 2.1, L4, L5, L6]

4.1 So for every real $\varepsilon > 0$ the sequences of step 2.1 cover $A$ with all partial total lengths at most $\varepsilon$, which by [L1] is exactly the statement that $A$ has measure zero; the empty case was settled in step 1.1. [step 1.1, step 2.1, step 3.1, L1] ∎

## Remarks

- **Indexing.** Sequences here start at $k = 0$, and the first interval has
  length $\varepsilon \cdot 2^{-1}$, not $\varepsilon$. The total is
  $\varepsilon \cdot 2^{-1} \sum_{k \ge 0} 2^{-k} = \varepsilon$ exactly, so the
  cover is as tight as the definition allows and nothing is wasted at the first
  index.

- **Repetitions are harmless.** A surjection $s$ may repeat values, and a finite
  set is covered by infinitely many intervals, most of them redundant. This is
  why the listing form of countability ([[lem-countable-iff-surjection-from-n]])
  is the convenient one: no injectivity and no case split between the finite and
  the countably infinite case is needed.

- **The converse fails badly.** The Cantor set is uncountable and null
  ([[thm-cantor-set-properties]]), so "null" is very far from "countable"; and
  the Smith-Volterra-Cantor set is uncountable and not null
  ([[thm-fat-cantor-set-has-positive-measure]]), so cardinality decides nothing
  either way.

- **Density decides nothing either.** $\mathbb{Q}$ is countable, hence null, and
  is dense in $\mathbb{R}$ ([[cex-dense-set-of-measure-zero]]); a null set may
  therefore meet every interval.
````

## Wave 8 provenance row for the target

```json
{
  "id": "lem-countable-sets-are-null",
  "statement": "literature-derived",
  "proof": "ai-altered",
  "evidence": "exact-source",
  "urls": [
    "https://math.mit.edu/classes/18.125/HW2.pdf"
  ],
  "rationale": "MIT Homework 2.1 states exactly that every countable subset of Euclidean space has measure zero. The local proof is the standard geometric-budget cover, adapted to zero-based indexing and the library’s countability convention.",
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
      "source": "def-measure-zero-and-content-zero",
      "source_section": "Definition",
      "quote": "- $A$ has **measure zero**, equivalently $A$ is **null**, when for every real $\\varepsilon > 0$ there are sequences $(a_k)_{k \\in \\mathbb{N}}$ and $(b_k)_{k \\in \\mathbb{N}}$ of reals with $a_k \\le b_k$ for every $k$, such that $$A \\subseteq \\bigcup_{k \\in \\mathbb{N}} [a_k, b_k] \\qquad \\text{and} \\qquad \\sum_{k=0}^{\\infty} (b_k - a_k) \\text{ converges with sum } \\le \\varepsilon .$$ - $A$ has **content zero** when for every real $\\varepsilon > 0$ there are $n \\in \\mathbb{N}$ and reals $a_0 \\le b_0, \\dots, a_n \\le b_n$ with $$A \\subseteq \\bigcup_{j \\le n} [a_j, b_j] \\qquad \\text{and} \\qquad \\sum_{j=0}^{n} (b_j - a_j) \\le \\varepsilon .$$",
      "uses": [
        "1.1",
        "4.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "interval",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-countable-iff-surjection-from-n",
      "source_section": "Statement",
      "quote": "Let $A$ be a nonempty set. Then $A$ is at most countable ([[def-countable]]) if and only if there is a surjection $s : \\mathbb{N} \\to A$ ([[def-injection-surjection-bijection]]).",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-countable",
      "source_section": "Definition",
      "quote": "countable",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-integer-power",
      "source_section": "Definition",
      "quote": "**Integer exponents.** Every integer $m$ ([[def-integers]]) is either",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-geometric-series",
      "source_section": "Statement",
      "quote": "Let $r \\in \\mathbb{R}$ and let $r^k$ be the integer power ([[def-integer-power]]), so that $r^0 = 1$ for every $r$, including $r = 0$. 1. If $|r| < 1$ then the series $\\sum r^k$ converges ([[def-series]]) and $$\\sum_{k=0}^{\\infty} r^{k} \\;=\\; \\frac{1}{1-r} .$$ 2. If $|r| \\ge 1$ then $\\sum r^k$ diverges. The series starts at $k = 0$ and its first term is $r^0 = 1$; in particular $\\sum_{k=0}^{\\infty} 2^{-k} = 2$, while the series starting at $k = 1$ sums to $1$. Which starting index is meant has to be said, and it is said here.",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-series",
      "source_section": "Definition",
      "quote": "**Partial sums.** Let $(a_k)$ be a sequence of reals. Its **sequence of partial",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-nonnegative-series-bounded-partial-sums",
      "source_section": "Statement",
      "quote": "Let $(a_k)$ be a sequence of reals with $a_k \\ge 0$ for every $k \\in \\mathbb{N}$, let $s_n = \\sum_{k<n} a_k$ be its partial sums and let $S = \\{\\, s_n : n \\in \\mathbb{N} \\,\\}$ be the range of $(s_n)$ ([[def-series]]). Then: 1. $(s_n)$ is nondecreasing ([[def-monotone-sequence]]) and $s_n \\ge 0$ for every $n$; 2. $\\sum a_k$ converges **if and only if** $S$ is bounded above ([[def-bounded-set]]), and in that case $$\\sum_{k=0}^{\\infty} a_k \\;=\\; \\sup S ,$$ so in particular $s_n \\le \\sum_{k=0}^{\\infty} a_k$ for every $n$; 3. if $S$ is not bounded above then $s_n \\to +\\infty$ ([[def-divergence-to-infinity]]) and $\\sum a_k$ diverges. This is the theorem that makes the nonnegative theory work: for terms of one sign, convergence is a boundedness question and no candidate limit is ever needed. Every comparison test on this page is an application of it.",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-finite-sum",
      "source_section": "Definition",
      "quote": "$a(k)$. **Finite sums and finite products of $a$ are defined by recursion on the",
      "uses": [
        "1.1",
        "3.1"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-finite-sum-laws",
      "source_section": "Statement",
      "quote": "$\\lambda \\in \\mathbb{R}$, and let $m, n \\in \\mathbb{N}$, with finite sums and",
      "uses": [
        "1.1",
        "3.1"
      ]
    },
    {
      "fact": "L6",
      "source": "cor-of-one-positive",
      "source_section": "Statement",
      "quote": "In any ordered field $F$ with positive cone $P$, the multiplicative identity satisfies $0 < 1$;",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-of-add-order",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and let $a, b, c, d \\in F$. 1. **Translation invariance.** If $a < b$ then $a + c < b + c$. 2. **Adding inequalities.** If $a < b$ and $c < d$ then $a + c < b + d$.",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-of-sign-rules",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and let $a, b, c \\in F$. 1. If $a > 0$ and $b > 0$ then $ab > 0$. 2. If $a > 0$ and $b < 0$ then $ab < 0$. 3. If $a < 0$ and $b < 0$ then $ab > 0$. 4. If $c > 0$ then $a < b \\iff ac < bc$. 5. If $c < 0$ then $a < b \\iff bc < ac$ (multiplication by a negative reverses order).",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "ordered field",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-complete-ordered-field",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and $S \\subseteq F$.",
      "uses": [
        "2.1",
        "3.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "Let the real $\\varepsilon > 0$ be given. If $A = \\varnothing$, the constant sequences $a_k := 0$ and $b_k := 0$ satisfy $A \\subseteq \\bigcup_k [0,0]$ vacuously and $\\sum_{k<n}(b_k - a_k) = 0 \\le \\varepsilon$ for every $n$ by [L5], so the condition of [L1] hold",
      "step": "1.1",
      "inputs": [
        "L5",
        "L1",
        "L3",
        "L2"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "Put $\\delta_k := \\varepsilon \\cdot 4^{-1} \\cdot \\theta^{k}$, a positive real by [L4] and [L6], and $a_k := s(k) - \\delta_k$, $b_k := s(k) + \\delta_k$; then $a_k \\le b_k$ and $s(k) \\in [a_k,b_k]$ by [L6], so $A = \\{\\, s(k) : k \\in \\mathbb{N} \\,\\} \\subseteq \\big",
      "step": "2.1",
      "inputs": [
        "L4",
        "L6",
        "1.1",
        "L2"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "For every $n \\in \\mathbb{N}$, $\\sum_{k<n}(b_k - a_k) = \\varepsilon \\cdot 2^{-1} \\sum_{k<n}\\theta^{k} \\le \\varepsilon \\cdot 2^{-1} \\cdot 2 = \\varepsilon$, using scaling from [L5] and the bound on the partial sums of the geometric series from [L4].",
      "step": "3.1",
      "inputs": [
        "L5",
        "L4",
        "2.1",
        "L6"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "So for every real $\\varepsilon > 0$ the sequences of step 2.1 cover $A$ with all partial total lengths at most $\\varepsilon$, which by [L1] is exactly the statement that $A$ has measure zero; the empty case was settled in step 1.1.",
      "step": "4.1",
      "inputs": [
        "2.1",
        "L1",
        "1.1",
        "3.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "Step 1.1 handles A=∅ explicitly using the constant degenerate intervals [0,0]."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Step 1.1 uses length 0 in the empty case, and step 3.1 includes the n=0 empty partial sum."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "For a singleton A, the nonempty branch of step 1.1 admits a constant surjection and steps 2.1–3.1 give the same geometric cover."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Step 1.1 explicitly permits [0,0], and step 2.1 permits equality a_k=b_k whenever it occurs."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Step 2.1 places every enumerated point inside its closed interval, including equality at an endpoint."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 1.1 fixes the single surjection supplied by the definition of a nonempty at-most-countable set; it does not invoke countable choice."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The Statement says only that at-most-countable implies null; it is not a biconditional."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The Statement does not assert that every null set is countable."
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
    "source": "lem-countable-sets-are-null",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-measure-zero-and-content-zero",
    "declared_target": "def-measure-zero-and-content-zero",
    "target_statement_provenance": "ai-altered",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-countable-sets-are-null",
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
    "source": "lem-countable-sets-are-null",
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
    "source": "lem-countable-sets-are-null",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "lem-countable-sets-are-null",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "lem-countable-sets-are-null",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "lem-countable-sets-are-null",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-integer-power",
    "declared_target": "def-integer-power",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-countable-sets-are-null",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-finite-sum",
    "declared_target": "def-finite-sum",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-countable-sets-are-null",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "lem-finite-sum-laws",
    "declared_target": "lem-finite-sum-laws",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-countable-sets-are-null",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-nonnegative-series-bounded-partial-sums",
    "declared_target": "thm-nonnegative-series-bounded-partial-sums",
    "target_statement_provenance": "literature-derived",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-countable-sets-are-null",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "lem-countable-sets-are-null",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-ordered-field",
    "declared_target": "def-ordered-field",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-countable-sets-are-null",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "cor-of-one-positive",
    "declared_target": "cor-of-one-positive",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-countable-sets-are-null",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "lem-of-add-order",
    "declared_target": "lem-of-add-order",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-countable-sets-are-null",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "lem-of-sign-rules",
    "declared_target": "lem-of-sign-rules",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-countable-sets-are-null",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "cex-dense-set-of-measure-zero",
    "declared_target": "cex-dense-set-of-measure-zero",
    "target_statement_provenance": "literature-derived",
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

## Full text of every cited or declared item (18)

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

### `cor-of-one-positive`

````markdown
---
id: cor-of-one-positive
kind: corollary
title: "The multiplicative identity is positive"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-of-square-positive, def-field]
aliases: []
landmark: false
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
    - title: "Elias Zakon, Mathematical Analysis: Axioms and Basic Definitions"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/02%3A_Real_Numbers_and_Fields/2.01%3A_Axioms_and_Basic_Definitions"
pipeline_run: null
proof_strategy: direct
---

## Statement

In any ordered field $F$ with positive cone $P$, the multiplicative identity
satisfies $0 < 1$; that is, $1 \in P$.

## Facts & Assumptions

**Given:** An ordered field $F$ with positive cone $P$ and multiplicative identity $1$ ([[def-field]]).

[L1] In any field $1 \neq 0$ ([[def-field]]).

[L2] For every $x \neq 0$ the square satisfies $x^2 > 0$ ([[lem-of-square-positive]]).

[L3] The identity axiom gives $1 = 1 \cdot 1 = 1^2$ ([[def-field]]).

## Proof

**Proof technique:** direct.

1.1 By the field axioms $1 \neq 0$, and $1 = 1 \cdot 1 = 1^2$. [L1, L3]

2.1 Since $1 \neq 0$, applying the square lemma with $x = 1$ gives $1^2 > 0$. [step 1.1, L2]

3.1 Because $1 = 1^2$, it follows that $1 > 0$, i.e. $0 < 1$. [step 2.1, step 1.1, L3] ∎
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

### `def-finite-sum`

````markdown
---
id: def-finite-sum
kind: definition
title: "Finite sums and finite products, by recursion"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-recursion, thm-induction-principle, def-ordered-field, def-natural-numbers, def-nat-addition, def-field, def-complete-ordered-field, lem-of-naturals-positive, lem-of-q-embeds]
justified_by: []
aliases: [def-finite-product]
landmark: false
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
    - title: "J. Aspnes, Summation Notation"
      url: "https://www.cs.yale.edu/homes/aspnes/pinewiki/SummationNotation.html"
    - title: "M. Fochler, Recursive sums, products, and powers"
      url: "https://people.math.binghamton.edu/mfochler/bu-mfx/bu-math-arv/math-330-arv/math-330-2019-08/html/lec-notes/bu-ln-330-m330-solns-2019-12-03.pdf"
    - title: "Empty sum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Empty_sum"
    - title: "T. Tao, Analysis I, 3rd ed., §7.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Throughout this page $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]), in particular an ordered field
([[def-ordered-field]]) and a field ([[def-field]]), and $\mathbb{N}$ is the set
of natural numbers ([[def-natural-numbers]]) with successor $\sigma(n) = n + 1$
([[def-nat-addition]]).

Let $a : \mathbb{N} \to \mathbb{R}$ be a sequence of reals, written $a_k$ for
$a(k)$. **Finite sums and finite products of $a$ are defined by recursion on the
upper index**, which is legitimate because of the recursion theorem
([[thm-recursion]]). That theorem produces a function of one variable, so the
running index has to be carried along inside the value: applying it to the set
$A = \mathbb{N} \times \mathbb{R}$, the starting element $(0, 0)$ and the function
$f(n, s) = (\sigma(n),\, s + a_n)$ gives a unique
$g : \mathbb{N} \to \mathbb{N} \times \mathbb{R}$ with

$$g(0) = (0, 0), \qquad g(\sigma(n)) = f(g(n)) \quad (n \in \mathbb{N}).$$

Write $g(n) = \big(\pi_1(g(n)),\, \Sigma_n\big)$ for its two coordinates.

**The first coordinate is the index itself, and that is a small induction, not an
observation** ([[thm-induction-principle]]). Indeed $\pi_1(g(0)) = 0$; and if
$\pi_1(g(n)) = n$, then
$g(\sigma(n)) = f\big(\pi_1(g(n)), \Sigma_n\big) = \big(\sigma(\pi_1(g(n))),\, \Sigma_n + a_{\pi_1(g(n))}\big) = \big(\sigma(n),\, \Sigma_n + a_n\big)$,
so $\pi_1(g(\sigma(n))) = \sigma(n)$. By induction $\pi_1(g(n)) = n$ for every
$n \in \mathbb{N}$. Only now may the second coordinate of the two displayed
clauses be read off, and doing so gives

$$\Sigma_0 = 0, \qquad \Sigma_{\sigma(n)} = \Sigma_n + a_n .$$

$\Sigma$ is moreover the **unique** function $\mathbb{N} \to \mathbb{R}$ with those
two properties: if $\Sigma'$ also has them then $n \mapsto (n, \Sigma'_n)$ satisfies
the two clauses defining $g$, hence equals $g$ by the uniqueness clause of
[[thm-recursion]], so $\Sigma' = \Sigma$.

We write $\sum_{k < n} a_k := \Sigma_n$. The same construction with starting
element $(0, 1)$ and $f(n, p) = (\sigma(n),\, p \cdot a_n)$, with the same
induction on the first coordinate and the same uniqueness argument, gives the
unique $\Pi : \mathbb{N} \to \mathbb{R}$ with

$$\Pi_0 = 1, \qquad \Pi_{\sigma(n)} = \Pi_n \cdot a_n ,$$

and we write $\prod_{k < n} a_k := \Pi_n$.

**Notation.** For $m, n \in \mathbb{N}$ we abbreviate

$$\sum_{k=0}^{n} a_k := \sum_{k < n+1} a_k, \qquad \prod_{k=0}^{n} a_k := \prod_{k < n+1} a_k,$$

and, for a general lower index $m$ with $m \le n + 1$, writing $d = n + 1 - m$
for the number of terms,

$$\sum_{k=m}^{n} a_k := \sum_{j < d} a_{m+j}, \qquad \prod_{k=m}^{n} a_k := \prod_{j < d} a_{m+j} .$$

When $m = n + 1$ we have $d = 0$ and the sum is **empty**, with value $0$, while
the empty product has value $1$. In the same spirit $\sum_{k=0}^{-1} a_k$ is
notation for the empty sum $\Sigma_0 = 0$ and $\prod_{k=0}^{-1} a_k$ for the
empty product $\Pi_0 = 1$; the index $-1$ never occurs as an element of
$\mathbb{N}$ and is only a way of writing "no terms".

Only finitely many values of $a$ enter $\sum_{k<n} a_k$, so the notation
$\sum_{k<n} a_k$ and $\prod_{k<n} a_k$ is also used for a list
$a_0, \dots, a_{n-1}$ of reals given without reference to any extension of the
list to all of $\mathbb{N}$: extend the list by $a_k = 0$ (respectively
$a_k = 1$) for $k \ge n$ and apply the definition above.

## Remarks

- **Why recursion and not "$a_0 + a_1 + \cdots + a_{n-1}$".** The dots are not a
  definition: they presuppose that the displayed pattern determines a value for
  every $n$, which is exactly what the recursion theorem
  ([[thm-recursion]]) supplies, and its uniqueness clause is what makes
  $\sum_{k<n} a_k$ a single well-determined real rather than a family of choices.
  Associativity and commutativity of addition are *not* used in the definition;
  they are used in the laws proved from it ([[lem-finite-sum-laws]]).
- **Naturals and rationals inside $\mathbb{R}$ (a convention used on the whole
  page).** A natural number $n$ and a rational number $r$ are not literally
  elements of $\mathbb{R}$: they enter $\mathbb{R}$ through the canonical
  embedding $\iota : \mathbb{Q} \to \mathbb{R}$, which is an injective,
  order-preserving field homomorphism ([[lem-of-q-embeds]]), restricting on
  positive naturals to $n \mapsto n \cdot 1_{\mathbb{R}} = 1_\mathbb{R} + \cdots + 1_\mathbb{R}$
  ([[lem-of-naturals-positive]]). Following ordinary practice, and only where no
  confusion is possible, we write $n$ for $\iota(n)$ and $r$ for $\iota(r)$; so,
  for instance, $\frac{1}{n}\sum_{k<n} a_k$ means
  $\iota(n)^{-1} \cdot \sum_{k<n} a_k$, which makes sense because
  $\iota(n) > 0$ for $n \ge 1$. Exponents are the one place where the
  identification is deliberately NOT made: in $a^n$ and $a^r$ the exponent stays
  a natural, an integer or a rational ([[def-integer-power]],
  [[def-rational-power]]), never a real.
- The two indexings are related by $\sum_{k=0}^{n} a_k = \sum_{k < n+1} a_k$, so
  a statement proved for one is available for the other. Sums over $k < n$ are
  the primitive form here because $\Sigma_0$, the empty sum, is then the base
  case of every induction, and no index outside $\mathbb{N}$ is ever needed.
````

### `def-integer-power`

````markdown
---
id: def-integer-power
kind: definition
title: "Integer powers $a^m$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-recursion, def-ordered-field, def-integers, def-field, def-int-operations, lem-nat-embeds-int, lem-of-inverse-unique, lem-of-no-zero-divisors, lem-of-zero-mult, thm-int-ordered-ring]
justified_by: [lem-power-laws]
aliases: [def-power]
landmark: false
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
    - title: "J. Aspnes, Summation Notation"
      url: "https://www.cs.yale.edu/homes/aspnes/pinewiki/SummationNotation.html"
    - title: "M. Fochler, Recursive sums, products, and powers"
      url: "https://people.math.binghamton.edu/mfochler/bu-mfx/bu-math-arv/math-330-arv/math-330-2019-08/html/lec-notes/bu-ln-330-m330-solns-2019-12-03.pdf"
    - title: "Exponentiation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Exponentiation"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §4.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Definition

Let $a \in \mathbb{R}$, where $\mathbb{R}$ is the ambient ordered field
([[def-ordered-field]], [[def-field]]).

**Natural exponents.** By the recursion theorem ([[thm-recursion]]) applied to
the set $\mathbb{R}$, the starting element $1$ and the function
$f(x) = x \cdot a$, there is a unique function $\mathbb{N} \to \mathbb{R}$,
written $n \mapsto a^n$, with

$$a^0 = 1, \qquad a^{n+1} = a^n \cdot a \quad (n \in \mathbb{N}).$$

Thus $a^1 = a$, $a^2 = a \cdot a$, and so on. Note that this is defined for
**every** $a$, including $a = 0$.

**Negative exponents.** If $a \ne 0$ and $n \in \mathbb{N}$ with $n \ge 1$, set

$$a^{-n} := (a^n)^{-1}.$$

**Why that is legitimate.** The right-hand side presupposes that $a^n$ is
invertible, that is, that $a^n \ne 0$. This is a proof obligation and not an
observation, and it is discharged by claim 2 of [[lem-power-laws]]: for $a \ne 0$
in a field, $a^n \ne 0$ for every $n \in \mathbb{N}$, proved there by induction on
$n$ from the fact that a field has no zero divisors ([[lem-of-no-zero-divisors]]).
That lemma is a statement *about* the operation introduced here, so it depends on
this definition and is recorded in this item's `justified_by` rather than in its
`deps` (SCHEMA §3). Given $a^n \ne 0$, the value $(a^n)^{-1}$ is a single
well-determined element, because multiplicative inverses in a field are unique
([[lem-of-inverse-unique]]).

**Integer exponents.** Every integer $m$ ([[def-integers]]) is either
$\iota(n)$ or $-\iota(n)$ for a unique natural $n$, where $\iota$ is the
embedding $\mathbb{N} \to \mathbb{Z}$ ([[lem-nat-embeds-int]],
[[def-int-operations]]). This too is a citation and not a slogan: the order on
$\mathbb{Z}$ is total ([[thm-int-ordered-ring]]), so $m \ge 0$ or $m < 0$; the
image of $\iota$ is exactly the set of nonnegative integers, and each of them is
$\iota(n)$ for a unique natural $n$ ([[lem-nat-embeds-int]]); and if $m < 0$ then
$-m > 0$, by compatibility of the order with addition ([[thm-int-ordered-ring]]),
so $-m = \iota(n)$ and $m = -\iota(n)$, with $n$ unique because $\iota$ is
injective. The two clauses above therefore define $a^m$ for every
$m \in \mathbb{Z}$ whenever $a \ne 0$, and for every $m \in \mathbb{N}$ for
arbitrary $a$. The clauses are consistent where they overlap: the only overlap is
$m = 0$, where $-\iota(0) = \iota(0)$ and $(a^0)^{-1} = 1^{-1} = 1 = a^0$.

## Remarks

- **The convention $0^0 = 1$ is adopted here**, and it is not a matter of taste
  but of agreement with the recursion above: $a^0 = 1$ is the starting value for
  every $a$, exactly as the empty product is $1$ ([[def-finite-sum]]). This is
  the convention that makes the empty product, the binomial theorem, and
  polynomial notation $\sum_k c_k x^k$ work at $x = 0$ without an exception. The
  competing convention "$0^0$ undefined" belongs to contexts where $x^y$ is
  studied as a function of two *real* variables and one wants continuity, which
  is unavailable and irrelevant here: the exponent in $a^m$ is an integer, never
  a real.
- $0^n = 0$ for every $n \ge 1$, since $0^{n} = 0^{n-1} \cdot 0 = 0$, a product
  with a zero factor ([[lem-of-zero-mult]]); and
  $0^{-n}$ is not defined for $n \ge 1$, since $0$ has no inverse.
- The exponent is an integer and stays an integer. Rational exponents are a
  separate construction resting on the existence of roots
  ([[thm-nth-roots-exist]], [[def-rational-power]]), and real exponents do not
  exist in this library yet ([[rem-real-exponents-deferred]]).
- The laws $a^{m+n} = a^m a^n$, $(a^m)^n = a^{mn}$ and $(ab)^n = a^n b^n$ are
  proved, not assumed, in [[lem-power-laws]]; the order behaviour of $a \mapsto a^n$
  is [[lem-power-monotone]].
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

### `def-ordered-field`

````markdown
---
id: def-ordered-field
kind: definition
title: "Ordered field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-field]
aliases: []
landmark: true
short: "ordered field"
verification:
  precheck: n/a
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "University of Illinois Chicago notes: Ordered field axioms"
      url: "https://homepages.math.uic.edu/~jbaldwin/math215/fieldax.pdf"
pipeline_run: null
---

## Definition

An **ordered field** is a field $F$ ([[def-field]]) together with a subset
$P \subseteq F$, the set of **positive** elements (the *positive cone*),
satisfying:

- **(O1) Trichotomy.** For each $x \in F$, exactly one of the following holds:
  $x \in P$, or $x = 0$, or $-x \in P$.
- **(O2) Closure.** If $x, y \in P$ then $x + y \in P$ and $x \cdot y \in P$.

We write $x > 0$ for $x \in P$ (read "$x$ is positive"), and define the order by

$$a < b \;:\Longleftrightarrow\; b - a \in P, \qquad a \le b \;:\Longleftrightarrow\; a < b \text{ or } a = b.$$

Thus $a > b$ means $b < a$, and $a \ge b$ means $b \le a$. An element $x$ with
$-x \in P$ (equivalently $x < 0$) is called **negative**.

## Remarks

- By trichotomy applied to $b - a$, for any $a, b$ exactly one of $a < b$,
  $a = b$, $a > b$ holds; this makes $\le$ a total order.
- (O2) says the positives are closed under addition and multiplication: sums and
  products of positives are positive.
- The rationals ([[thm-rat-ordered-field]]) and both constructions of the reals
  ([[thm-reals-ordered-field]], [[thm-reals-dedekind-ordered-field]]) are ordered
  fields, so every fact proved here from (O1)-(O2) holds in each of them.
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

### `lem-finite-sum-laws`

````markdown
---
id: lem-finite-sum-laws
kind: lemma
title: "Laws of finite sums and finite products"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-finite-sum, thm-induction-principle, def-ordered-field, def-field, lem-of-add-order, lem-of-sign-rules, lem-of-zero-mult, cor-of-one-positive, lem-of-q-embeds, lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
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
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "J. Aspnes, Summation Notation"
      url: "https://www.cs.yale.edu/homes/aspnes/pinewiki/SummationNotation.html"
    - title: "M. Fochler, Recursive sums, products, and powers"
      url: "https://people.math.binghamton.edu/mfochler/bu-mfx/bu-math-arv/math-330-arv/math-330-2019-08/html/lec-notes/bu-ln-330-m330-solns-2019-12-03.pdf"
    - title: "T. Tao, Analysis I, 3rd ed., §7.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Telescoping series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Telescoping_series"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $a, b, c : \mathbb{N} \to \mathbb{R}$ be sequences of reals, let
$\lambda \in \mathbb{R}$, and let $m, n \in \mathbb{N}$, with finite sums and
finite products as in [[def-finite-sum]]. Then:

1. **Additivity.** $\displaystyle\sum_{k<n}(a_k + b_k) = \sum_{k<n} a_k + \sum_{k<n} b_k$.
2. **Scaling.** $\displaystyle\sum_{k<n} \lambda a_k = \lambda \sum_{k<n} a_k$; in particular $\displaystyle\sum_{k<n} \lambda = n\lambda$, where $n$ denotes the canonical natural $\iota(n) \in \mathbb{R}$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]).
3. **Splitting.** If $m \le n$ then $\displaystyle\sum_{k<n} a_k = \sum_{k<m} a_k + \sum_{k=m}^{n-1} a_k$, and $\displaystyle\prod_{k<n} a_k = \Big(\prod_{k<m} a_k\Big)\Big(\prod_{k=m}^{n-1} a_k\Big)$.
4. **Monotonicity.** If $a_k \le b_k$ for all $k < n$ then $\displaystyle\sum_{k<n} a_k \le \sum_{k<n} b_k$. In particular, if $a_k \ge 0$ for all $k < n$ then $\sum_{k<n} a_k \ge 0$, every single term satisfies $a_j \le \sum_{k<n} a_k$ for $j < n$, and $\sum_{k<n} a_k = 0$ forces $a_k = 0$ for every $k < n$.
5. **Telescoping.** $\displaystyle\sum_{k<n}\big(c_{k+1} - c_k\big) = c_n - c_0$.
6. **Products.** $\displaystyle\prod_{k<n}(a_k b_k) = \Big(\prod_{k<n} a_k\Big)\Big(\prod_{k<n} b_k\Big)$; if $a_k \ge 0$ for all $k < n$ then $\prod_{k<n} a_k \ge 0$, and if $a_k > 0$ for all $k < n$ then $\prod_{k<n} a_k > 0$.

## Facts & Assumptions

**Given:** Sequences $a, b, c : \mathbb{N} \to \mathbb{R}$, a real $\lambda$, and naturals $m, n$. Write $\Sigma_n = \sum_{k<n} a_k$ and $\Pi_n = \prod_{k<n} a_k$.

[L1] Recursion clauses ([[def-finite-sum]]): $\sum_{k<0} a_k = 0$ and $\sum_{k<n+1} a_k = \sum_{k<n} a_k + a_n$; $\prod_{k<0} a_k = 1$ and $\prod_{k<n+1} a_k = \big(\prod_{k<n} a_k\big) \cdot a_n$; and $\sum_{k=m}^{n-1} a_k = \sum_{j < n-m} a_{m+j}$ for $m \le n$, likewise for products.

[L2] Field axioms: addition and multiplication are associative and commutative, $0$ and $1$ are the identities, $x - x = 0$, and multiplication distributes over addition ([[def-field]], [[def-ordered-field]]); and $0 \cdot x = 0$, which is not an axiom but a lemma ([[lem-of-zero-mult]]).

[L3] Induction principle: a property holding at $0$ and inherited by successors holds at every natural ([[thm-induction-principle]]).

[L4] Adding inequalities: $x \le y$ and $u \le v$ imply $x + u \le y + v$. [[lem-of-add-order]] states the STRICT forms and only those ($x < y \Rightarrow x + c < y + c$, and $x < y$ with $u < v$ giving $x + u < y + v$); the nonstrict form used throughout below is those two together with the cases $x = y$ and $u = v$, which are settled by trichotomy, the order being total and transitive ([[def-ordered-field]]).

[L5] The canonical embedding $\iota : \mathbb{Q} \to \mathbb{R}$ is a field homomorphism, so $\iota(0) = 0$ and $\iota(n+1) = \iota(n) + 1$, and $\iota(n) > 0$ for $n \ge 1$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]).

[L6] Sign rules: a product of two positives is positive ([[lem-of-sign-rules]], claim 1), and a product of two nonnegatives is nonnegative, since a factor equal to $0$ makes the product $0$ ([[lem-of-zero-mult]]) and otherwise both factors are positive; and $1 > 0$, which is proved in [[cor-of-one-positive]] and stated by none of the items named above.

## Proof

**Proof technique:** induction.

1.1 Base case $n = 0$: every claim holds at $n = 0$, since both sides of claim 1 are $0 = 0 + 0$, both sides of claim 2 are $0 = \lambda \cdot 0$ and $0 = \iota(0)\lambda$, claim 4 reads $0 \le 0$ with no term to bound and the hypothesis $\sum_{k<0} a_k = 0$ giving nothing to prove, claim 5 reads $0 = c_0 - c_0$, and claim 6 reads $1 = 1 \cdot 1$ with $1 > 0$. [base, L1, L2, L5, L6]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume claims 1, 2, 4, 5 and 6 hold for this $n$ and for all sequences $a, b, c$ and all $\lambda$. [ih]

1.3 Splitting, claim 3, by a separate induction on the number of trailing terms $d = n - m$ with $m$ fixed: for $d = 0$ the claim reads $\sum_{k<m} a_k = \sum_{k<m} a_k + 0$ and $\prod_{k<m} a_k = \big(\prod_{k<m} a_k\big) \cdot 1$, which hold; and if $\sum_{k<m+d} a_k = \sum_{k<m} a_k + \sum_{j<d} a_{m+j}$, then $\sum_{k<m+d+1} a_k = \sum_{k<m+d} a_k + a_{m+d} = \sum_{k<m} a_k + \big(\sum_{j<d} a_{m+j} + a_{m+d}\big) = \sum_{k<m} a_k + \sum_{j<d+1} a_{m+j}$ by associativity, and identically for products with $1$ in place of $0$ and multiplication in place of addition, so induction on $d$ gives claim 3 for every $m \le n$. [L1, L2, L3]

2.1 Additivity at $n+1$: $\sum_{k<n+1}(a_k + b_k) = \sum_{k<n}(a_k + b_k) + (a_n + b_n) = \big(\sum_{k<n} a_k + \sum_{k<n} b_k\big) + (a_n + b_n) = \big(\sum_{k<n} a_k + a_n\big) + \big(\sum_{k<n} b_k + b_n\big) = \sum_{k<n+1} a_k + \sum_{k<n+1} b_k$, using the recursion clause, the hypothesis, and commutativity with associativity of addition. [step 1.2, L1, L2]

2.2 Scaling at $n+1$: $\sum_{k<n+1} \lambda a_k = \sum_{k<n} \lambda a_k + \lambda a_n = \lambda \sum_{k<n} a_k + \lambda a_n = \lambda\big(\sum_{k<n} a_k + a_n\big) = \lambda \sum_{k<n+1} a_k$ by the recursion clause, the hypothesis and distributivity; taking $a_k = 1$ for all $k$ gives $\sum_{k<n+1} \lambda = \sum_{k<n} \lambda + \lambda = \iota(n)\lambda + \lambda = (\iota(n) + 1)\lambda = \iota(n+1)\lambda$. [step 1.2, L1, L2, L5]

2.3 Monotonicity at $n+1$: assume $a_k \le b_k$ for all $k < n+1$; then $a_k \le b_k$ for all $k < n$, so the hypothesis gives $\sum_{k<n} a_k \le \sum_{k<n} b_k$, and adding the inequality $a_n \le b_n$ gives $\sum_{k<n+1} a_k = \sum_{k<n} a_k + a_n \le \sum_{k<n} b_k + b_n = \sum_{k<n+1} b_k$. [step 1.2, L1, L4]

2.4 Telescoping at $n+1$: $\sum_{k<n+1}(c_{k+1} - c_k) = \sum_{k<n}(c_{k+1} - c_k) + (c_{n+1} - c_n) = (c_n - c_0) + (c_{n+1} - c_n) = c_{n+1} - c_0$, by the recursion clause, the hypothesis and the field identities. [step 1.2, L1, L2]

2.5 Products at $n+1$: $\prod_{k<n+1}(a_k b_k) = \big(\prod_{k<n}(a_k b_k)\big)(a_n b_n) = \big(\prod_{k<n} a_k\big)\big(\prod_{k<n} b_k\big)(a_n b_n) = \big(\prod_{k<n+1} a_k\big)\big(\prod_{k<n+1} b_k\big)$ by the recursion clause, the hypothesis, and commutativity with associativity of multiplication; and if every $a_k \ge 0$ for $k < n+1$ then $\prod_{k<n+1} a_k = \big(\prod_{k<n} a_k\big) a_n$ is a product of two nonnegatives, hence nonnegative, with the same argument giving positivity from positivity since $\prod_{k<0} a_k = 1 > 0$. [step 1.2, L1, L2, L6]

3.1 Consequences of monotonicity, completing claim 4: monotonicity itself holds at every $n$, by the induction principle applied to the base case of step 1.1 and the successor step 2.3, so it is available for an arbitrary $n$ in what follows; if $a_k \ge 0$ for all $k < n$ then comparing with the zero sequence gives $\sum_{k<n} a_k \ge \sum_{k<n} 0 = 0$; for $j < n$ splitting at $j$ and then at $j+1$ writes $\sum_{k<n} a_k = \sum_{k<j} a_k + a_j + \sum_{k=j+1}^{n-1} a_k$ with the first and third summands $\ge 0$, so $a_j \le \sum_{k<n} a_k$; and if moreover $\sum_{k<n} a_k = 0$ then $0 \le a_j \le 0$ for every $j < n$, so $a_j = 0$. [step 1.1, step 2.3, step 1.3, L3, L4, L2]

4.1 By the induction principle claims 1, 2, 4, 5 and 6 hold for every $n \in \mathbb{N}$, and claim 3 was proved in step 1.3 with its consequences in step 3.1, so all six laws hold. [step 1.1, step 2.1, step 2.2, step 2.3, step 2.4, step 2.5, step 1.3, step 3.1, L3, discharge-induction] ∎
````

### `lem-of-add-order`

````markdown
---
id: lem-of-add-order
kind: lemma
title: "Order is preserved by adding a constant and by adding inequalities"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-ordered-field]
aliases: []
landmark: false
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
    - title: "University of Illinois Chicago notes: Ordered field axioms"
      url: "https://homepages.math.uic.edu/~jbaldwin/math215/fieldax.pdf"
pipeline_run: null
proof_strategy: direct
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and
let $a, b, c, d \in F$.

1. **Translation invariance.** If $a < b$ then $a + c < b + c$.
2. **Adding inequalities.** If $a < b$ and $c < d$ then $a + c < b + d$.

## Facts & Assumptions

**Given:** An ordered field $F$ with positive cone $P$, and elements $a, b, c, d \in F$.

[L1] For $x, y \in F$, the relation $x < y$ means $y - x \in P$ ([[def-ordered-field]]).

[L2] $P$ is closed under addition: if $u, v \in P$ then $u + v \in P$ (axiom O2 of [[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Assume $a < b$; by the definition of the order this means $b - a \in P$. [assume-hyp, L1]

1.2 For every $c \in F$ the field identities give $(b + c) - (a + c) = b - a$. [algebra]

1.3 Assume moreover $c < d$; by the definition of the order this means $d - c \in P$. [assume-hyp, L1]

1.4 The field identities give $(b + d) - (a + c) = (b - a) + (d - c)$. [algebra]

2.1 Hence $(b + c) - (a + c) = b - a \in P$, which is exactly $a + c < b + c$, proving claim 1. [step 1.1, step 1.2, L1]

2.2 Since $b - a \in P$ and $d - c \in P$, closure under addition gives $(b - a) + (d - c) \in P$. [step 1.1, step 1.3, L2]

3.1 Therefore $(b + d) - (a + c) = (b - a) + (d - c) \in P$, which is exactly $a + c < b + d$, proving claim 2. [step 1.4, step 2.2, L1] ∎
````

### `lem-of-sign-rules`

````markdown
---
id: lem-of-sign-rules
kind: lemma
title: "Sign rules for products and monotonicity of multiplication"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-ordered-field, lem-of-mult-neg, lem-of-zero-mult]
aliases: []
landmark: false
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
    - title: "University of Illinois Chicago notes: Ordered field axioms"
      url: "https://homepages.math.uic.edu/~jbaldwin/math215/fieldax.pdf"
pipeline_run: null
proof_strategy: direct
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and
let $a, b, c \in F$.

1. If $a > 0$ and $b > 0$ then $ab > 0$.
2. If $a > 0$ and $b < 0$ then $ab < 0$.
3. If $a < 0$ and $b < 0$ then $ab > 0$.
4. If $c > 0$ then $a < b \iff ac < bc$.
5. If $c < 0$ then $a < b \iff bc < ac$ (multiplication by a negative reverses order).

## Facts & Assumptions

**Given:** An ordered field $F$ with positive cone $P$, and elements $a, b, c \in F$.

[L1] For $x, y \in F$: $x < y \iff y - x \in P$; $x > 0 \iff x \in P$; $x < 0 \iff -x \in P$; and (trichotomy) for each $x$ exactly one of $x \in P$, $x = 0$, $-x \in P$ holds, so $0 \notin P$ and $x \in P \Rightarrow x \neq 0$ ([[def-ordered-field]]).

[L2] $P$ is closed under multiplication: if $u, v \in P$ then $uv \in P$ (axiom O2 of [[def-ordered-field]]).

[L3] In any field, $(-u)v = -(uv)$ and $(-u)(-v) = uv$ ([[lem-of-mult-neg]]).

[L4] In any field, $0 \cdot u = 0$ ([[lem-of-zero-mult]]).

## Proof

**Proof technique:** direct.

1.1 Assume $a > 0$ and $b > 0$, i.e. $a \in P$ and $b \in P$; closure gives $ab \in P$, so $ab > 0$, proving claim 1. [assume-hyp, L1, L2]

1.2 Assume $a > 0$ and $b < 0$, i.e. $a \in P$ and $-b \in P$; closure gives $a(-b) \in P$. [assume-hyp, L1, L2]

1.3 Assume $a < 0$ and $b < 0$, i.e. $-a \in P$ and $-b \in P$; closure gives $(-a)(-b) \in P$. [assume-hyp, L1, L2]

1.4 Assume $c > 0$ and $a < b$, i.e. $c \in P$ and $b - a \in P$; closure gives $(b - a)c \in P$. [assume-hyp, L1, L2]

1.5 Assume $c < 0$ and $a < b$, i.e. $-c \in P$ and $b - a \in P$; closure gives $(b - a)(-c) \in P$. [assume-hyp, L1, L2]

2.1 Since $a(-b) = -(ab)$ by L3, step 1.2 gives $-(ab) \in P$, so $ab < 0$, proving claim 2. [step 1.2, L3, L1]

2.2 Since $(-a)(-b) = ab$ by L3, step 1.3 gives $ab \in P$, so $ab > 0$, proving claim 3. [step 1.3, L3, L1]

2.3 By distributivity $(b - a)c = bc - ac$, so step 1.4 gives $bc - ac \in P$, i.e. $ac < bc$: this is the forward direction of claim 4. [step 1.4, algebra, L1]

2.4 By L3 and distributivity $(b - a)(-c) = -((b - a)c) = -(bc - ac) = ac - bc$, so step 1.5 gives $ac - bc \in P$, i.e. $bc < ac$: this is the forward direction of claim 5. [step 1.5, L3, algebra, L1]

3.1 Conversely, assume $c > 0$ and $ac < bc$; by trichotomy exactly one of $a < b$, $a = b$, $b < a$ holds. If $a = b$ then $ac = bc$, contradicting $ac < bc$; if $b < a$ then the argument of step 2.3 applied to the pair $b < a$ gives $bc < ac$, so $bc - ac \in P$ (from $ac < bc$) while $ac - bc \in P$ (from $bc < ac$), putting the element $bc - ac$ and its negative $ac - bc$ both in $P$, which trichotomy forbids; hence $a < b$: this completes claim 4. [assume-hyp, step 2.3, L4, L1, algebra]

4.1 Conversely, assume $c < 0$ and $bc < ac$; by trichotomy exactly one of $a < b$, $a = b$, $b < a$ holds. If $a = b$ then $ac = bc$, contradicting $bc < ac$; if $b < a$ then the argument of step 2.4 applied to the pair $b < a$ gives $ac < bc$, so $ac - bc \in P$ (from $bc < ac$) while $bc - ac \in P$ (from $ac < bc$), putting the element $ac - bc$ and its negative $bc - ac$ both in $P$, which trichotomy forbids; hence $a < b$: this completes claim 5. [assume-hyp, step 2.4, L4, L1, algebra] ∎
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

### `thm-nonnegative-series-bounded-partial-sums`

````markdown
---
id: thm-nonnegative-series-bounded-partial-sums
kind: theorem
title: "A series of nonnegative terms converges iff its partial sums are bounded, and then the sum is their supremum"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-series, def-monotone-sequence, thm-monotone-convergence, cor-monotone-converges-iff-bounded, lem-monotone-unbounded-diverges, def-bounded-set, def-finite-sum, lem-finite-sum-laws, def-sequence, def-divergence-to-infinity, def-complete-ordered-field]
justified_by: []
forward_refs: [cex-comparison-needs-nonnegativity]
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
    - title: "Series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Series_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.24)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals with $a_k \ge 0$ for every $k \in \mathbb{N}$,
let $s_n = \sum_{k<n} a_k$ be its partial sums and let
$S = \{\, s_n : n \in \mathbb{N} \,\}$ be the range of $(s_n)$ ([[def-series]]).
Then:

1. $(s_n)$ is nondecreasing ([[def-monotone-sequence]]) and $s_n \ge 0$ for every
   $n$;
2. $\sum a_k$ converges **if and only if** $S$ is bounded above
   ([[def-bounded-set]]), and in that case
   $$\sum_{k=0}^{\infty} a_k \;=\; \sup S ,$$
   so in particular $s_n \le \sum_{k=0}^{\infty} a_k$ for every $n$;
3. if $S$ is not bounded above then $s_n \to +\infty$
   ([[def-divergence-to-infinity]]) and $\sum a_k$ diverges.

This is the theorem that makes the nonnegative theory work: for terms of one
sign, convergence is a boundedness question and no candidate limit is ever
needed. Every comparison test on this page is an application of it.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals with $a_k \ge 0$ for every $k$, its partial sums $s_n = \sum_{k<n} a_k$, and the range $S = \{s_n : n \in \mathbb{N}\}$ ([[def-series]], [[def-finite-sum]], [[def-sequence]]).

[L1] The recursion clause of the finite sum: $s_{n+1} = s_n + a_n$ ([[def-finite-sum]]).

[L2] Consecutive comparisons suffice for monotonicity: $(x_k)$ is nondecreasing if and only if $x_k \le x_{k+1}$ for every $k$; and a nondecreasing sequence is bounded below by its first term ([[def-monotone-sequence]]).

[L3] Monotonicity of finite sums: if $a_k \ge 0$ for all $k < n$ then $\sum_{k<n} a_k \ge 0$ ([[lem-finite-sum-laws]]).

[L4] A monotone sequence converges if and only if it is bounded, that is if and only if there is $M$ with $|x_k| \le M$ for every $k$ ([[cor-monotone-converges-iff-bounded]], [[def-sequence]]).

[L5] A nondecreasing sequence bounded above converges to the supremum of its range, which exists by the least-upper-bound property ([[thm-monotone-convergence]], [[def-complete-ordered-field]], [[def-bounded-set]]).

[L6] A nondecreasing sequence whose range is not bounded above diverges to $+\infty$ ([[lem-monotone-unbounded-diverges]], [[def-divergence-to-infinity]]).

## Proof

**Proof technique:** direct.

1.1 For every $n$, $s_{n+1} - s_n = a_n \ge 0$, so $s_n \le s_{n+1}$ and $(s_n)$ is nondecreasing. [given, L1, L2]

1.2 For every $n$, $s_n = \sum_{k<n} a_k \ge 0$, all terms being nonnegative. [given, L3]

2.1 Claim 1 is steps 1.1 and 1.2 together. [step 1.1, step 1.2]

2.2 Since $s_n \ge 0$ we have $|s_n| = s_n$, so $(s_n)$ is bounded in the sense of [L4] if and only if $S$ is bounded above. [step 1.2, L4]

3.1 By [L4] applied to the monotone sequence $(s_n)$, the series converges if and only if $(s_n)$ is bounded, hence if and only if $S$ is bounded above. [step 1.1, step 2.2, L4]

4.1 If $S$ is bounded above then $(s_n)$ converges to $\sup S$, so $\sum a_k$ converges with sum $\sup S$; and since $\sup S$ is an upper bound of $S$, $s_n \le \sup S$ for every $n$. [step 1.1, step 3.1, L5]

4.2 If $S$ is not bounded above then $s_n \to +\infty$, and by step 3.1 the series diverges. [step 1.1, step 3.1, L6]

5.1 The equivalence and the identification of the sum as the supremum together make claim 2, and the divergence statement is claim 3. [step 3.1, step 4.1, step 4.2] ∎

## Remarks

- **"Bounded" and "bounded above" coincide here, and only here.** The equivalence used in step 2.2 rests on $s_n \ge 0$, which rests on every term being nonnegative. For a series with terms of both signs the partial sums can be bounded above and still fail to converge, so nothing in this theorem survives the loss of the sign hypothesis. That failure is exhibited by [[cex-comparison-needs-nonnegativity]] on the companion page.

- **Claim 3 is a strictly stronger statement than "diverges".** Divergence alone permits oscillation ([[def-series]]); for nonnegative terms it cannot occur, and the partial sums necessarily run to $+\infty$. This is what licenses the phrase "the series diverges to $+\infty$" for nonnegative terms, and it is what the Abel-Dini theorem later on this page uses.

- **This criterion is the monotone convergence property, worn differently.** The proof above is monotone convergence for $\mathbb{R}$ applied to the nondecreasing sequence of partial sums, and nothing is lost going back the other way. Given a nondecreasing sequence $(x_n)$ of reals, put $y_n := x_n - x_0 \ge 0$ and let $a_0 := 0$, $a_{k+1} := y_{k+1} - y_k \ge 0$; then $s_{n+1} = y_n$ ([[def-series]]), the partial sums are bounded exactly when $(x_n)$ is bounded above, and claim 1 returns the convergence of $(y_n)$ and so of $(x_n)$. Testing boundedness of partial sums is therefore not a device special to series. Read in the vocabulary of [[def-completeness-properties]] it is the property (MCT), which in an arbitrary ordered field already forces the Archimedean property on its own ([[lem-mct-implies-archimedean]]) and with it the least-upper-bound property ([[lem-mct-implies-lub]]). The translation just given is carried out in $\mathbb{R}$, since [[def-series]] is stated for sequences of reals and this library defines no series over a general ordered field.
````

