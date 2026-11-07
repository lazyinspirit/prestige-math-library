---
id: lem-vostokov-trace-criterion-reduces-to-frobenius-coboundaries
kind: lemma
title: "The primary trace criterion reduces to Frobenius coboundaries"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - lem-vostokov-formal-exponential-integrality-and-inversion
  - lem-vostokov-arbitrary-lift-primary-quotient-basis
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Fesenko–Vostokov, Local Fields and Their Extensions, second edition"
      url: "https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf"
      locator: "Chapter VI, §§4.2–4.3 and 5.2, printed pp. 230–234; the explicit Frobenius-coboundary reduction is proved below."
---

## Statement

Let p be odd, let K₀/ℚ_p be finite unramified of degree f with valuation ring R and arithmetic Frobenius φ, and let F/K₀ be finite with the same residue field. Fix a uniformizer π of F, a primitive p^n-th root ζ∈F with n≥1, and any z∈1+XR⟦X⟧ with z(π)=ζ. Put ω(a)=E_X(a(z^(p^n)-1))(π) for a∈R. Then the following are equivalent:

1. For every a∈R, ω(a)∈F^(×p^n) if and only if Tr_(K₀/ℚ_p)(a)∈p^nℤ_p.
2. For every c∈R, ω(φ(c)-c)∈F^(×p^n).

This is a reduction, not an assertion that condition 2 holds. It includes arbitrary permitted lifts and all n≥1.

## Facts & Assumptions

**Given:** The prime, finite unramified coefficient field, local extension, uniformizer, root, lift and formal primary elements in the Statement.

[F1] E_X is additive to multiplicative and ℤ_p-linear; its values at π converge. [[lem-vostokov-formal-exponential-integrality-and-inversion]]

[F2] If a₀ has nonzero residue trace, ω(a₀) is a basis element of U₁/U₁^(p^n) and has order p^n there. [[lem-vostokov-arbitrary-lift-primary-quotient-basis]]

## Proof

1.1 On the finite residue field k, the image of x↦x^p-x is exactly the kernel of the trace to 𝔽_p: its kernel is 𝔽_p, its image has size |k|/p and trace zero, and the trace is nonzero because the polynomial X+X^p+...+X^(p^(f-1)) has degree below |k|. Lift a residue element of nonzero trace to R; its field trace is a p-adic unit, since unramified trace reduces to residue trace. Multiplying by the inverse of that unit gives a₀∈R with Tr(a₀)=1. [given, choose, construct, algebra]

2.1 Every trace-zero x∈R is of the form φ(c)-c. Fix a finite list of representatives in R for k. By step 1.1 choose from this list a representative c₀ with φ(c₀)-c₀≡x mod p. Then x₁=(x-(φ(c₀)-c₀))/p lies in R and has trace zero. Repeat deterministically, taking c_j from the fixed finite list for x_j. The sum c=sum_(j>=0)p^j c_j converges in R, and φ(c)-c=x by passage to the limit. No arbitrary family of choices is used. Consequently every a∈R decomposes as a=a₀ Tr(a)+(φ(c)-c) for some c∈R. [step 1.1, given, choose, construct, algebra]

3.1 By [F1], ω is additive to multiplicative and ℤ_p-linear. Thus for the decomposition of step 2.1, ω(a)=ω(a₀)^(Tr(a))ω(φ(c)-c). Since Tr(a₀)=1, its residue trace is nonzero; [F2] makes the class of ω(a₀) have order p^n in U₁/U₁^(p^n). Moreover U₁∩F^(×p^n)=U₁^(p^n): a p^n-th root of a principal unit has valuation zero and residue 1 because the finite residue multiplicative group has order prime to p. [F1, F2, step 1.1, step 2.1, given, algebra]

4.1 If condition 2 holds, step 3.1 shows that ω(a) is a p^n-th power exactly when the exponent Tr(a) is divisible by p^n, proving condition 1. Conversely condition 1 applied to a=φ(c)-c gives condition 2 because its trace is zero. The argument does not prove condition 2 and therefore does not close the original unrestricted Shafarevich theorem. [step 3.1, given, algebra] ∎
