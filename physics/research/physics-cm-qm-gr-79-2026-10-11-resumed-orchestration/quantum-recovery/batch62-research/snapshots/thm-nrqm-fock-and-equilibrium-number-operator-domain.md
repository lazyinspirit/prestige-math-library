---
id: thm-nrqm-fock-and-equilibrium-number-operator-domain
aliases: [nrqm-fock-and-equilibrium-number-operator-domain]
kind: theorem
domain: mathematics
title: "Number operator domain"
status: draft
origin: pipeline
dependency_level: 6
deps: [thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction, lem-nrqm-fock-and-equilibrium-fock-sector-projections, lem-nrqm-fock-and-equilibrium-creation-contraction-bounds, lem-nrqm-composites-permutation-sector-projections, def-hilbert-space, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-adjoint-of-a-densely-defined-unbounded-operator, def-unbounded-linear-operator-domain-and-graph, def-bounded-linear-operator, def-countable-choice]
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

[F2] Direct sums of self-adjoint operators are self-adjoint: if $T_n$ is self-adjoint on $\operatorname{ran}P_+^{(n)}$ with domain $D(T_n)$ for every $n\ge1$, then $\bigoplus_nT_n$ with domain $\{\psi:\psi_n\in D(T_n),\ \sum_n\|T_n\psi_n\|^2<\infty\}$ is self-adjoint and densely defined ([[thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction]] (f)).

[F3] The core operators satisfy $(S_+(f)\psi)_n=\sqrt nP_+^{(n)}(f\otimes\psi_{n-1})$, $(S_-(f)\psi)_n=\sqrt{n+1}\Psi_f^{(n)}(\psi_{n+1})$ on $F_0$ ([[lem-nrqm-fock-and-equilibrium-creation-contraction-bounds]]).

[F4] A direct sum of bounded operators $\bigoplus_n c_nI_n$ with $c_n\in\mathbb C$ and $\sup_n|c_n|<\infty$ is bounded with norm $\sup_n|c_n|$; it is injective and boundedly invertible exactly when $\inf_n|c_n|>0$, with inverse $\bigoplus_nc_n^{-1}I_n$ ([[thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction]] (f), [[def-bounded-linear-operator]]).




## Proof

1.1 [Self-adjointness and positivity] For every $n\ge1$ the operator $T_n:=n\,\mathrm{id}_{\operatorname{ran}P_+^{(n)}}$ is bounded self-adjoint on the Hilbert space $\operatorname{ran}P_+^{(n)}$, and $T_0=0$ on $\mathbb C$; its domain condition $\sum_n\|T_n\psi_n\|^2<\infty$ reads exactly $\sum_nn^2\|\psi_n\|^2<\infty$. By [F2] the direct sum $N=\bigoplus_nT_n$ is self-adjoint and densely defined on the displayed domain, and for $\psi\in D(N)$, $\langle N\psi,\psi\rangle=\sum_nn\|\psi_n\|^2\ge0$. The vacuum has $N\Omega=0$, and the truncations $\psi^{(N)}$ lie in $F_0$, satisfy $\psi^{(N)}\to\psi$ and $N\psi^{(N)}\to N\psi$ by convergence of $\sum_nn^2\|\psi_n\|^2$; hence $F_0$ is a core. [F1, F2, algebra]

1.2 [Commutation on the core] Let $f\in H$ and $\psi\in F_0$; all vectors below lie in $F_0$ by [F3]. Using the sector formulas of [F3], for $n\ge1$ the $n$-th coordinate of $S_+(f)N\psi$ is $\sqrt nP_+^{(n)}(f\otimes(n-1)\psi_{n-1})=(n-1)(S_+(f)\psi)_n$, while the $n$-th coordinate of $NS_+(f)\psi$ is $n(S_+(f)\psi)_n$; both coordinates vanish for $n=0$. Hence $NS_+(f)\psi-S_+(f)N\psi=S_+(f)\psi$. Similarly, the $n$-th coordinate of $S_-(f)N\psi$ is $\sqrt{n+1}\Psi_f^{(n)}((n+1)\psi_{n+1})=(n+1)(S_-(f)\psi)_n$, and that of $NS_-(f)\psi$ is $n(S_-(f)\psi)_n$; their difference is $-(S_-(f)\psi)_n$ for every $n$, proving the second identity. [F3, algebra]

2.1 [Eigenvalues and spectrum] Let $n\in\mathbb N$ and let $u\in\operatorname{ran}P_+^{(n)}$, $u\ne0$. The vector $\iota_n(u)$ lies in $D(N)$ with $(N\iota_n(u))_m=m(\iota_n(u))_m$, which is $n\iota_n(u)$. For $\lambda\notin\mathbb N$ the direct sum $\bigoplus_n(n-\lambda)^{-1}I_n$ has $\sup_n|n-\lambda|^{-1}<\infty$ (because $|n-\lambda|\ge\operatorname{dist}(\lambda,\mathbb N)>0$) and is therefore, by [F4], a bounded inverse of $N-\lambda I$; hence $\lambda\notin\sigma(N)$ and $\sigma(N)\subseteq\mathbb N$, while the eigenvalues exhibited give $\mathbb N\subseteq\sigma(N)$, so $\sigma(N)=\mathbb N$ for $H\ne\{0\}$. [F1, F4, step 1.1, algebra]

3.1 [Domain inclusion and moments] If $\psi\in D(N)$ then $\sum_n(n+1)\|\psi_n\|^2=\sum_nn\|\psi_n\|^2+\sum_n\|\psi_n\|^2\le\sum_nn^2\|\psi_n\|^2+\|\psi\|^2<\infty$ (using $n\le n^2$), so $D(N)\subseteq D_1$. The coordinate formula $(N\psi)_n=n\psi_n$ and orthogonality of the sectors give $\|N\psi\|^2=\sum_n\|n\psi_n\|^2=\sum_nn^2\|\psi_n\|^2$ and $\langle N\psi,\psi\rangle=\sum_nn\|\psi_n\|^2$, both series converging absolutely; this proves (d) and completes the proof of (a)-(d). [F1, step 1.1, algebra] ∎
