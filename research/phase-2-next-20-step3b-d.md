# Step 3b group d — batch 6

**Handoff status: incomplete. 26 of 36 arguments and all five examples are complete; ten items remain escalated. See the final checks and owner obligations below.**

Objective: author all 31 A and 5 B items, preserving exact claims and owner-held obligations. Source history and open obligations in batch-6.notes.md remain in force. Owner direction permits authoring, not acceptance of unresolved proofs. No published content or shared ledger edits authorized.

Read: CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md, HG/HG-P design §§30.5 HG/HG-P (lines 3866–4084), batch notes and owner scope decision. Active disk status confirms Step 3b and completed pre-author baseline.

## Item checkpoints

### def-hg-toolkit-slim-triangles-products-and-four-point-constants

Authored precise nonnegative constants, all-basepoint quantifiers and infimum neighbourhood convention. Read both direct definition suppliers completely; infimum existence follows by negating their LUB property. Elementary product bounds follow from the two triangle inequalities. Source orientation: Drutu–Kapovich Chapter 9 §§9.1,9.5 as retained in manifest; no new full-source reading claimed.

Dependencies examined: def-geodesic-and-geodesic-metric-space, def-complete-ordered-field. Local explicit-path precheck, rendering and strict selected-item contract check passed. Decision accept recorded. No mathematical gap in this item. Next: next uncompleted item in prerequisite order.

### def-hg-toolkit-local-geodesics-and-hausdorff-control

Authored arc-length via finite partition sums, exact local-radius convention, discontinuous real-interval quasi-geodesics and extended Hausdorff distance. Read both direct dependency statements. No AC or compactness theorem is used; source orientation is Drutu–Kapovich Theorem 9.38/§9.6, without a new full-source reading claim.

Dependencies examined: def-hg-toolkit-slim-triangles-products-and-four-point-constants, def-quasi-geodesic-and-quasi-geodesic-metric-space. Local explicit-path precheck, rendering and strict selected-item contract check passed. Decision accept recorded. No mathematical gap in this item. Next: next uncompleted item in prerequisite order.

### def-hg-toolkit-hyperbolic-group-and-stable-length

Completed finite endpoint-route construction of the geometric Cayley metric and full fixed-block subadditivity proof of stable-length existence. Read all six declared suppliers, including the complete power-law and word-length proofs. The elementary infimum proof is local, not an appeal to Hamann Proposition 5.2.5; positivity for infinite order remains a separate unresolved item. Changed proof provenance to ai-altered to account for actual well-definedness argument; preserved statement, scope and IDs.

Dependencies examined: def-hg-toolkit-slim-triangles-products-and-four-point-constants, def-word-metric, def-finitely-generated-group, lem-group-power-laws, lem-word-length-is-well-defined-and-satisfies-the-length-laws, def-complete-ordered-field. Local explicit-path precheck, rendering and strict selected-item contract check passed. Decision accept recorded. No mathematical gap in this item. Next: next uncompleted item in prerequisite order.

### lem-geodesic-triangles-in-trees-are-tripods

Completed finite path uniqueness, metric realization and last-common-point tripod argument, including infinite graphs and interior-edge vertices. Direct dependency is the authored metric convention. Source orientation: Drutu–Kapovich §9.2; the combinatorial proof is supplied locally, with no source retrieval claim or AC.

Dependencies examined: def-hg-toolkit-slim-triangles-products-and-four-point-constants. Local explicit-path precheck, rendering and strict selected-item contract check passed. Decision accept recorded. No mathematical gap in this item. Next: next uncompleted item in prerequisite order.

### lem-slim-triangles-imply-the-gromov-product-inequality

Completed radial fellow-travelling proof with approximate delta+h witnesses, eliminating an implicit closest-point assertion. Derived the precise 3delta constant, including delta=0. Read the direct authored definition; source orientation Drutu–Kapovich Lemmas 9.25/9.31, but the local argument supplies every estimate.

Dependencies examined: def-hg-toolkit-slim-triangles-products-and-four-point-constants. Local explicit-path precheck, rendering and strict selected-item contract check passed. Decision accept recorded. No mathematical gap in this item. Next: next uncompleted item in prerequisite order.

### lem-the-gromov-product-inequality-implies-the-four-point-condition

Authored exact R-A/R-B/R-C expansion and both implications, with all-basepoint quantifiers and tied-sum cases. Direct definition read; no geodesicity, AC or unproved theorem used. Source locator retained: Drutu–Kapovich §9.5.

Dependencies examined: def-hg-toolkit-slim-triangles-products-and-four-point-constants. Local explicit-path precheck, rendering and strict selected-item contract check passed. Decision accept recorded. No mathematical gap in this item. Next: next uncompleted item in prerequisite order.

### lem-the-four-point-condition-implies-slim-triangles

Completed the two explicit product inequalities at equal radial distances, and the complementary b-basepoint branch. Exact bound 4kappa, threshold equality and zero constants checked. Read the complete equivalence supplier; source orientation Drutu–Kapovich Lemma 9.32; no external proof appeal.

Dependencies examined: lem-the-gromov-product-inequality-implies-the-four-point-condition. Local explicit-path precheck, rendering and strict selected-item contract check passed. Decision accept recorded. No mathematical gap in this item. Next: next uncompleted item in prerequisite order.

### lem-hg-toolkit-halfspace-separation-for-local-geodesic-mesh

Completed midpoint/slimness derivation eta>=delta and strict halfspace inclusion. Endpoint lower bounds follow directly from triangle inequality, avoiding noncompact bisector projections. Read authored metric conventions; source locator retained: revised Drutu–Kapovich Lemma 11.46 pp.375–377, with local approximate-witness adaptation.

Dependencies examined: def-hg-toolkit-slim-triangles-products-and-four-point-constants. Local explicit-path precheck, rendering and strict selected-item contract check passed. Decision accept recorded. No mathematical gap in this item. Next: next uncompleted item in prerequisite order.

### lem-local-geodesics-in-a-hyperbolic-space-are-uniform-quasi-geodesics

Completed halfspace first-entry proof with exact (3,4delta) arithmetic, including n=0,1 and the final remainder. Completed choice-free zero-slim uniqueness/tripod argument and finite local concatenation for k>0. Read all three full authored suppliers. Source locator: revised Drutu–Kapovich Theorem 11.45/Lemma 11.46 pp.375–378; no closest-bisector existence assumption remains.

Dependencies examined: def-hg-toolkit-local-geodesics-and-hausdorff-control, lem-slim-triangles-imply-the-gromov-product-inequality, lem-hg-toolkit-halfspace-separation-for-local-geodesic-mesh. Local explicit-path precheck, rendering and strict selected-item contract check passed. Decision accept recorded. No mathematical gap in this item. Next: next uncompleted item in prerequisite order.

### lem-hg-toolkit-polygonal-interpolation-of-quasi-geodesics

Read the complete AFP quasi_geodesic_made_lipschitz argument in official document.pdf printed pp.108–127, extracted with mutool, bounded chunks lines 1–1095. Completed exact optimized interpolation locally: mesh construction, zero/short domains, both Hausdorff inclusions, and four explicit lower-bound cases with 1+2E+J<=4. Geodesicity is made explicit in the authored statement. No AC; inherited source attempts/stamps remain unchanged.

Dependencies examined: def-hg-toolkit-local-geodesics-and-hausdorff-control. Local explicit-path precheck, rendering and strict selected-item contract check passed. Decision accept recorded. No mathematical gap in this item. Next: next uncompleted item in prerequisite order.

### lem-hg-toolkit-exponential-projection-contraction

Read full official AFP document projection argument, printed pp.179–193, extracted by mutool in three bounded chunks. Completed local nearest-segment bisection, 4kappa radial projection estimate, max(5kappa,...) contraction, halving induction, dyadic block count and quasiconvex-target transfer. Added declared earlier exponential addition/monotonicity/logarithm inputs and product/four-point conversion; read all their direct statements and proofs. Exact constant 4sqrt(2) and all supplied-projection qualifications retained; no AC needed.

Dependencies examined: def-hg-toolkit-local-geodesics-and-hausdorff-control, lem-the-gromov-product-inequality-implies-the-four-point-condition, thm-exponential-addition-formula, thm-exponential-is-strictly-increasing, def-natural-logarithm. Local explicit-path precheck, rendering and strict selected-item contract check passed. Decision accept recorded. No mathematical gap in this item. Next: next uncompleted item in prerequisite order.

### lem-a-quasi-isometry-of-geodesic-spaces-has-a-controlled-coarse-inverse

Read the complete published inverse proof and AC definition. Derived both explicit embedding constants and both composite bounds; attained density and the exact fiber selection are explicit. No geodesicity or hidden nearest-point claim used.

Dependencies examined: thm-a-quasi-isometric-embedding-with-coarsely-dense-image-admits-a-quasi-inverse, def-axiom-of-choice. Local explicit-path precheck, rendering and strict selected-item contract check passed. Decision accept recorded. No mathematical gap in this item. Next: next uncompleted item in prerequisite order.

### lem-short-loop-relators-give-a-finite-dehn-presentation

Completed the based-shortening proof with integer Delta normalization, real-subarc bracketing, separate delta=0 branch, raw relator spelling convention, and explicit two-sided kernel calculation. Read full direct suppliers; no unproved Dehn algorithm or cyclic-to-based conversion is assumed.

Dependencies examined: def-hg-toolkit-hyperbolic-group-and-stable-length, lem-local-geodesics-in-a-hyperbolic-space-are-uniform-quasi-geodesics, def-group-presentation, thm-reduced-words-form-the-free-group, lem-word-length-is-well-defined-and-satisfies-the-length-laws. Local explicit-path precheck, rendering and strict selected-item contract check passed. Decision accept recorded. No mathematical gap in this item. Next: next uncompleted item in prerequisite order.

### def-hg-toolkit-gromov-sequences-and-boundary-product

Authored all quantifiers, joint liminf and extended-supremum conventions. The boundary quotient is expressly conditional on the next equivalence proof; no premature quotient well-definedness or representative selection is assumed. Read full direct metric convention supplier.

Dependencies examined: def-hg-toolkit-slim-triangles-products-and-four-point-constants. Local explicit-path precheck, rendering and strict selected-item contract check passed. Decision accept recorded. No mathematical gap in this item. Next: next uncompleted item in prerequisite order.

### thm-morse-stability-with-explicit-parameter-dependence — OPEN

Read the complete official AFP recurrence, auxiliary reverse-inclusion proof and final theorem in document.pdf printed pp.193–232, in bounded extracted chunks, with the final page reread after compaction. Interpolation and exponential projection are complete local suppliers, but the exact 92-bound is NOT proved locally. Step 3 escalation recorded: projection small-gap selection, 8kappa quasiconvexity of thickened segments and the telescoping nested-neighbourhood recurrence remain to be supplied and checked. Proposed additions on this A page: small-gap projection lemma and thickening/radial-projection lemma, before the Morse consumer. Exact recurrence parameters are L=18rho, D=55rho, alpha=3/25, rho>kappa; the source's stopping induction must not be replaced by an appeal to its strategy. This escalation is owner-held. No Morse or downstream acceptance is claimed.

### lem-asymptotic-gromov-sequences-form-an-equivalence-relation

Completed reflexivity, symmetry, quantified transitivity with one fixed bridge index, and both basepoint transfers with exact additive distance. Read both complete direct suppliers. The quotient is now justified without AC or properness.

Dependencies examined: def-hg-toolkit-gromov-sequences-and-boundary-product, lem-slim-triangles-imply-the-gromov-product-inequality. Local explicit-path precheck, rendering and strict selected-item contract check passed. Decision accept recorded. No mathematical gap in this item. Next: next uncompleted item in prerequisite order.

### lem-boundary-products-are-independent-of-representative-and-basepoint

Completed the 2kappa representative comparison, basepoint distance bound, conservative 3kappa boundary inequality, and explicit open-set and interior-refinement proof. Infinite products, both topology transfers, empty boundaries and supplied-representative choice qualifications are proved locally; no ray compactness or metrizability result is assumed.

Dependencies examined: lem-asymptotic-gromov-sequences-form-an-equivalence-relation. Local explicit-path precheck, rendering and strict selected-item contract check passed. Decision accept recorded. No mathematical gap in this item. Next: next uncompleted item in prerequisite order.

## Published concern for serial owner reconciliation

Confirmed proof defect (high confidence), not a false theorem: published `thm-the-cayley-graph-of-a-free-group-with-respect-to-a-free-basis-is-a-tree`, page `cayley-graphs-word-metrics-and-quasi-isometry`, Proof 1.2 asserts that right-Cayley successive quotients `g_{j+1} g_j^{-1}` are basis letters. Its own F1 defines right edges `{g,gs}`, so the correct label is `g_j^{-1} g_{j+1}`. For the edge `a -> ab` in the free group on `{a,b}`, the stated quotient is `aba^{-1}`, a reduced length-three word. Replace labels by right increments, and explicitly telescope their ordered product around the cycle. Required suppliers: published `thm-reduced-words-form-the-free-group`, `def-cayley-graph`, and optional forthcoming draft `lem-hg-toolkit-free-cayley-tree-from-reduced-words` for the geometric version. The latter is an independent local supplier, not blocked by this published proof. This is a defect-focused direct-proof audit only; no exhaustive published-closure audit is claimed. Published files and the canonical shared ledger remain untouched; the owner/serial reconciler must update the existing entry/classification rather than create duplicates.

### lem-hg-toolkit-free-cayley-tree-from-reduced-words

Completed independent reduced-word tree proof using correct right increments g_i^{-1}g_{i+1}, telescoping labels, and interior-edge restrictions. Read all direct suppliers. Confirmed the separate published left/right increment defect and reported it for serial reconciliation; this proof does not consume that defective item.

Dependencies examined: thm-reduced-words-form-the-free-group, lem-geodesic-triangles-in-trees-are-tripods, def-word-metric. Local explicit-path precheck, rendering and strict selected-item contract check passed. Decision accept recorded. No mathematical gap in this item. Next: next uncompleted item in prerequisite order.

### ex-morse-stability-in-a-tree

Completed both Hausdorff inclusions and the repeated-point calculation 0>=2a/lambda-epsilon, with an explicit numerical instance and zero-error case. Read both full authored suppliers; no Morse theorem is consumed.

Dependencies examined: lem-geodesic-triangles-in-trees-are-tripods, def-hg-toolkit-local-geodesics-and-hausdorff-control. Local explicit-path precheck, rendering and strict selected-item contract check passed. Decision accept recorded. No mathematical gap in this item. Next: next uncompleted item in prerequisite order.

### ex-a-local-geodesic-constant-in-a-cayley-graph

Completed exact (1,0) inequalities with a four-letter reduced-word example and interior-edge distance 11/4. Read both complete direct suppliers, including the corrected local free-tree proof.

Dependencies examined: lem-hg-toolkit-free-cayley-tree-from-reduced-words, lem-local-geodesics-in-a-hyperbolic-space-are-uniform-quasi-geodesics. Local explicit-path precheck, rendering and strict selected-item contract check passed. Decision accept recorded. No mathematical gap in this item. Next: next uncompleted item in prerequisite order.

### ex-boundary-extension-of-a-tree-quasi-isometry

Completed isometry calculation, the full sequence-boundary/infinite-word identification, exact common-prefix products, finite cancellation example and inverse continuity. Read all direct suppliers; no general Morse or boundary-extension theorem is used.

Dependencies examined: lem-hg-toolkit-free-cayley-tree-from-reduced-words, lem-boundary-products-are-independent-of-representative-and-basepoint, def-word-metric. Local explicit-path precheck, rendering and strict selected-item contract check passed. Decision accept recorded. No mathematical gap in this item. Next: next uncompleted item in prerequisite order.

### cex-properness-is-needed-for-the-compact-boundary-package

Completed explicit star metric, geodesic realization, a finite-subcover obstruction for the closed unit ball, complete classification of Gromov sequences, exact boundary products and the singleton-cover obstruction. Read all three direct suppliers; no compactness theorem or choice principle is invoked.

Dependencies examined: lem-geodesic-triangles-in-trees-are-tripods, def-hg-toolkit-gromov-sequences-and-boundary-product, lem-boundary-products-are-independent-of-representative-and-basepoint. Local explicit-path precheck, rendering and strict selected-item contract check passed. Decision accept recorded. No mathematical gap in this item. Next: next uncompleted item in prerequisite order.

### lem-hg-toolkit-finitely-many-cayley-cone-types

Read complete Hamann Propositions 5.2.2–5.2.3 pp.85–87 in the official PDF. Replaced the omitted exercise estimate by a fully derived 12delta radial bound and radius max(1,ceil(12delta)); verified the first-failure shorter side reaches the chosen radius. Added the actual product supplier dependency. Both cone inclusions and finite counting are complete, choice-free.

Dependencies examined: def-hg-toolkit-hyperbolic-group-and-stable-length, prop-word-metric-balls-are-finite-exactly-when-the-generating-set-is-finite, lem-slim-triangles-imply-the-gromov-product-inequality. Local explicit-path precheck, rendering and strict selected-item contract check passed. Decision accept recorded. No mathematical gap in this item. Next: next uncompleted item in prerequisite order.

### lem-hg-toolkit-infinite-hyperbolic-groups-have-infinite-order-elements

Completed repeated-cone pumping with exact equalities |h^n|=n|h| and |g_i h^n|=i+n|h|, including exponent zero. Read the full repaired cone supplier and Hamann Proposition 5.2.2 pp.85–86. A single finite geodesic suffices, so this result remains choice-free.

Dependencies examined: lem-hg-toolkit-finitely-many-cayley-cone-types, prop-word-metric-balls-are-finite-exactly-when-the-generating-set-is-finite. Local explicit-path precheck, rendering and strict selected-item contract check passed. Decision accept recorded. No mathematical gap in this item. Next: next uncompleted item in prerequisite order.

### lem-infinite-order-elements-have-positive-stable-translation-length

Read complete Hamann Proposition 5.2.5 pp.87–89. Reconstructed the midpoint argument with corrected count B*(2R+2a+1), proved connector exclusion and derived positivity from the earlier full subadditive limit, eliminating the source quotient/remainder passage. Removed unused Morse dependency; actual argument is choice-free and gives explicit positive lower bound 1/C.

Dependencies examined: def-hg-toolkit-hyperbolic-group-and-stable-length, prop-word-metric-balls-are-finite-exactly-when-the-generating-set-is-finite. Local explicit-path precheck, rendering and strict selected-item contract check passed. Decision accept recorded. No mathematical gap in this item. Next: next uncompleted item in prerequisite order.

### lem-hg-toolkit-proper-ray-compactness-and-sequence-comparison

Completed the compact ray-space quotient route locally: compact-metric sequential criterion, rational diagonal limit, sequence/ray joint-product comparison, both finite-Hausdorff equivalence directions and a closed-surjection topology proof. Removed unused Morse dependency; AC remains explicit for the exact countable selections. No first-countability-to-metrizability inference remains.

Dependencies examined: lem-boundary-products-are-independent-of-representative-and-basepoint, def-axiom-of-choice. Local explicit-path precheck, rendering and strict selected-item contract check passed. Decision accept recorded. No mathematical gap in this item. Next: next uncompleted item in prerequisite order.

### ex-ping-pong-for-two-loxodromics

Completed the conditional four-domain proof, including the initial-domain choice avoiding both endpoint obstructions and the reduced-word kernel argument. Removed dynamics/existence dependencies that were not consumed: all four uniform inclusions remain explicit hypotheses. Read full free-group definition and reduced-word proof. No geometric existence claim or unresolved supplier is assumed.

Dependencies examined: def-free-group, thm-reduced-words-form-the-free-group. Local explicit-path precheck, rendering and strict selected-item contract check passed. Decision recording blocked: Step 3a must clear before item auditing. No mathematical gap in this item. Next: next uncompleted item in prerequisite order.

## Remaining item obligations

The following ten items are not proved and are not complete. Their draft files contain their preserved claims and explicit open obligations, not strategy-generated proofs.

### thm-morse-stability-with-explicit-parameter-dependence — OPEN

Owner-held Step 3 escalation. The exact 92 recurrence is not proved. Complete projection small-gap and quasiconvex-thickening suppliers, then verify the two-level stopping/telescoping argument in AFP document.pdf pp.193–232 with L=18rho, D=55rho, alpha=3/25. The completed interpolation and exponential projection lemmas alone do not imply this theorem.

Declared dependencies: def-hg-toolkit-local-geodesics-and-hausdorff-control, lem-slim-triangles-imply-the-gromov-product-inequality, lem-the-four-point-condition-implies-slim-triangles, lem-hg-toolkit-polygonal-interpolation-of-quasi-geodesics, lem-hg-toolkit-exponential-projection-contraction, def-axiom-of-choice.

### lem-hyperbolicity-is-transported-by-a-quasi-isometry — OPEN

The exact displayed transport bound consumes both Hausdorff inclusions of thm-morse-stability-with-explicit-parameter-dependence, which is owner-held and unproved. After that supplier closes, map each side, use target slimness and pull back the bound 2M+delta by the lower embedding inequality. Do not accept a conditional calculation as the promised theorem.

Declared dependencies: thm-morse-stability-with-explicit-parameter-dependence, lem-a-quasi-isometry-of-geodesic-spaces-has-a-controlled-coarse-inverse, def-axiom-of-choice.

### lem-linear-isoperimetry-implies-uniformly-thin-geodesic-bigons — OPEN

Inherited HG-P closure audit remains incomplete. Both named direct suppliers and the five previously outstanding intermediate proofs were read, but their finite polygonal disk surgery, affine boundary-crossing, uniform two-side cone extraction and actual input proofs are not fully audited. No defect is concluded from this incomplete audit. Also reconcile the simple Cayley graph used by lem-relator-disks-give-area-controlled-coarse-fillings with this toolkit's labelled realization retaining loops and parallel edges. Proposed remedy: complete the exact transitive audit and supply an elementary realization comparison, or state a consistent model throughout with owner reconciliation; then apply uniformity and the degenerate-triangle bigon argument.

Declared dependencies: def-group-presentation, def-algebraic-relator-area-and-dehn-function-of-a-finite-presentation, def-axiom-of-choice, thm-linear-relator-area-implies-slim-geodesic-triangles, lem-uniform-filling-data-give-a-uniform-slimness-bound.

### lem-axis-fellow-travelling-controls-the-centralizer — OPEN

Positive stable length now has a choice-free proof, but this scaffold still needs uniform geodesic/power-orbit Hausdorff control from the owner-held Morse theorem. Hamann Theorem 5.2.6 pp.89–90 was read completely. Once a sound orbit/chord supplier is available, exclude quadrilateral connector sides and produce a finite-ball representative for every coset. Propagate AC if the Morse-family proof is used; the current unqualified scaffold statement has not resolved that obligation.

Declared dependencies: lem-infinite-order-elements-have-positive-stable-translation-length, thm-morse-stability-with-explicit-parameter-dependence, prop-word-metric-balls-are-finite-exactly-when-the-generating-set-is-finite.

### lem-quasi-isometries-extend-to-boundary-homeomorphisms — OPEN

The nonproper image-geodesic threshold estimate remains unproved and consumes the owner-held Morse theorem. Complete a quantitative product-divergence and continuity argument for arbitrary sequences, then use the controlled inverse and bounded-distance calculation. The completed proper ray compactness lemma cannot supply the nonproper claim. Remove its unused dependency when the actual proof is finalized; do not add properness to the statement.

Declared dependencies: lem-boundary-products-are-independent-of-representative-and-basepoint, thm-morse-stability-with-explicit-parameter-dependence, lem-a-quasi-isometry-of-geodesic-spaces-has-a-controlled-coarse-inverse, lem-hg-toolkit-proper-ray-compactness-and-sequence-comparison, def-axiom-of-choice.

### def-hg-toolkit-loxodromics-and-independent-poles — OPEN

The proposed definition still needs existence and distinctness of the two poles for an arbitrary isometry with quasi-isometrically embedded integer orbit. Positive stable length for group elements does not itself prove this general well-definedness statement. Proposed remedy: prove a local orbit-chain/product lemma or use the completed Morse theorem once available, and then reconcile the exact Morse/AC dependencies and assumption. Until then the boundary limits are not asserted as established.

Declared dependencies: def-hg-toolkit-gromov-sequences-and-boundary-product, lem-infinite-order-elements-have-positive-stable-translation-length, lem-asymptotic-gromov-sequences-form-an-equivalence-relation.

### lem-hg-toolkit-non-elementary-groups-have-independent-loxodromics — OPEN

The ideal-line/orbit comparison and pole well-definedness suppliers remain open, and the centralizer proof is not complete. The exact equal-displacement repair from the owner direction remains required: obtain two pairs with identical group element g^(-i)h^j and nonzero index differences, not merely equal distance bounds. Prove cobounded orbit implies finite index directly by a finite ball, avoiding a two-ends classification import. No independent-pole existence proof is claimed.

Declared dependencies: lem-hg-toolkit-infinite-hyperbolic-groups-have-infinite-order-elements, def-hg-toolkit-loxodromics-and-independent-poles, lem-axis-fellow-travelling-controls-the-centralizer, lem-boundary-products-are-independent-of-representative-and-basepoint, lem-hg-toolkit-proper-ray-compactness-and-sequence-comparison, prop-word-metric-balls-are-finite-exactly-when-the-generating-set-is-finite, def-axiom-of-choice.

### lem-independent-loxodromics-have-disjoint-pole-neighbourhoods — OPEN

The Hausdorff boundary topology is now complete, but the declared pole definition is not yet justified. Once four distinct well-defined poles are supplied, choose pairwise separating open sets and intersect finitely many neighbourhoods at each pole. This proves separation only; it must not be substituted for existence of independent loxodromics.

Declared dependencies: def-hg-toolkit-loxodromics-and-independent-poles, lem-boundary-products-are-independent-of-representative-and-basepoint.

### lem-loxodromic-elements-have-north-south-boundary-dynamics — OPEN

Pole well-definedness and the required uniform dynamics argument remain open. Historical Canary reading receipts are preserved, not claimed as fresh complete readings. Proper-ray compactness is now locally proved, but pointwise attraction alone does not imply the two uniform inclusions. Proposed remedy: author the convergence-action subsequence argument with exact compactness and ideal-geodesic suppliers, or prove direct uniform product estimates; retain the elementary two-pole branch and explicit choice use.

Declared dependencies: def-hg-toolkit-loxodromics-and-independent-poles, lem-quasi-isometries-extend-to-boundary-homeomorphisms, thm-morse-stability-with-explicit-parameter-dependence, lem-hg-toolkit-proper-ray-compactness-and-sequence-comparison, def-axiom-of-choice.

### thm-quantitative-hyperbolic-geometry-toolkit — OPEN

The full conjunction remains blocked by the exact Morse, filling-audit, centralizer, sequence extension, poles, independent-existence and dynamics obligations listed in this report. Preserve every promised clause and its own hypotheses; do not present the completed elementary subset as the complete package.

Declared dependencies: lem-geodesic-triangles-in-trees-are-tripods, lem-slim-triangles-imply-the-gromov-product-inequality, lem-the-gromov-product-inequality-implies-the-four-point-condition, lem-the-four-point-condition-implies-slim-triangles, lem-local-geodesics-in-a-hyperbolic-space-are-uniform-quasi-geodesics, thm-morse-stability-with-explicit-parameter-dependence, lem-a-quasi-isometry-of-geodesic-spaces-has-a-controlled-coarse-inverse, lem-hyperbolicity-is-transported-by-a-quasi-isometry, lem-short-loop-relators-give-a-finite-dehn-presentation, lem-linear-isoperimetry-implies-uniformly-thin-geodesic-bigons, lem-infinite-order-elements-have-positive-stable-translation-length, lem-axis-fellow-travelling-controls-the-centralizer, lem-asymptotic-gromov-sequences-form-an-equivalence-relation, lem-boundary-products-are-independent-of-representative-and-basepoint, lem-quasi-isometries-extend-to-boundary-homeomorphisms, lem-independent-loxodromics-have-disjoint-pole-neighbourhoods, lem-loxodromic-elements-have-north-south-boundary-dynamics, lem-hg-toolkit-proper-ray-compactness-and-sequence-comparison, lem-hg-toolkit-non-elementary-groups-have-independent-loxodromics, def-axiom-of-choice.

## Additional published audit qualifications

`prop-word-metric-balls-are-finite-exactly-when-the-generating-set-is-finite`, page `cayley-graphs-word-metrics-and-quasi-isometry`, Proof 2.1 says every element of S union S-inverse has word length 1. This is false for the identity if it is included in S; length at most 1 suffices for the radius-2 inclusion. Confirmed minor proof wording defect, high confidence; repair with <=1 or qualify nonidentity elements. Required supplier: `lem-word-length-is-well-defined-and-satisfies-the-length-laws`. The finite-generator implication used here is unaffected. No published edits made.

The five named HG-P intermediate proofs were read in this dispatch: `lem-singular-planar-diagrams-have-controlled-coarse-disk-thickenings`, `lem-relator-expressions-give-controlled-singular-planar-diagrams`, `lem-coarse-triangle-minsize-is-bounded-by-square-root-area`, `lem-sublinear-minsize-makes-every-cone-geodesic-a-limit-geodesic`, `thm-all-asymptotic-cones-are-trees-implies-uniform-slimness`. The remaining direct inputs include `lem-finite-polygonal-disk-and-collar-surgery`, `lem-polygonal-boundary-crossing-for-affine-disk-maps`, `lem-tree-cones-give-uniform-two-side-control`, and their actual proof inputs. This is incomplete audit, not evidence of a defect or completed closure certification.

## Current item-decision refresh

The temporary unrelated scope block cleared before handoff. After final format normalization and declaring the earlier logarithm page requirement, decisions were refreshed through the official tool with the actual examined dependencies. The existing Morse escalation was not overwritten.

- `def-hg-toolkit-slim-triangles-products-and-four-point-constants`: accept recorded.
- `def-hg-toolkit-local-geodesics-and-hausdorff-control`: accept recorded.
- `def-hg-toolkit-hyperbolic-group-and-stable-length`: accept recorded.
- `lem-geodesic-triangles-in-trees-are-tripods`: accept recorded.
- `lem-slim-triangles-imply-the-gromov-product-inequality`: accept recorded.
- `lem-the-gromov-product-inequality-implies-the-four-point-condition`: accept recorded.
- `lem-the-four-point-condition-implies-slim-triangles`: accept recorded.
- `lem-hg-toolkit-halfspace-separation-for-local-geodesic-mesh`: accept recorded.
- `lem-local-geodesics-in-a-hyperbolic-space-are-uniform-quasi-geodesics`: accept recorded.
- `lem-hg-toolkit-polygonal-interpolation-of-quasi-geodesics`: accept recorded.
- `lem-hg-toolkit-exponential-projection-contraction`: accept recorded.
- `thm-morse-stability-with-explicit-parameter-dependence`: existing owner-held escalation preserved.
- `lem-a-quasi-isometry-of-geodesic-spaces-has-a-controlled-coarse-inverse`: accept recorded.
- `lem-hyperbolicity-is-transported-by-a-quasi-isometry`: escalate recorded.
- `lem-short-loop-relators-give-a-finite-dehn-presentation`: accept recorded.
- `lem-linear-isoperimetry-implies-uniformly-thin-geodesic-bigons`: escalate recorded.
- `lem-infinite-order-elements-have-positive-stable-translation-length`: accept recorded.
- `lem-axis-fellow-travelling-controls-the-centralizer`: escalate recorded.
- `def-hg-toolkit-gromov-sequences-and-boundary-product`: accept recorded.
- `lem-asymptotic-gromov-sequences-form-an-equivalence-relation`: accept recorded.
- `lem-boundary-products-are-independent-of-representative-and-basepoint`: accept recorded.
- `lem-hg-toolkit-proper-ray-compactness-and-sequence-comparison`: accept recorded.
- `lem-quasi-isometries-extend-to-boundary-homeomorphisms`: escalate recorded.
- `def-hg-toolkit-loxodromics-and-independent-poles`: escalate recorded.
- `lem-hg-toolkit-finitely-many-cayley-cone-types`: accept recorded.
- `lem-hg-toolkit-infinite-hyperbolic-groups-have-infinite-order-elements`: accept recorded.
- `lem-hg-toolkit-non-elementary-groups-have-independent-loxodromics`: escalate recorded.
- `lem-independent-loxodromics-have-disjoint-pole-neighbourhoods`: escalate recorded.
- `lem-loxodromic-elements-have-north-south-boundary-dynamics`: escalate recorded.
- `lem-hg-toolkit-free-cayley-tree-from-reduced-words`: accept recorded.
- `thm-quantitative-hyperbolic-geometry-toolkit`: escalate recorded.
- `ex-morse-stability-in-a-tree`: accept recorded.
- `ex-a-local-geodesic-constant-in-a-cayley-graph`: accept recorded.
- `ex-boundary-extension-of-a-tree-quasi-isometry`: accept recorded.
- `ex-ping-pong-for-two-loxodromics`: accept recorded.
- `cex-properness-is-needed-for-the-compact-boundary-package`: accept recorded.

## Handoff and checks actually run

Current result: **26/36 item arguments complete, with 26 current accept receipts; 10 explicitly unproved drafts remain escalated.** All five B examples are among the completed items. Both A/B composition pages exist as drafts, retaining all 31 A and 5 B IDs. This is an incomplete mathematical handoff, not approval of the entire pair. The completed IDs are exactly the 26 entries in `phase-2-next-20-batch-6.proof-contracts.json`, and are individually listed with current accept receipts above.

- Explicit-path precheck on all 36 item paths: exit 0, **23 proof-bearing items checked**, zero failures. It skips non-proof bodies, including the unproved drafts, so this does not certify those drafts.
- Explicit-path rendering on all 36 items and both pages: exit 0, **38 files passed**.
- Content policy on `research/phase-2-next-20-batch-6.pages.json`: exit 0, **36 items, zero errors/warnings**. Initial JSON-flow provenance/source fields were valid YAML but not recognized by this policy parser; converted only those fields to block YAML, preserving their values. Rechecked after conversion and refreshed receipts.
- Strict proof contracts over the full 36-item scope: exit 1, **10 missing-contract errors**, exactly the ten open items listed above. No fabricated contracts were added to suppress these failures.
- Strict proof contracts restricted explicitly to the completed IDs: exit 0, **26/26 checked**, zero errors/warnings.
- `validate-plan research/plan-spec.json`: exit 0. Its preserved pair entries still have **zero items**, so this pre-splice result does not validate the newly authored inventory. Existing redundant-prerequisite warnings remain.
- A temporary overlay of the two current manifest pages into that plan also passed `validate-plan` (exit 0). This was a read-only diagnostic; the shared plan was not spliced.
- Five current scope-decline decisions refreshed with row-specific evidence: check exit 0. No invented owner rulings. The alternative-proof decline now expressly retains the unproved exact Morse obligation.
- Pair scope: a fresh sufficient-scope review was recorded without `--owner`; the matching owner proceed receipt remains controlling. Scope approval is not proof approval.
- Consumer-owned cross-batch input remains `[]`: every nonlocal item supplier is on an earlier published page, including the logarithm input; there are no edges to another batch in this frontier. The unified ledger was refreshed through its locking tool after dependency edits. No manual edit to the unified ledger or published-consumer ledger was made.
- Final exact-dependency decision inspection: **26 closed, 10 open**. The original Morse escalation now reports changed inputs requiring a current owner decision; it was deliberately not overwritten after the draft/page-input updates. The other nine escalations were recorded against current inputs.

## Step 4 serial amendments

Splice the preserved A/B inventory from the owned manifest into the currently empty plan entries. The A manifest now declares the additional earlier requirement `the-logarithm-and-general-powers`, because `lem-hg-toolkit-exponential-projection-contraction` actually uses `def-natural-logarithm`. The base plan closure did not contain this page; it must not be hidden by the baseline validator's empty inventory. The other two analytic inputs (`thm-exponential-addition-formula`, `thm-exponential-is-strictly-increasing`) were already reachable through the earlier closure. Reconcile this one page-input change into shared design/prose in Step 4. No new page pair or item ID was added.

Local suppliers fully authored within the preserved inventory include the halfspace separation, optimized interpolation, exponential projection, corrected cone-type argument, free Cayley tree, choice-free stable length and compact ray quotient. The source exercise and midpoint-count defects were replaced by actual arguments. The unused Morse dependencies were removed from stable length and proper-ray compactness. The B ping-pong proof uses its uniform inclusions as hypotheses and consumes only the published free-group/reduced-word interface. Shared prose should describe these final dependency choices, while retaining all unresolved Morse, filling and dynamics obligations.

The two published proof concerns above require serial owner ledger reconciliation: the wrong right-Cayley increment order (confirmed substantive proof error) and the identity-generator length wording (confirmed minor error). The HG-P closure is an incomplete audit, not a confirmed defect. Preserve independent review records and existing owner-held escalations.

Next required mathematical work is owner resolution of the listed ten escalations, starting with the missing local projection-small-gap/thickening suppliers and exact Morse recurrence, and the outstanding HG-P input audit. Centralizer, general sequence-boundary extension, pole well-definedness, independent existence and uniform dynamics still need authored proofs before the final conjunction can be accepted. No claim of completed Step 3b, full contract pass, source-closure certification or publication is made.
