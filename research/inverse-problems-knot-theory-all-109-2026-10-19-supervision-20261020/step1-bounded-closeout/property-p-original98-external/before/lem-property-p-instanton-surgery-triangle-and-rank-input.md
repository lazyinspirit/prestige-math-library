---
id: lem-property-p-instanton-surgery-triangle-and-rank-input
kind: lemma
title: Noncyclic SU(2) representations of numerator-one surgeries
status: draft
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
axiom_use: Assumes full AC for the analytic perturbation, regularity, and
  compactness constructions required by the cited gauge-theory route. No
  choice-free analytic construction is claimed.
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
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

## Proof obligation

The given inputs are full AC, a nontrivial smooth knot, and a numerator-one nonmeridional filling slope in the stated meridian-longitude convention. Kronheimer–Mrowka's Theorem 1 states the required noncyclic $SU(2)$-image conclusion whenever the rational surgery coefficient $r$ satisfies $|r|\le2$; for this primitive slope, $r=p/q$ and $|r|=1/|q|\le1$. This is an exact literature interface, not a local proof supplier.

The local gauge-theoretic proof is not supplied. The inspected primary proof proceeds through a holonomy-perturbed representation variety on $0$-surgery, an analysis of reducible and irreducible boundary holonomies, and a holonomy deformation that empties the perturbed critical set when the surgery group has only cyclic $SU(2)$ images. A long-neck argument then uses finite-energy ASD compactness and gauge fixing to force the relevant Donaldson invariant to vanish; the taut-foliation/symplectic embedding and Seiberg–Witten/Donaldson nonvanishing argument yields the contradiction. The paper explicitly says that this proof avoids instanton Floer homology and the surgery exact triangle. The separate 2008 proof uses taut-sutured nonvanishing and the Floer triangle, but its nonvanishing theorem depends on the sutured decomposition result.

Required local modules include the reducible-locus and holonomy-perturbation argument, the finite-energy ASD long-neck compactness/gluing proof, and the taut-foliation-to-symplectic/Donaldson nonvanishing bridge (or complete local sutured nonvanishing/decomposition plus the triangle).

The retained singular-instanton analytic foundation supplies the based earring complex and its invariance at its declared scope, and the retained integral resolution construction supplies its cube and spectral sequence. Neither supplies ordinary closed-surgery nonvanishing, the surgery exact triangle with the required bundle and filling identifications, or the stated noncyclic representations. The ordinary all-genus cap/module premise of the KHI rank detector remains separate; even the full rank-detector conclusion would not by itself establish this all-numerator-one surgery statement.

The exact missing input is a proof of the stated noncyclic $SU(2)$-image conclusion for every nontrivial knot and every primitive numerator-one slope, either through the complete closed holonomy/Donaldson route described above or through a genuine ordinary nonvanishing and surgery-triangle argument with all filling and bundle identifications. Candidate surgery-triangle data are definitions, not such an argument. The statement and full AC scope are retained for downstream drafting, but its local proof is not supplied; consequently Property P, meridian detection and the nontrivial complement-theorem branch remain held at this input. No external gauge theorem is imported as a locally proved supplier.
