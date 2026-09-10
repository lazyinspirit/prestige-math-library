---
id: "ex-a-conformal-metric-on-the-plane"
kind: "example"
title: "A conformal metric on the plane"
deps: ["def-conformal-equivalence-of-riemannian-metrics", "def-riemannian-gradient", "def-riemannian-volume-density"]
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

## Example

For $g=e^{2u}(dx^2+dy^2)$ on $\mathbb R^2$, $\operatorname{grad}_g f=e^{-2u}(f_x\partial_x+f_y\partial_y)$ and $\mu_g=e^{2u}|dx\,dy|$.

## Facts & Assumptions

**Given:** $u,f\in C^\infty(\mathbb R^2)$.

[F1] [[def-conformal-equivalence-of-riemannian-metrics]]: Two Riemannian metrics are **conformally equivalent** if $\widetilde g=e^{2u}g$ for a smooth real function $u$ on $M$. The positive smooth factor preserves the metric condition of def-riemannian-metric-and-riemannian-manifold. Equivalently $\widetilde g=fg$ for smooth $f>0$, since $u=\tfrac12\log f$. Reflexivity uses $u=0$, reversal uses $-u$, and composing rescalings adds their functions.

[F2] [[def-riemannian-gradient]]: For a smooth real function $f$, its **Riemannian gradient** is $\operatorname{grad}_g f=(df)^\sharp$. prop-exterior-derivative-of-a-function-is-its-differential identifies $df(X)=Xf$. The smooth bundle isomorphism in thm-the-musical-maps-are-smooth-inverse-bundle-isomorphisms therefore makes the gradient a smooth vector field. In coordinates $(\operatorname{grad}_g f)^i=\sum_jg^{ij}\partial_jf$. Constants, and all functions in dimension zero, have zero gradient.

[F3] [[def-riemannian-volume-density]]: The **Riemannian volume density** is $\mu_g=\sqrt{\det G_x}\,|dx^1\cdots dx^n|$ in coordinates. The matrix is that of prop-coordinate-criterion-for-a-riemannian-metric, so its determinant is positive and smooth. The density frames and their absolute-Jacobian law are def-density-bundle-and-smooth-density. In dimension zero take the empty determinant to be one, giving weight one at every point, independently of orientation. The compatibility of these local formulas is proved in lem-the-riemannian-volume-density-is-coordinate-independent.

## Verification

**Proof technique:** direct.

1.1 The factor $e^{2u}$ is smooth and strictly positive. The matrix is $G=e^{2u}I_2$, its inverse is $e^{-2u}I_2$, and $v^TGv=e^{2u}(v_x^2+v_y^2)>0$ for $v\ne0$, so this is the stated conformal metric. [F1, given]

2.1 Put $Y=e^{-2u}(f_x\partial_x+f_y\partial_y)$. For every $V=a\partial_x+b\partial_y$, $g(Y,V)=f_xa+f_yb=df(V)$, so $Y$ is the gradient. Since $\det G=e^{4u}$, its positive square root is $e^{2u}$, giving the asserted density. [F2, F3, step 1.1]

3.1 For the explicit instance $u(x,y)=x$ and $f(x,y)=y$, these formulas yield $g=e^{2x}(dx^2+dy^2)$, $\operatorname{grad}_g y=e^{-2x}\partial_y$, and $\mu_g=e^{2x}|dx\,dy|$. At $(0,0)$ the gradient is $\partial_y$ and the density coefficient is $1$. [step 2.1] ∎

## Source locator

Lee, p.328, coordinate metric criterion; p.342, gradient characterization; Proposition 15.31, p.390, coordinate volume coefficient. The conformal instance and its determinant are derived above.
