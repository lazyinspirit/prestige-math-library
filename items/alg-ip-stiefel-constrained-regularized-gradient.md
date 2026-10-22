---
id: alg-ip-stiefel-constrained-regularized-gradient
kind: algorithm
title: Finite-budget regularized gradient on a Stiefel constraint
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-ip-nonlinear-forward-map
  - def-stiefel-grassmann-optimization-conventions
  - thm-stiefel-grassmann-tangent-projections
  - def-stiefel-qr-polar-retractions
  - thm-stiefel-retractions-are-first-order
justified_by: [lem-ip-stiefel-gradient-finite-budget-return-and-feasibility]
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "P.-A. Absil, R. Mahony, and R. Sepulchre, Optimization Algorithms on Matrix Manifolds, Chapter 3 (2008)"
      url: "https://assets.press.princeton.edu/chapters/absil/Absil_Chap3.pdf"
      locator: "Example 3.6.2: real Stiefel tangent space, induced Frobenius metric, and orthogonal projection."
    - title: "P.-A. Absil, R. Mahony, and R. Sepulchre, Optimization Algorithms on Matrix Manifolds, Chapter 4 (2008)"
      url: "https://assets.press.princeton.edu/chapters/absil/Absil_Chap4.pdf"
      locator: "Example 4.1.3: polar and QR retractions on the real Stiefel manifold."
    - title: "Nicolas Boumal, An Introduction to Optimization on Smooth Manifolds (2023 prepublication)"
      url: "https://www.nicolasboumal.net/book/IntroOptimManifolds_Boumal_2023.pdf"
      locator: "§§3.8 and 7.3: embedded-manifold gradients, Stiefel tangent/projection formulas, and the polar retraction."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Definition

For integers $1\le p\le n$, define the real Stiefel constraint set

$$\operatorname{St}(n,p):=\{X\in\mathbb R^{n\times p}:X^{\mathsf T}X=I_p\}.$$

Equip $\mathbb R^{n\times p}$ with the Frobenius inner product $\langle U,V\rangle_F=\operatorname{tr}(U^{\mathsf T}V)$ and norm $\|U\|_F=\sqrt{\langle U,U\rangle_F}$. Let $H=\mathbb R^{n\times p}$, let $Y$ be a real Hilbert space, let $U\subseteq H$ be open and contain $\operatorname{St}(n,p)$, and let $F:U\to Y$ be continuously Fréchet differentiable. Given data $y\in Y$, a reference matrix $X_{\rm ref}\in H$, and $\lambda\ge0$, define the residual and regularized objective by

$$r(X):=\|F(X)-y\|_Y,\qquad \Phi(X):=\tfrac12\|F(X)-y\|_Y^2+\tfrac\lambda2\|X-X_{\rm ref}\|_F^2.$$

Supply an ambient gradient oracle $G:U\to H$ satisfying $D\Phi(X)[Z]=\langle G(X),Z\rangle_F$ for every $X\in U$ and $Z\in H$, an initial frame $X_0\in\operatorname{St}(n,p)$, a residual tolerance $\tau\ge0$, a finite integer budget $K\ge0$, and a step schedule $\alpha_0,\ldots,\alpha_{K-1}$ with every $\alpha_k>0$. For a square matrix $M$, put $\operatorname{sym}(M):=(M+M^{\mathsf T})/2$. The tangent-projection and metric-dual calculation for this $C^1$ objective, well-definedness of every tangent polar call, and finite-budget feasibility are justified by the finite-budget return and feasibility lemma. No smoothness beyond $C^1$ is required. The procedure is:

1. Set the current frame to $X_0$ and the schedule index to $k=0$. If $r(X)\le\tau$, return $(X,r(X),\texttt{target-met})$.
2. While $k<K$, compute $G(X)$ and the Stiefel gradient $g:=G(X)-X\operatorname{sym}(X^{\mathsf T}G(X))$. If $g=0$, return $(X,r(X),\texttt{stationary})$.
3. Set $\eta:=-\alpha_k g$ and form the polar-retracted candidate

   $$X_{\rm trial}:=(X+\eta)\bigl((X+\eta)^{\mathsf T}(X+\eta)\bigr)^{-1/2}.$$

4. Evaluate $\Phi(X_{\rm trial})$ and $r(X_{\rm trial})$. If $\Phi(X_{\rm trial})>\Phi(X)$, return $(X,r(X),\texttt{objective-rejected})$. Otherwise accept $X_{\rm trial}$ as the current frame. If its residual is at most $\tau$, return $(X,r(X),\texttt{target-met})$; otherwise increment $k$ by one and repeat the loop.
5. When $k=K$, return $(X,r(X),\texttt{budget-exhausted})$.

This procedure is restricted to the stated finite-dimensional real Stiefel constraint and the displayed polar retraction. It gives no convergence, global-optimality, or noisy-data stability guarantee, and it makes no finite-precision claim. It does not apply to positivity constraints or other nonlinear manifolds without a separately specified compatible retraction and proof.

## Definition references

[[lem-ip-stiefel-gradient-finite-budget-return-and-feasibility|Finite-budget return, tangent metric-dual formula, and feasibility]]

[[def-ip-nonlinear-forward-map|Nonlinear forward maps on real Hilbert spaces]]

[[def-stiefel-grassmann-optimization-conventions|Real Stiefel and Grassmann metric conventions]]

[[thm-stiefel-grassmann-tangent-projections|Stiefel tangent space and orthogonal projection]]

[[def-stiefel-qr-polar-retractions|Polar retraction formula and domain]]

[[thm-stiefel-retractions-are-first-order|The polar map is a Stiefel retraction]]

[Absil, Mahony, and Sepulchre, *Optimization Algorithms on Matrix Manifolds*, Chapter 3, Example 3.6.2](https://assets.press.princeton.edu/chapters/absil/Absil_Chap3.pdf)

[Absil, Mahony, and Sepulchre, *Optimization Algorithms on Matrix Manifolds*, Chapter 4, Example 4.1.3](https://assets.press.princeton.edu/chapters/absil/Absil_Chap4.pdf)

[Nicolas Boumal, *An Introduction to Optimization on Smooth Manifolds*, §§3.8 and 7.3](https://www.nicolasboumal.net/book/IntroOptimManifolds_Boumal_2023.pdf)
