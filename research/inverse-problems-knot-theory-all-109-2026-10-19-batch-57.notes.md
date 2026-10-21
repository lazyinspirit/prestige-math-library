# Batch 57 authoring notes

Run: inverse-problems-knot-theory-all-109-2026-10-19

Batch: 57 — knot-exteriors-and-peripheral-systems

## Verified inputs and authority

- Read CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md, briefs/beta-scaffold.md, the assigned batch tasks, the owner authoring direction, the full KT-02 design section at research/plan-knot-theory-track.md lines 108–139, research/plan-spec.json, the assigned page manifest, and the full batch dependency-level artifact.
- The binding owner direction takes precedence over stale task/design prose. The current plan-spec page records control page identity, order, category, title, companion, and requires. The KT-02 design section controls the mathematical item inventory, claims, conventions, and proof route.
- The plan-spec and current batch manifest both had empty items arrays for A and B, while the KT-02 design section lists five A claims and two B claims and names lem-knot-normal-circle-bundle-trivialization as the local normal-bundle module. I treat the empty arrays as unmaterialized authoring inventories and materialize those six A items plus the two B items below; page identity and the two page-level requirements agree exactly.
- The current batch scheduling input is 69632ca90817955c25ab60d41e32cde58ca7d3d83e260e2e0e7ef6b68b8447ce. Its page dependency level is zero with no prerequisite batches. The two page-level requirements are published context pages, not current-run supplier batches. The later live status check reads `.autopilot/<run>` and `git log`: HEAD is `dd17c1fe56`, stage 1-scaffold is active with 4/109 page pairs covered, and artifact files are still missing for units 7 and 13. The current owner blocker names unit 13 as covered but artifact-incomplete and no longer running. These run-state issues are outside batch 57 and were not changed.

## Design conflicts and dependency decisions

- The KT-02 prose design controls the broader research/knot-theory-planning-2026-10-18/prerequisite-map.md dependency overreach. The map adds the slope/Dehn-filling definition and knot-exterior irreducibility to the peripheral-torus item; neither is used by the compact-exterior, homology, or peripheral-basis arguments authored here, and the controlling KT-02 section does not assign the irreducibility claim. They are omitted rather than treated as axioms or silently proved. No claim about irreducibility, boundary incompressibility, or Dehn filling is made.
- The map's preferred-longitude basis edge would be circular if the torus-basis lemma itself assumed existence of the preferred longitude. The local lemma instead proves the product meridian/section basis; the later homology theorem proves existence, uniqueness, and the preferred basis using that earlier lemma.
- The map lists def-framing-of-a-normal-bundle, which carries an AC_omega interface. The normal-bundle lemma constructs an oriented frame directly and does not use that framing item, preserving its choice-free argument. The exterior definition and closed-tube construction still use the published tubular-neighbourhood interface, whose exact theorem assumes AC_omega; that assumption is declared and carried through consumers. The main homology theorem also assumes full AC for the published Alexander-duality and PID universal-coefficient suppliers.
- The map's role for thm-knot-exterior-homology-and-longitude as a “local prerequisite module” is reconciled by treating it as the completed result consumed by later pages, not as a prerequisite of the definitions or lemmas that it proves.

## Item inventory and in-run levels

Levels were computed before item carriers were written. External suppliers do not raise an in-run level.

| Item | Kind | In-run suppliers | Level |
|---|---|---|---:|
| def-knot-exterior | definition | none | 0 |
| lem-knot-normal-circle-bundle-trivialization | lemma | none | 0 |
| def-knot-meridian-and-preferred-longitude | definition | def-knot-exterior | 1 |
| lem-knot-tubular-exterior-and-boundary | lemma | def-knot-exterior, lem-knot-normal-circle-bundle-trivialization | 1 |
| lem-knot-exterior-has-peripheral-torus | lemma | def-knot-exterior, def-knot-meridian-and-preferred-longitude, lem-knot-tubular-exterior-and-boundary | 2 |
| thm-knot-exterior-homology-and-longitude | theorem | prior A items above | 3 |
| ex-knot-kt-02-worked-cases | example | A-page definitions/lemmas/theorem used in its verification | 4 |
| cex-knot-kt-02-boundary-case | counterexample | A-page definitions/lemmas/theorem used in its refutation | 4 |

The B items appear only on the B page in the scaffold inventory. The current batch dependency artifact remains unchanged because the pair has no in-run page prerequisite; its item-level dependencies are represented on the assigned manifest.

## Source reading and source-boundary correction

- Cattabriga–Francaviglia, Knot Theory and Applications: Lecture Notes, full PDF at https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf. Read section 4.1 on the compact exterior and Example 4.1.2, and section 4.4 through Theorem 4.4.5. The notes state the compact exterior and peripheral conventions and motivate the homological zero-longitude, but Lemma 4.4.1 leaves its torus-curve step to Exercise 4.4.2. The authored proof therefore does not rely on that gap; it proves the local claims from Alexander duality and Mayer–Vietoris.
- Hatcher, Algebraic Topology, Chapter 3 full text at https://pi.math.cornell.edu/~hatcher/AT/AT.pdf; the authored citation uses the full Chapter 3 PDF https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf. Read Theorem 3.44 and Corollary 3.45, including the referenced Appendix Theorem A.7 and Corollary A.9 argument for neighbourhood retracts. These supply the compact locally contractible-subspace duality and its sphere-complement corollary. The local library supplier thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere was also inspected in full; it explicitly assumes full AC.
- Hatcher, Algebraic Topology, Chapter 2 full text at https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf. Read §2.2, Example 2.36: a closed orientable genus-g surface has one 0-cell, 2g 1-cells, and one 2-cell attached by a product of commutators, giving H_1 = Z^(2g). Its genus-one case supports the torus calculation.
- Calegari, Introduction to Knot Theory, full author-hosted PDF at https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf. The prior source dossier had read all 48 pages. Its actually relevant locator is section 3.3, pp. 26–30 (linking/intersection and meridian), not the KT-02 map's section 2.2 locator. Section 3.3 is used only for meridian/orientation context; the authored homology argument does not depend on its additive-invariant proof route.
- The earlier map's Calegari section 2.2 / Hatcher Basic 3-Manifold Topology source boundary is not used as the proof basis for compact exterior homology: the inspected Calegari section 2.2 covers surfaces, while Hatcher's Basic 3-Manifold notes treat general 3-manifold topology and do not supply this marked knot-exterior interface. Their prior retrieval/read history remains in research/knot-theory-planning-2026-10-18/sources/reader-1.* and reader-4.*.

No retrieval has failed. There is no source_resolution drop or owner-escalation record. The four source documents, locators, result inventories, and dispositions are recorded in the batch coverage file; source-fetch-check --stamp verified all four documents.

## Supplier interfaces inspected

- def-oriented-link-in-s-three-and-ambient-isotopy is published and defines finite smooth oriented links as smooth embeddings of oriented circles in the fixed oriented standard S3.
- def-normal-and-conormal-bundles-of-an-embedded-submanifold is published and defines the normal bundle as the quotient TM|_S / TS; the local normal lemma constructs the specific smooth orthogonal model directly.
- def-tubular-neighbourhood-of-an-embedded-submanifold and thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold are published; the latter explicitly assumes AC_omega and supplies an open normal-bundle tube. Its full proof and hypotheses were inspected. Compactness of the knot supplies a uniform closed disk subbundle.
- thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere, thm-universal-coefficient-theorem-for-cohomology-over-a-pid, thm-mayer-vietoris-sequence-in-singular-homology, cor-homology-of-spheres, cor-homotopic-maps-induce-the-same-map-on-singular-homology, and thm-cellular-homology-computes-singular-homology were inspected. Alexander duality and the PID universal-coefficient theorem assume full AC; the other interfaces used here are choice-free.
- def-countable-choice is published. Its use here is only the explicit AC_omega assumption in the tubular-neighbourhood supplier, not an unproved theorem. No statement of independent approval or publication is inferred.

## Work and validation log

- Scaffold manifest inventory, dependency arrays, and levels have been materialized before item carriers.
- Scoped calculation using tools/item-dependency-levels.mjs dependencyLevels on batch-57.pages.json returned zero errors and levels 0, 0, 1, 1, 2, 3, 4, 4. The first check exposed duplicate B-item ownership when B records were copied onto A; those duplicates were removed before any item carrier was written, and the current scoped calculation passes.
- coverage-checklist with --require-destination reported 1 page, 22 harvested results, 0 errors, and one low-yield advisory at 5/22. The five included source results map to the assigned exterior/meridian/peripheral/example items; other rows are explicitly linked to already-published supplier items or named later/out-of-scope destinations. Alpha confirmation of these dispositions is still a review obligation.
- source-fetch-check --coverage research/inverse-problems-knot-theory-all-109-2026-10-19-batch-57.coverage.json --stamp succeeded: all 4 full-text sources fetched and stamped, with no drops. The stamps record 53 pages / SHA16 5035f785a12c63a2 for Cattabriga–Francaviglia, 76 pages / SHA16 3fe35aae9c2bddc3 for Hatcher Chapter 3, 88 pages / SHA16 7d18d52c9ae10ec5 for Hatcher Chapter 2, and 48 pages / SHA16 2b38476c9471585b for Calegari.

### def-knot-exterior

- Claim/convention: for a supplied normal-bundle tubular map and closed disk radius, define E_K as S^3 minus the tube interior; retain T_K, orient E_K from S^3, and make the tube choice explicit.
- Dependencies: def-oriented-link-in-s-three-and-ambient-isotopy, def-normal-and-conormal-bundles-of-an-embedded-submanifold, def-tubular-neighbourhood-of-an-embedded-submanifold, def-countable-choice. The definition is conditional on supplied tube data, so it has no existence claim and no justified_by edge.
- Source locators: Cattabriga–Francaviglia §4.1 and Hatcher Theorem 3.44/Corollary 3.45 (sources stamped above).
- Carrier is a draft definition with proof_strategy not-applicable and verification.precheck n/a. Final page/manifest consistency passed; proof-layout correctly reports no proof-bearing body.
- Page-level status is draft; no tube-existence result or justified_by edge is asserted by this conditional definition.

### lem-knot-normal-circle-bundle-trivialization

- Exact claim: the quotient normal bundle of a smooth oriented embedding S^1 -> S^3, oriented by tangent-then-normal, admits a smooth oriented trivialization.
- Convention and proof decision: identify S^3 orientation-preservingly with the unit sphere in R^4, model the quotient by the orthogonal complement of radial and tangent directions, and use the clutching argument for an oriented rank-two bundle over S^1. The frame proof uses finite local data and GL+(2,R) path-connectedness; it does not depend on AC or AC_omega and does not invoke the published framing definition, whose interface carries AC_omega.
- Dependencies: def-oriented-link-in-s-three-and-ambient-isotopy; def-normal-and-conormal-bundles-of-an-embedded-submanifold. Dependency level 0 as declared.
- Source locators: Calegari §3.3, pp. 26-30; Cattabriga–Francaviglia §4.4. Retrieval stamps are in the batch coverage file.
- Carrier is a draft proof-bearing lemma. Final proof-layout, precheck and strict proof-contract checks pass; its source excerpt and supplier uses are recorded in the contract. This is author readiness, not independent acceptance.

### def-knot-meridian-and-preferred-longitude

- Exact claim/convention: define the meridian by the oriented normal-disk boundary; define a preferred longitude as a degree-one parallel boundary curve whose class is zero in exterior homology. Base-path peripheral subgroups are recorded up to conjugacy; reversing K reverses meridian and longitude orientations.
- Dependencies: def-knot-exterior, def-oriented-link-in-s-three-and-ambient-isotopy, def-normal-and-conormal-bundles-of-an-embedded-submanifold. Dependency level 1 as declared.
- Source locators: Cattabriga–Francaviglia §4.4 and Calegari §3.3, pp. 29-30; both full-text source URLs are stamped in batch coverage.
- The definition deliberately treats the zero-class condition as a predicate and does not assert existence or uniqueness. That prevents a circular justified_by edge; the level-3 theorem proves both.
- Carrier is a draft definition with proof_strategy not-applicable and verification.precheck n/a. Final page/manifest consistency passed; the definition deliberately does not claim existence or uniqueness.
- The level-1 tubular-exterior lemma is complete below; the AC_omega interface and construction are explicit.

### lem-knot-tubular-exterior-and-boundary

- Exact claim: under AC_omega, a smooth knot admits a closed product disk tube; its exterior is compact and oriented with torus boundary, and the open complement strongly deformation retracts to that exterior.
- Dependencies: def-knot-exterior, lem-knot-normal-circle-bundle-trivialization, def-tubular-neighbourhood-of-an-embedded-submanifold, thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold, def-countable-choice. Dependency level 1 as declared.
- Axiom use: AC_omega is required by the published tubular-neighbourhood theorem. The radius is made uniform using a finite subcover of compact S^1; the radial retraction is explicit and uses no further choice.
- Source locator: Cattabriga–Francaviglia §4.1. The exact tubular-neighbourhood statement and complete proof of the published local supplier were inspected; no outside Lee source is claimed as read.
- Carrier is a draft proof-bearing lemma. Final proof-layout, precheck and strict proof-contract checks pass; no missing supplier or cross-batch dependency remains for this claim.
- The level-2 peripheral-torus lemma is complete below and uses the fixed product section, without presupposing the preferred longitude.

### lem-knot-exterior-has-peripheral-torus

- Exact claim/convention: for the product boundary torus, the positive fibre meridian and a fixed product section form a basis of H_1(T_K; Z). The section is explicitly only a product longitude candidate; no zero-homology claim is made here.
- Dependencies: def-knot-exterior, def-knot-meridian-and-preferred-longitude, lem-knot-tubular-exterior-and-boundary, cellular-homology comparison and boundary interfaces, and def-countable-choice. Dependency level 2 as declared.
- Proof decision: use the standard one-vertex CW structure on the square quotient torus, with attaching word the commutator. The cellular boundary coefficients are zero by thm-cellular-boundary-is-the-incidence-degree-matrix; thm-cellular-homology-computes-singular-homology transfers the computed basis. A TikZ fundamental-square diagram records coordinates and the diagonal class [sigma]+[mu]; the proof is independent of the diagram.
- Source locators: Cattabriga–Francaviglia §4.4 and Hatcher Chapter 2 §2.2, Example 2.36 (source URL and fetch stamp in coverage).
- Carrier is a draft proof-bearing lemma. Final proof-layout, precheck and strict proof-contract checks pass.
- The level-3 homology theorem is complete below and proves H_1(E_K), the full kernel, and the unique degree-one preferred longitude without a circular supplier edge.

- A/B page carriers, all six A items, both B items, proof contracts, scoped validators, and Step-1 decisions are complete as recorded in the final checkpoint below.

## Final checkpoint — batch 57

### Completed carriers and mathematics

- The A page contains exactly the six assigned items at levels 0, 0, 1, 1, 2, and 3. The B page contains exactly `ex-knot-kt-02-worked-cases` and `cex-knot-kt-02-boundary-case`, both level 4. Item dependencies in the manifest and frontmatter agree; scoped dependency-level computation returned eight items and zero errors.
- The peripheral lemma's section curve is the fixed product section $s\mapsto(s,1)$. An arbitrary graph section may wind around the meridian and need not be a basis element; the earlier generic statement was corrected in both carrier and manifest.
- The homology theorem states the exact chosen product-tube data. Its proof checks the Alexander-duality hypotheses, derives AC_omega from full AC, gives the collar open cover and radial homotopies, proves the Mayer–Vietoris map is an isomorphism, and computes the complete kernel and the embedded preferred longitude. The retraction in the theorem is constructed directly for the stated map.
- The worked case parametrizes both sides of the standard unknot splitting as solid tori and checks the positive meridian and disk-bounding longitude. Its TikZ square explains the product marking and is not used in the proof. The counterexample constructs, for any knot, the simple slope class $[\lambda]+[\mu]$, which is primitive and degree one but maps to the nonzero meridian generator.
- Both page files contain YAML frontmatter only, with inventories matching the batch manifest; neither has a summary body or a `page_layout` flag. The engine sets `page_layout: compact-v1` after initial authoring. All items remain draft; no publication or acceptance is asserted.

### Final scoped validation

- `proof-layout.mjs` on all eight changed items: 8 items, 25 steps, 0 defects.
- `precheck.mts` on the same eight paths: 8 files, 6 proof-bearing items checked, 0 failures; the two definitions are not applicable.
- `proof-contract.mjs ... --strict`: all 6 proof-bearing items checked, 0 errors and 0 warnings. Every fact citation has an exact supplier excerpt and actual step uses; all standard boundaries have a disposition.
- Scoped `dependencyLevels` on batch 57: 8 items, 0 errors; levels are 0, 0, 1, 1, 2, 3, 4, 4.
- `audit-manifest.mjs` on batch 57: 51 relationships over 8 items, 0 defects (33 published-backward and 18 same-batch). `manifest-integrity.mjs` reports 218 pages owed and present, with 0 missing or added.
- Page/item consistency check: both page inventories, every item dependency list and level, and empty page bodies agree with the batch manifest.
- `coverage-checklist --require-destination`: 1 page, 22 harvested source results, 0 errors, with one low-yield warning (5/22 scaffolded) requiring later Alpha confirmation. `source-fetch-check`: 4/4 source documents fetch-verified and resolved, 0 drops. No retrieval failed, so no source-resolution recovery/drop record was needed.

### Readiness and run-wide blockers

- `step1-decisions record` marked all eight batch-57 items `ready`, with their examined dependency IDs and specific evidence. A filtered follow-up check found no remaining Step-1 work for these eight items. These records are author readiness only and do not constitute independent review.
- The required run-wide `item-dependency-levels.mjs check` still exits 1 with 196 errors: 180 empty inventories and 16 dependency-level mismatches. None names a batch-57 item. The scoped batch-57 calculation passes; these other-batch issues are outside this assignment and were left unchanged.
- The latest live autopilot status remains at stage 1-scaffold, with 4/109 page pairs covered and artifact files missing for units 7 and 13. Its owner blocker reports unit 13 as covered but artifact-incomplete and no longer running; it requires owner/operator repair and recertification. No engine state or verdict was changed here.
