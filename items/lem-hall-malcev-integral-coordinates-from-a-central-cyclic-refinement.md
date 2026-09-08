---
id: lem-hall-malcev-integral-coordinates-from-a-central-cyclic-refinement
kind: lemma
title: Integral coordinates from a central cyclic refinement
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Druţu–Kapovich, Lectures on Geometric Group Theory (585-page draft)
      url: https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf
      locator: Lemma 10.51, printed p.288; central-factor refinement derived locally
status: draft
origin: pipeline
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
proof_strategy: direct
deps: ["lem-hall-malcev-upper-central-factors-are-torsion-free", "lem-hall-malcev-subgroups-of-finitely-generated-nilpotent-groups-are-finitely-generated", "lem-hall-malcev-integer-abelian-structure-and-rank"]
---
## Statement

A finitely generated torsion-free nilpotent group has a finite central series with infinite cyclic nontrivial factors. Ordered lifts along its descending version $G=H_0\trianglerighteq\cdots\trianglerighteq H_m=1$, with $H_{j-1}/H_j=\langle u_jH_j\rangle\cong\mathbb Z$, give a bijection $\mathbb Z^m\to G$, $(a_1,\ldots,a_m)\mapsto u_1^{a_1}\cdots u_m^{a_m}$.

## Facts & Assumptions

**Given:** $G$ is finitely generated, nilpotent and torsion-free.

[F1] Upper-central factors are torsion-free when the center is torsion-free ([[lem-hall-malcev-upper-central-factors-are-torsion-free]]).

[F2] Each upper-center subgroup is finitely generated ([[lem-hall-malcev-subgroups-of-finitely-generated-nilpotent-groups-are-finitely-generated]]).

[F3] Finitely generated torsion-free abelian groups are finite-rank free abelian ([[lem-hall-malcev-integer-abelian-structure-and-rank]]).

## Proof

1.1 The center is a subgroup of torsion-free $G$, so is torsion-free. Every upper-central factor is torsion-free and abelian; it is finitely generated as a quotient of a finitely generated subgroup. Hence it has a finite ordered free basis. Refine it by the spans of its successive basis vectors, omitting zero factors. Lifting to $G$ gives a finite central series: for each lifted intermediate subgroup the commutators with $G$ lie in the previous upper-center subgroup, hence in the previous refined subgroup. Normality follows from this containment. Each new nontrivial factor is infinite cyclic. [F1, F2, F3]

2.1 Reverse the series and choose one generator lift $u_j$ per cyclic factor. For $g\in H_0$, there is a unique integer $a_1$ with $gH_1=u_1^{a_1}H_1$. Then $u_1^{-a_1}g\in H_1$. Iterate: at stage $j$ remove $u_j^{a_j}$ on the left. The last remainder is in $H_m=1$, giving $g=u_1^{a_1}\cdots u_m^{a_m}$. All selections are finite; the exponents are uniquely determined, without choices. [step 1.1]

3.1 If two products are equal, their images in $H_0/H_1$ force equality of their first exponents, since that factor is infinite cyclic. Cancel those first powers and repeat in $H_1/H_2$, obtaining equality of every exponent. The zero tuple represents $1$; when $G=1$, $m=0$ and the single empty tuple represents its identity. Thus the product map is bijective. [step 2.1] ∎

## Source notes

[Druţu–Kapovich, Lectures on Geometric Group Theory (585-page draft)](https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf), Lemma 10.51, printed p.288; central-factor refinement derived locally. Central refinement follows the upper-center argument in draft Lemma 10.51. These integral coordinates are not assigned unisolated lower-central weights.
