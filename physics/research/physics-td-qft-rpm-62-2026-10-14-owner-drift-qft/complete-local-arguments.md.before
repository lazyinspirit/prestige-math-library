# Integrator mathematical prerequisites: states, reconstruction and scope

2026-10-04. Pure mathematics; no physical postulate or empirical premise is a dependency. These arguments use the actual published Hilbert completion under Countable Choice, and specify the first-variable-linear pairing used by the root library. Bra notation is ⟨v|u⟩=(u,v). A constructed representation is not an existence proof for an unspecified interacting positive moment functional.

<a id="C0"></a>
## C0. Unital involutive algebra and positive functional

A unital complex star algebra A is a complex vector space with associative bilinear product, unit1, conjugate-linear involution * satisfying (ab)*=b*a*, (a*)*=a,1*=1. No norm or bounded-operator realization is assumed. A state is a complex-linear functional ω:A→C with ω(1)=1 and ω(a*a)≥0 for every a, where ≥0 means a real nonnegative number. Put (a,b)_ω=ω(b*a), linear in a. Expanding the nonnegative real number ω((a+zb)*(a+zb)) for z=1 and z=i and comparing conjugates gives ω(a*b)=overline(ω(b*a)); taking b=1 also gives ω(a*)=overline(ω(a)). Thus this is a Hermitian sesquilinear positive semidefinite form.

For ω(b*b)>0, positivity of that quadratic at the minimizing complex z gives |ω(b*a)|²≤ω(a*a)ω(b*b). If ω(b*b)=0, the quadratic has no |z|² term; a nonzero linear coefficient would be made negative by choosing its phase and sufficiently large magnitude, so ω(b*a)=0. This proves Cauchy–Schwarz including zero-norm cases. Let N={a:ω(a*a)=0}. Cauchy–Schwarz makes N the radical of the form, so it is a vector subspace: its members pair to zero with every b, and finite linear combinations have zero squared norm. It is a left ideal. If a∈N and c∈A, put b=c*c a; Cauchy–Schwarz gives ω((ca)*(ca))=ω(a*c*c a)=0, so ca∈N. No assumption that N is a right ideal is made; that would generally be false.

<a id="C1"></a>
## C1. Complete algebraic GNS construction and uniqueness

Define D=A/N with ([a],[b])=ω(b*a); the radical calculation makes the pairing representative independent and positive definite. Complete D using the published thm-completion-of-an-inner-product-space-is-hilbert, carrying its Countable Choice premise. Let H_ω denote that Hilbert space. The dense embedding is part of the completion data; identify D with its image. Define π(a)[b]=[ab]. Left-ideal property proves well-definedness; multiplication and linearity show π is a unital representation on the invariant dense domain D. Its adjoint pairing is

(π(a)[b],[c])=ω(c*ab)=([b],π(a*)[c]).

Consequently D⊂D(π(a)*) and π(a)*|D=π(a*). Every π(a) is closable: if v_n∈D,v_n→0 and π(a)v_n→w, then for each z∈D, (w,z)=lim(v_n,π(a*)z)=0; density gives w=0, so its graph closure is a graph. For a=a* it is symmetric on D; essential self-adjointness is not a consequence. Ω=[1] has norm1, π(A)Ω=D, and (π(a)Ω,Ω)=ω(a). Thus the state is represented by a cyclic vector.

If another cyclic representation (H',D',π',Ω') has D'=π'(A)Ω' and the same state, define U[a]=π'(a)Ω'. This is well-defined because its squared norm is ω(a*a), and its pairings agree by polarization. Its image is D', so it is a dense-range isometry and extends uniquely by completion to a unitary H_ω→H'. It carries Ω to Ω', D to D' and intertwines π(a) on D. This is uniqueness of the cyclic representation of this specified state, not equivalence of different states or different interacting theories.

<a id="C2"></a>
## C2. Invariant states and strongly continuous implementing symmetries

Let a group G act by unital star automorphisms α_g of A, and suppose ω∘α_g=ω. Define U_g[a]=[α_g(a)]. State invariance preserves N and the pairing, so this is a unitary on H_ω after completion, with U_gU_h=U_gh and U_gΩ=Ω. The covariance identity U_gπ(a)U_g^-1=π(α_g a) holds on the invariant domain. If G is topological and g↦ω(b*α_g a) is continuous at the identity for every a,b, then

‖U_g[a]−[a]‖²=2ω(a*a)−ω(a*α_g a)−ω((α_g a)*a)→0.

This proves strong continuity on D. For x∈H_ω approximate by y∈D; the bound ‖U_gx−x‖≤2‖x−y‖+‖U_gy−y‖ proves strong continuity on all H_ω. Group composition transfers continuity to every g. No differentiability, common generator domain or spectral theorem is inferred from this group representation alone.

<a id="C3"></a>
## C3. Moment data and weak operator-valued tempered fields

Let S=S(R⁴;C) with seminorms p_N(f)=max_|α|≤N sup_x (1+|x|)^N|∂^αf(x)|. Its real subspace consists of real-valued Schwartz functions. Form the algebraic tensor algebra T(S)=⊕_n≥0 S^⊗alg n, with finite sums only, concatenation product, unit in degree0 and involution reversing factors and conjugating each. Write X(f) for degree1; f↦X(f) is complex linear and X(f)*=X(bar f). Products of n Schwartz functions in separate variables are Schwartz on R^(4n): finite multiindex differentiation and (1+|x|)≤∏_i(1+|x_i|) bound each joint seminorm by a product of component seminorms. With all other factors fixed, this map is continuous in any one factor.

Suppose W_n are continuous tempered distributions on R^(4n), W_0=1, and define ω on tensor monomials by W_n(f_1⊗...⊗f_n), extending linearly. Require explicitly that this is positive on every a*a; hermiticity then follows C0. Apply C1 and define Φ(f)=π(X(f)) on D. For a,b∈T(S), the matrix element (Φ(f)[a],[b])=ω(b*X(f)a) is a finite sum of W_n evaluated on tensor products with one variable factor f. Continuity of W_n and the preceding tensor seminorm bound therefore gives a continuous linear functional of f, i.e. a tempered distribution. This is an operator-valued distribution in the weak matrix-element sense on the specified common invariant domain D. Each Φ(f) is closable; Φ(bar f) is its adjoint restricted to D. Real test functions give symmetric fields, not automatically self-adjoint closures. Correlation functions on Ω are exactly the supplied W_n by construction.

If ω is invariant under proper orthochronous Poincaré pullback α_gX(f)=X(T_gf), T_gf(x)=f(g^-1x), C2 supplies covariance. The pullback is continuous on S and T_gf→f there as g→1: write the parameter difference as the integral of its first derivative along a short coordinate path; bounded inverse matrices near1 control |g^-1x| by constants times |x|, and differentiation introduces only finite polynomial factors times derivatives of f. Every target seminorm is bounded by a higher Schwartz seminorm uniformly on that parameter neighborhood. Finite tensor products and continuity of W_n make the matrix-element hypothesis of C2 hold. Thus U_g is strongly continuous and U_gΦ(f)U_g^-1=Φ(T_gf) on D.

If for every a,b and real/complex f,h with mutually spacelike separated compact supports the moment identity ω(b*[X(f),X(h)]a)=0 holds, then [Φ(f),Φ(h)]=0 on D: its value on [a] lies in D and pairs to zero with every [b], whose span is dense. The graded version is analogous when an explicitly graded tensor algebra and sign are supplied; no spin–statistics theorem is derived from this identity. A field equation follows in the same way if its tested polynomial lies in the representation kernel by these moment pairings.

The positive-energy requirement can be stated independently in matrix-coefficient distribution form. For translations, D_b,a(z)=ω(b*α_z a) is bounded by Cauchy–Schwarz and invariance, hence tempered. Require its Fourier transform with convention ∫e^-ip·z D(z)dz (ordinary coordinate pairing) to have support in C_+={p:p0≥|p_space|}. This property transfers unchanged to the reconstructed dense-domain matrix coefficients. It is an explicit moment/spectrum hypothesis; C1 does not manufacture it. Equivalence with a joint four-generator spectral-measure formulation needs its actual spectral supplier and is not separately asserted here. This translation convention implements field covariance with U(a), while Schrödinger state evolution uses the inverse time action; the sign must be fixed when identifying energy.

These results construct a model only after actual positive continuous moment data are supplied. Declaring an interacting formal series W_n without positivity/convergence does not meet these hypotheses and produces no Hilbert representation or continuum QED theory by this theorem.

<a id="C4"></a>
## C4. Positive Weyl state with no regular field generators

Let S=R² and σ a real antisymmetric bilinear form. The algebra has basis W(f), f∈S, finite sums only, product W(f)W(g)=exp(−iσ(f,g)/2)W(f+g), star W(f)*=W(−f) and unitW(0). Associativity follows because σ(f,g)+σ(f+g,h)=σ(g,h)+σ(f,g+h) by bilinearity. Star/product compatibility uses σ(g,f)=−σ(f,g), so it is a unital star algebra. Define ω(W(f))=1 for f=0 and0 otherwise. For a=∑distinct f c_fW(f), only equal indices survive ω(a*a), and their σ(f,f) is zero, so ω(a*a)=∑|c_f|²≥0 and ω(1)=1.

Its GNS completion is ℓ²(S) with basis [W(f)], because these classes are orthonormal and their finite span is the defining dense space. W(g) acts as a phase times the permutation f↦g+f and is unitary. For any nonzero g and any t≠0, U(t)=[left multiplication W(tg)] sends Ω to the orthogonal vector [W(tg)]; hence ‖U(t)Ω−Ω‖=√2. It is not strongly continuous at0. There cannot be a densely defined generator with differentiable unitary action on a dense domain: differentiability gives continuity there, and unitary norm1 plus dense approximation would make the action strongly continuous on all H as in C2, contradicting the Ω calculation. Positivity and exact Weyl relations alone therefore do not provide regular smeared field operators. The state is a rigorous algebraic example; no physical preparation or local relativistic vacuum is asserted.

<a id="C5"></a>
## C5. Exact finite measurement law and lack of convergence from formal coefficients

For bounded operators M_1,...,M_n on a Hilbert space H with ∑M_i*M_i=I and a unit vector v, put p_i=‖M_iv‖². Each is nonnegative and ∑p_i=(∑M_i*M_iv,v)=1. If p_i>0, the normalized selected vector is M_iv/√p_i; if p_i=0 that selected outcome has zero probability in this mathematical law and no normalized update is defined. For density operators the exact earlier NR-QM M2/M4/M9 bounded-trace calculation gives p_i=tr(ρM_i*M_i), with the same positivity/normalization and explicitly specified instrument. These are mathematical probability laws; the physical Born/apparatus interpretation is a separate postulate on an actual constructed model. Merely symmetric unbounded Φ(f) does not supply a spectral measurement, and field values at points are not such bounded M_i.

For the formal series ring C[[g]], operations are coefficientwise finite Cauchy products; equality means equality of every coefficient. The series ∑n!g^n is a valid formal element even though its numerical terms fail to tend to zero for every g≠0: |(n+1)!g^(n+1)|/|n!g^n|=(n+1)|g|→∞. Thus formal identities alone supply no convergent function of coupling. Truncation error requires a separately proved estimate and a specified actual model; neither coefficient equality nor perturbative power counting supplies it.

<a id="C6"></a>
## C6. Source-check countercalculation: Yukawa radial power

For r>0, spatial dimension3 and µ≥0, the radial Laplacian is u''+2u'/r, obtained by differentiating ∂_iu=u' x_i/r twice and summing. For u=e^-µr/r² this gives (Δ−µ²)u=2e^-µr(µ/r³+1/r⁴), nonzero. For v=e^-µr/r it instead gives (Δ−µ²)v=0 off the origin. Hence the r−2 Yukawa expression printed in the actually read Fewster–Rejzner PDF p11 cannot be used as the three-dimensional homogeneous screened Green expression. The r−1 expression meets this local differential test; its full distributional normalization is a separate supplier if consumed. This completed countercalculation repairs a source disposition without claiming every source page was read or using this unconsumed typo as an input theorem.

<a id="C7"></a>
## C7. An exact conformally curved external free-field construction

Let Ω:R⁴→(0,∞) be smooth and g=Ω²η with η=diag(−1,1,1,1), the inherited orientation/time orientation. Curves are causal for g iff causal for η, since g(v,v)=Ω²η(v,v), and future components coincide. Hence the global causal separation relation is unchanged on this same R⁴ domain; no geodesic completeness follows. The exact earlier EMGR conformal-curvature proof gives R_g=−6Ω^-3□_ηΩ. One can also obtain it directly by tracing the Christoffel difference C^a_bc=δa_b∂c(logΩ)+δa_c∂b(logΩ)−ηbc∂^a(logΩ), with the GR curvature convention.

The density-divergence definition of the scalar wave operator gives □_g h=Ω^-4∂a(Ω²ηab∂bh). For h=Ω^-1u, the differentiated numerator is ∂a[Ω∂^au−u∂^aΩ]=Ω□_ηu−u□_ηΩ, because the two cross gradients cancel. Thus with P_g=□_g−R_g/6,

P_g(Ω^-1u)=Ω^-3□_ηu.

This is a complete conformal scalar-operator identity, with the curvature coupling1/6 explicitly specified; it is not the minimally coupled massive equation. The operator is formally symmetric for vol_g under compact tests, by writing the wave term as that density divergence and integrating coordinatewise by parts; the real multiplication curvature term is symmetric too.

Suppose the actually constructed massless Minkowski free field Φ₀ on its invariant dense Fock domain D satisfies Φ₀(□_ηf)=0, positivity of its vacuum state and causal commutation. For f∈C_c∞(R⁴;C) define Φ_g(f)=Φ₀(Ω³f), using the curved scalar smearing volume. Ω³f is compact smooth and hence Schwartz; multiplication on each fixed compact support is continuous through every test derivative. Thus this is a weak operator-valued distribution with exactly the supplied common invariant domain and adjoint relation. Its normalized vacuum vector gives a positive state because expectation of B*B is a squared Hilbert norm for every finite field polynomial. All symmetric/closable assertions inherit their actual domain hypotheses from the constructed field, not from a generic axiomatic state.

To check the equation, apply the conformal identity with u=Ωf: Ω³P_gf=□_η(Ωf), so Φ_g(P_gf)=0. If W₀ and the commutator distribution are kernels relative to flat volume, their curved-volume kernels are W_g(x,y)=Ω(x)^−1Ω(y)^−1W₀(x,y) and the identically scaled commutator: integrating against vol_g(x)vol_g(y)=Ω(x)^4Ω(y)^4d⁴x d⁴y reproduces the Ω³ test factors. Positivity is preserved, and multiplication by a nowhere-zero smooth function does not enlarge distribution support. Since causal separation is unchanged, spacelike smeared fields commute exactly. The metric/classical coupling is prescribed background data; no Einstein equation, renormalized stress, preferred unique vacuum, generic Hadamard theorem, interacting curved QED or semiclassical backreaction is asserted. The state is the explicitly selected conformal pullback of this actual massless free model.

<a id="C7-example"></a>
## C7 B. Constant conformal factor

For Ω=b>0 constant, R_g=0 and P_g=b⁻²□η. The constructed field is Φ_g(f)=Φ₀(b³f), with kernel b⁻²W₀ relative to curved volume b⁴dx in each argument. Substituting directly in the smeared double integral gives b⁶ times the flat covariance, exactly as the two factors b³ in the test map. Causal cones are unchanged. This verifies the normalization without claiming a preferred vacuum on arbitrary curved spacetime.
