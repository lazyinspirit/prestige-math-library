---
id: lem-polynomial-calculus-is-isometric-for-self-adjoint-operators
kind: lemma
title: Polynomial calculus is isometric for self adjoint operators
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [lem-spectrum-of-a-self-adjoint-operator-is-real, thm-polynomial-spectral-mapping, lem-c-star-spectral-radius-equals-norm-for-normal-elements, thm-hilbert-adjoint-properties, lem-bounded-hilbert-operators-form-a-c-star-algebra, def-axiom-of-choice, cor-normal-operator-norm-equals-spectral-radius, def-self-adjoint-positive-unitary-and-normal-operator]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, Theorem 5.54, printed pp.250–262"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem, §4, pp.10–13"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
---

## Statement

Assume AC. If $T=T^*$ and $p$ is a complex polynomial, then $\|p(T)\|=\max_{\lambda\in\sigma(T)}|p(\lambda)|$; hence polynomial restriction classes on $\sigma(T)$ give a well-defined isometric calculus.

## Facts & Assumptions

[A1] For $T=T^*$ the spectrum satisfies $\sigma(T)\subseteq\mathbb R$; a self-adjoint operator is normal ([[lem-spectrum-of-a-self-adjoint-operator-is-real]], [[def-self-adjoint-positive-unitary-and-normal-operator]]).

[A2] $\sigma(p(a))=p(\sigma(a))$ for every polynomial $p$ and every element $a$ of a unital complex Banach algebra ([[thm-polynomial-spectral-mapping]]).

[A3] For a normal element $a$ of a unital complex C\*-algebra one has $r(a)=\|a\|$, and $\mathcal B(H)$ is such a C\*-algebra ([[lem-c-star-spectral-radius-equals-norm-for-normal-elements]], [[lem-bounded-hilbert-operators-form-a-c-star-algebra]]).

[A4] $(aT+bS)^*=\overline aT^*+\overline bS^*$ and $(ST)^*=S^*T^*$, so for a polynomial $p(z)=\sum_kc_kz^k$ and $T=T^*$ one has $p(T)^*=\overline p(T)$ with $\overline p(z)=\sum_k\overline{c_k}z^k$; the maps $p\mapsto p(T)$ and $p\mapsto\overline p(T)$ are ring homomorphisms ([[thm-hilbert-adjoint-properties]]).

[A5] For a normal operator the norm equals the spectral radius and the maximum is attained: $\|T\|=r(T)=\max\{|\lambda|:\lambda\in\sigma(T)\}$ ([[cor-normal-operator-norm-equals-spectral-radius]]).

[A6] AC is the hypothesis of the spectral-radius and Gelfand-theoretic suppliers ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

**Given:** A nonzero complex Hilbert space $H$, a bounded self-adjoint $T\in\mathcal B(H)$ and complex polynomials $p,q$.

1.1 $p(T)^*=\overline p(T)$, and $p(T)$ and $\overline p(T)$ are polynomials in $T$, hence commute; therefore $p(T)$ is normal. [A4, algebra]

1.2 The spectrum of $T$ is a nonempty compact subset of $\mathbb R$ and $\sigma(p(T))=p(\sigma(T))$. [A1, A2]

2.1 $\|p(T)\|=\max_{\lambda\in\sigma(T)}|p(\lambda)|$: by normality of $p(T)$ its norm is the spectral radius, the spectral radius is the maximum of $|z|$ over $\sigma(p(T))$, and $\sigma(p(T))=p(\sigma(T))$. [step 1.1, step 1.2, A3, A5, A6]

3.1 If $p$ and $q$ agree on $\sigma(T)$, then $p-q$ vanishes there, so $\|p(T)-q(T)\|=\max_{\lambda\in\sigma(T)}|p(\lambda)-q(\lambda)|=0$ and $p(T)=q(T)$. [step 2.1]

4.1 The assignment $[p]\mapsto p(T)$ is therefore well defined on restriction classes, and it preserves the supremum norm because $\|p(T)\|=\max_{\sigma(T)}|p|=\|p|_{\sigma(T)}\|_\infty$. [step 2.1, step 3.1] ∎
