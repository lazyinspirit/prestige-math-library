---
id: def-projection-valued-measure
kind: definition
title: Projection valued measure
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-hilbert-space, def-measurable-space, def-sigma-algebra, def-real-and-complex-inner-product-space, thm-hilbert-adjoint-properties, def-hilbert-orthogonal-projection, lem-orthogonal-projection-is-linear-self-adjoint-contractive, thm-orthogonal-decomposition-by-a-closed-subspace, def-regular-borel-measure-on-an-lch-space, def-locally-compact-space, def-countable-choice]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, Definition 5.72, printed pp.273–276"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem, Definition 5.1 and Remark 5.5, pp.15–17"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
---

## Definition

Assume Countable Choice. Let $(X,\Sigma)$ be a measurable space
([[def-measurable-space]], [[def-sigma-algebra]]) and let $H$ be a complex
Hilbert space ([[def-hilbert-space]]). A **projection valued measure** (PVM) on
$(X,\Sigma)$ is a map

$$E:\Sigma\longrightarrow\mathcal B(H),\qquad B\longmapsto E(B),$$

such that:

1. $E(B)$ is an **orthogonal projection** for every $B\in\Sigma$, that is, a
   bounded operator with $E(B)^2=E(B)=E(B)^*$; there is no finite-dimensional
   restriction;
2. $E(\varnothing)=0$ and $E(X)=I$;
3. $E(B\cap C)=E(B)E(C)$ for all $B,C\in\Sigma$;
4. for every pairwise disjoint sequence $(B_n)_{n\in\mathbb N}$ in $\Sigma$ with
   union $B$ and every $x\in H$, the series $\sum_nE(B_n)x$ converges in norm
   to $E(B)x$, that is
   $$E(B)x=\sum_{n=1}^{\infty}E(B_n)x .$$

Clause 4 is **strong countable additivity**. A PVM is called **regular** when
$X$ is a locally compact Hausdorff space ([[def-locally-compact-space]]), the
$\sigma$-algebra is the Borel $\sigma$-algebra, and every one of the finite
positive measures

$$E_x(B):=\langle E(B)x,x\rangle,\qquad x\in H,\ B\in\Sigma,$$

is a regular Borel measure ([[def-regular-borel-measure-on-an-lch-space]]). Inner
products are linear in the first variable and conjugate-linear in the second
([[def-real-and-complex-inner-product-space]]); this fixed convention is the one
used for every pairing $E_{x,y}(B)=\langle E(B)x,y\rangle$ on this page.

**Well-definedness: the projection clause.** The conditions $P^2=P=P^*$ are
simultaneously meaningful and describe exactly the Hilbert orthogonal
projections, with no hidden finite-dimensional hypothesis. Indeed, for a
bounded $P$ with $P^2=P=P^*$ the range $\operatorname{ran}P$ is a linear
subspace, and for $y=Pw$ one has
$\langle x-Px,y\rangle=\langle P(x-Px),w\rangle=\langle Px-P^2x,w\rangle=0$, so
$x-Px\perp\operatorname{ran}P$; conversely $\langle Pz,Pz\rangle=\langle z,P^*Pz\rangle=\langle z,Pz\rangle=0$
for $z\perp\operatorname{ran}P$, so $z\in\ker P$, while
$\langle z,Px\rangle=\langle Pz,x\rangle=0$ for $z\in\ker P$ gives
$\ker P=(\operatorname{ran}P)^\perp$
([[thm-hilbert-adjoint-properties]],
[[def-real-and-complex-inner-product-space]]). Hence
$\operatorname{ran}P=(\ker P)^\perp$ is closed, and the two defining properties
$Px\in\operatorname{ran}P$, $x-Px\in(\operatorname{ran}P)^\perp$ of
[[def-hilbert-orthogonal-projection]] show that $P=P_{\operatorname{ran}P}$ is
the Hilbert orthogonal projection onto a closed subspace, and conversely every
such $P_M$ is idempotent and self-adjoint by
[[lem-orthogonal-projection-is-linear-self-adjoint-contractive]] and
[[thm-orthogonal-decomposition-by-a-closed-subspace]]. Finally $P$ is
contractive: from $\langle Px,x\rangle=\langle Px,Px\rangle=\|Px\|^2$ and
Cauchy–Schwarz, $\|Px\|^2\le\|Px\|\,\|x\|$, so $\|Px\|\le\|x\|$ for all $x$,
and $\langle Px,x\rangle=\|Px\|^2\ge0$ is a nonnegative real number.

**Well-definedness: the regularity clause.** For an orthogonal projection value
the pairing $E_x(B)=\langle E(B)x,x\rangle$ is a nonnegative real number and
$E_x(X)=\langle x,x\rangle=\|x\|^2<+\infty$, so every $E_x$ is a finite
nonnegative set function and the regularity requirement is a meaningful
condition on it; that each $E_x$ is genuinely a countably additive measure of
total mass $\|x\|^2$, and that the polarized pairings $E_{x,y}$ are finite
complex measures, is proved as
[[lem-scalar-and-complex-measures-from-a-pvm]] before either is used.
