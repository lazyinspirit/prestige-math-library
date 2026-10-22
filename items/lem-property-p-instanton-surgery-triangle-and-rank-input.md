---
id: lem-property-p-instanton-surgery-triangle-and-rank-input
kind: lemma
title: Noncyclic SU(2) representations of numerator-one surgeries
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-knot-exterior
  - def-knot-meridian-and-preferred-longitude
  - def-oriented-slope-and-knot-dehn-filling
  - thm-knot-exterior-homology-and-longitude
  - lem-knot-surgery-first-homology-mayer-vietoris
  - lem-nontrivial-knot-exterior-boundary-incompressible
  - def-instanton-surgery-triangle-data
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: Retains full AC for the externally imported gauge-theoretic theorem.
  The rational inequality and direct application require no additional choice.
provenance:
  statement: literature-derived
  proof: ai-altered
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
    - title: "P. B. Kronheimer and T. S. Mrowka, Dehn surgery, the fundamental group and SU(2), Mathematical Research Letters 11 (2004), 741–754, Theorem 1, p. 741"
      url: https://doi.org/10.4310/mrl.2004.v11.n6.a3
    - title: P. B. Kronheimer and T. S. Mrowka, Dehn surgery, the fundamental group
        and SU(2), Theorem 1 and §§2–4
      url: https://people.math.harvard.edu/~kronheim/hrpthree.pdf
    - title: P. B. Kronheimer and T. S. Mrowka, Witten's conjecture and Property P,
        §§1 and 3
      url: https://arxiv.org/pdf/math/0311489
    - title: P. B. Kronheimer and T. S. Mrowka, Knots, sutures and excision, §§7.5 and
        7.8
      url: https://arxiv.org/pdf/0807.4891
    - title: "Kimihiko Motegi, Dehn surgery on knots: survey, pp. 19–21 and 26"
      url: https://www.math.tsukuba.ac.jp/~tange/diftop22/Dehn_surgery_survey.pdf
---

## Statement

Assume the Axiom of Choice. Let $K\subset S^3$ be a nontrivial smooth knot, and let $p,q$ be coprime integers with $|p|=1$ and $q\ne0$. For the Dehn filling $Y_{p/q}=E_K(p/q)$ whose attached solid-torus meridian is identified with $p[\mu]+q[\lambda]$, the fundamental group $\pi_1(Y_{p/q})$ admits a homomorphism to $SU(2)$ with noncyclic image.

## Statement references

[[def-knot-exterior|Chosen knot exterior]]

[[def-knot-meridian-and-preferred-longitude|Meridian and preferred longitude]]

[[def-oriented-slope-and-knot-dehn-filling|Filling slope convention]]

[[def-instanton-surgery-triangle-data|Ordinary closed instanton surgery data]]

[Kronheimer–Mrowka, *Dehn surgery, the fundamental group and SU(2)*, Theorem 1 and §§2–4](https://people.math.harvard.edu/~kronheim/hrpthree.pdf)

[Kronheimer–Mrowka, *Witten's conjecture and Property P*, §§1 and 3](https://arxiv.org/pdf/math/0311489)

[Kronheimer–Mrowka, *Knots, sutures and excision*, §§7.5 and 7.8](https://arxiv.org/pdf/0807.4891)

[Motegi, *Dehn surgery on knots: survey*, pp. 19–21 and 26](https://www.math.tsukuba.ac.jp/~tange/diftop22/Dehn_surgery_survey.pdf)

[Kronheimer–Mrowka, published Theorem 1, p. 741](https://doi.org/10.4310/mrl.2004.v11.n6.a3)

## Facts & Assumptions

**Given:** Full AC, a nontrivial smooth knot $K\subset S^3$, and coprime integers $p,q$ with $|p|=1$ and $q\ne0$.

[F1] **External input.** For a nontrivial knot $K\subset S^3$ and rational surgery coefficient $r$ with $|r|\le2$, Kronheimer–Mrowka's published Theorem 1 states that the surgery group admits a homomorphism to $SU(2)$ with noncyclic image (and consequently is not cyclic). Source: *Dehn surgery, the fundamental group and SU(2)*, Mathematical Research Letters **11** (2004), 741–754, Theorem 1, p. 741, DOI [10.4310/mrl.2004.v11.n6.a3](https://doi.org/10.4310/mrl.2004.v11.n6.a3). This is an imported theorem, not a locally reconstructed gauge-theoretic proof.

[F2] Rational coefficient $p/q$ denotes filling with meridian $p[\mu]+q[\lambda]$ in the meridian and preferred-longitude convention; simultaneous sign change leaves the unoriented slope unchanged. [[def-oriented-slope-and-knot-dehn-filling]] [[def-knot-meridian-and-preferred-longitude]]

[A1] Full AC is retained as assumed in the Statement. [[def-axiom-of-choice]]

## Proof

1.1 Since $q$ is a nonzero integer, $|q|\ge1$. Thus $r=p/q$ is rational and satisfies $|r|=1/|q|\le1\le2$. By [F2], the manifold in the Statement is precisely the coefficient-$r$ surgery appearing in [F1]. Both signs of $r$ are covered by its absolute-value hypothesis. [given, F2, algebra]

2.1 Apply [F1] to this nontrivial knot and this coefficient. It gives a homomorphism $\pi_1(Y_{p/q})\to SU(2)$ with noncyclic image, as required. [given, A1, F1, step 1.1] ∎

## External input and reading limits

The published primary PDF was obtained from the International Press journal archive. Theorem 1 on printed p. 741 (PDF p. 1) was read directly, including its exact nontrivial-knot and $|r|\le2$ hypotheses and its noncyclic-image conclusion. The slope definitions and $[pa+qb]$ filling convention on pp. 743 and 745–746 were inspected, together with the application and nonvanishing discussion on pp. 752–753. These source readings identify the imported theorem and its convention; they do not constitute a local proof audit of its gauge theory or of all its cited prerequisites.

The paper explicitly says on p. 741 that its proof avoids explicit instanton Floer homology and the Floer exact triangle, using holonomy perturbations instead. Accordingly, this item's historical identifier does not assert a general surgery-triangle or rank theorem: its full Statement is the numerator-one representation conclusion proved above from the external input. The retained singular-instanton complex and integral resolution cube keep their existing scope; neither is relabelled as supplying this closed-surgery result. Ordinary KHI nonvanishing and varying-meridian representation paths are separate inputs and are not inferred here.
