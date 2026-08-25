---
id: cor-every-face-of-an-elementary-solid-region-is-outward-oriented
kind: corollary
title: "Every patch of an elementary solid region's presentation is a graph face in some direction, and at interior base points its normal is outward"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-elementary-solid-region, prop-the-graph-faces-of-an-adapted-presentation-carry-the-outward-normal, def-outward-unit-normal-at-a-boundary-point-of-a-compact-solid, def-euclidean-inner-product, lem-standard-basis-of-f-n, def-adapted-outward-boundary-presentation-of-a-simple-solid-region, def-admissible-regular-parametrized-surface-patch, def-oriented-unit-normal-and-flux-of-a-surface-patch]
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
    - title: "M. Corral, Vector Calculus, chapter 4 (LibreTexts)"
      url: "https://math.libretexts.org/Bookshelves/Calculus/Vector_Calculus_(Corral)/04%3A_Line_and_Surface_Integrals"
pipeline_run: null
---

## Statement

Let $E$ be an elementary solid region with presentation $\Sigma=\bigl((D_1,\varphi_1),\ldots,(D_P,\varphi_P)\bigr)$ and sublists $\Sigma^{+}_k,\Sigma^{-}_k,\Sigma^{0}_k$ for $k\in\{x,y,z\}$ ([[def-elementary-solid-region]]). Then every patch of the presentation is an upper or a lower face in at least one coordinate direction: for each $j$ there is $k$ with $j\in\Sigma^{+}_k\cup\Sigma^{-}_k$.

Moreover, for such a $j$ and $k$ and for every interior parameter point $c\in D_j^\circ$ whose projection $\pi_k(\varphi_j(c))$ lies in the interior of the base $D_k$ of the $k$th description, the induced unit normal $N_{\varphi_j}(c)$ is the outward unit normal to the tangent plane at $\varphi_j(c)$.

## Facts & Assumptions

**Given:** The elementary solid region $E$ with its presentation $\Sigma$, its three simple descriptions and the three partitions of $\{1,\ldots,P\}$ into sublists.

[F1] For $j\in\Sigma^{0}_k$ the $k$th coordinate of $\varphi_{j,u}\times\varphi_{j,v}$ vanishes on the interior of $D_j$, and the three sublists $\Sigma^{+}_k,\Sigma^{-}_k,\Sigma^{0}_k$ partition $\{1,\ldots,P\}$ ([[def-adapted-outward-boundary-presentation-of-a-simple-solid-region]], [[def-elementary-solid-region]]).

[F2] A regular patch has $\varphi_u\times\varphi_v\ne0$ at every point of the interior of its parameter region, and that interior is nonempty ([[def-admissible-regular-parametrized-surface-patch]]).

[F3] For $v\in\mathbb R^3$, $\langle v,e_k\rangle=v_k$, so $v=0$ if and only if all three of $v_x,v_y,v_z$ are zero ([[def-euclidean-inner-product]], [[lem-standard-basis-of-f-n]]).

[F4] The parametrization induces on the interior the unit normal $N_\varphi=(\varphi_u\times\varphi_v)/\lVert\varphi_u\times\varphi_v\rVert_2$ ([[def-oriented-unit-normal-and-flux-of-a-surface-patch]]).

[F5] A unit vector $\nu$ is outward at $p\in\partial E$ when for some $\varepsilon>0$ one has $p+t\nu\notin E$ and $p-t\nu\in E$ for every $t$ with $0<t<\varepsilon$; with a two-dimensional subspace $T$ supplied, the outward one of its two unit normals is the outward unit normal to $T$ at $p$ ([[def-outward-unit-normal-at-a-boundary-point-of-a-compact-solid]]).

[L1] Under the hypotheses of an adapted presentation, for $j\in\Sigma^{+}\cup\Sigma^{-}$ and an interior parameter point $c$ whose projection lies in the interior of the base, the induced unit normal at $c$ is the outward unit normal to the tangent plane at $\varphi_j(c)$ ([[prop-the-graph-faces-of-an-adapted-presentation-carry-the-outward-normal]]).

## Proof

**Proof technique:** direct.

1.1 Fix $j$ and, by [F2], a point $c\in D_j^\circ$; then $\varphi_{j,u}(c)\times\varphi_{j,v}(c)\ne0$, so by [F3] at least one of its three coordinates is nonzero at $c$. Fix a direction $k$ for which the $k$th coordinate is nonzero at $c$. [given, F2, F3]

2.1 By [F1], if $j$ belonged to $\Sigma^{0}_k$ then that $k$th coordinate would vanish at every point of $D_j^\circ$, in particular at $c$, which step 1.1 excludes. The three sublists partition the index set by [F1], so $j\in\Sigma^{+}_k\cup\Sigma^{-}_k$. This is the first assertion; equivalently, by [F3] and [F4], a patch lateral in all three directions would have an induced unit normal orthogonal to $e_x$, $e_y$ and $e_z$ and hence equal to $0$, which no unit vector is. [step 1.1, F1, F3, F4]

3.1 Let $j$ and $k$ be as in the second assertion and let $c\in D_j^\circ$ have $\pi_k(\varphi_j(c))$ in the interior of $D_k$. The presentation is adapted to the $k$th description by [F1] and $j\in\Sigma^{+}_k\cup\Sigma^{-}_k$, so [L1] applies and gives that $N_{\varphi_j}(c)$ of [F4] is the outward unit normal to the tangent plane at $\varphi_j(c)$ in the sense of [F5]. [step 2.1, F1, F4, F5, L1] ∎

## Remarks

- **The claim is qualified, and the qualification is real.** Outwardness is asserted only at interior parameter points whose projection lands in the interior of the relevant base. The excluded points are the parameter-boundary points of a patch and the points sitting over the boundary of the base — the seams and the edges — and at those a normal need not exist or need not be outward. That is not a defect of the presentation: no integral on this page sees a set of content zero in a parameter region.

- **Why one direction suffices.** A patch may be a graph face in one direction and lateral in the other two, as the top face of a box is; the corollary asserts existence of one such direction for each patch, not the same direction for all patches.
