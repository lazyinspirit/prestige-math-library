---
id: thm-hp-analytic-p-convergence-on-fixed-tensor-mesh
kind: theorem
title: Analytic data converge exponentially under fixed-mesh p refinement
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-hp-variable-degree-spaces-on-matching-meshes
  - lem-variable-degree-polynomial-spaces-are-h1-conforming
  - def-hp-integrated-legendre-projector
  - lem-legendre-weighted-derivative-orthogonality-and-norm
  - lem-taylor-lagrange-remainder-from-mean-value
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-ftc-second-part
  - thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral
  - def-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: "Countable Choice is used only through the published comparison of bounded Riemann and Lebesgue integrals for the continuous analytic sections and their polynomial products; no arbitrary-index choice is used."
verification:
  precheck: pass
sources:
  references:
    - title: Leszek F. Demkowicz, Mathematical Theory of Finite Elements
      url: https://users.oden.utexas.edu/~leszek/classes/EM394F/book.pdf
      locator: "§3.1.4, printed pp. 64–68: hierarchical p-version spaces and tensor-product element bases."
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, p-version FEM
      url: https://jschoeberl.github.io/iFEM/pversion/hpfem.html
      locator: "§§30.1–30.4: p-refinement and tensor-product interpolation context; this item supplies its own tensor estimate."
---

## Statement

Assume Countable Choice. Let $\Omega$ be partitioned by a fixed finite matching affine tensor-box mesh, and let $u\in C^1(\overline\Omega)$ be smooth on each box. For each cell $K$, let $\widehat u_K$ be its pullback to $[-1,1]^d$. Assume that for fixed constants $M>0$ and $R>1$,
$$
\sup_{\widehat x\in[-1,1]^d}|\partial^\nu\widehat u_K(\widehat x)|\le M|\nu|!R^{-|\nu|}
$$
for every multi-index $\nu\in\mathbb N_0^d$ and every cell $K$. Choose any $q$ with $R^{-1}<q<1$. For each common degree $p\ge1$, tensorize the endpoint-preserving integrated Legendre projector of [[def-hp-integrated-legendre-projector]] on each reference cell and transport it to $K$, obtaining $u_p$. Then the cell traces of $u_p$ agree across every shared face and
$$
\|u-u_p\|_{H^1(\Omega)}\le C_{\mathcal T,d,R,q}M q^p.
$$
The constant may depend on the fixed mesh; the estimate is a p-rate on a fixed mesh and makes no claim about h-refinement.

## Facts & Assumptions

**Given:** Countable Choice; a fixed finite matching affine tensor-box mesh; a globally $C^1$ function $u$ smooth on each cell; $M>0$, $R>1$, integer $p\ge1$, and $R^{-1}<q<1$.

[F1] [[def-hp-variable-degree-spaces-on-matching-meshes]]: $\mathbb Q_p(K)$ is the pullback of degree-at-most-$p$ polynomials in each reference coordinate; a trace-matching box space is defined by equality on shared faces.

[F2] [[def-hp-integrated-legendre-projector]]: the one-coordinate operator is $\mathcal I_p(f(-1),f')=f(-1)+\int_{-1}^x\Pi_{p-1}f'$ for an absolutely continuous section with square-integrable derivative.

[F3] [[lem-taylor-lagrange-remainder-from-mean-value]]: for a $C^{p}$ function on an interval containing $0$ and $x$, the degree-$(p-1)$ Taylor polynomial at zero has remainder bounded by $\sup|f^{(p)}||x|^p/p!$.

[F4] [[thm-cauchy-schwarz-in-an-inner-product-space]]: Cauchy–Schwarz holds for the $L^2$ inner product on the reference interval and cube.

[F5] [[lem-legendre-weighted-derivative-orthogonality-and-norm]]: $P_0=1$ and the Legendre family is orthogonal with $\int_{-1}^1P_0^2=2$.

[F6] [[thm-ftc-second-part]]: if a function is differentiable on a compact interval and its derivative is Riemann integrable, the integral of that derivative equals the endpoint increment.

[F7] [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]: under Countable Choice, a bounded Riemann-integrable function has the same Riemann and Lebesgue integrals.

[F8] [[lem-variable-degree-polynomial-spaces-are-h1-conforming]]: on a finite matching affine tensor-box mesh, matching polynomial traces give an $H^1(\Omega)$ function with its cellwise weak gradient.

[A1] The mixed derivative norm used below is $\|f\|_{\mathrm{mix}}^2:=\sum_{S\subseteq\{1,\ldots,d\}}\|\partial_S f\|_{L^2([-1,1]^d)}^2$, where $\partial_S$ differentiates once in each coordinate in $S$ and $\partial_\varnothing f=f$.

## Proof

1.1 On the reference cube define $I_p^{(j)}$ by applying [F2] in coordinate $j$, holding all other coordinates fixed, and put $\mathcal I_p=I_p^{(1)}\cdots I_p^{(d)}$. Each factor maps degree-at-most-$p$ polynomials in its coordinate to the same degree space, so $\mathcal I_p\widehat u_K\in\mathbb Q_p$. Fix a smooth one-dimensional section $f$ and write $g=f'$. By [F6], $f(x)-f(-1)$ is the Riemann integral of $g$ from $-1$ to $x$; [F7] identifies it with the Lebesgue integral used in [F2] and the coefficient formula [F2] (applied to the continuous products $gP_n$). Orthogonality [F5] makes the constant coefficient exact, so $I_pf$ preserves both endpoints. The bound $|f(-1)|\le2^{-1/2}\|f\|_{L^2}+\sqrt2\|f'\|_{L^2}$ follows by averaging $f(x)=f(-1)+\int_{-1}^xf'$ over $x$ and applying Cauchy–Schwarz [F4, F7]; together with $\|\Pi_{p-1}f'\|_2\le\|f'\|_2$ this gives $\|I_pf\|_{L^2}+\|(I_pf)'\|_{L^2}\le C\|f\|_{H^1}$ uniformly in $p$. Also, if an absolutely continuous $w$ vanishes at $-1$, then $w(x)=\int_{-1}^xw'$ and Cauchy–Schwarz [F4] gives $\|w\|_{L^2}\le2\|w'\|_{L^2}$. [F2, F4, F5, F6, F7, given, algebra]

2.1 Fix $j$ and a subset $S$ of the coordinate indices. If $j\in S$, then $\partial_S(I_p^{(j)}-I)\widehat u_K=(\Pi_{p-1}^{(j)}-I)\partial_j\partial_{S\setminus\{j\}}\widehat u_K$. If $j\notin S$, then $\partial_S(I_p^{(j)}-I)\widehat u_K=(I_p^{(j)}-I)\partial_S\widehat u_K$, whose $j$ derivative is $(\Pi_{p-1}^{(j)}-I)\partial_j\partial_S\widehat u_K$ and whose value at $-1$ is zero. Thus in either case the error is controlled by the Legendre projection tail of $g=\partial_j\partial_T\widehat u_K$, where $T=S\setminus\{j\}$ in the first case and $T=S$ in the second. Write $r=|T|\le d-1$ and let $T_{p-1}$ be its Taylor polynomial at zero through degree $p-1$. Taylor's Lagrange remainder [F3] bounds $|g-T_{p-1}|$ on $[-1,1]$ by $M(p+r+1)!R^{-p-r-1}/p!$. Orthogonality of $\Pi_{p-1}^{(j)}$ gives $\|g-T_{p-1}\|_2^2=\|g-\Pi_{p-1}^{(j)}g\|_2^2+\|\Pi_{p-1}^{(j)}g-T_{p-1}\|_2^2$, so the projection error is at most $\sqrt2 M(p+r+1)!R^{-p-r-1}/p!$. For fixed $d,R,q$ this is at most $C_{d,R,q}M q^p$: the factorial ratio is bounded by a fixed-degree polynomial in $p$, while $(Rq)^{-p}$ decays geometrically. Anchoring at $-1$ and the one-dimensional Poincare estimate from step 1.1 use [F6, F7] for the continuous error derivative and give the same bound for each mixed derivative of $(I_p^{(j)}-I)\widehat u_K$. [A1, F2, F3, F6, F7, step 1.1, given, algebra]

3.1 The estimate in step 1.1 is stable in every mixed derivative: if a mixed derivative includes coordinate $j$, differentiating $I_p^{(j)}$ there gives the contractive projection $\Pi_{p-1}^{(j)}$; if it omits $j$, the one-dimensional $H^1$ bound in step 1.1 controls the application of $I_p^{(j)}$ using that derivative and its additional $j$ derivative. Summing over the finitely many subsets $S$ gives $\|I_p^{(j)}f\|_{\mathrm{mix}}\le C_d\|f\|_{\mathrm{mix}}$ uniformly in $p$. The telescoping identity $\mathcal I_p-I=\sum_{j=1}^d I_p^{(1)}\cdots I_p^{(j-1)}(I_p^{(j)}-I)$ and step 2.1 now imply $\|\widehat u_K-\mathcal I_p\widehat u_K\|_{H^1([-1,1]^d)}\le C_{d,R,q}M q^p$. [step 1.1, step 2.1, algebra]

4.1 The one-dimensional projector preserves both endpoints. It commutes with reflection: both the reflected polynomial and the projection of the reflected function have the same derivative, since reflection preserves the polynomial subspace and the $L^2$ inner product, and they have the same value at the left endpoint by preservation of the right endpoint. Coordinate projectors commute under coordinate permutations. On a shared box face the relative affine parameter map is an affine automorphism of the reference cube face: it permutes the supporting facet hyperplanes and preserves their vertices, so its linear part is a signed coordinate permutation. Thus the restrictions of the transported tensor projectors are the same tangential projector applied to the common trace of $u$, and the resulting cell traces match. The conformity result [F8] gives $u_p\in H^1(\Omega)$; since $u\in H^1(\Omega)$, the local estimates sum to the stated global $H^1$ estimate. Scaling from each reference cell to its physical affine box multiplies the local estimate by a fixed cell-dependent factor; the mesh has finitely many cells, so taking the largest factor gives the global constant $C_{\mathcal T,d,R,q}$. [F1, F2, F8, step 3.1, given, algebra] ∎
