---
id: thm-nrqm-controlled-dynamics-simple-level-reduced-resolvent-coefficients
aliases: [nrqm-controlled-dynamics-simple-level-reduced-resolvent-coefficients]
kind: theorem
domain: mathematics
title: "Simple-level reduced-resolvent coefficients"
status: draft
origin: pipeline
dependency_level: 1
deps: [thm-nrqm-controlled-dynamics-contour-perturbation-projection, thm-spectral-theorem-for-unbounded-self-adjoint-operators, thm-unbounded-borel-functional-calculus, def-projection-valued-measure, def-resolvent-and-spectrum-of-a-closed-unbounded-operator, def-bounded-linear-operator, def-operator-norm, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-hilbert-space, def-countable-choice]
dependency_roles:
  thm-nrqm-controlled-dynamics-contour-perturbation-projection: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  thm-unbounded-borel-functional-calculus: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-resolvent-and-spectrum-of-a-closed-unbounded-operator: mathematical-premise
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
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 6.6 pp. 153-159 (analytic perturbation series for a simple eigenvalue)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), Non-Degenerate Perturbation Theory pp. 155-156 (first- and second-order energy shifts)"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]) and adopt the
hypotheses of [[thm-nrqm-controlled-dynamics-contour-perturbation-projection]]:
$H_0$ self-adjoint with isolated simple eigenvalue $E$, gap $g>0$, normalized
eigenvector $\psi_0$ with $P_0\psi_0=\psi_0$, $V=V^*\in\mathcal B(H)$ with
$v=\|V\|$, and $q=2|\lambda|v/g<1/2$. Write
$Q=I-P_0$, $S:=Q(H_0-E)^{-1}Q$ on $H$ (so that $S$ is bounded with
$\|S\|\le1/g$), and let $P_\lambda$, $E_\lambda$ be the perturbed projection and
its unique eigenvalue inside the contour, as in
[[thm-nrqm-controlled-dynamics-contour-perturbation-projection]]. Define the
normalized eigenvector
$$\psi(\lambda):=\frac{P_\lambda\psi_0}{(P_\lambda\psi_0,\psi_0)}.$$
Then $\psi(\lambda)$ is analytic in $\lambda$ with $\|\psi(\lambda)\|\le3$ for
$q<1/2$, $\langle\psi(\lambda),\psi_0\rangle=1$, and $(H_0+\lambda V)\psi(\lambda)=E_\lambda\psi(\lambda)$.
Moreover the first and second coefficients are
$$E'(0)=\langle V\psi_0,\psi_0\rangle,\qquad \psi'(0)=-SV\psi_0,\qquad E''(0)=-2\langle VSV\psi_0,\psi_0\rangle,$$
where all pairings are finite and the second derivative involves the whole
complementary spectral subspace, not only bound states. Equivalently
$E_\lambda=E+\lambda\langle V\psi_0,\psi_0\rangle-\lambda^2\langle VSV\psi_0,\psi_0\rangle+O(\lambda^3)$
for $|\lambda|$ in the disk of the remainder estimate; the $O(\lambda^3)$ is made
explicit in [[thm-nrqm-controlled-dynamics-analytic-perturbation-remainder]].

## Facts & Assumptions

**Given:** the data of [[thm-nrqm-controlled-dynamics-contour-perturbation-projection]];
$\psi_0$ a unit eigenvector of $H_0$ at $E$; $Q$, $S$ as above; $\lambda$ with
$q<1/2$.

[F1] $P_0=\langle\cdot,\psi_0\rangle\psi_0$, $Q=I-P_0$ is the orthogonal projection onto $P_0^\perp$, $SP_0=P_0S=0$, and $\|S\|\le1/g$ because $\operatorname{dist}(E,\sigma(H_0|_{P_0^\perp H}))=g$ ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]], [[thm-unbounded-borel-functional-calculus]], [[def-projection-valued-measure]], [[def-operator-norm]]).

[F2] $P_\lambda$ and $E_\lambda$ are analytic in $\lambda$, $P_\lambda\to P_0$, $\|P_\lambda-P_0\|\le1/2$ for $q<1/2$, and $P_\lambda H$ is one-dimensional with $(H_0+\lambda V)P_\lambda=P_\lambda(H_0+\lambda V)$ and $(H_0+\lambda V)P_\lambda\xi=E_\lambda P_\lambda\xi$ for $\xi\in D(H_0)$ ([[thm-nrqm-controlled-dynamics-contour-perturbation-projection]]).

[F3] For a finite-rank projection $P$ close to $P_0$ the pairing $\langle P\psi_0,\psi_0\rangle$ is nonzero: indeed $|\langle P\psi_0,\psi_0\rangle-1|\le\|P-P_0\|\le1/2$; hence the gauge denominator in the definition of $\psi(\lambda)$ does not vanish ([[thm-nrqm-controlled-dynamics-contour-perturbation-projection]], algebra).

[F4] $H_0$ and $S$: on $D(H_0)$ one has $Q(H_0-E)Q = S^{-1}$ in the sense that $QSQ = S$ and $(H_0-E)S\xi=Q\xi$ for $\xi\in H$ with $S\xi\in D(H_0)$ ([[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]], [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]).

## Proof

1.1 [Analytic eigenvector] By [F2] the map $\lambda\mapsto P_\lambda$ is analytic in operator norm and $P_\lambda P_0 H\subseteq P_\lambda H$ is one-dimensional for $q<1/2$; the denominator $\langle P_\lambda\psi_0,\psi_0\rangle$ is analytic and nonzero by [F3], so $\lambda\mapsto\psi(\lambda)$ is analytic, satisfies $\langle\psi(\lambda),\psi_0\rangle=1$, and lies in $P_\lambda H$; since $H_0+\lambda V$ preserves $P_\lambda H$ ([F2]), $(H_0+\lambda V)\psi(\lambda)=E_\lambda\psi(\lambda)$. The bound $\|\psi(\lambda)\|\le\|P_\lambda\psi_0\|/(1-1/2)\le2\|P_\lambda\|\le3$ uses $\|P_\lambda\|\le1+\|P_\lambda-P_0\|\le3/2$. [F2, F3, algebra]

2.1 [First-order eigenvalue] Differentiating $E_\lambda=\langle(H_0+\lambda V)\psi(\lambda),\psi(\lambda)\rangle$ at $\lambda=0$ and using $(H_0-E)\psi(0)=0$, $\langle\psi'(0),\psi_0\rangle=0$ (from the gauge) and self-adjointness of $H_0$ gives $E'(0)=\operatorname{Re}\langle V\psi_0,\psi_0\rangle+2\operatorname{Re}\langle(H_0-E)\psi'(0),\psi_0\rangle=\langle V\psi_0,\psi_0\rangle$; equivalently, pair the eigenvalue equation $H_0\psi(\lambda)+\lambda V\psi(\lambda)=E_\lambda\psi(\lambda)$ with $\psi_0$ and differentiate. [step 1.1, F2, F4, algebra]

3.1 [First-order vector and second-order eigenvalue] Insert $\psi(\lambda)=\psi_0+\lambda\psi'(0)+O(\lambda^2)$ and $E_\lambda=E+\lambda E'(0)+O(\lambda^2)$ into the eigenvalue equation, project onto $P_0^\perp$ and use $(H_0-E)S=Q$: the $O(\lambda)$ terms give $Q(H_0-E)\psi'(0)+QV\psi_0=0$, i.e. $\psi'(0)=-SV\psi_0+\text{(element of }P_0H)$, and the gauge $\langle\psi'(0),\psi_0\rangle=0$ fixes $\psi'(0)=-SV\psi_0$. For the second order, pair the $O(\lambda^2)$ eigenvalue equation with $\psi_0$: the standard computation using self-adjointness of $H_0$ and $H_0\psi_0=E\psi_0$ gives $E''(0)=2\operatorname{Re}\langle V\psi'(0),\psi_0\rangle=-2\langle VSV\psi_0,\psi_0\rangle$ using $S=S^*$ and the first-order identity. Since $S$ is built from the full complementary spectral subspace, the second-order shift collects all complementary spectral components. [step 1.1, step 2.1, F1, F4, algebra] ∎
