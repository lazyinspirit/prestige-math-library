---
id: def-classical-complex-matrix-lie-algebras
kind: definition
title: Classical complex matrix Lie algebras
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-lie-algebra-over-a-field]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 20.3, Examples 20.12-20.14, printed pp. 110-111"
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, (2.43) and the §1 examples, printed pp. 150 and 42-48"
landmark: false
---

## Definition

All matrix spaces below carry the commutator bracket $[A,B]=AB-BA$ and are
Lie subalgebras of $\mathfrak{gl}_m(\mathbb C)=M_m(\mathbb C)$ in the sense of
[[def-lie-algebra-over-a-field]]; closure under the bracket is verified in
each case by the computation displayed.

* The **general linear Lie algebra** $\mathfrak{gl}_n(\mathbb C)=M_n(\mathbb C)$,
  for $n\ge1$. The **special linear Lie algebra**
  $\mathfrak{sl}_n(\mathbb C)=\{A\in M_n(\mathbb C):\operatorname{tr}A=0\}$
  is a Lie subalgebra because $\operatorname{tr}(AB-BA)=0$, and
  $\mathfrak{sl}_2(\mathbb C)$ agrees with
  [[def-special-linear-lie-algebra-sl-two]].
* The **symplectic Lie algebra** $\mathfrak{sp}_{2n}(\mathbb C)$ is the set of
  $A\in M_{2n}(\mathbb C)$ with $AJ+JA^{T}=0$, where
  $J=\begin{pmatrix}0&I_n\\-I_n&0\end{pmatrix}$.
* The **orthogonal Lie algebras** $\mathfrak{so}_{2n}(\mathbb C)$ and
  $\mathfrak{so}_{2n+1}(\mathbb C)$ are the sets of $A\in M_m(\mathbb C)$ with
  $AJ+JA^{T}=0$, where $J=\begin{pmatrix}0&I_n\\I_n&0\end{pmatrix}$ for
  $m=2n$ and
  $J=\begin{pmatrix}1&0&0\\0&0&I_n\\0&I_n&0\end{pmatrix}$ for $m=2n+1$.

Solving $AJ+JA^{T}=0$ blockwise gives
$A=\begin{pmatrix}a&b\\c&-a^{T}\end{pmatrix}$ for the symplectic and even
orthogonal cases, with $b,c$ symmetric for $\mathfrak{sp}_{2n}(\mathbb C)$ and
$b,c$ skew-symmetric for $\mathfrak{so}_{2n}(\mathbb C)$, and gives
$$A=\begin{pmatrix}0&u&-u\\ w&a&b\\ -w^{T}&c&-a^{T}\end{pmatrix},\qquad u,w\in M_{1\times n}(\mathbb C),\ b,c\ \text{skew-symmetric},$$
for $\mathfrak{so}_{2n+1}(\mathbb C)$. In particular
$\dim\mathfrak{sp}_{2n}(\mathbb C)=n(2n+1)=\dim\mathfrak{so}_{2n+1}(\mathbb C)$
and $\dim\mathfrak{so}_{2n}(\mathbb C)=n(2n-1)$. Each set is closed under the
bracket: if $AJ=-JA^{T}$ and $BJ=-JB^{T}$, then
$[A,B]J+J[A,B]^{T}=ABJ-BAJ+JA^{T}B^{T}-JB^{T}A^{T}$, and substituting
$AJ=-JA^{T}$ and $BJ=-JB^{T}$ (equivalently $JA^{T}=-AJ$ and $JB^{T}=-BJ$) makes
the four terms cancel in pairs. Each family is a nonzero proper subspace of
$M_m(\mathbb C)$ closed under the commutator, hence a Lie subalgebra.
