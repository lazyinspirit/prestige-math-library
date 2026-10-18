# Exact pressure-free channels for actual canonical-strain MINI

Research proof, 2026-10-18. This separates actual Stokes pressure observation from velocity roughness. It proves an exact algebraic criterion and gives actual shape-regular graded MINI examples with an entire tangential sector invisible to pressure. It does NOT assert that the current generic toothed branching fan lies in that invisible sector, or settle the original smooth instantaneous pressure claim. No canonical/runtime/hash/readiness changes or tests.

## 1. Exact finite-dimensional criterion, with the mass-potential subtraction

Use the full, uncondensed actual MINI velocity basis and mean-zero continuous P1 pressure basis. Let M be its positive mass matrix, K its canonical strain matrix

    a(v,w)=2nu integral eps(v):eps(w),

and D the constraint matrix, so the mixed equations use D^T p in momentum and Dv=0. Put

    S=D M^(-1) D^T,
    P=I-M^(-1)D^T S^(-1)D,
    Z=ker D,
    A=P M^(-1)K restricted to Z,
    L=-S^(-1)D M^(-1)K restricted to Z.                    (1)

MINI inf-sup makes S invertible. P is precisely the M-orthogonal projection onto Z. A is positive self-adjoint in the M inner product on Z. Nothing in (1) assumes zero cell means, pointwise divergence zero, scalar-Laplacian stiffness, or independent nodal and bubble modes.

For an actual smooth source load f_i=(u,v_i), its original mass projection and mass multiplier satisfy

    M z_0+D^T phi_u=f,       Dz_0=0.

The body-force resolvent satisfies

    (lambda M+K)v_lambda+D^T pi_lambda=f,   Dv_lambda=0.

Subtracting the mass-potential equation and applying D M^(-1) proves exactly

    v_lambda=(lambda+A)^(-1)z_0,
    pi_lambda-phi_u=L(lambda+A)^(-1)z_0.                  (2)

Thus (2) is the Laplace pressure of the homogeneous Stokes orbit initialized by the actual P_Zh u. The subtraction is essential. The pressure of that orbit at time t is L exp(-tA)z_0.

Let n=dim Z. The following are equivalent:

* pi_lambda-phi_u=0 for every positive lambda;
* L exp(-tA)z_0=0 for every t>=0;
* L A^k z_0=0 for k=0,...,n-1;
* for each distinct eigenvalue mu of A, its M-orthogonal spectral component z_mu of z_0 satisfies

      K z_mu=mu M z_mu,      D z_mu=0.                    (3)

For proof, expand (2) into the distinct poles (lambda+mu)^(-1). Their residues must separately vanish, so Lz_mu=0. Since Az_mu=mu z_mu, the condition D M^(-1)Kz_mu=0 says the projection in A is unnecessary, yielding (3). The converse is immediate. The finite powers follow from Cayley-Hamilton (or the distinct-eigenvalue Vandermonde system).

In particular, the maximal pressure-free invariant subspace is exactly

    direct sum_mu [ker(K-mu M) intersect ker D].           (4)

These are full unconstrained velocity generalized eigenvectors which happen to satisfy every actual MINI divergence constraint. A rough weakly divergence-free velocity need not have any pressure component merely because it is rough.

## 2. Canonical strain retains the actual bubble/nodal coupling

On a triangle K of area V, write v=l+b beta with b=27lambda_0 lambda_1 lambda_2 and g_i=grad lambda_i. Define

    T_K=integral grad b tensor grad b
       =(81/20)V sum_i g_i tensor g_i.

The EXACT actual local matrices are

    M_bb=(81/280)V I,
    M_(i,b)=(3/20)V I,
    K_bb=nu[(trace T_K)I+T_K],
    K_(i,b)=0,
    D_(pressure i,b)=(9/20)V g_i^T.                        (5)

The P1 strain block is

    K_(i alpha,j beta)
      =nu V[delta_(alpha beta)g_i dot g_j
                                +(g_i)_beta(g_j)_alpha].

The bubble-to-affine strain block vanishes because integral grad b=0, but its MASS coupling does not vanish. Thus a pressure-free generalized eigenvector with affine nodal coefficients a_i must satisfy, on EACH triangle,

    [nu((trace T_K)I+T_K)-mu(81/280)V I] beta_K
                     =mu(3/20)V sum_i a_i.                (6)

It must simultaneously satisfy every assembled nodal velocity row and every pressure row. One cannot check (6) alone or insert beta_K=-(20/27)sum a_i by assuming zero cell means.

For a PURE BUBBLE field (all velocity nodal coefficients zero), (3) is equivalent to the following complete actual conditions:

    [K_bb-mu M_bb] beta_K=0                  on each K;
    sum_(K incident interior velocity node i) V_K beta_K=0;
    sum_(K incident pressure node i) V_K beta_K dot g_(i,K)=0. (7)

The second line is the retained nodal mass equation; the third is the full weak divergence equation, including pressure nodes on the physical boundary. The common nonzero factors 3/20 and 9/20 have been divided out. These exact equations exhibit how a nonzero-mean bubble field can nevertheless be a genuine pressure-free canonical-strain mode.

## 3. A genuine actual MINI tangential eigenmode, with nonzero cell means

Take the diamond D with vertices e_0=(1,0),e_1=(0,1),e_2=(-1,0),e_3=(0,-1), triangulated by the four triangles K_j=(0,e_j,e_(j+1)), indices modulo four. All velocity boundary values are zero. Put all velocity nodal values zero, and take bubble coefficients

    beta_0=(-1,1),     beta_j=R_(j*pi/2) beta_0.

This is a nonzero conforming MINI velocity z. On K_0,

    T=(81/40)[[2,1],[1,2]],
    T beta_0=(81/40) beta_0,
    K_bb beta_0=(81/8)nu beta_0,
    M_bb beta_0=(81/560) beta_0.

Rotations give the same equations on all four triangles. Hence the bubble equation is K_bb beta_j=70nu M_bb beta_j. The one interior nodal mass row vanishes because sum_j beta_j=0, and the nodal strain/bubble coupling is zero.

For the root pressure node, beta_j is tangent to its triangle's radial bisector, while grad lambda_root is radial, so each contribution to the pressure row vanishes separately. At an outer pressure vertex, the two incident bubble gradients cancel: for e_0 the K_0 term beta_0 dot (1,0)=-1 and the K_3 term beta_3 dot (1,0)=1 have equal area; the other vertices follow by rotation. Thus Dz=0 exactly. All equations in (7) hold and

    Kz=70nu Mz,       Dz=0.

The homogeneous Stokes solution exp(-70nu t)z has IDENTICALLY ZERO pressure. Its cell mean is (9/20)beta_j, which is nonzero on every triangle. This is an actual symmetric-strain MINI example, not a scalar-Laplacian or zero-cell-mean surrogate.

## 4. A fixed-domain graded family with an entire pressure-free tangential sector

There is also an explicit arbitrary-depth shape-regular graded family for which this invisibility follows from exact mesh symmetry.

Let r_k=2^(-k), k=0,...,m. For each annular quadrilateral

    (r_k e_j, r_k e_(j+1), r_(k+1)e_(j+1), r_(k+1)e_j)

insert its arithmetic center c_(k,j)=(3r_k/8)(e_j+e_(j+1)) and triangulate it into four triangles from that center. Triangulate the innermost diamond into four triangles from 0. Consecutive annuli have identical unsubdivided shared edges, so this is a conforming Euclidean simplicial mesh. All triangles belong to a fixed finite list of similarity types, so their shape bound is uniform in m. The outer annulus stays fixed, while h_min is comparable to 2^(-m).

The mesh is invariant under the dihedral group G of this diamond. Every vertex lies on one of its reflection axes: ring vertices lie on coordinate axes, annular centers on diagonal axes, and 0 lies on every axis. Therefore the scalar P1 pressure space contains NO axial character:

    q(Rx)=det(R) q(x) for every R in G  implies  q=0.       (8)

Indeed each vertex is fixed by some reflection, forcing its nodal value to be its own negative. Subtracting the pressure mean does not alter the conclusion.

Let the axial/toroidal velocity sector be

    V_ax={v in V_h: v(Rx)=det(R)R v(x) for every R in G}.

The actual mass form and canonical symmetric strain form are invariant under all these orthogonal transformations. The divergence pairing is equivariant. Averaging a pressure test against the axial character reduces it to the zero space in (8), proving

    V_ax subset Z,      M^(-1)K V_ax subset V_ax.           (9)

Consequently every vector in V_ax is in the pressure-free subspace (4), at EVERY grading depth. This statement retains all cell means, nodal/bubble mass terms and full canonical strain stiffness.

For an actual FIXED smooth source choose

    u(x)=eta(|x|^2) Jx,

with eta smooth, nonnegative and supported in 0.55<|x|<0.60. This annulus lies strictly inside D and outside the first inner diamond, so it is contained in the unchanged first annular region. The function is exactly divergence free, smooth, compactly supported and no slip, with norms independent of m. It belongs to the axial sector. The unconstrained mass projection and every unconstrained canonical-strain resolvent preserve that sector. They already satisfy all weak divergence constraints by (9), so their actual mixed multipliers are

    phi_u=0,       pi_lambda=0 for every lambda>0.

Thus the actual mass-projected initialization has pi_lambda-phi_u=0 at every depth. This is not a counterexample to a pressure estimate; it is an exact graded actual-MINI obstruction to deducing pressure growth from a tangential velocity mechanism alone. No roughness or bad rate is asserted for this particular smooth source.

The generic aligned toothed branching template has many vertices off reflection axes, so (8) is NOT available there. This construction neither proves nor disproves its pressure visibility.

## 5. A precise source/observation noncancellation test

Let e_(mu,j) be an M-orthonormal basis of the A eigenspace at mu, and let zeta_(mu,j)=L e_(mu,j) be its actual pressure coefficient vector. For any admissible smooth source u and smooth scalar observation q_src,

    (pi_lambda-phi_u,q_src)
       =sum_mu R_mu(u,q_src)/(lambda+mu),

    R_mu(u,q_src)
       =sum_j (u,e_(mu,j)) (zeta_(mu,j),q_src).             (10)

Equation (10) includes pressure signs through L as defined in (1). It is invariant under basis changes within a multiple eigenspace. A necessary and sufficient condition for this ONE observed crossentry to vanish at every positive lambda is R_mu=0 for every distinct mu. It is not enough that the source and observation each separately see some mode; they must have a nonzero joint residue within the same eigenspace.

The established fixed compact solenoidal source on an unchanged root triangle can have all raw affine moments zero and raw bubble moment B arbitrary. Then the actual source factor in (10) is exactly

    (u,e_(mu,j))=B dot beta_(mu,j),source triangle.          (11)

Likewise a fixed compact mean-zero q_src in that triangle realizes any fixed three P1 moments with sum zero, so its factor in (10) is the corresponding pressure coefficient difference. Neither source norm changes with refinement. Thus an actual local noncancellation certificate is a nonzero bilinear residue in (10), using (11) and an actual nonconstant root pressure trace. For a simple eigenvalue it suffices that both explicit factors are nonzero. At multiple eigenvalues their sum must be checked.

Equivalently, using the actual mixed divergence lifts W_lambda q and W_h q, the same scalar observation is exactly

    B dot [beta_(W_lambda q),source triangle
                         -beta_(W_h q),source triangle].  (12)

A nodal/bubble mass-transfer lower bound does NOT imply (10) or (12) is nonzero. In particular all these observations vanish in the axial example above despite its nonzero actual tangential modes and cell means.

For a multiscale pressure counterexample one must prove quantitative growth of this same crossentry for fixed admissible u and uniformly L2-normalized q, not merely a nonzero local pressure eigenmode or velocity Hs divergence. A nonzero residue proves failure of IDENTICAL invisibility, but does not by itself control cancellations at positive lambda or establish the needed lambda^(-gamma) rate with gamma<1/4. Those remain the owner's source/output task for the toothed family.

## 6. Pressure-generated lifts already avoid this invisible subspace

The pressure-free example does not supply an obstruction to an estimate stated ONLY for genuinely pressure-generated lifts. This distinction follows exactly from the same matrices.

For a pressure-constraint load q in coordinate duality, the minimum-mass lift is

    W_h q=M^(-1)D^T S^(-1)q.

Let W_lambda q be the actual canonical-strain lift with D W_lambda q=q and zero velocity force. Then w_lambda=W_lambda q-W_h q belongs to Z. Testing its equation on Z gives

    (lambda+A)w_lambda=L^*q,                              (13)

where L^* is the adjoint using the M inner product on Z and coordinate duality on the pressure side. Indeed

    (Lz,q)=-a(z,W_hq).

If N is the invariant pressure-free subspace (4), it is reducing for A and L vanishes on N. Consequently L^*q belongs to its M-orthogonal complement, and so does w_lambda. Thus the generated-lift family was already confined to the pressure-observable reducing subspace; quotienting out N does not change that family.

A proof of the required uniform fractional estimate for these actual generated lifts would therefore remain relevant despite the toroidal example. The example specifically invalidates replacing those lifts by an arbitrary tangential P_Zh mass-projection channel without separately proving the source/output residues in (10). No quantitative estimate on the observable quotient follows merely from the finite-dimensional decomposition.
