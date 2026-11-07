---
id: lem-voronoi-bessel-k-y-differential-recurrences
kind: lemma
title: "The divisor-kernel Bessel functions satisfy the order-one derivative recurrences"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps: [def-voronoi-bessel-k-y-functions, lem-voronoi-bessel-k-y-series-converge, def-integer-order-bessel-series, lem-integer-order-bessel-series-tail, lem-integer-order-bessel-recurrences-and-ode, thm-logarithm-derivative-and-integral, thm-termwise-differentiation-of-complex-power-series, thm-algebra-of-derivatives]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Aleksandar Ivić, Topics in Recent Zeta-Function Theory, Chapter 3: The Voronoï Summation Formula"
      url: "https://bibliotheque.imo.universite-paris-saclay.fr/media/filer_public/86/6d/866d1cf0-a942-4f8a-9d30-7cb3b03e1b1c/i_ivic-66.pdf"
      locator: "§1, formulas (3.4)–(3.9), printed pp. 47–48"
verification:
  precheck: pending
---

## Statement

For $z>0$, put $H_m:=\sum_{j=1}^m j^{-1}$, let $\gamma$ be the Euler–Mascheroni constant, and let $\log$ be the natural logarithm. Define
$$J_0(z):=\sum_{m=0}^{\infty}\frac{(-1)^m(z^2/4)^m}{(m!)^2},\qquad I_0(z):=\sum_{m=0}^{\infty}\frac{(z^2/4)^m}{(m!)^2},$$
$$K_0(z):=-\bigl(\log(z/2)+\gamma\bigr)I_0(z)+\sum_{m=1}^{\infty}\frac{H_m(z^2/4)^m}{(m!)^2},\qquad Y_0(z):=\frac2\pi\bigl(\log(z/2)+\gamma\bigr)J_0(z)+\frac2\pi\sum_{m=1}^{\infty}\frac{(-1)^{m+1}H_m(z^2/4)^m}{(m!)^2}.$$
Set $K_1(z):=-K_0'(z)$ and $Y_1(z):=-Y_0'(z)$. Then
$$K_0'(z)=-K_1(z),\qquad Y_0'(z)=-Y_1(z),$$
and
$$\frac{d}{dz}\bigl(zK_1(z)\bigr)=-zK_0(z),\qquad \frac{d}{dz}\bigl(zY_1(z)\bigr)=zY_0(z).$$

## Statement references

[Ivić, Chapter 3, §1, formulas (3.4)–(3.9)](https://bibliotheque.imo.universite-paris-saclay.fr/media/filer_public/86/6d/866d1cf0-a942-4f8a-9d30-7cb3b03e1b1c/i_ivic-66.pdf)

## Facts & Assumptions

**Given:** A positive real $z$ and the divisor-kernel Bessel functions defined by their convergent series.

[F1] [[def-voronoi-bessel-k-y-functions]]: $K_0=-(\log(z/2)+\gamma)I_0+S_K$, $Y_0=(2/\pi)((\log(z/2)+\gamma)J_0+S_Y)$, $K_1=-K_0'$, and $Y_1=-Y_0'$.

[F2] [[lem-voronoi-bessel-k-y-series-converge]]: the harmonic power series in $S_K,S_Y$ and all fixed derivatives converge locally uniformly on $(0,\infty)$, so the displayed functions may be differentiated term by term.

[F3] [[lem-integer-order-bessel-recurrences-and-ode]]: $J_0$ and $I_0$ satisfy $z^2J_0''+zJ_0'+z^2J_0=0$ and $z^2I_0''+zI_0'-z^2I_0=0$ for $z\ne0$.

[F4] [[thm-logarithm-derivative-and-integral]]: $(\log(z/2)+\gamma)'=1/z$ for $z>0$.

[F5] [[thm-termwise-differentiation-of-complex-power-series]] and [[thm-algebra-of-derivatives]]: locally convergent power series may be differentiated termwise, and product and sum derivatives obey the usual rules.

[F6] [[def-integer-order-bessel-series]] and [[lem-integer-order-bessel-series-tail]]: $I_0(z)=\sum_{m\ge0}(z^2/4)^m/(m!)^2$ and $J_0(z)=\sum_{m\ge0}(-1)^m(z^2/4)^m/(m!)^2$, with locally uniform convergence of their derivative series.

## Proof

1.1 Put $L(z):=\log(z/2)+\gamma$, $t:=z^2/4$, and $c_m:=H_m/(m!)^2$, with $H_0:=0$. The modified Bessel equation in [F3], the series in [F6], and the product rule [F5] give
$$\bigl(z^2\partial_z^2+z\partial_z-z^2\bigr)(L I_0)=2zI_0'.$$
Indeed the cross terms are $z^2(2L'I_0'+L''I_0)+zL'I_0=2zI_0'$ because $L'=1/z$ and $L''=-1/z^2$. For $t^m$, the operator $z^2\partial_z^2+z\partial_z$ acts as multiplication by $4m^2$ and multiplication by $z^2$ acts as $4t$. Therefore the coefficient of $t^m$ after applying the operator to $S_K=\sum_{m\ge1}c_m t^m$ is $4(m^2c_m-c_{m-1})=4m/(m!)^2$, since $H_m-H_{m-1}=1/m$. By [F2] and [F5] these termwise computations are valid, and $\bigl(z^2\partial_z^2+z\partial_z-z^2\bigr)S_K=2zI_0'$, using the series in [F6]. The two terms cancel in $K_0=-LI_0+S_K$, so $z^2K_0''+zK_0'-z^2K_0=0$. [F1, F2, F3, F4, F5, F6, given, algebra]

2.1 For $S_Y=\sum_{m\ge1}(-1)^{m+1}c_m t^m$, the operator $z^2\partial_z^2+z\partial_z+z^2$ has coefficient at $t^m$ equal to $4(-1)^{m+1}m/(m!)^2$. On the other hand, $2zJ_0'=4\sum_{m\ge1}(-1)^m m t^m/(m!)^2$ by [F6]. Thus this operator sends $S_Y$ to $-2zJ_0'$. The same product-rule calculation sends $LJ_0$ to $2zJ_0'$, so the two terms cancel in $Y_0=(2/\pi)(LJ_0+S_Y)$. Hence $z^2Y_0''+zY_0'+z^2Y_0=0$. [F1, F2, F3, F4, F5, F6, step 1.1, algebra]

3.1 By [F1], $K_1=-K_0'$ and $Y_1=-Y_0'$. The equation for $K_0$ in step 1.1 gives $zK_0''+K_0'=zK_0$, whence $(zK_1)'=-K_0'-zK_0''=-zK_0$. The equation for $Y_0$ in step 2.1 gives $zY_0''+Y_0'=-zY_0$, whence $(zY_1)'=-Y_0'-zY_0''=zY_0$. These are the claimed recurrences. [F1, step 1.1, step 2.1, algebra] ∎
