---
id: ex-knot-kt-31-worked-cases
kind: example
title: "The empty link, trivial circle, and annular core multicurves"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-kauffman-bracket-skein-module-of-a-three-manifold
  - lem-general-3manifold-skein-quotient-isotopy-and-gluing
  - lem-skein-module-isomorphism-respects-framings-and-boundary
  - thm-skein-module-of-s-three-is-rank-one
  - thm-skein-module-of-solid-torus-has-core-multicurve-basis
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Assumes full AC for the solid-torus basis and its countable consequence for the S3 basis; the local trivial-circle relation and collar gluing construction are choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Józef H. Przytycki, Fundamentals of Kauffman Bracket Skein Modules, arXiv:math/9809113 (1998), §2, Theorem 2.3(a), and §3, Theorem 3.1"
      url: "https://arxiv.org/pdf/math/9809113"
    - title: "Sean Pohorence, 3-manifold Invariants and TQFTs (January 2016), §3.1, pp. 11–12"
      url: "https://categorified.net/RTinvariants/Jan29-Feb3.pdf"
    - title: "Thang T. Q. Lê, The Colored Jones Polynomial and the AJ Conjecture, §6.1–§6.2, printed pp. 30–31"
      url: "https://letu.math.gatech.edu/Papers/Lectures_Luminy_2014_new.pdf"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Example

Assume the Axiom of Choice and let $R=\mathbb Z[A^{\pm1}]$ and
$\delta=-A^2-A^{-2}$. In $\mathcal K_A(S^3)$, a zero-framed trivial circle
equals $\delta$ times the empty-link generator. In the solid-torus module,
one and two parallel blackboard-framed core curves have classes $[z]$ and
$[z^2]$, which are distinct basis elements. If an annulus is specified as a boundary
subsurface of the solid torus with a product collar, its closed-link skein
module acts on the solid-torus module by gluing framed links into that collar.
The schematic shows the one-core and two-core representatives; every curve
between the annulus boundary circles carries its blackboard framing.

```tikz
\begin{tikzpicture}[scale=0.78,line cap=round]
  \begin{scope}
    \draw[thin] (0,0) circle (1.45);
    \draw[thin] (0,0) circle (0.45);
    \draw[very thick] (0,0) circle (0.95);

\node at (0,-1.85) {one core: $z$};
  \end{scope}
  \begin{scope}[xshift=4.2cm]
    \draw[thin] (0,0) circle (1.45);
    \draw[thin] (0,0) circle (0.45);
    \draw[very thick] (0,0) circle (0.75);
    \draw[very thick] (0,0) circle (1.12);

\node at (0,-1.85) {two cores: $z^2$};
  \end{scope}
\end{tikzpicture}
```

## Example references

[[def-axiom-of-choice|Axiom of Choice]]

[[thm-choice-implies-dependent-implies-countable-choice|Choice implies countable choice]]

[[def-kauffman-bracket-skein-module-of-a-three-manifold|Kauffman bracket skein module]]

[[lem-general-3manifold-skein-quotient-isotopy-and-gluing|Boundary-collar action]]

[[thm-skein-module-of-s-three-is-rank-one|S³ skein-module basis]]

[[thm-skein-module-of-solid-torus-has-core-multicurve-basis|Solid-torus skein-module basis]]

## Facts & Assumptions

**Given:** The Axiom of Choice, the S³ and solid-torus skein modules, and a chosen annular subsurface with a product collar in the solid-torus boundary.

[A1] The Axiom of Choice, written $\mathrm{AC}$ ([[def-axiom-of-choice]]).

[A2] Countable choice, written $\mathrm{AC}_\omega$, means every countable family of nonempty sets has a choice function ([[def-countable-choice]]).

[A3] In ZF, $\mathrm{AC}$ implies $\mathrm{AC}_\omega$ ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F1] The module definition imposes the zero-framed trivial-circle relation $[L\sqcup O]=\delta[L]$ ([[def-kauffman-bracket-skein-module-of-a-three-manifold]]).

[F2] The empty link is a free basis of the S³ module and $[O]=\delta[\varnothing]$ ([[thm-skein-module-of-s-three-is-rank-one]]).

[F3] The parallel blackboard-framed core classes form a free basis of the solid-torus module ([[thm-skein-module-of-solid-torus-has-core-multicurve-basis]]).

[F4] A specified product collar carries a unital closed-link skein action by gluing and disjoint union ([[lem-general-3manifold-skein-quotient-isotopy-and-gluing]]).

## Proof


1.1 Substitute the empty link for $L$ in the trivial-circle relation [F1] to get $[O]=\delta[\varnothing]$; [F2] identifies $[\varnothing]$ as the generator of the free rank-one module. [A1, A2, A3, F1, F2, algebra]

2.1 By [F3], the core multicurves $[z]$ and $[z^2]$ are distinct basis vectors and are linearly independent over $R$. The collar action in [F4] applies to the chosen annular boundary subsurface and is defined by placing a closed framed link in a thin collar layer and taking its union with the interior link; thus it adds the indicated operation without adding boundary endpoints. [A1, F3, F4, given, algebra] ∎

