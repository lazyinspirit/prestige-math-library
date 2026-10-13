---
id: lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues
aliases: [nrqm-observables-spectral-measure-atoms-and-eigenvalues]
kind: lemma
domain: mathematics
title: "Atoms of the spectral measure and eigenvalues of a self-adjoint operator"
status: draft
origin: pipeline
dependency_level: 2
deps: [def-axiom-of-choice, def-countable-choice, def-eigenvalue-eigenvector-eigenspace-and-spectrum, def-hilbert-orthogonal-projection, def-hilbert-space, def-projection-valued-measure, lem-nrqm-composites-density-and-scalar-spectral-probability, lem-orthogonal-projection-is-linear-self-adjoint-contractive, lem-scalar-and-complex-measures-from-a-pvm, thm-spectral-theorem-for-unbounded-self-adjoint-operators, thm-unbounded-borel-functional-calculus]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-eigenvalue-eigenvector-eigenspace-and-spectrum: mathematical-premise
  def-hilbert-orthogonal-projection: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  lem-orthogonal-projection-is-linear-self-adjoint-contractive: mathematical-premise
  lem-scalar-and-complex-measures-from-a-pvm: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  thm-unbounded-borel-functional-calculus: mathematical-premise

proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 3.1, printed pages 88-95 (spectral projections, point spectrum and the scalar spectral measure)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 3.2.1, printed pages 67-70 (eigenfunctions and eigenvalues of observables; a continuous spectrum has no normalizable eigenfunction)"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 3 'Linear Algebra: Vector Spaces and Operators', Sections 5-7, printed pages 18-28 (orthogonal projectors, adjoints and Hermitian operators)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/04b0570b349e84d74129eef504498472_MIT8_05F13_Chap_03.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice and the Axiom of Countable Choice ([[def-axiom-of-choice]], [[def-countable-choice]]). Let $H\ne\{0\}$ be a complex Hilbert space ([[def-hilbert-space]]), let $A$ be a self-adjoint operator on $H$ with spectral projection-valued measure $E_A$ on the Borel $\sigma$-algebra of $\mathbb R$ ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]], [[def-projection-valued-measure]]), and let $E_{A,x}(B):=\langle E_A(B)x,x\rangle$ be its scalar measures ([[lem-scalar-and-complex-measures-from-a-pvm]]). For $\lambda\in\mathbb R$ say that $\lambda$ is an **eigenvalue** of $A$ when $Ax=\lambda x$ for some nonzero $x\in D(A)$, the domain-restricted reading of [[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]. Then:

(a) The orthogonal projection $E_A(\{\lambda\})$ is the projection of $H$ onto the eigenspace $\ker(A-\lambda)=\{x\in D(A):Ax=\lambda x\}$; in particular $E_A(\{\lambda\})\ne0$ if and only if $\lambda$ is an eigenvalue of $A$.

(b) For every density operator $\rho$ on $H$, that is every self-adjoint positive trace-class $\rho$ with $\operatorname{tr}\rho=1$ ([[lem-nrqm-composites-density-and-scalar-spectral-probability]] clause (a)), the number $\mu^{A}_{\rho}(\{\lambda\})=\operatorname{tr}(\rho E_{A}(\{\lambda\}))$ is the weight that the scalar law $\mu^{A}_{\rho}$ assigns to the singleton $\{\lambda\}$: it vanishes for every $\rho$ whenever $\lambda$ is not an eigenvalue of $A$, and it equals $1$ for the pure state $T_{u,u}$ of every unit eigenvector $u\in\ker(A-\lambda)$.

(c) If $A$ has no eigenvalues at all, then $\mu^{A}_{\rho}(\{\lambda\})=0$ for every density operator $\rho$ and every $\lambda\in\mathbb R$: the scalar law of every state carries no point mass, while its values on general Borel sets remain $\operatorname{tr}(\rho E_{A}(B))$.

Clauses (a)-(c) are mathematical statements about $A$, $E_A$ and the density operators; no physical interpretation of $\mu^{A}_{\rho}$ is asserted here.

## Facts & Assumptions

**Given:** The Axiom of Choice and the Axiom of Countable Choice ([[def-axiom-of-choice]], [[def-countable-choice]]); a nonzero complex Hilbert space $H$; a self-adjoint operator $A$ on $H$ with spectral projection-valued measure $E_A$ and scalar measures $E_{A,x}(B)=\langle E_A(B)x,x\rangle$; and a real number $\lambda$.

[F1] **Spectral representation.** $E_A$ is the unique regular projection-valued measure on the Borel $\sigma$-algebra of $\mathbb R$ with $D(A)=\{x\in H:\int_{\mathbb R}\lambda^{2}\,dE_{A,x}(\lambda)<\infty\}$ and $Ax=\int_{\mathbb R}\lambda\,dE_{A}(\lambda)x$ for every $x\in D(A)$ ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]],).

[F2] **Functional calculus.** For every Borel function $f:\mathbb R\to\mathbb C$ the operator $f(A)=f(E_A)$ has domain $D(f(A))=\{x\in H:\int_{\mathbb R}|f|^{2}\,dE_{A,x}<\infty\}$, is closed and densely defined, satisfies $\|f(A)x\|^{2}=\int_{\mathbb R}|f|^{2}\,dE_{A,x}$ and $f(A)^{*}=\overline f(A)$, and is the norm limit of its bounded truncations $f\,\mathbf 1_{\{|f|\le n\}}(A)$ on that domain; on $D(A)$ the functions $f(\lambda)=\lambda$ and $f(\lambda)=\lambda-\mu$ give $A$ and $A-\mu I$ ([[thm-unbounded-borel-functional-calculus]],).

[F3] **Projection-valued measure.** $E_A$ takes values in the orthogonal projections, with $E_A(\varnothing)=0$, $E_A(\mathbb R)=I$ and $E_A(B\cap C)=E_A(B)E_A(C)$ for Borel $B,C$; for pairwise disjoint Borel sets $B_n$ with union $B$ one has $\sum_nE_A(B_n)x=E_A(B)x$ in norm for every $x\in H$; and $B\subseteq C$ implies $E_A(B)=E_A(B)E_A(C)=E_A(C)E_A(B)$ and $E_A(C)-E_A(B)=E_A(C\setminus B)$ ([[def-projection-valued-measure]], [[lem-scalar-and-complex-measures-from-a-pvm]]).

[F4] **Density operators and their scalar law.** A density operator $\rho$ admits an expansion $\rho=\sum_nw_nT_{u_n,u_n}$ with $w_n\ge0$, $\sum_nw_n=1$ and $(u_n)$ a finite or countable orthonormal family; for every PVM $E$ on a measurable space the assignment $B\mapsto\operatorname{tr}(\rho E(B))$ is a probability measure with $\operatorname{tr}(\rho E(B))=\sum_nw_n\|E(B)u_n\|^{2}$, and for a unit vector $u$ one has $\mu_{T_{u,u}}(B)=\|E(B)u\|^{2}$ ([[lem-nrqm-composites-density-and-scalar-spectral-probability]] clauses (a) and (b)).

[F5] **Orthogonal projections.** An orthogonal projection $P$ satisfies $P^{2}=P=P^{*}$ and $\|Px\|^{2}=\langle Px,x\rangle\le\|x\|^{2}$ for every $x\in H$, and has zero range exactly when $P=0$; moreover $\|x-Px\|^{2}=\|x\|^{2}-\|Px\|^{2}$ ([[def-hilbert-orthogonal-projection]], [[lem-orthogonal-projection-is-linear-self-adjoint-contractive]]).

## Proof

1.1 [$E_A(\{\lambda\})H$ lies in the eigenspace] Let $x\in H$ satisfy $E_A(\{\lambda\})x=x$. For every Borel set $B$ the projection identity gives $E_{A,x}(B)=\langle E_A(B)E_A(\{\lambda\})x,x\rangle=\langle E_A(B\cap\{\lambda\})x,x\rangle$, so the finite measure $E_{A,x}$ is concentrated on $\{\lambda\}$ with total mass $\|x\|^{2}$; hence $\int\lambda^{2}\,dE_{A,x}=\lambda^{2}\|x\|^{2}<\infty$ and $x\in D(A)$ by [F1]. By [F2] applied to $f(\mu)=\mu-\lambda$ one has $\|(A-\lambda)x\|^{2}=\int(\mu-\lambda)^{2}\,dE_{A,x}(\mu)$, and the integrand vanishes $E_{A,x}$-almost everywhere because $E_{A,x}$ is concentrated on $\{\lambda\}$; hence $Ax=\lambda x$. [given, F1, F2, F3, algebra]

1.2 [Every eigenvector is fixed by $E_A(\{\lambda\})$] Conversely let $x\in D(A)$ satisfy $Ax=\lambda x$. By [F2] with $f(\mu)=\mu-\lambda$, $0=\|(A-\lambda)x\|^{2}=\int(\mu-\lambda)^{2}\,dE_{A,x}(\mu)$. For $n\ge1$ put $C_n:=\{\mu\in\mathbb R:|\mu-\lambda|\ge1/n\}$; on $C_n$ the integrand is at least $1/n^{2}$, so $E_{A,x}(C_n)\le n^{2}\int(\mu-\lambda)^{2}\,dE_{A,x}=0$. Set $D_1:=C_1$ and $D_n:=C_n\setminus C_{n-1}$ for $n\ge2$. The sets $D_n$ are pairwise disjoint, their union is $\mathbb R\setminus\{\lambda\}$, and $E_{A,x}(D_n)=0$ because $D_n\subseteq C_n$; hence countable additivity [F3] gives $E_{A,x}(\mathbb R\setminus\{\lambda\})=0$. Therefore $E_{A,x}(\{\lambda\})=E_{A,x}(\mathbb R)=\|x\|^{2}$, and since $(I-E_A(\{\lambda\}))$ is an orthogonal projection, [F5] gives $\|x-E_A(\{\lambda\})x\|^{2}=\|x\|^{2}-\|E_A(\{\lambda\})x\|^{2}=\|x\|^{2}-E_{A,x}(\{\lambda\})=0$, so $x=E_A(\{\lambda\})x$. [given, F2, F3, F5, algebra]

2.1 [Clause (a)] Steps 1.1 and 1.2 show that the range of the orthogonal projection $E_A(\{\lambda\})$ is exactly $\ker(A-\lambda)$. A nonzero eigenspace contains a nonzero vector, and a projection with nonzero range is nonzero by [F5]; conversely $E_A(\{\lambda\})\ne0$ supplies a nonzero element of its range, which is an eigenvector by step 1.1. Hence $E_A(\{\lambda\})\ne0$ exactly when $\lambda$ is an eigenvalue of $A$. [step 1.1, step 1.2, F5]

3.1 [Clause (b)] Let $\rho=\sum_nw_nT_{u_n,u_n}$ be the expansion of [F4]. Then $\mu^{A}_{\rho}(\{\lambda\})=\operatorname{tr}(\rho E_A(\{\lambda\}))=\sum_nw_n\|E_A(\{\lambda\})u_n\|^{2}\ge0$ by [F4], and the sum is zero if and only if $\|E_A(\{\lambda\})u_n\|=0$ for every $n$ of positive weight. If $\lambda$ is not an eigenvalue then $E_A(\{\lambda\})=0$ by step 2.1, so every term vanishes and $\mu^{A}_{\rho}(\{\lambda\})=0$. If $u$ is a unit eigenvector at $\lambda$, then $u=E_A(\{\lambda\})u$ by step 1.2 and [F4] gives $\mu^{A}_{T_{u,u}}(\{\lambda\})=\|E_A(\{\lambda\})u\|^{2}=\|u\|^{2}=1$. [given, step 1.2, step 2.1, F4, algebra]

4.1 [Clause (c)] If $A$ has no eigenvalues then $E_A(\{\lambda\})=0$ for every $\lambda$ by step 2.1, so $\mu^{A}_{\rho}(\{\lambda\})=\operatorname{tr}(\rho\,0)=0$ for every density operator and every $\lambda$: the scalar law assigns no mass to any singleton. The values of $\mu^{A}_{\rho}$ on general Borel sets are unchanged and remain those of [F4]. [step 2.1, F4, algebra] ∎
