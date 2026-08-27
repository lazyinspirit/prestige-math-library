# frontier-20 — Alpha group `c` — Step 3 recheck

Group `c` covers batches `4`, `6`, and `7`. I re-read
`research/frontier-20-alpha-c-step3-scaffold-review.md`, the `## Step-3 fix pass`
sections in `research/frontier-20-batch-{4,6,7}.notes.md`, the current
`research/frontier-20-batch-{4,6,7}.pages.json` manifests, the current
`research/frontier-20-batch-{4,6,7}.coverage.json` ledgers, the live
group-`c` scope ledger, and the governing plan entries in
`research/plan-spec.json`,
`research/plan-group-theory-track.md`,
`research/plan-commutative-algebra-track.md`, and
`research/plan-algebra-track.md`. The dispositions below are from the current
bytes, not from the earlier scaffold-review prose.

- `socles-and-the-onan-scott-landscape` — confirmed. The scaffold review issued
  no separate batch-4 finding beyond the page verdict, and that still matches
  the current bytes: `research/frontier-20-batch-4.pages.json` still carries a
  `21`-item A page with its `7`-item B companion, the current coverage passes
  `coverage-checklist`, and `content-policy --manifest-only` still passes on
  the manifest. The earlier `sufficient` verdict remains correct.

- `4a38974e76b348c3ba8b2349f823fceed3d6f4cb4232ccf4ffd9f561a5b0269b` —
  confirmed. The Löh `6.5.3 Quasi-convexity` row is still out of scope for the
  GT-12 route. The current plan still stops this page at hyperbolicity, the
  word problem, elementary subgroup structure, and the proper-geodesic boundary,
  so the standing `stands` decision in
  `research/frontier-20-alpha-c-scope-decisions.json` remains exact.

- `90dde420f79f8469dc7ff9ffbf299da9959e2d620f1273b07d5ebdfb3bad26fe` —
  confirmed. The Bowditch conjugacy-problem row remains outside the scoped
  algorithmic branch. The current GT-12 item list still includes finite Dehn
  presentations and the word problem, but not the conjugacy problem, so the
  standing `stands` decision remains exact.

- `hyperbolic-spaces-and-hyperbolic-groups` — confirmed. The scaffold review
  issued no separate batch-4 finding beyond the page verdict, and that verdict
  still matches the current bytes: `research/frontier-20-batch-4.pages.json`
  still carries the `31`-item A page with its `7`-item B companion, the current
  coverage passes `coverage-checklist`, and `content-policy --manifest-only`
  still passes on the manifest. The earlier `sufficient` verdict remains
  correct.

- `prime-spectra-and-radicals` — confirmed on current bytes. The stale
  “manifest missing” condition is gone: `research/frontier-20-batch-6.pages.json`
  is present again, now with the repaired `44`-item A page and `12`-item B
  page described in the batch-6 fix-pass notes, and
  `research/frontier-20-batch-6.coverage.json` now passes `coverage-checklist`
  at `60` harvested results. The manifest also now includes Milne Corollary
  `14.9` as
  `cor-radical-ideal-has-finitely-many-minimal-primes-noetherian`, so the
  current bytes match the additive CA-3 amendment rather than the earlier
  stale recheck downgrade.

- `49d6b811bcfa182f9476bca3f5c95059bd020747c1f82a720609fa97a9248d60` —
  confirmed. This scope row still stands on current coverage and plan evidence:
  CA-3 still keeps topology language out of `prime-spectra-and-radicals`, so the Stacks
  `Spec(R) is a Noetherian topological space` row remains honestly out of scope.

- `806e876990c2c533b447471ee83601ded5cd1f8d36e6fc42e23f004b1573e274` —
  confirmed. The Stacks dimension theorem row still lies beyond the CA-3 route,
  which keeps height and dimension at the definition boundary only. The
  standing `stands` decision remains exact on current coverage and plan
  evidence.

- `bae677238eeea34bdc10e61bb9a7531f8c411054fa6a5b7d91d82f8f4aac5e26` —
  confirmed repaired and no longer current. The batch-6 fix pass correctly
  pushed back on the old out-of-scope ruling for Milne Corollary `14.9`: the
  current coverage row is now `included`, the current manifest carries
  `cor-radical-ideal-has-finitely-many-minimal-primes-noetherian`, and
  `node tools/scope-decisions.mjs refresh --run frontier-20 --group c` drops
  this row from the current decline ledger. That matches the additive CA-3
  amendment in `research/plan-commutative-algebra-track.md`.

- `B7-1` — confirmed repaired. In `research/frontier-20-batch-7.pages.json`,
  `fs-every-irreducible-quintic-over-q-is-insoluble-by-radicals` still refutes
  the claim locally with `x^5-2`, depends only on
  `def-solvable-by-radicals` and
  `thm-eisenstein-irreducibility-criterion`, and no longer cites the foreign
  B-page witness `ex-x-fifth-minus-two-is-solvable-by-radicals`. The repair is
  still live on current bytes.

- `6471624b800a037d3e004435b6446a92a5add78773412d5464057232059a55ba` —
  confirmed. Conrad Corollary `3.2` remains outside the II.8 X-1 closure: it is
  still an ordering consequence of the deferred Artin-Schreier branch rather
  than a result needed for the Artin proof or its immediate algebraic
  consequences on this page. The standing `stands` decision remains exact.

- `bf10e0cb274418a9dc1a809c4b77fe71c8300c4682fb82fd141ec9e383b429fb` —
  confirmed owner decision. The canonical Artin-Schreier converse is still
  deferred by `research/plan-algebra-track.md`, and the live
  `research/plan-spec.json` still names no concrete destination page for that
  later real-closed/formally-real block. The `owner-decision` routing remains
  honest.

- `d9464e5105889b2baadd94ba61b225625cbfb8687cef5b451aba53157536f159` —
  confirmed owner decision. Conrad Theorem `3.1` is still the same deferred
  later-converse branch, and the live plan still provides no exact destination
  page id for it. The `owner-decision` routing remains honest.

- `the-fundamental-theorem-of-algebra` — confirmed. The current
  `research/frontier-20-batch-7.pages.json` still carries the repaired local
  witness route for `B7-1`, the current coverage passes `coverage-checklist`,
  and `content-policy --manifest-only` still passes on the manifest. The earlier
  `sufficient` verdict remains correct on current bytes.

## Pair verdicts

- `socles-and-the-onan-scott-landscape` — **sufficient**.
- `hyperbolic-spaces-and-hyperbolic-groups` — **sufficient**.
- `prime-spectra-and-radicals` — **sufficient**.
- `the-fundamental-theorem-of-algebra` — **sufficient**.

## Checks run on Wednesday, August 26, 2026

- `node tools/scope-decisions.mjs refresh --run frontier-20 --group c` —
  `scope-decisions: c: 7 decline(s), 0 pending`.
- `node tools/scope-decisions.mjs check --run frontier-20 --group c` —
  `scope-decisions: 7 current decline(s), 0 error(s)`.
- `node tools/coverage-checklist.mjs --require-destination research/frontier-20-batch-4.coverage.json`
  — `coverage-checklist: 2 page(s), 42 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/coverage-checklist.mjs --require-destination research/frontier-20-batch-6.coverage.json`
  — `coverage-checklist: 1 page(s), 60 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/coverage-checklist.mjs --require-destination research/frontier-20-batch-7.coverage.json`
  — `coverage-checklist: 1 page(s), 27 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-20-batch-4.pages.json research/frontier-20-batch-6.pages.json research/frontier-20-batch-7.pages.json`
  — `content-policy: 145 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json` — passed; only the
  existing repository-wide `redundant-prereq` advisories remain.

No group-`c` Step-3 scaffold finding remains open on the current bytes.
