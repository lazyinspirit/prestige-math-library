---
id: def-knot-arf-invariant-from-seifert-form
kind: definition
title: "Knot Arf invariant from the Seifert form"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 8
deps:
  - def-knot-seifert-pairing-and-matrix
  - lem-seifert-matrix-skew-part-is-surface-intersection
  - lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
  - def-axiom-of-choice
justified_by:
  - lem-arf-quadratic-enhancement-from-seifert-form
  - thm-seifert-s-equivalence-and-conway-arf-bridge
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "R. Robertello, An Invariant of Knot Cobordism, Communications on Pure and Applied Mathematics 18 (1965), 543–555"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/robertel.pdf"
      locator: "§§3–5, pp. 546–552: Seifert quadratic form, Arf basis formula, and determinant expansion modulo (2,(1+t)^4); all seven scanned pages visually inspected."
---
## Definition

Assume full AC. Let $K$ be a smooth oriented knot and $F$ a connected compact smooth oriented spanning surface of genus $g$. The Seifert matrix $V$ defines a function on $H_1(F;\mathbb F_2)$ by
$$q_F([x])=\operatorname{lk}(x^+,x)\pmod2=x^TVx\pmod2,$$
where an integral lift of the mod-two homology class is used in the last expression. Its polarization is the mod-two intersection form. A symplectic basis is an ordered basis $(a_1,b_1,\ldots,a_g,b_g)$ with $a_i\cdot b_j=\delta_{ij}$ and all other pairings zero. Define
$$\operatorname{Arf}(q_F)=\sum_{i=1}^g q_F(a_i)q_F(b_i)\pmod2.$$
The quadratic-enhancement lemma proves that this value is independent of symplectic basis; the S-equivalence and Conway bridge proves independence of $F$, so the resulting knot invariant is denoted $\operatorname{Arf}(K)$. For $g=0$ the empty sum is $0$.

## Definition references

[[def-knot-seifert-pairing-and-matrix|The positive-push Seifert pairing and its matrix]]

[[lem-seifert-matrix-skew-part-is-surface-intersection|The skew part is the integral intersection form]]

[[lem-arf-quadratic-enhancement-from-seifert-form|Well-definedness and basis independence of the quadratic enhancement]]

[[thm-seifert-s-equivalence-and-conway-arf-bridge|Independence of the spanning surface]]

## Facts & Assumptions

**Given:** Full AC, a smooth oriented knot, a connected compact oriented spanning surface, and its Seifert matrix.

[A1] Full AC is the ambient choice hypothesis of the Seifert pairing. [[def-axiom-of-choice]]

[F1] $H_1(F;\mathbb Z)$ is free of rank $2g$, and its mod-two reduction is $H_1(F;\mathbb F_2)$. [[def-knot-seifert-pairing-and-matrix]], [[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]]

[F2] $V-V^T$ is the unimodular algebraic intersection matrix. [[lem-seifert-matrix-skew-part-is-surface-intersection]]

