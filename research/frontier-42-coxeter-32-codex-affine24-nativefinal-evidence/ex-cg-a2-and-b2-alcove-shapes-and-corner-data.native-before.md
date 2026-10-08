---
id: ex-cg-a2-and-b2-alcove-shapes-and-corner-data
kind: example
title: "The $A_2$ and $B_2$ fundamental alcoves: coordinates, corner vectors, and facet types"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 13
deps:
  - def-cg-affine-root-hyperplane-reflection-and-alcove
  - lem-cg-affine-reflection-identities-and-local-finiteness
  - lem-cg-highest-root-and-fundamental-alcove
  - lem-cg-affine-alcove-separation-and-facet-types
  - lem-cg-affine-point-stabilizers-and-vertex-residues
  - thm-cg-affine-alcove-transitivity-presentation-and-length
  - def-reduced-crystallographic-euclidean-root-system
  - def-coroot-and-dual-root-system
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "A. W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II §5, equation (2.43), Figure 2.2 (printed pp. 150–151), Proposition 2.48 (printed pp. 153–154), and table (2.50) with Proposition 2.49 (printed pp. 155–156): the A2 and B2 root configurations, reduced crystallographic root-system axioms, and simple-root data. Knapp's standard A2 roots have squared length 2, while this displayed A2 model has squared length 1; it is a uniform rescaling, and its affine wall levels and coordinates are computed locally."
    - title: "M. Aguiar and T. K. Petersen, The module of affine descent classes of a Weyl group"
      url: "https://www.irif.fr/~chapuy/Archives/fpsac13/pdfAbstracts/dmAS0133.pdf"
      locator: "§2.2, PDF pp. 4–5: in the irreducible crystallographic setting the affine Coxeter complex has a balanced facet-type coloring and its fundamental alcove has a simply transitive affine-Weyl action. The extended abstract omits proofs; these are context only, and the example uses the local proved alcove and vertex-residue suppliers."
    - title: "J. B. Lewis, J. McCammond, T. K. Petersen, P. Schwer, Computing reflection length in an affine Coxeter group"
      url: "https://web.math.ucsb.edu/~jon.mccammond/papers/McCammond-item-47.pdf"
      locator: "§1.3, Definitions 1.9–1.11, Remark 1.12 and Figure 2, PDF pp. 4–5: affine root hyperplanes and illustrations of the A2, B2 and G2 arrangements. The paper treats alcoves as closures and assumes an affine Coxeter group is already given; this is visual/terminological context only, while this example verifies its own coordinates and matrix."
landmark: false
---

## Example

Let $E=\mathbb R^2$ with its standard inner product. In type $A_2$, take $\Phi_{A_2}=\{\pm\alpha_1,\pm\alpha_2,\pm\theta\}$ with $\alpha_1=(1,0)$, $\alpha_2=(-1/2,\sqrt3/2)$, and $\theta=\alpha_1+\alpha_2=(1/2,\sqrt3/2)$. In type $B_2$, take $\Phi_{B_2}=\{\pm e_1,\pm e_2,\pm e_1\pm e_2\}$ with $\alpha_1=e_1-e_2$ long, $\alpha_2=e_2$ short, and $\theta=e_1+e_2$ long. The standard affine walls are $H_{\alpha,k}=\{x:B(x,\alpha)=k\}$, and the affine type $0$ facet uses $H_{\theta,1}$.

For $A_2$, the fundamental alcove is the triangle with vertices
$$0,\qquad v_1=H_{\alpha_2,0}\cap H_{\theta,1}=\Bigl(1,\tfrac1{\sqrt3}\Bigr),\qquad v_2=H_{\alpha_1,0}\cap H_{\theta,1}=\Bigl(0,\tfrac2{\sqrt3}\Bigr).$$
Its facet types on $H_{\alpha_1,0},H_{\alpha_2,0},H_{\theta,1}$ are $1,2,0$, respectively, and the origin is its unique corner with $B(v,\theta)=0$. The affine Coxeter matrix has $m_{01}=m_{02}=m_{12}=3$. Exactly three walls pass through $v_1$, namely $H_{\alpha_2,0},H_{\theta,1},H_{\alpha_1,1}$. The six boundary panels in the local cycle around $v_1$ alternate types $2,0,2,0,2,0$, so an orientation and starting panel give the circuit word $(s_2s_0)^3=1$. The wall $H_{\theta,1}$ carries a type-$0$ panel on the ray from $v_1$ toward $v_2$ and a type-$2$ panel on its opposite ray.

For $B_2$, the coroots are $\alpha_1^\vee=\alpha_1$, $\alpha_2^\vee=2e_2$, and $\theta^\vee=e_1+e_2$. The fundamental alcove is the triangle with vertices $0$, $e_1=H_{\alpha_2,0}\cap H_{\theta,1}$, and $(\tfrac12,\tfrac12)=H_{\alpha_1,0}\cap H_{\theta,1}$; its facet types on $H_{\alpha_1,0},H_{\alpha_2,0},H_{\theta,1}$ are $1,2,0$. Its affine Coxeter matrix has $m_{01}=2$, $m_{02}=4$, and $m_{12}=4$. No axiom of choice is used.

## Facts & Assumptions

**Given:** The two explicit root sets above, their standard inner products, the affine wall convention, and the fundamental affine facet-type labels.

[F1] A reduced crystallographic root system is a finite spanning root set invariant under its root reflections, with integral Cartan numbers and no root multiples other than its positive and negative ([[def-reduced-crystallographic-euclidean-root-system]]).

[F2] The coroot is $\alpha^\vee=2\alpha/B(\alpha,\alpha)$ ([[def-coroot-and-dual-root-system]]).

[F3] The affine wall is $H_{\alpha,k}=\{x:B(x,\alpha)=k\}$ and its reflection is $r_{\alpha,k}(x)=x-(B(x,\alpha)-k)\alpha^\vee$ ([[def-cg-affine-root-hyperplane-reflection-and-alcove]]).

[F4] In each irreducible component, the region $B(x,\alpha_s)>0$ for all simple roots and $B(x,\theta)<1$ is the fundamental alcove, a geometric simplex with facets on the simple-root level-zero walls and the highest-root level-one wall; the statement applies componentwise ([[lem-cg-highest-root-and-fundamental-alcove]]).

[F5] The facets of the fundamental alcove have their assigned types, and a shared panel has the same type on either side ([[lem-cg-affine-alcove-separation-and-facet-types]]).

[F6] The fundamental facet reflections give the affine Coxeter presentation; its matrix entry $m_{ab}$ is the order of the product of the corresponding reflections ([[thm-cg-affine-alcove-transitivity-presentation-and-length]]).

[F7] At a codimension-two face, the incident alcoves form a cycle of $2m$ panels alternating between the two local types, and its boundary word is the corresponding rank-two Coxeter relator ([[lem-cg-affine-point-stabilizers-and-vertex-residues]]).

## Verification

**Given:** The displayed coordinate sets, simple roots, highest roots, and the wall convention.

1.1 In $A_2$, all six roots have squared norm $1$ and directions with angles that are multiples of $\pi/3$. The set spans $\mathbb R^2$; if a root has direction $j\pi/3$, its reflecting line is perpendicular to it and reflection sends a root direction $k\pi/3$ to $(2j+3-k)\pi/3$, so it permutes the six roots. For roots $\alpha,\beta$, the Cartan number is $2B(\beta,\alpha)$, an integer because the possible inner products are $1,-1,\tfrac12,-\tfrac12$. The only roots on each root line are its two displayed signs, so the system is reduced. The positive roots for the chamber bounded by $\alpha_1,\alpha_2$ are $\alpha_1,\alpha_2,\theta$; the first two are simple, $\theta=\alpha_1+\alpha_2$ is the highest root, and each coroot is $2\alpha$. [F1, F2, algebra]

1.2 In $B_2$, the roots span $\mathbb R^2$. Reflection in a short-root line $\mathbb R e_i$ changes the sign of coordinate $i$, while reflection in a long-root line $\mathbb R(e_1-e_2)$ swaps coordinates and reflection in $\mathbb R(e_1+e_2)$ sends $(x_1,x_2)$ to $(-x_2,-x_1)$; these signed coordinate maps preserve the displayed set. If $\alpha$ is short, $\alpha^\vee=2\alpha$ and $B(\beta,\alpha^\vee)\in\{0,\pm2\}$; if $\alpha$ is long, $\alpha^\vee=\alpha$ and $B(\beta,\alpha^\vee)\in\{0,\pm1,\pm2\}$. Thus all Cartan numbers are integral, and the explicit root lines show reducedness. The positive roots are $\alpha_1,\alpha_2,\alpha_1+\alpha_2=e_1,\alpha_1+2\alpha_2=\theta$, so $\alpha_1,\alpha_2$ are simple and $\theta$ is highest. The coroot formula gives $\alpha_1^\vee=\alpha_1$, $\alpha_2^\vee=2e_2$, and $\theta^\vee=\theta$. [F1, F2, algebra]

2.1 For $A_2$, [F4] gives the region $B(x,\alpha_1)>0$, $B(x,\alpha_2)>0$, $B(x,\theta)<1$. Writing $x=(x_1,x_2)$, the vertices are the pairwise intersections of its three boundary lines: the two simple-root walls meet at $0$; $H_{\alpha_2,0}\cap H_{\theta,1}$ gives $-\frac12x_1+\frac{\sqrt3}{2}x_2=0$ and $x_1=1$, hence $v_1=(1,1/\sqrt3)$; $H_{\alpha_1,0}\cap H_{\theta,1}$ gives $x_1=0$ and $x_2=2/\sqrt3$, hence $v_2=(0,2/\sqrt3)$. By [F5], these three facets have types $1,2,0$. Since $B(0,\theta)=0$ and $B(v_1,\theta)=B(v_2,\theta)=1$, the origin is the unique such corner. [F3, F4, F5, step 1.1, algebra]

2.2 For $B_2$, [F4] gives $x_1-x_2>0$, $x_2>0$, and $x_1+x_2<1$. Intersecting the boundary pairs gives $0$ from $x_1=x_2=0$, $e_1=(1,0)$ from $x_2=0$ and $x_1+x_2=1$, and $(1/2,1/2)$ from $x_1=x_2$ and $x_1+x_2=1$. By [F5], the facets on $H_{\alpha_1,0},H_{\alpha_2,0},H_{\theta,1}$ have types $1,2,0$. [F3, F4, F5, step 1.2, algebra]

3.1 The three $A_2$ facet-wall pairs meet at $0,v_1,v_2$. Their normals have pairwise inner products of absolute value $1/2$, so the corresponding lines meet at acute angle $\pi/3$. Translating the intersection to the origin turns each affine reflection pair into a pair of linear line reflections; their product rotates by $2\pi/3$ or $-2\pi/3$ and has order $3$. Since the coroots are twice the roots, the coroot pairing products are $B(\alpha_1^\vee,\alpha_2)B(\alpha_2^\vee,\alpha_1)=1$ and $B(\alpha_i^\vee,\theta)B(\theta^\vee,\alpha_i)=1$ for $i=1,2$. Thus [F6] gives $m_{01}=m_{02}=m_{12}=3$. [F2, F3, F6, step 1.1, step 2.1, algebra]

4.1 At $v_1$, the root pairings are $B(v_1,\alpha_2)=0$ and $B(v_1,\alpha_1)=B(v_1,\theta)=1$. Since the positive roots are exactly $\alpha_1,\alpha_2,\theta$, these give precisely the three walls $H_{\alpha_2,0},H_{\alpha_1,1},H_{\theta,1}$. Their normal lines have the three directions modulo $\pi$ separated by $\pi/3$, so the local arrangement has six sectors; [F7] identifies them with the six incident alcoves. The fundamental alcove has types $2$ and $0$ at this vertex, and [F7] gives the alternating six-panel cycle. Its boundary word, in a suitable orientation and starting point, is $(\sigma_2\sigma_0)^3$; [F6] identifies the Coxeter generators with the facet generators, and $m_{20}=3$, so $(s_2s_0)^3=1$. The panel of the fundamental alcove along the ray from $v_1$ toward $v_2$ has type $0$; three positions later in the alternating cycle the opposite ray of the same wall $H_{\theta,1}$ has type $2$. Thus the type belongs to a panel, not to the whole wall. [F3, F5, F6, F7, step 1.1, step 2.1, step 3.1, algebra]

5.1 In $B_2$, $B(\alpha_1,\alpha_2)=-1$, $B(\theta,\alpha_1)=0$, and $B(\theta,\alpha_2)=1$. Together with the coroots from 1.2, the products of Cartan pairings for pairs $(1,2),(0,1),(0,2)$ are respectively $(-1)(-2)=2$, $0$, and $(2)(1)=2$. The corresponding line angles are $\pi/4,\pi/2,\pi/4$, respectively, so products of the intersecting affine reflections are rotations by $\pi/2$ or $\pi$, with orders $4,2,4$. By [F6], the affine matrix therefore has $m_{12}=4$, $m_{01}=2$, and $m_{02}=4$. Both coordinate models and all their corner and endpoint calculations are finite and explicit, so no axiom of choice is used. [F2, F3, F6, step 1.2, step 2.2, algebra] ∎

## Remarks

**Open Step-3 supplier obligations.** The current-run draft supplier `lem-cg-affine-point-stabilizers-and-vertex-residues` is used in Fact F7 and proof step 4.1 for the six incident sectors, alternating local panel labels, and rank-two boundary word. Its item decision remains escalated because its proof uses the draft `lem-cg-integer-pairings-and-allowed-dihedral-labels` in step 2.4 and draft `def-hh-coxeter-matrix-word-group-and-length` in step 5.1. The current-run draft supplier `thm-cg-affine-alcove-transitivity-presentation-and-length` is used in Fact F6 and proof steps 3.1, 4.1, and 5.1 for the affine Coxeter matrix and presentation; its item decision remains escalated because its proof uses draft `lem-cg-affine-generic-gallery-paths-and-disk-moves` and draft `def-hh-coxeter-matrix-word-group-and-length`. These supplier uses remain provisional pending their completed Step-3 decisions, so this example's item decision remains escalated.
