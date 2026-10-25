# Step 3a reader report — batch 3

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Role: reader  
Scope: batch `3`

## Opened inventory

Assigned pages:

- `qftx-gauge-slice-mathematics`
- `qftx-gauge-slice-mathematics-examples`

Assigned items, read independently and in claim order:

- `def-qftx-gauge-slice-and-faddeev-popov-operator`
- `lem-qftx-smooth-principal-connection-exists`
- `thm-qftx-local-faddeev-popov-slice-jacobian`
- `thm-qftx-singer-global-gauge-section-obstruction`
- `ex-qftx-translation-gauge-slice-jacobian`
- `ex-qftx-so2-gauge-slice-multiplicity`

The pages and their declared prerequisites were opened: `fubini-and-change-of-variables`, `inverse-and-implicit-function-theorems`, `qftx-gauge-geometry`, `qftx-sobolev-gauge-orbit-geometry`, `qftx-irreducible-connection-topology`, `qftx-gauge-group-sphere-homotopy`, `smooth-partitions-of-unity-and-exhaustions`, `countability-and-uncountability`, `lie-groups-invariant-fields-and-the-exponential-map`, `gauge-groups-and-representation-theory-interfaces`, and `relations-functions-and-quotients`. Both assigned pages have empty bodies and `page_layout: compact-v1`; their draft status, inventories, and prerequisite lists match the current batch manifest.

Item suppliers opened for the finite-dimensional definitions and proof include `def-axiom-of-choice`, `def-countable-choice`, `def-lie-group`, `def-left-maurer-cartan-form`, `def-gauge-group-of-a-smooth-principal-bundle`, `thm-the-tangent-space-at-the-identity-is-a-lie-algebra`, `def-qftx-nonabelian-gauge-data`, `def-qftx-principal-connection-form`, `lem-qftx-principal-curvature-cartan-bianchi`, `thm-euclidean-inverse-function-theorem`, `cor-change-of-variables-for-compactly-supported-functions`, `def-smooth-partition-of-unity-subordinate-to-an-open-cover`, and `thm-smooth-partitions-of-unity-exist-on-manifolds`.

The Singer proof's current-run supplier chain was opened directly, including `def-qftx-smooth-sobolev-gauge-configuration`, `lem-qftx-gauge-sobolev-calculus`, `lem-qftx-gauge-stabilizer-and-properness`, `lem-qftx-covariant-laplacian-sobolev-splitting`, `thm-qftx-sobolev-smooth-irreducible-gauge-bundle`, `lem-qftx-irreducible-finite-holonomy-witness`, `lem-qftx-holonomy-incidence-codimension`, `lem-qftx-relative-finite-parameter-irreducible-avoidance`, `thm-qftx-irreducible-connections-weak-contractibility`, `lem-qftx-complex-grassmannian-compactness`, `lem-qftx-sphere-gauge-evaluation-fibration`, `lem-qftx-based-gauge-sphere-homotopy`, `lem-qftx-low-unitary-homotopy-inputs`, `lem-qftx-pi5-special-unitary-nonzero`, `thm-qftx-reduced-gauge-group-sphere-nontriviality`, and `lem-qftx-section-retract-obstruction`.

Relevant published mathematical supplier statements were checked at their use sites, including the Banach implicit/inverse function theorems, Neumann perturbation, elliptic regularity and the Sobolev algebra/embedding/compactness results, Fredholm index stability, interpolation, Schur's lemma, the ODE dependence and matrix-ODE results, parametric transversality, the regular-level-set theorem, Morse–Sard, null-set closure/density, and the homotopy long exact sequence and covering-space lifting/injection results. I did not re-audit the complete transitive proof closure of every published root-mathematics supplier.

## Review findings and repairs

The finite-dimensional datum in `def-qftx-gauge-slice-and-faddeev-popov-operator` is explicitly regulated: its group `K` and action are independent of the full gauge group, and the statement defines the slice, submersion, orbit derivative, FP map, and density ratio. Its scope limitation correctly excludes an infinite-dimensional determinant or continuum measure.

The local theorem's inverse-function argument, block Jacobian, chart change-of-variables step, and mollified finite-root formula are supported by its stated hypotheses and exact suppliers. In proof steps 3.1 and 4.1, I changed the group-density coefficient from `rho_K(0)` to `rho_K(xi(e))`; this removes an implicit assumption that the chosen group chart is centered at the identity. The matching derivation in the batch-3 proof contract was updated.

The two examples omitted the definition's required distinguished slice point and open neighborhood. I added `s0=(0,0), U=X` in the translation example and `s0=(1,0), U=X` in the `SO(2)` example. I also gave `SU(2)` and its Lie algebra as explicit matrix sets, supplied its sphere parametrization and noncommuting witnesses, and verified that the stated trivial-bundle Maurer–Cartan form satisfies the principal-connection conditions. The translation example's proof now makes its zero extension of the compactly supported test function explicit. The `SO(2)` proof now specifies the two inverse branches as arcs mapping diffeomorphically onto an interval containing the mollifier support. The example derivations and nonempty-data boundary records were updated in the batch-3 proof contract.

In `lem-qftx-smooth-principal-connection-exists`, step 1.2 now identifies the curve in the definition of the fundamental vertical vector with the supplied Lie-group exponential and states its initial tangent explicitly. The affected derivation in the proof contract was updated. No changed item had a `verification.judge` record to remove.

TikZ/tikzcd diagrams in the reviewed batch and directly used current-run suppliers were checked against their stated maps and conventions. The local tangent-space square, the Singer quotient square, the section-retraction diagram, and the gauge-orbit chart diagram agree with their text; none is used as a proof.

Source checks: David Skinner's Chapter 8 §§8.1–8.1.1 (PDF pp. 154–161) supports the finite `SO(2)` slice/FP derivative and the multiple-intersection/stabilizer discussion; its continuum warning is consistent with the local finite-dimensional scope. I opened the cited Mitter–Viallet paper and inspected its setup and local Sobolev slice/principal-fibration sections (printed pp. 458–471); it is contextual and is not used to prove the finite-dimensional theorem. I read Neeb's Definition 5.4.1, Remark 5.4.5(a), and Proposition 5.4.6 with its proof (printed pp. 91–94), which support the local product connection and partition-of-unity construction. Singer's DOI, title, and bibliographic metadata were checked, but its full text remains unread; the item labels it historical attribution only and supplies a local proof from the listed mathematical items.

## Page verdicts

- `qftx-gauge-slice-mathematics`: **pass**. The A-page is frontmatter-only, has the four assigned A-items, and its listed page prerequisites match the reviewed mathematical and gauge-theoretic supplier interfaces. Its current local theorem and global obstruction claims are appropriately distinguished by their hypotheses and proof suppliers.
- `qftx-gauge-slice-mathematics-examples`: **pass**. The B-page is frontmatter-only, lists the two assigned examples, and requires the A-page. Both examples now supply the neighborhood and slice point required by their shared definition.

## Uneditable defects

None identified in the assigned pages, assigned items, or claim-relevant current-run suppliers.

## Blocker

No blocker to the reviewed claims. The Singer primary-source access limitation is nonblocking because the cited paper is attribution-only and the local proof does not use it.

## Validation

- Reflow: `lem-qftx-smooth-principal-connection-exists`, `thm-qftx-local-faddeev-popov-slice-jacobian`, `ex-qftx-translation-gauge-slice-jacobian`, and `ex-qftx-so2-gauge-slice-multiplicity` each reported unchanged.
- Precheck: all four changed items passed, with zero failing checks.
- Final proof layout: 4 items, 17 numbered steps, 0 defects.
