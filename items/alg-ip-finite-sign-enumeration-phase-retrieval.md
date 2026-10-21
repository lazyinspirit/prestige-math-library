---
id: alg-ip-finite-sign-enumeration-phase-retrieval
kind: algorithm
title: Finite sign enumeration for real phase retrieval
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-ip-real-frame-phase-retrieval
  - def-moore-penrose-pseudoinverse
  - thm-moore-penrose-pseudoinverse-exists-and-is-unique
  - thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution
  - thm-least-squares-solutions-form-an-affine-kernel-translate-of-a-plus-b
  - thm-singular-value-decomposition
  - lem-span-is-the-set-of-linear-combinations
  - def-euclidean-inner-product
  - lem-metrics-on-rn
  - def-abs-value
  - lem-of-abs-value
  - thm-reals-field
  - def-ordered-field
  - thm-of-square-roots
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Radu Balan, Pete Casazza, and Dan Edidin, On signal reconstruction without phase, Applied and Computational Harmonic Analysis 20(3) (2006)"
      url: "https://arxiv.org/pdf/math/0412411"
    - title: "Philipp Grohs, Sarah Koppensteiner, and Martin Rathmair, Phase Retrieval: Uniqueness and Stability, arXiv:1901.07911v2"
      url: "https://arxiv.org/pdf/1901.07911v2"
---

## Definition

Input a real measurement matrix $A$ with $m$ rows indexed by $[m]=\{1,\ldots,m\}$ and $d$ columns indexed by $k<d$, where $d\ge1$ and $m\ge0$. Use row $i-1$ of the ordinary zero-based $m\times d$ matrix for measurement label $i$. Input nonnegative intensities $b:[m]\to[0,\infty)$, a mode in $\{\mathrm{exact},\mathrm{noisy}\}$, a feasibility tolerance $\varepsilon\ge0$, a maximum sign-pattern count $P\in\mathbb Z_{\ge0}$, and a linear-solve budget $L\in\mathbb Z_{\ge0}$. Put $r_i=\sqrt{b_i}$.

For $m=0$, let $\mathcal S_m$ contain only the empty sign vector. For $m\ge1$, let
$$\mathcal S_m=\{s:[m]\to\{-1,+1\}:s_1=+1\},$$
ordered lexicographically with $+1$ before $-1$ and labels in increasing order. This gives one representative from each pair $\{s,-s\}$. A signed right-hand side is $y_s=(s_i r_i)_{i\in[m]}$, interpreted in the same zero-based row order as $A$.

If $P=0$ or $L=0$, return no candidates with status budget-exhausted. Otherwise compute one SVD of $A$, form its unique Moore–Penrose inverse $A^+$ and kernel $\ker A$, then process at most the first $P$ patterns in $\mathcal S_m$ and perform at most $L$ signed least-squares solves. Stop when either budget is exhausted. For each processed pattern $s$, compute the minimum-Euclidean-norm least-squares solution $x_s=A^+y_s$ and signed residual $e_s=\|Ax_s-y_s\|_2$. The budget $L$ counts right-hand-side solves after the one SVD factorization.

* In exact mode, record the affine family $x_s+\ker A$ when $e_s\le\varepsilon$, together with $e_s$. Mark it exact-feasible if $e_s=0$ and tolerance-feasible if $0<e_s\le\varepsilon$. If $\varepsilon=0$ and all patterns are processed, return the union of the exact-feasible families modulo $x\sim -x$, or report infeasible if this union is empty. For $\varepsilon>0$, report only the tolerance-qualified least-squares families; this is a tolerance screen, not a list of every vector whose residual is at most $\varepsilon$.
* In noisy mode, initialize the incumbent as unset. For the first processed pattern, store $x_s$ and $J(x_s)$. For each later processed pattern, replace the incumbent by $x_s$ exactly when $J(x_s)$ is strictly smaller than the incumbent value; on a tie, keep the earlier pattern. Thus the incumbent has smallest $J$ among all processed candidates.
  Compute each visited candidate's squared amplitude residual
  $$J(x_s)=\sum_{i\in[m]}(|(Ax_s)_i|-r_i)^2$$
  before applying that update. The feasibility tolerance is not used in this mode.
* Return the candidates and a status. Exact mode returns exact-feasible/infeasible only when $\varepsilon=0$ and all patterns are processed; positive tolerance returns tolerance-feasible/no-tolerance-fit when all patterns are processed. Noisy mode returns a completed best candidate when all patterns are processed. If either budget stops enumeration before all patterns are processed, return budget-exhausted with any candidates found. A budget-exhausted result makes no claim about unvisited patterns.
* There are $1$ canonical pattern for $m=0$ and $2^{m-1}$ for $m\ge1$. Full enumeration is exponential in $m$. No statistical optimality or intensity-noise guarantee is part of this algorithm.

## Definition references

[[def-ip-real-frame-phase-retrieval|Real amplitude and intensity measurement conventions]]

[[def-moore-penrose-pseudoinverse|Finite-matrix Moore–Penrose equations]]

[[thm-moore-penrose-pseudoinverse-exists-and-is-unique|Existence and uniqueness of the finite-matrix pseudoinverse]]

[[thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution|Minimum-norm least-squares solve]]

[[thm-least-squares-solutions-form-an-affine-kernel-translate-of-a-plus-b|Full affine least-squares solution family]]

[[thm-singular-value-decomposition|Finite-dimensional SVD used for the solves]]

[[lem-span-is-the-set-of-linear-combinations|Finite span expansions used by the finite-dimensional orthogonal-basis argument]]

[[def-euclidean-inner-product|Euclidean norm convention]]

[[lem-metrics-on-rn|Euclidean metrics on finite real coordinate spaces]]

[[def-abs-value|Absolute value]]

[[thm-of-square-roots|Nonnegative square root]]
