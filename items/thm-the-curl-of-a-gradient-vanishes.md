---
id: thm-the-curl-of-a-gradient-vanishes
kind: theorem
title: "The curl of the gradient of a $C^2$ function vanishes"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-divergence-and-curl-of-a-c1-vector-field, def-jacobian-matrix-and-gradient, thm-clairaut-schwarz-mixed-partials, def-ck-and-multi-index-notation-in-several-variables, def-ck-euclidean-maps-and-diffeomorphisms]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
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

Let $U\subseteq\mathbb R^3$ be open and let $\phi:U\to\mathbb R$ be $C^2$. Then $\nabla\phi$ is a $C^1$ field on $U$ and

$$\operatorname{curl}\nabla\phi=0\qquad\text{on }U.$$

## Facts & Assumptions

**Given:** The open set $U\subseteq\mathbb R^3$ and the $C^2$ function $\phi:U\to\mathbb R$ of the Statement, with the three coordinates named $x,y,z$.

[F1] The curl of a $C^1$ field $F$ on an open $U\subseteq\mathbb R^3$ is $\operatorname{curl}F=(\partial_yF_z-\partial_zF_y,\ \partial_zF_x-\partial_xF_z,\ \partial_xF_y-\partial_yF_x)$ ([[def-divergence-and-curl-of-a-c1-vector-field]]).

[F2] For scalar-valued $f$, its **gradient** is $\nabla f(a)=(\partial_0f(a),\ldots,\partial_{m-1}f(a))$ ([[def-jacobian-matrix-and-gradient]]).

[F3] A scalar $f$ is of class $C^k$ on $U$ when, for every word $(i_1,\ldots,i_r)$ of coordinate indices with $0\le r\le k$, the iterated derivative $\partial_{i_r}\cdots\partial_{i_1}f$ exists and is continuous on $U$ ([[def-ck-and-multi-index-notation-in-several-variables]]).

[F4] A map $f:U\to\mathbb R^q$ is of class $C^k$ when each component is of class $C^k$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]).

[L1] If $f$ is $C^2$ on an open subset of $\mathbb R^m$, then $\partial_i\partial_jf=\partial_j\partial_if$ for every pair of coordinate indices ([[thm-clairaut-schwarz-mixed-partials]]).

## Proof

**Proof technique:** direct.

1.1 By [F2] the components of $\nabla\phi$ are the three first partial derivatives $\partial_x\phi,\partial_y\phi,\partial_z\phi$. Since $\phi$ is $C^2$, [F3] with $k=2$ says that every iterated derivative $\partial_i\partial_j\phi$ exists and is continuous on $U$; so each component of $\nabla\phi$ has continuous first partial derivatives, and by [F4] the field $\nabla\phi$ is $C^1$ on $U$ and its curl is defined. [given, F2, F3, F4]

2.1 By [F1] and [F2] the first coordinate of $\operatorname{curl}\nabla\phi$ is $\partial_y(\partial_z\phi)-\partial_z(\partial_y\phi)$, and by [L1] applied to $\phi$ with the index pair $y,z$ these two iterated derivatives are equal, so this coordinate is zero at every point of $U$. [step 1.1, F1, F2, L1]

2.2 By [F1] and [F2] the second coordinate of $\operatorname{curl}\nabla\phi$ is $\partial_z(\partial_x\phi)-\partial_x(\partial_z\phi)$, and by [L1] applied with the index pair $z,x$ these are equal, so this coordinate is zero at every point of $U$. [step 1.1, F1, F2, L1]

2.3 By [F1] and [F2] the third coordinate of $\operatorname{curl}\nabla\phi$ is $\partial_x(\partial_y\phi)-\partial_y(\partial_x\phi)$, and by [L1] applied with the index pair $x,y$ these are equal, so this coordinate is zero at every point of $U$. [step 1.1, F1, F2, L1]

3.1 All three coordinates vanish at every point of $U$, so $\operatorname{curl}\nabla\phi=0$ on $U$. The hypothesis that $\phi$ is $C^2$ was used twice: in step 1.1, so that $\nabla\phi$ is $C^1$ and its curl is defined at all, and in steps 2.1 to 2.3 as the hypothesis of [L1]. [step 2.1, step 2.2, step 2.3] ∎

## Remarks

- **Why $C^1$ would not do.** With $\phi$ merely $C^1$ the field $\nabla\phi$ need not be differentiable, so $\operatorname{curl}\nabla\phi$ need not be defined; the statement would have no content rather than a weaker one.

- **What the converse would say.** This theorem says every gradient of a $C^2$ function is curl-free. Which curl-free fields are gradients is a separate question, answered on a star-shaped open set by [[cor-a-curl-free-c1-field-on-a-star-shaped-open-subset-of-r3-is-conservative]]; the hypothesis on the domain there is not decorative, and the companion examples page exhibits a curl-free field with no potential.
