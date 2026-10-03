# Batch 12 Step 5a adjudication

Run `frontier-38-owner-30`; group `batch-12`. Scope is batch 12 only. Review follows the generated dependency order. Reader/refuter findings are evidence, independently checked below. No judging, stamping, agent dispatch, or stage transition is performed.

Source sections inspected: Milnor appendix printed pp. 55–57 (local `/tmp/pair12/milnor-appendix.txt`); Guillemin–Pollack Ch. 2 §4 printed pp. 77–84 (`/tmp/pair12/GP-ch2-4.txt`). Sources are https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf and https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf. Additional source and dependency coverage is recorded with each item.

## `lem-direct-sum-factor-swap-scales-oriented-bases-by-a-sign`

Obligation `touched:12:lem-direct-sum-factor-swap-scales-oriented-bases-by-a-sign`: **amended_repair**. Current steps 1.1–2.1 count kl block transpositions and transport determinant rays by the addition maps. The reader correction removes the false orientation-preserving external swap assertion: two lines give determinant -1. Reviewed exact product orientation, determinant-line and internal-sum definitions. Zero factors give sign +1 while retaining both scalar rays; no choice is used.

Defect row: `frontier-38-owner-30-5a-batch-12-lem-direct-sum-factor-swap-scales-oriented-bases-by-a-sign`. Repair confidence 1. The final proof/definition and all current prerequisite interfaces are reviewed as described above.

## `lem-overlap-of-arc-length-parametrizations-of-a-one-manifold`

Obligation `touched:12:lem-overlap-of-arc-length-parametrizations-of-a-one-manifold`: **amended_repair**. Reviewed every current step against Milnor appendix pp. 55–57 and the Riemannian, interval, diffeomorphism and inverse-function interfaces. The closed transition graph has affine slopes ±1, at most one segment per rectangle side, hence at most two components with equal slopes in the two-component case. Single-component gluing is injective; the explicit period p-q circle construction agrees at both seams and has compact open/closed image. Empty overlaps, included finite endpoints and infinite tails are covered. Given metric requires no choice. The old unsupported component-order assertion is replaced by the four-side argument.

Defect row: `frontier-38-owner-30-5a-batch-12-lem-overlap-of-arc-length-parametrizations-of-a-one-manifold`. Repair confidence 1. The final proof/definition and all current prerequisite interfaces are reviewed as described above.

## `thm-transverse-preimage-for-manifolds-with-boundary`

Obligation `touched:12:thm-transverse-preimage-for-manifolds-with-boundary`: **amended_repair**. Reviewed steps 1.1–3.1, all twelve declared supplier interfaces, and GP pp. 78–79. In the interior the boundaryless preimage theorem applies; at a face an invertible face minor makes Phi=(G,x_B,x_n) a local half-space diffeomorphism preserving the last coordinate. This proves tangent kernel, neatness and exact boundary. For n=c face rank n is impossible; for n<c even full rank is impossible. Codimension zero is the identity-coordinate construction. The local all-charts atlas needs no choice. Reader repair supplies the formerly missing interior and zero-dimensional boundary cases.

Defect row: `frontier-38-owner-30-5a-batch-12-thm-transverse-preimage-for-manifolds-with-boundary`. Repair confidence 1. The final proof/definition and all current prerequisite interfaces are reviewed as described above.

## `cor-negative-expected-dimension-generic-intersections-are-empty`

Obligation `touched:12:cor-negative-expected-dimension-generic-intersections-are-empty`: **escalated**. Current rank-count steps 1.1–2.1 are sound for arbitrary transverse maps; reader restriction to a fixed closed embedded Z matches the cited statement. However F3 and step 3.1 require strong-topology density. Published thm-strong-whitney-approximation-by-transverse-maps has deps: [] and F1 merely assumes that very density statement; its complete two-step proof supplies no perturbation construction or proved prerequisite. The homotopy supplier only gives a homotopic transverse map and cannot control an arbitrary strong neighbourhood. Consulted current supplier and GP Ch. 2 §4, pp. 77–84; external Hirsch source search identifies the substantial density theorem, not a library proof. Required owner action: repair the published density supplier with topology/choice control or authorize a fully proved replacement while preserving this corollary contract. Leave full risk review open; mathematical claim itself is not refuted.

Defect row: `frontier-38-owner-30-5a-batch-12-cor-negative-expected-dimension-generic-intersections-are-empty`. Risk review remains open; owner resolution required.

## `def-local-oriented-intersection-sign`

Obligation `touched:12:def-local-oriented-intersection-sign`: **amended_repair**. Reviewed the complete local definition and all seven declared orientation/transversality interfaces against GP pp. 107–108,112–113. Dimension complementarity makes [df,dg] invertible and the first-factor-first determinant comparison gives eps_X eps_Z eps_M when all dimensions are zero. This corrects the reader-identified missing ambient point sign. A negative ambient point reverses the sign; empty sets carry no signs; swapping ordered blocks contributes (-1)^(xz). No compactness or choice is needed.

Defect row: `frontier-38-owner-30-5a-batch-12-def-local-oriented-intersection-sign`. Repair confidence 1. The final proof/definition and all current prerequisite interfaces are reviewed as described above.

## `lem-boundary-of-a-compact-one-manifold-has-even-cardinality`

Obligation `touched:12:lem-boundary-of-a-compact-one-manifold-has-even-cardinality`: **amended_repair**. Reviewed all five steps, ten supplier interfaces and Milnor appendix pp. 55–57. Local arc length uses ds/dt=sqrt(h)>0, including half-charts. In the noncircle case the overlap lemma makes every extension agree and identifies domain overlaps with image overlaps; the union of all extensions is injective and maximal without Zorn or arbitrary choice. An omitted image limit point gives a strictly larger interval. Compactness forces a closed interval and finitely many open components; circles contribute zero boundary, intervals two, empty W zero. AC_omega is explicitly inherited for the metric. Reader corrects the old component/maximal-extension and inverse-variable errors.

Defect row: `frontier-38-owner-30-5a-batch-12-lem-boundary-of-a-compact-one-manifold-has-even-cardinality`. Repair confidence 1. The final proof/definition and all current prerequisite interfaces are reviewed as described above.

## `lem-compact-transverse-complementary-intersections-are-finite`

Obligation `touched:12:lem-compact-transverse-complementary-intersections-are-finite`: **amended_repair**. Reviewed steps 1.1–3.1 and all seven supplier statements. General continuity characterization clause (c), unlike the old real-valued-only citation, makes the closed target preimage closed in compact X. The transverse preimage theorem gives discreteness in the correct subspace topology; singleton-cover compactness gives finiteness. Graph/projection identifies the fibre product rather than equating its pairs with points of X. Inclusion of either compact factor proves the submanifold version; empty preimage is finite and no choice occurs. GP pp. 77–78 supplies the same compact/closed boundaryless setting.

Defect row: `frontier-38-owner-30-5a-batch-12-lem-compact-transverse-complementary-intersections-are-finite`. Repair confidence 1. The final proof/definition and all current prerequisite interfaces are reviewed as described above.

## `def-mod-two-intersection-number`

Obligation `touched:12:def-mod-two-intersection-number`: **amended_repair**. Reviewed the full definition, all ten suppliers and GP pp. 78–79,83. The boundaryless compact-source restriction is necessary for invariant extension. The added two-map diagonal definition is typed: product dimension n equals diagonal codimension n; quotient differential df-dg is surjective exactly when [df,dg] is. Closed diagonal plus compact product gives finite counts; product homotopies support simultaneous deformation. Amended choice bookkeeping to include classification in the well-definedness argument as well as existence of representatives; empty and transverse finite counts remain choice-free. All direct reference/dependency consumers are in batch 12 and are checked under their actual uses; no consumer needs a stronger premise than its existing AC_omega.

Defect row: `frontier-38-owner-30-5a-batch-12-def-mod-two-intersection-number`. Repair confidence 1; risk review complete.

## `def-oriented-intersection-number`

Obligation `touched:12:def-oriented-intersection-number`: **amended_repair**. Reviewed the complete definition, seven suppliers and GP pp. 107–108,113. Compact boundaryless sources and closed target guarantee a finite ordered signed sum; ambient compactness is unused. The added compact-source two-map sum matches the local determinant comparison and inclusion specialization. Normalization permits noncompact ambient manifolds, including the graph/degree example. Amended choice wording to include classification in independence of transverse representative, not just selection. Transverse sums, signed point rays and empty sum are choice-free. Every direct consumer is owned in batch 12 and its actual convention/AC use is reviewed in this report.

Defect row: `frontier-38-owner-30-5a-batch-12-def-oriented-intersection-number`. Repair confidence 1; risk review complete.

## `lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count`

Obligation `touched:12:lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count`: **amended_repair**. Reviewed both steps, six suppliers, Milnor classification appendix and GP p. 108. Outward-normal-first in dimension one uses a single tangent vector and a scalar boundary determinant: at b positive outward gives +1 and at a negative outward gives -1. Reversing the interval reverses both signs. Finite component classification under declared AC_omega then gives zero total, including circles and empty W. Reader removes the invalid two-vector basis of a one-dimensional tangent space.

Defect row: `frontier-38-owner-30-5a-batch-12-lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count`. Repair confidence 1. The final proof/definition and all current prerequisite interfaces are reviewed as described above.

## `lem-preimage-orientation-agrees-with-the-local-intersection-sign`

Obligation `touched:12:lem-preimage-orientation-agrees-with-the-local-intersection-sign`: **amended_repair**. Reviewed steps 1.1–3.1 and eight supplier interfaces against GP pp. 107–108. Wedge of quotient lifts before TZ fixes the normal-first ray; kernel before quotient fixes the exact-sequence ray. Changing lifts adds terms annihilated by the tangent/kernel wedge. Smooth local frames give a smooth preimage orientation, with boundary tangent supplied by the face-transverse theorem. With K=0 its scalar ray sign is exactly the ordered [df,di] sign, including negative source, target and submanifold point rays. A positive target point gives sgn(df), a negative point reverses it. Reader corrects the incompatible normal convention and source-tangent substitute for a point ray; no choice is required.

Defect row: `frontier-38-owner-30-5a-batch-12-lem-preimage-orientation-agrees-with-the-local-intersection-sign`. Repair confidence 1. The final proof/definition and all current prerequisite interfaces are reviewed as described above.

## `lem-oriented-boundary-of-an-intersection-trace-has-opposite-end-signs`

Obligation `touched:12:lem-oriented-boundary-of-an-intersection-trace-has-opposite-end-signs`: **amended_repair**. Reviewed every step, all twelve supplier interfaces, GP p. 108 and the ordered determinant conventions. At each end dF_t:TX to Q is an isomorphism, giving a unique kernel vector tau=partial_t+v with t-component 1. The shear preserves the cylinder ray, so tau has the endpoint local sign; its outward/inward direction yields plus at 1 and minus at 0. Signed scalar quotient determinants cover x=0 without a nonexistent tangent basis vector. Closed target and compact cylinder give a compact neat trace; declared AC_omega is inherited only for classification. The reader fixes the old incomplete lifts and zero-dimensional computation.

Defect row: `frontier-38-owner-30-5a-batch-12-lem-oriented-boundary-of-an-intersection-trace-has-opposite-end-signs`. Repair confidence 1. The final proof/definition and all current prerequisite interfaces are reviewed as described above.

## `thm-mod-two-intersection-number-is-homotopy-invariant`

Obligation `touched:12:thm-mod-two-intersection-number-is-homotopy-invariant`: **amended_repair**. Reviewed the complete proof, all cited interfaces, the complete relative-smoothing and relative-transversality supplier arguments, and GP pp. 78–79,83. Compact closed trace plus face transversality gives exactly the two endpoint fibres; even boundary implies parity equality. The published relative-transversality proof imports the known unclosed general smooth-zero-set construction (canonical published ledger, frontier-37 caveat), so replaced its use with an explicit scalar t-cutoff of the fully read finite-dimensional submersive family, followed by the fully read parametric theorem. At lambda=0, d(lambda^2)=0 and endpoint transversality holds; elsewhere parameters supply surjectivity. This preserves both ends on the boundaryless R times X extension. Good parameters exist for positive-dimensional and zero-dimensional balls. Relative smoothing handles continuous homotopies; product homotopies handle simultaneous deformation. AC_omega is stated for all suppliers. Statement unchanged; source proof provenance is ai-altered; known published zero-set debt remains open outside scope.

Defect row: `frontier-38-owner-30-5a-batch-12-thm-mod-two-intersection-number-is-homotopy-invariant`. Risk review remains open; owner resolution required.

## `thm-oriented-intersection-number-is-homotopy-invariant`

Obligation `touched:12:thm-oriented-intersection-number-is-homotopy-invariant`: **amended_repair**. Reviewed all steps and current supplier interfaces against GP p. 108. Signed trace boundary is I(F_1,Z)-I(F_0,Z), and compact-one-manifold signed count is zero. The fixed-endpoint continuous-homotopy construction is supplied by the amended mod-two proof step 3.1; removed redundant citations to the general relative-transversality route with its known published zero-set debt. This preserves the claim and all orientation conventions, while declared AC_omega supports representatives, smoothing, parameter choice and classification. Empty traces and dimension-zero sources are covered by determinant-ray trace signs. Ambient compactness is unnecessary.

Defect row: `frontier-38-owner-30-5a-batch-12-thm-oriented-intersection-number-is-homotopy-invariant`. Repair confidence 1. The final proof/definition and all current prerequisite interfaces are reviewed as described above.

## `cex-geometric-cardinality-is-not-homotopy-invariant`

Obligation `touched:12:cex-geometric-cardinality-is-not-homotopy-invariant`: **amended_repair**. Reviewed every witness step, ten suppliers and GP pp. 78–79,109. The circle map cos(2pi u),s+sin(2pi u) is well defined on R/Z; the old unscaled periodic expression was not. At s=0 there are two transverse zeros with determinant signs -cos(theta), hence one of each sign; at s=2 none. At s=1 the slice is tangent but the full evaluation map is transverse by its parameter derivative (0,1). Thus raw transverse endpoint counts 2 and 0 differ, while signed and parity invariants remain zero; the tangency cardinality 1 is not a transverse signed count. Explicit computations need no choice; general invariance citations carry AC_omega.

Defect row: `frontier-38-owner-30-5a-batch-12-cex-geometric-cardinality-is-not-homotopy-invariant`. Repair confidence 1. The final proof/definition and all current prerequisite interfaces are reviewed as described above.

## `ex-latitude-and-meridian-intersections-on-the-torus`

Obligation `touched:12:ex-latitude-and-meridian-intersections-on-the-torus`: **amended_repair**. Reviewed both verification steps, eleven supplier statements and GP pp. 79,112. The purely topological quotient-circle supplier does not itself give smooth charts; the reader supplies short interval charts with integer translations and compactness from [0,1]. Product projections are submersions with nonempty circle fibres. At the unique intersection ordered coordinate tangent columns have determinant +1, swapped -1, and parity 1 in both orders. Every explicit meridian translate meets the latitude once with the same tangents; no classification or choice theorem is invoked to obtain that direct count.

Defect row: `frontier-38-owner-30-5a-batch-12-ex-latitude-and-meridian-intersections-on-the-torus`. Repair confidence 1. The final proof/definition and all current prerequisite interfaces are reviewed as described above.

## `ex-two-projective-lines-have-one-mod-two-intersection`

Obligation `touched:12:ex-two-projective-lines-have-one-mod-two-intersection`: **amended_repair**. Reviewed all three steps, ten suppliers including projective affine charts/covering/orientability arguments, and GP pp. 77–80,83. Reader replaces covering-implies-smooth shortcut by explicit normalized affine local inverses. Distinct origin planes meet in a line giving two antipodal sphere points; their tangent lines at p determine the planes and therefore are distinct. Corrected the stray x-perp to p-perp in that calculation. Antipodal saturation makes intersection of quotient images exactly the quotient of the intersection. Compact quotient circle injects and local charts give an embedding. Mod-two count is 1; no ambient oriented count exists; simultaneous-deformation obstruction uses the diagonal invariant under explicit AC_omega.

Defect row: `frontier-38-owner-30-5a-batch-12-ex-two-projective-lines-have-one-mod-two-intersection`. Repair confidence 1. The final proof/definition and all current prerequisite interfaces are reviewed as described above.

## `cor-oriented-intersection-reduces-to-mod-two-intersection`

Obligation `touched:12:cor-oriented-intersection-reduces-to-mod-two-intersection`: **amended_repair**. Reviewed three steps, seven current suppliers and GP pp. 107–108. Choose a common transverse representative under AC_omega, using already proved invariance; every local sign ±1 reduces to 1 modulo two, including zero-dimensional point-ray signs, and an empty sum reduces to zero. Inclusion gives the submanifold case. Reader correctly removes the false converse-like caveat: parity survives without orientations, but reduction comparing integer and parity requires both defined. The proof inherits classification through the invariance suppliers; transverse finite reduction itself is choice-free.

Defect row: `frontier-38-owner-30-5a-batch-12-cor-oriented-intersection-reduces-to-mod-two-intersection`. Repair confidence 1. The final proof/definition and all current prerequisite interfaces are reviewed as described above.

## `rem-properness-can-replace-compactness-only-when-the-intersection-trace-is-compact`

Obligation `touched:12:rem-properness-can-replace-compactness-only-when-the-intersection-trace-is-compact`: **amended_repair**. Reviewed the entire remark, its six exact suppliers and GP Exercise 13 p. 84. For complementary dimensions, a proper map gives compact finite transverse preimage only when Z is compact; sine graph (t,sin t) is proper by its first coordinate and has infinitely many transverse zeros at pi Z. For homotopies the combined preimage trace, not endpoint properness, must be compact; source boundary creates additional endpoints independently of compactness. Reader supplies those qualifications and corrects the source locator. Existing inherited AC_omega covers the boundary/classification argument; explicit properness computations are choice-free.

Defect row: `frontier-38-owner-30-5a-batch-12-rem-properness-can-replace-compactness-only-when-the-intersection-trace-is-compact`. Repair confidence 1. The final proof/definition and all current prerequisite interfaces are reviewed as described above.

## `thm-intersection-number-under-factor-interchange`

Obligation `touched:12:thm-intersection-number-under-factor-interchange`: **reviewed_no_defect**, change_kind `audit_enrichment`, defect_ids `[]`. Reviewed every step, all eight prerequisite interfaces and GP p. 115. The finite transverse swap proof is sound: local block sign (-1)^(xz) factors out of the finite coincidence sum, including signed zero-dimensional rays and empty sets. Reader aligns the ambient domain with the expanded intersection definition by removing unused ambient compactness. This is a sound enrichment of the closed-ambient special case, not evidence of an original logical defect. The manifest and risk review are enriched to match the verified current argument; no reader/refuter finding or open defect is closed here.


## `cor-a-null-cobordant-cycle-has-zero-intersection-with-a-disjoint-boundary`

Obligation `touched:12:cor-a-null-cobordant-cycle-has-zero-intersection-with-a-disjoint-boundary`: **amended_repair**. Reviewed all three steps, fourteen current suppliers and GP Boundary Theorem p. 80 and oriented version p. 108. S=W intersect A is compact because A is closed and W compact, neat by interior and face transversality, with boundary A intersect B. The general preimage orientation now comes from kernel-first/normal-first determinants, rather than improperly invoking a cylinder-specific lemma. At a boundary point TB to TM/TA is an isomorphism; an outward S vector is outward for W, giving eps_boundary=eps_(B,A)=(-1)^(ab)eps_(A,B), including b=0. Signed cancellation yields I=0, and independently even boundary yields I2=0 without orientability. Reader title correctly concerns algebraic, not geometric, vanishing; AC_omega is inherited for classification.

Defect row: `frontier-38-owner-30-5a-batch-12-cor-a-null-cobordant-cycle-has-zero-intersection-with-a-disjoint-boundary`. Repair confidence 1. The final proof/definition and all current prerequisite interfaces are reviewed as described above.

## `prop-two-map-intersection-as-a-diagonal-preimage`

Obligation `touched:12:prop-two-map-intersection-as-a-diagonal-preimage`: **amended_repair**. Reviewed all three steps, eight suppliers and GP pp. 113–115. Quotient (v,w) to v-w proves both directions of transversality iff, including empty coincidence. Complementarity makes [A B] invertible; the full product derivative has columns (A,0),(0,B),(I,I). Row subtraction and n-column block movement produce (-1)^(n+x)=(-1)^z times det[A B], preserving its original orientation sign rather than assuming it positive. Scalar source rays multiply both comparisons equally when x or z is zero. Diagonal reversal gives (-1)^n, hence the second displayed factor (-1)^x. Compact product gives a finite closed coincidence set; the reversed noncompact-diagonal expression is explicitly a finite local sum. Reader supplies missing numerical transversality and ambient hypotheses and repairs the false positive-basis computation. Choice-free.

Defect row: `frontier-38-owner-30-5a-batch-12-prop-two-map-intersection-as-a-diagonal-preimage`. Repair confidence 1. The final proof/definition and all current prerequisite interfaces are reviewed as described above.

## `cex-noncompact-intersections-can-escape-during-a-homotopy`

Obligation `touched:12:cex-noncompact-intersections-can-escape-during-a-homotopy`: **amended_repair**. Reviewed both witness steps, secondary arctangent paragraph, eight supplier interfaces and GP Exercise 13 p. 84. The polynomial F_t(x)=x-(1-t)x^2 has zeros 0 and 1/(1-t) for t<1, derivatives +1,-1, and at t=1 only 0 with derivative +1. Every slice is proper by absolute-value divergence, but the combined zero trace has an unbounded branch. Endpoint counts 2 to 1, signs/parity 0 to 1 therefore refute proper endpoints implying invariance; no compact-source invariant is falsely assigned to R. Arctangent is correctly secondary with improper endpoints. Reader replaces the old arctangent-only invalid proper-endpoint witness; no choice is used.

Defect row: `frontier-38-owner-30-5a-batch-12-cex-noncompact-intersections-can-escape-during-a-homotopy`. Repair confidence 1. The final proof/definition and all current prerequisite interfaces are reviewed as described above.

## `ex-degree-as-intersection-with-a-regular-value`

Obligation `touched:12:ex-degree-as-intersection-with-a-regular-value`: **amended_repair**. Reviewed all three verification steps, eight current suppliers including the complete published degree definition/formula arguments, GP pp. 108–109 and Stanford Corollary 143 pp. 49–50. Properness gives the finite regular fibre; positive target-point orientation gives precisely sgn(dF). Compact M is required only when naming the page intersection invariant or graph/fibre pair. Fibre-first tangent matrix [I I;0 dF] has degree sign; graph-first differs by (-1)^(n^2)=(-1)^n, as witnessed by circle identity columns (1,1),(1,0). At n=0 the two source M signs cancel and ambient M times N sign equals regular-preimage sign. Empty regular fibres give zero. Diagonal compatibility uses the same ordered sign. Reader corrects orientation order and noncompact-domain misuse; no choice is invoked for a supplied regular value.

Defect row: `frontier-38-owner-30-5a-batch-12-ex-degree-as-intersection-with-a-regular-value`. Repair confidence 1. The final proof/definition and all current prerequisite interfaces are reviewed as described above.

## `oriented-and-mod-two-intersection-numbers`

Obligation `page:12:oriented-and-mod-two-intersection-numbers`: **amended_repair**. Reviewed the entire A-page summary against all twenty placed current carriers. Reader corrects geometric zero-times to algebraic vanishing and carries classification AC_omega. Amended the remaining overbroad generic-pair prose to the exact corollary domains: rank emptiness for arbitrary transverse maps, perturbation of a map only against fixed closed embedded Z. Ordered signs, diagonal factor (-1)^z, outward boundary cancellation and compact-trace caveats agree with the current items. Page manifest order is preserved. The strong-density prerequisite defect in the linked negative-dimension corollary remains separately escalated; this local prose verdict does not close that debt.

Defect row: `frontier-38-owner-30-5a-batch-12-page-12-oriented-and-mod-two-intersection-numbers`. Repair confidence 1. The final proof/definition and all current prerequisite interfaces are reviewed as described above.

## `oriented-and-mod-two-intersection-numbers-examples`

Obligation `reader:12:1`: **confirmed_fatal**. Independently confirmed the odd-dimensional sign error: for the positive circle identity, graph-first/fibre-second columns (1,1),(1,0) have determinant -1, while degree is +1. The owned draft B-page summary now specifies fibre first and explicitly gives (-1)^n for graph-first order, matching the fully reviewed degree item. No item claim changed for this page repair; repair confidence 1.

Defect row: `frontier-38-owner-30-5a-batch-12-reader-12-1`. Risk review remains open; owner resolution required.

## `oriented-and-mod-two-intersection-numbers-examples`

Obligation `reader:12:2`: **confirmed_fatal**. Independently confirmed the false proper-endpoint attribution: arctan(x)-t maps all R into the compact interval [-pi/2-t,pi/2-t], whose preimage is R, so both endpoints are improper. Replaced the owned draft B-page summary witness by x-(1-t)x^2 on [0,1], whose proper slices and escaping zero are fully computed in the reviewed counterexample. Summary now states cardinality 2 to 1 and signed/parity 0 to 1, and labels the secondary arctangent endpoints improper. Repair confidence 1.

Defect row: `frontier-38-owner-30-5a-batch-12-reader-12-2`. Risk review remains open; owner resolution required.

## `thm-strong-whitney-approximation-by-transverse-maps`

Obligation `reader:12:3`: **escalated**. Confirmed current F1 repeats precisely the density asserted in the Statement, and its entire two-step proof only instantiates F1. There are no declared proved suppliers. Required result is density of transverse maps in every strong smooth neighbourhood, with noncompact-domain control; the homotopy supplier does not supply this control. Read the complete relevant Hirsch argument in Differential Topology Ch. 3 Theorems 2.1–2.2 and Lemma 2.3, printed pp. 74–77 (PDF pp. 44–45), https://people.dm.unipi.it/benedett/HIRSCH.pdf. It uses local Sard perturbations, a locally finite chart globalization and Baire density. This establishes the standard mathematical claim, not a local repository proof or its precise AC_omega accounting. A full proof cannot be repaired locally while published content is read-only. Owner must repair this supplier or authorize a fully proved replacement, then resolve cor-negative-expected-dimension-generic-intersections-are-empty F3/3.1. Current guard hash db882f561a8b83157c9253fa7933668055b6653c3cf2d263c07fed6afc224c96; raw hash 49a9c25a713682aeb54d7d469d0e0e26b24cd64f058d5df6b6d61b8f67ed8b2c. Leave debt open.

Defect row: `frontier-38-owner-30-5a-batch-12-reader-12-3`. Risk review remains open; owner resolution required.


Both refuter findings map to the same respective closed defect rows as reader:12:1 and reader:12:2, with explicit same_defect_as evidence in decisions. B-page prose was read-only in the reader assignment; this Alpha dispatch owns its two routed findings and applies the narrow summary repairs. Published content remains read-only. The reader:12:3 and touched corollary escalations deliberately retain open defect/risk status; no closed-repair claim is made for them.

## Manifest synchronization and source limits

All 24 routed item manifests were stale after the reader pass. Updated their exact current Statement/Definition/Example/refuted claim/Remark, title, dependencies, provenance, sources, well-definedness suppliers and argument snapshot. Preserved all IDs, page placement and manifest order. The 22 repaired touched-carrier decisions are amended_repair; factor-interchange is reviewed_no_defect/audit_enrichment because the final manifest carrier now differs from the reader snapshot; the negative-dimension corollary remains escalated. Read pre/post snapshot data: all 24 touched item raw hashes change across the reader pass, while the untouched definition does not. Exact prior full body files are not supplied; historical evidence here is the pre/post snapshots, manifest claims and detailed reader repair report, not a claim of a full preimage proof audit.

Additional primary sources read: Hirsch Differential Topology Ch. 3 printed pp. 74–77, complete local/global density proof, at https://people.dm.unipi.it/benedett/HIRSCH.pdf (scanned PDF pp. 44–45 viewed as images); Stanford Math 215B notes pp. 47–50 at https://web.stanford.edu/~lindrew/math215B.pdf (local PDF text). Stanford uses its stated closed-manifold/homological convention; the written ordered geometric diagonal signs are checked directly and against GP pp. 113–115 rather than transferred from the differently normalized homological formula. Existing source metadata is retained except the locally rewritten mod-two proof is marked ai-altered. No source-derived assertion here claims an exhaustive transitive published proof audit.

## Separate defect ownership

Independent mathematical defects on a carrier receive separate ledger rows, all referenced by its single routed decision. Mechanical checker failures receive no defect rows.

- `lem-direct-sum-factor-swap-scales-oriented-bases-by-a-sign`, `zero-rays` (false-computation): The former unique-zero-orientation claim fails for determinant lines: det(0)=R has two rays. Current step 2.1 consistently transports both signed scalar rays.
- `lem-compact-transverse-complementary-intersections-are-finite`, `fibre-identification` (ill-typed-construction): The preimage consists of points of X, whereas the fibre product consists of pairs. Current F1 gives the actual graph/projection identification.
- `def-mod-two-intersection-number`, `two-map-definition` (missing-map): The previously absent two-map count is used in simultaneous projective-line deformation. Current Definition explicitly supplies the diagonal construction, quotient differential, and product homotopy use.
- `def-mod-two-intersection-number`, `classification-choice` (missing-choice-scope): The reader definition claimed choice exactly once for representative existence while its independence proof uses AC_omega classification. Alpha explicitly includes both uses.
- `def-oriented-intersection-number`, `classification-choice` (missing-choice-scope): Choice is inherited through classification in independence of representatives, not only representative existence. Alpha corrects the exact Definition bookkeeping.
- `lem-boundary-of-a-compact-one-manifold-has-even-cardinality`, `metric-choice` (missing-choice-scope): The invoked Riemannian metric existence supplier assumes AC_omega; current Statement and A1 explicitly carry it.
- `lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count`, `classification-choice` (missing-choice-scope): Current Statement and F1 carry AC_omega from classification, so the boundary cancellation is not represented as a premise-free invocation of that supplier.
- `thm-transverse-preimage-for-manifolds-with-boundary`, `zero-face` (false-boundary-disposition): A zero-dimensional preimage cannot have a boundary-face point because face transversality would require rank n on an n-1 dimensional tangent. Current Statement/3.1 correctly excludes those points.
- `thm-mod-two-intersection-number-is-homotopy-invariant`, `endpoint-order` (ill-typed-construction): For the written [0,1] times X cylinder, the endpoint evaluations must be F(0,x) and F(1,x). The current Statement has the corrected order.
- `thm-mod-two-intersection-number-is-homotopy-invariant`, `classification-choice` (missing-choice-scope): Boundary parity uses classification under AC_omega. Current Statement, F6 and final step carry that premise explicitly alongside approximation.
- `thm-oriented-intersection-number-is-homotopy-invariant`, `ambient-compactness` (false-claim): The former assertion that ambient compactness is essential is false: compact source cylinder and closed Z already make the trace compact. Current Statement states the correct necessity boundary.
- `thm-oriented-intersection-number-is-homotopy-invariant`, `classification-choice` (missing-choice-scope): Current Statement carries AC_omega for classification and approximation, removing the omitted inherited hypothesis.
- `cor-oriented-intersection-reduces-to-mod-two-intersection`, `classification-choice` (missing-choice-scope): General representative independence invokes AC_omega-qualified invariance; current Statement carries it. Transverse termwise reduction remains choice-free.
- `cor-a-null-cobordant-cycle-has-zero-intersection-with-a-disjoint-boundary`, `title` (false-or-overstrong-title): Current title specifies algebraic intersection with a bounding cycle, removing the misleading null-cobordant/disjoint-boundary formulation while preserving the stable ID.
- `ex-two-projective-lines-have-one-mod-two-intersection`, `saturation` (invalid-inference): Surjectivity alone does not identify intersections of quotient images. Current step 2.1 uses antipodal saturation of both circles, giving q(C1) intersect q(C2)=q(C1 intersect C2).
- `ex-two-projective-lines-have-one-mod-two-intersection`, `tangent-variable` (undefined-notation): Alpha fixes the isolated x-perp in a calculation at p to p-perp; all other symbols and the mathematics are preserved.
- `oriented-and-mod-two-intersection-numbers`, `perturbation-domain` (missing-hypothesis): Alpha restricts the page perturbation summary to a map against fixed closed embedded Z, matching the actual corollary, while retaining arbitrary-transverse-pair rank emptiness.

Published ledger merge acquired the exclusive canonical lock, reread current content, added the strong-density A-P row, and reopened the known zero-set and relative-transversality A-P debts while preserving their prior bounded repair evidence. The lock was released by its owner. No published item was edited.

Owned consumer-batch cross-group input remains `[]`: all actual item and page suppliers are published or batch-12 local. The frontier dependency refresh passed. The direct-consumer scan for the two changed Definitions returned only this batch’s carriers, all reviewed above; existing AC_omega in invariance consumers is sufficient, and explicit transverse computations need no added choice. No outside-batch consumer repair is required for these Definition edits.


Defect ownership correction: merged the duplicate mod-two missing-two-map-definition entries through append-only supersession; explicit boundaryless wording is clarification under the standard smooth-manifold convention, not a separately confirmed fatal defect. Classification-choice correction keeps its distinct row. Also corrected the finite-intersection contract’s singleton evidence: fibre cardinality does not imply differential rank zero. The identity point fibre supplies the counterexample to that audit phrase; item proof unchanged.

## Final local checks and handoff

- Exact dispatch coverage: 30 distinct decisions, exactly the computed owed obligation set. Verdicts: 23 amended_repair, 4 confirmed_fatal, 1 reviewed_no_defect/audit_enrichment, 2 escalated. The two escalations concern the published density supplier and its owned negative-dimension consumer.
- Final `node tools/tsx-run.mjs tools/precheck.mts` on all 25 batch items: 20 applicable proof-bearing items pass; 5 have no applicable proof. Exit 0. An earlier new cutoff step needed phase repair; combined the construction and its conclusion into tagged step 3.1 and reran successfully.
- Final `node tools/rendercheck.mjs` on all 25 items and both explicit pages: 27 files pass, exit 0, including real YAML/KaTeX.
- Final `node tools/proof-contract.mjs research/frontier-38-owner-30-batch-12.proof-contracts.json --strict`: 25/25 checked, 0 errors/warnings, exit 0, rerun after the singleton boundary evidence correction.
- `node tools/content-policy.mjs research/frontier-38-owner-30-batch-12.pages.json --manifest-only`: 25 scoped items, 0 errors/warnings, exit 0. An initial invocation used an unsupported --manifest option; corrected the command. No mathematical defect row was created for the CLI mistake.
- After the last item edits, `node tools/proof-layout.mjs` batched all five changed item paths below in one command: 5 items, 9 steps, 0 defects, exit 0. No item formatter or item edit followed it.
- `node tools/risk-report.mjs research/frontier-38-owner-30-batch-12.proof-contracts.json` without --require-reviewed: 25 routed, 0 tool errors, exit 0. With --require-reviewed: exit 1, exactly one incomplete review, cor-negative-expected-dimension-generic-intersections-are-empty. All other 21 HIGH/CRITICAL risk reviews are complete. The remaining risk stays open as required for escalation; no closure is claimed.
- Canonical batch-12 ledger rows validate in isolation: 44 initial rows passed; two append-only ownership/audit corrections were then appended. Final active rows are 42 closed and 2 open, with 2 superseded historical rows retained. Run-wide validate reports 13 pre-existing batch-10 location-enum errors (sources/proof), outside this dispatch. Do not repair other batch records here; route these mechanical diagnostics to the batch-10 owner/engine lead. No defect row is created for this validator failure.
- Frontier dependency refresh passed; batch-12 cross-group input stays an honest empty array. No outside-batch carrier or proposed withdrawal was deleted. Published items, verification judge records, dispatch state and stage controls were not edited. Autopilot status was read from disk; the live run is in Step 5a. No gate battery, judgment, hash stamping or certification was initiated.

Actual Alpha item edits are these five paths; the two draft page summaries, owned manifest, proof contracts, decisions/report and canonical ledgers were also updated. Final raw item SHA-256 values:

- `items/def-mod-two-intersection-number.md`: `713ef710ea9f755785c2bf6c9241de98b9de84f04c85fbbd8e28081847419a40`.
- `items/def-oriented-intersection-number.md`: `a17bf12307ea9a319c0ec723f55f4af452e2dde91aa78e299c3768a5f4b931d0`.
- `items/thm-mod-two-intersection-number-is-homotopy-invariant.md`: `4a2d18f4b6f87453cf5bcc594079eb2e8b1d8b221209102fbaf08f2a0bd2bee2`.
- `items/thm-oriented-intersection-number-is-homotopy-invariant.md`: `7053e40d202d5aea27a82d6a338e370a6b876658857fb8a732fec40377f9878d`.
- `items/ex-two-projective-lines-have-one-mod-two-intersection.md`: `4b9f2439a42265d73560991b8c21b8aa868409bbd72591ed22d2977c81552d6c`.

Next owner action: resolve the published strong-density proof and its AC/topology interface; preserve both escalations and the open risk review until explicit owner resolution. Step 5b should reconcile the page summaries, manifest changes and final cross-group carriers through its computed obligations. The already known general zero-set and relative-transversality debts are recorded in the published ledger; they are bypassed by this batch’s local homotopy proof and are not repaired here.
