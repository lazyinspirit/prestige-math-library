# Research-only repair support: actual source40 atomic adiabatic estimate

Actual carrier: `physics/items/thm-nrqm-controlled-dynamics-unbounded-gapped-atomic-adiabatic-estimate.md`. Input bytes are bound in adjacent `parallel-adiabatic-draft-bindings.json`. This is a proposed proof and precise prerequisite analysis, not a carrier edit, native decision, audit, consumer acceptance, or new repair round. The sole coupled supplier/consumer owner remains `/root/physics_spectral_repair_successor`.

## Public contract preserved

Retain Countable Choice alone; $H=L^2(\mathbb R^3;\mathbb C)$; $Y=H^2(\mathbb R^3;\mathbb C)$ with the existing Sobolev norm; $\gamma\in C^2([0,1];(0,\infty))$ and its two strictly positive finite bounds; $A(s)=-\Delta-\gamma(s)/|x|$ on the identical domain $Y$; every fixed $n\ge1$; the spectral projection $P_n(s)$ for the eigenvalue $E_n(s)=-\gamma(s)^2/(4n^2)$; the entire complementary spectrum in the stated positive uniform gap $g_n$; every $T>0$ and every $s\in[0,1]$; the strong propagator $U_T'=-iTAU_T$; and an operator-norm leakage bound $C/T$, with $C$ depending only on $n$, the stated strength bounds and $\|\gamma\|_{C^2}$. Retain the external-source mathematical interpretation and exclusion of Stark coupling. No eigenbasis of the continuum, extra smoothness of $\gamma$, selected eigenvector, simple eigenvalue, or bounded-Hamiltonian assumption is introduced.

## Concrete defects and actual history

The current two-step proof cites an “abstract common-domain adiabatic theorem” that is not one of its suppliers. Its evolution supplier proves existence of a propagator, not an adiabatic estimate. The finite-dimensional supplier explicitly excludes unbounded families; transferring its calculation requires proving graph-domain regularity and legitimate differentiations locally.

The asserted identity involving $(1+iT)D'$ is false. With the correct definitions below, $D'=-U_A^*KU_T$ and $F'=U_A^*(X'-KX+iTK)U_T$. Consequently the correct identity is $iTD'=-F'+U_A^*(X'-KX)U_T$. The $KX$ term must remain in the constant.

The current finite-dimensional supplier has the same false identity, and also calls $TH+K$ self-adjoint even though $K$ is anti-Hermitian. Its Statement correctly gives the generator $TH+iK$ and the correct constant, but its Facts/Proof do not establish that Statement. This draft does not consume those defective steps.

Original quantum history is materially richer than the carrier. In `physics/research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/mathematical-prerequisites.md`, M44 (lines 458–467 in the inspected snapshot) states the graph-domain resolvent, regularized inverse and commutator construction, correctly uses $A+iK/T$, and gives the full $KX$ constant. M20 (lines 149–157) gives the correct $D',F'$ differentiation. These are actual local historical arguments read here, not an independent source audit. The original M44 also does not require an eigenbasis of the complementary space. Some details omitted there are supplied below.

There is a separate choice-closure defect: actual current Coulomb infinitesimal-bound, negative-completeness, essential-spectrum and free-multiplier production suppliers explicitly assume arbitrary AC. The consumer only assumes CC. Its common-domain evolution supplier also has AC-bearing imported Stone/group-generation dependencies despite a CC Statement. Do not conceal these by relabelling dependencies or silently adding AC to the consumer. The new local `lem-nrqm-controlled-dynamics-cc-separable-spectral-calculus` supplies CC calculus on a space with a specified dense sequence; it can support the exact specialization. Its owning acceptance remains the successor's responsibility.

The actual common-domain evolution Statement (c) also misidentifies the backward derivative: it writes $i\partial_sU(s,t)y=-U(s,t)A(s)y$ for the inverse $U(s,t)=U(t,s)^{-1}$. The correct lower-endpoint equation is $i\partial_sU(t,s)y=-U(t,s)A(s)y$; the inverse, differentiated in its first time variable, obeys $i\partial_sU(s,t)y=A(s)U(s,t)y$. The constant nonzero scalar-generator case already refutes the printed sign. This draft uses the direct equation and the correctly differentiated adjoint, not that printed backward formula.

## Local domain and spectral prerequisites under the unchanged CC contract

Here is a direct instance proof that avoids general AC Kato–Rellich and general AC spectral theorems. Use the CC Hardy supplier, Plancherel, weak-derivative Fourier multipliers and Fourier characterization of $H^2$, with their exact hypotheses. These dependencies need explicit metadata if integrated; the old AC-bearing omnibus result cannot stand in for this proof.

For a real measurable multiplier $a$, truncating $f$ to $\{|a|\le j\}$ proves density of the maximal domain by dominated convergence. If $f$ is in its adjoint domain with adjoint vector $h$, testing against all $L^2$ functions supported on $\{|a|\le j\}$ proves $h=af$ on that set. Increasing $j$ proves $af\in L^2$ and identifies the adjoint domain exactly. Thus the maximal multiplier is self-adjoint without a general spectral representation. Applying the explicit unitary Fourier transform gives $H_0=-\Delta=\mathcal F_2^*M_{4\pi^2|\xi|^2}\mathcal F_2$ on exactly $Y$.

Hardy and Fourier Cauchy–Schwarz give, for $u\in Y$,

$$\|Mu\|_2\le2\|\nabla u\|_2\le2\sqrt{\|u\|_2\|H_0u\|_2}\le\eta\|H_0u\|_2+\eta^{-1}\|u\|_2,\qquad Mu=u/|x|.$$

For $\mu>4\gamma_{\max}^2$ the explicit free inverses $R_0(\pm i\mu)=(H_0\mp i\mu)^{-1}$ satisfy $\|R_0\|\le\mu^{-1}$, $\|H_0R_0\|\le1$, and $\|\gamma(s)MR_0\|\le2\gamma_{\max}/\sqrt\mu<1$. Thus

$$A(s)-z=(I-\gamma(s)MR_0(z))(H_0-z)$$

has a two-sided inverse $H\to Y$ for $z=\pm i\mu$, obtained by its convergent Neumann series. The operator $A(s)$ is densely defined and symmetric. If $y\in D(A(s)^*)$, solve $(A(s)-i\mu)x=(A(s)^*-i\mu)y$ with $x\in Y$. The difference $y-x$ lies in $\ker(A(s)^*-i\mu)=\operatorname{ran}(A(s)+i\mu)^\perp=\{0\}$. Therefore $y=x\in Y$, proving self-adjointness on exactly $Y$.

Choosing $\eta=(2\gamma_{\max})^{-1}$ in the Hardy estimate gives the uniform graph estimate

$$\|H_0u\|\le2\|A(s)u\|+4\gamma_{\max}^2\|u\|,\qquad \|u\|_Y\le c_0(\|u\|+\|H_0u\|).$$

The universal norm-equivalence constant $c_0$ is supplied by the fixed Fourier/Sobolev convention. Conversely $A(s):Y\to H$ is uniformly bounded. In particular $A\in C^2(\mathcal B(Y,H))$, $A'=-\gamma'M$, $A''=-\gamma''M$, with bounds depending only on the stated strength bounds and $C^2$ norm.

For the CC spectral-calculus lemma specify, rather than merely assert existence of, a countable dense sequence in $H$: enumerate finite rational complex linear combinations of indicators of bounded boxes with rational endpoints. Density follows by simple-function approximation, truncation to bounded sets and rational-box approximation of finite-measure sets. This applies its exact separability hypothesis. The resulting PVM gives the ordinary spectral projection, resolvent norm at spectral distance $d$, and spectral products with their exact operator domains.

The public Statement already assumes that $E_n(s)$ is the named spectral eigenvalue and that its complementary spectral gap $g_n$ is strictly positive. The argument below uses exactly these assumptions, and does not need finite rank or exhaustive classification of the negative spectrum. It therefore need not consume the AC-only negative-completeness or essential-spectrum Statements to prove the displayed conditional bound.

To ensure the advertised constant has no extra gap parameter, define $D_a f(x)=a^{3/2}f(ax)$ for $a>0$. Change of variables proves that $D_a$ is unitary, $D_aY=Y$, and direct weak-derivative scaling gives $A_aD_a=a^2D_aA_1$ on $Y$, where $A_a=H_0-aM$. Factoring $A_a-z$ through this identity proves $\sigma(A_a)=a^2\sigma(A_1)$, including its complementary spectral points. Set $e_n=-1/(4n^2)$ and $\delta_n=\operatorname{dist}(e_n,\sigma(A_1)\setminus\{e_n\})$. The public positive-gap assumption at any one $s$ implies $\delta_n>0$. Then the exact gap at time $s$ is $\gamma(s)^2\delta_n$, and

$$g_n=\delta_n\inf_{s\in[0,1]}\gamma(s)^2\ge\delta_n\gamma_{\min}^2.$$

Here $\delta_n$ is determined by the fixed universal operator $A_1$ and the integer $n$, not by the driving path or $T$. This proves the required parameter dependence without imposing a new gap hypothesis or importing full hydrogen-spectrum exhaustion. If the owner retains the existing explicit adjacent-level gap formula as a fact, its actual spectral/domain suppliers still require CC closure; that formula is not needed for this proof. The distinction is necessary: a claim about the full hydrogen spectrum remains an obligation if asserted as a local fact, even when unused in the estimate.

## Full proposed argument for the unbounded estimate

Write $P=P_n$, $E=E_n$, $Q=I-P$. All norms without subscripts are $H\to H$ norms. Set $g_0=\gamma_{\min}^2\delta_n>0$ and $\rho=g_0/3$. The following argument proves the graph regularity and differentiations, rather than importing a finite-matrix theorem.

**1. Resolvents and moving contours.** Parametrize the positively oriented circle by $z(s,\theta)=E(s)+\rho e^{i\theta}$, $0\le\theta\le2\pi$, and put $R(s,\theta)=(z(s,\theta)-A(s))^{-1}$. Its distance to the full spectrum is at least $\rho$: its distance to $E(s)$ is $\rho$ and its distance to the complementary spectrum is at least $g_0-\rho>\rho$. Spectral calculus gives $\|R\|\le\rho^{-1}$. Since $AR=zR-I$, the uniform graph estimate above implies

$$\|R\|_{H\to Y}\le b:=c_0\left(2+\frac{1+2e_{\max}+2\rho+4\gamma_{\max}^2}{\rho}\right),\qquad e_{\max}=\frac{\gamma_{\max}^2}{4n^2}.$$

The inverse equations and Neumann series in $\mathcal B(H,Y)$ give joint continuity and $C^2$ dependence on $s$. Put $B_j=A^{(j)}-E^{(j)}I:Y\to H$ for $j=1,2$. Differentiating the inverse equations gives $R'=RB_1R$ and $R''=RB_2R+2RB_1RB_1R$, as $H\to Y$ identities. With $d_j=\sup_s\|B_j\|_{Y\to H}$ these imply $\|R'\|_{H\to Y}\le b^2d_1$ and $\|R''\|_{H\to Y}\le b^2d_2+2b^3d_1^2$. These constants depend only on the claimed parameters (and the fixed universal $\delta_n$).

The contour integral

$$P(s)=\frac1{2\pi i}\oint_{|z-E(s)|=\rho}(z-A(s))^{-1}\,dz=\frac\rho{2\pi}\int_0^{2\pi}e^{i\theta}R(s,\theta)\,d\theta$$

is the eigenprojection by the PVM: integrate $1/(z-\lambda)$ for each real $\lambda$; only $\lambda=E(s)$ is inside this contour. The integral exists in $\mathcal B(H,Y)$ by continuous Riemann sums. Uniform derivative bounds permit differentiation there, proving $P\in C^2(\mathcal B(H,Y))$. No contour selection or eigenvector selection is required. In $H$, $P=P^*=P^2$, $AP=EP$, $PA=EP$ on $Y$. Differentiating $P^2=P$ gives $P'=PP'+P'P$ and $PP'P=0$.

**2. Reduced inverse including its graph-domain regularity.** Spectral calculus defines $S$ by the bounded Borel multiplier that is zero at $E$ and $(\lambda-E)^{-1}$ elsewhere on the spectrum. Thus $S=S^*$, $SP=PS=0$, $\|S\|\le g_0^{-1}$, $(A-E)S=Q$ on $H$, and $S(A-E)=Q$ on $Y$. The identity $AS=Q+ES$ and the graph estimate prove $S:H\to Y$ uniformly bounded. In particular $G:=S+P$ is the bounded inverse $H\to Y$ of $B:=A-E+P:Y\to H$. Both inverse equations are checked from $P^2=P$, $SP=PS=0$ and the preceding identities; they do not assume the reduced inverse has already been differentiated. Since $B\in C^2(\mathcal B(Y,H))$, its local Neumann inverse gives $G\in C^2(\mathcal B(H,Y))$, with $G'=-GB'G$ and $G''=2GB'GB'G-GB''G$. Consequently $S=G-P$ is $C^2(H\to Y)$, and its uniform bounds through two derivatives depend only on the constants already displayed.

**3. Bounded correction and commutator.** Define $K=[P',P]=P'P-PP'$, and $X=SP'P+PP'S$. Both are $C^1(H\to Y)$, because all factors have the graph regularity just proved and the embedding $Y\hookrightarrow H$ is bounded. Also $K^*=-K$, $X^*=X$ in $H$, and $[K,P]=P'$. For $y\in Y$, using $AP=PA=EP$ and the inverse equations,

$$[A,SP'P]y=QP'Py=P'Py,\qquad [A,PP'S]y=-PP'Qy=-PP'y.$$

Therefore $[A,X]=K$ on $Y$. Moreover $AX:H\to H$ is bounded since $X:H\to Y$ and $A:Y\to H$ are bounded; $XA$ on $Y$ has the bounded extension $AX-K$. This last assertion is not automatic for an arbitrary graph-domain bounded operator; here it follows from the explicit commutator.

**4. Modified propagator and domain legitimacy.** For fixed $T>0$, use the self-adjoint generator $G_T=TA+iK$ on $Y$, with $G_T\in C^1(\mathcal B(Y,H))$. The perturbation $iK$ is bounded and self-adjoint on $H$. Its exact self-adjointness assertion can be checked without AC Kato–Rellich: for a sufficiently large imaginary part, factor $G_T-z=(I+iK(TA-z)^{-1})(TA-z)$ and use a Neumann inverse at both conjugate points, then the adjoint-domain range argument above. The common-domain evolution construction supplies $U_A'=(-iTA+K)U_A$, $U_A(0)=I$, unitary on $H$ and preserving $Y$, just as it supplies the given $U_T$. For this CC specialization the autonomous exponentials in that construction must come from the local CC separable calculus, not the imported AC-only Stone/group supplier. The current generic evolution carrier has not yet made that replacement; see the exact open supplier obligation below.

For $y\in Y$, differentiate $U_A(s)^*P(s)U_A(s)y$ in $H$. Because $P,P'$ map $H$ into $Y$, all unbounded-generator factors have legitimate inputs. The derivative is

$$U_A^*(P'+iT[A,P]-[K,P])U_Ay=0.$$

Thus $P(s)U_A(s)=U_A(s)P(0)$ on $Y$, hence on $H$ by density.

**5. Correct integration and quantitative bound.** Put $D(s)=U_A(s)^*U_T(s)$ and $F(s)=U_A(s)^*X(s)U_T(s)$. For $y\in Y$, product differentiation is legitimate because $U_TY=Y$ and $XH\subseteq Y$, and the commutator has the bounded extension above. The strong identities are

$$D'=-U_A^*KU_T,\qquad F'=U_A^*(X'-KX+iT[A,X])U_T=U_A^*(X'-KX+iTK)U_T.$$

Every coefficient in the final expressions is bounded on $H$ and strongly continuous. The integrated identities therefore extend from $Y$ to $H$ by density; no operator-norm derivative of either unbounded propagator is asserted. Substitution gives

$$iT(D(s)-I)=-F(s)+X(0)+\int_0^sU_A(r)^*(X'(r)-K(r)X(r))U_T(r)\,dr.$$

Unitary norms and the strong-integral norm estimate imply

$$\|D(s)-I\|\le\frac1T\left(2\sup_{r\in[0,1]}\|X(r)\|+\int_0^1(\|X'(r)\|+\|K(r)\|\|X(r)\|)\,dr\right)=\frac CT.$$

The displayed $C$ is finite by the explicit $P,S$ bounds and independent of $T$. All its inputs depend only on $n$, $\gamma_{\min},\gamma_{\max}$ and $\|\gamma\|_{C^2}$; the fixed Sobolev constants and fixed $\delta_n$ are not additional path parameters. Finally,

$$Q(s)U_T(s)P(0)=Q(s)U_A(s)(D(s)-I)P(0),$$

because the omitted $Q(s)U_A(s)P(0)$ vanishes by intertwining. Contractivity of both projections proves the exact public leakage bound for all $s\in[0,1]$ and $T>0$. At $s=0$ the leakage is zero; the formula remains valid for arbitrarily small positive $T$. This proof works for the whole degenerate eigenspace and retains the full continuum in the complementary resolvent.

## Integration obligations and limits of this draft

1. The successor must independently inspect the new CC calculus supplier and its exact dependency closure. This draft uses its bounded/unbounded multiplier, transport and resolvent conclusions, not a citation to an AC theorem disguised as a local fact.
2. Exact common-domain evolution under CC still needs its actual AC-generation dependency repaired or a complete Coulomb specialization embedded locally. The current carrier's construction cannot acquire a CC acceptance just because its Statement says CC. In particular its limit proof also requires the usual rigorous passage from uniformly graph-bounded approximants to domain membership and the strong equation; the currently compressed statements are not an independent proof audit performed here. The adiabatic integration argument above is complete conditional on that strong propagator property.
3. Existing explicit Coulomb spectral facts remain separate supplier obligations if kept in Facts. The proposed conditional gap-and-dilation route needs neither their multiplicity assertion nor exhaustive negative-spectrum assertion to prove the public estimate. It does not claim those assertions false or delete the actual public eigenvalue/gap contract.
4. The defective finite adiabatic carrier is a precise additional failed supplier, not acceptance of its unaffected consumers. The owner must route its focused repair and any interface-sensitive duties; this research scope does not authorize production edits.
5. Dependencies and contracts must reflect whichever route is actually integrated: explicit Fourier/Hardy/CC calculus and common-domain evolution for the CC-preserving route; no unproved external fallback. Local proof-format/render checks are required only after an actual item is integrated by its owner. This draft itself receives no item precheck stamp or whole-consumer acceptance.
