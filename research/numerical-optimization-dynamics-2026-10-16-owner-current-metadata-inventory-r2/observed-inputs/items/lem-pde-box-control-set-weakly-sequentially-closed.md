---
id: lem-pde-box-control-set-weakly-sequentially-closed
kind: lemma
title: A pointwise L2 box is weakly sequentially closed
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-pde-box-control-set
  - thm-holder-inequality-for-integrals
  - thm-nonnegative-integral-zero-iff-zero-almost-everywhere
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Hannes Meinlschmidt, Optimization with Partial Differential Equations, FAU lecture notes
      url: "https://hannes.meinlschmidt.eu/lecture_notes/pde_opt.pdf"
      locator: "§2, printed pp. 5–7: weakly closed convex admissible sets in existence proofs."
---

## Statement

Let $E$ and $Q_{ad}(q_a,q_b)$ be as in [[def-pde-box-control-set]]. If $q_n\in Q_{ad}$ and $q_n\rightharpoonup q$ weakly in $L^2(E)$, then $q\in Q_{ad}$.

## Facts & Assumptions
**Given:** A bounded measurable $E$, $q_a,q_b\in L^2(E)$ with $q_a\le q_b$ almost everywhere, a sequence $q_n\in Q_{ad}$, and weak convergence $q_n\rightharpoonup q$.

[F1] $Q_{ad}=\{r\in L^2(E):q_a\le r\le q_b\text{ a.e.}\}$ ([[def-pde-box-control-set]]).

[F2] On finite-measure $E$, Hölder with exponents $2,2$ makes products of $L^2(E)$ functions integrable ([[thm-holder-inequality-for-integrals]]).

[F3] A nonnegative measurable function has integral zero exactly when it vanishes almost everywhere ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).

## Proof

1.1 Let $A=\{x\in E:q(x)<q_a(x)\}$. Since $E$ is bounded, choose $M\ge1$ with $E\subset(-M,M)^d$. The single-box cover in the definition of Lebesgue outer measure gives $\mu(E)\le(2M)^d<\infty$, so $\mathbf1_A\in L^2(E)$. If $A$ had positive measure, $f=(q_a-q)\mathbf1_A$ would be nonnegative, integrable by [F2], and positive on a set of positive measure. Thus [F3] gives $\int_E f>0$. Weak convergence tested against $\mathbf1_A$ gives $\int_A(q-q_a)=\lim_{n\to\infty}\int_A(q_n-q_a)\ge0$, contradicting $\int_A(q-q_a)=-\int_E f<0$. Therefore $q\ge q_a$ almost everywhere. [F1, F2, F3, given, algebra]

2.1 Let $B=\{x\in E:q(x)>q_b(x)\}$. As in step 1.1, $\mathbf1_B\in L^2(E)$. If $B$ had positive measure, $f=(q-q_b)\mathbf1_B$ would be nonnegative, integrable by [F2], and positive on a set of positive measure. Thus [F3] gives $\int_E f>0$. Weak convergence tested against $\mathbf1_B$ gives $\int_B(q-q_b)=\lim_n\int_B(q_n-q_b)\le0$, contradicting $\int_B(q-q_b)=\int_E f>0$. Therefore $q\le q_b$ almost everywhere, and [F1] gives $q\in Q_{ad}$. [F1, F2, F3, step 1.1, given, algebra] ∎
