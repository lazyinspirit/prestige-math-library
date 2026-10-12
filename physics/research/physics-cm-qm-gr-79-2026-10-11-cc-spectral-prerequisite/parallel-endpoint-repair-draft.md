# Independent endpoint proof elaboration

Research-only author draft, 2026-10-11. Integration, independent review, the complete old/current/alias consumer cone, and native decisions remain the sole responsibility of `/root/physics_spectral_repair_successor`. This file grants no acceptance, readiness, or counter reset. The checkpoint's same-cycle first-repair 1/2 history is preserved. No production carrier, mirror, imported mathematics, plan, contract, or readiness file was written.

## Read binding and retained interface

The elaboration binds the production endpoint carrier at raw SHA-256 `3225da71d3aef735212924d5c4ca09ef1cdc58d9e9d4844996caf26899e68eb8`, not a later version. Its Statement (a)–(e), the final no-physical-interpretation paragraph, AC+CC hypotheses, and every parameter value γ≥0 are retained. In particular, this is not a CC-only replacement for an AC-bearing supplier. Its exact domain is the form realization, not a maximal differential domain obtained merely by imposing an informal boundary value.

Other actual reads:

| Physics-relative file | Raw SHA-256 |
|---|---|
| `items/thm-nrqm-coulomb-angular-radial-unitary-reduction.md` | `7d40bc155d735f28b814739036157409a80fdec308c1b481392cbf7d369aae70` |
| `items/thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain.md` | `f26d475a309210c603659d46d73e923b74ffaf50ae010cb862eb8df04edb8331` |
| `items/thm-nrqm-coulomb-infinitesimal-kinetic-bound.md` | `8f612b62c8b78ae22b6dadc63de1d9e5ab2d6441a06c03b8de76643590a5b708` |
| `research/physics-cm-qm-gr-79-2026-10-11-cc-spectral-prerequisite/CHECKPOINT.md` | `df4ef4e59a1c73199f6d51c543bd505b750972b6bb99cf006460b46b3ac421c6` |
| `research/physics-cm-qm-gr-79-2026-10-11-cc-spectral-prerequisite/cc-radial-and-dollard-candidate.md` | `0d5202df4374d81242ed1bbef5c17bca1392e14fdc1e7f3b94d48979c57fe560` |

The two research inputs correctly distinguish repaired mathematics from mechanical checks and unaccepted CC-only proposals. The following proof uses the current C supplier, with its actual AC+CC contract, for γ>0. At γ=0 it uses the explicit self-adjoint free Fourier multiplier. Countable selection of approximants and the supplied angular construction remain within the declared CC assumption; arbitrary choice is inherited at the current C/Kato–Rellich supplier, not falsely manufactured by radial coordinate assembly. No generic spectral decomposition is required by the alternative below.

## Exact proof elaboration for the current Statement

Use inner products linear in the first argument. Write λ_l=l(l+1), H=L²(0,∞), and T₀u=u′−u/r on the compact smooth radial core. All identities below apply to complex functions.

### 1. Closability, Hardy, the trace, and the exact completion

On C_c^∞(0,∞), integration of (|u|²/r)′ yields

    ||u′−u/r||² = ||u′||²,
    ||u/r||² = 2 Re ∫ u′ bar(u)/r,
    ||u/r|| ≤ 2||u′|| = 2||T₀u||.

The last inequality also follows directly from ||u/r||²=−2 Re∫(u/r)bar(T₀u). Consequently the defining V_l norm is equivalent, for each fixed l, to the H¹ norm on the core. Its completion is H¹₀(0,∞). This equivalence is not claimed uniformly in l; the subsequent shifted coercivity bound is uniform.

To justify that this completion is realized in L², suppose u_n→0 in L² and T₀u_n→g in L². On any compact subinterval of (0,∞), multiplication by 1/r is bounded; in distributions u_n′−u_n/r→0. The L² limit therefore gives g=0 as a distribution, hence g=0 almost everywhere. This proves the first projection of the graph closure is injective, rather than assuming the assertion. For a general graph-limit sequence, Hardy applied to differences gives u_n/r→h in L². Local distributional convergence identifies h=u/r and g=u′−u/r. Thus u′=g+u/r lies in L², with zero trace because u_n converge in H¹ to u.

Here the trace is the limit at 0 of the continuous H¹ representative on bounded intervals. The estimate |u(t)−u(s)|≤|t−s|^(1/2)||u′||₂ gives existence of that limit; on (0,1), |u(0)|≤||u||₂+||u′||₂, obtained by choosing a point of value at most ||u||₂ and using the same estimate, gives trace continuity. Since each core function has zero trace, so does every V_l function.

Conversely, suppose u,u′,u/r∈L² with the distributional derivative u′ and trace 0. Choose smooth χ_ε vanishing below ε, equal to 1 above 2ε, and |χ_ε′|≤c/ε. Then

    ||χ_ε′u||² ≤ 4c²∫_0^{2ε}|u|²/r² → 0.

The other omitted derivative, function, and weighted terms tend to zero by absolute continuity of their integrals. At infinity use θ_R equal to 1 below R and 0 above 2R with |θ_R′|≤c/R; its added derivative is bounded by (c/R)||u||_{L²(R,2R)}. The resulting functions have compact support inside (0,∞). Extend each by zero to the line and mollify with radius smaller than its distance to the endpoints of its support interval. Standard L² approximation of the function and its weak derivative gives H¹ convergence, and 1/r is bounded on the enlarged compact interval. This produces core approximants in V_l. It proves the distributional realization stated in the item. Indeed u,u′−u/r,u/r∈L² imply u′∈L² and zero trace automatically: a nonzero trace would make ∫|u|²/r² infinite.

The graph completion is complete, the displayed V_l norm is its Hilbert norm, and inclusion in H is continuous and dense. In particular l=0 loses no Hardy control.

### 2. The form and its associated self-adjoint operator

Let D u=u′−u/r. Hardy and Cauchy–Schwarz give

    |∫u bar(v)/r| ≤ ||u/r|| ||v|| ≤ 2||D u|| ||v||.

The derivative and angular pairings are also bounded in V_l. Hence a_l is a bounded sesquilinear form on V_l, symmetric under conjugate interchange. The estimate 2γxy≤x²/2+2γ²y² proves the uniform bound

    a_l[u] ≥ (1/2)||D u||²+λ_l||u/r||²−2γ²||u||².

With μ=2γ²+1, b_l=a_l+μ〈·,·〉 is an inner product satisfying

    (1/2)||u||²_{V_l} ≤ b_l[u] ≤ c_γ||u||²_{V_l}.

Thus it is complete, a_l is closed and semibounded, and Riesz solves b_l(u,v)=〈f,v〉 for every f∈H. By the exact domain definition in the Statement this u belongs to D(A_l) and (A_l+μ)u=f. Uniqueness follows by testing the homogeneous equation with u. The representing f in the definition is unique because V_l is L²-dense.

For each compact smooth u, integration by parts gives a_l(u,v)=〈L_lu,v〉 first for compact smooth v, where L_lu=−u″+(λ_l/r²−γ/r)u∈H. Both sides are continuous on V_l, so the identity extends to every v∈V_l. This extension is necessary for the asserted core inclusion C_c^∞⊂D(A_l). In particular D(A_l) is H-dense. Symmetry of a_l makes A_l symmetric on this dense domain.

To prove self-adjointness without omitting domain density, take y∈D(A_l*) and solve (A_l+μ)x=(A_l*+μ)y. Then (A_l*+μ)(y−x)=0. Its kernel is orthogonal to ran(A_l+μ)=H, so y=x. Hence A_l*=A_l. Moreover 〈A_lu,u〉=a_l[u]≥−2γ²||u||².

There is a direct proof of the stronger form-density assertion in (b), avoiding a spectral-form lemma. If w∈V_l is b_l-orthogonal to D(A_l), then for every f∈H the solution u_f=(A_l+μ)⁻¹f satisfies

    0=b_l(u_f,w)=〈f,w〉.

Thus w=0. The closed b_l-orthogonal complement of the closure of D(A_l) is trivial, so D(A_l) is dense in V_l in b_l norm and therefore in V_l norm. This completes (a),(b), including the stated form identity. Since a_l is the closure of the compact-test differential form, this is precisely its Friedrichs form realization; no other endpoint extension has been selected.

### 3. Interior regularity

For u∈D(A_l), testing its defining form identity against v∈C_c^∞(0,∞) and integrating the derivative term distributionally gives

    −u″+(λ_l/r²−γ/r)u=A_lu.

The cross terms in (u′−u/r)bar(v′−v/r) cancel their zeroth-order contribution after integration of (u bar(v)/r)′. On an interval [a,b]⊂(0,∞) the potential coefficient is bounded; hence u″=(λ_l/r²−γ/r)u−A_lu∈L²(a,b), while step 1 already gives u,u′∈L². Thus u∈H²(a,b). One-dimensional absolute-continuity representatives of u and u′ agree on overlaps, giving a C¹ representative on (0,∞), with u′ locally absolutely continuous and the equation almost everywhere. If A_lu=Eu, the right side for u″ is continuous; its primitive shows u′ is C¹ and u is C², with the eigen-equation everywhere on (0,∞). No regularity at r=0 is inferred from this interior argument.

### 4. Full polar H¹ completion, without assuming angular form density

Set W={w=(u_lm):u_lm∈V_l, Σ_lm||u_lm||²_{V_l}<∞}. This is the Hilbert direct sum in these norms. On finite compact smooth radial sums, the angular unitary supplier's block Laplacian identity, followed by Euclidean integration by parts and angular orthogonality, gives

    ||ψ||²+||∇ψ||² = Σ_lm||u_lm||²_{V_l},
    q(ψ,φ)=Σ_lm a_l(u_lm,v_lm),
    q(ψ,φ)=∫∇ψ·bar(∇φ)−γ∫ψ bar(φ)/|x|.

The second identity is polarized from the first kinetic identity and the polar-coordinate potential identity. The latter has the genuine radial weight r⁻¹, not a weight replaced by 1.

To establish H¹-density of these finite sums, first approximate H¹ functions by smooth functions and then remove the origin. Let η_ε be 0 below ε and 1 above √ε, with |∇η_ε|≤c/[r log(1/ε)]. Hardy gives

    ||u∇η_ε||₂ ≤ 2c||∇u||₂/log(1/ε) → 0.

Dominated convergence handles (1−η_ε)u and (1−η_ε)∇u. After a compact support cutoff and smoothing away from zero, one obtains C_c^∞(R³\{0}) as an H¹-dense subspace.

For ψ in this smooth annular subspace, let ψ_N be the harmonic truncation with l≤N. Every radial coefficient is smooth and supported in the same annulus. We claim Δψ_N=P_NΔψ, where P_N denotes the L² polar angular projection. Radial differentiation commutes with the finite angular projection. For the angular term, the polar formula and Green's identity on S² give

    〈−Δ_{S²}ψ(r·),Y_lm〉 = λ_l〈ψ(r·),Y_lm〉.

This is not an invocation of a differential-domain claim for general smooth sphere functions from a supplier whose Statement only handles the finite span. It follows by ordinary angular integration by parts: excise polar caps of angular radius δ, integrate the θ,φ expression, cancel periodic φ boundaries, and let δ↓0. Smooth sphere functions and their intrinsic gradients are bounded; each cap boundary has length O(δ), so all Green boundary terms tend to zero. The supplied finite-span eigenidentity for the smooth Y_lm therefore suffices.

Parseval and polar integration now give ψ_N→ψ and Δψ_N→Δψ in L². The smooth annular residual R_N=ψ−ψ_N satisfies

    ||∇R_N||² =〈−ΔR_N,R_N〉 ≤ ||ΔR_N|| ||R_N|| → 0.

Therefore finite compact smooth radial sums are H¹-dense. This proof supplies the missing gradient-tail control explicitly.

The isometry on the finite core consequently extends from H¹ onto W: finite-support families are W-dense, and each of their finitely many coordinates has core approximants by the definition of V_l. Its L² extension agrees with the already supplied U. Hence

    U(H¹)=W,
    ||ψ||²_{H¹}=Σ_lm||u_lm||²_{V_l}.

The full form identity extends by continuity. The Coulomb summation is controlled uniformly by

    Σ_lm |∫u_lm bar(v_lm)/r|
      ≤ 2(Σ||D u_lm||²)^(1/2)(Σ||v_lm||²)^(1/2),

and the gradient and angular sums have the corresponding Cauchy–Schwarz bounds. Thus no fixed-l equivalence constant is used in an infinite sum. The global Coulomb form bound also follows from three-dimensional Hardy.

### 5. Exact operator equality by self-adjoint inclusion

Define Â=⊕_lm A_l on exactly the square-summable graph domain in (d). Finite-support domain vectors are dense; coordinate symmetry and Cauchy–Schwarz prove Â symmetric. For each sign, self-adjointness of A_l gives ||(A_l±i)⁻¹||≤1 (the estimate ||(A_l±i)u||²=||A_lu||²+||u||² proves the bound). For any f∈K put u_lm=(A_l±i)⁻¹f_lm. Then Σ||u_lm||²≤Σ||f_lm||² and A_lu_lm=f_lm∓iu_lm has square-summable norm. Thus ran(Â±i)=K and the symmetric range criterion gives self-adjointness. One can also see closedness directly: convergence of u_n and Âu_n gives coordinate convergence, and each closed A_l identifies its coordinate limits; the limiting image is already square summable.

It remains to identify this operator with UCU*. This can be proved without an unproved assertion about direct-sum spectral forms. For ψ∈H², Fourier weak differentiation and Hardy give, for every φ∈H¹,

    q(ψ,φ)=〈Cψ,φ〉.

Indeed the kinetic identity is the weak integration by parts identity, first on compact smooth φ and then by H¹ continuity; ψ/|x|∈L² by Hardy handles the potential pairing. Step 4 gives u=Uψ∈W. Fix one index j=(l,m) and v∈V_l, and set φ=U⁻¹(vδ_j)∈H¹. The full polarized form identity gives

    a_l(u_j,v)=q(ψ,φ)=〈(UCψ)_j,v〉.

Therefore u_j∈D(A_l) and A_lu_j=(UCψ)_j. Since UCψ∈K, u lies in the graph domain of Â. This proves C⊂U*ÂU. Both operators are self-adjoint, so taking adjoints reverses the inclusion and gives U*ÂU⊂C. They are equal. The full iff graph-domain statement and the action formula in (d) follow immediately. This argument applies unchanged to γ=0 with C the free operator, and it proves actual H² transport rather than assuming it from an L² ODE solution.

### 6. Eigenfunction transport and the bounded quotient

If u∈D(A_l) and A_lu=Eu, the family uδ_(l,0) is in D(Â), with image Euδ_(l,0). Step 5 gives ψ=U⁻¹(uδ_(l,0))∈D(C)=H², Cψ=Eψ, and ψ(x)=u(r)Y_l0(Ω)/r almost everywhere.

For ψ∈H², write g=F₂ψ. Weak Fourier differentiation gives (1+|ξ|²)g∈L². Since (1+|ξ|²)⁻¹∈L²(R³), Cauchy–Schwarz gives g∈L¹. The absolutely convergent inverse Fourier integral defines a bounded continuous representative: its uniform bound is ||g||₁, and dominated convergence gives continuity. Agreement with the L² inverse follows by Fourier truncation, or the usual L¹∩L² inversion compatibility. This is the actual reason H²⊂C_b; it does not imply smoothness at the origin.

The interior regularity from step 3 makes u(r)Y_l0(Ω)/r continuous on R³\{0}. It agrees almost everywhere there with the continuous H² representative, hence everywhere there: a nonzero continuous difference would remain nonzero on an open set of positive Lebesgue measure. Choose Ω₀ with Y_l0(Ω₀)≠0, possible since its L² norm is 1. Then

    |u(r)/r| ≤ ||ψ||_∞/|Y_l0(Ω₀)|,  0<r≤1.

This supplies the representative justification missing when an almost-everywhere polar identity is evaluated on a fixed ray. It proves every part of (e). The bound in fact holds on the whole half-line, but no expansion of the public Statement is needed.

## What this draft resolves, and what remains for the reviewer

The locally derived arguments resolve graph closability/injectivity, weighted half-line control at l=0, extension of compact-test identities to the whole form domain, density before taking an adjoint, direct form-norm density of D(A_l), uniform control in the infinite angular sum, explicit H¹ harmonic approximation, exact graph-domain operator equality, interior regularity, and genuine H²/continuous-representative eigenfunction transport. The final statement's endpoint selection is consistent: the compact-core closure encodes the Friedrichs endpoint, while no independent boundary condition is appended to D(A_l).

No mathematical gap is being intentionally left in these local arguments conditional on the quoted angular, Hardy, Sobolev density, Fourier, Riesz, and self-adjoint C suppliers. Their full prerequisite closure has not been independently accepted by this author. In particular the global C supplier is AC+CC-bearing and γ>0-only; its free γ=0 replacement must remain explicit. The actual sphere-Laplacian supplier has only a finite-span differential interface, so integration must preserve step 4's local angular Green argument rather than cite a nonexistent smooth-domain clause.

Before integration, the sole reviewer should decide whether to adopt this alternative or use its elaborations to strengthen the existing spectral-form proof. If adopting it, reconcile direct dependencies for Parseval, Tonelli/Fubini, Fourier inversion compatibility, and any orthogonal-complement theorem used for Hilbert density; some currently occur only transitively. This is metadata work for the owner, not permission to alter imported suppliers. Existing metadata need not be pruned just to minimize dependency lists. Any production edit needs current hashes, explicit proof tags/facts, formatting checks, and the owning reviewer's full required consumer review. No local numerical experiment can certify these infinite-dimensional arguments. No external source retrieval or full-text reading was performed by this author, and no such attestation is claimed.
