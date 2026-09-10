---
id: "thm-poincare-lemma-for-differential-forms-on-star-shaped-domains"
kind: "theorem"
title: "Poincare lemma for differential forms on star shaped domains"
deps: ["def-radial-contraction-of-a-star-shaped-domain", "thm-de-rham-homotopy-formula-for-a-smooth-homotopy", "def-de-rham-cohomology"]
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
    - title: "Nigel Hitchin, Differentiable Manifolds (2014)"
      url: "https://people.maths.ox.ac.uk/~joyce/Nairobi2019/Hitchin-DifferentiableManifolds.pdf"
landmark: true
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Every closed smooth $k$-form on a star-shaped open domain is exact for $k\ge1$. For centre $0$, one primitive is $\eta_x(v_1,\ldots,v_{k-1})=\int_0^1t^{k-1}\omega_{tx}(x,v_1,\ldots,v_{k-1})\,dt$.

## Facts & Assumptions

**Given:** A domain $U$ star-shaped about $c$, and a closed $k$-form $\omega$ with $k\ge1$.

[F1] [[def-radial-contraction-of-a-star-shaped-domain]]: For an open $U\subseteq\mathbb R^n$ star-shaped about a specified $c\in U$, the **radial contraction** is $F:U\times[0,1]\to U$, $F(x,t)=c+t(x-c)$. def-star-shaped-open-subset-of-rn says exactly that each displayed value lies in $U$. The coordinate expression is polynomial, so its restriction is smooth up to both endpoints; $F(x,0)=c$ and $F(x,1)=x$. The centre is part of the data, so $U$ is nonempty. For $n=0$ the unique nonempty domain is a point and the formula is constant.

[F2] [[thm-de-rham-homotopy-formula-for-a-smooth-homotopy]]: If $F:M\times[0,1]\to N$ is smooth up to the endpoints and $F_t(x)=F(x,t)$, then $F_1^*-F_0^*=d(KF^*)+(KF^*)d$.

## Proof

**Proof technique:** direct.

1.1 Take the radial homotopy from the constant map to the identity. Its time-zero pullback on positive-degree forms vanishes because the differential of the constant map is zero. The homotopy formula and $d\omega=0$ give $\omega=d(KF^*\omega)$, so $\eta=KF^*\omega$ is a smooth primitive. [F1, F2, given]

2.1 For $c=0$, $dF_{(x,t)}\partial_t=x$ and $dF_{(x,t)}(v,0)=tv$. The contraction coefficient therefore equals $t^{k-1}\omega_{tx}(x,v_1,\ldots,v_{k-1})$. Integrating gives the displayed formula. When $k=1$ the factor is $1$, including $t=0$; for $k>1$ the integrand is smooth and vanishes there. Degrees exceeding the dimension have zero form and zero primitive. [F2, step 1.1] ∎

## Source locator

Lee, Theorem 17.14, p.447; the explicit primitive follows by evaluating the interval operator.
