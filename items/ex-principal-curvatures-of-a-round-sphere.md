---
id: ex-principal-curvatures-of-a-round-sphere
kind: example
title: Principal curvatures of a round sphere
status: draft
origin: pipeline
deps: ["def-countable-choice", "def-shape-operator", "def-principal-curvatures-gaussian-curvature-and-mean-curvature-of-an-oriented-hypersurface", "prop-christoffel-formula-for-the-levi-civita-connection", "prop-connection-laws-in-directional-form"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Example 14.2.3, printed page 105
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: Principal-curvature definition and round-sphere calculation, printed pages 141–142
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $n\geq1$ and $r>0$. On the round
hypersphere $S^n_r\subset\mathbb R^{n+1}$, equip the induced metric with the
outward unit normal $\nu(x)=x/r$ and use the convention
$S_\nu X=-\overline\nabla_X\nu$. Then

$$S_\nu=-\frac1r\operatorname{id}_{TS^n_r},$$

so all $n$ principal curvatures are $-1/r$. For the inward normal $-\nu$,
all principal curvatures are $+1/r$. The countable-choice assumption is
inherited exactly from the general shape-operator construction.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, an integer $n\geq1$, a radius $r>0$, the
standard Euclidean metric, and the displayed outward normal field.

[F1] Countable choice permits a choice from every sequence of nonempty sets. [[def-countable-choice]].

[F2] Under $\mathrm{AC}_\omega$, the shape operator is $S_\nu X=-(\overline\nabla_X\nu)^\top$, and it is linear in the normal direction. [[def-shape-operator]].

[F3] The principal curvatures are the eigenvalues of the self-adjoint shape operator, counted with algebraic multiplicity, and reversing the normal negates them. [[def-principal-curvatures-gaussian-curvature-and-mean-curvature-of-an-oriented-hypersurface]].

[F4] The Euclidean Levi–Civita symbols are obtained from the metric Christoffel formula, and the connection differentiates scalar coefficients by the section Leibniz rule. [[prop-christoffel-formula-for-the-levi-civita-connection]], [[prop-connection-laws-in-directional-form]].

## Verification

**Proof technique:** direct calculation.

1.1 For $x\in S^n_r$, $\lVert\nu(x)\rVert=\lVert x\rVert/r=1$. If $u\in T_xS^n_r$ is represented by a smooth curve $c$ in the sphere with $c(0)=x$ and $c'(0)=u$, differentiating $\lVert c(t)\rVert^2=r^2$ gives $2\langle x,u\rangle=0$. Hence $\nu(x)$ is normal to the hypersphere; because it points in the radial direction away from the origin, it is the smooth outward unit normal. [given, algebra]

2.1 In Cartesian coordinates the Euclidean metric coefficients are the constant matrix $(\delta_{ab})$, so [F4] gives $\overline\Gamma^a{}_{bc}=0$. Writing $\nu=(x^a/r)\partial_a$, the connection Leibniz rule therefore yields $\overline\nabla_u\nu=u(x^a/r)\partial_a=u/r$. This vector is tangent because it is a scalar multiple of $u$, and [F2] gives $S_\nu u=-u/r$. Thus $S_\nu=-(1/r)\operatorname{id}$ on every tangent space. [F2, F4, step 1.1, algebra]

3.1 Every nonzero tangent vector is therefore an eigenvector with eigenvalue $-1/r$, and the identity map on the $n$-dimensional tangent space has that eigenvalue with algebraic multiplicity $n$. By [F3] these are exactly all principal curvatures. Normal-linearity in [F2] gives $S_{-\nu}=-S_\nu=(1/r)\operatorname{id}$, so [F3] gives $+1/r$ for all principal curvatures with the inward normal. [F2, F3, step 2.1, algebra]

4.1 The sphere is nonempty for every $n\geq1$ and $r>0$; the one-dimensional case is the circle and steps 1.1–3.1 give its single curvature with the same sign. Dimension zero is excluded because [F3] defines the present principal-curvature package only in positive hypersurface dimension. The condition $r>0$ excludes the collapsed, non-hypersurface radius-zero case; there is no parameter endpoint or manifold boundary. The supplied global radial field fixes the orientation without a selection. The only choice assumption is precisely the stated $\mathrm{AC}_\omega$ inherited through [F2] and [F3], and the explicit computation adds none. No biconditional is asserted. [F1, F2, F3, F4, step 1.1, step 2.1, step 3.1] ∎
