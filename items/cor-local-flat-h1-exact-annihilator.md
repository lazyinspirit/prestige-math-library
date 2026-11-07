---
id: cor-local-flat-h1-exact-annihilator
kind: corollary
title: "Integral H¹ classes are exact annihilators in local flat duality"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 12
deps:
  - thm-local-flat-duality-for-finite-flat-group-schemes
  - def-flat-cohomology-with-compact-support-for-global-curves-and-integer-rings
justified_by: []
proof_strategy: direct
axiom_use: "No additional axiom is introduced; all local-field assumptions are inherited from the Local Flat Duality theorem."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Arithmetic Duality Theorems, 2nd ed., Chapter III, §1, Corollary 1.4"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
    - title: "Cyril Demarche and David Harari, Artin–Mazur–Milne duality for fppf cohomology, §5"
      url: "https://arxiv.org/pdf/1804.03941"
verification: {}
---

## Statement

Let $R$, $K$, $G$, and $G^D$ satisfy the hypotheses of the Local Flat Duality
theorem. Under the generic-fibre cup-product pairing
$$H^1(K,G^D)\times H^1(K,G)\longrightarrow H^2(K,\mathbb G_m)
\xrightarrow{\operatorname{inv}_K}\mathbb Q/\mathbb Z,$$
the subgroup $H^1(R,G^D)$ is exactly
$$\{x\in H^1(K,G^D):\langle x,y\rangle=0\text{ for every }y\in H^1(R,G)\}.$$

## Statement references

[[thm-local-flat-duality-for-finite-flat-group-schemes]]

[Milne, *Arithmetic Duality Theorems*, Chapter III, Corollary 1.4](https://www.jmilne.org/math/Books/ADTnot.pdf)

[Demarche–Harari, §5](https://arxiv.org/pdf/1804.03941)

## Facts & Assumptions

**Given:** The local DVR and group scheme data in the Statement.

[F1] [[thm-local-flat-duality-for-finite-flat-group-schemes]]: the cup-product
pairing between $H^1(R,G^D)$ and $H_x^2(R,G)$ is perfect.

[F2] [[def-flat-cohomology-with-compact-support-for-global-curves-and-integer-rings]]:
$H_x^2(R,G)=H^1(K,G)/H^1(R,G)$.

[L1] Milne, Chapter III, Corollary 1.4: under local Tate duality the two
integral cohomology subgroups annihilate one another in the generic-fibre
pairing.
[Milne, Chapter III, Corollary 1.4](https://www.jmilne.org/math/Books/ADTnot.pdf)

## Proof

**Proof technique:** identify the support group with the generic-fibre quotient.

**Given:** [F1]–[F2] and the local hypotheses.

1.1 The localization sequence in [F2] identifies the second factor of the
perfect support pairing [F1] with
$H^1(K,G)/H^1(R,G)$. Thus $H^1(R,G^D)$ is the full annihilator of
$H^1(R,G)$ in the generic-fibre pairing. [F1, F2]

1.2 The generic-fibre pairing is the evaluation cup product from the Statement.
Its restriction to the two integral subgroups is zero by [L1], and [F1]
identifies its annihilator with the full quotient dual. This is exactly the
claimed equality of subgroups. [F1, L1, step 1.1, algebra] ∎
