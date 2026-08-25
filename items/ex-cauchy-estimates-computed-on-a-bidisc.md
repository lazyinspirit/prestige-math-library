---
id: ex-cauchy-estimates-computed-on-a-bidisc
kind: example
title: "Cauchy estimates on a bidisc, computed and compared with the exact derivatives"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-cauchy-estimates-on-a-polydisc, ex-power-series-expansion-of-an-exponential-of-a-coordinate-sum, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, def-factorial-and-falling-factorial, thm-power-series-define-holomorphic-functions-in-several-variables, cor-uniqueness-of-multivariable-power-series-coefficients]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, v4.4, §1.2"
      url: "https://www.jirka.org/scv/scv.pdf"
pipeline_run: null
---

## Example

Let $f(z)=\exp(z_0+z_1)$ on $\mathbb C^2$, let $a=0$, and let the polyradius be
$(r,r)$ with $r>0$. Then the distinguished-boundary supremum is

$$\sup_{\Gamma_{(r,r)}(0)} |f| = \exp(2r),$$

so the Cauchy estimate gives

$$|\partial^\alpha f(0)| \le \alpha!\,\exp(2r)\,r^{-|\alpha|}.$$

For $\alpha=(1,1)$ the exact value is $|\partial^\alpha f(0)|=1$, whereas the
bound is $\exp(2r)/r^2$, minimized at $r=1$ with value $e^2$.

## Facts & Assumptions

**Given:** The function $f(z)=\exp(z_0+z_1)$, the centre $0\in\mathbb C^2$, a real $r>0$, and the multi-index $\alpha=(1,1)$.

[L1] Cauchy estimates on a polydisc give $|\partial^\alpha f(a)|\le \alpha!\,M\,r^{-\alpha}$, where $M$ is the distinguished-boundary supremum and $r^{-\alpha}$ is the product of the inverse powers of the radii ([[thm-cauchy-estimates-on-a-polydisc]]).

[L2] The power-series expansion of $\exp(z_0+z_1)$ is $\sum_\alpha z^\alpha/\alpha!$ on every bidisc, and that series therefore defines a holomorphic function there ([[ex-power-series-expansion-of-an-exponential-of-a-coordinate-sum]], [[thm-power-series-define-holomorphic-functions-in-several-variables]]).

[L3] $|\exp(w)|=\exp(\operatorname{Re} w)$ for complex $w$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[L4] For a convergent multivariable power series, the coefficient of $z^\alpha$ is $\partial^\alpha f(0)/\alpha!$ ([[cor-uniqueness-of-multivariable-power-series-coefficients]]).

## Verification

**Proof technique:** direct.

1.1 If $|\zeta_0|=|\zeta_1|=r$, then $|f(\zeta)|=|\exp(\zeta_0+\zeta_1)|=\exp(\operatorname{Re}\zeta_0+\operatorname{Re}\zeta_1)\le\exp(|\zeta_0|+|\zeta_1|)=\exp(2r)$, with equality at $\zeta_0=\zeta_1=r$. So $\sup_{\Gamma_{(r,r)}(0)}|f|=\exp(2r)$. [given, L3]

2.1 Since [L2] makes $f$ holomorphic on every bidisc about $0$, applying [L1] with the supremum of step 1.1 gives $|\partial^\alpha f(0)|\le \alpha!\,\exp(2r)\,r^{-|\alpha|}$ for every multi-index $\alpha$. [step 1.1, L1, L2]

3.1 By [L2], the coefficient of $z_0z_1$ is $1$, so [L4] gives $\partial^{(1,1)}f(0)=1$. Thus the estimate for $\alpha=(1,1)$ is $1\le\exp(2r)/r^2$. [step 2.1, L2, L4]

4.1 The function $h(r)=\exp(2r)/r^2$ satisfies $(\log h)'=2-2/r$, so its unique critical point on $(0,\infty)$ is $r=1$, where it takes the value $e^2$; hence this example's best bound is $1\le e^2$. [step 3.1, algebra] ∎
