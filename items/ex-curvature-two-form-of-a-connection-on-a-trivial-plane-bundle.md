---
id: ex-curvature-two-form-of-a-connection-on-a-trivial-plane-bundle
kind: example
title: Curvature two-form of a connection on a trivial plane bundle
status: draft
origin: pipeline
deps: ["def-connection-on-a-smooth-vector-bundle", "thm-curvature-two-form-structure-equation", "thm-local-coordinate-formula-for-the-exterior-derivative", "def-wedge-product-of-differential-forms", "def-matrix-product-and-identity-matrix"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Will J. Merry, Differential Geometry (2021)
      url: https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf
      locator: Lecture 36, Definition 36.18 and Theorem 36.19
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Proposition 6.1.3 and Remark 6.1.4, printed pages 38–39
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: calculation
---

## Statement

Let $E=\mathbb R^2\times\mathbb R^2\to\mathbb R^2$ be the trivial rank-two
bundle, with base coordinates $(x,y)$ and its standard global frame. For fixed
real $2\times2$ matrices $A,B$, there is a connection with connection matrix

$$\omega=By\,dx+Ax\,dy,$$

and its curvature matrix is

$$\Omega=\bigl(A-B+xy(BA-AB)\bigr)\,dx\wedge dy.$$

Thus the quadratic term in the structure equation remembers the order of
matrix multiplication.

## Facts & Assumptions

**Given:** The displayed trivial bundle, fixed matrices $A,B$, coordinates,
and standard global frame.

[F1] A connection is a real-linear operator on sections satisfying
$\nabla(fs)=df\otimes s+f\nabla s$. [[def-connection-on-a-smooth-vector-bundle]].

[F2] In a frame with connection matrix $\omega$, the curvature matrix is
$\Omega=d\omega+\omega\wedge\omega$, with
$(\omega\wedge\omega)^i{}_j=\sum_k\omega^i{}_k\wedge\omega^k{}_j$ in that
order. [[thm-curvature-two-form-structure-equation]].

[F3] If a form is written in coordinate wedges, its exterior derivative is
obtained by differentiating the scalar coefficients. [[thm-local-coordinate-formula-for-the-exterior-derivative]].

[F4] The wedge product is the pointwise alternating product of forms.
[[def-wedge-product-of-differential-forms]].

[F5] Matrix multiplication uses the ordered entry formula
$(CD)_{ij}=\sum_k C_{ik}D_{kj}$. [[def-matrix-product-and-identity-matrix]].

## Proof

**Proof technique:** explicit construction and calculation.

1.1 Write every section uniquely as $s=eu$ in the standard global frame $e$ and define $\nabla(eu)=e(du+\omega u)$. This operator is real-linear. Moreover, $d(fu)=df\,u+f\,du$ and $\omega(fu)=f\omega u$, so $\nabla(feu)=df\otimes(eu)+f\nabla(eu)$. Hence [F1] makes it a connection. For a constant standard basis column $u_j$, the derivative term vanishes and $\nabla(eu_j)=e\omega u_j$, so its connection matrix is the displayed $\omega$. [F1, F5, algebra]

1.2 Apply [F3] entrywise. Since $d(By)=B\,dy$ and $d(Ax)=A\,dx$, one gets $d\omega=B\,dy\wedge dx+A\,dx\wedge dy=(A-B)\,dx\wedge dy$. [F3, F4, algebra]

1.3 Expand the ordered matrix-valued wedge product using [F4]–[F5]. The two self-products vanish because $dx\wedge dx=dy\wedge dy=0$, while the cross terms give $\omega\wedge\omega=xy(BA\,dx\wedge dy+AB\,dy\wedge dx)=xy(BA-AB)\,dx\wedge dy$. [F4, F5, algebra]

2.1 Substitution of steps 1.2–1.3 into [F2] proves $\Omega=(A-B+xy(BA-AB))\,dx\wedge dy$. [F2, step 1.2, step 1.3, algebra]

2.2 The order-sensitive term can be genuinely nonzero. For $A=\left(\begin{smallmatrix}0&1\\0&0\end{smallmatrix}\right)$ and $B=\left(\begin{smallmatrix}0&0\\1&0\end{smallmatrix}\right)$, direct multiplication gives $BA=\left(\begin{smallmatrix}0&0\\0&1\end{smallmatrix}\right)$ and $AB=\left(\begin{smallmatrix}1&0\\0&0\end{smallmatrix}\right)$, hence $BA-AB=\operatorname{diag}(-1,1)\ne0$. Thus at every point with $xy\ne0$ the quadratic summand is nonzero. [F5, step 1.3, algebra]

3.1 The base and fibres are nonempty and have fixed dimension and rank two, so empty, zero-dimensional, rank-zero, and one-dimensional cases are inapplicable to this example. No inverse or division occurs: $x=0$, $y=0$, $A=0$, $B=0$, and commuting $A,B$ are all allowed and the same formula then specializes correctly. The base is all of $\mathbb R^2$, with no endpoint or manifold boundary. The frame, matrices, connection, and witness in step 2.2 are explicit, so no choice principle is used. No biconditional is asserted. [F1, F2, F3, F4, F5, step 1.1, step 1.2, step 1.3, step 2.1, step 2.2] ∎
