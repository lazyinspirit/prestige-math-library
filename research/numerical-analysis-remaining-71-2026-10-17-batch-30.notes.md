# Batch 30 — authoring notes

## Inventory and dependency order

The controlling PE01 design is `research/plan-numerical-spatial-track.md` L247–267.
Batch 30 owns two pages, with 25 A-page items and five B-page examples (30
carriers total). The A-page item graph is acyclic and has local levels 0–8;
the B-page examples have levels 2–7. The exact inventory, direct `deps`, and
per-item `dependency_level` labels are in
`research/numerical-analysis-remaining-71-2026-10-17-batch-30.pages.json`.
Levels count only in-run logical suppliers. Published prerequisite items remain
external context and do not raise the local item level.

The proofs add local intermediate items before their consumers: smooth simple
eigenpairs, weak Rankine–Hugoniot jump equivalence, local rarefaction fans,
augmented shock curves, LD contacts, C1 mixed wave curves, the Euler
wave-pressure response formulas, and the exact-pressure root/vacuum result.
The exact pressure procedure has a separate finite-budget bracket invariant and
termination proof. No result depends on an unproved or open-problem supplier.

## Plan comparison and prerequisite disposition

The PE01 prose design calls `nonlinear-equations-and-newton-methods` a planned
same-frontier NA-09 interface. The assigned task and current `plan-spec.json`
both declare that page as PE01's prerequisite, while the actual page carrier is
published and the generated batch-30 scheduling row lists no in-run prerequisite
batch. I read the current published A page, B page, boundary example,
`alg-finite-budget-newton-for-vector-residuals`, its scalar correction supplier,
and its finite-work lemma. The authored pressure routine uses only the actual
finite-budget Newton procedure with $F=\Phi$ on $(0,\infty)$, zero residual
tolerance, and a one-update budget; it checks the returned status and accepts a
Newton proposal only in the bracket's central quarter. It proves its own
bracket invariant and finite termination from that procedure and the scalar
correction definition. The separate published finite-work lemma currently has
`verification.precheck: pending`; it is not used as a premise. This status is
reported to the owner for the supplier's own maintenance; the assigned claims
do not rely on its acceptance.

`plan-spec.json` leaves PE01's item list empty, as expected for this initial
authoring frontier; the controlling design supplies the full claim scope. No
design result was removed. The current batch-dependency artifact records batch
30 at level zero with no in-run prerequisite batch, consistent with the
published supplier. Its input hash now predates the authored inventory, so the
owner must regenerate the shared run-wide batch-level file after the authoring
writers drain. The shared artifact was not edited.

## Sources read and harvested

1. **Alberto Bressan**, *Hyperbolic Conservation Laws: An Illustrated Tutorial*,
   full 81-page lecture notes,
   <https://yulia-petrova.github.io/teaching/shocks/Bressan-tutorial.pdf>.
   Read §§2.2–2.3 (printed pp. 13–15) and §§3.3–3.4 (printed pp. 24–29),
   including the augmented shock-curve argument, Lax directions, elementary
   waves, and wave-composition inverse-function argument. It supports the
   local-system definitions and construction. Its statement that technical
   details are omitted is handled by complete local proofs, not by treating the
   source as proof evidence.
2. **Randall J. LeVeque**, *Numerical Methods for Conservation Laws*, complete
   228-page book,
   <https://tevza.org/home/course/modelling-II_2016/books/Leveque%20-%20Numerical%20Methods%20for%20Conservation%20Laws.pdf>.
   Read Ch. 6 §6.5; Ch. 7 §§7.1–7.6; Ch. 8 §§8.1–8.3; Ch. 9 §§9.1–9.2;
   Ch. 13 §13.2; and Ch. 14 §§14.1–14.2.2. It supports the local elementary
   wave framework, Euler contacts and pressure reduction, Godunov flux, Roe
   property, and the sonic expansion-shock warning.
3. **David I. Ketcheson, Randall J. LeVeque, and Mauricio J. del Razo**,
   *Riemann Problems and Jupyter Solutions*, complete HTML chapter,
   <https://www.clawpack.org/riemann_book/html/Shallow_water_approximate.html>.
   Read the Roe solver/entropy-fix sections and the HLL derivation and
   implementation (HTML lines 15–23, 155–170, and 365–427). The HLL two-wave
   construction and speed-enclosure warning are harvested; shallow-water-only
   speed recipes, positivity claims, and an entropy-fix procedure are
   specifically out of scope. The general HLL algebra is proved locally.

All harvested result names and dispositions are recorded in the batch coverage
file. Retrieval history: the official Bressan Penn State lecture-notes landing
page returned 502 in the web reader, so I searched for the author lecture notes,
confirmed the title/author through Penn State's listing, and retrieved the full
81-page PDF through the successful mirror above. The Springer Toro HLL chapter
was only a subscription preview; the full LeVeque text and the complete
Clawpack textbook chapter were retrieved as alternatives. No source was
dropped, no `source_resolution` failure remains, and
`source-fetch-check --stamp` successfully stamped all three full-text sources.

## Scope limits and axioms

The general-system solver has an explicit positive local radius and only asserts
uniqueness of its small ordered elementary-wave strengths. It does not claim an
arbitrary large-data solver or uniqueness among all weak solutions. HLL speed
enclosure remains an explicit input hypothesis; no general signal-speed bound
is inferred. Roe consistency and the flux-jump identity do not imply entropy
admissibility, as witnessed by the fully checked Burgers expansion shock. The
Euler state domain excludes nonpositive density and internal energy; the
pressure routine returns `vacuum` at and above the limiting rarefaction
threshold and does not evaluate the Euler flux at a vacuum state.

All arguments are choice-free. No AC, DC, or countable-choice supplier is used.

## Scoped verification results

- Source retrieval: `node tools/source-fetch-check.mjs --coverage research/numerical-analysis-remaining-71-2026-10-17-batch-30.coverage.json --stamp` — **pass**, 3/3 sources stamped.
- Item dependency labels: local manifest graph through `dependencyLevels` — **pass**, 30 items, maximum level 8 (A-page maximum 8, B-page maximum 7). Batch 30 has level 0 and no cross-batch prerequisites; its B page requires only its paired A page.
- `node tools/tsx-run.mjs tools/precheck.mts <30 assigned item files> --json` — **pass**, 30 files, 19 proof-bearing items checked, 0 failed.
- `node tools/proof-layout.mjs <30 assigned item files>` — **pass**, 30 items, 60 steps, 0 defects.
- `node tools/rendercheck.mjs <30 item files and 2 page files> --json` — **pass**, 32 files, 0 errors and 0 warnings.
- `node tools/depcheck.mjs --items-file /tmp/numerical-analysis-batch30-item-scope.json --quiet --json` — **pass**, 30 focused items and both pages, 0 errors and 0 warnings.
- `node tools/content-policy.mjs research/numerical-analysis-remaining-71-2026-10-17-batch-30.pages.json --json` — **pass**, 30 items, 0 errors and 0 warnings.
- `node tools/coverage-checklist.mjs research/numerical-analysis-remaining-71-2026-10-17-batch-30.coverage.json --require-destination --json` — **pass**, 1 A page, 25 harvested results, 0 errors and 0 warnings.
- `node tools/proof-contract.mjs research/numerical-analysis-remaining-71-2026-10-17-batch-30.proof-contracts.json --strict` — **pass**, all 30 contracts, 0 errors and 0 warnings.
- `node tools/step1-decisions.mjs record` — **pass**, all 30 assigned items have `ready` records with their actual direct dependencies; no `--owner` flag was used. The run-wide status remains open because other items still lack readiness records.

## Run-wide checks and owner follow-up

- `node tools/item-dependency-levels.mjs check --run numerical-analysis-remaining-71-2026-10-17` cannot close the full run yet: it reports 81 other page inventories empty and five other stale item levels (`ex-ewald-source-collision-field-singularity`, `lem-na-fresnel-integral`, `thm-crouzeix-raviart-discrete-well-posedness`, `thm-crouzeix-raviart-energy-error-estimate`, and `thm-crouzeix-raviart-l2-error-estimate`). The batch-30 projection itself passes and contains no mismatch.
- `node tools/batch-dependency-levels.mjs check --run numerical-analysis-remaining-71-2026-10-17` stops while parsing another pair's item `items/lem-ewald-gaussian-poisson-periodization.md:21`: its double-quoted YAML locator contains an unescaped `\pi` (`Invalid escape sequence \\p`). This pair did not edit that item. The shared batch-level file remains untouched; the owner can correct that carrier and recompute after all writers finish.
- The focused `pathcheck` call inspected zero draft pages and reported only the existing missing `_category.md` overview for the collection. The A/B draft page files and their manifest placements are present; no pathway or category overview was edited.
