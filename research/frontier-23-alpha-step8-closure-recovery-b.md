# frontier-23 group b — Step-8 closure recovery, round 1

## Outcome

Handled all 11 current unadjudicated rejection tuples owned by group b: eight
were confirmed fatal and repaired, and three were confirmed nonfatal and closed
without edits. The eight repaired items are the group-b rejudge targets. No
false-positive outcome, incoming alert, outgoing cross-group alert, published
repair, terminal resolution, judge verdict, or judge stamp was written.

All 11 outcomes were appended to
`research/frontier-23-judge-adjudications.jsonl` with their exact context and
pre-edit guard hash. Eight matching defect rows were appended through
`tools/defect-ledger.mjs`, which refreshed the generated defect-ledger view.

## Exact dispositions

| item | context | outcome | disposition |
|---|---|---|---|
| `def-c-r-and-smooth-maps-between-smooth-manifolds` | `2c65ec6e0e9484742066798b4446a4ffd963b4291381d9974e54bcd7ae3964c3` | `confirmed_fatal` | Defined componentwise Euclidean $C^r$ maps for both source and target dimensions in $\mathbb N_0$, including the zero-dimensional source case. Defect `frontier-23-b-step8-r1-001`. |
| `def-forward-and-backward-stability-for-a-problem-family` | `ac31ab1e249101f6eef6b280e62bfae98579e034fa7a641b2364b8ff96bced60` | `confirmed_fatal` | Quantified the dimension $n\ge1$ and rational norm parameter $p\ge1$ before the linear-system specialization. Defect `frontier-23-b-step8-r1-002`. |
| `def-manifold-chart-coordinate-domain-and-coordinate-functions` | `f872d34c974bd87f6e0bb01e53bcfba43095765d91702cfb9c207aabd759d7fb` | `confirmed_fatal` | Replaced one-based coordinate indices by the library's zero-based indices $i<n$ and tuple $(x^0,\ldots,x^{n-1})$. Defect `frontier-23-b-step8-r1-003`. |
| `def-numerical-rank-relative-to-a-norm-scale-and-tolerance` | `01ba8f3aff8edc0da44d990a76e5418e5a295b9d80afef0747606eb60c68e173` | `confirmed_fatal` | Corrected the false exact-rank agreement remark: in spectral norm, a nonzero matrix agrees with exact rank precisely below its smallest nonzero singular value; the zero matrix is separate. Defect `frontier-23-b-step8-r1-004`. |
| `def-smoothly-compatible-charts` | `3bc9767458b54c3394a2882bd7a2e22575168b4fcc810588ed2b3c304cb1b091` | `confirmed_fatal` | Replaced one-based component indices by $l<q$. Defect `frontier-23-b-step8-r1-005`. |
| `def-standard-relative-floating-point-model-and-unit-roundoff` | `491cc7fe4bfcdffa35325b81770768e61cbdf3a299ca2969c877e2544005282e` | `confirmed_fatal` | Required $N_{\min}\le N_{\max}$ so the declared normal range cannot be empty. Defect `frontier-23-b-step8-r1-006`. |
| `ex-a-backward-stable-solution-of-an-ill-conditioned-system` | `afb7b0bea7abdef0dbd8869543ae3ec47dcd622d9a10e5aea320fa9bcb0230ec` | `confirmed_fatal` | Restated the local-conditioning theorem with its first-order scope and proved the exact equality for the fixed linear map directly. Defect `frontier-23-b-step8-r1-007`. |
| `ex-catastrophic-cancellation-and-a-stable-reformulation` | `5d77c38bb63cf89d16c8024578a2ce548f0c45e551c31372e430f8ed00b95ab2` | `confirmed_nonfatal` | The concrete binary64 operations satisfy the omitted normal-range checks; this is an immediately closable hypothesis verification. No edit. |
| `ex-normal-equations-versus-qr-conditioning` | `afe73a15349f268e072fe12ebb1d670ae26c7c19eb31bf19ca17314288f3e0a7` | `confirmed_fatal` | Replaced the false “nearly dependent” description by “badly scaled” in the title, opening, and conclusion. Defect `frontier-23-b-step8-r1-008`. |
| `fs-complexification-doubles-finite-dimension` | `211f57c398f5e76ee9d5b9b85f1b2082d901c4f92ee09fa9b56b839ee88965e6` | `confirmed_nonfatal` | The uncited realification sentence is true, ancillary to the refutation, and immediately supplied by the preceding page. No edit. |
| `prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds` | `b4baba6c3bce68565a955810dab66e287174d8b0339a4e962f294a9a8914bb23` | `confirmed_nonfatal` | Coverage is established in the next step; combining the two adjacent steps closes the local proof-order gap immediately. No edit. |

## Rejudge targets

1. `def-c-r-and-smooth-maps-between-smooth-manifolds`
2. `def-forward-and-backward-stability-for-a-problem-family`
3. `def-manifold-chart-coordinate-domain-and-coordinate-functions`
4. `def-numerical-rank-relative-to-a-norm-scale-and-tolerance`
5. `def-smoothly-compatible-charts`
6. `def-standard-relative-floating-point-model-and-unit-roundoff`
7. `ex-a-backward-stable-solution-of-an-ill-conditioned-system`
8. `ex-normal-equations-versus-qr-conditioning`

The engine owns the next permitted targeted rejudge cycle. None was initiated
by this dispatch.

## Documentary updates

The content repairs made current proof-contract quotes and derivations stale.
The repository regeneration tool refreshed exactly five entries in
`research/frontier-23-batch-5.proof-contracts.json` and twenty-one entries in
`research/frontier-23-batch-9.proof-contracts.json`. Batch 2 needed no contract
change. Boundary rows and complete risk reviews were preserved.

## Checks

- Exact evidence join: 11 current tuples, 11 unique outcomes, eight confirmed
  fatal and three confirmed nonfatal.
- Repair boundary: all eight fatal items changed from their pre-edit guard
  hashes; none of the three nonfatal items changed.
- Focused precheck: both repaired proof-bearing examples passed.
- Focused rendercheck: all eight repaired files passed YAML, delimiter,
  wikilink-in-math, multiline-display, and KaTeX checks.
- Strict proof-contract and required risk-review checks passed independently
  for batches 2, 5, and 9 with zero errors or warnings.
- Citation fidelity checked 426 citations over the 140 group-b proof items;
  every quote occurs in its source and no widening candidate was found.
- Dependency validation exited successfully with the repository's existing
  warnings.
- Step-8 guard passed: all 75 whole-run changes since `pre-step8` are licensed.
- Step-8 scope check passed with 504 items partitioned, zero open rejections,
  and zero cross-group alerts.
- Pending-rejudge closure check passed: zero unadjudicated rows and zero open
  fatal rows; 18 whole-run items need rejudge, including the eight targets above.
- Defect-ledger shape validation checked 343 frontier-23 rows with zero errors;
  all eight group-b fatal tuples have unique matching rows.

## Alerts

None.

## Blockers

No group-b blocker remains. Two level-wide checks still expose other-group
residue: repository-wide rendercheck fails on a multiline display in
`def-polar-surface-measure-on-the-unit-sphere`, and defect-ledger reconciliation
is missing five group-c rows. Those files and records are outside group-b
ownership and were not changed.
