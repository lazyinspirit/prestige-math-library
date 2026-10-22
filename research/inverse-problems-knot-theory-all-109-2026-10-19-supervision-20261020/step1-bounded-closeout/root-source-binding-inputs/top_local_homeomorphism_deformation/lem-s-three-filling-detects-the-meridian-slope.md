---
id: lem-s-three-filling-detects-the-meridian-slope
kind: lemma
title: An S3 filling detects the meridian slope
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 8
deps:
  - def-knot-exterior
  - def-knot-meridian-and-preferred-longitude
  - def-oriented-slope-and-knot-dehn-filling
  - lem-knot-surgery-first-homology-mayer-vietoris
  - thm-property-p-for-nontrivial-knots
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: Assumes full AC through the Property P theorem; the filling-homology
  case split itself uses only the stated countable-choice interface.
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "P. B. Kronheimer and T. S. Mrowka, Dehn surgery, the fundamental group and SU(2), Mathematical Research Letters 11 (2004), 741–754, Theorem 1, p. 741"
      url: https://doi.org/10.4310/mrl.2004.v11.n6.a3
    - title: "Kimihiko Motegi, Dehn surgery on knots: survey, pp. 7–10 and 19–21"
      url: https://www.math.tsukuba.ac.jp/~tange/diftop22/Dehn_surgery_survey.pdf
---

## Statement

Assume the Axiom of Choice. Let $K\subset S^3$ be a nontrivial smooth knot and let $p,q$ be coprime integers, not both zero. The Dehn filling $E_K(p/q)$ is homeomorphic to $S^3$ if and only if $q=0$, in which case $p=\pm1$ and the slope is the meridional slope $1/0$.

## Statement references

[[def-knot-exterior|Chosen knot exterior]]

[[def-knot-meridian-and-preferred-longitude|Meridian and preferred longitude]]

[[def-oriented-slope-and-knot-dehn-filling|Filling slope convention]]

[[lem-knot-surgery-first-homology-mayer-vietoris|First homology of knot fillings]]

[[thm-property-p-for-nontrivial-knots|Property P for nontrivial knots]]

[Motegi, *Dehn surgery on knots: survey*, pp. 7–10 and 19–21](https://www.math.tsukuba.ac.jp/~tange/diftop22/Dehn_surgery_survey.pdf)

[Kronheimer–Mrowka, published Theorem 1, p. 741](https://doi.org/10.4310/mrl.2004.v11.n6.a3)

## Facts & Assumptions

**Given:** Full AC, a nontrivial smooth knot $K\subset S^3$, and a primitive surgery slope $p[\mu]+q[\lambda]$.

[F1] The filling has first homology $\mathbb Z/|p|\mathbb Z$ when $p\ne0$ and $\mathbb Z$ when $p=0$. [[lem-knot-surgery-first-homology-mayer-vietoris]]

[F2] Every nonmeridional filling of a nontrivial knot has nontrivial fundamental group. [[thm-property-p-for-nontrivial-knots]]

[F3] The meridional slope is $1/0$ up to simultaneous sign, and the filling manifold depends only on the unoriented meridian slope. [[def-oriented-slope-and-knot-dehn-filling]]

[A1] Full AC is the assertion that every set-indexed family of nonempty sets has a choice function. [[def-axiom-of-choice]]

[L1] Applying [A1] to the set of members of any countable family supplies the countable choice function required by [F1]. [[def-axiom-of-choice]]

## Proof

1.1 Full AC [A1] supplies the countable-choice hypothesis of [F1] by [L1]. If $E_K(p/q)\cong S^3$, its first homology vanishes. By [F1], this excludes $p=0$ and every $|p|\ge2$, leaving $|p|=1$. [given, A1, L1, F1, algebra]

2.1 If additionally $q\ne0$, the slope is nonmeridional, so [F2] gives a nontrivial fundamental group, contradicting $\pi_1(S^3)=1$. Hence $q=0$; coprimality then gives $p=\pm1$, which is the meridional slope. [given, F2, step 1.1, algebra]

3.1 Conversely, if $q=0$, coprimality forces $p=\pm1$. By [F3], filling along this meridian slope is the original decomposition $S^3=E_K\cup N(K)$ up to the permitted solid-torus gluing, hence is homeomorphic to $S^3$. [given, F3, algebra] ∎

## Diagram

The exterior $E_K$ and the inserted solid torus meet along $T_K$. Its meridian bounds a disk in the inserted torus and is attached along $p\mu+q\lambda$. When $q=0$, that curve is the original meridian up to orientation, so the filling restores the original tubular neighborhood. The diagram records this gluing; the homology and Property P steps above prove the uniqueness assertion without relying on the picture.

```tikz
\begin{tikzpicture}[>=stealth]
  \node[draw,rounded corners,minimum width=2.5cm,minimum height=1cm] (e) at (0,0) {$E_K$};
  \node[draw,rounded corners,minimum width=2.5cm,minimum height=1cm] (v) at (4,0) {$D^2\times S^1$};
  \draw[<->,thick] (1.25,0) -- node[above] {$T_K$} (2.75,0);
  \node at (2,-0.8) {meridian maps to $p\mu+q\lambda$};
  \node at (2,-1.25) {$q=0$: $p=\pm1$, the meridional filling};
\end{tikzpicture}
```

## External dependency

The nonmeridional exclusion uses Property P [F2], whose numerator-one branch explicitly imports Kronheimer–Mrowka, published Theorem 1, p. 741. Its source and reading limits are recorded in the numerator-one supplier. The homology case split and the meridional reconstruction above are retained local arguments.
