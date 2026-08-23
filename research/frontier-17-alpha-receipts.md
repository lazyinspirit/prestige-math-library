# Whole-level receipts — run `frontier-17`

Lead Alpha, `label: receipts`, `covers: all`. Claude Opus 5, claude runner,
effort `xhigh`, 1M context (`claude-opus-5[1m]`), 2026-08-23.

## Headline

Both receipts are complete and the gate is green with **zero errors**. The 96
warnings are one class only — `judge-verdict-adjudicated-nonfatal` — and are the
gate reporting adjudicated rejections, not defects.

## 1. Spine receipt — `research/frontier-17-spine-audit.json`

The receipt written at 6c had gone stale: `spine-audit --receipt` failed with
`receipt-scope`. **The cause was not a mathematical change.** Compared
entry-by-entry against a freshly generated template:

| checked | result |
|---|---|
| the 58 ids | identical |
| rank order | identical |
| `direct_consumers` | unchanged on all 58 |
| `content_sha256` | byte-identical on all 58 |
| `transitive_consumers` | **uniform +3** on all 58; no entry decreased |
| overlap with this run's `item_scope` | **empty** — no spine item is in scope |

The +3 is the three items step 9 built and nothing else:
`ex-orthogonal-group-is-a-regular-level-set`,
`ex-lagrange-multipliers-with-two-constraints` and
`cor-index-of-a-full-rank-integer-sublattice-is-the-absolute-determinant`. They
sit downstream of the whole foundational spine, so every cone grew by exactly
three consumers while no attested proof's text moved.

I refreshed `top`, `scope` and `scope_sha256` from the template, kept all 58
attestations (status `read`), and recorded the refresh and the checks above in
the receipt's `reviewer` field. `spine-audit --receipt` now passes.

## 2. Audit-coverage receipt — `research/frontier-17-audit-coverage.json`

Generated from the template, then filled:

- `reviewer` — this agent, model and settings, with the same-family independence
  caveat stated explicitly.
- `attestation` — what I actually checked at this stage, and what the receipt
  does **not** claim (it is not a re-audit of the level mathematics).
- `plan_reconciliation` — **78 rows, 78 concrete reasons, 0 blank.**

`manifest_sha256`, `item_scope` (443) and `proof_scope` (384) are the template's
and bind the receipt to the current scope.

### How the 78 reasons were derived

For each drifting item I opened `items/<id>.md` and read its
`## Facts & Assumptions` block together with its Proof / Verification /
Refutation / Definition text. For each **added** dependency I located the fact
label (`[F#]`/`[L#]`/`[A#]`) or `**Given:**` clause that carries it and the
numbered step that cites that label; for each **dropped** dependency I confirmed
its `[[id]]` link occurs nowhere in the body. Each reason names that specific
step or clause. I then re-checked every reason that asserted what the scaffold
had planned against the row's own `planned_deps`, and corrected ten of them
where the assertion was loose or wrong — most substantively
`thm-no-retraction-of-the-closed-disk-onto-the-circle`, where I had written that
the scaffold omitted the input making $\pi_1(D^2)$ trivial when it had in fact
planned `thm-convex-subsets-have-trivial-fundamental-group`; the real drift is
the norm inequality that **verifies that theorem's convexity hypothesis**.

**One dropped dependency is not an omission and is flagged as such.**
`ex-sine-of-xy-and-its-mixed-partials` mentions
`thm-clairaut-schwarz-mixed-partials` once, in a Remark stating that the
mixed-partial equality is computed directly rather than by invoking that
theorem — the item is an *instance* of Clairaut, not an application of it. Every
other dropped dependency has zero body mentions.

### Shape of the drift

The 78 rows are not one phenomenon. They fall into:

- **Author-side additions** (the majority) — a dependency the proof needed and
  the scaffold did not anticipate. Overwhelmingly these are *hypothesis-verifying*
  inputs: the scaffold planned the big theorem and not the fact that checks its
  hypothesis. `thm-no-retraction-of-the-closed-disk-onto-the-circle` (convexity),
  `thm-lagrange-multipliers-for-regular-level-set-constraints` (openness of the
  submersion locus), `thm-graph-of-continuous-function-on-a-compact-set-has-content-zero`
  (boundedness of the image), `thm-burnside-basis-theorem` (elementary-abelianness
  of $P/\Phi(P)$), `ex-quartic-x-four-minus-x-minus-one-has-galois-group-s-four`
  (separability) are all this shape.
- **Route changes** — the written proof takes a different road and both directions
  move together: `ex-sine-product-family-is-not-equicontinuous` (Lipschitz estimate
  instead of the $C^1$/total-differentiability route),
  `thm-finite-galois-extension-characterizations` (separable degree instead of
  splitting-field isomorphism extension), `thm-volume-of-a-solid-of-revolution-by-discs`
  (solid-between-graphs + Cavalieri instead of planar Fubini), and the three Galois
  worked examples, which verify their groups by exhibiting automorphisms rather
  than quoting the cubic/quartic classification theorems.
- **Choice scope written into the Statement** — four Carathéodory-side items gained
  `def-countable-choice` because their Statements now say "Assume the Axiom of
  Countable Choice" out loud.
- **Well-definedness discharged inside a Definition** — three `def-` items
  (`def-galois-group-of-a-separable-polynomial`,
  `def-invariant-factors-and-elementary-divisors-of-an-endomorphism`,
  `def-topology-induced-by-an-ultrafilter-algebra`) cite the existence/uniqueness
  theorems that make the object they name independent of a choice.
- **Scaffold predictions simply not needed** — a general theorem the author
  replaced with a direct computation, e.g.
  `ex-z-squared-modulo-two-diagonal-relations-is-cyclic-of-order-six` doing the
  $2\times2$ Smith form by hand, or `cor-volume-of-a-closed-three-ball` writing a
  primitive instead of splitting an integral.

None of the 78 is a dependency on an `ai-generated` statement and none is a
silent weakening.

## 3. The gate

```
node tools/level-coverage.mjs --contracts research/frontier-17-proof-contracts.json \
  --judge-ledger research/frontier-17-judge.jsonl \
  --judge-adjudications research/frontier-17-judge-adjudications.jsonl \
  --spine-receipt research/frontier-17-spine-audit.json \
  --audit-receipt research/frontier-17-audit-coverage.json \
  --verify-current-context research/frontier-17-batch-*.pages.json
```

**0 errors, 96 warnings, exit 0** — run twice, the second time against the exact
bytes delivered.

All 96 warnings are `judge-verdict-adjudicated-nonfatal`, across **89 distinct
items**: 92 `confirmed_nonfatal` and 4 `false_positive`, with **no
`confirmed_fatal` current**. That matches `research/frontier-17-judge-closure.json`
independently: scope 443, pairs_complete 443, needs_rejudge 0, unadjudicated 0,
open_fatal 0, closed true, lineup `deepseek+opus`.

**Lane split, and it is worth reading.** Of the 96 current rejections, **88 are
DeepSeek and 8 are Opus** — the cross-family lane produced eleven times as many
as the same-family one. Under `deepseek+opus` the Opus lane shares a family with
the authors it screens and with the Alpha adjudicating it, so this asymmetry is
the expected shape, not an anomaly: DeepSeek is doing the independent screening
work in this run. Of the 4 `false_positive` calls, three are DeepSeek
(`cex-a-reflexive-pair-whose-coequalizer-is-not-preserved`,
`cor-surface-area-of-revolution-formula`,
`ex-rational-and-jordan-forms-of-one-matrix-over-q-and-c`) and one is Opus
(`fs-one-existing-iterated-integral-guarantees-multiple-riemann-integrability`).
That last one is the case the standing caveat is about — an Opus rejection this
Alpha dismissed is two same-family reads agreeing — and it is named here so step
10 can weigh it rather than count it.

`node tools/defect-ledger.mjs check --run frontier-17 --adjudications …` is also
clean: 333 rows, 0 errors. Leakage 248/250 with no recurrence flags.

## 4. Honest gaps

- The spine attestations are **carried readings**, not fresh ones: 57 carried
  from frontier-16 at byte-identical hashes and 1 (`lem-inverse-unique`) read in
  full at this run's 6c. That is what the receipt's design licenses — a reading
  is valid until the content hash moves — and I verified the hashes mechanically
  rather than trusting the prior claim. No spine proof was read afresh at this
  stage, because none had changed.
- This stage did not re-audit the level's mathematics. The receipt says so.
- Nothing here flips `status`.
