---
id: def-representative-function-on-a-compact-group
kind: definition
title: Representative functions on a compact group
deps:
- def-axiom-of-choice
- def-matrix-coefficient-of-a-unitary-representation
- lem-averaging-makes-a-finite-dimensional-representation-unitary
- def-strongly-continuous-unitary-representation
- def-topological-group
- def-compact-space
- def-hausdorff-space
- cor-normalized-haar-probability-on-a-compact-group
- def-linear-subspace
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
    locator: Ch. 5 §5.4, printed pp. 230–231
  - title: David A. Vogan, Review of Harmonic Analysis on Compact Groups (MIT lecture notes, 12 pp.)
    url: https://math.mit.edu/~dav/compactrev.pdf
    locator: §2.11 and (2.12), printed pp. 7–8
status: published
origin: pipeline
---
## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $K$ be a compact Hausdorff topological group ([[def-topological-group]], [[def-compact-space]], [[def-hausdorff-space]]) with normalized Haar probability measure $\mu$ ([[cor-normalized-haar-probability-on-a-compact-group]]). A function $f:K\to\mathbb C$ is a **representative function** when there are finitely many finite-dimensional continuous unitary representations $\pi_1,\dots,\pi_r$ of $K$ ([[def-strongly-continuous-unitary-representation]]), vectors $v_j,w_j$ in the carrier of $\pi_j$ and scalars $c_j\in\mathbb C$ with
$$f=\sum_{j=1}^r c_j\, c^{\pi_j}_{v_j,w_j},\qquad c^{\pi}_{v,w}(k)=\langle\pi(k)v,w\rangle ,$$
the matrix coefficient convention of [[def-matrix-coefficient-of-a-unitary-representation]], which is linear in $v$ and conjugate-linear in $w$. We write $R(K)\subseteq C(K,\mathbb C)$ for the set of representative functions; by definition it is the linear span ([[def-linear-subspace]]) of the matrix coefficients of the continuous finite-dimensional unitary representations of $K$, and each such coefficient is a continuous function by [[def-matrix-coefficient-of-a-unitary-representation]], so the inclusion in $C(K,\mathbb C)$ is well defined.

**Nonunitary finite-dimensional representations give nothing new.** Let $\rho$ on $V$ be any continuous finite-dimensional complex representation of $K$, unitarizable by [[lem-averaging-makes-a-finite-dimensional-representation-unitary]]: there is an inner product $h$ on $V$ making $\rho$ unitary. Fix any inner product $h_0$ on $V$ with orthonormal basis $e_1,\dots,e_d$ and expand $\rho(k)e_j=\sum_i\rho_{ij}(k)e_i$. The functions $\rho_{ij}(k)=h_0(\rho(k)e_j,e_i)$ are $h_0$-matrix coefficients of $\rho$, and expanding $v=\sum_j a_je_j$ gives
$$h(\rho(k)v,w)=\sum_{i,j}a_j\,h(e_i,w)\,\rho_{ij}(k),$$
a finite linear combination of the $\rho_{ij}$ with scalars independent of $k$; the converse containment is the same computation run with the roles of $h$ and $h_0$ exchanged. Hence $R(K)$ is also the linear span of the matrix coefficients of all continuous finite-dimensional complex representations of $K$. No closure, completeness, density or point-separation property is asserted here.
