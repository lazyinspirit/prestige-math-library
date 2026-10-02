---
id: ex-explicit-dbar-solution-with-l2-estimate
kind: example
title: "An explicit $\\bar\\partial$ solution with an $L^2$ estimate"
status: published
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
      locator: "Ch. VIII §6, Theorem 6.5, printed pp. 377-379: the weighted $L^2$ solvability estimate that the example instantiates; the moment computations are the standard polar-coordinate Gamma integrals."
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Assume the Axiom of Choice (AC). On $\mathbb C$ with the weight
$\varphi(z):=2|z|^2$, the $(0,1)$-form $f:=\bar z\,d\bar z$ and the function
$u:=\tfrac12\bar z^2$ satisfy
$$\bar\partial u=f,\qquad \int_{\mathbb C}|u|^2e^{-\varphi}\,dA=\frac{\pi}{16}\le\frac{\pi}{8}=\frac12\int_{\mathbb C}|f|^2e^{-\varphi}\,dA .$$
The factor $\tfrac12$ is the reciprocal $w^{-1}$ of the single weight
eigenvalue $w=\lambda_1=2$ of $\varphi=2|z|^2$, so the second display is an
instance of the $q=1$ weighted estimate of
[[thm-hormander-l2-dbar-existence]] on the domain $\mathbb C$.

## Facts & Assumptions

**Given:** The Axiom of Choice; the domain $\Omega:=\mathbb C$; the weight $\varphi(z):=2|z|^2$; the $(0,1)$-form $f:=\bar z\,d\bar z$; the function $u:=\tfrac12\bar z^2$.

[F1] A $(0,q)$-form coefficient tuple $u=(u_J)_{|J|=q}$ carries the inner product $$\langle u,v\rangle_\varphi:=\int_\Omega\sum_{|J|=q}u_J\overline{v_J}\,e^{-\varphi}\,dV,\qquad \|u\|_\varphi^2:=\langle u,u\rangle_\varphi,$$ where $dV$ is Lebesgue measure on $\mathbb C^n\cong\mathbb R^{2n}$ ([[def-weighted-l2-spaces-dbar-forms]]); the pointwise norm of a smooth $(0,q)$-form is the Euclidean norm of its coefficient tuple ([[def-bigraded-complex-differential-forms]]).

[F2] For a $C^1$ function $g$ the smooth $\bar\partial$ is $\bar\partial g=\sum_j(\partial_{\bar z_j}g)\,d\bar z_j$, and the distributional $\bar\partial$ of (b) of the weighted space definition restricts to this smooth expression ([[def-bigraded-complex-differential-forms]], [[thm-d-dbar-decomposition-and-identities]], [[def-weighted-l2-spaces-dbar-forms]]).

[F3] At a point where the real partial derivatives exist, $\partial_{\bar z_j}=\tfrac12(\partial_{x_j}+i\partial_{y_j})$ ([[def-wirtinger-operators-in-several-complex-variables]]), and the Wirtinger operators obey the chain rule ([[thm-wirtinger-chain-rule-for-real-differentiable-maps]]).

[F4] ([[thm-hormander-l2-dbar-existence]].) Let $\Omega\subseteq\mathbb C^n$ be Hartogs pseudoconvex, $\varphi\in C^2(\Omega)$ strictly plurisubharmonic, $1\le q\le n$, $\lambda_1\le\cdots\le\lambda_n$ the eigenvalues of $(\varphi_{j\bar k})$, $w:=\lambda_1+\cdots+\lambda_q>0$ and $E(f):=\int_\Omega|f|^2w^{-1}e^{-\varphi}dV$. Every $\bar\partial$-closed $f\in\operatorname{Dom}\bar\partial_q$ with $E(f)<+\infty$ has a solution $v\in\operatorname{Dom}\bar\partial_{q-1}$ with $\|v\|_\varphi^2\le E(f)$.

[F5] ([[thm-polar-coordinates-formula-for-lebesgue-measure]], $n=2$.) For every Borel measurable $F:\mathbb R^2\to[0,\infty]$, $$\int_{\mathbb R^2}F\,d\lambda_2=\int_0^\infty\int_{S^1}F(r\omega)\,r\,d\sigma(\omega)\,dr,$$ where $\sigma$ is the finite Borel measure of [[def-polar-surface-measure-on-the-unit-sphere]].

[F6] $\sigma(S^1)=2\lambda_2(\{x\in\mathbb R^2:|x|\le1\})=2\pi$, by the definition $\sigma(E)=n\lambda_n(\{r\omega:\omega\in E,0<r\le1\})$ with $n=2$ ([[def-polar-surface-measure-on-the-unit-sphere]]) and the disc area $\pi$ ([[thm-disc-area-is-pi-r-squared]]), the identifications of $\mathbb C$ with $\mathbb R^2$ being those of [[rem-complex-euclidean-space-dictionary]].

[F7] For $0<r_0<R$, let $\psi$ be $C^1$ and injective on a neighborhood of $[r_0,R]$ with $\psi'>0$ there. If $h$ is continuous on an interval containing $\psi([r_0,R])$, then $$\int_{\psi(r_0)}^{\psi(R)}h(t)\,dt=\int_{r_0}^R h(\psi(r))\psi'(r)\,dr$$ ([[cor-one-dimensional-change-of-variables-with-absolute-derivative]]). This is a finite-interval assertion.

[F8] $\Gamma(t)=\int_0^\infty x^{t-1}e^{-x}\,dx$ for $t>0$ and $\Gamma(k+1)=k!$ for every integer $k\ge0$ ([[def-real-gamma-function-by-the-euler-integral]], [[cor-real-gamma-positive-integer-values]]).

[F9] AC is the assertion that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F10] For nonnegative measurable functions increasing pointwise, their integrals increase to the integral of their limit ([[thm-monotone-convergence-for-the-integral]]).

[F11] The whole space $\mathbb C^n$ is Hartogs pseudoconvex by convention ([[def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity]]).

**Choice use.** AC is the ambient hypothesis recorded in the Statement and cited as [F9]; it is consumed only inside the two supplier theorems [F4] and [F5], whose proofs carry their own choice hypotheses. The example exhibits $f$ and $u$ by explicit formulas and selects nothing.

## Proof

**Proof technique:** direct.

1.1 (The $\bar\partial$ computation.) By [F3], $\partial_{\bar z}\bar z=\tfrac12(\partial_x\bar z+i\partial_y\bar z)=\tfrac12(1+i(-i))=1$, so the chain rule in [F3] gives $\partial_{\bar z}\bar z^2=2\bar z\,\partial_{\bar z}\bar z=2\bar z$; hence $\bar\partial u=\tfrac12\cdot2\bar z\,d\bar z=\bar z\,d\bar z=f$ at every point of $\mathbb C$, by the coefficient formula of [F2] for the associated $(0,1)$-coefficient tuple. [F2, F3, given, algebra]

1.2 (Pointwise norms.) In the coefficient-tuple norm of [F1] the form $f=\bar z\,d\bar z$ has the single coefficient $\bar z$ and the function $u$ has the single coefficient $\tfrac12\bar z^2$, so $|f(z)|^2=|\bar z|^2=|z|^2$ and $|u(z)|^2=\tfrac14|\bar z^2|^2=\tfrac14|z|^4$ for every $z$. [F1, given, algebra]

1.3 (The weight.) The function $\varphi=2z\bar z$ is $C^\infty$, and [F3] together with $\partial_{\bar z}\bar z=1$, $\partial_{\bar z}z=0$ gives $\partial_{\bar z}\varphi=2z$ and then $\varphi_{z\bar z}=\partial_z(2z)=2$; the Hermitian matrix $(\varphi_{j\bar k})$ of [F4] is therefore the $1\times1$ matrix $(2)$, so with $q=1$ the weight of [F4] is $w=\lambda_1=2$ and $E(f)=\tfrac12\int_{\mathbb C}|f|^2e^{-\varphi}\,dA$. [F3, F4, given, algebra]

1.4 (Radial moments.) For $a>0$ and integers $k\ge0$, [F5] and [F6] apply to the nonnegative continuous radial integrand and give $$\int_{\mathbb C}|z|^{2k}e^{-a|z|^2}dA=2\pi\int_0^\infty r^{2k+1}e^{-ar^2}dr.$$ For $0<\varepsilon<R$, apply [F7] to $\psi(r)=ar^2$ and $h(t)=t^ke^{-t}/(2a^{k+1})$; its hypotheses hold on a neighborhood of $[\varepsilon,R]$, and $$\int_\varepsilon^R r^{2k+1}e^{-ar^2}dr=\frac{1}{2a^{k+1}}\int_{a\varepsilon^2}^{aR^2}t^ke^{-t}dt.$$ Take $\varepsilon=1/m$, $R=m$, $m\ge2$. Both truncated nonnegative integrands increase to the respective full integrands, so [F10] passes to the limit; [F8] identifies the right integral with the finite value $\Gamma(k+1)=k!$. Hence $$\int_{\mathbb C}|z|^{2k}e^{-a|z|^2}dA=\frac{\pi k!}{a^{k+1}}.$$ This proves convergence along with the formula, rather than assuming an improper substitution identity. [F5, F6, F7, F8, F10, algebra]

2.1 The energy is $E(f)=\tfrac12\int_{\mathbb C}|z|^2e^{-2|z|^2}dA=\tfrac12\cdot\frac{\pi\cdot1!}{2^2}=\frac{\pi}{8}$ by step 1.3 and step 1.4 with $k=1$, $a=2$; in particular $\int_{\mathbb C}|f|^2e^{-\varphi}dA=\frac{\pi}{4}$ is finite. [step 1.3, step 1.4, algebra]

2.2 The weighted norm is $\|u\|_\varphi^2=\int_{\mathbb C}\tfrac14|z|^4e^{-2|z|^2}dA=\tfrac14\cdot\frac{\pi\cdot2!}{2^3}=\frac{\pi}{16}$ by step 1.2 and step 1.4 with $k=2$, $a=2$. [step 1.2, step 1.4, algebra]

3.1 The claims of the Statement hold: $\bar\partial u=f$ by step 1.1, and $\|u\|_\varphi^2=\frac{\pi}{16}<\frac{\pi}{8}=E(f)=\tfrac12\int_{\mathbb C}|f|^2e^{-\varphi}dA$ by steps 2.1 and 2.2, the comparison $\tfrac1{16}<\tfrac18$ being arithmetic. Moreover $u\in L^2_{0,0}(\mathbb C,e^{-\varphi})$ and $f\in L^2_{0,1}(\mathbb C,e^{-\varphi})$ by these finite values, and $\bar\partial f=(\partial_{\bar z}\bar z)\,d\bar z\wedge d\bar z=0$ by [F2], so $f\in\operatorname{Dom}\bar\partial_1$ is $\bar\partial$-closed with finite energy and the whole-space convention [F11] and the positive scalar Levi coefficient of step 1.3 show that the hypotheses of [F4] hold with $q=1$; the explicit solution $u$ satisfies the bound $\|u\|_\varphi^2\le E(f)$ of [F4] with strict room. [F2, F4, F9, F11, step 1.1, step 2.1, step 2.2, algebra] ∎
