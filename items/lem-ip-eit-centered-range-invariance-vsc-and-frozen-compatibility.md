---
id: lem-ip-eit-centered-range-invariance-vsc-and-frozen-compatibility
kind: lemma
title: The full collared EIT class satisfies the centered range and source interfaces
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - lem-ip-centered-neumann-sequence-map-and-differentiability
  - lem-ip-sharp-centered-eit-hone-logarithmic-stability
  - lem-ip-collared-sobolev-besov-source-functional-cutoff
  - lem-ip-logarithmic-index-conjugate-and-parameter-rates
  - def-ip-relaxed-range-invariance-objective
  - lem-ip-joint-range-invariance-vsc-estimate
  - lem-ip-frozen-newton-one-step-error-recursion
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Barbara Kaltenbacher, Convergence rates under a range invariance condition with application to electrical impedance tomography
      url: https://arxiv.org/pdf/2403.18704
      locator: Example 4, Theorem 10, and Section 2.4; all interfaces and the source exponent are proved locally here
    - title: Frederic Weidling, Variational Source Conditions and Conditional Stability Estimates for Inverse Problems in PDEs
      url: https://univerlag.uni-goettingen.de/bitstream/handle/3/isbn-978-3-86395-411-6/weidling.pdf?sequence=1
      locator: Theorems 6.11–6.15
dependency_level: 6
---

## Statement

Assume the Axiom of Choice, Countable Choice and Dependent Choice. Let $\Omega=B_1\subset\mathbb R^3$, $0<\rho<1$, $0<m<1<M$, and $5/2<s_1<7/2$. Use the exact intrinsic $H^{s_1}(\Omega)$ Hilbert norm from the collared source-functional lemma, and put
$$V=\{a\in H^{s_1}(\Omega;\mathbb R):a=0\text{ a.e. on }\Omega\setminus B_\rho\},\qquad \mathcal C=\{\sigma\in1+V:m\le\sigma\le M\}.$$
Let $\sigma_0,\sigma^\dagger\in\mathcal C$, and assume $\sigma^\dagger\in B^{s_2}_{2,\infty}(\Omega)$ for $s_1<s_2<2s_1-1$. Set $a^\dagger=\sigma^\dagger-\sigma_0$, and choose $R>\|a^\dagger\|_V$. Write $Y=\ell^2(L^2(S^2;\mathbb C))$ for the centered mean-zero Neumann voltage sequence space, regarded as a real Hilbert space, and give $X=Z=V\times Y$ the sum norm. Let $X_0=V\times\{0\}$, $D=X$, $x_0=(0,0)$ and $P(a,z)=(0,z)$.

There is a globally Lipschitz, continuously Fréchet differentiable map $\Gamma:V\to Y$ with globally Lipschitz derivative, agreeing for $\sigma_0+a\in\mathcal C$ with the centered physical observation $((\mathscr N_{\sigma_0+a}-\mathscr N_1)Y_{\ell k})_{\ell,k}$. Define
$$T(a)=\Gamma(a)-\Gamma(0)-\Gamma'(0)a,\quad r(a,z)=(a,z+T(a)),\quad K(a,b)=\Gamma'(0)a+b,\quad F(a,z)=\Gamma(a)+z.$$
Then $F(x)-F(x_0)=Kr(x)$ on $D$, $r$ and its inverse $r^{-1}(a,b)=(a,b-T(a))$ are globally Lipschitz, and these facts hold on the admitted set
$$U=\{(a,z):\sigma_0+a\in\mathcal C,\ \|a\|_V<R,\ \|z\|_Y<R\}.$$
The projected points $(I-P)r^{-1}(\widehat r)$ belong to $U\cap X_0$ for $\widehat r\in r(U)$.

On the ambient linear space $V$ define the proper convex regularizer
$$\check R(a)=\tfrac12\|\sigma_0+a\|_{s_1,\Omega}^2+I_{\mathcal C}(\sigma_0+a),$$
where the indicator is zero on $\mathcal C$ and $+\infty$ elsewhere. On every admitted physical coefficient this is exactly the original quadratic Sobolev penalty. The functional $\xi^\dagger(v)=(\sigma^\dagger,v)_{s_1,\Omega}$ is a subgradient at $a^\dagger$, and its Bregman distance on $\mathcal C-\sigma_0$ is exactly $\frac12\|a-a^\dagger\|_V^2$. On every fixed sublevel containing the truth, the VSC holds with $b=3/4$ and a continuous nondecreasing concave truncated logarithmic index
$$\psi(u)=C[\log(1/u)]^{-\nu}\quad(0<u\le u_0),\qquad \psi(0)=0,\qquad \nu=\frac{(s_2-s_1)(2s_1-3)}{s_2-1},$$
continued constantly above a sufficiently small $u_0>0$. Its subadditivity constant may be taken as $C_\psi=1$.

Put $L_T=\operatorname{Lip}(T)$ and let $L=\operatorname{Lip}(\Gamma')$. For $Q(\widehat r,\widehat r')=\|\widehat r-\widehat r'\|_Z$, the projection-coupling constant may be taken as $1+L_T$, and
$$\|r(x_1)-r(x_2)-r'(x_2)(x_1-x_2)\|_Z\le LR\|r(x_1)-r(x_2)\|_Z\qquad(x_1,x_2\in U).$$
For the frozen method choose $C_P\ge2\|K\|^2\operatorname{Lip}(r)^2$, $\gamma>1$ and $R_P(z)=\gamma\psi(C_P\|z\|_Y^2)$. Then the required compatibility bound holds with
$$\widetilde C_Q=\max\left\{4(1+L_T)^2,\frac{2R^2}{\psi(C_PR^2)}\right\}.$$
In particular, the structural hypotheses of the joint and frozen one-step estimates hold with $p=2$, the displayed exact regularizer, $R_P=0$ for the joint method, and the displayed $R_P$ for the frozen method. For frozen rates additionally require $LR<c_{\rm tcr}<1/\sqrt{20}$, choose $c_{\beta\alpha}\le\min\{1/4,\gamma-1\}/(4\widetilde C_Q)$, and use the remaining parameter, tolerance and stopping conditions of the frozen rate theorem. This small-neighborhood hypothesis is local around the chosen initial conductivity; it restricts neither the stated Besov truth class nor its logarithmic exponent.

## Statement references

[[lem-ip-centered-neumann-sequence-map-and-differentiability]]

[[lem-ip-sharp-centered-eit-hone-logarithmic-stability]]

[[lem-ip-collared-sobolev-besov-source-functional-cutoff]]

[[def-ip-relaxed-range-invariance-objective]]

[[lem-ip-joint-range-invariance-vsc-estimate]]

[[lem-ip-frozen-newton-one-step-error-recursion]]

[Kaltenbacher, Example 4 and Theorem 10](https://arxiv.org/pdf/2403.18704)

## Facts & Assumptions

**Given:** The choice assumptions and full conductivity, Sobolev, Besov, collar and local-admission data in the Statement.

[F1] The centered physical map on uniformly elliptic collared $L^\infty$ coefficients is globally Lipschitz on each fixed ellipticity class, is continuously Fréchet differentiable there, and has a uniform Lipschitz derivative. [[lem-ip-centered-neumann-sequence-map-and-differentiability]]

[F2] Uniform collared $H^{s_1}$ classes satisfy $H^1$ stability with modulus $O([\log(1/\delta)]^{-(s_1-3/2)})$ in their centered sequence distance. [[lem-ip-sharp-centered-eit-hone-logarithmic-stability]]

[F3] For the exact intrinsic quadratic penalty, the $H^1$ modulus and $B^{s_2}_{2,\infty}$ truth imply a VSC with coefficient $3/4$ and logarithmic exponent $\nu$ in the Statement. The proof treats the exact domain inner product. [[lem-ip-collared-sobolev-besov-source-functional-cutoff]]

[F4] Truncated logarithmic indices are concave when the truncation point is small enough, and their conjugates satisfy $H(q)\sim C(\log q)^{-\nu}$. [[lem-ip-logarithmic-index-conjugate-and-parameter-rates]]

[A1] All three choice assumptions are retained from [F1]–[F4]. [[def-axiom-of-choice]], [[def-countable-choice]], [[def-dependent-choice]]

## Proof

**Domains for the generic estimates.** The canonical maps $i_V:V\to X_0$, $i_V(a)=(a,0)$, and $i_Y:Y\to P(X)$, $i_Y(z)=(0,z)$, are linear isometries onto $X_0=V\times\{0\}$ and $P(X)=\{0\}\times Y$. In the generic one-step estimates, transport the regularizer and subgradient by
$$\check R_0(i_V(a)):=\check R(a),\qquad \xi_0^\dagger(i_V(v)):=\xi^\dagger(v),$$
and the frozen penalty by $R_{P,0}(i_Y(z)):=\gamma\psi(C_P\|z\|_Y^2)$. The map $i_V$ preserves the dual pairing, so the subgradient inequality verified in step 3.2 transports to $\xi_0^\dagger\in\partial_{X_0}\check R_0(i_V(a^\dagger))$. It also preserves the Bregman distance:
$$D_{\check R_0}^{\xi_0^\dagger}(i_V(a),i_V(a^\dagger))=D_{\check R}^{\xi^\dagger}(a,a^\dagger).$$
The penalty is a functional on $P(X)$ under $i_Y$ and has the required norm there. These are the domains used by the generic joint and frozen estimates.

1.1 The space $V$ is closed in the intrinsic Sobolev Hilbert space, since convergence there implies $L^2$ convergence and preserves vanishing on the collar. For its elements, zero extension is bounded into $H^{s_1}(\mathbb R^3)$ by [F3]. Fourier Cauchy–Schwarz gives $\|a\|_\infty\le C\|a\|_V$ because $s_1>3/2$. Thus $V$ embeds continuously into the bounded collared coefficient space. The set $\mathcal C-\sigma_0$ is convex and closed in $V$: convexity preserves the pointwise bounds, and uniform convergence from this embedding preserves them under a norm limit. [A1, F3, given, algebra]

2.1 Choose a smooth scalar function $\vartheta$ with $0\le\vartheta\le1$, equal to one on $[m,M]$ and zero outside $(m/2,2M)$, and set $g(t)=1+\int_1^t\vartheta(u)du$. Then $g(t)=t$ on $[m,M]$, $g(1)=1$, and $m/2\le g(t)\le2M$ globally. All its first and second derivatives are bounded. Put $b(a):=g(\sigma_0+a)-1$. Since $\sigma_0+a=1$ outside $B_\rho$ and $g(1)=1$, $b(a)\in E$ for every $a\in V$. Moreover, $a\mapsto b(a)$ is globally Lipschitz from $V$ into $E$ and continuously Fréchet differentiable, with derivative $b'(a)h=g'(\sigma_0+a)h$ and globally Lipschitz derivative; its Taylor remainder is bounded by $\frac12\|g''\|_\infty\|h\|_\infty^2$. Use the centered map [F1] with fixed strict ellipticity bounds $m_*:=m/4$ and $M_*:=4M$, and denote it by $G_{m_*,M_*}$. Since $m_*<m/2\le1+b(a)\le2M<M_*$, every $b(a)$ is admissible for that map. Define explicitly $$\Gamma(a):=G_{m_*,M_*}(b(a))=G_{m_*,M_*}\bigl(g(\sigma_0+a)-1\bigr)\qquad(a\in V).$$ The chain rule gives $\Gamma'(a)h=G'_{m_*,M_*}(b(a))[g'(\sigma_0+a)h]$. The bounded and Lipschitz derivatives of $b$ and the Lipschitz derivative of the centered supplier give all the asserted global bounds for $\Gamma$ and $\Gamma'$. For $\sigma_0+a\in\mathcal C$, $g(\sigma_0+a)=\sigma_0+a$, so this formula agrees with the centered physical observation. [F1, step 1.1, choose, algebra]

3.1 The identities for $K,r,F$ and the inverse follow by direct substitution. The map $T$ is globally Lipschitz with $L_T\le\operatorname{Lip}(\Gamma)+\|\Gamma'(0)\|$, so both $r$ and $r^{-1}$ have Lipschitz constant at most $1+L_T$ in the sum norm. In particular $\|Pr^{-1}(a,b)-Pr^{-1}(a',b')\|\le(1+L_T)\|(a,b)-(a',b')\|$. The restriction of a bijection to $U$ is a bijection onto $r(U)$; its projected inverse point has the same coefficient and zero artificial voltage, hence remains in $U\cap X_0$. The extension to all of $D=X$ supplies the global factorization domain required by the original generic hypotheses without changing the physical forward map on any admitted point. [step 2.1, given, algebra]

3.2 The indicator of the convex set in step 1.1 is convex, and adding the quadratic functional makes $\check R$ proper and nonnegative. For any admitted $a$, expansion of its square gives $\check R(a)-\check R(a^\dagger)-\xi^\dagger(a-a^\dagger)=\frac12\|a-a^\dagger\|_V^2$; outside the set the subgradient inequality is automatic because the left value is infinite. This proves the asserted subgradient and exact Bregman formula. On a fixed sublevel $\check R(a)\le R_0$, the coefficients have bounded intrinsic $H^{s_1}$ norm; subtracting the constant background and zero-extending gives a uniform whole-space bound by [F3]. Thus [F2] applies uniformly on that sublevel, including the truth. Applying [F3] yields the VSC source term $C[\log(1/\|\Gamma(a)-\Gamma(a^\dagger)\|)]^{-\nu}$ for small data differences. Replacing the norm argument by its square changes only a fixed constant in the logarithm. Choose $u_0$ small enough and then enlarge $C$ to dominate the source inequality also at larger data differences; on the fixed sublevel the absolute linear pairing is uniformly bounded. The truncated logarithmic index in [F4] is then a valid concave VSC index on the entire sublevel. [F2, F3, F4, step 1.1, step 2.1, algebra]

4.1 Concavity and $\psi(0)=0$ imply subadditivity: for positive $a+b$, $\psi(a)\ge a\psi(a+b)/(a+b)$ and $\psi(b)\ge b\psi(a+b)/(a+b)$; summing gives $\psi(a+b)\le\psi(a)+\psi(b)$. Hence $C_\psi=1$. The derivative remainder of $r$ has only the second component $\Gamma(a_1)-\Gamma(a_2)-\Gamma'(a_2)(a_1-a_2)$. Integrating the Lipschitz derivative along the segment gives norm at most $L\|a_1-a_2\|_V^2/2$. Since $\|a_i\|<R$ and the first component of $r(x_1)-r(x_2)$ is $a_1-a_2$, this is at most $LR\|r(x_1)-r(x_2)\|_Z$. No differentiability of the boundary of $\mathcal C$ is needed, since the map was differentiated on the full ambient space. [step 2.1, step 3.1, step 3.2, algebra]

5.1 If $\widehat r=r(a,z)\in r(U)$, then $\|\widehat r-r(a^\dagger,0)\|_Z\le(1+L_T)\|a-a^\dagger\|_V+\|z\|_Y$. Squaring gives a bound by $4(1+L_T)^2D_{\check R}^{\xi^\dagger}(a,a^\dagger)+2\|z\|_Y^2$. Because $\|z\|<R$, concavity gives $\psi(C_P\|z\|^2)\ge(\|z\|^2/R^2)\psi(C_PR^2)$. The displayed $\widetilde C_Q$ therefore proves the full frozen compatibility inequality for every admitted range variable. Its denominator is positive since the logarithmic index is positive away from zero. The stated $R_P$ has the required lower bound with equality and vanishes at zero. [step 3.1, step 3.2, step 4.1, given, algebra]

6.1 All projected coefficients in $U$ have $\|\sigma_0+a\|_{s_1,\Omega}\le\|\sigma_0\|_{s_1,\Omega}+R$, so one fixed $R_0$ covers their regularizer values and the truth. The preceding steps verify every structural range, domain, Lipschitz, projection, subgradient, VSC, compatibility and penalty hypothesis. With $p=2$ and $C_\psi=1$, the frozen constants are $t=1/4-2c_{\rm tcr}^2$, $v=3c_{\rm tcr}^2$, $\lambda=1/2$ and $\overline C=4$. The bound $c_{\rm tcr}<1/\sqrt{20}$ makes $t>0$ and $q=v/t<1$. The displayed choice of $c_{\beta\alpha}$ is exactly the required linked-parameter bound because $1-b=1/4$ and $\gamma-C_\psi=\gamma-1$. Thus the original generic estimates apply on the admitted set with their remaining stated algorithmic hypotheses. The ambient extension and indicator do not change any admitted objective value. [step 3.1, step 3.2, step 4.1, step 5.1, given, algebra] ∎

