---
id: lem-kernel-range-orthogonality-for-hilbert-adjoints
kind: lemma
title: Kernel–range orthogonality for Hilbert adjoints
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-hilbert-space-adjoint, thm-hilbert-adjoint-properties, thm-double-orthogonal-complement-is-closure, def-orthogonality-and-orthogonal-complement, def-linear-subspace, def-bounded-linear-operator, def-real-and-complex-inner-product-space, def-countable-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, Lemma 5.38, p.238"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis, Theorem 185"
      url: "https://live.ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
---

## Statement

Assume the Axiom of Countable Choice. Let $T\in\mathcal B(H,K)$ be a bounded linear operator between real or complex Hilbert spaces, with kernel $\ker T=\{x:Tx=0\}$, range $\operatorname{ran}T=T[H]$ and Hilbert adjoint $T^*\in\mathcal B(K,H)$. Then

$$(\operatorname{ran}T)^\perp=\ker T^*,\qquad (\operatorname{ran}T^*)^\perp=\ker T ,$$

and consequently

$$\overline{\operatorname{ran}T}=(\ker T^*)^\perp,\qquad \overline{\operatorname{ran}T^*}=(\ker T)^\perp .$$

## Facts & Assumptions

[A1] $\langle Tx,y\rangle_K=\langle x,T^*y\rangle_H$ for all $x\in H$, $y\in K$, and the adjoint is a bounded linear operator ([[def-hilbert-space-adjoint]], [[def-bounded-linear-operator]]).

[A2] $T^{**}=T$ ([[thm-hilbert-adjoint-properties]]).

[A3] $S^\perp=\{v:\langle v,s\rangle=0\ \forall s\in S\}$; if $\langle v,w\rangle=0$ for every $w$ then $v=0$, and $S^{\perp\perp}=\overline S$ for every linear subspace $S$ ([[def-orthogonality-and-orthogonal-complement]], [[def-real-and-complex-inner-product-space]], [[thm-double-orthogonal-complement-is-closure]]).

[A4] The image of a linear map is a linear subspace, and the kernel of a linear map is a linear subspace ([[def-linear-subspace]]).

[A5] Countable Choice is the hypothesis under which adjoints and double complements are available ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice, Hilbert spaces $H,K$ and a bounded linear operator $T:H\to K$.

1.1 For $y\in K$, one has $y\in(\operatorname{ran}T)^\perp$ exactly when $\langle Tx,y\rangle_K=0$ for every $x$, which by the adjoint identity is exactly when $\langle x,T^*y\rangle_H=0$ for every $x$; taking $x=T^*y$ shows this happens exactly when $T^*y=0$, that is $y\in\ker T^*$. [A1, A3, A5]

2.1 Replacing $T$ by $T^*$ in step 1.1 and using $T^{**}=T$ gives $(\operatorname{ran}T^*)^\perp=\ker T$. [step 1.1, A2]

3.1 The range of a linear map is a linear subspace, so the double-complement theorem applies to it: $\overline{\operatorname{ran}T}=(\operatorname{ran}T)^{\perp\perp}=((\operatorname{ran}T)^\perp)^\perp=(\ker T^*)^\perp$, and likewise $\overline{\operatorname{ran}T^*}=(\ker T)^\perp$. [step 1.1, step 2.1, A3, A4] ∎
