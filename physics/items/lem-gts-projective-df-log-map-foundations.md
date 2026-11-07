---
id: lem-gts-projective-df-log-map-foundations
kind: lemma
title: Projective finite-DF basic log-map families, obstruction theory and node coupons
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
proof_strategy: direct
deps:
- def-axiom-of-choice
- thm-gts-proper-algebraic-dm-stack-of-stable-maps-to-a-projective-target
- thm-gts-r4-12b-algebraic-stable-map-descendants-and-deformation-splitting-identities
- lem-proper-flat-fp-cohomology-perfect-complex
- lem-cohomology-base-change-finite-free-criterion
- thm-proper-quasi-finite-is-finite
- thm-nonaffine-regular-local-ring-is-ufd
- lem-normal-noetherian-domain-intersection-of-height-one-localizations
- lem-gysin-specialization-bivariant-and-base-change
- lem-refined-gysin-commutation-and-composition
- lem-zero-section-gysin-and-excess-vector-subbundle
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: Gross and Siebert, Logarithmic Gromov-Witten invariants
    url: https://arxiv.org/abs/1102.4322
    locator: Log-map and obstruction-theory context only; the constructions below
      are explicitly inlined and are not attributed to an imported representability
      theorem.
  - title: Chen, Stable logarithmic maps to Deligne-Faltings pairs I
    url: https://arxiv.org/abs/1008.3090
    locator: Rank-one graph and valuative-chart context; no external algebraicity
      or properness theorem is used.
dependency_level: 4
---

## Statement

Assume AC. Work in characteristic zero over a finite-type complex base T. Let Y→T be projective and supplied with a finite Deligne–Faltings presentation: line bundles with sections, their specified tensor-product identifications and actual unit coupons, presenting in etale charts a fine saturated logarithmic target log smooth over its supplied base log structure. This includes a smooth projective pair and a regular semistable SNC target with transverse outer divisor. Fix genus zero, ordered markings with nonnegative contact vectors, an ordinary relative stable-map class component and ample degree. Retain the specified morphism to the base log structure. No nefness of the target boundary lines is required.

The functor of basic saturated stable log maps with these data, on all schemes including nilpotent ones, is a proper finite-type Deligne–Mumford stack, finite and representable over the ordinary stable-map stack. It has actual finite monoid/node-unit/line-isomorphism charts, face overlaps and a framed quotient inherited from the ordinary supplier. For fixed log-domain and ghost data its actual universally base-change-compatible relative obstruction theory is (R pi_* f^*T^log_(Y/T))^vee, of amplitude [-1,0]. For a smooth pair this is T_Y(-log D); the relative log-smooth target hypothesis is essential for its vector-bundle meaning.

Its intrinsic relative cone and zero-section operation commute with proper pushforward, flat pullback and regular Cartier restriction. Proper toric subdivisions of the log-domain base have virtual pushforward degree one; a smoothing monomial chi^rho has its actual ray valuation multiplicities. At a common-degeneracy star with contact orders w_i the enhancement degree is product(w_i)/lcm(w_i), and its base lattice index is lcm(w_i), so the combined contact weight is product(w_i), with graph-label automorphisms divided separately. This states no toric vertex/scattering identity or space-target map atlas.

## Facts & Assumptions

**Given:** The projective target and its actual finite DF/base presentation, target log smoothness, and the chosen ordinary class component. AC is retained from the ordinary stable-map and finite-choice/atlas interfaces. Arbitrary non-SNC targets without that presentation and punctured negative marked contacts are excluded.

[F1] [[thm-gts-proper-algebraic-dm-stack-of-stable-maps-to-a-projective-target]] supplies the ordinary proper stable-map stack, universal curve and effective descent. [[thm-gts-r4-12b-algebraic-stable-map-descendants-and-deformation-splitting-identities]] supplies independent prestable node parameters, all-base nodal trace, affine strictification and framed quotient Chow comparison. Only these ordinary interfaces are used.

[F2] [[lem-proper-flat-fp-cohomology-perfect-complex]] and [[lem-cohomology-base-change-finite-free-criterion]] supply actual proper-source complexes and base change. [[thm-nonaffine-regular-local-ring-is-ufd]] and [[lem-normal-noetherian-domain-intersection-of-height-one-localizations]] supply the trait-node monomial calculation. [[thm-proper-quasi-finite-is-finite]] is applied only after the framed chart has been shown to be a scheme.

[F3] [[lem-gysin-specialization-bivariant-and-base-change]], [[lem-refined-gysin-commutation-and-composition]] and [[lem-zero-section-gysin-and-excess-vector-subbundle]] are the scheme Rees/Gysin inputs to the universal cone operation. None is replaced by equality of final Chow classes merely on an etale atlas.

## Proof

1.1 Form the sharp saturated graph monoid in its existing torsion-free group from heights, independent node smoothings, target/base relations and signed slopes. Keep raw torsion for unit choices. Hilbert-basis finiteness, face localization and the actual saturated node pushout are proved in annexes 1–2. [given, construct]

2.1 Over the ordinary map chart retain t_e=u_e chi^rho_e and every base unit. Construct target ghost lines and represent their isomorphisms with pulled-back DF lines by actual direct-image kernel equations, the isomorphism open, section equalities and tensor coupons. Exact Laurent-character gauge quotients and common-face overlaps recover the original all-schemes functor. Annexes 1–2 give the equations and effective descent. [F1, F2, step 1.1, construct]

3.1 Ample twists of each target line and its dual bound all signed degrees by CE_v. The tree cut formula bounds slopes and stability bounds vertices. Thus finitely many monoids suffice. Scalar ratios on normalization components and the raw relation lattice show finite geometric enhancement fibres; no nefness is used. [step 2.1, construct]

4.1 The actual trait-node cyclic regular cover gives h=pi^n x^c times a unit from BOTH divisorial valuations. Generic normal units, even when the target section is identically zero, give an auxiliary ghost/valuation monoid. Replace it by the ABSTRACT basic graph monoid and remove unit relation errors by finite root equations. This yields valuative existence without identifying independent ghosts of equal valuation. Annex 1 §§6–7 and annex 2 §4 contain the construction. [F1, F2, step 3.1, construct]

5.1 Compare smoothing, root-height and prescribed base characters as actual R-units, including persistent nodes. They generate the basic group and give unique extension of the specified generic isomorphism. The curve-arc criterion gives properness. Framed charts glue as schemes; proper quasi-finite then gives finite algebras which descend. This gives the claimed proper DM stack and framed quotient. [F1, F2, step 4.1, construct]

6.1 With the log domain fixed, local target units and etale coordinates lift over square-zero ideals; differences are sections of f^*T^log tensor J. Their additive Cech cocycle vanishes exactly when lifts glue. Log coordinate changes give the actual logarithmic tangent transition matrices, including along identically vanishing target sections. Annex 3 proves this and the universal differential/trace obstruction morphism. [given, F1, step 5.1, construct]

7.1 Proper nodal pushforward makes the dual a two-term perfect complex after every base change, and the cocycle identifies its tangent and obstruction maps. For semistable log-smooth charts the same calculation uses the free relative log differential generators and their specified base relation. Thus this is the actual relative POT, not just a complex of the expected rank. [F1, F2, step 6.1, construct]

8.1 Strictify on a common affine torsor: the conormal surjection embeds the actual normal cone in a vector bundle. Its zero-section class is independent under product ambient embeddings and acyclic bundle pairs. Rees double deformation gives rational-equivalence, proper/flat/Cartier compatibility; global framed approximations and injective torsor comparison descend it. Annex 5 supplies the construction over integral test cycles and hence arbitrary Chow cycles. [F1, F3, step 7.1, construct]

9.1 A proper toric base subdivision pushes its fundamental cycle to the old one, since it is identity on the dense torus. Apply step 8.1 to the ACTUAL fibre product, retaining nilpotent root multiplicities. The Cartier divisor of chi^rho is the sum of primitive ray divisors with coefficients nu(rho). This proves the asserted modification and special-fibre identities without assuming a degeneration theorem. [F3, step 8.1, construct]

10.1 For a common-height star, Smith normal form gives primitive base index l=lcm(w_i). The root choices product mu_wi modulo the injective mu_l character have size product(w_i)/l. Their product with l gives the stated node coupon; label automorphisms remain separate. Annex 4 gives the actual equations and their solution-torsor quotient. [step 1.1, step 9.1, construct]

11.1 The following annexes contain the full constructions just used. Their numbering is local to each annex. Historical scope boundaries distinguish the tasks solved by the other annexes; they do not introduce external logical suppliers. The provenance manifest records original bytes, not assumed theorems. This proves precisely the projective finite-DF statement above. [step 2.1, step 5.1, step 7.1, step 9.1, step 10.1, construct] ∎

## Inline proof annex 1

#### 1. Finite charts of monoids and their actual log structures

A fine saturated sharp monoid P is a finitely generated submonoid of its torsion-free lattice P^gp, equal to its rational cone intersected with that lattice. Its affine chart is Spec C[P]. A map P→A gives the associated log structure by adjoining A^* and identifying precisely the elements mapped to units. At a point its characteristic is the sharp quotient of a face localization of P. This description is an explicit monoid pushout, and works without any reducedness assumption on A.

Here is the elementary chart fact we need. For a fine saturated log structure M, its geometric characteristic P has free abelian group P^gp. Choose a basis of that group and lifts in M^gp. Relations between finitely many positive generators and these lifts differ by units. After an etale shrinking these units are actual sections, and the lifts of positive generators lie in M: a lift with the same characteristic as an element of M differs from it by a unit. The chosen lifts therefore give P→M and an isomorphism of the associated log structure near the chosen point. The assertion that it remains an isomorphism is checked on its finitely many generators and relations and their invertible faces; shrink to the corresponding open. If a preliminary finite presentation has torsion, Smith normal form reduces its unit-lifting equations to z^n=u with u a unit; adjoining these roots is finite etale over C. Thus charts, maps of charts and their comparisons can all be made on actual etale covers. Two charts inducing the same named characteristic differ by one character P^gp→A^*. No log-stack representability theorem has been used.

For a dual tree Gamma let rho_e be each smoothing symbol and e_v each boundary height, with e_v=0 when the component is not in D. On an oriented contact-c_e edge use e_w−e_v=c_e rho_e; a zero-contact edge has equal heights and retains its independent rho_e. Form the integral image of the presented monoid in its group modulo torsion, sharpen, and saturate **inside that group's lattice**. Call the result P_Gamma. Retain the torsion of the raw group separately for the finite unit choices; do not replace it by an extra torus. This is an effective finite construction: rational linear inequalities test sharpness and the Hilbert basis of a rational polyhedral cone is finite (triangulate into rational simplicial cones; in each, subtract primitive ray generators until a lattice point lies in their bounded fundamental parallelepiped). Thus Spec C[P_Gamma] is finite type.

Localization at a face describes a generization exactly: invert the heights becoming units and the rho_e whose nodes smooth, kill the resulting units, and eliminate the corresponding equal heights. The resulting presentation is the graph presentation for the contracted tree, hence its saturation is its basic monoid. Localization and saturation commute, because an integral element has a positive multiple in the original localized monoid precisely when it does after clearing a denominator from the face. This proves the basic generization rule, including all zero-contact nodes.

#### 2. The family of log curves, with its node units

Take an etale ordinary stable-map chart U with universal nodal curve C_U and labelled nodes of the chosen special fiber. After shrinking, these are all the nodes that can persist in this neighborhood. The ordinary curve construction supplies actual etale node charts x_e y_e=t_e, and disjoint marked smooth parameters z_i. Smooth loci have just the pulled-back base log structure. The canonical node chart has branch generators x_e,y_e and relation x_e+y_e=rho_e; a marking adds one free generator z_i. Over a chart alpha:P_Gamma→O_S, the chosen image of the canonical smoothing element is rho_e together with a unit u_e. Accordingly the underlying equation is

    t_e=u_e alpha(rho_e).                                      (1)

The parameter scheme is therefore

    Z_Gamma=U times_(A^E) (Spec C[P_Gamma] times G_m^E),
                  t_e=u_e chi^(rho_e).                         (2)

The factors u_e MUST be retained: a single base-chart change cannot generally absorb them independently. The node monoid is already saturated: identify its group with P^gp direct-sum Z by y=rho−x. Its elements are (p,n) with p in P if n>=0, and p+n rho in P if n<=0. A positive multiple satisfying the same condition forces the element itself to satisfy it by saturation of P. Thus the displayed pushout is fine saturated, not an unexamined nonsaturated pushout. The node algebra A[x,y]/(xy−t) is A-free with basis 1,x,x^2,...,y,y^2,..., by reduction of every mixed monomial using xy=t; uniqueness follows because the relation has monic leading monomial xy. As a P-set the node monoid is the disjoint union of the translates P, P+nx and P+ny for n>=1. Equality in a common translate reduces to equality in P, which is exactly the integrality condition for P→S; arbitrary fs base changes have the same saturated description above. This proves the integral saturated node-morphism condition as well as flatness even for nilpotent t. Its relative log differentials have the one free generator dlog x with dlog y=−dlog x; the group cokernel is Z and the remaining chart map is etale. Equivalently, lifting its monoid chart and units across a square-zero extension leaves only an etale ordinary equation. This proves the required nodal log-smooth curve interface, including on nilpotent bases.

For the canonical construction, add finitely many extra disjoint smooth sections to stabilize the domain without contracting it. Such sections exist etale locally over U; choose their distinct reductions and use the relative smooth charts. The existing smooth versal prestable construction then gives independent node parameters on the resulting stable-curve atlas. Its boundary node divisors and branch smoothing lines define the canonical base log structure and the displayed universal node pushouts. Pull these objects back to U and then to (2); a different choice of extra sections gives the same labelled node divisors and smoothing lines, with their transition units. Thus no normalization of a nilpotent curve is being assumed. On an overlap where a branch parameter is a unit, eliminate its generator and identify with the base chart. On overlaps of node frames their two tangent-line units have product exactly the transition unit of the smoothing line in (1). This is the universal plumbing identity xy=t, already proved in the actual prestable supplier before arbitrary base change; pullback preserves that identity even if t becomes a zero divisor. The cocycle equations are multiplication of these actual units, not equations only in their residues. Consequently the charts glue to a log curve over all of (2), and all their base changes. Conversely a given log curve has these charts by definition of a nodal log curve, so etale locally it comes from (2).

The ghost of the target Cartier divisor is the section mbar given by e_v off special points, e_v+a_i z_i at a marking, and e_v+c_e x_e at an oriented node. The edge relation makes these descriptions equal on both branches after localization. The O_C^*-torsor of its local lifts gives a line mapping to O_C; its DUAL is the line bundle with vanishing section (L_m,s_m). Thus a divisor generator corresponds to its canonical section of O(D), not to the inclusion O(−D)→O. Its transition functions are exactly the units just compared. An actual log map with underlying f is now EXACTLY an isomorphism of pairs

    phi:(L_m,s_m) -> (f^*O_X(D),f^*s_D).                        (3)

Indeed in a target normal frame the image of its generator is a lift of mbar times a unit. Changing target frames multiplies by f^* of the transition unit. These are precisely the transition conditions for (3); the section equality is precisely compatibility with the structure map to O_C. This proves both directions over an arbitrary ring. In particular s_D can pull back to a nonzero nilpotent section; no step replaces “zero on geometric fibers” by “zero as a section.”

#### 3. An honest finite-presentation scheme for (3)

Put M=L_m^vee tensor f^*O(D). The existing universal direct-image construction gives finite locally free complexes in degrees 0 and 1 computing pi_*M and pi_*f^*O(D), with arbitrary base change. It may be obtained concretely by a sufficiently large relative twist and its restriction to a relative Cartier divisor; its degree-zero cohomology is the kernel of an actual map A^0→A^1. Thus global homomorphisms L_m→f^*O(D) are represented by the affine scheme cut out by A^0→A^1 inside the vector bundle A^0. This is a kernel scheme, not the vector bundle of geometric H^0's when base change fails.

On this universal homomorphism scheme, being an isomorphism is open: its cokernel is a finitely presented sheaf on the proper universal curve; its support has closed image, and exclude that image. A surjective map between line bundles is an isomorphism over every local ring, including rings with nilpotents. Finally phi(s_m)−f^*s_D is an actual global section of f^*O(D). Its coordinates in the degree-zero term of the second direct-image complex vanish if and only if the section vanishes. Impose these finitely many equations. This constructs a finite-presentation scheme H_Gamma over (2) representing (3), over every test scheme. It retains the scheme-theoretic multiplicities of every equation.

For the smooth pair there is a useful stronger local description. Every rational component either maps nonconstantly outside D, where the degree of f^*O(D) is the nonnegative intersection with the effective divisor, or maps constantly into D, where the degree is zero. No rational component maps nonconstantly into D, since its connected components have genus one by adjunction. On a rational tree, a line bundle nonnegative on every component has H^1=0: remove a leaf, use its H^1=0 and the surjectivity of evaluation at its attaching point, and induct using the normalization exact sequence. Thus pi_*f^*O(D) is a vector bundle of rank d+1 and the section equations above are exactly d+1 equations, compatibly with nilpotent base change.

At an object satisfying (3), M has multidegree zero on its tree, hence is trivial: remove leaves and choose constants to identify the fiber at each attaching point. Then H^1(M)=0 and H^0(M)=C. The direct-image base-change criterion makes pi_*M a line bundle near that object. Its evaluation map pi^*pi_*M→M is an isomorphism after shrinking: its cokernel has proper support avoiding the given fiber. Therefore the isomorphism part of (3) is locally the complement of the zero section in this line bundle. This is the actual Hom-line torsor in families, not a Picard lifting assertion restricted to reduced bases. The preceding kernel-scheme construction remains available when a later target line has negative multidegrees.

#### 4. Quotients, overlap maps and descent

A base-chart change h:P_Gamma^gp→O_S^* acts by alpha(p)→h(p)alpha(p), u_e→h(rho_e)^−1u_e, and the induced change of the line bundle L_m in (3). Let T_P=Hom(P_Gamma^gp,G_m). It acts on H_Gamma; quotienting is exactly forgetting the chosen chart, not quotienting out any genuine map deformation.

Here the quotient can be constructed without a general algebraicity theorem for log structures. Since beta is nonzero and D contains no rational curve, some vertex is nondegenerate. Root the tree there. Every e_v is an integral linear combination of the rho_e along its unique root path. Hence the rho_e generate P_Gamma^gp, even after torsion removal and saturation (saturation does not change this group). The lattice map Z^E→P_Gamma^gp is surjective. Its target is free, so Smith normal form supplies a unimodular change of the unit coordinates u_e, in which rank(P^gp) of the resulting coordinates have the basis characters of T_P and the others are invariant. There is exactly one chart change setting the former coordinates to 1. Substituting that change in alpha and phi is a Laurent-monomial algebraic operation, since the u_e are invertible. Thus H_Gamma/T_P is represented by the finite-presentation scheme obtained by this gauge substitution; the construction works functorially over any ring. Equivalently its coordinate algebra is the degree-zero algebra of a strongly P^gp-graded algebra whose every character is carried by a unit. No pointwise freeness argument or reduction has replaced the quotient scheme.

Faces, contractions of the labelled tree and isomorphisms of their sharp localized monoids give all overlap maps. There are finitely many faces and combinatorial label permutations. On an overlap the node units, target normal frames and phi transform by the actual unit formulas above; these are finite Laurent equations and open inversions. The basic presentation after contraction was proved in Section 1. Two objects are isomorphic exactly when the same formulas hold, so the resulting groupoid is the groupoid of the original functor, not a surrogate with the same geometric points. The identity and cocycle laws hold as literal compositions of charts and pair isomorphisms.

Effective descent is equally concrete. Under a faithfully flat cover, the underlying stable map descends by its existing stack property; unit cocycles descend invertible modules and their sections; the monoid charts glue along the specified face localizations, and adjoining units commutes with this gluing. All remaining compatibilities are equalities of sections or of finitely generated monoid maps, and are checked faithfully flat locally. Thus the quotient charts give the original stack on all schemes. Choosing the ordinary stable-map chart etale and retaining its finite node labels gives etale charts after the preceding exact gauge quotient: a chart of a given fine saturated log object extends etale locally by Section 1, and its only remaining chart changes are precisely T_P. This proves representability of the forgetful map by algebraic spaces. In particular its source is DM, since the ordinary stable-map stack is DM in characteristic zero. Automorphisms acting trivially on the ordinary map have already been eliminated by the exact unit-coordinate quotient; ordinary finite stabilizers still act on the finite set of enhancements.


Here is the stronger chart assertion needed to retain a scheme over a framed ordinary chart. A labelled graph presentation has NO residual monoid automorphism preserving all node rho_e and target heights: these generate its group. Two presentations of the same actual object on a common face therefore differ by a unique T_P character, already divided out. Hence the gauge chart is a monomorphism into the functor over U. Its overlaps with another gauge chart are open: invert the generators of a common contracted face, use the isomorphism of the sharp localized presentations, and transport the actual unit coupons and phi. Larger inverted faces are again compatible, so the union of these face opens is open; no condition that the other monomials vanish is imposed. The inverse transition is the inverse Laurent-unit substitution. Every common object etale locally has precisely such a common face, by the chart construction in Section 1. This proves that the overlap has no additional closed equations or hidden infinitesimal choices. Thus these schemes glue along actual open subschemes to a scheme L_U, representing the functor over the framed ordinary chart U. Changing U gives its actual etale descent as an algebraic space over the ordinary stack. In particular we will be able to use the SCHEME proper-quasi-finite theorem after this base change, rather than apply a scheme theorem to an unproved algebraic-space extension.

#### 5. Boundedness and quasi-finiteness

For completeness, contact boundedness uses the actual tree, not nefness of D on every curve on X. Cutting an edge and summing divisor degrees on one side gives its signed contact as

    c_e= sum_(v on side) D.beta_v − sum_(i on side) a_i.         (4)

Every component degree is nonnegative and totals d, and the marked orders total d. Thus |c_e|<=d. For the fixed ordinary map, all compatible type/contact choices and their raw lattice torsion groups are finite; the companion unit calculation identifies its enhancement choices with the characters of that finite torsion group. The geometric fiber of the forgetful map is therefore finite. A finite-type morphism represented by algebraic spaces with finite geometric fibers is quasi-finite.

There are globally only finitely many graphs and monoids in the construction. Fix a very ample H on X. The number of nonconstant components is at most H.beta, because each has positive integer H-degree. If there are k such vertices and m markings, the number of contracted vertices of a stable tree is at most 2k+m−2: sum its valences, use at least three special points at each contracted vertex, and the tree equation E=V−1. In particular the total number of vertices and flags is bounded. No list of component homology splittings is required in the charts: the underlying ordinary map already has its fixed total beta. Every component D-degree is an integer between 0 and d. Formula (4), finitely many zero/nonzero degeneracy flags and orientations, and this bounded node/mark set therefore give finitely many monoid presentations. No assertion of finiteness of all effective classes of bounded degree in an unrelated homology lattice is made. Their Hilbert bases are finite by Section 1. The kernel/isomorphism/section schemes in Section 3 are finite type over these finite-type charts. Their finite union covers the functor. This proves finite type, not just local finite presentation.

#### 6. The monomial lemma on an actual trait node

Let R be a DVR with uniformizer pi. After finite extension and etale localization a special node has xy=pi^N, up to an invertible factor absorbed in one coordinate. The local ring is normal; its degree-N cyclic cover is the regular local ring with x=U^N, y=V^N, pi=UV, with mu_N acting by (U,V)→(zeta U,zeta^-1 V). Its maximal ideal is generated by U,V, so it is a regular local surface ring and a UFD. The invariant ring is the node ring: expand an invariant monomial U^aV^b; a−b is divisible by N, so it is a monomial in x,y,pi, with xy=pi^N. The same calculation holds after completion, and faithful flatness of completion descends the unit and divisor statements.

A rational function h on the node chart which is a unit on the generic punctured chart has pullback divisor supported on U=0,V=0. The UFD statement gives h=U^a V^b v, where a,b are integers and v is a unit. Invariance and the nonzero residue of v imply a−b is divisible by N. Hence, after possibly interchanging branches,

    h=pi^n x^c v_0,       c>=0,       v_0 a unit.                (5)

Here n may be negative for a generically degenerate component; no unjustified regularity claim is made for a normalized log unit. At a smooth marking the same regular-local argument gives pi^n z^{a_i}v_0; at an unmarked smooth point it gives pi^n v_0. These conclusions follow from all height-one valuations, not just from one pi-valuation. At a persistent generic node normalize its two branches; each is the smooth version of the same argument, and the node relation gives their compatibility. This proves the precise local degeneration statement needed next.

#### 7. Existence over a DVR without collapsing the basic ghost

Start with a basic log map over the fraction field K. The ordinary proper stable-map supplier gives an extension of its underlying stable map, after a finite field extension. Enlarge R accordingly. Normalize along the nodes already present generically, so each generic component is a connected family of rational trees. Choose a generic base chart P_eta; its group is free. In a target normal frame the generic log map is a base height p plus a rational normal unit. At every special point apply (5) or its smooth/marking version to this rational unit. It supplies the integer vertical order n_v for each special component and the integer node orders, with invertible remaining units. These are genuine rational sections: when f^*s_D is identically zero on a generic component, use the generic log map's unit, not division of zero by zero. Its generic divisor is supported only on the specified markings and nodes; hence the local monomial lemma applies.

The signed new edge contacts are determined by (4); persistent contacts retain their generic values. The local formula gives e_w=e_v+c_e rho_e in generic-ghost/valuation pairs. Collect all pairs (p,n) for heights and node smoothings, and the vertical pair (0,1). They generate an auxiliary monoid in P_eta^gp direct-sum Z; take its saturation in its torsion-free group. It is sharp: its projection lies in the pointed cone of P_eta, and a generator with projection zero has nonnegative vertical coordinate, by regularity of the actual section or smoothing function. Therefore no negative vertical ray or line can occur. Its elements of projection zero map to the corresponding nonnegative power of pi; all elements of nonzero generic ghost map to zero. This defines a prelog structure over R. Negative vertical coordinates on nonzero generic ghosts are harmless and must not be forbidden.

The remaining invertible factors in (5), and the branch formulas at persistent nodes, define the log map to this auxiliary base on each chart. They glue: their equalities hold on the generic fiber and both sides are regular units on the chosen charts. Flatness of the nodal curve over R makes O_C inject into O_C[1/pi], so the equalities hold on the entire curve. Thus an actual, possibly nonbasic, extension has been constructed.

Now use the **abstract** saturated special graph monoid P_Gamma. Do NOT replace it by the image of the valuation pairs: two independent node symbols can have the same pi-order. The graph maps to the auxiliary characteristic. Lift its finitely many generators to the auxiliary log structure. Their relation errors are units on R. Smith normal form on the integer relation matrix reduces removal of these errors to finitely many root equations z^r=u for units u. After a finite etale extension of the trait these have solutions. The same operation removes the finite torsion character of the raw group. The resulting group map factors through its torsion-free quotient, and extends to its saturated monoid because the auxiliary log structure is saturated: if a positive multiple lies in the monoid, the element itself does. Compose P_Gamma with the structure map to R, and form its associated log structure N_R. Use the node images and the local generator expressions to form the corresponding curve log structure and target map over N_R. This is a basic extension by construction.

Generically, localize at the generators whose structure functions become units. The contracted graph is the original generic graph, and Section 1 identifies its basic monoid with P_eta. The unit coupons were obtained from the specified generic map, so this identifies the entire generic object, not merely its characteristic. We have proved existence after a finite extension, including the chosen generic isomorphism. The construction never identified independent ghosts with equal valuation.

#### 8. Uniqueness and the properness criterion

Suppose two basic extensions have the same generic object. The ordinary separated stable-map supplier extends the specified generic underlying isomorphism, so identify the curves and maps over R. Their special signed contact data agree by (4), their degeneracy flags agree with the underlying map, and their special basic ghost is the same P_Gamma. Its generic localization is the same generic ghost. Choose charts etale locally, and compare their generic lifts by a character P_Gamma^gp→K^*.

For each node rho_e the character has valuation zero. For a node smoothed generically this follows from t_e=u_e alpha(rho_e), since both u_e are units. For a persistent node, use the same underlying branch coordinates on the two extensions. A comparison of branch lifts has unit factors a,b with a x=x, b y=y, and its product is the base smoothing comparison. On the persistent node section x=y=0 both factors have residue EXACTLY 1: restrict a x=x to the smooth x-branch to get a(x,0)=1 and restrict b y=y to the y-branch. Their product comparison is therefore precisely the ratio of the two R-units u_e. A merely nonzero residue in K would not suffice to deduce valuation zero. The calculation is intrinsic under changing branch coordinates, which changes both smoothing units by the same product. Thus the character on rho_e is an R-unit also for persistent nodes; no valuation of the identically zero smoothing function is used.

The rho_e generate P_Gamma^gp by the rooted-tree argument of Section 4. Hence every value of the generic chart-comparison character is in R^*. It extends uniquely and identifies the two base log structures and their node log curves. Finally the two target maps differ locally by a unit which is one generically. R-flatness of C gives that it is identically one. This proves unique extension of the specified generic isomorphism. All the arguments commute with further extensions of traits.

Here is why these trait statements prove actual properness of the algebraic family functor. Its finite-presentation diagonal and forgetful map have already been represented by the explicit charts. Failure of closedness of either the diagonal or the image of a base change of the forgetful map is witnessed, after finite-presentation descent, on a finite-type complex scheme. In an etale chart take a point of the boundary of its constructible image and a normalized curve arc meeting that image generically; the existing curve-arc/valuative criterion gives a DVR. Existence after finite extension of that DVR puts its special point in the image, contradiction; uniqueness does the same for the diagonal. A finite extension does not change this conclusion about the image of its closed point. Thus the forgetful morphism is separated and universally closed, and finite type makes it proper. This is a direct verification of the finite-type valuative criterion, not an appeal to a missing log-stack properness theorem. Choose an etale refinement U of the ordinary framed base on which the finitely many node/branch charts used in Section 4 are labelled. The open gauge-chart gluing in that section gives a SCHEME L_U. It is now proper and quasi-finite over U. The actual thm-proper-quasi-finite-is-finite, with its scheme-level Zariski Main proof, makes L_U finite over U. On overlaps these are the actual same log-map functor, so their finite coordinate algebras carry their actual descent cocycle. Finite algebras descend faithfully flat; their relative Spec represents the descended algebraic space. Thus the forgetful map is finite and representable, and its pullback to the ORIGINAL framed base is a scheme. No assertion that arbitrary schemes descend to schemes is used before this finite-algebra argument. Its composition with the ordinary proper stable-map stack is proper. If the ordinary provider is presented as [R/G], with its actual GL or centrally rigidified PGL group G, its finite pullback L_R is an actual finite scheme over R and inherits the SAME G-action by functoriality. Therefore the log stack has the actual global framed quotient [L_R/G]; no extra central G_m stabilizer is introduced. This is the quotient interface needed for the main author's Chow/cone construction. Representability and the ordinary DM property were proved in Section 4, completing the claimed proper finite-type DM functor.


## Inline proof annex 2

#### 1. Exact target and numerical data

Let Y→T be a projective finite-type complex family, supplied with finitely many line bundles and sections (L_j,s_j), j=1,...,r, and finitely many specified tensor-product isomorphisms between them and pullbacks of corresponding base lines with sections. The isomorphisms include their actual unit coupons and satisfy their stated cocycle relations. On the locus in question they present the target log structure: etale locally it is the associated monoid algebra of these generators and relations, with the given sections as structure functions. Examples are a regular semistable total space, its SNC central fiber components and a transverse SNC outer divisor; for a one-parameter degeneration the central relation is tensor_j O(Y_j)=p^*O_T(0), with product of the canonical sections equal to the base parameter. Triple intersections are allowed. A finite toric chart presentation with these actual line-and-section descent data is also allowed; their existence is an explicit target hypothesis, not an inference from a tropical picture.

Fix genus zero, ordered markings, a fixed nonnegative contact vector at each marking, a fixed total relative stable-map class (or an open-and-closed union of the fixed-degree ordinary class components), and its degree E with respect to a fixed relative ample A. The ordinary relative stable-map stack is proper and finite type over T. To obtain this from the actual smooth-target supplier, embed Y into P^N_T and impose its finitely many ideal equations in the ordinary P^N stable-map stack times T: the same finite direct-image complexes represent those equations on all bases. It is a closed substack, hence proper. Stability is unchanged by the closed target embedding. The chosen class components are retained as specified, not inferred from the degree alone.

For each graph use heights e_(v,j), node rho_e and the base log generators delta_l. Impose the vector edge relations and every target/base monoid relation. A slope vector can have mixed signs: write each relation positively as e_(w,j)+max(−c_(j,e),0)rho_e=e_(v,j)+max(c_(j,e),0)rho_e. The local target generator is expressed using the corresponding x-branch for a positive slope and the y-branch for a negative one. No negative element is inserted into a monoid merely by writing a group equation. Set a height to zero for a component outside its boundary divisor. Take the integral image, torsion-free group, sharpening and saturation exactly as in the smooth-pair proof. Retain the raw torsion for its finite unit choices. Only admissible presentations are used: their local target monoid maps to the node/mark monoids must lie in those monoids, rather than just their groups. These are finitely many explicit inequalities for the finite generator list.

#### 2. Actual charts on nilpotent bases

Use the same parameter scheme t_e=u_e chi^(rho_e). For each base generator with prescribed structure parameter b_l add its unit u_l and equation b_l=u_l chi^(delta_l); this records the actual morphism from the target's base log structure. Do not set those units to one before taking the chart quotient.

Each target generator gives its actual ghost line with section (L_(m,j),s_(m,j)). Represent its isomorphism to (f^*L_j,f^*s_j) by the two-term direct-image kernel scheme, its isomorphism open and its section-equality equations. Impose also the tensor-product compatibilities: the product of the phi_j must equal the specified target/base coupon, as a map between the corresponding line bundles. Their equality is again an actual degree-zero section equality in a finite nonnegative direct-image complex. Thus this is a finite-presentation scheme over the monoid/node-unit chart on every test ring. Negative degrees of f^*L_j are allowed; there is NO claim that its H^1 vanishes.

Near an actual object, M_j=L_(m,j)^vee tensor f^*L_j is trivial on its genus-zero fiber, hence H^1(M_j)=0 and H^0(M_j)=1. Exactly the evaluation/base-change argument of the pair proof makes pi_*M_j a line and pi^*pi_*M_j→M_j an isomorphism nearby. Choose one additional smooth section of the domain in a root component and a frame of f^*L_j along this section. The value of phi_j there is an invertible scalar lambda_j and determines phi_j everywhere. Its character under a base-chart change is the negative root height −e_(root,j). This assertion remains true when s_j pulls back identically to zero: phi_j is still a line isomorphism with a nonzero unit coupon. Tensor relations constrain the lambda_j by their actual product equations.

Since the domain graph is a tree, all heights are root heights plus sums of node rho_e with their integer slope vectors. Hence the group of the basic monoid is generated by the node generators, root heights and prescribed base generators. The unit variables u_e, lambda_j and u_l carry these characters, with the signs just specified. Their character map onto P^gp is surjective and P^gp is free. Smith normal form therefore gives the exact Laurent-monomial gauge quotient as in the pair proof; no arbitrary reductive quotient theorem is needed. It is important to keep the lambda_j when every component lies in a boundary divisor: in that case the rho_e alone need not generate P^gp.

The common-face overlap argument is identical, now preserving the named target and base generators as well as the node flags. Any monoid automorphism fixing all these elements is the identity. Units, tensor coupons and phi's transport by their actual Laurent equations. Consequently the quotients glue to a scheme over a framed ordinary map chart, and descend to a representable algebraic-space morphism over the ordinary DM stack. Its charts and its canonical map to the Artin cone [Spec C[P]/T_P] are retained BEFORE the gauge quotient, equivariantly. The latter supplies the actual type/face base needed for the main author's cone operation; it is not a claim that the toric cone is smooth.

#### 3. Finite types and finite geometric fibers without a nef boundary assumption

Choose C such that L_j tensor A^C and L_j^vee tensor A^C are generated relative to T for every j; relative Serre generation on the projective target gives one C for this finite list, locally on a finite affine cover of T. For a geometric component with A-degree E_v this gives

    |deg_v f^*L_j| <= C E_v.                                  (6)

The inequality also holds on contracted components, with both sides zero. Thus no nefness of L_j or constancy of a component's boundary map is used. Cutting an edge of the tree gives the exact signed slope in the j-th coordinate:

    c_(j,e)=sum_(v on one side) deg_v f^*L_j
                         −sum_(markings on that side) a_(i,j). (7)

It follows that |c_(j,e)|<=CE+sum_i|a_(i,j)|. The stable underlying graph has the same bound from ample degree and marked stability as before. There are finitely many target strata, finitely many bounded integer vectors (7), and finitely many tensor relations. Hence only finitely many basic monoids occur. No enumeration of all effective homology splittings is needed. The finite kernel schemes therefore give finite type globally.

For a fixed geometric map, on a normalization component P^1 each proposed logarithmic normal divisor is prescribed by its signed flags. If its degree differs from deg f^*L_j, there is no isomorphism; otherwise any two such meromorphic line sections differ by one nonzero scalar, since their ratio has zero divisor on P^1. This argument includes a NONCONSTANT map into the boundary: its normal line need not be trivial, but its prescribed divisor determines it on P^1 and the ratio is still constant. At nodes the scalar equations are the same finite multiplicative equations as the raw graph relations, including the specified target/base tensor relations. Dividing by chart characters of the saturated torsion-free group leaves precisely a torsor under the characters of the finite raw torsion. Thus the fibers over a fixed ordinary map are finite. This proves quasi-finiteness; no set-theoretic finiteness is used in place of the nilpotent scheme charts.

#### 4. Trait existence with all target relations

Apply ordinary stable-map properness first. For each j, take the GENERIC log map's local normal unit in a local frame of L_j; it exists even where f^*s_j is identically zero. The monomial lemma on the actual total nodal curve gives pi^n x^c times a unit at a node, and its smooth/marked versions. Do this for every j. Multiplication of normal units adds their generic ghosts and vertical valuations. Therefore every specified tensor relation gives the corresponding equality of these pairs and of the residual unit coupons: it holds generically and extends as an equality of regular units by R-flatness. At a triple target point this is the same generator-by-generator argument; no new kind of domain singularity is introduced, since the domain still has only nodes.

Include the prescribed base pairs (generic base ghost, valuation of its parameter), all vertex and node pairs and (0,1) in the auxiliary sharp saturated monoid. A generator with generic ghost zero has nonnegative valuation because its actual section or smoothing parameter is regular. The pointed-cone argument of the pair proof is unchanged. Negative vertical coordinates on NONZERO generic ghosts are allowed, so the target's base generator need not be shifted or reparametrized. In particular one never changes a fixed target-base lift just to force a positive chart coordinate.

These pairs and unit coupons construct an auxiliary actual log extension. Replace it by the ABSTRACT saturated special graph presentation, not its valuation image. Use the finite integer relation matrix, now including all tensor/base relations, to remove relation-unit errors; Smith normal form reduces this to finitely many unit root equations. After finite trait extension it gives a chart of the abstract basic monoid mapping into the auxiliary log structure. Saturation extends that map in its EXISTING torsion-free group. The resulting associated log structure and local map formulas give a basic extension with all specified target/base coupons intact. Its generic face localization is the original basic presentation; hence the original generic object, including its target-base morphism, is recovered.

#### 5. Uniqueness, finiteness and the framed quotient

The underlying map extends uniquely by its ordinary proper separated supplier. Two log extensions then have the same signed slopes (7), boundary flags and abstract special monoid. Compare their generic chart lifts. Each node character ratio is an R-unit by the actual xy=t smoothing-unit argument in the pair proof; at a persistent node the branch comparisons have residue exactly one, not merely a nonzero element of K. Each root-height character ratio is an R-unit by evaluating the two target normal UNIT coupons at the same smooth R-section in its root component, with the same frame of the pulled-back L_j. Those coupons are units even when the target section vanishes identically. The ACTUAL prescribed base lift is fixed; the comparison of the two chosen charts on its delta_l is the ratio of their two R-unit coupons u_l, hence again an R-unit. It need not be the identity before those coupons are included. These characters generate P^gp. Thus the comparison is an R-unit character on all of P^gp, extends uniquely, and identifies both base log structures, node charts and phi_j. The latter equalities hold on the whole curve because it is R-flat and hold generically. Their tensor compatibilities are already retained. This proves unique extension of every specified generic isomorphism.

The finite-presentation, scheme-over-framed-chart and curve-arc argument now proves properness exactly as in the smooth-pair proof. After an etale refinement of the ordinary framed scheme base where node/branch charts are labelled, the open gauge-chart gluing gives a SCHEME. The forgetful morphism there is proper quasi-finite and is finite by the actual SCHEME theorem. Its finite algebras then descend to the ORIGINAL framed base, using the actual functor isomorphisms on overlaps. Thus no general scheme-descent or algebraic-space Zariski Main theorem has been assumed. Thus the basic moduli is a proper finite-type DM stack, finite and representable over the ordinary relative stable-map stack, with an actual global framed quotient obtained by pulling back its existing GL/PGL presentation. This gives the family/quotient supplier for the main author's intrinsic cone and Chow construction. No cone comparison or tropical multiplicity identity has been deduced merely from this properness.

#### 6. The two different normal-cone interfaces

(A) **Ordinary comparison.** Blow up X times A^1 along D times {0}, and use ONLY the central log divisor X_0 union Y and the base origin. Then the generic target is ordinary X with trivial target log; Y=P_D(O direct-sum N) has only its gluing divisor D_0 as log boundary on this side. The outer geometric D_infinity is NOT added. The central relation L_X tensor L_Y=p^*O(0), together with the given class/marking data, is the finite DF presentation just proved. This is the proper functor for the ordinary-to-relative comparison.

(B) **Relative comparison.** For a degeneration of the pair (X,D), retain the transported outer divisor as an additional DF object. The generic target is (X,D), rather than ordinary X. Its central relation is the same and its outer relative contacts are retained. This is a DIFFERENT family of functors. The proof above includes it, including semistable SNC models with triple points and rational boundary strata whenever their actual finite DF target presentation is supplied.

In both cases all nilpotent families, actual base log morphisms and target tensor coupons are retained. A later non-SNC or punctured target would require its separately typed local monoid and unit presentation; this artifact does not silently supply it.

## Inline proof annex 3

#### 1. Actual local lifts, including maps whose image lies on D

Work on an affine open of C mapping into a target chart with coordinates (z,w), D=(z=0). Log-map data writes the logarithmic pullback of z as a specified monoid element times a unit a. The prescribed ghost/domain thickening already supplies that monoid element on C'. Units lift over a square-zero extension: lift a to any section a', and its inverse lifts because a'b'=1 modulo J and 1+j has inverse 1−j. Lift the ordinary coordinate w using smoothness (or the étale coordinate presentation). The pair of those lifts gives a local log map. This remains true if the image of the monoid element is zero or a zero divisor in O_C: we lift its *unit factor in the log structure*, rather than divide an underlying vanishing function by zero.

At a node uv=t the log-domain relation has already been lifted, so the target ghost pullback is a well-defined section of the node monoid and its unit factor lifts in precisely the same way. At a relative marking the same argument uses the marking generator. Thus the construction neither suppresses the node relation nor replaces logarithmic maps by ordinary maps with a formal tangency slogan.

#### 2. Differences and their exact sheaf

For two local lifts with the same ghost and domain data, the quotient a'_2/a'_1 is 1+j_z, j_z∈π*J, while the difference of their w coordinates is j_w∈π*J. Since J²=0 these pairs add. On the underlying map this is the derivation

δ(z)=f*z ·j_z,   δ(w)=j_w,

and on the log coordinate it records δ(log z)=j_z even when f*z vanishes. Hence the correct tangent sheaf is the locally free logarithmic tangent bundle generated by z∂_z and ∂_w, pulled back to C. It is not the submodule of ordinary derivations recovered merely by multiplying with the possibly vanishing f*z. That latter multiplication could lose the normal logarithmic deformation and would give a false obstruction theory along degenerate components.

If a target transition is z'=g(z,w)z with g a unit, its logarithmic differential satisfies δ(log z')=δ(log z)+δ(g)/g; the w transition uses the usual chain rule. These are exactly the transition matrices of T_X(−log D). Thus the local difference modules glue to f*T_X(−log D)⊗π*J, not just to vector spaces of the correct dimension. Étale target changes preserve the coordinate lifting and these transformations.

#### 3. The obstruction cocycle and sufficiency

Choose a finite affine cover of the projective curve whose intersections are affine. Local lifts exist by §1. On overlaps their differences are sections d_ij of the sheaf in §2, with d_ij+d_jk=d_ik because the square-zero difference law is additive. Changing the local lift on the ith open changes d by a Čech coboundary. Consequently it defines a canonical class in H¹ of that sheaf. If the class vanishes, choose local adjustments killing d_ij; the adjusted maps glue, including their monoid/unit maps, because log structures are sheaves and all target transition rules were retained. Conversely a global lift makes that cocycle zero. Differences of global lifts are precisely global sections, proving the torsor statement. The affine Čech complex computes the cohomology; the curve has no higher coherent cohomology beyond degree one.

This construction is natural for homomorphisms of J and compatible with base change, since every coordinate formula and the additive cocycle pull back. It also supplies the actual obstruction morphism: take the universal log differential of the target coordinates, compose with the domain/base differential, and apply the trace adjunction on the nodal universal curve. The local calculation just made identifies the resulting obstruction class with the explicit cocycle. Thus one does not infer a POT from matching dimensions alone.

#### 4. Family perfectness and the two-term complex

Let π:C→S be a projective flat nodal family and F=f*T_X(−log D), a vector bundle of rank two. The completed ordinary stable-map supplier's curve cohomology/base-change and all-base trace construction apply to **any** vector bundle on this nodal family; they do not depend on its being f*T_X. Choose two relatively ample sections with no common fiber zero after shrinking S. The two resulting affine opens and their affine intersection give a Čech model computing Rπ*(F⊗π*J) in degrees 0 and 1 after every affine base change. The proper perfect pushforward construction then gives a locally finite-free two-term representative for Rπ*F, functorially up to quasi-isomorphism. Its dual has amplitude [−1,0]. The trace adjunction of §3 identifies its H⁰ and H¹ comparison maps with the actual tangent and obstruction class. This proves the fixed-log-domain relative POT interface on an algebraic atlas, when that atlas of log maps is constructed.

The intrinsic-cone and zero-section operations can consequently be applied using the same already constructed Chow/POT machinery once the appropriate algebraic log-prestable base and proper basic-map stack are supplied. This last qualification matters: a perfect complex and an explicit infinitesimal lifting theory do not by themselves construct that stack, its fundamental cone over the logarithmic base, or the degeneration/gluing identity.

#### 5. Exact virtual-rank check for the target consumers

For a smooth anticanonical pair, c₁(T_X(−log D))=−K_X−D=0. In genus zero the fixed-domain Euler characteristic of F is therefore two. The marked logarithmic-curve contribution for n total marks is n−3, so the required absolute expected dimension is n−1. In particular:

* one maximal-contact boundary mark gives dimension zero;
* two boundary marks give dimension one, removed by a point constraint on D;
* one interior mark plus d labelled boundary marks gives dimension d, removed by ψ₀^{d−2} and the interior point class of codimension two.

These agree with the actual relative invariant and descendant definitions. The last rank matches the ordinary stable-map descendant dimension for β·D=d, but equality of ranks is not used to infer equality of virtual cycles. That equality still needs the normal-cone virtual degeneration construction isolated in the companion file.


## Inline proof annex 4

#### 1. Underlying data and admissibility

Let (X,D) be a smooth projective complex surface with smooth anticanonical divisor and let f:C→X be a genus-zero stable map, with its labelled relative and interior markings. Fix its dual tree Γ and a contact/degeneracy type. A vertex is nondegenerate if its component does not map into D. Every degenerate component is contracted to a point of D, because D has elliptic connected components. For each relative marking fix its positive contact; interior markings have contact zero.

Write q_e for the base smoothing generator at a node e. Write e_v for the generic target-boundary degeneracy at a component v, with e_v=0 at nondegenerate vertices. Orient an edge with nonzero contact toward increasing degeneracy and write its contact as c_e>0. The ghost relations are

e_w=e_v+c_e q_e                                                     (1)

for an edge v→w. A zero-contact edge has e_w=e_v and its independent q_e is retained. Let M be the integral image of the monoid generated by these symbols with (1), killing its torsion and then sharpening where necessary; let P be its saturation inside its torsion-free group. The type is admissible when its generators admit a real nonnegative height assignment, with every node smoothing and every required positive degeneracy strictly positive and no nonzero unit. Thus P is sharp fs. Saturation is taken **inside the existing torsion-free group**, not by adjoining fractional elements outside that group.

In addition require the actual divisor matching: on each nondegenerate normalization component, the zeros of f*D occur exactly at the specified relative marks and distinguished nodes, with the prescribed contact orders. On a degenerate component the signed divisor of contacts (positive at boundary marks and on edges to higher degeneracy, negative on edges to lower degeneracy) has degree zero. Along a zero-contact node neither meromorphic normal section has a zero or pole. These are explicit compatibility conditions on the fixed type; balancing alone in an unrelated affine picture would not be enough.

At least one vertex is nondegenerate whenever the curve class is nonzero, since no rational component maps nonconstantly to D. Set d=D·β>0. Cutting any edge and summing its divisor degrees on one connected side gives

signed c_e = degree(f*O_X(D) on that side)−sum(relative contact orders on that side).

Every component degree is nonnegative and their total is d; the total marked contact is d. Hence |c_e|≤d. For a fixed underlying stable map and fixed relative contacts, only finitely many edge contact types are possible. This is the required genus-zero contact bound; no nefness of D on all curves is presumed.

#### 2. Local normal sections exist and have only scalar ambiguity

Choose a target normal frame near each image point of a degenerate component and local branch parameters at nodes. At a nondegenerate component the actual Cartier section f*D fixes its meromorphic normal section and all nonzero leading coefficients at its distinguished points. At a degenerate component the normal line is the constant fiber N_{D/X}|p, hence trivial. The prescribed degree-zero divisor on P¹ is the divisor of a rational function; in a coordinate with one point at infinity an explicit product ∏(t−t_j)^{n_j}, with Σn_j=0, supplies it. It is unique up to one nonzero scalar λ_v, since a rational function on P¹ with zero divisor has neither zeros nor poles and is constant. Thus no infinite-dimensional choice of functions is left. Normal frames at a common target point differ by a fixed scalar and only change the resulting nonzero gluing coefficients.

At a node e, a log curve chart has branch generators u,v and relation log u+log v=q_e+log ρ_e for a unit ρ_e∈C*. Target normal compatibility between the adjacent sections is

λ_w κ_{w,e}=ρ_e^{c_e} λ_v κ_{v,e},                         (2)

with nonzero fixed leading coefficients κ. Omit λ for nondegenerate vertices, whose section is already fixed. For c_e=0 this reads equality of their normal unit values. These equations follow directly from the target coordinate pullback e_v+c_e log u and the node relation; changing branch parameters changes κ and ρ compatibly. Conversely these node equations and the marked contact factors glue the local monoid/unit maps, since target coordinates differ by units and the units just matched are their transition data.

There is at least one solution of the unit equations for each compatible admissible type. Contract zero-contact edges between degenerate vertices; their equations merely propagate a scalar across a tree and create no cycle condition. Remove a leaf of the remaining tree. If it is nondegenerate its scalar is fixed, and (2) is solved by taking a c_e-th root in C*. If it is degenerate choose its scalar to match the already chosen neighbor, or solve for the edge root. Iteration reaches the final vertex, whose scalar is either free or is the prescribed nondegenerate scalar. Since at least one nondegenerate vertex exists, any final global scaling is fixed there. All contact-root equations are solvable over C. This also proves there is no additional hidden continuous gluing condition.

#### 3. Quotient by changes of base chart: finiteness, not a spurious torus

Before changing base charts, the solutions of (2) form a torsor under the diagonalizable group with character group

L=(⊕_e Zq_e ⊕_{v degenerate}Ze_v)/(e_w−e_v−c_e q_e).

This statement is literal: divide any two unit solutions to remove κ; the remaining multiplicative equations have exactly these exponent rows. A chart change of the minimal base log structure is the torus Hom(P^gp,C*). Its action multiplies each node and vertex unit by its character on q_e and e_v. Since these elements generate L and its torsion-free quotient P^gp, that torus is exactly the identity component of Hom(L,C*), not a larger or smaller ad hoc rescaling group. Its action on the solution torsor is free: a character fixing every q_e and e_v fixes all of P^gp.

Therefore the set of isomorphism classes of minimal saturated enhancements of the fixed map/type is a torsor under

Hom(torsion L,C*),                                                        (3)

a finite set of size |torsion L|. No extra automorphism acting trivially on the fixed underlying marked map remains. Saturation introduces no additional continuous unit parameter, because it does not enlarge P^gp. The statement allows finite nontrivial choices of enhancement; it does not incorrectly identify all logarithmic enhancements with the same underlying ordinary map.

For completeness the group assertion does not require a noncanonical splitting: over C, restriction of characters to torsion L is surjective (extend characters through a finite presentation by extracting roots), with kernel Hom(L/torsion L,C*). The latter is the minimal base-chart torus. The quotient is therefore exactly (3). Any automorphisms of the underlying stable map act on this finite set and are handled by that ordinary finite stabilizer; the assertion about no extra automorphism concerns the kernel over the fixed underlying map.

#### 4. The common-degeneracy star and its gluing degree

The local case appearing in a two-component degeneration has one common degeneracy e and k node smoothings q_i with relations

e=w_i q_i,  i=1,…,k,

where w_i>0 are the node contact orders. Put l=lcm(w_1,…,w_k). Its saturated torsion-free group has primitive generator q with e=lq and q_i=(l/w_i)q. After fixing the unit for e, the raw root choices are ∏_i μ_{w_i}. The remaining minimal base-chart changes have u(q)∈μ_l and act by

ζ↦(ζ^{l/w_i})_i.

This map is injective because gcd_i(l/w_i)=1. Thus the number of enhancement choices is

∏_i w_i / l.                                                             (4)

The integer l is separately the primitive lattice index for the common degeneration parameter e. Multiplying that base index with the actual enhancement degree (4) gives ∏w_i. It is not an extra factorial: branch or edge-label automorphisms are still divided separately. This derives the exact contact-weight factor used by the normal-cone gluing reduction from the actual monoid and units. For primitive contacts w_i=1 it is one, as needed by the ordered-root period correction.


## Inline proof annex 5

#### 1. Scheme-test operation and its strict model

Let f:M→B be of relative DM type and locally finite presentation, with E→L_{M/B} a perfect obstruction theory in degrees [−1,0]. Assume that for every finite-type scheme T→B the pulled-back map on M_T is its actual fixed-domain obstruction theory, compatible with all further base changes. This hypothesis holds for the log-map Čech construction: the pulled-back universal curve is flat nodal, its vector bundle is f*T_log, its derived pushforward commutes with base change, and local unit-lift discrepancies give precisely the same cocycle after every base restriction. Ghost maps are part of the prescribed log-domain datum, so there is no unproved ghost-lifting assertion in that statement.

For an integral scheme Z→B, embed a scheme presentation of M_Z as a closed subscheme of P smooth over Z. On an affine torsor replacement the relative POT can be put in the actual strict form

[F^∨→Ω_{P/Z}|M_Z] → [I/I²→Ω_{P/Z}|M_Z],

with the degree-zero map the identity and F^∨→I/I² surjective. Here F is a vector bundle on M_Z; it need not extend to P. The construction is the explicit affine strictification from the completed ordinary stable-map supplier: lift Ω→h⁰E into E⁰, split the resulting surjection E^{-1}⊕Ω→E⁰, take its projective kernel, and subtract the lift of the chain homotopy to make degree zero the identity. Projectivity on the affine replacement gives every lift; h^{-1}-surjectivity gives the conormal surjection. It does not assume a global strict ambient presentation exists before that replacement.

The actual cone embedding is

C_{M_Z/P}→F,

from Sym(F^∨)→gr_I O_P. Define

f_E^![Z]=0_F^![C_{M_Z/P}],                                                   (1)

with the ambient relative dimension included. If E has virtual rank r and Z has dimension k, the result has dimension k+r. For smooth f, F=0 and (1) is ordinary smooth pullback. This fixes its dimension and normalization.

No absolute smoothness of Z is needed here. For the fundamental cycle of each integral Z, the ambient P is smooth over an integral base and its components are integral after localization. Its Rees deformation has the expected pure dimension: every irreducible component of its central cone is a codimension-one component of the flat Rees family, so the cone cycle has dimension dim P, with its actual scheme multiplicities. This is the only purity point for which the ordinary-source argument used a smooth base. Arbitrary cycles on a reducible base are handled one integral cycle at a time.

#### 2. Independence is an actual cone comparison

Compare two relative embeddings using P×_Z Q. A map from the center to smooth Q extends étale locally to P; its conormal sequence identifies the extra normal-cone directions with the pulled-back relative tangent bundle of Q. Two choices differ by the corresponding derivation, exactly the tangent translation quotiented by the intrinsic cone. Triple products give the same cocycle because these derivations add. This constructs the actual intrinsic **relative** cone and its immersion in h¹/h⁰(E^∨), not just a rank comparison at points.

Changing the strict model adds or removes an acyclic vector-bundle pair; its cone/Gysin operation is unchanged by bundle homotopy and the zero-section identity. The published lemmas `lem-gysin-specialization-bivariant-and-base-change`, `lem-refined-gysin-commutation-and-composition`, and `lem-zero-section-gysin-and-excess-vector-subbundle` apply to these exact conormal surjections after **every** base change. Their hypotheses are not restricted to a smooth integral base. Thus (1) is independent of the affine torsor, embedding and strict model.

For global DM quotient charts use the completed ordinary source's global construction: framed stable-map spaces give GL-framed quotients, full-rank good pairs produce quasiprojective scheme approximations in a stable Chow range, and the incidence-complement affine torsors have injective Chow pullback by the projective-bundle/localization proof. Apply the same cone comparison on a common affine torsor for every complex being compared; push down through those injective comparisons and the stable range. If a base is presented by an Artin cone, do the same with its torus frame. The relative cone itself and its cycle glue by the preceding product-embedding cocycle. This is not an inference that equality of Chow classes on an étale atlas implies global equality.

#### 3. Rational equivalence and the bivariant identities

On the strict presentation, (1) is the composition of smooth pullback to P and the actual published operation c(M_Z,P,F). The latter is defined by its Rees cone and zero-section Gysin after every base restriction. Its published proof establishes proper, flat and Cartier compatibility through the induced proper maps of blowups and double-deformation Cartier intersections. In particular it does **not** identify the normal cone after a nonflat base change with an ordinary tensor product of the old normal cone.

Therefore these compatibilities hold for (1). To see rational equivalence explicitly, normalize the closure of the graph of a rational function on an integral test scheme. Its fibers over 0 and infinity represent its principal divisor. Apply the Rees construction to that proper family and use the commutation of the two Cartier intersections (the rational-function fiber and cone specialization). The resulting two virtual cycles differ by the divisor of that same family and hence are rationally equivalent. Proper compatibility descends this equality to the original test scheme. Consequently (1) extends linearly to an operation on its actual Chow group, not only on a chosen list of cycles.

For a proper map h:Z'→Z of test schemes the formula is

f_E^! h_* = h'_* f_{E'}^!;

for flat h it commutes with h*, and for a regular Cartier inclusion i it commutes with i^!. These statements follow in the strict model from the cited c operation and hence survive the common-torsor comparisons of §2. Universality of the actual log POT ensures the complexes after restriction are the obstruction theories just used, not merely quasi-isomorphic bundles with an unrelated map to a cotangent complex.

#### 4. Proper modifications of the logarithmic base

Let b:B'→B be a proper toric subdivision, or its smooth finite toric root-stack chart, on a log-prestable chart, and let M'=M×_B B'. In an integral chart the fan subdivision is proper and is an isomorphism over the dense torus, so b_*[B']=[B]. Its local projective construction is a subdivision by normalized monomial blowups; the chart description glues along faces. A finite toric root-stack chart is proper and is an isomorphism on the dense torus as a stack, so its fundamental-cycle pushforward is also one. This assertion is a rational-stack pushforward, not the coarse degree of the covering affine coordinate map. Formula (1) and proper compatibility consequently give

b'_*[M',E']^vir=[M,E]^vir.                                                  (2)

Here the virtual cycles mean the cone operation on the corresponding base fundamental cycles. The basic-map morphism to its log-domain base is strict. Consequently use the actual ordinary fiber product in this base change (and its associated pulled-back log data), retaining nilpotent multiplicities; do not replace it by the reduced normalization of its source. For example at a root t=r^n over t=0 the length-n fiber and its μ_n quotient must both be kept. The source map M'→M need not be an ordinary birational modification on a ghost stratum; (2) is derived from the **base** pushforward identity and the universal cone operation. This avoids the false shortcut that a log blowup of a log point has degree-one geometric fibers.

The construction is independent of the fan subdivision, since any two finite subdivisions have a common refinement and proper compatibility applies twice. For a fixed curve-class filtration, boundedness supplies only finitely many relevant types; the same argument then passes coefficientwise to the prescribed completion. No analytic convergence is asserted or needed.

#### 5. Cartier decomposition supplies the actual multiplicities

On an integral toric base chart Spec C[P], let the target smoothing parameter be t=uχ^ρ, u a unit. After a fan subdivision resolving the relevant chart, a toric boundary divisor indexed by a primitive ray ν has multiplicity

m_ν=ν(ρ)

in div(t). This is the discrete-valuation order of the monomial, not an assigned tropical weight. Hence in Chow

[t=0]=Σ_ν m_ν[D_ν].                                                        (3)

Apply the operation (1) to this exact Cartier cycle identity and use its Cartier compatibility. The virtual special fiber is the weighted sum of the corresponding virtual type fibers. Monodromy of a labelled type is removed by its actual finite marking cover; pushing that cover down divides by the type automorphism order. The weights m_ν retain every Kummer/base index. Higher boundary intersections are already included in the proper type compactifications and are not counted again as extra Cartier components.

The global equality is obtained from the globally defined relative cone and its zero-section class: the local Rees families are the restrictions of the same smoothing-parameter Cartier operation and the same intrinsic-cone comparison of §2. The toric divisor cycles and their type normalization maps glue before Gysin; their generic multiplicities are exactly the valuations in (3). Global quotient/affine-torsor comparison then gives the equality in the rational Chow group of the actual DM map stack. There is no appeal to an étale-local equality of final Chow classes.

Thus the log-map decomposition step is constructed from an actual universal obstruction theory and an actual Cartier divisor identity. It is not assumed as part of the phrase “toric degeneration”.

