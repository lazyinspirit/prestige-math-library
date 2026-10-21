---
id: lem-skein-module-isomorphism-respects-framings-and-boundary
kind: lemma
title: "Framing transport and compatible collar actions under oriented diffeomorphisms"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-kauffman-bracket-skein-module-of-a-three-manifold
  - def-kauffman-bracket-smoothing-and-loop-value
  - lem-general-3manifold-skein-quotient-isotopy-and-gluing
  - lem-kauffman-bracket-module-framing-twist-factor
  - thm-skein-module-of-s-three-is-rank-one
  - thm-skein-module-of-solid-torus-has-core-multicurve-basis
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The quotient functor, collar action, and twist scalar are choice-free. Full AC supplies the solid-torus basis; its countable consequence supplies the S3 basis."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Józef H. Przytycki, Fundamentals of Kauffman Bracket Skein Modules, arXiv:math/9809113 (1998), §2, Proposition 2.2(i), and §3, Theorem 3.1"
      url: "https://arxiv.org/pdf/math/9809113"
    - title: "Sean Pohorence, 3-manifold Invariants and TQFTs (January 2016), §3.1, pp. 11–12"
      url: "https://categorified.net/RTinvariants/Jan29-Feb3.pdf"
    - title: "Thang T. Q. Lê, The Colored Jones Polynomial and the AJ Conjecture, §6.1, printed pp. 30–31"
      url: "https://letu.math.gatech.edu/Papers/Lectures_Luminy_2014_new.pdf"
---

## Statement

Assume the Axiom of Choice. An orientation-preserving diffeomorphism
between smooth oriented $3$-manifolds transports the full framing of every
link and induces an isomorphism of their Kauffman bracket skein modules. If
the diffeomorphism carries a specified product collar of a compact oriented
boundary surface productwise to another specified collar, the induced
isomorphism intertwines the two closed-link collar actions. A positive or
negative full framing twist on one link component multiplies its class by
$-A^3$ or $-A^{-3}$, respectively. In $\mathcal K_A(S^3)$, a positive twist
of a zero-framed trivial circle changes its class from
$\delta[\varnothing]$ to $-A^3\delta[\varnothing]$, with
$\delta[\varnothing]\ne -A^3\delta[\varnothing]$. In the solid-torus
module, a positive twist of the blackboard-framed core changes $[z]$ to
$-A^3[z]$, with $[z]\ne -A^3[z]$.

## Statement references

[[def-axiom-of-choice|Axiom of Choice]]

[[thm-choice-implies-dependent-implies-countable-choice|Choice implies countable choice]]

[[lem-general-3manifold-skein-quotient-isotopy-and-gluing|Functoriality and boundary-collar action]]

[[lem-kauffman-bracket-module-framing-twist-factor|Full framing twists]]

[[thm-skein-module-of-s-three-is-rank-one|S³ skein-module basis]]

[[thm-skein-module-of-solid-torus-has-core-multicurve-basis|Solid-torus skein-module basis]]

[Józef H. Przytycki, *Fundamentals of Kauffman Bracket Skein Modules* (1998), §2, Proposition 2.2(i), and §3, Theorem 3.1](https://arxiv.org/pdf/math/9809113)

[Sean Pohorence, *3-manifold Invariants and TQFTs* (2016), §3.1](https://categorified.net/RTinvariants/Jan29-Feb3.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice, oriented smooth three-manifolds, an orientation-preserving diffeomorphism, and matching specified product collars when a boundary action is considered.

[A1] The Axiom of Choice, written $\mathrm{AC}$ ([[def-axiom-of-choice]]).

[A2] Countable choice, written $\mathrm{AC}_\omega$, means every countable family of nonempty sets has a choice function ([[def-countable-choice]]).

[A3] In ZF, $\mathrm{AC}$ implies $\mathrm{AC}_\omega$ ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F1] A diffeomorphism induces a skein-module isomorphism by transporting framed links, and a matching product collar carries the closed-link action by gluing and disjoint union; this action is natural under collar-preserving diffeomorphisms ([[lem-general-3manifold-skein-quotient-isotopy-and-gluing]]).

[F2] A positive or negative full framing twist on one component multiplies its skein class by $-A^3$ or $-A^{-3}$ ([[lem-kauffman-bracket-module-framing-twist-factor]]).

[F3] The empty class is a free $R$-basis of $\mathcal K_A(S^3)$ and a zero-framed trivial circle has class $\delta[\varnothing]$ ([[thm-skein-module-of-s-three-is-rank-one]]).

[F4] The blackboard-framed core classes $[z^n]$, $n\geq0$, are an $R$-basis of the solid-torus module ([[thm-skein-module-of-solid-torus-has-core-multicurve-basis]]).

[F5] Here $R=\mathbb Z[A^{\pm1}]$ is the Laurent-polynomial ring over the integral domain $\mathbb Z$ ([[def-kauffman-bracket-smoothing-and-loop-value]]).

## Proof


1.1 The quotient isomorphism and collar-action naturality are exactly [F1]. Under a diffeomorphism, the framing annulus is carried by the derivative along with its core, so this map preserves the full link framing rather than only the unframed core. A single full twist is changed according to [F2]. [F1, F2, given, construct]

1.2 Apply [F2] to the zero-framed trivial circle $O$ in $S^3$. By [F3], $[O]=\delta[\varnothing]$, so its positive twist represents $-A^3\delta[\varnothing]$. The difference from $[O]$ is $(-A^3-1)\delta[\varnothing]$. In $R$, $\delta=-(A^2+A^{-2})\ne0$ and $-A^3-1\ne0$; the product is nonzero because the product of two nonzero Laurent polynomials over the integral domain $\mathbb Z$ is nonzero (its highest-exponent coefficient is the product of their nonzero highest-exponent coefficients). Since $[\varnothing]$ is a basis element by [F3], the two classes are unequal. [A1, A2, A3, F2, F3, F5, algebra]

2.1 For the solid-torus core, [F2] gives the twisted class $-A^3[z]$. Its difference from $[z]$ is $(-A^3-1)[z]$, which is nonzero because $-A^3-1\ne0$ in $R$ and $[z]$ is one of the free basis elements in [F4]. This proves the second displayed framing change is nontrivial. [A1, F2, F4, F5, algebra] ∎

