---
id: thm-tdmath-regular-collision-entropy
kind: theorem
title: "Conditional Boltzmann entropy inequality and equality form"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps: ["def-tdmath-elastic-collision-kernel","def-integrable-real-and-complex-functions-and-their-integrals","def-lebesgue-measure-and-the-lebesgue-sigma-algebra","def-product-measure-on-sigma-finite-spaces","thm-chain-rule","cor-mean-value-theorem","thm-dominated-convergence","thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces","thm-logarithm-derivative-and-integral","thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique","thm-tonelli-theorem-for-sigma-finite-product-spaces"]
justified_by: []
dependency_roles: {"def-tdmath-elastic-collision-kernel":"mathematical-premise","def-integrable-real-and-complex-functions-and-their-integrals":"mathematical-premise","def-lebesgue-measure-and-the-lebesgue-sigma-algebra":"mathematical-premise","def-product-measure-on-sigma-finite-spaces":"mathematical-premise","thm-chain-rule":"mathematical-premise","cor-mean-value-theorem":"mathematical-premise","thm-dominated-convergence":"mathematical-premise","thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces":"mathematical-premise","thm-logarithm-derivative-and-integral":"mathematical-premise","thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique":"mathematical-premise","thm-tonelli-theorem-for-sigma-finite-product-spaces":"mathematical-premise"}
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "David Tong, Kinetic Theory, Part 2"
      url: https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf
      locator: "Complete 39-page lecture-note part retrieved and read; §2.1, pp.14–16, Liouville phase-space volume; §§2.2–2.3, pp.20–35, Boltzmann equation and H-theorem."
    - title: "R. Fitzpatrick, Plasma Physics, Boltzmann H-Theorem"
      url: https://farside.ph.utexas.edu/teaching/plasma/lectures1/node40.html
      locator: "Complete author-hosted HTML section read; equations (3.123)–(3.144), collision production, detailed balance, and Maxwellian form."
---

## Statement

Fix periods $L_1,\ldots,L_d>0$, let $\Omega=\prod_{j=1}^d(\mathbb R/L_j\mathbb Z)$ with quotient Lebesgue measure $dr$, let $d\ge2$, and let $I\subset\mathbb R$ be an open time interval. Suppose $f:\Omega\times\mathbb R^d\times I\to(0,\infty)$ is $C^1$ in space and time and $C^2$ in velocity. Fix a positive constant reference density $f_{\rm ref}$ with the same units as $f$, and put $\ell(r,v,t)=\log(f(r,v,t)/f_{\rm ref})$. For each $t\in I$, assume $f$, $f|v|^2$, and $f|\ell|$ are integrable over $\Omega\times\mathbb R^d$. For every compact interval $I_0\subset I$, assume there is a nonnegative $G_{I_0}\in L^1(\Omega\times\mathbb R^d,dr\,dv)$ such that $|(1+\ell)\partial_t f|\le G_{I_0}$ almost everywhere for every $t\in I_0$. Also assume $(1+|\ell|)|v\cdot\nabla_r f|\in L^1(\Omega\times\mathbb R^d,dr\,dv)$ for each $t\in I$. Write $A=f(r,v,t)f(r,w,t)$ and $B=f(r,v',t)f(r,w',t)$. For each $t\in I$, assume $r\mapsto\int_{Q_{\rm el}}|(A-B)(\ell(r,v,t)+\ell(r,w,t)-\ell(r,v',t)-\ell(r,w',t))|\,d\nu$ is measurable and belongs to $L^1(\Omega,dr)$. Let $Q$ and the symmetric collision measure $\nu$ satisfy the weak identity in [[def-tdmath-elastic-collision-kernel]] for tests $1$ and $\ell(r,\cdot,t)$ at each $(r,t)$, with absolute convergence, and suppose
$$\partial_t f+v\cdot\nabla_r f=Q(f).$$
Then for $H[f](t)=\int_\Omega\int_{\mathbb R^d}f\ell\,dv\,dr$,
$$\frac{d}{dt}H[f](t)=-\frac14\int_\Omega\int_{Q_{\rm el}}(A-B)\log(A/B)\,d\nu\,dr\le0.$$
The integrand is nonnegative because $\log$ is strictly increasing. Equality in the entropy-production integral holds exactly when $A=B$ for $\nu$-almost every collision at almost every $r$. Under the additional assumptions that $\nu$ is locally finite, has full support on $Q_{\rm el}$, and $f$ is positive and $C^2$ in $v$, this balance implies for almost every $r$ that
$$\log(f(r,v,t)/f_{\rm ref})=\alpha(r,t)+b(r,t)\cdot v+\frac{\lambda(r,t)}2|v|^2.$$
If $f(r,\cdot,t)$ is integrable over $\mathbb R^d$, then $\lambda(r,t)<0$, so its velocity profile is Maxwellian. Conversely, every profile of this form has zero collision entropy production. The weak collision identity is an explicit model hypothesis; this is not a derivation from reversible many-particle mechanics or a PDE existence theorem.

## Facts & Assumptions

**Given:** The regular positive solution, the elastic collision identities, and the adopted symmetric weak collision model.

[A1] $d\ge2$, $\Omega=\prod_j(\mathbb R/L_j\mathbb Z)$ has its quotient Lebesgue measure, $f>0$ has the stated $C^1_{r,t}$ and $C^2_v$ regularity, and $f_{\rm ref}>0$ is a constant reference with matching units.

[A2] The displayed moments and entropy are integrable. On each compact time interval a common $L^1(dr\,dv)$ majorant bounds $|(1+\ell)\partial_t f|$; for each time, $(1+|\ell|)|v\cdot\nabla_r f|$ is integrable. The weak collision identity is absolutely convergent for tests $1$ and $\ell$, and the nonnegative entropy-production integrand has a measurable spatial integral in $L^1(dr)$ at each time.

[A3] For the equality characterization only, $\nu$ is locally finite with full support on the elastic collision set; velocity integrability holds for almost every spatial point.

[F1] [[def-tdmath-elastic-collision-kernel]]: collisions conserve pair momentum and squared speed; the adopted weak identity has factor $1/4$ and is symmetric under incoming/outgoing and particle exchange.

[F2] [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]], [[def-product-measure-on-sigma-finite-spaces]], [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]], and [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]: the spatial and velocity Lebesgue factors are sigma-finite, so their product integrals and absolutely convergent rearrangements are legitimate. These product-measure suppliers are not applied to the arbitrary collision measure $\nu$; collision integration is performed first at each fixed spatial point.

[F3] [[thm-dominated-convergence]]: the stated integrable envelope permits differentiation of the entropy integral by dominated convergence.

[F4] [[thm-chain-rule]]: derivatives of $f\log(f/f_{\rm ref})$ are $(1+\log(f/f_{\rm ref}))\,df$.

[F5] [[thm-logarithm-derivative-and-integral]] and [[cor-mean-value-theorem]]: $\log$ is strictly increasing on positive reals.

## Proof



**Given:** [A1]–[A3] and the weak identity and integration interfaces [F1]–[F5].

1.1 For a fixed time, write $\ell=\log(f/f_{\rm ref})$. By [F3]–[F4], dominated differentiation gives $$\frac{dH}{dt}=\int_\Omega\int_{\mathbb R^d}(1+\ell)\,\partial_t f\,dv\,dr.$$ Substitute the transport equation. The spatial contribution is $$-\int_\Omega\int_{\mathbb R^d}(1+\ell)\,v\cdot\nabla_r f\,dv\,dr =-\int_\Omega\int_{\mathbb R^d}v\cdot\nabla_r(f\ell)\,dv\,dr.$$ For each fixed $v$, the integral of each coordinate derivative over the periodic rectangle is zero by the one-dimensional fundamental theorem of calculus and opposite-face identification; absolute integrability in [A2] permits Fubini [F2]. Thus the transport contribution vanishes. [A1, A2, F2, F3, F4, algebra]

2.1 The weak identity with test $1$ has zero bracket on every elastic collision, so $\int Q(f)\,dv=0$ at each $r,t$. Consequently the collision contribution from $(1+\ell)Q(f)$ equals that from $\ell Q(f)$. Apply the weak identity with $\varphi=\ell(r,\cdot,t)$ at fixed $(r,t)$. Since $f_{\rm ref}$ is constant, the sum $\ell(v)+\ell(w)-\ell(v')-\ell(w')$ is $\log(A/B)$. Hence $$\int \ell(v)Q(f)(v)\,dv=\frac14\int_{Q_{\rm el}}(B-A)\log(A/B)\,d\nu.$$ The velocity-side function is measurable in $(r,v)$ because $Q(f)=\partial_t f+v\cdot\nabla_r f$ and $f>0$ have the stated regularity. Integration of its positive and negative parts over the sigma-finite Lebesgue velocity factor gives a measurable function of $r$; the weak identity makes that function equal to the collision integral at each $(r,t)$. By [A2] this collision integral is in $L^1(\Omega,dr)$, so integrate the identity in $r$ to obtain the asserted derivative formula. no collision/spatial product measure or interchange of $\nu$ with spatial Lebesgue measure is used. [A1, A2, F1, F2, step 1.1]

3.1 For positive $A,B$, strict increase of $\log$ [F5] makes $(A-B)\log(A/B)\ge0$, with equality exactly when $A=B$. The derivative in step 2.1 is therefore nonpositive. Let $g(r)$ be the nonnegative inner collision integral; it is measurable and integrable by [A2] and step 2.1. If $\int_\Omega g(r)\,dr=0$, then $g(r)=0$ for Lebesgue-almost every $r$. For each such $r$, a nonnegative function with zero $\nu$-integral vanishes $\nu$-almost everywhere: its sets where the value is at least $1/n$ all have $\nu$-measure zero, and their countable union contains its positive set. This argument holds for an arbitrary measure, with no sigma-finiteness hypothesis. Thus $A=B$ for $\nu$-almost every collision at almost every $r$. The converse follows by substitution in the derivative identity. [A2, F2, F5, step 2.1, algebra]

4.1 Under [A3], fix an $r$ for which collision balance holds $\nu$-almost everywhere. The function $(v,w,v',w')\mapsto A-B$ is continuous. If it were nonzero at an allowed collision, it would remain nonzero on a relative open neighborhood; full support of $\nu$ gives that neighborhood positive measure, contradicting balance. Hence balance holds for every elastic collision. The set of such $r$ has full Lebesgue measure and is dense in $\Omega$; continuity in $r$ extends the identity to any limit point when needed. [A1, A3, F1, step 3.1, algebra]

5.1 Fix such an $r$ and put $g(v)=\log(f(r,v,t)/f_{\rm ref})$. For any $a,u\in\mathbb R^d$ and any orthogonal rotation $R$, the pairs $(a+u,a-u)$ and $(a+Ru,a-Ru)$ have the same total momentum $2a$ and total squared speed $2|a|^2+2|u|^2$. Step 4.1 therefore gives $$g(a+u)+g(a-u)=g(a+Ru)+g(a-Ru).$$ For unit vectors $\theta,\eta$, put $u=s\theta$ and $R\theta=\eta$. The second-order Taylor expansion at $a$ gives $$g(a+s\theta)+g(a-s\theta)=2g(a)+s^2\theta^\top D^2g(a)\theta+o(s^2).$$ Equating the expansion for $\eta$, dividing by $s^2$ and sending $s\to0$ shows that the quadratic form of the symmetric Hessian is constant on the unit sphere. Testing coordinate vectors makes all diagonal entries equal; testing $(e_i+e_j)/\sqrt2$ makes each off-diagonal entry zero. Thus $D^2g(a)=\lambda(a)I$. [A1, A3, step 4.1, algebra]

6.1 Since $\partial_{ij}g=0$ for $i\ne j$, the fundamental theorem of calculus along coordinate segments shows $\partial_i g(v)$ depends only on $v_i$. Write it as $G_i(v_i)$. The diagonal Hessian equalities give $G_i'(v_i)=G_j'(v_j)$ for every pair of independent real coordinates $v_i,v_j$. Because $d\ge2$, varying these coordinates independently forces all these derivatives to be one constant $\lambda$. Integrating each first derivative gives $g(v)=\alpha+b\cdot v+\lambda|v|^2/2$. [A1, step 5.1, algebra]

7.1 If $\lambda>0$, $e^{g(v)}$ grows quadratically in every sufficiently large direction and is not integrable. If $\lambda=0$, $e^{\alpha+b\cdot v}$ is constant when $b=0$ and grows on a half-line when $b\ne0$, so it is not integrable over $\mathbb R^d$. Thus integrability forces $\lambda<0$. Completing the square writes $f(r,v,t)=C(r,t)\exp[-c(r,t)|v-u(r,t)|^2]$ for $C,c>0$, the Maxwellian velocity form. Conversely, when $g=\alpha+b\cdot v+\lambda|v|^2/2$, the sum $g(v)+g(w)$ is unchanged by every collision because total momentum and total squared speed are conserved; hence $A=B$ and the production is zero. This equality branch concerns the collision term only; a spatially varying Maxwellian may still evolve under transport. [A1, A3, F1, step 6.1, algebra] ∎
