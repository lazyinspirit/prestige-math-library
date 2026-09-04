# frontier-29 alpha-e 6b

## Scope

Owned batches: `5`, `16`.

Read and rechecked the live Step 6 scope files, reader reports, reader-findings
artifacts, refuter reports, current carriers, cited dependencies, the batch-16
reader-recovery artifact, and the batch-5 reharvest evidence. I worked only in
the dispatched scope plus the one published dependency routed by
`reader:16:1`.

## Risk Review

Completed `risk_review` records for every item currently routed `HIGH` or
`CRITICAL` by `tools/risk-report.mjs`:

- Batch `5`: `10` reviewed items.
- Batch `16`: `19` reviewed items.

The batch-16 localization repairs increased the current risk score of
`thm-derivations-of-smooth-functions-are-smooth-vector-fields` and
`prop-coordinate-formula-for-the-lie-bracket` from sub-threshold to `HIGH`; I
added completed `risk_review` records for both before rerunning
`--require-reviewed`.

## Obligations

### touched:5:cex-heine-borel-fails-in-ell-two

Verdict: `accepted_repair`.

The reader repair stands. The current counterexample now cites the Banach and
infinite-dimensional inputs explicitly and invokes the closed-unit-ball theorem
directly; I rechecked the proof against the cited dependencies and left the
reader carrier unchanged.

Ledger: `frontier-29-D001`.

### touched:5:thm-banach-space-no-countably-infinite-hamel-basis

Verdict: `amended_repair`.

The reader's dense-set repair was directionally correct, but the current theorem
still had a false sequence reformulation and a noncanonical radius choice in the
nested-ball argument. I narrowed the sequence statement to pairwise distinct
enumerators and made the ball radii canonical natural-number choices.

Ledger: `frontier-29-D002`.

### touched:5:thm-kuratowski-wojdyslawski-embedding

Verdict: `amended_repair`.

The reader fixed the stale internal step citation, but the current metrizable
corollary still omitted the empty-space case. I added the trivial `X=varnothing`
branch before invoking the based Kuratowski construction.

Ledger: `frontier-29-D003`.

### refuter:5:1

Verdict: `confirmed_nonfatal`.

The refuter was right: step `1.1` formed a sequence from separate existential
choices. I replaced that with the direct open-complement argument showing
`dist(y,M)>0`, leaving the statement unchanged.

Ledger: `frontier-29-D004`.

### refuter:5:2

Verdict: `confirmed_fatal`.

The refuter was right that the Hamel-basis construction of a discontinuous
functional needs infinite dimension. I narrowed both the title and the remark
text to infinite-dimensional Banach spaces.

Ledger: `frontier-29-D005`.

### refuter:5:3

Verdict: `confirmed_fatal`.

The refuter was right that the old equivalence allowed constant sequences with
finite image. I narrowed the sequence reformulation to pairwise distinct basis
enumerators.

Ledger: `frontier-29-D006`.

### refuter:5:4

Verdict: `confirmed_fatal`.

The refuter was right that the old nested-ball proof still chose radii
noncanonically. I replaced those real-valued choices by least natural-number
radii and retained the choice-strength claim only for that canonical proof.

Ledger: `frontier-29-D007`.

### refuter:5:5

Verdict: `confirmed_nonfatal`.

The refuter was right that the final corollary step applied the based theorem to
possibly empty metrizable spaces. I split off the empty case explicitly and kept
the original bounded nonempty metric-space argument for the nonempty branch.

Ledger: `frontier-29-D008`.

### touched:16:def-pushforward-and-pullback-of-a-vector-field-by-a-diffeomorphism

Verdict: `accepted_repair`.

The reader correctly added the missing `AC_omega` hypothesis, so the definition
no longer relies on unstated tangent-bundle smooth structures. I rechecked the
current text against the repaired published differential theorem and left the
carrier unchanged.

Ledger: `frontier-29-D010`.

### touched:16:def-smooth-vector-field-as-a-tangent-bundle-section

Verdict: `accepted_repair`.

The reader correctly added the missing `AC_omega` hypothesis for the tangent
bundle smooth structure. The current definition now matches the published
tangent-bundle theorem and needs no Alpha amendment.

Ledger: `frontier-29-D009`.

### touched:16:def-time-dependent-vector-field-and-evolution-operator

Verdict: `accepted_repair`.

The reader correctly added the missing `AC_omega` hypothesis and made the
ambient manifold and interval explicit in the definition. I rechecked the
definition against its current dependencies and left the carrier unchanged.

Ledger: `frontier-29-D011`.

### touched:16:thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval

Verdict: `amended_repair`.

The reader fixed the first endpoint-compactness mistake, but the current proof
still tried to patch from a limit point `q` at time `b` instead of from nearby
sampled states. I amended step `2.1` to extend from large `t_n` inside a local
evolution neighborhood around `q`.

Ledger: `frontier-29-D013`.

### touched:16:thm-compactly-supported-vector-fields-are-complete

Verdict: `amended_repair`.

The reader's compact-subsequence versus eventual-constancy dichotomy is sound.
However, the final touched carrier now also includes the batch-16 contract
`risk_review` written in this dispatch, so the sealed carrier differs from the
reader post-state and the routed verdict is an amendment.

Ledger: `frontier-29-D012`.

### reader:16:1

Verdict: `confirmed_fatal`.

The reader was right: the published theorem
`thm-the-global-differential-of-a-smooth-map-is-smooth` dropped the
`AC_omega` hypothesis required by its tangent-bundle source theorem. I claimed
the published item through `tools/published-repairs.mjs`, narrowed its
title/statement/fact line to `AC_omega`, and removed the obsolete
`verification.audited` stamp.

Ledger: `frontier-29-D014`.

### refuter:16:1

Verdict: `confirmed_fatal`.

The refuter was right that the old false-statement refutation used a false
support argument. I replaced it with the explicit counterexample
`X=Y=d/dx`, `f(x)=x` on `R`.

Ledger: `frontier-29-D015`.

### refuter:16:2

Verdict: `confirmed_nonfatal`.

The refuter was right that the proof illegally applied a global commutator to
chart-local coordinate functions. I added a bump-supported global extension
argument and recomputed the coefficients pointwise.

Ledger: `frontier-29-D016`.

### refuter:16:3

Verdict: `confirmed_nonfatal`.

The refuter was right that equality on global smooth functions had to be
localized to target germs. I inserted the bump-function localization and proved
equality on every germ at `F(p)`.

Ledger: `frontier-29-D017`.

### refuter:16:4

Verdict: `confirmed_fatal`.

The refuter was right that a subsequential limit `q` at time `b` does not by
itself patch to the original trajectory. I repaired the argument by extending
from large sampled states inside a local evolution neighborhood around `q`.

Ledger: `frontier-29-D018`.

### refuter:16:5

Verdict: `confirmed_nonfatal`.

The refuter was right that `D(f)(p)` had to descend from global functions to
germs before the tangent-space derivation theorem applies. I added the
bump-function localization and rebuilt the smooth local coefficients from global
extensions.

Ledger: `frontier-29-D019`.

### refuter:16:6

Verdict: `confirmed_fatal`.

The refuter was right that the old overlap shrinkage did not construct a
globally injective neighborhood. I replaced it with Lee's variable-radius
`delta(q)` argument using local defining functions and a partition of unity.

Ledger: `frontier-29-D020`.

### refuter:16:7

Verdict: `confirmed_fatal`.

The refuter was right that the old openness proof assumed `Phi(t_0,p)` already
existed for nearby `p`. I rewrote the theorem along the standard local-extension
argument, using translated maximal curves and the local ODE theorem to open
`D`.

Ledger: `frontier-29-D021`.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts ...changed items...`
  Result: all changed items are in canonical single-line proof form; only the
  published differential theorem reflowed after the claim/repair cycle.
- `node tools/tsx-run.mjs tools/precheck.mts ...changed proof-bearing items...`
  Result: every changed proof-bearing item now passes; the final focused pass was
  clean.
- `node tools/regen-contract-entries.mjs research/frontier-29-batch-5.proof-contracts.json ...`
  Result: refreshed the changed batch-5 proof entries plus the stale
  `cex-polynomial-space-admits-no-complete-norm` consumer quote after the Banach
  theorem statement was narrowed.
- `node tools/regen-contract-entries.mjs research/frontier-29-batch-16.proof-contracts.json ...`
  Result: refreshed all changed batch-16 proof entries.
- `node tools/proof-contract.mjs research/frontier-29-batch-5.proof-contracts.json --strict`
  Result: clean after removing the dead `lem-riesz-lemma` fact row and
  regenerating the entry.
- `node tools/proof-contract.mjs research/frontier-29-batch-16.proof-contracts.json --strict`
  Result: clean.
- `node tools/risk-report.mjs research/frontier-29-batch-5.proof-contracts.json --require-reviewed`
  Result: clean.
- `node tools/risk-report.mjs research/frontier-29-batch-16.proof-contracts.json --require-reviewed`
  Result: clean after adding the two newly-high localization items.
- `node tools/published-repairs.mjs claim --run frontier-29 --id thm-the-global-differential-of-a-smooth-map-is-smooth --group e`
  Result: claim recorded against the pre-repair hash from the routed reader
  finding.

## Blockers

None.

## Gate repair - `step6-routing-adjudicate` (Tuesday, September 1, 2026)

- Reproduced the live gate and confirmed 3 stale touched decisions in batch `16`.
- Reread the current `AC_omega`-scoped vector-field definitions against `research/frontier-29-reader-16.md`; the repaired differential-geometric typing still stands on current disk.
- Retagged the 3 touched decisions from `accepted_repair` to `amended_repair` and appended the 3 matching supplemental gate rows via `research/frontier-29-alpha-e-6b-gate-ledger-rows.json`.
- Shared rerun: `node tools/step6-scope.mjs check --run frontier-29 --phase adjudicate` now returns `step6-scope: 755 item(s) routed, 291 adjudication obligation(s), 0 error(s)`.
