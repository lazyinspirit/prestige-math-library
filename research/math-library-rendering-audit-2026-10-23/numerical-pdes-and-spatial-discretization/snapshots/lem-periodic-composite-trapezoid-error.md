---
id: lem-periodic-composite-trapezoid-error
kind: lemma
title: Composite periodic trapezoidal error in a uniform tensor grid
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-periodic-pic-grid-and-inner-product]
proof_strategy: direct
axiom_use: No choice principle is used; all quadrature operators are finite sums or integrals on a compact torus.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: David Levy, Introduction to Numerical Analysis, full lecture notes, §§6.2–6.3
      url: https://math.umd.edu/~dlevy/classes/amsc460/na-notes.pdf
    - title: André Massing, TMA4320 Scientific Computation Notes, Composite Quadrature Rules
      url: https://andre-massing.github.io/TMA4320_ScientificComputationNotes/chapter_integration/CompositeQuadrature.html
---

## Statement

Let $L>0$, odd $N\ge3$, $h=L/N$, and $f\in C^2(\mathbb T_L^d)$ for $d\in\{1,2,3\}$. With the uniform tensor grid $x_j=hj$ and indices taken modulo $N$,
$$ \left|h^d\sum_{j\in(\mathbb Z/N\mathbb Z)^d}f(x_j)-\int_{[0,L]^d}f(x)\,dx\right| \le \frac{L^dh^2}{12}\sum_{a=1}^d\|\partial_{aa}f\|_\infty . $$

## Facts & Assumptions

**Given:** A periodic $C^2$ function and a uniform periodic tensor grid with $N$ cells in each coordinate.

[F1] [[def-periodic-pic-grid-and-inner-product]]: the periodic grid uses $h=L/N$, wraps indices modulo $N$, and its tensor nodes are $x_j=hj$.

## Proof

1.1 In one coordinate, on a cell $[a,a+h]$, put $K(x)=(x-a)(a+h-x)/2$. Two integrations by parts give $\frac h2(f(a)+f(a+h))-\int_a^{a+h}f(x)\,dx=\int_a^{a+h}K(x)f''(x)\,dx .$ Since $K\ge0$ and $\int_a^{a+h}K(x)\,dx=h^3/12$, the absolute cell error is at most $h^3\|f''\|_\infty/12$. Sum over the $N$ periodic cells, whose endpoint contributions assemble into the periodic trapezoid sum $h\sum_j f(jh)$. This gives the one-dimensional error bound $Lh^2\|f''\|_\infty/12$. [F1, algebra]

2.1 For each coordinate $a$, let $Q_a$ denote the periodic trapezoid operator in that coordinate and $I_a$ integration over that coordinate. Both have sup-norm operator bound at most $L$, since their weights are nonnegative and sum to $L$. The telescoping identity $Q_1\cdots Q_d-I_1\cdots I_d =\sum_{a=1}^d Q_1\cdots Q_{a-1}(Q_a-I_a)I_{a+1}\cdots I_d$ holds by cancellation. In the $a$th summand, the one-dimensional bound from step 1.1 applies after the later-coordinate integrations; differentiation in coordinate $a$ commutes with those integrations. The other $d-1$ operators contribute at most $L^{d-1}$ in sup norm. Thus that summand is bounded by $L^dh^2\|\partial_{aa}f\|_\infty/12$. Summing these bounds gives the displayed estimate, because $Q_1\cdots Q_d f=h^d\sum_jf(x_j)$ and $I_1\cdots I_df=\int_{[0,L]^d}f$. [F1, step 1.1, algebra] ∎
