# Step 3a Reader Report — Batch 36

- Run: `advanced-qft-supersymmetry-build-2026-10-23`
- Role: reader (`reader-36`)
- Scope: batch `36`
- Verdict: both assigned pages pass after the listed local repairs; no uneditable finding remains.
- Blocker: none.

## Opened inventory

### Assigned pages

| Page | Path | Current carrier and contents |
|---|---|---|
| `qftx-defects-and-topological-operators` (A) | `library/advanced-qft-and-supersymmetry/qftx-defects-and-topological-operators.md` | Draft, physics page, frontmatter only. Inventories `def-aqft-topological-defect` and `def-aqft-topological-interface`; requires `qftx-defect-fusion-mathematics` and `qftx-susy-algebra-and-multiplets`. |
| `qftx-defects-and-topological-operators-examples` (B) | `library/advanced-qft-and-supersymmetry/qftx-defects-and-topological-operators-examples.md` | Draft, physics page, frontmatter only. Inventories two examples and one counterexample; requires its A page. |

Both page bodies are empty, as required by the compact page policy. Inventories and titles match the batch manifest.

### Assigned items, read in supplier order

| Item | Path | Kind and dependency check |
|---|---|---|
| `def-aqft-topological-defect` | `items/def-aqft-topological-defect.md` | Draft physics definition; no item dependencies. Checked its selected-model, insertion/network, decorated-isotopy, correlator, normalization, and unit conventions. |
| `def-aqft-topological-interface` | `items/def-aqft-topological-interface.md` | Draft physics definition; depends on `def-aqft-topological-defect` as a formulation prerequisite. Checked source/target convention, collar, fusion condition, symmetry conditions, references, and the TikZCD diagram. |
| `ex-aqft-z2-topological-defect-finite-quantum-mechanics` | `items/ex-aqft-z2-topological-defect-finite-quantum-mechanics.md` | Draft physics example; depends on both assigned definitions. Checked the trace, conjugation action, position invariance, and group fusion identities. |
| `ex-aqft-invertible-interface-between-finite-quantum-mechanics` | `items/ex-aqft-invertible-interface-between-finite-quantum-mechanics.md` | Draft physics example; depends on `def-aqft-topological-interface`. Checked the finite matrix intertwinement, transfer factors, mapped correlators, and both fusion limits. |
| `cex-aqft-topological-interface-not-symmetry` | `items/cex-aqft-topological-interface-not-symmetry.md` | Draft physics counterexample; depends on `def-aqft-topological-interface`. Checked the declared correlators, position invariance, unequal source/target data, and rank obstruction to an inverse. |

The assigned proof-contract file `research/advanced-qft-supersymmetry-build-2026-10-23-batch-36.proof-contracts.json`, batch notes, current cross-batch dependency rows, and the two assigned page carriers were also opened. They were treated as evidence, not as verdicts.

### Dependency context opened

- `library/quantum-field-theory-mathematics/qftx-defect-fusion-mathematics.md` and its item `def-aqft-noninvertible-defect-fusion.md`: the item defines abstract finite semisimple categorical fusion data and explicitly says that this does not construct physical defect operators or prove their topologicality. The assigned examples do not rely on that categorical result for physical realization.
- `library/advanced-qft-and-supersymmetry/qftx-susy-algebra-and-multiplets.md` and `items/def-qftx-bps-state-and-saturation.md`: the latter formulates BPS saturation only in the stated four-dimensional massive-rest-fiber setting. The assigned claims do not depend on this item or on its page's N=2 theorem; the one general BPS/supercharge aside was removed from the assigned interface definition.
- The current batch-36 cross-batch file marks both page prerequisites verified. The older batch notes retain an earlier open-status note for the supersymmetry page edge. This historical note discrepancy is nonblocking: the assigned items have no `deps`/`justified_by` path to that page's items, and no assigned conclusion uses their claims.

I did not inspect the unassigned N=2 theorem proof or the transitive mathematical prerequisites of the two context pages, because no assigned item claim or item dependency closure uses them. No assigned item makes an empirical or statistical claim.

## Source checks

I independently opened the cited sources:

1. Davide Gaiotto, Anton Kapustin, Nathan Seiberg, and Brian Willett, [*Generalized Global Symmetries*](https://arxiv.org/pdf/1412.5148), §1, PDF pp. 1–3, equations (1.1)–(1.2). The passage specifies symmetry operators on closed submanifolds of codimension q+1, correlator invariance under deformation, and group multiplication. The nearby convention paragraph treats operator/defect terminology in Euclidean correlators interchangeably. The qualification that a deformation avoids other insertions is consistent with the paper's later discussion that crossing a charged operator can change the correlator. This supports the general criterion and terminology, not an arbitrary continuum realization.
2. Nils Carqueville, [*Lecture Notes on 2-Dimensional Defect TQFT*](https://arxiv.org/pdf/1607.05747), §2.1, PDF pp. 5–8. The passage defines the specifically oriented 2D decorated-bordism setting, uses source and target maps to label regions on either side of defect lines, and assigns correlators by a symmetric monoidal functor, with bordisms considered up to decorated isotopy. This supports the stated source/target convention and provides context; the finite 0+1-dimensional examples are verified locally.

The source links remain after each complete statement in its references section. No source is used as a substitute for the finite-dimensional proofs.

## Repairs and evidence

1. **`def-aqft-topological-interface`, Definition, former final sentence (current line 46).** The general definition used “supersymmetry,” “BPS,” “supercharges,” and their domains without defining those terms or restricting them to a precise model. I replaced that aside with the explicit scope statement that this definition implies no further property and that any additional claim needs model-specific formulation and verification. This keeps the interface definition general and removes an unsupported cross-framework dependency. The affected in-batch consumers were all checked: `ex-aqft-z2-topological-defect-finite-quantum-mechanics`, `ex-aqft-invertible-interface-between-finite-quantum-mechanics`, and `cex-aqft-topological-interface-not-symmetry`. Their uses are the source/target, topologicality, fusion, and invertibility conditions, none of which changed. A repository search found no other item consumer.

2. **`ex-aqft-z2-topological-defect-finite-quantum-mechanics`, Example (current lines 46 and 50).** The time and matrix units were not explicit, and the point-defect sentence used `U_g` before defining its group `G` and matrix representation. I stated the energy and inverse-energy units, made insertion matrices dimensionless by convention, and moved the `G = Z2` and `U_g` definitions before the point-defect use. The finite trace, conjugation, and fusion arguments remain exact. The affected contract's finite-check disposition now records these unit conventions.

3. **`ex-aqft-invertible-interface-between-finite-quantum-mechanics`, Example and Verification (current lines 35–47, 63, 87, and 89).** I made the Hilbert spaces and Hamiltonian endomorphisms explicit, recorded self-adjointness and the energy/time/matrix-unit conventions, and specified the source-to-target insertion and initial-state transport in the normalized matrix-element claim. The original proof only displayed the forward crossing formula although the model admits finite sequences of forward and reverse interfaces. The proof now gives the adjoint reverse intertwining identity and applies the local crossing-factor argument to any such finite sequence; its target-only correlator comparison is also explicit. The fusion argument now covers arbitrary fixed external interfaces and uses the stated nonzero identity-limit condition for normalization. The proof contract's derivations for steps 3.1 and 4.1 and the finite-check disposition were updated accordingly.

4. **`cex-aqft-topological-interface-not-symmetry`, Counterexample (current line 53).** I specified the Hamiltonian endomorphism types and the inverse-energy units of all time parameters, with the boundary vectors, insertion matrices, and injection dimensionless by convention. The source/target, correlator, and rank arguments are unchanged. The affected contract's finite-check disposition now records these conventions.

No page prose was changed. No `verification.judge` record was present on the changed items.

## Diagram review

The only TikZ diagram in scope is the `tikzcd` in `def-aqft-topological-interface` Remarks. Its arrow `\mathcal T_- \to \mathcal T_+` labeled by `\mathcal I` agrees with the defined source-to-target convention. It is explicitly not used as proof. No diagram is present in the other assigned items, and no additional diagram is needed to make their finite matrix arguments checkable.

## Validation

- Reflow: all four changed item paths reported unchanged.
- Precheck: the three proof-bearing items passed; the definition had zero proof steps and no failures.
- Final `proof-layout` command on all four changed items: `proof-layout: 4 items, 12 steps, 0 defects`.
- All changed content remains draft. No gate, judge, or publication stamp was added.

## Page verdicts

- `qftx-defects-and-topological-operators` (A): **PASS** after the assigned definition repair. Inventory, status, and declared page prerequisites are preserved; body remains empty.
- `qftx-defects-and-topological-operators-examples` (B): **PASS** after the three assigned item repairs. All two examples and the counterexample are complete, remain on the assigned examples page, and the body remains empty.

Blocker: none. No uneditable defect remains in the assigned item dependency closure.
