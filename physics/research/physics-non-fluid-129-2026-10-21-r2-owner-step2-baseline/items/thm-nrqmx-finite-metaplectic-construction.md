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

[F4] The local reconstruction in the Proof of [[lem-nrqmx-finite-maslov-phase-parity]], steps 1.1, 2.1 and 3.1, constructs the unique normalized propagator for every entrywise integrable real homogeneous quadratic Hamiltonian, in particular for every piecewise-smooth one. It is a unitary Schwartz automorphism, depends continuously on time together with its inverse, and has the Weyl covariance of its classical matrix solution. Near the identity a smooth local lift is $L(S)=C_{CA^{-1}}E_AT_{A^{-1}B}$, with the chirp, coordinate and Fourier-multiplier factors explicitly defined there. Their parameter derivatives are homogeneous symmetrically ordered quadratics, and their Schwartz seminorm bounds are locally uniform. This is a proved local construction, not an external time-slicing theorem.

[F5] The same supplier proves the sign ambiguity for normalized quadratic propagators with the same endpoint. Its Proof, steps 4.1–6.1, obtains $Z=(C+iD)(A+iB)^{-1}$ and $c^2\det(A+iB)=1$ for the transported vacuum; step 7.1 combines this with phase uniqueness to give $U_2=\pm U_1$. In particular its stated generating-chart conclusion is available, and the local calculation actually applies at all endpoints. [[lem-nrqmx-finite-maslov-phase-parity]]

[F6] The one-mode oscillator has normalized eigenvectors $|n\rangle$ with
$H=\frac12(Q^2+P^2)=\hbar(N+\frac12)$ and $N|n\rangle=n|n\rangle$
([[lem-nrqmx-finite-mode-fock-schr-identification]],
[[thm-nrqm-oscillator-multidimensional-oscillator-completeness]]).

## Proof

1.1 Reorder interleaved coordinates by the fixed permutation $P(Q_1,P_1,\ldots,Q_r,P_r)=(Q_1,\ldots,Q_r,P_1,\ldots,P_r)$, and write $W_g(w)=W(P^Tw)$ for grouped labels. Then $J_0=PJP^T$ and $S_g=PSP^T$ obeys $S_g^TJ_0S_g=J_0$. Apply [F3] directly to the grouped Weyl system on $L^2(\mathbb R^r)$ with label matrix $S_g^T$; this matrix is symplectic because $S_g^TJ_0S_g=J_0$ also implies $S_gJ_0S_g^T=J_0$. Since $S_g^TP=PS^T$, converting labels back gives $$M_S^*W(z)M_S=M_S^*W_g(Pz)M_S=W_g(S_g^TPz)=W(S^Tz).$$ Differentiating the bounded one-parameter Weyl identity on the common Schwartz core gives $M_S^*RM_S=SR$. For the rest of the proof use grouped coordinates and write $S$ for $S_g$. [A1, A2, F2, F3, given, algebra]

1.2 Define $\operatorname{Mp}(2r,\mathbb R)$ as the set of endpoints of the normalized evolutions in [F4] along piecewise-smooth coefficient paths $K(t)=K(t)^T$, with $H_t=\tfrac14\sum_{j,k}K_{jk}(t)(R_jR_k+R_kR_j)$ and no linear or scalar term. The operator acts on the common Schwartz space. Concatenation gives products: first evolve by $U_2$, then evolve by $U_1$ with its initial vector $U_2f$, obtaining $U_1U_2$. The reversed evolution $U(T-t)U(T)^{-1}$ starts at $I$, ends at $U(T)^{-1}$, and is generated by $-H_{T-t}$, so inverses also belong to the set. By [F4], each endpoint implements the symplectic solution $\dot S=J_0K(t)S$. If two matrices had the same implementing unitary, differentiating their Weyl covariances on Schwartz space would give $(S-S')R=0$. Applied to the vacuum, $Q_kg_0=\sqrt{\hbar/2}g_{e_k}$ and $P_kg_0=i\sqrt{\hbar/2}g_{e_k}$ by [F6]; the reality of the rows forces both their position and momentum coefficients to vanish. Thus the endpoint is unique. For two lifts, $\pi(M_1M_2)=\pi(M_1)\pi(M_2)$ by conjugating the quadratures, so $\pi$ is a homomorphism. [F1, F4, F6, given, algebra]

2.1 Every generator from [F2] is a path endpoint of a homogeneous quadratic Hamiltonian. A symmetric shear is joined to the identity by scaling its symmetric block, and a partial Fourier rotation is joined by varying the oscillator angle. If $\det A>0$, polar decomposition writes $A=OP$ with $O\in SO(r)$ and $P$ positive definite. The path $P_t=(1-t)I+tP$ stays positive definite, and an orthogonal matrix in $SO(r)$ is a product of plane rotations, each joined to the identity by varying its angle. These paths connect the coordinate change to the identity. If $\det A<0$, factor one coordinate reflection from a positive-determinant change; that reflection is a $\pi$ oscillator rotation on that mode. This gives a piecewise-smooth symplectic path for each generator. Along any such path $S_t$, the matrix $X_t=\dot S_tS_t^{-1}$ satisfies $X_t^TJ_0+J_0X_t=0$; hence $K_t=-J_0X_t$ is symmetric and $\dot S_t=J_0K_tS_t$. The symmetrically ordered quadratic with matrix $K_t$ therefore has this classical endpoint. Thus [F2] supplies, for every $S$, a product of normalized quadratic propagators whose endpoint is $S$, proving $\pi$ is onto. The one-parameter paths also show that each such product belongs to the identity component of $\operatorname{Mp}$. [F2, F4, step 1.2, algebra]

2.2 If $M_1,M_2$ implement the same $S$, then [F3] makes $M_2M_1^*=\lambda I$ for some $|\lambda|=1$. For any other representation $W'$ in [F1], choose a unitary $V$ with $VW'(z)V^*=W(z)$ by the finite-dimensional Stone–von Neumann theorem. Then $M'_S=V^*M_SV$ is unitary and $$M_S'^*W'(z)M'_S=V^*M_S^*W(z)M_SV=W'(S^Tz).$$ Conjugating the phase-uniqueness statement by $V$ proves the same result in that representation. [F1, F3, step 1.1, algebra]

2.3 If two normalized lifts lie over the same grouped matrix $S$, the Gaussian determinant calculation in [F5] makes them differ by sign. This already holds for every $S$: the matrix $A+iB$ used there is invertible by symplecticity, including when either real block is singular. In particular it supplies the required invertible-$B$ chart argument without an imported Maslov-index parity formula. Thus every fiber has at most two elements. [F4, F5, step 1.2, algebra]

3.1 The identity has two distinct lifts. The constant zero Hamiltonian gives $I$. On the first mode (and as the identity on the other modes if $r>1$), take the canonical Schwartz evolution of $H=\hbar(N+1/2)$ constructed in [F4]. For each Hermite vector, $e^{-it(n+1/2)}|n\rangle$ solves the same Schrödinger equation with that initial vector, so uniqueness in [F4] identifies $U(t)|n\rangle=e^{-it(n+1/2)}|n\rangle$. Its classical endpoint is the identity at $t=2\pi$, because its Hamilton equations are $\dot Q=P$, $\dot P=-Q$ and make one full rotation, while by [F6] $$U(2\pi)|n\rangle=e^{-2\pi i(n+1/2)}|n\rangle=-|n\rangle$$ for every $n$. Completeness of the Hermite basis gives $U(2\pi)=-I$. For any $S$, choose a normalized lift $\widetilde M_S$ supplied by step 2.1. Then $\widetilde M_S$ and $-\widetilde M_S$ are two distinct lifts; step 2.3 proves there are no others. The kernel is exactly $\{I,-I\}$. [F4, F6, step 2.1, step 2.3, algebra]

4.1 Fix $S_0$ and a normalized lift $M_0$. On a matrix neighborhood $\mathcal B$ of $S_0$ small enough that $SS_0^{-1}$ lies in the local neighborhood of [F4], put $\sigma(S)=L(SS_0^{-1})M_0$. The parameter path $(Y,A,X)\mapsto(\tau Y,I+\tau(A-I),\tau X)$ in [F4] joins each local factor lift to $I$ smoothly, with homogeneous quadratic logarithmic generator. Thus the local factors are endpoints of the piecewise-smooth class defining this group, so $\sigma(S)$ belongs to $\operatorname{Mp}$ and has endpoint $S$. Conversely the construction of [F4] writes any integrable-coefficient propagator endpoint as a finite product of these same local lifts. Hence allowing the broader integrable temporal class in the parity lemma introduces no additional endpoint operators or phases. It depends continuously on $S$, as does its inverse, pointwise in the Schwartz topology: the explicit chirp and linear-coordinate factors have uniformly bounded seminorm estimates on compact parameter neighborhoods, and the Fourier factors are fixed continuous maps. These estimates also justify continuity when composing such a varying local factor with a varying Schwartz vector. Step 3.1 shows every lift over $S$ is exactly $\sigma(S)$ or $-\sigma(S)$. [F4, step 1.2, step 2.1, step 3.1, construct, algebra]

5.1 The endpoint map is continuous for the specified operator topology, without assuming joint continuity of arbitrary Schwartz-operator composition. For each row $j$ and mode $k$, covariance and [F6] give $\langle R_jMg_0,Mg_{e_k}\rangle=\sqrt{\hbar/2}(S_{j,Q_k}+iS_{j,P_k})$, where the pairing is linear in its first argument. On the left $R_j$ is continuous on Schwartz space, its inclusion into $L^2$ is continuous, and only the two fixed input vectors $g_0,g_{e_k}$ are used. Thus every real matrix entry of $\pi(M)$ is continuous. Over $\mathcal B$, the scalar $\varepsilon(M):=\langle Mg_0,\sigma(\pi(M))g_0\rangle$ is continuous, takes exactly the values $+1,-1$, and distinguishes the two lifts since $\|g_0\|=1$. Therefore the two inverse images $\varepsilon^{-1}(1)$ and $\varepsilon^{-1}(-1)$ in $\pi^{-1}(\mathcal B)$ are disjoint open sheets; on each, $\pi$ and $\pm\sigma$ are continuous inverse maps onto $\mathcal B$. This proves the two-fold covering in the given topology. [F4, F6, step 1.1, step 3.1, step 4.1, algebra]

6.1 The same charts make the set a topological group. Locally its elements are $\varepsilon\sigma(S)$. Products and inverses of their explicit finite-parameter factors depend continuously on the matrix parameters and on each Schwartz vector, by the uniform seminorm bounds in step 4.1; their endpoint matrices multiply and invert continuously. The sign relative to a local section at the resulting endpoint is recovered by the continuous vacuum pairing in step 5.1. Hence multiplication and inversion are continuous in these charts, which have precisely the operator topology by step 5.1. Finally every defining normalized path is continuous in that topology by [F4], including its inverse path, so it joins its endpoint to $I$. Consequently the group is path connected. Together with step 3.1 this proves the connected double cover with kernel $\{I,-I\}$ and its defining unitary action, retaining the unrestricted phase ambiguity only for arbitrary individual Weyl implementers. [F4, step 1.2, step 2.1, step 3.1, step 4.1, step 5.1, algebra] ∎
