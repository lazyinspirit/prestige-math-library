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

- critical risk (13): 15 declared dependencies; 16 cited facts; 9 numbered proof steps; biconditional / both-direction claim; boundary-sensitive language; analytic limiting/completeness language
- Wave 8 ai-generated Statement/Construction seed
- pending Wave 8 genrisk seed (cone 2)

## Target item — `cex-abel-test-needs-monotonicity`

Normalized current SHA-256: `060d98d57d46b068b08326763f4ac8ba7802673d2ac64b45ac571b28e549ea56`

The complete current item follows, including frontmatter:

````markdown
---
id: cex-abel-test-needs-monotonicity
kind: counterexample
title: "With $a_j = (-1)^{j}/\\sqrt{j+1}$ convergent and $b_j = (-1)^{j}$ bounded but not monotone, $\\sum a_j b_j = \\sum 1/\\sqrt{j+1}$ diverges"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [thm-abel-test, thm-alternating-series-test, thm-p-series-rational, thm-of-square-roots, thm-nth-roots-exist, def-rational-power, lem-alternating-sequence, def-monotone-sequence, def-bounded-set, lem-of-abs-value, lem-of-inverse-positive, lem-of-naturals-positive, cor-archimedean-reciprocal, def-series, def-real-limit]
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
    - title: "Abel's test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Abel%27s_test"
    - title: "Harmonic series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Harmonic_series_(mathematics)"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** if $\sum a_j$ converges ([[def-series]]) and $(b_j)$ is
bounded ([[def-bounded-set]]), then $\sum a_j b_j$ converges.

This is [[thm-abel-test]] with the word *monotone* deleted from its hypothesis on
$(b_j)$. Deleting it destroys the theorem.

Let $(\varepsilon_j)$ be the alternating sequence
([[lem-alternating-sequence]]) and put

$$a_j := \frac{\varepsilon_j}{\sqrt{\iota(j+1)}}, \qquad b_j := \varepsilon_j .$$

Then $\sum a_j$ converges by the alternating series test, $(b_j)$ is bounded with
$|b_j| = 1$, and

$$a_j b_j \;=\; \frac{\varepsilon_j^{\,2}}{\sqrt{\iota(j+1)}} \;=\; \frac{1}{\sqrt{\iota(j+1)}},$$

so $\sum_j a_j b_j$ is $\sum_{k \ge 1} 1/k^{1/2}$, the $p$-series at $p = 1/2$,
which diverges ([[thm-p-series-rational]]).

## Facts & Assumptions

**Given:** The alternating sequence $(\varepsilon_j)$, the sequence $\beta_j := 1/\sqrt{\iota(j+1)}$, and $a_j := \varepsilon_j \beta_j$, $b_j := \varepsilon_j$.

[L1] The alternating sequence: $\varepsilon_0 = 1$, $\varepsilon_{j+1} = -\varepsilon_j$, $|\varepsilon_j| = 1$ ([[lem-alternating-sequence]]).

[L2] Square roots: every $t \ge 0$ has a unique $\sqrt t \ge 0$ with $(\sqrt t)^{2} = t$, and $\sqrt{t} = t^{1/2}$ in the notation of rational powers ([[thm-of-square-roots]], [[thm-nth-roots-exist]], [[def-rational-power]]).

[L3] The canonical naturals are positive for $n \ge 1$ and strictly increasing; reciprocation reverses the order on the positives; and for every real $\varepsilon > 0$ there is $n \ge 1$ with $1/\iota(n) < \varepsilon$ ([[lem-of-naturals-positive]], [[lem-of-inverse-positive]], [[cor-archimedean-reciprocal]]).

[L4] The alternating series test ([[thm-alternating-series-test]], [[def-monotone-sequence]], [[def-real-limit]]).

[L5] $\sum_{k\ge1}1/k^{p}$ converges if and only if $p > 1$; and $\sum_{k\ge1}x_k$ is the series of $j \mapsto x_{j+1}$ ([[thm-p-series-rational]], [[def-series]]).

[L6] Absolute value: $|xy| = |x|\,|y|$, $|x| \ge 0$, and $x^{2} = |x|^{2}$ ([[lem-of-abs-value]]).

[L7] Abel's test, whose hypothesis on the second factor is that it be monotone and bounded ([[thm-abel-test]], [[def-monotone-sequence]], [[def-bounded-set]]).

## Counterexample

**Proof technique:** direct.

1.1 Square roots are strictly increasing on the nonnegative reals: if $0 \le u < v$ and $\sqrt u \ge \sqrt v$ then $u = (\sqrt u)^{2} \ge (\sqrt v)^{2} = v$, which is false. [L2]

1.2 The sequence $(b_j) = (\varepsilon_j)$ is bounded, $|b_j| = 1$ for every $j$. [L1, L6]

1.3 It is not monotone: $b_0 = 1 > b_1 = -1$, so it is not nondecreasing, and $b_1 = -1 < b_2 = 1$, so it is not nonincreasing. [L1]

2.1 Each $\beta_j = 1/\sqrt{\iota(j+1)}$ is positive and $(\beta_j)$ is nonincreasing, since $0 < \iota(j+1) < \iota(j+2)$ gives $0 < \sqrt{\iota(j+1)} < \sqrt{\iota(j+2)}$. [step 1.1, L2, L3]

2.2 $(\beta_j)$ converges to $0$: given a rational $\varepsilon > 0$, fix $n \ge 1$ with $1/\iota(n) < \varepsilon^{2}$; for $j \ge n$ one has $\iota(j+1) \ge \iota(n) > (1/\varepsilon)^{2}$, so $\sqrt{\iota(j+1)} > 1/\varepsilon$ and $\beta_j < \varepsilon$. [step 1.1, L2, L3]

3.1 By the alternating series test $\sum_j a_j = \sum_j \varepsilon_j \beta_j$ converges. [step 2.1, step 2.2, L4]

3.2 For every $j$, $a_j b_j = \varepsilon_j^{\,2}\beta_j = |\varepsilon_j|^{2}\beta_j = \beta_j = 1/\sqrt{\iota(j+1)}$. [step 2.1, L1, L6]

4.1 The series $\sum_j \beta_j$ is $\sum_{k \ge 1} 1/\sqrt{k} = \sum_{k\ge1} 1/k^{1/2}$, the $p$-series at $p = 1/2$; since $1/2 > 1$ is false, it diverges. [step 3.2, L2, L5]

5.1 So $\sum a_j$ converges and $(b_j)$ is bounded, while $\sum a_j b_j$ diverges: the refuted claim fails, and the hypothesis of [L7] that is missing is precisely monotonicity of $(b_j)$. [step 3.1, step 1.2, step 1.3, step 4.1, L7] ∎

## Remarks

- **The failure is not a matter of size.** The factor $(b_j)$ has absolute value exactly $1$ at every index, so it neither grows nor shrinks; what it does is cancel the alternation of $(a_j)$, and the alternation was the only reason $\sum a_j$ converged. A monotone factor cannot do that, which is the content of [[thm-abel-test]].

- **The exponent $1/2$ is chosen so that both halves work.** A faster decay, such as $1/\iota(j+1)$, would still give a divergent product series, while a faster one still, such as $1/\iota(j+1)^{2}$, would give an absolutely convergent $\sum a_j$, for which no bounded factor can destroy convergence. The witness has to sit in the conditionally convergent range, and $p = 1/2$ does.

- **The same series appears again on this page.** [[cex-cauchy-product-of-convergent-series-diverges]] uses $\sum \varepsilon_k/\sqrt{\iota(k+1)}$ as both factors of a Cauchy product, for the same underlying reason: its terms are just barely small enough to converge with signs and not without.
````

## Wave 8 provenance row for the target

```json
{
  "id": "cex-abel-test-needs-monotonicity",
  "statement": "ai-generated",
  "proof": "ai-generated",
  "evidence": "trivial",
  "urls": [],
  "rationale": "The exact witness and its parameter choices are a bespoke, directly checkable construction rather than a literature claim; the proof verifies it from established local theorems and elementary algebra.",
  "alpha_concurred": false,
  "at": "2026-08-09",
  "ledger": "wave8-real-analysis-absolute-convergence.provenance.jsonl"
}
```

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "lem-alternating-sequence",
      "source_section": "Statement",
      "quote": "3. **The alternating sequence.** $(s_k)$ is the **unique** sequence of reals with",
      "uses": [
        "1.2",
        "1.3",
        "3.2"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-of-square-roots",
      "source_section": "Statement",
      "quote": "$a \\in F$ with $a \\ge 0$ has a **unique** $s \\in F$ with $s \\ge 0$ and $s^2 = a$;",
      "uses": [
        "1.1",
        "2.1",
        "2.2",
        "4.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-nth-roots-exist",
      "source_section": "Statement",
      "quote": "$n \\ge 1$ there is a **unique** $s \\in \\mathbb{R}$ with $s \\ge 0$ and $s^n = a$",
      "uses": [
        "1.1",
        "2.1",
        "2.2",
        "4.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-rational-power",
      "source_section": "Definition",
      "quote": "Every rational has a representative with positive denominator",
      "uses": [
        "1.1",
        "2.1",
        "2.2",
        "4.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-of-naturals-positive",
      "source_section": "Statement",
      "quote": "- the map $n \\mapsto n \\cdot 1_F$ is strictly increasing, hence injective, on $\\{1, 2, 3, \\dots\\}$;",
      "uses": [
        "2.1",
        "2.2"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-of-inverse-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and",
      "uses": [
        "2.1",
        "2.2"
      ]
    },
    {
      "fact": "L3",
      "source": "cor-archimedean-reciprocal",
      "source_section": "Statement",
      "quote": "the reciprocals of the naturals get below every positive bound, is the statement",
      "uses": [
        "2.1",
        "2.2"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-alternating-series-test",
      "source_section": "Statement",
      "quote": "Let $(\\varepsilon_k)$ be the alternating sequence of [[lem-alternating-sequence]],",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-monotone-sequence",
      "source_section": "Definition",
      "quote": "Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with $\\mathbb{R}$ ordered",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-real-limit",
      "source_section": "Definition",
      "quote": "A sequence $(x_k)$ of reals **converges** to $x \\in \\mathbb{R}$ when for",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-p-series-rational",
      "source_section": "Statement",
      "quote": "$\\sum_{k \\ge 1} 1/k^{2}$ converges, at $p = 2$.",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-series",
      "source_section": "Definition",
      "quote": "$\\sum a_k$, **converges** when the sequence $(s_n)$ of partial sums converges",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "$|x|$ the absolute value ([[def-abs-value]]). Then",
      "uses": [
        "1.2",
        "3.2"
      ]
    },
    {
      "fact": "L7",
      "source": "thm-abel-test",
      "source_section": "Statement",
      "quote": "([[def-series]]) and $(b_k)$ is monotone ([[def-monotone-sequence]]) and bounded,",
      "uses": [
        "5.1"
      ]
    },
    {
      "fact": "L7",
      "source": "def-monotone-sequence",
      "source_section": "Definition",
      "quote": "- **monotone** when it is nondecreasing or nonincreasing;",
      "uses": [
        "5.1"
      ]
    },
    {
      "fact": "L7",
      "source": "def-bounded-set",
      "source_section": "Definition",
      "quote": "The notions **upper bound** and **bounded above** are already fixed by",
      "uses": [
        "5.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "Verified the stated inference at step 1.1.",
      "step": "1.1",
      "inputs": [
        "L2"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "Verified the stated inference at step 1.2.",
      "step": "1.2",
      "inputs": [
        "L1",
        "L6"
      ]
    },
    {
      "id": "step-1-3",
      "claim": "Verified the stated inference at step 1.3.",
      "step": "1.3",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "Verified the stated inference at step 2.1.",
      "step": "2.1",
      "inputs": [
        "1.1",
        "L2",
        "L3"
      ]
    },
    {
      "id": "step-2-2",
      "claim": "Verified the stated inference at step 2.2.",
      "step": "2.2",
      "inputs": [
        "1.1",
        "L2",
        "L3"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "Verified the stated inference at step 3.1.",
      "step": "3.1",
      "inputs": [
        "2.1",
        "2.2",
        "L4"
      ]
    },
    {
      "id": "step-3-2",
      "claim": "Verified the stated inference at step 3.2.",
      "step": "3.2",
      "inputs": [
        "2.1",
        "L1",
        "L6"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "Verified the stated inference at step 4.1.",
      "step": "4.1",
      "inputs": [
        "3.2",
        "L2",
        "L5"
      ]
    },
    {
      "id": "step-5-1",
      "claim": "Verified the stated inference at step 5.1.",
      "step": "5.1",
      "inputs": [
        "L7",
        "3.1",
        "1.2",
        "1.3",
        "4.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "No empty family, sum, or product occurs."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Statement and step 1.3 include the zero boundary."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Statement and step 1.2 include the unit boundary."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Statement and step 1.1 retain all admissible degenerate cases."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "No interval threshold endpoint occurs."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "No potentially empty choice occurs."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The item is not an equivalence."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The item is not an equivalence."
    }
  ]
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "cex-abel-test-needs-monotonicity",
    "sourcePage": "absolute-convergence-and-rearrangement-examples",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "thm-abel-test",
    "declared_target": "thm-abel-test",
    "target_statement_provenance": "literature-derived",
    "targetPage": "absolute-convergence-and-rearrangement",
    "targetBatch": "wave8-real-analysis-absolute-convergence",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-abel-test-needs-monotonicity",
    "sourcePage": "absolute-convergence-and-rearrangement-examples",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "thm-alternating-series-test",
    "declared_target": "thm-alternating-series-test",
    "target_statement_provenance": "literature-derived",
    "targetPage": "absolute-convergence-and-rearrangement",
    "targetBatch": "wave8-real-analysis-absolute-convergence",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-abel-test-needs-monotonicity",
    "sourcePage": "absolute-convergence-and-rearrangement-examples",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "thm-p-series-rational",
    "declared_target": "thm-p-series-rational",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-abel-test-needs-monotonicity",
    "sourcePage": "absolute-convergence-and-rearrangement-examples",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "thm-of-square-roots",
    "declared_target": "thm-of-square-roots",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-abel-test-needs-monotonicity",
    "sourcePage": "absolute-convergence-and-rearrangement-examples",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "thm-nth-roots-exist",
    "declared_target": "thm-nth-roots-exist",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-abel-test-needs-monotonicity",
    "sourcePage": "absolute-convergence-and-rearrangement-examples",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "def-rational-power",
    "declared_target": "def-rational-power",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-abel-test-needs-monotonicity",
    "sourcePage": "absolute-convergence-and-rearrangement-examples",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "lem-alternating-sequence",
    "declared_target": "lem-alternating-sequence",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-sequences-and-cauchy-completeness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-abel-test-needs-monotonicity",
    "sourcePage": "absolute-convergence-and-rearrangement-examples",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "def-monotone-sequence",
    "declared_target": "def-monotone-sequence",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-sequences-and-cauchy-completeness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-abel-test-needs-monotonicity",
    "sourcePage": "absolute-convergence-and-rearrangement-examples",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "def-bounded-set",
    "declared_target": "def-bounded-set",
    "target_statement_provenance": "literature-derived",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-abel-test-needs-monotonicity",
    "sourcePage": "absolute-convergence-and-rearrangement-examples",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "lem-of-abs-value",
    "declared_target": "lem-of-abs-value",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-abel-test-needs-monotonicity",
    "sourcePage": "absolute-convergence-and-rearrangement-examples",
    "batch": "wave8-real-analysis-absolute-convergence",
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
    "source": "cex-abel-test-needs-monotonicity",
    "sourcePage": "absolute-convergence-and-rearrangement-examples",
    "batch": "wave8-real-analysis-absolute-convergence",
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
    "source": "cex-abel-test-needs-monotonicity",
    "sourcePage": "absolute-convergence-and-rearrangement-examples",
    "batch": "wave8-real-analysis-absolute-convergence",
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
    "source": "cex-abel-test-needs-monotonicity",
    "sourcePage": "absolute-convergence-and-rearrangement-examples",
    "batch": "wave8-real-analysis-absolute-convergence",
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
    "source": "cex-abel-test-needs-monotonicity",
    "sourcePage": "absolute-convergence-and-rearrangement-examples",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "def-real-limit",
    "declared_target": "def-real-limit",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
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
    "id": "cex-abel-test-needs-monotonicity",
    "file": "items/cex-abel-test-needs-monotonicity.md",
    "source": "provenance",
    "cone_size": 2,
    "logical_consumers": [],
    "direct_citation_consumers": [
      {
        "id": "cex-cauchy-product-of-convergent-series-diverges",
        "via": [
          "wikilink"
        ]
      },
      {
        "id": "ex-abel-test-applied",
        "via": [
          "wikilink"
        ]
      }
    ],
    "disposition": {
      "status": "pending",
      "by": "",
      "notes": ""
    }
  }
]
```

## Full text of every cited or declared item (16)

### `cex-cauchy-product-of-convergent-series-diverges`

````markdown
---
id: cex-cauchy-product-of-convergent-series-diverges
kind: counterexample
title: "The Cauchy product of $\\sum_{k \\ge 0} (-1)^{k}/\\sqrt{k+1}$ with itself has $|c_n| \\ge 1$ for every $n$, so it diverges"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [fs-cauchy-product-of-convergent-series-converges, def-cauchy-product, thm-mertens, thm-alternating-series-test, thm-of-square-roots, thm-am-gm, lem-nth-term-test, lem-alternating-sequence, lem-finite-sum-laws, lem-of-naturals-positive, lem-of-inverse-positive, def-monotone-sequence, def-series, def-real-limit]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Cauchy product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_product"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Colorado State University, MATH 171 Homework 4 Solutions"
      url: "https://www.math.colostate.edu/~adams/teaching/math171spr2010/Hw4Sol.pdf"
    - title: "John K. Hunter, An Introduction to Real Analysis, Chapter 4"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch4.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** the Cauchy product of two convergent series of reals converges
([[def-cauchy-product]], [[def-series]]).

The witness is a single conditionally convergent series multiplied by itself. Let
$(\varepsilon_k)$ be the alternating sequence ([[lem-alternating-sequence]]) and

$$a_k \;=\; b_k \;:=\; \frac{\varepsilon_k}{\sqrt{\iota(k+1)}} ,$$

so that $\sum a_k$ converges by the alternating series test. Then, as
[[fs-cauchy-product-of-convergent-series-converges]] establishes,

$$|c_n| \;=\; \sum_{k=0}^{n}\frac{1}{\sqrt{\iota(k+1)\,\iota(n-k+1)}} \;\ge\; \frac{2\,\iota(n+1)}{\iota(n+2)} \;\ge\; 1 \qquad (n \in \mathbb{N}),$$

so $(c_n)$ does not converge to $0$ and $\sum c_n$ diverges
([[lem-nth-term-test]]).

What this counterexample adds to the false statement is the sharp form of the
bound: the lower bound $2\iota(n+1)/\iota(n+2) = 2 - 2/\iota(n+2)$ increases to
$2$, so $|c_n|$ eventually exceeds every real below $2$. The terms of the product
series therefore do not merely fail to tend to $0$; they stay bounded away from it
by an amount approaching $2$. **Nothing here determines the asymptotic size of
$|c_n|$ itself**, only this lower bound for it; the divergence is as far from
marginal as the bound makes it.

## Facts & Assumptions

**Given:** The alternating sequence $(\varepsilon_k)$, the sequence $\beta_k := 1/\sqrt{\iota(k+1)}$, the series $\sum a_k$ with $a_k = b_k = \varepsilon_k\beta_k$, and its Cauchy product $(c_n)$.

[L1] The series $\sum a_k$ converges, $|c_n| = \sum_{k=0}^{n}\beta_k\beta_{n-k}$, and $|c_n| \ge 2\iota(n+1)/\iota(n+2) \ge 1$ for every $n$; hence $\sum c_n$ diverges ([[fs-cauchy-product-of-convergent-series-converges]], [[thm-alternating-series-test]], [[def-monotone-sequence]], [[lem-nth-term-test]], [[def-cauchy-product]], [[def-series]]).

[L3] The canonical naturals are positive for $n \ge 1$ and strictly increasing, with $\iota(m+n) = \iota(m)+\iota(n)$; reciprocation reverses the order on the positives ([[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

[L4] Finite sums are monotone in their terms, and the sum of $n+1$ copies of a constant $\lambda$ is $\iota(n+1)\lambda$ ([[lem-finite-sum-laws]]).

[L6] Mertens' theorem, whose hypothesis is that one factor converge absolutely ([[thm-mertens]]).

[L7] Convergence to $0$ of a sequence ([[def-real-limit]]).

## Counterexample

**Proof technique:** direct.

1.1 The series $\sum_k a_k$ converges, and its Cauchy product with itself satisfies $|c_n| = \sum_{k=0}^{n}\beta_k\beta_{n-k} \ge 2\iota(n+1)/\iota(n+2) \ge 1$ for every $n$. [given, L1]

2.1 Hence $(c_n)$ does not converge to $0$: the tolerance $1$ admits no index $K$ with $|c_n - 0| < 1$ for all $n \ge K$. So $\sum c_n$ diverges, and two convergent series can have a divergent Cauchy product. [step 1.1, L1, L7]

2.2 The lower bound is itself informative: $2\iota(n+1)/\iota(n+2) = 2 - 2/\iota(n+2)$, a quantity strictly increasing in $n$ that exceeds every real below $2$ from some index on. So $|c_n| \ge 2 - 2/\iota(n+2)$ for every $n$, and the terms of the product series stay bounded away from $0$ by an amount approaching $2$; nothing here claims a value for $|c_n|$ itself, only this bound for it. [step 1.1, L3, L4]

3.1 Neither factor converges absolutely, and that is exactly what the hypothesis of Mertens' theorem asks for: were $\sum |a_k|$ convergent, [L6] would make $\sum c_n$ convergent, contradicting step 2.1. [step 2.1, L6]

4.1 So the refuted claim fails for this pair, and the hypothesis that repairs it is absolute convergence of one factor. [step 2.1, step 2.2, step 3.1, L6] ∎

## Remarks

- **Why the product cannot cancel.** By [[lem-alternating-sequence]] the sign of $a_k b_{n-k}$ is $\varepsilon_k\varepsilon_{n-k} = \varepsilon_n$, the same for every $k \le n$: the antidiagonal of the product array is sign-constant. So all $n+1$ terms of $c_n$ add, and the AM-GM bound ([[thm-am-gm]], with square roots as in [[thm-of-square-roots]]) shows each is at least $2/\iota(n+2)$.

- **Compare the geometric case.** In [[ex-cauchy-product-of-geometric-series]] the antidiagonal also has $n+1$ equal terms, but they are $r^{n}$ with $|r| < 1$, so the count $n+1$ is beaten by the decay. Here the terms of the antidiagonal are at least $2/\iota(n+2)$ each, and there are $n+1$ of them, so the count wins.

- **This is the same series as in [[cex-abel-test-needs-monotonicity]].** Its terms are exactly small enough to be summable with alternating signs and not otherwise, which is what makes it the standard witness for both failures.
````

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

### `def-bounded-set`

````markdown
---
id: def-bounded-set
kind: definition
title: "Lower bound, bounded below, bounded set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-complete-ordered-field]
justified_by: []
aliases: []
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
    - title: "Upper and lower bounds (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Upper_and_lower_bounds"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ denotes the complete ordered field
([[def-complete-ordered-field]]) and $S \subseteq \mathbb{R}$ is a subset of it.

The notions **upper bound** and **bounded above** are already fixed by
[[def-complete-ordered-field]] and are only recalled here, never redefined:
$u \in \mathbb{R}$ is an *upper bound* of $S$ if $s \le u$ for all $s \in S$, and
$S$ is *bounded above* if it has at least one upper bound. The dual notions are:

- $\ell \in \mathbb{R}$ is a **lower bound** of $S$ if $\ell \le s$ for all $s \in S$.
- $S$ is **bounded below** if it has at least one lower bound.
- $S$ is **bounded** if it is both bounded above and bounded below, that is, if
  there are $\ell, u \in \mathbb{R}$ with $\ell \le s \le u$ for every $s \in S$.

## Remarks

- A bound is an element of $\mathbb{R}$ and is not required to lie in $S$. A
  bound that does lie in $S$ is a maximum or a minimum ([[def-max-min]]), and
  that is a strictly stronger condition ([[fs-sup-belongs-to-set]]).
- Bounds come in half-lines: if $\ell$ is a lower bound of $S$ then so is every
  $\ell'' \le \ell$, and if $u$ is an upper bound then so is every $u'' \ge u$.
  Consequently a set that has one bound of a given kind has infinitely many, and
  the interesting question is whether the collection of them has a best element,
  which is what a supremum ([[def-complete-ordered-field]]) or an infimum
  ([[def-infimum]]) is.
- Bounded above and bounded below are independent conditions. The set
  $A = \{\, n \cdot 1_{\mathbb{R}} : n \ge 1 \,\}$ of canonical naturals of
  $\mathbb{R}$ is bounded below by $0$ ([[lem-of-naturals-positive]]) and is not
  bounded above ([[thm-of-archimedean]]); its reflection $-A$ is bounded above
  and not bounded below ([[lem-reflection]]).
- The empty set is bounded, and vacuously so: every real number is both an upper
  bound and a lower bound of $\emptyset$, since the defining condition quantifies
  over no elements. Having bounds is therefore much weaker than having a least
  upper bound or a greatest lower bound ([[fs-every-set-has-sup]]).
````

### `def-monotone-sequence`

````markdown
---
id: def-monotone-sequence
kind: definition
title: "Nondecreasing, increasing, nonincreasing, decreasing, monotone, and eventually monotone sequences"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-sequence, def-real-order, def-complete-ordered-field, def-bounded-set, def-nat-order, thm-nat-linear-order, lem-nat-discrete, thm-induction-principle]
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
    - title: "Monotonic function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotonic_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (Def. 3.13)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. Lebl, Basic Analysis I, §2.2"
      url: "https://www.jirka.org/ra/"
---

## Definition

Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with $\mathbb{R}$ ordered
as in [[def-real-order]] and [[def-complete-ordered-field]], and with
$\mathbb{N}$ ordered as in [[def-nat-order]]. The sequence is:

- **nondecreasing** when $x_j \le x_k$ for all $j \le k$;
- **increasing** (or *strictly increasing*) when $x_j < x_k$ for all $j < k$;
- **nonincreasing** when $x_j \ge x_k$ for all $j \le k$;
- **decreasing** (or *strictly decreasing*) when $x_j > x_k$ for all $j < k$;
- **monotone** when it is nondecreasing or nonincreasing;
- **strictly monotone** when it is increasing or decreasing;
- **eventually monotone** when some tail $x^{(K)}$ ([[def-sequence]]) is
  monotone, that is when there is $K \in \mathbb{N}$ such that the restriction of
  the comparison to indices $\ge K$ is one-signed.

An increasing sequence is nondecreasing and a decreasing sequence is
nonincreasing, since $j \le k$ means $j < k$ or $j = k$ and the second case gives
equality. A sequence that is both nondecreasing and nonincreasing is constant.

**Consecutive comparisons suffice, and that is an induction.** The four
conditions above quantify over *all* pairs of indices, but what one checks in
practice, and what a recursive construction delivers, is the comparison of
consecutive terms. The two agree:

> $(x_k)$ is nondecreasing **if and only if** $x_k \le x_{\sigma(k)}$ for every
> $k \in \mathbb{N}$, and $(x_k)$ is increasing **if and only if**
> $x_k < x_{\sigma(k)}$ for every $k \in \mathbb{N}$; likewise, with the
> inequalities reversed, for nonincreasing and decreasing.

The forward implications are the instances $j = k$, $k = \sigma(k)$ of the
definitions, using $k < \sigma(k)$ ([[lem-nat-discrete]]). For the converse,
suppose $x_i \le x_{\sigma(i)}$ for every $i$ and fix $k$; we show by induction
on $k$ ([[thm-induction-principle]]) that $x_j \le x_k$ for every $j \le k$. For
$k = 0$: $j \le 0$ forces $j = 0$, and $x_0 \le x_0$. Assume the statement for
$k$ and let $j \le \sigma(k)$. If $j = \sigma(k)$ then $x_j \le x_{\sigma(k)}$ by
reflexivity. Otherwise $j < \sigma(k)$, and then $j \le k$: were $k < j$ we would
have $k < j < \sigma(k)$, which [[lem-nat-discrete]] excludes, so $j \le k$ by
totality of the order on $\mathbb{N}$ ([[thm-nat-linear-order]]). The induction
hypothesis gives $x_j \le x_k$, and $x_k \le x_{\sigma(k)}$ by assumption, so
$x_j \le x_{\sigma(k)}$ by transitivity. This completes the induction. The three
remaining equivalences are the same argument with $\le$ replaced by $<$,
$\ge$ or $>$, transitivity of the strict order being used in the same place.

**Boundedness of a monotone sequence is one-sided.** A nondecreasing sequence is
bounded below by its first term $x_0$, and a nonincreasing sequence is bounded
above by $x_0$, both immediately from the definition with $j = 0$. So for a
nondecreasing sequence the only substantive question is whether it is bounded
above, and for a nonincreasing sequence whether it is bounded below. The range of
$(x_k)$ is the set $\{x_k : k \in \mathbb{N}\}$ ([[def-sequence]]), and it is
bounded above, bounded below or bounded in the sense of [[def-bounded-set]]
exactly when the sequence is.

## Remarks

- **The naming is the one that keeps "increasing" strict.** Some texts use
  *increasing* for what is called *nondecreasing* here and *strictly increasing*
  for what is called *increasing*. This library follows the convention in which
  the unqualified word is strict, and always writes *nondecreasing* when
  equality is allowed, so that no statement on this page depends on which
  convention a reader arrives with. Where a proof needs the weak form it says
  *nondecreasing*, and where it needs the strict form it says *increasing*.

- **Eventual monotonicity is exactly monotonicity of a tail**, and by
  [[lem-limit-of-tail]] a sequence and its tails converge to the same limits and
  are Cauchy together. So every convergence statement about monotone sequences on
  this page extends verbatim to eventually monotone sequences, with the limit
  unchanged; only statements about specific terms, such as the identification of
  the limit as the supremum of the *whole* range, need the hypothesis at every
  index. The monotone convergence theorem is a case in point: an eventually
  nondecreasing bounded sequence converges, but to the supremum of the range of
  the monotone tail, which may be smaller than the supremum of the whole range.

- **Monotone is strictly weaker than strictly monotone, and neither is generic.**
  A constant sequence is monotone and not strictly monotone; the sequence with
  terms $1$ and $-1$ alternating ([[lem-alternating-sequence]]) is not monotone
  and not eventually monotone, since every tail contains both values infinitely
  often. That sequence is bounded, so boundedness alone gives neither form of
  monotonicity; what it does give is a monotone *subsequence*
  ([[lem-peak-monotone-subsequence]]), and that is the route to
  Bolzano-Weierstrass.
````

### `def-rational-power`

````markdown
---
id: def-rational-power
kind: definition
title: "Rational powers $a^r$ of a positive base"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-nth-roots-exist, def-integer-power, def-rationals, lem-rat-positive-denominator, lem-nat-embeds-int, def-rat-order, lem-power-monotone, lem-power-laws, lem-of-inverse-positive]
justified_by: [lem-rational-power-well-defined]
aliases: []
landmark: true
short: "$a^{m/n} := (a^{1/n})^m$, $a>0$"
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-04
    scope: published-audit-targeted
    context_sha256: 22067f1978d2f781dd7327a6f5c81cccbbc2009bd13885930f7d56ba5a2ceb5e
    item_sha256: 4f75fe6e8c39549d9a1c82a4fc920d13b890d3917b367621daddcaf70f377565
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I"
      url: "https://www.jirka.org/ra/realanal.pdf"
    - title: "Radicals and rational exponents (Emory University)"
      url: "https://mathcenter.oxford.emory.edu/site/math100/radicals/"
    - title: "Exponentiation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Exponentiation"
    - title: "Nth root (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nth_root"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Let $a \in \mathbb{R}$ with $a > 0$ and let $r \in \mathbb{Q}$ ([[def-rationals]]).

Every rational has a representative with positive denominator
([[lem-rat-positive-denominator]]), so write $r = m/n$ with $m \in \mathbb{Z}$
and $n$ a positive integer; a positive integer is the image of a unique natural
$\ge 1$ ([[lem-nat-embeds-int]]), and we write $n$ for that natural too. Define

$$a^{r} := \big(a^{1/n}\big)^{m},$$

where $a^{1/n}$ is the unique nonnegative $n$-th root of $a$
([[thm-nth-roots-exist]]) and the outer exponent is an integer power
([[def-integer-power]]). The outer power is legitimate because $a^{1/n} > 0$ when
$a > 0$, so it has an inverse and negative integer exponents are allowed.

**Well-definedness.** The right-hand side must not depend on which representative
$m/n$ of $r$ was chosen. It does not: that is [[lem-rational-power-well-defined]],
which is recorded in this item's `justified_by` rather than in its `deps`, since
it is a statement *about* the operation defined here and therefore depends on
this definition.

**The base must be positive.** For $a < 0$ the same formula is not a definition
at all, because different representatives of the same rational give different
answers, or no answer: see [[fs-rational-power-of-negative-base]], which is
exactly the item that justifies the restriction.

**Supplementary clause for the base $0$.** For $a = 0$ and rational $r > 0$
([[def-rat-order]]) the displayed formula still makes sense and still does not
depend on the representative: $r > 0$ forces $m \ge 1$, and
$\big(0^{1/n}\big)^{m} = 0^{m} = 0$ ([[thm-nth-roots-exist]] applies to every
$a \ge 0$). So we set $0^{r} = 0$ for rational $r > 0$. For $r < 0$ the
expression $0^{r}$ is left undefined, since $0$ has no inverse. This clause is
what lets the inequalities later on this page be stated for nonnegative entries
rather than for positive ones only.

## Remarks

- **Consistency with integer powers.** If $r \in \mathbb{Z}$ then $r = r/1$,
  $a^{1/1} = a$ ([[thm-nth-roots-exist]]), and the definition returns
  $(a^{1})^{r} = a^{r}$ as given by [[def-integer-power]]. So the notation $a^{r}$
  is unambiguous, and rational powers extend integer powers on positive bases.
  At $r = 1/n$ it returns $\big(a^{1/n}\big)^{1} = a^{1/n}$, so the root notation
  of [[thm-nth-roots-exist]] is the special case $r = 1/n$, as intended.
- $a^{r} > 0$ for every $a > 0$ and **every** $r \in \mathbb{Q}$, the exponent $0$
  included. Writing $r = m/n$ with $n \ge 1$: the root $a^{1/n}$ is positive
  ([[thm-nth-roots-exist]]); for $m \ge 0$ the value $\big(a^{1/n}\big)^{m}$ is a
  natural power of a positive element, hence positive, which is claim 1 of
  [[lem-power-monotone]] and covers $m = 0$ as well, since $a^{0} = 1 > 0$; and for
  $m < 0$ the value is $\big(a^{1/n}\big)^{m} = \Big(\big(a^{1/n}\big)^{-m}\Big)^{-1}$
  ([[lem-power-laws]], claim 2), the inverse of a positive element, hence positive
  ([[lem-of-inverse-positive]]). Note that [[lem-power-monotone]] is stated for
  natural exponents only, so it does not by itself settle the negative case; that
  is what the inverse step is for. The exponent laws are
  [[lem-rational-power-laws]] and the order behaviour is
  [[lem-rational-power-monotone]].
- **The exponent is a rational, never a real.** Nothing on this page is a limit,
  a series or a continuous function, and $a^{r}$ is computed in finitely many
  field operations once the root is available. What would be needed to go
  further, why it is deferred here, and where the library later defines $a^{x}$
  for real $x$ are recorded in [[rem-real-exponents-deferred]].
- The convention $0^0 = 1$ of [[def-integer-power]] is untouched: $r = 0$ is not
  covered by the supplementary clause, which asks for $r > 0$. So $0^0 = 1$ while
  $0^{r} = 0$ for every rational $r > 0$. There is no inconsistency, only the
  familiar fact that the two-variable function $(a, r) \mapsto a^{r}$ has no
  continuous extension to $(0,0)$, a statement this library cannot even make yet.
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

### `lem-alternating-sequence`

````markdown
---
id: lem-alternating-sequence
kind: lemma
title: "The even and odd index maps and the alternating sequence: strictly increasing $e, o$ with $\\mathbb{N}$ their disjoint union, and the unique $(s_k)$ with $s_0 = 1$, $s_{\\sigma(k)} = -s_k$, which satisfies $|s_k| = 1$, $s \\circ e \\equiv 1$ and $s \\circ o \\equiv -1$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-recursion, thm-induction-principle, lem-index-map-grows, def-sequence, def-natural-numbers, def-nat-addition, def-nat-order, thm-nat-linear-order, lem-nat-successor-neq-self, def-abs-value, lem-of-abs-value, def-real-order, cor-of-one-positive, lem-of-add-order, def-complete-ordered-field, def-ordered-field, def-field]
justified_by: []
forward_refs: [ex-two-subsequential-limits, cex-unbounded-with-convergent-subsequence]
aliases: []
landmark: false
proof_strategy: induction
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
    - title: "Parity (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Parity_(mathematics)"
    - title: "Subsequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subsequence"
    - title: "T. Tao, Analysis I, 3rd ed., §2.1 and §6.4 (recursive definitions; subsequences)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
---

## Statement

Let $\sigma$ be the successor on $\mathbb{N}$ ([[def-natural-numbers]]). There are
functions $e, o : \mathbb{N} \to \mathbb{N}$ and a sequence $(s_k)$ of reals
([[def-sequence]]) with the following properties.

1. **The index maps.** $e$ is the unique function with
   $e_0 = 0$ and $e_{\sigma(j)} = \sigma(\sigma(e_j))$, and $o$ the unique
   function with $o_0 = \sigma(0)$ and $o_{\sigma(j)} = \sigma(\sigma(o_j))$.
   Both are **strictly increasing**.
2. **The partition.** $\mathbb{N}$ is the **disjoint union** of the ranges of $e$
   and of $o$: every natural number is $e_i$ for exactly one $i$ or $o_i$ for
   exactly one $i$, and never both.
3. **The alternating sequence.** $(s_k)$ is the **unique** sequence of reals with
   $$s_0 = 1, \qquad s_{\sigma(k)} = -s_k \quad (k \in \mathbb{N}).$$
4. **Its values.** $|s_k| = 1$ for every $k$, so $(s_k)$ is bounded; and
   $$s_{e_j} = 1, \qquad s_{o_j} = -1 \qquad (j \in \mathbb{N}),$$
   that is $s \circ e$ is constantly $1$ and $s \circ o$ constantly $-1$.

This is the sequence usually written $s_k = (-1)^k$, with $e_j = 2j$ and
$o_j = 2j+1$, presented by the recursions that its proofs actually use. It is
collected here once because three separate items on this page and its companion
need an alternating or interleaved witness, and rebuilding the recursion inside
each of them is what this lemma exists to prevent.

## Facts & Assumptions

**Given:** By the recursion theorem ([[thm-recursion]]) applied to the set $\mathbb{R}$, the element $1$ and the function $u \mapsto -u$, the unique sequence $(s_k)$ of reals with $s_0 = 1$ and $s_{\sigma(k)} = -s_k$; applied to the set $\mathbb{N}$, the element $0$ and the function $i \mapsto \sigma(\sigma(i))$, the unique $e : \mathbb{N} \to \mathbb{N}$ with $e_0 = 0$ and $e_{\sigma(j)} = \sigma(\sigma(e_j))$; and applied to $\mathbb{N}$, the element $\sigma(0)$ and the same function, the unique $o : \mathbb{N} \to \mathbb{N}$ with $o_0 = \sigma(0)$ and $o_{\sigma(j)} = \sigma(\sigma(o_j))$ ([[def-natural-numbers]], [[def-sequence]]).

[L1] Recursion theorem, including its uniqueness clause ([[thm-recursion]]).

[L2] Induction principle ([[thm-induction-principle]]).

[L3] Order on $\mathbb{N}$: $i < \sigma(i)$ for every $i$, since $\sigma(i) = i + 1$ gives $i \le \sigma(i)$ and $\sigma(i) \ne i$; and the order is transitive and total ([[def-nat-order]], [[def-nat-addition]], [[lem-nat-successor-neq-self]], [[thm-nat-linear-order]]).

[L4] Consecutive comparisons suffice: if $n_i < n_{\sigma(i)}$ for every $i$ then $n$ is strictly increasing ([[lem-index-map-grows]]).

[L5] Absolute value and field arithmetic: $|-u| = |u|$ ([[lem-of-abs-value]]); $|v| = v$ whenever $v \ge 0$ ([[def-abs-value]], [[def-real-order]]); and $-(-u) = u$ ([[def-field]]).

[L6] Order in $\mathbb{R}$: $0 < 1$ ([[cor-of-one-positive]]), sums of positives are positive and adding a constant preserves the order ([[lem-of-add-order]], [[def-complete-ordered-field]], [[def-ordered-field]]), so $1 - (-1) = 1 + 1 > 0$ and hence $-1 < 1$; in particular $1 \ne -1$.

## Proof

**Proof technique:** induction.

1.1 Base case for claim 4: $|s_0| = |1| = 1$, since $1 > 0$ makes $|1| = 1$. [given, L5, L6, base]

1.2 Inductive hypothesis: fix $k \in \mathbb{N}$ and assume $|s_k| = 1$. [ih]

1.3 Both index maps satisfy consecutive strict comparisons: $e_j < \sigma(e_j) < \sigma(\sigma(e_j)) = e_{\sigma(j)}$, and likewise $o_j < o_{\sigma(j)}$, so $e$ and $o$ are strictly increasing and claim 1 holds, its uniqueness part being the uniqueness clause of the recursion theorem. [given, L1, L3, L4]

1.4 By induction, $s_{e_j} = 1$ for every $j$: the base case is $s_{e_0} = s_0 = 1$, and if $s_{e_j} = 1$ then $s_{e_{\sigma(j)}} = s_{\sigma(\sigma(e_j))} = -s_{\sigma(e_j)} = -(-s_{e_j}) = s_{e_j} = 1$. [given, L1, L2, L5]

1.5 By induction, $s_{o_j} = -1$ for every $j$: the base case is $s_{o_0} = s_{\sigma(0)} = -s_0 = -1$, and if $s_{o_j} = -1$ then $s_{o_{\sigma(j)}} = s_{\sigma(\sigma(o_j))} = -(-s_{o_j}) = s_{o_j} = -1$. [given, L1, L2, L5]

1.6 By induction on $n$, every natural number satisfies: either $n = e_i$ and $\sigma(n) = o_i$ for some $i$, or $n = o_i$ and $\sigma(n) = e_{\sigma(i)}$ for some $i$. The base case is $0 = e_0$ with $\sigma(0) = o_0$. For the successor step, if $n = e_i$ and $\sigma(n) = o_i$ then $\sigma(n) = o_i$ and $\sigma(\sigma(n)) = \sigma(\sigma(e_i)) = e_{\sigma(i)}$, which is the second alternative at $\sigma(n)$; and if $n = o_i$ and $\sigma(n) = e_{\sigma(i)}$ then $\sigma(n) = e_{\sigma(i)}$ and $\sigma(\sigma(n)) = \sigma(\sigma(o_i)) = o_{\sigma(i)}$, which is the first alternative at $\sigma(n)$. [given, L1, L2]

1.7 The sequence $(s_k)$ is the unique sequence of reals with $s_0 = 1$ and $s_{\sigma(k)} = -s_k$, by the uniqueness clause of the recursion theorem: this is claim 3. [given, L1]

2.1 Successor step for claim 4: $|s_{\sigma(k)}| = |-s_k| = |s_k| = 1$. [step 1.2, L5]

2.2 In particular every natural number lies in the range of $e$ or in the range of $o$, since each alternative of step 1.6 exhibits $n$ as such a value. [step 1.6]

2.3 The two ranges are disjoint: if $e_i = o_j$ for some $i, j$ then $1 = s_{e_i} = s_{o_j} = -1$, contradicting $1 \ne -1$. [step 1.4, step 1.5, L6]

2.4 Each of $e$ and $o$ is injective, being strictly increasing, so a natural number in the range of $e$ is $e_i$ for exactly one $i$, and likewise for $o$. [step 1.3, L3]

3.1 By the induction principle, $|s_k| = 1$ for every $k \in \mathbb{N}$; hence $|s_k| \le 1$ at every index and $(s_k)$ is bounded. Together with steps 1.4 and 1.5 this is claim 4. [step 1.1, step 2.1, step 1.4, step 1.5, L2]

4.1 Claim 2 follows: by step 2.2 every natural is in one of the two ranges, by step 2.3 not in both, and by step 2.4 the index realising it is unique. Claims 1, 2, 3 and 4 are therefore all established. [step 2.2, step 2.3, step 3.1, step 2.4, step 1.3, step 1.7, discharge-induction] ∎

## Remarks

- **Why the recursion rather than $(-1)^k$.** Written as a power, every one of the
  four claims would have to be unwound into the two recursion equations before it
  could be proved; written as a recursion, each is a two-line induction. The
  identification with $(-1)^k$ is available ([[def-integer-power]]) and is used
  nowhere.

- **The parity statement is genuinely proved, not assumed.** Claim 2 is where the
  work is: the covering half is the interleaved induction of step 1.6, which
  tracks $n$ and $\sigma(n)$ together because neither alone is preserved by the
  successor, and the disjointness half is settled by the *sequence*, since
  $s$ takes the value $1$ on one range and $-1$ on the other and $1 \ne -1$.
  Using the sequence to separate the two ranges is shorter than any direct parity
  argument and needs no arithmetic on $\mathbb{N}$ beyond the successor.

- **What consumes this lemma.** [[fs-convergent-subsequence-implies-bounded]]
  interleaves a constant sequence with an unbounded one along $e$ and $o$;
  [[ex-two-subsequential-limits]] multiplies $s$ by a null perturbation to get a
  sequence with exactly two subsequential limits; and
  [[cex-unbounded-with-convergent-subsequence]] is the witness for the first of
  those. The same sequence, built inline, refutes
  [[fs-bounded-implies-convergent]] on the previous page; that item predates this
  lemma and is left as it stands.
````

### `lem-of-abs-value`

````markdown
---
id: lem-of-abs-value
kind: lemma
title: "Basic properties of the absolute value"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-abs-value, def-ordered-field, lem-of-mult-neg, lem-of-sign-rules]
aliases: []
landmark: false
short: "|x| properties"
proof_strategy: cases
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
    - title: "Purdue University analysis notes: Ordered fields and absolute value"
      url: "https://www.math.purdue.edu/~gcavigli/Swanson.pdf"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \in F$, with
$|x|$ the absolute value ([[def-abs-value]]). Then

$$|x| \ge 0; \quad |x| = 0 \iff x = 0; \quad -|x| \le x \le |x|; \quad |-x| = |x|; \quad |xy| = |x|\,|y|;$$

and, for every $c > 0$, one has $|x| < c \iff -c < x < c$.

## Facts & Assumptions

**Given:** An ordered field $F$ and elements $x, y \in F$.

[L1] Absolute value: $|u| = u$ if $u \ge 0$, and $|u| = -u$ if $u < 0$ ([[def-abs-value]]).

[L2] Ordered-field order: trichotomy holds (for each $u$ exactly one of $u > 0$, $u = 0$, $u < 0$), $a < b$ means $b - a$ is positive, and sums and products of positives are positive ([[def-ordered-field]]).

[L3] Signs in products: $(-a)b = -(ab)$ and $(-a)(-b) = ab$ ([[lem-of-mult-neg]]).

[L4] Sign rules: a product of two elements of the same sign is positive, and a product of two elements of opposite sign is negative ([[lem-of-sign-rules]]).

## Proof

**Proof technique:** cases.

1.1 Case $x > 0$: by [L1] $|x| = x > 0$, so $|x| \ge 0$ and $|x| \ne 0$; since $-x < 0$ we get $|-x| = -(-x) = x = |x|$ by [L1], and $-|x| = -x < 0 < x = |x|$, so $-|x| \le x \le |x|$. [assume-case pos, L1, L2, algebra]

1.2 Case $x = 0$: then $|x| = |0| = 0$, so $|x| \ge 0$ holds with $|x| = 0$ and $x = 0$, while $|-x| = |0| = |x|$ and $-|x| = 0 \le 0 \le 0 = |x|$. [assume-case zero, L1]

1.3 Case $x < 0$: by [L1] $|x| = -x$, and [L2] gives $-x > 0$, so $|x| > 0$ and $|x| \ne 0$; here $|-x| = -x = |x|$ by [L1], and $-|x| = -(-x) = x \le x$ while $x < 0 < -x = |x|$, so $-|x| \le x \le |x|$. [assume-case neg, L1, L2, algebra]

1.4 Case $x = 0$ or $y = 0$: then $xy = 0$, so $|xy| = 0$, and one of $|x|, |y|$ is $0$, whence $|x|\,|y| = 0 = |xy|$. [assume-case zerofactor, L1]

1.5 Case $x, y$ have the same sign (both positive or both negative): by [L4] $xy > 0$, so $|xy| = xy$, while $|x|\,|y| = xy$ by [L3] (for $x, y < 0$ this is $(-x)(-y) = xy$), hence $|xy| = |x|\,|y|$. [assume-case same, L1, L3, L4]

1.6 Case $x, y$ have opposite signs (one positive, one negative): by [L4] $xy < 0$, so $|xy| = -(xy)$, while $|x|\,|y| = -(xy)$ by [L3] (namely $x(-y)$ or $(-x)y$), hence $|xy| = |x|\,|y|$. [assume-case opposite, L1, L3, L4]

2.1 By trichotomy [L2] each $x$ lies in exactly one of the cases 1.1-1.3, and in each we verified $|x| \ge 0$, that $|x| = 0 \iff x = 0$, that $|-x| = |x|$, and that $-|x| \le x \le |x|$; hence all four hold for every $x$. [step 1.1, step 1.2, step 1.3, cases-exhaustive]

2.2 By trichotomy [L2] each pair $x, y$ lies in exactly one of the cases 1.4-1.6, and in each $|xy| = |x|\,|y|$; hence $|xy| = |x|\,|y|$ for all $x, y$. [step 1.4, step 1.5, step 1.6, cases-exhaustive]

3.1 Let $c > 0$: if $|x| < c$ then $-c < -|x| \le x \le |x| < c$ by [step 2.1] and [L2], so $-c < x < c$; conversely if $-c < x < c$ then both $x < c$ and $-x < c$, and since $|x|$ equals $x$ or $-x$ by [L1], we get $|x| < c$, so $|x| < c \iff -c < x < c$. [step 2.1, L1, L2] ∎
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

### `thm-abel-test`

````markdown
---
id: thm-abel-test
kind: theorem
title: "Abel's test: if $\\sum a_k$ converges and $(b_k)$ is monotone and bounded then $\\sum a_k b_k$ converges"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-dirichlet-test, def-monotone-sequence, cor-monotone-converges-iff-bounded, lem-convergent-implies-bounded, lem-series-linearity, thm-algebra-of-limits, def-series, def-real-limit]
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
    - title: "Abel's test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Abel%27s_test"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Thomson, Bruckner, and Bruckner, Elementary Real Analysis"
      url: "https://people.math.sc.edu/girardi/m5545/TBB-AllChapters-Landscape.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ and $(b_k)$ be sequences of reals. If $\sum a_k$ converges
([[def-series]]) and $(b_k)$ is monotone ([[def-monotone-sequence]]) and bounded,
then $\sum a_k b_k$ converges, and its sum is

$$\sum_{k=0}^{\infty} a_k b_k \;=\; \Bigl(\sum_{k=0}^{\infty} a_k (b_k - b)\Bigr) + b \sum_{k=0}^{\infty} a_k, \qquad b := \lim_k b_k ,$$

the limit $b$ existing because a monotone bounded sequence converges
([[cor-monotone-converges-iff-bounded]]).

Compared with [[thm-dirichlet-test]] the hypotheses trade places: there $\sum a_k$
need only have bounded partial sums while $(b_k)$ must tend to $0$; here
$\sum a_k$ must converge while $(b_k)$ need only be monotone with *some* limit.
Neither test implies the other.

## Facts & Assumptions

**Given:** Sequences $(a_k)$ and $(b_k)$ of reals with $\sum a_k$ convergent and $(b_k)$ monotone and bounded, and the partial sums $A_n = \sum_{k<n} a_k$ ([[def-series]]).

[L1] A monotone sequence of reals converges if and only if it is bounded ([[cor-monotone-converges-iff-bounded]]).

[L2] Monotone means nondecreasing or nonincreasing, and these are the only two possibilities ([[def-monotone-sequence]]).

[L3] A convergent sequence of reals is bounded ([[lem-convergent-implies-bounded]]).

[L4] Dirichlet's test: if the partial sums of $\sum x_k$ are bounded and $(y_k)$ is nonincreasing with $y_k \to 0$, then $\sum x_k y_k$ converges ([[thm-dirichlet-test]]).

[L5] Linearity of series: if $\sum x_k$ and $\sum y_k$ converge then $\sum(x_k + y_k)$ converges to the sum of the sums, and $\sum c\,x_k$ converges to $c$ times the sum ([[lem-series-linearity]]).

[L6] Algebra of limits: a convergent sequence minus a constant converges to the limit minus that constant, and multiplying a convergent sequence by $-1$ negates the limit ([[thm-algebra-of-limits]], [[def-real-limit]]).

## Proof

**Proof technique:** cases.

1.1 Assume $(b_k)$ is nonincreasing. [assume-case noninc]

1.2 Assume instead $(b_k)$ is nondecreasing. [assume-case nondec]

1.3 In either case $(b_k)$ is monotone and bounded, so it converges; write $b$ for its limit and put $c_k := b_k - b$, a sequence converging to $0$. [given, L1, L6]

1.4 The series $\sum a_k$ converges, so its partial sums $A_n$ form a convergent sequence and are therefore bounded. [given, L3]

2.1 In the case where $(b_k)$ is nonincreasing, $(c_k)$ is nonincreasing as well, since it differs from $(b_k)$ by the constant $b$. [step 1.1, step 1.3, L2]

2.2 In the case where $(b_k)$ is nondecreasing, $(-c_k)$ is nonincreasing and converges to $0$. [step 1.2, step 1.3, L2, L6]

3.1 In the nonincreasing case, $(A_n)$ is bounded and $(c_k)$ is nonincreasing with limit $0$, so $\sum a_k c_k$ converges by Dirichlet's test. [step 1.4, step 2.1, L4]

3.2 In the nondecreasing case, $(A_n)$ is bounded and $(-c_k)$ is nonincreasing with limit $0$, so $\sum a_k(-c_k)$ converges by Dirichlet's test; multiplying by the constant $-1$, $\sum a_k c_k$ converges. [step 1.4, step 2.2, L4, L5]

4.1 So in both cases $\sum a_k c_k$ converges; and $\sum b\,a_k$ converges, being a constant multiple of the convergent $\sum a_k$. [step 3.1, step 3.2, L5]

5.1 Since $a_k b_k = a_k c_k + b\,a_k$ for every $k$, the series $\sum a_k b_k$ converges, with sum $\sum_{k=0}^{\infty} a_k c_k + b \sum_{k=0}^{\infty} a_k$, which is the displayed formula. [step 1.3, step 4.1, L5]

6.1 A monotone sequence is nonincreasing or nondecreasing and there is no third possibility, so the two cases cover every hypothesis of the theorem. [step 5.1, L2, cases-exhaustive] ∎

## Remarks

- **Both monotonicity directions have to be handled, and only one of them is Dirichlet's hypothesis.** [[thm-dirichlet-test]] requires a *nonincreasing* factor tending to $0$. For a nondecreasing bounded $(b_k)$ the shifted sequence $b_k - b$ is nondecreasing and nonpositive, so it is $b - b_k$ that Dirichlet's test accepts, and the sign is absorbed afterwards by linearity. Dirichlet's test could equally have been stated with "monotone" in place of "nonincreasing", since the two forms are equivalent for a factor tending to $0$ ([[thm-dirichlet-test]], remarks); the proof below takes the nonincreasing form as given and does the sign bookkeeping explicitly, which is why both directions appear.

- **Boundedness of $(b_k)$ is used twice.** Once through [[cor-monotone-converges-iff-bounded]] to produce the limit $b$, and then implicitly in the decomposition $b_k = (b_k - b) + b$, which would name nothing if the limit did not exist. Monotone and *unbounded* is one of the two cases the theorem excludes; the other is bounded and *not* monotone, and it is that one the companion counterexample to Abel's test on the examples page settles, by showing that dropping monotonicity alone already destroys the conclusion.

- **The hypothesis on $\sum a_k$ cannot be weakened to bounded partial sums.** With $a_k = (-1)^k$ and $b_k = 1$ the partial sums of $\sum a_k$ are bounded and $(b_k)$ is monotone and bounded, yet $\sum a_k b_k = \sum (-1)^k$ diverges. What Dirichlet's test adds in that situation is the hypothesis $b_k \to 0$, which fails here.
````

### `thm-alternating-series-test`

````markdown
---
id: thm-alternating-series-test
kind: theorem
title: "The alternating series test: if $(b_k)$ is nonincreasing with $b_k \\to 0$ then $\\sum_{k} (-1)^{k} b_k$ converges, the sum lies between any two consecutive partial sums, and the error after $n$ terms is at most $b_n$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-dirichlet-test, lem-alternating-sequence, def-monotone-sequence, lem-limit-preserves-order, lem-subsequence-inherits-limit, thm-induction-principle, lem-of-abs-value, def-series, def-real-limit]
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
    - title: "Alternating series test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Alternating_series_test"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "N. Donaldson, Math 140A: Series"
      url: "https://www.math.uci.edu/~ndonalds/math140a/3series.html"
pipeline_run: null
---

## Statement

Let $(\varepsilon_k)$ be the alternating sequence of [[lem-alternating-sequence]],
that is the unique sequence of reals with $\varepsilon_0 = 1$ and
$\varepsilon_{k+1} = -\varepsilon_k$, which is what is usually written
$\varepsilon_k = (-1)^k$; let $e$ and $o$ be its even and odd index maps, so that
$\varepsilon_{e_j} = 1$, $\varepsilon_{o_j} = -1$, and every natural number is
$e_j$ for exactly one $j$ or $o_j$ for exactly one $j$.

Let $(b_k)$ be a sequence of reals that is nonincreasing
([[def-monotone-sequence]]) and converges to $0$ ([[def-real-limit]]); then
$b_k \ge 0$ for every $k$. Write $t_n := \sum_{k<n} \varepsilon_k b_k$ for the
partial sums ([[def-series]]). Then:

1. the series $\sum \varepsilon_k b_k$ converges; write $L$ for its sum;
2. $t_{e_j} \le L \le t_{o_j}$ for every $j \in \mathbb{N}$, and for every
   $n \in \mathbb{N}$ the sum $L$ lies between the two consecutive partial sums
   $t_n$ and $t_{n+1}$;
3. $|L - t_n| \le b_n$ for every $n \in \mathbb{N}$.

Claim 3 is the error bound: the partial sum $t_n$, which uses the $n$ terms
$\varepsilon_0 b_0, \dots, \varepsilon_{n-1}b_{n-1}$, differs from the sum by at
most the first term omitted.

**Only claim 1 is a corollary of [[thm-dirichlet-test]].** Claims 2 and 3 are not:
they come from the interlacing of the even-index and odd-index partial sums, and
that argument is carried out below rather than smuggled into the Dirichlet
estimate, which produces no bracketing at all.

## Facts & Assumptions

**Given:** A nonincreasing sequence $(b_k)$ of reals with $b_k \to 0$, the alternating sequence $(\varepsilon_k)$ with its index maps $e$ and $o$, and the partial sums $t_n = \sum_{k<n} \varepsilon_k b_k$.

[L1] The alternating sequence and its index maps: $\varepsilon_0 = 1$, $\varepsilon_{k+1} = -\varepsilon_k$, $|\varepsilon_k| = 1$; $e_0 = 0$ and $e_{j+1} = e_j + 2$; $o_0 = 1$ and $o_{j+1} = o_j + 2$; both $e$ and $o$ are strictly increasing; $\mathbb{N}$ is the disjoint union of their ranges; $\varepsilon_{e_j} = 1$ and $\varepsilon_{o_j} = -1$ ([[lem-alternating-sequence]]).

[L2] Nonincreasing means $b_j \ge b_k$ whenever $j \le k$ ([[def-monotone-sequence]]).

[L3] Limits preserve non-strict inequalities holding eventually ([[lem-limit-preserves-order]], [[def-real-limit]]).

[L4] Dirichlet's test: if the partial sums of $\sum x_k$ are bounded and $(y_k)$ is nonincreasing with $y_k \to 0$, then $\sum x_k y_k$ converges ([[thm-dirichlet-test]]).

[L5] A subsequence of a convergent sequence converges to the same limit ([[lem-subsequence-inherits-limit]]).

[L6] Partial sums satisfy $t_0 = 0$ and $t_{n+1} = t_n + \varepsilon_n b_n$ ([[def-series]]).

[L7] The principle of induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L8] Absolute value: $|xy| = |x|\,|y|$ and $|x| \ge 0$ ([[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 For each fixed $k$ the inequality $b_m \le b_k$ holds for all $m \ge k$, and $(b_m)_m$ converges to $0$ while the constant sequence with value $b_k$ converges to $b_k$; hence $b_k \ge 0$. [given, L2, L3]

1.2 Writing $A_n = \sum_{k<n}\varepsilon_k$, an induction gives that for every $n$ either $A_n = 0$ and $\varepsilon_n = 1$, or $A_n = 1$ and $\varepsilon_n = -1$: at $n = 0$ we have $A_0 = 0$ and $\varepsilon_0 = 1$; and if $A_n = 0$ and $\varepsilon_n = 1$ then $A_{n+1} = 1$ and $\varepsilon_{n+1} = -1$, while if $A_n = 1$ and $\varepsilon_n = -1$ then $A_{n+1} = 0$ and $\varepsilon_{n+1} = 1$. In particular $|A_n| \le 1$ for every $n$. [L1, L6, L7]

1.3 For every $j$ one has $o_j = e_j + 1$ and $e_{j+1} = o_j + 1$, by induction: $o_0 = 1 = e_0 + 1$; and if $o_j = e_j + 1$ then $e_{j+1} = e_j + 2 = o_j + 1$ and $o_{j+1} = o_j + 2 = e_{j+1} + 1$. [L1, L7]

1.4 By [L6], $t_{n+1} - t_n = \varepsilon_n b_n$ for every $n$; hence $t_{e_j + 1} = t_{e_j} + b_{e_j}$ and $t_{o_j + 1} = t_{o_j} - b_{o_j}$. [L1, L6]

2.1 The partial sums of $\sum \varepsilon_k$ are bounded by step 1.2 and $(b_k)$ is nonincreasing with limit $0$, so $\sum \varepsilon_k b_k$ converges by Dirichlet's test; write $L$ for its sum, so that $t_n \to L$. [step 1.2, given, L4]

2.2 Using step 1.3, $t_{o_j} = t_{e_j + 1} = t_{e_j} + b_{e_j}$ and $t_{e_{j+1}} = t_{o_j + 1} = t_{o_j} - b_{o_j}$, so $t_{e_{j+1}} = t_{e_j} + b_{e_j} - b_{o_j}$ and $t_{o_{j+1}} = t_{e_{j+1}} + b_{e_{j+1}} = t_{o_j} - b_{o_j} + b_{e_{j+1}}$. [step 1.3, step 1.4]

3.1 Since $e_j < o_j < e_{j+1}$ and $(b_k)$ is nonincreasing, $b_{e_j} - b_{o_j} \ge 0$ and $b_{e_{j+1}} - b_{o_j} \le 0$; so by step 2.2 the sequence $(t_{e_j})_j$ is nondecreasing and the sequence $(t_{o_j})_j$ is nonincreasing. [step 1.3, step 2.2, L2]

3.2 The maps $e$ and $o$ are strictly increasing, so $(t_{e_j})_j$ and $(t_{o_j})_j$ are subsequences of $(t_n)$ and both converge to $L$. [step 2.1, L1, L5]

4.1 Fix $j$. For every $m \ge j$ one has $t_{e_j} \le t_{e_m}$, and $(t_{e_m})_m$ converges to $L$, so $t_{e_j} \le L$; symmetrically $t_{o_j} \ge L$. This is the first half of claim 2. [step 3.1, step 3.2, L3]

5.1 Let $n \in \mathbb{N}$. If $n = e_j$ then $t_n = t_{e_j} \le L$ and $t_{n+1} = t_{e_j+1} = t_{o_j} \ge L$; if $n = o_j$ then $t_n = t_{o_j} \ge L$ and $t_{n+1} = t_{o_j+1} = t_{e_{j+1}} \le L$. Since every $n$ is of exactly one of these two forms, $L$ always lies between $t_n$ and $t_{n+1}$, which is the second half of claim 2. [step 1.3, step 4.1, L1]

6.1 Consequently $|L - t_n| \le |t_{n+1} - t_n| = |\varepsilon_n b_n| = |\varepsilon_n|\,b_n = b_n$ for every $n$, using $b_n \ge 0$ and $|\varepsilon_n| = 1$; this is claim 3. [step 5.1, step 1.4, step 1.1, L1, L8] ∎

## Remarks

- **The two hypotheses are not interchangeable with "$b_k \to 0$" alone.** A null sequence that is not monotone can make $\sum \varepsilon_k b_k$ diverge, and the bracketing of step 3.1 is exactly where monotonicity enters; the error bound is false without it. The test as stated is the classical Leibniz criterion.

- **Why the index maps rather than "$2j$" and "$2j+1$".** The even and odd index maps come from [[lem-alternating-sequence]] together with the parity object itself, and step 1.3 is the only arithmetic needed about them. Rebuilding $(-1)^k$ by a fresh recursion inside this proof, and then proving afresh that the even indices and the odd indices partition $\mathbb{N}$, is precisely what that lemma exists to prevent.

- **What the test does not give.** It produces the sum $L$ as a limit and bounds the error, and it identifies $L$ with no closed expression. For the alternating harmonic series the value is not available at this point in the reading order; see [[rem-sums-proved-to-exist-but-not-evaluated]].
````

### `thm-nth-roots-exist`

````markdown
---
id: thm-nth-roots-exist
kind: theorem
title: "Existence and uniqueness of $n$-th roots: a unique $a^{1/n} \\ge 0$ with $(a^{1/n})^n = a$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-complete-ordered-field, lem-sup-epsilon, lem-sup-unique, lem-power-monotone, lem-power-difference-factorisation, def-bounded-set, lem-of-add-order, thm-of-square-roots, def-integer-power, lem-of-sign-rules, lem-of-inverse-positive, cor-of-one-positive, lem-of-zero-mult, lem-of-naturals-positive, lem-of-q-embeds, def-ordered-field]
justified_by: []
aliases: [thm-nth-root, def-nth-root]
landmark: true
short: "unique $s\\ge0$ with $s^n=a$"
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
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I"
      url: "https://www.jirka.org/ra/realanal.pdf"
    - title: "Radicals and rational exponents (Emory University)"
      url: "https://mathcenter.oxford.emory.edu/site/math100/radicals/"
    - title: "Nth root (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nth_root"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 (Thm 1.21)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §5.6"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $\mathbb{R}$ be a complete ordered field ([[def-complete-ordered-field]]).
For every $a \in \mathbb{R}$ with $a \ge 0$ and every $n \in \mathbb{N}$ with
$n \ge 1$ there is a **unique** $s \in \mathbb{R}$ with $s \ge 0$ and $s^n = a$
([[def-integer-power]]); we write

$$s = a^{1/n} = \sqrt[n]{a}.$$

Moreover $a^{1/n} > 0$ when $a > 0$, and $a^{1/1} = a$.

**This generalises the published [[thm-of-square-roots]], and the case $n = 2$ is
not new.** That theorem already produces the unique $\sqrt{a} \ge 0$ with
$(\sqrt{a})^2 = a$, and it is cited as such throughout the library; the notation
$a^{1/2}$ introduced here is the same number. What is new is the passage to
general $n$: the completed square that drives the $n = 2$ argument has no direct
analogue, and its place is taken by the factorisation of $b^n - a^n$ and the
resulting Lipschitz estimate ([[lem-power-difference-factorisation]]).

## Facts & Assumptions

**Given:** A complete ordered field $\mathbb{R}$ ([[def-complete-ordered-field]]), that is, an ordered field ([[def-ordered-field]]) with the least-upper-bound property; an element $a \ge 0$; and a natural $n \ge 1$, with $\iota(n) \in \mathbb{R}$ written $n$ ([[lem-of-naturals-positive]], [[lem-of-q-embeds]]).

[L1] Least-upper-bound property: every nonempty subset of $\mathbb{R}$ that is bounded above ([[def-bounded-set]]) has a least upper bound, and it is unique, so the notation $\sup S$ is legitimate ([[def-complete-ordered-field]], [[lem-sup-unique]]).

[L2] Epsilon characterisation of the supremum: if $S$ is nonempty and bounded above and $u = \sup S$, then for every $\varepsilon > 0$ there is $t \in S$ with $u - \varepsilon < t$ ([[lem-sup-epsilon]]).

[L3] Monotonicity of powers ([[lem-power-monotone]]): $x \mapsto x^n$ is strictly increasing on $\{x \ge 0\}$ for $n \ge 1$, hence injective there; $x \ge 0$ implies $x^n \ge 0$ and $x > 0$ implies $x^n > 0$; and $x \ge 1$ implies $x^n \ge x$.

[L4] Lipschitz estimate ([[lem-power-difference-factorisation]]): if $0 \le x \le y \le B$ and $n \ge 1$ then $0 \le y^n - x^n \le n B^{\,n-1}(y - x)$.

[L5] Order arithmetic: adding a constant preserves the order and for $c > 0$, $x < y \iff cx < cy$ ([[lem-of-add-order]], [[lem-of-sign-rules]]), both stated there for the STRICT order alone, so where a $\le$ is added or scaled below the move is that statement together with the case of equality, settled by trichotomy ([[def-ordered-field]]); $1 > 0$, which is proved in [[cor-of-one-positive]] and stated by none of those three, hence $2 = 1 + 1 > 0$; and $0 < 2^{-1} < 1$, since $0 < 1 < 2$ gives $0 < 2^{-1} < 1^{-1} = 1$ ([[lem-of-inverse-positive]], claim 2).

[L6] Trichotomy: for $x, y \in \mathbb{R}$ exactly one of $x < y$, $x = y$, $y < x$ holds; consequently any two elements have a minimum ([[def-ordered-field]]).

[L7] A product with a zero factor vanishes: $0 \cdot x = x \cdot 0 = 0$ ([[lem-of-zero-mult]]).

## Proof

**Proof technique:** contradiction.

1.1 If $a = 0$ then $s = 0$ satisfies $s \ge 0$ and $s^n = 0 = a$, since $0^n = 0^{n-1} \cdot 0 = 0$ for $n \ge 1$; so existence holds in that case and we assume $a > 0$ from here on. [given, L3, L7, algebra]

1.2 Uniqueness holds as soon as a root exists: if $u, v \ge 0$ satisfy $u^n = v^n$, then strict monotonicity of $x \mapsto x^n$ on the nonnegatives rules out both $u < v$ and $v < u$, so $u = v$ by trichotomy. [L3, L6]

1.3 Define $S = \{t \in \mathbb{R} : t \ge 0 \text{ and } t^n \le a\}$; then $0 \in S$, because $0 \ge 0$ and $0^n = 0 \le a$, so $S$ is nonempty. [given, L3, L7]

1.4 The element $M := 1 + a$ is an upper bound of $S$: since $a > 0$ and $1 > 0$ we have $M > 1$ and $M > a$, so any $t > M$ satisfies $t > 1$, whence $t^n \ge t > M > a$ and $t \notin S$. [given, L3, L5]

2.1 By the least-upper-bound property $s := \sup S$ exists in $\mathbb{R}$; moreover $s \ge 0$ because $0 \in S$, and $s \le M$ because $M$ is an upper bound and $s$ is the least one. [L1, step 1.3, step 1.4]

3.1 Put $B := M + 1 = a + 2$; then $B > M \ge 1 > 0$, so $B^{\,n-1} > 0$ and $n B^{\,n-1} > 0$, and every $x$ with $0 \le x \le M + 1$ satisfies $0 \le x \le B$. [step 2.1, L3, L5]

3.2 Assume, for contradiction, that $s^n \ne a$; by trichotomy either $s^n < a$ or $s^n > a$. [assume-contra, step 2.1, L6]

4.1 (Case $s^n < a$.) Put $\delta := \min\{1, (a - s^n)(n B^{\,n-1})^{-1}\}$, which is $> 0$ since $a - s^n > 0$ and $n B^{\,n-1} > 0$, and put $h := 2^{-1}\delta$, so that $0 < h < \delta \le 1$ and $h < (a - s^n)(nB^{\,n-1})^{-1}$; then $0 \le s \le s + h \le M + 1 = B$, so the Lipschitz estimate gives $(s+h)^n - s^n \le nB^{\,n-1} h < a - s^n$, hence $(s+h)^n < a$ and $s + h \in S$, while $s + h > s$ contradicts that $s$ is an upper bound of $S$. [assume-case low, step 3.2, step 2.1, step 3.1, L4, L5, L6, choose]

4.2 (Case $s^n > a$.) Here $s > 0$, since $s = 0$ would give $s^n = 0 \le a$; put $\delta := \min\{s, (s^n - a)(nB^{\,n-1})^{-1}\} > 0$ and $h := 2^{-1}\delta$, so that $0 < h < s$ and $h < (s^n - a)(nB^{\,n-1})^{-1}$; then $0 \le s - h \le s \le B$, so the Lipschitz estimate gives $s^n - (s-h)^n \le nB^{\,n-1}h < s^n - a$, hence $(s-h)^n > a$; applying the epsilon characterisation with $\varepsilon = h$ produces $t \in S$ with $t > s - h \ge 0$, whence $t^n > (s-h)^n > a$ by strict monotonicity, contradicting $t \in S$. [assume-case high, step 3.2, step 2.1, step 3.1, L2, L3, L4, L5, L6, L7, choose]

5.1 Both cases of the disjunction in step 3.2 are impossible, so the assumption fails and $s^n = a$; this $s$ is the unique nonnegative $n$-th root of $a$ by step 1.2, it satisfies $s > 0$ when $a > 0$ because $s = 0$ would force $a = s^n = 0$, and at $n = 1$ the element $a$ itself is a nonnegative solution of $s^1 = a$, so $a^{1/1} = a$; writing $a^{1/n} = \sqrt[n]{a}$ for it, the case $n = 2$ recovers the already published $\sqrt{a}$ of [[thm-of-square-roots]]. [step 4.1, step 4.2, step 3.2, step 1.2, step 1.1, L3, L7, cases, discharge-contradiction] ∎
````

### `thm-of-square-roots`

````markdown
---
id: thm-of-square-roots
kind: theorem
title: "Square roots exist: a unique $\\sqrt{a} \\ge 0$ with $(\\sqrt{a})^2 = a$; the positives are $\\{x^2 : x \\neq 0\\}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-complete-ordered-field, lem-of-sign-rules, lem-of-square-monotone, lem-of-square-positive, prop-of-multiply-inequalities, def-ordered-field]
aliases: []
landmark: true
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 (Thm 1.21)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 8"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "University of Colorado analysis notes: The real numbers"
      url: "https://spot.colorado.edu/~baggett/chap1.pdf"
pipeline_run: null
---

## Statement

Let $F$ be a complete ordered field ([[def-complete-ordered-field]]). Then every
$a \in F$ with $a \ge 0$ has a **unique** $s \in F$ with $s \ge 0$ and $s^2 = a$;
we write $s = \sqrt{a}$. Consequently the positive elements of $F$ are exactly the
nonzero squares: $x > 0$ if and only if $x = y^2$ for some $y \neq 0$.

## Facts & Assumptions

**Given:** A complete ordered field $F$ ([[def-complete-ordered-field]]), that is, an ordered field ([[def-ordered-field]]) with the least-upper-bound property, and an element $a \in F$ with $a \ge 0$.

[L1] Every nonempty subset of $F$ that is bounded above has a least upper bound in $F$ ([[def-complete-ordered-field]]).

[L2] Sign and scaling rules: a product of positives is positive, and for $c > 0$ one has $x < y \iff cx < cy$ ([[lem-of-sign-rules]]).

[L3] Squaring is strictly monotone on the nonnegatives: if $0 \le x < y$ then $x^2 < y^2$; in particular squaring is injective on $\{x : x \ge 0\}$ ([[lem-of-square-monotone]]).

[L4] A nonzero square is positive: if $y \neq 0$ then $y^2 > 0$ ([[lem-of-square-positive]]).

[L5] Multiplying inequalities of positives: if $0 < x < y$ and $0 < u < v$ then $xu < yv$ ([[prop-of-multiply-inequalities]]).

## Proof

**Proof technique:** contradiction.

1.1 If $a = 0$, then $s = 0$ satisfies $s \ge 0$ and $s^2 = 0 = a$, so existence holds; assume henceforth $a > 0$. [given, algebra]

1.2 Uniqueness holds once a root exists: if $u, v \ge 0$ satisfy $u^2 = v^2$, then strict monotonicity of squaring on nonnegatives [L3] rules out both $u < v$ and $u > v$, forcing $u = v$; so at most one $s \ge 0$ has $s^2 = a$. [L3, given]

1.3 Define $S = \{ t \in F : t \ge 0 \text{ and } t^2 \le a \}$; then $0 \in S$ because $0 \ge 0$ and $0^2 = 0 \le a$, so $S \neq \emptyset$. [given, algebra]

1.4 The element $1 + a$ is an upper bound of $S$: since $a > 0$ we have $1 + a > 1$, so any $t > 1 + a$ has $t > 1$ and $t > 0$, whence $t^2 = t \cdot t > 1 \cdot t = t > 1 + a > a$, giving $t \notin S$. [given, L2]

2.1 By completeness [L1], $s := \sup S$ exists in $F$; and since $0 \in S$ we have $s \ge 0$. [L1, step 1.3, step 1.4]

3.1 Assume, for contradiction, that $s^2 \neq a$; by trichotomy either $s^2 < a$ or $s^2 > a$. [assume-contra, step 2.1]

4.1 (Case $s^2 < a$.) Choose $h$ with $0 < h < 1$ and $h < \dfrac{a - s^2}{2s + 1}$, possible since $a - s^2 > 0$ and $2s + 1 \ge 1 > 0$; then $h^2 = h \cdot h < h \cdot 1 = h$ and $h(2s+1) < a - s^2$, so $(s+h)^2 = s^2 + 2sh + h^2 < s^2 + 2sh + h = s^2 + h(2s+1) < a$, whence $s + h \in S$ with $s + h > s$, contradicting that $s$ is an upper bound of $S$. [assume-case low, step 3.1, step 2.1, L2, L5, choose]

4.2 (Case $s^2 > a$.) Here $s > 0$ since $s^2 > a \ge 0$; choose $h$ with $0 < h < s$ and $h < \dfrac{s^2 - a}{2s}$, so $2sh < s^2 - a$ and $(s-h)^2 = s^2 - 2sh + h^2 \ge s^2 - 2sh > a$, hence every $t \in S$ has $t^2 \le a < (s-h)^2$ with $t \ge 0$ and $s - h > 0$, so $t < s - h$ by [L3]; thus $s - h$ is an upper bound of $S$ with $s - h < s$, contradicting that $s$ is the least upper bound. [assume-case high, step 3.1, step 2.1, L3, choose]

5.1 Both cases of the disjunction in step 3.1 give a contradiction, so the assumption fails and $s^2 = a$: a unique (by step 1.2) $s = \sqrt{a} \ge 0$ with $s^2 = a$ exists, and applying this to any $x > 0$ writes $x = (\sqrt{x})^2$ with $\sqrt{x} \neq 0$ while conversely any nonzero square is positive by [L4], so the positive elements of $F$ are exactly the nonzero squares. [step 4.1, step 4.2, step 3.1, step 1.2, L4, cases, discharge-contradiction] ∎
````

### `thm-p-series-rational`

````markdown
---
id: thm-p-series-rational
kind: theorem
title: "For rational $p > 0$, $\\sum 1/k^p$ converges iff $p > 1$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-cauchy-condensation, thm-geometric-series, def-rational-power, lem-rational-power-monotone, lem-rational-power-laws, def-monotone-sequence, def-series, lem-of-inverse-positive, thm-nth-roots-exist, lem-of-naturals-positive, def-integer-power, lem-of-abs-value]
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
    - title: "Harmonic series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Harmonic_series_(mathematics)"
    - title: "Cauchy condensation test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_condensation_test"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.28)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "Stephen Semmes, Elements of Analysis"
      url: "https://math.rice.edu/~semmes/math331.pdf"
pipeline_run: null
---

## Statement

Let $p \in \mathbb{Q}$ with $p > 0$. For a natural number $k \ge 1$ write
$\iota(k) = k \cdot 1_{\mathbb{R}}$ for the canonical natural, which is positive
([[lem-of-naturals-positive]]), and write $k^{p} := \iota(k)^{p}$ for its rational
power ([[def-rational-power]]). Then

$$\sum_{k \ge 1} \frac{1}{k^{p}} \ \text{converges} \qquad \Longleftrightarrow \qquad p > 1 .$$

In particular the harmonic series $\sum_{k \ge 1} 1/k$ diverges, at $p = 1$, and
$\sum_{k \ge 1} 1/k^{2}$ converges, at $p = 2$.

**The index range is not cosmetic.** The series starts at $k = 1$ because
$1/0^{p}$ is undefined: [[def-rational-power]] gives $0^{p} = 0$ for rational
$p > 0$, and $0$ has no inverse. Sequences here are functions on $\mathbb{N}$ and
$\mathbb{N}$ contains $0$ ([[def-series]]), so the object named above is a series
from the starting index $1$ in the sense of [[def-series]], not a series of a
sequence on $\mathbb{N}$.

**The exponent is rational, and that is a limitation of this page.** Rational
powers of a positive base are what [[def-rational-power]] supplies; real exponents
require the exponential and the logarithm, which this library develops later. The
statement above is therefore the full $p$-series theorem for every exponent this
page can name.

## Facts & Assumptions

**Given:** A rational $p > 0$ and the family $a_k := 1/k^{p} = \iota(k)^{-p}$, defined for naturals $k \ge 1$ ([[def-rational-power]], [[def-series]]).

[L1] Rational powers of a positive base are positive, and $a^{r+s} = a^{r}a^{s}$, $(a^{r})^{s} = a^{rs}$, $a^{-r} = 1/a^{r}$ for $a > 0$ and rationals $r, s$ ([[lem-rational-power-laws]]).

[L2] Monotonicity of rational powers: for rational $t > 0$ and $0 < a < b$ one has $a^{t} < b^{t}$; and for $a > 1$ and rationals $r < s$ one has $a^{r} < a^{s}$ ([[lem-rational-power-monotone]]).

[L3] The integer power and the rational power agree at an integer exponent: for $a > 0$ and $n \in \mathbb{Z}$, $a^{n}$ read as in [[def-integer-power]] equals $a^{n}$ read as in [[def-rational-power]], since $n = n/1$ and $a^{1/1} = a$ ([[thm-nth-roots-exist]], [[def-rational-power]]). In particular $a^{0} = 1$.

[L4] Reciprocation reverses the order on the positives: $0 < a < b$ implies $0 < 1/b < 1/a$ ([[lem-of-inverse-positive]]).

[L5] Condensation: for a family $(x_k)_{k \ge 1}$ that is nonnegative and nonincreasing, $\sum_{k \ge 1} x_k$ converges if and only if $\sum_{j \ge 0} 2^{j} x_{2^{j}}$ converges ([[thm-cauchy-condensation]], [[def-monotone-sequence]]).

[L6] The geometric series: $\sum_{j \ge 0} r^{j}$ converges if and only if $|r| < 1$ ([[thm-geometric-series]], [[lem-of-abs-value]]).

[L7] The canonical naturals are positive and order preserving: $0 < \iota(1) \le \iota(j) < \iota(k)$ for naturals $1 \le j < k$, and $\iota(2) = 2 > 1$ ([[lem-of-naturals-positive]]).

## Proof

**Proof technique:** direct.

1.1 For every natural $k \ge 1$ the base $\iota(k)$ is positive, so $a_k = \iota(k)^{-p}$ is defined and positive; in particular the family is nonnegative. [given, L7, L1]

1.2 For naturals $1 \le j < k$ we have $0 < \iota(j) < \iota(k)$, hence $\iota(j)^{p} < \iota(k)^{p}$ since $p > 0$, hence $a_j = 1/\iota(j)^{p} > 1/\iota(k)^{p} = a_k$; and for $j = k$ the two are equal. So $a_j \ge a_k$ whenever $1 \le j \le k$. [given, L7, L2, L4, L1]

1.3 For every $j \in \mathbb{N}$ the base $2^{j}$ is positive and, reading the exponent $j$ as a rational, $2^{j} a_{2^{j}} = 2^{j} \big(2^{j}\big)^{-p} = 2^{j} \cdot 2^{-jp} = 2^{\,j - jp} = 2^{\,(1-p)j} = \big(2^{\,1-p}\big)^{j}$. [L1, L3, L7, algebra]

1.4 Since $2 > 1$, the map $t \mapsto 2^{t}$ is strictly increasing on $\mathbb{Q}$ and $2^{0} = 1$; hence $r = 2^{\,1-p} < 1 = 2^{0}$ holds exactly when $1 - p < 0$, that is exactly when $p > 1$. [L2, L3, L7]

2.1 Condensation applies to $(a_k)_{k \ge 1}$: $\sum_{k \ge 1} a_k$ converges if and only if $\sum_{j \ge 0} 2^{j} a_{2^{j}}$ converges. [step 1.1, step 1.2, L5]

2.2 So the condensed series is the geometric series $\sum_{j \ge 0} r^{j}$ with $r := 2^{\,1-p}$, and $r > 0$, so $|r| = r$. [step 1.3, L1, L3]

3.1 By the geometric series theorem, $\sum_{j \ge 0} r^{j}$ converges if and only if $r < 1$. [step 2.2, L6]

4.1 Chaining the three equivalences: $\sum_{k \ge 1} 1/k^{p}$ converges $\iff$ the condensed series converges $\iff$ $r < 1$ $\iff$ $p > 1$. [step 2.1, step 2.2, step 3.1, step 1.4] ∎

## Remarks

- **Where the threshold comes from.** Condensation turns the $p$-series into a geometric series of ratio $2^{1-p}$, and the geometric threshold $r = 1$ pulls back to $p = 1$. Nothing about the number $1$ is special to the $p$-series; it is the exponent at which the condensed terms stop shrinking.

- **At $p = 1$ the condensed series is $\sum_{j \ge 0} 1$.** Its terms do not tend to $0$, so it diverges, and with it the harmonic series. That instance is worked out on the companion page, together with the older block argument that does not use condensation at all.

- **Only rational exponents are covered, and the gap is real.** For irrational $p$ the expression $k^{p}$ has no meaning in this library yet, so the statement is not merely unproved there, it is unstatable. The same limitation is what keeps the Bertrand-type series $\sum 1/(k (\log k)^{p})$ off this page entirely, the logarithm not being available.
````

