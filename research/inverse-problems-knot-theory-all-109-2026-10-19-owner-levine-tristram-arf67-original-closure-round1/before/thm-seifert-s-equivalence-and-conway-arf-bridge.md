---
id: thm-seifert-s-equivalence-and-conway-arf-bridge
kind: theorem
title: "Seifert S-equivalence and the Conway–Arf bridge"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 16
deps:
  - def-knot-seifert-pairing-and-matrix
  - lem-seifert-matrices-of-a-knot-are-s-equivalent
  - thm-seifert-determinant-is-the-knot-alexander-polynomial
  - def-knot-arf-invariant-from-seifert-form
  - def-seifert-s-equivalence-and-conway-normalization
  - lem-arf-quadratic-enhancement-from-seifert-form
  - lem-conway-polynomial-from-seifert-determinant
  - lem-arf-seifert-determinant-congruence-near-minus-one
  - cor-knot-alexander-normalization-symmetry-and-genus-bound
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "W. B. Raymond Lickorish, An Introduction to Knot Theory, Graduate Texts in Mathematics 175, Springer (1997)"
      url: "https://ebooks.karbust.me/Mathematics/W.%20B.%20Raymond%20Lickorish%20-%20An%20Introduction%20to%20Knot%20Theory%20%281997%29%20%5B978-1-4612-0691-0%5D.pdf"
      locator: "Printed Chapter 10, Definition 10.3, Proposition 10.4 and Theorem 10.7, printed pp. 105–108; complete argument read in full-text PDF copy; publisher chapter record inspected."
    - title: "R. Robertello, An Invariant of Knot Cobordism, Communications on Pure and Applied Mathematics 18 (1965), 543–555"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/robertel.pdf"
      locator: "§§3–5, pp. 546–552: Seifert quadratic form, Arf basis formula, and determinant expansion modulo (2,(1+t)^4); all seven scanned pages visually inspected."
    - title: "Nikolai Saveliev, Lectures on the Topology of 3-Manifolds, 2nd revised edition"
      url: "https://poisson.phc.dm.unipi.it/~camponovo/libri/3mani.pdf"
      locator: "§9.2, printed pp. 112–114 (PDF pp. 124–126): quadratic refinement, Arf invariant, and Alexander-polynomial coefficient; complete 220-page book inspected."
---
## Statement

Assume full AC. The Seifert quadratic enhancement and its Arf value are independent of the spanning surface and integral symplectic basis of an oriented knot $K$. Under the convention $\Delta_K(t)=\nabla_K(t^{1/2}-t^{-1/2})$ with $\Delta_K(1)=1$, the coefficient $a_2(\nabla_K)$ of $z^2$ satisfies
$$\operatorname{Arf}(K)\equiv a_2(\nabla_K)\pmod2.$$

## Statement references

[[def-knot-arf-invariant-from-seifert-form|The Seifert quadratic enhancement and Arf definition]]

[[def-seifert-s-equivalence-and-conway-normalization|The Conway and symmetric Alexander conventions]]

[[lem-conway-polynomial-from-seifert-determinant|The determinant realization and skein relation]]

## Facts & Assumptions

**Given:** Full AC and a smooth oriented knot $K\subset S^3$.

[A1] Full AC supplies the Alexander and Seifert-pairing conventions. [[def-axiom-of-choice]]

[F1] Any two spanning-surface Seifert matrices are S-equivalent. [[lem-seifert-matrices-of-a-knot-are-s-equivalent]]

[F2] The quadratic enhancement is well-defined, has basis-independent Arf value, and is unchanged under either enlargement. [[lem-arf-quadratic-enhancement-from-seifert-form]]

[F3] The normalized Conway determinant is independent of surface and basis and has the declared skein normalization. [[lem-conway-polynomial-from-seifert-determinant]]

[F4] In the symmetric normalized variable, $\Delta_K^\#(t)=\nabla_K(t^{1/2}-t^{-1/2})$. [[def-seifert-s-equivalence-and-conway-normalization]]

[F5] The Seifert determinant near $t=-1$ is $1+\operatorname{Arf}(K)(1+t)^2/t$ modulo $(2,(1+t)^4)$. [[lem-arf-seifert-determinant-congruence-near-minus-one]]

## Proof

1.1 By [F1], matrices from any two spanning surfaces are connected by congruences and elementary enlargements. Congruence changes only the basis, while [F2] preserves the quadratic Arf value through each enlargement. Thus the value is independent of surface and basis. [A1, F1, F2, given]

2.1 Write $\nabla_K(z)=1+a_2z^2+a_4z^4+\cdots$. For a knot the matrix size is $2g$, so $D_K(u^{-1})=\det(u^{-1}V-uV^T)=\det(uV^T-u^{-1}V)=D_K(u)$, using even size in the first equality and transposition in the second. Since replacing $u$ by $u^{-1}$ sends $z=u-u^{-1}$ to $-z$, and substitution into the Laurent polynomial ring is injective (the highest Laurent power of a nonzero polynomial in $z$ cannot cancel), this identity gives $\nabla_K(z)=\nabla_K(-z)$ and hence all odd coefficients vanish. Set $u^2=t$. Then $z^2=(u-u^{-1})^2=t+t^{-1}-2\equiv(1+t)^2/t\pmod{(2,(1+t)^4)}$, and $z^4$ is divisible by $(1+t)^4$ in that quotient. Hence [F4] gives
$$\Delta_K^\#(t)\equiv1+a_2(\nabla_K)(1+t)^2/t\pmod{(2,(1+t)^4)}.$$
Comparing with [F5], and using that $(1+t)^2/t$ is nonzero modulo $(1+t)^4$, yields $a_2(\nabla_K)\equiv\operatorname{Arf}(K)\pmod2$. [F3, F4, F5, step 1.1, algebra] ∎
