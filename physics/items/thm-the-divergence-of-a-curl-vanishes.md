---
id: thm-the-divergence-of-a-curl-vanishes
kind: theorem
title: "The divergence of the curl of a $C^2$ field vanishes"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-divergence-and-curl-of-a-c1-vector-field, thm-clairaut-schwarz-mixed-partials, def-ck-and-multi-index-notation-in-several-variables, def-ck-euclidean-maps-and-diffeomorphisms]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "J. Feldman, A. Rechnitzer and E. Yeager, CLP-4 Vector Calculus (University of British Columbia), Theorem 4.1.7"
      url: "https://personal.math.ubc.ca/~CLP/CLP4/clp_4_vc/clp_4_vc.html"
    - title: "M. Corral, Vector Calculus, chapter 4 (LibreTexts)"
      url: "https://math.libretexts.org/Bookshelves/Calculus/Vector_Calculus_(Corral)/04%3A_Line_and_Surface_Integrals"
pipeline_run: null
---

## Statement

Let $U\subseteq\mathbb R^3$ be open and let $F:U\to\mathbb R^3$ be $C^2$. Then $\operatorname{curl}F$ is a $C^1$ field on $U$ and

$$\operatorname{div}(\operatorname{curl}F)=0\qquad\text{on }U.$$

## Facts & Assumptions

**Given:** The open set $U\subseteq\mathbb R^3$ and the $C^2$ field $F:U\to\mathbb R^3$ of the Statement, with the three coordinates named $x,y,z$.

[F1] The divergence of a $C^1$ field $G$ on an open $U\subseteq\mathbb R^n$ is $\operatorname{div}G=\sum_{i<n}\partial_iG_i$ ([[def-divergence-and-curl-of-a-c1-vector-field]]).

[F2] The curl of a $C^1$ field $F$ on an open $U\subseteq\mathbb R^3$ is $\operatorname{curl}F=(\partial_yF_z-\partial_zF_y,\ \partial_zF_x-\partial_xF_z,\ \partial_xF_y-\partial_yF_x)$ ([[def-divergence-and-curl-of-a-c1-vector-field]]).

[F3] A scalar $f$ is of class $C^k$ on $U$ when, for every word $(i_1,\ldots,i_r)$ of coordinate indices with $0\le r\le k$, the iterated derivative $\partial_{i_r}\cdots\partial_{i_1}f$ exists and is continuous on $U$ ([[def-ck-and-multi-index-notation-in-several-variables]]).

[F4] A map $f:U\to\mathbb R^q$ is of class $C^k$ when each component is of class $C^k$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]).

[L1] If $f$ is $C^2$ on an open subset of $\mathbb R^m$, then $\partial_i\partial_jf=\partial_j\partial_if$ for every pair of coordinate indices ([[thm-clairaut-schwarz-mixed-partials]]).

## Proof

**Proof technique:** direct.

1.1 By [F2] each coordinate of $\operatorname{curl}F$ is a difference of two first partial derivatives of components of $F$. Since $F$ is $C^2$, [F4] and [F3] with $k=2$ give that every iterated derivative $\partial_i\partial_jF_a$ exists and is continuous on $U$, so each coordinate of $\operatorname{curl}F$ has continuous first partial derivatives; by [F4] again, $\operatorname{curl}F$ is $C^1$ on $U$ and its divergence is defined. [given, F2, F3, F4]

2.1 By [F1] and [F2], $\operatorname{div}(\operatorname{curl}F)=\partial_x(\partial_yF_z-\partial_zF_y)+\partial_y(\partial_zF_x-\partial_xF_z)+\partial_z(\partial_xF_y-\partial_yF_x)$, which written out is the sum of the six terms $\partial_x\partial_yF_z$, $-\partial_x\partial_zF_y$, $\partial_y\partial_zF_x$, $-\partial_y\partial_xF_z$, $\partial_z\partial_xF_y$ and $-\partial_z\partial_yF_x$. [step 1.1, F1, F2, algebra]

3.1 Each component of $F$ is $C^2$, so [L1] gives $\partial_x\partial_yF_z=\partial_y\partial_xF_z$, $\partial_y\partial_zF_x=\partial_z\partial_yF_x$ and $\partial_z\partial_xF_y=\partial_x\partial_zF_y$. Pairing the six terms of step 2.1 accordingly, $\partial_x\partial_yF_z$ cancels $-\partial_y\partial_xF_z$, $\partial_y\partial_zF_x$ cancels $-\partial_z\partial_yF_x$, and $\partial_z\partial_xF_y$ cancels $-\partial_x\partial_zF_y$. [step 2.1, L1]

4.1 The six terms therefore sum to zero at every point of $U$, so $\operatorname{div}(\operatorname{curl}F)=0$ on $U$. The hypothesis that $F$ is $C^2$ is used in step 1.1, so that $\operatorname{curl}F$ is $C^1$ and has a divergence, and in step 3.1 as the hypothesis of [L1]. [step 3.1] ∎

## Remarks

- **Where the hypothesis bites.** If $F$ is only $C^1$, then $\operatorname{curl}F$ is merely continuous and its partial derivatives need not exist, so $\operatorname{div}(\operatorname{curl}F)$ is not defined; there is nothing to assert, rather than a weaker assertion.

- **The converse.** A divergence-free $C^1$ field on a star-shaped open subset of $\mathbb R^3$ is the curl of something: that is [[thm-a-divergence-free-c1-field-on-a-star-shaped-open-set-has-a-vector-potential]].
