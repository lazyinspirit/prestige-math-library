---
id: thm-johnston-nickel-canonical-complex-is-perfect
kind: theorem
title: Perfectness and Cohomology of the Canonical Equivariant Iwasawa Complex
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 12
deps:
  - def-johnston-nickel-canonical-eimc-complex
  - def-iwasawa-algebra-of-profinite-group
  - lem-finite-by-zp-profinite-group-splits
  - def-compactly-supported-etale-cohomology
  - def-ordinary-etale-cohomology-of-a-constructible-l-adic-sheaf
  - def-relative-algebraic-k0-group
  - def-perfect-torsion-complex-relative-euler-class
  - thm-relative-k0-determinant-fiber-comparison
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Johnston and Nickel, An Unconditional Proof of the Abelian Equivariant Iwasawa Main Conjecture and Applications
      url: https://arxiv.org/pdf/2010.03186
      locator: Proposition 5.2 and proof, printed pp. 14–15.
verification: {}
---

## Statement

Let $p$ be odd, let $K$ be totally real, let $L/K$ be admissible, and let $S$ contain every place ramified in $L/K$ and every infinite place of $K$. With $G=\operatorname{Gal}(L/K)$ and $C_S^\bullet(L/K)$ the canonical complex, its cohomology is $H^{-1}(C_S^\bullet)=X_S:=\operatorname{Gal}(M_S^{\mathrm{ab}}(p)/L)$, $H^0(C_S^\bullet)\cong\mathbb Z_p$, and zero in every other degree, where $M_S^{\mathrm{ab}}(p)$ is the maximal abelian pro-$p$ extension of $L$ unramified outside $S$. Moreover, $C_S^\bullet$ is a perfect complex with torsion cohomology over $\Lambda(G)$, so it defines a class in the relative group $K_0(\Lambda(G),Q(G))$, where $Q(G)$ is the total quotient algebra.

## Statement references

[Johnston and Nickel, Proposition 5.2](https://arxiv.org/pdf/2010.03186)

[[def-johnston-nickel-canonical-eimc-complex]]

## Proof status

The cohomology calculation is the dual of the stated Galois cohomology calculation. The local perfectness argument is not complete: the source invokes a continuous compact-support cohomology perfection theorem, and the current local finite-cohomology suppliers do not establish that infinite-level theorem.

## Facts & Assumptions

**Given:** The hypotheses and notation in the Statement.

[F1] The canonical complex is the derived Pontryagin dual of the étale cohomology complex with coefficients $\mathbb Q_p/\mathbb Z_p$. [[def-johnston-nickel-canonical-eimc-complex]]

[A1] Johnston–Nickel identify this complex with a shifted compact-support cohomology complex and invoke Fukaya–Kato, Proposition 1.6.5, for perfectness. That continuous infinite-level perfection result has no complete local supplier in the current library; the draft finiteness carrier concerns a different finite-level statement. [[def-compactly-supported-etale-cohomology]]

[A2] The source's cohomology calculation uses the identification with continuous Galois cohomology and its degree-zero/degree-one duality. That identification is not yet proved in a local supplier for this infinite extension. [[def-ordinary-etale-cohomology-of-a-constructible-l-adic-sheaf]]

[A3] The relative Euler-class definition uses a determinant-fiber comparison whose current theorem carrier has no supplied proof. [[def-perfect-torsion-complex-relative-euler-class]] [[thm-relative-k0-determinant-fiber-comparison]]

## Proof

**Given:** The data and hypotheses in the Statement, together with the conditional supplier inputs [A1]–[A2].

1.1 Conditional on the continuous Galois-cohomology identification [A2], degree-zero invariants and the degree-one dual give the displayed cohomology groups in degrees $0$ and $-1$. [A2, F1, given, construct]

1.2 If [A1] supplies the compact-support perfection comparison, the same complex is represented by a bounded complex of finitely generated projective $\Lambda(G)$-modules, and its cohomology modules are torsion over the central one-variable coefficient ring. [A1, step 1.1]

2.1 Under [A3], this perfect torsion complex defines the indicated relative $K_0$ class. The missing infinite-level cohomology and perfection proofs are not established by the present local suppliers, so this is only a conditional reduction and the unconditional Statement remains escalated. [A1, A2, A3, step 1.2] ∎

## Proof references

[Johnston and Nickel, Proposition 5.2 and proof](https://arxiv.org/pdf/2010.03186)

[Fukaya and Kato, Proposition 1.6.5](https://doi.org/10.1007/s00209-006-0035-4)
