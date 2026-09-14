# Phase 2 next 18 — batch 4 Step-1 construction notes

## Scope and result

This batch owns only `topological-vector-bundles-and-grassmannian-classification` with its examples page and `complex-topological-k-theory-and-bott-periodicity` with its examples page. The manifest contains 20+7 items for the vector-bundle pair and 20+6 items for the K-theory pair, 53 items total. Every item has a stable previously unused ID, an explicit dependency array, a statement contract, a complete proof strategy, source attribution, and provenance. Local suppliers precede their consumers, and no B-page item is used as a prerequisite.

No published page or item, shared plan, engine-state file, verdict, or canonical defect ledger was edited. The only shared generated file refreshed for this task is the required frontier dependency ledger.

## Controlling design and current-plan conflicts

I read both listed locations for each pair and the complete surrounding design sections in `research/plan-algebraic-topology-track.md`.

- For the vector-bundle pair, the A-page design beginning at line 2010 and the B-page design beginning at line 2043 are complementary: the former controls the theory inventory, conventions, warnings, and classification proof route, while the latter controls the examples/counterexamples inventory.
- For the K-theory pair, the A-page design beginning at line 2062 and the B-page design beginning at line 2094 are likewise complementary and jointly control their respective page inventories.

The current `research/plan-spec.json` controls conflicts. Two conflicts were found and resolved in its favor:

1. The early AT-15 design prerequisite line lists only `the-serre-spectral-sequence-and-applications`. The current plan instead requires `fibrations-fiber-bundles-and-homotopy-exact-sequences`, `obstruction-theory-postnikov-towers-and-classifying-spaces`, and `partitions-of-unity-and-paracompactness`; those three exact plan prerequisites are in the manifest.
2. The early AT-16 design prerequisite line lists only the AT-15 vector-bundle page. The current plan instead requires `cup-cap-cross-products-and-cohomology-rings`, the AT-15 page, and `spectra-and-stable-homotopy-groups`; those three exact plan prerequisites are in the manifest.

The later reconciliation table at lines 2793–2794 agrees exactly with the current plan and confirms that these are intentional current-plan corrections. The four plan objects have empty item arrays; this supplies no competing item inventory and does not erase the complete generated design inventories.

Three prerequisite-order repairs preserve, rather than change, the designed scope:

- The bundle-embedding and homotopy/uniqueness lemmas occur before the stable-Grassmannian classification theorem that consumes them. This removes the design ordering's otherwise forward/circular presentation.
- The reduced K-theory cofibration exact sequence occurs before the external product, whose reduced smash-product descent uses exactness.
- A necessary local lemma, `lem-determinant-classifies-loops-in-complex-general-linear-groups`, was inserted immediately before `thm-hopf-line-calculation-of-k-zero-of-the-two-sphere`. Without it the calculation would hide the fact that stable complex clutching loops are classified by determinant/winding. Its dependency chain is the published homotopy long exact sequence, simple connectivity of higher spheres, and winding-number classification; it supplies the Hopf calculation, which in turn supplies the Laurent-polynomial product theorem and Bott periodicity. This is an item-level proof closure inside the selected pair, not a new page or prerequisite pair.

## Full-source reading and harvested dispositions

Six page-scoped source records, covering five full authoritative documents, were fetched, stamped, and inspected at the relevant arguments:

- Allen Hatcher, *Vector Bundles & K-Theory*, Chapter 1 §§1.1–1.2, printed pp.6–37, for vector-bundle constructions, complements, homotopy invariance, clutching, stable Grassmannian classification, and Schubert cells.
- Haynes Miller, MIT 18.906 notes, Lectures 16–21, printed pp.53–72, for numerability, metrics and splitting, principalization, Gauss embeddings, Stiefel spaces, and classifying spaces.
- Milnor–Stasheff, *Characteristic Classes*, §§2–3 and §§5–6, printed pp.13–36 and 55–82, for an independent vector-bundle, universal-bundle, and Schubert-cell treatment.
- Peter Nyikos, “The Topological Structure of the Tangent and Cotangent Bundles on the Long Line,” *Topology Proceedings* 4 (1979), pp.271–275, as the authoritative long-line input behind the already-published nonnumerability counterexample.
- Hatcher, Chapter 2 §§2.1–2.2, printed pp.39–58, for Grothendieck completion, exactness, the external product, and the complete Laurent-polynomial proof of the fundamental product theorem; Proposition 2.24, printed pp.66–67, was separately inspected for the complex-projective-space calculation.
- J. P. May, *A Concise Course in Algebraic Topology*, Chapter 24 §§1–2, printed pp.203–208, and the §3 projective-bundle material, as the independent K-theory/Bott treatment.

The coverage file gives all 43 harvested results an `included`, `inline`, `deferred`, or specifically reasoned `out of scope` disposition and a destination for every deferral. All six source records passed full-text fetch verification. There were no retrieval failures, exhausted retries, dropped sources, or owner source escalations.

One generated-design locator was corrected in the coverage evidence: the CP^n ring result is not in Hatcher's printed pp.39–58; its actual full argument is Proposition 2.24 on printed pp.66–67. The source remains valid, and May Chapter 24 §3 provides the independent treatment.

## Mathematical and dependency audit

The actual item statements and proofs of every direct published dependency were inspected as needed; publication status and page membership were not treated as proof checks. The audit included bundle and principal-bundle definitions, associated bundles, numerable-bundle fibrancy, partitions of unity, classifying spaces, CW compact-support and cellular approximation results, the homotopy long exact sequence and Whitehead theorem, quotient and Tietze extension results, cone/suspension/Puppe exactness, compact uniform continuity and Riemann integration, winding number, the sphere tangent-field obstruction, and the spectrum-pairing interface. All declared direct external dependencies are published and adequate in direction, hypotheses, conventions, and strength. No defective actual prerequisite was found.

The load-bearing checks were:

- Vector-bundle rank is fixed on the A page; locally constant variable rank is introduced only for compact-space K-theory. The zero-rank and empty-base cases are retained.
- Classification is only for numerable bundles. Stable Stiefel contractibility uses finite-cell support and cellular approximation before Whitehead, so arbitrary-CW maps do not conceal a compactness or choice step. The embedding and uniqueness lemmas explicitly supply both directions of the classification bijection.
- The clutching theorem records based/free homotopy conventions, the q=1 conjugacy-orbit issue, and the advertised complex q≤2n and real q<n stable ranges. The sphere examples use only ranges where the statements apply.
- The RP-infinity complement counterexample checks the actual finite-stage factorization and mod-2 cellular homology obstruction. The nonnumerable counterexample depends on the published long-line principal-bundle example and does not weaken the numerable theorem.
- `K^0` is the Grothendieck completion of finite-rank complex bundles on compact Hausdorff spaces. Equality as stable isomorphism uses the finite complement theorem; the rank map lands componentwise in H^0. Reduced theory, basepoints, smash products, and cofibration exactness are introduced before use.
- The Hopf calculation does not assume its desired integer classification: Gram–Schmidt reduces GL_n(C) to U(n), determinant has fiber SU(n), and the sphere-fibration induction makes SU(n) simply connected before winding number is applied.
- Hatcher's Bott proof was read in its actual form. Uniform Fourier/Poisson Laurent approximation uses compactness, uniform continuity, Riemann integration, and partitions of unity; it does not invoke Stone–Weierstrass. Clearing negative powers, polynomial linearization, and the eigenbundle split are separate suppliers before the product theorem.
- The final generalized-cohomology assertion is restricted to finite CW pairs and uses the published sequential-prespectrum product interface. The CP^n ring calculation follows its finite filtration and Bott-periodic exact sequences.
- The stable-but-not-actual example uses the real tangent bundle of S^2 and explicitly does not claim equality of complex bundles or a complex-K counterexample.

No dependency is missing, circular, forward, or mathematically inadequate. No owned proof consumes a Recorded result to prove its replacement. No owned item or prerequisite path enters `deferred-set-theory-beyond-choice`, so the Foundations separation rule is preserved.

## Axiom-of-choice boundary

AC is stated and depended on exactly where the construction uses it. For arbitrary paracompact bundle atlases it supplies the choice/dependent-choice input used by the published partition theorem and simultaneous local chart selections; the metric theorem explicitly retains a choice-free branch when numerating charts are supplied. Splitting, finite complements, homotopy invariance, arbitrary-CW stable classification, stable-isomorphism cancellation, and the compact-family Laurent/Bott construction inherit the declared AC input. The incompatible choice-free/numerated formulations are not collapsed into the AC statements.

## Published defects and cross-batch dependencies

No published defect was found among the actual prerequisites of these 53 items, and no unrelated published-consumer defect needed an owned canonical-ledger note. The corrected Hatcher CP^n locator concerns generated source metadata, not a published library item.

`research/phase-2-next-18-batch-4.cross-batch-dependencies.json` is `[]`: this batch consumes no item supplied by another current-run batch. The K-theory pair consumes the earlier vector-bundle pair inside this same assigned batch, so that edge is local rather than cross-batch. No selected-pair change, page split, or new prerequisite pair is required.

## Readiness and verification

All 53 items have complete proof strategies and adequate met prerequisites and were recorded `ready`, in manifest prerequisite order, with each record carrying the exact examined dependency IDs and source/proof evidence. The readiness recheck reports 53/53 current and closed, 53 ready, and 0 escalated. These records establish Step-1 construction readiness only; owner/operator reconciliation and Step 3 remain the independent mathematical approval gate.

The final construction gates produced these actual results. Whole-run figures are a point-in-time snapshot because other batches may be written concurrently.

| Check | Result |
|---|---|
| Owned manifest dependencies | `manifest-deps`: 53 items, 0 normalized, 0 errors. |
| Owned manifest policy | `content-policy --manifest-only`: 53 scoped items, 0 errors, 0 warnings. |
| Owned readiness | 53/53 current and closed: 53 ready, 0 escalated. |
| Owned coverage | `coverage-checklist --require-destination`: 2 A pages, 43 harvested results, 0 errors, 0 warnings. |
| Owned source gate | `source-fetch-check`: 6/6 source records fetch-verified and 6/6 resolved; no documented drop. |
| Whole-run manifest dependencies | 530 items, 0 normalized, 0 errors. |
| Whole-run manifest policy | 530 scoped items, 0 errors, 0 warnings. |
| Current plan | `validate-plan research/plan-spec.json --repo . --max-items 60`: exit 0; page ordering and declared dependencies validate. |
| Published dependency graph | `depcheck --quiet`: exit 0; existing repository-wide `cited-not-in-deps` warnings remain, then the checker reports no cycles, all references resolved, and no draft items on published pages. |
| Published external-proof audit | `extcheck --quiet`: exit 0 with 55 existing `unproved-on-published` warnings; it confirms every recorded-not-proved statement is a cited remark with no proof and every consequence is marked. None is introduced by this batch. |
| Run manifest integrity | Exit 0: all 36 owed pages occur in the manifests and there is no scope drift. |
| Whole-run source snapshot | Exit 1: among the 48 source records currently present, 46 are fetch-verified, 47 are resolved (including one documented drop), and the sole failure is batch 7's already-recorded Blass 1977 owner escalation for `thm-blass-model-has-only-principal-ultrafilters`. All six batch-4 sources pass. |
| Frontier dependency ledger | Refresh succeeded. Strict `--require-reviewed` remains incomplete because consumer inputs for batches 1, 5, and 8 are absent; 13 of 26 declared edges therefore have no review. Batch 4's owned empty input is present and is included in `reviewed_batches`. |
| Whitespace/patch integrity | `git diff --check` over the batch-4 artifacts, readiness records, and derived frontier ledger: exit 0. |

The foreign Blass source escalation and incomplete consumer-batch reviews do not alter an owned dependency or readiness decision. They remain explicit whole-run join work for their respective owners.
