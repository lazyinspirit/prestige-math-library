---
id: thm-mlmc-complexity-under-rate-assumptions
kind: theorem
title: "MLMC cost complexity under bias, variance, and work rates"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-mlmc-hierarchy-and-coupled-corrections
  - lem-mlmc-estimator-moments-and-mse
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Michael B. Giles, Multilevel Monte Carlo Path Simulation, Theorem 3.1 and proof"
      url: "https://people.maths.ox.ac.uk/gilesm/files/opre.pdf"
    - title: "Christoph Reisinger, Stochastic Simulation: Lecture 9a, Multilevel Monte Carlo Theory, slides 9–12"
      url: "https://courses.maths.ox.ac.uk/mod/resource/view.php?id=8613"
---

## Statement

Let $M\ge2$ be an integer, $T>0$, and $h_\ell=T M^{-\ell}$. Let $P$ be an integrable real target. Suppose we are given an infinite compatible hierarchy: for every $\ell\ge0$ a square-integrable level approximation $P_\ell$, and for every $\ell\ge1$ a fixed coupling of the laws of $P_\ell$ and $P_{\ell-1}$. Define $\Delta_0=P_0$ and, under each coupling, $\Delta_\ell=P_\ell^{\mathrm f}-P_{\ell-1}^{\mathrm c}$. For each finite $L$, use the first $L+1$ levels and their couplings, with independent sample blocks across levels, as in [[def-mlmc-hierarchy-and-coupled-corrections]]. Suppose there are constants $C_b,C_v,C_c>0$ and exponents $\alpha\ge\frac12$ and $\beta>0$ such that, for every $\ell\ge0$,
$$|\mathbb E P_\ell-\mathbb E P|\le C_b h_\ell^\alpha,\qquad \operatorname{Var}(\Delta_\ell)\le C_v h_\ell^\beta,$$
and the work for one level-$\ell$ correction sample is at most $C_c h_\ell^{-1}$. For every sufficiently small $\epsilon>0$, there are a finite level $L$ and positive integer sample counts $N_0,\ldots,N_L$ for which the estimator of [[def-mlmc-hierarchy-and-coupled-corrections]] satisfies
$$\mathbb E\left[(\widehat\mu_{L,\mathbf N}-\mathbb E P)^2\right]\le\epsilon^2$$
and its total work has the following upper bounds, with constants independent of $\epsilon$:
$$\begin{cases} O(\epsilon^{-2}),&\beta>1,\\ O\!\left(\epsilon^{-2}(\log\epsilon^{-1})^2\right),&\beta=1,\\ O\!\left(\epsilon^{-2-(1-\beta)/\alpha}\right),&0<\beta<1. \end{cases}$$
This is an upper bound under the three rate assumptions; it does not assert a matching lower bound or that the rates hold for a particular discretization.

## Facts & Assumptions

**Given:** The infinite compatible hierarchy and target above, $\alpha\ge\frac12$, $\beta>0$, positive constants $C_b,C_v,C_c$, the bias and correction-variance bounds, and the per-sample work bound. Every finite prefix, with independent level sample blocks, satisfies the definition cited in the Statement.

[F1] [[def-mlmc-hierarchy-and-coupled-corrections]]: the geometric mesh widths are $h_\ell=T M^{-\ell}$.

[F2] [[def-mlmc-hierarchy-and-coupled-corrections]]: the estimator is the sum of level sample means, with independent sample blocks at distinct levels.

[F3] [[lem-mlmc-estimator-moments-and-mse]]: its mean is $\mathbb E P_L$, its variance is $\sum_{\ell=0}^L V_\ell/N_\ell$, and its MSE is that variance plus squared bias.

## Proof

**Given:** The rate hypotheses in the Statement.

1.1 For sufficiently small $\epsilon$, choose $L=\left\lceil\frac{\log(\sqrt2\,C_bT^\alpha/\epsilon)}{\alpha\log M}\right\rceil.$ Then $C_bh_L^\alpha\le\epsilon/\sqrt2$. The ceiling also gives $h_L^{-1}=O(\epsilon^{-1/\alpha})$ and $L+1=O(\log\epsilon^{-1})$. [given, F1, choose, algebra]

2.1 Put $v_\ell=C_vh_\ell^\beta$, $c_\ell=C_ch_\ell^{-1}$, and $S_L=\sum_{\ell=0}^L\sqrt{v_\ell c_\ell}$. Choose $N_\ell=\left\lceil2\epsilon^{-2}S_L\sqrt{\frac{v_\ell}{c_\ell}}\right\rceil,\qquad 0\le\ell\le L.$ Each $N_\ell$ is a positive integer. Since $V_\ell\le v_\ell$ and $N_\ell\ge2\epsilon^{-2}S_L\sqrt{v_\ell/c_\ell}$, [F3] gives $\operatorname{Var}(\widehat\mu_{L,\mathbf N})\le\sum_{\ell=0}^L\frac{v_\ell}{N_\ell} \le\frac{\epsilon^2}{2S_L}\sum_{\ell=0}^L\sqrt{v_\ell c_\ell} =\frac{\epsilon^2}{2}.$ The bias bound from step 1.1 and the MSE identity [F3] imply the required MSE bound. [F2, F3, step 1.1, construct, algebra]

2.2 The ceiling inequality $\lceil x\rceil\le x+1$ and the per-sample work bound imply $\operatorname{Work}\le\sum_{\ell=0}^L N_\ell c_\ell \le2\epsilon^{-2}S_L^2+\sum_{\ell=0}^L c_\ell.$ Because $h_\ell=h_LM^{L-\ell}$, the geometric-series formula gives $\sum_{\ell=0}^L c_\ell=C_c\sum_{\ell=0}^Lh_\ell^{-1} \le\frac{C_c}{1-M^{-1}}h_L^{-1} =O(\epsilon^{-1/\alpha}).$ [F1, given, step 1.1, algebra]

3.1 If $\beta>1$, put $q=(\beta-1)/2>0$. Then $S_L=\sqrt{C_vC_c}\sum_{\ell=0}^Lh_\ell^q \le\frac{\sqrt{C_vC_c}\,T^q}{1-M^{-q}}=O(1).$ The first term in step 2.2 is $O(\epsilon^{-2})$. Its rounding term is also $O(\epsilon^{-2})$, since $1/\alpha\le2$. [given, step 2.2, algebra]

3.2 If $\beta=1$, then $S_L=\sqrt{C_vC_c}(L+1)=O(\log\epsilon^{-1})$ by step 1.1. The first term in step 2.2 is therefore $O(\epsilon^{-2}(\log\epsilon^{-1})^2)$, and its rounding term is no larger for sufficiently small $\epsilon$, again because $1/\alpha\le2$. [given, step 1.1, step 2.2, algebra]

3.3 If $0<\beta<1$, put $q=(1-\beta)/2>0$. Then $S_L=\sqrt{C_vC_c}\sum_{\ell=0}^Lh_\ell^{-q} \le\frac{\sqrt{C_vC_c}}{1-M^{-q}}h_L^{-q}.$ The lower geometric bound from step 1.1 gives $h_L^{-1}=O(\epsilon^{-1/\alpha})$, so $S_L^2=O(\epsilon^{-(1-\beta)/\alpha})$. The first term in step 2.2 is $O(\epsilon^{-2-(1-\beta)/\alpha})$. The rounding term $O(\epsilon^{-1/\alpha})$ is smaller because $1/\alpha\le2<2+(1-\beta)/\alpha$. [given, step 1.1, step 2.2, algebra]

4.1 The estimates in steps 3.1–3.3 cover respectively $\beta>1$, $\beta=1$, and $0<\beta<1$. Each case gives the stated total-work upper bound while step 2.1 gives the same MSE bound. [step 2.1, step 3.1, step 3.2, step 3.3] ∎
