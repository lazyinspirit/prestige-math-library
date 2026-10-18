# Berry–Esseen proof development for r3

Supplement to the channel-capacity handoff. The complete source read for this note is Roman Vershynin, *Two Friendly Proofs of the Berry–Esseen Theorem*, arXiv:2602.06234v2 (30 July 2026), 17 pages. The entire v2, pp. 1–17, was extracted and read consecutively, including both the Fourier proof (Part I, §§1–5) and the independent Stein proof (Part II, §§6–11), acknowledgements, and references. The arXiv page identifies the version and author and assigns CC BY 4.0. The local PDF/text carriers, hash, extraction method, and read extent are recorded as a new supplement entry in the r3 source manifest and reading ledger. PDF pp. 8–9 were rendered to check the ρ notation and Fourier cutoff against the extracted text.

The argument below develops the Fourier proof locally. It gives a finite-third-moment quantitative supplier, unlike the published CLT items, which only yield convergence or a second-order little-o expansion. The library’s existing Fourier inversion and normal-law items carry choice assumptions; the current supplier contract therefore has to state those assumptions if this route is used. The Berry–Esseen inequality itself is classically valid without choice. Part II of the read source supplies an alternative Stein proof if the category needs a route with a different foundational dependency closure.

## The exact statement

First prove the independent-sum normalization. Let \(X_1,\ldots,X_n\) be independent real random variables with

\[
\mathbb E X_k=0,\qquad \mathbb E X_k^2=\sigma_k^2<\infty,
\qquad \rho_k^3:=\mathbb E|X_k|^3<\infty,
\qquad \sum_{k=1}^n\sigma_k^2=1.
\]

Write \(S_n=\sum_{k=1}^nX_k\), \(\rho^3=\sum_k\rho_k^3\), and let \(G\sim N(0,1)\). There is a universal finite constant \(C_{BE}\) such that, for every integer \(n\ge1\),

\[
\sup_{a\in\mathbb R}\left|\mathbb P\{S_n\le a\}-\Phi(a)\right|\le C_{BE}\rho^3.
\tag{BE-array}
\]

Consequently, for iid real \(X_1,X_2,\ldots\) with mean \(\mu\), variance \(0<\sigma^2<\infty\), and centered third absolute moment \(\beta_3=\mathbb E|X_1-\mu|^3<\infty\),

\[
\sup_{x\in\mathbb R}\left|\mathbb P\!\left\{\frac{\sum_{k=1}^nX_k-n\mu}{\sigma\sqrt n}\le x\right\}-\Phi(x)\right|
\le \frac{C_{BE}\,\beta_3}{\sigma^3\sqrt n},\qquad n\ge1.
\tag{BE-iid}
\]

No lattice, density, nonarithmetic, or identical-distribution condition is needed for (BE-array); iid is needed only for the displayed simplification of its Lyapunov fraction. Finite \(\beta_3\) and positive variance are the exact hypotheses for (BE-iid). If \(\sigma^2=0\), then \(X_1=\mu\) almost surely and the standardization in (BE-iid) is undefined; state the degenerate sum separately instead of dividing by \(\sigma\). The constant \(C_{BE}\) is universal and is not claimed optimal.

For the iid reduction put \(Z_k=(X_k-\mu)/(\sigma\sqrt n)\). Then the \(Z_k\) are independent and centered, \(\sum_k\mathbb E Z_k^2=1\), and

\[
\sum_k\mathbb E|Z_k|^3
=n\frac{\beta_3}{\sigma^3n^{3/2}}
=\frac{\beta_3}{\sigma^3\sqrt n}.
\]

Apply (BE-array) to \(Z_1,\ldots,Z_n\).

## Fourier smoothing kernel and CDF inequality

Use the Fourier convention \(\widehat f(u)=\int_{\mathbb R}e^{-2\pi iux}f(x)\,dx\). Choose a nonzero, nonnegative, even \(\psi\in C_c^\infty(\mathbb R)\) with \(\operatorname{supp}\psi\subseteq[-1/(4\pi),1/(4\pi)]\), and set \(\eta=\widehat\psi\), \(Z_0=\int\eta(x)^2\,dx\), and \(\kappa=\eta^2/Z_0\). One explicit such bump is \(\psi(x)=\exp[-1/(1-(4\pi x)^2)]\) for \(|x|<1/(4\pi)\) and zero otherwise; repeated differentiation gives a polynomial in the reciprocal distance times an exponentially decaying factor at each endpoint, so every derivative extends by zero. Because \(\psi\) is even and real, \(\eta\) is real and even. It is Schwartz and \(\eta(0)=\int\psi>0\), so \(0<Z_0<\infty\). Therefore \(\kappa\) is an even nonnegative Schwartz probability density. The Schwartz product/convolution law gives \(\widehat\kappa=Z_0^{-1}(\psi*\psi)\), hence \(\operatorname{supp}\widehat\kappa\subseteq[-1/(2\pi),1/(2\pi)]\); also \(|\widehat\kappa|\le\|\kappa\|_1=1\). Define the finite kernel constant \(b=\int |x|\kappa(x)\,dx\).

For random variables \(X,Y\), suppose \(Y\) has a density bounded by \(M\), where \(0<M<\infty\). Let

\[
h=\mathbf 1_{(-\infty,0]}*\kappa,
\qquad S_\varepsilon=\sup_{a\in\mathbb R}\left|\mathbb E h\!\left(\frac{X-a}{\varepsilon}\right)-\mathbb E h\!\left(\frac{Y-a}{\varepsilon}\right)\right|.
\]

The required local smoothing statement is

\[
\sup_a|F_X(a)-F_Y(a)|\le 2S_\varepsilon+18bM\varepsilon.
\tag{S}
\]

Here is a proof with the jump and tail steps explicit. First take \(\varepsilon=1\). Let \(\Delta=F_X-F_Y\) and \(D=\sup|\Delta|\). If \(D=0\), the claim is immediate. If \(\Delta\) is positive at a point \(a\) with value at least \(0.9D\), then for \(0\le t\le D/(3M)\), monotonicity of \(F_X\) and the density bound on \(F_Y\) give

\[
\Delta(a+t)\ge\Delta(a)-Mt\ge0.9D-D/3>D/2.
\]

If instead \(\Delta(a)\le-0.9D\), then for \(0\le t\le D/(3M)\), monotonicity of \(F_X\) to the left and the same Lipschitz bound give

\[
\Delta(a-t)\le\Delta(a)+Mt\le-0.9D+D/3<-D/2.
\]

At least one of these two signed suprema equals \(D\), and the definition of supremum gives an appropriate point \(a\). In either case, centering the resulting one-sided interval gives a symmetric interval \([a_0-T,a_0+T]\) of radius \(T=D/(6M)\) on which \(\Delta\) has constant sign and magnitude at least \(D/2\). By Tonelli on the nonnegative indicator convolution,

\[
\Delta_\kappa(a_0):=\mathbb E h(X-a_0)-\mathbb E h(Y-a_0)
=\int\Delta(a_0+y)\kappa(y)\,dy.
\]

Since \(\kappa\) is a probability density and \(\int_{|y|>T}\kappa(y)\,dy\le b/T\), the plateau part has the plateau sign and the tail contributes at worst \(-D\) in that sign. Thus

\[
|\Delta_\kappa(a_0)|
\ge \frac D2\left(1-\frac bT\right)-D\frac bT
=\frac D2-\frac{3Db}{2T}
=\frac D2-9bM.
\]

It follows that \(D\le2\sup_a|\Delta_\kappa(a)|+18bM\). For general \(\varepsilon>0\), apply this result to \(X/\varepsilon,Y/\varepsilon\); the CDF discrepancy is unchanged, \(Y/\varepsilon\) has density bound \(\varepsilon M\), and the smoothed term is exactly \(S_\varepsilon\). This proves (S). The proof covers atoms of \(X\); it uses only the bounded density of \(Y\).

Now prove the Fourier bound for the smoothed term. For \(R>0\), set

\[
h_R=\mathbf1_{(-R,0]}*\kappa.
\]

For each derivative order \(j\), \(h_R^{(j)}(x)=\int_{-R}^0\kappa^{(j)}(x-y)\,dy\). Since \(y\) ranges over a bounded interval and \(\kappa\) is Schwartz, every derivative of \(h_R\) decays faster than any power; hence \(h_R\in\mathcal S\). Fubini is justified by

\[
\int_{\mathbb R}\int_{-R}^0|\kappa(x-y)|\,dy\,dx=R\|\kappa\|_1=R.
\]

It gives \(\widehat h_R=\widehat{\mathbf1_{(-R,0]}}\widehat\kappa\). For \(u\ne0\),

\[
\left|\widehat{\mathbf1_{(-R,0]}}(u)\right|
=\left|\frac{e^{2\pi iuR}-1}{2\pi iu}\right|
\le\frac1{\pi|u|};
\]

the support of \(\widehat h_R\) is contained in \([-1/(2\pi),1/(2\pi)]\). Fourier inversion on Schwartz space and Fubini against the finite laws of \(X,Y\) therefore yield

\[
\left|\mathbb E h_R\!\left(\frac{X-a}{\varepsilon}\right)-\mathbb E h_R\!\left(\frac{Y-a}{\varepsilon}\right)\right|
\le\frac1\pi\int_{-1/\varepsilon}^{1/\varepsilon}
\frac{|\varphi_X(t)-\varphi_Y(t)|}{|t|}\,dt,
\tag{F}
\]

where \(\varphi_X(t)=\mathbb E e^{itX}\); the integrand at \(t=0\) may be assigned any value because that single point does not affect the Lebesgue integral. To see the constant and range, inversion first gives an integral in \(u\) with \(|\widehat h_R(u)|\le1/(\pi|u|)\), then substitute \(t=2\pi u/\varepsilon\). The factor is \(1/\pi\), and \([-1/\varepsilon,1/\varepsilon]\) is the transformed support. As \(R\uparrow\infty\), \(h_R\uparrow h\) pointwise with \(0\le h_R\le1\); monotone convergence under each probability law passes (F) to \(h\). Thus (F) bounds \(S_\varepsilon\). If the right side is infinite the inequality is vacuous; in the application below it is finite by the characteristic-function estimate.

Combining (S) and (F) gives the local Esseen inequality

\[
\sup_a|F_X(a)-F_Y(a)|
\le\frac2\pi\int_{-1/\varepsilon}^{1/\varepsilon}
\frac{|\varphi_X(t)-\varphi_Y(t)|}{|t|}\,dt+18bM\varepsilon.
\tag{E}
\]

No unsmoothed inversion of a discontinuous CDF is used.

## Finite-third-moment characteristic-function estimate

The central estimate is for the independent array in (BE-array). Put \(r_k=(\mathbb E|X_k|^3)^{1/3}\), so \(r_k^3=\rho_k^3\), and \(r=(\sum_k r_k^3)^{1/3}=\rho\). The published finite-measure Lp inclusion on the law of \(X_k\) gives \(\sigma_k=(\mathbb E|X_k|^2)^{1/2}\le(\mathbb E|X_k|^3)^{1/3}=r_k\). For each real \(u\), three applications of the fundamental theorem of calculus to \(s\mapsto e^{isu}\) give

\[
e^{iu}=1+iu-\frac{u^2}{2}+\frac{(iu)^3}{2}\int_0^1(1-s)^2e^{isu}\,ds.
\]

The last term has modulus at most \(|u|^3/6\), since \(|e^{isu}|=1\) and \(\int_0^1(1-s)^2ds=1/3\). Taking expectation with \(u=tX_k\) is legitimate because \(\mathbb E|X_k|^3<\infty\); the mean-zero and variance assumptions then give

\[
\varphi_k(t)=1-\frac{\sigma_k^2t^2}{2}+R_k(t),
\qquad |R_k(t)|\le\frac{r_k^3|t|^3}{6}.
\tag{T}
\]

If \(r_k=0\), then \(\mathbb E|X_k|^3=0\), so the published zero-integral criterion gives \(X_k=0\) almost surely and its factor is identically one. Otherwise, for \(|t|\le1/r_k\), write \(a=\sigma_k^2t^2\), \(q=r_k^3|t|^3\), and \(z=\varphi_k(t)-1=-a/2+R_k(t)\). Then \(0\le a,q\le1\), \(a^2\le q\), and \(|z|\le1/2+1/6=2/3\). Define \(L(z)=\sum_{m=1}^\infty(-1)^{m+1}z^m/m\) on \(|z|<1\). Uniform absolute convergence on \(|z|\le2/3\) permits termwise differentiation there, giving \(L'(z)=1/(1+z)\). The derivative of \(e^{L(z)}/(1+z)\) is therefore zero, and its value at \(z=0\) is one; thus \(e^{L(z)}=1+z=\varphi_k(t)\), which fixes the logarithm branch. Its series also gives explicitly
\[
|\log(1+z)-z|
\le\sum_{m=2}^\infty\frac{|z|^m}{m}
\le\frac{|z|^2}{2(1-|z|)}
\le\frac32|z|^2.
\]
Since \(|z|\le a/2+q/6\), we have \(|z|^2\le2(a^2/4+q^2/36)\le5q/9\). Also \(aq\le q\) and \(q^2\le q\); equation (T) then implies

\[
\log\varphi_k(t)=-\frac{\sigma_k^2t^2}{2}+O(r_k^3|t|^3),
\qquad |t|\le1/r_k,
\tag{L}
\]

with one universal O-constant. In particular, for \(|t|\le1/r\) every factor satisfies (L), and independence gives

\[
\varphi_{S_n}(t)=\exp\!\left(-\frac{t^2}{2}+\Theta(t)\rho^3|t|^3\right),
\qquad |\Theta(t)|\le C_0.
\tag{P}
\]

Also, for every real \(t\),

\[
|\varphi_{S_n}(t)|\le\exp\!\left(-\frac{t^2}{2}+C_0\rho^3|t|^3\right).
\tag{A}
\]

For a factor with \(|t|\le1/r_k\), (A) follows from (L). If \(|t|>1/r_k\), use \(|\varphi_k(t)|\le1\), while \(\sigma_k^2t^2\le r_k^2t^2<r_k^3|t|^3\); increasing \(C_0\) makes the factorwise right-hand side at least one. Multiply these inequalities, using \(\prod_k|\varphi_k|\le\exp\sum_k(-\sigma_k^2t^2/2+C_0r_k^3|t|^3)\), to obtain (A).

Choose a fixed \(c_0>0\) so small that \(C_0c_0\le1/4\). If \(|t|\le c_0/\rho^3\), then \(C_0\rho^3|t|^3\le t^2/4\). In the subrange \(|t|\le1/\rho\), combine (P) with \(|e^z-1|\le|z|e^{|z|}\) to get

\[
|\varphi_{S_n}(t)-e^{-t^2/2}|
\le C_1\rho^3|t|^3e^{-t^2/4}.
\]

In the remaining subrange \(1/\rho<|t|\le c_0/\rho^3\), (A) and the Gaussian term are each at most \(e^{-t^2/4}\), and \(\rho^3|t|^3>1\); the same inequality follows after increasing \(C_1\). If that subrange is empty, the first case already covers the whole interval. Hence

\[
|\varphi_{S_n}(t)-e^{-t^2/2}|
\le C_1\rho^3|t|^3e^{-t^2/4},
\qquad |t|\le c_0/\rho^3.
\tag{CF}
\]

All constants here are absolute. This third-order estimate is stronger than the existing library’s second-order statement \(\varphi_X(t)=1-\sigma^2t^2/2+o(t^2)\): the uniform \(O(\mathbb E|X|^3|t|^3)\) term and the damping in (CF) are new proof obligations.

## Finish the theorem

Apply (E) with \(X=S_n\), \(Y=G\sim N(0,1)\), density bound \(M=(2\pi)^{-1/2}\), and \(\varepsilon=\rho^3/c_0\). Then the integration interval is \([-c_0/\rho^3,c_0/\rho^3]\), and (CF) gives

\[
\begin{aligned}
\sup_a|F_{S_n}(a)-\Phi(a)|
&\le \frac{2C_1}{\pi}\rho^3\int_{\mathbb R}t^2e^{-t^2/4}\,dt
+\frac{18b}{c_0\sqrt{2\pi}}\rho^3\\
&=:C_{BE}\rho^3.
\end{aligned}
\]

The Gaussian integral in the first term is finite, and all other factors are fixed kernel or numerical constants. This proves (BE-array) for every \(n\), including \(n=1\). No asymptotic limit in \(n\) is used.

## Existing library supplier map and exact gaps

The following live page/item interfaces were inspected; all listed pages currently have status published.

| Existing page and item IDs | Supplies to this proof | Exact boundary |
|---|---|---|
| [probability/characteristic-functions-inversion-and-continuity.md](../../../../library/probability/characteristic-functions-inversion-and-continuity.md): def-characteristic-function-of-a-real-random-variable, lem-basic-properties-of-characteristic-functions, lem-characteristic-functions-under-affine-maps-and-independent-sums, lem-moments-give-derivatives-of-the-characteristic-function | Definition \(\varphi_X(t)=\mathbb E e^{itX}\); \(|\varphi_X|\le1\); factorization for finite independent sums; moment differentiability when the relevant absolute moment exists. | No finite-third-moment \(O(|t|^3)\) remainder or normal-distance bound. The derivative lemma is not a substitute for the Taylor/log estimate (T)–(CF). |
| [real-analysis/darboux-lhopital-and-taylor.md](../../../../library/real-analysis/darboux-lhopital-and-taylor.md): cor-taylor-remainder-bound | A uniform derivative bound gives the scalar Taylor remainder bound, usable on the real and imaginary parts of the exponential. | The complex modulus estimate in (T) is justified by the explicit integral remainder in the local proof, not by silently treating a complex-valued function as a real theorem. |
| [functional-analysis/schwartz-space-and-the-plancherel-theorem.md](../../../../library/functional-analysis/schwartz-space-and-the-plancherel-theorem.md): thm-fourier-transform-maps-schwartz-space-continuously-to-itself, thm-fourier-inversion-on-schwartz-space, cor-schwartz-convolution-and-product-transform-laws, lem-schwartz-functions-and-all-derivatives-are-integrable | Schwartz decay, inversion, product/convolution transform laws, and integrability of \(\kappa\) and its derivatives. | Plancherel is not needed for this kernel normalization. The cited Fourier/inversion/convolution chain assumes countable choice. Our local proof of \(1_{(-R,0]}*\kappa\) being Schwartz and its mixed Fubini product identity is needed because the indicator is compactly supported L1 but is not itself Schwartz. |
| [items/thm-l-one-fourier-inversion.md](../../../../items/thm-l-one-fourier-inversion.md): thm-l-one-fourier-inversion (published) | An alternate inversion route for L1 functions with L1 transforms at every Lebesgue point. | It also assumes countable choice; using it does not remove the foundational premise. |
| [probability/central-limit-theorems.md](../../../../library/probability/central-limit-theorems.md): lem-characteristic-function-of-a-normal-law, lem-second-order-characteristic-function-expansion, lem-product-of-near-one-characteristic-factors, thm-lindeberg-levy-iid-central-limit-theorem | Characteristic function of the standard normal; finite-variance second-order little-o expansion; a triangular-array product limit; qualitative iid CLT. | The CLT page explicitly asserts no quantitative approximation rate. The little-o expansion has no third absolute moment constant, and the near-one product lemma does not alone yield Gaussian damping. The new proof (T)–(CF) remains necessary. |
| [probability/weak-convergence-tightness-and-representation.md](../../../../library/probability/weak-convergence-tightness-and-representation.md): def-standard-normal-and-normal-laws, lem-normal-density-has-total-mass-one | Defines the standard normal reference law through its Gaussian density and supplies its total-mass-one normalization; the density is bounded by \((2\pi)^{-1/2}\). | These current carriers assume AC. Carry that premise if these existing items are used; the numerical inequality does not intrinsically require it. |
| [measure-theory/the-lp-spaces-holder-minkowski-and-riesz-fischer.md](../../../../library/measure-theory/the-lp-spaces-holder-minkowski-and-riesz-fischer.md): thm-finite-measure-l-r-includes-into-l-p-for-p-less-r | On a probability space, \(L^3\subset L^2\) with \(\|X\|_2\le\|X\|_3\), giving \(\sigma_k\le r_k\). | Apply with the law of \(X_k\), total mass one, and exponents 2 and 3. |
| [probability/central-limit-theorems.md](../../../../library/probability/central-limit-theorems.md): lem-characteristic-function-of-a-normal-law | Identifies \(\varphi_G(t)=e^{-t^2/2}\) for \(G\sim N(0,1)\). | Its current carrier assumes AC; the Fourier route’s dependency closure must retain that premise. |
| [measure-theory/product-measures-and-the-fubini-tonelli-theorems.md](../../../../library/measure-theory/product-measures-and-the-fubini-tonelli-theorems.md): thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces | Interchange the nonnegative indicator/kernel integrals and the absolutely integrable Fourier double integral. | Verify the displayed absolute-integral bound before every Fubini use; Tonelli handles only the nonnegative convolution calculations. |
| [measure-theory/the-lebesgue-integral-and-the-convergence-theorems.md](../../../../library/measure-theory/the-lebesgue-integral-and-the-convergence-theorems.md): thm-monotone-convergence-for-the-integral, thm-dominated-convergence, thm-integral-triangle-inequality, thm-nonnegative-integral-zero-iff-zero-almost-everywhere | Let \(R\uparrow\infty\) in \(h_R\), justify integral limits/bounds, and handle the zero-third-moment summand. | The sequence \(R=1,2,\ldots\) is explicit; do not claim pointwise convergence alone permits expectation limits. |

The new proof dependencies are therefore substantive: (i) a band-limited nonnegative smoothing density and its finite first moment; (ii) a CDF discrepancy plateau argument that handles both signs and atoms; (iii) a Fourier bound for the smoothed discrepancy with the exact support cutoff; (iv) a logarithmic third-order characteristic-function expansion and all-frequency modulus bound; and (v) integration of the damped difference. None is supplied by the existing CLT item. The Fourier route, as stated against the current library, must carry at least the countable-choice assumption of the Schwartz Fourier theorems and the Axiom-of-Choice premise of the current standard-normal-law definition. If that extra foundational assumption is unwelcome, the same completely read source’s Part II proves Berry–Esseen via a ramp smoother, Stein ODE, derivative-increment estimate, and induction; it avoids Fourier inversion but still requires the normal-law construction assumptions in this library. Do not hide the supplier contract or claim the new lemma has been published.

## Finite-blocklength interface

The immediate coding use is a normalized iid information-density sum with positive finite variance and finite centered third absolute moment. Berry–Esseen yields a uniform CDF error \(O(n^{-1/2})\), which is what is missing from the published CLT supplier. To turn this into the \(O(\log n)\) coding remainder, the coding proof must still track the one-shot threshold/beta/DT bound and the fixed-\(\varepsilon\) quantile perturbation (for \(\varepsilon\) in a compact subset of \((0,1)\), \(\Phi^{-1}\) is locally Lipschitz); Berry–Esseen alone does not prove a channel-coding normal approximation. In particular, use the appropriate conditional information variance, the minimizing CAID when there are several, the exact cost model, and the PPV/CT correction recorded in the main r3 findings.
