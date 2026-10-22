---
id: thm-csm-frontier-interval-partition-certificate
kind: theorem
title: Soundness and termination of finite partition enclosures
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 1
domain: mathematics
library: physics
deps:
  - alg-csm-frontier-interval-finite-partition
  - def-dyadic-floating-point-format-and-directed-rounding
  - def-intervals-rectangles-and-complex-balls
  - def-outward-rounded-interval-and-ball-operations
  - lem-directed-dyadic-rounding-enclosure-and-error
  - lem-real-interval-arithmetic-preserves-enclosure
dependency_roles:
  alg-csm-frontier-interval-finite-partition: mathematical-premise
  def-dyadic-floating-point-format-and-directed-rounding: mathematical-premise
  def-intervals-rectangles-and-complex-balls: mathematical-premise
  def-outward-rounded-interval-and-ball-operations: mathematical-premise
  lem-directed-dyadic-rounding-enclosure-and-error: mathematical-premise
  lem-real-interval-arithmetic-preserves-enclosure: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Warwick Tucker, Validated Numerics: A Short Introduction to Rigorous Computations, Chapter 1 §§1.3–1.5"
      url: "https://pup-assets.imgix.net/onix/images/9780691247656/9780691247656.pdf?fm=pdf"
      locator: "Chapter 1 §§1.3–1.5, printed pp. 5–18 (PDF pp. 6–19): directed endpoint rounding and a complete finite summation enclosure example. The source supports the numerical enclosure context; this theorem's finite DAG argument is local."
    - title: "R. B. Kearfott, Interval Computations: Introduction, Uses, and Resources"
      url: "https://interval.louisiana.edu/preprints/survey.pdf"
      locator: "§1, printed pp. 95–97 (PDF pp. 1–3): exact interval images for elementary operations and outward-rounded enclosures of composed expressions."
---

## Statement

Let $\mathsf X$ be finite and nonempty, let $w:\mathsf X\to(0,\infty)$ be an exact finite positive weight, and let $f:\mathsf X\to\mathbb R$ be a finite observable. Suppose the finite rational input intervals in the definition of alg-csm-frontier-interval-finite-partition contain every exact $w(x)$ and $f(x)$. The algorithm terminates after finitely many operations. If it returns finite intervals $\mathcal Z$ and $\mathcal N$, then they contain $Z=\sum_{x\in\mathsf X}w(x)$ and $N=\sum_{x\in\mathsf X}w(x)f(x)$, respectively. If it also returns an expectation interval $\mathcal E$, then its denominator interval has positive lower endpoint and $\mathcal E$ contains the exact normalized expectation $\sum_x\pi(x)f(x)=N/Z$, where $\pi(x)=w(x)/Z$. An overflow, non-finite operation, or nonpositive denominator lower endpoint produces an unresolved status and carries no normalized-expectation enclosure claim.

## Statement references

[[alg-csm-frontier-interval-finite-partition]]

[[def-dyadic-floating-point-format-and-directed-rounding]]

[[def-intervals-rectangles-and-complex-balls]]

[[def-outward-rounded-interval-and-ball-operations]]

[[lem-directed-dyadic-rounding-enclosure-and-error]]

[[lem-real-interval-arithmetic-preserves-enclosure]]

## Facts & Assumptions

**Given:** The exact finite positive weights and finite observable on the enumerated nonempty state space, the certified rational input intervals, and the algorithm's finite or unresolved return branch.

[F1] [[alg-csm-frontier-interval-finite-partition]]: the procedure converts rational input endpoints outward, constructs finite interval sums for weights and weighted observables, and divides only when the partition interval's lower endpoint is positive.

[F2] [[def-dyadic-floating-point-format-and-directed-rounding]]: for an exact rational intermediate within the finite range, directed rounding returns a greatest representable lower endpoint and a least representable upper endpoint; overflow is reported and has no finite-error claim.

[F3] [[def-intervals-rectangles-and-complex-balls]]: a finite expression DAG is a finite directed acyclic graph with input and constant nodes; sharing a node reuses the same exact intermediate value.

[F4] [[def-outward-rounded-interval-and-ball-operations]]: addition, subtraction, multiplication, division away from zero, and squaring use the stated exact endpoint hulls followed by downward and upward endpoint rounding; division by an interval containing zero returns a split or unresolved status rather than a finite quotient.

[F5] [[lem-directed-dyadic-rounding-enclosure-and-error]]: each finite directed endpoint rounding brackets the exact real endpoint; overflow is explicitly not a finite enclosure result.

[F6] [[lem-real-interval-arithmetic-preserves-enclosure]]: for a finite acyclic expression DAG whose input and constant intervals enclose their values, each finite computed node interval encloses its exact value, including reused shared nodes.

## Proof

**Given:** [F1]–[F6] and the certified finite rational input intervals in the Statement.

1.1 The finite enumeration supplies one input interval for each exact weight and observable. By [F2] and [F5], when endpoint conversion is finite, rounding the lower endpoint down and upper endpoint up preserves containment of each input interval; if conversion overflows, the algorithm returns unresolved and the theorem makes no finite-enclosure claim. The partition sum and weighted sum are finite acyclic expression DAGs by [F1] and [F3]. [F1, F2, F3, F5, given, construct]

2.1 Order the nodes of each finite DAG topologically. Each input node encloses its exact value by step 1.1. At every operation node with a finite result, [F4] gives the interval extension prescribed for that operation and [F6] proves that its value encloses the exact operation on the predecessor values. Induction over the finite node order therefore places $Z$ in $\mathcal Z$ and $N$ in $\mathcal N$ whenever those intervals are returned. [F3, F4, F6, step 1.1, given]

3.1 The exact partition sum satisfies $Z>0$ because $\mathsf X$ is nonempty and every $w(x)>0$. If the returned lower endpoint of $\mathcal Z$ is positive, then $0\notin\mathcal Z$ and [F4] defines outward interval division; applying [F6] to this final operation gives $N/Z\in\mathcal N/\mathcal Z=\mathcal E$. If the lower endpoint is nonpositive, or any operation is non-finite, [F1] returns an unresolved status and no quotient enclosure is claimed. Finally, the procedure performs finitely many conversions and finitely many operations because $\mathsf X$ is finite, and every operation returns a finite interval or a status; hence it terminates. [F1, F3, F4, F6, step 2.1, given, algebra, construct] ∎
