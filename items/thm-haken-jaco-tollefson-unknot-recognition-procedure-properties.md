---
id: thm-haken-jaco-tollefson-unknot-recognition-procedure-properties
kind: theorem
title: Finite procedure properties of the Haken–Jaco–Tollefson search
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - alg-haken-jaco-tollefson-unknot-recognition
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Joel Hass, Jeffrey C. Lagarias, and Nicholas Pippenger, The Computational
        Complexity of Knot and Link Problems, Journal of the ACM 46 (1999)
      url: https://www.math.ucdavis.edu/~hass/Research/Papers/Complexity/hlp.pdf
      locator: §§4–8 and §10, complete passages on normal-surface algorithms, finite
        bounds, triangulations and certificate analysis.
    - title: Jeff Erickson, Normal Surfaces and Knots, Computational Topology lecture
        notes (2009)
      url: https://jeffe.cs.illinois.edu/teaching/comptop/2009/notes/normal-surfaces.pdf
      locator: §§14.1–14.4, complete six-page note on normal disks, matching and
        unknot recognition.
---

## Statement

For every finite input code and either selected mode, the Haken–Jaco–Tollefson procedure terminates. It returns the prescribed first validation error for an invalid code, returns **not-a-knot** for a valid multi-component code, and for a valid one-component knot code returns either a finite normal-coordinate disk-candidate certificate or **no-candidate** after exhaustive search.

## Statement references

[[alg-haken-jaco-tollefson-unknot-recognition]] — the two finite searches and their return branches.

[[lem-good-linear-size-exterior-triangulation-from-diagram]] — finite exterior construction used after code validation.

[Hass–Lagarias–Pippenger, §§6–8](https://www.math.ucdavis.edu/~hass/Research/Papers/Complexity/hlp.pdf) — finite normal-coordinate and extreme-ray enumerations.

## Facts & Assumptions

**Given:** A finite tagged knot-code input and either Haken or JT mode.

[F1] [[alg-haken-jaco-tollefson-unknot-recognition]]: validation and component branching precede a finite exterior construction; Haken mode scans the finite coordinate box, and JT mode scans all subsets of $7t$ zero-coordinate constraints and performs finite exact linear algebra on each.

## Proof

1.1 The code and each encoded field are finite, so the planar-code validation procedure terminates. Its prescribed return is passed through unchanged; a valid multi-component code returns **not-a-knot** immediately. For a valid one-component code, the good exterior triangulation is a finite combinatorial output by [F1]. [given, F1, construct]

1.2 In Haken mode the integer bound $B=t2^{7t+2}$ is finite and nonnegative, so the lexicographic box contains exactly $(B+1)^{7t}$ vectors. Each matching, quadrilateral, and disk test scans finite coordinates and faces. Fundamentalness is decided by checking every coordinatewise split $v=x+(v-x)$; there are at most $\prod_i(v_i+1)$ such splits, each tested by finitely many integer comparisons. Therefore every loop and the complete Haken search terminate. [F1, algebra]

1.3 In JT mode there are exactly $2^{7t}$ subsets $Z$. For each, computing the rank and, when the nullity is one, an integer kernel generator by exact finite matrix operations terminates. Checking admissibility, deduplicating, and testing the boundary data are finite scans. Thus the complete JT search terminates. [F1, algebra]

2.1 The algorithm's ordered validation branch returns its first invalid result; its component branch returns **not-a-knot** exactly for a valid multi-component input. In either one-component mode, all candidates are drawn from the stated finite enumeration and a return of **no-candidate** occurs only after that enumeration ends. Steps 1.1–1.3 prove the stated termination and output form. [F1, step 1.1, step 1.2, step 1.3, algebra] ∎

