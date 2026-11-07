---
id: lem-vostokov-primary-pn-trace-for-arbitrary-lift
kind: lemma
title: "The higher-power trace criterion for arbitrary primary lifts"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
  - lem-normalized-primary-frobenius-coboundary-is-pn-power
  - lem-vostokov-higher-power-lift-invariance
  - lem-vostokov-trace-criterion-reduces-to-frobenius-coboundaries
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Fesenko–Vostokov, Local Fields and Their Extensions, second edition"
      url: "https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf"
      locator: "Chapter VI, §§4.2–4.3, printed pp. 230–232; the normalized coboundary and arbitrary-lift assembly are reconstructed locally."
---

## Statement

Let p be odd, K₀/ℚ_p finite unramified with valuation ring R and residue field k, and F/K₀ finite inducing an isomorphism on residue fields. Fix a uniformizer π of F and a primitive p^n-th root ζ∈F with n≥1. Let z∈1+XR⟦X⟧ be any series with z(π)=ζ, and put ω_z(a)=E_X(a(z^(p^n)-1))(π). For every a∈R,

    ω_z(a)∈F^(×p^n) if and only if Tr_(K₀/ℚ_p)(a)∈p^nℤ_p.

The statement covers arbitrary permitted lifts and all finite residue degrees. It does not assert a critical-depth bound for an arbitrary lift or the full principal-unit decomposition.

## Facts & Assumptions

**Given:** The fields, odd prime, root, uniformizer, exponent, arbitrary lift and coefficient in the Statement.

[F1] For a normalized lift z₀, the primary element of every Frobenius coboundary φ(d)-d is a p^n-th power. [[lem-normalized-primary-frobenius-coboundary-is-pn-power]]

[F2] The primary values for an arbitrary lift and a normalized lift with the same value at π have quotient in F^(×p^n). [[lem-vostokov-higher-power-lift-invariance]]

[F3] For the supplied local data and arbitrary lift, the full p^n trace criterion is equivalent to p^n-power membership of the primary value of every Frobenius coboundary. [[lem-vostokov-trace-criterion-reduces-to-frobenius-coboundaries]]

## Proof

1.1 Put e=v_F(p) and t=e/(p-1). The primitive pth root ζ^(p^(n-1)) has depth t because the p-1 factors 1-ζ^(ip^(n-1)), 1≤i<p, have equal valuation and product p. The binomial depth rule for principal units then gives h=v_F(ζ-1)=t/p^(n-1), a positive integer. Choose a finite list of representatives in R for k and recursively subtract the specified leading residue and divide by π, starting with (ζ-1)/π^h. Completeness gives a normalized z₀=1+sum_(i>=h)b_iX^i with b_h a unit and z₀(π)=ζ. [given, choose, construct, algebra]

2.1 Fix d∈R. By [F1], ω_(z₀)(φ(d)-d) is a p^n-th power. By [F2], its quotient with ω_z(φ(d)-d) is also a p^n-th power. Their product therefore makes ω_z(φ(d)-d) a p^n-th power. This works independently for each d, including d=0. [F1, F2, step 1.1, given, algebra]

3.1 Step 2.1 establishes the Frobenius-coboundary condition in [F3]. The equivalence there gives the stated trace criterion for every a∈R. Nothing in the argument asserts critical depth for the arbitrary z or proves the separate unit decomposition. [F3, step 2.1, given, algebra] ∎
