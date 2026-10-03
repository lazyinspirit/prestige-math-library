---
id: def-normalized-irreducible-matrix-coefficient-basis
kind: definition
title: The normalized irreducible matrix coefficient family
deps:
- def-unitary-dual-of-a-compact-group
- thm-continuous-irreducible-unitary-representations-of-compact-groups-are-finite-dimensional
- def-matrix-coefficient-of-a-unitary-representation
- thm-schur-orthogonality-for-compact-groups
- cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
- def-dimension
- def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
  - title: Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (author-hosted draft, 338 pp.)
    url: https://people.math.ethz.ch/~kowalski/representation-theory.pdf
    locator: Ch. 5 §5.5, Lemma 5.5.2, printed pp. 237–238
  - title: David A. Vogan, Review of Harmonic Analysis on Compact Groups (MIT lecture notes, 12 pp.)
    url: https://math.mit.edu/~dav/compactrev.pdf
    locator: Definitions 2.10 and (2.9), printed pp. 7–8
  - title: Constantin Teleman, Representation Theory (Berkeley lecture notes, 60 pp.)
    url: https://math.berkeley.edu/~teleman/math/RepThry.pdf
    locator: §19.7, printed p. 43 (inner product on End(V) scaled by dim V)
status: draft
origin: pipeline
---
## Definition

Assume the Axiom of Choice. Let $K$ be a compact Hausdorff group with normalized Haar probability $\mu$ and unitary dual $\widehat K$ ([[def-unitary-dual-of-a-compact-group]]). For each class $\pi\in\widehat K$ fix a representative, still written $\pi$, on a finite-dimensional carrier $H_\pi$ with $d_\pi:=\dim_{\mathbb C}H_\pi\ge1$ ([[thm-continuous-irreducible-unitary-representations-of-compact-groups-are-finite-dimensional]], [[def-dimension]]), and fix an orthonormal basis $e^\pi_1,\dots,e^\pi_{d_\pi}$ ([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]); both choices are licensed by AC ([[def-axiom-of-choice]]). The **normalized irreducible matrix coefficient family** is
$$\mathcal B=\bigl(u^\pi_{ij}\bigr)_{\pi\in\widehat K,\ 1\le i,j\le d_\pi},\qquad u^\pi_{ij}(k):=\sqrt{d_\pi}\,\langle\pi(k)e^\pi_i,e^\pi_j\rangle ,$$
the matrix coefficients being those of [[def-matrix-coefficient-of-a-unitary-representation]].

**The normalization is the one that makes $\mathcal B$ orthonormal.** For a class $\pi$ and indices $i,j,k,l$, Schur orthogonality in the convention $\langle\pi(k)v,w\rangle$ with its $1/d_\pi$ constant ([[thm-schur-orthogonality-for-compact-groups]]) gives
$$\int_Ku^\pi_{ij}(k)\overline{u^\pi_{kl}(k)}\,d\mu(k)=d_\pi\cdot\frac1{d_\pi}\langle e^\pi_i,e^\pi_k\rangle\,\overline{\langle e^\pi_j,e^\pi_l\rangle}=\delta_{ik}\delta_{jl},$$
and for two inequivalent classes the same theorem gives inner product $0$ between any two of their coefficients; thus the normalization $\sqrt{d_\pi}$ is exactly the factor that converts the $1/d_\pi$ Schur constant into the unit of the family. No completeness claim is made here; it is the content of the theorem that the closed span of $\mathcal B$ is $L^2(K)$.

**Choice invariance.** Different choices of representatives and orthonormal bases produce the same family up to a unitary change of coordinates in each block and a relabeling of its indices. Explicitly, let $e'^\pi_j=\sum_kU_{kj}e^\pi_k$ be another orthonormal basis of the same carrier, with $U$ unitary. Then for all $i,j$
$$u'^\pi_{ij}(k)=\sqrt{d_\pi}\Bigl\langle\pi(k)\sum_mU_{mi}e^\pi_m,\sum_nU_{nj}e^\pi_n\Bigr\rangle=\sum_{m,n}U_{mi}\overline{U_{nj}}\,u^\pi_{mn}(k),$$
so the block $(u'^\pi_{ij})_{i,j}$ is obtained from $(u^\pi_{ij})_{i,j}$ by the unitary change of coordinates $U$; replacing the representative of $\pi$ by a unitarily equivalent one acts by a further fixed unitary in that block. Every statement about $\mathcal B$ made in this development is invariant under these changes.
