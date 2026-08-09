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

- critical risk (16): 13 declared dependencies; 13 cited facts; 12 numbered proof steps; biconditional / both-direction claim; boundary-sensitive language; induction, recursion, or minimality; analytic limiting/completeness language

## Target item — `thm-dirichlet-rearrangement`

Normalized current SHA-256: `2c5e86270e0474024503ff112f916633f3c59452281ec5f827782edeb98cd6a9`

The complete current item follows, including frontmatter:

````markdown
---
id: thm-dirichlet-rearrangement
kind: theorem
title: "Dirichlet's rearrangement theorem: an absolutely convergent series converges unconditionally, and every rearrangement of it has the same sum"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-rearrangement-and-unconditional-convergence, def-absolute-and-conditional-convergence, lem-absolute-convergence-implies-convergence, lem-positive-and-negative-parts, thm-nonnegative-series-bounded-partial-sums, lem-series-linearity, thm-induction-principle, def-finite-sum, lem-finite-sum-laws, lem-limit-preserves-order, def-injection-surjection-bijection, def-series, def-real-limit]
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
    - title: "Absolute convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Absolute_convergence"
    - title: "Riemann series theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_series_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "N. Donaldson, Math 140A: Real Analysis notes"
      url: "https://www.math.uci.edu/~ndonalds/math140a/notes.pdf"
    - title: "John K. Hunter, An Introduction to Real Analysis, Chapter 4"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch4.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals whose series converges absolutely
([[def-absolute-and-conditional-convergence]]), and let
$\sigma : \mathbb{N} \to \mathbb{N}$ be a bijection
([[def-injection-surjection-bijection]]). Then:

1. $\sum |a_{\sigma(k)}|$ converges, with
   $\sum_{k=0}^{\infty} |a_{\sigma(k)}| = \sum_{k=0}^{\infty} |a_k|$; that is,
   the rearranged series again converges absolutely;
2. $\sum a_{\sigma(k)}$ converges, with
   $$\sum_{k=0}^{\infty} a_{\sigma(k)} \;=\; \sum_{k=0}^{\infty} a_k .$$

Consequently an absolutely convergent series converges unconditionally
([[def-rearrangement-and-unconditional-convergence]]).

The engine of the proof is a single statement about series of **nonnegative**
terms: for those, the sum is the supremum of the partial sums
([[thm-nonnegative-series-bounded-partial-sums]]), a quantity that cannot see the
order of the terms. The general case is reduced to that one through the positive
and negative parts ([[lem-positive-and-negative-parts]]), which is why no
manipulation of signed finite sums over shuffled index sets occurs anywhere below.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals with $\sum |a_k|$ convergent, and a bijection $\sigma : \mathbb{N} \to \mathbb{N}$.

[L1] Finite sums: $\sum_{k<0} x_k = 0$, $\sum_{k<n+1} x_k = \sum_{k<n} x_k + x_n$, and a finite sum may be split at any intermediate index ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L2] Monotonicity of finite sums: if $x_k \le y_k$ for all $k < n$ then $\sum_{k<n} x_k \le \sum_{k<n} y_k$; in particular a finite sum of nonnegative terms is nonnegative ([[lem-finite-sum-laws]]).

[L3] For a series of nonnegative terms, convergence is equivalent to the range of the partial sums being bounded above, and then the sum is the supremum of that range; in particular every partial sum is at most the sum ([[thm-nonnegative-series-bounded-partial-sums]], [[def-series]]).

[L4] Limits preserve non-strict inequalities holding eventually ([[lem-limit-preserves-order]], [[def-real-limit]]).

[L5] The principle of induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L6] A bijection is injective and surjective; $f[S]$ and $f^{-1}[T]$ denote image and preimage ([[def-injection-surjection-bijection]]).

[L7] Positive and negative parts: $a_k^{+} = (|a_k| + a_k)/2$ and $a_k^{-} = (|a_k| - a_k)/2$ are nonnegative, $a_k = a_k^{+} - a_k^{-}$, $|a_k| = a_k^{+} + a_k^{-}$, and $\sum |a_k|$ converges if and only if both $\sum a_k^{+}$ and $\sum a_k^{-}$ converge ([[lem-positive-and-negative-parts]]).

[L8] Linearity of series ([[lem-series-linearity]]).

[L9] If $\sum |x_k|$ converges then $\sum x_k$ converges ([[lem-absolute-convergence-implies-convergence]]).

[L10] Unconditional convergence means every rearrangement converges to the same sum ([[def-rearrangement-and-unconditional-convergence]]).

## Proof

**Proof technique:** direct.

1.1 **Finite domination.** For every $n \in \mathbb{N}$ the following holds: for every sequence $(c_k)$ of nonnegative reals, every $Q \in \mathbb{N}$ and every injective map $\tau$ from $\{k : k < n\}$ into $\{k : k < Q\}$, one has $\sum_{k<n} c_{\tau(k)} \le \sum_{k<Q} c_k$. This is proved by induction on $n$, the sequence, $Q$ and $\tau$ being universally quantified inside the induction statement. At $n = 0$ the left side is the empty sum $0$ and the right side is nonnegative. Assume the statement at $n$, and let $\tau$ be injective from $\{k : k < n+1\}$ into $\{k : k < Q\}$; put $p := \tau(n)$, so $p < Q$, and let $(c'_k)$ agree with $(c_k)$ except that $c'_p := 0$, again a nonnegative sequence. The restriction of $\tau$ to $\{k : k < n\}$ is injective into $\{k : k < Q\}$ and never takes the value $p$, so $c'_{\tau(k)} = c_{\tau(k)}$ for $k < n$, and the induction hypothesis gives $\sum_{k<n} c_{\tau(k)} = \sum_{k<n} c'_{\tau(k)} \le \sum_{k<Q} c'_k$. Splitting the sum $\sum_{k<Q}$ at $p$ and at $p+1$ shows $\sum_{k<Q} c'_k = \sum_{k<Q} c_k - c_p$, so adding $c_p$ to both sides gives $\sum_{k<n+1} c_{\tau(k)} \le \sum_{k<Q} c_k$. [L1, L2, L5, L6]

1.2 **Bounding index.** For every injective $\rho : \mathbb{N} \to \mathbb{N}$ and every $n \in \mathbb{N}$ there is $Q \in \mathbb{N}$ with $\rho(k) < Q$ for all $k < n$: at $n = 0$ take $Q = 0$, and if $Q$ works for $n$ then the greater of $Q$ and $\rho(n)+1$ works for $n+1$, the order on $\mathbb{N}$ being total. [L5, L6]

1.3 Since $\sigma$ is a bijection, for every $j \in \mathbb{N}$ there is exactly one $k$ with $\sigma(k) = j$; write $\sigma^{-1}(j)$ for that $k$. Then $\sigma^{-1}$ is a bijection of $\mathbb{N}$, with $\sigma(\sigma^{-1}(j)) = j$ for every $j$. [L6, choose]

1.4 By [L7] both $\sum a_k^{+}$ and $\sum a_k^{-}$ converge; write $U$ and $V$ for their sums. Since $a_k = a_k^{+} - a_k^{-}$, linearity gives $\sum_{k=0}^{\infty} a_k = U - V$. [given, L7, L8]

1.5 The positive and negative parts are defined pointwise from the value of the term, so the positive part of $a_{\sigma(k)}$ is $a_{\sigma(k)}^{+}$ and its negative part is $a_{\sigma(k)}^{-}$; both are nonnegative sequences in the index $k$. [L7]

2.1 **The nonnegative case, one inequality.** Let $(c_k)$ be a sequence of nonnegative reals with $\sum c_k$ convergent of sum $M$, and let $\rho$ be a bijection of $\mathbb{N}$. For each $n$ pick $Q$ as in step 1.2; then $\rho$ restricted to $\{k : k<n\}$ is injective into $\{k : k<Q\}$, so $\sum_{k<n} c_{\rho(k)} \le \sum_{k<Q} c_k \le M$ by step 1.1 and [L3]. The terms $c_{\rho(k)}$ are nonnegative, so the partial sums of $\sum c_{\rho(k)}$ are bounded above by $M$; hence that series converges, and since each partial sum is at most $M$ its sum is at most $M$. [step 1.1, step 1.2, L2, L3, L4]

3.1 **The nonnegative case, equality.** With $(c_k)$, $M$ and $\rho$ as in step 2.1, write $M'$ for the sum of $\sum c_{\rho(k)}$, so $M' \le M$. The sequence $(c_{\rho(k)})_k$ is nonnegative with convergent series of sum $M'$, and its rearrangement along the bijection $\rho^{-1}$ is $j \mapsto c_{\rho(\rho^{-1}(j))} = c_j$; so step 2.1, applied to that sequence and that bijection, gives $M \le M'$. Hence $M' = M$. [step 1.3, step 2.1]

4.1 Applying step 3.1 to the nonnegative sequence $(|a_k|)$, whose series converges by hypothesis, and to $\sigma$: the series $\sum |a_{\sigma(k)}|$ converges with the same sum as $\sum |a_k|$, which is claim 1. [given, step 3.1]

4.2 Applying step 3.1 to $(a_k^{+})$ and to $(a_k^{-})$, each with the bijection $\sigma$: the series $\sum a_{\sigma(k)}^{+}$ and $\sum a_{\sigma(k)}^{-}$ converge, with sums $U$ and $V$ respectively. [step 3.1, step 1.4, step 1.5]

5.1 Since $a_{\sigma(k)} = a_{\sigma(k)}^{+} - a_{\sigma(k)}^{-}$ for every $k$, linearity gives that $\sum a_{\sigma(k)}$ converges with sum $U - V$, which by step 1.4 equals $\sum_{k=0}^{\infty} a_k$; this is claim 2. [step 1.4, step 1.5, step 4.2, L8]

6.1 The same conclusion is available from claim 1 alone: $\sum |a_{\sigma(k)}|$ converges, so $\sum a_{\sigma(k)}$ converges; step 5.1 is what identifies its sum. [step 4.1, L9]

7.1 Claims 1 and 2 hold for an arbitrary bijection $\sigma$, so $\sum a_k$ converges and every rearrangement of it converges to the same sum, that is, $\sum a_k$ converges unconditionally. [step 4.1, step 5.1, L9, L10] ∎

## Remarks

- **Why the nonnegative case is the whole theorem.** For nonnegative terms the sum is the supremum of the set of partial sums ([[thm-nonnegative-series-bounded-partial-sums]]), and step 2.1 shows that each partial sum of a rearrangement is bounded by the original sum, and conversely. No cancellation can occur, so nothing depends on the order. Everything genuinely signed in the theorem is handled by [[lem-positive-and-negative-parts]], which splits the series into two nonnegative ones.

- **What step 1.1 is, and why it is proved rather than assumed.** It says that a finite sum of nonnegative terms taken along an injective list of indices is at most the sum over an initial segment containing all those indices. This is the one piece of finite combinatorics the theorem needs, and it is not among the laws of [[lem-finite-sum-laws]], all of which compare sums term by term over the same index range. The proof zeroes out one term at a time, which is what keeps it inside those laws.

- **The hypothesis cannot be weakened.** [[thm-riemann-series-theorem]] shows that for a conditionally convergent series every real number, and $\pm\infty$ besides, is the sum of some rearrangement; and [[cor-unconditional-iff-absolute-in-r]] turns the two theorems together into an exact characterisation.
````

## Wave 8 provenance row for the target

```json
{
  "id": "thm-dirichlet-rearrangement",
  "statement": "literature-derived",
  "proof": "ai-altered",
  "evidence": "exact-source",
  "urls": [
    "https://www.math.uci.edu/~ndonalds/math140a/notes.pdf",
    "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch4.pdf"
  ],
  "rationale": "The theorem that every rearrangement of an absolutely convergent real series has the same sum appears exactly in the cited notes; the proof is the standard finite-tail argument.",
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
      "source": "def-finite-sum",
      "source_section": "Definition",
      "quote": "$a(k)$. **Finite sums and finite products of $a$ are defined by recursion on the",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-finite-sum-laws",
      "source_section": "Statement",
      "quote": "$\\lambda \\in \\mathbb{R}$, and let $m, n \\in \\mathbb{N}$, with finite sums and",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-finite-sum-laws",
      "source_section": "Statement",
      "quote": "4. **Monotonicity.** If $a_k \\le b_k$ for all $k < n$ then $\\displaystyle\\sum_{k<n} a_k \\le \\sum_{k<n} b_k$. In particular, if $a_k \\ge 0$ for all $k < n$ then $\\sum_{k<n} a_k \\ge 0$, every single term satisfies $a_j \\le \\sum_{k<n} a_k$ for $j < n$, and $\\sum_{k<n} a_k = 0$ forces $a_k = 0$ for every $k < n$.",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-nonnegative-series-bounded-partial-sums",
      "source_section": "Statement",
      "quote": "2. $\\sum a_k$ converges **if and only if** $S$ is bounded above",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-series",
      "source_section": "Definition",
      "quote": "**Partial sums.** Let $(a_k)$ be a sequence of reals. Its **sequence of partial",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-limit-preserves-order",
      "source_section": "Statement",
      "quote": "$x$ and $y$ respectively ([[def-real-limit]]). If $x_k \\le y_k$ eventually, that",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-real-limit",
      "source_section": "Definition",
      "quote": "A sequence $(x_k)$ of reals **converges** to $x \\in \\mathbb{R}$ when for",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-induction-principle",
      "source_section": "Statement",
      "quote": "Let $S \\subseteq \\mathbb{N}$. If $0 \\in S$ and $\\sigma(n) \\in S$ whenever $n \\in S$, then $S = \\mathbb{N}$. Equivalently (property form): if a property $P$ satisfies $P(0)$ and ($P(n) \\Rightarrow P(\\sigma(n))$) for all $n$, then $P(n)$ holds for all $n \\in \\mathbb{N}$. This is the induction principle, the basis of proof by induction.",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L6",
      "source": "def-injection-surjection-bijection",
      "source_section": "Definition",
      "quote": "- $f$ is **bijective** if it is both injective and surjective.",
      "uses": [
        "1.1",
        "1.2",
        "1.3"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-positive-and-negative-parts",
      "source_section": "Statement",
      "quote": "Let $(a_k)$ be a sequence of reals ([[def-series]]) and define its **positive",
      "uses": [
        "1.4",
        "1.5"
      ]
    },
    {
      "fact": "L8",
      "source": "lem-series-linearity",
      "source_section": "Statement",
      "quote": "Let $(a_k)$ and $(b_k)$ be sequences of reals whose series converge",
      "uses": [
        "1.4",
        "5.1"
      ]
    },
    {
      "fact": "L9",
      "source": "lem-absolute-convergence-implies-convergence",
      "source_section": "Statement",
      "quote": "Let $(a_k)$ be a sequence of reals. If the series $\\sum |a_k|$ converges",
      "uses": [
        "6.1",
        "7.1"
      ]
    },
    {
      "fact": "L10",
      "source": "def-rearrangement-and-unconditional-convergence",
      "source_section": "Definition",
      "quote": "**Unconditional convergence.** The series $\\sum a_k$ **converges",
      "uses": [
        "7.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "Verified the stated inference at step 1.1.",
      "step": "1.1",
      "inputs": [
        "L1",
        "L2",
        "L5",
        "L6"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "Verified the stated inference at step 1.2.",
      "step": "1.2",
      "inputs": [
        "L5",
        "L6"
      ]
    },
    {
      "id": "step-1-3",
      "claim": "Verified the stated inference at step 1.3.",
      "step": "1.3",
      "inputs": [
        "L6"
      ]
    },
    {
      "id": "step-1-4",
      "claim": "Verified the stated inference at step 1.4.",
      "step": "1.4",
      "inputs": [
        "L7",
        "L8"
      ]
    },
    {
      "id": "step-1-5",
      "claim": "Verified the stated inference at step 1.5.",
      "step": "1.5",
      "inputs": [
        "L7"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "Verified the stated inference at step 2.1.",
      "step": "2.1",
      "inputs": [
        "1.2",
        "1.1",
        "L3",
        "L2",
        "L4"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "Verified the stated inference at step 3.1.",
      "step": "3.1",
      "inputs": [
        "2.1",
        "1.3"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "Verified the stated inference at step 4.1.",
      "step": "4.1",
      "inputs": [
        "3.1"
      ]
    },
    {
      "id": "step-4-2",
      "claim": "Verified the stated inference at step 4.2.",
      "step": "4.2",
      "inputs": [
        "3.1",
        "1.4",
        "1.5"
      ]
    },
    {
      "id": "step-5-1",
      "claim": "Verified the stated inference at step 5.1.",
      "step": "5.1",
      "inputs": [
        "1.4",
        "1.5",
        "4.2",
        "L8"
      ]
    },
    {
      "id": "step-6-1",
      "claim": "Verified the stated inference at step 6.1.",
      "step": "6.1",
      "inputs": [
        "5.1",
        "4.1",
        "L9"
      ]
    },
    {
      "id": "step-7-1",
      "claim": "Verified the stated inference at step 7.1.",
      "step": "7.1",
      "inputs": [
        "4.1",
        "5.1",
        "L9",
        "L10"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "Statement and step 1.1 account for the empty-index case."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Statement and step 1.1 include the zero boundary."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Statement and step 1.1 include the unit boundary."
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
      "status": "checked",
      "evidence": "Step 1.2 supplies its choice."
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
    "source": "thm-dirichlet-rearrangement",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "def-rearrangement-and-unconditional-convergence",
    "declared_target": "def-rearrangement-and-unconditional-convergence",
    "target_statement_provenance": "ai-altered",
    "targetPage": "absolute-convergence-and-rearrangement",
    "targetBatch": "wave8-real-analysis-absolute-convergence",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-dirichlet-rearrangement",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "def-absolute-and-conditional-convergence",
    "declared_target": "def-absolute-and-conditional-convergence",
    "target_statement_provenance": "ai-altered",
    "targetPage": "absolute-convergence-and-rearrangement",
    "targetBatch": "wave8-real-analysis-absolute-convergence",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-dirichlet-rearrangement",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "lem-absolute-convergence-implies-convergence",
    "declared_target": "lem-absolute-convergence-implies-convergence",
    "target_statement_provenance": "literature-derived",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-dirichlet-rearrangement",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "lem-positive-and-negative-parts",
    "declared_target": "lem-positive-and-negative-parts",
    "target_statement_provenance": "ai-altered",
    "targetPage": "absolute-convergence-and-rearrangement",
    "targetBatch": "wave8-real-analysis-absolute-convergence",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-dirichlet-rearrangement",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
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
    "source": "thm-dirichlet-rearrangement",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "lem-series-linearity",
    "declared_target": "lem-series-linearity",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-dirichlet-rearrangement",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "thm-induction-principle",
    "declared_target": "thm-induction-principle",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-dirichlet-rearrangement",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
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
    "source": "thm-dirichlet-rearrangement",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
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
    "source": "thm-dirichlet-rearrangement",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "lem-limit-preserves-order",
    "declared_target": "lem-limit-preserves-order",
    "target_statement_provenance": "ai-altered",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-dirichlet-rearrangement",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
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
    "source": "thm-dirichlet-rearrangement",
    "sourcePage": "absolute-convergence-and-rearrangement",
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
    "source": "thm-dirichlet-rearrangement",
    "sourcePage": "absolute-convergence-and-rearrangement",
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
[]
```

## Full text of every cited or declared item (15)

### `cor-unconditional-iff-absolute-in-r`

````markdown
---
id: cor-unconditional-iff-absolute-in-r
kind: corollary
title: "For a series of real numbers, unconditional convergence and absolute convergence are the same property"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-riemann-series-theorem, thm-dirichlet-rearrangement, def-rearrangement-and-unconditional-convergence, def-absolute-and-conditional-convergence, def-divergence-to-infinity, def-series, def-real-limit]
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
    - title: "Unconditional convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Unconditional_convergence"
    - title: "Riemann series theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_series_theorem"
    - title: "N. Donaldson, Math 140A: Real Analysis notes"
      url: "https://www.math.uci.edu/~ndonalds/math140a/notes.pdf"
    - title: "John K. Hunter, An Introduction to Real Analysis, Chapter 4"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch4.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals. The following are equivalent.

1. $\sum a_k$ converges absolutely
   ([[def-absolute-and-conditional-convergence]]).
2. $\sum a_k$ converges unconditionally
   ([[def-rearrangement-and-unconditional-convergence]]).
3. $\sum a_k$ converges and every rearrangement of it converges, with no
   requirement that the sums agree.

So over $\mathbb{R}$ there is nothing between absolute and conditional
convergence: a convergent series either may be reordered freely, sum and all, or
else has a rearrangement that fails to converge at all.

**This is a statement about $\mathbb{R}$, and nothing here says how much of it
survives elsewhere.** Whether the equivalence of 1 and 2 holds for series of
vectors is a question this library cannot pose at this point in the reading
order, since it has no notion of a convergent series of vectors; it is raised,
and left open, in [[rem-rearrangement-in-higher-dimensions]]. No claim about any
space other than $\mathbb{R}$ is made or used here.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals.

[L1] An absolutely convergent series converges unconditionally: every rearrangement converges, to the same sum ([[thm-dirichlet-rearrangement]]).

[L2] If $\sum a_k$ converges conditionally then for every $\alpha \le \beta$ in the extended reals there is a rearrangement whose partial sums have those as limit inferior and limit superior; in particular there is one whose partial sums diverge to $+\infty$ ([[thm-riemann-series-theorem]]).

[L3] Unconditional convergence means: the series converges, and every rearrangement converges to the same sum ([[def-rearrangement-and-unconditional-convergence]]).

[L4] A series converges absolutely when $\sum |a_k|$ converges, and conditionally when it converges while $\sum |a_k|$ does not; a convergent series is exactly one of the two ([[def-absolute-and-conditional-convergence]]).

[L5] A sequence diverging to $+\infty$ does not converge: if $x_n \to +\infty$ and also $x_n \to L$, then eventually $x_n > L + 1$ and eventually $|x_n - L| < 1$, which are incompatible ([[def-divergence-to-infinity]], [[def-real-limit]], [[def-series]]).

## Proof

**Proof technique:** direct.

1.1 Assume 1. Then by [L1] the series converges and every rearrangement converges to the same sum, which is 2. [L1, L3]

1.2 Assume 2. Then in particular the series converges and every rearrangement converges, which is 3. [L3]

1.3 Assume 3, and suppose $\sum a_k$ did not converge absolutely. Since it converges, it would then converge conditionally. [L4]

2.1 In that situation [L2] supplies a bijection $\sigma$ of $\mathbb{N}$ for which the partial sums of $\sum a_{\sigma(k)}$ diverge to $+\infty$, and such a series does not converge; this contradicts the assumption that every rearrangement converges. [step 1.3, L2, L5]

3.1 Hence under 3 the series converges absolutely, which is 1. [step 1.3, step 2.1, L4]

4.1 The implications 1 to 2, 2 to 3 and 3 to 1 close the cycle, so the three statements are equivalent. [step 1.1, step 1.2, step 3.1] ∎

## Remarks

- **Statement 3 is the reason the corollary is worth recording.** It says that merely *asking* every rearrangement to converge already forces absolute convergence, so the apparently weaker demand is not weaker at all. What makes that work is the strength of [[thm-riemann-series-theorem]]: it produces not only rearrangements with prescribed sums but rearrangements with no sum.

- **Two of the three implications are cheap.** The content is in 3 implies 1, and its only ingredient is the Riemann series theorem. The implication 1 implies 2 is [[thm-dirichlet-rearrangement]] verbatim, and 2 implies 3 is a weakening.

- **Where the dividing line sits.** By [[def-absolute-and-conditional-convergence]] a convergent series is absolutely or conditionally convergent and not both, so the corollary may be read as: the conditionally convergent series are exactly the convergent series that are not unconditionally convergent. The alternating harmonic series is the standard inhabitant of that class; see [[fs-rearrangement-preserves-the-sum]].
````

### `def-absolute-and-conditional-convergence`

````markdown
---
id: def-absolute-and-conditional-convergence
kind: definition
title: "Absolutely convergent and conditionally convergent series, and the general starting index"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-series, lem-absolute-convergence-implies-convergence, def-abs-value, lem-of-abs-value, def-real-limit]
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
    - title: "Absolute convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Absolute_convergence"
    - title: "Conditional convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Conditional_convergence"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "N. Donaldson, Math 140A: Series"
      url: "https://www.math.uci.edu/~ndonalds/math140a/3series.html"
pipeline_run: null
---

## Definition

Let $(a_k)$ be a sequence of reals, with series $\sum a_k$ and partial sums
$s_n = \sum_{k<n} a_k$ as in [[def-series]], and let $|x|$ be the absolute value
([[def-abs-value]]).

**Absolute convergence.** The series $\sum a_k$ **converges absolutely** when the
series $\sum |a_k|$ converges ([[def-series]]). Since $|a_k| \ge 0$ for every $k$
([[lem-of-abs-value]]), this is a statement about a series of nonnegative terms.

**Conditional convergence.** The series $\sum a_k$ **converges conditionally**
when it converges ([[def-series]], [[def-real-limit]]) and does *not* converge
absolutely.

So a convergent series is exactly one of the two: absolutely convergent or
conditionally convergent, according as $\sum |a_k|$ converges or not.

**One implication is already proved, and is not reproved anywhere on this page.**
[[lem-absolute-convergence-implies-convergence]] states that if $\sum |a_k|$
converges then $\sum a_k$ converges. That lemma was coined and proved on the
previous page of this track, where the root and ratio tests need it; this page
names it and builds on it. In particular an absolutely convergent series is a
convergent series, so the two words above really do partition the convergent
series, and "conditionally convergent" is not vacuous by accident: the alternating
harmonic series is a witness, and the witness is exhibited in
[[fs-convergent-implies-absolutely-convergent]].

**General starting index.** Let $m \in \mathbb{N}$ and let $(a_k)_{k \ge m}$ be a
family from $m$ ([[def-series]]). The series $\sum_{k \ge m} a_k$ **converges
absolutely** when $\sum_{k \ge m} |a_k|$ converges, and **converges
conditionally** when it converges and does not converge absolutely. By
[[def-series]] both statements are the corresponding statements for the shifted
sequence $j \mapsto a_{j+m}$, so nothing new is being defined and every result
below transfers to a general starting index in the same way, exactly as
[[lem-absolute-convergence-implies-convergence]] already records for the one
implication it proves.

## Remarks

- **Absolute convergence is a condition on the terms, not on the sum.** It says
  the series of absolute values converges, and it says nothing about the value of
  $\sum_{k=0}^{\infty} a_k$. The two sums are in general different, and no
  statement here identifies them.

- **Why the distinction earns a page.** Every result on this page separates the
  two classes. An absolutely convergent series may be reordered at will
  ([[thm-dirichlet-rearrangement]]) and multiplied by another
  ([[thm-mertens]]); a conditionally convergent one may be reordered to any sum
  whatever ([[thm-riemann-series-theorem]]). The difference is not one of degree.

- **A series of nonnegative terms converges absolutely if it converges at all**,
  since then $|a_k| = a_k$. So the distinction is invisible for the comparison,
  condensation, Raabe, Gauss and Kummer tests of the previous page, all of which
  assume terms of one sign. It is not invisible on that page as a whole: the root
  and ratio tests are stated for terms of arbitrary sign and reach convergence of
  $\sum a_k$ precisely through
  [[lem-absolute-convergence-implies-convergence]], which is where the word
  *absolutely convergent* is first used. What that page does not develop, and this
  one does, is everything that separates the two classes rather than the one
  implication those two tests need.
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

### `def-rearrangement-and-unconditional-convergence`

````markdown
---
id: def-rearrangement-and-unconditional-convergence
kind: definition
title: "Rearrangement of a series along a bijection of $\\mathbb{N}$, and unconditional convergence"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-series, def-sequence, def-injection-surjection-bijection, def-absolute-and-conditional-convergence]
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
    - title: "Riemann series theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_series_theorem"
    - title: "Unconditional convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Unconditional_convergence"
    - title: "N. Donaldson, Math 140A: Real Analysis notes"
      url: "https://www.math.uci.edu/~ndonalds/math140a/notes.pdf"
    - title: "John K. Hunter, An Introduction to Real Analysis, Chapter 4"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch4.pdf"
pipeline_run: null
---

## Definition

Let $(a_k)$ be a sequence of reals ([[def-sequence]]) and let
$\sigma : \mathbb{N} \to \mathbb{N}$ be a bijection
([[def-injection-surjection-bijection]]).

**Rearrangement.** The **rearrangement of $(a_k)$ along $\sigma$** is the
composite sequence $k \mapsto a_{\sigma(k)}$, again a function
$\mathbb{N} \to \mathbb{R}$ and so again a sequence of reals. The
**rearrangement of the series $\sum a_k$ along $\sigma$** is the series
$\sum a_{\sigma(k)}$ of that sequence ([[def-series]]).

A rearrangement uses each term of the original sequence exactly once: injectivity
of $\sigma$ says no term is repeated, surjectivity says none is omitted. That is
the whole content of the word, and it is why the definition is stated with a
bijection rather than with an informal "reordering".

**Unconditional convergence.** The series $\sum a_k$ **converges
unconditionally** when it converges and, for **every** bijection
$\sigma : \mathbb{N} \to \mathbb{N}$, the rearranged series $\sum a_{\sigma(k)}$
converges with

$$\sum_{k=0}^{\infty} a_{\sigma(k)} \;=\; \sum_{k=0}^{\infty} a_k .$$

## Remarks

- **Unconditional convergence implies convergence, by definition and also by
  instance.** The identity map is a bijection of $\mathbb{N}$ and the
  rearrangement along it is the original sequence, so the clause about all
  bijections already contains the clause about the series itself.

- **Rearranging twice is rearranging once.** If $\sigma$ and $\tau$ are bijections
  of $\mathbb{N}$ then so is $\sigma \circ \tau$, and the rearrangement of
  $(a_{\sigma(k)})$ along $\tau$ is $k \mapsto a_{\sigma(\tau(k))}$, the
  rearrangement of $(a_k)$ along $\sigma \circ \tau$. Likewise the inverse
  $\sigma^{-1}$ is a bijection, and rearranging along it undoes $\sigma$. Both
  facts are used in [[thm-dirichlet-rearrangement]].

- **A weaker-looking condition, which turns out to be the same one.** One could
  ask only that every rearrangement *converge*, without requiring the sums to
  agree. Over $\mathbb{R}$ that is not weaker:
  [[cor-unconditional-iff-absolute-in-r]] identifies both conditions with absolute
  convergence ([[def-absolute-and-conditional-convergence]]), because
  [[thm-riemann-series-theorem]] produces, for a series that converges but not
  absolutely, both a rearrangement with a different sum and a rearrangement that
  does not converge at all.

- **The definition says nothing about which series have the property.** That is
  the subject of the two theorems that follow, and the answer over $\mathbb{R}$ is
  exactly the absolutely convergent series.
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

### `lem-absolute-convergence-implies-convergence`

````markdown
---
id: lem-absolute-convergence-implies-convergence
kind: lemma
title: "If $\\sum |a_k|$ converges then $\\sum a_k$ converges"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-series, thm-series-cauchy-criterion, lem-triangle-inequality-finite, lem-finite-sum-laws, def-finite-sum, lem-of-abs-value, def-real-limit]
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
    - title: "Absolute convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Absolute_convergence"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.45)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §7.2"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "Stephen Semmes, Elements of Analysis"
      url: "https://math.rice.edu/~semmes/math331.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals. If the series $\sum |a_k|$ converges
([[def-series]]) then the series $\sum a_k$ converges.

A series with the property that $\sum |a_k|$ converges is called **absolutely
convergent**; the lemma says that absolute convergence implies convergence.

The same statement holds for a family from a general starting index $m$, being
this statement applied to the shifted sequence $j \mapsto a_{j+m}$
([[def-series]]).

**The converse is false**, and the standard witness is the alternating harmonic
series. That witness is not available on this page: its convergence is the
alternating series test, which is not proved here. Nothing below asserts a
converse, and no item on this page uses one.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals such that the series $\sum |a_k|$ converges, with partial sums as in [[def-series]] and finite sums as in [[def-finite-sum]].

[L1] The Cauchy criterion for series: $\sum d_k$ converges if and only if for every real $\varepsilon > 0$ there is $N \in \mathbb{N}$ with $\big|\sum_{k=p+1}^{n} d_k\big| < \varepsilon$ for all $n > p \ge N$ ([[thm-series-cauchy-criterion]], [[def-series]]).

[L2] Triangle inequality for finite sums: $\big|\sum_{k<d} u_k\big| \le \sum_{k<d}|u_k|$ ([[lem-triangle-inequality-finite]]); the block $\sum_{k=p+1}^{n} u_k$ is by definition the finite sum $\sum_{t < n-p} u_{p+1+t}$ ([[def-finite-sum]]), so applying the inequality to the shifted sequence $t \mapsto u_{p+1+t}$ gives $\big|\sum_{k=p+1}^{n} u_k\big| \le \sum_{k=p+1}^{n} |u_k|$ for all naturals $n > p$.

[L3] Monotonicity of finite sums: if $x_t \ge 0$ for all $t < d$ then $\sum_{t<d} x_t \ge 0$ ([[lem-finite-sum-laws]]).

[L4] Absolute value: $|u| \ge 0$ for every real $u$, and $|u| = u$ whenever $u \ge 0$ ([[lem-of-abs-value]]).

[L5] Convergence of a real sequence, and the fact that the real and rational formulations of a tolerance agree ([[def-real-limit]]).

## Proof

**Proof technique:** direct.

1.1 Let $\varepsilon > 0$ be an arbitrary real; since $\sum |a_k|$ converges, the Cauchy criterion applied to the sequence $(|a_k|)$ supplies $N \in \mathbb{N}$ with $\big|\sum_{k=p+1}^{n} |a_k|\big| < \varepsilon$ for all $n > p \ge N$. [L1, L5, choose]

1.2 For all naturals $n > p$ the block $\sum_{k=p+1}^{n} |a_k|$ is a finite sum of nonnegative terms, hence nonnegative, hence equal to its own absolute value. [L2, L3, L4]

2.1 So for all $n > p \ge N$ one has $\big|\sum_{k=p+1}^{n} a_k\big| \le \sum_{k=p+1}^{n} |a_k| = \big|\sum_{k=p+1}^{n} |a_k|\big| < \varepsilon$. [step 1.1, step 1.2, L2]

3.1 As $\varepsilon > 0$ was arbitrary, the sequence $(a_k)$ satisfies the Cauchy criterion, so $\sum a_k$ converges. [step 2.1, L1] ∎

## Remarks

- **Nothing here identifies the two sums**, and they are in general different. What is proved is that the second series converges, not that it converges to the same value; the bound $\big|\sum_{k=0}^{\infty} a_k\big| \le \sum_{k=0}^{\infty}|a_k|$ is true and is not needed anywhere on this page, so it is not proved here.

- **Why the Cauchy criterion is the right instrument.** The terms have no sign, so [[thm-nonnegative-series-bounded-partial-sums]] does not apply to $\sum a_k$ and boundedness of its partial sums would prove nothing. The Cauchy criterion is the one convergence test on this page that never names a candidate sum and never asks for a sign, and the whole proof is the observation that its hypothesis for $(|a_k|)$ implies its hypothesis for $(a_k)$, term by term, through one application of the finite triangle inequality.

- **What this unlocks on this page.** The root test ([[thm-root-test]]) and the ratio test ([[thm-ratio-test]]) each produce convergence of $\sum |a_k|$ directly, by comparison with a geometric series; with this lemma both reach their standard conclusion, the convergence of $\sum a_k$ itself. Without it their convergence halves would be strictly weaker than the classical statements.

- **The systematic theory is elsewhere.** Rearrangement, the Riemann series theorem, conditional convergence and products of series all belong with absolute convergence and are developed on a later page of this track. This lemma is only the one implication those two tests need.
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

### `lem-limit-preserves-order`

````markdown
---
id: lem-limit-preserves-order
kind: lemma
title: "Limits preserve non-strict inequalities"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-real-limit, def-sequence, lem-limit-unique, thm-algebra-of-limits, thm-of-archimedean, lem-of-add-order, lem-rat-embeds-dense, lem-of-inverse-positive, lem-of-abs-value, thm-nat-linear-order, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "$x_k\\le y_k$ gives $\\lim x_k\\le\\lim y_k$"
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
    - title: "J. K. Hunter, An Introduction to Real Analysis, Ch. 3"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch3.pdf"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "T. Tao, Analysis I, 3rd ed., §6.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(x_k)$ and $(y_k)$ be sequences of reals ([[def-sequence]]) converging to
$x$ and $y$ respectively ([[def-real-limit]]). If $x_k \le y_k$ eventually, that
is for all $k$ from some index on, then

$$\lim_{k} x_k \;\le\; \lim_{k} y_k .$$

In particular, if $x_k \ge 0$ eventually then $\lim_k x_k \ge 0$, and if
$a \le x_k \le b$ eventually then $a \le \lim_k x_k \le b$.

The conclusion is **not** strict, and cannot be made strict; see the remarks
below and the false statement at the end of this page.

## Facts & Assumptions

**Given:** Sequences $(x_k)$, $(y_k)$ of reals with $(x_k)$ converging to $x$, $(y_k)$ converging to $y$, and an index $K_0 \in \mathbb{N}$ with $x_k \le y_k$ for every $k \ge K_0$ ([[def-sequence]], [[def-real-limit]]). Write $z_k := y_k - x_k$ and $z := y - x$.

[L1] Convergence, quantified over rational $\varepsilon > 0$ ([[def-real-limit]]).

[L2] Difference rule: $(z_k) = (y_k - x_k)$ converges to $y - x = z$ ([[thm-algebra-of-limits]]).

[L3] Small rationals: for every real $\eta > 0$ there is a rational $\varepsilon$ with $0 < \varepsilon < \eta$, by density ([[lem-rat-embeds-dense]]) or by the Archimedean property ([[thm-of-archimedean]]) applied to $1/\eta$ ([[lem-of-inverse-positive]]).

[L4] Absolute value: $|u| < c$ if and only if $-c < u < c$, for $c > 0$ ([[lem-of-abs-value]]).

[L5] Order arithmetic in $\mathbb{R}$: adding a constant preserves $<$ and $\le$; $u \le v$ and $v < w$ give $u < w$; trichotomy, so exactly one of $z < 0$, $z = 0$, $z > 0$ holds and the negation of $z < 0$ is $z \ge 0$; $u \le v$ if and only if $v - u \ge 0$; and $u < u$ is impossible ([[lem-of-add-order]], [[def-complete-ordered-field]], [[def-ordered-field]]).

[L6] The order on $\mathbb{N}$ is total, so any two indices admit a common upper bound ([[thm-nat-linear-order]]).

[L7] For $c \in \mathbb{R}$ the constant sequence $(c)$ converges to $c$ ([[def-sequence]], [[def-real-limit]]).

[L8] A sequence of reals has at most one limit ([[lem-limit-unique]]), which is what licenses writing $\lim_k x_k$ and $\lim_k y_k$ for the limits named in the statement; without it those symbols would not denote.

## Proof

**Proof technique:** contradiction.

1.1 By [L2] the sequence $(z_k)$ converges to $z = y - x$, and by hypothesis $z_k = y_k - x_k \ge 0$ for every $k \ge K_0$. [given, L2, L5]

1.2 Suppose, for contradiction, that $z < 0$. [assume-contra]

2.1 Then $-z > 0$, so by [L3] we may choose a rational $\varepsilon$ with $0 < \varepsilon < -z$. [step 1.2, L3, L5, choose]

3.1 Applying convergence of $(z_k)$ to this $\varepsilon$ gives $K_1 \in \mathbb{N}$ with $|z_k - z| < \varepsilon$ for all $k \ge K_1$, hence $z_k - z < \varepsilon$ and so $z_k < z + \varepsilon$ for all such $k$. [step 1.1, step 2.1, L1, L4, L5]

4.1 Fix an index $k$ with $k \ge K_0$ and $k \ge K_1$. Then $0 \le z_k < z + \varepsilon < z + (-z) = 0$, so $0 < 0$, which is impossible. [step 1.1, step 2.1, step 3.1, L5, L6]

5.1 The assumption $z < 0$ is therefore untenable; by trichotomy $z \ge 0$, that is $y - x \ge 0$, that is $x \le y$; since $x$ and $y$ are the unique limits of $(x_k)$ and $(y_k)$ by [L8], that is exactly $\lim_k x_k \le \lim_k y_k$. Since $(x_k)$ and $(y_k)$ were an arbitrary pair satisfying the hypotheses, the conclusion applies to every such pair, and the two stated special cases are instances of it. Let $(w_k)$ be convergent. If $w_k \ge 0$ from some index on, apply the conclusion to the pair consisting of the constant sequence $0$, which converges to $0$ by [L7], and of $(w_k)$: it gives $0 \le \lim_k w_k$. If $a \le w_k \le b$ from some index on, apply it first to the constant sequence $a$ and $(w_k)$, then to $(w_k)$ and the constant sequence $b$: it gives $a \le \lim_k w_k$ and $\lim_k w_k \le b$. [step 4.1, L5, L7, L8, discharge-contradiction] ∎

## Remarks

- The two special cases are instances of the main claim, discharged in step 5.1 by taking one of the two sequences constant; that a constant sequence converges to its value ([[def-sequence]]) is the only extra ingredient they need.

- **The inequality does not become strict.** From $x_k < y_k$ for every $k$ one may conclude only $\lim x_k \le \lim y_k$; the witness $x_k = 0 < 1/(k+1) = y_k$ has equal limits ([[fs-limit-preserves-strict-inequality]]). Intuitively, the order relation $<$ is not preserved by passage to a limit because a strict gap may shrink to nothing, while $\le$ is preserved because it is closed under that shrinking.

- The proof routes through the single sequence $(z_k) = (y_k - x_k)$ and the difference rule of [[thm-algebra-of-limits]]. That is not an economy of writing only: it isolates the one thing being proved, namely that a sequence eventually $\ge 0$ cannot have a negative limit.
````

### `lem-positive-and-negative-parts`

````markdown
---
id: lem-positive-and-negative-parts
kind: lemma
title: "Positive and negative parts: $a_k = a_k^{+} - a_k^{-}$ and $|a_k| = a_k^{+} + a_k^{-}$; a series converges absolutely iff both $\\sum a_k^{+}$ and $\\sum a_k^{-}$ converge, and for a conditionally convergent series both diverge to $+\\infty$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-absolute-and-conditional-convergence, def-series, def-max-min, def-abs-value, lem-of-abs-value, thm-nonnegative-series-bounded-partial-sums, lem-series-linearity, thm-direct-comparison-test, def-divergence-to-infinity, def-real-limit]
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
    - title: "Absolute convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Absolute_convergence"
    - title: "Positive and negative parts (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Positive_and_negative_parts"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "N. Donaldson, Math 140A: Series"
      url: "https://www.math.uci.edu/~ndonalds/math140a/3series.html"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals ([[def-series]]) and define its **positive
part** and **negative part** by

$$a_k^{+} \;:=\; \frac{|a_k| + a_k}{2}, \qquad a_k^{-} \;:=\; \frac{|a_k| - a_k}{2} \qquad (k \in \mathbb{N}),$$

with $|x|$ the absolute value ([[def-abs-value]]). Then:

1. $a_k^{+} = \max\{a_k, 0\}$ and $a_k^{-} = \max\{-a_k, 0\}$ ([[def-max-min]]);
   in particular $a_k^{+} \ge 0$ and $a_k^{-} \ge 0$, and
   $$a_k = a_k^{+} - a_k^{-}, \qquad |a_k| = a_k^{+} + a_k^{-} .$$
2. $\sum a_k$ converges absolutely
   ([[def-absolute-and-conditional-convergence]]) **if and only if** both
   $\sum a_k^{+}$ and $\sum a_k^{-}$ converge.
3. If $\sum a_k$ converges conditionally, then neither $\sum a_k^{+}$ nor
   $\sum a_k^{-}$ converges, and the partial sums of each diverge to $+\infty$
   ([[def-divergence-to-infinity]]).

Claim 3 is the engine of the rearrangement theory: a conditionally convergent
series carries an unlimited supply of positive terms and an unlimited supply of
negative ones, and its convergence is nothing but a cancellation between them.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals, its positive and negative parts $a_k^{+}$ and $a_k^{-}$ as displayed above, and the partial sums of the associated series ([[def-series]]).

[L1] Absolute value: $|x| \ge 0$, $-|x| \le x \le |x|$, and $|x| = x$ when $x \ge 0$ while $|x| = -x$ when $x < 0$ ([[def-abs-value]], [[lem-of-abs-value]]).

[L2] A maximum of a subset of $\mathbb{R}$ is its greatest element, and there is at most one ([[def-max-min]]).

[L3] Linearity of series: if $\sum x_k$ and $\sum y_k$ converge then so does $\sum (x_k + y_k)$, and $\sum c\,x_k$ converges for every real $c$ ([[lem-series-linearity]]).

[L4] Direct comparison: if $0 \le x_k \le y_k$ from some index on and $\sum y_k$ converges, then $\sum x_k$ converges ([[thm-direct-comparison-test]]).

[L5] For a series of nonnegative terms, convergence is equivalent to the range of the partial sums being bounded above; and if that range is not bounded above then the partial sums diverge to $+\infty$ ([[thm-nonnegative-series-bounded-partial-sums]], [[def-divergence-to-infinity]]).

[L6] $\sum a_k$ converges absolutely means $\sum |a_k|$ converges, and converges conditionally means it converges while $\sum |a_k|$ does not ([[def-absolute-and-conditional-convergence]], [[def-real-limit]]).

## Proof

**Proof technique:** direct.

1.1 For every $k$, $|a_k| + a_k \ge 0$ and $|a_k| - a_k \ge 0$, since $-|a_k| \le a_k \le |a_k|$; dividing by the positive real $2$ gives $a_k^{+} \ge 0$ and $a_k^{-} \ge 0$. [L1, algebra]

1.2 For every $k$, $a_k^{+} - a_k^{-} = \bigl((|a_k| + a_k) - (|a_k| - a_k)\bigr)/2 = a_k$ and $a_k^{+} + a_k^{-} = \bigl((|a_k| + a_k) + (|a_k| - a_k)\bigr)/2 = |a_k|$. [algebra]

1.3 Assume now that $\sum a_k$ converges conditionally, so $\sum a_k$ converges and $\sum |a_k|$ diverges. [L6]

2.1 If $a_k \ge 0$ then $|a_k| = a_k$, so $a_k^{+} = a_k$ and $a_k^{-} = 0$; if $a_k < 0$ then $|a_k| = -a_k$, so $a_k^{+} = 0$ and $a_k^{-} = -a_k$. In both situations $a_k^{+}$ is the greater of $a_k$ and $0$ and $a_k^{-}$ is the greater of $-a_k$ and $0$, which is claim 1 together with step 1.1 and step 1.2. [L1, L2, step 1.1, step 1.2, algebra]

2.2 From step 1.1 and step 1.2, $0 \le a_k^{+} \le a_k^{+} + a_k^{-} = |a_k|$ and $0 \le a_k^{-} \le |a_k|$ for every $k$. [step 1.1, step 1.2, algebra]

2.3 If both $\sum a_k^{+}$ and $\sum a_k^{-}$ converge, then $\sum |a_k| = \sum (a_k^{+} + a_k^{-})$ converges. [step 1.2, L3]

3.1 If $\sum |a_k|$ converges then, by comparison with $\sum |a_k|$ using step 2.2, both $\sum a_k^{+}$ and $\sum a_k^{-}$ converge. [step 2.2, L4]

3.2 If $\sum a_k^{+}$ converged, then $\sum a_k^{-} = \sum \bigl(a_k^{+} + (-1)a_k\bigr)$ would converge by linearity, whence $\sum |a_k|$ would converge by step 2.3; since $\sum |a_k|$ diverges, $\sum a_k^{+}$ diverges. [step 1.3, step 1.2, step 2.3, L3]

3.3 If $\sum a_k^{-}$ converged, then $\sum a_k^{+} = \sum (a_k^{-} + a_k)$ would converge by linearity, whence again $\sum |a_k|$ would converge; since $\sum |a_k|$ diverges, $\sum a_k^{-}$ diverges. [step 1.3, step 1.2, step 2.3, L3]

4.1 Claim 2 is the conjunction of step 2.3 and step 3.1, read through the definition of absolute convergence. [step 2.3, step 3.1, L6]

5.1 Both $\sum a_k^{+}$ and $\sum a_k^{-}$ are series of nonnegative terms by step 1.1, so each diverges only if the range of its partial sums fails to be bounded above, and then those partial sums diverge to $+\infty$; this is claim 3. [step 1.1, step 3.2, step 3.3, L5] ∎

## Remarks

- **The two parts are determined by the terms, with no choice anywhere.** The displayed formulas define $a^{+}$ and $a^{-}$ outright, and step 2.1 identifies them with the two maxima; nothing in the proof selects one of several candidates.

- **Claim 3 is sharp in both directions.** Absolute convergence makes both part series converge, and then $\sum_{k=0}^{\infty} a_k$ is the difference of their sums. Conditional convergence makes both part series diverge to $+\infty$, and the difference of their partial sums is what converges. There is no third possibility for a convergent series, because claim 2 covers the case where one of them converges: if exactly one converged, $\sum a_k = \sum(a_k^{+} - a_k^{-})$ could not converge, since the sum of a convergent and a divergent series diverges.

- **Why $\max$ is mentioned at all.** The formulas with $|a_k|$ are what the algebra uses, while $\max\{a_k, 0\}$ is what the name "positive part" means and what makes claims about signs immediate. Step 2.1 records that they agree, so either may be used later without further comment.
````

### `lem-series-linearity`

````markdown
---
id: lem-series-linearity
kind: lemma
title: "Convergent series add and scale termwise"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-series, thm-algebra-of-limits, lem-finite-sum-laws, def-finite-sum]
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
    - title: "Series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Series_(mathematics)"
    - title: "T. Tao, Analysis I, 3rd ed., §7.2"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ and $(b_k)$ be sequences of reals whose series converge
([[def-series]]), and let $c \in \mathbb{R}$. Then:

1. $\sum (a_k + b_k)$ converges, with
   $\displaystyle\sum_{k=0}^{\infty}(a_k + b_k) = \sum_{k=0}^{\infty} a_k + \sum_{k=0}^{\infty} b_k$;
2. $\sum c\,a_k$ converges, with
   $\displaystyle\sum_{k=0}^{\infty} c\,a_k = c \sum_{k=0}^{\infty} a_k$.

Moreover, for $c \ne 0$ and an arbitrary sequence $(a_k)$, whose series is not
assumed to converge:

3. $\sum c\,a_k$ converges **if and only if** $\sum a_k$ converges. Equivalently,
   $\sum a_k$ diverges if and only if $\sum c\,a_k$ diverges.

Claim 3 is the form used whenever a comparison is made against a constant
multiple of a known series.

## Facts & Assumptions

**Given:** Sequences $(a_k)$, $(b_k)$ of reals and $c \in \mathbb{R}$, with partial sums $s_n = \sum_{k<n} a_k$ and $t_n = \sum_{k<n} b_k$ ([[def-series]], [[def-finite-sum]]).

[L1] Additivity and scaling of finite sums: $\sum_{k<n}(a_k + b_k) = \sum_{k<n} a_k + \sum_{k<n} b_k$ and $\sum_{k<n} c\,a_k = c \sum_{k<n} a_k$ ([[lem-finite-sum-laws]]).

[L2] Algebra of limits: if $x_n \to x$ and $y_n \to y$ then $x_n + y_n \to x + y$ and $c\,x_n \to c\,x$ ([[thm-algebra-of-limits]]).

## Proof

**Proof technique:** direct.

1.1 The partial sums of $\sum (a_k + b_k)$ are $\sum_{k<n}(a_k + b_k) = s_n + t_n$, and those of $\sum c\,a_k$ are $\sum_{k<n} c\,a_k = c\,s_n$. [given, L1]

1.2 Assume $\sum a_k$ and $\sum b_k$ converge, say $s_n \to S$ and $t_n \to T$. [given]

2.1 Then $s_n + t_n \to S + T$, so $\sum(a_k + b_k)$ converges with sum $S + T$, which is claim 1. [step 1.2, step 1.1, L2]

2.2 Likewise $c\,s_n \to c\,S$, so $\sum c\,a_k$ converges with sum $c\,S$, which is claim 2. [step 1.2, step 1.1, L2]

3.1 For claim 3, let $c \ne 0$ and let $(a_k)$ be arbitrary. If $\sum a_k$ converges then $\sum c\,a_k$ converges by claim 2. [step 2.2]

3.2 Conversely, if $\sum c\,a_k$ converges then applying claim 2 to the sequence $(c\,a_k)$ and the scalar $1/c$, which exists since $c \ne 0$, shows that $\sum (1/c)(c\,a_k) = \sum a_k$ converges. [step 2.2, algebra]

4.1 The two implications are claim 3, and its contrapositive form is the statement about divergence. [step 3.1, step 3.2] ∎

## Remarks

- **There is no product rule here, and there is no rule for $\sum a_k b_k$.** The proof works because a finite sum is additive and homogeneous, and neither property has an analogue for products. Multiplying series is a genuinely harder question, requiring absolute convergence, and it is not treated on this page.

- **Claim 3 needs $c \ne 0$ and nothing else.** In particular it does not need either series to converge, which is what makes it usable in the divergence direction: scaling a divergent series by a nonzero constant leaves it divergent.
````

### `thm-induction-principle`

````markdown
---
id: thm-induction-principle
kind: theorem
title: "The principle of mathematical induction"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-natural-numbers, def-inductive-set, lem-omega-smallest-inductive]
aliases: [principle-of-induction, induction-principle]
landmark: true
short: "$0\\in S$, $\\sigma$-closed $\\Rightarrow S=\\mathbb N$"
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
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "Set-theoretic definition of natural numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Set-theoretic_definition_of_natural_numbers"
    - title: "B. Kaya, MATH 320 Set Theory (METU lecture notes)"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
pipeline_run: null
---

## Statement

Let $S \subseteq \mathbb{N}$. If $0 \in S$ and $\sigma(n) \in S$ whenever $n \in S$, then $S = \mathbb{N}$. Equivalently (property form): if a property $P$ satisfies $P(0)$ and ($P(n) \Rightarrow P(\sigma(n))$) for all $n$, then $P(n)$ holds for all $n \in \mathbb{N}$. This is the induction principle, the basis of proof by induction.

## Facts & Assumptions

**Given:** $\mathbb{N} = \omega$ is the smallest inductive set ([[def-inductive-set]], [[def-natural-numbers]], [[lem-omega-smallest-inductive]]); $0 = \varnothing$, $\sigma(n) = n \cup \{n\}$.

[L1] $\omega$ is contained in every inductive set ([[lem-omega-smallest-inductive]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $S \subseteq \mathbb{N}$ with $0 = \varnothing \in S$ and ($x \in S \Rightarrow \sigma(x) = x \cup \{x\} \in S$). [given]

2.1 Then $S$ contains $\varnothing$ and is closed under $x \mapsto x \cup \{x\}$, so $S$ is an inductive set. [step 1.1]

3.1 $\mathbb{N} = \omega \subseteq S$ because $\omega$ is a subset of every inductive set. [L1, step 2.1]

4.1 With $S \subseteq \mathbb{N}$ by hypothesis, $S = \mathbb{N}$. [step 3.1, given]

5.1 The property form is the set case with $S = \{n \in \mathbb{N} : P(n)\}$: $P(0)$ and $P(n) \Rightarrow P(\sigma(n))$ give $0 \in S$ and $\sigma$-closure, so $S = \mathbb{N}$, i.e. $P$ holds for all $n$; conversely the set form is the property form applied to $P(n) :\equiv n \in S$, so the two are equivalent. [step 4.1] ∎
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

### `thm-riemann-series-theorem`

````markdown
---
id: thm-riemann-series-theorem
kind: theorem
title: "The Riemann series theorem: a conditionally convergent real series has, for every $c \\in \\mathbb{R}$, a rearrangement with sum $c$, and rearrangements diverging to $+\\infty$, to $-\\infty$, and oscillating with any prescribed $\\liminf \\le \\limsup$ in $\\overline{\\mathbb{R}}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-positive-and-negative-parts, def-rearrangement-and-unconditional-convergence, def-absolute-and-conditional-convergence, lem-nth-term-test, thm-recursion, thm-well-ordering-principle, def-injection-surjection-bijection, def-divergence-to-infinity, def-limsup-liminf, def-extended-reals, def-extended-limits, thm-convergence-iff-limsup-equals-liminf, thm-nonnegative-series-bounded-partial-sums, def-series, def-finite-sum, lem-finite-sum-laws, lem-limit-preserves-order, thm-induction-principle, def-real-limit]
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
    - title: "Riemann series theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_series_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "N. Donaldson, Math 140A: Real Analysis notes"
      url: "https://www.math.uci.edu/~ndonalds/math140a/notes.pdf"
    - title: "John K. Hunter, An Introduction to Real Analysis, Chapter 4"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch4.pdf"
    - title: "W. Fisher, Introduction to Analysis"
      url: "https://math.berkeley.edu/~willfisher/teaching/104sm24/main.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals whose series converges conditionally
([[def-absolute-and-conditional-convergence]]). Let $\alpha, \beta \in
\overline{\mathbb{R}}$ ([[def-extended-reals]]) with $\alpha \le \beta$. Then
there is a bijection $\sigma : \mathbb{N} \to \mathbb{N}$
([[def-injection-surjection-bijection]]) such that the partial sums
$T_n = \sum_{k<n} a_{\sigma(k)}$ of the rearranged series
([[def-rearrangement-and-unconditional-convergence]]) satisfy

$$\liminf_{n} T_n = \alpha, \qquad \limsup_{n} T_n = \beta$$

([[def-limsup-liminf]]). In particular:

1. for every $c \in \mathbb{R}$, taking $\alpha = \beta = c$, there is a
   rearrangement of $\sum a_k$ that converges with sum $c$;
2. taking $\alpha = \beta = +\infty$, there is a rearrangement whose partial sums
   diverge to $+\infty$ ([[def-divergence-to-infinity]]), and taking
   $\alpha = \beta = -\infty$, one whose partial sums diverge to $-\infty$;
3. taking $\alpha < \beta$, there is a rearrangement whose partial sums oscillate,
   with limit inferior exactly $\alpha$ and limit superior exactly $\beta$.

So the sum of a conditionally convergent series is an artefact of the order in
which its terms are written, and every prescribed asymptotic behaviour is
attainable. Contrast [[thm-dirichlet-rearrangement]], where absolute convergence
makes the sum independent of the order.

**The construction.** Write $P := \{k : a_k \ge 0\}$ and $N := \{k : a_k < 0\}$,
which partition $\mathbb{N}$, and enumerate each increasingly as $(p_i)$ and
$(q_l)$. Fix real sequences $(u_j)$ and $(v_j)$ with $u_j \le v_j$ and
$u_j \le v_{j+1}$ for every $j$; these are the *targets*. The rearrangement is
produced one index at a time by a greedy rule: **while the running sum is at most
the current upper target, take the next unused nonnegative term; once it exceeds
that target, take negative terms until the running sum falls below the current
lower target; then move to the next pair of targets and repeat.** Both supplies
are inexhaustible, because for a conditionally convergent series both
$\sum a_k^{+}$ and $\sum a_k^{-}$ diverge to $+\infty$
([[lem-positive-and-negative-parts]]); and the overshoot at each turning point is
at most the term just used, which tends to $0$ because $a_k \to 0$
([[lem-nth-term-test]]). Those two facts are the whole theorem.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals with $\sum a_k$ convergent and $\sum |a_k|$ divergent; the positive and negative parts $a_k^{+}$, $a_k^{-}$; the sets $P = \{k : a_k \ge 0\}$ and $N = \{k : a_k < 0\}$; and extended reals $\alpha \le \beta$.

[A1] $P$ and $N$ are disjoint with union $\mathbb{N}$, since the order on $\mathbb{R}$ is total; $a_k^{+} = a_k$ and $a_k^{-} = 0$ for $k \in P$, while $a_k^{+} = 0$ and $a_k^{-} = -a_k$ for $k \in N$ ([[lem-positive-and-negative-parts]]).

[L1] For a conditionally convergent series, the partial sums of $\sum a_k^{+}$ and of $\sum a_k^{-}$ both diverge to $+\infty$ ([[lem-positive-and-negative-parts]], [[def-divergence-to-infinity]]).

[L2] The terms of a convergent series tend to $0$ ([[lem-nth-term-test]]).

[L3] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L4] The recursion theorem: for a set $A$, an element $a \in A$ and a function $f : A \to A$ there is a unique $g : \mathbb{N} \to A$ with $g(0) = a$ and $g(n+1) = f(g(n))$ ([[thm-recursion]]).

[L5] The principle of induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L6] Finite sums: $\sum_{k<0} x_k = 0$, $\sum_{k<n+1}x_k = \sum_{k<n}x_k + x_n$, splitting at an intermediate index, and $\sum_{k<n} 0 = 0$ ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L7] Partial sums of a series and their recursion $s_{n+1} = s_n + a_n$ ([[def-series]]).

[L8] Limits preserve non-strict inequalities holding eventually ([[lem-limit-preserves-order]], [[def-real-limit]]).

[L9] A bijection is an injective surjection ([[def-injection-surjection-bijection]]).

[L10] $\limsup_n x_n = \inf\{\, \sup\{x_m : m \ge n\} : n \in \mathbb{N} \,\}$ and $\liminf_n x_n = \sup\{\, \inf\{x_m : m \ge n\} : n \in \mathbb{N}\,\}$, both taken in $\overline{\mathbb{R}}$ ([[def-limsup-liminf]], [[def-extended-reals]]).

[L11] A sequence converges to a real $L$ exactly when its limit inferior and limit superior both equal $L$, and diverges to $\pm\infty$ exactly when both equal $\pm\infty$ ([[thm-convergence-iff-limsup-equals-liminf]], [[def-extended-limits]]).

[L12] For nonnegative terms, a series diverges exactly when the range of its partial sums is unbounded above, and then those partial sums diverge to $+\infty$ ([[thm-nonnegative-series-bounded-partial-sums]]).

## Proof

**Proof technique:** constructive.

1.1 Since $\sum a_k$ converges, $a_k \to 0$. [given, L2]

1.2 For every $K \in \mathbb{N}$ there is $k \ge K$ with $k \in P$: otherwise $a_k < 0$ for every $k \ge K$, so $a_k^{+} = 0$ for every $k \ge K$, so the partial sums of $\sum a_k^{+}$ are constant from $K$ on and hence bounded, contradicting [L1]. The same argument with $a_k^{-}$ shows that for every $K$ there is $k \ge K$ with $k \in N$. [A1, L1, L6, L12]

2.1 In particular $P$ and $N$ are nonempty, and for every $k$ the sets $\{m \in P : m > k\}$ and $\{m \in N : m > k\}$ are nonempty; so by [L3] each has a least element. [step 1.2, L3]

3.1 Define $p : \mathbb{N} \to \mathbb{N}$ by $p_0 := \min P$ and $p_{i+1} := \min\{m \in P : m > p_i\}$, and $q : \mathbb{N} \to \mathbb{N}$ by $q_0 := \min N$ and $q_{l+1} := \min\{m \in N : m > q_l\}$; both are legitimate applications of the recursion theorem, the "next element" operations being total functions $\mathbb{N} \to \mathbb{N}$ by step 2.1. Both $p$ and $q$ take values in $P$, respectively $N$, and are strictly increasing. [step 2.1, L3, L4, construct]

4.1 An induction gives $p_i \ge i$ and $q_l \ge l$ for every index, since $p_0 \ge 0$ and $p_{i+1} > p_i \ge i$ forces $p_{i+1} \ge i+1$. [step 3.1, L5]

4.2 An induction on $i$ gives $P \cap \{k : k < p_i\} = \{p_{i'} : i' < i\}$: at $i = 0$ both sides are empty because $p_0$ is the least element of $P$; and passing from $i$ to $i+1$ adds exactly $p_i$, since $p_{i+1}$ is the least element of $P$ strictly greater than $p_i$, so no element of $P$ lies strictly between them. The same holds for $q$ and $N$. [step 3.1, L5]

4.3 Fix real sequences $(u_j)$ and $(v_j)$ with $u_j \le v_j$ and $u_j \le v_{j+1}$ for every $j$. Put $A := \mathbb{N} \times \mathbb{N} \times \mathbb{N} \times \mathbb{R} \times \{0,1\}$, whose elements are written $(i, l, j, s, m)$, and define $\mathrm{out} : A \to \mathbb{N}$ and $f : A \to A$ by: if $m = 0$ and $s \le v_j$, then $\mathrm{out} := p_i$ and $f := (i+1, l, j, s + a_{p_i}, 0)$; if $m = 0$ and $s > v_j$, then $\mathrm{out} := q_l$ and $f := (i, l+1, j, s + a_{q_l}, 1)$; if $m = 1$ and $s \ge u_j$, then $\mathrm{out} := q_l$ and $f := (i, l+1, j, s + a_{q_l}, 1)$; if $m = 1$ and $s < u_j$, then $\mathrm{out} := p_i$ and $f := (i+1, l, j+1, s + a_{p_i}, 0)$. The four cases are exhaustive and mutually exclusive, the order on $\mathbb{R}$ being total, so $f$ and $\mathrm{out}$ are functions. [step 3.1, construct]

5.1 Every element of $P$ is some $p_i$, and every element of $N$ is some $q_l$: given $k \in P$, the set $\{i : p_i > k\}$ is nonempty by step 4.1, so it has a least element $i_0$; $i_0 \ne 0$ since $p_0 = \min P \le k$, and $p_{i_0 - 1} \le k < p_{i_0}$, so $k \in P \cap \{m : m < p_{i_0}\} = \{p_{i'} : i' < i_0\}$ by step 4.2. Together with step 3.1 this says that $p$ is a bijection onto $P$ and $q$ a bijection onto $N$; both are injective because they are strictly increasing. [step 3.1, step 4.1, step 4.2, L3, L9]

5.2 An induction on $i$ gives $\sum_{i' < i} a_{p_{i'}} = \sum_{k < p_i} a_k^{+}$: at $i = 0$ every $k < p_0$ lies in $N$, so $a_k^{+} = 0$ and both sides are $0$; and splitting $\sum_{k<p_{i+1}} a_k^{+}$ at $p_i$ and at $p_i + 1$ isolates the single term $a_{p_i}^{+} = a_{p_i}$, all remaining indices $k$ with $p_i < k < p_{i+1}$ lying in $N$ by step 4.2 and contributing $0$. The same argument gives $\sum_{l' < l} a_{q_{l'}} = -\sum_{k<q_l} a_k^{-}$. [A1, step 3.1, step 4.2, L5, L6]

5.3 By the recursion theorem let $g : \mathbb{N} \to A$ satisfy $g(0) = (0,0,0,0,0)$ and $g(n+1) = f(g(n))$, write $g(n) = (i_n, l_n, j_n, s_n, m_n)$, and define $\sigma(n) := \mathrm{out}(g(n))$. [step 4.3, L4, construct]

5.4 For general $\alpha \le \beta$ choose real sequences with $u_j \le v_j$ and $u_j \le v_{j+1}$ as follows: if $\alpha, \beta$ are real, $u_j := \alpha$ and $v_j := \beta$; if $\alpha = -\infty$ and $\beta$ is real, $u_j := \beta - (j+1)$ and $v_j := \beta$; if $\alpha$ is real and $\beta = +\infty$, $u_j := \alpha$ and $v_j := \alpha + (j+1)$; if $\alpha = \beta = +\infty$, $u_j := j$ and $v_j := j+1$; if $\alpha = \beta = -\infty$, $u_j := -(j+2)$ and $v_j := -(j+1)$; and if $\alpha = -\infty$, $\beta = +\infty$, $u_j := -(j+1)$ and $v_j := j+1$. In every case $(u_j)$ tends to $\alpha$ and $(v_j)$ to $\beta$ in $\overline{\mathbb{R}}$, and both conditions of step 4.3 hold. [step 4.3, L11, choose]

6.1 Hence $\sum_{i'<i} a_{p_{i'}} \to +\infty$ as $i \to \infty$ and $\sum_{l'<l} a_{q_{l'}} \to -\infty$ as $l \to \infty$: the left-hand sides are the values of the partial sums of $\sum a_k^{+}$, respectively of $-\sum a_k^{-}$, at the strictly increasing indices $p_i$, respectively $q_l$, and by step 4.1 those indices are at least $i$, respectively $l$. [step 4.1, step 5.2, L1]

6.2 An induction on $n$ gives $i_n + l_n = n$ and $s_n = \sum_{k<n} a_{\sigma(k)}$: both hold at $n = 0$, and each transition increases exactly one of $i, l$ by one and adds to $s$ exactly the term $a_{\sigma(n)}$ indexed by the emitted natural. So $s_n = T_n$, the $n$-th partial sum of the rearranged series. [step 4.3, step 5.3, L5, L7]

7.1 Consequently, for every $i_0 \in \mathbb{N}$ and every real $M$ there is $i > i_0$ with $\sum_{i'=i_0}^{i-1} a_{p_{i'}} > M$, and for every $l_0$ and every real $M$ there is $l > l_0$ with $\sum_{l' = l_0}^{l-1} a_{q_{l'}} < M$; this is step 6.1 together with splitting of finite sums, the omitted initial block being a fixed real. [step 6.1, L6]

7.2 An induction on $n$ gives that $\sigma(n) = p_{i_n}$ at every step that increments $i$, and $\sigma(n) = q_{l_n}$ at every step that increments $l$; since $(i_n)$ and $(l_n)$ are nondecreasing and increase by one exactly at those steps, distinct steps of the first kind carry distinct values of $i_n$ and distinct steps of the second kind distinct values of $l_n$. As $p$ and $q$ are injective with disjoint ranges $P$ and $N$, the map $\sigma$ is injective. [step 4.3, step 6.2, step 5.1, L5]

8.1 There are infinitely many steps of each kind: if from some step $n_0$ on no step increments $l$, then $m_n$ is eventually constantly $0$, because a step with $m = 1$ that does not increment $l$ sets $m$ to $0$ and a step with $m = 0$ that does not increment $l$ leaves $m$ at $0$; then $j_n$ is eventually constant, say $j$, and every subsequent step satisfies $s_n \le v_{j}$, while by step 7.1 the values $s_n$, which from $n_0$ on increase by the successive terms $a_{p_i}$, exceed $v_j$ for some $n$. Symmetrically, if from some step on no step increments $i$, then $m_n$ is eventually constantly $1$, $j_n$ is eventually constant $j$, every subsequent step satisfies $s_n \ge u_j$, and step 7.1 makes $s_n$ fall below $u_j$. [step 7.1, step 4.3, step 6.2, L5]

9.1 Hence $i_n \to \infty$ and $l_n \to \infty$, so every $p_i$ and every $q_l$ occurs as some $\sigma(n)$; since $P \cup N = \mathbb{N}$ and $p, q$ enumerate $P$ and $N$, the map $\sigma$ is surjective, and with step 7.2 it is a bijection of $\mathbb{N}$. [A1, step 5.1, step 7.2, step 8.1, L9]

9.2 Likewise $j_n \to \infty$: if $j_n$ were eventually constant $j$, then from some step on no round is completed, so no step has $m = 1$ and $s < u_j$; by the argument of step 8.1 the mode is then eventually constant, and either it is $0$ forever, whence $s_n \le v_j$ always while $s_n$ increases past $v_j$, or it is $1$ forever, whence $s_n \ge u_j$ always while $s_n$ falls below $u_j$. [step 7.1, step 4.3, step 8.1]

10.1 For each $j \ge 1$ let $\beta_j$ be the step at which the mode of round $j$ changes from $0$ to $1$, that is the unique $n$ with $j_n = j$, $m_n = 0$ and $s_n > v_j$, and let $\alpha_j$ be the step at which round $j$ is completed, the unique $n$ with $j_n = j$, $m_n = 1$ and $s_n < u_j$; both exist by step 8.1 and step 9.2, and $\alpha_{j-1} < \beta_j < \alpha_j$. [step 4.3, step 8.1, step 9.2, choose]

11.1 The step $\beta_j$ is preceded, within round $j$, either by a step that added a term $a_{p_i} \ge 0$ to a value $s \le v_j$, or by the completing step $\alpha_{j-1}$ of the previous round, which added a term $a_{p_i} \ge 0$ to a value $s < u_{j-1} \le v_j$. In both situations $v_j < T_{\beta_j} \le v_j + a_{p_i}$ for the index $i$ used at the immediately preceding step. [step 4.3, step 10.1]

11.2 Likewise the step $\alpha_j$ is preceded within round $j$ by a step that added a term $a_{q_l} < 0$ to a value $s \ge u_j$, that step being either an earlier descent step or the switch $\beta_j$ itself, at which $s > v_j \ge u_j$; so $u_j - |a_{q_l}| \le T_{\alpha_j} < u_j$ for the index $l$ used at that step. [step 4.3, step 10.1]

11.3 For $\alpha_{j-1} \le n \le \beta_j$ the partial sums increase, every step of the climb adding a term $a_{p_i} \ge 0$; for $\beta_j \le n \le \alpha_j$ they decrease, every step of the descent adding a term $a_{q_l} < 0$. Hence for every $n$ with $\alpha_{j-1} \le n \le \alpha_j$ one has $\min\{T_{\alpha_{j-1}}, T_{\alpha_j}\} \le T_n \le T_{\beta_j}$. [A1, step 4.3, step 10.1]

12.1 Put $\delta_j := \max\{a_{p_{i(j)}},\, |a_{q_{l(j)}}|\}$ for the two indices appearing in step 11.1 and step 11.2. As $j \to \infty$ those indices tend to infinity, by step 8.1 and step 9.2, so $p_{i(j)} \to \infty$ and $q_{l(j)} \to \infty$ by step 4.1, and $\delta_j \to 0$ by step 1.1. Thus $v_j < T_{\beta_j} \le v_j + \delta_j$ and $u_j - \delta_j \le T_{\alpha_j} < u_j$ for every $j \ge 1$. [step 1.1, step 4.1, step 8.1, step 9.2, step 11.1, step 11.2]

12.2 Fix $n$ and let $J$ be least with $\alpha_{J-1} \ge n$, which exists because the $\alpha_j$ are strictly increasing. By step 11.3 every $m \ge \alpha_{J-1}$ satisfies $T_m \le \sup\{T_{\beta_j} : j \ge J\}$, and only the finitely many indices $m$ with $n \le m < \alpha_{J-1}$ are unaccounted for; each of those lies in a round of index at most $J-1$ and so is at most $\max\{T_{\beta_j} : 1 \le j \le J-1\}$ together with $T_n$ itself. Hence $\sup\{T_m : m \ge n\}$ is finite or $+\infty$ according as $\sup\{T_{\beta_j} : j \ge J\}$ is, and taking the infimum over $n$, which drives $J$ to infinity, gives $\limsup_n T_n = \limsup_j T_{\beta_j}$. [step 10.1, step 11.3, L10]

13.1 Take $u_j = v_j = c$ for all $j$, which satisfies the two conditions of step 4.3. Then $c < T_{\beta_j} \le c + \delta_j$ and $c - \delta_j \le T_{\alpha_j} < c$, so by step 11.3 every $n$ with $\alpha_{j-1} \le n \le \alpha_j$ has $|T_n - c| \le \max\{\delta_{j-1}, \delta_j\}$. Given a real $\varepsilon > 0$, choose $J \ge 2$ with $\delta_j < \varepsilon$ for all $j \ge J-1$; then $|T_n - c| < \varepsilon$ for all $n \ge \alpha_{J-1}$, so $T_n \to c$ and the rearranged series converges with sum $c$. This is claim 1. [step 12.1, step 11.3, L8]

13.2 Take $v_j = j+1$ and $u_j = j$, which satisfy the two conditions. Then $T_{\alpha_j} \ge u_j - \delta_j = j - \delta_j$, so by step 11.3 every $n$ with $\alpha_{j-1} \le n \le \alpha_j$ has $T_n \ge \min\{j-1-\delta_{j-1},\, j - \delta_j\}$, a quantity that exceeds any prescribed real for all large $j$; hence $T_n \to +\infty$. Taking instead $v_j = -(j+1)$ and $u_j = -(j+2)$, which also satisfy the two conditions, gives $T_n \le T_{\beta_j} \le v_j + \delta_j = -(j+1) + \delta_j$ on the same ranges, hence $T_n \to -\infty$. This is claim 2. [step 12.1, step 11.3, L8]

13.3 By step 12.1 the subsequence $(T_{\beta_j})_{j \ge 1}$ tends to $\beta$ and $(T_{\alpha_j})_{j\ge1}$ tends to $\alpha$, in $\overline{\mathbb{R}}$: when the target sequence is real-valued and convergent the two-sided bound of step 12.1 with $\delta_j \to 0$ gives it, and when the target sequence diverges the one-sided bound does. [step 12.1, step 5.4, L8, L11]

14.1 By step 13.3 and [L11], $\limsup_j T_{\beta_j} = \beta$; so $\limsup_n T_n = \beta$. The same argument applied to infima, with $\alpha_j$ in place of $\beta_j$ and the lower bound of step 11.3 in place of the upper one, gives $\liminf_n T_n = \liminf_j T_{\alpha_j} = \alpha$. [step 13.3, step 12.2, L10, L11]

15.1 The bijection $\sigma$ of step 5.3, built from the targets chosen in step 5.4, is therefore a rearrangement of $\sum a_k$ whose partial sums have limit inferior $\alpha$ and limit superior $\beta$; claims 1 and 2 are the special cases computed directly in step 13.1 and step 13.2, and claim 3 is the case $\alpha < \beta$. [step 9.1, step 13.1, step 13.2, step 14.1, discharge-construct] ∎

## Remarks

- **Only two properties of the series are used.** That both part series diverge to $+\infty$ ([[lem-positive-and-negative-parts]]), which is what keeps the two supplies inexhaustible, and that $a_k \to 0$ ([[lem-nth-term-test]]), which is what makes the overshoot at each turning point vanish. Both hold for every conditionally convergent series and neither holds for an absolutely convergent one, whose part series both converge.

- **Where the well-ordering principle is used, and where it is not.** It appears in step 2.1 and step 3.1, to define the increasing enumerations of $P$ and $N$, and in step 5.1. It does *not* appear in the greedy rule: "take terms until the running sum crosses the target" is implemented as a one-step recursion whose state carries the two counters, the round and the running sum, so no least crossing index is ever selected. No choice principle is used anywhere; every object is determined by the data.

- **Zero terms are not a special case.** They are collected into $P$, so a run of zeros is consumed during a climb without moving the running sum, and the climb still terminates because the tail sums of $\sum_i a_{p_i}$ are unbounded. Had $P$ been defined as $\{k : a_k > 0\}$, the zero-indexed terms would have had to be inserted separately for $\sigma$ to be surjective.

- **The oscillating case is genuinely more than the two divergences.** With $\alpha < \beta$ both finite, the partial sums visit every neighbourhood of $\alpha$ and of $\beta$ infinitely often and are eventually confined to a neighbourhood of $[\alpha, \beta]$; the subsequential limit set of $(T_n)$ is then the whole interval, though nothing on this page needs that refinement.
````

