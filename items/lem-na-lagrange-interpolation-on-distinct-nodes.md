---
id: lem-na-lagrange-interpolation-on-distinct-nodes
kind: lemma
title: Lagrange interpolation at distinct real nodes
status: draft
origin: pipeline
dependency_level: 0
deps:
  - thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots
proof_strategy: direct
axiom_use: "No choice axiom is used; the argument uses explicit finite formulas
  and the cited calculus results."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "A. Iserles, S. P. Nørsett, and S. Olver, Highly oscillatory quadrature:
        The story so far, §3.2"
      url: "https://www.cs.ox.ac.uk/sheehan.olver/papers/storysofar.pdf"
    - title: "D. Levin, Procedures for computing one- and two-dimensional integrals of
        functions with rapid irregular oscillations, §1"
      url: "https://people.math.ethz.ch/~hiptmair/Seminars/OSCINT/LEV82.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $n\ge1$ and let $c_0,\ldots,c_n$ be distinct real numbers. For arbitrary values $y_0,\ldots,y_n\in\mathbb C$, define
$$\ell_j(x)=\prod_{\substack{0\le k\le n\\k\ne j}}\frac{x-c_k}{c_j-c_k},\qquad p(x)=\sum_{j=0}^n y_j\ell_j(x).$$
Then $p$ is the unique polynomial of degree at most $n$ satisfying $p(c_j)=y_j$. In particular, interpolation reproduces every polynomial of degree at most $n$.

## Facts & Assumptions

**Given:** The stated distinct nodes and complex data.

[F1] [[thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots]]: a nonzero real polynomial of degree at most $n$ has at most $n$ distinct real roots. Applied to real and imaginary parts, the same root bound holds for complex polynomials.

## Proof

1.1 Since $c_j-c_k\ne0$ for $j\ne k$, every denominator in $\ell_j$ is nonzero. At $x=c_m$, the factor for $k=m$ makes $\ell_j(c_m)=0$ when $j\ne m$, while every factor in $\ell_m(c_m)$ equals $1$; hence $\ell_j(c_m)=1$ exactly when $j=m$. The displayed $p$ has degree at most $n$ and $p(c_m)=y_m$. [given, construct, algebra]

2.1 If $q$ is another such polynomial, then $q-p$ has degree at most $n$ and vanishes at the $n+1$ distinct nodes. Its real and imaginary parts each have those roots, so [F1] forces both parts to be zero polynomials. Thus $q=p$. If the data are values of a polynomial of degree at most $n$, uniqueness identifies that polynomial with $p$. [given, F1, algebra] ∎
