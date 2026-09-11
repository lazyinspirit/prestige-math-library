# Step 5b — lead Alpha cross-batch audit and closure (`phase-2-next-20`)

- Run: `phase-2-next-20`; stage: `5b-cross`; role: lead Alpha (`5b-lead`, covers `all`).
- Date: 2026-09-11. Author: root (DeepSeek-V4.1-Flash), primary agent.
- Work list: `research/phase-2-next-20-cross-group-edges.json` (42 cross-batch item
  edges, 0 forward references, 0 post-5a changes).
- Verdicts: `research/phase-2-next-20-5b-verdicts.jsonl` (42 rows, all `accurate`,
  each with the current citing and target carrier hashes).
- Impact receipts: `research/phase-2-next-20-impact.json` (pre-author -> post-5a)
  and `research/phase-2-next-20-impact-5b.json` (post-5a -> current).
- This is not a migrated run: no `research/phase-2-next-20-checkpoint-import.json`,
  no `research/phase-2-next-20-merge-import.json`, and no
  `research/phase-2-next-20-step7-published-repairs.jsonl` exists, so no imported
  review evidence or pending Step-8 published-repair handoff had to be preserved.

## Scope of the closure

The computed work list contains 42 item-level cross-batch dependencies (23 between
different groups: 19 a -> b and 4 c -> b; 19 between batches inside a single group:
17 h -> h and 2 e -> e), no `forward_refs`, and no post-5a structural change (no
addition, removal, item, or page change relative to the post-5a baseline). Every
listed edge is a `deps` edge (none comes from `justified_by` alone).

For each edge I read the complete citing item and the complete target item's
statement, facts and proof where the cited clause is discharged, and checked the
specific clause the citing step consumes, its hypotheses and boundary cases. The
run's own frozen cross-batch review rows
(`research/phase-2-next-20-cross-batch-dependencies.json`, 46 `verified` + 1
deliberate `removed`) and the group 5a decisions
(`research/phase-2-next-20-alpha-<g>-5a-decisions.json`) were used only as
attributable prior evidence after confirming that the affected carriers are the
current ones (the `cross-group-edges` check reports 0 post-5a changes).

Disposition for every one of the 42 obligations is **accepted (accurate)**: no
repair, strike, drop, removal, reversion, page edit or item edit was made at 5b,
and no defect row was added. No blocker remains on any computed obligation.

## Edge-by-edge evidence and disposition

Group/batch crossing in brackets; "use" names the citing Fact or step that spends
the dependency, "supplied clause" the exact target clause that discharges it.
Every row's full reading note, with both current carrier hashes, is the matching
line of `research/phase-2-next-20-5b-verdicts.jsonl`.

| # | Citing item -> target | Crossing | Use | Supplied clause | Disposition |
|---|---|---|---|---|---|
| 1 | `def-carleson-operator-and-measurable-linearisation` -> `def-fourier-transform-on-l-one-of-rn` | 5->15 (a->b) | Definition: `f-hat(xi)=int f(x)e^{-2 pi i x xi}dx` | L1 transform convention on R^n, n=1 | accurate |
| 2 | `def-carleson-operator-and-measurable-linearisation` -> `def-schwartz-space-and-its-seminorms` | 5->15 (a->b) | Definition: "f in S(R) as in ..." | actual C-infinity seminorm domain, not L2 classes | accurate |
| 3 | `def-carleson-operator-and-measurable-linearisation` -> `lem-l-one-fourier-transform-is-well-defined` | 5->15 (a->b) | Definition: absolute convergence and representative independence | pointwise transform well-defined, `|f-hat|<=||f||_1` | accurate |
| 4 | `def-carleson-operator-and-measurable-linearisation` -> `thm-fourier-transform-maps-schwartz-space-continuously-to-itself` | 5->15 (a->b) | Definition: `f-hat in S` and cutoff continuity bound | F: S -> S in the same 2 pi convention | accurate |
| 5 | `def-carleson-operator-and-measurable-linearisation` -> `lem-schwartz-functions-and-all-derivatives-are-integrable` | 5->15 (a->b) | Definition: f and f-hat in L1 | p=1 endpoint (and all p) with seminorm bounds | accurate |
| 6 | `def-carleson-tiles-wave-packets-and-tile-order` -> `def-schwartz-space-and-its-seminorms` | 5->15 (a->b) | Definition: psi and phi are Schwartz; decay exponents | seminorm definition | accurate |
| 7 | `def-carleson-tiles-wave-packets-and-tile-order` -> `lem-schwartz-functions-and-all-derivatives-are-integrable` | 5->15 (a->b) | Definition: "All integrals are absolute by ..." | all Lp endpoints for weighted Schwartz derivatives | accurate |
| 8 | `def-carleson-tiles-wave-packets-and-tile-order` -> `thm-fourier-inversion-on-schwartz-space` | 5->15 (a->b) | Definition: `phi=psi-hat(-.)`, `phi-hat=psi` | everywhere inversion for Schwartz f | accurate |
| 9 | `def-carleson-tiles-wave-packets-and-tile-order` -> `thm-fourier-transform-maps-schwartz-space-continuously-to-itself` | 5->15 (a->b) | Definition: transform of Schwartz is Schwartz | F: S -> S | accurate |
| 10 | `def-carleson-tiles-wave-packets-and-tile-order` -> `thm-fourier-translation-modulation-dilation-and-reflection-laws` | 5->15 (a->b) | Definition: `phi_s-hat` formula | translation phase, modulation shift, `|det A|^{-1}f-hat(A^{-T}.)` | accurate |
| 11 | `def-real-singular-cochain-complex` -> `def-singular-cochain-complex-with-coefficients` | 9->8 (e->e) | Definition: `C^k=Hom_Z(C_k(X;Z),R)` | `C^n(X;G)=Hom_Z(C_n(X;Z),G)`, positive coboundary | accurate |
| 12 | `lem-carleson-real-line-to-torus-transfer` -> `thm-fourier-inversion-on-schwartz-space` | 5->15 (a->b) | F4, step 1.1 windowed partial-sum identity | everywhere inversion applied at `eps x` | accurate |
| 13 | `lem-carleson-signed-tree-weak-one-one-estimate` -> `thm-plancherel` | 5->15 (a->b) | F2, step 2.1 Gram vanishing | preservation of the first-variable-linear inner product | accurate |
| 14 | `lem-carleson-single-tree-estimate` -> `cor-schwartz-convolution-and-product-transform-laws` | 5->15 (a->b) | F6, step 3.3 exact scale projection | Schwartz convolution is Schwartz with product transform | accurate |
| 15 | `lem-carleson-single-tree-estimate` -> `thm-fourier-inversion-on-schwartz-space` | 5->15 (a->b) | F7, step 3.3 pointwise identification | everything-defined inversion for Schwartz f | accurate |
| 16 | `lem-carleson-single-tree-estimate` -> `thm-plancherel` | 5->15 (a->b) | F3, step 2.2 plus-tree Gram expansion | inner-product preservation | accurate |
| 17 | `lem-carleson-size-selection` -> `thm-plancherel` | 5->15 (a->b) | F3, steps 1.2/6.1 Gram vanishing | inner-product preservation and synthesis bound | accurate |
| 18 | `lem-lc-boolean-generic-truth` -> `def-boolean-valued-name-semantics` | 14->13 (h->h) | F2, steps 2.1-5.1 | prescribed I/E joins-meets and attained-value exists | accurate |
| 19 | `lem-lc-boolean-generic-truth` -> `def-forcing-name-valuation-and-generic-extension` | 14->13 (h->h) | F4, steps 2.1-5.1 | recursive valuation and `M[G]` | accurate |
| 20 | `lem-lc-boolean-generic-truth` -> `def-forcing-names-and-name-rank` | 14->13 (h->h) | F6, steps 1.2/2.1-2.2 | pair-entry namehood and name rank | accurate |
| 21 | `lem-lc-boolean-generic-truth` -> `lem-boolean-valued-semantics-is-well-defined` | 14->13 (h->h) | F3, steps 1.1/5.1 | unique internally definable fixed-formula values | accurate |
| 22 | `lem-lc-boolean-generic-truth` -> `lem-forcing-names-and-name-ranks-are-absolute` | 14->13 (h->h) | F5, step 1.1 | namehood/rank absoluteness for transitive M | accurate |
| 23 | `lem-lc-boolean-generic-zfc-and-ordinals` -> `def-boolean-valued-name-semantics` | 14->13 (h->h) | F3, steps 1.3/1.4/2.1 | internal attained-value joins | accurate |
| 24 | `lem-lc-boolean-generic-zfc-and-ordinals` -> `lem-forcing-names-and-name-ranks-are-absolute` | 14->13 (h->h) | F6, step 1.5 | rank absoluteness | accurate |
| 25 | `lem-lc-boolean-generic-zfc-and-ordinals` -> `thm-check-name-evaluation-and-generic-reconstruction` | 14->13 (h->h) | F4, steps 1.1/1.3/4.1 | `val_G(check x)=x`, `val_G(dot G)=G` | accurate |
| 26 | `lem-lc-boolean-generic-zfc-and-ordinals` -> `thm-generic-extension-transitivity-and-rank-bound` | 14->13 (h->h) | F5, steps 1.1/1.5/4.1 | transitivity and `rank(val_G(tau))<=rk_P(tau)` | accurate |
| 27 | `lem-lc-generic-boolean-ground-joins` -> `def-dense-open-sets-and-model-generic-filters` | 14->13 (h->h) | F1, steps 1.2/2.1-2.2 | M-genericity and density/Q<=p convention | accurate |
| 28 | `lem-lc-generic-evaluation-of-measurable-densities` -> `thm-check-name-evaluation-and-generic-reconstruction` | 14->13 (h->h) | F6, step 3.1 rational-cut name | check-name recovery, `M subset M[G]` | accurate |
| 29 | `lem-lc-random-algebra-preserves-cardinals-and-sets-continuum` -> `thm-generic-extension-transitivity-and-rank-bound` | 14->13 (h->h) | F7, step 1.3 rank bound | `rank(val_G(tau))<=rk_P(tau)` | accurate |
| 30 | `lem-lc-solovay-measure-on-generic-subsets` -> `thm-check-name-evaluation-and-generic-reconstruction` | 14->13 (h->h) | F5, steps 1.1-1.2 subset name | check-name evaluation and ground embedding | accurate |
| 31 | `lem-lc-solovay-measure-on-generic-subsets` -> `thm-generic-extension-transitivity-and-rank-bound` | 14->13 (h->h) | F6, step 2.2 | transitivity of `M[G]` | accurate |
| 32 | `lem-wave-packet-model-dominates-the-linearised-carleson-operator` -> `cor-schwartz-convolution-and-product-transform-laws` | 5->15 (a->b) | F3, step 3.1 `R=phi*phi`, `R-hat=psi^2` | convolution-product transform law | accurate |
| 33 | `lem-wave-packet-model-dominates-the-linearised-carleson-operator` -> `thm-fourier-inversion-on-schwartz-space` | 5->15 (a->b) | F4, step 3.1 averaged multiplier integral | everywhere inversion, 2 pi convention | accurate |
| 34 | `rem-characteristic-function-fourier-stieltjes-convention` -> `thm-fourier-transform-of-a-finite-complex-measure` | 3->15 (c->b) | Remark: `phi_mu(t)=mu-hat(-t/(2 pi))` | finite-variation transform and its convention | accurate |
| 35 | `thm-carleson-maximal-operator-is-strong-ltwo` -> `lem-schwartz-space-is-dense-in-l-two` | 5->15 (a->b) | F5, step 3.1 `1/j` approximants | density of Schwartz classes in complex L2 | accurate |
| 36 | `thm-cramer-wold-device` -> `cor-uniqueness-of-finite-borel-measures-from-their-fourier-transforms` | 3->15 (c->b) | F2, steps 1.1/2.1 | finite-variation uniqueness under AC | accurate |
| 37 | `thm-cramer-wold-device` -> `thm-fourier-transform-of-a-finite-complex-measure` | 3->15 (c->b) | F3, step 1.1 `theta=-2 pi xi` | dimension-d transform convention | accurate |
| 38 | `thm-lc-strong-compactness-product-measure-extension-interface` -> `thm-rasiowa-sikorski-with-explicit-choice` | 14->13 (h->h) | F7, step 6.1 generic filter for countable M | ZFC filter meeting countably many dense sets | accurate |
| 39 | `thm-lc-supercompact-preparation-interface` -> `def-forcing-name-valuation-and-generic-extension` | 14->13 (h->h) | F9, steps 1.1-1.8/16.1-18.1 | recursive valuation and extension sets | accurate |
| 40 | `thm-lc-supercompact-preparation-interface` -> `lem-boolean-valued-semantics-is-well-defined` | 14->13 (h->h) | F5, steps 1.3-1.8 | unique fixed-formula Boolean values | accurate |
| 41 | `thm-mayer-vietoris-sequence-in-real-singular-cohomology` -> `thm-mayer-vietoris-sequence-in-singular-cohomology` | 9->8 (e->e) | F4, step 3.2 sign comparison | AT row `b_AT=u|-v|`, positive lift-differential connector | accurate |
| 42 | `thm-uniqueness-of-a-law-from-its-characteristic-function` -> `cor-uniqueness-of-finite-borel-measures-from-their-fourier-transforms` | 3->15 (c->b) | F2, steps 1.1/2.1 | n=1 finite-variation uniqueness | accurate |

Points checked beyond the clause match, in the places where the crossings are
load-bearing:

- The Carleson -> Fourier crossings (`1-10`, `12-17`, `32-33`, `35`) all consume
  countable-choice suppliers; each citing item states AC and declares
  `def-axiom-of-choice`, and `def-countable-choice` records that AC gives
  `AC_omega` immediately, so the choice hypotheses are discharged. The packet
  transform (edge 10) was re-derived by substituting `x=c(I_s)+|I_s|u`; it yields
  exactly the displayed `|I_s|^{1/2}` factor and centered phase from the target's
  translation, modulation and `|det A|^{-1}` dilation laws.
- Edges `14-16` and `32-33` consume the Schwartz convolution, inversion and
  Plancherel/Parseval clauses on finite Schwartz families only; disjoint frequency
  supports are killed by inner-product preservation, and no global packet
  orthogonality is assumed. The exact scale projection in
  `lem-carleson-single-tree-estimate` step 3.3 was checked against the plateau
  `Theta=1` on `[0,1]` and support `[-1/8,9/8]`, including the `|I_s|<r` case.
- Edge `11` consumes the coefficient definition at `G=R`, `R=Z`, where the target's
  `C^n=Hom_Z(C_n(X;Z),G)` and positive coboundary are exactly the citing text's
  groups and `delta^k phi = phi o partial_{k+1}`.
- Edge `41` consumes the target's AT row with `b_AT=u|-v|`: the citing item's own
  row has `b=v|-u|=-b_AT`, and its step 3.2 correctly derives
  `Delta=-Delta_AT` by lifting with `-e`. I verified the two lift computations.
- Edges `18-31` and `38-40` consume the Boolean-semantics, valuation, check-name,
  absoluteness, transitivity/rank, genericity and Rasiowa-Sikorski clauses exactly
  where the citing items say they do; the two supercompact/strong-compactness items
  prove their stronger forcing/truth/lifting interfaces inline and cite the
  definitions only for the base semantics, which is what those definitions supply.
- Edge `34` and `37` were checked by the substitution `xi=-t/(2 pi)` (and
  `theta=-2 pi xi`); the sign and normalisation agree, and the remark explicitly
  keeps the target's countable-choice assertion separate from the algebraic
  convention identity.

## Impact windows

**Window `pre-author -> post-5a`** (receipt `research/phase-2-next-20-impact.json`;
reviewer `root — phase-2-next-20 Step 5b lead Alpha`): 625 changed public
interfaces, all of them items authored by this run in that window (0 pre-existing
carriers changed), and 555 affected items, every one of them also a run-authored
item of this run — no published consumer sits in the blast radius. Each of the 555
dispositions names the affected item's batch, group and page, its 5a group
decision (obligation id and decision file), its direct changed-interface citations
with channels, its transitive changed sources with a dependency path, and the
current composite carrier hash; 550 rows are `still-licensed` and 5 are `repaired`
(the run items repaired inside the window at 5a, each naming its
`defect-ledger.jsonl` row). The disposition rests on: (i) attribution — the 5a
group decision for that exact item; (ii) currency — the composite carrier
(`item_sha256`, contract and manifest) equals the post-5a snapshot, which the
`cross-group-edges` check reports as 0 changes; (iii) coverage — for the items on
the 42-edge list the exact citing clause was re-read at 5b (a -> b: edges 1-10,
12-17, 32-33, 35; c -> b: 34, 36, 37, 42; e -> e: 11, 41; h -> h: 18-31, 38-40).
This reuses prior evidence only under those three checks; it is not a new
independent review of every one of the 555 full proofs, and it is recorded as
bounded reconciliation, not certification.

**Window `post-5a -> current`** (receipt
`research/phase-2-next-20-impact-5b.json`): 0 changed public interfaces, 0 affected
items, empty dispositions. The 5b lead edited no item and no page, so this window
is closed empty with a named reviewer.

## Edits, ledger work and withdrawals

- Items, pages, manifests, contracts, plan and dependency records: **unchanged**.
  No repair, strike, drop, removal, reversion, page addition/removal or
  reading-order change was made or proposed, so no `5b-cross` defect rows exist
  and nothing needed reflowing or re-prechecking at 5b.
- `research/published-consumer-supplier-ledger.md`: **not edited and no lock
  taken**, because no new published-item defect was established in this review.
  The one open published finding that touches this run's drafts is recorded there
  and below; it was not cleared.
- `research/defect-ledger.jsonl`: unchanged by 5b; the 13 existing run rows (all
  `caught_at_stage: 5a-adjudicate`, all `disposition: fixed`) validate
  (`defect-ledger.mjs validate --run phase-2-next-20`, 0 errors).
- Frontier dependency ledger: `frontier-dependency-ledger.mjs refresh --run
  phase-2-next-20` re-runs clean; the unified ledger keeps its 47 rows (46
  `verified`, 1 deliberate `removed`) and agrees with the 42 current edges.
- No item or page is proposed for withdrawal, so there is nothing for a later lead
  to preserve in the 5b file.

## Open published debt (recorded, not cleared)

`thm-dual-and-hom-transition-functions-define-smooth-bundles` remains an open
published A-P finding (research/published-consumer-supplier-ledger.md, "Dual and
Hom bundle audit — 2026-09-11"): its proof 2.1 does not construct the smooth
total-space atlas or prove second countability, and obtaining countable
trivialising subcovers costs countable choice under the library's ZF convention.
Four drafts of this run cite the affected conclusion, each in a load-bearing way:

- `def-connection-on-a-smooth-vector-bundle` (deps) — the Hom bundle smooth
  structure used for `E`-valued one-forms;
- `prop-the-difference-of-two-connections-is-an-endomorphism-valued-one-form`
  (F3) — the fibrewise matrix transition rule;
- `def-dual-connection` (deps) — the smooth structure of `E*`;
- `lem-finite-tensor-products-of-smooth-vector-bundles` (F1) — the matrix
  transition formulas for dual and Hom bundles.

The supervising worker has authorized the choice-free local construction recorded
in `research/phase-2-next-20-hom-bundle-local-repair-plan.md` and
`research/phase-2-frontier-22-published-dual-hom-bundle-audit.md` (open quotient of
the finite-product frame space, countable base descending through a quotient) to
be installed locally after the live Step-5b lead exits. It is therefore **not**
installed or decided here; the published finding stays open, the four drafts are
not declared clear of it, and no row was added to the published ledger because the
finding is already recorded with its evidence. This is published debt for the
later repair stage, not a 5b edge blocker: none of the 42 computed edges lies on
these four dependencies.

## Gate battery (local prechecks, run on the current tree)

| Check | Result |
|---|---|
| `cross-group-edges.mjs check --run phase-2-next-20 --reconcile-plan` | 42 edges, 0 forward references, 0 post-5a changes, 0 errors; `splice-plan --verify` 44 pages over 15 manifests agree |
| `step5-scope.mjs check --run phase-2-next-20 --phase final` | 625 item(s) routed, 669 adjudication obligation(s), 0 errors |
| `step5-scope.mjs check-escalations --run phase-2-next-20` | no owner escalations |
| `impact-audit.mjs` pre-author -> post-5a | 625 changed interfaces, 555 affected, receipt validates (exit 0) |
| `impact-audit.mjs` post-5a -> current | 0 changed, 0 affected, receipt validates (exit 0) |
| `step5-close` prerequisites: `defect-ledger.mjs validate --run phase-2-next-20` | 13 rows, 0 errors |
| `validate-plan.mjs research/plan-spec.json` | exit 0 (declared page order acyclic and consistent) |
| `precheck.mts` (whole repo) | 13630 checked, 0 failing |
| `depcheck.mjs --pending-audit-ok` | exit 0 — no cycles, all references resolve (473 warnings, no errors) |
| `fwdcheck.mjs --quiet` | exit 0 — every forward reference declared and closed |
| `extcheck.mjs --quiet` | exit 0 — recorded-not-proved statements marked |
| `rendercheck.mjs` | OK — 18195 files, no malformed math/frontmatter |
| `prosecheck.mjs` | exit 0 — no positional claim contradicts the spec |
| `depsource.mjs` | 0 unresolved; 60313 deps link to a published page |
| `pathcheck.mjs` | 0 errors (34 pre-existing warnings) |
| `manifest-integrity.mjs --run phase-2-next-20` | 44 pages owed, 44 present, no scope drift |
| `coverage-checklist.mjs` (batches 1-15) | 0 errors (one warning in batch 7) |
| `content-policy.mjs` (15 manifests) | 625 scoped items, 0 errors, 0 warnings |
| `merge-proof-contracts` + `proof-contract --strict` | 553/553 items, 0 errors, 1 warning (`thm-schwartz-space-is-frechet` cites 4 of 4 declared facts at 2.1 — accepted) |
| `finite-smoke.mjs` | 0 errors, 1 check |
| `risk-report.mjs --require-reviewed` | 0 errors, 553 items routed |
| `boundary-audit.mjs --fail-on-contradicted --fail-on-template` | 0 contradicted, 0 template rows |
| `citation-fidelity.mjs --fail-on-missing-quote` | every recorded quote appears in its cited item |
| `gate-liveness.mjs --min-checks 1` | live: proof-contract 553, coverage 941 harvested, precheck 13630 |
| `url-sweep.mjs --coverage ... --fail-on-dead` | 49/49 live, 0 failed, 0 recoverable, 63 citation decisions (14 documented drops) |
| `audit-manifest.mjs` (15 manifests) | 2793 relationships over 625 items, 0 defects |
| `frontier-dependency-ledger.mjs refresh --run phase-2-next-20` | refreshed, deduplicated, 47 rows (46 verified, 1 removed) |

## Blockers and residual uncertainty

- **No blocker on any computed obligation.** All 42 edges are accurate, both
  impact windows are closed, and the Step-5 gate battery is green on the current
  tree.
- Residual mathematical uncertainty, stated honestly:
  `thm-lc-supercompact-preparation-interface` (43-step reverse-Easton iteration,
  two lifts, master condition, bounded measure descent) and
  `thm-lc-strong-compactness-product-measure-extension-interface` (finite-fragment
  consistency transfer) are long compressed arguments. For their cross-batch edges
  (39, 40, 38) I read the complete citing steps and the cited definitions, and the
  cited clauses are exactly what the inline arguments consume, but I did not
  independently formalise every global iteration, support or lift detail; that is
  the same limit the group h 5a review recorded. The Laver (1978) original remains
  unrecovered and the run carries the owner-recorded alternative-proof decision
  (`research/phase-2-next-20-laver-local-proof.md`,
  `research/phase-2-next-20-preparation-owner-completion.md`); provenance is honest
  about it and no source stamp is claimed.
- Residual published debt: the open Dual/Hom A-P finding above, with the four
  run drafts that cite it and the authorized, deferred local repair. It stays in
  the published ledger and is not cleared by this closure.
- No shared-plan or Phase-2 amendment is requested from the serial lead: no page,
  pair, item order, manifest, contract, provenance or dependency record changed at
  5b, and the 42-edge closure adds or removes no scope.

## Proof-contract repair cycle 1 — post-lead local Hom synchronization (2026-09-11)

Engine dispatch `5b-gate-proof-contract-1`
(`research/phase-2-next-20-5b-cross-proof-contract-repair-1.task.md`) reported four
`citation-quote-mismatch` errors from `proof-contract --strict` on the 555-item
merged contract. Reproduced on the current tree before editing: the same four
errors, 555/555 checked. The paragraphs above describe the state the live lead
audited; the two impact-window paragraphs in "Impact windows" are superseded by the
refreshed receipts listed below.

**Cause.** After the live lead exited, the authorized choice-free local Hom repair
(`research/phase-2-next-20-hom-bundle-repair-completion.md`,
`research/phase-2-next-20-hom-bundle-local-repair-plan.md`) rewrote
`items/def-connection-on-a-smooth-vector-bundle.md` and
`items/def-dual-connection.md` and re-routed
`items/prop-the-difference-of-two-connections-is-an-endomorphism-valued-one-form.md`
and `items/lem-finite-tensor-products-of-smooth-vector-bundles.md` through the local
interface. Four downstream contract citations and the two manifest statement copies
still carried the pre-repair Definition text, which named
`[[thm-dual-and-hom-transition-functions-define-smooth-bundles]]`:

| citing item | fact | source Definition | stale quote | current Definition |
|---|---|---|---|---|
| `thm-local-connection-forms-glue-exactly-when-they-obey-the-transformation-law` | F2 | `def-connection-on-a-smooth-vector-bundle` | 1560 chars | 6493 chars |
| `prop-adding-an-endomorphism-valued-one-form-to-a-connection-gives-a-connection` | F1 | `def-connection-on-a-smooth-vector-bundle` | 1560 chars | 6493 chars |
| `prop-induced-connections-commute-with-contraction-and-permutation` | F2 | `def-dual-connection` | 1674 chars | 1655 chars |
| `prop-levi-civita-connection-commutes-with-musical-isomorphisms` | F2 | `def-dual-connection` | 1674 chars | 1655 chars |

**Edits (no item, page, dependency or proof-step change was made at 5b).**

- `research/phase-2-next-20-batch-9.proof-contracts.json`: the four quotes replaced
  by the exact current Definition sections (verified both by the gate's normalized
  substring check and by `citation-fidelity --fail-on-missing-quote`); the five
  boundary rows `boundary-audit` flagged as template reuse received row-bound
  `template_review` records — `def-connection-on-a-smooth-vector-bundle` and
  `def-dual-connection` `iff-forward`/`iff-reverse`, and
  `prop-the-difference-of-two-connections-is-an-endomorphism-valued-one-form`
  `empty` — each binding the current whole-file guard hash and the flagged row hash.
- `research/phase-2-next-20-proof-contracts.json`: re-merged with the engine's
  numeric batch order (15 batch contracts, 555 items).
- `research/phase-2-next-20-batch-9.pages.json`: the two manifest `statement` copies
  of the repaired definitions, still the pre-repair text, refreshed to the current
  Definition sections; no other manifest field changed. `splice-plan --update`
  propagated the licensed change into `research/plan-spec.json`.
- `research/phase-2-next-20-alpha-e-5a-decisions.json`: `step5-scope.mjs stamp
  --run phase-2-next-20 --group e` sealed current composite carrier hashes (225
  decisions), including the four repaired items whose hashes the local repair had
  cleared.
- `research/phase-2-next-20-5b-verdicts.jsonl`: nine current-hash rows appended —
  four `item`/`repaired` rows for the four contract repairs with their closed
  per-item defect rows, four `item`/`accepted` rows for the four interfaces whose
  post-5a repair is accepted at 5b (their underlying defect rows are the 5a rows),
  and the required `gate`/`confirmed_nonfatal` row naming
  `p2-next20-5b-proof-contract-hom-quote-sync`.
- `research/defect-ledger.jsonl` plus the generated `DEFECT-LEDGER.md`: five closed
  `5b-cross` rows — one per repaired citation item and one gate-outcome row — all
  `disposition: fixed`, `severity: nonfatal`, `repair_confidence: 1`,
  `repair_cost: contract-sync`, each with exact item/contract evidence. Run total:
  22 rows, `defect-ledger.mjs validate --run phase-2-next-20` 0 errors.
- Impact receipts: `research/phase-2-next-20-impact.json` (pre-author -> post-5a;
  625 changed interfaces, 556 affected after the finite-tensor lemma entered the
  window) and `research/phase-2-next-20-impact-5b.json` (post-5a -> current; 4
  changed interfaces, 62 affected) were installed from the owner-operator-prepared
  per-item current-text dispositions; reviewer attribution is retained and the
  supplement sentence records the reread. Both validate at exit 0.

**Gate battery re-run on the current tree (after all edits).**

| Check | Result |
|---|---|
| `merge-proof-contracts` + `proof-contract --strict` | 555/555 items, 0 errors, 1 warning (`thm-schwartz-space-is-frechet` shotgun bracket, accepted as before) |
| `citation-fidelity.mjs --fail-on-missing-quote` | exit 0 |
| `boundary-audit.mjs --fail-on-contradicted --fail-on-template` | 0 contradicted, 0 template clusters (9 upheld by review) |
| `finite-smoke.mjs` | 0 errors, 1 check |
| `risk-report.mjs --require-reviewed` | 0 errors, 555 items routed |
| `gate-liveness.mjs --min-checks 1` | live: proof-contract 555, coverage 942 harvested, precheck 13630 |
| `cross-group-edges.mjs check --reconcile-plan` | 42 edges, 0 forwards, 0 post-5a changes, 0 errors |
| `step5-scope.mjs check --phase final` | 625 items routed, 669 obligations, 0 errors |
| `impact-audit.mjs` pre-author -> post-5a | exit 0 |
| `impact-audit.mjs` post-5a -> current | exit 0 |
| `defect-ledger.mjs validate --run phase-2-next-20` | 22 rows, 0 errors |
| `validate-plan.mjs`, `splice-plan --verify`, `manifest-integrity`, `audit-manifest` | exit 0; 44 pages over 15 manifests agree; 2799 relationships, 0 defects |
| `precheck.mts` (13630), `depcheck`, `fwdcheck`, `extcheck`, `rendercheck`, `prosecheck`, `depsource`, `pathcheck`, `content-policy`, coverage 1-15 | all exit 0 on the current tree |

**Remaining blockers and findings.**

- No blocker remains for the assigned `proof-contract` gate; the affected contracts,
  manifest, decisions, verdicts, ledger and impact receipts now agree.
- Unassigned record finding, reported not repaired:
  `cex-a-continuous-nowhere-differentiable-singular-one-simplex` (batch 9) still has
  the planning manifest statement "Every continuous real-valued singular one-simplex
  is differentiable at some interior parameter, and hence continuity alone could
  suffice for smoothness." while the item states the Takagi-path counterexample
  (continuous, nowhere differentiable). This is the same manifest-copy class as the
  two entries repaired here but lies outside this cycle's live ids; the serial lead
  should refresh it.
- Published debt unchanged: `thm-dual-and-hom-transition-functions-define-smooth-bundles`
  remains the open A-P finding; none of the four repaired drafts now cites it. The
  published-consumer ledger entry records the current supplier mapping.
