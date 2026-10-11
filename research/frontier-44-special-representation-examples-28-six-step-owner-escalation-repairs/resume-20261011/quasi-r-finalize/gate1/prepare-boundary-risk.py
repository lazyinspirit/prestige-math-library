from pathlib import Path
import json,hashlib
run='frontier-44-special-representation-examples-28-six-step'
base=Path('research')/(run+'-owner-escalation-repairs/resume-20261011')
out=base/'quasi-r-finalize/gate1'
axes=['empty','zero','one','degenerate','endpoints','nonempty-choice','iff-forward','iff-reverse']
# C means directly evaluated checked case; N is an actual excluded/nonexistent axis.
B={}
def rows(id,values):
 assert len(values)==8,id
 B[id]=[{'case':a,'status':'not_applicable' if v.startswith('N:') else 'checked',('reason' if v.startswith('N:') else 'evidence'):v[2:] if v.startswith(('N:','C:')) else v} for a,v in zip(axes,values)]
rows('def-balanced-triple-and-globalization-map',[
'Definition: V=0 forces M=L0=Linf=0; both intersection and residue are zero, so the reduction is the unique zero-group isomorphism and its basis is empty.',
'Definition: a zero element of the intersection maps to the zero residue; balancedness requires injectivity as well as surjectivity, so a nonzero zero-residue kernel element is excluded.',
'Definition: a stipulated singleton free integral residue basis has exactly one intersection lift by the reduction isomorphism; ambient dimension alone does not assert a free integral module.',
'Definition: if reduction has a kernel or misses a residue, it is not balanced and no globalization inverse is assigned.',
'N:The zero and infinity chart rings are algebraic membership conditions in this definition of reduction; no ordered-domain endpoint or analytic limiting value is asserted.',
'Definition: M,L0,Linf are supplied lattices; forming their intersections and the unique inverse on each residue chooses no additional representatives.',
'N:Calling reduction an isomorphism balanced assigns terminology; the separate free-residue-basis condition is retained, rather than giving a forward criterion that arbitrary lattices are free.',
'N:The definition does not infer balancedness from arbitrary proposed scalar extensions or bar-fixed residue representatives, so no converse lattice theorem is present.'])
rows('def-drinfeld-hopf-pairing-between-positive-and-negative-quantum-halves',[
'Definition: nu=0 makes the color scalar an empty product equal to 1 and D(1,1)=1.',
'Definition: unequal root degrees pair to zero, and bilinearity annihilates a zero vector. For indeterminate q every q_i-q_i^-1 is a nonzero field scalar.',
'Definition: n=1 gives D(E_i,F_i)=1/(q_i-q_i^-1), and n=0 gives the unit pairing.',
'N:Specializations where q_i-q_i^-1 or a quantum factorial vanishes are outside the rational-function-field normalization that defines D.',
'N:The simple-root Borel extension and homogeneous scalar transport assert no analytic endpoint or parameter-limit theorem.',
'Definition: D is prescribed by iota, the given half form and the finite color-degree product; its definition selects no dual basis.',
'N:The transported half form defines one normalized pairing; these displayed values are not an if-and-only-if characterization of arbitrary bilinear forms.',
'N:No claim reconstructs every pairing from selected generator values alone; the given half form and toral normalization remain inputs.'])
rows('def-integral-residue-lattices-of-the-negative-half-and-highest-weight-modules',[
'Definition: a zero root/weight component has zero integral and chart intersections, zero residue subgroup and an empty residue basis; componentwise inclusion still has zero kernel.',
'Definition: M_A intersect qL equals q(M_A intersect L) because q^-1 preserves M_A. Thus zero residue means exactly membership in qL_Z, giving the claimed injection without a division at q=0.',
'Definition: in degree zero of U^- the unit belongs to A,A0,Ainf, so L_Z has coefficient ring Z[q] and its residue is Z times the unit.',
'N:The definition asserts no freeness or balancedness of arbitrary integral intersections; a missing residue or nonfree integral subgroup is not replaced by a global basis here.',
'N:The bar residue chart uses Z[q^-1] while the zero chart uses Z[q]; neither is obtained by evaluating the Laurent unit q at an endpoint.',
'Definition: the intersections are specified, and pi_lambda(P)=P v_lambda is a supplied map; membership and projection involve no new representative selection.',
'N:The residue inclusion and the integral projection are defined maps with stated properties, not a forward equivalence characterizing arbitrary lattices.',
'N:No converse saying an arbitrary integral residue subgroup is the full rational residue is asserted; the distinction between Z and Q is explicit.'])
rows('def-lower-global-basis-of-a-quantum-highest-weight-module',[
'Definition: in a component with no crystal labels the balanced residue and intersection are zero, and the lower global family and all four coefficient spans are empty/zero.',
'Definition: G(0) is explicitly undefined; the crystal-zero symbol is not a basis label, although the linear globalization inverse sends the zero residue to the zero vector.',
'Definition: a component with one crystal label has one unique balanced lift, and the supplied basis theorem gives its A,A0,Ainf and Z spans.',
'N:A nonbalanced triple or a missing free integral residue basis is excluded by the invoked globalization theorem; bar invariance alone is not a replacement hypothesis.',
'N:The chart at zero and its actual bar chart at infinity are separate spans of these unique lifts; no numerical evaluation of a Laurent polynomial at q=0 is defined.',
'Definition: each G(b) is the unique inverse image of b under the supplied balanced reduction, so the lift definition adds no choice among candidates.',
'N:The basis assertions are inherited from the proved balanced theorem, not a forward characterization of all word-triangular bar-fixed families.',
'N:The text explicitly withholds the converse that bar-fixedness and a residue congruence alone establish balancedness or global freeness.'])
rows('def-the-bar-lattice-and-integral-lattice-of-a-based-module',[
'Definition, final four-axiom paragraph: M=0 and B empty give zero free integral/chart lattices, a unique zero involution and the empty crystal. All four based conditions hold vacuously.',
'Definition: psi(0)=0 and every lattice intersection contains zero. The rings A0/Ainf specify regular rational functions rather than a map sending the Laurent unit q to zero.',
'Definition: the trivial highest module V(0) has one basis vector; its fixed-bar chart spans have intersection Z times that vector, while its Laurent span remains A times it.',
'N:The bar and integral form are given; this definition asserts no nondegenerate Gram matrix, integral tensor action or automatic balancedness for arbitrary based pairs.',
'N:Zero and infinity name coefficient charts related by the involution, not analytic endpoint limits or equality of the two lattices.',
'Definition: M_A,L and psi are supplied, and L^- and E are obtained by image/intersection. The crystal suppliers retain their assumptions; no extra selection is made here.',
'N:The four based conditions define the data class and E names an intersection; they do not prove a forward tensor-globalization equivalence.',
'N:The definition explicitly separates M_A,L,L^- and E and does not claim that a basis-fixing bar forces arbitrary tensor balancedness.'])
rows('def-upper-global-basis-by-the-contravariant-form',[
'Definition: a component with empty lower basis is zero; its restricted dual/charts are zero, and the empty inverse-Gram system gives the unique empty upper family.',
'Definition: on every nonzero finite component the required form is nondegenerate, so its Gram determinant is nonzero in Q(q) before inversion; no specialized singular determinant is inverted.',
'Definition: in a one-dimensional component with form entry c nonzero, the unique field dual is c^-1 times the lower vector; integral perfectness is not inferred from c being a field unit.',
'N:Degenerate component forms are outside the required nondegenerate half form/polarization; the definition does not extend its inverse Gram family to a singular specialization.',
'N:Both dual charts are defined by separate form-membership conditions; equality with the lower infinity chart and analytic limiting identification are expressly withheld.',
'Definition: finite invertible Gram systems uniquely determine the upper vectors and adjoints from supplied labels; the restricted direct sum adds no new choice of basis.',
'N:Restricted form-duals and adjoint operators are definitions, not a forward assertion that lower integral lattices are self-dual.',
'N:No converse reconstructing arbitrary lower bases or identifying dual infinity charts with lower charts is stated.'])
rows('ex-canonical-global-basis-normalization-in-symmetric-type',[
'Step 1.1 and Example: n=0 gives F^(0)=1 and unit norms because both factorial/norm products are empty products equal to 1.',
'Steps 1.1 and 2.1: q is indeterminate, so the factorials and 1-q^2 denominator are nonzero field elements; the A2 Gram determinant is explicitly 1-q^2.',
'Step 1.1: n=1 has F^(1)=F and geometric factorial 1; its Drinfeld pairing still carries the separate factor 1/(q-q^-1).',
'N:The A2 inverse Gram calculation is over Q(q), so a specialization with q^2=1 is excluded; no unimodular Gram claim or singular inverse is asserted.',
'Steps 1.1 and 3.1: the rank-one sequence includes exponent zero and the displayed degree-two endpoint F_1^(2); the formulas supply their actual norms.',
'Steps 1.2 and 3.1: the two fixed mixed words have specified residues and unique balanced lifts; the two upper vectors are the unique inverse-Gram answers.',
'N:The example computes lower/canonical agreement in specified degrees; this is no forward equivalence between arbitrary canonical and upper families.',
'N:The upper inverse-Gram vectors are explicitly different from the lower ones, and their calculation is not a converse global-basis criterion.'])
rows('ex-lower-and-upper-global-bases-in-a-small-highest-weight-module',[
'N:The divided string is indexed by 0<=n<=m with dominant m>=0, hence always contains w0; an empty ambient highest string is outside this example.',
'Steps 1.1 and 2.1: all admissible d_mn are nonzero in Q(q); for m=2 the middle value is 1+q^2, so its field inverse exists although it is not an A-unit.',
'Steps 1.1 and 2.1: m=0 is the one-vector string with d_00=1; m=1 has both norms 1 and the two lattices coincide.',
'N:Specializations killing 1+q^2 are excluded from the field-level inverse-polarization example; no determinant-unit or root-of-unity dual basis is promised.',
'Steps 1.1 and 2.1: d_m0=d_mm=1, while the interior norm at m=2 is 1+q^2; top and bottom positions therefore agree in the two lattices.',
'Steps 1.1 and 1.2: every divided position and its diagonal form dual are explicitly prescribed; no new selection is used beyond the supplier assumptions.',
'N:The computations compare two given lattices; proper containment for m=2 and equality for m=1 are not a forward biconditional theorem.',
'N:Having the same crystal residues does not conversely imply equality of these A-lattices, as the middle quotient A/(1+q^2) explicitly shows.'])
rows('lem-homogeneous-dual-basis-sums-are-basis-independent-and-weightwise-finite',[
'Step 1.1: if a homogeneous component is zero its basis is empty and its coevaluation sum is zero. This differs from degree zero, which has the singleton unit coevaluation in step 2.1.',
'Step 2.1: Theta0=1 tensor 1 and positive degrees have a strict label transfer. Step 3.1 kills every component outside the finite acting-degree set.',
'Step 1.1: in a one-dimensional component replacing u by gu and its dual by g^-1 v leaves u tensor v unchanged.',
'N:A degenerate pairing is excluded by the D-perfectness supplier; evaluation outside the completion finite-support hypotheses is not asserted.',
'Step 3.1: the exact supplied finite tail bound makes every component beyond the fixed-total-weight bound act by zero.',
'Step 1.1: the bases are inputs, and the g/g^-1 calculation proves independence; no simultaneous arbitrary family of dual-basis choices is needed for the canonical tensor.',
'N:The lemma gives basis independence and a sufficient specified evaluation scope, not a forward equivalence that all possible evaluations must satisfy those hypotheses.',
'N:An invertible basis change proves the same tensor equality, not a converse implication from an unspecified action to component finiteness.'])
rows('lem-integral-crystal-residues-of-the-negative-half-represent-the-crystal-basis',[
'Step 1.1: the empty lowering word represents 1 in degree zero; step 2.1 gives its integer residue span. A degree with no labels has the empty integer sum and zero image.',
'Steps 1.2 and 2.1: clearing denominators of constant term 1 and regularity remove negative powers, so evaluation at q=0 produces integer coefficients without a singular denominator.',
'Step 3.1: a residue of norm 1 has integer coefficients with sum of squares 1, hence is exactly one signed crystal class.',
'N:Numerical specializations killing 1-q^(2n) are outside the formal localization used for the half form; the crystal limit uses denominators with constant term 1.',
'Steps 1.2 and 2.1: the endpoint q=0 is evaluated in the regular integral coefficient ring after negative powers are excluded, yielding the integer residue pairing.',
'Steps 1.1 and 2.1: each coefficient can be tested against one integral lowering-word representative; the actual vector has finite support, so no simultaneous infinite representative choice is required.',
'Step 3.1: norm 1 forces a single coefficient +1 or -1 by the integer sum-of-squares computation; no unsigned norm characterization is claimed.',
'Step 3.1: either signed orthonormal crystal class has residue norm 1, completing the stated signed characterization.'])
rows('lem-negative-half-reversal-preserves-integral-and-crystal-lattices',[
'Steps 1.1 and 1.2: reversal of the empty word fixes 1, and its square fixes that word as well.',
'Steps 1.1 and 2.1: reversal is linear and sends zero to zero; the simultaneous reversed-word Gram formula remains an equality when either word coefficient sum vanishes.',
'Steps 1.1 and 1.2: a one-letter generator and every divided power F_i^(r) are fixed, proving the atomic integral-form case.',
'N:The form is the prescribed formal nondegenerate half form and no scalar specialization is performed; no singular Gram inversion enters the reversal proof.',
'Step 3.1: commuting with psi transports preservation of the zero crystal lattice to its actual infinity bar lattice; these two chart memberships are kept distinct.',
'Steps 1.1 and 4.1: reversal is a prescribed word map, and its signed residue image is determined by norm 1 and involutivity; no new basis selection occurs.',
'N:The theorem states preservation by one explicit anti-involution, not a forward characterization of arbitrary crystal automorphisms.',
'N:Applying star twice supplies equality of preserved lattices, but does not assert an unsigned star-crystal converse; the signed scope is retained.'])
rows('lem-string-ideal-decomposition-of-the-integral-lattices',[
'Steps 1.1 and 2.1: a string tail beyond the finite support is an empty sum equal to zero; at n=0 the unrestricted tail recovers U_A^- itself.',
'Step 1.1: on u in ker e_i-prime all positive projector terms vanish and P_i u=u. Zero vectors have all zero string coefficients.',
'Steps 1.2 and 2.2: m=n=1 has empty factorial products equal to 1 and the only k=1 summand equals u, giving the shortest boundary-generation case.',
'Step 1.2: the q-factorials are nonzero over the formal field; part(iv) requires n>=1 and does not claim its boundary-generation identity at n=0.',
'Steps 1.2 and 2.2: k<n terms vanish, k=n supplies the first surviving term and k>m kills the admissible string; the Gaussian sum is finite and equals u.',
'Steps 1.1 and 3.1: the coefficients are prescribed by the integral projector, and the shifts identify the residue image; no arbitrary component decomposition is selected.',
'Step 2.1: membership in F_i^n U^- forces every string coefficient at l<n to vanish, giving the inclusion in the displayed direct sum.',
'Step 2.1: a sum of integral string positions l>=n lies in both U_A^- and F_i^n U^-; the reverse inclusion proves the asserted intersection equality.'])
rows('lem-the-drinfeld-hopf-pairing-is-nondegenerate-in-each-root-degree',[
'Step 1.1: a zero-dimensional root component has the unique perfect zero pairing; the degree-zero component instead pairs the two units with value 1.',
'Step 1.1: multiplying a finite perfect half pairing by nonzero d_nu^-1 leaves its Gram rank unchanged; homogeneity gives zero across nonopposite degrees.',
'Step 1.1 and Statement: the simple-root one-dimensional pairing is 1/(q_i-q_i^-1), and the n=1 divided formula agrees.',
'Step 1.1: the empty component is vacuously perfect; on nonzero components d_nu and the transported Gram determinant are nonzero formal field elements.',
'N:The normal-ordered Borel identities in step 2.1 are algebraic, with no ordered endpoint or numerical limiting pairing.',
'Steps 1.1 and 2.1: iota, d_nu and the Borel normal ordering are prescribed; the proof adds no choice beyond the cited half-form suppliers.',
'Step 1.1: finite-component nondegeneracy makes the Gram map injective, hence bijective in equal finite dimensions, giving perfectness.',
'Step 1.1: a perfect component pairing has an injective Gram map and zero radical, giving the stated equivalence with nondegeneracy.'])
rows('prop-global-bases-specialize-to-integral-weight-bases',[
'Step 1.1: a weight with no crystal labels has the empty free A-basis, so its component and every tensor fibre of it are zero.',
'Step 1.1: S=0 gives the zero fibre, while identical finite-rank assertions are expressly restricted to S nonzero. Step 2.3 treats vanishing geometric factorials only in field specializations.',
'Step 2.1: at q=1 in characteristic zero every divided-power factorial is a unit in Q[q] localized at q-1, and the actual fibre is the classical simple highest module.',
'Steps 1.1 and 2.3: a nonflat or root-of-unity base change still tensors the given free basis; singular factorials do not imply any simplicity or ordinary-generator comparison.',
'Step 2.2: the charts come from separate Z[q] and Z[q^-1] spans; no A-to-A0 map sends the Laurent unit q to zero.',
'Step 1.1: tensoring a supplied free global family is coefficientwise and selects no new lift; the inherited existence suppliers retain their assumptions.',
'N:The proposition asserts one-way preservation of a supplied free global basis under base change, not a forward criterion characterizing all specialized modules.',
'N:It does not infer a generic global basis, flatness or simplicity from a specialized free fibre; no converse deformation statement is made.'])
rows('thm-quantum-highest-weight-modules-deform-the-classical-weight-character',[
'Steps 1.1 and 2.1: a weight with no surviving global labels is the zero free component, and tensoring preserves its zero weight multiplicity.',
'Steps 1.1 and 1.2: zero weight components and zero kernel classes remain zero; the quotient is the integral lattice, which is only later extended to the field.',
'Steps 1.1 and 2.1: the highest component has the single surviving highest vector, whose normalized q=1 image spans the classical highest component.',
'Step 2.1: the characteristic-zero unit-parameter fibre is included; every quantum factorial evaluates to a nonzero factorial, so the local comparison divides only by R-units.',
'N:This theorem compares characters at q=1 and asserts no crystal-chart limit at q=0 or infinity and no root-of-unity endpoint simplicity.',
'Step 4.1 and C1 retain the inherited Choice of the grand-loop/local-comparison suppliers; finite component ranks and tensor fibres introduce no new selection.',
'N:Global-basis freeness and classical fibre comparison give the asserted deformation, rather than a forward equivalence characterizing arbitrary integral lattices.',
'N:The exact based-kernel quotient is an asserted presentation, not a converse reconstruction of generic highest modules from arbitrary classical characters.'])
rows('thm-the-weightwise-quasi-r-intertwiner-exists-and-is-unique',[
'Step 1.1: degree zero coevaluation is the singleton tensor unit; a zero positive-degree half component contributes the empty coevaluation sum 0.',
'Statement and step 4.1: negative-root components are 0 and the difference of normalized solutions has constant component 0, initializing the minimal-degree separation argument.',
'Step 5.1: n=1 gives exactly (q_i-q_i^-1) E_i tensor F_i, fixing the rank-one normalization.',
'N:The contractions use the generic perfect D pairing; a singular scalar specialization or nonperfect homogeneous pairing is not part of this completed-field theorem.',
'Step 6.1 and the completion hypotheses restrict evaluations to finite acting root degrees; no unrestricted infinite evaluation is obtained from the formal family.',
'Steps 1.1 and 4.1: basis independence defines the candidate, and the nonzero difference has a least root height in N; only finite-dimensional contractions are used, with supplier assumptions retained.',
'N:The claim constructs and uniquely normalizes a bar-coproduct intertwiner; it is not a forward equivalence with the differently scaled doubled-torus relation.',
'N:Uniqueness among normalized solutions is separate from generator verification and is not a converse assertion that unnormalized scalar multiples are canonical.'])
rows('thm-upper-and-lower-global-bases-are-dual-and-crystal-compatible',[
'Steps 1.1 and 2.1: an empty lower basis in a zero component gives the unique empty inverse-Gram family and zero dual/chart spans; their reduction is the zero-map isomorphism.',
'Step 1.1: every nonzero finite Gram matrix is invertible in Q(q) by the supplied nondegeneracy; its determinant need not be a Laurent unit.',
'Step 1.1: a singleton lower vector of norm c nonzero has unique dual c^-1 times it; the coordinate criterion gives its actual integral form-dual span.',
'N:A degenerate finite form is excluded by the normalized half-form/polarization premises; the theorem performs no singular numerical Gram inversion.',
'Steps 1.2 and 2.3: the module raising ratio is used only for n>=1 and the lowering ratio only for n<a; at the top/bottom the missing shift is zero, so no ratio with a zero quantum-integer denominator is used.',
'Step 3.1 and C1 confine Choice to the grand-loop/polarization suppliers; the finite inverse Gram matrices and their adjoints are uniquely determined.',
'Step 1.1: integral pairing with every lower basis vector forces every dual coordinate into A, hence membership in the displayed restricted dual A-span.',
'Step 1.1: a finite A-linear combination of the upper dual vectors pairs integrally with the lower lattice, proving the reverse coordinate-membership direction.'])
rows('lem-quasi-r-divided-power-integrality-on-based-lattices',[
'Steps 1.1 and 3.1: the empty highest tensor prefix is V(0), on whose generator every positive root component acts by zero; adjoining that tensor unit leaves the arbitrary-other-factor action unchanged.',
'Steps 1.1 and 1.3: the zero vector has zero orbit and zero acted components; the highest seed has no positive raising term. Step 4.2 treats a zero polynomial anti-invariant difference without inferring a global lift.',
'Steps 1.1 and 1.2: a single highest factor is the base highest-first action, and a single lowest factor is its separately proved second-factor counterpart.',
'Steps 2.1 and 4.2: finite-type action imposes no weight-multiplicity bound; the actual unbounded rank-one example still has integral action but no finite normalized seed lift, so degeneracy of globalization is recorded rather than hidden.',
'Steps 4.1 and 4.2: the affine coefficient outside A and the escaping odd constituent in each finite cut are the two distinct boundary failures. All supported finite-dimensional/highest/lowest constructions are retained.',
'Proof C1 and step 5.1 confine inherited AC to grand-loop/polarization suppliers; the finite orbit, divided-word recursion and finite supported correction select no additional arbitrary family.',
'N:Cases(a)-(d) and the two boundary counterexamples are assertions with different hypotheses, not the forward half of a biconditional relating integral action to globalization.',
'N:The rank-one counterexample explicitly disproves the supposed converse from integral triangular action to finite supported balanced lifts; no such converse remains a theorem.'])
rows('thm-quasi-r-tensor-bars-on-finite-products-of-based-integrable-modules',[
'Step 2.1: the empty sequence is the counit tensor unit, positive divided actions vanish, all toral Gaussians are integral, and the three chart coefficient rings intersect in Z.',
'Steps 2.1 and 6.1: zero vectors are fixed; at the least first weight a polynomial coefficient of Psi(g)-g satisfying bar(s)=-s must be zero, proving fixedness of the natural intersection without assuming zero-chart bar stability.',
'Step 2.1: a one-factor sequence uses its supplied bar; adjoining the empty tensor unit introduces no positive-root correction.',
'Steps 1.1 and 6.1: bounded label tuples have finite correction closure, whereas arbitrary finite-type integral action alone does not. The concrete periodic example refutes the latter unrestricted balanced extension.',
'Steps 1.1 and 6.1: supported correction chains terminate within upper/lower tuple bounds; the actual unbounded example has a nonzero coordinate beyond every proposed finite support when projected to a larger cut.',
'Steps 2.1 and 3.2 use given factor bars and supplied integral-action assumptions; finite tuple bounds and unique positive-part corrections add no new choice of lifts.',
'N:The field bar, integral action and supported balanced construction are separate claims, not a forward equivalence between these structures.',
'N:The current Statement expressly rejects the implication from arbitrary finite-type integral action to unrestricted globalization, so parenthesis independence is not a converse balancedness theorem.'])
rows('ex-balanced-triple-for-the-two-dimensional-quantum-sl-two-module',[
'N:The fixed V(1) example has two nonzero basis vectors and four elementary tensors; an empty representation is outside its specified data.',
'Step 1.3: E tensor F squares to zero, and its antisymmetric coefficient cancels under bar, giving Psi squared equal to the identity.',
'Step 2.1: the only nontrivial corrected vector solves c-bar(c)=q-q^-1 with c in qZ[q], uniquely giving c=q.',
'Step 2.2: the mixed chart intersection is only Z(v+w) and misses the independent residue qv; it is explicitly nonbalanced and not crystal stable.',
'Steps 1.3 and 2.2: E kills v and F kills w, giving the endpoint zero bar terms; the mixed-chart polynomial degree conditions force beta=0.',
'Steps 1.1 and 2.1: all basis vectors and the unique scalar correction are displayed, so these finite module computations introduce no Choice.',
'N:The example lists four actual global vectors and a separate nonbalanced chart; their verification does not assert a forward equivalence characterizing all triples.',
'N:The mixed-chart failure is not a converse to the fixed-vector computation: bar invariance of v+w does not make that chart balanced.'])
rows('thm-standard-tableau-monomials-form-a-basis-of-the-highest-weight-fock-submodule',[
'Step 8.1: if the off-Std label subset in a component is empty, its subset-basis kernel is zero; the actual highest constituent remains nonzero.',
'Step 6.1: off-Std source global vectors project to zero, while the nonzero Std projections form the dual-canonical image basis.',
'Step 7.1: restriction of the transition to a singleton Std component has diagonal 1, so its projected monomial and global image are both actual bases.',
'Steps 3.1 and 4.1: equal neighbouring entries are handled by signature cancellation and reverse-factor rectification, rather than assuming a multiplicity-free Fock tensor.',
'Step 9.1: every vector lies in a finite double cut, and normalized highest maps agree on upper-cut/common-tail overlaps, preserving the actual full limit.',
'Statement declares inherited AC for based/global suppliers; steps 5.1 and 7.1 define the projection and straightening by finite nondegenerate pairing and a finite unitriangular matrix, adding no new Choice.',
'Step 6.1: a label in Std has nonzero projection because it pairs as a dual basis vector with the corresponding reversed highest global vector.',
'Step 6.1: a label outside Std pairs to zero with every reversed highest vector and hence has zero projection by nondegeneracy, proving the other direction of the vanishing criterion.'])
rows('thm-the-highest-weight-fock-submodule-has-the-qg-global-bases',[
'Steps 1.1 and 4.1: a weight without Std labels has empty upper/lower constituent families and zero component; the pairing and weight-unit comparisons act on that zero component.',
'Step 1.2: a(0)=0 at the highest weight, so B8=C0 there and the source normalization is 1.',
'Step 1.1: the diagonal delta evaluation equals 1; step 2.1 uniquely determines each upper dual by that normalized evaluation.',
'Step 3.1: the source upper and lower embedded lattices remain distinct; the argument identifies their separate weight-unit comparisons and never infers a Laurent-unit Gram determinant.',
'Steps 1.2 and 4.1: the normalization starts at the highest weight and extends through finite lowering words; upper-cut/common-tail comparisons preserve the resulting full supported limit.',
'Statement explicitly inherits AC for the quantum suppliers; steps 2.1 and 4.1 use unique form-duals and prescribed Laurent monomials, adding no independent selection.',
'N:The equations G_low=s^-a P and G_up=s^a D identify separately given families; they are not a forward equivalence identifying the two embedded lattices.',
'N:The form and weight rescalings do not conversely equate ordinary upper and lower bars or reconstruct arbitrary global bases; the Statement explicitly withholds those conclusions.'])
rows('thm-the-qg-tensor-product-bar-is-triangular-and-compatible-with-fock-truncations',[
'Steps 1.1 and 2.1: an empty reduced finite product uses F1 tensor unit, and an empty positive-root transfer sum leaves its normalized scalar bar unchanged.',
'Step 2.1: each forbidden root-transfer term acts by zero, and the degree-zero term is 1; step 3.1 therefore preserves the integral monomial lattice.',
'Step 1.1: a single fundamental factor uses its own normalized bar, with no inter-factor transfer; this is the one-factor base of the finite-product theorem.',
'Steps 2.1 and 4.1: repeated wedge occupancy makes the new lower-boundary E operator kill the earlier prefix; it does not make every new generator vanish on the image.',
'Steps 3.2 and 4.1: new upper-boundary roots kill the supported prefix, and the common lower tail kills its new boundary E action, proving both actual cutoff identities.',
'Statement and Given explicitly inherit AC from quantum suppliers; finite subset actions, divided-power coefficients and cut comparisons add no new choice of representatives.',
'N:The asserted existence, triangularity and two cut compatibilities are one-way properties of the constructed Fock bar, not a biconditional criterion for arbitrary tensor bars.',
'N:The compatible direct limit follows from the explicit upper and lower boundary identities; no converse from a limit bar to unrestricted two-sided tensor evaluation is asserted.'])

batch8=json.loads(Path('research/'+run+'-batch-8.proof-contracts.json').read_text())
batch23=json.loads(Path('research/'+run+'-batch-23.proof-contracts.json').read_text())
flagged=json.loads((base/'gate1/boundary-ids-by-batch.json').read_text())['8']
quasi9=['lem-quasi-r-divided-power-integrality-on-based-lattices','thm-quasi-r-tensor-bars-on-finite-products-of-based-integrable-modules','lem-periodic-cyclotomic-based-sl-two-tensor-corrections-escape-every-finite-cut','cex-integrable-based-sl-two-tensor-triples-need-not-be-balanced','ex-balanced-triple-for-the-two-dimensional-quantum-sl-two-module','lem-finite-type-a-full-tensor-source-upper-charts-and-string-leading-terms','thm-standard-tableau-monomials-form-a-basis-of-the-highest-weight-fock-submodule','thm-the-highest-weight-fock-submodule-has-the-qg-global-bases','thm-the-qg-tensor-product-bar-is-triangular-and-compatible-with-fock-truncations']
scope=list(dict.fromkeys(flagged+quasi9))
assert len(flagged)==19 and len(scope)==26
changes=[];snapshot={'version':1,'scope':scope,'contracts':{}}
for id in scope:
 batch=8 if id in batch8['contracts'] else 23
 doc=batch8 if batch==8 else batch23
 old=doc['contracts'][id];entry=json.loads(json.dumps(old))
 if id in B:entry['boundaries']=B[id]
 if id=='cex-integrable-based-sl-two-tensor-triples-need-not-be-balanced':
  entry['boundaries'][0]={'case':'empty','status':'not_applicable','reason':'The counterexample fixes two nonzero periodic factors and a specified nonzero tensor residue; it makes no assertion for an empty tensor factor. Its zero anti-invariant difference is the separate zero case of step 2.1.'}
 if id in quasi9[:2]:
  prior=entry['risk_review']
  entry['risk_review']={**prior,'status':'complete','reviewer':'/root (current concrete refutation and formal correction); /root/quasi_r_finalize (construction and affected-use check)','notes':'The original Alpha/source review of the true field, highest/lowest and finite-dimensional branches is retained. The actual arbitrary-multiplicity finite-type action argument is now local, and unrestricted integral action remains proved. The separate universal finite-supported globalization assertion was concretely REFUTED by the periodic rank-one factorial escape and corrected by the least-destructive current Statement and boundary proof; it was not proved conditionally or accepted as a proof gap. Root independently reviewed the matrix, all-m quotient extraction and deleted-shear cutoff, applied both source corrections, and closed only the two original touched obligations with narrowed successors. All49 actual consumer claims remain retained. Original round1/round2 and source-reading histories are unchanged; no new native worker/source-reading coverage or independent author audit is claimed. Current evidence: quasi-r-finalize/final-report.md, definition-axiom-binding.json, local-checks.json, consumer-use-classification.json, native-closure-grounding.md, and root-application/quasi-supplier-receipt.json plus final-quasi-metadata-receipt.json.','historical_reviews':list(prior.get('historical_reviews',[]))+[prior],'resolution':'concrete false-generalization correction; unrestricted finite-type integral action retained; supported full-tensor globalization retained'}
 snapshot['contracts'][id]=entry
 if entry!=old:changes.append({'id':id,'batch':batch,'canonical_contract':'research/'+run+f'-batch-{batch}.proof-contracts.json','before_entry':old,'after_entry':entry,'mathematical_sections_changed':False,'fields_changed':[k for k in ['risk_review','boundaries'] if old.get(k)!=entry.get(k)]})
(out/'raw-deltas.json').write_text(json.dumps({'version':1,'run':run,'scope':scope,'flagged_batch8_boundary_ids':flagged,'changes':changes},indent=2)+'\n')
(out/'contracts.proposed.json').write_text(json.dumps(snapshot,indent=2)+'\n')
print('Prepared',len(changes),'focused entry deltas over',len(scope),'owned subjects; current item sources untouched.')
