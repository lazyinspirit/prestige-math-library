---
id: thm-topological-classification-compact-riemann-surfaces
kind: theorem
title: Topological classification of compact Riemann surfaces
status: published
origin: pipeline
pipeline_run: frontier-36-complete
landmark: true
deps:
  - def-riemann-surface-and-holomorphic-atlas
  - lem-finite-analytic-chart-triangulation-compact-riemann-surface
  - thm-classification-of-compact-connected-surfaces
  - def-r-orientation-of-a-topological-manifold
  - def-axiom-of-choice
  - cor-jacobian-determinant-of-a-holomorphic-map
  - cor-injective-holomorphic-derivative-nonzero
  - def-topological-manifold-without-boundary
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Jürgen Jost, Compact Riemann Surfaces, Ch. 2 §2.3.A and §2.4.A"
      url: https://www.math.wichita.edu/~ryan/teaching/M829F/syllabus/Jost-book/JJ_ch2.pdf
      locator: "§2.3.A, Theorem 2.3.A.1 (finite triangulability); §2.4.A, Definition 2.4.A.1, Corollaries 2.4.A.1–2, and Theorem 2.4.A.1 (orientation and classification of compact orientable triangulated surfaces)."
    - title: "Curtis T. McMullen, Riemann Surfaces, Math 213b course notes (2026)"
      url: https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf
      locator: "Chs. 2–3: the topological classification of compact surfaces and the genus of an orientable compact surface."
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice. Let $X$ be a compact Riemann surface
([[def-riemann-surface-and-holomorphic-atlas]]). Then:

1. the holomorphic atlas of $X$ canonically orients $X$; the orientation is
   determined by the complex structure, and the charts of the atlas are
   mutually orientation-preserving for it
   ([[def-r-orientation-of-a-topological-manifold]]);
2. $X$ is homeomorphic to the sphere with $g$ handles for a unique $g\ge0$:
   writing $\#_gT^2$ for the connected sum of $g$ copies of the torus, with
   $\#_0T^2=S^2$, there is exactly one $g\ge0$ with
   $X\cong\#_gT^2$.

The finite chart triangulation of
[[lem-finite-analytic-chart-triangulation-compact-riemann-surface]] supplies
the finite triangulation on which the polygonal reduction operates, and the
reduction itself together with the uniqueness of $g$ is the content of
[[thm-classification-of-compact-connected-surfaces]]. The Axiom of Choice is
used exactly through that in-run classification theorem; the chart orientation
and the local triangulation are choice-free.

## Facts & Assumptions

**Given:** A compact Riemann surface $X$ with its holomorphic atlas, and the in-run classification theorem for compact connected surfaces.

[F1] A Riemann surface is a nonempty connected Hausdorff second-countable space with a holomorphic atlas: its charts are homeomorphisms onto open subsets of $\mathbb C$, and any two compatible charts have holomorphic transition maps in both directions ([[def-riemann-surface-and-holomorphic-atlas]]); consequently $X$ is, in particular, a topological 2-manifold without boundary ([[def-topological-manifold-without-boundary]]).

[F2] For holomorphic $f$ on an open set of $\mathbb C$ the real Jacobian determinant satisfies $\det Jf(z)=|f'(z)|^2\ge0$, with equality exactly where $f'(z)=0$ ([[cor-jacobian-determinant-of-a-holomorphic-map]]); an injective holomorphic map on a plane domain has nowhere-vanishing derivative ([[cor-injective-holomorphic-derivative-nonzero]]).

[F3] An integral orientation of an $n$-manifold is a continuous section $x\mapsto\mu_x$ of its local $\mathbb Z$-homology system whose value at every point generates the local homology group; a manifold is orientable when it admits one ([[def-r-orientation-of-a-topological-manifold]]).

[F4] Assume the Axiom of Choice. Every nonempty compact connected boundaryless topological 2-manifold is homeomorphic to $S^2$, to the connected sum of $g\ge1$ copies of the torus for a unique $g$, or to the connected sum of $k\ge1$ copies of the real projective plane for a unique $k$; two such surfaces are homeomorphic if and only if they have the same integral orientability and the same Euler characteristic; the corresponding canonical polygon words are the empty reduced word for the sphere (represented geometrically by the sphere digon), the $g$-fold commutator word, and the $k$-fold square word ([[thm-classification-of-compact-connected-surfaces]]).

[F5] For every compact Riemann surface $Y$ and every finite $F\subseteq Y$ there is an oriented topological face-to-face triangulation of $Y$ subordinate to $F$, with finitely many triangles, each inside a single chart, pairwise interior-disjoint, meeting only in full common edges or common vertices, and every point of $F$ in a face interior ([[lem-finite-analytic-chart-triangulation-compact-riemann-surface]]). The supplier separately gives a rectifiable chart cellulation for contour integration; no edge regularity is asserted here for the topological refinement.

[F6] The Axiom of Choice: every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).


## Proof

**Proof technique:** direct.

1.1 ($X$ is a compact connected boundaryless topological 2-manifold.) By [F1] the charts of $X$ are homeomorphisms onto open subsets of $\mathbb C\cong\mathbb R^2$, so $X$ is a topological 2-manifold; it has no boundary because charts take values in open sets of $\mathbb R^2$, it is nonempty and connected by the Riemann-surface convention, and it is compact by hypothesis. [F1, given]

1.2 (The holomorphic atlas orients $X$.) For charts $\varphi,\psi$ with transition $\tau=\psi\circ\varphi^{-1}$ on a plane domain, $\tau$ is biholomorphic onto its image, hence injective and holomorphic, so $\tau'\ne0$ everywhere by [F2] and then $\det J\tau=|\tau'|^2>0$ everywhere by [F2]. Transporting the standard orientation of $\mathbb C$ through each chart therefore gives local orientations that agree on every overlap; equivalently, the maximal atlas is an oriented atlas. The resulting local orientation data are canonical for the holomorphic structure: any chart compatible with the atlas has biholomorphic transitions to the charts of the atlas, hence the same Jacobian positivity, so it defines the same orientation. [F1, F2, F3]

1.3 (Finite chart triangulation.) Applying [F5] with $Y=X$ and $F=\varnothing$ gives a finite oriented topological triangulation of $X$ by chart-contained triangles; this is the finite triangulation on which the polygonal reduction of [F4] operates. [F5]

2.1 (The atlas orientation is the integral orientability read by [F4].) The orientation of step 1.2 gives, at every $x\in X$ and in every chart around $x$, the generator of the local homology $H_2(X,X\setminus\{x\};\mathbb Z)$ determined by the standard orientation of the plane through that chart; the transition computation of step 1.2 shows the generator is independent of the chart, and it varies continuously because it is locally induced by one chart. Hence $X$ carries an integral orientation in the sense of [F3], so $X$ is orientable, and this orientation is canonical for the holomorphic structure. [F2, F3, step 1.2]

3.1 (Classification and exclusion of the nonorientable models.) By [F4], whose hypothesis is satisfied by the compact connected boundaryless 2-manifold $X$ of step 1.1, the surface $X$ is homeomorphic to $S^2$, to the connected sum of $g\ge1$ tori, or to the connected sum of $k\ge1$ projective planes, these being the canonical polygon words of the classification; and by the same theorem the models are distinguished by integral orientability and Euler characteristic. By step 2.1 the surface $X$ is orientable, and the nonorientable models are exactly the $k$-fold connected sums of the real projective plane, $k\ge1$; identifying the square-word family with the nonorientable models is an explicit obligation on [[thm-classification-of-compact-connected-surfaces]], which must deliver it together with the normal forms. Hence $X\cong S^2$ or $X\cong\#_gT^2$ for some $g\ge1$. [F4, step 1.1, step 2.1]

4.1 (Unique handle number.) The alternative $X\cong S^2$ is the case $g=0$ of $X\cong\#_gT^2$, and for $g\ge1$ the number $g$ is unique by the uniqueness clause of [F4]; hence there is exactly one $g\ge0$ with $X\cong\#_gT^2$, the sphere with $g$ handles. The chart triangulation of step 1.3 witnesses the finite triangulation fed into the polygonal reduction, and the Axiom of Choice is used exactly through [F4] by [F6]; the chart orientation of steps 1.2–1.3, the local triangulation of step 1.3 and the uniqueness conclusion use no choice principle. [F4, F6, step 1.3, step 3.1] ∎


## Remarks

Two obligations belong to the in-run supplier [[thm-classification-of-compact-connected-surfaces]] rather than to this page. First, the theorem is stated for compact connected boundaryless topological 2-manifolds and must deliver the homeomorphism to its normal forms together with the uniqueness of the label; the finite triangulation consumed here is the chartwise one of [[lem-finite-analytic-chart-triangulation-compact-riemann-surface]], whose closed-triangle homeomorphisms and face-to-face incidences supply the finite topological triangulation needed for polygonal reduction. Second, the phrase "integral orientability" in the classification invariant must agree with the orientation produced by a complex atlas; the standard local-homology generator carried by a chart is the bridge used in step 2.1, and it is the part of the argument to compare with the orientability argument in step 5.1 of [[thm-classification-of-compact-connected-surfaces]]. The holomorphic input is genuinely used only for orientability: a nonorientable compact connected surface admits no complex structure of the kind considered here.
