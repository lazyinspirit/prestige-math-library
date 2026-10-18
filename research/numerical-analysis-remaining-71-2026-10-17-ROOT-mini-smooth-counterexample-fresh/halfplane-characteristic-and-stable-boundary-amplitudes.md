# Actual uniform-half-plane characteristic and stable boundary amplitudes

Research proof, 2026-10-18. This is the exact algebraic half-plane subtask requested by the structured-observation owner. It uses the actual bubble-condensed MINI mass matrices and their actual pressure boundary reaction. No mesh eigenvalue grids, canonical/runtime changes, tests or gates. The associated Green/Poisson decay argument belongs to the structured owner; a child hole's self-response is not replaced by this incoming half-plane calculation.

## 1. Full normalized saddle symbol and exact characteristic polynomial

Take the square lattice of spacing d, every square split southwest-to-northeast, with base y=0 and complete upper half-plane stars. Write a geometric mode at vertex (id,jd) as

    v_(i,j)=v z^i r^j,     p_(i,j)=d P z^i r^j,
    z=exp(i theta).

Thus P=p/d is the normalized pressure, while v retains its physical velocity units. Put

    c=[48+z+z^(-1)+r+r^(-1)+zr+z^(-1)r^(-1)]/180,
    k=4-z-z^(-1)-r-r^(-1),
    h_x=[2(z-z^(-1))-(r-r^(-1))+(zr-z^(-1)r^(-1))]/20,
    h_y=[-(z-z^(-1))+2(r-r^(-1))+(zr-z^(-1)r^(-1))]/20.

After dividing the velocity rows by d² and pressure row by d, the FULL actual symbol is

    F(z,r)=[ cI_2   h ; -h^T   -(7/10)k ].                 (1)

The lower-left sign is the formal lattice adjoint: h(z^(-1),r^(-1))=-h(z,r). It is not a complex conjugation of a complex radial root. Its determinant is exactly

    det F=-c L,      L=(7/10)c k-h_x²-h_y².                (2)

On the Fourier torus h is purely imaginary, so (2) is the positive pressure factor in the owner's bulk-symbol note. The factors d disappear ONLY because pressure has been normalized by d. The full unnormalized mixed determinant has its corresponding powers of d.

The tangential factor has characteristic quadratic

    (1+z)r²+(48+z+z^(-1))r+(1+z^(-1))=0.                 (3)

For the pressure factor, write Q=3600 r² L. Its exact quartic is

    Q(z,r)=q_2(z)r^4+q_1(z)r^3+q_0(z)r²
                           +q_1(z^(-1))r+q_2(z^(-1)),   (4)

where

    q_2(z)=-18z²-32z-59,
    q_1(z)=-32z²+100z-612-100z^(-1),
    q_0(z)=2848-612(z+z^(-1))-59(z²+z^(-2)).

One direct exact expansion is 3600L=14 Cbar k-9(Abar²+Bbar²), where Cbar=180c and (Abar,Bbar)=20h. This fixes all coefficients of (4) without a numerical root calculation.

At z=1,

    (3)=2(r²+25r+1),
    Q(1,r)=-(r-1)²(109r²+862r+109).                       (5)

Thus the two strictly stable mesh roots have exact limits

    r_t=(-25+sqrt(621))/2,
    r_n=(-862+sqrt(862²-4*109²))/218,                     (6)

both between -1 and 0. Their reciprocal roots are unstable. The remaining double root at 1 is the scalar physical/gauge branch.

## 2. The physical branch and the two mesh branches

Set r=exp(i eta) temporarily. The owner's exact bulk symbol gives, for complex frequencies near zero,

    L(exp(i theta),exp(i eta))
         =(3/10)(theta²+eta²)+O((|theta|+|eta|)^4).        (7)

There is no cubic term: c and k are even and h odd under simultaneous frequency reversal. For theta=t>0, put r=exp(-t omega). Divide (7) by t². The result is analytic at t=0, equals (3/10)(1-omega²) there, and has nonzero derivative -3/5 at omega=1. The analytic implicit-function theorem yields

    omega(t)=1+O(t²),
    r_ph(t)=exp(-t+O(t³))
           =1-t+t²/2+O(t³).                              (8)

For negative theta use conjugation of the actual real stencil. Therefore each side has a one-sided analytic stable branch with the common limit 1 and

    r_ph(theta)=1-|theta|+O(theta²),
    |r_ph(theta)|<=exp(-c|theta|)                         (9)

for sufficiently small nonzero real theta. There is exactly one stable physical root locally; the other physical root is unstable. Equations (6) continue analytically in theta by simplicity, with absolute value bounded strictly below one in the same neighborhood.

There is a useful exact expression for the tangential branch. Put r=exp(-i theta/2)R. Equation (3) becomes

    2cos(theta/2)R²+(48+2cos theta)R+2cos(theta/2)=0.

Choose the real negative stable root R near theta=0. In particular

    r_t'(0)=-(i/2)r_t.

For the normal mesh branch, differentiating L at (z,r)=(1,r_n) gives

    partial_theta L=-(17i/900)(r-r^(-1))(r+r^(-1)-2),
    partial_r L=-(109/3600)(r+r^(-1)-2)(1-r^(-2)),

and hence

    r_n'(0)=-(68i/109)r_n.                               (10)

These formulas are optional for the leading boundary amplitude, but verify its ordinary analytic O(theta) corrections.

## 3. Exact stable mode vectors and invertible boundary matrix

Normalize the tangential mesh vector by v_t=1, the normal mesh vector by v_n=1, and the physical vector by P=1. They can be chosen as

    e_t(theta)=(1,-h_x/h_y,0)                 at r=r_t(theta),
    e_n(theta)=(h_x/h_y,1,-c/h_y)             at r=r_n(theta),
    e_ph(theta)=(-h_x/c,-h_y/c,1)             at r=r_ph(theta). (11)

All denominators in (11) are nonzero near theta=0 on the stated branches. Crucially the tangential mesh branch has pressure EXACTLY ZERO at every sufficiently small theta, not just at zero. This follows directly from c=0 and h^T v=0 in (1).

Put s_n=r_n+r_n^(-1)=-862/109 and

    k_n=(3/14)[r_n-r_n^(-1)]/[s_n-2].                     (12)

The normal vector's pressure is -c/h_y=k_n at theta=0, using the exact characteristic equation. Thus the common zero-frequency limits are

    e_t(0)=(1,0,0),
    e_n(0)=(0,1,k_n),
    e_ph(0)=(0,0,1).                                     (13)

For the physical vector (7)--(8) also give

    e_ph(theta)=(-i theta,|theta|,1)+O(theta²)

in its velocity entries. With columns ordered (t,n,ph), the stable boundary matrix therefore has limit

    B_0=[[1,0,0],[0,1,0],[0,k_n,1]],      det B_0=1.       (14)

It has a uniformly bounded inverse for sufficiently small theta on BOTH sides of zero. Its entries and inverse are one-sided analytic with the same limit (14). This verifies the actual low-frequency complementing condition with all three base data retained.

If the prescribed base Fourier data are (v_base,t,v_base,n,p_base), expand their normalized vector (v_base,t,v_base,n,p_base/d) in these columns. The normalized physical pressure coefficient is

    A_ph=p_base/d-k_n v_base,n
                   +O(|theta|[|p_base|/d+|v_base|]).       (15)

Multiplying by d gives the PHYSICAL pressure coefficient

    a_ph=p_base-d k_n v_base,n
                   +O(|theta|[|p_base|+d|v_base|]).        (16)

In particular a_ph=p_base+O(d|v_base|)+O(|theta||p_base|), as requested. Both velocity components enter the harmless d-scaled error; the exact leading normal contribution is retained in (16). This is a boundary-mode identity, not a choice of a freely prescribed inner-child pressure field.

## 4. Actual boundary reactions and the zero-frequency flux distinction

The three triangles incident to one base vertex give exact mode reactions. Let

    c_b=2/15+(z+z^(-1))/360+(1+z)r/180,
    h_b,x=[z-z^(-1)+r(z-1)]/20,
    h_b,y=(z+2)(r-1)/20,
    eta_b,x=-h_b,x,
    eta_b,y=-[2+z^(-1)+(z+2)r]/20,
    k_b=2-(z+z^(-1))/2-r.

Then the actual two velocity reactions and pressure reaction at that base vertex are

    R_v=d²[c_b v+h_b P],
    R_p=d[eta_b dot v-(7/10)k_b P].                       (17)

These are uncondensed-in-ports reactions of the actual condensed element assembly; pressure reaction has NOT been set to zero as an extra boundary condition.

At theta=0 the two mesh modes (13) satisfy R_p=0 exactly. The tangential identity is immediate. For the normal mode it is exactly

    -(3/20)(1+r_n)-(7/10)(1-r_n)k_n=0,

using (12). The limiting physical/gauge mode has constant pressure and likewise R_p=0. Thus a constant normal boundary velocity mismatch produces the genuine mesh pressure layer of amplitude d k_n v_base,n, but no hidden zeroth-mode base-flux reaction.

For the small-frequency physical vector, (17) gives

    R_p=-d |theta| A_ph+O(d theta²|A_ph|)
        =-|theta| a_ph+O(theta²|a_ph|).                   (18)

The mesh-mode pressure reactions vanish at theta=0 and are analytic O(d|theta|) times their velocity-normalized amplitudes near zero. They are not declared zero at nonzero theta.

At EXACT theta=0 the bounded physical mode is a pressure gauge, not a decaying pressure mode. A separate affine normal background p=p_0+g_n y, v=-g_n e_n has the actual reaction

    R_p=d g_n,

as in the owner's exact flat-layer note. This retained normal-flux channel cannot be removed by a pressure gauge. A bounded decaying half-plane calculation with zero net flux excludes that affine growing-pressure branch only when the actual source/interface flux compatibility supplies that exclusion. Finite-segment endpoint reactions likewise remain separate.

## 5. Away from zero and the descriptor point

On the full Fourier torus c>=1/4 and L is positive except at the simultaneous zero frequency. Hence for real theta different from zero, no root of the full symbol lies on |r|=1. This rules out a unit-circle collision of stable and unstable modes away from zero. Stable roots can collide WITHIN the disk; individual global analytic labels are not needed for the structured owner's stable-subspace argument.

There is one explicit descriptor feature: at theta=pi, 1+z=0, so the tangential characteristic loses its vertical leading coefficient. The stable tangential root tends to zero. In the limiting half-plane recurrence this is a velocity mode supported in the boundary row, with h proportional to (-2,1) and velocity in the orthogonal direction (1,2). It has no pressure. It should be retained as a boundary-supported stable mode, rather than inferred absent from a reduced-degree bulk characteristic. The low-frequency analysis (8)--(16) does not approach that point.

For homogeneous zero base velocity AND pressure, a decaying half-plane solution is zero by the actual mixed mass energy identity: testing with its velocity and pressure gives its mass norm zero, then actual bubble tests give zero pressure gradient and decay removes the constant. Consequently the stable boundary map has no kernel wherever the full stable bundle is used, including its boundary-supported mode at the descriptor point. Establishing global stable-bundle smoothness/bounds on compact nonzero-frequency sets may use this energy formulation without choosing individually analytic colliding roots.

All recovered bubbles are still the actual ones, obtained from their local mass equations. No zero-cell-mean assumption was introduced in the characteristic or boundary calculation.


## 6. Uniform high-arc analyticity despite the descriptor point

The stable boundary pressure map can also be justified without a companion matrix at theta=pi. Work in the FULL nodal-plus-bubble half-line spaces at fixed Fourier frequency, after extending the three prescribed boundary values into the first strip. On the homogeneous boundary spaces, the actual mass matrix is uniformly positive and equivalent to the sequence norm. Its scalar pressure Schur operator is

    S_theta=D_theta M_theta^(-1)D_theta^*,
    S_theta >= (7/10)K_theta.

The inequality follows from the actual element bubble capture of pressure gradients; it is the same exact 7/10 used in the condensed symbol. The Dirichlet half-line scalar stiffness satisfies

    (K_theta q,q)>=(2-2cos theta)||q||_ell2².

Thus on every closed real arc separated from theta=0 modulo 2pi, the full homogeneous mixed operator is boundedly invertible, with a uniform bound. Its bounded sequence-space coefficients depend analytically on exp(i theta), as do the finitely supported boundary extensions. Ordinary inverse-operator analyticity supplies an analytic pressure solution map in a complex neighborhood of each point of that arc. Finite covering gives uniform derivative bounds and includes theta=pi. This argument retains all actual bubble and boundary rows; it does not invert the disappearing leading coefficient in (3).

For the pressure component, the leading coefficient q_2(z) of (4) never vanishes on |z|=1: the two roots of 18z²+32z+59 have modulus sqrt(59/18)>1. The reciprocal coefficient is likewise nonzero. Therefore its fourth-order scalar recurrence has an ordinary analytic companion matrix on the whole real-frequency circle. Its stable/unstable separation on compact nonzero-frequency arcs follows from the absence of unit-circle roots. Riesz projections onto the stable pressure bundle and its powers then give exponential vertical decay uniform on each such arc, including all fixed-order theta derivatives. Collisions inside that bundle do not affect this conclusion. The missing boundary-supported tangential mode has identically zero pressure and was already included in the full boundary solvability argument.

These facts justify the high-arc pressure multiplier regularity used by the structured owner's Fourier integration, without assuming globally analytic individual root labels.
