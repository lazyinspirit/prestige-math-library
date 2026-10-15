# Batch 15 authoring notes — Hecke Symmetries and Generic Quantum Schur–Weyl Duality

## Plan and inventory reconciliation

The current plan/spec row agrees with the task on A/B identity, order (1722/1723), category, title, companion, and all eight page prerequisites. `plan-spec.json` has `items: []`; the controlling track section and `research/hopf-hecke-scaffold/inventory.json` supply the proposed item contracts instead. The page-row empty list is a planning placeholder, not a change to the mathematical claims.

The scaffold inventory lists eleven A IDs. All eleven IDs already exist as published source carriers: nine are the exact same-home published context items on this A page, and `def-hh-type-a-quantum-tensor-action-for-centralizers` plus `lem-hh-quantum-presentation-and-tensor-action-descent` remain published on `type-a-hecke-specht-modules-and-cellular-bases`. Their actual bodies were read; they are preserved and are not reminted into this run's inventory. The published relation-descent lemma proves the vector representation, bialgebra coproduct/counit descent, coassociativity and tensor actions, but it does not define or verify an antipode. The scaffold contract's extra antipode obligation is therefore not already supplied. Two distinct local A items, `def-hh-type-a-quantum-antipode-formula` and `lem-hh-type-a-quantum-antipode-descends`, provide that missing definition and complete relation/identity proof without changing the published source IDs.

The plan's B design names calculations but no B item IDs. This batch adds two worked examples (the rank-two operator with all thirteen weak-order braid cases; the N=2 local quantum/Hecke commutation table) and one rank-one counterexample. These are in the B page's normal `examples` placement. The A page has nine published context items plus two new items (11 total); the B page has three new examples/counterexample. Both remain below the 100-item cap.

## Supplier review and unresolved page interfaces

The current A-page carriers and both published HH-17 quantum-action suppliers were inspected at their complete statements and proof bodies. The local antipode proof uses only the actual published presentation, free-algebra relation-descent result, and published bialgebra/coproduct descent; it does not cite an absent proof or invent a supplier excerpt. `thm-hh-antipode-uniqueness-anti-multiplication-and-anti-comultiplication` is still absent from the current Batch-3 supplier page. The older scaffold proposed it as a dependency of an expanded same-ID relation-descent item, but that same ID is already published and cannot be edited. The new local proof establishes the type-A antipode directly, so this absent general theorem is not a logical dependency of the new lemma. It remains recorded below as an unresolved declared page prerequisite, not as a completed result.

The four in-run page prerequisites remain draft shells with empty item lists. Their exact open page edges, supplier IDs and needed hypotheses are recorded in `batch-15.cross-batch-dependencies.json`:

- Batch 3 `bialgebras-convolution-and-antipode-identities`: `def-hh-bialgebra-and-bialgebra-map`, `def-hh-hopf-algebra-and-antipode`, and `thm-hh-antipode-uniqueness-anti-multiplication-and-anti-comultiplication` remain unauthored. The declared interface needs a coassociative bialgebra with algebra-map coproduct/counit and, where used, a two-sided convolution inverse and anti-multiplication. Our local type-A antipode proof is independent of the missing general theorem.
- Batch 5 `hopf-module-tensor-products-and-rigid-duality`: `def-hh-module-category-and-tensor-action` and `thm-hh-bialgebra-module-tensor-coherence` remain unauthored, as do the listed finite-dual suppliers. Their interface needs a well-defined diagonal tensor action, coassociative/counital module coherence, and antipode identities for finite dual actions. Our explicit matrix and coproduct calculations do not use those absent proofs.
- Batch 8 `quasitriangular-hopf-algebras-and-braided-module-categories`: `def-hh-leg-notation-and-quasitriangular-hopf-algebra`, `thm-hh-r-matrix-constructs-a-module-braiding`, and `lem-hh-local-braiding-operators-obey-braid-relations` remain unauthored. The interface requires an invertible algebraic R satisfying the quasitriangular identities and an H-linear braiding; an induced operator still needs the Hecke quadratic relation checked. Our explicit ordered-basis operator proof assumes no universal R-matrix.
- Batch 11 `hecke-base-change-semisimplicity-and-deformation`: the trace-determinant, characteristic-zero criterion, generic semisimplicity and split-deformation suppliers remain unauthored. Their stated field, characteristic, finite-dimensionality and split-reduction hypotheses are not used by the local rank-specialization proof, which expressly avoids generic Hecke semisimplicity. The declared page edge remains open.

The A page's declared `requires` list is retained unchanged. The open page edges may block page-level readiness or later owner reconciliation even though each new item has complete direct item prerequisites and a local proof.

## Sources inspected

Two independent complete lecture-note treatments were fetched and read in their relevant full sections. Etingof–Semenyakin, *A brief introduction to quantum groups*, §§2.1.3–2.2.2 (PDF pp. 3–5), supplies the Hopf axioms and the matching antipode sign convention in rank one; the local item separately checks every type-A relation. Luo–Wang, *Lectures on dualities ABC in representation theory*, §§2.1–2.2 (PDF pp. 11–12) and §6.1 (PDF pp. 30–31), supplies the classical and q-Schur/Hecke conventions. Their classical proof is explicitly referred elsewhere and their generic proof is a sketch; neither is used to discharge this batch's centralizer proofs, which are fully supplied by the existing local published carriers. Exact locators, supported items, reading records and fetch stamps are in `batch-15.coverage.json`.

A Yale-hosted 2014 seminar-note PDF was considered during search, but its direct web-open attempt returned HTTP 502. It was not adopted as a source: both selected arXiv full texts were successfully downloaded and inspected, and the local arguments provide complete proofs. No failed source is treated as evidence or as a mathematical premise.

## Dependency order, contracts, and checks

In-run item levels are: antipode candidate definition 0; its well-definedness/antipode lemma 1; both worked examples and the counterexample 0. There is no in-run cycle. Batch-level scheduling remains the supplied level 6 with prerequisite batches 3, 5, 8 and 11; the pre-authoring scheduling input recorded in the task was `58cf41778ca737ce2c4e0a45aba6eaf8476b4c24fb4e64f5f1794e1d28217856`.

Final scoped results:

- `source-fetch-check --stamp` fetched and stamped both full-text sources; check mode then reported 2/2 verified. The coverage checklist reports 1 A page, 8 harvested results, 0 errors and 0 warnings.
- Strict proof-contract validation reports 5/5 items checked, 0 errors and 0 warnings. Scoped precheck reports four proof-bearing items checked and 0 failures; the definition has `verification.precheck: n/a` because it supplies no phase proof.
- `rendercheck` reports all 7 changed item/page files parse and render, including KaTeX, with no errors. Explicit `proof-layout` reports 5 items, 16 steps and 0 defects.
- Scoped `content-policy` reports 5 items, 0 errors and 0 warnings. Focused `depcheck` reports no unresolved links or cycles across the 528-item/395-page prerequisite closure.
- The item dependency-level calculation on this batch's five manifest items reports levels `0,1,0,0,0`, with no errors. `step1-decisions record` marked all five new items `ready` with `owner:false`; each readiness file binds its examined dependencies.
- A read-only run-wide dependency-level recomputation was blocked while parsing another draft item, `items/thm-hh-affine-type-a-bernstein-pbw.md`: its double-quoted source locator at line 21 contains the invalid YAML escape `\l` in `$Y^\lambda T_w$`. This item is outside Batch 15 and was not edited. The supplied scheduling input and level 6 remain the dispatch record; the owner will need a fresh run-wide recomputation after the other item's frontmatter is repaired. The batch-level graph edges and our scoped item levels are acyclic.

No native stage transition, gate, verdict, published content, shared plan or engine state was changed by this authoring handoff.
