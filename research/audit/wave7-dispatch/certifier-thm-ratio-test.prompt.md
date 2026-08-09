# Independent repair certifier brief — Wave 7, step A6

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30) — binding on every current
> and future agent.** Use commands already allowed inside the workspace sandbox;
> choose non-escalated forms and never ask the owner to approve a shell command.
> If an indispensable operation has no escalation-free form, report a blocker.

You are **GPT 5.6 Terra** at `xhigh` effort with a 1,000,000-token context
window. You are an independent, read-only certifier of one Audit-Beta repair.
You did not author it. Your Codex lane has a mechanically read-only shell: use
non-mutating commands such as `rg`, `sed`, and `git diff` to read the current
workspace and use web access where a source check is material. Do not edit,
delegate, escalate, or ask for a shell permission. Shell reads already allowed
inside the read-only sandbox require no owner approval.

## Triage — the standing rule (verbatim, binding on you)

- **Non-negotiable:** mathematical accuracy, logical validity, correct
  citation.
- **Explicitly acceptable, spend no effort:** minor citational quirks; logical
  gaps a competent reader closes **within 30 seconds**; other non-fatal quirks;
  imperfection at the level of the letter.

Read the assigned item's **current final text from disk**, not merely its task
summary. Read each dependency relevant to the repaired inference. Check the
title and public statement, every numbered step, Facts & Assumptions, Remarks,
dependency lists, provenance tags, and verification block. Where an exact
external source is material, use web access to check that source. Confirm that
stale pre-repair `verification.judge`/`verification.audited` evidence is absent
and that the stated repair fixes its named defect without introducing a new
one. A passing mechanical gate is supporting evidence, not a mathematical
substitute.

Return exactly:

```text
ITEM: <id>
VERDICT: CERTIFIED | REFUSED | BLOCKED
CURRENT-TEXT: READ
MATHEMATICS: [concise evidence]
CITATIONS: [concise evidence]
METADATA: [provenance/dependencies/stale-verdict disposition]
FINDINGS: NONE | [fatal defect or concrete blocker]
```

Do not suggest optional polishing and do not write a verification stamp. Audit-
Alpha decides whether the independent reading licenses one.


---

# This dispatch

## Assigned repair — `thm-ratio-test`

Item path: `items/thm-ratio-test.md`

Normalized final-text SHA-256 at dispatch: `96bff24bc26cf44d8c1fee2cebad19a167aad94ca2761c091f947d326335f2f4`

Split reasons: ["body text"]

Provenance ledger: `wave7-real-analysis-series.provenance.jsonl`

The four Wave 7 findings ledgers on disk record the original defect and Beta's repair. Locate this id there before certifying.

Read the current target from disk and every dependency needed to check the repair. The generated manifest rows are supplied only as a completeness checklist:

```json
[
  {
    "source": "thm-ratio-test",
    "sourcePage": "series-and-nonnegative-tests",
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
    "source": "thm-ratio-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "def-limsup-liminf",
    "declared_target": "def-limsup-liminf",
    "target_statement_provenance": "literature-derived",
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-ratio-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "lem-limsup-exists",
    "declared_target": "lem-limsup-exists",
    "target_statement_provenance": "ai-altered",
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-ratio-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "thm-geometric-series",
    "declared_target": "thm-geometric-series",
    "target_statement_provenance": "literature-derived",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-ratio-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "thm-direct-comparison-test",
    "declared_target": "thm-direct-comparison-test",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-ratio-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "lem-series-tail-invariance",
    "declared_target": "lem-series-tail-invariance",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-ratio-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "lem-series-linearity",
    "declared_target": "lem-series-linearity",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-ratio-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "lem-absolute-convergence-implies-convergence",
    "declared_target": "lem-absolute-convergence-implies-convergence",
    "target_statement_provenance": "literature-derived",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-ratio-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "lem-nth-term-test",
    "declared_target": "lem-nth-term-test",
    "target_statement_provenance": "literature-derived",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-ratio-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
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
    "source": "thm-ratio-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
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
    "source": "thm-ratio-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "def-extended-reals",
    "declared_target": "def-extended-reals",
    "target_statement_provenance": "ai-altered",
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-ratio-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "lem-extended-reals-complete",
    "declared_target": "lem-extended-reals-complete",
    "target_statement_provenance": "literature-derived",
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-ratio-test",
    "sourcePage": "series-and-nonnegative-tests",
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
    "source": "thm-ratio-test",
    "sourcePage": "series-and-nonnegative-tests",
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
    "source": "thm-ratio-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
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
    "source": "thm-ratio-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "lem-power-monotone",
    "declared_target": "lem-power-monotone",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
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
id: thm-ratio-test
kind: theorem
title: "Ratio test: $\\limsup |a_{k+1}/a_k| < 1$ gives absolute convergence and hence convergence, and $\\liminf |a_{k+1}/a_k| > 1$ gives divergence"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-series, def-limsup-liminf, lem-limsup-exists, thm-geometric-series, thm-direct-comparison-test, lem-series-tail-invariance, lem-series-linearity, lem-absolute-convergence-implies-convergence, lem-nth-term-test, lem-of-abs-value, thm-induction-principle, def-extended-reals, lem-extended-reals-complete, cor-archimedean-reciprocal, def-real-limit, def-integer-power, lem-power-monotone]
justified_by: []
aliases: []
landmark: true
proof_strategy: cases
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ratio test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ratio_test"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.34)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Convergence tests (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Convergence_tests"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals with $a_k \ne 0$ for every $k \in \mathbb{N}$
and put

$$q_k \;:=\; \Big|\frac{a_{k+1}}{a_k}\Big| \;=\; \frac{|a_{k+1}|}{|a_k|} \qquad (k \in \mathbb{N}),$$

a genuine sequence on $\mathbb{N}$, whose limit superior and limit inferior exist
in $\overline{\mathbb{R}}$ for every such $(a_k)$ ([[lem-limsup-exists]]). Then:

1. if $\limsup_{k} q_k < 1$ then $\sum |a_k|$ converges, and hence $\sum a_k$
   converges as well ([[lem-absolute-convergence-implies-convergence]]);
2. if $\liminf_{k} q_k > 1$ then $\sum a_k$ diverges.

The hypothesis $a_k \ne 0$ is what makes $q_k$ exist and is not a convenience: a
single vanishing term leaves the ratio at that index undefined. For a family from
a starting index $m$ the statement is the one above applied to the shifted
sequence $j \mapsto a_{j+m}$ ([[def-series]]), whose ratios are
$|a_{j+m+1}/a_{j+m}|$.

**Nothing is claimed when $\limsup_k q_k \ge 1 \ge \liminf_k q_k$.** In that
regime the test is silent, and it has to be: the companion page carries a
convergent series whose ratios have limit superior $2$, and both a convergent and
a divergent series with ratio limit exactly $1$.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals with $a_k \ne 0$ for every $k$; the ratios $q_k = |a_{k+1}|/|a_k|$; the tail bounds $s_n = \sup\{q_k : k \ge n\}$ and $i_n = \inf\{q_k : k \ge n\}$ taken in $\overline{\mathbb{R}}$, so that $\limsup_k q_k = \inf\{s_n\}$ and $\liminf_k q_k = \sup\{i_n\}$ ([[def-limsup-liminf]], [[def-extended-reals]]); and the assumption that one of the two hypotheses of the Statement holds.

[L1] Every subset of $\overline{\mathbb{R}}$ has a least upper bound and a greatest lower bound there, and the extended order is total ([[lem-extended-reals-complete]]). In particular $\inf\{s_n\} \le s_n$ and $\sup\{i_n\} \ge i_n$ for every $n$; $q_k \le s_n$ and $q_k \ge i_n$ for every $k \ge n$; a real $t$ exceeding $\inf\{s_n\}$ is not a lower bound of $\{s_n\}$; and a real $u$ below $\sup\{i_n\}$ is not an upper bound of $\{i_n\}$.

[L2] Both quantities exist for every sequence ([[lem-limsup-exists]], [[def-limsup-liminf]]).

[L3] Absolute value: $|x| \ge 0$; $|x| = 0$ exactly when $x = 0$; $|xy| = |x||y|$, so $|a_{k+1}/a_k| = |a_{k+1}|/|a_k|$ ([[lem-of-abs-value]]).

[L4] The principle of induction ([[thm-induction-principle]]).

[L5] The geometric series $\sum_{j \ge 0} t^{j}$ converges when $|t| < 1$; a series converges if and only if each of its tail series converges; and $\sum c\,x_j$ converges when $\sum x_j$ does ([[thm-geometric-series]], [[lem-series-tail-invariance]], [[lem-series-linearity]]).

[L6] Direct comparison: if $0 \le x_j \le y_j$ from some index on and $\sum y_j$ converges then $\sum x_j$ converges ([[thm-direct-comparison-test]]).

[L7] If a series converges then its terms tend to $0$ ([[lem-nth-term-test]], [[def-real-limit]]); and for every real $c > 0$ there is a natural $n \ge 1$ with the rational $1/n < c$ ([[cor-archimedean-reciprocal]]).

[L8] Powers: $t^{0} = 1$, $t^{j+1} = t^{j} t$, and $t^{j} > 0$ for $t > 0$ ([[def-integer-power]], [[lem-power-monotone]]).

[L9] If $\sum |x_k|$ converges then $\sum x_k$ converges ([[lem-absolute-convergence-implies-convergence]]).

## Proof

**Proof technique:** cases.

1.1 Assume $\limsup_{k} q_k < 1$. [assume-case lt]

1.2 Assume instead $\liminf_{k} q_k > 1$. [assume-case gt]

1.3 Each $q_k$ is a nonnegative real, being a quotient of a nonnegative real by a positive one, so every $s_n \ge q_n \ge 0$ and hence $\limsup_k q_k \ge 0$. [given, L1, L2, L3]

2.1 In the case $\limsup_k q_k < 1$ the value $\Lambda := \limsup_k q_k$ therefore lies strictly between the reals $0$ and $1$ inclusive of $0$, so it is a real number; put $t := (\Lambda + 1)/2$, a real with $0 \le \Lambda < t < 1$. [step 1.1, step 1.3, L1, choose]

2.2 In the case $\liminf_k q_k > 1$, the real $1$ is not an upper bound of $\{i_n\}$, so there is $N \in \mathbb{N}$ with $i_N > 1$. [step 1.2, L1, choose]

3.1 In the case $\Lambda < 1$: since $t > \Lambda = \inf\{s_n\}$, the real $t$ is not a lower bound of $\{s_n\}$, so there is $N$ with $s_N < t$, and then $q_k \le s_N < t$ for every $k \ge N$. [step 2.1, L1, choose]

3.2 In the case $\liminf_k q_k > 1$: $q_k \ge i_N > 1$ for every $k \ge N$, since $i_N$ is a lower bound of $\{q_k : k \ge N\}$. [step 2.2, L1]

3.3 In the case $\Lambda < 1$: the series $\sum_{j \ge 0} t^{\,j}$ converges since $|t| = t < 1$, hence so does $\sum_{j \ge 0} |a_N| t^{\,j}$. [step 2.1, L5]

4.1 In the case $\Lambda < 1$: for $k \ge N$, $|a_{k+1}|/|a_k| < t$ with $|a_k| > 0$, hence $|a_{k+1}| < t\,|a_k|$. [step 3.1, L3, algebra]

4.2 In the case $\liminf_k q_k > 1$: for $k \ge N$, $|a_{k+1}| > |a_k|$, again multiplying by $|a_k| > 0$. [step 3.2, L3, algebra]

5.1 In the case $\Lambda < 1$: an induction on $j$ gives $|a_{N+j}| \le |a_N|\,t^{\,j}$ for every $j \in \mathbb{N}$. At $j = 0$ this is an equality, since $t^{0} = 1$; and if it holds at $j$ then $|a_{N+j+1}| < t\,|a_{N+j}| \le t\,|a_N| t^{\,j} = |a_N| t^{\,j+1}$, using $t > 0$. [step 4.1, L4, L8]

5.2 In the case $\liminf_k q_k > 1$: an induction on $j$ gives $|a_{N+j}| \ge |a_N| > 0$ for every $j \in \mathbb{N}$. At $j = 0$ it is an equality, and if it holds at $j$ then $|a_{N+j+1}| > |a_{N+j}| \ge |a_N|$. [step 4.2, L3, L4]

6.1 In the case $\Lambda < 1$: with $x_j := |a_{N+j}|$ and $y_j := |a_N| t^{\,j}$ we have $0 \le x_j \le y_j$ for every $j$, so $\sum_j |a_{N+j}|$ converges; that is the $N$-th tail series of $\sum |a_k|$, so $\sum |a_k|$ converges. [step 5.1, step 3.3, L3, L5, L6]

6.2 In the case $\liminf_k q_k > 1$: $(a_k)$ does not converge to $0$. Choose a natural $n \ge 1$ with $1/n < |a_N|$; if $a_k \to 0$ there would be $K$ with $|a_k| < 1/n$ for all $k \ge K$, contradicting $|a_k| \ge |a_N| > 1/n$ at any index $k$ that is at least both $K$ and $N$. [step 5.2, L7, choose]

7.1 In the case $\liminf_k q_k > 1$: by the term test $\sum a_k$ diverges, which is claim 2. [step 6.2, L7]

7.2 In the case $\Lambda < 1$: the series $\sum |a_k|$ having been shown to converge, $\sum a_k$ converges as well; together with the convergence of $\sum |a_k|$ that is claim 1. [step 6.1, L9]

8.1 The two assumed hypotheses are the cases of the disjunction in the Given, and they exhaust it; outside them both claims are vacuous, each hypothesis being false, so the theorem holds for every sequence with nonvanishing terms. [step 7.2, step 7.1, cases-exhaustive] ∎

## Remarks

- **The two halves are not dual, and the asymmetry is real.** Convergence needs the ratios to be *eventually* below a fixed $t < 1$, which $\limsup < 1$ supplies; divergence needs them *eventually* above $1$, which is what $\liminf > 1$ supplies. A hypothesis on $\limsup$ alone can never force divergence, since a single large ratio occurring arbitrarily late says nothing about the size of the terms. That is exactly what [[fs-ratio-limsup-at-least-one-diverges]] records.

- **The geometric series is the only convergent series the proof knows.** Claim 1 is a comparison against $|a_N| t^{j}$, and every later refinement on this page, Kummer's test included, exists because that comparison is too coarse when the ratios approach $1$.
````
