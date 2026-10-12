---
id: lem-nrqm-potentials-positive-scaling-of-self-adjoint-operators
aliases: [nrqm-potentials-positive-scaling-of-self-adjoint-operators]
kind: lemma
domain: mathematics
title: "Positive scalar multiples of self-adjoint operators: domains, resolvents, spectra and eigenbases"
status: draft
origin: session
dependency_level: 3
deps: [def-adjoint-of-a-densely-defined-unbounded-operator, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-resolvent-and-spectrum-of-a-closed-unbounded-operator, def-compact-linear-operator, def-bounded-linear-operator, def-hilbert-space, lem-nrqm-intervals-compact-resolvent-eigenbasis, def-countable-choice, def-axiom-of-choice]
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
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 2.2 printed pages 58-67 (PDF pages 70-79): self-adjoint operators, adjoints and the spectrum under scaling"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "M. Reed and B. Simon, Methods of Modern Mathematical Physics I: Functional Analysis, revised edition, Section VIII.1 (closed, symmetric and self-adjoint operators; scaling and resolvents)"
      url: "https://www.sciencedirect.com/bookseries/methods-of-modern-mathematical-physics/vol/1/suppl/C"
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
[[def-compact-linear-operator]]), then every resolvent of $cA$ is compact,
there is a complete orthonormal family $(e_n)_{n\in\mathbb N}$ of eigenvectors
of $A$, the same family consists of eigenvectors of $cA$ with eigenvalues
$c\,\mu_n$, where $\mu_n$ is the eigenvalue of $e_n$ for $A$, and
$\sigma(cA)=\{c\,\mu_n:n\in\mathbb N\}$ with no other spectral points
([[lem-nrqm-intervals-compact-resolvent-eigenbasis]] clauses (b), (c)).

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

[F5] **Compact resolvent and eigenbasis.** If $A$ is self-adjoint on an infinite-dimensional $H$ and one resolvent $(A-z_0)^{-1}$ is compact, then $H$ has a complete orthonormal family $(e_n)_{n\in\mathbb N}$ of eigenvectors of $A$; with $\mu_n$ the eigenvalue of $e_n$, every eigenspace is finite dimensional, $|\mu_n|\to\infty$, and $\sigma(A)=\{\mu_n:n\in\mathbb N\}$ with $\sigma_{\mathrm{ess}}(A)=\varnothing$; moreover $(A-z)^{-1}$ is compact for every $z\in\rho(A)$ ([[lem-nrqm-intervals-compact-resolvent-eigenbasis]]).

## Proof

**Proof technique:** direct; verify symmetry and the adjoint domain of $cA$ by scaling the defining pairings, transfer resolvents by the identity $cA-z=c(A-z/c)$, and read off eigenpairs and quadratic forms.

**Given:** The data and hypotheses of the statement and [F1]-[F5].

1.1 [Symmetry] For $x,y\in D(A)=D(cA)$, [F2] gives $\langle(cA)x,y\rangle=c\langle Ax,y\rangle=c\langle x,Ay\rangle=\langle x,cAy\rangle=\langle x,(cA)y\rangle$; since $c$ is real, the scalar passes through the pairing in both slots, so $cA$ is symmetric. [given, F1, F2, algebra]

1.2 [Resolvent identity] Fix $z\in\mathbb C$ and write $B:=cA-z$ and $B':=A-z/c$ on the common domain $D(A)$. Then $B=cB'$ as operators, since $c(A-z/c)x=cAx-zx=(cA-z)x$ for every $x\in D(A)$. If $z/c\in\rho(A)$, then $B'$ is a bijection $D(A)\to H$ with bounded inverse, so $B=cB'$ is a bijection with inverse $c^{-1}B'^{-1}\in\mathcal B(H)$, which is the displayed identity; conversely if $z\in\rho(cA)$, then $c^{-1}B=B'$ is a bijection with bounded inverse $c\,B^{-1}$, so $z/c\in\rho(A)$. Therefore $\rho(cA)=c\,\rho(A)$ and, taking complements in $\mathbb C$, $\sigma(cA)=c\,\sigma(A)$; this is (b). [given, F3, algebra]

1.3 [Eigenpairs] Let $\lambda\in\mathbb R$ and $x\in H$, $x\ne0$. Since $D(cA)=D(A)$, $x\in D(A)$ if and only if $x\in D(cA)$. For such $x$, $Ax=\lambda x$ if and only if $cAx=c\lambda x$, because multiplication by $c\ne0$ is injective; hence the eigenspaces coincide, which is (d). [given, algebra]

2.1 [Adjoint domain] Let $y\in D((cA)^*)$. Then $x\mapsto\langle(cA)x,y\rangle=c\langle Ax,y\rangle$ is bounded on $D(A)$, and since $c>0$, $x\mapsto\langle Ax,y\rangle$ is bounded on $D(A)$ as well; hence $y\in D(A^*)=D(A)$ and $A^*y=Ay$. For every $x\in D(A)$ the defining identity of the adjoint and [F2] then give $\langle x,(cA)^*y\rangle=\langle(cA)x,y\rangle=c\langle Ax,y\rangle=c\langle x,Ay\rangle=\langle x,cAy\rangle$, and density of $D(A)$ in $H$ gives $(cA)^*y=cAy$. Hence $D((cA)^*)\subseteq D(cA)$; the reverse inclusion holds because $cA$ is symmetric, so $D((cA)^*)=D(cA)$ and $(cA)^*=cA$. This proves (a). [step 1.1, F1, F2, algebra]

2.2 [Compact resolvents and eigenbasis] Suppose the resolvent of $A$ at some, hence by [F5] at every, point of $\rho(A)$ is compact. For $z\in\rho(cA)$ step 1.2 gives $(cA-z)^{-1}=c^{-1}(A-z/c)^{-1}$, a nonzero scalar multiple of a compact operator, hence compact by [F4]; so every resolvent of $cA$ is compact. By [F5] applied to $A$ there is a complete orthonormal family $(e_n)_{n\in\mathbb N}$ of eigenvectors of $A$ with eigenvalues $\mu_n$, and $\sigma(A)=\{\mu_n\}$. Each $e_n\in D(A)=D(cA)$ satisfies $(cA)e_n=c\mu_ne_n$, so the same family is an orthonormal eigenfamily of $cA$; by [F5] applied to $cA$ (whose resolvent is compact) and by (b), $\sigma(cA)=c\,\sigma(A)=\{c\mu_n\}$ with no other spectral points. This proves (c). [step 1.2, F4, F5, algebra]

3.1 [Quadratic forms] If $\langle Ax,x\rangle\ge\gamma\|x\|^2$ for every $x\in D(A)$, then for $x\in D(cA)=D(A)$ the same inequality scaled by $c>0$ gives $\langle(cA)x,x\rangle=c\langle Ax,x\rangle\ge c\gamma\|x\|^2$; this is (e), and steps 2.1, 1.2, 2.2, 1.3 complete the proof. [step 1.3, F2, algebra] ∎

## Remarks

- **Where positivity is used.** $c>0$ is used in step 2.1 (boundedness of the pairing is preserved under multiplication by $c\ne0$, but the adjoint computation needs $c$ real, and the resolvent identity needs $c\ne0$), and in step 3.1 for the direction of the form inequality. For $c<0$ the operator $cA$ is still self-adjoint when $A$ is, but the form inequality reverses; no such statement is used here.
- **What is not asserted.** The lemma transfers self-adjointness, resolvents, spectra, eigenfamilies and form lower bounds along positive scaling of a fixed operator. It does not construct a self-adjoint operator from a symmetric one, does not assert any min-max formula, and does not identify any operator with a physical energy.
