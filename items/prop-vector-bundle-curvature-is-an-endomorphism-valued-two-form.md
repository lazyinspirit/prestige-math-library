---
id: prop-vector-bundle-curvature-is-an-endomorphism-valued-two-form
kind: proposition
title: Vector-bundle curvature is an endomorphism-valued two-form
status: draft
origin: pipeline
deps: ["def-curvature-of-a-vector-bundle-connection", "prop-connection-laws-in-directional-form", "prop-leibniz-rules-for-the-lie-bracket-with-function-multiples", "def-smooth-differential-k-form", "def-dual-and-hom-vector-bundles", "thm-dual-and-hom-transition-functions-define-smooth-bundles", "lem-finite-tensor-products-of-smooth-vector-bundles"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Will J. Merry, Differential Geometry (2021)
      url: https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf
      locator: Examples 36.11 and Theorem 36.19
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Lecture 6, Lemma 6.1.2 and Proposition 6.1.3, printed pages 38–39
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

For a connection $\nabla$ on $E\to M$, the curvature $R^\nabla(X,Y)s$ is
$C^\infty(M)$-linear separately in $X$, $Y$, and $s$, and is alternating in
$X,Y$. Its pointwise values depend smoothly on the base point and therefore
define

$$R^\nabla\in\Omega^2(M;\operatorname{End}(E)).$$

## Facts & Assumptions

[F1] Bundle curvature is the bracket-corrected commutator of covariant derivatives. [[def-curvature-of-a-vector-bundle-connection]].

[F2] A connection is function-linear in its differentiating field and satisfies the section Leibniz rule. [[prop-connection-laws-in-directional-form]].

[F3] The Lie bracket satisfies $[fX,Y]=f[X,Y]-Y(f)X$ and $[X,fY]=f[X,Y]+X(f)Y$. [[prop-leibniz-rules-for-the-lie-bracket-with-function-multiples]].

[F4] A smooth two-form is a smooth section of the alternating second cotangent power. [[def-smooth-differential-k-form]].

[F5] The Hom bundle has fibre $\operatorname{Hom}(E_p,E_p)=\operatorname{End}(E_p)$. [[def-dual-and-hom-vector-bundles]].

[F6] The Hom construction carries a smooth vector-bundle structure, and finite tensor products of smooth vector bundles carry canonical smooth product-frame structures. [[thm-dual-and-hom-transition-functions-define-smooth-bundles]], [[lem-finite-tensor-products-of-smooth-vector-bundles]].

## Proof

**Given:** Smooth vector fields $X,Y$, a smooth function $f$, a smooth section $s$ of $E$, and a connection $\nabla$.

1.1 Expanding $R(fX,Y)s$ with [F1]–[F3] produces $fR(X,Y)s-Y(f)\nabla_Xs+Y(f)\nabla_Xs=fR(X,Y)s$; expanding $R(X,fY)s$ produces $fR(X,Y)s+X(f)\nabla_Ys-X(f)\nabla_Ys=fR(X,Y)s$. Interchanging $X,Y$ in [F1] and using $[Y,X]=-[X,Y]$ gives $R(Y,X)s=-R(X,Y)s$. [F1, F2, F3, algebra]

2.1 Applying the section Leibniz rule twice gives $R(X,Y)(fs)=fR(X,Y)s+\bigl(X(Yf)-Y(Xf)-[X,Y]f\bigr)s=fR(X,Y)s$. Thus evaluation at a point depends only on $X_p,Y_p,s_p$, and the result is alternating in the tangent entries. [F1, F2, step 1.1, algebra]

3.1 On a neighborhood with tangent frame $E_i$ and bundle frame $e_a$, each $R(E_i,E_j)e_a$ is a smooth section because [F1] combines connection derivatives and a Lie bracket of smooth inputs. Its smooth frame coefficients are alternating in $i,j$ by step 1.1 and define a smooth section of $\bigwedge^2T^*M\otimes\operatorname{End}(E)$ by [F4]–[F6]. Step 2.1 shows that this section acts on arbitrary $X,Y,s$ as the original curvature. [F1, F4, F5, F6, step 1.1, step 2.1] ∎
