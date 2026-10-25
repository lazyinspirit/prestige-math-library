---
id: cex-continuous-function-with-divergent-fourier-series-at-a-point
kind: counterexample
title: A continuous function with divergent Fourier series at a prescribed point
deps: [lem-fourier-partial-sum-operator-norm-equals-the-lebesgue-constant, thm-uniform-boundedness-principle, thm-c-k-complete-in-the-sup-metric, thm-dini-pointwise-convergence-criterion-for-fourier-series]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references: [{title: 'Grafakos, Classical Fourier Analysis, third edition', url: 'https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf', locator: '§3.4.3, Proposition 3.4.6(a), pp. 210–211'}]
status: published
origin: pipeline
proof_strategy: 'Work on the closed subspace {f in C([0,1],R): f(0)=f(1)}; completeness follows from the published real C(K) theorem and preservation of endpoint equality under uniform limits. Apply uniform boundedness contrapositively to the evaluation functionals from the norm lemma. Carry DC explicitly. This is the single canonical du Bois-Reymond witness. Include the harvested localization observation: a function vanishing near x0 satisfies the published Dini criterion with s=0, so the divergent witness cannot do so.'
---

## Statement refuted

Continuity of a one-periodic real function guarantees convergence of its Fourier series at a prescribed point.

More precisely, assume DC. For every $x_0\in\mathbb T$ there exists $f\in C(\mathbb T,\mathbb R)$ such that

$$\sup_{N\ge0}|S_Nf(x_0)|=\infty.$$

## Facts & Assumptions

**Given:** DC and a prescribed point $x_0\in\mathbb T=\mathbb R/\mathbb Z$.

[F1] On real or complex $C(\mathbb T)$ the functional $f\mapsto S_Nf(x_0)$ is bounded, has norm $\|D_N\|_1$, and these norms are unbounded ([[lem-fourier-partial-sum-operator-norm-equals-the-lebesgue-constant]]).

[F2] Assuming DC, a pointwise bounded family of bounded linear maps from a Banach space to a normed space has uniformly bounded operator norms ([[thm-uniform-boundedness-principle]]).

[F3] For a nonempty compact metric space $K$, $C(K,\mathbb R)$ is complete in the supremum metric ([[thm-c-k-complete-in-the-sup-metric]]).

[F4] Assuming countable choice, if a one-period integrable function $h$ satisfies $\int_0^\delta |h(x+t)+h(x-t)-2s|\,dt/t<\infty$ for some $\delta\in(0,1/2)$, then $S_Nh(x)\to s$ ([[thm-dini-pointwise-convergence-criterion-for-fourier-series]]).

## Counterexample

**Proof technique:** direct application of uniform boundedness.

1.1 Let $X=\{f\in C([0,1],\mathbb R):f(0)=f(1)\}$ with the supremum norm. The interval is nonempty and compact, so a Cauchy sequence in $X$ has a continuous uniform limit by the completeness theorem. Its endpoint values remain equal, since $|f(0)-f(1)|\le2\|f-f_j\|_\infty$ for every approximating member $f_j$. Thus $X$ is a real Banach space, identified isometrically with the real continuous periodic functions. [F3, algebra]

2.1 Define $T_N:X\to\mathbb R$ by $T_Nf=S_Nf(x_0)$. These maps are real-valued bounded linear functionals, and $\sup_N\|T_N\|=\infty$. If all $f\in X$ had $\sup_N|T_Nf|<\infty$, uniform boundedness on this Banach space would make the operator norms uniformly bounded. Hence there exists a real $f\in X$ with $\sup_N|T_Nf|=\infty$. Every individual value is finite, so this sequence cannot converge. [F1, F2, step 1.1]

3.1 For this witness, vanishing on any neighborhood of $x_0$ is impossible: if it vanished there, choose $0<\delta<1/2$ within that neighborhood. The Dini integral with $s=0$ would be zero, giving $S_Nf(x_0)\to0$. DC supplies the countable choice assumed by that criterion. This contradicts the unboundedness in step 2.1 and proves the stated localization observation. [F4, step 2.1, given] ∎
