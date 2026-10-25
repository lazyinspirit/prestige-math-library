# Batch 65 Step 3a adjudication

Run: `advanced-qft-supersymmetry-build-2026-10-23`; group: `batch-65`.
Scope: the five touched obligations and `reader:65:1`; six risk reviews, no page or refuter decisions owed. Scope assignment group `v` is unchanged. No judging, stamping, publication or engine transition is performed.

## Dependency-order review

### Euclidean finite-order refinement (level 0)

`lem-qftx-gaga-euclidean-finite-order-refinement`: amended_repair. Checked the current complete construction with its metric, supremum/infimum, finite maxima and AC suppliers. The reader made the adaptive dyadic construction explicit. Qualification implies diameter <1/16; maximality yields a local lower bound a/(512 sqrt(m)) for sides, hence local finiteness by separated centers. At touching cubes S<17s/8 forces dyadic ratio at most two. Midpoint endpoint cuts agree on shared face overlaps. The old sentence saying every pair of cells meets in a common face was inaccurate for unsplit cubes: a smaller neighbor occupies only a piece of a larger face. Clarified that boundary pieces have compatible subdivisions and unsplit cubes meet along unions of pieces; the coned triangulation has the required common-face property. Alpha made no further Statement or dependency change. Stars and their multiplicity/refinement bounds are valid. Full-space and m=1 cases checked. Repair confidence 1; risk review complete in the owning contract. Consumer interfaces therefore do not change.

Source limits: the local construction is independently checked; Agol §6 Theorem 6.5 states downstream dimensional vanishing and does not supply this construction.

### Metric Čech/derived comparison (level 0)

`thm-qftx-gaga-metric-cech-derived-comparison`: amended_repair. The reader's Hausdorff/paracompact and canonical-map additions are retained. Independently checked lifting, the prism homotopy, connecting classes and all three exactness positions, effacement by injectives, degree zero and the empty-space case. The shrinking supplier reindexes the original cover and can repeat its labels. Replaced the unsupported claim that these assigned U-labels are locally finite with the finite set J_x of W-members meeting O_x; chose N_x inside O_x and only the corresponding finite family of lift neighborhoods. The original proof's remaining lifting argument now applies exactly. Expanded the Godement exactness argument needed for compatibility of connecting maps (stalk products, quotient induction and finite total sums); added the exact Godement definition to deps, roles, manifest and contract. Derived universality is obtained directly from effacement on injectives. Statement unchanged; repair confidence 1. Risk review complete before higher-level review.

Read-only source interfaces include `lem-paracompact-hausdorff-cover-shrinking` (arbitrary reindexing), `def-godement-resolution` (product of stalks and quotient iteration), `thm-cech-to-sheaf-cohomology-comparison` (natural maps into the total complex), and the delta-functor suppliers. Demailly Chapter IV §5.B, pp. 208–209, equations (5.13)–(5.16), independently confirms connecting-map compatibility. No claim that naturality alone supplies that compatibility.

### Euclidean sheaf dimension (level 1; risk only)

`lem-qftx-gaga-euclidean-sheaf-cohomological-dimension` is untouched and owes no decision. Its three steps are sound: q>m makes every (q+1)-fold intersection empty in an order-(m+1) refinement, every colimit representative then vanishes, and the metric comparison gives ordinary derived vanishing. Checked the q=m+1 and m=1 boundary; no compact-support substitution. Complete risk review recorded. No item edit.

### ex-qftx-gaga-analytic-hyperplane-quotient

Verdict: amended_repair. Checked all six proof steps and exact definition/result suppliers: quotient is coherent by Oka cokernel closure; local restriction extends h(z-prime) (constants for N=1); power series and coefficient uniqueness show divisibility by z_1, with convergence after shifting exponents checked on smaller radii. Off H, z_1 is a unit and both stalks vanish. At H, multiplication injectivity follows by coefficient shift. Degree-zero Dolbeault exactness follows both ways from smooth holomorphy and CR; positive exactness and global polydisc solving compute scalar acyclicity. LES gives all positive Q vanishings and the actual global quotient O(D)/z_1 O(D), with sections of direct image O(H). Checked N=1 and nonzero disc centers; no general coherent Stein vanishing or small-neighborhood premise is used. Reader degree-zero corrections are retained; the reader introduced an incorrect strict q>1 restriction on Demailly Proposition 4.1. Corrected it after reading the printed PDF: q>=1 and k>=q. Complete review; source locator/reference wording amended with repair confidence 1.

### thm-qftx-gaga-analytic-local-coherent-polydisc-acyclicity

Verdict: amended_repair. Checked all six steps: N=0 is a point, finite-dimensional coherent stalk, exact identity global sections and a rank-zero predecessor; N>=1 obtains a fixed finite partial resolution from current Oka statement, then restricts once to W. Local positive Dolbeault exactness and the two-way CR kernel identification give a full resolution; smooth-form acyclicity computes derived scalar cohomology and the global polydisc solver kills all positive degrees, with zero terms above N. Finite direct sums remain acyclic. With K_0=F, ell short exact sequences shift H^q to H^(q+ell)(K_ell), where q>=1, ell=2N+1, so q+ell>2N. The reviewed ordinary dimension lemma applies to arbitrary abelian sheaves. Same W works for every nonempty D subset W; no relative compactness needed. Current Oka proof and bounded-degree helper were read for the finite-resolution/closure use; no supplier acceptance or stale readiness closure is claimed. Reader F3 correction retained; amended its false strict q>1 source restriction to the printed q>=1, k>=q scope.

### ex-qftx-gaga-analytic-point-sheaf-acyclicity

Verdict: accepted_repair. Checked all four steps: quotient by finite coordinate map is coherent; evaluation defines a sheaf morphism and is onto at 0; continuous separately holomorphic representative meets the exact expansion supplier hypotheses. Group each nonconstant multi-index by its first positive index; absolute convergence on smaller radii survives a single exponent decrement, producing holomorphic g_j and f=sum z_j g_j. All nonzero-point stalks vanish because one coordinate is a unit. Stalk isomorphism gives skyscraper and Gamma=C. Higher vanishing uses W chosen for this Q_U and the reviewed local theorem, without an assertion for an arbitrary coherent module or unfixed W. N=1, opens omitting 0, zero germs and all q>0 checked. Source corrections retained, no new item edit; Oka readiness remains owner work.

## Immutable baseline and source evidence

All six item pre-reader raw SHA256 values match `git show HEAD:physics/items/<id>.md` exactly. This recovers the genuine historical preimages; no current-content exception or historical-unknown resolution is used. The untouched dimension lemma matches pre and post. Each of the five touched carriers differs from its pre baseline; the accepted point example still matches the raw post snapshot, whereas the four amended carriers have the additional changes documented above. Actual unified changes were reviewed, including the refinement Statement's explicit Euclidean-metric expansion (same scope).

Direct consumers of that refinement interface are checked in the consumer audit below. Other original Statements/Definitions are unchanged. Source metadata and empirical scope remain mathematical and draft throughout.

The Demailly source was opened on its official Grenoble URL, Chapter IV §5.B and Chapter IX §4.A–B (printed pp. 208–209, 419–421); Agol Theorem 6.5 was read on PDF page 29. The latter assumes fine covers and gives the dimension conclusion tersely. The proof construction is local. Corrected the owned coverage artifact's book title and made its source scope exact: the printed Proposition 4.1 assumes q>=1 and gives vanishing for k>=q. The reader's strict q>1 assertion was an extraction error and is amended in both affected items. Scalar acyclicity is independently proved locally. Preserved historical source-fetch receipts. Source access does not itself certify proof or readiness.

## Consumer and published-source disposition

The only item dependency/reference consumer of the refinement Statement is `lem-qftx-gaga-euclidean-sheaf-cohomological-dimension`; its F4 and step 1.1 consume the unchanged order-(m+1) refinement bound on the identical Euclidean domain. Its own Statement does not change, so no further interface hop is required. The A-page mention is the item inventory and remains correct. No outside consumer repair is necessary. The comparison and all three analytic Statements are unchanged.

`reader:65:1` is confirmed_nonfatal, with one closed `nonfatal-recorded` row. The malformed published metric-definition explanation does not change its real codomain or three metric axioms. The pinned raw import hash matches; the supplier remains untouched. Published maintenance remains OPEN and is recorded in the serialized published ledger/index.

The refuter's context-only worry about `lem-metric-open-covers-have-point-finite-refinements` was checked against its actual Step 1.1: n is minimal for containment in C_alpha, and earlier-cover containment is imposed separately. Thus Step 3.1 may infer n_z<=N from containment alone. This is not a confirmed defect; no extra routed decision or unnecessary repair was made.

Existing cross-batch readiness rows for Oka and its bounded-degree helper remain OPEN. The current proofs were inspected for the exact finite-resolution and closure premises; no owner readiness record or producer source was edited, stamped or cleared. The proof of the bounded-degree helper retains its local unit u in the relation reduction, and Oka step 10.2 iterates coherent kernels a finite number of times. These support the conditional consumer deductions at the inspected draft status.

Both page carriers are YAML-only, preserve compact-v1, inventory/order/status and have no body. There are no TikZ/tikzcd diagrams in the six assigned items or pages; none is needed for the independent arguments. No physical or empirical conclusion is introduced.

Source access limitation: separate Demailly Cech-note and Wehler PDF browser fetches timed out in this session. The official book provides the checked comparison and local-resolution passages; no fresh full-text reading of Wehler is claimed. Demailly printed p.419 was rendered locally and inspected visually, recovering the >= signs that web extraction displays as >. This changes the final source verdict from the reader report. Historical reports remain untouched.

The Git preimage source is commit `9d9ae63a2272c60f16479cd0503f72caffa3d43c`; each recovered item raw hash equals its immutable pre snapshot. Official Demailly PDF raw SHA256: `d7c7654a7417e8322e5dcf8fe8ec818b4c1a18cf280b41f2df5a871b776d89a1`. Authoritative URLs: [Demailly book](https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf), [Agol-hosted course notes](https://math.berkeley.edu/~ianagol/complexriemann.pdf).

## Focused validation and handoff

Final item edits were followed by `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts` on the four Alpha-edited items (all unchanged by reflow), then the required single final `node tools/physics-support/proof-layout.mjs` invocation batching all five touched item paths: **5 items, 28 steps, 0 defects**. No item was edited afterward.

Checks run against the final current carriers (all exit 0):

| Check | Scope and result |
|---|---|
| `tsx-run.mjs tools/physics-support/precheck.mts items/<five touched IDs>.md` | 5 checked, 0 failing |
| `rendercheck.mjs items/<five touched IDs>.md --quiet` | 5 files; YAML, math and delimiters parse |
| `proof-contract.mjs research/advanced-qft-supersymmetry-build-2026-10-23-batch-65.proof-contracts.json --strict` | 6/6, 0 errors, 0 warnings |
| `risk-report.mjs research/advanced-qft-supersymmetry-build-2026-10-23-batch-65.proof-contracts.json --require-reviewed` | Six CRITICAL items with complete specific Alpha reviews; 0 errors |
| `manifest-deps.mjs research/advanced-qft-supersymmetry-build-2026-10-23-batch-65.pages.json` | 6 items, 0 normalized, 0 errors |
| `coverage-checklist.mjs research/advanced-qft-supersymmetry-build-2026-10-23-batch-65.coverage.json` | 2 pages, 18 results, 0 errors or warnings |
| `defect-ledger.mjs validate --run advanced-qft-supersymmetry-build-2026-10-23 --ledger /tmp/alpha-batch65-defects.jsonl` | Extracted only this group's nine closed rows; 0 errors |
| Explicit obligation/ledger audit | Exactly six unique owed decisions; every referenced defect exists and is closed; reader finding references exactly one row |
| Scoped Statement/Example inspection | Six complete uninterrupted sections; no embedded links or judge records; both pages remain frontmatter-only |

The initial strict-contract check reported 35 stale quote/use/input errors. Corrected paraphrases to exact source-section quotations, synchronized actual cited-step use lists and refreshed the amended derivations. This is mechanical audit enrichment, not nine additional mathematical defects; no defect row was created for those check failures. The final strict pass above covers all six contracts. Provenance remains truthful; no existing judge stamp was retained after material repair.

Final decisions: four `amended_repair`, one `accepted_repair`, one `confirmed_nonfatal`. Completed repairs have confidence 1. There are no new substantial missing mathematical prerequisites requiring escalation from this review. Existing Oka/helper readiness holds are preserved for the owner; published metric-definition prose maintenance also remains OPEN. Neither this report nor its successful local checks stamps, judges, publishes, closes those holds, or runs the engine's gate battery.
