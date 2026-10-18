# Exact oblique shared-row algebra: stable tangent, ill-conditioned normal channel

Research calculation, 2026-10-18. This is an exact local two-parent-triangle/interface calculation. It is not a complete template equilibrium or a global mode. It identifies a quantitative obstruction in a proposed shared-center detectability estimate, while retaining the stable tangent equation. No canonical/runtime/hash/readiness edits or tests.

## Coordinates and exact gradients

Take orthonormal interface coordinates t=(1,0), n=(0,1). The shared attachment is x_0=0, its flat-base endpoints are x_-=-r t and x_+=r t, and the parent fan root is

    R=s t-d n,   d>0.

The parent triangles (R,x_-,0) and (R,0,x_+) have area rd/2 each. Set the shared/base endpoint velocities to the same background vector b and the parent root velocity to a. Let the pressure trace slopes on the left and right base halves be

    p_t^-=p_t-kappa,
    p_t^+=p_t+kappa.

The common root pressure determines the average normal slope p_n. The actual two pressure gradients are exactly

    p^-=p-kappa[t+(s/d)n],
    p^+=p+kappa[t+(s/d)n].                                (1)

In particular a tiny base curvature can induce much larger opposite normal-gradient deviations when |s|/d is large.

The shared-center pressure hat q_0 has

    grad q_0^-=(1/r,(r+s)/(rd)),
    grad q_0^+=(-1/r,(r-s)/(rd)).                         (2)

Thus its pointwise gradient is not generally O(1/r). In the actual long oblique fan |s| is comparable to the parent radius while d is comparable to aperture times radius divided by N.

## Exact shared velocity and pressure rows

After actual MINI bubble elimination, the sum of the two parent contributions to the shared velocity row is

    rd[(17/180)b+(1/180)a+(1/10)p].                       (3)

The kappa terms cancel in (3) because the triangle areas agree. Let

    m=(a+2b-7p)/10

be the common part of the two actual cell means. Their differences from m are respectively +(7/10)kappa[t+(s/d)n] and its negative. Substituting into the pressure row with (2) gives exactly

    R_(p,parent)(q_0)
       =r m_n+(7/10)kappa[d+s^2/d].                      (4)

An exact affine Darcy background on the child side has velocity b and pressure gradient -b. Its velocity residual is zero, while its shared pressure-hat reaction is -r b_n. Thus the shared equations in the background comparison are

    a+17b+18p=0,
    r(m_n-b_n)+(7/10)kappa[d+s^2/d]=0.                   (5)

The child pressure trace being close to its affine background controls p_t+b_t and kappa, but it does not remove the obliquity factor in (4).

## An explicit near-invisible normal mismatch

Set p_t=-b_t. The tangential velocity row in (5) forces b_t=a_t. The normal velocity row gives p_n=-(a_n+17b_n)/18 and consequently

    m_n-b_n=(5/36)(a_n-b_n).

The shared pressure row is then solved exactly by

    kappa=-(25/126)[r d/(d^2+s^2)](a_n-b_n).              (6)

For example a=n, b=0, p=-n/18 and the kappa in (6) satisfy both actual parent shared rows when the child reaction is compared to its zero background. The pressure values can be chosen

    phi(0)=0,
    phi(x_-)=phi(x_+)=r kappa,
    phi(R)=d/18.                                        (7)

All parent bubble equations are enforced by their exact eliminated coefficients. The base pressure error divided by r is only |kappa|. The individual normal-gradient perturbations in (1) are |kappa s/d|, of order (r/|s|)|a_n-b_n| when |s| dominates d.

For the actual fan scaling r proportional to sigma b_0 aperture R/N, d proportional to aperture R/N, and |s| comparable to R, (6) is of size

    |kappa| comparable to
       sigma b_0 aperture^2 N^(-2)|a_n-b_n|.              (8)

Therefore the center-row detector, with base-pressure errors measured by oscillation divided by r, can have inverse norm of order N^2 (or worse in fixed aperture constants). A polylogarithmic full-vector shared-row bound does not follow from these rows. This is an actual oblique curvature mode, not an inverse-estimate artifact.

The comparison does not assert that the child can remain an exact affine background with the nonaffine trace (7). The actual child response to that trace must be included through its true DtN. Its bounded response is small with the trace curvature, but all its reactions must be retained when solving the complete interface. Nor are the other parent endpoint/root pressure rows solved by this two-row witness; they may detect or redistribute the mismatch. Thus (6) is a local condition-number obstruction, not a globally consistent hidden mode.

## Stable tangential quotient equation

The tangential equation has no s/d amplification. If base velocity errors are at most E, inherited tangential pressure slope obeys |p_t+b_t|<=E, and the child velocity reaction is at most C r^2 E, division of (3) by rd gives

    |a_t-b_t|<=C(1+r/d)E.                               (9)

Here the constant is independent of s and N, and r/d is the fixed reserve ratio sigma b_0. With unequal left/right base lengths one uses the corresponding area-weighted average tangential slope; the same conclusion holds with constants depending on their fixed comparability.

Equivalently the parent tangential Darcy quotient a_t+p_t is controlled by the child quotient and its velocity reaction. This is a real local channel that survives the obliquity calculation. It does not by itself yield repeated transfer: different triangles can carry different normal pressure gradients, and a complete boundary-state recurrence must track the endpoint and root pressure reactions. No normal quotient is recovered from (9), and no boundary velocity reaction is discarded by subtracting an affine background.

## All endpoint and root reactions of the two-triangle patch

There is no need to leave the untested reactions implicit. Put v=t+(s/d)n, D_s=d+s^2/d, and define the shared velocity reaction F_0 by (3). Exact local assembly gives

    F_-=(1/2)F_0-(rd/20)kappa v,
    F_+=(1/2)F_0+(rd/20)kappa v,
    F_R=rd[(4/45)a+(1/90)b+(1/10)p].                    (10)

For pressure the complete four reactions are

    P_0=r m_n+(7/10)kappa D_s,
    P_-=-(1/2)(d m_t+s m_n)-(7/20)kappa D_s,
    P_+=(1/2)(d m_t+s m_n)-(7/20)kappa D_s,
    P_R=-r m_n.                                         (11)

For example grad of the left-endpoint pressure hat, multiplied by its triangle area, is (-d/2,-s/2); the right one is (d/2,s/2); the root gradients each contribute (0,-r/2). Pairing these with m^- and m^+ from (1) proves (11). Equation (10) follows directly from the actual local C/H block. Notice sum P_i=0, as required by the constant pressure gauge.

For the explicit witness a=n,b=0,p=-n/18 and (6), the complete result is

    F_0=0,
    F_-=-rd kappa v/20,  F_+=rd kappa v/20,
    F_R=(rd/12)n,
    P_0=0,
    P_-=5(r-s)/72,  P_+=5(r+s)/72,
    P_R=-5r/36.                                         (12)

Thus the O(N^-2) trace curvature is accompanied by opposite O(s) endpoint pressure reactions and an O(r) root pressure reaction. These loads must be included in the full boundary state. A true child response to the small trace is not declared zero; its actual DtN corrections must be added to (10)--(12).

## Fixed-coordinate neighboring-chain identities

Let one straight long side have ordered coordinates x_j, segment lengths L_j=x_(j+1)-x_j>0, and the same root (s_*, -d). The j-th triangle has area d L_j/2. Its actual cell mean is m_j. Set s_j=s_*-x_j. At an interior side vertex j, exact pressure assembly gives

    P_j=(d/2)(m_(j-1),t-m_(j),t)
       +(1/2)[(L_(j-1)+s_j)m_(j-1),n
                              +(L_j-s_j)m_(j),n].        (13)

The root reaction is P_R=-(1/2)sum_j L_j m_(j),n. The affine-pressure moments telescope exactly:

    sum_j P_j+P_R=0,
    sum_j x_j P_j+s_* P_R=sum_j (d L_j/2)m_(j),t,
    -d P_R=sum_j (d L_j/2)m_(j),n.                       (14)

All side endpoints are included in those sums. Equations (13)--(14) hold for nonuniform lengths and areas, with no uniform-grid assumption.

In particular leading endpoint terms cannot be assessed without a consistent coordinate convention. For equal-r patch centers separated by +2r in the fixed t direction, s_next=s-2r. Adding the current right witness endpoint and the next left witness endpoint from (12) gives

    5(s+r)/72+5(r-s_next)/72=5r/18.                      (15)

The O(s) terms cancel but an O(r) remainder remains. Adjacent local witnesses also need compatible pressure values and their shared velocity equations; (15) alone is not a global obstruction or a global construction.

One useful exact compatibility is available. Suppose the side velocity is exactly the same b at every side vertex and all its interior velocity rows have zero exterior reaction. Put P=-(a+17b)/18. Then those rows imply

    L_(j-1)(p_(j-1)-P)+L_j(p_j-P)=0.                     (16)

Continuity of the scalar pressure across the radial edge from the root to vertex j says p_j-p_(j-1) is normal to that radial edge. Two consecutive equations (16) force the same nonzero vector to be normal to two distinct radial edges, which is impossible. Hence with at least two consecutive interior rows, p_j=P throughout the corresponding connected chain (and then by (16) onward). The variable tiny-curvature witnesses cannot therefore be pasted while retaining exactly constant side velocity and exactly zero other velocity reactions. Quantitative estimates require the actual child/filler reactions in (16); their accumulated effect is not dropped here.

For exact bookkeeping with nonzero actual child/filler velocity reaction V_j, define U_j=L_j(p_j-P). The complete interior velocity equation is

    U_(j-1)+U_j=-(20/d)V_j.                               (17)

Scalar continuity still gives (p_j-p_(j-1)) dot (s_j,-d)=0. Thus (13), (17), the scalar continuity equations, and the actual child DtN applied to every shared boundary trace are the complete straight-side recurrence. Replacing V_j by zero, omitting the endpoint reactions in (13), or prescribing unrelated local root pressure values would change that recurrence. The two-row witness alone supplies none of those replacements.

## A genuine child DtN coupled to the oblique patch

The child can be computed exactly instead of compared to an affine fiction. Use the rectangle [-r,r] times [0,2r], with boundary vertices

    (-r,0), (0,0), (r,0), (r,2r), (-r,2r)

and interior vertex (0,r). Join the interior vertex to the five consecutive boundary edges. These are five actual affine MINI triangles, with fixed minimum angle. Assemble their exact local blocks (3), eliminate the interior nodal velocity, interior pressure, and all cell bubbles, and retain all fifteen boundary variables. Let h be the reference normal-velocity/pressure-center crossentry and let -e be its pressure-center diagonal. Exact rational elimination gives

    h=-47/640,   e=401/320.                               (18)

The physical child matrix uses diag(r I_velocity,I_pressure) scaling. Set all child boundary velocities to zero and all its boundary pressure values to zero except c at the base center. Then its actual shared normal velocity reaction is r h c, and its actual shared pressure reaction is -e c. All other child boundary reactions are also retained in the saved matrix; none is silently assigned zero.

Take s=1,d=1/N,r=1/(10N), prescribe parent root velocity a=n, and keep all three parent base velocities zero. The parent endpoint pressure values are zero and its center pressure is c, so kappa=-c/r. The two exact shared-center equations, including the true child response, have the solution

    c=800/[9N(44800N^2+53149)],
    phi(R)=17c/64+1/(18N).                               (19)

In detail the velocity equation gives phi(R)=(1+10h)c+d/18, while the pressure equation gives

    c=-(5r/36)/[7rh/d-e-(7/10)(d+s^2/d)/r].             (20)

Substitution of (18) yields (19). Thus this is an actual coupled mixed response, not an assumption that a nonaffine child trace has zero reaction. Its reference child velocity/pressure-gradient amplitudes scale like

    |c|/r=8000/[9(44800N^2+53149)]
                         asymptotic to (5/252)N^(-2).    (21)

Its center equations vanish exactly. The complete combined parent-plus-child endpoint pressure reactions tend to -5/72 and +5/72 as N increases, and the parent root pressure reaction is asymptotic to -1/(72N). Therefore the tiny child response still exports substantial endpoint loads which any surrounding parent assembly must balance. It is not a solution of that surrounding assembly.

`exact_oblique_patch_child.py` specifies every coordinate and triangle, performs exact Fraction elimination, solves (20), and saves all fifteen child boundary reactions plus all parent endpoint/root reactions for N=8,16,32,64 in `exact-oblique-patch-child-result.json`. There is no numerical eigenvalue or global-mode claim. The free root pressure/velocity data in (19) are interface data; they have not been realized by the original fixed smooth solenoidal source.
