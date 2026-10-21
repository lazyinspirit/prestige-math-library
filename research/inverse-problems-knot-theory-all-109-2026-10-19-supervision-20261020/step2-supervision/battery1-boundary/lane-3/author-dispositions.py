import json
from pathlib import Path
B=Path(__file__).parent
x=json.loads((B/'input.json').read_text())
ids=list(dict.fromkeys(r['id'] for r in x['rows']))
notes={}
def put(i,extent,logic,cases):
 notes[i]={'extent':extent,'logic':logic,'cases':cases}
# A leading ! means genuinely outside the asserted domain, rather than a checked included boundary.
put(0,'Definition, Input and procedure steps 1–5','The page gives a finite coefficient-extraction procedure, not a characterization of links by Milnor data.',{
'empty':'Steps 2–5 allow an empty underpass product (value 1), an empty degree-correction loop when N=2, and an empty proper-subsequence gcd (defined as 0); these are not invalid inputs.',
'zero':'Step 5 sets the gcd of the empty lower-coefficient list to zero; the returned coefficient then has zero indeterminacy. Step 3 corrects closed self-writhe to the zero-self-meridian longitude.',
'one':'N=1 is excluded by N>=2, but a single component is not excluded; repeated component indices are retained in the truncated noncommutative ring.',
'degenerate':'Step 1 inserts a supported curl if a closed component has no underpoint and transports every recorded word; crossingless components are handled rather than discarded.',
'endpoints':'String-link step 4 retains both endpoint transports H0,H1. Closed traversal omits the final return relation in step 2, while the string-link traversal includes the entire bottom-to-top strand.',
'nonempty-choice':'The based paths, roots and finite certificates are supplied input under the stated AC convention; every later expansion and truncation uses finitely many word operations.'})
put(1,'Statement; Facts A1–A2/F1–F2; Proof 1.1–2.1','This is a sufficient obstruction to smooth sliceness under universal normal generation, not a necessary-and-sufficient sliceness test.',{
'empty':'!K is a knot and W is compact connected with specified boundary; the proof supposes an actual slice disk, not an empty spanning object.',
'zero':'!At n=0 the zero lattice embeds in Z^0, so the nonembedding hypothesis cannot hold. The conclusion excludes genus zero only; it does not bound positive slice genus.',
'one':'For rank one, the same full-rank embedding contradiction in 1.1–2.1 applies whenever the given positive rank-one form fails to embed; no rank>=2 hypothesis is used.',
'degenerate':'!Positive definiteness and the rational-homology-sphere boundary exclude a degenerate intersection lattice. No semidefinite variant is claimed.',
'endpoints':'Proof 1.1 applies the normal-generation hypothesis to the actual hypothetical disk exterior and glues along the specified double-cover boundary before Donaldson is used.',
'nonempty-choice':'Full AC is explicit; the assumed universal normal-generation condition supplies the gluing premise for every possible slice disk, rather than selecting a favorable disk.'})
put(2,'Definition of cyclic zero-surgery cover','This definition specifies a surgery and its cyclic cover, not an equivalence criterion.',{
'empty':'!A smooth oriented knot, its surgery, and a connected cover are required; no empty link or empty cover is defined.',
'zero':'Zero surgery is the specified preferred-longitude filling, not an excluded limiting framing. Its cyclic quotient sends the positive meridian to 1.',
'one':'!The definition requires q>=2, so the degree-one identity cover is outside this named object.',
'degenerate':'!Only the stated finite connected cyclic cover of the smooth zero-surgery manifold is defined; disconnected covers or arbitrary singular fillings are not inputs.',
'endpoints':'The preferred-longitude filling and the meridian-direction lift fix the peripheral data; these are closed manifolds, with no interval endpoint parameter.',
'nonempty-choice':'AC is explicitly assumed by the definition; the knot and cyclic classifying homomorphism are supplied and no further arbitrary covering map is selected.'})
put(3,'Definition including t intervals; Facts F1–F4; Proof 1.1, 2.1, 3.1','The page defines the grading maximum and its symmetric extension; it does not characterize knot equivalence by Upsilon.',{
'empty':'The coefficient ring expressly permits empty support for its zero series. Proof 2.1 uses the grid-comparison free tower to ensure the non-torsion grading set for the maximum is nonempty.',
'zero':'At t=0 the exponent calculation in 1.1 is 2k>=0. The value at t=2 is defined using 2-t=0; the zero coefficient series is also explicitly admitted.',
'one':'t=1 belongs to the directly defined interval 0<=t<=1; the expression 2-t gives the same parameter at that joining point. No unsupported size-one grid is needed.',
'degenerate':'The input is a knot grid and its finite basis, not a degenerate grid diagram. The absence of non-torsion classes is excluded by the comparison free tower in 2.1.',
'endpoints':'Proof 1.1 verifies the differential exponents throughout 0<=t<=2; Definition assigns t=0,1 directly and t=2 by symmetry. The old citation to 1.2 is stale: no such step exists.',
'nonempty-choice':'Proof 2.1, not nonexistent 1.2, supplies finite homogeneous splitting and the actual free tower ensuring a maximum; the finite grid basis is given.'})
put(4,'Definition, Facts F1–F4, Proof 0.1–0.3 and 1.1–1.3','The page defines a representative decorated Floer map. Independence is separately stated and is not a biconditional classifying cobordisms.',{
'empty':'Proof 1.2 treats empty incoming or outgoing ends by puncturing and the imported 0/4-handle construction, not an undefined empty-link diagram. An empty triangle index contributes the zero map.',
'zero':'The triangle formula selects Maslov index zero; zero basepoint multiplicities give coefficient 1 and an empty moduli count gives coefficient 0. The fixed Spin-c label is not replaced by an arbitrary sum.',
'one':'The displayed formula is the doubly pointed n=1 case; intermediate multipointed links and a finite multi-term top-generator cycle are expressly allowed and handled by linearity.',
'degenerate':'Admissible diagram and regular almost-complex data are required. Closed dividing curves are expressly allowed by 1.1, so they must not be dismissed as excluded degeneracies.',
'endpoints':'The parametrized boundary objects, basepoints and restrictions of the chosen Spin-c structure are retained; the empty-end extension is precisely the scoped external input in 1.2.',
'nonempty-choice':'Proof 0.1–0.3 inventories finite Morse data and countably indexed regularity/representative choices under countable choice. It does not select data simultaneously over all cobordisms.'})
put(5,'Definition, Facts F1, Proof 1.1–1.2','The two diagrams name separate isotopy classes; no equality or equivalence between the Conway knot and its partner is asserted here.',{
'empty':'!Both C and K_P are specified knot diagrams, hence nonempty embedded circles; an empty diagram would not name either object.',
'zero':'!There is no numerical input to set to zero: C and K_P are fixed by the two referenced figures, not by vanishing invariants.',
'one':'!No parameter counts components or operations: each of the two named objects is a knot, and the definition asserts no one-step theorem.',
'degenerate':'!Proof 1.1 identifies the named knots by their actual diagrams; a degenerate projection or a replacement with equal polynomial data is not licensed.',
'endpoints':'!The diagrams represent closed knots, not tangles with free endpoints or a parameter interval.',
'nonempty-choice':'Proof 1.2 allows either of the two orientations of each already fixed knot; this finite auxiliary orientation choice does not establish any relation between the two knot types.'})
put(6,'Definition of meridian-coordinate linking number','The equation [J]=a[mu_K] defines the integer coordinate; it does not assert that zero linking is equivalent to splitting.',{
'empty':'!K and J must each be an oriented embedded circle; neither the empty knot nor an empty pair belongs to the definition.',
'zero':'The integer a=0 is allowed exactly when [J]=0 in H1(E_K); no inference of geometric splitting is made.',
'one':'The coordinate a=1 is allowed by the positive meridian generator convention; no multiple-component or nonunit restriction is imposed.',
'degenerate':'!K and J must be disjoint and the chosen closed product tube must miss J, so intersection or a nonembedded component is excluded.',
'endpoints':'Both curves are closed, while the tube boundary is a torus; no relative endpoint equality is claimed. J must lie in the specified exterior.',
'nonempty-choice':'A particular product tube is supplied data. Uniqueness of the integer follows from H1(E_K)=Z[mu_K], not a choice of representatives for infinitely many homology classes.'})
put(7,'Example, Facts F1, Proof 1.1–1.2','The example verifies the E8 nonembedding premise only; it neither characterizes slice knots nor supplies the universal normal-generation premise.',{
'empty':'!The assumed W is a connected filling of the actual knot double cover and has rank-eight lattice; an empty filling is not allowed.',
'zero':'!Rank zero and zero determinant are excluded by Q_W isometric to positive definite unimodular E8; nonsliceness itself is not asserted without additional hypotheses.',
'one':'The determinant-one lattice property in F1 is included, while a rank-one lattice is not: E8 has rank eight. The transport argument uses its supplied isometry.',
'degenerate':'!An E8 lattice is positive definite and nonsingular; no degenerate lattice is used in the isometry/nonembedding contradiction.',
'endpoints':'The boundary is the specified branched cover; Proof 1.1 transports only its filling lattice and does not assert a disk-exterior gluing.',
'nonempty-choice':'W and an E8 isometry are hypotheses for this particular knot; 1.1 composes a hypothetical embedding with that isometry, without selecting fillings for all knots.'})
put(8,'Statement; Proof preliminary lower-bound case and 1.1–5.1','The implication is trivial-coefficient homology vanishing to L2 dimension zero, not a converse or algebraic homology vanishing theorem.',{
'empty':'The preliminary proof handles n below the lower chain bound by zero groups. Step 1.1 permits an empty spanning list when the augmented kernel is zero.',
'zero':'Zero finite-free ranks and zero homology are included; trace faithfulness in 4.1 annihilates the Hilbert kernel, but 5.1 concludes only dimension-zero quotient homology.',
'one':'For one nonzero finite-free term or rank one, the same finite matrices and D(R) injectivity test apply; no rank>=2 condition occurs in 1.1–4.1.',
'degenerate':'Vanishing ranks are harmless; the given homology exactness produces the contracting maps in 2.1 even with zero kernels or images. Nonamenable groups are not covered.',
'endpoints':'Degree n is explicitly treated in 1.1 by adding a finite free term above n and a surjection onto original top-degree homology; the lower bound l is treated before that step.',
'nonempty-choice':'AC is retained in A1/F2/F3. Steps 1.1–2.1 choose only finitely many spanning tensors and finite-dimensional complements after the bounded truncation.'})
put(9,'Statement, Facts F1–F3, Proof 1.1–3.1','The assertion identifies a nonsingular twisted form after acyclic boundary contraction; it is not an iff characterization of bordism data.',{
'empty':'A zero middle twisted homology space is allowed and its pairing is nonsingular. A boundary chain complex may have zero chain groups, for which the contraction in 3.1 is the zero map.',
'zero':'Proof 2.1 uses vanishing of every twisted boundary group to identify absolute and relative H2; the zero-dimensional form is included, without claiming the ordinary uncapped form has zero radical.',
'one':'The rank-one character localization in 1.1 is included; it does not mean a degree-one finite cover, since G has an infinite cyclic factor.',
'degenerate':'Ordinary H2 may carry a radical and uses its separate quotient in 3.1. Twisted nonsingularity follows from boundary acyclicity, not an unjustified ordinary geometric cap.',
'endpoints':'The actual zero-surgery boundary components are those of F1; 3.1 contracts their acyclic local chain complexes, preserving the middle module and pairing.',
'nonempty-choice':'AC is declared; 3.1 chooses complements only in the finite-dimensional boundary complex to construct its contraction. No finite-sheeted G-cover is assumed.'})
put(10,'Statement; Proof 1.1–7.1 (finite diagram/braid and pairing construction)','The assertion constructs a Seifert matrix for the fixed Conway diagram; it does not characterize a knot by that matrix.',{
'empty':'!The actual transcription has eleven crossings and its Seifert surface has four disks and eleven bands; its rank-eight basis is not empty.',
'zero':'Zeros of V are genuine computed entries: 4.1 separates disjoint/nested interval cycles and 5.1 lists the entire pairing table before the basis change.',
'one':'Determinant-one changes P and P-prime in 6.1–7.1 are the relevant unit cases, ensuring both orientation choices give an integral basis with the displayed V.',
'degenerate':'!The specified diagram has a connected one-boundary genus-four surface by 3.1; no collapsed braid or singular surface is admitted.',
'endpoints':'Step 2.1 closes the four-strand braid without added crossings and explicitly relabels its arc ends to the Conway ribbon diagram; 7.1 handles the opposite knot orientation.',
'nonempty-choice':'AC is retained in A1. The proof supplies actual eight cycles and explicit unimodular matrices, rather than choosing a basis from an unspecified infinite family.'})
put(11,'Statement, Facts, Proof 1.1–8.1','Vertical-or-horizontal is an alternative for a given essential surface, not an iff test for essentiality of arbitrary fiber surfaces.',{
'empty':'The exceptional-fiber list may be empty: 2.1 then selects one regular fiber. In 8.1 the exceptional correction sum is empty and chi(F)=n chi(B); F itself is never empty.',
'zero':'For annuli and tori chi(F)=0 is included in 8.1. Horizontal sheet number is positive; division by n=0 is not permitted.',
'one':'A one-sheet horizontal cover is included; 8.1 counts n/q_i preimages and automatically restricts which exceptional multiplicities can occur.',
'degenerate':'The Statement distinguishes neat input (smooth ambient isotopy) from broader boundary-preimage input (embedding isotopy and topological ambient extension), with essentiality retained by F9.',
'endpoints':'Proof 1.1 protects original boundary during neatification; 7.1 regluing fixes smaller common collars and uses stationary time changes, preserving smooth parameter endpoints.',
'nonempty-choice':'Full AC is explicit. The normal form uses finite base cuts and lexicographic integer minima in 3.1, while the finite transversality and compact-source isotopy suppliers retain their hypotheses.'})
put(12,'Statement; Proof 1.1–1.3','The page proves graded invariance and existence of a least tower grading, not a converse recognition of three-manifolds from d.',{
'empty':'Y is nonempty connected; the homogeneous image lattice L cannot be empty or zero because its localization is the single infinity tower (1.1).',
'zero':'The standard genus-zero S3 diagram is explicitly computed in 1.3: a=1 and degree rho=0, yielding d(S3)=0.',
'one':'The infinity group is a single Laurent tower; 1.1 shows its nonzero graded image is U^a F2[U]rho, not several unrelated towers.',
'degenerate':'The quotient tower has torsion elements, but every one is divisible by every U power; 1.2 explicitly distinguishes these facts rather than inferring non-torsion elements.',
'endpoints':'Proof 1.2 includes the exponent j=a-1, giving the least degree, and excludes j=a in the quotient. Pointed-move grading maps retain that boundary in 1.3.',
'nonempty-choice':'A homogeneous Laurent generator is chosen once, and the nonempty integer exponent set has a minimum in 1.1. Its replacement by U^b rho leaves d unchanged in 1.3.'})
put(13,'Statement; Proof 1.1–3.1','This is existence of a two-constraint profile for small positive r, not a uniqueness or iff characterization of minimax extremizers.',{
'empty':'Proof 1.1 proves the active set finite by b_j→infinity and nonempty by A<1/b1; thus neither N(A) nor D(A) is divided by zero.',
'zero':'r=0 is excluded, but zero profile coordinates are included via (1-Ab_j)_+; at activation thresholds individual terms vanish continuously in 1.1. R(A)→0 is a limit, not an asserted A=0 profile.',
'one':'Repeated minimum weights are included: 2.2 defines the finite multiplicity m0 and yields R=1/b1 even if several indices activate together.',
'degenerate':'Constant initial weight plateaus are treated in 2.2; an infinite plateau is excluded by a_j→infinity. Strict positivity of weights keeps D(A)>0.',
'endpoints':'Proof 3.1 applies IVT on an interior closed interval [Aminus,Aplus]; r0=1/a1 and r=r0 are not included in the open stated range.',
'nonempty-choice':'The finite head/tail estimates select individual indices, then one IVT value A and positive z0. No axiom selecting profiles simultaneously for all radii is required.'})
put(14,'Statement; Proof 1.1–2.1','The homology isomorphism identifies a chosen meridian generator; it is not an iff characterization of knot exteriors by H1.',{
'empty':'!The input is a knot with a closed product tube; the exterior and its boundary torus are nonempty.',
'zero':'The zero maps in 1.1–2.1 are essential: meridian bounds a disk in the tube, and H2(S3)=H1(S3)=0 makes the pair connector an isomorphism.',
'one':'Proof 1.1 computes rank one for the solid-torus core and relative normal-disk group; 2.1 carries its generator to the positive meridian, not a nonprimitive multiple.',
'degenerate':'!The product tube is smooth and embedded; a collapsed tube or singular knot is excluded by the Given data.',
'endpoints':'Excision uses an enlarged product collar in 2.1 and preserves the actual normal-disk boundary; no equality of a product longitude with a preferred longitude is needed.',
'nonempty-choice':'The tube is supplied and the finite torus cellular model is explicit in F2. No simultaneous selection of knot tubes or cycles is used in 1.1–2.1.'})
put(15,'Statement; Proof 1.1–5.1','The assertion computes a particular boundary-fixed mapping-class lift and its inverse under orientation reversal, not an equivalence of arbitrary disk maps.',{
'empty':'!There are exactly two distinct branch points and a connected annular cover; deleting the branch set is not a permitted empty-input case.',
'zero':'The cutoff is 0 near one annular end and 1 near the other in 2.1, producing the identity on both boundary circles modulo 2pi; the central value 1/2 produces the half-turn.',
'one':'Proof 4.1 distinguishes precisely one boundary-pointwise-fixed lift from the deck-related lift swapping boundary components; a single finite initial sheet choice suffices.',
'degenerate':'c>0 and 0<epsilon<c in 1.1–2.1 avoid a collapsed annulus; 5.1 excludes arbitrary unnormalized smooth base germs from its smooth lifting assertion.',
'endpoints':'The lift fixes both annular boundaries pointwise. Step 5.1 lifts cutoff isotopies stationary near branch points and outer boundary in compatible square charts.',
'nonempty-choice':'The construction uses finite smooth cutoffs and a single specified initial sheet, with uniqueness from path/homotopy lifting in 4.1. No choice axiom is assumed.'})
put(16,'Statement; Proof 1.1–2.1','The first surgery differential is identified with the mirror reduced Khovanov differential; no biconditional recognizing diagrams is asserted.',{
'empty':'The link must be nonempty and contain the basepoint, but the crossing set may be empty: then the cube has one vertex and the edge differential is zero in 1.1.',
'zero':'Over F2, X tensor X maps to zero and marked merge kills the X input in 1.2; zero-crossing cubes have no edge maps to sum.',
'one':'A one-circle marked state uses the reduced surviving label of degree zero in 1.3; marked split adds an X-labelled new circle rather than an extra unreduced marked factor.',
'degenerate':'!A finite regular diagram, admissible multi-diagram and compatible perturbation data are hypotheses; singular projection charts are not included.',
'endpoints':'For each edge the same vertex bases are used at source and target (1.2); 1.3 binds the extreme cube indices to i=|I|-nplus and p=n-|I|.',
'nonempty-choice':'The entire compatible vertex identification is supplied by F2; 2.1 does not choose unrelated edgewise bases or assert diagram independence.'})
put(17,'Statement; Proof 1.1–4.1','Rational-ball boundary kernel is a metabolizer; the converse that every metabolizer bounds such a W is not asserted.',{
'empty':'!W and Y are connected, nonempty manifolds; however zero finite homology groups are permitted and are treated by the order formulas in 3.1.',
'zero':'If H1(Y)=0 then P=0=Pperp and the perfect zero linking form has its zero metabolizer. Orders of zero groups are 1, so 3.1–4.1 still apply.',
'one':'An order-one group is the trivial group and causes no division by zero in |P|=|B|/|C|; 3.1 uses positive finite group orders.',
'degenerate':'The boundary form is perfect by F5; ordinary H2(W) may be finite torsion but its order is retained as C in 3.1, not assumed zero.',
'endpoints':'Connectedness makes H0(Y)→H0(W) an isomorphism in 3.1; the induced boundary orientation and cap identity bind isotropy to the actual boundary in 3.2.',
'nonempty-choice':'AC supplies finite CW type and duality conventions; 3.2 chooses one Bockstein antecedent for a fixed pair x,y, not a global family of chain lifts.'})
put(18,'Statement; Proof 1.1–2.1','The theorem is smooth-disk input to rational-homology cover conclusion; it does not characterize slice knots by rational-ball covers.',{
'empty':'!The branch set is an actual properly embedded disk with nonempty boundary knot. No empty branch-set cover is claimed.',
'zero':'Proof 1.1 gives zero rational homology in positive degrees and H0=Q, not an acyclic complex in degree zero.',
'one':'There is one disk and its connected degree-two branched cover; 2.1 sends a positive meridian to the nontrivial element of Z/2, not the trivial monodromy.',
'degenerate':'!A locally flat topological disk is expressly outside the assertion; smoothness and properness are required by F2.',
'endpoints':'Proof 2.1 restricts z→z^2 in a normal disk to the boundary and obtains exactly the oriented double branched cover Sigma2(K).',
'nonempty-choice':'AC is explicit in A1; the disk and connected cover are supplied, so this application does not construct disks from a choice over knots.'})
put(19,'Statement; Proof 1.1–2.1','Filtered equivalence implies tau equality; equal tau does not conversely construct a filtered equivalence.',{
'empty':'!Total homology of each finite complex is F2, so a zero/empty complex and an empty nonzero-image filtration set are excluded.',
'zero':'tau=0 and vanishing lower filtration images are allowed; the commutative square in 1.1 preserves the nonzero total class regardless of its filtration integer.',
'one':'Each total homology has dimension one, making the witness nonzero class survive the isomorphism f-star in 1.1; no dimension-zero alternative is used.',
'degenerate':'Acyclic total complexes are excluded by H(C)=H(D)=F2. Individual zero filtration levels are allowed and cannot witness the defining minimum.',
'endpoints':'Both maps and the inverse homotopies preserve every filtration level, so restrictions at the exact integer tau(C) and tau(D) suffice in 1.1–2.1.',
'nonempty-choice':'The definition F1 supplies the least integer and its single witnessing class; the proof uses the two supplied maps and no infinite family of representatives.'})
put(20,'Statement; Proof 1.1–4.1','Amenability implies positive-degree Tor dimension zero; no converse amenability test or literal Tor-module vanishing is claimed.',{
'empty':'Empty finite column lists and empty supports give zero modules in 1.1–3.1. The arbitrary free index set I may be empty without affecting the tensor kernel.',
'zero':'The zero module M gives zero Tor; q=0 is excluded by q>0. Proof 4.1 proves dimension zero only, and does not promote that to algebraic Tor vanishing.',
'one':'Degree q=1 is proved explicitly in 4.1 by the presentation kernel; higher q uses syzygies. The old step 1.2 reference is nonexistent.',
'degenerate':'Zero ranks in 1.1 and trivial G are allowed by the hypotheses. The finite-support argument does not require nonzero matrices or a nontrivial group.',
'endpoints':'!The only degree boundary is q>0: 4.1 starts at q=1 and shifts higher degrees. There are no manifold boundary or interval endpoint data and no step 1.2.',
'nonempty-choice':'Full AC is explicitly retained for Hilbert dimension and projective-resolution comparisons in A1/F5; arbitrary finite tensors are handled individually in 2.1–3.1.'})
put(21,'Statement; Facts F1–F8; Proof 1.1–3.4','Nonzero axis self-pairing is a sufficient hypothesis for the rank and nonhomomorphism results; neither conclusion is asserted to characterize patterns.',{
'empty':'For every requested finite rank m, 3.1 chooses m+1 knots; the theorem asserts infinite rational rank, not a quotient of an empty family.',
'zero':'P^0 is the identity by Statement; 1.1 retains the smooth n=0 branch and 3.3 supplies the separate TOP finite-cyclic n=0 argument. Winding number zero is required throughout.',
'one':'The rank result includes n=1; the nonhomomorphism result begins at n=1 in 2.1 and 3.4, correctly excluding the identity P^0.',
'degenerate':'!A zero axis Blanchfield self-pairing is explicitly excluded. The proof does not infer the same conclusion for every winding-zero pattern.',
'endpoints':'The lower iteration endpoint n=0 is treated separately in 3.3; no nonexistent step 2.2 is needed. TOP slice exteriors retain meridian and zero-longitude markings through F8.',
'nonempty-choice':'Full AC is explicit. Proof 1.1 and 3.1–3.3 use a finite independent family for each desired rank, rather than claiming a selected explicit infinite independent sequence.'})
put(22,'Statement; Proof 1.1–2.1','The five-term sequence is exact for a given extension; this does not characterize which arbitrary sequences arise from extensions.',{
'empty':'!A group is never the empty set; trivial groups are permitted and yield zero positive homology terms, not an empty extension.',
'zero':'The terminal 0 records surjectivity H1(G)→H1(Q); 1.1 obtains it from the spectral-sequence five-term sequence.',
'one':'N=1 or Q=1 is allowed. In 1.2 coinvariants N/[G,N] reduce accordingly without a nontrivial-element assumption.',
'degenerate':'A split or trivial extension is included; 1.2 only uses [N,N] subset [G,N] and imposes no injectivity on the transgression.',
'endpoints':'The far left H2(G) map is not asserted injective; exactness begins at the displayed middle terms and the rightmost H1(Q) surjection is explicit in 1.1.',
'nonempty-choice':'AC implies DC as recorded in A1/L1; 1.2 identifies coinvariants through conjugation by each individual lift and does not choose a global section.'})
put(23,'Statement; Proof 1.1–1.3','This theorem gives two distinct functorial assignments and their equivalence relations; it asserts no equivalence between the Khovanov and Floer theories.',{
'empty':'The stated input has boundary knots; intermediate birth/death links belong to the retained functor constructions, and are not replaced by a theorem about an empty knot.',
'zero':'The two-variable Floer complexes have zero curvature after the stated coloring in 1.2; zero maps are allowed, with no claim that every cobordism induces a nonzero map.',
'one':'Proof 1.3 explicitly uses the unique Spin-c structure on S3 times [0,1], so the general extension sum has exactly one term for the stated product cobordism.',
'degenerate':'Closed dividing curves and intermediate multiply based links remain in F2 scope; undecorated surfaces receive only the Khovanov assignment, not an unlabelled Floer map.',
'endpoints':'Boundary-fixed isotopy and endpoint naturality identifications are explicit in 1.1–1.2; the coefficient rings and targets are kept distinct at both ends.',
'nonempty-choice':'Countable choice is stated and the external F2 specialization explicitly retains it; no full-AC functor is silently substituted.'})
put(24,'Statement; Proof 1.1–2.2','A fixed diagram yields E2 and abutment identifications; the theorem does not assert a converse or diagram-independent filtered equivalence.',{
'empty':'The link is nonempty so the basepoint exists, but n=0 crossings is allowed: 1.2 has the sole filtration level 0 and 2.1 has no edge differential.',
'zero':'At zero crossings, the one vertex is both the associated graded and total complex; zero higher filtration maps cause immediate stabilization by 1.2.',
'one':'For n=1 there are two filtration levels 0,1; 2.1 identifies their single edge with the reduced saddle map, with no higher cube component.',
'degenerate':'!The diagram must be finite and regular, with the analytic Floer package and nonempty link. Singular diagrams or unsupported analytic choices are not covered.',
'endpoints':'Proof 1.2 explicitly bounds the increasing filtration by 0 and n and identifies the induced image filtration on total homology, not an independent Floer grading.',
'nonempty-choice':'AC and the AComega analytic package are assumptions; one basepoint and one fixed diagram are supplied, so no simultaneous choices over diagram space are claimed.'})
put(25,'Statement; Proof 1.1–4.1','The supplied surface framing has zero self-linking and relative winding zero; the statement does not characterize all framings or knots from that integer.',{
'empty':'!The knot and its connected one-boundary Seifert surface are nonempty; the intersection set in 3.1 is empty and has count zero, which is an included computation.',
'zero':'Proof 3.1 computes zero linking from K disjoint from the truncated spanning surface F0; 1.1 separately makes the surface-reference winding integer zero.',
'one':'There is one boundary knot and one supplied conormal field. The finite-fiber interpolation of 1.4 never reaches the zero section because its pairing with s is positive.',
'degenerate':'The small-radius condition is essential: 1.3 chooses delta uniformly so the collar section pairs positively with s. Radius zero is not a disjoint push-off.',
'endpoints':'The interpolation is stationary near u=0,1 in 1.4 and preserves the oriented first component K; the new boundary orientation of F0 is checked in 2.1.',
'nonempty-choice':'A1 supplies countable choice to the collar, tube and projection suppliers; the surface and framing are given and only finitely many compactness reductions are made.'})
put(26,'Definition, input and steps 1–4','The procedure constructs a candidate differential; square-zero is expressly delegated, not proved as an iff condition here.',{
'empty':'The diagram must be nonempty, but its crossing set can be empty: step 1 then enumerates the unique empty state, and step 3 contributes no edge maps.',
'one':'For one crossing, there are two states and one signed saddle map; with no preceding crossings the exponent in the edge sign is zero.',
'degenerate':'!Input is a mathematical finite regular diagram with a total crossing order, not malformed serialized data. No parsing or rejection guarantee is claimed.',
'endpoints':'Step 3 changes each 0 bit to 1; the all-1 terminal state has no outgoing edges. The normalized degrees in step 2 include the extreme cube vertices.',
'nonempty-choice':'A crossing order is supplied, and finite state enumeration chooses no infinite family; untouched tensor factors receive identity maps.'})
put(27,'Definition of integral solutions, D(R), von Neumann dimension and defects','Integral n-solution is defined by the displayed homology and pairing conditions; it is not a proved equivalence with geometric sliceness or defect vanishing.',{
'empty':'The pair list may be empty when r=0: H2=0 and all pairing and lifted-isotropy equations are then vacuous, while H1 and boundary conditions remain mandatory.',
'zero':'n=0 uses pi/pi^(0)=1 in the integral pairing; the half-step uses pi/pi^(1). A zero H2 pair list does not remove the meridian H1 isomorphism requirement.',
'one':'For r=1 the x,y cross-pair is 1 and x self-pair is 0. The coefficient ring has 1!=0; neither a zero ring nor an empty group is defined.',
'endpoints':'Half-solvability adds actual lifts to index n+1; a signature defect is named rho only after a separate bounding-independence argument, not from its definition alone.',
'nonempty-choice':'Full AC is explicitly the convention for finite twisted chains and von Neumann modules; the definition does not assert existence of solutions for every knot.'})
put(28,'Example; Verification 1.1–2.1','Fixed incident-field coefficients give a real-linear implemented map; no converse identification of the physical nonlinear scattering law is asserted.',{
'empty':'!The specified contrast grid has 128^2 cells, 20 transmitters and a positive listed receiver count; the benchmark arrays are not empty.',
'zero':'The zero contrast array gives zero signal in the displayed sum, with additive noise still present. Background permittivity 1 defines that contrast zero.',
'one':'Background permittivity 1 and fixed illumination appear explicitly; this is not a single-cell asymptotic model. Each output coordinate is a linear functional in 1.1.',
'degenerate':'The cosine formula is restricted to nonzero arrays; the example does not assign cosine similarity to zero images. It follows the implementation, not the contrast-dependent printed formula.',
'endpoints':'Grid spacing and the finite transmitter/receiver indices fix the implementation domain; no continuum boundary condition or endpoint inversion theorem is deduced.'})
put(29,'Example; Proof 1.1–2.1','These are three evaluations for L(3,1), not a characterization of lens spaces or orientation from correction-term equality.',{
'empty':'!There are exactly three specified cyclic labels 0,1,2; neither an empty label family nor p=0 is an input to this worked example.',
'zero':'Label i=0 is explicitly evaluated in 1.1, giving 1/2; it must not be confused with correction term zero or cover order zero.',
'one':'Label i=1 is evaluated in 2.1 and gives -1/6; the denominator remains 4p=12, so no unit-order limiting substitution is involved.',
'degenerate':'!p is fixed at 3 and denominator 12 is nonzero. No singular rational expression or non-lens-space filling is considered.',
'nonempty-choice':'The orientation convention and all three labels are given. Verification uses finite rational substitution, with no representative-selection principle.'})
put(30,'Statement; Proof 1.1–3.1','The result supplies a subordinate partition for a countable open cover, not an iff characterization of covers.',{
'zero':'Zero cutoffs are harmless, while the normalizing sum s is strictly positive on nonempty Omega by shell coverage in 2.1. No division occurs on the separate empty-domain branch.',
'one':'A cover with a single member is permitted; the shell-indexed compact cutoffs may still be many, and their normalized sum is 1 on Omega by 3.1.',
'degenerate':'Proof 1.1 separately handles Omega=R^n, avoiding distance to the empty complement; empty shells contribute empty finite subcovers.',
'endpoints':'The exhaustion starts with K_m empty for m<=0; cutoffs are compactly supported in the doubled eligible balls, preserving positive distance from the domain boundary.',
'nonempty-choice':'Step 2.1 chooses the first eligible finite subcover by natural-number code for each shell, using the countable cover and rational balls; no countable-choice axiom is invoked.'})
put(31,'Statement; Proof 1.1–5.1','Acceptance certifies the stated primitive extreme-ray disk; the converse that every essential disk has this particular certificate is not claimed.',{
'empty':'The zero vector fails the gcd=1 primitive-ray check in 1.1 and cannot witness the nonzero-kernel rank argument in 2.1; empty boundary fails B(v)>0 in 4.1.',
'zero':'Zero coordinates are allowed and can be active rows; 2.1 verifies each such zero and reconstructs the determinant. A zero claimed minor cannot certify rank 7t-1.',
'one':'The required Euler characteristic is 1 and gcd is 1; 1.2 computes chi on compressed coordinates and 3.1 supplies connectedness before the disk test.',
'degenerate':'Quadrilateral admissibility, nonzero rank minor and odd meridian intersection are checked separately; Euler characteristic 1 alone is not accepted as a disk certificate.',
'endpoints':'The marked boundary meridian and nonempty normal boundary are retained in 1.2/4.1; complexity is in the binary certificate length rather than the expanded surface.'})
put(32,'Statement; Proof 1.1–3.1','A certified spine gives equality of Wada and torsion classes; a group-presentation isomorphism is expressly not sufficient for the model-change conclusion.',{
'empty':'!The certified spine has one vertex, n>=2 edges and n-1 two-cells; a zero-cell-count empty spine is excluded.',
'zero':'!Deck rank m=0 is excluded by m>=1; admissibility and fraction-field acyclicity in 1.2–2.1 ensure the torsion and selected denominator are nonzero.',
'degenerate':'An inadmissible deleted column is excluded; 2.1 applies only to its nonzero boundary determinant, while 1.1 requires an actual simple-spine certificate rather than a group isomorphism.',
'endpoints':'The finite simple equivalence in 3.1 must transport the same based representation and deck map; arbitrary changes of this boundary/model data are not included.',
'nonempty-choice':'AC is inherited from the twisted-chain convention. An admissible column and based simple-equivalence certificate are supplied, not selected from an unverified presentation.'})
put(33,'Example; Proof 1.1–1.2','The example refutes boundary-jets implying interior equality; it does not refute DN-map uniqueness or assert equal DN maps.',{
'empty':'The compact support lies in the half-radius ball and the perturbation is zero on a whole boundary neighborhood; this vanishing region is the mechanism giving all equal boundary jets.',
'zero':'epsilon=0 is excluded, but vanishing of psi for |x|>=1/2 and every derivative at the support edge is explicitly proved in 1.1; gamma2(0)-gamma1(0)=epsilon/e is nonzero in 1.2.',
'one':'gamma1 is the constant 1 and gamma2 remains strictly positive by |epsilon| sup|psi|<1 in 1.2; positivity is not inferred just from equality of jets.',
'nonempty-choice':'The explicit nonzero bump has finite positive sup norm, so one may choose a particular nonzero epsilon below its reciprocal; no infinite selection of conductivities is needed.'})
put(34,'Statement; Proof 1.1–3.1','The theorem genuinely proves both directions of extension iff vanishing on P_D.',{
'nonempty-choice':'AC is retained, but 2.1 extends across a finite p-group by finitely many individual Prüfer roots and then sets other primary summands to zero.',
'empty':'If the finite primary summand is zero, its extension step is empty and the character on it is zero. D and the branched cover remain nonempty geometric objects.',
'one':'An order-one character, if included in the prime-power convention, is the zero character and extends by zero; the nontrivial p-power case is explicitly handled in 1.2–3.1.',
'zero':'The character may vanish identically or P_D may be zero; 1.1 still proves restriction vanishing and 2.1–3.1 construct a p-primary extension.',
'degenerate':'No surjectivity of boundary inclusion is assumed: 1.2 first factors through its image I, and 2.1 extends from I_p to B_p.',
'endpoints':'The inclusion map i and its actual kernel P_D are fixed; 1.1 composes the extension with i and 3.1 returns a character agreeing on that same boundary image.'})
put(35,'Statement; Proof 1.1–6.1','The basing and distinct-index self-crossing invariance claims are one-way invariance statements, not equivalences classifying links by residues.',{
'one':'One-component links are allowed for basing invariance with repeated indices. Pairwise-distinct index sequences of length>=2 then do not exist, so the self-crossing assertion adds no claim.',
'degenerate':'Originally crossingless components are handled by transported supported curls in 1.1; repeated-index basing independence is retained, while repeated-index self-crossing invariance is expressly not asserted.',
'endpoints':'Proof 3.1 retains independent meridian and longitude access conjugators; 6.1 permits arbitrary endpoint basings and finite word lifts along the finite self-crossing sequence.',
'nonempty-choice':'AC is inherited. Every basing correction is finite-degree, and 5.1 treats the zero proper-coefficient ideal as integer equality rather than choosing a nonzero modulus.'})
put(36,'Statement; Proof 1.1–4.1','The page states inertia descriptions and sufficient transport/reduction conditions; it does not characterize all signature-preserving maps as injective dense maps.',{
'empty':'Finite projection modules may be zero; then the positive/negative spectral subspaces and all projection traces are zero in 1.1, and the supremum includes the zero subspace.',
'zero':'The spectral value zero contributes neither positive nor negative inertia; 4.1 explicitly discards kernels, so a zero form has signature zero.',
'one':'The trivial-group trace recovers ordinary finite-dimensional signatures by complexification in 4.1; dimension-one positive and negative forms are covered by the same spectral proof.',
'degenerate':'J may have kernel for inertia and dense-injective transport, but the coisotropic reduction in 3.1 requires J invertible. The proof does not apply its B-star inverse to a singular J.',
'endpoints':'The open spectral intervals (0,infinity) and (-infinity,0) exclude zero; 2.1 approaches their ends through positive epsilon,delta projections using trace normality.',
'nonempty-choice':'The standing AC convention is explicit; the proof uses actual spectral projections, bounded inverses and finite triangular decompositions, not a chosen basis of arbitrary modules.'})
put(37,'Statement; Proof 1.1–2.1','The stated nonabsorption and two-piece hypotheses identify the companion torus in JSJ; the converse for every satellite torus is expressly not claimed.',{
'zero':'The relevant zero-size JSJ family is explicitly ruled out in 1.1 because M itself is neither atoroidal nor Seifert-fibered; this proves minimality of the singleton.',
'degenerate':'An essential torus absorbed in a Seifert union is excluded by the whole-M hypothesis; essentiality alone is not promoted to a JSJ-recognition criterion.',
'endpoints':'The final ambient diffeomorphism in 2.1 transports both actual cut sides; the boundary of M remains on the pattern side, preserving which component is E_K.'})
put(38,'Example; Proof 1.1–3.1','The explicit antipodal collision refutes global Bolker injectivity; no iff characterization by conjugate points for all double fibrations is asserted.',{
'empty':'The incidence is nonempty and compact. Every (n,x) has two distinct antipodal object points in the relation, as calculated in 2.2, not an empty fiber collision.',
'zero':'tau=0 is excluded from the canonical relation in 2.2; x-flat is nonzero because |x|=1. The Jacobi field vanishes at t=0,pi but is nonzero between them in 3.1.',
'degenerate':'The defining differential is nonzero by 1.1 and both incidence projections are submersions by 2.1. The failure is global injectivity, not a singular incidence manifold.'})
put(39,'Statement; Proof 1.1–2.1','The equality of fixed field with Q has two membership directions, both proved in 2.1 using the two nonrational cases.',{
'empty':'The automorphism family is nonempty (identity), and the common fixed field contains Q. Zorn extension chains have a union embedding in 1.1, with the given embedding as lower starting datum.',
'degenerate':'The algebraic nonrational case is separated from the transcendental case in 1.3–1.4; repeated roots are excluded by characteristic-zero separability, not assumed away arbitrarily.',
'endpoints':'!There is no interval or manifold-boundary parameter. The extension in 1.1 preserves the original embedding on its entire initial field, a field-theoretic restriction condition.'})
put(40,'Statement; Proof 1.1–1.2','One specified same-side arc surgery produces one of the two enlargements; the theorem does not claim every matrix enlargement comes from a supplied geometric surgery.',{
'empty':'An empty old basis is allowed for a disk: m=0 gives empty x,y and retains the new two classes. The surgery cylinder and link are nonempty.',
'zero':'At m=0, Mayer–Vietoris in 1.1 still gives H1(F-prime)=0 direct-sum Z^2; 1.2 supplies the two-by-two matrix with one unit off-diagonal and zero meridian self-pairing.',
'one':'A single surgery raises first-homology rank by two, not one. In 1.2 exactly one meridional/longitudinal mixed pairing is +1, and the other is 0.',
'degenerate':'The same-local-side hypothesis and actual embedded cylinder ensure an orientable once-punctured-torus replacement in 1.1; arbitrary self-intersecting tubes are excluded.',
'nonempty-choice':'Full AC is explicit in A1. The ordered old basis and surgery cylinder are supplied; 1.1 adds two concrete tube curves after a finite joining strip, not a basis chosen for an arbitrary family.'})
put(41,'Statement; Proof 1.1–2.1','The returned sequence bounds u(K) from above; the theorem does not characterize unknotting number or minimality by being descending.',{
'empty':'A zero-crossing diagram produces an empty crossing-change list in 1.1, still a witness to nonempty sequence-length set because length 0 is a natural number.',
'degenerate':'!The theorem requires an admissible finite planar knot code and an edge-interior basepoint; malformed, multi-component or singular inputs are not covered.',
'endpoints':'The basepoint is strictly inside an edge, and every crossing is processed at first encounter; no crossing lying at the start point creates an ambiguous first branch.'})
put(42,'Statement refuted; Counterexample 1.1–1.2','Only the implication M^p L^q=1 => U^p V^q=I is refuted; the reverse eigenvalue implication is valid but is not refuted by this example.',{
'empty':'!The witness consists of two explicit 2-by-2 matrices and the common eigenline C(1,0); no empty family or absent invariant line is used.',
'endpoints':'The primitive boundary exponent pair (1,0) is included and decisive: the zero q exponent leaves V unused, while U remains nonidentity despite eigenvalue 1.'})
put(43,'Definition of root-of-unity skein parameter and quantum integers','The page defines related parameters and labels; it does not assert a classification by an iff condition.',{
'empty':'The label set is nonempty even at p=4: r=2 gives {0}. The denominator q-q^-1 is nonzero since q^2 has order r>=2.',
'nonempty-choice':'A primitive root A is fixed as input. The finite root and label conventions do not require choosing roots for all p, and no zero quantum integer is inverted.'})
put(44,'Statement; Proof 1.1–5.1','The cutoffs satisfy bounds through order N; this is an existence result, not a characterization of analytic functions by those bounds.',{
'degenerate':'For K empty, 1.1 chooses all cutoffs zero and the empty neighborhood. For nonempty K, 2.1 normalizes a bump of strictly positive integral, preventing division by zero.',
'endpoints':'The full derivative range |alpha|<=N is included: 4.1 distributes N derivatives to N distinct factors at the upper endpoint, and k=0 has unit L1 norm.'})
put(45,'Statement; Proof 1.1–2.1','The stated genus-zero iff unknot is genuine: 1.1 is unknot-to-disk and 1.2–2.1 is disk-to-ambient-unknot.',{
'empty':'!A connected compact surface with the given knot as its sole boundary cannot be empty; genus-zero means an actual disk, not an empty spanning family.',
'degenerate':'The shrinking uses r>0 throughout 1.2 and ends at an embedded ellipse, never the collapsed center point. Linear injectivity is preserved before ambient extension.',
'one':'The one-boundary-component requirement is essential in F1: genus zero for a multiple-boundary surface would not identify it as a disk.',
'endpoints':'The radial isotopy retains positive final radius and is concatenated with linearization and frame/radius interpolation in 2.1; the ambient path starts at the identity and preserves orientation.'})
put(46,'Statement; Proof 1.1–3.1','The theorem gives finite existence and uniqueness of oriented prime factors, not an iff with an arbitrary list of nonprime knots.',{
'empty':'The input knot is nontrivial, hence positive genus; 1.1 yields a nonempty prime list. An empty prime list would represent the unknot and is outside this Statement.',
'endpoints':'Proof 2.1 keeps gluing collars disjoint and caps the actual oriented sphere punctures; 3.1 compares oriented factors up to permutation, not unmarked exterior homeomorphism.'})
put(47,'Example; Verification 1.1–2.1','The example computes EIG as a function of rho and compares two values, not an iff criterion for identifiability or independence.',{
'zero':'rho=0 is explicitly evaluated in 2.1, giving log(3)/2; it is an included independent-noise case, despite the fixed prior variance being 1.'})
put(48,'Example; Verification 1.1–3.1','The finite matrix evaluations and fundamental-color identity do not characterize knots by equality of colored Jones values.',{
'endpoints':'The one-strand identity and color N=1 are explicitly evaluated in 1.1. The braid closure pairs each bottom position with its top position (1.2–1.3), retaining the crossing convention and t=q^-1=A^-4.'})
put(49,'Statement; Proof 1.1–2.1','Connected alternating diagram implies nonsplit link; no converse asserting every nonsplit link has an alternating diagram is made.',{
'empty':'The crossing set may be empty: 1.1 explicitly identifies a connected crossingless diagram as one circle and uses its spanning disk with zero-dimensional definite form. The link is not empty.'})
put(50,'Statement; Proof 1.1–4.1','Unimodular alternating part is sufficient for realization by a knot surface; the separate F1 supplies necessity for actual Seifert matrices, not an additional converse claim here.',{
'degenerate':'g=0 is explicit in 1.1: the empty matrix has determinant 1 and a disk with empty basis realizes it. For g>0 a singular alternating part is excluded by det=±1.'})
put(51,'Statement; Proof 1.1–4.1','Actual quotient maps preserve the displayed mixed-derived quotients under N subset G^(r); no converse characterizing such N by abstract quotient isomorphisms is asserted.',{
'endpoints':'r=0 has an empty ring list, P0G=G, and trivial quotient with empty PTFA series in 4.1. At i=r only the first quotient statements apply; successive factors stop at i<r.'})
put(52,'Statement; Proof 1.1–6.1','Subgroup extension preserves specified linking values and nonzero self-values; it does not reflect nonsingularity or classify all equivalent coefficient systems.',{
'endpoints':'The base vector 1 and transported standard Hermitian forms are fixed on both coefficient systems; 4.1 uses their compatible inclusion. Arbitrary independent gauge changes are not covered.'})
put(53,'Statement; Proof 1.1–4.1','Localized boundary generation implies kernel isotropy; the converse that isotropy forces localized rank zero is not claimed.',{
'endpoints':'N may be any finite selected union, including empty; 2.1 extends its classes by zero to the full boundary and 4.1 sums only selected components. No K-homology vanishing is imposed on unselected components.'})
put(54,'Statement; Proof 1.1–2.1','The procedure terminates with first-over labels; neither minimality of crossing changes nor a converse recognition of all unknot diagrams is claimed.',{
'empty':'With no crossing records, the coherent one-circle traversal has zero processing operations and returns the unchanged code and empty list; first-over conditions are vacuous, with admissibility retained by 2.1.'})
put(55,'Statement; Proof 1.1–2.1','Ambient isotopy implies equality of the normalized bracket by finite Reidemeister invariance; equality of polynomials does not conversely imply link isotopy.',{
'empty':'The empty link is excluded, but empty crossing set is included: there is one empty state, writhe 0, and the k-circle value is delta^(k-1), with k>=1. Thus absence of crossings is not outside the theorem.'})
put(56,'Definition, exact/noisy modes and return-status clauses','Only exhaustive exact mode with epsilon=0 returns every exact-feasible affine family modulo sign; incomplete enumeration and positive tolerance explicitly have weaker claims.',{})
put(57,'Statement refuted; Verification 1.1–3.1; formatting row-map 2.1→1.2 and 2.2→2.1','The counterexample has positive nominal fixed-operator EIG and nonidentifiable actual parameter/operator pairs. It refutes that implication, not a converse implication from identifiability.',{})
put(58,'Definition, conditions on Q and joint/frozen objectives','The definition includes a genuine zero test Q(a,b)=0 exactly when a=b, while asserting no existence or uniqueness of minimizers.',{})
put(59,'Example; Verification 1.1–5.1','The coordinate formulas and gap subsequence prove failure of a uniform lower rate; the example asserts no converse characterization of spectral gaps by that failure.',{})
put(60,'Example; Facts F1–F6; Verification 1.1–2.1','The degree-two universal-series formula recovers a2 after subtracting its unknot value; it does not characterize knots or the full Kontsevich series by a2.',{})
put(61,'Statement; Proof 1.1–5.1','Both equalities express the finite-cover signature as character averages; equality of signatures is not asserted to characterize the cover or coefficient system.',{})
put(62,'Statement; Proof 1.1–2.1','The equality-attaining dual vector is sufficient for optimality, and a separate annihilating vector certifies infeasibility. Neither certificate is asserted necessary.',{})
put(63,'Statement; Proof 1.1–2.1','The deterministic largest-s set attains the minimum tail error; it is not an iff asserting that every minimizer has this unique support (ties and zero entries are allowed).',{})
put(64,'Statement; Proof 1.1–2.1','The source representation gives the norm interpolation inequality; no converse representation or sharp-rate equivalence is asserted.',{})
put(65,'Statement; Proof 1.1–4.1','The resolved strata are exhaustively listed and intersections included; this is a compactification construction, not a biconditional existence characterization for arbitrary manifolds with corners.',{})
put(66,'Statement; Proof 1.1–3.1','The conclusion is the identity V-V-transpose=J_F in every integral basis. It is not an iff asserting every abstract matrix is the matrix of the given surface.',{})
put(67,'Statement; Proof 1.1–3.1','Every finite two-generator word has a polynomial trace in a,b,c; equality of three traces is not asserted to imply conjugacy of matrix pairs, especially for reducible pairs.',{})
put(68,'Statement; Proof 1.1–3.1','A continuous nondecreasing concave modulus satisfying the stated data inequality admits a same-modulus extension. The theorem does not assert these hypotheses are necessary for every extendible map.',{})
put(69,'Statement; Proof 1.1–5.1, in particular unknot case 3.1','The theorem gives the connected-sum bridge formula, not a characterization of all bridge-number equality cases.',{
'empty':'!Both inputs are actual smooth knots, hence nonempty; no bridge number is assigned to the empty link here.',
'degenerate':'Proof 3.1 explicitly handles either factor being the unknot using b(U)=1 and the connected-sum identity; essential-annulus normalization is applied only after excluding that case.'})
put(70,'Definition; Proof 1.1–2.1','The finite state sum is defined on nonempty diagrams, not on empty links.',{
'empty':'Empty link is excluded, but C(D)=empty has exactly one empty state in 1.1; a crossingless k-circle diagram has delta^(k-1) with k>=1. No delta^-1 value is assigned to the empty link.'})
put(71,'Example; Verification 1.1–3.1','The Fox-coloring counts distinguish these knots, with no completeness claim.',{
'endpoints':'These are closed diagrams, not boundary tangles: the specified cyclic crossing equations determine all arc incidences. The one-arc zero-crossing unknot has no equations and three color choices in 2.1.'})
put(72,'Statement; Proof 1.1–6.1','The stated summability yields convergence and, with the additional Gaussian/choice assumptions, Gaussian covariance and Fernique conclusions.',{
'empty':'The random variables and probability space are supplied, so no empty probability measure is needed. Empty spectral support (all lambda_j=0) gives Y=0 and S=0 in 1.1–3.1; empty open preimages are explicitly handled in 2.1.'})
put(73,'Statement; Proof 1.1–8.1, especially 7.1','The fraction equality and annihilator tests are actual equivalences; their degreewise consequences do not require bounded or finite chain complexes.',{
'endpoints':'Proof 7.1 works at every integer degree using Z_i and B_i. There is no top or bottom degree assumption; zero adjacent terms simply give zero images or kernels. Left-handed conclusions use the opposite-ring transport in 8.1.'})
put(74,'Statement; Proof 1.1–4.1','The result supplies intrinsic cellwise products of a nonempty connected patch, not an ambient exchange-region cancellation.',{
'empty':'R is nonempty, but its edge-intersection set is empty by hypothesis. This is essential in F1/1.1: chi and boundary counts force every region to be a quadrilateral, yielding a chain or cycle in 2.1. It is not an absent boundary case.'})
put(75,'Statement; Proof 1.1–2.1','The typed state-sum procedure has a finite exact output count, not a serialized parsing guarantee.',{
'empty':'Proof 1.1 expressly includes c=0: exactly one empty assignment is visited, with a=b=0 and at least one resolved circle by F2. The empty link itself remains excluded.'})
# Explicit direction dispositions where the page really contains an equivalence,
# a conditional assertion relevant to the direction, or a detector ambiguity.
directions={
34:('checked','Proof 1.1 proves extension implies vanishing: i(x)=0 for every x in P_D, so the restricted extended character is zero.','checked','Proof 1.2 factors a character vanishing on P_D through I; 2.1 extends over the finite p-primary group and 3.1 sets other primary values to zero, producing a prime-power-order extension.'),
39:('checked','Every rational belongs to the common fixed field by the automorphisms stipulated in the Statement; Proof 2.1 records this inclusion.','checked','Proof 1.3 moves every algebraic nonrational and 1.4 moves every transcendental by z→z+1; 2.1 therefore excludes every nonrational from the common fixed field.'),
42:('checked','The proposed forward implication is specifically refuted in 1.2: M=L=1 and (p,q)=(1,0), yet U^pV^q=I+N is not I.','not_applicable','The reverse implication from U^pV^q=I to its eigenvalue product being 1 is not the Statement refuted; the witness attacks only the stated forward direction.'),
55:('checked','The actual one-way invariance is proved in 1.1–2.1: ambient isotopy yields a finite sequence of moves preserving f_D. This does not create a biconditional.','not_applicable','No converse from f_D=f_E to oriented link equivalence is asserted; the Statement and 2.1 conclude only that f descends to isotopy classes.'),
56:('checked','For exhaustive exact mode with epsilon=0, each returned family x_s+ker A solves Ax=y_s exactly and hence |Ax|=sqrt(b). Positive tolerance and incomplete budgets expressly do not assert this exact feasibility.','checked','Any exact amplitude solution yields signs with Ax=s sqrt(b); a global sign chooses s1=+1 (arbitrarily if its magnitude is zero). Its difference from A-plus y_s lies in ker A. The m=0 singleton empty sign and exhaustive zero-tolerance clauses include all solutions; budget-exhausted output makes no converse completeness claim.'),
58:('checked','For admitted variables and beta>0, r(x)=rhat gives Q(r(x),rhat)=0 by the explicit defining zero test, hence the consistency penalty is zero. No minimizer claim follows.','checked','The defining Q(a,b)=0 exactly when a=b makes a zero consistency penalty imply r(x)=rhat, since beta>0 and finite p>=1. This is a genuine hypothesis of Q, not a theorem of existence for the joint objective.'),
66:('not_applicable','V-V-transpose=J_F is an equality, not an implication with an independent antecedent; 2.1–2.2 establish its sign and 3.1 transports it to the chosen basis.','not_applicable','There is no reverse realization theorem for arbitrary matrices in this Statement. Step 3.1 proves skew-symmetry and unimodularity of the already supplied surface intersection matrix.'),
}
# Particular claim-level implications are not marked not_applicable merely
# because the page has no literal iff token. The target case is an iff audit:
# ordinary one-way statements get an explicit scope reason, not a fabricated reverse proof.
for i,n in notes.items():
 if i in directions:
  a,b,c,d=directions[i];n['cases']['iff-forward']=(a,b);n['cases']['iff-reverse']=(c,d)
 else:
  n['cases']['iff-forward']=('not_applicable',n['logic']+' There is no separate iff-forward obligation beyond this asserted scope.')
  n['cases']['iff-reverse']=('not_applicable',n['logic']+' In particular, no reverse classification implication is part of this item.')
# Cases absent from original input but routed to this whole-item lane.
supp=json.loads((B.parent.parent/'battery1-contract/strict-boundary-lane-supplements.json').read_text())
supp=[r for r in supp if (r.get('boundary_lane')or{}).get('lane')==3 or (r.get('same_item_lane')or{}).get('lane')==3]
allrows=list(x['rows']);keys={(r['id'],r['case']) for r in allrows}
for s in supp:
 if (s['id'],s['case']) not in keys:
  olditem=next(r for r in x['rows'] if r['id']==s['id'])
  allrows.append({'id':s['id'],'case':s['case'],'batch':olditem['batch'],'before_row':s['old'],'source':olditem['source'],'supplemental':True})
  keys.add((s['id'],s['case']))
out=[]
for r in allrows:
 i=ids.index(r['id']);n=notes[i];v=n['cases'][r['case']]
 if isinstance(v,tuple):status,reason=v
 else:status='not_applicable' if v.startswith('!') else 'checked';reason=v.lstrip('!')
 ar={'case':r['case'],'status':status,('reason' if status=='not_applicable' else 'evidence'):reason}
 out.append({'id':r['id'],'batch':r['batch'],'case':r['case'],'before_row':r['before_row'],'after_row':ar,'actual_evidence':{'source':r['source'],'passage':n['extent'],'boundary_reason':reason},'read_extent':n['extent']+'; focused on assigned boundary cases and local interfaces, not an independent entire-proof audit or supplier-body review.','supplemental':bool(r.get('supplemental',False))})
proposal={'agent':'/root/flyping_composite','role':'owner-focused FIRST boundary disposition; no native Alpha credit','scope':'Research-only proposals for root FINAL/application; no canonical, contract, metadata, hash, state or gate changes.','original_row_count':len(x['rows']),'original_item_count':len(ids),'supplement_routed_count':len(supp),'additional_unique_supplemental_rows':len(allrows)-len(x['rows']),'proposed_row_count':len(out),'reviewed_item_count':len(notes),'rows':out,'limits':'Actual claim and relevant proof-case review only. Existing imported facts retain their declared source and choice scope. No external primary texts or accepted supplier bodies were reread, no source-category promotion and no local proof completion is claimed.'}
(B/'proposal.json').write_text(json.dumps(proposal,ensure_ascii=False,indent=2)+'\n')
(B/'review-notes.json').write_text(json.dumps({ids[i]:n for i,n in notes.items()},ensure_ascii=False,indent=2)+'\n')
print(json.dumps({k:v for k,v in proposal.items() if k.endswith('count') or k=='additional_unique_supplemental_rows'},indent=2))
print('Status counts', {k:sum(r['after_row']['status']==k for r in out) for k in ('checked','not_applicable')})
