---
id: thm-csm-dk-regular-collision-h-and-equality
kind: theorem
title: "H theorem and Maxwellian equality for the regular cutoff model"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 4
deps:
  - def-csm-dk-reflection-collision-gain
  - lem-csm-dk-reflection-measure-and-gain-identities
  - lem-csm-dk-gaussian-mixture-regularity
  - thm-csm-dk-global-cutoff-collision-evolution
  - def-countable-choice
  - thm-dominated-convergence
  - thm-gaussian-integral
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
dependency_roles:
  def-csm-dk-reflection-collision-gain: mathematical-premise
  lem-csm-dk-reflection-measure-and-gain-identities: mathematical-premise
  lem-csm-dk-gaussian-mixture-regularity: mathematical-premise
  thm-csm-dk-global-cutoff-collision-evolution: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-gaussian-integral: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "David Tong, Kinetic Theory, Part 2"
      url: "https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf"
    - title: "R. Fitzpatrick, Plasma Physics, Boltzmann H-Theorem"
      url: "https://farside.ph.utexas.edu/teaching/plasma/lectures1/node40.html"
---

## Statement

Assume $\mathrm{AC}_\omega$, $v_0>0$, $\lambda>0$, $u\in\mathbb R^3$, and positive velocity-squared parameters $0<a<b$. Let

$$f_0(v)=\tfrac12\gamma_{aI,u}(v)+\tfrac12\gamma_{bI,u}(v),$$

and let $f_t$ be its global solution from [[thm-csm-dk-global-cutoff-collision-evolution]]. Define the dimensionless one-particle functional

$$H(t):=\int_{\mathbb R^3}f_t(v)\log(v_0^3f_t(v))\,dv.$$

For every $t\ge0$, $H$ is finite and continuously differentiable, and with $A=f_t(v)f_t(w)$ and $B=f_t(v')f_t(w')$,

$$H'(t)=-\frac{\lambda}{4}\int_{\mathbb R^3\times\mathbb R^3\times S^2}(B-A)\log(B/A)\,d\mu\le0.$$

The integrand is nonnegative. Equality holds at a time $t$ exactly when $f_t$ is a normalized isotropic Gaussian

$$f_t(v)=(2\pi s^2)^{-3/2}\exp\!\left(-\frac{|v-\bar u|^2}{2s^2}\right)$$

for some $\bar u\in\mathbb R^3$ and $s>0$; every such Gaussian is stationary. The specified initial mixture is not a single Gaussian, so $H'(0)<0$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $v_0>0$, $\lambda>0$, $u\in\mathbb R^3$, $0<a<b$, and the initial density and collision map of the Statement.

[A1] Assume the Axiom of Countable Choice ([[def-countable-choice]]) for the completed Lebesgue measure and change-of-variables suppliers.

[F1] [[def-csm-dk-reflection-collision-gain]]: the gain uses the velocities $v',w'$ and parameter measure $d\mu=dv\,dw\,d\sigma(n)$, with $v_0>0$ in the weighted space.

[F2] [[lem-csm-dk-reflection-measure-and-gain-identities]]: for normalized $f$, the weak identity applies when each of $\int|\varphi|\mathcal G(f,f)\,dv$, $\int|\varphi|f\,dv$, $\int|A\Delta\varphi|\,d\mu$, and $\int|B\Delta\varphi|\,d\mu$ is finite; the reflection is an involution and the parameter measure has full support.

[F3] [[lem-csm-dk-gaussian-mixture-regularity]]: the mixture class is preserved by gain and has uniform positive lower, upper, and derivative Gaussian bounds.

[F4] [[thm-csm-dk-global-cutoff-collision-evolution]]: every stated mass-one finite-energy initial density has a unique global mild solution; it conserves mass, first moment and second moment, and for data in $\mathcal M_{u,a,b}$ it remains in that class with pointwise $C^1$ evolution satisfying $\partial_t f=\lambda(\mathcal G(f,f)-f)$.

[F5] [[thm-dominated-convergence]]: an integrable majorant permits passage of limits through the Lebesgue integral.

[F6] [[thm-gaussian-integral]]: $\int_{\mathbb R}e^{-x^2}\,dx=\sqrt\pi$.

[F7] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: nonnegative measurable functions on sigma-finite products may be integrated iteratively.

## Proof

**Given:** [A1], $v_0>0$, $\lambda>0$, $0<a<b$, the specified $f_0$, and [F1]–[F7].

**Proof technique:** direct.

1.1 The bounds in [F3] give constants $c,C>0$ such that $c e^{-|v-u|^2/(2a)}\le f_t(v)\le C e^{-|v-u|^2/(2b)}$ for all $t,v$. The same upper Gaussian envelope holds for $\mathcal G(f_t,f_t)$ because [F3] preserves the mixture class; [F4] therefore bounds $|\partial_t f_t|$ by a constant times that envelope. The lower and upper bounds imply $|\log(v_0^3f_t(v))|\le C_1(1+|v-u|^2)$, after changing the finite constant $C_1$. Thus $f_t|\log(v_0^3f_t)|$ is integrable and the entropy derivative integrand has an integrable polynomial-Gaussian majorant on every compact time interval. [F3, F4, algebra]

2.1 For each fixed $v$, the ordinary chain rule gives $\partial_t[f_t\log(v_0^3f_t)]=(1+\log(v_0^3f_t))\partial_t f_t$. The uniform majorant from step 1.1 also bounds the difference quotients by the scalar mean-value theorem. Dominated convergence [F5] therefore gives $H'(t)=\int(1+\log(v_0^3f_t))\partial_t f_t\,dv$. The mass of $f_t$ is constant by [F4], so $\int\partial_t f_t\,dv=0$ and the constant term drops. The integrand in the resulting formula is pointwise continuous in time by [F4] and has the same local integrable majorant from step 1.1; a second application of [F5] shows that $H'(t)$ is continuous. [F4, F5, step 1.1, algebra]

3.1 Fix $t$ and write $\varphi(v)=\log(v_0^3f_t(v))$. The lower Gaussian bound makes $\varphi$ finite. The mean of $f_t$ is still $u$ by the moment conservation in [F4]. Also $A,B$ are bounded above by a constant times $e^{-(|v-u|^2+|w-u|^2)/(2b)}$, because the pair reflection fixes the common mean $(u,u)$ and preserves the sum of the two centered squared speeds. The Gaussian lower bound gives $|\log(A/B)|\le C_2(1+|v-u|^2+|w-u|^2)$. The same Gaussian upper bound holds for $\mathcal G(f_t,f_t)$ by [F3], so $\int|\varphi|f_t\,dv$ and $\int|\varphi|\mathcal G(f_t,f_t)\,dv$ are finite; the pair bound and polynomial bound on $\Delta\varphi$ give $\int|A\Delta\varphi|\,d\mu$ and $\int|B\Delta\varphi|\,d\mu$ finite. Thus the four conditions in [F2] hold. By [F2] and [F4],
$$H'(t)=\frac{\lambda}{4}\int(B-A)\Delta\varphi\,d\mu.$$
The reference factors cancel in the logarithm: $\Delta\varphi=\log(A/B)$. Hence $H'(t)=-\frac{\lambda}{4}\int(B-A)\log(B/A)\,d\mu$. Since $\log$ is strictly increasing, $(B-A)\log(B/A)\ge0$, proving the inequality. [A1, F1, F2, F3, F4, step 2.1, algebra]

4.1 If $H'(t)=0$, the continuous nonnegative integrand in step 3.1 vanishes $\mu$-almost everywhere. The product measure has full support by [F2]; a continuous function nonzero at one point is bounded away from zero on a nonempty open neighborhood of positive measure. Thus $A=B$ for every $(v,w,n)$. Conversely, this pointwise identity makes the production integral zero. [A1, F2, step 3.1, algebra]

5.1 Put $g(v)=\log(v_0^3f_t(v))$, a $C^2$ function by [F3]. By the reflection coverage in [F2], for every center $c\in\mathbb R^3$ and every pair $r,r'\in\mathbb R^3$ with $|r|=|r'|$, the equality in step 4.1 gives $g(c+r)+g(c-r)=g(c+r')+g(c-r')$. For unit vectors $\theta,\eta$, take $r=s\theta$ and $r'=s\eta$. Taylor expansion at $c$ yields $g(c+s\theta)+g(c-s\theta)=2g(c)+s^2\theta^{\mathsf T}D^2g(c)\theta+o(s^2)$, with the same expression for $\eta$. Dividing by $s^2$ and taking $s\to0$ shows that the quadratic form of $D^2g(c)$ is constant on the unit sphere. Testing $e_i$ and $(e_i+e_j)/\sqrt2$ shows $D^2g(c)=\alpha(c)I$. [A1, F2, F3, step 4.1, algebra]

6.1 The off-diagonal Hessian entries vanish, so for each $i$, $\partial_i g$ depends only on its $i$th coordinate: changing any other coordinate leaves it fixed by the fundamental theorem of calculus along that coordinate segment. Write $\partial_i g(v)=G_i(v_i)$. The equal diagonal entries give $G_i'(v_i)=G_j'(v_j)$ for independently variable coordinates $v_i,v_j$; hence every such derivative is one constant $\alpha$. Integrating gives $g(v)=c_0+\beta\cdot v+\frac{\alpha}{2}|v|^2$. [step 5.1, algebra]

7.1 Integrability of $f_t=e^{g}/v_0^3$ forces $\alpha<0$: if $\alpha>0$ the density grows in every sufficiently large direction, and if $\alpha=0$ an exponential of an affine function is nonintegrable on $\mathbb R^3$. Completing the square writes $f_t=C e^{-|v-\bar u|^2/(2s^2)}$ with $s^2=-1/\alpha>0$; Tonelli [F7] and the one-dimensional Gaussian integral [F6] give $\int e^{-|v-\bar u|^2/(2s^2)}dv=(2\pi s^2)^{3/2}$, so unit mass fixes the prefactor in the Statement. Conversely, for that Gaussian $\log f_t$ is a constant plus a linear function of $v$ and a scalar multiple of $|v|^2$; pair momentum and squared-speed conservation in [F2] give $A=B$ at every collision. Define $\operatorname{sgn}(x)=1,0,-1$ according as $x>0,x=0,x<0$, and set $\varphi=\operatorname{sgn}(\mathcal G(f_t,f_t)-f_t)$. This test is bounded and measurable; since $\int A\,d\mu=\int B\,d\mu=1$, both sides of the weak identity are absolutely integrable. Applying [F2] gives $\|\mathcal G(f_t,f_t)-f_t\|_1=0$. The constant curve satisfies the mild equation because $e^{-\lambda t}+\lambda\int_0^t e^{-\lambda(t-s)}ds=1$, and uniqueness in [F4] makes this Gaussian stationary. [A1, F1, F2, F3, F4, F6, F7, step 6.1, algebra]

8.1 The density formula in [F3] factors for $aI$ and $bI$ into products of one-dimensional Gaussians; Tonelli [F7] and normalization [F6] give the first-coordinate marginal as their equal mixture. For a centered one-dimensional Gaussian of variance $s^2$, integration of the derivative of $x^{2k-1}e^{-x^2/(2s^2)}$ over $\mathbb R$ gives $\int x^{2k}e^{-x^2/(2s^2)}dx=(2k-1)s^2\int x^{2k-2}e^{-x^2/(2s^2)}dx$ for $k=1,2$; the boundary terms vanish by Gaussian decay. Thus the mixture's centered second moment is $(a+b)/2$ and its fourth moment is $3(a^2+b^2)/2$. A single Gaussian with the same second moment has fourth moment $3((a+b)/2)^2$, smaller by $3(a-b)^2/4>0$. Thus $f_0$ is not a single Gaussian. By the equality characterization in steps 4.1–7.1, the production at $t=0$ is strictly positive and $H'(0)<0$. [F3, F6, F7, step 4.1, step 7.1, algebra] ∎
