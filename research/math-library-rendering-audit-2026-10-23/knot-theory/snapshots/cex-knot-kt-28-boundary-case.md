---
id: cex-knot-kt-28-boundary-case
kind: counterexample
title: "Under full AC, the right-handed trefoil is not ribbon"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 9
deps:
  - def-ribbon-disk-and-ribbon-knot
  - lem-ribbon-singularity-local-resolution
  - thm-ribbon-knot-is-smoothly-slice
  - def-countable-choice
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - lem-the-trefoil-does-not-bound-a-smooth-proper-disk-in-the-four-ball
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The published trefoil nonsliceness supplier assumes full AC; full AC implies the ACω hypothesis of the ribbon-implies-slice theorem."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Arunima Ray, Slice Knots and Knot Concordance, Winter Braids Lecture Notes 8"
      url: "https://aru-ray.github.io/documents/slicenotes.pdf"
      locator: "§1.1, Definition 1.4 and the ribbon-implies-slice discussion, printed pp.3–5"
    - title: "Charles Livingston, A Survey of Classical Knot Concordance, Handbook of Knot Theory, Chapter 7"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf"
      locator: "§2.1, ribbon knots and sliceness, printed pp.322–323"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement refuted

Assume the full Axiom of Choice. The standard right-handed trefoil is a ribbon knot.

## Statement references

[[def-axiom-of-choice|Full Axiom of Choice used by the nonsliceness supplier]]

[[def-ribbon-disk-and-ribbon-knot|Definition of a ribbon knot]]

## Facts & Assumptions

**Given:** Full AC and the standard right-handed trefoil $T$.

[A1] Full AC is the choice-function principle. ([[def-axiom-of-choice]])

[F1] Under full AC, the standard right-handed trefoil does not bound a smooth properly embedded disk in $B^4$. ([[lem-the-trefoil-does-not-bound-a-smooth-proper-disk-in-the-four-ball]])

[F2] Under ACω, every ribbon knot bounds a smooth properly embedded disk in $B^4$. ([[thm-ribbon-knot-is-smoothly-slice]])

[F3] Full AC implies ACω. ([[thm-choice-implies-dependent-implies-countable-choice]])

## Counterexample

The standard right-handed trefoil $T$ has no smooth proper disk in $B^4$, so it cannot admit a ribbon disk whose resolution is such a disk.

1.1 The given full AC is the choice-function principle in [A1]. Applying [F1] under that hypothesis, no smooth properly embedded disk in $B^4$ has boundary $T$. [given, A1, F1]

1.2 If $T$ were ribbon, [F3] would supply the ACω hypothesis of [F2], and [F2] would give a smooth properly embedded disk in $B^4$ with boundary $T$. [given, F2, F3, construct]

2.1 Step 1.2 contradicts step 1.1. Therefore the trefoil is not ribbon, refuting the statement. [given, step 1.1, step 1.2, contradiction] ∎

## Diagram

The box denotes the three-crossing positive two-strand braid whose closure is the standard right-handed trefoil. The closure arcs join equal endpoint positions outside the box. This encoded diagram fixes the standard trefoil used in the counterexample; the proof relies on the nonsliceness supplier, not on the drawing.

```tikz
\begin{tikzpicture}[line cap=round,line join=round,scale=1]
  \draw[thick] (-0.8,1.1)--(-0.8,0.45);
  \draw[thick] (0.8,1.1)--(0.8,0.45);
  \node[draw,rounded corners,minimum width=2.2cm,minimum height=1.15cm] at (0,-0.15) {$\sigma_1^3$};
  \draw[thick] (-0.8,-0.72)--(-0.8,-1.1);
  \draw[thick] (0.8,-0.72)--(0.8,-1.1);
  \draw[thick] (-0.8,1.1) .. controls (-1.55,0.8) and (-1.55,-0.8) .. (-0.8,-1.1);
  \draw[thick] (0.8,1.1) .. controls (1.55,0.8) and (1.55,-0.8) .. (0.8,-1.1);
  \node[above] at (-0.8,1.1) {left endpoint};
  \node[above] at (0.8,1.1) {right endpoint};
\end{tikzpicture}
```

