---
id: thm-it-quantum-relative-entropy-partial-trace-dpi
kind: theorem
title: Data processing of finite quantum relative entropy under partial trace
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-it-finite-dimensional-quantum-relative-entropy
  - thm-it-quantum-relative-entropy-joint-convexity
  - lem-it-quantum-relative-entropy-isometric-invariance
  - lem-it-finite-weyl-twirl-partial-trace
  - def-qc-partial-trace
  - def-qc-tensor-register-and-permutation
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), Chapter 5"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.double.5.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, second-edition prepublication v8 (2019)"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Statement

Let $H,K$ be nonzero finite-dimensional complex inner-product spaces with $d=\dim K\ge1$, and let $A,B$ be positive semidefinite endomorphisms of $H\otimes K$. Then
$$D(\operatorname{Tr}_K A\Vert\operatorname{Tr}_K B)\le D(A\Vert B),$$
with the extended support convention.

## Facts & Assumptions

**Given:** Nonzero finite-dimensional complex inner-product spaces $H,K$, $d=\dim K\ge1$, and positive semidefinite $A,B$ on $H\otimes K$.

[F1] [[def-it-finite-dimensional-quantum-relative-entropy]]: $D(A\Vert B)$ is finite exactly on support inclusion and is $+\infty$ otherwise, using the spectral trace formula.

[F2] [[thm-it-quantum-relative-entropy-joint-convexity]]: finite convex averages of positive semidefinite pairs satisfy joint convexity, including extended values.

[F3] [[lem-it-quantum-relative-entropy-isometric-invariance]]: simultaneous conjugation by an isometry preserves $D$ with the support convention.

[F4] [[lem-it-finite-weyl-twirl-partial-trace]]: averaging the finite Weyl conjugates on K gives $(\operatorname{Tr}_K R)\otimes I_K/d$ for every operator $R$.

[F5] [[def-qc-partial-trace]] and [[def-qc-tensor-register-and-permutation]]: the retained factor order and partial-trace matrix-block formula are fixed by the ordered product basis.

## Proof

1.1 Let $U_{pq}=I_H\otimes X^pZ^q$ from [F4], and let $\mathcal T(R)=d^{-2}\sum_{p,q}U_{pq}RU_{pq}^\dagger$. The Weyl proof in [F4] verifies that every $X^pZ^q$ is unitary, so each $U_{pq}$ and each conjugate $U_{pq}AU_{pq}^\dagger$, $U_{pq}BU_{pq}^\dagger$ is respectively unitary or positive semidefinite. Their finite averages are positive semidefinite as well. By [F4], $\mathcal T(A)=C\otimes I_K/d$ and $\mathcal T(B)=D\otimes I_K/d$, where $C=\operatorname{Tr}_K A$ and $D=\operatorname{Tr}_K B$; positivity of these tensor products implies $C,D$ are positive semidefinite by evaluating on $x\otimes e$ for a unit vector $e\in K$. [given, F4, F5, algebra]

1.2 For any positive semidefinite $C,D$ on $H$, support inclusion for $(C,D)$ is equivalent to support inclusion for $(C\otimes I_K/d,D\otimes I_K/d)$ because $I_K/d$ is positive definite and its support is all of $K$. In the finite branch, spectral calculus on the product basis gives $\ln(C\otimes I_K/d)=(\ln C)\otimes I_K-(\ln d)I$ on its support, and the analogous formula for $D$. The product-basis trace factors as $\operatorname{tr}(R\otimes S)=\operatorname{tr}(R)\operatorname{tr}(S)$, since its diagonal entries are all products of the diagonal entries of $R$ and $S$. Since $\operatorname{tr}(I_K/d)=1$, this gives $$\operatorname{tr}((C\otimes I_K/d)\ln(C\otimes I_K/d))=\operatorname{tr}(C\ln C)-(\ln d)\operatorname{tr}(C),$$ $$\operatorname{tr}((C\otimes I_K/d)\ln(D\otimes I_K/d))=\operatorname{tr}(C\ln D)-(\ln d)\operatorname{tr}(C).$$ The scalar terms cancel in their difference, giving $D(C\otimes I_K/d\Vert D\otimes I_K/d)=D(C\Vert D)$. If support inclusion fails, both sides are $+\infty$ by [F1]. [given, F1, F5, algebra]

2.1 Apply [F2] to the uniform finite family of conjugate pairs and then [F3] to each unitary $U_{pq}$. The result is $$D(C\otimes I_K/d\Vert D\otimes I_K/d)=D(\mathcal T(A)\Vert\mathcal T(B))\le d^{-2}\sum_{p,q}D(U_{pq}AU_{pq}^\dagger\Vert U_{pq}BU_{pq}^\dagger)=D(A\Vert B).$$ The inequality is in the extended real order, so it also holds if the right side is $+\infty$. [given, F2, F3, step 1.1, algebra]

3.1 Substitute the C,D from step 1.1 into step 1.2 and then use step 2.1. This yields $D(\operatorname{Tr}_K A\Vert\operatorname{Tr}_K B)\le D(A\Vert B)$, as required. [step 1.1, step 2.1, step 1.2, algebra] ∎
