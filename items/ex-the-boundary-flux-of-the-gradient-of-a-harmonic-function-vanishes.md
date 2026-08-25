---
id: ex-the-boundary-flux-of-the-gradient-of-a-harmonic-function-vanishes
kind: example
title: "A function with vanishing Laplacian has zero boundary flux of its gradient on the unit box"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-greens-first-identity-for-glued-elementary-solid-regions, def-laplacian-of-a-c2-function, ex-the-closed-unit-box-is-an-elementary-solid-region, thm-the-divergence-theorem-for-an-elementary-solid-region, def-jacobian-matrix-and-gradient, def-divergence-and-curl-of-a-c1-vector-field, thm-jordan-fubini-by-sections, thm-ftc-second-part, def-euclidean-inner-product, thm-algebra-of-derivatives]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Feldman, A. Rechnitzer and E. Yeager, CLP-4 Vector Calculus, chapter 4"
      url: "https://personal.math.ubc.ca/~CLP/CLP4/clp_4_vc/clp_4_vc.html"
    - title: "M. Corral, Vector Calculus, section 4.4"
      url: "https://math.libretexts.org/Bookshelves/Calculus/Vector_Calculus_(Corral)/04%3A_Line_and_Surface_Integrals"
pipeline_run: null
---

## Example

Let $v(x,y,z)=x^2-y^2$ on the closed unit box $B=[0,1]^3$. Then $\Delta v=0$, so Green's first identity with $u\equiv1$ gives zero boundary flux for $\nabla v$. Directly, the six face contributions are $2,0,-2,0,0,0$, so they do sum to $0$.

## Facts & Assumptions

**Given:** The function $v(x,y,z)=x^2-y^2$, the constant function $u\equiv1$, and the closed unit box with the six-patch presentation of [[ex-the-closed-unit-box-is-an-elementary-solid-region]].

[L1] For a finite gluing of elementary solid regions, with $u$ of class $C^1$ and $v$ of class $C^2$ on an open neighbourhood of the union, Green's first identity reads $\iiint_E(\langle\nabla u,\nabla v\rangle+u\Delta v)=\iint_{\partial E}u\langle\nabla v,n\rangle$ ([[cor-greens-first-identity-for-glued-elementary-solid-regions]]).

[F1] The Laplacian is $\Delta f=\operatorname{div}\nabla f$ ([[def-laplacian-of-a-c2-function]]).

[L2] The closed unit box has the six outward faces of [[ex-the-closed-unit-box-is-an-elementary-solid-region]]. [ex-the-closed-unit-box-is-an-elementary-solid-region]

[L3] The divergence theorem is $\iiint_E\operatorname{div}F=\iint_{\partial E}\langle F,n\rangle$ ([[thm-the-divergence-theorem-for-an-elementary-solid-region]]).

[F2] The gradient is the vector of partial derivatives ([[def-jacobian-matrix-and-gradient]]).

[F3] The divergence is the sum of the coordinate partial derivatives ([[def-divergence-and-curl-of-a-c1-vector-field]]).

[L4] For a bounded Jordan set and an integrable function whose sections are integrable outside a content-zero exceptional set, Jordan Fubini computes the multiple integral by iterated section integrals ([[thm-jordan-fubini-by-sections]]).

[L5] If $a<b$, $G$ is differentiable on $[a,b]$, and $G'=f$ is integrable there, then $\int_a^bf=G(b)-G(a)$ ([[thm-ftc-second-part]]).

[F4] $\langle x,y\rangle=\sum_{k<n}x_ky_k$ ([[def-euclidean-inner-product]]).

[L6] Sums and products differentiate termwise in the usual way ([[thm-algebra-of-derivatives]]).

## Verification

**Proof technique:** direct.

1.1 One has $\nabla v=(2x,-2y,0)$, hence $\Delta v=\partial_x(2x)+\partial_y(-2y)+\partial_z0=2-2+0=0$ by [F1], [F2], [F3], and [L6]. [F1, F2, F3, L6, given]

2.1 Since $\nabla u=0$ and $\Delta v=0$, [L1] gives $\iint_{\partial B}\langle\nabla v,n\rangle=0$ on the unit box of [L2], viewed as the one-piece gluing of that elementary solid region; this is the same conclusion [L3] would give for the field $\nabla v$. [step 1.1, L1, L2, L3, F4]

2.2 On the face $x=1$ the outward unit normal is $e_x$, so $\langle\nabla v,n\rangle=2$ and the flux contribution is $2$ by [L4] and [L5]; on the face $x=0$ it is $0$. [step 1.1, L2, F2, F4, L4, L5]

2.3 On the face $y=1$ the outward unit normal is $e_y$, so $\langle\nabla v,n\rangle=-2$ and the contribution is $-2$; on the face $y=0$ it is $0$. [step 1.1, L2, F2, F4, L4, L5]

2.4 The third component of $\nabla v$ is $0$, so the two faces $z=0$ and $z=1$ contribute nothing. [step 1.1, L2, F2, F4]

3.1 The six face values add to $2+0-2+0+0+0=0$, agreeing with step 2.1. This is a check of Green's identity on one harmonic polynomial, not a proof of the identity. [step 2.1, step 2.2, step 2.3, step 2.4] ∎

## Remarks

- The example is deliberately asymmetric: the cancellation comes from the opposite signs of the $x$ and $y$ second derivatives, not from any symmetry between opposite faces.
