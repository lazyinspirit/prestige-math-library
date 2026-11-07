---
id: ex-abc-szpiro-equivalence-under-known-implications
kind: example
title: Known implications linking abc and Szpiro formulations
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-weierstrass-model-and-discriminant-invariants
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: J. S. Milne, Elliptic Curves, Chapter II §2
      url: https://www.jmilne.org/math/Books/ectext6.pdf
      locator: General Weierstrass invariants, printed pp. 50–51.
    - title: Héctor Pasten, Shimura Curves and the abc Conjecture
      url: https://people.math.harvard.edu/~hpasten/preprints/ShABC.pdf
      locator: §3, the Frey–Hellegouarch equation and the role of its discriminant in comparing abc and Szpiro.
---

## Example

Let $A,B,C$ be pairwise coprime positive integers with $A+B=C$. The Frey–Hellegouarch Weierstrass equation
$$y^2=x(x+A)(x-B)=x^3+(A-B)x^2-ABx$$
has model discriminant $\Delta_W=16(ABC)^2$. Thus the odd-prime supports of the model discriminant and $ABC$ agree. In fact, $A+B=C$ implies $2\mid ABC$, so their full prime supports agree as well. This is the model-discriminant calculation used in the abc–Szpiro comparison; it does not by itself prove a bound for the minimal discriminant or conductor, or either conjectural implication.

## Example references

[[def-weierstrass-model-and-discriminant-invariants]]

[J. S. Milne, *Elliptic Curves*, Chapter II §2](https://www.jmilne.org/math/Books/ectext6.pdf)

[Héctor Pasten, *Shimura Curves and the abc Conjecture*, §3](https://people.math.harvard.edu/~hpasten/preprints/ShABC.pdf)

## Facts & Assumptions

**Given:** Pairwise coprime positive integers $A,B,C$ with $A+B=C$.

[F1] For a generalized Weierstrass equation, $b_2=a_1^2+4a_2$, $b_4=a_1a_3+2a_4$, $b_6=a_3^2+4a_6$, $b_8=a_1^2a_6+4a_2a_6-a_1a_3a_4+a_2a_3^2-a_4^2$, and $\Delta=-b_2^2b_8-8b_4^3-27b_6^2+9b_2b_4b_6$. ([[def-weierstrass-model-and-discriminant-invariants]])

## Verification

1.1 Comparing coefficients gives $a_1=a_3=a_6=0$, $a_2=A-B$, and $a_4=-AB$. Thus [F1] gives $b_2=4(A-B)$, $b_4=-2AB$, $b_6=0$, and $b_8=-A^2B^2$. [given, F1, algebra]

2.1 Substitution into [F1] yields $$\Delta_W=16(A-B)^2A^2B^2+64A^3B^3=16A^2B^2((A-B)^2+4AB)=16A^2B^2(A+B)^2=16(ABC)^2.$$ Because $A,B,C$ are positive and nonzero, this discriminant is nonzero. The equality shows that every odd prime divides $\Delta_W$ exactly when it divides $ABC$; the factor $16$ contributes only the prime $2$. Since $A+B=C$, at least one of $A,B,C$ is even, so $2\mid ABC$ and the full prime supports agree. [given, F1, step 1.1, algebra] ∎

## Remarks

The broader comparison named in the title remains held: neither a minimal-discriminant/conductor comparison at all primes nor either conjectural implication follows from this model calculation. In particular the classical and modified Szpiro formulations must not be conflated. No open problem is a logical premise of the verification above.
