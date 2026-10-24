# Step 3a reader report — Batch 43

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Role: read-only reader, with repairs limited to assigned in-flight items  
Batch: `43`

## Opened inventory

Assigned pages:

- `library/advanced-qft-and-supersymmetry/qftx-anomaly-matching-and-frontier.md`
- `library/advanced-qft-and-supersymmetry/qftx-anomaly-matching-and-frontier-examples.md`

Both are draft `compact-v1` frontmatter-only pages with empty bodies. Their inventories and companion identities match the assigned manifest.

Assigned items, reviewed after their suppliers:

- `def-aqft-exact-background-rg-flow`
- `pthm-aqft-symmetry-preserving-rg-anomaly-match`
- `op-aqft-fusion-two-category-anomaly-classification`
- `ex-aqft-local-anomaly-counterterm-transport`
- `ex-aqft-explicit-breaking-endpoint`

Supplier pages opened for the assigned A page's declared prerequisites:

- `library/advanced-qft-and-supersymmetry/qftx-thooft-anomalies.md`
- `library/advanced-qft-and-supersymmetry/qftx-global-anomalies-inflow.md`
- `library/advanced-qft-and-supersymmetry/qftx-noninvertible-symmetries.md`
- `library/advanced-qft-and-supersymmetry/aqft-eft-foundations.md`
- `library/quantum-field-theory-mathematics/qftx-defect-fusion-mathematics.md`

Direct and relevant in-run supplier items opened:

- `def-aqft-model-and-scale-data`
- `def-aqft-wilsonian-action`
- `def-qftx-nonabelian-gauge-data`
- `def-aqft-topological-defect`
- `def-aqft-p-form-global-symmetry`
- `def-qftx-nonabelian-brst-complex`
- `lem-qftx-nonabelian-brst-nilpotence`
- `def-qftx-local-brst-cohomology`
- `def-aqft-thooft-anomaly`
- `def-aqft-global-anomaly-holonomy`
- `def-aqft-anomaly-inflow-relative-theory`
- `def-aqft-noninvertible-defect-fusion`
- Published physics supplier `def-qft-framework-units`

Imported mathematical suppliers opened for the actual gauge and fusion uses, together with the supporting Lie-group statements read in dependency order:

- `def-countable-choice`, `def-lie-group`, `thm-the-tangent-space-at-the-identity-is-a-lie-algebra`
- `def-finite-dimensional-representation-of-a-group-over-a-field`
- `def-principal-g-bundle-and-associated-fiber-bundle`, `def-smooth-principal-g-bundle`
- `def-associated-bundle-to-a-principal-bundle-and-representation`, `thm-associated-vector-bundle-is-well-defined`
- `def-fusion-and-multifusion-category`, `def-monoidal-category`
- `cor-the-tangent-space-of-an-n-manifold-has-dimension-n`, `def-lie-bracket-on-the-tangent-space-of-a-lie-group`, `def-finite-dimensional-lie-algebra`
- `thm-left-invariant-vector-fields-evaluate-isomorphically-at-the-identity`, `thm-vector-fields-form-a-lie-algebra`
- `def-vector-space`, `def-dimension`, `def-lie-bracket-of-smooth-vector-fields`, `def-left-and-right-invariant-vector-fields`
- `prop-translations-are-diffeomorphisms-and-their-differentials-trivialize-the-tangent-bundle`
- `thm-coordinate-derivations-form-a-basis-of-the-tangent-space`, `prop-coordinate-formula-for-the-lie-bracket`, `prop-the-lie-bracket-of-left-invariant-fields-is-left-invariant`

The assigned manifest, reader brief, Batch 43 proof contracts, cross-batch dependency file, and Batch 43 author notes were opened. They were treated as navigation/evidence rather than verdicts.

## Source review and mathematical assessment

The exact background-coupled RG definition and its two direct consumers were checked against the current model/scale and Wilsonian definitions. Its finite integral identity is conditional on the explicit product-measure, absolute-integrability, nonzero-branch, counterterm, and equivariance requirements; it makes no continuum existence claim. The topology used for low-field open sets and continuity had not been specified. I added an explicit model-chosen Polish topology generating the standard Borel structure and tied the high-integral continuity condition to that topology and the background-chart topology. I reviewed `pthm-aqft-symmetry-preserving-rg-anomaly-match`, `ex-aqft-local-anomaly-counterterm-transport`, and the indirect consumer `ex-aqft-explicit-breaking-endpoint` against this clarification; their conclusions do not depend on a choice of incompatible topology. The assigned A-page's manifest claim mirror for the revised definition remains owner-owned and stale, as recorded below.

The anomaly-matching theorem's local conclusion follows from its additional common BRST-density and Wick-rotation hypotheses: the difference is `s C_loc + d_H q_3`, which is zero in the supplied relative cohomology quotient. Its global conclusion follows separately from the assumed unitary connection-preserving determinant-line isomorphism, including endpoint gauge maps; it does not infer holonomy matching from the local anomaly. Harvey, *TASI 2003 Lectures on Anomalies*, §2.3 (https://arxiv.org/pdf/hep-th/0509097), and Tong, *Gauge Theory*, §3.5, printed pp. 176–178 (https://davidtong.org/pdfs/teaching/gauge-theory/gauge.pdf), support the stated unbroken-global-symmetry anomaly-matching context. The additional finite-regulator, local-cohomology, and determinant-line claims are established conditionally by the item’s own hypotheses and proof, not attributed to those sections as standalone results. Dai–Freed, §§2 and 5 (https://arxiv.org/pdf/hep-th/9405012), supports the determinant-line convention and holonomy interface used by the supplier; the theorem does not use an unqualified exponentiated-eta formula.

For the categorical open problem, Antinucci et al., Appendix A.6, especially (A.63)–(A.66) (https://arxiv.org/pdf/2508.00982), states the finite-group exact sequence and condensation interface, then proposes the finite-2-group sequence as future work. Kong, Tian, and Zhou, §2 and Remark 2.1 (https://arxiv.org/pdf/1905.04644), confirms the weak monoidal-bicategory data and why the nonidentity pentagonator must be retained. Bhardwaj et al., Part I §§2.1 and 5.1 (https://arxiv.org/pdf/2408.05266), Part II Abstract and §2.1 (https://arxiv.org/pdf/2502.20440), and Inamura et al., Abstract and summary §2.1 (https://arxiv.org/pdf/2506.09177), support the stated 2+1d all-boson/DW/generalized-gauging setting. These sources do not establish the proposed full marked classification.

Condition 2 in the open problem previously concluded that every non-simple object endable at both loci must be a sum of vacua, although the premise constrained only simple sectors jointly endable at the two loci. A direct sum can have a boundary-endable summand and a different interface-endable summand. I removed that invalid inference and stated precisely that condition 2 restricts only simple summands jointly endable at both loci. The item remains an open problem; no solution or physical realization is asserted.

The counterterm example's variation is correct on the stated closed flat torus with trivial bundles and periodic gauge parameters: the mixed term is integrated by parts, and the quadratic term is exact. Its conclusion remains conditional on the theorem's local-variation identification. The finite-lattice example's quartic lower bound gives integrability of the finite-dimensional Lebesgue integral, and its constant-field variation is nonzero for every stated `j != 0`. The item already had a blank paragraph between steps 1.1 and 2.1. Its proof contract incorrectly referred to step 1.2; I corrected that reference to step 1.1 without changing the item.

There are no empirical observations or statistical inferences in this batch. The examples are model calculations, not reports of experiments. There are no TikZ/tikzcd diagrams on the assigned pages or items. I also checked the associator-pentagon and holonomy-pairing diagrams in the relevant fusion and inflow suppliers against their surrounding definitions; I found no diagram defect or missing diagram necessary for the assigned exposition.

## Repairs and checks

- `items/def-aqft-exact-background-rg-flow.md`: specified the low-field topology required by its continuity/open-patch clauses. Rechecked its direct and indirect Batch 43 consumers as described above.
- `items/op-aqft-fusion-two-category-anomaly-classification.md`: removed the unsupported passage from a simple-sector condition to a claim about arbitrary direct sums.
- `research/advanced-qft-supersymmetry-build-2026-10-23-batch-43.proof-contracts.json`: synchronized the exact RG-definition excerpts in the theorem and counterterm-example contracts, updated the open-problem formulation evidence, and corrected the explicit-breaking example's finite-check step reference from 1.2 to 1.1.
- `items/ex-aqft-explicit-breaking-endpoint.md`: no item edit was needed; its step separation was already correct.

After the final item edits, `reflow.mts` reported both edited items unchanged; `precheck.mts` reported 0 checked/0 failing for the definition and open problem, as expected for non-proof carriers. The explicit-breaking example precheck passed (1 checked, 0 failing). The final batched `proof-layout.mjs` run on the two changed item paths reported 0 steps and 0 defects.

## Uneditable findings

The findings JSON records eleven published-dependency statement-first violations. Each is a hyperlink embedded in a complete `Definition`; the policy requires the definition to remain uninterrupted and its links to move into the immediately following references section. These suppliers are imported mathematics or published physics outside this batch's write scope. The exact assigned consumer whose dependency closure reaches each subject is recorded in the findings file. These are editorial defects; I found no unsupported mathematical step in the assigned consumers arising from them.

## Page verdicts

- `qftx-anomaly-matching-and-frontier`: no page-frontmatter or presentation defect observed; the assigned definition and open-problem repairs are in the disk diff. Hold for owner synchronization of those two changed claims in the batch manifest and current readiness/hash recertification.
- `qftx-anomaly-matching-and-frontier-examples`: no page or inventory defect observed. The B page remains frontmatter-only and the example items' claims and physical scope are intact.

## Blocker and coverage limit

The reader write scope excludes the batch manifest. Its `statement` mirrors for `def-aqft-exact-background-rg-flow` and `op-aqft-fusion-two-category-anomaly-classification` still contain the pre-repair text. The owner must synchronize those mirrors and recertify the changed sources before using the frozen manifest/Step 3 routing. No manifest, page, published dependency, or other batch was edited.

I reviewed the direct suppliers and the mathematical statements used by the assigned claims, but did not audit the full inherited transitive mathematics closure or independently reread every secondary paper listed in the open-problem bibliography. The source passages actually consulted and their scope limits are recorded above.
