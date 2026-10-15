---
dependency_level: 2
id: lem-gaussian-anchored-conditional-quantile-coupling
kind: lemma
title: Conditional quantile couplings for Gaussian anchored sums
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - def-axiom-of-choice
  - lem-gaussian-anchored-sums-have-cumulant-and-fourier-bounds
  - lem-gaussian-anchored-sum-density-moderate-deviation-bound
  - thm-nondegenerate-multivariate-normal-law-has-density
  - lem-standard-normal-cdf-is-continuous-and-strictly-increasing
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-dominated-convergence
  - thm-measurability-of-integration-against-a-kernel
  - lem-finite-products-of-probability-kernels
  - cor-vector-valued-ftc-and-lipschitz-bound
  - thm-euclidean-space-complete
  - thm-rationals-countable
  - lem-q-and-irrationals-dense-r
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: A. Yu. Zaitsev, Estimates of quantiles of smooth conditional distributions and the multidimensional invariance principle, Siberian Mathematical Journal 37 (1996), Lemmas 6.1 and 8.1; Gaussian anchor specialization and measurable weighted scalar bridges proved here
      url: https://www.mathnet.ru/links/e53bf45963ae71225e3a783f93f9e434/smj483.pdf
    - title: A. Yu. Zaitsev, Multidimensional version of the results of Komlos, Major and Tusnady for vectors with finite exponential moments, Sections 3 and 5
      url: https://www.numdam.org/item/PS_1998__2__41_0.pdf
axiom_use: AC is inherited through the Gaussian and integration suppliers. All conditional kernels and transports are constructed by density integration and rational infima; no selection of conditional-law versions or independent two-sided extension is used.
---

## Statement

Assume AC and the hypotheses of [[lem-gaussian-anchored-sums-have-cumulant-and-fourier-bounds]]: $S=Z+\sum_{i=1}^mX_i\in\mathbb R^d$, $1\le d\le4$, the centered summands are independent, $|X_i|\le B$, $Z$ is Gaussian with covariance $G\ge\gamma sI_d$, and $\operatorname{cov}(S)=sI_d$, where $s,B>0$ and $0<\gamma\le1$. Put $\tau=C_0B$, with $C_0$ from that supplier, and let $\Phi_s$ be the CDF of $N(0,s)$. There are constants $c_\gamma>0$ and $C_\gamma<\infty$, independent of the summand laws, $m,d,s,B$, with the following properties.

For $1\le j\le d$, let $H_j(x',y)$ be the conditional CDF of $S_j$ given $S_{<j}=x'\in\mathbb R^{j-1}$ obtained by dividing the joint prefix density by its marginal density. These densities are strictly positive, so this defines a probability kernel at every $x'$, including prefixes of probability zero. Its quantile transport
$$T_j(x',z)=H_j(x',\cdot)^{-1}(\Phi_s(z))$$
is jointly Borel measurable and takes a fresh $N(0,s)$ variable to that conditional law. If $s\ge C_\gamma\tau^2$, then, with $y=T_j(x',z)$,
$$|y-z|\le C_\gamma\tau\left(1+\frac{|x'|^2+y^2}{s}\right)\quad\hbox{when }|x'|+|y|\le c_\gamma s/\tau,$$
and also
$$|T_j(x',z)-z|\le C_\gamma\tau\left(1+\frac{|x'|^2+z^2}{s}\right)\quad\hbox{when }|x'|+|z|\le c_\gamma s/\tau.$$
For $j=1$, the prefix is empty and its norm is zero. The resulting successive coordinate transport $R$ sends $N_d(0,sI_d)$ to the law of $S$ and satisfies
$$|R(g)-g|\le C_\gamma\tau\left(1+\frac{|R(g)|^2}{s}\right)\quad\hbox{when }|R(g)|\le c_\gamma s/\tau.$$

If $d=2a$ with $a\le2$, write $S=(P,D)$ with $P,D\in\mathbb R^a$. The last $a$ successive conditional transports give a jointly measurable $T_p$ taking a fresh $E\sim N_a(0,sI_a)$ to the conditional law of $D$ given $P=p$, and
$$|T_p(e)-e|\le C_\gamma\tau\left(1+\frac{|p|^2+|T_p(e)|^2}{s}\right)$$
when $s\ge C_\gamma\tau^2$ and $|p|,|T_p(e)|\le c_\gamma s/\tau$. The Gaussian reference bridge $E$ is independent of its Gaussian parent.

There is also the following scalar unequal-variance form. Let $L,R$ be independent centered scalar sums of independent variables bounded by $B$ and independent Gaussian terms, with variances $V_L,V_R\in[s/2,s]$, and with Gaussian component variances at least $\gamma V_L,\gamma V_R$, respectively. Put
$$W=V_L+V_R,\qquad w=V_L/W,\qquad v=V_LV_R/W,\qquad P=L+R,\qquad D=L-wP.$$
Then $W\in[s,2s]$, $w\in[1/3,2/3]$, $v\in[s/4,s/2]$. There is a jointly measurable transport taking a fresh $N(0,v)$ variable to $D$ conditional on $P=p$ with
$$|T_p(e)-e|\le C_\gamma\tau\left(1+\frac{p^2+T_p(e)^2}{s}\right)$$
when $s\ge C_\gamma\tau^2$ and $|p|,|T_p(e)|\le c_\gamma s/\tau$. The corresponding root transport from $N(0,W)$ to $P$ obeys the analogous bound with $|P|^2/s$. The reconstructed children are $L=wP+D$ and $R=(1-w)P-D$.

All these maps are jointly measurable in an additional measurable parameter whenever, on each fixed finite row length, the bounded input laws are probability kernels, their Gaussian covariance and $s$ are measurable functions, and the displayed hypotheses hold parameterwise. This includes countable arrays with different row lengths. No claim here asserts the conditional estimates for raw bounded laws without a positive Gaussian component.

## Facts & Assumptions

**Given:** The centered independent Gaussian anchored sum and its parameters as in the Statement; vector norms are Euclidean, and all constants below depend only on $\gamma$.

[A1] AC is assumed and inherited by the Gaussian suppliers. ([[def-axiom-of-choice]])

[F1] The sum has an analytic cumulant with $|K_{uvv}(z)|\le\tau s|u||v|^2$, and every real tilt retains an independent Gaussian component with covariance at least $\gamma sI$. Each coordinate prefix has the same properties. ([[lem-gaussian-anchored-sums-have-cumulant-and-fourier-bounds]])

[F2] Every tilted density is positive and continuously differentiable, has supremum at most $(2\pi\gamma s)^{-d/2}$, and on the small tilt and moderate deviation region has its Gaussian density times $\exp(O_\gamma((\tau/\sqrt s)(1+r^3)))$. Tilted covariance lies between $7sI/8$ and $9sI/8$. The assertions hold in each prefix's coordinates. ([[lem-gaussian-anchored-sum-density-moderate-deviation-bound]])

[F3] Positive definite Gaussian laws have their positive quadratic-form densities, and the standard normal CDF is continuous, strictly increasing, with limits zero and one. ([[thm-nondegenerate-multivariate-normal-law-has-density]], [[lem-standard-normal-cdf-is-continuous-and-strictly-increasing]])

[F4] Nonnegative product integration and dominated convergence apply to the integrals below. ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-dominated-convergence]])

[F5] Integrating a nonnegative product-measurable function against a finite or uniformly sigma-finite kernel gives a measurable function, and finite products of probability kernels are probability kernels. ([[thm-measurability-of-integration-against-a-kernel]], [[lem-finite-products-of-probability-kernels]])

[F6] Integration of derivatives along real line segments gives the corresponding norm and Lipschitz bounds; Euclidean Cauchy sequences converge. ([[cor-vector-valued-ftc-and-lipschitz-bound]], [[thm-euclidean-space-complete]])

[F7] The rationals are countable and dense in the reals. ([[thm-rationals-countable]], [[lem-q-and-irrationals-dense-r]])

## Proof

1.1 Work with a fixed prefix of length $j\le4$ and write its dimension as $d$ during the proof. Its law satisfies [F1]–[F2]. Set $\sigma=\sqrt s$, $\epsilon=\tau/\sigma$, and normalize coordinates by $\sigma$. Its cumulant $f$ has mean zero, covariance $I$, and third derivatives bounded by $\epsilon|u||v|^2$. Polarization and [F6], integrating along a real segment, give $\|f''(a)-I\|\le\epsilon|a|$ and $|f'(a)-a|\le\epsilon|a|^2/2$. Fix a prefix $x'$, put $b=x'/\sigma$, $\delta=|b|$, and assume $\epsilon\delta$ sufficiently small. The map $a'\mapsto b-(\nabla'f(a',0)-a')$ sends $|a'|\le2\delta$ into itself and has Lipschitz constant at most $2\epsilon\delta<1/2$. Its iterates from zero have geometrically decreasing consecutive distances, hence converge by [F6] to a solution of $\nabla'f(a',0)=b$ with $|a'|\le2\delta$. For the empty prefix use $a'=0$. Put $a=(a',0)$ and let $y_0=\sigma\partial_df(a)$ be the physical last mean under this prefix tilt. The last mixed covariance row at zero vanishes; integrating its Hessian deviation yields $|y_0|\le C\tau\delta^2$. The physical tilt parameter is $h=a/\sigma$, so $\tau|h|\le2\epsilon\delta$ can be kept below $1/8$. [A1, F1, F2, F6, given, construct]

2.1 Let $p,p'$ be the joint and prefix densities. The Gaussian convolution representations in [F2] and [F4] give $\int_{\mathbb R}p(x',y)\,dy=p'(x')$ at every $x'$: integrate the Gaussian joint density over its last coordinate and then integrate the bounded-summand law. Both densities are everywhere positive. Thus $p(x',y)/p'(x')$ defines a probability density for each $x'$ and, by integration, a version of the conditional kernel. Denote tilted densities by $\bar p,\bar p'$. Since $h_d=0$, their exponential factors cancel exactly, and the density $v$ of $S_d-y_0$ conditional on $S'=x'$ is $v(u)=p(x',u+y_0)/p'(x')=\bar p(x',u+y_0)/\bar p'(x')$. The centered tilted covariance $C$ satisfies $\|C/s-I\|\le C\epsilon\delta$ by step 1.1. Apply [F2] to its full density at $(0,u)$ and prefix density at zero. The ratio of the matching Gaussian densities is a centered normal density with variance $\det C/\det C'=1/(C^{-1})_{dd}=s(1+O(\epsilon\delta))$; the determinant identity follows by eliminating the off-diagonal blocks in $C$. Consequently $\left|\log\frac{v(u)}{\phi_s(u)}\right|\le C\epsilon\left(1+\delta\left(1+\frac{u^2}{s}\right)+\frac{|u|^3}{s^{3/2}}\right)$ for $|u|\le c s/\tau$. Here $\phi_s$ is the density of $N(0,s)$, and the small constants also ensure all [F2] moderate bounds for the full centered tilt. [F2, F3, F4, step 1.1, algebra]

3.1 In standardized units set $g(t)=\sigma v(\sigma t)$ and let $\phi$ be the standard normal density. Step 2.1 implies, on $|t|\le c/\epsilon$, $|\log(g(t)/\phi(t))|\le C\epsilon(1+\delta+\delta t^2+|t|^3)$ and hence $c_1e^{-C_1t^2}\le g(t)\le C_1e^{-c_1t^2}$ after reducing $\epsilon$ and $\epsilon\delta$. There is also a global bound $g(t)\le C\exp[-c\min(t^2,|t|/\epsilon)]$. Indeed the standardized prefix-tilted law has prefix density at its mean bounded below by a positive constant by [F2]. Tilt its centered full law further by $q e_d$, where $|q|\le c/\epsilon$. Its full density is bounded above by a constant by the global part of [F2], while integration of its bounded Hessian gives a centered log mgf at most $Cq^2$. The density tilt identity therefore gives $g(t)\le C e^{Cq^2-qt}$ at every real $t$. Choosing $q=\operatorname{sign}(t)\min(|t|/(4C),c/(2\epsilon))$ proves the bound. The combined real tilt remains in a fixed smaller analytic ball, where the Hessian bound from step 1.1 applies; the global density bound in [F2] itself permits every real tilt. [F1, F2, F3, F6, step 1.1, step 2.1, algebra]

4.1 We next convert the density estimate into a CDF displacement without a coupling theorem. Write $R(t)=\epsilon(1+\delta+\delta t+t^2)$ for $t\ge0$. Choose a fixed large $T\ge10$ and then a sufficiently large fixed $K$. Put $r(t)=KR(t)$ and $b=c_0/\epsilon$, with fixed $c_0$ sufficiently small. Reduce the allowed bounds on $\epsilon$ and $\epsilon\delta$ so that for $T/2\le t\le2b$ one has $0\le r(t)\le t/8$ and $0\le r'(t)\le1/2$; this is possible because $R'(t)\le2R(t)/t$ for $t\ge1$ and $r(t)/t\le C K\epsilon(1+\delta+t)$. Also choose $3b$ within the moderate interval of step 3.1. For $t\ge T$, the maps $f_\pm(t)=t\pm r(t)$ are increasing and their arguments are comparable with $t$. Since $(\log\phi)'(t)=-t$, step 3.1 bounds the logarithmic density error at either perturbed argument by $C tR(t)$, whereas the Gaussian log-density changes by at least a fixed positive multiple of $t r(t)$ in the favorable direction. The log Jacobians are at most $r'(t)$ and at least $-2r'(t)$, respectively. Since $r'(t)\le2r(t)/t$, first taking $T$ large and then $K$ large gives $g(f_+(t))f_+'(t)\le\phi(t)$ and $g(f_-(t))f_-'(t)\ge\phi(t)$. These comparisons follow by adding the three logarithmic contributions; the Jacobian contribution divided by $t r(t)$ is at most $4/t^2$, and the density-error contribution is at most $C/K$. [F3, step 3.1, algebra, choose]

5.1 The inverse equations and monotonicity of $r$ imply $f_+^{-1}(z)\ge z-r(z)$ and $f_-^{-1}(z)\le z+r(2z)$ in the range below. Substituting $u=f_+(t)$ and $u=f_-(t)$ in the inequalities of step 4.1 gives, for $2T\le z\le b$, $\int_z^b g(u)\,du\le\int_{z-r(z)}^\infty\phi(u)\,du,\qquad \int_z^b g(u)\,du\ge\int_{z+r(2z)}^b\phi(u)\,du.$ Only a smaller range $z\le c_1/\epsilon$, with $c_1\ll c_0$, will be retained, so the lower integral has its endpoints in the stated order. The global tail estimate in step 3.1 and the Gaussian tail give $\int_b^\infty g+\int_b^\infty\phi\le C e^{-c b^2}$: split the first integral at a constant multiple of $1/\epsilon$ and integrate the Gaussian and exponential parts. Enlarge the shifts in the displayed inequalities to $3r(2z)$. Each extra Gaussian interval has mass at least $cR(z)e^{-Cz^2}\ge c\epsilon e^{-Cz^2}$. Choose $c_1$ so small that $C c_1^2<c c_0^2/2$. For sufficiently small $\epsilon$, uniformly for $2T\le z\le c_1/\epsilon$, that interval mass exceeds the discarded tail, since $\epsilon^{-1}\exp(-(c c_0^2-Cc_1^2)/\epsilon^2)\to0$. Thus the full tails have the corresponding inequalities with shift $C R(z)$; here $R(2z)\le4R(z)$. Reflecting $g,\phi$ proves the negative-tail version as well. [F3, step 3.1, step 4.1, algebra, choose]

6.1 At $z=2T$ step 5.1 bounds the tail-probability difference by $C R(2T)$. For $|z|\le2T$, step 3.1 bounds the density-ratio error by $C a$, where $a=\epsilon(1+\delta)$; integrating over this fixed interval gives a CDF difference at most $C a$. The Gaussian density is bounded below by a fixed positive constant on $[-2T-1,2T+1]$, so a shift of length $C a$ in either direction dominates that difference, after reducing the allowed bound on $a$ to keep the shift within this compact interval. Since $R(|z|)\ge a$, this proves together with step 5.1, for the standardized conditional CDF $F_g$, $\Phi(z-C R(|z|))\le F_g(z)\le\Phi(z+C R(|z|))\qquad(|z|\le c/\epsilon).$ All constant choices are finite and made in the indicated order; reducing the common cutoff enforces every smallness requirement. Returning to physical units, the CDF $F_v$ of the centered conditional coordinate satisfies $\Phi_s(u-\rho(u))\le F_v(u)\le\Phi_s(u+\rho(u))$, where $\rho(u)=C\tau(1+\delta(1+|u|/\sigma)+u^2/s)$. [F3, step 3.1, step 5.1, algebra, choose]

7.1 Every conditional density is positive and continuous by step 2.1, so its CDF is continuous, strictly increasing and has limits zero and one. Its inverse on $(0,1)$ is therefore unique. For a fresh $N(0,s)$ variable $Z$, [F3] implies that $\Phi_s(Z)$ is uniform: for $0<u<1$, the event $\Phi_s(Z)\le u$ is $Z\le\Phi_s^{-1}(u)$, of probability $u$. Thus the inverse-CDF map has the asserted conditional law. If $Y=T_j(x',Z)$ and $U=Y-y_0$, then $F_v(U)=\Phi_s(Z)$. Step 6.1 and strict monotonicity imply $|U-Z|\le\rho(U)$ whenever $U$ is moderate. Step 1.1 gives $|y_0|/\sigma\le C\epsilon\delta^2\le Cc\delta$, so $|x'|+|Y|\le c s/\tau$ implies the required moderate bounds on $U$ and $\delta$. The inequalities $2\delta|U|/\sigma\le\delta^2+U^2/s$ and $\delta\le1+\delta^2$ now give $|Y-Z|\le C\tau(1+(|x'|^2+Y^2)/s)$. [F3, step 1.1, step 2.1, step 6.1, algebra]

8.1 The bound in Gaussian rather than target values follows by bracketing, not by substituting $Z$ for $Y$ in step 7.1. In standardized units fix a Gaussian coordinate $z$ and put $A=1+\delta^2+z^2$, $L=K_1\epsilon A$, with fixed large $K_1$. If $\epsilon\delta$ and $\epsilon|z|$ are small enough, $z\pm L$ remain in the moderate region and the standardized version of $\rho(z\pm L)$ is at most $L/2$. Indeed $\rho(t)\le C\epsilon(1+\delta^2+t^2)$ and $(z\pm L)^2\le2z^2+2L^2$; the extra $C\epsilon L^2$ is absorbed into $L$ because $\epsilon^2 A$ is small. Step 6.1 therefore gives $F_g(z-L)<\Phi(z)<F_g(z+L)$, so its inverse at $\Phi(z)$ lies in $[z-L,z+L]$. Adding the shift $y_0$ from step 1.1 and restoring units gives $|T_j(x',Z)-Z|\le C\tau(1+(|x'|^2+Z^2)/s)$ under the stated Gaussian-value cutoff. [F3, step 1.1, step 6.1, algebra, choose]

8.2 The maps just constructed are jointly measurable, also under the additional parameter in the Statement. On each fixed row length the product of the bounded input-law kernels exists by [F5]. The Gaussian density is jointly Borel in its positive definite covariance and its argument: its determinant and inverse are continuous functions of the matrix entries by their polynomial and cofactor formulas. Consequently $p_\theta(x)=\int q_{G_\theta}(x-\sum_i t_i)\,\bigotimes_i K_i(\theta,dt_i)$ is jointly measurable by [F5], as are the prefix densities, their positive ratios and their CDF integrals. Lebesgue integration here uses its common exhaustion by bounded intervals. The conditional inverse can be written $\inf\{r\in\mathbb Q:H_{j,\theta}(x',r)\ge u\}$; by [F7] this equals the continuous strictly increasing inverse and is jointly measurable, since strict sublevel sets are countable unions of measurable sets indexed by $r\in\mathbb Q$. Compose with the continuous $\Phi_s(z)=\Phi(z/\sqrt s)$. Different finite row lengths are handled on their countable measurable disjoint union. This constructs the kernel versions explicitly at every prefix. [F3, F5, F7, step 2.1, step 7.1, algebra]

9.1 Starting with independent Gaussian coordinates of variance $s$, apply the conditional maps successively to coordinates $1,\ldots,d$. Conditional integration of the densities in step 2.1 shows inductively that the first $j$ constructed coordinates have density $p_j$; their joint density is the product of the successive density ratios, which telescopes to $p_j$. The full map $R$ therefore has the law of $S$. On $|R(g)|\le c s/\tau$, every coordinate and prefix meets the target-value cutoff in step 7.1 after reducing $c$ by a fixed factor. Summing at most four coordinate bounds gives $|R(g)-g|\le C\tau(1+|R(g)|^2/s)$. For $S=(P,D)$ apply only its last $a$ conditional maps with the specified prefix $P=p$ and fresh independent Gaussian coordinates; the same telescoping gives the conditional law of $D$ and the same coordinate estimates give $|T_p(e)-e|\le C\tau(1+(|p|^2+|T_p(e)|^2)/s)$. Separate bounds on the two norms imply the joint cutoff by reducing $c$. The Gaussian reference has covariance $sI$, so its parent and bridge coordinate blocks are independent by the product Gaussian density in [F3]. Joint measurability follows by composing the maps of step 8.2. [F3, F4, step 7.1, step 8.2, algebra]

10.1 For the scalar extension put $a=\sqrt{s/W}$, $b=\sqrt{s/v}$ and $Q=(aP,bD)$. Independence gives $\operatorname{Var}(P)=W$, $\operatorname{Cov}(P,D)=V_L-wW=0$ and $\operatorname{Var}(D)=V_LV_R/W=v$, hence $\operatorname{cov}(Q)=sI_2$. The stated ranges follow from $V_L,V_R\in[s/2,s]$; the function $uv/(u+v)$ is increasing in either positive argument, giving $v\in[s/4,s/2]$. Thus $a\in[1/\sqrt2,1]$, $b\in[\sqrt2,2]$ and $w\in[1/3,2/3]$. A bounded left increment $X$ contributes $(aX,b(1-w)X)$ to $Q$, whose norm is at most $2B$; a bounded right increment contributes $(aX,-bwX)$ with the same bound. The joint Gaussian component is obtained from independent child Gaussians by the same linear map. Since their variances are at least $\gamma V_L,\gamma V_R$, its covariance, by congruence, is at least $\gamma\operatorname{cov}(Q)=\gamma sI_2$. Therefore $Q$ satisfies the original hypotheses with bound $2B$ and parameter $2\tau$. Apply step 9.1 conditionally on $aP=ap$, feeding $be\sim N(0,s)$, and divide the output by $b$. The uniform bounds on $a,b$ convert its estimate and its cutoffs into the asserted scalar bridge bound after changing $c_\gamma,C_\gamma$ by fixed factors. Applying the scalar root construction to $aP$ and rescaling gives the root bound. Finally $D=L-wP$ rearranges to the two stated child formulas. Every coefficient is a continuous function of the positive variances, so the parameter measurability in step 8.2 is preserved. All conclusions follow. [F1, F3, step 8.2, step 9.1, algebra] ∎
