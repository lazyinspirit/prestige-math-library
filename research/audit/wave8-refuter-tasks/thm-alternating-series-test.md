## Selection reasons

- critical risk (15): 9 declared dependencies; 9 cited facts; 11 numbered proof steps; existence, choice, uniqueness, or well-definedness; boundary-sensitive language; induction, recursion, or minimality; analytic limiting/completeness language

## Target item — `thm-alternating-series-test`

Normalized current SHA-256: `34c2fcca58e72fd8f84fc9d991bbbea5bdfb365cbbf93b571660e893fe8b6f1a`

The complete current item follows, including frontmatter:

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

## Wave 8 provenance row for the target

```json
{
  "id": "thm-alternating-series-test",
  "statement": "literature-derived",
  "proof": "ai-altered",
  "evidence": "exact-source",
  "urls": [
    "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf",
    "https://www.math.uci.edu/~ndonalds/math140a/3series.html"
  ],
  "rationale": "The statement, parity bounds, and first-omitted-term error bound match the classical alternating-series theorem; the numbered proof adapts the standard even/odd partial-sum proof.",
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
      "quote": "2. **The partition.** $\\mathbb{N}$ is the **disjoint union** of the ranges of $e$",
      "uses": [
        "1.2",
        "1.3",
        "1.4",
        "3.2",
        "5.1",
        "6.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-monotone-sequence",
      "source_section": "Definition",
      "quote": "nonincreasing, since $j \\le k$ means $j < k$ or $j = k$ and the second case gives",
      "uses": [
        "1.1",
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-limit-preserves-order",
      "source_section": "Statement",
      "quote": "$x$ and $y$ respectively ([[def-real-limit]]). If $x_k \\le y_k$ eventually, that",
      "uses": [
        "1.1",
        "4.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-real-limit",
      "source_section": "Definition",
      "quote": "A sequence $(x_k)$ of reals **converges** to $x \\in \\mathbb{R}$ when for",
      "uses": [
        "1.1",
        "4.1"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-dirichlet-test",
      "source_section": "Statement",
      "quote": "2. $(b_k)$ is nonincreasing ([[def-monotone-sequence]]) and converges to $0$",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-subsequence-inherits-limit",
      "source_section": "Statement",
      "quote": "be strictly increasing. Then the subsequence $(x_{n_k})$ converges to $x$.",
      "uses": [
        "3.2"
      ]
    },
    {
      "fact": "L6",
      "source": "def-series",
      "source_section": "Definition",
      "quote": "**Partial sums.** Let $(a_k)$ be a sequence of reals. Its **sequence of partial",
      "uses": [
        "1.2",
        "1.4"
      ]
    },
    {
      "fact": "L7",
      "source": "thm-induction-principle",
      "source_section": "Statement",
      "quote": "Let $S \\subseteq \\mathbb{N}$. If $0 \\in S$ and $\\sigma(n) \\in S$ whenever $n \\in S$, then $S = \\mathbb{N}$. Equivalently (property form): if a property $P$ satisfies $P(0)$ and ($P(n) \\Rightarrow P(\\sigma(n))$) for all $n$, then $P(n)$ holds for all $n \\in \\mathbb{N}$. This is the induction principle, the basis of proof by induction.",
      "uses": [
        "1.2",
        "1.3"
      ]
    },
    {
      "fact": "L8",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "$|x|$ the absolute value ([[def-abs-value]]). Then",
      "uses": [
        "6.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "Verified the stated inference at step 1.1.",
      "step": "1.1",
      "inputs": [
        "L2",
        "L3"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "Verified the stated inference at step 1.2.",
      "step": "1.2",
      "inputs": [
        "L1",
        "L6",
        "L7"
      ]
    },
    {
      "id": "step-1-3",
      "claim": "Verified the stated inference at step 1.3.",
      "step": "1.3",
      "inputs": [
        "L1",
        "L7"
      ]
    },
    {
      "id": "step-1-4",
      "claim": "Verified the stated inference at step 1.4.",
      "step": "1.4",
      "inputs": [
        "L6",
        "L1"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "Verified the stated inference at step 2.1.",
      "step": "2.1",
      "inputs": [
        "1.2",
        "L4"
      ]
    },
    {
      "id": "step-2-2",
      "claim": "Verified the stated inference at step 2.2.",
      "step": "2.2",
      "inputs": [
        "1.3",
        "1.4"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "Verified the stated inference at step 3.1.",
      "step": "3.1",
      "inputs": [
        "2.2",
        "1.3",
        "L2"
      ]
    },
    {
      "id": "step-3-2",
      "claim": "Verified the stated inference at step 3.2.",
      "step": "3.2",
      "inputs": [
        "2.1",
        "L1",
        "L5"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "Verified the stated inference at step 4.1.",
      "step": "4.1",
      "inputs": [
        "3.1",
        "3.2",
        "L3"
      ]
    },
    {
      "id": "step-5-1",
      "claim": "Verified the stated inference at step 5.1.",
      "step": "5.1",
      "inputs": [
        "1.3",
        "4.1",
        "L1"
      ]
    },
    {
      "id": "step-6-1",
      "claim": "Verified the stated inference at step 6.1.",
      "step": "6.1",
      "inputs": [
        "5.1",
        "1.4",
        "1.1",
        "L1",
        "L8"
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
      "evidence": "Statement and step 1.2 include the zero boundary."
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
      "status": "checked",
      "evidence": "Statement and step 1.2 retain the threshold endpoints."
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
    "source": "thm-alternating-series-test",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "thm-dirichlet-test",
    "declared_target": "thm-dirichlet-test",
    "target_statement_provenance": "literature-derived",
    "targetPage": "absolute-convergence-and-rearrangement",
    "targetBatch": "wave8-real-analysis-absolute-convergence",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-alternating-series-test",
    "sourcePage": "absolute-convergence-and-rearrangement",
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
    "source": "thm-alternating-series-test",
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
    "source": "thm-alternating-series-test",
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
    "source": "thm-alternating-series-test",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "lem-subsequence-inherits-limit",
    "declared_target": "lem-subsequence-inherits-limit",
    "target_statement_provenance": "ai-altered",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-alternating-series-test",
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
    "source": "thm-alternating-series-test",
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
    "source": "thm-alternating-series-test",
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
    "source": "thm-alternating-series-test",
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

## Full text of every cited or declared item (10)

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

### `lem-subsequence-inherits-limit`

````markdown
---
id: lem-subsequence-inherits-limit
kind: lemma
title: "Subsequences inherit the limit"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-sequence, def-real-limit, lem-index-map-grows, lem-limit-unique, thm-nat-linear-order, def-nat-order]
justified_by: []
aliases: []
landmark: true
short: "subsequences keep the limit"
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
    - title: "J. K. Hunter, An Introduction to Real Analysis, Ch. 3"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch3.pdf"
    - title: "CMU 21-269 notes, Compactness — subsequences"
      url: "https://www.math.cmu.edu/~gautam/c/2026-269/notes/compactness.html"
    - title: "Subsequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subsequence"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "T. Tao, Analysis I, 3rd ed., §6.6"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(x_k)$ be a sequence of reals converging to $x \in \mathbb{R}$
([[def-sequence]], [[def-real-limit]]), and let $n : \mathbb{N} \to \mathbb{N}$
be strictly increasing. Then the subsequence $(x_{n_k})$ converges to $x$.

**Divergence test.** Consequently, if two subsequences of $(x_k)$ converge to
different limits, then $(x_k)$ does not converge.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals converging to a real $x$, and a strictly increasing $n : \mathbb{N} \to \mathbb{N}$, so that $(x_{n_k})$ is a subsequence of $(x_k)$ ([[def-sequence]], [[def-real-limit]]).

[L1] $(x_k)$ converges to $x$ when for every rational $\varepsilon > 0$ there is $K \in \mathbb{N}$ with $|x_k - x| < \hat\varepsilon$ for all $k \ge K$ ([[def-real-limit]]).

[L2] Growth of the index map: $n_k \ge k$ for every $k$ ([[lem-index-map-grows]]).

[L3] The order on $\mathbb{N}$ is transitive, so $n_k \ge k \ge K$ gives $n_k \ge K$ ([[thm-nat-linear-order]], [[def-nat-order]]).

[L4] A sequence has at most one limit ([[lem-limit-unique]]).

## Proof

**Proof technique:** direct.

1.1 Let $\varepsilon > 0$ be rational. By convergence of $(x_k)$ there is $K \in \mathbb{N}$ with $|x_j - x| < \varepsilon$ for every $j \ge K$. [L1]

2.1 For every $k \ge K$ we have $n_k \ge k \ge K$, so the estimate of step 1.1 applies at the index $j = n_k$ and gives $|x_{n_k} - x| < \varepsilon$. [step 1.1, L2, L3]

3.1 Since the rational $\varepsilon > 0$ was arbitrary, and the same threshold $K$ served, $(x_{n_k})$ converges to $x$. [step 2.1, L1]

4.1 Divergence test: suppose subsequences $(x_{n_k})$ and $(x_{m_k})$ converge to $a$ and $b$ with $a \ne b$. If $(x_k)$ converged, to $x$ say, then by step 3.1 both subsequences would converge to $x$, and uniqueness of limits would force $a = x$ and $b = x$, hence $a = b$, contrary to hypothesis; so $(x_k)$ does not converge. [step 3.1, L4] ∎

## Remarks

- A sequence is a subsequence of itself, via the identity index map $n_k = k$, which is strictly increasing. So "every subsequence converges to $x$" and "the sequence converges to $x$" are equivalent, and the lemma is the non-trivial half of that equivalence.

- The converse of the first claim is false: **one** convergent subsequence says nothing about the sequence ([[fs-subsequence-convergence-implies-convergence]]). It is the divergence test, not the convergence of a single subsequence, that is usable.

- The divergence test is the standard way to show a concrete sequence diverges, and it is how [[fs-bounded-implies-convergent]] is refuted. The opposite direction, extracting a convergent subsequence from a bounded sequence, is Bolzano-Weierstrass; it is **not available at this point in the reading order**, being the subject of the next page of this track, *Monotone Sequences, Bolzano-Weierstrass, and Cauchy Completeness*, where it is proved.
````

### `rem-sums-proved-to-exist-but-not-evaluated`

````markdown
---
id: rem-sums-proved-to-exist-but-not-evaluated
kind: remark
title: "Selected sums and products on this page that are proved to exist without being evaluated, and what their evaluation waits for"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-alternating-series-test, thm-infinite-product-criterion, thm-decimal-expansions, thm-riemann-series-theorem, rem-rearrangement-in-higher-dimensions, def-absolute-and-conditional-convergence]
justified_by: []
aliases: []
landmark: false
sources:
  scraped: []
  references:
    - title: "Harmonic series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Harmonic_series_(mathematics)"
    - title: "Infinite product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infinite_product"
    - title: "Thomson, Bruckner, and Bruckner, Elementary Real Analysis"
      url: "https://ejwingler.people.ysu.edu/TBB-Real.pdf"
    - title: "D. Dikranjan, Analysis 478, Chapter 6"
      url: "https://people.math.binghamton.edu/dikran/478/Ch6.pdf"
pipeline_run: null
---

## Remark

A convergence test proves that a limit exists; it does not produce the limit. On
this page that gap is systematic, and this remark records the principal places
where a familiar value or formula is deferred and what would close it. **Every
scope statement below is relative to the reading
order**: the material named is developed elsewhere in this library, later than
this page, and nothing here says it is absent from the library.

**The alternating harmonic series.** [[thm-alternating-series-test]] proves that
$\sum_{j \ge 0} (-1)^j/(j+1)$ converges, and its error bound pins the sum between
consecutive partial sums; the companion examples page uses that to prove the sum lies
strictly between $1/2$ and $1$. No closed
expression for the sum is given, and none can be given here: the classical value
is a logarithm, and the logarithm is introduced later in the reading order. So the
sum is named, bracketed, and left unevaluated.

**The two-positive-one-negative rearrangement.** The same is true one level up.
The companion examples page proves that taking two
positive terms for each negative one produces a convergent rearrangement whose sum
is $3/2$ times the sum of the original series. That statement is exact and complete
as it stands, and it is deliberately *relative*: it compares two sums rather than
evaluating either. The familiar form of the same fact multiplies a logarithm by
$3/2$, and it becomes available at the same later point.

**The refined criterion for infinite products.** [[thm-infinite-product-criterion]]
settles $\prod(1+p_k)$ completely for $p_k \ge 0$, settles $\prod(1-p_k)$ for
$0 \le p_k < 1$, and proves that $\sum |p_k|$ convergent forces $\prod(1+p_k)$
convergent. It does **not** settle the remaining case: a signed sequence $(p_k)$
with $\sum p_k$ convergent but $\sum |p_k|$ divergent. The classical criterion
there is that $\prod(1+p_k)$ converges exactly when $\sum p_k^{2}$ converges.
A standard proof expands $\log(1+x)$; that route belongs with the logarithm,
later in the reading order. The gap is not hypothetical: the companion
examples page exhibits a signed
sequence with $\sum p_k$ convergent whose partial products tend to $0$.

**Rearrangement beyond $\mathbb{R}$.** [[thm-riemann-series-theorem]] and
[[cor-unconditional-iff-absolute-in-r]] together answer the rearrangement question
for real series completely. The corresponding question for series of vectors is
raised, and left open at this point in the reading order, in
[[rem-rearrangement-in-higher-dimensions]], which states no theorem about it.

**Two places where existence is constructive but no formula is claimed.**
[[thm-decimal-expansions]] produces, for every $x \in [0,1)$, its digit sequence in
base $b$, by a recursion that depends on $x$; it gives no closed expression for
the digits of any particular real, and it claims none. Likewise
[[thm-riemann-series-theorem]] produces, for each prescribed target, a bijection of
$\mathbb{N}$ defined by a recursion over the terms of the series; no formula for
that bijection is given, and the theorem asserts only that one exists. In both
cases the construction is fully determined by the data, with no choice made
anywhere, which is a stronger statement than mere existence and a weaker one than
a formula.

**What this list does not claim.** It is not a census of every convergence result
on the page. In particular, the Dirichlet, alternating-series, and Abel tests and
their worked applications establish additional convergence without evaluating a
numerical sum; their purpose here is to supply convergence criteria, not to flag
a familiar value whose evaluation waits for a later object. Among the structural
comparison theorems, [[thm-dirichlet-rearrangement]], [[thm-mertens]],
[[cor-cauchy-product-absolute]], [[thm-grouping-of-series]] and
[[thm-double-series-fubini]] identify sums with one another and evaluate nothing,
which is exactly what makes them usable wherever the sums themselves are unknown.
````

### `thm-dirichlet-test`

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

