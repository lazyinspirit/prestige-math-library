---
id: lem-qftx-bv-master-equation-brst-nilpotence
kind: lemma
title: Classical Master Equation and Nilpotence of the BV Differential
status: draft
origin: session
dependency_level: 3
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
  - def-qftx-bv-antibracket-master-action
dependency_roles:
  def-qftx-bv-antibracket-master-action: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Joaquim Gomis, Jordi París, and Stuart Samuel, Antibracket, Antifields and Gauge-Theory Quantization"
      url: "https://arxiv.org/pdf/hep-th/9412228"
      locator: "§§4.2–4.3 and 4.6: shifted Jacobi identity, classical master equation, and the derivation of BRST nilpotence from the master equation."
    - title: "Jian Qiu and Maxim Zabzine, Introduction to Graded Geometry, Batalin-Vilkovisky Formalism and their Applications"
      url: "https://arxiv.org/pdf/1105.2680"
      locator: "§§4.2–4.4, PDF pp. 16–26: the finite-dimensional odd Poisson/Gerstenhaber bracket and its graded Jacobi identity."
verification:
  precheck: pending
---

## Statement

Let $\mathcal B$ be a graded-commutative canonical BV algebra with an odd antibracket $(\ ,\ )$ of ghost number $+1$ satisfying shifted graded skew-symmetry and the shifted Jacobi identity. Assume the center of $\mathcal B$ contains no nonzero element of ghost number one. The finite-dimensional canonical coordinate algebra in the preceding definition has this property because a central element has zero derivative with respect to every field and antifield coordinate and is therefore a numerical constant; for a formal local-functional domain the no-ghost-number-one-center condition is an explicit hypothesis. For any even $S_{\mathrm{BV}}\in\mathcal B$ of ghost number zero, define $sF:=(S_{\mathrm{BV}},F)$. Then $s^2=0$ on $\mathcal B$ if and only if the classical master equation $(S_{\mathrm{BV}},S_{\mathrm{BV}})=0$ holds.

## Statement references

[[def-qftx-bv-antibracket-master-action|Canonical BV algebra and master-action convention]]

[Gomis, París, and Samuel, §§4.2–4.3 and 4.6](https://arxiv.org/pdf/hep-th/9412228)

[Qiu and Zabzine, §§4.2–4.4](https://arxiv.org/pdf/1105.2680)

## Facts & Assumptions

**Given:** The canonical BV algebra, its odd antibracket, and an even ghost-number-zero element $S_{\mathrm{BV}}$.

[A1] The chosen domain has no nonzero central elements of ghost number one; this follows from canonical finite-dimensional coordinates and is separately assumed for any formal local-functional extension. [[def-qftx-bv-antibracket-master-action]]

[F1] [[def-qftx-bv-antibracket-master-action]]: the antibracket has ghost number $+1$, satisfies shifted graded skew-symmetry and shifted Jacobi, and the BV differential convention is $sF=(S_{\mathrm{BV}},F)$.

## Proof

1.1 For homogeneous $F$ of parity $\epsilon_F$, the shifted Jacobi identity with the first two entries equal to the even element $S_{\mathrm{BV}}$ gives $((S_{\mathrm{BV}},S_{\mathrm{BV}}),F)+2(-1)^{\epsilon_F}((S_{\mathrm{BV}},F),S_{\mathrm{BV}})=0$. Shifted skew-symmetry also gives $(S_{\mathrm{BV}},(S_{\mathrm{BV}},F))=-(-1)^{\epsilon_F}((S_{\mathrm{BV}},F),S_{\mathrm{BV}})$. Combining these two equalities yields $s^2F=(S_{\mathrm{BV}},(S_{\mathrm{BV}},F))=\tfrac12((S_{\mathrm{BV}},S_{\mathrm{BV}}),F)$. [F1, algebra]

2.1 If $(S_{\mathrm{BV}},S_{\mathrm{BV}})=0$, step 1.1 gives $s^2F=0$ for every $F\in\mathcal B$. This is the forward implication. [step 1.1, algebra]

3.1 Conversely, if $s^2F=0$ for every $F$, step 1.1 implies $((S_{\mathrm{BV}},S_{\mathrm{BV}}),F)=0$ for every $F$, so $(S_{\mathrm{BV}},S_{\mathrm{BV}})$ is central. Its ghost number is $0+0+1=1$ by [F1], and [A1] therefore forces $(S_{\mathrm{BV}},S_{\mathrm{BV}})=0$. This proves the reverse implication. [F1, A1, step 1.1] ∎
