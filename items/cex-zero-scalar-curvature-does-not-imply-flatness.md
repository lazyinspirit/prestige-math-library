---
id: cex-zero-scalar-curvature-does-not-imply-flatness
kind: counterexample
title: Zero scalar curvature does not imply flatness
status: published
origin: pipeline
deps: ["def-countable-choice","def-curvature-of-an-affine-connection","cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases","ex-the-round-sphere-has-positive-constant-sectional-curvature","ex-hyperbolic-space-has-negative-constant-sectional-curvature","ex-curvature-of-a-riemannian-product","prop-scalar-curvature-is-twice-the-sum-of-sectional-curvatures-of-coordinate-planes"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Examples 8.2.6 and 8.2.8, printed page 49; Proposition 12.2.2 and Definition 12.2.3, printed pages 85–86; Example 14.2.3, printed page 105
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: Proposition 3.5(c), printed pages 38–42; scalar and model curvature formulas, printed pages 147–149; Problem 8-7(a)–(b), printed page 151
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: counterexample
---

## False claim

Every Riemannian manifold with identically zero scalar curvature is flat.

## Counterexample

This item assumes $\mathrm{AC}_\omega$, namely [[def-countable-choice|countable choice]]. In the propagated dependency chain, that assumption is required through [[ex-the-round-sphere-has-positive-constant-sectional-curvature]], [[ex-hyperbolic-space-has-negative-constant-sectional-curvature]], [[ex-curvature-of-a-riemannian-product]], and [[prop-scalar-curvature-is-twice-the-sum-of-sectional-curvatures-of-coordinate-planes]]; after those interfaces are fixed, the remaining local or finite argument makes no additional countable-family choice.

Assume $\mathrm{AC}_\omega$ and let $r>0$. Give

$$M=S^2_r\times H^2_r$$

the Riemannian product metric, with $H^2_r$ in its upper-half-space model of
sectional curvature $-1/r^2$. Then $M$ has scalar curvature identically zero,
but its Riemann tensor is nonzero at every point. Hence $M$ is not flat and
the false claim fails. The countable-choice assumption is inherited through
the four curvature and scalar-curvature suppliers named above.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $r>0$, and the product of the displayed
round and hyperbolic surfaces.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]] and is required here through [[ex-the-round-sphere-has-positive-constant-sectional-curvature]], [[ex-hyperbolic-space-has-negative-constant-sectional-curvature]], [[ex-curvature-of-a-riemannian-product]], and [[prop-scalar-curvature-is-twice-the-sum-of-sectional-curvatures-of-coordinate-planes]]; after those supplied interfaces are fixed, the remaining local or finite calculation makes no additional countable-family choice.

[F1] Countable choice permits a choice from every sequence of nonempty sets, and a connection is flat exactly when its curvature tensor vanishes identically. [[def-countable-choice]], [[def-curvature-of-an-affine-connection]].

[F2] Every finite-dimensional real inner-product space has an orthonormal basis. [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]].

[F3] Under $\mathrm{AC}_\omega$, every tangent two-plane of $S^2_r$ has sectional curvature $+1/r^2$. [[ex-the-round-sphere-has-positive-constant-sectional-curvature]].

[F4] Under the stated $\mathrm{AC}_\omega$, every tangent two-plane of the upper-half-space $H^2_r$ has sectional curvature $-1/r^2$. [[ex-hyperbolic-space-has-negative-constant-sectional-curvature]].

[F5] Product curvature restricts to each factor's curvature, and every mixed plane spanned by one nonzero pure vector from each factor has sectional curvature zero. [[ex-curvature-of-a-riemannian-product]].

[F6] For an orthonormal basis $(E_1,\ldots,E_n)$, scalar curvature is $2\sum_{i<j}K(\operatorname{span}\{E_i,E_j\})$. [[prop-scalar-curvature-is-twice-the-sum-of-sectional-curvatures-of-coordinate-planes]].

## Verification

**Proof technique:** explicit counterexample.

1.1 Fix any $(p,q)\in M$. By [F2], take orthonormal bases $(e_1,e_2)$ of $T_pS^2_r$ and $(f_1,f_2)$ of $T_qH^2_r$. The product vectors $E_1=(e_1,0)$, $E_2=(e_2,0)$, $E_3=(0,f_1)$, and $E_4=(0,f_2)$ are orthonormal. By [F3]–[F5], the six coordinate-plane curvatures are $K_{12}=1/r^2$, $K_{34}=-1/r^2$, and $K_{13}=K_{14}=K_{23}=K_{24}=0$. [A1, F2, F3, F4, F5, algebra]

2.1 Substitution of the six values from step 1.1 in [F6] gives $\operatorname{Scal}_M(p,q)=2(1/r^2-1/r^2+0+0+0+0)=0$. Since $(p,q)$ was arbitrary, scalar curvature vanishes identically. [F6, step 1.1, algebra]

3.1 On the pure sphere plane, [F3] and [F5] give $\operatorname{Rm}^M(E_1,E_2,E_2,E_1)=K_{12}=1/r^2\ne0$. Thus the Riemann tensor does not vanish at $(p,q)$; [F1] says the product is not flat. This is the required failed conclusion despite the zero scalar value in step 2.1. [F1, F3, F5, step 1.1, step 2.1, algebra]

4.1 Both factors and their product are nonempty fixed two- and four-manifolds, so zero- and one-dimensional cases are inapplicable. The hypothesis $r>0$ makes both metrics nondegenerate and all reciprocal curvature values defined; $r=0$ is excluded. The round sphere is boundaryless and the hyperbolic upper half-space excludes its height-zero ideal boundary, so no endpoint or manifold-boundary value is asserted. Step 1.1 fixes one arbitrary point before making two finite choices supplied by [F2], so it selects no point-indexed family. The stated $\mathrm{AC}_\omega$ is inherited through [F3]–[F6]; [F2] and the remaining calculation make no additional countable-family choice. The item supplies a counterexample to one implication, not a biconditional. [F1, F2, F3, F4, F5, F6, step 1.1, step 2.1, step 3.1] ∎
