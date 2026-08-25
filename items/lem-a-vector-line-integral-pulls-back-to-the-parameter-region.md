---
id: lem-a-vector-line-integral-pulls-back-to-the-parameter-region
kind: lemma
title: "A vector line integral along an image arc is the parameter line integral of the pulled-back field"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-the-induced-boundary-chain-of-a-c2-surface-patch, def-scalar-and-vector-line-integrals-along-piecewise-c1-paths, thm-chain-rule-for-total-derivatives, thm-total-derivative-computes-directional-and-partial-derivatives, def-euclidean-inner-product, def-piecewise-c1-path-operations-and-oriented-reparametrizations, def-admissible-regular-parametrized-surface-patch, thm-continuous-implies-integrable, def-ck-euclidean-maps-and-diffeomorphisms, thm-continuous-partial-derivatives-imply-total-differentiability, def-jacobian-matrix-and-gradient]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "G. Strang and E. Herman, Calculus Volume 3 (OpenStax), section 6.7"
      url: "https://openstax.org/books/calculus-volume-3/pages/6-8-the-divergence-theorem"
pipeline_run: null
---

## Statement

Let $O\subseteq\mathbb R^2$ be open, let $\varphi:O\to\mathbb R^3$ be $C^1$, let $\sigma=(\sigma_1,\sigma_2):[a,b]\to O$ be a piecewise-$C^1$ path, and let $F$ be a continuous vector field on a set containing $\varphi(\sigma([a,b]))$. Put $P^{*}=\langle F\circ\varphi,\varphi_u\rangle$ and $Q^{*}=\langle F\circ\varphi,\varphi_v\rangle$ where these are defined. Then $\varphi\circ\sigma$ is a piecewise-$C^1$ path in $\mathbb R^3$ and the vector line integral of the field along the image arc equals the parameter line integral of the pulled-back pair:

$$\int_{\varphi\circ\sigma}F\cdot d\mathbf r=\int_{\sigma}(P^{*},Q^{*})\cdot d\mathbf r.$$

## Facts & Assumptions

**Given:** The open $O\subseteq\mathbb R^2$, the $C^1$ map $\varphi:O\to\mathbb R^3$, the piecewise-$C^1$ path $\sigma:[a,b]\to O$, and the continuous field $F$ on a set containing the image of the trace of $\sigma$ under $\varphi$.

[F1] For a piecewise-$C^1$ path $\gamma:[a,b]\to\mathbb R^n$ with $a<b$, an admissible partition $a=t_0<\cdots<t_m=b$ and continuous derivative extensions $v_i$ on the pieces, $\int_\gamma F\cdot d\mathbf r=\sum_{i<m}\int_{t_i}^{t_{i+1}}\langle F(\gamma(t)),v_i(t)\rangle\,dt$; if $a=b$ the integral is $0$ ([[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]]).

[F2] For $x,y\in\mathbb R^m$, $\langle x,y\rangle=\sum_{i<m}x_iy_i$ ([[def-euclidean-inner-product]]).

[F3] A piecewise-$C^1$ path admits a partition on whose pieces its derivative has a continuous extension, and constant paths are allowed ([[def-piecewise-c1-path-operations-and-oriented-reparametrizations]]).

[F4] The pulled-back functions of a patch and a field are $P^{*}=\langle F\circ\varphi,\varphi_u\rangle$ and $Q^{*}=\langle F\circ\varphi,\varphi_v\rangle$ ([[def-the-induced-boundary-chain-of-a-c2-surface-patch]]).

[F5] A map is $C^k$ when each component is ([[def-ck-euclidean-maps-and-diffeomorphisms]]), and the Jacobian matrix of $\varphi$ has columns $\varphi_u,\varphi_v$ ([[def-jacobian-matrix-and-gradient]]); a regular patch's parametrization is $C^1$ on an open neighbourhood of its parameter region ([[def-admissible-regular-parametrized-surface-patch]]).

[L1] If $f$ is totally differentiable at $a$ and $g$ at $f(a)$, then $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$ ([[thm-chain-rule-for-total-derivatives]]).

[L2] If $f$ is totally differentiable at $a$ then $D_wf(a)=Df(a)w$ for every $w$, and the matrix of $Df(a)$ is $Jf(a)$ ([[thm-total-derivative-computes-directional-and-partial-derivatives]]).

[L3] If every partial derivative of $f$ exists on a neighbourhood of $a$ and is continuous at $a$, then $f$ is totally differentiable at $a$ with $Df(a)$ the linear map of matrix $Jf(a)$ ([[thm-continuous-partial-derivatives-imply-total-differentiability]]).

[L4] A continuous function on a closed bounded interval is Riemann integrable ([[thm-continuous-implies-integrable]]).

## Proof

**Proof technique:** direct.

1.1 If $a=b$ then both line integrals are $0$ by [F1] and the identity holds. Assume $a<b$, and by [F3] fix an admissible partition $a=t_0<\cdots<t_m=b$ and continuous extensions $v_i=(v_{i,1},v_{i,2})$ of $\sigma'$ on the pieces $[t_i,t_{i+1}]$. [given, F1, F3]

2.1 Fix $i$ and let $t$ be interior to $[t_i,t_{i+1}]$. By [F5] and [L3] the map $\varphi$ is totally differentiable at $\sigma(t)$, so [L1] and [L2] give that $\varphi\circ\sigma$ is differentiable at $t$ with $$(\varphi\circ\sigma)'(t)=D\varphi(\sigma(t))\,\sigma'(t)=\varphi_u(\sigma(t))\,v_{i,1}(t)+\varphi_v(\sigma(t))\,v_{i,2}(t),$$ the second equality because by [L2] and [F5] the matrix of $D\varphi$ has columns $\varphi_u$ and $\varphi_v$. The right-hand side is continuous in $t$ on the whole of $[t_i,t_{i+1}]$, since $\varphi_u,\varphi_v$ are continuous by [F5] and $v_i$ is continuous; so it is a continuous extension of $(\varphi\circ\sigma)'$ on that piece, and $\varphi\circ\sigma$ is a piecewise-$C^1$ path with that admissible partition. [step 1.1, F5, L1, L2, L3]

3.1 On each piece, pairing the extension of step 2.1 with $F(\varphi(\sigma(t)))$ and using [F2] gives $$\bigl\langle F(\varphi(\sigma(t))),(\varphi\circ\sigma)'(t)\bigr\rangle=\bigl\langle F(\varphi(\sigma(t))),\varphi_u(\sigma(t))\bigr\rangle v_{i,1}(t)+\bigl\langle F(\varphi(\sigma(t))),\varphi_v(\sigma(t))\bigr\rangle v_{i,2}(t),$$ which by [F4] is $P^{*}(\sigma(t))\,v_{i,1}(t)+Q^{*}(\sigma(t))\,v_{i,2}(t)=\bigl\langle(P^{*},Q^{*})(\sigma(t)),v_i(t)\bigr\rangle$. Both sides are continuous on the piece, hence integrable by [L4]. [step 2.1, F2, F4, L4]

4.1 Summing the integrals of step 3.1 over the $m$ pieces and reading each side by [F1] — the left as the vector line integral of $F$ along $\varphi\circ\sigma$ with the partition of step 2.1, the right as the vector line integral of $(P^{*},Q^{*})$ along $\sigma$ with the partition of step 1.1 — gives the asserted identity. A piece on which $\sigma$ is constant has $v_i=0$ and contributes $0$ to both sides. [step 3.1, F1] ∎

## Remarks

- **No regularity of the patch is used.** The parametrization need only be $C^1$ near the trace of $\sigma$; nothing here asks that $\varphi_u\times\varphi_v$ be nonzero, and nothing asks $\sigma$ to be injective or the trace to avoid the parameter boundary. That matters because the arcs of a positive boundary chain lie exactly on the parameter boundary, where a patch is allowed to be irregular.

- **The identity is an equality of two integrals, not a reparametrization statement.** The path $\varphi\circ\sigma$ traverses a curve in $\mathbb R^3$ and $\sigma$ traverses one in the parameter plane; what is being compared is the integral of $F$ along the first with the integral of a different field, $(P^{*},Q^{*})$, along the second.
