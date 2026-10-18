---
id: thm-real-gaussian-interference-channel-within-one-bit
kind: theorem
title: The two-user Gaussian interference capacity region to within one bit
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 8
deps: [def-axiom-of-choice, def-real-two-user-gaussian-interference-channel, thm-real-gaussian-strong-interference-capacity-region, lem-real-gaussian-han-kobayashi-inner-region, lem-real-gaussian-interference-genie-outer-region]
aliases: []
proof_strategy: regimewise-inner-outer-comparison
axiom_use: AC is inherited through the Gaussian input and differential-entropy suppliers.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: Raul H. Etkin, David N. C. Tse, and Hua Wang, Gaussian Interference Channel Capacity to Within One Bit, IEEE Transactions on Information Theory 54(12), 2008
      url: https://arxiv.org/pdf/cs/0702045
      locator: §4, Theorems 5–6 and regimewise comparison, PDF pp. 30–37.
    - title: Abbas El Gamal and Young-Han Kim, Lecture Notes on Network Information Theory, arXiv:1001.3404v4
      url: https://arxiv.org/pdf/1001.3404v4
      locator: Chapter 6, Gaussian Han-Kobayashi inner and genie outer bounds, printed pp. 119–129.
---

## Statement

For the complex Gaussian interference channel of [[def-real-two-user-gaussian-interference-channel]], the Etkin–Tse–Wang Han–Kobayashi scheme is within one bit per user of capacity, in the coordinatewise sense that for every capacity pair $(R_1,R_2)$ there is an achievable pair $(R'_1,R'_2)$ with $R'_i\ge\max\{0,R_i-1\}$. The scheme uses Gaussian common/private splits; in the weak regime each private signal is chosen so its received power at the unintended receiver is $\min\{1,\mathrm{INR}\}$, in the mixed regime the user causing strong interference uses only a common message and the other private signal is at noise level, and in the strong regime both messages may be decoded at both receivers using the exact region of [F1].

## Facts & Assumptions

**Given:** A complex Gaussian interference channel with positive finite powers and the SNR/INR convention of [F2].

[A1] [[def-axiom-of-choice]]: AC is inherited through Gaussian inputs and differential entropy.

[F1] [[thm-real-gaussian-strong-interference-capacity-region]]: in the strong regime, both receivers can decode both messages and the exact MAC-intersection capacity region is known.

[F2] [[def-real-two-user-gaussian-interference-channel]]: $\mathrm{INR}_1$ is user 2's received interference power at receiver 1 and $\mathrm{INR}_2$ is user 1's received interference power at receiver 2.

[F3] [[lem-real-gaussian-han-kobayashi-inner-region]]: any stated common/private Gaussian split is achievable when both receivers' subset decoding inequalities hold.

[F4] [[lem-real-gaussian-interference-genie-outer-region]]: weak- and mixed-regime capacity pairs obey the respective individual, sum, and weighted-sum outer inequalities displayed there.

## Proof

1.1 Partition the parameter space into weak, mixed, and strong regimes using the comparisons $\mathrm{INR}_1$ with $\mathrm{SNR}_2$ and $\mathrm{INR}_2$ with $\mathrm{SNR}_1$. The Gaussian laws and densities used in these models follow the AC convention in [A1]. In the strong regime [F1] gives the exact region, so the claimed one-bit approximation follows with zero loss. [A1, F1, F2, given]

1.2 In the weak regime the source proof compares the five boundary types of the Han–Kobayashi inner region with the six inequalities in [F4]; in the mixed regime it compares the chosen one-common-message split with the five inequalities in [F4]. To establish the one-bit conclusion, these comparisons must verify individual gaps below $1$, sum-rate gaps below $2$, and weighted-sum gaps below $3$ for $2R_1+R_2$ and $R_1+2R_2$. Those parameter-wise algebraic comparisons have not been completed locally. [F2, F3, F4, step 1.1]

## Unresolved proof obligation

Complete the weak and mixed regime comparison tables, including the subcases where either INR is below one and each active Han–Kobayashi facet changes. Verify every stated gap inequality from the displayed inner and outer bounds. The ETW proof contains this case analysis, but this draft does not reproduce it; the theorem is not ready for acceptance.
