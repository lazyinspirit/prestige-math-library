---
id: lem-nrqm-state-geometry-extreme-points-of-the-state-space
kind: lemma
domain: mathematics
title: "The extreme points of the state space are exactly the pure states"
status: published
origin: pipeline
dependency_level: 5
deps: [lem-nrqm-state-geometry-density-set-convex-and-complete, lem-nrqm-state-geometry-purity-criterion, lem-nrqm-state-geometry-ray-to-rank-one-projection, def-nrqm-state-geometry-pure-mixed-states-and-purity, lem-nrqm-composites-density-and-scalar-spectral-probability, thm-spectral-theorem-for-compact-self-adjoint-operators, thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues, thm-trace-class-is-a-two-sided-banach-operator-ideal, thm-cauchy-schwarz-in-an-inner-product-space, def-operator-norm, def-hilbert-orthogonal-projection, def-self-adjoint-positive-unitary-and-normal-operator, lem-restriction-of-scalars, def-countable-choice]
dependency_roles:
  lem-nrqm-state-geometry-density-set-convex-and-complete: mathematical-premise
  lem-nrqm-state-geometry-purity-criterion: mathematical-premise
  lem-nrqm-state-geometry-ray-to-rank-one-projection: mathematical-premise
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  thm-spectral-theorem-for-compact-self-adjoint-operators: mathematical-premise
  thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues: mathematical-premise
  thm-trace-class-is-a-two-sided-banach-operator-ideal: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  def-operator-norm: mathematical-premise
  def-hilbert-orthogonal-projection: mathematical-premise
  def-self-adjoint-positive-unitary-and-normal-operator: mathematical-premise
  lem-restriction-of-scalars: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. Preskill, Lecture Notes for Ph219/CS219: Quantum Information, Chapter 2 (updated July 2015), Section 2.5.1, printed pages 26-27: the pure states are extremal points of the set of density matrices, and only the pure states are extremal, since every mixed state is a convex sum of pure states"
      url: "https://preskill.caltech.edu/ph219/chap2_15.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 6.3, printed pages 121-126: a mixed state is a probability mixture of pure states, and a pure state is the special case of a single term"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "G. Teschl, Topics in Real and Functional Analysis (17 November 2017), Section 3.6, printed pages 96-100: positive trace-class operators, their eigenvalue decompositions and their traces"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice. Let $H\ne\{0\}$ be a complex Hilbert space and let $D(H)$ be its state space ([[def-nrqm-state-geometry-pure-mixed-states-and-purity]]), regarded as a subset of the real vector space $X$ of self-adjoint trace-class operators, closed under finite real convex combinations by [[lem-nrqm-state-geometry-density-set-convex-and-complete]]. Call a state $\rho\in D(H)$ an **extreme point** of $D(H)$ when
$$\rho=(1-t)\sigma+t\tau,\qquad \sigma,\tau\in D(H),\quad 0<t<1\quad\Longrightarrow\quad \sigma=\tau=\rho,$$
holds for all real $t$ with $0<t<1$ and all $\sigma,\tau\in D(H)$. Then $\rho$ is an extreme point of $D(H)$ if and only if $\rho$ is a pure state.

## Facts & Assumptions

**Given:** The Hilbert space $H\ne\{0\}$; a state $\rho\in D(H)$; states $\sigma,\tau\in D(H)$ and a real $t\in(0,1)$ with $\rho=(1-t)\sigma+t\tau$ where a decomposition is assumed.

[F1] **The state space and purity** ([[def-nrqm-state-geometry-pure-mixed-states-and-purity]], [[lem-nrqm-state-geometry-purity-criterion]]): a state is a self-adjoint positive trace-class operator of trace $1$; it is pure exactly when it equals $T_{u,u}$ for some unit vector $u$; for a state $\rho$ with positive eigenvalues $\lambda_n$ counted with multiplicity one has $\sum_n\lambda_n=1$, each $\lambda_n\in(0,1]$, $\operatorname{tr}(\rho^{2})\le1$, and $\rho$ is mixed exactly when it has at least two positive eigenvalues.

[F2] **Convexity and countable mixtures** ([[lem-nrqm-state-geometry-density-set-convex-and-complete]]): $D(H)$ is a convex subset of the real vector space $X$ of self-adjoint trace-class operators, and every countable probability-weighted sum $\sum_nw_n\rho_n$ with $\rho_n\in D(H)$, $w_n\ge0$, $\sum_nw_n=1$, converges in trace norm to an element of $D(H)$.

[F3] **Spectral expansion of a state** ([[lem-nrqm-composites-density-and-scalar-spectral-probability]] clause (a), [[thm-spectral-theorem-for-compact-self-adjoint-operators]]): a state $\rho$ equals $\sum_{n}\lambda_nT_{u_n,u_n}$ for its positive eigenvalues $\lambda_n$ counted with multiplicity and an orthonormal family of eigenvectors $u_n$. For the spectral theorem, let $\Sigma$ be the set of distinct nonzero eigenvalues of $\rho$, and for $\lambda\in\Sigma$ let $P_\lambda$ be the orthogonal projection onto $E_\lambda(\rho)$. Then $\rho x=\sum_{\lambda\in\Sigma}\lambda P_\lambda x$ in norm, the sum being indexed by distinct eigenvalues; the closed span $M$ of those eigenspaces is $(\ker\rho)^{\perp}=\overline{\operatorname{ran}\rho}$, and $H=M\oplus\ker\rho$. Positivity makes every member of $\Sigma$ positive, and the positive eigenvalues counted with multiplicity are exactly the $\lambda_n$ from the density expansion.

[F4] **Norm and trace bounds for states** ([[thm-trace-class-is-a-two-sided-banach-operator-ideal]], [[thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues]], [[thm-cauchy-schwarz-in-an-inner-product-space]], [[def-operator-norm]]): for trace-class $S$ one has $\|S\|\le\|S\|_1$; for a positive trace-class $S$ one has $\|S\|_1=\operatorname{tr}S$; hence $\|\sigma\|\le\|\sigma\|_1=1$ for every state $\sigma$; and $|\langle y,x\rangle|\le\|y\|\,\|x\|$ with equality if and only if $y,x$ are linearly dependent.

[F5] **Pure states and projections** ([[lem-nrqm-state-geometry-ray-to-rank-one-projection]]): for $u\in S(H)$ the operator $T_{u,u}$ is the Hilbert orthogonal projection onto $\mathbb Cu$ with $T_{u,u}u=u$ and $T_{u,u}^{2}=T_{u,u}$, and for unit vectors $u,w$ one has $T_{u,u}=T_{w,w}$ if and only if $w=\zeta u$ for some $\zeta\in U(1)$; distinct rays therefore give distinct pure states.

[F6] **Extremality convention and real scalars** ([[lem-restriction-of-scalars]]): a point $x$ of a set $K$ is read as **extreme** when every representation $x=(1-t)y+tz$ with $y,z\in K$ and real $0<t<1$ forces $y=z=x$; this is the condition displayed in the statement and used below. The space $X$ is read as a real vector space by restricting scalars from $\mathbb C$ to $\mathbb R$.

[F7] **Orthogonal projections** ([[def-hilbert-orthogonal-projection]]): the Hilbert projection $P_M$ is characterised by $P_Mx\in M$ and $x-P_Mx\in M^{\perp}$; a one-dimensional subspace $\mathbb Cu$ with $\|u\|=1$ equals the range of $T_{u,u}$ by [F5].

## Proof

1.1 [(pure $\Rightarrow$ extreme) the quadratic forms are pinned to one] Assume $\rho=T_{u,u}$ with $u\in S(H)$ and $\rho=(1-t)\sigma+t\tau$ with $0<t<1$. Then $\langle\rho u,u\rangle=\langle T_{u,u}u,u\rangle=\langle u,u\rangle^{2}=\|u\|^{2}=1$ by [F5] and the definition of $T_{u,u}$, so $1=(1-t)\langle\sigma u,u\rangle+t\langle\tau u,u\rangle$. Every state $\eta\in D(H)$ satisfies $\langle\eta u,u\rangle\ge0$ by positivity and $\langle\eta u,u\rangle\le|\langle\eta u,u\rangle|\le\|\eta u\|\,\|u\|=\|\eta u\|\le\|\eta\|\le\|\eta\|_1=1$ by [F4]; a real convex combination with weights $1-t,t>0$ of two numbers $\le1$ equals $1$ only if both numbers equal $1$. Hence $\langle\sigma u,u\rangle=\langle\tau u,u\rangle=1$. [given, F1, F4, F5, algebra]

2.1 [(pure $\Rightarrow$ extreme) the first component fixes $u$] For the state $\sigma$ we have the chain $1=\langle\sigma u,u\rangle\le|\langle\sigma u,u\rangle|\le\|\sigma u\|\,\|u\|=\|\sigma u\|\le\|\sigma\|\le1$ by [F4]; all inequalities are therefore equalities, so equality holds in the Cauchy–Schwarz inequality for the pair $(\sigma u,u)$, and the equality case of [F4] gives $\sigma u=\zeta u$ for a scalar $\zeta$ because $u\ne0$. Taking the pairing with $u$ gives $1=\langle\sigma u,u\rangle=\zeta\langle u,u\rangle=\zeta$, so $\sigma u=u$. The same argument gives $\tau u=u$. [given, step 1.1, F4, algebra]

3.1 [(pure $\Rightarrow$ extreme) a state fixing $u$ equals $T_{u,u}$] Let $\eta\in D(H)$ with $\eta u=u$. By [F3] its positive eigenvalues $\lambda_n$, counted with multiplicity, satisfy $\sum_n\lambda_n=1$, and $u$ is an eigenvector with eigenvalue $1$. If $m$ is the multiplicity of eigenvalue $1$, then $1=\sum_n\lambda_n=m+\sum_{\lambda_n\ne1}\lambda_n$ with a nonnegative second sum, so $m=1$ and there is no other positive eigenvalue. Thus $E_1(\eta)$ is one-dimensional and contains $u$, so $E_1(\eta)=\mathbb Cu$. By the distinct-eigenvalue decomposition in [F3], the closed span $M$ of the positive eigenspaces is now $E_1(\eta)=\mathbb Cu$ and $H=M\oplus\ker\eta$; hence $\eta$ is the orthogonal projection $P_1$ onto $\mathbb Cu$. By [F7] and [F5] this projection is $T_{u,u}$. Applying this to $\sigma$ and to $\tau$ gives $\sigma=\tau=T_{u,u}=\rho$; hence every representation of $\rho$ as a nontrivial convex combination is trivial, and $\rho$ is an extreme point by [F6]. [given, step 2.1, F1, F3, F5, F6, F7, algebra]

4.1 [(mixed $\Rightarrow$ not extreme) an explicit splitting] Assume now that $\rho$ is not pure. By [F1] the state $\rho$ has at least two positive eigenvalues; list them with multiplicity as $\lambda_1\ge\lambda_2\ge\cdots>0$ with orthonormal eigenvectors $u_1,u_2$, so $\lambda_2>0$. Put $\varepsilon:=\frac{\lambda_2}{2}>0,\qquad \sigma_\pm:=\rho\pm\varepsilon\bigl(T_{u_1,u_1}-T_{u_2,u_2}\bigr).$ The expansion of [F3] for $\rho$ turns the displayed definitions into countable mixtures of the pure states $T_{u_n,u_n}$ with weights $\lambda_1\pm\varepsilon$, $\lambda_2\mp\varepsilon$, $\lambda_3,\lambda_4,\dots$; these weights are nonnegative because $\lambda_2-\varepsilon=\varepsilon>0$ and $\lambda_1\pm\varepsilon\ge0$, and they sum to $\sum_n\lambda_n\pm\varepsilon\mp\varepsilon=1$; hence $\sigma_\pm\in D(H)$ by [F2]. Moreover $\rho=\tfrac12\sigma_++\tfrac12\sigma_-$, and $\sigma_+-\sigma_-=2\varepsilon(T_{u_1,u_1}-T_{u_2,u_2})$, which is nonzero because $u_1,u_2$ are orthogonal unit vectors and hence not phase multiples of one another, so that $T_{u_1,u_1}\ne T_{u_2,u_2}$ by [F5]. Thus the representation $\rho=\tfrac12\sigma_++\tfrac12\sigma_-$ with $\sigma_+\ne\sigma_-$ is a nontrivial convex representation with $0<\tfrac12<1$, and $\rho$ is not an extreme point by [F6]. [given, step 3.1, F1, F2, F3, F5, F6, algebra]

5.1 [Conclusion] Steps 1.1, 2.1 and 3.1 show that every pure state is extreme, and step 4.1 shows that every non-pure state is not extreme. Hence the extreme points of $D(H)$ are exactly the pure states. [step 3.1, step 4.1] ∎
