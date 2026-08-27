---
id: ex-keyhole-evaluates-x-alpha-minus-one-over-one-plus-x
kind: example
title: "The integral of x^(alpha-1) / (1 + x) over (0, infinity) is pi / sin(pi alpha)"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-keyhole-residue-formula-mellin-rational-integrals]
justified_by: []
aliases: []
landmark: false
proof_strategy: computation
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. Howell and J. Mathews, Complex Analysis, Ch. 8 §8.6"
      url: "https://complexanalysis.org/web/ch_residue.html"
pipeline_run: null
---

## Example

For $0<\Re\alpha<1$,
$\int_0^\infty \frac{x^{\alpha-1}}{1+x}\,dx=\frac{\pi}{\sin(\pi\alpha)}.$

## Facts & Assumptions

**Given:** The keyhole integrand $f(z)=z^{\alpha-1}/(1+z)$ with $0<\Re\alpha<1$.

[L1] If the rational factor has no pole on $[0,\infty)$, the Mellin integral
converges, and the inner and outer keyhole circles vanish, then
$$\left(1-e^{2\pi i\alpha}\right)\int_0^\infty x^{\alpha-1}R(x)\,dx=2\pi i\sum\operatorname{Res}(z^{\alpha-1}R(z),a)$$
for the branch with $\operatorname{Arg}z\in(0,2\pi)$
([[thm-keyhole-residue-formula-mellin-rational-integrals]]).

## Verification

**Proof technique:** computation.

1.1 The factor $R(z)=1/(1+z)$ has no pole on $[0,\infty)$. Since $0<\operatorname{Re}\alpha<1$, the absolute value of the real integrand is $O(x^{\operatorname{Re}\alpha-1})$ near $0$ and $O(x^{\operatorname{Re}\alpha-2})$ at infinity, so the improper integral converges. On the inner keyhole circle the arc integral is $O(\varepsilon^{\operatorname{Re}\alpha})$, and on the outer circle it is $O(R^{\operatorname{Re}\alpha-1})$; both tend to $0$. Thus every hypothesis of [L1] holds. [L1, given, algebra]

1.2 The only pole away from the positive real axis is the simple pole at $-1$. On the chosen branch, $(-1)^{\alpha-1}=e^{i\pi(\alpha-1)}=-e^{i\pi\alpha}$, so $\operatorname{Res}(f,-1)=-e^{i\pi\alpha}$. [given, algebra]

2.1 Applying [L1] using step 1.1 and substituting the residue from step 1.2 gives $\left(1-e^{2\pi i\alpha}\right)\int_0^\infty \frac{x^{\alpha-1}}{1+x}\,dx=-2\pi i\,e^{i\pi\alpha}.$ Since $1-e^{2\pi i\alpha}=-2ie^{i\pi\alpha}\sin(\pi\alpha)$, division yields $\int_0^\infty \frac{x^{\alpha-1}}{1+x}\,dx=\frac{\pi}{\sin(\pi\alpha)}$. [L1, step 1.1, step 1.2, algebra] ∎
