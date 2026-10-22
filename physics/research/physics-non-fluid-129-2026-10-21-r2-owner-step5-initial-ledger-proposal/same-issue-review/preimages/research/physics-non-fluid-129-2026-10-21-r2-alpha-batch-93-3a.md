# Batch 93 Step 3a adjudication

Run: `physics-non-fluid-129-2026-10-21-r2`; group: `batch-93`.

Current item and page raw hashes matched every post-reader snapshot entry before Alpha edits. The pre/post records show changes only to the three routed touched items, their contracts and the A-page prose; manifests and item order are unchanged.

## Dependency level 0: hard-sphere definition

`refuter:93:1`: confirmed_fatal. With N=2, zero velocities and stationary centres separated by delta_N/2 on [0,1], every old path condition held but the spheres overlapped. Require distance >=delta_N at every trajectory time, with only isolated binary interior contacts and strict separation at other interior times; explicitly retain noncolliders' velocities. This supplies the missing exclusion without asserting global flow. Positive parameters, d>=2, lift independence, attained quotient minimum, unique normal under delta_N<L/2, one-sided endpoints and eventual small diameter were checked. Consumer search found only the assigned comparison example and A page; their actual invariant/scaling uses remain valid. No outside consumer repair is required. Contract definition_interface and complete risk_review updated. Source: https://arxiv.org/pdf/1208.5753, Ch.1 printed p.5, eqs.(1.0.1)-(1.0.2), exclusion and reflection; the torus convention is local. No full convergence proof is imported.

The remaining item reviews and consumer checks are recorded below in dependency order.

## Dependency level 0: two-velocity definition

The reader correctly restricts the displayed finite L2 norm to square-integrable measurable functions. For example, the periodic extension of x^(-3/4) on (0,L), assigned any value at zero, is integrable but its squared integral diverges. The Fourier coefficient is finite by Cauchy–Schwarz on finite normalized measure. All direct uses in the lemma, heat theorem and example are smooth or square-integrable, so they satisfy the corrected domain. No outside consumers were found. The exact pre-reader bytes are present in owner-step2-baseline/items/def-csm-frontier-two-velocity-scaling.md (SHA256 matches pre). Retain the reader correction; amend its manifest and citation transcripts to match. The definition is moderate risk.


## Dependency level 1: contraction lemma

Retain the reader's explicit solution-pair notation and constructive mode argument. Each M_n is a bounded realified 4-by-4 operator on complete Euclidean R4; the exponential supplier proves existence, and embedding vector solutions as first columns licenses matrix-IVP uniqueness. The symmetric switching part gives (|U_n|^2)'=-2 alpha |U_{n,+}-U_{n,-}|^2. Repeated periodic integration by parts gives arbitrarily rapid initial coefficient decay; the mode contraction and polynomial growth of differentiated modes give uniform summability, permitting termwise PDE verification and the initial value. Real conjugate symmetry and Fourier completeness yield a real unique smooth solution.

Steps 1.2–3.1 use nonnegative collision matrices, norm-preserving translations, the explicitly bounded O(h^2) matrix splitting error and telescoping contraction estimate. Finite modes converge first, with Parseval tails uniformly controlled. Step 4.1 closes the nonnegative cone and then uses spatial continuity for pointwise positivity. Step 5.1 follows by the mode energy identity and summable differentiated series. Zero data, zero mode, a single nonzero component, t=0 and finite T are covered; only AC_omega is used. The reader repair is sound; amend the stale manifest statement and downstream exact quote. No proof rewrite or additional supplier is required.

Historical check: the exact pre-reader lemma was reconstructed in memory from owner-step2-baseline/items/lem-csm-frontier-two-velocity-contraction.md by replacing each numbered proof paragraph with the corresponding claim and inputs in owner-step2-render-whitespace/contracts/merged.before.json, preserving its terminal newline. Its raw SHA256 is 811e8058064c60475189b6eaecbe93dcfb6be16f92d847219a814e9e5e127a1f, exactly the pre snapshot. This confirms the old order/notation and avoids treating a nonmatching earlier copy as the preimage. The old implicit reconstruction is repairable local exposition, not a counterexample to the theorem. Current lemma Statement clarification is used correctly by the heat theorem F2/3.3 and example F5/1.3; these are the only item consumers, and neither requires a changed public claim.


## Dependency level 2: heat limit

The unchanged theorem has a complete conditional proof. Adding/subtracting the model gives continuity and epsilon^2 j_t+2 lambda j=-c^2 rho_x with zero initial flux. The zero Fourier mode is exact. For each fixed nonzero n, sufficiently small epsilon gives distinct negative roots s,r; A+B=1 and As+Br=0, s tends to -D kappa_n^2 and B tends to zero. The bound by |A-1|+T|s+D kappa_n^2|+|B| is uniform including t=0. No root formula is needed for large frequencies: the pair contraction controls their density tails with exactly the factor sqrt(2) cancelling the initial pair norm 1/sqrt(2). Finite modes and epsilon-independent Parseval tails prove the stated supremum limit. Rapid decay gives the smooth heat series at t=0; Fourier ODEs and continuity prove uniqueness. Zero initial density and positive c,lambda,L satisfy all boundary checks. This does not import the general external diffusion estimate or empirical premises. No decision is owed for this untouched, unflagged theorem; its required risk review is complete.


## Dependency level 3: comparison example

Retain the reader's c,lambda>0, nonnegative smooth rho_0, equal initial halves and AC_omega qualifications and its explicit absence of a cross-family implication claim. Exact pre-reader bytes are present in owner-step2-csm90-93/before/items/ex-csm-frontier-distinct-scaling-limits.md and match the pre snapshot. The mean-field momentum calculation cancels odd forces pairwise; antisymmetry of omega gives energy conservation. Hard-sphere reflection fixes U and reflects g, preserving |g|^2 and hence momentum and energy. Conservation is asserted only across finitely many collision updates, not across an accumulation. The repaired hard-sphere exclusion only narrows admissible paths and leaves those calculations valid. The two-velocity zero mode preserves density mass and its heat limit is applied with all supplier hypotheses. No outside example consumers were found. Amend the stale manifest and supplier quote, retaining the authored argument.


## Page obligations

`page:93:csm-frontier-kinetic-scaling`: accept the reader qualification. The final paragraph explicitly supplies AC_omega and the heat theorem's nonnegative, smooth, equal-half initial data; the page distinguishes quadratic L2 dissipation from thermodynamic entropy and observations.

`reader:93:1` and `refuter:93:2`: confirmed_nonfatal, the same defect in the same observed page carrier. The summary named three limit theorems without a third supplied convergence statement. Replaced that phrase with “makes no cross-family implication claim among the three scaling prescriptions,” agreeing with the example. The collision-transport prerequisite explicitly disclaims a hard-sphere derivation, and the hard-sphere definition asserts only a prescription. This is a page-only prose correction; no theorem is removed or added. Both findings share one closed defect row and the second decision identifies the first through same_defect_as. All item/page diagrams were checked: none occur, and no missing diagram is needed for these explicit equations and computations.


## Supplier and source coverage

Exact direct mathematical supplier Definitions/Statements were read for Lp quotient classes, the countable-choice axiom, Fourier basis/Parseval, FTC, linear matrix IVPs, bounded-operator exponentials, Euclidean completeness, Cauchy–Schwarz, Euclidean inner product and operator norm. Uses retain the stated domains, regularity and choice hypothesis. These existing suppliers were used at their recorded proof status; their transitive published proofs were not re-audited. The published smooth mean-field and Hamiltonian-flow definitions were read to check canonical conventions and finite-N invariants; none was edited and no defect was identified in those uses.

Primary passages independently retrieved: [Gallagher–Saint-Raymond–Texier](https://arxiv.org/pdf/1208.5753), Ch.1 §§1.0,1.2,1.3, printed pp.5–9 (free flight, exclusion, reflection and scaling); [Hillen–Swan](https://www.math.ualberta.ca/~thillen/paper/HillenSwan12withStyle.pdf), §2.1 eqs.(8)–(10) (per-direction switching convention), and §4 opening/§4.2 (explicitly formal expansion); [Hillen–Othmer](https://www-users.cse.umn.edu/~othmer/papers/hill1.pdf), §1 eqs.(1.2)–(1.3), pp.752–753 (two-state density/flux model), and Theorem 4.1 statement, pp.768–769 (different general expansion and positive-time conditions, not imported into this proof). The local Fourier proof establishes the batch's precise periodic convergence. No reading of the full external convergence proofs is claimed. [Codling–Plank–Benhamou](https://pmc.ncbi.nlm.nih.gov/articles/PMC2504494/) again returned browser access protection; its cited sections were unavailable and are not a logical premise of the local proof. This remains a source-coverage limitation, not invented source verification.

The published prerequisite pages csm-collision-transport and csm-mean-field-hierarchy and current draft csm-frontier-probability-interfaces were read for the page obligations. The collision page's explicit no-hard-sphere-derivation scope supports the B-page correction. No defective published item was found, so no published-ledger row or lock was needed. The owned cross-batch input and frontier notes were updated; no new prerequisite edge or additional consumer-interface change was introduced.

## Checks and disposition

- Initial risk report routed four CRITICAL items and one MODERATE item, with zero errors. Complete specific risk_review records now cover all four CRITICAL items. The final --require-reviewed run reports zero errors, five items routed.
- Explicit reflow on the four changed/reviewed reader item paths reported all unchanged.
- Scoped precheck passed all three proof-bearing batch items; definitions have no numbered proof to check. No failures.
- Scoped rendercheck passed all five items and both pages: seven files, valid YAML and KaTeX.
- Required final proof-layout run after all item edits and reflow: four items, eleven steps, zero defects.

Seven routed obligations are decided. Six closed defect rows record the confirmed repairs, with the two B-page findings sharing one row. Reader item repairs are amended only to synchronize their stale manifest/interface quotations; the A-page repair is accepted. All manifests retain the same inventory, IDs and page order. No judge stamp, source certification, engine gate battery or transition was run. No scientific blocker, outside consumer repair or unresolved escalation remains. Source retrieval limits are retained above. The engine owns decision hashes and subsequent gates.
