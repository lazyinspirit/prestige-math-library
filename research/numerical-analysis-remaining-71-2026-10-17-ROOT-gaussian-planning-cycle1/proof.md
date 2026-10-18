# Complete preauthor construction for the Gaussian escalation

This is a research proof, not a canonical item or accepted proof-contract record. Proposed lemma packaging and exact author instructions are in `report.md`. All Gaussian random variables below live in explicitly finite-dimensional spaces with their stated Lebesgue densities; every expectation can equivalently be read as a nonnegative/absolutely convergent integral. No arbitrary-index choice is used.

## 1. Scalar and rotational preliminaries

Write ℓ=k+p. Real standard Gaussian density is (2π)^{-1/2}exp(−x²/2). Complex normalized Gaussian density on C=R² is π^{-1}exp(−|z|²), equivalently z=(x+iy)/√2 for independent real standard x,y. Thus E|z|²=1. A matrix with independent such entries has density proportional to exp(−||G||_F²/2) in the real case, exp(−||G||_F²) in the complex case. Orthogonal/unitary left or right multiplication preserves the Frobenius norm and real Lebesgue volume, hence this density. This proves all orthogonal/unitary invariance used below, including that the rows of V*Ω remain independent standard Gaussian rows: their transformed **joint** density still factors.

A nonzero real polynomial has a null zero set: induct on dimension, write it as a polynomial in the last variable, the common vanishing set of its coefficient polynomials is null by induction, and every other section has finitely many roots; Tonelli gives the conclusion. For the determinant of a complex square matrix use the nonzero real polynomial |det G|² in its real coordinates. Therefore the first k columns of k×ℓ Gaussian G have nonzero determinant almost surely. G has full row rank almost surely, as do all its row submatrices.

The square of one real standard Gaussian has density u^{-1/2}e^{-u/2}/(√2 Γ(1/2)) on u>0, by the two branches x=±√u. The squared modulus of a normalized complex Gaussian has density e^{-u} on u>0 by plane polar coordinates. Convolving Gamma densities uses t=su in the convolution integral and the Beta–Gamma identity: the sum of independent Gamma(a,scale θ) variables is Gamma(sum a,scale θ). Consequently a d-dimensional real Gaussian squared norm is Gamma(d/2,scale 2), and a d-dimensional normalized complex Gaussian squared norm is Gamma(d,scale 1). For U~Gamma(a,scale θ), direct integration gives

E U^{-q}=θ^{-q}Γ(a−q)/Γ(a),  0<q<a;

it diverges for q≥a by the integral at zero.

If h is a standard Gaussian vector in F^k, v=h/||h|| is rotationally invariant on the unit sphere. For k≥2, its first coordinate has moments

c_R(q)=E|v₁|^{2q}=Γ(k/2)Γ(q+1/2)/(√π Γ(k/2+q)),

c_C(q)=E|v₁|^{2q}=Γ(k)Γ(q+1)/Γ(k+q),  q>0.

Indeed |h₁|² and Σ_{j>1}|h_j|² are independent Gamma variables with the common scale just proved. Transform them to their sum s and ratio t; the Jacobian s factors the joint density into Gamma times Beta. Integrating t^q proves the formulas. In k=1, |v₁|=1 and the same displayed formulas equal one. Invariance implies E|<v,u>|^{2q}=c_F(q) for every fixed unit u.

## 2. Exact inverse diagonal and Frobenius moments

Put W=GG*. Partition G into its first row g and remaining k−1 rows H. On the full-rank event H has full row rank, and

P=I−H*(HH*)^{-1}H

is the orthogonal projector onto ker H, of dimension ℓ−k+1=p+1. Block Gaussian elimination/Schur complement gives

(W^{-1})₁₁=1/(gPg*).

Conditioning on H is simply integrating first over the independent row g. For each fixed H, an orthonormal basis diagonalizes P, and the density invariance from section 1 implies that gPg* is a sum of p+1 independent squared real Gaussian coordinates, or p+1 squared normalized complex Gaussian coordinates. Thus the first inverse diagonal entry is the reciprocal of Gamma((p+1)/2,2) in the real case, and of Gamma(p+1,1) in the complex case. The k=1 case is the same formula with P=I. No independent distribution of different inverse diagonal entries is claimed or needed.

For a full-row-rank G, B=G*W^{-1} satisfies GB=I, BG=G*W^{-1}G self-adjoint, G B G=G, and B G B=B. Thus it is G† by the four Penrose equations and uniqueness. Also B*B=W^{-1}, so ||G†||_F²=tr W^{-1}, and ||G†||₂²=λmax(W^{-1}). Row invariance and the scalar Gamma reciprocal formula give

E||G†||_F²=k/(p−1)   (real, p>1),

E||G†||_F²=k/p       (normalized complex, p>0).

At p≤1 real and p=0 complex these second moments diverge. In every calculation G† on the null rank-deficient event can be its usual Moore–Penrose inverse; changes on that event do not alter the integrals.

## 3. Spectral moments and integrable tails, without eigenvalue densities

Let M=W^{-1} on the full-rank event. For every deterministic positive M, choose a unit top eigenvector u (only a pointwise finite-dimensional argument; no random measurable eigenvector selection is needed). Then v*Mv≥λmax(M)|<v,u>|², hence

∫(v*Mv)^q dν(v) ≥ λmax(M)^q c_F(q).

Here ν is the invariant sphere probability just constructed. On taking expectations, Tonelli applies to the nonnegative integrands. For each fixed v, left invariance of G implies that v*M v has the same law as M₁₁. Thus for 0<q<(p+1)/2 in the real case,

E||G†||₂^{2q} ≤ C_R(q)

with

C_R(q)=2^{-q}√π Γ((p+1)/2−q)Γ(k/2+q) / [Γ((p+1)/2)Γ(k/2)Γ(q+1/2)].

For normalized complex G and 0<q<p+1,

E||G†||₂^{2q} ≤ C_C(q)

with

C_C(q)=Γ(p+1−q)Γ(k+q) / [Γ(p+1)Γ(k)Γ(q+1)].

These formulas themselves give explicit Markov tails C_F(q)t^{-2q}, taking their minimum with one. They also prove integrability of all spectral-norm moments of orders below p+1 real, below 2p+2 complex. The strict range on q matters.

For the exact coefficient needed in the approved real expectation choose q=p/2, p≥1. Section 4 proves the necessary elementary Gamma bounds. They give

C_R(p/2)=π 2^{-p/2} Γ((k+p)/2)/[Γ(k/2)Γ((p+1)/2)²] ≤ (e√ℓ/p)^p.

Therefore, with a=e√ℓ/p,

E||G†||₂^p≤a^p,  P{||G†||₂>t}≤min(1,(a/t)^p),  E||G†||₂≤a.

The last implication follows from Jensen/Hölder on a probability space; p≥1. For p≥2 the stated tail is integrable at infinity. The mean bound comes from the moment directly, **not** from integrating this less sharp convenient tail and accidentally introducing p/(p−1).

For normalized complex G take q=p, integer p≥1. Then

C_C(p)=Γ(k+p)/[Γ(k)Γ(p+1)²] ≤ (e√ℓ/p)^{2p}.

It follows that E||G†||₂^{2p}≤a^{2p}, P{||G†||₂>t}≤min(1,(a/t)^{2p}), and E||G†||₂≤a. This is a separately proved normalized complex estimate, with exact Frobenius moment k/p from section 2. It neither copies Chen's unnormalized complex constants nor claims to optimize them.

## 4. The elementary Gamma estimates just used

For a,s>0,

Γ(a+s)/Γ(a)≤(a+s)^s.

To see this, Gamma differentiation under its integral gives ψ(x)=Γ'(x)/Γ(x)=E log U for U~Gamma(x,1). Concavity of log gives ψ(x)≤log E U=log x, using Γ(x+1)=xΓ(x). Integrating ψ on [a,a+s] yields log Γ(a+s)−log Γ(a)≤s log(a+s). All derivatives are legitimate by the actual local Gamma smoothness theorem (or its dominated integral proof).

For integer p≥1,

Γ((p+1)/2) ≥ √π (p/(2e))^{p/2}.

If p=2r, the recurrence and Γ(1/2)=√π give Γ(r+1/2)=√π∏_{j=1}^r(j−1/2). Concavity of log makes its midpoint value on [j−1,j] at least its average there, including the integrable improper first interval. Thus Σlog(j−1/2)≥∫₀ʳlog x dx=r log r−r, giving the result.

If p=2r+1, Γ((p+1)/2)=r!. Again midpoint concavity, now on [j−1/2,j+1/2], gives

log(r!) ≥∫_{1/2}^{r+1/2}log x dx

= (r+1/2)log(r+1/2)−(r+1/2)+(1+log 2)/2.

The formula also holds for r=0 with equality before the next weakening. Hence r!≥√(2e)((r+1/2)/e)^{r+1/2}≥√π((r+1/2)/e)^{r+1/2}, using the elementary 2e>π. For example e≥1+1+1/2>2 and π<4 suffice. This proves the odd case without a finite-error Stirling bound.

Finally p!≥(p/e)^p follows from Σ_{j=1}^p log j≥∫₁ᵖlog x dx=p log p−p+1. These three bounds prove the simplifications in section 3, with s=p/2,a=k/2 real, and s=p,a=k complex. No Selberg integral, Wishart density, asymptotic Stirling error, or additional special-function theorem is hidden here.

## 5. Exact real Gaussian product estimate

For fixed compatible **real** matrices S,T and independent real standard Gaussian G,

E||SGT||_F²=||S||_F²||T||_F²,

E||SGT||₂≤||S||₂||T||_F+||S||_F||T||₂.

The Frobenius identity follows by expanding entries and using E G_ij G_ab=δ_iaδ_jb. Equivalently apply real SVD to S,T and sum s_i²t_j² E G_ij². For normalized complex Gaussian entries the same expansion with conjugates proves this **Frobenius** identity too.

Here is a complete comparison proof of the real spectral bound. First prove the finite centered Gaussian comparison principle: if finite centered Gaussian families X_i,Y_i satisfy E(X_i−X_j)²≤E(Y_i−Y_j)² for every i,j, then E max_i X_i≤E max_i Y_i. Take independent copies of the two families and Z(t)=√t Y+√(1−t)X. For F_β(z)=β^{-1}log Σ_i e^{βz_i}, Gaussian integration by parts gives

d E F_β(Z(t))/dt = (β/4) E Σ_{i,j}w_iw_j [E(Y_i−Y_j)²−E(X_i−X_j)²] ≥0,

where w_i=e^{βZ_i}/Σ_j e^{βZ_j}. To justify integration by parts even for singular covariances, write a Gaussian vector as a fixed linear image of independent standard coordinates, use ∫x f(x)e^{-x²/2}dx=∫f'(x)e^{-x²/2}dx one coordinate at a time, and use the bounded first/second derivatives of F_β. Work first on 0<t<1 and integrate by continuity at the endpoints. Since max z_i≤F_β(z)≤max z_i+log N/β, β→∞ proves the comparison principle.

For unit x,y put a=S*x, b=Ty, A=||a||, B=||b||. Let X_{xy}=a*Gb and augment it to X'_{xy}=a*Gb+zAB for an independent scalar standard z. Let Y_{xy}=B g*a+A h*b for independent standard vectors g,h. For another index (x',y') put a',b',A',B', c=<a,a'>, d=<b,b'>. The two processes have the same pointwise variance 2A²B². Their covariance difference is

Cov(X'_{xy},X'_{x'y'})−Cov(Y_{xy},Y_{x'y'})=(AA'−c)(BB'−d)≥0.

Cauchy–Schwarz gives the sign, so increments of X' have at most the squared mean of corresponding increments of Y. Apply finite comparison on successively denser finite sphere sets. All processes have continuous sample paths on the compact product of finite-dimensional spheres and integrable suprema, bounded by finite sums of Gaussian norms; dominated convergence passes to the full spheres. These dense sets can be specified by normalized rational vectors, so no choice premise is required.

For each fixed G, Jensen for the convex function z↦sup_{x,y}(a*Gb+zAB) yields E_z sup X'≥sup X=||SGT||₂. On the other side, for every unit x,y,

Y_{xy}≤||T||₂ ||Sg||₂+||S||₂ ||T*h||₂.

Therefore E||SGT||₂≤||T||₂ E||Sg||₂+||S||₂ E||T*h||₂≤||T||₂||S||_F+||S||₂||T||_F, where the last inequalities use Cauchy–Schwarz and the entry second moments. This proves exactly the two coefficients needed below. Merely using E||G||·||S||·||T|| would not prove the stated theorem.

The spectral proof in this section is explicitly real. The covariance factorization uses real inner products; it must not be asserted unchanged for complex vectors. The general-plan target expectation is real; the richer specialist target also covers the normalized complex procedure, whose sharp product proof remains a hold; the separate normalized complex **pseudoinverse** estimate in sections 2–3 is fully proved without this extension.

## 6. Complete assembly of the approved expected error

Take fixed real m×n A, integers k≥2,p≥2, ℓ=k+p≤min(m,n), and real Gaussian n×ℓ Ω. Let Q be any orthonormal basis of Ran(AΩ), including fewer than ℓ columns when rank drops, and P=QQ*. Take a real SVD A=UΣV*, partition V*Ω=[Ω₁;Ω₂] with k top rows, and write the singular-value operator as Σ=[Σ₁ 0;0 Σ₂], padding rectangular zero rows/columns as needed. Then Ω₁ is k×ℓ Gaussian and Ω₂ is independent Gaussian by joint density invariance. Almost surely Ω₁ has full row rank.

A concise deterministic proof covers possible rank(A)<k too. Set M=A in SVD coordinates, with Y=M[Ω₁;Ω₂]. Consider C=Y Ω₁†[I_k 0]. Its range is contained in Ran(Y), so (I−P)C=0 and ||(I−P)M||≤||M−C||. Since Ω₁Ω₁†=I, the top k rows of M−C vanish and the bottom block is [−Σ₂Ω₂Ω₁†, Σ₂]. Therefore

||(I−P)A||₂²≤||Σ₂||₂²+||Σ₂Ω₂Ω₁†||₂²,

using ||[B C]||₂²=||BB*+CC*||₂≤||B||₂²+||C||₂². In particular

||(I−P)A||₂≤σ_{k+1}+||Σ₂Ω₂Ω₁†||₂.

This proof makes no Σ₁^{-1} assumption and thus includes rank(A)<k; if σ_{k+1}=0 then Σ₂=0 and the error vanishes almost surely. The universal algorithm remains defined even on the exceptional Ω₁ rank-loss event; only the expectation proof discards that null event.

Condition on Ω₁, applying section 5 with S=Σ₂, G=Ω₂, T=Ω₁†:

E_{Ω₂}||Σ₂Ω₂Ω₁†||₂ ≤ ||Σ₂||₂ ||Ω₁†||_F + ||Σ₂||_F ||Ω₁†||₂.

The right side is integrable by sections 2–3. Tonelli/iterated integrals and Cauchy–Schwarz give E||Ω₁†||_F≤√(k/(p−1)); section 3 gives E||Ω₁†||₂≤e√ℓ/p. Since ||Σ₂||₂=σ_{k+1} and ||Σ₂||_F=(Σ_{j>k}σ_j²)^{1/2},

E||A−QQ*A||₂ ≤ (1+√(k/(p−1)))σ_{k+1} + (e√(k+p)/p)(Σ_{j>k}σ_j²)^{1/2}.

This preserves the exact approved statement. A local Eckart–Young theorem supplies the separate optimal rank-k baseline σ_{k+1}; it is not needed as a replacement for the Gaussian argument. The returned approximation has rank at most ℓ, so describe the optimal rank-k number as the target baseline, not as a lower bound for every particular rank-ℓ returned approximation.

## 7. Local concentration construction if the named supplier is authored

For a real standard Gaussian vector X and an L-Lipschitz h in Euclidean norm, prove

P{h(X)≥E h(X)+Lt}≤e^{-t²/2}, t≥0.

Here is a self-contained finite-dimensional proof route, sufficient for conversion into a local item. Define the Ornstein–Uhlenbeck semigroup P_s f(x)=E f(e^{-s}x+√(1−e^{-2s})Z) with independent standard Z. For positive smooth f bounded above/below with bounded derivatives, differentiate its Gaussian integral: ∂_s P_s f=ΔP_s f−x·∇P_s f, ∇P_s f=e^{-s}P_s∇f, and ∫P_s f dγ=∫f dγ by the explicitly Gaussian convolution. Coordinate integration by parts yields ∫u(Δv−x·∇v)dγ=−∫∇u·∇v dγ. Thus

−d/ds ∫(P_s f)log(P_s f)dγ = ∫ |∇P_s f|²/(P_s f)dγ.

As s→∞, P_s f tends to ∫f dγ, by dominated convergence in the displayed kernel. Weighted Cauchy–Schwarz gives |P_s∇f|²≤(P_s f)P_s(|∇f|²/f). Integrate the derivative and use invariance:

Ent_γ(f)≤(∫₀∞ e^{-2s}ds) ∫|∇f|²/f dγ = (1/2)∫|∇f|²/f dγ.

For smooth bounded L-Lipschitz h apply this to f=e^{λh}. With H(λ)=log E e^{λh}, the result is λH'(λ)−H(λ)≤λ²L²/2. Divide by λ² and integrate from zero, using H(0)=0,H'(0)=Eh, to get H(λ)≤λEh+λ²L²/2. Chernoff/Markov with λ=t/L gives the stated tail for L>0; L=0 is constant.

For an arbitrary L-Lipschitz h, clip its **values** to [−N,N], then convolve with a smooth nonnegative compactly supported probability kernel of radius ε. This preserves Lipschitz constant L, yields smooth bounded functions, and converges pointwise first ε↓0 then N→∞. The elementary bound |h(x)|≤|h(0)|+L||x|| shows finite E exp(c|h(X)|) for every finite c: complete the square or use cL||x||≤||x||²/4+c²L². This Gaussian dominating function justifies passage of means and exponential moments in the mgf bound. This proves the tail in full generality. Applied to a matrix viewed as its finite vector of entries, it is precisely the Frobenius-Lipschitz formulation. The expected-error proof in section 6 does not require or cite this concentration result.
