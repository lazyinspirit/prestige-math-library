# Research-only finite matrix adiabatic repair proposal

Exact supplier: `thm-nrqm-controlled-dynamics-finite-gapped-adiabatic-estimate`, actual carrier `physics/items/thm-nrqm-controlled-dynamics-finite-gapped-adiabatic-estimate.md`, raw SHA-256 `f48c6bf347cc7e7912b3fc1d1363a78ce55beac8d66585cb8cbb56e694c07538`. Adjacent bindings preserve this and the exact inspected Dyson/history inputs. Sole supplier/consumer mathematical reviewer and cap owner: `/root/physics_spectral_repair_successor`. This document is research support, not a production edit, acceptance, independent consumer review, or new repair round.

## Literal-contract obstruction

The original Statement assumes CC, $H\in C^2([0,1];\operatorname{Herm}(\mathbb C^d))$, and a spectral cluster $\sigma_P(s)$ at each $s$, with gap at least $g>0$ to its complementary spectrum. It does not state that the cluster is followed continuously, or provide an exact earlier definition that makes this part of “spectral cluster.” The original has no explicit rank restriction; none is added here. It concludes $P\in C^2$, defines $K=[P',P]$, supplies a $C^1$ Hermitian $X$ with $[H,X]=K$, proves transport, and claims the exact constant

$$C=2\sup_s\|X(s)\|+\int_0^1(\|X'(s)\|+\|K(s)\|\|X(s)\|)\,ds$$

in the leakage estimate $\|(I-P(s))U_T(s)P(0)\|\le C/T$, for every $T>0$ and $s\in[0,1]$.

Pointwise spectral separation does not imply coherent selection. Let $d=2$, $H(s)=\operatorname{diag}(0,1)$, and choose $\sigma_P(s)=\{0\}$ for $s<1/2$, $\sigma_P(s)=\{1\}$ for $s\ge1/2$. The matrix family is $C^\infty$, both clusters have uniform gap $1$, and both projections have rank $1$. Nevertheless $P$ jumps by operator norm $1$ at $1/2$. Thus conclusion (a) is false and the subsequent $P'$ and $U_A$ are undefined. For $s>1/2$, the ordinary propagator is diagonal and the leakage from the initial $0$ eigenspace is exactly $1$, so a uniform $C/T$ theorem would fail as $T\to\infty$ even if the undefined modified objects were omitted.

Consequently no proof of the literal original interface exists unless an exact available definition of “spectral cluster” includes continuous selection. This research document does not silently strengthen the hypotheses. It supplies the minimal missing obligation and a full proof conditional on that obligation for the owner to assess. A suitable precise obligation is: $P(s)$ is continuous in operator norm, or equivalently it is the local Riesz continuation of a chosen cluster at $s=0$ throughout the interval. Continuity alone is enough; extra differentiability, simple eigenvalues, an eigenbasis varying smoothly, or greater regularity of $H$ is unnecessary. If an original source contract already imposes this continuation, the owner may make that existing meaning explicit; otherwise it is a public-interface correction and invokes the ordinary owner-controlled consumer duties.

## Other exact defects to remove

The original Facts and Proof use $TH+K$ as a self-adjoint generator although $K^*=-K$. The correct self-adjoint generator is $TH+iK$, and its differential-equation coefficient is $-iTH+K$. The original expansion of $K^*$ also has a sign typo: $(P'P-PP')^*=PP'-P'P=-K$.

The original derivation of the transport identity omits the factors $-i$ and mixes these two generators. The original difference derivative and its $(1+iT)$ identity are false. The correct relations below retain the $KX$ term and give precisely the original displayed $C$.

The cross-block inverse bound $1/g$ in the original Facts is immediately valid in Hilbert–Schmidt norm, not automatically in the stated operator norm for arbitrary interlacing clusters. The proof below uses only invertibility and the valid Hilbert–Schmidt bound; the public error constant is defined from the actual $X$ and does not require an unsupported operator-norm Sylvester bound.

The actual norm-Dyson supplier also has a separate ordering defect: its Statement integrates over $t_1<\cdots<t_n$ but multiplies $\mathcal H(t_1)\cdots\mathcal H(t_n)$, earliest time on the left. The claimed left-generator ODE requires the latest time on the left. Its proof silently uses the reversed simplex. This finite proof supplies its needed matrix ODE construction locally and does not assert that the generic Dyson supplier is sound. Its imported AC-only autonomous group dependency is also unnecessary here.

Original inspected M20 history (`physics/research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/mathematical-prerequisites.md`, lines 149–157) already gives the correct $D'=-U_A^*KU_T$ and $F'=U_A^*(X'-KX+iT[H,X])U_T$ identities and the full original error constant. That historical calculation supports the proposed sign correction; it does not repair the missing continuous-cluster hypothesis.

## Full proof with the precisely identified coherent-selection obligation

Assume the original hypotheses and the explicit obligation that $P$ is norm-continuous. This is the only additional prerequisite needed for the following proof. All norms are matrix operator norms unless marked HS. The argument uses finite-dimensional linear algebra, continuous matrix Riemann integrals, convergent sequences, and uniquely specified ODE operations. It is valid under CC and does not import arbitrary AC.

**1. The projection is $C^2$ without assuming a smooth eigenbasis.** Fix $s_0$ and list the finitely many distinct eigenvalues of $H(s_0)$. Around each distinct eigenvalue belonging to the chosen cluster take a positively oriented small circle containing no other eigenvalue of $H(s_0)$, with disjoint closed discs. A finite choice of radii suffices; one can take the first sufficiently small positive rational radius for each center. Let $\Gamma$ be their finite union. On $\Gamma$, $z-H(s_0)$ is invertible. Compactness and the Neumann formula show it remains invertible for all $s$ sufficiently near $s_0$. Define

$$P_{\rm loc}(s)=\frac1{2\pi i}\oint_\Gamma(z-H(s))^{-1}\,dz.$$

Finite diagonalization at each fixed $s$ and the scalar circle integral show that this is the orthogonal spectral projection onto the eigenvalues inside those discs. The inverse equations give $R'=RH'R$ and $R''=RH''R+2RH'RH'R$. The local contour is fixed, so continuous differentiation under its finite integrals gives $P_{\rm loc}\in C^2$. Both $P(s)$ and $P_{\rm loc}(s)$ are spectral projections of the same matrix and therefore commute. At $s_0$ they coincide. By the assumed continuity and the just-proved local continuity, their difference has norm less than $1$ on a smaller neighborhood. Distinct commuting orthogonal projections have difference norm $1$: simultaneous decomposition into their intersection and the two difference subspaces gives a unit vector with difference equal to $\pm1$ if they differ. Hence $P=P_{\rm loc}$ there. This proves $P\in C^2$ locally everywhere, and thus on $[0,1]$ with one-sided endpoint derivatives. It also shows that its rank is constant, without imposing a new rank hypothesis.

If the cluster is empty or full, continuity makes that condition locally persistent by the same projection-distance argument; the projection is identically $0$ or $I$ on the connected interval, and the subsequent proof reduces to $K=X=0$. This handles any original empty-cluster convention without a nonempty-cluster restriction.

**2. Projection identities and elementary ODE construction.** Differentiate $P^2=P$ to obtain $P'=P'P+PP'$ and $PP'P=0$. Because $P=P^*$, also $P'=P'^*$. Thus $K=P'P-PP'$ is $C^1$, $K^*=-K$, and

$$[K,P]=P'P+PP'=P'.$$

For any continuous matrix coefficient $B(s)$, define $V_0(s)=I$ and $V_{j+1}(s)=\int_0^s B(r)V_j(r)\,dr$. If $M=\sup\|B\|$, induction gives $\|V_j(s)\|\le(Ms)^j/j!$. The uniformly convergent sum $V=\sum_jV_j$ solves $V=I+\int_0^sBV$ and hence $V'=BV$ by the fundamental theorem of calculus. For two solutions with the same initial value, iterating the integral difference bound gives $\|V-\widetilde V\|\le M^j/j!\sup\|V-\widetilde V\|$ for every $j$, proving uniqueness as $j\to\infty$. The same recursion works for any initial matrix. For anti-Hermitian $B$, differentiation gives $(V^*V)'=V^*(B^*+B)V=0$, so $V^*V=I$; in finite dimension injectivity implies surjectivity, giving $VV^*=I$. Thus $V$ is unitary. This local construction avoids both the incorrect generic ordered-integral formula and every autonomous spectral/group theorem.

Apply it to $B=K$ to obtain $W'=KW$, $W(0)=I$. Since $K\in C^1$, the equation makes $W\in C^2$. Differentiating $W^*PW$ yields

$$\frac d{ds}(W^*PW)=W^*(P'-[K,P])W=0,$$

so $W^*P(s)W=P(0)=:P_0$. This is the correct Kato transport, with $W^*'=-W^*K$. No choice of instantaneous eigenvectors is involved.

**3. Smooth Hermitian commutator solution for any separated cluster.** Put $\widetilde H=W^*HW$ and $\widetilde K=W^*KW$. Then $\widetilde H\in C^2$, $\widetilde K\in C^1$, and $[\widetilde H,P_0]=0$. The matrix $\widetilde K$ is anti-Hermitian and has only cross blocks with respect to $P_0$, because $PKP=(I-P)K(I-P)=0$.

Let $\mathcal V$ be the fixed finite-dimensional complex vector space of matrices $Y$ with $P_0YP_0=(I-P_0)Y(I-P_0)=0$. The linear map $L_s:\mathcal V\to\mathcal V$, $L_s(Y)=[\widetilde H(s),Y]$, is $C^2$ as a matrix-valued map on this fixed space. To prove invertibility at each $s$, diagonalize the two Hermitian diagonal blocks of $\widetilde H(s)$ at that one time. In these finite bases every cross entry is multiplied by $\lambda-\mu$, where $\lambda$ belongs to the cluster and $\mu$ to its complement, or the reverse. The given full complementary spectral gap gives $|\lambda-\mu|\ge g$. Thus all cross coefficients are invertible and

$$\|L_s^{-1}Y\|_{\rm HS}\le g^{-1}\|Y\|_{\rm HS}.$$

This diagonalization is only a pointwise verification of a uniquely determined inverse; no simultaneous choice of bases over an uncountable interval is made. In fixed coordinates on $\mathcal V$, the Neumann inverse or adjugate formula proves $L_s^{-1}$ is $C^2$; its derivative is $-L_s^{-1}L_s'L_s^{-1}$. Define $\widetilde X=L_s^{-1}\widetilde K$, which is $C^1$. Since $\widetilde K^*=-\widetilde K$ and $[\widetilde H,Y]^*=-[\widetilde H,Y^*]$, taking adjoints of the equation shows $[\widetilde H,\widetilde X^*]=\widetilde K$. Both $\widetilde X$ and $\widetilde X^*$ lie in $\mathcal V$, so uniqueness gives $\widetilde X^*=\widetilde X$. Set $X=W\widetilde XW^*$. It is $C^1$, Hermitian, and $[H,X]=K$. If $\mathcal V=\{0\}$, use its unique zero inverse solution $X=0$; the proof has no division by a nonexistent cross entry.

**4. Physical and modified finite propagators and intertwining.** Apply the matrix ODE construction of step 2 to $B_T=-iTH$ and $B_A=-iTH+K$. Both coefficients are anti-Hermitian and continuous. It supplies unique $C^1$ unitary matrices $U_T,U_A$ with initial value $I$. Multiplication of the second differential equation by $i$ gives exactly the original self-adjoint-generator equation $iU_A'=(TH+iK)U_A$. Because $[H,P]=0$, product differentiation gives

$$\frac d{ds}(U_A^*PU_A)=U_A^*(P'+iT[H,P]-[K,P])U_A=0.$$

Thus $U_A^*P(s)U_A=P(0)$, or $P(s)U_A(s)=U_A(s)P(0)$. This establishes the original transport conclusion for every $T>0$.

**5. Exact integration identity and the unchanged error constant.** Set $D=U_A^*U_T$ and $F=U_A^*XU_T$. The equations give $U_A^*'=U_A^*(iTH-K)$ and $U_T'=-iTHU_T$. Therefore

$$D'=-U_A^*KU_T,\qquad F'=U_A^*(X'-KX+iT[H,X])U_T=U_A^*(X'-KX+iTK)U_T.$$

Substitution, with all signs retained, gives

$$iTD'=-F'+U_A^*(X'-KX)U_T.$$

Integrating from $0$ to $s$, and using $D(0)=I$, $F(0)=X(0)$, yields

$$iT(D(s)-I)=-F(s)+X(0)+\int_0^sU_A(r)^*(X'(r)-K(r)X(r))U_T(r)\,dr.$$

The unitaries have norm $1$, $X\in C^1$, and the interval is compact. Hence

$$\|D(s)-I\|\le\frac{2\sup_{r\in[0,1]}\|X(r)\|+\int_0^1(\|X'(r)\|+\|K(r)\|\|X(r)\|)\,dr}{T}=\frac CT.$$

The constant is exactly the original public constant, finite and independent of $T$. Finally, $U_T=U_AD$ and transport gives $(I-P(s))U_A(s)P(0)=0$. Therefore

$$\|(I-P(s))U_T(s)P(0)\|=\|(I-P(s))U_A(s)(D(s)-I)P(0)\|\le\|D(s)-I\|\le C/T.$$

This holds for every $T>0$ and $s\in[0,1]$, including zero leakage at $s=0$. No eigenvalue ordering within the cluster, rank-one hypothesis, stronger derivative hypothesis, or changed error constant has been used.

## Owner handoff limits

The proof above closes the sign/type, transport, commutator-smoothness and quantitative integration defects. The sole unresolved public-contract issue is coherent cluster selection: either identify and cite an actual earlier definition already imposing it, or correct the public interface and perform the owner's required full old/current/alias consumer review. The literal pointwise-gap Statement cannot receive a pass under this draft.

The separate generic Dyson ordering and common evolution findings are preserved as precise prerequisites, not silently repaired in this scope. Local matrix Picard construction supplies every ODE fact actually needed here under the original CC assumption. No new source-reading, audit, item-format pass, readiness, native acceptance or production authorization is claimed.

My earlier three adiabatic research files have been moved, without changing their bytes, from the mistaken root `research/` directory into this authorized `physics/research/physics-cm-qm-gr-79-2026-10-11-cc-spectral-prerequisite/` directory. The corrected actual path is `physics/research/physics-cm-qm-gr-79-2026-10-11-cc-spectral-prerequisite/parallel-adiabatic-repair-draft.md`; only my own draft, bindings and checks were moved. No unrelated file was deleted.
