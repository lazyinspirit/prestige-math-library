---
id: cex-the-circle-and-line-have-isomorphic-one-dimensional-lie-algebras-but-are-not-isomorphic-lie-groups
kind: counterexample
title: The circle and line have the same Lie algebra but different Lie groups
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [cor-isomorphic-lie-algebras-give-locally-isomorphic-but-not-necessarily-isomorphic-connected-lie-groups]
landmark: false
proof_strategy: counterexample
axiom_base: ZF + AC_omega
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, connected groups with fixed Lie algebra"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: "Corollary 3.43 and its discussion, printed p. 42"
---

## Counterexample

The connected Lie groups $(\mathbb R,+)$ and $S^1$ have isomorphic
one-dimensional abelian Lie algebras, but they are not isomorphic Lie
groups: $S^1$ is compact and $\mathbb R$ is not.

This item is stated under $\mathsf{ZF}+\mathsf{AC}_\omega$.

## Facts & Assumptions

**Given:** The usual additive real Lie group and the unit circle under
multiplication.

[L1] Connected integrations of a fixed Lie algebra are discrete central
quotients of its simply connected integration
([[cor-isomorphic-lie-algebras-give-locally-isomorphic-but-not-necessarily-isomorphic-connected-lie-groups]]).

## Refutation

**Proof technique:** counterexample.

1.1 Both groups are one-dimensional and abelian, so their tangent brackets at the identity are zero. Sending the tangent vector $1\in T_0\mathbb R$ to $i\in T_1S^1$ is therefore an isomorphism of their real Lie algebras. Concretely, the local homomorphism is $t\mapsto e^{it}$. [given, algebra]
1.2 The circle is compact. The open cover $\{(-m,m):m\in\mathbb N,\ m\geq1\}$ of $\mathbb R$ has no finite subcover, so $\mathbb R$ is not compact. A Lie-group isomorphism is a homeomorphism and preserves compactness. Therefore the groups are not isomorphic. [given, algebra]
2.1 In the language of [L1], both arise from the simply connected group $\mathbb R$: the line uses the zero kernel, while the circle uses the nonzero discrete central kernel $2\pi\mathbb Z$. Thus the same one-dimensional Lie algebra does not determine the connected group. The declared $\mathsf{AC}_\omega$ is propagated from [L1]; the explicit witness and compactness argument introduce no additional choice. [L1, step 1.1, step 1.2] ∎