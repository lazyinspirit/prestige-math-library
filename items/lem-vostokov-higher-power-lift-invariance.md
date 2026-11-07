---
id: lem-vostokov-higher-power-lift-invariance
kind: lemma
title: "Higher-power invariance under a change of primary lift"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - lem-vostokov-formal-exponential-integrality-and-inversion
  - lem-normalized-primary-perturbation-is-pn-power
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Fesenko–Vostokov, Local Fields and Their Extensions, second edition"
      url: "https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf"
      locator: "Chapter VI, §§3.2–3.3 and 4.2, printed pp. 222–223 and 230–231; the finite division and lift-difference calculation are reconstructed below."
---

## Statement

Let p be odd, K₀/ℚ_p finite unramified with valuation ring R and arithmetic Frobenius φ, and F/K₀ finite with the same residue field. Fix a uniformizer π of F, put e=v_F(p), and let ζ∈F be a primitive p^n-th root with n≥1. Put h=e/((p-1)p^(n-1)). Suppose a normalized lift z₀∈1+X^hR⟦X⟧ with h a positive integer, a unit coefficient at X^h, and z₀(π)=ζ is given. For any z∈1+XR⟦X⟧ with z(π)=ζ and any a∈R, set ω_z(a)=E_X(a(z^(p^n)-1))(π). Then

    ω_z(a)/ω_(z₀)(a) ∈ F^(×p^n).

The result does not assert equal depths, a trace criterion, or the existence of a normalized lift.

## Facts & Assumptions

**Given:** The local fields with the same residue field, normalized and arbitrary lifts, primitive root, exponent and a in the Statement.

[F1] E_X takes sums of integral positive-order series to products, integer multiples to powers, and its integral series can be evaluated at π. [[lem-vostokov-formal-exponential-integrality-and-inversion]]

[F2] For s=z₀^(p^n)-1 and any g,k∈XR⟦X⟧, the value E_X(p^(n-1)s^(p-1)g+s^p k)(π) is a p^n-th power. [[lem-normalized-primary-perturbation-is-pn-power]]

## Proof

1.1 Since F/K₀ has the same residue field, it is totally ramified of degree e; the minimal polynomial P of π over K₀ is Eisenstein of degree e. Division of any H∈R⟦X⟧ by P has an integral quotient and a remainder polynomial of degree below e: write P=X^e+pB(X), split H=X^eC₀+D₀ with deg D₀<e, and repeat on -C₀B after removing the first quotient and remainder. Summing the resulting quotients and remainders with factors p^j converges coefficientwise by completeness. If H(π)=0, the remainder also vanishes at π and is zero by minimality of P. If in addition H(0)=0, its quotient by P has constant term zero because P(0)≠0. [given, construct, algebra]

2.1 Put s_m=z₀^(p^m)-1 and u=s_n/s_(n-1)=sum_(i=0)^(p-1)z₀^(i p^(n-1)). This is an integral series with u(0)=p and u(π)=0. Modulo p, u≡(z₀-1)^(p^(n-1)(p-1)); the normalized leading term has unit coefficient and degree h, so u mod p has X-order e. Step 1.1 gives u=PV with V∈R⟦X⟧, and reduction modulo p makes V a unit. The series z/z₀-1 has constant term zero and vanishes at π; by step 1.1 it is divisible by P with positive-order quotient. Since V is a unit, write z=z₀(1+uψ) with ψ∈XR⟦X⟧. [step 1.1, given, construct, algebra]

3.1 Put A=s_(n-1). The polynomial identity u=((1+A)^p-1)/A gives u=pU+A^(p-1) for U∈R⟦X⟧. Thus z-z₀=pB+A^(p-1)C with B,C∈XR⟦X⟧. For every m≥0, binomial expansion then gives s'_m-s_m∈p^(m+1)XR⟦X⟧+p^m A^(p-1)XR⟦X⟧+A^p XR⟦X⟧, where s'_m=z^(p^m)-1. Indeed, terms with at least two factors A^(p-1) are divisible by A^p; terms with no such factor have p-adic coefficient divisible by p^(m+1); and terms with one have coefficient divisible by p^m. For the latter two claims use v_p(binomial(p^m,j))=m-v_p(j) and the additional j factor when one A-term is selected. The case m=0 is the displayed difference itself. [step 2.1, given, construct, algebra]

4.1 The elementary Frobenius congruence s_m≡Δs_(m-1) mod p^m holds for every m≥1, and likewise for s'_m: start with coefficientwise Frobenius modulo p and repeatedly apply (1+T)^p-1. Apply Δ to the inclusion in step 3.1 for m=n-1. Since ΔA≡s_n mod p^n and Δ maps XR⟦X⟧ into X^pR⟦X⟧, it follows that s'_n-s_n=p^nG₁+p^(n-1)s_n^(p-1)G₂+s_n^pG₃ for G₁,G₂,G₃∈XR⟦X⟧. The first term has positive X-order because both sides and the other two terms do. The same argument includes n=1. [step 3.1, given, construct, algebra]

5.1 Multiplying the identity of step 4.1 by a and applying [F1], the quotient ω_z(a)/ω_(z₀)(a) is the product of E_X(aG₁)(π)^(p^n) and E_X(p^(n-1)s_n^(p-1)aG₂+s_n^p aG₃)(π). The second factor is a p^n-th power by [F2], and so is the first. This proves lift invariance, without a depth or trace assertion. [F1, F2, step 4.1, given, algebra] ∎
