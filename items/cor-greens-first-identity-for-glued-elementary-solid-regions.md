---
id: cor-greens-first-identity-for-glued-elementary-solid-regions
kind: corollary
title: "Green's first identity on a glued elementary solid region"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-the-divergence-theorem-for-finite-gluings-of-elementary-solid-regions, def-laplacian-of-a-c2-function, lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules, def-jacobian-matrix-and-gradient, def-divergence-and-curl-of-a-c1-vector-field, def-euclidean-inner-product, def-ck-and-multi-index-notation-in-several-variables, def-ck-euclidean-maps-and-diffeomorphisms]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Feldman, A. Rechnitzer and E. Yeager, CLP-4 Vector Calculus (University of British Columbia), section 4.2"
      url: "https://personal.math.ubc.ca/~CLP/CLP4/clp_4_vc/clp_4_vc.html"
    - title: "M. Corral, Vector Calculus, chapter 4 (LibreTexts)"
      url: "https://math.libretexts.org/Bookshelves/Calculus/Vector_Calculus_(Corral)/04%3A_Line_and_Surface_Integrals"
pipeline_run: null
---

## Statement

Let a finite gluing of elementary solid regions be given, with union $E$ and outer boundary presentation $\Sigma^{\mathrm{out}}$, let $O$ be an open set containing $E$, let $u:O\to\mathbb R$ be $C^1$ and let $v:O\to\mathbb R$ be $C^2$. Then

$$\iiint_E(\langle\nabla u,\nabla v\rangle+u\Delta v)=\iint_{\partial E}u\langle\nabla v,n\rangle,$$

the right-hand side being the flux of the field $u\nabla v$ over $\Sigma^{\mathrm{out}}$.

No symmetry between $u$ and $v$ is claimed: the hypotheses on them differ.

## Facts & Assumptions

**Given:** The finite gluing with union $E$ and outer presentation $\Sigma^{\mathrm{out}}$, the open $O\supseteq E$, the $C^1$ function $u$ and the $C^2$ function $v$ on $O$.

[F1] For scalar-valued $f$ the gradient is $\nabla f=(\partial_0f,\ldots,\partial_{m-1}f)$ ([[def-jacobian-matrix-and-gradient]]).

[F2] For a $C^2$ function $f$ on an open subset of $\mathbb R^n$, $\Delta f=\operatorname{div}\nabla f=\sum_{i<n}\partial_i\partial_if$ ([[def-laplacian-of-a-c2-function]]).

[F3] A scalar $f$ is of class $C^k$ on $U$ when every iterated derivative of length at most $k$ exists and is continuous on $U$ ([[def-ck-and-multi-index-notation-in-several-variables]]), and a map is $C^k$ when each component is ([[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F4] For $x,y\in\mathbb R^m$, $\langle x,y\rangle=\sum_{i<m}x_iy_i$ ([[def-euclidean-inner-product]]), and the divergence of a $C^1$ field is $\operatorname{div}G=\sum_{i<n}\partial_iG_i$ ([[def-divergence-and-curl-of-a-c1-vector-field]]).

[L1] Let $U\subseteq\mathbb R^n$ be open, let $G:U\to\mathbb R^n$ be $C^1$ and let $f:U\to\mathbb R$ be $C^1$. Then $fG$ is $C^1$ on $U$ and $\operatorname{div}(fG)=\langle\nabla f,G\rangle+f\operatorname{div}G$ ([[lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules]]).

[L2] For a finite gluing with union $E$ and outer presentation $\Sigma^{\mathrm{out}}$ and a $C^1$ field $G$ on an open set containing $E$, $\iiint_E\operatorname{div}G=\iint_{\partial E}\langle G,n\rangle$ ([[thm-the-divergence-theorem-for-finite-gluings-of-elementary-solid-regions]]).

## Proof

**Proof technique:** direct.

1.1 Since $v$ is $C^2$ on $O$, [F1] and [F3] make each component $\partial_iv$ of $\nabla v$ a function with continuous first partial derivatives, so $\nabla v$ is a $C^1$ field on $O$. [given, F1, F3]

2.1 The function $u$ is $C^1$ on $O$ and $\nabla v$ is a $C^1$ field there by step 1.1, so [L1] with $f=u$ and $G=\nabla v$ makes $u\nabla v$ a $C^1$ field on $O$ with $$\operatorname{div}(u\nabla v)=\langle\nabla u,\nabla v\rangle+u\operatorname{div}\nabla v=\langle\nabla u,\nabla v\rangle+u\Delta v,$$ the last equality by [F2] and [F4]. [step 1.1, F2, F4, L1]

3.1 Applying [L2] to the $C^1$ field $u\nabla v$ on the open $O\supseteq E$ and substituting step 2.1 on the left gives $\iiint_E(\langle\nabla u,\nabla v\rangle+u\Delta v)=\iint_{\partial E}\langle u\nabla v,n\rangle$, and by [F4] the boundary integrand is $u\langle\nabla v,n\rangle$. That is the asserted identity. [step 2.1, F4, L2] ∎

## Remarks

- **The regularity is asymmetric because the identity is.** The left-hand side applies $\Delta$ to $v$ and only $\nabla$ to $u$, so $v$ must be $C^2$ and $u$ need only be $C^1$. Interchanging them is a different statement and needs $u$ to be $C^2$ as well; that is [[cor-greens-second-identity-for-glued-elementary-solid-regions]].

- **The boundary integrand is the normal derivative of $v$, weighted by $u$.** The quantity $\langle\nabla v,n\rangle$ is the derivative of $v$ in the direction of the boundary normal, and the identity says that its $u$-weighted boundary integral is controlled by $\Delta v$ and by the pairing of the two gradients inside the solid. Taking $u$ identically $1$ makes the first volume term vanish, which is the form used on the companion examples page.
