---
id: cex-nonconstructive-expanders-suffice-for-uniform-reductions
kind: counterexample
title: "Nonconstructive expanders suffice for uniform reductions"
status: draft
origin: pipeline
deps: [fs-nonconstructive-expanders-suffice-for-uniform-reductions, lem-expander-size-adjustment-and-laziness]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; Definition2.3, p19; diagonal counterexample to constructibility inference, with spectral verification."
      url: "https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf"
---

## Statement refuted

There is a family of degree-$256$ expanders on every positive size with a uniform absolute gap but without any polynomial-time uniform generator, refuting [[fs-nonconstructive-expanders-suffice-for-uniform-reductions]].

## Facts & Assumptions

**Given:** the objects and hypotheses in the statement above.

[F2] For every integer $N\ge1$ there is a polynomial-time constructible reverse-paired $128$-regular multigraph $H_N$ on exactly $N$ vertices with $$\alpha(H_N)\le\rho_0:=1-\frac{49}{1638400}<1.$$ For $N\ge2$ every $S$ satisfies $\operatorname{cut}(S)\ge(7/10)\min(|S|,N-|S|)$. Every vertex has loops. ([[lem-expander-size-adjustment-and-laziness]]).


## Counterexample

1.1 From $H_N$ form $C_N^0=A(H_N)+128I$ and $C_N^1=A(H_N)+128P_N$, where $P_N$ swaps vertices one and two for $N\ge2$. Their entry $(1,2)$ differs by $128$, and both normalized mean-zero norms are at most $(1+\rho_0)/2<1$. A centered indicator then bounds every normalized cut ratio below by $(1-\rho_0)/4$ on sets of size at most half. At size one take only loops. [F2, algebra]

2.1 Assign the $i$-th polynomially clocked candidate generator size $i+2$. Choose the second matrix if its parsed output equals the first, and choose the first otherwise. The resulting family meets the same gap bound at all sizes but differs from every candidate on its assigned input. This is a counterexample to automatic constructibility of an arbitrary chosen family; the explicitly constructible family $H_N$ continues to exist. [step 1.1, algebra] ∎
