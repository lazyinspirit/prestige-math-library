---
id: cor-orthonormal-eigenbasis-for-a-compact-self-adjoint-operator
kind: corollary
title: Orthonormal eigenbasis for a compact self adjoint operator
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-spectral-theorem-for-compact-self-adjoint-operators, lem-eigenspaces-of-a-self-adjoint-operator-are-orthogonal, def-self-adjoint-positive-unitary-and-normal-operator, thm-hilbert-adjoint-properties, def-hilbert-space-adjoint, def-compact-linear-operator, def-eigenvalue-eigenvector-eigenspace-and-spectrum, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-orthogonality-and-orthogonal-complement, lem-orthogonal-complement-is-closed, thm-orthogonal-decomposition-by-a-closed-subspace, thm-complete-subspace-iff-closed, thm-zorn, def-axiom-of-choice, def-maximal-element, def-partial-order, def-chain, def-upper-bound, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, def-hilbert-space, def-linear-subspace, def-real-and-complex-inner-product-space, def-countable-choice, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §3.2, Corollary 3.9 (printed p. 78)"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Anthony W. Knapp, Advanced Real Analysis — Chapter II, §2, Theorem 2.3"
      url: "https://www.math.stonybrook.edu/~aknapp/download/a2-realanal-inside.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $H$ be a real or
complex Hilbert space ([[def-hilbert-space]]) and let $T\in\mathcal B(H)$ be a
compact self-adjoint operator ([[def-compact-linear-operator]],
[[def-self-adjoint-positive-unitary-and-normal-operator]]). Then $T$ has a
Hilbert basis ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]])
consisting of eigenvectors of $T$
([[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]): one may take the union
of orthonormal bases of the finitely many-dimensional nonzero eigenspaces with a
Hilbert basis of $\ker T$. If $\ker T=\{0\}$ no vectors from the kernel are
needed, and if all nonzero eigenspaces are absent (that is $T=0$) the union is a
Hilbert basis of $H=\ker T$.

## Facts & Assumptions

**Given:** AC, a real or complex Hilbert space $H$, a compact self-adjoint $T$, the set $\Sigma$ of its nonzero eigenvalues, the eigenspaces $E_\lambda$ for $\lambda\in\Sigma$, and $M:=\overline{\operatorname{span}}\bigcup_{\lambda\in\Sigma}E_\lambda$.

[A1] **Spectral theorem.** $\Sigma$ is finite or countably infinite with finite multiplicities, the nonzero eigenvalues are real and distinct eigenspaces are orthogonal, $M=(\ker T)^\perp=\overline{\operatorname{ran}T}$ and $H=M\oplus M^\perp$ with $M^\perp=\ker T$ ([[thm-spectral-theorem-for-compact-self-adjoint-operators]], [[lem-eigenspaces-of-a-self-adjoint-operator-are-orthogonal]], [[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]).

[A2] **Orthonormal families.** An orthonormal family has unit vectors which are pairwise orthogonal, and every finite-dimensional real or complex inner product space has an orthonormal basis, the empty one in dimension zero; the closed linear span of an orthonormal family is a closed subspace, and a Hilbert basis is a complete orthonormal family ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]], [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]).

[A3] **Complements.** $S^\perp$ is a closed linear subspace for every subset $S$; orthogonality is symmetric and bilinear in the obvious sense; for closed $M$ one has $H=M\oplus M^\perp$ with $M^{\perp\perp}=M$ ([[def-orthogonality-and-orthogonal-complement]], [[lem-orthogonal-complement-is-closed]], [[thm-orthogonal-decomposition-by-a-closed-subspace]]).

[A4] **Zorn and AC data.** Under AC every nonempty poset in which every chain has an upper bound has a maximal element ([[thm-zorn]], [[def-axiom-of-choice]], [[def-partial-order]], [[def-chain]], [[def-upper-bound]], [[def-maximal-element]]); AC implies $\mathrm{AC}_\omega$ ([[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]], [[def-countable-choice]]).

[A5] **Closed subspaces are complete.** A closed subspace of a complete metric space is complete in ZF, so a closed subspace of a Hilbert space is again a Hilbert space ([[thm-complete-subspace-iff-closed]], [[def-hilbert-space]]). The set of orthonormal families in a subset of $H$ is a poset under inclusion, and the inclusion-union of a chain of orthonormal families is orthonormal ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]], [[def-partial-order]], [[def-chain]]).

## Proof

**Proof technique:** direct.

**Given:** AC, the compact self-adjoint $T$, the nonzero eigenspaces $E_\lambda$, their closed span $M$, and the kernel $K_0:=\ker T$.

1.1 **An orthonormal family spanning $M$.** For every $\lambda\in\Sigma$ the eigenspace $E_\lambda$ is finite-dimensional by [A1], so it has an orthonormal basis by [A2]; the disjoint union $E$ of all these finite bases is an orthonormal family, because each basis is orthonormal and vectors belonging to distinct eigenvalues are orthogonal by [A1]. Its closed linear span is $M$ by the definition of $M$, and $M=(\ker T)^\perp$ by [A1]. [A1, A2]

1.2 **A maximal orthonormal family in the kernel.** Let $P$ be the set of orthonormal families contained in $\ker T$, ordered by inclusion. This is a nonempty poset (the empty family belongs to it) and the union of any chain in $P$ is again an orthonormal family contained in $\ker T$, hence an upper bound of the chain; therefore Zorn's lemma [A4] provides a maximal element $B\in P$. [A2, A4, A5]

2.1 **$B$ is complete in the kernel.** Let $W:=\overline{\operatorname{span}}B\subseteq\ker T$ be the closed span of $B$, which is a closed subspace of the Hilbert space $\ker T$ [A5]; if $W\ne\ker T$ then by the orthogonal decomposition in the Hilbert space $\ker T$ [A3] there is $v\in\ker T\cap W^\perp$ with $v\ne0$. Then $v/\|v\|$ has norm $1$, is orthogonal to every element of $B$, and lies in $\ker T$, so $B\cup\{v/\|v\|\}$ is an orthonormal family in $\ker T$ strictly containing $B$, contradicting maximality; hence $W=\ker T$, that is $B$ is a complete orthonormal family of the Hilbert space $\ker T$. [step 1.2, A2, A3, A5]

3.1 **The union is a Hilbert basis of $H$.** The union $E\cup B$ is an orthonormal family: it is the union of two orthonormal families, and every $b\in B\subseteq\ker T$ is orthogonal to every $e\in E\subseteq M=(\ker T)^\perp$ by [step 1.1] and [A1]. Its closed linear span contains $M$ (by [step 1.1]) and $\ker T$ (by [step 2.1]), hence contains $M\oplus\ker T=H$ by [A1]; therefore $E\cup B$ is complete and is a Hilbert basis of $H$. [step 1.1, step 2.1, A1, A2, A3]

4.1 **Conclusion.** Every element of $E\cup B$ is an eigenvector of $T$: the vectors of $E$ lie in nonzero eigenspaces, while every $b\in B$ is a unit vector in $\ker T$, so $b\ne0$ and $Tb=0=0b$ ([[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]). Thus, whenever $B$ is nonempty, $0$ is an eigenvalue witnessed by each of its members; when $\ker T=\{0\}$ one has $B=\varnothing$, and the proof neither needs nor asserts that $0$ is an eigenvalue. By [step 3.1] the family $E\cup B$ is a Hilbert basis of $H$ consisting of eigenvectors of $T$, which proves the corollary; the degenerate descriptions in the statement are the cases $M=\{0\}$ (then $E=\varnothing$ and $B$ spans $\ker T=H$) and $\ker T=\{0\}$ (then $B=\varnothing$). [step 3.1, A1, A2, A4] ∎
