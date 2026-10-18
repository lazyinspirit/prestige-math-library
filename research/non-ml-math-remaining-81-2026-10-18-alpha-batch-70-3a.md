# Batch 70 Step 3a adjudication

Run: `non-ml-math-remaining-81-2026-10-18`; group: `batch-70`. Scope: nine touched obligations, no reader/refuter findings or page obligations. Review is in the generated dependency order.

Reviewed the dispatch, scope, reader report/findings and refuter report. Prior verdicts are evidence only. Published suppliers remain read-only.

Completed level 0 risk reviews:

- `def-arbitrary-rank-coxeter-system-and-bruhat-order`: Reviewed the complete definition and all ten cited dependency statements. The free-group quotient, least finite word length and finite reflection-chain order are well formed for arbitrary S, including S empty (W={1}); strict length growth proves antisymmetry. No exchange or subword property is assumed definitionally and no AC is used.

- `def-canonical-basic-set-for-hecke-specialization`: Reviewed the complete definition and the DVR, composition-series, simple-object and Jordan–Hölder statements. Free stable lattices, split fibres and nonzero columns are explicit assumptions; thus all multiplicities and minima exist. The residue extension is O→k0→k. The definition deliberately claims no lattice independence over arbitrary local orders and no universal existence of basic sets.

- `lem-complete-local-hecke-modular-systems-and-idempotent-lifting`: Checked all eight steps and ten supplier statements with their AC hypotheses. Prime cases over Z are exhausted: characteristic zero PID localizations, (ell), and (ell,G); the last case has dimension and embedding dimension two by the displayed cancellation argument. Faithful flatness supplies injection; the zero-prime field case is included. Nakayama proves finite projectives free. The polynomial correction has defect delta²(4delta−3), giving a separated complete limit without division in any characteristic. Idempotent projection is exact as an R-module operation, and free projected layers split before residue extension. Matrix units identify fibre multiplicities with the same R-ranks. AC is explicitly inherited from commutative-algebra suppliers.

Level-0 reviews found no blocker.

Completed levels 1–4:

- `thm-arbitrary-rank-finite-parabolics-and-bruhat-subword`: Checked all six proof steps against current finite-generator parabolic, exchange, subword, free-group and normal-closure statements. A normal-closure witness is a finite product; the free-group retraction makes its equality hold inside the finite support K. Finite parabolic injectivity then gives global injectivity. Length equality is proved before either direction of the Bruhat subword equivalence; both directions preserve reflection chains and fixed expressions. Empty J and w=1 yield the trivial subgroup and interval bound one. Reader additions in 1.1 are sound.

- `lem-simple-generator-weights-extend-to-a-weight-function`: Checked all three steps, finite-support Matsumoto and ambient dihedral reducedness statements. Even braid moves preserve label counts and odd ones preserve sums precisely under the stated equalities. Reduced prefixes force uniqueness and additivity. Two reduced alternating words of odd length prove necessity by cancellation; this includes arbitrary-rank and empty S without positivity or AC.

- `lem-unequal-parameter-hecke-standard-basis-and-bar-triangularity`: Checked six steps. Odd-edge equality permits universal-parameter base change on every finite support; finite relation-ideal membership supplies a finite-support independence witness. Quadratic and reversed braid relations survive the bar map. The simple multiplication rule and arbitrary-subword theorem put every proper subsequence strictly below w, with the full reduced word contributing coefficient one. No flatness or positive-weight hypothesis is added.

- `thm-unequal-parameter-kazhdan-lusztig-basis`: Checked six steps. Finite lower intervals and induction by natural length justify the finite unitriangular inversion. Each anti-invariant Laurent coefficient has zero constant term and a unique negative part p with p−bar(p)=a; products of negative exponents stay negative in any ordered abelian group. Maximal-length coefficients prove uniqueness and independence. The simple-generator formula separately checks positive, zero and negative weights, and the empty interval gives C1=1.



Completed levels 5–6:

- `def-finite-weyl-lusztig-basic-set-data`: Reviewed the complete definition, trace/Schur suppliers and Geck Theorem 4.4 and §5.2 (local source geck.txt lines 920–964, 1785–1918). Nonnegative integral weights, split generic algebra and P2–P8/P15′ are explicit hypotheses. Finiteness bounds Laurent exponents; zero trace is handled by Delta=infinity. The h/gamma indices and P15′ match the source. Reader correctly reserves support-degree equality for the subsequent proved lemma rather than assuming it. The normalization uses symmetric generators and the revised unsigned n_d convention, with L-goodness requiring only f_E nonzero.

- `lem-lusztig-asymptotic-algebra-and-specialization-map`: Checked all eight steps against the explicit P hypotheses, not assumed conjecture truth. P15′ constant terms and P8 prove associativity; P2/P3/P5/P6/P7 give the identity and perfect trace. P15′ gives commuting layer actions, yielding the homomorphism and bimodule compatibility. Kernel elements raise the finite filtration, so N+1 products vanish after every base change; split generic semisimplicity then gives the dimension-preserving isomorphism. Rational evaluation of finitely many transported matrix units avoids zero and all denominator/determinant roots, giving rational splitting; central idempotents identify blocks up to relabeling. The current conclusion uses nu_E only for support, and does not assume nu_E=alpha_E. The restriction to nonzero evaluation is necessary for Laurent coordinates and is sound.

- `ex-b2-unequal-parameter-kl-basis-and-cell-edges`: Checked three verification steps and the complete diagram. The even braid edge permits weights 1,2. The square action and normal forms give eight group elements and distinct length-two st,ts. Expanding (Ts+v^-1)(Tt+v^-2) gives exactly the four stated terms, all strictly negative below st; reversing gives ts. Quadratics give the two square formulas. Each of the four directed arrows has coefficient one in the stated left product. No full cell classification is claimed; the graph is a summary only.



Completed levels 7–8:

- `lem-schur-leading-coefficients-and-good-asymptotic-specializations`: Checked all twelve steps, the trace-dual-basis and PID/UFD suppliers, and Geck Proposition 5.8/Remark 5.9 (geck.txt lines 2040–2170). The inverse pairing tensor proves coefficient orthogonality locally. The stable lattice is a finite integer sum of rational images and is torsion-free, hence free over Z. Cayley–Hamilton makes f_E integral; the positive inverse-index coordinate form makes it positive. Explicit q_ij^E have denominator f_E only and produce an actual matrix decomposition over Z[1/product f_E]. Degree-a constant terms use the degree-a identity and give chi_J(t_x), also zero off that support. D-to-T triangularity changes negative to positive coefficients. Squaring the character congruences in the exact Hecke dual basis proves lowest coefficient f_E at −2nu_E, hence nu_E=alpha_E. Cayley–Hamilton plus the Laurent UFD puts the full Schur element in A. All field/ring extensions and zero-weight caveats are retained; specialized full Schur elements may vanish.

- `thm-a1xa1-unequal-parameter-cells-give-a-canonical-basic-set`: Checked eight steps, cell-quotient suppliers and all scalar formulas. The four-element group and commuting product table yield four singleton cells. At q=1+p, odd p makes each q^L+q^-L a unit, so the four complementary product idempotents split H_O as O^4. Cell quotient eigenpairs and their reductions are four distinct characters, giving I4. Tensoring rank-one Schur values (1+v^±2)(1+v^±4) gives residue 4 nonzero. The identity matrix meets the basic-set conditions for any integer statistic; no general cell simplicity is inferred.

- `cex-modular-specialization-collapses-unequal-parameter-cell-labels`: Checked five counterexample steps and every value. The even Coxeter edge permits weights 1,2. The explicit complete product table gives four singleton generic cell labels. At v=3 over Q2, eigenvalue differences 10/3 and 82/9 are nonzero, so all pairs differ; each lies in Z2 and defines a free rank-one lattice. The residue algebra is F2[x,y]/(x²,y²), with radical cube zero and quotient F2, hence a unique simple. All four reductions are that simple with multiplicity one. This refutes label preservation without claiming failure of canonical basic-set existence.

- `lem-asymptotic-induction-identifies-leading-modular-simples`: Checked all five steps and actual asymptotic-layer and Schur suppliers. D1=1 makes a_M defined. B_a tensor M maps onto M; tensor balancing shows I_a annihilates its kernel, whose factors therefore have strictly smaller a. Split J semisimplicity gives a unique degree-a summand with M multiplicity one and injective label assignment. End_H(M) acts unitaly on the single J-isotypic copy and embeds into k, hence equals k. The explicit finite-dimensional density argument, using semisimplicity of M^r and a k-basis, makes the H image all of End_k(M), proving absolute simplicity under every field extension. No lattice-independence claim is used here; touched status is solely the quoted supplier-contract update.



Completed level 9: `lem-filtered-projectives-prove-canonical-basic-set-reciprocity`. Checked all six proof steps, current complete-local, asymptotic-induction, Schur and projective-cover suppliers. Corestriction to k0 remains L-good. Superfluity realizes the projective cover as H0e with unique maximal kernel. The simultaneous matrix-action argument gives a nilpotent radical and a split matrix quotient, so all simple labels and composition factors extend to k. Idempotent lifting and local-projective freeness compare residue dimensions with generic q-ranks for explicitly free models only. Projected filtration layers remain free and commute with J; generic rank(q|E) is the number of E copies in H_Fq, and support confines those copies to degree alpha_E. The nilpotent ideal makes the extended cover kernel superfluous, and inverse corner elements treat every chosen cover idempotent. Corrected the missing operator backslash in the k0 fraction-field expression in 1.1, and spaced evaluation at 1; no claim or hypothesis changed.

Local repair: restored `\operatorname{Frac}` in proof 1.1 and its derivation claim, and spaced two occurrences of evaluation at $1$. Statement and dependencies unchanged; no consumer repair is triggered. This is a nonfatal notation defect, closed as `non-ml-math-remaining-81-2026-10-18-3a-batch-70-D01`. No judge record was present. 

Completed levels 10–12:

- `thm-finite-weyl-canonical-basic-sets-from-lusztig-properties`: Checked all five steps and all eight cited facts against the now-reviewed supplier chain and Geck Theorem 6.6/Proposition 6.7 (geck.txt lines 2390–2551). A nonzero action on a composition factor implies nonzero action on the whole restricted V_E; P4 then gives a_M≤alpha_E. Asymptotic induction attains that bound. The first nonzero projective layer exists, is a quotient of the cover and inherits a superfluous maximal kernel, hence simple head and indecomposability. Its semisimple J decomposition can have only one summand. Reciprocity applied to E(M) gives the essential reverse inequality b≤a_M, so b=a_M, not merely equality of head multiplicity. This proves unique minimum and multiplicity one in the entire decomposition column. All hypotheses include AC, finite Weyl, generic splitting, nonnegative integral weights and P2–P8/P15′; only leading integers need survive specialization.

- `cor-weighted-cell-quotients-and-finite-weyl-basic-set-labels`: Checked all five steps, actual cell-definition/module suppliers and the complete current reciprocity/theorem arguments. P4 increases a along each transition, hence makes it constant on cells. Finite downward-closed cell listings give free filtrations with the correct sidedness. Dagger identifies D-labelled quotients with the dagger-twisted native modules. Regular J support layers contain precisely their degree labels; reciprocity and a nonzero free-model residue identify nu_E=alpha_E without an added hypothesis. Projected free cell-module ranks prove the specialization sum [X_k:M]=sum_E[X_F:E]d_E,M. The selected E(M) contributes once per generic copy and no other same-degree label contributes; neither cell simplicity nor a cell/simple bijection is asserted.

- `ex-a1-nonsemisimple-good-specialization-has-a-basic-set`: Checked all four steps. The rank-one product C_s²=(v+v^-1)C_s gives a(1)=0,a(s)=1 and only gamma111=gammas ss=1. Every P2–P8 condition holds; in P15′ equal a forces w=y and both sides reduce to the same delta times h. Trace equations give Schur elements 1+v² and 1+v^-2, with (f,alpha)=(1,0),(1,1). At v=i, the quotient is C[epsilon]/epsilon² with epsilon nonzero in the rank-two basis and one simple. Both free characters reduce to that simple, giving column (1,1) and the unique alpha-zero label. Full Schur vanishing does not violate L-goodness. Item bytes are unchanged from pre to post; touched status reflects only supplier citation-contract enrichment.

- `rem-geck-basic-set-theorem-scope-and-proof-status`: Reviewed the entire remark, current data/theorem/corollary and Geck §5.2, Proposition 5.8/Remark 5.9 and Theorem 6.6 proof. It accurately distinguishes the locally supplied reciprocity and splitting proofs from source sketches/references. All generic-splitting, finite-Weyl, nonnegative-weight, AC and P hypotheses remain explicit. Nonzero leading integers differ from nonzero full Schur elements as the rank-one example confirms. The regime discussion is expressly a dated account of Geck’s source, not a current universal conjecture claim or an additional premise. Dagger twist and nonirreducibility caveats match the cell corollary.

All nineteen risk subjects have complete specific risk reviews in the owning contract.

## Routed decisions and original evidence

All nine touched obligations are decided; eight are `reviewed_no_defect` with `change_kind: audit_enrichment`, and one is `amended_repair` with `repair_confidence: 1`. Reader and refuter finding arrays are empty, and there are no page obligations. The reader report calls its changes repairs, but the exact old arguments support the more precise dispositions below. No finding is invented for an elementary implicit step.

- `thm-arbitrary-rank-finite-parabolics-and-bruhat-subword`: The exact pre-reader proof already invoked finite products in a normal closure and the free-group inclusion. The added normal-subgroup argument, retraction and explicit dependencies make these elementary steps explicit; the pre-reader argument is sound, so this is audit enrichment rather than a confirmed defect.

- `def-finite-weyl-lusztig-basic-set-data`: The pre-reader definition deferred the leading-term proof and the following supplier defined alpha as support before proving the Schur formula. The revised source notation and explicit comparison improve exposition without correcting a false assertion.

- `lem-lusztig-asymptotic-algebra-and-specialization-map`: The original support-degree notation alpha was justified as the Schur exponent by the next lemma; the revised nu avoids anticipation. Rational evaluation already excluded every actual coordinate pole and determinant zero; additionally excluding zero is a sound explicit caveat. No false claim was found in the exact preimage.

- `lem-schur-leading-coefficients-and-good-asymptotic-specializations`: The exact original 5.3 already proved the lowest Schur term from the trace pairing, using alpha defined as support in its supplier. Renaming that support nu and explicitly comparing source alpha, plus the degree-specific identity in 3.2, is sound audit enrichment.

- `lem-asymptotic-induction-identifies-leading-modular-simples`: Pre/post item SHA256 is identical; only its contract citation to the renamed support supplier changed. Independent current proof review establishes the degree-a tensor-kernel argument, injectivity and absolute simplicity.

- `lem-filtered-projectives-prove-canonical-basic-set-reciprocity`: Reader corestriction and radical/projective-cover expansions are sound. Amended proof 1.1 restores the missing backslash in operatorname{Frac}, so the displayed corestriction now uses the actual fraction field, and spaces evaluation at 1. Statement, dependencies and mathematical scope are unchanged; the derivation contract was synchronized. Reflow, precheck, rendercheck and full contract audit passed. Closed defect D01 records this nonfatal notation defect.

- `thm-finite-weyl-canonical-basic-sets-from-lusztig-properties`: The original 3.1 already had alpha_E=a_M and alpha_E≥b, which together give b≤a_M; with a_M≤b this gives equality. The reader moves this routine inference explicitly into 2.2 using E(M) and expands the inherited simple-head argument. The exact original proof does not infer total multiplicity one merely from head multiplicity: reciprocity and the single J summand provide it. No fatal or nonfatal logical defect is confirmed by that explanatory expansion.

- `cor-weighted-cell-quotients-and-finite-weyl-basic-set-labels`: The original exponent identification was available from its declared reciprocity supplier, whose Schur prerequisite proves it. The current 3.1 spells out that consequence using a nonzero residue factor and degree support. This is audit enrichment, with unchanged conclusion and actual cell-twist conventions.

- `ex-a1-nonsemisimple-good-specialization-has-a-basic-set`: Pre/post item SHA256 is identical; only its contract citation to the renamed Schur supplier changed. Independent current verification confirms every required P property, full-Schur vanishing, column (1,1) and the unique least-exponent label.

The pre/post fingerprint files are `research/non-ml-math-remaining-81-2026-10-18-step3-hash-70-pre.json` and `research/non-ml-math-remaining-81-2026-10-18-step3-hash-70-post.json`. All nine pre-reader item byte strings were recovered and SHA256-matched: eight from `.autopilot/non-ml-math-remaining-81-2026-10-18/owner-step2-source-baseline/items/`; the Schur lemma from `research/non-ml-math-remaining-81-2026-10-18-owner-step2-battery-boundaries-hopf/before/items/lem-schur-leading-coefficients-and-good-asymptotic-specializations.md`. Every item matched its post-reader hash before this adjudication; only the reciprocity lemma now differs because of D01. Two touched items (asymptotic induction and the A1 example) have identical pre/post item hashes and changed citation contracts only. No historical preimage uncertainty or owner-resolution exception is used. The engine, not this worker, seals the changed contracts and final decisions.

## Consumer and publication dispositions

The source changes in the reader data definition, asymptotic support statement and Schur statement preserve the exact proved mathematical interface. Searched all item/page references to these three supplier IDs: every item consumer is in batch 70, and each actual use was read above; the sole page consumer is the owned A page, whose full current prose retains the split-generic, P2–P8/P15′, L-good and dagger-twist qualifications. No consumer relies on a removed hypothesis or an unproved support/exponent identification. No outside consumer needs repair. The local notation edit changes no Statement or Definition and creates no propagation duty.

No defective published supplier was identified in the statements and arguments examined, so the published ledger was not changed. No proposed withdrawal or prior escalation was removed. The batch-64 page route is explicitly nonlogical and supplies no premise to these items; no R-matrix claim was reviewed or imported. A batch-70 disposition was appended to `briefs/tasks/frontier-dependency-ledger.md`.

## Sources and review limits

- [Geck, Modular Representations of Hecke Algebras](https://arxiv.org/pdf/math/0511548): Theorem 4.4 and Definition 4.5; Theorem 4.11 and Definition 4.13; §5.2, Proposition 5.8 and Remark 5.9; Theorem 6.6 and Proposition 6.7. Consulted the PDF and relevant full local extracted passages in `research/non-ml-math-remaining-81-2026-10-18-owner-unequal-basic-set-completion/sources/geck.txt` (lines 920–964, 1510–1654, 1785–1918, 2040–2170, 2390–2551). The source requires the P hypotheses and L-good characteristic; its cited reciprocity is proved locally here.

- [Lusztig, Hecke Algebras with Unequal Parameters](https://arxiv.org/pdf/math/0208154): §3.1–3.3 and Theorem 5.2 including its full construction and uniqueness argument, checked against `research/non-ml-math-remaining-81-2026-10-18-owner-unequal-basic-set-completion/sources/lusztig.txt` lines 1237–1282 and 1540–1686. The ordered-group extension is justified by the local proof, using finite support and the total order. The unsigned asymptotic formulas were independently derived from the actual stated P identities; no universal P conjecture or unexamined source proof is used as a premise.

- [Björner–Brenti, Combinatorics of Coxeter Groups](https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf): Theorem 2.2.2 and Corollaries 2.2.3–2.2.4, printed pp. 34–35 (PDF p. 43), agree with the fixed-expression subword criterion and finite bound. Actual local finite-generator dependency statements were separately read.

Review covered every routed carrier, all nineteen risk subjects and their cited prerequisite statements, with the locally used proofs and elementary derivations recorded above. It does not claim a full audit of every transitive published proof, unrelated pages, or other batches.

## Checks and handoff

- Initial risk report: 25 scoped rows, nineteen HIGH/CRITICAL; no error.
- Final risk report with `--require-reviewed`: 25 rows, zero errors; all nineteen required reviews complete.
- Reflow on the one locally changed item: unchanged.
- Precheck on that item: one proof checked, zero failures.
- Rendercheck on that item: all math and frontmatter parse with the actual renderer.
- Focused reciprocity contract check, then full batch contract check: 25 items, zero errors or warnings.
- After the final item edit and formatter, `node tools/proof-layout.mjs items/lem-filtered-projectives-prove-canonical-basic-set-reciprocity.md`: one item, six steps, zero defects. This is the complete locally changed-item selection.
- Decisions inventory checked against the scope: exactly nine unique touched obligations, no extra reader/refuter/page decisions.

No unresolved mathematical blocker or owner decision is requested. No judge cycle, stamping, self-certification, stage transition or full gate battery was run. The engine owns sealing and subsequent gates.
