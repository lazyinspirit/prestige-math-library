---
id: lem-equivariant-rescaled-heat-kernel-extension
kind: lemma
title: "Rescaled heat kernels for positive matrix principal symbols"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-equivariant-index
dependency_level: 0
deps:
  - def-countable-choice
  - thm-fourier-inversion-on-schwartz-space
  - thm-fourier-transform-maps-schwartz-space-continuously-to-itself
  - thm-smooth-partitions-of-unity-exist-on-manifolds
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-dominated-convergence
dependency_roles:
  def-countable-choice: mathematical-premise
  thm-fourier-inversion-on-schwartz-space: mathematical-premise
  thm-fourier-transform-maps-schwartz-space-continuously-to-itself: mathematical-premise
  thm-smooth-partitions-of-unity-exist-on-manifolds: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-dominated-convergence: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Peter B. Gilkey, Invariance Theory, the Heat Equation, and the Atiyah-Singer Index Theorem, first edition"
      url: "https://pages.uoregon.edu/gilkey/dirPDF/InvarianceTheory1Ed.pdf"
    - title: "Zelin Yi, A Groupoid Proof of the Lefschetz fixed point formula"
      url: "https://arxiv.org/pdf/2003.00955"
verification:
  precheck: pending
---

## Statement

Assume countable choice. Let $M$ be a compact smooth Riemannian manifold without boundary, $n=\dim M>0$, and $E$ a finite-rank Hermitian bundle. Let $P$ be a smooth second-order differential operator with positive-frequency principal symbol $p(x,\xi)$, a Hermitian matrix satisfying $p(x,\xi)\ge c|\xi|^2I$ for some $c>0$. Assume its nonnegative selfadjoint realization has a complete orthonormal basis of smooth eigensections and a smooth heat kernel $K_t(y,z):E_z\to E_y$ relative to Riemannian volume. No scalar-principal-symbol hypothesis is imposed. In normal coordinates and smooth unitary frames based at $x$, set

$$k_x(w)=(2\pi)^{-n}\int_{\mathbb R^n}e^{iw\cdot\xi}e^{-p(x,\xi)}\,d\xi.$$

Then $k_x$ is Schwartz, $\int k_x(w)\,dw=I$, and, locally uniformly for bounded $a,b\in T_xM$,

$$t^{n/2}K_t(\exp_x(\sqrt t\,a),\exp_x(\sqrt t\,b))\longrightarrow k_x(a-b).$$

For every integer $L>n$ there is $C_L$ such that

$$\|K_t(y,z)\|\le C_Lt^{-n/2}(1+d(y,z)/\sqrt t)^{-L}\qquad(0<t\le1).$$

In dimension zero the corresponding assertion is the finite-dimensional limit $K_t(x,x)\to I$ and zero kernel between distinct points.

## Statement references

[Gilkey, §§1.6–1.7, especially Lemmas 1.7.2–1.7.3, printed pp. 50–53: heat parametrices for positive matrix principal symbols; §1.8, pp. 64–67: rescaled Schwartz kernels](https://pages.uoregon.edu/gilkey/dirPDF/InvarianceTheory1Ed.pdf)

[Yi, Proposition 4.3: the corresponding relative tangent-family limit](https://arxiv.org/pdf/2003.00955)

## Facts & Assumptions

**Given:** The operator, spectral heat kernel and geometric data in the Statement. Countable choice is used by the Fourier and partition suppliers below; no stronger choice principle is used. [[def-countable-choice]]

[F1] Fourier transformation preserves Schwartz space continuously, with its differentiation and polynomial-multiplication identities; Fourier inversion holds there. Rescaling frequency from the suppliers' $2\pi$ convention gives the convention in the Statement. [[thm-fourier-transform-maps-schwartz-space-continuously-to-itself]], [[thm-fourier-inversion-on-schwartz-space]]

[F2] Smooth subordinate partitions of unity exist; compactness reduces the chosen chart cover to a finite one. [[thm-smooth-partitions-of-unity-exist-on-manifolds]]

[F3] Absolutely integrable kernels permit Fubini and dominated convergence. [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-dominated-convergence]]

## Proof

**Given:** $0<t\le1$ and the spectral heat operator $e^{-tP}$ in the Statement.

1.1 Work in one precompact bundle chart and write $p(y,\xi)=\sum A^{ij}(y)\xi_i\xi_j$. The matrices need not commute. For a parameter derivative, the matrix exponential satisfies $\partial e^{-p}=-\int_0^1e^{-(1-s)p}(\partial p)e^{-sp}\,ds$, obtained by differentiating the matrix ODE defining the exponential. Iterating this identity and differentiating in $\xi$ expresses every derivative in $y,\xi$ as finitely many simplex integrals of products of polynomial derivatives of $p$ and exponential factors whose time lengths sum to one. Since $p\ge c'|\xi|^2I$ uniformly on the chart closure, the product norm is at most a polynomial in $|\xi|$ times $e^{-c'|\xi|^2}$. Thus $e^{-p(y,\cdot)}$ is a uniformly bounded smooth Schwartz family. By [F1] its inverse transform $k_y(w)$ has all uniformly bounded Schwartz seminorms, and $\int k_y(w)\,dw=e^{-p(y,0)}=I$. This uses Fourier inversion on Schwartz functions, not an exchange of an undamped double Fourier integral. [given, F1, algebra]

2.1 Let $\kappa_i$ be finitely many charts with smooth unitary frames, and let $\phi_i$ be a partition subordinate to compact subsets of those charts. Choose smooth cutoffs $\chi_i(y,z)$ supported where both points lie in chart $i$, equal to one near $y=z$ whenever $z\in\operatorname{supp}\phi_i$. Write volume as $w_i(z)\,d\kappa_i(z)$. Define $Z_t(y,z)$ in these frames by the finite sum of $\phi_i(z)\chi_i(y,z)w_i(z)^{-1}t^{-n/2}k_{i,z}((\kappa_i(y)-\kappa_i(z))/\sqrt t)$, interpreting each summand as a bundle map. In each summand the principal coefficients are frozen at the source $z$. Step 1.1, local equivalence of chart distance and $d$, and cutoff support give $\|Z_t(y,z)\|\le C_LH_{t,L}(y,z)$, where $H_{t,L}=t^{-n/2}(1+d(y,z)/\sqrt t)^{-L}$. Moreover $Z_tf\to f$ in $L^2$ for smooth $f$: put $\kappa_i(y)-\kappa_i(z)=\sqrt t\,v$, use the uniform integrable Schwartz bound, and use $\sum_i\phi_i=1$ and $\int k_{i,y}=I$. For $R_t=(\partial_t+P_y)Z_t$, the frozen principal part cancels $\partial_t$. The remaining principal term contains $A(y)-A(z)=O(d(y,z))$ and two derivatives of the frozen kernel; lower terms contain at most one derivative. The bound $d(y,z)t^{-1}H_{t,L+1}\le t^{-1/2}H_{t,L}$ therefore gives $\|R_t(y,z)\|\le C_Lt^{-1/2}H_{t,L}(y,z)$. Derivatives of cutoffs are supported away from the diagonal and obey the same bound by choosing additional Schwartz decay. [F1, F2, F3, step 1.1, construct, algebra]

3.1 Fix $L>n$. Uniform volume bounds in the finite atlas give $\sup_y\int H_{t,L}(y,z)\,dz+\sup_z\int H_{t,L}(y,z)\,dy\le C_L$. Also $\int H_{a,L}(y,u)H_{b,L}(u,z)\,du\le C_LH_{a+b,L}(y,z)$ for $a,b>0$, $a+b\le1$. To check the second estimate, suppose $a\le b$ and put $r=d(y,z)$. If $r\le\sqrt b$, bound the second factor by $b^{-n/2}$ and integrate the first. If $r>\sqrt b$, split into $d(y,u)\ge r/2$ and its complement. On the first set, the first factor is bounded by $C a^{(L-n)/2}r^{-L}\le C b^{(L-n)/2}r^{-L}$; integrate the second. On the complement, $d(u,z)\ge r/2$, so bound the second factor by $C b^{(L-n)/2}r^{-L}$ and integrate the first. These bounds are comparable to $H_{a+b,L}(y,z)$; exchanging the factors treats $b\le a$. [step 2.1, algebra]

4.1 Define Volterra convolution by $(A*B)_t(y,z)=\int_0^t\int_M A_{t-s}(y,u)B_s(u,z)\,du\,ds$. The residual bound and step 3.1 show $\|R*R\|\le C H_{t,L}$, since $\int_0^t((t-s)s)^{-1/2}\,ds=\pi$ (substitute $s=t\sin^2\theta$). Iterating this bounded time kernel gives $\|R^{*(2m)}_t\|\le C^{2m}t^{m-1}H_{t,L}/(m-1)!$ after enlarging $C$. Convolving once more with $R$ gives $\|R^{*(2m+1)}_t\|\le 2C^{2m+1}t^{m-1/2}H_{t,L}/(m-1)!$ for $m\ge1$, by bounding $s^{m-1}\le t^{m-1}$ in the time integral; $R$ itself has its original bound. Consequently $Q=\sum_{m\ge1}(-1)^mR^{*m}$ converges absolutely on every positive-time compact set, has $\|Q_t\|\le C t^{-1/2}H_{t,L}$ for $t\le1$, and satisfies $Q+R+R*Q=0$. Fubini and associativity hold because every displayed absolute convolution bound is finite. Hence $S=Z+Z*Q$ satisfies $\|S_t-Z_t\|\le C\sqrt t H_{t,L}$ and $S_tf\to f$ in $L^2$ for smooth $f$. [F3, step 2.1, step 3.1, construct, algebra]

5.1 Extend kernels causally by zero for negative time. The initial limit of $Z$ gives $(\partial_t+P_y)Z=\delta_0I+R$ in distributions. Applying this identity to the absolutely convergent convolutions of step 4.1 yields $(\partial_t+P_y)S=\delta_0I+R+Q+R*Q=\delta_0I$. These distribution identities can equivalently be verified first on $\varepsilon<s<t-\varepsilon$, tested against a compactly supported smooth function of time and space, and then passed to the endpoints using the integrable bounds from step 4.1. Thus no differentiation of a singular convolution is assumed pointwise. For smooth initial $f$, let $\psi$ be a smooth eigensection of $P$ with eigenvalue $\lambda$. Formal symmetry and the distribution equation give $a'(t)+\lambda a(t)=0$ for $a(t)=\langle S_tf,\psi\rangle$, with $a(0)=\langle f,\psi\rangle$. Therefore $a(t)=e^{-t\lambda}\langle f,\psi\rangle$. The two-sided integral bounds in step 3.1 make $S_t$ bounded on $L^2$ (apply Cauchy–Schwarz with weight $\|S_t(y,z)\|$). Completeness of the given eigenbasis proves $S_t=e^{-tP}$ on $L^2$. The series and convolutions define continuous kernels for $t>0$: on time intervals away from the endpoints use uniform convergence, and bound the omitted endpoint intervals by the integrable convolution estimates. Equality as distributions with the smooth given $K_t$ therefore gives $S_t(y,z)=K_t(y,z)$ everywhere. In particular the bound for $S$ is the stated bound for $K$. [given, F3, step 3.1, step 4.1, algebra]

6.1 Fix $x$ and put $y=\exp_x(\sqrt t\,a)$, $z=\exp_x(\sqrt t\,b)$. In a chart, Taylor expansion gives $(\kappa_i(y)-\kappa_i(z))/\sqrt t\to d\kappa_i|_x(a-b)$, the frozen symbol tends to $p_i(x,\xi)$, and all frame maps, partition weights and density factors tend to their values at $x$. Linear change of cotangent variables in the absolutely convergent Fourier integral transforms each limiting chart expression into $\phi_i(x)k_x(a-b)$: the coordinate Jacobian cancels $w_i(x)$ because normal-coordinate volume density at $x$ is one. Summing gives $k_x(a-b)$. All convergences are uniform on bounded $a,b$ by step 1.1. By step 4.1, $t^{n/2}\|K_t-Z_t\|\le C\sqrt t$, so it has zero limit. This proves the rescaled limit and all assertions for $n>0$. If $M$ is empty the claims are vacuous; for $n=0$, compact $M$ is finite and differential operators act separately on its fibers, so ordinary matrix exponentiation gives exactly the asserted finite-dimensional limit. [F1, F3, step 1.1, step 2.1, step 4.1, step 5.1, algebra] ∎

## Proof sources

[Gilkey, §§1.6–1.8: general positive matrix-symbol heat-parametrix and fixed-point analysis. The local proof above uses a frozen-coefficient Volterra correction instead of importing his pseudodifferential calculus.](https://pages.uoregon.edu/gilkey/dirPDF/InvarianceTheory1Ed.pdf)
