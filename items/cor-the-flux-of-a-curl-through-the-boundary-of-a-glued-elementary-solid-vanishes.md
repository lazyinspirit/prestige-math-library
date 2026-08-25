---
id: cor-the-flux-of-a-curl-through-the-boundary-of-a-glued-elementary-solid-vanishes
kind: corollary
title: "The flux of a curl through the boundary of a glued elementary solid vanishes"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-the-divergence-of-a-curl-vanishes, cor-a-divergence-free-field-has-zero-outward-flux-through-a-glued-elementary-solid, thm-the-divergence-theorem-for-finite-gluings-of-elementary-solid-regions, def-divergence-and-curl-of-a-c1-vector-field, def-finite-gluing-of-elementary-solid-regions, def-finitely-patched-regular-surface-and-integrals, def-ck-and-multi-index-notation-in-several-variables, def-euclidean-inner-product]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Corral, Vector Calculus, chapter 4 (LibreTexts), Corollary 4.18"
      url: "https://math.libretexts.org/Bookshelves/Calculus/Vector_Calculus_(Corral)/04%3A_Line_and_Surface_Integrals"
pipeline_run: null
---

## Statement

Let a finite gluing of elementary solid regions be given, with union $E$ and outer boundary presentation $\Sigma^{\mathrm{out}}$, and let $F$ be a vector field of class $C^2$ on an open set $O\subseteq\mathbb R^3$ containing $E$. Then

$$\iint_{\partial E}\langle\operatorname{curl}F,n\rangle=0.$$

The hypothesis is $C^2$, not $C^1$: with $F$ only $C^1$ the field $\operatorname{curl}F$ need not have a divergence at any point, so neither the degree-two identity nor the divergence theorem has a hypothesis to consume.

## Facts & Assumptions

**Given:** The finite gluing with union $E$ and outer presentation $\Sigma^{\mathrm{out}}$, the open $O\supseteq E$, and the $C^2$ field $F$ on $O$.

[F1] The curl of a $C^1$ field on an open subset of $\mathbb R^3$ is $\operatorname{curl}F=(\partial_yF_z-\partial_zF_y,\ \partial_zF_x-\partial_xF_z,\ \partial_xF_y-\partial_yF_x)$, and the divergence of a $C^1$ field is $\operatorname{div}G=\sum_{i<n}\partial_iG_i$ ([[def-divergence-and-curl-of-a-c1-vector-field]]).

[F2] A scalar $f$ is of class $C^k$ on $U$ when, for every word $(i_1,\ldots,i_r)$ of coordinate indices with $0\le r\le k$, the iterated derivative $\partial_{i_r}\cdots\partial_{i_1}f$ exists and is continuous on $U$ ([[def-ck-and-multi-index-notation-in-several-variables]]).

[F3] In a finite gluing the outer patches form a compatible finite patch presentation of $\partial E$, over which flux is the sum of the patch values, with $\langle x,y\rangle=\sum_{i<m}x_iy_i$ ([[def-finite-gluing-of-elementary-solid-regions]], [[def-finitely-patched-regular-surface-and-integrals]], [[def-euclidean-inner-product]]).

[L1] For $U\subseteq\mathbb R^3$ open and $F:U\to\mathbb R^3$ of class $C^2$, the field $\operatorname{curl}F$ is $C^1$ on $U$ and $\operatorname{div}(\operatorname{curl}F)=0$ on $U$ ([[thm-the-divergence-of-a-curl-vanishes]]).

[L2] For a finite gluing with union $E$ and a $C^1$ field $G$ on an open set containing $E$ whose divergence vanishes there, $\iint_{\partial E}\langle G,n\rangle=0$ ([[cor-a-divergence-free-field-has-zero-outward-flux-through-a-glued-elementary-solid]]).

## Proof

**Proof technique:** direct.

1.1 Each coordinate of $\operatorname{curl}F$ is a difference of two first partial derivatives of components of $F$ by [F1]. Since $F$ is $C^2$ on $O$, [F2] makes every iterated derivative $\partial_i\partial_jF_a$ exist and be continuous on $O$, so each coordinate of $\operatorname{curl}F$ has continuous first partial derivatives; hence $\operatorname{curl}F$ is a $C^1$ field on $O$, which is what [L1] asserts and which is exactly the regularity [L2] requires of the field it is applied to. [given, F1, F2, L1]

2.1 By [L1] the divergence of $\operatorname{curl}F$ vanishes at every point of $O$, and $O$ is an open set containing $E$. So [L2] applied to $G=\operatorname{curl}F$, a $C^1$ field on $O$ by step 1.1 with vanishing divergence there, gives $\iint_{\partial E}\langle\operatorname{curl}F,n\rangle=0$, the flux being read over the outer presentation as in [F3]. [step 1.1, F3, L1, L2] ∎

## Remarks

- **Where $C^2$ is spent.** It is used once, in step 1.1, to make $\operatorname{curl}F$ a $C^1$ field. Everything after that is the divergence-free corollary applied to that field. The identity $\operatorname{div}\operatorname{curl}F=0$ is itself a $C^2$ statement, so the hypothesis cannot be weakened by rearranging the argument.

- **The converse is false.** A field with zero outward flux through the boundary of every glued elementary solid need not be a curl on the whole of $O$: the divergence-free field is a curl on a star-shaped open set by [[thm-a-divergence-free-c1-field-on-a-star-shaped-open-set-has-a-vector-potential]], and on a general open set that theorem's hypothesis is unavailable. Nothing here asserts otherwise.
