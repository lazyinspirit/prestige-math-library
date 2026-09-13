# Batch 2 scaffold notes — phase-2-next-21

Role: beta  
Label: batch-2  
Owned scope: two functional-analysis A/B pairs, orders 288.063–288.066

Status: construction is complete with 40 `ready` and 16 `escalated` item records. This is Step 1 evidence only, not mathematical approval or publication.

## Instructions, state, and controlling design

Before construction I read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, `briefs/beta-scaffold.md`, the generated batch task, the planning notes, the scope/dependency instructions, the current plan, the drift report, and the live autopilot state. The live run is genuinely at Step 1 scaffold construction. Historical `research/*RESUME.md` files were not used as state evidence. Earlier `frontier-34-fa-prereqs` manifests and coverage were used only as historical mathematical evidence; they do not control this run.

For `banach-alaoglu-goldstine-and-krein-milman`, the complete FA-9 section at `research/plan-functional-analysis-track.md` lines 775–829 controls the mathematical design.

For `reflexivity-and-eberlein-smulian`, the complete FA-10 section at `research/plan-functional-analysis-track.md` lines 831–888 controls. The functional-analysis mention near line 61 is only the track summary row. The complex-analysis mention near line 5368 is a downstream consumer-prerequisite table, not a design for FA-10. It therefore cannot override the complete FA-10 scope, proof warnings, or item order.

## Plan/design conflicts and dispositions

The current `research/plan-spec.json` controls every conflict:

- FA-9's prose design names FA-4, FA-5, FA-7, FA-8, compact-Hausdorff Tychonoff, and MT-20. The current plan instead declares the exact direct page requirements `radon-measures-and-the-riesz-markov-kakutani-theorem` and `weak-and-weak-star-topologies`. The omitted historical FA pages are reached transitively through the weak-topology predecessor, while the actual BPI/Tychonoff and HB interfaces are declared at item level. The current two-page requirement list was preserved.
- FA-10's prose design names FA-6–FA-9 and MT-14/MT-16. The current plan declares only `banach-alaoglu-goldstine-and-krein-milman` and `complex-lp-spaces-and-test-function-conventions`; their prerequisite closures supply the earlier Baire, duality, weak-topology, and concrete Lp interfaces. The current plan list was preserved.
- The drift review added the RMK page to FA-9 and the complex-Lp convention page to FA-10. Those are already-published backward requirements and were retained exactly.
- The FA-10 B design calls the Lomonosov boundary `cex-complex-bishop-phelps-for-general-convex-sets`, but the content policy forbids a `cex-` item whose result is only source-recorded and not proved locally. The stable unused ID `rem-complex-bishop-phelps-for-general-convex-sets` is used instead, with `proved_here: false`, explicit external provenance, and no downstream consumers.
- The two Hilbert examples are listed on FA-10 B even though the same design says they are finalized after FA-13. They cannot legally depend forward on definitions or theorems not yet supplied. They are preserved in the owned manifest but escalated for the exact split described below.

The empty item arrays in `plan-spec.json` are scaffold placeholders, not instructions to omit the complete design inventory.

## Inventories and local support

All selected and added IDs were checked for prior use before construction. Items are in prerequisite order, and no B item is a proof prerequisite.

- FA-9 A: 16 items: the 15 designed items plus `def-absolute-polar-in-a-normed-dual-pair`, required before the polar compactness theorem.
- FA-9 B: 7 designed applications.
- FA-10 A: 27 items: the 24 designed items plus `lem-complex-lp-duality-from-real-lp-duality`, `lem-eberlein-smulian-countable-compactness-closes-in-the-bidual`, and `lem-clarkson-inequalities-for-real-and-complex-lp` before their consumers.
- FA-10 B: 6 designed applications, with the source-only Lomonosov item classified as a remark as explained above.

The local complex-Lp bridge restores the designed real-and-complex reflexivity statement. It uses the published real arbitrary-measure duality result, decomposes a complex functional on the real subspace, reconstructs the bilinear complex density, and proves norm equality with the phase test. No real-only weakening was accepted.

## Dependency and proof audit

I read the current statements and complete proofs of the load-bearing published interfaces, including the weak/weak-star neighborhood definitions, relative Hahn–Banach extension, norming and bidual isometry, finite-dimensional strict separation, uniform boundedness with DC, BPI-equivalent compact-Hausdorff Tychonoff, the locally convex separation pair, the c0/ell-one dualities, real arbitrary-measure Lp duality, complex Holder/Minkowski conventions, RMK representation, and the compactness/closedness results used by the convexity arguments.

Important dependency repairs made during the audit:

- Goldstine, the reflexivity criteria, Eberlein–Šmulian support, and Milman–Pettis use `cor-relative-hahn-banach-bidual-isometry`, `cor-relative-hahn-banach-dual-norming`, `thm-relative-hahn-banach-norm-preserving-extension`, and `thm-relative-hahn-banach-geometric-separation`. They do not consume the older AC-backed convenience theorems while advertising only HB.
- The Eberlein–Šmulian metrizability lemma explicitly assumes countable choice and HB, and declares the countable-product metric and compact-to-Hausdorff closedness inputs.
- `lem-uniform-convexity-gives-unique-asymptotic-centers` explicitly assumes countable choice because choosing a minimizing sequence is a countable selection.
- Milman–Pettis explicitly assumes HB. Its strategy first transfers the uniform-convexity estimate to the bidual using simultaneous finite-data Goldstine approximation, then uses a weak-star slice to obtain norm density of the canonical image. This avoids a circular assumption that the bidual is already uniformly convex or reflexive.
- Bauer's principle proves upper-semicontinuous maximum attainment directly from compactness and the finite-intersection property. The published `thm-semicontinuous-evt` only treats compact subsets of the real line and was not misused for a general compact space.
- The probability-measure extreme-point proof declares restriction, regularity, compactness, and Hausdorff inputs. It proves regularity of finite Borel restrictions and the zero-one regular-probability argument rather than assuming an undefined support theorem.

No ready item has a missing, circular, forward, or Recorded-only prerequisite. No path from these functional-analysis pages reaches `deferred-set-theory-beyond-choice`.

## Choice ledger

- Banach–Alaoglu and weak-star compact polar sets assume BPI and use it exactly through compact-Hausdorff Tychonoff.
- Goldstine assumes HB and does not use compactness.
- The intended Banach–Dieudonné route requires BPI for compact finite intersections, DC for the recursive finite-test construction, and HB for the final separation. The item is escalated because the quantitative induction remains incomplete.
- Krein–Milman existence and closed-hull form, Bauer, and the dual-ball extreme-point corollary use AC in the implemented branch. The manifest does not relabel the combined result as BPI alone.
- The reflexive-ball theorem states BPI for the compactness direction and HB for the Goldstine direction.
- Whitley's intended hard direction states BPI+DC+HB. It remains escalated.
- Complex Lp duality/reflexivity and the asymptotic-center lemma state countable choice where their constructions require it.
- The Schur gliding-hump argument uses least-index recursion and adds no choice axiom.
- Choice-free and incompatible-axiom branches are not merged.

## Source harvest and retrieval

The coverage file records 56 named harvested results with exact locators and an explicit disposition for each. Independent full treatments include Bühler–Salamon and Teschl for both pages, Brezis for reflexivity and uniform convexity, Hanche-Olsen for the Milman converse, Ian Ball for Bauer, Whitley's primary paper for the intended Eberlein–Šmulian route, and Lomonosov's primary paper for the complex boundary.

Eight of nine source occurrences are fetch-verified. Newly stamped in this construction were Hanche-Olsen (7-page PDF, SHA prefix `d83aa02251060c33`), Brezis (603-page PDF, `64b567889fd70bdd`), and Lomonosov (complete 5-page PDF, `6b65cb1414c8bd6f`). Existing genuine stamps were reused for Bühler–Salamon, Teschl, and Ball.

Whitley's `https://www.digizeitschriften.de/download/pdf/235181684_0172/log27.pdf` now redirects to the retired site's root. `source-fetch-check --stamp` recorded the initial failure plus five retries and exhausted the allowance. Searches of the exact title/author/journal coordinates, EuDML, the Göttingen resolver, and Kremp's alternative found metadata and indexed excerpts but no fetch-verifiable authoritative full text. The indexed text was insufficient to certify the last finite-norming-set induction. The source therefore has `source_resolution.status: owner-escalation`, not a fabricated drop or alternative proof. Its affected definition, hard lemma, and theorem are escalated.

## Item readiness and exact escalations

Records were written once in manifest prerequisite order. The owned result is 56 items: 40 ready, 16 escalated, 0 stale, 0 missing.

Escalated items:

- `thm-banach-dieudonne-linear-subspace-criterion`: complete recursive estimates and the c0 image-separation step are missing.
- `def-relative-weak-compactness-and-three-sequential-notions`, `lem-eberlein-smulian-countable-compactness-closes-in-the-bidual`, `thm-eberlein-smulian`: affected by the exhausted Whitley source and, for the latter two, the incomplete hard induction.
- `cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence`, `cor-ell-one-is-not-reflexive`: their chosen proofs consume the unresolved Eberlein–Šmulian chain.
- `lem-james-noncompactness-sequence`, `lem-james-norm-attainment-compactness-criterion`, `thm-james-reflexivity-theorem`: the quantified general James construction was not recovered; the available Moors proof is separable-only.
- `lem-bishop-phelps-support-cone-construction`, `thm-bishop-phelps`: the exact real support-cone lemma and complete proof were not recovered.
- `lem-clarkson-inequalities-for-real-and-complex-lp`, `cor-lp-is-uniformly-convex-for-one-less-p-less-infinity`: exact statements are present, but the two p-ranges and complex scalar proof are not complete.
- `ex-hilbert-spaces-are-uniformly-convex`, `ex-norm-attaining-functionals-on-a-hilbert-space`: illegal later FA-13 suppliers, detailed below.
- `rem-complex-bishop-phelps-for-general-convex-sets`: the external Lomonosov result is verified, but the remark's contrast consumes the unresolved real Bishop–Phelps theorem.

Every other owned item has a complete strategy and adequate met prerequisites and is recorded `ready` with the examined dependency IDs. An escalation is not overwritten by a worker decision.

## Required FA-13 split/relocation escalation

The owner must choose a cross-run plan repair; no forward dependency was inserted.

Preferred placement: move the following two items from `reflexivity-and-eberlein-smulian-examples` to `hilbert-space-geometry-and-riesz-representation-examples`, immediately after FA-13 A:

- `ex-hilbert-spaces-are-uniformly-convex` depends on FA-13's `def-hilbert-space` and `thm-parallelogram-law`, then on local `def-uniformly-convex-banach-space`.
- `ex-norm-attaining-functionals-on-a-hilbert-space` depends on FA-13's `def-hilbert-space` and `thm-riesz-representation-for-hilbert-space`; the nonzero case attains at the normalized representing vector and the zero case is separate.

Inventory effect: FA-10 A remains all 27 current items; FA-10 B becomes the four-item inventory `ex-reflexivity-of-ell-p-and-lp`, `cex-c0-is-not-reflexive`, `cex-weak-and-norm-topologies-differ-on-ell-one-despite-identical-convergent-sequences`, and `rem-complex-bishop-phelps-for-general-convex-sets`. FA-13 B gains the two named examples after its currently designed eight examples. The alternative is an owner-approved earlier Hilbert supplier split containing exactly the Hilbert definition, parallelogram law, and Riesz theorem before FA-10; duplicating or forward-citing them is not acceptable. FA-13's cited source locations are Bühler–Salamon §§1.3.3 and 2.3.6 and Teschl §§1.3 and 2.2–2.4.

FA-13 is not a selected pair in `phase-2-next-21`, so this is a cross-run planning escalation rather than a same-frontier dependency edge. The owned same-frontier input is therefore correctly `[]`; the unified ledger was refreshed from that input.

## Published defect/debt evidence

The audit found an axiom-strength presentation defect in older published convenience items. `thm-hahn-banach-norm-preserving-extension` and `thm-complex-hahn-banach-norm-preserving-extension` state their conclusions without an AC/HB hypothesis, while the first depends on `thm-hahn-banach-dominated-extension`, whose statement assumes AC. The inherited chain reaches published `thm-norm-preserving-extension-from-any-subspace`, `thm-dual-norms-every-vector`, `thm-canonical-bidual-map-is-an-isometry`, `thm-dual-of-a-closed-subspace-is-a-dual-quotient`, `thm-geometric-hahn-banach-for-subspaces`, and `cor-density-characterised-by-annihilator-zero`.

Publication state: all named items are published. Planned suppliers already published by the choice-refinement run are `thm-relative-hahn-banach-norm-preserving-extension`, `cor-relative-hahn-banach-dual-norming`, `cor-relative-hahn-banach-bidual-isometry`, and `thm-relative-hahn-banach-geometric-separation`. Repair strategy for the canonical ledger: either make AC explicit on each older convenience statement or restate it relative to HB and route it through the relative supplier. This scaffold took the latter dependency route wherever a weaker HB assumption is claimed, so the defect is not an actual prerequisite of a ready owned item. It does not block independent new suppliers.

No other published actual prerequisite was found mathematically inadequate.

## Checks actually run

Checks below are the final snapshot after the dependency repairs and readiness records. Whole-run counts can change while other batches work.

| Check | Exit | Actual result |
|---|---:|---|
| owned `manifest-deps` | 0 | 56 items, 0 normalized, 0 errors. |
| owned `content-policy --manifest-only` | 0 | 56 scoped items, 0 errors, 0 warnings. |
| final owned `coverage-checklist --require-destination` | 1 | 2 A pages, 56 harvested rows, 5 errors, all caused by the explicit Whitley owner escalation and absence of a falsely claimed alternative proof. Before recording that unresolved source, the structural harvest passed with 0 errors and 0 warnings. |
| final check-only `source-fetch-check` | 1 | 8/9 source occurrences fetch-verified and resolved; Whitley is the single failed owner escalation, with 0 documented drops. |
| whole-run `manifest-deps` | 0 | 745 items, 0 normalized, 0 errors. |
| whole-run `content-policy --manifest-only` | 0 | 745 scoped items, 0 errors, 0 warnings. |
| `validate-plan research/plan-spec.json` | 0 | 1,624 pages (807 A + 807 B + 5 already published), 17,425 new items; declared page order acyclic and consistent, with no item cycles, forward references, B-page dependencies, or unresolved IDs among 1,056 pages carrying item lists. 563 planned pages still have no item list. |
| `manifest-integrity --run phase-2-next-21` | 0 | 42 pages owed, 42 present; no scope drift. |
| `extcheck --quiet` | 0 | 55 pre-existing published unproved-material warnings; every Recorded result is a cited no-proof remark and every consequence is marked. No warning names an owned scaffold item. |
| owned readiness reconciliation | 1 by design | 56 items: 40 hash-current ready, 16 explicit escalations, 0 stale, 0 missing. |
| whole-run readiness snapshot | 1 | 745 items: 477 ready; 268 open consisting of 88 escalated, 123 missing, and 57 stale records across the live run. |
| frontier dependency refresh | 0 | Unified ledger refreshed and deduplicated; batch-2 same-frontier input is empty for the reason above. |

The mechanical source and readiness gates remain open exactly where the owned evidence says they should. Owner/operator reconciliation and Step 3 must adjudicate the escalations; a worker exit is not independent mathematical approval.
