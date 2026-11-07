---
id: lem-vostokov-primary-pth-power-trace-for-arbitrary-lift
kind: lemma
title: "The pth-power trace criterion for arbitrary primary lifts"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - lem-vostokov-normalized-primary-element-critical-coefficient
  - lem-vostokov-first-power-lift-invariance
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Fesenko–Vostokov, Local Fields and Their Extensions, second edition"
      url: "https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf"
      locator: "Chapter VI, §§4.2 and 5.2, printed pp. 230–231 and 233–234; the pth-power arbitrary-lift reduction is reconstructed below."
---

## Statement

Let p be odd, let K₀/ℚ_p be finite unramified with valuation ring R and residue field k, and let F/K₀ be a finite extension inducing an isomorphism on residue fields. Fix a uniformizer π of F and a primitive p^n-th root ζ∈F, with n≥1. Let z∈1+XR⟦X⟧ be any series with z(π)=ζ, and put ω_z(a)=E_X(a(z^(p^n)-1))(π) for a∈R, using the formal exponential in the cited prerequisites. Then

    ω_z(a)∈F^(×p) if and only if Tr_(k/𝔽_p)(ā)=0.

The criterion includes every n≥1 and every permitted lift. It does not assert that ω_z(a) has critical depth, nor a trace criterion for membership in F^(×p^n) when n>1.

## Facts & Assumptions

**Given:** The odd prime, local fields, common residue field, uniformizer, primitive root, exponent n, arbitrary lift and coefficient in the Statement.

[F1] For a normalized lift of a primitive p^n-th root, the primary element is a pth power exactly when the residue trace of its coefficient is zero. [[lem-vostokov-normalized-primary-element-critical-coefficient]]

[F2] If two series have the same value at π, their pth-power primary expressions have quotient in F^(×p). [[lem-vostokov-first-power-lift-invariance]]

## Proof

1.1 Put e=v_F(p), t=e/(p-1), and ξ=ζ^(p^(n-1)). For 1≤i<p, (ξ^i-1)/(ξ-1) reduces to i, and the product of 1-ξ^i is p. Thus v_F(ξ-1)=t. For a principal unit of exact depth m<t, its pth power has exact depth pm by the binomial expansion; at depth m≥t its pth power has depth at least pt>t. Working backwards through the primitive p-power roots shows that h=v_F(ζ-1)=t/p^(n-1) is a positive integer. [given, algebra]

2.1 Fix a finite list of representatives in R for the common residue field k. Starting from (ζ-1)/π^h, repeatedly take its specified residue representative, subtract it and divide the remainder by π. Completeness gives a series z₀=1+sum_(i>=h)b_iX^i∈1+XR⟦X⟧ with b_h a unit and z₀(π)=ζ. The normalized trace criterion [F1] therefore gives ω_(z₀)(a)∈F^(×p) exactly when Tr_(k/𝔽_p)(ā)=0. [F1, step 1.1, given, choose, construct, algebra]

3.1 Put Z=z^(p^(n-1)) and Z₀=z₀^(p^(n-1)). They are in 1+XR⟦X⟧ and have the same value ζ^(p^(n-1)) at π. By [F2], E_X(a(Z^p-1))(π)/E_X(a(Z₀^p-1))(π) is a pth power. These two values are ω_z(a) and ω_(z₀)(a), so their membership in F^(×p) agrees. Step 2.1 proves the criterion for the arbitrary lift z. The proof does not assert equality of depths or divisibility by p^n for n>1. [F2, step 2.1, given, algebra] ∎
