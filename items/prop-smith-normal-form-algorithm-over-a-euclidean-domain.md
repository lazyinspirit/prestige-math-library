---
id: prop-smith-normal-form-algorithm-over-a-euclidean-domain
kind: proposition
title: "Euclidean row and column reduction computes Smith normal form"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-euclidean-domain, def-matrix-equivalence-and-smith-normal-form-over-a-pid, thm-smith-normal-form-existence-over-a-pid]
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "M. Brussel, Finitely Generated Modules over a PID, Theorem 2.1.2"
      url: "https://content-calpoly-edu.s3.amazonaws.com/math/1/images/FG%20Modules%20Over%20A%20PID.pdf"
pipeline_run: null
---

## Statement

Over a Euclidean domain, a finite sequence of elementary row and column operations computes a Smith normal form of every rectangular matrix. The sequence terminates by strict descent of the Euclidean value whenever the current pivot fails to divide an entry.

## Facts & Assumptions

**Given:** A Euclidean domain with division by remainder ([[def-euclidean-domain]]) and matrix equivalence and Smith form as in [[def-matrix-equivalence-and-smith-normal-form-over-a-pid]].

[L1] Every rectangular matrix over a PID is equivalent to a Smith diagonal matrix ([[thm-smith-normal-form-existence-over-a-pid]]).

## Proof

**Proof technique:** constructive.

1.1 If the matrix is empty or zero, return the empty or zero Smith form. Otherwise move a nonzero entry of least Euclidean value among the current entries into the upper-left pivot position by row and column swaps. [choose, construct]

2.1 Divide every entry in the pivot row and column by the pivot and use elementary operations to replace a nonzero remainder into the pivot position. If an entry outside that row and column is not divisible by the pivot, add its row to the pivot row and repeat. Each nonzero remainder has strictly smaller Euclidean value, so this descent terminates with a pivot dividing every entry. [step 1.1, given]

3.1 Clear the rest of the pivot row and column using exact division, then apply the same procedure to the smaller remaining rectangle. The row or column count strictly decreases at each recursion, and zero or rank-deficient tails stop immediately. [step 2.1, construct]

4.1 Because each chosen pivot divides every entry in the remaining rectangle, successive nonzero pivots satisfy $d_1\mid d_2\mid\cdots$. Unit normalization gives Smith form; equivalently, adjacent diagonal factors may be replaced by their gcd and lcm through elementary operations without changing equivalence. The output agrees with the existence theorem [L1], but termination here uses the Euclidean function and is not a proof over an arbitrary PID. [step 3.1, L1, algebra, discharge-construct] ∎
