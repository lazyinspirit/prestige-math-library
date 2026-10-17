# Batch 75 authoring notes — `tgr-mhs03`

## Plan comparison and inventory

Read the full owner direction and the complete TGR-MHS03 design section at
`research/plan-thermodynamics-and-general-relativity-track.md#constructed-timelike-smear-and-massless-accelerated-spectrum`.
The task, plan-spec rows, and design agree on page IDs, title, category,
library, companion, order 647/648, and page requirements `qft-mf02`,
`tempered-distributions-and-the-fourier-transform`, and `tgr-mhs02`. The
plan-spec `items: []` entries are unfilled scaffold inventories; the original
reservation in the proposed inventory supplies the exact assigned items:
`lem-tgr-timelike-scalar-acceleration`,
`lem-tgr-spectral-thermometer`, and `ex-tgr-finite-switch-inertial-rate`.
There is no substantive design/plan conflict. The batch-75 manifest now carries
the complete authored inventory.

The category overview `_category.md` exists. The A and B pages each remain
well below the 100-item cap. No category-capacity issue was found.

## Dependencies and conditional supplier interface

The run dependency graph records batch 74 at level 0 and batch 75 at level 1.
A focused recomputation over only the current batch-74 and batch-75 manifests
found no item-level errors and returned levels 0, 1, 2, 3, and 4 for
`lem-tgr-exponential-current`, `lem-tgr-thermal-contour-spectrum`,
`lem-tgr-timelike-scalar-acceleration`, `lem-tgr-spectral-thermometer`, and
`ex-tgr-finite-switch-inertial-rate`, respectively. Thus each assigned item is
one above its highest in-run supplier.

The current batch-74 manifest contains both MHS02 carriers. Their actual item
files were read through their complete Statements and proofs. Both items have
`status: draft`; neither has a Step-1 readiness record. They are therefore
available as draft carriers but not as accepted proof inputs. The thermal
contour item's actual interface is narrower and differently normalized than
the generic planned HS04 description: it uses a length coordinate and
`kappa > 0` in inverse-length units, with
`C_kappa(u) = -(kappa^2/(16 pi)) csch^2(kappa (u-i0)/2)`,
`S_kappa(omega) = omega/(2(exp(2 pi omega/kappa)-1))`,
`S_kappa(0) = kappa/(4 pi)`, and its stated detailed-balance relation.
Its declared prerequisite `lem-tgr-exponential-current` is also draft.

A1 now records and uses that actual interface conditionally. With
`alpha = a/c^2` and `u = c s`, its constructed covariance satisfies
`C_a(s) = pi^{-1} C_alpha(c s)` as a tempered boundary distribution. The
negative-sign Fourier scaling then gives
`S_a(nu) = pi^{-1} c^{-1} S_alpha(nu/c)`, which yields the required proper-time
spectrum, zero value, and detailed balance. A2 and the B example remain
conditional on these draft MHS02 inputs. Neither draft label is treated as
proof acceptance.

The three existing Step-1 records for this batch remain `escalated`. They were
written when the batch-74 manifest and category overview were misread as
missing; their stored reasons now contain stale absence claims. The owner
instruction prohibits overwriting an escalation, so those records were left
unchanged. Their stored dependency lists also predate final metadata: A1 omits
its explicit Cauchy–Schwarz dependency, and A2 omits its explicit test-function
and Plancherel dependencies. The current items, manifest, and cross-batch
evidence contain these edges. Current evidence identifies the actual blocker: both MHS02 carriers
are draft and lack Step-1 readiness. The owner should reconcile the stale
reasons during the authorized readiness review. No readiness was marked
`ready`.

The complete relevant statements and proofs of the published `qft-mf02`
suppliers were inspected: `def-qft-scalar-mass-shell`,
`def-qft-fock-and-test-spaces`, `lem-qft-fock-ccr-car`,
`lem-qft-smeared-free-scalar`, `lem-qft-segal-weyl-domain`, and
`lem-qft-mass-shell-test-range-dense`. Their shell apex, metric and phase,
measure, Hilbert-pairing convention, Countable Choice, separability premise,
creation/annihilation domains, and Segal normalization are preserved. The
published Fourier and test-space suppliers used by A1/A2 were also read in
full, including the transposed distribution convention, Schwartz inversion,
Plancherel, test-function definition, Fubini, dominated convergence, and
Cauchy–Schwarz. The local curve restriction is proved from the shell map; the
spacetime-smearing supplier is not treated as already proving a curve
restriction.

## Full-text source review

`research/physics-remaining-80-2026-10-17-batch-75.coverage.json` records the
searches, full-text fetch stamps, locators, read extents, supported items, and
each harvested result's disposition. All three sources were fetched and
inspected; no source retrieval failed or was dropped.

- Preskill, *Quantum Field Theory in Curved Spacetime*, complete author-hosted
  Caltech notes: <https://preskill.caltech.edu/ph236c/Preskill_QFT_curved_spacetime.pdf>.
  Read §4.3, printed pp. 55–58, and §4.7, pp. 71–73. It supports the usual
  hyperbola, stationary point-detector response, and Rindler interpretation.
  Its formal point-detector/infinite-time calculation is context only; the
  local proof supplies the shell restriction, boundary, and finite-switch
  bound.
- Wald, *The Thermodynamics of Black Holes*, complete review:
  <https://arxiv.org/pdf/gr-qc/9912119>. Read §3, printed pp. 11–16. It
  supports the boost-time Unruh scale and the distinction from Hawking
  radiation, not the local construction or switched coefficient.
- Crispino, Higuchi, and Matsas, *The Unruh effect and its applications*,
  complete review: <https://arxiv.org/pdf/0710.5373>. Read §III.A.1–2, PDF
  pp. 19–22, equations 3.1–3.28 and surrounding qualifications. It supplies
  a literature comparison for the point-detector calculation, not the local
  finite-switch bound or a detector-probability theorem.

No experiment, measured spectrum, or empirical precision is claimed.

## Scoped validation

- `proof-layout.mjs`: 3 items, 14 steps, 0 defects.
- Scoped `precheck.mts`: all 3 items pass in direct strategy.
- Strict proof contracts: 3/3 items, 0 errors, 0 warnings; exact source
  excerpts, step inputs, and boundary cases are present.
- Scoped `rendercheck.mjs`: all 5 assigned item/page files parse, including
  math and frontmatter.
- Focused `depcheck.mjs`: the 3 assigned items and their prerequisite cycle
  checks pass.
- `content-policy.mjs --manifest-only --authored`: 3 scoped items, 0 errors,
  0 warnings.
- Focused `pathcheck.mjs`: 0 errors and 0 warnings; 0 pathway files were
  applicable to these draft pages.
- `source-fetch-check.mjs`: 3/3 sources fetch-verified and resolved, with 0
  documented drops.
- Focused batch-74/75 item-level and page-level dependency recomputation
  passes. The full run's stored batch-level record is stale after the assigned
  manifest was authored; it is owner-level evidence and was not rewritten.
  The full-run item-level check reports 113 errors across 160 pages: 108 empty
  scaffold inventories and 5 existing declared-level mismatches. None names a
  batch-74/75 item. The focused levels above are current.
- The full-run Step-1 checker remains open across the 80-pair run and reports
  these three items as escalated. Their old reason text is stale as described
  above; the escalation decisions themselves were not overwritten.

## Remaining owner input

The assigned local authoring is complete, but A1's accelerated spectrum, A2's
accelerated switched/Markov conclusions, and the B accelerated comparison
cannot be marked ready until the batch-74 MHS02 draft items are accepted and
have current Step-1 readiness evidence. Their actual statements have now been
checked against the consuming rescaling. All other assigned arguments and
artifacts are complete. Completion records are not independent proof approval.
