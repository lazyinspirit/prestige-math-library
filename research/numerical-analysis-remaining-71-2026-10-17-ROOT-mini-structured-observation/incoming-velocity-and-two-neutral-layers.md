# Incoming velocity and the two actual neutral layers

Research continuation, 2026-10-18. This refines the interior-load pressure estimate by retaining the two exact uniform-base layers, rather than differentiating a thin pressure layer as though it were a regular affine field. The setting is the actual uniform half-plane system with distant compact mixed loads and zero base data. The child/transition self-response remains separate.

Let A,B,R,d be as in `interior-load-kernel-and-finite-cutoff-driver.md`, and put

    K_*=A/R^2+B/R^3,       d<=rho<=R/8.

Use the same cutoff-physical/mesh decomposition, with the exact one-sided analytic stable mode vectors. All constants below are independent of d,rho,R and the load arrays.

## 1. Incoming extraction and the required estimates

There is a linear vector extractor c from the distant loads, namely the physical-velocity value at the base origin, with the following property. Let U_t,U_n be the EXACT two unit-base-velocity neutral layers, including their bubbles and pressure, as in the flat-layer note. Their nodal velocities are r_t^j e_t and r_n^j e_n. Their pressures, gauged to vanish on the base, are respectively zero and d k_n(r_n^j-1).

The same order-zero scalar-source/order-one velocity-source kernels give |c|<=C(A/R+B/R^2). Thus this extraction has the natural incoming gradient scale, independently of the child self-response. The stronger tangential estimate |c_t|<=CdK_* below is a consequence of the exact zero base pressure trace, not a general normal-component estimate.

The incident comparison field is

    v_id=c-c_t r_t^j e_t-c_n r_n^j e_n,
    p_id=-c dot(x,y)-d k_n c_n(r_n^j-1).                  (1)

It is one affine mass solution plus the two neutral incident layers with eta=-c. In particular c_n is the actual incoming regular normal component, not a parent-fan slope substituted for it.

At uniform nodal ports with |x|+y<=rho,

    |v-v_id|<=C rho K_*,
    |p-p_id|<=C rho^2 K_*.                                (2)

For the actual P1 pressure reconstruction in a child-scale collar, also

    ||grad(p-p_id)||_L2(collar)<=C rho^2 K_*.              (3)

The collar has diameter O(rho), avoids the distant load support, and uses the uniform mesh on the incident side. The continuous expression in (1) is evaluated at nodes before P1 reconstruction; the exact layers use their actual recovered bubbles for velocity. The nodal estimate in (2) gives

    ||v-v_id||_L2(collar)<=C rho^2 K_*                    (4)

for its full MINI reconstruction, by the same local bubble formulas and the pressure first-difference bounds described below.

The velocity residues, contact cancellations, shallow-source correction and extraction identities below were independently checked against Sections 7--8 of the fully read supplier [halfplane-interior-source-residue-and-reflection.md](../numerical-analysis-remaining-71-2026-10-17-ROOT-mini-smooth-counterexample-fresh/halfplane-interior-source-residue-and-reflection.md). Those sections retain the analytic shallow-source term and the pressure-free source-mass branch explicitly.

## 2. Physical-velocity kernel order

The exact homogeneous mode relation is v=-hP/c. On the physical branches, h/c is the discrete gradient symbol plus an order-three correction. In physical units this gives v_ph=-grad p_ph up to an O(d K_*) local error. Source-height contacts must again be treated by finite differences. The scalar pressure-row source has physical velocity residue of order zero; its first target difference has order one, apart from a smooth contact polynomial. A velocity-row source has physical velocity residue of order one; its first target difference has order two, apart from smooth contact polynomials.

To check the contact assertion explicitly, the leading velocity residues follow by multiplying the supplier's A_+,A_- by -h/c. For a normal force the normal residues agree to leading |theta| order, while the tangential jump is a smooth multiple of i theta. For a tangential force the tangential residues agree to leading |theta| order, while the normal jump is again a smooth multiple of i theta. For a scalar source the normal jump is constant and the tangential leading residue is the same on both sides. Thus the non-smooth remainders after one target difference have orders one and two respectively. The same Fourier integrations used for the pressure second-difference estimate give

    sup |D v_ph|<=C K_*,
    |v_ph-c|<=C rho K_*                                  (5)

throughout the child neighborhood. Local C_0^(-1) forcing terms are exponentially or rapidly small at this distance and satisfy the same estimates. The pressure physical first differences satisfy

    |D p_ph+c|<=C rho K_*                                (6)

after allowing the O(dK_*) symbol error. Statements (5)--(6) use discrete differences, including source-height crossings, rather than a spurious global continuous C2 extension.

## 3. Mesh-layer amplitudes and zero-base matching

Write the low-frequency target-side mesh velocity as

    b_t(theta)e_t(theta)r_t(theta)^j
                       +b_n(theta)e_n(theta)r_n(theta)^j.

Its coefficient kernels have the scalar-source order-zero and velocity-source order-one structure established in the residue supplier, together with exponentially localized source-mesh terms. Taking one tangential difference therefore gives the same K_* bound as in (5). Replacing e_beta(theta),r_beta(theta) by their theta=0 values makes an additional O(dK_*) nodal error: their differences are O(|theta|), and j r_*^j is bounded for a fixed r_*<1. The exact mesh roots and vectors are ordinary analytic functions of theta near zero, including their O(theta) phase corrections. High-frequency pieces are handled by the weighted inverse argument.

The shallow-source terms need a more precise argument than simply calling every velocity-source amplitude order one. A downward source-mesh base vector has an ORDINARY analytic symbol X_m(theta), with all derivatives bounded by C_k gamma_1^m for some gamma_1<1; derivatives of its root powers introduce only m^k gamma^m, absorbed by gamma_1^m. The boundary inverse is piecewise analytic, with common value at zero. Thus its product with X_m is an ordinary analytic leading part, plus a first nonsmooth term O(|theta||F|gamma_1^m) for a velocity source. The ordinary analytic part, multiplied by the smooth cutoff, has arbitrarily fast tangential coefficient decay. The first nonsmooth term has n^(-2) decay; its tangential derivative has n^(-3) decay. In actual velocity units these are respectively B/R^2 and B/R^3, precisely the required macro amplitude and K_* variation. Multiplication by a target eigenvector/root correction supplies an additional ordinary theta: its product with the analytic part still has rapid decay, while theta|theta| has n^(-3) decay. This gives d B/R^3, the required dK_* profile error. Scalar-source analytic mesh vectors obey the same argument and are no worse than their required bounds. If the source is far vertically, gamma_1^m instead supplies the bound directly. This explicitly includes shallow m and the pressure-free source-mass branch in the residue supplier; neither is omitted.

The DIRECT source-mesh field is not factored as a boundary amplitude times r_beta^j across j=m. Its cutoff symbol is ordinary analytic on either side, with exponential source-height separation. At a source-height crossing the source is far horizontally; every target value or first difference then has arbitrarily rapid tangential decay by the analytic-symbol derivative bounds. Choosing that inverse power at least four, in the actual row units, bounds this entire direct source-mesh contribution by O(dK_*) in velocity and O(d^2K_*) in pressure, with pressure gradient O(dK_*). It is included as this remainder, not in the target-side factored layers.

Consequently the layer amplitudes vary by at most C rho K_* over the child-scale interval. At the base origin, the EXACT condition v=0 implies

    b_t(0 in physical space)=-c_t+O(dK_*),
    b_n(0 in physical space)=-c_n+O(dK_*).                (7)

Here “0 in physical space” means the inverse-Fourier coefficient evaluated at x=0, not a claim that arbitrary source data are constant along the base. The O(dK_*) errors arise from the nonzero-frequency eigenvector corrections just estimated. Direct far-source mesh fields satisfy the same error bounds. Thus the mesh velocity is within C rho K_* of the two constant-amplitude layers in (1). Together with (5), this proves the velocity part of (2).

The normal layer pressure is d k_n times its velocity amplitude; the tangential layer has pressure identically zero. Amplitude variation contributes at most C d rho K_* to pressure. Root/vector corrections contribute C d^2 K_*. The exact base condition p=0, and (7), give

    p_ph(0,0)=d k_n c_n+O(d^2 K_*).                       (8)

Moreover the zero base trace forces |c_t|<=C dK_*: the tangential derivative of the physical base pressure is canceled by a mesh pressure derivative of this size. Thus replacing the physical affine pressure by the gauged expression (1) gives at most C rho^2 K_* error. Equations (6)--(8), with discrete Taylor, prove the pressure part of (2).

One pressure derivative across a mesh layer costs d^(-1), but its remainder amplitude is O(d rho K_*), so the derivative remainder is O(rho K_*), not O(rho K_*/d). Pressure root/profile corrections have the same bound. The shallow-source analytic/nonsmooth split just given also applies after this single normal derivative: the normal layer pressure carries the prefactor d, canceling the difference quotient's d^(-1), and the remaining source orders are the velocity orders already bounded. The pressure physical gradient remainder is bounded by (6). Integrating over collar area O(rho^2) proves (3).

For clarity the final full-bubble step is an exact local equation, not a velocity-only reconstruction assumption. Normalize beta_K to have mean one and mean square gamma_2=10/7. In every source-free cell of the target collar, the full actual bubble coefficient satisfies

    c_K=-gamma_2^(-1)[m_K(l_h)+grad p_h|K].              (10)

The ideal affine-plus-layer field obeys the SAME equation. Subtracting it gives |delta c_K|<=C(|m_K(delta l_h)|+|grad delta p_h|K|). Reference scaling yields

    ||delta v_h||_L2(K)
       <=C[||delta l_h||_L2(K)+||grad delta p_h||_L2(K)].

The nodal velocity bound in (2) controls the first term over the collar by C rho^2K_*, and (3) controls the second. Summing proves (4) for the full MINI velocity, including every cell bubble. No second derivative of the thin pressure remainder was assumed.

## 4. Ring-energy form and child-scale lift

For the exact distant cutoff loads, A<=C(V+E), B<=C(dV+RE), hence K_*<=C(V+E)/R^2. Therefore the complete incoming trace error has velocity amplitude C rho(V+E)/R^2 and pressure amplitude C rho^2(V+E)/R^2. Its child-scale extension mass and pressure-gradient norm are both

    <=C rho^2(V+E)/R^2.                                  (9)

Construct the velocity extension by the actual cell-mean-neutral nodal/bubble lift on the child-scale collar; its L2 norm is at most C rho times the velocity amplitude. For pressure, use the incident remainder on that collar and a child-scale cutoff; the additional cutoff derivative costs rho^(-1) times the pressure amplitude and obeys the same bound. This is the scale required by the owner's passive-child mixed-energy estimate. Extending the velocity error over radius R instead would lose one rho/R factor and is not used.

The base trace requires an explicit check. The comparison velocity in (1) is exactly zero at j=0, matching the actual zero base velocity. Its pressure there is -c_t x, while the actual base pressure is zero. Since |c_t|<=CdK_*, lift the residual c_t x by that EXACT affine function throughout the child/coarse transition, cutting it off only on the common uniform annulus. Its pressure-gradient cost is at most C rho|c_t|<=C rho^2K_*, including the cutoff term. No interpolation estimate on a skinny coarse cell is involved. Alternatively reset the extracted macro tangential component to zero, its exact supplied base pressure slope in this zero-base problem. This changes (1) by O(dK_*) in velocity and O(rho dK_*) in pressure, already covered by (2), and gives EXACTLY matching zero base pressure and velocity. The normal component remains the independently extracted c_n. For an affine nonzero base pressure trace use its exact negative tangential slope in this same reset.

The owner proof [child-scale-incoming-cutoff-and-passive-scattering.md](../numerical-analysis-remaining-71-2026-10-17-ROOT-mini-pressure-direct-dual-cycle5/child-scale-incoming-cutoff-and-passive-scattering.md), fully read, now supplies the correct gluing mechanism. Use its cutoff equal to one near the actual child/transition and varying only on the COMMON uniform annulus. The exterior remainder is extended by zero near every coarse element. Its exact compact mixed commutator has the norms in (9); the passive mass estimate controls the complete scattered correction without any depth-dependent child inverse. Thus no separate coarse-transition interpolation constant is needed for this localization, provided the required common uniform annulus has actually been constructed. The geometric construction and its simultaneous compatibility with the surrounding fixed template are still separate obligations.

## 5. Binding to the owner map without dropping a channel

Use exactly J_R and F_R from `../numerical-analysis-remaining-71-2026-10-17-ROOT-mini-pressure-direct-dual-cycle5/exact-two-driver-schur-embedding-target.md`: J_R is the actual ring/transition Schur reaction and F_R is obtained from the exact traces of U_inc on its prescribed far/base boundary. The cutoff is an identity on the actual near-field response. Its far commutator load enters the same ring solve as an additional linear right-hand side; its near-field load is retained in the child/transition self-response. The extraction above supplies c, with its independent normal component. After adding a constant base velocity g and affine base pressure background, by exact superposition the layer extractor is eta=g-c.

The comparison A(c)+E_R(D_child)eta retains the complete ideal child/environment feedback. To bound the actual difference, lift the incoming error on the CHILD scale using (9) and then use the owner's passive-child mixed-energy estimate, including any retained compact pressure moments. No global child-D inverse or false universal fractional projector is invoked. The affine normal reaction is carried by A(c), and both neutral incident layers carry their actual pressure reactions. If a net inner weak pressure moment survives the actual interface sum, its macroport remains; neither (7) nor the pressure gauge deletes it.

Still required for a fully assembled application are the precise chosen transition's lift constants, local pressure-kink and unequal-base-velocity terms, and the final recurrent/nonextinction estimates. This note does not claim those or the original smooth pressure conclusion.

## 6. Distant pressure-only base data: the full-field corollary

For use with the endpoint cutoff, the same proof has a simple base-source version. Let the prescribed base velocity be zero, let the prescribed base pressure h be supported at |x|>=R, and put F=d sum|h|. Then replace K_* everywhere by

    K_base=F/R^3.

The extracted c has |c|<=C F/R^2. All estimates (1)--(9), including the two neutral layers, the O(rho K_base) velocity error, O(rho^2K_base) pressure error and child-scale norm C rho^2K_base, hold. Here are the source-order details, rather than an appeal to a pressure-only estimate. The stable physical pressure multiplier from base pressure is order zero with limit one; its normalized velocity is order one, so one velocity derivative and two pressure derivatives give order two and the R^(-3) separated kernel. Both target mesh VELOCITY amplitudes from a pressure datum are order one: the constant pressure column at theta=0 is the physical/gauge mode, with zero mesh amplitudes. Tangential amplitude variation therefore has the same R^(-3) bound. Root/vector replacement adds another theta, giving the dK_base error after actual pressure normalization. There is no interior source-height contact or direct source-mesh term in this case. High frequencies again use the weighted inverse. Exact zero base data near the child fix the layer amplitudes and pressure gauge exactly as in (7)--(8); full bubbles follow from (10).

This corollary retains all far-base pressure reactions and its extracted affine normal component. It does not replace a far pressure datum by zero, nor infer a zero weak flux from its gauge.

It also extends to a distant prescribed BASE VELOCITY h_v, with pressure zero, by replacing F with d F_v, where F_v=d sum|h_v|. The physical pressure amplitude is -d k_n h_v,n+O(d|theta||h_v|), and its velocity is order |theta||h_v|. The normal mesh pressure amplitude is O(d|h_v|). Mesh VELOCITY amplitudes have a nonzero common analytic order-zero boundary value, unlike a pressure-only datum. At far tangential separation that analytic part is rapidly localized; their first nonsmooth term is order |theta|, yielding velocity value d F_v/R^2 and first variation d F_v/R^3. Multiplication by the analytic root/vector theta correction gives a smooth linear term plus nonsmooth order two and hence error d^2F_v/R^3. One normal pressure derivative cancels its prefactor d and obeys the same velocity order. Thus the full-field and neutral-layer comparison has K_base=d F_v/R^3 and |c|<=C d F_v/R^2. Combined distant pressure and velocity data use F_total=F_pressure+dF_v. Their actual local base traces are zero before the affine/two-layer comparison; the tiny extracted tangent component may be reset to the exact zero local base pressure slope. Normal macro, all base reactions and endpoint inputs remain retained.

No canonical, runtime, manifest, gate, test or commit operation was performed.
