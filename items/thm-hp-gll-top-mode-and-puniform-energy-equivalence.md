---
id: thm-hp-gll-top-mode-and-puniform-energy-equivalence
kind: theorem
title: GLL quadrature changes only the top Legendre modes and is p-uniformly equivalent
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-hp-variable-degree-spaces-on-matching-meshes
  - def-legendre-gauss-lobatto-rule-on-affine-boxes
  - def-legendre-polynomial-family-and-l2-pairing
  - lem-legendre-weighted-derivative-orthogonality-and-norm
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: Saul A. Teukolsky, Short note on the mass matrix for Gauss-Lobatto grid points
      url: https://arxiv.org/pdf/1412.2276
      locator: "§§2–3, pp. 2–6: exact rank-one top-Legendre-mode correction to the GLL mass matrix."
    - title: Lucas Johannes Petrus Timmermans, Analysis of Spectral Element Methods with Application to Incompressible Flow
      url: https://pure.tue.nl/ws/portalfiles/portal/3500485/412687.pdf
      locator: "§§2.2.4–2.3, PDF pp. 35–39: tensor GLL mass and stiffness forms; cited for context, not as a substitute for this proof."
---

## Statement

For every $p\ge1$, the one-dimensional GLL rule integrates all polynomials of degree at most $2p-1$ exactly and has positive weights. If $f=\sum_{n=0}^pa_nP_n$, then
$$Q_p(f^2)-\int_{-1}^1f^2=\frac{2(p+1)}{p(2p+1)}a_p^2.$$
For every $v\in\mathbb Q_p([-1,1]^d)$,
$$\|v\|_{L^2}^2\le Q_p^{\otimes d}(v^2)\le3^d\|v\|_{L^2}^2,\qquad \|\nabla v\|_{L^2}^2\le Q_p^{\otimes d}(|\nabla v|^2)\le3^d\|\nabla v\|_{L^2}^2.$$
The same inequalities hold on affine boxes under the transported rule. If a pointwise-defined scalar coefficient $a:\overline K\to\mathbb R$ is Lebesgue measurable on $K$ and satisfies $0<\underline a\le a(x)\le\overline a$ throughout $\overline K$, the sampled form $Q_{K,p}(a|\nabla v|^2)$ is equivalent to the exact weighted energy $\int_Ka|\nabla v|^2$ with lower factor $\underline a/\overline a$ and upper factor $3^d\overline a/\underline a$. These are p-uniform stability bounds; they do not bound the Strang consistency defect or equate quadrature with exact Galerkin assembly.

## Facts & Assumptions

**Given:** Integer $p\ge1$, dimension $d\ge1$, the GLL nodes and weights, and, for the coefficient bound, a pointwise-defined scalar coefficient $a:\overline K\to\mathbb R$ that is Lebesgue measurable on $K$ and has the stated bounds at every point of $\overline K$.

[F1] [[def-legendre-gauss-lobatto-rule-on-affine-boxes]]: the nodes are $-1$, $1$, and the roots of $P_p'$, and the weights are interpolatory integrals of the degree-$p$ cardinal polynomials.

[F2] [[def-legendre-polynomial-family-and-l2-pairing]] and [[lem-legendre-weighted-derivative-orthogonality-and-norm]]: $P_n$ has degree $n$, leading coefficient $\kappa_n>0$, and $\int_{-1}^1P_nP_m=2\delta_{nm}/(2n+1)$.

[A1] The local tensor polynomial space and affine box conventions are those of [[def-hp-variable-degree-spaces-on-matching-meshes]].

## Proof

1.1 Define $g(x)=(x^2-1)P_p'(x)$; it vanishes at all GLL nodes and has degree $p+1$. For $p\ge2$, divide any polynomial $f$ of degree at most $2p-1$ as $f=gr+s$ with $\deg r\le p-2$ and $\deg s\le p$. Integration by parts gives $\int_{-1}^1gr=-\int_{-1}^1P_p(2xr+(x^2-1)r')=0$, since the boundary term vanishes and the bracket has degree at most $p-1$. The quadrature of $gr$ is also zero because $g$ vanishes at every node, while the interpolatory definition integrates $s$ exactly. Thus $Q_p(f)=\int f$. For $p=1$, interpolatory exactness through degree $p=1$ is the required degree $2p-1=1$. [F1, F2, given, algebra]

2.1 Divide $P_p^2=gr+s$ with $\deg r=p-1$ and $\deg s\le p$. Since the leading coefficient of $g$ is $p\kappa_p$, the leading coefficient of $r$ is $\kappa_p/p$. Integration by parts as in step 1.1 gives $\int gr=-\int P_p(2xr+(x^2-1)r')$. The bracket has degree at most $p$ and leading coefficient $(p+1)\kappa_p/p$, so it equals $(p+1)P_p/p$ plus a polynomial of degree below $p$; orthogonality [F2] therefore gives $\int gr=-(p+1)\|P_p\|_2^2/p$. Since $Q_p(gr)=0$ and $Q_p(s)=\int s$, it follows that $Q_p(P_p^2)-\int P_p^2=-\int gr=(p+1)\|P_p\|_2^2/p=2(p+1)/(p(2p+1))$. [F1, F2, step 1.1, algebra]

3.1 Write any degree-$p$ polynomial as $f=a_pP_p+r$ with $\deg r<p$. Step 1.1 integrates $r^2$ and $P_pr$ exactly, so step 2.1 gives $Q_p(f^2)=\int f^2+\delta_pa_p^2$, where $\delta_p=2(p+1)/(p(2p+1))>0$. For a cardinal polynomial $\ell_j$, $Q_p(\ell_j^2)=w_j$ by its nodal values, while the displayed identity gives $w_j=\int\ell_j^2+\delta_pa_p(\ell_j)^2>0$. Thus all quadrature weights are positive and the one-dimensional squared norm ratio is between $1$ and $2+1/p\le3$. [F1, F2, step 1.1, step 2.1, algebra]

4.1 Expand a tensor polynomial in the orthogonal basis $\prod_{r=1}^dP_{\nu_r}(\xi_r)$, $0\le\nu_r\le p$. The tensor quadrature and exact integral are both diagonal on this basis: every cross term is exact by step 1.1, and each diagonal factor has ratio $1$ unless $\nu_r=p$, when step 3.1 bounds it by $3$. Multiplying the $d$ coordinate factors proves the mass norm bounds. Each coordinate derivative of a tensor polynomial is still in $\mathbb Q_p$, so applying the same tensor norm bounds to each component and summing proves the gradient bounds. [A1, step 1.1, step 3.1, given, algebra]

5.1 An affine change of variables multiplies both exact integrals and the transported quadrature by the same positive Jacobian. Apply the unweighted bounds of step 4.1 to each physical gradient component pulled back to the reference cube. The measurable bounded coefficient makes $a|\nabla v|^2$ integrable on the bounded box, and its specified values on $\overline K$ define every quadrature sample. Positivity of the weights and the pointwise bounds give $\underline a\,Q(|\nabla v|^2)\le Q(a|\nabla v|^2)\le\overline a\,Q(|\nabla v|^2)$ and the analogous inequalities for the exact integral; combine them with step 4.1 to obtain the stated weighted comparison. The constants are independent of $p$. [A1, step 4.1, given, algebra] ∎
