---
id: def-induced-connection-and-second-fundamental-form
kind: definition
title: Induced connection and second fundamental form
status: draft
origin: pipeline
deps: ["def-tangential-and-normal-projections-along-a-riemannian-submanifold", "def-levi-civita-connection", "def-affine-connection-on-a-smooth-manifold", "def-embedded-submanifold-and-slice-chart"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Chuu-Lian Terng, Lecture Notes on Curves and Surfaces in R^3 and Riemannian Geometry
      url: https://www.math.uci.edu/~cterng/LectureNotes1353.pdf
      locator: Section 2.1, second fundamental form and induced normal connection, printed pages 24–25
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Lecture 14, Section 14.1, restriction locality through Definition 14.1.2 and the Gauss formula, printed pages 101–102
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: Chapter 8, equation (8.1), Lemma 8.1(a), and definition of II, printed pages 133–135
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

Assume $\mathrm{AC}_\omega$. Let $M\subseteq\overline M$ be an embedded
Riemannian submanifold, let $\overline\nabla$ be the Levi–Civita connection of
the ambient metric, and let $X,Y\in\Gamma(TM)$. Around each $p\in M$, extend
$X$ and $Y$ locally to ambient fields $\widetilde X$ and $\widetilde Y$ using
a slice chart, and define the ambient derivative **along $M$** by

$$\overline\nabla_XY|_p:=\bigl(\overline\nabla_{\widetilde X}\widetilde Y\bigr)_p.$$

This value is independent of both extensions. Indeed, an alternative first
extension differs at $p$ by a vector that is zero, so function-linearity in
the differentiating slot gives no change. If an alternative second extension
differs by $W=\sum_a f^a\partial_a$ with $W|_M=0$, then every
$f^a|_M=0$ and tangency of $X_p$ gives $X_p(f^a)=0$. The connection laws
therefore give

$$\bigl(\overline\nabla_{\widetilde X}W\bigr)_p=\sum_a X_p(f^a)\partial_a|_p+\sum_a f^a(p)\bigl(\overline\nabla_{\widetilde X}\partial_a\bigr)_p=0.$$

The same local calculation shows that these values vary smoothly along $M$.
No simultaneous or global choice of extensions is used.

Using the smooth projections of
[[def-tangential-and-normal-projections-along-a-riemannian-submanifold]],
define the **induced connection** and the **second fundamental form** by

$$\nabla^M_XY:=\bigl(\overline\nabla_XY\bigr)^\top,\qquad \mathrm{II}(X,Y):=\bigl(\overline\nabla_XY\bigr)^\perp.$$

Thus the orthogonal splitting gives the **Gauss decomposition**

$$\overline\nabla_XY=\nabla^M_XY+\mathrm{II}(X,Y).$$

The assumption $\mathrm{AC}_\omega$ is inherited exactly from the preceding
smooth restricted-bundle and projection construction. The local extension
and independence calculation above adds no choice. The formulas are valid for
the empty submanifold, in tangent or normal rank zero, in rank one, and at
boundary points; positive definiteness of the Riemannian metric excludes a
degenerate orthogonal splitting. The following items prove that $\nabla^M$ is
the intrinsic Levi–Civita connection and that $\mathrm{II}$ is a symmetric
$\nu M$-valued tensor.
