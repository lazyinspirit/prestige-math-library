---
id: thm-qft-algebraic-gns-domain
kind: theorem
title: GNS Hilbert reconstruction with invariant operator domain
status: published
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - lem-qft-positive-state-cauchy-schwarz
  - thm-completion-of-an-inner-product-space-is-hilbert
dependency_roles:
  lem-qft-positive-state-cauchy-schwarz: mathematical-premise
  thm-completion-of-an-inner-product-space-is-hilbert: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
  precheck: pass
sources:
  references:
    - title: "Konrad Schmüdgen, An Invitation to Unbounded Representations of *-Algebras on Hilbert Space, Graduate Texts in Mathematics 285, Springer Nature (2020), §§2.4 and 4.4"
      url: "https://doi.org/10.1007/978-3-030-46366-3"
      locator: "§2.4, printed pp. 20–21; §4.4, printed pp. 78–81, especially Lemma 4.35, Proposition 4.36 and Theorem 4.38."
    - title: "Christopher J. Fewster and Kasia Rejzner, Algebraic Quantum Field Theory—an introduction, lecture notes, arXiv:1904.04051v2 (2019), §2.3"
      url: "https://arxiv.org/html/1904.04051"
      locator: "§2.3, printed pp. 7–9: GNS theorem, quotient construction, common-domain representation, state recovery and uniqueness."
---

## Operator conventions

Let $H$ be a complex Hilbert space with inner product linear in its first variable. An operator on $H$ is a linear map $T:D(T)\to H$ whose domain $D(T)$ is a linear subspace of $H$; it is densely defined when $D(T)$ is dense in $H$. It is bounded when some $C\geq0$ satisfies $\|Tx\|\leq C\|x\|$ for all $x\in D(T)$, and unbounded when no such $C$ exists. No boundedness of the operators $\pi_\omega(a)$ is assumed here.

For a complex vector space $E$, $\operatorname{End}(E)$ denotes the set of complex-linear maps from $E$ to itself. The product norm on $H\times H$ is $\|(x,y)\|_\times:=(\|x\|^2+\|y\|^2)^{1/2}$.

For a densely defined $T$, define its Hilbert-space adjoint by

$$D(T^*):=\{y\in H:\text{there is }z\in H\text{ such that }(Tx,y)=(x,z)\text{ for every }x\in D(T)\},\qquad T^*y:=z.$$

The vector $z$ is unique because $D(T)$ is dense. The graph of $T$ is $G(T):=\{(x,Tx):x\in D(T)\}\subseteq H\times H$. The operator $T$ is **symmetric** when $D(T)\subseteq D(T^*)$ and $T^*x=Tx$ for every $x\in D(T)$; it is **self-adjoint** when $D(T)=D(T^*)$ and the same equality holds there. It is **closable** when the closure of $G(T)$ in the product norm on $H\times H$ is the graph of an operator, denoted $\overline T$. A symmetric operator is **essentially self-adjoint** when it is closable and $\overline T$ is self-adjoint.

## Statement

Let $A$ be a complex vector space with a complex-bilinear associative product, unit $1_A$, and conjugate-linear involution satisfying $(ab)^*=b^*a^*$, $(a^*)^*=a$ and $1_A^*=1_A$. Let $\omega:A\to\mathbb C$ be complex-linear with $\omega(1_A)=1$ and real nonnegative $\omega(a^*a)$ for every $a\in A$. Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$: every countable family of nonempty sets has a choice function. Put $N_\omega:=\{a\in A:\omega(a^*a)=0\}$ and $\mathcal D_\omega:=A/N_\omega$, with

$$([a],[b])_\omega:=\omega(b^*a),$$

using the first-variable-linear convention. Let $H_\omega$ be the Hilbert completion of this inner-product space, and identify $\mathcal D_\omega$ with its canonical dense image in $H_\omega$. For each $a\in A$ define left multiplication on the common domain $\mathcal D_\omega$ by $\pi_\omega(a)[b]:=[ab]$. Then $\pi_\omega$ is a unital algebra representation of $A$ on the invariant dense domain $\mathcal D_\omega$, and

$$\mathcal D_\omega\subseteq D(\pi_\omega(a)^*),\qquad \pi_\omega(a)^*|_{\mathcal D_\omega}=\pi_\omega(a^*).$$

Each $\pi_\omega(a)$ is closable, meaning that the closure of its graph in $H_\omega\times H_\omega$ is the graph of an operator. The vector $\Omega_\omega:=[1_A]$ is a unit cyclic vector, $\pi_\omega(A)\Omega_\omega=\mathcal D_\omega$, and $\omega(a)=(\pi_\omega(a)\Omega_\omega,\Omega_\omega)$. For uniqueness, let $K$ be a Hilbert space, $\mathcal D'\subseteq K$ a dense linear subspace invariant under every operator $\rho(a)$, and $\rho:A\to\operatorname{End}(\mathcal D')$ a unital algebra representation satisfying $(\rho(a)x,y)=(x,\rho(a^*)y)$ for all $a\in A$ and $x,y\in\mathcal D'$. If $\Omega'\in\mathcal D'$, $\mathcal D'=\rho(A)\Omega'$, and $\omega(a)=(\rho(a)\Omega',\Omega')$, then there is a unique unitary $V:H_\omega\to K$ with $V\Omega_\omega=\Omega'$ and $V\pi_\omega(a)x=\rho(a)Vx$ for all $a\in A$ and $x\in\mathcal D_\omega$. This theorem supplies neither a C*-norm nor essential self-adjointness of $\pi_\omega(a)$ when $a=a^*$.

## Facts & Assumptions

**Given:** A unital complex star algebra $A$, a positive normalized state $\omega$, and Countable Choice $\mathrm{AC}_\omega$ as stated above.

[F1] [[lem-qft-positive-state-cauchy-schwarz]]: $(a,b)_\omega=\omega(b^*a)$ is a Hermitian positive semidefinite form, its radical is $N_\omega=\{a\in A:(a,b)_\omega=0\text{ for every }b\in A\}$, and $N_\omega$ is a left ideal; also $|\omega(b^*a)|^2\le\omega(a^*a)\omega(b^*b)$, including zero-norm cases.

[F2] [[thm-completion-of-an-inner-product-space-is-hilbert]]: assuming Countable Choice, the norm completion of a real or complex inner-product space has a unique extended inner product inducing the completion norm and is a Hilbert space. Its proof uses Countable Choice to select countably many approximants; no full Axiom of Choice is assumed here.

## Proof

**Proof technique:** direct.

1.1 By [F1], $N_\omega$ is a subspace and every element of it pairs to zero with every element of $A$. Thus $([a],[b])_\omega=\omega(b^*a)$ is independent of both representatives; it is Hermitian and nonnegative, and $([a],[a])_\omega=0$ holds exactly when $a\in N_\omega$, so the quotient pairing is positive definite. [F1, given]

1.2 For $a,b\in A$, replacing $b$ by $b+n$ with $n\in N_\omega$ changes $ab$ by $an\in N_\omega$ because $N_\omega$ is a left ideal by [F1]; hence $\pi_\omega(a)[b]=[ab]$ is well defined. Bilinearity, associativity and $1_A$ give $\pi_\omega(a+b)=\pi_\omega(a)+\pi_\omega(b)$, $\pi_\omega(\lambda a)=\lambda\pi_\omega(a)$, $\pi_\omega(ab)=\pi_\omega(a)\pi_\omega(b)$ and $\pi_\omega(1_A)=I_{\mathcal D_\omega}$, and left multiplication keeps $\mathcal D_\omega$ invariant. [F1, given, algebra]

2.1 Apply [F2] to the quotient inner-product space $\mathcal D_\omega$; under the stated Countable Choice assumption this gives the Hilbert completion $H_\omega$ and a dense isometric embedding of $\mathcal D_\omega$, which we identify with its image. This is the only completion invoked. [F2, given, step 1.1]

2.2 For $a,b,c\in A$, the quotient form gives $(\pi_\omega(a)[b],[c])_\omega=\omega(c^*ab)=([b],\pi_\omega(a^*)[c])_\omega$. By the definition of the Hilbert-space adjoint, this identity for all $[b]\in\mathcal D_\omega$ shows $[c]\in D(\pi_\omega(a)^*)$ and $\pi_\omega(a)^*[c]=\pi_\omega(a^*)[c]$. [step 1.1, step 1.2, algebra]

2.3 Since $([1_A],[1_A])_\omega=\omega(1_A)=1$, $\Omega_\omega$ is a unit vector. Also $\pi_\omega(a)\Omega_\omega=[a]$ for every $a\in A$, so its algebraic orbit is exactly $\mathcal D_\omega$ and is dense. Finally $(\pi_\omega(a)\Omega_\omega,\Omega_\omega)_\omega=([a],[1_A])_\omega=\omega(a)$, recovering the state. [given, step 1.1, step 1.2]

2.4 Let $(H',\mathcal D',\rho,\Omega')$ be another algebraically cyclic *-representation of $A$ with common invariant dense domain $\mathcal D'=\rho(A)\Omega'$, $\rho(a^*)=\rho(a)^*|_{\mathcal D'}$, and $\omega(a)=(\rho(a)\Omega',\Omega')$. Define $U[a]:=\rho(a)\Omega'$. If $[a]=[0]$, then $\|\rho(a)\Omega'\|^2=\omega(a^*a)=0$, so $U$ is well defined; and for $a,b\in A$, $(U[a],U[b])=\omega(b^*a)=([a],[b])_\omega$ by the representation's adjoint identity. Thus $U$ is an isometry from $\mathcal D_\omega$ onto the dense subspace $\mathcal D'$. [given, F1, step 1.1, step 1.2]

3.1 Suppose $x_n\in\mathcal D_\omega$, $x_n\to0$ in $H_\omega$, and $\pi_\omega(a)x_n\to y$ in $H_\omega$. For each $z\in\mathcal D_\omega$, step 2.2 gives $(y,z)_\omega=\lim_n(\pi_\omega(a)x_n,z)_\omega=\lim_n(x_n,\pi_\omega(a^*)z)_\omega=0$. Density forces $y=0$. Therefore the closed graph relation of $\pi_\omega(a)$ contains no two distinct outputs over one input: their difference would be a nonzero pair $(0,y)$. The graph closure is a graph, so $\pi_\omega(a)$ is closable. In particular, if $a=a^*$ then $\pi_\omega(a)$ is symmetric on $\mathcal D_\omega$; this does not prove essential self-adjointness. [step 2.2, given]

4.1 The isometry extends uniquely from the dense domain to a unitary $\overline U:H_\omega\to H'$ because its range $\mathcal D'$ is dense. It sends $\Omega_\omega$ to $\Omega'$ and, for $[b]\in\mathcal D_\omega$, $\overline U\pi_\omega(a)[b]=\rho(ab)\Omega'=\rho(a)\overline U[b]$; hence it intertwines the representations on the common domains. Uniqueness follows because every vector of $\mathcal D_\omega$ has the form $\pi_\omega(a)\Omega_\omega$. [step 2.3, step 2.4, step 1.2] ∎
