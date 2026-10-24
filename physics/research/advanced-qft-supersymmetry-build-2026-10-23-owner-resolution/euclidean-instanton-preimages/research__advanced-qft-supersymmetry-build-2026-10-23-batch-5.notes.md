# Batch 5 — Step 1 authoring evidence

Run: `advanced-qft-supersymmetry-build-2026-10-23`

Batch: 5 (beta, quantum-field-theory-mathematics)

Updated: 2026-10-23

## Plan and inventory

The assigned design section, `research/plan-advanced-qft-and-supersymmetry-track.md` (“Instanton Charge, Self-Dual Bound, and BPST Example”), and the exact `research/plan-spec.json` rows agree with the batch-5 manifest on both page IDs, order 961, title, category, `library: mathematics`, companion, and required pages `qftx-gauge-geometry` and `chern-weil-theory-and-characteristic-forms`. No design/plan conflict was found.

The noncanonical `scaffold/proposed-inventory.json` page-pair row lists only `qftx-gauge-geometry` in `requires`, while listing the Chern–Weil page as a supplier and source page; its definition candidate also omits the real-characteristic-class comparison and integral Chern-class definition needed for the planned integer specialization. The canonical plan and current batch manifest name both prerequisite pages. They control, so this batch follows both without changing the shared plan or scaffold inventory.

The run dependency-level file sets batch 5 to level 1 with batch 2 as its in-run prerequisite. The current batch-2 A page `qftx-gauge-geometry` supplies five relevant items. Their actual item levels are 0 for `def-qftx-nonabelian-gauge-data`, `def-qftx-principal-connection-form`, and `def-qftx-lie-algebra-valued-form-bracket`, and 1 for `lem-qftx-principal-curvature-cartan-bianchi` and `def-qftx-associated-covariant-derivative`. The original items use those exact current interfaces and have levels 2, 3, and 4 in supplier-first order. The proof audit required two local prerequisites not named as separate design candidates: `lem-qftx-hodge-star-decomposition-four-dimensions` proves the Hodge decomposition and conformal invariance on two-forms, and `lem-qftx-two-chart-principal-bundle-gluing` proves the smooth bundle construction used by the BPST example. Both are complete local proofs with only mathematical supplier dependencies; each has level 0. This justified inventory expansion does not change the planned physics scope or original item levels.

## `lem-qftx-hodge-star-decomposition-four-dimensions`

This local prerequisite states and proves that on an oriented four-dimensional inner-product space, the Hodge star on two-forms is an isometric involution with orthogonal ±1 eigenspaces and projections `(I±*)/2`, extended to a finite-dimensional inner-product coefficient space; it also proves conformal invariance under `g↦λ²g`. The proof lists the six basis-pair actions in a positively oriented orthonormal coframe, derives eigenspace orthogonality and uniqueness, and checks metric scaling directly from the defining wedge identity. It has no item dependencies and is at dependency level 0. Its source is Tong, Lecture 1 §1.1.1, equations (1.6)–(1.8), printed pp. 8–9; the local proof is complete rather than source-dependent.

## `lem-qftx-two-chart-principal-bundle-gluing`

This local lemma forms the quotient of two trivial right principal bundles over an open cover by one smooth group-valued transition map. It proves chart injectivity/openness, smooth compatibility, Hausdorff and second-countable properties, the well-defined smooth free/transitive right action, local product projection, and the local-section transition identity. Its direct mathematical suppliers are `def-smooth-principal-g-bundle` and `def-lie-group`, both outside the run; their physics import pins match the current bytes (`68b72d450fb576f5005b47628ded422cb502c70638dc505685c056b00ab9e39d` and `adcdfec6fc8a3bc87f596092d223860c98b94910f1624d265307d3d875886283`). It has in-run level 0. Tong, Lecture 1 §1.1.2, equations (1.9)–(1.11), printed pp. 9–10, is the source-context for the two-patch instanton construction; the general quotient proof is local and complete.

## `def-qftx-instanton-number-and-asd-sector`

The item defines `β_B=(8π²)⁻¹B(F∧F)` and its real Chern–Weil charge for a compact matrix group with an explicitly chosen positive invariant form, carefully withholding integrality for arbitrary trace normalization. For the defining SU(2) representation it proves `q = -<c2(E),[X]>` in the library convention `det(I−Ω/(2πi))`, and defines the self-dual and ASD sectors on a connected compact oriented Riemannian four-manifold without boundary. The local Hodge lemma supplies the involution, eigenspace projections, orthogonality, and conformal invariance used here and by the bound/example. The local curvature convention is `F_i=dA_i+1/2[A_i∧A_i]`. Full AC is stated and used only for the supplied characteristic-class comparison and integral-class construction.

Direct item dependencies: `def-qftx-nonabelian-gauge-data`, `def-qftx-principal-connection-form`, `def-qftx-lie-algebra-valued-form-bracket`, `lem-qftx-principal-curvature-cartan-bianchi`, `def-qftx-associated-covariant-derivative`, `def-invariant-polynomial-on-a-matrix-lie-algebra`, `def-evaluation-of-an-invariant-polynomial-on-curvature`, `def-the-chern-weil-homomorphism`, `thm-chern-weil-homomorphism-is-independent-of-connection-and-natural`, `def-chern-pontryagin-and-euler-characteristic-forms`, `thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals`, `def-chern-classes-from-the-projective-bundle-relation`, `def-complex-linear-and-compatible-bundle-connections`, `thm-de-rham-theorem`, `def-axiom-of-choice`, and `lem-qftx-hodge-star-decomposition-four-dimensions`. All roles are `mathematical-premise`. The five in-run suppliers lie on `qftx-gauge-geometry`; the remainder are pinned mathematics.

The five current in-run item statements and complete proofs were inspected, including the Cartan curvature/transition/Bianchi lemma. A final `loadStep1Record`/`step1Decision` check at 2026-10-23 08:15 UTC returned hash-current `ready` records for all five suppliers: `def-qftx-nonabelian-gauge-data` (`fea402ed63d67be8f9616086761e2c0525ad5d60c495dc7a8cd7ebd0651e1686`), `def-qftx-principal-connection-form` (`949055d7e4eee859f0f986d5bb81d2da851d915c764e2986be7498b6f7169d47`), `def-qftx-lie-algebra-valued-form-bracket` (`4165c400ebdf60186d16a6adae6fd68cd241e00f48c7a155742505de699f0279`), `lem-qftx-principal-curvature-cartan-bianchi` (`b1ecae8ce6df2ae0bea2de0b8fbc42462b2a613bdcede09cc98a6cd579fdf1f6`), and `def-qftx-associated-covariant-derivative` (`33e99666a0b141cc2c46b4a6be668b60bd7c112ed534de4cd43a6ba4be1f1c36`). Their inspected hypotheses and conventions match the actual definition, theorem, and example uses, so those in-run edges are verified. These readiness records establish authoring inputs only, not independent proof acceptance; no batch-2 content was edited.

The exact imported Chern–Weil suppliers were inspected in the physics snapshot, including the full proof of `thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals`, the connection-independence theorem, the determinant-form definition, the integral projective-bundle definition, and the de Rham integration map. `research/math-imports.json` identifies the read-only original source root `/home/lazyinspirit/Projects/prestige-math-library`; the current local bytes of the Chern–Weil page and ten cited item suppliers match their import pins. The real-class comparison and projective-bundle construction both carry full AC, so the item preserves that assumption.

Full-text sources inspected and their intended dispositions:

- Belavin, Polyakov, Schwartz, and Tyupkin, pp. 85–87, complete three-page paper: included for the finite-action sectors, winding charge, bound, and explicit SU(2) construction, with its trace sign translated rather than copied.
- Tong, Lecture 1 §§1.1–1.1.2, printed pp. 6–10, full lecture-notes source: included as an independent treatment of the boundary winding, action normalization, Bianchi implication, and charge-one SU(2) solution. Tong uses Hermitian generators; this batch uses anti-Hermitian generators.
- Haller, §II.4.1 and Example II.4.5, printed pp. 88–92, full lecture notes: included for connection-independent classes and the determinant-form/c2 normalization.
- Milnor–Stasheff, Appendix C, printed pp. 308–309, full book: included for curvature-polynomial Chern-class comparison. The book's sign convention warning on printed p. 306 is retained; the local item derives the sign from the library's convention.

Searches included “Belavin Polyakov Schwartz Tyupkin Pseudoparticle Solutions of the Yang Mills Equations full text PDF 1975”, “David Tong TASI Lectures on Solitons Instantons section 1 BPST instanton pdf”, and searches for Haller's Atiyah–Singer notes and the Milnor–Stasheff book. The source URL `https://xiaoshuo-lin.me/files/Char-Class.pdf` timed out in browser retrieval; a complete 333-page typeset copy of the same book was retrieved and the relevant Appendix C reasoning was inspected, so it is not treated as an unresolved source or proof substitute. `source-fetch-check --stamp` succeeded for all four selected URLs (four verified full texts, zero retries, zero drops); the recorded UTC times, byte counts, page counts, and hashes are in the coverage file.

## `thm-qftx-yang-mills-selfdual-action-bound`

The theorem uses the exact definition's global Chern–Weil charge and the current curvature lemma's `D_A F=0` identity. The new Hodge decomposition lemma proves the orthogonal split `F=F^++F^-`; the theorem sets `a=||F^+||_B^2` and `b=||F^-||_B^2`, derives `S=(a+b)/g^2` and `q=(a-b)/(8π^2)`, and proves the bound and all three equality cases, including the smoothness/positive-volume argument for vanishing integrated norms. It then obtains `D_A(*F)=0` directly from Bianchi for both signs. The proof asserts no solution existence, uniqueness, or variational boundary step.

Direct dependencies are `def-qftx-instanton-number-and-asd-sector`, `lem-qftx-principal-curvature-cartan-bianchi`, `def-axiom-of-choice`, and `lem-qftx-hodge-star-decomposition-four-dimensions`; all roles are `mathematical-premise`. Its item level is 3 because the local definition has level 2. The batch-2 curvature lemma has a hash-current ready record and its inspected `D_A F=0` interface matches step 3.1; the theorem received a `ready` authoring-readiness record after final local checks. The statement uses the same anti-Hermitian trace and Chern–Weil sign as the definition.

The complete primary and lecture-note passages supporting this scope were inspected: Belavin et al., printed pp. 85–86, equations (3)–(10), and Tong, Lecture 1 §1.1.1, printed pp. 8–9, equations (1.6)–(1.8). Their conventions are references only; the local proof derives its normalization from the assigned definition.

Tong, Lecture 1 §1.1.1, printed pp. 8–9, equations (1.6)–(1.8), also supports the Hodge self-dual/anti-self-dual split used in the action square-completion; the helper supplies the complete basis-level proof for general coefficient inner-product spaces.

## `ex-qftx-su2-bpst-one-instanton`

The example constructs a global smooth connection on the right principal SU(2) bundle over the round unit `S4`. It gives both chart potentials and the exact transition `s_S=s_N u^{-1}`, with `B=-tr_2` and anti-Hermitian `T_a=-iσ_a/2`. The proof verifies the quotient bundle and connection patching, derives the regular-gauge curvature with explicit spatial-index contractions, checks self-duality using the local conformal Hodge result, and computes `B(F∧*F)=48ρ^4(r^2+ρ^2)^{-4}d^4x`, including the radial integral evaluation to `8π²`; hence the defined charge is `+1` and the action saturates the proven bound. It asserts no uniqueness or moduli classification.

Direct dependencies: four used mathematical geometry suppliers from batch 2 (`def-qftx-nonabelian-gauge-data`, `def-qftx-principal-connection-form`, `def-qftx-lie-algebra-valued-form-bracket`, and `lem-qftx-principal-curvature-cartan-bianchi`), the local gluing and Hodge lemmas, `def-qftx-instanton-number-and-asd-sector`, `thm-qftx-yang-mills-selfdual-action-bound`, `ex-unitary-and-special-unitary-lie-groups`, `thm-heine-borel-rn`, and `def-axiom-of-choice`; all roles are `mathematical-premise`. With the local theorem at level 3, the example level is 4. The patching and curvature uses match the exact inspected batch-2 interfaces, whose current readiness records are hash-current and `ready`; the example received a `ready` authoring-readiness record after its local predecessors were recorded.

The statement is a source-derived worked construction from Belavin et al., printed pp. 85–87, independently compared with Tong's full lecture notes, Lecture 1 §§1.1–1.1.2, printed pp. 6–10. Both sources use conventions different from the local anti-Hermitian `B=-tr_2` convention; the verification derives the conversion directly rather than importing their sign.

## Completion

All assigned A/B content, the two local prerequisite proofs, contracts, manifests, coverage, source evidence, cross-batch checks, and current Step-1 readiness records are complete. All five items are authoring-ready; independent review and publication gates remain separate.

## Final scoped validation and readiness

The final manifest is frozen with all five item `design_state` entries set to Step 1 ready. Current readiness was rechecked after recording; `loadStep1Record` plus `step1Decision` returns `decision: ready`, `closed: true` for every assigned item:

- `lem-qftx-hodge-star-decomposition-four-dimensions`: hash `f7be6880ee712a679b584d5bb2402fc6b8abb9a52e1b8f5b04606731ef960fe8`, recorded 2026-10-23T08:28:03.492Z.
- `lem-qftx-two-chart-principal-bundle-gluing`: hash `f5849998874cb91fc705a404f983c668efe5465f550950e5c703d3ea94ad77ce`, recorded 2026-10-23T08:28:11.936Z.
- `def-qftx-instanton-number-and-asd-sector`: hash `0d60cbf483b3e448972b8dac47121e6cef167046c84955b6e3e9c52020608bd3`, recorded 2026-10-23T08:28:20.382Z.
- `thm-qftx-yang-mills-selfdual-action-bound`: hash `9e6e87043a0430d14c732a839bcbc5832531b694685ca48f56f39d030fe6faac`, recorded 2026-10-23T08:28:28.514Z.
- `ex-qftx-su2-bpst-one-instanton`: hash `61eaacbc24ad8da323cff49e2776a83785b61dd62e62f9d98b54ccf91c114950`, recorded 2026-10-23T08:28:36.999Z.

All five records were written with `owner: false`. They record Step 1 authoring readiness only; independent review and publication gates remain separate. The cross-batch dependency array contains 11 direct edges (one page, ten item edges), all `verified` after the current batch-2 readiness and interface checks; this is not independent proof approval.

Scoped checks passed: content-policy (5 items, zero errors/warnings); depcheck (5 selected items, prerequisite cycle checks across 2,114 items/279 pages); precheck (5/5); proof-layout (5 items, 16 steps, zero defects); rendercheck (7 files); strict proof-contract (5/5, zero errors/warnings); coverage-checklist (1 A page, 10 harvested results, zero errors/warnings); and source-fetch-check (4/4 sources fetched and resolved). A direct statement/page audit confirmed all five manifest statements exactly match current complete sections with no hyperlinks, page frontmatter inventories match the manifest, and both page bodies are empty.

The scoped in-run dependency calculation over batch 2 and batch 5 has no errors and gives levels 0 for both local helper lemmas, 2 for the charge definition, 3 for the bound, and 4 for the BPST example. The run-wide item-dependency command still reports 88 errors outside this batch: unfinished page inventories (for example `qftx-nonabelian-lattice-mathematics` and `qftx-borel-localization`) and three pre-existing item-level mismatches, `def-qftx-euclidean-yang-mills-sector` (2 vs computed 3), `ex-qftx-euclidean-trivial-vacuum-sector` (3 vs 4), and `ex-qftx-bpst-instanton-formal-sector-weight` (3 vs 5). Those entries belong to other batch scopes and were left unchanged.
