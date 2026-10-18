# Actual tangential slope inheritance through a child container

2026-10-18. Research proof for the actual conforming two-dimensional MINI pressure. This supplies a quantitative incoming-base to outgoing-fan slope estimate, including a real-parameter version. It does not prove preservation of a recursive trace cone or an observed pressure counterexample.

## 1. Exact geometry and pressure trace

Use orthonormal coordinates (x,y), normal and tangent to the child's incoming flat base, respectively, with its root at (0,0). The child container is a fixed rectangle C_r on the x>=0 side of that base. Its base has exactly its two endpoints and the root as vertices. Choose the upward version of the aligned fan; the downward version follows by replacing y by -y. Its main fan triangles K have vertices 0,v_j,v_(j+1), where

    c r <= y(v_j),y(v_(j+1)) <= C r,
    0 <= x(v_j),x(v_(j+1)) <= delta y(v_j),delta y(v_(j+1)).       (1)

Here c,C are fixed positive constants; delta bounds the fan's angle from the base. The fan aperture a is a separate parameter, possibly smaller than delta. The short end ramps are excluded from the main fan F. All normal segments from F to x=0 lie inside C_r, and their footpoints lie on its single positive-y base edge. This is the usual aligned child placement with fan radius between fixed multiples of r. Rotating the container does not change the argument.

Let phi be ANY H1 function on C_r that is affine on each main fan triangle and whose trace on that base half is

    phi(0,y)=phi(0,0)+p_0 y.                                      (2)

The actual continuous P1 pressure satisfies (2) exactly: no base refinement is allowed. Descendant pressure need not be affine, and all holes and descendants are included in C_r. Write its main-triangle slopes as (p_(K,n),p_(K,t)).

Then

    sum_(K in F) |K| |p_(K,t)-p_0|^2
        <= C delta^2 ||grad phi||_(L2(C_r))^2.                    (3)

The constant depends only on the fixed radius bounds in (1), not on N, depth, the number of triangles, or their minimum angles.

Proof. Set zeta=phi-phi(0,0)-p_0 y. On almost every normal line its trace at x=0 is zero, so the one-dimensional fundamental theorem for H1 functions and Cauchy--Schwarz give

    |zeta(x,y)|^2 <= x integral_0^x |partial_x phi(s,y)|^2 ds.

Every point of F has x<=C delta r. Integrating over F, enlarging each normal slice to [0,C delta r], and applying Fubini gives

    ||zeta||_(L2(F)) <= C delta r ||partial_x phi||_(L2(C_r)).     (4)

On K, zeta=p_(K,n)x+(p_(K,t)-p_0)y. The exact affine-polynomial moment formula on a triangle, with vertex y-values 0,y_j,y_(j+1), yields

    integral_K y^2=|K|(y_j^2+y_j y_(j+1)+y_(j+1)^2)/6
                  >= c^2 r^2 |K|/2.

Consequently the triangle inequality in L2(F) gives

    c' r [sum_K |K||p_(K,t)-p_0|^2]^(1/2)
      <= ||zeta||_(L2(F))+C delta r ||partial_x phi||_(L2(F)),

which proves (3). In particular no inverse estimate on skinny triangles has entered.

## 2. Actual mass response

For a source-free actual MINI mass response W, with normalized pressure phi and sign convention

    (W,v)+(v,grad phi)=0

for every interior velocity test, the element bubble test gives exactly

    grad phi|K= - integral_K b_K W / integral_K b_K.

Here b_K=27 lambda_0 lambda_1 lambda_2, mean b_K=9/20 and mean b_K^2=81/280. Thus

    ||grad phi||_(L2(K)) <= sqrt(10/7) ||W||_(L2(K)).              (5)

Every bubble is an admissible interior test, including cells at container boundaries and descendants. Combining (3) and (5) proves the actual Darcy/mass inheritance bound

    [sum_K |K||p_(K,t)-p_0|^2]^(1/2)
        <= C delta ||W||_(L2(C_r)).                              (6)

This concerns the mass multiplier, not the evolutionary Stokes pressure.

## 3. A perforated-annulus version, avoiding deep pressure gradients

There is also a version of (3) that uses pressure only on the CURRENT annulus. Let H_j be the closed first-generation reserve rectangles, including their entire descendant meshes. Their interiors are exterior to the main fan. Choose the reserve fraction sufficiently small that the concentric doubled rectangles 2H_j lie inside C_r and are pairwise disjoint. This is a finite geometric choice: attachment triples are separated by a fixed multiple of their base length, are away from the outer boundary, and the reserve width is an independently shrinkable fraction of that length. The doubled rectangles may cross into the parent fan; this is allowed and does not change its triangulation. They contain no other first-generation hole. Set

    A_r=C_r \ union_j H_j.

For any phi in H1(A_r) there is a function phi_tilde in H1(C_r), equal to phi on A_r, with

    ||grad phi_tilde||_(L2(C_r)) <= C ||grad phi||_(L2(A_r)).       (7)

Here C is independent of the number of holes and of descendant depth. To prove (7), on each rectangular collar 2H_j\H_j subtract its mean. The fixed rectangular-annulus H1 extension into H_j, together with Poincare on that collar, gives an extension with gradient norm bounded by C times the collar gradient norm. Such an extension is obtained by finitely many local side/corner reflection charts and a partition of unity on the fixed reference annulus; subtracting the mean controls the partition terms. Two-dimensional scaling leaves the gradient bound unchanged. Add the mean back and leave the function unchanged outside H_j. Trace matching gives an H1 function. Disjoint doubled rectangles allow the squared local bounds to be summed with the same constant.

The rectangle aspect ratios belong to a fixed finite family, so one common constant suffices. This construction is a continuum H1 extension, not interpolation onto any skinny mesh. It does not alter the ACTUAL pressure on F, on the incoming base, or anywhere in A_r. Applying (3) to phi_tilde proves

    [sum_K |K||p_(K,t)-p_0|^2]^(1/2)
        <= C delta ||grad phi||_(L2(A_r)).                       (8)

In particular actual descendant pressure gradients are absent from the right side.

## 4. Actual strain Brinkman response

Let the actual real-parameter response satisfy

    (W,v)+lambda^(-1) a(W,v)+(v,grad p)=0,
    a(v,w)=2 nu integral epsilon(v):epsilon(w),                  (9)

for interior tests. Thus p is the original Brinkman pressure divided by lambda. On a current-annulus triangle write W=l_K+b_K beta_K. The affine/bubble strain cross term vanishes exactly, since integral_K grad b_K=0. Define the symmetric positive matrix H_K by

    e dot H_K f = a(b_K e,b_K f).

Bubble testing of (9) gives

    grad p|K= - integral_K b_K W / [(9/20)|K|]
              - lambda^(-1) H_K beta_K / [(9/20)|K|].           (10)

Reference-polynomial norm equivalence, under the affine map of K, gives

    sqrt(|K|)|beta_K| <= C ||W||_(L2(K)),                        (11)

with C independent of the shape of K. The current annulus has a fixed finite triangulation once N and the other template parameters have been selected. It is unchanged when descendants are replaced. Hence there is a finite D_N, independent of descendant depth, such that

    max_(K in A_r) ||H_K||/|K| <= nu D_N/r^2.                   (12)

This uses only that finite current-annulus list, not a global inverse bound on descendant cells. Equations (10)--(12) imply

    ||grad p||_(L2(A_r))
       <= C [1+nu D_N/(lambda r^2)] ||W||_(L2(A_r)).             (13)

Therefore, whenever lambda r^2>=nu D_N, the ACTUAL real-parameter inheritance estimate is

    [sum_K |K||p_(K,t)-p_0|^2]^(1/2)
        <= C delta ||W||_(L2(A_r)).                             (14)

The pressure p may have uncontrolled full H1 norm deep inside the holes; (14) does not assume otherwise. It retains the actual strain operator and all mixed scalar equations. For fixed N, the parameter threshold shifts a geometric lambda-front by a fixed number of levels only; this observation is not a recursive mode proof.

## 5. Exact trace costs and the remaining recurrence obligation

The actual seven-node boundary-pressure lift admits a more precise decomposition than its crude operator bound K=1+n+theta^(-1/2). Fit the five coarse boundary vertices by the fixed macro-P1 extension P_coarse. Let s_+,s_- be the two strip-top vertices and put

    d_+ = p(s_+)-P_coarse(s_+),
    d_- = p(s_-)-P_coarse(s_-).

The explicit corner functions S_+,S_- in the owner's polylogarithmic lift have exactly those strip-top traces and zero at all coarse vertices. Thus the actual extension

    P_coarse+d_+ S_+ +d_- S_-

satisfies

    ||grad E_p p||2 <= C osc(p_coarse)
                       +C K (|d_+|+|d_-|).                    (15)

An affine boundary pressure has d_+=d_-=0 exactly. Thus the theta^(-1/2) corner cost multiplies only nonaffine correction coefficients. This is an algebraic statement about the actual lift, not an assumption that those coefficients remain small under recursion.

Combining a generic response bound ||W||<=C K A r with (6), and using |F| comparable to a r^2, yields a root-mean-square slope reset bounded by C delta K A/sqrt(a). For arbitrary independent corner data and theta comparable to delta, this is of order sqrt(delta/a) A; it is NOT small when a<<delta. The corresponding weighted trace version of (15) avoids charging the corner cost to a pure affine background, but preservation of small d_+,d_- for the ACTUAL inherited state is still unproved.

The exact current-edge relation b_t+p_parent,t=-(a_t+p_parent,t)/17 can use (6) or (14) to compare a child fan's interior tangential slope with its incoming base slope. What remains is a quantitative bound on the actual current-annulus response, or a preserved weighted nonaffine trace cone, strong enough to make this reset small repeatedly. No such invariant state, fixed-source cross-entry, or original pressure conclusion is claimed here.


## 6. The reset is an exact affine-Darcy quotient quantity

A useful strengthening of (6) and (14) removes every constant affine-Darcy background, without any estimate of its size. For any constant vector c, replace

    W by W-c,       p by p+c dot X.

This is an EXACT homogeneous solution transformation for both the mass problem and (9): a(c,v)=0 and (c,v)=(v,grad(c dot X)). The outgoing tangential slopes and incoming base slope both increase by c_t, so their difference is unchanged. Therefore

    reset_F <= C delta inf_c ||W-c||_(L2(C_r))                  (16)

for the actual mass response, and

    reset_F <= C delta inf_c ||W-c||_(L2(A_r))                  (17)

for the real-parameter response above its current-annulus threshold. Here reset_F denotes the square root on the left of (6). The hole-filling construction also commutes with subtracting this affine function by applying the construction to the already shifted pressure; no projection of the actual field is required.

In particular a large inherited pure affine background contributes EXACTLY ZERO reset. One may choose the exact Schur-orthogonal background c=-mean grad p from the checked mixed-DtN quotient note, but (16)--(17) hold for every c. They do not assert that mean W equals that c.

## 7. Consequence of the improved logarithmic corner lift

The owner's independently checked replacement construction is

    research/numerical-analysis-remaining-71-2026-10-17-ROOT-mini-pressure-direct-dual-cycle5/
      logarithmic-pressure-corner-lift-with-affine-fan.md.

Its exact seven-node extension has K_log=C sqrt(1+log(1/epsilon)); it is affine, rather than zero, throughout the protected fan and all holes. No tilt factor occurs. For a fixed background c, let

    A_c=max_boundary |g-c| + r^(-1) osc_boundary(p+c dot X).

Applying the actual mixed response estimate to the shifted solution and then (16) or (17) yields

    reset_F/ sqrt(|F|) <= C delta K_log A_c / sqrt(a),          (18)

where |F| is comparable to a r^2. For the real parameter, combine the finite neutral-boundary-lift threshold with the annulus threshold; neither depends on descendant depth. One may minimize the right side over c.

For example a comparable to delta and delta log(1/epsilon) small makes the coefficient in (18) small. If epsilon is inverse-polynomial in N and delta is an inverse power of log N larger than the first power, then this coefficient tends to zero while N a tends to infinity. This is now a valid parameter compatibility statement. The remaining obligation is to bound A_c, or a sharper weighted actual trace norm, along the ACTUAL recursive solution relative to its incoming intrinsic channel. Equation (18) by itself does not supply that state bound or prevent concentration on other interface ports.


## 8. A global depth-independent reset-energy bound

For the actual finite recursive mesh, associate to EVERY nonterminal recursive container C_v its current annulus A_v, obtained by removing its immediate child containers. For terminal containers use their whole current template. The open annuli A_v are pairwise disjoint: ancestor annuli exclude the ENTIRE child containers, while different branches have disjoint containers. They partition the root container up to interfaces of measure zero. The doubled-collar construction in Section 3 is local to each A_v; no collars from different levels need to be disjoint for this summation, since its final right side uses A_v only.

Let R_v^2=sum_(K in F_v)|K||p_(K,t)-p_(v,base)|^2 be the actual main-fan reset in the local upward/downward coordinates of that container. Suppose their tilt bounds are all at most delta, and their radius and collar-shape constants have the stated common bounds. Applying the annulus mass estimate in each container and summing gives

    sum_v R_v^2
       <= C delta^2 sum_v inf_c ||W-c||_(L2(A_v))^2
       <= C delta^2 ||W||_(L2(C_root))^2.                       (19)

This is an ACTUAL full-depth estimate; it does not charge inherited affine backgrounds. For the real-parameter strain response sum only over containers for which lambda r_v^2>=nu D_N. The same proof gives (19) for those containers, with the same right side. No uncontrolled gradient on deeper cells occurs.

Equivalently, for any specified reset magnitudes the bulk velocity energy must satisfy

    ||W||2^2 >= (C delta^2)^(-1) sum_v R_v^2.                   (20)

This can be useful when a proposed global cancellation mechanism requires a nonzero pressure-slope reset in many disjoint child fans. It is NOT yet a lower bound on such resets: the actual coupled equations must establish which contrasts require them, and the full source boundary state must bound the available bulk energy. In particular a parent center row generally contains averaged adjacent pressure gradients, whereas a child fan inherits one particular base-half slope. Their difference must be retained. The normal curvature witness shows that this distinction can matter; (19) does not discard it or infer a branching eigenmode.


## 9. Weighted resets are controlled by actual physical fractional roughness

Assume each current annulus has area at least c r_v^2 and diameter at most C r_v. These bounds hold uniformly when the disjoint reserve boxes occupy a fixed sufficiently small area fraction of the fixed container; the fan itself need not occupy a fixed area fraction. For any 0<s<1, the exact variance identity gives

    inf_c ||W-c||_(L2(A_v))^2
       = [2|A_v|]^(-1) integral_(A_v x A_v) |W(X)-W(Y)|^2 dX dY
       <= C r_v^(2s) |W|_(H^s(A_v))^2.                       (21)

The last inequality simply uses |X-Y|<=C r_v in the defining Slobodeckij seminorm. No connectedness, boundary regularity, mesh grading constant, or extension theorem for A_v is involved in (21). Its constant is uniform in v,N and depth under the stated area/diameter bounds.

Multiplying the first inequality in (19) container by container by r_v^(-2s), using (21), and summing proves

    sum_v r_v^(-2s) R_v^2
       <= C delta^2 sum_v |W|_(H^s(A_v))^2
       <= C delta^2 |W|_(H^s(C_root))^2.                      (22)

Indeed the pair sets A_v x A_v are disjoint subsets of C_root x C_root, and the fractional integrand is nonnegative. The real-parameter version holds over the active containers above their parameter thresholds, just as in Section 8. All constants are independent of total depth.

Thus a large weighted total of actual slope resets already certifies a large physical H^s seminorm of the actual velocity. Conversely, under a putative uniform physical H^s bound, the total allowed weighted reset is small by the explicit factor delta. This gives a rigorous aggregate-error side of a possible propagation-versus-roughness dichotomy. The other side still requires the exact tangential parent row, the selected incoming base-half slope, inherited states and nonzero source normalization. Equation (22) alone neither supplies a growing mode nor an actual pressure observation.


## 10. All ramp and guard triangles: a weighted normal-line proof

The full outer-mass inverse uses every fan row, including ramps whose outer radii approach the short root-edge scale. The fixed-radius lower bound in (1) is unnecessary if the ENTIRE fan stays in the same near-base wedge 0<=x<=delta y, y>0. This can be imposed on the aligned ramp geometry. The resulting bound is

    ||partial_y phi-p_0||_(L2(F_all))
           <= C delta ||grad phi||_(L2(C_r)),               (23)

where F_all includes ALL fan triangles. Constants do not depend on the smallest ramp radius.

Indeed for each fan triangle put R_K=max of its two outer y-coordinates. No comparability of those coordinates is needed: the exact moment formula gives integral_K y²>=|K|R_K²/6. As before zeta=p_(K,n)x+(p_(K,t)-p_0)y. Divide its triangle estimate by R_K, square-sum, and use y<=R_K on K to obtain

    [sum_K |K||p_(K,t)-p_0|²]^(1/2)
       <= C ||zeta/y||_(L2(F_all))
                    +C delta ||partial_x phi||_(L2(F_all)).

For almost every y>0 the zero-base trace and FTC give

    integral_0^(delta y) |zeta(x,y)|² dx
       <= (delta y)²/2 integral_0^(delta y)|partial_x phi|² dx.

Divide by y² and integrate in y. This proves (23) with the same universal delta factor. There is no minimum-radius inverse and no logarithmic loss from summing ramps.

The mass, hole-filling, actual-strain front, exact affine-background quotient, and weighted disjoint-annulus consequences all apply unchanged, replacing the main fan by the full fan in their left sides. Only the main fan is still used to count designated child roots and its area remains comparable to a r². This extension requires that the chosen actual ramp triangles lie in the stated wedge; it does not assign that property to an arbitrary unaligned completion.
