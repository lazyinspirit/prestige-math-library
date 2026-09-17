# Phase 2 remaining 27 — batch 13 Step 1 notes

## Outcome

Constructed both assigned A/B pairs in prerequisite order. The manifest contains 115 items: 51 A items (45 ordinary plus 6 false statements) and 12 B items for DG-34, followed by 40 A items (34 ordinary plus 6 false statements) and 12 B items for DG-37. Every item has an explicit dependency array, provenance, source locators, and an axiom-base contract; every proof-bearing item has a complete local proof or verification strategy. All 115 item-readiness records are `ready`, hash-current, and closed. No item was escalated.

No selected pair, page ID, companion, order, title, category, or page-level prerequisite was changed. No published content, shared plan, engine state, or verdict was edited, and no planned supplier is represented as published. B pages require only their A companions, and no B item supplies an A-page proof.

## Controlling directions and plan comparison

The binding `research/phase-2-remaining-27-owner-authoring-direction.md` was read before construction. It contains no DG-34- or DG-37-specific amendment, so its general requirements—complete local strategies, exact ownership, companion-only B-page requirements, no new pair, explicit choice dependencies, and no use of planned suppliers as though published—control together with the current plan.

For `real-forms-and-real-semisimple-lie-algebras`, the complete DG-34 section beginning at `research/plan-differential-geometry-track.md` line 8520 controls. The dispatched locator at line 8707 is the internal B-page/source subsection, not a competing design. The real-form/conjugation equivalence, compact and split forms, Cartan involutions and global Cartan decomposition, restricted-root and Iwasawa theory, theta-stable real Cartans, Vogan/Satake diagrams, real-simple dichotomy, and classical/general classification endpoints were preserved. Infinite-dimensional analytic representation theory remains an explicit non-load-bearing boundary remark.

For `moment-maps-and-symplectic-reduction`, the complete DG-37 section beginning at lines 9267–9269 controls. The locator at line 9414 is its internal B-page/source subsection. The library convention

`xi_M(p)=d/dt|_0 exp(-t xi)·p`, `d mu^xi=-i_{xi_M}omega`, `X_{mu^xi}=-xi_M`, and `(g·alpha)(xi)=alpha(Ad_{g^{-1}}xi)`

was retained throughout. The regular reduction proof order, coadjoint stabilizer at a nonzero value, singular boundary, and compact averaging cautions were preserved.

The four relevant rows in `research/plan-spec.json` agree with the dispatched IDs, orders, titles, categories, companions, and `requires` arrays. Their item arrays are empty, so the current plan creates no competing item inventory; the complete design sections control the 115-item inventory. There is no structural plan/design conflict. Two design clarifications were made without changing scope:

1. DG-37 uses “moment map” both for a component-equation map before equivariance and for the equivariant map defining a Hamiltonian action. `def-moment-map-and-component-hamiltonian` now explicitly distinguishes an *infinitesimal moment map* from an *equivariant moment map*. This prevents the non-equivariance cocycle lemma from assuming the conclusion it proves.
2. The reduction-in-stages item now states the zero-level hypotheses and residual moment map explicitly rather than referring generically to “the stated hypotheses.”

## Mathematical dependency audit

DG-34 is ordered as complexification and conjugations → compact/split forms → Cartan involutions and Lie-algebra decomposition → global Cartan decomposition and the noncompact symmetric space → maximal split subspaces and restricted roots → restricted Weyl/Iwasawa theory → theta-stable Cartans and Cayley transforms → Vogan and Satake classification → the real-simple dichotomy and complete real semisimple classification. The compact Chevalley real-form strategy uses the planned Batch-11 Serre/root-space chain and proves negative definiteness before any Cartan-involution consumer. Cartan involutions are constructed by commuting real and compact conjugations, and the global theorem retains connectedness and finite center; the nonlinear-cover false statement records why those hypotheses cannot be erased.

The restricted-root chain does not infer reducedness. Simultaneous self-adjoint diagonalization gives the restricted-root decomposition; the explicit `su(p,q)` block calculation supplies both `e_i` and `2e_i`, and the restricted Weyl proof constructs the rank-one compact reflection before proving generation. The Iwasawa strategy proves the Lie-algebra direct sum before the global `KAN` diffeomorphism. Real Cartans are only reduced to theta-stable representatives; they are not falsely declared mutually conjugate. The Cayley-transform definition records its normalized rank-one inner automorphism before the finite transform chain. The Vogan and Satake items preserve equivalence-class conventions rather than treating the decorated diagrams as literally identical.

The real-simple complexification dichotomy uses two facts in the correct order: conjugation acts transitively on the complex simple ideals because a proper stable sum would give a proper real ideal, and an involution has orbits of size at most two. The two-factor case is then a complex simple algebra viewed as real. The classical list is stated without double-counting split forms and retains admissible ranges and low-rank coincidences.

DG-37 is ordered as action/moment-map conventions → equivariance and its cocycle obstruction → uniqueness and Whitehead correction → Noether → cotangent and coadjoint examples → tangent-space identities → the regular reduction theorem → dimensions/dynamics/products/stages/shifting → compact consequences and singular boundary. The infinitesimal equivariance calculation declares both the Hamiltonian-vector-field antihomomorphism and the library's fundamental-field homomorphism. Whitehead II is used only after the constant trivial-coefficient two-cocycle is constructed; it changes components by constants and does not claim that closed contraction one-forms are exact.

The sign-sensitive canonical examples were checked directly. Naturality of the tautological form gives `-p(xi_Q)` for the cotangent lift. With the selected KKS definition, the coadjoint-orbit inclusion satisfies

`d mu^xi(eta_O)=alpha([eta,xi])=-alpha([xi,eta])=-omega_alpha(xi_O,eta_O)`.

Thus neither proof silently switches to the more common positive-path fundamental-field convention.

Regular reduction follows the required sequence: `ker dmu_p=(T_p(G·p))^omega` and `im dmu_p=ann(g_p)` → regularity iff local freeness → `G_alpha`-invariance → the restricted-form radical equals `T_p(G_alpha·p)` → invariant horizontal forms descend through the free proper quotient → closedness and nondegeneracy of the descended form. The nonzero dimension formula subtracts `dim G+dim G_alpha`; the zero-level `dim M-2 dim G` formula is isolated as a corollary. Reduction in stages now defines `mu_H`, the residual `G/H` action and moment map on `M//H`, states both stagewise and one-stage regular/free/proper hypotheses, identifies the common zero set, and compares forms by their common pullback. The shifting trick uses `M×O_alpha^-` and records the `G` versus `G_alpha` orbit correspondence.

The published `def-fundamental-vector-field-of-a-left-action` carries `def-countable-choice`; accordingly every DG-37 item on that path declares `def-countable-choice` and `ZF+AC_omega`. The two compact averaging items additionally use the Batch-12 normalized-Haar chain, which declares full AC, so they declare both choice dependencies (`ZFC+AC_omega`, logically no stronger than ZFC). The averaging statement assumes an infinitesimal moment map already exists and therefore does not manufacture exact component forms.

DG-34's initial complexification/conjugation and elementary matrix examples remain ZF where their actual paths allow it. Items consuming the current Batch-11 Cartan/root/classification scaffold declare `def-axiom-of-choice` and ZFC because that planned chain inherits the published Jordan–Chevalley AC seam. No choice-free branch was collapsed into that chain. No owned item depends on a Recorded result, and neither page creates a Foundations path to `deferred-set-theory-beyond-choice`.

A direct manifest-order audit found 115 items, zero local self-edges, and zero local forward edges. Every local definition and lemma precedes its consumers.

## Cross-batch dependencies

`research/phase-2-remaining-27-batch-13.cross-batch-dependencies.json` contains 28 reviewed rows: 23 direct item edges and 5 page edges. The page edges are DG-34's Batch-11 Cartan/root-system and Batch-12 highest-weight/compact-Lie prerequisites, plus DG-37's Batch-12 compact-Lie prerequisite. Each item edge records the supplier statement and the exact consumer proof use. All corresponding current supplier statements and strategies were inspected for hypotheses, direction, conventions, well-definedness, and axiom strength. They remain planned, not published.

The canonical frontier ledger was refreshed from all available consumer inputs. Batch 13 contributes 28 verified reviews and zero orphan. The strict `--require-reviewed` gate remains nonzero because Batch 6 is currently the only unreviewed batch; this is outside Batch 13 ownership. No new prerequisite pair or cross-batch repair was required.

## Source evidence and dispositions

Two independent complete treatments support each A page:

- Anthony W. Knapp, *Lie Groups Beyond an Introduction*, 2nd ed., Chapter VI §§1–11. Full PDF: 5,060,066 bytes, 838 pages, SHA-256 prefix `bd7e983a2389349b`.
- Pavel Etingof, *Lie Groups and Lie Algebras*, Lectures 39–41 and 43. Full PDF: 1,510,934 bytes, 223 pages, SHA-256 prefix `80389a10d1f86b37`.
- Ana Cannas da Silva, *Lectures on Symplectic Geometry*, Lectures 21–24 and 26. Full PDF: 1,127,912 bytes, 225 pages, SHA-256 prefix `0b1c3a1f303b2fac`.
- Eckhard Meinrenken, *Symplectic Geometry*, §§7.1–7.5 and 8.1–8.4. Full PDF: 2,031,350 bytes, 142 pages, SHA-256 prefix `b1c8c4143c4ae740`.

The complete relevant arguments were fetched, extracted, and inspected. Coverage records 27 harvested results. Every result is `included`, `inline` with an exact consuming item and support explanation, or `out-of-scope` with a specific boundary reason. Equal-rank Borel–de Siebenthal refinement and analytic real-reductive representation theory are outside DG-34; gauge/toric applications and singular slice/stratified theory are outside DG-37. No source was dropped, no retry limit was reached, and no source-resolution waiver or owner source escalation was needed.

## Published defects for canonical-ledger reconciliation

No new published defect blocks either owned page. Four already exposed defects remain transitively relevant to DG-34 and are recorded here for owner reconciliation:

1. `thm-additive-jordan-chevalley-decomposition` is published and its proof assumes AC, but its published dependency list omits `def-axiom-of-choice`. Evidence: the general perfect-field proof selects splitting data; the current Batch-11 Cartan/root chain inherits this seam. Planned handling: owned consumers declare AC directly. Repair: add the dependency or publish a separately audited choice-free complex specialization. State: published metadata defect; no owned edit.
2. `thm-root-space-decomposition-relative-to-a-cartan-subalgebra` is published with inadequate proof dependencies for commuting semisimple adjoints, simultaneous diagonalization, and identification of the zero common eigenspace. Planned supplier: Batch-11 `thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra`, scaffolded/ready but not published. Repair: repoint the legacy interface after acceptance.
3. `thm-cartan-subalgebras-are-conjugate-in-a-complex-semisimple-lie-algebra` is published but imports undeclared maximal-toral and maximal-torus-conjugacy facts. Planned supplier: Batch-11 `thm-cartan-subalgebras-of-a-complex-semisimple-lie-algebra-are-conjugate`, scaffolded/ready but not published. Repair: make the old result a compatibility corollary after acceptance.
4. `thm-the-root-set-is-a-reduced-crystallographic-root-system` is published but uses undeclared triangularization, finite-dimensional `sl_2` theory, root strings, one-dimensional root spaces, and positivity. Planned supplier: Batch-11 `thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system`, scaffolded/ready but not published. Repair: repoint the old result after acceptance.

The owned manifest uses the explicit planned replacements rather than the three defective published interfaces. Their planned status is recorded in the cross-batch evidence.

## Checks

- Direct owned order audit: 115 items, zero local self-edges, zero local forward edges.
- `node tools/manifest-deps.mjs research/phase-2-remaining-27-batch-*.pages.json`: exit 0; 958 current-run items, zero errors.
- `node tools/content-policy.mjs --manifest-only research/phase-2-remaining-27-batch-*.pages.json`: exit 0; 958 scoped items, zero errors, zero warnings.
- `node tools/validate-plan.mjs research/plan-spec.json`: exit 0; declared page order is acyclic and consistent, with no item-level cycles, forward references, B-page dependencies, or unresolved IDs among 1,138 pages with item lists. It notes 481 planned page inventories still empty.
- `node tools/extcheck.mjs research/plan-spec.json`: exit 0; 19,056 items, 167 Recorded results, and 55 pre-existing consequences/warnings. No owned Batch-13 item is among those consequences.
- `node tools/manifest-integrity.mjs --run phase-2-remaining-27 --json`: exit 0; all 54 owed page inventories are present, with no missing or added page.
- `node tools/coverage-checklist.mjs research/phase-2-remaining-27-batch-13.coverage.json --require-destination`: exit 0; 2 A pages, 27 harvested results, zero errors, zero warnings.
- `node tools/source-fetch-check.mjs --coverage research/phase-2-remaining-27-batch-13.coverage.json`: exit 0; 4/4 sources full-text fetch-verified and resolved.
- `node tools/url-sweep.mjs --coverage research/phase-2-remaining-27-batch-13.coverage.json --out /tmp/batch13-url-sweep.json --recover --fail-on-dead`: exit 0; 4/4 URLs live.
- `node tools/source-backing.mjs --coverage research/phase-2-remaining-27-batch-13.coverage.json --liveness /tmp/batch13-url-sweep.json --require-verified`: exit 0; all 19 authored source-backed dispositions remain supported.
- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-remaining-27 --require-reviewed`: derived ledger refreshed; strict gate nonzero solely because Batch 6 has no reviewed consumer input. Batch 13 is 28/28 verified with no orphan.
- `node tools/step1-decisions.mjs check --run phase-2-remaining-27`: all 958 manifested items are currently ready; the run remains open only for the two empty Batch-6 page inventories (`unbounded-self-adjoint-operators-and-stones-theorem` and its examples page). All 115 owned Batch-13 items are ready and none appears in `work`.

Owner/operator reconciliation and the full engine gate remain separate from these worker readiness records. Step 3 supplies independent mathematical approval.
