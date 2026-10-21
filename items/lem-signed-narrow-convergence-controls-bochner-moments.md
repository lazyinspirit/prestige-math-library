---
id: lem-signed-narrow-convergence-controls-bochner-moments
kind: lemma
title: Signed narrow convergence controls variation tails and Bochner moments
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: [def-axiom-of-choice, def-dependent-choice, thm-choice-implies-dependent-implies-countable-choice, thm-jordan-decomposition-for-signed-measures, prop-jordan-parts-and-total-variation-formulas-for-signed-measures, cor-second-countable-lch-locally-finite-borel-measures-are-regular, thm-uniform-boundedness-principle, def-bochner-integrable-function, thm-bochner-integrability-criterion]
justified_by: []
proof_strategy: direct
axiom_use: "AC supplies the stated DC/Countable Choice and inherited measure/flow representation branches; all auxiliary constructions are proved locally."
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Chizat and Bach, On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport, locally reconstructed auxiliary proof"
      url: "https://arxiv.org/pdf/1805.09545"
---
## Statement

Assume AC. Let $X$ be a nonempty closed subset of $\mathbb R^k$ and let $\sigma_n,\nu$ be finite signed Borel measures on $X$, with $\int f d\sigma_n\to\int f d\nu$ for every bounded continuous real function $f$ on $X$. Then their total variations have uniformly bounded masses and are uniformly tight. For every bounded norm-continuous map $\phi:X\to H$ into a separable real Hilbert space,
$$\left\|\int\phi d\sigma_n-\int\phi d\nu\right\|_H\longrightarrow0.$$
Also $\|\sigma_n-\nu\|_{BL}\to0$, where the bounded-Lipschitz norm uses $\|f\|_\infty+\operatorname{Lip}(f)\le1$. For every nonnegative $\psi\in C_c(X)$ and bounded nonnegative continuous $W$ on $X$,
$$\int\psi d\nu^+\le\liminf_n\int\psi d\sigma_n^+,\qquad \int Wd|\nu|\le\liminf_n\int Wd|\sigma_n|.$$
Signed Bochner integrals mean the difference of the two Jordan-part integrals. The same conclusions about moments and BL convergence hold as $t\to\infty$ for a narrowly convergent continuous-time family, by the sequential criterion. Here narrow convergence explicitly means convergence against every function in $C_b(X)$, not merely compactly supported tests.

## Statement references

[[def-axiom-of-choice]]

[[def-dependent-choice]]

[[thm-choice-implies-dependent-implies-countable-choice]]

[[thm-jordan-decomposition-for-signed-measures]]

[[prop-jordan-parts-and-total-variation-formulas-for-signed-measures]]

[[cor-second-countable-lch-locally-finite-borel-measures-are-regular]]

[[thm-uniform-boundedness-principle]]

[[def-bochner-integrable-function]]

[[thm-bochner-integrability-criterion]]

## Facts & Assumptions

**Given:** AC and the hypotheses in the Statement.

[F1] Finite signed measures have Jordan/Hahn decompositions under AC, and variation is the sum of the Jordan parts and the supremum of partition sums. [[thm-jordan-decomposition-for-signed-measures]] [[prop-jordan-parts-and-total-variation-formulas-for-signed-measures]]

[F2] Finite Borel measures on the second-countable locally compact space $X$ are regular. [[cor-second-countable-lch-locally-finite-borel-measures-are-regular]]

[F3] A pointwise bounded family of continuous linear maps on a Banach space has uniformly bounded operator norms under DC, supplied by AC. [[thm-uniform-boundedness-principle]] [[def-axiom-of-choice]] [[def-dependent-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

[F4] Bounded strongly measurable functions on a finite measure space are Bochner integrable. [[def-bochner-integrable-function]] [[thm-bochner-integrability-criterion]]

## Proof

**Given:** The data and assumptions in the Statement.

1.1 The supremum-norm space $C_b(X)$ is Banach: a uniformly Cauchy sequence converges pointwise, hence uniformly, and a uniform limit of continuous functions is continuous. A signed measure $\sigma$ defines a bounded functional $T_\sigma f=\int f d\sigma$ of norm $|\sigma|(X)$. The upper bound is the variation inequality. For the reverse bound, use [F1] and [F2] to choose disjoint compact subsets of the two Hahn pieces with omitted variation arbitrarily small. The distance formula separating these compacts gives a bounded continuous function equal to $1$ and $-1$ there, with magnitude at most one, whose integral approaches $|\sigma|(X)$. Since $T_{\sigma_n}f$ converges for every $f$, [F3] gives $\sup_n|\sigma_n|(X)<\infty$. [F1, F2, F3, construct]

2.1 Put $y_n=\sigma_n-\nu$ and suppose their variations are not uniformly tight. Some $\epsilon>0$ then remains outside every compact ball for an arbitrarily late index: each fixed finite set of indices is tight by [F2]. Recursively choose $n_j$ increasing, radii $R_j\to\infty$, and $q_j\in C_c(X)$ with disjoint supports in $\{R_{j-1}<|x|<R_j\}$, $|q_j|\le1$, and $\int q_jdy_{n_j}\ge\epsilon/2$. At stage $j$, choose an index threshold so late that $|\int\sum_{i<j}q_i dy_n|<\epsilon/8$ thereafter, using narrow convergence. Enlarge the exclusion ball to make every earlier-index variation tail smaller than $\epsilon$, and select a later index with tail at least $\epsilon$. Regularity of its positive and negative Hahn pieces and distance cutoffs with compact support in that exterior produce $q_j$ with the required integral. Finally choose $R_j$ larger than its support and with $|y_{n_j}|(X\setminus B_{R_j})<\epsilon/8$. Increasing radii by one leaves gaps between the annuli. The locally finite sum $q=\sum_jq_j$ lies in $C_b(X)$ with $|q|\le1$. Its pairing with $y_{n_j}$ is at least $\epsilon/2-\epsilon/8-\epsilon/8=\epsilon/4$: the earlier terms are small by construction and the entire later sum is bounded by the chosen tail. This contradicts narrow convergence to zero. Thus $(|y_n|)$ is uniformly tight. Since $|\sigma_n|\le|y_n|+|\nu|$ and the fixed finite measure $|\nu|$ is tight by [F2], $(|\sigma_n|)$ is uniformly tight as well. [F1, F2, F3, step 1.1, construct]

3.1 Given $\delta>0$, choose compact $K$ with $\sup_n|\sigma_n|(X\setminus K)+|\nu|(X\setminus K)<\delta$. On $K$ a finite sum $\phi_\epsilon=\sum_{i=1}^N h_i\psi_i$, with $\psi_i\in C_c(X)$, approximates $\phi$ uniformly within $\epsilon$, and can be chosen with $\|\phi_\epsilon\|_\infty\le\|\phi\|_\infty$. To construct it, cover $K$ by finitely many relative balls on which $\phi$ varies by less than $\epsilon$, use distance cutoffs, normalize their sum near $K$, and multiply by a compact cutoff equal to one on $K$; choose $h_i$ as feature values at the centers. Its integral converges in norm by scalar narrow convergence of the finitely many $\psi_i$. The remaining norm error is at most $\epsilon(|\sigma_n|(X)+|\nu|(X))+2\|\phi\|_\infty(|\sigma_n|(X\setminus K)+|\nu|(X\setminus K))$. Let $\epsilon,\delta\downarrow0$ to prove the Bochner-moment conclusion; [F4] gives existence of all integrals. [F2, F4, step 1.1, step 2.1, construct]

4.1 The restrictions to $K$ of the bounded-Lipschitz unit ball have finite uniform $\epsilon$-nets. Explicitly take a finite $\epsilon$-net of points of $K$, round each function's values there to a rational grid in $[-1,1]$, and use its Lipschitz bound to control the error between those points. Only finitely many rounded value patterns occur; retain one actual function for each occurring pattern. Narrow convergence controls their finitely many pairings, while step 1.1 bounds the uniform approximation error on $K$ and step 2.1 bounds all tail errors. Letting the mesh and tail bound decrease proves BL convergence. [step 1.1, step 2.1, construct, step 3.1]

5.1 For $0\le q\le\psi$ with $q\in C_c(X)$, $\int\psi d\sigma_n^+\ge\int qd\sigma_n\to\int qd\nu$. The supremum of the last quantity over such $q$ equals $\int\psi d\nu^+$: use the Hahn pieces, compact regular approximation, and distance cutoffs to approximate their sign restriction. Similarly, for $q\in C_c(X)$ with $|q|\le W$, $\int Wd|\sigma_n|\ge\int qd\sigma_n\to\int qd\nu$, and the supremum is $\int Wd|\nu|$. For the lower bound in this supremum, multiply $W$ by a compact cutoff and a continuous function of magnitude at most one that is $1$ and $-1$ on compact subsets of the two Hahn pieces; omitted weighted variation tends to zero by [F2]. These prove the two lower-semicontinuity claims without assuming convergence of Jordan parts. Any failure of a continuous-time moment or BL limit yields a sequence $t_n\to\infty$ contradicting the result just proved. [F1, F2, step 3.1, step 4.1] ∎

## Source note

This is a local signed-convergence lemma for the Euclidean interface used in Chizat–Bach Appendix A.1/C.2.2. It is not an imported signed Prokhorov theorem. BL convergence alone on an unbounded domain is not being asserted sufficient for signed narrow convergence without further hypotheses.
