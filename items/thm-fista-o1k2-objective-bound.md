---
id: thm-fista-o1k2-objective-bound
kind: theorem
title: "FISTA has an O(1/k^2) objective bound"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - alg-proximal-gradient-and-fista
  - lem-fista-energy-estimate-sequence
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Amir Beck and Marc Teboulle, A Fast Iterative Shrinkage-Thresholding Algorithm for Linear Inverse Problems, Theorem 4.4"
      url: "https://www.tau.ac.il/~becka/FISTA.pdf"
    - title: "Neal Parikh and Stephen Boyd, Proximal Algorithms, §4.3"
      url: "https://web.stanford.edu/~boyd/papers/pdf/prox_algs.pdf"
---

## Statement

Under the exact FISTA hypotheses of [[alg-proximal-gradient-and-fista]], suppose $F=f+g$ has a minimizer $x_*$. For every $x_0\in\mathbb R^n$ and $k\ge1$,
$$0\le F(x_k)-F(x_*)\le\frac{2L\|x_0-x_*\|_2^2}{(k+1)^2}.$$

## Facts & Assumptions

**Given:** The FISTA recurrence, its objective and minimizer in the Statement.

[F1] [[lem-fista-energy-estimate-sequence]]: $2t_k^2(F(x_k)-F(x_*))/L+\|u_k\|_2^2\le\|x_0-x_*\|_2^2$ after telescoping the energy recurrence.

[F2] [[alg-proximal-gradient-and-fista]]: $t_1=1$ and $t_{k+1}=(1+\sqrt{1+4t_k^2})/2$.

[F3] [[alg-proximal-gradient-and-fista]]: each FISTA proximal output is in $\operatorname{dom}g$ and has finite $F$.

## Proof

1.1 Summing the energy recurrence of [F1] from $1$ to $k$ cancels all intermediate potentials. The $k=1$ base term is $\|u_0\|_2^2=\|x_0-x_*\|_2^2$, and every later objective coefficient is nonnegative; dropping $\|u_k\|_2^2$ gives $$F(x_k)-F(x_*)\le\frac{L\|x_0-x_*\|_2^2}{2t_k^2}.$$ The gap is nonnegative because $x_*$ minimizes $F$. [F1, given, algebra]

2.1 Since $\sqrt{1+4t_k^2}\ge2t_k$, [F2] gives $t_{k+1}\ge t_k+1/2$. Starting from $t_1=1$, induction yields $t_k\ge(k+1)/2$. Substitution into step 1.1 gives the stated bound. Finite objective values for the iterates follow from [F3]. [F2, F3, step 1.1, given, induction, algebra] ∎
