
### Batch 10 — def-left-haar-integral-and-left-haar-measure

Decision: accepted. The definition independently specifies a nonzero positive real C_c functional and a nonzero invariant Borel measure. Radon means compact finiteness, Borel outer regularity, and open inner regularity, matching def-radon-measure-on-an-lch-space exactly; it does not assume inner regularity of every Borel set or countability. L_a f(x)=f(a^{-1}x) and R_a f(x)=f(xa) are consistent. No existence or AC assertion is hidden here. Source locator: item's Pedersen reference p.2; acceptance follows directly from the definition and read dependency interfaces.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — lem-translations-preserve-compactly-supported-continuous-functions

Decision: accepted. Steps 1.1–3.1 are complete: homeomorphisms give supports aK, Ka^{-1}, K^{-1}; finite compact products and continuous images give a common compact C for parameters in a compact neighbourhood V. Finite continuity rectangles covering C give the uniform epsilon/2 estimate, with zero outside C and explicit K=empty handling. Only finite selection is used. Dependencies thm-compactness-under-continuous-maps and thm-finite-products-of-compact-spaces apply to the stated compact factors; local compactness supplies a compact neighbourhood, not necessarily open. Source locator: Knapp VI §2, cited pp.225–230; no source-specific inference is needed beyond the displayed elementary proof.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — def-haar-covering-ratio-of-test-functions

Decision: accepted. The extended-real infimum includes the empty cover and gives (0:phi)=0. Normalization is explicitly deferred until its denominator is proved finite and positive. Translation conventions match the preceding definition and lemma; no unjustified existence is embedded. Item source locator: Pedersen p.2.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — lem-haar-covering-ratios-are-finite-and-positive

Decision: accepted. Steps 1.1–3.1 prove all clauses: finitely many xy^{-1}{phi>t} cover supp f; M/t coefficients dominate f. The sup-norm lower bound is positive for f nonzero. Scaling, joining and translating covers give the exact cone properties; substituting covers uses L_x L_y=L_xy and taking two finite-infimum approximations gives composition. Applying composition in both orders gives uniform positive coordinate bounds. Zero f and scalar zero are explicit. Dependencies supply compactness and ratio definitions. Item source locator: Pedersen p.2.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — lem-normalized-approximate-haar-functionals-are-positive-and-invariant-in-the-limit

Decision: accepted. Division by the preceding lemma's positive denominator proves normalization, exact invariance, homogeneity and subadditivity. Each relation uses finitely many real coordinates and is closed, so arbitrary coordinatewise limits retain it. Strict positivity is retained by the fixed positive lower bound, not by an invalid limit-of-positive argument. No additivity of approximants is asserted. Source locator: Pedersen pp.2–3; dependency is the reviewed covering-ratio lemma.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — lem-haar-covering-functionals-are-asymptotically-additive

Decision: accepted. Checked each authored estimate: q=s+delta F is bounded below by delta on numerator supports, so h_i extended by zero is C_c. Uniform right translations control h_i(x_j z) at every cover centre. Splitting the q-cover with strictly positive coefficients h_i(x_j)+eta gives error at most delta B+2eta(A+delta B), below epsilon with the displayed choices. Zero inputs are explicit. The read cutoff lemma needs DC, covered by declared AC. Primary source read: https://home.agh.edu.pl/~rudol/Paradoxes/haarintegral.pdf printed p.2 unnumbered Lemma and entire proof (lines 94–128); its LCH/nonzero normalizer hypotheses agree. No edit needed.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — lem-haar-candidate-sets-have-the-finite-intersection-property

Decision: accepted. The singleton cutoff and threshold (v-1/2)^+ give an actual nonzero test function supported inside each U. One approximant establishes nonempty coordinate intervals and product, including the empty-family FIP case. E_intersection is contained in every finite intersection. AC covers Tychonoff and inherited DC. Closed finite-coordinate equalities persist; asymptotic error <epsilon passes only to <=epsilon, then arbitrariness proves additivity. Dependency proofs for cutoff and asymptotic additivity were read; source comparison: Pedersen printed p.3 Theorem 1 uses a universal subnet, whereas this authored proof supplies the equivalent compact-FIP route explicitly.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — thm-existence-of-a-left-haar-integral

Decision: accepted. The preceding FIP construction supplies a nonzero normalized additive cone map under AC. If u-v=u'-v', equality u+v'=u'+v proves decomposition independence. Addition, nonnegative scaling and sign reversal give real linearity; translated decompositions give invariance. I(f0)=1 prevents the zero functional; real/imaginary decomposition and multiplication by i establish complex linearity. The cutoff at e exists by the read dependency proof. Primary source: Pedersen printed p.3 Theorem 1, lines 130–147; all LCH and nonzero normalization hypotheses checked. No unresolved inference.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — cor-existence-of-left-and-right-haar-measures

Decision: accepted. Step 1.1 correctly uses the equivalent compact-support supremum, distinct finite subcover indices, and partition products bounded by one on supp f; AC supplies summably accurate open supersets. Read lem-rmk-functional-outer-content-is-well-defined, the finite partition proof, RMK representation and uniqueness. The formerly defective published outer-measure step is now repaired on disk and already classified A-R in the canonical ledger (2026-09-09); the local explanation remains mathematically valid. Homeomorphism pushforwards preserve exactly compact finiteness/open inner/Borel outer regularity. The translation inverse and (Ea)^{-1}=a^{-1}E^{-1} establish the correct handedness. No new published defect or prerequisite amendment.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets

Decision: accepted. Nonzero real functional gives a positive nonnegative part; finite translating domination then gives strict positivity for every nonzero test function. If one nonempty open U were null, its translates cover each compact set finitely; open inner and Borel outer regularity force the entire measure to vanish. Local finiteness follows from compact neighbourhoods. Empty set and zero function are excluded from strict positivity. The reviewed ratio lemma and Radon definition provide exactly the used facts; no AC selection is introduced.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — lem-compactly-supported-kernels-admit-commuting-radon-integrals

Decision: accepted. Read all four steps and cutoff/partition supplier proofs. Compact support projections K_X,K_Y bound sections. Finite rectangles give uniform section estimates and continuity of each partial integral via positivity, with support in the opposite compact projection. H=c_Y sum psi_j F_yj is a finite tensor sum; F=c_Y F and sum psi_j=1 on supp c_Y prove |F-H|<=epsilon c_X c_Y globally, including outside either compact. Iterated integrals commute for H by linearity; the error is <=2epsilon I(c_X)J(c_Y), with finite and possibly zero factors handled. AC covers inherited DC only; no product-measurability or sigma-finiteness premise is used. Source locator: Pedersen second uniqueness proof pp.4–5 motivates compact-kernel interchange; the displayed finite-partition proof establishes the full local claim.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — lem-haar-integral-comparison-inequality

Decision: accepted. Verified noncommutative substitutions in step 1.2: f(x)u(x^{-1}y) is supported in K times KS; x=yz uses only left invariance, and symmetry changes u(z^{-1}) to u(z). The transformed support is KS^{-1} times S, permitting the second compact-kernel interchange. Positivity then bounds the difference by I(u) sup J(|R_z f-f|). Common compact support and a cutoff prove continuity and smallness of this supremum, with epsilon/2 ensuring strictness. Thresholding v and multiplying w(z)w(z^{-1}) yields symmetric nonzero u in any sufficiently small symmetric neighbourhood. Exact AC/DC uses are declared; zero f and zero cutoff integrals are handled. Dependencies are the reviewed kernel, translation, positivity and cutoff results.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — thm-uniqueness-of-left-haar-measure-up-to-scale

Decision: accepted. Regularity of nonzero measures yields a positive-mass compact set and a nonzero C_c integral under AC cutoffs. One symmetric u works simultaneously for f and f0. Dividing by positive I(u) and cross-multiplying the two comparison errors cancels r=J(u)/I(u) without assuming convergence of r. Letting epsilon tend to zero proves c=J(f0)/I(f0)>0 for all positive f, then all real C_c. Read RMK uniqueness transports equality to every Borel set, including infinite masses. No inversion invariance or countability is assumed. All load-bearing inequalities follow from the reviewed comparison lemma.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — cor-normalized-haar-probability-on-a-compact-group

Decision: accepted. G is nonempty open and compact, so its Haar mass is finite positive. Dividing yields mass one and scalar uniqueness forces uniqueness. Right translation preserves left invariance because the two actions commute; inversion is then left invariant using established right invariance. Both pushforwards are Radon probabilities. Exact AC assumption propagates from existence/uniqueness; no division by zero, including the trivial group.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — ex-counting-measure-as-haar-measure-on-a-discrete-group

Decision: accepted. Compact sets in a discrete topology are exactly finite sets. For disjoint sets with infinite union, either an infinite member exists or finite cumulative cardinalities are unbounded; thus countable additivity holds without a countable selection. Arbitrarily large finite subsets give inner regularity even for uncountable G; every set is open for outer regularity. Translation bijections preserve cardinality and C_c integrals are finite sums, including empty support. Only the reviewed Haar definition is needed.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — ex-lebesgue-measure-as-haar-measure-on-rn

Decision: accepted. Read both actual published suppliers thm-lebesgue-measure-is-a-radon-measure-on-rn and thm-lebesgue-outer-measure-and-measurability-are-translation-invariant. Their n>=1 and countable-choice hypotheses are met by explicit n>=1 and AC. Borel restriction has required Radon regularity, nonzero unit-cube mass, and both invariances on the abelian additive group. Reviewed Haar uniqueness gives scalar c, and unit-cube normalization forces c=1. The translated side-two cube calculation is 2^n.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — ex-normalized-haar-measure-on-a-finite-group

Decision: accepted. Discrete finite G is compact and m>=1; dividing reviewed counting measure by m gives the claimed probability and integral. All three maps permute the finite sum. AC is explicitly inherited only through the general uniqueness theorem. C3 values sum to 6 and average to 2; m=1 and f=0 handled. Dependencies occur earlier on the same B page or its A companion.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — ex-haar-measure-on-an-infinite-product-of-compact-groups

Decision: accepted. Coordinatewise operations and Hausdorff separation give a topological group; Tychonoff under AC gives compactness and Haar existence. Identity-filled sections explicitly lift finite-subproduct translations. On compact G with finite mass, complements upgrade Borel outer regularity to compact inner regularity; projecting compact approximants and complementing gives Radon marginals. Finite basic-cylinder covers approximate each continuous h uniformly by h composed with s_F pi_F, proving uniqueness among Radon probabilities on the full Borel algebra without equating it to the cylinder sigma algebra. C2^F has 2^r equal singleton masses; empty F and empty I give mass one. All seven declared dependency interfaces and the displayed boundary argument apply.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — haar-measure-existence-and-uniqueness

Decision: accepted. Read full A-page inventory and prose. All 14 items are in supplier-before-consumer order. Summary accurately describes finite cover construction, genuine limiting additivity, RMK regularity, compact-kernel uniqueness and compact-group normalization. AC and absence of sigma-compactness/product-Borel-identification hypotheses are correctly explained. No unsupported page-level mathematical assertion or page amendment needed.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — haar-measure-existence-and-uniqueness-examples

Decision: accepted. Read complete B page and all four examples. Inventory order permits finite-group example to use earlier counting example on the same page. Prose correctly describes uncountable discrete compact sets as finite, explicit Euclidean/finite-group normalizations and finite-coordinate probabilities with arbitrary-index AC assumptions. No B item supplies another page.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — def-block-bimodule-for-the-double-group

Decision: accepted. Double action composes as (xx',yy') and central b splits the group algebra. Endomorphisms are central multiplication via T(b), so primitive b excludes a nontrivial bimodule splitting. Finite-dimensional stabilized kernel/image decomposition makes each central multiplier invertible or nilpotent; commuting nilpotents form an ideal, proving locality. Splitting-system supplier explicitly splits every subgroup and has residue characteristic p. No lattice-vertex identification is assumed. Manifest and contract boundary cases match the definition.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — lem-group-algebra-bimodule-is-induced-from-the-diagonal

Decision: accepted. Coset map (x,y)Delta G -> xy^{-1} is well-defined and has inverse g -> (g,1)Delta G. Equality of images gives x^{-1}x'=y^{-1}y', proving injectivity. The induced trivial-module coset basis is carried equivariantly to the group basis under the double action. All claims hold over the specified field, including trivial G; manifest and contract agree.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — lem-relative-projectivity-mackey-intersections-for-finite-modules

Decision: accepted. Balanced tensor map a tensor v -> ax tensor v identifies each double-coset component, with L_x=A intersect xBx^{-1}. Disjoint group bases prove bijectivity in any characteristic. Explicit transitivity and counit splittings preserve summands; finite Krull-Schmidt gives extraction from one term. Combining Q- and B-counit splittings puts M in a sum induced from Q intersect xBx^{-1}; vertex minimality forces that intersection to equal Q. Read published Higman and Green proofs and their finite-dimensional hypotheses. Zero inducing module and trivial vertex are valid; no character-only Mackey argument or unsupported restriction inference.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — thm-block-bimodule-has-a-diagonal-vertex

Decision: accepted. Nonzero indecomposable block is a summand of Ind_DeltaG k. Reviewed vertex-containment lemma conjugates a genuine vertex into Delta G, and first projection identifies it with Delta D for a p-subgroup D. Conjugation preserves minimality. The proof never equates arbitrary relative projectivity with the vertex condition; dependencies, manifest and contracts apply.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — def-defect-group-and-numerical-defect-of-a-block

Decision: accepted. Defines defect using actual diagonal vertices of the residue-field bimodule. Preceding existence gives such D; order p^d gives unique d>=0 for each D, with independence explicitly deferred to the next conjugacy theorem. D=1 exactly means d=0. No unproved passage to lattices is claimed; manifest and boundary contract agree.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — thm-defect-groups-of-a-block-are-conjugate

Decision: accepted. Green conjugacy applies to the same nonzero indecomposable double module. Projecting (x,y)Delta D(x,y)^{-1}=Delta E to the first factor proves E=xDx^{-1}. Conversely (x,x) transports the vertex, so all conjugates occur; equal orders make numerical defect independent. Both implications and trivial subgroup case checked against contract.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — lem-block-relative-trace-characterizes-diagonal-projectivity

Decision: accepted. Mackey restriction intersections are Delta L with L contained in xHx^{-1}; conjugation inside Delta G and transitivity make all restricted terms relatively Delta H-projective. Higman evaluated at central b gives a=alpha(b) in B^H. Conversely left multiplication by a has diagonal trace identity; relative Delta G-projectivity and the counit recover double-group projectivity. Minimal p-subgroups match vertices, and b=0 has witness zero. Primary source fully read: Webb Lemma 12.4.4 and Theorem 12.4.5, printed pp.240–241, /tmp/webb-audit/RepBookLatex.txt lines 16520–16649 (URL https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf). Web opens failed twice; the existing local full text supplied this section. The authored field proof is explicit, not an unsupported invocation of the source's DVR theorem.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — thm-vertices-of-modules-in-a-block-lie-in-a-defect-group

Decision: accepted. The reviewed trace witness b=Tr_D a acts on M with bM=M. Multiplication by a is D-linear and has trace identity, so Higman gives relative D-projectivity; reviewed containment then handles every vertex. Nonzero indecomposable finite dimension is stated. Source read: Webb Corollary 12.4.6, printed p.241, local full text lines 16650–16662; this authored argument verifies the residue-field case directly.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — prop-principal-block-has-sylow-defect

Decision: accepted. On trivial k, trace of a scalar from H is [G:H] times that scalar; solvability for identity is exactly p not dividing the index. Minimal p-subgroups with this property are Sylow. Exactly one orthogonal block idempotent acts by scalar one. Its defect contains a Sylow vertex and must be Sylow; all Sylow conjugates remain defects. Includes p not dividing |G|. Source read: Webb Corollary 12.4.7, printed p.242; no stronger assertion needed.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — lem-projective-simple-symmetric-block-is-a-matrix-algebra

Decision: accepted. Read projective/injective and regular-decomposition suppliers. The symmetric form restricts nondegenerately because block factors have zero cross-products. Projective simple S is injective; nonzero maps S->P and P->S split by injectivity and projectivity respectively, forcing indecomposable P isomorphic to S. Thus both off-diagonal Hom spaces vanish. The regular-module projection is central multiplication, and primitive b forces its complement zero. Semisimplicity plus splitting gives exactly M_dim(S)(k). The authored direct splitting proof is stronger in clarity than the manifest's Cartan-symmetry outline and does not require that outline as a missing premise. All finite and size-one boundaries checked.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — thm-defect-zero-blocks-are-simple-algebras

Decision: accepted. Defect zero gives trivial vertices and finite free inducing retractions for simple modules; a maximal-dimensional proper left ideal supplies a simple quotient, and the reviewed helper forces a split matrix block. Matrix columns are projective. Conversely B tensor B^op acts by all matrix units on B; under inversion the correct central factor of k[G times G] is b tensor b-star. Projectivity over this factor extends to the whole algebra and gives trivial vertex. This verifies all three equivalent clauses, including matrix size one and characteristic two; no B tensor B error or unproved lattice passage.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — def-brauer-homomorphism-for-a-p-subgroup

Decision: accepted. Coefficient projection has domain (kG)^P, target kC_G(P), and Br_1=id. Multiplicativity is explicitly deferred and never asserted on all kG. Finite G and characteristic p are supplied; the definition and contract boundaries are consistent.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — thm-brauer-homomorphism-is-multiplicative

Decision: accepted. For z centralizing P, P permutes the finite set xy=z and each weight a_x b_y is constant on its orbit. Nonsingleton orbit sizes vanish in characteristic p, while singleton pairs have both factors in C_G(P). This proves coefficientwise multiplicativity. Target elements already lie in the fixed algebra, giving a section and surjectivity; identity and linearity are explicit. Read source comparison Shrestha §2 Proposition 2.3 (the source states the result); the authored orbit proof supplies every inference.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — lem-brauer-homomorphism-is-conjugation-equivariant

Decision: accepted. Conjugating the fixedness equations proves domain membership; conjugation bijects C_G(P) with C_G(gPg^{-1}). Both composites retain exactly a_x gxg^{-1} for x in C_G(P). Zero inputs, g=1 and P=1 are valid. No extra hypothesis or choice required.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — def-relative-brauer-homomorphism

Decision: accepted. Q normal in P ensures P acts on C_G(Q), trivially through Q. The permutation-basis P/Q orbit calculation applies to products and yields a unital surjective homomorphism B_Q^P -> kC_G(P). Domain fixedness is explicit and Q=P gives identity; this is not an unjustified quotient of the ambient group.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — lem-relative-brauer-homomorphisms-are-transitive

Decision: accepted. All three normalities are explicitly assumed, avoiding false transitivity of normality. Equivariance puts the intermediate truncation in the required P-fixed algebra; nested centralizers then prove equality coefficientwise. For a in (kG)^P, normality makes Br_Q(a) P-fixed and the same nested truncation proves Br_{P/Q}Br_Q=Br_P. Equal subgroup and zero cases checked.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — prop-central-idempotents-under-the-brauer-homomorphism

Decision: accepted. Surjectivity lifts every target element and therefore transports centrality of b; multiplicativity transports idempotence. Multiplying the finite central block decomposition of one by Br_P(b) gives products each zero or its whole primitive block. Orthogonality proves the stated exact sum, including empty sum when the image vanishes.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — lem-brauer-kernel-and-relative-trace-support

Decision: accepted. Fixed-algebra basis is formed by P-orbit sums. Each nonsingleton orbit sum is Tr_{C_P(x)}^P(x); conversely every proper trace has retained coefficient [P:Q]a_z=0. Thus both kernel inclusions hold, with P=1 giving empty sum. For Tr_H^G, orbit grouping on G/H at a P-centralizing coefficient leaves only P-fixed cosets; any surviving coefficient implies g^{-1}Pg<=H. No converse support assertion is made.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — lem-block-centre-locality-and-trace-ideal-sums

Decision: accepted. The displayed stabilized-kernel/image proof is valid for central multiplication and splits B as bimodules. Indecomposability gives nilpotence or a central inverse. In the commutative centre, sums and central multiples of nilpotents remain nilpotent, so nonunits form the unique maximal ideal. A finite sum equalling b has a unit term; trace images are ideals because fixed central factors pass through the sum. All empty/zero and scalar-centre boundaries checked.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — thm-defect-groups-are-maximal-brauer-support

Decision: accepted. If Br_D(b)=0, proper-D trace decomposition of b can be multiplied by b to put witnesses in B. D-fixed a then gives b=Tr_D^G(ab)=sum Tr_Q^G(au_Q). The reviewed local-centre trace-ideal result puts b in one proper-Q trace ideal, contradicting minimality. Nonzero Br_P(b) and the D-trace expression force P into a conjugate D; orders give maximality, and maximal P equals that conjugate. This establishes both directions without assuming the desired Brauer support result.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — lem-finite-dimensional-algebras-admit-primitive-idempotent-decompositions

Decision: accepted. Splitting e=u+v keeps each new idempotent in its old corner and orthogonal to other family members. Orthogonal nonzero idempotents are linearly independent, so repeated splitting terminates within dim A. Equivalent corner-dimension induction shows the same claim without infinite choice. Zero has empty decomposition, one is included, and primitivity in the own corner equals primitivity in A. No external algebra structure theorem is assumed.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — def-brauer-pair-for-a-block

Decision: accepted. Local pairs require nonzero primitive central e in kC_G(P); b-membership is Br_P(b)e=e, equivalent to nonzero by the reviewed central image proposition. Membership is correctly distinguished from pair inclusion, and Br_1=id gives (1,b). Definitions, manifest and boundary contract agree.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — def-normal-inclusion-of-brauer-pairs

Decision: accepted. Q normal in P and P-stable f make the relative map well-defined before its product with e is tested. Candidate order is only the existence of a finite normal-pair chain, including length zero; uniqueness and transitivity conclusions are deferred. Equal-subgroup compatibility fe=e forces f=e by central primitivity. No chain-independence assumption is used here.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — lem-brauer-maps-kill-nontrivial-idempotent-orbit-sums

Decision: accepted. Orbit sum belongs to the fixed domain. At each x centralizing P every conjugate has the same coefficient, so the sum's retained coefficient is orbit size times that coefficient, zero for nonsingleton p-orbits. Idempotence is never used, proving the broader finite-orbit clause. Singleton orbits are properly excluded; no division occurs.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — thm-unique-normal-subpair-below-a-brauer-pair

Decision: accepted. Read entire proof and normal-inclusion/orbit-vanishing suppliers. Partitioning the block decomposition into P-orbits kills nonsingleton orbit sums. Images of individually stable blocks are orthogonal central idempotents summing to one, by surjectivity and multiplicativity of the relative map. Multiplication by primitive central e gives exactly one surviving block: at least one since e nonzero, at most one by orthogonality. This establishes the actual fixed-domain normal subpair, including Q=P. Source read: Shrestha Lemma 3.2 and full proof, printed pp.4–5, https://math.uchicago.edu/~may/REU2012/REUPapers/Shrestha.pdf; the authored proof avoids applying algebra multiplicativity to nonfixed individual orbit elements.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — lem-brauer-images-of-primitive-idempotent-decompositions

Decision: accepted. Checked polynomial lift over an arbitrary field: an annihilating m for a lift x satisfies m(0)=m(1)=0 for nontrivial target idempotent y. Factoring off maximal (T-1)^s and Bezout give q(0)=0,q(1)=1 and m dividing q(q-1), so q(x) lifts y idempotently even in noncommutative A. Corner surjections therefore cannot split a nonzero image of a primitive idempotent. Decompose a lifted primitive target to get one surviving primitive lift. Orthogonality and sums prove both Brauer-decomposition clauses; primitive in A_P is not falsely claimed primitive after passage to A_Q. Zero images, zero/one lifts, characteristic two and corners checked.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — thm-brauer-pair-order-is-independent-of-the-normal-chain

Decision: accepted. Read every authored step 1.1–11.1, all eight supplier statements/proofs, and AKO IV §2 Theorem 2.10 proof and Lemma 2.11 (printed pp.180–183, web lines 12513–12754 at https://www.math.ku.dk/english/research/conferences/2013/groups2013/AschbacherKessarOliver.pdf). The source treats p-permutation algebras; conjugation on kG permutes its group basis. The authored arbitrary-field lifting lemma closes its primitive-image premise. Step 2.1 proves compatibility directly via j<=i without transitivity. Normal base cases use surjectivity A_P -> B_Q^P only when Q normal P. For nonnormal Q, fixed-coset counting gives Q<N_P(Q)<P, so every induction invoked in steps 4–5 has smaller index. The error idempotent z=b_Q(i)(1-f) lies in all relative kernels. Step 7 identifies their intersection by basis stabilizers exactly Q with Tr_Q^N(B_Q); step 1.3 equates this to b_Q Tr_Q^P(A_Q). Sandwiching puts z in the image of the proper trace ideal in iA_Pi. The finite Fitting proof in step 1.2 makes its elements nilpotent; hence z=0. Only after existence is proved does compatibility give transitivity. Iterated normalizers then identify normal-chain descent, and the nonempty associated-primitive family proves all six witness/universal criteria. Equal groups, zero images and length-zero chains checked. No repair or circular inference found.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — thm-every-brauer-pair-determines-a-unique-global-block

Decision: accepted. Unique descent to 1 gives precisely Br_P(b)e=e since global blocks are central. Equivariance fixes b, and proved transitivity identifies the block of comparable pairs. Dependencies: chain-independence theorem and conjugation equivariance; no new hypotheses or choice use.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — lem-finite-dimensional-commutative-algebras-decompose-into-local-factors

Decision: accepted. Finite dimension terminates central-idempotent splitting. Stabilized multiplication kernel/image are complementary ideals; splitting 1 shows every element in an indecomposable factor is a unit or nilpotent. Commutativity makes nilpotents a proper ideal containing all proper ideals. Coordinate idempotents split arbitrary ideals, including zero quotient factors. Complete local proof over any field; no algebraic-closure assumption.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — lem-idempotents-lift-through-finite-commutative-algebra-quotients

Decision: accepted. The preceding local-factor decomposition applies to an arbitrary ideal. In each nonzero local quotient an idempotent is 0 or 1 because either x or 1-x is a unit; lifting these coordinates gives an idempotent. Zero factors and zero algebra handled explicitly. This supplies the exact general-field lifting needed by maximal pairs, with no nilpotent-kernel assumption.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — thm-maximal-brauer-pairs-exist-and-are-conjugate

Decision: accepted. Checked complete local orbit-sum proof against Jacobsen thesis Lemma 2.32/Theorem 2.33, printed p.18 (https://www.math.ku.dk/bibliotek/arkivet/phd-theses/phd14mwj.pdf). Maximality kills relative images above P; the p-group normalizer condition forces P Sylow in centralizers of support elements. Sylow conjugacy then extends coefficients to a central class sum. Local finite-commutative quotient lifting yields Br_P(b)=z; larger support contradicts vanishing at N_S(P), and defect conjugacy plus orthogonality proves pair conjugacy. General-field lifting is proved locally, so no extra source field hypothesis is imported. Dependencies include proved chain order, trace support and defect-support equivalence; finite existence and P=1 cases covered.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — thm-maximal-brauer-pairs-detect-defect-groups

Decision: accepted. Forward implication is the established maximal-pair theorem. Conversely any larger pair has nonzero Br_P(b), so maximal support forces P=D; equal-subgroup uniqueness forces its block idempotent to equal e. No circular use of this corollary in the preceding theorem.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — lem-restriction-to-a-containing-p-subgroup-retains-a-vertex

Decision: accepted. Source S has full Q vertex by induction transitivity and minimality. Krull-Schmidt extracts U on restriction to R. First Mackey decomposition bounds a vertex T of U by |Q|; a second decomposition of Res_Q Ind_T supplies Q <= rTr^-1 because S has full vertex. Orders force equality, and conjugation inside R preserves the same module U. Checked literal Q conclusion, both split witnesses, finite-dimensional hypotheses and published Green/Higman interfaces.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — lem-transitive-p-group-permutation-modules-have-point-stabilizer-vertices

Decision: accepted. Read published augmentation-ideal nilpotence proof; it holds over every characteristic-p field. Nonzero summands have fixed vectors whereas the transitive permutation module has one-dimensional invariants, proving indecomposability. For T<L the coefficient of the fixed basis vector in a Higman trace is constant on L-orbits of R/T, all with p-divisible size. It cannot equal the identity coefficient 1. Thus L is a vertex, including L=1 and L=R boundaries.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — lem-block-defect-is-an-intersection-of-two-sylow-subgroups

Decision: accepted. Restriction to P x P retains a summand with vertex Delta D by the local restriction lemma. Double-coset permutation summands have stabilizers L_g={(a,g^-1ag)} and are indecomposable by the preceding lemma. Krull-Schmidt and vertex conjugacy give Delta D=(r,s)L_g(r,s)^-1; h=rgs^-1 centralizes D and yields D=P intersect hPh^-1. Verified the twisted-diagonal calculation and that both conjugating coordinates lie in P. Webb §§12.4, pp.240–242 source comparison read from cached PDF text; direct URL fetch failed, with local proof independently checked.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — cor-normal-p-core-lies-in-every-block-defect-group

Decision: accepted. Finite products of normal p-subgroups define O_p(G), and the product order formula puts each normal p-subgroup inside every Sylow. The proved two-Sylow intersection formula therefore contains O_p(G). No use of a stronger unproved normal-subgroup block theorem.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — cor-block-defect-groups-are-p-radical

Decision: accepted. Choose T Sylow in N_G(D) and P Sylow in G containing T; then P intersect N_G(D)=T. The local intersection theorem supplies h centralizing D, hence in N_G(D), so D=T intersect hTh^-1. The normal p-core lies in both Sylows, while D itself is normal in its normalizer. Both inclusions give the claim over any characteristic-p field.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — ex-defect-and-brauer-pairs-for-a4-in-characteristic-three

Decision: accepted. Checked all character sums over the Klein four group: signs are available over every characteristic-three field, 4=1, and the complement cycles the three nontrivial idempotents. The fixed component is kC3 local; nine t^i q t^-j matrix units exhaust the complementary dimension-nine ideal and establish primitivity. Centralizers of the four Sylow C3 subgroups are themselves, so projections 1 and 0 exhaust the stated pair lists and defects. No splitting-field strengthening is needed; source locator Jacobsen Example 2.12, with all coefficients independently verified.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — ex-brauer-pair-branching-for-c3-semidirect-d8-in-characteristic-two

Decision: accepted. The explicitly stipulated cube root is legitimate here. The presentation gives exactly the order-24 semidirect product; centralizers are C3 x C4 and C2 as computed. Fourier sums are orthogonal with 3=1, and their factors are local kC4. The reflection interchanges e1,e2 while e0 is fixed and has relative image 1. Since Q is normal in P, the proved normal order criterion excludes exactly the two unstable pairs. All group, coefficient and stability calculations checked; AKO IV Theorem 2.10 is the already-read supplier source.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — ex-blocks-and-defect-groups-of-s3

Decision: repaired. Repaired the unjustified cube-root choice: the published splitting-field definition is only for G, and does not imply roots for C3. Explicit A=[[0,1],[1,1]], T=[[0,1],[1,0]] satisfy S3 relations in every characteristic-two field. The ideal with basis f,fa,ft,fat maps onto all four matrix units, giving M2(k) by dimension. The complementary ideal remains local kC2, and the computed Brauer support gives defects. In characteristic three checked T_class^2=0, C^2=C+2, T_class C=2T_class, so the centre radical J has J^2=0 and only idempotents 0,1. All stated conclusions retained. Manifest strategy and contract derivations/boundary updated; provenance remains ai-altered, dependencies unchanged. Reflow and precheck pass. No published defect: the published definition is correct.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — ex-defect-zero-and-p-group-boundaries

Decision: repaired. The p-group argument is sound: maximum finite dimension supplies simple quotients of nonzero blocks, and the read unique-simple supplier forces one principal block, including the trivial group. Replaced the S3 cube-root witness by the full explicit characteristic-two matrix representation and dimension-four ideal argument within this example. No dependency on another example and no field strengthening. The four matrix-unit identities give a sound matrix block, so the reviewed defect-zero theorem applies. Updated manifest and regenerated contract; reflow and precheck pass. Defect closed in append-only ledger with this item as sole owner.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — blocks-defect-groups-and-the-brauer-homomorphism

Decision: accepted. Read complete A page and its 37 listed items. Introductory claims match the proved diagonal-vertex, relative-trace, pair-order, maximal-pair and two-Sylow results; arbitrary-field versus splitting-field qualifications are accurate. Supplier order places each newly authored local prerequisite before its consumer. No page prose defect or unproved mathematical addition.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — blocks-defect-groups-and-the-brauer-homomorphism-examples

Decision: accepted. Read complete B page and all four examples. The summary accurately describes the A4 and S3 block calculations, stable local pair in C3 semidirect D8, and zero/full defect boundaries. The two repaired calculations still explicitly produce matrix units through their matrix representation. No page prose change is needed; companion A dependencies remain intact.

Validation: authored argument and applicable dependency interfaces read; no mathematical edit unless stated. Next: next owned obligation in scope order.

### Batch 10 — completed review and serial-lead handoff

Scope: 59 authored items and 4 pages, all with exactly one current `authored:10:<id>` decision. Dispositions: 57 accepted items, 2 repaired items, 4 accepted pages; no escalations or unresolved mathematical/source obligations. Both repairs have `repair_confidence: 1` and separate closed defect references. This is the local 6B review, not a 6C/6D audit or publication certification.

Repairs: `ex-blocks-and-defect-groups-of-s3` step 1.1/2.1 and `ex-defect-zero-and-p-group-boundaries` step 3.1 no longer infer a primitive cube root from a field splitting only S3. The exact published definition is `items/def-splitting-field-for-a-finite-group.md`, Definition and final Remark: it quantifies over the fixed group alone. F2 supplies the relevant boundary: the repaired decomposition F2[S3] = F2[C2] × M2(F2) has scalar endomorphism rings for its two simple modules, but F2 has no primitive cube root. The new explicit matrix calculation proves the same claimed blocks over every characteristic-two field. No statement weakening, new items, new pages, extra AC, or dependency changes. The explicitly supplied cube root in the separate C3 semidirect D8 example remains valid.

Owned carrier updates: both example bodies retain their stable IDs and ai-altered proof provenance; the batch-10 manifest strategies record the explicit A,T matrices and four matrix-unit identities. The two proof-contract citation/derivation records were regenerated, and the S3 nonempty-choice boundary was corrected. Page item order is unchanged. Required shared-plan and Phase-2 scope/prerequisite amendments: none, because every claim, ID, page and dependency interface is preserved. If copying strategies from the manifest, use its current root-free calculations for these two IDs; no additional supplier commissioning is needed.

Frontier: followed `briefs/tasks/frontier-dependency-ledger.md`. The owned batch input remains the valid empty array at `research/phase-2-catchup-24-batch-10.cross-batch-dependencies.json`. Checked all owned body links against current other-batch manifests and ran the frontier collector over current manifests/carriers: no owned consumer edges, no owned orphan reviews, batch 10 marked reviewed. Thus there are no changing cross-batch supplier dependencies to record; no input/dependency edit or unified-ledger refresh is needed. Internal suppliers were read in their actual authored order.

Published findings: no new defective published item was found in the dependency interfaces reviewed. The splitting-field definition is correct and stays read-only. The previously recorded RMK outer-content repair (`thm-rmk-functional-outer-content-is-an-outer-measure`) is already present on disk and classified A-R in the canonical ledger; it was not newly repaired here. No new published classification or lock-protected ledger mutation is warranted. This does not assert an exhaustive published-library audit.

Local checks:
- Reflow of the two repaired examples: unchanged canonical paragraph format. Precheck: 2 checked, 0 failing.
- Explicit prime-field calculation verifies A^3=T^2=I, TAT=A^-1, A+A^2=I and all four matrix-unit identities. The coefficients are 0,1, so these identities hold over every characteristic-two field.
- Strict proof-contract check: 59/59 checked, 0 errors, one heuristic shotgun-bracket warning for `lem-block-defect-is-an-intersection-of-two-sylow-subgroups` step 1.1. That step actually needs all four cited facts: the block vertex, restriction retention, source existence and the split restriction. Steps 2.1 and 4.1 are direct orbit/stabilizer and conjugation calculations. No citation defect.
- Citation fidelity: 176 citations over 59 items, all exact source quotes found, no widening candidates.
- Risk report `--require-reviewed` text mode: 59 items, 0 errors; 17 CRITICAL, 14 HIGH, 18 MODERATE, 10 ORDINARY. All owned contract reviews contain item-specific mathematical evidence.
- Boundary audit: 472 rows; 12 template-similarity clusters and two contradicted-disposition candidates. Complete boundary records were read. Reused endpoint/no-converse statements are accurate; the detector also normalizes distinct variables into spurious similarities. Both contradicted candidates are false positives: G/H in the relative-trace lemma is nonempty, and C_G(Q), C_G(P) in the relative-map definition contain 1. Empty coefficient support is the zero element and is separately handled; no empty-group hypothesis is hidden. The `--fail-on-contradicted` command therefore exits 1 mechanically, with no confirmed boundary defect. No content was changed merely to suppress this detector.

Workflow finding: `p2c24-6b-e10-risk-json-pipe-truncation` records a nonfatal output-delivery defect in `tools/risk-report.mjs`: a large `--json` output piped to subprocess returns exit 0 but ends inside a string, so JSON parsing fails at character 65494. Its finish function calls process.exit immediately after console.log; the complete text-mode check passes. Tool owner should use process.exitCode or wait for stdout completion and test a large piped JSON report. No tool edit or stage transition was attempted. The two mathematical defects and this workflow defect were appended through `tools/defect-ledger.mjs`; generated ledger rendering belongs to that interface.

Next action: engine-owned full join and subsequent 6C/6D protocols. No permission request, independent judge, hash stamp, schedule change, or unfinished mathematical repair remains in this dispatch.

### Batch 11 — def-generalized-cartan-matrix

Decision: accepted. The nonempty finite integer matrix definition imposes diagonal 2, nonpositive off-diagonal entries and both directions of symmetric zero support. Indecomposability matches connected support, including rank one.

Read current item, manifest and contract. Conventions: complex minimal realization and row evaluations; source locators are the item Sources sections (Kleshchev §§1.2, 2.1). No edit, new supplier, shared-plan amendment, or unresolved obligation. Local mechanical checks pending. Next: next owned item.

### Batch 11 — def-symmetrizable-generalized-cartan-matrix

Decision: accepted. DA symmetry is exactly d_i a_ij=d_j a_ji. Positive rational ratios propagate along finite paths; the supplied real symmetrizer ensures path independence, and finite denominator clearing includes isolated vertices. Reciprocal Kleshchev convention is correct.

Read current item, manifest and contract. Conventions: complex minimal realization and row evaluations; source locators are the item Sources sections (Kleshchev §§1.2, 2.1). No edit, new supplier, shared-plan amendment, or unresolved obligation. Local mechanical checks pending. Next: next owned item.

### Batch 11 — def-realization-of-a-generalized-cartan-matrix

Decision: accepted. Independent indexed roots and coroots have evaluations alpha_j(h_i)=a_ij and dimension 2n-r. The explicitly declared existence justification is the directly checked next proposition; no unique isomorphism is claimed.

Read current item, manifest and contract. Conventions: complex minimal realization and row evaluations; source locators are the item Sources sections (Kleshchev §§1.2, 2.1). No edit, new supplier, shared-plan amendment, or unresolved obligation. Local mechanical checks pending. Next: next owned item.

### Batch 11 — prop-minimal-realizations-exist-and-are-unique-up-to-isomorphism

Decision: accepted. Read all three steps and contract. Surjectivity of p on V plus a row-image complement gives independent coordinate roots and dimension 2n-r. Surjectivity forces dim(H/V)>=n-r; at equality ker p lies in V. Common complementary-image sections give an invertible family-preserving map. Works for singular A without principal rank minors; only finite linear elimination is used.

Read current item, manifest and contract. Conventions: complex minimal realization and row evaluations; source locators are the item Sources sections (Kleshchev §§1.2, 2.1). No edit, new supplier, shared-plan amendment, or unresolved obligation. Local mechanical checks pending. Next: next owned item.

### Batch 11 — def-kac-moody-root-lattice-height-and-positive-cone

Decision: accepted. Simple-root independence proves unique integer coordinates, Q+ intersect -Q+={0}, and the three partial-order axioms. Zero belongs to the cone and is explicitly excluded from positive roots.

Read current item, manifest and contract. Conventions: complex minimal realization and row evaluations; source locators are the item Sources sections (Kleshchev §§1.2, 2.1). No edit, new supplier, shared-plan amendment, or unresolved obligation. Local mechanical checks pending. Next: next owned item.

### Batch 11 — lem-pbw-for-countably-presented-kac-moody-lie-algebras

Decision: accepted. Checked termination by lexicographic length/inversions with finite branching; the explicitly ordered first unbounded child needs no choice. Both triple-overlap expansions differ by Jacobi, also within contexts where shorter total words are inductively resolved. The normal form annihilates every two-sided defining relation and is inverse to ordered words. Canonical finite echelon bases supply compatible homogeneous subspace/quotient bases; no arbitrary PBW or AC is assumed. Published tensor-quotient definition read and adequate. This locally proves the extension rather than assuming Kleshchev's PBW use.

Dependencies: def-universal-enveloping-algebra-as-a-tensor-quotient. Current authored text, manifest and contract read. Source: item Sources section and the exact locators noted above; recovered Kleshchev text `/tmp/tmp.Lbe2JSWVOC/klesh.txt`, author URL https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf. No repair or shared-plan amendment; no unresolved obligation for this item. Mechanical checks pending. Next: next owned obligation.

### Batch 11 — lem-free-lie-construction-for-finite-kac-moody-generators

Decision: accepted. Recursive evaluation proves the formal quotient universal property before tensor embedding is asserted. Countable word enumeration supplies a basis; the two associative maps fix all generators and hence are inverse. The reviewed local PBW injectivity then identifies the image with bracket words, including zero and one-generator boundaries. Kleshchev Theorem 1.3.3(ii) read; local proof closes its free-Lie interface.

Dependencies: lem-pbw-for-countably-presented-kac-moody-lie-algebras, def-universal-enveloping-algebra-as-a-tensor-quotient. Current authored text, manifest and contract read. Source: item Sources section and the exact locators noted above; recovered Kleshchev text `/tmp/tmp.Lbe2JSWVOC/klesh.txt`, author URL https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf. No repair or shared-plan amendment; no unresolved obligation for this item. Mechanical checks pending. Next: next owned obligation.

### Batch 11 — def-contragredient-lie-algebra-before-the-maximal-ideal-quotient

Decision: accepted. All four relation families are homogeneous with degrees 0, alpha_i, -alpha_i. Quotient universal property follows from the proved free algebra; Cartan and free-half injectivity are correctly deferred to the declared next proposition. Kleshchev Definition 1.3.1, p.13 compared.

Dependencies: prop-minimal-realizations-exist-and-are-unique-up-to-isomorphism, lem-free-lie-construction-for-finite-kac-moody-generators, def-kac-moody-root-lattice-height-and-positive-cone. Current authored text, manifest and contract read. Source: item Sources section and the exact locators noted above; recovered Kleshchev text `/tmp/tmp.Lbe2JSWVOC/klesh.txt`, author URL https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf. No repair or shared-plan amendment; no unresolved obligation for this item. Mechanical checks pending. Next: next owned obligation.

### Batch 11 — prop-contragredient-algebra-has-a-triangular-decomposition

Decision: accepted. Verified recursive tensor operators satisfy every defining relation for each lambda, including the E_i weight shift. Evaluation on 1 injects the free negative half and separates Cartan vectors by varying lambda; the signed involution preserves brackets and supplies the positive half. Jacobi makes the triangular span generator-stable; homogeneous presentation plus root independence separates weights. Kleshchev Theorem 1.3.3 entire proof pp.14-16 read. No Serre relation or finite-dimensional PBW is assumed.

Dependencies: def-contragredient-lie-algebra-before-the-maximal-ideal-quotient, lem-free-lie-construction-for-finite-kac-moody-generators. Current authored text, manifest and contract read. Source: item Sources section and the exact locators noted above; recovered Kleshchev text `/tmp/tmp.Lbe2JSWVOC/klesh.txt`, author URL https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf. No repair or shared-plan amendment; no unresolved obligation for this item. Mechanical checks pending. Next: next owned obligation.

### Batch 11 — lem-the-sum-of-triangularly-disjoint-graded-ideals-is-disjoint-from-h

Decision: accepted. Finite weight support can be separated by one Cartan element using a nonzero polynomial over C. Interpolation preserves ideals, so their algebraic sum has no zero component. Positive-degree minus alpha_i is positive, zero or mixed, never strictly negative; the zero component vanishes and mixed degrees are absent. This makes both halves ideals without Zorn. Kleshchev Lemma 1.3.2 and Theorem 1.3.3(v) compared in full.

Dependencies: prop-contragredient-algebra-has-a-triangular-decomposition. Current authored text, manifest and contract read. Source: item Sources section and the exact locators noted above; recovered Kleshchev text `/tmp/tmp.Lbe2JSWVOC/klesh.txt`, author URL https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf. No repair or shared-plan amendment; no unresolved obligation for this item. Mechanical checks pending. Next: next owned obligation.

### Batch 11 — def-kac-moody-algebra-associated-to-a-gcm

Decision: accepted. The proved unique largest Cartan-disjoint ideal defines the quotient; the Cartan and signed involution descend. An ideal disjoint from Cartan has Cartan-disjoint inverse image, so maximality kills it. This correctly avoids claiming simplicity in the singular case. Kleshchev Definition 1.4.1, p.16.

Dependencies: lem-the-sum-of-triangularly-disjoint-graded-ideals-is-disjoint-from-h. Current authored text, manifest and contract read. Source: item Sources section and the exact locators noted above; recovered Kleshchev text `/tmp/tmp.Lbe2JSWVOC/klesh.txt`, author URL https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf. No repair or shared-plan amendment; no unresolved obligation for this item. Mechanical checks pending. Next: next owned obligation.

### Batch 11 — prop-kac-moody-root-spaces-are-finite-dimensional

Decision: accepted. Quotient by the split homogeneous ideal preserves the triangular grading. Jacobi reduces length-m words to the n^m right-nested list; each root component inherits the bound. Independence forces pure-line lattice points to be integral multiples, and one-letter brackets of length >1 vanish. Simple generators survive because their bracket is nonzero h_i. Reflection positivity is asserted conditionally and follows from the unchanged other coordinates. Kleshchev Theorem 1.3.3(iv) and section 1.4.

Dependencies: def-kac-moody-algebra-associated-to-a-gcm, prop-contragredient-algebra-has-a-triangular-decomposition. Current authored text, manifest and contract read. Source: item Sources section and the exact locators noted above; recovered Kleshchev text `/tmp/tmp.Lbe2JSWVOC/klesh.txt`, author URL https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf. No repair or shared-plan amendment; no unresolved obligation for this item. Mechanical checks pending. Next: next owned obligation.

### Batch 11 — lem-kac-moody-opposite-simple-centralizer-vanishes

Decision: accepted. Distinct weight components remain distinct after subtracting alpha_i. For one component, its positive-adjoint span is homogeneous, Cartan-stable and stable under every f_i by the displayed Jacobi induction. It is a Cartan-disjoint ideal, so vanishes. Signed involution supplies the negative assertion. Perrin Lemma 4.2.8 pp.36-37 read at institutional PDF lines 1435-1449; hypotheses match the maximal-ideal quotient.

Dependencies: def-kac-moody-algebra-associated-to-a-gcm, prop-kac-moody-root-spaces-are-finite-dimensional. Current authored text, manifest and contract read. Source: item Sources section and the exact locators noted above; recovered Kleshchev text `/tmp/tmp.Lbe2JSWVOC/klesh.txt`, author URL https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf. No repair or shared-plan amendment; no unresolved obligation for this item. Mechanical checks pending. Next: next owned obligation.

### Batch 11 — lem-serre-elements-vanish-before-serre-generation

Decision: accepted. Checked [E,F^m]=mF^(m-1)(H-m+1) and evaluation on f_j at m=1-a_ij. Other e_k commute with F; for e_j the remaining F^m h_j is zero for m>=2, while m=1 uses a_ij=0 iff a_ji=0. The reviewed centralizer lemma applies and the involution supplies the other sign. Perrin Propositions 4.2.6-4.2.7 pp.35-37 compared; local coefficient a_ji is correct. No generation theorem is used.

Dependencies: lem-kac-moody-opposite-simple-centralizer-vanishes, prop-kac-moody-root-spaces-are-finite-dimensional. Current authored text, manifest and contract read. Source: item Sources section and the exact locators noted above; recovered Kleshchev text `/tmp/tmp.Lbe2JSWVOC/klesh.txt`, author URL https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf. No repair or shared-plan amendment; no unresolved obligation for this item. Mechanical checks pending. Next: next owned obligation.

### Batch 11 — def-simple-reflections-and-the-kac-moody-weyl-group

Decision: accepted. alpha_i(h_i)=2 proves involutivity, the integral formula s_i alpha_j=alpha_j-a_ij alpha_i preserves Q, and evaluating lambda(s_i h) verifies the dual action. No finite-W or Coxeter-presentation claim is assumed. Kleshchev section 3.2 source locator; formulas checked directly.

Dependencies: def-realization-of-a-generalized-cartan-matrix, def-kac-moody-root-lattice-height-and-positive-cone. Current authored text, manifest and contract read. Source: item Sources section and the exact locators noted above; recovered Kleshchev text `/tmp/tmp.Lbe2JSWVOC/klesh.txt`, author URL https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf. No repair or shared-plan amendment; no unresolved obligation for this item. Mechanical checks pending. Next: next owned obligation.

### Batch 11 — prop-the-weyl-group-preserves-roots-and-root-multiplicities

Decision: accepted. Generator nilpotence follows from Serre vanishing and explicit simple-triple brackets; the derivation binomial formula propagates to finite words and makes exponentials invertible bracket maps. Verified all three exponential expansions and T_i action on e_i,f_i,h_i and ker alpha_i. Transport gives bijections of root spaces independent of any uniqueness of a Weyl-word lift. The root-form expansion cancels using 2d_i even when degenerate. Kleshchev sections 3.1-3.2; every step computed locally.

Dependencies: def-simple-reflections-and-the-kac-moody-weyl-group, lem-serre-elements-vanish-before-serre-generation, prop-kac-moody-root-spaces-are-finite-dimensional. Current authored text, manifest and contract read. Source: item Sources section and the exact locators noted above; recovered Kleshchev text `/tmp/tmp.Lbe2JSWVOC/klesh.txt`, author URL https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf. No repair or shared-plan amendment; no unresolved obligation for this item. Mechanical checks pending. Next: next owned obligation.

### Batch 11 — thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra

Decision: accepted. Read full Kleshchev Lemma 2.2.1 and Theorem 2.2.3 pp.28-32. The local reciprocal normalization is correct, and minimality gives ker p inside the coroot span so the extended Cartan form is nondegenerate. Checked the four mixed-bracket Jacobi terms for expression independence: all intermediate pairings have absolute height <N. Invariance includes the N,-N,0 case; symmetry and bracket antisymmetry give its permutations. The graded radical's minimal absolute height and both centralizer clauses prove it is zero. Orthogonality, perfect finite root pairings, bracket identity and recursive uniqueness follow without Serre generation.

Dependencies: def-symmetrizable-generalized-cartan-matrix, prop-kac-moody-root-spaces-are-finite-dimensional, lem-kac-moody-opposite-simple-centralizer-vanishes. Current authored text, manifest and contract read. Source: item Sources section and the exact locators noted above; recovered Kleshchev text `/tmp/tmp.Lbe2JSWVOC/klesh.txt`, author URL https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf. No repair or shared-plan amendment; no unresolved obligation for this item. Mechanical checks pending. Next: next owned obligation.

### Batch 11 — def-kac-moody-category-o

Decision: accepted. Finite cone support bounds every positive coordinate above a fixed weight, giving a finite upper support and restrictedness. Finite Cartan interpolation gives submodule and quotient weight decompositions and preserves finite dimensions. The zero module and empty cone list are included; finite generation and finite length are explicitly not assumed. Kleshchev section 9.1 pp.116-118 read.

Dependencies: prop-kac-moody-root-spaces-are-finite-dimensional, def-kac-moody-root-lattice-height-and-positive-cone. Current authored text, manifest and contract read. Source: item Sources section and the exact locators noted above; recovered Kleshchev text `/tmp/tmp.Lbe2JSWVOC/klesh.txt`, author URL https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf. No repair or shared-plan amendment; no unresolved obligation for this item. Mechanical checks pending. Next: next owned obligation.

### Batch 11 — def-generalized-casimir-on-restricted-kac-moody-modules

Decision: accepted. The dual tensors are canonical identities on finite root spaces and Cartan. Restrictedness makes their action sum pointwise finite and linear; no infinite enveloping element is asserted. A finite extension of rho(h_i)=1 exists by coroot independence, and nu^-1(alpha_i)=d_i h_i gives (rho,alpha_i)=d_i. Kleshchev Definition 2.3.3 and equations 2.18-2.20 pp.33-34 read.

Dependencies: thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra, prop-kac-moody-root-spaces-are-finite-dimensional, def-universal-enveloping-algebra-as-a-tensor-quotient. Current authored text, manifest and contract read. Source: item Sources section and the exact locators noted above; recovered Kleshchev text `/tmp/tmp.Lbe2JSWVOC/klesh.txt`, author URL https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf. No repair or shared-plan amendment; no unresolved obligation for this item. Mechanical checks pending. Next: next owned obligation.

### Batch 11 — thm-generalized-kac-moody-casimir-is-central-and-scalar-on-highest-weight-modules

Decision: accepted. Read Kleshchev Lemma 2.3.1 and Theorem 2.3.5 pp.32-36. Pairing each tensor factor proves the identity with the displayed signs. Root-index cancellation leaves [S,e_i]=-t_i e_i and [S,f_i]=f_i t_i; missing/mixed roots give zero and pointwise restrictedness legitimizes shifted finite sums. Direct Cartan expansion gives e_i(2t_i+4d_i) and -2f_i t_i, cancelling those boundaries. Highest-vector evaluation gives the scalar and centrality propagates it. All signs and reciprocal d_i factors checked.

Dependencies: def-generalized-casimir-on-restricted-kac-moody-modules, thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra. Current authored text, manifest and contract read. Source: item Sources section and the exact locators noted above; recovered Kleshchev text `/tmp/tmp.Lbe2JSWVOC/klesh.txt`, author URL https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf. No repair or shared-plan amendment; no unresolved obligation for this item. Mechanical checks pending. Next: next owned obligation.

### Batch 11 — lem-bounded-above-kac-moody-weight-modules-are-generated-by-primitive-vectors

Decision: accepted. The smallest submodule killing positive actions is U(g)n+v; PBW removes the Cartan action as scalar on positive homogeneous words. Thus nonprimitivity is equivalent to the displayed membership in U(n-)U_0(n+)v. The finite upper-support cardinality strictly decreases at every higher weight and has a highest-weight base case. This proves negative generation without finite length or a chosen composition series. Kleshchev Lemma 9.1.3, p.118 read in full.

Dependencies: def-kac-moody-category-o, def-kac-moody-verma-module, lem-pbw-for-countably-presented-kac-moody-lie-algebras. Current authored text, manifest and contract read. Source: item Sources section and the exact locators noted above; recovered Kleshchev text `/tmp/tmp.Lbe2JSWVOC/klesh.txt`, author URL https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf. No repair or shared-plan amendment; no unresolved obligation for this item. Mechanical checks pending. Next: next owned obligation.

### Batch 11 — def-kac-moody-verma-module

Decision: repaired; repair_confidence: 1. The original Definition concluded that both M_A and Mtilde belong to category O, which is defined for g(A)-modules. In A2 the universal negative half is free: its nonzero Serre word acts by nonzero left multiplication on Mtilde, so that action does not descend. Corrected the sentence: only M_A belongs to O, while Mtilde has finite weight spaces and downward-cone support as a universal-algebra module. PBW freeness, top dimension one and highest-vector universal property are unchanged and verified. Source: Kleshchev section 9.1 pp.116-117 and Proposition 9.3.4 p.124 distinguish the two action algebras. Manifest strategy and contract boundary updated; no dependencies, IDs or scope changed. Reflow unchanged; precheck exits 0 with 0 proof-bearing items checked (definition).

Dependency IDs: def-kac-moody-category-o, lem-pbw-for-countably-presented-kac-moody-lie-algebras, def-universal-enveloping-algebra-as-a-tensor-quotient. No published defect or shared-plan/Phase-2 amendment. Defect p2c24-6b-e11-verma-action-category closed through append-only interface. Next: relation-module review.

### Batch 11 — lem-enveloping-quotient-kernels-and-augmentation-intersections

Decision: accepted. Read Kleshchev Lemmas 9.3.1-9.3.3 pp.122-124. Universal-property inverse maps give the quotient kernel. The local proof correctly replaces the source's ordered-length assertion by a left U(R)-module direct sum: RU_0(L)=U_0(R)^2 plus U_0(R) tensor nonempty complementary monomials. Abelianization is polynomial by countable PBW and separates degree one from the augmentation square there. Intersecting with R gives [R,R], without falsely excluding length-one commutators in nonabelian U(R). R=0 and R=L boundaries checked.

Dependencies: lem-pbw-for-countably-presented-kac-moody-lie-algebras, def-universal-enveloping-algebra-as-a-tensor-quotient. Current authored text, manifest and contract read. Source: item Sources section and the exact locators noted above; recovered Kleshchev text `/tmp/tmp.Lbe2JSWVOC/klesh.txt`, author URL https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf. No repair or shared-plan amendment; no unresolved obligation for this item. Mechanical checks pending. Next: next owned obligation.

### Batch 11 — lem-kac-moody-relation-module-embeds-in-verma-modules-and-obeys-the-casimir-constraint

Decision: accepted. Read complete Proposition 9.3.4 pp.124-125. T_0 is a universal-algebra submodule with highest last-letter generators; their PBW-free maps give the direct sum of Mtilde modules. Base change gives genuine g(A) Verma modules. The displayed balanced-tensor calculation proves equivariance; the two relation ideals commute as disjoint ideals. Associative last-letter coefficients and the reviewed augmentation intersection prove the kernel is exactly the self-commutator. Casimir scalar zero passes to subquotients; primitive weights obey the quadratic equation. The least-height argument lifts generation from abelianization. This consumer uses the corrected Verma definition correctly and does not assert Mtilde belongs to g(A) category O.

Dependencies: lem-enveloping-quotient-kernels-and-augmentation-intersections, lem-bounded-above-kac-moody-weight-modules-are-generated-by-primitive-vectors, thm-generalized-kac-moody-casimir-is-central-and-scalar-on-highest-weight-modules, prop-contragredient-algebra-has-a-triangular-decomposition, def-kac-moody-verma-module. Current authored text, manifest and contract read. Source: item Sources section and the exact locators noted above; recovered Kleshchev text `/tmp/tmp.Lbe2JSWVOC/klesh.txt`, author URL https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf. No repair or shared-plan amendment; no unresolved obligation for this item. Mechanical checks pending. Next: next owned obligation.

### Batch 11 — lem-the-serre-quotient-has-weyl-symmetry-and-no-residual-kac-moody-kernel

Decision: accepted. Read Kleshchev Theorem 9.3.5 pp.125-126 in full. The Serre ideal is inside r, preserving Cartan and excluding simple kernel degrees. Nilpotence and exponentials are constructed directly on the Serre quotient and commute with its map to g, so kernel symmetry is available before identifying quotients. A minimum positive kernel degree must survive among constrained generators; lower generators and all their adjoints map to zero. Reflection preserves positivity since the degree is not a pure simple multiple, and minimum height forces every coroot evaluation nonpositive. This contradicts the strictly positive Casimir constraint. The signed involution removes the negative kernel. No circular Serre use.

Dependencies: lem-kac-moody-relation-module-embeds-in-verma-modules-and-obeys-the-casimir-constraint, lem-serre-elements-vanish-before-serre-generation, def-simple-reflections-and-the-kac-moody-weyl-group, thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra. Current authored text, manifest and contract read. Source: item Sources section and the exact locators noted above; recovered Kleshchev text `/tmp/tmp.Lbe2JSWVOC/klesh.txt`, author URL https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf. No repair or shared-plan amendment; no unresolved obligation for this item. Mechanical checks pending. Next: next owned obligation.

### Batch 11 — thm-serre-presentation-of-a-kac-moody-algebra

Decision: accepted. Checked the rank-one commutator calculation on universal Serre generators, including exponent one and both signs. Jacobi propagates stability of the positive Serre half ideal under negative generators, so the whole generated ideal is the direct sum of half ideals. The reviewed residual-kernel lemma identifies it with r. Intersecting gives the two half presentations; compatible homogeneous PBW bases prove the stated enveloping tensor product. Symmetrizability and characteristic zero are explicit; n=1 has empty Serre families. Kleshchev Theorem 9.3.5 pp.125-126.

Dependencies: lem-the-serre-quotient-has-weyl-symmetry-and-no-residual-kac-moody-kernel, lem-pbw-for-countably-presented-kac-moody-lie-algebras. Current authored text, manifest and contract read. Source: item Sources section and the exact locators noted above; recovered Kleshchev text `/tmp/tmp.Lbe2JSWVOC/klesh.txt`, author URL https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf. No repair or shared-plan amendment; no unresolved obligation for this item. Mechanical checks pending. Next: next owned obligation.

### Batch 11 — def-real-and-imaginary-kac-moody-roots

Decision: accepted. Weyl invariance already proves W Pi consists of roots, so the definition partitions Delta and inherits its two signs while excluding zero. It makes no norm-based converse or symmetrizability assumption. Kleshchev sections 5.1 and 5.3 locators; verified directly from the reviewed dependency.

Dependencies: prop-the-weyl-group-preserves-roots-and-root-multiplicities. Current authored text, manifest and contract read. Source: item Sources section and the exact locators noted above; recovered Kleshchev text `/tmp/tmp.Lbe2JSWVOC/klesh.txt`, author URL https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf. No repair or shared-plan amendment; no unresolved obligation for this item. Mechanical checks pending. Next: next owned obligation.

### Batch 11 — prop-real-root-spaces-are-one-dimensional-sl2-roots

Decision: accepted. A finite product of root-transport automorphisms maps the simple triple to three independent nonzero weight vectors with exactly the sl2 brackets. Transport proves multiplicity one and excludes all scalar multiples except plus/minus alpha. The intrinsic nonzero bracket line and its unique alpha-evaluation 2 make the coroot independent of both Weyl word and originating simple root. No form or finite-root-system theory is required.

Dependencies: def-real-and-imaginary-kac-moody-roots, prop-the-weyl-group-preserves-roots-and-root-multiplicities, prop-kac-moody-root-spaces-are-finite-dimensional. Current authored text, manifest and contract read. Source: item Sources section and the exact locators noted above; recovered Kleshchev text `/tmp/tmp.Lbe2JSWVOC/klesh.txt`, author URL https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf. No repair or shared-plan amendment; no unresolved obligation for this item. Mechanical checks pending. Next: next owned obligation.

### Batch 11 — lem-strict-linear-alternative-for-gcm-trichotomy

Decision: accepted. Read Kleshchev Lemma 4.1.4 and Proposition 4.1.5 pp.51-52 and the current published extreme-value supplier. Local proof minimizes a continuous polynomial on the nonempty closed bounded coefficient simplex in R^m with m>=1, so every supplier hypothesis holds. The nonnegative-relation hypothesis excludes zero, and the segment expansion proves strict separation. Pairing proves necessity; rows of -C plus identity give the exact transpose alternative. Empty dimensions, singleton simplex and dependent rows checked. No compact-image assumption or choice added.

Dependencies: thm-euclidean-heine-borel-pseudocompactness-and-extreme-values. Current authored text, manifest and contract read. Source: item Sources section and the exact locators noted above; recovered Kleshchev text `/tmp/tmp.Lbe2JSWVOC/klesh.txt`, author URL https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf. No repair or shared-plan amendment; no unresolved obligation for this item. Mechanical checks pending. Next: next owned obligation.

### Batch 11 — thm-finite-affine-indefinite-trichotomy-for-indecomposable-gcms

Decision: accepted. Read Kleshchev 4.1.4-4.1.13 and 4.2.2-4.2.3, pp.51-60. Checked zero-coordinate propagation, the segment-to-boundary cone argument, invertibility and A^-1 times 1 in the finite branch. Contraposition of the strict alternative gives the transpose branch with equal rank and then the indefinite branch; no circular transpose assumption. Connected proper affine principal submatrices have a nonzero nonnegative image and hence finite type. A shortest cycle has no chord; the sum of rescaled edge pairs forces integer products 1, so the cycle is symmetric affine and cannot be proper. Trees have a path-defined positive symmetrizer. Direct expansion of the displayed sum of squares gives positivity, null-line kernel or mixed signs; exhaustiveness gives every converse. Rank-one and singular boundaries checked without spectral theory.

Dependencies: def-generalized-cartan-matrix, def-symmetrizable-generalized-cartan-matrix, lem-strict-linear-alternative-for-gcm-trichotomy. Current authored text, manifest and contract read. Source: item Sources section and the exact locators noted above; recovered Kleshchev text `/tmp/tmp.Lbe2JSWVOC/klesh.txt`, author URL https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf. No repair or shared-plan amendment; no unresolved obligation for this item. Mechanical checks pending. Next: next owned obligation.

### Batch 11 — lem-finite-type-kac-moody-roots-descend-to-simple-roots

Decision: accepted. Compared Kleshchev Proposition 4.3.2 pp.63-64 with the complete local replacement proof. Positive definite root norm yields a positive integral coroot evaluation; a nonsimple root has another positive coordinate, so reflection remains positive and lowers height. Negative signs reduce using simple reflection. Weyl form invariance bounds all root norms by max 2d_i. The explicitly derived Cauchy-Schwarz inequality in the finite dual basis bounds each integer coordinate, proving finiteness without a compact-group assertion. Blockwise positivity, multiplicity one and Cartan dimension n give the final dimension formula.

Dependencies: thm-finite-affine-indefinite-trichotomy-for-indecomposable-gcms, thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra, prop-the-weyl-group-preserves-roots-and-root-multiplicities, prop-kac-moody-root-spaces-are-finite-dimensional, prop-real-root-spaces-are-one-dimensional-sl2-roots. Current authored text, manifest and contract read. Source: item Sources section and the exact locators noted above; recovered Kleshchev text `/tmp/tmp.Lbe2JSWVOC/klesh.txt`, author URL https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf. No repair or shared-plan amendment; no unresolved obligation for this item. Mechanical checks pending. Next: next owned obligation.

### Batch 11 — lem-nonsingular-indecomposable-kac-moody-algebras-are-simple

Decision: accepted. Nonzero ideal meets Cartan by the actual quotient definition. Nonsingularity makes the simple roots a dual-space basis, so some bracket extracts e_i and then h_i,f_i. Nonzero matrix entries propagate these generators along the connected finite support graph, and the h_i span all Cartan. Every generator is in the ideal; the nonzero simple bracket establishes nonabelianity. This proves the stated one-way implication even without symmetrizability and handles singleton graphs. Kleshchev Proposition 1.4.8(i) source locator; each inference verified locally.

Dependencies: def-kac-moody-algebra-associated-to-a-gcm, prop-kac-moody-root-spaces-are-finite-dimensional, prop-minimal-realizations-exist-and-are-unique-up-to-isomorphism, def-generalized-cartan-matrix. Current authored text, manifest and contract read. Source: item Sources section and the exact locators noted above; recovered Kleshchev text `/tmp/tmp.Lbe2JSWVOC/klesh.txt`, author URL https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf. No repair or shared-plan amendment; no unresolved obligation for this item. Mechanical checks pending. Next: next owned obligation.

### Batch 11 — prop-finite-type-kac-moody-algebras-recover-the-dg-semisimple-algebras

Decision: accepted. The current statement is the already established intrinsic finite-type claim, not an assumed external classification model. Local trichotomy, root descent and simplicity supply every premise. For distinct blocks, exponent-one Serre, mixed and Cartan relations make all generator brackets zero; Jacobi extends commutation. Both presentation maps to and from the component direct sum fix generators, proving an isomorphism rather than only a quotient. Each component is finite-dimensional nonabelian simple, and the root/coroot row convention is preserved. No missing external Dynkin existence result is consumed.

Dependencies: thm-serre-presentation-of-a-kac-moody-algebra, thm-finite-affine-indefinite-trichotomy-for-indecomposable-gcms, lem-finite-type-kac-moody-roots-descend-to-simple-roots, lem-nonsingular-indecomposable-kac-moody-algebras-are-simple. Current authored text, manifest and contract read. Source: item Sources section and the exact locators noted above; recovered Kleshchev text `/tmp/tmp.Lbe2JSWVOC/klesh.txt`, author URL https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf. No repair or shared-plan amendment; no unresolved obligation for this item. Mechanical checks pending. Next: next owned obligation.

### Batch 11 — ex-rank-one-gcm-recovers-sl2

Decision: accepted. Empty off-diagonal Serre family leaves the three simple brackets, whose generator span is closed and bounds dimension by three. Explicit E12,E21,diag(1,-1) satisfy all brackets and independently span traceless 2x2 matrices, proving injectivity as well as surjectivity. All six displayed products checked. Kleshchev Example 1.5.2 pp.20-21 supplies the model family; this rank-one computation is complete.

Dependencies: thm-serre-presentation-of-a-kac-moody-algebra. Current authored text, manifest and contract read. Source: item Sources section and the exact locators noted above; recovered Kleshchev text `/tmp/tmp.Lbe2JSWVOC/klesh.txt`, author URL https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf. No repair or shared-plan amendment; no unresolved obligation for this item. Mechanical checks pending. Next: next owned obligation.

### Batch 11 — ex-the-a2-serre-relations

Decision: accepted. Positive Serre relations centralize z=[e1,e2], bounding each half by three dimensions; det A=3 gives a two-dimensional Cartan. Matrix-unit brackets verify all positive, negative, mixed and Cartan relations with coroot-indexed rows. The eight independent traceless matrices exhaust the target and the dimension bound proves isomorphism. The diagonal action gives exactly the six stated roots, all with multiplicity one. Kleshchev Example 1.5.2 source comparison and direct matrix calculation.

Dependencies: thm-serre-presentation-of-a-kac-moody-algebra. Current authored text, manifest and contract read. Source: item Sources section and the exact locators noted above; recovered Kleshchev text `/tmp/tmp.Lbe2JSWVOC/klesh.txt`, author URL https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf. No repair or shared-plan amendment; no unresolved obligation for this item. Mechanical checks pending. Next: next owned obligation.

### Batch 11 — ex-the-affine-a1-gcm-has-singular-rank-one-realization-data

Decision: accepted. The displayed matrix has opposite nonzero rows and rank one, so the reviewed dimension theorem requires Cartan dimension three. Evaluation on d and then h0 proves root independence; all four row evaluations match A. h0+h1 is a nonzero common annihilator and alpha0+alpha1 evaluates to 1 on d, so dropping d destroys root independence. Kleshchev Example 1.5.4 pp.23-24 data compared.

Dependencies: prop-minimal-realizations-exist-and-are-unique-up-to-isomorphism. Current authored text, manifest and contract read. Source: item Sources section and the exact locators noted above; recovered Kleshchev text `/tmp/tmp.Lbe2JSWVOC/klesh.txt`, author URL https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf. No repair or shared-plan amendment; no unresolved obligation for this item. Mechanical checks pending. Next: next owned obligation.

### Batch 11 — ex-a-symmetrizable-indefinite-rank-two-gcm

Decision: accepted. A times (1,1) is strictly negative and the support graph is connected, so the reviewed trichotomy applies. Positive Serre generators have degrees (4,1),(1,4); their ideal has no height-two component. The free tensor commutator of distinct letters is nonzero, so the root survives. Its norm is -2, while the directly checked reflection formula preserves the simple norm 2; hence the root is imaginary. No unsupported norm characterization converse is used.

Dependencies: thm-serre-presentation-of-a-kac-moody-algebra, thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra, def-real-and-imaginary-kac-moody-roots, thm-finite-affine-indefinite-trichotomy-for-indecomposable-gcms. Current authored text, manifest and contract read. Source: item Sources section and the exact locators noted above; recovered Kleshchev text `/tmp/tmp.Lbe2JSWVOC/klesh.txt`, author URL https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf. No repair or shared-plan amendment; no unresolved obligation for this item. Mechanical checks pending. Next: next owned obligation.

### Batch 11 — cex-a-matrix-with-one-zero-off-diagonal-is-not-a-gcm

Decision: accepted. The explicit integer matrix has diagonal 2 and off-diagonal 0,-1, satisfying every proposed weaker hypothesis. The pair a12=0, a21=-1 violates exactly symmetric zero support, proving the refutation. Generated counterexample provenance agrees with the local computation; no external existence or dependency use of this counterexample is needed.

Dependencies: def-generalized-cartan-matrix. Current authored text, manifest and contract read. Source: item Sources section and the exact locators noted above; recovered Kleshchev text `/tmp/tmp.Lbe2JSWVOC/klesh.txt`, author URL https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf. No repair or shared-plan amendment; no unresolved obligation for this item. Mechanical checks pending. Next: next owned obligation.

### Batch 11 — cex-imaginary-root-spaces-need-not-have-multiplicity-one

Decision: accepted. Read Kleshchev Proposition 1.5.1 and Lemma 1.5.3 pp.20,22-23 and affine sl2 model pp.23-25; checked the authored sl3 adaptation directly. Cyclic trace makes the central Jacobi coefficient 2(m+n+k) vanish on its support; d is a derivation. The independent three coroots/roots have rank-two A and minimal Cartan dimension four. All nine mixed simple brackets, six signed pair brackets and repeated Serre zeros agree with matrix multiplication. Degree-zero sl3 and the two degree-one loop halves generate every Laurent degree by perfectness. The presentation map is onto and Cartan-injective, so the actual maximal-ideal property kills its kernel; the additional direct recognition argument also works via opposite matrix units and the nondegenerate 2x2 diagonal trace matrix. Weight enumeration gives exactly two dimensions at every nonzero m delta; null norm excludes the norm-2 Weyl orbit. The m=0 space is correctly reserved for Cartan. No later affine-algebra theorem or unproved model recognition is assumed.

Dependencies: thm-serre-presentation-of-a-kac-moody-algebra, def-real-and-imaginary-kac-moody-roots, thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra. Current authored text, manifest and contract read. Source: item Sources section and the exact locators noted above; recovered Kleshchev text `/tmp/tmp.Lbe2JSWVOC/klesh.txt`, author URL https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf. No repair or shared-plan amendment; no unresolved obligation for this item. Mechanical checks pending. Next: next owned obligation.

### Batch 11 — kac-moody-algebras-from-generalized-cartan-matrices

Decision: accepted. Read the full A-page prose, all 33 listed items and the owning manifest page record. The introduction accurately orders universal construction, Serre vanishing, Weyl symmetry, invariant form, restricted Casimir, relation module and symmetrizable Serre generation. Scalar, row, symmetrizer and singular Cartan conventions agree with the proofs. Finite-type semisimplicity is the locally proved intrinsic claim. Supplier order is correct with explicit realization/triangular well-definedness justifications. No additional unproved page claim or content edit is needed.

Source evidence and dependency IDs are recorded in the per-item sections above and the unchanged page order. Local checks: complete item/contract coverage, strict contracts, citation fidelity and required risk review pass. No new supplier, amendment or unresolved page obligation. Next: engine-owned join.

### Batch 11 — kac-moody-algebras-from-generalized-cartan-matrices-examples

Decision: accepted. Read full B-page prose, all six examples and the owning manifest record. The summary accurately describes rank one, six A2 roots, the singular realization, the negative-norm witness, asymmetric zero support and the directly proved affine sl3 multiplicity-two model. The examples use reviewed A suppliers and introduce no dependency on a later affine page. No page repair is needed.

Source evidence and dependency IDs are recorded in the per-item sections above and the unchanged page order. Local checks: complete item/contract coverage, strict contracts, citation fidelity and required risk review pass. No new supplier, amendment or unresolved page obligation. Next: engine-owned join.

### Batch 11 — completed review and serial-lead handoff

Dispatch `6b-e-11`, run `phase-2-catchup-24`, covers only batch 11. The 39 authored items and two pages each have exactly one `authored:11:<id>` decision in `research/phase-2-catchup-24-alpha-e-6b-decisions.json`: 38 accepted items, one repaired item, two accepted pages, no escalations. All 63 pre-existing other-batch decisions and the earlier batch-10 report sections were preserved. This section supersedes the per-item “checks pending” and “next item” checkpoint text above. These are local 6B findings, not independent review, publication certification, or 6C/6D closure.

The sole repair is `def-kac-moody-verma-module`, Definition, category-membership sentence. Category O was defined for g(A)-modules, while the unquotiented Mtilde is a module for the universal contragredient algebra. In A2 its free negative action does not kill the nonzero Serre word, so descent cannot be inferred. The repaired sentence puts M_A in category O and states the analogous finite weight spaces and downward-cone support for Mtilde as a universal-algebra module. The full intended induced-module construction, PBW freeness and universal property remain proved. This distinction is also explicit in Kleshchev Proposition 9.3.4, printed p.124. The downstream relation-module lemma was read after the repair: it applies category O only to the genuine g(A) Verma direct sum after base change, so needs no edit. Defect `p2c24-6b-e11-verma-action-category` is fixed through the append-only interface and uniquely owned by this authored decision; `repair_confidence: 1` records the justified local repair.

Owned carrier changes: item definition text; the matching strategy in `research/phase-2-catchup-24-batch-11.pages.json`; the matching degeneracy boundary in `research/phase-2-catchup-24-batch-11.proof-contracts.json`; item-specific complete risk reviews in that contract; this group report and merged decisions; the interface-managed defect ledger/view. Stable IDs, all dependencies, provenance, page ordering and statements of the substantive theorems are preserved. No local suppliers were added. Required shared-plan and Phase-2 amendments: none. The serial lead should retain the current manifest's intrinsic finite-type theorem and its existing local suppliers, and the corrected action-algebra qualification for Mtilde; no external finite-Dynkin model or new pair is required by the authored proofs. No AC is used or added: finite choices and elimination, canonical homogeneous bases, specified first-word procedures and least integer heights suffice.

Source evidence: searched the web for Kleshchev's lecture notes and opened the institutional Perrin PDF at https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf. Perrin pp.35–37, Propositions 4.2.6–4.2.7 and Lemma 4.2.8 were read through the Serre and centralizer arguments (PDF extracted lines 1359–1459). Kleshchev's complete previously recovered text at `/tmp/tmp.Lbe2JSWVOC/klesh.txt`, corresponding to https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf, was reused in bounded sections. Read the relevant complete arguments in §1.2 and Theorem 1.3.3 (pp.10–16), Proposition 1.4.8(i) and Proposition 1.5.1 (pp.19–20), loop cocycle/model Lemma 1.5.3 and Example 1.5.4 (pp.22–25), Lemma 2.2.1 and Theorem 2.2.3 (pp.28–32), Lemma 2.3.1 through Corollary 2.3.6 (pp.32–36), strict alternative and trichotomy 4.1.4–4.1.13 (pp.51–57), cycle/symmetrization 4.2.2–4.2.3 (pp.58–60), Proposition 4.3.2 (pp.63–64), category O and primitive generation §9.1 (pp.116–118), and all of §9.3 (pp.122–126). Local PBW confluence, reciprocal symmetrizer factors, both Casimir boundary signs, associative relation coefficients, finite root-coordinate bounds, and the sl3 loop adaptation were checked from their actual authored calculations. No fresh remote-fetch or reading stamp was created; source reuse is not represented as fresh retrieval. Source typographical defects were not imported into the proofs. No unresolved source or understanding blocker remains for the assigned claims.

Frontier: followed `briefs/tasks/frontier-dependency-ledger.md`; batch 11's input remains the valid empty array in `research/phase-2-catchup-24-batch-11.cross-batch-dependencies.json`. Read-only collection across current manifests and carriers finds zero owned declared edges and zero owned orphan reviews, with batch 11 reviewed. A separate scan of every owned body link against all other current batch manifests finds zero implicit linked cross-batch suppliers. The only external owned-body item links are the published tensor-quotient definition and Euclidean extreme-value theorem. No changing-frontier edge was found and no dependency/input mutation requires a refresh.

Published interfaces: read `def-universal-enveloping-algebra-as-a-tensor-quotient` in full; it applies to arbitrary complex Lie algebras and gives exactly the relations needed here. Read `thm-euclidean-heine-borel-pseudocompactness-and-extreme-values` in full and the relevant closed-bounded-to-compact and extreme-value arguments in `thm-heine-borel-rn`, `thm-compactness-under-continuous-maps` and `thm-compactness-agrees-with-metric-compactness`. The coefficient simplex is explicitly nonempty, closed and bounded in R^m with m>=1; its squared-norm function is continuous. This use needs no general compactness-from-total-boundedness choice principle or pseudocompactness converse. No defective published item was found in these interfaces and used clauses; published files remain read-only. There is therefore no new canonical published-ledger finding or classification-index mutation. This is a bounded dependency review, not an exhaustive published closure audit, and it does not close older published consumer debt.

Local validation:
- Reflow of `items/def-kac-moody-verma-module.md`: unchanged canonical paragraph format. Its explicit precheck exits 0, reporting **0 checked, 0 failing**, because this is a definition rather than a numbered proof-bearing item; this is not reported as a checked proof.
- Strict proof-contract check: **39/39 items, 0 errors, 0 warnings**. The initially attempted extra boundary label was rejected by the closed schema; its evidence was merged into the existing degeneracy boundary and the check rerun successfully.
- Citation fidelity: **68 citations over 39 items**, every recorded quote found; no widening candidates. All actual fact uses were compared against the relevant supplier statements, including the nonempty Euclidean hypothesis.
- Required risk check: `node tools/risk-report.mjs research/phase-2-catchup-24-batch-11.proof-contracts.json --require-reviewed` reports **0 errors, 39 items** (7 CRITICAL, 15 HIGH, 10 MODERATE, 7 ORDINARY). Reviews contain specific mathematical evidence from the same item read.
- All contract derivation claim strings match their current numbered authored steps. Scope/manifest contains exactly 39 owned items; decisions cover exactly those plus two pages, with no duplicate obligations and all 63 other decisions preserved.
- Frontier collection and complete owned body-link scan: no owned cross-batch edge or orphan review.

Blockers: none for this dispatch. No new workflow defect was identified; local invalid input labels were corrected rather than attributed to the tools. No published content, unassigned batch content, shared plan, engine state, schedule, or verification stamp was edited. Next action belongs to the engine: full join and the unchanged 6C/6D protocols.
