# Frontier-21 Alpha-c 6b Adjudication

Run: `frontier-21`  
Group: `c`  
Dispatch: `6b-c`  
Date: Thursday, August 27, 2026

## Scope

Owned batches: `4`, `7`, `8`.

I reopened and verified against current disk:

- `research/frontier-21-step6-scope-{4,7,8}.json`
- reader reports and findings for batches `4`, `7`, and `8`, including the
  batch-8 routing correction at `research/frontier-21-reader-findings-8.json`
- refuter reports `research/frontier-21-refute-{4,7,8}.json`
- current item, page, manifest, and contract carriers for all routed
  obligations
- the live batch-8 authoring / recovery evidence in
  `research/frontier-21-dispatch/beta-author-batch-8.result.json`,
  `beta-author-recover-8.result.json`, and
  `reader-reader-recover-8.attempt-1.result.json`
- the cited linear-algebra, measure-theory, complex-analysis, and published
  dependency sources needed to check the repaired claims and hypotheses

## Dispositions

Batch `4`:

- Confirmed the refuter's fatal Choice-scope finding on
  `thm-additive-jordan-chevalley-decomposition`; the current theorem now states
  the Axiom of Choice exactly where the descent proof uses it.
- Accepted the reader's batch-4 title, render, and zero-case repairs on the
  spectral / singular-value carriers.
- Amended the current carriers for the high-risk spectral items whose proof
  contracts now also include completed `risk_review` rows.

Batch `7`:

- Confirmed both refuter findings as fatal Choice-scope defects and narrowed the
  current counterexamples to the Countable Choice versions actually licensed by
  their cited comparison theorems.
- Confirmed all six published-dependency reader findings as nonfatal. I repaired
  the current published items by rewriting the explanatory statement/frontmatter
  prose instead of adding new dependency edges, removed stale published
  judge/audit stamps, installed `verification.verified`, and appended the six
  Step-6 published-repair handoff rows.
- Amended the current high-risk batch-7 carriers where Alpha later added
  `risk_review` rows, while keeping the accepted reader repairs in place.

Batch `8`:

- Confirmed the four routed refuter findings as fatal.
- `thm-holomorphic-inverse-contour-formula` now requires `n(\Gamma,a)=1`.
- `thm-holomorphic-pullback-of-plurisubharmonic-functions` is narrowed to the
  direct `C^2` pullback case supported on current disk.
- `thm-upper-envelope-theorem-for-plurisubharmonic-functions` now assumes the
  ambient supremum is upper semicontinuous.
- `thm-levi-and-hartogs-pseudoconvexity-for-c-two-domains` is narrowed to the
  Hartogs-implies-Levi direction.
- `thm-stability-operations-for-plurisubharmonic-functions` was additionally
  amended in 6b so part `3` now ranges over real-valued plurisubharmonic inputs
  and real convex nondecreasing scalar maps.
- `ex-the-inverse-contour-formula-recovers-a-local-inverse-value`,
  `lem-cauchy-estimates-propagate-to-holomorphic-hulls`, and the A-page summary
  `domains-of-holomorphy-and-pseudoconvexity` received further in-scope Alpha
  repairs on current bytes.

## Risk Review Coverage

Completed `risk_review: {status: complete, reviewer: alpha-6b-c, notes: ...}`
for every `HIGH` or `CRITICAL` item reported by:

- `node tools/risk-report.mjs research/frontier-21-batch-4.proof-contracts.json --json`
- `node tools/risk-report.mjs research/frontier-21-batch-7.proof-contracts.json --json`
- `node tools/risk-report.mjs research/frontier-21-batch-8.proof-contracts.json --json`

The post-review reruns with `--require-reviewed` are green for all three owned
batches on the current Thursday, August 27, 2026 state.

## Append-Only Outputs

Wrote:

- `research/frontier-21-alpha-c-6b-decisions.json`
  - `105` routed obligations, all stamped with current `subject_sha256`
- `research/frontier-21-alpha-c-6b-ledger-rows.json`
  - `105` closed Step-6 defect rows, appended to `research/defect-ledger.jsonl`
- `research/frontier-21-alpha-c-6b-published-repairs.json`
  - `6` Step-6 published-repair handoff rows, appended to
    `research/frontier-21-step8-published-repairs.jsonl`

## Checks

Focused proof / carrier checks on changed items:

- `node tools/tsx-run.mjs tools/reflow.mts ...`
- `node tools/tsx-run.mjs tools/precheck.mts ...`
- `node tools/rendercheck.mjs ...`

Owned-batch contract and routing checks:

- `node tools/proof-contract.mjs research/frontier-21-batch-{4,7,8}.proof-contracts.json --strict`
  - pass
- `node tools/citation-fidelity.mjs research/frontier-21-batch-{4,7,8}.proof-contracts.json --fail-on-missing-quote`
  - pass
- `node tools/risk-report.mjs research/frontier-21-batch-{4,7,8}.proof-contracts.json --require-reviewed --json`
  - pass
- `node tools/step6-scope.mjs stamp --run frontier-21 --group c`
  - stamped `105` current carrier hashes
- `node tools/step6-scope.mjs check --run frontier-21 --phase adjudicate --batch 4`
  - `0` errors
- `node tools/step6-scope.mjs check --run frontier-21 --phase adjudicate --batch 7`
  - `0` errors
- `node tools/step6-scope.mjs check --run frontier-21 --phase adjudicate --batch 8`
  - `0` errors
- `node tools/defect-ledger.mjs append --file research/frontier-21-alpha-c-6b-ledger-rows.json`
  - appended and re-rendered successfully
- `node tools/depcheck.mjs --quiet`
  - green on the current tree; only standing repo-wide warnings remain
- `node tools/content-policy.mjs research/frontier-21-batch-8.pages.json`
  - `0` errors, `0` warnings

Boundary audit note:

- `node tools/boundary-audit.mjs research/frontier-21-batch-8.proof-contracts.json --fail-on-contradicted --fail-on-template`
  - no contradicted dispositions remain
  - still reports standing template-reuse clusters and exits nonzero on that
    mechanical detector alone; I did not invent defect rows for that
    non-mathematical output

## Blocker

No mathematical blocker remains inside the owned 6b scope.

## Gate repair - `step6-routing-adjudicate` (Thursday, August 27, 2026)

- Reproduced the live `decision-not-applied` queue for the batch-8 portion of group `c` on the current tree and confirmed that each routed touched obligation below no longer equals the exact post-reader carrier sealed in `research/frontier-21-step6-hash-8-post.json`.
- The original 6b touched-decision evidence remains the mathematical closure record for the repaired batch-8 items. The supersession below updates only the carrier-state verdict after later batch-8 contract and page-manifest writes changed the live carriers while the repaired item bytes remained in place.
- Retagged these batch-8 touched obligations from `accepted_repair` to `amended_repair` and appended matching supplemental gate rows `frontier-21-S6-c-gate-8-1` through `frontier-21-S6-c-gate-8-26`:
  `touched:8:cex-a-domain-of-holomorphy-need-not-be-convex`, `touched:8:cex-e-to-one-over-z-shows-essential-singularities-break-the-argument-principle`, `touched:8:cex-the-bidisc-minus-the-origin-is-not-holomorphically-convex`, `touched:8:cex-weak-boundary-inequality-does-not-suffice-for-rouche`, `touched:8:cex-z-over-n-shows-why-hurwitz-needs-the-or-constant-clause`, `touched:8:cor-convex-domains-are-domains-of-holomorphy`, `touched:8:cor-local-zero-count-via-rouche`, `touched:8:cor-log-modulus-of-a-holomorphic-function-is-plurisubharmonic`, `touched:8:ex-a-convex-domain-is-a-domain-of-holomorphy`, `touched:8:ex-a-cubic-image-curve-has-winding-number-three-about-the-origin`, `touched:8:ex-e-to-z-minus-three-z-has-one-zero-in-the-unit-disc`, `touched:8:ex-hurwitz-preserves-a-simple-zero-under-local-uniform-convergence`, `touched:8:ex-the-holomorphic-hull-of-a-circle-in-c-is-the-filled-disc`, `touched:8:ex-z-five-plus-three-z-plus-one-has-four-zeros-in-the-annulus-one-to-two`, `touched:8:ex-z-five-plus-three-z-plus-one-has-one-zero-in-the-unit-disc`, `touched:8:fs-a-locally-uniform-limit-of-injective-holomorphic-functions-is-injective`, `touched:8:fs-every-domain-in-c-n-is-a-domain-of-holomorphy`, `touched:8:fs-the-argument-principle-counts-zeros-without-multiplicity`, `touched:8:fs-the-union-of-two-domains-of-holomorphy-is-a-domain-of-holomorphy`, `touched:8:lem-affine-line-independence-in-the-definition-of-plurisubharmonicity`, `touched:8:lem-basic-properties-of-the-holomorphic-hull`, `touched:8:lem-levi-pseudoconvexity-is-independent-of-defining-function`, `touched:8:thm-continuity-of-zeros-locally-uniform-convergence`, `touched:8:thm-decreasing-limits-of-plurisubharmonic-functions`, `touched:8:thm-domains-of-holomorphy-are-hartogs-pseudoconvex`, `touched:8:thm-maximum-principle-for-plurisubharmonic-functions`.
- These 26 gate rows record stale adjudication-state drift only. No new mathematical defect was found in the current batch-8 items.
