---
id: lem-curved-boundary-lift-residual
kind: lemma
title: Geometry error bounds a pulled-back boundary-lift residual
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-curved-domain-geometry-approximation
  - def-matching-affine-simplicial-meshes
  - def-elementary-set-in-rn
  - def-half-open-box
  - def-measure
  - lem-affine-simplex-gauss-green-formula
  - lem-oriented-facet-cancellation-on-matching-meshes
  - thm-chain-rule-for-total-derivatives
  - thm-elementary-volume-is-well-defined
  - thm-holder-inequality-for-integrals
  - thm-lebesgue-measure-is-a-complete-measure
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Part VI, Chapter 27
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap27.pdf
    - title: Gerald Dziuk and Charles M. Elliott, Finite element methods for surface PDEs, Acta Numerica 22 (2013)
      url: https://wrap.warwick.ac.uk/id/eprint/53966/1/WRAP_Elliott_DziEll13a.pdf
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. Let $\widehat\Omega=(-1,1)^2$ carry a finite matching affine triangular mesh $\mathcal T$ as in [[def-matching-affine-simplicial-meshes]]. Let $\Phi,\Phi_h:\overline{\widehat\Omega}\to\mathbb R^2$ be continuous and $C^1$ on each closed triangle, with matching traces on shared edges, and suppose $\|D\Phi\|_\infty+\|D\Phi_h\|_\infty\le M$, $e_0=\|\Phi-\Phi_h\|_\infty$, and $e_1=\|D\Phi-D\Phi_h\|_{L^\infty;op}$. Let $G$ be a scalar physical boundary lift on an open convex neighborhood containing both images and every segment joining corresponding image points, with $\|DG\|_\infty\le L_1$ and $\|D^2G\|_\infty\le L_2$. Define the piecewise pullback gradients by $\nabla_{pw}(G\circ\Phi)=D\Phi^T\nabla G(\Phi)$ and $\nabla_{pw}(G\circ\Phi_h)=D\Phi_h^T\nabla G(\Phi_h)$, and set
$$\ell_{\partial,h}(w)=\int_{\widehat\Omega}\big(\nabla_{pw}(G\circ\Phi)-\nabla_{pw}(G\circ\Phi_h)\big)\cdot\nabla w,\qquad w\in H^1_0(\widehat\Omega).$$
With the $H^1$ dual norm, $\|\ell_{\partial,h}\|_{(H^1_0)^*}\le 2(L_1e_1+ML_2e_0)$. Thus the geometry-induced boundary-lift contribution to the Strang load defect is $O(e_0+e_1)$.

## Facts & Assumptions

**Given:** Countable Choice; the reference square; continuous, cellwise $C^1$ maps with the stated derivative gap and upper bound; a $C^2$ lift $G$ on a convex neighborhood of both images; and $w\in H^1_0(\widehat\Omega)$.

[F1] [[def-curved-domain-geometry-approximation]]: $e_0$ and $e_1$ are the uniform value and derivative gaps between exact and approximate geometry maps.

[F2] [[thm-chain-rule-for-total-derivatives]]: $D(G\circ\Phi)=D\Phi^T(DG\circ\Phi)$ wherever the cell maps are differentiable.

[F3] [[thm-holder-inequality-for-integrals]]: $|\int f\cdot g|\le\|f\|_{L^2}\|g\|_{L^2}$.

[F4] Under Countable Choice, the Lebesgue measurable sets form a sigma-algebra containing every elementary set, and Lebesgue measure agrees there with elementary volume. For the half-open box $B=(-1,1]^2$, its elementary volume is $4$. ([[thm-lebesgue-measure-is-a-complete-measure]], [[thm-elementary-volume-is-well-defined]], [[def-half-open-box]], [[def-elementary-set-in-rn]])

[F5] A measure is nonnegative and finitely additive on disjoint measurable sets; consequently it is monotone on measurable sets, since $E\subseteq B$ gives $B=E\cup(B\setminus E)$. ([[def-measure]])

[F6] Under Countable Choice, on each affine triangle, the Gauss--Green formula applies to a $C^1$ vector field on its closure, and the induced orientations on the two copies of a shared edge are opposite in a matching mesh. ([[lem-affine-simplex-gauss-green-formula]], [[lem-oriented-facet-cancellation-on-matching-meshes]])

[A1] Countable Choice is used through [F4] and the Gauss--Green supplier in [F6] ([[def-countable-choice]]).

## Proof

1.1 Because each geometry map and its traces are continuous across every interior edge, $G\circ\Phi$ and $G\circ\Phi_h$ have matching traces there. Apply [F6] on each triangle to the product of the pulled-back lift with a compactly supported smooth test function; the interior-edge fluxes cancel, and the outer boundary term vanishes. Thus the displayed piecewise gradients are the weak gradients of the pulled-back lifts. On each triangle, [F2] and the triangle inequality give $|\nabla_{pw}(G\circ\Phi)-\nabla_{pw}(G\circ\Phi_h)|\le L_1e_1+ML_2e_0,$ using the bound on $D^2G$ along the joining segment. [F1, F2, F6, given, algebra]

2.1 For $n\ge2$ put $B_n=(-1+1/n,1-1/n]^2$. Each $B_n$ is an elementary half-open box in the convention $(a,b]$, and $(-1,1)^2=\bigcup_{n\ge2}B_n$: one inclusion is immediate, and for any $x\in(-1,1)^2$ choose $n$ with $1/n<\min_i\{1+x_i,1-x_i\}$ for both coordinates. Thus [F4] makes $\widehat\Omega$ measurable. Since $\widehat\Omega\subset B=(-1,1]^2$, [F5] and [F4] give $|\widehat\Omega|\le\lambda_2(B)=4$. Step 1.1 therefore yields $\|\nabla_{pw}(G\circ\Phi)-\nabla_{pw}(G\circ\Phi_h)\|_{L^2(\widehat\Omega)}\le 2(L_1e_1+ML_2e_0).$ [F4, F5, A1, step 1.1, given, algebra]

3.1 Apply [F3] to the defining integral for $\ell_{\partial,h}(w)$ and use $\|\nabla w\|_{L^2}\le\|w\|_{H^1}$. Taking the supremum over unit $H^1_0$ tests proves the dual bound. [F1, F3, step 2.1, algebra] ∎
