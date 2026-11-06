---
id: lem-string-complex-euler-beta-integral
kind: lemma
title: Complex Euler beta integral for a four-point sphere correlator
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
category: string-theory
library: physics
dependency_level: 0
domain: mathematics
deps:
  - def-euler-gamma-function
  - thm-beta-gamma-identity
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-gaussian-integral
  - thm-gamma-meromorphic-continuation
  - cor-gamma-function-has-no-zeros
dependency_roles:
  def-euler-gamma-function: mathematical-premise
  thm-beta-gamma-identity: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-gaussian-integral: mathematical-premise
  thm-gamma-meromorphic-continuation: mathematical-premise
  cor-gamma-function-has-no-zeros: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "David Tong, String Theory, Cambridge Part III notes"
      url: "https://www.damtp.cam.ac.uk/user/tong/string/string.pdf"
      locator: "§6.2.2, printed pp. 139–144; complex-plane integral, convergence region, and Virasoro–Shapiro Gamma ratio. The integral identity is proved locally here."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

For $a,b\in\mathbb C$ with $\operatorname{Re}a>0$, $\operatorname{Re}b>0$, and $\operatorname{Re}(a+b)<1$, use $d\mu(z)=2\,d(\operatorname{Re}z)\,d(\operatorname{Im}z)$ and the real logarithm of $|z|$ to define
$$I(a,b)=\int_{\mathbb C}|z|^{2a-2}|1-z|^{2b-2}\,d\mu(z).$$
The integral is absolutely convergent and
$$I(a,b)=2\pi\,\frac{\Gamma(a)\Gamma(b)\Gamma(1-a-b)}{\Gamma(1-a)\Gamma(1-b)\Gamma(a+b)}.$$
The right side gives the meromorphic continuation of this integral in $(a,b)$; it does not prescribe a physical pole contour.

## Facts & Assumptions

**Given:** The stated open convergence domain. Powers mean $|z|^{2a-2}=\exp((2a-2)\log|z|)$ for $z\ne0$, and the analogous convention is used at $z=1$.

[F1] [[def-euler-gamma-function]]: for $\operatorname{Re}w>0$, $\Gamma(w)=\int_0^\infty t^{w-1}e^{-t}\,dt$.

[F2] [[thm-beta-gamma-identity]]: for positive real parts, $B(u,v)=\Gamma(u)\Gamma(v)/\Gamma(u+v)$, with $B(u,v)=\int_0^1t^{u-1}(1-t)^{v-1}dt$.

[F3] [[thm-gaussian-integral]] and [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]: the translated two-dimensional Gaussian integral is $\int_{\mathbb C}e^{-\lambda|z-z_0|^2}dxdy=\pi/\lambda$ for $\lambda>0$, by the one-dimensional Gaussian integral and product Fubini.

[F4] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: nonnegative integrands may be integrated in either order; the corresponding complex integrals may be exchanged once absolute integrability is established.

[F5] [[thm-gamma-meromorphic-continuation]] and [[cor-gamma-function-has-no-zeros]]: $\Gamma$ is meromorphic and has no zeros, so the displayed quotient is meromorphic.

## Proof

1.1 Set $\alpha=1-a$ and $\beta=1-b$. The hypotheses imply $\operatorname{Re}\alpha,\operatorname{Re}\beta>0$ and $\operatorname{Re}(\alpha+\beta-1)>0$. To check absolute convergence, on $|z|\le\tfrac12$ the factor involving $|1-z|$ is bounded and the integrand is $O(|z|^{2\operatorname{Re}a-2})$, whose planar integral is finite because $\operatorname{Re}a>0$. The same argument on $|1-z|\le\tfrac12$ uses $\operatorname{Re}b>0$. For $|z|\ge2$, $|1-z|$ and $|z|$ are comparable, so the integrand is $O(|z|^{2\operatorname{Re}(a+b)-4})$; its planar tail is finite because $\operatorname{Re}(a+b)<1$. It is bounded on the remaining compact region. For $z\ne0$, the substitution $u=x|z|^2$ in [F1] gives
$$|z|^{2a-2}=\frac1{\Gamma(1-a)}\int_0^\infty x^{-a}e^{-x|z|^2}\,dx,$$
and the same formula with $b$ and $|1-z|$ holds away from $z=1$. The two exceptional points have planar measure zero. The integral of the absolute double Schwinger kernel over $x,y,z$ is a finite constant times $I(\operatorname{Re}a,\operatorname{Re}b)$, since integrating first in $x$ and $y$ gives the displayed real power factors multiplied by $\Gamma(1-\operatorname{Re}a)\Gamma(1-\operatorname{Re}b)$. The bounds above make this finite, so [F4] permits inserting both representations and exchanging the $x,y,z$ integrations. [given, F1, F4, algebra]

2.1 Completing the square gives $x|z|^2+y|1-z|^2=(x+y)|z-y/(x+y)|^2+xy/(x+y)$. By [F3], integration over $z$ contributes $2\pi(x+y)^{-1}e^{-xy/(x+y)}$ for the declared measure $d\mu$. Put $\lambda=x+y$ and $t=x/(x+y)$; the Jacobian is $dx\,dy=\lambda\,d\lambda\,dt$. The remaining integral is
$$\frac{2\pi}{\Gamma(1-a)\Gamma(1-b)}\int_0^1t^{-a}(1-t)^{-b}\int_0^\infty\lambda^{-a-b}e^{-\lambda t(1-t)}d\lambda\,dt.$$
Using [F1] on the inner integral yields $\Gamma(1-a-b)[t(1-t)]^{a+b-1}$. [F1, F3, step 1.1, algebra]

3.1 The resulting $t$ integral is $B(b,a)$ because its integrand is $t^{b-1}(1-t)^{a-1}$. Applying [F2] gives the displayed Gamma quotient on the stated convergence domain. [F2, step 2.1, algebra]

4.1 Fix any $(a_0,b_0)$ in that domain and choose $\rho>0$ with $\operatorname{Re}a_0-\rho>0$, $\operatorname{Re}b_0-\rho>0$, and $\operatorname{Re}(a_0+b_0)+2\rho<1$. For $|a-a_0|,|b-b_0|<\rho$, expand the integrand as its value at $(a_0,b_0)$ times $\exp(2(a-a_0)\log|z|+2(b-b_0)\log|1-z|)$. The absolute sum of this double power series is bounded near $0$ by $C|z|^{2(\operatorname{Re}a_0-\rho)-2}$, near $1$ by $C|1-z|^{2(\operatorname{Re}b_0-\rho)-2}$, and at infinity by $C|z|^{2(\operatorname{Re}(a_0+b_0)+2\rho)-4}$; each is integrable in the respective planar region by the strict inequalities. Thus Tonelli/Fubini [F4] permits integrating the power series term by term, yielding a convergent local power series for $I(a,b)$, so $I$ is holomorphic throughout the convergence domain. By [F5] the displayed quotient is meromorphic on $\mathbb C^2$ and, by [F2]–[F3], agrees with $I$ on that domain; it is therefore a meromorphic continuation. [F2, F3, F4, F5, step 3.1, algebra] ∎
## Remarks

The factor $2\pi$ is tied to $d\mu=2dxdy$. With ordinary Lebesgue area $dxdy$, the right side has coefficient $\pi$. This is a mathematical integral identity; a string amplitude still needs its vertex, gauge-fixing, normalization, and causal-continuation conventions.
