---
id: lem-vostokov-shafarevich-residue-degree-one
kind: lemma
title: "Shafarevich principal-unit decomposition in residue degree one"
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
      locator: "Chapter VI, §5.2, printed pp. 233–234; the residue-degree-one specialization is reconstructed below."
---

## Statement

Let p be odd and F/ℚ_p a finite extension with residue field 𝔽_p. Fix a uniformizer π, put e=v_F(p), t=e/(p-1), and let ζ∈F be a primitive p^n-th root with n≥1. Let z∈1+Xℤ_p⟦X⟧ be any lift with z(π)=ζ, and define ω(a)=E_X(a(z^(p^n)-1))(π) for a∈ℤ_p. Put I={i:1≤i<pt, p∤i}. Every ε∈U₁=1+𝔪_F can be written

    ε=E_X(sum_(i∈I) α_i X^i)(π) · ω(a)

for α_i,a∈ℤ_p. For any such representation, ε∈F^(×p^n) if and only if every α_i and a belongs to p^nℤ_p. Since the maximal unramified subfield is ℚ_p, this is the full primary trace criterion in residue degree one. No general residue-degree claim is made.

## Facts & Assumptions

**Given:** The prime, finite local extension with residue field 𝔽_p, uniformizer, primitive root, arbitrary lift, and principal unit in the Statement.

[F1] The formal exponential E_X is integral, additive to multiplicative, ℤ_p-linear and has the stated leading coefficient; its values at π converge. [[lem-vostokov-formal-exponential-integrality-and-inversion]]

[F2] For a₀ of nonzero residue trace, arbitrary permitted lifts give a basis of U₁/U₁^(p^n) consisting of the primary element and units with the prescribed independent leading terms. [[lem-vostokov-arbitrary-lift-primary-quotient-basis]]

## Proof

1.1 Put g_i=E_X(X^i)(π) and b=ω(1). By [F1], g_i≡1+π^i mod π^(i+1). The trace of 1 in k=𝔽_p is 1, so [F2] makes the classes of all g_i and b a basis of Q_n=U₁/U₁^(p^n) over ℤ/p^nℤ. Reducing this basis modulo p shows that the same generators span U₁/U₁^p. [F1, F2, given, construct, algebra]

2.1 The finite quotient U₁/U_m is a p-group: each successive quotient U_j/U_(j+1) is the additive group of 𝔽_p via the leading coefficient. Given a unit u, the generation modulo U₁^p from step 1.1 writes u as a finite product of g_i,b times a pth power. Repeating this decomposition r times shows that the same generators span U₁/U₁^(p^r) for every r≥1. For each fixed m, a sufficiently large p^r kills the finite p-group U₁/U_m, so U₁^(p^r)⊂U_m; the generated subgroup is therefore dense in U₁. [step 1.1, given, construct, algebra]

3.1 Powers g_i^α and b^a are defined for α,a∈ℤ_p by limits of integer powers, and depend continuously on their exponents: in each finite p-group U₁/U_m, a sufficiently large power of p kills every class. The finite-dimensional compact space ℤ_p^(|I|+1) therefore maps continuously to U₁ by the product of these powers. Its image is compact and hence closed in the Hausdorff unit group, while step 2.1 makes it dense; it is all of U₁. Compactness here follows directly from finite p-adic digit trees: a nested family of nonempty digit cylinders has a branch obtained by taking the least child with arbitrarily long descendants. Thus every ε has such p-adic exponents. [step 2.1, construct, algebra]

4.1 By ℤ_p-linearity and multiplicativity of E_X in [F1], the product of the g_i^α_i is E_X(sum_i α_iX^i)(π), and b^a=ω(a). This gives the displayed decomposition. A p-adic exponent reduces modulo p^n in Q_n, so the basis in step 1.1 makes ε∈U₁^(p^n) equivalent to every α_i and a being divisible by p^n. Also U₁∩F^(×p^n)=U₁^(p^n): a p^n-th root of a principal unit has valuation zero and residue 1, because p does not divide |𝔽_p×|. Since Tr_(ℚ_p/ℚ_p)(a)=a, this is the asserted trace criterion. No n>1 assertion for higher residue degree follows. [F1, step 1.1, step 3.1, given, algebra] ∎
