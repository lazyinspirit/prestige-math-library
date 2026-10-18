---
id: lem-periodic-fv-grid-reaction-diffusion-commutator-bound
kind: lemma
title: Mesh-uniform reaction-diffusion commutator bound on a periodic grid
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
aliases: []
deps:
  - def-periodic-reaction-diffusion-grid
  - def-semilinear-reaction-diffusion-system
  - def-reaction-vector-field-and-quasipositivity
  - thm-ftc-second-part
  - thm-continuous-implies-integrable
  - cor-mean-value-theorem
  - cor-differentiable-implies-continuous
justified_by: []
proof_strategy: direct
axiom_base: No choice axiom is used; all estimates are componentwise finite differences and chain rules.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Willem Hundsdorfer, Numerical Solution of Advection-Diffusion-Reaction Equations, lecture notes for Ph.D. course, 1996
      url: https://ir.cwi.nl/pub/4797/4797D.pdf
      locator: "§9, printed pp. 60–61: the Lie local defect contains the commutator; the notes explicitly warn that mesh-uniform bounds require control of the commutator terms."
verification:
  precheck: pass
---

## Statement

Let $u:[0,T]\times\mathbb T_L^d\to R$ have bounded spatial derivatives through order two, with $R$ a compact rectangle. Let $F\in C^2$ on a neighborhood of $R$, and let $\mathcal A_h=-D A_h^{\rm per}$ be the periodic-grid diffusion generator from [[def-periodic-reaction-diffusion-grid]]. Define $F_h(P_hu)=P_h(F(u))$ pointwise. Then, uniformly over all periodic grids with $h_j=L_j/N_j$ and $N_j\ge3$,
$$\sup_{\substack{N_j\ge3\ (1\le j\le d),\ 0\le t\le T}}\left\|\mathcal A_hF_h(P_hu(t))-DF(P_hu(t))\mathcal A_hP_hu(t)\right\|_\infty\le C_{\rm com}<\infty,$$
where $C_{\rm com}$ depends only on the dimension, $D$, the suprema of $D^2u$, $DF$, $D^2F$, and the compact state rectangle, not on the mesh widths. This is the finite-grid commutator used in the first-order split-error proof; it is not a claim for arbitrary meshes or unbounded operators.

## Facts & Assumptions

**Given:** The periodic uniform grid, a diagonal nonnegative diffusion matrix, $u$ with bounded spatial derivatives through order two, and $F\in C^2$ on a neighborhood of the compact range of $u$.

[F1] [[def-periodic-reaction-diffusion-grid]]: $\mathcal A_h=-D A_h^{\rm per}$ and each coordinate of $A_h^{\rm per}$ is a centered second difference divided by $h_j^2$.

[F2] [[def-reaction-vector-field-and-quasipositivity]]: $F$ is defined on an open neighborhood of $R$; the additional $C^2$ assumption is in the Statement.

[F3] [[thm-ftc-second-part]]: if $G$ is differentiable on a compact interval, including its one-sided endpoint derivatives, and $G'$ is Darboux integrable there, then $\int_a^bG'=G(b)-G(a)$.

[F4] [[thm-continuous-implies-integrable]]: a continuous scalar function on a compact interval is bounded and Darboux integrable.

[F5] [[cor-mean-value-theorem]]: if a scalar function is continuous on a closed interval and differentiable in its interior, its endpoint difference equals an interior derivative times the interval length.

[F6] [[cor-differentiable-implies-continuous]]: a differentiable scalar function is continuous at each point of differentiability; in particular, an everywhere existing second derivative makes the first derivative continuous on each coordinate interval.

[A1] The range of $u$ lies in a compact rectangle $R$ and the displayed derivatives are uniformly bounded on $[0,T]\times\mathbb T_L^d$.

## Proof

1.1 Let $w$ be a twice differentiable scalar function on a coordinate lift with bounded $w''$. By [F6], $w'$ is continuous; hence $s\mapsto w'(x+s)-w'(x-s)$ is continuous and integrable on $[0,h]$ by [F4]. Apply [F3] to the differentiable function $s\mapsto w(x+s)+w(x-s)-2w(x)$, whose endpoint derivatives are the corresponding one-sided restrictions. This gives $$w(x+h)-2w(x)+w(x-h)=\int_0^h\bigl(w'(x+s)-w'(x-s)\bigr)\,ds.$$ For $s>0$, [F5] applied to $w'$ on $[x-s,x+s]$ gives $|w'(x+s)-w'(x-s)|\le2s\|w''\|_\infty$; at $s=0$ this also holds. Integrating yields $|w(x+h)-2w(x)+w(x-h)|\le h^2\|w''\|_\infty$. Thus the centered second difference divided by $h^2$ has the same mesh-independent bound. Only the continuous first derivative was integrated; integrability or continuity of $w''$ is not assumed. [A1, F3, F4, F5, F6, given, algebra]


2.1 Fix a component $i$ and a spatial direction $j$. The chain rule first gives $\partial_j(F_i(u))=\sum_k\partial_kF_i(u)\,\partial_ju_k$. Applying the product rule to each summand and the chain rule to $\partial_kF_i(u)$ gives $$\partial_{jj}(F_i(u))=\sum_k\partial_kF_i(u)\,\partial_{jj}u_k+\sum_{k,\ell}\partial_{k\ell}F_i(u)(\partial_ju_k)(\partial_ju_\ell).$$ These are pointwise identities under the stated second-order spatial differentiability of $u$ and $F\in C^2$ near its range. To express the bound using only the quantities listed in the Statement, let $w_k=\sup_R z_k-\inf_R z_k$ and $H_{kj}=\|\partial_{jj}u_k\|_\infty$. For $g(s)=u_k(x+se_j,t)$ on the periodic lift, $g'$ is continuous by [F6], and $r\mapsto g'(r)-g'(0)$ is integrable on $[0,s]$ by [F4]. Apply [F3] to $r\mapsto g(r)-g(0)-rg'(0)$ to get $g(s)-g(0)-sg'(0)=\int_0^s(g'(r)-g'(0))\,dr$. By [F5] on $g'$, $|g'(r)-g'(0)|\le rH_{kj}$ for $0\le r\le s$. The remainder is therefore bounded by $s^2H_{kj}/2$. Since $|g(s)-g(0)|\le w_k$, this yields, for every $s>0$, $$s|\partial_ju_k(x,t)|\le w_k+\frac{s^2}{2}H_{kj}.$$ If $w_kH_{kj}>0$, choose $s=\sqrt{2w_k/H_{kj}}$ to obtain $|\partial_ju_k|\le\sqrt{2w_kH_{kj}}$. If $H_{kj}=0$, the same inequality for every $s$ gives $\partial_ju_k=0$; if $w_k=0$, the component is constant and the same conclusion holds. Therefore the displayed chain-rule terms are uniformly bounded in terms of $R$, $D^2u$, $DF$, and $D^2F$, as asserted. [A1, F2, F3, F4, F5, F6, step 1.1, algebra]


3.1 In each component, $\mathcal A_hF_h(P_hu)$ is a finite sum of $d_i$ times the centered second differences of $F_i\circ u$, while $DF(P_hu)\mathcal A_hP_hu$ is the finite sum of $\partial_kF_i(u)d_k$ times the centered second differences of $u_k$. Step 1.1 bounds each difference uniformly, and step 2.1 bounds every coefficient. There are only $d m^2$ terms and $D$ is fixed, so their sum is bounded by a constant independent of all $h_j$. [A1, F1, F2, step 1.1, step 2.1, algebra] ∎

