# Step 1 notes — phase-2-remaining-27 batch 6

## Outcome

Constructed the single assigned pair once, in prerequisite order:

- `unbounded-self-adjoint-operators-and-stones-theorem`: 41 A items.
- `unbounded-self-adjoint-operators-and-stones-theorem-examples`: 7 B items.

All 48 items have complete statements, proof strategies, explicit `deps`
arrays, source references with locators, provenance and an axiom audit. The
canonical recorder accepted all 48 as `ready`
(`node tools/step1-decisions.mjs check --run phase-2-remaining-27` reports
`items 1006 ready 1006 closed true`); there are no owned escalations and no
`source_resolution` records, because no source had to be dropped. No
published content, shared plan, engine state, verdict or other batch file was
edited. Files written: the batch manifest, the coverage file, this note, the
cross-batch dependency input, and the 48 readiness records.

## Which design controls, and plan conflicts

The task lists three design locations; the drift evidence records all three
plus the two section headings of the controlling one.

- `research/plan-functional-analysis-track.md` **FA-21 (L1582–1664)** controls:
  it is the only location with a complete design section — source backing,
  the A inventory, the B inventory, the "hard proof and domain plan", and the
  convention pages. The task's L72 is the FA index row pointing at it.
- `research/plan-complex-analysis-track.md` L5383 is a **downstream consumer**
  mention: SC-6 `hormander-estimates-and-the-levi-problem` lists this page as an
  interface supplier. It adds no item inventory; no SC-6 obligation is built
  here.
- `research/plan-representation-theory-groups-track.md` L148 is an
  **interface-usage** row: RG cites Stone's theorem and unbounded self-adjoint
  spectral theory "only for one-parameter subgroup orientation". It likewise
  adds no item inventory.

Conflicts and resolutions, each decided in favour of the current plan or the
binding direction:

1. **Page prerequisites.** The FA-21 design names FA-6, FA-12–13, FA-17,
   FA-19–20. Current `research/plan-spec.json` gives exactly
   `spectral-measures-and-borel-functional-calculus` for order 288.087, and the
   drift review confirmed that FA-20's closure contains FA-6, FA-12–13, FA-17
   and FA-19. The exact plan `requires` array is retained; every older supplier
   actually used is declared at item level and lies in that closure.
2. **Binding item amendment (`plan-functional-analysis-track.md` §14.4, FA-21
   bullet).** All three added local helpers are present before their consumers:
   `lem-laplace-resolvents-of-a-unitary-group`,
   `lem-resolvent-star-algebra-is-dense-in-c-zero`,
   `lem-spectral-form-domain-and-core-of-a-semibounded-operator`; min–max is
   stated for a self-adjoint operator **bounded below** and uses the spectral
   form domain; the momentum example is **not** on the B page. The design's
   B item 3 `ex-momentum-operator-under-the-fourier-transform` was rehomed to
   FA-23 B by §14.4 and is already **published** there as
   `library/functional-analysis/schwartz-space-and-the-plancherel-theorem-examples`
   item `ex-momentum-operator-under-the-fourier-transform`; its removal from
   this pair is the required disposition, not scope loss.
3. **Resolvent sign convention.** The pre-run `frontier-34-fa-prereqs` batch-7
   scaffold (evidence only, not a receipt) wrote `R_T(z)=(T-z)^{-1}` and noted
   "reverse source resolvent sign". The library convention fixed by §14.4 for
   FA-17 is `R(z,a)=(z1-a)^{-1}`, which is also Williams Definition 7.29 and
   Batch-2's `def-spectrum-and-resolvent-of-a-bounded-operator`. This batch uses
   `R_T(z)=(z-T)^{-1}`; every formula that depends on the sign (Cayley
   transform, second resolvent identity, Stone-formula-type integrals,
   resolvent-convergence identities) was re-derived in that convention, not
   copied. Teschl's `(A-z)^{-1}` translation is recorded in the affected
   strategies.
4. **Cayley/extension signs.** Teschl's parameterization uses `V_1` with
   domain increment `(1-V_1)K_+` and action `A psi + i phi_+ + i V_1 phi_+`.
   The item's displayed formula `D(T_V)=D(T)+{u+Vu}`,
   `T_V(x+u+Vu)=Tx+iu-iVu` is Teschl's formula under `V=-V_1`; since
   `V -> -V` is a bijection of the unitary sets, the parameterization statement
   is correct as written and is proved directly in the strategy.
5. **Min–max source form.** Teschl Theorem 4.14 is left as Problem 4.11 and the
   printed trial dimension is the typo already flagged in the source harvest.
   The item therefore records *both* standard formulae (inf–sup over
   `n`-dimensional subspaces and sup–inf over `(n-1)`-dimensional subspaces)
   and the strategy gives the complete two-sided argument, including the
   `E_n = inf sigma_ess` exhaustion case via the Weyl criterion. No claim was
   weakened to match the printed exercise.
6. **Plan item arrays.** `plan-spec.json` still carries an empty `items` array
   for both pages; that unauthored state was not read as permission to thin the
   binding inventory.

## Dependency and proof-closure audit

Every declared dependency resolves to one of: an own item of this batch, an
item of current Batches 1–5, or a published item file. `manifest-deps`,
`content-policy --manifest-only` over all 15 manifests, and
`validate-plan.mjs` (0 errors) were re-run after the final edit.

Load-bearing chains checked at statement, hypothesis, direction and
convention level:

- domains/graphs → closed and closable operators → adjoint (Riesz) →
  `T** = closure(T)` (double orthogonal complement) → symmetric /
  self-adjoint / essentially self-adjoint, with the AC_omega inheritance
  declared on each item that uses the Hilbert adjoint or Riesz interfaces;
- resolvent (`(z-T)^{-1}`) → direct estimate `||(T-z)x||^2 = ||(T-a)x||^2 +
  b^2||x||^2` → range criterion → Cayley transform → Cayley correspondence →
  deficiency subspaces → von Neumann parameterization → existence criterion
  (full AC only for the maximal orthonormal family used to match dimensions);
- PVM truncation integral → closedness/normality → unbounded spectral theorem
  (Cayley plus the AC-based bounded PVM theorem and its uniqueness) →
  unbounded Borel calculus → spectral types → discrete/essential spectrum →
  Weyl criterion → relative compactness → Weyl's theorem, with
  Kato–Rellich supplying self-adjointness of the perturbed operator and the
  second resolvent identity supplying compactness transfer;
- unitary-group generator: Laplace resolvents (Bochner dominated convergence
  and bounded-operator commutation with the Bochner integral) → skew-adjoint
  generator → Stone's theorem; resolvent-star-algebra density in `C_0(R)`
  (one-point compactification plus the compact complex Stone–Weierstrass
  dichotomy) → continuous calculus under resolvent convergence → unitary-group
  convergence;
- semibounded form domain → min–max, with `D(A)` dense in the form norm and
  the empty-class/infinite-value conventions stated explicitly.

No dependency is forward, circular, on a B-page item, or on a *Set Theory
Beyond Choice* recorded result. The B page is a leaf: its seven items depend
only on this pair's A items, and nothing outside depends on them.
`extcheck` passes (`rc=0`).

## Choice audit

- Choice-free: the domain/graph/closed/closable definitions, Cayley transform
  algebra, resolvent definition and estimate, range criterion, relative
  boundedness, second resolvent identity, the one-point-compactification density
  argument, and the form/domain computations.
- Countable Choice (`def-countable-choice`) is declared where Riesz
  representation, the Hilbert adjoint, the double orthogonal complement, the
  bounded PVM integral, the partial-isometry characterisations, the Bochner
  dominated-convergence route, or `C_c^\infty` density of `L^p` are used.
- Full AC (`def-axiom-of-choice`) is declared on the unbounded spectral
  theorem, the Borel calculus downstream of it, Stone's theorem, the spectral
  types, Weyl's theorem, the min–max principle and the multiplication-operator
  examples, exactly where the bounded normal spectral theorem, its uniqueness,
  the maximal orthonormal family or the Lebesgue decomposition supply AC.
- Dependent Choice is declared only on the two items that use the published
  absolutely continuous integration-by-parts/FTC suppliers
  (`cex-symmetric-need-not-be-self-adjoint` and the examples that build on
  `L^2(0,1)`) and on
  `cex-an-everywhere-defined-closed-operator-on-a-banach-space-cannot-be-unbounded`
  through `thm-closed-graph-theorem`.
- No item infers arbitrary-index choice from finite choice or DC, and no
  incompatible-axiom branch is consumed.

## Cross-batch dependencies

`research/phase-2-remaining-27-batch-6.cross-batch-dependencies.json` carries
20 reviewed `verified` rows: one page edge to the Batch-5 FA-20 page and 19
exact item edges into current Batch-1/2/4/5 suppliers
(`def-hilbert-space`, `thm-riesz-representation-for-hilbert-space`,
`thm-hilbert-adjoint-properties`,
`thm-double-orthogonal-complement-is-closure`,
`thm-existence-of-a-maximal-orthonormal-family`,
`thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set`,
`def-compact-linear-operator`,
`lem-compositions-with-a-compact-operator-are-compact`,
`thm-compact-operator-sends-weakly-convergent-sequences-to-norm-convergent-sequences`,
`lem-neumann-series`, `def-projection-valued-measure`,
`thm-pvm-integral-is-a-star-homomorphism`,
`thm-spectral-theorem-for-bounded-normal-operators-pvm-form`,
`thm-support-and-uniqueness-of-the-spectral-measure`,
`thm-multiplication-operator-form-of-the-bounded-normal-spectral-theorem`,
`thm-partial-isometry-characterizations`). Each row states the required
claim and its use and says explicitly that the supplier is current in-run
scaffold evidence, not publication. The unified frontier ledger was refreshed
with the repository tool; `--require-reviewed` passes with 0 unreviewed edges
and 0 orphaned reviews. No new prerequisite pair and no cross-batch change is
required.

## Interface observation recorded for the Step-3 authors (not a blocker)

Batch 5's `thm-stone-resolvent-formula-for-spectral-projections` states its
formula with `(T-(t±iε))^{-1}`. In this batch's convention
`R_T(z)=(z-T)^{-1}` the same identity reads
`(2πi)^{-1}∫_a^b[R_T(t-iε)-R_T(t+iε)]dt -> E((a,b))+(E({a})+E({b}))/2`.
The Batch-5 statement is mathematically correct in its own sign convention and
is not consumed by any item on this page, so it is not a defect and does not
block this scaffold; it is recorded so Step 3 can align the two pages'
notation if the owner wants one convention throughout the FA block.

## Sources, harvest and fetch evidence

Seven coverage source rows over four independent treatments:

- Dana P. Williams, *Lecture Notes on the Spectral Theorem*, complete section
  §7 pp.28–39 (lecture notes).
- Gerald Teschl, *Mathematical Methods in Quantum Mechanics*, 2nd ed., the
  ranges §2.2, 2.4–2.6, 3.1, 3.3, 4.4, 5.1, 6.1, 6.4, 6.6 (textbook).
- Roland Schnaubelt, *Evolution Equations*, §1.1 pp.5–13 (lecture notes).
- Theo Bühler and Dietmar A. Salamon, *Functional Analysis*, Chapter 6
  §6.1–6.5 pp.305–353 (textbook; statement-level cross-check of the chapter's
  numbered results, including the Cayley transform, spectral measure
  uniqueness and the compact-resolvent definition).

The Teschl, Williams and Schnaubelt ranges were read in full for the results
they back, and the proofs used for the spectral theorem, Stone's theorem,
Kato–Rellich, Weyl's theorem, resolvent convergence and min–max were read in
the sources before the strategies were written. The Bühler–Salamon harvest is
statement-level; no complete proof of that text is claimed, and the
instruction to prefer complete arguments is satisfied by the three treatments
read in full.

`node tools/source-fetch-check.mjs --coverage research/phase-2-remaining-27-batch-6.coverage.json --stamp`
reports **7/7 source(s) fetch-verified, 7 newly stamped** and **7/7 resolved**;
the coverage file now carries the `fetch_verified` stamps. The coverage file
disposes 54 harvested headings: 37 `included`, 15 `inline`, 2 `out-of-scope`
with specific reasons; there are no `deferred` rows and no source drops.

## Checks run (actual results)

| check | result |
|---|---|
| `manifest-deps.mjs` (batch 6) | 48 item(s), 0 missing, 0 error(s) |
| `manifest-deps.mjs` (all 15 manifests, the gate form) | 1006 item(s), 0 missing, 0 error(s) |
| `coverage-checklist.mjs --require-destination` (batch 6) | 2 page(s), 54 harvested, 0 errors, 0 warnings |
| `content-policy.mjs --manifest-only` (all 15 manifests) | 1006 scoped items, 0 errors, 0 warnings |
| `manifest-integrity.mjs --run phase-2-remaining-27` | 54 pages owed, 54 in the manifests, no scope drift |
| `frontier-dependency-ledger.mjs refresh --require-reviewed` | refreshed; 0 unreviewed edges, 0 orphaned reviews |
| `step1-decisions.mjs check --run phase-2-remaining-27` | 1006 items, 1006 ready, closed: true |
| `extcheck.mjs` | OK, every recorded-not-proved statement is a cited remark |
| `validate-plan.mjs research/plan-spec.json` | OK — acyclic and consistent; the 10 earlier `undeclared-prereq` failures are gone |
| `source-fetch-check.mjs --stamp` | 7/7 fetch-verified, 7/7 resolved |
| `drift-review-check.mjs --run phase-2-remaining-27` | 27 pages reviewed, 0 spec edits, no blocked edges |

| `url-liveness` / `source-backing` (engine-owned artifacts) | not run here: they read `research/phase-2-remaining-27-url-liveness.json`, which the engine writes at gate time; every URL this batch cites was separately fetch-verified with full text above |

Not runnable at Step 1 and deferred to Step 3 by design: item-mode
`content-policy`, `precheck`, `depcheck`, `rendercheck` and `level-coverage`
(the item files do not exist before Step 3). No gate that could run against
this batch at Step 1 was left red, and no unresolved finding is being carried
silently: the only non-blocking observation is the interface note above.

## Escalations

None. No source required a drop or an owner escalation; no page split is
required (largest A page 41 items, below the 60-item ceiling); no new
prerequisite pair is requested.
