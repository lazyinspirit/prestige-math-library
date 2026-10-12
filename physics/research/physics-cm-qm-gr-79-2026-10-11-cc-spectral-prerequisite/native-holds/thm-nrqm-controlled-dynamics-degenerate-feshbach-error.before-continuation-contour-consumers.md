---
id: thm-nrqm-controlled-dynamics-degenerate-feshbach-error
aliases: [nrqm-controlled-dynamics-degenerate-feshbach-error]
kind: theorem
domain: mathematics
title: "Degenerate Feshbach error"
status: draft
origin: pipeline
dependency_level: 1
deps: [thm-nrqm-controlled-dynamics-contour-perturbation-projection, thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness, thm-spectral-theorem-for-unbounded-self-adjoint-operators, def-discrete-and-essential-spectrum-of-a-self-adjoint-operator, def-bounded-linear-operator, def-operator-norm, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-hilbert-space, def-countable-choice]
dependency_roles:
  thm-nrqm-controlled-dynamics-contour-perturbation-projection: mathematical-premise
  thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  def-discrete-and-essential-spectrum-of-a-self-adjoint-operator: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "T. Kato, Perturbation Theory for Linear Operators, Chapter II.5 (splitting of a degenerate eigenvalue; Feshbach reduction)"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 6.6 pp. 153-159 (analytic perturbation and resolvent identities)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H_0$ be
self-adjoint on a complex Hilbert space $H$ ([[def-hilbert-space]]), let
$E\in\mathbb R$ be an isolated eigenvalue of finite multiplicity $r\ge1$ with
$\operatorname{dist}(E,\sigma(H_0)\setminus\{E\})\ge g>0$
([[def-discrete-and-essential-spectrum-of-a-self-adjoint-operator]]), let
$P:=E_{H_0}(\{E\})$, $Q:=I-P$, and let $V=V^*\in\mathcal B(H)$ with
$v=\|V\|>0$ and $|\lambda|v<g/4$ ([[def-bounded-linear-operator]],
[[def-operator-norm]]). Put $H_\lambda:=H_0+\lambda V$, self-adjoint on
$D(H_0)$. Then:

(a) *Resolvent reduction.* For every real $z$ with
$|z-E|+|\lambda|v\le g/2$ the operator $Q(H_\lambda-z)Q$ on $QD(H_0)$ has a
bounded inverse $B(z)$ with $\|B(z)\|\le4/g$.

(b) *Exact finite matrix equation.* If $z$ is an eigenvalue of $H_\lambda$ with
eigenvector $\psi\ne0$ and $|z-E|+|\lambda|v\le g/2$, then with $\varphi:=P\psi$
and $\chi:=Q\psi$ one has $\varphi\ne0$, $\chi=-\lambda B(z)QVP\varphi$, and
$$\bigl[EP+\lambda PVP-\lambda^2PVQB(z)QVP\bigr]\varphi=z\,\varphi.$$

(c) *Degenerate first-order error.* Every such eigenvalue satisfies
$$\operatorname{dist}\bigl(z,\;E+\lambda\operatorname{spec}(PVP)\bigr)\le\frac{4\lambda^2v^2}{g},$$
where $\operatorname{spec}(PVP)$ denotes the spectrum of the Hermitian
finite-rank operator $PVP$ on $PH$. No claim is made that an eigenvector of
$PVP$ is an exact eigenvector of $V$.

## Facts & Assumptions

**Given:** the self-adjoint $H_0$, the isolated eigenvalue $E$ with gap $g$ and
multiplicity $r$, $P,Q$, the bounded self-adjoint $V$ with $\|V\|=v$, $\lambda$
with $|\lambda|v<g/4$, and $z$ as in the statement.

[F1] $P$ is the orthogonal projection onto $\ker(H_0-E)$, of rank $r<\infty$; $[H_0,P]=0$, $PH\subseteq D(H_0)$, and $\|Q(H_0-z)^{-1}Q\|\le2/g$ for $|z-E|\le g/2$ ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]], [[def-discrete-and-essential-spectrum-of-a-self-adjoint-operator]], [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]).

[F2] Neumann series: $Q(H_\lambda-z)Q=Q(H_0-z)Q\bigl[I+\lambda QVQ(H_0-z)^{-1}Q\bigr]$ on $QD(H_0)$, and $\|\lambda QVQ(H_0-z)^{-1}Q\|\le|\lambda|v\cdot2/g\le1/2$ by [F1] and $|\lambda|v\le g/4$; hence $Q(H_\lambda-z)Q$ is invertible with inverse $B(z)$ of norm at most $\frac{2/g}{1-1/2}=\frac4g$ ([[def-operator-norm]], [[def-bounded-linear-operator]]).

[F3] Finite spectral theorem: a Hermitian finite-rank operator on the finite-dimensional space $PH$ has real eigenvalues and an orthonormal eigenbasis; Weyl's inequality bounds eigenvalue perturbations by the norm of a Hermitian difference ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]], [[def-hilbert-space]]).

## Proof

1.1 [Splitting the eigenvalue equation] Write $H_\lambda\psi=z\psi$ with $\psi=\varphi+\chi$, $\varphi=P\psi$, $\chi=Q\psi$. Applying $Q$ and using $QH_\lambda Q=Q(H_0+\lambda V)Q$ together with $Qz=zQ$ gives $Q(H_\lambda-z)Q\chi=-\lambda QVP\varphi$, hence $\chi=-\lambda B(z)QVP\varphi$ by [F2]. Applying $P$ gives $EP\varphi+\lambda PVP\varphi+\lambda PVQ\chi=z\varphi$, and substituting $\chi$ yields the displayed equation. If $\varphi=0$ then $\psi=\chi\in QD(H_0)$ and the invertibility of $Q(H_\lambda-z)Q$ forces $\chi=0$, contrary to $\psi\ne0$; hence $\varphi\ne0$. [F1, F2, algebra]

2.1 [Perturbation of the finite matrix] The operator $\widetilde H:=EP+\lambda PVP-\lambda^2PVQB(z)QVP$ acts on the finite-dimensional space $PH$ and is Hermitian; its correction term has norm at most $|\lambda|^2v^2\|B(z)\|\le4\lambda^2v^2/g$. By [F3] every eigenvalue of $\widetilde H$ lies within $4\lambda^2v^2/g$ of an eigenvalue $E+\lambda\mu_j$ of $EP+\lambda PVP$, where the $\mu_j$ are the eigenvalues of the Hermitian operator $PVP$ on $PH$. [step 1.1, F2, F3, algebra]

3.1 [Conclusion] By step 1.1 every eigenvalue $z$ of $H_\lambda$ with $|z-E|+|\lambda|v\le g/2$ is an eigenvalue of $\widetilde H$; step 2.1 places it within $4\lambda^2v^2/g$ of $E+\lambda\operatorname{spec}(PVP)$. This proves (a), (b) and (c). [step 1.1, step 2.1, algebra] ∎
