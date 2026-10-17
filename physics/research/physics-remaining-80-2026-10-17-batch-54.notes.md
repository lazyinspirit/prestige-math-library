# Batch 54 authoring notes — `tgr-i01`

Run: `physics-remaining-80-2026-10-17` · role: beta · batch: 54 · pair: `tgr-i01` / `tgr-i01-examples`.

## Inventory and plan comparison

The assigned inventory is four A items and one B thought experiment, within the page cap. The A page is at order 605 and its B companion at order 606; both remain draft. The current `plan-spec.json` and owner dispatch require `tgr-mc01`, `tgr-mi03`, and `sr-observer-measurements`. The older design reservation lists `TGR-MI03`, `TGR-MC01`, and `TGR-MI01`, but not the SR page. The current plan and dispatch control: the MI01 supplier remains a transitive prerequisite through `tgr-mi03`, and the explicit SR measurement page supplies the published mathematical congruence/Frobenius interface.

The large `quantities-and-postulates.md#framework-units` research section also contains later charged-equilibrium, Jüttner partition/moment, and finite-regulator generalized-entropy material. The `proposed-inventory.json` entry for `def-tgr-framework-units` gives the narrower physical scope carried here: primitive/derived quantities, covector types, proper versus Killing-normalized temperature, scalar/vector inverse temperature and KMS units, and geometric/acceleration surface gravity. This page keeps the corresponding units and caveats; the later partition/moment and regulated-entropy results remain with their separately planned definitions and proofs. No unproved integral, renormalized limit, or generalized-second-law conclusion was imported into this pair.

The direct dependency on `def-tgr-local-fluid-state` was retained for the exact state-map, observer, entropy-current and tensor units used by the local physical adoptions. The entropy postulate likewise cites that current definition. These are mathematical premises, with `mathematical-premise` roles; neither dependency introduces a physical assumption into mathematics.

## Supplier inspection and current status

- `tgr-mc01` / `def-tgr-local-fluid-state` is present in batch 53. Its current definition specifies a smooth future unit observer congruence, pointwise rest spaces, an open C2 state domain, a formal marker, and the regularity/types/units of the number, entropy and stress-energy fields. Batch-53 notes and readiness records report the four batch-53 items ready and current. The state definition remains draft content, not published mathematics.
- `tgr-mi03` / `lem-tgr-killing-energy-normalization` is present in batch 52 at item level 4. I inspected its actual current statement and proof, including the finite matter current, proper-normal slice charge, static lapse-weighted expression, positive generator normalization, three covector unit conventions, and conditional horizon-parameter scaling. Its finite-balance clause explicitly depends on the current draft MI01 balance theorem. Batch-52 coverage and cross-batch evidence mark the MI03 dependency open; the lemma is not treated as accepted.
- `tgr-mi01` is a transitive supplier. The actual `def-tgr-spacelike-current-slab` statement specifies the compact product chart slab, spacelike slices, future normal, C1 current, proper charge and signed face flux. The actual `thm-tgr-finite-current-production-balance` statement is

  `Q_J(t1)-Q_J(t0)+Phi_J(B)=integral_K (nabla_a J^a) vol_g`.

  Both item files remain draft. Batch-52 evidence records that the batch-50 manifest statement/dependency snapshots for the slab and balance inputs differ from their current item files. The balance proof and the supporting `lem-tgr-c1-current-density-divergence` and `lem-tgr-normal-flux-coordinate-density` remain unresolved upstream. The exact current statement matches the consuming use, so the physical theorem and B thought experiment were fully authored conditionally; neither claims the supplier proved.
- `sr-observer-measurements` is published. Its actual `thm-sr-local-congruence-adapted-charts-and-frobenius` is a mathematical theorem and supplies the stated local chart/rest-distribution interface. No SR physical result is used as a mathematical premise.

## Source reading and dispositions

The A page has independent full-text treatments from Gourgoulhon and Borghini for relativistic local state/current conventions, and independent Reall and Tong lecture-note treatments for Killing currents and charges. Romatschke supplies a specifically limited entropy-current treatment. BIPM and NIST/CODATA support the metrological statements. All source titles, URLs, exact locators, supported items, limitations and harvested-result dispositions are in `batch-54.coverage.json`.

`source-fetch-check --stamp` fetched and stamped all 9 source entries; the final check mode also passed 9/9. The complete relevant Gourgoulhon §4.3 reasoning was inspected through equations (4.10)–(4.14); Borghini's full notes were inspected at §I.1.3, §§IX.2–IX.3.1 and §§IX.4.1–IX.4.2; Reall §5.3 and §6.3 and Tong §4.5.5 were inspected; Romatschke §4.1 was read through the displayed divergence and its experimental limitation; BIPM §2.2 and the NIST G input table were inspected. Borghini explicitly warns that some notes have incomplete derivations; none is used to replace a local proof. Romatschke's conformal-fluid calculation and no-known-experimental-verification statement remain source limitations, not a universal law or measured result. No source retrieval failed, no source was dropped, and no empirical measurement or precision was invented.

## Conditional proof route

The two postulates remain adopted premises with no fabricated Proof sections. The A-page physics theorem proves, conditional on its exact L1/L2 inputs, that nonnegative local divergence gives

`change in proper slice entropy + net outward side flux = integrated local production`.

The proof identifies the mathematical supplier's coordinate-box charge with the physical normal/proper-volume charge and carries SI entropy units. Monotonicity is deduced only when the net outward flux is zero; equal endpoints additionally require zero production. The B thought experiment defines impermeability pointwise on each side face, then derives the finite-region prediction. It reports no observation and makes no horizon or generalized-entropy identification. Proof contracts preserve exact current supplier excerpts, actual steps, inputs, all standard boundary cases, and the absence of finite checks.

## Dependency levels and readiness

The recorded run graph gives batch 54 level 2 with in-run batch suppliers 52 and 53. In the scoped item graph, the levels are:

| Item | In-run suppliers used for level | Level |
|---|---|---:|
| `def-tgr-framework-units` | `lem-tgr-killing-energy-normalization` at 4 | 5 |
| `post-tgr-local-material-thermodynamics` | definition at 5 | 6 |
| `post-tgr-local-entropy-admissibility` | definition at 5 | 6 |
| `pthm-tgr-finite-entropy-balance` | entropy postulate at 6 | 7 |
| `texp-tgr-insulated-entropy-region` | A-page theorem at 7 | 8 |

The scoped dependency-level calculation over batches 50, 52, 53 and 54 checked all 18 items with no errors and returned exactly these five levels. Every assigned item has a Step-1 record with `decision: escalated` and `owner: false`, because the MI03-to-MI01 proof/status and batch-50 manifest reconciliation are still open. The conditional arguments and both pages are complete. No readiness is marked ready while those transitive inputs remain unresolved.

## Checks and remaining owner input

- Final `author-check` passed: precheck checked four proof/postulate bodies (two nonproof-structure postulates and two proof-bearing items) with zero failures; rendercheck parsed all seven changed item/page files; content policy checked five items with zero errors/warnings; strict proof-contract check covered 5/5 items with zero errors/warnings.
- Final `proof-layout` passed: 5 items, 6 numbered proof steps, 0 defects.
- Focused `depcheck`, `fwdcheck`, and `extcheck` passed for the five assigned items and their dependency closure; no cycles, unresolved links, forward references, or unproved-result references were found.
- Coverage checklist passed for 2 pages and 14 harvested results with zero errors/warnings. All 9 source entries are fetch-verified.
- The run-wide `item-dependency-levels check` still reports empty inventories and stale levels in other unassigned batches; it reports no level error for these five items. The run-wide `batch-dependency-levels check` reports the shared scheduling snapshot stale after manifest authoring. The shared level file was left untouched; its current recorded row still says batch 54 level 2 requiring 52 and 53. The owner must recompute the shared scheduling snapshot at the drained join.
- The exact open prerequisite for owner resolution is batch 50: reconcile the manifest interfaces for `def-tgr-spacelike-current-slab` and `thm-tgr-finite-current-production-balance` with their current item statements/dependencies, review the balance proof and its direct density/normal-flux support lemmas, then recheck the conditional uses in batch 52 and this batch. Affected batch-54 consumers are `def-tgr-framework-units`, `pthm-tgr-finite-entropy-balance`, and the dependent `texp-tgr-insulated-entropy-region`; all five final readiness records preserve the unresolved transitive dependency.

Authoring completion records are not independent mathematical or physical approval.
