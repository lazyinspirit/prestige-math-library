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

## Assigned repair — `rem-strength-order-of-the-nonnegative-tests`

Item path: `items/rem-strength-order-of-the-nonnegative-tests.md`

Normalized final-text SHA-256 at dispatch: `3a3d9005e1cea91a1adb392ca941f123091240226ad18259fe4aa15f9e1aad8a`

Split reasons: ["body text"]

Provenance ledger: `wave7-real-analysis-series.provenance.jsonl`

The four Wave 7 findings ledgers on disk record the original defect and Beta's repair. Locate this id there before certifying.

Read the current target from disk and every dependency needed to check the repair. The generated manifest rows are supplied only as a completeness checklist:

```json
[
  {
    "source": "rem-strength-order-of-the-nonnegative-tests",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "thm-root-test",
    "declared_target": "thm-root-test",
    "target_statement_provenance": "literature-derived",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-strength-order-of-the-nonnegative-tests",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "thm-ratio-test",
    "declared_target": "thm-ratio-test",
    "target_statement_provenance": "literature-derived",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-strength-order-of-the-nonnegative-tests",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "cor-root-test-dominates-ratio-test",
    "declared_target": "cor-root-test-dominates-ratio-test",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-strength-order-of-the-nonnegative-tests",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "cor-ratio-test-is-kummer-with-constant-weights",
    "declared_target": "cor-ratio-test-is-kummer-with-constant-weights",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-strength-order-of-the-nonnegative-tests",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "cor-raabe-test",
    "declared_target": "cor-raabe-test",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-strength-order-of-the-nonnegative-tests",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "thm-gauss-test",
    "declared_target": "thm-gauss-test",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-strength-order-of-the-nonnegative-tests",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "thm-kummer-test",
    "declared_target": "thm-kummer-test",
    "target_statement_provenance": "literature-derived",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-strength-order-of-the-nonnegative-tests",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "thm-abel-dini",
    "declared_target": "thm-abel-dini",
    "target_statement_provenance": "literature-derived",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-strength-order-of-the-nonnegative-tests",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "fs-universal-comparison-series",
    "declared_target": "fs-universal-comparison-series",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-strength-order-of-the-nonnegative-tests",
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
    "source": "rem-strength-order-of-the-nonnegative-tests",
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
    "source": "rem-strength-order-of-the-nonnegative-tests",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "thm-cauchy-condensation",
    "declared_target": "thm-cauchy-condensation",
    "target_statement_provenance": "literature-derived",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-strength-order-of-the-nonnegative-tests",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "thm-p-series-rational",
    "declared_target": "thm-p-series-rational",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-strength-order-of-the-nonnegative-tests",
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
    "source": "rem-strength-order-of-the-nonnegative-tests",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "thm-series-cauchy-criterion",
    "declared_target": "thm-series-cauchy-criterion",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-strength-order-of-the-nonnegative-tests",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
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
    "source": "rem-strength-order-of-the-nonnegative-tests",
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
  }
]
```

For a byte-exact cross-check, the current item at dispatch was:

````markdown
---
id: rem-strength-order-of-the-nonnegative-tests
kind: remark
title: "How the nonnegative tests are ordered by strength, and which of them this page cannot state without the logarithm"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-root-test, thm-ratio-test, cor-root-test-dominates-ratio-test, cor-ratio-test-is-kummer-with-constant-weights, cor-raabe-test, thm-gauss-test, thm-kummer-test, thm-abel-dini, fs-universal-comparison-series, thm-direct-comparison-test, thm-geometric-series, thm-cauchy-condensation, thm-p-series-rational, lem-absolute-convergence-implies-convergence, thm-series-cauchy-criterion, def-rational-power, def-limsup-liminf]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Convergence tests (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Convergence_tests"
    - title: "K. Knopp, Theory and Application of Infinite Series, Ch. IX"
      url: "https://en.wikipedia.org/wiki/Konrad_Knopp"
    - title: "CSUDH notes on the ratio and root tests"
      url: "https://math.csudh.edu/~pong/a3/Notes_01.html"
    - title: "Thomson, Bruckner, and Bruckner, Elementary Real Analysis"
      url: "https://people.math.sc.edu/girardi/m5545/TBB-AllChapters-Landscape.pdf"
    - title: "Binghamton University notes on Kummer, Raabe, and Gauss tests"
      url: "https://people.math.binghamton.edu/dikran/478/Ch5.pdf"
    - title: "Abel-Dini-Pringsheim theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Abel%E2%80%93Dini%E2%80%93Pringsheim_theorem"
pipeline_run: null
---

The tests on this page are not independent criteria of comparable status. Some
of them are strictly stronger than others, in the precise sense that whenever the
weaker one decides a series, the stronger one decides it the same way, and there
are series the stronger one decides and the weaker one does not. This remark
records exactly which comparisons are *proved here*, and, equally importantly,
which are not.

**Everything on this page is a comparison in disguise.** [[thm-direct-comparison-test]]
compares against an arbitrary series; the strength of every later test is the
strength of the particular series it compares against. The root and ratio tests
compare against a geometric series ([[thm-geometric-series]]); Raabe's test
compares against the harmonic series, through the weights $\zeta_k = k+1$ in
[[thm-kummer-test]]; and the borderline branch of [[thm-gauss-test]] compares
against the harmonic series again. [[thm-cauchy-condensation]] is of a different
kind: it does not compare, it reindexes, and that is why it settles the whole
$p$-series family ([[thm-p-series-rational]]) in one step.

**The comparisons proved on this page.**

- *Root over ratio.* [[cor-root-test-dominates-ratio-test]]: whenever the ratio
  test ([[thm-ratio-test]]) decides, the root test ([[thm-root-test]]) decides the
  same way, and there is a series the root test decides and the ratio test does
  not. This is a consequence of the inequality chain
  $\liminf q_k \le \liminf \rho_k \le \limsup \rho_k \le \limsup q_k$, proved on
  the previous page, and of nothing else.
- *Ratio as a case of Kummer.* [[cor-ratio-test-is-kummer-with-constant-weights]]:
  for positive terms, the ratio test is Kummer's test with the constant weights
  $\zeta_k = 1$.
- *Raabe as a case of Kummer.* [[cor-raabe-test]]: Raabe's test is Kummer's test
  with the weights $\zeta_k = k+1$.
- *Gauss over Raabe, inside Gauss's hypothesis.* [[thm-gauss-test]] assumes an
  expansion $a_k/a_{k+1} = 1 + h/k + r_k$ with a summable error. Under that
  hypothesis $R_k = (k+1)(a_k/a_{k+1}-1)$ converges to $h$. When $h \ne 1$,
  Raabe's test already decides, and Gauss's proof says so by invoking it. When
  $h = 1$ Raabe's test cannot decide: $\liminf_k R_k > 1$ would force $R_k$ to
  stay above a fixed number greater than $1$ from some index on, and
  $\limsup_k R_k < 1$ would force it to stay below a fixed number less than $1$,
  and $R_k \to 1$ rules out both. Gauss decides that case, and it is the reason
  the theorem exists.

**Two comparisons that are *not* claimed here.** Raabe's test is not compared
with the root test on this page, in either direction, and nothing above should be
read as ordering them. Nor is Kummer's test claimed to be universal: the choice
of weights is free, and the question of which series some choice of weights
decides is not addressed.

**And one that is refuted.** No comparison test can be final.
[[thm-abel-dini]] turns any divergent series of positive terms into a divergent
series of positive terms with eventually smaller terms, and
[[fs-universal-comparison-series]] draws the conclusion: there is no slowest
divergent series of positive terms, hence no universal comparison test. The
hierarchy above is therefore an initial segment of something with no last term,
not an approach to a best test.

**What this page cannot state, and why.** Every gap below is a missing
*definition*, not a missing proof.

- *The $p$-series at irrational exponents.* [[def-rational-power]] defines $a^{r}$
  for rational $r$ and positive $a$. So $\sum 1/k^{p}$ is a well-formed expression
  here only for rational $p$, and [[thm-p-series-rational]] is the full theorem
  for every exponent this page can name. Real exponents wait for the exponential
  and the logarithm.
- *Bertrand's test.* Its criterion is a condition on
  $\log k \,\big(k(a_k/a_{k+1} - 1) - 1\big)$, and it is the natural next member of
  the Kummer family, with weights $\zeta_k = k \log k$. Both the weights and the
  criterion mention the logarithm, so neither can be written down here.
- *The integral test.* It compares $\sum f(k)$ with $\int f$, and the Riemann
  integral is developed much later in this library. Condensation is the substitute
  used on this page, and for the $p$-series it does the same work.
- *The general form of Gauss's test.* The classical statement assumes
  $r_k=O(k^{-\beta})$ for some real $\beta>1$. The version proved here writes
  $\beta=1+\varepsilon$ with $\varepsilon$ a positive rational. This loses no
  case covered by the classical hypothesis: given $\beta>1$, choose a rational
  $0<\varepsilon<\beta-1$ and weaken the eventual bound. An error of order
  $1/(k\log k)$ is not a Gauss remainder at $h=1$; it is the next Bertrand
  borderline.

**A limitation that has been removed, and one that has not.** The comparison
with a geometric series inside [[thm-root-test]] and [[thm-ratio-test]] delivers
convergence of $\sum |a_k|$ and not, on its own, of $\sum a_k$. That the second
follows from the first is
[[lem-absolute-convergence-implies-convergence]], proved on this page from
[[thm-series-cauchy-criterion]] and the triangle inequality for finite sums, so
both tests do reach their standard conclusion here. What is *not* on this page is
the rest of that theory: the converse fails, and the alternating harmonic series
that witnesses the failure needs the alternating series test, which is not proved
here; rearrangement, the Riemann series theorem and products of series belong
with it on the page that follows. Nothing above asserts a converse or identifies
any sum.
````
