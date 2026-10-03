---
id: lem-cartier-divisor-addition-tensor
kind: lemma
title: "Addition of Cartier divisors is tensor product of their sheaves"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-cartier-divisor
  - def-invertible-sheaf
  - def-invertible-sheaf-of-cartier-divisor
  - def-sheaf-hom
  - def-sheaf-on-topological-space
  - def-sheaf-tensor-product
  - lem-cartier-divisor-sheaf-invertible
  - lem-invertible-sheaf-dual-tensor-inverse
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-10-02
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "The Stacks Project, Divisors, Definition 31.15.1 and Lemma 31.15.5"
      url: "https://stacks.math.columbia.edu/download/divisors.pdf"
    - title: "Ravi Vakil, The Rising Sea, Ch. 15 Exercise 15.3.D and §15.2.8"
      url: "https://math.stanford.edu/~vakil/216blog/FOAgoct2111public.pdf"
---

## Statement

Let $X$ be a scheme and let $D,E$ be Cartier divisors on $X$
([[def-cartier-divisor]]), with associated invertible sheaves $\mathcal O_X(D)$
and $\mathcal O_X(E)$ ([[def-invertible-sheaf-of-cartier-divisor]]). Then there
are canonical isomorphisms of $\mathcal O_X$-modules
$$\mathcal O_X(D+E)\cong\mathcal O_X(D)\otimes_{\mathcal O_X}\mathcal O_X(E),\qquad \mathcal O_X(-D)\cong\mathcal O_X(D)^{\vee},$$
where $\mathcal O_X(D)^{\vee}=\mathcal H om_{\mathcal O_X}(\mathcal O_X(D),\mathcal O_X)$
is the dual sheaf ([[def-sheaf-hom]]). If $D$ and $E$ are represented on a
common open cover $\{U_i\}$ by meromorphic units $f_i$ and $g_i$ with
regular-unit ratios, then the first isomorphism carries the local generator
$(f_ig_i)^{-1}$ of $\mathcal O_X(D+E)|_{U_i}$ to $f_i^{-1}\otimes g_i^{-1}$, and
the second carries $f_i\in\mathcal O_X(-D)(U_i)$ to the functional $\lambda_i$
on $\mathcal O_X(D)|_{U_i}=f_i^{-1}\mathcal O_{U_i}$ with
$\lambda_i(f_i^{-1})=1$.

## Facts & Assumptions

**Given:** A scheme $X$ and Cartier divisors $D,E$ on $X$, represented on a
common open cover $\{U_i\}_{i\in I}$ by meromorphic units $f_i\in\mathcal K_X(U_i)^{\times}$
for $D$ and $g_i\in\mathcal K_X(U_i)^{\times}$ for $E$, with
$f_i/f_j,g_i/g_j\in\mathcal O_X(U_i\cap U_j)^{\times}$.

[F1] A Cartier divisor is a global section of
$\mathcal K_X^{\times}/\mathcal O_X^{\times}$; the group law is induced by
multiplication of local equations, so that if $D$ is represented by $(U_i,f_i)$
and $E$ by $(U_i,g_i)$ on a common cover then $D+E$ is represented by
$(U_i,f_ig_i)$, the zero divisor $0$ is represented by the constant equation
$1$, and $-D$ is represented by $(U_i,f_i^{-1})$; passing to a common
refinement or replacing equations by regular-unit multiples does not change
the divisor ([[def-cartier-divisor]]).

[F2] For a Cartier divisor $D$ with equations $f_i$ one has
$\mathcal O_X(D)|_{U_i}=f_i^{-1}\mathcal O_{U_i}\subseteq\mathcal K_X$, the
sheaf $\mathcal O_X(D)$ is well defined independently of the datum, and
$\mathcal O_X(0)=\mathcal O_X$; the section $f_i^{-1}$ generates
$\mathcal O_X(D)$ on $U_i$, so $\mathcal O_X(D)$ is invertible
([[def-invertible-sheaf-of-cartier-divisor]],
[[lem-cartier-divisor-sheaf-invertible]]).

[F3] The tensor product of $\mathcal O_X$-modules is the sheafification of the
presheaf tensor product; if $\mathcal L|_U=\mathcal O_U\!\cdot s$ and
$\mathcal M|_U=\mathcal O_U\!\cdot t$ are free of rank one on an open set $U$,
then $\mathcal L\otimes\mathcal M|_U=\mathcal O_U\!\cdot(s\otimes t)$ is free
of rank one on $U$. The dual $\mathcal H om_{\mathcal O_X}(\mathcal L,\mathcal O_X)$
of a free rank-one module $\mathcal O_U$ is free of rank one with dual basis
$\lambda$ characterised by $\lambda(1)=1$, and formation of duals and tensor
products is compatible with restriction to open subsets
([[def-sheaf-tensor-product]], [[def-sheaf-hom]], [[def-invertible-sheaf]]).

[F4] For an invertible sheaf $\mathcal L$ the evaluation pairing
$\mathcal L^{\vee}\otimes\mathcal L\to\mathcal O_X$,
$\varphi\otimes s\mapsto\varphi(s)$, is an isomorphism, and the transition
units of $\mathcal L^{\vee}$ are the inverses of those of $\mathcal L$
([[lem-invertible-sheaf-dual-tensor-inverse]]).

[F5] Sections of a sheaf on an open cover glue uniquely when they agree on the
pairwise overlaps ([[def-sheaf-on-topological-space]]).

## Proof

1.1 **Sum and inverse equations.** On the common cover, $D+E$ is represented by the equations $f_ig_i$ and $-D$ by $f_i^{-1}$, and the associated sheaves satisfy $\mathcal O_X(D+E)|_{U_i}=(f_ig_i)^{-1}\mathcal O_{U_i}$, $\mathcal O_X(D)|_{U_i}=f_i^{-1}\mathcal O_{U_i}$, $\mathcal O_X(E)|_{U_i}=g_i^{-1}\mathcal O_{U_i}$ and $\mathcal O_X(-D)|_{U_i}=f_i\mathcal O_{U_i}$. [F1, F2]

1.2 **Dual of a local generator.** For each $i$ let $\lambda_i\in\mathcal H om_{\mathcal O_X}(\mathcal O_X(D),\mathcal O_X)(U_i)$ be the functional determined by $\lambda_i(f_i^{-1})=1$; it is a basis of the free rank-one $\mathcal O_{U_i}$-module $\mathcal O_X(D)^{\vee}|_{U_i}$ by [F3]. Hence $\mathcal O_X(D)^{\vee}|_{U_i}=\mathcal O_{U_i}\!\cdot\lambda_i$. [F2, F3]

2.1 **The addition isomorphism.** For each $i$ there is a unique $\mathcal O_{U_i}$-linear isomorphism $\varphi_i:\mathcal O_X(D)\otimes\mathcal O_X(E)|_{U_i}\to\mathcal O_X(D+E)|_{U_i}$ sending $a\,(f_i^{-1}\otimes g_i^{-1})$ to $a\,(f_ig_i)^{-1}$, and the $\varphi_i$ agree on overlaps and glue to a global isomorphism $\varphi:\mathcal O_X(D)\otimes\mathcal O_X(E)\to\mathcal O_X(D+E)$ by [F5].
Indeed, both sides are free of rank one on $U_i$, with the displayed generators. On an overlap $U_i\cap U_j$ write $u=f_i/f_j$ and $v=g_i/g_j$, units of $\mathcal O_X(U_i\cap U_j)$; then $f_i^{-1}\otimes g_i^{-1}=(uv)^{-1}\,(f_j^{-1}\otimes g_j^{-1})$ and $(f_ig_i)^{-1}=(uv)^{-1}\,(f_jg_j)^{-1}$, so the transition units of source and target coincide in the displayed trivialisations and $\varphi_i$, $\varphi_j$ agree on the overlap. Hence the $\varphi_i$ glue, and the glued map is an isomorphism because it is one on every chart.
[F2, F3, F5, step 1.1]

2.2 **The inverse isomorphism.** There are unique $\mathcal O_{U_i}$-linear isomorphisms $\tau_i:\mathcal O_X(-D)|_{U_i}\to\mathcal O_X(D)^{\vee}|_{U_i}$ sending $a\,f_i$ to $a\,\lambda_i$, where $\lambda_i(f_i^{-1})=1$, and these $\tau_i$ agree on overlaps and glue by [F5] to an isomorphism $\tau:\mathcal O_X(-D)\to\mathcal O_X(D)^{\vee}$.
Indeed, on $U_i\cap U_j$ write $f_i=uf_j$ with $u=f_i/f_j$ a unit; then the dual bases satisfy $\lambda_i=u\lambda_j$, because $\lambda_i(f_i^{-1})=\lambda_i(u^{-1}f_j^{-1})=1$ forces $\lambda_i=u\lambda_j$. Hence $a f_i=au f_j\mapsto au\lambda_j=a\lambda_i$, so $\tau_i$ and $\tau_j$ agree on the overlap, and $\tau$ is an isomorphism because each $\tau_i$ carries the basis $f_i$ of $\mathcal O_X(-D)|_{U_i}$ to the basis $\lambda_i$ of $\mathcal O_X(D)^{\vee}|_{U_i}$.
[F2, F3, F5, step 1.2]

3.1 **Conclusion.** There are canonical isomorphisms $\mathcal O_X(D+E)\cong\mathcal O_X(D)\otimes\mathcal O_X(E)$ and $\mathcal O_X(-D)\cong\mathcal O_X(D)^{\vee}$; the first is characterised by $(f_ig_i)^{-1}\mapsto f_i^{-1}\otimes g_i^{-1}$ and the second by $f_i\mapsto\lambda_i$ with $\lambda_i(f_i^{-1})=1$. The second is the canonical inverse of $\mathcal O_X(D)$ described by [F4]: combining it with the first for the pair $(D,-D)$ gives $\mathcal O_X(-D)\otimes\mathcal O_X(D)\cong\mathcal O_X(0)=\mathcal O_X$, the evaluation pairing. The construction uses only the given equations; no trivialisations are chosen and no choice principle is used. [F4, step 2.1, step 2.2] ∎

On the empty scheme all three sheaves are the zero module sheaf, which is the
unique $\mathcal O_\varnothing$-module, and both canonical isomorphisms are the
identity of that module. For $E=0$, whose equations are $g_i=1$, the addition
isomorphism reads $\mathcal O_X(D)\cong\mathcal O_X(D)\otimes\mathcal O_X$,
the canonical unit isomorphism; for $D=0$ it reads
$\mathcal O_X(E)\cong\mathcal O_X\otimes\mathcal O_X(E)$. Taking $E=-D$ gives
$\mathcal O_X(D)\otimes\mathcal O_X(-D)\cong\mathcal O_X$, recovering the
evaluation isomorphism of [F4] from the divisor side. If the divisors are
represented on two different covers, one first passes to a common refinement,
which changes neither the divisors nor their associated sheaves by [F1] and
[F2].
