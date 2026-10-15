---
id: cor-dirichlet-normal-mixture-interval-mass-refinement
kind: corollary
title: "An interval-mass condition removes the Gaussian-bias logarithm"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 10
deps:
  - thm-dirichlet-normal-mixture-posterior-contraction
  - lem-dirichlet-normal-mixture-interval-mass-local-prior-mass
  - lem-dirichlet-normal-mixture-density-well-defined
  - lem-iid-posterior-denominator-lower-bound-from-kl-mass
  - lem-dirichlet-normal-mixture-posterior-sieve-tail
  - lem-dirichlet-normal-mixture-countable-band-entropy-sum
  - lem-iid-posterior-contraction-under-countable-sieves
proof_strategy: direct
axiom_use: "AC is inherited from the assumed Dirichlet-mixture model and the supplied contraction and local-mass results."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Subhashis Ghosal and Aad W. van der Vaart, Posterior convergence rates of Dirichlet mixtures at smooth densities, Theorem 1, equation (2.2), and §9 proof"
      url: "https://arxiv.org/pdf/0708.1885"
---

## Statement

Under the hypotheses of [[thm-dirichlet-normal-mixture-posterior-contraction]],
assume additionally that $\operatorname{supp}(p_0)$ is a finite union of
intervals and there are $a,c>0$ such that $P_0(I)\ge c\lambda(I)^a$ for
every interval $I$ contained in the support. Then the source's sharpened
Hellinger contraction rate is
$$\max\{(n\sigma_n)^{-1/2}\log n,\ n^{-1/2}\sigma_n^{-\eta},\ \sigma_n^2\},\qquad \eta>\frac{\gamma}{2(\gamma-1)}.$$
If $G$ is compactly supported in $(0,\infty)$, the middle term is omitted.

## Facts & Assumptions

**Given:** AC and the exact hypotheses of [[thm-dirichlet-normal-mixture-posterior-contraction]], together with the finite-union interval-mass condition in the Statement.

[F1] The main theorem fixes the smooth compact truth, the finite DP base measure, the independent scale law, the polynomial bandwidth bounds and both scale-tail assumptions. [[thm-dirichlet-normal-mixture-posterior-contraction]]

[F2] With $d_n=\max\{(n\sigma_n)^{-1/2}\log n,\sigma_n^2\}$, the local KL and log-square set at radius a constant multiple of $d_n$ has prior mass at least $e^{-Cnd_n^2}$. [[lem-dirichlet-normal-mixture-interval-mass-local-prior-mass]]

[F3] A local set with both quantities at most $\bar d_n^2$ and mass at least $e^{-n\bar d_n^2}$ gives a denominator at least $e^{-3n\bar d_n^2}$ except on an event of probability at most $(n\bar d_n^2)^{-1}$. [[lem-iid-posterior-denominator-lower-bound-from-kl-mass]]

[F4] The posterior sieve-complement bound applies when its denominator, Gaussian leakage and distant-location conditions hold. [[lem-dirichlet-normal-mixture-posterior-sieve-tail]]

[F5] For a fixed $A\ge1$, the dyadic scale-band weighted entropy condition holds at a sufficiently large multiple of the first and middle terms of the stated rate, or of the first term alone for compactly supported $G$. [[lem-dirichlet-normal-mixture-countable-band-entropy-sum]]

[F6] Local KL/log-square mass, a vanishing posterior sieve complement and the weighted countable-band entropy condition imply posterior contraction at every sufficiently large fixed multiple of the target radius. [[lem-iid-posterior-contraction-under-countable-sieves]]

[F7] The mixture densities are jointly measurable, positive, finite and normalized. [[lem-dirichlet-normal-mixture-density-well-defined]]

## Proof

1.1 The $C^2$ compact truth in [F1] satisfies the $J$ hypothesis of [F2] by the stated derivative integrability condition. All other hypotheses of [F2] are either in [F1] or the interval-mass premise. Choose a fixed $C\ge1$ large enough that, with $\bar d_n=\sqrt C d_n$, the local set has both quantities at most $\bar d_n^2$ and mass at least $e^{-n\bar d_n^2}$. By [F3], its denominator is at least $e^{-3n\bar d_n^2}$ with probability tending to one, since $n\bar d_n^2\ge C\sigma_n^{-1}(\log n)^2\to\infty$. [F1, F2, F3, given, choose, algebra]

2.1 Let $\epsilon_n$ denote the displayed improved rate, omitting its middle term if $G$ is compactly supported. Put $r_n=M_0\epsilon_n$ for a sufficiently large fixed $M_0$ and $\xi_n=\min\{r_n,1/4\}/\sqrt8$. Then $\bar d_n\le r_n$ after increasing $M_0$, $n\xi_n^2\to\infty$ and $\xi_n^{-2}\le C'n$: use $\epsilon_n\ge(n\sigma_n)^{-1/2}\log n\ge n^{-1/2}\log n$ eventually when $r_n<1/4$, while otherwise $\xi_n$ is fixed. Choose a compact interval $I=[L,U]$ containing the truth support in its interior, within the interval on which the base density is positive. Put $R=(U-L)/2>0$ and $\kappa=\max\{a_1,1-4a_2,0\}<1$. The bandwidth bounds give $n\bar d_n^2\le C'n^\kappa(\log n)^2$. Choose $s_n=c_0(\log n)^{-1/2}$ with $c_0$ large enough that $q_n=2\Phi(-R/s_n)\ge n^{-\theta}$ eventually for some $0<\theta<1-\kappa$. This follows by integrating the standard normal density over $[R/s_n,R/s_n+1]$ once $R^2/(2c_0^2)<\theta$. Thus $nq_n-5n\bar d_n^2\to\infty$. [F1, step 1.1, choose, algebra]

3.1 Choose $d>0$ with $d^2/(2c_0^2)>4$ and a fixed $A\ge1$ large enough that $I_d=[L-d,U+d]\subseteq[-A,A]$. Then $n\xi_n^{-2}s_n^{-1}e^{-d^2/(2s_n^2)}\to0$, by the inverse-radius bound in step 2.1. With denominator coefficient $3$, all hypotheses of [F4] hold at local radius $\bar d_n$ and location-tail tolerance $\xi_n$. It follows that the posterior complement of $S_n=\{\sigma\le s_n,F([-A,A]^c)\le\xi_n^2\}$ vanishes in sampling probability: [F4] first gives the smaller location sieve using $I_d$, and $[-A,A]^c\subseteq I_d^c$. [F4, step 1.1, step 2.1, choose, algebra]

4.1 Partition $S_n$ into the measurable dyadic scale bands $S_{n,j}=S_n\cap\{2^j\sigma_n\le\sigma<2^{j+1}\sigma_n\}$. Their prior masses are bounded by $G([2^j,2^{j+1}))$. We have $s_n/\sigma_n\to\infty$, and $\xi_n^2=\min\{r_n,1/4\}^2/8$ matches the tail tolerance in [F5]. Thus [F5] supplies $e^{-nr_n^2}\sum_j\sqrt{N(r_n,\{p_{F,\sigma}:(F,\sigma)\in S_{n,j}\},h)\Pi_n(S_{n,j})}\to0$. For compactly supported $G$, its compact branch applies with the first term alone. The preceding steps used only $d_n$ and the retained first term, so they also apply unchanged to this improved compact-scale rate. [F1, F5, step 2.1, step 3.1, algebra]

5.1 By [F7] the model has the jointly measurable density likelihood required in [F6]. Step 1.1 gives the local mass condition, step 3.1 gives the sieve complement, and step 4.1 gives the weighted entropy condition at target radius $r_n$. Both $n\bar d_n^2$ and $nr_n^2$ diverge, and $\bar d_n\le r_n$. Apply [F6] to obtain posterior contraction at every sufficiently large fixed multiple of $r_n=M_0\epsilon_n$, in $P_0^n$-probability. Absorbing $M_0$ into the final constant proves the Statement, including its compact-scale branch. [F2, F6, F7, step 1.1, step 2.1, step 3.1, step 4.1, algebra] ∎

## Remarks

The source proof invokes a uniform convolution likelihood-ratio bound through its unimodality lemma. Here the local Gaussian semigroup argument bounds KL and log-square bias directly from the original second-derivative integrability hypothesis. The interval-mass condition then controls only the discretization perturbation. This proves the stated refinement without adding a unimodality assumption.
