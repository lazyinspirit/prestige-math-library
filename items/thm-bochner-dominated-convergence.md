---
id: thm-bochner-dominated-convergence
kind: theorem
title: "Bochner dominated convergence theorem"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-countable-choice, def-strongly-measurable-banach-valued-function, thm-bochner-integrability-criterion, lem-bochner-integral-norm-inequality, lem-banach-valued-simple-integral-is-well-defined, thm-dominated-convergence, thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]
justified_by: []
forward_refs: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
      locator: "Section 11.6, Theorem 11.33 and complete proof, printed p. 335"
pipeline_run: phase-2-next-18
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $f_n:\Omega\to X$ be strongly measurable,
suppose $f_n(\omega)\to f(\omega)$ in norm for almost every $\omega$, and let
$g$ be a nonnegative integrable scalar function with
$\|f_n(\omega)\|\leq g(\omega)$ almost everywhere for every $n$. Then $f$ and
all $f_n$ are Bochner integrable,

$$\int\|f_n-f\|\,d\mu\longrightarrow0,$$

and $\int f_n\,d\mu\to\int f\,d\mu$ in norm.

## Facts & Assumptions

[A1] Countable Choice selects one member from every countable family of
nonempty sets ([[def-countable-choice]]).

[L1] Finite norm integral characterizes Bochner integrability for a strongly
measurable function ([[thm-bochner-integrability-criterion]]).

[L2] Strong measurability is a.e. pointwise norm approximation by finite-valued
measurable simple functions
([[def-strongly-measurable-banach-valued-function]]).

[L3] Pointwise scalar limits and countable suprema preserve measurability
([[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]]).

[L4] Scalar dominated convergence yields $L^1$ convergence
([[thm-dominated-convergence]]).

[L5] A Bochner integral is bounded in norm by the integral of the pointwise
norm ([[lem-bochner-integral-norm-inequality]]).

[L6] Simple Banach-valued integrals are linear
([[lem-banach-valued-simple-integral-is-well-defined]]).

## Proof

**Proof technique:** direct.

**Given:** The sequence, limit, domination, and $\mathrm{AC}_\omega$ in the
Statement.

1.1 Select simultaneous strong-measurability witnesses. [given, A1, L2, choose]
Use [A1] exactly once to choose, for every $n$, a simple approximation
sequence witnessing the strong measurability in [L2]. Unite their exceptional
null sets with those from convergence and domination; countable additivity
makes the union null. Modify all functions and approximants to be zero there.
We now have pointwise convergence everywhere and a doubly indexed family of
simple approximants. [given, A1, L2, choose]

2.1 Obtain a common countable range and measurable distances. [L3, step 1.1]
Let $D$ be $\{0\}$ together with all values of all selected simple
approximants. It is countable. For each $n$, the range of $f_n$ lies in
$\overline D$, hence the pointwise limit $f$ also takes values in $\overline D$.
For $y\in D$, the functions $\|f_n-y\|$ are measurable by applying [L3] to the
simple approximants, and $\|f-y\|$ is measurable by applying [L3] once more to
$f_n\to f$. [L3, step 1.1]

3.1 Build finite-valued approximants to the limit. [L2, step 2.1, construct]
Enumerate $D$ with repetitions as $(y_j)$. For each $m$, assign
$s_m(\omega)$ to be the least-indexed nearest point to $f(\omega)$ among
$y_1,\ldots,y_m$. The finitely many tie-broken Voronoi cells are measurable by
step 2.1, so $s_m$ is simple; density gives $s_m(\omega)\to f(\omega)$. Thus
$f$ is strongly measurable. [L2, step 2.1, construct]

4.1 Apply the scalar dominated-convergence theorem. [L1, L4, step 3.1]
Passing to the pointwise limit in $\|f_n\|\leq g$ gives $\|f\|\leq g$.
By [L1], $f$ and every $f_n$ are Bochner integrable. Moreover
$\|f_n-f\|\leq2g$, so [L4] gives
$\int\|f_n-f\|\to0$. [L1, L4, step 3.1]

5.1 Pass from $L^1$ convergence to integral convergence. [L1, L5, L6, step 4.1]
Combining simple approximations to $f_n$ and $f$, [L6] and approximation
independence from [L1] show that $\int(f_n-f)=\int f_n-\int f$. Apply [L5]:
$\|\int f_n-\int f\|\leq\int\|f_n-f\|\to0$ by step 4.1. If the measure space
is empty or $g=0$ a.e., every integral is zero; no separate endpoint convention
is needed. [L1, L5, L6, step 4.1] ∎
