---
id: alg-validated-residual-tube-certificate-checker
kind: algorithm
title: "Finite checker for rational residual-tube certificates"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - def-outward-rounded-interval-and-ball-operations
  - def-validated-residual-tube-certificate
  - lem-rational-expression-derivative-recursion-correct
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-outward-rounded-operations-are-isotone-and-dag-sound
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "R. Baker Kearfott, Interval Computations: Introduction, Uses, and Resources, §1"
      url: "https://interval.louisiana.edu/preprints/survey.pdf"
    - title: "S. M. Rump, Verification methods: Rigorous results using floating-point arithmetic, §§5.1–5.5"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
---

## Definition

Input a finite rational certificate of [[def-validated-residual-tube-certificate]], an outward-rounded real interval format, and the matching operation evaluator of [[def-outward-rounded-interval-and-ball-operations]]. Return either `certified` or `inconclusive` by this finite procedure:

1. Parse and structurally check the rational field DAG, finite mesh, panel polynomials, state boxes, radius polynomials, rational bounds, and subdivisions. Reject malformed syntax, noncanonical/nonfinite numbers, gaps, nontrivial interior overlaps, endpoint mismatches, or a non-acyclic graph as `inconclusive`.
2. In topological order, construct the formal time/state derivative DAG for each field output by [[lem-rational-expression-derivative-recursion-correct]]. If any recursion node is unsupported, return `inconclusive`.
3. Convert each exact rational cell endpoint and constant to a directed outward dyadic interval. On each supplied time cell and panel box, evaluate the field, derivative DAG, reconstruction, its derivative, radius and strict-margin expressions using only outward-rounded real interval addition, subtraction, multiplication, division, and rational constants. If any operation returns `split-domain`, `entire`, `domain-error`, `overflow`, or `inconclusive`, return `inconclusive`.
4. Check exactly that the time cells cover each panel and that neighboring reconstruction/radius endpoints agree; verify the initial squared-error inequality separately. From interval endpoints check: each radius and each strict supersolution margin has strictly positive lower endpoint; the componentwise reconstruction-plus-radius boxes lie inside $X_j$; the residual component intervals satisfy the displayed squared-norm bound by $\rho_j^2$; all field and derivative denominator intervals exclude zero; and the squared Frobenius bound on the state Jacobian is at most $L_j^2$. Check the initial squared error bound and strict comparison $d_0<R_0(a)$ by exact rational arithmetic.
5. Return `certified` only when every check passes. Any failed inclusion or comparison returns `inconclusive` with the first failed check identifier. No automatic subdivision, transcendental evaluation, complex rectangle operation, or ball operation is performed.

The finite interval evaluator and its DAG interpretation are those of [[def-outward-rounded-interval-and-ball-operations]] and [[thm-outward-rounded-operations-are-isotone-and-dag-sound]]. A separate theorem proves soundness of every `certified` result.
