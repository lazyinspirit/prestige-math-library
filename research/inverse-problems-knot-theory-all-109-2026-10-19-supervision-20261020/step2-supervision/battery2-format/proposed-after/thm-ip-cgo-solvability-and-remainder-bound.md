---
id: thm-ip-cgo-solvability-and-remainder-bound
kind: theorem
title: "CTA complex geometrical optics solvability and remainder bound"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-ip-transversally-anisotropic-product-domain
  - def-ip-sobolev-spaces-on-compact-riemannian-domain
  - lem-ip-limiting-carleman-estimate-on-product
  - def-riemannian-metric-and-riemannian-manifold
  - def-riemannian-gradient
  - def-laplace-beltrami-operator-as-trace-of-the-hessian
  - def-axiom-of-choice
  - def-countable-choice
dependency_level: 2
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dos Santos Ferreira, Kenig, Salo, and Uhlmann, Limiting Carleman weights and anisotropic inverse problems (2009)"
      url: "https://arxiv.org/pdf/0803.3508"
      locator: "Section 4, Proposition 4.4, and Section 5, §§5.1-5.3 and Proposition 5.1. Proposition 4.4 states the H1 correction but its printed proof invokes an unlocated Lemma 4.9."
    - title: "Dos Santos Ferreira, Kurylev, Lassas, and Salo, The Calderon problem in transversally anisotropic geometries (2016)"
      url: "https://arxiv.org/pdf/1305.1273"
      locator: "Section 2, Proposition 2.1 (H1 solvability), PDF p. 10; Proposition 2.2 (quasimode correction), PDF p. 11. Statements imported externally; no reconstruction of their Carleman proof."
    - title: "V. A. Sharafutdinov, Integral Geometry of Tensor Fields (1994)"
      url: "https://api.pageplace.de/preview/DT0400.9783110900095_A19984419/preview-9783110900095_A19984419.pdf"
      locator: "Publisher preview contents, Chapter 4 §4.9, printed p. 138, titled 'Bibliographical remarks'; used to check the target of reference [27] in the 2009 paper."
---

## Statement

Assume the Axiom of Choice and Countable Choice.

Let $(M,g)$ be a transversally anisotropic product domain, let $q\in C^\infty(\overline M,\mathbb R)$, and let $\psi\in C^\infty$ be real on a neighborhood of the transversal projection of $M$, with $|d\psi|_{g_0}=1$. Suppose $a\in C^\infty(\overline M,\mathbb C)$ satisfies
$$2\partial_{x_1}a+2i\,g_0(\nabla_{g_0}\psi,\nabla_{g_0}a)+i(\Delta_{g_0}\psi)a=0.$$
Then, for all sufficiently large $\tau$, there is an exact solution
$$u_\tau=e^{-\tau(x_1+i\psi)}a+e^{-\tau x_1}r_\tau,\qquad (-\Delta_g+q)u_\tau=0\ \text{in }M^\circ,$$
with $r_\tau\in H^1(M)$ and $\|r_\tau\|_{L^2(M)}\leq C\tau^{-1}\|(-\Delta_g+q)a\|_{L^2(M)}$. No boundary value is prescribed for $r_\tau$.

## Statement references

[[def-ip-transversally-anisotropic-product-domain|Product metric and dimension]]

[[lem-ip-limiting-carleman-estimate-on-product|Product Carleman estimate and L2 right solvability]]

## Facts & Assumptions
[A1] [[def-axiom-of-choice]] is used for the Hahn--Banach extension in the product Carleman right solver [F2].

[A2] [[def-countable-choice]] is used for its Hilbert-space Riesz representation [F2].

**Given:** the product domain, smooth real $q$, real eikonal function $\psi$ with unit transversal gradient, and smooth transport amplitude $a$.

[F1] [[def-ip-transversally-anisotropic-product-domain]]: $g=dx_1^2\oplus g_0$ and $\Delta_g=\partial_{x_1}^2+\Delta_{g_0}$.

[F2] [[lem-ip-limiting-carleman-estimate-on-product]]: for $\varphi=x_1$, the conjugated operator $P_{\varphi,h,q}=e^{\varphi/h}h^2(-\Delta_g+q)e^{-\varphi/h}$ has a distributional right inverse on $L^2$ with norm at most $C h^{-1}$.

[F3] [[def-riemannian-gradient]] and [[def-laplace-beltrami-operator-as-trace-of-the-hessian]]: the product metric extends the gradient bilinearly to complex phases, and $\Delta_g=\operatorname{div}_g\nabla_g$.

[F4] **External input:** Dos Santos Ferreira--Kurylev--Lassas--Salo, Proposition 2.1 (PDF p. 10), for a compact oriented CTA manifold, bounded potential, either sign of sufficiently large real $\tau$, and arbitrary $f\in L^2$, gives $r\in H^1$ solving $e^{\tau x_1}(-\Delta_g+q)e^{-\tau x_1}r=f$, with $\|r\|_{H^\alpha}\le C|\tau|^{\alpha-1}\|f\|_2$ for $0\le\alpha\le1$, with no prescribed boundary value. We import this statement, not a reconstructed shifted Carleman proof. Its statement and the application in Propositions 2.1--2.2, PDF pp. 10--11, were inspected; the older Proposition 4.4 citation issue is not treated as a local proof.

[F5] The orientation restriction in [F4] is removed for scalar equations by the orientation double cover of $M_0$. Lift $M,q,f$ to its product cover, solve there, and average the solution with its deck transform. The invariant solution descends to $H^1(M)$ and solves the original equation. The degree-two factors in the squared $L^2$ norms cancel in the estimate; the same applies to the local Sobolev norms. A disconnected cover is handled componentwise, using only finitely many choices.

## Proof

**Given:** the data in the statement.

1.1 Put $\Phi=x_1+i\psi$. By [F1] and $|d\psi|_{g_0}=1$, $$g(d\Phi,d\Phi)=1+i^2|d\psi|_{g_0}^2=0.$$ Direct conjugation gives $$(-\Delta_g+q)(e^{-\tau\Phi}a) =e^{-\tau\Phi}\left[\tau^2g(d\Phi,d\Phi)a+ \tau\left(2g(\nabla_g\Phi,\nabla_ga)+(\Delta_g\Phi)a\right) +(-\Delta_g+q)a\right].$$ The $\tau^2$ term vanishes by the eikonal equality, and the coefficient of $\tau$ is exactly the transport equation in the statement. Hence the residual is $e^{-\tau\Phi}(-\Delta_g+q)a$. [F1, F3, given, algebra]

2.1 Set $h=\tau^{-1}$ and conjugate by the real weight $e^{-\tau x_1}$. The equation for the correction is $$P_{x_1,h,q}r_\tau=-h^2e^{-i\tau\psi}(-\Delta_g+q)a.$$ The right side is in $L^2$ and has norm $h^2\|(-\Delta_g+q)a\|_2$. By [F4]--[F5], with the equation divided by $h^2$, there is an $H^1$ correction (and hence a distributional) $r_\tau\in L^2(M)$ with $$\|r_\tau\|_2\leq Ch^{-1}h^2\|(-\Delta_g+q)a\|_2 =C\tau^{-1}\|(-\Delta_g+q)a\|_2.$$ Thus the asserted remainder estimate and the equation hold distributionally. [A1, A2, F4, F5, step 1.1, algebra]

3.1 Choose the $H^1$ correction from step 2.1. Multiplication by the smooth exponentials preserves $H^1(M)$ for each fixed $\tau$, and the correction equation cancels the residual computed in step 1.1. Thus $u_\tau$ is exact, has the stated remainder bound, and has no imposed correction boundary value. The additional boundary regularity is the external input [F4], rather than a consequence asserted for the $L^2$ solver [F2]. [F4, F5, step 1.1, step 2.1] ∎

