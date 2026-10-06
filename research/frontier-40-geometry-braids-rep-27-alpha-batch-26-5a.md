# Step 5a adjudication — batch 26

Run: `frontier-40-geometry-braids-rep-27`. Scope: batch 26 only. Review proceeds in generated dependency order. This report records local review and checks; the engine owns hashes and gates.

Historical comparison uses immutable pre/post item, contract and manifest hashes, retained batch manifest claims, and reader edit evidence. All initial current item bytes equal the post-reader snapshot. Whole historical item preimages were not supplied; no whole-preimage reconstruction is claimed. Exact historical clauses retained in the manifest and reader report are distinguished from current proofs below.

## def-order-of-an-ideal-sheaf-at-a-point

Accepted the explicit regular-parameter quotient supplier and AC qualification replacing the definition-only citation retained in manifest AG-RES-1. Krull intersection gives finite order for a nonzero stalk; units have order 0 and zero has infinity. Extending the nonzero cotangent class to a finite basis and Nakayama gives a parameter; the exact published quotient lemma gives regularity and dimension d-1 under AC. The published Krull proof has a nonfatal forward-reference defect, separately routed as reader:26:1; its later determinant-trick argument establishes the required separatedness. Source: Wlodarczyk §2.1 p.3; direct definitions and quoted supplier statements checked.

Disposition: amended_repair. Risk review: complete.

## def-simple-normal-crossings-divisors

Accepted the boundary convention that each member has disjoint components and distinct members repeat no component, as required for counting boundary members. Wlodarczyk Definition 2.1.1 p.3 expressly has disjoint components; Stacks 0BIA complete proof gives the parameter-product and regular-intersection equivalence. At any point each boundary member supplies at most one distinct parameter. Empty union has unit equation, and a subfamily remains a subset of the same parameters. The older manifest lacked this algorithm qualification; current SNC definition itself is preserved.

Disposition: amended_repair. Risk review: complete.

## lem-etale-formal-local-isomorphism

Accepted correction of the counterexample: for a nontrivial finite separable extension the induced completion map K→L fails to be an isomorphism, regardless of abstract field isomorphisms. Flatness and the zero-dimensional regular fibre give mB=n. Flat tensoring identifies each graded piece with its residue extension; finite-dimensional scalar extension detects both ideal-containment directions, including N=0 and I=0. Equal residue fields give finite quotient isomorphisms by induction and hence the inverse-limit isomorphism, using the completion definition only. No additional choice is needed. Source Wlodarczyk Lemma 2.4.1 p.5 is interpreted with its equal-residue restriction.

Disposition: amended_repair. Risk review: complete.

## lem-blowup-charts-of-the-quadric-cone

Item bytes are unchanged between pre/post snapshots; only the proof contract was enriched. Checked all eight steps: the monomial basis injects k[x,y,z]/(xy-z²) into k[a,b], integral dimension is 2, and involution invariants prove normality in characteristic zero. Saturation gives u-v², s-t², pq-1, with quotient rings k[x,v], k[y,t], k[p,p^-1,z]. Two charts cover the exceptional conic; coordinate changes exhibit transversality. Properness follows from the unconditional clause 3 of the blowup theorem and closed/base-change composition under inherited AC; the common dense open proves birationality. All exact chart, divisor, dimension, normality and properness supplier statements were checked. No changed mathematical claim or new defect.

Disposition: reviewed_no_defect. Risk review: complete.

## lem-etale-morphism-extends-to-ambient-neighbourhoods

Untouched risk-only carrier. Checked all four steps and Wlodarczyk Lemma 4.9.1 pp.27–28, including the source ambient-dimension typo. Equal rational residues identify completions; the graph ideal in S[[y]] has the free conormal basis y_j-g_j. Selecting m graph equations gives an invertible y-Jacobian. Faithful-flat completion plus finite-ideal Nakayama descends the local Cartesian equality. Standard smooth presentations give the smooth factorization. The statement appropriately allows an ambient subscheme smooth only near the point and uses field extension for rationality; m=0 is the empty-equation case. AC of the presentation and completion suppliers is explicitly assumed.

Disposition: risk-only; no decision owed. Risk review: complete.

## lem-order-and-snc-under-smooth-morphisms

Unchanged item with audit enrichment only. Independently traced all six steps: a flat local map is faithfully flat; parameters of A form a regular sequence in B, and backward regular-quotient lifting extends them to parameters of B. The graded polynomial map is injective at arbitrary residue extension, so ideal order is preserved in both directions, including unit/zero ideals. Distinct parameter-product equations remain radical nonzerodivisors; empty pullbacks have unit equation and SNC survives. The exact regular-sequence, associated-graded and regular-quotient hypotheses hold under stated AC. This strengthens the source Lemma 2.4.1 p.5 without assuming equal residue fields.

Disposition: reviewed_no_defect. Risk review: complete.

## rem-resolution-of-singularities-conventions

Accepted clarification of the algebraically closed core versus broader explicit fields and inherited AC, and replacement of definition-only regular/smooth equivalence by the precise perfect-field criterion. Characteristic-zero fields are perfect; the geometric regularity field test and standard-smooth theorem apply to finite-type algebras. Integral separated finite-type variety and reduced final-theorem conventions are kept distinct. Nonclosed-field descent and perfect-field positive-characteristic derivative uses are expressly qualified. Source Wlodarczyk §2 opening p.3 and exact published geometric-regularity statements checked.

Disposition: amended_repair. Risk review: complete.

## def-marked-ideal

Accepted positive-mark and componentwise generic-nonvanishing prerequisites for canonical resolution. A globally nonzero ideal may vanish on another disjoint smooth component, so global I≠0 cannot replace generic nonzero on each component; mark 0 has full support. The definition continues to allow those formal marked ideals but does not assert support-clearing existence for them. Support and ordered boundary match Wlodarczyk Definitions 2.1.1–2.1.3 p.3 and the current order/SNC/conventions suppliers.

Disposition: amended_repair. Risk review: complete.

## def-ideal-of-derivatives

Accepted the intrinsic ideal generated by I and local derivations, with explicit AC inherited from finite locally free smooth differentials. Universality identifies derivations with the dual basis to a basis of exact differentials; Leibniz gives the finite generator list and coherence over the Noetherian smooth scheme. This repairs confusion between relative coordinate rank and local-ring dimension at a nonclosed point. D^0=I and the mark-zero last derivative are defined; in characteristic p, D(x^p)=(x^p). Source §2.6 p.6 and direct differential/derivation supplier interfaces checked.

Disposition: amended_repair. Risk review: complete.

## def-multiple-test-blowup-and-controlled-transform

Accepted the correction of extension to insertion of isomorphisms retaining exactly the original nontrivial blowups, as Wlodarczyk Definition 2.1.5 p.4 specifies. Exceptional ideal inverse powers have the correct sign, isomorphisms have empty exceptional divisor and unit ideal, and the ordered old boundary precedes the new divisor. Actual ideal containment is supplied next by the controlled-transform lemma, rather than presumed for arbitrary centers. The broader earlier extension could insert new blowups and would not express smooth-functorial sequence comparisons.

Disposition: amended_repair. Risk review: complete.

## def-equivalence-of-marked-ideals

Only contract audit enrichment changed. Equal ordered boundaries, equal initial supports, and precisely the same test sequences with equal supports at every stage make reflexivity, symmetry and transitivity immediate; equality of test-sequence sets supplies transitivity. No additional smooth-pullback equivalence is smuggled into the definition. Checked Wlodarczyk Definition 2.5.1 p.6 and current marked-ideal/test-blowup definitions.

Disposition: reviewed_no_defect. Risk review: complete.

## lem-controlled-transform-is-well-defined

Accepted replacement of the unsupported coefficient selection by the free normal graded module. At x in regular C, R/P is a domain and gr_P R=(R/P)[U]; a nonzero initial class of degree j<μ survives localization at the component generic point P. That point belongs to the support, contradicting its order j. Pullback then gives I(D)^μ divisibility; changing a principal generator or exceptional equation multiplies the controlled section by a unit. Empty C and μ=0 give trivial containment. Exact parameter-generation, regular-sequence and invertible-center suppliers hold under AC. The published normal-graded proof was read completely; its erroneous Remark locator is separately recorded under reader:26:2. Source Lemma 2.2.1 p.4 checked independently.

Disposition: amended_repair. Risk review: complete.

## lem-derivative-ideals-have-the-same-support

Accepted the essential perfection qualification and formal/algebraic derivative comparison; amended the malformed duplicated Proof heading only. Read every step and exact coefficient-field, completed-power-series and smooth-differential suppliers. Leibniz lowers order by at most i over all fields. Over a perfect field separating residue coordinates give a K-compatible coefficient field and parameter expansion; finite Taylor/Hasse coefficients of degree <μ cut out the order locus without factorial division. In characteristic zero or p>μ, a selected nonzero homogeneous coefficient survives differentiation, proving both support directions and D^μ(I)=O iff all orders ≤μ. For K=Fp(a), x^p-a has order 1 yet all K-derivatives vanish, so the older unqualified converse is false. The j=0, i=0 and zero-stalk cases are respected. Source §2.6 pp.6–7. Heading correction is mechanical and has no separate defect row.

Disposition: amended_repair. Risk review: complete.

## lem-derivative-ideals-under-etale-morphisms

Accepted the actual smooth-composition relative-dimension supplier replacing the étale-only citation. Transitivity and Ω_B/A=0 give a surjection of finite locally free differential modules; the correct composition theorem gives equal ranks, hence an isomorphism. Dualization extends every base derivation and writes all target derivations as their B-linear combinations. Leibniz proves both ideal inclusions, then iteration includes i=0. The argument works in every characteristic and does not need a residue-field equality. Exact smooth-differential, formal-étale and relative-dimension supplier statements read; source Lemma 2.6.5 p.7.

Disposition: amended_repair. Risk review: complete.

## lem-derivatives-under-field-isomorphisms

Contract enrichment was sound, but current step 1.1 applied σ:K→K′ to the general ring element cD((φ*)^-1g). This is ill-typed unless that section happens to be constant. Replaced σ by the section-ring isomorphism φ*; semilinearity then gives φ*(cD(h))=σ(c)φ*(D(h)). Conjugation proves additivity, Leibniz and K′-linearity with inverse transport, and exactly identifies derivative generators; iteration includes i=0. Statement and dependency interfaces unchanged. Exact morphism/derivation definitions checked; source Lemma 4.3.1. This is a complete surgical proof repair, with no consumer statement change.

Disposition: amended_repair. Risk review: complete.

## lem-restriction-of-marked-ideal-to-a-smooth-subvariety

Accepted removal of boundary members containing a component of S and the direct blowup-chart restriction proof. Such members restrict to the zero equation, not a Cartier divisor, so the older unrestricted boundary was invalid. At x in S maximal ideals quotient, giving support inclusion. For a smooth nested center the parameter-generation theorem adapts x defining S and y defining C within S. Charts indexed by x have empty strict S; charts indexed by y identify S′ with Bl_C S and exceptional division commutes with restriction. Induction proves the stated test-sequence identity; components lost entirely yield no stalks. Source Lemma 2.10.3 pp.14–15 and exact parameter/chart suppliers checked. No power-series lifting is assumed.

Disposition: amended_repair. Risk review: complete.

## def-canonical-resolution-invariants

Accepted the previously missing total order on Sub(E): increasing labels padded by 0 are compared lexicographically with 0 below all labels, as source §3 p.16 prescribes. Empty subset has zero sequence and finite E gives finitely many rho-values. The resolution definition states regular maximum centers and lexicographic decrease of inv or nu; no claim that finite-support rational lexicographic sequences alone are well founded is made. Étale pullbacks carry boundary labels by the given order. All current marked-ideal, equivalence, sequence and SNC interfaces checked.

Disposition: amended_repair. Risk review: complete.

## def-maximal-order-and-tangent-directions

Accepted μ≥1 for T=D^(μ-1), and perfection/p>μ qualifications in the derivative characterization. Mark 0 remains possible for maximal order but has no negative-index tangent ideal. An order-one section of T gives a regular hypersurface; repeated Leibniz gives T⊂m at every support point, so V(u) contains the local support. Transversality is only asserted when the tangent class extends with boundary classes to parameters. Exact earlier derivative support and regular-quotient suppliers checked; source Definitions 2.7.1/2.7.5 pp.7–8.

Disposition: amended_repair. Risk review: complete.

## lem-addition-and-multiplication-of-marked-ideals

Only the contract was enriched. All five steps checked: ord(A+B)=min and gr_m domain gives ord(A^k)=k ord(A) for positive k, including zero ideals with infinity. The positive marked sum therefore has support intersection; simultaneous transforms commute since e_j μ_j=product μ. Products require only the order lower bound and support inclusion, and allow zero marks. Induction proves the exact admissible test-sequence assertions; bracketings of sums have the same transformed supports although their ideals may differ. The conditional identities use no new choice beyond associated graded under AC in the sum branch. Source Lemma 2.8.1 p.8.

Disposition: reviewed_no_defect. Risk review: complete.

## lem-derivatives-commute-with-controlled-transform

Accepted the inclusion title and replacement of the old derivative-ideal calculation by a direct generator computation. In a normal-coordinate blowup chart δ=yσ*D is regular and δ(y)/y is regular. For σ*f=y^μg, y^(1-μ)σ*(Df)=δg+μ(δy/y)g, and the undifferentiated generator becomes yg. Thus the first-derivative inclusion has the correct direction; monotonicity and center-support inheritance induct up to r=μ, including r=0 equality and marking-zero endpoint. No factorial or characteristic division is used. Full source Lemma 2.6.3 pp.6–7 checked; the old source-style intermediate assertion was not relied upon.

Disposition: amended_repair. Risk review: complete.

## lem-smooth-pullback-of-multiple-test-blowups

Contract audit enrichment is accepted; corrected one reversed explanatory phrase about empty centers in the Statement to match the existing proof. Flat blowup base change identifies the pulled-back blowup, which is an isomorphism for an empty center. Smooth order/SNC preservation makes inverse centers admissible and regular; exceptional ideal pullbacks give controlled-transform equality. Flatness commutes with saturation (kernel to localization, then filtered union), justifying strict-boundary pullbacks in F5. Induction handles all stages; empty final support persists, and deleting empty-center isomorphisms gives the resolution whose extension is the full sequence. Formal numbered conclusions unchanged. Source Proposition 2.4.2 p.5 and exact flat-base-change/universal-property statements checked.

Disposition: amended_repair. Risk review: complete.

## def-coefficient-ideal

Accepted perfection/p>μ restriction for the restriction-support assertion while retaining all-characteristic equivalence. Marks μ-i for i=0,…,μ-1 are positive, their product is μ!, and the explicit exponents μ!/(μ-i) match the marked sum. μ=1 gives C(I,1)=(I,1). Equivalence and support claims are supplied by the later authored lemmas; no positive-characteristic converse outside the corrected range is asserted. Source Definition 2.10.1 pp.13–14 has a printed index shorthand corrected by its own Lemma 2.10.2 proof.

Disposition: amended_repair. Risk review: complete.

## def-companion-ideal-and-monomial-part

Accepted the complete residual-max and local-neighbourhood correction, and deletion of false general companion equivalence. On Noetherian smooth components generic nonzero implies all stalks nonzero; closed order-superlevels stabilize with empty intersection, so residual order is bounded. Empty support and r=0 route separately. Removing {ord N>r} gives maximal order on a neighbourhood of the support; positive marks r and μ-r justify the sum. Exact order additivity in the regular graded domain gives companion support=support(I,μ)∩{ord N=r}. The disjoint-plane example I=(x²) and (u,v)², μ=2 disproves the old equivalence by unequal supports. Resolving the companion targets maximal residual order; it is not asserted to resolve the entire original support at once. Source Definition 3.0.10 p.20 and earlier order/sum suppliers checked.

Disposition: amended_repair. Risk review: complete.

## def-homogenized-ideal

Accepted perfection and p>μ for the derivative-homogenization containment. Finite sum runs i=0,…,μ-1, uses ordinary ideal products, and μ≥1 makes tangent ideal defined. μ=1 gives H=I; T(H)=T(I) is an algebraic Leibniz consequence proved by the properties lemma. The derivative comparison requires μ>1, so no homogenization with undefined marking -1 is used. The equivalence assertion retains its separate authored proof and does not require the derivative converse. Source §2.9 pp.9–10 and current tangent/sum definitions checked.

Disposition: amended_repair. Risk review: complete.

## lem-codimension-one-maximal-order-components

Accepted localisation of the unit-transform conclusion to a neighbourhood of the chosen support component. In the UFD R, the height-one prime is (u); DVR localization gives I_P=(u^μ), and prime cancellation gives I=(u^μ)J. Maximal order forces ord(u)=1 and J=R at every x in C, so C is regular and isolated from other support components. Its Cartier blowup is an isomorphism whose controlled ideal becomes unit near C; other distant support components can remain. The existence of a codimension-one support component rules out μ=0 (whose support is all X). Exact UFD, DVR and regular quotient supplier hypotheses hold under AC; source Step 1a p.16.

Disposition: amended_repair. Risk review: complete.

## lem-derivatives-of-a-multiple-test-blowup

Accepted correction of the reversed support inclusion. The inductive smaller transformed derivative ideal has the larger order-superlevel support, so C_i⊂supp(I_i,μ)⊂supp(D^j I_i,μ-j)⊂supp([D^jI]_i,μ-j). This makes every next transform defined; monotonicity and the one-step inclusion prove [D^jI]_(i+1)⊂D^j(I_(i+1)). j=0 gives equality, j=μ has marking zero and full support, and identity steps are harmless. Source Lemma 2.6.4 p.7 and the two preceding authored transform suppliers checked.

Disposition: amended_repair. Risk review: complete.

## lem-derivatives-of-maximal-order-ideals

Accepted perfection/p>μ carried into the maximal-order derivative theorem. D^(μ-i)(D^i I)=D^μ I=O; the earlier safe-characteristic criterion proves maximal order at positive residual mark. At i=μ the ideal is O and mark is 0, so maximal order follows directly. i=0 is the original hypothesis. The exact criterion and recursive derivative interface checked; source §2.7.

Disposition: amended_repair. Risk review: complete.

## lem-equivalence-of-powers-of-a-marked-ideal

The unchanged mathematical argument and contract enrichment are sound. Fixed the Given paragraph citing F4 for associated graded, which is actually F3 (F4 is the product transform identity). gr_m domain gives exact positive power order, including zero and unit ideals; scaling by k≥1 preserves both support directions even for μ=0. Controlled division scales y^-μ to its kth power, so induction gives precisely the same test sequences and every transformed support under the same boundary. AC is used by the actual graded supplier F3. This citation repair leaves Statement unchanged; source Example 2.5.2 p.6.

Disposition: amended_repair. Risk review: complete.

## lem-maximal-order-preserved-by-controlled-transform

Accepted the direct normal-form and arbitrary-prime Hasse bound rather than an unsafe ordinary-derivative proof. I⊂J^μ plus order μ at c gives a nonzero degree-μ transverse initial form over κ(c); its dehomogenization stays a nonzero polynomial of degree ≤μ on every exceptional chart. For a top-degree monomial, its Hasse derivative is a nonzero constant; Hasse-Leibniz sends m^(d+1) into m, so polynomial order ≤degree at every fibre prime. Quotient restriction only raises order, giving the same bound in X′. μ=0 forces I=O; off C the blowup is an isomorphism. Exact normal-graded and ideal-containment suppliers checked. Source Lemma 2.7.2 p.7 uses a characteristic-zero derivative shortcut; current proof is valid without it.

Disposition: amended_repair. Risk review: complete.

## lem-order-semicontinuity-and-snc-strata

Accepted perfect-field closedness and replacement of circular invariant semicontinuity by a conditional finite-range assembly lemma. The derivative formula at p=k uses orders <k, whose factorials are invertible, and is valid at the stated endpoint. Finite boundary counts have finite-union closed superlevels. Noetherian descending closed order loci stabilize, yielding finitely many finite order values plus infinity. For lexicographic tuples the superlevel is {f>a}∪({f≥a}∩{g≥b}), closed with locally finite ranges; finite maxima preserve this. Branchwise invariant construction is expressly left for the proposition, rather than inferred from its definition. Source §3 p.16 and current derivative-support proof checked.

Disposition: amended_repair. Risk review: complete.

## lem-coefficient-ideal-is-equivalent

Only audit enrichment changed. Checked both proof steps in all characteristics: the i=0 summand forces each coefficient test sequence to be an original test sequence; derivative-test inheritance gives the reverse. At each stage actual transformed derivative factors are smaller than recomputed derivative ideals and thus have larger supports containing the original support; intersection with the i=0 support makes equality. Positive marks justify the AC marked-sum theorem, with μ=1 giving identity. Exact prior test-transform and sum statements checked; source Lemma 2.10.2 p.14.

Disposition: reviewed_no_defect. Risk review: complete.

## lem-coefficient-ideal-under-smooth-morphisms

Accepted general-boundary/positive-mark reader qualification; amended the compressed smooth derivative argument by declaring the actual standard-smooth factorization supplier and spelling out the projection generator calculation. Base derivatives pull back; new-variable derivatives kill pulled-back generators, while Leibniz handles variable coefficients. The étale comparison then gives D^i equality for every smooth map, and products/powers/sums commute with ideal extension. Smooth order preservation keeps maximal order; E is auxiliary and causes no boundary restriction. μ=1 and empty fibres are included. Source Lemma 2.10.7 p.15; exact standard-smooth presentation and derivative/sum supplier statements read.

Disposition: amended_repair. Risk review: complete.

## lem-completion-automorphisms-for-tangent-directions

Accepted K-compatible coefficient-field, derivative-comparison, ideal-closure and inverse-preservation repairs; additionally corrected the Taylor calculation to include the multiplying T^i factor explicitly. A Taylor term of φ(f) alone lies in D^(i+s)(I)T^s, not T^(i+s); multiplying by φ(t) for t∈T^i gives the claimed summand of H. Cotangent linear algebra supplies A fixing the boundary subspace with (A-id)V⊂image(T) and A(u)=v; lifted increments in T give a continuous automorphism. Noetherian stabilization proves φ(T)=T. Closedness and Taylor expansion give both H containments, and identity modulo T fixes every support point and its residue ring. μ=1 and T containing boundary directions are allowed; no common complement for u,v is falsely assumed. Entire source Lemma 2.9.4 pp.10–11 and exact completion, coefficient-field, differential and graded suppliers checked.

Disposition: amended_repair. Risk review: complete.

## lem-giraud-tangent-directions-and-controlled-transforms

Reader contract enrichment is sound; amended the ill-typed Statement I|U′ because U′ is an open in X′, not X. It now restricts I to U before transformation and restricts that transform to U′, as the proof already does. Derivative-transform inclusion puts u/y in T(I′). At its zeros on the exceptional divisor one chooses u as a center parameter and a distinct exceptional parameter, so u/y is an order-one chart coordinate. The u-index chart has no zeros (u/y is a unit); saturation gives the strict hypersurface everywhere. Empty center and an emptied hypersurface cause no stalk problem. Statement mathematics and global/local support scope are otherwise retained. Source Lemma 2.7.4/2.7.6 pp.7–8 and current exact transform interfaces checked.

Disposition: amended_repair. Risk review: complete.

## lem-homogenized-ideal-is-equivalent

Only contract enrichment changed. All stages of the two-step proof checked: each transformed derivative and tangent factor is contained in the recomputed factor, so product order bounds give original support⊂each actual transformed summand support; the I summand gives the reverse for the literal sum. Induction from the equality at stage zero gives identical test sequences in both directions. The controlled literal sum distributes termwise with mark μ. Under AC the marked sum of those same-mark summands has the same test sequences and transformed supports, proving equivalence rather than the source printed literal marked-sum equality. μ=1 is the identity and no unsafe characteristic converse is needed. Full source Lemma 2.9.2 pp.9–10 checked.

Disposition: reviewed_no_defect. Risk review: complete.

## lem-homogenized-ideal-properties

Accepted safe-characteristic qualification of clause (4). Checked every algebraic clause: μ=1 gives H=I; every omitted term lies in T^μ, the last retained term. In D^(μ-1)(D^i I T^i), either the first derivative factor lies in T or the derivative budget leaves a tangent factor untouched, proving T(H)=T(I) both ways. Same-mark literal sums and iterated marked sums are equivalent under AC. For μ>1, D^μ I=O in the safe range makes D I maximal order; differentiating H puts all terms into H(D I,μ-1), with the top T^(μ-1) absorbed by the final term. Source Lemma 2.9.1 p.9 and exact derivative/sum interfaces checked.

Disposition: amended_repair. Risk review: complete.

## lem-homogenized-ideal-under-smooth-morphisms

Accepted general-boundary and μ≥1 reader corrections. Amended the inaccurate phrase that new-variable derivatives annihilate the whole extended ideal: they annihilate its pulled-back generators, and coefficient derivatives stay in the ideal by Leibniz. Declared the exact standard-smooth factorization supplier instead of relying on an order lemma for that assertion. Projection plus étale derivative equality proves smooth derivative equality; order preservation makes the pulled-back marking maximal, tangent ideals pull back, and the finite H sum then agrees termwise. Every characteristic and an arbitrary ordered SNC E are allowed because the equality uses only derivatives and ideal extension. Source Lemma 2.9.3 p.10 and exact local-presentation/differential suppliers checked.

Disposition: amended_repair. Risk review: complete.

## lem-coefficient-ideal-restriction-support

Accepted the original-coefficient transform induction and safe-characteristic/boundary qualifications. Completed transverse expansion has coefficients ∂^αf/α! for |α|<μ, so initial restricted derivative order bounds give ambient order μ in both directions. Track J_(r,i), the actual transforms of original restricted derivatives with mark μ-r; coefficients transform by a^-(μ-|α|), preserving membership. Changing only tangent coefficient coordinates adapts smooth centers without recomputing C(I_i). This proves support equality at every stage; conversely the equality and omitted containing-boundary convention make each restricted center admissible in the ambient scheme. Disjoint centers induce isomorphisms. Factorials are invertible in the exact stated range, μ=1 is included, and empty restricted charts have no stalk. Full source Lemma 2.10.4 pp.14–15 checked, with its printed derivative-index shorthand interpreted by the chart calculation.

Disposition: amended_repair. Risk review: complete.

## lem-glueing-homogenized-ideals

Accepted full exceptional-support induction. Read all six steps and source Lemma 2.9.5 pp.11–13. Two separate cotangent parameter systems with increments in T, together with common residue coordinates, give étale maps. Open diagonals isolate their equal scheme-theoretic pullbacks over S=V(T). At support points the completed comparison is the proved T-congruent automorphism; outside S, T and hence H are unit, so completed equality plus faithful flatness glues H ideals. Equality T(H)=T(I) initializes common tangent pullbacks. At each test blowup reduced centers contain T_i; equality modulo T_i gives identical inverse center ideals. Differences of ratio coordinates lie in e^-1T_i=T_(i+1), on common charts where both normalized denominators are units. Thus agreement persists on transformed support and controlled H transforms are equal; saturation preserves matching hypersurfaces. This is equality of homogenized transforms, not a fabricated equality of original nonhomogenized ideals. AC and characteristic zero are explicitly retained.

Disposition: amended_repair. Risk review: complete.

## lem-tangent-direction-contains-the-support

Only contract audit enrichment changed. Base support lies in V(u) by the forward derivative inclusion in every characteristic. Checked the three induction cases: Cartier center gives unit u/y and empty support/strict hypersurface locally; proper higher-codimension center uses the tangent-direction lemma; the remaining equal-support case uses derivative-transform inclusion directly on u-index (unit) and other normal charts (u/t_j). Thus arbitrary test centers, including centers equal to the support, preserve containment. Identity stages and empty local charts are harmless. The quantified sequence is correctly local on U. Exact current Giraud/saturation suppliers checked; source §2.7.

Disposition: reviewed_no_defect. Risk review: complete.

## cex-no-claim-of-resolution-in-positive-characteristic

Accepted correction of (x²,y²)≠(x,y)² and full direct second obstruction. In characteristic 2 ordinary derivative iterates stay (x²,y²), whose nonzero origin germs have order at least 2, so there is no tangent section through the origin despite maximal order 2. For f=x²+yz³+zw³+y⁷w, substitution (t³²,t⁷,t¹⁹,t¹⁵) annihilates f and all first derivatives; polynomial degree in x bounds the order by 2. The four distinct weights 32,7,19,15 are each outside the additive semigroup of nonlinear combinations of those weights, so a nonzero linear part cannot vanish on the curve. This disproves a regular hypersurface containing the top locus without claiming equality with that locus or a blowup-persistence theorem. Read Hauser 2003 §14 Example 1 pp.387–388 from the complete downloaded PDF; web fetch timed out but the shell full-text retrieval succeeded. Both examples refute only the asserted mechanism, not positive-characteristic resolution.

Disposition: amended_repair. Risk review: complete.

## lem-coefficient-ideal-disjoint-centres

Accepted perfection/p>μ inherited from coefficient restriction. At a contained center the exact previous coefficient-support theorem applies; a disjoint center is an isomorphism on a neighbourhood of S_i and leaves both restricted transforms and support unchanged. Induction on these two step types gives the asserted identity. Isomorphisms are valid test steps, and the extension convention now only inserts them. No assertion is made for centers partly intersecting S_i. Source Lemma 2.10.5 p.15 and current exact restriction/transform interfaces checked.

Disposition: amended_repair. Risk review: complete.

## lem-refined-giraud-maximal-contact

Confirmed refuter:26:1 against the exact post-reader carrier: u is defined only on U, so global supports on X_i cannot be compared with V(u)_i. The reported example I=m_(0,0)^2∩m_(1,0)^2 on A², μ=2, U omitting (1,0), u=x has a second global support point outside U already at stage 0. Repaired all sequence quantifiers and converse to (U_i) of (I|U,μ); controlled ideals and hypersurfaces now live on the same U_i. Explicit x∈support rules out a vacuous unit tangent and empty hypersurface in the proper-containment claim. At stage zero codimension ≥2 gives a nonempty hypersurface complement of the support; it survives every center because centers lie in support, proving strict containment at all stages. Current coefficient-restriction and tangent-persistence suppliers prove clauses (2)–(4) under AC and char0/perfect p>μ. Source Lemma 2.10.6 p.15 repeats the global shorthand, so its logical local proof, not its printed overstatement, is used. Reader correction from exact codimension 2 to ≥2 and perfection are retained. Direct consumer uses are local maximal-contact charts and require no mathematical narrowing.

Disposition: amended_repair. Risk review: complete.

## prop-canonical-resolution-of-marked-ideals

Accepted the reader residual-order, rational encoding, boundary-count and finite monomial-tree repairs; additionally made the induction input and stratum components explicit and supplied ν=0,rho=empty on the infinity branches and inv=0 in the monomial branch. Smooth intersections may be disconnected, so resolve their irreducible components separately: contained components are blown up first, while each other restricted coefficient ideal is generically nonzero. This meets the lower-dimensional theorem rather than applying it to a zero restriction. Checked all nine steps against the entire source Proposition 3.0.8/§3 pp.16–21. Track only the boundary fixed at Step 1 start; each boundary pass drops its count, and lower-dimensional resolutions handle the proper restrictions. After codimension-one removal, local maximal-contact charts use the repaired local lemma, with gluing supplying invariant independence and matched centers. The companion is used only on its residual-max neighbourhood: transformed residual order ≤r and clearing companion support forces <r. r=0 is monomial. Inclusion-minimal threshold subsets give new exceptional exponent sum(A)-μ<a_j, so monomial order drops over each center; finite branching with the initial integer bound proves finite termination. Piecewise superlevels are closed on the closed leading-coordinate strata, including infinity branches; finite ranges and matched local charts give closed maximum centers. Étale comparison is pointwise and skips missing global maxima by isomorphism steps. AC/generic nonzero/μ≥1 and the dimension-zero case are retained. The localized refined-Giraud statement suffices for the actual affine-open uses.

Disposition: amended_repair. Risk review: complete.

## lem-canonical-resolution-commutes-with-ambient-embeddings

Accepted correction of the ambient-prefix formula to (0,1,0,0), the rational encoding of each source pair (1,0). Clarified that the number of repeated pairs is the local codimension k at x, avoiding a constant-codimension assumption on disconnected smooth ambients. A lifted mark-one ideal contains the k immersion parameters; each is a tangent direction, and the support is the same embedded closed subscheme. Repeated coefficient/maximal-contact restriction prefixes the invariant, leaving ν and rho unchanged. The constant prefix makes maximum centers agree and blowups restrict to the corresponding blowups of X; k=0 gives no prefix. These are comparisons of the supplied canonical algorithm, with existence over nonclosed fields supplied by the later descent theorem. Read full source §4.2 p.24 and all exact current algorithm/tangent supplier statements.

Disposition: amended_repair. Risk review: complete.

## lem-canonical-resolution-under-field-isomorphisms

Accepted the dimension-zero repair: generic nonvanishing gives unit ideals and empty support; a blowup of an entire zero-dimensional component cannot be excused as an isomorphism. Four-step proof checked: conjugation transports K-derivations under the semilinear ring isomorphism, and hence H/C; local-ring isomorphisms preserve orders, SNC strata and boundary labels. Induction transports lower-dimensional restrictions, companions, monomial thresholds and all canonical centers. Relabelling the K′-structure through σ permits the smooth-base-change interface; invariant comparison uses the underlying isomorphism, not K-linearity. Positive mark and generic nonzero on every component are retained; empty support gives identity. Full source Proposition 4.3.2 pp.24–25 checked.

Disposition: amended_repair. Risk review: complete.

## lem-etale-commutativity-of-maximal-order-case

Only audit enrichment changed. Independently checked all five steps against source Lemma 3.0.9 pp.19–20: a missing maximal boundary-count stratum gives only isomorphisms, a matching positive count identifies restricted lower-dimensional resolutions by induction, and count zero identifies maximal-contact restrictions through the gluing lemma. Pointwise orders/boundary labels are preserved while global maxima may disappear from a nonsurjective image. This synchronization identifies the nonempty center sequences and all invariant values; the repaired refined-Giraud supplier is used only on local hypersurface charts. Empty source/support gives a vacuous comparison and identity sequence. No new mathematical defect.

Disposition: reviewed_no_defect. Risk review: complete.

## lem-etale-commutativity-of-companion-step

Accepted pointwise residual-order versus global-maximum distinction; additionally repaired the same missing-maximum issue in the monomial endpoint and explicitly handled empty pullback support before taking maxima. When an étale image misses a residual-max pass, all inverse centers are empty; with matching maxima the companions pull back and the maximal-order comparison applies. In the monomial branch rho and ν are pointwise preserved: a missing global rho maximum gives an isomorphism, whereas a met maximum gives the canonical pulled-back center. Iterating yields precisely an extension, rather than incorrectly identifying an empty inverse center with a nonempty canonical one. Source Lemma 3.0.11 pp.21–22 and exact residual/étale/maximal-order interfaces checked.

Disposition: amended_repair. Risk review: complete.

## lem-canonical-resolution-commutes-with-smooth-morphisms

Accepted local comparison of centers, removal of the undefined projection map, and general ordered-boundary qualification. Added the exact standard-smooth factorization supplier and explicit induction on the base dimension for the projection case: strata and chosen hypersurfaces are products, so lower-dimensional base resolutions commute by induction; H/C, residual orders and monomial thresholds pull back unchanged. Dimension zero has empty support by generic nonvanishing. Factor any smooth germ as étale after projection, apply the two comparisons and identify matching invariant maxima locally. A flat local map is faithfully flat, so nonzero ideal stalks remain nonzero and the pullback meets the existence hypotheses. Empty center steps are retained only as extensions. Full source §4.1 p.24 and exact current factorization, smooth-ideal and étale-pass interfaces checked.

Disposition: amended_repair. Risk review: complete.

## lem-canonical-resolution-over-nonclosed-fields

Accepted finite-dimensional affine ideal descent replacing an unsupported general sheaf-descent claim, and the precise mark-one empty-boundary ambient interface. Added the descent of closed finite-range invariant superlevel strata, which uses the same stable-ideal argument. Independently read the full finite-dimensional Galois fixed-space proof: trace-dual finite sums span invariants with no infinite basis choice. Any f in an invariant ideal lies in V⊗L with V finite-dimensional and L finite Galois; embedding-extension supplies full Gal(L/K) stability, hence invariant vectors in A generate the ideal after scalar extension. Noetherian finite generation and localization glue unique center ideals; geometric-regularity descent makes the centers smooth. Flat blowup base change carries the exact Rees sequence, characteristic-zero derivative equality detects empty support, and smooth intersection/codimension descent gives SNC. μ≥1 and generic nonzero persist on geometric components; arbitrary Aut_K(Kbar) notation is not falsely called a finite Galois group. Source §4.4 p.25 and all exact Galois/flat/geometric-regularity interfaces checked.

Disposition: amended_repair. Risk review: complete.

## thm-principalization-of-ideals

Accepted replacement of a reduced SNC divisor assertion by an effective divisor with SNC support, allowing exceptional multiplicities (I=(x²) gives 2V(x)). Empty controlled support at mark 1 gives the unit ideal; unwinding each division gives precisely the product of exceptional factors. Properness uses blowup theorem clause 3, which has no global-generator requirement. Checked all four steps, including the finite intrinsic constant-field argument: Noether normalization bounds degrees of algebraic subfields, while clearing denominators and lying over contradict a transcendental element in any field subring. Therefore abstract ideal-preserving automorphisms act semilinearly on the componentwise intrinsic fields, and derivative equality over finite separable constants identifies the same algorithm; natural Rees lifts satisfy composition. Unit input gives the identity and empty divisor; generic nonzero excludes zero inputs on components. Source §§4.4–4.5 p.25 and exact normalization, maximal-ideal, finite-residue and lying-over supplier statements checked.

Disposition: amended_repair. Risk review: complete.

## thm-weak-embedded-desingularization

Accepted explicit AC inheritance, correct source locators and componentwise birationality for reduced Y. Independently read the complete source §4.7 Theorem 4.7.1 pp.25–26 and its codimension induction; its modified algorithm resolves exceptional residual factors first, then omits the blowup when a smooth transverse strict component becomes the next center. Thus it avoids the original smooth locus and handles components contained in the ambient by identity. Properness of the ambient sequence and closed restriction give a proper morphism; the retained dense smooth open makes it birational on each irreducible component. Empty Y and an entire smooth ambient component take identity. The proof does not identify a controlled transform with the strict-transform ideal before the source stopping argument. Hauser §13 provides context, but the full source proof in Wlodarczyk supplies the cited result.

Disposition: amended_repair. Risk review: complete.

## thm-bravo-villamayor-full-transform

Accepted the previously missing codimension induction and quotient-ideal lifting. Read every current step and complete source §4.7 pp.25–26. The special 3/2 monomial pass clears residual exceptional factors at mark 1. At the terminal source invariant, for c=1 the order-one isolated component has its exact ideal; for c>1 a tangent u∈J allows restriction to H and induction on c-1, and equality modulo (u) lifts because both J and I_Z contain u. Completed components are isolated and retained while the same bounded algorithm treats the remaining finite codimensions; remaining support away from them is principalized. Hence residual ideals equal I_Ytilde near retained components and O elsewhere, giving the full transform factorization with all exceptional monomial factors. Full ambient components have zero ideal and the stated 0=O·0 convention; Y empty is unit. AC and arbitrary characteristic-zero descent are retained. The actual refined-Giraud use is on a local hypersurface and fits its repaired scope.

Disposition: amended_repair. Risk review: complete.

## lem-embedding-independence-of-desingularization

The common-ambient polynomial argument is sound. Amended F1 to cite the actual embedded-desingularization theorems (rather than pretending the marked-ideal lemma alone states that theorem), and replaced an insufficient local embedding-dimension parenthesis by sufficiently long affine generating lists. Finite generators embed both smooth affine ambients in a common A^n. For g,h generating K[U], polynomial shears (x,y-v(x)) and (x-w(y),y) have polynomial inverses and take (g,h) to (g,0),(0,h). Exact ambient compatibility of the modified embedded theorem transports both to the same embedded resolution. The comparison over integral U is unique because maps agree on the dense smooth locus into a separated reduced resolution, so polynomial choices do not destroy canonicity. Full source Lemma 4.8.1/Proposition 4.8.2 pp.26–27 checked.

Disposition: amended_repair. Risk review: complete.

## lem-open-restriction-of-desingularization

The restriction proof is sound after correcting F3: U_f→X_F is a closed immersion, while X_F→X is open; the current text falsely called the former open. F1 now cites the actual embedded smooth-naturality theorem along with its marked-ideal underpinning. A function f lifts through the affine quotient to F, and ambient open restriction identifies the embedded resolutions. An arbitrary affine open is covered by finitely many principal opens contained in it; their canonical comparisons agree on overlaps (and on the dense smooth locus), so glue to the stated open immersion and preimage isomorphism. Empty overlap causes no condition. Full source Proposition 4.8.2 p.27 and the exact open/closed immersion and embedded compatibility interfaces checked.

Disposition: amended_repair. Risk review: complete.

## thm-resolution-of-singularities-in-characteristic-zero

Accepted correction of the false definitional identification of proper birational morphisms with compositions of ambient regular-center blowups, and the finite-type variety domain of smooth functoriality. Checked all eight steps: finite affine embedded resolutions glue by canonical open comparisons, unique on the dense smooth locus into separated targets; properness is local on the target and integrality/birationality persist. Rational-point graph extension over the algebraic closure realizes étale germs as Cartesian ambient restrictions; flat Rees pullback and saturation commute, matching the modified stopping rule. Reduced geometric components pose no problem because coordinate shears and graph completion require no integrality; equality descends to K by faithful flatness. Projection plus étale factorization gives the Cartesian smooth comparison, and uniqueness ensures identity/composition. The intrinsic constant-field finite-degree and lying-over arguments identify the largest field subring, giving semilinear equivariance for arbitrary abstract group actions. AC and characteristic zero remain explicit. Entire source §§4.8–4.9 pp.26–28 read and exact repaired local/dependency interfaces checked.

Disposition: amended_repair. Risk review: complete.

## lem-resolution-is-functorial-under-smooth-maps

The two-step consequence and reader contract enrichment are sound. Corrected F2 and declared the exact smooth-base-change theorem, since the definition alone does not prove stability under base change. The already proved resolution theorem gives the canonical Cartesian isomorphism for smooth maps of finite-type integral separated K-varieties under AC. Its first projection is smooth by the exact new citation, and fibre-product associativity gives Y′_y×_{κ(y)}κ(ytilde). Natural composites and identities are supplied by the theorem proof; no circular use of this consequence occurs in that theorem. Source Theorem 1.0.3/§4.9 and current smooth-base-change statement checked.

Disposition: amended_repair. Risk review: complete.

## rem-positive-characteristic-resolution-status

Accepted source-locator correction and distinction between ordinary recursive derivatives and Hasse operators. Ordinary D^iD^j=D^(i+j) holds by definition in every characteristic, while D(x^p)=(x^p) shows failure of order reduction. Wlodarczyk §2.6 p.6 discusses Hasse derivatives without asserting a repaired general resolution algorithm. Downloaded and read Hauser July 28, 2009 Introduction p.1 and Section B p.7: the general embedded problem above dimension 3 was open at that historical date, and surface/threefold results are recorded under their external hypotheses. The statement expressly says as of the cited surveys; no current-2026 open-problem verification or audit of the 2019 Cossart-Piltant theorem is claimed. This proved-here-false remark is not a usable theorem supplier.

Disposition: amended_repair. Risk review: complete.

## ex-resolution-of-a-surface-singularity

Only proof-contract audit enrichment changed. All four proof steps checked against the previously reviewed chart lemma: strict transform charts are polynomial/Laurent polynomial smooth surfaces, exceptional fibre is the conic, and vertex edim 3 versus dim 2 is the unique singularity. Current batch-25 surface theorem Statement and all six proof steps were read for the exact existence comparison, with AC/DC and perfect-field smoothness retained; this is not a recursive audit of its supplier closure. The explicit one-blowup calculation already supplies the resolution independent of that comparison. The final k-rational point (1:0:0) on the conic is the origin of the x,v chart; the further smooth point blowup gives a nonminimal proper birational resolution by contraction back to the already smooth tilde C. Smooth exceptional fibre is claimed for the original conic, not for the union after the extra blowup. Both general theorems are used for existence only, with no false identification of the explicit map with the canonical map. Exact point-blowup/proper/birational suppliers checked.

Disposition: reviewed_no_defect. Risk review: complete.

## Manifest and contract reconciliation

Reconciled 47 touched manifest rows to current statements, exact prerequisites, provenance and source metadata, removing stale strategies for equal-residue completion, unsafe derivative converses, global companion equivalence, and the old unproved Narasimhan assertions. Mathematical reader repairs accepted above are recorded as `amended_repair` where this manifest reconciliation changes their combined carrier. Pure audit enrichments retain `reviewed_no_defect` with `change_kind: audit_enrichment`. The untouched ambient-extension manifest row and all page inventories and stable IDs are preserved. Current-source quotations and derivations were reconciled in 32 contracts; boundary anchors and false source-number-as-proof-step matches were normalized without inventing defects.

## reader:26:1 — thm-krull-intersection-theorem

Confirmed nonfatal forward-reference defect after reading the entire current Krull proof and exact Artin-Rees, finite-generation, determinant-trick and Jacobson unit statements. Step 1.1 establishes IK=K, and 1.2 gives the torsion-to-intersection direction; 1.3 cites not-yet-proved 2.1 for the other direction. The finite-generation determinant argument in 2.1 supplies (1-a)K=0, and 3.1 applies the unit criterion under AC. Thus the full argument is sound after reordering and the assigned order-definition use is valid. Published carrier remains read-only. Owner should move the equality conclusion after the determinant argument and update earlier-step tags. Recorded A-P in the locked published ledger; nonfatal-recorded closes the finding disposition without claiming a content repair.

Current raw SHA-256: `6e63a8cf04619f958e915ffa927b8b34b91aa09db705bae3940faed1462d3c3e`. Supplier mapping: `thm-krull-intersection-theorem` → `def-order-of-an-ideal-sheaf-at-a-point`.

## reader:26:2 — lem-regular-sequence-associated-graded-polynomial

Confirmed nonfatal inaccurate Remark locator after reading all four current graded-ring proof steps and the regular-sequence/generated-ideal/associated-graded definitions. Inner induction on the highest exponent l is established in 2.1–3.1; 4.1 concludes graded injectivity and the conormal identification. The proof itself is sound: truncated-sequence coefficient injectivity survives multiplication by the nonzerodivisor f_c modulo Jprime, the top coefficients enter Jprime, absorption reduces l, and modified coefficients differ by f_c multiples in J. The regular-center consumer uses exactly this polynomial/free normal graded statement under its regular-sequence hypotheses. Published carrier remains read-only. Owner should replace the parenthetical inner-induction locator by 2.1–3.1. Recorded A-P in the locked published ledger; no consumer repair or source-proof failure is claimed.

Current raw SHA-256: `987a7cf7487f9b3cfa9c6698a54399039ac072ad6ab206f41b9dfb048bcf34ea`. Supplier mapping: `lem-regular-sequence-associated-graded-polynomial` → `lem-controlled-transform-is-well-defined`.

## Direct-consumer and page review

Checked every current owned carrier and every direct dependency interface used by its proof. Whole `items/` and `library/` reference inventory for all 59 suppliers found no outside item consumer; only the two assigned unchanged pages reference these suppliers, and both complete page bodies were read. Their characteristic-zero summaries fit the repaired hypotheses and mechanisms. No page decision is owed. Within the batch, derivative converses use characteristic zero or the explicit perfect-field safe range, boundary counts use distinct members, companions target residual-max support, and ambient comparisons are mark-one/empty-boundary with local codimension. The proposition, maximal-order étale comparison and Bravo–Villamayor proof use refined Giraud on local hypersurface opens, so no further consumer repair is required by its localization. Typed corrections to Giraud and smooth-pullback clarification preserve every actual consumer use. The owned frontier-dependency input and brief ledger were updated without deleting stable IDs or withdrawals; the batch-25 surface interface review is limited as stated under the example. No published or other-batch item was edited.

## Sources and review limits

The primary proof source was independently retrieved from [Włodarczyk, Simple Hironaka resolution in characteristic zero](https://arxiv.org/pdf/math/0401401), the complete 28-page author PDF. Read the relevant complete arguments: definitions/transform/order calculus §§2.1–2.7 pp.3–8, marked sums and homogenization §§2.8–2.9 pp.8–13, coefficient-restriction calculus §2.10 pp.13–15, the entire canonical algorithm and étale comparison §3 pp.16–21, and conclusion/descent/full-transform/embedding/ambient-extension §§4.1–4.9 pp.24–28. Printed shorthand and overstatements were checked by local calculations; neither source authority nor prior reader verdict substitutes for logical validity. Stacks [tag 0BIA](https://stacks.math.columbia.edu/tag/0BIA), complete statement and proof, supports both normal-crossings directions and the descended intersection criterion. The existing regular-sequence normal-graded supplier's full double-induction proof and every exact prerequisite statement used by it were read.

[Hauser 2003](https://homepage.univie.ac.at/herwig.hauser/Publications/hauser%20hironaka%20thm%20bams.pdf) and [Hauser's July 28, 2009 author survey](https://homepage.univie.ac.at/herwig.hauser/Publications/Problem_PosChar.pdf) were successfully downloaded and extracted in full after the web fetches timed out. Read the Narasimhan example at printed pp.387–388, and the historical survey Introduction p.1 and Section B p.7. The counterexample is verified directly; its proof does not assume the source's top-locus equality or point-blowup permanence assertion. Low-dimensional positive-characteristic results in the recorded remark are external mentions, not locally proved suppliers. No current-2026 open-problem status or complete audit of the 2019 cited threefold paper is claimed.

Initial item hashes all matched the immutable post-reader snapshot. Pre/post comparison distinguishes 42 reader item edits from 16 contract-only touched carriers and one untouched risk-only item. Exact historical whole-item bytes are unavailable from the supplied snapshots or this checkout's Git history; historical defect evidence is limited to retained manifest clauses, immutable hash identities and the reader's explicit edit descriptions. No unknown historical preimage was treated as a proof certificate, and no source repair was inferred from file presence or a prior acceptance stamp. The cross-batch surface interface was reviewed for the assigned example's actual use; its recursive source closure remains batch 25's responsibility.

## Final local checks and handoff

Final obligation coverage: **61/61**, comprising 58 touched carriers, two reader findings and one refuter finding. Final carrier decisions are **49 amended_repair** and **9 reviewed_no_defect** (audit enrichment); the finding decisions are **two confirmed_nonfatal** and **one confirmed_fatal**. All completed repairs have `repair_confidence: 1`. The two obligations on refined maximal contact share the single closed row for the same localized defect, with explicit `same_defect_as` evidence. There are 51 unique closed owned defect rows: 49 fixed rows and two nonfatal-recorded published findings. No new mechanical-failure defect row was created.

- `node tools/tsx-run.mjs tools/reflow.mts <19 explicit changed item paths>`: exit 0; all files already properly reflowed.
- `node tools/tsx-run.mjs tools/precheck.mts <same 19 paths>`: exit 0, 19 checked, zero failures.
- `node tools/rendercheck.mjs <same 19 paths> --json`: exit 0, 19 checked, zero errors or warnings.
- `node tools/proof-layout.mjs <same 19 paths>`: exit 0, **19 items, 60 steps, zero defects**. This was the single final layout invocation after all item edits and reflow; no item was edited afterward.
- `node tools/proof-contract.mjs research/frontier-40-geometry-braids-rep-27-batch-26.proof-contracts.json --strict`: exit 0, 59/59 checked, zero errors or warnings. Initial mechanical contract-anchor and source-number parsing diagnostics were repaired and the focused check then passed.
- `node tools/risk-report.mjs research/frontier-40-geometry-braids-rep-27-batch-26.proof-contracts.json` was run before review; the final run with `--require-reviewed --json` passed, 59 items routed and **53 HIGH/CRITICAL reviews complete**. Reviews were recorded for all 59 items, including the untouched ambient-extension carrier.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-40-geometry-braids-rep-27`: exit 0; owned item/page inputs retained and refreshed.
- Defect-ledger append/schema checks: 51 owned rows appended; focused validation of those exact rows passed with zero errors. Three source-locator typos in my newly written evidence were corrected in the owning report, decisions, risk notes and owned ledger rows under the ledger append lock, preserving defect IDs and dispositions; the generated view was refreshed.

The run-wide command `node tools/defect-ledger.mjs validate --run frontier-40-geometry-braids-rep-27` failed with **48 schema errors**, all outside this dispatch: 35 diagnostics on batch-20 rows (`frontier-40-geometry-braids-rep-27-5a-20-*`) and 13 on batch-27 rows (`frontier-40-geometry-braids-rep-27-5a-batch-27-D01` through `D06`). These concern missing evidence paths and invalid location/subclass/role enum values. Exact examples include batch 20 `lem-top-exterior-power-detects-subspace-stabilizers` (location `Facts F1` and missing evidence path), its `weight-intersections`/`zero-convention` rows (subclass `local-amendment`), and batch 27 D05 (subclass `missing-dependency`, location `Facts F1`, role `alpha-batch-27`). Route these mechanical diagnostics to those owners/engine; their files and rows were not repaired here, and this report does not claim a passing run-wide ledger gate.

The two published nonfatal source defects remain **A-P, owner repair pending** in the deduplicated published ledger. Their current mathematical statements and assigned uses are sound; `nonfatal-recorded` is a finding disposition, not a content-repair claim. No substantial mathematical prerequisite remains unresolved in the owned batch. No proposed withdrawal was removed. All owning items remain draft and have no judge stamp. No judgment, certification, dispatch, run-control transition or impact-window closure was initiated; the engine and Step-5b lead own the remaining independent gates, cross-group obligations and published maintenance.

Changed item paths used in all final formatting checks:

- `items/lem-derivative-ideals-have-the-same-support.md`
- `items/lem-derivatives-under-field-isomorphisms.md`
- `items/lem-smooth-pullback-of-multiple-test-blowups.md`
- `items/lem-equivalence-of-powers-of-a-marked-ideal.md`
- `items/lem-order-semicontinuity-and-snc-strata.md`
- `items/lem-homogenized-ideal-under-smooth-morphisms.md`
- `items/lem-completion-automorphisms-for-tangent-directions.md`
- `items/lem-coefficient-ideal-under-smooth-morphisms.md`
- `items/lem-giraud-tangent-directions-and-controlled-transforms.md`
- `items/lem-glueing-homogenized-ideals.md`
- `items/lem-refined-giraud-maximal-contact.md`
- `items/prop-canonical-resolution-of-marked-ideals.md`
- `items/lem-canonical-resolution-commutes-with-ambient-embeddings.md`
- `items/lem-etale-commutativity-of-companion-step.md`
- `items/lem-canonical-resolution-commutes-with-smooth-morphisms.md`
- `items/lem-canonical-resolution-over-nonclosed-fields.md`
- `items/lem-embedding-independence-of-desingularization.md`
- `items/lem-open-restriction-of-desingularization.md`
- `items/lem-resolution-is-functorial-under-smooth-maps.md`
