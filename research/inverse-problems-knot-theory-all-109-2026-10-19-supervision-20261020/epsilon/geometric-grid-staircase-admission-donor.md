# Actual positive torus/cable staircase admissions from finite grids

All grid comparison, grading normalization, normalized vertical/horizontal homology, tensor and duality interfaces used here are reused as already supplied. None of their sources is reread, rehashed, rerun or revalidated by this work. The grids, geometric identifications and finite ranks below are new authoring for the missing epsilon witness admission.

## The exact grids and their oriented geometric admission

Coordinates below are marking-cell indices, in rows ordered bottom to top. At a crossing the vertical strand passes over the horizontal strand; rows are oriented O→X and columns X→O.

* Positive T(2,5): n=7, O=[6,5,4,3,2,1,0], X=[4,3,2,1,0,6,5].
* Positive T(4,5): n=9, O=[8,7,6,5,4,3,2,1,0], X=[4,3,2,1,0,8,7,6,5].
* Positive trefoil (2,5) cable: n=10, O=[8,9,7,6,4,5,3,2,1,0], X=[4,5,2,3,0,1,8,9,6,7].

For the first grid, the five crossings have positive sign and the oriented over/under word, labeling first encounters A,B,C,D,E, is

    A+ B- C+ D- E+ A- B+ C- D+ E-.

Here plus denotes over, not crossing sign; all five crossing signs are positive. The explicit Clifford-torus curve κ(t)=(r exp(2it),s exp(5it)), r=s=1/√2, has the identical word in stereographic projection from the last-coordinate pole, with crossing parameters t/(2π)=0,1/10,…,9/10. Indeed its planar angle is 2t, radius r/(1-s sin5t), and height s cos5t/(1-s sin5t). Distinct parameters have equal projections precisely when they differ by π and sin5t=0. The overparameter has cos5t>0. Its radial derivative is positive and its underpartner's negative; with common positive angular derivative, det(v_over,v_under)>0. Projection is immersive because the angular derivative is nonzero; there are no triple points. Thus the full oriented signed rotation/strand code agrees, and the supplied diagram-code reconstruction interface gives oriented knot equivalence to the positive torus curve. This is an actual geometric admission, not identification by a table or Floer polynomial.

For the second grid, follow row orientation and then column orientation. Its 15 crossings all have positive sign. Its complete oriented signed code agrees, after reversing orientation and making a cyclic starting-point change, with the closure of the four-strand positive braid

    1 2 1 3 2 1 3 2 1 1 2 1 3 2 1,

where each digit i denotes the positive crossing σ_i. The data and exact code comparison are in torus45-braid-certificate.json; its generator convention has the top-right strand passing over to bottom-left when braid time runs downward, giving positive planar crossing determinant. The following successive positive braid relations give the word (123)^5. Position numbers in the certificate are zero-based; the moves themselves are the commutations 13=31 and the local R3 relations 121=212,232=323:

    121321321121321
    123121321121321
    123123121121321
    123123121212321
    123123121213231
    123123121231231
    123123121231213
    123123121232123
    123123121323123
    123123123123123.

Each equality is an actual isotopy of the corresponding three or two braid strands, fixing all other strands, so taking closures preserves the knot. The closure of (123)^5 is the positive Clifford-torus (4,5) curve: cut its standard solid-torus neighborhood by arg(z₁)=constant. The four points in each disk have arguments 5(θ+2πk)/4, k=0,…,3; thus one quarter-turn of the four-point configuration occurs as θ runs 2π/5, and five quarter-turns occur in a full period. A small generic phase in the disk projection orders one quarter-turn's crossings as σ₁σ₃σ₂, a positive Coxeter braid; cyclically changing its cut and reversing the four position labels carries this to σ₁σ₂σ₃. The latter label reversal is the usual half-turn of the disk configuration and its conjugation preserves the closure. This supplies the torus embedding directly. Finally κ(t) and κ(-t) are oriented-knot equivalent: simultaneous conjugation of the two complex coordinates is the endpoint of the SO(4) path rotating the plane of their imaginary axes by π. Therefore the orientation reversal in the code comparison loses no oriented knot information.

For the cable grid, start with the already admitted positive trefoil five-grid O=[4,3,2,1,0], X=[2,1,0,4,3], whose planar writhe is +3. This input geometric admission is reused, not checked again. Replace each row and each column by two close parallel ones. At an old corner let h=±1 be the side containing its horizontal partner and v=±1 the side containing its vertical partner. Use a diagonal two-mark block when hv=+1 and an antidiagonal block when hv=-1. These are precisely crossing-free parallel corners: a direct check in the four quadrants shows their horizontal segments meet neither new vertical piece, and their two attachments retain the two parallel strands. At just the O corner (row0,column4), where h=-1,v=+1, use the opposite diagonal block. It introduces exactly one crossing, of sign hv=-1. There are no other new local crossings at corners; every old crossing is replaced by four vertical-over crossings.

The listed ten-grid is exactly that construction; positive-cable-grid.json gives every individual marking block. Its oriented component cycle runs through all ten rows, so it is a knot. The two parallel sheets away from the exceptional block run twice along the blackboard longitude. That longitude has linking number +3 with the trefoil, since its push-off contribution is the signed planar writhe, and so λ_bb=λ_pref+3μ. The exceptional negative half-twist gives the two-strand pattern one negative meridional crossing. Consequently the single connected cable has slope 2λ_bb-μ=2λ_pref+5μ, with longitudinal orientation inherited from the trefoil. This proves exactly the positive (2,5) cable admission in the original Statement, including preferred framing. It does not infer the cable type from its Floer output.

## Exact finite rectangle-rank computation

For each new grid, enumerate all n! state permutations p, with the state point on horizontal circle a at column p(a). For each ordered pair a≠b, take the positive cyclic row interval a→b and column interval p(a)→p(b). It defines the rectangle with the initial state at southwest and northeast corners. The two row orders give the two possible directed rectangles for each unordered pair. Retain it exactly when (1) no O or X marking is in its open cell support and (2) no state point lies in the strict product of its two cyclic interior intervals. Its target swaps p(a),p(b). Equal targets cancel modulo two. These instructions are precisely the tilde operator from the supplied grid algorithm, with no positivity or analytic count assumption added.

State degrees are computed directly by the finite pair formula:

    M_O(p)=I(p,p)+I(O,O)-I(p,O)-I(O,p)+1,
    A(p)=(M_O(p)-M_X(p)-(n-1))/2.

The exact integers use O/X cell centers and state vertices, so comparison of vertices at row i with a mark at row j+½ is i≤j, and similarly for columns. Differential columns are finite sorted lists of target permutation ranks. Reduce them over F₂ by the following fully specified column algorithm. The pivot of a nonempty column is its largest row index. If that pivot already has a stored reduced column, replace the current column by its symmetric difference with that stored column; otherwise store the current column there and increment the rank for its source (M,A). Every replacement is an invertible column operation and strictly lowers the pivot. Stored distinct pivots are independent and span the columns seen. Thus the final recorded rank is the exact rank of the corresponding graded differential. For each bidegree the homology dimension is dim C_{M,A}-rank d_{M,A}-rank d_{M+1,A}, using the supplied square-zero identity.

The implementation grid-tilde-ranks.cpp executes exactly these instructions. Input files fix all markings. Its completed checkpoints contain every stored pivot column, basis count and graded rank; its JSON outputs record those counts and homology dimensions. It completed 5,040 states, 362,880 states and 3,628,800 states respectively, with total tilde homology dimensions 320,1792,2560. The process was capped at 6GiB address space, ran one computation at a time, and wrote durable checkpoints every250000 states. These are new exact integer/F₂ calculations, not reruns of the earlier 175-generator epsilon tensor calculation.

## Correct use of the basepoint factors

Use only the already supplied normalized equality of tilde homology with hat knot Floer homology tensored with V^{⊗(n-1)}, where V has bidegrees (0,0),(-1,-1). Divide the computed two-variable graded dimension polynomial by (1+m⁻¹a⁻¹)^{n-1}. This is division of the graded HOMOLOGY polynomial, not cancellation of V in a chain category. It is unique: begin with the largest Maslov degree having nonzero coefficient, subtract that coefficient times its monomial times the indicated factor, and continue to smaller degrees. The explicit deconvolution in normalized-hat-ranks.json is:

| Knot | Exact normalized (M,A) degrees, each of dimension one |
| --- | --- |
| T(2,5) | (0,2),(-1,1),(-2,0),(-3,-1),(-4,-2) |
| T(4,5) | (0,6),(-1,5),(-2,2),(-5,0),(-6,-2),(-11,-5),(-12,-6) |
| Trefoil (2,5) cable | (0,4),(-1,3),(-2,0),(-7,-3),(-8,-4) |

Now take the actual singly pointed normalized CFK∞ supplied by the accepted geometric interface. Cancel equal-bifiltration unit arrows by the explicit finite filtered contractions already authored in tensor-adapted-hook-representatives-donor.md. Each cancellation is a deformation retract with H(b)=a on a same-bifiltration pair a→b. Thus the reduced Laurent basis has exactly the hat groups just tabulated, and all subsequent changes have actual filtered inverse maps and homotopies. This passes from hat ranks to a reduced actual knot complex; it does not identify a full grid differential with a staircase just by looking at its Euler characteristic.

## Reconstruction at these exact degrees

List the basis in the table order as e₀,e₁,…. A possible coefficient U^k e_j in d e_i must satisfy

    k=(M(e_j)-M(e_i)+1)/2 ∈ Z_{≥0},
    A(e_j)-k≤A(e_i).

Exhausting these finite inequalities gives the following COMPLETE edge lists. Write v(i,j) for coefficient1 and h(i,j;k) for coefficient U^k preserving horizontal level:

* T(2,5): v(0,1),v(1,2),v(2,3),v(3,4), and h(1,0;1),h(2,1;1),h(3,2;1),h(4,3;1).
* T(4,5): v(0,1),v(1,2),v(3,4),v(5,6), and h(1,0;1),h(3,2;2),h(5,4;3),h(6,5;1).
* Cable: v(0,1),v(1,2),v(3,4), and h(1,0;1),h(3,2;3),h(4,3;1).

There are no diagonal arrows in any case: every allowed monomial is on one of these two axes. Each coefficient is either zero or one, since homogeneity fixes the monomial and the field is F₂. The normalized vertical homology is one-dimensional in Maslov degree zero. Its unique possible degree-zero class e₀ must survive, forcing v(0,1)=0. In the first case, the remaining vertical path forces v(1,2)=1, v(2,3)=0, v(3,4)=1: otherwise degree -1 survives, or d_v²≠0, or degree -3 survives. In the other cases, v(1,2),v(3,4),v(5,6) where present are disjoint necessary pairs and are all1.

For the horizontal complex at level zero, use the basis U^{A(e_i)}e_i. Its Maslov degrees are M(e_i)-2A(e_i), the reverse of the displayed vertical degree list. Its normalized homology is again one-dimensional in degree zero, with its only possible surviving generator the last e. The same argument from that end forces every odd→previous-even horizontal edge to be1 and all listed reverse edges to be0. These uses are exactly the already supplied normalized vertical/horizontal homology interface. Consequently the actual reduced differentials are

    T(2,5): d e₁=Ue₀+e₂, d e₃=Ue₂+e₄;
    T(4,5): d e₁=Ue₀+e₂, d e₃=U²e₂+e₄, d e₅=U³e₄+e₆;
    Cable: d e₁=Ue₀+e₂, d e₃=U³e₂+e₄,

with all even-generator differentials zero. These matrices square to zero directly. They are precisely the three full staircases used in the original witness calculation, now admitted as ACTUAL knot complexes with normalized gradings. The finite cancellations supply the filtered equivalences and homotopies, and the degree inequalities rule out every missing higher/diagonal differential. No L-space surgery theorem, cable theorem, Alexander-polynomial reconstruction theorem or unproved comparison lemma is used.

## New positive trefoil profile, without repeating its geometric admission

The original epsilon lemma also names the right-handed trefoil itself. Reuse its already admitted positive five-grid O=[4,3,2,1,0], X=[2,1,0,4,3]. A new operation, the 120-state tilde-rank calculation, gives tilde dimension48 and, after the supplied V^4 homology factor, the exact hat degrees (0,1),(-1,0),(-2,-1), each1. This computation supplies the previously missing profile; it does not rerun the earlier grid admission or any accepted source proof. Its result and checkpoint are trefoil.result.json and trefoil.checkpoint.bin, with normalized data trefoil-new-profile.json.

For its three reduced generators the same inequalities allow only v(0,1),v(1,2),h(1,0;1),h(2,1;1). Normalized vertical and horizontal degree-zero homology forces the first and last reverse arrows to vanish and the two remaining arrows to be1. Thus the ACTUAL trefoil complex has d x₁=Ux₀+x₂, with degrees exactly those in the original epsilon calculation. In its northeast hook at τ=1, d(U⁻¹x₁)=x₀ because U⁻¹x₂ lies below the retained horizontal ray. Hence epsilon(T₂,₃)=1 with a geometric admitted complex, not an assumed candidate matrix.
