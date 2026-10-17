---
id: lem-real-interval-arithmetic-preserves-enclosure
kind: lemma
title: Finite real interval operations enclose their exact values
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: interval-newton-krawczyk-and-polynomial-root-isolation
dependency_level: 4
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-intervals-rectangles-and-complex-balls
  - def-outward-rounded-interval-and-ball-operations
  - lem-directed-dyadic-rounding-enclosure-and-error
verification:
  precheck: pass
sources:
  references:
    - title: "Siegfried M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010), §§4–5.5"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
    - title: "R. Baker Kearfott, Interval Computations: Introduction, Uses, and Resources, §§1–2"
      url: "https://interval.louisiana.edu/preprints/survey.pdf"
---

## Statement

For finite real intervals on which the operation is defined, each finite result of addition, subtraction, multiplication, division, and squaring in [[def-outward-rounded-interval-and-ball-operations]] contains the exact set of values of the corresponding real operation. For a finite expression directed acyclic graph whose real-operation nodes all return finite interval results, the interval computed at every node contains its exact value for every admissible input assignment; in particular, the root interval contains the exact range. A non-finite status makes no finite enclosure claim.

## Facts & Assumptions

**Given:** Finite dyadic real intervals, the operation formulas and domain restrictions in [[def-outward-rounded-interval-and-ball-operations]], and a finite real-operation expression graph.

[F1] Addition, subtraction, multiplication, division away from zero, and square use the displayed exact endpoint hulls, with the lower endpoint rounded down and the upper endpoint rounded up ([[def-outward-rounded-interval-and-ball-operations]]).

[F2] Directed rounding encloses each finite exact endpoint; overflow uses infinite sentinels and gives no finite-error claim ([[lem-directed-dyadic-rounding-enclosure-and-error]]).

[F3] An expression directed acyclic graph is finite, and each input or constant carries an admissible exact value or certified enclosure ([[def-intervals-rectangles-and-complex-balls]]).

## Proof

1.1 For intervals $X=[a,b]$ and $Y=[c,d]$, addition and subtraction have exact endpoint ranges $[a+c,b+d]$ and $[a-d,b-c]$. For multiplication, the function $xy$ is affine in either variable with the other fixed, so its extrema on the rectangle $X\times Y$ occur at one of the four corners. If $0\notin Y$, reciprocal is monotone on $Y$, and division is multiplication by the exact reciprocal interval; squaring has lower endpoint $0$ when $0\in X$ and otherwise its endpoint minimum, with endpoint maximum in both cases. [given, F1, algebra]

2.1 Each exact lower and upper endpoint in step 1.1 is expanded outward by the downward and upward roundings in [F1]; [F2] puts the exact endpoint between those rounded values. Thus every finite interval-operation result contains its exact operation range. If an endpoint overflows or a domain restriction fails, the operation reports a non-finite status and the Statement asserts no finite enclosure. [step 1.1, F1, F2]

3.1 Order the nodes of the finite acyclic graph topologically. Input and constant nodes lie in their declared enclosures by [F3]. Inductively, if an operation node has predecessor values in their computed intervals, step 2.1 shows that its exact output belongs to the computed output interval. The induction reaches every node and therefore the root, for every admissible assignment. [F3, step 2.1, induction, construct] ∎
