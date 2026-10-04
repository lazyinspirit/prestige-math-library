# Integrator mathematics: scales, conformal Maxwell structure and coupling limits

2026-10-04. These are conditional pure mathematical statements about smooth tensors/equations with numeric constants. Physical readings additionally adopt the explicit Einstein–Maxwell model. No result below depends on an empirical premise or unproved local/global existence assertion. Tensor indices use the precise connection/curvature definitions of earlier GR G0–G5 and the Lorentz Hodge definition supplied in this dossier.

<a id="C0"></a>
## C0. SI and geometric parameter conversion

Fix positive numbers c,G,µ0 and set ε0=(µ0c²)−1, κ=8πG/c⁴ and α=√(κ/(2µ0)). For a real two-form F put ℱ=αF. The tensor quadratic Q_ab(F)=F_ac F_b^c−gab F_cd F^{cd}/4 obeys Q(αF)=α²Q(F), simply because both terms have exactly two field factors and raising indices is linear. The electrovac equation G_ab+Λgab=κµ0−1Q_ab(F) therefore equals G_ab+Λgab=2Q_ab(ℱ). Its metric trace is −R+4Λ=0, since Q^a_a=F²−4F²/4=0. Substitution then gives Ric_ab−Λgab=2Q_ab(ℱ). This is an exact equivalence for the same metric, not a continuum or low-field limit.

For physical Coulomb field F0r=−Q/(4πε0cr²), define q_geo=√(G/(4πε0c⁴))Q. Algebra with µ0ε0c²=1 gives α/(4πε0c)=√(G/(4πε0c⁴)), so ℱ0r=−q_geo/r². The RN mass coefficient m_geo=GM/c², charge coefficient q_geo and rotating length a_geo=J_ang/(Mc) (M>0) have metres. Conversely Q=√(4πε0c⁴/G)q_geo, M=c²m_geo/G and J_ang=Mc a_geo. A mathematical negative m_geo is not a positive physical rest-mass claim. For a magnetic flux ΦB=∫F on a spatial sphere, ℱ flux is αΦB; if its geometrized monopole coefficient p_geo is defined by ∫ℱ=4πp_geo, then p_geo=αΦB/(4π), in metres. This supplies a magnetic parameter without silently introducing magnetic matter current into dF=0 on the exterior.

In SI α has C s/(kg m), F components have kg/(C s), hence ℱ has m−1. An integrated geometrized flux has m; the physical magnetic flux has Tesla m²=Wb. The principal-bundle connection's dimensionless curvature normalization is an additional chosen map, and need not equal α. Coordinate angles or time in seconds change individual component units by Jacobians; equations above assume length coordinates.

<a id="C1"></a>
## C1. Hodge scaling and four-dimensional Maxwell covariance

Let g be a smooth oriented nondegenerate metric on an n-manifold and Ω>0 smooth. Put g'=Ω²g. The inverse metric is Ω−2g−1 by multiplication, and |det g'|1/2=Ω^n|det g|1/2 by determinant homogeneity. For p-forms the induced metric inner product contracts p inverse metrics, so ⟨a,b⟩g'=Ω−2p⟨a,b⟩g. By the defining identity a∧*g b=⟨a,b⟩g vol_g and nondegeneracy of exterior pairing, *g' b=Ω^(n−2p)*g b. This computation is valid in Lorentz signature; it does not replace the independent Lorentz star-square sign convention.

In n=4,p=2, *g'F=*gF. Thus if dF=0 and d*gF=µ0 i_j vol_g, then the same F and j'=Ω−4j satisfy dF=0 and d* g'F=µ0 i_j' vol_g', because i_(Ω−4j)(Ω⁴vol_g)=i_jvol_g pointwise. Conversely apply Ω−1. The charge three-form i_jvol_g/c is unchanged. The vacuum Maxwell field action ∫F_abF^{ab}vol_g is unchanged on any admitted finite integral or compact-support action difference, since raising two indices contributes Ω−4 and volume Ω⁴. The lower stress Q(g',F)=Ω−2Q(g,F); its contravariant version scales Ω−6. For an observer n'=Ω−1n, Q(g',F)(n',n')=Ω−4Q(g,F)(n,n). These are exact tensor identities and conformal transformations of the specified mathematical Maxwell model, not assertions of Einstein or material constitutive invariance.

<a id="C2"></a>
## C2. Why conformal Maxwell does not imply conformal Einstein

Set φ=logΩ. For the same coordinate derivatives the two Levi–Civita connections differ by C^a_bc=δa_b φ_c+δa_c φ_b−gbc φ^a, obtained by substituting ∂g'=Ω²(∂g+2g∂φ) in the Christoffel formula and cancelling Ω² inverse factors. In dimension n, its contracted trace is C^a_ba=nφ_b. The curvature-difference formula follows by expanding ∂Γ'+Γ'Γ' and grouping the cross terms as covariant derivatives:

Ric'_bd−Ric_bd=∇aC^a_db−∇dC^a_ab+C^a_ac C^c_db−C^a_dc C^c_ab.

Here the derivative terms are −(n−2)∇b∇dφ−gbd□φ; commuting scalar second derivatives uses torsion freedom. The quadratic terms are (n−2)(φ_bφ_d−gbdφ_cφ^c): the first product is n(2φ_bφ_d−gbdφ²), while the second is (n+2)φ_bφ_d−2gbdφ², from distributing the three terms in each C and contracting each Kronecker factor. Subtracting gives that expression. Thus in n=4,

Ric'=Ric−2 Hess φ−g□φ+2dφ⊗dφ−2g|dφ|²,

R'=Ω−2(R−6□φ−6|dφ|²),

G'=G−2 Hessφ+2dφ⊗dφ+2g□φ+g|dφ|².

The traces are taken with the original g in these formulas. In flat Minkowski space let φ=kx¹ with k≠0, F=0,Λ=0. Hessφ=0,□φ=0,|dφ|²=k²; hence R'=−6k²e^(−2kx¹) is nonzero. The original metric/field solve electrovac but the conformal pair do not solve Ric'=0. No conformal invariant coupled Einstein theorem is implied by C1.

<a id="C3"></a>
## C3. Constant rescaling of coupled electrovac and source normalization

Let λ>0 be constant. Set g'=λ²g, F'=λF and Λ'=λ−2Λ, holding c,G,µ0 fixed as numerical equation parameters. Constant metric scaling leaves Christoffel and (1,3) curvature unchanged; Ricci lower is unchanged, scalar R'=λ−2R and G' lower=G. Raising one index in Q(g',F') contributes λ−2 while the two field factors contribute λ², so Q(g',F')=Q(g,F). Also Λ'g'=Λg. Therefore an electrovac solution (g,F,Λ) maps exactly to (g',F',Λ'). Maxwell has dF'=λdF=0 and d*g'F'=λd*gF=0 by C1.

For nonzero j set j'=λ−3j. Then i_j'vol_g'=λ i_jvol_g, so the sourced Maxwell equation also transforms exactly. This does not by itself transform a charged matter stress/action/constitutive model: its own tensor scaling and mass/charge parameters must be specified before claiming full matter-model invariance. This constant scaling changes physical length assignments when interpreted in SI; it is not the assertion that a fixed apparatus and fixed dimensionful data describe the same experiment.

<a id="C4"></a>
## C4. A controlled test-field order statement

Let a fixed smooth Lorentz metric g on a compact coordinate set K solve vacuum Einstein with constant Λ. Let F1 be a smooth source-free Maxwell two-form there and define Fε=εF1 for a real dimensionless ε. Maxwell remains exactly satisfied on the fixed metric by linearity. Its lower stress is ε²T1 by C0. The residual of the coupled Einstein equation for the fixed pair (g,Fε) is therefore exactly −κε²T1, and any chosen finite component sup norm is at most κ ε²‖T1‖K. If T1 is nonzero, the pair is not an exact coupled solution for ε≠0. The bound is a residual estimate only: it supplies neither a nearby metric nor a solution-error estimate without a separate constrained local evolution/stability theorem and matched initial data. A test particle may feel a force of order ε while omitted EM gravitational stress is order ε², but matter self-stress/current and scaling of the particle's mass/charge are separate inputs. This distinguishes an exact controlled order calculation from a fabricated singular point-source or backreaction limit.

The argument needs no compactness theorem: smooth fields and compact K make the component norms finite, and every equality is pointwise. Norm values depend on the chosen fixed chart/tetrad; transforming to another fixed smooth bounded frame changes the constant by its bounded transition norms. No observer-independent scalar error has been silently assigned to a component norm.
