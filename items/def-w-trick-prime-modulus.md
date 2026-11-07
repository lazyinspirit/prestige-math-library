---
id: def-w-trick-prime-modulus
kind: definition
title: "W-trick modulus and progression"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-prime
  - def-coprime
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Ben Green and Terence Tao, The primes contain arbitrarily long arithmetic progressions, Annals of Mathematics 167 (2008)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf"
      locator: "§§3, 9–10 and Appendix A; exact passages inspected in the complete local full-text snapshot"
    - title: "Yufei Zhao, Graph Theory and Additive Combinatorics, MIT OpenCourseWare"
      url: "https://ocw.mit.edu/courses/18-225-graph-theory-and-additive-combinatorics-fall-2023/mit18_225_f23_lec_full.pdf"
      locator: "Chapter 9.1–9.2 and summary; W-trick/transference context; analytic majorant proof explicitly omitted"
---
## Definition

For a real parameter $w\ge2$, define the **W-trick modulus**
$$W(w):=\prod_{p\le w}p,$$
where the product is over primes. For an integer $b$ with $\gcd(b,W(w))=1$, the associated **W-tricked progression** is the set of integers $W(w)n+b$ as $n$ ranges over integers. In asymptotic applications $w=w(N)\to\infty$ sufficiently slowly as the prime parameter $N\to\infty$; then write $W_N=W(w(N))$.

## Definition references

[Green and Tao, Annals 2008, §§3, 9–10](https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf)

[Zhao, Chapter 9](https://ocw.mit.edu/courses/18-225-graph-theory-and-additive-combinatorics-fall-2023/mit18_225_f23_lec_full.pdf)
