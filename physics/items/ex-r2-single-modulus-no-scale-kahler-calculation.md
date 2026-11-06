---
id: ex-r2-single-modulus-no-scale-kahler-calculation
kind: example
title: One-Variable Kähler Calculation of the No-Scale Cancellation
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: physics
deps:
  - def-complex-numbers-and-arithmetic
  - thm-complex-numbers-form-a-field
  - lem-cm-integral-and-ftc-for-continuous-normed-space-curves
dependency_roles:
  def-complex-numbers-and-arithmetic: mathematical-premise
  thm-complex-numbers-form-a-field: mathematical-premise
  lem-cm-integral-and-ftc-for-continuous-normed-space-curves: mathematical-premise
justified_by: []
relations:
  motivated_by:
    - pthm-r2-gkp-no-scale-flux-potential
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
sources:
  references:
    - title: "Steven B. Giddings, Shamit Kachru, and Joseph Polchinski, Hierarchies from Fluxes in String Compactifications, arXiv:hep-th/0105097v2"
      url: "https://arxiv.org/pdf/hep-th/0105097v2"
      locator: "§2.2.4, equations (2.37)–(2.43), printed pp. 13–14; mathematical motivation only."
    - title: "Mariana Graña, Flux compactifications in string theory: a comprehensive review, arXiv:hep-th/0509003v3"
      url: "https://arxiv.org/pdf/hep-th/0509003v3"
      locator: "§5.2, equations (5.27)–(5.28), printed p. 37; source-context only."
    - title: "Jan Louis, Introduction to String Phenomenology, University of Hamburg preliminary lecture notes"
      url: "https://www.physik.uni-hamburg.de/th2/ag-louis/dokumente/lectures/ws-14-15/ws-14-15-lecture-notes.pdf"
      locator: "Full 89-page PDF; §§8.1–8.2, printed pp. 40–41; source-context only."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Example

Let $\mathbb H=\{\rho=x+iy:x,y\in\mathbb R,\ y>0\}\subset\mathbb C$. Fix $m>0$ and $w_0\in\mathbb C$. On $\mathbb H$, define the real function
$$
K(\rho,\bar\rho)=-3m^2\log[-i(\rho-\bar\rho)]=-3m^2\log(2y),
$$
the constant function $W(\rho)=w_0$, the metric coefficient $g_{\rho\bar\rho}=\partial_\rho\partial_{\bar\rho}K$, and the covariant derivative $D_\rho W=\partial_\rho W+(K_\rho/m^2)W$. Let $g^{\rho\bar\rho}=1/g_{\rho\bar\rho}$ and define
$$
V=e^{K/m^2}\left(g^{\rho\bar\rho}|D_\rho W|^2-\frac{3|W|^2}{m^2}\right),
$$
where $\log$ is the real logarithm on positive numbers and $|a+ib|^2=a^2+b^2$. Then $g_{\rho\bar\rho}>0$ and $V=0$ for every $\rho\in\mathbb H$, while $D_\rho W\ne0$ everywhere when $w_0\ne0$. This is a mathematical example about the stated functions and does not assert that any Type IIB flux compactification realizes them.

## Example references

[Giddings, Kachru, and Polchinski, §2.2.4, equations (2.37)–(2.43)](https://arxiv.org/pdf/hep-th/0105097v2)

[Graña, §5.2, equations (5.27)–(5.28)](https://arxiv.org/pdf/hep-th/0509003v3)

[Louis, §§8.1–8.2](https://www.physik.uni-hamburg.de/th2/ag-louis/dokumente/lectures/ws-14-15/ws-14-15-lecture-notes.pdf)

## Facts & Assumptions

**Given:** $x,y\in\mathbb R$, $y>0$, $m$ is a positive real constant, and $w_0\in\mathbb C$. For $\rho=x+iy$ define $\bar\rho=x-iy$, and use Wirtinger derivatives $\partial_\rho=(\partial_x-i\partial_y)/2$ and $\partial_{\bar\rho}=(\partial_x+i\partial_y)/2$.

[F1] [[def-complex-numbers-and-arithmetic]] defines $\mathbb C$ as $\mathbb R[x]/(x^2+1)$ with $i^2=-1$ and the embedded real numbers.

[F2] [[thm-complex-numbers-form-a-field]] proves that every element is uniquely $a+bi$, the field operations are the displayed coordinate operations, and nonzero complex numbers have inverses.

[F3] [[lem-cm-integral-and-ftc-for-continuous-normed-space-curves]], claims 1–3, constructs the oriented Riemann integral of a continuous curve in a complete normed real vector space, proves additivity, and proves that its variable-upper-endpoint integral has derivative equal to its integrand. We use $X=\mathbb R$ with its absolute-value norm on compact intervals contained in $(0,\infty)$.

[A1] The Example defines $K,W,g,D_\rho W,V$ as the displayed mathematical functions. Conjugation is the real-linear map $a+ib\mapsto a-ib$, well defined by the unique coordinates in [F2]; modulus squared is $|a+ib|^2=a^2+b^2$. Use the real logarithm in its integral definition $\log t=\int_1^t ds/s$ for $t>0$, with oriented endpoints as in [F3]. No string-theory, flux, compactification, or empirical premise is assumed.

## Verification

**Proof technique:** direct real-coordinate differentiation and algebra.

**Given:** [F1]–[F3] and [A1].

1.1 The local conjugation convention in [A1] gives $\bar\rho=x-iy$; the field arithmetic in [F1]–[F2] then gives $-i(\rho-\bar\rho)=2y>0$. The integrand $s\mapsto1/s$ is continuous on each compact positive interval, so [F3] makes $\log t$ well defined and gives $(\log t)'=1/t$ for every $t>0$. The difference quotient $((t+h)^{-1}-t^{-1})/h=-1/[t(t+h)]$ gives $(\log t)''=-1/t^2$, continuously on $(0,\infty)$. Thus $K=-3m^2\log(2y)$ has continuous second real partial derivatives on $\mathbb H$. [given, F1, F2, F3, A1, algebra]

2.1 Step 1.1 gives $\partial_xK=0$, $\partial_yK=-3m^2/y$, and $\partial_y^2K=3m^2/y^2$ (rescale the logarithm difference quotient by $2$). Using the stated Wirtinger derivatives, $\partial_\rho K=3im^2/(2y)=-3m^2/(\rho-\bar\rho)$ and
$$
g_{\rho\bar\rho}=\partial_\rho\partial_{\bar\rho}K=-\frac{3m^2}{(\rho-\bar\rho)^2}=\frac{3m^2}{4y^2}>0.
$$
Therefore $g^{\rho\bar\rho}=4y^2/(3m^2)$. [given, A1, step 1.1, algebra]

3.1 Since $W=w_0$ is constant, $D_\rho W=K_\rho w_0/m^2=-3w_0/(\rho-\bar\rho)$. Hence $g^{\rho\bar\rho}|D_\rho W|^2=(4y^2/(3m^2))(9|w_0|^2/(4y^2))=3|w_0|^2/m^2$. [given, A1, step 2.1, algebra]

4.1 The bracket defining $V$ is the difference of the equal terms computed in step 3.1, so $V=0$ for every $y>0$. If $w_0\ne0$, then $\rho-\bar\rho=2iy\ne0$ and step 3.1 gives $D_\rho W\ne0$; if $w_0=0$, then $D_\rho W=0$ as well. Thus zero $V$ does not force $D_\rho W=0$ in this mathematical model, and $V$ is constant along the whole positive-$y$ direction. [given, A1, step 3.1, algebra] ∎
## Remarks

The displayed Kähler potential and cancellation are used in the cited flux-compactification literature as the one-modulus no-scale calculation. Here the example is fully verified from its mathematical definitions; the source citations motivate the choice of functions but are not proof premises. The relation to the physical theorem on the A page is nonlogical motivation only.

