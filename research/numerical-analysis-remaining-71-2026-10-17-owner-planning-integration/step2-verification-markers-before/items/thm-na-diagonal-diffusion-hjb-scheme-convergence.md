---
id: thm-na-diagonal-diffusion-hjb-scheme-convergence
kind: theorem
title: Unconditional convergence and existence for the periodic diagonal-diffusion HJB scheme
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 7
deps: [thm-na-periodic-diagonal-hjb-second-order-comparison, thm-na-diagonal-diffusion-scheme-half-relaxed-limits, cor-na-diagonal-diffusion-scheme-converges-under-comparison, def-na-periodic-diagonal-controlled-diffusion-hjb-problem, alg-na-explicit-diagonal-diffusion-hjb-grid-step, def-half-relaxed-limits, thm-heine-borel-rn, lem-ceiling-and-least-positive-integer-threshold, def-axiom-of-choice]
proof_strategy: direct
axiom_base: Axiom of Choice is propagated from the second-order comparison theorem; its countable-choice fragment also covers the existing half-relaxed recovery supplier.
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Crandall, Ishii and Lions, User's guide to viscosity solutions
      url: https://arxiv.org/pdf/math/9207212
      locator: Section 6, Remark 6.4; Section 8, comparison and initial data.
    - title: Barles and Souganidis, Convergence of approximation schemes for fully nonlinear second order equations
      url: https://benjaminmoll.com/wp-content/uploads/2021/04/barles-souganidis.pdf
      locator: Section 2, Theorem 2.1, comparison and half-relaxed squeezing.
---

## Statement

Assume the Axiom of Choice. For the full model of
[[def-na-periodic-diagonal-controlled-diffusion-hjb-problem]], let
$h_{k,j}=1/N_{k,j}\to0$, $N_{k,j}\ge3$, and $\tau_k=T/M_k\to0$.
Assume the explicit scheme
[[alg-na-explicit-diagonal-diffusion-hjb-grid-step]] satisfies its
diffusion-dominance and CFL inequalities at every row, and initialize it by
$U_{k,i}^0=u_0(x_{k,i})$. Its multilinear-in-space, constant-on-time-interval
extensions converge locally uniformly on $\mathbb T^d\times[0,T)$ to the
unique bounded continuous viscosity solution of the model Cauchy problem.
Such admissible mesh sequences exist for every model in this coefficient
class, so the conclusion also proves existence of that viscosity solution.
Comparison and uniqueness apply among all bounded continuous viscosity
solutions with the prescribed initial trace. There is no additional
comparison hypothesis and no claimed solution-error rate.

## Facts & Assumptions

**Given:** The exact coefficient class, continuous periodic initial data,
and mesh family in the statement; assume the Axiom of Choice.

[A1] Every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F1] The existing local discrete half-relaxed proof gives a bounded USC
subsolution $\overline U$ and bounded LSC supersolution $\underline U$,
ordered as $\underline U\le\overline U$, with the prescribed relaxed
initial traces. It includes the proven stencil monotonicity, smooth-test
consistency, mesh contact localization, smooth-test equivalence and discrete
initial estimate
([[thm-na-diagonal-diffusion-scheme-half-relaxed-limits]],
[[def-half-relaxed-limits]]).

[F2] The exact coefficient class has comparison for those bounded
semicontinuous functions and ordered relaxed initial traces
([[thm-na-periodic-diagonal-hjb-second-order-comparison]]).

[F3] Under precisely [F1] and a comparison principle of the strength [F2],
the existing conditional corollary identifies both envelopes with a bounded
continuous viscosity solution and proves locally uniform convergence of the
spatial interpolants through every $T'<T$
([[cor-na-diagonal-diffusion-scheme-converges-under-comparison]]).

[F4] There are common finite coefficient bounds
$\alpha_j^a\le A^*$, $|b_j^a|\le B^*$, with
$\alpha_j^a\ge\alpha_*>0$. All explicit updates are finite maxima of
finite expressions and are defined on any finite admissible grid
([[def-na-periodic-diagonal-controlled-diffusion-hjb-problem]],
[[alg-na-explicit-diagonal-diffusion-hjb-grid-step]]).

[F5] For $x\ge0$, $\max\{1,\lceil x\rceil\}$ is the least positive integer at least $x$ ([[lem-ceiling-and-least-positive-integer-threshold]]).

## Proof

1.1 Apply [F1] to the given mesh family. Comparison [F2] applies, because [F1] supplies exactly its bounded USC/LSC functions, interior viscosity inequalities and ordered relaxed initial traces. It gives $\overline U\le\underline U$, hence equality by the reverse inequality in [F1]. The conditional implication [F3] now has its premise proved locally, and gives the claimed bounded continuous viscosity solution and convergence on each compact cylinder $\mathbb T^d\times[0,T']$, $T'<T$. Comparing any two bounded continuous solutions in both orders using [F2] proves uniqueness. Full AC is inherited from [F2], and also supplies the Countable Choice used by [F1]. [A1, F1, F2, F3, given, algebra]

2.1 To ensure the existence conclusion is nonvacuous, choose uniform grids $N_{k,j}=N_0+k$ for every $j$, where $$N_0=\max\{3,\lceil B^*/\alpha_*\rceil\}$$ is an integer by [F5]. Put $N=N_0+k$ and $$M_k=\max\{1,\lceil T d(2A^*N^2+B^*N)\rceil\}+k,\qquad\tau_k=T/M_k.$$ Then $|b_j^a|h_j\le B^*/N\le\alpha_*\le\alpha_j^a$, while $$\tau_k\sum_j(2\alpha_j^a/h_j^2+|b_j^a|/h_j)\le (T/M_k)d(2A^*N^2+B^*N)\le1.$$ Thus every row is admissible, $h_{k,j}\to0$, and $\tau_k\le T/k\to0$. The finite recurrence in [F4] produces the numerical arrays on this explicit mesh family. Step 1.1 gives their limit and therefore existence for every stated datum and coefficient family. [F4, F5, step 1.1, construct, algebra] ∎
