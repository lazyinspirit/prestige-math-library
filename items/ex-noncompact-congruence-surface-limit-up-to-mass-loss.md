---
id: ex-noncompact-congruence-surface-limit-up-to-mass-loss
kind: example
title: "A noncompact congruence-surface limit up to possible mass loss"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps: [thm-lindenstrauss-que-up-to-escape-of-mass-for-congruence-surfaces]
justified_by: []
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
generation:
  role: example
sources:
  scraped: []
  references:
    - title: "Elon Lindenstrauss, Invariant Measures and Arithmetic Quantum Unique Ergodicity"
      url: "https://math.huji.ac.il/~elon/Publications/quantum.pdf"
      locator: "Theorem 1.1, Theorem 1.4, §§3, 7–8, and Appendix A."
---

## Example

Let M=Γ₀(N)\ℍ be a finite-area noncompact congruence surface and μ a weak-* limit of microlocal lifts of joint Laplace and Hecke eigenfunctions. Then μ=c m_Liouville with 0≤c≤1; if c<1, the mass 1−c has escaped into the cusps.

## Example references

[Elon Lindenstrauss, Invariant Measures and Arithmetic Quantum Unique Ergodicity, Theorem 1.1, Theorem 1.4, §§3, 7–8, and Appendix A.](https://math.huji.ac.il/~elon/Publications/quantum.pdf)

## Facts & Assumptions

**Given:** A finite-area noncompact congruence surface $M=\Gamma_0(N)\backslash\mathbb H$ and a weak-* limit of microlocal lifts of joint Laplace and Hecke eigenfunctions.

[F1] [[thm-lindenstrauss-que-up-to-escape-of-mass-for-congruence-surfaces]]: Every such arithmetic quantum limit is $c$ times normalized Liouville measure for some $0\le c\le1$.

## Proof

**Proof technique:** direct specialization.

1.1 The limit in the statement is an arithmetic quantum limit on the indicated noncompact congruence surface, so it satisfies the hypotheses of [F1]. [given, F1]

2.1 Applying [F1] gives $\mu=c\,m_{\mathrm{Liouville}}$ with $0\le c\le1$. Since $m_{\mathrm{Liouville}}$ is normalized to total mass one, the mass missing from the probability approximants is $1-c$ and may have escaped into the cusps; no conclusion $c=1$ is asserted. [given, F1, step 1.1, algebra] ∎
