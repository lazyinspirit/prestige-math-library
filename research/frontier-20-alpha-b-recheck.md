# frontier-20 — Alpha group `b` — Step 3 recheck

Group `b` covers batches `3` and `9`. I re-read
`research/frontier-20-alpha-b-step3-scaffold-review.md`, the `## Step-3 fix pass`
sections in `research/frontier-20-batch-3.notes.md` and
`research/frontier-20-batch-9.notes.md`, the current
`research/frontier-20-batch-{3,9}.pages.json` manifests, the current
`research/frontier-20-batch-{3,9}.coverage.json` ledgers, the live group-`b`
scope ledger, and the governing complex-analysis entries in
`research/plan-spec.json` and `research/plan-complex-analysis-track.md`. The
dispositions below are from the current bytes, not from the earlier scaffold-review
prose.

- `B3-1` — confirmed repaired. In
  `research/frontier-20-batch-3.pages.json`, CA-14 now carries the explicit
  bridge stack
  `lem-local-subharmonic-peak-function-globalizes`,
  `lem-weak-local-subharmonic-peak-function-implies-regularity`, and
  `lem-boundary-point-whose-complementary-component-contains-another-point-is-regular`,
  and `cor-simply-connected-proper-plane-domains-are-regular` now depends on
  that sourced complementary-component lemma rather than on an unstated
  singleton-boundary-component reduction. In
  `research/frontier-20-batch-3.coverage.json`, the current fetch-verified Boas
  locator now covers the Chapter 2 planar simple-connectivity convention plus
  Chapter 7 §§7.6.3, 7.6.4, and 7.7, and Khoruzhenko Theorem 52 remains an
  independent endpoint check. The live CA-14 design now explicitly accepts this
  route: it keeps `thm-nonsingleton-boundary-component-is-regular` as its own
  result but states that the simply-connected corollary uses the sourced
  complementary-component bridge instead. The original Step-3 blocker is closed
  on current bytes.

- `34382fb52ae7fc2e251ab944eb3a3bd2323d98d3e44d4295a468d0f59e29df76` —
  confirmed. The deferred Ahlfors `5.2 The Argument Principle` row still lands
  on the next exact page: `research/plan-spec.json` keeps
  `the-argument-principle-and-rouche` immediately after `the-residue-theorem`
  with direct `requires: ["the-residue-theorem"]`, so the standing `stands`
  decision remains exact.

- `7e663a522c4a6db094233f128608220080a154de292a798515d69ed623d90397` —
  confirmed. Axler `Corollary 11.13` is still only the smooth-boundary
  solvability corollary of the barrier criteria already retained on CA-14, and
  no downstream page in this group needs a separate `C^2`-boundary theorem
  item. The `stands` decision remains exact.

- `a2a421e9ed3307fe2e843e7fe3daccc7ab95104fd0faefb6b5500ae55c0b3c1f` —
  confirmed owner decision. Harmonic measure still has no exact destination page
  in `research/plan-spec.json`, so the deferment remains an honest
  `owner-decision`.

- `ad5525ee863dfbd6a2f1d8a03447b767e0915c98a8acdb87c0ac49a2d5e895d3` —
  confirmed owner decision. Khoruzhenko `Theorem 54` still belongs to that same
  unplanned harmonic-measure branch, so the current `owner-decision` routing
  remains exact.

- `b30d6e4356e2abaceff033d72a068c72753f4e04cfe4f4bfe20d92461429e7cb` —
  confirmed owner decision. Khoruzhenko `Theorem 56` is still conformal
  invariance of harmonic measure, not the CA-14 solution-transport theorem, and
  the live machine plan still names no exact destination page for that branch.

- `b57d6f781d01535e2cfb120305b01aece9a89bd2afd775a9c50a227eaee4ae3e` —
  confirmed. Axler `Corollary 11.12` is still only the convex-domain
  solvability corollary of the explicit exterior-disc/exterior-cone regularity
  criteria already kept on CA-14, so the `stands` decision remains exact.

- `the-residue-theorem` — confirmed. Batch `9` still records no numbered
  finding id in its Step-3 fix pass, and the current `research/frontier-20-batch-9.pages.json`
  still carries the same 22-item CA-9 A page with its 11-item companion. The
  coverage and manifest checks remain clean, so the earlier `sufficient`
  verdict stays correct on current bytes.

- `the-hartogs-phenomena` — confirmed. The current SC-2 manifest still keeps the
  no-continuity separate-holomorphy route, the coordinate-hyperplane extension
  theorem, and the Hartogs-figure propagation/gluing route for compact holes.
  The page remains sufficient on current bytes.

## Pair verdicts

- `subharmonic-functions-and-the-dirichlet-problem` — **sufficient**.
- `the-residue-theorem` — **sufficient**.
- `the-hartogs-phenomena` — **sufficient**.

## Checks run on Wednesday, August 26, 2026

- `node tools/scope-decisions.mjs refresh --run frontier-20 --group b` —
  `scope-decisions: b: 6 decline(s), 0 pending`.
- `node tools/scope-decisions.mjs check --run frontier-20 --group b` —
  `scope-decisions: 6 current decline(s), 0 error(s)`.
- `node tools/coverage-checklist.mjs research/frontier-20-batch-3.coverage.json --require-destination`
  — `coverage-checklist: 1 page(s), 44 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/coverage-checklist.mjs research/frontier-20-batch-9.coverage.json --require-destination`
  — `coverage-checklist: 2 page(s), 31 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-20-batch-3.coverage.json`
  — `source-fetch-check: 3/3 source(s) fetch-verified`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-20-batch-9.coverage.json`
  — `source-fetch-check: 5/5 source(s) fetch-verified`.
- `node tools/content-policy.mjs --manifest-only research/frontier-20-batch-{1,2,3,4,5,6,7,8,9,10}.pages.json`
  — `content-policy: 522 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json` — passed; only the
  existing repository-wide `redundant-prereq` advisories remain, including the
  already-recorded redundant prerequisites on CA-14 and SC-2.

No group-`b` Step-3 scaffold finding remains open on the current bytes.
