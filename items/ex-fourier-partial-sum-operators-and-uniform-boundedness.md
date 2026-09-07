---
id: ex-fourier-partial-sum-operators-and-uniform-boundedness
kind: example
title: A residual set of continuous functions has unbounded partial sums at zero
deps: [lem-fourier-partial-sum-operator-norm-equals-the-lebesgue-constant, thm-banach-steinhaus-dichotomy, thm-c-k-complete-in-the-sup-metric]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references: [{title: 'Laugesen, Harmonic Analysis Lecture Notes', url: 'https://arxiv.org/pdf/0903.3845', locator: 'ch. 8, Theorem 8.2 pp. 48–49, with published Banach–Steinhaus dichotomy'}]
status: draft
origin: pipeline
proof_strategy: Apply the published Baire dichotomy to T_N f=S_N f(0). Explain the closed periodic subspace as for the A-page witness and display the set as intersection_m union_N {f:|T_N f|>m}. Do not replace residuality in function space by a claim about almost every point of the torus. The unbounded functional norms are now part of the preceding norm lemma, so no B-page dependency is used.
---

## Example

Assume DC. In the real Banach space $C(\mathbb T,\mathbb R)$ with supremum norm, the set

$$\mathcal U=\{f:\sup_{N\ge0}|S_Nf(0)|=\infty\}$$

is a dense $G_\delta$.

## Facts & Assumptions

**Given:** DC, the period-one torus with Haar mass one, and real continuous functions with the supremum norm.

[F1] For each $N\ge0$, evaluation $T_Nf=S_Nf(0)$ on real $C(\mathbb T)$ has norm $\|D_N\|_1$, and these norms are unbounded ([[lem-fourier-partial-sum-operator-norm-equals-the-lebesgue-constant]]).

[F2] Under DC, a family of bounded linear maps from a Banach space to a normed space either has uniformly bounded norms or has a dense $G_\delta$ set of points with unbounded output norms ([[thm-banach-steinhaus-dichotomy]]).

[F3] For every nonempty compact metric space $K$, $C(K,\mathbb R)$ is complete in the supremum metric ([[thm-c-k-complete-in-the-sup-metric]]).

## Verification

**Proof technique:** Banach–Steinhaus dichotomy on the periodic subspace.

1.1 Real continuous periodic functions identify isometrically with $X=\{f\in C([0,1],\mathbb R):f(0)=f(1)\}$. A Cauchy sequence has a continuous uniform limit by completeness on the nonempty compact interval. Endpoint equality passes to that limit because evaluation at either endpoint changes by at most the uniform error. Hence $X$ is Banach. [F3, given]

2.1 The family $T_N:X\to\mathbb R$ consists of bounded linear maps, with unbounded operator norms. The bounded-norm alternative in the dichotomy is therefore excluded; its other alternative says precisely that $\mathcal U$ is dense and $G_\delta$ in $X$. [F1, F2, step 1.1]

3.1 Explicitly, $\mathcal U=\bigcap_{r=1}^\infty\bigcup_{N=0}^\infty\{f\in X:|T_Nf|>r\}$. Each inner set is open by continuity of $T_N$, and the displayed membership condition is exactly unboundedness of the sequence of finite values. Thus the topology in this conclusion is topology on a space of functions; it asserts no full-measure set of points of the torus for any fixed function. [F1, step 2.1, algebra] ∎
