---
id: "ex-the-round-metric-on-the-sphere-as-an-induced-metric"
kind: "example"
title: "The round metric on the sphere as an induced metric"
deps: ["prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions", "prop-coordinate-criterion-for-a-riemannian-metric"]
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

The Euclidean inclusion of $S^n$ induces its round metric. In spherical coordinates on $S^2$, $g=d\theta^2+\sin^2\theta\,d\varphi^2$.

## Facts & Assumptions

**Given:** $S^n=\{p\in\mathbb R^{n+1}:\|p\|=1\}$ and its usual smooth structure; $i$ is inclusion.

[F1] [[prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions]]: $F^*h$ is Riemannian if and only if $F$ is an immersion. In general it is positive semidefinite, with radical $\ker dF_p$ at $p$.

[F2] [[prop-coordinate-criterion-for-a-riemannian-metric]]: A tensor $g=\sum_{i,j}g_{ij}\,dx^i\otimes dx^j$ is Riemannian exactly when its coordinate matrix $G=(g_{ij})$ has smooth entries and is symmetric positive definite. Under $J=\partial x/\partial y$ it transforms by $G_y=J^TG_xJ$.

## Verification

**Proof technique:** direct.

1.1 A tangent vector $v$ to $S^n$ satisfies $p\cdot v=0$ by differentiating $\|p\|^2=1$. The inclusion differential sends this vector to the identical Euclidean vector, so is injective. Hence $i^*g_{\mathrm E}$ is Riemannian, and its value is $\langle v,w\rangle=v\cdot w$. [F1, given]

2.1 For $X(\theta,\varphi)=(\sin\theta\cos\varphi,\sin\theta\sin\varphi,\cos\theta)$, one has $X_\theta=(\cos\theta\cos\varphi,\cos\theta\sin\varphi,-\sin\theta)$ and $X_\varphi=(-\sin\theta\sin\varphi,\sin\theta\cos\varphi,0)$. Their dot products are $1$, $0$, and $\sin^2\theta$, respectively. Thus the coordinate matrix is $\operatorname{diag}(1,\sin^2\theta)$ on $0<\theta<\pi$ and an angular interval of length less than $2\pi$. [F2, step 1.1]

3.1 At either pole the spherical parametrization is not a chart, since $X_\varphi=0$. The intrinsic quadratic form remains $v\cdot v>0$ on every nonzero tangent vector by step 1.1; the vanishing coordinate coefficient at a pole therefore does not signify tensor degeneracy. [step 1.1, step 2.1] ∎

## Source locator

Lee, Proposition 13.9, p.331, and Example 13.16, p.333, round metric. The spherical-coordinate dot products are displayed above.
