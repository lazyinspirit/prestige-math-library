---
id: thm-the-unit-is-self-dual
kind: theorem
title: "The unit is self-dual"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-left-dual-and-right-dual-object, cor-the-two-unitors-agree-on-the-unit-object]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Section 2.10"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Statement

In any monoidal category, the tensor unit $\mathbf 1$ is both a left dual and a
right dual of itself.

## Facts & Assumptions

**Given:** A monoidal category with unit object $\mathbf 1$.

[L1] The two unitors agree on the unit object:
$\lambda_{\mathbf 1}=\rho_{\mathbf 1}$
([[cor-the-two-unitors-agree-on-the-unit-object]]).

[L2] A left or right self-duality of $\mathbf 1$ requires an evaluation
$\mathbf 1\otimes\mathbf 1\to\mathbf 1$ and a coevaluation
$\mathbf 1\to\mathbf 1\otimes\mathbf 1$ satisfying the corresponding zig-zag
identities ([[def-left-dual-and-right-dual-object]]).

## Proof

**Proof technique:** direct.

1.1 Take the evaluation to be $\lambda_{\mathbf 1}:\mathbf 1\otimes\mathbf 1\to\mathbf 1$ and the coevaluation to be $\lambda_{\mathbf 1}^{-1}:\mathbf 1\to\mathbf 1\otimes\mathbf 1$. By [L1], this is the same pair as $\rho_{\mathbf 1}$ and $\rho_{\mathbf 1}^{-1}$. [given, L1, L2, construct]

2.1 Substituting these maps into either zig-zag composite gives an instance of the triangle identity with every object equal to $\mathbf 1$, so each composite is the identity of $\mathbf 1$. [step 1.1, algebra]

3.1 Therefore $\mathbf 1$ is a left dual of itself, and because the same maps also satisfy the mirrored unit equations, it is a right dual of itself as well. [step 2.1, L2] ∎
