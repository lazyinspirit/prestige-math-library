---
id: thm-nrqm-controlled-dynamics-finite-gapped-adiabatic-estimate
aliases: [nrqm-controlled-dynamics-finite-gapped-adiabatic-estimate]
kind: theorem
domain: mathematics
title: "Finite gapped adiabatic estimate"
status: published
origin: pipeline
dependency_level: 0
deps: [thm-cauchy-integral-formula-circle, def-self-adjoint-and-normal-endomorphism, def-operator-norm, def-bounded-linear-operator, def-hilbert-space, def-countable-choice]
dependency_roles:
  thm-cauchy-integral-formula-circle: mathematical-premise
  def-self-adjoint-and-normal-endomorphism: mathematical-premise
  def-operator-norm: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), Two-State System pp. 153-155 (adiabatic evolution as the slow limit)"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
    - title: "T. Kato, Perturbation Theory for Linear Operators, Chapter II.4 (adiabatic theorem for a nondegenerate isolated level; standard analytic perturbation treatment)"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$H:[0,1]\to\operatorname{Herm}(\mathbb C^d)$ be a map of class $C^2$ into the
Hermitian $d\times d$ matrices, let $P(s)$ be the spectral projection of $H(s)$
for a spectral cluster $\sigma_P(s)$ that is separated from the complementary
spectrum by a uniform gap: $\operatorname{dist}(\sigma_P(s),\sigma(H(s))\setminus\sigma_P(s))\ge g>0$
for all $s\in[0,1]$. Require that the cluster is followed coherently:
$P(s)$ is continuous in operator norm (equivalently, it follows the local
Riesz continuation of its initial cluster). Fix $T>0$. Let $U_T$ solve
$i\,\partial_sU_T(s)=TH(s)U_T(s)$, $U_T(0)=I$
by the finite matrix construction below, and let
$U_A$ solve $i\,\partial_sU_A(s)=\bigl(TH(s)+i[P'(s),P(s)]\bigr)U_A(s)$,
$U_A(0)=I$ (equivalently $U_A'=(-iTH+K)U_A$ with $K=[P',P]$). Then:

(a) $P\in C^2([0,1];\operatorname{End}(\mathbb C^d))$ and $K=[P',P]$ is
anti-Hermitian of class $C^1$ with $[K,P]=P'$.

(b) There is a $C^1$ Hermitian $X:[0,1]\to\operatorname{End}(\mathbb C^d)$ with
$[H(s),X(s)]=K(s)$ for all $s$.

(c) *Intertwining.* $P(s)U_A(s)=U_A(s)P(0)$ for all $s$.

(d) *Adiabatic estimate.* With
$C:=2\sup_s\|X(s)\|+\int_0^1\bigl(\|X'(s)\|+\|K(s)\|\|X(s)\|\bigr)ds$ one has
$$\bigl\|(I-P(s))U_T(s)P(0)\bigr\|\le\frac CT\qquad(s\in[0,1]).$$

The estimate is finite-dimensional and conditional on the uniform positive gap;
gap-closing families and unbounded families are not covered.

## Facts & Assumptions

**Given:** CC, the $C^2$ Hermitian family $H$, a continuously followed gapped spectral cluster $P$, and $T>0$. All matrix norms are operator norms unless marked HS. No restriction on the cluster rank or ordering inside it is imposed.

[F1] Scalar circle integration is [[thm-cauchy-integral-formula-circle]]. Every Hermitian matrix has an orthonormal eigenbasis: maximize its real quadratic form on the compact unit sphere, differentiate along each real and imaginary tangent direction to obtain an eigenvector, then restrict to its invariant orthogonal complement and induct on the finite dimension. This uses only finite-dimensional compactness and a finite induction, no family of varying eigenbases. Matrix operations, norms and adjoints are [[def-self-adjoint-and-normal-endomorphism]], [[def-operator-norm]] and [[def-bounded-linear-operator]]. Continuous finite matrix integrals and primitives are taken entrywise; their elementary fundamental theorem gives the ODE construction below.

## Proof

1.1 [The projection is $C^2$ without assuming a smooth eigenbasis] Fix $s_0$ and list the finitely many distinct eigenvalues of $H(s_0)$. Around each distinct eigenvalue belonging to the chosen cluster take a positively oriented small circle containing no other eigenvalue of $H(s_0)$, with disjoint closed discs. A finite choice of radii suffices; one can take the first sufficiently small positive rational radius for each center. Let $\Gamma$ be their finite union. On $\Gamma$, $z-H(s_0)$ is invertible. Compactness and the Neumann formula show it remains invertible for all $s$ sufficiently near $s_0$. Define $$P_{\rm loc}(s)=\frac1{2\pi i}\oint_\Gamma(z-H(s))^{-1}\,dz.$$ Finite diagonalization at each fixed $s$ and the scalar circle integral show that this is the orthogonal spectral projection onto the eigenvalues inside those discs. The inverse equations give $R'=RH'R$ and $R''=RH''R+2RH'RH'R$. The local contour is fixed, so continuous differentiation under its finite integrals gives $P_{\rm loc}\in C^2$. Both $P(s)$ and $P_{\rm loc}(s)$ are spectral projections of the same matrix and therefore commute. At $s_0$ they coincide. By the assumed continuity and the just-proved local continuity, their difference has norm less than $1$ on a smaller neighborhood. Distinct commuting orthogonal projections have difference norm $1$: simultaneous decomposition into their intersection and the two difference subspaces gives a unit vector with difference equal to $\pm1$ if they differ. Hence $P=P_{\rm loc}$ there. This proves $P\in C^2$ locally everywhere, and thus on $[0,1]$ with one-sided endpoint derivatives. It also shows that its rank is constant, without imposing a new rank hypothesis. If the cluster is empty or full, continuity makes that condition locally persistent by the same projection-distance argument; the projection is identically $0$ or $I$ on the connected interval, and the subsequent proof reduces to $K=X=0$. This handles any original empty-cluster convention without a nonempty-cluster restriction. [given, F1, construct, algebra]

2.1 [Projection identities and elementary ODE construction] Differentiate $P^2=P$ to obtain $P'=P'P+PP'$ and $PP'P=0$. Because $P=P^*$, also $P'=P'^*$. Thus $K=P'P-PP'$ is $C^1$, $K^*=-K$, and $$[K,P]=P'P+PP'=P'.$$ For any continuous matrix coefficient $B(s)$, define $V_0(s)=I$ and $V_{j+1}(s)=\int_0^s B(r)V_j(r)\,dr$. If $M=\sup\|B\|$, induction gives $\|V_j(s)\|\le(Ms)^j/j!$. The uniformly convergent sum $V=\sum_jV_j$ solves $V=I+\int_0^sBV$ and hence $V'=BV$ by the fundamental theorem of calculus. For two solutions with the same initial value, iterating the integral difference bound gives $\|V-\widetilde V\|\le M^j/j!\sup\|V-\widetilde V\|$ for every $j$, proving uniqueness as $j\to\infty$. The same recursion works for any initial matrix. For anti-Hermitian $B$, differentiation gives $(V^*V)'=V^*(B^*+B)V=0$, so $V^*V=I$; in finite dimension injectivity implies surjectivity, giving $VV^*=I$. Thus $V$ is unitary. This local construction avoids both the incorrect generic ordered-integral formula and every autonomous spectral/group theorem. Apply it to $B=K$ to obtain $W'=KW$, $W(0)=I$. Since $K\in C^1$, the equation makes $W\in C^2$. Differentiating $W^*PW$ yields $$\frac d{ds}(W^*PW)=W^*(P'-[K,P])W=0,$$ so $W^*P(s)W=P(0)=:P_0$. This is the correct Kato transport, with $(W^*)'=-W^*K$. No choice of instantaneous eigenvectors is involved. [given, F1, construct, algebra, step 1.1]

3.1 [Smooth Hermitian commutator solution for any separated cluster] Put $\widetilde H=W^*HW$ and $\widetilde K=W^*KW$. Then $\widetilde H\in C^2$, $\widetilde K\in C^1$, and $[\widetilde H,P_0]=0$. The matrix $\widetilde K$ is anti-Hermitian and has only cross blocks with respect to $P_0$, because $PKP=(I-P)K(I-P)=0$. Let $\mathcal V$ be the fixed finite-dimensional complex vector space of matrices $Y$ with $P_0YP_0=(I-P_0)Y(I-P_0)=0$. The linear map $L_s:\mathcal V\to\mathcal V$, $L_s(Y)=[\widetilde H(s),Y]$, is $C^2$ as a matrix-valued map on this fixed space. To prove invertibility at each $s$, diagonalize the two Hermitian diagonal blocks of $\widetilde H(s)$ at that one time. In these finite bases every cross entry is multiplied by $\lambda-\mu$, where $\lambda$ belongs to the cluster and $\mu$ to its complement, or the reverse. The given full complementary spectral gap gives $|\lambda-\mu|\ge g$. Thus all cross coefficients are invertible and $$\|L_s^{-1}Y\|_{\rm HS}\le g^{-1}\|Y\|_{\rm HS}.$$ This diagonalization is only a pointwise verification of a uniquely determined inverse; no simultaneous choice of bases over an uncountable interval is made. In fixed coordinates on $\mathcal V$, the Neumann inverse or adjugate formula proves $L_s^{-1}$ is $C^2$; its derivative is $-L_s^{-1}L_s'L_s^{-1}$. Define $\widetilde X=L_s^{-1}\widetilde K$, which is $C^1$. Since $\widetilde K^*=-\widetilde K$ and $[\widetilde H,Y]^*=-[\widetilde H,Y^*]$, taking adjoints of the equation shows $[\widetilde H,\widetilde X^*]=\widetilde K$. Both $\widetilde X$ and $\widetilde X^*$ lie in $\mathcal V$, so uniqueness gives $\widetilde X^*=\widetilde X$. Set $X=W\widetilde XW^*$. It is $C^1$, Hermitian, and $[H,X]=K$. If $\mathcal V=\{0\}$, use its unique zero inverse solution $X=0$; the proof has no division by a nonexistent cross entry. [given, F1, construct, algebra, step 1.1, step 2.1]

4.1 [Physical and modified finite propagators and intertwining] Apply the matrix ODE construction of step 2.1 to $B_T=-iTH$ and $B_A=-iTH+K$. Both coefficients are anti-Hermitian and continuous. It supplies unique $C^1$ unitary matrices $U_T,U_A$ with initial value $I$. Multiplication of the second differential equation by $i$ gives exactly the original self-adjoint-generator equation $iU_A'=(TH+iK)U_A$. Because $[H,P]=0$, product differentiation gives $$\frac d{ds}(U_A^*PU_A)=U_A^*(P'+iT[H,P]-[K,P])U_A=0.$$ Thus $U_A^*P(s)U_A=P(0)$, or $P(s)U_A(s)=U_A(s)P(0)$. This establishes the original transport conclusion for every $T>0$. [given, F1, construct, algebra, step 1.1, step 2.1, step 3.1]

5.1 [Exact integration identity and the unchanged error constant] Set $D=U_A^*U_T$ and $F=U_A^*XU_T$. The equations give $(U_A^*)'=U_A^*(iTH-K)$ and $U_T'=-iTHU_T$. Therefore $$D'=-U_A^*KU_T,\qquad F'=U_A^*(X'-KX+iT[H,X])U_T=U_A^*(X'-KX+iTK)U_T.$$ Substitution, with all signs retained, gives $$iTD'=-F'+U_A^*(X'-KX)U_T.$$ Integrating from $0$ to $s$, and using $D(0)=I$, $F(0)=X(0)$, yields $$iT(D(s)-I)=-F(s)+X(0)+\int_0^sU_A(r)^*(X'(r)-K(r)X(r))U_T(r)\,dr.$$ The unitaries have norm $1$, $X\in C^1$, and the interval is compact. Hence $$\|D(s)-I\|\le\frac{2\sup_{r\in[0,1]}\|X(r)\|+\int_0^1(\|X'(r)\|+\|K(r)\|\|X(r)\|)\,dr}{T}=\frac CT.$$ The constant is exactly the original public constant, finite and independent of $T$. Finally, $U_T=U_AD$ and transport gives $(I-P(s))U_A(s)P(0)=0$. Therefore $$\|(I-P(s))U_T(s)P(0)\|=\|(I-P(s))U_A(s)(D(s)-I)P(0)\|\le\|D(s)-I\|\le C/T.$$ This holds for every $T>0$ and $s\in[0,1]$, including zero leakage at $s=0$. No eigenvalue ordering within the cluster, rank-one hypothesis, stronger derivative hypothesis, or changed error constant has been used. [given, F1, construct, algebra, step 1.1, step 2.1, step 3.1, step 4.1] ∎

## Why coherent selection is required

Pointwise spectral separation does not imply coherent selection. Let $d=2$, $H(s)=\operatorname{diag}(0,1)$, and choose $\sigma_P(s)=\{0\}$ for $s<1/2$, $\sigma_P(s)=\{1\}$ for $s\ge1/2$. The matrix family is $C^\infty$, both clusters have uniform gap $1$, and both projections have rank $1$. Nevertheless $P$ jumps by operator norm $1$ at $1/2$. Thus conclusion (a) is false and the subsequent $P'$ and $U_A$ are undefined. For $s>1/2$, the ordinary propagator is diagonal and the leakage from the initial $0$ eigenspace is exactly $1$, so a uniform $C/T$ theorem would fail as $T\to\infty$ even if the undefined modified objects were omitted.
