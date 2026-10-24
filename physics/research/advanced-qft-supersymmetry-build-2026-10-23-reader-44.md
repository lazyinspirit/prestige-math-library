# Step 3a reader report — batch 44

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Role: read-only reader  
Batch: `44`

## Inventory reviewed

Assigned pages:

- `library/advanced-qft-and-supersymmetry/aqft-eft-anomalies.md` — draft A page; inventories `def-aqft-heavy-chiral-u1-threshold-data` and `pthm-aqft-heavy-chiral-threshold-wess-zumino-match`; requires `aqft-smeft-heft`, `qftx-thooft-anomalies`, and `qftx-global-anomalies-inflow`.
- `library/advanced-qft-and-supersymmetry/aqft-eft-anomalies-examples.md` — draft B page; inventories `ex-aqft-heavy-fermion-anomaly-threshold`; requires the A page.

Both pages have frontmatter only, preserve the manifest inventories and draft status, and carry `page_layout: compact-v1`. Their page requirements and item placements agree with the batch manifest. No page summary is present or needed.

Assigned items, read in supplier-before-consumer review order:

1. `def-aqft-heavy-chiral-u1-threshold-data`
2. `pthm-aqft-heavy-chiral-threshold-wess-zumino-match`
3. `ex-aqft-heavy-fermion-anomaly-threshold`

Supplier context opened to check the assigned claims: `post-aqft-smeft-model`, `post-aqft-heft-model`, `def-aqft-p-form-global-symmetry`, `def-qftx-local-brst-cohomology`, `def-qftx-nonabelian-brst-complex`, `lem-qftx-nonabelian-brst-nilpotence`, `def-aqft-cubic-anomaly-polynomial`, `def-aqft-thooft-anomaly`, and `def-aqft-anomaly-matching-data`. The three assigned items' complete proof-contract entries were inspected, including citations, derivations, boundaries, risk reviews, source dispositions and finite-check descriptions. No TikZ/tikzcd diagrams occur in the assigned items or pages.

## Independent review

The local model fixes the mostly-plus Minkowski metric and orientation, the trivial background bundle, a nondynamical compactly supported charge-one connection, the charge-one phase and Yukawa mass, the small-transformation convention, the regulator prescription for the separate massless triangle, and the formal scope of the determinant/Jacobian premise. The field-redefinition algebra is consistent: the charged connection becomes `B + dθ`, which is invariant under the simultaneous transformation; the source premise assigns the Jacobian effective-action term `-Δ_M`.

I checked the anomaly sign against the cited primary sources. Bilal defines positive chirality with the displayed mostly-plus gamma-matrix convention, uses the three-regulator Pauli–Villars subtraction with the stated weights and mass relation, and gives the consistent anomaly formula in §9.3, Eq. (9.30). Under the model's explicit Hermitian-variable map `𝒜 = -B`, `ε = -α`, the Abelian specialization is `+(24π²)⁻¹ ∫ α G∧G`. The sourced formula is an adopted one-loop input; the item does not present it as an independently reconstructed path-integral theorem. See [Bilal, *Lectures on Anomalies*](https://arxiv.org/pdf/0802.0634), §§2.4, 5.2.1–5.2.3, 8.2 and 9.3.

Preskill's §§6.3–6.4, Eqs. (6.34)–(6.45), support the local finite difference, Goldstone-dependent mass redefinition, Jacobian contribution with the negative finite-difference sign in the effective action, and mass-independent anomalous variation. The article's broader gauged `G/H` construction is not imported. The batch explicitly labels its selected Abelian relation as a scope-limited source-backed premise and makes no claim of a full determinant construction or EFT remainder estimate. See [Preskill, *Gauge Anomalies in an Effective Field Theory*](https://preskill.caltech.edu/pubs/preskill-1991-effective.pdf), §§6.3–6.4.

The theorem's local proof is otherwise valid under those stated inputs. It integrates the infinitesimal anomaly along `B_t = B + t dθ`, obtains `Δ_M = +(24π²)⁻¹ ∫ θ G∧G`, and correctly distinguishes this finite difference from its effective-action contribution. Varying `Γ_WZ = -(24π²)⁻¹ ∫ θ G∧G` gives the same positive local variation. The equality with the remaining-light-sector expression is conditional on the stated matching requirement. The proof is limited to the selected infinitesimal representative and explicitly excludes global, dynamical-gauge, gravitational, non-Abelian, continuum, and quantitative-remainder claims.

The example's cutoff construction is smooth and compactly supported. On `supp α`, `χ = 1` and `dχ = 0`; the two simple two-form terms in `G` have zero self-wedge and commute, so `G∧G = 2λ² dx⁰∧dx¹∧dx²∧dx³` there. The normalization gives `∫ α G∧G = 2`, hence both inherited variations equal `+1/(12π²)`. This is a conditional exact form computation, not empirical evidence.

The proof contracts have no unclosed derivation rows or unresolved prerequisite entries. The declared boundary cases and bounded checks agree with the authored statements; they are not treated as proof acceptance. Numbered proof steps have separated paragraphs, trailing tags, and final QED tags. References follow the complete Definition/Statement/Example sections, one source per paragraph.

## Findings not editable in this role

1. **Fatal — `def-aqft-heavy-chiral-u1-threshold-data`, `## Definition`, second paragraph, first sentence.** The model places both Weyl fields in ordinary `C_c^∞(M, S_± ⊗ C_(...) )` section spaces but does not state that their coefficients are Grassmann-odd or explicitly apply the statistics specified by `def-aqft-anomaly-matching-data`. The adopted Pauli–Villars chiral-fermion anomaly and the field determinant/Jacobian premise require fermionic statistics. Please state the odd coefficient algebra/statistics and identify the exact supplier convention for both `ψ_+` and `ψ_-`. The theorem and example rely on this model input. I could not repair it because this is a read-only assignment.

2. **Nonfatal — `pthm-aqft-heavy-chiral-threshold-wess-zumino-match`, `## Remarks`, sentence 1.** The remark calls `θ` a “dynamical phase,” but the model definition supplies a transforming order-parameter phase and a formal fermion effective-action relation without specifying a `θ` kinetic term, action, or integration role. The proof only needs its transformation law, and the reason the Wess–Zumino term is outside the background-only counterterm quotient is that it depends on `θ`, not solely on the background connection. Either define the dynamical role or remove that extra characterization. I could not repair the remark because this is a read-only assignment.

No source or mathematical uncertainty remains from the passages reviewed. No items or pages were edited, no validators were run, and no acceptance or judge stamp was written.

## Page verdicts

- `aqft-eft-anomalies`: **metadata and presentation pass; content held for the fatal model-definition finding above.** Its A-page inventory and prerequisite placement match the manifest; the page body is empty as required.
- `aqft-eft-anomalies-examples`: **metadata and presentation pass; example computation passes conditionally on its theorem supplier.** Its B-page inventory and same-pair requirement match the manifest; the page body is empty as required. The fatal model input in the A-page dependency remains upstream.

## Blocker

The unlicensed fermion-statistics omission in the assigned model definition prevents unconditional acceptance of the anomaly calculation. It requires an authorized content repair and review. The remark's use of “dynamical” is a separate nonfatal precision repair.
