# Canonical physical superspace dictionary: bounded proposal, not applied

2026-10-23. Root owns the coordinated source-write window. The raw mathematical
superspace algebra, derivative operators, conjugation and coefficient-extraction
measures remain unchanged. This proposal repairs physical action notation and
component identifications; it asserts no quantum change of variables or Jacobian.

## Raw and physical conventions must be separate

Write I_D(U) for the literal ordered coefficient of
`theta1 theta2 bartheta1 bartheta2`, and I_F(Y) for the coefficient of
`theta1 theta2`. These are the existing mathematical integrals. Define physical
superspace action brackets explicitly by

`[U]_D,phys = -I_D(U)/4`, `[Y]_F,phys = I_F(Y)/2`.

The conjugate of an F action coefficient is added once; it is not silently
identified with an unadjusted ordered antichiral coefficient integral. Let a
chiral field's physical component names satisfy

`Phi=A(y)+sqrt(2) theta^alpha psi_phys,alpha(y)
          +2 theta1 theta2 F_phys(y)`.

Thus the existing mathematical components are `psi_raw=sqrt(2) psi_phys` and
`F_raw=2 F_phys`. Scalar A is unchanged. This is a dictionary between two
component notations for the SAME classical superfield, not a dynamical field
rescaling in a quantum functional integral.

A compactly supported pure auxiliary test Phi=theta1 theta2 f has
Phi*=−bartheta1 bartheta2 conjugate(f), so raw I_D(Phi*Phi)=−|f|².
The proposed physical bracket gives +|f|²/4=|F_phys|². For a scalar-only
field, putting Delta_y=i theta sigma bartheta gives
`top(Delta_y^mu Delta_y^nu)=-2 eta^(mu nu)`. The raw D scalar density is

`-eta^(mu nu)(conj(A) A_,mu nu + conj(A)_,mu nu A)
 +2 eta^(mu nu)conj(A)_,mu A_,nu`.

Under compact support this integrates to +4 eta dA* dA. The physical bracket
therefore gives exactly −eta dA* dA. For a general Kähler target the physical
auxiliary quadratic form is the intended positive metric form after the same
F component identification; the physical chiral bracket gives F_phys^i W_i
and its Hermitian conjugate. A direct Taylor expansion also gives the expected
relative superpotential Yukawa normalization: raw top(W) is
`F_raw^i W_i-W_ij psi_raw,1^i psi_raw,2^j`; division by two yields
`F_phys^i W_i-W_ij psi_phys,1^i psi_phys,2^j`.

These calculations fix the scalar/auxiliary normalization and relative chiral
coupling factors. They are not an independent quantum positivity or full
extended-supersymmetry audit of all fermion component conventions.

## Vector and gauge normalization checked independently

Keep the current raw prepotential expansion, physical vector component B,
auxiliary D_B, and connection A=−igB. Keep the currently EXPLICIT raised-first
matrix-curvature definition

`C_(alpha,R)= -barD^dotbeta barD_dotbeta
             (exp(-2gV_R) D_alpha exp(2gV_R))/4`.

Do not silently change the contraction order. The abstract Lie curvature in
the action is still `rho_R*(W_conn)=C_R/(2i)`. Consequently

`kappa_C(W_conn^alpha,W_conn_alpha)/(4g²)
 =Tr2(C^alpha C_alpha)/(8g²)`.

With the physical F bracket above and H.c. once, direct finite-Grassmann
calculations in the explicit local differential convention give:

- pure constant D_B: +D_B²/2;
- an Abelian B_2=x^1, others zero: magnetic gauge density −1/2;
- an Abelian B_1=x^0, others zero: electric gauge density +1/2;
- non-Abelian constant B_1=t_1, B_2=t_2: F_B,12=−i[B_1,B_2]=t_3 and gauge
  density −1/2 at g=1.

The last is a matrix calculation using exp(±2V)=1±2V+2V² in the bosonic
nilpotent algebra; it checks the commutator normalization as well as the
Abelian derivative terms. These reproduce the supplied bosonic Yang–Mills
normalization. Using the raw F bracket instead doubles all these gauge terms.
Exact bounded output is in `susy-canonical-vector-measure-check.json`.

The earlier fixed-real-g holomorphic bridge is preserved ONLY after applying
the same physical brackets on both sides. Its kernel substitution is
V_hol=−2gV30, Lambda_hol=−iLambda30, so W_hol=C_30. With the ordinary defining
trace, the coefficient equality is

`tau_h Tr2(C²)/(8 pi i)=Tr2(C²)/(8g²)` at theta=0,

hence tau_h=pi i/g² and g_h=2g in tau_h=4pi i/g_h². The common F physical-measure
factor cancels in this comparison. No trace sign change or unverified global
theta/prepotential conversion is used.

## Ordered D-to-F projection and the FI sign

At fixed chiral coordinates y, define
`P_raw=partial_bartheta2^L partial_bartheta1^L|bartheta=0
      =barD_dot2 barD_dot1`.
The literal measures give I_D(U)=I_F(P_raw U) after removing spacetime total
derivatives. With epsilon_12=1 and its inverse epsilon^12=−1,

`barD^dotbeta barD_dotbeta = -2 P_raw`,
`barD_dotbeta barD^dotbeta = +2 P_raw`.

The physical action identity is therefore

`[U]_D,phys = [P_phys U]_F,phys`,
`P_phys=-P_raw/2=+(barD^dotbeta barD_dotbeta)/4
                    =-(barD_dotbeta barD^dotbeta)/4`.

This explains exactly when the familiar minus-one-quarter shorthand is valid:
it uses the LOWER-FIRST contracted barred derivatives. No source should write
an unqualified barD² when transferring between these two conventions.

For an Abelian V_hol shift −Lambda−conj(Lambda), the constant-FI identity is
unchanged: P_phys(S)=0 for a constant S. In physical brackets its variation is
`-[P_phys(S) Lambda]_F,phys+H.c.`. The proof-only raw-projector correction
already made in batch32/45 should be converted to this physical identity when
those densities are explicitly normalized; its zero-vanishing conclusion and
degree-zero threshold conclusion do not change.

For a direct Abelian component test, V30 has top D coefficient −2D_B and
V_hol=−2gV30 has top +4gD_B. Thus an FI density
`xi_h [V_hol]_D,phys` contributes `−g xi_h D_B`. The physical coefficient of
+D_B is consequently xi_D=−g xi_h in THAT definition. A charge-q matter term
contributes +g q|A|²D_B. These explicit coefficients fix the sign rather than
borrowing a different source's symbol xi. No FI theorem for the selected SU2
model is asserted; this is the separate Abelian qualification.

## Exact coordinated source work proposed

1. Keep all raw mathematical supplier1 definitions unchanged.
2. Give the physical brackets and physical chiral-component dictionary in the
   appropriate earlier physical supplier, then make all physical30/31 actions
   use those brackets explicitly. In particular the WZ auxiliary F names must
   mean F_phys, not the raw top coefficient. Preserve their positive Kähler
   potential, scalar potentials and intended cubic/mass/gauge couplings.
3. Make the formal32 density explicitly use the SAME normalized physical
   brackets before retaining the g_h=2g component bridge. Formal spurion and
   graph-counting proofs are unaffected by these fixed numerical normalizations;
   a quantum Jacobian does not follow from a notation change.
4. Align45's action brackets and its exact chiral Euler projector. The leading
   Pi_0 tree threshold formula remains W_L−J²/(2M). To keep the intended soft
   coefficient A_soft=kappa F_X,phys/Lambda, the physical spurion is
   Xspurion=2 theta1 theta2 F_X,phys; keeping the old raw top coefficient instead
   would insert an extra factor one-half in A_soft. This concrete downstream
   component repair must not be omitted.
5. Review all current direct/indirect consumers after they drain. Component
   actions in33/47/48/50 already state their physical gauge density directly;
   they should retain it. Algebraic invariant-polynomial examples do not change.
   The weighted53 operator theorem needs no superspace-measure change and its
   separate infinite joint-block repair remains valid.

The current source dependency observation is
`susy-canonical-measure-consumer-observation.json` (51 items at observation).
It reaches30/31/32/33/34/35/45/47/48/50/53/54. Active49/51 and future55 require
page/source-context rechecking after completion even where no current exact
item path exists. The source observation is not a final audit of active writers.
Do not overwrite their source, contracts or readiness rows in this repair
window. Root has recorded explicit holds on the four contradictory30/31
postulates; this proposal does not release them.

A concrete acyclic shared-interface placement is a new definition
`def-qftx-physical-superspace-normalization` on the existing batch30 A page,
placed before its WZ and vector formulations, domain physics. Its exact
mathematical prerequisites are `def-qftx-superspace-grassmann-algebra` and
`def-qftx-n1-chiral-superfield`; its Definition consists of the two scaled
physical action brackets, conjugate-action convention, raw/physical component
dictionary and ordered projector conventions above. Its source boundary is
Martin §4.7/§4.9 plus the explicitly reconstructed local raw-coordinate map;
it asserts a convention, no quantum equality or universal normalization theorem.
WZ and vector definitions can use it as a formulation prerequisite, so the
ungauged WZ model need not depend on a gauge-model postulate merely to obtain
common measure notation. Existing GM/N2/N4/32/45 data then inherit or directly
name that same interface, and root owns exact dependency levels/manifest
insertion. No new A/B pair or imported mathematical edit is needed. This is a
concrete placement proposal for the coordinated window, not an authored or
accepted new supplier.
