---
id: lem-qftx-su2-compact-nonabelian-group
kind: lemma
title: Compact non-Abelian Lie-group structure of SU(2)
status: draft
origin: session
dependency_level: 0
axiom_base: "ZF + AC_omega through the published special-unitary Lie-group construction; the compactness and matrix arguments add no choice."
domain: mathematics
library: physics
category: advanced-qft-and-supersymmetry
deps:
  - def-countable-choice
  - def-lie-group
  - ex-unitary-and-special-unitary-lie-groups
  - thm-heine-borel-rn
dependency_roles:
  def-countable-choice: mathematical-premise
  def-lie-group: mathematical-premise
  ex-unitary-and-special-unitary-lie-groups: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Michael Creutz, Quarks, Gluons and Lattices, Chapter 8, Group integration"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/D249BE42514DA3218D7060836C8438ED/9781009290388c8_39-50.pdf/group_integration.pdf"
    - title: "David Tong, Gauge Theory, Chapter 4, Lattice Gauge Theory"
      url: "https://davidtong.org/pdfs/teaching/gauge-theory/gauge4.pdf"
verification:
  precheck: pending
---

## Statement

Assume the axiom of countable choice. Let

$$SU(2):=\{U\in M_2(\mathbb C):U^*U=I_2,\ \det U=1\}$$

with matrix multiplication and the topology induced by the eight real and imaginary matrix-entry coordinates. Equip it with its standard real Lie-group structure as the special unitary matrix group. Then $SU(2)$ is a compact Hausdorff non-Abelian finite-dimensional real Lie group. Its defining representation is the map $\rho_2:SU(2)\to U(2)$, $\rho_2(V)=V$, acting on $\mathbb C^2$ with the standard Hermitian form $h(v,w)=v^*w$; it is a smooth unitary group homomorphism.

Every $V\in SU(2)$ has the form $V=\begin{pmatrix}\alpha&\beta\\-\overline{\beta}&\overline{\alpha}\end{pmatrix}$ with $|\alpha|^2+|\beta|^2=1$; consequently $\tfrac12\operatorname{ReTr}_2V=\operatorname{Re}\alpha\in[-1,1]$.

## Statement references

[[def-countable-choice|Countable-choice hypothesis for the matrix Lie-group supplier]]

[[def-lie-group|Finite-dimensional real Lie group with smooth multiplication and inversion]]

[[ex-unitary-and-special-unitary-lie-groups|Standard real Lie-group structures on U(2) and SU(2)]]

[Creutz, *Quarks, Gluons and Lattices*, Chapter 8, pp. 39–43](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/D249BE42514DA3218D7060836C8438ED/9781009290388c8_39-50.pdf/group_integration.pdf)

[Tong, *Gauge Theory*, Chapter 4, §4.2.2, pp. 210–212](https://davidtong.org/pdfs/teaching/gauge-theory/gauge4.pdf)

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the matrix set and topology stated above, and the Euclidean metric on its eight real coordinates.

[A1] $\mathrm{AC}_\omega$ means every sequence of nonempty sets has an indexed choice function. [[def-countable-choice]]

[F1] [[thm-heine-borel-rn]]: in finite-dimensional Euclidean space, every closed and bounded subset is compact. The theorem's proof uses no choice principle.

[F2] [[ex-unitary-and-special-unitary-lie-groups]]: the displayed matrix group $SU(2)$ has its standard finite-dimensional real Lie-group structure as a smooth embedded subgroup of $U(2)$; the matrix inclusion is smooth.

[F3] [[def-lie-group]]: a finite-dimensional real Lie group is a group with a finite-dimensional real smooth-manifold structure and smooth multiplication and inversion.

## Proof

1.1 If $U,V\in SU(2)$, then $(UV)^*(UV)=V^*U^*UV=I_2$ and $\det(UV)=\det U\det V=1$. The identity belongs to $SU(2)$, and $U^{-1}=U^*$ is unitary with determinant $\overline{\det U}=1$. Thus the set is a group. Its standard smooth Lie-group structure and smooth matrix inclusion into $U(2)$ are supplied by [F2] under the definition [F3]. The map $\rho_2$ is a group homomorphism because it is the matrix inclusion, and it is unitary because $U^*U=I_2$. [given, A1, F2, F3, algebra]

1.2 In real coordinates the equations $U^*U=I_2$ and $\det U=1$ are continuous equations, so $SU(2)$ is closed. Unitarity makes each column a unit vector, hence every real and imaginary entry lies in $[-1,1]$; the set is bounded in $\mathbb R^8$. Apply [F1] to conclude compactness. The inherited Euclidean metric makes this subspace Hausdorff: for distinct $U,V$, the open balls of radius $\|U-V\|/3$ are disjoint, since a point in both would give $\|U-V\|<2\|U-V\|/3$ by the triangle inequality. [given, F1, algebra]

1.3 The matrices $A=\begin{pmatrix}i&0\\0&-i\end{pmatrix}$ and $B=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$ are unitary with determinant one, while $AB=\begin{pmatrix}0&i\\i&0\end{pmatrix}$ and $BA=\begin{pmatrix}0&-i\\-i&0\end{pmatrix}$ differ. Therefore $SU(2)$ is non-Abelian. [given, algebra]

2.1 For $V\in SU(2)$, write its first column as $(\alpha,\gamma)$. Its second unit column orthogonal to the first is $\lambda(-\overline{\gamma},\overline{\alpha})$ for $|\lambda|=1$; determinant one gives $\lambda(|\alpha|^2+|\gamma|^2)=\lambda=1$. Hence $V=\begin{pmatrix}\alpha&\beta\\-\overline{\beta}&\overline{\alpha}\end{pmatrix}$ with $|\alpha|^2+|\beta|^2=1$, and $\tfrac12\operatorname{ReTr}_2V=\operatorname{Re}\alpha\in[-1,1]$. Also $\operatorname{Tr}_2(V^{-1})=\operatorname{Tr}_2(V^*)=\overline{\operatorname{Tr}_2V}=\operatorname{Tr}_2V$, while cyclicity gives $\operatorname{Tr}_2(gVg^{-1})=\operatorname{Tr}_2V$. Thus the normalized trace is real, bounded, conjugation invariant, and inverse invariant. [given, algebra] ∎
