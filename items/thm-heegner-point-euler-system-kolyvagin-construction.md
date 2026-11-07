---
id: thm-heegner-point-euler-system-kolyvagin-construction
kind: theorem
title: "Heegner Points Yield the Kolyvagin Class System"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 28
deps:
  - def-classical-heegner-point-kolyvagin-data
  - lem-kolyvagin-derivative-operator-identity
  - thm-number-field-ray-class-field-artin-isomorphism
  - thm-ring-class-group-is-ray-class-group-quotient-by-scalar-residues
  - thm-ring-class-reciprocity-on-cm-singular-moduli
  - thm-singular-modulus-generates-the-ring-class-field
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Benjamin Howard, The Heegner Point Kolyvagin System"
      url: "https://arxiv.org/pdf/1202.6340"
      locator: "§1.7, printed pp. 19–21, especially Proposition 1.7.4 and Theorem 1.7.5."
verification: {}
---

## Statement

Assume the classical Heegner-point Kolyvagin data in the setting of Howard: $E/\mathbb Q$ has conductor $N$, $K$ is imaginary quadratic with $D_K\ne-3,-4$, $p$ is odd and $p\nmid ND_K$, every prime dividing $N$ splits in $K$, and the Galois action on $T_p(E)$ is surjective. For $\ell$ in the admissible set, put $a_\ell=\operatorname{tr}(\operatorname{Frob}_\ell\mid T_p(E))$ and $I_\ell=(a_\ell,\ell+1)\subset\mathbb Z_p$; the Heegner points satisfy
$$\operatorname{Norm}_{K[n\ell]/K[n]}P[n\ell]=a_\ell P[n]$$
and Howard's reduction congruence (13) of §1.7. Then applying the derivative operators $D_n$, the finite-to-singular maps, and the Kummer maps to these points, with the automorphisms $\chi_\ell$ of Proposition 1.7.4, gives a Kolyvagin system $\kappa'$ for $(T_p(E),\mathcal F,\mathcal L)$ whose initial coordinate is the Kummer class $\kappa_1$ of the norm of the conductor-one Heegner point.

## Statement references

[[def-classical-heegner-point-kolyvagin-data]]

[Howard, *The Heegner Point Kolyvagin System*, §1.7, Proposition 1.7.4 and Theorem 1.7.5](https://arxiv.org/pdf/1202.6340)

## Authoring status

The source's proof uses the Heegner norm and reduction congruences, the finite-to-singular local isomorphism, and the prime-by-prime automorphisms $\chi_\ell$. The current ring-class and CM suppliers are proof-open and the local proof of Proposition 1.7.4 remains unconstructed, so the theorem is escalated. The congruence is deliberately identified by its exact source equation; the local OCR does not preserve its full summation notation, and no formula has been inferred.
