---
id: thm-lindenstrauss-besicovitch-maximal-inequality-for-leafwise-conditionals
kind: theorem
title: "Lindenstrauss Besicovitch maximal inequality for leafwise conditionals"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps: [def-lindenstrauss-t-space, thm-lindenstrauss-leafwise-conditional-measures-for-t-spaces, thm-vitali-covering-lemma-for-balls-with-fivefold-dilates]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-supplied
sources:
  scraped: []
  references:
    - title: "Elon Lindenstrauss, Invariant Measures and Arithmetic Quantum Unique Ergodicity"
      url: "https://math.huji.ac.il/~elon/Publications/quantum.pdf"
      locator: "Appendix A, Theorem A.1, Annals printed p. 214 (local PDF p. 50): α-invariant probability and embedded leaves; general finite-measure version follows by normalization."
---

## Statement

Let T be a metric space satisfying the Besicovitch covering theorem, X a T-space, and α:X→X a homeomorphism whose restriction to every T-leaf expands leafwise distances by a uniform factor greater than 1. Suppose μ is an α-invariant Radon Borel probability measure and μ-almost every T-leaf is embedded. For f∈L¹(μ), define M_μ(f)(x)=sup_{r>0}[μₓ,T(B_T(r))]⁻¹∫_{B_T(r)}|f(t_U(x,s))|dμₓ,T(s). Then μ({x:M_μ(f)(x)>R})≤C_T‖f‖₁/R for every R>0, where ‖f‖₁=∫|f|dμ and C_T depends only on T. The same bound holds for a nonzero finite α-invariant Radon measure μ by applying the probability assertion to ν=μ/μ(X): normalized leafwise measures are unchanged, and both the ambient measure of the level set and the L¹ norm scale by μ(X). For the zero measure put the maximal function equal to zero.

## Statement references

[Elon Lindenstrauss, Invariant Measures and Arithmetic Quantum Unique Ergodicity, Appendix A, Theorem A.1, Annals printed p. 214 (local PDF p. 50): α-invariant probability and embedded leaves; general finite-measure version follows by normalization.](https://math.huji.ac.il/~elon/Publications/quantum.pdf)

## Facts & Assumptions

**Given:** The complete objects, parameters, conventions and hypotheses in the Statement.

[L1] Lindenstrauss Appendix A, Theorem A.1 states the maximal inequality; its full proof uses the leafwise conditional-measure construction and covering argument. [Elon Lindenstrauss, Invariant Measures and Arithmetic Quantum Unique Ergodicity, Appendix A, Theorem A.1, Annals printed p. 214 (local PDF p. 50): α-invariant probability and embedded leaves; general finite-measure version follows by normalization.](https://math.huji.ac.il/~elon/Publications/quantum.pdf)
