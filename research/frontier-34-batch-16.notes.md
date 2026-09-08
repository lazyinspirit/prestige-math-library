# frontier-34 · beta · batch 16

**BLOCKED / NOT READY / UNPUBLISHABLE.** This is a populated proof-obligation scaffold, not approval of mathematical closure. In particular, the polynomial-size assignment tester has not been established by the exponential-table construction. All requested mathematical targets are retained. Do not advance this batch on the strength of structural gate passes.

## Authority and changes

Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, the batch task, the current plan and the complete TC-32 and TC-34 designs. Only this note, `frontier-34-batch-16.pages.json`, and `frontier-34-batch-16.coverage.json` are authorized outputs. No published page/item, plan, prose design, driver state or other batch was edited. The initial manifest had four empty inventories; coverage and notes did not exist. The manifest now has 19/4 items for IP and 41/4 for gap amplification, all with explicit dependency arrays. Both A inventories are below the plan limit of 60. Every design item is retained; additions are proof intermediates and two diagnostic B items. Each page carries an explicit blocked scaffold marker.

Current plan metadata controls: orders 643/644 and 647/648, category, page IDs and required pages agree with the dispatch/design. No metadata conflict was found. TC-34 at L1386 controls both supplied gap locations: L1413 lies in that same section, not an alternative design. The named design sources are scouting guidance, not evidence of having read them. The January 2007 Arora–Barak draft places the relevant PCP proof in Chapter 18 and BLR proof in Chapter 19; locators for the printed edition's Chapters 11/21/22 must not be copied onto this draft. Bun's complete lecture and Guruswami's complete relevant course-note sections supplement the book and Dinur; MIT/Sipser are not falsely claimed as read.

Run identity was checked against `.autopilot/frontier-34/` and git history, not old RESUME claims. Observed HEAD was `4501527a0` (driver author-model change), with frontier-33 publication at `f854a7b88`. This is a scaffold dispatch, not an LLM instruction to drive transitions. Other run artifacts are concurrently present; whole-run gate results below are snapshots.

## Fatal/open obligations

1. **Complete mathematical transitive audit is not finished.** The structural traversal and selected full item readings below do not verify every hypothesis, convention, proof and axiom in thousands of inherited items. Inherited draft-status items include TQBF completeness and PSPACE complement closure. Their files exist, but that is not publication evidence. Do not infer approval from IDs resolving or from a published page containing them.
2. **Raw-input proximity and composition require complete local proofs.** `lem-gap-raw-input-comparison`, `lem-gap-bounded-input-assignment-tester`, `lem-gap-tester-query-constraint-conversion`, and especially `lem-gap-proximity-preserving-tester-composition` are open quantitative obligations. Arora–Barak Corollaries 18.25–18.26 test encoded-input proximity. Dinur §9 invokes [11, Theorem 3.7] for composition rather than proving it there. That external theorem's complete proof was not fetched/read in this session and is NOT an authorized supplier. Until the local lemmas are proved with the designated inputs, weights, alphabet and rejection ratio tracked, `lem-gap-rejection-ratio-amplification`, `thm-constant-query-assignment-tester` and `lem-tester-size-and-construction-time-are-polynomial` are blocked. The manifest is an inventory of obligations, not a claim that writing these IDs solves them.
3. **Powering adaptation needs final verification.** The proposed enlarged-neighborhood, middle-window proof below avoids undefined opinions and rounding a small bad-edge set to zero. The central-window comparison, constants and full arbitrary-opinion second moment have not yet been written and checked as complete proofs. Fixed-label walk hitting alone is insufficient. This blocks `lem-powering-amplifies-small-gaps` and its consumers.
4. **Source-byte verification failed for every source entry.** The web reader opened full PDFs and relevant text was read; shell URL/fetch gates failed DNS for every host. No byte counts, hashes, fetch stamps, or live-header records have been invented. Source backing therefore remains failed. Restoring access to the same full texts and rerunning the fetch gates is required before readiness.
5. **Whole-run content policy failed outside this ownership.** The exact 100 diagnostics are preserved below. The owned-only content-policy run passed. No out-of-scope repairs were attempted.

No new prerequisite A/B pair has yet been shown necessary: the added local obligations fit inside the owned A page (41 < 60), in proof order, without requiring the later PCP page. In particular do not add `alphabet-reduction-and-the-pcp-theorem` as a supplier: it already requires this page and would create a cycle. If proving the open composition machinery forces a split, the split and its plan/design entries must be established before this consumer is released; no speculative new pair is being represented as a completed prerequisite.

## IP statements and proof route

Use the library's prenex TQBF convention (`def-quantified-boolean-formula-and-tqbf`). Bound variables must be distinct (alpha-renaming can be handled inline). Check the existing TQBF-completeness proof's encoding/prenex conversion in the remaining inherited audit; the proof builds a recursively quantified reachability formula, so matching the stated language cannot be assumed from its ID.

For a matrix polynomial P over a field, use negation 1-P, conjunction PQ and disjunction P+Q-PQ. For eliminating x use A_x P=P(0)P(1) and E_x P=P(0)+P(1)-P(0)P(1). These give exact 0/1 values on Boolean inputs in every characteristic. Do not use an unqualified nonzero-sum test for existential quantification over a small-characteristic field: 1+1=0 in characteristic two. Multilinearization is L_x P=(1-x)P(0)+xP(1); it preserves Boolean restrictions and reduces only the selected degree.

`lem-qbf-degree-reduction-schedule`: for syntax length s and n variables, first multilinearize the matrix in all n variables, then eliminate variables from the inside out, multilinearizing every remaining variable after each elimination. The number of operators is R=n+n+n(n-1)/2, and every individual degree encountered is at most D=max(s,2). After the initial reduction, each quantifier takes individual degrees at most one to at most two, and each following L restores them to one. The coefficient expansion can be exponentially large; the verifier must never construct it. Initial matrix evaluation is O(s) field operations by syntax recursion, supplied by `lem-formula-arithmetization-degree-and-evaluation-cost`.

`lem-shamir-uniform-binary-extension-field`: choose r with q=2^r>6RD (handle constant/no-variable formulas directly). Enumerate monic degree-r binary polynomials and test divisibility by all monic polynomials of degree at most floor(r/2). Existence of an irreducible in every degree and the polynomial quotient criterion make the first successful quotient a field. Since r=O(log(s+2)), even this brute-force construction is polynomial in s; field elements are r-bit strings. Addition, multiplication and modular reduction have polynomial bit cost; exact uniform sampling uses r fresh fair bits, with no variable-time rejection sampler. The two algebraic dependencies were read in full, but the full inherited proof closure still needs the audit in obligation 1.

`def-shamir-protocol-for-tqbf`: reverse the operator schedule starting from the claim that the final scalar is 1. To remove an operator on x, receive a coefficient list for the univariate restriction of its input polynomial, of the predetermined degree bound. Reject malformed/overlong lists. Check the appropriate endpoint identity: product for A, Boolean OR polynomial for E, interpolation at the current x-coordinate for L. Only then select and reveal a fresh uniform r_x and replace the current claim by the supplied polynomial evaluated at r_x. Removed quantifier variables enter the partial assignment; an L step replaces the old coordinate. Finally evaluate the original matrix polynomial directly and compare. The prover is computationally unbounded; verifier time, randomness, messages and rounds are polynomial.

For soundness condition on every transcript before the next random challenge. If the current claim is false and the endpoint identity passes, the supplied polynomial differs from the genuine restriction. At most D of q field elements can make the next claim true. Thus the probability of a false claim becoming true anywhere is at most RD/q<1/6. If it never becomes true the terminal direct evaluation rejects. The item title mentioning a root-bound probability must not be read as claiming that a false claim *remains false* with probability at most D/q; that is the complementary event. Perfect completeness follows from exact operator identities for the honest coefficient lists.

Pull back the TQBF protocol along polynomial-time many-one reductions, including output length and malformed-input handling, to obtain PSPACE ⊆ IP. Use the published `thm-ip-is-contained-in-pspace` for the reverse inclusion; its hidden-coin transcript-game argument is essential. Complement closure uses deterministic PSPACE complement closure. Perfect completeness is a language-class consequence of the perfectly complete TQBF protocol, not a claim that any supplied protocol can be converted while preserving its rounds.

B obligations: multilinearize x²y+3xy² to 4xy, with equal values on the Boolean cube over the chosen field; exhibit Y^(2^k) from k dummy universal products without reductions; an unchecked false constant matrix with no quantifiers already defeats a verifier omitting the final check. The perfect-completeness example traces a fixed polynomial reduction and checks its bit-cost bound rather than merely restating the theorem.

## Gap statements, conventions and proof route

Use normalized unsatisfaction, edge multiplicity, and reverse-paired edge slots from the earlier expander page. A loop contributes two slots; uniform sampling of oriented slots gives the same unsatisfied fraction as uniform unoriented edges. Empty edge sets have unsatisfaction zero. All algorithmic constants are uniform; parameters such as powering length and alphabet size are fixed before input size grows.

The earlier page supplies genuine quantitative cloud machinery. For m>0 edges the occurrence-cloud graph has 2m vertices, degree 129 and 129m edges. Its internal expansion constant is h0=7/10, with K=20/7. For any cloud labeling, U_internal ≥ h0 S/2 for S nonplurality ports, while decoding violates at most U_external+S original constraints. Thus UNSAT(G)/(129K) ≤ UNSAT(G1) ≤ UNSAT(G)/129; the per-labeling decoding inequality is also needed, not merely the optimum-value inequality. The tautological expander overlay has degree 387, 387m edges and contraction rho2=(259+128rho0)/387<1, with gap bounds UNSAT(G)/(387K) and UNSAT(G)/387. These are the actual local constants, not Dinur's differently normalized symbols.

To make the normalized transition exactly (I+M2)/2 in the library slot convention, duplicate every G2 edge and add 387 tautological loops per vertex. This yields degree 1548, half the probability mass stationary, and halves unsatisfaction. Nonloop bad-edge-return estimates then apply with a fixed contraction alpha<1. No constraint is made false by these padding loops.

`def-constraint-graph-powering` is a binary endpoint-local-opinion construction, not the earlier `def-graph-power-and-walk-constraint`, whose walk constraint has arity t+1. A proposed convenient variant uses length 2t+1 walks and endpoint labels containing opinions on every vertex within radius 2t+1, with unused positions padded to a uniform alphabet. A binary predicate checks agreement of available opinions and the original constraints along the walk. Every value actually inspected must have a defined coordinate, including revisits, parallel slots and loop walks. Alphabet size is at most |Σ|^(1+d+...+d^(2t+1)); output edge count and construction cost are O(n d^(2t+1)) for fixed d,t, with explicit predicate tables of constant size. Global satisfying labels induce perfectly satisfying opinion labels.

Decode each original vertex by plurality of opinions reached by a t-step stationary reversible walk. Central-window binomial comparison, using exact laziness, must prove a uniform positive probability of seeing this plurality at lengths t+O(sqrt(t)), with the window constant depending on |Σ|. For a stationary length-(2t+1) path, let Z count middle positions where the decoded labeling violates the edge and both endpoint opinions detect its decoded values. Conditional independence of the path before/after that edge gives E Z ≥ c sqrt(t) ε for decoded bad-edge fraction ε. The published return estimate bounds E Z² by C sqrt(t) ε (1+sqrt(t) ε). Cauchy–Schwarz gives Pr[Z>0] ≥ (E Z)²/E Z². Derive at least the needed c' sqrt(t) min(ε,1/t), with fixed constants and sufficiently large t; do not assert amplification for arbitrary t without its parameter restriction. Using the full bad-edge set in this argument avoids a hidden floor(m/t)=0 case. This is a proposed adaptation, not yet a certified proof (obligation 3).

The source's fixed-label bad-edge hitting proposition alone does not imply any of these arbitrary-opinion conclusions. This precise inadequacy motivated the new central-window, first-moment and second-moment items.

### Code construction

A code here means an injective, uniformly polynomial-time encoder of K bits into O(K) bits with a fixed positive relative Hamming distance. It need not be linear, locally decodable, or computable at individual coordinates in polylogarithmic time. Do not call the full Hadamard code constant-rate: r input bits produce 2^r bits.

One elementary variant of Guruswami's concatenation route uses a greedy *word* inner code, rather than enumerating all generator matrices. For r≥1, greedily choose 2^r distinct 16r-bit words at pairwise distance at least 2r. The Hamming-ball bound

    sum_{i<2r} binom(16r,i) <= 7^(2r) (1+1/7)^(16r) < 2^(9r)

follows by weighting the binomial expansion; the last inequality is an integer-power comparison. Fewer than 2^r chosen words exclude fewer than 2^(10r) candidates out of 2^(16r). Exhaustive word enumeration and distance checks take polynomial time in 2^r, though not polynomial time in r alone. This proves the required existence and construction directly rather than assuming the GV bound. The resulting code need not be linear; this is an explicit adaptation of the sourced concatenation method.

For K≥1 choose r≥1 minimally such that 2^r r/2≥K. Over F_(2^r), take a Reed–Solomon evaluation code of length q=2^r and dimension q/2, zero-pad the K-bit input into its coefficient representation, and concatenate with the inner code. The root bound gives outer relative distance at least 1/2; inner relative distance is at least 1/8, so the final distance is at least 1/16. Its length is 16rq≤128K (the minimality estimate is immediate for r≥2; K=1,r=1 separately). Field construction is the same elementary degree-r quotient search as above, reproved locally to avoid an unnecessary cross-pair dependency. No unproved Reed–Solomon decoding theorem is used. All word ordering, padding and small cases must appear in the eventual proofs.

### Assignment testing and its size

An assignment tester receives a circuit Φ with designated raw input variables X, retains X in its output, has perfect completeness, and for every raw assignment a and every auxiliary assignment rejects with probability at least ρ dist(a,SAT(Φ)). Use relative Hamming distance on X; define distance to an empty satisfying set as 1 and handle X empty explicitly. Fix a constant alphabet, constant query count and positive uniform ρ. Distinguish the input length, circuit gate count, proof table length, output constraints, randomness and construction time.

The local finite Fourier lemmas rebuild character orthogonality, inversion/Parseval and the cubic BLR identity, avoiding an additional requires edge to the sum-check page solely for its BLR theorem. Normalize averages by 2^(-n). For h=(-1)^f, acceptance=(1+sum_a hhat(a)^3)/2, and sum_a hhat(a)^2=1. The signed maximum coefficient bounds the cubic sum. When rejection is below 1/2 a nearest linear table is within that rejection probability; when rejection is at least 1/2 it still gives a constant-factor bound on distance (do not silently assume distance to a linear, rather than affine, function is always at most 1/2).

For a table δ-close to a linear function, f(z)+f(z+x) recovers the prescribed x-coordinate with error at most 2δ, because both z and z+x are uniform. This self-correction is indispensable at nonuniform tensor queries. If decoded tables encode u and M, the test compares (u·r)(u·s) with <M,r⊗s>. A nonzero M-u⊗u makes this fail with probability at least 1/4 by two applications of the nonzero-linear-form half-probability lemma, before subtracting the self-correction errors. Gate equations for AND, NOT and constants over F2 have degree at most two; random linear combinations detect a nonzero violation vector with probability 1/2. No circuit-to-quadratic reduction is accepted merely because the book leaves it as an exercise.

For m witness/gate bits, WH(u) and WH(u⊗u) contain 2^m and 2^(m²) positions. Enumerating the tests has exponential cost in m. The B diagnostic records this bound. For fixed m it is a fixed constant, which is why it can be used inside a bounded-input composition. It is NOT the proof of the requested polynomial-size theorem for growing circuits.

The extra route from Dinur §9 retains raw X, attaches comparisons through occurrence clouds and powered opinions, and uses a dichotomy: either the decoded raw assignment is near a (so it remains far from SAT), or a positive fraction of the comparison tests fail. The source's displayed saturation step must use monotonicity of min(1/t,·), not assume the decoded unsatisfaction is below ε. Composition must then restore the fixed alphabet while retaining this guarantee. The raw-input preservation, relative weights (uniform inputs versus nonuniform cloud sizes), conversion to unweighted edge multiplicities and polynomial size all need a proved construction. Merely taking a common denominator without a polynomial bound is unacceptable. These are the open obligations in item 2.

Once a LOCAL composition/amplification theorem supplies ρ'≥min(2ρ,ρ0) and a fixed multiplicative output/time factor C, start with an inverse-polynomial gate tester and iterate O(log n) times. Output/time is at most n C^(O(log n))=poly(n). This proves the intended strong polynomial theorem only after the intervening lemmas, without assuming the downstream PCP theorem. Repeating every constraint k times leaves both optimum unsatisfied count and total count multiplied by k, hence the gap unchanged; this supplies the required counterexample.

## Dependency evidence and limits

Selected complete item readings covered: the QBF definition and TQBF-completeness proof; formula arithmetization degree/evaluation and quantifier degree lemmas; the definition of IP and its PSPACE upper bound; finite-field existence, irreducibles in every degree and the polynomial quotient field criterion; BLR definition and Fourier soundness; expander slot conventions, cloud plurality, regularization, overlay, fixed/moving bad-set estimates, bad-edge return, and the ordinary higher-arity graph-power definition. The exact uses and incompatibilities are recorded above.

The scripts traversed page prerequisites from both pairs through current plan/published pages, collected inherited items, and followed `deps`, `justified_by`, and conservatively all `forward_refs` for reachability. A separate DFS used `deps` alone for logical cycles: a definition pointing via `justified_by` to a theorem that uses the definition is not by itself a circular proof. The first scratch parser used an incorrect separator split and failed, then a parser handling complete frontmatter delimiter lines succeeded; no failed-parser output is evidence of a repository defect.

All 376 historical `research/*.pages.json` files were parsed/indexed. The four owned pages occur only in this run's batch-16 manifest. This is an inventory scan, not a completed comparison of every historical statement with current authored content. No owned ID collides with an existing item file, no local forward edge or missing dependency ID was found, and the direct imported item homes are within each page's prerequisite closure. The no-catalogue traversal conservatively follows all forward refs, but excludes `external_refs` as orientation; no path from these roots reached `deferred-set-theory-beyond-choice`. Repository-wide `extcheck` independently passed its Foundations boundary checks. None of this certifies all inherited axiom strength: that remains fatal obligation 1.

The successful structural summary, inventory digest and nonpublished statuses are appended below, as are the actual gate outputs. Scratch logs are in `/tmp/b16-*.log`; the durable records below do not depend on keeping those temporary files.

## Structural snapshot

Traversed 110 pages and 2753 item IDs. Missing pages/items: 0/0; deps cycles: 0; forbidden catalogue hits: 0; owned ID collisions: 0; local forward edges: 0; missing imported-home prerequisites: 0. Nonpublished inherited items: 93. Sorted item-ID inventory SHA-256: `9b0efb53308cd9558819485a1a9a98dea6dcf982073731e4095a62557e9e3a3b`. This is structural evidence only.

Page closure:

`absolute-convergence-and-rearrangement`, `algebraic-closure-embeddings-and-separability`, `algebraic-closure-embeddings-and-separability-examples`, `algebraic-extensions-degree-and-finite-fields`, `algebraic-extensions-degree-and-finite-fields-examples`, `arithmetization-and-the-sum-check-protocol`, `boolean-circuits-and-nonuniform-complexity`, `cantor-set-baire-and-measure-zero`, `chains-antichains-sperner-and-dilworth`, `compactness-in-metric-spaces`, `completeness-and-uniform-continuity`, `composition-series-and-solvable-groups`, `congruences-and-the-chinese-remainder-theorem`, `conjugacy-and-simplicity-in-the-symmetric-groups`, `construction-of-r-via-cauchy-sequences`, `construction-of-r-via-dedekind-cuts`, `construction-of-the-natural-numbers`, `continuity-ivt-evt-and-uniform-continuity`, `cosets-and-lagranges-theorem`, `countability-and-uncountability`, `cyclic-groups-and-direct-products`, `decidable-recognizable-and-enumerable-languages`, `determinants-of-matrices-over-a-commutative-ring`, `diagonalisation-and-the-minimal-polynomial`, `diagonalization-and-the-halting-problem`, `divisibility-gcd-and-bezout`, `dual-spaces-bilinear-forms-and-inertia`, `eigenvalues-eigenvectors-and-the-characteristic-polynomial`, `equivalent-forms-of-completeness`, `euclidean-domains-pids-and-unique-factorisation`, `eulerian-and-hamiltonian-graphs`, `expander-graphs-and-constraint-graphs`, `field-extensions-and-the-complex-numbers`, `filters-and-ultrafilters`, `finite-counting-and-binomial-coefficients`, `finite-fields-and-cyclotomic-extensions`, `finite-fields-and-cyclotomic-extensions-examples`, `finite-probability-spaces-and-random-variables`, `formal-languages-encodings-and-decision-problems`, `formal-laurent-series-field`, `formal-power-series`, `foundations-of-the-real-numbers`, `free-groups-and-presentations`, `gap-amplification-and-assignment-testing`, `gap-amplification-and-assignment-testing-examples`, `gaussian-elimination-and-row-reduction`, `graphs-walks-and-connectivity`, `group-actions-and-cayleys-theorem`, `group-homomorphisms-and-the-isomorphism-theorems`, `ideals-and-quotient-rings`, `inclusion-exclusion-and-the-pigeonhole-principle`, `inner-product-spaces-and-orthogonality`, `interactive-proof-systems-and-public-coins`, `limits-of-real-functions`, `limsup-and-subsequential-limits`, `linear-independence-bases-and-dimension`, `linear-maps-rank-nullity-and-quotient-spaces`, `linear-recurrences-and-rational-generating-functions`, `logarithmic-space-nl-and-reachability`, `matrices-and-the-matrix-of-a-linear-map`, `metric-spaces`, `monoids-groups-and-subgroups`, `monotone-functions-and-discontinuities`, `monotone-sequences-and-cauchy-completeness`, `normal-subgroups-and-quotient-groups`, `order-zorn-and-the-axiom-of-choice`, `p-np-conp-and-polynomial-reductions`, `polynomial-rings-and-roots`, `power-series-and-real-analytic-functions`, `primes-and-the-fundamental-theorem-of-arithmetic`, `properties-of-the-integral-and-the-working-ftc`, `randomized-complexity-and-amplification`, `relations-functions-and-quotients`, `resource-bounds-and-machine-invariance`, `rings-subrings-and-integral-domains`, `rn-as-a-normed-space`, `robust-machine-models-and-universal-computation`, `roots-and-rational-powers`, `semidirect-products-and-automorphism-groups`, `sequences-and-limits`, `series-and-nonnegative-tests`, `solvability-by-radicals-and-kummer-theory`, `space-complexity-savitch-and-tqbf`, `splitting-fields`, `suprema-and-infima`, `sylow-theorems-and-nilpotent-groups`, `symmetric-groups-and-the-sign-homomorphism`, `symmetric-polynomials`, `the-cook-levin-theorem`, `the-derivative-and-mean-value-theorems`, `the-determinant-of-a-linear-operator`, `the-exponential-function`, `the-field-of-fractions-and-localisation`, `the-fundamental-theorem-of-algebra`, `the-galois-correspondence`, `the-galois-correspondence-examples`, `the-ip-equals-pspace-theorem`, `the-ip-equals-pspace-theorem-examples`, `the-logarithm-and-general-powers`, `the-riemann-integral`, `the-spectral-theorem-and-singular-value-decomposition`, `the-structure-of-finite-abelian-groups`, `the-zfc-axioms-and-basic-set-constructions`, `time-and-space-hierarchy-theorems`, `topology-of-r`, `trees-forests-and-spanning-trees`, `triangularisation-and-jordan-canonical-form`, `turing-machines-configurations-and-computation`, `uniform-convergence-of-functions`, `vector-spaces-and-subspaces`

Nonpublished inherited IDs (status needs reconciliation; no automatic mathematical rejection is inferred solely from the status):

`cor-pit-is-in-corp`, `cor-pspace-equals-npspace-and-is-closed-under-complement`, `def-alternating-polynomial-time`, `def-asymptotic-resource-comparison`, `def-boolean-formula-cnf-and-sat`, `def-bounded-computation-tableau`, `def-bounded-reachability-recursion`, `def-church-turing-thesis`, `def-computably-enumerable-set`, `def-configuration-graph`, `def-decision-search-and-function-problem`, `def-dovetailing-schedule`, `def-initial-accepting-and-rejecting-configurations`, `def-local-tableau-window`, `def-pairwise-independent-hash-family`, `def-polynomial-identity-testing`, `def-probabilistic-polynomial-time-machine`, `def-pspace-and-npspace`, `def-quantified-boolean-formula-and-tqbf`, `def-quantified-formula-game`, `def-random-access-and-register-machine-programs`, `def-reachable-configuration-formula`, `def-rp-corp-zpp-bpp-and-pp`, `def-time-and-space-constructible-function`, `def-tseitin-extension-variable`, `fs-a-language-is-a-set-of-symbols`, `fs-every-countable-language-is-decidable`, `fs-every-effective-encoding-is-prefix-free`, `fs-model-invariance-means-equal-step-counts`, `fs-nondeterministic-acceptance-requires-every-branch-to-halt`, `fs-pp-has-bounded-error-away-from-one-half`, `fs-recognizable-means-total`, `fs-rejection-is-divergence`, `fs-reusing-random-bits-amplifies-success`, `fs-savitch-stores-the-whole-configuration-graph`, `fs-time-bounds-never-need-constructibility`, `fs-universality-decides-halting`, `lem-acceptance-is-configuration-reachability`, `lem-affine-finite-field-hashes-are-pairwise-independent`, `lem-bounded-reachability-recursion-is-correct`, `lem-bounded-reachability-uses-logarithmic-recursion-depth`, `lem-chernoff-bound-for-bernoulli-trials`, `lem-clocked-machine-construction`, `lem-computation-words-agree-with-published-finite-words`, `lem-cook-levin-formula-is-satisfiable-iff-acceptance-occurs`, `lem-cook-levin-map-is-polynomial-time`, `lem-deterministic-nonhalting-configurations-have-unique-successors`, `lem-dovetailing-reaches-every-finite-stage`, `lem-exactly-one-symbol-constraints-have-polynomial-size`, `lem-induced-word-map-has-the-free-extension-property`, `lem-kleene-star-has-the-expected-least-closure-property`, `lem-language-concatenation-is-associative`, `lem-legal-tableaux-iff-all-local-windows-and-boundaries-are-legal`, `lem-majority-error-bound-from-chebyshev`, `lem-quantifier-reuse-keeps-reachability-formulas-polynomial`, `lem-reversal-is-an-involution-and-reverses-concatenation`, `lem-space-bounded-machines-have-exponentially-many-configurations`, `lem-start-accept-and-transition-constraints-have-polynomial-size`, `lem-tableau-cell-alphabet-is-constant`, `lem-time-bounds-imply-space-bounds`, `lem-tseitin-transformation-is-linear-size-and-equisatisfiable`, `prop-polynomial-time-and-space-are-model-invariant`, `prop-polynomially-related-encodings-preserve-polynomial-classes`, `prop-sat-is-in-np`, `prop-tqbf-is-in-pspace`, `prop-valid-computation-histories-are-decidable`, `rem-model-equivalence-supports-but-does-not-prove-the-thesis`, `thm-adleman-bpp-is-contained-in-p-poly`, `thm-ap-equals-pspace`, `thm-bpp-amplification-to-exponentially-small-error`, `thm-bpp-amplification-to-inverse-polynomial-error`, `thm-cook-levin-sat-is-np-complete`, `thm-decidable-languages-are-closed-under-boolean-operations`, `thm-domains-and-ranges-of-partial-computable-functions-are-ce`, `thm-every-ce-set-is-a-domain`, `thm-freivalds-matrix-product-verification`, `thm-infinite-ce-sets-have-computable-injective-enumerations`, `thm-multitape-to-single-tape-space-simulation`, `thm-multitape-to-single-tape-time-simulation`, `thm-nondeterministic-and-deterministic-recognizability-agree`, `thm-one-way-and-two-way-tapes-are-equivalent`, `thm-ram-register-and-turing-computability-agree`, `thm-recognizable-iff-enumerable`, `thm-recognizable-languages-are-closed-under-union-and-intersection`, `thm-rp-one-sided-amplification`, `thm-savitchs-theorem`, `thm-schwartz-zippel-lemma`, `thm-stay-put-moves-can-be-eliminated`, `thm-three-sat-is-np-complete`, `thm-tqbf-is-pspace-complete`, `thm-tqbf-truth-iff-existential-player-has-a-winning-strategy`, `thm-universal-simulation-with-logarithmic-overhead`, `thm-zpp-equals-rp-intersection-corp`

## Checks actually run

### coverage — exit 0

`node tools/coverage-checklist.mjs research/frontier-34-batch-16.coverage.json --require-destination`

```text
WARN coverage-low-yield [the-ip-equals-pspace-theorem]: frontier-34-batch-16.coverage.json: the-ip-equals-pspace-theorem: 5/13 harvested results scaffolded; confirm the declines with Alpha
coverage-checklist: 2 page(s), 68 harvested result(s), 0 error(s), 1 warning(s)
```

### manifest-deps — exit 0

`node tools/manifest-deps.mjs research/frontier-34-batch-*.pages.json`

```text
manifest-deps: 770 item(s), 0 normalized, 0 error(s)
```

### content-policy — exit 1

`node tools/content-policy.mjs --manifest-only research/frontier-34-batch-*.pages.json`

```text
ERROR batch-item-already-exists [def-tensor-product-total-complex-of-chain-complexes]: def-tensor-product-total-complex-of-chain-complexes already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [lem-the-tensor-total-differential-is-well-defined-and-squares-to-zero]: lem-the-tensor-total-differential-is-well-defined-and-squares-to-zero already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [def-tor-by-resolving-the-left-module]: def-tor-by-resolving-the-left-module already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [def-tor-by-resolving-the-right-module]: def-tor-by-resolving-the-right-module already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-tor-zero-is-the-tensor-product-in-either-construction]: prop-tor-zero-is-the-tensor-product-in-either-construction already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-each-tor-construction-is-covariant-in-both-variables]: prop-each-tor-construction-is-covariant-in-both-variables already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-positive-tor-vanishes-when-the-resolved-variable-is-projective]: prop-positive-tor-vanishes-when-the-resolved-variable-is-projective already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [def-tensor-double-complex-of-two-projective-resolutions]: def-tensor-double-complex-of-two-projective-resolutions already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [def-left-and-right-flat-modules-over-an-arbitrary-ring]: def-left-and-right-flat-modules-over-an-arbitrary-ring already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [lem-projective-modules-are-flat-over-an-arbitrary-ring]: lem-projective-modules-are-flat-over-an-arbitrary-ring already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [rem-projective-modules-are-flat-is-supplied-by-mod-three]: rem-projective-modules-are-flat-is-supplied-by-mod-three already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [lem-the-rows-of-the-augmented-tensor-double-complex-are-exact]: lem-the-rows-of-the-augmented-tensor-double-complex-are-exact already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [lem-the-columns-of-the-augmented-tensor-double-complex-are-exact]: lem-the-columns-of-the-augmented-tensor-double-complex-are-exact already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic]: thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions]: prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [def-balanced-tor-bifunctor]: def-balanced-tor-bifunctor already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-long-exact-tor-sequence-in-the-left-module-variable]: thm-long-exact-tor-sequence-in-the-left-module-variable already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-long-exact-tor-sequence-in-the-right-module-variable]: thm-long-exact-tor-sequence-in-the-right-module-variable already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-tor-dimension-shifting]: prop-tor-dimension-shifting already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes]: thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes]: thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [cor-a-short-exact-sequence-stays-exact-after-tensoring-exactly-when-its-tor-boundary-obstruction-vanishes]: cor-a-short-exact-sequence-stays-exact-after-tensoring-exactly-when-its-tor-boundary-obstruction-vanishes already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion]: thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-tor-of-two-cyclic-abelian-groups]: thm-tor-of-two-cyclic-abelian-groups already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-higher-tor-over-the-integers-vanishes]: thm-higher-tor-over-the-integers-vanishes already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-torsion-free-abelian-groups-are-flat]: prop-torsion-free-abelian-groups-are-flat already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-over-a-pid-flat-is-equivalent-to-torsion-free]: thm-over-a-pid-flat-is-equivalent-to-torsion-free already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-tor-symmetry-over-a-commutative-ring]: thm-tor-symmetry-over-a-commutative-ring already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [def-flat-dimension-of-a-module]: def-flat-dimension-of-a-module already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-flat-dimension-at-most-n-iff-higher-tor-vanishes]: thm-flat-dimension-at-most-n-iff-higher-tor-vanishes already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [def-left-and-right-weak-global-dimension]: def-left-and-right-weak-global-dimension already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-weak-global-dimension-is-at-most-corresponding-global-dimension]: prop-weak-global-dimension-is-at-most-corresponding-global-dimension already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric]: thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-semisimple-rings-have-vanishing-positive-tor-and-ext]: prop-semisimple-rings-have-vanishing-positive-tor-and-ext already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-the-integers-have-weak-and-global-dimension-one]: prop-the-integers-have-weak-and-global-dimension-one already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [fs-tor-takes-two-left-modules-over-an-arbitrary-ring]: fs-tor-takes-two-left-modules-over-an-arbitrary-ring already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [fs-the-two-tor-constructions-are-equal-by-definition]: fs-the-two-tor-constructions-are-equal-by-definition already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [fs-flat-modules-have-projective-dimension-zero]: fs-flat-modules-have-projective-dimension-zero already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [fs-tor-one-vanishes-only-when-one-module-is-projective]: fs-tor-one-vanishes-only-when-one-module-is-projective already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [fs-tor-is-symmetric-over-every-noncommutative-ring]: fs-tor-is-symmetric-over-every-noncommutative-ring already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [fs-tor-one-of-r-mod-i-and-m-is-always-the-i-torsion-submodule-of-m]: fs-tor-one-of-r-mod-i-and-m-is-always-the-i-torsion-submodule-of-m already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [ex-tor-of-two-cyclic-groups-from-a-two-term-resolution]: ex-tor-of-two-cyclic-groups-from-a-two-term-resolution already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [ex-tor-detects-n-torsion]: ex-tor-detects-n-torsion already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [ex-a-flat-nonprojective-module]: ex-a-flat-nonprojective-module already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [ex-localization-is-flat-and-has-vanishing-positive-tor]: ex-localization-is-flat-and-has-vanishing-positive-tor already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [ex-the-tensor-double-complex-in-low-degrees]: ex-the-tensor-double-complex-in-low-degrees already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [ex-tor-symmetry-over-a-commutative-ring]: ex-tor-symmetry-over-a-commutative-ring already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [cex-a-noncommutative-handedness-error-in-tor]: cex-a-noncommutative-handedness-error-in-tor already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [ex-weak-dimension-and-global-dimension-for-a-field-and-the-integers]: ex-weak-dimension-and-global-dimension-for-a-field-and-the-integers already has an item file and cannot be minted by this future batch
ERROR batch-dependency-missing [fs-weak-mixing-implies-strong-mixing]: fs-weak-mixing-implies-strong-mixing depends on thm-chacon-transformation-is-weakly-mixing-but-not-mixing, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-translation-invariant-fourier-multiplier-on-schwartz-space]: def-translation-invariant-fourier-multiplier-on-schwartz-space depends on def-schwartz-space-and-its-seminorms, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-translation-invariant-fourier-multiplier-on-schwartz-space]: def-translation-invariant-fourier-multiplier-on-schwartz-space depends on def-tempered-distribution, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-translation-invariant-fourier-multiplier-on-schwartz-space]: def-translation-invariant-fourier-multiplier-on-schwartz-space depends on thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-translation-invariant-fourier-multiplier-on-schwartz-space]: def-translation-invariant-fourier-multiplier-on-schwartz-space depends on thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-translation-invariant-fourier-multiplier-on-schwartz-space]: def-translation-invariant-fourier-multiplier-on-schwartz-space depends on thm-fourier-translation-modulation-dilation-and-reflection-laws, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-ltwo-fourier-multiplier-bound]: lem-ltwo-fourier-multiplier-bound depends on thm-plancherel, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-ltwo-fourier-multiplier-bound]: lem-ltwo-fourier-multiplier-bound depends on lem-schwartz-space-is-dense-in-l-two, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-hausdorff-young-for-the-euclidean-fourier-transform]: thm-hausdorff-young-for-the-euclidean-fourier-transform depends on thm-plancherel, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-hausdorff-young-for-the-euclidean-fourier-transform]: thm-hausdorff-young-for-the-euclidean-fourier-transform depends on thm-l-one-l-two-agreement-of-fourier-transform, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-hausdorff-young-for-the-euclidean-fourier-transform]: thm-hausdorff-young-for-the-euclidean-fourier-transform depends on thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-hausdorff-young-for-the-euclidean-fourier-transform]: thm-hausdorff-young-for-the-euclidean-fourier-transform depends on def-fourier-transform-on-l-one-of-rn, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-weak-derivatives-are-polynomial-fourier-multipliers]: lem-weak-derivatives-are-polynomial-fourier-multipliers depends on thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-weak-derivatives-are-polynomial-fourier-multipliers]: lem-weak-derivatives-are-polynomial-fourier-multipliers depends on thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-weak-derivatives-are-polynomial-fourier-multipliers]: lem-weak-derivatives-are-polynomial-fourier-multipliers depends on thm-tempered-distributions-embed-continuously-in-distributions, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-weak-derivatives-are-polynomial-fourier-multipliers]: lem-weak-derivatives-are-polynomial-fourier-multipliers depends on def-weak-derivative-of-a-locally-integrable-function, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces depends on thm-plancherel, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces depends on thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces depends on def-sobolev-space-wkp-and-its-norm, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces depends on def-hk-and-hk-zero-notation, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces depends on def-real-order-bessel-potential-sobolev-space, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces depends on thm-bessel-potential-completions-embed-in-tempered-distributions, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces depends on lem-japanese-bracket-powers-preserve-schwartz-space, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces depends on thm-plancherel, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces depends on thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces depends on lem-schwartz-space-is-dense-in-l-two, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-bessel-potentials-shift-sobolev-order-isometrically]: lem-bessel-potentials-shift-sobolev-order-isometrically depends on lem-japanese-bracket-powers-preserve-schwartz-space, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-bessel-potentials-shift-sobolev-order-isometrically]: lem-bessel-potentials-shift-sobolev-order-isometrically depends on thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-schwartz-density-and-order-inclusion-in-hilbert-sobolev-spaces]: lem-schwartz-density-and-order-inclusion-in-hilbert-sobolev-spaces depends on lem-japanese-bracket-powers-preserve-schwartz-space, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-schwartz-density-and-order-inclusion-in-hilbert-sobolev-spaces]: lem-schwartz-density-and-order-inclusion-in-hilbert-sobolev-spaces depends on lem-schwartz-space-is-dense-in-l-two, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fractional-hilbert-sobolev-difference-quotient-characterisation]: thm-fractional-hilbert-sobolev-difference-quotient-characterisation depends on thm-plancherel, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fractional-hilbert-sobolev-difference-quotient-characterisation]: thm-fractional-hilbert-sobolev-difference-quotient-characterisation depends on thm-fourier-translation-modulation-dilation-and-reflection-laws, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fractional-hilbert-sobolev-difference-quotient-characterisation]: thm-fractional-hilbert-sobolev-difference-quotient-characterisation depends on lem-schwartz-space-is-dense-in-l-two, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [cex-translation-multiplier-need-not-satisfy-mihlin-derivative-bounds]: cex-translation-multiplier-need-not-satisfy-mihlin-derivative-bounds depends on thm-fourier-translation-modulation-dilation-and-reflection-laws, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [ex-negative-sobolev-order-containing-a-dirac-mass]: ex-negative-sobolev-order-containing-a-dirac-mass depends on thm-fourier-transform-of-delta-constants-plane-waves-and-polynomials, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [cor-birkhoff-strong-law-for-iid-coordinate-shifts]: cor-birkhoff-strong-law-for-iid-coordinate-shifts depends on thm-birkhoff-ergodic-theorem, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-topological-kunneth-short-exact-sequence-for-homology]: thm-topological-kunneth-short-exact-sequence-for-homology depends on thm-pid-kunneth-exactness-from-cycle-boundary-presentations, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [prop-the-homology-kunneth-sequence-splits-nonnaturally]: prop-the-homology-kunneth-sequence-splits-nonnaturally depends on thm-pid-kunneth-splitting-from-cycle-boundary-presentations, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-jacobian-criterion-affine-variety]: thm-jacobian-criterion-affine-variety depends on thm-ag-perfect-field-jacobian-regularity, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-regular-locus-is-open-variety]: thm-regular-locus-is-open-variety depends on thm-ag-perfect-field-jacobian-regularity, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-separating-hypersurface-chart-variety]: lem-separating-hypersurface-chart-variety depends on thm-ag-separating-transcendence-basis-perfect-field, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-nonempty-regular-locus-reduced-variety-perfect-field]: thm-nonempty-regular-locus-reduced-variety-perfect-field depends on thm-ag-perfect-field-jacobian-regularity, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-smooth-morphism-to-field-classical]: def-smooth-morphism-to-field-classical depends on thm-ag-field-extension-of-schemes, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-regular-equals-smooth-over-perfect-field]: thm-regular-equals-smooth-over-perfect-field depends on thm-ag-geometric-regularity-perfect-base, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-hypersurface-smooth-iff-multiplicity-one]: lem-hypersurface-smooth-iff-multiplicity-one depends on thm-ag-standard-smooth-geometric-regularity, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-smoothness-stable-under-product-classical]: lem-smoothness-stable-under-product-classical depends on thm-ag-standard-smooth-base-change-composition, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-smooth-morphism-classical]: def-smooth-morphism-classical depends on def-ag-standard-smooth-algebra, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-smooth-morphism-classical]: def-smooth-morphism-classical depends on thm-ag-standard-smooth-geometric-regularity, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-smooth-map-tangent-surjectivity-criterion]: lem-smooth-map-tangent-surjectivity-criterion depends on thm-ag-submersion-criterion-standard-smooth, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-dominant-map-generic-differential-surjectivity-char-zero]: lem-dominant-map-generic-differential-surjectivity-char-zero depends on thm-ag-field-differentials-separable-rank, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [cex-generic-target-smoothness-needs-smooth-source]: cex-generic-target-smoothness-needs-smooth-source depends on thm-ag-standard-smooth-geometric-regularity, which is neither declared by this batch nor an item on disk
content-policy: 770 scoped item(s), 100 error(s), 0 warning(s)
```

### content-policy-owned — exit 0

`node tools/content-policy.mjs --manifest-only research/frontier-34-batch-16.pages.json`

```text
content-policy: 68 scoped item(s), 0 error(s), 0 warning(s)
```

### validate-plan — exit 0

`node tools/validate-plan.mjs research/plan-spec.json`

```text
item lists written for 892/1471 planned pages — the rest are validated at PAGE level only
NOTE: 579 planned page(s) carry no item list yet (marked * above). Their reading
NOTE: 579 planned page(s) carry no item list yet (marked * above). Their reading
order is guaranteed; their item dependencies are not yet asserted, so re-run this
after writing each page's items.
```

### extcheck — exit 0

`node tools/extcheck.mjs`

63 pre-existing unproved-on-published warnings; no hard errors. No ledger-writing flag was used.

```text
63 warning(s):
OK — every recorded-not-proved statement is a cited remark with no proof, and every consequence is marked.
```

### url-sweep — exit 1

`node tools/url-sweep.mjs --coverage research/frontier-34-batch-16.coverage.json --out /tmp/b16-url-liveness.json --fail-on-dead --timeout-ms 3000`

```text
url-sweep: 0/4 live; 4 failed; 0 suspect -> /tmp/b16-url-liveness.json
FAIL 0 https://cs-people.bu.edu/mbun/courses/535_F23/lectures/lec22.pdf — curl: (6) Could not resolve host: cs-people.bu.edu
FAIL 0 https://theory.cs.princeton.edu/complexity/book.pdf — curl: (6) Could not resolve host: theory.cs.princeton.edu
FAIL 0 https://www.cs.cmu.edu/~venkatg/teaching/codingtheory/notes/notes6.pdf — curl: (6) Could not resolve host: www.cs.cmu.edu
FAIL 0 https://www.cs.umd.edu/~gasarch/TOPICS/pcp/dinur.pdf — curl: (6) Could not resolve host: www.cs.umd.edu
```

### source-backing — exit 1

`node tools/source-backing.mjs --coverage research/frontier-34-batch-16.coverage.json --liveness /tmp/b16-url-liveness.json`

```text
source-backing: 33 authored result(s) have no openable source left
ERROR backing-lost: the-ip-equals-pspace-theorem: thm-ip-can-be-given-perfect-completeness — backed only by https://theory.cs.princeton.edu/complexity/book.pdf
ERROR backing-lost: the-ip-equals-pspace-theorem: thm-ip-equals-pspace — backed only by https://theory.cs.princeton.edu/complexity/book.pdf
ERROR backing-lost: the-ip-equals-pspace-theorem: lem-qbf-degree-reduction-schedule — backed only by https://theory.cs.princeton.edu/complexity/book.pdf
ERROR backing-lost: the-ip-equals-pspace-theorem: lem-multilinearization-preserves-boolean-values — backed only by https://theory.cs.princeton.edu/complexity/book.pdf
ERROR backing-lost: the-ip-equals-pspace-theorem: thm-pspace-is-contained-in-ip — backed only by https://cs-people.bu.edu/mbun/courses/535_F23/lectures/lec22.pdf
ERROR backing-lost: gap-amplification-and-assignment-testing: lem-powering-amplifies-small-gaps — backed only by https://www.cs.umd.edu/~gasarch/TOPICS/pcp/dinur.pdf
ERROR backing-lost: gap-amplification-and-assignment-testing: lem-gap-lazy-expander-preprocessing — backed only by https://www.cs.umd.edu/~gasarch/TOPICS/pcp/dinur.pdf
ERROR backing-lost: gap-amplification-and-assignment-testing: def-explicit-constant-rate-constant-distance-code — backed only by https://www.cs.umd.edu/~gasarch/TOPICS/pcp/dinur.pdf, https://www.cs.cmu.edu/~venkatg/teaching/codingtheory/notes/notes6.pdf
ERROR backing-lost: gap-amplification-and-assignment-testing: def-assignment-tester-and-rejection-ratio — backed only by https://www.cs.umd.edu/~gasarch/TOPICS/pcp/dinur.pdf
ERROR backing-lost: gap-amplification-and-assignment-testing: def-constraint-graph-powering — backed only by https://www.cs.umd.edu/~gasarch/TOPICS/pcp/dinur.pdf, https://theory.cs.princeton.edu/complexity/book.pdf
ERROR backing-lost: gap-amplification-and-assignment-testing: lem-gap-plurality-first-moment — backed only by https://www.cs.umd.edu/~gasarch/TOPICS/pcp/dinur.pdf
ERROR backing-lost: gap-amplification-and-assignment-testing: lem-gap-opinion-hit-second-moment — backed only by https://www.cs.umd.edu/~gasarch/TOPICS/pcp/dinur.pdf
ERROR backing-lost: gap-amplification-and-assignment-testing: lem-gap-binomial-central-window-comparison — backed only by https://www.cs.umd.edu/~gasarch/TOPICS/pcp/dinur.pdf
ERROR backing-lost: gap-amplification-and-assignment-testing: lem-gap-rejection-ratio-amplification — backed only by https://www.cs.umd.edu/~gasarch/TOPICS/pcp/dinur.pdf
ERROR backing-lost: gap-amplification-and-assignment-testing: lem-gap-input-preserving-cloud-comparisons — backed only by https://www.cs.umd.edu/~gasarch/TOPICS/pcp/dinur.pdf
ERROR backing-lost: gap-amplification-and-assignment-testing: lem-gap-proximity-amplification-dichotomy — backed only by https://www.cs.umd.edu/~gasarch/TOPICS/pcp/dinur.pdf
ERROR backing-lost: gap-amplification-and-assignment-testing: lem-gap-proximity-preserving-tester-composition — backed only by https://www.cs.umd.edu/~gasarch/TOPICS/pcp/dinur.pdf
ERROR backing-lost: gap-amplification-and-assignment-testing: lem-tester-size-and-construction-time-are-polynomial — backed only by https://www.cs.umd.edu/~gasarch/TOPICS/pcp/dinur.pdf
ERROR backing-lost: gap-amplification-and-assignment-testing: lem-gap-bounded-input-assignment-tester — backed only by https://theory.cs.princeton.edu/complexity/book.pdf
ERROR backing-lost: gap-amplification-and-assignment-testing: def-hadamard-linearity-constraint-system — backed only by https://theory.cs.princeton.edu/complexity/book.pdf
ERROR backing-lost: gap-amplification-and-assignment-testing: thm-linearity-test-rejects-proportionally-to-distance — backed only by https://theory.cs.princeton.edu/complexity/book.pdf
ERROR backing-lost: gap-amplification-and-assignment-testing: lem-gap-hadamard-self-correction — backed only by https://theory.cs.princeton.edu/complexity/book.pdf
ERROR backing-lost: gap-amplification-and-assignment-testing: lem-circuit-satisfaction-is-linear-quadratic-consistency — backed only by https://theory.cs.princeton.edu/complexity/book.pdf
ERROR backing-lost: gap-amplification-and-assignment-testing: lem-quadratic-test-soundness — backed only by https://theory.cs.princeton.edu/complexity/book.pdf
ERROR backing-lost: gap-amplification-and-assignment-testing: lem-gap-random-linear-subsum — backed only by https://theory.cs.princeton.edu/complexity/book.pdf
ERROR backing-lost: gap-amplification-and-assignment-testing: def-gap-preserving-csp-reduction — backed only by https://theory.cs.princeton.edu/complexity/book.pdf
ERROR backing-lost: gap-amplification-and-assignment-testing: thm-gap-amplification-step — backed only by https://theory.cs.princeton.edu/complexity/book.pdf
ERROR backing-lost: gap-amplification-and-assignment-testing: lem-gap-cube-character-orthogonality — backed only by https://theory.cs.princeton.edu/complexity/book.pdf
ERROR backing-lost: gap-amplification-and-assignment-testing: lem-gap-blr-fourier-identity — backed only by https://theory.cs.princeton.edu/complexity/book.pdf
ERROR backing-lost: gap-amplification-and-assignment-testing: lem-gap-reed-solomon-outer-code — backed only by https://www.cs.cmu.edu/~venkatg/teaching/codingtheory/notes/notes6.pdf, https://www.cs.cmu.edu/~venkatg/teaching/codingtheory/notes/notes6.pdf
ERROR backing-lost: gap-amplification-and-assignment-testing: lem-gap-concatenated-code-parameters — backed only by https://www.cs.cmu.edu/~venkatg/teaching/codingtheory/notes/notes6.pdf
ERROR backing-lost: gap-amplification-and-assignment-testing: lem-gap-greedy-inner-code — backed only by https://www.cs.cmu.edu/~venkatg/teaching/codingtheory/notes/notes6.pdf
ERROR backing-lost: gap-amplification-and-assignment-testing: thm-explicit-code-construction-and-distance — backed only by https://www.cs.cmu.edu/~venkatg/teaching/codingtheory/notes/notes6.pdf
```

### source-fetch-stamp — exit 1

`node tools/source-fetch-check.mjs --coverage research/frontier-34-batch-16.coverage.json --stamp --timeout-sec 5`

```text
ERROR fetch-check-dead: the-ip-equals-pspace-theorem: https://theory.cs.princeton.edu/complexity/book.pdf — EAI_AGAIN
ERROR fetch-check-dead: the-ip-equals-pspace-theorem: https://cs-people.bu.edu/mbun/courses/535_F23/lectures/lec22.pdf — EAI_AGAIN
ERROR fetch-check-dead: gap-amplification-and-assignment-testing: https://www.cs.umd.edu/~gasarch/TOPICS/pcp/dinur.pdf — EAI_AGAIN
ERROR fetch-check-dead: gap-amplification-and-assignment-testing: https://theory.cs.princeton.edu/complexity/book.pdf — EAI_AGAIN
ERROR fetch-check-dead: gap-amplification-and-assignment-testing: https://www.cs.cmu.edu/~venkatg/teaching/codingtheory/notes/notes6.pdf — EAI_AGAIN
source-fetch-check: 0/5 source(s) fetch-verified (0 newly stamped), 5 FAILED
```

### source-fetch-check — exit 1

`node tools/source-fetch-check.mjs --coverage research/frontier-34-batch-16.coverage.json`

```text
ERROR fetch-check-unstamped: the-ip-equals-pspace-theorem: https://theory.cs.princeton.edu/complexity/book.pdf
ERROR fetch-check-unstamped: the-ip-equals-pspace-theorem: https://cs-people.bu.edu/mbun/courses/535_F23/lectures/lec22.pdf
ERROR fetch-check-unstamped: gap-amplification-and-assignment-testing: https://www.cs.umd.edu/~gasarch/TOPICS/pcp/dinur.pdf
ERROR fetch-check-unstamped: gap-amplification-and-assignment-testing: https://theory.cs.princeton.edu/complexity/book.pdf
ERROR fetch-check-unstamped: gap-amplification-and-assignment-testing: https://www.cs.cmu.edu/~venkatg/teaching/codingtheory/notes/notes6.pdf
source-fetch-check: 0/5 source(s) fetch-verified, 5 FAILED
```

## Resume requirements

Reread this scaffold, current plan/dependency files, the recorded source ranges, and open obligations before continuing. Finish the mathematical inherited audit and the local arbitrary-opinion/proximity/composition proofs; verify the constants and binary constraint weights. Fetch the same source bodies through working permitted access and run the liveness/backing/fetch gates again. Then reconcile any changes in the live whole-run manifests. The current blocked markers must remain until those obligations are discharged; no author or publish handoff is authorized by this note.

Final readback: both JSON files parsed successfully; counts are 19/4/41/4 and five source entries. A separate scan of every other historical `research/*.pages.json` found zero collisions with the 68 owned IDs. `git diff --check --` restricted to the three authorized paths exited 0; these paths are untracked in this checkout, so that command is not evidence of checking their added text. No source stamp or mathematical readiness claim was added during readback.
