# General Neron existence: source packet

**Status: source proofs and local prerequisite arguments supplied in [closure-supplement.md](closure-supplement.md); parent mathematical review pending. Do not mark ready.**

The claim remains all abelian varieties over arbitrary DVRs. This packet follows BLR and replaces only its general bounded-model entrance with projective closure of the given abelian variety. It specializes the descent square argument to an abelian generic fibre.

## Initial reconstruction (superseded counts)

BLR 3.1–3.5 including optional /6–7; 4.3–4.4; 5.1–5.3; 6.3–6.5; 6.1/4,/6,/7. The optional BLR 3.5/6 flattening proof was read but is excluded from this DAG; its Raynaud–Gruson flattening prerequisite was not read. BLR 3.6 Artin approximation is excluded. BLR 4.2 proof prerequisites not fully read.

40 is an explicit proposed packaging count, not a closure estimate or a certificate. P25 could occupy the already promised existence item, giving 39 additions/67 total; no deduction claimed until parent checks inventory. Each foundation contract may split when proved; no exact completed closure count is available.

The literal proposed packaging is 15 prerequisite packets plus 25 construction packets, hence 40; with the parent-reported 28 original A items the arithmetic is 68, leaving 32 slots. This is not a certified closure count. The existence conclusion P25 can be the promised original item.

## Supplier cautions

Exact current Statements and byte hashes are in packet.json. The classical normal-function intersection and finite-birational-to-normal results have algebraically closed classical-variety hypotheses; they cannot supply arbitrary-DVR scheme applications. The field-only ampleness descent result cannot supply R to Rsh ampleness descent. The relative smoothness theorem and scheme ZMT have applicable Statements, but their use does not fill unrelated missing divisor or domain foundations. The cube supplier is marked published on disk and assumes AC and DC; these assumptions must propagate. Its displayed metadata currently has a judge stamp, so the parent should check ordinary publication evidence rather than infer audit status from the status label.

## Ordered DAG

### F01 — Strict henselization and smooth sections

For every DVR R, Rsh is a faithfully flat DVR with the same uniformizer and separably closed residue field; it is the filtered colimit of local etale R-algebras. Smooth schemes over a strictly henselian local ring lift rational special-fibre points to sections; those special points are dense.

Dependencies: foundational contract; supplier closure pending.

Proof: Construct etale neighbourhoods, use simple-root lifting in a standard smooth chart, and pass to the colimit. Completeness is not a substitute.

Evidence: BLR 2.2/13–14, 2.3/5; prerequisites not fully read. Status: unclosed-foundation-contract.

### F02 — Relative rational maps

For smooth schemes over a DVR, opens dense in every fibre are schematically dense after arbitrary base change. Rational-map domains and equality descend through faithfully flat maps; compositions used below are defined on appropriate fibre-dense opens.

Dependencies: foundational contract; supplier closure pending.

Proof: Check dense opens componentwise on geometrically reduced fibres; compare morphisms through the separated diagonal; use faithfully flat descent of morphisms for domains.

Evidence: BLR 2.5, especially /5–6; not fully read. Status: unclosed-foundation-contract.

### F03 — Regular scheme divisor calculus

Smooth finite-type schemes over a DVR are regular, hence normal and locally factorial. Codimension-one closed subsets are Cartier divisors locally; divisors of rational line-bundle sections have pure codimension one.

Dependencies: foundational contract; supplier closure pending.

Proof: Use regularity ascent from flatness and regular fibres; then prove the regular-local factorial theorem and assemble local equations.

Evidence: Parent supplied exact published regularity-ascent and regular-local UFD interfaces; Statements read here, UFD proof not read here. Status: unclosed-foundation-contract.

### F04 — Scheme Hartogs and birational open immersion

A Noetherian normal domain is the intersection of its height-one localizations in its fraction field. A separated quasi-finite birational morphism from a reduced integral scheme to a normal scheme is an open immersion.

Dependencies: foundational contract; supplier closure pending.

Proof: For Hartogs use denominator ideal and associated primes with S2; for open immersion use scheme ZMT and identify the birational finite component with the normal target by integral closure.

Evidence: Parent supplied local scheme Hartogs proof via published normal S2, associated primes and depth quotient; exact Statements read here, parent proof not independently checked here. Scheme ZMT mapped; classical-only items do not suffice. Status: unclosed-foundation-contract.

### F05 — Smooth morphism differential criterion

Between smooth schemes of the same relative dimension over a DVR, a morphism is etale exactly where its relative differential determinant is invertible.

Dependencies: foundational contract; supplier closure pending.

Proof: In standard smooth coordinates identify the Jacobian of the morphism and apply the relative Jacobian criterion, then etale plus birational gives an open immersion by F04.

Evidence: BLR 2.2/10; field rational-point submersion supplier alone does not suffice. Status: unclosed-foundation-contract.

### F06 — Smoothness along a section

For X finite type over a DVR with smooth generic fibre and a section a, length(torsion a*Omega)=0 iff X is smooth along a. Relative special dimension is at least generic dimension, and the tangent dimension criterion applies at the rational specialization after strict henselization.

Dependencies: foundational contract; supplier closure pending.

Proof: Use a standard smooth ambient neighbourhood with dimension equal to the generic dimension; generic coincidence and the section rule out residual vertical equations. Supply the dimension theorem and Jacobian criterion explicitly.

Evidence: BLR 3.3/1 proof read; its EGA IV 13.1.3 and BLR 2.2/15 prerequisites not fully read. Status: unclosed-foundation-contract.

### F07 — Geometric reduction and free locus

A closed k-scheme whose ks-valued points are schematically dense is geometrically reduced, has dense smooth locus, and any coherent sheaf on its reduced components is locally free on a dense open.

Dependencies: foundational contract; supplier closure pending.

Proof: Inject coordinate rings into products of ks, preserve injectivity after field extension, then use separability for geometric reduction; generic freeness handles the differential sheaf.

Evidence: BLR 3.3/4 proof read; EGA IV 11.10.7 and BLR 2.2/16 prerequisites not fully read. Status: unclosed-foundation-contract.

### F08 — Blowup construction over arbitrary DVR

The blowup of a coherent ideal containing pi is proper, finite type, generically an isomorphism, and projective over its source. Its gi chart is A[I/gi] modulo gi torsion. Sections lift uniquely; the pi chart is R-flat.

Dependencies: foundational contract; supplier closure pending.

Proof: Build Proj of the Rees algebra, identify affine homogeneous charts and prove projectivity/properness; use the valuative criterion for section lifting.

Evidence: BLR 3.2 construction and universal-property proof read; Rees-Proj/properness prerequisites not fully read. Status: unclosed-foundation-contract.

### F09 — Finite-presentation spreading and flat closure

Isomorphisms of stalks for finite-type morphisms spread to neighbourhoods; finite-presentation objects/morphisms descend along filtered limits. Schematic closure commutes with flat base change; the generic closure over a DVR is flat.

Dependencies: foundational contract; supplier closure pending.

Proof: Write finite equations and finite inverse identities, clear finitely many denominators; tensor the finite affine-cover kernel for closure with a flat ring; flatness is pi torsion-freeness.

Evidence: Closure supplier maps only open-immersion closure; spreading and flat-base-change extension require proofs. Status: unclosed-foundation-contract.

### F10 — Finite codimension-one points have an affine neighbourhood

On a finite-type separated normal scheme over an affine Noetherian base, finitely many points of codimension at most one lie in one affine open.

Dependencies: foundational contract; supplier closure pending.

Proof: Use approximation for inequivalent DVR valuations to make the intersection semilocal, approximate it by finite-type algebras, spread local isomorphisms, and shrink in a quasi-affine scheme.

Evidence: BLR 6.4/4 proof read; valuation approximation and finite-stage argument not fully read. Status: unclosed-foundation-contract.

### F11 — Ampleness and effective pair descent

On a qcqs scheme, a finite cover by quasi-affine nonvanishing loci of sections of positive powers characterizes ampleness. Ampleness of a given line bundle descends fpqc. An ample line bundle with compatible fpqc descent datum makes scheme descent effective.

Dependencies: foundational contract; supplier closure pending.

Proof: Use the section ring Proj or affine refinements of quasi-affine loci; descend the graded algebra by module descent and cover by nonvanishing loci of descended sections, then glue descended quasi-affine pieces.

Evidence: BLR 6.1/7 proof sketch read; equivalence with repository affine-locus definition and fpqc ampleness descent need local proof. Status: unclosed-foundation-contract.

### F12 — Descent of morphisms and geometric properties

Schemes form an fpqc stack for morphisms, quasi-affine schemes have effective descent, and smoothness, finite presentation, separatedness, and open immersions descend fpqc.

Dependencies: foundational contract; supplier closure pending.

Proof: Use the affine equalizer for morphisms; descend ambient global-section algebras for quasi-affine schemes and descend stable opens using quotient topology. Check finite presentations and geometric conditions locally.

Evidence: BLR 6.1/4, /6 proofs read; modules/algebras supplier mapped; general property descent not fully read. Status: unclosed-foundation-contract.

### F13 — Fibre density constructibility

For a finite-presentation morphism and a constructible subset, the locus where it is dense in a fibre is constructible. Over a DVR an open dense in every fibre of X times X can be shrunk to be dense over both X projections.

Dependencies: foundational contract; supplier closure pending.

Proof: Stratify fibres by finitely many component data and dimensions; apply constructible images and then remove closures of bad loci.

Evidence: BLR 5.2/2 proof read; cited 2.5/1 not fully read. Status: unclosed-foundation-contract.

### F14 — Affine complements and horizontal divisors

For a normal Noetherian separated scheme, complement of a dense affine open is pure codimension one. On a regular scheme its reduced support is an effective Cartier divisor. If the open meets all fibre components over a DVR its complement is the closure of its generic complement.

Dependencies: foundational contract; supplier closure pending.

Proof: Use scheme Hartogs to rule out isolated higher-codimension complement components, local factoriality for Cartier equations, and fibre density to exclude vertical prime divisors.

Evidence: BLR 6.5 condition-(a) proof read; EGA IV 21.12.7 prerequisite not fully read. Status: unclosed-foundation-contract.

### F15 — Identity components of smooth groups

For a smooth finite-type group scheme over a DVR the fibrewise identity components form an open subgroup G0 with geometrically connected fibres; its orbits on the trivial torsor are geometric connected components.

Dependencies: foundational contract; supplier closure pending.

Proof: Construct component neighbourhoods etale locally and descend the component containing the unit; on each geometric fibre translate the identity component.

Evidence: BLR 6.4 pre-Lemma3; EGA IV 15.6.5 prerequisite not fully read. Status: unclosed-foundation-contract.

### P01 — Dilatation

For X finite type over R and closed Y in Xk, the pi-chart of BlY(X) is flat and universally receives a unique map from each flat R-scheme whose special map factors through Y. Dilatations commute with unramified flat DVR base change, closed immersion and products.

Dependencies: F08.

Proof: Affinely adjoin gi/pi and remove pi torsion. A map to a pi-torsion-free B sends gi uniquely to pi hi; this proves factorization and all compatibilities.

Evidence: BLR 3.2/1–2. Status: source-proof-read-local-prerequisites-unclosed.

### P02 — Defect computation and bound

For a section a of X with smooth generic fibre, delta(a) is torsion length of a*Omega; it is minimum valuation of the Jacobian minors of generic codimension and is bounded uniformly on X(Rsh).

Dependencies: F06, P01.

Proof: Smith normal form identifies maximal-rank-minor ideal with product of elementary divisors. The minors generate the unit ideal on each smooth generic dimension component; clear denominators to get a power of pi and take a finite affine-cover maximum.

Evidence: BLR 3.3/1–3. Status: source-proof-read-local-prerequisites-unclosed.

### P03 — Defect reduction

If Y has schematically dense liftable ks-points and U in Y is smooth with OmegaX/R restricted locally free, dilatation lowers positive defect by at least one for every section specializing in U.

Dependencies: F07, F05, P01, P02.

Proof: Choose smooth ambient Z and coordinates y,z with Y=(pi,z). Vanishing differentials and density of liftable points show Id(X) is contained in (pi,z)^2. Substitute z=pi zprime and divide equations by pi squared; each relevant Jacobian column gains a negative pi power, so minors decrease in valuation.

Evidence: BLR 3.3/5. Status: source-proof-read-local-prerequisites-unclosed.

### P04 — Finite smoothening

For X finite type over any DVR with smooth generic fibre there is a finite sequence of special-fibre blowups, proper and generically identical, whose smooth locus contains every Rsh-section.

Dependencies: P02, P03, F07, F08.

Proof: Stratify the closure of specializations by smooth/free loci. Blow up the deepest stratum first, decrease its defect, and use induction on bounded defect and finite stratum length. Do not assert all nested strata are simultaneously permissible: only the deepest current stratum is used.

Evidence: BLR 3.4/1–2; 3.1/3–4. Status: source-proof-read-local-prerequisites-unclosed.

### P05 — Projective weak model for abelian variety

For every abelian A/K and arbitrary DVR R there is a smooth separated finite-type model V with V(Rsh)=A(Ksh).

Dependencies: P04, F09.

Proof: Embed A in projective space using the published projectivity theorem; take its schematic closure over R. Proper valuative lifting gives all Ksh-points, and P04 then its smooth locus gives V. No excellence, bounded-model theorem or flattening is needed.

Evidence: BLR 3.1 final paragraph; 3.5 first paragraph. Status: source-proof-read-local-prerequisites-unclosed.

### P06 — Weak rational mapping and smooth generic-DVR base change

A weak model collection for A receives every generic rational map from smooth Z/R with irreducible special fibre as an R-rational map. Weak models remain weak after R to O_Z,eta at a special-fibre generic point.

Dependencies: P05, F01, F09.

Proof: Close graphs; lift dense special rational points to sections over Rsh and use the weak property to cover them. Constructibility forces some graph image to contain the generic special point. A local ring dominating that DVR with the same fraction field equals it; spread the isomorphism. Etale neighbourhood limits give base change.

Evidence: BLR 3.5/3–4. Status: source-proof-read-local-prerequisites-unclosed.

### P07 — Invariant volume and model order

A smooth d-dimensional group has a nowhere-vanishing invariant top form. On a smooth model with irreducible special fibre pi to minus ord times the form extends to a generator.

Dependencies: F03, F04.

Proof: Translate the cotangent space at the identity to trivialize Omega. Extend pi-normalized generic section through codimension one by Hartogs and rule out zeros by pure codimension-one support. For A, left and right invariance agree by published commutativity, so the general bounded modular-character argument is unnecessary.

Evidence: BLR 4.2/1–3; 4.3 initial paragraphs. Status: source-proof-read-local-prerequisites-unclosed.

### P08 — Order comparison and finite minimal classes

A rational generically identical map between smooth irreducible-special-fibre models satisfies ordsource>=ordtarget; equality makes it an open immersion on its domain. Orders have a finite minimum and there are finitely many equivalence classes of minimal models.

Dependencies: P06, P07, F05, F04.

Proof: Pull back normalized volume; its scalar coefficient is pi to the order difference times a unit. Nonnegative order gives inequality, zero order gives etaleness. Apply P06 to a finite weak collection; its minimum bounds every model, and a minimal model is birationally equivalent to one of the finitely many minimal members.

Evidence: BLR 4.3/1–2. Status: source-proof-read-local-prerequisites-unclosed.

### P09 — Minimal models under generic smooth-DVR base change

Minimal representatives after R to O_Z,eta remain minimal and cover all minimal equivalence classes after splitting special components.

Dependencies: P06, P08.

Proof: The base-changed weak collection remains weak by P06, and the normalized volume order at each special generic point is unchanged. Repeat the finite-minimum argument over the new DVR.

Evidence: BLR 4.3/3. Status: source-proof-read-local-prerequisites-unclosed.

### P10 — Separated minimal union and translations

There exists a smooth separated finite-type faithfully flat model X of A formed by gluing finitely many minimal representatives along A. Every translation by a point over a generic smooth-DVR extension extends to a birational open immersion.

Dependencies: P08, P09, F09.

Proof: Close pairwise generic diagonals. If a special projection is dominant, a DVR dominance argument gives birational equivalence, contradicting distinct classes. Remove the nowhere-dense images to ensure separated gluing. Apply P06 and order minimality to a translation and its inverse.

Evidence: BLR 4.3/4. Status: source-proof-read-local-prerequisites-unclosed.

### P11 — Birational group law

The generic multiplication of A extends to an R-birational associative law on X with both universal translations birational.

Dependencies: P10, F02.

Proof: At each special generic point of the first X factor, apply P10 to the universal generic translation over its local DVR; spread to an R-rational universal left translation. Repeat for the right translation. Their multiplication projections agree generically, and associativity follows by separated dense agreement.

Evidence: BLR 4.3/5. Status: source-proof-read-local-prerequisites-unclosed.

### P12 — Strictification

An R-birational law on a smooth separated faithfully flat finite-type X over a DVR restricts to a strict law on an R-dense open U.

Dependencies: P11, F13, F02.

Proof: Intersect domains and images of universal translations, remove constructible bad-fibre-density loci in both projections, and intersect the two good opens. Restrict multiplication and use the open universal translations to verify both domain and image density in each projection.

Evidence: BLR 5.2/2. Status: source-proof-read-local-prerequisites-unclosed.

### P13 — Graph and translation calculus of a strict law

For a strict law, X embeds into the functor of relative birational self-maps. The closure of its multiplication graph has all three two-coordinate projections open immersions with both-projection dense images. Section translation is defined at b iff the law is defined at (a,b).

Dependencies: P12, F02, F04.

Proof: Injectivity follows from universal-right-translation cancellation; associativity identifies translation products. Test graph-closure triples on a dense extra variable w to prove ta tb=tc. Any two coordinates then determine the third even on T-valued points; quasi-finite birational graph projections are open by F04. Close each section-translation graph to obtain the final domain claim.

Evidence: BLR 5.2/4; 5.3/1–4. Status: source-proof-read-local-prerequisites-unclosed.

### P14 — Translate gluing preserves strict law

Over a normal strictly henselian local base, gluing X to a left translate X(a) along the closed section-translation graph gives a smooth separated finite-type scheme and extends the strict law.

Dependencies: P13, F02.

Proof: Both graph projections are open immersions and closed graph gives separated gluing. Define the law on X times X, X(a) times X, and X times X(a) using associativity; verify both universal translations are open by graph calculus and their images dense.

Evidence: BLR 5.3/5. Status: source-proof-read-local-prerequisites-unclosed.

### P15 — Finite translate enlargement

For a strict law over a strictly henselian DVR, finitely many section translates yield Y on which original X times X multiplication is everywhere defined.

Dependencies: P14, P13, F01.

Proof: The multiplication graph domains Qn form increasing opens of the fixed Noetherian X times X, so stabilize. If a section translation still fails, glue its translate and strictly increase Qn, contradiction. Sections meet all dense opens in either fibre: for the generic fibre, specialize its excluded closed set and use dimension/flatness to leave a dense special open. Factor multiplication near any pair through a suitable such section.

Evidence: BLR 5.3/6–7 specialized to DVR. Status: source-proof-read-local-prerequisites-unclosed.

### P16 — Global group law and uniqueness

Y becomes a smooth separated finite-type group scheme containing X as fibre-dense open; any two group completions of a birational law are canonically isomorphic.

Dependencies: P15, P13, F02, F12.

Proof: For generic auxiliary a express bc=(ba)(a inverse c); strict graph calculus puts the two factors in original X on a dense faithfully flat cover, and global X times X multiplication makes the law defined there. Descend its domain. Repeat for left division; the representable subgroup of birational maps supplies unit and inverse. Uniqueness uses the smooth surjection X times X to each completion and morphism descent.

Evidence: BLR 5.3/8; 5.1/3–4. Status: source-proof-read-local-prerequisites-unclosed.

### P17 — Classical square from published cube

For A/K abelian and every line bundle L, the square obstruction on A times A times A is pulled back from the first two A factors.

Dependencies: P05.

Proof: Rewrite the cube identity as L(x+y+z)L(z)/(L(x+z)L(y+z)) = L(x+y)/(L(x)L(y)), up to constant identity-fibre factors. This is a literal line-bundle pullback identity. No Picard representability, dual abelian variety, or Poincare bundle is used.

Evidence: Published cube supplier; BLR 6.3 introductory classical case. Status: source-proof-read-local-prerequisites-unclosed.

### P18 — Square on a smooth group with abelian generic fibre

For H smooth separated finite type over a DVR with abelian generic fibre, and H0 its identity component, every line bundle on H satisfies the square for the H0 translation action.

Dependencies: P17, F03, F15.

Proof: Extend the generic base line bundle on H0 times H0 by regular divisor closure. The residual square obstruction is vertical. Since H0 has geometrically irreducible fibres, its vertical divisor on H0 times H0 times H is pulled back from H. Pull back along (unit,unit,idH) to identify that line bundle with one pulled back from R, then absorb it in the base line bundle.

Evidence: BLR 6.3/2 abelian generic specialization. Status: source-proof-read-local-prerequisites-unclosed.

### P19 — Divisor ampleness for abelian generic group

For H as P18, every effective divisor D whose complement is affine and fibre-dense gives ample O(D).

Dependencies: P18, F01, F11, F15.

Proof: Fibre-density means complement meets every H0 orbit. Over a strict henselization, the square implies Dg+Dg inverse is linearly equivalent to 2D. The associated sections have quasi-affine nonvanishing loci gU intersect g inverse U. These cover H: suitable g occur in a dense open in each H0 fibre and hence among sections. Apply quasi-affine-locus ampleness criterion and descend the same line bundle.

Evidence: BLR 6.4/2–3 specialized to trivial torsor. Status: source-proof-read-local-prerequisites-unclosed.

### P20 — Stable ample divisor descent from an effective dense open

If H/Rsh from P16 has a stable fibre-dense open U with effective descent to R, its compatible group descent datum is effective.

Dependencies: P19, F10, F14, F09, F11, F12.

Proof: Choose a fibre-dense affine open in descended U by F10; pull it back. Choose a generic divisor with complementary support on known generic A, close it in H, and exclude vertical components by fibre-density to get support exactly H minus U. Flat closure preserves the divisor datum, so O(D) has a compatible linearization. P19 gives ampleness, and effective ample pair descent gives H/R and its group maps.

Evidence: BLR 6.5/1 proof under condition (a). Status: source-proof-read-local-prerequisites-unclosed.

### P21 — Descent datum for strict group completion

The canonical datum on U_Rsh extends uniquely to a group datum on H and satisfies the triple cocycle; U stays stable and effectively descends.

Dependencies: P16, F01, F02.

Proof: Over Rsh tensor R Rsh the two pulled-back completions solve the same strict law; use the uniqueness proof which holds over arbitrary base to extend the canonical U isomorphism. Triple uniqueness gives cocycle. This does not require the tensor-product ring to be a DVR.

Evidence: BLR 6.5/2. Status: source-proof-read-local-prerequisites-unclosed.

### P22 — Weil extension

If R is a DVR, Z is smooth over R, G is smooth separated over R, and an R-rational Z to G map is defined in codimension at most one, it extends everywhere.

Dependencies: F04, F03, F02, F12.

Proof: For difference v(z1,z2)=u(z1)u(z2) inverse, work near unit on the diagonal in an affine target. Affine-map indeterminacy has pure codimension one by Hartogs; intersecting with the smooth diagonal cut out by relative dimension many equations contradicts codimension at least two of the diagonal bad locus. Thus v is defined near the diagonal. Its intersection with Z times dom(u) surjects smoothly onto Z; recover u there using v and descend.

Evidence: BLR 4.4/1–2. Status: source-proof-read-local-prerequisites-unclosed.

### P23 — Full original-model embedding

The descended completion contains the full X of P10, not only the strictification U, as an R-dense open.

Dependencies: P20, P21, P22, P07, F05, F04.

Proof: The rational X to G map is defined on U and entire generic A, hence in codimension one. P22 extends it. Its pulled-back invariant volume has no codimension-one zeros and hence no zeros; it is etale. Generic identity plus F04 makes it an open immersion.

Evidence: BLR 5.1/5 final assertion. Status: source-proof-read-local-prerequisites-unclosed.

### P24 — Neron mapping property

For every smooth R-scheme Z, every K-morphism ZK to A extends uniquely to an R-morphism Z to G.

Dependencies: P23, P10, P22, F02.

Proof: For irreducible special-fibre component of Z, at its generic point use P10 over the local DVR to extend universal translation by uK on Z times X. This is an R-rational map; generic definedness plus fibre-generic definedness covers all codimension-one points on the smooth source. View its second coordinate as an R-rational map Z times G to G. Its domain includes the whole generic fibre and all special-fibre generic points, so it includes every codimension-one point. Apply P22 over R to this smooth source and group target, then evaluate at the unit. Work locally on finite-type opens of Z and glue. Separatedness gives uniqueness.

Evidence: BLR 4.4/4. Status: source-proof-read-local-prerequisites-unclosed.

### P25 — All abelian varieties over arbitrary DVR

For every DVR R and every abelian variety A over Frac(R), there exists a smooth separated finite-type R-group scheme G with generic fibre A satisfying the Neron mapping property.

Dependencies: P05, P24.

Proof: Combine projective weak model, minimal model, birational law, strict henselian translate completion, stable-open ample descent and Weil extension. No step assumes excellence, completeness, perfect residue field, dimension one for A, or reduction type.

Evidence: BLR 1.3/1 in the abelian case. Status: source-proof-read-local-prerequisites-unclosed.

## Exact remaining closure obligation

F01–F15 are exact prerequisite contracts. Parent has supplied interfaces for F03 regular-local factoriality and a local scheme Hartogs proof in F04; these reduce the unmapped obligations but do not make the whole DAG closed. Their complete source proofs and all supplier mappings are not closed here. In particular the valuation-approximation affine-neighbourhood construction, fpqc ample pair descent, and relative rational-map domain calculus cannot be silently treated as established by the BLR downstream proof text.

BLR 6.3/2 plus the published cube removes the optional dual/Picard/Raynaud dependency in the general torsor proof. The descent here uses only the trivial torsor H under itself and its stable effective dense open U. H has proper abelian generic fibre but need not be proper over R; generic properness suffices for the square reduction, while the special fibre may be disconnected. Use H0 for the action, and keep every component when proving ampleness.

The conditions-(b) and general-global-sections quasi-finite-locus parts of BLR 6.5 were read but are unnecessary: strictification supplies condition (a) directly. The finite translate construction is needed; citing group-completion existence without its graph and Noetherian stabilization arguments does not close P13–P16.


## Current closure and packaging

The closure supplement supersedes the initial unclosed-foundation status and forty-packet addition arithmetic. It supplies the required local arguments and groups the construction into sixteen new helpers plus the existing promised theorem. `packet.json` has exact additional supplier Statements and the current grouping. Parent mathematical review remains required; no ready stamp was made.
