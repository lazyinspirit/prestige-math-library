# Complete ell=4 Ising data, convention conversion, and periodic two-sector representation

This is an isolated scientific construction. It edits no canonical item, shared contract, metadata, level, readiness, native history, state, or gate. The parent owns all integration and consumers. The actual batch77 inventory/notes and all fourteen current item bodies were read, together with the current root/JW/path/finite-R/pivotal chain (same IDs now housed under61). The existing Ising example is a leaf and is not used as a theorem supplier.

## 1. The two Ising conventions must be distinguished

Put d=sqrt(2), q=exp(pi i/4), s=exp(pi i/8). The accepted root quotient has objects 0,1,2; call them 1,D,eta respectively. Its fundamental self-duality sign is −1, its positive pivotal dimension is d, and its twists are theta_D=s^3, theta_eta=−1. On DD the actual object braiding has eigenvalues

    c_DD^1=−s^−3=exp(5pi i/8), c_DD^eta=s.

The current28 definition is explicitly the pullback `f→f c_ab^−1`. Thus the current28 displayed R phases mean object eigenvalues `exp(pi i/8), exp(−3pi i/8)`, and its +Hadamard vacuum coefficient means FS_D=+1. Neither FS nor an equal-input braiding eigenvalue changes under a vertex gauge. Therefore the current28 data are **not** obtained from the root category by silently changing a basis.

We construct both conventions, and the exact conversion between them. In the current28 pullback convention the positive-F category below has twist **exp(−pi i/8)**. Calling it the positive-chirality physical twist exp(+pi i/8) would introduce a further orientation reversal. Here the orientation is fixed by the actual local definition, and no such reversal is implicit.

## 2. Skeletal category and all multiplicity-indexed associators

Let G=Z/2={0,1}, with group objects 0=unit and 1=eta, and let D be the third object. Define

    a b=a+b (a,b in G), a D=D a=D, D D=0⊕1.

Objects are finite ordered sums of these three simples; Hom is the corresponding block complex matrix space, with ordinary dagger. The summands in DD are ordered (0,1). Every nonzero elementary fusion multiplicity N_ab^c is one, with the **specified canonical summand inclusion** i_ab^c and retraction p_ab^c=(i_ab^c)†. The multiplicity index is mu=1. An impossible channel has multiplicity zero, not an arbitrarily chosen scalar coefficient. Tensor on morphisms is the block tensor/convolution induced by these direct sums.

Put chi(a,b)=(-1)^(ab), kappa∈{−1,+1}, and tau=kappa/d. The unit constraints are identities. Here is the entire associator alpha_(a,b,c):((ab)c)→a(bc), including the direct-sum permutations. For a,b,c∈G:

    alpha_(a,b,c)=1,
    alpha_(a,b,D)=alpha_(D,a,b)=1,
    alpha_(a,D,b)=chi(a,b),
    alpha_(a,D,D) and alpha_(D,D,a): coefficient1 on the corresponding
        equal simple output after relabelling the DD summand by addition of a,
    alpha_(D,a,D)|_z=chi(a,z), z∈G,
    alpha_(D,D,D)[f,e]=tau chi(e,f), e,f∈G.

Equivalently, for fixed total z the target row is `(f,mu_bc^f=1,mu_af^z=1)`, and the source column is `(e,mu_ab^e=1,mu_ec^z=1)`. A coefficient exists only when all four multiplicities are one. The only two-dimensional block is

    F_D^(DDD)=kappa/d [[1,1],[1,−1]], rows/columns ordered (0,1).

All other admissible F blocks are 1×1. All are +1 except

    F_D^(eta,D,eta)=−1, F_eta^(D,eta,D)=−1.

This is a complete all-label table: unit-input blocks are +1; invalid fixed-total spaces have the unique 0×0 matrix. These real matrices/permutations are orthogonal, hence their inverse-transposes equal the displayed coefficients. Consequently the object associator coefficients above are also exactly the F coefficients in the library's inverse-precomposition convention. In particular no transpose, inverse, or unrecorded multiplicity ordering is hidden in the table.

### 2a. Complete pentagon proof

Let A_z^(abc)[f,e] denote the displayed coefficient, defined as zero if a required channel is inadmissible. Take an initial tree `(((ab)_e c)_f d)_z` and a final tree `(a(b(cd)_g)_h)_z`. Expanding the two pentagon routes in their labelled summand bases gives the precise indexed equation

    A_z^(e,c,d)[g,f] A_z^(a,b,g)[h,e]
      =sum_u A_f^(a,b,c)[u,e] A_z^(a,u,d)[h,f]
                    A_h^(b,c,d)[g,u].                         (P)

This derivation follows directly by applying the first root rotation, respectively the left/root/right rotations, to the indicated trees; every spectator label and multiplicity index is retained. We check every possible group/D placement, rather than assuming a TY classification theorem.

For zero D inputs both sides are1. For one D input the four placements `(D,a,b,c)`, `(a,D,b,c)`, `(a,b,D,c)`, `(a,b,c,D)` reduce respectively to

    1=1,
    chi(a,b+c)=chi(a,b)chi(a,c),
    chi(a+b,c)=chi(a,c)chi(b,c),
    1=1.

For two D inputs the six placements `(D,D,a,b)`, `(D,a,D,b)`, `(D,a,b,D)`, `(a,D,D,b)`, `(a,D,b,D)`, `(a,b,D,D)` reduce respectively to

    1=1,
    chi(a,x+b)=chi(a,x)chi(a,b),
    chi(a,z)chi(b,z)=chi(a+b,z),
    1=1,
    chi(b,a+y)=chi(a,b)chi(b,y),
    1=1.

Here x is the preceding DD output and z or a+y is the total group output as appropriate; those labels are forced by admissibility in (P). In these cases the sum over u has one admissible term. These six equalities are the bicharacter identities and symmetry, so they hold for every free group label.

For three D inputs, each matrix entry has one remaining group input a and two free DD channel labels x,y. The four placements `(D,D,D,a)`, `(D,D,a,D)`, `(D,a,D,D)`, `(a,D,D,D)` give respectively

    tau chi(x,a)chi(x,y)=tau chi(x,a+y),
    tau chi(x,y)=tau chi(x+a,y)chi(a,y),
    tau chi(x,y)=chi(a,x)tau chi(x,a+y),
    tau chi(x,y)chi(a,y)=tau chi(x+a,y).

The channel x is the initial DD output (or the initial two-D combined output), and y the final corresponding DD output; the middle associator forces any shifted label x+a or y+a. The displayed equalities follow from multiplicativity and chi^2=1.

For four D inputs let the initial DD channel be x, final DD channel y, and total group output z. The short route is nonzero exactly when y=x+z, with coefficient1. The long route is

    tau^2 sum_(u∈G) chi(x,u)chi(u,z)chi(u,y)
      =tau^2 sum_u (-1)^(u(x+y+z))
      =2 tau^2 delta_(y,x+z)=delta_(y,x+z).

The last equality uses 2tau^2=1. This covers all sixteen group/D placement patterns, all their free group labels, and all admissible matrix entries of (P). Thus the associator satisfies the full pentagon. Inputs with no fusion path give empty equalities. The units are strict and every coefficient containing a unit agrees with its identity unitor, so the triangle holds as well. This proves a monoidal category, and its orthogonal F matrices make it unitary with the indicated dagger.

## 3. Explicit root gauge, not merely an abstract fusion-ring identification

The following choices make the kappa=−1 table the actual ell=4 root quotient in a fully specified trivalent gauge. Work in its TL(−d) realization with self-dual cup w, cap b and e=wb, so both snakes hold and b w=−d. Put

    P=p2=I+wb/d, D=one strand, eta=(two strands,P),
    W2=(I⊗w⊗I)w, B2=b(I⊗b⊗I).

The nonunit splitting maps and their retractions are exactly

    i_DD^0=w/sqrt(d),             p_DD^0=−b/sqrt(d),
    i_DD^eta=P,                  p_DD^eta=P,
    i_eta,D^D=−sqrt(d)(P⊗I)(I⊗w),
    p_eta,D^D=+sqrt(d)(I⊗b)(P⊗I),
    i_D,eta^D=−sqrt(d)(I⊗P)(w⊗I),
    p_D,eta^D=+sqrt(d)(b⊗I)(I⊗P),
    i_eta,eta^0=−(P⊗P)W2,        p_eta,eta^0=−B2(P⊗P).

All unit vertices are identity maps. The last minus sign is essential: omitting it introduces additional −1 scalar F blocks; calling that the normal table would be a gauge error. The caps here are retractions/daggers in the positive pivotal unitary structure; they are not obtained by treating the quantum weight-basis matrix representation as the ordinary Hilbert-space representation. In particular w†=−b.

Their isometry identities follow directly from the snakes, P^2=P, P w=b P=0, and d^2=2. For example with A=(P⊗I)(I⊗w), its positive adjoint is `A†=−(I⊗b)(P⊗I)` and A†A=1/d; hence the chosen −sqrt(d)A is isometric. The reflected identity handles the other mixed vertex. The nested two-strand cup/cap contraction is1 after P is inserted, giving the eta-eta isometry. Their channel projections add to the identities **in the negligible quotient**: DD is vacuum plus P; eta D and D eta are simple D after killing p3; eta eta is the unit. In the constructed three-simple category the p3 recursion vanishes explicitly: on the first-pair eta subspace of its DDD fusion space the second-pair vacuum projection has coefficient1/2, so its U=d P_vac sandwich is1/d, and `p3=(P⊗I)−d(P⊗I)U2(P⊗I)=0`. This is not a claim that the unreduced weight-module p3 is zero.

For transparency the complete nonunit contraction table is below. Each entry is obtained by the **same explicit finite product**

    (p_af^z)(1_a⊗p_bc^f)(i_ab^e⊗1_c)i_ec^z
         =F_z^(abc)[f,e] 1_z.                              (C)

Here `1_eta=P`, `1_D=I`, `1_0=1`; thus (C), together with the preceding eight displayed maps, is also an exact matrix formula for every coefficient, with no coefficient chosen afterwards.

    inputs       total      coefficient/block
    eta eta eta  eta        +1
    eta eta D    D          +1
    eta D eta    D          −1
    D eta eta    D          +1
    eta D D      0,eta      +1,+1
    D eta D      0,eta      +1,−1
    D D eta      0,eta      +1,+1
    D D D        D          (1/d)[[−1,−1],[−1,+1]].

These equations can be checked using only P=1+wb/d, the snakes and d^2=2; in (C) every inner cup-cap either contributes −d or is removed by a snake, and turnbacks into P vanish. To display the two-dimensional calculation, the left/right vacuum overlap is −1/d. The mixed normalized inclusions have the explicitly chosen negative signs, so both off-diagonal overlaps are −1/d. Their normalization/orthogonality then gives the remaining overlap +1/d. For the scalar blocks, expansion of either P next to a mixed vertex removes its turnback term or leaves its complementary 1/d term; the above fixed minus in i_eta,eta^0 cancels the four otherwise negative blocks eta eta D, D eta eta, eta DD total0, and DD eta total0. The two uncancelled scalar signs are exactly eta D eta and D eta D totaleta. Thus the table agrees with section2 at kappa=−1. No root projector beyond p2 has been normalized.

An entirely explicit independent check is supplied in `root-gauge-check.py`: it substitutes `q=(1+i)/sqrt(2)`, `w=(0,1,−q^−1,0)^t`, `b=(0,−q,1,0)`, and the above matrix products into (C), extracting the scalar on the highest retained vector. It computes every one of the 33 admissible F blocks and every object braiding channel, rather than checking only the DDD block. These finite checks corroborate the contraction identities; the construction and pentagon proof do not assume their output.

Alternatively, the category identification itself follows from a universal tensor functor with no appeal to an Ising classification theorem. The kappa=−1 category constructed in section2 has cup sqrt(d)i_DD^0 and cap −sqrt(d)p_DD^0, satisfying both snakes and loop −d. It therefore receives TL(−d); p2 maps to eta and p3 to zero as just calculated. The root supplier's complete retained path matrix units prove full faithfulness on every tensor power and every rectangular Hom block: both categories have exactly the A3 paths and scalar corners 0,D,eta, and every normalized split is nonzero. They generate all objects. The positive pivotal structures agree because their fundamental FS is −1 and dimension is d, as do the braidings in section4. Hence this is an actual ribbon equivalence with the fixed root category. The preceding explicit maps fix its gauge, not just its object names.

## 4. All R channels and a full hexagon proof

Let u(0)=1, u(1)=i, and choose beta with

    beta^2=tau(1+i).

Define **object** braiding coefficients

    c_ab=chi(a,b), a,b∈G;
    c_aD=c_Da=u(a);
    c_DD^g=v(g)=beta/u(g), g∈G.

This defines every channel, including units. Each has modulus one. Here is a local verification of both hexagons, not an invocation of a classification theorem. Expand them using the normal associators of section2. For their eight group/D triple patterns, the independent equations are

    c_ab=chi(a,b),
    u(a+b)=u(a)u(b)chi(a,b),
    u(a)v(a+b)=chi(a,b)v(b),
    u(a)^2=chi(a,a),
    tau sum_(c∈G) chi(a+b,c)u(c)=chi(a,b)v(a)v(b).    (H)

The all-group case is bicharacter multiplicativity; the placements abD and aDb give c_ab=chi(a,b); Dab gives the quadratic equation for u; DDa and DaD give the v transport equation; aDD gives u(a)^2; and DDD gives the last equation entrywise. More explicitly the latter is the matrix equality `A diag(u) A=diag(v) A diag(v)`, with `A=tau(chi(a,b))_(a,b)`. Cancelling one tau and combining the two character factors gives exactly the last line of (H). The second hexagon reverses these placements and replaces chi by its inverse; since chi=chi^−1 and both mixed coefficients are u, it gives the same five equations. Thus all eight typed summand patterns of each hexagon have been retained.

The first four equations hold directly: the only nontrivial quadratic case is `u(1+1)=1=i^2(−1)`, and the only nontrivial v transport cases are `i v(1)=v(0)` and `i v(0)=−v(1)`. For the last equation there are only four pairs (a,b):

    (0,0): tau(1+i)=beta^2;
    (1,0),(0,1): tau(1−i)=−i beta^2;
    (1,1): tau(1+i)=−(−i beta)^2=beta^2.

They hold by the defining beta relation. This proves both hexagons in every channel. No R coefficient is inferred only from a two-channel braid relation.

For the actual root category take kappa=−1 and beta_−=−s^−3. Then `beta_−^2=−(1+i)/d` and `v(1)=−i beta_−=s`. The source crossing is exactly `s I+s^−1 e`, already matching the two DD channels. Since D generates and the hexagons build all block crossings, all other channels must be those just computed: c_eta,eta^0=−1 and both mixed c coefficients are +i. The explicit block-crossing contractions in `root-gauge-check.py` independently verify every such channel using the actual root R and the gauge maps in section3.

For the current28 data take kappa=+1 and beta_+=s. Its complete **pullback R** table is

    R_0a^a=R_a0^a=1,
    R_eta,eta^0=−1,
    R_eta,D^D=R_D,eta^D=−i,
    R_DD^0=s^−1=exp(−pi i/8),
    R_DD^eta=i s^−1=exp(3pi i/8).

An elementary multiplicity index is 1 in each entry; nonexistent channels have the unique empty matrix. The root table has the same unit/group/mixed entries, but `R_DD^0=−s^3` and `R_DD^eta=s^−1`. This spells out the current28 orientation rather than calling the object coefficients “R” and silently inverting only some of them.

## 5. FS, positive pivotal structure, twist, and the exact zest

For a group object a use coev=i_aa^0 and ev=p_aa^0. For D use

    coev_D=sqrt(d)i_DD^0, ev_D=kappa sqrt(d)p_DD^0.

The D snake scalar is `kappa d (F_D^(DDD))_(0,0)=kappa d tau=1`; reflection gives the other snake. The group snakes are1. Thus all objects are rigid. The normalized FS_D is exactly kappa. Choose the right-dual maps `right-coev_D=kappa sqrt(d)i_DD^0`, `right-ev_D=sqrt(d)p_DD^0`; the corresponding left/right closures have positive dimension d, whereas ev_D coev_D=kappa d. For eta the dimension and FS are1. These are the positive unitary spherical conventions. On an arbitrary endomorphism of a finite sum, the left and right trace is explicitly `sum_a d_a Tr(matrix_a)`, d_0=d_eta=1,d_D=d; hence they agree and are nondegenerate.

Here is the full finite partial-trace verification of their tensor compatibility. For the summand projection E_c=i_ab^c p_ab^c, inserting the normalized a cup, rotating by alpha_(a,a,b), applying E_c, rotating back and using the positive a cap gives

    ptr_a(E_c)=d_a |A_b^(a,a,b)[c,0]|^2 1_b=(d_c/d_b)1_b.

Closing b similarly gives `ptr_b(E_c)=d_b |A_a^(a,b,b)[0,c]|^2 1_a=(d_c/d_a)1_a`. The entire nonunit list of these two scalar values is

    (a,b;c)       ptr_a     ptr_b
    (eta,eta;0)     1         1
    (eta,D;D)       1         d
    (D,eta;D)       d         1
    (D,D;0)         1/d       1/d
    (D,D;eta)       1/d       1/d.

The first three rows use scalar F entries of modulus1; the last two use |tau|^2=1/2, and d/2=1/d. Unit rows are the tautological traces of identity maps. This proves every elementary case, including the kappa signs, which appear twice and cancel. Explicitly the pivotal comparison relative to the chosen left duals is the canonical standard-conjugate map

    j_a=(coev_a†⊗id_(a**)) alpha^−1 (id_a⊗coev_(a*)),

with the typed dual comparisons and unitors inserted. On a group simple this is1; on D its contraction is d tau=kappa. On sums it uses the orthogonal summand inclusions, and on tensor products the canonical dual tensorator is the one built from the stated evaluations and coevaluations. Thus j_D=kappa is not an independently declared change of the pivotal convention. On fusion-path matrix units, iterating the preceding last-vertex computation gives zero off the diagonal and the endpoint dimension on the diagonal. The pentagon makes this computation independent of the chosen tree. Since those units span every Hom block, the induced left/right dual comparison is tensor-compatible on all morphisms: its two tensor composites agree after every such contraction, and the weighted matrix trace pairing is nondegenerate. It is therefore a pivotal spherical structure with the stated trace. The fusion-dimension equations d_a d_b=sum_c N_ab^c d_c give multiplicativity on identities and, by these same path units, on arbitrary tensor products. Thus the trace is a pivotal closure derived from the duality maps, not an independently assigned dimension function. In the negative-loop realization the planar pivot is multiplied by parity to obtain it, exactly as in the accepted root supplier.

For an explicit tensorator verification, choose the left dual of a direct sum by its orthogonal simple summands, with the above evaluation and coevaluation on each summand. The typed contravariant tensorator is

    q_(a,b): b*⊗a* → (a⊗b)*,
    ev_(a⊗b) (q_(a,b)⊗id_(a⊗b)) = E_(a,b),

where E_(a,b) is the folded tensor evaluation on `(b*⊗a*)⊗(a⊗b)`: reassociate to `b*⊗((a*⊗a)⊗b)`, evaluate the middle a pair, then the outer b pair. This equation uniquely defines q by the two snakes. On the canonical c summand of b*⊗a*, evaluate both sides after the c cup. Writing k_a=1 for group a and k_D=kappa, the two actual rotations of that four-leg tree give

    q_(a,b)^c=(k_a k_b/k_c) sqrt(d_a d_b/d_c)
                   A_0^(b,a,c)[b,c] A_b^(a,a,b)[c,0].       (Dual)

Indeed the first rotation takes `((b a)_c (a b)_c)_0` to `b(a(ab)_c)` with coefficient `A_0^(b,a,c)[b,c]`; the inverse right rotation makes the inner aa channel vacuum, with coefficient `A_b^(a,a,b)[c,0]`. The two evaluations contribute `k_a sqrt(d_a) k_b sqrt(d_b)`, the initial c cup contributes sqrt(d_c), and the comparison c cap/cup has scalar k_c d_c. Their quotient is exactly (Dual), so its scalar has been derived from the specified dualities/F table. The complete ten-channel table is

    (a,b;c)       q_(a,b)^c   nu_(a,b)^c   j_c   j_a j_b
    (0,0;0)          1            1         1       1
    (0,eta;eta)      1            1         1       1
    (eta,0;eta)      1            1         1       1
    (0,D;D)          1            1       kappa   kappa
    (D,0;D)          1            1       kappa   kappa
    (eta,eta;0)      1            1         1       1
    (eta,D;D)        1            1       kappa   kappa
    (D,eta;D)        1            1       kappa   kappa
    (D,D;0)        kappa          1         1       1
    (D,D;eta)      kappa          1         1       1.

For the last two rows the two F factors in (Dual) are1 and tau, and sqrt(d_D^2/d_c)=d, giving d tau=kappa. For mixed rows both F factors are1, the dimension quotient is1, and k_a k_b/k_c=1; unit/group rows are immediate. Every q entry is a real unit scalar, so its dual has the same scalar. With all types displayed, the double-dual tensorator is

    nu_(a,b): a**⊗b** → (a⊗b)**,
    nu_(a,b)=(q_(a,b)^*)^−1 q_(b*,a*).

On every c summand its coefficient is q_(b,a)^c/q_(a,b)^c=1, as recorded in the table. Therefore the exact monoidality equation

    j_(a⊗b)=nu_(a,b)(j_a⊗j_b)

holds on every admissible simple channel: it is the last two equal columns of the table. Naturality follows from the scalar simple components, additivity from the chosen direct-sum duals, and arbitrary tensor products follow from these pair equations and the canonical dual tensorator coherence. This supplies the explicit pivotal monoidality check independently of merely assigning dimensions or quoting a canonical-positive-pivot theorem.

The pivotal curl/twist on D is fixed, not chosen from its square alone. Taking the positive partial trace of the DD braiding gives

    theta_D=(v(0)+v(1))/d=beta(1−i)/d=kappa/beta.

The last equality uses beta^2=kappa(1+i)/d. The group twists are theta_0=1, theta_eta=−1. Balancing holds in every channel: group-group crossings square to1; mixed crossings square to−1, giving theta_D/(theta_eta theta_D)=−1; and in DD the equation is `v(g)^2=theta_g/theta_D^2`, since `u(g)^2=chi(g,g)=theta_g`. All labels are self-dual and the scalar twist equals its dual, so the ribbon condition holds. This determines the positive-pivot twists

    root: theta_D=−1/beta_−=s^3, theta_eta=−1;
    current28: theta_D=1/beta_+=s^−1, theta_eta=−1.

The exact conversion is a parity **associator change**, not a gauge: declare D odd and group objects even. Multiply alpha_(X,Y,Z) by `omega(|X|,|Y|,|Z|)=(-1)^(|X||Y||Z|)`, and multiply c_(X,Y) by `zeta^(|X||Y|)` with zeta=−i. The cocycle identity for omega is the equality of the two mod2 expansions `bcd+a(b+c)d+abc=(a+b)cd+ab(c+d)`. It changes only the DDD associator block, so tau flips sign. The corresponding abelian hexagon correction holds because zeta^2=−1: only the all-odd placement has a nontrivial correction, where the two one-step factors give zeta^2 and the associator sign gives −1; mixed-parity placements give1. Equivalently the complete table/H verification above proves the changed hexagons entrywise.

Keep the D coevaluation and flip its evaluation; both snakes remain true because the odd triple associator has also changed sign. This flips kappa while preserving the positive pivotal dimension. The mixed braidings remain i, beta changes by −i, and the positive curl changes by −i as well:

    beta_+=(−i)beta_−=s,
    theta_D^+=(−i)theta_D^−=s^−1.

This gives precisely the full current28 pullback table and +Hadamard. It preserves the richest valid statements of both conventions while explicitly retaining their inequivalent associators/FS/braid phases. If one instead wants object braiding phases exp(−pi i/8),exp(3pi i/8) and theta_D=exp(+pi i/8), reverse the braiding of the current28 category and invert its twist; this is a further operation and is not the convention used in the existing definitions.

## 6. Full periodic path space, wraparound operators, and translation

Use reference charge D. A length-L path is `(x1,...,xL)`, with `xi D` containing `x_(i+1)` and cyclic `x_(L+1)=x1`. All elementary fusion indices equal1; none has been quotiented out. The fusion rule forces alternation between D and G. Hence the space is zero for odd L, and for L=2N, N>=1, it is the orthogonal direct sum H⊕Hbar of two 2^N-dimensional spaces:

    H:    x_(2j−1)=D, x_(2j)=b_j∈G;
    Hbar: x_(2j−1)=b_j∈G, x_(2j)=D.

The maps Phi_H,Phi_Hbar send these paths to the standard orthonormal bit basis `|b1...bN>`, with explicit inverse obtained by inserting the fixed D labels. This includes both periodic sectors, with no total-flux projection or global-spin parity restriction. At N=1 there are four states, not two.

For definiteness P_i below is the pair projector for the two D reference edges from xi to x_(i+2); it changes only x_(i+1). Its F matrix is `F_(x_(i+2))^(xi,D,D)`, with source intermediate x_(i+1) and target DD output. This indexing differs from Shao's link label by one. If xi=x_(i+2)=D, this is kappa Hadamard and the vacuum projector is `(I+X)/2` on the intermediate bit. If both neighboring labels are group elements g,h, the only path channel is D and the DD output is g+h, so the vacuum projector is delta_(g,h). Therefore, with j interpreted modulo N, the **complete** images, including wraparound, are

    Phi_H P_(2j−1) Phi_H^−1=(I+X_j)/2,
    Phi_H P_(2j)   Phi_H^−1=(I+Z_j Z_(j+1))/2,
    Phi_Hbar P_(2j−1) Phi_Hbar^−1=(I+Z_j Z_(j+1))/2,
    Phi_Hbar P_(2j)   Phi_Hbar^−1=(I+X_(j+1))/2.            (Q)

The overall kappa in the only 2×2 F block cancels in `F^−1 Pi_0 F`, so (Q) is valid in both categories. For N=1 a bond is `(I+Z1^2)/2=I`, while a field remains `(I+X1)/2`; this is the correct small periodic path-space boundary. A cyclic three-distinct-site TL relation must not be asserted for that length-two identification. The ordinary interior TL theorem retains its own applicable-index hypothesis.

Define T by `(Tx)_i=x_(i+1)` cyclically and C by `C|b1...bN>=|b2...bN b1>`. Direct evaluation on both parity patterns gives, in the order H⊕Hbar,

    Phi T Phi^−1=[[0,C],[I,0]], T^2=diag(C,C), T^(2N)=I.

This is unitary. It obeys `T P_i T^−1=P_(i−1)` for every cyclic i: from H to Hbar the bit coordinates are unchanged, and from Hbar to H they shift by C; `C X_j C^−1=X_(j−1)` and the same relabelling holds for Z. Substitution in all four lines of (Q) proves the intertwining, including i=1 and i=2N. Thus the bit-sector maps intertwine specified local projectors and translation; they are not merely dimension counts.

In particular `sum_i(1−2P_i)` becomes two copies of `−sum_j(X_j+Z_jZ_(j+1))`. Unequal odd/even couplings give H-sector `−g sum X−h sum ZZ` and Hbar-sector `−g sum ZZ−h sum X`; only g=h is invariant under one-step T, while both are invariant under T^2. This is an explicit represented Hamiltonian consequence of (Q), not an assertion from fusion rules alone.

## 7. Actual annular line operators and the single-chain distinction

One can retain the stronger topological-line statement as well, now with a specified representation. Fuse a line a from below. Its matrix coefficient between periodic paths x and x' is the following completely indexed cyclic F contraction:

    (Y_a)_(x',x)=product_(i=1)^(2N)
         F_(x'_(i+1))^(a,xi,D)[ x_(i+1), x'_i ],           (Y)

provided x'_i occurs in a xi at every edge; otherwise it is zero. Each displayed row/column includes the elementary multiplicity indices (all1 here). It is precisely the associator moving `(a xi)D` to `a(xi D)` around the circle, so it specifies the wrap contraction rather than assuming an unspecified “line symmetry.”

The unit gives I. For a=eta, every admissible output flips each group bit and fixes D, and every local F coefficient in (Y) is1. Therefore

    Y_eta=diag(Q,Q), Q=product_j X_j.

For a=D, H maps to Hbar. The odd factors are `kappa/d (-1)^(b_j c_j)` and the even factors are `(-1)^(b_j c_(j+1))`, where b is the input H bit string and c the output Hbar string. Multiplying gives

    (Y_D)_(c,b)=kappa^N K_(c,b),
    K_(c,b)=2^(−N/2)(−1)^(sum_j c_j(b_(j−1)+b_j)).

On the reverse sector the same cyclic contraction gives kappa^N K†. All arithmetic in the exponent is mod2, with b_0=b_N. Hence

    Y_D=kappa^N [[0,K†],[K,0]].                            (Dline)

Every claimed line identity can now be proved without a diagrammatic slogan. The finite character sum over b gives

    (K†K)_(c,b)=(KK†)_(c,b)
       =2^−N sum_y (−1)^(sum_j y_j((b_j+c_j)+(b_(j−1)+c_(j−1))))
       =delta_(c,b)+delta_(c,b+allones).

The exponent vanishes for every y exactly when b+c is constant around the cycle. Thus `K†K=KK†=I+Q`; also `KQ=QK=K` since simultaneous bit complementation changes the exponent by an even integer. It follows immediately that

    Y_D^2=I+Y_eta, Y_eta^2=I, Y_eta Y_D=Y_D Y_eta=Y_D.

The line D has rank 2^N on the full 2^(N+1)-dimensional space and is noninvertible; each K has rank 2^(N−1). These formulas include N=1, where K is 2^−1/2 times the all-ones matrix.

The kernel also gives the **actual local intertwining**

    K X_j=Z_jZ_(j+1) K,
    K Z_jZ_(j+1)=X_(j+1) K.                               (I)

Indeed changing input b_j changes the phase by c_j+c_(j+1); changing output c_(j+1) changes it by b_j+b_(j+1). These are exactly the two lines of (I), with wraparound indices unchanged. Their adjoints handle the reverse sector. Comparing with (Q) proves `[Y_D,P_i]=[Y_eta,P_i]=0` for every i and hence commutation with every represented Hamiltonian above. This also proves that the same D line intertwines the high/low-coupling spin Hamiltonians on the two sectors.

Finally the kernel transpose satisfies `K†=CK=KC`: transposing interchanges `sum c_j(b_(j−1)+b_j)` with `sum c_j(b_j+b_(j+1))`, which is exactly a cyclic bit shift of the input or output. Consequently (Dline) commutes with the full T block matrix. On a **single** bit-chain space, however,

    K^2=(I+Q)C^−1,
    (K/sqrt(2))^2=((I+Q)/2)C^−1.

The latter is the usual normalized single-chain duality operator, with spin-lattice translation `T_Ising=C^−1` in this orientation. Its translated square differs from the doubled-space fusion square, and its domain has half as many states. These equations exhibit the full distinction requested by the periodic two-sector claim rather than narrowing it to a three-D fusion block or conflating its operators with a single-chain representation.

## 8. Evidence, source limits, and integration contract

`coherence-check.py` constructs all labelled fusion-tree states, applies both pentagon routes and both typed hexagon routes to every admissible basis column for each kappa, and checks them exactly over `Q(i,sqrt(2),beta)` with `beta^2=kappa(1+i)/sqrt(2)`. It separately checks the periodic Fourier/intertwining identities with exact integer matrices for N=1,...,6. `root-gauge-check.py` checks the actual root/JW gauge, all33 F blocks and all braiding channels. The symbolic category proof, full placement enumeration and character-sum arguments above establish the unbounded statements; the finite scripts corroborate them.

Authentic sources were read as recorded in the separate receipt. Siehler's eight-page paper gives the normal associator table and a full hexagon reduction/proof; its monoidal classification premise cites Tambara–Yamagami rather than proving the pentagon, so section2a supplies that proof locally for G=Z/2. Its final example has a sign display that should not be substituted for the consistent formulas of §§2–3; all coefficients here are verified from the explicit hexagons and root gauge. Penneys's Ising section warns of the negative red-cup zig-zag sign and leaves F extraction as an exercise; it is not a full all-label coherence supplier. Nayak distinguishes Ising from SU(2)_2 and displays their opposite three-object F signs; its physical R terminology is not the library's inverse-pullback definition. Shao §3.4 supplies the periodic-sector and two different operator-algebra context, but its pictorial line argument is replaced here by the explicit cyclic kernel and its exact intertwining proof. No claim of reading a nonexistent local theta/Ising coherence proof in those sources is made.

All reusable mathematical suppliers needed by integration should be A-homed lemmas/theorems: the full ell4 normal-gauge Ising coherence construction, its explicit parity associator/braiding conversion, and the represented periodic two-sector/projector/line interface. The current28 sector example may remain a worked leaf; it must not become a theorem dependency. The existing B periodic example can instantiate the complete suppliers, with its convention note updated to the actual kappa/chirality and its stale “PA31 has no authored items” remark reconciled by the parent. No consumer, readiness, source coverage, or frozen root convention has been changed here.
