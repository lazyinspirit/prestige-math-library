# Step 5a adjudication — group d, run `phase-2-remaining-27`

Group `d` covers batches 7 (Brownian motion: Markov, hitting, path properties),
8 (the Ito integral, Ito's formula, Brownian martingales) and 6 (unbounded
self-adjoint operators and Stone's theorem), all three in-flight drafts of this
run. `research/phase-2-remaining-27-alpha-d-5a-decisions.json` carries the 53
routed decisions; this report records the evidence, the repairs and the local
checks. No judge, stamp or stage transition is issued here.

## Routed obligations

The scope files route exactly these obligations, and each one is decided:

- batch 7: 6 `touched` carriers and the 8 refuter findings (`refuter:7:1..8`);
- batch 8: 7 `touched` carriers, 2 reader findings (`reader:8:1`, `reader:8:2`)
  and the 8 refuter findings (`refuter:8:1..8`);
- batch 6: 11 `touched` carriers and the 11 refuter findings
  (`refuter:6:1..11`).

No page was touched in any of the three batches (`pages_touched` is empty), and
no item was added or removed. Reader findings existed only in batch 8.

## Method and inputs

For every obligation I read the current carrier (statement, facts and the
steps carrying the claim), the reader report for its batch
(`research/phase-2-remaining-27-reader-{6,7,8}.md`), the reader findings file
(`...-reader-findings-{6,7,8}.json`), the refuter report
(`research/phase-2-remaining-27-refute-{6,7,8}.json`) and the cited
dependencies. The pre/post reader snapshots
(`research/phase-2-remaining-27-step5-hash-{6,7,8}-{pre,post}.json`) were
compared componentwise (item, contract, manifest) for every touched carrier, and
the refuter's `observed_sha256` was confirmed to match the pre-adjudication
carrier for all 27 findings. Every claim in a finding was re-derived or
counter-checked before a verdict was recorded; where a source was needed it was
fetched and read (see Sources).

## Batch 7 — verdicts and repairs

Touched carriers (6): all verified against the reader's report.

- `lem-planar-brownian-annular-exit-probability` — **amended_repair**. The
  reader's step 1.1 continuity witness and the `[F3]` typo fix are correct; the
  step 1.2 Hermite splices, however, were only `C^0` (inner splice
  `psi'(eps/2+)=2/eps` against `0` on `[0,eps/2]`; outer `psi'(2R-)=1/(2R)`
  against `0` on `[2R,infinity)`), while steps 1.3, 2.2, 3.1 and 4.1 consume a
  bounded `C^2` radial function. Amended to splices matching value, first and
  second derivative at all four joints.
- `thm-brownian-paths-are-not-holder-of-order-one-half-on-any-interval` —
  **amended_repair** (accepted in substance). The reader's `C'=ceil(max(C,1))`
  repair is correct; the carrier hash differs from the reader snapshot only by
  the recorded `risk_review` audit enrichment, which is why the decision is not
  `accepted_repair`.
- `thm-brownian-zero-set-has-no-isolated-points` — **amended_repair**. The
  reader's stopping-time rewrite is correct; steps 1.2/2.2 were additionally
  rewritten (see `refuter:7:5`, `refuter:7:6`).
- `thm-brownian-positive-occupation-proportion-has-the-arcsine-law` —
  **amended_repair** (accepted in substance): endpoint repair verified,
  `arcsin 1 = pi/2`.
- `ex-brownian-path-p-variation-threshold` — **amended_repair**: reader's
  per-deterministic-time repair verified, plus the continuity observation
  required by `refuter:7:7`.
- `cex-fixed-time-nondifferentiability-does-not-prove-nowhere-differentiability`
  — **amended_repair**. The Takagi-based witness was verified in full
  (`G(s)=s^2T(s)` continuous, differentiable at `0` with derivative `0`,
  nowhere else differentiable because `T=G/s^2`; each path differentiable
  exactly at `t=omega`), and the stale manifest statement/deps/strategy were
  synchronised.

Refuter findings (8): `refuter:7:1` fatally confirmed (splice smoothness,
repaired); `refuter:7:2` nonfatal confirmed (`B_{S_1}=D_1` false; step 5.1 and
Example item 3 corrected); `refuter:7:3` nonfatal confirmed (backwards
containment in the filtration definition, part (b) corrected); `refuter:7:4`
nonfatal confirmed (`h=s+t-u>=0` false for `u>s+t`; step 3.1 now uses the tower
property only); `refuter:7:5` and `refuter:7:6` nonfatal confirmed (zero-set
step 2.2 inclusion and step 1.2 raw-germ membership; both rewritten around the
raw-germ events `G_+-`); `refuter:7:7` nonfatal confirmed (rational versus real
`limsup`; continuity observation added); `refuter:7:8` nonfatal confirmed
(missing almost-sure finiteness supplier; `[F4]` added and the dependency
declared in the item and the manifest).

## Batch 8 — verdicts and repairs

Touched carriers (7):

- `cor-brownian-filtration-local-martingales-have-continuous-versions` —
  **reviewed_no_defect** with `change_kind: metadata`: the reader changed the
  van der Vaart source URL only, no mathematical text, and no defect row is
  owed.
- `def-quadratic-covariation-of-brownian-ito-processes`,
  `ex-integral-of-brownian-motion-against-itself-preview`,
  `ex-ito-formula-for-brownian-powers`, `thm-localized-ito-integral`,
  `thm-quadratic-covariation-of-brownian-ito-processes` — **amended_repair**:
  each reader repair was verified sound and retained; the carrier differs from
  the reader snapshot only by the recorded `risk_review` audit enrichment, and
  the closed reader-repair row is named from the decision.
- `thm-stopping-an-ito-integral` — **amended_repair**: the reader's canonical
  localising sequence `rho_k=tau_k` was verified; Alpha additionally rewrote the
  stale source note (`refuter:8:6`).

Reader findings: `reader:8:1` confirmed fatal — step 4.1 of
`thm-brownian-filtration-martingale-representation` asserted the backwards
inclusion `F^0_{T+} subset F^0_T` and never supplied the completion, so the
`L^2` clause was not established. Repaired by a complete completion argument:
`W_m=E[Z|F^0_{T+1/m}]=Z` a.s. by `[F4]`, Levy downward convergence gives an
`F^0_{T+}`-measurable version, a second downward application plus the product
identification of the shifted process and Blumenthal's zero-one law shows the
germ adds only null sets, and step 3.1 forces `Z=0`. New facts `[F9]`-`[F12]`
and dependencies were declared (`thm-levy-downward-convergence-of-conditional-expectations`,
`thm-blumenthal-zero-one-law`, `def-germ-sigma-algebra-at-zero`,
`thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`,
`def-wiener-measure-on-continuous-path-space`), the batch manifest was
synchronised, and `refuter:8:1` reported the same defect independently.
`reader:8:2` confirmed nonfatal — step 3.1 cited `[F7]` for monotone
convergence; the correct fact is `[F4]`, now cited.

Refuter findings: `refuter:8:3`, `refuter:8:4` and `refuter:8:5` fatally
confirmed (`rho_c <= T` makes `rho_c up to infinity` false; `[F7]` and step 6.1
of the three Ito formulas now state `rho_c up to T` with the finite
running-maximum justification); `refuter:8:6` nonfatal confirmed (stale source
note); `refuter:8:7` nonfatal confirmed (clause 2 displayed `f(t,B_t)` and an
untruncated integrand outside the open set `U`; now truncated by
`t wedge tau_U` and `1_{[0,tau_U)}`); `refuter:8:8` nonfatal confirmed against
the source document itself — the PDF at the recorded URL is A.W. van der Vaart,
*Martingales, Diffusions and Financial Mathematics* (preliminary notes, 188 pp;
title page read locally), not *Stochastic Integration and Differential
Equations*. The routed carrier's title is corrected.

## Batch 6 — verdicts and repairs

Touched carriers (11):

- `lem-second-resolvent-identity-for-closed-operator-perturbations` —
  **accepted_repair**; the carrier is byte-identical to the post-reader
  snapshot, and the corrected identity
  `R_C(z)-R_A(z)=R_A(z)BR_C(z)=R_C(z)BR_A(z)` (for `B=C-A`) is the one the
  Weyl-invariance and Kato-Rellich items consume.
- `def-relative-compactness-with-respect-to-an-operator` — **amended_repair**
  (reader's clause 1/4 convention fixes verified; clause 2 amended, see
  `refuter:6:1`).
- `def-symmetric-self-adjoint-and-essentially-self-adjoint` and
  `def-discrete-and-essential-spectrum-of-a-self-adjoint-operator` —
  **amended_repair**: the reader's density and finite-dimensional-reduction
  repairs are correct; Alpha additionally removed the contract derivations that
  named nonexistent numbered steps (`step-entry-step-missing` for
  `d-1.1..d-1.4` and `d-1.1..d-2.1`), so the strict contract gate now passes.
- `thm-kato-rellich` and `thm-weyl-essential-spectrum-invariance` —
  **amended_repair**: reader repairs verified and extended
  (`refuter:6:7`, `refuter:6:2`).
- `ex-unbounded-multiplication-operator-and-its-domain`,
  `lem-laplace-resolvents-of-a-unitary-group`,
  `thm-self-adjointness-range-criterion`,
  `thm-unbounded-borel-functional-calculus`,
  `thm-von-neumann-self-adjoint-extension-parameterization` —
  **amended_repair**: reader repairs verified and retained; the carriers differ
  only by the recorded `risk_review` audit enrichment.

Refuter findings: `refuter:6:1` fatal confirmed and repaired (clause 2 sign:
`BR_A(z)=BR_A(w)+(w-z)BR_A(w)R_A(z)`; counterexample `A=0, B=I, z=2, w=3`
rechecked); `refuter:6:2` fatal confirmed and repaired (`[A2]` plus sign and the
step 1.1/2.1 transfer); `refuter:6:3` fatal confirmed and repaired
(`C^*=I+2i(T-i)^{-1}=(T+i)(T-i)^{-1}`); `refuter:6:4` fatal confirmed and
repaired (`<x,f(E)x>=int conj(f) dE_x`); `refuter:6:5` fatal confirmed and
repaired (bulk term `+i int f conj(g')`); `refuter:6:6` fatal confirmed and
repaired (both outer factors bounded by `1+|z'-z|/|Im z'|`); `refuter:6:7`
fatal confirmed and repaired (finiteness of `t -> inf sigma(S_t)` now obtained
from a large enough `lambda`, after which concavity, continuity and the
downward-jump dichotomy are licensed); `refuter:6:8` nonfatal confirmed and
repaired (`g=iH+conj(ic)`); `refuter:6:9` nonfatal confirmed and repaired
(`q_A` is `c`-independent; it is the summand that shifts); `refuter:6:10`
nonfatal confirmed and repaired (unitaries of modulus `1/e` versus boundary
phases of modulus one); `refuter:6:11` nonfatal confirmed and repaired (padding
the test space when `E_{n-1}=Lambda`).

## Sources consulted

- G. Teschl, *Mathematical Methods in Quantum Mechanics*, 2nd ed., §6.1,
  pp. 157-160 (PDF fetched from the item's recorded URL and read with PyMuPDF):
  Lemma 6.3 (6.2)-(6.3), Theorem 6.4 (Kato-Rellich) with its proof and Lemma
  6.5 (second resolvent formula). These fixed the sign conventions used in
  `lem-second-resolvent-identity...`, `thm-weyl-essential-spectrum-invariance`,
  `def-relative-compactness...`, `thm-kato-rellich` and
  `lem-resolvent-star-algebra...`; note that Teschl writes `R_A(z)=(A-z)^{-1}`,
  the opposite of the library convention, which is exactly the source of the
  reader's and the refuter's sign findings.
- A.W. van der Vaart, *Martingales, Diffusions and Financial Mathematics*
  (preliminary notes, 188 pp), title page read locally after fetching
  `https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf` — the
  evidence for `refuter:8:8`.
- The in-run suppliers were read in their current form wherever a repair
  consumes them: `def-natural-and-usual-augmented-brownian-filtrations`,
  `thm-blumenthal-zero-one-law`, `def-germ-sigma-algebra-at-zero`,
  `thm-levy-downward-convergence-of-conditional-expectations`,
  `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`,
  `def-wiener-measure-on-continuous-path-space`,
  `cor-one-dimensional-brownian-motion-hits-every-point-almost-surely`,
  `thm-localized-ito-integral`, `thm-stopping-an-ito-integral`,
  `thm-ito-formula-one-dimensional`, `thm-ito-integral-process-has-a-continuous-martingale-version`,
  `def-relative-boundedness-with-respect-to-an-operator`,
  `def-resolvent-and-spectrum-of-a-closed-unbounded-operator`,
  `lem-neumann-series`, `thm-self-adjointness-range-criterion`,
  `thm-self-adjoint-resolvent-estimate`, `lem-compositions-with-a-compact-operator-are-compact`.

## Published-content ledger

No defective published item was found in group d. All 43 distinct carriers
named by the routed obligations (touched, flagged, reader and refuter) are
`status: draft`; the published items that appear are suppliers and were read at
statement level with no finding. `research/published-consumer-supplier-ledger.md`
therefore needed no new entry, and no lock was taken.

## Repairs, ledger rows and contract work

- 53 closed defect rows were appended with `node tools/defect-ledger.mjs append`
  (`caught_at_stage: 5a-adjudicate`): 15 for batch 7, 16 for batch 8, 22 for
  batch 6. `validate --run phase-2-remaining-27` reports 166 rows, 0 errors.
- Contracts: the three batch contracts were regenerated for the changed items
  (`tools/regen-contract-entries.mjs`), three definition entries whose
  derivations named nonexistent steps were cleared, and the entry for
  `rem-self-adjoint-extensions-and-deficiency-indices` was corrected where its
  boundary reason still described the old phrasing.
- Manifests: the batch-7 manifest was synchronised for
  `cex-fixed-time-nondifferentiability-does-not-prove-nowhere-differentiability`
  (statement, deps, strategy), for the new
  `cor-one-dimensional-brownian-motion-hits-every-point-almost-surely`
  dependency of `ex-exit-side-probability-from-an-interval`, and for the `[F9]`
  dependency of `thm-brownian-zero-set-has-no-isolated-points`; the batch-8
  manifest was synchronised for the representation item's new dependencies.
  `node tools/manifest-deps.mjs` reports 0 errors on both files and group d
  manifests have no set mismatch between manifest and item dependencies.
- Cross-batch ledger: two new rows
  (`thm-brownian-filtration-martingale-representation` -> `thm-blumenthal-zero-one-law`
  and -> `def-germ-sigma-algebra-at-zero`) were added to
  `research/phase-2-remaining-27-batch-8.cross-batch-dependencies.json` and
  `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-remaining-27`
  was run.
- Every changed item was reflowed (`tools/reflow.mts`) and prechecked
  (`tools/precheck.mts`); the changed carriers pass.

## Risk reviews

`node tools/risk-report.mjs` reports 45 high/critical items in batch 6, 52 in
batch 7 and 56 in batch 8. A complete `risk_review` was recorded for every one
of them (153 rows, via `tools/apply-risk-reviews.mjs`), each naming the
risk-signal loci read, the independent reader/refuter evidence and the specific
check made; `--require-reviewed` then reports 0 errors on all three contracts.
These are local mathematical reviews, not independent judgments.

## Local checks

- `tools/proof-contract.mjs --strict`: batch 6 0 errors, batch 7 0 errors
  (2 pre-existing nonfatal shotgun-bracket warnings), batch 8 0 errors.
- `tools/risk-report.mjs ... --require-reviewed`: 0 errors on all three
  contracts, 48/57/56 items routed.
- `node tools/tsx-run.mjs tools/precheck.mts` (repo-wide): 16024 checked, 2
  failing — `lem-solovay-almost-disjoint-extension-under-ma` (`forward-ref-4.1`)
  and `thm-shelah-ch-omega-one-sweet-construction` (auto-repair form), both in
  group e's batches 15/14 and neither touched by group d.
- `tools/depcheck.mjs`: no cycle, no unresolved reference, no draft on a
  published page; none of the reported `cited-not-in-deps` notices names a
  group-d carrier.
- `tools/fwdcheck.mjs --quiet`, `tools/prosecheck.mjs`,
  `tools/depsource.mjs` (0 unresolved), `tools/rendercheck.mjs` (all files
  clean after the one-line display fix in
  `thm-space-time-harmonic-functions-yield-brownian-local-martingales`) and
  `tools/extcheck.mjs` all pass. `tools/audit-manifest.mjs` over the run's 15
  manifests reports 8344 relationships and 16 defects, none in batches 6, 7
  or 8.
- `tools/step5-scope.mjs check --run phase-2-remaining-27 --phase adjudicate`:
  0 errors involve a group-d obligation. The same run reports 114
  `decision-stale` errors, all in other groups (batches 1-5, 9, 10, 14, 15);
  those decisions are stale with respect to their own carriers and are not
  group d's to repair.

## Unresolved findings reported honestly

1. **Van der Vaart title, 15 further carriers.** `refuter:8:8` is fixed only in
   the routed carrier. The same wrong title ("Stochastic Integration and
   Differential Equations" for the URL of *Martingales, Diffusions and
   Financial Mathematics*) remains in
   `lem-cross-ito-isometry`, `def-progressively-measurable-and-predictable-process`,
   `lem-adapted-continuous-processes-are-progressively-measurable`,
   `lem-elementary-ito-integral-is-independent-of-the-step-representation`,
   `thm-density-of-elementary-predictable-processes-in-predictable-l2`,
   `thm-ito-integral-process-has-a-continuous-martingale-version`,
   `def-ito-integral-for-square-integrable-predictable-processes`,
   `lem-general-ito-integral-is-independent-of-the-approximating-sequence-and-ae-representative`,
   `thm-stopping-an-ito-integral`,
   `def-locally-square-integrable-predictable-brownian-integrand`,
   `thm-localized-ito-integral`,
   `thm-quadratic-variation-of-an-ito-integral`,
   `ex-covariance-of-two-deterministic-ito-integrals`,
   `cex-pathwise-riemann-stieltjes-integration-does-not-construct-the-brownian-ito-integral`
   and `cex-product-measure-ae-equality-is-not-pointwise-equality-of-integrands`.
   Repairing them was not part of the routed obligation and would create 15
   late-carrier obligations for 5b; the owner or the 5b lead should authorise a
   single mechanical title sweep.
2. **Repo-wide precheck conditions outside group d.** The two failures above
   (group e's batches) will fail the stage's repo-wide `precheck` gate; they
   are not caused by group d and were not edited here.
3. **Other groups' stale decisions.** 114 `decision-stale` errors in the
   routing check name other groups' obligations; group d's 53 decisions are
   current (all `subject_sha256` re-verified against the live carriers after the
   last edit).

## Blockers

None for group d: every routed obligation is decided, every confirmed defect is
repaired with a closed ledger row, no escalation is open, no withdrawal is
proposed, and no published item was edited or found defective. The next action
belongs to the engine (stamping and the gate battery) and to the owner for the
three cross-cutting items above.
