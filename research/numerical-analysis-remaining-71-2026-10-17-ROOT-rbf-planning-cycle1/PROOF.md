# APP-RBF: complete local Matérn supplier construction

Planning evidence, cycle 1. These are proposed local proofs, not authored library items, accepted item reviews, or source substitutions for proofs. All parameters below are fixed before a sequence of site sets is considered. The argument works for every fixed dimension d≥1, smoothness ν>0 and inverse length a>0, and therefore includes the specialist contract's one-fixed-kernel requirement without imposing integer smoothness. Use the negative-sign 2π Fourier convention throughout.

Assume Countable Choice for the existing Hilbert projection, L² completeness and Lebesgue integration/density suppliers, whose precise item IDs, contracts and existing page closure are listed in REPORT.md. Full AC also suffices and conservatively covers the legacy `def-axiom-of-choice` dependency of the published Lp completeness item. These hypotheses must be stated and carried by actual items consuming those suppliers. No arbitrary-index choice of cone rotations or stencils is made: fix x, choose its one rotation and its finite stencil, prove a bound independent of those choices, and only then quantify over x.

## 1. Kernel and Sobolev convention

Put s=ν+d/2 and

$$A=\frac{\Gamma(s)(4\pi)^{d/2}a^{2\nu}}{\Gamma(\nu)},\qquad w(\xi)=A(a^2+4\pi^2|\xi|^2)^{-s},\qquad k(z)=\int_{\mathbb R^d}w(\xi)e^{2\pi i z\cdot\xi}\,d\xi.$$

Here Γ(t)=∫₀∞r^{t−1}e^{−r}dr for t>0. This integral converges, and its ordinary changes of variables suffice for the formulas below. In particular, no general Bessel-function theorem is a logical supplier. The elementary gamma integral and the product Gaussian integral give

$$k(z)=\frac{a^{2\nu}}{\Gamma(\nu)}\int_0^\infty t^{\nu-1}\exp\left(-a^2t-\frac{|z|^2}{4t}\right)\,dt.$$

Indeed, write the negative power as Γ(s)⁻¹∫₀∞t^{s−1}e^{−t(a²+4π²|ξ|²)}dt, and use ∫e^{−4π²t|ξ|²}e^{2πiz·ξ}dξ=(4πt)^{−d/2}e^{−|z|²/(4t)}. Absolute integration is justified because ∫t^{ν−1}e^{−a²t}dt is finite. The Gaussian Fourier identity follows in one dimension by differentiating its integral in z, integrating by parts to obtain I′(z)=−zI(z)/(2t), and evaluating I(0); take products in d dimensions. This also supplies its proof locally.

Consequently k is real, radial, continuous, k(0)=1, and |k(z)|≤1. Equivalently, defining Kν(b) by its convergent integral ½(b/2)^ν∫₀∞u^{−ν−1}e^{−u−b²/(4u)}du for b>0, substitution t↦|z|²/(4u) gives

$$k(z)=\frac{2^{1-\nu}}{\Gamma(\nu)}(a|z|)^\nu K_\nu(a|z|)\quad(z\ne0).$$

This is precisely the normalized Matérn kernel. Its length parameter in GPML equations (4.14)–(4.15) is ℓ=√(2ν)/a. That full source's relevant statement, normalization, and surrounding Fourier convention were read; the integral derivation above supplies the proof rather than relying on that source's assertion.

For s>d/2 define the whole-space Bessel-potential space by inverse Fourier integrals U_g(x)=∫g(ξ)e^{2πix·ξ}dξ with ∫(1+|ξ|²)^s|g(ξ)|²dξ<∞, and give it this last expression's square-root norm. Cauchy–Schwarz makes g integrable, so these are continuous functions. This is the usual weighted-Fourier realization of H^s(R^d), not a new smoothness class. If this realization is introduced locally, supply its elementary injectivity argument: if U_g=0, integrate U_g(x)e^{−πε|x|²}e^{−2πix·η} in x and use Fubini and the Gaussian identity to get g*Gε(η)=0, where Gε(ξ)=ε^{−d/2}e^{−π|ξ|²/ε}. These convolutions converge to g in L¹. To see the latter, write their difference as ∫Gε(y)(g(·−y)−g)d y, use continuity of translations in L¹ (first approximate by continuous compactly supported functions), and split at any fixed |y|=δ. Thus g=0 almost everywhere. Completeness follows from completeness of weighted L². Smooth compactly supported frequency functions are dense by truncation, step-function approximation and smoothing; their inverse transforms are Schwartz by integration by parts. Thus the definition also agrees with the weighted completion-of-Schwartz convention.

For a domain Ω define H^s(Ω) as restrictions of this space, with the quotient norm

$$\|u\|_{H^s(\Omega)}=\inf\{\|U\|_{H^s(\mathbb R^d)}:U|_\Omega=u\}.$$

This standard restriction convention is essential to state explicitly. The proof below works with this norm and does not assume a Lipschitz extension theorem or identify it without proof with an intrinsic fractional derivative norm. On integer orders the whole-space Fourier and derivative norm identification follows from integration by parts and the Gaussian regularization argument for Parseval if required; it is unnecessary for this proof. Do not silently import an intrinsic-domain norm or a domain extension theorem into the eventual item.

## 2. Native-space identity, strict positivity, and restriction

Let H_k consist of the same functions U_g with norm squared ∫|g|²/w and inner product linear in the first variable. Comparability of a²+4π²|ξ|² with 1+|ξ|² gives constants 0<c≤C<∞, depending only on a,s,d, such that

$$c\|U\|_{H^s(\mathbb R^d)}\le\|U\|_{H_k}\le C\|U\|_{H^s(\mathbb R^d)}.$$

For y∈R^d the spectral representative of k(·−y) is w(ξ)e^{−2πiy·ξ}. Hence its inner product with U_g reproduces U_g(y), and its squared norm is ∫w=1. If U is orthogonal to every kernel translate, U vanishes everywhere; the injectivity proved in §1 gives U=0. The closure of the span of translates is therefore all of H_k. This proves that H_k is exactly the native RKHS and proves its Fourier norm identity locally, rather than appealing to Bochner or a general RKHS characterization theorem.

For distinct x₁,…,x_N and any coefficient vector c,

$$c^*K_Xc=\int w(\xi)\left|\sum_jc_j e^{-2\pi i x_j\cdot\xi}\right|^2d\xi.$$

If this is zero, the continuous exponential sum is identically zero because w>0. Choose a vector v with v·x_j pairwise distinct (the complement of finitely many proper hyperplanes is nonempty). Differentiating the exponential sum along tv at t=0 for orders 0,…,N−1 gives an invertible Vandermonde system, so every c_j=0. Thus K_X is strictly positive definite and the interpolation solve is unique.

The subspace NΩ={U∈H_k:U|Ω=0} is closed because point evaluations are continuous. The quotient H_k/NΩ, or equivalently NΩ-perpendicular, with the infimal extension norm is the restricted native space H_k(Ω). Kernel sections centered in Ω lie in NΩ-perpendicular and reproduce there. If a vector of NΩ-perpendicular is orthogonal to all those sections, its restriction is zero and it lies in NΩ as well, so it is zero. Thus this quotient is precisely the restricted kernel's native space. Taking infima in the whole-space inequalities gives

$$c\|u\|_{H^s(\Omega)}\le\|u\|_{H_k(\Omega)}\le C\|u\|_{H^s(\Omega)}.$$

Hilbert projection is available in the existing prerequisite closure and assumes Countable Choice, as stated above. The minimum-norm representative exists by orthogonal projection onto the closed nullspace, so all subsequent infima may use that representative without a further sequence of selections. This does not remove the inherited Choice hypothesis of the projection or integration suppliers.

## 3. Uniform polynomial norming stencils from the cone condition

Assume Ω is bounded and satisfies a uniform interior cone condition: fixed r₀>0 and θ∈(0,π/2) exist such that for each x∈closure Ω a rotation Q_x sends the cone C={z:0<|z|<r₀, z·e₁>|z|cosθ} into Ω−x. A bounded Lipschitz cone domain with these explicit constants is the approved domain class. For a completely concrete instance, take Ω=(0,1)^d; small inward cones with a fixed angle and height work uniformly, including at corners. The theorem below is stated for every domain satisfying the displayed condition, not only that instance.

Let X⊂Ω be finite and h=sup_{x∈Ω}min_{y∈X}|x−y|. Continuity extends the same bound to closure Ω. Fix an integer m>ν. There are constants R,B and h₀>0 depending only on m,d,θ,r₀ such that whenever 0<h≤h₀, every x∈closure Ω has distinct selected nodes y₁,…,y_J∈X, J=dim P_{m−1}(R^d), satisfying

$$|y_j-x|\le Rh,\qquad \sum_j|\lambda_j|\le B,\qquad p(x)=\sum_j\lambda_j p(y_j)\quad(p\in P_{m-1}).$$

Here is a full existence and stability proof. Take J points z_j in the open unit cone 0<|z|<1, z·e₁>|z|cosθ whose evaluations are independent on P_{m−1}. They exist by induction: if k<J evaluations are independent, their common kernel contains a nonzero polynomial p; p cannot vanish on the open cone (a polynomial vanishing on an open ball has all Taylor coefficients zero), so a point with p(z)≠0 increases the rank. Fix a monomial basis. The square evaluation matrix at these points has nonzero determinant, so its inverse, the evaluation-at-zero weights, and their ℓ¹ norm vary continuously for sufficiently small perturbations of all points. Choose ε>0 small enough that every perturbation |z′_j−z_j|≤ε has distinct points, invertible evaluation matrix and weight sum ≤B. This is a compact neighborhood after decreasing ε, so B is finite.

Choose L≥1/ε. When Lh≤r₀, each target x+Lh Q_xz_j lies in Ω. Fill distance supplies a node y_j at distance ≤h. The normalized coordinates (Lh)⁻¹Q_x⁻¹(y_j−x) differ from z_j by ≤1/L≤ε. They are distinct by the preceding construction. Pulling a polynomial back through the affine rotation/scaling preserves its degree; its value at x is its normalized value at zero. The stable evaluation weights therefore reproduce every polynomial of degree <m. Finally |y_j−x|≤(L+1)h; take R=L+1 and h₀≤r₀/L. A finite X supplies nearest sites, so no arbitrary-index site choice is needed. No separation or quasiuniformity assumption was used.

## 4. Domain zeros lemma, including noninteger smoothness

For the same cone domain, fixed s=ν+d/2 and h≤min(h₀,1), every u∈H^s(Ω) vanishing on X satisfies

$$\|u\|_{L^\infty(\Omega)}\le C h^\nu\|u\|_{H^s(\Omega)}.$$

Proof: take any whole-space extension U=U_g of u and split g into the regions |ξ|≤h⁻¹ and |ξ|>h⁻¹, with inverse transforms V and W respectively. Cauchy–Schwarz and polar integration give

$$\|W\|_\infty\le\left(\int_{|\xi|>h^{-1}}(1+|\xi|^2)^{-s}d\xi\right)^{1/2}\|U\|_{H^s}\le C h^\nu\|U\|_{H^s}.$$

For every multi-index |α|=m,

$$\|D^\alpha V\|_\infty\le C\left(\int_{|\xi|\le h^{-1}}|\xi|^{2m}(1+|\xi|^2)^{-s}d\xi\right)^{1/2}\|U\|_{H^s}\le C h^{\nu-m}\|U\|_{H^s}.$$

The last integral is bounded by C[1+∫₁^{1/h}r^{2m−2ν−1}dr]≤Ch^{−2(m−ν)}, since m>ν. All derivatives here exist by differentiating an absolutely integrable, bounded-frequency integrand. For x∈Ω choose the §3 stencil and Taylor-expand V at x to degree m−1. The one-dimensional Taylor integral remainder along the segment from x to y_j bounds the remainder by C|y_j−x|^m max_{|α|=m}||D^αV||∞. Those segments need not lie in Ω: V is a whole-space function. The polynomial part cancels by reproduction, giving

$$\left|V(x)-\sum_j\lambda_jV(y_j)\right|\le C h^\nu\|U\|_{H^s}.$$

Since U(y_j)=u(y_j)=0, the identity

$$U(x)=V(x)-\sum_j\lambda_jV(y_j)+W(x)-\sum_j\lambda_jW(y_j)$$

and the bound on the weight sum prove the same bound for |U(x)|. The constant is uniform in x and U. Take the supremum in x and then the infimum over extensions U. This proves the domain zeros lemma, including the boundary geometry, without circularly presupposing the desired rate, an unproved zeros theorem, or a fractional Sobolev extension theorem.

## 5. Interpolation and power-function rates

Let Π_X denote native-space orthogonal projection onto V_X=span{k(·−y):y∈X}. Reproducing shows (Π_X f)(y)=f(y) at every site. Uniqueness in §2 identifies Π_X f with the coefficient solve. For e=f−Π_Xf, projection gives ||e||native≤||f||native, and e vanishes on X. Combining §§2 and 4 gives

$$\|f-s_Xf\|_\infty\le C h^\nu\|f\|_{H^{\nu+d/2}(\Omega)}.$$

For any x∈Ω, e(x)=⟨f,(I−Π_X)k_x⟩. Thus the power function is the norm of the error evaluation functional, P_X(x)=||(I−Π_X)k_x||native, and |e(x)|≤P_X(x)||f||native. Applying the zeros bound and norm equivalence to e gives ||e||∞≤Ch^ν||f||native; taking the supremum over the unit native ball yields sup_xP_X(x)≤Ch^ν. Equivalently, solving K_Xv=k_X(x) yields P_X(x)²=k(0)−k_X(x)*K_X⁻¹k_X(x), by expanding the projection norm. This identity is real and nonnegative in exact arithmetic.

The rate actually requires no mesh-ratio restriction. It therefore implies the approved bounded-mesh-ratio statement, with constants uniform in that bound; the companion's conditioning discussion must still distinguish separation from fill distance.

## 6. Separation and conditioning, with proof

For N≥2 set q=½min_{i≠j}|x_i−x_j| and ρ=h/q. For 0<q≤1 there is c>0 depending only on d,ν,a such that

$$\lambda_{\min}(K_X)\ge c q^{2\nu},\qquad \lambda_{\max}(K_X)\le N,\qquad \kappa_2(K_X)\le C Nq^{-2\nu}.$$

Here is the missing separation argument in full. Fix a real even nonnegative η∈C_c^∞(R^d), supported in the unit ball, not identically zero and with η≤1. One explicit choice is a positive multiple of exp(−1/(1−|ξ|²)) inside the ball and zero outside. Its inverse integral ψ(z)=∫η(ξ)e^{2πiz·ξ}dξ is real with ψ(0)>0. Repeated integration by parts in a coordinate with |z_j|≥|z|/√d gives |ψ(z)|≤C_M(1+|z|)^{−M} for every integer M.

Since the balls B(x_j,q) are disjoint, the number of indices j with n≤|x_i−x_j|/q<n+1 is at most C_d(n+2)^d, by comparing volumes inside B(x_i,(n+2)q). Consequently, for M>d+1 and T≥1,

$$\sum_{j\ne i}|\psi(T(x_i-x_j)/q)|\le C_M T^{-M}\sum_{n\ge1}(n+2)^d n^{-M}.$$

Choose T once so that this is ≤ψ(0)/2 uniformly in i. The Hermitian matrix with entries ψ(T(x_i−x_j)/q) has quadratic form ≥ψ(0)||c||₂²/2: bound each off-diagonal pair using 2|c_i||c_j|≤|c_i|²+|c_j|². Writing S(ξ)=Σ_j c_j e^{−2πix_j·ξ}, changing variables, and using η≤1 give

$$\int_{|\xi|\le T/q}|S(\xi)|^2d\xi\ge\int\eta(q\xi/T)|S(\xi)|^2d\xi\ge (T/q)^d\frac{\psi(0)}2\|c\|_2^2.$$

On that ball, w(ξ)≥A(a²+4π²T²/q²)^{−s}≥cq^{2s} for q≤1. Insert this and the preceding integral in the positive quadratic-form identity of §2 to get λmin≥cq^{2s−d}=cq^{2ν}. The upper bound follows from trace(K_X)=N and positive eigenvalues. This proves all three displayed bounds.

If Ω lies in a fixed ball, the disjoint q-balls also give N≤CΩq^{−d} for q≤1. Hence κ₂(K_X)≤CΩq^{−2s}. If ρ≤ρ₀ this implies κ₂(K_X)≤CΩρ₀^{2s}h^{−2s}. These are exact-arithmetic condition-number bounds; they are not a claim that a given floating-point implementation is stable. The earlier finite-precision direct-factorization page supplies whatever actual solver-error theorem is invoked. N=1 has K=[1] and condition number 1 and is handled separately; the small-h sequence on a nonempty fixed open domain eventually has N≥2.

## 7. Other approved claims remain intact

The CPD/augmented-system and RBF-FD branches do not logically depend on the Matérn norm proof. For an order-r strictly CPD kernel, polynomial basis p₁,…,p_J of P_{r−1}, and unisolvent sites, write P_{ij}=p_j(x_i). The homogeneous system Ka+Pb=0, P*a=0 gives a*Ka=0, hence a=0 by conditional strict positivity, then Pb=0 implies b=0. This proves invertibility and both interpolation and weight-solve well-definedness. The eventual definition must distinguish strict CPD (needed here) from merely semidefinite conditional positivity.

For a stencil Y and a linear differential functional L at x, choose the kernel sufficiently differentiable for b_i=L_z k(z,y_i)|_{z=x} to exist; the polynomial right side is ℓ_j=Lp_j(x). Solve [K P;P* 0][w;v]=[b;ℓ]. The lower block gives Σ_iw_ip(y_i)=Lp(x) for every declared polynomial p, proving reproduction. For a safe Matérn sufficient condition for an order-t point derivative functional, take fixed ν>t: ∫|ξ|^{2t}w(ξ)dξ<∞, which by Cauchy–Schwarz supplies the continuous native derivative evaluation. This is a choice for that stencil use, not a restriction of the interpolation theorem's ν>0.

For a homogeneous order-t L and f∈C^{p+1} on a ball containing stencil segments, with polynomial reproduction through degree p≥t, Taylor-expand at x. L of the Taylor remainder at x is zero; the value remainder at y_i is at most C|y_i−x|^{p+1}max_{|α|=p+1}||D^αf||∞. Thus |Σ_iw_if(y_i)−Lf(x)|≤C(Σ_i|w_i|)|Y−x|max^{p+1}max||D^αf||∞. If stencil radius is r and a separately established bound Σ_i|w_i|≤C_wr^{−t} holds, this becomes C C_wr^{p+1−t}max||D^αf||∞. Unisolvence alone does not imply a uniform C_w; retain the explicit weight norm unless that extra bound is proved. Lower-order terms in L can be retained term by term. No PDE stability or RBF-QR flat-limit result is implied.
