---
id: rem-torelli-and-kodaira-parshin-inputs
kind: remark
title: Torelli and Kodaira–Parshin inputs in the curve-finiteness route
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 26
deps:
  - thm-shafarevich-finiteness-for-curves-of-fixed-genus
  - thm-rational-torelli-for-genus-at-least-two-curves
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Abelian Varieties, version 2.0, Chapter IV §§4–5, printed pp. 144–148"
      url: "https://www.jmilne.org/math/CourseNotes/AV.pdf"
    - title: "G. Faltings, G. Wüstholz et al., Rational Points, 2nd ed. (1986), Chapter V §§4.1–4.5, printed pp. 185–197"
      url: "https://yhzhumath.github.io/Mordell2024/RP.pdf"
---

## Remark

The curve-finiteness proof uses the Jacobian with its canonical principal
polarization and the rational Torelli theorem to recover the curve class.
This is the Jacobian/Torelli bridge in the assigned theorem.

Milne's downstream Kodaira–Parshin input is stated for a number field $K$, a
finite set $S$ of finite places containing all places above $2$, and a smooth
proper curve $C/K$ of genus at least $1$ with good reduction outside $S$. It
gives a finite extension $L/K$, independent of $P$, such that each
$P\in C(K)$ has a finite map $\phi_P:C_P\to C_L$ from a smooth proper curve
$C_P/L$ whose genus is bounded independently of $P$, whose good reduction is
outside the places of $L$ above $S$, and whose branch locus is exactly
$\{P\}$. For a target curve of genus at least $2$, De Franchis finiteness of
nonconstant maps from a fixed source curve to $C_L$, together with curve
Shafarevich finiteness, is the downstream route to Mordell finiteness. This
cover construction is not used to prove the assigned curve-finiteness
statement.

## Remark references

[[thm-shafarevich-finiteness-for-curves-of-fixed-genus]]

[[thm-rational-torelli-for-genus-at-least-two-curves]]

[Milne, Theorem 5.1 and Theorem 5.2](https://www.jmilne.org/math/CourseNotes/AV.pdf)

[Faltings–Wüstholz et al., Chapter V §§4.3–4.5](https://yhzhumath.github.io/Mordell2024/RP.pdf)
