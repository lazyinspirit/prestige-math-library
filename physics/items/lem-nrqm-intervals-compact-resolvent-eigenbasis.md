---
id: lem-nrqm-intervals-compact-resolvent-eigenbasis
aliases: [nrqm-intervals-and-contacts-compact-resolvent-eigenbasis]
kind: lemma
domain: mathematics
title: "Self-adjoint operators with compact resolvent: eigenbasis and discrete spectrum"
status: published
origin: pipeline
dependency_level: 2
deps: [lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma, thm-nrqm-oscillator-diagonal-spectrum, thm-spectral-theorem-for-compact-self-adjoint-operators, cor-orthonormal-eigenbasis-for-a-compact-self-adjoint-operator, lem-compositions-with-a-compact-operator-are-compact, thm-countable-union-of-countable, cor-every-spanning-set-contains-a-basis, cor-finite-dimensional-subspaces-are-closed, def-dimension, def-linear-basis, def-countable, def-discrete-and-essential-spectrum-of-a-self-adjoint-operator, def-compact-linear-operator, def-resolvent-and-spectrum-of-a-closed-unbounded-operator, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-unbounded-linear-operator-domain-and-graph, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-hilbert-space, def-bounded-linear-operator, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma: mathematical-premise
  thm-nrqm-oscillator-diagonal-spectrum: mathematical-premise
  thm-spectral-theorem-for-compact-self-adjoint-operators: mathematical-premise
  cor-orthonormal-eigenbasis-for-a-compact-self-adjoint-operator: mathematical-premise
  lem-compositions-with-a-compact-operator-are-compact: mathematical-premise
  thm-countable-union-of-countable: mathematical-premise
  cor-every-spanning-set-contains-a-basis: mathematical-premise
  cor-finite-dimensional-subspaces-are-closed: mathematical-premise
  def-dimension: mathematical-premise
  def-linear-basis: mathematical-premise
  def-countable: mathematical-premise
  def-discrete-and-essential-spectrum-of-a-self-adjoint-operator: mathematical-premise
  def-compact-linear-operator: mathematical-premise
  def-resolvent-and-spectrum-of-a-closed-unbounded-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-unbounded-linear-operator-domain-and-graph: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 6.2, Theorem 6.7 pp. 137-138 (compact spectral structure; the unbounded compact-resolvent deduction is proved locally)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext 2011), Section 6.4 pp. 165-169 and Section 8.6 pp. 231-233 (compact self-adjoint operators and spectral decomposition)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
---

## Statement

Assume the Axiom of Choice and Countable Choice ([[def-axiom-of-choice]],
[[def-countable-choice]]). Let $A$ be a self-adjoint operator on an
infinite-dimensional complex Hilbert space $H$
([[def-symmetric-self-adjoint-and-essentially-self-adjoint]],
[[def-hilbert-space]], [[def-dimension]]), let $c\in\mathbb R$ lie in the
resolvent set of $A$, and assume that the resolvent
$R_c:=(A-c)^{-1}\in\mathcal B(H)$ is compact
([[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]],
[[def-compact-linear-operator]]). Then:

(a) $H$ has a complete orthonormal family $(e_n)_{n\in\mathbb N}$ of
eigenvectors of $A$; writing $\mu_n$ for the eigenvalue of $e_n$, one has
$|\mu_n|\to\infty$ (each eigenvalue repeated according to its finite
multiplicity), and every eigenspace of $A$ is finite dimensional;

(b) $\sigma(A)$ consists exactly of the eigenvalues $\mu_n$ of $A$ and has no
other points, and the essential spectrum is empty:
$\sigma_{\mathrm{ess}}(A)=\varnothing$
([[def-discrete-and-essential-spectrum-of-a-self-adjoint-operator]]); thus
every spectral point of $A$ is an isolated eigenvalue of finite
multiplicity;

(c) for every $z$ in the resolvent set of $A$ the resolvent $(A-z)^{-1}$ is
compact.

## Facts & Assumptions

**Given:** a self-adjoint operator $A$ on a complex Hilbert space $H$; $c\in\rho(A)$ with $R_c=(A-c)^{-1}$ compact.

[F1] $A$ has a spectral PVM; for $c\in\rho(A)$ the inverse $R_c$ is bounded with $\operatorname{ran}R_c=D(A)$, $(A-c)R_c=I_H$ and $R_c(A-c)=I_{D(A)}$ ([[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]], [[def-discrete-and-essential-spectrum-of-a-self-adjoint-operator]]); below $H\ne\{0\}$.

[F2] Compact self-adjoint operators: if $T\in\mathcal B(H)$ is compact and self-adjoint, then its nonzero eigenvalues are real, each nonzero eigenspace is finite dimensional, for every $\varepsilon>0$ only finitely many nonzero eigenvalues satisfy $|\lambda|\ge\varepsilon$, and the union of orthonormal bases of the nonzero eigenspaces with a Hilbert basis of $\ker T$ is a Hilbert basis of $H$ ([[thm-spectral-theorem-for-compact-self-adjoint-operators]], including claim 1, [[cor-orthonormal-eigenbasis-for-a-compact-self-adjoint-operator]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]). If $\ker T=\{0\}$, the union of orthonormal bases of the nonzero eigenspaces is already a Hilbert basis.

[F3] Diagonal operators: for a complete orthonormal family $(w_n)$ and arbitrary real numbers $(\nu_n)$ (including zero), the operator $Tx=\sum_n\nu_n\langle x,w_n\rangle w_n$ with domain $\{x:\sum_n\nu_n^2|\langle x,w_n\rangle|^2<\infty\}$ is self-adjoint with spectrum the closure of $\{\nu_n\}$, and $Tw_n=\nu_nw_n$ ([[lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma]], [[thm-nrqm-oscillator-diagonal-spectrum]]).

[F4] Products and composites with compact operators are compact: $\mathcal K(H)\cdot\mathcal B(H)\subseteq\mathcal K(H)$ and $\mathcal B(H)\cdot\mathcal K(H)\subseteq\mathcal K(H)$ ([[lem-compositions-with-a-compact-operator-are-compact]], [[def-compact-linear-operator]]).

## Proof

1.1 [Spectral decomposition of $R_c$] The resolvent $R_c$ is compact by hypothesis and is self-adjoint: for $x,y\in H$, put $u=R_cx$ and $v=R_cy$. Then $u,v\in D(A)$ and $y=(A-c)v$, $x=(A-c)u$ by [F1], so self-adjointness of $A-c$ gives $\langle R_cx,y\rangle=\langle u,(A-c)v\rangle=\langle(A-c)u,v\rangle=\langle x,R_cy\rangle$. It is injective: if $R_cx=0$, then $x=(A-c)R_cx=0$ by [F1]. By [F2], with $\ker R_c=\{0\}$, the nonzero eigenspaces of $R_c$ are finite dimensional with real nonzero eigenvalues, and the union of orthonormal bases of those eigenspaces is a complete orthonormal family $(e_i)_{i\in I}$ of eigenvectors of $R_c$ with eigenvalues $\nu_i\ne0$. The eigenvalue set is countable, being the union over $k\ge1$ of the finite sets $\{\nu:|\nu|\ge1/k\}$ ([[thm-countable-union-of-countable]], [[def-countable]]), so $I$, a union of finitely many bases over a countable set of eigenvalues, is finite or countably infinite; it is infinite because a finite complete orthonormal family would be a finite spanning set of $H$ (its span is finite dimensional, hence closed, and equals its closed span, [[cor-finite-dimensional-subspaces-are-closed]]), so that $H$ would have a finite basis and be finite dimensional ([[cor-every-spanning-set-contains-a-basis]], [[def-linear-basis]], [[def-dimension]]), contrary to hypothesis. Hence $(e_i)_{i\in I}$ can be indexed as $(e_n)_{n\in\mathbb N}$, and then $\nu_n\to0$: for every $\varepsilon>0$ only finitely many indices $n$ satisfy $|\nu_n|\ge\varepsilon$ by [F2]. [F1, F2]

2.1 [From $R_c$-eigenvectors to $A$-eigenvectors] For each $n$, $e_n=\nu_n^{-1}R_ce_n$ lies in $\operatorname{ran}R_c=D(A)$ by [F1], and $(A-c)e_n=\nu_n^{-1}(A-c)R_ce_n=\nu_n^{-1}e_n,$ so $Ae_n=(c+\nu_n^{-1})e_n$. Put $\mu_n:=c+\nu_n^{-1}$. Since $|\nu_n|\to0$ and $\nu_n\ne0$, $|\mu_n|\ge|\nu_n|^{-1}-|c|\to\infty$. The map $\lambda\mapsto c+\lambda^{-1}$ is injective on $\mathbb R\setminus\{0\}$, so distinct $\nu_n$ give distinct $\mu_n$, and every eigenvector $x$ of $A$ with eigenvalue $\mu\ne c$ satisfies $R_cx=(\mu-c)^{-1}x$, so $x$ is an $R_c$-eigenvector; conversely every $R_c$-eigenvector is an $A$-eigenvector with eigenvalue $c+\nu^{-1}\ne c$. Hence the eigenvalue set of $A$ is $\{\mu_n\}$ with the same eigenspaces as those of $R_c$, the associated eigenvalues are exactly $\mu_n$, and each eigenspace is finite dimensional; in particular the eigenspace of $A$ at $\mu_n$ equals the $R_c$-eigenspace at $\nu_n$. [step 1.1, F1, algebra]

3.1 [$A$ is the diagonal operator in the basis $(e_n)$] We claim $D(A)=\{x\in H:\sum_n\mu_n^2|\langle x,e_n\rangle|^2<\infty\}$ and $Ax=\sum_n\mu_n\langle x,e_n\rangle e_n$ for $x$ in this set. First let $x\in D(A)$. Then $Ax\in H$ and, by self-adjointness of $A$ and step 2.1, $\langle Ax,e_n\rangle=\langle x,Ae_n\rangle=\mu_n\langle x,e_n\rangle$ for every $n$; since $(e_n)$ is a complete orthonormal family, Parseval gives $\sum_n\mu_n^2|\langle x,e_n\rangle|^2=\|Ax\|^2<\infty$ and $Ax=\sum_n\langle Ax,e_n\rangle e_n=\sum_n\mu_n\langle x,e_n\rangle e_n$. Conversely, let $x\in H$ satisfy $\sum_n\mu_n^2|\langle x,e_n\rangle|^2<\infty$ and put $y:=\sum_n\mu_n\langle x,e_n\rangle e_n\in H$; the series converges because the coefficient sequence is square summable. We claim $\langle x,A\varphi\rangle=\langle y,\varphi\rangle$ for every $\varphi\in D(A)$: the identity holds for every $\varphi=e_m$, because $\langle x,Ae_m\rangle=\mu_m\langle x,e_m\rangle=\langle y,e_m\rangle$ by step 2.1 and the definition of $y$; moreover the span $Z$ of the $e_m$ is contained in $D(A)$, and it is graph-norm dense in $D(A)$: for $x'\in D(A)$ the truncations $x'_N=\sum_{n\le N}\langle x',e_n\rangle e_n$ satisfy $x'_N\to x'$ and $Ax'_N=\sum_{n\le N}\mu_n\langle x',e_n\rangle e_n\to Ax'$ by the first part of this step. Both sides of the claimed identity are continuous on $(D(A),\|\cdot\|_A)$, since $|\langle x,A\varphi\rangle|\le\|x\|\,\|\varphi\|_A$ and $|\langle y,\varphi\rangle|\le\|y\|\,\|\varphi\|_A$ ([[def-unbounded-linear-operator-domain-and-graph]]); hence the identity extends from the dense subspace $Z$ to all of $D(A)$. Thus the functional $\varphi\mapsto\langle x,A\varphi\rangle$ equals the bounded functional $\varphi\mapsto\langle y,\varphi\rangle$ on $D(A)$, so $x\in D(A^*)=D(A)$ with $A^*x=y$, and $Ax=A^*x=y$. This proves the claim. [step 2.1, F1, F3, algebra]

4.1 [Spectrum] By step 3.1, $A$ is unitarily equivalent to the diagonal operator with entries $\mu_n$, so [F3] gives $\sigma(A)=\overline{\{\mu_n:n\in\mathbb N\}}=\{\mu_n:n\in\mathbb N\}$, the closure being the set itself because $|\mu_n|\to\infty$ (a sequence tending to infinity has no finite accumulation point). Together with step 2.1 this is (a) and the first half of (b): $H$ has a complete orthonormal family of eigenvectors of $A$ with $|\mu_n|\to\infty$, and the spectrum is exactly $\{\mu_n\}$. [step 2.1, step 3.1, F3]

5.1 [Essential spectrum] Every $\mu_n$ is an isolated point of $\sigma(A)=\{\mu_n\}$ (the set is discrete in $\mathbb R$ because $|\mu_n|\to\infty$), and its eigenspace is finite dimensional by step 2.1. Hence every $\mu_n$ belongs to the discrete spectrum in the sense of [[def-discrete-and-essential-spectrum-of-a-self-adjoint-operator]], and $\sigma_{\mathrm{ess}}(A)=\sigma(A)\setminus\sigma_{\mathrm d}(A)=\varnothing$. This completes (b). [step 2.1, step 4.1]

6.1 [All resolvents are compact] Let $z\in\rho(A)$ and let $R_z:=(A-z)^{-1}$. Subtracting the inverse identities for $A-z$ and $A-c$ gives $R_z-R_c=(z-c)R_cR_z$, hence $R_z=R_c[I+(z-c)R_z]$. The factor $I+(z-c)R_z$ is bounded, so [F4] makes $R_z$ compact as a product with the compact $R_c$. This is (c). [F1, F4, algebra] ∎
