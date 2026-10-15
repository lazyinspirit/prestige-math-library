---
id: thm-finite-dimensional-gaussian-isoperimetric-expansion
kind: theorem
title: "Finite-dimensional Gaussian isoperimetric expansion"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-standard-normal-and-normal-laws
  - def-multivariate-normal-law
  - thm-multivariate-iid-central-limit-theorem
justified_by: []
forward_refs: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "S. G. Bobkov, An isoperimetric inequality on the discrete cube, and an elementary proof of the isoperimetric inequality in Gauss space (1997)"
      url: "https://www-users.cse.umn.edu/~bobkov/papers/1997_AOP.pdf"
      locator: "The Gaussian isoperimetric inequality and proof from the discrete-cube inequality, pp. 1–8."
    - title: "C. Borell, The Brunn–Minkowski inequality in Gauss space (1975)"
      url: "https://dornsife.usc.edu/sergey-lototsky/wp-content/uploads/sites/211/2023/06/Borell-Subspace-original.pdf"
      locator: "Section 3, Theorem 3.1 proof, especially the finite-dimensional reduction on pp. 209–210."
---

## Statement

Assume AC. For $d\ge1$, let $\gamma_d$ be standard Gaussian measure on $\mathbb R^d$,
let $A\subseteq\mathbb R^d$ be Borel, and let
$A+rB_2^d=\{a+ru:a\in A,\ |u|\le1\}$. Then for every $r\ge0$,
$$\gamma_{d,*}(A+rB_2^d)\ge \Phi\!\left(\Phi^{-1}(\gamma_d(A))+r\right),$$
where $\gamma_{d,*}(S)=\sup\{\gamma_d(K):K\subseteq S,\ K\text{ compact}\}$ is Gaussian inner measure, and $\Phi^{-1}(0)=-\infty$, $\Phi^{-1}(1)=+\infty$.

## Proof obligation

This is an established theorem, but this batch does not supply a complete local
proof. The inspected Bobkov proof route passes from a discrete two-point
functional inequality through tensorization and a multivariate central-limit
limit, then converts a Gaussian perimeter bound to the exact
neighborhood-expansion inequality. Completing the last passage requires a
fully justified boundary/perimeter approximation and differential
inequality; that argument is not present in this carrier. Borell's alternative
proof reduces to spherical isoperimetry. This item is therefore escalated as
an unresolved authoring obligation, not treated as a proof supplier or an open
mathematical problem.
