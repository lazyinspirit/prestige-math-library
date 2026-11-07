---
id: def-cohomological-brauer-group-of-a-variety
kind: definition
title: "Cohomological Brauer group of a variety"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-scheme-over-base
  - def-etale-morphism-schemes
  - def-fppf-sheaf-and-sheafification
  - def-sheaf-cohomology-derived-global-sections
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Bjorn Poonen, Rational Points on Varieties, §6.6.4"
      url: "https://math.mit.edu/~poonen/papers/Qpoints.pdf"
      locator: "Definition 6.6.4 names H^2_et(X,G_m) the cohomological Brauer group; Theorem 6.6.17(iii) identifies the Azumaya group with its torsion subgroup for quasi-projective schemes, matching this library's torsion convention."
    - title: "Alexei Skorobogatov, Arithmetic Geometry: Rational Points, §2.1"
      url: "https://www.ma.imperial.ac.uk/~anskor/arith_geom_files/TCCnotes.pdf"
      locator: "Independent Brauer-group and evaluation conventions; Skorobogatov's variety Brauer group is Azumaya-defined, so it is not used as the definition of the cohomological group here."
verification: {}
---

## Definition

Assume the Axiom of Choice. Let $X$ be a scheme. Its **small étale site** has as objects étale morphisms
$U\to X$, as arrows morphisms over $X$, and as covering families jointly
surjective families of étale morphisms. The sheaf $\mathbb G_m$ on this site
assigns $\Gamma(U,\mathcal O_U)^\times$ to $U$. Let
$H^2_{\mathrm{et}}(X,\mathbb G_m)$ denote the second right-derived functor of
global sections of this abelian sheaf. The **cohomological Brauer group** is
the torsion subgroup
$$\operatorname{Br}(X):=H^2_{\mathrm{et}}(X,\mathbb G_m)_{\mathrm{tors}}.$$
Here the torsion subgroup consists of classes annihilated by some positive
integer.

## Definition references

[[def-scheme-over-base|Schemes and morphisms over a base]]

[[def-etale-morphism-schemes|Étale morphisms]]

[[def-fppf-sheaf-and-sheafification|Representable presheaves are sheaves for fppf covers]]

[[def-axiom-of-choice|Axiom of Choice for the sheaf-cohomology convention]]

[Poonen, §6.6.4](https://math.mit.edu/~poonen/papers/Qpoints.pdf)

[Skorobogatov, §2.1](https://www.ma.imperial.ac.uk/~anskor/arith_geom_files/TCCnotes.pdf)

## Facts & Assumptions

**Given:** A scheme $X$, its small étale site, and the sheaf $\mathbb G_m$.

[A1] The Axiom of Choice supplies the injective-resolution convention used
for sheaf cohomology. [[def-axiom-of-choice]]

[F1] $H^2_{\mathrm{et}}(X,\mathbb G_m)$ is the second right-derived
global-sections group of the sheaf of units on the small étale site.
[[def-sheaf-cohomology-derived-global-sections]]

[F2] The objects and covering families of the small étale site are those
given by étale morphisms and jointly surjective families.
[[def-etale-morphism-schemes]]

[F3] The representable functor of a scheme is an fppf sheaf; over $X$,
$\mathbb G_m$ is represented by the open subscheme $D(t)\subset\mathbb A^1_X$
and its sections are exactly the units. Its restriction to the small étale
site is therefore a sheaf of abelian groups.
[[def-fppf-sheaf-and-sheafification]]

## Proof

**Proof technique:** define the site, coefficient sheaf, cohomology group, and
its torsion subgroup in sequence.

**Given:** The data above.

1.1 The objects, arrows, and covers in the Definition specify the small
étale site by [F2]. The representing description in [F3] shows that
$U\mapsto\Gamma(U,\mathcal O_U)^\times$ is the abelian sheaf $\mathbb G_m$.
Then [F1] identifies its second right-derived global sections with
$H^2_{\mathrm{et}}(X,\mathbb G_m)$. [A1, F1, F2, F3, given]

1.2 The elements of this cohomology group annihilated by at least one positive
integer form a subgroup: sums of classes killed by $m$ and $n$ are killed by
$mn$, and the inverse of a class killed by $m$ is also killed by $m$. This is
the stated cohomological Brauer group. [step 1.1, algebra] ∎
