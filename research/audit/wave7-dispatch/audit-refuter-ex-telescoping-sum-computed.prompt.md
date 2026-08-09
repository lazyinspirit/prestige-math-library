# Audit proof-refuter brief — Wave 7, step A6

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

- critical risk (12): 8 declared dependencies; 8 cited facts; biconditional / both-direction claim; boundary-sensitive language; analytic limiting/completeness language

## Target item — `ex-telescoping-sum-computed`

Normalized current SHA-256: `02a4aba9afece793650b53b01485061d0e569661c02f7b52e84e623a53897ae4`

The complete current item follows, including frontmatter:

````markdown
---
id: ex-telescoping-sum-computed
kind: example
title: "$\\sum_{k \\ge 1} 1/(k(k+1)) = 1$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-telescoping-series, def-series, cor-archimedean-reciprocal, lem-of-naturals-positive, lem-of-inverse-positive, def-real-limit, def-finite-sum, ex-harmonic-series-diverges]
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
    - title: "Telescoping series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Telescoping_series"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Example

$$\sum_{k \ge 1} \frac{1}{k(k+1)} \;=\; 1 .$$

The series converges, so the symbol denotes ([[def-series]]), and its sum is
exactly $1$. The reason is the partial fraction identity

$$\frac{1}{k(k+1)} \;=\; \frac{1}{k} - \frac{1}{k+1} ,$$

which makes the series telescoping with $b_k = 1/k$: the partial sums are
$1 - 1/(n+1)$, and $1/(n+1) \to 0$.

Compare $\sum_{k \ge 1} 1/k$, which diverges ([[ex-harmonic-series-diverges]]).
The single extra factor $k+1$ in the denominator is what separates the two.

## Facts & Assumptions

**Given:** The sequence $b_j := 1/\iota(j+1)$ for $j \in \mathbb{N}$, so that $b_j = 1/k$ at $k = j+1$; and the family $d_k := 1/(k(k+1))$ for naturals $k \ge 1$, so that $\sum_{k \ge 1} d_k$ is the series of $j \mapsto d_{j+1}$ ([[def-series]], [[def-finite-sum]], [[lem-of-naturals-positive]]).

[L1] The canonical naturals $\iota(j+1)$ are positive, and reciprocals of positives are positive ([[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

[L2] $\sum (b_j - b_{j+1})$ converges if and only if $(b_j)$ converges, and then its sum is $b_0 - \lim_j b_j$ ([[lem-telescoping-series]]).

[L3] For every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]], [[def-real-limit]]).

## Verification

**Proof technique:** direct.

1.1 For every $j \in \mathbb{N}$: $b_j - b_{j+1} = \dfrac{1}{\iota(j+1)} - \dfrac{1}{\iota(j+2)} = \dfrac{\iota(j+2) - \iota(j+1)}{\iota(j+1)\iota(j+2)} = \dfrac{1}{\iota(j+1)\,\iota(j+2)}$. [given, L1, algebra]

1.2 The sequence $(b_j)$ converges to $0$: given a rational $\varepsilon > 0$, choose $n \ge 1$ with $1/n < \varepsilon$; then for every $j$ with $j+1 \ge n$ we have $0 < b_j \le 1/n < \varepsilon$. [given, L1, L3, choose]

2.1 The term of $\sum_{k \ge 1} d_k$ at index $j$ is $d_{j+1} = \dfrac{1}{\iota(j+1)\,\iota(j+2)}$, so it equals $b_j - b_{j+1}$; the two series are the same series. [step 1.1, given]

2.2 By the telescoping lemma, $\sum_j (b_j - b_{j+1})$ converges with sum $b_0 - 0 = 1/\iota(1) = 1$. [step 1.2, L2, L1]

3.1 Therefore $\sum_{k \ge 1} 1/(k(k+1))$ converges with sum $1$. [step 2.1, step 2.2] ∎

## Remarks

- **The value $1$ comes from the first term of $(b_j)$, not from the first term of the series.** The telescoping lemma gives $b_0 - \lim_j b_j$, and here $b_0 = 1/1 = 1$ while the first term of the series is $d_1 = 1/2$. Reading the sum off the wrong one of those two numbers is the standard error, and it is why the lemma states the value in terms of $b_0$ explicitly.

- **Every telescoping identity is an identity between finite sums.** Nothing about limits enters step 1.1; the only limit in the argument is $1/(n+1) \to 0$, which is the Archimedean property. That is the general shape of every telescoping computation on this page.
````

## Wave 7 provenance row for the target

```json
{
  "id": "ex-telescoping-sum-computed",
  "statement": "literature-derived",
  "proof": "ai-altered",
  "evidence": "exact-source",
  "urls": [
    "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
  ],
  "rationale": "Hunter Example 4.5 gives exactly sum_{k>=1}1/(k(k+1))=1 through the identity 1/(k(k+1))=1/k-1/(k+1). The item's verification is the same telescoping calculation with local dependency citations.",
  "alpha_concurred": false,
  "at": "2026-08-08",
  "ledger": "wave7-real-analysis-series.provenance.jsonl"
}
```

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "lem-of-naturals-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field, with field structure as in [[def-field]], and for\n$n \\ge 1$ let $n \\cdot 1_F$ denote the canonical natural number\n$\\underbrace{1_F + \\cdots + 1_F}_{n}$, defined recursively by $1 \\cdot 1_F = 1_F$\nand $(n+1) \\cdot 1_F = n \\cdot 1_F + 1_F$. Then for every $n \\ge 1$:\n\n- $n \\cdot 1_F > 0$ and $(n+1) \\cdot 1_F > n \\cdot 1_F$;\n- the map $n \\mapsto n \\cdot 1_F$ is strictly increasing, hence injective, on $\\{1, 2, 3, \\dots\\}$;\n- $(m+n) \\cdot 1_F = m \\cdot 1_F + n \\cdot 1_F$ and $(mn) \\cdot 1_F = (m \\cdot 1_F)(n \\cdot 1_F)$ for all $m, n \\ge 1$.",
      "uses": [
        "1.1",
        "1.2",
        "2.2"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-of-inverse-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b \\in F$.\n\n1. If $a > 0$ then $a^{-1} > 0$.\n2. If $0 < a < b$ then $0 < b^{-1} < a^{-1}$.",
      "uses": [
        "1.1",
        "1.2",
        "2.2"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-telescoping-series",
      "source_section": "Statement",
      "quote": "Let $(b_k)$ be a sequence of reals and put $a_k := b_k - b_{k+1}$. Then the\npartial sums of $\\sum a_k$ are\n\n$$s_n \\;=\\; \\sum_{k<n} (b_k - b_{k+1}) \\;=\\; b_0 - b_n \\qquad (n \\in \\mathbb{N}),$$\n\nand consequently $\\sum a_k$ converges ([[def-series]]) **if and only if** $(b_k)$\nconverges ([[def-real-limit]]), in which case\n\n$$\\sum_{k=0}^{\\infty} (b_k - b_{k+1}) \\;=\\; b_0 - \\lim_{k} b_k .$$\n\nFor a family from a general starting index $m$ the same statement holds with $b_0$\nreplaced by $b_m$, being this statement applied to the shifted sequence\n$j \\mapsto b_{j+m}$ ([[def-series]]).",
      "uses": [
        "2.2"
      ]
    },
    {
      "fact": "L3",
      "source": "cor-archimedean-reciprocal",
      "source_section": "Statement",
      "quote": "Let $F$ be a complete ordered field ([[def-complete-ordered-field]]) and let\n$\\varepsilon \\in F$ with $\\varepsilon > 0$. Then there is a natural number\n$n \\ge 1$ such that\n\n$$\\frac{1}{n \\cdot 1_F} < \\varepsilon ,$$\n\nwhere $n \\cdot 1_F$ is the canonical natural of $F$ ([[thm-of-archimedean]]) and\n$1/(n \\cdot 1_F)$ is its multiplicative inverse ([[def-field]]). As is standard\nwe abbreviate $n \\cdot 1_F$ to $n$ and write the conclusion $1/n < \\varepsilon$.\n\nThis is the **reciprocal form** of the Archimedean property.\n[[thm-of-archimedean]] on its own delivers only the assertion that the canonical\nnaturals are cofinal, $x < n \\cdot 1_F$; the form actually used in analysis, that\nthe reciprocals of the naturals get below every positive bound, is the statement\nabove, and it is recorded separately so that no proof has to reconstruct the\ninversion step in passing.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L3",
      "source": "def-real-limit",
      "source_section": "Definition",
      "quote": "A sequence $(x_k)$ of reals **converges** to $x \\in \\mathbb{R}$ when for\nevery rational $\\varepsilon > 0$ there is $K$ with\n$|x_k - x| < \\hat\\varepsilon$ for all $k \\ge K$. It is **Cauchy** when for\nevery rational $\\varepsilon > 0$ there is $K$ with\n$|x_k - x_l| < \\hat\\varepsilon$ for all $k, l \\ge K$.",
      "uses": [
        "1.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "For every $j \\in \\mathbb{N}$: $b_j - b_{j+1} = \\dfrac{1}{\\iota(j+1)} - \\dfrac{1}{\\iota(j+2)} = \\dfrac{\\iota(j+2) - \\iota(j+1)}{\\iota(j+1)\\iota(j+2)} = \\dfrac{1}{\\iota(j+1)\\,\\iota(j+2)}$.",
      "step": "1.1",
      "inputs": [
        "L1",
        "given",
        "algebra"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "The sequence $(b_j)$ converges to $0$: given a rational $\\varepsilon > 0$, choose $n \\ge 1$ with $1/n < \\varepsilon$; then for every $j$ with $j+1 \\ge n$ we have $0 < b_j \\le 1/n < \\varepsilon$.",
      "step": "1.2",
      "inputs": [
        "L1",
        "L3",
        "given",
        "choose"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "The term of $\\sum_{k \\ge 1} d_k$ at index $j$ is $d_{j+1} = \\dfrac{1}{\\iota(j+1)\\,\\iota(j+2)}$, so it equals $b_j - b_{j+1}$; the two series are the same series.",
      "step": "2.1",
      "inputs": [
        "1.1",
        "given"
      ]
    },
    {
      "id": "step-2-2",
      "claim": "By the telescoping lemma, $\\sum_j (b_j - b_{j+1})$ converges with sum $b_0 - 0 = 1/\\iota(1) = 1$.",
      "step": "2.2",
      "inputs": [
        "1.2",
        "L2",
        "L1"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "Therefore $\\sum_{k \\ge 1} 1/(k(k+1))$ converges with sum $1$.",
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
      "reason": "The example starts at k = 1 and asserts no k = 0 reciprocal term."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "step 1.2 proves the terminal reciprocal tends to 0, and step 2.2 uses that exact limit in the sum."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "steps 2.1-2.2 identify the first term through b_0 = 1 and obtain total sum 1."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "The fixed reciprocal family has no varying parameter or admitted zero denominator."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "steps 1.1 and 2.1 align d_{j+1} with b_j-b_{j+1}, preserving both k = 1 and the terminal index."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "steps 1.2: every selected index or tolerance is supplied by the cited limit, order-bound, Archimedean, or divergence clause; no selection from an unproved nonempty family is hidden."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The asserted claim is not a biconditional; any contrapositive wording is the same one-directional implication."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The asserted claim is not a biconditional, so no independent reverse implication is claimed."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "pending",
    "reviewer": "Alpha",
    "notes": "Audit-Beta captured this A2 contract after reading every numbered step and every cited target section; independent risk review remains for A5/A6."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "ex-telescoping-sum-computed",
    "sourcePage": "series-and-nonnegative-tests-examples",
    "batch": "wave7-real-analysis-series",
    "target": "lem-telescoping-series",
    "declared_target": "lem-telescoping-series",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-telescoping-sum-computed",
    "sourcePage": "series-and-nonnegative-tests-examples",
    "batch": "wave7-real-analysis-series",
    "target": "def-series",
    "declared_target": "def-series",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-telescoping-sum-computed",
    "sourcePage": "series-and-nonnegative-tests-examples",
    "batch": "wave7-real-analysis-series",
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
    "source": "ex-telescoping-sum-computed",
    "sourcePage": "series-and-nonnegative-tests-examples",
    "batch": "wave7-real-analysis-series",
    "target": "lem-of-naturals-positive",
    "declared_target": "lem-of-naturals-positive",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-telescoping-sum-computed",
    "sourcePage": "series-and-nonnegative-tests-examples",
    "batch": "wave7-real-analysis-series",
    "target": "lem-of-inverse-positive",
    "declared_target": "lem-of-inverse-positive",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-telescoping-sum-computed",
    "sourcePage": "series-and-nonnegative-tests-examples",
    "batch": "wave7-real-analysis-series",
    "target": "def-real-limit",
    "declared_target": "def-real-limit",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-telescoping-sum-computed",
    "sourcePage": "series-and-nonnegative-tests-examples",
    "batch": "wave7-real-analysis-series",
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
    "source": "ex-telescoping-sum-computed",
    "sourcePage": "series-and-nonnegative-tests-examples",
    "batch": "wave7-real-analysis-series",
    "target": "ex-harmonic-series-diverges",
    "declared_target": "ex-harmonic-series-diverges",
    "target_statement_provenance": "literature-derived",
    "targetPage": "series-and-nonnegative-tests-examples",
    "targetBatch": "wave7-real-analysis-series",
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

### `def-real-limit`

````markdown
---
id: def-real-limit
kind: definition
title: "Limits and Cauchy sequences of reals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-numbers, def-real-order]
aliases: []
verification:
  precheck: n/a
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
pipeline_run: null
---

## Definition

A sequence $(x_k)$ of reals **converges** to $x \in \mathbb{R}$ when for
every rational $\varepsilon > 0$ there is $K$ with
$|x_k - x| < \hat\varepsilon$ for all $k \ge K$. It is **Cauchy** when for
every rational $\varepsilon > 0$ there is $K$ with
$|x_k - x_l| < \hat\varepsilon$ for all $k, l \ge K$.

## Remarks

- Quantifying over rational $\varepsilon$ loses nothing: below any real
  $\varepsilon > 0$ lies a positive rational ([[lem-rat-embeds-dense]]).
- $|\cdot|$ is the absolute value of [[def-real-order]].
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

### `ex-harmonic-series-diverges`

````markdown
---
id: ex-harmonic-series-diverges
kind: example
title: "The harmonic series $\\sum 1/k$ diverges, by condensation and by Oresme block grouping"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-cauchy-condensation, def-series, lem-nth-term-test, thm-induction-principle, def-finite-sum, lem-finite-sum-laws, thm-nonnegative-series-bounded-partial-sums, def-integer-power, lem-power-monotone, lem-of-inverse-positive, lem-of-naturals-positive, thm-of-archimedean, def-monotone-sequence, def-bounded-set]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Harmonic series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Harmonic_series_(mathematics)"
    - title: "Cauchy condensation test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_condensation_test"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Example

The **harmonic series** is $\sum_{k \ge 1} 1/k$, the series from the starting
index $1$ ([[def-series]]) of the family $a_k = 1/\iota(k)$; the index $0$ is
excluded because $1/0$ has no value. It **diverges**, and its partial sums are
unbounded above.

This is the case $p = 1$ of [[thm-p-series-rational]]. The two arguments below do
not use that theorem: the first is the condensation argument, which is how
[[thm-p-series-rational]] itself is proved and which here degenerates to
something one can read off; the second is Oresme's block grouping from the
fourteenth century, which uses no test at all and produces the explicit lower
bound

$$\sum_{k=1}^{2^{n}} \frac{1}{k} \;\ge\; 1 + \frac{n}{2} \qquad (n \in \mathbb{N}) .$$

That bound is worth having on its own: it says the harmonic partial sums grow at
least like a constant multiple of $n$ along the powers of $2$, which is the
slowest divergence any explicit series on this page exhibits.

## Facts & Assumptions

**Given:** The family $a_k := 1/\iota(k)$ for naturals $k \ge 1$, with $\iota(k)$ the canonical natural; its partial sums $A_m = \sum_{k=1}^{m} a_k$ ([[def-series]], [[def-finite-sum]], [[lem-of-naturals-positive]]).

[L1] The canonical naturals are positive and order preserving: $0 < \iota(j) \le \iota(k)$ for $1 \le j \le k$; and reciprocation reverses the order on the positives ([[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

[L2] Condensation: for a nonnegative nonincreasing family from $1$, $\sum_{k \ge 1} x_k$ converges if and only if $\sum_{j \ge 0} 2^{j} x_{2^{j}}$ converges ([[thm-cauchy-condensation]], [[def-monotone-sequence]]).

[L3] A series whose terms do not tend to $0$ diverges ([[lem-nth-term-test]]).

[L4] Powers of $2$: $2^{j} \ge 1$, $2^{j+1} = 2\cdot 2^{j}$, and $2^{j} \cdot (1/2^{j}) = 1$ ([[def-integer-power]], [[lem-power-monotone]]).

[L5] Splitting and monotonicity of finite sums, and the number of terms in $\sum_{k=p}^{q}$, namely $q+1-p$ ([[lem-finite-sum-laws]], [[def-finite-sum]]).

[L6] The principle of induction ([[thm-induction-principle]]); and for every real $x$ there is a natural $n$ with $\iota(n) > x$ ([[thm-of-archimedean]]).

[L7] For a series of nonnegative terms: it converges if and only if the range of its partial sums is bounded above ([[thm-nonnegative-series-bounded-partial-sums]], [[def-bounded-set]]).

## Verification

**Proof technique:** direct.

1.1 Each $a_k = 1/\iota(k)$ is positive, and $a_j \ge a_k$ whenever $1 \le j \le k$, since $0 < \iota(j) \le \iota(k)$ and reciprocation reverses the order. [given, L1]

1.2 For every $n \in \mathbb{N}$ the block $\sum_{k=2^{n}+1}^{2^{n+1}} 1/k$ has $2^{n+1} - 2^{n} = 2^{n}$ terms, each with index $k \le 2^{n+1}$ and hence each at least $1/2^{n+1}$; so the block is at least $2^{n} \cdot \dfrac{1}{2^{n+1}} = \dfrac{1}{2}$. [L1, L4, L5]

2.1 So the family is nonnegative and nonincreasing, and condensation applies to it. [step 1.1, L2]

2.2 An induction on $n$ gives $A_{2^{n}} \ge 1 + \iota(n)/2$ for every $n \in \mathbb{N}$. At $n = 0$ it reads $A_1 = 1 \ge 1$; and if it holds at $n$ then, splitting at $2^{n}$, $A_{2^{n+1}} = A_{2^{n}} + \sum_{k=2^{n}+1}^{2^{n+1}} 1/k \ge 1 + \iota(n)/2 + 1/2 = 1 + \iota(n+1)/2$. [step 1.2, L5, L6]

3.1 The condensed terms are $2^{j} a_{2^{j}} = 2^{j}\cdot \dfrac{1}{2^{j}} = 1$ for every $j \in \mathbb{N}$. [step 2.1, L4]

3.2 The range of the partial sums is not bounded above: given a real $M$, choose a natural $n$ with $\iota(n) > 2M$; then $A_{2^{n}} \ge 1 + \iota(n)/2 > 1 + M > M$. [step 2.2, L6, choose]

4.1 The condensed series is therefore $\sum_{j \ge 0} 1$, whose terms are constantly $1$ and so do not converge to $0$; it diverges. [step 3.1, L3]

5.1 By condensation, $\sum_{k \ge 1} 1/k$ diverges. That is the first argument. [step 4.1, step 2.1, L2]

6.1 Since the terms are nonnegative, the series diverges and its partial sums are unbounded above. That is the second argument, and it recovers the conclusion of step 5.1 without using any convergence test. [step 3.2, step 1.1, L7] ∎

## Remarks

- **Why the two arguments are the same argument.** Oresme's blocks are the blocks of the condensation proof, grouped from $2^{n}+1$ to $2^{n+1}$, and the constant $1/2$ in step 1.2 is the constant that makes the condensed terms of step 3.1 equal to $1$. The difference is bookkeeping: condensation states the grouping once and for all, for every nonincreasing family, and the block argument performs it for this one family.

- **The divergence is extremely slow, and the bound says how slow.** To make the partial sum exceed $M$ the estimate of step 2.2 asks for about $2^{2M}$ terms. That is why the harmonic series is the standard warning against reading convergence off numerical evidence.

- **The bound in step 2.2 is one sided.** Nothing here says the partial sums are *at most* $1 + n/2$ along powers of $2$, and in fact they are not; the matching upper bound is the other half of the condensation estimate, and it is not needed for divergence.
````

### `lem-of-inverse-positive`

````markdown
---
id: lem-of-inverse-positive
kind: lemma
title: "Inverses of positives are positive, and reciprocation reverses order"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-ordered-field, lem-of-sign-rules, cor-of-one-positive]
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
    - title: "University of Innsbruck notes: Ordered fields"
      url: "https://www.uibk.ac.at/media/filer_public/28/02/280225fd-dde6-4e9c-bff6-baad33ff4a05/ragen.pdf"
pipeline_run: null
proof_strategy: direct
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and
let $a, b \in F$.

1. If $a > 0$ then $a^{-1} > 0$.
2. If $0 < a < b$ then $0 < b^{-1} < a^{-1}$.

## Facts & Assumptions

**Given:** An ordered field $F$ with positive cone $P$, and elements $a, b \in F$.

[L1] $x > 0 \iff x \in P$; $x < 0 \iff -x \in P$; and for $x \neq 0$ exactly one of $x \in P$, $-x \in P$ holds ([[def-ordered-field]]).

[L2] Sign rules: a product of a positive and a negative is negative, a product of two positives is positive, and for $c > 0$ one has $a < b \iff ac < bc$ ([[lem-of-sign-rules]]).

[L3] $0 < 1$; in particular $1 \neq 0$ ([[cor-of-one-positive]]).

[L4] $P$ is closed under addition, so $<$ is transitive ([[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Assume $a > 0$, so $a \neq 0$ and its inverse $a^{-1}$ exists with $a \cdot a^{-1} = 1$; moreover $a^{-1} \neq 0$, since $a^{-1}$ has $a$ as its inverse while $0$ is non-invertible ($1 \neq 0$ by L3). [assume-hyp, L1, L3]

2.1 By trichotomy $a^{-1} \in P$ or $-a^{-1} \in P$; if $-a^{-1} \in P$, then $a > 0$ and $a^{-1} < 0$ give $a \cdot a^{-1} < 0$ by the sign rules, i.e. $1 < 0$, contradicting $0 < 1$; hence $a^{-1} \in P$, i.e. $a^{-1} > 0$, proving claim 1. [step 1.1, L2, L3, L1]

3.1 Assume $0 < a < b$; then $0 < b$ by transitivity, so by claim 1 both $a^{-1} > 0$ and $b^{-1} > 0$, and the sign rules give $a^{-1} b^{-1} > 0$. [assume-hyp, step 2.1, L4, L2, L1]

4.1 Multiplying $a < b$ by the positive $a^{-1} b^{-1}$ via the sign rules gives $a (a^{-1} b^{-1}) < b (a^{-1} b^{-1})$; since $a a^{-1} = 1$ and $b b^{-1} = 1$, this simplifies to $b^{-1} < a^{-1}$. [step 3.1, L2, algebra]

5.1 Together with $b^{-1} > 0$ from step 3.1, we conclude $0 < b^{-1} < a^{-1}$, proving claim 2. [step 3.1, step 4.1] ∎
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

### `lem-telescoping-series`

````markdown
---
id: lem-telescoping-series
kind: lemma
title: "$\\sum (b_k - b_{k+1})$ converges iff $(b_k)$ converges, with sum $b_0 - \\lim b_k$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-series, def-finite-sum, lem-finite-sum-laws, thm-algebra-of-limits, def-real-limit]
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
    - title: "Telescoping series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Telescoping_series"
    - title: "T. Tao, Analysis I, 3rd ed., §7.2"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $(b_k)$ be a sequence of reals and put $a_k := b_k - b_{k+1}$. Then the
partial sums of $\sum a_k$ are

$$s_n \;=\; \sum_{k<n} (b_k - b_{k+1}) \;=\; b_0 - b_n \qquad (n \in \mathbb{N}),$$

and consequently $\sum a_k$ converges ([[def-series]]) **if and only if** $(b_k)$
converges ([[def-real-limit]]), in which case

$$\sum_{k=0}^{\infty} (b_k - b_{k+1}) \;=\; b_0 - \lim_{k} b_k .$$

For a family from a general starting index $m$ the same statement holds with $b_0$
replaced by $b_m$, being this statement applied to the shifted sequence
$j \mapsto b_{j+m}$ ([[def-series]]).

## Facts & Assumptions

**Given:** A sequence $(b_k)$ of reals, the sequence $a_k := b_k - b_{k+1}$, and the partial sums $s_n = \sum_{k<n} a_k$ ([[def-series]], [[def-finite-sum]]).

[L1] Telescoping of finite sums: $\sum_{k<n}(c_{k+1} - c_k) = c_n - c_0$ for every sequence $(c_k)$ of reals and every $n \in \mathbb{N}$ ([[lem-finite-sum-laws]]).

[L2] Algebra of limits: if $x_n \to x$ and $y_n \to y$ then $x_n - y_n \to x - y$ ([[thm-algebra-of-limits]]).

[L3] A constant sequence with value $c$ converges to $c$ ([[def-real-limit]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] to the sequence $c_k := -b_k$: it gives $\sum_{k<n}(-b_{k+1} - (-b_k)) = -b_n - (-b_0)$, that is $\sum_{k<n}(b_k - b_{k+1}) = b_0 - b_n$. [L1, algebra]

2.1 So $s_n = b_0 - b_n$ for every $n \in \mathbb{N}$, and equivalently $b_n = b_0 - s_n$. [step 1.1, algebra]

3.1 Suppose $(b_k)$ converges, say $b_n \to B$; then $s_n = b_0 - b_n \to b_0 - B$, so $\sum a_k$ converges with sum $b_0 - B$. [step 2.1, L2, L3]

3.2 Suppose conversely that $\sum a_k$ converges, say $s_n \to S$; then $b_n = b_0 - s_n \to b_0 - S$, so $(b_k)$ converges. [step 2.1, L2, L3]

4.1 The two implications give the stated equivalence, and in the convergent case step 3.1 gives the sum $b_0 - \lim_k b_k$. [step 3.1, step 3.2] ∎

## Remarks

- **The first term of $(b_k)$ survives and the rest cancel.** That is the whole content, and it is where an off-by-one error is easiest to make: the sum is $b_0 - \lim b_k$ and not $b_1 - \lim b_k$, because the partial sum $s_n = \sum_{k<n}$ starts at $k = 0$ ([[def-series]]). A series written from $k = 1$ telescopes to $b_1 - \lim b_k$ instead.

- **No sign or monotonicity hypothesis is used.** The lemma is an identity between finite sums followed by one limit rule, so it applies to sequences $(b_k)$ of any sign and is not restricted to the decreasing case in which telescoping series usually appear.
````

