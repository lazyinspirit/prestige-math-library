# Batch 22 — Quantum Relative Entropy, Data Processing, and Strong Subadditivity

## Scope, plan, and design

- Run: `non-ml-math-remaining-81-2026-10-18`; role beta; assigned pair IT20 only.
- The current plan/spec assigns A page order 2536, `quantum-relative-entropy-data-processing-and-strong-subadditivity`, and B page order 2537, its examples companion. The A page requires `quantum-information-measures`.
- No separate design section was found for this pair. The assignment itself says “design: none found”; the controlling IT20 plan summary governed scope and proof route.
- The plan’s scope is preserved: finite support-sensitive QRE; finite inverse-compression/resolvent Jensen and joint convexity; partial-trace and channel DPI; SSA; CMI nonnegativity; and the finite Holevo measurement bound. Fidelity and trace-distance inequalities are not substituted for QRE DPI. No equality/recovery or infinite-dimensional extension is claimed.
- No plan/design conflict was found. A separate cross-batch collision exists: batch21’s IT13 manifest and carriers overlap the IT20 proof ladder and three exact item IDs. This is recorded below and was not repaired in this pair.

## Inventory, dependency levels, and authoring order

The item inventory and full declared `deps` are in [the batch manifest](non-ml-math-remaining-81-2026-10-18-batch-22.pages.json). Levels were assigned before carriers were authored and recomputed after the dependency edits. Local batch22 edges are:

| Level | Items | Batch22 suppliers at the preceding level |
|---:|---|---|
| 0 | `lem-it-quantum-inverse-compression-variational`; `lem-it-finite-weyl-twirl-partial-trace`; `lem-it-finite-povm-outcome-map-is-cptp` | — |
| 1 | `lem-it-negative-log-integral-resolvent-jensen` | inverse-compression lemma |
| 2 | `lem-it-relative-modular-operator-identity`; `lem-it-quantum-relative-entropy-support-regularization`; `lem-it-quantum-relative-entropy-isometric-invariance`; `cex-it-fidelity-data-processing-does-not-prove-qre-dpi` | no batch22 suppliers; level comes from batch21 QRE definition for the modular identity and counterexample |
| 3 | `thm-it-quantum-relative-entropy-joint-convexity-finite` | negative-log compression, modular identity, support regularization |
| 4 | `thm-it-quantum-relative-entropy-partial-trace-dpi` | joint convexity, isometric invariance, Weyl twirl |
| 5 | `thm-it-quantum-relative-entropy-data-processing-finite`; `thm-it-finite-strong-subadditivity` | partial-trace DPI; partial-trace DPI |
| 6 | `thm-it-finite-quantum-conditional-mutual-information-nonnegative`; `thm-it-holevo-measurement-bound`; `ex-it-dephasing-quantum-relative-entropy-dpi`; `ex-it-strong-subadditivity-for-pure-tripartite-state` | SSA; batch21 channel DPI; channel DPI; SSA |

Suppliers were authored before consumers within this pair. Batch22 has 13 A-page items and 3 B-page examples; both pages are below the 100-item cap. The manifest’s item-level values match the carriers. The run-wide dependency checker reports no level mismatch for a batch22 item, but it exits nonzero for many other empty inventories/level mismatches in the run and for the exact duplicate IDs below.

## Batch21 interfaces and unresolved checks

The current batch21 carriers were inspected; no batch21 files were changed.

- `def-it-finite-dimensional-quantum-relative-entropy` defines the finite PSD QRE with natural logarithms, support inclusion, and the `+∞` support-failure branch; it also specifies `D(0\|B)=0`. This actual definition was used in the new proofs.
- `def-it-von-neumann-entropy` is well-formed on current reinspection: the Definition block uses the eigenvalue sum and `0 ln 0 := 0`; a byte scan found no control characters. An earlier concern about malformed symbols was not reproduced against the current carrier.
- `lem-it-quantum-entropy-support-and-finiteness` states joint support inclusion for a finite bipartite state and the product of its marginals. Its proof body was read; `verification.precheck` remains pending.
- `thm-it-quantum-entropy-identities` states the mutual-information/QRE identity and CQ/Holevo identity. Its proof body was read; `verification.precheck` remains pending. It is used by SSA and the currently shared Holevo item.
- `def-it-finite-quantum-information-measures` fixes the ordered marginal conventions and CMI expression. `thm-it-finite-quantum-conditional-mutual-information-identities` proves only the algebraic entropy identity, not nonnegativity; its precheck is pending.
- `lem-it-partial-traces-of-a-state-are-states`, `thm-it-quantum-relative-entropy-channel-data-processing`, and `lem-it-finite-povm-measurement-channel` bodies are present and were inspected; each has `verification.precheck: pending`.
- Published `lem-natural-logarithm-bounded-by-argument` is an additional transitive supplier of the current shared support-regularization proof. Its full two-step proof was inspected: it proves `0 ≤ ln x ≤ x−1` for `x ≥ 1` by the mean value theorem and handles `x=1`; the argument is mathematically sound. Its `verification.precheck` is still pending, so it is recorded as an unresolved supplier state, not as external approval.

### Exact ID collisions and claim overlaps

Batch21 and batch22 both list these exact IDs:

- `lem-it-quantum-relative-entropy-support-regularization` — current body is present but `verification.precheck: pending`.
- `lem-it-quantum-relative-entropy-isometric-invariance` — current body is present but `verification.precheck: pending`.
- `thm-it-holevo-measurement-bound` — current body is present but `verification.precheck: pending`; it cites batch21’s `thm-it-quantum-relative-entropy-channel-data-processing` and `lem-it-finite-povm-measurement-channel`, rather than this batch’s planned IDs `thm-it-quantum-relative-entropy-data-processing-finite` and `lem-it-finite-povm-outcome-map-is-cptp`.

There are also semantically overlapping but differently named batch21 claims: inverse compression, negative-log operator Jensen, relative modular representation, QRE joint convexity, partial-trace DPI, and channel DPI. Batch21 currently places much of this ladder under the IT13 page, while the controlling IT20 plan assigns the QRE DPI ladder here. The three-ID owner resolution under `research/non-ml-math-remaining-81-2026-10-18-owner-qre-duplicate/` is proposal-only and unapplied. The owner must choose the unique suppliers/placements after archival review. This batch does not rename, overwrite, archive, or otherwise resolve shared batch21 files.

## Sources and retrieval

Two independent full-text textbooks were read for each page:

- John Watrous, *The Theory of Quantum Information*, Chapter 5, especially Definitions 5.17–5.18, Proposition 5.19, the full Proposition 5.28–Corollary 5.33 joint-convexity route, Propositions/Theorems 5.34–5.36, Corollary 5.37, and the full Theorem 5.49 Holevo proof. The relevant PDF text was fetched and inspected locally with MuPDF. Watrous uses base-2 logarithms; the carriers use natural logarithms, a positive rescaling that preserves the inequalities.
- Mark M. Wilde, *From Classical to Quantum Shannon Theory*, §§11.8–11.9.2: the complete support-sensitive definition and regularization-limit proof including support failure; mutual-information identities; the isometry/additivity/CQ exercises; SSA and joint-convexity corollaries; and the Holevo exercise. Wilde states channel monotonicity but defers its proof to Chapter 12; no deferred proof is treated as read or imported.

Exact URLs, locators, supported items, and per-heading dispositions are in [coverage](non-ml-math-remaining-81-2026-10-18-batch-22.coverage.json) and its source-coverage mirror. `source-fetch-check --stamp` fetched and stamped 4/4 page/source records, with 0 retrieval failures and 0 documented drops. No recovery retry or `source_resolution` waiver was needed. `coverage-checklist --require-destination` reports 2 pages, 46 harvested results, 0 errors, and 0 warnings.

## Proof contracts and diagrams

- The strict proof-contract file covers all 16 assigned IDs, with 116 exact current supplier excerpts, 49 numbered proof-step mappings, and standard boundary dispositions. `proof-contract --strict` passes all 16/16 contracts.
- The inverse-compression proof is variational and finite-dimensional; the negative-log proof uses finite spectral calculus, resolvent cutoffs, and norm convergence. The joint-convexity proof uses a Hilbert–Schmidt isometry and the modular identity, then regularizes semidefinite pairs. The Weyl twirl is proved by explicit matrix units. Channel DPI is derived from finite Stinespring dilation and partial-trace DPI. SSA and CMI proofs spell out marginal order and unitary wire-permutation entropy invariance. Holevo measurement uses an explicit finite Kraus construction for the POVM outcome channel.
- The A page includes the Stinespring factorization diagram; the dephasing example includes a one-wire channel schematic; and the GHZ example includes a three-leg state diagram. Each diagram’s convention is stated, and none is used as a proof.
- No choice axiom is used. All vector spaces, sums, eigenbases, POVMs, and channels are finite-dimensional/finite; the spectral-theorem applications use finite orthonormal bases.

## Scoped check results

After the final carrier edits:

- `proof-layout` on the 13 batch22-authored proof carriers: 13 items, 42 steps, 0 defects. The first pass found one unmatched inline-math delimiter in the modular-operator lemma; that delimiter was corrected and the full scoped pass is clean.
- `rendercheck` on the 13 authored carriers and both A/B pages: 15 files, no wikilinks inside math, no delimiter errors, all math spans parsed by the real KaTeX, and all frontmatter parsed by the renderer YAML parser.
- `proof-contract --strict`: 16/16 assigned items checked, 0 errors, 0 warnings. The contract records current supplier excerpts and unresolved precheck/collision checks separately; a passing contract does not accept those suppliers.
- `coverage-checklist --require-destination`: 2 pages, 46 harvested results, 0 errors, 0 warnings.
- `source-fetch-check` check mode over both coverage files: 8/8 source records fetch-verified, 8/8 resolved, 0 documented drops.
- `item-dependency-levels check --run non-ml-math-remaining-81-2026-10-18`: exits 1 with 114 errors. Three are the exact batch21/batch22 duplicate item IDs listed above; the other 111 concern empty inventories or dependency-level discrepancies in other run batches. No batch22 level mismatch was reported. No out-of-pair file was repaired.
- `step1-decisions record` was attempted for every assigned item without `--owner`. `loadStep3` rejects the run before any record can be written, at the exact duplicate `lem-it-quantum-relative-entropy-support-regularization`; this affects all 16 attempted records. No readiness record was fabricated or overwritten. The owner must resolve the duplicate IDs before the run-level decision tool can record this batch.

No tests were run.
