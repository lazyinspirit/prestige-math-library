# Independent repair certifier brief — Wave 8, step A6

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

For a repaired page, read its complete current text and the current items it
summarizes, then check the repaired mathematical assertion and page/item
consistency. Pages do not carry item verification blocks.

Return exactly:

```text
ITEM: <id-or-page-path>
VERDICT: CERTIFIED | REFUSED | BLOCKED
CURRENT-TEXT: READ
MATHEMATICS: [concise evidence]
CITATIONS: [concise evidence]
METADATA: [provenance/dependencies/stale-verdict disposition, or n/a for a page]
FINDINGS: NONE | [fatal defect or concrete blocker]
```

Do not suggest optional polishing and do not write a verification stamp. Audit-
Alpha decides whether the independent reading licenses one.


---

# This dispatch

## Assigned repair — `rem-sums-proved-to-exist-but-not-evaluated`

Item path: `items/rem-sums-proved-to-exist-but-not-evaluated.md`

Normalized final-text SHA-256 at dispatch: `e79aab1c86156b5dffc6e92126e4026cc1585d88c2f76e7283b346235698da14`

Split reasons: ["body text"]

Provenance ledger: `wave8-real-analysis-absolute-convergence.provenance.jsonl`

The three Wave 8 findings ledgers and wave8-A3.md record the original defect and approved repair. Locate this id there before certifying.

Read the current target from disk and every dependency needed to check the repair. The generated manifest rows are supplied only as a completeness checklist:

```json
[
  {
    "source": "rem-sums-proved-to-exist-but-not-evaluated",
    "sourcePage": "absolute-convergence-and-rearrangement",
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
    "source": "rem-sums-proved-to-exist-but-not-evaluated",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "thm-infinite-product-criterion",
    "declared_target": "thm-infinite-product-criterion",
    "target_statement_provenance": "ai-altered",
    "targetPage": "absolute-convergence-and-rearrangement",
    "targetBatch": "wave8-real-analysis-absolute-convergence",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-sums-proved-to-exist-but-not-evaluated",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "thm-decimal-expansions",
    "declared_target": "thm-decimal-expansions",
    "target_statement_provenance": "literature-derived",
    "targetPage": "absolute-convergence-and-rearrangement",
    "targetBatch": "wave8-real-analysis-absolute-convergence",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-sums-proved-to-exist-but-not-evaluated",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "thm-riemann-series-theorem",
    "declared_target": "thm-riemann-series-theorem",
    "target_statement_provenance": "ai-altered",
    "targetPage": "absolute-convergence-and-rearrangement",
    "targetBatch": "wave8-real-analysis-absolute-convergence",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-sums-proved-to-exist-but-not-evaluated",
    "sourcePage": "absolute-convergence-and-rearrangement",
    "batch": "wave8-real-analysis-absolute-convergence",
    "target": "rem-rearrangement-in-higher-dimensions",
    "declared_target": "rem-rearrangement-in-higher-dimensions",
    "target_statement_provenance": "ai-altered",
    "targetPage": "absolute-convergence-and-rearrangement",
    "targetBatch": "wave8-real-analysis-absolute-convergence",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-sums-proved-to-exist-but-not-evaluated",
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
  }
]
```

For a byte-exact cross-check, the current item at dispatch was:

````markdown
---
id: rem-sums-proved-to-exist-but-not-evaluated
kind: remark
title: "Which sums and products on this page are proved to exist without being evaluated, and what the evaluation waits for"
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
this page that gap is systematic, and this remark says exactly where it falls and
what would close it. **Every scope statement below is relative to the reading
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

**What is not on this list.** Every other convergence claim on this page either
identifies its sum outright (on the companion examples page, the geometric
rearrangement of $\sum(-1/2)^k$, the Cauchy product of $\sum r^k$ with itself,
and the telescoping product of $\prod(1 - 1/(j+2))$), or is a statement of the form
"this converges to the same value as that", where both sides are named by the same
unevaluated limit. [[thm-dirichlet-rearrangement]], [[thm-mertens]],
[[cor-cauchy-product-absolute]], [[thm-grouping-of-series]] and
[[thm-double-series-fubini]] are all of the second kind: they identify sums with
one another and evaluate nothing, which is exactly what makes them usable wherever
the sums themselves are unknown.
````
