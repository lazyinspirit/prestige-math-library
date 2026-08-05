# Wave 5, A8 round 3 — five adjudications and the coverage receipt

Nearly closed. 102 adjudications recorded, paired coverage 205/209, drift down
91 → 31 → 4. Two jobs remain.

## 1. Five rejections need an exact-hash adjudication

| model | item |
|---|---|
| `deepseek-v4-pro` | `cex-cauchy-rationals-no-rational-limit` |
| both lanes | `cex-unbounded-with-convergent-subsequence` |
| `deepseek-v4-pro` | `cor-monotone-converges-iff-bounded` |
| `deepseek-v4-pro` | `def-interval` |
| `deepseek-v4-pro` | `lem-geometric-sequence-null` |

Three deserve specific attention:

**`cor-monotone-converges-iff-bounded` is now TWICE-TOUCHED.** Both lanes called it
fatal, you repaired it, and DeepSeek rejects the repaired text again — but on a
DIFFERENT ground: `[L5]` claims `|t| ≤ M ⟺ −M ≤ t ≤ M` citing `lem-of-abs-value`,
which states only the strict version. Sonnet now passes it. A second, disjoint
defect is convergence rather than thrashing, and the escalation is advisory, not
blocking. But say explicitly in your report whether this item is converging or
whether its fact list needs rewriting as a unit — and if a third distinct defect
appears after this repair, that is the signal to stop repairing and reconsider
the statement.

**`def-interval` looks like a genuine self-contradiction.** DeepSeek reports that
defining closed intervals as those where "both written endpoints are included"
contradicts the item's own listed form `[a,∞)`, whose parenthesis excludes the
endpoint. If that is right it is the same class as wave 4's `def-cofinality`: a
page asserting something its own neighbouring text falsifies. `def-interval` is
also the most-cited item in this wave — 25 of wave 5's 28 cross-batch edges point
at it — so a repair here re-freezes a large cone. Make the smallest correct one.

**`lem-geometric-sequence-null`**: steps 3.5/3.6 cite `[L9]`
(`prop-of-multiply-inequalities`) to multiply a single inequality by a positive
number, but that proposition covers multiplying two inequalities under
nonnegativity. Open the cited target before deciding.

A8 is fatal-only. Report exactly which items you touch so I can rejudge precisely.

## 2. The coverage receipt needs your attestation

`research/audit/wave5-coverage.json` is a generated template and the gate refuses
it as-is:

- `audit-receipt-reviewer` — it needs a reviewer.
- `audit-receipt-attestation` — it needs a concrete attestation, not a placeholder.
- `audit-receipt-plan-reconciliation-reason` — three items need a concrete drift
  reason: `cor-components-of-open-subsets-of-rn-are-polygonally-connected`,
  `lem-radial-normalisation-is-continuous`,
  `thm-radial-straight-line-map-on-punctured-rn`. Each drifted from its planned
  `deps` during this wave; say what actually changed and why, from the ledgers.

Write what is true. This receipt is the wave's coverage claim of record, and an
attestation that overstates is worse than one that records a limit — in
particular, if you note anything about judge coverage, note that the Sonnet lane
refused 207 calls at concurrency 16 and its verdicts were recovered by a replay
at concurrency 4.

Append "A8 round 3" to `research/audit/wave5-alpha.md`.
