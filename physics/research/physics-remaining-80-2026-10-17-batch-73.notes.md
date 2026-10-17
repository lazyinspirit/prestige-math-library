# Batch 73 notes — tgr-mhs01 / tgr-mhs01-examples

Run `physics-remaining-80-2026-10-17`, beta batch 73. The assigned pair is
`tgr-mhs01` (A, order 643) and `tgr-mhs01-examples` (B, order 644), in
`thermodynamics-and-general-relativity-mathematics`. Only these pages and
their assigned draft items were authored. Both pages and all seven items are
drafts; no publication or independent approval is inferred.

## Plan comparison and conflicts

The current `plan-spec.json`, dispatch and batch manifest require pages
`emg-ms02` and `tgr-mi02`. The older reservation in
`research/plan-thermodynamics-and-general-relativity-track.md` lists only
`TGR-MI02`; the current plan controls, so both current page requirements are
recorded on the A page. The companion requires `tgr-mhs01`. Both prerequisite
pages are present and their current scope was inspected.

The old inventory's supplier aliases `thm-gr-local-geodesics-transport-and-normal-charts`
and `thm-gr-lorentz-curvature-bianchi-and-jacobi` are stale. The proofs use
the exact current mathematical carriers
`thm-gr-local-geodesics-and-exponential-map`,
`thm-gr-nondegenerate-levi-civita-and-tensor-derivative`,
`def-gr-curvature-tensor-and-derived-tensors`, and
`thm-gr-curvature-tensoriality-and-coordinate-formula`. No imported or root
mathematical file was changed. The track's initial source pins for
`inventory-and-pathway.md`, `prose-scaffold.md`, `proposed-inventory.json`, and
`supplier-map.json` differ from current bytes; the initial `closure-ledger.json`
pin matches. The track's 2026-10-16 current-source binding table matches all
five current SHA-256 values. Current bound files and `plan-spec.json` were
followed; the old pins remain historical header data.

The older three-item reservation omitted necessary local arguments. The
screen quotient positivity lemma supports the definition and area theorem;
the Schwarzschild horizon-data lemma covers the point `a=q=0`, excluded by
`prop-emg-xs-kn-horizon-data`'s hypothesis `a^2+q^2>0`. These are new A-page
items with complete proofs and explicit dependencies. The B companion remains
a leaf with one exact special-family example and one flat-cone counterexample.
The source inventory's Crispino/Higuchi/Matsas detector reference is unrelated
to this pair; it remains historical/out of scope, is not harvested here, and
is not marked dropped.

## Inventory, dependencies, and levels

The A page contains five mathematical items and B contains two. The inventory
stays below the 100-item page cap. Direct in-run supplier levels were computed
before authoring consumers:

| Item | In-run logical suppliers | Level |
|---|---|---:|
| `def-tgr-horizon-screen-family` | none | 0 |
| `lem-tgr-null-screen-quotient-positive` | `def-tgr-horizon-screen-family` (0) | 1 |
| `lem-tgr-schwarzschild-horizon-data` | external batch 22 inputs only | 8 |
| `thm-tgr-smooth-null-area` | definition (0), screen lemma (1) | 2 |
| `prop-tgr-kn-first-law-smarr` | local definition (0), batch 22 horizon data (8), Schwarzschild lemma (8), batch 51 calibration lemma (0) | 9 |
| `ex-tgr-schwarzschild-family-data` | first-law proposition (9), batch 22 horizon data (8), local definition and Schwarzschild lemma (8) | 10 |
| `cex-tgr-ingoing-null-cone-area` | local area theorem (2) | 3 |

The proof order is suppliers before consumers: screen definition then quotient
lemma; the two local horizon-data inputs and imported calibration interface
then the first-law proposition; the proposition then its B example; and the
area theorem then its counterexample. The Schwarzschild lemma depends on the
current batch-22 KN extension and horizon vocabulary, whose actual interfaces
were inspected. The first-law proof uses `prop-emg-xs-kn-horizon-data` only on
its actual `a^2+q^2>0` domain and the local Schwarzschild lemma for the excluded
zero point. Batch-22/51 readiness records and complete current proofs were
checked; their draft status is not treated as a missing prerequisite.

The null-area theorem is a mathematics result with a conditional null
convergence assumption. It states `ACω` explicitly for the manifold and density
integration setup. It derives Raychaudhuri with the library curvature
convention, proves nonnegative expansion using the full future persistent-cut
hypothesis, and proves the area derivative by finite chart localization plus
the compact-parameter integral theorem. The latter includes its explicit
`AC_omega` premise. The result is not promoted to an arbitrary event-horizon
area theorem. The flat ingoing cone has zero Ricci contraction and strictly
decreasing area only before its finite-affine-parameter vertex, where the
persistent-cut hypothesis fails.

## Source reading and dispositions

Three full-text sources were inspected; the A page has two independent
treatments plus full GR lecture notes. Successful retrieval stamps from the
current run were reused and `source-fetch-check --stamp` is recorded below.
The coverage file gives each URL, precise locator, supported item, harvested
heading and disposition:

- Carroll, complete 238-page GR lecture notes, Chapter 7 equations
  (7.114)–(7.128) and (7.148)–(7.156). The Kerr horizon, null-pair and area
  passages provide context; Kerr-only identities are not extended to KN.
- Wald, complete 46-page review, §2 PDF pp. 3–8. Its focusing argument and
  global event-horizon caveats motivate the local assumptions; global
  predictability is explicitly out of scope.
- Adamo–Newman, complete 30-page KN review, §3.3 equations (3.18)–(3.23) and
  §4.1 equations (4.1)–(4.2). Its `(+---)` signature and geometrized units are
  not transferred.

No item proof relies on a citation in place of an argument. Source limitations
and harvested-result dispositions are recorded per item in the coverage file.

## Cross-batch interface checks

The cross-batch JSON contains one row per current incoming page/item edge:
`tgr-mhs01` to `emg-ms02` and `tgr-mi02`; Schwarzschild horizon data to the
batch-22 KN extension and batch-6 horizon vocabulary; the first-law proposition
to batch-22 KN horizon data and batch-51 calibration freedom; and the B example
to batch-22 KN horizon data. The scoped current interface checks are marked
`verified`; this records input matching only, not independent proof approval.

## Category-level follow-up

The category `_category.md` exists. The shared category pathway is absent and
is outside this pair's edit scope; the owner/shared category author must supply
it before category-wide pathway checks. No page-capacity issue or unresolved
mathematical prerequisite was found after completing the local arguments.

## Scoped check outcomes

Final scoped results are recorded in
`research/physics-remaining-80-2026-10-17-batch-73.check-results.json`. Source
fetch, content policy, focused dependency checks, rendercheck, precheck,
proof-layout, strict contracts and the local dependency-closure recomputation
pass. All seven assigned Step 1 records are current and `ready`; this is
authoring readiness only, not independent proof approval. The A page has five
items and B has two.

The source coverage checklist has zero errors and one low-yield warning: 4 of
11 harvested results are included; the other results are explicitly inlined or
out of scope. Alpha can confirm those dispositions at the review gate. The
full-run item-level and proof-contract-coverage checks stop on empty inventories
in unrelated batches (`emg-ms03` is the first contract-coverage failure). The
full-run batch dependency-level check reports the shared graph stale against
current manifests. These are owner/shared join tasks; the author left the
shared graph and engine state untouched. The batch-73 transitive dependency
closure independently recomputes all seven levels as 0, 1, 8, 2, 9, 10, and 3
across 31 carriers in 8 pages.

No tests were requested or run.
