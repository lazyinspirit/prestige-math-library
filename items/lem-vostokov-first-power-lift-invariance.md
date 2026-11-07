---
id: lem-vostokov-first-power-lift-invariance
kind: lemma
title: "First-power invariance under a change of Vostokov lift"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - lem-vostokov-formal-exponential-integrality-and-inversion
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Fesenko–Vostokov, Local Fields and Their Extensions, second edition"
      url: "https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf"
      locator: "Chapter VI, §4.2, printed pp. 230–231; the first-power case is reconstructed directly below."
---

## Statement

Let p be odd, K₀/ℚ_p a finite unramified extension with valuation ring R and arithmetic Frobenius φ, and let F/K₀ be a finite extension with uniformizer π. Let E_X and Δ be the formal exponential and Frobenius operator of [[lem-vostokov-formal-exponential-integrality-and-inversion]]. If z,z'∈1+XR⟦X⟧ satisfy z(π)=z'(π) and a∈R, then

    E_X(a(z'^p-1))|_(X=π) / E_X(a(z^p-1))|_(X=π) ∈ F^(×p).

No primitive-root or maximality hypothesis is needed. The assertion concerns powers modulo p only; it does not assert equal depths of the two values or invariance modulo p^n for n>1.

## Facts & Assumptions

**Given:** The supplied fields, uniformizer, Frobenius, formal series, evaluation equality and a in the Statement.

[F1] E_X maps XR⟦X⟧ integrally into 1+XR⟦X⟧, takes sums to products and integer multiples to powers, and its values at π converge in F. [[lem-vostokov-formal-exponential-integrality-and-inversion]]

## Proof

1.1 Put d=z'-z∈XR⟦X⟧, so d(π)=0. The binomial formula gives z'^p-z^p=pC+d^p with C∈XR⟦X⟧, since p divides every intermediate binomial coefficient. The coefficientwise congruence φ(c)≡c^p mod p gives Δd≡d^p mod pR⟦X⟧. Put H=φ^(-1)(a)d and B=a(d^p-Δd)/p; both lie in XR⟦X⟧, H(π)=0, and a(z'^p-z^p)=p(aC+B)+ΔH. [given, construct, algebra]

2.1 By the defining series L(H)=sum_(j>=0)p^(-j)Δ^jH, one has L(ΔH)=p(L(H)-H) coefficientwise. Formal exponential over K₀⟦X⟧ therefore gives E_X(ΔH)=E_X(H)^p exp(-pH). The series exp(-pH) is integral: for odd p, v_p(p^m/m!) tends to infinity, and every coefficient is a finite sum. At π, its defining sum can be evaluated termwise, because its m-th summand has valuation at least v_F(p^m/m!), independently of m and the valuation of H(π). Thus exp(-pH)(π)=exp(-pH(π))=1. [F1, step 1.1, construct, algebra]

3.1 By [F1] and steps 1.1–2.1, the displayed quotient equals E_X(p(aC+B)+ΔH)(π) = E_X(aC+B+H)(π)^p. This is a pth power in F×, including d=0 or a=0. The argument does not compare valuation depths and does not claim a p^n-th power for n>1. [F1, step 1.1, step 2.1, algebra] ∎
