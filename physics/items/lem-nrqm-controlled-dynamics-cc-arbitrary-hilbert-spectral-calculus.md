---
id: lem-nrqm-controlled-dynamics-cc-arbitrary-hilbert-spectral-calculus
kind: lemma
domain: mathematics
title: "CC spectral calculus on an arbitrary complex Hilbert space by compatible vector-local Cayley subspaces"
status: published
origin: pipeline
dependency_level: 1
deps: [lem-nrqm-controlled-dynamics-cc-separable-spectral-calculus, thm-self-adjoint-resolvent-estimate, thm-orthogonal-decomposition-by-a-closed-subspace, def-countable-choice, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-hilbert-space]
dependency_roles:
  lem-nrqm-controlled-dynamics-cc-separable-spectral-calculus: mathematical-premise
  thm-self-adjoint-resolvent-estimate: mathematical-premise
  thm-orthogonal-decomposition-by-a-closed-subspace: mathematical-premise
  def-countable-choice: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-hilbert-space: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, spectral calculus and unitary groups"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $H$ be an arbitrary
complex Hilbert space, with inner product linear in the first variable,
and let $A=A^*$ be a densely defined self-adjoint operator on $H$.
There is no separability or supplied-basis hypothesis on $H$.

There is a unique regular projection-valued Borel measure $E_A$ on
$\mathbb R$ representing $A$, with $E_A(\mathbb R)=I$, strong countable
additivity and

$$D(A)=\{x:\int\lambda^2d\mu_x(\lambda)<\infty\},\qquad \|Ax\|^2=\int\lambda^2d\mu_x,\qquad \mu_x(B)=\langle E_A(B)x,x\rangle.$$

Regularity means compact inner and open outer approximation of each finite
scalar measure $\mu_x$. For bounded Borel $b$, its calculus satisfies
$\|b(A)\|\le\sup|b|$, $(bc)(A)=b(A)c(A)$ and
$\overline b(A)=b(A)^*$. For finite-valued, possibly unbounded complex Borel
$b$, there is a closed densely defined operator $b(A)$ on exactly
$\{x:\int|b|^2d\mu_x<\infty\}$, with norm given by that integral and
convergence of the bounded cutoffs on its domain.

The PVM is concentrated on $\sigma(A)$, and a real $\lambda$ belongs to $\sigma(A)$ exactly when every neighborhood of $\lambda$ has nonzero spectral projection. For $z\notin\sigma(A)$, the bounded resolvent is the multiplier $(\lambda-z)^{-1}$, maps into exactly $D(A)$, and has norm at most $\operatorname{dist}(z,\sigma(A))^{-1}$ (with the zero-space convention $1/\infty=0$).

The operators $U_A(t)=e^{itA}$ form a strongly continuous unitary group on
all of $H$, with the exact derivative criterion

$$\lim_{t\to0}\frac{U_A(t)x-x}{t}\text{ exists in }H\quad\Longleftrightarrow\quad x\in D(A),\qquad \left.\frac{d}{dt}U_A(t)x\right|_{t=0}=iAx.$$

They preserve $D(A)$ and its graph norm and commute with $A$ on that domain.
The group with this exact generator is unique. PVMs, Borel calculus and
groups transport under unitary intertwiners, and an isometry intertwining
the groups for all real times has a reducing closed range and intertwines
the PVMs. The construction uses countably generated subspaces attached to
each finite tuple of vectors and their uniquely determined compatible
calculus; it does not choose an arbitrary global cyclic decomposition or
an orthonormal basis of $H$.

## Facts & Assumptions

**Given:** CC, the arbitrary complex Hilbert space $H$ and the self-adjoint operator $A$ with its exact dense domain.

[F1] The proved fixed-dense-sequence construction [[lem-nrqm-controlled-dynamics-cc-separable-spectral-calculus]] applies to a Hilbert space with a specified countable norm-dense sequence and a self-adjoint operator. It gives a unique regular PVM with the exact square-integrability domain, bounded/unbounded Borel calculus and strong group with exact derivative domain. Its scalar cyclic moment argument proves uniqueness of a regular positive circle measure with prescribed moments $\langle U^nx,x\rangle$: Fejer approximates continuous functions by Laurent polynomials, distance cutoffs determine closed-set masses, and regularity determines all Borel masses. This scalar uniqueness is used below without requiring a dense sequence for the whole $H$.

[F2] [[thm-self-adjoint-resolvent-estimate]] assumes CC and self-adjointness on a Hilbert space, without separability. It supplies the inverses $Q_{\pm i}=(A\mp i)^{-1}:H\to D(A)$, with bounded norm. The adjoint and resolvent identities give the Cayley unitary $U=(A-i)(A+i)^{-1}=I-2iQ_{-i}$; these identities are verified below using the inverse equations, rather than a general spectral theorem.

[F3] [[thm-orthogonal-decomposition-by-a-closed-subspace]] assumes CC and a closed linear subspace of any real or complex Hilbert space, and supplies its unique orthogonal projection. Linearity, contraction and self-adjointness follow from the unique decomposition and the Pythagorean identity. The compatible-vector construction below uses these unique projections rather than a family of choices of representing vectors.

## Proof

1.1 Vector-local Cayley subspaces: the adjoint inverse equations give $Q_{-i}^*=Q_i$; inserting $A+i=(A-i)+2i$ into the inverse equations gives $Q_i-Q_{-i}=2iQ_iQ_{-i}$ and commutation of the resolvents. Consequently $(I+2iQ_i)(I-2iQ_{-i})=I$, with the reverse product also $I$, so the $U$ in [F2] is unitary. For a finite tuple $\mathbf x=(x_1,\ldots,x_m)$ put $K_{\mathbf x}=\overline{\operatorname{span}}\{U^nx_j:n\in\mathbb Z,1\le j\le m\}$, permitting the zero space. The rational-complex finite linear combinations of this explicitly enumerated countable orbit give a specified dense sequence in $K_{\mathbf x}$. This says nothing about separability of the whole $H$. The orbit span and its closure are invariant under both $U$ and $U^*$, hence reduce $U$; [F3] gives a unique projection $P_{\mathbf x}$ commuting with $U$. Thus it commutes with $Q_{-i}=(I-U)/(2i)$ and, by taking adjoints, with $Q_i$. For $x=Q_{-i}y\in D(A)$, $P_{\mathbf x}x=Q_{-i}P_{\mathbf x}y\in D(A)$ and $AP_{\mathbf x}x=P_{\mathbf x}Ax$ by $(A+i)Q_{-i}=I$. Hence every $K_{\mathbf x}$ reduces the unbounded operator with its actual domain. No decomposition indexed by an arbitrary family has been selected. [F2, F3, given, construct, algebra]

2.1 Actual self-adjoint restrictions: for any $K=K_{\mathbf x}$ define $A_K$ on $D(A)\cap K$ by restriction. This domain is dense in $K$: projecting a norm-approximating sequence from $D(A)$ onto $K$ preserves the domain by step 1.1 and converges to any chosen vector of $K$. The restricted operator is symmetric, and $Q_{\pm i}|_K$ are two-sided inverses from $K$ onto $D(A)\cap K$ of $A_K\mp i$, because both the resolvents and $A$ preserve $K$. If $y\in D(A_K^*)$, solve $(A_K-i)x=(A_K^*-i)y$ with $x\in D(A_K)$ by that surjectivity. Then $y-x\in\ker(A_K^*-i)=\operatorname{ran}(A_K+i)^\perp=\{0\}$, so $y=x\in D(A_K)$ and $A_K^*y=A_Ky$. This proves $A_K$ self-adjoint including domains. We may therefore apply [F1] using the specified orbit-dense sequence from step 1.1. Write its uniquely determined PVM as $E_K$ and its calculus as $b(A_K)$. [F1, F2, step 1.1, algebra]

3.1 Compatibility inside a common finite-tuple space: suppose $M=K_{\mathbf y}\subseteq K_{\mathbf x}=K$; the restriction to $K$ of the projection onto $M$ commutes with $A_K$ including its domain, by step 1.1. The reflection $J=2P_M-I_K$ is unitary and $JA_KJ=A_K$ on exactly $D(A_K)$. The PVM $JE_K(B)J$ is consequently another regular representing PVM for $A_K$, so uniqueness in [F1] gives $JE_K(B)J=E_K(B)$ for each Borel $B$. Thus $E_K(B)$ preserves $M$ and $M^\perp\cap K$. Its restriction to $M$ is a regular PVM representing $A_M$, including the exact domain: both the norm integrals and the operator action are the restrictions of those on $K$. Uniqueness in [F1] therefore gives $E_K(B)|_M=E_M(B)$. Simple-function approximations imply the same restriction identity for bounded Borel calculus, and its norm-convergent cutoffs give it for unbounded Borel functions on their precise domains. In particular, for any $x,y$ and scalars $c,d$, all of $K_x$, $K_y$ and $K_{cx+dy}$ lie in $K_{(x,y)}$ and use the same calculus there. The local objects are unique; their assembly never chooses among possible PVMs or representations. [F1, step 1.1, step 2.1, construct, algebra]

4.1 Global projections and bounded calculus by compatible vectors: define $E_A(B)x=E_{K_x}(B)x$, with zero at $x=0$. Within $K_{(x,y)}$, step 3.1 identifies these values with the single linear projection $E_{K_{(x,y)}}(B)$; hence $E_A(B)$ is linear on all of $H$ and has norm at most $1$. The same common space gives $\langle E_A(B)x,y\rangle=\langle x,E_A(B)y\rangle$. Moreover $E_A(B)x\in K_x$, so $K_{E_A(B)x}\subseteq K_x$ and compatibility gives $E_A(C)E_A(B)x=E_{K_x}(C)E_{K_x}(B)x=E_A(C\cap B)x$. Thus the global operators are orthogonal projections. They have $E_A(\mathbb R)=I$; for disjoint $B_n$, strong countable additivity on each fixed vector is exactly the local additivity inside $K_x$. Its finite scalar measure $\mu_x$ equals the local scalar measure and is regular. Likewise define $b(A)x=b(A_{K_x})x$ for bounded Borel $b$. The common spaces give linearity, norm bound, product and adjoint laws. Every value is uniquely determined by its property, so replacement assembles a single operator-valued function on the set of vectors; arbitrary-index choice and a global Hilbert basis are absent. [F1, step 3.1, construct, algebra]

5.1 Exact global unbounded domains and closedness: for finite-valued Borel $b$ put $D_b=\{x:\int|b|^2d\mu_x<\infty\}$ and define $b(A)x=b(A_{K_x})x$ there. The local unbounded restriction identity in step 3.1 shows that this domain is linear and that the operation is linear: for $x,y\in D_b$ use the common space $K_{(x,y)}$, where the norm estimate for $b(x+y)$ follows from the local linear operator and its domain. Its norm is exactly the stated integral. Let $P_n=E_A(\{|b|\le n\})$ and $b_n=b1_{|b|\le n}$. For every $x$, $P_nx\to x$ and $P_nx\in D_b$ by its local measure and boundedness of $b$ on that set, so $D_b$ is dense. For $x\in D_b$, $b_n(A)x\to b(A)x$ in norm, again by the local square-integrable tail. If $x_j\to x$ and $b(A)x_j\to y$ in $H$, bounded calculus gives $P_ny=b_n(A)x$ for each fixed $n$. Hence $\int_{|b|\le n}|b|^2d\mu_x=\|P_ny\|^2\le\|y\|^2$; monotone convergence gives $x\in D_b$, and increasing $n$ gives $b(A)x=y$. Thus $b(A)$ is closed without putting the whole $H$ into one multiplication representation. For $b(\lambda)=\lambda$, $D_b=D(A)$: by step 2.1 the local domain is exactly $D(A)\cap K_x$, and $x\in K_x$ always, so finite local second moment is equivalent to $x\in D(A)$. Its action is the original $Ax$. [F1, step 2.1, step 3.1, step 4.1, construct, algebra]

6.1 Spectrum support and the exact distance bound: if $E_A((\lambda-\varepsilon,\lambda+\varepsilon))=0$, the bounded multiplier $b(t)=\mathbf1_{\{|t-\lambda|\ge\varepsilon\}}/(t-\lambda)$ satisfies $tb(t)$ bounded. Hence $b(A)H\subset D(A)$ and $(A-\lambda)b(A)=I$, $b(A)(A-\lambda)=I$ on $D(A)$, by the exact domains and product identities in step 5.1; thus $\lambda\notin\sigma(A)$. Conversely, if $(A-\lambda)^{-1}$ has norm $M$, every $u$ in the projection of a bounded interval $|t-\lambda|<\varepsilon$ belongs to $D(A)$ and satisfies $\|(A-\lambda)u\|\le\varepsilon\|u\|$. When $M\varepsilon<1$ this forces $u=0$, so that projection is zero. These two implications prove the stated neighborhood characterization. Each point of the real resolvent set therefore has a zero-projection neighborhood; the countable rational intervals whose closures lie in such neighborhoods cover that open set. Their projections are zero, and countable PVM additivity shows $E_A(\mathbb R\setminus\sigma(A))=0$. Nonreal points are in the resolvent by [F2], so $\sigma(A)$ is real. For any $z\notin\sigma(A)$ let $d=\operatorname{dist}(z,\sigma(A))>0$, and define $b(t)=(t-z)^{-1}$ on the spectrum and zero off it. Both $b$ and $tb$ are bounded, with $\|b\|_\infty\le d^{-1}$. The same exact-domain identities give the two-sided inverse $(A-z)^{-1}=b(A)$ and its distance bound. Its range is $D(A)$ by the inverse identities. The zero Hilbert space case has zero PVM/operator and empty spectrum, consistent with the stated convention. No arbitrary global spectral representation or DC inverse theorem has been used. [F2, step 4.1, step 5.1, construct, algebra]


6.2 Global uniqueness by scalar cyclic moments: let $\widetilde E$ be any other regular PVM representing $A$ with its exact domain. Its simple-function calculus and truncations make $(A-i)(A+i)^{-1}$ the bounded multiplier $(\lambda-i)/(\lambda+i)$, so pushing its scalar measure at $x$ to the circle gives moments $\langle U^nx,x\rangle$ for every integer $n$ and no mass at $1$. The same is true for $E_A$, because on $K_x$ its Cayley unitary is $U|_{K_x}$. These circle scalar measures are regular: compact inner approximation on $\mathbb R$ followed by continuous Cayley images gives compact inner approximation on the circle, and complements give outer approximation. The scalar moment uniqueness proved in [F1] therefore forces equality for every $x$. Inverse Cayley transport gives $\langle\widetilde E(B)x,x\rangle=\langle E_A(B)x,x\rangle$ for every real Borel $B$. Applying complex polarization to the common quadratic forms gives equality of all pairings and hence of the bounded projection operators. Thus the global PVM, and the bounded/unbounded calculus built from its truncations, are unique. This uniqueness uses only the scalar moment argument, never an arbitrary orthogonal cyclic decomposition of $H$. [F1, step 1.1, step 4.1, step 5.1, algebra]

6.3 Strong groups, precise derivative domain and group uniqueness: define $U_A(t)=b_t(A)$ with $b_t(\lambda)=e^{it\lambda}$. Step 4.1 gives unitary group laws on $H$. For every fixed $x$, this is the local strongly continuous group on $K_x$; hence it is strongly continuous on all of $H$. If $x\in D(A)$, the exact local derivative in [F1] gives $(U_A(t)x-x)/t\to iAx$. Conversely, if those quotients converge in $H$, all belong to the closed space $K_x$, so their limit belongs to $K_x$ and the local derivative criterion gives $x\in D(A_{K_x})=D(A)\cap K_x$. Domain invariance, commutation with $A$ and preservation of both $\|x\|$ and $\|Ax\|$ also follow in $K_x$, proving graph-norm invariance. If another strongly continuous unitary group $V(t)$ has this exact generator $iA$, its group law gives $V(t)D(A)=D(A)$ and $AV(t)x=V(t)Ax$ by taking the derivative at zero in $V(s)V(t)x=V(t)V(s)x$. For $x\in D(A)$, differentiate $U_A(-t)V(t)x$: the two derivatives cancel, so every scalar pairing of this vector-valued function has zero derivative and is constant by the scalar fundamental theorem. Therefore $V(t)x=U_A(t)x$ on the dense domain; boundedness extends equality to all $H$. This supplies the arbitrary-H autonomous group and exact generator without a global separability assumption or an AC Stone theorem. [F1, step 2.1, step 4.1, step 5.1, algebra]

7.1 Transport under intertwiners: for a unitary $W$ carrying $A$ with its full domain to another self-adjoint $B$, the PVM $WE_A(C)W^*$ is a regular representing PVM for $B$ with the correct domain, so step 6.2 gives $E_B(C)W=WE_A(C)$ and all bounded and unbounded calculus transports. If instead an isometry $W$ intertwines their groups for every real $t$, its closed range $M$ reduces the target group because it is invariant for both time signs. The unique orthogonal projection onto $M$ commutes with the target group; the derivative criterion in step 6.3 shows that it preserves $D(B)$ and commutes with $B$ there. The restrictions of the nonreal resolvents to $M$ are two-sided inverses on the dense restricted domain, so the elementary adjoint argument of step 2.1 makes $B|_M$ self-adjoint. Both directions of the derivative criterion give $D(B|_M)=WD(A)$ and $B|_M=WAW^*$. Uniqueness on this arbitrary closed subspace, already proved in step 6.2, gives the PVM intertwining and its bounded/unbounded versions. The Statement is proved for arbitrary $H$ under CC. [F2, F3, step 2.1, step 6.2, step 6.3, algebra] ∎
