# frontier-11 — COMPLETE AND PUBLISHED

**Verify disk state before trusting any line here.** Run prefix is `frontier-11`;
this run's pairs span dependency levels 18–22, so there is no single level number.

## Outcome

**Steps 0 → 10 complete. Owner audited and published on 2026-08-13
(`045f3847`). Corrections pushed as `c3c71fe5`. Both repos synced with origin.**

Nine non-topology A/B pairs, **240 items across 18 pages**, from 466 harvested
source headings. Topology (orders 277, 285, 287, 293) was excluded by owner scope
and remains on the frontier.

| order | pair | A+B |
|---|---|---|
| 54 | field-extensions-and-the-complex-numbers | 21+7 |
| 64 | conjugacy-and-simplicity-in-the-symmetric-groups | 18+8 |
| 84 | the-determinant-of-a-linear-operator | 20+8 |
| 178.1 | the-integral-logarithm-and-its-characterisations | 19+5 |
| 181 | arc-length-and-rectifiable-curves | 15+8 |
| 193 | formal-power-series | 22+9 |
| 219 | extremal-graph-theory | 20+9 |
| 239 | the-fundamental-theorems-of-calculus | 10+6 |
| 361 | universal-properties-and-the-yoneda-lemma | 21+14 |

Full account: `research/frontier-11-step10-rundown.md`. Decisions D1–D18:
`research/frontier-11-step3-decisions.md`.

## The one thing still open

**D10 — the library uses a construction it never built.** No field-of-fractions
or localisation exists anywhere in `items/` or `plan-spec.json`, yet published
`cex-ordered-field-not-archimedean` and `ex-rational-function-field-order` both
open *"Given: … the field of fractions of the polynomial ring ℝ[t]"*. Natural
home is orders 46–50, all published and closed. **Owner decision, not a build
task.** Three separate batches collided with its absence in this run and Alpha
ruled once, for all of them, not to build it here.

## Post-publish corrections that were needed (and why they nearly weren't caught)

The publish commit did two of three required things. Fixed in `c3c71fe5`:

1. **The four re-homed ℂ ids were still listed on order 189** while also on order
   54, and both pages were published — readers would have met them twice, on a
   page defining ℂ as ℝ² and a page defining it as ℝ[x]/(x²+1). Order 189 now
   28 items; `multi-home` on those four 4 → 0.
2. **The RA-27b obligation was still standing in `LEVELS.md` §Step 0.5**, though
   its pair had published. Struck, with the discharge recorded.

`verification.audited` on the four was done correctly, closing the D13 window.

## Durable lessons — see also the automem notes

- **Three gates passed green while verifying nothing** (rundown §6): `finite-smoke`
  executed 0 checks; `proof-contract --strict` passed 206/206 over 355 rows whose
  "evidence" was an instruction; `rendercheck` silently skipped until katex/yaml
  were installed. All three were caught by readers/refuters/Alpha, never by a tool.
- **A re-home's only proof is the donor page no longer listing the ids** (D15).
  No gate fails on a half-done re-home.
- **Take the `after-authoring` touchlog snapshot the moment step-5 authoring
  ends** (D17). It is unrecoverable afterwards and `gates.mjs` step 6 needs it.
- **An item a reader creates at step 6 does not enter `plan-spec.json`**, so the
  judge sweep skips it. `cex-the-koch-curve-is-not-rectifiable` would have
  shipped unjudged; only `level-coverage --verify-current-context` caught it.
- **Judge lanes are asymmetric**: Terra rejected 89/239 (37%), DeepSeek 31/239
  (13%). A Terra-only rejection is weaker evidence than agreement, but the
  passing lane may simply have missed it — refute from disk, never by vote count.
- **R1 works.** 122 adjudications → 110 nonfatal, 6 false positive, 6 fatal rows
  over 4 items; `step8-guard` licensed 4/4 then 1/1 across two baselines.

## Environment facts that cost time

- `.claude/settings.json` is **checked in**; `defaultMode: "bypassPermissions"`
  there **breaks `claude` on the VPS**, where the repo is checked out as root —
  the root guard applies to the mode however it is set, not only to the
  `--dangerously-skip-permissions` flag. It is now `acceptEdits`. Machine-specific
  modes belong in `.claude/settings.local.json`, which is gitignored.
- `touchlog.mjs snap <ledger> <label>` takes the label **positionally**; a
  `--label` flag is recorded as the literal snapshot name.
- `research/frontier-11-splice.mjs` is idempotent — its re-home guard asserts the
  **end state**, not the delta.
- Without `katex`/`yaml` in the app repo, **`rendercheck` skips silently**.
- `dispatch.mjs` claude lane needs `bypassPermissions`; `acceptEdits` still
  prompts for `WebFetch`, which silently cost Alpha the whole source-faithfulness
  criterion at step 3.

## Next build

Frontier from disk, then `LEVELS.md` step 0. The four topology pairs are
available, plus whatever these nine unblocked — order 54 alone gates
`splitting-fields` (56), `inner-product-spaces-and-orthogonality` (94) and
`complex-differentiability-and-cauchy-riemann` (303); order 84 gates 86, 92, 104.
**No standing scope obligation remains.**
