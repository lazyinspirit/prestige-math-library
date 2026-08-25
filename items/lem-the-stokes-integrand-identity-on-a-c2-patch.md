---
id: lem-the-stokes-integrand-identity-on-a-c2-patch
kind: lemma
title: "The curl flux integrand of a $C^2$ patch is a two-dimensional curl of the pulled-back field"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-curl-is-the-antisymmetric-part-of-the-total-derivative, thm-clairaut-schwarz-mixed-partials, thm-chain-rule-for-total-derivatives, thm-total-derivative-computes-directional-and-partial-derivatives, thm-algebra-of-derivatives, def-cross-product-in-r3, def-euclidean-inner-product, def-ck-euclidean-maps-and-diffeomorphisms, def-divergence-and-curl-of-a-c1-vector-field, def-the-induced-boundary-chain-of-a-c2-surface-patch, def-jacobian-matrix-and-gradient, thm-continuous-partial-derivatives-imply-total-differentiability, def-ck-and-multi-index-notation-in-several-variables]
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
    - title: "M. Corral, Vector Calculus, chapter 4 (LibreTexts)"
      url: "https://math.libretexts.org/Bookshelves/Calculus/Vector_Calculus_(Corral)/04%3A_Line_and_Surface_Integrals"
pipeline_run: null
---

## Statement

Let $O\subseteq\mathbb R^2$ be open, let $\varphi:O\to\mathbb R^3$ be $C^2$, let $U\subseteq\mathbb R^3$ be open with $\varphi[O]\subseteq U$ and let $F:U\to\mathbb R^3$ be $C^1$. Put $P^{*}=\langle F\circ\varphi,\varphi_u\rangle$ and $Q^{*}=\langle F\circ\varphi,\varphi_v\rangle$ on $O$. Then $P^{*}$ and $Q^{*}$ are $C^1$ on $O$ and, at every point of $O$, the difference of the two pulled-back partial derivatives equals the curl flux integrand:

$$\partial_uQ^{*}-\partial_vP^{*}=\bigl\langle(\operatorname{curl}F)\circ\varphi,\ \varphi_u\times\varphi_v\bigr\rangle.$$

No regularity of the patch is used: the identity holds also at parameter points where $\varphi_u\times\varphi_v=0$.

## Facts & Assumptions

**Given:** The open sets $O\subseteq\mathbb R^2$ and $U\subseteq\mathbb R^3$, the $C^2$ map $\varphi:O\to\mathbb R^3$ with $\varphi[O]\subseteq U$, and the $C^1$ field $F:U\to\mathbb R^3$.

[F1] In the present local setting, define the pulled-back functions directly by $P^{*}=\langle F\circ\varphi,\varphi_u\rangle$ and $Q^{*}=\langle F\circ\varphi,\varphi_v\rangle$ on $O$. For a regular patch over a finite elementary Green region these agree with the notation of [[def-the-induced-boundary-chain-of-a-c2-surface-patch]].

[F2] For $x,y\in\mathbb R^m$, $\langle x,y\rangle=\sum_{i<m}x_iy_i$ ([[def-euclidean-inner-product]]).

[F3] For $u,v\in\mathbb R^3$, $u\times v=(u_yv_z-u_zv_y,\,u_zv_x-u_xv_z,\,u_xv_y-u_yv_x)$ ([[def-cross-product-in-r3]]), and the curl of a $C^1$ field is $\operatorname{curl}F=(\partial_yF_z-\partial_zF_y,\ \partial_zF_x-\partial_xF_z,\ \partial_xF_y-\partial_yF_x)$ ([[def-divergence-and-curl-of-a-c1-vector-field]]).

[F4] A map is of class $C^k$ when each component is ([[def-ck-euclidean-maps-and-diffeomorphisms]]), and a scalar is $C^k$ when every iterated derivative of length at most $k$ exists and is continuous ([[def-ck-and-multi-index-notation-in-several-variables]]).

[F5] If every partial derivative $\partial_jf_i(a)$ exists, the Jacobian matrix is $Jf(a)=(\partial_jf_i(a))_{i<n,j<m}$ ([[def-jacobian-matrix-and-gradient]]).

[L1] For a $C^1$ field $F$ on an open $U\subseteq\mathbb R^3$, a point $p\in U$ and $u,v\in\mathbb R^3$, $\langle DF(p)u,v\rangle-\langle DF(p)v,u\rangle=\langle\operatorname{curl}F(p),u\times v\rangle$ ([[lem-curl-is-the-antisymmetric-part-of-the-total-derivative]]).

[L2] If $f$ is $C^2$ on an open subset of $\mathbb R^m$, then $\partial_i\partial_jf=\partial_j\partial_if$ for every pair of coordinate indices ([[thm-clairaut-schwarz-mixed-partials]]).

[L3] If $f$ is totally differentiable at $a$ and $g$ at $f(a)$, then $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$ ([[thm-chain-rule-for-total-derivatives]]).

[L4] If $f$ is totally differentiable at $a$ then $D_wf(a)=Df(a)w$ for every $w$, and the matrix of $Df(a)$ is $Jf(a)$ ([[thm-total-derivative-computes-directional-and-partial-derivatives]]).

[L5] If every partial derivative of $f$ exists on a neighbourhood of $a$ and is continuous at $a$, then $f$ is totally differentiable at $a$ with $Df(a)$ the linear map of matrix $Jf(a)$ ([[thm-continuous-partial-derivatives-imply-total-differentiability]]).

[L6] For real functions of one real variable differentiable at a point, $f+g$ is differentiable there with $(f+g)'=f'+g'$ and $fg$ is differentiable there with $(fg)'=f'g+fg'$ ([[thm-algebra-of-derivatives]]).

## Proof

**Proof technique:** direct.

1.1 Since $\varphi$ is $C^2$ on $O$, [F4] makes each $\partial_u\varphi_i$ and $\partial_v\varphi_i$ a $C^1$ function on $O$; and since $F$ is $C^1$ on $U$ with $\varphi[O]\subseteq U$, [L3], [L4] and [L5] make each $F_i\circ\varphi$ differentiable in each parameter with $$\partial_u\bigl(F_i\circ\varphi\bigr)=\sum_{j}(\partial_jF_i)(\varphi)\,\partial_u\varphi_j,\qquad \partial_v\bigl(F_i\circ\varphi\bigr)=\sum_{j}(\partial_jF_i)(\varphi)\,\partial_v\varphi_j,$$ both continuous on $O$, so $F\circ\varphi$ is $C^1$ there. By [F1], [F2] and [L6], $P^{*}=\sum_iF_i(\varphi)\,\partial_u\varphi_i$ and $Q^{*}=\sum_iF_i(\varphi)\,\partial_v\varphi_i$ are then $C^1$ on $O$. [given, F1, F2, F4, L3, L4, L5, L6]

2.1 Differentiating $Q^{*}$ with respect to $u$ by [L6] and substituting step 1.1, $$\partial_uQ^{*}=\sum_i\Bigl(\sum_j(\partial_jF_i)(\varphi)\,\partial_u\varphi_j\Bigr)\partial_v\varphi_i+\sum_iF_i(\varphi)\,\partial_u\partial_v\varphi_i,$$ and by [F2], [F5] and [L4] the first double sum is $\langle DF(\varphi)\varphi_u,\varphi_v\rangle$ while the second is $\langle F(\varphi),\partial_u\partial_v\varphi\rangle$. [step 1.1, F2, F5, L4, L6]

2.2 The same computation for $P^{*}$ with respect to $v$ gives $$\partial_vP^{*}=\sum_i\Bigl(\sum_j(\partial_jF_i)(\varphi)\,\partial_v\varphi_j\Bigr)\partial_u\varphi_i+\sum_iF_i(\varphi)\,\partial_v\partial_u\varphi_i=\langle DF(\varphi)\varphi_v,\varphi_u\rangle+\langle F(\varphi),\partial_v\partial_u\varphi\rangle.$$ [step 1.1, F2, F5, L4, L6]

3.1 Each component $\varphi_i$ is $C^2$ on $O$ by [F4], so [L2] gives $\partial_u\partial_v\varphi_i=\partial_v\partial_u\varphi_i$ for every $i$; hence the two terms $\langle F(\varphi),\partial_u\partial_v\varphi\rangle$ and $\langle F(\varphi),\partial_v\partial_u\varphi\rangle$ of steps 2.1 and 2.2 are equal. This is the only place where $\varphi$ being $C^2$ rather than $C^1$ is used. [step 2.1, step 2.2, F4, L2]

4.1 Subtracting step 2.2 from step 2.1 and cancelling by step 3.1 leaves $\partial_uQ^{*}-\partial_vP^{*}=\langle DF(\varphi)\varphi_u,\varphi_v\rangle-\langle DF(\varphi)\varphi_v,\varphi_u\rangle$, which by [L1] applied at the point $\varphi$ with the vectors $\varphi_u$ and $\varphi_v$ is $\langle\operatorname{curl}F(\varphi),\varphi_u\times\varphi_v\rangle$, the coordinates being those of [F3]. No step used $\varphi_u\times\varphi_v\ne0$. [step 2.1, step 2.2, step 3.1, F3, L1] ∎

## Remarks

- **The right-hand side is a flux integrand, but the identity is not about flux.** It is a pointwise equality of two continuous functions on $O$. Reading its right side as the flux integrand of $\operatorname{curl}F$ through the patch requires the patch to be regular; the identity itself does not, which is why it also holds along the parameter boundary, where a regular patch is allowed to degenerate.

- **What each hypothesis is for.** $F$ being $C^1$ makes $\operatorname{curl}F$ exist and makes the chain rule of step 1.1 available; $\varphi$ being $C^2$ makes $\varphi_u$ and $\varphi_v$ differentiable, so that steps 2.1 and 2.2 can be written at all, and makes the two mixed second derivatives equal in step 3.1.
