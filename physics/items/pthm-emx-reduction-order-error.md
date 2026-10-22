---
id: pthm-emx-reduction-order-error
kind: physics-theorem
title: "First-order reduction of order with an explicit residual and error bound"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 2
deps:
  - cor-exponential-reciprocal-and-positivity
  - cor-mean-value-theorem
  - def-real-exponential-function-and-e
  - pthm-emx-runaway-preacceleration
  - thm-algebra-of-derivatives
  - thm-chain-rule
  - thm-continuous-implies-integrable
  - thm-derivative-of-exponential
  - thm-ftc-first-part
  - thm-linearity-of-the-integral
  - thm-monotonicity-of-the-integral
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
dependency_roles:
  cor-exponential-reciprocal-and-positivity: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  pthm-emx-runaway-preacceleration: physical-result
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-ftc-first-part: mathematical-premise
  thm-linearity-of-the-integral: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "Exact residual and an absolute acceleration-error bound for the first-order reduction of order of the adopted prescribed-force ODE, on the unique bounded-future branch and for bounded twice continuously differentiable forces with bounded second derivative. The result is conditional on the effective model; it is not a bound for nonlinear self-consistent Maxwell–Lorentz trajectories, and it gives no experimental validation."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "Fritz Rohrlich, The Dynamics of a Charged Particle, arXiv:0804.4614 (complete 11-page full-text paper)"
      url: "https://arxiv.org/pdf/0804.4614"
      locator: "Section 2, PDF pp. 4–6, equations (3a), (5a) and the first-order-in-$\\tau_0$ discussion: the nonrelativistic reduction-of-order form and its slow-force restriction. The exact residual and uniform bound here are proved locally."
    - title: "Jack Vanderlinde, Classical Electromagnetic Theory, Fundamental Theories of Physics, Springer (2004), complete 426-page book PDF"
      url: "https://eva.fcien.udelar.edu.uy/pluginfile.php/220397/mod_page/content/2/Classical%20Electromagnetic%20Theory%20%28Fundamental%20Theories%20of%20Physics%29%20-%20Jack%20Vanderlinde%20%282004%29.pdf"
      locator: "Chapter 12, §§12.3–12.4, printed pp. 335–339 (PDF pp. 342–346): the Abraham–Lorentz coefficient, the mass-renormalized ODE, and its future-boundary solution. The item independently proves an explicit second-derivative error bound for the prescribed-force model."
---

## Statement

Assume the equation and bounded-force hypotheses of the preceding theorem: $m,\tau>0$, $f:\mathbb R\to\mathbb R^3$ is bounded and twice continuously differentiable, and the unique bounded-future solution $a_*$ is used. Suppose

$$M_2:=\sup_{t\in\mathbb R}|f''(t)|<\infty.$$

Since $f$ has units $\mathrm N$ and $t$ has units $\mathrm s$, $M_2$ has units $\mathrm{N\,s^{-2}}$.

Define the first-order reduction-of-order approximation by

$$a_{\mathrm{RO}}(t):=\frac{f(t)+\tau f'(t)}{m}.$$

Its residual when substituted into the adopted equation is exactly

$$m\bigl(a_{\mathrm{RO}}(t)-\tau a_{\mathrm{RO}}'(t)\bigr)-f(t)=-\tau^2 f''(t).$$

On the bounded-future branch the acceleration error obeys

$$|a_*(t)-a_{\mathrm{RO}}(t)|\le\frac{\tau^2 M_2}{m}\qquad(t\in\mathbb R).$$

The residual and bound are exact conditional statements about the prescribed-force ODE; they do not assert that a nonlinear self-consistent particle trajectory is approximated by $a_{\mathrm{RO}}$.

## Statement references

[[pthm-emx-runaway-preacceleration]]

[[thm-algebra-of-derivatives]]

[[thm-chain-rule]]

[[thm-ftc-first-part]]

[[thm-cauchy-schwarz-and-the-euclidean-norm]]

## Facts & Assumptions

**Given:** The adopted equation, constants and bounded-future branch of the preceding theorem, with $f\in C^2(\mathbb R,\mathbb R^3)$ bounded and $M_2<\infty$.

[F1] For every bounded continuous $f$, the preceding theorem gives $a_*(t)=(m\tau)^{-1}\int_0^\infty\exp(-v/\tau)f(t+v)\,dv$; the integral converges componentwise and this solution is the unique one bounded on a future half-line. ([[pthm-emx-runaway-preacceleration]])

[A1] The force and constants satisfy the preceding theorem's bounded-force hypotheses; additionally $f$ is twice continuously differentiable and $|f''(t)|\le M_2$ for all $t$. ([[pthm-emx-runaway-preacceleration]])

[F2] The chain and product rules apply to $\exp(-v/\tau)f(t+v)$; the real exponential has derivative $\exp$; the first fundamental theorem evaluates integrals of continuous functions on finite intervals. ([[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[thm-derivative-of-exponential]], [[thm-ftc-first-part]])

[F3] The mean value theorem bounds each component of $f'$ by its value at one point plus $M_2$ times the time increment. For $x\ge0$, the exponential power series gives $\exp(x)\ge1+x+x^2/2$, and $\exp(-x)=1/\exp(x)$, so both $\exp(-x)$ and $x\exp(-x)$ tend to zero. ([[cor-mean-value-theorem]], [[def-real-exponential-function-and-e]], [[cor-exponential-reciprocal-and-positivity]])

[F4] Riemann integration on finite intervals is linear and monotone; $\int_0^\infty\exp(-v/\tau)\,dv=\tau$. For a scalar integrand $h$ with $|h(v)|\le M\exp(-v/\tau)$, monotonicity applied to $-M\exp(-v/\tau)\le h(v)\le M\exp(-v/\tau)$ yields $|\int h|\le M\int\exp(-v/\tau)$. ([[thm-continuous-implies-integrable]], [[thm-linearity-of-the-integral]], [[thm-monotonicity-of-the-integral]], [[thm-ftc-first-part]])

[F5] The dot product is the finite coordinate sum defining the Euclidean inner product, and $|u\cdot w|\le|u||w|$. ([[def-euclidean-inner-product]], [[thm-cauchy-schwarz-and-the-euclidean-norm]])

## Proof

**Proof technique:** direct; differentiate the proposed reduced-order expression, then integrate the exact future kernel twice by parts and estimate its remainder.

1.1 The product and chain rules give $a_{\mathrm{RO}}'=(f'+\tau f'')/m$. Substitution therefore yields $m(a_{\mathrm{RO}}-\tau a_{\mathrm{RO}}')=f+\tau f'-\tau f'-\tau^2f''=f-\tau^2f''$, proving the stated residual. [given, A1, F2, algebra]

1.2 Fix $t\in\mathbb R$. The boundedness of $f$ makes $\exp(-R/\tau)f(t+R)\to0$ as $R\to\infty$. For each component $j$, [A1] and [F3] give $|f'_j(t+R)|\le|f'_j(t)|+M_2R$ for $R\ge0$ by the mean value theorem. Since $\exp(-R/\tau)(1+R/\tau)\to0$, also $\exp(-R/\tau)f'(t+R)\to0$. All finite-interval integrals below exist because their integrands are continuous. [A1, F3, F4, algebra]

2.1 On $[0,R]$, differentiate $\exp(-v/\tau)f(t+v)$ and integrate the product-rule identity using [F2]. After rearranging, this gives $$\int_0^R\exp(-v/\tau)f(t+v)\,dv=\tau f(t)-\tau\exp(-R/\tau)f(t+R)+\tau\int_0^R\exp(-v/\tau)f'(t+v)\,dv.$$ Applying the same calculation to $\exp(-v/\tau)f'(t+v)$ gives $$\int_0^R\exp(-v/\tau)f'(t+v)\,dv=\tau f'(t)-\tau\exp(-R/\tau)f'(t+R)+\tau\int_0^R\exp(-v/\tau)f''(t+v)\,dv.$$ These identities hold componentwise. [A1, F2, F4, algebra, step 1.2]

3.1 Let $R\to\infty$ in the identities of step 2.1; the boundary terms vanish by step 1.2 and the last integral converges componentwise since $|f''|\le M_2$ and $\int_0^\infty\exp(-v/\tau)\,dv=\tau$ by [F4]. Substitution into [F1] yields $$a_*(t)-a_{\mathrm{RO}}(t)=\frac{\tau}{m}\int_0^\infty\exp(-v/\tau)f''(t+v)\,dv.$$ If this vector integral is $z\ne0$, set $w=z/|z|$. By [F5], $|w|=1$ and $|w\cdot f''(t+v)|\le M_2$. Coordinatewise linearity gives $w\cdot z=\int_0^\infty\exp(-v/\tau)\,w\cdot f''(t+v)\,dv$, and [F4] gives $|w\cdot z|\le M_2\int_0^\infty\exp(-v/\tau)\,dv=M_2\tau$. Thus $|z|=w\cdot z\le M_2\tau$. The same bound is trivial for $z=0$, proving $|a_*(t)-a_{\mathrm{RO}}(t)|\le\tau^2M_2/m$. [F1, F4, F5, step 1.2, step 2.1, algebra] ∎
