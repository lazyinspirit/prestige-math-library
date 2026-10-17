---
id: lem-local-center-manifold-for-a-simple-hopf-point
kind: lemma
title: A parameterized C5 center manifold exists at a simple Hopf spectral split
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-hopf-normal-form-data
  - def-hopf-weighted-trajectory-space
  - lem-hopf-weighted-trajectory-space-is-banach
  - thm-banach-fixed-point
  - def-ck-euclidean-maps-and-diffeomorphisms
  - lem-euclidean-linear-maps-have-matrices-and-are-bounded
  - thm-newton-leibniz-with-interior-derivative
  - thm-ftc-first-part
  - thm-chain-rule-for-total-derivatives
  - thm-algebra-of-derivatives
  - thm-jordan-form-exists-iff-the-characteristic-polynomial-splits
  - def-jordan-canonical-form
  - lem-characteristic-polynomial-is-monic-and-has-extreme-coefficients
  - thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity
  - lem-smooth-bump-between-concentric-euclidean-balls
  - thm-mean-value-inequality-for-total-derivatives
  - thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
  - thm-euclidean-space-complete
  - def-complex-exponential
  - thm-complex-exponential-is-entire-with-derivative-itself
  - thm-complex-exponential-addition-and-real-extension
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - lem-hopf-smooth-eigenpair-branch
  - lem-characteristic-roots-stay-in-separated-neighborhoods
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: J. E. Marsden and M. McCracken, The Hopf Bifurcation and Its Applications, Springer-Verlag, 1976
      url: https://authors.library.caltech.edu/records/satwa-8xa89/files/Hopf.pdf
      locator: Section 2, printed pp. 27–49, complete graph-transform center-manifold proof and flow version
    - title: Yuri A. Kuznetsov, Elements of Applied Bifurcation Theory, 2nd ed., Springer
      url: https://wwwf.imperial.ac.uk/~dturaev/kuznetsov.pdf
      locator: Chapter 5, §§5.1–5.2, printed pp. 151–159; theorem statements and parameter extension
verification:
  precheck: pass
---

## Statement

Let $f(x,\lambda)$ be $C^5$ near $(0,0)$ in $\mathbb R^d\times\mathbb R$, and suppose $f(0,\lambda)=0$ for all sufficiently small $\lambda$. Assume $A=D_xf(0,0)$ has a simple pair $\pm i\omega$, $\omega>0$, and every other eigenvalue has nonzero real part. Choose $q\ne0$ with $Aq=i\omega q$ and set $E_c=\operatorname{span}_{\mathbb R}\{\operatorname{Re}q,\operatorname{Im}q\}$. Let $E_s$ and $E_u$ be the real sums of generalized eigenspaces with eigenvalues of negative and positive real part, respectively, and set $E_h=E_s\oplus E_u$. For the extended system $\dot\lambda=0$, there are neighborhoods $U\subset E_c$ and $J\subset\mathbb R$ of zero and a $C^5$ map $h:U\times J\to E_h$ whose graph $x=z+h(z,\lambda)$ is tangent to $E_c\times\mathbb R$ at the origin and contains every sufficiently small periodic trajectory that remains in the chosen neighborhood.

Write $A_\lambda=D_xf(0,\lambda)$. Since $f$ is $C^5$, this matrix path is $C^4$; let $\zeta(\lambda)$ be its $C^4$ simple eigenvalue branch from [[lem-hopf-smooth-eigenpair-branch]]. For each small $\lambda$, the graph tangent plane $\operatorname{range}D_z(z+h)(0,\lambda)$ is the invariant plane spanned by the right eigenvectors for $\zeta(\lambda)$ and $\overline{\zeta(\lambda)}$.

Write $P_c,P_h$ for the spectral projections of $A$ and define

$$f_c(z,h,\lambda):=P_cf(z+h,\lambda),\qquad f_h(z,h,\lambda):=P_hf(z+h,\lambda).$$

The graph satisfies the actual invariance equation

$$D_zh(z,\lambda)f_c(z,h(z,\lambda),\lambda)=f_h(z,h(z,\lambda),\lambda),\qquad h(0,\lambda)=0,\quad D_zh(0,0)=0.$$

On a smaller neighborhood it also satisfies $h(z,\lambda)=O(\|z\|^2+|\lambda|\|z\|)$. No Axiom of Choice is used.

## Facts & Assumptions

**Given:** $f$, $A$, $\omega$, $E_c$, $E_s$, $E_u$, and the hypotheses in the Statement.

[F1] [[def-hopf-normal-form-data]]: the critical eigenpair is simple, and the only eigenvalues of $A$ on the imaginary axis are $\pm i\omega$.

[F2] [[def-hopf-weighted-trajectory-space]]: $\mathcal C_\eta(E)=\{u\in C(\mathbb R,E):\sup_t e^{-\eta|t|}\|u(t)\|<\infty\}$.

[F3] [[lem-hopf-weighted-trajectory-space-is-banach]]: this weighted trajectory space is complete.

[F4] [[thm-banach-fixed-point]]: a contraction of a nonempty complete metric space into itself has a unique fixed point, obtained by iteration.

[F5] [[def-ck-euclidean-maps-and-diffeomorphisms]]: $C^5$ means continuous derivatives through order five.

[F6] [[thm-ftc-first-part]]: for a continuous integrand on a compact interval, its integral primitive differentiates to that integrand at every point, with one-sided derivatives at endpoints.

[F7] [[thm-chain-rule-for-total-derivatives]]: derivatives of compositions obey the chain rule.

[F8] [[thm-jordan-form-exists-iff-the-characteristic-polynomial-splits]] and [[def-jordan-canonical-form]]: when a finite-dimensional complex linear map has split characteristic polynomial, it has a Jordan basis, and each block is $J_m(\alpha)=\alpha I+N$ with $N^m=0$.

[F9] [[lem-smooth-bump-between-concentric-euclidean-balls]]: there is a smooth cutoff equal to one on a smaller closed ball and supported in a larger open ball.

[F10] [[thm-mean-value-inequality-for-total-derivatives]]: a uniform derivative bound on a convex open set gives the corresponding Lipschitz bound.

[F11] [[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]: every nonempty closed bounded subset of $\mathbb R^d$ is compact, and a continuous real-valued function on it attains a finite maximum.

[F12] [[lem-hopf-smooth-eigenpair-branch]]: a $C^k$ matrix path with a simple eigenvalue has a unique local $C^k$ eigenvalue and gauge-fixed right-eigenvector branch. Here $A_\lambda$ is $C^4$ because $f$ is $C^5$, so these branches are $C^4$.

[F13] [[lem-characteristic-roots-stay-in-separated-neighborhoods]]: near a matrix with separated eigenvalue neighborhoods, each neighborhood retains the same algebraic root count under small perturbation.

[F14] [[thm-euclidean-space-complete]]: the ambient extended state space $\mathbb R^{d+1}$ with its Euclidean norm is complete.

[F15] [[lem-euclidean-linear-maps-have-matrices-and-are-bounded]]: every Euclidean linear map has a finite operator-norm bound.

[F16] [[def-complex-exponential]]: $\exp z=\sum_{n\ge0}z^n/n!$ for every $z\in\mathbb C$.

[F17] [[thm-complex-exponential-is-entire-with-derivative-itself]]: $\frac{d}{dt}\exp(\alpha t)=\alpha\exp(\alpha t)$ for $\alpha\in\mathbb C$ and real $t$.

[F18] [[thm-complex-exponential-addition-and-real-extension]]: $\exp(z+w)=\exp z\exp w$ for complex $z,w$.

[F19] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]: $|\exp(x+iy)|=e^x$ for real $x,y$.

[F20] [[thm-newton-leibniz-with-interior-derivative]]: if a scalar function is continuous on a compact interval and differentiable in its interior with continuous integrable derivative, integrating the derivative recovers the endpoint difference; apply this componentwise to finite-dimensional derivative arrays.

[F21] [[thm-algebra-of-derivatives]]: products of differentiable scalar functions obey the product rule; the rule applies componentwise to the finite-dimensional matrix formulas below.

[F22] [[lem-characteristic-polynomial-is-monic-and-has-extreme-coefficients]] and [[thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity]]: the extended matrix's characteristic polynomial has degree $d+1\ge1$ and splits over $\mathbb C$.

## Proof

1.1 On the extended state $(x,\lambda)$, the linearization is $\operatorname{diag}(A,0)$ because $f(0,\lambda)\equiv0$. Its characteristic polynomial has positive degree and splits over $\mathbb C$ by [F22], so [F8] gives the direct sum of complex generalized eigenspaces with Jordan blocks as defined by [[def-jordan-canonical-form]]. The real and imaginary parts of $q$ are independent: otherwise $q$ would be a nonzero complex multiple of a real vector $r$, forcing $Ar=i\omega r$, impossible because $Ar$ is real and $i\omega r$ is nonreal. Since $A$ is real, conjugation maps the generalized eigenspace for $\alpha$ onto the one for $\bar\alpha$; grouping conjugate chains gives a real invariant splitting into the critical plane $E_c$ and $E_s\oplus E_u$, and adjoining the parameter's zero coordinate gives center space $E_c\times\mathbb R$. To define the linear flow notation used below, on a Jordan block $J=\alpha I+N$ with $N^m=0$ put $T_J(t):=\exp(\alpha t)\sum_{k=0}^{m-1}t^kN^k/k!$. By [F7], [F17] and [F21], $T_J'(t)=JT_J(t)$ and $T_J(0)=I$; by [F18] and the finite binomial expansion, $T_J(t)T_J(s)=T_J(t+s)$, since every term involving $N^k$ with $k\ge m$ vanishes. Conjugating these block operators by one fixed Jordan basis defines $e^{Bt}$ on the center, stable and unstable summands; paired conjugate blocks give operators preserving the real subspaces. The simple critical pair has no nontrivial Jordan part and the parameter zero block is one-dimensional, so the center flow is bounded: on the critical blocks [F19] gives $|\exp(\pm i\omega t)|=1$, and on the parameter block it is the identity. On a stable block write $a=-\operatorname{Re}\alpha>0$ and choose $0<\gamma<a$; [F19] gives $|\exp(\alpha t)|=e^{-at}$. For each $k<m$, $t^ke^{-(a-\gamma)t}$ is bounded on $[0,\infty)$: on $[0,1]$ it is at most $1$, and for $t\ge1$ [F16] and the real-extension clause of [F18] give $e^{(a-\gamma)t}\ge ((a-\gamma)t)^k/k!$. The same argument with $-t$ applies to unstable blocks. There are finitely many blocks, so choose one $\gamma>0$ smaller than every nonzero $|\operatorname{Re}\alpha|$; the finite sums and products have a common finite bound. The changes of basis, their inverses, and the projections have finite operator norms by [F15]; enlarging $K$ to include these and the bounded center flow gives $\|e^{A_ct}\|\le K$, $\|e^{A_st}\|\le Ke^{-\gamma t}$ and $\|e^{-A_ut}\|\le Ke^{-\gamma t}$ for $t\ge0$. If the hyperbolic complement is zero, its estimates are vacuous. [F1, F7, F8, F15, F16, F17, F18, F19, F21, F22, given, algebra]

1.2 In these coordinates write the extended state as $(v,w)$, with $v=(z,\lambda)\in E_c\times\mathbb R$ and $w=(w_s,w_u)\in E_s\oplus E_u$, and write its equation as $\dot v=A_cv+N_c(v,w)$ and $\dot w=A_hw+N_h(v,w)$. The nonlinear remainder $N$ has $N(0)=DN(0)=0$. On a small closed ball its second derivative is bounded; applying [F10] first to $DN$ and then to $N$ gives $\|DN(y)\|\le C\|y\|$ and $\|N(y)\|\le C\|y\|^2$. Choose a fixed smooth bump $\chi$ equal to one on the unit ball and supported in the ball of radius two, using [F9]. Its derivative has finite bound by [F11]; set $\chi_r(y)=\chi(y/r)$, so [F7] gives $\|D\chi_r\|\le C_\chi/r$. On the support ball, the product rule [F21] gives $\|D(\chi_rN)\|\le C r+C r^2(C_\chi/r)=C' r$. Extend $\chi_rN$ by zero outside the coordinate domain; its support is compactly contained there, so the extension is $C^5$, compactly supported, and has bounded derivatives through order five. [F5, F7, F9, F10, F11, F21, given, construct, algebra]

2.1 The support of $\chi_r$ lies in the radius-$2r$ ball, where the preceding derivative estimate holds; outside it the derivative of the extended product is zero. The global derivative bound and [F10] make the cut-off remainder globally Lipschitz with constant at most $C'r$. Taking $r$ small makes this constant the required $\varepsilon$, while the cutoff equals one on the radius-$r$ ball. Hence solutions staying in that smaller ball solve the original equation. [F9, F10, step 1.2, algebra]

3.1 Let $E_{\rm ext}:=(E_c\times\mathbb R)\oplus E_s\oplus E_u$, identified with $\mathbb R^{d+1}$ by the invariant splitting in step 1.1 and equipped with the transported Euclidean norm; [F14] makes it complete and [F3] makes $\mathcal C_\eta(E_{\rm ext})$ complete for every $\eta>0$. Choose $\eta>0$ with $\eta_6:=3^6\eta<\gamma$ and put $\eta_j=3^j\eta$ for $0\le j\le6$. For each center initial value $\xi\in E_c\times\mathbb R$, define a map on $\mathcal C_{\eta_0}(E_{\rm ext})$ by $v(t)=e^{A_ct}\xi+\int_0^t e^{A_c(t-s)}N_c(v(s),w(s))\,ds$, $w_s(t)=\int_{-\infty}^t e^{A_s(t-s)}N_s(v(s),w(s))\,ds$, and $w_u(t)=-\int_t^\infty e^{A_u(t-s)}N_u(v(s),w(s))\,ds$, where $v(t)\in E_c\times\mathbb R$ and $w(t)=(w_s(t),w_u(t))$. The cut-off remainder is bounded, so these integrals define elements of the weighted space. For a weight $\delta<\gamma$, the center integral difference is bounded by $K\varepsilon/\delta$ and each hyperbolic integral difference by $K\varepsilon/(\gamma-\delta)$. Choose the cutoff radius in step 2.1 small enough that $K\varepsilon(1/\eta_j+2/(\gamma-\eta_j))<1$ for all $0\le j\le6$. In particular the map is a contraction on $\mathcal C_{\eta_0}(E_{\rm ext})$. [F2, F3, F14, step 1.1, step 2.1, given, algebra]

4.1 By [F4], for each $\xi$ there is a unique fixed trajectory $\Gamma_\xi$ in this weighted space. For each $\sigma\in\{s,u\}$, splitting the corresponding improper integral at a finite time $t_0$ and using the semigroup identity from step 1.1 gives $w_\sigma(t)=e^{A_\sigma(t-t_0)}w_\sigma(t_0)+\int_{t_0}^t e^{A_\sigma(t-s)}N_\sigma(\Gamma_\xi(s))\,ds$; for $\sigma=u$ this uses the minus sign in the defining future integral and the oriented integral from $t_0$ to $t$. For the center component, factor $e^{A_c(t-s)}=e^{A_ct}e^{-A_cs}$ in its integral formula. The finite-interval integrands are continuous; componentwise [F6] differentiates their primitives, and [F7], [F21] differentiate the products with the linear flows. Thus $\Gamma_\xi$ solves the cut-off differential equation and has center coordinate $\xi$ at time zero. [F3, F4, F6, F7, F21, step 1.1, step 3.1, algebra]

5.1 Let $X_j:=\mathcal C_{\eta_j}(E_{\rm ext})$ for $0\le j\le6$, and let $\mathcal K$ denote the three integral operators in step 3.1. Write $T_\xi(u)=\iota_c\xi+\mathcal K(N\circ u)$, where $\iota_c\xi(t)=(e^{A_ct}\xi,0,0)$, and set $L_\xi:=D_uT_\xi(\Gamma_\xi)=\mathcal K\circ DN(\Gamma_\xi)$. The estimates in step 3.1 give $\|L_\xi\|_{X_j\to X_j}\le\kappa_j:=K\varepsilon(1/\eta_j+2/(\gamma-\eta_j))<1$ for every $j\le6$, so $(I-L_\xi)^{-1}=\sum_{n\ge0}L_\xi^n$ on each $X_j$. Define candidate derivatives recursively by $U_1[v]=(I-L_\xi)^{-1}\iota_cv$ and, for $2\le j\le5$, by the unique solution of $(I-L_\xi)U_j[v_1,\ldots,v_j]=\mathcal K\sum_{\pi\in\Pi_j,\,|\pi|\ge2}D^{|\pi|}N(\Gamma_\xi)[U_{|B|}[v_i:i\in B]:B\in\pi]$, where $\Pi_j$ is the set of partitions of $\{1,\ldots,j\}$. The recursion and induction make each $U_j$ symmetric multilinear in its direction arguments. In every forcing summand the positive block sizes $k_i:=|B_i|$ sum to $j$ and $\sum_i\eta_{k_i}<\eta_j$: for positive integers $a,b$, $3^a+3^b<3^{a+b}$, and iteration gives the strict inequality for every partition with at least two blocks. Since the derivatives of the cutoff remainder are bounded, each forcing term belongs to $X_j$; the Neumann series therefore defines a unique $U_j\in X_j$. [F2, F3, F4, F5, F7, F14, step 3.1, step 4.1, algebra]

6.1 Set $U_0(\xi):=\Gamma_\xi$. Subtracting the fixed-point equations gives $\|\Delta U_0\|_{X_0}\le C|\delta|$ by the contraction estimate. After moving $L_\xi\Delta U_0$ left, the Taylor remainder $\mathcal K\bigl(N(\Gamma_\xi+\Delta U_0)-N(\Gamma_\xi)-DN(\Gamma_\xi)\Delta U_0\bigr)/\delta$ tends to zero in $X_1$: on bounded time intervals this follows from continuity of $D^2N$, while on the tails it is bounded by $C|\delta|e^{2\eta_0|t|}$ and $2\eta_0<\eta_1$. The inverse of $I-L_\xi$ on $X_1$ therefore gives $D_\xi U_0=U_1$ as defined in step 5.1. [F3, F4, F5, step 3.1, step 4.1, step 5.1, algebra]

7.1 For $2\le j\le5$, write $F_{j-1}(\xi)$ for the partition forcing in step 5.1, so $(I-L_\xi)U_{j-1}(\xi)=F_{j-1}(\xi)$. Subtracting at $\xi+\delta v$ and $\xi$ gives $(I-L_\xi)\Delta U_{j-1}=(L_{\xi+\delta v}-L_\xi)U_{j-1}(\xi+\delta v)+\Delta F_{j-1}$. Inductively the same identity for each lower $U_k$ gives $\|\Delta U_k\|_{X_{k+1}}\le C|\delta|$ for $k<j-1$: the coefficient change in $L$ contributes $\Delta\Gamma$ of weight $\eta_0$ times $U_k$ of weight $\eta_k$, and each forcing difference changes either a coefficient $D^mN$ (controlled by bounded $D^{m+1}N$ through componentwise [F20]) or a lower $U$ factor. The strict partition inequality in step 5.1 bounds these products in $X_{k+1}$. Consequently the displayed right side is $O(|\delta|)$ in $X_j$, since $\eta_0+\eta_{j-1}<\eta_j$ and every forcing product has at least two positive-order factors; hence $\Delta U_{j-1}/\delta$ is bounded in $X_j$. [F5, F7, F20, F21, step 1.2, step 3.1, step 4.1, step 5.1, step 6.1, algebra]

8.1 Expand the coefficient and factor differences in step 7.1. Componentwise [F20] gives the first-order coefficient terms, the induction gives the compact-interval limits of lower difference quotients, and the chain and product rules collect the limits into exactly the partition forcing defining $U_j$ in step 5.1. On the tails, every divided coefficient term has growth exponent at most $\eta_0+\eta_{j-1}<\eta_j$, and every divided lower-factor term has exponent a sum $\sum_i\eta_{k_i}<\eta_j$ over a partition with at least two blocks. Thus the residual after subtracting the defining equation for $U_j$ is bounded uniformly by $Ce^{\sigma|t|}$ for some $\sigma<\eta_j$, and its $X_j$ tail beyond $T$ is at most $Ce^{-(\eta_j-\sigma)T}$. First choose $T$ large, then use compact-interval convergence to send $\delta$ to zero. The residual tends to zero in $X_j$, and $\|(I-L_\xi)^{-1}\|_{X_j\to X_j}\le(1-\kappa_j)^{-1}$ proves $D_\xi U_{j-1}=U_j$ for every $j\le5$. [F2, F3, F4, F5, F7, F14, F20, F21, step 1.2, step 3.1, step 4.1, step 5.1, step 7.1, algebra]

9.1 Subtract the recursion equations without division. For $j<5$, coefficient changes are controlled by bounded $D^{m+1}N$ and lower-factor changes by steps 6.1–8.1; each product has total derivative order at most $j$, so its weight exponent is below $\eta_{j+1}$ and $U_j(\xi+\delta v)\to U_j(\xi)$ in $X_{j+1}$. For $j=5$, $D^5N$ is uniformly continuous because it is continuous with compact support; split into a bounded time interval and tails, where products have exponent below $\eta_5<\eta_6$, to obtain continuity in $X_6$. Evaluation at $t=0$ is continuous on every $X_j$, so $h(\xi)=\Gamma_\xi(0)_h$ is $C^5$. All fixed points are unique; no Banach implicit-function or choice theorem is used. [F2, F3, F4, F5, F7, F14, step 1.2, step 3.1, step 4.1, step 5.1, step 6.1, step 7.1, step 8.1, algebra]

10.1 Define $h(\xi)$ to be the hyperbolic component of $\Gamma_\xi(0)$. Step 9.1 makes $h$ $C^5$. For each small $\lambda$, the constant extended trajectory $(x(t),\lambda(t))=(0,\lambda)$ solves the cut-off equation because $f(0,\lambda)=0$; it obeys the integral equations with center value $(0,\lambda)$, so uniqueness in step 4.1 gives $h(0,\lambda)=0$. At the origin, $DN(0)=0$, and the parameter derivative $E_cv$ has zero hyperbolic component, so the equation for $U_1$ gives $D_zh(0,0)=0$. If a fixed trajectory is shifted a sufficiently small time, the shifted trajectory still lies in the weighted space and solves the same integral equations with its new center value. Uniqueness in step 4.1 therefore makes the graph locally invariant. Differentiating that invariance relation using [F7] gives the displayed invariance equation. [F4, F7, step 4.1, step 5.1, step 6.1, step 9.1, given, algebra]

11.1 Since $h(0,\lambda)=0$, componentwise [F20] along $s\mapsto h(sz,\lambda)$ gives $h(z,\lambda)=\int_0^1D_zh(sz,\lambda)z\,ds$. Bounded $D^2h$ on a smaller convex neighborhood and [F10] applied componentwise to $D_zh$ give $\|D_zh(sz,\lambda)-D_zh(0,0)\|\le C(s\|z\|+|\lambda|)$; since $D_zh(0,0)=0$, integrating yields $h(z,\lambda)=O(\|z\|^2+|\lambda|\|z\|)$. If a periodic trajectory remains in the smaller neighborhood for all real time, its center component and its stable and unstable components are bounded. Letting the initial time tend to $-\infty$ in the stable variation formula and to $+\infty$ in the unstable formula removes the homogeneous terms by the exponential bounds of step 1.1. The trajectory then satisfies the fixed-point equations of step 3.1 and, by uniqueness, lies on the graph. [F10, F20, step 1.1, step 3.1, step 4.1, step 10.1, algebra]

12.1 Put $X(z,\lambda)=z+h(z,\lambda)$ and $g(z,\lambda)=f_c(z,h(z,\lambda),\lambda)$. Differentiating the invariance equation at $z=0$ gives $D_zX(0,\lambda)D_zg(0,\lambda)=A_\lambda D_zX(0,\lambda)$, since $g(0,\lambda)=0$. The derivative $D_zX(0,0)$ is the identity on $E_c$, so it remains injective for small $\lambda$; its range is therefore a two-dimensional invariant subspace. Choose pairwise disjoint disks covering the finite spectrum of $A_0$, with separate critical disks around $\pm i\omega$. These two disks cover the spectrum of $D_zg(0,0)$ as well. Since $D_zg(0,\lambda)\to D_zg(0,0)$ and $A_\lambda\to A_0$, [F13] gives the same root counts in these disks for all sufficiently small $\lambda$; otherwise a violating sequence $\lambda_n\to0$ would contradict [F13]. Thus $D_zg(0,\lambda)$ has one eigenvalue near each critical value. The restriction of $A_\lambda$ to the invariant range is conjugate to $D_zg(0,\lambda)$, hence has that pair. Applying [F13] to $A_\lambda$ shows its full spectrum has exactly one eigenvalue in each critical disk; because $A_\lambda$ is real the roots are conjugates, and [F12] identifies them as $\zeta(\lambda)$ and $\overline{\zeta(\lambda)}$. Thus the invariant plane is their span, as asserted. [F12, F13, step 9.1, step 10.1, given, algebra] ∎

## Remarks

The cutoff is only a local construction device; all conclusions are restricted to the ball where it equals one. The proof uses unique Banach fixed points and finite-dimensional spectral decompositions, not arbitrary-index choice.
