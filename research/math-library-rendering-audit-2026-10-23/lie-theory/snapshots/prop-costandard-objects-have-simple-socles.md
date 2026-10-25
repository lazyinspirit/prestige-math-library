---
id: "prop-costandard-objects-have-simple-socles"
kind: "proposition"
title: "The simple socle of a costandard object"
deps: ["def-axiom-of-choice", "prop-restricted-duality-is-an-exact-involution-on-category-o", "thm-verma-module-has-a-unique-simple-quotient", "def-standard-and-costandard-objects-in-category-o"]
sources:
  references:
    - title: "Lecture 8 §3 Corollary 3.13, p.5"
      url: "https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
status: published
origin: "pipeline"
proof_strategy: "Dualize the unique maximal Verma submodule; every simple submodule dualizes to the unique simple quotient"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-06-receipts.jsonl (prop-costandard-objects-have-simple-socles). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Statement

Assume the Axiom of Choice.

Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$.

The costandard object $\nabla(\lambda)$ has a unique simple submodule, isomorphic to $L(\lambda)$. Its socle, the sum of all simple submodules, is that submodule.

## Facts & Assumptions

**Given:** The Axiom of Choice ([[def-axiom-of-choice]]), the setting above and the hypotheses in the statement.

[F1] Under the Axiom of Choice, fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$. Restricted Chevalley duality is an exact contravariant equivalence $D:\mathcal O\to\mathcal O^{\mathrm{op}}$, with a natural isomorphism $D^2\cong\operatorname{id}$. It preserves each weight-space dimension, the formal character, and every simple composition multiplicity. ([[prop-restricted-duality-is-an-exact-involution-on-category-o]])

[F2] The proper submodule $J(\lambda)$ which is the sum of all proper submodules is the unique maximal submodule of $M(\lambda)$. The quotient $L(\lambda):=M(\lambda)/J(\lambda)$ is simple and is its unique simple quotient. ([[thm-verma-module-has-a-unique-simple-quotient]])

[F3] For $\lambda\in\mathfrak h^*$, the standard and costandard weight modules are $\Delta(\lambda)=M(\lambda)$ and $\nabla(\lambda)=D(M(\lambda))$; under the given Choice premise both are objects of $\mathcal O$. ([[def-standard-and-costandard-objects-in-category-o]])

## Proof

1.1 Let $J(\lambda)$ be the unique maximal proper submodule of $M(\lambda)$. Dualize $M(\lambda)\twoheadrightarrow L(\lambda)$ to obtain an injection $L(\lambda)\cong D(L(\lambda))\hookrightarrow D(M(\lambda))=\nabla(\lambda)$. Its image is the annihilator of $J(\lambda)$. [F1, F2, F3]

2.1 If $S\subset\nabla(\lambda)$ is any simple submodule, duality gives a simple quotient $M(\lambda)\twoheadrightarrow D(S)$. Its kernel must be $J(\lambda)$ by uniqueness of the maximal submodule. Finite-dimensional weightwise biduality says $S$ is exactly that kernel annihilator. Hence all simple submodules have the image already constructed, and their sum equals it. [F1, F2, step 1.1] ∎
