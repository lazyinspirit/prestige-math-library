## Selection reasons

- critical risk (14): 14 declared dependencies; 13 cited facts; 11 numbered proof steps; biconditional / both-direction claim; boundary-sensitive language; analytic limiting/completeness language

## Target item — `thm-dirichlet-test`

Normalized current SHA-256: `d46b041f0479b283b284c1e0caea192dea62b3cd6d491fee4ec7c10d352c2484`

The complete current item follows, including frontmatter:

````markdown
---
id: thm-dirichlet-test
kind: theorem
title: "Dirichlet's test: if the partial sums of $\\sum a_k$ are bounded and $(b_k)$ is nonincreasing with $b_k \\to 0$, then $\\sum a_k b_k$ converges"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-abel-summation-by-parts, def-series, def-monotone-sequence, def-bounded-set, lem-telescoping-series, thm-direct-comparison-test, lem-absolute-convergence-implies-convergence, lem-series-linearity, lem-null-times-bounded, thm-algebra-of-limits, lem-limit-preserves-order, lem-limit-of-tail, lem-of-abs-value, def-real-limit]
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
    - title: "Dirichlet's test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dirichlet%27s_test"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Thomson, Bruckner, and Bruckner, Elementary Real Analysis"
      url: "https://people.math.sc.edu/girardi/m5545/TBB-AllChapters-Landscape.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ and $(b_k)$ be sequences of reals, and let $A_n = \sum_{k<n} a_k$ be
the partial sums of $\sum a_k$ ([[def-series]]). Suppose that

1. the range $\{\, A_n : n \in \mathbb{N} \,\}$ is bounded ([[def-bounded-set]]),
   that is there is a real $M \ge 0$ with $|A_n| \le M$ for every $n$; and
2. $(b_k)$ is nonincreasing ([[def-monotone-sequence]]) and converges to $0$
   ([[def-real-limit]]).

Then $\sum a_k b_k$ converges.

Under hypothesis 2 the terms $b_k$ are automatically nonnegative, and the proof
says so before using it: a nonincreasing sequence is bounded below by each of its
own later terms, and passing to the limit gives $b_k \ge 0$
([[lem-limit-preserves-order]]).

**Nothing is assumed about $\sum a_k$ itself.** Its partial sums need only stay
bounded; they need not converge. That is what makes this test the source of the
alternating series test ([[thm-alternating-series-test]]) and of examples whose
sign pattern is not alternating at all.

## Facts & Assumptions

**Given:** Sequences $(a_k)$ and $(b_k)$ of reals with $A_n = \sum_{k<n} a_k$ bounded in absolute value, and $(b_k)$ nonincreasing with $b_k \to 0$.

[L1] Abel summation by parts: for every $n \ge 1$, $\sum_{k<n} a_k b_k = A_n b_{n-1} - \sum_{k<n-1} A_{k+1}(b_{k+1} - b_k)$ ([[lem-abel-summation-by-parts]]).

[L2] Nonincreasing means $b_j \ge b_k$ whenever $j \le k$ ([[def-monotone-sequence]]).

[L3] Limits preserve non-strict inequalities holding eventually ([[lem-limit-preserves-order]], [[def-real-limit]]).

[L4] Telescoping: with $d_k := b_k - b_{k+1}$, the partial sums of $\sum d_k$ are $b_0 - b_n$, and $\sum d_k$ converges if and only if $(b_k)$ converges, with sum $b_0 - \lim_k b_k$ ([[lem-telescoping-series]]).

[L5] Direct comparison: if $0 \le x_k \le y_k$ from some index on and $\sum y_k$ converges, then $\sum x_k$ converges ([[thm-direct-comparison-test]]).

[L6] If $\sum |x_k|$ converges then $\sum x_k$ converges ([[lem-absolute-convergence-implies-convergence]]).

[L7] Linearity: if $\sum x_k$ converges then so does $\sum c\,x_k$ for every real $c$ ([[lem-series-linearity]]).

[L8] A null sequence times a bounded sequence is null ([[lem-null-times-bounded]]).

[L9] Algebra of limits for differences of convergent sequences ([[thm-algebra-of-limits]]).

[L10] A sequence converges to $x$ if and only if some tail of it converges to $x$ ([[lem-limit-of-tail]]).

[L11] Absolute value: $|xy| = |x||y|$, $|x| \ge 0$, and $|-x| = |x|$ ([[lem-of-abs-value]]).

[L12] A bounded set of reals admits a bound in absolute value ([[def-bounded-set]]).

## Proof

**Proof technique:** direct.

1.1 Fix a real $M \ge 0$ with $|A_n| \le M$ for every $n \in \mathbb{N}$. [given, L12, choose]

1.2 For each fixed $k$ the inequality $b_m \le b_k$ holds for all $m \ge k$, and $(b_m)_m$ converges to $0$ while the constant sequence with value $b_k$ converges to $b_k$; hence $0 \le b_k$. [given, L2, L3]

1.3 Put $d_k := b_k - b_{k+1}$ and $c_k := A_{k+1}(b_{k+1} - b_k)$ for $k \in \mathbb{N}$, and let $s_n := \sum_{k<n} a_k b_k$, $t_n := \sum_{k<n} c_k$ and $u_n := A_{n+1} b_n$. [given]

1.4 Each $d_k \ge 0$, since $(b_k)$ is nonincreasing; and $\sum d_k$ converges, with sum $b_0 - 0 = b_0$, because $(b_k)$ converges to $0$. [given, L2, L4]

2.1 For every $k$, $|c_k| = |A_{k+1}|\,|b_{k+1} - b_k| = |A_{k+1}|\, d_k \le M d_k$, using $b_{k+1} - b_k = -d_k$ and $d_k \ge 0$. [step 1.1, step 1.3, step 1.4, L11]

2.2 The sequence $(A_{n+1})_{n}$ is bounded by $M$ and $(b_n)$ converges to $0$, so $u_n = A_{n+1} b_n$ converges to $0$. [step 1.1, step 1.3, given, L8]

2.3 The series $\sum M d_k$ converges, by step 1.4 and linearity. [step 1.4, L7]

2.4 For every $n \in \mathbb{N}$, applying [L1] at the index $n+1 \ge 1$ gives $s_{n+1} = A_{n+1} b_n - \sum_{k<n} A_{k+1}(b_{k+1}-b_k) = u_n - t_n$. [step 1.3, L1]

3.1 Since $0 \le |c_k| \le M d_k$ for every $k$, the series $\sum |c_k|$ converges by comparison, and therefore $\sum c_k$ converges; write $T$ for its sum, so that $t_n \to T$. [step 2.1, step 2.3, L5, L6]

4.1 By step 2.2, step 3.1 and the algebra of limits, $s_{n+1} \to 0 - T = -T$ as $n \to \infty$. [step 2.2, step 3.1, step 2.4, L9]

5.1 The sequence $(s_{n+1})_{n \in \mathbb{N}}$ is the first tail of $(s_n)$, so $(s_n)$ itself converges to $-T$; that is, $\sum a_k b_k$ converges, with sum $-T$. [step 4.1, L10] ∎

## Remarks

- **Where each hypothesis is used, and none is decorative.** Boundedness of $(A_n)$ is used twice: once to bound $|c_k|$ in step 2.1, and once to kill the boundary term in step 2.2. Monotonicity of $(b_k)$ is what makes $|b_{k+1} - b_k|$ equal to $b_k - b_{k+1}$, so that the bound in step 2.1 telescopes; without it the differences need not sum to anything. And $b_k \to 0$ is used both in the telescoping sum of step 1.4 and in the boundary term of step 2.2.

- **Why *nonincreasing* and not *monotone*, although either would do.** Hypothesis 2 could equally be stated with "monotone", and the theorem would still be true: a nondecreasing $(b_k)$ converging to $0$ is nonpositive, so $(-b_k)$ is nonincreasing and converges to $0$, and applying the theorem to it gives convergence of $\sum a_k(-b_k)$ and hence of $\sum a_k b_k$ ([[lem-series-linearity]]). What "monotone" may not be weakened to is "monotone and bounded": a monotone $(b_k)$ with a nonzero limit is not covered, and for such a factor the conclusion fails in general. The nonincreasing form is chosen here because it is the form the proof uses, and because it makes $b_k \ge 0$ immediate. [[thm-abel-test]] is the result that handles monotone bounded factors, and it has a different hypothesis on $\sum a_k$.

- **The sum is not computed.** The proof produces the limit as $-T$, where $T$ is the sum of a series that the argument only proves convergent. This is a convergence test and nothing more.
````

## Wave 8 provenance row for the target

```json
{
  "id": "thm-dirichlet-test",
  "statement": "literature-derived",
  "proof": "ai-altered",
  "evidence": "exact-source",
  "urls": [
    "https://people.math.sc.edu/girardi/m5545/TBB-AllChapters-Landscape.pdf"
  ],
  "rationale": "Thomson–Bruckner–Bruckner states Dirichlet's test with bounded partial sums and a monotone null factor. The proof is the sourced summation-by-parts tail estimate adapted to local notation.",
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
      "source": "lem-abel-summation-by-parts",
      "source_section": "Statement",
      "quote": "Let $(a_k)$ and $(b_k)$ be sequences of reals and let",
      "uses": [
        "2.4"
      ]
    },
    {
      "fact": "L2",
      "source": "def-monotone-sequence",
      "source_section": "Definition",
      "quote": "nonincreasing, since $j \\le k$ means $j < k$ or $j = k$ and the second case gives",
      "uses": [
        "1.2",
        "1.4"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-limit-preserves-order",
      "source_section": "Statement",
      "quote": "$x$ and $y$ respectively ([[def-real-limit]]). If $x_k \\le y_k$ eventually, that",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L3",
      "source": "def-real-limit",
      "source_section": "Definition",
      "quote": "A sequence $(x_k)$ of reals **converges** to $x \\in \\mathbb{R}$ when for",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-telescoping-series",
      "source_section": "Statement",
      "quote": "partial sums of $\\sum a_k$ are",
      "uses": [
        "1.4"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-direct-comparison-test",
      "source_section": "Statement",
      "quote": "1. if $\\sum b_k$ converges then $\\sum a_k$ converges ([[def-series]]);",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-absolute-convergence-implies-convergence",
      "source_section": "Statement",
      "quote": "Let $(a_k)$ be a sequence of reals. If the series $\\sum |a_k|$ converges",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-series-linearity",
      "source_section": "Statement",
      "quote": "1. $\\sum (a_k + b_k)$ converges, with",
      "uses": [
        "2.3"
      ]
    },
    {
      "fact": "L8",
      "source": "lem-null-times-bounded",
      "source_section": "Statement",
      "quote": "converges to $0$ ([[def-real-limit]]) and $(y_k)$ is bounded, then the product",
      "uses": [
        "2.2"
      ]
    },
    {
      "fact": "L9",
      "source": "thm-algebra-of-limits",
      "source_section": "Statement",
      "quote": "Let $(x_k)$ and $(y_k)$ be sequences of reals ([[def-sequence]]) converging to",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L10",
      "source": "lem-limit-of-tail",
      "source_section": "Statement",
      "quote": "1. $(x_k)$ converges to $x$;",
      "uses": [
        "5.1"
      ]
    },
    {
      "fact": "L11",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "$|x|$ the absolute value ([[def-abs-value]]). Then",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L12",
      "source": "def-bounded-set",
      "source_section": "Definition",
      "quote": "The notions **upper bound** and **bounded above** are already fixed by",
      "uses": [
        "1.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "Verified the stated inference at step 1.1.",
      "step": "1.1",
      "inputs": [
        "L12"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "Verified the stated inference at step 1.2.",
      "step": "1.2",
      "inputs": [
        "L2",
        "L3"
      ]
    },
    {
      "id": "step-1-3",
      "claim": "Verified the stated inference at step 1.3.",
      "step": "1.3",
      "inputs": [
        "given"
      ]
    },
    {
      "id": "step-1-4",
      "claim": "Verified the stated inference at step 1.4.",
      "step": "1.4",
      "inputs": [
        "L2",
        "L4"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "Verified the stated inference at step 2.1.",
      "step": "2.1",
      "inputs": [
        "1.1",
        "1.3",
        "1.4",
        "L11"
      ]
    },
    {
      "id": "step-2-2",
      "claim": "Verified the stated inference at step 2.2.",
      "step": "2.2",
      "inputs": [
        "1.1",
        "1.3",
        "L8"
      ]
    },
    {
      "id": "step-2-3",
      "claim": "Verified the stated inference at step 2.3.",
      "step": "2.3",
      "inputs": [
        "1.4",
        "L7"
      ]
    },
    {
      "id": "step-2-4",
      "claim": "Verified the stated inference at step 2.4.",
      "step": "2.4",
      "inputs": [
        "L1",
        "1.3"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "Verified the stated inference at step 3.1.",
      "step": "3.1",
      "inputs": [
        "2.1",
        "2.3",
        "L5",
        "L6"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "Verified the stated inference at step 4.1.",
      "step": "4.1",
      "inputs": [
        "2.2",
        "3.1",
        "2.4",
        "L9"
      ]
    },
    {
      "id": "step-5-1",
      "claim": "Verified the stated inference at step 5.1.",
      "step": "5.1",
      "inputs": [
        "4.1",
        "L10"
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
      "evidence": "Statement and step 1.4 include the zero boundary."
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
      "evidence": "Step 1.1 supplies its choice."
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
    "source": "thm-dirichlet-test",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "lem-abel-summation-by-parts",
    "declared_target": "lem-abel-summation-by-parts",
    "target_statement_provenance": "literature-derived",
    "targetPage": "absolute-convergence-and-rearrangement",
    "targetBatch": "wave8-real-analysis-absolute-convergence",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-dirichlet-test",
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
    "source": "thm-dirichlet-test",
    "sourcePage": "absolute-convergence-and-rearrangement",
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
    "source": "thm-dirichlet-test",
    "sourcePage": "absolute-convergence-and-rearrangement",
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
    "source": "thm-dirichlet-test",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "lem-telescoping-series",
    "declared_target": "lem-telescoping-series",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-dirichlet-test",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "thm-direct-comparison-test",
    "declared_target": "thm-direct-comparison-test",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-dirichlet-test",
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
    "source": "thm-dirichlet-test",
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
    "source": "thm-dirichlet-test",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "lem-null-times-bounded",
    "declared_target": "lem-null-times-bounded",
    "target_statement_provenance": "literature-derived",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-dirichlet-test",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "thm-algebra-of-limits",
    "declared_target": "thm-algebra-of-limits",
    "target_statement_provenance": "ai-altered",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-dirichlet-test",
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
    "source": "thm-dirichlet-test",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "lem-limit-of-tail",
    "declared_target": "lem-limit-of-tail",
    "target_statement_provenance": "ai-altered",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-dirichlet-test",
    "sourcePage": "absolute-convergence-and-rearrangement",
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
    "source": "thm-dirichlet-test",
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

## Full text of every cited or declared item (16)

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

### `lem-abel-summation-by-parts`

````markdown
---
id: lem-abel-summation-by-parts
kind: lemma
title: "Abel summation by parts: with $A_n = \\sum_{k<n} a_k$ one has $\\sum_{k<n} a_k b_k = A_n b_{n-1} - \\sum_{k < n-1} A_{k+1}\\,(b_{k+1} - b_k)$ for every $n \\ge 1$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-finite-sum, lem-finite-sum-laws, def-series, thm-induction-principle]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
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
    - title: "Summation by parts (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Summation_by_parts"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Thomson, Bruckner, and Bruckner, Elementary Real Analysis"
      url: "https://people.math.sc.edu/girardi/m5545/TBB-AllChapters-Landscape.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ and $(b_k)$ be sequences of reals and let

$$A_n \;:=\; \sum_{k<n} a_k \qquad (n \in \mathbb{N})$$

be the partial sums of $\sum a_k$ ([[def-series]], [[def-finite-sum]]), so that
$A_0 = 0$ and $a_k = A_{k+1} - A_k$ for every $k$. Then for every natural number
$n \ge 1$

$$\sum_{k<n} a_k b_k \;=\; A_n\, b_{n-1} \;-\; \sum_{k<n-1} A_{k+1}\,(b_{k+1} - b_k) .$$

Both sides are finite sums in the sense of [[def-finite-sum]]; at $n = 1$ the
right-hand sum is empty and the identity reads $a_0 b_0 = A_1 b_0$.

**The hypothesis $n \ge 1$ is what makes the statement legitimate**, not merely
convenient: the index $n-1$ occurs on the right, and $n-1$ is a natural number
exactly when $n \ge 1$. At $n = 0$ there is nothing to state, both the left-hand
side and $A_0$ being $0$.

## Facts & Assumptions

**Given:** Sequences $(a_k)$ and $(b_k)$ of reals and the partial sums $A_n = \sum_{k<n} a_k$ ([[def-series]]).

[L1] Finite sums are defined by the recursion $\sum_{k<0} x_k = 0$ and $\sum_{k<n+1} x_k = \sum_{k<n} x_k + x_n$ ([[def-finite-sum]]).

[L2] The partial sums satisfy $A_0 = 0$ and $A_{n+1} = A_n + a_n$ for every $n$, those being the two clauses of [L1] applied to $(a_k)$ ([[def-series]]).

[L3] Finite sums are additive and may be split at any intermediate index ([[lem-finite-sum-laws]]).

[L4] The principle of induction on $\mathbb{N}$ ([[thm-induction-principle]]).

## Proof

**Proof technique:** induction.

1.1 The claim to be proved by induction is the statement $P(m)$: the displayed identity holds at $n = m+1$, that is $\sum_{k<m+1} a_k b_k = A_{m+1} b_m - \sum_{k<m} A_{k+1}(b_{k+1} - b_k)$. Every $n \ge 1$ is $m+1$ for exactly one $m \in \mathbb{N}$, so proving $P(m)$ for all $m$ proves the lemma. [L4]

1.2 $P(0)$ holds: the left-hand side is $\sum_{k<1} a_k b_k = a_0 b_0$ by [L1], while $A_1 = A_0 + a_0 = a_0$ by [L2] and $\sum_{k<0} A_{k+1}(b_{k+1}-b_k) = 0$ by [L1], so the right-hand side is $a_0 b_0 - 0$. [L1, L2, base]

1.3 Assume $P(m)$ for a fixed $m \in \mathbb{N}$. [ih]

1.4 By [L1], $\sum_{k<m+2} a_k b_k = \sum_{k<m+1} a_k b_k + a_{m+1} b_{m+1}$. [L1]

1.5 By [L1], $\sum_{k<m+1} A_{k+1}(b_{k+1} - b_k) = \sum_{k<m} A_{k+1}(b_{k+1} - b_k) + A_{m+1}(b_{m+1} - b_m)$. [L1, L3]

1.6 By [L2], $A_{m+2} = A_{m+1} + a_{m+1}$, so $a_{m+1} = A_{m+2} - A_{m+1}$. [L2]

2.1 Substituting the induction hypothesis into step 1.4 gives $\sum_{k<m+2} a_k b_k = A_{m+1} b_m - \sum_{k<m} A_{k+1}(b_{k+1}-b_k) + a_{m+1} b_{m+1}$. [step 1.3, step 1.4]

2.2 Using step 1.6, $A_{m+1} b_m + a_{m+1} b_{m+1} = A_{m+1} b_m + A_{m+2} b_{m+1} - A_{m+1} b_{m+1} = A_{m+2} b_{m+1} - A_{m+1}(b_{m+1} - b_m)$. [step 1.6, algebra]

3.1 Combining step 2.1 and step 2.2 and then step 1.5 gives $\sum_{k<m+2} a_k b_k = A_{m+2} b_{m+1} - A_{m+1}(b_{m+1}-b_m) - \sum_{k<m} A_{k+1}(b_{k+1}-b_k) = A_{m+2} b_{m+1} - \sum_{k<m+1} A_{k+1}(b_{k+1}-b_k)$, which is $P(m+1)$. [step 2.1, step 2.2, step 1.5, algebra]

4.1 By [L4] applied to step 1.2 and step 3.1, $P(m)$ holds for every $m \in \mathbb{N}$, that is, the displayed identity holds for every $n \ge 1$. [step 1.2, step 3.1, L4, discharge-induction] ∎

## Remarks

- **What the identity is for.** It converts a series $\sum a_k b_k$, about which nothing is assumed, into a boundary term $A_n b_{n-1}$ and a series $\sum A_{k+1}(b_{k+1} - b_k)$ whose terms carry the *differences* of $(b_k)$. If $(A_n)$ is bounded and $(b_k)$ is monotone, those differences have one sign and telescope, which is exactly the situation of [[thm-dirichlet-test]]. The transformation is the discrete analogue of integration by parts, and the boundary term is the analogue of the boundary term there.

- **The block form needs no separate proof.** For $1 \le M \le n$, subtracting the identity at $M$ from the identity at $n$ gives $\sum_{k=M}^{n-1} a_k b_k = A_n b_{n-1} - A_M b_{M-1} - \sum_{k=M-1}^{n-2} A_{k+1}(b_{k+1}-b_k)$, using only splitting of finite sums ([[lem-finite-sum-laws]]). Nothing on this page needs that form, so it is recorded here rather than stated as a result.

- **Two conventions are doing work.** $A_n$ sums the $n$ terms $a_0, \dots, a_{n-1}$, so $A_0 = 0$ and $a_k = A_{k+1} - A_k$ with no shift ([[def-series]]); and the empty sum is $0$ ([[def-finite-sum]]), which is what makes $n = 1$ a genuine instance of the identity rather than a case to be excluded.
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

### `lem-limit-of-tail`

````markdown
---
id: lem-limit-of-tail
kind: lemma
title: "Convergence depends only on the tail"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-sequence, def-real-limit, def-nat-order, def-nat-addition, lem-nat-order-add-compatible, lem-nat-add-associative, lem-nat-add-commutative, thm-nat-linear-order]
justified_by: []
aliases: []
landmark: false
short: "tails have the same limit"
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
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis, Ch. 3"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch3.pdf"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(x_k)$ be a sequence of reals ([[def-sequence]]), let $x \in \mathbb{R}$,
and for $K \in \mathbb{N}$ let $x^{(K)}$ denote the $K$-th tail, $x^{(K)}_j =
x_{j+K}$. The following are equivalent ([[def-real-limit]]):

1. $(x_k)$ converges to $x$;
2. every tail $x^{(K)}$ converges to $x$;
3. some tail $x^{(K)}$ converges to $x$.

The same three statements with "converges to $x$" replaced by "is Cauchy" are
likewise equivalent. Consequently, if two sequences agree from some index on,
then either both converge to $x$ or neither does, and either both are Cauchy or
neither is.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals, a real $x$, and for each $K \in \mathbb{N}$ the $K$-th tail $x^{(K)}$ defined by $x^{(K)}_j := x_{j+K}$ ([[def-sequence]]).

[L1] Convergence and the Cauchy condition: $(z_k)$ converges to $z$ when for every rational $\varepsilon > 0$ there is $N$ with $|z_k - z| < \varepsilon$ for all $k \ge N$, and $(z_k)$ is Cauchy when for every rational $\varepsilon > 0$ there is $N$ with $|z_k - z_l| < \varepsilon$ for all $k, l \ge N$ ([[def-real-limit]]).

[L2] Index arithmetic, first half: $j \ge N$ implies $j + K \ge N + K$, and $N + K \ge N$ ([[def-nat-order]], [[lem-nat-order-add-compatible]]).

[L3] Index arithmetic, second half: every $k \ge N + K$ has the form $k = j + K$ with $j \ge N$. Indeed $N + K \le k$ gives $i$ with $(N+K) + i = k$; put $j := N + i$, so that $j \ge N$ and $j + K = (N+i) + K = N + (i + K) = N + (K + i) = (N+K) + i = k$ ([[def-nat-order]], [[lem-nat-add-associative]], [[lem-nat-add-commutative]]).

[L4] The order on $\mathbb{N}$ is reflexive and transitive, so $k \ge N + K \ge N$ gives $k \ge N$; and $j + 0 = j$ for every $j$ ([[thm-nat-linear-order]], [[def-nat-order]], [[def-nat-addition]]).

## Proof

**Proof technique:** direct.

1.1 (1) implies (2). Assume $(x_k)$ converges to $x$, let $K \in \mathbb{N}$ be arbitrary and let $\varepsilon > 0$ be rational; take $N$ with $|x_k - x| < \varepsilon$ for all $k \ge N$. For every $j \ge N$ we have $j + K \ge N + K \ge N$, hence $|x^{(K)}_j - x| = |x_{j+K} - x| < \varepsilon$; so $x^{(K)}$ converges to $x$. [assume-hyp, L1, L2, L4]

1.2 (2) implies (3), in both families. The $0$-th tail satisfies $x^{(0)}_j = x_{j+0} = x_j$, so $(x_k)$ is itself one of its own tails; statement (2) quantifies over all tails, so applying it to this one already yields (3). [given, L4]

1.3 (3) implies (1). Assume $x^{(K)}$ converges to $x$ for some fixed $K$, and let $\varepsilon > 0$ be rational; take $N$ with $|x^{(K)}_j - x| < \varepsilon$ for all $j \ge N$. Every $k \ge N + K$ is of the form $j + K$ with $j \ge N$, so $|x_k - x| = |x^{(K)}_j - x| < \varepsilon$; taking $N + K$ as the threshold shows $(x_k)$ converges to $x$. [assume-hyp, L1, L3]

1.4 The Cauchy version of (1) implies (2). Assume $(x_k)$ is Cauchy, fix $K$ and a rational $\varepsilon > 0$, and take $N$ with $|x_k - x_l| < \varepsilon$ for all $k, l \ge N$. For $i, j \ge N$ both $i + K \ge N$ and $j + K \ge N$, so $|x^{(K)}_i - x^{(K)}_j| = |x_{i+K} - x_{j+K}| < \varepsilon$; so $x^{(K)}$ is Cauchy. [assume-hyp, L1, L2, L4]

1.5 The Cauchy version of (3) implies (1). Assume $x^{(K)}$ is Cauchy and let $\varepsilon > 0$ be rational; take $N$ with $|x^{(K)}_i - x^{(K)}_j| < \varepsilon$ for all $i, j \ge N$. Any $k, l \ge N + K$ are of the form $i + K$ and $j + K$ with $i, j \ge N$, so $|x_k - x_l| < \varepsilon$; so $(x_k)$ is Cauchy. [assume-hyp, L1, L3]

2.1 In each of the two families the cycle (1) implies (2) implies (3) implies (1) is closed, so within each family the three statements are equivalent. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5]

3.1 If $(x_k)$ and $(y_k)$ agree from index $K$ on, then $x^{(K)} = y^{(K)}$ as functions, so by the established equivalence $(x_k)$ converges to $x$ exactly when $y^{(K)}$ does, exactly when $(y_k)$ does, and the same chain applies to the Cauchy condition. [step 2.1, given] ∎

## Remarks

- This is the lemma that makes the word "eventually" usable. Once it is known that finitely many initial terms are irrelevant, a hypothesis of the form "$P(k)$ for all $k$" can everywhere be weakened to "$P(k)$ eventually" ([[def-sequence]]) at the cost of passing to a tail.

- It also settles the bookkeeping question of where the indexing starts. A text that writes $(x_k)_{k \ge 1}$ is describing the first tail of a sequence in the sense used here, and the two have the same limits and the same Cauchy status.

- Boundedness, by contrast, is *not* a tail property in the same trivial way: a tail of a bounded sequence is bounded, and a sequence with a bounded tail is bounded only because the finitely many omitted terms can be absorbed into the bound, which is exactly the argument of [[lem-convergent-implies-bounded]].
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

### `lem-null-times-bounded`

````markdown
---
id: lem-null-times-bounded
kind: lemma
title: "A null sequence times a bounded sequence is null"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-real-limit, def-sequence, lem-of-abs-value, lem-of-sign-rules, thm-of-archimedean, lem-rat-embeds-dense, prop-of-multiply-inequalities, lem-of-inverse-positive, lem-of-add-order, cor-of-one-positive, lem-finite-set-has-max, def-max-min, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "null times bounded is null"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-05
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Reed College Math 112, §7.5 Theorems About Convergent Sequences"
      url: "https://people.reed.edu/~mayer/math112.html/html2/node12.html"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(x_k)$ and $(y_k)$ be sequences of reals ([[def-sequence]]). If $(x_k)$
converges to $0$ ([[def-real-limit]]) and $(y_k)$ is bounded, then the product
sequence $(x_k y_k)$ converges to $0$.

No assumption is made that $(y_k)$ converges. Boundedness alone suffices, and
that is why this lemma is stated on its own rather than folded into the product
rule for limits.

## Facts & Assumptions

**Given:** Sequences $(x_k)$ and $(y_k)$ of reals with $(x_k)$ converging to $0$, and a real $M$ with $|y_k| \le M$ for every $k \in \mathbb{N}$ ([[def-sequence]], [[def-real-limit]]).

[L1] $(x_k)$ converges to $x$ when for every rational $\varepsilon > 0$ there is $K \in \mathbb{N}$ with $|x_k - x| < \hat\varepsilon$ for all $k \ge K$ ([[def-real-limit]]).

[L2] Absolute value: $|uv| = |u|\,|v|$, $|u| \ge 0$, and $|u - 0| = |u|$ ([[lem-of-abs-value]]).

[L3] Products of inequalities: $0 \le a \le b$ and $0 \le c \le d$ give $ac \le bd$; and for $c > 0$, $a < b$ gives $ac < bc$ ([[prop-of-multiply-inequalities]], [[lem-of-sign-rules]]).

[L4] Order arithmetic in $\mathbb{R}$: $0 < 1$, adding a constant preserves the strict order, and $\le$ and $<$ compose transitively ([[cor-of-one-positive]], [[lem-of-add-order]], [[def-complete-ordered-field]], [[def-ordered-field]]).

[L5] Inverses: if $c > 0$ then $c^{-1} > 0$, so $\varepsilon/c > 0$ whenever $\varepsilon > 0$ and $c > 0$ ([[lem-of-inverse-positive]], [[lem-of-sign-rules]]).

[L6] Real versus rational $\varepsilon$: for every real $\eta > 0$ there is a rational $\varepsilon$ with $0 < \varepsilon < \eta$, by density ([[lem-rat-embeds-dense]]) or by the Archimedean property ([[thm-of-archimedean]]) applied to $1/\eta$; consequently the convergence test of [[def-real-limit]] may equivalently be run with real $\varepsilon > 0$ ([[def-sequence]]).

## Proof

**Proof technique:** direct.

1.1 Since $|y_0| \le M$ and $|y_0| \ge 0$, transitivity gives $M \ge 0$; put $C := M + 1$, so that $C > 0$ and $|y_k| \le M \le C$ for every $k$. [L2, L4]

2.1 Let $\varepsilon > 0$ be an arbitrary real and put $\eta := \varepsilon/C$, which is a real $> 0$ and satisfies $\eta C = \varepsilon$. [step 1.1, L5]

3.1 Since $(x_k)$ converges to $0$, there is $K \in \mathbb{N}$ with $|x_k| = |x_k - 0| < \eta$ for every $k \ge K$. [step 2.1, L1, L2, L6]

4.1 For every $k \ge K$ we get $|x_k y_k - 0| = |x_k|\,|y_k| \le |x_k| \, C < \eta \, C = \varepsilon$, the first inequality from $0 \le |x_k| \le |x_k|$ and $0 \le |y_k| \le C$, the second from $|x_k| < \eta$ and $C > 0$. [step 1.1, step 3.1, L2, L3, L4]

5.1 Since the real $\varepsilon > 0$ was arbitrary, $(x_k y_k)$ converges to $0$. [step 4.1, L1, L6] ∎

## Remarks

- The hypothesis on $(y_k)$ looks weaker if it is stated as "eventually bounded", but it is not: a sequence bounded from some index $K$ on is bounded outright. If $|y_k| \le M$ for every $k \ge K$, then $M' := \max\{\, |y_0|, \dots, |y_{K-1}|, M \,\}$ exists, because a nonempty finite list of reals has a maximum ([[lem-finite-set-has-max]], [[def-max-min]]), and $|y_k| \le M'$ for every $k$. That is the same absorption of finitely many initial terms used in [[lem-convergent-implies-bounded]].

- Boundedness of $(y_k)$ is essential. Take $x_k := 1/(k+1)$, which is null (that sequence is shown to converge to $0$ in [[fs-limit-preserves-strict-inequality]]), and $y_k := (k+1)^2$. Their product is $x_k y_k = k + 1$, which is unbounded by the Archimedean property ([[thm-of-archimedean]]) and hence does not converge at all, since a convergent sequence is bounded ([[lem-convergent-implies-bounded]]); in particular it is not null. The lemma is therefore sharp in the sense that the bounded factor may not be replaced by an arbitrary one.

- The lemma is the workhorse of the product rule: the identity $x_k y_k - xy = x_k(y_k - y) + y(x_k - x)$ exhibits the error as a sum of two products of a null sequence with a bounded one, and boundedness of $(x_k)$ comes from [[lem-convergent-implies-bounded]].
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

### `thm-algebra-of-limits`

````markdown
---
id: thm-algebra-of-limits
kind: theorem
title: "Algebra of limits: sums, scalar multiples, products and quotients"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-real-limit, def-sequence, lem-convergent-implies-bounded, lem-null-times-bounded, lem-of-triangle-inequality, lem-of-abs-value, cor-of-reverse-triangle, thm-of-archimedean, lem-of-inverse-positive, lem-rat-embeds-dense, lem-of-add-order, lem-of-sign-rules, cor-of-one-positive, thm-rat-ordered-field, thm-nat-linear-order, def-field, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "limits respect $+$, $\\cdot$, $/$"
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
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "OpenStax Calculus Volume 2, §5.1 Sequences"
      url: "https://openstax.org/books/calculus-volume-2/pages/5-1-sequences"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(x_k)$ and $(y_k)$ be sequences of reals ([[def-sequence]]) converging to
$x$ and $y$ respectively ([[def-real-limit]]), and let $c \in \mathbb{R}$. Then

$$x_k + y_k \to x + y, \qquad c\,x_k \to c\,x, \qquad x_k - y_k \to x - y, \qquad x_k y_k \to x y,$$

and if in addition $y \ne 0$ and $y_k \ne 0$ for every $k \in \mathbb{N}$, then

$$\frac{1}{y_k} \to \frac{1}{y} \qquad \text{and} \qquad \frac{x_k}{y_k} \to \frac{x}{y}.$$

The quotient case rests on an eventual lower bound for $|y_k|$, proved below
rather than assumed: $|y_k| > |y|/2$ for all sufficiently large $k$.

## Facts & Assumptions

**Given:** Sequences $(x_k)$, $(y_k)$ of reals with $(x_k)$ converging to $x$ and $(y_k)$ converging to $y$, and a real $c$ ([[def-sequence]], [[def-real-limit]]). For the last two claims we assume in addition $y \ne 0$ and $y_k \ne 0$ for every $k$.

[L1] Convergence, quantified over rational $\varepsilon > 0$ ([[def-real-limit]]).

[L2] Absolute value and the triangle inequality: $|uv| = |u|\,|v|$, $|u| \ge 0$, $|u| = 0$ if and only if $u = 0$, $|-u| = |u|$, and $|a + b| \le |a| + |b|$ ([[lem-of-abs-value]], [[lem-of-triangle-inequality]]).

[L3] Real versus rational $\varepsilon$: for every real $\eta > 0$ there is a rational $\varepsilon$ with $0 < \varepsilon < \eta$, by density ([[lem-rat-embeds-dense]]) or by the Archimedean property ([[thm-of-archimedean]]) applied to $1/\eta$ ([[lem-of-inverse-positive]]); consequently the convergence test of [[def-real-limit]] may equivalently be run with real $\varepsilon > 0$ ([[def-sequence]]).

[L4] Convergent sequences are bounded ([[lem-convergent-implies-bounded]]), and a constant sequence $(c)$ is bounded by $|c|$ ([[def-sequence]]).

[L5] A null sequence times a bounded sequence is null ([[lem-null-times-bounded]]).

[L6] Reverse triangle inequality: $\bigl||u| - |v|\bigr| \le |u - v|$, hence $|u| \ge |v| - |v - u|$ ([[cor-of-reverse-triangle]]).

[L7] Inverses and order: $a > 0$ implies $a^{-1} > 0$; $0 < a < b$ implies $0 < b^{-1} < a^{-1}$; $(u^{-1})^{-1} = u$ for $u \ne 0$ ([[lem-of-inverse-positive]], [[def-field]]).

[L8] Order arithmetic in $\mathbb{R}$: adding a constant and adding inequalities preserve the order, multiplying a strict inequality by a positive factor preserves it, and $\le$ and $<$ compose transitively; trichotomy holds, and since $u \ge 0$ means $u > 0$ or $u = 0$, an element with $u \ge 0$ and $u \ne 0$ satisfies $u > 0$ ([[lem-of-add-order]], [[lem-of-sign-rules]], [[def-complete-ordered-field]], [[def-ordered-field]]). Moreover $2 = 1 + 1 > 0$ and $2$ is invertible: $0 < 1$ in any ordered field ([[cor-of-one-positive]]) and the positives are closed under addition, so $2 > 0$ and in particular $2 \ne 0$ ([[def-ordered-field]]), whence $2^{-1}$ exists ([[def-field]]).

[L9] Rational arithmetic: $\varepsilon/2$ is a rational $> 0$ whenever $\varepsilon$ is, and $\varepsilon/2 + \varepsilon/2 = \varepsilon$ ([[thm-rat-ordered-field]]); the order on $\mathbb{N}$ is total, so finitely many thresholds admit a common index ([[thm-nat-linear-order]]).

## Proof

**Proof technique:** direct.

1.1 Reduction to null sequences: for any sequence $(z_k)$ of reals and any real $z$, the statements "$(z_k)$ converges to $z$" and "$(z_k - z)$ converges to $0$" are literally the same condition, because $|(z_k - z) - 0| = |z_k - z|$ for every $k$. [L1, L2]

1.2 Sum rule, in general form. Let $(u_k) \to u$ and $(v_k) \to v$ be any convergent sequences of reals and let $\varepsilon > 0$ be rational; take $K_1$ with $|u_k - u| < \varepsilon/2$ for $k \ge K_1$ and $K_2$ with $|v_k - v| < \varepsilon/2$ for $k \ge K_2$, and let $K$ be an index at least as large as both. For $k \ge K$, $|(u_k + v_k) - (u + v)| = |(u_k - u) + (v_k - v)| \le |u_k - u| + |v_k - v| < \varepsilon/2 + \varepsilon/2 = \varepsilon$; hence $u_k + v_k \to u + v$, and in particular $x_k + y_k \to x + y$. [L1, L2, L8, L9, algebra]

1.3 Boundedness: every convergent sequence of reals is bounded, and every constant sequence $(d)$ is bounded by $|d|$. [L4]

1.4 Quotient preparation. Assume $y \ne 0$ and $y_k \ne 0$ for every $k$. Then $|y| > 0$ by [L2], so $|y|/2 > 0$; running the convergence test of $(y_k)$ with the real number $|y|/2$ as tolerance, which [L3] licenses, produces $K_0 \in \mathbb{N}$ with $|y_k - y| < |y|/2$ for all $k \ge K_0$. [L1, L2, L3, L7, L8, choose]

2.1 Scalar rule, in general form. Let $(u_k) \to u$ and let $d \in \mathbb{R}$. By step 1.1 the sequence $(u_k - u)$ is null and by step 1.3 the constant sequence $(d)$ is bounded, so $(d(u_k - u)) = (d u_k - d u)$ is null by [L5]; by step 1.1 again, $d u_k \to d u$, and in particular $c x_k \to c x$. [step 1.1, step 1.3, L5, algebra]

2.2 Product rule, in general form. Let $(u_k) \to u$ and $(v_k) \to v$, and write $u_k v_k - u v = u_k(v_k - v) + v(u_k - u)$. By step 1.1 both $(v_k - v)$ and $(u_k - u)$ are null; by step 1.3 both $(u_k)$ and the constant sequence $(v)$ are bounded; so both $(u_k(v_k - v))$ and $(v(u_k - u))$ are null by [L5], and their sum is null by step 1.2 applied with both limits equal to $0$. By step 1.1, $u_k v_k \to u v$, and in particular $x_k y_k \to x y$. [step 1.1, step 1.2, step 1.3, L5, algebra]

2.3 Eventual lower bound. For every $k \ge K_0$, the reverse triangle inequality gives $|y_k| \ge |y| - |y - y_k| = |y| - |y_k - y| > |y| - |y|/2 = |y|/2 > 0$; so $|y_k| > |y|/2$ for all $k \ge K_0$, and in particular $|y_k| \ne 0$ there. [step 1.4, L2, L6, L8]

3.1 Difference rule. Applying step 2.1 to the sequence $(y_k)$ with $d = -1$ gives $-y_k \to -y$; the sum rule of step 1.2 applied to $(x_k)$ and $(-y_k)$ then gives $x_k - y_k = x_k + (-y_k) \to x + (-y) = x - y$. [step 1.2, step 2.1, L8, algebra]

3.2 Reciprocal estimate. For $k \ge K_0$ we have $y_k \ne 0$ and $|y_k| > |y|/2 > 0$, so [L7] applied to $0 < |y|/2 < |y_k|$ gives $0 < |y_k|^{-1} < 2/|y|$, and therefore $\left|\dfrac{1}{y_k} - \dfrac{1}{y}\right| = \dfrac{|y - y_k|}{|y_k|\,|y|} \le \dfrac{2}{|y|^2}\,|y_k - y|$. [step 2.3, L2, L7, L8, algebra]

4.1 Reciprocal rule. Let $\varepsilon > 0$ be an arbitrary real and put $\eta := \varepsilon |y|^2/2$, a real $> 0$; by [L3] there is $K_1$ with $|y_k - y| < \eta$ for all $k \ge K_1$. For every $k$ at least as large as both $K_0$ and $K_1$, step 3.2 gives $\left|\dfrac{1}{y_k} - \dfrac{1}{y}\right| \le \dfrac{2}{|y|^2}|y_k - y| < \dfrac{2}{|y|^2}\,\eta = \varepsilon$; hence $1/y_k \to 1/y$. [step 3.2, L1, L3, L7, L8, L9, algebra]

5.1 Quotient rule. By step 4.1 the sequence $(1/y_k)$ converges to $1/y$, so the product rule of step 2.2 applied to $(x_k)$ and $(1/y_k)$ gives $x_k/y_k = x_k \cdot (1/y_k) \to x \cdot (1/y) = x/y$. [step 2.2, step 4.1, algebra]

6.1 All the claims are established: the sum rule in step 1.2, the scalar rule in step 2.1, the difference rule in step 3.1, the product rule in step 2.2, and the reciprocal and quotient rules in steps 4.1 and 5.1. [step 1.2, step 2.1, step 2.2, step 3.1, step 4.1, step 5.1] ∎

## Remarks

- **The quotient case is where proofs usually cheat.** The estimate $|1/y_k - 1/y| = |y - y_k| / (|y_k||y|)$ is worthless until $|y_k|$ is known to stay away from $0$: without a lower bound the denominator can be arbitrarily small and the fraction arbitrarily large, even while $|y - y_k|$ shrinks. Step 2.3 supplies that bound, $|y_k| > |y|/2$ for $k \ge K_0$, and it is proved from the reverse triangle inequality, not assumed.

- The hypothesis $y_k \ne 0$ for every $k$ is only there so that $1/y_k$ is defined for every index. It is not needed for the limit: step 2.3 shows $|y_k| > |y|/2 > 0$ from $K_0$ on, so a sequence with $y \ne 0$ has at most finitely many zero terms, and by [[lem-limit-of-tail]] one may pass to the $K_0$-th tail and read the conclusion there.

- The hypothesis $y \ne 0$ cannot be dropped. With $x_k = 1$ and $y_k = 1/(k+1)$, both sequences converge: the first is constant ([[def-sequence]]) and the second is null ([[fs-limit-preserves-strict-inequality]]), so $y = 0$. Yet $x_k/y_k = k+1$, and no real $M$ bounds every $k+1$, by the Archimedean property ([[thm-of-archimedean]]); so the quotient sequence is unbounded, hence not convergent by [[lem-convergent-implies-bounded]].

- Nothing in the proof uses completeness of $\mathbb{R}$ beyond the Archimedean property invoked in [L3], so the same rules hold verbatim for sequences of rationals.
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

### `thm-direct-comparison-test`

````markdown
---
id: thm-direct-comparison-test
kind: theorem
title: "If $0 \\le a_k \\le b_k$ eventually, convergence of $\\sum b_k$ gives convergence of $\\sum a_k$, and divergence of $\\sum a_k$ gives divergence of $\\sum b_k$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-nonnegative-series-bounded-partial-sums, lem-series-tail-invariance, def-series, lem-finite-sum-laws, def-bounded-set, def-finite-sum]
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
    - title: "Direct comparison test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Direct_comparison_test"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.25)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ and $(b_k)$ be sequences of reals and suppose there is
$K \in \mathbb{N}$ with

$$0 \;\le\; a_k \;\le\; b_k \qquad \text{for all } k \ge K .$$

Then:

1. if $\sum b_k$ converges then $\sum a_k$ converges ([[def-series]]);
2. if $\sum a_k$ diverges then $\sum b_k$ diverges.

The same statement holds verbatim for series with a general starting index $m$,
applied to the shifted sequences of [[def-series]].

The hypothesis is on the terms from some index on, not on all of them: finitely
many terms of either sequence may violate it, or be negative, without affecting
the conclusion. What may not be dropped is nonnegativity of $(a_k)$ from that
index on.

## Facts & Assumptions

**Given:** Sequences $(a_k)$, $(b_k)$ of reals and $K \in \mathbb{N}$ with $0 \le a_k \le b_k$ for all $k \ge K$; the partial sums $\alpha_j = \sum_{i<j} a_{K+i}$ and $\beta_j = \sum_{i<j} b_{K+i}$ of the $K$-th tail series ([[def-series]], [[def-finite-sum]]).

[L1] Monotonicity of finite sums: if $x_i \le y_i$ for all $i < j$ then $\sum_{i<j} x_i \le \sum_{i<j} y_i$ ([[lem-finite-sum-laws]]).

[L2] A series converges if and only if its $K$-th tail series converges ([[lem-series-tail-invariance]]).

[L3] For a series of nonnegative terms: it converges if and only if the range of its partial sums is bounded above, and in the convergent case every partial sum is at most the sum ([[thm-nonnegative-series-bounded-partial-sums]], [[def-bounded-set]]).

## Proof

**Proof technique:** direct.

1.1 For every $i \in \mathbb{N}$ the index $K + i$ is at least $K$, so $0 \le a_{K+i} \le b_{K+i}$; in particular both tail series have nonnegative terms. [given]

1.2 Assume $\sum b_k$ converges. Then its $K$-th tail series $\sum_{k \ge K} b_k$ converges. [given, L2]

2.1 By monotonicity of finite sums, $\alpha_j \le \beta_j$ for every $j \in \mathbb{N}$. [step 1.1, L1]

2.2 That tail series has nonnegative terms, so its partial sums satisfy $\beta_j \le B$ for every $j$, where $B$ is its sum. [step 1.2, step 1.1, L3]

3.1 Hence $\alpha_j \le \beta_j \le B$ for every $j$, so the range of $(\alpha_j)$ is bounded above by $B$. [step 2.1, step 2.2]

4.1 The tail series $\sum_{k \ge K} a_k$ has nonnegative terms and partial sums bounded above, so it converges. [step 3.1, step 1.1, L3]

5.1 Therefore $\sum a_k$ converges, which is claim 1. [step 4.1, L2]

6.1 Claim 2 is the contrapositive of claim 1: if $\sum a_k$ diverges then $\sum b_k$ cannot converge. [step 5.1] ∎

## Remarks

- **Both nonnegativity hypotheses are used, and in different places.** $a_k \ge 0$ is what lets convergence of $\sum_{k \ge K} a_k$ be read off from boundedness of its partial sums, and $b_k \ge a_k \ge 0$ is what makes the sum of $\sum_{k \ge K} b_k$ an upper bound for the partial sums $\beta_j$. Drop the sign hypothesis and the theorem is false, not merely unproved; the companion page exhibits a pair with $a_k \le b_k$ for every $k$, $\sum b_k$ convergent and $\sum a_k$ divergent.

- **The comparison is with a series, not with a limit.** No quotient $a_k/b_k$ appears and no $b_k$ is required to be nonzero, which is what distinguishes this test from the limit comparison test proved next.
````

