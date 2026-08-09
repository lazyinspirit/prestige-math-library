## Selection reasons

- critical risk (14): 8 declared dependencies; 8 cited facts; 11 numbered proof steps; biconditional / both-direction claim; boundary-sensitive language; analytic limiting/completeness language

## Target item — `thm-abel-test`

Normalized current SHA-256: `4f2126d7b9331d18cfa4d1e7024750649d59d7df8f0852a4631a4e52f79e62dc`

The complete current item follows, including frontmatter:

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

## Wave 8 provenance row for the target

```json
{
  "id": "thm-abel-test",
  "statement": "literature-derived",
  "proof": "ai-altered",
  "evidence": "exact-source",
  "urls": [
    "https://people.math.sc.edu/girardi/m5545/TBB-AllChapters-Landscape.pdf"
  ],
  "rationale": "Thomson–Bruckner–Bruckner states Abel's test for a convergent series times a monotone bounded factor. The proof reduces the sourced theorem to Dirichlet's test with local dependencies exposed.",
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
      "source": "cor-monotone-converges-iff-bounded",
      "source_section": "Statement",
      "quote": "Let $(x_k)$ be a monotone sequence of reals ([[def-sequence]],",
      "uses": [
        "1.3"
      ]
    },
    {
      "fact": "L2",
      "source": "def-monotone-sequence",
      "source_section": "Definition",
      "quote": "- **monotone** when it is nondecreasing or nonincreasing;",
      "uses": [
        "2.1",
        "2.2",
        "6.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-convergent-implies-bounded",
      "source_section": "Statement",
      "quote": "Let $(x_k)$ be a sequence of reals converging to $x \\in \\mathbb{R}$",
      "uses": [
        "1.4"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-dirichlet-test",
      "source_section": "Statement",
      "quote": "2. $(b_k)$ is nonincreasing ([[def-monotone-sequence]]) and converges to $0$",
      "uses": [
        "3.1",
        "3.2"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-series-linearity",
      "source_section": "Statement",
      "quote": "Let $(a_k)$ and $(b_k)$ be sequences of reals whose series converge",
      "uses": [
        "3.2",
        "4.1",
        "5.1"
      ]
    },
    {
      "fact": "L6",
      "source": "thm-algebra-of-limits",
      "source_section": "Statement",
      "quote": "Let $(x_k)$ and $(y_k)$ be sequences of reals ([[def-sequence]]) converging to",
      "uses": [
        "1.3",
        "2.2"
      ]
    },
    {
      "fact": "L6",
      "source": "def-real-limit",
      "source_section": "Definition",
      "quote": "A sequence $(x_k)$ of reals **converges** to $x \\in \\mathbb{R}$ when for",
      "uses": [
        "1.3",
        "2.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "Verified the stated inference at step 1.1.",
      "step": "1.1",
      "inputs": [
        "given"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "Verified the stated inference at step 1.2.",
      "step": "1.2",
      "inputs": [
        "given"
      ]
    },
    {
      "id": "step-1-3",
      "claim": "Verified the stated inference at step 1.3.",
      "step": "1.3",
      "inputs": [
        "L1",
        "L6"
      ]
    },
    {
      "id": "step-1-4",
      "claim": "Verified the stated inference at step 1.4.",
      "step": "1.4",
      "inputs": [
        "L3"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "Verified the stated inference at step 2.1.",
      "step": "2.1",
      "inputs": [
        "1.1",
        "1.3",
        "L2"
      ]
    },
    {
      "id": "step-2-2",
      "claim": "Verified the stated inference at step 2.2.",
      "step": "2.2",
      "inputs": [
        "1.2",
        "1.3",
        "L2",
        "L6"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "Verified the stated inference at step 3.1.",
      "step": "3.1",
      "inputs": [
        "1.4",
        "2.1",
        "L4"
      ]
    },
    {
      "id": "step-3-2",
      "claim": "Verified the stated inference at step 3.2.",
      "step": "3.2",
      "inputs": [
        "1.4",
        "2.2",
        "L4",
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
        "L5"
      ]
    },
    {
      "id": "step-5-1",
      "claim": "Verified the stated inference at step 5.1.",
      "step": "5.1",
      "inputs": [
        "1.3",
        "4.1",
        "L5"
      ]
    },
    {
      "id": "step-6-1",
      "claim": "Verified the stated inference at step 6.1.",
      "step": "6.1",
      "inputs": [
        "5.1",
        "L2"
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
      "evidence": "Step 6.1 supplies its choice."
    },
    {
      "case": "iff-forward",
      "status": "checked",
      "evidence": "Statement and step 1.1 establish the forward direction."
    },
    {
      "case": "iff-reverse",
      "status": "checked",
      "evidence": "Statement and step 6.1 establish the reverse direction."
    }
  ]
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "thm-abel-test",
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
    "source": "thm-abel-test",
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
    "source": "thm-abel-test",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "cor-monotone-converges-iff-bounded",
    "declared_target": "cor-monotone-converges-iff-bounded",
    "target_statement_provenance": "literature-derived",
    "targetPage": "monotone-sequences-and-cauchy-completeness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-abel-test",
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
    "source": "thm-abel-test",
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
    "source": "thm-abel-test",
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
    "source": "thm-abel-test",
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
    "source": "thm-abel-test",
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

## Full text of every cited or declared item (8)

### `cor-monotone-converges-iff-bounded`

````markdown
---
id: cor-monotone-converges-iff-bounded
kind: corollary
title: "A monotone sequence converges if and only if it is bounded"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-monotone-convergence, lem-convergent-implies-bounded, def-monotone-sequence, def-bounded-set, def-sequence, lem-of-abs-value]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-sonnet-5
    verdict: certify
    date: 2026-08-06
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Monotone convergence theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotone_convergence_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (Thm 3.14)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. Lebl, Basic Analysis I, Sequences and limits (Theorem 2.1.10)"
      url: "https://www.jirka.org/ra/html/sec_seqsandlims.html"
---

## Statement

Let $(x_k)$ be a monotone sequence of reals ([[def-sequence]],
[[def-monotone-sequence]]). Then $(x_k)$ converges if and only if it is bounded,
that is if and only if there is $M \in \mathbb{R}$ with $|x_k| \le M$ for every
$k \in \mathbb{N}$.

The forward implication holds for every sequence and is
[[lem-convergent-implies-bounded]]. What monotonicity buys is the converse, which
is false for sequences in general.

## Facts & Assumptions

**Given:** A monotone sequence $(x_k)$ of reals, with range $S = \{x_k : k \in \mathbb{N}\}$.

[L1] Monotone means nondecreasing or nonincreasing ([[def-monotone-sequence]]).

[L2] Monotone convergence: a nondecreasing sequence whose range is bounded above converges, to the supremum of its range; a nonincreasing sequence whose range is bounded below converges, to the infimum ([[thm-monotone-convergence]]).

[L3] Every convergent sequence of reals is bounded ([[lem-convergent-implies-bounded]]).

[L4] A sequence is bounded when some $M$ satisfies $|x_k| \le M$ for every $k$; its range is bounded above by $u$ when $x_k \le u$ for every $k$, and bounded below by $\ell$ when $\ell \le x_k$ for every $k$ ([[def-sequence]], [[def-bounded-set]]).

[L5] Absolute value: $|t| \le M$ exactly when $-M \le t \le M$ ([[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $(x_k)$ converges. Then it is bounded by [L3], and this direction uses neither the monotonicity hypothesis nor any case distinction. [given, L3]

1.2 Suppose instead that $(x_k)$ is bounded, and fix $M$ with $|x_k| \le M$ for every $k$; then $-M \le x_k \le M$ for every $k$, so the range $S$ is bounded above by $M$ and bounded below by $-M$. [given, L4, L5, assume-hyp]

2.1 If $(x_k)$ is nondecreasing then its range is bounded above by step 1.2, so $(x_k)$ converges, to $\sup S$. [step 1.2, L2, assume-case nondec]

2.2 If $(x_k)$ is nonincreasing then its range is bounded below by step 1.2, so $(x_k)$ converges, to $\inf S$. [step 1.2, L2, assume-case noninc]

3.1 A monotone sequence is nondecreasing or nonincreasing, so those two cases exhaust the hypothesis, and in both a bounded monotone sequence converges. [step 2.1, step 2.2, L1, cases: nondecreasing or nonincreasing, cases-exhaustive]

4.1 Both directions are established: a monotone sequence converges if and only if it is bounded. [step 1.1, step 3.1] ∎

## Remarks

- **The limit is named, not merely asserted to exist.** In the nondecreasing case
  it is $\sup S$ and in the nonincreasing case $\inf S$, by
  [[thm-monotone-convergence]]. The equivalence is stated without the value only
  because the value depends on which of the two cases holds.

- **This is the form in which the result is used.** Bolzano-Weierstrass
  ([[thm-bolzano-weierstrass]]) extracts a monotone subsequence of a bounded
  sequence and then needs exactly this corollary, since what is available about
  the subsequence is boundedness, inherited from the sequence, and not a bound on
  a particular side.

- **Monotonicity cannot be dropped.** Without it the converse direction fails,
  by [[fs-bounded-implies-convergent]]. The forward direction is not in the same
  position: it holds for every sequence, monotone or not, so there is no
  hypothesis to drop from it. What monotonicity adds there is sharpness rather
  than validity, and the sharpened form is recorded by
  [[lem-monotone-unbounded-diverges]]: an unbounded nondecreasing sequence does
  not merely fail to converge, it diverges to $+\infty$.
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

### `lem-convergent-implies-bounded`

````markdown
---
id: lem-convergent-implies-bounded
kind: lemma
title: "Every convergent sequence is bounded"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-real-limit, def-sequence, lem-finite-set-has-max, def-max-min, lem-of-triangle-inequality, lem-of-abs-value, lem-of-add-order, cor-of-one-positive, thm-rat-ordered-field, thm-nat-linear-order, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "convergent implies bounded"
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
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(x_k)$ be a sequence of reals converging to $x \in \mathbb{R}$
([[def-sequence]], [[def-real-limit]]). Then $(x_k)$ is bounded: there is
$M \in \mathbb{R}$ with $|x_k| \le M$ for every $k \in \mathbb{N}$.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals converging to a real $x$ ([[def-sequence]], [[def-real-limit]]).

[L1] Convergence: for every rational $\varepsilon > 0$ there is $K \in \mathbb{N}$ with $|x_k - x| < \varepsilon$ for all $k \ge K$ ([[def-real-limit]]); and $1$ is a rational $> 0$, since $\mathbb{Q}$ is an ordered field ([[thm-rat-ordered-field]]) and $0 < 1$ in every ordered field ([[cor-of-one-positive]]).

[L2] Triangle inequality: $|a + b| \le |a| + |b|$ in $\mathbb{R}$ ([[lem-of-triangle-inequality]], [[def-complete-ordered-field]]).

[L3] Absolute value: $|u| \ge 0$ for every real $u$ ([[lem-of-abs-value]]).

[L4] Finite maxima: for every $n \in \mathbb{N}$ and all reals $a_0, \dots, a_n$ the set $\{a_0, \dots, a_n\}$ has a maximum ([[lem-finite-set-has-max]]); a maximum lies in the set and dominates every element of it ([[def-max-min]]).

[L5] Order arithmetic in $\mathbb{R}$: transitivity of $\le$ and of $<$; both mixed forms, $u < v \le w \Rightarrow u < w$ and $u \le v < w \Rightarrow u < w$, and the implication $u < v \Rightarrow u \le v$, all immediate from the reading of $u \le v$ as "$u < v$ or $u = v$" ([[def-complete-ordered-field]], [[def-ordered-field]]); and translation invariance, $a < b \Rightarrow a + c < b + c$ ([[lem-of-add-order]]).

[L6] The order on $\mathbb{N}$ is total, so every index $k$ satisfies $k < K$ or $k \ge K$ ([[thm-nat-linear-order]]).

## Proof

**Proof technique:** direct.

1.1 Apply convergence with the rational $\varepsilon = 1$: fix $K \in \mathbb{N}$ such that $|x_k - x| < 1$ for all $k \ge K$. [L1]

2.1 For every $k \ge K$ we have $|x_k| = |(x_k - x) + x| \le |x_k - x| + |x|$, while adding $|x|$ to both sides of $|x_k - x| < 1$ gives $|x_k - x| + |x| < 1 + |x| = |x| + 1$; composing the non-strict inequality with the strict one yields $|x_k| < |x| + 1$. [step 1.1, L2, L5]

2.2 Define $M := \max\{\, |x_0|, |x_1|, \dots, |x_{K-1}|, |x| + 1 \,\}$, the maximum of the finite list obtained by appending $|x| + 1$ to the first $K$ values $|x_0|, \dots, |x_{K-1}|$; the list is nonempty because its last entry is always present (when $K = 0$ the list is the single entry $|x| + 1$), so the maximum exists by [L4]. [step 1.1, L4, choose]

3.1 For every $k < K$ the value $|x_k|$ is one of the entries of that list, hence $|x_k| \le M$. [step 2.2, L4]

3.2 For every $k \ge K$ we have $|x_k| < |x| + 1 \le M$, since $|x| + 1$ is an entry of the list, hence $|x_k| \le M$. [step 2.1, step 2.2, L4, L5]

4.1 Every index satisfies $k < K$ or $k \ge K$, and in both cases $|x_k| \le M$; therefore $(x_k)$ is bounded. [step 3.1, step 3.2, L3, L6] ∎

## Remarks

- This is where [[lem-finite-set-has-max]] does its main work on this page: the first $K$ terms are bounded because a nonempty finite set of reals has a maximum, and that fact is proved once, by induction, rather than re-derived here. It is not the only consumer, and no claim of uniqueness is made: [[lem-null-times-bounded]] and [[rem-sequence-conventions]] cite the same lemma, each for a maximum of finitely many reals.

- The converse is false. A bounded sequence need not converge ([[fs-bounded-implies-convergent]]). What is true in that direction is the Bolzano-Weierstrass theorem, which requires a passage to a subsequence; it is **not available at this point in the reading order**, being the subject of the next page of this track, *Monotone Sequences, Bolzano-Weierstrass, and Cauchy Completeness*, where it is proved.

- Boundedness is exactly what makes [[lem-null-times-bounded]] applicable to a convergent factor, and that is how boundedness enters the product rule of [[thm-algebra-of-limits]].
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

