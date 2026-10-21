# Batch 53 authoring notes — Real phase retrieval and phaseless ambiguity

Run: inverse-problems-knot-theory-all-109-2026-10-19  
Pair: real-phase-retrieval-and-complement-property  
Assigned output: research/inverse-problems-knot-theory-all-109-2026-10-19-batch-53.pages.json

## Plan and design reconciliation

- The controlling IP-53 design names five A items: def-ip-real-frame-phase-retrieval, def-ip-frame-complement-property, thm-ip-real-phase-retrieval-complement-property, cor-ip-full-spark-sharp-real-phase-measurement-count, and alg-ip-finite-sign-enumeration-phase-retrieval. It also requires five B leaves: a two-dimensional three-vector full-spark frame, a failed-partition ambiguity, real/complex contrast, Fourier translation/reflection ambiguity, and incomplete sign enumeration.
- research/plan-spec.json and the assigned batch manifest agree on page IDs, titles, category, order 3102/3103, companions and all five requires pages. The plan-spec item arrays are empty and it gives no B-leaf IDs; there is no claim/interface conflict. The prose design supplies the five planned A IDs and the five B descriptions. Four local A helpers and B item IDs are added below to prove the stated definitions, metric, determinant and algorithm properties. No design claim is dropped or narrowed.
- The five page prerequisites are the-moore-penrose-pseudoinverse-and-regularised-least-squares, hilbert-space-geometry-and-riesz-representation, the-spectral-theorem-and-singular-value-decomposition, inverse-problems-identifiability-and-stability, and linear-operators-pseudoinverses-and-picard-criteria; the current assigned task and plan-spec list these same pages.
- The task's scheduling input is 82c6593aa2e489002b865fc0c772d570358fcba2e9672bf7ba62f54728a5d556: batch 53 is level 2 and requires batches 1 and 2. The shared run-level scheduling artifact is owner/engine input and is not edited here; manifest changes require its ordinary recomputation before later dispatch.

## In-run supplier inspection and axiom scope

- Current batch-1 supplier bodies and complete proofs read: def-ip-forward-map-and-solution-classes, def-ip-identifiability-and-stability-modulus, and thm-ip-kernel-directions-preclude-unrestricted-recovery. Their interfaces define metric parameter/data spaces, target equivalence classes, and identifiability as equal data implying equal target classes. The first two are the exact logical suppliers of the phase-retrieval model. These carriers are draft; inspection records no review or acceptance.
- Current batch-2 A supplier bodies and complete proofs read: def-ip-unbounded-hilbert-moore-penrose-inverse, def-ip-compact-linear-inverse-model, thm-ip-closed-range-pseudoinverse-stability, and thm-ip-picard-range-criterion-for-compact-operators. The Hilbert-space pseudoinverse definition assumes Countable Choice; it is not used by the finite-matrix algorithm. The algorithm instead uses the published finite-matrix Moore–Penrose inverse, finite SVD, and finite least-squares solution-family statements. The batch-2 page remains the declared page prerequisite, but its infinite-dimensional pseudoinverse claim is not added as an item proof premise.
- The published general Hilbert-space orthogonal-decomposition theorem explicitly assumes Countable Choice. The finite complement argument does not use that theorem: it uses the choice-free finite-dimensional dimension formula for the orthogonal complement of a subspace under the standard real coordinate form. The finite SVD path likewise uses finite-dimensional orthogonal decomposition/orthonormal bases, not the Hilbert-space decomposition theorem. No form of Choice is required by the new claims.
- The page requirements and current supplier interfaces were inspected directly. Their hashes and interface dispositions will be recorded in research/inverse-problems-knot-theory-all-109-2026-10-19-batch-53.cross-batch-dependencies.json. The draft status of batches 1 and 2 is kept visible and is not treated as approval.

## Item inventory and logical dependency order

dependency_level counts only in-run item deps: zero without an in-run item supplier, otherwise one plus the maximum supplier level. Page requires edges determine the batch level separately.

| Level | Item | Kind | Direct in-run dependencies |
|---:|---|---|---|
| 0 | lem-ip-vandermonde-determinant | lemma | none |
| 2 | def-ip-real-frame-phase-retrieval | definition | def-ip-forward-map-and-solution-classes, def-ip-identifiability-and-stability-modulus |
| 3 | lem-ip-real-phase-retrieval-quotient-metric | lemma | def-ip-real-frame-phase-retrieval |
| 3 | def-ip-frame-complement-property | definition | def-ip-real-frame-phase-retrieval |
| 3 | def-ip-real-full-spark-measurement-family | definition | def-ip-real-frame-phase-retrieval |
| 3 | alg-ip-finite-sign-enumeration-phase-retrieval | algorithm | def-ip-real-frame-phase-retrieval |
| 4 | thm-ip-real-phase-retrieval-complement-property | theorem | def-ip-real-frame-phase-retrieval, lem-ip-real-phase-retrieval-quotient-metric, def-ip-frame-complement-property |
| 4 | thm-ip-finite-sign-enumeration-correctness | theorem | alg-ip-finite-sign-enumeration-phase-retrieval, def-ip-real-frame-phase-retrieval |
| 5 | cor-ip-full-spark-sharp-real-phase-measurement-count | corollary | thm-ip-real-phase-retrieval-complement-property, def-ip-frame-complement-property, def-ip-real-full-spark-measurement-family, lem-ip-vandermonde-determinant |
| 0 | ex-ip-fourier-translation-reflection-ambiguity | example | none |
| 4 | cex-ip-real-failed-complement-partition | counterexample | def-ip-real-frame-phase-retrieval, lem-ip-real-phase-retrieval-quotient-metric, def-ip-frame-complement-property |
| 5 | ex-ip-sign-enumeration-budget-exhaustion | example | alg-ip-finite-sign-enumeration-phase-retrieval, thm-ip-finite-sign-enumeration-correctness |
| 6 | ex-ip-real-phase-retrieval-two-dimensional-full-spark-frame | example | def-ip-real-frame-phase-retrieval, def-ip-real-full-spark-measurement-family, cor-ip-full-spark-sharp-real-phase-measurement-count |
| 6 | cex-ip-complex-complement-property-insufficient | counterexample | thm-ip-real-phase-retrieval-complement-property, cor-ip-full-spark-sharp-real-phase-measurement-count |

The manifest records all direct external item dependencies as well as these in-run edges. The A page adds a locally proved quotient-metric/well-definedness lemma, a full-spark definition, the Vandermonde determinant lemma, and an algorithm correctness theorem. The B page retains all five planned leaves as separate items; the local examples use no unsupported result as a supplier.

## Source work

Four complete treatments were inspected for the A page: Balan–Casazza–Edidin, arXiv:math/0412411 (Theorem 2.8 and Corollaries 2.6–2.7); Grohs–Koppensteiner–Rathmair, arXiv:1901.07911v2 (Theorem 2.2 and proof, §2.1); Balan, Frames and Phaseless Reconstruction, full 2015 lecture notes (Theorem 3.2, Corollary 3.3, and the explicit partition ambiguity); and MIT OpenCourseWare 18.013A, Chapter B §1 (Vandermonde determinant factorization). The first two give independent treatments of the real complement-property criterion; the UMD notes satisfy the full-lecture-notes requirement. The local proofs preserve the sources' finite real scope and do not claim complex or Fourier uniqueness.

The arXiv source uses amplitude measurements while the plan specifies intensities. The authored definition distinguishes the two maps and the local quotient lemma proves their injectivity equivalence by coordinatewise squaring on nonnegative data. The MIT Vandermonde argument is expanded locally to justify factor divisibility and the leading coefficient. Each harvested result has an item-level disposition in the coverage file. All seven page-source occurrences are fetch-stamped; the four distinct selected URLs all passed, with no source dropped and no unresolved mathematical source recorded.

## Live run context

At final check, disk-recomputed autopilot status is still `running`, with `1-scaffold` at 26/109 and no workers in flight. It lists the earlier owner repair blocker in `research/inverse-problems-knot-theory-all-109-2026-10-19-step1-blockers.json`; artifact completion is deferred until authoring coverage is complete and writers drain. The batch-53 pair is authored and its Step-1 records are current. Recent git log: `50139bdcb6`, `dd17c1fe56`, `33652e72f0`. No run state, verdict, shared plan, published content, or other pair carrier was edited.

## Item checkpoints and validation

Items are recorded here one at a time after their carrier is complete. Each checkpoint records the exact claim/convention, dependencies, source locators, scoped checks, unresolved obligations, and next item. Final readiness is recorded only after all item, source, proof-contract, placement, and scoped validation inputs are current.

### Initial status

- Manifest inventory and item levels are now assigned above. A/B page carriers will be frontmatter-only with empty Markdown bodies.
- The scoped recomputation using batches 1, 2, and 53 checked 24 manifest items across six pages with zero dependency-level errors. Batch-53 item levels computed as recorded in the table; maximum level is 6.
- The final scoped dependency, statement-first, content-policy, precheck, proof-layout, proof-contract, source-fetch and coverage checks are recorded below. Fourteen Step-1 items are now marked ready; those authoring records are not independent review or approval.
- The initial whole-run item-level command reports unrelated empty scaffold inventories and is not the batch check. Batch 53 was recomputed with batches 1 and 2 present, including their actual item dependency edges; the scoped 14-item result is authoritative for this handoff. The shared batch-scheduling input and compact page-layout flag remain owner/engine work.
### alg-ip-finite-sign-enumeration-phase-retrieval

The procedure accepts a finite real matrix/intensity vector, exact or noisy mode, feasibility tolerance, pattern cap, and signed-solve budget. It enumerates one representative per global-sign pair, solves each signed finite least-squares problem with the published finite SVD/Moore–Penrose interface, returns affine exact solution families, and scores noisy candidates by amplitude residual. Dependencies include the real measurement model and finite matrix pseudoinverse/SVD/least-squares suppliers; item level 3. The procedure explicitly handles m=0, zero intensities, duplicate zero-coordinate sign patterns, positive tolerance, and early budget exhaustion. It assumes no countable or full Choice and makes no statistical or intensity-noise guarantee. Sources are the phase-retrieval measurement context in Balan–Casazza–Edidin §2 and the finite/infinite scope discussion in Grohs–Koppensteiner–Rathmair §§1–2.1; the enumeration instructions are locally defined. Final scoped checks pass and the item has a current ready record; no unresolved supplier. Handoff action: owner/engine scheduling and compact-layout updates, then independent review.
### def-ip-real-full-spark-measurement-family

The definition is the standard finite real full-spark property: every d-element subfamily is independent over the declared field \(\mathbb R\), with \(m\ge d\) stated to avoid a vacuous case. Dependencies are the finite-family/index convention and linear-independence definition; level 3. Sources: Balan's full lecture notes §3.2 and Balan–Casazza–Edidin Corollary 2.6. Final scoped checks pass and the item has a current ready record; no unresolved supplier. Handoff action: owner/engine scheduling and compact-layout updates, then independent review.
### def-ip-frame-complement-property

The definition fixes the complement property for every subset of the one-based measurement labels, including the empty-family span, repeated vectors, and zero vectors. It directly depends on the finite measurement-family interface and the library span definition; item level 3. The source convention agrees with Balan–Casazza–Edidin §2 and Grohs–Koppensteiner–Rathmair §2.1. No complex-field property is included. Final scoped checks pass and the item has a current ready record; no unresolved supplier. Handoff action: owner/engine scheduling and compact-layout updates, then independent review.
### lem-ip-real-phase-retrieval-quotient-metric

The claim proves the sign relation is an equivalence, \(d_{\pm}\) is representative-independent and triangular, the \(m=0\) data space is a singleton metric, and amplitude/intensity maps have the same fibers. Dependencies are def-ip-real-frame-phase-retrieval and the Euclidean metric, inner-product, absolute-value, square-nonnegativity, square-root, minimum, and metric-axiom suppliers; item level 3. Sources: Grohs–Koppensteiner–Rathmair, §1 quotient metric discussion, and Balan–Casazza–Edidin, §2 amplitude/intensity conventions. Zero measurement rows, zero signal, \(m=0\), and nonnegative amplitude roots are explicit. The proof uses only finite sign choices. Final scoped checks pass and the item has a current ready record; no unresolved supplier. Handoff action: owner/engine scheduling and compact-layout updates, then independent review.
### def-ip-real-frame-phase-retrieval

The definition fixes a finite real measurement family, the quotient by a single global sign, the amplitude and intensity maps, and the quotient distance \(d_{\pm}\); it explicitly includes \(m=0\), zero measurement vectors, and nonspanning families. Direct logical suppliers are the IP-01 forward-model and identifiability definitions, plus the published Euclidean inner-product/metric interfaces; the item is level 2. The justified_by record is the local quotient-metric lemma, which will prove that the induced quotient map and metric are well defined. Source locators: Balan–Casazza–Edidin, §2 (real finite frames), Grohs–Koppensteiner–Rathmair, §§1–2.1 (phaseless map and quotient), and Balan's full lecture notes §3.2. The displayed diagram is only the identity \(\mathcal I_\Phi\circ q=S\circ T_\Phi\), not a proof. No complex or Fourier uniqueness is asserted. The local quotient-metric lemma is complete. Final scoped checks pass and the definition has a current ready record; no unresolved supplier. Handoff action: owner/engine scheduling and compact-layout updates, then independent review.

### lem-ip-vandermonde-determinant

The claim is the determinant formula for the d moment-curve columns and its consequence that distinct real nodes give an independent d-tuple. Direct dependencies are the determinant definition/alternation, the real polynomial-ring/domain and factor-theorem interfaces, and the square determinant/invertibility and linear-independence criteria; there are no in-run item suppliers, so dependency_level is 0. The proof follows the MIT OpenCourseWare Chapter B §1 factor/divisibility/degree/leading-coefficient route and expands factor cancellation locally; locator: https://ocw.mit.edu/ans7870/18/18.013a/textbook/HTML/chapter_b/contents.html, Chapter B §1. Conventions: \(d\ge1\), column nodes are ordered \(t_1,\ldots,t_d\), product factors are \(t_q-t_p\) for \(p<q\), and the proof uses no choice axiom. Final scoped checks pass and the helper has a current ready record; no unresolved dependency. Handoff action: owner/engine scheduling and compact-layout updates, then independent review.

## Completed item checkpoints

### thm-ip-real-phase-retrieval-complement-property — level 4

Proves both directions for finite real measurements and the global-sign quotient: equal intensities induce the partition by zero first factor; failure of the complement property supplies nonzero vectors in the two finite-dimensional orthogonal complements and an explicit ambiguous pair. The statement fixes $d\ge1$, $m\ge0$, the standard dot product, empty span, and the intensity formula. Direct dependencies: def-ip-real-frame-phase-retrieval, lem-ip-real-phase-retrieval-quotient-metric, def-ip-frame-complement-property, def-euclidean-inner-product, def-orthogonality-and-orthogonal-complement, def-standard-bilinear-form-on-a-coordinate-space, def-linear-subspace, def-linear-combination-and-span, thm-dimension-of-a-linear-subspace, def-dimension, lem-the-orthogonal-complement-of-a-subspace-under-the-standard-form, thm-reals-field. Sources: Balan–Casazza–Edidin, arXiv:math/0412411, Theorem 2.8 complete proof; Grohs–Koppensteiner–Rathmair, arXiv:1901.07911v2, Theorem 2.2 complete proof §2.1; Balan, full 2015 UMD lecture notes, Theorem 3.2. The finite orthogonal-complement dimension formula is the choice-free supplier; no Countable Choice or Choice is used. Proof-layout and proof-contract checks pass; no unresolved supplier or claim gap.

### thm-ip-finite-sign-enumeration-correctness — level 4

Proves minimum-norm signed least-squares candidates and the full affine kernel family, exact inverse-image completeness after exhaustive enumeration, and global minimization of the amplitude residual in noisy mode. It fixes canonical signs, global-sign quotient, $m=0$, zero intensities, and incomplete-budget limits; incomplete enumeration has no completeness or global-optimality claim. Direct dependencies: alg-ip-finite-sign-enumeration-phase-retrieval, def-ip-real-frame-phase-retrieval, def-moore-penrose-pseudoinverse, thm-moore-penrose-pseudoinverse-exists-and-is-unique, thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution, thm-least-squares-solutions-form-an-affine-kernel-translate-of-a-plus-b, thm-singular-value-decomposition, def-euclidean-inner-product, lem-metrics-on-rn, def-abs-value, lem-of-abs-value, def-ordered-field, thm-reals-field, thm-of-square-roots. Sources: Balan–Casazza–Edidin §2 and Grohs–Koppensteiner–Rathmair §§1–2.1 support the finite phaseless conventions; the exact sign-enumeration and optimization proof is local. The finite-matrix supplier route is used; the Countable-Choice Hilbert pseudoinverse is not used. Proof-layout, precheck and proof-contract checks pass.

### cor-ip-full-spark-sharp-real-phase-measurement-count — level 5

Proves the lower bound for every real family, full-spark sufficiency at $m\ge2d-1$, and equality via distinct-node moment-curve vectors; the proof includes $m=0$ and $d=1$. Direct dependencies: def-ip-real-frame-phase-retrieval, def-ip-frame-complement-property, def-ip-real-full-spark-measurement-family, thm-ip-real-phase-retrieval-complement-property, lem-ip-vandermonde-determinant, thm-dimension-of-a-linear-subspace, cor-independent-set-is-no-larger-than-a-finite-spanning-set, lem-standard-basis-of-f-n, def-linear-independence, def-linear-combination-and-span, def-linear-map, def-kernel-and-image-of-a-linear-map, thm-rank-nullity, def-dimension, thm-reals-field. Sources: Balan–Casazza–Edidin, Corollaries 2.6–2.7; Balan, full lecture notes, Corollary 3.3; MIT OCW 18.013A, Chapter B §1 for the determinant formula. Full proof-layout, precheck and proof-contract checks pass; no converse asserting all retrieving families are full spark is made.

### ex-ip-fourier-translation-reflection-ambiguity — level 0

Uses the explicit real $C_3$ signal $(1,2,0)$ and the stated unnormalised DFT with $\omega=(-1-i\sqrt3)/2$. Reindexing proves translation and reflection preserve Fourier magnitude; supports show neither transform is the original up to global sign. Direct dependencies: thm-complex-numbers-form-a-field, def-complex-conjugate-real-imaginary-part-and-modulus, lem-complex-conjugation-and-modulus-laws, thm-of-square-roots. Source: Grohs–Koppensteiner–Rathmair, Proposition 3.3, with the finite $C_3$ identities and non-equivalence checked locally. Proof-layout and precheck pass.

### cex-ip-real-failed-complement-partition — level 4

For $a_1=e_1,a_2=e_2$ in $\mathbb R^2$, the singleton partition has two proper spans and $x=(1,1),z=(-1,1)$ are distinct modulo sign with equal intensities. Direct dependencies: def-ip-real-frame-phase-retrieval, lem-ip-real-phase-retrieval-quotient-metric, def-ip-frame-complement-property, def-euclidean-inner-product. Sources: Balan–Casazza–Edidin, Theorem 2.8 converse construction; Balan, full lecture notes, Theorem 3.2 proof. The item uses `Statement refuted` followed by its statement references and a separately numbered Counterexample proof. Statement-first, proof-layout, precheck and proof-contract checks pass.

### ex-ip-sign-enumeration-budget-exhaustion — level 5

For $A=(1,-1)^\mathsf T$, $b=(1,4)$ and $P=L=1$, the visited $(+,+)$ candidate has $J=5/2$, while the unvisited $(+,-)$ candidate has $J=1/2$. Direct dependencies: alg-ip-finite-sign-enumeration-phase-retrieval, thm-ip-finite-sign-enumeration-correctness. The two one-variable least-squares objectives and amplitudes are expanded in the Verification. This is a generated local example, not an external source claim. Proof-layout and precheck pass.

### ex-ip-real-phase-retrieval-two-dimensional-full-spark-frame — level 6

The three vectors $(1,0),(0,1),(1,1)$ have pair determinants $1,1,-1$, so every pair spans $\mathbb R^2$ and the quotient intensity map is injective. Direct dependencies: def-ip-real-frame-phase-retrieval, def-ip-real-full-spark-measurement-family, cor-ip-full-spark-sharp-real-phase-measurement-count. Sources: Balan–Casazza–Edidin, Corollary 2.6; Balan, full lecture notes, Corollary 3.3. Proof-layout and precheck pass.

### cex-ip-complex-complement-property-insufficient — level 6

The three vectors $(1,0),(0,1),(1,1)$ in $\mathbb C^2$ have the complex complement property, while $(1,i)$ and $(1,-i)$ have the same squared-modulus data and are not global-phase multiples. Direct dependencies: thm-ip-real-phase-retrieval-complement-property, cor-ip-full-spark-sharp-real-phase-measurement-count, thm-complex-numbers-form-a-field, def-complex-conjugate-real-imaginary-part-and-modulus, lem-complex-conjugation-and-modulus-laws, def-linear-combination-and-span. Sources: Grohs–Koppensteiner–Rathmair §2.1 and Balan–Casazza–Edidin discussion after Theorem 2.8. The counterexample only limits transfer to the complex field; it does not weaken the real theorem. Statement-first, proof-layout, precheck and proof-contract checks pass.

## Final validation and handoff state

- The final item dependency calculation checked all 14 batch-53 items against batches 1 and 2: no cycle or level error; maximum item level 6. Batch 53's page-level dependency level remains the declared 2, with prerequisite batches 1 and 2.
- One parallel whole-run read briefly encountered malformed JSON in another active batch manifest. A sequential scan immediately afterward parsed all manifests, the explicit batches 1/2/53 item-level calculation passed, and the native readiness readback passed 14/14; no other batch file was edited.
- `node tools/manifest-deps.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-53.pages.json`: 14 items, zero errors. The two assigned library pages have empty Markdown bodies, page identities match, and frontmatter inventories exactly match the manifest; no page summary was authored.
- `node tools/depcheck.mjs --items-file /tmp/inverse-problems-knot-theory-all-109-2026-10-19-batch-53-item-scope.json --quiet`: selected item/page and prerequisite-cycle checks pass. Content policy: 14 items, zero errors or warnings. Statement-first: 14 items, zero defects.
- Scoped normative phase precheck: 10 proof-bearing items, all pass. Scoped `node tools/proof-layout.mjs` on those 10 items: 46 steps, zero defects. `node tools/proof-contract.mjs ...batch-53.proof-contracts.json --strict`: 14/14 items, zero errors or warnings, with exact supplier excerpts, 46 step derivations, and all eight boundary dispositions per item.
- `node tools/coverage-checklist.mjs ...batch-53.coverage.json`: 2 pages, 32 harvested results, zero errors or warnings. `source-fetch-check --stamp` verified all 7 page-source occurrences; the follow-up check mode also returned 7/7. Four distinct selected URLs: arXiv math/0412411, arXiv 1901.07911v2, UMD 2015 lecture PDF, MIT OCW Chapter B §1. Stamps: 193379 bytes / `74a0f5d1dfbbffa0`; 1056712 / `2ec58084ae8aeb9b`; 432272 / `963c963646d8a74d`; 16263 HTML bytes / `bbc0eabf05a7eecb`.
- `step1-decisions.mjs record` wrote 14 `ready` rows, each with its transitive item dependency hash; a focused readback confirms 14/14 current and closed. No `--owner` override was used. This is authoring readiness only.
- The coverage file records each source locator and item disposition. An ancillary Missouri-hosted PDF candidate produced internal browser errors during earlier source search; it was not cited or needed after the independent treatments above were available, and no source was marked dropped. No proof depends on that candidate.
- The cross-batch dependency file records five required page interfaces, the two direct batch-1 model suppliers, selected published finite-matrix/SVD interfaces, and content hashes. Batch-1/2 draft status is visible and is not treated as independent review or approval.
- The active autopilot status previously recomputed to `1-scaffold` held for an earlier owner repair, with no workers in flight. The manifest edit makes the run-level batch-scheduling hash stale; the owner/engine must recompute it before later dispatch. The engine also sets `page_layout: compact-v1` after authoring; the page bodies are blank and that engine-owned flag has intentionally not been authored here. Neither issue changes these item-level mathematical claims. No shared plan, run state, published item, or verdict was changed.
- The existing finite-smoke registry has no phase-retrieval check; the finite example calculations are shown directly in the item verifications. No test/check code was added.
