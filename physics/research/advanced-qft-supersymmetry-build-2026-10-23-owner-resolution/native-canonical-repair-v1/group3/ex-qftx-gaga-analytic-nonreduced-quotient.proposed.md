---
id: ex-qftx-gaga-analytic-nonreduced-quotient
kind: example
title: Faithful flatness retaining a nilpotent class
status: draft
origin: pipeline
dependency_level: 2
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
axiom_base: "ZF + AC, inherited from the faithful-flatness theorem."
proof_strategy: direct
deps:
  - def-axiom-of-choice
  - def-multivariable-power-series
  - cor-uniqueness-of-multivariable-power-series-coefficients
  - thm-qftx-gaga-analytic-local-ring-flatness
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-multivariable-power-series: mathematical-premise
  cor-uniqueness-of-multivariable-power-series-coefficients: mathematical-premise
  thm-qftx-gaga-analytic-local-ring-flatness: mathematical-premise
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Jean-Pierre Serre, Géométrie algébrique et géométrie analytique, §2, no. 6 and Annex §§22–24"
      url: "https://www.college-de-france.fr/media/jean-pierre-serre/UPL1698785858825941763_Serre_GAGA.pdf"
    - title: "Johannes Anschütz, Lecture Notes on Étale Cohomology, §§3.24–3.26"
      url: "https://janschuetz.perso.math.cnrs.fr/skripte/lecture_notes_etale_cohomology.pdf"
    - title: "Kiran S. Kedlaya, MIT OpenCourseWare 18.726, Lecture 22: GAGA"
      url: "https://ocw.mit.edu/courses/18-726-algebraic-geometry-spring-2009/1329d3923b9f2d55ec7a9ec8e9cb63e9_MIT18_726s09_lec22_gaga.pdf"
verification:
  precheck: pending
---

## Example

Assume the Axiom of Choice. Let $X=\operatorname{Spec}(\mathbb C[x,y]/(x^2))$
and let $p$ be the closed $\mathbb C$-point at the origin. Its algebraic local
ring is $A=(\mathbb C[x,y]/(x^2))_{(x,y)}$, and its analytic local ring is
$B=\mathbb C\{x,y\}/(x^2)$. The canonical map $A\to B$ is faithfully flat
with common maximal-ideal completion $\mathbb C\llbracket x,y\rrbracket/(x^2)$, and the class
of $x$ is a nonzero element whose square is zero in both rings.

## Example references

[Serre, local algebraic-to-holomorphic comparison and flat-pair appendix](https://www.college-de-france.fr/media/jean-pierre-serre/UPL1698785858825941763_Serre_GAGA.pdf)

[Anschütz, analytification of locally finite-type schemes](https://janschuetz.perso.math.cnrs.fr/skripte/lecture_notes_etale_cohomology.pdf)

[MIT OpenCourseWare, Lecture 22: GAGA](https://ocw.mit.edu/courses/18-726-algebraic-geometry-spring-2009/1329d3923b9f2d55ec7a9ec8e9cb63e9_MIT18_726s09_lec22_gaga.pdf)

## Facts & Assumptions

**Given:** AC and the local algebraic and analytic rings of the scheme and point specified in the example.

[A1] AC says that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F1] The local algebraic-to-analytic map for a finite-type complex scheme at a closed $\mathbb C$-point is faithfully flat and identifies the maximal-ideal completions by extending the same finite defining ideal ([[thm-qftx-gaga-analytic-local-ring-flatness]]).

[F2] In $\mathbb C\llbracket x,y\rrbracket$, coefficients of each monomial are uniquely determined; multiplication by $x^2$ produces only monomials with $x$-degree at least $2$ ([[def-multivariable-power-series]], [[cor-uniqueness-of-multivariable-power-series-coefficients]]).

## Verification

1.1 Apply [F1] to $X$ and $p$. The map $A\to B$ is faithfully flat, and both completions identify with $T=\mathbb C\llbracket x,y\rrbracket/(x^2)$. [given, A1, F1]

2.1 The class of $x$ in $T$ is nonzero: its coefficient of $x^1y^0$ is $1$, whereas every element of the ideal $x^2\mathbb C\llbracket x,y\rrbracket$ has coefficient $0$ there by [F2]. If the class of $x$ were zero in either $A$ or $B$, its image under that ring's completion map would be zero in $T$, contradicting this coefficient. [F1, F2, step 1.1]

3.1 By the quotient definitions in the example, $x^2=0$ in $A$ and $B$. Step 2.1 proves that $x$ is nonzero in both, so it is a nonzero nilpotent class preserved by the faithfully flat comparison. [given, step 1.1, step 2.1] ∎
