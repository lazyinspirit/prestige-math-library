---
id: lem-vostokov-arbitrary-lift-primary-quotient-basis
kind: lemma
title: "Principal-unit quotient bases for arbitrary primary lifts"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - lem-principal-unit-power-quotient-basis-from-leading-terms
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
      locator: "Chapter VI, §§4.2 and 5.2, printed pp. 230–231 and 233–234; the arbitrary-lift quotient basis is reconstructed below."
---

## Statement

Let p be odd, let K₀/ℚ_p be finite unramified with valuation ring R and residue field k of order p^f, and let F/K₀ be a finite extension inducing an isomorphism on residue fields. Fix a uniformizer π of F, put e=v_F(p), t=e/(p-1) and c=pt, and let ζ∈F be a primitive p^n-th root with n≥1. Let z∈1+XR⟦X⟧ be any series with z(π)=ζ. Choose a₀∈R with Tr_(k/𝔽_p)(ā₀)≠0, and put b=E_X(a₀(z^(p^n)-1))(π). For I={i:1≤i<c, p∤i}, choose units g_(ij) with g_(ij)≡1+θ_jπ^i mod π^(i+1), where the residues of θ_1,...,θ_f form an 𝔽_p-basis of k. Then the classes of all g_(ij) together with b form a basis of U₁/U₁^(p^n) as a ℤ/p^nℤ-module. In particular b has order p^n in this quotient.

The result applies to every permitted lift and does not assert b∈U_c. It does not identify ω_z(a) modulo p^n for arbitrary a or prove the full primary trace criterion.

## Facts & Assumptions

**Given:** The prime, local fields, common residue field, uniformizer, root, arbitrary lift and chosen units in the Statement.

[F1] For a normalized lift z₀ and a₀ with nonzero residue trace, b₀=E_X(a₀(z₀^(p^n)-1))(π) lies in U_c and is not a pth power. [[lem-vostokov-normalized-primary-element-critical-coefficient]]

[F2] For b₀∈U_c, non-pth-power status is equivalent to its critical coefficient lying outside the critical power-map image; then the prescribed g_(ij) and b₀ form a basis of U₁/U₁^(p^n). [[lem-principal-unit-power-quotient-basis-from-leading-terms]]

[F3] Two series with equal value at π have pth-power primary expressions with quotient in F^(×p). [[lem-vostokov-first-power-lift-invariance]]

## Proof

1.1 Put ξ=ζ^(p^(n-1)). The p-1 factors 1-ξ^i have the same valuation and their product is p, so v_F(ξ-1)=t. For a principal unit of exact depth m<t, its pth power has exact depth pm; at depth m≥t, its pth power has depth at least pt>t. Working backwards through the primitive p-power roots gives h=v_F(ζ-1)=t/p^(n-1), a positive integer. A finite list of representatives in R for the common residue field gives, by repeated residue subtraction and division by π, a normalized series z₀=1+sum_(i>=h)b_iX^i with b_h a unit and z₀(π)=ζ. By [F1] and the nonzero trace of a₀, its primary element b₀ belongs to U_c and is not a pth power. [F1, given, choose, construct, algebra]

2.1 By [F2], the chosen g_(ij) and b₀ form a basis of Q=U₁/U₁^(p^n) over ℤ/p^nℤ. Put Z=z^(p^(n-1)) and Z₀=z₀^(p^(n-1)); they agree at π. By [F3], b/b₀∈F^(×p). Both are principal units, and a pth root of a principal unit is itself a principal unit: its valuation is zero and its residue is the unique pth root of 1 in k. Thus b/b₀∈U₁^p, so b and b₀ have the same image in Q/pQ. [F2, F3, step 1.1, given, algebra]

3.1 In the basis of step 2.1, the new ordered family has the identity matrix except possibly for its final column, and that column agrees modulo p with the final identity column. Its determinant is therefore 1 modulo p, hence a unit of ℤ/p^nℤ. The adjugate formula gives an inverse matrix, proving that the g_(ij) and b are a basis of Q. In particular the basis vector b has additive order p^n in Q, equivalently multiplicative order p^n. This uses no critical-depth assertion for b and gives no formula for the class of ω_z(a) at general a. [step 2.1, algebra] ∎
