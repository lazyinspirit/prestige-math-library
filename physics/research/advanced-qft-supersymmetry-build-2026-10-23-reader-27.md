# Step 3a reader report — batch 27

Run: advanced-qft-supersymmetry-build-2026-10-23  
Batch: 27  
Role: independent reader

## Scope and opened inventory

The assigned inventory is recorded in research/advanced-qft-supersymmetry-build-2026-10-23-batch-27.pages.json. I opened both listed pages and all six listed items:

- library/advanced-qft-and-supersymmetry/aqft-smeft-heft.md
- library/advanced-qft-and-supersymmetry/aqft-smeft-heft-examples.md
- post-aqft-smeft-model (level 4)
- post-aqft-heft-model (level 5)
- def-aqft-warsaw-basis-contract (level 5)
- def-aqft-chiral-power-counting (level 6)
- pthm-aqft-smeft-as-restricted-heft-branch (level 7)
- ex-aqft-smeft-heft-observable-map (level 8)

I read the dependency statements needed for the finite operator data, gauge and connection conventions, curvature signs, and finite-dimensionality claim: def-countable-choice, def-aqft-operator-basis-physical-data, def-aqft-operator-basis-quotient, def-aqft-model-and-scale-data, def-aqft-local-operator-and-dimension, lem-aqft-finite-order-local-operator-space-finite-dimensional, def-qftx-nonabelian-gauge-data, def-qftx-associated-covariant-derivative, def-qftx-principal-connection-form, and lem-qftx-principal-curvature-cartan-bianchi. I checked the two dependency diagrams in the covariant-derivative and curvature suppliers; both agree with their stated local-section transitions and curvature identities. No diagram occurs in the six assigned item bodies.

For public-interface impact, I checked the current-run dependency closure of the SMEFT model and HEFT counting definition, including the three batch-46 fit reports (exp-aqft-atlas-global-smeft-fit-2026, exp-aqft-cms-global-smeft-fit-2026, exp-aqft-cms-multiboson-smeft-2026) and the batch-44 heavy-chiral threshold chain (def-aqft-heavy-chiral-u1-threshold-data, pthm-aqft-heavy-chiral-threshold-wess-zumino-match, ex-aqft-heavy-fermion-anomaly-threshold). These were read only to review use of the clarified field conventions; no outside carrier was edited.

The source passages inspected for claims and conventions were Grzadkowski et al., Dimension-Six Terms in the Standard Model Lagrangian ([PDF](https://arxiv.org/pdf/1008.4884)), §2 equations (2.1)–(2.4), Tables 1–3, and the scalar-operator discussion; Buchalla, Catà and Krause, Complete Electroweak Chiral Lagrangian with a Light Higgs at NLO ([PDF](https://arxiv.org/pdf/1307.5017)), §2 equations (1)–(9) and §3 equations (10)–(12); Falkowski, Lectures on SMEFT ([PDF](https://scoap3-prod-backend.s3.cern.ch/media/files/79196/10.1140/epjc/s10052-023-11821-3_a.pdf)), §0, the field table, and §§3.1–3.4; and Alonso, A Primer on Higgs Effective Field Theory with Geometry ([PDF](https://www.ippp.dur.ac.uk/~ralonso/PoHEFT.pdf)), §4 and the relevant HEFT-building-block and field-coordinate passages. The source PDFs were used for those cited claims and conventions, not as a whole-source audit.

## Page verdicts

- aqft-smeft-heft: pass. Its inventory and companion metadata match the A-page manifest row. The body is empty and page_layout: compact-v1 is preserved.
- aqft-smeft-heft-examples: pass. Its example inventory and companion metadata match the B-page manifest row. The body is empty and page_layout: compact-v1 is preserved.

Both pages have the required frontmatter-only presentation and contain no generated summary.

## Item review

- post-aqft-smeft-model: the gauge group, integer hypercharges, three-family internal representations, B/L selection rules, potential convention, finite truncation, physical scope, and source status are internally consistent. The original carrier list specified family and gauge factors but left the Lorentz spin factor, Dirac adjoint, and concrete Yang–Mills field-strength components unstated while using them in the Lagrangian. I repaired those types and conventions explicitly. The SU(2) Pauli matrices are now defined before tilde-H uses sigma-2, and the SU(3), SU(2), and U(1) connection components agree with the adopted right-principal convention and y=6Y normalization.
- post-aqft-heft-model: the h∈(-v,∞) and U∈SU(2) fields, transformation law, Goldstone chart, derivative convention, positive kinetic functions, separate scales, and no-measure/no-empirical-claim limits are explicit. Its D_mu U convention agrees with the shared product connection.
- def-aqft-warsaw-basis-contract: the 15/19/25 source count, B/L-conserving three-family coefficient convention, Q_HBox normalization, and explicit limitation of the formal invariant quotient are supported by the cited Warsaw source. It does not claim a local EOM/IBP/Fierz classification proof.
- def-aqft-chiral-power-counting: the BCK degree formula and six source classes are correctly transcribed, and canonical-dimension counting remains distinct from chiral/loop counting. The original definition used “connected finite diagram,” vertex counts, and the schematic class symbols without defining their combinatorial input. I repaired it with a finite connected multigraph, L=|E_int|-|V|+1, external half-edge types, disjoint no-h and h-dependent Yukawa counts, and explicit schematic-family meanings. The source classes remain families with smooth h/v coefficients; no finite individual-operator list or convergence result is asserted.
- pthm-aqft-smeft-as-restricted-heft-branch: the inverse Sigma/rho, nonzero-doublet domain, SU(2)_L × U(1)_Y equivariance, product-rule expansion, degree-six bound, and finite linear coefficient map follow from the stated assumptions. The chart excludes H=0, and the proof does not identify the formal algebraic quotient with all compact-group invariants or claim a converse.
- ex-aqft-smeft-heft-observable-map: the Q_HBox integration by parts, sign, local positivity condition, charged-vector coefficient, and kappa_W derivative are correct under the specified mostly-plus metric and boundary condition. The result stays a conditional tree-level coefficient calculation, not a measurement or truncation-error estimate. Its numbered argument was under “Proof” despite being an example; I moved it to the schema's “Verification” heading.

All six statements/definitions are uninterrupted by hyperlinks, and their references remain after the complete statement sections. The example contains no empirical result.

## Repairs and contract maintenance

1. In items/post-aqft-smeft-model.md, I defined the mostly-plus Clifford module, left/right projectors, Dirac adjoint, Grassmann coefficient algebra, and full fermion field maps as spinor times internal carriers. I also defined Pauli matrices, gauge-potential one-forms, product-connection normalization, and component curvatures. This repairs field typing; it does not alter the adopted model parameters or empirical scope. Source locators and the corresponding formulation/source evidence in the batch-27 proof contract were updated.
2. In items/def-aqft-chiral-power-counting.md, I formalized the graph and loop count and clarified that the six NLO expressions are schematic invariant families with smooth coefficient functions, not six finite operator lists. The formula and cited source convention were not narrowed. The definition-review evidence in the contract was updated.
3. In items/ex-aqft-smeft-heft-observable-map.md, I renamed “Proof” to “Verification” to match the example class schema. The calculation is unchanged. The contract note records the class-appropriate heading.

The batch-27 proof contract is research/advanced-qft-supersymmetry-build-2026-10-23-batch-27.proof-contracts.json. No verification.judge record was present on the changed carriers, so none required removal. No page, outside-batch item, B-page prose, or published content was edited.

Consumer checks found no dependent correction needed. The fitted-coefficient reports retain the same field content and coefficient directions; the batch-44 threshold chain uses the same mostly-plus Clifford and chirality conventions now stated in the SMEFT postulate; and the in-scope theorem/example continue to use the same gauge and coefficient conventions. These checks were focused on the changed interfaces.

## Validation

- Reflow: post-aqft-smeft-model, def-aqft-chiral-power-counting, and ex-aqft-smeft-heft-observable-map each returned unchanged, exit 0.
- Precheck: postulate returned nonproof-structure pass; example returned direct proof pass; definition returned 0 proof rows and 0 failures. All commands exited 0.
- Final proof-layout run on all three edited item paths: 3 items, 5 steps, 0 defects.

## Remaining findings and blocker

No confirmed or suspected defect remains that requires an unlicensed edit. There is no blocker.

Coverage is limited to batch 27, the suppliers needed to verify its claims, and the current-run consumer closures affected by the two interface clarifications. The out-of-batch experiment items were checked only for interface impact; their underlying data, component likelihoods, detector calibrations, and source analyses were not independently reprocessed or audited. No whole-library or whole-run audit is claimed.
