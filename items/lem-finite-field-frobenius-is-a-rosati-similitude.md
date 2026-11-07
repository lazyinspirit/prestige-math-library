---
id: lem-finite-field-frobenius-is-a-rosati-similitude
kind: lemma
title: "Finite-field Frobenius is a Rosati similitude"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: locally-derived
  proof: ai-generated
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-polarization-of-an-abelian-variety
  - thm-abelian-variety-dual-and-polarization
  - lem-theorem-of-the-square-and-mumford-homomorphism
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Abelian Varieties, §14"
      url: "https://www.jmilne.org/math/CourseNotes/AV.pdf"
      locator: "Printed p. 61: the Rosati involution defined by a polarization."
---

## Statement

Assume AC and DC. Let $A$ be an abelian variety over $k=\mathbb F_q$, let $\mathcal L$ be an ample invertible sheaf on $A$, and let $\lambda=\varphi_{\mathcal L}:A\to A^\vee$ be its polarization. Let $\pi:A\to A$ be the $q$-power Frobenius, and define the Rosati involution on $\operatorname{End}^0(A)=\operatorname{End}(A)\otimes\mathbb Q$ by $u^\dagger=\lambda^{-1}u^\vee\lambda$. Then
$$\pi^\dagger\pi=q\,1\quad\text{in }\operatorname{End}^0(A).$$

## Facts & Assumptions

**Given:** AC, DC, $k,q,A,\mathcal L,\lambda,\pi$ as stated.

[A1] AC and DC are assumed. [[def-axiom-of-choice]], [[def-dependent-choice]]

[F1] The ample line bundle $\mathcal L$ defines the polarization isogeny $\lambda=\varphi_{\mathcal L}$, and the dual is contravariantly functorial. [[def-polarization-of-an-abelian-variety]], [[thm-abelian-variety-dual-and-polarization]]

[F2] The Mumford map is represented by translation of the line bundle and is a homomorphism. [[lem-theorem-of-the-square-and-mumford-homomorphism]]

## Proof

**Proof technique:** compute Frobenius on line-bundle transition functions and apply Picard functoriality.

1.1 Choose local trivializations of $\mathcal L$ with invertible transition functions $g_{ij}$. The pullback under the $q$-power Frobenius has transition functions $g_{ij}^{q}$, exactly those of $\mathcal L^{\otimes q}$. The identification is independent of the trivializations because changing one by a unit $u$ changes both sides by $u^q$. Thus $\pi^*\mathcal L\cong\mathcal L^{\otimes q}$. [given, construct]

1.2 For any group homomorphism $f:A\to A$, F2 gives $\varphi_{f^*\mathcal L}=f^\vee\varphi_{\mathcal L}f$: for a point $a$, the translation identity $f\circ t_a=t_{f(a)}\circ f$ identifies $t_a^*f^*\mathcal L\otimes(f^*\mathcal L)^{-1}$ with $f^*(t_{f(a)}^*\mathcal L\otimes\mathcal L^{-1})$, and F1 identifies pullback on the dual with $f^\vee$. The same formula for tensor powers gives $\varphi_{\mathcal L^{\otimes q}}=q\varphi_{\mathcal L}$. These pointwise identities are functorial in base change and hence identify the represented homomorphisms. [F1, F2, given, algebra]

2.1 Apply step 1.2 to $f=\pi$ and use step 1.1: $\pi^\vee\lambda\pi=\varphi_{\pi^*\mathcal L}=\varphi_{\mathcal L^{\otimes q}}=q\lambda$. By F1, $\lambda$ is an isogeny and hence invertible in the rational homomorphism category. Multiplication on the left by $\lambda^{-1}$ gives $\pi^\dagger\pi=q1$. [A1, F1, step 1.1, step 1.2, algebra] ∎
