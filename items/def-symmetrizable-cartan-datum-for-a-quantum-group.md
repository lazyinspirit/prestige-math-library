---
id: def-symmetrizable-cartan-datum-for-a-quantum-group
kind: definition
title: "Symmetrizable Cartan data for quantum groups"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-generalized-cartan-matrix
  - def-symmetrizable-generalized-cartan-matrix
  - def-realization-of-a-generalized-cartan-matrix
  - prop-minimal-realizations-exist-and-are-unique-up-to-isomorphism
  - def-kac-moody-root-lattice-height-and-positive-cone
  - def-free-abelian-group
aliases: []
dependency_level: 0
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Richard Borcherds, Mark Haiman, Theo Johnson-Freyd, Nicolai Reshetikhin and Vera Serganova, Berkeley Lectures on Lie Groups and Quantum Groups (book-length lecture notes, last updated 18 January 2024)"
      url: "https://categorified.net/LieQuantumGroups.pdf"
      locator: "Ch. 10, §10.4.2.2, printed p. 245: roots, coroots, generalized Cartan matrix, integer symmetrizer and minimal Cartan-space dimension; §10.4.2.6, printed p. 246: a singular affine example."
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§1, printed pp. 3–4, Definition 1.1 and surrounding conventions: the co-weight lattice, weight lattice, simple roots/coroots, integer symmetrizer and q_i; the additional nondegenerate-form and fundamental-weight assumptions later in §1 are not used here."
pipeline_run: frontier-43-complex-representation-15
---

## Definition

A **symmetrizable Cartan datum for a quantum group** consists of a finite nonempty index set $I=\{1,\ldots,n\}$, a symmetrizable generalized Cartan matrix $A=(a_{ij})_{i,j\in I}$ ([[def-generalized-cartan-matrix]], [[def-symmetrizable-generalized-cartan-matrix]]) and a chosen diagonal symmetrizer $D=\operatorname{diag}(d_1,\ldots,d_n)$ with $d_i\in\mathbb Z_{>0}$ and $d_i a_{ij}=d_j a_{ji}$ for all $i,j$; free abelian groups $P^\vee$ and $P$ ([[def-free-abelian-group]]) with an integer-valued bilinear pairing $\langle\cdot,\cdot\rangle:P\times P^\vee\to\mathbb Z$; simple coroots $h_i\in P^\vee$ that are linearly independent in $P^\vee\otimes_{\mathbb Z}\mathbb Q$; and simple roots $\alpha_i\in P$ that freely generate the root lattice $Q=\bigoplus_{i\in I}\mathbb Z\alpha_i\subseteq P$ ([[def-kac-moody-root-lattice-height-and-positive-cone]]) and satisfy $\langle\alpha_j,h_i\rangle=a_{ij}$ for all $i,j$ ([[def-realization-of-a-generalized-cartan-matrix]], [[prop-minimal-realizations-exist-and-are-unique-up-to-isomorphism]]).

The index set is finite and $A$ need not be nonsingular. We do not require the simple coroots to span $P^\vee\otimes_{\mathbb Z}\mathbb Q$, and the pairing is not required to be perfect; choosing $P$ and $P^\vee$ is part of the datum, not something determined by the matrix alone.

We fix an indeterminate $q$ over $\mathbb Q$, work over $\mathbb Q(q)$, and set $q_i=q^{d_i}$. For $h\in P^\vee$, $\langle\alpha_i,h\rangle\in\mathbb Z$ is the exponent in $q^{\langle\alpha_i,h\rangle}$. We use the row convention $\langle\alpha_j,h_i\rangle=a_{ij}$ throughout. No fundamental weights with prescribed values on all $h_i$ are part of this definition.
