# Step 3b authoring record — Rellich–Kondrachov and Sobolev compactness

- Run: `frontier-39-analysis-30` (role: alpha-high; batch 9; this pair only).
- A page: `rellich-kondrachov-and-sobolev-compactness` (plan order 458.027).
- B page: `rellich-kondrachov-and-sobolev-compactness-examples` (458.028).
- Owned inventory: **37 items** (27 A + 10 B) — the 30 original scaffold IDs
  (24 A + 6 B) plus the 7 owner-integrated §12.5 additions:
  `cor-strong-lq-convergence-implies-strong-convergence-of-subcritical-powers`,
  `cor-bounded-map-into-h-one-zero-followed-by-rellich-is-compact-on-ltwo`,
  `lem-strong-lp-closed-constraints-pass-through-rellich-limits`,
  `cex-high-frequency-oscillations-violate-uniform-translation-control`,
  `ex-normalised-critical-bubbles-converge-weakly-but-not-strongly-at-p-star`,
  `cex-critical-trace-compactness-fails-by-tangential-dilation`,
  `cex-dilations-can-destroy-tightness-on-an-unbounded-domain`.
- Carrier obligations: 37 `items/<id>.md`; the two `library/pde/` pages;
  `research/frontier-39-analysis-30-batch-9.pages.json` (statements, deps and
  `dependency_level` synced to the authored items, sibling rows preserved);
  `...batch-9.proof-contracts.json` (37 entries); `...batch-9.coverage.json`;
  `...batch-9.cross-batch-dependencies.json`; this report.

## Handoff status

All 37 item files, both pages, the synced manifest, the coverage record, the
cross-batch input and the 37-entry proof-contract file are on disk and pass every
scoped check listed below. **No Step-3 item decision receipt could be recorded
for this pair**: the pair's Step-3a owner scope decision is stale against the
authored manifest, and only the owner may refresh an owner scope decision. That
missing receipt set is the single open obligation of this dispatch; the content,
dependency, source, rendering and contract work is complete.

## Scope decision status (owner-held; blocks `record-item`)

- Owner `proceed` receipt:
  `research/frontier-39-analysis-30-step3a-owner-rellich-kondrachov-and-sobolev-compactness.json`,
  `sha256 = 36c8311edd9c59b74d692db3a5f68d79a7749d8339dc808f2a3945888c6bac1f`
  (2026-10-04T20:24:54Z). The immutable pre-author auditor baseline
  (`...-step3-auditor-baseline.json`, written 20:26:02Z) records the same scope
  hash for this page.
- Current pair scope hash, recomputed 2026-10-05 through the
  `tools/step3-decisions.mjs` machinery (`loadStep3`/`scopeHash`):
  `f62de28df473c8ae1b58ef787818c1fb00b6e487325a074d522e5d09477c2573`.
- Cause: `scopeHash` binds the manifest `(id, kind, title, statement)` of every
  item of the pair, and Step-3b authoring synced the manifest statements to the
  authored item statements, which are hard-wrapped; statement bytes therefore
  changed across the pair, and two statements were repaired outright (see the
  repair list below). Two of the supplier files the scaffold had left open also
  landed during the dispatch. The item bodies, the manifest and the contracts are
  mutually consistent; the delta is against the pre-author text the owner
  approved. Attribution of each *substantive* statement change between the
  owner's integration pass (which the artifacts record only as the receipt above)
  and the Step-3b authoring pass is not documented anywhere I could read; the
  current authored text is the one recorded in the manifest and in the items.
- Observed tool behaviour (not an assertion about intent): `record-scope
  --decision sufficient` fails with *"Only the owner may change an owner scope
  decision"*, and every `record-item` call fails with *"Step 3a must clear for
  the item pair before item auditing"*. No `step3b-review-*` receipt exists for
  any of the 37 items.
- Remedies: (a) the owner records `proceed` for the current scope; or (b) the
  engine's `auditor-created-certifications` gate (`tools/step3-auditor-items.mjs
  certify`, or its partial form in `step3Failure`) certifies this pair's 7
  auditor-created additions against the baseline owner proceed, after which
  `scopeDecision` closes the pair as `auditor-authored`; a follow-up Step-3b pass
  must then record the 30 original items' decisions against the current hashes.
  This dispatch records nothing rather than forcing either path.
- Prepared decisions for that follow-up pass (content verified, examined
  dependencies in the checkpoints below):
  - `repaired` (3): `thm-local-lp-compactness-of-w-one-p-bounded-sequences`
    (statement: $W^{1,p}_{\mathrm{loc}}$ membership only for $1<p<\infty$),
    `ex-compactness-of-a-bounded-w-one-p-sequence-on-an-interval`
    (statement: uniform convergence only for $1<p\le\infty$),
    `cex-rellich-fails-on-rn-by-translations` (dependency repair: the B-homed
    bump example was replaced by the A-page bump lemma).
  - `escalate` (13): the direct consumers of the five still-absent batch-4
    PDE-14 suppliers and every in-pair consumer whose transitive support reaches
    one of them — exact IDs and paths in the next section.
  - `accept` (14): the remaining original items
    `cex-rellich-fails-without-uniform-tail-control`,
    `def-compactly-embedded-normed-spaces`,
    `lem-bounded-support-makes-frechet-kolmogorov-tail-control-automatic`,
    `lem-dyadic-level-set-summability-estimate`,
    `lem-fractional-level-set-kernel-measure-estimate`,
    `lem-relative-compactness-implies-uniform-translation-continuity-in-lp`,
    `lem-slobodeckij-mollification-approximation-rates`,
    `lem-slobodeckij-seminorm-controls-dyadic-level-sets`,
    `lem-translation-estimate-for-w-one-p-functions`,
    `thm-fractional-sobolev-inequality-on-euclidean-space`,
    `thm-frechet-kolmogorov-compactness-criterion-in-lp`,
    `thm-poincare-wirtinger-on-bounded-connected-extension-domains` (owner-relocated),
    `thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain`,
    `thm-rellich-compactness-from-w-one-p-zero-to-lp`.
  - The 7 additions are engine-certified (auditor-created) and need no receipt.

## Scaffold audits and repairs (recorded as found)

- `thm-local-lp-compactness-of-w-one-p-bounded-sequences` (dispatch level 2):
  the scaffold's final clause "the limit belongs to
  $W^{1,p}_{\mathrm{loc}}(\Omega)$" is **false for $p=1$** as stated. Witness:
  on $B=B(0,1)\subset\mathbb R^n$, $n\ge2$, $u_j(x)=\varphi(jx_n)$ with
  $\varphi(t)=0$ ($t\le0$), $\varphi(t)=t$ ($0\le t\le1$), $\varphi(t)=1$
  ($t\ge1$) is bounded in $W^{1,1}(B)$ but converges in $L^1(B)$ to
  $\mathbf 1_{\{x_n>0\}}$, whose distributional gradient is the surface
  measure on $\{x_n=0\}$ — not an $L^1$ function. Authored with compactness for
  all $1\le p<\infty$ and the membership clause restricted to $1<p<\infty$
  (reflexivity of $W^{1,p}$ plus weak lower semicontinuity), the $p=1$
  limitation stated in the item.
- `ex-compactness-of-a-bounded-w-one-p-sequence-on-an-interval`: uniform
  convergence claimed for $1<p\le\infty$ only; the $p=1$ failure of the
  representative route is stated with its witness in the item ($u_j=\min\{jt,1\}$
  is bounded in $W^{1,1}(I)$, has $\|u_j'\|_1=1$, and no subsequence converges
  uniformly).
- `lem-dyadic-level-set-summability-estimate` and
  `lem-fractional-level-set-kernel-measure-estimate`: explicit constants supplied
  ($C=T^{d/(d-p\theta)}$ and $c=\frac{d}{p\theta}\omega^{1+p\theta/d}$).
- B-page leaf dependencies: the five items that cited the B-homed example
  `ex-smooth-compactly-supported-bump` now cite the A-page
  `lem-euclidean-bump-for-a-compact-set-inside-an-open-set`, or drop the bump
  where it was only illustrative. No cross-page leaf dependency remains.

## Open cross-batch obligations (flagged, not hidden)

Five item-level suppliers of the batch-4 (PDE-14) draft pair are **still absent
from disk** after a fresh recheck on 2026-10-05. Two others
(`def-sobolev-conjugate-exponent`, `lem-weak-partial-derivatives-lower-sobolev-order`)
are now on disk as drafts and were inspected provisionally; their rows stay
`open` because the batch-4 dispatch is still running and may edit them. The
consumers are authored in full against the suppliers' declared claims, and their
decisions are prepared as `escalate`.

| # | Missing supplier | Direct consumer (consuming proof steps) |
|---|---|---|
| 1 | `cor-sobolev-inequality-for-w-one-p-zero` | `cor-subcritical-compactness-for-w-one-p-zero-on-arbitrary-bounded-open-sets` (steps 1.1, 2.1; uniform $L^{p^*}$ bound on differences) |
| 2 | `thm-sobolev-embedding-on-bounded-extension-domains-for-p-less-than-n` | `thm-rellich-kondrachov-for-p-less-than-n` (steps 1.1, 2.1; $L^{p^*}$ bound and interpolation) |
| 3 | `thm-critical-sobolev-embedding-into-every-finite-lq` | `thm-rellich-kondrachov-at-the-critical-source-exponent` (steps 1.1, 2.1; uniform $L^{q'}$ bound) |
| 4 | `thm-morrey-inequality-for-p-greater-than-n` | `thm-morrey-rellich-compactness-for-p-greater-than-n` (steps 1.1, 3.1; uniform $C^{0,\alpha}$ bounds, representative identity) |
| 5 | `thm-higher-order-sobolev-embedding` | `thm-higher-order-rellich-kondrachov` (step 3.1; uniform $L^{q'}$ and $C^{m,\beta'}$ bounds) |

Escalation closure (13 items) — every in-pair consumer whose transitive support
reaches one of the five absent suppliers; `<-` names the in-pair path:

- Direct: `cor-subcritical-compactness-for-w-one-p-zero-on-arbitrary-bounded-open-sets` (1),
  `thm-rellich-kondrachov-for-p-less-than-n` (2),
  `thm-rellich-kondrachov-at-the-critical-source-exponent` (3),
  `thm-morrey-rellich-compactness-for-p-greater-than-n` (4),
  `thm-higher-order-rellich-kondrachov` (5).
- Transitive: `cor-bounded-sobolev-sequences-have-strongly-convergent-subsequences` <- `thm-rellich-kondrachov-for-p-less-than-n`;
  `cor-weak-h-one-convergence-plus-compactness-gives-strong-ltwo-convergence` <- `thm-rellich-kondrachov-for-p-less-than-n`;
  `cex-critical-sobolev-embedding-is-not-compact` <- `cor-subcritical-compactness-for-w-one-p-zero-on-arbitrary-bounded-open-sets`;
  `cex-morrey-compactness-loses-the-endpoint-holder-exponent` <- `thm-morrey-rellich-compactness-for-p-greater-than-n`;
  `rem-rellich-is-a-strictly-subcritical-theorem` <- `cor-subcritical-compactness-for-w-one-p-zero-on-arbitrary-bounded-open-sets`;
  `thm-fractional-rellich-kondrachov-compactness-on-bounded-sets` <- `thm-rellich-kondrachov-for-p-less-than-n`;
  `thm-subcritical-compactness-of-the-sobolev-trace` <- `thm-morrey-rellich-compactness-for-p-greater-than-n`;
  `ex-strong-ltwo-convergence-preserves-a-normalisation-constraint` <- `cor-weak-h-one-convergence-plus-compactness-gives-strong-ltwo-convergence`.

The page-level edge (`rellich-kondrachov-and-sobolev-compactness` requires
`sobolev-poincare-and-morrey-inequalities`) stays `open`: the batch-4 pair is
still being authored. The batch-9 input's nine rows each carry a dated recheck
note; `frontier-dependency-ledger.mjs refresh` reports 21 edges touching batch 9
(9 with batch-9 consumers, each with our review row; 12 with batch-9 suppliers,
reviewed by the consumer batches), 0 orphaned reviews, and no batch without an
input. No row was marked `verified` while its supplier is unfinished.

## Published concerns

- No defective published prerequisite found among the ~100 cited published
  items; all were read at statement level and the trace/fractional interfaces
  (`thm-sharp-trace-theorem-for-w-one-p`,
  `thm-lp-trace-operator-on-a-bounded-c-one-domain`,
  `def-fractional-sobolev-space-on-a-compact-c-one-boundary`) match the
  hypotheses used here ($1<p<\infty$, bounded $C^1$ domain, $\theta=1-1/p$).
- The published Teschl source caveat recorded by the scaffold (printed Theorem
  B.15 omits the boundedness hypothesis, which the criterion needs) is carried in
  the sources of `thm-frechet-kolmogorov-compactness-criterion-in-lp`; the item
  restores boundedness and records the reading as a caveat.
- `lem-relative-compactness-implies-uniform-translation-continuity-in-lp` cites
  `thm-lebesgue-outer-measure-and-measurability-are-translation-invariant` for
  the isometry $\|\tau_hg\|_p=\|g\|_p$; that published theorem covers sets
  and measures, and the integral form is the standard substitution, stated in
  the item's fact [F4]. No published defect.
- Unrelated published debt seen while running the run-wide tools (other batches'
  draft items and their unplanned links) does not touch this pair's proofs and is
  not claimed here as fixed.

## Added suppliers (local additions)

None beyond the manifest's owner-integrated inventory: all 37 authored IDs are
the batch-9 manifest's items. No new pair, page or ID was introduced, and no
sibling row was altered.

## Checks actually run

All scoped checks below were re-run on 2026-10-05 **after the final edits** to
the 37 item paths (the item files were not modified by any subsequent step).

- `node tools/tsx-run.mjs tools/precheck.mts <37 item paths>` — **35 checked,
  0 failing — all clean**; the 2 non-applicable items are
  `def-compactly-embedded-normed-spaces` and
  `rem-rellich-is-a-strictly-subcritical-theorem` (no proof-like body).
- `node tools/rendercheck.mjs <37 item paths>` — **OK**, 37 files: no wikilink in
  math, no nested/unbalanced or multiline displays, every math span parses under
  KaTeX and every frontmatter block parses.
- `node tools/proof-layout.mjs <37 item paths>` — the mandated single batched
  run after the last edit: **37 items, 101 steps, 0 defects**.
- `node tools/content-policy.mjs research/frontier-39-analysis-30-batch-9.pages.json`
  — **37 scoped items, 0 errors, 0 warnings**.
- `node tools/proof-contract.mjs research/frontier-39-analysis-30-batch-9.proof-contracts.json --strict`
  — **37/37 items checked, 5 errors, 0 warnings**; all five are
  `citation-source-missing` for the absent suppliers 1–5 above
  (`F2`/`F3` fact links in the five direct consumers). They close when the
  supplier files land and the contracts are regenerated with the exact quotes;
  the generator is deterministic and the item bodies already carry the fact
  links.
- `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30` —
  **no error names a batch-9 item**; the run-wide exit 1 names only other
  batches' items (`lem-random-signed-dyadic-sums-have-uniform-mihlin-bounds`,
  `thm-higher-eigenvalues-by-orthogonality-constrained-minimisation`,
  `thm-well-posed-abstract-cauchy-problem-if-and-only-if-generation`).
- `node tools/coverage-checklist.mjs research/frontier-39-analysis-30-batch-9.coverage.json --require-destination`
  — prior recorded run: **2 pages, 63 harvested results, 0 errors, 0 warnings**.
  The later source-row split adds one harvested entry; this audit did not rerun
  the checklist.
- `node tools/validate-plan.mjs research/plan-spec.json` — **OK, exit 0** (the
  pre-splice note about planned pages with no item list remains, as expected at
  Step 3b).
- `node tools/depcheck.mjs` (run-wide, exit 1: 994 errors, all other batches'
  scaffolds) — the only errors naming batch-9 items are the five
  consumer↔supplier pairs of the table above.
- `node tools/fwdcheck.mjs` (run-wide, exit 1) — the only unresolved links
  contributed by this pair are the same five supplier wikilinks; the remark's
  three forward references to the companion-page witnesses are declared,
  strictly forward and closed by this pair's B page.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30`
  — refreshed and deduplicated after the dated recheck notes were added to the
  nine batch-9 rows.
- `node tools/source-fetch-check.mjs --coverage research/frontier-39-analysis-30-batch-9.coverage.json`
  — **13/13 sources fetch-verified and resolved** (the two source entries added
  during authoring carry their stamps; 0 documented drops).
- `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-9.pages.json`
  — 37 items, 0 normalized, 0 errors.
- `node tools/prosecheck.mjs library/pde/rellich-kondrachov-and-sobolev-compactness.md
  library/pde/rellich-kondrachov-and-sobolev-compactness-examples.md` —
  **2 files, 0 errors, 0 warnings** after the A page's summary was reworded from
  "three corollaries" to "three downstream consequences" (the third downstream
  item is `lem-strong-lp-closed-constraints-pass-through-rellich-limits`, a
  lemma, not a corollary).

## Repairs and specification updates

- The two statement repairs above, with the manifest entries synced to the
  authored statements.
- Dependency additions over the scaffold are all published items (e.g.
  `thm-newton-leibniz-with-interior-derivative`,
  `thm-tonelli-and-fubini-for-completed-product-measures`,
  `thm-reflexivity-of-lp-for-one-less-p-less-than-infinity`,
  `prop-measure-of-a-set-difference`,
  `lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness`,
  `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`,
  `cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences`),
  so no in-run dependency level changed; the manifest was synced field by field
  (statement, deps, `dependency_level`) for all 37 items.
- The library pages `library/pde/rellich-kondrachov-and-sobolev-compactness.md`
  and `library/pde/rellich-kondrachov-and-sobolev-compactness-examples.md` were
  created with the full item/example lists and a page summary.

## Pre-splice plan status (for Step 4)

`node tools/splice-plan.mjs --run frontier-39-analysis-30 --verify` reports the
expected pre-splice difference for this pair and no other discrepancy: the A
page has 27 manifest items against 0 plan items and the B page 10 against 0 (the
plan's per-page item lists are populated by the Step-4 splice for every page of
this run). The page-level `requires` chain
(`rellich-kondrachov-and-sobolev-compactness` requires
`sobolev-poincare-and-morrey-inequalities`; the B page requires the A page)
matches `plan-spec.json` orders 458.027/.028 verbatim. No plan or prose
amendment is requested here. Two pre-splice dependencies are *not* hidden: the
five absent PDE-14 suppliers above, and the still-unfinished batch-4 pair the
page requires; both are recorded in the batch-9 cross-batch input and in the
unified ledger.

## Open obligations at handoff

1. **Owner scope refresh (blocking the decision receipts):** the pair's current
   scope hash `f62de28d…` does not match the owner's Step-3a `proceed` hash
   `36c8311e…`. The owner must record `proceed` for the current scope, or the
   engine must run the auditor-certification path described above; then a
   Step-3b pass records the 30 original items' decisions
   (`repaired` 3 / `escalate` 13 / `accept` 14, as prepared above).
2. **Five absent PDE-14 suppliers** (table): their files, final statements, and
   choice accounting must be reconciled with the consumers' proof uses; the five
   direct consumers stay escalated, and their eight transitive consumers stay
   escalated until then.
3. **Proof contracts:** regenerate
   `...batch-9.proof-contracts.json` when the five supplier files land so that
   the five `citation-source-missing` errors are replaced by exact quoted
   evidence.
4. **Ledger rows:** keep the five absent-supplier rows `open`; the three landed
   draft suppliers' rows carry dated provisional-inspection notes and close only
   after the batch-4 dispatch finishes and the uses are re-verified.
5. No unresolved mathematical uncertainty is claimed away: the fractional
   level-set lemma's summation step is proved in-item with an explicit constant;
   the endpoint $p=n$ of the compact trace theorem and the endpoint $s=r/m$ of
   the power corollary are deliberately not claimed and are stated as such.

## Follow-up owner audit — cross-batch and source routing (2026-10-05)

The nine rows in `research/frontier-39-analysis-30-batch-9.cross-batch-dependencies.json`
were re-reviewed against the current B4 item statements and the exact B9 facts
and proof steps. All eight item edges and the declared page prerequisite are
now `verified`; the formerly missing supplier items are on disk and their
claims match the consumers. The B4 higher-order Sobolev supplier now has a
closure-wide Hölder proof using a compactly supported whole-space extension
and a fixed ambient ball for Morrey's estimate. Its B9 consumer was aligned
with the defined Hölder range by requiring `0 <= beta < 1` as well as the
Sobolev threshold. No receipt or gate was written or run in this audit.

The Laugesen Chapter 3 `§§3.10–3.11` coverage heading combined two results.
It is now split into distinct deferred rows: the Dirichlet principle goes to
`lax-milgram-and-weak-elliptic-solutions`, and discrete spectral theory goes to
`fredholm-elliptic-problems-and-the-elliptic-spectrum`. Each destination has
its own reason in the coverage record.
