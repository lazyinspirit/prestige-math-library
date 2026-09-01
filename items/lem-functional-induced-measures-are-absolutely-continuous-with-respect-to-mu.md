---
id: lem-functional-induced-measures-are-absolutely-continuous-with-respect-to-mu
kind: lemma
title: "The measure defined by a bounded $L^p$ functional is absolutely continuous with respect to $\\mu$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-bounded-functionals-on-finite-l-p-define-finite-signed-or-complex-measures, def-bounded-linear-functional-on-l-p-and-its-operator-norm, def-l-p-space-as-a-quotient-by-null-functions]
proof_strategy: "If $\\mu(E)=0$, then $\\mathbf 1_E$ is the zero class in $L^p$, so the induced set function must vanish on $E$."
verification:
  precheck: pass
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Theorem 6.15"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "John K. Hunter, Measure Theory, Theorem 7.14"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Let $(X,\mathcal A,\mu)$ be a finite measure space, let $1 \le p < \infty$,
let $\Lambda:L^p(\mu)\to\mathbb R$ be bounded, and let
$$\nu(E):=\Lambda([\mathbf 1_E])$$
be the finite signed measure from
[[lem-bounded-functionals-on-finite-l-p-define-finite-signed-or-complex-measures]].
Then $\nu \ll \mu$.

## Facts & Assumptions

**Given:** A finite measure space $(X,\mathcal A,\mu)$, a bounded linear functional $\Lambda$ on $L^p(\mu)$, and the induced measure $\nu(E)=\Lambda([\mathbf 1_E])$.

[L2] In $L^p(\mu)$, functions equal almost everywhere define the same class ([[def-l-p-space-as-a-quotient-by-null-functions]]).

[L3] A bounded linear functional sends the zero vector to $0$ ([[def-bounded-linear-functional-on-l-p-and-its-operator-norm]]).

## Proof

**Proof technique:** If $\mu(E)=0$, then $\mathbf 1_E$ is the zero class in $L^p$, so the induced set function must vanish on $E$.

1.1 Let $E \in \mathcal A$ with $\mu(E)=0$. Then $\mathbf 1_E=0$ almost [L2, given] everywhere, so [L2] gives $$[\mathbf 1_E]=[0]\quad\text{in }L^p(\mu).$$ [L2, given]

2.1 Applying $\Lambda$ and then [L3] yields [L3, step 1.1] $$\nu(E)=\Lambda([\mathbf 1_E])=\Lambda([0])=0.$$ Therefore $\nu \ll \mu$. [L3, step 1.1] ∎
