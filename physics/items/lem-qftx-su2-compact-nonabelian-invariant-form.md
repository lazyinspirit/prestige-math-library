---
id: lem-qftx-su2-compact-nonabelian-invariant-form
kind: lemma
title: Compactness and normalized invariant form for SU(2)
status: "published"
origin: session
dependency_level: 0
domain: mathematics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-nonabelian-yang-mills-model
axiom_base: "ZF + AC_omega inherited through the supplied finite-dimensional Lie-group/Lie-algebra construction; the matrix and Heine–Borel arguments add no choice."
deps:
  - def-countable-choice
  - ex-unitary-and-special-unitary-lie-groups
  - thm-heine-borel-rn
dependency_roles:
  def-countable-choice: mathematical-premise
  ex-unitary-and-special-unitary-lie-groups: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David Tong, Gauge Theory, Chapter 2, Yang-Mills Theory"
      url: "https://davidtong.org/pdfs/teaching/gauge-theory/gauge2.pdf"
      locator: "§2.1.1, printed pp. 28–29, and §2.1.2, printed pp. 30–31: matrix Lie-group and adjoint conventions for non-Abelian gauge fields."
    - title: "Matthijs Vákár, Principal Bundles and Gauge Theories"
      url: "https://arxiv.org/html/2110.06334"
      locator: "§1.1.5 and §2.1: global group data, principal bundles, and the distinction between the structure group and bundle gauge group."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Statement

Assume the axiom of countable choice. Let
$G=SU(2)=\{U\in M_2(\mathbb C):U^*U=I_2,\ \det U=1\}$ with its real Lie-group
structure. Define the Pauli matrices
$\sigma_1=\begin{pmatrix}0&1\\1&0\end{pmatrix}$,
$\sigma_2=\begin{pmatrix}0&-i\\i&0\end{pmatrix}$, and
$\sigma_3=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$, and put
$T_a=-\frac{i}{2}\sigma_a$ for $a\in\{1,2,3\}$. Then $G$ is compact and
noncommutative, its real Lie algebra has basis $T_1,T_2,T_3$ with
$[T_a,T_b]=\sum_{c=1}^3\epsilon_{abc}T_c$, and the real bilinear form
$\kappa(X,Y)=-2\operatorname{Tr}_2(XY)$ on $\mathfrak{su}(2)$ is positive
definite, symmetric, and invariant under
$\operatorname{Ad}_gX=gXg^{-1}$, with $\kappa(T_a,T_b)=\delta_{ab}$.

## Statement references

[David Tong, Gauge Theory, Chapter 2, Yang-Mills Theory](https://davidtong.org/pdfs/teaching/gauge-theory/gauge2.pdf)

[Matthijs Vákár, Principal Bundles and Gauge Theories](https://arxiv.org/html/2110.06334)

## Facts & Assumptions

**Given:** The matrix space $M_2(\mathbb C)$ with its underlying eight-dimensional real Euclidean topology and the displayed Pauli matrices.

[A1] [[def-countable-choice]]: $\mathrm{AC}_\omega$ asserts that every countable family of nonempty sets has a choice function; it is inherited by the supplied Lie-group tangent-bracket construction.

[F1] [[ex-unitary-and-special-unitary-lie-groups]]: $SU(2)$ is a finite-dimensional real Lie group and its Lie algebra is the real vector space of traceless skew-Hermitian $2\times2$ matrices.

[F2] [[thm-heine-borel-rn]]: a subset of Euclidean $\mathbb R^8$ is compact exactly when it is closed and bounded.

## Proof

1.1 The entries of $U^*U-I_2$ and $\det U-1$ are continuous real polynomial functions of the eight real coordinates of $U$. Their common zero set $SU(2)$ is therefore closed. Since $U^*U=I_2$, each column of $U$ has Euclidean norm one, so every matrix entry has modulus at most one; hence $SU(2)$ is bounded in $\mathbb R^8$. By [F2], $SU(2)$ is compact. Its real Lie-group structure is supplied by [F1]. [A1, F1, F2, algebra]

1.2 The matrices $g=\operatorname{diag}(i,-i)$ and
$h=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$ satisfy $g^*g=h^*h=I_2$ and
$\det g=\det h=1$, so both lie in $SU(2)$. Direct multiplication gives
$gh=\begin{pmatrix}0&i\\i&0\end{pmatrix}$ and
$hg=\begin{pmatrix}0&-i\\-i&0\end{pmatrix}$; therefore $gh\ne hg$ and the group is noncommutative. [A1, algebra]

1.3 By [F1], every element of $\mathfrak{su}(2)$ has the form
$\begin{pmatrix}i\alpha&z\\-\overline z&-i\alpha\end{pmatrix}$ with
$\alpha\in\mathbb R$ and $z\in\mathbb C$. Thus $T_1,T_2,T_3$ form a real
basis. Multiplying the displayed matrices gives
$[T_1,T_2]=T_3$, $[T_2,T_3]=T_1$, and $[T_3,T_1]=T_2$; antisymmetry and
bilinearity give the stated $\epsilon_{abc}$ formula. [F1, algebra]

2.1 The same finite matrix products give
$-2\operatorname{Tr}_2(T_aT_b)=\delta_{ab}$. Since each $X\in\mathfrak{su}(2)$
has real coordinates in this basis, $\kappa(X,X)$ is the sum of their squares,
and $\kappa$ is positive definite; trace cyclicity gives symmetry. For every
$g\in SU(2)$,
$\kappa(\operatorname{Ad}_gX,\operatorname{Ad}_gY)
=-2\operatorname{Tr}_2(gXYg^{-1})
=-2\operatorname{Tr}_2(XY)=\kappa(X,Y)$, so the form is
$\operatorname{Ad}$-invariant. [step 1.3, algebra] ∎
