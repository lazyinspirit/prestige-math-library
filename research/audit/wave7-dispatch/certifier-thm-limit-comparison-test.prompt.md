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

## Assigned repair — `thm-limit-comparison-test`

Item path: `items/thm-limit-comparison-test.md`

Normalized final-text SHA-256 at dispatch: `777df92ad550e325c30afe048300100fdae5330ba73bb2684f2a0ed82a3b7701`

Split reasons: ["body text","deps"]

Provenance ledger: `wave7-real-analysis-series.provenance.jsonl`

The four Wave 7 findings ledgers on disk record the original defect and Beta's repair. Locate this id there before certifying.

Read the current target from disk and every dependency needed to check the repair. The generated manifest rows are supplied only as a completeness checklist:

```json
[
  {
    "source": "thm-limit-comparison-test",
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
    "source": "thm-limit-comparison-test",
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
    "source": "thm-limit-comparison-test",
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
    "source": "thm-limit-comparison-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "def-divergence-to-infinity",
    "declared_target": "def-divergence-to-infinity",
    "target_statement_provenance": "ai-altered",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-limit-comparison-test",
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
    "source": "thm-limit-comparison-test",
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
    "source": "thm-limit-comparison-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "def-sequence",
    "declared_target": "def-sequence",
    "target_statement_provenance": "ai-altered",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-limit-comparison-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "lem-limit-unique",
    "declared_target": "lem-limit-unique",
    "target_statement_provenance": "literature-derived",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-limit-comparison-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "def-field",
    "declared_target": "def-field",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-limit-comparison-test",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "lem-of-sign-rules",
    "declared_target": "lem-of-sign-rules",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
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
id: thm-limit-comparison-test
kind: theorem
title: "For $a_k, b_k > 0$ with $a_k/b_k \\to L$: if $L \\in (0,\\infty)$ the two series share their behaviour, while $L = 0$ and $L = \\infty$ give one implication each"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-direct-comparison-test, def-real-limit, def-series, def-divergence-to-infinity, lem-series-linearity, cor-archimedean-reciprocal, def-sequence, lem-limit-unique, def-field, lem-of-sign-rules]
justified_by: []
aliases: []
landmark: true
proof_strategy: cases
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Limit comparison test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_comparison_test"
    - title: "T. Tao, Analysis I, 3rd ed., §7.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "APEX Calculus, Section 9.4: Comparison Tests"
      url: "https://sites.und.edu/timothy.prescott/apex/web/apex.Ch9.S4.html"
    - title: "MIT 18.100B Real Analysis lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ and $(b_k)$ be sequences of reals with $a_k > 0$ and $b_k > 0$ for
every $k \in \mathbb{N}$, and put $q_k := a_k / b_k$. Then:

1. if $(q_k)$ converges with $\lim_k q_k = L$ for a real $L > 0$
   ([[def-real-limit]]), then $\sum a_k$ converges **if and only if** $\sum b_k$
   converges;
2. if $(q_k)$ converges with $\lim_k q_k = 0$, then convergence of $\sum b_k$
   implies convergence of $\sum a_k$; equivalently, divergence of $\sum a_k$
   implies divergence of $\sum b_k$;
3. if $(q_k)$ diverges to $+\infty$ ([[def-divergence-to-infinity]]), then
   convergence of $\sum a_k$ implies convergence of $\sum b_k$; equivalently,
   divergence of $\sum b_k$ implies divergence of $\sum a_k$.

In each clause the convergence of $(q_k)$, or its divergence to $+\infty$, is
part of the hypothesis, so the symbol $\lim_k q_k$ denotes wherever it is written
([[lem-limit-unique]]).

Neither implication in claim 2 can be reversed, and by symmetry neither can the
one in claim 3; the companion page exhibits a pair with $\lim_k q_k = 0$,
$\sum a_k$ convergent and $\sum b_k$ divergent.

For families from a general starting index $m$ the statement is the same, applied
to the shifted sequences $j \mapsto a_{j+m}$ and $j \mapsto b_{j+m}$
([[def-series]]).

**On the third regime.** "$L = \infty$" is written here as divergence of $(q_k)$
to $+\infty$ in the sense of [[def-divergence-to-infinity]], and never as a limit
equation with an infinite right-hand side. A sequence diverging to $+\infty$ has
no limit in $\mathbb{R}$, and this library does not write $\lim q_k = +\infty$.

## Facts & Assumptions

**Given:** Sequences $(a_k)$, $(b_k)$ of reals with $a_k > 0$ and $b_k > 0$ for every $k$, the quotients $q_k = a_k/b_k$, and the assumption that one of the three regimes of the Statement holds: $(q_k)$ converges with $\lim_k q_k = L$ for some real $L > 0$; or $(q_k)$ converges with $\lim_k q_k = 0$; or $(q_k)$ diverges to $+\infty$ ([[lem-limit-unique]]).

[L1] Convergence to $x$ means: for every rational $\varepsilon > 0$ there is $K$ with $|x_k - x| < \varepsilon$ for all $k \ge K$; and the same holds for every *real* $\varepsilon > 0$, since every real $\varepsilon > 0$ exceeds some rational $1/n$ with $n \ge 1$ natural ([[def-real-limit]], [[cor-archimedean-reciprocal]], [[def-sequence]]).

[L2] $q_k \to +\infty$ means: for every real $M$ there is $K$ with $q_k > M$ for all $k \ge K$ ([[def-divergence-to-infinity]]).

[L3] Direct comparison: if $0 \le x_k \le y_k$ for all $k$ from some index on, then convergence of $\sum y_k$ gives convergence of $\sum x_k$ ([[thm-direct-comparison-test]]).

[L4] For $c \ne 0$: $\sum c\,x_k$ converges if and only if $\sum x_k$ converges ([[lem-series-linearity]]).

[L5] Since $q_k=a_k/b_k$ and $b_k>0$, the field laws give $a_k=q_kb_k$. Multiplication by a positive scalar preserves strict inequalities; the non-strict form follows by adjoining the equality case ([[def-field]], [[lem-of-sign-rules]]).

## Proof

**Proof technique:** cases.

1.1 Assume $(q_k)$ converges with $\lim_k q_k = L$ for a real $L > 0$. [assume-case pos]

1.2 Assume instead $(q_k)$ converges with $\lim_k q_k = 0$. [assume-case zero]

1.3 Assume instead $(q_k)$ diverges to $+\infty$. [assume-case inf]

2.1 In the case $\lim_k q_k = L > 0$, apply [L1] with the real tolerance $L/2 > 0$: there is $K$ with $|q_k - L| < L/2$, hence $L/2 < q_k < 3L/2$, for all $k \ge K$. [step 1.1, L1, choose]

2.2 In the case $\lim_k q_k = 0$, apply [L1] with the rational tolerance $1$: there is $K$ with $|q_k| < 1$, hence $q_k < 1$, for all $k \ge K$. [step 1.2, L1, choose]

2.3 In the case $q_k \to +\infty$, apply [L2] with $M = 1$: there is $K$ with $q_k > 1$ for all $k \ge K$. [step 1.3, L2, choose]

3.1 In the case $\lim_k q_k = L > 0$, multiplying by $b_k > 0$ turns step 2.1 into $(L/2)\,b_k < a_k < (3L/2)\,b_k$ for all $k \ge K$, and all three quantities are positive. [step 2.1, L5, algebra]

3.2 In the case $\lim_k q_k = 0$, multiplying by $b_k > 0$ turns step 2.2 into $0 < a_k < b_k$ for all $k \ge K$. [step 2.2, L5, algebra]

3.3 In the case $q_k \to +\infty$, multiplying by $b_k > 0$ turns step 2.3 into $0 < b_k < a_k$ for all $k \ge K$. [step 2.3, L5, algebra]

4.1 In the case $L > 0$: if $\sum b_k$ converges then so does $\sum (3L/2)b_k$, and $0 \le a_k \le (3L/2) b_k$ for $k \ge K$, so $\sum a_k$ converges. [step 3.1, L3, L4]

4.2 In the case $L > 0$: if $\sum a_k$ converges then, since $0 \le (L/2)b_k \le a_k$ for $k \ge K$, the series $\sum (L/2) b_k$ converges, and $L/2 \ne 0$ gives convergence of $\sum b_k$. [step 3.1, L3, L4]

4.3 In the case $\lim_k q_k = 0$: $0 \le a_k \le b_k$ for $k \ge K$, so convergence of $\sum b_k$ gives convergence of $\sum a_k$, and the contrapositive is the divergence form. [step 3.2, L3]

4.4 In the case $q_k \to +\infty$: $0 \le b_k \le a_k$ for $k \ge K$, so convergence of $\sum a_k$ gives convergence of $\sum b_k$, and the contrapositive is the divergence form. [step 3.3, L3]

5.1 The two implications in the case $L > 0$ are the two directions of claim 1, and the remaining two cases give claims 2 and 3. The three assumed regimes are the cases of the disjunction in the Given, and they exhaust it, so every instance of the theorem is covered: outside those three regimes each of the three implications is vacuous, its hypothesis being false. [step 4.1, step 4.2, step 4.3, step 4.4, cases-exhaustive] ∎

## Remarks

- **Why the three regimes are treated as one proof.** The Statement is a conjunction of three implications, each with its own hypothesis on $(q_k)$. Fixing the two sequences and arguing by cases on which regime holds proves all three at once, and costs nothing: if none of the regimes holds, every one of the three implications is vacuously true.

- **Positivity of $(b_k)$ is needed twice.** It is what makes $q_k$ defined at all, and it is what lets an inequality between the $q_k$ be multiplied through to an inequality between the $a_k$ and the $b_k$ without reversing. Positivity of $(a_k)$ is what supplies the lower bound $0$ that the direct comparison test requires.

- **The limit is only used through an eventual two-sided estimate.** No step needs the exact value of $L$, only that $q_k$ is eventually trapped strictly between two positive multiples of it. That is why the test still works when the quotients merely stay between two positive constants, and why the hypothesis $\lim_k q_k = L$ is stronger than what the proof consumes.
````
