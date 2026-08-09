## Assigned repair — `thm-mertens`

Item path: `items/thm-mertens.md`

Normalized final-text SHA-256 at dispatch: `b9da637df013128b71efb96916b9f99c0fb2cdbeb06cce03c9847161fbe7e5bb`

Split reasons: ["A6 replacement of inaccessible semantic-source URL"]

Provenance ledger: `wave8-real-analysis-absolute-convergence.provenance.jsonl`

The three Wave 8 findings ledgers and wave8-A3.md record the original defect and approved repair. Locate this id there before certifying.

Read the current target from disk and every dependency needed to check the repair. The generated manifest rows are supplied only as a completeness checklist:

```json
[
  {
    "source": "thm-mertens",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "def-cauchy-product",
    "declared_target": "def-cauchy-product",
    "target_statement_provenance": "ai-altered",
    "targetPage": "absolute-convergence-and-rearrangement",
    "targetBatch": "wave8-real-analysis-absolute-convergence",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-mertens",
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
    "source": "thm-mertens",
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
    "source": "thm-mertens",
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
    "source": "thm-mertens",
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
    "source": "thm-mertens",
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
    "source": "thm-mertens",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "lem-triangle-inequality-finite",
    "declared_target": "lem-triangle-inequality-finite",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-mertens",
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
    "source": "thm-mertens",
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
    "source": "thm-mertens",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "lem-convergent-implies-bounded",
    "declared_target": "lem-convergent-implies-bounded",
    "target_statement_provenance": "literature-derived",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-mertens",
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
    "source": "thm-mertens",
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
    "source": "thm-mertens",
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

For a byte-exact cross-check, the current item at dispatch was:

````markdown
---
id: thm-mertens
kind: theorem
title: "Mertens' theorem: if $\\sum a_k$ converges absolutely to $A$ and $\\sum b_k$ converges to $B$, their Cauchy product converges to $AB$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cauchy-product, def-absolute-and-conditional-convergence, lem-absolute-convergence-implies-convergence, def-series, def-finite-sum, lem-finite-sum-laws, lem-triangle-inequality-finite, lem-of-abs-value, thm-nonnegative-series-bounded-partial-sums, lem-convergent-implies-bounded, thm-algebra-of-limits, thm-induction-principle, def-real-limit]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Cauchy product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_product"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "R. Gardner, Operations Involving Series, Theorem 7-17"
      url: "https://faculty.etsu.edu/gardnerr/4217/notes/7-2.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ and $(b_k)$ be sequences of reals, let
$A_n = \sum_{i<n} a_i$ and $B_m = \sum_{j<m} b_j$ be their partial sums
([[def-series]]), and let $(c_n)$ be their Cauchy product,
$c_n = \sum_{k=0}^{n} a_k b_{n-k}$ ([[def-cauchy-product]]). Then:

1. **A finite identity, holding for arbitrary sequences.** For every
   $N \in \mathbb{N}$,
   $$\sum_{n<N} c_n \;=\; \sum_{i<N} a_i\, B_{N-i} .$$
2. **Mertens' theorem.** If $\sum a_k$ converges absolutely
   ([[def-absolute-and-conditional-convergence]]) and $\sum b_k$ converges, then
   $\sum a_k$ converges, say to $A$, and, writing $B$ for the sum of $\sum b_k$,
   the Cauchy product $\sum c_n$ converges with
   $$\sum_{n=0}^{\infty} c_n \;=\; A\,B .$$

Claim 1 carries no hypothesis at all and is used again, for the sequences
$(|a_k|)$ and $(|b_k|)$, in [[cor-cauchy-product-absolute]]; that is why it is
stated as part of the theorem rather than buried in the proof.

**The hypotheses are not symmetric, and that is the point.** Only one of the two
series is required to converge absolutely; the other need only converge.
Requiring convergence of both and nothing more is not enough, as
[[fs-cauchy-product-of-convergent-series-converges]] shows.

## Facts & Assumptions

**Given:** Sequences $(a_k)$ and $(b_k)$ of reals, their partial sums $A_n$ and $B_m$, and their Cauchy product $c_n = \sum_{k=0}^{n} a_k b_{n-k}$ ([[def-cauchy-product]]).

[L1] Finite sums: $\sum_{k<0} x_k = 0$, $\sum_{k<n+1} x_k = \sum_{k<n} x_k + x_n$, and $\sum_{k=0}^{n} x_k = \sum_{k<n+1} x_k$ ([[def-finite-sum]]).

[L2] Finite sums are additive, are scaled by a constant factor, may be split at an intermediate index, and are monotone in their terms ([[lem-finite-sum-laws]]).

[L3] Partial sums of a series, and the meaning of its sum ([[def-series]], [[def-real-limit]]).

[L4] The principle of induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L5] $\bigl|\sum_{k<n} x_k\bigr| \le \sum_{k<n} |x_k|$ ([[lem-triangle-inequality-finite]]).

[L6] Absolute value: $|xy| = |x|\,|y|$ and $|x| \ge 0$ ([[lem-of-abs-value]]).

[L7] For a series of nonnegative terms, every partial sum is at most the sum, and the partial sums converge to it ([[thm-nonnegative-series-bounded-partial-sums]]).

[L8] A convergent sequence of reals is bounded ([[lem-convergent-implies-bounded]]).

[L9] Algebra of limits ([[thm-algebra-of-limits]], [[def-real-limit]]).

[L10] If $\sum |x_k|$ converges then $\sum x_k$ converges; absolute convergence of $\sum a_k$ means convergence of $\sum |a_k|$ ([[lem-absolute-convergence-implies-convergence]], [[def-absolute-and-conditional-convergence]]).

## Proof

**Proof technique:** direct.

1.1 Claim 1 holds, by induction on $N$. At $N = 0$ both sides are empty sums, hence $0$. Assume it at $N$. By [L1], $\sum_{n<N+1} c_n = \sum_{n<N} c_n + c_N$ and $c_N = \sum_{k<N+1} a_k b_{N-k} = \sum_{k<N} a_k b_{N-k} + a_N b_0$. On the other side, $\sum_{i<N+1} a_i B_{N+1-i} = \sum_{i<N} a_i B_{N+1-i} + a_N B_1$, where $B_1 = b_0$ by [L1] and $B_{N+1-i} = B_{N-i} + b_{N-i}$ for every $i \le N$, again by [L1]; so additivity gives $\sum_{i<N+1} a_i B_{N+1-i} = \sum_{i<N} a_i B_{N-i} + \sum_{i<N} a_i b_{N-i} + a_N b_0$. Substituting the induction hypothesis into the first term and recognising the last two as $c_N$ closes the induction. [L1, L2, L4]

1.2 Assume the hypotheses of claim 2. Since $\sum |a_k|$ converges, $\sum a_k$ converges; write $A$ for its sum, so $A_n \to A$, and write $L$ for the sum of $\sum |a_k|$, so that $P_N := \sum_{k<N} |a_k|$ satisfies $P_N \le L$ for every $N$ and $P_N \to L$. [given, L3, L7, L10]

1.3 Write $B$ for the sum of $\sum b_k$ and $\beta_m := B_m - B$, so that $\beta_m \to 0$; being convergent, $(\beta_m)$ is bounded, and we fix a real $C \ge 1$ with $|\beta_m| \le C$ for every $m$. [given, L3, L8, L9, choose]

2.1 By claim 1 and additivity, for every $N$, $\sum_{n<N} c_n = \sum_{i<N} a_i (B + \beta_{N-i}) = B\,A_N + R_N$, where $R_N := \sum_{i<N} a_i \beta_{N-i}$. [step 1.1, step 1.3, L2]

2.2 Let $\varepsilon > 0$ be real. Since $P_N \to L$, fix $M \in \mathbb{N}$ with $L - P_M < \varepsilon/(2C)$; since $\beta_m \to 0$, fix $K \in \mathbb{N}$ with $|\beta_m| < \varepsilon/(2(L+1))$ for all $m \ge K$. Both quotients are legitimate, $C \ge 1$ and $L + 1 \ge 1$ being positive. [step 1.2, step 1.3, choose]

3.1 For $N \ge M + K$, the triangle inequality and splitting at $M$ give $|R_N| \le \sum_{i<N} |a_i|\,|\beta_{N-i}| = \sum_{i<M} |a_i|\,|\beta_{N-i}| + \sum_{i=M}^{N-1} |a_i|\,|\beta_{N-i}|$. [step 2.1, L2, L5, L6]

4.1 In the first of those sums $i < M$ and $N \ge M + K$, so $N - i > N - M \ge K$ and in particular $N - i \ge K$, whence $|\beta_{N-i}| < \varepsilon/(2(L+1))$; monotonicity of finite sums then bounds it by $\varepsilon\,P_M/(2(L+1)) \le \varepsilon L/(2(L+1)) < \varepsilon/2$. [step 2.2, step 3.1, step 1.2, L2]

4.2 In the second sum every factor $|\beta_{N-i}|$ is at most $C$, so it is bounded by $C \sum_{i=M}^{N-1}|a_i| = C\,(P_N - P_M) \le C\,(L - P_M) < \varepsilon/2$. [step 2.2, step 3.1, step 1.2, step 1.3, L2]

5.1 Hence $|R_N| < \varepsilon$ for every $N \ge M + K$; as $\varepsilon > 0$ was arbitrary, $R_N \to 0$. [step 3.1, step 4.1, step 4.2, L3]

6.1 By step 2.1, step 1.2 and step 5.1 the partial sums of $\sum c_n$ satisfy $\sum_{n<N} c_n = B\,A_N + R_N \to B\,A + 0 = A\,B$, so $\sum c_n$ converges with sum $AB$, which is claim 2. [step 1.2, step 2.1, step 5.1, L9] ∎

## Remarks

- **Where absolute convergence of $\sum a_k$ is used.** Twice, and both times to control a *tail* of $\sum |a_k|$: in step 2.2, to make the far block of the splitting small uniformly in $N$, and in step 4.1, where $P_M \le L$ bounds the near block. Mere convergence of $\sum a_k$ gives no such control, since the tail of a conditionally convergent series is small only after cancellation, and the factors $\beta_{N-i}$ destroy the cancellation.

- **The identity of claim 1 is a rectangle folded into a triangle.** It says that summing the products $a_i b_j$ over the triangle $i + j < N$ by antidiagonals gives the same result as summing them row by row, $\sum_{i<N} a_i \sum_{j<N-i} b_j$. The induction proves exactly that, and it needs no hypothesis because both sides are finite sums.

- **Abel's stronger theorem is not available here.** If $\sum a_k$, $\sum b_k$ and $\sum c_n$ all converge, then the sum of $\sum c_n$ *is* $AB$ without any absolute convergence; but the standard proof runs through power series and Abel's limit theorem, which are later in the reading order. Mertens' theorem is what this page can prove, and its hypotheses are what [[cor-cauchy-product-absolute]] inherits.
````
