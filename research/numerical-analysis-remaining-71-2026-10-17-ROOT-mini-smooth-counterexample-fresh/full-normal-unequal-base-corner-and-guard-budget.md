# Full-vector unequal-base budget by corner thinning and uniform guards

Research proof, 2026-10-18. This handles BOTH velocity components on each selected child triple without estimating the full vector pressure variation. The ideal constant base velocity is the ACTUAL child-center velocity. Normal endpoint differences need not be small in amplitude; their neutral lifts are small through independently chosen child-side star areas. No reflection cancellation of antisymmetric normal data is assumed. No canonical/runtime edits, grids, tests or gates.

The explicit corner collar geometry remains the geometry owner's responsibility. The proof below states exactly the area conditions it must supply. New pressure breakpoints on added uniform-base guards are separate scalar data and are not removed by this velocity estimate.

## 1. Exact shape-independent parent nodal and trace inequalities

On ANY triangle K of area V let the actual MINI vector be

    W=sum_(i=0)^2 lambda_i a_i+(27lambda_0lambda_1lambda_2)beta.

The raw local Gram matrix, divided by V, has P1 diagonal 1/6, off-diagonal 1/12, P1-bubble entries 3/20 and bubble diagonal 81/280. Eliminating its bubble gives the nodal Schur matrix

    C=(1/12)I+(1/180)11^T,
    C^(-1)=12I-(2/3)11^T.                              (1)

Therefore for ANY constant vector c, ANY pair of vertices i,j,

    V |a_i-a_j|² <=24 ||W-c||_(L2(K))²,                (2)
    V |a_i-c|² <=(34/3)||W-c||_(L2(K))².               (3)

These constants are exact dual Gram norms: the difference vector has squared norm24 and a coordinate vector has squared norm34/3 in C^(-1). Bubble coefficients and nonzero cell means remain arbitrary. Since affine pullback multiplies the entire mass Gram by V, neither estimate depends on the triangle's angle or aspect ratio. Equation (2) holds for the whole vector, including its normal component.

There is also an exact edge trace inequality. Suppose edge e has length L and its opposite root has perpendicular distance d from its line; thus V=Ld/2. Eliminate first the bubble and then the root nodal coefficient from (1). The remaining two-node edge mass matrix is

    [[17,1],[1,17]]/192.

The edge-trace matrix divided by L is [[1/3,1/6],[1/6,1/3]]. Its largest generalized eigenvalue against the preceding matrix is16/3 (the constant edge mode; the difference ratio is2). Hence, with g=W|e,

    integral_e |g-c|² <=(32/(3d))||W-c||_(L2(K))².       (4)

This is an actual P1-plus-bubble mass/trace statement, not a gradient trace theorem on skinny elements.

## 2. Child-center choice and arbitrarily cheap endpoint errors

For child i let its base root be o_i and its two corners e_i^-,e_i^+. Its unrefined base edges are actual straight parent fan edges after the child corner insertion. Let K_i^-,K_i^+ be the parent triangles on those edges, of areas V_i^-,V_i^+. Choose

    gbar_i=W(o_i),
    delta g_i(o_i)=0,
    delta g_i(e_i^h)=W(e_i^h)-W(o_i).                    (5)

The definition uses the entire actual vector; no tangential projection or pressure-gradient replacement occurs.

Let S_i^h be the total CHILD-SIDE local star area at that corner, including its ring/transition cells but excluding every ancestor/parent cell. Impose the explicit independent corner budget

    S_i^h <=epsilon_corner V_i^h.                       (6)

The child root has its unavoidable fan star; it does not matter because its error in (5) is EXACTLY ZERO. Child base corners are not fan roots and have no such fan-volume floor. The geometric construction must keep both entire base edges and all seven boundary nodes while enforcing (6); this proof does not derive (6) from a selected-center star condition.

Let Eg be the actual cell-mean-neutral nodal/bubble lift of these endpoint errors, as in the structured seven-node lift note. Reference P1 mass positivity and the mean-neutral correction give

    ||Eg||² <=(1/3)sum_(i,h) S_i^h |delta g_i(e_i^h)|².

Using (2) on the SINGLE small parent triangle K_i^h yields

    ||Eg||² <=8 epsilon_corner
                 sum_(i,h)||W-c||_(L2(K_i^h))².         (7)

In particular one must compare S_i^h with the small base-triangle V_i^h, rather than with the larger FULL parent endpoint star. The latter comparison can insert an avoidable factor1/sigma. Equation (7) has no such loss.

The chosen attachment windows have bounded overlap, so summing their parent patches gives

    sum_i ||Eg_i||² <=C epsilon_corner
                             ||W-c||_(L2(parent fan))². (8)

All normal antisymmetric endpoint patterns are included. They may have order-one amplitude. Equation (8) charges their lift energy correctly without claiming that pressure continuity makes them small.

## 3. Extra uniform-base guards: an explicit h/sigma loss

Let the common comparison window on a straight tooth side have length L_i<=C R_i. Its parent-root height is d_i; let r_i be the child radius, so the root-to-corner base length is4r_i and V_i^h=2r_i d_i. Added uniform base guards outside the unrefined child base lie at spacing h, with CHILD-SIDE stars at most C_star h². Their exact actual inherited trace is g(s), piecewise affine on the matching parent boundary subdivision. Define every guard error by

    delta g(s)=g(s)-g(o_i).

Do not interpolate this data from only the three coarse base nodes if there are additional breakpoints.

The exact one-dimensional P1 mass matrix implies

    h sum_guards |delta g(s_n)|²
                        <=6 integral_window |delta g(s)|².

Here each guard is incident to a matching uniform base edge of length h; endpoint multiplicities can be included in a fixed constant. Combining this with the star bound gives

    sum_guards S_n |delta g(s_n)|²
                         <=C h integral_window |g-g(o_i)|².

Choose any constant c. Equation (4) on all parent triangles in the window, and (3) on either small center base triangle K_i^0, give

    sum_guards S_n |delta g(s_n)|²
      <=C[(h/d_i)||W-c||_(L2(parent window patch))²
             +(h L_i/V_i^0)||W-c||_(L2(K_i^0))²].        (9)

Thus if L_i comparable to R_i and V_i^0 comparable to r_i d_i,

    guard budget <=C[h/d_i+h R_i/(r_i d_i)]
                                     times parent energy.

The geometry R_i comparable to b0 d_i and r_i comparable to sigma R_i gives

    h/d_i+h R_i/(r_i d_i) <=C h/(sigma d_i).             (10)

The extra1/sigma comes from subtracting the fixed center value over the larger comparison window. It is explicit, and can be paid by the independently freely chosen uniform width h. It must not be omitted merely because the ordinary uniform guard stars are O(h²).

Window and center patches have bounded overlap. The complete full-vector neutral-lift budget is therefore

    sum_i ||Eg_i,allbase||²
       <=C eta_base ||W-c||_(L2(parent fan))²,

    eta_base=epsilon_corner+max_i h/(sigma d_i).         (11)

A nonuniform uniform-ring width may instead use the exact ratios in (9). Source-free parent equations or pressure estimates were not needed for this purely kinematic mass bound.

## 4. Actual averaging scale and independent geometric choices

Let the parent radius be R. There are B comparable children of radius r, with

    B comparable to N²/(b0 a),
    r/R comparable to sigma b0 a/N,
    S_0=B(r/R)² comparable to sigma² b0 a.               (12)

The actual passive child correction estimate converts each lift cost in (11) to its full mixed response energy, retaining its induced reactions. After isometrically identifying the actual child template copies (or averaging separately within each matching type), Jensen and scaling in the actual unit-child energy norm give the averaged-error operator bound

    ||mean child correction||_(unit energy)
       <=C sqrt(eta_base/S_0)
                              ||parent state||_(unit energy). (13)

Indeed physical child energies are r² times unit-child forms; summing (11), dividing by B r², and multiplying the parent unit-energy normalization R² yields exactly eta_base/S_0. The aperture in S_0 is present. No pressure-invisible velocity channel is inferred from this estimate; it is a local perturbation input for the owner's actual state recurrence.

Thus the sufficient geometric requirements are explicitly

    epsilon_corner <<sigma² b0 a,
    h/(sigma d_i) <<sigma² b0 a.                        (14)

The latter is h<<sigma³ b0 a d_i. Both choices concern corner collars and uniform ring width, which are independently shrinkable once the finite template is fixed, provided the geometry owner verifies conformity and preserved interface nodes. Their finite minimum angles may deteriorate with that one template choice, but remain fixed as recursion depth grows.

The previously verified sharp center star S_o<=C a r² is compatible with this argument and is not falsely made arbitrarily small: its multiplier is zero by (5). All endpoint and guard normal differences are paid by (11), regardless of their amplitude.

## 5. Pressure breakpoints remain separate

Every extra uniform base guard can create an actual pressure-trace breakpoint on the parent side. Equations (2)--(14) do NOT imply that the pressure trace on the whole comparison window still consists of only two affine pieces. The structured seven-node tilted-crease lift handles the two UNREFINED coarse child base halves exactly, but continuation over the guard window must retain the actual extra scalar trace.

A useful analytic budget for that distinct task is the following. Let f(s) be the actual parent pressure trace, let p_h be its exact slope on the chosen unrefined child base half, and let p_0 be the parent's incoming slope used in the full-fan reset. Apply the following estimate separately on the two one-sided windows extending the two coarse base halves; p_h is fixed only on its selected side. On a straight side, the trace derivative deviations satisfy

    integral_window |f'-p_0|²
       <=C d_i^(-1) E_p,window²,

where E_p is the parent area-weighted tangential pressure reset. Also |p_h-p_0|² is bounded by E_p,base²/V_i^h. Hence

    R_i integral_window |f'-p_h|²
       <=C[(R_i/d_i)E_p,window²
                    +(R_i²/V_i^h)E_p,base²].           (15)

With (12)'s local geometry these coefficients are O(b0) and O(b0/sigma), respectively. Summing disjoint windows and using the actual all-fan reset gives the possible scalar-trace energy budget

    C(b0/sigma)delta² ||W-c||_(L2(parent annulus))².     (16)

Turning (15)--(16) into a conforming pressure lift, zero on the appropriate coarse region while retaining every additional breakpoint, requires an explicit actual uniform-strip construction. That construction belongs to the structured/geometry owner and is NOT claimed by the velocity proof. If supplied with the stated norm, its normalized average cost would be O(delta/(sigma^(3/2)sqrt(a))), so the actual relation delta²<<sigma³ a must be retained. The normal unequal-VELOCITY budget itself is complete under the explicit corner/guard area choices (6),(9).
