---
dependency_level: 1
id: lem-gaussian-anchored-sum-density-moderate-deviation-bound
kind: lemma
title: Moderate deviation density bounds for Gaussian anchored sums
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - lem-gaussian-anchored-sums-have-cumulant-and-fourier-bounds
  - def-axiom-of-choice
  - thm-nondegenerate-multivariate-normal-law-has-density
  - lem-characteristic-function-of-a-multivariate-normal-law
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-dominated-convergence
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - cor-vector-valued-ftc-and-lipschitz-bound
  - thm-euclidean-space-complete
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: A. Yu. Zaitsev, Estimates of quantiles of smooth conditional distributions and the multidimensional invariance principle, Siberian Mathematical Journal 37 (1996), Lemmas 1.1, 1.2, 2.1, and 4.1; Gaussian convolution specialization proved here
      url: https://www.mathnet.ru/links/e53bf45963ae71225e3a783f93f9e434/smj483.pdf
---

## Statement

Assume AC and the hypotheses of [[lem-gaussian-anchored-sums-have-cumulant-and-fourier-bounds]], with $1\le d\le4$, fixed $\gamma>0$, $\tau=C_0B$, $\kappa=\tau/\sqrt s$, and logarithmic moment generating function $K$. Let $p_h$ denote the density of $S$ under the real exponential tilt with parameter $h$. Every such density exists, is continuously differentiable and strictly positive, and
$$\sup_y p_h(y)\le(2\pi\gamma s)^{-d/2}\qquad(h\in\mathbb R^d).$$
There are constants $c_\gamma>0$, $C_\gamma<\infty$, independent of $d,s,B,m$ and the summand laws, with the following property. If $\kappa\le c_\gamma$ and $\tau|h|\le1/8$, put $\mu_h=\mathbb E_hS$ and $D_h=\operatorname{cov}_h(S)$. Then
$$\tfrac78sI_d\le D_h\le\tfrac98sI_d.$$
For $x\in\mathbb R^d$ put $r=|D_h^{-1/2}x|$ and let $q_{D_h}(x)=(2\pi)^{-d/2}(\det D_h)^{-1/2}e^{-r^2/2}$. Whenever $\kappa r\le c_\gamma$,
$$\left|\log\frac{p_h(\mu_h+x)}{q_{D_h}(x)}\right|\le C_\gamma\kappa(1+r^3).$$
For $r\ge7$ in the same region,
$$\left.\frac{d}{dt}\log p_h(\mu_h+x+tx)\right|_{t=0}\le-\tfrac12r^2.$$
These assertions apply separately to every row isometry image in the supplier, including every required coordinate prefix and normalized joint child sum and difference. Their tilt parameter and covariance are taken in that image's own coordinates.

## Facts & Assumptions

**Given:** The hypotheses of the Statement. The inverse square root of a positive definite matrix is its symmetric positive inverse square root, and directional derivatives at a point always keep the chosen exponential tilt fixed.

[F1] The bounded and Gaussian sum has an analytic cumulant with $|K_{uvv}(z)|\le\tau s|u||v|^2$ on $\tau|z|<1$. Under every real tilt its Gaussian component remains independent with covariance $G\ge\gamma sI_d$, its characteristic function has modulus at most $e^{-\gamma s|t|^2/2}$, and its Fourier tails, with or without one linear frequency factor, decay faster than any fixed power of $\kappa$. The same holds for every row isometry image. [[lem-gaussian-anchored-sums-have-cumulant-and-fourier-bounds]].

[F2] Positive definite Gaussian densities have the displayed quadratic form and total mass one; their characteristic functions are the matching Gaussian exponentials. [[thm-nondegenerate-multivariate-normal-law-has-density]], [[lem-characteristic-function-of-a-multivariate-normal-law]].

[F3] Fubini, Tonelli and dominated convergence license absolutely integrable interchanges and dominated differentiation. [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-dominated-convergence]].

[F4] Real symmetric matrices have orthonormal eigenbases; linear changes of Lebesgue variables multiply by the absolute determinant. [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]], [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]].

[F5] Cauchy–Schwarz and integration of derivatives along line segments give the norm and Lipschitz estimates below. [[thm-cauchy-schwarz-and-the-euclidean-norm]], [[cor-vector-valued-ftc-and-lipschitz-bound]].

[F6] A Euclidean Cauchy sequence converges. [[thm-euclidean-space-complete]].

[A1] AC is assumed and inherited through the Gaussian and integration suppliers. [[def-axiom-of-choice]].

## Proof

1.1 Under any real tilt, write $S=Y+Z_h$, where the two terms are independent and $Z_h$ is Gaussian of covariance $G$ by [A1, F1]. Tonelli and translation of the Gaussian density show that $p_h(y)=\mathbb E_hq_G(y-Y-\mathbb E_hZ_h)$ is a probability density. It is strictly positive because its integrand is strictly positive, and is bounded by $(2\pi)^{-d/2}(\det G)^{-1/2}\le(2\pi\gamma s)^{-d/2}$. The Gaussian density and each of its first derivatives are bounded and continuous, so dominated convergence gives continuous first derivatives of this convolution. This proves the global assertions without a general vector inversion theorem. [F1, F2, F3, F4]

1.2 Exponential moment differentiation identifies $K'(h)$ and $K''(h)$ with the tilted mean and covariance, respectively. To justify the differentiation, the bounded summands permit every polynomial factor, and the Gaussian square completion in [F1] makes all its polynomial moments integrable even after a slightly stronger real exponential; dominated convergence applies. For real $u,v,w$, polarization of the symmetric complex valued form $Q(v,w)=K_{uvw}(z)$ gives $|Q(v,w)|\le\tau s|u||v||w|$: apply $4Q(v,w)=Q(v+w,v+w)-Q(v-w,v-w)$ after replacing $v,w$ by $av,a^{-1}w$, and minimize the resulting bound $\tau s|u|(a^2|v|^2+a^{-2}|w|^2)/2$ over $a>0$. Integrating $K'''$ on the real segment from zero to $h$ therefore gives $\|K''(h)-sI\|\le\tau s|h|$. Hence $7sI/8\le D_h\le9sI/8$ for $\tau|h|\le1/8$. [F1, F3, F5, algebra]

2.1 We will also need its Fourier formula. Integrating the density of $N_d(0,G^{-1})$ against the character $e^{-it\cdot y}$ and using its characteristic function in [F2] gives $q_G(y)=(2\pi)^{-d}\int e^{-it\cdot y}e^{-t^TGt/2}\,dt$. The constants follow directly by inserting that density and multiplying by $(2\pi)^{-d/2}(\det G)^{-1/2}$. Insert this formula in step 1.1 and use absolute Fubini, dominated by the integrable Gaussian $e^{-t^TGt/2}$. Thus $p_h(y)=(2\pi)^{-d}\int e^{-it\cdot y}\varphi_h(t)\,dt$, and its derivative in direction $v$ is the same integral with factor $-i(t\cdot v)$. This differentiation is dominated because $|t\cdot v|e^{-\gamma s|t|^2/2}$ is integrable by [F1]. Centering or making an invertible linear change of coordinates gives the identical formulas for those transformed densities. [step 1.1, F1, F2, F3, F4]

2.2 Fix this $h$ and center its law. Its cumulant is $K_h(z)=K(h+z)-K(h)-z\cdot\mu_h$. On $2\tau|z|<1$ the original analytic ball still contains $h+z$, since $\tau|h+z|<5/8$. Its third derivative is bounded by $\tau s|u||v|^2\le2\tau|u|v^TD_hv$. Whiten by $D_h^{-1/2}$, writing $W=D_h^{-1/2}(S-\mu_h)$ under this tilt and $L(a)=K_h(D_h^{-1/2}a)$. Then $L(0)=0$, $L'(0)=0$, $L''(0)=I$, and, with $\lambda=2\tau/\sqrt{\lambda_{\min}(D_h)}\le3\kappa$, it is analytic on $\lambda|a|<1$ and satisfies $|L_{uvv}(a)|\le\lambda|u||v|^2$. The centered Gaussian component of $W$ has covariance at least $(8\gamma/9)I$. Its covariance remains unchanged under every further real tilt; consequently all such tilted characteristic functions have modulus at most $e^{-(4\gamma/9)|t|^2}$. [step 1.2, F1, F4, algebra]

3.1 Polarization as in step 1.2 and integration along $ta$, $0\le t\le1$, give $\|L''(a)-I\|\le\lambda|a|$, $|L'(a)-a|\le\lambda|a|^2/2$, and $|L(a)-|a|^2/2|\le\lambda|a|^3/6$ for real $a$ in the ball. For real $t$ the same last estimate along the complex segment $ist$ gives $L(it)=-|t|^2/2+R(t)$ with $|R(t)|\le\lambda|t|^3/6$: this uses only the real direction $t$ in each derivative and the factors $i^3$ from the segment parameter. [step 2.2, F5, algebra]

4.1 Put $b=D_h^{-1/2}x$, $r=|b|$. If $\lambda r\le1/16$, the map $T(a)=b-(L'(a)-a)$ sends the closed ball $|a|\le2r$ into itself by step 3.1, and its Lipschitz constant there is at most $2\lambda r\le1/8$. Starting at zero, its iterates are Cauchy since consecutive distances decrease geometrically; their limit exists by [F6], lies in the closed ball, and is a fixed point by continuity. Call it $a$. It satisfies $L'(a)=b$, $|a|\le2r$, and $|a-b|\le2\lambda r^2$. For $r=0$ take $a=0$. Thus no unproved global inverse assertion is needed for the saddlepoint. [step 3.1, F5, F6, construct]

5.1 Tilt $W$ further by the fixed parameter $a$. Its mean is $b$ and covariance $A=L''(a)$. Put $\epsilon=\lambda|a|\le2\lambda r$; step 3.1 gives $(1-\epsilon)I\le A\le(1+\epsilon)I$. Its cumulant centered at $b$ has third derivative bounded by a fixed multiple of $\lambda|u||v|^2$ on a complex ball of radius $c/\lambda$, because $a$ lies in the interior of the original analytic ball by step 4.1. Its characteristic modulus on all real frequencies is bounded by the same Gaussian $e^{-(4\gamma/9)|t|^2}$ from step 2.2. In what follows reduce the final constant $c_\gamma$ so that $\epsilon\le1/100$ and all these interior margins hold. [step 2.2, step 3.1, step 4.1, choose]

6.1 Let $\psi(t)$ be that last centered characteristic function and let $g_A=(2\pi)^{-d/2}(\det A)^{-1/2}$. For $|t|\le a_0/\lambda$, with a sufficiently small fixed $a_0>0$, the integrated third derivative estimate gives $\log\psi(t)=-t^TAt/2+E(t)$, $|E(t)|\le C\lambda|t|^3$, and $\operatorname{Re}\log\psi(t)\le-c|t|^2$. The elementary identity $e^z-e^w=(z-w)\int_0^1e^{(1-u)w+uz}\,du$ therefore gives $|\psi(t)-e^{-t^TAt/2}|\le C\lambda|t|^3e^{-c|t|^2}$ there. Its integral, and its integral after multiplication by $|t\cdot v|$, are bounded by $C\lambda$ and $C\lambda|v|$, respectively. To check the integrability explicitly, $|t|^je^{-c|t|^2/2}$ is bounded for each fixed $j$, by differentiation in $|t|$, and the remaining Gaussian is integrable by [F2]. Constants are uniform over $d\le4$ and $A$ in the displayed neighborhood of $I$. [step 5.1, F2, F5, algebra]

7.1 Outside the ball of step 6.1, both $\psi$ and the Gaussian comparator have unweighted integral $O_\gamma(\lambda^2)$ and weighted integral $O_\gamma(\lambda^2|v|)$. Indeed their global bounds are $e^{-c_\gamma|t|^2}$; extract $e^{-c_\gamma a_0^2/(2\lambda^2)}$ and integrate the remaining Gaussian, also with $|t\cdot v|$. The extracted exponential is smaller than any prescribed fixed power of $\lambda$ because $z^je^{-cz^2}$ is bounded. This is the same direct Gaussian tail argument as [F1], and uses no smoothness condition on a lattice law. Combining this with step 6.1 and the Fourier formula of step 2.1 gives, for the density $f_a$ of the further tilted $W$, $|f_a(b)-g_A|\le C_\gamma\lambda,\qquad \sup_y|\partial_v f_a(y)|\le\left(\sqrt{2/\pi}\,g_A\sqrt{v^TA^{-1}v}+C_\gamma\lambda|v|\right).$ The Gaussian integral in the derivative bound is exact: transform by $A^{1/2}$ and rotate $A^{-1/2}v$ onto the first coordinate; the standard Gaussian first absolute moment is $\sqrt{2/\pi}$, from $\int_0^\infty t e^{-t^2/2}dt=1$. [step 2.1, step 6.1, F1, F2, F3, F4, algebra]

8.1 The eigenvalue bounds in step 5.1 give $|\log\det A|\le C d\epsilon$ because $|\log(1+u)|\le2|u|$ for $|u|\le1/2$, by integrating $(1+u)^{-1}$. Thus $g_A$ is bounded above and away from zero, uniformly, and $\log(g_A/(2\pi)^{-d/2})=O(\lambda r)$. Step 7.1 and $|\log(1+u)|\le2|u|$ imply $f_a(b)>0$ and $\log\frac{f_a(b)}{(2\pi)^{-d/2}}=O_\gamma(\lambda(1+r)).$ We choose $c_\gamma$ small enough that all relative errors used here are at most $1/100$. [step 5.1, step 7.1, F4, algebra, choose]

9.1 The exact exponential tilt density identity is $f(y)=f_a(y)e^{L(a)-a\cdot y}$, where $f$ is the original density of $W$. It initially follows almost everywhere from the definition of the tilt; both sides are continuous by step 1.1, so it holds everywhere, since a continuous nonzero difference would be nonzero on a ball of positive Lebesgue measure. Step 3.1 and $|a-b|\le2\lambda r^2$ give $L(a)-a\cdot b=-r^2/2+O(\lambda r^3).$ Indeed $|a|^2/2-a\cdot b=-|b|^2/2+|a-b|^2/2$, whose error is $O(\lambda^2r^4)=O(\lambda r^3)$ because $\lambda r$ is small. Combining this identity with step 8.1 proves $|\log(f(b)/q_I(b))|\le C_\gamma\lambda(1+r^3)$. The constant Jacobian for whitening cancels in the density ratio, and $\lambda\le3\kappa$ gives the stated moderate deviation bound. [step 3.1, step 4.1, step 8.1, F4, algebra]

10.1 Differentiate the exact identity in step 9.1 in direction $b$ at $y=b$, keeping $a$ fixed. It gives $\partial_b\log f(b)=(\partial_bf_a(b))/f_a(b)-a\cdot b$. By step 7.1, step 8.1, and $A=I+O(\lambda r)$, reduce $c_\gamma$ further so that $|\partial_bf_a(b)|/f_a(b)\le1.4r$; this is possible because its limiting coefficient is $\sqrt{2/\pi}<1$, the error is $O_\gamma(\lambda)$, and $A$ tends uniformly to $I$ as $\lambda r\to0$. Also step 4.1 gives $a\cdot b\ge r^2-2\lambda r^3\ge.99r^2$ after the same reduction. Hence $\partial_b\log f(b)\le1.4r-.99r^2\le-r^2/2$ for $r\ge7$. Whitening identifies this derivative with the derivative in direction $x$ in the Statement. [step 4.1, step 5.1, step 7.1, step 8.1, step 9.1, algebra, choose]

11.1 There are only finitely many smallness requirements above: bounds on $\kappa$, $\lambda r$, $\epsilon$, and fixed multiples depending only on $\gamma$ of $\lambda$. Since $\lambda\le3\kappa$, one sufficiently small positive $c_\gamma$ enforces all of them whenever $\kappa\le c_\gamma$ and $\kappa r\le c_\gamma$. All constants are uniform over dimensions one through four. Apply the same argument to a row isometry image using [F1]; its Gaussian component retains the same covariance lower bound, and every step applies in its own coordinates. This proves the remaining assertions. [step 2.2, step 9.1, step 10.1, F1, choose] ∎
