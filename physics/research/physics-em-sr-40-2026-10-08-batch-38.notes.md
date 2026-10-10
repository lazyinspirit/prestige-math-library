# Batch 38 notes — `em-empirical-tests-and-scope` / `-examples`

Run `physics-em-sr-40-2026-10-08`, role beta, Step 1 scaffold construction, 2026-10-09.
Scope: exactly one A/B pair — A page `em-empirical-tests-and-scope` (order 355) and B page
`em-empirical-tests-and-scope-examples` (order 356), category `classical-electromagnetism`,
library `physics`. Final inventory: **6 A items + 2 B items**, all eight recorded `ready`
against current dependency hashes. Written only: the batch manifest (atomic rename after
validation), the batch coverage file, this note, the consumer-batch cross-dependency input
(20 rows), the eight `step1-*` readiness records, and the tool-refreshed unified ledger. No
item file, page, shared plan, published content, engine state or verdict was edited.

Read first: `research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md` (binding; it
names no correction for this pair), the design section
`research/plan-classical-electromagnetism-track.md` L2165-L2196, the full required sources it
names (`prose-scaffold.md`, `proposed-inventory.json`, `completed-expansion-arguments.md`,
`definition-contracts.md`), the reservation rows for `def-em-experiment-record-contract`,
`exp-em-induction-report`, `exp-em-wave-propagation-report`, `exp-em-inverse-square-report`,
`pthm-em-specified-model-comparison`, `rem-em-classical-validity-limits`,
`ex-em-apparatus-model-ambiguity`, `ex-em-ideal-and-measured-fringes`, the recorded arguments
E1–E3, U2, K10 and X8, `research/plan-spec.json` entries 355/356, the current native
manifests of the supplier batches (16, 20, 23, 24, 29, 33, 36), and the three primary reading
records in `research/first-principles-2026-10-03/classical-electromagnetism/scaffold/`. The
owner reconciliations contain no correction that names this pair; the framework dictionary
used throughout is the one recorded in the fifth reconciliation (`F_0i=-E_i/c`,
`F_ij=eps_ijk B_k`, SI `mu_0 c^2 eps_0=1`), and the statistical qualifications are those of
`../PHYSICS-CONTENT-MODEL.md`.

## Design vs plan, and recorded conflicts

1. **Page metadata: no conflict.** The design reservation (L2165 ff.) and the current
   `research/plan-spec.json` entries 355/356 agree exactly on page ids, kinds, orders,
   category, library `physics`, titles, companion links and the declared `requires`
   (`em-experiment-analysis-prerequisites`, `em-material-response`,
   `em-retarded-fields-and-radiation`, `em-vacuum-waves-and-polarization`). Every added item
   dependency is homed in the transitive closure of that declaration
   (`em-primitives-and-postulates`, `em-maxwell-integral-and-constraints`,
   `em-expanded-analysis-prerequisites`, `em-experiment-analysis-prerequisites`,
   `em-vacuum-waves-and-polarization`, `em-material-response`,
   `em-retarded-fields-and-radiation` are all reached), so no page-prerequisite repair was
   needed and `validate-plan --run` reports no `undeclared-prereq` for either page.
2. **A/B counts preserved.** Design A=6 / B=2; scaffolded A=6 / B=2; far below the
   100-item cap, so no split and no escalation.
3. **Design dependency levels are superseded by the tool's whole-run labels.** The design's
   inventory labels (3, 4, 4, 4, 8, 13 for A; 9 and 4 for B) were computed against the
   research inventory graph. Recomputed against the current native manifests (design deps and
   the actually used added suppliers, with out-of-run published imports contributing level 0)
   the labels are 13, 14, 14, 14, 20, 24 for the A page and 14, 21 for the B page;
   `node tools/physics-support/item-dependency-levels.mjs check --run` shows no label
   mismatch for any batch-38 item. This is a recomputation, not a claim change.
4. **Role normalizations (recorded, no content change).** The design labelled
   `def-em-experiment-record-contract` (a definition) inside `pthm-em-specified-model-comparison`,
   `ex-em-apparatus-model-ambiguity` and `ex-em-ideal-and-measured-fringes` with
   `physical-result`, and `rem-em-radiation-reaction-limits` (a remark) inside
   `rem-em-classical-validity-limits` with `physical-result`. Neither a definition nor a remark
   is one of the established-result kinds, so those four roles are recorded as
   `formulation-prerequisite`, matching the run's convention (batch 39 did the same for
   definitions). All other design roles are unchanged (`physical-result` on the two
   physics-theorem suppliers; `physical-assumption` on `post-em-material-closure`;
   `operational-prerequisite` on the record contract inside the experiments;
   `mathematical-premise` on `thm-em-uncertainty-analysis`).
5. **Added dependencies (each genuinely used).**
   - `def-em-experiment-record-contract`: +`def-em-lab-geometry` (events/slices at which
     comparison quantities are read) and +`def-em-si-conventions` (units of the read
     quantities). Design deps `def-em-sources`, `def-em-fields` kept. Level 13.
   - `pthm-em-specified-model-comparison`: +`def-em-fixed-test-geometry` (the volume test
     geometry quantified over in clause (a)(i)) and +`def-countable-choice` (the exact
     `AC_omega` hypothesis inherited from `pthm-em-integral-maxwell` clause (a), declared in
     the statement and identified as the only choice use). Level 1+max(14,19,7,13,1,0)=20.
   - `rem-em-classical-validity-limits`: +`post-em-lorentz-coupling` (clause (d) external-force
     coupling), +`pthm-em-classical-interference` (clause (e) classical-wave interference
     statement), +`def-em-fields` (clause (a) regularity classes). Level
     1+max(23,16,17,20,8)=24.
   - `ex-em-apparatus-model-ambiguity`: +`thm-reals-ordered-field` (the field arithmetic that
     proves the ambiguity). Level 14.
   - `ex-em-ideal-and-measured-fringes`: +`def-em-plane-wave-definition` and
     `def-em-si-conventions` (data of the two beams and SI constants), +`def-cross-product-in-r3`,
     +`def-euclidean-inner-product`, +`def-complex-conjugate-real-imaginary-part-and-modulus`,
     +`cor-complex-exponential-cartesian-form-modulus-and-eulers-identity` (the explicit
     `1+e^{i pi}=0` computation), +`def-integral-over-a-measurable-set`,
     +`prop-closure-properties-of-measurable-functions-used-by-the-integral`,
     +`def-integral-of-a-nonnegative-simple-function`,
     +`prop-the-nonnegative-integral-agrees-with-the-simple-integral`,
     +`prop-order-and-scalar-rules-for-the-nonnegative-integral`,
     +`def-lebesgue-measure-and-the-lebesgue-sigma-algebra`, +`lem-of-sign-rules` (the bin
     integral and its positivity) and +`def-countable-choice` (the `AC_omega` under which the
     Lebesgue/integral interface is stated, declared and used only in clause (ii)). Level
     1+max(20,13,9,7,0,...)=21.
   No claim was added, narrowed or dropped by these additions; each entry is consumed by the
   statement, the well-definedness, or the recorded proof strategy.
6. **Title enrichments (recorded, no content change).** The three design titles
   "Actual source-backed induction/wave/inverse-square report" were made descriptive
   ("Faraday's 1831 induction experiments: reported transients and the iron-ring apparatus";
   "Hertz's 1888 finite-velocity tests: sparks, wire nodes and qualitative interference";
   "Cavendish's enclosed-globe inverse-square nulls with a sensitivity control") so a reader
   can see the source family without opening the item; the remark title was extended to
   "Classical material, point-source and mechanical regimes and the quantum exclusions". The
   definition, theorem and the two examples keep the design titles exactly.
7. **B-page closure.** The two B items depend only on the record contract, the real field
   arithmetic, the interference theorem and the plane-wave dictionary, all homed on the A page
   of this pair or earlier; no dependency reaches a B-page item, and the B page declares its own
   A page as its only requirement, with `b-requires-a` clean in `validate-plan --run`.

## Inventory decisions (recorded, not silent)

- `def-em-experiment-record-contract` (definition, level 13). The definition contract is
  preserved and made explicit as a nine-clause vocabulary: primary source with declared reading
  limits; comparison quantity and measurand built from `def-em-fields`/`def-em-sources` at
  declared events in SI units; apparatus/preparation description; finite recorded data or
  reported qualitative observations with condition annotations; calibration model `(Z,c,delta)`
  with a declared closed-box error bound and declared-missing case; uncertainty record with the
  six source labels, explicitly not a coverage or probability statement; analysis-assumption
  list with omissions recorded; interpretation separated from the data; and a well-definedness
  and scope clause (finite tuples and declared maps only, no choice principle, no sampling law,
  no measurement). A note in the statement records that the three reports' record fields are
  exactly what the vocabulary formalises.
- `exp-em-induction-report`, `exp-em-wave-propagation-report`, `exp-em-inverse-square-report`
  (experiments, level 14 each; dependency role `operational-prerequisite` on the record
  contract). E1–E3 are preserved clause by clause with the actually read locators, the reported
  observations kept separate from the authors' model-dependent inferences, and every missing
  calibration/sampling/precision detail kept missing. Each item carries the five public
  sections in its statement and an `empirical_result` with observation, uncertainty,
  conditions and the exact `source_url`; `provenance.proof: not-applicable` and no Proof
  section. Hertz's scrambled tables and Cavendish's corrupted fractions are explicitly not
  transcribed and support no numerical claim; Cavendish's art. 232 "must" is not promoted to a
  theorem.
- `pthm-em-specified-model-comparison` (physics-theorem, level 20). U2 preserved and made
  precise: (a) exact framework reference predictions — clause (a)(i) instantiates
  `pthm-em-integral-maxwell` clause (a) at a volume test geometry with identically vanishing
  charge density (zero flux, the ideal null prediction), and clause (a)(ii) reads the exact
  period-averaged plane-wave intensity from `pthm-em-wave-energy-average`; (b) the conditional
  confinement `|theta-theta0| <= (s+delta)/m` obtained by instantiating
  `thm-em-uncertainty-analysis` with `n=1`, `U=I`, `u=1`, `F=f` under the record's declared
  dictionary; (c) the full qualification that the conclusion is deterministic and conditional
  and that the three reports supply no numerically adequate premises, so no numerical
  application is asserted (U2's own scope). The three experiments are deliberately **not**
  logical premises of this theorem: they appear in no `deps` array and no
  `empirical-premise` role is declared, so no `empirical_premises` rows are needed; the
  evidence relation stays nonlogical, as `../PHYSICS-CONTENT-MODEL.md` requires.
- `rem-em-classical-validity-limits` (remark, level 24). K10's scope content preserved across
  seven clauses: continuum/regularity regime; declared material-closure branches; the
  point-source/self-field exclusions of `rem-em-radiation-reaction-limits`; external-force
  coupling; quantum exclusions with the explicit statement that classical waves interfere, so
  an interference pattern alone neither establishes a quantum description nor falsifies
  classical electromagnetism; report-backed empirical status with inherited uncertainty; and a
  status clause stating that this is a scope remark. No proof section; `provenance.proof:
  not-applicable`.
- `ex-em-apparatus-model-ambiguity` (example, level 14). X8 preserved with the exact identity,
  the distinctness/nonidentifiability clause, the explicit arithmetic instance
  `(G,s,b,delta)=(2,3,1,1)` giving `7` for both `(3,1)` and `(4,-1)`, and the scope clause
  that no apparatus, historical, dataset or probabilistic claim is made.
- `ex-em-ideal-and-measured-fringes` (example, level 21). X8 preserved and made exact: at a
  two-beam point with `alpha(x0)=0` the electric field and the electric part of the averaged
  energy density vanish while the magnetic term `|a(b1-b2)|^2/(4 mu0)` is positive; under the
  declared finite-bin model the registered rate is `R(W)=int_W(kappa|alpha|^2+b) dlambda3` and
  is positive whenever the background integral is (a positive constant background suffices),
  so a pointwise ideal zero is not the probability of a recorded event. The record-versus-
  prediction clause and the statistical qualification are kept: no criterion, sampling law,
  trial count, histogram, probability or classical/quantum discrimination is asserted, because
  the field computation supplies none of them. This is an honest limitation, not a weakened
  claim: X8 records "an adopted sampling model is a different object" and states no probability
  for failing a criterion, so none is invented here; a future declared sampling model would
  need its own suppliers.

## Axiom-of-choice declarations and exact uses

- `pthm-em-specified-model-comparison` states `AC_omega`, lists `def-countable-choice` in
  `deps` (mathematical-premise) and identifies the exact use: the volume-test divergence step
  of `pthm-em-integral-maxwell` clause (a) instantiated in clause (a)(i). No other choice use.
- `ex-em-ideal-and-measured-fringes` states `AC_omega`, lists `def-countable-choice`
  (mathematical-premise) and identifies the exact use: the Lebesgue-measure and integral
  interface of its clause (ii) (`def-lebesgue-measure-and-the-lebesgue-sigma-algebra`,
  `def-integral-over-a-measurable-set` and the integral rules). No other choice use.
- The other six items use no choice principle; `def-em-experiment-record-contract` and
  `ex-em-apparatus-model-ambiguity` are finite-tuple/field-arithmetic constructions and say so
  in their strategies. No proof or prerequisite path reaches
  `deferred-set-theory-beyond-choice`.

## Dependency verification, levels and cross-batch input

Every `deps` entry was checked against the current statement of its supplier: hypotheses,
direction, conventions and axiom strength. All in-run suppliers are scaffolded in batches
16, 20, 23, 24, 29, 33 and 36; all out-of-run suppliers are published imported mathematics
(items/), which is permitted as a purely mathematical premise. Key interfaces read in detail:
`pthm-em-integral-maxwell` (smooth branch, test-geometry class, `AC_omega`), 
`pthm-em-wave-energy-average` (period averages, plane-wave data, no statistical claim),
`pthm-em-classical-interference` (clauses (a)-(d), including the explicit "no incoherent or
statistical claim" clause), `thm-em-uncertainty-analysis` (exact hypotheses `n`, `U`, `u`,
`F(θ0)=0`, `D_uF>=m>0`, conclusion `|θ|<=(s+δ)/m`), `def-em-fixed-test-geometry` (volume
test geometry), `rem-em-radiation-reaction-limits` (clauses (a)-(d)), `post-em-material-closure`
(branches (a)-(c)), `post-em-lorentz-coupling` (clause (i) external field; self-field
excluded), `def-em-fields`, `def-em-sources`, `def-em-lab-geometry`, `def-em-si-conventions`,
`def-em-plane-wave-definition`, and the published real-algebra/measure/integral suppliers.
Tool-computed levels equal the declared labels: 13, 14, 14, 14, 20, 24, 14, 21.
`research/physics-em-sr-40-2026-10-08-batch-38.cross-batch-dependencies.json` contains 20
rows: 4 page rows (the declared `requires`) and 16 item rows, one per declared cross-batch
edge (4 for the definition, 4 for the comparison theorem, 5 for the remark, 3 for the fringes
example). After the refresh the unified ledger shows every batch-38 edge carrying a review
row, no orphaned reviews; at the time of the refresh the only batch without a review input
was 40, then still an empty manifest and now progressing under its own dispatch.

## Source harvest and stamps

Five independent treatments were read over the claimed ranges and stamped (all fetched on the
first attempt; `recovery_attempts` and `fetch_verified` recorded in the coverage file):

| source | kind | url | stamp (bytes / sha256_16) |
|---|---|---|---|
| Faraday, Experimental Researches I, First Series | monograph | https://www.gutenberg.org/files/14986/14986-h/14986-h.htm | 1 524 030 / 61a33e232f34d99c |
| Hertz, Electric Waves ch. VII | monograph | https://archive.org/download/electricwavesbe00hertgoog/electricwavesbe00hertgoog_djvu.txt | 726 019 / e64ca355422b781a |
| Cavendish, Electrical Researches arts. 217-235, 244-249 | monograph | https://archive.org/download/electricalresea00cavegoog/electricalresea00cavegoog_djvu.txt | 1 212 631 / 8c54fe399606a711 |
| JCGM 100:2008 (GUM) | reference-work | https://www.bipm.org/documents/20126/2071204/JCGM_100_2008_E.pdf | 1 888 806 / 41bbf068fbc0d798 |
| D. Tong, Electromagnetism, ch. 4 | lecture-notes | https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf | 1 882 418 / b99b41156dfe6cd9 |

All five were also re-downloaded manually and inspected in this batch: Faraday paras 6/10/11/
13/17/18-20/27-33 were located in the HTML text; Hertz's paper-rider node passage and the
author's period doubt were located in the chapter OCR; Cavendish arts. 219-235 and 244-249
were located in the degraded OCR (with the corrupted fraction pages confirmed); the GUM
clauses 2.2.3/2.3.1-2.3.6/3.1/3.2/3.3.2/4.1.1 were read in the extracted text; Tong's §4.1,
§4.1.1, §4.3.1, §4.3.2 and §4.4 were read in the extracted text. Harvest dispositions (43
rows over the two page entries): included/inline rows name the scaffolded items; the declines
are the unread volume series (Faraday), the scrambled Hertz tables, the corrupted Cavendish
computation pages and the unread manuscript articles, the unread GUM clauses 5-8/annexes, and
Tong's adjacent Chapter-4 material (with destinations `em-vacuum-waves-and-polarization` for
polarisation and energy transport, plus specific reasons). No source was dropped, so
`source_resolution` is not used anywhere in this batch.

## Checks run (actual results, 2026-10-09)

- `manifest-deps.mjs` on the batch file: 8 items, 0 missing, 0 errors.
- `content-policy.mjs --manifest-only research/<run>-batch-*.pages.json`: 461 scoped items,
  0 errors, 0 warnings on the final batch-38 manifest; re-run after batch 40's scaffold
  landed: 471 scoped items, 0 errors, 0 warnings.
- `item-dependency-levels.mjs check --run`: 471 items checked across 80 pages, maximum level
  24 (this batch's `rem-em-classical-validity-limits`), stored label equal to the computed
  label for every batch-38 item; the check reports no error. (While batch 40 was still an
  empty inventory this check reported only its two empty-inventory rows; after batch 40's
  own scaffold landed the whole-run check is clean.)
- `validate-plan.mjs research/plan-spec.json --run`: exit 0 — the pair reads 6/2 items, no
  `undeclared-prereq`, no forward or cyclic item edge, no page-cycle or order error.
- `physics-check.mjs --plan research/plan-spec.json --run`: exit 0, 0 errors, 461 items
  checked (import verification included); re-run after batch 40 landed: 0 errors, 471
  items checked.
- `coverage-checklist.mjs ... --require-destination`: 2 pages, 43 harvested results, 0 errors,
  0 warnings.
- `source-fetch-check.mjs --coverage ... --stamp`: 7/7 source entries newly stamped, 0 drops;
  check mode 7/7 resolved.
- `url-sweep.mjs --coverage ... --out /tmp/b38/url-sweep.json`: 5/5 live, 0 failed, 0 suspect.
- `rendercheck.mjs` on the eight statement bodies extracted to `/tmp/b38/check/`: OK — every
  math span parses under the real KaTeX, no wikilink inside math, no multiline display, all
  frontmatter parses.
- `manifest-integrity.mjs --run`: 80 pages owed, 80 in the manifests, no scope drift.
- `frontier-item-gate.mjs --tool extcheck --manifest-only`: 471 frontier items, 80 pages;
  27 125 items, 0 recorded-not-proved — pass.
- `url-sweep.mjs --coverage ... --recover --fail-on-dead` and `source-backing.mjs ...`:
  5/5 live, 0 failed, 0 suspect, 0 recoverable; 4 authored result(s) all still backed by an
  openable source — pass.
- `frontier-item-gate.mjs --tool validate-plan` (scoped): the only two errors are batch 40's
  own `undeclared-prereq` rows; no row concerns this pair.
- `extcheck.mjs`: 26 654 items, 0 recorded-not-proved, 0 resting on them — this batch declares
  no `proved_here: false`, `external_refs` or `forward_refs`, so the scope is vacuous here.
- `frontier-dependency-ledger.mjs refresh --run`: refreshed and deduplicated; batch 38 edge
  rows 20/20 carry review rows and 0 reviews are orphaned (at the time of this batch's
  refresh only batch 40, then still an empty manifest, was unreviewed; batch 40 is now
  progressing under its own dispatch).
- `step1-decisions.mjs check --run`: 471 items, 461 ready; all eight batch-38 items are
  closed `ready` on current hashes, and the only work rows are the ten pending readiness
  records of batch 40 (its scaffold landed during this dispatch).

## Unresolved findings

- **Sibling-batch readiness (outside this batch).** Batch 40
  (`em-scattering-and-scalar-diffraction`) landed its scaffold during this dispatch; its ten
  Step-1 readiness records were still pending and its own scoped `validate-plan` gate reported
  two `undeclared-prereq` rows for its pages (`signed-and-complex-measures-hahn-and-jordan` not
  in the closure of its declared `requires`). Both are batch-40 subjects; reported, not
  repaired.
- **`fwdcheck.mjs` pre-existing rows (outside this batch).** The tool reports 11 437
  `forward-undeclared` rows, all inside imported published mathematical items (the rows carry
  the `inherited` marker) and none on any batch-38 item or supplier pair; this batch declares
  no `forward_refs`. Recorded for the canonical ledger as an imported-mathematics condition, not
  a batch-38 defect.
- **Supplier readiness is scaffold-level.** Every supplier named here is a scaffolded manifest
  item, not yet an authored carrier; the Step-1 `ready` decisions assert that each item has a
  complete proof strategy and adequate scaffolded prerequisites, not that any supplier proof
  has been authored or independently reviewed. Step 3 supplies that review.
- **No published defect found in the examined suppliers.** None of the suppliers consumed here
  is published, so no published-publication defect could arise; the three primary reports were
  read only within their declared extents and their limitations are carried into every
  consumer. Owner/operator reconciliation and the full engine gate follow construction; neither
  a worker exit nor a readiness record is independent mathematical approval.
