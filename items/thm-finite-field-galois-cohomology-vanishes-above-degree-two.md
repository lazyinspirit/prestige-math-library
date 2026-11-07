---
id: thm-finite-field-galois-cohomology-vanishes-above-degree-two
kind: theorem
title: "Galois cohomology of a finite field vanishes above degree two for any discrete module"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-continuous-cohomology-of-a-profinite-group-with-discrete-module
  - lem-cyclic-group-cohomology-norm-and-inflation
  - thm-absolute-galois-group-of-finite-field-is-procyclic
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jürgen Neukirch, Alexander Schmidt, Kay Wingberg, Cohomology of Number Fields, 2nd ed., §1.7, Proposition 1.7.7"
      url: "https://www.mathi.uni-heidelberg.de/~schmidt/NSW2e/NSW2.3.pdf"
    - title: "J. S. Milne, Class Field Theory, version 4.03, Chapter II and homological appendix"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $k$ be a finite field and let $M$ be any
discrete abelian group with a continuous action of its absolute Galois group
$G_k$. Then
$$H^r_{\mathrm{cont}}(G_k,M)=0\qquad(r\ge3).$$

## Statement references

[[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]]

[[thm-absolute-galois-group-of-finite-field-is-procyclic]]

[Neukirch–Schmidt–Wingberg, *Cohomology of Number Fields*, 2nd ed., §1.7, Proposition 1.7.7](https://www.mathi.uni-heidelberg.de/~schmidt/NSW2e/NSW2.3.pdf)

[J. S. Milne, *Class Field Theory*, Chapter II and homological appendix](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

## Facts & Assumptions

**Given:** AC, a finite field $k$, and a discrete continuous $G_k$-module $M$.

[A1] The Axiom of Choice is the premise of the supplied procyclic absolute
Galois group theorem. ([[def-axiom-of-choice]])

[A2] AC implies DC, as required for the supplied derived-functor
interpretation of continuous cohomology.
([[thm-choice-implies-dependent-implies-countable-choice]],
[[def-dependent-choice]])

[F1] $G_k\cong\widehat{\mathbb Z}$ with finite cyclic quotients generated
by Frobenius. ([[thm-absolute-galois-group-of-finite-field-is-procyclic]])

[F2] Continuous cohomology is the filtered direct limit over these finite
quotients. ([[thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients]])

[F3] In cyclic degrees $2j$ and $2j+1$, $j\ge1$, inflation to a quotient
whose order is multiplied by $a$ multiplies the cochain class by $a^j$.
([[lem-cyclic-group-cohomology-norm-and-inflation]])

## Proof

**Proof technique:** compute on finite cyclic quotients and use periodicity.

**Given:** The data above.

1.1 Let $r\ge3$ and represent a class $\alpha$ at a finite quotient $C_n$ by [F2] under [A2]. The finite cyclic formulas in [F3] show that positive-degree classes at $C_n$ are annihilated by $n$: in degree two this follows from $n m=N_nm$ for fixed $m$, in degree three from $n m\equiv N_nm\pmod{(\sigma-1)M}$, and higher degrees repeat these two formulas by the periodic resolution. [A1, A2, F1, F2, F3, given]

2.1 If $r=3$, write the represented class as $x\in\ker N_n/(\sigma-1)M$. Inflate to $C_{n^2}$. By [F3] the class is represented by $n x$ in the same quotient, and $n x\equiv(1+\sigma+\cdots+\sigma^{n-1})x=N_nx=0 \pmod{(\sigma-1)M},$ because $\sigma^i x\equiv x\pmod{(\sigma-1)M}$. Hence it dies. [F3, step 1.1, algebra]

2.2 If $r\ge4$, inflation from $C_n$ to $C_{n^2}$ multiplies the class by $n^j$ with $j=\lfloor r/2\rfloor\ge2$. The target cyclic cohomology in positive degree is annihilated by $n^2$ by the same norm and periodicity calculation as step 1.1, so the inflated class is zero. [F3, step 1.1, algebra]

3.1 Each class in the direct limit is therefore killed at a later quotient by step 2.1 or 2.1. The direct limit [F2] is zero in all degrees $r\ge3$. AC and DC are used through [A1]–[A2]. [A1, A2, F2, step 2.1, step 2.2] ∎