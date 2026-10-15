# Local QFT-MC04 conformal geometry prerequisite

2026-10-14. Research design and complete local mathematical argument for ordinary engine authoring; no production item, review acceptance, source-reading certification or readiness is asserted. Both proposed items have domain mathematics and home QFT-MC04 A, preceding the unchanged `thm-qft-conformal-external-scalar`. No Einstein–Maxwell pair is authored.

## Exact inspected source and supplier boundary

The former dependency was the unpublished EMG interface `thm-emg-conformal-einstein-transformation`, defined by `complete-local-arguments.md#C2` in the Einstein–Maxwell research dossier. Its full argument derives the conformal Ricci, scalar and Einstein tensor transformations for arbitrary smooth positive conformal factors. Its dependency `def-emg-lorentzian-forms` is explicitly the proposed `workers/geometry-actions/proof-modules.md#GA0` definition (GA1 defines exterior calculus/Hodge operations). Those complete research bodies were inspected. Neither is an authored item or an authored `emg-c01` page; neither supplies production proof acceptance. QFT uses only the scalar-curvature specialization on the same R4 and needs none of the Hodge, Maxwell, Einstein, observer rest-space, tetrad or bundle machinery.

Existing authored `def-gr-smooth-lorentzian-objects` specifies the smooth metric, signature and time orientation; `def-gr-metric-selected-connection` Definition (d) supplies the intrinsic torsion-free metric-compatible connection and Christoffel formula, and (e) specifies the curvature operator, Ricci and scalar traces. Its actual proof establishes those constructions before later curvature pages. Their domains are mathematics even though their GR home page has library physics. Use these exact definitions, with their inherited Countable Choice hypothesis `def-countable-choice`, as the only external logical suppliers. Do not use a physical GR postulate. These three supplier IDs already exist locally; no import is needed. No stronger Choice is used in the calculations below.

<a id="D"></a>
## D. Proposed def-qft-conformal-external-geometry

Assume Countable Choice as carried by the exact GR suppliers (used for their general tangent-bundle definitions; the displayed coordinate computations require no further choice). On the smooth manifold M=R4 with its standard coordinate chart x=(x0,x1,x2,x3), canonical trivial tangent bundle and orientation dx0 wedge dx1 wedge dx2 wedge dx3, fix eta=diag(-1,1,1,1). Let Omega:M→(0,infinity) be C∞ and real, and put g_ab=Omega² eta_ab. This is a smooth symmetric nondegenerate covariant two-tensor with signature (-+++). Choose the timelike field N=partial_0; future causal nonzero tangent vectors satisfy v0>0, g(v,v)≤0. A causal curve means a piecewise C1 map from a real interval with nonzero future causal derivatives on its smooth pieces. Two points are causally related if identical or joined by such a curve; spacelike-separated compact sets have no causally related point pair. This curve class and relation are identical for g and eta, because Omega²>0. In R4 the relation is equivalently y0-x0≥|y_space-x_space| for future relation: necessity follows by integrating the velocity inequality and the triangle inequality piecewise, and sufficiency by the straight segment. Distinct points with eta(y-x,y-x)>0 are therefore causally unrelated. No completeness assertion is part of this definition.

Use the Levi–Civita connection of `def-gr-metric-selected-connection`, with

$$\Gamma^a{}_{bc}=\tfrac12g^{ad}(\partial_bg_{dc}+\partial_cg_{bd}-\partial_dg_{bc}),\qquad R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z.$$

Indices a,b,c,d,e range from 0 through 3; repeated upper/lower indices are summed. Set R(partial_c,partial_d)partial_b=R^a_bcd partial_a, Ric_bd=R^a_bad and R_g=g^{bd}Ric_bd. The letter R_g denotes scalar curvature, not the curvature operator. Expanding the displayed connection action on coordinate fields gives

$$R^a{}_{bcd}=\partial_c\Gamma^a{}_{db}-\partial_d\Gamma^a{}_{cb}+\Gamma^a{}_{ce}\Gamma^e{}_{db}-\Gamma^a{}_{de}\Gamma^e{}_{cb}.$$

Explicitly, nabla_c(nabla_d partial_b) has coefficient partial_c Gamma^a_db+Gamma^a_ce Gamma^e_db; subtract its c,d exchange, with the coordinate bracket zero. Thus this is a derived formula, not an undeclared supplier theorem.

Define w_g=sqrt(|det(g_ab)|), vol_g=w_g d4x, and the scalar wave operator on C∞(M;C) by the density formula

$$\Box_g h=w_g^{-1}\partial_a(w_g g^{ab}\partial_bh),\qquad \Box_\eta=\eta^{ab}\partial_a\partial_b,\qquad P_g=\Box_g-R_g/6.$$

Here d4x is oriented coordinate volume and scalar integration uses its associated positive Lebesgue density; g^{-1}=Omega^{-2}eta^{-1} and w_g=Omega4 follow by matrix multiplication and det(Omega²eta)=-Omega8. This definition agrees with the intrinsic contraction of the scalar Hessian: differentiate g^{ab}g_bc=delta^a_c to get partial_a g^{ab}=-g^{ac}g^{bd}partial_a g_cd; the Christoffel formula gives Gamma^c_ca=4 Omega^{-1}partial_a Omega=partial_a log w_g, and direct substitution yields w_g^{-1}partial_a(w_g g^{ab})=-g^{ac}Gamma^b_ac. Consequently Box_g h=g^{ab}(partial_a partial_b h-Gamma^c_ab partial_c h). The displayed density definition suffices on this global chart and introduces no Hodge operator.

Tests are C_c∞(M;C) with fixed-compact derivative seminorms and the usual inductive-limit topology; kernels relative to vol_g are paired by integrating against vol_g in every variable. The selected massless Minkowski Fock field, domain and vacuum are supplied separately by QFT-MF02 and are not part of this purely geometric definition.

<a id="L"></a>
## L. Proposed lem-qft-conformal-scalar-wave-identity

For the objects above and every u∈C∞(R4;C), the following exact identities hold:

$$R_g=-6\Omega^{-3}\Box_\eta\Omega,\qquad P_g(\Omega^{-1}u)=\Omega^{-3}\Box_\eta u.$$

P_g preserves C_c∞ and is formally symmetric for vol_g. The signature, curvature sign and coupling 1/6 are exactly those of D; there is no field equation or physical postulate in this lemma.

**Complete local proof.** Put v_a=Omega^{-1}partial_a Omega, v^a=eta^{ab}v_b, H_bd=partial_b v_d and v²=eta^{ab}v_av_b. Smooth mixed partials commute, so H_bd=H_db. Substitution of partial_b g_dc=2Omega(partial_b Omega)eta_dc in the Christoffel formula gives C^a_bc:=Gamma^a_bc=delta^a_b v_c+delta^a_c v_b-eta_bc v^a. The flat connection is zero. In particular C^a_ab=4v_b. Contract the derived curvature formula in D:

$$\operatorname{Ric}_{bd}=\partial_aC^a{}_{db}-\partial_dC^a{}_{ab}+C^a{}_{ac}C^c{}_{db}-C^a{}_{dc}C^c{}_{ab}.$$

The derivative terms are 2H_bd-eta_bd eta^{ac}H_ac-4H_bd=-2H_bd-eta_bd eta^{ac}H_ac. The first quadratic term is 4(2v_bv_d-eta_bd v²). For the second product, distributing the three summands of C^a_dc against the three of C^c_ab in their written order gives these nine terms:

$$v_bv_d+v_bv_d-\eta_{bd}v^2+4v_bv_d+v_bv_d-v_bv_d-v_bv_d-\eta_{bd}v^2+v_bv_d=6v_bv_d-2\eta_{bd}v^2.$$

Subtracting yields Ric_bd=-2H_bd-eta_bd eta^{ac}H_ac+2v_bv_d-2eta_bd v². Taking its trace with g^{bd}=Omega^{-2}eta^{bd} gives R_g=-6Omega^{-2}(eta^{bd}H_bd+v²). But differentiation of v yields H_bd=Omega^{-1}partial_b partial_d Omega-Omega^{-2}(partial_b Omega)(partial_d Omega), so eta^{bd}H_bd+v²=Omega^{-1}Box_eta Omega. This proves the scalar-curvature formula with the specified sign.

By w_g=Omega4 and g^{ab}=Omega^{-2}eta^{ab}, Box_g h=Omega^{-4}partial_a(Omega²partial^a h), where partial^a=eta^{ab}partial_b. For h=Omega^{-1}u, the numerator becomes partial_a(Omega partial^a u-u partial^a Omega)=Omega Box_eta u-u Box_eta Omega: the two gradient cross terms cancel. Thus Box_g(Omega^{-1}u)=Omega^{-3}Box_eta u-Omega^{-4}u Box_eta Omega. Subtracting (R_g/6)Omega^{-1}u cancels its last term, proving the wave identity. No boundedness or decay of Omega at infinity is required, since this is a local differential identity.

All coefficients are smooth, so P_g maps compact smooth tests to compact smooth tests. For compact f,h, coordinate integration by parts gives

$$\int\overline f\,\Box_g h\,\mathrm{vol}_g=-\int\Omega^2\eta^{ab}(\partial_a\overline f)(\partial_bh)\,d^4x=\int\overline{\Box_g f}\,h\,\mathrm{vol}_g.$$

To justify integration by parts, contain both supports in a finite box; along every coordinate line the one-dimensional boundary term vanishes, and Fubini applies to the smooth compact integrands. Since R_g is real, its multiplication term is symmetric too. The same identity without conjugation is the bilinear transpose used for distributional equations. This completes the argument.

## Unchanged field consumer and all affected QFT descendants

Read the full actual QFT C7 and C7 B arguments and FF3/FF4 massless construction. Replace only C7's EMG prerequisite with D and L. The claim is unchanged: Phi_g(f)=Phi_0(Omega³ f) on the same invariant dense D_fin and selected vacuum; normalized state positivity, adjoint/closability hypotheses, weak distribution continuity, P_g field equation and locality all remain as stated. For each compact K the product-rule estimate p_K,m(Omega³f)≤C_K,m p_K,m(f), with C_K,m the finite sum of suprema of derivatives of Omega³ of orders≤m times binomial factors, proves continuity into compact tests and hence Schwartz tests. Real Omega gives the inherited adjoint relation. With u=Omega f the identity gives Omega³P_g f=Box_eta(Omega f), so FF3 proves Phi_g(P_gf)=0. Formal symmetry justifies this weak scalar equation for curved-volume smearing.

The kernel W_g(x,y)=Omega(x)^{-1}Omega(y)^{-1}W_0(x,y), relative to vol_g(x)vol_g(y), produces exactly the two test factors Omega³, and the same computation gives the commutator kernel. Positivity follows from the supplied vacuum norm of every finite B*B; smooth multiplication does not enlarge support, and the causal relation is unchanged by D. FF4 therefore proves locality. No temperateness in curved coordinates is added; compact-test distribution continuity is what is claimed.

The only direct descendant of thm-qft-conformal-external-scalar in the current revised inventory is ex-qft-constant-conformal-normalization; it has no descendants. For Omega=b>0, v=H=0 gives R_g=0, P_g=b^{-2}Box_eta, Phi_g(f)=Phi_0(b³f), W_g=b^{-2}W_0, and the two factors of volume b4 give b6 times the flat covariance, precisely the two test factors b³. Thus its existing full claim and argument survive unchanged. Other QFT references to this interface in claim coverage, historical inventories/ledgers and supplier maps are provenance records, not additional logical consumers. They remain historical except for the explicit current binding in scaffold/track and these integration proposals.
