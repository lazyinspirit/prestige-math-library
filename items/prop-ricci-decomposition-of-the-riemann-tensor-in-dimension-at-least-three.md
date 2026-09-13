---
id: prop-ricci-decomposition-of-the-riemann-tensor-in-dimension-at-least-three
kind: proposition
title: Ricci decomposition of the Riemann tensor in dimension at least three
status: published
origin: pipeline
deps: ["def-countable-choice","def-kulkarni-nomizu-product-trace-free-ricci-and-weyl-curvature","thm-algebraic-symmetries-of-the-riemann-tensor","lem-contraction-is-independent-of-the-basis-formula","lem-ricci-curvature-is-symmetric-and-basis-independent","def-scalar-curvature","cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Lemma 13.1.5, Lemma 13.1.7, Remark 13.1.9, and Theorem 13.2.1, printed pages 91–95
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

This item assumes $\mathrm{AC}_\omega$, namely [[def-countable-choice|countable choice]]. In the propagated dependency chain, that assumption is required through [[def-kulkarni-nomizu-product-trace-free-ricci-and-weyl-curvature]], [[thm-algebraic-symmetries-of-the-riemann-tensor]], [[lem-ricci-curvature-is-symmetric-and-basis-independent]], and [[def-scalar-curvature]]; after those interfaces are fixed, the remaining local or finite argument makes no additional countable-family choice.

On an $n$-dimensional Riemannian manifold with $n\geq3$,

$$\operatorname{Rm}=W+\frac{1}{n-2}(\operatorname{Ric}_0\odot g)+\frac{S}{2n(n-1)}(g\odot g),$$

where $W$ has zero Ricci contraction. This decomposition into a trace-free
curvature tensor, a trace-free-Ricci summand, and a scalar summand is unique.
In dimension three, $W=0$. Separately, in dimension two,

$$\operatorname{Rm}=\frac{S}{4}(g\odot g).$$

## Facts & Assumptions

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]] and is required here through [[def-kulkarni-nomizu-product-trace-free-ricci-and-weyl-curvature]], [[thm-algebraic-symmetries-of-the-riemann-tensor]], [[lem-ricci-curvature-is-symmetric-and-basis-independent]], and [[def-scalar-curvature]]; after those supplied interfaces are fixed, the remaining local or finite calculation makes no additional countable-family choice.

[F1] The Kulkarni–Nomizu product, $\operatorname{Ric}_0$, and $W$ use the
displayed sign and coefficient conventions. [[def-kulkarni-nomizu-product-trace-free-ricci-and-weyl-curvature]].

[F2] The Riemann tensor has the algebraic curvature symmetries, including
pair interchange and Bianchi. [[thm-algebraic-symmetries-of-the-riemann-tensor]].

[F3] A dual-basis contraction is basis independent.
[[lem-contraction-is-independent-of-the-basis-formula]].

[F4] The Ricci tensor is the contraction
$c(\operatorname{Rm})(X,Y)=\sum_i\operatorname{Rm}(e_i,X,Y,e_i)$ in an
orthonormal basis. [[lem-ricci-curvature-is-symmetric-and-basis-independent]].

[F5] Scalar curvature is the metric trace of Ricci.
[[def-scalar-curvature]].

[F6] Every finite-dimensional real inner-product space has an orthonormal
basis. [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]].

## Proof

**Given:** $\mathrm{AC}_\omega$, a tangent inner-product space $(T_pM,g_p)$ of dimension $n$ and
the tensors in the statement.

1.1 Directly exchanging the four inputs in [F1]'s formula shows that $h\odot g$ has both pair skews, pair interchange, and the cyclic Bianchi identity whenever $h$ is symmetric. Hence it is an algebraic curvature tensor. For such a tensor $F$, define its Ricci contraction by $c(F)(X,Y)=\sum_iF(e_i,X,Y,e_i)$ in an orthonormal basis; [F3] makes this intrinsic. [A1, F1, F2, F3, algebra]

2.1 Substitution into [F1]'s four-term formula gives $c(h\odot g)=(n-2)h+(\operatorname{tr}_g h)g$: the four sums are respectively $(\operatorname{tr}_g h)g$, $nh$, $-h$, and $-h$. In particular, $c(g\odot g)=2(n-1)g$. [F1, step 1.1, algebra]

3.1 By [F4]–[F5], $c(\operatorname{Rm})=\operatorname{Ric}$ and $\operatorname{tr}_g\operatorname{Ric}=S$, so $\operatorname{tr}_g\operatorname{Ric}_0=0$. Applying step 2.1 to [F1]'s formula for $W$ gives $c(W)=\operatorname{Ric}-\operatorname{Ric}_0-(S/n)g=0$. The defining equation for $W$, rearranged, is the displayed decomposition. [F1, F4, F5, step 2.1, algebra]

3.2 More generally, suppose $\operatorname{Rm}=W'+h_0\odot g+a(g\odot g)$ with $c(W')=0$ and $\operatorname{tr}_g h_0=0$. Step 2.1 gives $\operatorname{Ric}=(n-2)h_0+2a(n-1)g$. Taking the metric trace yields $S=2an(n-1)$; subtracting $(S/n)g$ then gives $\operatorname{Ric}_0=(n-2)h_0$. Thus $a=S/(2n(n-1))$, $h_0=\operatorname{Ric}_0/(n-2)$, and the residual $W'$ equals $W$. [step 2.1, F4, F5, algebra]

4.1 Let $n=3$ and choose an orthonormal basis $(e_1,e_2,e_3)$ using [F6]. Put $A_{ij}=W(e_i,e_j,e_j,e_i)$ for $i<j$. The three diagonal equations $c(W)(e_i,e_i)=0$ are $A_{12}+A_{13}=0$, $A_{12}+A_{23}=0$, and $A_{13}+A_{23}=0$, so all $A_{ij}$ vanish. Each off-diagonal equation $c(W)(e_i,e_j)=0$ has only the term indexed by the remaining basis vector, because the other two terms vanish by a pair skew; hence all three off-diagonal components of the symmetric bilinear form induced by $W$ on $\Lambda^2T_pM$ also vanish. The pair symmetries in [F2] say these six entries determine $W$, so $W=0$. [F2, F6, step 3.1, algebra]

5.1 Let $n=2$ and choose an orthonormal basis $(e_1,e_2)$. If $K=\operatorname{Rm}(e_1,e_2,e_2,e_1)$, then [F2] and [F4] give $\operatorname{Ric}(e_1,e_1)=\operatorname{Ric}(e_2,e_2)=K$ and $\operatorname{Ric}(e_1,e_2)=0$; hence [F5] gives $S=2K$. The tensors $\operatorname{Rm}$ and $(S/4)(g\odot g)$ both have the algebraic curvature symmetries, and their single component on the one-dimensional space $\Lambda^2T_pM$ is $K$, because $(g\odot g)(e_1,e_2,e_2,e_1)=2$. Therefore they are equal. [F1, F2, F4, F5, F6, algebra] ∎
