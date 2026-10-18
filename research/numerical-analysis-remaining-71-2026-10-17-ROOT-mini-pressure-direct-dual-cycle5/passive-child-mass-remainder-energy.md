# Passive-child mass remainder: exact energy and root extraction

Research-only, 2026-10-18. This lemma concerns the MASS mixed problem, not the strain resolvent. It supplies a stable way to measure a ring remainder without inverting the child's mixed DtN in a raw coefficient norm. It does not prove the incoming decomposition, a whole twenty-port complement bound, or nonextinction.

## 1. Exact finite glued problem

Let a finite conforming MINI mesh on a connected polygonal region Omega include an arbitrary recursively refined child. Let V_h have prescribed velocity trace g on the entire geometric boundary and let Q_h have prescribed scalar pressure values p_B on a specified nonempty boundary set B. Write V_h^0 for the zero-velocity-trace space and Q_h^0 for the scalar P1 functions vanishing on B. The scalar pressure gauge is fixed by B. Suppose the actual source-free mass equations are

    (W,z)+(grad p,z)=0                    (z in V_h^0),
    (W,grad q)=0                         (q in Q_h^0).       (1)

In particular no pressure reaction at B is set to zero. Those reactions are retained outputs. All child-interface variables are free and satisfy the actual glued equilibrium; no abstract arbitrary saddle matrix is substituted for the child.

Suppose E_g is an actual MINI extension of g with ZERO vector mean on EACH cell, and P_B is an actual continuous P1 extension of the prescribed pressure values. Such E_g is obtained from any conforming nodal trace extension by the cell-mean bubble correction. The point here is the exact bound conditional on the actual extension norms, not an assertion that every boundary geometry has a uniform extension constant.

Take z=W-E_g and q=p-P_B in (1). Since grad p is cellconstant,

    (grad p,E_g)=0,
    (W,grad p)=(W,grad P_B),
    ||W||_2^2=(W,E_g)-(W,grad P_B).

Therefore

    ||W||_2 <= ||E_g||_2+||grad P_B||_2.                  (2)

The sign of the pressure term in this identity is negative. The estimate is independent of the number of child refinements and contains no norm of the child's DtN inverse.

Local bubble tests z=beta_K c in (1), with mean-one beta_K and gamma_d=mean(beta_K^2), also give

    |K| grad p|K = -integral_K beta_K W,
    ||grad p||_2 <= sqrt(gamma_d)||W||_2.                 (3)

Every such bubble test lies in V_h^0 even on boundary cells. Thus (2) controls the velocity AND the actual pressure gradient, without a scalar Poisson replacement. The pressure reactions at B remain unconstrained and generally nonzero.

The same result holds for the proved passive infinite child limit: use finite glued responses and the already established strong mass/pressure-gradient convergence. No strain estimate or pressure-front limit is used.

## 2. Scaling for a genuine incoming remainder

Suppose the ring/Green decomposition produces a remainder with velocity boundary values of size e and pressure potential boundary values of size R e on a region of diameter R. If its ACTUAL mesh extensions satisfy

    ||E_g||_2+||grad P_B||_2 <= K R e                    (d=2), (4)

then the complete glued remainder has

    ||W_rem||_2+||grad p_rem||_2 <= C K R e.             (5)

Here K must be proved for the actual ring/transition/boundary set. The checked logarithmic pressure lift is one candidate for the pressure part; neither a continuous extension nor an interpolant may be substituted silently. If the decomposition leaves a weak-moment source, the second equation of (1) changes and (2) must be modified. In particular sum of all weak moments zero is not enough to discard a nonzero moment vector.

For an incoming affine Taylor remainder e <= C(r/R)^2 A at a child of radius r, (5) gives total response norm at most C K (r^2/R) A. This uses the child's whole passive response, rather than attempting to suppress its inner trace directly.

## 3. Root velocity extraction, with the sharp star hypothesis stated

On each reference simplex, the MINI local mass form is positive definite in its P1 nodal and bubble coefficients. Consequently, after minimizing over the bubble and all other nodal coefficients,

    integral_K |v_h|^2 >= c_d |K| |v_h(o)|^2

for any vertex o of K. Summing the cells at a child root o yields

    |v_h(o)| <= C_d |star(o)|^(-1/2)||v_h||_L2(star(o)). (6)

If the actual nonterminal template has |star(o)| >= c a r^2 (the root fan alone gives this lower bound), then (5) implies

    |W_rem(o)| <= C K e R/(r sqrt(a)).                   (7)

With the affine remainder above,

    |W_rem(o)| <= C K (r/R)/sqrt(a) A.                  (8)

This is a root-VELOCITY estimate only. It does not control arbitrary pressure coefficients on very thin boundary stars and is not a twenty-state norm equivalence. The background used to define the two layer amplitudes must still be extracted from the incoming regular field; (3) cannot replace that extraction with a raw normal pressure trace.

## 4. Pressure Taylor error versus velocity error

An incoming pressure affine remainder of size O(r^2/R^2) alone does NOT imply a velocity remainder of that same size. On the physical Darcy branch, W=-grad p, so the corresponding velocity variation is generally first order O(r/R). Equations (4) and (8) are conditional bounds for the stated two boundary amplitudes; they must not be applied to that physical branch with a falsely squared velocity amplitude.

A second, potentially applicable scaling uses an ACTUAL CHILD-SCALE transition/collar. If its incoming velocity remainder is O((r/R) A), its pressure remainder is O(r(r/R) A), and actual extensions supported on that child-scale region have norm at most C K r(r/R) A, then (2) and (6) give the SAME useful root bound C K(r/R) A/sqrt(a). This requires those actual localized extensions and a valid split from the selfresponse; extending the velocity error over radius R instead loses this factor. Neither the localization nor the physical-branch derivative estimate is asserted here.

For branching attachment distances R comparable to the parent tooth separation scale, insert the actual r/R and driver normalization before summing. No branching count or parameter power is inferred in this note. The root-star UPPER bound needed to make the exterior neutral reaction small is a different assertion from the LOWER bound used in (6), and remains a separate geometric obligation.

## 5. Uniform mixed stability for a retained compact moment residual

The omission of a nonzero moment vector in section 2 can be avoided by the following exact mass estimate. On the same actual finite mesh, with homogeneous velocity and pressure boundary values, suppose

    (v,z)+(grad p,z)=F(z)           (z in V_h^0),
    (v,grad q)=ell(q)               (q in Q_h^0),

where |F(z)|<=f||z||_2 and |ell(q)|<=l||grad q||_2. There is no assumption ell=0 or a replacement by its total sum.

Let chi in Q_h^0 solve (grad chi,grad q)=ell(q). Define the actual cellbubble field b_chi|K=beta_K grad chi|K. It has zero velocity trace, satisfies (b_chi,grad q)=ell(q), and ||b_chi||_2<=sqrt(gamma_d) l. Then v-b_chi lies in the kernel of all the pressure constraints. Testing momentum with v-b_chi gives

    ||v-b_chi||_2 <= f+||b_chi||_2,
    ||v||_2 <= f+2sqrt(gamma_d) l.                       (9)

Testing momentum with beta_K grad p|K and summing, or using the same bubble right inverse of the gradient pairing, gives

    ||grad p||_2 <= sqrt(gamma_d)(f+||v||_2).            (10)

The scalar system for chi is positive definite after the actual prescribed pressure values/gauge, and all steps are finite dimensional. The constants are independent of grading, depth, the child DtN and the location of the residual. In particular a compact mixed-load representation F(z)=(f_loc,z), ell(q)=(v_loc,grad q) costs only ||f_loc||_2+||v_loc||_2. No physical boundary flux is substituted for ell.

This permits a scattering/cutoff proof to retain its exact compact moment source rather than force it to zero. To use it for the ring complement, one must STILL construct an actual compact residual representation on the child-scale transition, with both norms O(r(r/R)A), after subtracting the ideal incoming field and retaining selfresponse. A pointwise pressure Taylor estimate by itself does not establish that representation.
