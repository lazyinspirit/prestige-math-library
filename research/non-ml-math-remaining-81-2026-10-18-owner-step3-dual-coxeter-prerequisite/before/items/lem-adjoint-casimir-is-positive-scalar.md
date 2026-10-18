---
id: lem-adjoint-casimir-is-positive-scalar
kind: lemma
title: The normalized adjoint Casimir is a positive scalar
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-casimir-operator-relative-to-an-invariant-form
  - lem-the-casimir-operator-is-basis-independent-and-intertwining
  - def-loop-algebra-of-a-simple-lie-algebra
  - def-compact-real-form-of-a-complex-semisimple-lie-algebra
  - def-residue-two-cocycle-on-a-loop-algebra
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: David Ben-Zvi and Edward Frenkel, Geometric Realization of the Segal–Sugawara Construction, §3.1
      url: https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/BenZviFrenkel.pdf
    - title: Antony Wassermann, Kac–Moody and Virasoro Algebras, Chapter I §13 and Chapter III §6
      url: https://arxiv.org/pdf/1004.1287
---

## Statement

Let $\mathfrak g$ be a finite-dimensional complex simple Lie algebra, let $B$ be the invariant form normalized so long roots have square $2$, and let $\mathfrak k$ be a compact real form. The adjoint action of the Casimir $\Omega_B$ from [[def-casimir-operator-relative-to-an-invariant-form]] is a unique positive scalar $\gamma_B$ times the identity.

## Facts & Assumptions

**Given:** A finite-dimensional complex simple Lie algebra, its normalized invariant form, and a compact real form.

[F1] [[def-casimir-operator-relative-to-an-invariant-form]]: $\Omega_B=\sum_i x_i x^i$ for any $B$-dual bases, and the Casimir operator is its action in a representation.

[F2] [[lem-the-casimir-operator-is-basis-independent-and-intertwining]]: $\Omega_B$ is independent of the dual bases, is central in $U(\mathfrak g)$, and acts as an intertwiner.

[F3] [[def-loop-algebra-of-a-simple-lie-algebra]]: $\mathfrak g$ is finite-dimensional, nonabelian and simple, so its only ideals are $0$ and $\mathfrak g$.

[F4] [[def-compact-real-form-of-a-complex-semisimple-lie-algebra]]: the Killing form restricts negatively on $\mathfrak k$.

[F5] [[def-residue-two-cocycle-on-a-loop-algebra]]: $B$ is a positive-real rescaling of the Killing form normalized so long roots have square $2$.

## Proof

1.1 The adjoint representation is irreducible: an invariant subspace $U\subseteq\mathfrak g$ satisfies $[\mathfrak g,U]\subseteq U$, so it is an ideal, and [F3] leaves only $0$ and $\mathfrak g$. By [F2], $T=\operatorname{ad}(\Omega_B)$ commutes with every $\operatorname{ad}(x)$. Since $T$ is an endomorphism of a nonzero finite-dimensional complex vector space, it has an eigenvalue $\gamma_B$; its nonzero eigenspace is invariant under $\mathfrak g$, hence is all of $\mathfrak g$. Therefore $T=\gamma_B\operatorname{id}_{\mathfrak g}$, and this scalar is unique. [F1, F2, F3, algebra]

2.1 Choose a $Q=-B|_{\mathfrak k}$-orthonormal basis $X_i$ of $\mathfrak k$. By [F4] and [F5], $Q$ is positive definite and the $B$-dual basis is $-X_i$, so $\Omega_B=-\sum_iX_i^2$. Invariance of $Q$ makes each $\operatorname{ad}(X_i)$ skew-adjoint, and therefore $Q(TX,X)=Q\!\left(-\sum_i[X_i,[X_i,X]],X\right)=\sum_i Q([X_i,X],[X_i,X]).$ For $X\ne0$ this is positive: if it were zero, each $[X_i,X]$ would vanish, so $X$ would be central in $\mathfrak k$ and hence in $\mathfrak g$, contrary to [F3]. Since $T=\gamma_B I$, dividing by $Q(X,X)>0$ shows that $\gamma_B$ is a positive real number. [F1, F3, F4, F5, step 1.1, algebra] ∎
