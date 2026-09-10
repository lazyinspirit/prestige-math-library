---
id: "fs-the-pullback-of-a-riemannian-metric-by-every-smooth-map-is-a-riemannian-metric"
kind: "false-statement"
title: "The pullback of a riemannian metric by every smooth map is a riemannian metric"
deps: ["def-pullback-riemannian-metric", "prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Every smooth map pulls a Riemannian metric back to a Riemannian metric.

## Facts & Assumptions

**Given:** The proposed universal claim; take $F:\mathbb R\to\mathbb R$, $F(x)=0$, with target metric $h=dy^2$.

[F1] [[def-pullback-riemannian-metric]]: For smooth $F:M\to N$ and a Riemannian metric $h$ on $N$, its **pullback tensor** is $(F^*h)_p(v,w)=h_{F(p)}(dF_pv,dF_pw)$. This is def-pullback-of-a-covariant-tensor-field for the tensor in def-riemannian-metric-and-riemannian-manifold. It is always symmetric and positive semidefinite; the name does not assert positive definiteness. Smoothness and the precise immersion criterion are established next.

[F2] [[prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions]]: $F^*h$ is Riemannian if and only if $F$ is an immersion. In general it is positive semidefinite, with radical $\ker dF_p$ at $p$.

## Refutation

**Proof technique:** direct.

1.1 The coordinate function of $F$ is constant, hence smooth with $dF_x(v)=0$ for every $x,v\in\mathbb R$. The target quadratic form is $h_y(w,w)=w^2>0$ for $w\ne0$, so the target is Riemannian. [given]

2.1 The pullback definition gives $(F^*h)_x(\partial_x,\partial_x)=h_0(0,0)=0$. Since $\partial_x\ne0$, positive definiteness fails; equivalently this $F$ is not an immersion. Thus this smooth map refutes the claim. [F1, F2, step 1.1] ∎

## Source locator

Lee, Introduction to Smooth Manifolds, 2nd ed., pp. 330–331, pullback metrics and Proposition 13.9; the constant-map computation above is explicit.
