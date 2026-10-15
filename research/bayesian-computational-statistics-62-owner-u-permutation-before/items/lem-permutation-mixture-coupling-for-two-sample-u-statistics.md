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
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "E. Y. Chung and J. P. Romano, Asymptotically Valid and Exact Permutation Tests Based on Two-Sample U-Statistics, Stanford Technical Report 2011-09, §3.1 and Appendix A, Lemma A.1"
      url: "https://stacks.stanford.edu/file/dp187pj2131/dp187pj2131_2011-09.pdf"
---

## Statement

Use the setup of [[def-two-sample-order-r-u-statistic-and-first-projections]]
with fixed $r$, $m+n=N$, $m/N\to p\in(0,1)$, and weak null
$\theta(P,Q;h)=0$. For every assignment of $P$- and $Q$-distributed
independent arguments to the $2r$ kernel positions, assume both

$$E h=0\quad\text{and}\quad E h^2<\infty.$$

Let $\bar P_N=(m/N)P+(n/N)Q$. Couple an IID row from $\bar P_N$ to the
original labelled sample by drawing mixture labels and matching observations
until one labelled group is exhausted, then drawing fresh observations for the
remaining labels. Reorder the coupled row to agree with the original $P^mQ^n$
ordering except at its $D$ unmatched positions. For a uniform permutation $\pi$
independent of this coupling,

$$\sqrt m\,\bigl(U_{m,n}(Z^\pi)-U_{m,n}(\bar Z^{\pi\pi_0})\bigr)\longrightarrow0\quad\text{in }L^2.$$

The all-assignment mean-zero condition is explicit; it does not follow from
$\theta(P,Q;h)=0$ and block antisymmetry alone.

## Facts & Assumptions

**Given:** A fixed-order two-sample U-statistic, $m/N\to p\in(0,1)$, an IID mixture row with exact weight $m/N$, the stated coupling, and zero finite means and finite second moments under every mixed argument assignment.

[F1] [[def-two-sample-order-r-u-statistic-and-first-projections]]: $U_{m,n}$ averages $h$ over all unordered $r$-subsets in each group.

[F2] [[def-identically-distributed-and-iid-random-variables]]: the original observations are IID within each source group.

[F3] [[def-moments-variance-and-covariance]]: covariance is the expectation of the centered product.

[F4] [[cor-cauchy-schwarz-inequality-for-l-two]] bounds the coupling terms' covariance by their second moments.

[F5] [[def-independent-random-elements]]: the original groups, mixture labels, fresh replacement draws, and permutation are chosen independently as specified.

[F6] [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]: the finite product of the probability laws used in the construction exists.

[F7] [[def-uniform-finite-probability-space]]: a uniform permutation assigns equal probability to each element of the finite symmetric group.

[A1] For each of the finitely many P/Q assignment patterns to the kernel positions, the corresponding expectation of $h$ is zero.

[A2] The largest second moment $B$ over those finitely many assignment patterns is finite.

## Proof

**Given:** $r$ is fixed, $m/N\to p\in(0,1)$, [A1]–[A2] hold, and the mixture weight is $p_N=m/N$. Prove the displayed $L^2$ coupling bound.

1.1 By [F6], realize the original independent samples, $N$ independent mixture labels, and enough independent fresh replacement draws on a finite product probability space; [F2, F5] give their stated laws and independence. Each label is P with probability $p_N$; match each P label to the next unused original $X_i$ and each Q label to the next unused $Y_j$. If a labelled group is exhausted, fill the remaining labels with fresh observations from that law. Conditional on the label vector, every assigned value has its label's law and all assigned values are independent, so the constructed row $\bar Z$ is IID $\bar P_N$. Reordering to align shared observations with $Z=(X_1,\ldots,X_m,Y_1,\ldots,Y_n)$ leaves exactly $D=|B_N-m|$ mismatches. The independent uniform permutation exists on the finite uniform space [F7]. [F2, F5, F6, F7, given, construct]

2.1 Since $B_N\sim\operatorname{Bin}(N,p_N)$ and $E B_N=m$, [F4] gives $E D\le\sqrt{E(B_N-m)^2}=\sqrt{Np_N(1-p_N)}=O(\sqrt N).$ Because $p\in(0,1)$, $m,n\asymp N$. [F3, F4, step 1.1, algebra]

2.2 Condition on the mixture labels and the aligning permutation $\pi_0$. For a uniform $\pi$, expand the difference of the two U-statistics as the normalized sum of terms $\Delta_{I,J}=h(Z^\pi_I;Z^\pi_J)-h(\bar Z^{\pi\pi_0}_I;\bar Z^{\pi\pi_0}_J),$ over the $M=\binom mr\binom nr$ pairs of within-group index subsets. A term vanishes unless its $2r$ positions include one of the $D$ mismatches. For every affected term, each of its two kernel evaluations has mean zero by [A1], so $E\Delta_{I,J}=0$; also $E\Delta_{I,J}^2\le4B$ by $(a-b)^2\le2a^2+2b^2$. [A1, A2, F1, step 1.1, algebra]

3.1 Each fixed population position occurs in at most $C_rN^{2r-1}$ index-subset pairs, so at most $C_rDN^{2r-1}$ terms are affected. Each fixed term overlaps at most $C_rN^{2r-1}$ other terms. Disjoint position sets involve disjoint independent source observations by the coupling construction, so their centered terms have zero covariance. Every remaining covariance has absolute value at most $4B$ by [F3, F4]. Thus the number and size of nonzero covariance terms give $\operatorname{Var}\!\left(\sum_{I,J}\Delta_{I,J}\right)\le C_r B D N^{4r-2},$ where $C_r$ depends only on fixed $r$. [A1, A2, F2, F3, F4, step 2.2, algebra]

4.1 Since $M\asymp N^{2r}$ and $m\asymp N$, steps 2.1 and 3.1 yield $E\left[m\left\{U_{m,n}(Z^\pi)-U_{m,n}(\bar Z^{\pi\pi_0})\right\}^2\right]\le C_r B\,\frac{E D}{N}=O(N^{-1/2})\longrightarrow0.$ This is the claimed $L^2$ convergence. The bound uses only fixed order, assignment-wise second moments, and assignment-wise centering. [step 2.1, step 3.1, algebra] ∎
