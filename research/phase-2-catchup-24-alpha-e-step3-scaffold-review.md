# Phase 2 catch-up 24 — Alpha group e Step 3 scaffold review

Run `phase-2-catchup-24`; dispatch label `step3-e`; independently reviewed batches 10 and 11. This review did not edit either batch manifest, coverage file, notes file, prose design, canonical plan, published page, or published item.

## Verdicts

| Batch | A/B pair | Verdict |
|---|---|---|
| 10 | `haar-measure-existence-and-uniqueness` / companion | **sufficient** |
| 10 | `blocks-defect-groups-and-the-brauer-homomorphism` / companion | **insufficient** |
| 11 | `kac-moody-algebras-from-generalized-cartan-matrices` / companion | **insufficient** |

The machine-readable verdicts are in `research/phase-2-catchup-24-alpha-e-step3-verdicts.json`. The exact defects below use the same identifiers as its `missing` entries.

## Review basis and dependency boundary

I reread the governing contract, `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, `briefs/beta-scaffold.md`, `briefs/tasks/frontier-dependency-ledger.md`, the batch 10 and 11 dispatch/manifests/coverage/notes, the representation-theory group and Lie designs, the live plan, the named published prerequisite items, and the relevant source text. I traced actual item deps and load-bearing strategy references rather than treating co-resident page membership as a dependency.

No reviewed proof uses an item from `deferred-set-theory-beyond-choice`, directly or through `deps`, `justified_by`, or a load-bearing `forward_ref`. Haar's compactness construction explicitly inherits the existing choice/Tychonoff cost. The other two A pages are not Foundations pages. The owned B pages require only their companions and have no consumers; the Kac--Moody A page nevertheless inherits a separate transitive B-page structural violation through its declared page requirement, recorded as B11-B-LEAF-CLOSURE.

No same-frontier proof dependency exists between batches 10 and 11 or from either batch to another batch in this run. Both owned cross-batch input ledgers therefore remain `[]`; the unified run ledger was refreshed and deduplicated. Later-topic source dispositions (Brauer First, affine Lie algebras, integrable modules, Weyl--Kac) are destinations, not proof dependencies. The future DG-31 wording is not accepted as a dependency and must be removed as described below.

The published-consumer boundary was applied narrowly. I found no defective published mathematical clause actually consumed by an owned proof. In particular, the Kac--Moody strategies do not use Harish--Chandra mathematics; the issue there is the mandatory page-structure gate, so the clean repair is deletion of the unused declared edge (or the already planned authorized repair of the published Harish--Chandra page edge). Unrelated published debt remains Phase-3 debt and did not affect these supplier verdicts.

## Batch 10 — Haar measure

The pair is sufficient. The 14 A and 4 B items appear in the canonical plan in the same order. The four A page requirements are earlier A pages and match the actual proof: compactness/Tychonoff, compactly supported cutoffs/partitions, Riesz--Markov--Kakutani, and the finite Radon Fubini interface.

The existence chain is closed: translation continuity and common compact support feed the covering ratios; their finiteness, normalization, invariance and almost additivity feed the finite-intersection construction; Tychonoff produces the positive invariant functional; RMK produces the Radon measure. The uniqueness chain is also closed: the compactly supported kernel is integrated by an explicitly constructed finite-partition argument, the comparison inequality is applied in both directions, and the normalization scalar is fixed. The compact-group corollaries and all four examples use only those earlier local results.

I independently checked the arbitrary compact product example. The product is compact Hausdorff under the inherited choice convention; finite-coordinate pushforwards are Radon and invariant; uniqueness identifies their marginals; and finite-coordinate continuous functions uniformly approximate an arbitrary continuous function by a finite basic-cylinder cover. Thus equality of all finite marginals determines the Haar probability without importing an undeclared infinite-product measure theorem.

The active treatments are Knapp, *Advanced Real Analysis*, Chapter VI §2, printed pp.225--230; Pedersen, *The existence and uniqueness of the Haar integral on a locally compact topological group*, printed pp.2 and 4--5; and Kowalski, *Representation Theory*, §5.2, printed pp.212--214. Their conventions were reconciled: Kowalski begins with right Haar, while the page consistently constructs left Haar.

The unread Colojoară--Gheondea monograph record has a valid `source_resolution.status: dropped`: it records the initial failure and five recovery retries, exact searches, and complete alternatives for every affected included/inline item. I rechecked the alternatives, including the compact-kernel comparison and arbitrary-product argument, against their declared earlier deps. The mathematics is complete, so the unavailable original and its source-count contribution are waived without dropping any result.

## Batch 10 — blocks, defect groups and Brauer homomorphism

The pair is insufficient.

### B10-PLAN-REGISTRATION

The manifest contains 31 A and 4 B items, but both canonical plan entries have empty item arrays. One authorized shared-plan writer must splice the exact inventories into `research/plan-spec.json`; this cannot be waived by a mathematically adequate strategy.

### B10-DEFECT-ZERO

`thm-defect-zero-blocks-are-simple-algebras` still labels a load-bearing implication OPEN. Its current dependencies do not prove that a block containing a projective simple is a full matrix algebra. The repair must declare and use the earlier symmetric-Frobenius and projective/injective interfaces, then prove the split-off/indecomposability argument (or the equivalent regular-module argument). The converse must use the correct opposite/star block factor in the enveloping algebra. This theorem is consumed by the companion endpoint example.

### B10-IDEMPOTENT-LIFTING and B10-MAXIMAL-PAIRS

`lem-idempotents-lift-through-finite-commutative-algebra-quotients` is stated over every finite commutative k-algebra but cites only a Krull--Schmidt theorem for finite-dimensional kg-modules. Jacobsen Theorem 1.25 is over an algebraically closed field, stronger than the inherited splitting-field assumption. A general-field finite-product-of-local-factors proof is required.

That gap is load-bearing in `thm-maximal-brauer-pairs-exist-and-are-conjugate -> thm-maximal-brauer-pairs-detect-defect-groups`. The maximal-pair theorem is itself marked OPEN and must prove, rather than list, the orbit-sum annihilation, support-centralizer, normalizer-conjugacy, central Brauer-image, idempotent-lift decomposition, and primitive-block selection steps. Jacobsen Lemma 2.32 and Theorem 2.33 give the route but not an imported local certificate.

### B10-PAIR-ORDER

`thm-brauer-pair-order-is-independent-of-the-normal-chain` proves only the chain construction in its statement. Coverage assigns BKY Theorem 2.2's six equivalent primitive-idempotent criteria to this item, while its strategy admits those criteria and their fixed-algebra lifting prerequisites remain OPEN. The statement must retain those useful harvested clauses and the scaffold must place their proofs before consumers, or insert exact supporting lemmas.

### B10-SYLOW-INTERSECTION

`lem-block-defect-is-an-intersection-of-two-sylow-subgroups` is marked OPEN. The missing proof is not page-wide semantic debt: it is the exact route used by `cor-normal-p-core-lies-in-every-block-defect-group`, `cor-block-defect-groups-are-p-radical`, and the boundary examples. The writer must prove both vertex retention under restriction and the trace-test identification of a transitive p-group permutation module's point stabilizer as its vertex, then perform the double-coset stabilizer calculation. Webb Theorem 12.3.3 confirms the target statement.

### B10-BRANCHING-EXAMPLE

The companion item `ex-brauer-pair-branching-for-c3-semidirect-c4-in-characteristic-two` is false under its displayed presentation. If

`G = <a,b | a^3=b^4=1, bab^{-1}=a^{-1}>`, `Q=<b^2>`,

then conjugation by `b^2` acts as inversion twice on `a`, so `b^2` commutes with both generators. Hence `Q` is central and `C_G(Q)=G`, not `C3 times C2`. The two nontrivial Fourier idempotents of `kC3` are interchanged by `b`; they are not two distinct central blocks of `kC_G(Q)`. Jacobsen Example 2.13, printed pp.18--19, has a garbled presentation, and merely swapping generator letters does not repair the calculation. A verified replacement example or corrected presentation/subgroup is required, with all coefficients, centralizers, idempotents and stabilizers checked.

The remaining block construction was checked against Jacobsen (Theorems 1.25, 2.21, 2.33 and Examples 2.12--2.13), Saunders, Webb Chapter 12 §§12.3--12.5, BKY, and Martínez Lectures 2--4. The defects above are proof-contract failures, not failures to fetch those treatments.

## Batch 11 — Kac--Moody algebras

The pair is insufficient, although most of its local construction is strong.

### B11-PLAN-REGISTRATION

The canonical plan contains all 33 A items but none of the manifest's 6 companion items. One authorized shared-plan writer must install the B inventory in proof order.

### B11-B-LEAF-CLOSURE

The live structural path

`kac-moody-algebras-from-generalized-cartan-matrices -> harish-chandra-isomorphism-casimir-and-central-characters -> real-forms-and-real-semisimple-lie-algebras-examples`

reaches a B page. This violates the Lie design's binding rule that every B page is a leaf. Because no owned item uses Harish--Chandra mathematics, deleting the owned page's redundant Harish--Chandra requirement and reconciling the RL-12 design row is mathematically justified and is the preferred repair. The alternative is the design's already prescribed authorized Phase-3 deletion of the published Harish--Chandra-to-DG-34-B edge. A shared prose/plan writer must choose and apply one consistent route.

### B11-TRICHOTOMY-CONTRACT

`thm-finite-affine-indefinite-trichotomy-for-indecomposable-gcms` has a vague statement and relies on three undefined type labels. Its strategy and coverage promise substantially more. The statement (or preceding definitions and immediate corollaries) must give the exact positive-vector and nonnegative-cone alternatives, finite determinant, affine corank-one/unique-positive-null-ray conclusion, transpose invariance, finite/affine symmetrizability, and the symmetrized-form signatures. Kleshchev Definition 4.1.1 and §§4.1--4.2, printed pp.50--60, supply the exact contract; the existing strict-linear-alternative and cycle strategies are a plausible local proof once the result is stated completely.

### B11-FUTURE-MODEL-REFERENCE

`prop-finite-type-kac-moody-algebras-recover-the-dg-semisimple-algebras` proves a useful intrinsic theorem, but its statement also identifies the result with a future “DG-31 model” that is not an earlier local object. Remove that clause and state the universal Cartan--Serre identification intrinsically; DG-31 can later depend on this item. This avoids converting a future page into an undeclared load-bearing supplier.

I otherwise approved the local realization, maximal disjoint ideal, root decomposition, invariant form, generalized Casimir, Serre-generation, real-root, component-simplicity and finite-root arguments. In particular, the countable PBW strategy can be completed without choice: order a countable basis, rewrite adjacent inversions, terminate by word length/inversion number, and resolve the only triple ambiguity with Jacobi degree by degree. The finite-type root proof uses height descent and a positive-form lattice bound, so it no longer needs the stale future DG supplier. The main sources were Kleshchev, *Lectures on Infinite Dimensional Lie Algebras*, the listed complete relevant ranges, and Perrin, *Introduction to Kac-Moody groups and Lie algebras*, complete Chapter 4 plus the explicitly delimited Chapter 5 material.

## Source dispositions and scope ledger

All 45 current declined/deferred/out-of-scope rows were independently adjudicated `stands`. Deferred rows have extant, topic-appropriate destinations; none is used by an owned proof. The Martínez character-height/Min--Max material is specifically excluded from the module/vertex definition of defect, while Brauer First material remains assigned to `brauers-first-main-theorem`. The Kac--Moody general affine, integrable-module and imaginary-root results remain assigned to their named later pages; Peterson--Kac conjugacy is out of scope because the owned construction fixes Cartan data.

The freshness check initially detected nine Kac--Moody closure-context changes made after the first pass. I refreshed the ledger, reread those live rows, re-entered evidence, and reran the check; the final recorded scope file is current.

## Checks run

- `node tools/manifest-deps.mjs research/phase-2-catchup-24-batch-10.pages.json`: 53 items, 0 errors.
- `node tools/manifest-deps.mjs research/phase-2-catchup-24-batch-11.pages.json`: 39 items, 0 errors.
- Focused content-policy checks for batches 10 and 11: 0 errors, 0 warnings in each.
- Focused coverage checks: batch 10, 2 pages / 134 rows / 0 errors / 0 warnings; batch 11, 1 page / 61 rows / 0 errors / 0 warnings.
- `source-fetch-check --coverage ... --stamp`: batch 10 resolved 9/9 sources (8 fetch-verified, one documented drop, zero new stamps); batch 11 resolved and fetch-verified 2/2 (zero new stamps).
- `node tools/scope-decisions.mjs check --run phase-2-catchup-24 --group e`: final result 45 current declines, 0 errors.
- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-catchup-24 --require-reviewed`: refreshed and deduplicated; both owned batch inputs are empty and reviewed here.
- `node tools/manifest-deps.mjs research/phase-2-catchup-24-batch-*.pages.json`: 691 items, 0 normalized, 0 errors.
- `node tools/validate-plan.mjs research/plan-spec.json`: pass; declared order acyclic and consistent, with no reported item cycle, forward reference, B-page dependency, or unresolved ID among the 956 pages currently carrying item lists. It also reports 3,599 redundant-prerequisite warnings and 663 plan pages without item lists; the latter limitation is exactly why the empty assigned inventories above remain verdict defects despite the global pass.
- `node tools/extcheck.mjs --quiet`: pass with 57 pre-existing published `unproved-on-published` warnings; every recorded-not-proved statement remains a cited remark and every consequence is marked.
- `node tools/scaffold-verdicts.mjs --run phase-2-catchup-24 --json`: parsed all three group-e verdicts and reports them in the run workset; the whole run is presently 18/24 reviewed and remains open because six other groups' A-page verdicts are not yet present.

No new prerequisite A/B pair is needed for the repairs identified here. The block gaps require earlier local lemmas/deps and a corrected example; the Kac--Moody gaps require statement/edge/plan reconciliation. All shared prose and canonical-plan changes must be routed to one authorized writer.
