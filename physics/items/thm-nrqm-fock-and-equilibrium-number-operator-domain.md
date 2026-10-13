---
id: thm-nrqm-fock-and-equilibrium-number-operator-domain
aliases: [nrqm-fock-and-equilibrium-number-operator-domain]
kind: theorem
domain: mathematics
title: "Number operator domain"
status: draft
origin: pipeline
dependency_level: 6
deps: [thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction, lem-nrqm-fock-and-equilibrium-fock-sector-projections, lem-nrqm-fock-and-equilibrium-creation-contraction-bounds, lem-nrqm-composites-permutation-sector-projections, def-hilbert-space, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-adjoint-of-a-densely-defined-unbounded-operator, def-unbounded-linear-operator-domain-and-graph, def-bounded-linear-operator, thm-cauchy-schwarz-in-an-inner-product-space, def-countable-choice]
dependency_roles:
  thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction: mathematical-premise
  lem-nrqm-fock-and-equilibrium-fock-sector-projections: mathematical-premise
  lem-nrqm-fock-and-equilibrium-creation-contraction-bounds: mathematical-premise
  lem-nrqm-composites-permutation-sector-projections: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-unbounded-linear-operator-domain-and-graph: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "F. H. L. Essler, Advanced Quantum Theory (Oxford lecture notes, 2017/18), Sections 1.2 and 1.4 pp. 5-9 (number operator and second-quantized operators)"
      url: "http://www-thphys.physics.ox.ac.uk/courses/C6/C6_2017/C6Notes/lecturenotes2017AQT.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 1.4 (orthogonal sums) and Section 3.1 (the spectral theorem)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ be a
complex Hilbert space with completed tensor powers $H^{\otimes n}$, symmetric
projections $P_+^{(n)}$ and Fock space $F(H)$ as in
[[thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction]]. Define the
number operator by
$$D(N):=\Bigl\{\psi\in F(H):\ \sum_{n\in\mathbb N}n^2\|\psi_n\|^2<\infty\Bigr\},\qquad (N\psi)_n:=n\psi_n .$$
Then:

(a) $N$ is a densely defined self-adjoint operator on $F(H)$ with the displayed
domain; $N\ge0$ in the sense that $\langle N\psi,\psi\rangle\ge0$ for
$\psi\in D(N)$, $N\Omega=0$, and $F_0$ is a core for $N$
([[def-symmetric-self-adjoint-and-essentially-self-adjoint]]);

(b) for every $n$, every nonzero $u\in\operatorname{ran}P_+^{(n)}$ satisfies
$N\iota_n(u)=n\,\iota_n(u)$, and for $H\ne\{0\}$ the spectrum of $N$ is
$\sigma(N)=\mathbb N$;

(c) for $f\in H$ and $\psi\in F_0$ the core operators of
[[lem-nrqm-fock-and-equilibrium-creation-contraction-bounds]] satisfy
$$N S_+(f)\psi-S_+(f)N\psi=S_+(f)\psi,\qquad N S_-(f)\psi-S_-(f)N\psi=-S_-(f)\psi ;$$

(d) $D(N)\subseteq D_1:=\{\psi:\sum_n(n+1)\|\psi_n\|^2<\infty\}$, and for every
$\psi\in D(N)$,
$$\|N\psi\|^2=\sum_{n\in\mathbb N}n^2\|\psi_n\|^2,\qquad \langle N\psi,\psi\rangle=\sum_{n\in\mathbb N}n\|\psi_n\|^2 .$$

No physical interpretation of $N$, and no assertion about particle number
measurement, is made.

## Facts & Assumptions
**Given:** the complex Hilbert space $H$, the Fock space $F(H)$ with sectors $\operatorname{ran}P_+^{(n)}$ and coordinate embeddings $\iota_n$, the dense finite-particle subspace $F_0$, the vacuum $\Omega$, the number operator $N$ with domain $D(N)$, vectors $f\in H$ and $\psi\in F(H)$, and $n\in\mathbb N$.

[F1] $F(H)$ is a Hilbert space with inner product $\langle\psi,\varphi\rangle=\sum_n\langle\psi_n,\varphi_n\rangle$, $F_0$ is dense, and each $\operatorname{ran}P_+^{(n)}$ is a closed subspace of the Hilbert space $H^{\otimes n}$ ([[thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction]], [[lem-nrqm-composites-permutation-sector-projections]]).

[F2] For a densely defined operator $A$, a vector $y$ belongs to $D(A^*)$ exactly when there is $z$ with $\langle Ax,y\rangle=\langle x,z\rangle$ for every $x\in D(A)$; then $A^*y=z$. A densely defined symmetric operator satisfies $A\subseteq A^*$ ([[def-adjoint-of-a-densely-defined-unbounded-operator]], [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]). Cauchy-Schwarz holds in each sector by [[thm-cauchy-schwarz-in-an-inner-product-space]]; for square-summable coordinate norms apply that theorem to finite nonnegative real vectors $(a_0,\ldots,a_N)$ and $(b_0,\ldots,b_N)$ in $\mathbb R^{N+1}$ with inner product $\langle a,b\rangle:=\sum_{n=0}^Na_nb_n$, then take increasing partial sums. These definitions require only the declared Countable Choice; self-adjointness of $N$ will be proved directly rather than invoking the stronger choice hypotheses of the general direct-sum theorem.

[F3] The core operators satisfy $(S_+(f)\psi)_n=\sqrt nP_+^{(n)}(f\otimes\psi_{n-1})$, $(S_-(f)\psi)_n=\sqrt{n+1}\Psi_f^{(n)}(\psi_{n+1})$ on $F_0$ ([[lem-nrqm-fock-and-equilibrium-creation-contraction-bounds]]).





## Proof

1.1 [Coordinate adjoint, vacuum and positivity] The coordinate Hilbert-space construction used in [F1] is valid under the present hypotheses: the sector spaces are complete closed tensor subspaces, the pairing converges by Cauchy-Schwarz, and a Cauchy sequence has coordinate limits. For each finite coordinate sum, the Cauchy norm bound passes to the limit; taking the supremum over those finite sums proves that the limit is square summable and that convergence holds in the full sum. Finite-coordinate truncations give density of $F_0$. Thus these Hilbert and density facts do not require invoking the Axiom of Choice premise of the general operator-sum theorem. [F1, F2, algebra]
Every vector of $F_0$ lies in $D(N)$, so $N$ is densely defined. For $\psi,\varphi\in D(N)$, the sequence form of Cauchy-Schwarz in [F2] makes the coordinate pairing series absolutely convergent and gives $\langle N\psi,\varphi\rangle=\sum_nn\langle\psi_n,\varphi_n\rangle=\langle\psi,N\varphi\rangle$; hence $N\subseteq N^*$. If $\varphi\in D(N^*)$ and $\eta=N^*\varphi$, test the adjoint identity with every vector $\iota_n(u)$ in a single sector. It gives $\langle nu,\varphi_n\rangle=\langle u,\eta_n\rangle$ for all $u$, so $\eta_n=n\varphi_n$ for every $n$, including $\eta_0=0$. Consequently $\sum_nn^2\|\varphi_n\|^2=\|\eta\|^2<\infty$, proving $\varphi\in D(N)$ and $N^*\varphi=N\varphi$. Thus $N=N^*$ on exactly the displayed domain. For $\psi\in D(N)$, $\langle N\psi,\psi\rangle=\sum_nn\|\psi_n\|^2\ge0$, and the vacuum satisfies $N\Omega=0$. The finite-coordinate truncations $\psi^{(M)}$ lie in $F_0$ and satisfy $\psi^{(M)}\to\psi$ and $N\psi^{(M)}\to N\psi$ by convergence of $\sum_nn^2\|\psi_n\|^2$, so $F_0$ is a graph core. This retains all conclusions of (a) under its original Countable Choice hypothesis. [F1, F2, algebra]

1.2 [Commutation on the core] Let $f\in H$ and $\psi\in F_0$; all vectors below lie in $F_0$ by [F3]. Using the sector formulas of [F3], for $n\ge1$ the $n$-th coordinate of $S_+(f)N\psi$ is $\sqrt nP_+^{(n)}(f\otimes(n-1)\psi_{n-1})=(n-1)(S_+(f)\psi)_n$, while the $n$-th coordinate of $NS_+(f)\psi$ is $n(S_+(f)\psi)_n$; both coordinates vanish for $n=0$. Hence $NS_+(f)\psi-S_+(f)N\psi=S_+(f)\psi$. Similarly, the $n$-th coordinate of $S_-(f)N\psi$ is $\sqrt{n+1}\Psi_f^{(n)}((n+1)\psi_{n+1})=(n+1)(S_-(f)\psi)_n$, and that of $NS_-(f)\psi$ is $n(S_-(f)\psi)_n$; their difference is $-(S_-(f)\psi)_n$ for every $n$, proving the second identity. [F3, algebra]

2.1 [Eigenvalues and spectrum] Let $n\in\mathbb N$ and $u\in\operatorname{ran}P_+^{(n)}$, $u\ne0$. The vector $\iota_n(u)$ lies in $D(N)$ with $(N\iota_n(u))_m=m(\iota_n(u))_m$, which is $n\iota_n(u)$; thus every $n\in\mathbb N$ is an eigenvalue when $H\ne\{0\}$, since then each sector contains $e^{\otimes n}\ne0$ (and the vacuum sector is $\mathbb C$). Now fix $\lambda\in\mathbb C\setminus\mathbb N$ and put $c_n:=(n-\lambda)^{-1}$. If $n>2|\lambda|$, then $|n-\lambda|\ge n-|\lambda|>n/2$, so $|c_n|<2/n\le2$ and $n|c_n|<2$; among the finitely many remaining indices each denominator is nonzero because $\lambda\notin\mathbb N$. Hence $\sup_n|c_n|<\infty$ and $\sup_n n|c_n|<\infty$. Define $R_\lambda\psi:=(c_n\psi_n)_n$. Then $\|R_\lambda\psi\|^2=\sum_n|c_n|^2\|\psi_n\|^2\le(\sup_n|c_n|)^2\|\psi\|^2$ and $\sum_n n^2\|c_n\psi_n\|^2\le(\sup_n n|c_n|)^2\|\psi\|^2$, so $R_\lambda$ is bounded from $F(H)$ to $D(N)$ with its graph norm. Coordinatewise, $(N-\lambda I)R_\lambda=I$ on $F(H)$ and $R_\lambda(N-\lambda I)=I$ on $D(N)$; hence $R_\lambda$ is a bounded inverse of $N-\lambda I$. Therefore $\sigma(N)\subseteq\mathbb N$, and the exhibited eigenvalues give $\sigma(N)=\mathbb N$ for $H\ne\{0\}$. [F1, F2, step 1.1, algebra]

3.1 [Domain inclusion and moments] If $\psi\in D(N)$ then $\sum_n(n+1)\|\psi_n\|^2=\sum_nn\|\psi_n\|^2+\sum_n\|\psi_n\|^2\le\sum_nn^2\|\psi_n\|^2+\|\psi\|^2<\infty$ (using $n\le n^2$), so $D(N)\subseteq D_1$. The coordinate formula $(N\psi)_n=n\psi_n$ and orthogonality of the sectors give $\|N\psi\|^2=\sum_n\|n\psi_n\|^2=\sum_nn^2\|\psi_n\|^2$ and $\langle N\psi,\psi\rangle=\sum_nn\|\psi_n\|^2$, both series converging absolutely; this proves (d) and completes the proof of (a)-(d). [F1, step 1.1, algebra] ∎

