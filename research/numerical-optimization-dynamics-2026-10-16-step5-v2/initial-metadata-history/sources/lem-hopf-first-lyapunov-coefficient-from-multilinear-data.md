---
id: lem-hopf-first-lyapunov-coefficient-from-multilinear-data
kind: lemma
title: The first Lyapunov coefficient is the frequency-normalized radial cubic Hopf coefficient
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-hopf-normal-form-data
  - lem-local-center-manifold-for-a-simple-hopf-point
  - lem-hopf-smooth-eigenpair-branch
  - thm-parametrized-implicit-function-theorem-with-higher-regularity
  - thm-chain-rule-for-total-derivatives
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Yuri A. Kuznetsov, Elements of Applied Bifurcation Theory, 2nd ed., Springer
      url: https://wwwf.imperial.ac.uk/~dturaev/kuznetsov.pdf
      locator: Chapter 3, §§3.4–3.5, printed pp. 86–101, Poincare normal form and formula for the first Lyapunov coefficient
    - title: J. E. Marsden and M. McCracken, The Hopf Bifurcation and Its Applications, Springer-Verlag, 1976
      url: https://authors.library.caltech.edu/records/satwa-8xa89/files/Hopf.pdf
      locator: Sections 3B–3C, printed pp. 91–104, Hopf reduction and stability analysis
    - title: Yuri A. Kuznetsov, Andronov-Hopf Bifurcation, Scholarpedia 1(10):1858 (2006)
      url: http://www.scholarpedia.org/article/Andronov-Hopf
      locator: First Lyapunov coefficient formula; orientation only, not a proof supplier
verification:
  precheck: pass
---

## Statement

Assume $f$ is $C^5$ near $(0,0)$ and its Hopf data satisfy [[def-hopf-normal-form-data]]. Since $A=D_xf(0,0)$ has no zero eigenvalue, let $\xi(\lambda)$ be the unique local $C^5$ equilibrium branch with $\xi(0)=0$ supplied by the parameterized implicit-function theorem, and set $A_\lambda:=D_xf(\xi(\lambda),\lambda)$. This matrix path is $C^4$. Let $\zeta(\lambda)=\beta(\lambda)+i\omega(\lambda)$ be its $C^4$ simple critical eigenvalue branch, with $\beta(0)=0$, $\omega(0)=\omega_0$, and $\beta'(0)\ne0$. After translating by $\xi(\lambda)$, restricting to the parameterized center manifold of [[lem-local-center-manifold-for-a-simple-hopf-point]], and making a near-identity complex coordinate change, the reduced equation has the form

$$\dot z=(\beta+i\omega(\beta))z+\frac12G_{21}z|z|^2+R(z,\bar z,\beta),\qquad R=O(|z|^4+|\beta||z|^3).$$

Thus its radial cubic coefficient at $\beta=0$ is $\operatorname{Re}(G_{21})/2=\omega_0\ell_1$, where $\ell_1$ is the first Lyapunov coefficient defined in [[def-hopf-normal-form-data]]. The remainder and its first derivative satisfy the corresponding bounds $D_zR=O(|z|^3+|\beta||z|^2)$.

## Facts & Assumptions

**Given:** The vector field, simple critical eigenpair, normalization, derivatives $A,B,C$, and parameter crossing in the Statement.

[F1] [[def-hopf-normal-form-data]]: $Aq=i\omega_0q$, $A^*p=-i\omega_0p$, $q^*q=p^*q=1$, and
$$G_{21}=p^*\!\left(C(q,q,\bar q)-2B(q,A^{-1}B(q,\bar q))+B(\bar q,(2i\omega_0I-A)^{-1}B(q,q))\right),\quad \ell_1=\operatorname{Re}G_{21}/(2\omega_0).$$

[F2] [[lem-local-center-manifold-for-a-simple-hopf-point]]: the extended parameter system has a $C^5$ locally invariant center graph whose tangent plane at each parameter is the continued critical eigenspace; every sufficiently small periodic trajectory in the neighborhood lies on it.

[F3] [[thm-parametrized-implicit-function-theorem-with-higher-regularity]]: an invertible derivative in the solved variables gives a unique smooth local implicit branch.

[F4] [[lem-hopf-smooth-eigenpair-branch]]: the simple critical eigenvalue and normalized left and right eigenvectors have the regularity of the matrix path, with $\lambda_c'(0)=p^*A'(0)q$; here they are $C^4$ because $f$ is $C^5$.

[F5] [[thm-chain-rule-for-total-derivatives]]: derivatives of the center-graph composition are computed by the chain rule.

## Proof

**Given:** The data and hypotheses in the Statement.

1.1 Because $A$ has no zero eigenvalue, $D_xf(0,0)=A$ is invertible. Apply [F3] to $f(x,\lambda)=0$ to obtain the local $C^5$ equilibrium branch $\xi(\lambda)$; translate $x$ by $\xi(\lambda)$, so the translated field vanishes at $x=0$ for each small $\lambda$. Its Jacobian path is $C^4$. By [F4] the critical eigenpair is $C^4$ in $\lambda$ and $\beta'(0)=\operatorname{Re}(p^*A'(0)q)\ne0$. Apply [F3] to $\operatorname{Re}\zeta(\lambda)-\widehat\beta=0$ in solved variable $\lambda$; its derivative is nonzero, so $\widehat\beta$ is a valid local parameter, which we relabel $\beta$. [F3, F4, given, algebra]

1.2 At $\beta=0$, parameterize the center graph by $u=p^*x$. From $p^*A=i\omega_0p^*$ and $A\bar q=-i\omega_0\bar q$ we get $2i\omega_0p^*\bar q=0$, hence $p^*\bar q=0$; also $p^*q=1$. Its embedding is $H_0(u,\bar u)=uq+\bar u\bar q+h(u,\bar u)$ with $h$ in the hyperbolic complement. Its reduced equation is $\dot u=i\omega_0u+g_2(u,\bar u)+g_3(u,\bar u)+O(|u|^4)$, where $g_j$ is homogeneous of degree $j$. The graph and reduced equation have the required derivatives by [F2] and the chain rule [F5]. [F1, F2, F5, given, algebra]

2.1 Make a quadratic coordinate change $u=w+\sum_{j+k=2}c_{jk}w^j\bar w^k$. Along the linear flow, $D(w^j\bar w^k)(i\omega_0w,-i\omega_0\bar w)=(j-k)i\omega_0w^j\bar w^k$; substitution therefore changes that coefficient by $-(j-k-1)i\omega_0c_{jk}$. This divisor is nonzero for every $j+k=2$, so choose $c_{jk}$ to remove all quadratic terms. Use conjugate corrections in the conjugate equation to preserve the real system. A cubic change with the same divisor removes every cubic term except $(j,k)=(2,1)$, whose divisor is zero. These changes are local diffeomorphisms because their derivative at zero is the identity; [F3] applies to their inverse equations. The resulting equation is $\dot w=i\omega_0w+\tfrac12G_{21}w^2\bar w+O(|w|^4)$. Composing the graph embedding with the changes gives a full-space center-manifold parameterization $H(w,\bar w)$. [F2, F3, step 1.2, algebra]

3.1 Write $H(w,\bar w)=wq+\bar w\bar q+\tfrac12h_{20}w^2+h_{11}w\bar w+\tfrac12h_{02}\bar w^2+H_3(w,\bar w)+O(|w|^4)$, where $H_3$ is homogeneous cubic. The invariance equation is $D H\,\dot w=f(H)$. With $f(x,0)=Ax+\tfrac12B(x,x)+\tfrac16C(x,x,x)+O(\|x\|^4)$ and no quadratic terms in $\dot w$, comparison of degree-two coefficients gives $(2i\omega_0I-A)h_{20}=B(q,q)$ and $Ah_{11}=-B(q,\bar q)$. Zero and $2i\omega_0$ are not eigenvalues of $A$: its only imaginary-axis eigenvalues are $\pm i\omega_0$. Thus both operators are invertible and $h_{20}=(2i\omega_0I-A)^{-1}B(q,q)$, $h_{11}=-A^{-1}B(q,\bar q)$. [F1, F2, F5, step 2.1, given, algebra]

4.1 Let $h_{21}$ be the coefficient of $w^2\bar w$ in $H_3$. Comparing that monomial in $D H\,\dot w=f(H)$ gives $(i\omega_0I-A)h_{21}+\tfrac12qG_{21}=\tfrac12C(q,q,\bar q)+B(q,h_{11})+\tfrac12B(\bar q,h_{20})$. The derivative term on the left has factor $i\omega_0$ because $w^2\bar w$ evolves with linear frequency $(2-1)i\omega_0$. Left multiplication by $p^*$ annihilates $(i\omega_0I-A)h_{21}$ and uses $p^*q=1$, yielding $G_{21}=p^*\!\left(C(q,q,\bar q)+2B(q,h_{11})+B(\bar q,h_{20})\right)$. Substituting step 3.1's formulas gives exactly the expression in [F1]. [F1, F2, step 3.1, algebra]

5.1 By [F2], the tangent plane of the graph is spanned by $q(\beta),\bar q(\beta)$ from [F4]. The coordinate $z=p(\beta)^*x$ is valid there because $p(\beta)^*q(\beta)=1$ and $p(\beta)^*\bar q(\beta)=0$; the latter follows from $p^*A=\zeta p^*$, $A\bar q=\bar\zeta\bar q$, and $\zeta\ne\bar\zeta$. Hence the linear center equation is exactly $\dot z=(\beta+i\omega(\beta))z$. The center graph is $C^5$ and the normalized left and right eigenpair are $C^4$ in the parameter. The coordinate changes are obtained by solving finite-dimensional homological equations whose divisors stay nonzero for small $\beta$, so their coefficients have at least $C^2$ parameter dependence. The resonant coefficient is $G_{21}+O(|\beta|)$; its change contributes $O(|\beta||z|^3)$ and its $z$-derivative contributes $O(|\beta||z|^2)$. Taylor's theorem for the $C^5$ reduced vector field gives an $O(|z|^4)$ remainder with derivative $O(|z|^3)$. Combining these terms yields $R=O(|z|^4+|\beta||z|^3)$ and $D_zR=O(|z|^3+|\beta||z|^2)$. [F2, F4, F5, step 4.1, given, algebra]

6.1 Finally $\operatorname{Re}(G_{21}/2)=\omega_0\ell_1$ by [F1]. Thus the real radial cubic coefficient is the stated value; step 5.1 establishes the normal form and its bounds. [F1, step 5.1, algebra] ∎
