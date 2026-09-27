# Frontier 35, batch 3 — Step 1 scaffold notes

Run `frontier-35-ten-categories`; beta batch 3. Owned pair only:

| Page | Order | Inventory | Prerequisite |
|---|---:|---:|---|
| `algebraic-differentials-separability-and-smooth-local-presentations` (A) | 366.0581 | 24 items | The five A-page requirements in `research/plan-spec.json` |
| `algebraic-differentials-separability-and-smooth-local-presentations-examples` (B) | 366.0582 | 7 items | This A page only |

I read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the assigned task and the complete AV-5a design in `research/plan-algebraic-geometry-track.md`, the current plan rows, and existing batch evidence before constructing items. `research/frontier-35-ten-categories-owner-authoring-direction.md` did not exist before construction and was still absent at final checking. The manifest follows the current plan. No published item, shared plan, verdict, or engine transition was edited.

## Design and plan conflicts

1. The AV-5a design gives A a page prerequisite on `dimension-constructible-images-and-dimensions-of-fibres-examples` (order 366.058); the current plan gives A the preceding `dimension-constructible-images-and-dimensions-of-fibres` (366.057). The plan controls this scaffold. No B-page claim from the earlier pair was used as a proof supplier.
2. The design's AV-6 seam requires the B page at 366.0582, while the current plan row for `zariski-tangent-spaces-regular-points-smoothness-and-bertini` (366.059) requires only this pair's A page. The B page remains a dependency leaf and supplies no AV-6 proof. The consumer owner/plan owner must reconcile that seam; this scaffold does not change the selected pair or pretend the B page is on AV-6's declared path.
3. The design says the later fibre-products/base-change page at 366.065 must reuse this pair. Its current plan row has no path to either page of this pair. The later Kähler page at 366.071 does require this A page, and the smooth/étale page at 366.073 reaches it through 366.071. The 366.065 mismatch is recorded for the later consumer owner. Its plan has no item inventory yet, so no specific consumer item edge can honestly be asserted now.

These are design/plan conflicts, not edits requested of this batch. No new prerequisite pair or page split was needed for the owned A/B claims. The three local additions before their consumers are `def-ag-geometrically-regular-algebra-and-fibre`, `lem-ag-flat-local-regularity-ascent-descent`, and `lem-ag-finite-field-extension-separable-factorization`. They give the local definitions and descent/factorization arguments needed for the 21 designed A items. The seven B items remain examples and counterexamples, with no B-to-B proof dependency.

## Mathematical and dependency checks

The A page uses the plan's published page prerequisite closure (193 page IDs). I inspected the statements of the 45 direct published item suppliers and the proof bodies of the load-bearing flatness, Artin–Rees, Krull-intersection, regular-local, faithful-flat descent, dimension, primitive-element, and field-separability suppliers. An item-graph traversal from all 31 owned items reached 1,261 item IDs and 5,318 declared dependency edges: zero missing, unpublished, Recorded, or cyclic items; no mapped supplier outside the A page's prerequisite closure; no page path to `deferred-set-theory-beyond-choice`. The 79 closure items omitted from current plan `items[]` arrays are already published foundational items, not planned frontier suppliers. This graph check does not replace Step 3's independent proof review.

The load-bearing local chains and their hypotheses are explicit in the manifest:

- `lem-ag-local-flatness-regular-parameters` proves the finite-**S**-module criterion from Tor vanishing. It propagates Tor to finite-length R-modules, applies Artin–Rees to `I∩m^n`, and kills the remaining kernel by Krull intersection on the finite **S**-module `I⊗_R M`; no R-finiteness or prior R-flatness of M is assumed. The regular-parameter application uses the Koszul resolution. This feeds `lem-ag-standard-smooth-flatness` after Noetherian approximation of an arbitrary base.
- `thm-ag-separating-transcendence-basis-perfect-field` uses perfect-field p-power independence, the finite primitive-element theorem, and a minimal-degree polynomial exchange, one finite algebraic generator at a time. It is choice-free. `lem-ag-separable-residue-cotangent-sequence` is separately proved by a square-zero quotient and Hensel-style correction; it does not depend on the AC-laden arbitrary-tower differential theorem.
- `lem-ag-geometric-regularity-field-tests` uses the finite purely inseparable factorization, regularity ascent under standard-smooth scalar extension, flat-local regularity descent, and finite-type approximation. Noether normalization gives a uniform dimension bound for arbitrary field extensions. The zero algebra is handled separately. `thm-ag-geometric-regularity-perfect-base` then uses the finite purely inseparable test, without assuming that the extension field remains perfect.
- `thm-ag-perfect-field-jacobian-regularity` proves the closed-point rank formula from the separable-residue cotangent sequence and polynomial quotient differentials. At arbitrary primes, separably generated residue fields and the regular-quotient ideal theorem yield a nonzero Jacobian minor directly; the proof does not cite the later local-presentation lemma. `lem-ag-geometrically-regular-fibres-local-presentation` takes an algebraic closure of the **fibre residue field** `κ(q)`, giving a rational point over q even when q is not closed in the original fibre. Pointwise geometric regularity, faithful-flat generation descent, flatness, and Nakayama then lift the standard chart. The global equivalence and submersion criterion consume these earlier local arguments in order.
- The submersion theorem uses locally standard-smooth source and target points, so smoothness is not a forward undefined notion. At a rational fibre point the Jacobian argument works over an imperfect k because the residue field is exactly k. The B field examples and projection calculation have direct finite proofs, preserving a choice-free branch.

AC is stated and directly declared where required: the finite-S local-flatness route inherits the published Krull-intersection/regular-parameter and DC Tor boundaries; regularity ascent/descent and geometric-regularity tests inherit the published homological regularity suppliers; the field factorization uses the published separable-core construction; scheme field extension inherits the published affine-scheme/gluing construction. Consumers of those AC-dependent results state it. The differential, separating-basis, and elementary B calculations avoid those paths. No incompatible axiom branch is consumed.

No defective **actual** published prerequisite was identified in the examined chains. No repair supplier was assumed published merely because it appears in a plan. Unrelated published external-reference debt is reported under checks below and is not a blocker for this new supplier.

## Source reading and harvest

Both full documents were fetched with `source-fetch-check --stamp` and their relevant complete arguments inspected (local PDF text extraction and the Stacks tag pages). A full-text fetch stamp records access, not mathematical approval.

| Treatment | Exact used locators | Fetch receipt | Supported items |
|---|---|---|---|
| [Stacks Project, *Commutative Algebra*](https://stacks.math.columbia.edu/download/algebra.pdf), July 2026 PDF | §§10.131.2–3, 7–10, 12, 14–15; 10.42.4; 10.44.1–2; 10.45.2; 10.99.6–7; 10.110.9; 10.137.5–9, 15–16; 10.140.1–5; 10.163.10; 10.164.4; 10.166.1–3 | 469-page PDF, 2,828,052 bytes, SHA256 prefix `b035a1f02104906a`, stamped 2026-09-23T16:53:43Z | Differentials and transitivity, finite-S flatness, field factorization, Jacobian and standard smooth charts, geometric regularity and descent |
| [Vakil, *The Rising Sea*](https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf), 29 Aug 2022 author-hosted draft | §§22.2.2–3, 6–7, 9–12, 17–18, K–M (printed pp.575–584); 22.3.5, 9 (pp.588–590); 25.6.2–3 (pp.678–679); 26.2.2, 4, F (pp.689–693) | 826-page PDF, 10,736,850 bytes, SHA256 prefix `989b0d912cf31206`, stamped 2026-09-23T16:53:45Z | Independent full treatment of the differential/cotangent, finite-source-module flatness, and smooth-local-presentation routes |

The design's Vakil “Chs. 23 and 25, pp.473–566” locator does not match this accessible 2022 author-hosted draft; the verified relevant arguments are at the locators in the table. The owned coverage file has 61 harvested rows: 10 canonical claims included, plus 33 source headings included, 17 absorbed inline with item IDs, and one already-published perfect-field characterization. There were no deferred or out-of-scope headings in the specifically inspected ranges, and no failed source requiring a drop or owner escalation.

## Checks and unresolved findings

| Check | Result at final batch check |
|---|---|
| Owned `coverage-checklist --require-destination` | 1 A page, 61 harvested results, 0 errors, 0 warnings |
| Owned `source-fetch-check` | 2/2 source full-text stamps valid; 2/2 resolved |
| Owned manifest content policy | 31 items, 0 errors, 0 warnings |
| Whole-run manifest dependencies | 497 current items, 0 normalized, 0 errors |
| Whole-run manifest content policy | 497 current items, 9 errors in batch 17's Soergel item dependencies, 0 warnings; none is an owned item |
| `validate-plan.mjs research/plan-spec.json` | Pass: acyclic page order, no declared item cycles, forward references, B-page dependencies or unresolved IDs among the 1,188 plan pages with item lists. The plan still leaves 431 page inventories empty, including this pair, as expected at Step 1. |
| Owned Step-1 decisions | 31/31 current `ready` records; 0 owned work rows. Each changed record was refreshed in prerequisite order; unchanged ready records were preserved. |
| Consumer-batch dependency ledger | Owned input is `[]`: all external suppliers to this batch are published, and B depends only on its A. `frontier-dependency-ledger.mjs refresh` succeeded. |

At the later whole-run snapshot, `coverage-checklist` on the 15 then-present coverage files found 18 `coverage-unknown-item` errors in batch 16's still-incomplete configuration-space/quiver manifests, and three low-yield warnings (two in batch 1, one in batch 16). Whole-run `source-fetch-check` passed 81/81 stamped/resolved sources. The nine whole-run content-policy errors are batch 17 references to unavailable `def-generic-type-a-hecke-algebra`, `thm-standard-basis-of-the-generic-type-a-hecke-algebra`, and `def-split-grothendieck-group-of-an-additive-category`; no owned item uses them. `extcheck.mjs` reported 12 global errors and 48 warnings on published Recorded/unproved-status material; none of its named items lies in this batch's 1,261-item dependency closure. The errors are three checks on `fs-every-subexponential-growth-group-has-polynomial-growth`, one kind check on `thm-onan-scott-classification-of-finite-primitive-groups`, and unset prechecks on `rem-cauchy-kovalevskaya-theorem-for-a-noncharacteristic-analytic-cauchy-problem`, `rem-dominated-convergence-theorem`, `rem-hahn-banach-hamel-basis-open`, `rem-martins-axiom`, `rem-nonamenable-groups-without-nonabelian-free-subgroups`, `rem-sierpinski-ultrafilter-not-measurable`, `rem-suslin-line-non-ccc-square-unverified`, and `rem-vitali-non-measurable-set`. These are outside this batch's edit authority and do not supply its proofs.

Step-1 readiness means the scaffold has a complete proposed proof route with met published prerequisites. Owner/operator reconciliation and Step 3 mathematical review remain the approval gates.
