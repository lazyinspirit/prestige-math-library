# BCS38 finite-horizon change of drift and Euler path entropy: proof proposal

This is the original proof proposal, not an audit, acceptance, or gate receipt. Subsequently, after explicit parent permission following the successful writer drain, its proofs were authored in `items/lem-finite-horizon-girsanov-and-relative-entropy-for-lipschitz-drifts.md` and `items/lem-ula-pathwise-kl-error-bound.md`. Those current draft sources and the accompanying `research/bayesian-computational-statistics-62-owner-langevin-girsanov-proof-contracts-proposal.json` are the integration inputs. No live page, manifest, contract, readiness or dependency-level file was edited by this branch. Assumptions throughout are Full AC and the usual complete right-continuous filtered Brownian-space hypotheses inherited from the published Itô suppliers. All dimensions and horizons are finite. This note supplies the change-of-measure argument rather than invoking a missing Girsanov or Novikov theorem.

## 1. Exact existing suppliers inspected

The substantive local suppliers are:

- `thm-multidimensional-ito-formula-for-brownian-driven-processes`: published; AC and usual-filtration hypotheses; applies to locally integrable drift and locally square-integrable predictable diffusion coefficients. Applying it to `(M,A)` and `exp(M-A/2)` gives the exponential differential below; applying it to two Brownian Itô coordinates and their product gives integration by parts.
- `cor-vector-levy-characterization`: published; AC; a continuous vector local martingale starting at zero with deterministic covariation matrix `t I` is Brownian relative to the given filtration. Its proof derives independence from the filtration, not just the marginal laws.
- `thm-localized-ito-integral`, `thm-stopping-an-ito-integral`, `thm-ito-integral-process-has-a-continuous-martingale-version`, `thm-ito-isometry-and-linearity-in-predictable-l2`, `thm-doob-maximal-bound-for-the-ito-integral`: published interfaces as explicitly included in the multidimensional Itô item's Facts [F2]. A finite-energy coordinate integral is a mean-zero square-integrable martingale; each coordinate Brownian maximum has second moment at most `4T`.
- `thm-density-of-elementary-predictable-processes-in-predictable-l2`, `def-ito-integral-of-an-elementary-predictable-process`, `def-progressively-measurable-and-predictable-process`, `lem-adapted-continuous-processes-are-progressively-measurable`: the approximation, measurability and elementary-sum interfaces.
- `thm-uniform-integrability-of-conditional-expectations-of-one-variable`: published, AC, with its full tail-event proof; conditional expectations of a fixed integrable terminal variable are uniformly integrable.
- `thm-uniform-integrability-plus-probability-convergence-implies-l1-convergence`: published convergence interface.
- `lem-characteristic-exponential-for-a-continuous-local-martingale-with-clock-t`, proof step 1.2: published complete finite-grid proof that a stopped continuous true martingale is a martingale, and its stopped values are conditional expectations of its fixed terminal value. This proof uses the discrete bounded optional-sampling supplier and the preceding UI theorem. **Use this explicit continuous-time proof, not the superficially similarly named optional-stopping item without checking its time index.**
- `thm-global-strong-well-posedness-for-lipschitz-ito-sdes`: in-run draft; global strong existence, indistinguishable uniqueness, and finite second path moment under globally Lipschitz/linear-growth coefficients and square-integrable initial value. For identifying the law under a changed measure, the pathwise Picard construction must also be used to obtain uniqueness in law; the short argument is supplied in §5 below, so no Yamada–Watanabe theorem is assumed.
- `thm-conditional-jensen-inequality`: published, but formulated for finite convex functions on all of R. The entropy-specific supporting-line argument in §7 avoids silently applying that statement to `r log r` at zero or `-log r` on a half-line.
- `def-kullback-leibler-divergence`, `thm-integration-against-a-radon-nikodym-derivative`, `thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality`, and the conditional-expectation, tower, Fatou, dominated-convergence, Tonelli, and monotone-convergence suppliers provide the measure-theoretic operations below.

Thus the missing local authoring obligations are the proved statements in §§2–7. They can be grouped into (i) a finite-horizon Brownian change-of-measure lemma and (ii) an Euler interpolation entropy lemma. There is no mathematical open problem and no external theorem is needed as a logical fallback.

## 2. Positive exponentials and bounded-energy martingales

Let W be standard d-dimensional Brownian motion, let theta be predictable, and suppose

`A_t = integral_0^t |theta_s|^2 ds < infinity` almost surely for `t <= T`.

Write `M_t = sum_i integral_0^t theta_s^i dW_s^i` and `Z_t = exp(M_t - A_t/2)`. Localized multidimensional Itô gives

`Z_t = 1 + sum_i integral_0^t Z_s theta_s^i dW_s^i`.

For completeness, localize at first hits of `A`, `|M|`, and `Z` of integer levels. These are stopping times because the processes are continuous and adapted; the stopped integrand has bounded expected energy. The stopped equation is therefore a true martingale equation. These stops increase to beyond T almost surely because all relevant continuous paths and their energies are bounded on [0,T]. In particular Z is a positive continuous local martingale.

Every nonnegative continuous local martingale N is a supermartingale. Indeed conditional Fatou applied to `N_(t wedge rho_j)` gives

`E[N_t | F_s] <= liminf_j E[N_(t wedge rho_j) | F_s] = liminf_j N_(s wedge rho_j) = N_s`.

Integrability follows first by ordinary Fatou. Conditional Fatou itself follows by applying conditional monotone convergence to the increasing infima of the tails, and order; it makes no new stochastic-calculus assumption. Thus `E Z_t <= 1`. The same applies with theta replaced by any scalar multiple.

If `A_T <= n` deterministically, then for every bounded stopping time rho,

`Z_rho^2 = exp(2 M_rho - 2 A_rho) exp(A_rho)`,

so `E Z_rho^2 <= exp(n)`. Here the first factor is the stopped positive local exponential for `2 theta`, hence has mean at most one. Apply this to a localizing sequence for Z. The uniform second-moment bound gives UI of its stopped terminal values, hence `E Z_T = 1` and L1 convergence. The event tests pass to the limit at both s and t, so Z is a true martingale on [0,T]. This proves bounded-energy exponential martingality without Novikov. Moreover Z is closed by Z_T: `Z_t=E[Z_T|F_t]`.

## 3. True exponential implies Brownian change of measure

Assume now only the original local-energy hypothesis and that Z is a true martingale on [0,T]. Set `Q = Z_T P`. Since `0 < Z_T < infinity` almost surely, Q and P are equivalent. Also `Q|F_t = Z_t P|F_t`, including t=0; hence the initial distribution is unchanged. Usual filtration hypotheses persist because the measures have identical null sets. Define

`B_t = W_t - integral_0^t theta_s ds`, for `0 <= t <= T`.

We prove B is Q-Brownian, not merely assert it. Fix a coordinate i, and let sigma_r be the first hit of `|B^i|` at r, capped at T. Product Itô under P gives, with `B^{i,sigma_r}_t=B^i_(t wedge sigma_r)`,

`d(Z B^{i,sigma_r}) = Z 1_[0,sigma_r] dW^i + B^{i,sigma_r} Z theta dot dW`.

The two finite-variation terms cancel because `d[Z,W^i]=Z theta^i dt`. All displayed stochastic integrands are locally square integrable, so the product is a P-local martingale. It is a true martingale: for every stopping time rho<=T,

`|Z_rho B^{i,sigma_r}_rho| <= r Z_rho`,

and the family `Z_rho` is UI, being conditional expectations of Z_T. The latter representation at stopping times follows by rounding rho upward on finite grids, applying the elementary bounded optional-sampling identity, and using continuity and UI exactly as in the inspected characteristic-exponential lemma step 1.2. Therefore localizing the product and passing its event tests in L1 proves it true. For A in F_s,

`E_Q[1_A B^{i,sigma_r}_t] = E_P[1_A Z_t B^{i,sigma_r}_t] = E_P[1_A Z_s B^{i,sigma_r}_s] = E_Q[1_A B^{i,sigma_r}_s]`.

Thus each B coordinate is a Q-local martingale, with increasing localizers sigma_r tending to T (and beyond every smaller time). Its covariations are `delta_ij t`. To check the measure issue explicitly: convergence in P-probability implies convergence in Q-probability by absolute continuity of the integral of Z_T. Subtracting a continuous finite-variation process preserves the partition covariations: the sum of its squared increments is bounded by its largest increment times its total variation; a mixed sum with a continuous Brownian path is bounded by the Brownian path's largest increment times that variation. Both errors tend to zero pathwise. Hence the published vector Levy characterization makes B Q-Brownian relative to the same filtration.

The finite-horizon version of that supplier follows directly from its proof, since every assertion concerns finite pairs s<t. If a formal all-times statement is desired and W is defined beyond T, extend theta by zero beyond T and Z by Z_T; the same product argument works on every horizon and invokes the supplier literally. If the initial space is only finite-horizon, a product with an independent Brownian continuation gives the equivalent literal extension. No infinite-horizon equivalence claim is made.

## 4. Integral identity under the changed measure

When needed, the change-of-integrator formula is

`integral H dW = integral H dB + integral H dot theta ds`.

For an elementary predictable H this is just substitution in its finite sums. For general predictable H with locally finite energies, there is a common elementary approximation under P and Q: stop where `Z` leaves `[1/r,r]`, and where the two relevant accumulated energies exceed r, and approximate the stopped integrand in predictable L2 under the finite measure with density `(1+Z_T)/2` on Omega (times dt). Elementary predictable processes are dense by the same measure-theoretic density proof as the existing supplier; its elementary class is independent of the probability measure. The Itô isometries give convergence of the two stochastic integrals under their respective measures. Cauchy–Schwarz gives convergence of the drift integral on stopped sets where theta has bounded energy. Equivalence identifies the two probability limits. Removing the increasing stops proves the formula. This paragraph can be included as part of the new change-of-measure lemma; it must not be omitted as an assumed general semimartingale theorem.

For the actual BCS38 integrands there is an even simpler fully specialized route: all coefficients are continuous functions of the path, with only finitely many deterministic Euler-grid jumps and a possible stopping-time cutoff. Left-endpoint elementary sums on deterministic refinements converge at almost every time on every continuous bounded path. Stop on bounded path/integrand levels, apply dominated convergence in predictable L2 under each measure, and remove these stops. This proves exactly every integral identity required below without general predictable-density transfer.

## 5. Remove energy stops for the required linear-growth drifts

Let `X_0` be F_0-measurable with `E|X_0|^2 < infinity`. Fix a finite grid `0=t_0<...<t_N=T`, and let eta(t)=t_k on `[t_k,t_(k+1))`. Suppose b:R^d -> R^d is globally Lipschitz. Each of the three path drifts

`0`, `b(X_t)`, `b(X_eta(t))`

is predictable after a harmless convention at the finitely many grid points, and has the common bound

`|v_t(X)| <= K(1+sup_(u<=t)|X_u|)`

for some finite K. Consider any base/target pair a,c among these drifts, with the base equation

`dX_t = a_t(X) dt + sqrt(2) dW_t`.

The Brownian and Euler base solutions are explicit; the diffusion base solution is supplied by local SDE well-posedness. Each has finite second path moment. Put `theta_t=(c_t(X)-a_t(X))/sqrt(2)`, `A_t=integral|theta|^2`, and `tau_n=inf{t:A_t>=n} wedge T`. Pathwise continuity/boundedness of X gives `A_T<infinity`. By §2 the stopped exponential `Z^n=exp(M_(. wedge tau_n)-A_(. wedge tau_n)/2)` is a true martingale. By §3, under `Q_n=Z^n_T P`,

`B^n_t=W_t-integral_0^(t wedge tau_n) theta_s ds`

is Brownian and the SAME X satisfies

`dX_t = [1_[0,tau_n](t)c_t(X)+1_(tau_n,T](t)a_t(X)]dt + sqrt(2)dB^n_t`.

Values at the switching instant have no effect on either integral. Its drift is bounded by the same K path-growth bound, uniformly in n. Write `q_n(t)=E_Qn sup_(u<=t)|X_u|^2`. One must not initially assume q_n finite: first stop X on leaving balls, apply the calculation below to that stopped equation, and pass by Fatou. The initial law is unchanged by the density martingale. Cauchy–Schwarz, `(x+y+z)^2<=3(x^2+y^2+z^2)`, and the coordinate Brownian Doob bounds give

`q_n(t) <= 3 E|X_0|^2 +24dT +6K^2 T integral_0^t (1+q_n(s))ds`.

For the initial ball stop at zero on `{|X_0|>=R}`, its stopped path value is X_0; this retains the integrable initial term and creates no bounded-initial-value assumption. The ordinary integrating-factor proof of Gronwall gives, uniformly in n,

`q_n(T) <= C_T := (1+3E|X_0|^2+24dT) exp(6K^2T^2)-1`.

Indeed apply the inequality first to each ball-stopped path, where the drift integral before that stop is bounded by the corresponding stopped path supremum, then let R grow. Also

`|theta_t|^2 <= |c_t|^2+|a_t|^2 <=4K^2(1+sup_(u<=t)|X_u|^2)`.

By §4 and finite stopped energy,

`log Z^n_T = integral_0^(T wedge tau_n) theta_s dot dB^n_s + (1/2) A_(T wedge tau_n)`.

The integral has Q_n-mean zero by the Itô isometry. Consequently

`E_P[Z^n_T log Z^n_T] = (1/2) E_Qn A_(T wedge tau_n) <=2K^2 T(1+C_T)`.

This is an entropy bound under the stopped TARGET measure. A mere base-measure energy bound would not suffice for this step. Since `z log z >= -1/e`, for R>1,

`E_P[Z^n_T 1_{Z^n_T>R}] <= (2K^2T(1+C_T)+1/e)/log R`.

Thus the terminal stopped exponentials are UI. Since A_T is finite, `tau_n=T` for all sufficiently large n on each path, so `Z^n_T -> Z_T` almost surely. UI gives L1 convergence and `E Z_T=1`. The positive-local-supermartingale argument then gives `E Z_t=1` at every t<=T and hence true martingality: the nonnegative conditional supermartingale deficit has mean zero. We may apply §3 without stops. This proves equivalence and change of drift for each of the required base/target pairs, with no Novikov or Beneš theorem cited.

Identification of the target path law needs no unstated weak-uniqueness theorem. Brownian target is explicit. Euler target is obtained by the finite recursion on each mesh interval and hence is the same measurable function of `(X_0,B)` on every probability space. For target b(X_t), use the additive-noise Picard recursion `X^(m+1)=X_0+integral b(X^m)dt+sqrt(2) B`. Every iterate is a Borel function of `(X_0,B)` in continuous path space: ordinary Riemann sums uniformly approximate its integral for continuous paths and b. The factorial Picard bounds in the existing strong well-posedness proof show convergence in probability in path space and almost surely along a subsequence. Its pathwise limit is a fixed Borel function after assigning zero on the Borel nonconvergence set. The deterministic integrating-factor Lipschitz argument makes every solution equal that limit. Finally B is Brownian relative to the filtration, so is independent of F_0 and X_0, with the same Wiener law under the changed measure. Thus the law of `(X_0,B)` and hence the target solution law is uniquely determined. This supplies the small law-identification extension of the existing strong-solution interface.

## 6. Euler-versus-diffusion path entropy, correct direction and constant

Take `b=-g`, where `g=gradient U` is globally L-Lipschitz. Let P_E denote the law of the continuous Euler interpolation on `C([0,T],R^d)` starting with a square-integrable law nu, and P_D the law of the Langevin diffusion with the SAME nu. Work first on the Euler probability space,

`X_t = X_(t_k) -(t-t_k) g(X_(t_k)) + sqrt(2)(W_t-W_(t_k))`, for `t_k<=t<=t_(k+1)`.

Set

`theta_t = [g(X_eta(t))-g(X_t)]/sqrt(2)`.

Section 5 proves that `Z_T=exp(integral theta dW - integral|theta|^2/2)` is a true density and Q=Z_T P makes X solve the diffusion. In particular Q's path pushforward is P_D and P's is P_E.

Finite Euler gradient moments give finite base energy. More explicitly, if `h=t-t_k`, the centered Brownian increment is independent of F_(t_k), so the mixed term has expectation zero and

`E_P |X_t-X_(t_k)|^2 = h^2 E_P|g(X_(t_k))|^2 +2dh`.

By Lipschitz continuity,

`E_P A_T = (1/2)E_P integral_0^T|g(X_t)-g(X_eta(t))|^2dt`

`<= (L^2/2) sum_(k=0)^(N-1) [ (gamma_(k+1)^3/3) E_P|g(X_(t_k))|^2 + d gamma_(k+1)^2 ]`,

where `gamma_(k+1)=t_(k+1)-t_k`. The Itô integral `integral theta dW` has mean zero and is integrable by its finite L2 energy. Since `dQ/dP=Z_T`,

`D(P||Q) = E_P[-log Z_T] = (1/2) E_P A_T`.

This is an exact entropy identity on the supporting probability space. In this particular setting it is also the exact path-law identity. Indeed

`W_t = [X_t-X_0+integral_0^t g(X_eta(s))ds]/sqrt(2)`

is a Borel functional of the Euler path. Deterministic left-endpoint sums refining the finite Euler grid approximate `integral theta dW` in L2(P): theta is continuous on each open mesh interval, and its squared staircase errors are dominated by a constant times `1+sup|X|^2`, which is integrable under the Euler law. Therefore an almost surely convergent subsequence of these sums is a Borel functional of X; assigning zero when it fails to converge gives a Borel representative. A_T is also a Borel path functional. Hence `Z_T=z(X)` for a positive Borel z almost surely, and pushforward integration gives `dP_D/dP_E=z`. Equivalence and the same identity yield

`D(P_E||P_D) = (1/4) E_E integral_0^T |g(X_t)-g(X_eta(t))|^2dt`

`<= (L^2/4) sum_(k=0)^(N-1) [ (gamma_(k+1)^3/3) E_E|g(X_(t_k))|^2 + d gamma_(k+1)^2 ]`.

The direction here is **Euler relative to diffusion**. Replacing it by diffusion relative to Euler while retaining Euler expectations is invalid. No convexity or invariant-law assumption is used. The square-integrable starting law suffices for all required finite Euler gradient moments under global Lipschitz g; if finite gradient moments are separately stated, they directly justify the energy calculation.

## 7. Endpoint data processing with a complete half-line convexity argument

If P<<Q and `r=dP/dQ`, and F is any measurable statistic, let G=sigma(F). The density of the pushed-forward P with respect to pushed-forward Q is represented by `E_Q[r|G]`; this follows directly by testing events of the form `{F in C}` and the Radon–Nikodym integral identity. Equivalently one may take the density on the target space first, then pull it back; uniqueness identifies it with that conditional expectation and avoids assuming a general factorization theorem.

For `phi(x)=x log x`, `phi(0)=0`, and x>=0, the tangent lines

`ell_a(x)=(1+log a)x-a`, for positive rational a,

satisfy `phi(x)=sup_(a in positive rationals) ell_a(x)`, also at x=0 by a decreasing rational sequence. If `E_Q phi(r)<infinity`, phi(r) is integrable because its negative part is bounded by 1/e. Conditional order and linearity imply `ell_a(E[r|G]) <= E[phi(r)|G]` for each rational a. Intersect the countably many full events and take the supremum. The same lower bound -1/e guarantees integrability on the left. Taking expectations proves

`D(F#P||F#Q) <= D(P||Q)`.

If the right side is infinite the claim is immediate in the extended order, so all cases are covered. Applying F to terminal evaluation gives the same upper bound for the Euler endpoint relative to the diffusion endpoint. This proof does not apply the existing finite-on-R Jensen theorem outside its contract.

## 8. Specialized Brownian-to-gradient interface for transition densities

For deterministic x, let `X_t=x+sqrt(2)W_t`, `theta_t=-g(X_t)/sqrt(2)` and `U in C^2`. Assume U>=0 and `Delta U<=dL`. Itô gives exactly

`Z_t = exp( (U(x)-U(X_t))/2 + integral_0^t [Delta U(X_s)/2 - |g(X_s)|^2/4]ds )`.

Thus for t<=T, `0<Z_t<=exp(U(x)/2+dLT/2)` deterministically. Localize the exponential equation as in §2. The stopped values have the same deterministic bound (evaluate the preceding identity at the stopped time), so dominated convergence passes martingale event tests and proves true martingality directly. Section 3 then says that under `Z_T P`, X solves `dX=-g(X)dt+sqrt(2)dB`. This is sufficient for the parent's Brownian-bridge transition-density argument; no generic exponential-integrability assertion is required. If U is shifted by a constant, g and Z are unchanged, and a finite lower bound on U suffices after shifting.

The gradient diffusion has a unique law by §5. The bridge conditioning, continuity and positivity of its endpoint density remain a separate proof obligation of that argument; this note does not claim to have supplied them.

## 9. Source consultation and cautions

Read the complete theorem/proof text in van der Vaart, *Martingales, Diffusions and Financial Mathematics*, §6.3 Theorem 6.9 and §6.4 Lemma 6.13, Theorem 6.14 and Corollaries 6.16–6.17 (printed pp.125–132). Full PDF downloaded to `/tmp/bcs38-vdv-stochint.pdf`; extracted text `/tmp/bcs38-vdv-stochint.txt`. URL: https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf . Its general semimartingale Girsanov proof supplies source provenance, while the Brownian-product proof above supplies the local logical argument. The source's full Novikov proof uses a time-change theorem and Brownian hitting distributions; those are deliberately unnecessary because §2 proves the needed bounded-energy special case and §5 supplies its own entropy/UI passage.

Inspected Durmus–Moulines v3 full-text excerpt surrounding equations (12)–(15), in the full download `/tmp/bcs38-durmus-clean.txt`, lines 625–685. Equation (15) prints diffusion-relative-to-Euler but integrates under Euler; the latter gives the reverse entropy as in §6. In the extracted equation (14), the line-integral sign also appears reversed: with `dP_D/dP_E` the correct path-coordinate expression is

`log(dP_D/dP_E)(X) = (1/2) integral [g(X_eta)-g(X)] dot dX -(1/4) integral [|g(X)|^2-|g(X_eta)|^2]dt`.

The Brownian exponential in §6 is the primary definition and fixes the sign unambiguously. One should verify the rendered source formula before recording a source-error claim, since extraction or markup could affect appearance; neither source formula is copied as a logical premise here.
