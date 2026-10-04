---
id: def-dyadic-cube-in-rn-all-generations
kind: definition
title: "Dyadic cubes of all generations in R^n"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-dyadic-cube-in-rn, def-half-open-box, def-integer-power, def-integers, lem-power-laws, thm-lebesgue-measure-of-a-box-of-every-kind, def-countable-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, third edition"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "§5.3.1, dyadic cube definition and nesting sentence preceding Theorem 5.3.1, printed p. 355"
    - title: "Juha Kinnunen, Harmonic Analysis"
      url: "https://math.aalto.fi/~jkkinnunen/files/harmonic_analysis.pdf"
      locator: "ch. 1 §1.2, definition of D_k for k in Z and the transfer of properties (2)–(5) of Remark 1.1, printed pp. 9–10"
---

## Definition

Fix an integer $n\ge1$. Let $\mathbb Z$ be the integers of [[def-integers]] with
their order and ring operations, and read integer values inside $\mathbb R$ along
the canonical embedding. For $k\in\mathbb Z$ and a function $m:n\to\mathbb Z$, the
**dyadic cube of generation $k$ and index $m$** is the half-open box
([[def-half-open-box]])
$$Q_{k,m}:=\{\,x\in\mathbb R^n: m_i2^{-k}<x_i\le(m_i+1)2^{-k}\ \text{for every }i<n\,\},$$
where $2^{-k}$ is the integer power of [[def-integer-power]] and the products
$m_i2^{-k}$ are read in $\mathbb R$. The **generation** of the cube is $k$ and its
**side length** is $2^{-k}$. Since $2^{-k}>0$ by [[lem-power-laws]], the two
endpoints of each coordinate interval satisfy $m_i2^{-k}<(m_i+1)2^{-k}$, so
$Q_{k,m}$ is a nonempty half-open box with both parameters finite; assuming Countable Choice ([[def-countable-choice]]), its measure,
computed from the half-open box measure theorem
([[thm-lebesgue-measure-of-a-box-of-every-kind]]), is the product of the $n$ equal
side lengths
$$|Q_{k,m}|=(2^{-k})^n=2^{-kn}.$$

Generations are indexed by all of $\mathbb Z$, not merely by the natural numbers:
for $k>0$ the side length $2^{-k}$ is smaller than $1$, for $k=0$ it is $1$, and
for $k<0$ the side length is $2^{|k|}>1$, so cubes larger than the unit cube
occur. The cubes with $k\ge0$ are exactly the generation-$k$ dyadic cubes of the
measure-theoretic convention [[def-dyadic-cube-in-rn]], whose generation index is
a natural number; that convention is bounded above in size by the unit cube
$k=0$. Such a grid does not suffice for a stopping-time decomposition at a small
height: a maximal bad cube can then be the unit cube while the height is far below
its average. The all-generations family above is the grid used by the dyadic
maximal function and by the Calderón–Zygmund decomposition on this page; the next
item proves that it partitions $\mathbb R^n$ at each generation, that each cube
has exactly one ancestor of every coarser generation, and that two cubes are
nested or disjoint. All parameters and the generation are determined by the cube
as a set, by the parameter uniqueness recorded in [[def-half-open-box]]. The set construction is choice-free; only the stated identification with Lebesgue measure uses Countable Choice.
