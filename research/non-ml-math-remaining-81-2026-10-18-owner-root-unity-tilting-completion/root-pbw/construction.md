# Simply-laced integral root PBW construction

This is actual owner construction, not an acceptance record. It retains finite ADE, the full weight/coroot datum, and both orders of the selected parameter. No LS straightening theorem or Frobenius-coinvariant assertion is assumed. The only new algebra required for the strong-linkage construction is a divided root PBW basis, its ordinary small image basis, and braid/parabolic compatibility.

## Generic braid symmetries: construction rather than a named theorem

Write q for the generic parameter and K_i for the simple torus. For each i define S_i on generators by

    S_i(K_h)=K_(s_i h),
    S_i(E_i)=-K_i F_i,       S_i(F_i)=-E_i K_i^-1,
    S_i(E_j)=E_j,            S_i(F_j)=F_j             if a_ij=0,
    S_i(E_j)=E_j E_i-q E_i E_j,
    S_i(F_j)=F_i F_j-q^-1 F_j F_i                    if a_ij=-1.

Here is a presentation check of existence. For neighboring i,j put X=E_i, Z=E_j, Y=XZ-q^-1 ZX and H_i=(K_i-K_i^-1)/(q-q^-1). The Serre relation gives XY=qYX and YZ=qZY. Mixed reordering gives

    [F_i,Y]=E_j K_i^-1,       [Y,F_j]=K_j E_i.

For example the first identity is

    [F_i,Y]=-H_i E_j+q^-1 E_j H_i
             =E_j[-(q^-1 K_i-q K_i^-1)+q^-1(K_i-K_i^-1)]/(q-q^-1)
             =E_j K_i^-1.

Put A=-K_i F_i and B=-qY=S_i(E_j). Then

    AB-qBA=E_j,       A E_j=q^-1 E_j A,       E_j B=q^-1 B E_j.

Consequently

    A²B-(q+q^-1)ABA+BA²
      =q^-1[-ABA+qBA²+E_j A]=0,

and the second Serre relation follows in the same way using E_j B=q^-1 B E_j. This checks the positive Serre relations involving color i. The negative calculation is its image under the anti-semilinear involution E↔F, K↔K^-1, q↔q^-1, reversing all products; that involution preserves the defining presentation.

For the positive relations between colors j,k different from i use the explicit skew derivation

    d_i(u)=E_i u-q^(<wt(u),h_i>)u E_i,
    d_i(uv)=d_i(u)v+q^(<wt(u),h_i>)u d_i(v).

It has d_i(E_j)=Y_ij for a neighbor, d_i²(E_j)=0 by Serre, and d_i(E_j)=0 for a nonneighbor. If j,k are nonneighbors and both neighbor i, apply d_i² to E_jE_k-E_kE_j: the result is (q+q^-1)(Y_ijY_ik-Y_ikY_ij). If only one neighbors i, apply d_i once. If j,k are neighbors, ADE has no triangle, so at most one neighbors i. Apply d_i twice to the Serre relation with that color repeated, and once to the Serre relation with the other color repeated. For instance d_i²(E_j²E_k)=(q+q^-1)Y_ij²E_k, d_i²(E_jE_kE_j)=(q+q^-1)Y_ijE_kY_ij, and d_i²(E_kE_j²)=(q+q^-1)E_kY_ij². Division by the nonzero generic q+q^-1 gives precisely the required Serre relation. These cases exhaust all positive pairs; the negative calculation is identical after exchanging halves.

For mixed pairs away from i the only new cases are two distinct neighbors j,k and one repeated neighbor j. Put Z_ik=F_iF_k-q^-1F_kF_i. If j≠k,

    [Y_ij,Z_ik]=H_i E_jF_k-q^-1 F_kH_i E_j
                     -q^-1 E_jH_iF_k+q^-2 F_kE_jH_i=0.

Indeed E_j and F_k commute and have opposite i-weights, so the coefficient of E_jF_k is

    (1+q^-2)H_i-q^-1(H_i(q^-1K_i)+H_i(qK_i))=0.

For j=k the two displayed mixed commutators instead give

    [Y_ij,Z_ij]=-q^-1(H_jK_i^-1+K_jH_i)
                =-q^-1 (K_iK_j-(K_iK_j)^-1)/(q-q^-1).

Multiplying Y by -q is exactly the desired image of [E_j,F_j]. For mixed pairs involving i, the equalities F_iZ_ij=q Z_ijF_i and K_iZ_ij=q^-1 Z_ijK_i give [S_i(E_i),S_i(F_j)]=0; the positive-half version gives [S_i(E_j),S_i(F_i)]=0. Finally [S_i(E_i),S_i(F_i)]=-H_i is the correct reflected torus relation. Weight conjugation checks all toral relations immediately. Thus the assignment preserves every defining relation.

Its inverse has E_i↦-F_iK_i^-1, F_i↦-K_iE_i, K_h↦K_(s_i h), and, for a neighbor,

    E_j↦E_iE_j-qE_jE_i,      F_j↦F_jF_i-q^-1F_iF_j.

The same relations prove this assignment is a homomorphism. Composing on a neighboring positive generator reduces to [F_i,Y]=E_jK_i^-1 and gives E_j; the negative composition uses [Y,F_j]=K_jE_i. On i and the torus cancellation is immediate. The other composition is the reversed calculation. Hence S_i is an automorphism.

## Braid relations with an explicit rank-two calculation

On a finite generic rank-one string with highest vector u of label m, define Q_i by

    Q_i(F_i^(r)u)=(-1)^r q^(r(m-r+1))F_i^(m-r)u.

This is invertible. Its conjugation on E_i,F_i,K_i is the displayed S_i assignment. To check a neighboring E_j, note E_j commutes F_i and E_i²E_j u=0. Rank-one semisimplicity therefore decomposes E_j u into a highest vector a of label m-1 and a vector F_i b with b highest of label m+1. It suffices to check these two components. Put s=m-r. On the a component,

    (E_iE_j-q^-1E_jE_i)F_i^(s)u
      =([m-s]-q^-1[m-s+1])F_i^(s-1)a
      =-q^(-m+s-1)F_i^(s-1)a.

Thus S_i(E_j) contributes q^-r after multiplication by -q, agreeing with the ratio of the two Q_i string coefficients. On the F_i b component it contributes

    -q[m-s+1]([s+1]-q^-1[s])F_i^(s)b
      =-[r+1]q^(m-r+1)F_i^(m-r)b,

which, multiplied by (-1)^r q^(r(m-r+1)), equals

    [r+1](-1)^(r+1)q^((r+1)(m-r+1))F_i^(m-r)b
      =Q_i(E_jF_i^(r)u).

This proves Q_iE_j=S_i(E_j)Q_i. For completeness, on a lowest vector l of label -m one has Q_i(E_i^(r)l)=d_r(m)E_i^(m-r)l with d_r(m)=(-1)^(m-r)q^((m-r)(r+1)). The commuting relation [F_j,E_i]=0 and negative Serre split F_jl into a lowest a of label -(m-1) and E_i b with b lowest of label -(m+1). On the first component (F_iF_j-q^-1F_jF_i)E_i^(s)l has coefficient [m-s]-q^-1[m-s+1]=-q^(-m+s-1); hence d_r(m)(-q^(-r-1))=d_r(m-1). On the second it has coefficient [m-s+1]([s+1]-q^-1[s])=[r+1]q^(m-r); hence d_r(m)[r+1]q^(m-r)=[r+1]d_(r+1)(m+1). These are exactly Q_iF_j=S_i(F_j)Q_i, including zero endpoint components. Nonneighbors commute with the entire rank-one action, hence with Q_i. Therefore Q_i u=S_i(u)Q_i on every generator on every finite generic integrable module.

For the braid relation in A2 one further exact identity is needed. If x,z obey the A2 Serre relation and y=xz-q^-1zx, induction from zx=q xz-qy gives

    z^(c)x^(a)=sum_(0<=r<=min(a,c)) (-1)^r
       q^((a-r)(c-r)+r) x^(a-r)y^(r)z^(c-r).                 (N)

Writing C_r(a,c)=(-1)^r q^((a-r)(c-r)+r), multiplication by z gives the exact recurrence [c+1]C_r(a,c+1)=q^(a-2r)[c-r+1]C_r(a,c)-q[r]C_(r-1)(a,c), with nonexistent terms zero. After dividing by the proposed C_r(a,c+1), this is [c+1]=q^-r[c-r+1]+q^(c-r+1)[r], obtained by expanding the two quantum integers. The endpoints r=0 and r=min(a,c+1) are included by the same zero convention. In particular both sides of

    x^(a) z^(a+b) x^(b)=z^(b) x^(a+b) z^(a)                 (V)

expand by (N) as the sum over 0<=r<=b with coefficient

    (-1)^r q^((a+b-r)(b-r)+r) [a+b-r choose a]

on x^(a+b-r)y^(r)z^(a+b-r). Thus (V) is proved algebraically, without assuming braid relations or a PBW theorem.

Within the rank-two algebra the already checked formulas give S_iS_j(E_i)=E_j and S_jS_i(E_j)=E_i: the first is AB-qBA=E_j above, and the second is its exchanged version. Exchanging halves gives the corresponding F identities. Consequently S_iS_jS_i and S_jS_iS_j agree on that rank-two algebra (both send E_i to -K_jF_j and E_j to -K_iF_i, and similarly for F and K). On a rank-two highest vector of label (a,b), the two Q products give respectively F_i^(b)F_j^(a+b)F_i^(a)u and F_j^(a)F_i^(a+b)F_j^(b)u. At each step the vector is highest for the next color: for example E_i F_j^(a+b)F_i^(a)u=F_j^(a+b)F_i^(a-1)u=0, since the latter i-string vector has j-highest label a+b-1. Identity (V) makes the two vectors equal. Their conjugations already agree on the rank-two generators, so they agree on its entire simple highest module. Generic semisimplicity then proves the operator braid relation on every finite module after restriction to the rank-two subalgebra. Nonadjacent Q_i,Q_j commute by the rank-one tensor decomposition.

Finally finite generic integrable modules separate U: write a nonzero u in triangular form and choose an integral toral label xi at which one nonzero Laurent coefficient remains nonzero. Such a label exists since a Laurent polynomial cannot vanish on every grid (q^n1,...,q^nr). Acting on a lowest-highest tensor of labels -a,b with b-a=xi, ordered positive-negative half products have the corresponding pure tensor as leading term, with a Laurent unit coefficient, and smaller half degree as corrections. Choose a,b so large that their actual highest/lowest half kernels, generated by divided singular powers beyond a_i,b_i, have degree greater than every half degree in this finite expression. The leading term survives, so u acts nontrivially. This uses the proved integral highest-quotient kernel and generic triangular decomposition, not a claimed root PBW theorem. Hence the module operator braid relations imply the algebra braid relations for S_i on all generators, including colors outside the pair.

## Positivity, integral monomials, and the root PBW basis

The divided-power formulas are

    S_i(E_i^(n))=(-1)^n q^(n(n-1)) K_i^n F_i^(n),
    S_i(F_i^(n))=(-1)^n q^(-n(n-1)) E_i^(n) K_i^-n,
    S_i(E_j^(n))=sum_(r+s=n)(-1)^r q^r E_i^(r)E_j^(n)E_i^(s)

for a neighbor, with the exchanged negative formula and unchanged nonneighbors. For the last formula, (N) and quantum Pascal prove

    y^(n)=sum_(r+s=n)(-1)^r q^-r x^(s)z^(n)x^(r);

multiplication by (-q)^n and swapping r,s gives the stated S_i formula. The inverse formulas have the same integral form with the order reversed. Thus all S_i and inverses preserve the subalgebra B generated by divided E/F powers and K. In fact B is the FULL integral form, including its toral binomials. Induct on t in the complete rank-one mixed reordering E_i^(t)F_i^(t)=sum_(r=0)^t F_i^(t-r) T_(i,2r-2t,r) E_i^(t-r). Its r=t term is T_(i,0,t), and every other toral factor has smaller lower index. All shifts are supplied by the integral Vandermonde identity T_(i,c,t)=sum_(a+b=t) q^(-bc)[c choose a]K_i^a T_(i,0,b), valid for every integer c with Laurent-polynomial Gaussians. Hence induction puts every T_(i,c,t) in B. The symmetries therefore preserve U_A itself, and base change really induces inverse automorphisms of the specialized algebra; stability of a subalgebra before specialization alone would not justify that conclusion. They also preserve the ordinary-generator algebra over A[(q-q^-1)^-1].

If l(ws_i)=l(w)+1, then S_w(E_i) is positive. Here is the Coxeter induction that supplies this assertion. Choose a right descent j of nonidentity w; j≠i. Factor w=w'v with w' the minimal right {i,j}-coset representative and v alternating in i,j. Both i,j are ascents of w', and v has length at most m_ij-1. In the commuting case its needed image is E_i; in A2 the needed images are E_i, one of the two displayed neighboring positive polynomials, or E_j, by the preceding rank-two identities. Thus S_v(E_i) is a positive polynomial in E_i,E_j. Induction gives S_w'(E_i), S_w'(E_j) positive, hence S_w(E_i) positive. Its divided powers lie in the integral form by the displayed formulas; the already proved integral triangular decomposition gives U_A intersect U^+=U_A^+, so they lie in the positive divided half.

Fix a reduced word w0=s_i1...s_iN, set beta_t=s_i1...s_i(t-1)(alpha_it), and define X_beta_t=S_i1...S_i(t-1)(E_it). Let N_h be the A-span of their ordered divided monomials. A rank-two braid move changes only its local root block, with all later factors unchanged because the braid automorphisms agree. For commuting colors both block spans agree by commutation. For A2 its block is, up to Laurent units, x^(a)y^(b)z^(c); equation (N) shows its span is the entire divided rank-two positive algebra: it contains 1 and is stable under left multiplication by every x^(r) and z^(r). The same is true for the reversed block, so their integral spans agree. Applying the preceding S-prefix preserves this equality. The reduced-word theorem therefore makes N_h independent of h.

Every simple i begins some reduced word for w0. In that word left multiplication by E_i^(r) preserves N_h by divided-power Gaussian multiplication in the first factor. Since 1 belongs to N_h, this common span equals U_A^+. Its ordered monomials in weight nu number the Kostant partitions of nu, exactly the generic weight rank already proved in the local generic-Serre-half theorem. They span, so over Q(q) they are a basis; consequently they are A-linearly independent and form an actual integral basis. The exchanged-half argument gives the negative basis. Base change therefore retains both bases at every scalar parameter.

## Ordinary image, small PBW, and transformed parabolics

Run the same common-span argument with ordinary root powers over A[(q-q^-1)^-1]. Equation (N) before division, or repeated zx=q xz-qy, gives ordinary integral normal-order coefficients; no root factorial is inverted. Positivity of a root vector lying in the ordinary full form places it in its ordinary half: project its ordinary mixed normal-order expansion onto negative degree zero and toral exponent zero. This projection takes each ordinary normal-ordered word into the ordinary positive half and fixes a pure positive element. Hence the common ordinary monomial span is exactly the ordinary half, for every convex word.

Now specialize. Require ord(zeta²)=ell>1. The root-vector identity X_beta^ell=[ell]_zeta! X_beta^(ell)=0 holds because X_beta^(ell) belongs to the actual integral root basis; it is not a presentation assumption. Every ordinary-root monomial therefore truncates to exponents 0,...,ell-1. Those surviving monomials are linearly independent: they are nonzero scalar multiples of distinct members of the specialized divided basis, with [r]_zeta! nonzero for r<ell. Thus the ordinary positive and negative image halves have precisely the residue root PBW bases.

For the full ordinary image use the type-1 toral quotient: K_i^ell=1 if ord(zeta)=ell and K_i^(2ell)=1 if ord(zeta)=2ell. Mixed ordinary reordering spans u^- times torus times u^+. Independence follows from the specialized integral triangular decomposition and independence of the indicated torus powers: evaluate them on the integral weight characters, whose simple-coroot coordinates vary independently over Z. These give every character of the torus of order ell or 2ell, so finite character orthogonality proves the powers independent. Consequently the small ordinary image has the asserted triangular PBW decomposition and is finite dimensional.

Every S_i preserves the ordinary form and the toral quotient, and its inverse does too. It therefore restricts to an automorphism of this small image. Applying S_w gives every twisted triangular decomposition with exactly the transported root bases. To isolate a simple-root minimal parabolic, choose a convex order ending in that root. Its PBW basis is the product of the other negative root factors followed by F_i^r, torus, and all positive factors. Thus the complementary negative root monomials make u a free right module over that parabolic. Left freeness follows from a reversed order or the bijective antipode. This proves the exact free induction required by the adjacent-Borel rank-one kernel argument.

For the ordinary negative Borel H=u^- times torus, the restricted ordinary coproduct, counit, and antipode make H a finite Hopf algebra. Its negative augmentation ideal times H is nilpotent by root height and its quotient is the finite complex torus group algebra, which is semisimple. The existing finite-Hopf Frobenius theorem then yields the one-dimensional negative-half socle exactly as in the coordinated strong-linkage construction; no LS triangularity or unproved top-coefficient pairing is needed.

## Reading status

Actually read the retained complete-source images PDF 50–52 (rank-one symmetries and their scalar string action), 296–302 (the braid-symmetry definitions, mixed finite calculation and automorphism construction), 314–326 (rank-two calculations, Verma identity, and full braid argument), 327–335 (positivity, convex root PBW spans and integral braid actions), and 289–293 (all of Chapter 36, small image and modified small algebra), and the already retained PDF64–66 higher-Serre proof. Some read pages contain nonsimply-laced cases which are not used. No claim of reading the entire monograph is made. The proof above uses the simply-laced specialization and gives its algebraic checks, quantum normal-order identity, Verma identity, Coxeter positivity induction, integral common-span argument and actual root specialization rather than substituting source theorem numbers for these steps.

This remains a construction proposal pending owner scrutiny of every displayed formula and final carrier integration/checks. In particular no batch-68 completeness, source-fetch stamp, readiness, or gate result follows from this file alone.
