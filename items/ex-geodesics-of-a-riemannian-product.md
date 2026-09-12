---
id: "ex-geodesics-of-a-riemannian-product"
kind: "example"
title: "Geodesics of a Riemannian product"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-countable-choice","thm-fundamental-theorem-of-riemannian-geometry","prop-christoffel-formula-for-the-levi-civita-connection","prop-coordinate-geodesic-equation","prop-a-riemannian-product-is-complete-iff-each-factor-is-complete"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, Example 8.2.8, p.49
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct coordinate computation"
---

## Example

Let $(M^m,g)$ and $(N^n,h)$ be boundaryless Riemannian manifolds, let $I\subseteq\mathbb R$ be an interval with nonempty interior, and give $M\times N$ the product metric $g\oplus h=\pi_M^*g+\pi_N^*h$. A smooth curve
$$\gamma=(\alpha,\beta):I\longrightarrow M\times N$$
is an affinely parametrized geodesic if and only if both $\alpha:I\to M$ and $\beta:I\to N$ are affinely parametrized geodesics with the same parameter $t$. “Same affine parameter” does not require the two factor speeds to be equal.

In particular, product geodesics defined on all of $\mathbb R$ are exactly pairs of all-real factor geodesics with their common affine time. If, in addition, $\mathrm{AC}_\omega$ is assumed and $M,N$ are nonempty and connected, then $M\times N$ is metrically, equivalently geodesically, complete if and only if both factors are.

## Facts & Assumptions

**Given:** The two boundaryless Riemannian manifolds, product metric, interval, and smooth curve in the example.

[A1] [[def-countable-choice]] is assumed only for the final completeness consequence.

[F1] In the supplied product coordinates, a tangent vector is a pair $(v,w)$, and the stipulated metric $g\oplus h=\pi_M^*g+\pi_N^*h$ evaluates on pairs as $(g\oplus h)((v,w),(v',w'))=g(v,v')+h(w,w')$. Hence its matrix is $\operatorname{diag}(G,H)$, with inverse $\operatorname{diag}(G^{-1},H^{-1})$. This follows directly from the metric in the Example statement.

[F2] [[thm-fundamental-theorem-of-riemannian-geometry]] supplies the unique Levi--Civita connection of the product metric without a choice assumption, and [[prop-christoffel-formula-for-the-levi-civita-connection]] computes its symbols from the metric matrix.

[F3] [[prop-coordinate-geodesic-equation]] says that vanishing of all coordinate expressions $\ddot z^A+\Gamma^A{}_{BC}\dot z^B\dot z^C$ is equivalent to the intrinsic affinely parametrized geodesic equation, including on chart subintervals and at included parameter endpoints.

[F4] Under [A1], [[prop-a-riemannian-product-is-complete-iff-each-factor-is-complete]] gives the metric and geodesic completeness equivalences for a finite family of nonempty connected boundaryless Riemannian manifolds.

## Verification

**Proof technique:** direct coordinate computation.

1.1 Choose product coordinates $(x^1,\ldots,x^m,y^1,\ldots,y^n)$ and write $\overline G$ for the full product-metric matrix. By [F1], the metric and its inverse have matrices $$\overline G=\begin{pmatrix}(g_{ij}(x))&0\\0&(h_{\alpha\beta}(y))\end{pmatrix},\qquad \overline G^{-1}=\begin{pmatrix}(g^{ij}(x))&0\\0&(h^{\alpha\beta}(y))\end{pmatrix}.$$ In particular, $g_{ij}$ has no $y$-dependence, $h_{\alpha\beta}$ has no $x$-dependence, and every mixed metric coefficient is zero. [F1, given]

2.1 By [F2], the Christoffel formula applied to the first block gives $\Gamma^k{}_{ij}=\Gamma^k{}_{ij}(g)$, and its application to the second gives $\Gamma^\gamma{}_{\alpha\beta}=\Gamma^\gamma{}_{\alpha\beta}(h)$. Every symbol whose indices meet both blocks vanishes. For example, $$\Gamma^k{}_{i\beta}=\tfrac12g^{k\ell}(\partial_i\overline G_{\beta\ell}+\partial_\beta g_{i\ell}-\partial_\ell\overline G_{i\beta})=0,$$ and $$\Gamma^k{}_{\alpha\beta}=-\tfrac12g^{k\ell}\partial_\ell h_{\alpha\beta}=0;$$ the cases with an upper $N$-index are identical with the two factors exchanged. Thus the product Levi--Civita symbols are precisely the two factor families, with zero mixed symbols. [F2, step 1.1]

3.1 Write the coordinate functions of $\alpha$ and $\beta$ as $x^i(t)$ and $y^\alpha(t)$. Substituting step 2.1 into [F3], the product geodesic equations split into the two independent systems $$\ddot x^k+\Gamma^k{}_{ij}(g)(x)\dot x^i\dot x^j=0\quad(1\le k\le m),\qquad \ddot y^\gamma+\Gamma^\gamma{}_{\alpha\beta}(h)(y)\dot y^\alpha\dot y^\beta=0\quad(1\le\gamma\le n).$$ These are exactly the coordinate geodesic equations for $\alpha$ and $\beta$, evaluated at the same value of $t$. [F3, step 2.1]

4.1 If $\gamma$ is a geodesic, [F3] and step 3.1 make both factor systems vanish, so $\alpha$ and $\beta$ are geodesics with the same affine parameter. [F3, step 3.1]

4.2 Conversely, if both factor curves are geodesics in the supplied parameter, both systems in step 3.1 vanish on every product-chart subinterval, and [F3] makes $\gamma$ a product geodesic. Taking $I=\mathbb R$ in steps 4.1--4.2 proves the all-real assertion in both directions. [F3, step 3.1]

5.1 Under the additional hypotheses stated there, [A1] and [F4] applied to the two-factor family give the completeness consequence. The geodesic iff in steps 1.1--4.2 itself uses no choice: all coordinates and the curve are supplied, and the Levi--Civita connection is uniquely determined. If either factor is empty, there is no supplied curve from a nonempty interval and the universal iff is vacuous; the conditional completeness clause explicitly excludes that case. A zero-dimensional factor contributes an empty coordinate system and a locally constant component, while a one-dimensional factor contributes its single geodesic equation. Constant components, including two constant components, satisfy their factor equations, so all degenerate cases are included. Included endpoints use the one-sided convention in [F3]. Steps 4.1 and 4.2 respectively establish the forward and reverse implications, and neither direction changes or independently rescales the common parameter. [A1, F2, F3, F4, step 1.1, step 2.1, step 3.1, step 4.1, step 4.2] ∎

## Source locator

Datar, Example 8.2.8, printed p.49, explicitly supplies the product manifold, the fibrewise tangent splitting $T_{(p,q)}(M\times N)\cong T_pM\oplus T_qN$, and the product metric $g_M\oplus g_N$. It does not state the split Levi--Civita connection, the product-geodesic equivalence, or the completeness equivalence. The first two claims are derived in steps 1.1--4.2 from the cited local coordinate formulas, and the final conditional claim is invoked in step 5.1 from the already-authored product-completeness proposition.
