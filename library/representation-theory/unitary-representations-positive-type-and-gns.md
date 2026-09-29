---
page: unitary-representations-positive-type-and-gns
title: "Unitary Representations, Positive Type and GNS"
status: draft
items:
  - def-strongly-continuous-unitary-representation
  - lem-continuity-criteria-for-unitary-representations
  - def-cyclic-vector-and-cyclic-unitary-representation
  - thm-schurs-lemma-for-unitary-representations
  - def-matrix-coefficient-of-a-unitary-representation
  - lem-unitary-matrix-coefficients-are-bounded-and-uniformly-continuous
  - def-continuous-function-of-positive-type
  - lem-diagonal-unitary-coefficients-have-positive-type
  - lem-positive-type-functions-define-a-pre-hilbert-form
  - lem-the-gns-null-space-is-translation-invariant
  - lem-the-gns-translation-action-is-unitary-and-strongly-continuous
  - thm-gns-construction-for-topological-groups
  - thm-uniqueness-of-the-cyclic-gns-representation
  - cor-normalized-positive-type-functions-correspond-to-pointed-cyclic-representations
  - lem-dominated-positive-type-functions-give-positive-commutant-contractions
  - lem-nonscalar-positive-commutant-elements-split-a-normalized-positive-type-function
  - thm-pure-positive-type-functions-correspond-to-irreducible-gns-representations
examples: []
---

The page fixes the convention that complex Hilbert pairings are linear in the
first variable. It develops strongly continuous unitary representations,
closed invariant subspaces, irreducibility, cyclic vectors and matrix
coefficients. Diagonal coefficients are continuous functions of positive type;
all matrix coefficients are bounded and uniformly continuous.

Positive type is tested by positive semidefiniteness of every finite matrix
$\bigl(\varphi(g_i^{-1}g_j)\bigr)_{i,j}$. This condition gives a positive
sesquilinear form on finitely supported functions on $G$. Quotienting by its
null space gives the pre-Hilbert space used by the GNS construction. Left
translation $L_gf(x)=f(g^{-1}x)$ preserves the form and null space, so it
induces the unitary group action on the completion.

Under the Axiom of Choice, the completion and extended action yield a cyclic
strongly continuous representation with canonical vector
$\xi_\varphi=\kappa_\varphi([\delta_e])$ in the completed space and coefficient
$\varphi(g)=\langle\pi_\varphi(g)\xi_\varphi,\xi_\varphi\rangle$. Two cyclic
representations with the same coefficient have a unique pointed unitary
intertwiner. Restricting to $\varphi(e)=1$ identifies normalized positive-type
functions with pointed cyclic representations having unit cyclic vectors.

The commutant results connect this function model to operator structure. A
dominated function $0\le\psi\le\varphi$ corresponds to a unique positive
contraction in the GNS commutant. Nonscalar positive contractions give, and
arise from, strict convex decompositions into distinct normalized
positive-type functions. Consequently, a normalized positive-type function
is extreme in $P_1(G)$ exactly when its cyclic GNS representation is
irreducible.

Choice assumptions are stated at the results that use them. In particular,
AC is used for GNS completion and uniqueness, Schur's lemma, and the
represented dominated form; orthogonal decomposition and projection use
Countable Choice, supplied here through $\mathrm{AC}\Rightarrow\mathrm{DC}
\Rightarrow\mathrm{AC}_\omega$. The finite matrix tests and the explicit
commuting-projection calculation require no further choice. The source
comparison for these results is Bekka, de la Harpe and Valette,
*Kazhdan's Property (T)*, Appendix C, especially Theorem C.4.10 and
Propositions C.5.1–C.5.2.
