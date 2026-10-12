---
id: lem-nrqm-approximations-finite-rank-gapped-cluster-projection
kind: lemma
domain: mathematics
title: "Finite-rank gapped spectral cluster under a bounded perturbation"
status: draft
origin: session
dependency_level: 2
deps: [def-countable-choice, def-hilbert-space, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-bounded-linear-operator, def-operator-norm, def-resolvent-and-spectrum-of-a-closed-unbounded-operator, def-projection-valued-measure, lem-nrqm-controlled-dynamics-cc-arbitrary-hilbert-spectral-calculus, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, thm-circle-integrals-of-integer-monomials, thm-cauchy-integral-formula-circle]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-resolvent-and-spectrum-of-a-closed-unbounded-operator: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  lem-nrqm-controlled-dynamics-cc-arbitrary-hilbert-spectral-calculus: mathematical-premise
  cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases: mathematical-premise
  thm-circle-integrals-of-integer-monomials: mathematical-premise
  thm-cauchy-integral-formula-circle: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 6.6: contour perturbation; finite-rank extension proved locally here"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $H$ be an arbitrary complex Hilbert space ([[def-hilbert-space]]) and $H_0=H_0^*$ a self-adjoint operator on its exact dense domain $D=D(H_0)$ ([[def-symmetric-self-adjoint-and-essentially-self-adjoint]]). Let $E\in\mathbb R$ be an isolated eigenvalue with $\operatorname{dist}(E,\sigma(H_0)\setminus\{E\})\ge g>0$, and let its orthogonal spectral projection $P_0=E_{H_0}(\{E\})$ have finite rank $r\ge1$. The PVM and gap calculus are those of [[lem-nrqm-controlled-dynamics-cc-arbitrary-hilbert-spectral-calculus]]. Let $V=V^*\in\mathcal B(H)$ and $v=\|V\|\ge0$ ([[def-bounded-linear-operator]], [[def-operator-norm]]). Put $H_\lambda=H_0+\lambda V$ on $D$, and define
$$\Omega_v=\begin{cases}\{\lambda\in\mathbb C:|\lambda|<g/(2v)\},&v>0,\\\mathbb C,&v=0.\end{cases}$$
For $\lambda\in\Omega_v$ write $q_\lambda=2|\lambda|v/g<1$, $\Gamma=\{z:|z-E|=g/2\}$ oriented counterclockwise, and $\Delta=\{z:|z-E|<g/2\}$.

**(a) Resolvent and exact domain.** $H_\lambda$ is closed and densely defined on $D$. Every $z\in\Gamma$ is a resolvent point, with the convention $R_\lambda(z)=(z-H_\lambda)^{-1}:H\to D$ of [[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]], and
$$R_\lambda(z)=R_0(z)\sum_{k\ge0}(\lambda VR_0(z))^k,\qquad \|R_\lambda(z)\|\le\frac{2/g}{1-q_\lambda},\qquad \|R_\lambda(z)-R_0(z)\|\le\frac2g\frac{q_\lambda}{1-q_\lambda}.$$
The series converges in operator norm uniformly on $\Gamma$ and locally uniformly in $\lambda\in\Omega_v$.

**(b) Finite-rank holomorphic cluster.** The norm contour integral
$$P_\lambda=\frac1{2\pi i}\oint_\Gamma R_\lambda(z)\,dz$$
is a bounded idempotent of rank exactly $r$ throughout $\Omega_v$, with $P_{\lambda=0}=P_0$ and $\|P_\lambda-P_0\|\le q_\lambda/(1-q_\lambda)$. It is holomorphic in operator norm. Its range $M_\lambda=P_\lambda H$ lies in $D$ and is invariant under $H_\lambda$, and $P_\lambda H_\lambda=H_\lambda P_\lambda$ on $D$. Both $H_\lambda P_\lambda\in\mathcal B(H)$ and $P_\lambda:H\to(D,\|x\|+\|H_0x\|)$ are holomorphic in their respective operator norms.

**(c) Exactly the enclosed spectrum.** Let $A_\lambda=H_\lambda|_{M_\lambda}:M_\lambda\to M_\lambda$. Then
$$\sigma(H_\lambda)\cap\Delta=\sigma(A_\lambda)\subset\Delta.$$
This is a nonempty finite set of at most $r$ eigenvalues. The restriction of $w-H_\lambda$ to $\ker P_\lambda$ has a bounded two-sided inverse on its exact domain $D\cap\ker P_\lambda$ for every $w\in\Delta$. Consequently all generalized eigenvectors at an enclosed eigenvalue belong to $M_\lambda$; their eigenspaces and generalized eigenspaces are those of this finite-dimensional restriction.

**(d) Real coupling and zero perturbation.** For real $\lambda$, $H_\lambda$ is self-adjoint on $D$. For real $\lambda\in\Omega_v$, $P_\lambda=E_{H_\lambda}((E-g/2,E+g/2))$ is the orthogonal projection on the entire enclosed spectral cluster ([[def-projection-valued-measure]]). If $v=0$, then $V=0$, $H_\lambda=H_0$ and $P_\lambda=P_0$ for every complex coupling, with $A_\lambda=E I_{M_0}$ and enclosed spectrum $\{E\}$.

No separability or arbitrary-index Axiom of Choice is assumed. The claim supplies a cluster and its finite restriction; for $r>1$ it supplies no ordering or individually holomorphic scalar eigenvalue branches.

## Facts & Assumptions

**Given:** CC; $H,H_0,D,E,g,P_0,r,V,v,\Omega_v,\lambda,\Gamma,\Delta$ as in the statement. Inner products are linear in the first argument. Contour integrals are operator-norm limits of Riemann sums.

[F1] The CC arbitrary-Hilbert supplier [[lem-nrqm-controlled-dynamics-cc-arbitrary-hilbert-spectral-calculus]] supplies the unique representing PVM, bounded Borel product/adjoint laws, exact square-integrability domains, concentration on the spectrum, spectral support equal to the spectrum and the distance resolvent bound. These are its current Statement and proof steps 4.1–6.2, rather than an AC global spectral decomposition.

[F2] The operator, domain and inverse conventions are those of [[def-symmetric-self-adjoint-and-essentially-self-adjoint]], [[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]], [[def-bounded-linear-operator]] and [[def-operator-norm]]. Bounded operator spaces are complete: an operator-norm Cauchy sequence has a pointwise limit in the complete target Hilbert space, which is linear and bounded, and the same uniform Cauchy estimates give operator-norm convergence. If $\|B\|<1$ the geometric series $\sum_{k\ge0}B^k$ is the inverse of $I-B$, as multiplication of finite sums leaves the remainder $B^{N+1}\to0$.

[F3] [[thm-circle-integrals-of-integer-monomials]] and [[thm-cauchy-integral-formula-circle]] supply scalar circle integrals and the Cauchy formula. Continuous scalar pairings and uniform norm limits give their bounded-operator versions. Finite-dimensional orthonormal bases require only finite Gram–Schmidt ([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]); an injective map on an $r$-dimensional space sends a basis to $r$ independent vectors, hence a basis, so is surjective; conversely a surjective map has $r$ spanning images of a basis, which must be independent. A map $B$ on a finite-dimensional Hilbert space is bounded because an orthonormal basis $(e_j)$ gives $\|Bx\|\le\sum_j|\langle x,e_j\rangle|\|Be_j\|\le(\sum_j\|Be_j\|^2)^{1/2}\|x\|$, and this applies to its inverse when bijective.

## Proof

**Given:** The data of the statement and [F1]–[F3].

1.1 [Gap and correctly ordered Neumann inverse] By [F1], the spectral support of $H_0$ is $\sigma(H_0)$. For $z\in\Gamma$, $|z-E|=g/2$ and every other spectral point $t$ has $|z-t|\ge|t-E|-|z-E|\ge g/2$. Thus $\|R_0(z)\|\le2/g$. The operator $H_\lambda$ is closed on $D$: if $x_n\to x$ and $H_\lambda x_n\to y$, then $H_0x_n\to y-\lambda Vx$, so closedness of $H_0$ gives $x\in D$ and $H_\lambda x=y$; the domain remains dense. On $D$, $z-H_\lambda=(I-\lambda VR_0(z))(z-H_0)$. Its first factor has the Neumann inverse [F2], since $\|\lambda VR_0(z)\|\le q_\lambda<1$. Therefore the displayed ordered series gives a two-sided inverse with range exactly $D$, and its geometric estimates give (a). Uniform convergence on the circle and each compact coupling subdisk proves norm holomorphy in $\lambda$; local inverse Neumann series give holomorphy in $z$ on the resolvent set. When $v=0$ this series is constant for all couplings. [given, F1, F2, algebra]

2.1 [Idempotence from two contours] Fix $\lambda\in\Omega_v$. Step 1.1 bounds the inverse uniformly on $\Gamma$, and another inverse Neumann series gives a resolvent annulus around it. Integrals of a holomorphic operator-valued function over concentric circles in that annulus are independent of radius: differentiating $\int_0^{2\pi}f(E+\rho e^{it})i\rho e^{it}\,dt$ in $\rho$ gives the integral of the periodic $t$ derivative of $f(E+\rho e^{it})e^{it}$, hence zero. Take an outer circle for $z$ and an inner circle for $w$. The inverse equations give $R_\lambda(z)R_\lambda(w)=[R_\lambda(w)-R_\lambda(z)]/(z-w)$, and also commutation of resolvents. In its double integral, the first term integrates in the outer variable to the inner projection integral because $\oint dz/(z-w)=2\pi i$; the second integrates in the inner variable to zero because $\oint dw/(z-w)=0$. Compact continuous integrals can be interchanged by norm Riemann sums. Annular independence identifies both circle integrals with $P_\lambda$, proving $P_\lambda^2=P_\lambda$. Resolvent commutation also gives $P_\lambda R_\lambda(z)=R_\lambda(z)P_\lambda$. [step 1.1, F2, F3, algebra]

3.1 [Graph domains, commutation and holomorphy] The identity $H_\lambda R_\lambda(z)=zR_\lambda(z)-I$ makes the contour integrand continuous into the complete graph space of the closed $H_\lambda$. Integrating there proves $P_\lambda H\subset D$ and $H_\lambda P_\lambda=(2\pi i)^{-1}\oint_\Gamma zR_\lambda(z)\,dz=:C_\lambda\in\mathcal B(H)$. On $D$ the other inverse equation gives $R_\lambda(z)H_\lambda=zR_\lambda(z)-I$, so integration gives $P_\lambda H_\lambda=C_\lambda$ there. Thus the range and kernel reduce the operator with its domain. The uniform coupling series makes both $P_\lambda$ and $C_\lambda$ norm holomorphic. Since $H_0P_\lambda=C_\lambda-\lambda VP_\lambda$, the pair $(P_\lambda,H_0P_\lambda)$ is holomorphic into $\mathcal B(H,H\oplus H)$ and takes values in the closed graph of $H_0$; hence $P_\lambda$ is holomorphic as an operator into that graph space. In particular, the finite restriction $A_\lambda$ is well-defined on all of $M_\lambda$. [step 1.1, step 2.1, F2, algebra]

3.2 [Initial projection and rank throughout the disk] At zero coupling [F1] evaluates the resolvent contour as the PVM projection on the real interior; its only unperturbed spectral point is $E$, so this is $P_0$. This evaluation follows by spectral pairings: scalar circle kernels integrate to one inside and zero outside [F3]; norm Riemann sums converge uniformly in the spectral variable, since the spectrum is at distance at least $g/2$ from the circle, allowing interchange with its finite scalar measures. The circle length $\pi g$ and step 1.1 give $\|P_\lambda-P_0\|\le q_\lambda/(1-q_\lambda)$. If bounded idempotents $P,Q$ have $\|P-Q\|<1$, then $x\in\operatorname{ran}P$ and $Qx=0$ imply $\|x\|=\|(P-Q)x\|<\|x\|$ unless $x=0$; therefore $Q|_{\operatorname{ran}P}$ is injective, and the reverse restriction is also injective. For $s,t\in[0,1]$, the inverse equations give $R_{s\lambda}(z)-R_{t\lambda}(z)=(s-t)\lambda R_{s\lambda}(z)VR_{t\lambda}(z)$, hence $\|P_{s\lambda}-P_{t\lambda}\|\le q_\lambda|s-t|/(1-q_\lambda)^2$. Choose an integer $N>q_\lambda/(1-q_\lambda)^2$ and compare the finite path $P_{j\lambda/N}$, $0\le j\le N$. At each adjacent pair the two injections and finite dimension imply equal rank. Starting with rank $r$ proves rank $r$ at $\lambda$, even when the direct distance estimate is at least one. If $q_\lambda=0$ the path is constant. [step 1.1, step 2.1, F1, F3, algebra]

4.1 [All spectral values of the finite restriction are inside] Put $M=M_\lambda$, $A=A_\lambda$, $P=P_\lambda$ and $Q=I-P$. For $z\in\Gamma$, resolvent commutation and the inverse equations give $R_\lambda(z)|_M=(z-A)^{-1}$ on $M$. If $Au=\alpha u$ with $u\ne0$, then $\alpha\notin\Gamma$ by those equations and $R_\lambda(z)u=(z-\alpha)^{-1}u$. The equation $Pu=u$ and its contour definition give winding number one for $\alpha$, so $\alpha\in\Delta$. In a finite basis of $M$, $w-A$ is invertible exactly when its kernel is zero [F3]; thus every spectral point of $A$ is an eigenvalue and lies in $\Delta$. There are at most $r$ distinct such points, since eigenvectors for distinct eigenvalues are linearly independent: in a shortest nontrivial relation among them, applying $A-\alpha I$ for one term removes that term and leaves a shorter nontrivial relation. There is at least one: otherwise $(z-A)^{-1}$ is holomorphic throughout a neighborhood of the closed disk, and the scalar Cauchy formula [F3] makes its contour integral zero entrywise, contradicting its integral $I_M$ and $r\ge1$. Here the zero integral follows by applying the Cauchy formula to $(z-E)(z-A)^{-1}$ at $E$. [step 2.1, step 3.1, step 3.2, F3, algebra]

4.2 [Complementary inverse on its exact domain] For $w\in\Delta$ define $B(w)=(2\pi i)^{-1}\oint_\Gamma R_\lambda(z)/(z-w)\,dz$. As in step 3.1 its range lies in $D$. The identity $(w-H_\lambda)R_\lambda(z)=I-(z-w)R_\lambda(z)$ gives $(w-H_\lambda)B(w)=I-P$ on $H$; its right-hand counterpart gives $B(w)(w-H_\lambda)=I-P$ on $D$. Resolvent commutation shows $B(w)$ commutes with $P,Q$. The bounded map $B_Q(w)=QB(w)Q$ therefore maps $QH$ into $D\cap QH$ and satisfies both inverse equations for $w-H_\lambda$ on that exact complementary domain. No assertion that $B(w)P=0$ is needed. The idempotent splitting is $H=M\oplus QH$ and, since $P H\subset D$ and $P$ preserves $D$, its domain splitting is $D=M\oplus(D\cap QH)$. The complementary domain is dense in $QH$, since applying the bounded $Q$ to approximants from the dense $D$ preserves $D$ and approximates every vector of $QH$. [step 2.1, step 3.1, F2, F3, construct, algebra]

5.1 [Exactly the interior spectrum and generalized eigenspaces] If $w\in\Delta\setminus\sigma(A)$, then the bounded operator $(w-A)^{-1}P+B_Q(w)$ maps $H$ into $D$ and is a two-sided inverse of $w-H_\lambda$ by the domain splitting and step 4.2. If $w\in\sigma(A)$, step 4.1 supplies a nonzero eigenvector in $M$, so $w\in\sigma(H_\lambda)$. This proves $\sigma(H_\lambda)\cap\Delta=\sigma(A)$, with its nonempty finite character from step 4.1. For such an eigenvalue $\alpha$ and an integer $k\ge1$, any generalized eigenvector $x\in D((H_\lambda-\alpha)^k)$ has $Qx$ in the complementary iterated domain, because $P,Q$ preserve $D$ and commute with $H_\lambda$. Step 4.2 makes $H_\lambda-\alpha$ injective on the complement; its powers are then injective on their domains, so $(H_\lambda-\alpha)^kQx=0$ forces $Qx=0$. Conversely $M\subset D$ is invariant, so every generalized eigenvector of $A$ is a generalized eigenvector of the full operator. This proves (c), including the exact complementary inverse. [step 3.1, step 4.1, step 4.2, F2, algebra]

6.1 [Real coupling, zero branch and assembly] The bounded-perturbation adjoint identity is $D(H_\lambda^*)=D(H_0^*)=D$, $H_\lambda^*=H_0+\overline\lambda V$: subtract the everywhere-defined bounded term from the adjoint functional to identify exactly the domain of $H_0^*$. Thus $H_\lambda$ is self-adjoint for every real $\lambda$. For real $\lambda\in\Omega_v$, apply [F1] to this operator. Its spectrum misses the circle by step 1.1, so has positive distance from it by compactness of the circle and openness of the resolvent set. The same uniform scalar-kernel/Riemann-sum evaluation as in step 3.2 identifies $P_\lambda$ with the PVM on the real interior, hence an orthogonal spectral projection on the entire cluster. If $v=0$, the norm definition gives $V=0$, all resolvents and projections are constant for every complex coupling, and the exact PVM domain gives $H_0P_0=EP_0$; therefore the restriction is $E I$ and its spectrum is $\{E\}$. Steps 1.1–5.1 give the other assertions for arbitrary $H$ under CC, using only a finite path and finite bases; no individually ordered or holomorphic scalar branches have been introduced. [step 1.1, step 3.1, step 3.2, step 4.1, step 4.2, step 5.1, F1, F2, algebra] ∎
