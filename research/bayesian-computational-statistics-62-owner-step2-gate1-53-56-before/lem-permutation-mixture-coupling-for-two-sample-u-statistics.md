---
id: lem-permutation-mixture-coupling-for-two-sample-u-statistics
kind: lemma
title: Mixture coupling for permuted two-sample U-statistics
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-two-sample-order-r-u-statistic-and-first-projections
  - def-identically-distributed-and-iid-random-variables
  - def-independent-random-elements
  - def-probability-measure
  - def-uniform-finite-probability-space
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - def-moments-variance-and-covariance
  - cor-cauchy-schwarz-inequality-for-l-two
  - lem-random-permutation-variance-by-transpositions
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "E. Y. Chung and J. P. Romano, Asymptotically Valid and Exact Permutation Tests Based on Two-Sample U-Statistics, Stanford Technical Report 2011-09, §3.1 and Appendix A, Lemma A.1"
      url: "https://stacks.stanford.edu/file/dp187pj2131/dp187pj2131_2011-09.pdf"
---

## Statement

Use the setup of [[def-two-sample-order-r-u-statistic-and-first-projections]] with fixed $r$, $m+n=N$, and $m/N\to p\in(0,1)$. Assume $h$ is symmetric within each block and antisymmetric under exchange of its two blocks. For every assignment of independent P- and Q-distributed arguments to its $2r$ positions, assume $E h^2<\infty$.

Let $\bar P_N=(m/N)P+(n/N)Q$. Couple an IID row from $\bar P_N$ to the original labelled sample by drawing mixture labels and matching observations until one labelled group is exhausted, then drawing fresh observations for the remaining labels. Reorder the coupled row to agree with the original $P^mQ^n$ ordering except at $D$ unmatched positions. For a uniform permutation $\pi$ independent of this coupling,

$$\sqrt m\,\bigl(U_{m,n}(Z^\pi)-U_{m,n}(\bar Z^{\pi\pi_0})\bigr)\longrightarrow0\quad\text{in }L^2.$$

Neither the weak null nor assignment-wise kernel centering is needed for this coupling bound. No rate for $m/N-p$ is assumed.

## Facts & Assumptions

**Given:** Fixed order, proportional sample sizes, a block-symmetric and block-antisymmetric kernel, all mixed second moments finite, and the exact triangular mixture.

[F1] [[def-two-sample-order-r-u-statistic-and-first-projections]] defines the kernel average $U_{m,n}$ over $M=\binom mr\binom nr$ pairs of subsets.

[F2] [[def-identically-distributed-and-iid-random-variables]] supplies IID observations within each source group.

[F3] [[def-moments-variance-and-covariance]] defines variance and covariance.

[F4] [[cor-cauchy-schwarz-inequality-for-l-two]] bounds expected absolute deviations and yields the triangle inequality for $L^2$ norms.

[F5] [[def-independent-random-elements]] specifies independence of the two source groups, mixture labels, fresh draws and uniform permutation.

[F6] [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]] constructs the finite product of these laws.

[F7] [[def-uniform-finite-probability-space]] gives uniform permutations and finite conditional averaging.

[F8] [[lem-random-permutation-variance-by-transpositions]] bounds a permutation function's variance by half the sum of its successive-revelation averaged squared transposition differences.

[A1] $B=\max_{\eta\in\{P,Q\}^{2r}}E_\eta h^2<\infty$ by the finite family of moment assumptions.

## Proof

**Given:** The hypotheses in the Statement. Prove the $L^2$ coupling bound.

1.1 On the finite product space [F6], draw $N$ independent labels with P-probability $p_N=m/N$. Match each P label to the next unused original X and each Q label to the next unused original Y, using independent fresh draws of the requested law after exhaustion. Conditional on the labels the constructed coordinates are independent with their respective label laws, so their unconditioned row $\bar Z$ is IID $\bar P_N$. Align every shared observation with its original position, putting the fresh observations in the remaining positions; call the resulting array $\widetilde Z=\bar Z^{\pi_0}$. With $B_N$ the number of P labels, its mismatch set $J$ has size $D=|B_N-m|$. Conditional on the labels and alignment, the pairs $(Z_i,\widetilde Z_i)$ are independent across $i$; at a shared position both entries coincide, and at a mismatch the original and fresh entries are independent. [F2, F5, F6, F7, given, construct]

1.2 Since $B_N$ is binomial with parameters $N,p_N$, $EB_N=m$ and $E D^2=Np_N(1-p_N)\le N/4$. Thus $ED\le\sqrt{ED^2}=O(\sqrt N)$ by [F4]. Also $m,n\asymp N$ and $M\asymp N^{2r}$. Constants below depend only on $r$ and bounds keeping $p_N$ away from $0,1$, not on the labels or values. [F1, F3, F4, step 1.1, algebra]

2.1 For any deterministic array $a$ of length $N$, the permutation average of $U_{m,n}(a^\pi)$ is zero: the arguments of a fixed selected kernel term form a uniform ordered distinct $2r$-tuple, and exchanging its two r-blocks preserves that distribution and negates the kernel. Therefore $f(\pi):=U_{m,n}(Z^\pi)-U_{m,n}(\widetilde Z^\pi)$ has permutation mean zero for every realized pair of arrays. This is conditional centering of the full statistic, not centering of each mixed-assignment kernel. [F1, F7, given, algebra]

3.1 Fix two positions $k,l$ and a permutation $\pi$, conditioning on labels and alignment. A selected term in $U(a^\pi)-U(a^{\pi(k,l)})$ vanishes unless its subset pair meets $\{k,l\}$; there are at most $C N^{2r-1}$ such pairs. Each term in $f(\pi)-f(\pi(k,l))$ is a signed sum of four kernel evaluations, each on distinct independent population coordinates and hence with conditional second moment at most $B$ by [A1]. The $L^2$ triangle inequality [F4], followed by division by $M$, bounds the norm of this difference by $C\sqrt B/N$. If neither $\pi(k)$ nor $\pi(l)$ is in $J$, a contribution also vanishes unless its selected positions meet $\pi^{-1}J$ outside $\{k,l\}$. There are at most $CDN^{2r-2}$ such pairs, giving the sharper norm bound $C\sqrt B D/N^2$. Overlap among evaluations causes no independence requirement for this triangle inequality. [A1, F1, F4, step 1.1, step 1.2, algebra]

3.2 Averaging the squared bounds in step 3.1 over uniform $\pi$, the probability that either swapped entry is a mismatch is at most $2D/N$. Thus, for every fixed position transposition, $E_{\pi,\mathrm{values}}[(f(\pi)-f(\pi(k,l)))^2\mid\mathrm{labels}]\le CB(D/N^3+D^2/N^4)$. First apply [F8] for fixed realized arrays, where its expectations and variance are only over $\pi$, and then average over values conditional on labels. Its sum of inner-average coefficients is $N/2$. By step 2.1 the conditional permutation mean is identically zero, so $E_{\pi,\mathrm{values}}[f(\pi)^2\mid\mathrm{labels}]\le CB(D/N^2+D^2/N^3)$. [F7, F8, step 2.1, step 3.1, algebra]

4.1 Averaging step 3.2 over labels and using $m\asymp N$ and step 1.2 yields $E[m f(\pi)^2]\le CB(ED/N+ED^2/N^2)=O(N^{-1/2})\to0$. Since $\widetilde Z^\pi=\bar Z^{\pi\pi_0}$ with the alignment convention in the Statement, this is the required $L^2$ convergence. [step 1.2, step 3.2, algebra] ∎

## Remarks

The 2011 report's Lemma A.1 uses assignment-wise zero means and a fixed-mixture fraction rate. The local proof instead centers the complete statistic by antisymmetry, controls its permutation variance by transpositions, and uses the exact triangular mixture. It does not assert those extra hypotheses follow from the weak null.
