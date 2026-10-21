# Step 3a adjudication — batch 53

Run: `inverse-problems-knot-theory-all-109-2026-10-19`; group: `batch-53`. Work follows the generated dependency order. No agents dispatched, judging, stamps, publication, or engine transitions.

## Completed item reviews

### Level 0: lem-ip-vandermonde-determinant

Read all six proof steps and current cited statements: polynomial rings over R are domains; alternation is valid over the coefficient ring; successive division is justified by nonzero root differences, not merely by vanishing at multiple roots; the monic degree comparison fixes the constant. Checked d=1 empty product, distinct real specialization, and coefficient-kernel independence. Current invertible-matrix supplier explicitly assumes a field, satisfied by R; the historical missing-field finding is reviewed separately. No choice or analytic limit is used. Reader and refuter evidence checked; no local defect.

Sources: current items named in its F1–F6, each relevant Statement/Definition opened; local proof supplies the argument, without relying on external bibliography authentication. Risk review recorded in the owning contract.

### Level 0: ex-ip-fourier-translation-reflection-ambiguity

Verification 1.1–3.1 independently checked: omega cubed is 1, translation multiplies each coefficient by omega to the k, and reflection conjugates it for real signals. Support sets are respectively {0,1}, {1,2}, {0,2}; both transforms differ from both signs of f. The reader replaced an insufficient nonzeroness inference with this valid support comparison. Current raw item equals the post-reader hash and differs from pre-reader. Accepted repair, confidence 1; no further item edit. Dependencies: complex field arithmetic, conjugation/modulus laws and the nonnegative square root of 3, whose exact current statements were read. Decision accepted_repair; closed row `ipkt109-b53-3a-fourier-support-inference`.

The remaining reviews and closeout dispositions follow below.

### def-ip-real-frame-phase-retrieval

Definition checked against the current forward-map, identifiability, Euclidean norm and metric statements. Domain d>=1 is nonempty; zero rows and nonspanning families are explicitly allowed. Sign equivalence, quotient, coordinatewise squaring and amplitude map have the declared types. The m=0 data space is a singleton and its zero metric is explicit, avoiding use of the n>=1 simultaneous metric theorem at n=0. TikZ square arrows and labels express I composed with q = S composed with T; lower codomain uses the fixed [m]-to-zero-based relabeling. No missing diagram or diagram-dependent proof. The following lemma supplies well-definedness without a prerequisite cycle.

Risk review complete. Exact current dependency statements opened; no external bibliography authentication claimed.

### alg-ip-finite-sign-enumeration-phase-retrieval

Read the entire Definition and exact cited finite-real matrix, pseudoinverse, SVD, least-squares, norm and square-root clauses. Inputs, row relabeling, both modes, ordering, strict update/tie rule, output statuses and both budgets are explicit. One empty pattern for m=0 and fixing s1=+1 for m>=1 cover global sign even when r1=0. Zero budget exits before factorization; otherwise one SVD and at most min(P,L,N) right-hand-side solves. Positive tolerance records affine least-squares families, expressly not the full residual sublevel set. All-zero or rank-deficient A is admissible; A+ and kernel describe its families. Reader removed property assertions from the procedure and proved them in the dependent theorem; procedure mathematics remains sound. Current raw item matches reader-post. Published affine-family supplier now restricts scalars to R or C; real input satisfies this. No local repair needed; classify property relocation as metadata normalization, not a fabricated mathematical defect.

Risk review complete. Exact current dependency statements opened; no external bibliography authentication claimed.

### lem-ip-real-phase-retrieval-quotient-metric

Read all seven proof steps and current cited equivalence/model, metric, min/order, norm, absolute-value and square-root statements. Sign multiplication proves equivalence, representative changes permute the two candidate distances, and the attained sign minima give the triangle estimate using epsilon*delta. Separation gives exactly x=+/-z, including the zero orbit. Data metric is restricted Euclidean only for m>=1 and is directly proved on the singleton for m=0. Zero measurement vectors remain valid. Unique nonnegative roots make amplitude and intensity fibers identical in both directions. The malformed Euclidean introductory prose is nonfatal: its domain and formulas are explicit; norm identities follow by finite coordinate algebra. Only finitely many sign selections, no AC. Reader/refuter reports checked; no local defect.

Risk review complete. Exact current dependency statements opened; no external bibliography authentication claimed.

### thm-ip-finite-sign-enumeration-correctness

Read all eight proof steps against the current algorithm and cited real/complex pseudoinverse, SVD, least-squares and norm statements. Identity A(I-A+A)=0 and its restriction to ker A establish the affine kernel family. Zero residual is equivalent to exact solvability, including m=0. Exact completeness handles coordinate zero roots and changes representative by a single global sign to make the first sign positive. For noisy mode the coordinate identity J(x)=min_t ||Ax-y_t||^2 is proved by the two sign cases. Canonicalization changes x as well as t; least-squares then gives e_s^2<=J(x) and J(x_s)<=e_s^2, so the finite incumbent is globally optimal only after complete enumeration. Checked N0=1, N1=1, zero P/L, min(P,L,N) solves, SVD only with positive budgets, all-zero A, zero b, ties and partial search. Reader-added termination and invariant proofs are sound audit enrichment; no repair to mathematical claims is needed. No AC, numerical bit-complexity, statistical or intensity-noise guarantee claimed.

Risk review complete; prerequisites opened at their actual cited statements.

### thm-ip-real-phase-retrieval-complement-property

Read all nine steps and exact supplier clauses for finite bases, subspace dimension, span as finite combinations, rank-nullity, real ordered field and orthogonality. Sufficiency factors equal squares and partitions by vanishing of the x-z factor; a spanning side forces x-z=0 or x+z=0 by positivity. Necessity obtains a nonzero vector orthogonal to each proper span using the basis measurement map to R^r and nullity>=d-r>0, valid also for r=0. Witnesses u+v and u-v differ up to sign because u,v are nonzero and 2 is invertible in R; their squared data agree labelwise. Empty partition sides, zero rows, zero signals, repeated vectors and m=0 are included. Only two finite selections, no AC. Step 5.1 calls the earlier direction forward despite the iff order, but the actual two directions are fully proved and this is harmless wording. Reader/refuter report no local defect; independent review agrees.

Risk review complete; prerequisites opened at their actual cited statements.

### cex-ip-real-failed-complement-partition

All three steps checked: singleton spans are the two proper coordinate axes; (1,1) and (-1,1) are neither equal nor negatives, and both have intensity (1,1). Explicit local pairing uses the two displayed coordinates, so there is no indexing conflict with the general zero-based function-space convention. Span inclusions follow directly from subspace closure and minimality, no dimension assumption or choice is concealed. Current supplier clauses and reader/refuter evidence checked; no defect.

Risk review complete; prerequisites opened at their actual cited statements.

### cor-ip-full-spark-sharp-real-phase-measurement-count

Read all five steps and exact full-spark, complement-property, Vandermonde, rank-nullity, coordinate-basis and subspace-dimension clauses. Coefficient-map image equals span including q=0, and fewer than d labels cannot span. When m<=2d-2, initial min(m,d-1) labels leave both sides of size <=d-1. When m>=2d-1, a side contains d independent columns whose square coefficient map has dimension-d image; this implies spanning. Distinct real nodes and the Vandermonde lemma supply all d-subsets at the sharp count. Checked d=1,m=0 failure and d=1,m=1 vector (1) success, repeated and zero vectors allowed in lower bound, and full-spark definition m>=d is met wherever used. Ordered finite labels permit finite subsets without AC. No local defect.

Risk review complete; prerequisites opened at their actual cited statements.

### ex-ip-sign-enumeration-budget-exhaustion

Read all three steps and current algorithm/correctness theorem. With canonical order (++),(+-) and P=L=1 only (++) is visited. Completing squares gives signed objectives 2(x+1/2)^2+9/2 and 2(x-3/2)^2+1/2. Their unique candidates -1/2 and 3/2 have amplitude objectives 5/2 and 1/2, respectively, so the reported budget-exhausted result is strictly worse. No unproved assertion about tolerance or statistical loss is made. Raw item equals both pre/post snapshots; the touched obligation is solely contract citation enrichment following the supplier theorem, classified audit_enrichment with no defect IDs.

Risk review complete; prerequisites opened at their actual cited statements.

### cex-ip-complex-complement-property-insufficient

Read all three steps. All three displayed complex pair expansions equal (u,v), proving every pair spans and hence the partition property. For the explicitly specified pairing linear in the second variable, real measurement vectors give (1,i,1+i) and (1,-i,1-i), with squared moduli (1,1,2). Global phase equality forces lambda=1 from coordinate one and then -i=i from coordinate two, impossible over C. This local convention is explicit and does not borrow the opposite complex-pairing convention from the general inner-product page. Real suppliers are invoked only to delimit scope, not to infer a complex statement. No boundary/choice gap or local defect.

Risk review complete; prerequisites opened at their actual cited statements.

### ex-ip-real-phase-retrieval-two-dimensional-full-spark-frame

Read both steps and exact real full-spark/corollary, span and independence clauses. The three pair expansions span R^2; each zero linear combination forces both coefficients zero by its two coordinates. With d=2,m=3=2d-1 the reviewed corollary gives global-sign injectivity, and the stated intensity triple is exactly the three squared dot products. All pairs are exhausted; no determinant sign, omitted pair, choice or domain issue. Reader/refuter evidence checked; no defect.

Risk review complete; prerequisites opened at their actual cited statements.

## Published dependency decisions

### reader:53:1: thm-invertible-matrix-theorem

Original archived Statement did not specify that F is a field; the repository matrix domain includes commutative rings, and the integer matrix [2] has zero kernel but no inverse. Confirmed historical fatal interface defect. The original archive guard and raw-carrier wrapper match the routed pre_sha256 and observed_sha256 exactly. Current Statement and Given explicitly assume a field and n>=0. Independently read all four proof steps and current cited clauses: invertibility/isomorphism, rank-nullity, pivot/RREF solvability, and the unique-solution linear inverse close the equivalence cycle; n=0 is explicit. Owner scalar-field53 before/receipt and root-focused-review supply repair provenance, not my verdict. Owned Vandermonde use F4/4.1 is only for the evaluated real matrix; R is a field and no consumer amendment is needed. Repair complete, confidence 1.

### reader:53:2: thm-least-squares-solutions-form-an-affine-kernel-translate-of-a-plus-b

Original archived Statement left F unrestricted even though A+ is defined only for R or C. Confirmed historical fatal undefined-interface defect. Archive guard and raw-carrier wrapper exactly match the routed pre_sha256 and observed_sha256. Current Statement and Given restrict F to {R,C}. Independently read all five proof steps and current suppliers: A+A projects onto (ker A)^perp, I-A+A projects onto ker A, and least-squares minimizers are A+b+ker A in both directions; consistent b makes them precisely exact solutions. Rank deficiency and zero-sized row spaces are allowed. The textual range “steps 2.1-2.1” in 3.1 is harmless because its actual tags include both 2.1 and 2.2. Owner receipt is repair provenance only. Owned algorithm input and correctness theorem are explicitly real, so both satisfy the corrected scope. Repair complete, confidence 1.

### reader:53:3: def-euclidean-inner-product

Confirmed nonfatal ill-formed prose: Definition opening literally says “is the function space of The vector space” and later “the same set that ... calls R^n.” However, the entire current Definition explicitly gives R^n={functions n->R}, pointwise operations, coordinate equality, sum x_k y_k, sqrt(sum x_k^2), positivity, and n=0 algebra. Metric agreement is restricted to n>=1; the assigned quotient lemma has d>=1 and directly treats m=0. Thus this is a real presentation defect, not a missing mathematical interface or false norm formula. Current canonical guard and raw-carrier wrapper equal routed pre_sha256 and observed_sha256. Published carrier stays read-only; closed nonfatal-recorded disposition records this finding while owner grammatical maintenance remains pending. Preserve all hypotheses, formulas, references and published status in the eventual prose repair.

The scalar repairs were made by the owner before this dispatch; I edited no published item. Original before.md files and current complete proofs were read. Both exact historical hashes match the routed findings, so these decisions do not need an unbound historical-content exception. The owner consumer evidence records 30 direct interfaces; I independently checked the actual owned Vandermonde, algorithm and correctness uses. No out-of-batch consumer repair is requested by these scalar specializations.

## Scope, references, and limits

All 14 batch items and both empty-body compact-v1 pages were opened. No page obligation is owed and the refuter artifact has no findings. All actual contract citation source statements/definitions were opened; their exact hypotheses were compared to each use. Bibliography PDFs were not independently authenticated; the assigned claims are justified by the local proofs and elementary computations, not by an unchecked external import. No uncertainty requiring a missing mathematical prerequisite remains. Existing published supplier inline-link presentation debts outside this routed scope remain owner maintenance; no outside source edited.

All current raw batch items match reader-post. Three also differ from pre-reader (Fourier, algorithm, correctness); the budget example is contract-only. Metadata and audit-enrichment decisions have empty defect_ids and do not close any finding. No item was edited during this dispatch, so no item reflow or judge-record invalidation is needed.

## Ledger and dependency maintenance

Appended four closed rows through `tools/defect-ledger.mjs append`: the accepted Fourier inference repair, the two owner-repaired published scalar interfaces, and the nonfatal published Euclidean prose finding. The generated defect view refreshed successfully. Updated `research/published-consumer-supplier-ledger.md` under an exclusively acquired own lock, merged the current contents, updated the three existing deduplicated classification rows, and released only that lock. Existing owner receipt marker bytes were preserved. Source-maintenance debt for the Euclidean prose remains pending; its closed nonfatal disposition does not claim repair.

Updated the four existing owned consumer records in the batch-53 cross-batch input, preserving their earlier qualifications and history. The two item interfaces were checked against the actual abstract forward-map and identifiability Definitions. Both required frontier page inventories were opened; page-placement review imports no unbounded pseudoinverse or countable-choice premise into finite matrix enumeration. Refreshed the derived frontier dependency ledger successfully. No new pair, page, item, withdrawal or mathematical dependency was introduced.

## Local checks and handoff

- Initial risk report: 14 items routed, 0 errors; eleven HIGH/CRITICAL reviews owed.
- Final `node tools/risk-report.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-53.proof-contracts.json --require-reviewed`: 0 errors, all eleven required risk reviews complete.
- Strict proof-contract check on the owning batch contract: 14/14 checked, 0 errors, 0 warnings.
- Explicit batch-item precheck: 10 phase proofs checked, 0 failures; all 14 item paths selected.
- Rendercheck: all 14 batch items passed.
- Final single batched proof-layout command on all 14 explicit batch item paths: 49 numbered steps, 0 defects. No item edits occurred after this check.
- Decision inventory: exactly four touched obligations and three reader obligations; no page/refuter/foreign-gate obligations; no extra decisions. Repair confidence is 1 for every completed repair.

No unresolved local escalation or missing mathematical prerequisite. Nonfatal published Euclidean prose maintenance remains for the owner. All assigned authored claims remain draft. Engine decision stamping and the gate battery remain pending; these local checks supply no stamp, judge verdict, or build completion claim.
