---
id: ex-a-circle-is-the-boundary-of-a-disk
kind: example
title: A circle is the boundary of a disk
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-oriented-smooth-cobordism
  - def-null-cobordant-closed-manifold
  - def-unoriented-and-oriented-bordism-groups
  - def-induced-boundary-orientation
  - def-oriented-smooth-manifold-and-oriented-chart
  - ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds
  - thm-euclidean-inverse-function-theorem
  - def-euclidean-upper-half-space-and-its-boundary
  - def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary
  - def-boundary-defining-function
  - cor-euclidean-closed-balls-and-spheres-are-compact
  - def-euclidean-spheres-and-closed-balls
  - prop-boundary-defining-functions-exist-locally-and-detect-inward-vectors
  - def-diffeomorphism-and-local-diffeomorphism-of-manifolds
  - thm-disjoint-union-makes-bordism-classes-abelian-groups
  - def-smooth-collar-of-a-manifold-boundary
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: https://people.math.harvard.edu/~dafr/bordism.pdf
      locator: "Figure 5 and Proposition 1.32, printed pp.11-12 and 18-19"
    - title: "John Milnor and James Stasheff, Characteristic Classes (original pagination)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "Page 203, every compact 1-manifold bounds"
---

## Example

Let $D^2=\overline B_2(0,1)\subset\mathbb R^2$ be the closed unit disk. It is a
compact smooth surface with boundary $S^1=S_2(0,1)$, and with the orientation
of $D^2$ induced from the standard orientation of $\mathbb R^2$, its induced
boundary orientation is the standard counterclockwise orientation of $S^1$.
Consequently $S^1$ with that orientation is null-cobordant, so its class is
zero in $\Omega_1^{SO}$ and in $\Omega_1^{O}$; and the circle with the opposite
orientation has the same zero class and is the inverse of $[S^1]$ in
$\Omega_1^{SO}$.

## Facts & Assumptions

**Given:** The closed unit disk $D^2=\overline B_2(0,1)\subset\mathbb R^2$, the sphere $S^1=S_2(0,1)$, the standard orientation of $\mathbb R^2$ (the one for which the identity chart is positive), and the orientations induced on $D^2$ and on its boundary.

[F1] For $n\ge1$, write $B^n=\{x:\rho(x)\ge0\}$ with $\rho(x)=1-|x|^2$. At each boundary point choose an index $j$ with $\partial_j\rho\ne0$, move that coordinate last, and apply the inverse function theorem to the remaining $n-1$ coordinates together with $\rho$. Its inverse is smooth: the derivative formula for the $C^1$ inverse bootstraps inductively to every order when the original map is smooth. Restricting to $\rho\ge0$ gives a half-space chart, and these charts have smooth transitions because they are restrictions of ambient diffeomorphisms ([[thm-euclidean-inverse-function-theorem]], [[def-euclidean-upper-half-space-and-its-boundary]], [[def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary]]). The interior uses ordinary Euclidean charts ([[ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds]]). Thus $B^n$ is a smooth manifold with boundary $S^{n-1}$. Inward vectors have $d\rho>0$ ([[prop-boundary-defining-functions-exist-locally-and-detect-inward-vectors]], [[def-boundary-defining-function]]), and Euclidean balls and spheres are compact ([[cor-euclidean-closed-balls-and-spheres-are-compact]], [[def-euclidean-spheres-and-closed-balls]]).

[F2] The induced boundary orientation is outward-normal-first: an outward vector followed by a positive basis of the boundary is a positive basis of the ambient tangent space ([[def-induced-boundary-orientation]], [[def-oriented-smooth-manifold-and-oriented-chart]]).

[F3] A closed oriented manifold is null-cobordant when it is oriented cobordant to the empty manifold; reversing the orientation of an oriented bordism flips both induced boundary orientations ([[def-null-cobordant-closed-manifold]], [[def-oriented-smooth-cobordism]]), and the classes of closed oriented $1$-manifolds form $\Omega_1^{SO}$ with operation $[M]+[N]=[M\sqcup N]$ and zero the class of $\varnothing$ ([[def-unoriented-and-oriented-bordism-groups]]).

[F4] Orientation-preserving diffeomorphic closed oriented manifolds have the same class ([[thm-disjoint-union-makes-bordism-classes-abelian-groups]]). A nonempty connected orientable manifold has exactly two orientations: relative to one supplied determinant ray the sign of another is locally constant, hence constant on the connected manifold ([[def-oriented-smooth-manifold-and-oriented-chart]]).

## Verification

1.1 ($D^2$ is a compact smooth surface with boundary $S^1$.) By [F1] with $n=2$, $D^2=B^2$ is a smooth manifold with boundary $S^1$, and $\rho(x)=1-|x|^2$ is a boundary-defining function; by compactness of Euclidean balls $D^2$ is compact, hence a compact surface with boundary. [F1]

1.2 (The induced boundary orientation is counterclockwise.) Let $p\in S^1$. Since $\rho(x)=1-|x|^2$ has gradient $\nabla\rho(p)=-2p$, the function $\rho$ decreases in the radial direction, so the outward normal of $D^2$ at $p$ is the radial vector $p$ (unit length). Let $Jp=(-p_2,p_1)$ be the counterclockwise rotation of $p$ by $90^\circ$. In the standard orientation of $\mathbb R^2$ the basis $(p,Jp)$ is positive, because $\det(p,Jp)=|p|^2=1>0$. The outward-normal-first rule of [F2] therefore says that $(p,Jp)$ is a positive basis of $T_pD^2$ exactly when $Jp$ is a positive basis of $T_pS^1$; the unit tangent $Jp$ is the counterclockwise direction of $S^1$, so the induced boundary orientation of $S^1=\partial D^2$ is counterclockwise. [F1, F2]

2.1 (Null-cobordisms of the two circles.) Let $o$ be the counterclockwise orientation of $S^1$. The map $\theta:[0,1)\times S^1\to D^2$, $\theta(s,p)=(1-s/2)p$, is a smooth embedding onto the open annulus $\{x:1/2<|x|\le1\}$ and satisfies $\theta(0,p)=p$, so it is a supplied collar ([[def-smooth-collar-of-a-manifold-boundary]]). With the whole boundary incoming, the standard orientation on $D^2$ gives induced orientation $o$ by step 1.2, so it null-bords $(S^1,-o)$. Reversing the disk orientation gives induced boundary orientation $-o$ and null-bords $(S^1,o)$. Thus both oriented classes and their underlying unoriented classes are zero by [F3]. [F3, step 1.2, construct]

2.2 (The two classes are mutually inverse.) Let $W:=(-D^2)\sqcup D^2$ with the disjoint-union orientation, a compact oriented surface whose boundary is the disjoint union of the two circles, and whose induced boundary orientation on $\partial W$ is (clockwise)$\sqcup$(counterclockwise). As a bordism from the closed oriented manifold $S^1\sqcup(-S^1)$ to $\varnothing$ it realises $[S^1]+[-S^1]=[\varnothing]=0$ in $\Omega_1^{SO}$ by [F3]: the incoming face carries the negative of $o\sqcup(-o)$, namely $(-o)\sqcup o$, which is exactly the induced orientation of $\partial W$. [F3, F4, step 1.2]

3.1 (Assembly.) Steps 1.1–1.2 identify $D^2$ as a compact smooth surface with boundary $S^1$ and compute its induced boundary orientation as counterclockwise; step 2.1 gives the null-cobordisms of both oriented circles, so $[S^1]=0$ in $\Omega_1^{SO}$ and in $\Omega_1^{O}$; step 2.2 shows that the class of the opposite orientation is also $0$ and is the inverse of $[S^1]$. This is the asserted example. [step 1.1, step 1.2, step 2.1, step 2.2] ∎
