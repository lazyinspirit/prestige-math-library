---
id: lem-nrqmx-finite-maslov-phase-parity
kind: lemma
domain: mathematics
title: Maslov phase parity in a finite generating chart
status: draft
origin: pipeline
dependency_level: 2
deps: [def-nrqmx-finite-mode-symplectic-data, lem-nrqmx-finite-symplectic-implementers, lem-nrqmx-finite-symplectic-generator-factorization, def-fourier-transform-on-l-one-of-rn, thm-plancherel, cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space, cor-c-one-change-of-variables-for-l-one-functions, def-absolutely-continuous-function, thm-choice-implies-dependent-implies-countable-choice, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, thm-first-fundamental-theorem-of-calculus-for-l-one, def-axiom-of-choice]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  thm-first-fundamental-theorem-of-calculus-for-l-one: mathematical-premise
  thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions: mathematical-premise
  def-absolutely-continuous-function: mathematical-premise
  def-nrqmx-finite-mode-symplectic-data: mathematical-premise
  lem-nrqmx-finite-symplectic-implementers: mathematical-premise
  lem-nrqmx-finite-symplectic-generator-factorization: mathematical-premise
  def-fourier-transform-on-l-one-of-rn: mathematical-premise
  thm-plancherel: mathematical-premise
  cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space: mathematical-premise
  cor-c-one-change-of-variables-for-l-one-functions: mathematical-premise
  thm-choice-implies-dependent-implies-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Joel Robbin and Dietmar Salamon, Feynman path integrals on phase space and the metaplectic representation, §§5, 6.4, 8.5"
      url: "https://ncatlab.org/nlab/files/RobbinSalamonMetaplectic.pdf"
    - title: "Joel Robbin and Dietmar Salamon, The Maslov index for paths, Theorem 4.7 and Corollary 4.12"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/robbsala2.pdf"
---

## Statement

Use the finite-mode conventions, including their Axiom of Choice assumption, of the finite-mode symplectic-data definition. Let $r\ge1$, $\hbar>0$, and put $J_0=\begin{pmatrix}0&I_r\\-I_r&0\end{pmatrix}$. In grouped order $(q,p)$, write
$$S=\begin{pmatrix}A&B\\C&D\end{pmatrix}\in M_{2r}(\mathbb R),\qquad A,B,C,D\in M_r(\mathbb R),\qquad S^TJ_0S=J_0,$$
and assume its upper-right block $B$ is invertible. Define
$$R_g:=(Q_1,\ldots,Q_r,P_1,\ldots,P_r)^T.$$
Fix a compact interval $I=[0,T]$ with $T>0$. For each $j\in\{1,2\}$, let $K_j:I\to M_{2r}(\mathbb R)$ have Lebesgue-integrable entries in grouped order and satisfy $K_j(t)=K_j(t)^T$ for every $t$. Let $S_j:I\to M_{2r}(\mathbb R)$ be absolutely continuous with $S_j(0)=I_{2r}$, $\dot S_j(t)=J_0K_j(t)S_j(t)$ almost everywhere, and $S_j(T)=S$. Define the real symmetrically ordered quadratic operator on $\mathcal S(\mathbb R^r)$ by
$$H_{j,t}:=\frac14\sum_{a,b=1}^{2r}(K_j)_{ab}(t)((R_g)_a(R_g)_b+(R_g)_b(R_g)_a),$$
with no linear or scalar term. Assume $U_j:I\to\mathcal U(L^2(\mathbb R^r))$ is a path of unitary Schwartz automorphisms with $U_j(0)=I$ such that, for each $f\in\mathcal S(\mathbb R^r)$, the path $t\mapsto U_j(t)f$ is absolutely continuous in every Schwartz seminorm and satisfies
$$i\hbar\,\partial_tU_j(t)f=H_{j,t}U_j(t)f$$
almost everywhere. Here a unitary Schwartz automorphism is a unitary on $L^2$ whose restriction is a continuous linear bijection of $\mathcal S$ with continuous inverse, and the Schwartz seminorms are $p_{\alpha,\beta}(f)=\sup_x|x^\alpha\partial^\beta f(x)|$ for multi-indices $\alpha,\beta$. Absolute continuity of each trajectory means the usual finite disjoint-interval condition for its increments in every seminorm. These hypotheses include piecewise-smooth Hamiltonian paths.
Then
$$U_2(T)=U_1(T)\quad\text{or}\quad U_2(T)=-U_1(T).$$
The same conclusion holds after multiplying both propagators by a fixed
normalized quadratic propagator, provided the resulting endpoint lies in a
chart with invertible upper-right block.

## Statement references

[[def-nrqmx-finite-mode-symplectic-data]]

[[def-absolutely-continuous-function]]

## Facts & Assumptions

**Given:** The exact finite-mode and absolute-continuity conventions in the Statement. In particular, $R_g=(Q_1,\ldots,Q_r,P_1,\ldots,P_r)^T$ and $K,J_0,S$ use grouped order; in Schrödinger coordinates $Q=\sqrt\hbar x$, $P=-i\sqrt\hbar\partial_x$, transported by the given Fock–Schrödinger unitary when necessary, and $p=-i\partial_x$. All time derivatives below are almost-everywhere derivatives and all endpoint identities use the continuous representatives on $[0,T]$.

[F1] The finite-mode definition supplies AC, the quadrature and Weyl conventions, the Schwartz domain and the regular irreducible Weyl system. [[def-nrqmx-finite-mode-symplectic-data]]

[F2] For a symplectic block matrix with $A$ invertible, $Y=CA^{-1}$ and $X=A^{-1}B$ are symmetric and $S=L_YD_AU_X$. Every symplectic matrix is a finite product of the elementary matrices. [[lem-nrqmx-finite-symplectic-generator-factorization]]

[F3] The Weyl system is irreducible; two unitaries inducing the same symplectic Weyl covariance differ by a scalar of modulus one. [[lem-nrqmx-finite-symplectic-implementers]]

[F4] The imported $2\pi$-frequency transform $\mathcal F_{2\pi}$ is unitary on $L^2$ and a topological automorphism of Schwartz space ([[def-fourier-transform-on-l-one-of-rn]], [[thm-plancherel]], [[cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space]]). The exact angular-frequency unitary used here is
$$\mathcal F_{\mathrm{ang}}f(k)=(2\pi)^{-r/2}(\mathcal F_{2\pi}f)(k/(2\pi))=(2\pi)^{-r/2}\int e^{-ik\cdot x}f(x)\,dx.$$
The dilation is unitary by [[cor-c-one-change-of-variables-for-l-one-functions]]; for Schwartz seminorms it scales by $(2\pi)^{|\alpha|-|\beta|-r/2}$, with inverse scaling by finite reciprocal factors. Thus the angular transform is also a Schwartz automorphism. Integration by parts gives $\mathcal F_{\mathrm{ang}}(-i\partial_{x_j}f)=k_j\mathcal F_{\mathrm{ang}}f$ on Schwartz space.


[F5] In ZF, AC implies DC and DC implies Countable Choice ([[thm-choice-implies-dependent-implies-countable-choice]]). The real-valued AC fundamental theorem therefore applies under the AC hypothesis in [F1]: an absolutely continuous real function has an integrable derivative and is reconstructed from it, so zero derivative almost everywhere implies constancy. [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]] [[def-absolutely-continuous-function]]

[F6] For any fixed integrable representative $f\in L^1[a,b]$, the primitive $x\mapsto\int_a^xf$ has derivative $f$ almost everywhere. This supplier assumes Countable Choice. [[thm-first-fundamental-theorem-of-calculus-for-l-one]]

## Proof

**Proof technique:** construct quadratic evolution from elementary operators near the identity, then determine its possible scalar phase from the transported Gaussian, without an imported oscillatory-kernel or Maslov-index theorem.

1.1 Put $J_0=\begin{pmatrix}0&I\\-I&0\end{pmatrix}$. For $f\in\mathcal S$, the $L^1$ definitions give the exact dilation identity $\mathcal F_{\mathrm{ang}}f(k)=(2\pi)^{-r/2}(\mathcal F_{2\pi}f)(k/(2\pi))$. The change-of-variables formula with $k=2\pi\xi$ proves this dilation is unitary on $L^2$; differentiating its argument shows $p_{\alpha,\beta}(Dg)=(2\pi)^{|\alpha|-|\beta|-r/2}p_{\alpha,\beta}(g)$, and the inverse dilation has the reciprocal seminorm factors, so it is a Schwartz automorphism. Integration by parts in the angular kernel gives $\mathcal F_{\mathrm{ang}}(-i\partial_{x_j}f)=k_j\mathcal F_{\mathrm{ang}}f$. Thus the angular transform is precisely the required unitary, derivative and Schwartz-space consequence of the imported $2\pi$ transform, rather than a differently normalized Plancherel claim. Near the identity the block $A$ is invertible with positive determinant. For the factorization in [F2] define $C_Yf(x)=e^{ix^TYx/2}f(x)$, $E_Af(x)=(\det A)^{-1/2}f(A^{-1}x)$ and $T_X=\mathcal F_{\mathrm{ang}}^{-1}e^{-ik^TXk/2}\mathcal F_{\mathrm{ang}}$. Each is unitary by change of variables or [F4]. The product rule and linear change of variables show that each factor and its inverse act continuously on Schwartz space and depend smoothly on their parameters there. For example every derivative of a chirp is a polynomial times the same chirp, giving bounds by finitely many Schwartz seminorms, uniformly on compact parameter sets; differentiation in a parameter inserts only another polynomial or a first-order differential operator. The same argument applies in Fourier coordinates to $T_X$ by [F4]. Direct differentiation or substitution gives $C_Y^*R_gC_Y=L_YR_g$, $E_A^*R_gE_A=D_AR_g$, and $T_X^*R_gT_X=U_XR_g$. The same substitutions in the explicit Weyl formula give covariance on all $L^2$. Thus $L(S):=C_YE_AT_X$ is a smooth local unitary Schwartz lift of $S$, with $L(I)=I$. Shrink the neighborhood so $A$ is sufficiently close to $I$; then replacing $(Y,A,X)$ by $(\tau Y,I+\tau(A-I),\tau X)$, $0\le\tau\le1$, gives a smooth operator path from $I$ to $L(S)$ within these formulas. [F1, F2, F4, construct, algebra]

2.1 Along an absolutely continuous local parameter path the three logarithmic generators $i\hbar\dot C_YC_Y^{-1}$, $i\hbar\dot E_AE_A^{-1}$ and $i\hbar\dot T_XT_X^{-1}$ are respectively $-\hbar x^T\dot Yx/2$, $-i\hbar((\dot AA^{-1}x)\cdot\partial_x+\operatorname{tr}(\dot AA^{-1})/2)$ and $\hbar p^T\dot Xp/2$. These identities hold almost everywhere by finite-dimensional differentiation at the points where the parameters have derivatives. The half-trace in the middle expression is exactly the symmetric ordering of the mixed position-momentum term. Product differentiation conjugates and adds these expressions. The covariance from step 1.1 replaces each quadrature by a real linear combination, so a symmetrically ordered homogeneous quadratic stays exactly such a quadratic, with no extra scalar. If its coefficient matrix is $K_L$, differentiating the covariance and using $[R_j,R_k]=i\hbar(J_0)_{jk}$ gives $\dot S=J_0K_LS$, hence $K_L=-J_0\dot SS^{-1}$. Equality of the quadratic coefficients is literal: the coefficients of second derivatives, of $x_j\partial_k$, and of $x_jx_k$ determine the three real blocks, including the symmetric-order half-trace. [F1, step 1.1, algebra]

3.1 Put $V(t)=J_0K(t)$ and $m(t)=\int_0^t\|V(s)\|\,ds$. The iterated-integral series for the matrix equation has $n$th term bounded by $m(t)^n/n!$: the scalar product integrand is symmetric in its $n$ variables and the ordered simplex is one of the $n!$ equal regions of their product cube, up to null diagonals. Thus the series converges uniformly, with sum bounded by $e^{m(T)}$. It satisfies $S(t)=I+\int_0^tV(s)S(s)\,ds$, since the series under that integral is dominated by $\|V(s)\|e^{m(T)}$. For any integrable scalar $f$, choose $M$ with $\int_{|f|>M}|f|<\varepsilon/2$; then $\int_E|f|\le M\lambda(E)+\varepsilon/2$, proving absolute continuity of its primitive by the finite disjoint-interval definition. Applied entrywise to the integral equation, this proves absolute continuity of $S$, and [F6] gives $\dot S=VS$ almost everywhere. If two solutions have the same initial value, their continuous difference obeys $\Delta(t)=\int_0^tV(s)\Delta(s)\,ds$. Iterating this equation $n$ times gives $\|\Delta(t)\|\le\sup_s\|\Delta(s)\|m(T)^n/n!$, which tends to zero. This proves uniqueness of the classical absolutely continuous solution. Product differentiation gives $(S^TJ_0S)'=0$ almost everywhere, so [F5] and its initial value give symplecticity at every time. A finite subdivision, using uniform continuity and invertibility of $S$, makes each $S(t)S(t_j)^{-1}$ lie in the neighborhood of step 1.1. Set $U(t)=L(S(t)S(t_j)^{-1})U(t_j)$, with $U(0)=I$. To justify the Schwartz calculus, restrict each parameter path to a small compact neighborhood where the local factors are smooth. The seminorm estimates of step 1.1, also for their parameter derivatives, imply $p((L(\alpha)-L(\beta))f)\le C_{p,q}|\alpha-\beta|q(f)$ there and $p(\partial_t L(\alpha(t))f)\le C_{p,q}|\alpha'(t)|q(f)$ almost everywhere, for some Schwartz seminorm $q$. One can obtain the first bound by integrating along the straight parameter segment inside that neighborhood; finite smaller neighborhoods suffice. Matrix inversion and the local factor parameters have bounded derivatives on those sets, and $|S'|\le e^{m(T)}\|V\|$ is integrable. A finite-dimensional smooth map with bounded derivative on the small convex parameter neighborhood is Lipschitz there, hence takes an absolutely continuous parameter curve to an absolutely continuous curve; at points of differentiability of that curve, its differentiability gives the chain rule directly. The same derivative estimate in each seminorm proves this assertion for the explicit Schwartz-valued factors. Products are covered by the two-variable version of those bounds. Thus these estimates prove absolute continuity in every seminorm, the chain and product rules almost everywhere, and the same assertions for the inverse factors. Step 2.1 therefore gives $i\hbar\dot U=H_KU$ almost everywhere, with continuous matching at joins and covariance from step 1.1. If two such evolutions have the same initial vector, their difference $w(t)$ is absolutely continuous in $L^2$ and satisfies the same equation. Its squared norm is absolutely continuous and has derivative $2\operatorname{Re}\langle-iH_Kw/\hbar,w\rangle=0$ almost everywhere, because the real symmetrically ordered expression is symmetric on Schwartz space by integration by parts. By [F5] the difference remains zero. Density and unitarity extend uniqueness to all $L^2$. Thus existence, uniqueness, inverse continuity and covariance hold for the full integrable coefficient class in the Statement. [F1, F4, F5, F6, step 1.1, step 2.1, construct, algebra]

4.1 Write $K=\begin{pmatrix}a&b\\b^T&d\end{pmatrix}$ with $a,d$ real symmetric, and $S=\begin{pmatrix}A&B\\C&D\end{pmatrix}$. Set $F=A+iB$ and $G=C+iD$. The symplectic block relations give $F^*G-G^*F=2iI$ and $F^TG=G^TF$. If $Fv=0$, multiplying the first identity by $v^*$ and $v$ forces $\|v\|^2=0$; thus $F$ is invertible at every time, even at a singular generating chart. Consequently $Z:=GF^{-1}$ is symmetric and $\operatorname{Im}Z=(Z-Z^*)/(2i)=F^{-*}F^{-1}>0$. The classical equation gives $\dot F=(b^T+dZ)F$ and $\dot Z=-a-bZ-Zb^T-ZdZ$, with $F(0)=I$ and $Z(0)=iI$. [F1, step 3.1, algebra]

5.1 Let $c(0)=1$ and $\dot c/c=-\tfrac12\operatorname{tr}(b+dZ)$, defining $c$ by the exponential of the indefinite integral of this $L^1$ coefficient; it is integrable because $b,d$ are integrable and $Z$ is continuous and bounded on the compact time interval. By the primitive estimate in step 3.1, [F6] and the smooth chain rule on the bounded range of this integral, $c$ is absolutely continuous and satisfies that equation almost everywhere. It never vanishes. Define $g(t,x)=\pi^{-r/4}c(t)\exp(ix^TZ(t)x/2)$. Positive definiteness of $\operatorname{Im}Z$ makes $g$ Schwartz. On the compact time interval $\operatorname{Im}Z$ has a uniform positive lower eigenvalue. Every parameter derivative of this Gaussian is a polynomial times a Gaussian, so the same seminorm estimates as in step 3.1 make $g$ absolutely continuous in each Schwartz seminorm and justify the almost-everywhere derivatives below. In these dimensionless coordinates $H_K/\hbar=\tfrac12(x^Tax+x^Tbp+p^Tb^Tx+p^Tdp)$. Applying this differential expression to $g$ gives $H_Kg/\hbar=\bigl(x^T(a+bZ+Zb^T+ZdZ)x/2-i\operatorname{tr}(b+dZ)/2\bigr)g$. Steps 4.1 and the equation for $c$ identify this with $i\partial_tg$. As $g(0)=g_0:=\pi^{-r/4}e^{-|x|^2/2}$, the uniqueness in step 3.1 gives $U(t)g_0=g(t)$. No physical-coordinate factor of $\hbar$ is missing: both the Schrödinger equation and the quadratic contain that common factor. [F1, F5, F6, step 3.1, step 4.1, construct, algebra]

6.1 Differentiating the determinant by its finite polynomial formula gives $(\det F)'=(\det F)\operatorname{tr}(F^{-1}\dot F)$. Since the trace of $b^T$ equals the trace of $b$, steps 4.1 and 5.1 give $(c^2\det F)'=0$ almost everywhere. Put $h:=c^2\det F=u+iv$ with real and imaginary parts $u,v$. The entries of $F$ and $c$ are absolutely continuous and bounded on $[0,T]$, so their finite polynomial products $h,u,v$ are absolutely continuous. On the full-measure set where the displayed derivative identity holds and $h$ is differentiable, $h'=0$ implies $u'=v'=0$; hence both real derivatives vanish almost everywhere. By the real-valued theorem [F5], $u$ and $v$ are constant on $[0,T]$. Since $h(0)=1$, $h(t)=1$ for every $t$, including all subdivision joins. It uses neither a choice of a global square root nor a real generating-chart denominator. [F5, step 4.1, step 5.1, algebra]

7.1 For the two endpoint propagators of the Statement, step 3.1 supplies the same Weyl covariance at their common $S$. By [F3], $U_2(T)=\lambda U_1(T)$ with $|\lambda|=1$. Step 4.1 gives the same endpoint $Z$ for both Gaussian vectors, and step 6.1 gives $c_2^2=c_1^2=1/\det(A+iB)$. Since $c_1\ne0$, $\lambda=c_2/c_1$ and $\lambda^2=1$, so $U_2(T)=\pm U_1(T)$. This proves the required invertible-$B$ claim and in fact the same phase conclusion at every endpoint. Multiplying both unitaries by any fixed normalized quadratic propagator preserves their relative sign, proving the final clause. [F3, step 3.1, step 4.1, step 6.1, algebra] ∎
## Remarks

The historical title records the phase-parity application. The proof establishes the stated sign ambiguity by an ordinary finite Gaussian differential equation; it imports no Maslov-index, path-integral convergence, or metaplectic-cover theorem. The cited literature remains attribution for the established statement. No new full-text source reading or external proof acceptance is asserted by this local reconstruction.
