---
id: ex-curvature-of-a-riemannian-product
kind: example
title: Curvature of a Riemannian product
status: draft
origin: pipeline
deps: ["def-countable-choice","prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure","thm-canonical-tangent-and-cotangent-splittings-for-products","prop-coordinate-criterion-for-a-riemannian-metric","thm-fundamental-theorem-of-riemannian-geometry","prop-christoffel-formula-for-the-levi-civita-connection","prop-connection-laws-in-directional-form","prop-coordinate-formula-for-the-curvature-tensor","thm-curvature-is-a-type-one-three-tensor","def-riemann-curvature-four-tensor","def-sectional-curvature"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Example 8.2.8, printed page 49
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: Product metric (3.3), printed pages 26–27, and Problem 8-7(a)–(b), printed page 151
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

This item assumes $\mathrm{AC}_\omega$, namely [[def-countable-choice|countable choice]]. In the propagated dependency chain, that assumption is required through [[def-sectional-curvature]]; after those interfaces are fixed, the remaining local or finite argument makes no additional countable-family choice.

Let $(M,g)$ and $(N,h)$ be Riemannian manifolds and give $M\times N$ the
product metric. For vector fields on a factor, write tildes for their canonical
factor lifts. The product Levi–Civita connection satisfies

$$\nabla^{M\times N}_{\widetilde X}\widetilde Y=\widetilde{\nabla^M_XY},\qquad \nabla^{M\times N}_{\widetilde U}\widetilde V=\widetilde{\nabla^N_UV},\qquad \nabla^{M\times N}_{\widetilde X}\widetilde V=\nabla^{M\times N}_{\widetilde V}\widetilde X=0.$$

Under the canonical tangent splitting, its curvature obeys the pointwise
formula

$$R^{M\times N}((u_1,u_2),(v_1,v_2))(w_1,w_2)=\bigl(R^M(u_1,v_1)w_1,R^N(u_2,v_2)w_2\bigr).$$

Consequently, every two-plane spanned by a nonzero vector $(u,0)$ from the
first factor and a nonzero vector $(0,v)$ from the second has sectional
curvature zero. Apart from the stated inherited $\mathrm{AC}_\omega$, the calculation makes no additional countable-family choice.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, two Riemannian manifolds with their product smooth structure and
product metric; where a mixed plane is discussed, supplied nonzero tangent
vectors $u$ and $v$ in the respective factors.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]] and is required here through [[def-sectional-curvature]]; after those supplied interfaces are fixed, the remaining local or finite calculation makes no additional countable-family choice.

[F1] Products have the canonical product smooth structure whose charts are
products of factor charts.
[[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]].

[F2] Tangent spaces split canonically as $T_{(p,q)}(M\times N)\cong T_pM\oplus T_qN$. [[thm-canonical-tangent-and-cotangent-splittings-for-products]].

[F3] A covariant two-tensor is a Riemannian metric when its matrices in smooth
charts have smooth entries and are symmetric positive definite.
[[prop-coordinate-criterion-for-a-riemannian-metric]].

[F4] The product metric has a unique Levi–Civita connection, whose symbols are given by the metric Christoffel formula; directional connections satisfy function-linearity and the differentiated-field Leibniz rule. [[thm-fundamental-theorem-of-riemannian-geometry]], [[prop-christoffel-formula-for-the-levi-civita-connection]], [[prop-connection-laws-in-directional-form]].

[F5] The coordinate curvature components are the derivative-and-quadratic expression in the Christoffel symbols, and curvature is tensorial in all three tangent inputs. [[prop-coordinate-formula-for-the-curvature-tensor]], [[thm-curvature-is-a-type-one-three-tensor]].

[F6] The Riemann four-tensor pairs the curvature output with the metric, and sectional curvature is its $(u,v,v,u)$ value divided by the positive Gram determinant. [[def-riemann-curvature-four-tensor]], [[def-sectional-curvature]].

## Verification

**Proof technique:** direct coordinate calculation.

1.1 Use [F2] to define, at $(p,q)$, $$k_{(p,q)}((u_1,u_2),(v_1,v_2)):=g_p(u_1,v_1)+h_q(u_2,v_2).$$ In the product chart supplied by [F1], its matrix is $\operatorname{diag}((g_{ij}(x)),(h_{\alpha\beta}(y)))$.  Its entries are smooth and it is symmetric; moreover $k((u_1,u_2),(u_1,u_2))=g(u_1,u_1)+h(u_2,u_2)>0$ unless both components vanish.  Thus [F3] proves that $k=\pi_M^*g+\pi_N^*h$ is a Riemannian metric. Its inverse matrix is $\operatorname{diag}((g^{ij}(x)),(h^{\alpha\beta}(y)))$; all mixed entries vanish, the first block has no $y$-dependence, and the second has no $x$-dependence. [F1, F2, F3, algebra, construct]

2.1 Applying [F4] to the blocks in step 1.1 gives $\Gamma^k{}_{ij}=\Gamma^k{}_{ij}(g)$ and $\Gamma^\gamma{}_{\alpha\beta}=\Gamma^\gamma{}_{\alpha\beta}(h)$, while every symbol whose indices meet both blocks is zero. For instance, $\Gamma^k{}_{i\beta}=\frac12g^{k\ell}(\partial_iG_{\beta\ell}+\partial_\beta g_{i\ell}-\partial_\ell G_{i\beta})=0$ and $\Gamma^k{}_{\alpha\beta}=-\frac12g^{k\ell}\partial_\ell h_{\alpha\beta}=0$; exchanging the factors covers an upper $N$-index. [F4, step 1.1, algebra]

3.1 A factor lift has coefficients depending only on that factor. Expanding covariant derivatives with the connection laws in [F4] and the symbols from step 2.1 gives $\nabla_{\widetilde X}\widetilde Y=\widetilde{\nabla^M_XY}$ and $\nabla_{\widetilde U}\widetilde V=\widetilde{\nabla^N_UV}$. In a cross derivative, the differentiated lift's coefficients are constant in the differentiating factor and all relevant mixed symbols vanish, so $\nabla_{\widetilde X}\widetilde V=\nabla_{\widetilde V}\widetilde X=0$. [F4, step 2.1, algebra]

3.2 In [F5], if the output and all three lower indices lie in the $M$ block, step 2.1 reproduces exactly the coordinate formula for $R^M$ because the symbols and their $x$-derivatives agree; all-$N$ indices similarly reproduce $R^N$. If the indices meet both blocks, each derivative term is either the derivative of a zero mixed symbol or a cross derivative of a factor-only symbol, and every quadratic term contains a zero mixed symbol. Hence every mixed curvature component is zero. Tensoriality and [F2] now give $R^{M\times N}((u_1,u_2),(v_1,v_2))(w_1,w_2)=(R^M(u_1,v_1)w_1,R^N(u_2,v_2)w_2)$. [F2, F5, step 2.1, algebra]

4.1 For $a=(u,0)$ and $b=(0,v)$, step 3.2 gives $R^{M\times N}(a,b)b=0$, so [F6] makes the sectional-curvature numerator zero. By step 1.1, $a$ and $b$ are orthogonal with squared norms $g(u,u)>0$ and $h(v,v)>0$, so their Gram determinant is the positive product $g(u,u)h(v,v)$; therefore their plane has sectional curvature zero. [A1, F6, step 1.1, step 3.2, algebra]

5.1 If a factor is empty, the product and every assertion about its points or mixed planes are vacuous. A zero-dimensional factor contributes an empty coordinate block and no nonzero vector for a mixed plane; one-dimensional factors are fully covered by the same formulas. Positive definiteness in step 1.1 excludes degenerate product metrics and step 4.1 checks the only denominator. There is no interval, scale endpoint, or manifold-boundary claim in this example. All charts and vectors are supplied locally and the Levi–Civita connection is unique, so no further family choice is made beyond the stated inherited assumption. No biconditional is asserted. [F1, F2, F3, F4, F5, F6, step 1.1, step 2.1, step 3.1, step 3.2, step 4.1] ∎
