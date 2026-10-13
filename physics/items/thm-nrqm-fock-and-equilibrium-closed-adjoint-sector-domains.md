---
id: thm-nrqm-fock-and-equilibrium-closed-adjoint-sector-domains
aliases: [nrqm-fock-and-equilibrium-closed-adjoint-sector-domains]
kind: theorem
domain: mathematics
title: "Closed adjoint sector domains"
status: draft
origin: pipeline
dependency_level: 6
deps: [thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction, lem-nrqm-fock-and-equilibrium-fock-sector-projections, lem-nrqm-fock-and-equilibrium-creation-contraction-bounds, lem-nrqm-composites-hilbert-tensor-construction, def-hilbert-space, def-adjoint-of-a-densely-defined-unbounded-operator, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-densely-defined-closed-and-closable-operator, def-unbounded-linear-operator-domain-and-graph, def-bounded-linear-operator, thm-cauchy-schwarz-in-an-inner-product-space, def-countable-choice]
dependency_roles:
  thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction: mathematical-premise
  lem-nrqm-fock-and-equilibrium-fock-sector-projections: mathematical-premise
  lem-nrqm-fock-and-equilibrium-creation-contraction-bounds: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-densely-defined-closed-and-closable-operator: mathematical-premise
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
    - title: "F. H. L. Essler, Advanced Quantum Theory (Oxford lecture notes, 2017/18), Sections 1.2-1.4 pp. 5-11 (creation and annihilation operators and their commutation relations)"
      url: "http://www-thphys.physics.ox.ac.uk/courses/C6/C6_2017/C6Notes/lecturenotes2017AQT.pdf"
    - title: "S. Pratt, Lecture Notes on Quantum Mechanics (Michigan State University, PHY 851/852; retrieved via the Internet Archive snapshot of 2024-04-21), Chapter 9 Sections 9.1-9.2 pp. 135-137 (field operators: creation and destruction operators)"
      url: "http://web.archive.org/web/20240421090356/https://web.pa.msu.edu/people/pratts/phy851/lectures/lectures_full.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ be a
complex Hilbert space ([[def-hilbert-space]]) with completed tensor powers
$H^{\otimes n}$, symmetric projections $P_+^{(n)}$, contraction maps
$\Psi_f^{(n)}$, Fock space $F(H)$ and core operators $S_\pm(f)$ on the
finite-particle space $F_0$ as in
[[lem-nrqm-fock-and-equilibrium-creation-contraction-bounds]]. For $f\in H$
define
$$D(A_+(f)):=\Bigl\{\psi\in F(H):\ \sum_{n\in\mathbb N}(n+1)\bigl\|P_+^{(n+1)}(f\otimes\psi_n)\bigr\|^2<\infty\Bigr\},\qquad (A_+(f)\psi)_n:=\sqrt n\,P_+^{(n)}(f\otimes\psi_{n-1})\ (n\ge1),\ (A_+(f)\psi)_0:=0,$$
$$D(A_-(f)):=\Bigl\{\psi\in F(H):\ \sum_{n\in\mathbb N}(n+1)\bigl\|\Psi_f^{(n)}(\psi_{n+1})\bigr\|^2<\infty\Bigr\},\qquad (A_-(f)\psi)_n:=\sqrt{n+1}\,\Psi_f^{(n)}(\psi_{n+1}).$$
Put $D_1:=\{\psi\in F(H):\sum_n(n+1)\|\psi_n\|^2<\infty\}$. Then:

(a) $A_+(f)$ and $A_-(f)$ are well-defined linear operators on $F(H)$ with the
displayed domains, and they are the closure and the adjoint of the core operator:
$$A_+(f)=\overline{S_+(f)}=S_-(f)^*,\qquad A_-(f)=S_+(f)^*=\overline{S_-(f)}$$
([[def-adjoint-of-a-densely-defined-unbounded-operator]],
[[def-densely-defined-closed-and-closable-operator]],
[[def-symmetric-self-adjoint-and-essentially-self-adjoint]]);

(b) both $A_\pm(f)$ are closed, densely defined and satisfy
$A_+(f)^*=A_-(f)$, $A_-(f)^*=A_+(f)$; in particular $F_0\subseteq D_1\subseteq D(A_\pm(f))$;

(c) for every $\psi\in D_1$, $\|A_+(f)\psi\|\le\|f\|\,\|\psi\|_1$ and
$\|A_-(f)\psi\|\le\|f\|\,\|\psi\|_1$, where
$\|\psi\|_1^2=\sum_n(n+1)\|\psi_n\|^2$;

(d) for every $g\in H$ and $\psi\in D_1$ the identity
$$\|A_+(g)\psi\|^2=\|A_-(g)\psi\|^2+\|g\|^2\|\psi\|^2$$
holds.

No boundedness of $A_\pm(f)$ on $F(H)$, no self-adjointness of $A_\pm(f)$, and
no physical interpretation is asserted.

## Facts & Assumptions
**Given:** the complex Hilbert space $H$, the Fock space $F(H)$ with dense finite-particle subspace $F_0$, the core operators $S_\pm(f):F_0\to F_0$ and contraction maps $\Psi_f^{(n)}$, vectors $f,g\in H$, and vectors $\varphi,\psi\in F(H)$.

[F1] $F(H)$ is a Hilbert space, $F_0$ is dense, and $\|\psi\|^2=\sum_n\|\psi_n\|^2$ ([[thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction]]).

[F2] $S_+(f)$ and $S_-(f)$ are densely defined linear (resp. conjugate-linear in $f$) operators on $F_0$ with the sector formulas $(S_+(f)\psi)_n=\sqrt nP_+^{(n)}(f\otimes\psi_{n-1})$, $(S_-(f)\psi)_n=\sqrt{n+1}\Psi_f^{(n)}(\psi_{n+1})$, and $\langle S_+(f)\varphi,\psi\rangle=\langle\varphi,S_-(f)\psi\rangle$ for $\varphi,\psi\in F_0$; $\Psi_f^{(n)}(\operatorname{ran}P_+^{(n+1)})\subseteq\operatorname{ran}P_+^{(n)}$ ([[lem-nrqm-fock-and-equilibrium-creation-contraction-bounds]]).

[F3] If $T$ is a densely defined operator with $S\subseteq T$ for a densely defined $S$, then $T^*\subseteq S^*$; if $T$ is closed and $\overline S=T$ then $T=S^{**}$; adjoints are closed operators ([[def-adjoint-of-a-densely-defined-unbounded-operator]], [[def-densely-defined-closed-and-closable-operator]], [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]).

[F4] Cauchy-Schwarz in the Hilbert space $F(H)$: $|\langle\eta,\theta\rangle|\le\|\eta\|\,\|\theta\|$ ([[thm-cauchy-schwarz-in-an-inner-product-space]]).




## Proof

1.1 [The raising operator and its closure] For every $n$ the map $\psi\mapsto P_+^{(n+1)}(f\otimes\psi_n)$ is bounded with norm at most $\|f\|$ by [F2], so $D(A_+(f))$ is a linear subspace containing $F_0$ and $A_+(f)$ is a linear operator extending $S_+(f)$ with $(A_+(f)\psi)_n\in\operatorname{ran}P_+^{(n)}$ for all $\psi\in D(A_+(f))$ and $\sum_n\|(A_+(f)\psi)_n\|^2<\infty$, so $A_+(f)\psi\in F(H)$. If $\psi^{(k)}\in D(A_+(f))$ with $\psi^{(k)}\to\psi$ and $A_+(f)\psi^{(k)}\to\eta$, then for each $m\ge1$ continuity of $\psi\mapsto P_+^{(m)}(f\otimes\psi_{m-1})$ gives $\eta_m=\sqrt mP_+^{(m)}(f\otimes\psi_{m-1})$, and $\eta_0=0$. For every finite $N$, continuity of the norm and the finite sum gives $$\sum_{n=0}^N(n+1)\|P_+^{(n+1)}(f\otimes\psi_n)\|^2=\lim_k\sum_{n=0}^N(n+1)\|P_+^{(n+1)}(f\otimes\psi_n^{(k)})\|^2\le\lim_k\|A_+(f)\psi^{(k)}\|^2=\|\eta\|^2.$$ Taking the supremum over $N$ shows $\psi\in D(A_+(f))$; the coordinate formulas then give $A_+(f)\psi=\eta$, so $A_+(f)$ is closed. For $\psi\in D(A_+(f))$ the truncations $\psi^{(N)}$ lie in $F_0$, satisfy $\psi^{(N)}\to\psi$, and $A_+(f)\psi^{(N)}\to A_+(f)\psi$ because the defining series of $\psi$ converges; hence $F_0$ is a core and $A_+(f)=\overline{S_+(f)}$. [F1, F2, F3, algebra]

1.2 [The lowering operator is the core adjoint] For $\psi\in F(H)$ set $\eta_n:=\sqrt{n+1}\,\Psi_f^{(n)}\psi_{n+1}$. For $\varphi\in F_0$, [F2] gives $\langle S_+(f)\varphi,\psi\rangle=\sum_{n\ge0}\langle\varphi_n,\eta_n\rangle$, a finite sum because $\varphi$ has finite support. If $\sum_n\|\eta_n\|^2<\infty$, Cauchy--Schwarz shows this functional is bounded on $F_0$ and its representing vector is $(\eta_n)_n=A_-(f)\psi$. Conversely, if the functional is bounded with norm $C$, let $\varphi^{(N)}$ have coordinates $\eta_n$ for $n\le N$ and zero thereafter. Then $\varphi^{(N)}\in F_0$ and $S_N:=\sum_{n\le N}\|\eta_n\|^2=|\langle S_+(f)\varphi^{(N)},\psi\rangle|\le C\|\varphi^{(N)}\|=C\sqrt{S_N}$, so $S_N\le C^2$ for every $N$. Hence $(\eta_n)_n\in F(H)$ and the functional is represented by $A_-(f)\psi$. Thus $\psi\in D(S_+(f)^*)$ exactly when $\sum_n(n+1)\|\Psi_f^{(n)}\psi_{n+1}\|^2<\infty$, and $S_+(f)^*=A_-(f)$. As an adjoint $A_-(f)$ is closed, and it is densely defined because it contains $F_0$. [F1, F2, F3, F4, algebra]

1.3 [Weighted domain and bounds] For $\psi\in D_1$, $\sum_n(n+1)\|P_+^{(n+1)}(f\otimes\psi_n)\|^2\le\|f\|^2\sum_n(n+1)\|\psi_n\|^2<\infty$ and likewise $\sum_n(n+1)\|\Psi_f^{(n)}(\psi_{n+1})\|^2\le\|f\|^2\sum_n(n+1)\|\psi_{n+1}\|^2<\infty$, so $D_1\subseteq D(A_\pm(f))$ and the bounds of (c) follow from the same estimates; since $F_0\subseteq D_1$, this also gives the density in (b). [F1, F2, algebra]

2.1 [Mutual adjoints] Since $A_+(f)=\overline{S_+(f)}=S_+(f)^{**}$ by step 1.1, [F3] gives $A_+(f)^*=S_+(f)^{***}=S_+(f)^*=A_-(f)$ by step 1.2. Applying the same step 1.2 with the roles of $S_+$ and $S_-$ exchanged (the adjoint relation of [F2] is symmetric in the two core operators) gives $S_-(f)^*=A_+(f)$, hence $A_-(f)^*=S_+(f)^{**}=A_+(f)$. Consequently both operators are closed with the stated adjoint pairs, proving (a) and (b) apart from the domain inclusion. [F2, F3, step 1.1, step 1.2, algebra]

3.1 [The weighted norm identity] Let $\psi\in D_1$ and let $\psi^{(N)}$ be its truncations; then $\psi^{(N)}\to\psi$ and, by the sector formulas and the convergence of the defining sums of $\psi$, $A_\pm(g)\psi^{(N)}\to A_\pm(g)\psi$. The identity of [[lem-nrqm-fock-and-equilibrium-creation-contraction-bounds]] (d) applies to $\psi^{(N)}\in F_0$; passing to the limit in $\|A_+(g)\psi^{(N)}\|^2=\|A_-(g)\psi^{(N)}\|^2+\|g\|^2\|\psi^{(N)}\|^2$ using continuity of the norm and of addition in $F(H)$ gives the displayed identity for $\psi$. This proves (d) and completes the proof. [F1, F2, step 1.1, step 1.3, algebra] ∎
