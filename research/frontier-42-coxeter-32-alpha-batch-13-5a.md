# Batch 13 Step 5a adjudication — frontier-42-coxeter-32

Reviewer: alpha batch-13. Scope: ten touched items, one touched B page, reader:13:1; no refuter findings. Read CLAUDE.md, README.md, SCHEMA.md, the exact dispatch/order/scope, reader report/findings, refuter artifact and pre/post hash snapshots. All ten current item raw hashes initially matched post-reader snapshots; guard hashes are distinct and were not used as raw fingerprints. Current dependencies are reviewed at their actual cited sections. No mathematical acceptance or engine transition is claimed.

Sources opened online: Jean Michel, Lectures on Coxeter groups, https://webusers.imj-prg.fr/~jean.michel/papiers/cox.pdf, printed pp. 2–3 and complete Proposition 5.14/Theorem 5.15 arguments pp. 12–15; Davis, The Geometry and Topology of Coxeter Groups, https://people.math.osu.edu/davis.12/davisbook.pdf, Definitions 3.5.1/3.5.3 pp. 42–43 and Appendix C pp. 433–438. Source reading supports checked statements and hypotheses, never substitutes for local proofs. Michel's connectedness/irreducibility shorthand is not used for arbitrary possibly degenerate forms.

Review in generated dependency order follows.

## def-cg-coxeter-diagram-components-and-finite-type (touched:13:def-cg-coxeter-diagram-components-and-finite-type)

reviewed_no_defect: The reader changed bibliographic locators only; the finite Coxeter matrix dictionary, induced restrictions, nonempty connectedness and empty-system convention agree with the actual graph/group definitions. Michel printed pp. 2–3 and Davis Definitions 3.5.1/3.5.3 pp. 42–43 validate the corrected locators. Synchronized the manifest source metadata; no mathematical defect or reader finding is closed by this decision.

No mandatory HIGH/CRITICAL risk review for this carrier.

Sources/dependencies: Exact cited supplier sections checked; see contract citation records.

Next action: Continue the next routed carrier in dependency order; final local checks pending.

## lem-cg-positive-definite-diagram-exclusions (touched:13:lem-cg-positive-definite-diagram-exclusions)

amended_repair: Retained the reader's corrected cofactor term -c^2 d_(k-2), explicit finite-tree path/separation derivations, infinity convention and accurately qualified witness claim. The old manifest still mirrored the incomplete cofactor contribution and omitted graph derivations; synchronized its Statement, dependencies and full proof strategy to current content. Checked all fifteen steps and exact prerequisites, including strict Cauchy–Schwarz for independent disjoint-support vectors and strict projection inequalities.

CRITICAL review complete: connected means nonempty, so rank one is A1 and the empty graph is excluded. Cosines lie in [0,1], with infinity coefficient one; comparison only uses nonnegative coordinates. Cycle chords only decrease the norm. Two-large-edge witness has norm <=2r-4-2(r-2)=0; two-branch witness <=L+2-L-2=0; branch plus large label <=1/2-c^2<=0. Projection residuals are nonzero by basis support. Chain cases m>=6,5,4 and sorted arm triples exhaust the integer inequalities; equality triples are excluded. Unique paths, neighbour separation and degree-two path structure are derived locally. No AC or representation nondegeneracy is assumed.

Sources/dependencies: Exact cited supplier sections checked; see contract citation records.

Next action: Continue the next routed carrier in dependency order; final local checks pending.

## ex-cg-cycle-and-overlong-arm-nonpositive-witnesses (touched:13:ex-cg-cycle-and-overlong-arm-nonpositive-witnesses)

amended_repair: Verified the repaired weighted-arm norm sum(k^2)-sum(k(k+1))=p(p+1)/2, including p=1 and p=3 (norm 6). For arms (1,2,5), the scaled norms 1/4,1/3,5/12 sum to one and the displayed centre-adjacent coefficients give norm zero. The cycle and 4,4 / 4,3,4 witnesses also have norm zero. Corrected the Davis locator: Lemma C.2.2 covers affine cycle/star cases; C.2.3 is about Z4/Z5 paths. Synchronized manifest statements/source/proof evidence.

CRITICAL review complete: tested r=3 without double-counting cycle edges, arbitrary larger finite labels and infinity via monotone nonnegative-coordinate comparison, one-vertex arm, centre-near b1 weight 2 and d5 weight 5, nonzero central coordinate, and exact zero at (1,2,5). No global positive definiteness is assumed for the explicit witnesses; the arm inequality is invoked only conditionally. Actual double-angle/Viete/quarter-turn suppliers license the cosine values. No choice used.

Sources/dependencies: Exact cited supplier sections checked; see contract citation records.

Next action: Continue the next routed carrier in dependency order; final local checks pending.

## lem-cg-diagram-products-and-invariant-form-comparison (touched:13:lem-cg-diagram-products-and-invariant-form-comparison)

amended_repair: The reader correctly removed the global disconnectedness hypothesis, making connected and empty cases available to the finite-type criterion. Independently checked the presentation maps as inverse on coordinate generators, length regrouping/projections, orthogonal basis-support decomposition, hyperplane proportionality including the zero functional, and finite reindexing of the averaged positive form. The old manifest retained disconnectedness and the obsolete argument; synchronized current Statement/dependencies and proof.

CRITICAL review complete: k=0 gives W={1}, V={0} and vacuous positivity; k=1 gives the needed connected case. Pairwise intersections are not used to infer the product isomorphism or direct sum: explicit inverse homomorphisms and unique supports establish them. B may be degenerate; B(e_s,e_s)=1 suffices for the nonzero functional, while beta(e_s,-) may vanish. Edge scalars propagate only where B(e_s,e_t) is nonzero, including infinity. Averaging uses a finite set, invertible group maps, and the identity summand; no arbitrary choice, Schur lemma or representation irreducibility is required.

Sources/dependencies: Exact cited supplier sections checked; see contract citation records.

Next action: Continue the next routed carrier in dependency order; final local checks pending.

## thm-cg-finite-type-positive-definite-criterion (touched:13:thm-cg-finite-type-positive-definite-criterion)

amended_repair: Current proof establishes both directions: finite averaging gives positive B, while positive B transfers to B* and yields a compact orthogonal group with an identity-isolating chamber neighbourhood. A symmetric U with U U inside that neighbourhood makes each translate in a finite cover contain at most one group element; dual faithfulness gives finite W. Clause (3) is proved without positivity. Retained the reader's repaired direction labels, removed nonexistent clause (4), supplied rank-nullity/equal-dimension, coordinate bounds, product-ball and local composition arguments, and synchronized obsolete manifest mirrors. Verified actual continuity, compactness, faithfulness and collision supplier statements; read the two central Coxeter supplier proofs.

CRITICAL review complete: S empty gives singleton groups and zero spaces, vacuous positivity and canonical zero-space isomorphism; analytic proof uses n>=1. Inversion is continuous only on det!=0 and GL is open; all coordinates are finite polynomials/quotients. Form-preserving endomorphisms are invertible by positivity and rank-nullity, so the orthogonal locus is closed in the full matrix space. Boundedness survives fixed basis change. Chamber inequalities are finite and strictly positive; the collision theorem has f,g in C and forces W_empty. Finiteness uses the finite-cover subgroup argument, not the false general inference that an arbitrary discrete subset of a compact space is finite. Only choice-free continuity clauses (a)/(b)/(c), choice-free Heine–Borel and finite selections are used. No countable or arbitrary AC is spent.

Sources/dependencies: Actual cited sections in the batch contract, particularly thm-cg-root-length-criterion-and-faithfulness (3), thm-cg-dual-chamber-intersections-and-point-stabilizers (3)/(4), thm-metric-continuity-characterisations (a)/(b)/(c), thm-heine-borel-rn (2), and lem-compactness-is-intrinsic (1)/(3). Davis 6.12.9 pp. 119–120 and D.1.3 p. 440; Michel 5.14(ii) pp. 12–13.

Next action: Continue the next routed carrier in dependency order; final local checks pending.

## thm-cg-finite-coxeter-classification-including-h-and-dihedral (touched:13:thm-cg-finite-coxeter-classification-including-h-and-dihedral)

amended_repair: Checked the exhaustive necessary diagram list against the independently reviewed exclusions, and the converse by rank induction using the determinant table and proper induced subdiagrams. Verified the added general leaf recurrence det M=2 det M_without_a-t^2 det M_without_a,b, D4 endpoint A3 versus A1 disjoint A1, E6/E7/E8 values 3,2,1, and disconnected rank-two base. The reader correctly replaced F8's invalid general product inference with the component multiplication isomorphism. Synchronized the stale manifest proof/dependencies and current matrix infinity convention.

CRITICAL review complete: rank 0 and A1, connected rank 2 including arbitrary finite m, disconnected rank 2, n=2 B, n=4 D, and E endpoints all checked. Leaf deletion works on stars as well as paths; path recurrence alone is insufficient. H values are positive since sqrt5<3 and 45<49; I2 determinant uses 0<pi/m<pi. Proper induced star components have shorter arms or become A paths; path subcomponents retain at most the permitted unique label. Positivity induction is independent of the finiteness implication, so its forward reference causes no circular argument. Empty products are finite. Diagram/system uniqueness uses rank, labels, branch position and arm multisets, with A2/I2(3), B2/I2(4) duplicates removed. This classifies systems, not abstract groups; no crystallographic assumption or AC is used.

Sources/dependencies: Exact cited supplier sections checked; see contract citation records.

Next action: Continue the next routed carrier in dependency order; final local checks pending.

## ex-cg-bn-and-cn-are-the-same-coxeter-diagram (touched:13:ex-cg-bn-and-cn-are-the-same-coxeter-diagram)

amended_repair: Verified the same finite matrix/presentation naming convention, determinant 2, leading minors k+1 for 1<=k<n, and the parabolic A_(n-1) isomorphic to S_n via the actual intrinsic parabolic/type-A supplier clauses (2),(4), including n=2. Retained the reader's corrected Michel locator. Found and corrected an additional inaccurate Davis attribution: Table 6.1 p.104 has spherical B_n and distinct Euclidean B_n~/C_n~, not two identical finite B_n/C_n diagrams. Inspected the downloaded PDF page visually; finite naming is supported by Michel p.3. Synchronized the manifest evidence.

CRITICAL review complete: n>=2 fixed throughout, the n=2 recurrence uses d0=1, and the single proper leading minor is 2. B/C equality is equality of finite Coxeter matrices under declared names; no equality of oriented root-system or affine diagrams is asserted. The A_(n-1) supplier applies to J={s1,...,s_(n-1)} and includes rank one/S2. Positivity follows from Sylvester and finite W from the previously reviewed criterion. Direct supplier uses remain valid; no AC.

Sources/dependencies: All dependencies already opened at actual cited sections; Michel classification preview p.3 and determinant computation p.13; freshly downloaded Davis PDF Table 6.1 p.104 visually inspected and Table C.1 p.436 checked.

Next action: Continue the next routed carrier in dependency order; final local checks pending.

## ex-cg-dihedral-gram-determinants-and-low-rank-coincidences (touched:13:ex-cg-dihedral-gram-determinants-and-low-rank-coincidences)

reviewed_no_defect: The reader added the exact trigonometric positivity citation already declared in dependencies and normalized bibliographic locators; this is citation/audit enrichment without a mathematical defect. Current argument independently checked: det B=1-c^2=sin^2(pi/r)>0 for finite r>=3, exact product order r, image elements A^k and rho(s)A^k distinguished by determinants +1/-1, faithfulness giving |W|=2r; infinity has a nonzero radical vector and infinite-order unipotent product. Synchronized manifest source/fact and proof evidence.

CRITICAL review complete: smallest finite r=3, m=2 only in the explicitly extended disconnected convention (order4), and rank-one presentation (order2) are covered separately. Infinity means c=1 and gives kernel e_s+e_t, not a limit argument. Normal forms follow from cancellation in two involutions; exact r rotations plus determinant separation give exactly 2r elements, including odd r. Faithfulness is attributed to the root-length theorem, descent only to its actual supplier. Naming coincidences identify systems; no crystallographic or AC assumption.

Sources/dependencies: Current exact citations were opened in prior supplier reviews; Davis Example3.5.2 p.42, rank-two determinant p.435 and TableC.1 p.436, Michel p.3/p.13.

Next action: Continue the next routed carrier in dependency order; final local checks pending.

## ex-cg-h3-and-h4-gram-determinants-and-principal-minors (touched:13:ex-cg-h3-and-h4-gram-determinants-and-principal-minors)

amended_repair: Checked the full cosine derivation, normalized d3=(3-sqrt5)/8 and d4=(7-3sqrt5)/32, and the repaired det(2C)=16 d4. H3's three two-vertex minors are 3,(5-sqrt5)/2,4; all one-vertex minors are 2. The proper-submatrix qualifier now avoids the false full-rank assertion. Verified both negative path determinants and the explicit negative star vector. Clarified Michel's scaled Cartan-matrix convention in its locator and synchronized the manifest's stale strategy.

CRITICAL review complete: determinant scaling is 2^n, so H4 uses16, not32; the edge-5 minor is computed in C then scaled by4. Cosine root selection uses positivity and excludes the negative quadratic root. Positivity of H determinants uses sqrt5<3 and45<49, not decimal approximations. Negative paths 3,5,3 and3,3,5,3 have respectively (3-2sqrt5)/16 and (3-3sqrt5)/32 in C; the star vector has value(1-sqrt5)/8<0. Non-leading disconnected H3 minor is4. Proper submatrices only invoke smaller-rank blocks. No AC or crystallographic realization required.

Sources/dependencies: Exact cited supplier sections checked; see contract citation records.

Next action: Continue the next routed carrier in dependency order; final local checks pending.

## ex-cg-path-determinant-recursion-and-arm-inequality (touched:13:ex-cg-path-determinant-recursion-and-arm-inequality)

amended_repair: Retained the reader's positive-definiteness qualification on the strict path constraint, corrected weighted-arm diagonal sum, p=1 endpoint, and conditional strict projection comparison. Independently verified the two-subpath determinant induction (j=1,2,>=3), and both directions of the star criterion via the complete square alpha^2(1-mu)+mu(gamma+alpha)^2+B(z,z). Synchronized the stale manifest Statement/strategy to those essential hypotheses and derivations.

CRITICAL review complete: n=1 and d0=d1=1 are explicit; infinity is coefficient one and no undefined limit is used. A label6 split(1,2) gives equality/determinant zero, so strict inequality requires positivity. Arm p=1 coefficient identity is1. Arms are positive independently of the whole star, mu=sum p/(2(p+1))>0, and a nonpositive 1-mu gives the nonzero witness e_v-bar_w. Equality triples are exactly(2,2,2),(1,3,3),(1,2,5); no endpoint case is lost. For E6/E7/E8 the residual norms are1/12,1/24,1/60. The conditional strict projection bound follows only for positive whole B. The earlier same-companion witness is an allowed supplier. No AC.

Sources/dependencies: Exact cited supplier sections checked; see contract citation records.

Next action: Continue the next routed carrier in dependency order; final local checks pending.

## finite-coxeter-diagrams-and-complete-classification-examples (page:13:finite-coxeter-diagrams-and-complete-classification-examples)

amended_repair: Independently verified the owner-applied leaf qualification against the actual F10/Verification5.1 use of the cycle/arm example by the path example. No reference to the five examples was found in any item outside this companion. Checked every current page summary against the reviewed items. Found and repaired a separate summary typing error: the paragraph parameter is m, so its finite dihedral group order is 2m, not undefined 2r. Manifest order remains unchanged and the earlier same-page witness precedes its path consumer.

No mandatory HIGH/CRITICAL risk review for this carrier.

Sources/dependencies: Exact cited supplier sections checked; see contract citation records.

Next action: Continue the next routed carrier in dependency order; final local checks pending.

## finite-coxeter-diagrams-and-complete-classification-examples (reader:13:1)

confirmed_fatal: The historical literal claim that no other item depends on these examples is false: ex-cg-path-determinant-recursion-and-arm-inequality directly declares ex-cg-cycle-and-overlong-arm-nonpositive-witnesses and invokes its explicit (1,2,5) witness in F10 and Verification5.1. The recovered owner-before page contains that false claim; owner correction now permits earlier examples inside the companion and excludes only outside-item dependence. This confirms the historical finding, not a refutation of the corrected current bytes. Current example dependency order and all summaries independently reviewed.

No mandatory HIGH/CRITICAL risk review for this carrier.

Sources/dependencies: Exact cited supplier sections checked; see contract citation records.

Next action: Continue the next routed carrier in dependency order; final local checks pending.

## Consumer impacts and published scope

The reader's Statement changes in the exclusion and product lemmas were checked against all direct dependency/reference consumers found in current item carriers. The removed blanket witness wording is not used by an outside consumer; its actual cycle/path/arm claims remain available. Widening product hypotheses to arbitrary components preserves every existing disconnected-system use and now supports the connected finite-form use. The current affine enumeration explicitly restricts the strict chain/arm inequalities to positive-definite inputs, so no semidefinite strengthening is licensed. All these consumers are draft; no published defect was identified and no published carrier or canonical published ledger was edited. Existing outside owner-held escalations in their Remarks are not cleared by this use review. No outside consumer edit, further impact hop, withdrawal, new page or added item is required.

Outside consumers checked at the actual supplier-use paragraphs:

- `def-cg-bipartite-coxeter-element-and-root-recursion`
- `def-cg-coxeter-noncrossing-poset-and-kreweras-map`
- `def-cg-finite-reflection-arrangement-and-spherical-chambers`
- `ex-cg-reducible-semidefinite-forms-are-factorwise`
- `ex-cg-right-angled-cube-davis-complex`
- `lem-cg-affine-diagram-enumeration`
- `lem-cg-basic-degrees-independent-and-coinvariant-series`
- `lem-cg-coxeter-elements-are-conjugate-via-source-sink-moves`
- `lem-cg-integer-pairings-and-allowed-dihedral-labels`
- `lem-cg-steinberg-bipartite-root-enumeration`
- `lem-cg-uniform-omega-positive-and-aligned-sortability`
- `thm-cg-crystallographic-finite-type-and-lattice-stability`
- `thm-cg-finite-chamber-tiling-and-coset-face-identification`
- `thm-cg-finite-poincare-exponent-product-and-reciprocity`
- `thm-cg-noncrossing-finite-lattice-and-conjugacy-independence`
- `thm-cg-parabolic-growth-factorization-and-rationality`
- `thm-cg-regular-coxeter-eigenvectors-determine-basic-degrees`

The 31 owned rows in `research/frontier-42-coxeter-32-batch-13.cross-batch-dependencies.json` now contain current exact-use evidence and verified interface dispositions. Corrected their explanatory distinction between rank-two product order r (supplied) and group order 2r (proved in the owned example), and between supplied chamber nonemptiness and locally derived openness. The matching batch-13 record was appended to `briefs/tasks/frontier-dependency-ledger.md`; no proposed withdrawal or another batch's record was changed.

## Historical evidence limits

All ten item raw SHA256 values initially matched the immutable post-reader snapshot; pre and post hashes differ for every routed item. Current proofs and cited supplier statements were reviewed independently. The existing batch manifest supplied the pre-repair mathematical statements/strategies (including the explicit incorrect cofactor contribution), and the native reader report supplied the recorded weighted-arm, scaling, hypothesis and citation defects. No complete byte-for-byte pre-reader item preimage was recovered from HEAD, so this report does not claim a complete historical textual diff or invent one. The accepted mathematical corrections are justified by the actual current arguments and the explicit recorded counterexamples/earlier mirrors; this is not a current-content exception or a replacement for any unresolved historical escalation.

The page's exact recovered before file matches its immutable pre-reader raw hash, and the owner authority's literal replacement reproduces the post-reader page. This confirms the erroneous literal and the repair's provenance. It cannot prove the reader saw those exact bytes. Both page/finding decisions retain `historical_delta_unknown: true` and the explicit authority-backed owner resolution; reader:13:1 remains a confirmed historical fatal finding, not a false-positive claim about the corrected current page.

## Final local checks and disposition

- Initial risk-report on the owned contract: ten routed items, nine CRITICAL items. Their specific complete risk reviews were recorded in dependency order; final `--require-reviewed` returned zero errors.
- `node tools/proof-contract.mjs research/frontier-42-coxeter-32-batch-13.proof-contracts.json --strict`: zero errors, zero warnings, 10/10 items checked after all contract/manifest changes.
- Reflow on the three Alpha-edited item files reported all unchanged; batched precheck passed 3/3 proofs.
- Rendercheck on the ten batch items and both pages: twelve files, zero errors; actual KaTeX and renderer YAML checks succeeded.
- Exact rational Gaussian elimination independently checked doubled D4/D7/E6/E7/E8 determinants 4,4,3,2,1 and zero for the three equality stars. Twenty weighted-arm sums, the label-six split (1,2) equality, and residual values 1/12,1/24,1/60 for E6/E7/E8 passed.
- After all final item edits and reflow, one batched `node tools/proof-layout.mjs items/ex-cg-cycle-and-overlong-arm-nonpositive-witnesses.md items/ex-cg-bn-and-cn-are-the-same-coxeter-diagram.md items/ex-cg-h3-and-h4-gram-determinants-and-principal-minors.md` passed: three items, fifteen steps, zero defects. No item edit followed it.
- Local exact-coverage checks confirmed twelve unique owed decisions: ten touched, one page, one reader; zero flagged findings. Eighteen unique confirmed defects have closed batch-13 ledger rows at `5a-adjudicate`; every completed repair has confidence 1 and reader:13:1 references exactly one row. The first coverage-output sentence mistakenly hardcoded seventeen; the computed reference count was eighteen, and the final count was independently corrected here.

Disposition: eight amended item repairs, two clean metadata/audit-enrichment item reviews, one amended page repair, and one confirmed-fatal reader finding. Alpha mathematical body proofs were retained; edits to the three items are source descriptions only. Manifest statements/dependencies/sources/strategies were synchronized with the reviewed reader repairs, the B-page parameter was corrected to 2m, and owned risk/dependency/defect evidence was updated. No unresolved local mathematical prerequisite or blocker remains. Foundational supplier proofs were not recursively re-audited; only their actual cited statements were checked, with the root-length/faithfulness and collision proofs additionally read. No agent was dispatched, judge cycle run, judgment stamped, acceptance self-certified, gate battery run, commit made or engine state changed. The engine owns current hash stamping and independent gates.

Next action: hand off the task-named report and decisions to the engine for its normal adjudication checks and Step 5b routing.
