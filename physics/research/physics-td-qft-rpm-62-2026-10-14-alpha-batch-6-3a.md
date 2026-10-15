# Batch 6 Step-3a adjudication

Run: physics-td-qft-rpm-62-2026-10-14; group: batch-6. Scope and order are unchanged. Reader made no edits: pre/post snapshots agree for all owned carriers. This report records independent local review, not judgment or certification.

## lem-tdmath-convex-function-local-lipschitz

The convex-set supplier defines line segments; finite combinations follow by induction on their finite number. The reflected-point lower bound and extended-segment Lipschitz estimate are valid; d=0 is the singleton case with L=0. Norm clarification preserves the interface. No external source-fidelity claim is made.

reader:6:4: confirmed_fatal. Defined the Euclidean norm, balls and openness explicitly.
refuter:6:4: confirmed_nonfatal. Made the upper bound on the dilated cube explicit using its vertex values.

## lem-tdmath-integral-zero-uniqueness

Independently checked the Darboux definition and continuity-implies-integrability statement: a<b is required, and boundedness is supplied. Local sum concatenation and refinements prove additivity; lower/upper-sum bounds give the norm estimate and derivative squeeze. Product and chain rules have interior differentiability; MVT has endpoint continuity. Positivity of the real exponential follows from its earlier definition. L=0 and t=0 are included. No infinite choice is used. Consumers of the clarified integral convention will be checked with the boundary-graph proof.

reader:6:10, refuter:6:10: confirmed_fatal. Defined the degenerate integral as zero.
reader:6:11, refuter:6:11: confirmed_nonfatal. Derived integral bounds and additivity locally from Darboux sums before using the difference quotient; this elementary closure is nonfatal polish rather than a false conclusion.

## lem-tdmath-relative-interior-segment

The simplex argument is finite: successively take points outside the affine span until its dimension equals that of the hull; barycentric coordinates are an invertible finite linear coordinate map. k=0 and t=0 are handled separately; for 0<t<1 the fixed ball estimate is uniform. Clarification does not change the geometric claim or require AC.

reader:6:2, refuter:6:2: confirmed_fatal. Defined affine hull, affine Euclidean space, relative balls/interior/closure locally.
reader:6:3, refuter:6:3: confirmed_nonfatal. Replaced the unnecessary countable selection by one nearby point and a uniform ball estimate.

## lem-tdmath-relative-boundary-support

Checked all five proof steps: closure convexity uses two finite witnesses; canonical rational enumeration avoids countable choice; nearest point exists on a compact truncation and is unique by the strict squared-norm midpoint identity. The choice-free finite-dimensional sphere supplier gives a unit limit; the limiting inequality holds for each q. Local row reduction supplies two independent normals in codimension at least two. The dimension-one relative case is included; k=0 belongs only to the separate ambient clause. All geometric terms are now explicit and the unused separation edge is removed.

reader:6:5, refuter:6:5: confirmed_fatal. Defined affine hull, affine Euclidean metric and supporting hyperplanes locally.
reader:6:6, refuter:6:6: confirmed_nonfatal. Proved the needed orthogonal-complement dimension lower bound by row reduction.
reader:6:7, refuter:6:7: confirmed_nonfatal. Removed the expressly unused separation prerequisite and context citation.

## lem-tdmath-unique-support-inward-ray

Checked the cone separation argument against the closed-convex separation supplier: reversing the separating functional gives the needed orientation, and conicity forces nonnegativity. Uniqueness fixes the ray of normals, since full interior excludes both signs. A finite simplex inside the strict half-space can be approximated by finitely many cone generators; barycentric continuity preserves its interior. The direct max_j a_j bound gives delta A<1 and an entire neighborhood x+tN in K. d=1 is included, and no infinite choice is used. All boundary and support notation is defined locally.

reader:6:8, refuter:6:8: confirmed_fatal. Defined interior, closure, boundary, closedness and supporting hyperplane locally.
reader:6:9, refuter:6:9: confirmed_nonfatal. Replaced compactness-to-boundedness by the elementary maximum bound; removed unused Heine–Borel prerequisite.

## def-tdmath-forward-sector-hypotheses

Definitions clarify the adopted A1–A7/S1–S3 hypotheses without strengthening the claims; slope estimates use the same Euclidean norm. Raw tags and represented-state weights remain distinct, and comparisons keep the equal-mass domain. Direct and reference consumers will be checked at their routed positions; outside consumers requiring semantic changes must be escalated.

reader:6:1, refuter:6:1: confirmed_fatal. Defined Euclidean geometry, relative topology, convexity, local Lipschitz regularity and arcwise connectivity before their first use.

## lem-tdmath-forward-spectator-cancellation

Checked all three steps with A1–A6, exact equal masses and finite coefficient maps. Finite replacement with spectator C/r gives the epsilon sequence; m(C)=0 implies C=0. Stability uses fixed positive C on both sides. Signed differences have zero total, and common minima cancel pointwise; transitivity/addition follow by adding the two nonnegative comparisons. No CH or infinite choice is used. Canonical successor reciprocals supply strictly decreasing epsilon.



## ex-tdmath-logarithmic-coherence-witness

Checked each formula and all seven verification steps. Positive weighted logarithms have a unique maximizing allocation U_j=alpha_j U/C; finite positive weights permit strict two-point concavity grouping. Scaling preserves log ratios and multiplies entropy, and composition equality follows from two different epsilon values in stability. Positive-orthant boundary graphs give unique support and locally Lipschitz slopes; paths are straight segments in the work coordinates lifted to graphs. T4 uses two volumes, T5 the energy ratio; equality of maximizing allocations supplies thermal equivalence and nested-join coherence. Parameters and ratios are positive/dimensionless; this is a consistency example with no measured data.



## lem-tdmath-sector-interior

Checked all four steps and the corrected local geometric suppliers. Empty ambient interior forces affine dimension below d via the relative-interior simplex. Codimension at least two contradicts unique support. In codimension one, the strict-successor sector shares the hull; its last segment point is a relative boundary point because the chart is open and the sector relatively closed. Its in-hull support extends to an ambient plane distinct from the hull, contradicting S2. The d=1 interval argument and zero-dimensional hull exclusion are explicit; only finitely many witnesses are selected.



## thm-tdmath-forward-boundary-graph

Reviewed all nine steps, with global closedness supplied by a local closed-ball truncation. Supports agree locally/globally by convexity, and supports of A_x at z must equal the unique support of A_z. Moved local constancy after the fixed-fiber orientation deduction so that neighboring boundary fibers transfer their sign to all their states without a forward premise. The nested compact-interval recursion gives a unique interior-domain limit, contradicting the inward ray. Graph solutions use a local Lipschitz estimate and the repaired zero-start integral inequality; convex graph secant/support bounds prove total differentiability with locally Lipschitz derivative. Relative closure and connected projections propagate graph equality to equal sectors. The integral t=0 convention is compatible; no change to the stated result.

refuter:6:15: confirmed_nonfatal. Inserted a globally closed convex ball truncation before every inward-ray use and proved equality of its supporting planes with sector supports.

## lem-tdmath-contact-energy-orientation

Both steps checked: T2 supplies a reversible split, opposed signs permit a small energy redistribution increasing both components, and T1 returns the changed split to the same join. Composition and cancellation forbid that reverse comparison. The coordinate change applies one sign to every component and preserves energy addition; no measured energy or temperature is redefined.



## thm-tdmath-sector-nesting

All four steps checked with transitivity, common-boundary equality and full-dimensional sectors. An interior successor sector meeting an old boundary would equal it and contradict its support at the new base. If states were incomparable, the segment from an outside point to any interior point gives a boundary crossing and the collinear implication; reversed roles give two interior inclusions. The relative-interior segment supplier makes each sector the relative closure of its interior, yielding a contradiction. Both strictness directions distinguish boundary equivalence from interior membership.



## lem-tdmath-reference-strip-coordinate

Checked strict order of mixture parameters by signed differences and inverse positive scaling. For 0<lambda<1, reversible scaled equilibrium joins compare in one simple join domain; endpoints use the given strip. The nonempty bounded lower cut has supremum by real completeness. Deterministic tail sequences s±1/n give each attained comparison by stability; s=0 and s=1 are excluded by strict endpoint comparisons. Unique reference coordinate follows by strict reference order. No CH is assumed for compounds before this deduction.



## thm-tdmath-reference-strip-gluing

All six steps checked. T4 strips are open by sector nesting and cover the domain. An overlap contains a strict vertical pair; reference coordinates increase, and signed subtraction supplies a positive affine transition. Finite segment paths give compact connected sets and a finite connected strip subcover, so a rooted tree glues all finite target states. Reversible scaled-tag transport retains effective coefficients alpha_j r_j; equal bookkeeping mass gives equal total effective amount. Signed reference differences compare by their scalar coefficient, including zero total mass where both maps are empty. Infinite choice and entropy across different compositions are not used.



## thm-tdmath-additive-entropy-representation

Independently reviewed current producer proof, contract and manifest. Its raw hash remains 715941f3af23dde78fd6c06d98d70ec040bc667c8625b2980a248c39476c5e69, exactly the observed immutable pre-reader carrier. For every common mass M, A_R=R_qA+(M-1)e_x0 and B_R=R_qB+(M-1)e_x0. F1 explicitly permits common signed translation. Thus F3 applies after subtracting that same signed map, without division by M. When M=0, nonnegative A=B=0 and qA=qB=0 by step 1.2. All four current proof steps and exact supplier statements are valid; neither original nor current bytes have the alleged mass mismatch.

reader:6:15: false_positive. Independently reviewed current producer proof, contract and manifest. Its raw hash remains 715941f3af23dde78fd6c06d98d70ec040bc667c8625b2980a248c39476c5e69, exactly the observed immutable pre-reader carrier. For every common mass M, A_R=R_qA+(M-1)e_x0 and B_R=R_qB+(M-1)e_x0. F1 explicitly permits common signed translation. Thus F3 applies after subtracting that same signed map, without division by M. When M=0, nonnegative A=B=0 and qA=qB=0 by step 1.2. All four current proof steps and exact supplier statements are valid; neither original nor current bytes have the alleged mass mismatch.

## lem-tdmath-thermal-class-dichotomy

All seven steps checked. CH applies after the fixed positive type-weight normalization; entropy concavity follows A7, and finite concave functions are continuous by the repaired supplier. Energy one-sided slopes exist by monotone secants, are finite by neighboring secants, and are strictly positive by strict increase. T1/T2 and the same-type entropy representation identify thermal equilibrium with intersecting reciprocal slope intervals. Finite interval intersection plus compactness gives a common class interval. Under the negated second alternative, levels belong to single classes; energy-fiber ranges are open intervals and finite overlapping covers order the global level-to-class map. T4 forces each class range open in a connected entropy range, hence one class. No empirical inference is asserted; producer finding reader:6:15 is false-positive as shown by exact common signed translation.



## thm-tdmath-conditional-contact-calibrator

All nine steps checked against T1–T5 and explicit C1. Opposed component increments in two reversible splits give a calibrator. Assuming none, cancellation forces all splits on a join adiabat onto fixed component adiabats, and coordinate-axis paths in its connected work projection propagate one thermal class using C1. The dichotomy then makes each join one thermal class; T5 and C1 propagate to components. A small energy redistribution contradicts uniqueness of the split. Signed reductions identify reference increments, including negative coordinate coefficients; fixed-composition base terms cancel and meter increments compare both ways. Zero mass yields empty compounds. The common energy sign is mathematical only and empirical claims are absent.



## thm-tdmath-arbitrary-family-calibration

All four steps checked. Explicit AC chooses simultaneous reference states, entropy representatives and nonempty calibrator tuples over I; finite choices within each later comparison add no further choice premise. Positive entropy gaps define mu_i/Delta_i>0, including the meter branch with both gaps one. Finite tagged factorization makes the sum additive and extensive. Signed reductions have zero total coefficient and zero same-type entropy; calibrators replace type increments by finite meter increments. Equal fixed composition cancels base maps; meter positive/negative parts have equal mass, and its entropy representation proves both directions. Changing type origins contributes conserved amount-weighted offsets only. No infinite sums or cross-composition conclusion is made.



## def-tdmath-decorated-chain-costs

Reviewed the full definition and all cost consumers. Products must be actual sums in the product state set; surjectivity supplies endpoint factorization, and positive scaling is a bijection onto the scaled state set. Empty type is the zero map, not an untyped symbol. The scalar mass and primitive amount conditions remain separate. Defined ordered extended reals, partial sums, scaling, negation and greatest-lower-bound convention; empty and unbounded-below witness sets retain +infinity and -infinity. Finite entropy and same-composition representation are adopted from the calibrated family with its AC hypothesis. These explicit closure assumptions make every spectator, scaling and chain endpoint construction admissible.

reader:6:12, refuter:6:12: confirmed_fatal. Specified surjective product state maps, scaling bijections, entropy compatibility and zero-unit state.
reader:6:13, refuter:6:13: confirmed_fatal. Specified the extended-real codomain, order, infimum and all used infinity arithmetic conventions.

## lem-tdmath-decorated-cost-algebra

All five proof steps checked with the repaired state closure. Summing a closed chain inputs/outputs gives equal composition and nonnegative entropy difference. Product costs use finite common spectators admitted by the product maps; chains allow independent input/output states at intermediate types, so no false state-matching condition is introduced. Fixed-catalyst padding is cost-preserving, and scaling with its inverse gives equality of finite and infinite infima. Triangle and product inequalities cover finite, unbounded-below and +infinity cases while excluding undefined opposite infinities. Finite reverse witnesses bound all forward witnesses below. The new product closure resolves the originally undefined witness in step 1.2.

refuter:6:14: confirmed_fatal. Reviewed the spectator construction after the product-state map repair: every padded edge now belongs to its declared product state set and has unchanged cost.

## def-tdmath-cost-offset-difference-space

Reviewed the definition of both relations and all four displayed operations against the cost algebra; it reserves representative-independence and vector-space laws for the separate well-definedness lemma. Catalysts range over the same nonempty type family; the unit exists. Negation swaps pairs, and positive scaling retains the declared type maps. No quotient law is assumed before justification.



## thm-tdmath-unattained-cost-entropy-inference

Reviewed all five steps and both implication directions. The public comparison is now expressly restricted to equal type masses, its actual domain. F=+infinity excludes witnesses, F=-infinity admits any finite threshold. For an arbitrary index choose only one approximating finite witness. Same-composition input/output multiset matching gives L_n prec R_n from its entropy difference; running all actual edges and cancelling their finite output spectator gives x+epsilon z0 prec y+epsilon z1. Universal generalization yields every index without a countable selection, and stability with fixed positive equal-mass meter states closes the reverse implication. Neither an attained infimum nor empirical precision is claimed. Only the offset theorem is a direct in-batch result consumer, and its admitted transitions already have equal mass.

reader:6:14, refuter:6:16: confirmed_fatal. Restricted the iff to equal-mass type pairs; undefined unequal-mass comparisons no longer occur.

## lem-tdmath-cost-offset-difference-space-well-defined

All six steps checked. Triangle/subadditivity gives both relevant costs at most zero; witnesses d<epsilon exist from that upper bound on the infimum, without presupposing the desired zero equality. Closed-cycle nonnegativity then bounds every opposite witness below by -epsilon, so both infima are zero. Splitting yields actual zero-cost edges, hence scalar addition. Catalysts compose to prove raw-pair transitivity; multiplying and scaling their witnesses proves representative-independence. Pair swapping supplies inverses. Positive scalar laws extend by group cancellation and signs to every real scalar, including zero. The closure and zero-unit conventions in the repaired cost definition support each operation. No Choice is needed beyond that already adopted for the calibrated family.



## thm-tdmath-splitting-cost-quotient

All six proof steps checked. No-sinks plus finite reverse witness excludes -infinity. If pair classes agree, zero-cost equivalence with catalyst bounds F(P,D) in both directions; common-catalyst invariance identifies the original two costs, so p is representative-independent even at +infinity. Homogeneity and product subadditivity make p sublinear, and no-sinks makes its finite domain symmetric. The exact infinite-valued sandwich supplier first applies real Hahn–Banach on that finite domain and then extends by a basis under AC, yielding the two-sided offset bounds. Admitted transitions necessarily have equal mass, so the repaired iff theorem applies. The final subtraction is between finite real quantities for any admitted transition. No strict/no-gap extension is inferred.



Reader:6:15 disposition correction: the initial generated nonfatal/fixed ledger row was a bookkeeping error. The append-only successor row supersedes it as false-positive, matching the independent proof review and exact unchanged observed hash. No producer repair was made.

## td-math-convex-contact-and-mixing

The summary now preserves the mathematical scope, assumptions C1/T5 and weak no-sinks conclusion while avoiding the original unconditional proof-status presentation. No empirical law or workflow certification is claimed. The inherited page prerequisite remains a separate owner disposition, assessed below.

reader:6:16, refuter:6:17: confirmed_fatal. Rephrased the page summary as conditional draft content and expressly separated local proof review from readiness and publication acceptance.

## Consumer dispositions and owner alert

Every direct dependency/reference consumer of the changed Statements/Definitions was located in `items/` and `library/`. The in-batch uses were checked at their ordered reviews: `lem-tdmath-convex-sector-closedness` uses the clarified affine hull and the choice-free segment result; the support, inward-ray, local-Lipschitz and integral suppliers are consumed exactly by the sector and boundary-graph proofs. `def-tdmath-thermal-contact-hypotheses`, signed comparison, strip/gluing, contact calibration and the logarithmic witness use the same Euclidean regularity/topology conventions. No semantic adjustment is needed. The cost algebra, offset definition, difference-space lemma, iff theorem and splitting-cost theorem now use explicit product/scaling closure and empty-unit typing. Only necessary proof and metadata repairs were made. The equal-mass restriction propagates to no further in-batch Statements: every admitted transition in the offset theorem already lies in that domain.

Outside consumer `pthm-td-contact-product-comparison` (batch 7), F2 and steps 1.1–2.1: the forward-sector definitions clarify its unchanged geometric assumptions; no repair is necessary. Outside `pthm-td-universal-mixing-entropy` (batch 7), F3 and step 1.1: its admitted channels expressly preserve equal formal mass, so the iff restriction is compatible.

**Owner alert, batch 7:** `def-td-cross-type-reaction-network`, Definition paragraph beginning “finite-factor closed,” does not explicitly require the newly supplied surjective product state map and positive scaling bijection of `def-tdmath-decorated-chain-costs`. Its phrase about type operations and channel conservation alone does not imply those state-space hypotheses. The smallest required consumer resolution is to declare the actual network state product and scaling maps (or adopt the exact supplier closure conditions), including the zero-unit map and additive baseline compatibility, then verify these as model assumptions in `pthm-td-universal-mixing-entropy` F2/steps 1.1–2.1. No physical realizability follows merely from tags or conservation constraints. These two outside carriers were read in full and remain untouched. This is an unresolved owner consumer disposition; local batch-6 cost repairs do not close it, and no batch-7 acceptance is claimed. The supplier's consumer closure is open until the owner resolves it. No mathematical supplier outside this workspace was changed.

## Sources and proof-status limits

The exact local supplier IDs and uses are recorded in each item review and the regenerated contract citations. Published supplier Statements/Definitions were read for Euclidean geometry, compactness, rational density, Darboux integration, real/total derivatives, logarithms, finite weighted AM–GM, strict exponential convexity, the real field, canonical naturals and Choice. Their published proofs were not recertified. The current in-run additive-entropy and infinite-valued sandwich proofs were read in full; their use requires their stated CH or AC assumptions, respectively. No planned statement is represented as proved, and no defective published carrier was confirmed. In particular the logarithm's integral convention has its own `def-oriented-integral` supplier; the locally repaired zero-start lemma formerly had only the nondegenerate Darboux definition.

Retrieved [Lieb–Yngvason, arXiv v2](https://arxiv.org/pdf/cond-mat/9708200v2), checking the relevant geometry and graph passages on printed pp. 44–47, thermal-class dichotomy on pp. 56–57, and unattained chain-cost deduction on pp. 75–76. The local proofs supply their own truncation, derivative squeeze, interval ordering and finite-witness arguments. Source Theorem 3.5 also has a distributional uniqueness clause that the local carrier does not assert. The local calibrator keeps its explicit stronger T5/C1 hypotheses. Arovas references remain contextual; no full-text fidelity review of that book or of every source cited by an imported supplier is claimed.

## Current scope and readiness

Both immutable batch-6 snapshots have identical carrier/contract/manifest fingerprints, confirming that the reader made no repair delta. All 33 original obligations are decided exactly once: 20 confirmed fatal, 12 confirmed nonfatal, one false positive. These counts describe finding obligations, including duplicate independent detections, rather than unique defects. Every completed routed repair has confidence 1 and exactly one closed ledger row per finding decision; the false-positive row preserves the original unchanged producer hash and routing path. No touched/page obligation was invented, and no stable ID or planned withdrawal was removed. Ten items and the A-page summary were locally changed; the proof contracts and manifest Statements, dependencies and provenance were synchronized. The final boundary-graph phase numbers are 1.1, 1.2, 2.1, 3.1, 4.1, 5.1, 6.1, 7.1, 8.1.

The batch-7 state-closure consumer alert and inherited `td-math-local-pfaff-geometry` page requirement remain open for the owner. No engine gate, judge cycle, decision hashing or certification was initiated. The local proof/risk reviews are complete; supplier consumer closure and page readiness are not claimed.

## Focused checks

- Precheck on the ten changed item paths: eight proof-bearing items checked, zero failures; definition items have no phase proofs. The boundary-graph checker initially requested canonical consecutive phase numbering, which was adopted before the final checks.
- Rendercheck on the ten items and changed page: eleven files pass real KaTeX and renderer YAML parsing.
- Strict proof-contract check: all 28 batch contracts checked, zero errors/warnings. Citation text was regenerated for changed suppliers and their owned consumers; obsolete step locators were repaired.
- Risk report run before reviews and rerun with `--require-reviewed`: all 28 routed items checked, zero errors; every HIGH/CRITICAL entry has a complete specific review.
- Selected dependency check with `--items-file /private/tmp/b6_items.json`: selected item/page and prerequisite-cycle checks pass. An initial invocation used the unsupported `--items` selector; that invocation is not counted as scoped evidence.
- Required proof-layout on all ten final changed item paths: 35 numbered steps, zero layout defects. The ordinary command initially failed before scanning because the app's fallback TypeScript loader could not resolve its `@/` and extensionless imports. A temporary Node resolve hook supplies only the app tsconfig's existing alias and normal TypeScript extensions, loading the actual unchanged application renderer. Successful command: `NODE_OPTIONS=--import=/private/tmp/prestige_alias_register.mjs node tools/physics-support/proof-layout.mjs` followed by the same ten paths. No proof content, checker or external checkout was changed by this execution harness. A harmless Node register deprecation message was emitted.
- Exact decision coverage: 33 owed findings, no missing, duplicate or extra decisions. Each decision references exactly one matching active closed ledger row; the bookkeeping predecessor of the false-positive row is superseded append-only.

Full-run defect-ledger validation reports three outside batch-18 taxonomy errors (`tdqftrpm62-b18-source-norm`: `source-misdescription`; `tdqftrpm62-b18-explicit-geometry` and `tdqftrpm62-b18-entropy-energy-notation`: `undefined-term`). These rows are outside this dispatch and were not edited. They are mechanical ledger diagnostics, not additional mathematical defects. Batch-6 ledger rows are validated separately below. The engine still owns decision hash stamping and the gate battery.

Batch-6-only ledger structural validation: 20 rows, zero errors, including the superseded bookkeeping row and its false-positive successor. Final focused boundary-graph precheck after the last tag edit: one item, zero failures. Required proof-layout was run after all item edits. Handoff leaves only the explicitly named outside consumer/page dispositions and outside ledger diagnostics for the owner/engine.
