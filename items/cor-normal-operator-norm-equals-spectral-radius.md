---
id: cor-normal-operator-norm-equals-spectral-radius
kind: corollary
title: Normal operator norm equals spectral radius
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [lem-c-star-spectral-radius-equals-norm-for-normal-elements, def-c-star-algebra-generated-by-a-normal-operator, def-axiom-of-choice, lem-bounded-hilbert-operators-form-a-c-star-algebra, def-spectral-radius, def-spectrum-and-resolvent-of-a-bounded-operator, thm-spectrum-is-nonempty-compact-and-norm-bounded, thm-bounded-inverse-theorem, def-self-adjoint-positive-unitary-and-normal-operator]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, §5.4, printed pp.245–255"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem, §4, pp.10–13"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
---

## Statement

Assume AC. For a bounded normal operator $T$ on a nonzero complex Hilbert space, $\|T\|=r(T)=\max\{|\lambda|:\lambda\in\sigma(T)\}$.

## Facts & Assumptions

[A1] $\mathcal B(H)$ is a unital complex C\*-algebra, hence in particular a nonzero unital complex Banach algebra; an operator $T$ is normal when $T^*T=TT^*$ ([[lem-bounded-hilbert-operators-form-a-c-star-algebra]], [[def-self-adjoint-positive-unitary-and-normal-operator]]).

[A2] For every normal element $a$ of a unital complex C\*-algebra $A$ the spectral radius satisfies $r(a)=\|a\|$ ([[lem-c-star-spectral-radius-equals-norm-for-normal-elements]]).

[A3] For a bounded operator $T$ on a nonzero complex Banach space the spectral radius is $r(T)=\max\{|z|:z\in\sigma(T)\}$, computed in $\mathcal B(X)$, and $\lambda\in\rho(T)$ exactly when $\lambda I-T$ is bijective with bounded inverse ([[def-spectral-radius]], [[def-spectrum-and-resolvent-of-a-bounded-operator]]).

[A4] In a nonzero unital complex Banach algebra the spectrum of every element is nonempty and compact ([[thm-spectrum-is-nonempty-compact-and-norm-bounded]]).

[A5] A bounded bijective linear map between Banach spaces has a bounded inverse ([[thm-bounded-inverse-theorem]]), so for $A=\mathcal B(H)$ invertibility in the algebra and bijectivity with bounded inverse coincide ([[def-c-star-algebra-generated-by-a-normal-operator]] for the generated-algebra convention used on this page).

## Proof

**Proof technique:** direct.

**Given:** A nonzero complex Hilbert space $H$ and a bounded normal operator $T\in\mathcal B(H)$.

1.1 $\mathcal B(H)$ is a unital complex C\*-algebra, so it is a nonzero unital Banach algebra, and $T$ is a normal element of it. [A1]

1.2 The algebra spectrum of $T$ in $\mathcal B(H)$ equals the operator spectrum: $zI-T$ is invertible in $\mathcal B(H)$ exactly when it is bijective with bounded inverse. [A5]

2.1 Applying the C\*-spectral-radius theorem to the normal element $T$ of $\mathcal B(H)$ gives $r(T)=\|T\|$. [step 1.1, A2]

2.2 The spectrum $\sigma(T)$ is nonempty and compact by step 1.2 and [A4], so the modulus maximum defining $r(T)$ is attained and equals $\max\{|\lambda|:\lambda\in\sigma(T)\}$. [step 1.2, A3, A4]

3.1 Therefore $\|T\|=r(T)=\max\{|\lambda|:\lambda\in\sigma(T)\}$, which is the asserted identity. [step 2.1, step 2.2] ∎
