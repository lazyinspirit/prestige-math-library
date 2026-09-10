---
id: "lem-the-interval-homotopy-operator-is-coordinate-independent"
kind: "lemma"
title: "The interval homotopy operator is coordinate independent"
deps: ["def-integration-along-the-unit-interval-for-a-differential-form", "thm-differentiation-under-the-integral-sign-on-a-compact-rectangle"]
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
    - title: "Nigel Hitchin, Differentiable Manifolds (2014)"
      url: "https://people.maths.ox.ac.uk/~joyce/Nairobi2019/Hitchin-DifferentiableManifolds.pdf"
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

The interval operator $K:\Omega^k(M\times[0,1])\to\Omega^{k-1}(M)$ is coordinate independent and maps smooth forms to smooth forms.

## Facts & Assumptions

**Given:** A smooth form $\omega$ up to the endpoints of $M\times[0,1]$.

[F1] [[def-integration-along-the-unit-interval-for-a-differential-form]]: Let $\omega\in\Omega^k(M\times[0,1])$ be smooth up to the endpoints. For $k\ge1$, its **interval integral** is the $(k-1)$-form $K\omega=\int_0^1\beta_t\,dt$, where $\omega=\alpha_t+dt\wedge\beta_t$ and both families are tangential to $M$. Set $K=0$ on degree zero and on zero terms. Use the product structure of prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure, restricted from $M\times\mathbb R$. The families are intrinsically $\alpha_t=i_t^*\omega$ and $\beta_t=i_t^*(\iota_{\partial_t}\omega)$, using def-interior-product-of-a-form-by-a-vector-field; evaluation on tangential tuples and on $(\partial_t,v_1,\ldots,v_{k-1})$ proves existence and uniqueness of the decomposition. The integral is in the fixed finite-dimensional fibre $\bigwedge^{k-1}T_x^*M$. Coefficients have smooth local extensions across endpoints. thm-differentiation-under-the-integral-sign-on-a-compact-rectangle supplies parameter differentiation; coordinate independence and full smoothness are proved in lem-the-interval-homotopy-operator-is-coordinate-independent.

[F2] [[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]]: Let $a<b$ and $c<d$. Suppose $g,h:[a,b]\times[c,d]\to\mathbb R$ are continuous and, for every fixed $t\in[c,d]$, the function $x\mapsto g(x,t)$ is differentiable on $(a,b)$ with derivative $h(x,t)$. Define $$G(x):=\int_c^d g(x,t)\,dt.$$ Then $G$ is differentiable on $[a,b]$ as a function on that interval and $$G'(x)=\int_c^d h(x,t)\,dt\qquad(x\in[a,b]).$$ At $a$ and $b$ the derivative is relative and one-sided. The derivative hypothesis is imposed only for interior parameter values; continuity of $h$ supplies its endpoint values.

## Proof

**Proof technique:** direct.

1.1 The coefficient family $\beta_t=i_t^*(\iota_{\partial_t}\omega)$ is intrinsically a form in the fixed fibre at $x$. A change of coordinates on $M$ multiplies its coefficient vector by the exterior-power transition matrix $A(x)$, which does not depend on $t$. Finite-dimensional integration gives $\int_0^1 A(x)\beta_t(x)\,dt=A(x)\int_0^1\beta_t(x)\,dt$. Thus the local integral expressions transform as a form. [F1, given]

2.1 Fix a smaller closed coordinate rectangle about a point of $M$. Each coefficient $b(x,t)$ and all its derivatives are continuous on that rectangle times $[0,1]$, by local smoothness up to endpoints. Applying compact-parameter differentiation with the other coordinates fixed gives $\partial_{x_j}\int_0^1 b(x,t)\,dt=\int_0^1\partial_{x_j}b(x,t)\,dt$. The right side is jointly continuous, since uniform continuity on the compact rectangle bounds the difference of integrals by the supremum difference of integrands. Repetition for every multi-index proves all coordinate derivatives exist and are continuous. Hence $K\omega$ is smooth. For $k=0$, $K=0$ is smooth directly. [F1, F2, step 1.1] ∎

## Source locator

Lee, Introduction to Smooth Manifolds, 2nd ed., Lemma 17.9 and Proposition 17.10, pp.444–445; the proof here computes the product differential directly.
