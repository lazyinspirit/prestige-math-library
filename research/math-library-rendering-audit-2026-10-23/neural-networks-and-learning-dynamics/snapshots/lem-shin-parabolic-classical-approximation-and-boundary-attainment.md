---
id: lem-shin-parabolic-classical-approximation-and-boundary-attainment
kind: lemma
title: "Classical parabolic solvability by weak approximation and exterior-ball barriers"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-countable-choice
  - def-axiom-of-choice
  - lem-shin-bounded-open-set-hilbert-evolution-triple
  - lem-shin-interior-parabolic-schauder-estimate
  - thm-parabolic-variational-wellposedness-and-energy-stability
  - lem-parabolic-energy-pairing-and-trace
  - lem-positive-part-is-an-admissible-weak-test-by-truncation
  - thm-difference-quotient-characterisation-of-w-one-p-for-p-greater-than-one
  - thm-higher-order-sobolev-embedding
  - thm-reference-simplex-sobolev-extension
  - thm-arzela-ascoli-for-real-ck
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Shin, Darbon, and Karniadakis, On the Convergence of Physics-Informed Neural Networks for Linear Second-Order Elliptic and Parabolic Type PDEs"
      url: "https://arxiv.org/pdf/2004.01806"
      locator: "Assumption 3.4 and Appendix F, Theorem F.1; construction supplied locally"
---

## Statement

Assume Countable Choice and the Axiom of Choice. Let $U\subset\mathbb R^d$ be nonempty, bounded and open, $T>0$, and $0<\alpha<1$. At every $x_0\in\partial U$ assume there is an exterior tangent closed ball, disjoint from $U$ and containing $x_0$ on its sphere. Let $A=A^T$, $\beta,q,f$ be bounded on $U\times(0,T]$, locally parabolic $\alpha$-Hölder up to its final face, with $\lambda I\le A\le\Lambda I$, $\lambda>0$, and $q\le0$. Let the combined initial and lateral datum $\psi$ be continuous on $\Gamma_T=(\bar U\times\{0\})\cup(\partial U\times[0,T])$, including compatibility at their intersection. Then there is a unique
$$u\in C^{2+\alpha,1+\alpha/2}_{\mathrm{loc}}(U\times(0,T])\cap C(\bar U\times[0,T])$$
with $-u_t+A:D^2u+\beta\cdot Du+qu=f$ and $u=\psi$ on $\Gamma_T$. It obeys $\|u\|_\infty\le\|\psi\|_\infty+T\|f\|_\infty$. Moreover it is the interior limit of smooth-coefficient weak solutions on finite polyhedral subdomains exhausting $U$, with uniform supremum bounds and the uniform compact-interior estimates just stated. If the coefficients possess a bounded divergence representation compatible in distributions, those approximants may be chosen by convolution of its original divergence coefficients.

## Statement references

[Shin et al., Assumption 3.4 and Appendix F: exterior-ball classical-solvability interface](https://arxiv.org/pdf/2004.01806)

## Facts & Assumptions

**Given:** The choices, domain, exterior balls, bounded coefficients, ellipticity, sign, local Hölder regularity and compatible continuous data in the Statement.

[A1] Countable Choice is used by weak solvability and countable extraction. The Axiom of Choice is carried by truncation calculus, reference-simplex extension and Sobolev embedding; it also implies the Dependent Choice needed by the cited Arzela–Ascoli theorem ([[def-countable-choice]], [[def-axiom-of-choice]]).

[F1] On every bounded open $D$, $H^1_0(D)\hookrightarrow L^2(D)$ is a separable Hilbert evolution triple ([[lem-shin-bounded-open-set-hilbert-evolution-triple]]).

[F2] A bounded coercive measurable form on that triple has a unique weak parabolic solution, with a continuous $L^2$ trace and the energy-pairing identity ([[thm-parabolic-variational-wellposedness-and-energy-stability]], [[lem-parabolic-energy-pairing-and-trace]]).

[F3] Positive parts have gradient $D(v_+)=\mathbf1_{v>0}Dv$, and compactly supported cutoff positive parts are admissible Sobolev tests ([[lem-positive-part-is-an-admissible-weak-test-by-truncation]]).

[F4] Uniform spatial difference-quotient $L^2$ bounds give the corresponding weak derivative; sufficiently high-order local spacetime Sobolev regularity gives a smooth representative by embedding on small simplices ([[thm-difference-quotient-characterisation-of-w-one-p-for-p-greater-than-one]], [[thm-reference-simplex-sobolev-extension]], [[thm-higher-order-sobolev-embedding]]).

[F5] Smooth solutions satisfy interior parabolic Schauder estimates with constants independent of higher coefficient derivatives ([[lem-shin-interior-parabolic-schauder-estimate]]).

[F6] Equicontinuity and boundedness on compact sets give compact closure in the uniform topology under the declared choice assumptions ([[thm-arzela-ascoli-for-real-ck]]).

## Proof

1.1 Write $P=-\partial_t+A:D^2+\beta\cdot D+q$. First prove classical comparison. If $Pv\ge0$ and $v\le0$ on the initial and lateral faces, fix $\tau<T$. The function $v-\varepsilon(t+1)$ has strictly positive $P$, since $P(t+1)=-1+q(t+1)\le-1$. If it had a positive maximum on $\bar U\times[0,\tau]$, that maximum would occur at a spatial interior point at time $s>0$. Its spatial gradient is zero, its Hessian is negative semidefinite, and its time derivative is nonnegative if $s=\tau$ and zero if $s<\tau$. The derivatives exist since $\tau<T$. Thus its $P$ value is nonpositive, a contradiction. Let $\varepsilon\downarrow0$, then $\tau\uparrow T$, using continuity. The same proof works on subcylinders and shows uniqueness by applying it to both signs of a solution difference. [given, algebra, contradiction]

1.2 For a smooth-coefficient weak subsolution of $v_t-\operatorname{div}(A Dv)-B\cdot Dv-qv\le0$ with zero initial positive part and weak nonpositive boundary order, use $v_+$ as test. The needed time identity follows by taking time averages in the variational equation, testing with smooth convex approximations to the positive part, applying the ordinary chain rule to those averages, and passing first in the averaging radius and then in the convex approximation; the derivatives of the convex approximations lie in $[0,1]$, so [F3] and dominated convergence justify both passages. Consequently $$\frac12\frac d{dt}\|v_+\|_2^2+\frac\lambda2\|Dv_+\|_2^2\le\left(\frac{\|B\|_\infty^2}{2\lambda}+\|q_+\|_\infty\right)\|v_+\|_2^2.$$ An integrating factor and its zero initial value give $v_+=0$. To justify weak boundary order without a smooth boundary, write $v=w+H$ with $w\in H^1_0(D)$ and compare to a smooth barrier $W$ satisfying $H-W<0$ on a neighborhood of $\partial D$. Approximate $w$ by compactly supported smooth $w_j$. Then $(w_j+H-W)_+$ has compact support in $D$. The positive-part map is continuous in $H^1$: its gradient formula from [F3], the vanishing of $Dv$ on a zero level set, and dominated convergence along almost-everywhere convergent subsequences prove this directly. Thus $(v-W)_+\in H^1_0(D)$. Replace $W$ by $W+\varepsilon$ and then let $\varepsilon\downarrow0$ when boundary order is non-strict. This proves the same local comparison on intersections with an interior ball, using the classical interior values on its artificial boundary. [A1, F2, F3, algebra, construct]

1.3 Enlarge the time interval slightly. At each interior spatial point the coefficients and $f$ have one-sided Hölder limits at $T$ by hypothesis; extend them constantly after $T$, preserving ellipticity, sign and bounds. Extend the lateral datum continuously after $T$. It suffices to construct a solution on the longer cylinder and then restrict, so all subsequent compact-interior arguments include the original final face. Choose finite unions $U_n$ of dyadic cubes compactly contained in $U$, whose distance from its complement is at least $2/n$, exhausting every compact subset of $U$, and with every point of $\partial U_n$ within $C/n$ of $\partial U$. For example use a grid with side at most $1/(10n\sqrt d)$ and take the interior of the union of closed grid cubes at distance greater than $3/n$ from the complement, passing to increasing finite unions with earlier domains if needed. Neighboring excluded cubes show the stated boundary-distance bound. Every fixed compact subset is eventually included. [given, construct]

2.1 Extend $A$ outside $U$ by $\lambda I$, and $\beta,q,f$ by zero, using bounded measurable extensions also before the initial time. Convolve with nonnegative smooth mollifiers of spatial radius less than $1/n$ and time radius less than $1/n^2$. The smooth coefficients $A_n,\beta_n,q_n,f_n$ retain the uniform bounds, ellipticity and $q_n\le0$, converge locally in every lower Hölder exponent, and have uniformly bounded local $\alpha$ norms away from the initial/lateral boundary. The last assertion follows directly by writing a difference of convolutions as the average of the corresponding differences of the original locally Hölder function. Extend the continuous combined datum to a continuous $H$ on a neighborhood of the closed cylinder and mollify it to $H_n\to H$ uniformly. Such an extension can be made explicitly with a continuous increasing subadditive modulus $\omega$ dominating the data modulus: $H(z)=\inf_{y\in\Gamma_T}(\psi(y)+\omega(d_p(z,y)))$, truncated to the data range, equals $\psi$ on $\Gamma_T$ and has modulus $\omega$. A concave dominating modulus is subadditive. Prescribe $H_n$ on $\partial U_n$ and initially on $U_n$. [given, step 1.3, construct]

3.1 Rewrite the smooth nondivergence equation in divergence form, with $B_n=\beta_n-\operatorname{div}A_n$. Subtract $H_n$ and multiply the zero-data unknown by $e^{-k_nt}$, choosing finite $k_n$ large enough that its form satisfies $a_n(v,v)+k_n\|v\|_2^2\ge(\lambda/2)\|Dv\|_2^2+\|v\|_2^2$. This follows by Young's inequality for the finite bounded $B_n$ and $q_n$; the form is bounded for each fixed $n$. The transformed source is smooth and belongs to $L^2(0,T;H^{-1}(U_n))$. Apply [F1] and [F2], and undo the transformations, to get a weak solution $u_n$ with those initial and lateral data. The bounds on $B_n$, $k_n$ and derivatives of $H_n$ need not be uniform: they were used only to construct each approximant. Weak comparison from step 1.2 with $\pm(M_0+tM_f)$, where $M_0$ bounds $|H_n|$ and $M_f$ bounds $|f_n|$, gives $|u_n|\le M_0+tM_f$, uniformly in $n$. [A1, F1, F2, step 1.2, step 2.1, algebra]

3.2 Fix $x_0\in\partial U$. Take an exterior ball of center $y$ and radius $R$. Replacing it by a smaller internally tangent ball makes its only contact with the old sphere be $x_0$; its remaining points lie in the old ball's interior, so its only contact with $\bar U$ is $x_0$. For $r=|x-y|$ set $h=R^{-p}-r^{-p}\ge0$ on $\bar U$, with $h(x_0)=0$. Direct differentiation gives $$L_nh=pr^{-p-2}\left(\operatorname{tr}A_n-(p+2)\frac{(x-y)^TA_n(x-y)}{r^2}+\beta_n\cdot(x-y)\right)+q_nh.$$ Choose $p$ with $(p+2)\lambda>d\Lambda+\sup_n\|\beta_n\|_\infty(R+\rho)+1$. Multiply $h$ by a positive constant so that $-L_nh\ge1$ in $U_n\cap B_\rho(x_0)$, uniformly in $n$. On the artificial sphere $\bar U\cap\partial B_\rho(x_0)$ the minimum of $h$ is positive by its isolated zero. These barriers use coefficient bounds and ellipticity only. [given, step 2.1, algebra, choose]

4.1 Each weak $u_n$ is smooth in the interior. Here is the regularity argument. With a compactly supported space-time cutoff $\eta$, test its smooth divergence equation with $-D_{-h}(\eta^2D_hu_n)$, first using time averages to make the test legitimate. Difference-quotient integration by parts places $D_h$ on the coefficients and gradient. The principal term is at least $\lambda\|\eta D D_hu_n\|_2^2$. The remaining terms are sums of a bounded derivative of a smooth coefficient times a lower derivative of $u_n$, or a cutoff derivative times $D_hu_n$, or a differentiated smooth source; Cauchy–Schwarz and Young absorb half the principal term and bound the rest by a finite multiple of the $L^2_tH^1_x$ norm and source norms on a larger compact cylinder. A time cutoff removes its bottom boundary contribution; the top contribution has favorable sign. The quotient bound in [F4] and passage $h\to0$ give all second spatial derivatives locally in $L^2$. Repeating this calculation for a spatial derivative, with the Leibniz formula putting each differentiated coefficient beside a lower spatial derivative of $u_n$, proves inductively that every spatial derivative is locally in $L^2$. The equation then gives $u_{n,t}$ and all its spatial derivatives in $L^2$. Differentiating that equation distributionally in time gives all spatial derivatives of $u_{n,tt}$ in $L^2$, since the smooth coefficient time derivatives multiply already known spatial derivatives of $u_n$ and $u_{n,t}$. Induction gives all mixed time/space derivatives locally in $L^2$. Apply [F4] on a small spacetime simplex around each interior point, with arbitrarily high Sobolev order; its extension and embedding theorems apply in dimension $d+1\ge2$. The resulting representatives are smooth and agree on overlaps because they represent the same almost-everywhere function. [A1, F2, F4, step 3.1, construct]

5.1 On each compact subcylinder, [F5], the uniform supremum bound and the uniform local coefficient/source Hölder bounds give uniform bounds for $u_n,Du_n,D^2u_n,u_{n,t}$ and their parabolic Hölder seminorms. Apply [F6] to these finitely many derivative families, then extract diagonally over a countable exhaustion of compact subcylinders. The limits of derivatives are derivatives of the limit by the coordinate segment integral identities. Thus a subsequence tends locally with two spatial and one time derivatives to $u$, and passage to the equations gives $Pu=f$. The uniform $\alpha$ seminorm bounds pass directly to differences of the limit, giving its asserted local full-$\alpha$ regularity. Its supremum is bounded by $\|\psi\|_\infty+T\|f\|_\infty$ after letting the uniform data approximation error decrease to zero. [A1, F5, F6, step 2.1, step 3.1, step 4.1, construct]

6.1 Fix $(x_0,t_0)$ on the lateral face with $t_0>0$ and an error $\varepsilon>0$. Choose $\rho,\eta>0$ such that $H$ differs from $c_0=\psi(x_0,t_0)$ by less than $\varepsilon$ when $|x-x_0|<\rho$, $|t-t_0|<\eta$, also allowing $t=0$ if needed. Then $H_n$ differs by less than $2\varepsilon$ for all large $n$. On the local cylinder with bottom $s=\max(0,t_0-\eta)$ use $W=2\varepsilon+A h+B(t-t_0)^2$. Choose $B$ to dominate the uniform solution bound on the artificial bottom if $s>0$, using $B\eta^2$; if $s=0$ the initial data already have the required $2\varepsilon$ bound. Choose $A$ both to dominate on the artificial spatial face and to satisfy $A\ge M_f+\|q\|_\infty|c_0|+2B\eta$, increasing the uniform $q$ bound slightly if necessary. Then $(\partial_t-L_n)W\ge A-2B\eta$ dominates the absolute source of $u_n-c_0$, which includes the term $q_nc_0$. On the true boundary of $U_n$ its datum is $H_n$, so the comparison in step 1.2 gives $|u_n-c_0|\le W$ throughout this neighborhood. First pass to the interior limit, then let $(x,t)\to(x_0,t_0)$, and finally $\varepsilon\downarrow0$. This proves lateral boundary attainment from both time directions. [step 1.2, step 2.1, step 3.1, step 5.1, step 3.2, construct]

7.1 At $(x_0,0)$, including a corner, use $W=2\varepsilon+A|x-x_0|^2+Bt$. Choose $A$ to dominate on the artificial spatial face and choose $B\ge M_f+\|q\|_\infty|\psi(x_0,0)|+CA$, where $C$ bounds $|L_n|x-x_0|^2|$ on the neighborhood. The terms $-q_nW$ have favorable sign. Initial and nearby lateral data differ from $\psi(x_0,0)$ by at most $2\varepsilon$. The same comparison and limits prove initial attainment. At spatial interior points of the original final face, step 1.3 and step 5.1 give regularity and continuity. Together these arguments extend $u$ continuously to the whole closed cylinder with its prescribed values. Step 1.1 gives uniqueness. [step 1.1, step 1.2, step 1.3, step 5.1, step 6.1, construct]

8.1 If the original bounded divergence coefficients $a,b,c,d$ have the distributionally compatible expansion $A=a$, $\beta_j=\sum_iD_ia_{ij}+b_j+c_j$, $q=\sum_iD_ib_i+d$, choose their convolutions rather than independently convolving the expanded coefficients. Use a nonnegative temporal mollifier supported at strictly positive past lags, so its convolution samples $t-s$ with $s>0$, and a spatial mollifier whose support stays inside $U$ at every point of $U_n$. Extend in time by $a=\lambda I$, $b=c=d=0$ before time zero; this introduces no spatial derivative error. Distributional spatial differentiation commutes with convolution, so the expanded coefficients are the convolutions of $\beta,q$ and retain their bounds and sign. At $t\le T$ no value or limit of the original $b,c,d$ beyond or at $T$ is needed. Each fixed smooth approximant can be extended locally past $T$ when its existence construction requires it; only its convergence on positive-time compact sets below $T$ is needed for the energy limit. The boundary arguments apply at every lateral time below $T$, and the solution already constructed in step 7.1 supplies the continuous final trace. This proves the compatible approximation assertion without imposing endpoint continuity on the original divergence coefficients. [step 1.3, step 2.1, step 3.1, step 5.1, step 7.1, given, algebra] ∎

## Remarks

The boundedness of the expanded drift, potential and source is essential to this proof. In the source weighted convention $|v|_{0,\alpha}$ contains $\sup|v|$, so membership in that class supplies it. Weighted bounds only on $\delta\beta$, $\delta^2q$, $\delta^2f$ together with merely local Hölder regularity do not imply it. No global $C^{2,1}$ derivative bound at the initial/lateral boundary is concluded.

The full Shin Assumption 3.4 and Appendix F were read. Its Theorem F.1 cites Friedman, Chapter 3 Corollary 2; no reading of that full book is claimed. The present proof uses the displayed published weak variational interface and supplies the classical upgrade locally.
