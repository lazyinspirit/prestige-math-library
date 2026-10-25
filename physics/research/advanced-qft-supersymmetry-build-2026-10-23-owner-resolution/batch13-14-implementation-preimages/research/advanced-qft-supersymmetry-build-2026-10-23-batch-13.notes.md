# Batch 13 authoring notes

## Scope and plan comparison

Owned A/B pair: **qftx-two-group-cochains** and **qftx-two-group-cochains-examples**, category **quantum-field-theory-mathematics**, mathematics library. The complete design at research/plan-advanced-qft-and-supersymmetry-track.md § “Finite 2-Group Background Cochains and Consistency” (line 177) calls for a finite simplicial background with local coefficients and a Postnikov cocycle, explicit gauge transformations, and closure/composition. The matching A/B rows in research/plan-spec.json have the same IDs, titles, category, library, and page edges; A requires no earlier page, and B requires A. The batch-13 manifest and the prose scaffold both had empty item inventories as preauthoring placeholders. No design/plan conflict was found.

The dependency-level record gives batch 13 level 0 with requires []. The item DAG is **def-aqft-two-group-background** at level 0, **thm-aqft-two-group-background-consistency** at level 1, and the two planned B examples at level 1 because each uses only the A definition. The B-page-to-A-page edge is within this batch, not a cross-batch edge. The planned direct page consumers outside this batch are **qftx-finite-symmetry-gauging** (batch 14) and **qftx-two-group-symmetry-backgrounds** (batch 38); their exact interface use remains for their owning authors to check.

## Completed item: def-aqft-two-group-background

**Claim and conventions.** Defines a finite skeletal 2-group from finite (G,A,rho,beta) data, with A additive, left action rho, normalized inhomogeneous 3-cocycle beta, ordered simplicial complexes, vertex-first local coefficients, flat edge labels a_ij a_jk=a_ik, the twisted differential, the constraint delta_a B=a^* beta, and representative-level 0-form and 1-form gauge formulas. It defines cocycle equivalence by normalized 2-coboundaries and names [beta] the Postnikov class in this skeletal model; additivity gives reflexivity, symmetry, and transitivity. The associator is directed from (gh)k to g(hk) with label beta(g,h,k), so the tetrahedron equation is rho(a_ij)B_jkl-B_ikl+B_ijl-B_ijk=beta(a_ij,a_jk,a_kl). The representative change beta -> beta+delta_rho c, B -> B+a^*c is checked inline by flat-pullback naturality.

**Placement and dependencies.** Carrier: items/def-aqft-two-group-background.md; A page: **qftx-two-group-cochains**; domain mathematics, library mathematics, dependency_level 0, no deps, and an empty dependency_roles map. No Choice principle or imported mathematical supplier is used.

**Sources and reading.** All three full-text PDFs passed source-fetch-check --stamp (3/3). The complete relevant sections were inspected:

- Benini, Córdova, and Hsin, [§2.3, PDF pp. 18–19](https://arxiv.org/pdf/1803.09336): simplicial flatness, the twisted tetrahedron equation, and 0-/1-form gauge transformations. Disposition: included for the background interface; their undetermined zeta cochain and unexpanded composition law are replaced by the local explicit formulas.
- Baez and Lauda, [§8.3, PDF pp. 54–59](https://arxiv.org/pdf/math/0307200): the skeletal (G,H,action,a) structure and the associator/pentagon 3-cocycle relation. Disposition: included for the mathematical coherence convention; it does not supply simplicial QFT backgrounds.
- Schäfer-Nameki, [§§2.5 and 2.8.1, printed pp. 23–33](https://arxiv.org/pdf/2305.18296v2): discrete cochain backgrounds, a Postnikov constraint, and the distinction from anomaly data. Disposition: context-only for the local mathematical construction.

The detailed source locators, per-item support/limits, retrieval attempts, and actual fetch stamps are recorded in research/advanced-qft-supersymmetry-build-2026-10-23-batch-13-source-coverage.json.

**Supplier review and decision.** Read the exact imported statements/proofs for **def-postnikov-section-and-postnikov-tower** and **thm-simple-postnikov-stages-are-classified-by-k-invariants** from their pinned local snapshots. Their current frontmatter is published. The former defines topological Postnikov sections/towers; the latter classifies marked simple CW Postnikov stages under its connected simple CW, trivial-monodromy, fiber, and AC hypotheses. Neither defines the finite representative-level local-coefficient differential or its gauge-composition formulas, and the current planned supplier map marks both as nonlogical context, not item edges. They are therefore not used or listed in deps; all missing cochain operations are defined locally. No supplier escalation is warranted.

**Readiness.** The definition carrier, page placement, source coverage, and contract worksheet are complete. The latest statement wording is synchronized into the A-page manifest and the consumer contract excerpts. Final scoped checks pass, and the current Step-1 receipt is ready with no dependencies; this is authoring readiness, not independent approval.

## Completed item: thm-aqft-two-group-background-consistency

**Claim and conventions.** Proves that for flat edge labels and a 2-cochain satisfying the Definition's twisted tetrahedron equation, every explicitly written vertex/edge transformation preserves flatness and the equation. The composite of (g,lambda) followed by (h,mu) has vertex component hg and the five-term edge label nu in the item. A reverse transformation is constructed for each source background, and induced gauge maps compose associatively as functions.

**Placement and dependencies.** Carrier: items/thm-aqft-two-group-background-consistency.md; A page qftx-two-group-cochains; domain mathematics, library mathematics, dependency_level 1, with the single dependency def-aqft-two-group-background assigned role mathematical-premise. No other supplier, Choice assumption, or physical premise is used.

**Proof route.** Step 1.1 checks transformed flatness; 1.2 expands the local-coefficient differential squares; 1.3 writes the zeta coboundary discrepancy as the signed sum of four exact bar-cocycle identities; 1.4 concludes equation preservation. Step 2.1 derives the composition parameter by adding the five associator/edge-morphism labels; 2.2 uses the scalar pentagon for triangle coherence. Step 3.1 constructs an inverse edge cochain for each fixed source background. The strict proof contract and finite smoke checks passed.

**Sources.** Uses the already stamped Benini-Córdova-Hsin §2.3 and Baez-Lauda §8.3 sections listed above for interface/sign comparison and associator coherence. The complete local proof is authored from the A-page definition; the sources do not replace it. No prerequisite is unresolved.

**Scope correction.** An exploratory stronger claim that the two raw parenthesized parameter arrays differ only by the vertex cochain sigma_i=beta(k_i,h_i,g_i) was not retained: after correcting the parenthesization in a sign-sensitive Z3-coefficient check, the first failing sample had edge 1–2 with left label 0, right label 2, and predicted delta-sigma label 0. The planned contract requires background preservation and a pairwise composition formula, both proved and checked; the final theorem does not assert that extra raw-parameter identity.

**Completion.** The theorem's proof contract, finite checks, scoped validations, and current Step-1 readiness record are complete; the only open checks listed below are run-global inputs outside this batch.

**Finite smoke checks completed.** Three local Python checks covered finite slices. Two randomized checks each ran 20,000 tetrahedron cases: G=Z2, A=Z2×Z2 with the swap action and beta(g,h,k)=ghk·(1,1); and G=Z2, A=Z4 with trivial action and beta(g,h,k)=2ghk. A third first checked the 3-cocycle identity for G=A=Z3, trivial action, beta(g,h,k)=g floor((h+k)/3) on all 81 four-tuples, then ran 20,000 randomized tetrahedron cases. Each check verified transformed-equation preservation and equality of sequential versus composed transformations. All passed. These are bounded convention/formula checks only; the theorem proof is the general argument above, and the checks do not establish it.

## Completed B-page examples

### ex-aqft-two-group-twisted-local-coefficient-background

Defines the split case on one ordered tetrahedron with G=Z2, A=Z3, the sign action rho_1(t)=-t, beta=0, and a flat edge cochain from vertex potentials. It verifies that lambda_01=1 shifts the zero 2-cochain to the two-face cocycle B_012=B_013=1. Placement is the B page. Its sole logical dependency is def-aqft-two-group-background at dependency_level 1, role mathematical-premise. The computation is local and uses no external source, physical assumption, or Choice principle.

### ex-aqft-two-group-postnikov-background

Defines beta(g,h,k)=ghk for G=A=Z2 with trivial action, proves the normalized 3-cocycle identity and non-coboundary property directly, constructs a flat tetrahedron background with delta_a B=1, and explicitly checks the transformed data under g=(1,0,0,0). It includes a labelled TikZ tetrahedron whose incidence is supplementary to the algebraic verification. Placement is the B page. Its sole logical dependency is def-aqft-two-group-background at dependency_level 1, role mathematical-premise. This is a finite mathematical example, not a physical anomaly statement.

Both examples use uninterrupted descriptions and keep the supplier link in Facts & Assumptions. No source links are needed in either example statement; the external treatment record remains attached to the A-page mathematical construction.

## Final Step 1 evidence

- The current batch manifest contains both A-page items and both B-page examples, with complete statement mirrors. Both page carriers are YAML-frontmatter-only; A has the two mathematical items, B has the two examples and requires A. The manifest design state now points to the separate current Step-1 receipts. The definition's locally stated cocycle-equivalence convention is mirrored exactly in the manifest and in all dependent contract excerpts.
- The current item DAG recomputes as definition level 0, theorem level 1, and both examples level 1, with no local errors. A read-only recomputation of the current batch graph returns batch 13 at level 0 with requires []. The stored run-level dependency-level file became stale after sibling manifests changed following the last refresh/check; the drained construction join must refresh that shared scheduling evidence.
- Source fetch: source-fetch-check --stamp passed 3/3 and the subsequent no-network check passed 3/3. No retrieval failure or source-resolution escalation occurred.
- Contract validation: the strict proof-contract check passes for all four items. Content policy passes both normal and authored-manifest-only scopes (4 items, no warnings/errors); manifest-deps reports 4 items, 0 normalizations, 0 errors; focused depcheck passes for the four items and two pages; rendercheck passes all six changed carriers; proof-layout passes 4 items / 15 proof steps / 0 defects.
- loadStep1Record plus step1Decision confirms ready and current hashes for all four item IDs: def-aqft-two-group-background, thm-aqft-two-group-background-consistency, ex-aqft-two-group-twisted-local-coefficient-background, and ex-aqft-two-group-postnikov-background. These are authoring-readiness records, not independent acceptance.
- The cross-batch dependency file is the required JSON array []: every current page/item edge authored in this batch is internal to batch 13.

**Run-global input limitation.** The statement-first frontier checker and proof-contract-coverage checker both stop before inspecting this batch because the separate batch-1 A page aqft-susy-math-foundations still has an empty item inventory. This batch does not own that page. The four scoped item statements are uninterrupted and the authored page bodies are empty, verified directly in the carriers; their scoped contract/format/render checks pass. No other pair was edited.

**No batch-13 prerequisite remains unresolved.** Independent review and later run-level gates remain their ordinary subsequent duties.
