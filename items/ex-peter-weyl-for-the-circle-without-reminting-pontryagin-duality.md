---
id: ex-peter-weyl-for-the-circle-without-reminting-pontryagin-duality
kind: example
title: "The circle: the Peter-Weyl basis is the integer characters"
deps:
- def-the-one-dimensional-torus-and-normalized-haar-integral
- lem-trigonometric-characters-are-orthonormal
- thm-trigonometric-system-is-complete-in-l-two-of-the-torus
- thm-parseval-identity-for-fourier-series
- def-fourier-coefficients-and-trigonometric-polynomials
- thm-l2-peter-weyl-orthonormal-basis
- def-normalized-irreducible-matrix-coefficient-basis
- thm-schurs-lemma-for-unitary-representations
- def-matrix-coefficient-of-a-unitary-representation
- def-pontryagin-dual-and-compact-open-topology
- thm-compact-groups-have-discrete-duals-and-discrete-groups-have-compact-duals
- lem-unit-circle-is-a-compact-metrizable-topological-group
- def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis
- def-strongly-continuous-unitary-representation
- def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
  - title: Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (author-hosted draft, 338 pp.)
    url: https://people.math.ethz.ch/~kowalski/representation-theory.pdf
    locator: Ch. 5 §5.1 (the circle group), printed pp. 209–212
  - title: Constantin Teleman, Representation Theory (Berkeley lecture notes, 60 pp.)
    url: https://math.berkeley.edu/~teleman/math/RepThry.pdf
    locator: §§19.13–19.14 (the complete list of irreducible characters of U(1) is $z\mapsto z^n$), printed pp. 44–45
status: published
origin: pipeline
---
## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $K=\mathbb T=\mathbb R/\mathbb Z$ with its normalized Haar measure ([[def-the-one-dimensional-torus-and-normalized-haar-integral]]), a compact abelian Hausdorff group, and write $z^n$ for the continuous characters $[t]\mapsto\exp(2\pi int)$, $n\in\mathbb Z$; each $z^n$ is a one-dimensional continuous unitary representation. Then:

1. every irreducible continuous unitary representation of $\mathbb T$ is one-dimensional, and its normalized matrix coefficient is a continuous character ([[thm-schurs-lemma-for-unitary-representations]]);
2. the characters $\{z^n:n\in\mathbb Z\}$ form a complete orthonormal family of $L^2(\mathbb T)$ ([[lem-trigonometric-characters-are-orthonormal]], [[thm-trigonometric-system-is-complete-in-l-two-of-the-torus]]);
3. hence the normalized coefficient family of [[thm-l2-peter-weyl-orthonormal-basis]] equals $\{z^n:n\in\mathbb Z\}$: a complete orthonormal subfamily of an orthonormal basis is the whole basis, so no other irreducible classes occur. Therefore the unitary dual of $\mathbb T$ is $\mathbb Z$ realized by these characters, consistent with the general duality statement that compact abelian groups have discrete duals ([[def-pontryagin-dual-and-compact-open-topology]], [[thm-compact-groups-have-discrete-duals-and-discrete-groups-have-compact-duals]], [[lem-unit-circle-is-a-compact-metrizable-topological-group]]), and the Peter-Weyl decomposition of $L^2(\mathbb T)$ is exactly the classical Fourier series decomposition $\widehat\bigoplus_{n\in\mathbb Z}\mathbb C z^n$. Parseval's identity and Fourier inversion are the classical Fourier statements ([[thm-parseval-identity-for-fourier-series]]); the example verifies the general theorem against the familiar model without reproving Pontryagin duality.

## Facts & Assumptions

[F1] $\mathbb T$ is a compact metrizable topological abelian group and a compact Hausdorff group, so it carries a normalized Haar probability and the Peter-Weyl theory of the compact case applies to it. ([[lem-unit-circle-is-a-compact-metrizable-topological-group]], [[def-the-one-dimensional-torus-and-normalized-haar-integral]])

[F2] The characters $z^n([t])=\exp(2\pi int)$, $n\in\mathbb Z$, are continuous homomorphisms $\mathbb T\to\mathbb T$; they are orthonormal in $L^2(\mathbb T)$ and their closed linear span is $L^2(\mathbb T)$. ([[lem-trigonometric-characters-are-orthonormal]], [[thm-trigonometric-system-is-complete-in-l-two-of-the-torus]], [[def-fourier-coefficients-and-trigonometric-polynomials]])

[F3] Schur's lemma: every bounded self-intertwiner of an irreducible strongly continuous unitary representation on a nonzero Hilbert space is a scalar multiple of the identity. ([[thm-schurs-lemma-for-unitary-representations]])

[F4] The normalized coefficient family $\mathcal B$ of the compact group is an orthonormal basis of $L^2$, every irreducible continuous unitary representation of a compact group is finite dimensional, its class lies in the unitary dual, and matrix coefficients are $c^{\pi}_{v,w}(k)=\langle\pi(k)v,w\rangle$. ([[thm-l2-peter-weyl-orthonormal-basis]], [[def-normalized-irreducible-matrix-coefficient-basis]], [[def-matrix-coefficient-of-a-unitary-representation]])

[F5] For an abelian group every $\pi(k)$ commutes with every $\pi(k')$; a one-dimensional continuous unitary representation is a continuous character $\chi:\mathbb T\to\mathbb T$ with $|\chi(k)|=1$ for all $k$. ([[def-strongly-continuous-unitary-representation]], [[def-pontryagin-dual-and-compact-open-topology]])

[F6] A complete orthonormal subfamily of an orthonormal basis is the whole basis: an element of the basis outside the subfamily is orthogonal to the closed span of the subfamily, which is the whole Hilbert space, hence is zero, contradicting unit norm. ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]])

[F7] If $G$ is a compact abelian topological group, its Pontryagin dual is discrete; the circle's Pontryagin dual is its set of continuous characters with the compact-open topology. ([[thm-compact-groups-have-discrete-duals-and-discrete-groups-have-compact-duals]], [[def-pontryagin-dual-and-compact-open-topology]])

## Verification

**Given:** AC, the compact abelian group $\mathbb T=\mathbb R/\mathbb Z$ with normalized Haar measure, and the characters $z^n$, $n\in\mathbb Z$.

1.1 By [F1] the group $\mathbb T$ is a compact abelian topological group, so it carries normalized Haar probability and every irreducible continuous unitary representation of it is subject to the compact theory; let $\pi$ be such a representation on a nonzero Hilbert space $H$; for all $s,t\in\mathbb T$ the operators commute, $\pi(t)\pi(s)=\pi(ts)=\pi(st)=\pi(s)\pi(t)$, so every $\pi(t)$ is a bounded self-intertwiner and [F3] makes it a scalar $\chi(t)$ times the identity; then every one-dimensional subspace of $H$ is $\pi(\mathbb T)$-invariant, so irreducibility forces $\dim H=1$, and $\chi:\mathbb T\to\mathbb T$ is a continuous character because $\pi$ is strongly continuous and unitary [F5], with $|\chi(t)|=1$. The normalized matrix coefficient of the one-dimensional representation $\pi=\chi$ at the unit vector is $\sqrt1\,\langle\chi(t)e_1,e_1\rangle=\chi(t)$; this proves (1). [F1, F3, F4, F5]

1.2 By [F2] the family $\{z^n:n\in\mathbb Z\}$ is orthonormal with closed linear span $L^2(\mathbb T)$, that is, it is a complete orthonormal family; this is (2). [F2]

2.1 By [F2] each $z^n$ is a continuous character, hence a one-dimensional continuous unitary representation of $\mathbb T$, and step 1.1 shows that its normalized matrix coefficient is $z^n$ itself; therefore $\{z^n\}\subseteq\mathcal B$. Since $\mathcal B$ is an orthonormal basis by [F4] and $\{z^n\}$ is a complete orthonormal subfamily by step 1.2, [F6] gives $\mathcal B=\{z^n:n\in\mathbb Z\}$; consequently the unitary dual of $\mathbb T$ is exactly $\{z^n:n\in\mathbb Z\}$, which is in bijection with $\mathbb Z$ because $z^n=z^m$ fails at $[t]=1/(2(n-m))$ when $n\ne m$. The Pontryagin dual of the compact abelian group $\mathbb T$ is discrete by [F7], consistent with this dual being the discrete family of integer characters; the example does not recompute $\operatorname{Hom}_{cts}(\mathbb T,\mathbb T)$. The Peter-Weyl decomposition of $L^2(\mathbb T)$ is therefore the Hilbert direct sum of the one-dimensional blocks $\mathbb Cz^n$, $n\in\mathbb Z$, the classical Fourier series decomposition, and the Parseval identity of the compact theory specializes to the classical Parseval identity for Fourier series and the expansion to Fourier inversion in $L^2$ ([[thm-parseval-identity-for-fourier-series]]); this completes the verification. The Axiom of Choice is inherited through the cited suppliers. [F2, F4, F6, F7, step 1.1, step 1.2] ∎
