# Batch 64 authoring notes — KT-09

Run: inverse-problems-knot-theory-all-109-2026-10-19  
Pair: multivariable-alexander-modules-and-chain-models  
Role: beta, batch-64  
Scheduling input: 69632ca90817955c25ab60d41e32cde58ca7d3d83e260e2e0e7ef6b68b8447ce  
Batch dependency level: 1; prerequisite batches: 56 and 57.

## Authority and controlling plan

- Read CLAUDE.md, SCHEMA.md, WORKFLOW.md, briefs/beta-scaffold.md, the owner authoring direction, the exact beta-64 task, current plan/design sections, dependency-level input, and the current run evidence before authoring.
- The plan-spec registration controls the page identities, order, category, companion, and page prerequisites. It includes hecke-markov-traces-and-polynomial-link-invariants, wirtinger-presentations-and-knot-groups, and knot-exteriors-and-peripheral-systems. The prose KT-09 design at research/plan-knot-theory-track.md lines 335–362 controls the mathematical route and claim scope.
- Conflict recorded: the older prerequisite map adds a Fox deficiency-one determinant route and knot-exterior irreducibility/boundary-incompressibility and knot-longitude claims. KT-09 instead uses the maximal-abelian cover and lifted cellular chains. I retain the planned page prerequisites but do not import the Hecke/Fox determinant route, knot-only longitude results, or irreducibility/boundary-incompressibility into claims about arbitrary links.
- The prerequisite map also lists thm-abelian-cover-chain-model-from-triangulated-exterior-procedure-properties. I include it as a separate A-page theorem and direct dependency where needed.
- The Hecke Markov page exists as a published page at library/braid-groups/hecke-markov-traces-and-polynomial-link-invariants.md. It remains in the page requires metadata; no mathematical claim in this batch depends on its trace formula.

## Inventory, suppliers, and item levels

The assigned A/B pair contains eight A-page items (including one necessary local bridge lemma) and two B-page items. Levels below are recomputed over all item edges in the current run, including batch-57 suppliers. The A-page metadata is ordered by item level.

| Item | Claim / role | Direct in-run suppliers | Level |
|---|---|---|---:|
| lem-multivariable-laurent-ring-noetherian-ufd | Noetherianity, UFD property, and units of the integral multivariable Laurent ring | none | 0 |
| def-maximal-abelian-cover-alexander-module | Absolute H1 of the maximal-abelian cover of the open link complement; explicit componentwise compact exterior and meridian conventions | def-knot-exterior; def-knot-meridian-and-preferred-longitude | 2 |
| lem-maximal-abelian-cover-link-exterior-retraction | Strong deformation retraction from the open complement to the chosen compact exterior; equivariant lift and module identification | def-maximal-abelian-cover-alexander-module | 3 |
| lem-maximal-abelian-cover-cellular-chain-model | Finite free lifted cellular complex computes the absolute module | def-maximal-abelian-cover-alexander-module; lem-maximal-abelian-cover-link-exterior-retraction | 4 |
| alg-abelian-cover-chain-model-from-triangulated-exterior | Deterministic marked edge-cocycle procedure and signed face matrices | def-maximal-abelian-cover-alexander-module; lem-maximal-abelian-cover-cellular-chain-model | 5 |
| lem-multivariable-alexander-order-and-specialization | Finite presentation, Fitting invariance, order, and diagonal chain base change without a false homology-base-change claim | def-maximal-abelian-cover-alexander-module; lem-maximal-abelian-cover-link-exterior-retraction; lem-maximal-abelian-cover-cellular-chain-model; lem-multivariable-laurent-ring-noetherian-ufd | 5 |
| thm-abelian-cover-chain-model-from-triangulated-exterior-procedure-properties | Termination and exact label-validation behavior | alg-abelian-cover-chain-model-from-triangulated-exterior | 6 |
| ex-knot-kt-09-worked-cases | Hopf-link and two-component-unlink absolute and cyclic module computations | A-page cellular/ring/order results and covering/cellular suppliers | 6 |
| cex-knot-kt-09-boundary-case | Zero edge labels pass face sums but fail the marked-meridian test | def-maximal-abelian-cover-alexander-module; alg-abelian-cover-chain-model-from-triangulated-exterior | 6 |
| thm-abelian-cover-chain-model-computes-alexander-module | The marked cocycle constructs the maximal abelian cover chain complex and computes A_L, Fitting ideals, and order | local bridge, chain model, algorithm, order lemma, procedure-properties theorem | 7 |

No dependency cycle is present. The changed local bridge raises the dependent levels; the levels in the manifest and item frontmatter agree with the current full-run dependency calculation for all ten batch-64 items.

## Cross-pair prerequisite audit

- Batch 56 currently supplies the wirtinger-presentations-and-knot-groups page and its item inventory. The controlling KT-09 route does not use those presentation or Fox-calculus statements. The page-level requires edge is retained and recorded in the batch-64 cross-batch input as contextual, not as a proof premise.
- Batch 57 currently supplies knot-exterior-and-peripheral-systems. I read the complete actual Definition bodies of def-knot-exterior and def-knot-meridian-and-preferred-longitude. They define a chosen single-knot tube exterior and the positive meridian orientation. They are knot-specific; KT-09 applies those conventions componentwise and independently states pairwise-disjoint tubes, link exterior E_L, and the meridian basis. I do not generalize any knot-only longitude or homology theorem.
- thm-knot-exterior-homology-and-longitude is present in the batch-57 inventory but is not used: its scope is a single knot, while the link basis here is supplied by Alexander duality. thm-knot-wirtinger-presentation-correctness is not used because the design rejects the Fox presentation route. The planning-map item lem-nontrivial-knot-exterior-irreducible-boundary-incompressible is absent from the current batch-57 manifest and is not a prerequisite of this cellular argument; no irreducibility claim is made.
- Required link-level hypotheses used locally are: a nonempty finite oriented smooth link; chosen pairwise-disjoint closed normal disk tubes; the compact exterior E_L; a finite triangulation with connected 1-skeleton; one certified positive meridian edge loop per component; and the Alexander-dual meridian classes as the standard basis of H1(E_L; Z). Labels must be antisymmetric, vanish around every oriented 2-simplex, and evaluate to e_i on the ith marked meridian. Face cocycles alone do not establish the full abelianization.
- The Axiom of Choice is explicit in the maximal-cover and link-complement suppliers. It is declared wherever inherited. Finite cell lifts, finite edge scans, and the deterministic tree construction introduce no additional choice requirement.
- Four batch-64 cross-batch edges are recorded in research/inverse-problems-knot-theory-all-109-2026-10-19-batch-64.cross-batch-dependencies.json. This is the assigned batch input; no other batch files were edited.

## Source reading and dispositions

The stamped detailed inventory is research/inverse-problems-knot-theory-all-109-2026-10-19-batch-64.coverage.json; exact retrieval stamps and author locators are in the sibling source-evidence.json.

- Silver and Williams, Mahler Measure, Links and Homology Growth, full 14-page PDF, §§2 and 4, PDF pp. 2–6, https://arxiv.org/pdf/math/0003127. Read the complete relevant arguments on link abelianization, maximal abelian covers, group rings, and deck-indexed chains. Its relative/presentation conventions are recorded; they are not substituted for the local absolute cellular proof.
- Hatcher, Algebraic Topology, complete book PDF, §1.3 and §2.2, Theorem 2.35, https://pi.math.cornell.edu/~hatcher/AT/AT.pdf. Read the covering classification and homotopy-lifting reasoning and the complete cellular-homology comparison/naturality argument. This is the book treatment paired with Silver–Williams for the A page.
- Cochran, Classical Isotopy Invariants of Links and 3-Manifolds, complete 23-page lecture PDF, slides 4–5, https://math.rice.edu/~cochran/ResearchLectures/KAISTLecture2.pdf. The browser screenshot endpoint returned a cache-miss error; a direct download of the full PDF succeeded and the slides were inspected visually. It corroborates the rational absolute-module convention only.
- Morton, The Multivariable Alexander Polynomial for a Closed Braid, complete six-page PDF, §2 and Theorem 1, pp. 2–6, https://arxiv.org/pdf/math/9803138. Read in full; the braid-axis determinant route is out of scope and is not used.
- Conway, Burau Maps and Twisted Alexander Polynomials, complete 20-page PDF, §§2.2–2.4 and 3, https://arxiv.org/pdf/1510.06678. Read in full; twisted representations and braid/torsion formulae are not used in this untwisted chain model.
- Conrad, Eisenstein Criterion and Gauss Lemma, complete four-page handout, Theorems 1.3 and 2.1, pp. 1–3, https://virtualmath1.stanford.edu/~conrad/121Page/handouts/gausslemma.pdf. Read for the primitive-polynomial/UFD induction.
- Stacks Project, Section 10.31, Lemma 10.31.1, Tag 00FM, https://stacks.math.columbia.edu/tag/00FM; Section 10.9, Definitions 10.9.1–10.9.2, Tag 00CM, https://stacks.math.columbia.edu/tag/00CM; and Section 15.8, Lemmas 15.8.2 and 15.8.4, Tag 07Z6, https://stacks.math.columbia.edu/tag/07Z6. Read the Noetherian, localization, and Fitting passages. Source correction history: an initial draft used Tag 00FR; inspection showed that current tag concerns minimal primes, so the citation was replaced with 00FM. No source was dropped and no five-retry allowance was approached.

The 12 page/source entries are full-text stamped: 12/12 fetch-verified, 12/12 resolved, zero documented drops, zero added retries. No result was treated as a proof substitute.

## Authoring checkpoints

- def-maximal-abelian-cover-alexander-module: absolute integral H1 of X_L^ab with positive meridian variables; defines E_L by componentwise tubes and records the basis via Alexander duality. Direct supplier bodies and conventions are listed in its Facts/References and in the cross-batch input. Level 2.
- lem-maximal-abelian-cover-link-exterior-retraction: explicit radial formula on each punctured normal disk, finite closed-set pasting, induced fundamental-group subgroup, connected restricted cover, and unique deck-equivariant homotopy lift. It fixes the open-complement versus compact-exterior gap. Level 3.
- lem-maximal-abelian-cover-cellular-chain-model: finite choices of cell lifts, deck-linear boundaries, natural cellular homology, and transfer to the open-complement module. AC is inherited only for the supplied module definition; finite lifts are choice-free. Level 4.
- alg-abelian-cover-chain-model-from-triangulated-exterior: deterministic input and spanning-tree conventions; checks edge reversal, all triangle sums, and marked meridian images before constructing signed face coefficients. The all-zero labeling defect is separately captured in the B-page counterexample. Level 5.
- lem-multivariable-alexander-order-and-specialization: proves finite presentation over the local Laurent UFD, presentation/triangulation/lift invariance, nonzero Fitting order up to signed monomial, and diagonal chain base change. It does not identify tensoring A_L with specialized homology; multiplication by t_1-t_2 is the explicit failure witness for r≥2. Level 5.
- thm-abelian-cover-chain-model-from-triangulated-exterior-procedure-properties: finite scans and ordered tree construction terminate; rejection is exactly the three failed label conditions. Level 6.
- thm-abelian-cover-chain-model-computes-alexander-module: edge data define a cocycle on H1, marked meridians make it the full abelianization, the induced simplicial cover is connected with the correct subgroup, and the output matrices are its cellular boundaries. The local cellular and Fitting results give homology and order claims. Level 7.
- ex-knot-kt-09-worked-cases: explicit coordinate Hopf complement and handlebody unlink calculations, including A_H=0 versus the nonzero cyclic module and A_U=Lambda_2. The TikZ projection is schematic; proof is geometric/algebraic and does not rely on the diagram. Level 6.
- cex-knot-kt-09-boundary-case: explicit zero-label refutation, with both edge antisymmetry and every face-sum checked and every marked meridian image shown to fail. Level 6.

## Validation and handoff

- source-fetch-check --stamp: pass, 12/12 full-text sources stamped, 12/12 resolved.
- proof-contract --strict: pass for all ten assigned items after contract regeneration; no errors or warnings.
- proof-layout: pass for all ten explicit item paths after final authoring; 35 numbered steps, zero defects.
- Scoped full-run dependency calculation: all ten batch-64 item levels match the run graph (levels 0, 2, 3, 4, 5, 5, 6, 6, 6, 7). The repository-wide item-dependency-levels command remains nonzero on 166 unrelated empty scaffold inventories; the full run has no stale dependency-level labels, and filtered batch-64 errors are zero. No unrelated manifest or item was changed.
- Frontier-dependency-ledger could not recompute the global ledger because an unrelated run item has invalid YAML in items/thm-oriented-knot-framing-classes-form-z-torsor.md at the quoted source locator on frontmatter line 24, which contains an unescaped backslash in the double-quoted scalar. The four batch-64 cross-batch dependency inputs were recorded directly; no repair was made outside the assigned batch.
- The A/B page files contain YAML frontmatter only, with empty Markdown bodies and no summaries. The A-page inventory is eight items and the B-page examples inventory is two, under the 100-item cap.
- All ten assigned items have Step 1 readiness records; these are authoring readiness records only and do not replace independent review.
- Final recheck after the last main-theorem proof edit: `proof-contract --strict --json` passes all ten items with zero errors or warnings; `proof-layout` passes the ten explicit paths (35 steps, zero defects); and `source-fetch-check` confirms 12/12 sources fetch-verified and resolved. The scoped run-graph recomputation matches every batch-64 dependency level (0, 2, 3, 4, 5, 5, 6, 6, 6, 7), and `step1Decision` confirms all ten readiness hashes current and `ready`.
- The global `step1-decisions check --run` remains open on work outside batch 64 (55 missing readiness records, unrelated escalations or changed inputs, and 166 empty scaffold inventories among the current run pages). The global dependency-level check likewise reports only the 166 empty inventories; it reports no batch-64 level errors. These global gates do not invalidate the current scoped evidence above and require reconciliation by their respective owners.
- The expanded main theorem proof explicitly verifies the edge-label cocycle descends to the link exterior, checks the induced simplicial cover on vertex stars, proves connectedness from the marked meridian generators, and identifies the deck subgroup before matching the signed cellular boundary matrices.
