# B55 focused proof review, cycle 1

Accepted on focused mathematical review: `thm-studentized-wilcoxon-validity-under-heterogeneous-laws` and `alg-studentized-two-sample-u-permutation-test`. No actual defect found.

I read the current CLAUDE.md fully, both assigned bodies, and their actually consumed interfaces: the general studentized U-statistic permutation theorem, studentized-statistic and order-r U-statistic definitions, equal-distribution exactness corollary, and finite-group permutation-validity theorem. This is not a broad audit of those suppliers or their dependency closure.

The theorem verifies the general supplier's full hypotheses, including positivity of every mixed kernel second moment and the limiting pooled projection variance. Its sampling variance argument correctly controls the empirical row and column projection errors in average squared norm; shared observations across rows do not require independence for that expectation bound. Bounded IID projection averages then establish the two sampling consistency assertions.

The deterministic finite-population calculation is valid uniformly over pooled lists: conditional row means approach d_i, column means approach -d_i, and the finite-population sample averages of these lists and their squares approach their pooled values. This proves both empirical projection variance estimates approach A_N in conditional permutation probability. The bounded ordered-triple calculation correctly compares EA_N with the triangular-mixture projection variance: repeated-index terms contribute O(1/N), and only O(N^5) of the N^6 pairs can have nonzero covariance. Chebyshev therefore establishes A_N minus the deterministic mixture variance tending to zero in original-sampling probability. These two steps prove the direct joint-estimator permutation condition actually required by the general theorem.

The rank conclusion also follows: the transformed sampling and conditional permutation CDFs converge to the same continuous normal or absolute-normal CDF; maximal permutation atoms vanish, so inclusive and randomized p-values approach the continuous upper-tail transform of the observed statistic. This yields asymptotic rejection probability alpha for all three alternatives. Under equal laws, the finite-group interface supplies exact finite-sample randomized uniformity and inclusive superuniformity, including degenerate denominators and tied observations.

The algorithm enumerates the full permutation group with multiplicities, recomputes both supplied variance routines, uses the common zero-denominator convention, and states the correct inclusive and randomized rank formulas. Its scope correctly reserves weak-null validity for an applicable consistency theorem; no generic weak-null claim is inferred from the procedure alone.

No source edits, tests, gates, hashes, or metadata updates were performed. This report records focused mathematical acceptance only.
