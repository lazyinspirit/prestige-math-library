---
id: "thm-de-rham-homotopy-formula-on-a-product"
kind: "theorem"
title: "De rham homotopy formula on a product"
deps: ["def-integration-along-the-unit-interval-for-a-differential-form", "lem-the-interval-homotopy-operator-is-coordinate-independent", "thm-local-coordinate-formula-for-the-exterior-derivative", "thm-differentiation-under-the-integral-sign-on-a-compact-rectangle", "thm-newton-leibniz-with-interior-derivative"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

For endpoint inclusions $i_t:M\to M\times[0,1]$, $i_1^*-i_0^*=dK+Kd$ on smooth forms of every degree.

## Facts & Assumptions

**Given:** Write $\omega=\alpha_t+dt\wedge\beta_t$ with tangential families.

[F1] [[lem-the-interval-homotopy-operator-is-coordinate-independent]]: The interval operator $K:\Omega^k(M\times[0,1])\to\Omega^{k-1}(M)$ is coordinate independent and maps smooth forms to smooth forms.

[F2] [[thm-local-coordinate-formula-for-the-exterior-derivative]]: Let $(U,x^1,\ldots,x^n)$ be a smooth chart on a smooth manifold and $\omega$ a smooth $k$-form on $U$, with $k\ge0$. Summing over increasing $k$-tuples $I$, and writing $dx^I=dx^{i_1}\wedge\cdots\wedge dx^{i_k}$, if $\omega=\sum_I\omega_I\,dx^I$, then $$d\omega=\sum_I d\omega_I\wedge dx^I.$$

[F3] [[thm-newton-leibniz-with-interior-derivative]]: Let $a<b$. Suppose $G:[a,b]\to\mathbb R$ is continuous on $[a,b]$ and differentiable on $(a,b)$. If $f:[a,b]\to\mathbb R$ is Riemann integrable and $$f(x)=G'(x)\qquad(a<x<b),$$ then $$\int_a^b f=G(b)-G(a).$$ No derivative of $G$ at either endpoint is assumed, and the two endpoint values assigned to the integrable extension $f$ do not enter the conclusion.

[F4] [[def-integration-along-the-unit-interval-for-a-differential-form]]: For $\omega=\alpha_t+dt\wedge\beta_t$ smooth up to the endpoints, $K\omega=\int_0^1\beta_t\,dt$ in positive degree, while $K=0$ in degree zero and on zero terms.

[F5] [[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]]: On a compact rectangle, a continuous parameter derivative may be passed through the integral when represented by a continuous function.

## Proof

**Proof technique:** direct.

1.1 The coordinate differential gives $d\omega=d_M\alpha_t+dt\wedge(\partial_t\alpha_t-d_M\beta_t)$: the minus sign follows from moving $d_M$ past $dt$. Consequently the definition F4 gives $Kd\omega=\int_0^1\partial_t\alpha_t\,dt-\int_0^1d_M\beta_t\,dt$. [F2, F4, given]

2.1 The fundamental theorem on each coefficient gives the first integral as $\alpha_1-\alpha_0$. By F4, $K\omega=\int_0^1\beta_t\,dt$; coefficientwise F5 permits each $M$-coordinate derivative through this compact parameter integral, so F2 gives $d_MK\omega=\int_0^1d_M\beta_t\,dt$. Since $i_t^*\omega=\alpha_t$, rearrangement proves the formula. In degree zero, $\beta=0$ and this is just the fundamental theorem; in top or out-of-range degrees the vanishing terms satisfy the same identity. [F1, F2, F3, F4, F5, step 1.1] ∎

## Source locator

Lee, Introduction to Smooth Manifolds, 2nd ed., Lemma 17.9 and Proposition 17.10, pp.444–445; the proof here computes the product differential directly.
