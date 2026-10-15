---
id: lem-qft-regulated-ground-variational-bound
kind: lemma
domain: mathematics
title: Ground eigenvalue as the form variational infimum
status: draft
origin: pipeline
dependency_level: 5
deps: [thm-qft-self-adjoint-regulated-interaction, thm-hilbert-space-fourier-expansion, def-countable-choice]
dependency_roles:
  thm-qft-self-adjoint-regulated-interaction: mathematical-premise
  thm-hilbert-space-fourier-expansion: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, 2nd ed., §4.4, pp.139–141"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "§4.4, printed pp.139–141: Rayleigh quotients and variational eigenvalue characterizations."
    - title: "Richard S. Laugesen, Spectral Theory of Partial Differential Equations — Lecture Notes, Chapter 9, pp.51–54"
      url: "https://arxiv.org/pdf/1203.2344v1"
      locator: "Chapter 9, printed pp.51–54: Rayleigh quotient and variational eigenvalue bounds."
---

## Statement

Assume Countable Choice and use $Q$, $q_h$, and the operator $h$ from
[[thm-qft-self-adjoint-regulated-interaction]]. Let $\lambda_1$ be the least
eigenvalue of $h$. Then
$$\inf\{q_h(u):u\in Q,\ \|u\|_2=1\}=\lambda_1.$$
The infimum is attained by every normalized vector in the lowest eigenspace;
no simplicity or nondegeneracy is assumed.

## Facts & Assumptions

**Given:** Countable Choice, the form domain $Q$, the form $q_h$, and the complete eigenfamily of $h$.

[A1] [[def-countable-choice]]: countable eigenbasis choices used in the form realization are permitted.

[F1] [[thm-qft-self-adjoint-regulated-interaction]]: the eigenvalues $\lambda_n$ are real, ordered increasingly with multiplicity, have a least value $\lambda_1$, and for $u\in Q$,
$$q_h(u)=\sum_{n\ge1}\lambda_n|\langle u,\psi_n\rangle|^2.$$

[F2] [[thm-hilbert-space-fourier-expansion]]: $\sum_n|\langle u,\psi_n\rangle|^2=\|u\|_2^2$.

## Proof

**Proof technique:** direct.

**Given:** $u\in Q$ and the ordered real eigenvalue list.

1.1 Since $\lambda_n\ge\lambda_1$ for every $n$, [A1], [F1] and [F2] imply
$$q_h(u)-\lambda_1\|u\|_2^2 =\sum_n(\lambda_n-\lambda_1)|\langle u,\psi_n\rangle|^2\ge0.$$
Thus every unit vector in $Q$ has form value at least $\lambda_1$. [A1, F1, F2, algebra]

2.1 A normalized eigenvector $\psi_1$ belongs to $D(h)\subseteq Q$ by
[[thm-qft-self-adjoint-regulated-interaction]], has norm one, and its sole
nonzero coefficient is at an eigenvalue $\lambda_1$. Therefore
$q_h(\psi_1)=\lambda_1$, so the lower bound is attained and equals the
infimum. If the lowest eigenspace has dimension greater than one, the same
coefficient calculation applies to every normalized vector in it. [F1, F2, step 1.1, algebra] ∎

