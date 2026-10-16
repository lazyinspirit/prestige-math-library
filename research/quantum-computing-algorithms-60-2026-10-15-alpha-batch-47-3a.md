# Batch 47 Step 3a adjudication

Run: `quantum-computing-algorithms-60-2026-10-15`; group: `batch-47`. Exactly six touched obligations and `refuter:47:1` are dispositioned. No page-only or reader-finding obligation is owed. Review followed the generated dependency order; checkpoints were recorded in this report and risk reviews before advancing.

## Repairs and decisions

### alg-qa-23-bounded-height-numerical-roots

The pre-reader GRID-ROOTS procedure reached a max over j<n with n=0. The reader adds the nonzero-constant empty-list return before normalization and grids. The pre-reader rounding instruction called bounded bisection without its finite mesh bounds or tie-search branches. The reader specifies A, L, M, lo/hi and exact comparisons, including d=0. The reader-post exact-mesh branch said return that mesh value within the per-coefficient loop, yielding a scalar rather than the polynomial/complement pair (e.g. p=0). It now sets that coefficient and continues. Verdict: `amended_repair`; repair_confidence: 1. Exact pre-reader source recovered from the owner-step2-qsp/before archive and hash-matched. The current cost theorem and synthesis procedure use the completed outputs correctly; neither needs a claim change.

### alg-qa-23-qsp-phase-synthesis

Refuter finding confirmed: exact p=1, d=2 gives PS=-1, QS=0 at n=2; padding without an exit permits n=1 and CERTIFICATE_ERROR. The completed constant branch now exits directly to Step7 after padding. Nonconstant updates and all output interfaces are preserved. Verdict: `confirmed_fatal`; repair_confidence: 1. The refuter report and scope observation digest are preserved, with their distinct byte bindings explicitly recorded in the decision. The current pre-repair source matched frozen reader-post raw SHA256 4969f9151cee72c91179c0e1849a7c30253d9c8bcd9a7eaea62973c3361a4725. The historical counterexample is applied to that actual matching wording, not to the corrected bytes.

### Audit enrichments

`lem-qa-23-hermitian-signal-convention-conversion` and `lem-qa-23-phase-sequence-unitarity`: `reviewed_no_defect`, change_kind `audit_enrichment`, defect_ids []. Exact original sources match frozen pre hashes. Quarter-turn citation support and explicit matrix dagger conventions clarify sound elementary calculations. No edits to these carriers were needed.

## Historical evidence blockers

Three touched theorem obligations remain `escalated`: `thm-qa-23-bounded-height-root-arithmetic-cost`, `thm-qa-23-certified-phase-approximation-correctness`, and `thm-qa-23-qsp-phase-factorization`. Current entry sources matched their frozen reader-post raw hashes. Current proof review found no mathematical defect, but it cannot establish the exact historical delta. The available older owner-step2 archives and runtime QSP candidate/integration carriers do not match frozen pre-reader hashes; no git history for these theorem paths exists. These older carriers are not substituted for the missing preimages. An owner question requested either exact archives or explicit current-content-review authorization. No such authorization has been received. Required owner action: provide authenticated matching bytes, or authorize the current-content-review disposition with historical uncertainty retained. These escalations are not cleared by successful local checks.

## Dependency and consumer review

Opened every owned carrier used by the review, all its direct prerequisite Statements/Definitions, and the full ROOTS, REALROOTS, SIGNCERT, ROUND-QSP, GRID-ROOTS and PHASEAPPROX procedures. Checked the polynomial, exact field/order, discriminant, trigonometric, series, norm, register, gate-order and cost interfaces. This is focused use review, not a standalone audit of every transitive foundation proof.

Both edited algorithm Definitions retain their deps, kinds, provenance and justified_by fields; manifest rows contain no Definition-body mirror. Algorithms have no phase proof or proof-contract entries to fabricate. Their consumers’ exact citation mirrors were refreshed. Existing stale current cost/basis quotes and omitted step inputs in the owned contract were also refreshed after independently reading the current supplier text; these are audit metadata repairs and create no defect rows. No verification.judge marker existed on either edited algorithm.

Definition-consumer search: bounded-root algorithm is used by its arithmetic-cost theorem and the synthesis algorithm. Synthesis is used by its correctness/query theorems, the A-page inventory, and outside algorithms `alg-qa-25-qubitized-hamiltonian-simulation`, `alg-qa-27-qsvt-pseudoinverse`, `alg-qa-28-qsvt-matrix-function`. Their actual calls use target/parity/tolerance and returned certified phase lists and propagate failures. The exit repair supplies that unchanged interface; none needs an edit or an owner repair escalation. No consumer Statement/Definition change is necessary; propagation ends here. No defective published library supplier was found; published carriers remained read-only. No proposed withdrawal was deleted.

## Mathematical risk review

### def-qa-23-qsp-admissible-polynomial-pair

Definition and both verification steps checked: coefficient conjugation equals value conjugation on real x; both norm summands are nonnegative on [-1,1]. Zero polynomials satisfy either parity; d=0 forces Q=0. Formal identity, nominal degree and endpoints are consistent. No AC.

### lem-qa-23-exact-interval-boundedness-decision

Steps 1.1–5.1: derivative/gcd multiplicities max(m-j,0) imply squarefree strata and odd-root detector. Endpoint factors are removed before Sturm counts. No odd interior roots gives one nonzero sign; n+1 distinct rational samples guarantee a nonroot. Checked f=0, nonzero constants, endpoint roots and empty products; O(d^4) counts n cubic gcds without a bit-cost claim. Exact F1–F4 supplier statements reviewed.

### lem-qa-23-hermitian-signal-convention-conversion

All five steps checked by matrix multiplication: CWR C=i WS dagger; conjugation by Z(pi/2) flips off-diagonal signs. Substitution gives endpoint shifts +pi/4 and -3pi/4 and internal -pi/2, including d=1. Scalar i^d is retained under control. Quarter-turn/exponential suppliers supply every scalar value. Printed Gilyen Eq16 and Childs Eq29.21 fail at x=1 as stated; local identity does not use them.

### lem-qa-23-phase-sequence-unitarity

All six steps checked: reflection square is I with determinant -1; diagonal phases are unitary determinant 1. Cofactor comparison forces lower row. Explicit first-row recurrence gives degrees/parities and expansion cancels mixed terms in the formal norm identity. d=0, s=0 endpoints and zero Q included. Dagger denotes matrix adjoint, star coefficient conjugation.

### lem-qa-23-polynomial-interval-sign-certificate

Steps 1.1–3.1: linear factorization follows by degree descent; conjugation preserves multiplicities, giving positive quadratic factors. Root-free components have fixed sign; roots and both endpoints cover the remaining points. Checked constants and empty root list; no choice is used. Exact F1–F5 supplier statements reviewed.

### lem-qa-23-positive-polynomial-complement-factorization

All eight steps and Gilyen Lemma 6 proof checked. Conjugate and sign symmetry preserve multiplicities; interior real roots have even multiplicity. Each root-class norm identity verified, including c=u+sqrt((u-1)^2+4b^2)>1 for nonreal quadruples. Product degrees and positive scale follow from factorization and a nonroot interior sample. Nominal parity corrected with the unit-norm factor x+i sqrt(1-x^2) only when degree slack permits it. A=0, constants, s=1, zero B/C covered. Finite root grouping uses no AC.

### lem-qa-23-qsp-completion-peel-arithmetic-cost

All twelve steps checked: unit-square-root branch x=-1 avoids division; otherwise s>0 and s+iy/(2s) squares to r with modulus1. Positive-root descriptors use charged comparisons and known bounded endpoints. Root-bound estimates control every completion radicand; norm-product leading coefficient is +/-1, so positive scale has known height. Array updates cancel leading terms, preserve identity and cost O(d^2), or O(d^3) with repeated full checks. Constant residual padding O(d). Towers store references; no expanded minimal polynomial or ideal-operation implementation bound. Strict rounded-target promise makes complement nonzero, including constant targets.

### lem-qa-23-sturm-root-counting

Steps 1.1–5.1: degree descent ends at a nonzero constant under gcd(f,f')=1. Intermediate zeros have opposite nonzero neighbors; simultaneous nonadjacent zeros affect separate adjacent pairs. Simple f-zeros lose exactly one variation. Endpoints are not f-roots and deleting intermediate zero entries preserves variation. Characteristic zero and completeness are supplied by K subset R; no AC. Exact F1–F6 statements reviewed.

### thm-qa-23-bounded-height-root-arithmetic-cost

All 10 steps checked against ROUND-QSP and GRID-ROOTS. Interpolation bounds coefficients by (d+1)d^d; shrink/round triangle bounds are 5tau/64 and 1-3tau/64, including d=0 and delta>=8. Nonconstant bivariate exclusions leave candidates in 100(n+1) grids. Primitive divisor bounds and nonzero integral discriminant give polynomial logarithmic separation. Only O(nD) positive-count nodes survive. Charged floor/grid operations and rational edge Sturm refinements have polynomial counts; constant input exits first. Cost explicitly excludes bit lengths of intermediate Euclidean fractions and phase refinement.

### thm-qa-23-certified-phase-approximation-correctness

All seven steps checked against PHASEAPPROX and exact trig/series/norm suppliers. Taylor tail ratios <=1/2 after index2; q differs from sin(theta-m) by <=2epsilon. Definite branches halve and buffered equality branch quarters width while retaining theta. Machin identity uses principal-range tangents, geometric arctan tails; 2<pi<4 justifies brackets. Axis/quadrant branches and final dyadic rounding give angle error <=3h/16 and chord error <=3h/13<h from absolutely convergent exponential series. Operator norm of diagonal difference equals modulus. Operation counts exclude oracle implementation and bit costs.

### thm-qa-23-polynomial-root-isolation-correctness

All 11 steps checked against ROOTS/REALROOTS/SIGNCERT: squarefree gcd and derivatives preserve distinct roots/multiplicities; Cauchy bound is strict; finite polynomial exclusions give admissible rational cuts; ray crossing lifts add over factors and count rectangle interiors. Root-free boundaries partition roots, middle-third widths contract, and finite separations terminate refinement. Constants return before Cauchy max; endpoint factors are removed for Sturm. No bit bound or AC.

### thm-qa-23-qsp-phase-factorization

All nine steps checked against admissibility/unitarity/conversion and Gilyen Theorem3 complete proof. Both directions checked; d=0,1 bases explicit. Nonconstant leading coefficients force degQ=degP-1 and unit ratio, giving exact cancellation and parity descent. Dagger/star distinction and off-diagonal cancellation signs are correct. Constant residual forces even nominal degree and Q=0; length-two identity pads it. The induction can be read in SU(2) form via the invertible conversion (for a residual nominal m, apply the reflection induction to i^m Pprime,i^(m+1) Qprime and convert back). This immediate convention change is nonfatal exposition, not an unsupported mathematical prerequisite. Scalar i^d gives both lower-row determinant signs.

### thm-qa-23-qsp-phase-implementation-error

Both proof steps checked: telescoping difference uses implemented prefixes and ideal suffixes in consistent order; all factors are unitary, so submultiplicativity bounds each summand by its single error. Vector triangle gives operator triangle directly. d=0 leaves one phase; exact signals delete their error terms. Nonnegative error bounds, no free controlled/inverse access and separate precision resources preserved.

### thm-qa-23-qsp-query-cost

Both proof steps checked: displayed length-d product has d signal slots and d+1 phase slots, including d=0. Named oracle access is an explicit condition, and no controlled/inverse call is added. Synthesis loop-exit correction returns the intended d+1 slots and changes none of this consumer interface.

### thm-qa-23-qsp-synthesis-correctness

All eight proof steps checked against current algorithms and prerequisites. Exact boundedness validation or endpoint/critical-point checks establish promise; completion is checked before zero branch, gives admissibility; peel plus constant-padding exit returns the correct source factorization and inverse convention conversion. Shrink error <=delta0/8 plus per-phase approximation/compiler sum <=delta0/8 gives matrix-entry real error <=delta0/4. Exact, numerical, constant, zero, axis, supplied-real and optional-failure branches covered. Efficient bound composes interval, rounded roots, tower completion/peel and buffered angles, excluding reading, oracle implementations and bit time. Original constant-loop failure is repaired in alg-qa-23-qsp-phase-synthesis; no theorem Statement repair is necessary.

## Source evidence

Read the complete relevant QSP arguments in [Gilyén et al.](https://arxiv.org/pdf/1806.01838), retrieved v1: PDF pp.8–10 (Theorem3 and induction), pp.11–12 (Theorem5 and complete Lemma6 root-class proof), p.13 Eq16, p.14 Corollary10. Conditions checked: degree, parity, exact polynomial norm identity, real even nonnegative complement and nominal slack. Arithmetic/descriptor claims are proved locally; the paper’s numerical root-time comment is not used as an exact arithmetic theorem.

Read [Childs Chapter 29](https://www.cs.umd.edu/~amchilds/qa/qa.pdf), printed pp.144–146 (PDF pp.152–154), Lemma29.1 and complete induction, Eq29.21. Direct substitution x=1 confirms the printed reflection conversion differs on its two sides; the local lemma instead derives its own correct matrices. Read the complete [EPFL Sturm proof](https://lara.epfl.ch/w/_media/sar10/sturms_proof.pdf), pp.1–2, including simple-root/nonroot-endpoint assumptions and both variation cases. Root winding correctness was checked from the local factorization/argument-lift proof, not assumed from an external theorem.

## Local checks

Initial risk-report: 17 items routed, 15 HIGH/CRITICAL. All 15 have specific complete current-content risk reviews. Final `risk-report --require-reviewed`: 0 errors. This completion records the current mathematics; it does not close the three historical adjudication blockers.

Reflow on the two changed algorithms: unchanged. Batched one-file-style precheck: two algorithms, zero phase proofs, zero failures, both `not-applicable` (exit0). Renderer: both files pass actual YAML and KaTeX checks (exit0). Batched final proof-layout on the two changed item paths: 2 items, 0 steps, 0 defects (exit0). No item edits followed that command.

Finite matrix checks: 70 cases passed, targets +/-1, even nominal d=0,2,...,12 and x=-1,-0.6,0,0.25,1. They check padded source list length, inverse affine phase conversion, the target diagonal and zero upper-right entry. This is finite sanity evidence; the general correction is justified by the local factorization/padding proof.

Strict proof-contract check initially found seven stale citation mirrors and three omitted step inputs. After metadata synchronization: 0 errors, 0 warnings, 17/17 checked (exit0). No defect row is created for mechanical failures. No judge, stamp, dispatcher or gate battery was invoked.

## Shared-ledger validation

The run-wide ledger validation failed (exit1): 270 rows checked, ten pre-existing outside-batch schema errors. Exact IDs: `qca60-b2-3a-zero-qubit-identification`, `qca60-b16-3a-simulator-procedure-specification`, `qca60-b20-3a-four-qubit-generator-orientation`, `qca60-b20-3a-four-qubit-logical-translation`, `qca60-b20-3a-steane-generator-orientation`, `qca60-b30-3a-local-preswap-proof`, `qca60-b30-3a-inverse-cost-premise`, `qca60-b30-3a-inverse-count-premise`, `qca60-b56-3a-rank-pivot-branch`, `qca60-b56-3a-published-page-caption`. Eight use unrecognized subclass values and two use location `example`. No batch47 row was reported invalid. Owner must route these schema corrections to the owning lanes; none was edited here. The four newly appended rows were separately validated against the same schema (4 rows, 0 errors). Ledger append used the tool’s serialized append with `--no-render`; shared generated-view refresh remains for the engine.

## Handoff

Two algorithm edits, completed current risk reviews, four closed confirmed-defect rows, seven exact decisions and three explicit historical-evidence escalations. Engine owns sealing, gates and transitions.

Final changed item raw hashes (after final formatter/layout; no subsequent item edits):

- `alg-qa-23-bounded-height-numerical-roots`: `c1f1b9a8866625d332781cfa166e6a19f0d591263e41cdd8416c3c659a526c18`.
- `alg-qa-23-qsp-phase-synthesis`: `3d9830da6ef91c55494a0e28bb10e29a32dd116269856c9f7cec0d58ce453998`.


## Owner follow-up: owner-alpha47-current-source-followup-1 (2026-10-16)

This outside-owner follow-up is authorized only by `research/quantum-computing-algorithms-60-2026-10-15-owner-step3-alpha-followups/batch47-owner-authorization.json` for the three touched theorem obligations below. The original historical escalations remain above and durably archived in `research/quantum-computing-algorithms-60-2026-10-15-owner-step3-alpha-followups/batch47-original-report.md` and `research/quantum-computing-algorithms-60-2026-10-15-owner-step3-alpha-followups/batch47-original-decisions.json`. The earlier statement that authorization had not been received describes the original review; this explicit owner authorization now permits current-only acceptance. Exact pre-reader bytes and the historical deltas remain unknown. No historical repair, new native stage coverage, reader/refuter closure, or certification is claimed.

Read the current three complete proofs, actual cited supplier Statements/Definitions and procedures, current contract citation/derivation/boundary/risk evidence, original report/decisions, reader-47 report and empty findings, and the relevant scope-review evidence. The previously missing alternating-series premise and determinant calculation are present in the current carriers. The native refuter finding about the synthesis constant-padding exit remains a distinct confirmed-fatal repair and its decision is untouched. This follow-up uses the self-contained local arguments; it does not claim a new reading of the external papers recorded by native Alpha.

### thm-qa-23-bounded-height-root-arithmetic-cost

Current steps 1.1–6.1 prove polynomial rational-operation counts for GRID-ROOTS on nonzero rational P, including the constant empty-list branch, and ROUND-QSP for bounded parity-compatible p and positive rational tolerance. Interpolation bounds each coefficient by (d+1)d^d (A=1 for d=0); shrink plus rounding gives 5tau/64 error and norm at most 1-3tau/64. Primitive-divisor coefficient bounds and the monic integer discriminant yield polynomial logarithmic root separation. The finite 100(n+1) grids avoid the listed root-line, vertex and identically-zero-edge exclusions; only O(n(D+1)) positive-count tree nodes survive. Rational edge Sturm refinement and charged normalization, denominator selection and integer searches give the declared polynomial operation count. Constants, degree one, repeated roots, dropped leading rounded coefficients and tau=8 are covered. The claim excludes intermediate Euclidean bit costs and later phase precision.

Prerequisite use: ROUND-QSP/GRID-ROOTS in items/alg-qa-23-bounded-height-numerical-roots.md, Definition; ROOTS/REALROOTS/SIGNCERT in items/alg-qa-23-polynomial-root-isolation.md, Definition; root correctness and Sturm Statements; monic discriminant Definition and root-formula Statement. The latter applies to W(t)=a^(r-1)V(t/a), which is monic integral and square-free, so its discriminant is a nonzero integer. Root correctness is used only after the same admissibility tests, not for a resource bound.

Decision: `reviewed_no_defect`, `change_kind: current_content_review`, `historical_delta_unknown: true`, `repair_confidence: 1`, `defect_ids: []`. No mathematical gap found. The existing item-specific complete current risk review remains applicable and needs no contract edit.

### thm-qa-23-certified-phase-approximation-correctness

Current steps 1.1–6.1 prove PHASEAPPROX returns rational t with chord error less than h=min(eta,1) and diagonal operator error equal to that chord error, in the explicitly charged exact algebraic or ideal-real equality/order model. Taylor recurrence tails are geometrically bounded on [0,2]. With epsilon=w/96, the determinant approximation has error at most 2epsilon; definite branches retain the angle and halve the interval, while the buffered branch retains it in width at most w/4. Machin enclosures follow from principal-range tangent calculations and alternating arctangent sums. Axis and all four nonaxis quadrants give width(J)<=h/4; dyadic rounding gives angular error <=3h/16 and the absolutely convergent exponential series gives chord error <=3h/13<h. There are O(log(1/h)+1) iterations, quadratic rational-operation cost and linear exact-coordinate comparison cost; bounded angles give the stated output bit length. No implementation or Turing-time conclusion is inferred.

Prerequisite use: items/alg-qa-23-certified-phase-approximation.md, complete Definition; actual cited trig parametrization, ranges, sine lower bound, subtraction, series, principal arctangent, reflection and quarter-turn Statements/Definitions; alternating-series remainder/enclosure Statement; Euler, exponential addition and absolute convergence, modulus laws, signal diagonal, inner-product norm, operator norm and orthonormal-basis interfaces. The unit promise excludes the zero vector; sine lower bound is used only for angle differences of absolute value at most 2. Equality at a buffer goes to the retaining third branch.

Decision: `reviewed_no_defect`, `change_kind: current_content_review`, `historical_delta_unknown: true`, `repair_confidence: 1`, `defect_ids: []`. No mathematical gap found. The existing item-specific complete current risk review remains applicable and needs no contract edit.

### thm-qa-23-qsp-phase-factorization

Current steps 1.1–4.1 establish both directions with the stated coefficient-conjugate identity, nominal parity and ordered reflection product. Unitarity supplies the forward direction. The d=0,1 constructions are explicit. For the converse in SU(2) convention, a nonconstant P has deg Q=deg P-1 and equal leading-coefficient moduli; the chosen half-argument cancels both highest peel coefficients. Direct expansion preserves the formal norm identity and lowers nominal degree. The induction at residual nominal m is justified by applying the reflection induction to (i^m Pprime,i^(m+1) Qprime), then the invertible convention map yields the source phase list (m=0 uses its explicit base). A constant residual has Q=0, unit P and even nominal degree; the displayed length-two identity pads it. Conversion back retains i^d and gives both required lower-row determinant signs, including s=0 endpoints. This immediate induction convention translation is nonfatal exposition, not an unmet prerequisite.

Prerequisite use: items/def-qa-23-qsp-admissible-polynomial-pair.md and items/def-qa-23-qsp-signal-sequence.md, Definitions; complete proofs of items/lem-qa-23-phase-sequence-unitarity.md and items/lem-qa-23-hermitian-signal-convention-conversion.md; polar-form and Euler Statements, complex field/modulus Definitions, polynomial-ring, degree-product and division Statements/Definitions. The local conversion proof, not either qualified printed source equation, supplies the affine shifts and scalar. Matrix dagger and polynomial star remain distinct.

Decision: `reviewed_no_defect`, `change_kind: current_content_review`, `historical_delta_unknown: true`, `repair_confidence: 1`, `defect_ids: []`. No mathematical gap found. The existing item-specific complete current risk review remains applicable and needs no contract edit.

Only the three authorized escalated touched rows are amended. Their original evidence is retained in place and in the archived decisions; current-only acceptance does not establish any historical delta. No source, contract, manifest, ledger, state or coverage edits; no historical archive search, tests, checks, gates, hashes, stamping, judge, certification, publication or push in this follow-up. Owner/engine retains current hash binding and gates. No unresolved mathematical obligation was found within these three subjects; historical uncertainty remains.
