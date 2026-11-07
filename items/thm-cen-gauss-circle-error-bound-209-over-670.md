---
id: thm-cen-gauss-circle-error-bound-209-over-670
kind: theorem
title: "Cen–Gao–Zhang–Zhang Gauss Circle Error Bound 209/670"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 13
deps: [def-gauss-circle-error-term, thm-cen-circle-error-main-reduction, def-countable-choice]
justified_by: []
axiom_use: "Countable Choice is carried by the local main-reduction and radial Voronoï proof branch; the dated source claim is retained under this explicit library assumption."
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Xi Cen, Xitao Gao, Cheng Zhang, and Junyong Zhang, “A New Bound for the Gauss Circle Problem”"
      url: "https://arxiv.org/pdf/2610.21730v1"
      locator: "Theorem 1.1, posted 15 October 2026"
    - title: "Stephan Baier, Lectures on Exponential Sums"
      url: "https://www.atmschools.org/sites/default/files/Baier-Lectures_on_expo_sums.pdf"
      locator: "Lecture 1, classical circle-problem background"
verification:
  precheck: n/a
---

## Statement

Assume Countable Choice. For every $\varepsilon>0$ there is a constant
$C_\varepsilon>0$ such that, for every real $X\ge4$, the Cen–Gao–Zhang–Zhang
arXiv v1 Theorem 1.1 states
$$|P(X)|\le C_\varepsilon X^{209/670+\varepsilon},$$
where $P(X)$ is the squared-radius Gauss circle error.


## Statement references

[Xi Cen, Xitao Gao, Cheng Zhang, and Junyong Zhang, “A New Bound for the Gauss Circle Problem”](https://arxiv.org/pdf/2610.21730v1)

[Stephan Baier, Lectures on Exponential Sums](https://www.atmschools.org/sites/default/files/Baier-Lectures_on_expo_sums.pdf)

## Facts & Assumptions

**Given:** Countable Choice and the other hypotheses in the Statement.

[A1] [[def-countable-choice]]: Countable Choice asserts that every at most countable family of nonempty sets has a choice function.

[F2] [[def-gauss-circle-error-term]]: For real $x\ge0$, define the squared-radius Gauss circle error by
$$P(x):=\#\{(a,b)\in\mathbb Z^2:a^2+b^2\le x\}-\pi x =1+\sum_{1\le n\le x}r_2(n)-\pi x,$$
where $r_2(n)$ counts ordered pairs of integers with sum of squares $n$. The radius of the counted disk is $\sqrt{x}$, and the initial $1$ records the origin.

## Proof status

The source’s full proof uses the main reduction together with its pair-count, spacing, cone-distribution and Voronoï inputs. The weighted double-sieve step has a proved Countable-Choice branch, and the normalized exponents-2,7 near-diagonal monomial count has an existing local proof in `lem-robert-sargos-near-diagonal-pair-count`. The distinct four-term spacing, remaining pair-count transformations and choice scope, Watt/Huxley, cone-distribution and main-reduction obligations remain. This already-Countable-Choice claim may use only explicitly proved conditional branches; it does not turn the retained unqualified pair-count proposition into a proved supplier. These local suppliers are not all ready; the theorem is preserved as a dated source claim and is escalated rather than presented as a completed proof.
