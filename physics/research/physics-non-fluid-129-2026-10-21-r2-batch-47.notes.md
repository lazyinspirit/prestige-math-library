# Batch 47 Step 1 notes

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: beta  
Assigned pair: `nrqmx-adiabatic-holonomy` / `nrqmx-adiabatic-holonomy-examples`

## Plan and scope

The assigned design and current `plan-spec.json` agree on the A/B page IDs, title, category, mathematics library, order (791/792), and page requirements (`qm-math-controlled-dynamics`, `chern-weil-theory-and-characteristic-forms`). The batch dependency-level input places batch 47 at level 0 with no in-run page suppliers. No plan-spec conflict or owner-direction file was found.

The design calls the projector bundle “smooth,” while its actual input regularity is C2. The local definition title says C2 to avoid implying C-infinity regularity; its mathematical interface and scope are unchanged. The design’s two-chart Stokes and winding route is included as a conditional clutching statement in the rank-one theorem and checked explicitly on the spin-half example.

Four local A-page prerequisites were added before their consumers: Kato bundle/transport well-definedness, C2 projector Chern integrality, C1 Stokes on piecewise-smooth surface regions, and spin-half solid-angle filling independence. Their proofs supply the missing bundle construction and ODE, the C2-to-smooth Chern comparison, the regularity extension of Stokes, and the 4-pi filling ambiguity. The A page contains eight items and the B page two, both below the 100-item cap.

## Interfaces and conventions

- The current finite-dimensional adiabatic supplier was read with its complete proof. It assumes Countable Choice, a C2 finite Hermitian family, a continuous coherently followed cluster and a uniform positive gap; it supplies C2 projector regularity, Kato intertwining, a C1 Hermitian commutator solution, and the stated C/tau leakage bound. The geometric-phase item rescales tau=T/hbar and preserves the supplier’s gap condition and explicit constant.
- The imported first-Chern comparison was read with its complete proof and its pinned import hash matches `research/math-imports.json`. It assumes full AC and uses the anti-Hermitian normalization `-Omega/(2 pi i)`; all signs use `A=u*du` and parallel coefficient `c'=-Ac`.
- Tong’s lecture uses the real connection `A_T=-i<u|du>`. The authored anti-Hermitian convention is converted directly. The displayed polar curvature omits a factor one half and nearby surface-phase signs conflict; the local derivations do not use those displays as premises.
- The Kato and curvature calculations are matrix identities for finite-dimensional C2 projector families. No Schrödinger evolution is inferred from geometric transport. Rank-r curvature is matrix-valued; no scalar Abelian holonomy formula, non-Abelian topological phase, or modular-functor claim is made.
- Initial precheck repair proposals for the Kato lemma, C2 Chern lemma, rank-one holonomy proof, and spin-half filling lemma were reviewed and their mathematically valid canonical step orderings adopted.

## Source reading and resolution

Three full-text sources were inspected and fetch-verified:

- David Tong, *Applications of Quantum Mechanics*, complete 370-page lecture-note PDF; §6.3.4, printed pp. 172–174, and §6.3.5, pp. 175–177. It supports the Berry connection, loop phase, spin-half spinor and monopole comparison.
- Avron, Seiler, and Yaffe, *Adiabatic Theorems and Applications to the Quantum Hall Effect*, complete 18-page article; §1, printed pp. 36–37, and §2, pp. 37–43. It supports the Kato generator, intertwining and the uniform-gap leakage setting.
- John M. Lee, *Introduction to Smooth Manifolds*, 2nd ed., complete 726-page PDF; Theorem 16.11 and proof, printed pp. 411–414, and Theorem 16.25, pp. 419–420. It supplies the smooth Stokes input and corner convention; the C1 extension is proved locally by chartwise C1 mollification.

Berry’s 1984 scan had no readable text layer and the MIT mirror timed out. Simon’s APS PDF returned HTTP 401; the available scan and mirror were likewise unreadable or timed out. Search history, attempts and per-item alternative arguments/dependencies are in `batch-47.coverage.json` under `source_resolution`. Tong and Avron provide independent full-text treatments; the C1 lemma cites Lee for the smooth theorem. No mathematical result was dropped. The Berry and Simon candidates are recorded as resolved by alternatives, not dropped.

## Dependency inventory and status

Computed item levels are:

| Item | Level |
|---|---:|
| `def-nrqmx-smooth-projector-bundle` | 0 |
| `lem-nrqmx-c1-stokes-compact-surface` | 0 |
| `lem-nrqmx-projector-bundle-kato-well-definedness` | 1 |
| `thm-nrqmx-berry-projector-curvature` | 2 |
| `lem-nrqmx-c2-projector-chern-integrality` | 3 |
| `thm-nrqmx-adiabatic-geometric-phase-bound` | 3 |
| `cex-nrqmx-gap-closing-adiabatic` | 4 |
| `lem-nrqmx-spin-half-solid-angle-period` | 4 |
| `thm-nrqmx-rank-one-chern-holonomy` | 4 |
| `ex-nrqmx-spin-half-monopole` | 5 |

All direct mathematical and page dependencies were inspected at their current interfaces. The cross-batch dependency file contains 47 direct rows (45 item, 2 page), all `verified`, with no open edges. Those statuses record scoped interface checks only. The dependency-input file contains all ten item interfaces and the two published page requirements. The focused dependency closure checked 2,202 items and 368 pages; this transitive closure is recorded as context, not expanded into unsupported review rows.

## Scoped checks and readiness

- Precheck: 9 proof-bearing items passed; 0 failures.
- Strict proof contracts: 9 contracts; 0 errors and 0 warnings.
- Proof layout: 10 changed items, 31 steps, 0 defects.
- Content policy: 10 items; 0 errors and 0 warnings.
- Dependency check: 10 selected items and both pages; 0 errors and 0 warnings.
- Render check: 12 item/page files; 0 errors and 0 warnings.
- Dependency levels: 10 items; no cycles or label mismatches.
- Source fetch check: 3/3 sources verified; 0 documented drops.
- Step 1 decision records: all ten assigned items are current and `ready`. These records certify authoring prerequisites and placement only; independent proof review remains a later gate.

No unresolved mathematical prerequisite, missing carrier, page-capacity issue, or cross-batch change remains.
