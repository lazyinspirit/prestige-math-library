---
id: lem-emg-temporal-scalar-positive-symmetric-reduction
kind: lemma
title: "Temporal-gauge first-order reduction of the charged scalar equation"
status: published
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 5
proof_strategy: direct
deps:
  - def-emg-trivial-potential-charged-scalar-system
  - def-emg-lorentzian-forms
  - def-gr-periodic-symmetric-hyperbolic-system
dependency_roles:
  def-emg-trivial-potential-charged-scalar-system: mathematical-premise
  def-emg-lorentzian-forms: mathematical-premise
  def-gr-periodic-symmetric-hyperbolic-system: mathematical-premise
sources:
  references:
    - title: "Mathieu Colin and Tatsuya Watanabe, Cauchy problem for the nonlinear Klein–Gordon equation coupled with the Maxwell equation, Journal of Mathematical Analysis and Applications 443 (2016), full author-hosted PDF"
      url: "https://www.math.u-bordeaux.fr/~mcolin/cauchy_maxKG.pdf"
      locator: "Complete 23-page PDF; §2, PDF pp. 3–5, and §4.1, PDF pp. 10–13: charged equations, current convention, and a flat Coulomb-gauge first-order reduction. Their matrix and gauge are compared only; the curved temporal-gauge matrices are derived below."
    - title: "Helmut Friedrich and Alan Rendall, The Cauchy Problem for the Einstein Equations, Lecture Notes in Physics 540 (2000), complete arXiv text"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
      locator: "Complete 97-page PDF; §3.1, PDF pp. 21–31: the coefficient definition, energy method and local-existence framework for symmetric hyperbolic systems."
    - title: "David Tong, Gauge Theory, full author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/gauge-theory/gauge.pdf"
      locator: "Complete 457-page PDF; §7.2, PDF pp. 349–352 (printed pp. 339–342): the two-dimensional Abelian–Higgs scalar derivative Dμϕ=∂μϕ−iAμϕ. Only the local derivative convention is compared."
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
---

## Statement

Let $U\subseteq I\times\mathbb T^3_{2\pi}$ be a coordinate region with $x^0=s$ a length coordinate, and let $g$ be a smooth Lorentzian metric of signature $(-,+,+,+)$ on $U$. Write $g^{ab}$ for its inverse and $\Gamma^c{}_{ab}$ for its Levi–Civita coefficients. Assume throughout the region that

$$g^{00}<0,\qquad (g^{ij})_{i,j=1}^3\text{ is positive definite}.$$

Let $A_0=0$, let $A_i$ be real, let $F_{0i}$ be real, and let $\varphi$ be complex. Treat $\pi_0,\pi_i$ as independent complex variables, and set

$$D_a\pi_b:=\partial_a\pi_b-\Gamma^c{}_{ab}\pi_c-i\lambda A_a\pi_b,$$

where $\lambda\in\mathbb R$ and $D_a\pi^a:=g^{ab}D_a\pi_b$. The temporal-gauge scalar first-order system is

$$\partial_s\varphi=\pi_0,\qquad \partial_sA_i=F_{0i},$$

$$\partial_s\pi_i-\partial_i\pi_0=-i\lambda A_i\pi_0-i\lambda F_{0i}\varphi,\qquad D_a\pi^a=V'(|\varphi|^2)\varphi.$$

Assume Countable Choice $\mathrm{AC}_\omega$ as in the periodic coefficient convention of [[def-gr-periodic-symmetric-hyperbolic-system]]. Use the three spatial compatibility equations to eliminate $\partial_s\pi_i$ from the scalar divergence equation. Then multiply the resulting scalar row by $-1$ and the compatibility rows by $g^{ki}$. For the variable block $(\pi_0,\pi_i)$, the resulting principal matrices are

$$A^0=\begin{pmatrix}-g^{00}&0\\0&g^{ij}\end{pmatrix},\qquad A^k=\begin{pmatrix}-2g^{0k}&-g^{kj}\\-g^{ik}&0\end{pmatrix}\quad(k=1,2,3).$$

The matrices on the complex variables mean the same real matrices on each real and imaginary component. They are symmetric and $A^0$ is positive definite. The transport equations for $\varphi$ and $A_i$ add only identity time blocks and no spatial derivative blocks. All remaining coefficients depend smoothly on $(g,g^{-1},\partial g,A,F,\varphi,\pi)$ wherever the stated metric inequalities and the open domain of $V$ hold. Thus this scalar-potential reduction is symmetric hyperbolic in the coefficient sense of [[def-gr-periodic-symmetric-hyperbolic-system]].

## Facts & Assumptions

**Given:** The smooth Lorentzian metric, real potential components $A_i$, real field-strength components $F_{0i}$, complex fields $\varphi,\pi_0,\pi_i$, real coupling $\lambda$, and smooth real potential $V$ on an open set containing the attained values of $|\varphi|^2$.

[F1] [[def-emg-trivial-potential-charged-scalar-system]] fixes $\pi_a=D_a\varphi$, $D_a\pi_b=\nabla_a\pi_b-i\lambda A_a\pi_b$, and the scalar equation $D_a\pi^a-V'(|\varphi|^2)\varphi=0$ in the global real-potential sector. The reduction uses these stated defining formulas.

[F2] [[def-emg-lorentzian-forms]] fixes the smooth Lorentzian structure and the metric-selected torsion-free connection used in the displayed covariant derivative.

[L1] Clause (a) of [[def-gr-periodic-symmetric-hyperbolic-system]] requires, under $\mathrm{AC}_\omega$, smooth maps $A^\mu:J\times\mathbb T^3_{2\pi}\times O\to\operatorname{Sym}_m(\mathbb R)$ and $B:J\times\mathbb T^3_{2\pi}\times O\to\mathbb R^m$, where $J$ is a nondegenerate open interval containing $0$ and $O\subseteq\mathbb R^m$ is open, with $A^0$ positive definite everywhere. Smoothness includes a smooth periodic representative on the full base. The last two proof steps construct such maps for a coefficient completion of the scalar-potential block; the fields on $U$ need not extend to the full base.

[A1] Assume Countable Choice $\mathrm{AC}_\omega$ as required by the periodic coefficient definition; also $g^{00}<0$, the inverse spatial block $(g^{ij})$ is positive definite, $A_0=0$, $\lambda$ is real, and the range of $|\varphi|^2$ lies in the open domain of the smooth real function $V$.

## Proof

1.1 Expanding the divergence equation and retaining only derivatives of the independent $\pi$ variables gives $g^{00}\partial_s\pi_0+g^{0i}\partial_s\pi_i+g^{i0}\partial_i\pi_0+g^{ij}\partial_i\pi_j$. Substitute $\partial_s\pi_i=\partial_i\pi_0-i\lambda A_i\pi_0-i\lambda F_{0i}\varphi$ from the compatibility equations. Since $g^{i0}=g^{0i}$, the derivative terms become $g^{00}\partial_s\pi_0+2g^{0i}\partial_i\pi_0+g^{ij}\partial_i\pi_j$; the substituted source terms contain no derivatives of $\pi$. Multiplying this row by $-1$ gives the top row of the stated principal system. [given, F1, A1, algebra]

2.1 For each output row $r$, summing the $i$th compatibility equation against $g^{ri}$ gives time term $g^{ri}\partial_s\pi_i$ and spatial term $-g^{ri}\partial_i\pi_0$. Thus the coefficient of $\partial_k\pi_0$ in row $r$ is $-g^{rk}$. The complete $\pi$-block has exactly the displayed $A^0,A^k$. The time block is positive because $-g^{00}>0$ and $(g^{ij})$ is positive definite. Each spatial block is symmetric because $g^{ij}=g^{ji}$, including the off-diagonal entries $-g^{kj}$ and $-g^{jk}$. The same calculation applies separately to the real and imaginary parts. [step 1.1, A1, algebra]

3.1 The equations $\partial_s\varphi=\pi_0$ and $\partial_sA_i=F_{0i}$ append identity time blocks and zero spatial blocks. Write $v\in\mathbb R^{13}$ for, in order, the real parts of the four $\pi_a$, their imaginary parts, $\operatorname{Re}\varphi,\operatorname{Im}\varphi$, and the three real $A_i$. Denote these scalar-potential matrices by $S^\mu$: $S^0=\operatorname{diag}(A^0,A^0,I_5)$ and $S^k=\operatorname{diag}(A^k,A^k,0_5)$ in this component order. They are symmetric, with $S^0$ positive definite. [given, step 2.1, algebra]

4.1 To verify the full coefficient domain in [L1], introduce independent real coordinates $z=(G_{ab},Q_{cab},E_i)\in\mathbb R^{53}$, with $G_{ab}=G_{ba}$ and $Q_{cab}=Q_{cba}$, for $0\le a,b,c\le3$ and $1\le i\le3$. Here $Q$ represents the first metric derivatives and $E_i$ represents $F_{0i}$. Let $O\subseteq\mathbb R^{66}$ consist of $u=(v,z)$ such that $G$ has Lorentzian signature $(-,+,+,+)$, $G^{00}<0$, $(G^{ij})$ is positive definite, and $|\varphi|^2$ lies in the open domain of $V$. This is open: inversion is smooth by the adjugate-over-determinant formula, and invertibility, fixed signature, and strict definiteness persist under sufficiently small changes of a symmetric matrix. Set $\Gamma^c{}_{ab}=\tfrac12G^{cd}(Q_{abd}+Q_{bad}-Q_{dab})$, $A_0=0$, $c_i=-i\lambda A_i\pi_0-i\lambda E_i\varphi$, and $R=G^{ab}\Gamma^c{}_{ab}\pi_c+i\lambda G^{ab}A_a\pi_b+V'(|\varphi|^2)\varphi$. The transformed scalar source vector $b(v,z)$ has complex components $R-G^{0i}c_i$ in the $\pi_0$ row and $-G^{ri}c_i$ in the $\pi_r$ rows, components $-\pi_0$ in the $\varphi$ rows, and $-E_i$ in the $A_i$ rows, all split into real coordinates. Indeed the original divergence equation is $G^{ab}\partial_a\pi_b=R$, so these signs follow by the substitution in step 1.1. All these maps are smooth on $O$, using only finite sums, products, inversion and composition with the smooth function $V'$. [given, F1, F2, A1, step 1.1, step 3.1, construct, algebra]

5.1 On $\mathbb R\times\mathbb T^3_{2\pi}\times O$ define $\widehat A^0=\operatorname{diag}(S^0,I_{53})$, $\widehat A^k=\operatorname{diag}(S^k,0_{53})$, and $\widehat B=(b,0_{53})$, with every formula independent of the base point $(s,x)$. The lifted maps are therefore smooth and periodic on the entire base, and the matrices are symmetric with positive-definite time matrix. Restricting the time base to any interval $J$ of [L1] gives a coefficient family exactly of its stated type. Evaluating its first thirteen rows along $(G,Q,E)=(g,\partial g,F_{0i})$ on $U$ gives precisely the claimed scalar-potential reduction. The extra identity and zero blocks are a coefficient completion only: no auxiliary evolution equation, global extension of the given fields, or existence of a coupled solution is asserted. Thus the local block has the required coefficient realization, while the actual metric and Maxwell evolution blocks must be supplied separately in a coupled system. [given, L1, step 3.1, step 4.1, construct, algebra] ∎
