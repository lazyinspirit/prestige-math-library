---
id: def-self-adjoint-positive-unitary-and-normal-operator
kind: definition
title: Self-adjoint, positive, unitary and normal operators
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-hilbert-adjoint-properties, def-hilbert-space-adjoint, def-space-of-bounded-linear-operators, def-real-and-complex-inner-product-space, def-countable-choice]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, Definition 5.39, p.239"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis, Lecture 23"
      url: "https://live.ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
---

## Definition

Assume the Axiom of Countable Choice, and let $H$ be a real or complex Hilbert space with $T\in\mathcal B(H)$ a bounded linear operator and $T^*$ its Hilbert adjoint ([[def-hilbert-space-adjoint]], [[def-space-of-bounded-linear-operators]]).

- $T$ is **self-adjoint** when $T^*=T$;
- $T$ is **positive** when $\langle Tx,x\rangle$ is a real number in $[0,+\infty)$ for every $x\in H$;
- $T$ is **unitary** when $T^*T=TT^*=I$, the identity operator;
- $T$ is **normal** when $T^*T=TT^*$.

The definitions are read over either scalar field with the same inner product. **Two immediate consequences.** Every self-adjoint operator is normal, because $T^*T=T^2=TT^*$ when $T^*=T$. Every unitary operator is normal, because its defining identity says exactly that $T^*T$ and $TT^*$ are both the identity. Positivity is a condition on the *values* of the quadratic form and therefore forces those values to be real, which for a complex Hilbert space does not follow from boundedness alone; a positive operator on a complex Hilbert space is in fact self-adjoint, but that is proved later and is not assumed here.

**Consistency of the vocabulary.** The identity operator is self-adjoint, positive and unitary, and the zero operator is self-adjoint and positive; on the one-dimensional Hilbert space $\mathbb C$ the operator $\lambda I$ is self-adjoint exactly when $\lambda$ is real, unitary exactly when $|\lambda|=1$, and normal for every scalar $\lambda$.
