---
id: def-tangent-cone-point
kind: definition
title: "The scheme-theoretic tangent cone at a point"
status: published
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-associated-graded-ring-and-module
  - def-affine-scheme-spectrum
  - def-affine-scheme
  - def-scheme-over-base
  - def-zariski-cotangent-space-point
  - def-dual-numbers-scheme
  - def-reduction-of-scheme
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, v6.10, §4g, tangent cones and Proposition 4.34"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "J. S. Milne, Algebraic Geometry Chapter 10 supplement, Definitions 10.69–10.71"
      url: "https://www.jmilne.org/math/CourseNotes/AG10.pdf"
    - title: "The Stacks Project, Section 27.7, Cones, Definitions 27.7.1–27.7.2 (tag 062P)"
      url: "https://stacks.math.columbia.edu/tag/062P"
---

## Definition

Let $X$ be a locally Noetherian scheme and $x\in X$. Write
$A=\mathcal O_{X,x}$, let $\mathfrak m_x$ be its maximal ideal, and put
$\kappa(x)=A/\mathfrak m_x$, as in [[def-zariski-cotangent-space-point]]. The
associated graded ring for the maximal-ideal filtration is
$$
\operatorname{gr}_{\mathfrak m_x}(A)=\bigoplus_{n\ge 0}\mathfrak m_x^n/\mathfrak m_x^{n+1}
$$
with multiplication induced from $A$ ([[def-associated-graded-ring-and-module]]).

For every $n$, multiplication by $\mathfrak m_x$ sends
$\mathfrak m_x^n$ into $\mathfrak m_x^{n+1}$, so it acts trivially on the
degree-$n$ quotient. Thus the scalar action on each graded piece factors
canonically through $\kappa(x)$, and the degree-zero piece is
$A/\mathfrak m_x=\kappa(x)$. This makes the associated graded ring a graded
$\kappa(x)$-algebra without choosing a coefficient field in $A$.

The **scheme-theoretic tangent cone** of $X$ at $x$ is the affine
$\kappa(x)$-scheme
$$
\operatorname{Cone}_x(X):=\operatorname{Spec}\!\left(\operatorname{gr}_{\mathfrak m_x}(A)\right)\longrightarrow \operatorname{Spec}\kappa(x).
$$
We use $\operatorname{Cone}_x(X)$ to distinguish this scheme from the
cotangent space denoted $C_xX$ in the preceding definition. Here `Spec` carries its affine scheme structure
([[def-affine-scheme-spectrum]], [[def-affine-scheme]]), and the map to
$\operatorname{Spec}\kappa(x)$ is the structure morphism of a scheme over
$\kappa(x)$ ([[def-scheme-over-base]]) induced by the degree-zero inclusion. The
grading is retained as part of the cone presentation. The reduction
$(\operatorname{Cone}_x(X))_{\mathrm{red}}$ is a closed subscheme that can
differ from $\operatorname{Cone}_x(X)$;
the definition uses the full associated graded ring, without quotienting by
its nilpotents ([[def-reduction-of-scheme]]).

If $A$ is already a field, then $\mathfrak m_x=0$, every positive graded
piece vanishes, and $\operatorname{Cone}_x(X)=\operatorname{Spec}\kappa(x)$.

For the closed point $x=(\epsilon)$ of the dual-numbers scheme
$D_k=\operatorname{Spec}(k[\epsilon]/(\epsilon^2))$
([[def-dual-numbers-scheme]]), every element
$a+b\epsilon$ with $a\ne0$ is a unit, so $\mathcal O_{D_k,x}=k[\epsilon]/(\epsilon^2)$
and $\mathfrak m_x=(\epsilon)$. Its associated graded pieces are $k$ in
degree $0$, $k\epsilon$ in degree $1$, and zero in every degree $n\ge2$;
the degree-one class squares to zero. Hence
$$
\operatorname{gr}_{(\epsilon)}\mathcal O_{D_k,x}\cong k[\epsilon]/(\epsilon^2),\qquad \operatorname{Cone}_x(D_k)\cong D_k.
$$
The nilradical is $(\epsilon)$, so the reduction is $\operatorname{Spec}k$.
Thus $\operatorname{Cone}_x(D_k)$ and its reduction have the same one-point
topological space but different structure sheaves.
