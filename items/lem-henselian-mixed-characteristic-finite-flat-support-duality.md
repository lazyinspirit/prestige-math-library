---
id: lem-henselian-mixed-characteristic-finite-flat-support-duality
kind: lemma
title: "Finite-flat support duality over Henselian mixed-characteristic traits under AC/DC"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 21
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-finite-flat-group-scheme-and-cartier-dual
  - def-flat-cohomology-with-compact-support-for-global-curves-and-integer-rings
  - lem-finite-flat-groups-over-henselian-dvr-have-zero-higher-cohomology
  - lem-finite-flat-torsors-over-a-henselian-dvr-extend-generic-sections
  - lem-henselian-completion-finite-etale-and-finite-module-tate-comparison
  - lem-henselian-finite-residue-brauer-completion-and-support-trace
  - lem-henselian-mixed-characteristic-integral-flat-annihilators
justified_by: []
proof_strategy: direct
axiom_use: "AC and DC are assumed for the Henselian generic duality, trace and exact integral-annihilator suppliers."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Arithmetic Duality Theorems, second edition"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
      locator: "III §1, pp. 241–243, finite-flat local duality; the Henselian AC/DC support-cone argument is reconstructed here."
verification: {}
---

## Statement

Assume AC and DC. Let $R$ be a Henselian discrete valuation ring with finite residue field, let $K=\operatorname{Frac}(R)$ have characteristic zero, and let $G$ be a commutative finite flat $R$-group with Cartier dual $G^D$. For every integer $r$, evaluation and the normalized support trace induce a perfect pairing of finite groups
$$H^r(R,G^D)\times H_x^{3-r}(R,G)\longrightarrow\mathbb Q/\mathbb Z,$$
where support cohomology uses the cone of restriction to $K$.

## Facts & Assumptions

**Given:** The Henselian DVR, finite flat group, dual and support cone in the Statement.

[A1] The Axiom of Choice and Dependent Choice are assumed. [[def-axiom-of-choice]] [[def-dependent-choice]]

[F1] Cartier evaluation and the support cone provide the natural cup-product and localization maps. [[def-finite-flat-group-scheme-and-cartier-dual]] [[def-flat-cohomology-with-compact-support-for-global-curves-and-integer-rings]]

[F2] Finite-flat groups have vanishing integral cohomology in degrees at least two. [[lem-finite-flat-groups-over-henselian-dvr-have-zero-higher-cohomology]]

[F3] Integral points equal generic points and restriction on degree-one torsors is injective. [[lem-finite-flat-torsors-over-a-henselian-dvr-extend-generic-sections]]

[F4] Generic Tate pairings are perfect and cohomology vanishes above degree two; the support trace is compatible with the generic invariant. [[lem-henselian-completion-finite-etale-and-finite-module-tate-comparison]] [[lem-henselian-finite-residue-brauer-completion-and-support-trace]]

[F5] The two integral degree-one images are exact mutual annihilators in the generic Tate pairing. [[lem-henselian-mixed-characteristic-integral-flat-annihilators]]

## Proof

**Proof technique:** identify the support cone groups in the two nonzero degrees and descend the generic Tate pairings.

1.1 The localization sequence of the cone [F1], integral vanishing [F2], and point and torsor injectivity [F3] give $H_x^i(R,G)=0$ for $i\le1$, $H_x^2(R,G)\cong H^1(K,G)/H^1(R,G)$, and $H_x^3(R,G)\cong H^2(K,G)$. Generic vanishing in [F4] also gives $H_x^i(R,G)=0$ for $i\ge4$. Negative integral cohomology vanishes by the same cone convention. All displayed groups are finite by [F4] and [F5]. [A1, F1, F2, F3, F4, F5, given, algebra]

2.1 At $r=0$, [F3] identifies $G^D(R)$ with $G^D(K)$ and step 1.1 identifies the support group with $H^2(K,G)$. By [F4] the generic pairing is perfect. The support cup product agrees with that pairing through the cone boundary and normalized trace by naturality in [F1] and [F4], so the required pairing is perfect. [F1, F3, F4, step 1.1, algebra]

2.2 At $r=1$, step 1.1 identifies the support factor with $H^1(K,G)/H^1(R,G)$. By [F5], $H^1(R,G)$ is the full annihilator of $H^1(R,G^D)$ in the perfect generic pairing. Hence that pairing induces a perfect pairing between $H^1(R,G^D)$ and the quotient. The cone boundary and trace compatibility in [F1] and [F4] identify it with the stated support pairing. [F1, F4, F5, step 1.1, algebra]

3.1 For $r\ge2$, the integral factor is zero by [F2], while $3-r\le1$ and the support factor is zero by step 1.1. For $r<0$, the integral factor is zero by the cohomological convention and $3-r\ge4$, so the support factor is also zero. The zero pairing is perfect, completing every integer degree. [F2, step 1.1, algebra] ∎
