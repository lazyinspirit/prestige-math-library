# Batch 28 — authoring notes

Run: `machine-learning-all-101-2026-10-19`  
Pair: `ml02-differential-privacy` / `ml02-differential-privacy-examples`  
Role: beta · batch 28 · batch dependency level 0 · scheduling input `424a2623b4a02ffac30bca34f1e893445df04b9a3a30237f39748f9397b2e4a0`

## Verified run and scope

- Recomputed autopilot status: run is active with `1-scaffold` held for owner repair; 14/101 scaffold results are covered and there are no workers in flight. The run-local state is under `.autopilot/machine-learning-all-101-2026-10-19/`.
- Current `research/machine-learning-all-101-2026-10-19-batch-dependency-levels.json` records batch 28 at level 0 with no prerequisite batches. This pair therefore has no in-run supplier pair; local item levels still follow the item dependency graph below.
- The two shared plan files already had owner changes before this batch (`research/plan-machine-learning-track.md`, `research/plan-spec.json`). They are outside this writer's scope and remain untouched.
- The requested owner authoring-direction file is absent.

## Design and plan comparison

Read the complete ML-27 design at `research/plan-machine-learning-track.md` lines 262–277 and the matching current `plan-spec.json` entry. The plan-spec refreshed description agrees with the current design: add/remove record adjacency, probability-kernel mechanisms, global L1 sensitivity, Laplace and exponential mechanisms, randomized postprocessing, adaptive basic and advanced composition, the four listed examples, and the central/local/client and correlated-attribute warnings. The proposed eight core item IDs match.

There is no claim or convention conflict between the current design and plan-spec. The task's four `requires` entries are broad prerequisite pages and match the plan-spec page requirements. The controlling design further names four exact published interfaces; that is a refinement, not a contradiction:

- `def-measurable-space`: a set with a sigma-algebra.
- `def-probability-measure`: a measure with total mass one on its measurable space.
- `def-measure-kernel-and-probability-kernel`: every source-point section is a measure and every event evaluation is source-measurable; probability kernels have pointwise mass one.
- `def-expectation-of-a-nonnegative-or-integrable-random-variable`: expectation is the nonnegative extended integral or the finite integral of an integrable variable.

All four actual published carrier bodies were inspected. Their direct foundation dependencies are declared in those carriers; no local item edits them. `def-composition-of-probability-kernels` and `lem-kernel-composition-is-well-defined-and-associative` were also inspected for the randomized postprocessing proof. `thm-azuma-hoeffding-inequality`, `lem-jointly-measurable-radon-nikodym-derivatives-for-probability-kernels`, `def-conditional-kl-for-probability-kernels`, and `thm-conditional-kl-is-measurable` are the relevant additional actual suppliers for the advanced-composition proof. The RN-kernel supplier explicitly assumes AC and standard-Borel source and target spaces.

## Source reading and dispositions

1. Cynthia Dwork and Aaron Roth, *The Algorithmic Foundations of Differential Privacy*, Harvard-hosted full book PDF: <https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf>.
   - Read the full relevant arguments in Ch. 2 §§2.1–2.4, printed pp. 11–27: add/remove histogram adjacency, DP, postprocessing, group privacy, and limitations. The local statement preserves add/remove adjacency; group privacy is context, not a new claim.
   - Read Ch. 3 §§3.2–3.5.1, pp. 29–50, including the complete Laplace density-ratio proof, the exponential-mechanism privacy and utility proofs, the KL bound, Azuma statement, and advanced-composition privacy-loss argument. Also read §§3.9–3.10, pp. 58–65, for composition/privacy context.
   - Read Appendix B, pp. 267–268, for the adaptive basic-composition proof. Its displayed definition `mu(C) = [P(T1 in C) - exp(epsilon) P'(T1 in C)]_+` is not additive in general. Counterexample: `P=(0.6,0.4)`, `P'=(0.4,0.6)`, `epsilon=0`, `delta=0.2` satisfies the bidirectional DP inequalities, but the displayed set function gives `mu({1})=0.2`, `mu({2})=0`, and `mu({1,2})=0`; hence it is not a measure. The theorem statement remains usable, but that printed proof step is excluded. The local basic-composition proof instead extends the event inequality to `[0,1]` test functions by dyadic simple-function approximation and uses induction.
   - Disposition: included for the definitions, mechanisms, privacy-loss route, exact utility constant, and limitations; the adaptive basic-composition theorem statement is cross-check evidence, while the defective Appendix B argument is not used as proof.

2. Salil Vadhan, *The Complexity of Differential Privacy*, author-hosted 2017 manuscript: <https://salil.seas.harvard.edu/sites/g/files/omnuum4266/files/salil/files/manuscript_2017.pdf>.
   - Read §1.5 for DP and Laplace; §1.6 for the scope of the guarantee; §2.1 for randomized postprocessing; §2.2, Lemmas 2.3–2.4 and their basic-composition proof/advanced-composition sketch; §4.2, Proposition 4.2 for the finite-range exponential mechanism; and §9.2 for the local model.
   - Its fixed-size replacement adjacency and its advanced-composition statement is only an asymptotic proof sketch; neither is substituted for the local add/remove statement or exact advanced-composition proof. The local-model discussion independently supports the central/local distinction.
   - Disposition: included as the independent second full-text treatment and cross-check for the A-page scope; Dwork–Roth supplies the exact constants and detailed advanced-composition route.

Both source URLs resolve to full PDFs and their complete relevant arguments were inspected in the browser. Fetch stamps are recorded and verified for all four source records; no source was dropped.

## Planned item inventory and levels (before carriers)

The initial eight proposed core items are retained. Local definitions/intermediate results are added on A before their consumers. `dependency_level` is computed only from in-batch `deps`; published suppliers are external context.

| Level | Item IDs |
|---:|---|
| 0 | `def-differential-privacy-and-adjacency`, `def-laplace-distribution` |
| 1 | `def-global-l1-sensitivity`, `thm-laplace-density-from-exponential-law`, `def-exponential-mechanism-utility-sensitivity`, `lem-dp-test-function-extension`, `lem-dp-pure-privacy-loss-kl-bound`, `lem-dp-approximate-kernel-purification`, `rem-differential-privacy-scope-and-limitations` |
| 2 | `lem-laplace-product-density`, `alg-laplace-mechanism`, `alg-exponential-mechanism`, `thm-dp-postprocessing`, `thm-basic-adaptive-composition`, `thm-advanced-adaptive-composition-standard-borel-outputs` |
| 3 | `thm-laplace-mechanism-privacy`, `thm-exponential-mechanism-privacy-and-utility`, `thm-basic-and-advanced-composition` |
| 4 | B-page examples `ex-add-remove-noisy-count`, `ex-finite-range-private-selection`, `ex-postprocessing-private-noisy-count` |
| 2 | B-page example `ex-record-level-versus-client-level-adjacency` |

All examples are assigned to the B page; every definition, algorithm, theorem, lemma, and remark is assigned to the A page. The page inventories remain below the 100-item cap. The plan's four broad page prerequisites remain in the manifest unchanged.

## Axiom and unresolved-interface decisions

- The DP, sensitivity, exponential-mechanism, bounded-function, postprocessing, and basic adaptive-composition arguments are kept choice-free.
- The real Laplace probability law is constructed from the published exponential survival law and Lebesgue reflection interface; that library route carries Countable Choice (`def-countable-choice`), not full AC. This use and all downstream Laplace dependencies will be declared.
- The advanced-composition standard-Borel branch uses full AC through the published jointly measurable RN-kernel derivatives and Azuma/conditional-KL suppliers; it is kept distinct from the choice-free/basic branch.
- **Owner escalation:** the controlling ML-27 statement defines a mechanism on an arbitrary measurable output space and gives advanced composition for arbitrary conditional output kernels. The available published measurable RN-kernel supplier, `lem-jointly-measurable-radon-nikodym-derivatives-for-probability-kernels`, assumes standard-Borel history/output spaces and gives only a common almost-everywhere kernel version. A standard-Borel-output advanced-composition theorem can be proved locally; that does not establish the design's arbitrary-measurable-output claim. Preserve the planned `thm-basic-and-advanced-composition` statement and mark it escalated. Proposed reconciliation: add a locally proved arbitrary-output measurable-kernel privacy-loss/RN supplier on A, or have the owner explicitly resolve the output-space interface in the shared plan. Affected claim: the advanced-composition clause only; the basic adaptive-composition result is proved for arbitrary measurable output spaces.

## Next action

Level 1 is now authored. Proceed through level 2 in ascending dependency order, beginning with the Laplace product-density lemma and the two algorithms, then postprocessing and the composition results. The batch manifest and both frontmatter-only pages are authored. After each proof/example, add its exact contract and update readiness evidence; keep the arbitrary-output advanced-composition item escalated.

## Item checkpoints

### `def-differential-privacy-and-adjacency` — authored

- Claim/convention: finite-support count functions on a nonempty universe; symmetric add/remove-one-occurrence adjacency; mechanisms are probability kernels; $(\varepsilon,\delta)$ event inequality for every ordered neighboring pair and measurable event, with $\varepsilon\ge0$, $0\le\delta\le1$.
- Dependencies: `def-measurable-space`, `def-probability-measure`, `def-measure-kernel-and-probability-kernel`; no in-run suppliers, so item level 0. No choice axiom.
- Sources read: Dwork–Roth, Ch. 2 Definition 2.4 (printed pp. 17–18); Vadhan, Definition 1.4 (PDF pp. 8–9). The item statement has no inline links; references follow the complete definition.
- Validation: item authoring is complete; current scoped results are recorded below.
- Next: author the level-1 suppliers and local lemmas.

### `def-laplace-distribution` — authored

- Claim/convention: `Lap(b)` is the equal mixture of the positive exponential law of rate $1/b$ and its reflection; `Lap(0)` is point mass at zero. The probability law exists by the published exponential-law interface.
- Dependencies: `def-countable-choice`, `def-borel-sigma-algebra`, `cor-continuous-functions-are-borel-measurable`, `thm-exponential-and-weibull-survival-laws`; no in-run suppliers, so item level 0. Countable Choice is inherited from the real exponential-law construction; no full AC is used.
- Sources read: Dwork–Roth, Definition 3.2 (printed p. 34); Vadhan, §1.5 (PDF pp. 7–8); the local exponential-law and Borel-measurability supplier bodies were checked. The density theorem separately uses the published reflection change-of-variables theorem.
- Validation: item authoring is complete; current scoped results are recorded below.
- Next: author the finite-product density result before the Laplace algorithm.


### `def-global-l1-sensitivity` — authored

- Claim/convention: for a finite-dimensional query on the same add/remove database domain, define $\Delta_1 f$ as an attained finite maximum over adjacent pairs; this matches the controlling plan's `max` convention and makes its well-definedness explicit.
- Dependencies: `def-differential-privacy-and-adjacency`; item level 1. No choice axiom.
- Sources read: Dwork–Roth, Definition 3.1 (printed pp. 31–32); Vadhan, §1.5 (PDF pp. 6–8).
- Validation: item authoring is complete; current scoped results are recorded below.
- Next: author `thm-laplace-density-from-exponential-law` at item level 1.

### `thm-laplace-density-from-exponential-law` — authored

- Claim/convention: for $b>0$, the symmetric mixture of the rate-$1/b$ exponential law and its reflection has Lebesgue density $(2b)^{-1}e^{-|x|/b}$; the zero-scale point mass is outside this theorem's hypotheses.
- Dependencies: `def-laplace-distribution`, `def-countable-choice`, `thm-exponential-and-weibull-survival-laws`, `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`, `thm-lebesgue-measure-of-a-box-of-every-kind`; item level 1. Countable Choice only.
- Proof route: use the exponential density on $(0,\infty)$ and the published one-dimensional reflection change of variables on the negative half-line; the zero-mass singleton is checked by the degenerate-box clause.
- Sources read: Dwork–Roth, Definition 3.2; Vadhan, §1.5. Supplier statements and complete arguments for the exponential law, reflection change of variables, and degenerate-box measure were inspected.
- Validation: complete proof; current scoped results are recorded below.
- Next: author `lem-laplace-product-density` at item level 2.

### `lem-dp-test-function-extension` — authored

- Claim/convention: a one-sided $(\varepsilon,\delta)$ event inequality for probability measures extends to all measurable test functions in $[0,1]$, with the same additive $\delta$.
- Dependencies: `def-differential-privacy-and-adjacency`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `def-integral-of-a-nonnegative-simple-function`, and `thm-monotone-convergence-for-the-integral`; item level 1. No choice axiom.
- Proof route: dyadic lower simple approximants; finite threshold-event sums are reconciled with the disjoint simple-integral definition by a finite partition; monotone convergence gives the result.
- Sources: Dwork–Roth, Proposition 2.1, printed p. 22; Vadhan, Lemma 2.1, PDF p. 14. Both relevant arguments were read.
- Validation: full proof; current scoped results are recorded below.
- Next: continue through level 1.

### `lem-dp-pure-privacy-loss-kl-bound` — authored

- Claim/convention: under two-sided pure event bounds on probability measures, $D(P\|Q)\le\varepsilon(e^\varepsilon-1)$.
- Dependencies: DP definition, standard-Borel scope, AC, KL definition, RN density and integration interfaces, KL nonnegativity, and exponential monotonicity/reciprocal facts; item level 1. AC is declared, no stronger choice principle.
- Proof route: choose $r=dP/dQ$, derive $e^{-\varepsilon}\le r\le e^\varepsilon$ a.e.; bound total variation by $(e^\varepsilon-1)/(e^\varepsilon+1)$ using both event inequalities; bound the symmetrized KL by $2\varepsilon\operatorname{TV}$ and use reverse-KL nonnegativity.
- Sources: Dwork–Roth, Lemma 3.18, §3.5.1, printed pp. 46–47; Vadhan §2.2, PDF pp. 14–16 for privacy-loss context. The exact source argument and local density details were inspected; the carrier supplies the full algebraic proof.
- Validation: proof complete; current scoped results are recorded below.
- Next: continue through level 1.

### `lem-dp-approximate-kernel-purification` — authored

- Claim/convention: for a.e. standard-Borel history, a two-sided approximate-DP pair of kernel laws admits a jointly measurable pure-DP replacement within integrated TV distance $\delta$.
- Dependencies: DP and standard-Borel definitions, AC, probability-kernel conditions, the published common-conull jointly measurable RN-kernel supplier, kernel integration measurability, the countable determining algebra, density-measure construction, measurable sections, and Borel composition; item level 1. AC is explicit.
- Proof route: form $M=(K+L)/2$, obtain joint densities $p,q$, restrict to one measurable conull set using a countable algebra, extend event inequalities by finite-measure approximation, clip to $[e^{-\varepsilon}q,e^\varepsilon q]$, and correct mass by interpolation within the remaining slack. The L1 change is at most $2\delta$, hence TV at most $\delta$.
- Sources: Dwork–Roth §3.5.1, printed pp. 45–50, and Vadhan §2.2, PDF pp. 14–16, read as advanced-composition context. The explicit kernel clipping and common-set argument are locally proved; neither source is represented as supplying that full kernel statement.
- Validation: detailed proof complete; current scoped results are recorded below.
- Next: continue through level 1.

### `def-exponential-mechanism-utility-sensitivity` — authored

- Claim/convention: utility is real-valued on a finite database-independent range; sensitivity is the attained finite maximum of absolute utility changes over add/remove neighbors and range points; the mechanism requires positive sensitivity.
- Dependencies: `def-differential-privacy-and-adjacency`; item level 1. No choice axiom.
- Sources: Dwork–Roth, Definition 3.4, printed pp. 36–37; Vadhan, Proposition 4.2, PDF pp. 33–34. References follow the complete definition.
- Validation: definition carrier complete; current scoped results are recorded below.
- Next: continue through level 1.

### `rem-differential-privacy-scope-and-limitations` — authored

- Claim/convention: central record-level add/remove DP is distinct from local and client-level privacy; device-side storage or secure aggregation alone does not establish the event inequalities; correlated attributes are not excluded by record-level protection.
- Dependencies: `def-differential-privacy-and-adjacency`; item level 1. No choice axiom.
- Sources: Dwork–Roth §§2.1, 2.3–2.4, printed pp. 11–27; Vadhan §§1.6 and 9.2, PDF pp. 9–10 and 93–94. Links follow the full remark.
- Validation: remark carrier complete; current scoped results are recorded below.
- Next: begin level 2.

### `lem-laplace-product-density` — authored

- Claim/convention: for finite $d\ge1$, the product Laplace law has density $(2b)^{-d}e^{-\|z\|_1/b}$ and independent scalar Laplace coordinates.
- Dependencies: one-dimensional density, finite product sigma-algebra and product measure, Tonelli, density-measure construction, sigma-finite pi-system uniqueness, and the independent-random-elements definition; level 2. Countable Choice is inherited; finite product formation adds no stronger choice.
- Proof route: integrate the product density by finite repeated Tonelli; compare the resulting probability measure with the product law on measurable rectangles; invoke measure uniqueness.
- Sources: Dwork–Roth §3.3, printed pp. 33–35; Vadhan §1.5, PDF pp. 7–8; both checked.
- Validation: proof complete; current scoped results are recorded below.
- Next: define the Laplace mechanism.

### `alg-laplace-mechanism` — authored

- Claim/convention: noise scale is $\Delta_1f/\varepsilon$ in each of $d$ independent coordinates for positive sensitivity; zero sensitivity returns the query deterministically; output is Borel $\mathbb R^d$.
- Dependencies: DP/database definition, global sensitivity, Laplace law, finite probability-kernel products, probability-kernel and probability-measure definitions, Borel structure, continuous-to-Borel interface; level 2. Countable Choice only via the scalar noise law.
- Verification: each output law is a translated product measure or a point mass, and kernel measurability follows from the power-set database sigma-algebra.
- Sources: Dwork–Roth Definition 3.2 and Theorem 3.6, printed pp. 34–37; Vadhan §1.5, PDF pp. 7–8.
- Validation: verification complete; current scoped results are recorded below.
- Next: define the finite exponential mechanism.

### `alg-exponential-mechanism` — authored

- Claim/convention: output range is nonempty finite and database-independent; weights use exponent $\varepsilon u/(2\Delta_u)$ with $\Delta_u>0$; normalize on the power-set sigma-algebra.
- Dependencies: DP/database domain, utility sensitivity, probability measure and kernel, real exponential; level 2. No choice axiom.
- Verification: finite positive weights yield a finite positive normalizer and probability measure; event evaluations are measurable on the power-set database domain.
- Sources: Dwork–Roth Definition 3.4, printed pp. 36–37; Vadhan Proposition 4.2, PDF pp. 33–34.
- Validation: verification complete; current scoped results are recorded below.
- Next: prove postprocessing.

### `thm-dp-postprocessing` — authored

- Claim/convention: any data-independent probability-kernel postprocessing preserves the same $(\varepsilon,\delta)$ event guarantee.
- Dependencies: DP definition, bounded-function extension, kernel composition definition and well-definedness, probability-kernel definition; level 2. No choice axiom.
- Proof route: for a fixed output event $B$, use $g(y)=L(y,B)\in[0,1]$ in the bounded-function lemma and identify the integrals with the composed-kernel evaluations.
- Sources: Dwork–Roth Theorem 2.1, printed pp. 21–22; Vadhan §2.1, PDF p. 13.
- Validation: proof complete; current scoped results are recorded below.
- Next: prove adaptive basic composition.

### `thm-basic-adaptive-composition` — authored

- Claim/convention: arbitrary measurable output spaces; round $i$ is $(\varepsilon_i,\delta_i)$ private at every prior transcript; finite transcript law uses iterated probability kernels; total error $\sum_i\delta_i\le1$.
- Dependencies: DP, bounded-function extension, product sigma-algebras/sections, kernel integration and finite kernel composition, measure/monotone integration; level 2. No choice axiom.
- Proof route: build finite history-extension kernels; induct on transcript length. For each event cap the next-round conditional probability at one, separate the new $\delta_i$, and apply the bounded-function inequality to the prefix law. This yields additive rather than amplified error.
- Sources: Dwork–Roth §3.5, printed pp. 41–50; Vadhan §2.2, PDF pp. 14–16. The Appendix B measure step in Dwork–Roth is defective as recorded above; the local proof does not use it.
- Validation: full proof complete; current scoped results are recorded below.
- Next: prove the standard-Borel advanced-composition branch.

### `thm-advanced-adaptive-composition-standard-borel-outputs` — authored

- Claim/convention: every round output and finite transcript prefix is standard Borel; AC is explicit; exact bound is $\sqrt{2k\ln(1/\delta')}\,\varepsilon+k\varepsilon(e^\varepsilon-1)$ with error $k\delta+\delta'$.
- Dependencies: pure-DP KL bound, approximate-kernel purification, common-conull joint RN kernels, conditional-KL definition/measurability, finite standard-Borel products, Ionescu–Tulcea path laws, RN integration, conditional-expectation characterization, Azuma–Hoeffding, and bounded-function extension; level 2. Full AC is used through the cited suppliers.
- Proof route: purify one direction at a time under the modified prefix law; prove prefix equivalence; factor the transcript density into conditional RN ratios; form the privacy-loss martingale and apply Azuma with interval width $2\varepsilon$; transfer back by $k\delta$ total variation. Repeat with the databases swapped for the reverse inequality.
- Sources: Dwork–Roth Theorem 3.20, §3.5.1, printed pp. 45–50; Vadhan Theorem 2.5 and proof sketch, §2.2, PDF pp. 14–16. The local proof supplies the kernel-level measurability and transfer details.
- Validation: standard-Borel proof passes scoped precheck, strict proof-contract, and proof-layout checks. The broad arbitrary-output item remains separately escalated.
- Next: author level-3 privacy theorems.

### `thm-laplace-mechanism-privacy` — authored

- Claim/convention: positive-sensitivity density ratio uses scale $b=\Delta_1f/\varepsilon$ and the reverse triangle inequality for the stated $L^1$ norm; zero sensitivity forces equal neighboring query values and a deterministic equal law.
- Dependencies: Laplace algorithm, sensitivity and DP definitions, product density, Countable Choice, and the one-change-of-variables theorem for translations; item level 3. Countable Choice is inherited only from the real noise law.
- Proof route: translate the product density, compare the two point densities in both directions, integrate over Borel events, then handle the zero-sensitivity branch separately.
- Sources: Dwork–Roth Theorem 3.6, printed pp. 36–37; Vadhan §1.5, PDF pp. 7–8.
- Validation: proof complete; current scoped results are recorded below.
- Next: prove exponential-mechanism privacy and utility.

### `thm-exponential-mechanism-privacy-and-utility` — authored

- Claim/convention: finite range, real utility, positive attained sensitivity, and $\varepsilon>0$; privacy ratio is $e^\varepsilon$; utility tail has exact threshold $(2\Delta_u/\varepsilon)(\ln(|R|/|R_{OPT}|)+t)$.
- Dependencies: exponential algorithm, sensitivity and DP definitions, natural logarithm and its laws; item level 3. No choice axiom.
- Proof route: adjacent score bounds give point-weight and normalizer ratios; for utility, bound every bad weight, sum at most $|R|$ terms, and lower-bound the normalizer by all maximizing outputs.
- Sources: Dwork–Roth §§3.4–3.5, printed pp. 36–41; Vadhan Proposition 4.2, PDF pp. 33–34.
- Validation: proof complete; current scoped results are recorded below.
- Next: record the broad composition escalation and begin B examples.

### `thm-basic-and-advanced-composition` — authored, escalated

- Claim preserved from the controlling plan: basic and advanced composition for arbitrary measurable round-output spaces; the exact advanced bound and all parameter hypotheses remain stated.
- Dependencies: `def-differential-privacy-and-adjacency`, `thm-basic-adaptive-composition`, and `thm-advanced-adaptive-composition-standard-borel-outputs`; item level 3.
- Evidence: the basic supplier proves its arbitrary-measurable-output clause choice-free. The advanced supplier requires standard-Borel output and finite-prefix spaces and full AC. It does not prove the retained arbitrary-output claim.
- Owner action proposed: add a proved arbitrary-output measurable-kernel privacy-loss/RN supplier on A, or resolve the output-space scope in the shared plan. No statement has been weakened and no unproved excerpt supplied.
- Validation: broad claim remains unproved; no proof contract claims completion. Step 1 decision is recorded as `escalated`.
- Next: author B examples in ascending level order.

### `ex-record-level-versus-client-level-adjacency` — authored

- Claim/convention: 100 identified record occurrences form a 100-step record-level path; their full contribution is not one add/remove neighbor move. A client-level guarantee requires a changed adjacency relation.
- Dependencies: `def-differential-privacy-and-adjacency` and the scope remark; level 2. No choice axiom.
- Verification: exhibit the 100 successive databases and compare total count-function difference $100$ to one-step difference $1$.
- Sources: Dwork–Roth §§2.1 and 2.3, printed pp. 11–25; Vadhan §§1.6 and 9.2, PDF pp. 9–10 and 93–94.
- Validation: verification complete; current scoped results are recorded below.
- Next: author add/remove noisy-count example.

### `ex-add-remove-noisy-count` — authored

- Claim/convention: predicate is assumed satisfied by at least one possible record, so the count query's finite attained add/remove sensitivity is exactly one; noise scale is $1/\varepsilon$.
- Dependencies: DP/database definition, sensitivity, Laplace algorithm/privacy theorem, Countable Choice; level 4. Countable Choice only through the noise law.
- Verification: adjacent count changes are at most one, and empty database versus one satisfying occurrence attains one; then instantiate the scalar privacy theorem.
- Sources: Dwork–Roth §3.3, printed pp. 33–37; Vadhan §1.5, PDF pp. 7–8.
- Validation: verification complete; current scoped results are recorded below.
- Next: author finite-range private selection.

### `ex-finite-range-private-selection` — authored

- Claim/convention: constant scores are correctly excluded at zero sensitivity. The valid instance fixes $u_*$, uses $s(D)=1_{D(u_*)>0}$, and attains sensitivity one; selected-output probability is written exactly.
- Dependencies: DP/database definition, utility sensitivity, exponential algorithm/privacy-and-utility theorem; level 4. No choice axiom.
- Verification: compute the zero-sensitivity countercase, toggle $s$ by adding/removing $u_*$, normalize the two weights, and invoke privacy theorem.
- Sources: Dwork–Roth §3.4, printed pp. 36–41; Vadhan Proposition 4.2, PDF pp. 33–34.
- Validation: verification complete; current scoped results are recorded below.
- Next: author threshold postprocessing example.

### `ex-postprocessing-private-noisy-count` — authored

- Claim/convention: predicate has a satisfying record, so count sensitivity is one; threshold $c\in\mathbb R$ defines a Borel deterministic map and output in $\{0,1\}$.
- Dependencies: DP/database definition, sensitivity, Laplace algorithm/privacy theorem, randomized postprocessing theorem, Countable Choice, Borel sigma-algebra; level 4. Countable Choice only through Laplace noise.
- Verification: establish sensitivity one, use the Laplace privacy theorem, prove threshold-map measurability from its two preimages, and instantiate postprocessing.
- Sources: Dwork–Roth §§2.3 and 3.3, printed pp. 23–25 and 33–37; Vadhan §§1.5 and 2.1, PDF pp. 7–8 and 13.
- Validation: verification complete; current scoped results are recorded below.
- Next: hand off the authored batch for owner reconciliation; the scoped evidence and readiness decisions are recorded below.

## Evidence checks and blockers

- `node tools/source-fetch-check.mjs --coverage research/machine-learning-all-101-2026-10-19-batch-28.coverage.json --stamp`: **exit 0**, 4/4 source records fetch-verified, 4/4 resolved, 0 documented drops. The two unique full PDFs were fetched successfully; byte counts, page counts, abbreviated SHA-256 stamps, fetch timestamps, URLs, locators, supported items, and dispositions are preserved in coverage and source-evidence JSON.
- `node tools/coverage-checklist.mjs research/machine-learning-all-101-2026-10-19-batch-28.coverage.json`: **exit 0**, 2 pages, 48 harvested results, 0 errors, 0 warnings.
- The required run-wide `node tools/item-dependency-levels.mjs check --run machine-learning-all-101-2026-10-19` **fails on 144 empty scaffold inventories in other batches**. The current run-wide output has no missing-ID or incorrect-level errors. Batch 28 has no dependency-level errors; its 22 carrier `deps`/`justified_by` arrays match the manifest and computed item levels 0–4.
- Final scoped checks, readiness decisions, and the assigned empty cross-batch dependency input are complete. The run-wide batch-level receipt is stale by input hash; recomputation gives the same batch rows, including batch 28 at level 0 with no prerequisite batches. The owner-controlled live run remains held at `1-scaffold`; see the final checkpoint below.

## Final checkpoint — 2026-10-19

- Inventory and levels: the assigned pair contains 18 A-page items and 4 B-page examples. Carrier dependencies match the batch manifest; scoped calculation has no cycles or label errors and yields item levels 0–4. `machine-learning-all-101-2026-10-19-batch-28.cross-batch-dependencies.json` remains empty, matching the recomputed batch-28 graph (level 0, `requires: []`).
- Editorial and rendering: statement-first inspection passes for 22/22 items with 0 defects; renderer checks pass for 22/22 carriers. Both A/B files are YAML-frontmatter-only with empty bodies and no summaries. The engine-owned `page_layout: compact-v1` stamp has not yet been applied while the live run is held at scaffold; no engine state was changed.
- Proof checks: precheck passes for all 16 proof-bearing items; the strict proof-contract checker passes for the 21 completed items, excluding the escalated broad composition claim; proof-layout reports 22 items, 47 steps, 0 defects.
- Sources: four source records are fetch-verified and resolved, with 0 drops. Coverage validation passes for 2 pages and 48 harvested results.
- Decisions: 21 items are recorded `ready` and `thm-basic-and-advanced-composition` is recorded `escalated`. Per-item verification confirms the readiness hashes are current.
- Shared scheduling receipt: `node tools/batch-dependency-levels.mjs check --run machine-learning-all-101-2026-10-19` reports stale input. The recorded/current input hashes are `2a5b1a65075b7af4620c152301e510f5f72aaeebd4f7edcb621741991f4c38a0` / `dfb98956146c833fa433b88bbc5d84b125bd39b5ecc1053fdcb630c0841dc3c2`; recomputation changes 0 batch rows. The shared scheduling receipt was left for the owner to refresh.
- Live run evidence: autopilot status shows `1-scaffold` held, 14/101 scaffold results covered, no workers in flight, and an owner-repair blocker in `research/machine-learning-all-101-2026-10-19-step1-blockers.json`. The run-wide item-level checker is independently blocked by the 144 other empty scaffold inventories.
