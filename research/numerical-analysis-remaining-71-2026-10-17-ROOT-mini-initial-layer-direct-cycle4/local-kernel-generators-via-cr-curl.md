# Actual MINI kernel: zero-mean nodal part and local curl generators

Research-only structural lemma, 2026-10-18. This uses the actual MINI space and its actual cell means. It gives local generators for a large exact portion of Z_h; it does not assert stable graded weighted frame inversion or the requested sector observation bound. No canonical files or controls were changed.

## 1. Exact mean decomposition

Use the mean-one bubble beta_K. For every nodal zero-boundary continuous P1 vector l, put

    T_h l|K = l|K-beta_K m_K(l).

Every cell mean of T_hl is zero, so T_hl lies in Z_h. For m in the vector-valued cellconstant space M_h=P0(T_h)^d, put B_h m|K=beta_K m|K. Every MINI velocity decomposes uniquely as

    v_h=T_h l+B_h m,
    m|K=m_K(v_h).

Since b(v_h,q_h)=sum_K |K|m_K(v_h) dot grad q_h|K, define

    K_h={m in M_h:(m,grad q_h)=0 for all q_h in Q_h}.

Then the exact vector-space decomposition is

    Z_h = T_h V_h^nodal direct-sum B_h K_h.                              (1)

The directness follows from unique nodal values: bubbles vanish at all vertices, so T_hl+B_hm=0 implies l=0, then m=0. This is not an L2 orthogonal decomposition. With gamma=m_K(beta_K²), its actual cross term is

    (T_hl,B_hm)= (1-gamma) sum_K |K|m_K(l) dot m|K.                      (2)

Thus weighted stability cannot be inferred from directness alone.

## 2. A local exact subspace of the cell-mean kernel

Let CR_0 be the scalar Crouzeix--Raviart space: piecewise affine functions with equal face averages from adjacent simplices, and zero average on each boundary face. For d=2 use the broken scalar curl

    curl_h phi=(partial_2 phi,-partial_1 phi),

up to an immaterial orientation choice. For d=3 use the usual broken vector curl on CR_0^3. Write V_CR=CR_0 for d=2 and V_CR=CR_0^3 for d=3. Then

    curl_h V_CR subset K_h.                                             (3)

Proof: for each q_h in Q_h, integrate curl_h phi dot grad q_h on each cell. The interior divergence term vanishes because curl grad q_h=0. On an interior face the tangential gradient of the continuous affine q_h is single valued and constant. The two contributions therefore cancel using equality of the two averages of phi. Boundary contributions vanish because its boundary face averages are zero. This verifies (3) for the actual pressure gradients, without pointwise normal continuity of curl_h phi.

Each CR face basis function is supported on the two cells sharing that interior face. Its broken curl is cellconstant and has the same support. Consequently

    B_h curl_h(phi_F e_j)

is an actual MINI velocity in Z_h supported on at most two cells (one scalar generator in d=2; the coordinate choices j=1,2,3 in d=3). The bubble makes it globally conforming and zero trace even though the CR potential is nonconforming. This provides genuine local kernel tests rather than unrestricted bubble tests, which generally fail the kernel constraint.

## 3. Exact algebraic characterization of the remainder

For m in M_h, elementwise integration by parts gives

    (m,curl_h phi)=sum_(interior faces F)
                       [tangential jump of m on F] paired with integral_F phi,

with the standard rotated version in two dimensions. Every CR interior face average is an independent degree of freedom. Therefore

    (curl_h V_CR)^perp = N_h,                                           (4)

where

    N_h={m in M_h:the tangential components of m agree
                     across every interior face}.

This equality is in the ordinary L2 inner product on M_h. Indeed (4) follows in one direction by cancellation, and in the reverse direction by choosing one CR face basis and one vector coordinate at a time. No weighted norm or inverse estimate is involved.

The space grad Q_h is a subspace of N_h: the tangential derivative of a continuous P1 function is single valued across each face. Define the exact harmonic remainder purely algebraically by

    H_h=N_h intersect (grad Q_h)^perp.

Finite-dimensional orthogonal decomposition first inside N_h and then in M_h yields

    K_h = curl_h V_CR orthogonal-direct-sum H_h.                         (5)

This formula holds on the original general connected polygon/polyhedron, including holes, without assuming a topology theorem. On a topologically simply connected mesh domain, N_h=grad Q_h and H_h=0. One elementary proof assigns a nodal potential by integrating m along mesh-edge paths: tangential continuity makes every edge integral well defined; cellwise constancy makes the integral zero around every triangular face; simple connectedness makes every closed edge path a sum of such face loops. The affine function with these nodal values has gradient m on every cell. Adjusting its mean places it in Q_h. In a domain with holes, the finite-dimensional space H_h records the remaining edge periods; no dimension estimate is needed for (5).

Combining (1) and (5) gives

    Z_h = T_h V_h^nodal
             direct-sum B_h curl_h V_CR
             direct-sum B_h H_h.                                       (6)

The first two summands have generators supported on vertex patches and on two-cell face patches, respectively. The orthogonality asserted in (5) is in cellconstant mean space; after B_h it remains L2 orthogonality between the last two summands because all bubbles have the same scaled second moment gamma. It does not make the first summand orthogonal to either.

## 4. What is still needed for the weighted observation

The desired observation C_h v=h_K(v-m_Kv) has the exact form

    C_h v|K=h_K[l-m_Kl+(beta_K-1)(m-m_Kl)].                              (7)

Thus local kernel tests are now available for both the nodal fluctuation and curl-generated mean part. However, using their span to invert a weighted local mass frame requires a stability theorem. Neither (6) nor the fixed support of the generators proves

    ||C_h z||2 <= C ||A_h^(-1/2)z||2

or any weaker restricted estimate for (lambda+A_h)^(-1)F_hq. The cross term (2), the variable local cell volumes, and the pressure-gradient complement must be retained. In particular a frame may span a space without admitting a uniformly bounded inverse in the grading-dependent weighted norm.

A possible use is to test the actual condensed coarse-cell equations against the generators in (6): pressure terms cancel exactly, without an unsupported projection of a full-space bubble test into Z_h. This avoids the invalid compression inversion identified by root, but the quantitative coarse-cell estimate has not yet been obtained.

## 5. Local generator scaling and the exact loads they detect

For an interior vertex a, T_h(lambda_a e_j) is supported on its vertex star and satisfies

    ||T_h(lambda_a e_j)||2 <= C h_a^(d/2),
    ||T_h(lambda_a e_j)||V <= C h_a^(d/2-1).

For an interior face F, a CR face basis function has gradient of size O(h_F^-1) on its two-cell patch. Hence the bubble-curl generator z_(F,j)=B_h curl_h(phi_F e_j) satisfies

    ||z_(F,j)||2 <= C h_F^(d/2-1),
    ||z_(F,j)||V <= C h_F^(d/2-2),

with the scalar convention in d=2. The estimates follow by affine scaling of the finitely many reference polynomials. Zero generators are simply discarded. Local shape regularity makes the adjacent diameters comparable; no global diameter ratio enters.

There is an explicit useful description of their mass loads. Write z=l+beta(m-m_l), and put

    s_K=m_K(beta_K z)=gamma m_K-(gamma-1)m_K(l).

Then

    (z,B_h curl_h phi)=(s,curl_h phi).                                  (8)

Thus the local face loads detect precisely tangential jumps of this bubble-weighted cell average s, rather than tangential jumps of the ordinary cell mean m. If all these loads vanish, s belongs to N_h. For the nodal generators,

    (z,T_hk)=(l,k)-gamma^-1 sum_K |K|m_K(l) dot m_K(k)
                -(1-gamma^-1)sum_K |K|s_K dot m_K(k).                   (9)

This is obtained from the earlier mass formula by substituting m=[s+(gamma-1)m_l]/gamma. Equations (8)--(9) recover the actual condensed mass system from local kernel tests. In particular, replacing the bubble-weighted average s by m would drop the factor gamma and change the scalar pressure coupling.

For delta_lambda=W_lambda q-W_h q, exact stationarity of W_lambda and mass orthogonality of W_h give, for every one of these actual local kernel generators z_i,

    (delta_lambda,z_i)=-lambda^-1 a_nu(W_lambda q,z_i).                  (10)

The right side is local to the generator patch. This identity is sector-valid and retains the canonical strain form. Summing its squared local loads may be useful for a coarse-cell estimate, but a quantitative inequality recovering ||C_h delta_lambda|| from those loads still requires the weighted frame theorem identified above.
