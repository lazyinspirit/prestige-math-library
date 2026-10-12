---
id: thm-uniqueness-of-invariant-factors-and-elementary-divisors-over-a-pid
kind: theorem
title: "Uniqueness of invariant factors and elementary divisors over a PID"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-p-power-torsion-dimensions-recover-elementary-divisors, thm-primary-decomposition-and-elementary-divisor-form-over-a-pid, thm-nonzero-commutative-rings-have-invariant-basis-number, cor-torsion-splits-from-the-free-part-over-a-pid]
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "M. Brussel, Finitely Generated Modules over a PID, Section 3.6"
      url: "https://content-calpoly-edu.s3.amazonaws.com/math/1/images/FG%20Modules%20Over%20A%20PID.pdf"
    - title: "A. Apisa, Wisconsin Math 542, Lecture 11"
      url: "https://people.math.wisc.edu/~apisa/notes542.pdf"
    - title: "K. Conrad, Modules over a PID, Section 5"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/modulesoverPID.pdf"
pipeline_run: null
---

## Statement

A finitely generated PID module is classified by its free rank and invariant factors, equivalently its elementary divisors. More precisely, the free rank is unique; invariant factors are unique up to associates in their divisibility order; elementary divisors are unique up to associates and permutation; and two finitely generated modules are isomorphic exactly when these data agree.

## Facts & Assumptions

**Given:** Primary and invariant-factor existence from [[thm-primary-decomposition-and-elementary-divisor-form-over-a-pid]], invariant basis number for nonzero commutative rings ([[thm-nonzero-commutative-rings-have-invariant-basis-number]]), and the torsion/free splitting of [[cor-torsion-splits-from-the-free-part-over-a-pid]].

[L1] The dimensions of $p^{k-1}M[p^k]$ recover every elementary-divisor exponent multiplicity ([[lem-p-power-torsion-dimensions-recover-elementary-divisors]]).

## Proof

**Proof technique:** constructive.

1.1 An isomorphism carries torsion elements to torsion elements, so it induces an isomorphism of torsion submodules and of the quotients by torsion. The latter quotients are finite free, and invariant basis number recovers their common free rank. [given]

2.1 For every associate class of irreducible $p$ and every $k\ge1$, an isomorphism preserves $M[p^k]$, multiplication by $p^{k-1}$, and the resulting $R/(p)$-dimension. By [L1], it therefore preserves every elementary-divisor multiplicity. [L1, step 1.1]

3.1 Aligning the unique prime-power columns as in the primary-decomposition theorem recovers one divisibility chain of invariant factors up to associates. Hence invariant factors are unique as well. Empty torsion data, pure torsion, pure free, and the zero module are included. [step 2.1, algebra]

4.1 Conversely, equal free ranks and equal invariant-factor or elementary-divisor data give termwise isomorphisms between the corresponding direct-sum decompositions; their direct sum constructs a module isomorphism. This proves both directions of the classification. [step 3.1, construct, discharge-construct] ∎
