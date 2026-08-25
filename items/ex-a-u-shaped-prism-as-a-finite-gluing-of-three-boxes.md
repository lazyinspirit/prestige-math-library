---
id: ex-a-u-shaped-prism-as-a-finite-gluing-of-three-boxes
kind: example
title: "A U-shaped prism is a finite gluing of three boxes and is not simple in every coordinate direction"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-finite-gluing-of-elementary-solid-regions, ex-the-closed-unit-box-is-an-elementary-solid-region, def-elementary-solid-region, def-simple-solid-region-in-a-coordinate-direction, thm-the-divergence-theorem-for-finite-gluings-of-elementary-solid-regions, lem-internal-faces-cancel-when-elementary-solid-regions-are-glued, def-divergence-and-curl-of-a-c1-vector-field, thm-jordan-fubini-by-sections, thm-ftc-second-part, def-finitely-patched-regular-surface-and-integrals, def-oriented-unit-normal-and-flux-of-a-surface-patch, def-surface-reparametrization-and-orientation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "G. Strang and E. Herman, Calculus Volume 3, section 6.8"
      url: "https://openstax.org/books/calculus-volume-3/pages/6-8-the-divergence-theorem"
    - title: "J. Feldman, A. Rechnitzer and E. Yeager, CLP-4 Vector Calculus, chapter 4"
      url: "https://personal.math.ubc.ca/~CLP/CLP4/clp_4_vc/clp_4_vc.html"
pipeline_run: null
---

## Example

Let
$$E_1=[0,3]\times[0,1]\times[0,1],\quad E_2=[0,1]\times[1,3]\times[0,1],\quad E_3=[2,3]\times[1,3]\times[0,1],$$
and put $E=E_1\cup E_2\cup E_3$. Then $E$ is a finite gluing of three elementary solid regions. It is not simple in the $x$ direction, because for every $y\in(1,3)$ its section at height $y$ is the union of two disjoint intervals. For the field $F(x,y,z)=(x,0,0)$, both sides of the divergence theorem on $E$ equal $7$.

## Facts & Assumptions

**Given:** The three boxes $E_1,E_2,E_3$, their union $E$, and the field $F(x,y,z)=(x,0,0)$.

[F1] In a finite gluing, each internal patch is paired with an internal patch of a different piece by an orientation-reversing regular reparametrization ([[def-finite-gluing-of-elementary-solid-regions]]).

[L1] The closed unit box, with its six outward faces, is an elementary solid region ([[ex-the-closed-unit-box-is-an-elementary-solid-region]]).

[F2] An elementary solid region is a compact solid equipped with one compatible finite patch presentation adapted to a simple description in each of the three coordinate directions ([[def-elementary-solid-region]]).

[F3] A simple description in one direction has the form stated in [[def-simple-solid-region-in-a-coordinate-direction]].

[L2] The divergence theorem for a finite gluing is $\iiint_E\operatorname{div}F=\iint_{\partial E}\langle F,n\rangle$ ([[thm-the-divergence-theorem-for-finite-gluings-of-elementary-solid-regions]]).

[L3] In a finite gluing, the sum of the piece fluxes is the flux over the outer presentation, and the sum of the piece integrals is the integral over the union ([[lem-internal-faces-cancel-when-elementary-solid-regions-are-glued]]).

[F4] The divergence of a field is the sum of its coordinate partial derivatives ([[def-divergence-and-curl-of-a-c1-vector-field]]).

[L4] Jordan Fubini computes a multiple integral by iterated section integrals ([[thm-jordan-fubini-by-sections]]).

[L5] If $a<b$, $G$ is differentiable on $[a,b]$, and $G'=f$ is integrable there, then $\int_a^bf=G(b)-G(a)$ ([[thm-ftc-second-part]]).

[F5] In a finite patch presentation, total flux is the sum of the patch fluxes ([[def-finitely-patched-regular-surface-and-integrals]]).

[F6] Flux is computed against the oriented area vector of a patch ([[def-oriented-unit-normal-and-flux-of-a-surface-patch]]).

[F7] A surface reparametrization is orientation-reversing exactly when its parameter Jacobian determinant is negative ([[def-surface-reparametrization-and-orientation]]).

## Verification

**Proof technique:** direct.

1.1 Each $E_i$ is the image of the unit-box construction [L1] under an invertible affine coordinate scaling followed by a translation. Applying the same affine map to its three simple descriptions and six face parametrizations preserves the graph equations, nonzero oriented-area coordinates, projected disjointness, and content-zero parameter boundaries; hence [F2] makes all three pieces elementary solid regions. Their interiors are pairwise disjoint because $E_1$ lies below the plane $y=1$ while $E_2$ and $E_3$ lie above it, and $E_2$ and $E_3$ are separated by the strip $1<x<2$. [L1, F2, given]

2.1 The face of $E_1$ in the plane $y=1$ is larger than either matching face of $E_2$ or $E_3$, so it must be subdivided into three rectangles cut at $x=1$ and $x=2$; that refinement preserves the adapted presentation, because it only subdivides one existing graph face into three graph faces with disjoint projections. [step 1.1, F2, F3, F5]

2.2 For each $y\in(1,3)$ and each $z\in(0,1)$, the section of $E$ in the $x$ direction is $[0,1]\cup[2,3]$, a union of two disjoint intervals. Therefore $E$ is not simple in the $x$ direction, and the gluing clause is genuinely stronger than a single simple description. [step 1.1, F3]

3.1 Two of the three new rectangles on the face $y=1$ pair with the matching faces of $E_2$ and $E_3$; each pairing is a translation composed with a parameter swap, so its parameter Jacobian determinant is negative and [F1] and [F7] make it orientation-reversing. [step 2.1, F1, F7]

4.1 Every other face of every piece is declared outer, so the three boxes with this subdivision and pairing data form a finite gluing whose outer presentation is exactly the boundary of $E$. [step 3.1, F1, F5]

5.1 The divergence of $F$ is the constant $1$ by [F4], so [L2], [L3], [L4], and [L5] give $\iiint_E\operatorname{div}F=\operatorname{cont}(E)=3+2+2=7$ and the outward flux through the boundary presentation is the same number. [step 4.1, L2, L3, F4, L4, L5, F6] ∎

## Remarks

- The subdivision in step 1.2 is not optional. Without it, the larger face of $E_1$ on $y=1$ could not be paired patch-for-patch with the smaller faces of $E_2$ and $E_3$.
