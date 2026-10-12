---
id: thm-nrqm-controlled-dynamics-unbounded-gapped-atomic-adiabatic-estimate
aliases: [nrqm-controlled-dynamics-unbounded-gapped-atomic-adiabatic-estimate]
kind: theorem
domain: mathematics
title: "Unbounded gapped atomic adiabatic estimate"
status: draft
origin: pipeline
dependency_level: 1
deps: [lem-nrqm-controlled-dynamics-cc-separable-spectral-calculus, thm-plancherel, thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces, cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn, cor-vector-forms-of-the-divergence-theorem, cor-cauchy-schwarz-inequality-for-l-two, thm-dominated-convergence, thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn, thm-cauchy-integral-formula-circle, thm-nrqm-controlled-dynamics-common-domain-nonautonomous-evolution, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-sobolev-space-wkp-and-its-norm, def-bounded-linear-operator, def-operator-norm, def-hilbert-space, def-countable-choice]
dependency_roles:
  lem-nrqm-controlled-dynamics-cc-separable-spectral-calculus: mathematical-premise
  thm-plancherel: mathematical-premise
  thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces: mathematical-premise
  cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn: mathematical-premise
  cor-vector-forms-of-the-divergence-theorem: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn: mathematical-premise
  thm-cauchy-integral-formula-circle: mathematical-premise
  thm-nrqm-controlled-dynamics-common-domain-nonautonomous-evolution: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 10.2 pp. 222-233 (the hydrogen atom and its discrete spectrum) and Section 6.6 pp. 153-159 (perturbation of isolated eigenvalues)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "T. Kato, Perturbation Theory for Linear Operators, Chapter II.4 (adiabatic theorem for families with common domain and an isolated cluster)"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$Y:=H^2(\mathbb R^3;\mathbb C)$ with its norm
([[def-sobolev-space-wkp-and-its-norm]]), let
$\gamma\in C^2([0,1];(0,\infty))$ with
$0<\gamma_{\min}\le\gamma(s)\le\gamma_{\max}<\infty$, and put
$$A(s):=-\Delta-\frac{\gamma(s)}{|\cdot|},\qquad D(A(s))=Y .$$
Fix $n\ge1$, let $P_n(s)$ be the spectral projection of $A(s)$ for the
eigenvalue $E_n(s)=-\gamma(s)^2/(4n^2)$ and let $g_n:=\inf_{s\in[0,1]}\operatorname{dist}(E_n(s),\sigma(A(s))\setminus\{E_n(s)\})>0$
be the uniform gap to the rest of the spectrum. Let $U_T$ solve
$i\,\partial_sU_T=T A(s)U_T$, $U_T(0)=I$ ([[thm-nrqm-controlled-dynamics-common-domain-nonautonomous-evolution]],
with $T$ a slow-time parameter). Then there is a constant $C<\infty$,
depending on $n,\gamma_{\min},\gamma_{\max}$ and the $C^2$ norm of $\gamma$, with
$$\bigl\|(I-P_n(s))U_T(s)P_n(0)\bigr\|\le\frac CT,\qquad s\in[0,1].$$

The theorem is a conditional statement about the external-source Coulomb family
$A(s)$; no laboratory control field, error rate or physical preparation is
asserted, and linear Stark-type couplings are not covered.

## Facts & Assumptions

**Given:** the original $C^2$ strength path, $n$, the exact eigenvalue and strictly positive complementary uniform gap stated above. All norms are on $H=L^2$ unless a graph-domain norm is indicated.

[F1] The primitive Fourier/Sobolev, smooth-density, divergence and Cauchy–Schwarz interfaces are [[thm-plancherel]], [[thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]], [[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]], [[cor-vector-forms-of-the-divergence-theorem]], [[cor-cauchy-schwarz-inequality-for-l-two]] and [[thm-dominated-convergence]]. Rational-box density is [[thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn]]. They support the explicit self-adjointness and graph bounds below under CC.

[F2] [[lem-nrqm-controlled-dynamics-cc-separable-spectral-calculus]] supplies exact PVM, bounded Borel calculus, domains and groups for this specified dense-sequence Hilbert space. Scalar contour integration is [[thm-cauchy-integral-formula-circle]]. [[thm-nrqm-controlled-dynamics-common-domain-nonautonomous-evolution]] supplies the proved arbitrary-H CC strong evolution with domain invariance, joint graph continuity and the correct endpoint derivatives. No finite-dimensional adiabatic theorem or AC Coulomb spectrum theorem is invoked.

## Proof

1.1 [Exact self-adjoint realization and uniform graph bounds] For a real measurable multiplier $a$, truncating $f$ to $\{|a|\le j\}$ proves density of the maximal domain by dominated convergence. If $f$ is in its adjoint domain with adjoint vector $h$, testing against all $L^2$ functions supported on $\{|a|\le j\}$ proves $h=af$ on that set. Increasing $j$ proves $af\in L^2$ and identifies the adjoint domain exactly. Thus the maximal multiplier is self-adjoint without a general spectral representation. Applying the explicit unitary Fourier transform gives $H_0=-\Delta=\mathcal F_2^*M_{4\pi^2|\xi|^2}\mathcal F_2$ on exactly $Y$.  Hardy's estimate used here follows directly: integrate $\operatorname{div}(x/|x|^2)|u|^2$ for smooth $u$ away from zero and use Cauchy–Schwarz to get $\|u/r\|_2^2\le2\|u/r\|_2\|\nabla u\|_2$. Radial smooth cutoffs remove the puncture (the error in the shrinking annulus tends to zero), and smooth Sobolev density extends it to $H^1$. Fourier Cauchy–Schwarz then gives, for $u\in Y$,  $$\|Mu\|_2\le2\|\nabla u\|_2\le2\sqrt{\|u\|_2\|H_0u\|_2}\le\eta\|H_0u\|_2+\eta^{-1}\|u\|_2,\qquad Mu=u/|x|.$$  For $\mu>4\gamma_{\max}^2$ the explicit free inverses $R_0(\pm i\mu)=(H_0\mp i\mu)^{-1}$ satisfy $\|R_0\|\le\mu^{-1}$, $\|H_0R_0\|\le1$, and $\|\gamma(s)MR_0\|\le2\gamma_{\max}/\sqrt\mu<1$. Thus  $$A(s)-z=(I-\gamma(s)MR_0(z))(H_0-z)$$  has a two-sided inverse $H\to Y$ for $z=\pm i\mu$, obtained by its convergent Neumann series. The operator $A(s)$ is densely defined and symmetric. If $y\in D(A(s)^*)$, solve $(A(s)-i\mu)x=(A(s)^*-i\mu)y$ with $x\in Y$. The difference $y-x$ lies in $\ker(A(s)^*-i\mu)=\operatorname{ran}(A(s)+i\mu)^\perp=\{0\}$. Therefore $y=x\in Y$, proving self-adjointness on exactly $Y$.  Choosing $\eta=(2\gamma_{\max})^{-1}$ in the Hardy estimate gives the uniform graph estimate  $$\|H_0u\|\le2\|A(s)u\|+4\gamma_{\max}^2\|u\|,\qquad \|u\|_Y\le c_0(\|u\|+\|H_0u\|).$$  The universal norm-equivalence constant $c_0$ is supplied by the fixed Fourier/Sobolev convention. Conversely $A(s):Y\to H$ is uniformly bounded. In particular $A\in C^2(\mathcal B(Y,H))$, $A'=-\gamma'M$, $A''=-\gamma''M$, with bounds depending only on the stated strength bounds and $C^2$ norm.  For the CC spectral-calculus lemma specify, rather than merely assert existence of, a countable dense sequence in $H$: enumerate finite rational complex linear combinations of indicators of bounded boxes with rational endpoints. Density follows by simple-function approximation, truncation to bounded sets and rational-box approximation of finite-measure sets. This applies its exact separability hypothesis. The resulting PVM gives the ordinary spectral projection, resolvent norm at spectral distance $d$, and spectral products with their exact operator domains. [given, F1, F2, construct, algebra]

2.1 [Gap scaling and the promised parameter dependence] The public Statement already assumes that $E_n(s)$ is the named spectral eigenvalue and that its complementary spectral gap $g_n$ is strictly positive. The argument below uses exactly these assumptions, and does not need finite rank or exhaustive classification of the negative spectrum. It therefore need not consume the AC-only negative-completeness or essential-spectrum Statements to prove the displayed conditional bound.  To ensure the advertised constant has no extra gap parameter, define $D_a f(x)=a^{3/2}f(ax)$ for $a>0$. Change of variables proves that $D_a$ is unitary, $D_aY=Y$, and direct weak-derivative scaling gives $A_aD_a=a^2D_aA_1$ on $Y$, where $A_a=H_0-aM$. Factoring $A_a-z$ through this identity proves $\sigma(A_a)=a^2\sigma(A_1)$, including its complementary spectral points. Set $e_n=-1/(4n^2)$ and $\delta_n=\operatorname{dist}(e_n,\sigma(A_1)\setminus\{e_n\})$. The public positive-gap assumption at any one $s$ implies $\delta_n>0$. Then the exact gap at time $s$ is $\gamma(s)^2\delta_n$, and  $$g_n=\delta_n\inf_{s\in[0,1]}\gamma(s)^2\ge\delta_n\gamma_{\min}^2.$$  Here $\delta_n$ is determined by the fixed universal operator $A_1$ and the integer $n$, not by the driving path or $T$. This proves the required parameter dependence without imposing a new gap hypothesis or importing full hydrogen-spectrum exhaustion. Set $P=P_n$, $E=E_n$, $Q=I-P$, $g_0=\gamma_{\min}^2\delta_n$ and $\rho=g_0/3$. [step 1.1, F2, construct, algebra]

3.1 [Resolvents and moving contours] Parametrize the positively oriented circle by $z(s,\theta)=E(s)+\rho e^{i\theta}$, $0\le\theta\le2\pi$, and put $R(s,\theta)=(z(s,\theta)-A(s))^{-1}$. Its distance to the full spectrum is at least $\rho$: its distance to $E(s)$ is $\rho$ and its distance to the complementary spectrum is at least $g_0-\rho>\rho$. Spectral calculus gives $\|R\|\le\rho^{-1}$. Since $AR=zR-I$, the uniform graph estimate above implies  $$\|R\|_{H\to Y}\le b:=c_0\left(2+\frac{1+2e_{\max}+2\rho+4\gamma_{\max}^2}{\rho}\right),\qquad e_{\max}=\frac{\gamma_{\max}^2}{4n^2}.$$  The inverse equations and Neumann series in $\mathcal B(H,Y)$ give joint continuity and $C^2$ dependence on $s$. Put $B_j=A^{(j)}-E^{(j)}I:Y\to H$ for $j=1,2$. Differentiating the inverse equations gives $R'=RB_1R$ and $R''=RB_2R+2RB_1RB_1R$, as $H\to Y$ identities. With $d_j=\sup_s\|B_j\|_{Y\to H}$ these imply $\|R'\|_{H\to Y}\le b^2d_1$ and $\|R''\|_{H\to Y}\le b^2d_2+2b^3d_1^2$. These constants depend only on the claimed parameters (and the fixed universal $\delta_n$).  The contour integral  $$P(s)=\frac1{2\pi i}\oint_{|z-E(s)|=\rho}(z-A(s))^{-1}\,dz=\frac\rho{2\pi}\int_0^{2\pi}e^{i\theta}R(s,\theta)\,d\theta$$  is the eigenprojection by the PVM: integrate $1/(z-\lambda)$ for each real $\lambda$; only $\lambda=E(s)$ is inside this contour. The integral exists in $\mathcal B(H,Y)$ by continuous Riemann sums. Uniform derivative bounds permit differentiation there, proving $P\in C^2(\mathcal B(H,Y))$. No contour selection or eigenvector selection is required. In $H$, $P=P^*=P^2$, $AP=EP$, $PA=EP$ on $Y$. Differentiating $P^2=P$ gives $P'=PP'+P'P$ and $PP'P=0$. [given, F1, F2, construct, algebra, step 1.1, step 2.1]

4.1 [Reduced inverse including its graph-domain regularity] Spectral calculus defines $S$ by the bounded Borel multiplier that is zero at $E$ and $(\lambda-E)^{-1}$ elsewhere on the spectrum. Thus $S=S^*$, $SP=PS=0$, $\|S\|\le g_0^{-1}$, $(A-E)S=Q$ on $H$, and $S(A-E)=Q$ on $Y$. The identity $AS=Q+ES$ and the graph estimate prove $S:H\to Y$ uniformly bounded. In particular $G:=S+P$ is the bounded inverse $H\to Y$ of $B:=A-E+P:Y\to H$. Both inverse equations are checked from $P^2=P$, $SP=PS=0$ and the preceding identities; they do not assume the reduced inverse has already been differentiated. Since $B\in C^2(\mathcal B(Y,H))$, its local Neumann inverse gives $G\in C^2(\mathcal B(H,Y))$, with $G'=-GB'G$ and $G''=2GB'GB'G-GB''G$. Consequently $S=G-P$ is $C^2(H\to Y)$, and its uniform bounds through two derivatives depend only on the constants already displayed. [given, F1, F2, construct, algebra, step 1.1, step 2.1, step 3.1]

5.1 [Bounded correction and commutator] Define $K=[P',P]=P'P-PP'$, and $X=SP'P+PP'S$. Both are $C^1(H\to Y)$, because all factors have the graph regularity just proved and the embedding $Y\hookrightarrow H$ is bounded. Also $K^*=-K$, $X^*=X$ in $H$, and $[K,P]=P'$. For $y\in Y$, using $AP=PA=EP$ and the inverse equations,  $$[A,SP'P]y=QP'Py=P'Py,\qquad [A,PP'S]y=-PP'Qy=-PP'y.$$  Therefore $[A,X]=K$ on $Y$. Moreover $AX:H\to H$ is bounded since $X:H\to Y$ and $A:Y\to H$ are bounded; $XA$ on $Y$ has the bounded extension $AX-K$. This last assertion is not automatic for an arbitrary graph-domain bounded operator; here it follows from the explicit commutator. [given, F1, F2, construct, algebra, step 1.1, step 2.1, step 3.1, step 4.1]

6.1 [Modified propagator and domain legitimacy] For fixed $T>0$, use the self-adjoint generator $G_T=TA+iK$ on $Y$, with $G_T\in C^1(\mathcal B(Y,H))$. The perturbation $iK$ is bounded and self-adjoint on $H$. Its exact self-adjointness assertion can be checked without AC Kato–Rellich: for a sufficiently large imaginary part, factor $G_T-z=(I+iK(TA-z)^{-1})(TA-z)$ and use a Neumann inverse at both conjugate points, then the adjoint-domain range argument above. The common-domain evolution construction supplies $U_A'=(-iTA+K)U_A$, $U_A(0)=I$, unitary on $H$ and preserving $Y$, just as it supplies the given $U_T$. The actual repaired common-domain supplier constructs its autonomous groups on arbitrary Hilbert spaces directly from bounded resolvent approximants and proves uniform convergence of the true graph coordinates, so this use retains CC and exact $Y$ invariance.  For $y\in Y$, differentiate $U_A(s)^*P(s)U_A(s)y$ in $H$. Because $P,P'$ map $H$ into $Y$, all unbounded-generator factors have legitimate inputs. The derivative is  $$U_A^*(P'+iT[A,P]-[K,P])U_Ay=0.$$  Thus $P(s)U_A(s)=U_A(s)P(0)$ on $Y$, hence on $H$ by density. [given, F1, F2, construct, algebra, step 1.1, step 2.1, step 3.1, step 4.1, step 5.1]

7.1 [Correct integration and quantitative bound] Put $D(s)=U_A(s)^*U_T(s)$ and $F(s)=U_A(s)^*X(s)U_T(s)$. For $y\in Y$, product differentiation is legitimate because $U_TY=Y$ and $XH\subseteq Y$, and the commutator has the bounded extension above. The strong identities are  $$D'=-U_A^*KU_T,\qquad F'=U_A^*(X'-KX+iT[A,X])U_T=U_A^*(X'-KX+iTK)U_T.$$  Every coefficient in the final expressions is bounded on $H$ and strongly continuous. The integrated identities therefore extend from $Y$ to $H$ by density; no operator-norm derivative of either unbounded propagator is asserted. Substitution gives  $$iT(D(s)-I)=-F(s)+X(0)+\int_0^sU_A(r)^*(X'(r)-K(r)X(r))U_T(r)\,dr.$$  Unitary norms and the strong-integral norm estimate imply  $$\|D(s)-I\|\le\frac1T\left(2\sup_{r\in[0,1]}\|X(r)\|+\int_0^1(\|X'(r)\|+\|K(r)\|\|X(r)\|)\,dr\right)=\frac CT.$$  The displayed $C$ is finite by the explicit $P,S$ bounds and independent of $T$. All its inputs depend only on $n$, $\gamma_{\min},\gamma_{\max}$ and $\|\gamma\|_{C^2}$; the fixed Sobolev constants and fixed $\delta_n$ are not additional path parameters. Finally,  $$Q(s)U_T(s)P(0)=Q(s)U_A(s)(D(s)-I)P(0),$$  because the omitted $Q(s)U_A(s)P(0)$ vanishes by intertwining. Contractivity of both projections proves the exact public leakage bound for all $s\in[0,1]$ and $T>0$. At $s=0$ the leakage is zero; the formula remains valid for arbitrarily small positive $T$. This proof works for the whole degenerate eigenspace and retains the full continuum in the complementary resolvent. [given, F1, F2, construct, algebra, step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, step 6.1] ∎
