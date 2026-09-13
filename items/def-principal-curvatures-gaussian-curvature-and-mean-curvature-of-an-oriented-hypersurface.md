---
id: def-principal-curvatures-gaussian-curvature-and-mean-curvature-of-an-oriented-hypersurface
kind: definition
title: Principal curvatures, Gaussian curvature, and mean curvature of an oriented hypersurface
status: published
origin: pipeline
deps: ["def-codimension-and-hypersurface", "def-shape-operator", "thm-weingarten-equation-and-adjointness-of-the-shape-operator", "cor-real-spectral-theorem-for-self-adjoint-endomorphisms", "def-determinant-of-a-linear-operator", "def-trace-of-an-endomorphism"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Section 14.2, Definition 14.2.1, Corollary 14.2.2, Definition 14.2.7, and Remarks 14.2.8–14.2.9, printed pages 104–107
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: Chapter 8, scalar second fundamental form through Gaussian and mean curvatures, printed pages 139–142
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

Assume $\mathrm{AC}_\omega$. Let $M^m\subseteq\overline M^{m+1}$ be a
hypersurface of positive dimension $m\geq1$, equipped with a supplied smooth
unit normal field $\nu$. At each $p\in M$, the shape operator
$S_{\nu,p}:T_pM\to T_pM$ is self-adjoint by
[[thm-weingarten-equation-and-adjointness-of-the-shape-operator]]. Its real
eigenvalues, counted with algebraic multiplicity and regarded as an unordered
multiset

$$\{\kappa_1(p),\ldots,\kappa_m(p)\},$$

are the **principal curvatures** at $p$; the corresponding eigenspaces are the
**principal directions**. The real spectral theorem supplies an orthonormal
eigenbasis at each fixed point, but no smooth ordering of the eigenvalues and
no global eigenframe is asserted.

The **extrinsic Gaussian curvature** (also called Gauss–Kronecker curvature
in higher dimension) and the **scalar mean curvature with respect to $\nu$**
are

$$K_{\mathrm{ext}}:=\det S_\nu=\prod_{i=1}^m\kappa_i,\qquad H_\nu:=\frac1m\operatorname{tr}S_\nu=\frac1m\sum_{i=1}^m\kappa_i.$$

Trace and determinant are basis independent, so these functions do not depend
on an ordering or eigenbasis. They are smooth even where individual ordered
eigenvalue functions need not be smooth, because the matrix coefficients of
$S_\nu$ are smooth and trace and determinant are polynomial in those
coefficients.

Normal-linearity in [[def-shape-operator]] gives
$S_{-\nu}=-S_\nu$. Therefore reversing the normal negates every principal
curvature and $H_\nu$, while

$$K_{\mathrm{ext}}(-\nu)=\det(-S_\nu)=(-1)^mK_{\mathrm{ext}}(\nu).$$

The assumption $\mathrm{AC}_\omega$ is inherited exactly through the smooth
normal-bundle and shape-operator construction. Applying the finite-dimensional
spectral theorem at a supplied point makes no additional family choice. The
definitions apply to an empty hypersurface of fixed positive dimension, in
dimension one, and at boundary points. Dimension zero is excluded explicitly
because the averaging factor $1/m$ is undefined, and degenerate metrics are
outside the Riemannian hypothesis.
