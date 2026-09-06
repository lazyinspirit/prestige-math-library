# frontier-31a — group Alpha `d`, Step 3 scaffold recheck

This recheck covers batches `21` and `22`. I reread the group-d scaffold
review and both assigned batches' `## Step-3 fix pass` notes, then checked the
current manifests, coverage harvests, source-verification records, and
`research/plan-spec.json`. A reported application is not accepted merely from
the note: the current canonical coverage bytes control.

## Dispositions

| Batch | Reported finding | Disposition | Current evidence |
| ---: | --- | --- | --- |
| 21 | `the-arithmetical-hierarchy-and-posts-theorem` was sufficient. | Closed without change. | Its 21 scaffolded records retain explicit dependency arrays and the current coverage supplies two fetch-verified sources. The plan still places the A/B pair at orders 613/614 with its declared predecessor. |
| 21 | `time-and-space-hierarchy-theorems.missing[0]`: Union-Theorem source coverage was absent. | **Remains blocked.** | The fix-pass note says a Hartmanis–Hopcroft row was added, but the current `frontier-31a-batch-21.coverage.json` has only the Arora–Barak and Terwijn source rows for this page. It has no Hartmanis–Hopcroft URL, §6/Theorem 16 locator, fetch-verification record, or `included` disposition for `thm-gap-and-union-theorems-for-complexity-bounds`; the current fetch check consequently reports 4/4, not the note's 5/5. The existing Terwijn entries cover only the Gap theorem. |
| 21 | `time-and-space-hierarchy-theorems.missing[1]`: the all-tapes hierarchy could not yield the local L-versus-PSPACE result. | Closed: repair remains applied. | The manifest supplies a local read-only-input/work-space convention, simulator, halting lemma, hierarchy theorem, and all-tapes charging bridge. `cor-l-is-properly-contained-in-pspace` depends on that local hierarchy and bridge, so it no longer treats the old all-tapes hierarchy as a result in the different model. |
| 22 | `logarithmic-space-nl-and-reachability.missing[0]`: the Savitch and complement routes used the wrong all-tapes convention. | Closed: repair remains applied. | `def-l-and-nl`, `thm-read-only-input-savitch-simulation`, and the stable-ID item `thm-nl-is-contained-in-dspace-log-squared-n` now depend on `def-read-only-input-workspace-classes`. The latter item's current title and strategy state exactly `NL ⊆ DWORKSPACE(log-squared n)`, explicitly distinguish the all-tapes `DSPACE(n + log-squared n)` consequence, and do not claim `L=NL`. The Immerman–Szelepcsényi theorem and complement corollary likewise state the qualified read-only-input/work-space convention. |

The retained plan scope is unchanged: `time-and-space-hierarchy-theorems`
remains at 627/628 with the two declared predecessors, and
`logarithmic-space-nl-and-reachability` remains at 629/630 with its two
declared predecessors. The sole residue is an in-scope source-coverage repair
for the paired Gap-and-Union theorem; it requires neither a new page, a
forward edge, nor a reading-order change.

## Scope decisions and checks

`node tools/scope-decisions.mjs refresh --run frontier-31a --group d` found
seven current declines and zero pending rows. The immediately following
`check` reported seven current declines and zero errors; all seven decisions
remain `stands`.

- `manifest-deps` passed for batches 21 and 22: respectively 44 and 22 items,
  with zero normalized entries and zero errors.
- `coverage-checklist --require-destination` passed: respectively 65 and 30
  harvested results, with zero errors and zero warnings.
- `source-fetch-check` accepted the current records: 4/4 batch-21 sources and
  2/2 batch-22 sources are fetch-verified. This confirms the source rows that
  exist; it does not establish the absent Union-Theorem coverage.
- `content-policy --manifest-only` over both manifests passed: 66 scoped
  items, zero errors, and zero warnings.
- `validate-plan.mjs research/plan-spec.json` passed: no declared-page cycle,
  item-level cycle, forward reference, B-page dependency, or unresolved id.
  Its repository-wide redundant-prerequisite advisories are non-blocking.

## Verdict record

I verified the pre-update bytes of
`research/frontier-31a-alpha-d-step3-verdicts.json`
(`sha256:8628dad3ac5f67403730a22bfba168921a6f2b5563bb9497de9214039c6eb1b7`).
The batch-21 time-and-space pair is `insufficient` because its exact
Union-Theorem coverage is absent from the current canonical record. The
batch-22 local-model repair is now closed, so its pair is `sufficient`.

## Owner closure after automatic repair exhaustion

The final Batch-21 repair did materialize the missing Hartmanis–Hopcroft
§6/Theorem 16 source row, exact locator, fetch receipt, and four dispositions
in the canonical coverage JSON. The initially used ResearchGate endpoint then
failed the live URL sweep with HTTP 403, so it was replaced by the verified
32-page FIU-hosted scan of the same JACM paper. Coverage, source-fetch,
dependency, and plan validators pass on the current bytes. The corrected
Batch-21 verdict is therefore `sufficient`, as recorded in the current verdict
JSON.
