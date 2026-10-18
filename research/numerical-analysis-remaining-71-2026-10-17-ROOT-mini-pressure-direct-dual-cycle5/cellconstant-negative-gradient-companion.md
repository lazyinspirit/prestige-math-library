# Endpoint negative-norm companion for cellconstant gradients

Research only, 2026-10-18. This proves an actual mesh-uniform H^-1 companion. It does not transfer a negative estimate through the full mass projector and does not resolve instantaneous pressure. Matching shape-regular simplicial meshes in dimensions two and three are allowed with arbitrary grading; pressure vertices have no boundary constraint.

## Claim and norm convention

Let M_h be the vector cellconstant space and Q_h the continuous piecewise affine scalar space, modulo constants. Write ||r||_-1,U for the dual norm of H1_0(U)^d with gradient norm. For every m in M_h and q in H1(D), there exists q_h in Q_h such that

    ||q−q_h||2 <= C ||grad q−m||_-1,D,                (1)
    ||m−grad q_h||_-1,D <= C ||grad q−m||_-1,D.      (2)

The constant depends on the dimension and fixed shape bound, not h_min or grading. Subtracting the mean of q_h imposes the pressure gauge without changing (2); (1) uses the corresponding unshifted representative. Consequently

    inf_qh ||m−grad q_h||_-1,D
        <= C inf_q∈H1 ||m−grad q||_-1,D.              (3)

The apparent strength of (1) concerns the same potential q appearing in the residual; constants are preserved by the construction.

## Actual local supplier

Read in full: `items/thm-na-star-shaped-bogovskii-bounded-right-inverse.md`. A simplex is star-shaped with a uniformly comparable inscribed ball under the fixed shape bound. Affine Piola scaling of that actual L2_0-to-H1_0 divergence inverse gives

    ||v−mean_K v||2,K <= C ||grad v||_-1,K,           (4)

with uniform C. Indeed for v_0=v−mean_Kv, choose z with div z=v_0 and ||grad z||2<=C||v_0||2. Then ||v_0||2²=(v_0,div z)=−<grad v,z>, proving (4). The inherited Countable Choice assumption of the actual supplier is retained. No negative-order Bogovskii theorem or fractional elliptic regularity is used.

## Proof

Put r=grad q−m. On each K choose the affine p_K with gradient m_K and with mean(q−p_K)=0. Applying (4) gives

    ||q−p_K||2,K <= C ||r||_-1,K.                   (5)

These local negative norms satisfy a useful specific localization bound. Choose on each cell an H1_0 test nearly attaining its local norm, multiply by that norm, and extend by zero. The gradient norm squared of the sum is the sum of the squared cell gradient norms, while its pairing with r approaches the sum of squared local norms. Finite sums suffice on each mesh. Taking the suprema yields

    sum_K ||r||_-1,K² <= ||r||_-1,D².                (6)

For two-cell face patches the analogous bound has a fixed overlap constant: gradients of the zero-extended tests overlap at most d+1 times, so pointwise Cauchy–Schwarz bounds the gradient norm of their sum. This is a direct H1_0 test-sum argument. It asserts no unrestricted localization in an intrinsic fractional norm.

For an interior face F=K+∩K− let J_F=p_+−p_− on F, with a consistent normal pointing from K+ to K−. It is an affine face polynomial. There is a vector polynomial face-patch test z_F in H1_0(K+∪K−)^d with common trace n b_F² J_F on F and zero trace on every other patch face. Extend the face polynomial into either cell and multiply by the product of its face-vertex barycentric coordinates squared; both traces coincide. Reference polynomial norm equivalence and scaling give

    integral_F b_F² J_F² >= c ||J_F||2,F²,
    ||grad z_F||2 <= C h_F^(-1/2)||J_F||2,F.        (7)

By integration by parts separately on the two cells, grad p_K=m_K cancels the vector cellconstant term exactly. Thus, with the chosen orientations,

    <r,z_F> = −sum_(K=K+,K−)(q−p_K,div z_F)_K
                 − integral_F J_F(z_F·n).

The sign of the last term is immaterial to the ensuing bound. Equation (7) gives

    h_F^(1/2)||J_F||2,F
       <= C[||r||_-1,patch(F)+||q−p||2,patch(F)].    (8)

Summing squares, applying the face-patch version of (6), and using (5),(6), proves

    sum_(F interior) h_F||J_F||2,F² <= C||r||_-1,D². (9)

Now define q_h by ordinary Oswald nodal averaging: at each mesh vertex a take the arithmetic average of all values p_K(a) over incident cells. Boundary vertices are included in the same manner, because Q_h has no homogeneous boundary condition. This defines a continuous piecewise affine scalar.

Here is the needed L2 estimate directly. On a fixed cell K, the affine function p_K−q_h is bounded in L2(K) by C h_K^(d/2) times the sum of its vertex discrepancies. Each discrepancy is an average of differences p_K(a)−p_L(a). Join K and L inside the vertex star by a bounded facet chain through a. Matching shape regularity and the Lipschitz-domain vertex-star geometry give bounded chain lengths, comparable diameters and bounded overlap; these are the same bounded vertex patches used in the existing Scott–Zhang construction. Across one face containing a, the polynomial inverse trace estimate gives

    |p_+(a)−p_−(a)| <= C h_F^(-(d−1)/2)||J_F||2,F.

Hence the square of ||p−q_h||2 is at most C sum_F h_F||J_F||2,F² after summing the bounded patches. This is a local polynomial estimate with no global mesh ratio. Combine it with (5),(6),(9) to obtain (1).

Finally grad:H1→H^-1 is bounded in the L2 potential norm: |<grad v,z>|=|(v,div z)|<=sqrt(d)||v||2||grad z||2. Thus

    ||m−grad q_h||_-1
      <=||r||_-1+sqrt(d)||q−q_h||2,

which proves (2), and then (3) by taking the infimum. Every construction above is finite and linear in (m,q), apart from the tests used only to prove the norm estimates.

## Consequence and remaining interface

Together with the independently proved weighted negative-curl efficiency for the actual adjoint range, (3) gives a gradient companion in H^-1 for g=F*v: the reconstructed oscillation is controlled first, then its cellconstant part can be approximated modulo grad Q_h. This statement is about g. One still needs a valid dual-norm pairing involving the actual constrained vector v, rather than substituting the L2 angle at a different norm or assuming an H^-1-stable inverse of the full mass projector. An unrestricted such inverse would imply the false full-projector endpoint stability. No estimate for h_K(I−P0)v or pressure is claimed here.
