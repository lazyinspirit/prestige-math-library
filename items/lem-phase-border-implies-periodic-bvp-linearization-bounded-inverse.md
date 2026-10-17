---
id: lem-phase-border-implies-periodic-bvp-linearization-bounded-inverse
kind: lemma
title: "A transverse phase border makes the periodic BVP linearization boundedly invertible"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-phase-bordered-periodic-orbit-bvp
  - lem-phase-bordered-shooting-jacobian-invertibility
  - def-linearized-two-point-bvp-operator-and-conditioning
  - lem-c1-euclidean-maximal-flow-with-c2-upgrade
  - thm-gronwall-integral-inequality
  - thm-picard-lindelof-local-existence-and-uniqueness
  - lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval
  - thm-ftc-second-part
  - thm-chain-rule-for-total-derivatives
  - thm-norm-inequality-for-the-vector-valued-integral
  - thm-continuous-implies-integrable
  - thm-monotonicity-of-the-integral
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Y. A. Kuznetsov, Elements of Applied Bifurcation Theory, 2nd ed., Chapter 1, §1.5"
      url: "https://www.ma.imperial.ac.uk/~dturaev/kuznetsov.pdf"
      locator: "Complete 614-page second-edition PDF retrieved; inspected printed pp. 26–30 on transverse sections, return maps, variational equation, monodromy, and phase multiplier."
    - title: "S. M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010)"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
      locator: "Full 163-page article retrieved; inspected §§10 and 13, including Theorems 13.1–13.3 and the strict-inclusion/Krawczyk proof in §13.3."
---

## Statement

Let $u_*(s)=(\gamma(Ts),T)$, $0\le s\le1$, be the augmented solution from [[def-phase-bordered-periodic-orbit-bvp]] for a nonconstant $C^2$ autonomous periodic orbit of period $T>0$. Assume its phase multiplier $1$ is algebraically simple and its affine phase covector $c$ satisfies $c^\top f(\gamma(0))\ne0$. For the continuous linearized BVP operator $\mathcal L:X\to Z$ of [[def-linearized-two-point-bvp-operator-and-conditioning]], define
$$ A(s)=D\widetilde f(u_*(s)),\quad a_0=\sup_{0\le s\le1}\|A(s)\|_2, \quad B_2=D_2B(u_*(0),u_*(1)),\quad K_J\ge\|J^{-1}\|_{2\to2}, $$
where $J=\begin{bmatrix}M-I&f(\gamma(0))\\c^\top&0\end{bmatrix}$ and $M=D\phi_T(\gamma(0))$. Put $E=e^{a_0}$ and
$$ K_{\mathcal L}:=(1+a_0)\left[E K_J(1+\|B_2\|_2E)+E\right]+1. $$
Then $\mathcal L$ is bijective and $\|\mathcal L^{-1}\|_{Z\to X}\le K_{\mathcal L}$, with the spaces and norms defined in [[def-linearized-two-point-bvp-operator-and-conditioning]]. All constants are finite and explicit once the stated coefficient and shooting-inverse bounds are supplied.

## Facts & Assumptions

**Given:** The phase-fixed periodic solution, the augmented field and boundary map, the simple neutral multiplier and transverse phase, and the coefficient bound $a_0$.

[F1] The continuous linearized operator is $\mathcal Lv=(v'-Av,B_1v(0)+B_2v(1))$ on $X=C^1([0,1],\mathbb R^{d+1})$ and $Z=C([0,1],\mathbb R^{d+1})\times\mathbb R^{d+1}$, with the norms in its definition ([[def-linearized-two-point-bvp-operator-and-conditioning]]).

[F2] The shooting Jacobian is $J=\begin{bmatrix}M-I&f(\gamma(0))\\c^\top&0\end{bmatrix}$ and is invertible under the stated simplicity and transversality hypotheses ([[lem-phase-bordered-shooting-jacobian-invertibility]]).

[F3] A linear matrix IVP with continuous coefficients on a positive-length compact interval has a solution on the entire interval ([[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]]). This supplies a solution of $z'=C(t)z+h(t)$ for continuous real $C,h$: use the first column of the matrix solution with coefficient $\begin{bmatrix}C&h\\0&0\end{bmatrix}$ and initial first column $(z_0,1)$; its last entry stays $1$. Such vector solutions are unique by local IVP uniqueness, extending the coefficients constantly past the interval endpoints when applying the open-domain theorem ([[thm-picard-lindelof-local-existence-and-uniqueness]]).

[F4] If $u(t)\le C+a_0\int_s^t u(r)\,dr$ for nonnegative continuous $u$, then $u(t)\le Ce^{a_0(t-s)}$ ([[thm-gronwall-integral-inequality]]).

[F5] On an arbitrary open state domain a $C^1$ autonomous field has a jointly $C^1$ maximal flow on an open time-state domain. Its state derivative is the variational fundamental matrix, and its time derivative is the vector field ([[lem-c1-euclidean-maximal-flow-with-c2-upgrade]]).

[F6] Coordinatewise FTC recovers endpoint differences for continuously differentiable vector curves; continuous vector integrands are integrable, their integral satisfies $\|\int g\|_2\le\int\|g\|_2$, and pointwise inequalities pass to integrals ([[thm-ftc-second-part]], [[thm-continuous-implies-integrable]], [[thm-norm-inequality-for-the-vector-valued-integral]], [[thm-monotonicity-of-the-integral]]).

[F7] The derivative of a composition is the composition of its derivatives ([[thm-chain-rule-for-total-derivatives]]).

## Proof

1.1 The coefficient $A$ is continuous on $[0,1]$. For $0\le s\le t\le1$, let $U(t,s)$ be the solution operator of $v'=A(t)v$. Existence on all of $[0,1]$ and uniqueness follow from [F3] with zero forcing. For any initial vector $\xi$, [F6] and the equation give $\|U(t,s)\xi\|_2\le\|\xi\|_2+a_0\int_s^t\|U(r,s)\xi\|_2\,dr$; Gronwall [F4] yields $\|U(t,s)\|_2\le e^{a_0(t-s)}$. In particular $U$ exists on the full triangle $0\le s\le t\le1$ with the stated bound. [given, F3, F4, F6]

2.1 The homogeneous solution with initial value $\xi$ is $U(t,0)\xi$. Apply [F5] to the $C^1$ augmented field $\widetilde f(x,\theta)=(\theta f(x),0)$ on open $U\times(0,\infty)$. The given periodic solution exists through $s=1$, so its endpoint variation is the derivative of that flow on its open maximal domain; no convex set spanning the orbit is needed. The first $d$ endpoint coordinates differentiate to $Mv+f(\gamma(0))\tau$ in initial variation $(v,\tau)$: the $v$ column is monodromy, and the period column is $\partial_T\phi_T(\gamma(0))=f(\gamma(0))$ by [F5] and periodicity. Differentiating $B(u_0,u_1)=(x_1-x_0,\psi(x_0))$ by [F7] therefore gives $B_1+B_2U(1,0)=J$. [F1, F2, F5, F7, step 1.1]

2.2 For data $(g,q)\in Z$, let $p$ be the unique solution of $p'=Ap+g$, $p(0)=0$. Existence on all of $[0,1]$ and uniqueness follow from [F3] with $C=A$ and $h=g$. Since $p'$ is continuous, [F6] gives $\|p(t)\|_2=\|\int_0^t p'(s)\,ds\|_2\le\int_0^t\|p'(s)\|_2\,ds$. Pointwise, $\|p'(s)\|_2\le a_0\|p(s)\|_2+\|g\|_\infty$, so monotonicity in [F6] gives $\|p(t)\|_2\le\|g\|_\infty+a_0\int_0^t\|p(s)\|_2\,ds$, hence $\|p\|_\infty\le E\|g\|_\infty$ by [F4]. Every solution with initial value $\xi$ equals $U(t,0)\xi+p(t)$, since their difference solves the homogeneous linear IVP with initial value $\xi$ and uniqueness [F3] applies. [F1, F3, F4, F6, step 1.1, algebra]

3.1 The boundary condition for this solution is $J\xi+B_2p(1)=q$ by step 2.1. Thus its unique initial value is $\xi=J^{-1}(q-B_2p(1))$. Writing $D=\|(g,q)\|_Z=\max(\|g\|_\infty,\|q\|_2)$ gives $\|\xi\|_2\le K_J(1+\|B_2\|_2E)D$ and, by steps 1.1–2.2, $\|v\|_\infty\le[EK_J(1+\|B_2\|_2E)+E]D$. [F1, F2, step 1.1, step 2.1, step 2.2, algebra]

4.1 Since $v'=Av+g$, $\|v'\|_\infty\le a_0\|v\|_\infty+D$. The definition of the $X$ norm now gives $\|v\|_X\le K_{\mathcal L}D$. Steps 2.1–2.2 construct a solution for every $(g,q)$; any solution is determined by $\xi$ and the invertible matrix $J$, so it is unique. Hence $\mathcal L$ is bijective with the stated inverse bound. [F1, step 2.1, step 2.2, step 3.1, algebra] ∎
