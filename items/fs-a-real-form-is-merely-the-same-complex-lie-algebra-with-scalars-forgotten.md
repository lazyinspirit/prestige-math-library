---
id: fs-a-real-form-is-merely-the-same-complex-lie-algebra-with-scalars-forgotten
kind: false-statement
title: A real form is merely the same complex lie algebra with scalars forgotten
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-real-form-of-a-complex-lie-algebra, thm-real-forms-correspond-to-conjugate-linear-involutions, def-complexification-of-a-real-lie-algebra, prop-complexification-has-a-canonical-conjugation-with-fixed-algebra-g-zero]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §1, real forms and the compact real form of sl(2,C), printed pp. 348-353"
landmark: false
proof_strategy: counterexample
verification:
  audited: 2026-09-22
---

## Statement

False as stated in general: a real form of a complex Lie algebra is merely the
same complex Lie algebra with the scalars forgotten.

## Facts & Assumptions

**Given:** The complex Lie algebra $\mathfrak{sl}_2(\mathbb C)$ of traceless complex $2\times2$ matrices, its realification $\mathfrak{sl}_2(\mathbb C)_{\mathbb R}$, and the unitary algebra $\mathfrak{su}(2)=\{X\in\mathfrak{sl}_2(\mathbb C):X^{*}=-X\}$.

[L1] A real form of a complex Lie algebra $\mathfrak g$ is a real Lie subalgebra $\mathfrak g_0$ with $\mathfrak g=\mathfrak g_0\oplus i\mathfrak g_0$ as a real direct sum; equivalently, by the correspondence between real forms and conjugate-linear involutions, the fixed locus of a conjugate-linear involutive automorphism of $\mathfrak g$ ([[def-real-form-of-a-complex-lie-algebra]], [[thm-real-forms-correspond-to-conjugate-linear-involutions]]).

[L2] For a real Lie algebra $\mathfrak h_0$ with complexification $\mathfrak h_0\otimes_{\mathbb R}\mathbb C$ the map $X\otimes z\mapsto X\otimes\bar z$ is a conjugate-linear involutive automorphism with fixed locus $\mathfrak h_0\otimes1$, and the canonical embedding is injective ([[prop-complexification-has-a-canonical-conjugation-with-fixed-algebra-g-zero]], [[def-complexification-of-a-real-lie-algebra]]).

## Refutation

**Proof technique:** counterexample.

1.1 The realification $\mathfrak g_{\mathbb R}$ of a complex Lie algebra $\mathfrak g=\mathfrak{sl}_2(\mathbb C)$ is the same set with the scalar multiplication restricted to $\mathbb R$; it has real dimension $2\dim_{\mathbb C}\mathfrak g=6$, and it is closed under multiplication by $i$, that is $i\,\mathfrak g_{\mathbb R}=\mathfrak g_{\mathbb R}$. [L1, algebra]

1.2 The unitary algebra $\mathfrak{su}(2)=\{X\in\mathfrak{sl}_2(\mathbb C):X^{*}=-X\}$ has real dimension $3$, and it is a real form of $\mathfrak{sl}_2(\mathbb C)$: the map $\sigma(X)=-X^{*}$ is conjugate-linear with $\sigma^2=\mathrm{id}$, it preserves brackets because the conjugate transpose is an anti-automorphism with $[X,Y]^{*}=-[X^{*},Y^{*}]$, and its fixed locus is exactly $\mathfrak{su}(2)$, so by [L1] the unitary algebra is a real form. [L1, algebra]

2.1 The two real Lie algebras $\mathfrak{su}(2)$ and $\mathfrak{sl}_2(\mathbb C)_{\mathbb R}$ have different dimensions, $3$ and $6$, by steps 1.1 and 1.2, so they are not equal and not even isomorphic as real Lie algebras; and the structural difference is exactly the scalar action, since $\mathfrak{su}(2)\cap i\,\mathfrak{su}(2)=0$ while $i\,\mathfrak{sl}_2(\mathbb C)_{\mathbb R}=\mathfrak{sl}_2(\mathbb C)_{\mathbb R}$. [step 1.1, step 1.2]

3.1 The real form $\mathfrak{su}(2)$ of $\mathfrak{sl}_2(\mathbb C)$ is therefore not the underlying real Lie algebra of $\mathfrak{sl}_2(\mathbb C)$, and in general a real form $\mathfrak g_0$ of a positive-dimensional complex Lie algebra has $\dim_{\mathbb R}\mathfrak g_0=\dim_{\mathbb C}\mathfrak g$ and $\mathfrak g_0\cap i\mathfrak g_0=0$, while the scalar-forgetful realification has twice that real dimension and is closed under multiplication by $i$; the only case in which the two can be identified is the zero algebra. What is true is the converse direction: the complexification of the real form recovers the complex algebra, $\mathfrak g_0\otimes_{\mathbb R}\mathbb C\cong\mathfrak g$, so a real form is a fixed real Lie algebra below $\mathfrak g$ and not $\mathfrak g$ with its scalars forgotten. [L1, L2, step 2.1] ∎
