---
id: lem-vostokov-primary-first-power-trace-for-arbitrary-lift
kind: lemma
title: "First-power trace criterion for an arbitrary primary lift"
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
      locator: "Chapter VI, §§4.2 and 5.2, printed pp. 230–231 and 233–234; the first-power arbitrary-lift reduction is reconstructed below."
---

## Statement

Let p be odd, let K₀/ℚ_p be finite unramified with valuation ring R and residue field k, and let F/K₀ be a finite extension inducing an isomorphism on residue fields. Fix a uniformizer π of F and a primitive pth root ζ∈F. Let z∈1+XR[[X]] be any series with z(π)=ζ, and put ω_z(a)=E_X(a(z^p-1))(π) for a∈R, using the formal exponential in the cited prerequisites. Then

    ω_z(a)∈F^(×p) if and only if Tr_(k/𝔽_p)(ā)=0.

In particular the test applies to the n=1 case of the Shafarevich data, including arbitrary permitted lifts. It does not claim that ω_z(a) has critical depth, nor a trace criterion modulo p^n when n>1.

## Facts & Assumptions

**Given:** The odd prime, local fields, common residue field, uniformizer, primitive root, arbitrary lift and coefficient in the Statement.

[F1] For a normalized lift of a primitive pth root, the associated primary element is a pth power exactly when the residue trace of its coefficient is zero. [[lem-vostokov-normalized-primary-element-critical-coefficient]]

[F2] Two lifts having the same value at π yield primary elements with quotient in F^(×p). [[lem-vostokov-first-power-lift-invariance]]

## Proof

1.1 Write e=v_F(p) and t=e/(p-1). For 1≤i<p, (ζ^i-1)/(ζ-1) reduces to i, a nonzero residue, so every 1-ζ^i has the same valuation. Their product is p, hence v_F(ζ-1)=t; in particular t is a positive integer. [given, algebra]

2.1 Fix one finite list of representatives in R for the elements of k. Starting from (ζ-1)/π^t, repeatedly choose its specified residue representative, subtract it, and divide the remainder by π. This gives coefficients b_t,b_(t+1),...∈R with b_t a unit and partial sums converging to ζ-1. The recursion is determined by the fixed finite list, and convergence follows since the remainder after degree N has valuation at least N+1. Hence z₀(X)=1+sum_(i>=t)b_i X^i is a normalized lift with z₀(π)=ζ. [step 1.1, given, choose, construct, algebra]

3.1 The normalized criterion [F1] applied to z₀ gives ω_(z₀)(a)∈F^(×p) exactly when Tr_(k/𝔽_p)(ā)=0. By [F2], ω_z(a)/ω_(z₀)(a) is a pth power. Multiplication by a pth power does not change membership in F^(×p), so the same criterion holds for the original arbitrary z. No depth property of ω_z(a) or higher-power criterion is used. [F1, F2, step 2.1, given, algebra] ∎
