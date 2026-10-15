# Local analytic suppliers for the fixed dimensional KMT construction

This is proof authoring material, not an acceptance receipt. Scope: the analytic content of Zaitsev (1996), §§1–5, for dimensions at most four. No live item, manifest, contract, hash, or audit stamp is changed here. The dyadic construction, smoothing construction, and conditional quantile integration are separate obligations.

Sources actually read: the full text `/tmp/bcs62-zaitsev-conditional-full.txt`, introduction and §§1–5 (including their imported-lemma references), and a rendered image of printed p.813 (PDF p.7), `/tmp/bcs62-zaitsev-analytic-page7.png`, which resolves the Fourier hypotheses lost in OCR. Source URL: <https://www.mathnet.ru/links/e53bf45963ae71225e3a783f93f9e434/smj483.pdf>. The English 1998 paper is available at <https://www.numdam.org/item/PS_1998__2__41_0.pdf>; the proof below does not claim that merely citing it supplies the missing analysis.

## Precise scope and existing suppliers

The repo already contains proved one-variable Cauchy inequalities (`cor-cauchy-inequalities`, `cor-cauchy-estimates-taylor-coefficients`), Cauchy's higher derivative formula (`thm-cauchy-integral-formula-higher-derivatives`), Fourier inversion for Schwartz functions (`thm-fourier-inversion-on-schwartz-space`), Fubini and dominated convergence, multivariate normal characteristic functions (`lem-characteristic-function-of-a-multivariate-normal-law`), and positive definite Gaussian integrals (`lem-positive-definite-gaussian-integral`, currently draft). The published `cor-density-inversion-from-an-integrable-characteristic-function` is **one dimensional** and cannot itself justify the vector density inversion used here. The short vector extension is proved below. The Fourier convention in the harmonic analysis items has frequency `2πξ`; change variables `t=2πξ` before using it. Their choice assumptions must be inherited; assuming AC covers them. No recursive audit of these foundational suppliers is claimed.

All constants below are fixed numerical constants, or depend only on a declared fixed tail constant, uniformly over `1≤d≤4`. They do not depend on the block length or the particular summands. Constants need not reproduce Zaitsev's optimized dimension factors.

## A. Analytic cumulant calculus, including the imported §1 lemmas

Write `K(z)=log E exp(z·X)`, with `K(0)=0`, `EX=0`, covariance `D>0`, and assume `K` is analytic on the complex Euclidean ball `τ|z|<1` and

$$|\partial_u\partial_v^2 K(z)|\le \tau |u|\,v^TDv\quad(u,v\in\mathbb R^d).\tag{A1}$$

The complex norm is Hermitian; the dot product in the analytic expression is bilinear. The case `τ=0` is Gaussian: every third directional derivative vanishes, polarization makes all third derivatives zero, and integration gives `K(z)=zᵀDz/2`. In all bounds involving `1/τ` below this case is handled separately.

For fixed real `u`, polarization of the symmetric bilinear form `B(v,w)=∂u∂v∂wK(z)` gives

$$|B(v,w)|\le \tau |u|\sqrt{v^TDv}\sqrt{w^TDw}.\tag{A2}$$

Indeed, replace `v,w` by `sv,s^{-1}w` in `4B(v,w)=B(v+w,v+w)−B(v−w,v−w)` and use (A1). This gives `|B(v,w)|≤(τ|u|/2)(s²vᵀDv+s⁻²wᵀDw)`; minimize in `s>0`. The same proof works for complex-valued `B`, since only triangle inequalities were used.

For real `h` with `τ|h|<1`, integration along `sh`, `0≤s≤1`, gives

$$|(D(h)-D)[v,w]|\le \tau|h|\sqrt{v^TDv}\sqrt{w^TDw},\tag{A3}$$

where `D(h)=K''(h)`. Integrating once and twice more gives, for real `u`,

$$|u\cdot(K'(h)-Dh)|\le \tfrac12\tau|h|\sqrt{u^TDu}\sqrt{h^TDh},\tag{A4}$$

$$|K(h)-\tfrac12h^TDh|\le \tfrac16\tau|h|h^TDh.\tag{A5}$$

For imaginary `h=it`, (A5) remains valid in modulus: apply (A1) directly to the third derivative of `s↦K(ist)`, rather than substituting a complex direction into (A3). In particular

$$K(it)=-\tfrac12t^TDt+R(t),\qquad |R(t)|\le\tfrac16\tau|t|t^TDt.\tag{A6}$$

Differentiation of exponential tilts is legitimate on every smaller complex ball. For example, every polynomial factor is dominated by a finite sum of slightly stronger exponential factors: for a real scalar `y`, `|y|^m≤m!a^{-m}(e^{ay}+e^{-ay})`. Apply this coordinatewise and use the finiteness of the mgf at finitely many nearby real points. Dominated convergence then identifies `K'(h)` with the tilted mean and `K''(h)` with the tilted covariance. This also proves the identities for repeated tilting, without importing a cumulant lemma.

If `τ|h|≤1/4`, (A3) gives `3D/4≤D(h)≤5D/4`. The centered tilted cumulant is `K_h(z)=K(h+z)−K(h)−z·K'(h)`. On `2τ|z|<1`, its third derivative is bounded by `τ|u|vᵀDv≤(4τ/3)|u|vᵀD(h)v≤2τ|u|vᵀD(h)v`. Thus the centered tilt belongs to the same class with parameter `2τ`. Its covariance eigenvalues and determinant satisfy

$$\lambda_{\min}(D(h))=\lambda_{\min}(D)e^{O(\tau|h|)},\qquad \det D(h)=\det D\,e^{O(d\tau|h|)}.\tag{A7}$$

To see this directly, the symmetric matrix `D⁻½D(h)D⁻½` has every eigenvalue in `[1−a,1+a]`, `a=τ|h|≤1/4`; use `|log(1+s)|≤2|s|` and multiply eigenvalues. The eigenvalue assertion follows from the same quadratic form bounds, taking infima on the unit sphere.

The imported fourth derivative bound follows from one-variable Cauchy, with no probability theorem: for real `w≠0`, `|z|τ<1/2`, apply Cauchy to `f(ζ)=∂u∂v²K(z+ζw/|w|)` on circles of radius approaching `1/(2τ)`. Its supremum is at most `τ|u|vᵀDv`, hence

$$|\partial_w\partial_u\partial_v^2K(z)|\le2\tau^2|w||u|v^TDv.\tag{A8}$$

All uses below keep a strict interior margin; the limiting-circle argument only takes a limit of numerical upper bounds.

For the saddlepoint, put `s=D⁻½x`, `r=|s|`, `σ²=λmin(D)`, and `κ=τ/σ`. Define `L(a)=K(D⁻½a)`; its covariance at zero is `I` and its third derivative obeys (A1) with parameter `κ`. The preceding calculation gives

$$|L'(a)-a|\le\tfrac12\kappa|a|^2,\qquad\|L''(a)-I\|\le\kappa|a|.\tag{A9}$$

For `κr≤1/16`, the map `T(a)=s−(L'(a)−a)` sends the closed ball `|a|≤2r` into itself and has Lipschitz constant at most `2κr≤1/8`. Starting with `a0=0`, iterating `a_{n+1}=T(a_n)` produces a Cauchy sequence because successive distances decrease geometrically. Completeness of finite dimensional Euclidean space produces a fixed point `a`, and the same contraction inequality proves uniqueness on this ball. Thus `h=D⁻½a` has tilted mean `x`, and

$$|a|\le2r,\quad |a-s|\le2\kappa r^2,\quad \tau|h|\le2\kappa r.\tag{A10}$$

Finally (A5), `a=s+O(κr²)`, and the identity `|a|²/2−s·a=−|s|²/2+|a−s|²/2` give

$$K(h)-h\cdot x=-r^2/2+O(\kappa r^3).\tag{A11}$$

This proves the portions of imported Lemmas 1.1–1.3 needed by §§2–5, with harmless changes in numerical constants. It also proves their existence assertion, rather than assuming a global inverse for the gradient map.

## B. Smoothness contract and vector inversion

The source's actual smoothness condition, checked on the rendered p.813, is: for **every real tilt** `τ|h|<1`, write `φ_h(t)=E_h e^{it·X}` and `G_D=(2π)^{-d/2}(detD)^{-1/2}`. Its class `A_d^*(τ,δ,ρ)` requires

$$(2\pi)^{-d}\int_{\rho\tau d|t|\ge1}|\varphi_h(t)|\,dt\le (\tau^2d^2/\sigma^2)G_D,\tag{B1}$$

$$(2\pi)^{-d}\int_{\rho\tau d|t|\ge1}|t\cdot v|\,|\varphi_h(t)|\,dt\le\delta^{-1}\sqrt{v^TD^{-1}v}\,G_D\quad(v\in\mathbb R^d).\tag{B2}$$

The reference `D` here is the covariance of the **untilted** law. Centering a tilt changes its transform only by a phase. Projections need their own versions of these bounds. They do not follow by simply restricting an integral over a larger-dimensional frequency space. The smoothing author must establish (B1)–(B2) for every projection and tilt that the dyadic/conditional construction actually uses. Likewise, knowing these bounds only for `h=0` is insufficient.

Here is the vector inversion proof needed in what follows. If a probability law `μ` on `R^d` has integrable transform `φ`, define `p(x)=(2π)^{-d}∫e^{-it·x}φ(t)dt`. Absolute convergence and dominated convergence make `p` bounded continuous and real by conjugate symmetry. For any Schwartz function `f`, Schwartz inversion and absolute Fubini give `∫f dμ=∫fp dx`. If `p(x0)<0`, continuity gives a ball on which it is negative and a nonnegative smooth bump supported in that ball, contradicting this identity. Thus `p≥0`. To obtain its integral, use smooth functions `fn↑1`, `0≤fn≤1`, with compact support, for example `fn(x)=χ(|x|²/n²)` with a fixed smooth nonincreasing cutoff `χ` equal to one on `[0,1]` and zero on `[4,∞)`. Monotone convergence yields `∫p=1`. The measures then agree on every compactly supported smooth test function. For a bounded open set `U`, the continuous compactly supported functions `gm(x)=min(1,m dist(x,Uᶜ))χ(|x|²/R²)` (choose the cutoff one on `U`) increase to `1_U`; approximating each uniformly by convolution with a nonnegative smooth compactly supported approximate identity gives equality against `gm` from the test-function identity. The approximation is uniform because `gm` is uniformly continuous, and both measures are finite. Monotone convergence gives equality on bounded open sets, then on all open sets by exhaustion. A finite measure is determined by open sets: complements give closed sets, and the monotone-class theorem (or the pi-lambda uniqueness theorem on the pi-system of open sets) gives all Borel sets. Hence `μ(dx)=p(x)dx`. If `∫|t·v||φ(t)|dt<∞`, difference quotients are dominated by `|t·v||φ(t)|`, so

$$\partial_vp(x)=(2\pi)^{-d}\int -i(t\cdot v)e^{-it\cdot x}\varphi(t)\,dt.\tag{B3}$$

A bump and approximate identity used here can explicitly be made from `exp(−1/(1−|x|²))1_{|x|<1}`, normalized to integral one. Smoothness follows by differentiating on the open ball and observing that every derivative is a polynomial in `(1−|x|²)⁻¹,x` times the exponential, which tends to zero at its boundary. Thus this extension does not hide a multivariate inversion theorem.

## C. Uniform density estimates: local proofs of Lemmas 2.1 and 3.1

It is useful to state the calculation after whitening by a reference covariance `D0`, where the covariances of all laws being compared lie between `D0/2` and `2D0`. Then `Y=D0⁻½X` has covariance `A` with `I/2≤A≤2I`, its analytic parameter is at most a fixed multiple of `κ=τ/σ0`, and densities acquire the common factor `(detD0)⁻½`. Use the original frequency variable until the Fourier split; the central set is `T={|t|≤1/(2dτ)}`. Its image under `u=D0½t` contains the ball `|u|≤1/(2dκ)`. By (A6), throughout `T`,

$$|\varphi(t)|\le e^{-c t^TDt},\quad |\varphi(t)-e^{-t^TDt/2}|\le C\tau|t|(t^TDt)e^{-c t^TDt}.\tag{C1}$$

Here `c` can be chosen arbitrarily close to `1/2` if the cutoff is made a fixed amount smaller; the annulus between the smaller cutoff and `T` has Gaussian integral exponentially small in `1/κ²` and is absorbed below. The identity justifying the second bound is `e^a−e^b=(a−b)∫_0^1 e^{(1-s)b+sa}ds`; its modulus is at most `|a−b|max(e^{Rea},e^{Reb})`.

After `u=D½t`, `τ|t|≤κ|u|`, so integration of (C1) is at most `CκG_D`. Every required Gaussian polynomial integral is finite uniformly in `d≤4`: expand a polynomial in coordinates, use Tonelli, and on `|y|≥1` bound `|y|^m e^{-cy²}` by a constant times `e^{-cy²/2}` (its ratio has finite maximum by elementary differentiation); on `|y|≤1` it is bounded. Also Gaussian integrals outside `|u|≥c0/κ` are at most `C_Nκ^N`, for any fixed `N`, by extracting `e^{-c'|u|²}` and using `sup_{z>0}z^N e^{-c'z²}<∞`. This explicitly establishes the tail estimates used in this note.

Assuming an unweighted outer Fourier tail at most `CκG_D` (in particular (B1) for `κ` small), Fourier inversion therefore gives

$$\sup_x|p(x)-q_D(x)|\le C\kappa G_D.\tag{C2}$$

Assuming also a weighted tail bounded by `BG_D√(vᵀD⁻¹v)` gives

$$\sup_x|\partial_vp(x)|\le C_B G_D\sqrt{v^TD^{-1}v}.\tag{C3}$$

Indeed, integrate `|t·v|e^{-ctᵀDt}` on `T`, put `u=D½t`, and rotate the vector `D⁻½v` onto the first coordinate; its integral is a fixed Gaussian first absolute moment times `|D⁻½v|`. Add the assumed outer tail and use (B3). This proves all of Lemma 2.1 needed here.

For the paired improvement suppose the means agree, the covariances `D1,D2` are comparable to `D0`, and the cumulant differences at zero satisfy, in whitened coordinates,

$$\|A_1-A_2\|\le C e^2,\qquad |(L_1'''(0)-L_2'''(0))[u,v,v]|\le C e\kappa|u||v|^2.\tag{C4}$$

Each law separately has the third derivative bound and fourth derivative bound from A. Polarization and integration along `z=isu`, together with (A8), give

$$|L_1(iu)-L_2(iu)|\le C(e^2|u|^2+e\kappa|u|^3+\kappa^2|u|^4)\le C(e^2|u|^2+\kappa^2|u|^4).\tag{C5}$$

The linear difference vanishes by the equal-means hypothesis. To justify the fourth term explicitly, for each law the integral remainder after its cubic Taylor polynomial is `∫_0^1(1-s)^3L_k''''(isu)[u,u,u,u]ds/6`, whose modulus is at most `Cκ²|u|⁴`; subtract the two remainders. The last inequality in (C5) uses `eκ|u|³≤(e²|u|²+κ²|u|⁴)/2`. Each exponent has real part at most `−c|u|²`; the exponential identity used in (C1) and the Gaussian polynomial integrals therefore show

$$(2\pi)^{-d}\int_T|\varphi_1-\varphi_2|\,dt\le C(e^2+\kappa^2)G_{D_0}.\tag{C6}$$

If each outer Fourier tail is at most `Cκ²G_D0`, as in (B1), their sum has the same bound. Inversion proves the full paired estimate

$$\sup_x|p_1(x)-p_2(x)|\le C(e^2+\kappa^2)G_{D_0}.\tag{C7}$$

This is Lemma 3.1 with dimension factors suppressed. The fourth-order remainder is essential: using only a separate third-order error for each law loses the `κ²` rate.

## D. Nonuniform single-law estimate: local proof of Lemma 4.1

Assume (A1) and (B1)–(B2) with `δ=ρ=2`, `κ=τ/σ≤c`, and `κr≤c`, where `r=|D⁻½x|` and `c` is a sufficiently small fixed constant. Let `h` be the saddlepoint from (A10). Its mean is `x`, covariance `D_h=D(h)`, and analytic parameter at most `2τ`. These facts were proved in A.

Here are the smoothness budgets when applying C to the centered tilt. Its natural central cutoff is `1/(4dτ)`. The supplied (B1)–(B2) control the region outside `1/(2dτ)`. Between these two cutoffs, the tilted version of (A6) bounds its transform by `exp(−ctᵀD_ht)`. In whitened coordinates the inner boundary of this annulus has radius at least `c0/κ`; its unweighted and weighted integrals are therefore smaller than any fixed power of `κ`, by the explicit Gaussian tail argument in C. Outside the larger cutoff (B1) bounds the integral by `Cκ²G_D`, and (B2) bounds the weighted integral by `G_D√(vᵀD⁻¹v)/2`. Formula (A7) compares these quantities with those formed from `D_h`. Thus C applies to this tilt, including to each law of a pair with a different saddlepoint. No assertion that a whole smoothness class automatically survives tilting with identical constants is needed.

At the tilted mean, (C2) gives

$$p_h(x)=G_{D_h}(1+O(\kappa)).\tag{D1}$$

In particular this is positive, and its logarithm relative to `G_D` is `O(κ+τ|h|)=O(κ(1+r))` by (A7). The density tilt identity, proved by the defining Radon–Nikodym derivative, is

$$p(y)=p_h(y)e^{K(h)-h\cdot y}.\tag{D2}$$

The equality initially holds almost everywhere. Both sides have continuous versions by B, so it holds everywhere (a continuous function vanishing almost everywhere vanishes everywhere, since every nonempty Euclidean open ball has positive Lebesgue measure). Combining (A11), (D1), and (D2) yields the required pointwise moderate deviation estimate

$$p(x)=q_D(x)\exp\{O(\kappa(1+r^3))\}.\tag{U1a}$$

Here `q_D(x)=G_D e^{-r²/2}`. Positivity of `p` throughout the indicated region follows at the same time.

For the radial derivative, differentiate (D2) in direction `x` at `y=x`, keeping `h=h(x)` fixed while differentiating in `y`:

$$\partial_x\log p(y)|_{y=x}=\frac{\partial_xp_h(x)}{p_h(x)}-h\cdot x.\tag{D3}$$

Equations (A10), (C3), (D1), and covariance comparability give

$$\partial_x\log p(x)\le-r^2+C\kappa r^3+Cr.\tag{D4}$$

This alone gives `≤−r²/2` above some fixed radius `R0`. The source's particular radius seven is also justified with the supplied coefficient `δ=2`, as follows. On the central frequencies the integral of `|t·v|` times the Gaussian transform is exactly `√(2/π)G_Dh√(vᵀD_h⁻¹v)`, by rotation and the one dimensional integral `∫|s|e^{-s²/2}ds=2`. The corresponding integral with the actual tilted transform differs by at most `CκG_Dh√(vᵀD_h⁻¹v)`: multiply the second inequality of (C1) by `|t·v|` and use the same Gaussian polynomial integrals. The omitted Gaussian tail and annulus are negligible as above. The outer derivative tail is at most `(1/2+o(1))G_Dh√(vᵀD_h⁻¹v)` by (B2) and (A7). Make `κ` and `κr` sufficiently small, uniformly, that the combined derivative bound after division by (D1) and comparison `D_h~D` is at most `1.4√(vᵀD⁻¹v)`, and also `h·x≥.99r²` by (A10). For `v=x`, (D3) is therefore at most `1.4r−.99r²≤−r²/2` whenever `r≥7`. We obtain

$$\partial_x\log p(x)\le-\tfrac12 r^2\qquad(r\ge7,\ \kappa r\le c).\tag{U1b}$$

Every smallness condition used is a finite collection of inequalities of the form `Cκ≤ε` or `Cκr≤ε`, with fixed `C`; their conjunction is achieved by choosing one fixed positive `c`. This proves the fixed dimensional content of Lemma 4.1, including its derivative assertion.

## E. Tilted pair calculus and nonuniform paired estimate: Lemmas 1.4 and 5.1

Work first in common whitened coordinates. Let both means be zero, let `I/2≤A_k≤2I`, let each cumulant satisfy the analytic bounds with parameter at most `Cκ`, and suppose (C4) holds for some `0≤e≤c`. Put `H=L1−L2`. Fourth derivative control and integration give, for real `a` in the small analytic ball,

$$\|H''(a)\|\le C(e^2+e\kappa|a|+\kappa^2|a|^2)\le C(e+\kappa|a|)^2,\tag{E1}$$

$$|H'(a)|\le C|a|(e+\kappa|a|)^2,\qquad |H(a)|\le C|a|^2(e+\kappa|a|)^2,\tag{E2}$$

$$|H'''(a)[u,v,v]|\le C\kappa(e+\kappa|a|)|u||v|^2.\tag{E3}$$

For completeness, (E1) is the second-order Taylor formula for `H''` at zero: its initial value is `O(e²)`, its first derivative at zero is `O(eκ)` by (C4), and the difference of the fourth derivatives is `O(κ²)` by (A8) and polarization. Integrating (E1) along `sa` gives (E2), since `H'(0)=H(0)=0`. Integrating the fourth derivative once from zero gives (E3). This is exactly the mechanism behind the imported same-tilt Lemma 1.4; for a common tilt `a`, the covariance difference is bounded by (E1), and the third cumulant difference by (E3). Taking `e_a=C(e+κ|a|)` supplies its asserted paired-class parameter, up to fixed constants.

We also need different tilts, rather than merely identical tilts. Let their desired whitened means be `s1,s2`, put `R=max(|s1|,|s2|)`, `ℓ=|s1−s2|`, and assume `κR≤c`. The contraction argument of A, with `I` replaced by each `A_k`, provides unique small saddlepoints `a_k`, with `|a_k|≤CR`, `L_k'(a_k)=s_k`, and Hessians uniformly bounded above and below along their connecting segment. To obtain the distance bound without assuming an inverse estimate, integrate the Hessian:

$$[L_1'(a_1)-L_1'(a_2)]\cdot(a_1-a_2)\ge c_0|a_1-a_2|^2.$$

By the two target identities the left side is `[s1−s2−H'(a2)]·(a1−a2)`. Cauchy–Schwarz and (E2), canceling a nonzero `|a1−a2|` (the zero case is immediate), give

$$|a_1-a_2|\le C\{\ell+R(e+\kappa R)^2\}.\tag{E4}$$

Compare the two tilted covariance matrices by first comparing both at `a2` using (E1), then integrate the individual third derivative along the segment from `a2` to `a1`. This gives

$$\|L_1''(a_1)-L_2''(a_2)\|\le C\{(e+\kappa R)^2+\kappa\ell\}.\tag{E5}$$

The possible extra term `κR(e+κR)²` from (E4) is absorbed because `κR≤c`. Similarly use (E3) at `a2` and the individual fourth derivative bound along the segment to get

$$|(L_1'''(a_1)-L_2'''(a_2))[u,v,v]|\le C\kappa\{e+\kappa R+\sqrt{\kappa\ell}\}|u||v|^2.\tag{E6}$$

To check this last absorption, the extra term is `Cκ²|a1−a2|`. Dividing by `κ` leaves `Cκℓ+CκR(e+κR)²`. We have `κℓ≤2κR≤c`, hence `κℓ≤√(κℓ)`; the second term is bounded by a constant times `e+κR` after reducing `c`. Thus the centered tilted pair satisfies (C4), in a common covariance metric, with

$$e_* = C\{e+\kappa R+\sqrt{\kappa\ell}\}.\tag{E7}$$

This proves the different-target stability that the conditional argument needs. Whitening with different comparable reference matrices is optional; the common metric avoids inserting an unproved continuity estimate for a matrix square root. If one wants the source's alternative metric `|D1⁻½x1−D1⁻½x2|`, take this as `ℓ` at the start. If one instead changes the whitening matrix between targets, the difference of their coordinates must be bounded separately and included in `ℓ`.

Now take the same target `s1=s2=s`, `r=|s|`, so `ℓ=0`. The two tilted laws have the same mean, and (E7) becomes `e_*=C(e+κr)`. Suppose both raw laws have (B1)–(B2). The explicit Fourier split in D shows that their two centered tilts satisfy the tail hypotheses of (C7), each with the same common covariance normalizer up to fixed factors. Thus, at their common mean, their tilted densities `b1,b2` satisfy

$$|b_1(s)-b_2(s)|\le C\{(e+\kappa r)^2+\kappa^2\}G_{D_0}.\tag{E8}$$

Each is at least `c0G_D0` by (D1). Make `e,κ,κr` small enough that the relative error in (E8) is below `1/2`. Since `|log(1+u)|≤2|u|` for `|u|≤1/2`,

$$|\log b_1(s)-\log b_2(s)|\le C\{e^2+\kappa^2(1+r^2)\}.\tag{E9}$$

It remains to compare their exponential tilt factors; this is not implied by (E9). Put `J_k(a)=L_k(a)−a·s`. Both are convex, and their small saddlepoints are minima on the convex small ball containing both points, because their Hessians there are positive. Therefore

$$\min_{j=1,2}H(a_j)\le J_1(a_1)-J_2(a_2)\le\max_{j=1,2}H(a_j).\tag{E10}$$

Indeed, `J1(a1)≤J1(a2)` gives the upper bound `H(a2)` after subtracting `J2(a2)`, and `J2(a2)≤J2(a1)` gives the lower bound `H(a1)`. By (E2), `|a_j|≤Cr`, so

$$|J_1(a_1)-J_2(a_2)|\le Cr^2(e+\kappa r)^2\le C(e^2r^2+\kappa^2r^4).\tag{E11}$$

Apply the density identity (D2) separately to both laws. Its common linear change-of-variables Jacobian cancels in their ratio. Equations (E9) and (E11) yield

$$\boxed{\ |\log(p_1(x)/p_2(x))|\le C\{e^2(1+r^2)+\kappa^2(1+r^4)\}\ }.\tag{U2}$$

Here `r=|D0⁻½x|`, `κ=τ/σ0`, the two original covariance matrices are uniformly comparable to `D0`, `e,κ≤c`, and `κr≤c`. The source's expression `[e(√d+r)+κ(d+r²)]²` is equivalent up to fixed factors in dimensions at most four. Conversely the bound displayed in (U2) follows from that expression by `2ab≤a²+b²`, so this is the same required strength. When the original second and third cumulants match, `e=0`; after different prefix tilts (E7) gives the required nonzero parameter. Using only the matching-cumulant case of U2 would therefore leave a gap.

## F. What this closes and what it does not

The analytic proofs above supply: exponential-tilt cumulant identities; covariance/determinant comparison; fourth derivatives by Cauchy; saddlepoint existence by an explicit contraction; vector density inversion and differentiation; the one-law uniform and nonuniform density bounds and radial derivative estimate; the improved paired Fourier bound; same-tilt and different-tilt paired cumulant control; and the paired nonuniform density ratio with general `e`. These are the fixed dimensional analytic parts of the 1996 §§1–5 used by §§6–8. No unproved estimate imported there from the 1987 paper or the Saulis–Statulevičius reference is needed after replacing their use by A–E.

This does **not** prove that arbitrary bounded summands themselves have smooth densities or satisfy (B1)–(B2); lattice summands generally do not. The smoothing supplier must prove those integrals for its smoothed block laws, all required coordinate projections, and all required tilts, with constants independent of the dyadic level. The conditional author must check its exact projected centered laws against these explicit hypotheses. These are established-proof authoring obligations, not mathematical open problems. The whole KMT theorem remains unproved locally until the smoothing, conditional quantile, and dyadic construction suppliers close as well.

## G. Gaussian anchor specialization: removes the general smoothness obligation

The coordinator subsequently proposed a simpler sufficient input for this branch: every dyadic node/child is a sum of independent centered bounded vectors and centered Gaussian vectors, each with the same isotropic covariance, and a fixed positive fraction of the total covariance comes from Gaussian summands. This section proves its analytic consequences directly. It supersedes the **need** for the general smoothness supplier in F for this branch; F remains correct for arbitrary unsmoothed bounded blocks.

Suppose first that `EX=0`, `|X|≤B`, `covX=D`, with `D` possibly singular, and `B>0`. Let `M(z)=Ee^{z·X}`. If `|z|B≤b` for a fixed sufficiently small `b>0`, then `|M(z)−1|≤e^b−1≤1/2`, so `M` has no zero there and the power series for `log(1+(M−1))` defines a single analytic logarithm with value zero at zero. Differentiation under the expectation is immediate from boundedness. Since `|e^{z·X}|≤e^b`,

$$|\partial_uM|\le e^b B|u|,\quad |\partial_vM|\le e^b\sqrt{v^TDv},\quad |\partial_v^2M|\le e^b v^TDv,$$

$$|\partial_u\partial_vM|\le e^b B|u|\sqrt{v^TDv},\qquad |\partial_u\partial_v^2M|\le e^bB|u|v^TDv.$$

The first and last bounds use `|u·X|≤B|u|`; the square-root bounds use Cauchy–Schwarz and `EX=0`, so `E(v·X)²=vᵀDv`. The exact differentiated logarithm is

$$\partial_u\partial_v^2\log M=\frac{M_{uvv}}M-\frac{M_uM_{vv}+2M_vM_{uv}}{M^2}+\frac{2M_uM_v^2}{M^3}.$$

Since `|M|≥1/2`, the displayed inequalities bound its modulus by `C B|u|vᵀDv`, with an absolute fixed `C`. Choose `τ=C_1B` so large that `|z|τ<1` implies `|z|B<b`, and so `C_1≥C`. This proves (A1) with parameter `τ=C_1B`. A Gaussian summand has an entire quadratic cumulant and zero third derivative. For an independent sum the logarithms add on the common ball, and the covariance quadratic forms add, so (A1) holds with the same `τ`, using the total covariance. No exponential-moment-to-analytic-class theorem is imported.

Now let the sum `S` have covariance `D=sI_d`, and suppose its independent Gaussian summands have total covariance `G≥γsI_d`, with fixed `γ>0`. Under any real Esscher tilt `h`, independence is preserved because the multiplying exponential factors over summands and their normalizing constants multiply. Completing the square in a Gaussian density shows its tilted covariance remains `G` and only its mean changes. Every remaining tilted summand has a characteristic function of modulus at most one. Hence, for the full tilted sum and every `t`,

$$|\varphi_h(t)|\le\exp(-\gamma s|t|^2/2).\tag{G1}$$

This argument does not require the tilt itself to be small; the analytic estimates require only the smaller tilt range in A. Centering does not change the modulus. Any orthogonal projection onto `m` coordinates has covariance `sI_m` and Gaussian covariance at least `γsI_m`, so (G1) holds for **every required coordinate prefix** as well. More generally apply an orthogonal change of coordinates first. For a linear map whose singular values lie between two fixed positive constants, the same conclusion holds with adjusted fixed constants; its logarithmic cumulant bound follows by substituting the transpose of that map into the three derivative arguments.

Here is the explicit Fourier budget from (G1). Let `κ=τ/√s` and split at `|t|=a/τ`, with fixed `a>0` appropriate to C or D. Substitute `u=√s t`. For every fixed integer `N≥1`, the Gaussian tail calculation in C gives

$$(2\pi)^{-m}\int_{|t|\ge a/\tau}|\varphi_h(t)|dt\le C_{N,a,\gamma}\kappa^N s^{-m/2},\tag{G2}$$

$$(2\pi)^{-m}\int_{|t|\ge a/\tau}|t\cdot v||\varphi_h(t)|dt\le C_{N,a,\gamma}\kappa^N |v|s^{-(m+1)/2}.\tag{G3}$$

These estimates are uniform over all tilts and all prefixes of dimensions at most four. Constants comparing `s^{-m/2}` with the Gaussian peak `(2πs)^{-m/2}` are bounded uniformly in those dimensions. Taking `N=4` in (G2) makes it at most the required `O(κ²)` tail for `κ≤c`; taking `N=2` in (G3) makes its coefficient smaller than `1/2` by reducing the fixed `c`. Consequently every use of (B1)–(B2) in C–E is supplied directly by (G2)–(G3). The raw isotropic reference covariance can also be compared to the small tilted covariance by (A3), exactly as in D.

Thus Gaussian-anchored nodes and all their coordinate prefixes satisfy U1, with

$$\kappa=\frac{C_1B}{\sqrt s},\qquad r=\frac{|x|}{\sqrt s},\qquad p(x)=q_{sI}(x)\exp\!\left\{O\!\left(\frac B{\sqrt s}\left[1+\frac{|x|^3}{s^{3/2}}\right]\right)\right\},$$

and the radial derivative bound U1b in the same moderate-deviation region. This is a **single-law** comparison to the Gaussian with matching covariance. The conditional density ratio is obtained by dividing the full density by its prefix density; the conditional quantile author performs that integration. The resulting normalized transport error has order `κ(1+r²)`, hence, after rescaling the transported coordinate by `√s`, the desired order is `CB(1+|x|²/s)`. This last transport conclusion is not claimed to follow by algebra alone; it consumes the separate conditional quantile proof. In particular no additional factor `B` is introduced by any analytic step above.

A normalized joint child-sum/difference map is orthogonal: `(X,Y)↦((X+Y)/√2,(X−Y)/√2)`. If independent children each have covariance `sI` and each Gaussian covariance is at least `γsI`, the joint covariance is `sI` and the joint Gaussian covariance is at least `γsI` before and after this map. This verifies the analytic hypothesis for joint `(U,D)` nodes. An individual embedded bounded summand has norm at most `B` before and after the orthogonal map, while Gaussian summands still have zero third cumulant. Thus the same `τ=C_1B` works, with no dependence on the dyadic level.
