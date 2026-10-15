# Focused intake: two-sample U-statistic permutation escalation

Owner repair assignment: batch 55, native run bayesian-computational-statistics-62.
No source/page/manifest/contract/readiness edit authorized until root confirms batch writer drain. This is proposed mathematics, not an acceptance or audit receipt.

Read CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md, controlling plan BCS-52, batch55 notes/coverage/manifest/contracts, actual escalated Step1 record, actual supplier and consumer carriers, and owner crash recovery evidence. The Step1 record is escalated, not ready. The local 2011 full-text extracts were inspected at Section3.1, Theorems3.1–3.2 and AppendixA LemmaA.1/proof. The report explicitly assumes every assignment's kernel mean zero and fixed-mixture fraction rate (9); Theorem3.2 explicitly writes separate-group estimator functions. No 2013 supplementary proof has been read or used. Downloaded Chatterjee's complete 15-page arXiv math/0604352v2 full text for permutation-variance background; its Proposition1.2 concerns linear permutation sums, so it is not asserted to prove the general inequality below.

## Confirmed defects and classification

1. The broad local theorem has no permutation-CLT proof. Weak null does not imply assignment-wise centering: the assigned order2 counterexample is valid. This refutes the old proof route, not the broad permutation CLT. A new elementary coupling argument below removes that premise. This is an established-proof authoring obligation, not an open problem.
2. Exact triangular mixture p_N=m/N removes the fixed-mixture fraction-rate issue. ED <= sqrt(N p_N(1-p_N)); ED²=N p_N(1-p_N). No convergence rate for p_N-p is necessary.
3. The standard-error definition requires S=U/V_SE itself, equivalently sqrt(m) U/V_CR, where V_CR=sqrt(m)V_SE. The plan's extra sqrt(m) S is false; the existing divergence counterexample is sound. Routine plan correction is necessary, not a reason to restrict the true claim.
4. Newly found actual defect: the consistency-transfer supplier handles a statistic of ONE group of size m or n. The definition allows general two-group variance estimates, and the rank example actually uses both groups. Its invocation in the mixed-centering studentized theorem therefore exceeds its hypotheses. Full IID-mixture row laws are not generally contiguous to the original pooled law (the latter fixes component counts). Correct general theorem: assume permutation consistency directly for joint estimators; derive the sufficient separate-group IID-triangular condition via the existing transfer lemma. The finite-support rank example has a direct permutation-consistency proof by convergence of both groups' empirical frequencies.

## Smallest supplier-first repair proposal

Add lem-random-permutation-variance-by-transpositions, a locally proved finite probability estimate; strengthen existing lem-permutation-mixture-coupling-for-two-sample-u-statistics to antisymmetric block-symmetric h with finite all-assignment second moments, removing all-assignment zero means. No weak null is needed for this coupling itself. Keep the original all-centered theorem as a special case and add thm-two-sample-u-statistic-permutation-clt-under-weak-null (same proof route without mixed centering). Prove the escalated broad theorem from this supplier and the corrected estimator premises. Keep both specialized branch items to preserve inventory. Correct stale escalation remarks and page summary; correct the controlling plan's scale and proof-route caveats. Root owns manifest/contract/level/readiness changes; proposed objects will be supplied separately after final source editing.

## Complete coupling argument

Write A and B for coupled aligned arrays, sharing every position outside mismatch set J of size D. Conditional on mixture labels/alignment, the position-pairs are independent, each coordinate has law P or Q, and each kernel evaluation on distinct indices has second moment <= B0=max_assignment E h².

Let f(pi)=U(A^pi)-U(B^pi), for uniform pi. For every deterministic array a, E_pi U(a^pi)=0: a selected ordered 2r-tuple is uniform over distinct population indices, and swapping its two r-blocks preserves that uniform law and negates h. Thus E_pi f=0 for every realized A,B; conditional centering of each individual kernel evaluation is unnecessary.

For a fixed transposition t=(k,l) of observation positions, U(a^pi)-U(a^(pi t)) has contributions only from kernel selections meeting {k,l}. Their number is <=C N^(2r-1), while M=choose(m,r)choose(n,r) >=c N^(2r). If pi(k) or pi(l) belongs to J, Minkowski's inequality gives ||f(pi)-f(pi t)||_2 <=C sqrt(B0)/N conditional on labels,pi. If neither belongs to J, contributions to this difference of differences vanish unless the remaining selected coordinates meet pi^(-1)J; their number is <=C D N^(2r-2), so the bound is C sqrt(B0) D/N². These bounds use only distinct indices within each individual h evaluation; overlap between A and B causes no problem for the triangle inequality. Averaging over pi, with probability <=2D/N of the first case, gives uniformly for k,l

E_values,pi[(f(pi)-f(pi t))² | labels] <= C B0(D/N³+D²/N⁴).

Successive-revelation variance inequality gives Var_pi f <=(1/2) sum_{k=1}^N [1/(N-k+1)] sum_{l=k}^N E_pi[(f(pi)-f(pi(k,l)))²]. Its coefficient sum is N/2. Proof: conditional on first k-1 images, variance of conditional means over possible kth images equals half the mean squared difference of two such means. Couple their uniform completions by swapping position k with the location of the alternate image; Jensen bounds this difference by the corresponding squared difference of f. Orthogonality of finite Doob differences sums the conditional variances. This uses only finite sums, no AC.

Consequently E[f² | labels] <=C B0(D/N²+D²/N³), and m E f² <= C B0(ED/N+ED²/N²)=O(N^-1/2). This proves L² coupling under all-assignment second moments alone. For two independent permutations the same coupling holds simultaneously by a union bound. The IID-mixture conditional CLT and the one-/two-permutation second-moment CDF argument then prove the original conditional CLT. Existing finite-population CLT, triangular Hoeffding remainder, and mixture-projection suppliers suffice; the new variance estimate is the sole missing elementary ingredient.

## Actual consumer inventory from source deps (before edits)

Coupling direct consumers: thm-two-sample-u-statistic-permutation-clt-under-mixed-centering; thm-studentized-two-sample-u-statistic-permutation-validity.

Coupling indirect consumers: thm-studentized-permutation-validity-under-mixed-assignment-centering; ex-same-mean-unequal-variance-studentized-permutation-test; ex-exact-versus-weak-two-sample-null; ex-studentized-rank-u-statistic-under-weak-null; cex-extra-sqrt-m-after-standard-error-studentization-diverges.

Mixed-centering permutation CLT direct consumers: mixed-centering studentized theorem and same-mean unequal-variance example. Broad theorem currently has no logical consumers. Finite-population CLT has the same two direct consumers and seven-item downstream closure as the coupling. Definition changes additionally require inspecting cor-two-sample-permutation-exact-under-equal-distributions and any other actual definition consumers. Nonlogical references/page uses will be enumerated before editing. All current logical consumers are batch55; no cross-batch write conflict has been identified.

## Additional supplier observation

Finite-population CLT proof step6.1 refers to nonexistent steps4.1–3.3. It intends steps4.1 and5.1. Its mathematical subsequence conditioning argument must be checked carefully on repair; max-increment and clock bounds imply conditional probabilities by Markov and subsequence selection. This is a focused supplier correction, not a new corpus audit.

## Final authored repair and verification handoff

Root confirmed native batch55 drained successfully at 2026-10-15T05:19:37.718Z, attempt2, lastExitOk=true; source edits followed that confirmation. Exact pre-edit bytes of every existing edited source/page/controlling-plan file are preserved beneath research/bayesian-computational-statistics-62-owner-u-permutation-before/. The original native notes, coverage, contracts, manifests and readiness were not overwritten.

The proposed variance/coupling proof and full broad conditional CLT have now been authored. The general student theorem has a complete proof with direct joint-estimator permutation consistency and the separate-group sufficient triangular-IID condition. The original centered branch is retained as specializations. All actual direct/indirect consumers were checked; the exactness corollary and extra-sqrt-m counterexample needed no source changes. The three example repairs and exact check-only dispositions are in research/bayesian-computational-statistics-62-owner-u-permutation-proposals.json, along with full contract objects and proposed manifest rows. There are no known cross-batch source consumers.

Additional source reading completed: all 15 pages of Chatterjee, Stein's method for concentration inequalities, arXiv math/0604352v2, downloaded from https://arxiv.org/pdf/math/0604352 and read in full (including Proposition1.2, Theorem1.5 and their complete proofs). Its variance/transposition discussion is background for the new lemma; its linear-permutation-sum bound is not presented as the general successive-revelation estimate. The latter is independently proved in three finite-sum steps. Local temporary PDF/text paths are /tmp/bcs-u-permutation-chatterjee.pdf and /tmp/bcs-u-permutation-chatterjee.txt; root owns any fetch stamp/coverage integration.

Final required proof-layout command after final source edit:

```
node tools/proof-layout.mjs items/lem-random-permutation-variance-by-transpositions.md items/lem-permutation-mixture-coupling-for-two-sample-u-statistics.md items/lem-finite-population-permutation-clt.md items/thm-two-sample-u-statistic-permutation-clt-under-weak-null.md items/thm-two-sample-u-statistic-permutation-clt-under-mixed-centering.md items/thm-studentized-two-sample-u-statistic-permutation-validity.md items/thm-studentized-permutation-validity-under-mixed-assignment-centering.md items/def-studentized-two-sample-u-statistic.md items/ex-studentized-rank-u-statistic-under-weak-null.md items/ex-same-mean-unequal-variance-studentized-permutation-test.md items/ex-exact-versus-weak-two-sample-null.md
```

Actual result: `proof-layout: 11 items, 45 steps, 0 defects`, exit0. No optional test suite, native transition, readiness decision, audit, recertification, publish or push was performed. Root's full mechanical integration and native gates remain outstanding. No new item carries an inherited proof-format pass stamp.
