---
id: "fs-continuously-homotopic-smooth-maps-can-be-inserted-directly-into-the-differential-form-homotopy-operator"
kind: "false-statement"
title: "Continuously homotopic smooth maps can be inserted directly into the differential form homotopy operator"
deps: ["def-integration-along-the-unit-interval-for-a-differential-form", "thm-de-rham-homotopy-formula-for-a-smooth-homotopy"]
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

False claim: an arbitrary continuous homotopy between smooth maps can be inserted directly into the differential-form homotopy operator.

## Facts & Assumptions

**Given:** $M$ is a point, $N=\mathbb R$, and $H(t)=|t-1/2|$ on $[0,1]$.

[F1] [[def-integration-along-the-unit-interval-for-a-differential-form]]: Let $\omega\in\Omega^k(M\times[0,1])$ be smooth up to the endpoints. For $k\ge1$, its **interval integral** is the $(k-1)$-form $K\omega=\int_0^1\beta_t\,dt$, where $\omega=\alpha_t+dt\wedge\beta_t$ and both families are tangential to $M$. Set $K=0$ on degree zero and on zero terms. Use the product structure of prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure, restricted from $M\times\mathbb R$. The families are intrinsically $\alpha_t=i_t^*\omega$ and $\beta_t=i_t^*(\iota_{\partial_t}\omega)$, using def-interior-product-of-a-form-by-a-vector-field; evaluation on tangential tuples and on $(\partial_t,v_1,\ldots,v_{k-1})$ proves existence and uniqueness of the decomposition. The integral is in the fixed finite-dimensional fibre $\bigwedge^{k-1}T_x^*M$. Coefficients have smooth local extensions across endpoints. thm-differentiation-under-the-integral-sign-on-a-compact-rectangle supplies parameter differentiation; coordinate independence and full smoothness are proved in lem-the-interval-homotopy-operator-is-coordinate-independent.

[F2] [[thm-de-rham-homotopy-formula-for-a-smooth-homotopy]]: If $F:M\times[0,1]\to N$ is smooth up to the endpoints and $F_t(x)=F(x,t)$, then $F_1^*-F_0^*=d(KF^*)+(KF^*)d$.

## Refutation

**Proof technique:** direct.

1.1 The function $H$ is continuous, and $H(0)=H(1)=1/2$ are smooth maps from a point. At $t=1/2$ the left derivative is $-1$ and the right derivative is $1$, so $H$ has no differential there. [given, algebra]

2.1 The operator for a homotopy is $KH^*$ on smooth forms, and pullback of $dy$ requires $dH$ at every point. At the midpoint this pullback is undefined as a smooth differential form. The smooth-homotopy formula therefore cannot accept this particular continuous homotopy directly. [F1, F2, step 1.1] ∎

## Source locator

Lee, Lemma 17.9 and Proposition 17.10, pp.444–445: the operator acts on smooth pullbacks; the cusp is a direct witness to the missing hypothesis.
