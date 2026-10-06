---
id: "cex-middle-dimensional-surgery-can-change-an-intersection-form"
kind: "counterexample"
title: "Middle-dimensional surgery can change an intersection form"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 8
deps:
  - cor-homology-of-spheres
  - def-geometric-intersection-pairing-on-a-closed-oriented-manifold
  - def-p-surgery-on-a-smooth-m-manifold
  - lem-outgoing-boundary-of-a-handle-attachment-trades-the-disk-factors
  - prop-homology-effect-of-surgery-away-from-the-middle-dimensions
  - rem-middle-dimensional-surgery-has-an-intersection-form-obstruction
  - thm-topological-kunneth-short-exact-sequence-for-homology
  - thm-geometric-intersection-equals-the-poincare-dual-cup-pairing
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: "compute the surgery result, then compare the degree-two intersection data with the transverse factor spheres"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  precheck: "pass"
sources:
  references:
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, 2002; electronic copy)"
      url: "https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro"
      locator: "Chapter 10 §10.4, Proposition 10.25 (iii)-(iv), printed p. 211 (the middle cases m=2n+2 and m=2n+1 have braided exact sequences and are where the analysis ceases to be automatic); Chapter 10 §10.1, printed pp. 193-194 (in the middle dimension a self-intersection obstruction governs framed-embedding representability)"
    - title: "Wolfgang Lück, A Basic Introduction to Surgery Theory (lecture notes, Münster, 27 October 2004)"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Chapter 4 introduction and §4.1, printed pp. 79-84 (the intersection pairing lambda and the self-intersection element mu give the quadratic form on the surgery kernel; the obstruction lives in the middle dimension)"
---

## Statement refuted

**Refuted claim:** every framed sphere surgery in the sense of this page, with
no restriction below the middle, preserves the middle-dimensional intersection
form whenever that form exists.

**Counterexample.** Assume AC ([[def-axiom-of-choice]]), as required by Künneth and the intersection/duality supplier. Let $M=S^2\times S^2$ and let $\varphi$ be the standard
framed embedded surgery sphere $S^2\times\{y_0\}$ with the framing of the
second factor; here $m=4$, $p=2$, $q=2$, so the surgery is
middle-dimensional. By the product example the result is $S^4$. The
middle-dimensional intersection form of $M$ is the hyperbolic form on
$H_2(M;\mathbb Z)\cong\mathbb Z^2$, while $H_2(S^4;\mathbb Z)=0$; hence
middle-dimensional surgery changes the middle-dimensional intersection form.
Consequently the intersection form is not preserved by middle-dimensional
surgery, and the below-middle results of this page, proved under
$p\le q-2$, do not extend to the middle: there the analysis needs the quadratic
refinement and the obstruction recorded in the preceding remark.

## Facts & Assumptions

**Given:** AC and the manifold $M=S^2\times S^2$ with its product orientation, the framed sphere $S^2\times\{y_0\}$ framed by the second factor, and the surgery result of the product example.

[F1] the local calculation below: with $0\le p\le m-1$, $q=m-p$ and $M=S^p\times S^q$, the $p$-surgery along the standard framed $S^p\times\{y_0\}$ produces $S^{p+q}$; for $p=q=2$ this gives $S^4$ from $S^2\times S^2$.

[F2] [[thm-topological-kunneth-short-exact-sequence-for-homology]]: for $m,n\ge1$ the integral homology of $S^m\times S^n$ is free on a point class, the two factor sphere classes, and their cross product, in degrees $0,m,n,m+n$; when $m=n$ the middle group has rank two.

[F3] [[cor-homology-of-spheres]]: $\widetilde H_k(S^4;\mathbb Z)=0$ for $k\ne4$, so in particular $H_2(S^4;\mathbb Z)=0$ The cohomological form is transported from homology by the duality in [F6].

[F4] [[def-geometric-intersection-pairing-on-a-closed-oriented-manifold]]: for a closed oriented smooth $n$-manifold and closed oriented embedded submanifolds $A^a,B^b$ with $a+b=n$, the geometric pairing $\langle A,B\rangle_M=I(i_A,B)\in\mathbb Z$ is the signed transverse count when $A,B$ are transverse, and depends only on the homotopy classes of the inclusions; a push-off of $A$ along a nowhere-zero normal section is an embedding homotopic to $i_A$ and disjoint from $A$, so the self-intersection of such an $A$ is zero.

[F5] [[prop-homology-effect-of-surgery-away-from-the-middle-dimensions]]: for $p=2$, $q=2$ the degrees in which the integral homology can change are $\{2,3,1,2\}$, confirming that degree two is among the degrees allowed to change at the middle.

[F6] [[thm-geometric-intersection-equals-the-poincare-dual-cup-pairing]]: under AC, geometric intersection is the Poincaré-dual cup pairing and depends only on homology classes. It therefore extends bilinearly to all their integral linear combinations; Poincaré duality identifies the homology and cohomology forms used here.


## Counterexample

**Proof technique:** compute the result, then compare the two degree-two intersection pairings.

1.1 Removing the standard product tube $S^2\times\operatorname{int}D^2$ from $S^2\times S^2$ leaves $S^2\times D^2$, since the complement of the open hemisphere in the second sphere is its opposite closed hemisphere. Product-framed surgery glues in $D^3\times S^1$ by the identity on $S^2\times S^1$. The resulting union is $\partial(D^3\times D^2)$ by the disk-factor boundary decomposition. Choose a convex rounding transverse to rays from the origin; its boundary is $\rho(u)u$ for a smooth positive function on $S^4$. Radial projection has smooth inverse $u\mapsto\rho(u)u$, identifying the boundary with $S^4$ and proving the surgery identification directly. [given, construct]

1.2 The datum is middle-dimensional: $p=q=2$, so $2p+2=6>4=m$ and the below-middle hypothesis $p\le q-2$ of the killing lemma fails. The product example [F1] identifies the surgered manifold: the $2$-surgery on $S^2\times S^2$ along the standard framed $S^2\times\{y_0\}$ is $S^4$, compatible with the degree bounds of [F5] since $p=2$ and $q=2$. [F1, F5, given]

2.1 Sphere homology is free, concentrated in degrees $0,2$ for $S^2$. The integral Künneth sequence therefore has vanishing Tor terms; in degree two its tensor terms are $H_2(S^2)\otimes H_0(S^2)$ and $H_0(S^2)\otimes H_2(S^2)$, each $\mathbb Z$, and its cross-product map sends the two generators to the factor sphere classes. Thus the degree-two homology of the source is free of rank two on the two factor sphere classes: by [F2] applied to $m=n=2$, the classes of $A=S^2\times\{y_0\}$ and $B=\{x_0\}\times S^2$ form a basis of $H_2(S^2\times S^2;\mathbb Z)\cong\mathbb Z^2$. The target has $H_2(S^4;\mathbb Z)=0$ by [F3]. [F2, F3, step 1.2]

3.1 By [F6], intersection gives a bilinear form on the two factor classes. Pushing $A=S^2\times\{y_0\}$ to $S^2\times\{y_1\}$ along a short path with $y_1\ne y_0$ makes it disjoint from $A$, so $A\cdot A=0$ by [F4]; the analogous push-off of $B$ gives $B\cdot B=0$. At the sole intersection $(x_0,y_0)$, the ordered tangent spaces of $A$ and $B$ are precisely the two positively oriented factors of $TM$, so $A\cdot B=+1$. Exchanging the two two-dimensional blocks has sign $(-1)^{2\cdot2}=+1$, giving $B\cdot A=+1$. Thus the matrix in the factor basis is $\begin{pmatrix}0&1\\1&0\end{pmatrix}$, of determinant $-1$, the hyperbolic form. [F4, F6, step 2.1, algebra]

4.1 Hence the middle-dimensional intersection pairing of $M$ is a nondegenerate pairing on a rank-two free group, while the corresponding pairing of $M_\varphi=S^4$ is a pairing on the zero group: by [F3] the middle homology vanishes, and [F6] transports this to middle cohomology, so the form of the surgered manifold is the zero form. The two pairings therefore cannot be identified by any isomorphism of the underlying groups, and the middle-dimensional intersection form is not preserved by the surgery. [F3, F6, step 2.1, step 3.1]

5.1 Consequently framed sphere surgery does not preserve the middle-dimensional intersection form: at the middle dimension $p=q$ the form itself can change, a case that the below-middle results of this page, proved under $p\le q-2$, do not cover, and there the analysis requires the quadratic refinement and the surgery obstruction recorded in the preceding remark. [F5, step 4.1] ∎
