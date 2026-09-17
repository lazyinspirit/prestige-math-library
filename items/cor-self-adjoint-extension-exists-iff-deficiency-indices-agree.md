---
id: cor-self-adjoint-extension-exists-iff-deficiency-indices-agree
kind: corollary
title: "Existence of self-adjoint extensions is equality of deficiency indices"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-von-neumann-self-adjoint-extension-parameterization, def-deficiency-subspaces-and-deficiency-indices, thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set, thm-existence-of-a-maximal-orthonormal-family, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, thm-self-adjointness-range-criterion, thm-closable-iff-adjoint-domain-is-dense, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-axiom-of-choice, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Theorem 2.27 and Section 2.2, pp.66-69 and 91-95"
    - title: "Theo Buehler and Dietmar A. Salamon, Functional Analysis"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
      locator: "Chapter 6, Sec. 6.3.2"
---

## Statement

Assume the Axiom of Choice. Let $T$ be a densely defined closed symmetric
operator on $H$, with deficiency indices $d_\pm(T)$
([[def-deficiency-subspaces-and-deficiency-indices]]). Then $T$ has a
self-adjoint extension if and only if $d_+(T)=d_-(T)$. Moreover $T$ is
self-adjoint if and only if $d_+(T)=d_-(T)=0$, and a densely defined symmetric
(not necessarily closed) operator $S$ is essentially self-adjoint if and only
if $d_\pm(\overline S)=0$, equivalently $\ker(S^*\mp i)=\{0\}$; if
$d_+(\overline S)=d_-(\overline S)$, then $S$ has self-adjoint extensions.

## Facts & Assumptions

[A1] Unitary operators $K_+\to K_-$ correspond bijectively to self-adjoint extensions of $T$; every such unitary is onto by definition, and the Cayley transform $U_S$ of a self-adjoint extension restricts to a unitary $K_+\to K_-$ ([[thm-von-neumann-self-adjoint-extension-parameterization]]).

[A2] Every Hilbert space has a complete orthonormal family, and two Hilbert spaces are unitarily isomorphic exactly when their orthonormal bases have the same cardinality; a unitary $K_+\to K_-$ exists exactly when $\dim K_+=\dim K_-$ ([[thm-existence-of-a-maximal-orthonormal-family]], [[thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).

[A3] A closed symmetric operator is self-adjoint if and only if $\ker(T^*\mp i)=\{0\}$, equivalently $\operatorname{ran}(T\pm i)=H$ ([[thm-self-adjointness-range-criterion]]).

[A4] For a densely defined symmetric $S$ one has $\overline S=S^{**}$ and $S^*=(\overline S)^*$; $S$ is essentially self-adjoint exactly when $\overline S$ is self-adjoint ([[thm-closable-iff-adjoint-domain-is-dense]], [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]).

## Proof

**Proof technique:** direct.

**Given:** A densely defined closed symmetric operator $T$, and a densely defined symmetric operator $S$.

1.1 If $d_+(T)=d_-(T)$, then by [A2] there is a unitary $V:K_+\to K_-$ (equal Hilbert dimensions), and [A1] produces a self-adjoint extension $T_V$ of $T$. Conversely, if $T$ has a self-adjoint extension $S$, then by [A1] its Cayley transform restricts to a unitary $K_+\to K_-$, so $\dim K_+=\dim K_-$ by [A2]. [A1, A2]

1.2 $T$ is self-adjoint if and only if $d_+=d_-=0$: if both deficiency subspaces are zero then $\ker(T^*\mp i)=\{0\}$ and [A3] applies; conversely a self-adjoint $T$ has $T^*=T$ and $T\mp i$ injective by the estimate $\|(T\mp i)x\|\ge\|x\|$, so both kernels vanish. [A3]

2.1 For $S$ symmetric, $\overline S$ is closed and symmetric by [A4], and $\ker(S^*\mp i)=\ker((\overline S)^*\mp i)$ because $S^*=(\overline S)^*$; applying steps 1.1-1.2 to $\overline S$ gives: $S$ is essentially self-adjoint, meaning $\overline S$ self-adjoint, if and only if $d_\pm(\overline S)=0$; if $d_+(\overline S)=d_-(\overline S)$ then $\overline S$ has a self-adjoint extension, which is also an extension of $S$. [A4, step 1.1, step 1.2]

3.1 All the stated equivalences are steps 1.1, 1.2 and 2.1. ∎
