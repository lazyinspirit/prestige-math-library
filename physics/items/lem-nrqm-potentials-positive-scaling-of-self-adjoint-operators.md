---
id: lem-nrqm-potentials-positive-scaling-of-self-adjoint-operators
aliases: [ nrqm-potentials-positive-scaling-of-self-adjoint-operators ]
kind: lemma
domain: mathematics
title: "Positive scalar multiples of self-adjoint operators: domains,
  resolvents, spectra and eigenbases"
status: draft
origin: session
dependency_level: 3
deps:
  - def-adjoint-of-a-densely-defined-unbounded-operator
  - def-symmetric-self-adjoint-and-essentially-self-adjoint
  - def-resolvent-and-spectrum-of-a-closed-unbounded-operator
  - def-compact-linear-operator
  - def-bounded-linear-operator
  - def-hilbert-space
  - lem-nrqm-intervals-compact-resolvent-eigenbasis
  - def-countable-choice
  - def-axiom-of-choice
  - thm-spectral-theorem-for-compact-self-adjoint-operators
  - cor-orthonormal-eigenbasis-for-a-compact-self-adjoint-operator
  - lem-compositions-with-a-compact-operator-are-compact
  - thm-self-adjoint-resolvent-estimate
  - cor-finite-dimensional-subspaces-are-closed
dependency_roles:
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-resolvent-and-spectrum-of-a-closed-unbounded-operator: mathematical-premise
  def-compact-linear-operator: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-hilbert-space: mathematical-premise
  lem-nrqm-intervals-compact-resolvent-eigenbasis: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-spectral-theorem-for-compact-self-adjoint-operators: mathematical-premise
  cor-orthonormal-eigenbasis-for-a-compact-self-adjoint-operator: mathematical-premise
  lem-compositions-with-a-compact-operator-are-compact: mathematical-premise
  thm-self-adjoint-resolvent-estimate: mathematical-premise
  cor-finite-dimensional-subspaces-are-closed: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Section 2.2 printed pages 58-67 (PDF pages 70-79): self-adjoint
        operators, adjoints and the spectrum under scaling"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "M. Reed and B. Simon, Methods of Modern Mathematical Physics I:
        Functional Analysis, revised edition, Section VIII.1 (closed, symmetric
        and self-adjoint operators; scaling and resolvents)"
      url: "https://www.sciencedirect.com/bookseries/methods-of-modern-mathematical-p\
        hysics/vol/1/suppl/C"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Let $H\ne\{0\}$ be a
complex Hilbert space ([[def-hilbert-space]]), let $A:D(A)\subset H\to H$ be a
densely defined self-adjoint operator
([[def-symmetric-self-adjoint-and-essentially-self-adjoint]],
[[def-adjoint-of-a-densely-defined-unbounded-operator]]), and let $c>0$ be
real. Write $cA$ for the operator with domain $D(cA):=D(A)$ and
$(cA)x:=c\,(Ax)$. Then:

(a) $cA$ is self-adjoint.

(b) For every $z\in\mathbb C$ one has $z\in\rho(cA)$ if and only if
$z/c\in\rho(A)$, and then
$(cA-z)^{-1}=c^{-1}(A-z/c)^{-1}$; consequently
$\rho(cA)=c\,\rho(A)$ and $\sigma(cA)=c\,\sigma(A)$.

(c) If some, hence every, resolvent of $A$ is compact
([[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]],
[[def-compact-linear-operator]]), then every resolvent of $cA$ is compact and
$A$ and $cA$ have the same complete orthonormal eigenfamily $(e_j)_{j\in J}$.
If $N:=\dim H<\infty$, take $J=\{1,\ldots,N\}$; if $H$ is infinite dimensional,
take $J=\mathbb N$, with $|\mu_j|\to\infty$ and each eigenvalue repeated
according to its finite multiplicity. In both cases $Ae_j=\mu_je_j$,
$(cA)e_j=c\mu_je_j$, and
$$\sigma(A)=\{\mu_j:j\in J\},\qquad\sigma(cA)=\{c\mu_j:j\in J\}$$
with no other spectral points. The finite-dimensional conclusion also holds
without a separate compactness assumption, since bounded operators on such
$H$ are compact.

(d) Eigenvectors correspond exactly: for $\lambda\in\mathbb R$ and $x\in H$,
$x\ne0$, one has $x\in D(A)$ and $Ax=\lambda x$ if and only if
$x\in D(cA)$ and $(cA)x=(c\lambda)x$; and every eigenvalue of $cA$ has the same
eigenspace as the corresponding eigenvalue of $A$.

(e) If $A\ge\gamma$ in the quadratic-form sense, meaning that
$\langle Ax,x\rangle\ge\gamma\|x\|^2$ for every $x\in D(A)$, then
$cA\ge c\gamma$ in the same sense.

Only the scaling of the given operator is asserted; no domain, spectrum or
eigenvector is claimed for any other rescaling, and no physical
interpretation is attached.

## Facts & Assumptions

**Given:** A complex Hilbert space $H\ne\{0\}$; a densely defined self-adjoint $A$; a real $c>0$; the operator $cA$ with domain $D(A)$.

[F1] **Adjoints and symmetry.** For densely defined $T$, the adjoint $T^*$ has domain consisting of those $y$ for which $x\mapsto\langle Tx,y\rangle$ is bounded on $D(T)$, and $T$ is self-adjoint when $T=T^*$ including domains; $T$ is symmetric when $\langle Tx,y\rangle=\langle x,Ty\rangle$ for all $x,y\in D(T)$ ([[def-adjoint-of-a-densely-defined-unbounded-operator]], [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]).

[F2] **Inner-product algebra.** The inner product is linear in its first argument and conjugate-linear in its second, and $\langle\alpha x,y\rangle=\alpha\langle x,y\rangle$, $\langle x,\alpha y\rangle=\overline{\alpha}\langle x,y\rangle$ for $\alpha\in\mathbb C$ ([[def-hilbert-space]]).

[F3] **Resolvent and spectrum.** For a closed operator $T$, the resolvent set $\rho(T)$ consists of the $z\in\mathbb C$ for which $T-z$ is a bijection of $D(T)$ onto $H$ with bounded inverse $(T-z)^{-1}\in\mathcal B(H)$, and $\sigma(T)=\mathbb C\setminus\rho(T)$ ([[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]], [[def-bounded-linear-operator]]).

[F4] **Compactness of scalar multiples.** If $K\in\mathcal B(H)$ is compact and $c\ne0$, then $cK$ is compact ([[def-compact-linear-operator]]; scalar multiples of compact operators are compact as part of the linear-subspace statement of the compact-operator ideal).

[F5] **Compact spectral decomposition.** Every compact self-adjoint bounded operator has a complete orthonormal eigenfamily, allowing a kernel basis; each nonzero eigenspace is finite dimensional and only finitely many nonzero eigenvalues have modulus above a fixed positive threshold ([[thm-spectral-theorem-for-compact-self-adjoint-operators]], [[cor-orthonormal-eigenbasis-for-a-compact-self-adjoint-operator]]). Products with a bounded operator preserve compactness ([[lem-compositions-with-a-compact-operator-are-compact]]). For a self-adjoint unbounded $A$, $\pm i\in\rho(A)$ with bounded resolvents ([[thm-self-adjoint-resolvent-estimate]]); if a real compact resolvent has already been obtained, the infinite-dimensional conclusion is also [[lem-nrqm-intervals-compact-resolvent-eigenbasis]].

## Proof

**Proof technique:** direct; verify symmetry and the adjoint domain of $cA$ by scaling the defining pairings, transfer resolvents by the identity $cA-z=c(A-z/c)$, and read off eigenpairs and quadratic forms.

**Given:** The data and hypotheses of the statement and [F1]-[F5].

1.1 [Symmetry] For $x,y\in D(A)=D(cA)$, [F2] gives $\langle(cA)x,y\rangle=c\langle Ax,y\rangle=c\langle x,Ay\rangle=\langle x,cAy\rangle=\langle x,(cA)y\rangle$; since $c$ is real, the scalar passes through the pairing in both slots, so $cA$ is symmetric. [given, F1, F2, algebra]

1.2 [Resolvent identity] Fix $z\in\mathbb C$ and write $B:=cA-z$ and $B':=A-z/c$ on the common domain $D(A)$. Then $B=cB'$ as operators, since $c(A-z/c)x=cAx-zx=(cA-z)x$ for every $x\in D(A)$. If $z/c\in\rho(A)$, then $B'$ is a bijection $D(A)\to H$ with bounded inverse, so $B=cB'$ is a bijection with inverse $c^{-1}B'^{-1}\in\mathcal B(H)$, which is the displayed identity; conversely if $z\in\rho(cA)$, then $c^{-1}B=B'$ is a bijection with bounded inverse $c\,B^{-1}$, so $z/c\in\rho(A)$. Therefore $\rho(cA)=c\,\rho(A)$ and, taking complements in $\mathbb C$, $\sigma(cA)=c\,\sigma(A)$; this is (b). [given, F3, algebra]

1.3 [Eigenpairs] Let $\lambda\in\mathbb R$ and $x\in H$, $x\ne0$. Since $D(cA)=D(A)$, $x\in D(A)$ if and only if $x\in D(cA)$. For such $x$, $Ax=\lambda x$ if and only if $cAx=c\lambda x$, because multiplication by $c\ne0$ is injective; hence the eigenspaces coincide, which is (d). [given, algebra]

2.1 [Adjoint domain] Let $y\in D((cA)^*)$. Then $x\mapsto\langle(cA)x,y\rangle=c\langle Ax,y\rangle$ is bounded on $D(A)$, and since $c>0$, $x\mapsto\langle Ax,y\rangle$ is bounded on $D(A)$ as well; hence $y\in D(A^*)=D(A)$ and $A^*y=Ay$. For every $x\in D(A)$ the defining identity of the adjoint and [F2] then give $\langle x,(cA)^*y\rangle=\langle(cA)x,y\rangle=c\langle Ax,y\rangle=c\langle x,Ay\rangle=\langle x,cAy\rangle$, and density of $D(A)$ in $H$ gives $(cA)^*y=cAy$. Hence $D((cA)^*)\subseteq D(cA)$; the reverse inclusion holds because $cA$ is symmetric, so $D((cA)^*)=D(cA)$ and $(cA)^*=cA$. This proves (a). [step 1.1, F1, F2, algebra]

2.2 [All resolvents are compact] Write $R_z=(A-z)^{-1}$ and suppose $R_{z_0}$ is compact. The resolvent identity, obtained by subtracting the two inverses on their common operator domain, is $R_z=R_{z_0}+(z-z_0)R_{z_0}R_z=R_{z_0}[I+(z-z_0)R_z]$. Thus every $R_z$ is compact by [F5], irrespective of whether $z_0$ is real. Step 1.2 now gives compactness of every resolvent of $cA$. [step 1.2, F4, F5, algebra]

2.3 [Finite-dimensional case] If $\dim H=N<\infty$, the dense linear domain $D(A)$ equals $H$, since every finite-dimensional subspace is closed ([[cor-finite-dimensional-subspaces-are-closed]]). The operator $A$ is then bounded and compact, and its self-adjointness and [F5] give an orthonormal eigenbasis of precisely $N$ vectors, including a basis of its zero eigenspace if necessary. In that basis $A$ is the diagonal matrix with real entries $\mu_j$, so its spectrum is exactly those entries: off that set the diagonal inverse exists and is bounded, while at an entry there is a nonzero kernel vector. Step 1.3 gives the same family for $cA$, and step 1.2 gives the scaled spectrum. [step 1.2, step 1.3, F1, F5, algebra]

3.1 [Infinite-dimensional eigenfamily from an arbitrary compact resolvent] Suppose $H$ is infinite dimensional. By step 2.2 both $R_i$ and $R_{-i}$ are compact; their adjoint relation $R_i^*=R_{-i}$ follows from the defining self-adjoint pairings, and the resolvent identity shows they commute. Hence $K:=R_{-i}R_i=R_i^*R_i$ is compact, self-adjoint, positive and injective. Its range lies in $D(A^2)$: $R_i$ maps into $D(A)$, $R_{-i}$ preserves $D(A)$ and commutes there with $A$, by $(A-z)R_z=I$ and $R_z(A-z)=I$ on $D(A)$. [F5] decomposes $H$ into the closed span of its finite-dimensional positive $K$-eigenspaces $E_\nu$, with no kernel part. For $e\in E_\nu$, $e=\nu^{-1}Ke\in D(A^2)$ and $K(Ae)=A(Ke)=\nu Ae$, so $E_\nu$ is invariant under $A$. The restriction of $A$ there is a finite-dimensional self-adjoint operator; step 2.3 gives an orthonormal eigenbasis of that restriction. The union is a complete orthonormal eigenfamily of $A$. If $Ae=\mu e$, direct resolvent evaluation gives $Ke=(\mu^2+1)^{-1}e$. There are only finitely many such vectors with $|\mu|\le M$ for each fixed $M$, since [F5] gives only finitely many $K$-eigenvalues above $(M^2+1)^{-1}$ and each has finite multiplicity. The union is countable and infinite, hence can be indexed by $\mathbb N$ under the retained choice assumptions, and $|\mu_n|\to\infty$. [step 2.2, step 2.3, F1, F5, algebra]

4.1 [No additional spectrum] In the eigenbasis of step 3.1, self-adjointness gives $\langle Ax,e_n\rangle=\mu_n\langle x,e_n\rangle$ for $x\in D(A)$, so $\sum_n\mu_n^2|\langle x,e_n\rangle|^2=\|Ax\|^2$. Conversely, if this sum is finite, the finite sums $x_N$ and $Ax_N$ converge to $x$ and $y:=\sum_n\mu_n\langle x,e_n\rangle e_n$; passing to the limit in $\langle Ax_N,v\rangle=\langle x_N,Av\rangle$ for every $v\in D(A)$ puts $x$ in $D(A^*)=D(A)$ and gives $Ax=y$. Thus $A$ has exactly this maximal diagonal domain. Since $|\mu_n|\to\infty$, a complex $z$ outside $\{\mu_n\}$ has positive distance from that set. The diagonal map with entries $(\mu_n-z)^{-1}$ is bounded and maps $H$ into the displayed domain because $\sup_n|\mu_n/(\mu_n-z)|<\infty$; it is the two-sided inverse of $A-z$. Every $\mu_n$ is an eigenvalue. This proves $\sigma(A)=\{\mu_n\}$, and steps 1.2 and 1.3 give the scaled spectrum and common eigenfamily, completing (c). [step 1.2, step 1.3, step 3.1, F1, F3, algebra]

5.1 [Quadratic forms] If $\langle Ax,x\rangle\ge\gamma\|x\|^2$ for every $x\in D(A)$, then for $x\in D(cA)=D(A)$ the same inequality scaled by $c>0$ gives $\langle(cA)x,x\rangle=c\langle Ax,x\rangle\ge c\gamma\|x\|^2$; this is (e), and steps 2.1, 1.2, 2.3, 4.1 and 1.3 complete the proof. [step 1.3, F2, algebra] ∎

## Remarks

- **Where positivity is used.** $c>0$ is used in step 2.1 (boundedness of the pairing is preserved under multiplication by $c\ne0$, but the adjoint computation needs $c$ real, and the resolvent identity needs $c\ne0$), and in step 5.1 for the direction of the form inequality. For $c<0$ the operator $cA$ is still self-adjoint when $A$ is, but the form inequality reverses; no such statement is used here.
- **What is not asserted.** The lemma transfers self-adjointness, resolvents, spectra, eigenfamilies and form lower bounds along positive scaling of a fixed operator. It does not construct a self-adjoint operator from a symmetric one, does not assert any min-max formula, and does not identify any operator with a physical energy.
