---
id: ex-hormander-estimate-with-gaussian-weight
kind: example
title: "Hörmander estimate with a Gaussian weight"
status: draft
origin: pipeline
deps:
  - def-weighted-l2-spaces-dbar-forms
  - def-bigraded-complex-differential-forms
  - thm-d-dbar-decomposition-and-identities
  - def-wirtinger-operators-in-several-complex-variables
  - thm-wirtinger-chain-rule-for-real-differentiable-maps
  - thm-hormander-l2-dbar-existence
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - def-polar-surface-measure-on-the-unit-sphere
  - thm-disc-area-is-pi-r-squared
  - rem-complex-euclidean-space-dictionary
  - thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - cor-one-dimensional-change-of-variables-with-absolute-derivative
  - cor-real-gamma-positive-integer-values
  - def-real-gamma-function-by-the-euler-integral
  - def-axiom-of-choice
  - thm-monotone-convergence-for-the-integral
  - def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry"
      url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
      locator: "Ch. VIII §6, Theorem 6.5, printed pp. 377-379: the weighted $L^2$ estimate with the Gaussian weight $|z|^2$, whose right-hand side the explicit solution attains; the moment computations are the standard polar-coordinate Gamma integrals."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice (AC). Let $n\ge1$ and use one-based labels $z_j:=z_{j-1}^{\mathrm{can}}$ for $1\le j\le n$, also for derivatives and forms. On $\mathbb C^n$ with the
Gaussian weight $\varphi(z):=|z|^2$ the $(0,1)$-form $f:=d\bar z_1$ is
$\bar\partial$-closed and the function $u:=\bar z_1$ satisfies
$$\bar\partial u=f,\qquad \|u\|_\varphi^2=\pi^n=E(f)=\int_{\mathbb C^n}|f|^2e^{-\varphi}\,dV ,$$
where $E$ is the weighted energy of [[thm-hormander-l2-dbar-existence]] with
$q=1$; here $w=\lambda_1=1$, so the explicit solution attains equality in the
$q=1$ estimate rather than merely satisfying its bound.

## Facts & Assumptions

**Given:** The Axiom of Choice; an integer $n\ge1$; the domain $\Omega:=\mathbb C^n$; the weight $\varphi(z):=|z|^2$; the $(0,1)$-form $f=d\bar z_1$; the function $u:=\bar z_1$.

[F1] A $(0,q)$-form coefficient tuple $u=(u_J)_{|J|=q}$ carries the inner product $$\langle u,v\rangle_\varphi:=\int_\Omega\sum_{|J|=q}u_J\overline{v_J}\,e^{-\varphi}\,dV,\qquad \|u\|_\varphi^2:=\langle u,u\rangle_\varphi,$$ where $dV$ is Lebesgue measure on $\mathbb C^n\cong\mathbb R^{2n}$ ([[def-weighted-l2-spaces-dbar-forms]]); the pointwise norm of a smooth $(0,q)$-form is the Euclidean norm of its coefficient tuple ([[def-bigraded-complex-differential-forms]]).

[F2] For a $C^1$ function $g$ the smooth $\bar\partial$ is $\bar\partial g=\sum_j(\partial_{\bar z_j}g)\,d\bar z_j$, the distributional $\bar\partial$ restricts to it on smooth forms, and $d\bar z_j$ is the $(0,1)$-form with coefficient tuple $\delta_{j}$ of the ordered pair index ([[def-bigraded-complex-differential-forms]], [[thm-d-dbar-decomposition-and-identities]], [[def-weighted-l2-spaces-dbar-forms]]).

[F3] At a point where the real partial derivatives exist, $\partial_{\bar z_j}=\tfrac12(\partial_{x_j}+i\partial_{y_j})$ ([[def-wirtinger-operators-in-several-complex-variables]]), and the Wirtinger operators obey the chain rule ([[thm-wirtinger-chain-rule-for-real-differentiable-maps]]).

[F4] ([[thm-hormander-l2-dbar-existence]].) Let $\Omega\subseteq\mathbb C^n$ be Hartogs pseudoconvex, $\varphi\in C^2(\Omega)$ strictly plurisubharmonic, $1\le q\le n$, $\lambda_1\le\cdots\le\lambda_n$ the eigenvalues of $(\varphi_{j\bar k})$, $w:=\lambda_1+\cdots+\lambda_q>0$ and $E(f):=\int_\Omega|f|^2w^{-1}e^{-\varphi}dV$. Every $\bar\partial$-closed $f\in\operatorname{Dom}\bar\partial_q$ with $E(f)<+\infty$ has a solution $v\in\operatorname{Dom}\bar\partial_{q-1}$ with $\|v\|_\varphi^2\le E(f)$.

[F5] ([[thm-polar-coordinates-formula-for-lebesgue-measure]], $n=2$.) For every Borel measurable $F:\mathbb R^2\to[0,\infty]$, $$\int_{\mathbb R^2}F\,d\lambda_2=\int_0^\infty\int_{S^1}F(r\omega)\,r\,d\sigma(\omega)\,dr,$$ with $\sigma$ the finite Borel measure of [[def-polar-surface-measure-on-the-unit-sphere]], and $\sigma(S^1)=2\lambda_2(\{x\in\mathbb R^2:|x|\le1\})=2\pi$ by the disc area $\pi$ ([[thm-disc-area-is-pi-r-squared]]), all identifications of $\mathbb C$ with $\mathbb R^2$ being those of [[rem-complex-euclidean-space-dictionary]].

[F6] For $0<r_0<R$, let $\psi$ be $C^1$ and injective on a neighborhood of $[r_0,R]$ with $\psi'>0$ there. If $h$ is continuous on an interval containing $\psi([r_0,R])$, then $$\int_{\psi(r_0)}^{\psi(R)}h(t)\,dt=\int_{r_0}^R h(\psi(r))\psi'(r)\,dr$$ ([[cor-one-dimensional-change-of-variables-with-absolute-derivative]]). This is a finite-interval assertion.

[F7] $\Gamma(t)=\int_0^\infty x^{t-1}e^{-x}\,dx$ for $t>0$ and $\Gamma(k+1)=k!$ for every integer $k\ge0$ ([[def-real-gamma-function-by-the-euler-integral]], [[cor-real-gamma-positive-integer-values]]).

[F8] On $\mathbb C^n$ the Euclidean Lebesgue measure $dV$ is, on Borel sets, the product of the plane Lebesgue measures $dA$ of the $n$ coordinate copies ([[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]], [[rem-complex-euclidean-space-dictionary]]), and for a product-measurable $F\ge0$ the product integral equals the iterated integral ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F9] AC is the assertion that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F10] For nonnegative measurable functions increasing pointwise, their integrals increase to the integral of their limit ([[thm-monotone-convergence-for-the-integral]]).

[F11] The whole space $\mathbb C^n$ is Hartogs pseudoconvex by convention ([[def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity]]).

**Choice use.** AC is the ambient hypothesis recorded in the Statement and cited as [F9]; it is consumed only inside the supplier theorems [F4], [F5] and [F8], whose proofs carry their own choice hypotheses. The example exhibits $f$ and $u$ by explicit formulas and selects nothing.

## Proof

**Proof technique:** direct.

1.1 (The $\bar\partial$ computation.) By [F3], $\partial_{\bar z_1}\bar z_1=\tfrac12(\partial_{x_1}\bar z_1+i\partial_{y_1}\bar z_1)=\tfrac12(1+i(-i))=1$ and $\partial_{\bar z_j}\bar z_1=0$ for $j\ne1$; hence the coefficient formula of [F2] gives $\bar\partial u=\sum_j(\partial_{\bar z_j}\bar z_1)\,d\bar z_j=d\bar z_1=f$ at every point of $\mathbb C^n$. [F2, F3, given, algebra]

1.2 (Pointwise norms.) In the coefficient-tuple norm of [F1] the form $f=d\bar z_1$ has the single coefficient $1$ and the function $u$ has the single coefficient $\bar z_1$, so $|f(z)|^2=1$ and $|u(z)|^2=|z_1|^2$ for every $z\in\mathbb C^n$. [F1, given, algebra]

1.3 (The weight.) The function $\varphi=|z|^2=\sum_{j=1}^nz_j\bar z_j$ is $C^\infty$, and [F3] with $\partial_{\bar z_j}\bar z_j=1$, $\partial_{\bar z_j}\bar z_k=0$ for $k\ne j$ gives $\partial_{\bar z_j}\varphi=z_j$ and $\varphi_{j\bar k}=\partial_{z_j}z_k=\delta_{jk}$; the Hermitian matrix $(\varphi_{j\bar k})$ of [F4] is therefore the identity matrix, so all its eigenvalues equal $1$, and with $q=1$ the weight of [F4] is $w=\lambda_1=1$ and $E(f)=\int_{\mathbb C^n}|f|^2e^{-\varphi}\,dV$. [F3, F4, given, algebra]

1.4 (Plane moments.) For $a>0$ and integers $k\ge0$, [F5] applies to the nonnegative continuous radial integrand and gives $$\int_{\mathbb C}|w|^{2k}e^{-a|w|^2}dA=2\pi\int_0^\infty r^{2k+1}e^{-ar^2}dr.$$ For $0<\varepsilon<R$, apply [F6] to $\psi(r)=ar^2$ and $h(t)=t^ke^{-t}/(2a^{k+1})$; its hypotheses hold on a neighborhood of $[\varepsilon,R]$, and $$\int_\varepsilon^R r^{2k+1}e^{-ar^2}dr=\frac{1}{2a^{k+1}}\int_{a\varepsilon^2}^{aR^2}t^ke^{-t}dt.$$ Take $\varepsilon=1/m$, $R=m$, $m\ge2$. Both truncated nonnegative integrands increase to the respective full integrands, so [F10] passes to the limit; [F7] identifies the right integral with the finite value $\Gamma(k+1)=k!$. Hence $$\int_{\mathbb C}|w|^{2k}e^{-a|w|^2}dA=\frac{\pi k!}{a^{k+1}}.$$ This proves convergence along with the formula. [F5, F6, F7, F10, algebra]

2.1 With $k=0$ and $k=1$ at $a=1$, step 1.4 gives $\int_{\mathbb C}e^{-|w|^2}dA=\pi$ and $\int_{\mathbb C}|w|^2e^{-|w|^2}dA=\pi$. [step 1.4, algebra]

3.1 Consequently $\int_{\mathbb C^n}e^{-|z|^2}dV=\pi^n$ and $\int_{\mathbb C^n}|z_1|^2e^{-|z|^2}dV=\pi^n$: writing $z=(z_1,z')$ and using [F8], the nonnegative Borel functions $e^{-|z|^2}=e^{-|z_1|^2}\prod_{j\ge2}e^{-|z_j|^2}$ and $|z_1|^2e^{-|z|^2}$ have product integrals equal to the iterated integrals over $\mathbb C\times\mathbb C^{n-1}$, and iterating the product decomposition $n$ times (with the empty remaining product equal to $1$ when $n=1$) turns each into the corresponding product of the plane integrals of step 2.1, namely $\pi\cdot\pi^{n-1}=\pi^n$ in both cases. [F8, step 2.1, algebra]

4.1 By steps 1.2, 1.3 and 3.1, $\|u\|_\varphi^2=\int_{\mathbb C^n}|z_1|^2e^{-|z|^2}dV=\pi^n$ and $E(f)=\int_{\mathbb C^n}e^{-|z|^2}dV=\pi^n$; in particular $u\in L^2_{0,0}(\mathbb C^n,e^{-\varphi})$ and $f\in L^2_{0,1}(\mathbb C^n,e^{-\varphi})$. [step 1.2, step 1.3, step 3.1, algebra]

5.1 The claims of the Statement hold: $\bar\partial u=f$ by step 1.1 and $\|u\|_\varphi^2=\pi^n=E(f)$ by step 4.1. Moreover $\bar\partial f=\sum_j(\partial_{\bar z_j}1)\,d\bar z_j\wedge d\bar z_1=0$ by [F2], since the coefficient $1$ of $f$ is constant and $d\bar z_1\wedge d\bar z_1=0$, so $f\in\operatorname{Dom}\bar\partial_1$ is $\bar\partial$-closed with finite energy and the whole-space convention [F11] and the positive identity Levi matrix of step 1.3 show that the hypotheses of [F4] hold with $q=1$; the explicit solution $u$ realises the bound $\|u\|_\varphi^2\le E(f)$ of [F4] with equality, that is, it attains the right-hand side $\pi^n$ of the $q=1$ estimate. [F2, F4, F9, F11, step 1.1, step 4.1, algebra] ∎
