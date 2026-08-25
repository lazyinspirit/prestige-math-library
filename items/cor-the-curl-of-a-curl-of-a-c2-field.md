---
id: cor-the-curl-of-a-curl-of-a-c2-field
kind: corollary
title: "The curl of a curl is the gradient of the divergence minus the Laplacian"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-divergence-and-curl-of-a-c1-vector-field, def-laplacian-of-a-c2-function, thm-clairaut-schwarz-mixed-partials, def-jacobian-matrix-and-gradient, def-ck-and-multi-index-notation-in-several-variables]
justified_by: []
aliases: []
landmark: false
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

Let $U\subseteq\mathbb R^3$ be open and let $F:U\to\mathbb R^3$ be $C^2$. Then $\operatorname{curl}\operatorname{curl}F$, $\nabla\operatorname{div}F$ and $\Delta F$ are all defined on $U$ and

$$\operatorname{curl}\operatorname{curl}F=\nabla\operatorname{div}F-\Delta F.$$

Here $\Delta F$ is the componentwise Laplacian of [[def-laplacian-of-a-c2-function]].

## Facts & Assumptions

**Given:** The open set $U\subseteq\mathbb R^3$ and the $C^2$ field $F:U\to\mathbb R^3$ of the Statement, with the three coordinates named $x,y,z$.

[F1] The curl of a $C^1$ field $F$ on an open $U\subseteq\mathbb R^3$ is $\operatorname{curl}F=(\partial_yF_z-\partial_zF_y,\ \partial_zF_x-\partial_xF_z,\ \partial_xF_y-\partial_yF_x)$ ([[def-divergence-and-curl-of-a-c1-vector-field]]).

[F2] The divergence of a $C^1$ field $G$ on an open $U\subseteq\mathbb R^n$ is $\operatorname{div}G=\sum_{i<n}\partial_iG_i$ ([[def-divergence-and-curl-of-a-c1-vector-field]]).

[F3] For a $C^2$ map $F$, $\Delta F$ is the field whose $i$th coordinate is $\Delta F_i$, and $\Delta f=\sum_{i<n}\partial_i\partial_if$ for a $C^2$ scalar $f$ ([[def-laplacian-of-a-c2-function]]).

[F4] For scalar-valued $f$, its gradient is $\nabla f=(\partial_0f,\ldots,\partial_{m-1}f)$ ([[def-jacobian-matrix-and-gradient]]).

[F5] A scalar $f$ is of class $C^k$ on $U$ when, for every word $(i_1,\ldots,i_r)$ of coordinate indices with $0\le r\le k$, the iterated derivative $\partial_{i_r}\cdots\partial_{i_1}f$ exists and is continuous on $U$ ([[def-ck-and-multi-index-notation-in-several-variables]]).

[L1] If $f$ is $C^2$ on an open subset of $\mathbb R^m$, then $\partial_i\partial_jf=\partial_j\partial_if$ for every pair of coordinate indices ([[thm-clairaut-schwarz-mixed-partials]]).

## Proof

**Proof technique:** direct.

1.1 Every component of $F$ is $C^2$, so by [F5] every iterated derivative $\partial_i\partial_jF_a$ exists and is continuous on $U$. Hence each coordinate of $\operatorname{curl}F$, being a difference of first partial derivatives of components of $F$ by [F1], has continuous first partial derivatives, so $\operatorname{curl}F$ is $C^1$ and $\operatorname{curl}\operatorname{curl}F$ is defined; likewise $\operatorname{div}F$ is $C^1$ by [F2], so $\nabla\operatorname{div}F$ is defined by [F4]; and $\Delta F$ is defined by [F3]. [given, F1, F2, F3, F4, F5]

2.1 By [F1] applied twice, the first coordinate of $\operatorname{curl}\operatorname{curl}F$ is $\partial_y(\operatorname{curl}F)_z-\partial_z(\operatorname{curl}F)_y=\partial_y(\partial_xF_y-\partial_yF_x)-\partial_z(\partial_zF_x-\partial_xF_z)$, that is $\partial_y\partial_xF_y-\partial_y\partial_yF_x-\partial_z\partial_zF_x+\partial_z\partial_xF_z$. [step 1.1, F1, algebra]

3.1 Adding and subtracting the single term $\partial_x\partial_xF_x$ rewrites step 2.1 as $\bigl(\partial_x\partial_xF_x+\partial_y\partial_xF_y+\partial_z\partial_xF_z\bigr)-\bigl(\partial_x\partial_xF_x+\partial_y\partial_yF_x+\partial_z\partial_zF_x\bigr)$. [step 2.1, algebra]

4.1 By [L1], $\partial_y\partial_xF_y=\partial_x\partial_yF_y$ and $\partial_z\partial_xF_z=\partial_x\partial_zF_z$, so the first bracket of step 3.1 is $\partial_x\bigl(\partial_xF_x+\partial_yF_y+\partial_zF_z\bigr)=\partial_x\operatorname{div}F$, the first coordinate of $\nabla\operatorname{div}F$ by [F2] and [F4]; the second bracket is $\Delta F_x$, the first coordinate of $\Delta F$ by [F3]. Hence the first coordinate of $\operatorname{curl}\operatorname{curl}F$ is that of $\nabla\operatorname{div}F-\Delta F$. [step 3.1, L1, F2, F3, F4]

4.2 In the second coordinate, [F1] gives $\partial_z(\operatorname{curl}F)_x-\partial_x(\operatorname{curl}F)_z=\partial_z\partial_yF_z-\partial_z\partial_zF_y-\partial_x\partial_xF_y+\partial_x\partial_yF_x$; adding and subtracting $\partial_y\partial_yF_y$ and applying [L1] to $\partial_z\partial_yF_z=\partial_y\partial_zF_z$ and $\partial_x\partial_yF_x=\partial_y\partial_xF_x$ turns it into $\partial_y\operatorname{div}F-\Delta F_y$. In the third coordinate, [F1] gives $\partial_x(\operatorname{curl}F)_y-\partial_y(\operatorname{curl}F)_x=\partial_x\partial_zF_x-\partial_x\partial_xF_z-\partial_y\partial_yF_z+\partial_y\partial_zF_y$; adding and subtracting $\partial_z\partial_zF_z$ and applying [L1] to $\partial_x\partial_zF_x=\partial_z\partial_xF_x$ and $\partial_y\partial_zF_y=\partial_z\partial_yF_y$ turns it into $\partial_z\operatorname{div}F-\Delta F_z$. [step 2.1, step 3.1, L1, F1, F2, F3, F4]

5.1 All three coordinates of $\operatorname{curl}\operatorname{curl}F$ agree with those of $\nabla\operatorname{div}F-\Delta F$ at every point of $U$, which is the asserted identity. The hypothesis that $F$ is $C^2$ is used in step 1.1, so that all three expressions are defined, and in steps 4.1 and 4.2 as the hypothesis of [L1]. [step 4.1, step 4.2] ∎

## Remarks

- **The added and subtracted term is what makes the identity close.** The expansion of $(\operatorname{curl}\operatorname{curl}F)_x$ contains no pure second derivative $\partial_x\partial_xF_x$, while both $\nabla\operatorname{div}F$ and $\Delta F$ do; that one term belongs to both groups and cancels between them, which is why it can be inserted at will and why neither side alone matches the expansion.
