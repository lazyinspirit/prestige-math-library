---
id: lem-finite-rank-spectral-pieces-of-compact-convolution
kind: lemma
title: Finite-rank spectral pieces of a self-adjoint compact convolution operator
deps:
- lem-compact-convolution-operators-commute-with-right-translations
- lem-compact-convolution-operators-are-hilbert-schmidt
- thm-spectral-theorem-for-compact-self-adjoint-operators
- cor-orthonormal-eigenbasis-for-a-compact-self-adjoint-operator
- lem-eigenspaces-of-a-self-adjoint-operator-are-orthogonal
- def-left-and-right-regular-unitary-representations
- thm-regular-representations-are-unitary-and-strongly-continuous
- def-compact-linear-operator
- def-hilbert-space
- def-orthogonality-and-orthogonal-complement
- thm-orthogonal-decomposition-by-a-closed-subspace
- def-axiom-of-choice
- def-hilbert-direct-sum-of-unitary-representations
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
    locator: Ch. 5 §5.4, printed p. 233
  - title: Terence Tao, 254A Notes 3 (author-hosted lecture notes, 2011)
    url: https://terrytao.wordpress.com/2011/09/27/254a-notes-3-haar-measure-and-the-peter-weyl-theorem/
    locator: Theorem 6 (spectral theorem) and the proof of Theorem 7 (baby Peter-Weyl)
status: published
origin: pipeline
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $K$ be a compact Hausdorff group with normalized Haar probability $\mu$ and let $\varphi\in L^2(K,\mu;\mathbb C)$ satisfy $\varphi^*=\varphi$, so $C_\varphi$ is compact and self-adjoint ([[lem-compact-convolution-operators-commute-with-right-translations]], [[lem-compact-convolution-operators-are-hilbert-schmidt]]). Let $\Sigma=\{\lambda\ne0:\lambda\text{ is an eigenvalue of }C_\varphi\}$ and $E_\lambda=\ker(C_\varphi-\lambda I)$.

1. $\Sigma$ is finite or countably infinite, each $E_\lambda$ is finite dimensional, distinct eigenspaces are orthogonal, and the closed linear span of $\bigcup_{\lambda\in\Sigma}E_\lambda$ is $(\ker C_\varphi)^\perp$, so $L^2(K)=\ker C_\varphi\oplus\widehat\bigoplus_{\lambda\in\Sigma}E_\lambda$ is an orthogonal Hilbert-space direct sum.
2. Every $E_\lambda$ ($\lambda\in\Sigma$) and $\ker C_\varphi$ are invariant under the right regular representation $\rho$; consequently each $E_\lambda$ is a finite-dimensional continuous unitary representation of $K$ under $\rho$.

## Facts & Assumptions

[F1] The spectral theorem for a compact self-adjoint operator $T$ on a Hilbert space $H$: the set $\Sigma$ of nonzero eigenvalues is finite or countably infinite, each eigenspace $E_\lambda=\ker(T-\lambda I)$ is finite dimensional, the closed linear span $M$ of $\bigcup_{\lambda\in\Sigma}E_\lambda$ equals $(\ker T)^\perp$, and $H=M\oplus M^\perp$ with $M^\perp\subseteq\ker T$. ([[thm-spectral-theorem-for-compact-self-adjoint-operators]])

[F2] Eigenspaces of a self-adjoint operator belonging to distinct eigenvalues are orthogonal. ([[lem-eigenspaces-of-a-self-adjoint-operator-are-orthogonal]])

[F3] Under $\varphi^*=\varphi$ the convolution operator $C_\varphi$ is compact and self-adjoint, and each eigenspace $\ker(C_\varphi-\lambda I)$ and the kernel $\ker C_\varphi$ are invariant under the right regular representation $\rho$. ([[lem-compact-convolution-operators-commute-with-right-translations]], [[lem-compact-convolution-operators-are-hilbert-schmidt]])

[F4] For pairwise orthogonal closed subspaces whose closed linear span is $H$, the canonical map from their Hilbert direct sum onto $H$ is a unitary intertwiner; and a representation that restricts to representations on such a family of $\pi(K)$-invariant subspaces is the Hilbert direct sum of those subrepresentations. ([[def-hilbert-direct-sum-of-unitary-representations]])

[F5] Every closed linear subspace $M$ of a Hilbert space satisfies $H=M\oplus M^\perp$. ([[thm-orthogonal-decomposition-by-a-closed-subspace]], [[def-orthogonality-and-orthogonal-complement]])

[F6] The right regular representation $\rho$ is a strongly continuous unitary representation of $K$ on $L^2(K)$, and its restriction to a closed invariant subspace is again a strongly continuous unitary representation. ([[thm-regular-representations-are-unitary-and-strongly-continuous]], [[def-left-and-right-regular-unitary-representations]])

## Proof

**Given:** AC, a compact Hausdorff group $K$ with normalized Haar probability $\mu$, a class $\varphi\in L^2(K)$ with $\varphi^*=\varphi$, the compact self-adjoint operator $C_\varphi$, and the set $\Sigma$ of its nonzero eigenvalues with eigenspaces $E_\lambda$.

1.1 The spectral theorem [F1] applied to $T=C_\varphi$ gives that $\Sigma$ is finite or countably infinite, that every $E_\lambda$ is finite dimensional, and that the closed linear span $M$ of $\bigcup_{\lambda\in\Sigma}E_\lambda$ equals $(\ker C_\varphi)^\perp$; distinct eigenspaces are orthogonal by [F2]; [F5] applied to the closed subspace $M$ gives $L^2(K)=M\oplus M^\perp$ with $M=(\ker C_\varphi)^\perp$, so $M^\perp=\ker C_\varphi$ and hence $L^2(K)=\ker C_\varphi\oplus M$ as an orthogonal decomposition; since the $E_\lambda$ are pairwise orthogonal closed subspaces with closed linear span $M$, the canonical map $\widehat\bigoplus_{\lambda\in\Sigma}E_\lambda\to M$ is a unitary isomorphism by [F4], so $L^2(K)=\ker C_\varphi\oplus\widehat\bigoplus_{\lambda\in\Sigma}E_\lambda$ is an orthogonal Hilbert-space direct sum; this is (1). [F1, F2, F4, F5]

2.1 By the choice $\varphi^*=\varphi$ and [F3], every $E_\lambda$ and $\ker C_\varphi$ is invariant under the right regular representation $\rho$; each $E_\lambda$ is closed and finite dimensional by step 1.1, and by [F6] the restriction of $\rho$ to $E_\lambda$ is a strongly continuous unitary representation of $K$, hence a finite-dimensional continuous unitary representation; this is (2), and it also exhibits $\rho$ as the Hilbert direct sum of these subrepresentations and the kernel by [F4]. The Axiom of Choice is consumed through the normalized Haar probability, the compact self-adjoint spectral theorem and the cited Hilbert-space suppliers; the argument above is choice-free apart from those inputs. [F3, F4, F6, step 1.1] ∎
