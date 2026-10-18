---
id: lem-it-quantum-relative-entropy-isometric-invariance
kind: lemma
title: Isometric invariance of finite quantum relative entropy
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-it-finite-dimensional-quantum-relative-entropy, def-adjoint-of-a-linear-map-between-inner-product-spaces, thm-non-negative-operator-characterisations, thm-trace-of-ab-equals-trace-of-ba, thm-adjoint-exists-and-is-unique-in-finite-dimension]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, Proposition 5.19"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, arXiv:1106.1445v8, Exercise 11.8.6"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Statement

Let $V:H\to K$ be a linear map between finite-dimensional complex inner-product spaces satisfying $V^*V=I_H$, and let $A,B$ be non-negative on $H$. Then

$$D(VAV^*\|VBV^*)=D(A\|B).$$

## Facts & Assumptions

**Given:** $V,A,B$ as in the Statement.

[F1] [[def-it-finite-dimensional-quantum-relative-entropy]]: support inclusion determines the finite branch of $D$; its value is computed from spectral logarithms on the supports.

[F2] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]: $V^*V=I_H$ implies $\langle Vx,Vy\rangle=\langle x,y\rangle$ for every $x,y\in H$.

[F3] [[thm-non-negative-operator-characterisations]]: non-negative operators have orthonormal eigenbases with nonnegative eigenvalues.

[F4] [[thm-trace-of-ab-equals-trace-of-ba]]: trace is cyclic for compatible finite-dimensional operators.

[F5] [[thm-adjoint-exists-and-is-unique-in-finite-dimension]]: every linear map between finite-dimensional inner-product spaces has a unique linear adjoint, including zero-dimensional spaces.

## Proof

1.1 All adjoints of the finite-dimensional linear maps used below exist uniquely by [F5]. Let $M=\operatorname{ran}V$. Since $V$ is an isometry, it maps an orthonormal eigenbasis of $A$ to an orthonormal eigenbasis of $VAV^*$ on $M$ with the same nonzero eigenvalues; $VAV^*$ is zero on $M^\perp$. The same holds for $B$. Consequently $\operatorname{supp}(VAV^*)=V(\operatorname{supp}A)$ and $\operatorname{supp}(VBV^*)=V(\operatorname{supp}B)$, so support inclusion holds on one side exactly when it holds on the other. [given, F5, F2, F3, algebra]

2.1 On $M$, spectral calculus gives $\ln(VAV^*)=V(\ln A)V^*$ on the positive support of $A$, with the analogous identity for $B$; on $M^\perp$ both conjugated operators contribute zero to the support-restricted traces. Thus in the finite branch, cyclicity [F4] gives $\operatorname{tr}(VAV^*\ln(VAV^*))=\operatorname{tr}(A\ln A)$ and $\operatorname{tr}(VAV^*\ln(VBV^*))=\operatorname{tr}(A\ln B)$. By [F1] their difference is $D(A\|B)$. If support inclusion fails, step 1.1 shows both sides are $+\infty$ by [F1]. [given, F1, F3, F4, step 1.1, cases, algebra] ∎

