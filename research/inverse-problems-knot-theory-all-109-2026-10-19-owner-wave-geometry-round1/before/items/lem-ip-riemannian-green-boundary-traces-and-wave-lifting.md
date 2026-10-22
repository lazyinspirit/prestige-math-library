---
id: lem-ip-riemannian-green-boundary-traces-and-wave-lifting
kind: lemma
title: "Riemannian Green identity, boundary trace, and wave lifting"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-riemannian-metric-and-riemannian-manifold
  - def-riemannian-volume-density
  - thm-fundamental-theorem-of-riemannian-geometry
  - thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves
dependency_level: 0
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikko Salo, On geometric inverse problems and microlocal analysis, full author lecture notes"
      url: "https://arxiv.org/pdf/2312.08123v1"
      locator: "§3.1, complete proof of Lemma 3.4, PDF pp. 23–24: Riemannian Green calculation for forward and terminal wave solutions."
    - title: "Medet Nursultanov and Lauri Oksanen, Introduction to inverse problems for hyperbolic PDEs, full lecture notes"
      url: "https://arxiv.org/pdf/2311.06020v2"
      locator: "§§2.4 and 3.3, PDF pp. 9 and 17–18: integration by parts for wave data and Riemannian boundary pairing."
proof_strategy: direct
---

## Statement

Let $(M,g)$ be a compact, nonempty smooth Riemannian manifold with smooth boundary, let $T>0$, set $Q=(0,T)\times M$ and $\Sigma=(0,T)\times\partial M$, and let $\nu_{\mathrm{out}}$ be the outward unit normal. Write $\nabla_g u$ for the metric gradient, $\Delta_g u=\operatorname{div}_g\nabla_g u$, $dV_g$ for Riemannian volume, and $dS_g$ for the induced boundary measure. The $C^1$ norms below are computed in any fixed finite smooth atlas of the indicated compact sets. For $u,v\in C^2([0,T]\times M)$,
$$
\int_Q\big((\partial_t^2-\Delta_g)u\,v-u(\partial_t^2-\Delta_g)v\big)\,dV_gdt
=\int_\Sigma\big(u\,\partial_{\nu_{\mathrm{out}}}v-v\,\partial_{\nu_{\mathrm{out}}}u\big)\,dS_gdt
+\int_M[\partial_tu\,v-u\,\partial_tv]_{t=0}^{t=T}\,dV_g.
$$
For every $h\in C_c^\infty(\Sigma)$ there is a smooth lift $H$ on $[0,T]\times M$ with $H|_\Sigma=h$, supported in a fixed boundary collar and zero near $t=0,T$, such that $\|H\|_{C^1([0,T]\times M)}\le C\|h\|_{C^1(\Sigma)}$. For every $u\in C^1([0,T]\times M)$ the classical normal trace obeys
$$
\|\partial_{\nu_{\mathrm{out}}}u\|_{L^2(\Sigma)}\le \big(T\,\operatorname{area}_g(\partial M)\big)^{1/2}\|\nabla_g u\|_{C^0([0,T]\times M)}.
$$

## Statement references

[[def-riemannian-metric-and-riemannian-manifold]]

[[def-riemannian-volume-density]]

[[thm-fundamental-theorem-of-riemannian-geometry]]

[[thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves]]

## Facts & Assumptions

**Given:** A compact smooth Riemannian manifold $(M,g)$ with smooth boundary, $T>0$, the outward unit normal, and $u,v\in C^2([0,T]\times M)$; for the lifting assertion also $h\in C_c^\infty(\Sigma)$.

[F1] [[def-riemannian-metric-and-riemannian-manifold]]: $g$ is smooth, symmetric, and positive definite on each nonzero tangent vector; smoothness is understood up to the boundary where stated.

[F2] [[def-riemannian-volume-density]]: in coordinates with metric matrix $G$, $dV_g=\sqrt{\det G}\,|dx^1\cdots dx^n|$.

[F3] [[thm-fundamental-theorem-of-riemannian-geometry]]: the supplied metric has a unique metric-compatible, torsion-free Levi–Civita connection; [[thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves]] supplies local geodesic ODE solutions with smooth dependence on initial data.

## Proof

**Proof technique:** direct.

1.1 At each $x\in\partial M$, define $E(x,s)=\exp_x(-s\nu_{\mathrm{out}}(x))$ for small $s\ge0$, using the boundary geodesic ODE from [F3]. At $s=0$ its differential sends $(w,a)\in T_x\partial M\oplus\mathbb R$ to $w-a\nu_{\mathrm{out}}$, an isomorphism, so the inverse function theorem gives a local collar chart. Compactness gives a uniform collar width. If no positive width made $E$ injective, there would be distinct $(x_k,s_k)$ and $(y_k,r_k)$ with equal images and $s_k,r_k\downarrow0$. Compactness gives convergent subsequences $x_k\to x$ and $y_k\to y$; continuity and equality of the images imply $x=y$. Both parameter sequences then lie in one local inverse chart at $(x,0)$, contradicting local injectivity. Hence $E$ is a diffeomorphism from $\partial M\times[0,\epsilon)$ onto a collar. [F1, F3, given, choose]

1.2 Choose $\chi\in C_c^\infty([0,\epsilon))$ equal to $1$ near $0$. Define $H(E(x,s),t)=\chi(s)h(x,t)$ in the collar and set $H=0$ outside it. The time support of $h$ and the normal cutoff make this a smooth function vanishing near $t=0,T$. The collar map and inverse have bounded first derivatives on a smaller compact collar, so the chain rule gives $\|H\|_{C^1([0,T]\times M)}\le C\|h\|_{C^1(\Sigma)}$. [F3, step 1.1, given, construct, algebra]

2.1 In a coordinate chart, metric compatibility and [F2] give $\operatorname{div}_g W=(\sqrt{\det G})^{-1}\partial_i(\sqrt{\det G}\,W^i)$. Use a finite smooth partition of unity. For a field supported in an interior chart, integrating each coordinate derivative gives zero. In a boundary chart flattened to $x_n\ge0$, tangential derivatives integrate to zero because the field is supported away from the chart sides, while the normal derivative integrates to $-\sqrt{\det G}\,W^n$ at $x_n=0$. The induced boundary density and outward conormal satisfy $g(W,\nu_{\mathrm{out}})dS_g=-\sqrt{\det G}\,W^n dx^1\cdots dx^{n-1}$ there, so summing the chart identities gives $\int_M\operatorname{div}_gW\,dV_g=\int_{\partial M}g(W,\nu_{\mathrm{out}})dS_g$. With $W=u\nabla_gv-v\nabla_gu$, the product rule gives $\operatorname{div}_gW=u\Delta_gv-v\Delta_gu$, hence
$$
\int_M((-\Delta_g u)v+u\Delta_gv)\,dV_g=\int_{\partial M}(u\partial_{\nu_{\mathrm{out}}}v-v\partial_{\nu_{\mathrm{out}}}u)\,dS_g.
$$
[F1, F2, F3, given, algebra]

2.2 For each fixed $x$, one-dimensional integration by parts gives $\int_0^T(u_{tt}v-u v_{tt})dt=[u_tv-u v_t]_0^T$. Integrating over $M$ and adding the spatial identity in step 2.1 yields the stated space-time Green identity. [step 2.1, given, algebra]

3.1 Since $|\partial_{\nu_{\mathrm{out}}}u|=|g(\nabla_gu,\nu_{\mathrm{out}})|\le |\nabla_gu|$, integration over the finite-measure compact boundary gives $\|\partial_{\nu_{\mathrm{out}}}u\|_{L^2(\Sigma)}^2\le T\operatorname{area}_g(\partial M)\|\nabla_gu\|_{C^0}^2$. Taking square roots proves the normal-trace estimate. [F1, given, algebra] ∎
