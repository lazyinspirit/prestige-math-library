# Batch 16 Step 3a adjudication

Run: `numerical-analysis-remaining-71-2026-10-17`; group: `batch-16`.

Reviewed scope-16, reader-16, empty reader-findings-16, refute-16, the generated item order, pre/post snapshots and current owning manifest/contract. Work is confined to batch 16. No judging, stamps or stage transitions are performed.

## Level 0: rectangular cluster definition

`refuter:16:1`: confirmed_fatal, repaired with confidence 1. The old Definition used `(I,J)` but assigned geometry only on I. Introduced nonempty ordered J, its point assignment in the same R^d, its own balanced tree threshold, column diameter and cross-distance. Square shared-geometry specialization is explicit. Finite extrema exist, coincident samples have zero distance and stay near, singleton/threshold endpoints and row/column overlap are well formed. No AC is used.

Read every direct item/reference consumer: balanced-tree size, block-leaf partition, H representation, block product, separated Cauchy rank, nearfield identity and storage/matvec complexity; also the A-page prose. Their actual uses are respectively binary partitions, finite refinement, rectangular block supports, compatible product partitions, positive separation, shared-geometry self-distance and balanced counts. All remain sound; no consumer Statement/Definition repair or further hop is necessary. Search found no outside direct consumer requiring escalation. Manifest summary/provenance and all five owning contract quotations are refreshed; no prior judge record exists on this definition.

## Level 2: H representation

`touched:16:def-hlr-and-h2-block-matrix-representations`: amended_repair. The reader title accurately describes independent far-block factors UV*, dense near blocks, rank cap including r_b=0, and uniqueness from disjoint rectangles. H2 is separately defined. No body change is necessary. Pre/post hashes authenticate a changed title; current item bytes equal post-reader. The stale manifest title is now synchronized too, so the full carrier is an amended repair.

## Level 2: core-SVD risk review

Independently read both proof steps, the core-SVD procedure, the finite Frobenius definition, the complete best-rank Frobenius proof and published SVD. Compact factors give M=Q_U C Q_V*, preserving positive singular values; positive retained singular values give exact output rank q. Minimal tail index and best-rank lower bound give both minimality on success and impossibility on failure. Empty factors, zero M, k=0, q=0, delta=0, repeated singular values and k beyond core rank are covered. Finite SVD choices need no arbitrary AC; no source-level gap or repair needed. Sources: the current algorithm Definition, finite-array Definition, best-rank theorem Statement and steps 1.1–4.1, published SVD Statement and steps 1.1–3.1. Complete risk review recorded in the owning contract.


## Completed risk review: `thm-hlr-separated-cauchy-block-rank-bound`

Read all three proof steps and F1–F3 current supplier bodies. The finite geometric-series identity has denominator y-x>=b-a>0; 0<=x/y<=q<1 gives the entrywise error, summing mn squares gives the Frobenius bound. The r outer products span at most r columns, even when r exceeds a matrix dimension. Sample diameters are <=a,c and cross-distance >=b-a, so the stated separation implies the local max-diameter admissibility. Checked a=0 (constant term uses x^0=1), c=0, singleton/repeated samples, r=1 and equality in the separation bound. No AC, generic kernel-rank inference or source-dependent gap.

## Completed risk review: `ex-hlr-nearfield-block-requires-full-rank`

Read both verification steps and all four current cited suppliers. Shared square geometry gives distance zero; b=2 makes the root cluster a leaf, so the pair is terminal near and stored densely. The published Eckart–Young theorem applies to I_2 with domain dimension 2 and k=1<2; its second singular value is 1. Every rank-at-most-one approximation has spectral error >=1; diag(1,0) attains 1, so the strict subunit endpoint is exact. This example does not infer a rank guarantee from geometry. No choice principle or repair.

## Completed risk review: `lem-hlr-bottom-up-recompression-error-bound`

Read both steps, introductory cap argument, both algorithms, core-SVD theorem, finite Frobenius definition and Cauchy–Schwarz. Effective cap min(k,m,n) is a legal core input and leaves no achievable block rank out. Leaf errors are exact tails; each internal supplied target is the sum of child approximations, so the triangle inequality adds both inherited errors and the new tail. Finite induction yields e_v=sum of tails throughout T_v, each bounded by theta_v; subtree budgets are nonnegative and bounded by the total. Checked one-node tree, zero contributions/budgets, repeated directions, cancellation and failed nodes: failure makes no global impossibility claim. Complex Frobenius conjugate-first convention is handled by swapping the arguments of the conjugate-second Cauchy–Schwarz pairing; modulus and norms coincide. No arbitrary AC or missing supplier.

## Completed risk review: `thm-h2-matrix-vector-multiplication-correct`

Independently read all three steps and four cited suppliers, including the current nested-basis Definition and actual algorithm. Column transfer dimensions give z_sigma=V_sigma* x_sigma by finite bottom-up induction; downward E^U products restrict each far action onto descendant row leaves. Initializing every w to zero retains coupling contributions at ancestors and descendants, and partition disjointness adds each matrix entry once alongside exact near products. Checked root-leaf trees, rectangular index sets, ranks zero, complex adjoints and empty interaction lists. Reader F2 now cites the exact H2 coupling supplier, matching its refreshed contract quote. No mathematical rewrite, arbitrary AC or unclosed gap.

## Completed risk review: `thm-hlr-blockwise-error-propagation`

Read all three steps, five facts and all cited algorithms/results. Disjoint complete output rectangles make squared local Frobenius errors add exactly; near blocks have zero truncation residual and successful far trees supply e_b<=delta_b. Addition uses equal shapes; product uses compatible rectangular shapes and the exact expansion E_A B+A E_B+E_A E_B. Entrywise complex Cauchy–Schwarz (with conjugation as needed) and finite summation prove Frobenius submultiplicativity, and inner-product expansion proves triangle inequality. Checked zero operands/errors/tolerances, no far blocks and nonzero cross term. The product estimate is conditional on successful calls, not a complexity assertion. No arbitrary AC, repair or missing prerequisite.

## Completed risk review: `thm-hlr-storage-and-matvec-complexity`

Read all five proof steps, F1–F5 and all seven dependencies. Balanced threshold k gives h=ceil(log2(n/k)), O(n/k) nodes per tree and block depth <=2h because exactly one side descends per split. The explicit per-level far side-size bound sums to O(skn(h+1)); the explicit near count times k^2 is O(skn). H2 stores leaf bases totaling <=2kn, transfers on O(n/k) edges, and the assumed O(sn/k) couplings, each <=k^2. The actual exact matvec operations obey the same costs; initialization is bounded too. Checked n=k=1, k=n, k=1, rank-zero factors, empty far lists and non-divisible n/k. No claim that geometry implies the counting bounds or that addition/product have rank-linear cost. Constants use the stated s; no AC or repair.

## Level 6 risk review: `thm-hlr-approximate-factorization-residual-and-inverse-error`

Read all five proof steps, all eleven exact cited supplier statements and the factor-compression Definition. Exact block LU is an input, not constructed. Successful disjoint-block compression gives root-sum-square factor errors; (L-Lhat)U+Lhat(U-Uhat) gives eta with no omitted cross term. Entrywise Cauchy–Schwarz supplies Frobenius product/triangle bounds, and largest singular value plus rank-zero Frobenius truncation gives spectral<=Frobenius, including zero residual. For q<1 the kernel argument makes Ahat injective, and finite rank-nullity plus full-dimension subspace and matrix-isomorphism results give invertibility. With F=A^{-1}(Ahat-A), the vector inequality yields ||(I+F)^{-1}||<=1/(1-q); the resolvent identity yields precisely ||A^{-1}||^2 eta/(1-q). Checked n=1, exact compression eta=q=0, zero/empty admissible errors and exclusion of q=1; no floating-point certificate or triangular factor construction is inferred. Complex norm conventions agree on moduli and norms. No AC, missing prerequisite or repair.

## Source evidence and conventions

Read the relevant complete mathematical passages in [Börm–Grasedyck–Hackbusch, revised June 2006](https://files-www.mis.mpg.de/mpi-typo3/preprints/ln/lecturenote-2103.pdf): §2.1.1, Definitions 2.1–2.5 and Lemma 2.7, printed pp.21–24; §§2.2.1–2.2.2, Definitions 2.14/2.17, pp.31–32; §6.1.1, Lemma 6.4 and its reduced-core construction, pp.108–109; §7.1.1, Lemma 7.1 and Remark 7.2, pp.123–124; §§9.1–9.2.2, Definitions 9.1/9.2/9.6/9.8, Lemmas 9.4/9.5/9.9 and Remark 9.10, pp.143–148. Retrieved the actual PDF with curl and read its extracted text using installed PyMuPDF after web extraction rejected the octet-stream type and pdftotext was unavailable.

The book explicitly supplies separate I,J trees and coupling bases. Its basic admissibility uses a minimum-diameter convention and its general block split can descend both trees; these are not silently identified with this page's stronger max-diameter convention and one-side-at-a-time binary refinement. Those are explicit local definitions, and the local finite partition and depth proofs establish exactly their required conclusions. The Cauchy estimate is proved by its displayed finite geometric identity, not by an unstated generic kernel assertion. The book's reduced-core exposition uses real QR factors; local compact SVDs and conjugate transposes handle rectangular, rank-deficient and complex factors using the opened SVD and Frobenius suppliers.

Also read [Hiptmair, AdvNumCSE AT’23](https://people.math.ethz.ch/~grsam/ADVNCSE/ADVNCSE.pdf), §2.4.2, Theorems 2.4.2.2 and 2.4.2.6 and the low-rank lifting calculation (PDF/printed pp.227–229), and §2.4.6, the coupling format, transfer identities, storage conventions, forward/backward transformations and combined procedure (pp.251–257). The source uses transposed transfer orientations; the local E matrices use child-rank by parent-rank dimensions and their own explicit nestedness identities. The exact local algorithms and proofs, including their direct dense near products, are what was checked; source pseudocode is not treated as a substitute for those identities. These source readings support context and provenance, while the opened local suppliers establish the used real/complex statements and endpoints.

## Page decision and dependency dispositions

`page:16:hierarchical-low-rank-matrices-and-error-propagation`: accepted_repair. The corrected exact-matvec versus tolerant-addition/product sentence matches the algorithms. Current raw page SHA256 is `e3f49ae7997c1adf420e855d440c6b2a8eb7444c2b2da1fe378c38089196ba40`, equal to post-reader; pre was `dc0066ae50e29bcc87beddc5bab2563843ce04871798ac44c5b749a9722d04bc`. Checked all summary sentences, the assumed two-cluster schematic, item ordering, the explicit rank/count assumptions and the exact-arithmetic conditional supplied-LU certificate. No further page change.

`touched:16:thm-h2-matrix-vector-multiplication-correct`: accepted_repair. Current item raw SHA256 `876e51ecc121cdbcb3deaca4a88eb0779924a931bdc966bfe0f4d71bf44047ff` equals reader-post, versus pre `6a78fcd4d70f864cea592bebc661677519dc591565ea4c5d67492009607df8f6`. F2 and its owning contract quotation now identify the actual H2 supplier. The only subsequent contract change is the independent complete risk review.

The refuter's observed SHA256 `37afdcb1df02445c6378b13aec768946c0db0e9e1df450f70e6cf28e949cee7f` is the canonical fingerprint of the pre/post carrier triple, not its raw source hash; recomputation matched exactly. Its original raw source hash is `eda1e38e2fdfd1bd2ce1d78551c6d28793bba5543e02f2eadaf066507e053a47`. There is no unbound historical observation or unresolved owner disposition in this batch.

Read the current summaries of randomized-low-rank-approximation, sparse-direct-elimination-and-ordering and tensor-train-compression-and-truncation-error as prerequisite page context. The owned deterministic arguments use no Gaussian expectation, sparse elimination construction or TT error estimate. Updated the owned cross-batch input rows with actual current supplier evidence, preserving historical holds and owner resolutions, and added the missing explicit Frobenius-definition edge for thm-hlr-blockwise-error-propagation. The canonical frontier ledger was refreshed using the documented tool. No stable ID, proposed withdrawal or outside carrier was removed or edited.

No defective published item was identified among the required suppliers. No published-consumer ledger change or lock was needed. No mathematical blocker or owner escalation remains for this dispatch. The status command confirms the live run is in Step 3a; unrelated run-level collect/split failures are engine/owner work, not batch-16 mathematical dispositions.

## Local validation and handoff

- Initial risk report without --require-reviewed: 0 errors, 14 routed contract items; eight HIGH/CRITICAL items independently reviewed and recorded in generated item order.
- Final risk report with --require-reviewed: 0 errors, 14 routed items, all eight required reviews complete.
- Reflow of the repaired cluster definition: unchanged.
- Precheck of the repaired definition and both reader-touched items: one proof checked, zero failing; the two definitions have no phase proof.
- `node tools/proof-contract.mjs research/numerical-analysis-remaining-71-2026-10-17-batch-16.proof-contracts.json --strict`: 0 errors, 0 warnings, 14/14 items checked.
- `node tools/frontier-dependency-ledger.mjs refresh --run numerical-analysis-remaining-71-2026-10-17`: refreshed and deduplicated.
- After final item edits and reflow, `node tools/proof-layout.mjs items/def-hlr-cluster-trees-and-geometric-admissibility.md items/def-hlr-and-h2-block-matrix-representations.md items/thm-h2-matrix-vector-multiplication-correct.md`: 3 items, 3 steps, 0 defects.

Exactly four owed decisions are written to the task-named decisions JSON. Each has a closed, confidence-1 row in research/defect-ledger.jsonl: na71-b16-3a-rectangular-geometry, na71-b16-3a-h-title, na71-b16-3a-h2-citation, and na71-b16-3a-page-matvec. Metadata and quotations are current. No new item/page, judge cycle, decision stamp, certification, stage transition, commit or full gate battery was initiated. Next action belongs to the engine: stamp current decision carriers and run its gate battery.
