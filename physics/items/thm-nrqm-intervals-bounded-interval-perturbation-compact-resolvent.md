---
id: thm-nrqm-intervals-bounded-interval-perturbation-compact-resolvent
aliases: [nrqm-intervals-and-contacts-bounded-interval-perturbation-compact-resolvent]
kind: theorem
domain: mathematics
title: "Bounded perturbations of the interval Dirichlet Laplacian"
status: published
origin: pipeline
dependency_level: 5
deps: [def-nrqm-intervals-hilbert-sobolev-spaces, lem-nrqm-intervals-integration-by-parts, thm-nrqm-intervals-dirichlet-diagonal-domain-identification, lem-nrqm-intervals-compact-resolvent-eigenbasis, cor-independent-set-is-no-larger-than-a-finite-spanning-set, def-dimension, def-linear-basis, thm-kato-rellich, def-relative-boundedness-with-respect-to-an-operator, lem-finite-rank-operators-are-compact, thm-norm-limit-of-compact-operators-is-compact, lem-compositions-with-a-compact-operator-are-compact, thm-min-max-principle-below-essential-spectrum, lem-spectral-form-domain-and-core-of-a-semibounded-operator, def-discrete-and-essential-spectrum-of-a-self-adjoint-operator, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-hilbert-space, thm-parseval-equivalences-for-a-complete-orthonormal-family, def-compact-linear-operator, def-resolvent-and-spectrum-of-a-closed-unbounded-operator, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-intervals-hilbert-sobolev-spaces: mathematical-premise
  lem-nrqm-intervals-integration-by-parts: mathematical-premise
  thm-nrqm-intervals-dirichlet-diagonal-domain-identification: mathematical-premise
  lem-nrqm-intervals-compact-resolvent-eigenbasis: mathematical-premise
  cor-independent-set-is-no-larger-than-a-finite-spanning-set: mathematical-premise
  def-dimension: mathematical-premise
  def-linear-basis: mathematical-premise
  thm-kato-rellich: mathematical-premise
  def-relative-boundedness-with-respect-to-an-operator: mathematical-premise
  lem-finite-rank-operators-are-compact: mathematical-premise
  thm-norm-limit-of-compact-operators-is-compact: mathematical-premise
  lem-compositions-with-a-compact-operator-are-compact: mathematical-premise
  thm-min-max-principle-below-essential-spectrum: mathematical-premise
  lem-spectral-form-domain-and-core-of-a-semibounded-operator: mathematical-premise
  def-discrete-and-essential-spectrum-of-a-self-adjoint-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  def-hilbert-space: mathematical-premise
  thm-parseval-equivalences-for-a-complete-orthonormal-family: mathematical-premise
  def-compact-linear-operator: mathematical-premise
  def-resolvent-and-spectrum-of-a-closed-unbounded-operator: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Sections 6.1 and 6.2 (bounded perturbation and compact operator background) and Section 9.2, Theorem 9.10 p. 192 (separated discrete spectrum); exact min-max suppliers and the interval proof are given locally"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext 2011), Section 6.4 pp. 165-169 and Section 8.6 pp. 231-233 (compact self-adjoint operators and Dirichlet eigenvalues)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
---

## Statement

Assume the Axiom of Choice and Countable Choice ([[def-axiom-of-choice]],
[[def-countable-choice]]). Let $0<L<\infty$, let $A_D$ be the Dirichlet
Laplacian of
[[thm-nrqm-intervals-dirichlet-diagonal-domain-identification]] with
$D(A_D)=\{u\in H^2(0,L):u^*(0)=u^*(L)=0\}$ and $A_Du=-D^2u$, and let
$V\in C([0,L];\mathbb R)$ with $\|V\|_\infty=\max_{[0,L]}|V|$. Let
$A:=A_D+M_V$ with domain $D(A):=D(A_D)$, where $(M_Vu)=Vu$ is multiplication
by $V$. Then:

(a) $M_V$ is bounded self-adjoint with $\|M_V\|=\|V\|_\infty$, $A$ is
self-adjoint on $D(A_D)$, and $Au=-D^2u+Vu$ for $u\in D(A_D)$;

(b) $A$ has compact resolvent: $(A-z)^{-1}$ is compact for every
$z\in\rho(A)$; consequently $A$ has a complete orthonormal family of
eigenvectors, all eigenspaces are finite dimensional, the eigenvalues
$E_1\le E_2\le\cdots$ (listed with multiplicity) satisfy $E_n\to\infty$ and
$\sigma_{\mathrm{ess}}(A)=\varnothing$;

(c) with $\lambda_n=(n\pi/L)^2$ and $E_n(A_D)=\lambda_n$, the min-max
eigenvalues satisfy
$\bigl|E_n-\lambda_n\bigr|\le\|V\|_\infty\qquad(n\ge1).$

## Facts & Assumptions

**Given:** $L>0$; real continuous $V$; the Dirichlet Laplacian $A_D$ of [[thm-nrqm-intervals-dirichlet-diagonal-domain-identification]] with spectrum $\{\lambda_n:n\ge1\}$, $\lambda_n=(n\pi/L)^2$, eigenbasis $(e_n)$, and the form identity $\langle A_Du,u\rangle=\|Du\|_{L^2}^2$ for $u\in D(A_D)$.

[F1] Multiplication by the bounded measurable function $V$ is a bounded self-adjoint operator on $L^2(0,L)$ with norm $\|V\|_\infty$, and $V$ is $A_D$-bounded with relative bound $0$: $\|M_Vu\|=\|Vu\|\le\|V\|_\infty\|u\|$, so $D(A_D)\subseteq D(M_V)=L^2$ ([[def-relative-boundedness-with-respect-to-an-operator]]).

[F2] Kato-Rellich ([[thm-kato-rellich]]): if $A_D$ is self-adjoint and $B$ is symmetric with $D(A_D)\subseteq D(B)$ and $A_D$-bound less than one, then $A_D+B$ with domain $D(A_D)$ is self-adjoint.

[F3] Finite-rank operators are compact, and a norm limit of compact operators is compact ([[lem-finite-rank-operators-are-compact]], [[thm-norm-limit-of-compact-operators-is-compact]], [[def-compact-linear-operator]]).

[F4] Compact-resolvent structure ([[lem-nrqm-intervals-compact-resolvent-eigenbasis]]): if a self-adjoint $A$ on an infinite-dimensional Hilbert space has $c\in\rho(A)$ with $(A-c)^{-1}$ compact, then $A$ has a complete orthonormal family $(\psi_n)_{n\ge1}$ of eigenvectors with eigenvalues $E_n$ satisfying $|E_n|\to\infty$, all eigenspaces are finite dimensional, $\sigma(A)$ is exactly the eigenvalue set, $\sigma_{\mathrm{ess}}(A)=\varnothing$, and every resolvent is compact.

[F5] Min-max principle below the essential spectrum ([[thm-min-max-principle-below-essential-spectrum]], [[lem-spectral-form-domain-and-core-of-a-semibounded-operator]]): for a self-adjoint operator bounded below with $\Lambda=\inf\sigma_{\mathrm{ess}}=+\infty$, the eigenvalues $E_1\le E_2\le\cdots$, listed with multiplicity, satisfy $E_n=\inf_{L'\subseteq Q(A),\dim L'=n}\sup_{x\in L',\|x\|=1}q_A[x]=\inf_{L'\subseteq D(A),\dim L'=n}\sup_{x\in L',\|x\|=1}\langle Ax,x\rangle$, and $q_A[x]=\langle Ax,x\rangle$ for $x\in D(A)$.

## Proof

1.1 [Self-adjointness] By [F1], $M_V$ is bounded self-adjoint with norm $\|V\|_\infty$ and is $A_D$-bounded with relative bound $0$ (take $a=0$, $b=\|V\|_\infty$ in [[def-relative-boundedness-with-respect-to-an-operator]]). Since $A_D$ is self-adjoint on $D(A_D)$, [F2] makes $A=A_D+M_V$ self-adjoint on $D(A_D)$; and $Au=A_Du+Vu=-D^2u+Vu$ by [[thm-nrqm-intervals-dirichlet-diagonal-domain-identification]]. [F1, F2, given]

1.2 [The free resolvent is a norm limit of finite-rank operators] Let $c<\lambda_1$ be real and let $R_D:=(A_D-c)^{-1}$, the diagonal operator with respect to the orthonormal basis $(e_n)$ of [[thm-nrqm-intervals-dirichlet-diagonal-domain-identification]]: $R_De_n=(\lambda_n-c)^{-1}e_n$, from $A_De_n=\lambda_ne_n$. For $N\ge1$ let $R_D^{(N)}$ be the diagonal operator with the same eigenvectors but coefficients $(\lambda_n-c)^{-1}$ for $n\le N$ and $0$ for $n>N$; it is finite rank. For $x=\sum_nc_ne_n\in L^2$ one has $(R_D-R_D^{(N)})x=\sum_{n>N}(\lambda_n-c)^{-1}c_ne_n$, so $\|(R_D-R_D^{(N)})x\|\le(\sup_{n>N}(\lambda_n-c)^{-1})\|x\|$, and the norm identity $\|R_D-R_D^{(N)}\|=\sup_{n>N}(\lambda_n-c)^{-1}$ follows by testing on unit eigenvectors; this supremum tends to $0$ because $\lambda_n=(n\pi/L)^2\to\infty$. Hence $R_D$ is a norm limit of finite-rank operators, and by [F3] it is compact. [given, F3, algebra]

2.1 [Compactness of the perturbed resolvent] Choose $c:=\lambda_1-\|V\|_\infty-1<\lambda_1$, so that $d:=\operatorname{dist}(c,\sigma(A_D))=\lambda_1-c=\|V\|_\infty+1$ and $\|R_DM_V\|\le\|R_D\|\,\|V\|_\infty\le\|V\|_\infty/(\|V\|_\infty+1)<1$. Then $I+R_DM_V$ is boundedly invertible by the Neumann series, and on $D(A_D)$ $(A-c)=(A_D-c)(I+R_DM_V),$ because $R_D(A_D-c)=I$ on $D(A_D)$. Hence $(A-c)^{-1}=(I+R_DM_V)^{-1}R_D,$ a product of a bounded operator with the compact operator $R_D$, hence compact ([[lem-compositions-with-a-compact-operator-are-compact]]); the inverse exists because $A$ is self-adjoint and $c<\lambda_1-\|V\|_\infty\le\inf\sigma(A)$: indeed $\langle Au,u\rangle=\langle A_Du,u\rangle+\langle Vu,u\rangle \ge\lambda_1\|u\|^2-\|V\|_\infty\|u\|^2$, so $A\ge(\lambda_1-\|V\|_\infty)I$ and $c\in\rho(A)$. [step 1.1, step 1.2, given, algebra]

3.1 [Eigenbasis and discreteness] The space $L^2(0,L;\mathbb C)$ is infinite dimensional: the vectors $e_n$, $n\ge1$, of [[thm-nrqm-intervals-dirichlet-diagonal-domain-identification]] form an infinite orthonormal family ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]), while a space with a finite spanning set has no linearly independent subset equinumerous with $\mathbb N$, and a finite-dimensional space has a finite basis, hence a finite spanning set ([[cor-independent-set-is-no-larger-than-a-finite-spanning-set]], [[def-dimension]], [[def-linear-basis]]). Step 2.1 supplies $c\in\rho(A)$ with compact resolvent, so [F4] gives a complete orthonormal eigenfamily $(\psi_n)_{n\ge1}$ of eigenvectors with eigenvalues $E_n$ satisfying $|E_n|\to\infty$, finite dimensional eigenspaces, $\sigma(A)$ equal to the eigenvalue set and $\sigma_{\mathrm{ess}}(A)=\varnothing$; since $A\ge(\lambda_1-\|V\|_\infty)I$ the eigenvalues are bounded below, so $E_n\to+\infty$ along any enumeration, and the eigenvalues may be listed with multiplicity in increasing order. This is (b). [step 2.1, F4]

4.1 [Min-max comparison] Both $A$ and $A_D$ are bounded below and have empty essential spectrum by step 3.1 (for $A_D$: $\sigma(A_D)=\{\lambda_n\}$, all isolated eigenvalues of finite multiplicity by [[thm-nrqm-intervals-dirichlet-diagonal-domain-identification]] and the definition of the discrete spectrum, so $\sigma_{\mathrm{ess}}(A_D)=\varnothing$). By [F5], for $n\ge1$, $E_n=\inf_{L'\subseteq D(A),\dim L'=n}\sup_{\substack{x\in L'\\\|x\|=1}} \langle Ax,x\rangle,\qquad \lambda_n=\inf_{L'\subseteq D(A_D),\dim L'=n}\sup_{\substack{x\in L'\\\|x\|=1}} \langle A_Dx,x\rangle .$ Since $D(A)=D(A_D)$, and $|\langle M_Vx,x\rangle|\le\|V\|_\infty\|x\|^2$, every trial space gives $\langle A_Dx,x\rangle-\|V\|_\infty\le\langle Ax,x\rangle \le\langle A_Dx,x\rangle+\|V\|_\infty$ for $\|x\|=1$; taking suprema over then infima over the same family of $n$-dimensional trial spaces yields $\lambda_n-\|V\|_\infty\le E_n\le\lambda_n+\|V\|_\infty,$ which is (c). [step 3.1, F5, given, algebra] ∎
