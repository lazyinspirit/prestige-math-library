---
id: lem-nrqm-fock-and-equilibrium-fock-sector-projections
aliases: [nrqm-fock-and-equilibrium-fock-sector-projections]
kind: lemma
domain: mathematics
title: "Fock sector projections"
status: draft
origin: pipeline
dependency_level: 4
deps: [thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction, lem-nrqm-composites-permutation-sector-projections, def-hilbert-space, def-bounded-linear-operator, def-operator-norm, def-hilbert-orthogonal-projection, lem-orthogonal-projection-is-linear-self-adjoint-contractive, def-hilbert-space-adjoint, def-dense-top, def-countable-choice]
dependency_roles:
  thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction: mathematical-premise
  lem-nrqm-composites-permutation-sector-projections: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-hilbert-orthogonal-projection: mathematical-premise
  lem-orthogonal-projection-is-linear-self-adjoint-contractive: mathematical-premise
  def-hilbert-space-adjoint: mathematical-premise
  def-dense-top: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "F. H. L. Essler, Advanced Quantum Theory (Oxford lecture notes, 2017/18), Section 1.2 pp. 5-6 (Fock space sectors and occupation-number basis)"
      url: "http://www-thphys.physics.ox.ac.uk/courses/C6/C6_2017/C6Notes/lecturenotes2017AQT.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 1.3 (the projection theorem) and Section 1.4 (orthogonal sums)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ be a
complex Hilbert space ([[def-hilbert-space]]) with completed tensor powers
$H^{\otimes n}$ and symmetric projections $P_+^{(n)}$ as in
[[thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction]], so that
$$F(H)=\Bigl\{\psi=(\psi_n)_{n\in\mathbb N}:\ \psi_n\in\operatorname{ran}P_+^{(n)},\ \sum_n\|\psi_n\|^2<\infty\Bigr\}$$
is a Hilbert space. For $n\in\mathbb N$ define
$$\Pi_n:F(H)\to F(H),\qquad \Pi_n\psi:=(0,\dots,0,\psi_n,0,\dots)$$
(the entry $\psi_n$ in coordinate $n$ and $0$ in all other coordinates). Then:

(a) each $\Pi_n$ is a bounded linear operator with
$\|\Pi_n\psi\|=\|\psi_n\|$ and $\|\Pi_n\|\le1$; it satisfies
$\Pi_n^2=\Pi_n$, $\Pi_n^*=\Pi_n$ ([[def-hilbert-space-adjoint]]), and
$\Pi_n$ is the Hilbert orthogonal projection of $F(H)$ onto the closed subspace
$\iota_n(\operatorname{ran}P_+^{(n)})$ of vectors supported in coordinate $n$
([[def-hilbert-orthogonal-projection]]);

(b) $\Pi_n\Pi_m=0$ for $n\ne m$, so the ranges are pairwise orthogonal and
$\|\Pi_n\|=1$ whenever $\operatorname{ran}P_+^{(n)}\ne\{0\}$ (which holds for
every $n$ when $H\ne\{0\}$);

(c) for every $\psi\in F(H)$ the series $\sum_{n}\Pi_n\psi$ converges in norm to
$\psi$, the expansion is orthogonal,
$$\psi=\sum_{n\in\mathbb N}\Pi_n\psi,\qquad \|\psi\|^2=\sum_{n\in\mathbb N}\|\Pi_n\psi\|^2,$$
and the partial sums $\sum_{n\le N}\Pi_n$ converge to the identity in the strong
operator topology, i.e. $\bigl\|\psi-\sum_{n\le N}\Pi_n\psi\bigr\|\to0$ for
every $\psi\in F(H)$ ([[def-dense-top]], [[def-bounded-linear-operator]]);

(d) $\Pi_n=0$ as an operator if and only if
$\operatorname{ran}P_+^{(n)}=\{0\}$; for $H\ne\{0\}$ no $\Pi_n$ vanishes.

No physical interpretation of the Fock space or of its sectors is asserted.

## Facts & Assumptions

**Given:** the complex Hilbert space $H\ne\{0\}$ with completed tensor powers $H^{\otimes n}$ and symmetric projections $P_+^{(n)}$ ($n\ge1$, $P_+^{(0)}=\mathrm{id}_{\mathbb C}$), the Hilbert space $F(H)$ with inner product $\langle\psi,\varphi\rangle=\sum_n\langle\psi_n,\varphi_n\rangle$, the vacuum $\Omega=(1,0,0,\dots)$, and vectors $\psi,\varphi\in F(H)$.

[F1] $F(H)$ is a Hilbert space; for $\psi\in F(H)$ one has $\psi_n\in\operatorname{ran}P_+^{(n)}$, $\sum_n\|\psi_n\|^2=\|\psi\|^2<\infty$, and coordinatewise operations; the truncations $\psi^{(N)}=(\psi_0,\dots,\psi_N,0,0,\dots)$ satisfy $\psi^{(N)}\to\psi$ ([[thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction]]).

[F2] For each $n\ge1$, $P_+^{(n)}$ is an orthogonal projection on the Hilbert space $H^{\otimes n}$, hence $\operatorname{ran}P_+^{(n)}$ is a closed linear subspace; for fixed $m$ the map $u\mapsto u\otimes v$ is bounded ([[lem-nrqm-composites-permutation-sector-projections]], [[thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction]]).

[F3] A bounded idempotent self-adjoint operator on a Hilbert space is the Hilbert orthogonal projection onto its range, its range is closed, and it is contractive ([[def-hilbert-orthogonal-projection]], [[lem-orthogonal-projection-is-linear-self-adjoint-contractive]], [[def-operator-norm]]).

[F4] For a family $(\eta_n)$ of pairwise orthogonal vectors with $\sum_n\|\eta_n\|^2<\infty$ the series $\sum_n\eta_n$ converges and $\bigl\|\sum_n\eta_n\bigr\|^2=\sum_n\|\eta_n\|^2$ ([[thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction]]).

## Proof

1.1 [Algebraic properties] For $\psi\in F(H)$ the tuple $\Pi_n\psi$ lies in $F(H)$ because its coordinate $n$ is $\psi_n\in\operatorname{ran}P_+^{(n)}$ and all other coordinates vanish ([F1]); clearly $\Pi_n(\psi+c\chi)=\Pi_n\psi+c\,\Pi_n\chi$, so $\Pi_n$ is linear, and $\|\Pi_n\psi\|^2=\|\psi_n\|^2\le\|\psi\|^2$ gives $\|\Pi_n\|\le1$. Obviously $\Pi_n^2=\Pi_n$. For the adjoint: $\langle\Pi_n\psi,\varphi\rangle=\langle\psi_{n},\varphi_{n}\rangle=\langle\psi,\Pi_n\varphi\rangle$ for all $\psi,\varphi\in F(H)$, so $\Pi_n^*=\Pi_n$ by uniqueness of the Hilbert-space adjoint. [F1, algebra]

1.2 [Orthogonality and ranges] For $n\ne m$, $\Pi_n\Pi_m=0$ because the tuple $\Pi_m\psi$ is supported in coordinate $m$ and $\Pi_n$ reads coordinate $n$. The range of $\Pi_n$ is exactly the set of vectors of $F(H)$ supported in coordinate $n$, a closed subspace that is identified with $\operatorname{ran}P_+^{(n)}$ by the isometry $\iota_n$ ; it is closed in $F(H)$ because if $\Pi_n\psi^{(k)}\to\eta$, then $\eta_m=0$ for $m\ne n$ and $\eta_n\in\operatorname{ran}P_+^{(n)}$ by closedness ([F2]). Hence $\Pi_n$ is a bounded idempotent self-adjoint operator and therefore, by [F3], the Hilbert orthogonal projection onto its range; when $\operatorname{ran}P_+^{(n)}\ne\{0\}$ choose a unit $u$ there and note $\|\Pi_n\iota_n(u)\|=1$, so $\|\Pi_n\|=1$. For $H\ne\{0\}$ and $n\ge1$ one has $0\ne e^{\otimes n}\in\operatorname{ran}P_+^{(n)}$ for any $e\ne0$ in $H$, and $\operatorname{ran}P_+^{(0)}=\mathbb C$, so no $\Pi_n$ vanishes and (b), (d) hold. [F2, F3, algebra]

2.1 [Orthogonal expansion] For $\psi\in F(H)$ put $\psi^{(N)}:=\sum_{n\le N}\Pi_n\psi$ and $r^{(N)}:=\psi-\psi^{(N)}$, whose coordinates are $\psi_n$ for $n>N$ and $0$ otherwise. Then $\|r^{(N)}\|^2=\sum_{n>N}\|\psi_n\|^2\to0$ by [F1], so $\sum_n\Pi_n\psi$ converges to $\psi$ in norm. The terms $\Pi_n\psi=\psi_n$ are pairwise orthogonal by step 1.2, so [F4] applied to the finite family $(\Pi_n\psi)_{n\le N}$ gives $\|\psi^{(N)}\|^2=\sum_{n\le N}\|\psi_n\|^2$; passing to the limit and using continuity of the norm and of the inner product gives $\|\psi\|^2=\sum_n\|\Pi_n\psi\|^2$. [F1, F4, step 1.2, algebra]

3.1 [Strong convergence and conclusion] Since $\bigl\|\psi-\sum_{n\le N}\Pi_n\psi\bigr\|^2=\sum_{n>N}\|\psi_n\|^2\to0$ for every $\psi\in F(H)$ by step 2.1, the partial sums of $(\Pi_n)$ converge to the identity in the strong operator topology; combined with steps 1.1, 1.2 and 2.1 this proves (a)-(d). [step 1.1, step 1.2, step 2.1, algebra] ∎
