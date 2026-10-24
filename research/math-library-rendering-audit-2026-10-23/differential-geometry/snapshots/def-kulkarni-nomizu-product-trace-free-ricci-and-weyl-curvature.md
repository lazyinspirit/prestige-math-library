---
id: def-kulkarni-nomizu-product-trace-free-ricci-and-weyl-curvature
kind: definition
title: Kulkarni–Nomizu product, trace-free Ricci tensor, and Weyl curvature
status: published
origin: pipeline
deps: ["def-countable-choice","def-ricci-curvature","def-scalar-curvature","def-tensor-product-of-multilinear-tensors"]
justified_by: ["prop-ricci-decomposition-of-the-riemann-tensor-in-dimension-at-least-three"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Definitions 13.1.2 and 13.1.6, Lemma 13.1.7, and Theorem 13.2.1, printed pages 90–95
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

This item assumes $\mathrm{AC}_\omega$, namely [[def-countable-choice|countable choice]]. In the propagated dependency chain, that assumption is required through [[def-scalar-curvature]]; after those interfaces are fixed, the remaining local or finite argument makes no additional countable-family choice.

For symmetric covariant two-tensors $h$ and $k$, their
**Kulkarni–Nomizu product** is the covariant four-tensor

$$\begin{aligned}(h\odot k)(X,Y,Z,T)={}&h(X,T)k(Y,Z)+h(Y,Z)k(X,T)\\&-h(X,Z)k(Y,T)-h(Y,T)k(X,Z).\end{aligned}$$

This fixes the order and sign convention used below. In particular,

$$(g\odot g)(X,Y,Z,T)=2\bigl(g(X,T)g(Y,Z)-g(X,Z)g(Y,T)\bigr),$$

so the constant-sectional-curvature-$K$ tensor is
$(K/2)(g\odot g)$.

On an $n$-dimensional Riemannian manifold with $n\geq 1$, define the
**trace-free Ricci tensor** by

$$\operatorname{Ric}_0:=\operatorname{Ric}-\frac{S}{n}g.$$

Indeed $\operatorname{tr}_g\operatorname{Ric}_0=S-(S/n)n=0$. In dimension
zero, where division by $n$ has no meaning, set $\operatorname{Ric}_0=0$;
this is the unique covariant two-tensor on every zero-dimensional tangent
space.

For $n\geq3$, define the **Weyl curvature tensor** by

$$W:=\operatorname{Rm}-\frac{1}{n-2}(\operatorname{Ric}_0\odot g)-\frac{S}{2n(n-1)}(g\odot g).$$

The next proposition proves that this is an algebraic curvature tensor with
vanishing Ricci contraction and that it is the unique trace-free summand in
the Ricci decomposition. Weyl curvature is not defined by this formula in
dimensions zero, one, or two; the separate low-dimensional curvature formulas
are also proved there.

All constructions are pointwise tensor operations on smooth tensors and so
are smooth, including at boundary points. On an empty manifold of an allowed
fixed dimension they give the corresponding unique empty tensor fields. No
basis is chosen, and the finite contractions make no further family choice beyond the stated inherited assumption. Metric degeneracy is
excluded by the Riemannian hypothesis.
