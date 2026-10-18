# Step 3a reader report — batch 76

Run: `non-ml-math-remaining-81-2026-10-18`  
Role: reader  
Scope: batch `76`

## Verdict

The A-page mathematics is supported after the repairs below. The seven example items and the B-page summary accurately describe their constructions and conclusions. The B-page title advertises counterexamples, but the page contains only examples; this is reported for the owner because B-page prose is outside my edit permission.

No reader-specific blocker remains. At the start of review, recomputed autopilot status showed the run active at `3a-read`; no dispatch was running.

## Opened inventory

Assigned pages:

- `library/representation-theory/unitary-poincare-representations-and-little-groups.md` (A; draft)
- `library/representation-theory/unitary-poincare-representations-and-little-groups-examples.md` (B; draft)

Assigned items, read in manifest dependency order:

- Level 0: `def-connected-poincare-cover-and-positive-energy`; `lem-mackey-induction-classification-for-regular-euclidean-duals`.
- Level 1: `lem-lorentz-stabilizers-and-connected-cover-preimages`.
- Level 2: `lem-poincare-dual-orbits-are-regular-homogeneous-borel-spaces`; `lem-null-little-group-unitary-duals-for-all-dimensions`; `lem-central-kernel-descent-for-poincare-inductions`.
- Level 3: `thm-positive-energy-wigner-mackey-classification-for-connected-covers`.
- Level 4: `ex-d4-massive-spin-and-so3-descent`; `ex-d4-helicity-and-continuous-spin-central-parities`; `ex-d4-nonzero-null-translations-are-continuous-spin`; `ex-d3-irrational-massive-spin-fails-finite-cover-descent`; `ex-d3-null-signs-and-central-phases`; `ex-d2-future-null-rays-are-inequivalent`; `ex-d2-zero-orbit-has-nontrivial-lorentz-character`.

Required context pages opened:

- `library/lie-theory/gauge-groups-and-representation-theory-interfaces.md` (draft)
- `library/representation-theory/mackeys-imprimitivity-theorem.md` (published)
- `library/algebraic-topology/hurewicz-whitehead-freudenthal-and-cw-approximation.md` (published)

Local supplier items opened at the statements and proof clauses used in this review:

- Mackey/PVM/induction: `cor-mackey-little-group-reduction-for-an-abelian-normal-subgroup`; `thm-mackey-imprimitivity-theorem`; `thm-uniqueness-in-mackey-imprimitivity`; `lem-ergodic-imprimitivity-systems-with-regular-orbits-concentrate-on-one-orbit`; `lem-spectral-measure-of-a-representation-of-an-abelian-lch-group`; `thm-existence-of-rho-functions-and-quasi-invariant-measures-on-g-mod-h`; `lem-radon-nikodym-cocycle-of-a-homogeneous-measure`; `thm-unitary-induction-from-a-closed-subgroup`; `def-covariant-function-model-of-unitary-induction`; `lem-the-induced-action-is-unitary`; `lem-the-induced-action-is-strongly-continuous`; `lem-borel-cross-sections-for-closed-subgroups`; `def-system-of-imprimitivity`; `def-transitive-system-of-imprimitivity`; `lem-induced-representations-carry-a-canonical-system-of-imprimitivity`; `def-projection-valued-measure`; `lem-nondegenerate-czero-representations-have-regular-pvms`.
- Duals/topology: `thm-dual-of-an-lca-group-is-locally-compact-abelian`; `lem-compact-open-character-group-operations-are-continuous`; `def-pontryagin-dual-and-compact-open-topology`; `lem-continuous-characters-of-the-real-line-are-exponentials`; `lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure`; `lem-closed-subgroup-quotient-averaging-and-compact-lifts`.
- Covers/homotopy: `thm-universal-covering-lie-group`; `thm-connected-lie-groups-are-central-quotients-of-their-simply-connected-integrations`; `thm-uniqueness-of-lifts-from-a-connected-space`; `thm-product-of-connected-spaces`; `cor-based-connected-coverings-isomorphic-iff-equal-subgroups`; `thm-deck-group-of-a-universal-cover-is-the-fundamental-group`; `thm-long-exact-sequence-of-homotopy-groups-of-a-fibration`; `lem-first-homotopy-group-of-a-wedge-of-higher-spheres-has-its-cell-basis`; `cor-geometric-unit-circle-has-fundamental-group-z`; `ex-su-two-to-so-three-as-a-covering-homomorphism`; `def-locally-trivial-fiber-bundle`; `def-hurewicz-and-serre-fibrations`; `thm-smooth-partitions-of-unity-exist-on-manifolds`; `thm-numerable-fiber-bundles-are-hurewicz-fibrations`.
- Representation and conventions: `thm-schurs-lemma-for-unitary-representations`; `thm-complex-nth-roots-and-roots-of-unity`; `def-covering-homomorphism-of-lie-groups`; `def-lie-group`; `def-external-semidirect-product`; `thm-external-semidirect-product-is-a-group`; `def-strongly-continuous-unitary-representation`; `def-axiom-of-choice`; `def-countable-choice`; `thm-choice-implies-dependent-implies-countable-choice`; `thm-second-countable-implies-separable`.

The batch manifest, current proof-contract file, and coverage record were used as navigation/evidence. Author notes and prior review decisions did not determine the verdict.

## Repairs and evidence

- `items/def-connected-poincare-cover-and-positive-energy.md`, Definition paragraph beginning “Assume AC”: the definition applied the local spectral-measure lemma to an arbitrary carrier although that lemma's Statement assumes a separable Hilbert space. I retained the arbitrary-carrier definition and explained the valid extension: the integrated (C_0(\widehat{\mathbb R^D})) construction in that proof's steps 2.1–7.1 uses the nondegenerate (C_0)-PVM theorem, which has no separability assumption; the zero carrier has the zero PVM. The separability use in the cited proof's step 1.1 obtains second-countability/standard-Borel properties that are not needed for PVM existence or uniqueness here. The dual is LCH and Haar measure on (\mathbb R^D) is σ-finite. No direct dependency edge was added; the arbitrary-carrier (C_0) result is already in the cited spectral supplier's dependency closure.
- `items/lem-mackey-induction-classification-for-regular-euclidean-duals.md`, proof 1.1: the proof used continuity of the dual action to conclude that (K_\chi) is closed without establishing it. I added the compact-open evaluation and tube-lemma argument, deriving joint continuity from the assumed continuous action on (N=\mathbb R^d).
- The same item, proof 4.1: “regular nonzero PVMs on (O)” was stronger than the hypotheses. The general statement gives Borel orbits, not locally compact orbits, while the library's regular-PVM definition requires a locally compact Hausdorff base. The irreducibility argument needs only the inherited nonzero PVMs and the countable-base support argument. I removed “regular” and made explicit that step 2.1's Borel equivariant isomorphism (O\cong G/H_\chi) transports the restricted systems to the base required by Mackey's theorem. The matching step 1.1 and 4.1 proof-contract derivations were updated; step 4.1 now cites step 2.1.
- `items/ex-d4-massive-spin-and-so3-descent.md`, frontmatter `axiom_use`: removed the unsupported “highest-weight module supplier” attribution. The proof establishes the two module actions directly by finite-dimensional calculations; its listed dependencies are the positive-energy classification and the (SU(2)\to SO(3)) cover.
- `items/thm-positive-energy-wigner-mackey-classification-for-connected-covers.md`, Statement: made the displayed classification formula a properly introduced display and replaced the dangling lowercase “where” with “Here”. The quantified family of representations is unchanged.

No changed item had a stale `verification.judge` record to remove. The definition has no phase-proof contract; the only affected contract rows were those for the Mackey lemma.

## Page verdicts

- A page `unitary-poincare-representations-and-little-groups`: pass after the repairs above. Its summary accurately states the mostly-plus convention, full causal orbit list and cover-stabilizer data, the measurable Mackey classification, zero momentum, and the boundaries on parity, time reversal, spin-statistics, and QFT interpretation.
- B page `unitary-poincare-representations-and-little-groups-examples`: examples and summary are accurate. Its frontmatter title says “Examples and Counterexamples”, but the page lists seven `ex-` items, has no `cex-` item, and its body has only an Examples section. This uneditable title issue is included in the findings JSON.
- Required context page `gauge-groups-and-representation-theory-interfaces`: its stated gauge-group material is not used as a logical premise by the reviewed item proofs; no defect affecting this batch was found.
- Required context page `mackeys-imprimitivity-theorem`: its summary matches the local theorem, uniqueness result, and abelian-normal-subgroup reduction used here.
- Required context page `hurewicz-whitehead-freudenthal-and-cw-approximation`: the cited sphere/wedge homotopy result is present and supplies the homotopy-group vanishing used in the stabilizer cover calculation.

## Authoritative source check

- Xavier Bekaert and Nicolas Boulanger, [*The unitary representations of the Poincaré group in any spacetime dimension*](https://arxiv.org/pdf/hep-th/0611263), §1.1–§1.2 (PDF pp. 2–4), §3.1–§3.3 (PDF pp. 9–15), and Appendix B §§B.1–B.3 (PDF pp. 54–58). The opened sections corroborate the mostly-plus convention and connected Lorentz group, induced little-group route, causal mass-shell orbits, (SO(D-2)\ltimes\mathbb R^{D-2}) null little group, zero-momentum Lorentz representations, and the D=3 real-spin/null-translation branches. This physics-oriented treatment does not establish the local Borel converse/equivalence proof, all global cover preimages, both D=4 cover parities, or the D=2 cases; those were checked in the local items.
- Niklas Beisert, [*Quantum Field Theory I*](https://people.phys.ethz.ch/~lecture/nbeisert/QFT1-25HS/QFT1-25HS-Notes.pdf), Chapter 4.4, printed pp. 4.13–4.16 (PDF pp. 60–63). It corroborates the mostly-plus mass sign, positive/negative energy separation, massive (Spin(3)=SU(2)) little group, D=4 helicity, continuous-spin allowance, and zero-momentum representation. Its physics-level simultaneous-eigenstate discussion is corroboration rather than a measure-theoretic proof.

## Scoped checks

- `node tools/tsx-run.mjs tools/reflow.mts` and `node tools/tsx-run.mjs tools/precheck.mts` were run for each of the four changed items. Reflow reported unchanged for all four; precheck reported 0 failures (the definition had 0 proof rows; the three proof-bearing items each passed).
- `node tools/proof-layout.mjs items/def-connected-poincare-cover-and-positive-energy.md items/lem-mackey-induction-classification-for-regular-euclidean-duals.md items/ex-d4-massive-spin-and-so3-descent.md items/thm-positive-energy-wigner-mackey-classification-for-connected-covers.md` reported 4 items, 18 steps, 0 defects.
- The scoped work did not run a build gate, stamp an item, or change a published dependency.

## Coverage note

All assigned pages and items were opened. Direct supplier statements/proof clauses needed for the reviewed inferences and the cited source sections listed above were inspected. I did not recursively audit every transitive proof below the published foundational suppliers; no unresolved uncertainty remains in the assigned mathematics based on the local proofs and evidence reviewed.
