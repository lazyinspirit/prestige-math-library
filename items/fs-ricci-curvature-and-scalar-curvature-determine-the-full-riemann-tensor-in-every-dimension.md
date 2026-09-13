---
id: fs-ricci-curvature-and-scalar-curvature-determine-the-full-riemann-tensor-in-every-dimension
kind: false-statement
title: Ricci curvature and scalar curvature determine the full Riemann tensor in every dimension
status: draft
origin: pipeline
deps: ["def-countable-choice","prop-ricci-decomposition-of-the-riemann-tensor-in-dimension-at-least-three","thm-algebraic-symmetries-of-the-riemann-tensor","def-ricci-curvature","def-scalar-curvature","def-riemann-curvature-four-tensor","prop-coordinate-criterion-for-a-riemannian-metric","prop-christoffel-formula-for-the-levi-civita-connection","prop-coordinate-formula-for-the-curvature-tensor","thm-increasing-basis-wedges-form-a-basis"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Proposition 12.1.1, printed pages 80–82; Lemma 11.3.1, printed pages 74–75; and Lecture 13, Lemmas 13.1.5 and 13.1.7 through Theorem 13.2.1, printed pages 89–95
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement refuted

This item assumes $\mathrm{AC}_\omega$, namely [[def-countable-choice|countable choice]]. In the propagated dependency chain, that assumption is required through [[prop-ricci-decomposition-of-the-riemann-tensor-in-dimension-at-least-three]], [[thm-algebraic-symmetries-of-the-riemann-tensor]], and [[def-scalar-curvature]]; after those interfaces are fixed, the remaining local or finite argument makes no additional countable-family choice.

**False claim:** at each point of a Riemannian manifold, the Ricci tensor and
scalar curvature determine the full Riemann curvature tensor in every
dimension.

This is false in dimension four and higher: the trace-free Weyl summand can
be nonzero while every Ricci contraction, and hence the scalar curvature,
vanishes.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the Euclidean inner-product space $V=\mathbb R^4$ with its ordered
orthonormal basis $(e_1,e_2,e_3,e_4)$.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]] and is required here through [[prop-ricci-decomposition-of-the-riemann-tensor-in-dimension-at-least-three]], [[thm-algebraic-symmetries-of-the-riemann-tensor]], and [[def-scalar-curvature]]; after those supplied interfaces are fixed, the remaining local or finite calculation makes no additional countable-family choice.

[F1] A Riemann curvature tensor has the two pair skews, pair interchange, and
cyclic Bianchi symmetry.
[[thm-algebraic-symmetries-of-the-riemann-tensor]].

[F2] In dimension at least three, the Ricci decomposition is unique, and its
Weyl summand has zero Ricci contraction.
[[prop-ricci-decomposition-of-the-riemann-tensor-in-dimension-at-least-three]].

[F3] In an orthonormal basis,
$\operatorname{Ric}(X,Y)=\sum_i\operatorname{Rm}(e_i,X,Y,e_i)$, and scalar
curvature is the trace of Ricci.
[[def-ricci-curvature]], [[def-scalar-curvature]].

[F4] Increasing wedges of a basis form a basis of its exterior square.
[[thm-increasing-basis-wedges-form-a-basis]].

[F5] A smooth symmetric positive-definite coordinate matrix defines a
Riemannian metric, and its four-tensor lowers the coordinate curvature output
with the metric.
[[prop-coordinate-criterion-for-a-riemannian-metric]],
[[def-riemann-curvature-four-tensor]].

[F6] The Levi–Civita Christoffel symbols and the curvature coefficients obey
their displayed coordinate formulas.
[[prop-christoffel-formula-for-the-levi-civita-connection]],
[[prop-coordinate-formula-for-the-curvature-tensor]].

## Refutation

**Proof technique:** direct construction.

1.1 By [F4], $(e_{12},e_{13},e_{14},e_{34},e_{42},e_{23})$, where $e_{ij}=e_i\wedge e_j$, is a basis of $\Lambda^2V$. Let $Q$ be diagonal in this ordered orthonormal basis with respective eigenvalues $(1,-1,0,1,-1,0)$, and define $A(x,y,z,w)=-\langle Q(x\wedge y),z\wedge w\rangle$. The definition makes $A$ skew in each pair and invariant under pair interchange. For the cyclic Bianchi sum it suffices by multilinearity to use basis vectors: if the first three indices repeat, pair skewness cancels the two possible nonzero terms; if they are distinct and the fourth repeats one of them, diagonality makes the two pairings between distinct wedge-basis elements zero; and if all four indices are distinct, all three pairings are between distinct wedge-basis elements and vanish. Thus $A$ has every symmetry in [F1], and $A(e_1,e_2,e_2,e_1)=1$, so $A\ne0$. [A1, F1, F4, algebra]

2.1 Write $A_{ijkl}=A(e_i,e_j,e_k,e_l)$ and define on a sufficiently small open ball $B$ about $0\in\mathbb R^4$ the symmetric matrix $g_{ij}(x)=\delta_{ij}+\frac13A_{ikjl}x^kx^l$. Pair interchange in step 1.1, followed by interchanging the dummy indices $k,l$, gives $g_{ji}=g_{ij}$. Since $g(0)=I$, continuity permits $B$ to be chosen so that $g(x)$ is positive definite throughout; its entries are polynomial. Hence [F5] makes $g$ a Riemannian metric on $B$. [F5, step 1.1, algebra]

2.2 Diagonality of $Q$ gives, for $a\ne b$, $\operatorname{Ric}_A(e_a,e_b)=\sum_iA(e_i,e_a,e_b,e_i)=0$: terms with $i=a$ or $i=b$ vanish by pair skewness, and every other term pairs two distinct wedge-basis elements. The diagonal entries are $\operatorname{Ric}_{11}=1-1+0=0$, $\operatorname{Ric}_{22}=1-1+0=0$, $\operatorname{Ric}_{33}=-1+1+0=0$, and $\operatorname{Ric}_{44}=0+1-1=0$. Thus [F3] gives $\operatorname{Ric}_A=0$ and $S_A=0$. [F3, step 1.1, algebra]

3.1 Put $h_{ij,kl}=\partial_k\partial_lg_{ij}(0)$. Step 2.1 gives $h_{ij,kl}=\frac13(A_{ikjl}+A_{iljk})$, while all first derivatives of $g$ vanish at $0$. Therefore [F6] gives $\Gamma^\ell{}_{ij}(0)=0$ and, after differentiating the Christoffel formula once and using $g(0)=I$, $$\operatorname{Rm}_{ijkl}(0)=\frac12\bigl(h_{ik,jl}+h_{jl,ik}-h_{il,jk}-h_{jk,il}\bigr)=A_{ijkl}.$$ The last equality follows by substituting the displayed formula for $h$ and applying the pair symmetries and cyclic Bianchi identity verified in step 1.1. Thus $A$ is the actual Riemann curvature tensor of the local metric $g$ at the origin. [F1, F5, F6, step 1.1, step 2.1, algebra]

3.2 In dimension four, [F2] and step 2.2 reduce the Ricci decomposition of $A$ to $A=W_A$. Consequently this example has nonzero Weyl tensor even though its Ricci tensor and scalar curvature vanish. [F2, step 1.1, step 2.2]

4.1 The Euclidean metric on the same ball has zero Riemann, Ricci, and scalar curvature at $0$, whereas steps 2.2–3.1 give the local metric $g$ the same zero Ricci and scalar values but the nonzero full curvature $A$. This pair of genuine Riemannian metrics refutes pointwise determination by Ricci and scalar curvature. [F3, step 1.1, step 2.2, step 3.1, step 3.2]

5.1 The witness is nonempty, boundaryless, four-dimensional, and positive definite after the explicit shrinking in step 2.1. In dimensions zero and one the curvature tensor vanishes, and in dimensions two and three the low-dimensional clauses of [F2] do give determination by Ricci/scalar data; none of those true special cases rescues the false “every dimension” assertion. No parameter endpoint occurs. All bases, tensors, and metrics are explicit finite constructions, so no further family choice is made beyond the stated inherited assumption. The claim is a one-way determination assertion, not a biconditional. [F2, step 1.1, step 2.1, step 2.2, step 3.1, step 4.1] ∎
