---
id: lem-countable-compactly-supported-tests-determine-euclidean-weak-convergence
kind: lemma
title: Countable compactly supported tests determine euclidean weak convergence
deps: ["def-weak-convergence-of-borel-probability-measures", "thm-portmanteau-theorem", "thm-heine-borel-rn", "thm-monotone-convergence-for-the-integral"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: van Gaans, compact-test approximation in Proposition 5.3 and tightness transfer; explicit Euclidean construction
      url: https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

For each finite $d\ge1$ there is a countable uniformly dense subset $\mathcal D$ of $C_c(\mathbb R^d;\mathbb R)$ containing nonnegative compact cutoffs $\chi_m\uparrow1$. If Borel probabilities $\mu_n,\mu$ have $\int h\,d\mu_n\to\int h\,d\mu$ for every $h\in\mathcal D$, then $\mu_n\Rightarrow\mu$.

## Facts & Assumptions

[F1] [[thm-heine-borel-rn]]: Let $n \in \mathbb{N}$ with $n \ge 1$, let $\mathbb{R}^n$ be the set of functions
$n \to \mathbb{R}$ and let $d_2$ be the Euclidean metric on it
(lem-metrics-on-rn). Then:

1. **Closed boxes are compact.** For reals $a_k \le b_k$ $(k < n)$ the box
   $Q = \{\, x \in \mathbb{R}^n : a_k \le x_k \le b_k \text{ for every } k < n \,\}$
   is a compact subset of $(\mathbb{R}^n, d_2)$ (def-metric-compactness).
2. **Heine-Borel.** A subset $K \subseteq \mathbb{R}^n$ is a compact subset of
   $(\mathbb{R}^n, d_2)$ if and only if $K$ is closed in $\mathbb{R}^n$
   (def-metric-topology) and bounded
   (def-metric-bounded-diameter).
3. **The real line.** A subset $K \subseteq \mathbb{R}$ is a compact subset of
   $(\mathbb{R}, d_{\mathbb{R}})$, the usual metric $d_{\mathbb{R}}(x,y) = |x-y|$
   (lem-real-line-is-a-metric-space), if and only if $K$ is closed in
   $\mathbb{R}$ and bounded.

**No choice principle is used.** The bisection below halves one coordinate at a
time and takes the **left** half whenever the left half still fails to be finitely
covered, the right half otherwise: a rule with two outcomes, decided by a
property of the box, not a selection. That is the whole reason the theorem is
available in ZF, while the general "complete and totally bounded implies compact"
(thm-complete-and-totally-bounded-implies-compact) is not.

The hypothesis $n \ge 1$ is inherited from lem-metrics-on-rn, which defines
$\mathbb{R}^n$ and its metrics only there; the last remark below records what
happens at $n = 0$.

[F2] [[thm-monotone-convergence-for-the-integral]]: Let $0\le f_1\le f_2\le\cdots$ be measurable and suppose $f_n(x)\uparrow f(x)$
for every $x$. Then
$$\int f_n\,d\mu\uparrow\int f\,d\mu.$$

[F3] [[def-weak-convergence-of-borel-probability-measures]]: For Borel probability measures $\mu_n,\mu$ on a metric space S, write $\mu_n\Rightarrow\mu$ if $\int f\,d\mu_n\to\int f\,d\mu$ for every bounded continuous real function f on S. Continuity is def-metric-continuity. Such f is Borel measurable (inverse images of open sets are open) and $\int|f|\,d\mu\le\|f\|_\infty\mu(S)<\infty$, so the integrals are finite in def-integrable-real-and-complex-functions-and-their-integrals. No completeness or coupling is required.

## Proof

**Given:** The objects, hypotheses and definitions in the statement. Its conclusions are to be established below.

1.1 For each integer cube [-M,M]^d, take all finite rational rectangular grids and rational vertex values which are zero on every boundary vertex. Interpolate multilinearly in each grid rectangle and extend by zero outside the cube. Shared-face formulas agree because they use the same vertex data, and the outer face formulas vanish, so the extension is continuous and compactly supported. Finite rational data admit a countable enumeration, giving a countable family D. [given, algebra]

1.2 If f has compact support, F1 bounds its support inside the interior of some integer cube. Continuity on the cube is uniform: choose local oscillation neighborhoods, extract a finite subcover of smaller balls, and take a sufficiently small minimum radius. Thus choose a finite rational grid with f-oscillation below $\eta$ on every cell, and rational vertex values within $\eta$ of f, taking zero at boundary vertices. Multilinear interpolation is a convex combination of the vertex values. At a point x in any cell each vertex value differs from f(x) by less than 2eta, so the interpolant does too; outside the cube both functions vanish. This proves uniform density. [F1]

1.3 D contains $\chi_m(x)=\prod_{j=1}^d\min(1,\max(0,m+1-|x_j|))$: these are grid interpolants on [-m-1,m+1]^d, equal one on [-m,m]^d. They increase pointwise to one. F2 gives $\int\chi_m\,d\mu\uparrow1$. Given $\eta$>0 choose m with this integral greater than 1-$\eta$. The assumed test convergence then gives $\int\chi_m\,d\mu_n>1-2\eta$ for all large n. Hence for K=[-m-1,m+1]^d the outside masses are at most $\eta$ for $\mu$ and 2eta for late $\mu_n$. [F2]

2.1 Uniform density and the probability mass bound extend the assumed convergence to every compactly supported continuous test: approximate it within $\delta$ by a D test, making the two integral errors at most 2delta. For any bounded continuous f, $f\chi_{m+1}$ is such a test and equals f on K. Therefore step 1.3 gives $\limsup_n|\int f\,d\mu_n-\int f\,d\mu|\le3\|f\|_\infty\eta$. Let $\eta$ decrease to zero. This is F3. [F3, step 1.3] ∎
