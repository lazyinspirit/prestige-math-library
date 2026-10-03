---
id: ex-peter-weyl-for-a-profinite-group
kind: example
title: Peter-Weyl for a profinite group
deps:
- thm-schur-orthogonality-for-compact-groups
- lem-continuous-finite-dimensional-representations-of-profinite-groups-factor-through-finite-quotients
- def-profinite-group-by-inverse-limit
- cor-normalized-haar-probability-on-a-compact-group
- def-unitary-dual-of-a-compact-group
- thm-uniform-peter-weyl-density
- thm-l2-peter-weyl-orthonormal-basis
- def-normalized-irreducible-matrix-coefficient-basis
- def-matrix-coefficient-of-a-unitary-representation
- def-strongly-continuous-unitary-representation
- def-topological-group
- thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected
- lem-kernels-of-finite-projections-form-an-open-normal-neighbourhood-basis
- lem-no-small-subgroups-in-a-lie-group
- def-lie-group
- thm-continuous-irreducible-unitary-representations-of-compact-groups-are-finite-dimensional
- def-compact-space
- def-representative-function-on-a-compact-group
- def-quotient-topology
- def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
  - title: David A. Vogan, Review of Harmonic Analysis on Compact Groups (MIT lecture notes, 12 pp.)
    url: https://math.mit.edu/~dav/compactrev.pdf
    locator: "§2 opening discussion: continuous representations of the profinite Galois group and of GL(n,Z_p), printed pp. 1–2"
  - title: Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (author-hosted draft, 338 pp.)
    url: https://people.math.ethz.ch/~kowalski/representation-theory.pdf
    locator: Ch. 5 §5.4, printed pp. 230–236 (Peter-Weyl for all compact Hausdorff groups)
status: draft
origin: pipeline
---
## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $K$ be a profinite group ([[def-profinite-group-by-inverse-limit]]), with its normalized Haar probability $\mu$ ([[cor-normalized-haar-probability-on-a-compact-group]]); $K$ is compact, Hausdorff and totally disconnected, and is a genuinely non-Lie compact group unless it is finite. Every continuous finite-dimensional unitary representation of $K$ factors through a finite quotient $K/N$, $N$ open normal ([[lem-continuous-finite-dimensional-representations-of-profinite-groups-factor-through-finite-quotients]]). For such a representation $\pi=\bar\pi\circ q$ with $q:K\to F=K/N$ finite, the linear span of the functions $k\mapsto\langle\bar\pi(q(k))v,w\rangle$ is the coefficient space of $\pi$ and exhibits it as the pullback to $K$ of the coefficient space of the finite-dimensional representation $\bar\pi$ of the finite group $F$; in particular the coefficient space is finite dimensional of dimension at most $(\dim\pi)^2$ (equal to $(\dim\pi)^2$ when $\pi$ is irreducible, by Schur orthogonality) and consists of locally constant functions constant on the cosets of $N$. The unitary dual of $K$ is exactly the set of classes of pullbacks of irreducible representations of the finite quotients $K/N$ ($N$ open normal), and $R(K)$ is the union, over such $N$, of the pullbacks of $R(K/N)$; since each $K/N$ is finite, $R(K)$ consists exactly of the locally constant functions and is uniformly dense in $C(K)$ by [[thm-uniform-peter-weyl-density]], while the normalized coefficient family of [[thm-l2-peter-weyl-orthonormal-basis]] is an orthonormal basis of $L^2(K)$. Thus Peter-Weyl theory applies verbatim to profinite groups such as Galois groups of infinite algebraic extensions and $\mathbb Z_p$-adic groups, whose duals can be extremely complicated but whose harmonic analysis is governed by the same theorem.

## Facts & Assumptions

[F1] A profinite group is compact, Hausdorff and totally disconnected; for a presentation $K=\varprojlim_iG_i$ the kernels of the coordinate projections form an open normal neighbourhood basis at the identity; under AC there is a normalized Haar probability on $K$. ([[def-profinite-group-by-inverse-limit]], [[thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected]], [[lem-kernels-of-finite-projections-form-an-open-normal-neighbourhood-basis]], [[cor-normalized-haar-probability-on-a-compact-group]])

[F2] Every continuous finite-dimensional unitary representation $\pi$ of $K$ factors as $\pi=\bar\pi\circ q$ through a finite quotient $q:K\to F=K/N$ with $N$ open normal, and every matrix coefficient of $\pi$ factors through $q$. ([[lem-continuous-finite-dimensional-representations-of-profinite-groups-factor-through-finite-quotients]])

[F3] Every finite-dimensional Lie group has an open identity neighbourhood containing no subgroup other than $\{e\}$. ([[lem-no-small-subgroups-in-a-lie-group]], [[def-lie-group]])

[F4] Irreducible strongly continuous unitary representations of the compact group $K$ are finite dimensional and their classes form the unitary dual $\widehat K$; $R(K)$ is the span of the matrix coefficients of finite-dimensional continuous unitary representations; $R(K)$ is uniformly dense in $C(K)$; and the normalized coefficient family is an orthonormal basis of $L^2(K)$. ([[thm-continuous-irreducible-unitary-representations-of-compact-groups-are-finite-dimensional]], [[def-unitary-dual-of-a-compact-group]], [[def-representative-function-on-a-compact-group]], [[thm-uniform-peter-weyl-density]], [[thm-l2-peter-weyl-orthonormal-basis]], [[def-normalized-irreducible-matrix-coefficient-basis]])

[F5] For a finite group $F$, every function on $F$ is a representative function: the left regular representation on the finite-dimensional space of functions $F\to\mathbb C$, $(\rho(h)x)(h')=x(h^{-1}h')$, is a continuous finite-dimensional unitary representation, and for its standard basis $(e_h)$ the coefficient $k\mapsto\langle\rho(k)e_e,e_g\rangle=\langle e_k,e_g\rangle$ is the indicator of $\{g\}$. ([[def-matrix-coefficient-of-a-unitary-representation]], [[def-strongly-continuous-unitary-representation]])

[F6] A quotient of $K$ by an open normal subgroup is finite, the quotient map is a continuous surjective homomorphism, and a closed invariant subspace of a pullback representation corresponds to a closed invariant subspace of the representation on the finite quotient. ([[def-quotient-topology]], [[def-strongly-continuous-unitary-representation]])

[F7] For a continuous function on the compact group $K$, local constancy is equivalent to factoring through a finite quotient: the open normal subgroups form a neighbourhood basis, compactness of $K$ reduces an open cover by cosets to a finite one, and an intersection of finitely many open normal subgroups is open normal. ([[def-compact-space]], [[lem-kernels-of-finite-projections-form-an-open-normal-neighbourhood-basis]], [[def-quotient-topology]])

[F8] For an irreducible representation of dimension $d$, Schur orthogonality makes its $d^2$ basis coefficients nonzero and pairwise orthogonal, so its coefficient space has dimension $d^2$. ([[thm-schur-orthogonality-for-compact-groups]])

## Verification

**Given:** AC, a profinite group $K$ with normalized Haar probability $\mu$, and its finite quotients $K/N$ by open normal subgroups.

1.1 Let $\pi$ be a continuous finite-dimensional unitary representation of $K$; by [F2] it factors as $\pi=\bar\pi\circ q$ through $F=K/N$ finite with $N$ open normal. Then $\bar\pi$ is a finite-dimensional continuous unitary representation of the finite group $F$, and every coefficient of $\pi$ is $c^{\pi}_{v,w}=\langle\bar\pi(q(\cdot))v,w\rangle=c^{\bar\pi}_{v,w}\circ q$, so the coefficient space of $\pi$ is the pullback under $q$ of the finite-dimensional coefficient space of $\bar\pi$, of dimension at most $(\dim\pi)^2$, since basis expansion gives at most $(\dim\pi)^2$ spanning coefficients; equality holds for irreducible $\pi$ by Schur orthogonality [F8]. This coefficient space consists of functions constant on the cosets of $N$, hence locally constant. If $K$ were also a finite-dimensional Lie group, [F3] would give an open identity neighbourhood $U$ containing no subgroup except $\{e\}$, and by the neighbourhood basis of [F1] an open normal subgroup $N\subseteq U$; then $N=\{e\}$ is open and $K$ is discrete, hence finite because it is compact; so an infinite profinite group is not a Lie group. [F1, F2, F3, F4, F8]

2.1 The irreducible continuous finite-dimensional unitary representations of $K$ are exactly the pullbacks $\bar\pi\circ q$ of the irreducible representations $\bar\pi$ of the finite quotients $K/N$: an irreducible $\pi$ is finite dimensional [F4], hence factors through such a quotient by step 1.1, and $\bar\pi$ is irreducible because a proper nonzero $\bar\pi$-invariant subspace would pull back to a proper nonzero $\pi$-invariant subspace; conversely, if $\bar\pi$ is irreducible then the invariant subspaces of $\pi=\bar\pi\circ q$ and of $\bar\pi$ correspond bijectively, because $q$ is surjective so $\pi(K)=\bar\pi(F)$ [F6]. Likewise $R(K)$ is the union of the pullbacks $q^*R(F)$: every representative function factors through a finite quotient by step 1.1, and conversely a pullback of a representative function of $F$ is a representative function of $K$ because composition with the continuous homomorphism $q$ turns matrix coefficients of representations of $F$ into matrix coefficients of their pullbacks. Since every function on a finite group is a representative function [F5], a function that factors through a finite quotient is automatically in $R(K)$; combined with [F7], $R(K)$ consists exactly of the locally constant functions on $K$. [F2, F4, F5, F6, F7, step 1.1]

3.1 By [F4] the algebra $R(K)$ is uniformly dense in $C(K)$ and the normalized coefficient family of $K$ is an orthonormal basis of $L^2(K)$; by step 2.1 the classes in the dual are exactly the pullbacks of the irreducible representations of the finite quotients, so the Peter-Weyl theorem holds for $K$ verbatim. No countability of $K$ or of $\widehat K$ is asserted, and the finite quotients of a profinite group may have arbitrarily complicated finite representation theory. The Axiom of Choice is consumed through the normalized Haar measure and the cited suppliers. [F4, step 2.1] ∎
