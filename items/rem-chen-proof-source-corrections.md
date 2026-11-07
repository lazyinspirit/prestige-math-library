---
id: rem-chen-proof-source-corrections
kind: remark
title: "Chen proof sources, corrected inequalities, and scope limits"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - thm-chen-goldbach-prime-plus-p2
  - thm-chen-prime-shift-plus-p2
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "H.-E. Richert, Lectures on Sieve Methods, Chapter 13 (full-text copy hosted by the University of Toledo)"
      url: "https://www.math.utoledo.edu/~codenth/Spring_13/3200/NT-books/Lectures_on_Sieve_Methods-Richert.pdf"
    - title: "Jing-run Chen, On the representation of a large even integer as the sum of a prime and the product of at most two primes"
      url: "https://doi.org/10.1360/YA1973-16-2-157"
    - title: "Zihao Liu, A Corrected Simplified Proof of Chen's Theorem"
      url: "https://arxiv.org/pdf/2203.07871v1"
    - title: "Kaisa Matomäki and Sebastian Zúñiga-Alterman, Weighted sieves with switching"
      url: "https://arxiv.org/pdf/2405.19063v3"
verification:
  precheck: n/a
---

## Remark

Four source checks affect how the Chen and switching arguments may be stated.
First, Richert's printed Theorem 13.1 gives an upper-bound sign for the number
of prime-plus-P2 representations, but the preceding lower bound and the
conclusion that a representation exists require a lower-bound sign; the
printed sign is not used. Second, the English Chen scan's repository README
labels the journal pages as 111–128, whereas the standard DOI citation gives
pages 157–176; the pagination discrepancy remains unresolved. Third, Liu
identifies that the inference from a nonzero coefficient $f(a)$ to
$(a,d)=1$ is false in the simplified switched-sieve proof, and supplies a
separate bound for the non-coprime contribution; the corrected argument must
retain it. Fourth, Matomäki–Zúñiga-Alterman's Assumption 3.1 requires a
Lipschitz weight, while their Theorem 3.2 specializes to a discontinuous step
weight. A local proof of that specialization remains an authoring obligation.
Chen's conclusions stop at P2 and do not prove Goldbach's or the twin-prime
conjecture.

## Remark references

Richert, *Lectures on Sieve Methods*, Chapter 13, Theorem 13.1

Chen, *On the representation of a large even integer as the sum of a prime and the product of at most two primes*

Liu, *A Corrected Simplified Proof of Chen's Theorem*, Section IV

Matomäki and Zúñiga-Alterman, *Weighted sieves with switching*, Assumption 3.1 and Theorem 3.2

## Facts & Assumptions

**Given:** The two Chen conclusions and the cited source statements.

[F1] [[thm-chen-goldbach-prime-plus-p2]]: Chen's quantitative conclusion has a prime summand and a second summand in $P_2$.

[F2] [[thm-chen-prime-shift-plus-p2]]: the fixed-shift conclusion is that infinitely many primes have a translate in $P_2$.
