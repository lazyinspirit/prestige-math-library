---
id: thm-nrqmx-finite-metaplectic-construction
kind: theorem
domain: mathematics
title: Finite symplectic implementation by quadratic generators
status: draft
origin: pipeline
dependency_level: 3
deps: [def-nrqmx-finite-mode-symplectic-data, thm-nrqmx-finite-weyl-uniqueness-interface, lem-nrqmx-finite-mode-fock-schr-identification, lem-nrqmx-finite-symplectic-implementers, lem-nrqmx-finite-symplectic-generator-factorization, lem-nrqmx-finite-maslov-phase-parity, thm-nrqm-oscillator-multidimensional-oscillator-completeness, thm-stone-von-neumann-for-finite-dimensional-weyl-systems, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqmx-finite-mode-symplectic-data: mathematical-premise
  thm-nrqmx-finite-weyl-uniqueness-interface: mathematical-premise
  lem-nrqmx-finite-mode-fock-schr-identification: mathematical-premise
  lem-nrqmx-finite-symplectic-implementers: mathematical-premise
  lem-nrqmx-finite-symplectic-generator-factorization: mathematical-premise
  lem-nrqmx-finite-maslov-phase-parity: mathematical-premise
  thm-nrqm-oscillator-multidimensional-oscillator-completeness: mathematical-premise
  thm-stone-von-neumann-for-finite-dimensional-weyl-systems: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joel Robbin and Dietmar Salamon, Feynman path integrals on phase space and the metaplectic representation, §§5–10"
      url: "https://ncatlab.org/nlab/files/RobbinSalamonMetaplectic.pdf"
    - title: "Joel Robbin and Dietmar Salamon, The Maslov index for paths, Theorem 4.7 and Corollary 4.12"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/robbsala2.pdf"
    - title: "Arvind, B. Dutta, N. Mukunda and R. Simon, The Real Symplectic Groups in Quantum Mechanics and Optics, §§IV–VI"
      url: "https://arxiv.org/pdf/quant-ph/9509002"
---

## Statement

Assume AC, $r\ge1$, and $\hbar>0$. Let $R=(Q_1,P_1,\ldots,Q_r,P_r)^T$,
$J=\bigoplus_{j=1}^r\begin{pmatrix}0&1\\-1&0\end{pmatrix}$,
and let $W(z)$ be the regular irreducible Weyl system of
[[def-nrqmx-finite-mode-symplectic-data]]. For every real
$S\in\operatorname{Sp}(2r,\mathbb R)$, there is a unitary $M_S$ on
$L^2(\mathbb R^r)$ such that
$$M_S^*W(z)M_S=W(S^Tz)\qquad(z\in\mathbb R^{2r});$$
equivalently, $M_S^*RM_S=SR$ on the common transported Schwartz core.
Any two such implementers differ by a scalar of modulus one. The same
construction applies in every nonzero irreducible regular representation
with this finite phase space and fixed central parameter $\hbar$, after the
unitary equivalence of
[[thm-nrqmx-finite-weyl-uniqueness-interface]].

There is also a connected topological group
$\operatorname{Mp}(2r,\mathbb R)$ of normalized propagators of real
homogeneous quadratic Hamiltonians on this finite-mode Schrödinger space.
Here a unitary Schwartz automorphism means a unitary on $L^2(\mathbb R^r)$
whose restriction is a continuous linear bijection of the Schwartz space
$\mathcal S(\mathbb R^r)$ with continuous inverse. A normalized propagator
starts at the identity and solves $i\hbar\,\partial_tU(t)=H_tU(t)$ for a
real symmetrically ordered quadratic $H_t$ with no linear or scalar term.
Give $\operatorname{Mp}$ the topology of pointwise convergence of $U$ and
$U^{-1}$ on $\mathcal S(\mathbb R^r)$ in its Schwartz topology; give
$\operatorname{Sp}(2r,\mathbb R)$ its usual matrix topology.
The map
$$\pi:\operatorname{Mp}(2r,\mathbb R)\longrightarrow \operatorname{Sp}(2r,\mathbb R),\qquad M\longmapsto S \quad\text{when }M^*W(z)M=W(S^Tz),$$
is a two-fold covering homomorphism. Its two points over $S$ act by $M_S$
and $-M_S$ when $M_S$ denotes either normalized lift; an arbitrary Weyl
implementer may differ from them by any scalar phase. This connected double
cover and its unitary action are the metaplectic group and metaplectic
representation. All mode counts here are finite; no infinite-mode
implementation claim is part of the statement.

## Facts & Assumptions

**Given:** AC, $r\ge1$, $\hbar>0$, the finite-mode quadrature and Weyl
conventions of [[def-nrqmx-finite-mode-symplectic-data]], and
$S^TJS=J$.

[A1] AC is the explicit choice hypothesis of the finite-dimensional
Stone–von Neumann theorem and supplies Countable Choice where needed
([[def-axiom-of-choice]], [[def-countable-choice]]).

[A2] The matrix $S$ is real symplectic, $r\ge1$, and $\hbar>0$ under the
quadrature and Weyl conventions in the Statement.

[F1] The local Weyl system has the stated fixed central parameter, regularity,
and irreducibility. Every nonzero irreducible regular finite-dimensional Weyl
system with this same nonzero parameter is unitarily equivalent to it
([[def-nrqmx-finite-mode-symplectic-data]],
[[thm-stone-von-neumann-for-finite-dimensional-weyl-systems]],
[[thm-nrqmx-finite-weyl-uniqueness-interface]]).

[F2] Every finite symplectic matrix factors into symmetric shears, invertible
coordinate changes, and partial Fourier rotations, including when its initial
upper-left block is singular
([[lem-nrqmx-finite-symplectic-generator-factorization]]).

[F3] Every such symplectic matrix has a unitary Weyl implementer, and two
implementers of the same Weyl automorphism differ only by phase
([[lem-nrqmx-finite-symplectic-implementers]]).

[F4] For a real time-dependent homogeneous quadratic Hamiltonian, the
normalized Schrödinger propagator exists as a unitary Schwartz automorphism,
composes under concatenation, and its classical endpoint is the symplectic
matrix it implements. When the endpoint's upper-right block $B$ is
invertible, its kernel is
$$\frac{e^{i\pi\mu/2}}{(2\pi\hbar)^{r/2}|\det B|^{1/2}} e^{iG_S(x_1,x_0)/\hbar},$$
integrated against the input function. Here $G_S$ is the homogeneous
generating function determined by the endpoint and $\mu$ is the Maslov index.
The kernel formula follows by evaluating the finite-dimensional time-sliced
Gaussian integral: the discrete Hessian has signature $2\mu$ and its
Gaussian integral gives the factor $e^{i\pi\mu/2}$; convergence of the
time-sliced propagators gives the stated unitary
([Robbin–Salamon, Theorems 8.2–8.5 and proof](https://ncatlab.org/nlab/files/RobbinSalamonMetaplectic.pdf),
§§6.4 and 8.2–8.5). Their canonical coordinates $(x_{\rm source},p_{\rm source})$
match ours under the unitary
$$[T_\hbar f](x_{\rm source})=\hbar^{-1/4} f(x_{\rm source}/\sqrt\hbar),$$
since $T_\hbar^*x_{\rm source}T_\hbar=\sqrt\hbar x$ and
$T_\hbar^*(-i\hbar\partial_{x_{\rm source}})T_\hbar
=-i\sqrt\hbar\partial_x$.

[F5] For a path from the identity to an endpoint in the generating chart,
$\mu+r/2\in\mathbb Z$ and
$$(-1)^{\mu+r/2}=\operatorname{sign}\det B.$$
The full endpoint-stratum argument for this identity is given in
[[lem-nrqmx-finite-maslov-phase-parity]] (Robbin–Salamon, Theorem 4.7 and
Corollary 4.12).

[F6] The one-mode oscillator has normalized eigenvectors $|n\rangle$ with
$H=\frac12(Q^2+P^2)=\hbar(N+\frac12)$ and $N|n\rangle=n|n\rangle$
([[lem-nrqmx-finite-mode-fock-schr-identification]],
[[thm-nrqm-oscillator-multidimensional-oscillator-completeness]]).

## Proof

1.1 Reorder interleaved coordinates by the fixed permutation
$P(Q_1,P_1,\ldots,Q_r,P_r)=(Q_1,\ldots,Q_r,P_1,\ldots,P_r)$, and write
$W_g(w)=W(P^Tw)$ for grouped labels. Then $J_0=PJP^T$ and
$S_g=PSP^T$ obeys $S_g^TJ_0S_g=J_0$. Apply [F3] directly to the grouped Weyl
system on $L^2(\mathbb R^r)$ with label matrix $S_g^T$; this matrix is
symplectic because $S_g^TJ_0S_g=J_0$ also implies $S_gJ_0S_g^T=J_0$.
Since
$S_g^TP=PS^T$, converting labels back gives
$$M_S^*W(z)M_S=M_S^*W_g(Pz)M_S=W_g(S_g^TPz)=W(S^Tz).$$
Differentiating the bounded one-parameter Weyl identity on the common
Schwartz core gives $M_S^*RM_S=SR$. For the rest of the proof use grouped
coordinates and write $S$ for $S_g$. [A1, A2, F2, F3, given, algebra]

1.2 Define $\operatorname{Mp}(2r,\mathbb R)$ to be the set of unitary
Schwartz automorphisms obtained by normalized Schrödinger evolution along
piecewise-smooth time-dependent real homogeneous quadratic Hamiltonians
$$H_t=\frac14\sum_{j,k}K_{jk}(t)(R_jR_k+R_kR_j), \qquad K(t)=K(t)^T\in M_{2r}(\mathbb R),$$
with no linear or scalar term. Concatenation of Hamiltonian paths gives
composition of their unitaries by [F4]; reversing a path gives the inverse.
On Schwartz space, differentiating $U(t)^*RU(t)$ and using
$[R_j,R_k]=i\hbar J_{jk}$ gives the classical linear Hamilton equation
$\dot S=JK(t)S$. Thus each such propagator has a unique symplectic endpoint,
and the endpoint map $\pi$ is a group homomorphism. Uniqueness follows
because the explicit Weyl formula has no nonzero label acting as a scalar:
if its translation coordinate is nonzero it translates Schwartz functions,
and if only its multiplication coordinate is nonzero it multiplies by a
nonconstant exponential. The Weyl product law then makes the endpoint label
matrix unique. [F1, F4, given, algebra]

2.1 Every generator from [F2] is a path endpoint of a homogeneous quadratic
Hamiltonian. A symmetric shear is joined to the identity by scaling its
symmetric block, and a partial Fourier rotation is joined by varying the
oscillator angle. If $\det A>0$, polar
decomposition writes $A=OP$ with $O\in SO(r)$ and $P$ positive definite.
The path $P_t=(1-t)I+tP$ stays positive definite, and an orthogonal matrix
in $SO(r)$ is a product of plane rotations, each joined to the identity by
varying its angle. These paths connect the coordinate change to the
identity. If
$\det A<0$, factor one coordinate reflection from a positive-determinant
change; that reflection is a $\pi$ oscillator rotation on that mode.
This gives a piecewise-smooth symplectic path for each generator. Along any
such path $S_t$, the matrix $X_t=\dot S_tS_t^{-1}$ satisfies
$X_t^TJ_0+J_0X_t=0$; hence $K_t=-J_0X_t$ is symmetric and
$\dot S_t=J_0K_tS_t$. The symmetrically ordered quadratic with matrix $K_t$
therefore has this classical endpoint. Thus [F2] supplies, for every $S$, a
product of normalized quadratic propagators whose endpoint is $S$, proving
$\pi$ is onto.
The one-parameter paths also show that each such product belongs to the
identity component of $\operatorname{Mp}$. [F2, F4, step 1.2, algebra]

2.2 If $M_1,M_2$ implement the same $S$, then [F3] makes
$M_2M_1^*=\lambda I$ for some $|\lambda|=1$. For any other representation
$W'$ in [F1], choose a unitary $V$ with $VW'(z)V^*=W(z)$ by the
finite-dimensional Stone–von Neumann theorem. Then
$M'_S=V^*M_SV$ is unitary and
$$M_S'^*W'(z)M'_S=V^*M_S^*W(z)M_SV=W'(S^Tz).$$
Conjugating the phase-uniqueness statement by $V$ proves the same result in
that representation. [F1, F3, step 1.1, algebra]

3.1 To bound a fiber, first suppose the grouped upper-right block $B$ of $S$
is invertible. Any two normalized propagators over $S$ differ by sign by
[F5]. For general $S$, the singular-block factorization in [F2] provides a
right factor $G$ for which the upper-left block of $SG$ is invertible.
Right-multiply by the quarter-turn
$J_0=\begin{pmatrix}0&I\\-I&0\end{pmatrix}$; the upper-right block
of $SGJ_0$ is that invertible upper-left block. If $M_1,M_2$ lie over $S$,
then $M_1M_{GJ_0}$ and $M_2M_{GJ_0}$ are normalized propagators over $SGJ_0$;
the chart case makes them differ only by $\pm1$. Cancelling the common
right factor proves every fiber of $\pi$ has at most two elements.
[F2, F4, F5, step 1.2, step 2.1, algebra]

4.1 The identity has two distinct lifts. The constant zero Hamiltonian gives
$I$. On the first mode (and as the identity on the other modes if $r>1$),
the homogeneous oscillator path
$U(t)=e^{-itH/\hbar}=e^{-it(N+1/2)}$ has classical endpoint the identity at
$t=2\pi$, because its Hamilton equations are $\dot Q=P$, $\dot P=-Q$ and
make one full rotation, while by [F6]
$$U(2\pi)|n\rangle=e^{-2\pi i(n+1/2)}|n\rangle=-|n\rangle$$
for every $n$. Completeness of the Hermite basis gives $U(2\pi)=-I$. For any
$S$, choose a normalized lift $\widetilde M_S$ supplied by step 2.1. Then
$\widetilde M_S$ and $-\widetilde M_S$ are two distinct lifts; step 3.1
proves there are no others. The kernel is exactly $\{I,-I\}$.
[F4, F6, step 2.1, step 3.1, algebra]

5.1 It remains to verify the covering topology. For any endpoint $S_0$, choose
a fixed factor $T=GJ_0$ so $S_0T$ has invertible upper-right block; it stays
invertible on a neighborhood of $S_0$. For each $\widetilde S=ST$ in this
chart, $\widetilde S J_0$ has invertible upper-left block, so the explicit
factorization in [F2] and its parameters in step 1.2 vary continuously with
the blocks. Shrink to a coordinate ball in this open chart and join its
center to each endpoint by paths varying smoothly with the endpoint. The
corresponding $K_t=-J_0\dot S_tS_t^{-1}$ varies continuously. The kernel in
[F4] has continuously varying quadratic phase and determinant magnitude on
this chart. The endpoint-stratum parity [F5] leaves two possible signs; the
chosen local paths select the sign continuously, which is locally constant
on the ball. The kernel, equivalently its chirp, coordinate-change and
Fourier factorization, therefore gives a continuous choice of normalized
lift in the topology of $U$ and $U^{-1}$ on Schwartz space. Its negative is
a second continuous choice.
The endpoint map is continuous in this topology: its Weyl covariance is
continuous on Schwartz functions, and the explicit Weyl formula recovers the
translation coordinates from shifts and the remaining coordinates from the
nonconstant multiplication phases. The two local choices are separated,
since on any fixed nonzero Schwartz function their values differ by twice
that vector. After shrinking the ball, their images are disjoint open sheets;
the continuous sections are inverse to $\pi$ on each sheet. Multiplication
by a fixed normalized lift of $T^{-1}$ transports these sheets to a
neighborhood of $S_0$. The fiber bound in step 3.1 shows that they exhaust
each fiber, so $\pi$ is a two-fold covering map. Step 2.1 shows its total
group is connected. This is the connected metaplectic double cover and its
defining unitary action is the metaplectic representation.
[F2, F3, F4, F5, step 1.2, step 2.1, step 3.1, step 4.1] ∎
