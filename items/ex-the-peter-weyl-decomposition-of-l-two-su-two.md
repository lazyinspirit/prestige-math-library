---
id: ex-the-peter-weyl-decomposition-of-l-two-su-two
kind: example
title: Peter–Weyl decomposition of L2(SU(2))
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-peter-weyl-for-compact-lie-groups, thm-highest-weight-classification-of-finite-dimensional-irreducible-representations, prop-highest-weight-of-the-dual-representation, def-axiom-of-choice, thm-finite-dimensional-representations-of-sl-two]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §3 (the SU(2) Peter–Weyl decomposition)"
proof_strategy: direct
---

## Example

Assume the Axiom of Choice. As an $SU(2)\times SU(2)$-module,
$$L^2(SU(2))\cong\widehat{\bigoplus_{n\ge0}}\ V(n)\otimes V(n)^*,$$
the Hilbert direct sum over $n\ge0$ of the tensor products of the irreducible
representation of highest weight $n$ with its dual; under the left action alone,
$V(n)$ occurs with multiplicity $n+1$.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice; $SU(2)$ with normalized Haar measure and the two-sided regular action of $SU(2)\times SU(2)$ on $L^2(SU(2))$.

[L1] The normalized matrix coefficients $\sqrt{d_\pi}\pi_{ij}$ form an orthonormal Hilbert basis of $L^2(G)$, and the $\pi$-isotypic summand of the left regular representation has multiplicity $d_\pi$ ([[thm-peter-weyl-for-compact-lie-groups]]).

[L2] Irreducible finite-dimensional representations of $SU(2)$ are the $V(n)$ of highest weight $n\ge0$, and the dual of $V(n)$ is irreducible of the same dimension ([[thm-highest-weight-classification-of-finite-dimensional-irreducible-representations]], [[prop-highest-weight-of-the-dual-representation]]).

[L3] For a finite-dimensional irreducible module over $\mathfrak{sl}_2$ of highest weight $n$, the weights are $n,n-2,\dots,-n$, each on a one-dimensional space; hence $\dim V(n)=n+1$ ([[thm-finite-dimensional-representations-of-sl-two]]).

## Verification

**Proof technique:** direct.

1.1 The matrix coefficients $g\mapsto\langle gv,w\rangle$ of $V(n)$ are the entries of the linear map $V(n)^*\otimes V(n)\to C(G)$, with the left action on the $V(n)$ factor and the right action on the dual factor, by the definition of the two-sided regular action; hence the $V(n)$-matrix coefficients span a copy of $V(n)^*\otimes V(n)$ inside $L^2(G)$. [L1, L2]

1.2 Schur orthogonality implies that matrix coefficients belonging to inequivalent irreducible representations are orthogonal, so the subspaces $V(n)^*\otimes V(n)$ for distinct $n$ are pairwise orthogonal in $L^2(SU(2))$. [L1, L2]

2.1 By [L1] the union over $n$ of these orthonormal families is a complete orthonormal family of $L^2(SU(2))$, so the algebraic direct sum of the $V(n)^*\otimes V(n)$ is dense and the Hilbert direct sum is all of $L^2(SU(2))$; this is the displayed decomposition, and forgetting the right action reproduces each $V(n)^{\dim V(n)}$ in the left regular representation. [L1, step 1.2]

3.1 By [L3] one has $\dim V(n)=n+1$, so the multiplicity of $V(n)$ under the left action is $\dim V(n)=n+1$, as claimed. [L1, L3, step 2.1] ∎
