---
id: lem-forward-kolmogorov-duality-gives-reversed-martingales
kind: lemma
title: Forward Kolmogorov duality gives reversed martingales
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
page: anderson-reverse-time-diffusion
dependency_level: 1
deps:
  - def-reversed-transition-kernels-for-diffusions
  - thm-dominated-convergence
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - lem-test-function-cutoffs-and-euclidean-localization
  - thm-dynkin-pi-lambda
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pending
sources:
  references:
    - title: "B. D. O. Anderson, Reverse-time diffusion equation models, Section 5: forward and backward Kolmogorov equations"
      url: "https://eva.fcien.udelar.edu.uy/pluginfile.php/166428/mod_resource/content/1/1982_andersonREVERSE-TIME%20DIFFUSION%20EQUATION%20MODELS.pdf"
---

## Statement

Let $X$ be a continuous Markov process on $[0,T]$ in $\mathbb R^d$ with positive transition densities $q$ and positive $C^{1,2}$ marginal densities $p$. Suppose its marginal and transition identities define the Bayes-reversed kernels. Write $L_r f=b_{r,i}\partial_i f+\tfrac12a_{r,ij}\partial_{ij}f$, with Borel coefficients and symmetric $a$, and $L_r^*z=-\partial_i(b_{r,i}z)+\tfrac12\partial_i\partial_j(a_{r,ij}z)$. Assume $\partial_rp_r=L_r^*p_r$ classically. Put $A_{ij}(r,x)=p_r(x)a_{r,ij}(x)$, suppose its first state derivatives exist, and define $C_i=-p_rb_{r,i}+\sum_j\partial_jA_{ij}$. Impose the following forward analytic hypotheses. For every compact $K\subset\mathbb R^d$,
$$\int_0^T\!\int_K\left[\sum_i|C_i|+\sum_{i,j}p_r|a_{r,ij}|\right]dx\,dr<\infty.$$
For every $t\in(0,T]$ and $f\in C_c^\infty(\mathbb R^d)$, the actual forward conditional expectation
$$g_{t,f}(r,x)=\int q(r,x;t,y)f(y)dy,\qquad 0<r<t,$$
has a $C^{1,2}$ version on $(0,t)\times\mathbb R^d$ satisfying the backward Kolmogorov equation $\partial_rg_{t,f}+L_rg_{t,f}=0$. For every $\phi\in C_c^\infty(\mathbb R^d)$, assume the spatial adjoint identity
$$\int p_r\phi L_rg_{t,f}\,dx=\int g_{t,f}L_r^*(p_r\phi)\,dx$$
holds for almost every $r\in(0,t)$; the integrals are finite. These are assumptions on the original forward transition family, not on a reversed process.

Define $D_r\phi=p_r^{-1}\{L_r^*(p_r\phi)-\phi L_r^*p_r\}$, using the classical product rule. Then $Y_u=X_{T-u}$, with its natural reversed filtration $\mathcal G_u=\sigma(Y_v:0\le v\le u)$, has the Bayes-reversed kernels and, for each such $\phi$,
$$\phi(Y_u)-\phi(Y_0)-\int_0^u D_{T-v}\phi(Y_v)dv$$
is a true martingale. In particular $D_{T-u}$ is its extended martingale generator on compact smooth tests. No pointwise small-time transition-quotient limit is asserted.

## Statement references

[Anderson, Section 5, printed pp. 322–324](https://eva.fcien.udelar.edu.uy/pluginfile.php/166428/mod_resource/content/1/1982_andersonREVERSE-TIME%20DIFFUSION%20EQUATION%20MODELS.pdf): uses both forward and backward Kolmogorov equations. The finite-time martingale identity under the explicit hypotheses above is proved below.

## Facts & Assumptions

**Given:** the forward process, densities, operators and analytic hypotheses in the Statement.

[F1] The marginal and Chapman–Kolmogorov identities make the Bayes kernels probability kernels; Bayes' formula identifies them with the reversed conditional laws. [[def-reversed-transition-kernels-for-diffusions]]

[F2] Fubini applies to an absolutely integrable time-state integrand, and dominated convergence applies to random variables bounded by an integrable random variable. [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]] [[thm-dominated-convergence]]

[F3] Given compact $K$ in an open set $O\subset\mathbb R^d$, there is a smooth compactly supported function in $O$, between zero and one, equal to one near $K$. [[lem-test-function-cutoffs-and-euclidean-localization]]

[F4] A lambda-system containing a generating pi-system contains the generated sigma-algebra. [[thm-dynkin-pi-lambda]]

## Proof
**Given:** all hypotheses and notation in the Statement.

1.1 The adjoint product rule and symmetry give $\displaystyle p_rD_r\phi=(-p_rb_{r,i}+\partial_jA_{ij})\partial_i\phi+\tfrac12A_{ij}\partial_{ij}\phi.$ If $K$ contains the support of $\phi$, boundedness of its derivatives and the first displayed integrability hypothesis imply $\displaystyle \int_0^T E|D_r\phi(X_r)|dr=\int_0^T\!\int_Kp_r|D_r\phi|dxdr<\infty.$ Thus every random time integral below is integrable. Bayes' formula gives the reversed Markov kernels and their composition by [F1]. [given, F1, F2, algebra]

2.1 Fix $0<s<t\le T$ and $f\in C_c^\infty$, and write $g=g_{t,f}$. On every compact subinterval of $(0,t)$, the product $p_r(x)\phi(x)g(r,x)$ has a continuous time derivative and compact state support. The ordinary fundamental theorem of calculus and [F2] therefore differentiate its state integral. The forward marginal equation, backward equation and assumed spatial adjoint identity yield $\displaystyle \frac{d}{dr}\int p_r\phi g_r dx=\int\phi g_rL_r^*p_r dx-\int p_r\phi L_rg_r dx=-\int p_rg_rD_r\phi dx.$ This last function is integrable on $(0,t)$ because $|g_r|\le\|f\|_\infty$ and step 1.1 holds. Also $\int p_r\phi g_r dx=E[\phi(X_r)f(X_t)]$. Integrate between interior times and then approach $s$ and $t$; continuity of $X$ and boundedness of $\phi,f$ justify the endpoint limits by [F2]. The same argument lets $s\downarrow0$. Hence, for $0\le s<t\le T$, $\displaystyle E\!\left[f(X_t)\left\{\phi(X_s)-\phi(X_t)-\int_s^tD_r\phi(X_r)dr\right\}\right]=0.$ Fubini in the last term is justified by step 1.1 and $\|f\|_\infty$. [given, F2, step 1.1, algebra]

3.1 Denote the integrable expression in braces by $Z$. For an open $O$, put $K_n=\{x:|x|\le n,\ \operatorname{dist}(x,O^c)\ge1/n\}$, taking distance to the empty set as infinity. Each $K_n$ is compact in $O$, and every $x\in O$ belongs to all sufficiently late $K_n$. Take the cutoffs $f_n$ by the explicit rational-ball construction in [F3] (using the least code of a finite rational cover at each $n$), supported in $O$, with $0\le f_n\le1$ and $f_n=1$ on $K_n$. Then $f_n\to1_O$ pointwise. Step 2.1 and dominated convergence with bound $|Z|$ give $E[Z1_{\{X_t\in O\}}]=0$. This includes $O=\mathbb R^d$. The Borel sets $B$ for which $E[Z1_{\{X_t\in B\}}]=0$ form a lambda-system, since $Z$ is integrable and its total expectation is zero. Open sets are a generating pi-system, so [F4] proves $E[Z\mid X_t]=0$. [F2, F3, F4, step 2.1]

4.1 Set $s=T-v$ and $t=T-u$ for $0\le u<v\le T$. Step 3.1 gives the zero conditional expectation of the compensated increment between $u$ and $v$ given $Y_u$. The reversed Markov property from step 1.1 makes the same conditional expectation given $\mathcal G_u$ zero: first this holds for bounded functions of finitely many future reversed coordinates by the Markov factorization, then bounded monotone approximation gives it for the future reversed path segment, and [F2] and step 1.1 permit its integrable time integral. Thus the displayed compensated process is a true $\mathcal G$-martingale. The operator is its extended martingale generator by this identity. [F1, F2, step 1.1, step 3.1] ∎
