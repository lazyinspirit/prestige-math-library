---
id: thm-it-berger-tung-finite-multiterminal-inner-bound
kind: theorem
title: "Finite-alphabet Berger-Tung multiterminal lossy inner bound"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps:
  - def-it-finite-conditional-entropy
  - def-it-finite-conditional-mutual-information
  - def-it-finite-iid-multisource
  - def-it-finite-multiterminal-lossy-code
  - def-it-finite-mutual-information
  - def-it-finite-strongly-typical-set
  - def-it-jointly-typical-multisource-blocks
  - lem-it-finite-codebook-covering-selection-law
  - lem-it-finite-random-bin-packing-bound
  - lem-it-finite-selected-codeword-markov-typicality
  - lem-it-finite-type-class-cardinality-bounds
  - lem-it-multisource-typicality-probability
  - thm-it-finite-conditional-mutual-information-identities-and-equality
  - thm-it-finite-entropy-chain-rule
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; random codebooks and bins form finite ensembles, and a deterministic code is selected from a finite list."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Abbas El Gamal and Young-Han Kim, Network Information Theory, author lecture notes"
      url: "https://arxiv.org/pdf/1001.3404v3"
      locator: "Lecture 13, Berger-Tung inner bound and complete covering-Markov-packing proof, pp. 3–13 and Appendix, pp. 44–50."
    - title: "João Barros, Reachback Communication in Wireless Sensor Networks, doctoral dissertation"
      url: "https://mediatum.ub.tum.de/doc/601579/601579.pdf"
      locator: "Chapter 4, §4.2.1, printed pp. 66–72, independent vector-quantize and Slepian-Wolf proof."
---

## Statement

Fix a finite IID $k$-source with $k\ge2$, per-terminal finite reproduction alphabets, and bounded distortions $d_i$ as in [[def-it-finite-multiterminal-lossy-code]]. Choose finite auxiliary alphabets $\mathcal U_i$, product test channels
$$P_{X_1\cdots X_kU_1\cdots U_k}=P_{X_1\cdots X_k}\prod_{i=1}^kP_{U_i|X_i},$$
and deterministic reconstruction maps $g_i:\prod_{j=1}^k\mathcal U_j\to\widehat{\mathcal X}_i$ whose expected distortions are at most $D_i$. For each nonempty $S\subseteq[k]$, write $X_S=(X_i)_{i\in S}$, $U_S=(U_i)_{i\in S}$, and $S^c=[k]\setminus S$; when $S=[k]$, $U_{S^c}$ is a constant singleton. Then every nonnegative rate vector satisfying
$$\sum_{i\in S}R_i\ge I(X_S;U_S|U_{S^c})\qquad\text{for every nonempty }S\subseteq[k]$$
is achievable at distortions $(D_1,\ldots,D_k)$. The convex hull of the union of these finite-auxiliary rate regions, over all such product test channels and reconstruction maps, is the finite-alphabet Berger-Tung inner bound and is achievable. This theorem does not assert that the inner bound is the exact general multiterminal lossy rate region.

## Facts & Assumptions

**Given:** A finite IID $k$-source, a finite product test channel, finite reconstruction maps, bounded per-terminal distortions, and rates satisfying the displayed subset inequalities.

[F1] [[def-it-finite-multiterminal-lossy-code]]: encoders observe only their own source blocks, the common decoder receives all indices, and each distortion is an expected normalized additive distortion.

[F2] [[def-it-finite-iid-multisource]]: the vector source block law is $P_{X_1\cdots X_k}^{\otimes n}$.

[F3] [[def-it-jointly-typical-multisource-blocks]] and [[lem-it-multisource-typicality-probability]]: with probability tending to one, the empirical type of the source block is within any fixed positive tolerance of its finite joint law and excludes zero-probability letters.

[F4] [[def-it-finite-mutual-information]]: finite mutual information is joint-law KL, equivalently $I(X_i;U_i)=H(U_i)-H(U_i|X_i)$ by the finite entropy chain rule.

[F5] [[def-it-finite-conditional-mutual-information]]: $I(X_S;U_S|U_{S^c})$ is the finite conditional-product KL.

[F6] [[thm-it-finite-conditional-mutual-information-identities-and-equality]]: $I(A;B|C)=H(B|C)-H(B|A,C)$ for finite variables.

[F7] [[thm-it-finite-entropy-chain-rule]]: finite entropy chain rules hold and all quantities are finite.

[F8] [[lem-it-finite-codebook-covering-selection-law]]: encoder $i$'s marginal codebook at rate above $I(X_i;U_i)$ contains a codeword conditionally typical with $X_i^n$ with probability tending to one.

[F9] [[lem-it-finite-selected-codeword-markov-typicality]]: conditional on successful separate selections, sequentially adjoining auxiliaries through their product test channels preserves joint typicality.

[F10] [[lem-it-finite-random-bin-packing-bound]]: for mutually independent marginal codebooks generated independently of the source, and bin labels independent of both, the expected number of false jointly typical tuples on the event that the true tuple is typical vanishes when every changed-subset codebook-to-bin ratio is below its conditional-entropy exponent.

## Proof

1.1 First fix one product test channel and reconstruction tuple. For each encoder $i$, choose $\widetilde R_i=I(X_i;U_i)+\alpha/4$ with $\alpha>0$, generate $M_i=\lceil e^{n\widetilde R_i}\rceil$ independent $P_{U_i}^{\otimes n}$ codewords, and let encoder $i$ select the first codeword jointly typical with $X_i^n$. It sends the selected index's bin, where each codeword is assigned independently and uniformly to $B_i=\lceil e^{n(R_i+\alpha)}\rceil$ bins. If no typical codeword exists, it selects index 1. [F1, F2, F8, construct]

1.2 By [F3], the full source block is in its supplier's typical set with probability tending to one. Choose its absolute empirical tolerance no larger than $\delta\min_{x^k:P(x^k)>0}P(x^k)$; then its empirical law belongs to the relative typical set of [F1], and the block has the required support. Conditional on such a source block, each covering failure probability tends to zero by [F8]. Choose nested input tolerances for the finitely many successive applications of [F9], working backward from a final tolerance small enough for both [F10] and the distortion bound; the source typicality and each earlier Markov-typicality event then meet the next application's input tolerance. Given successful selections, adjoin $U_1^n,\ldots,U_k^n$ one at a time. At stage $i$, take $X_i$ as the first variable and the tuple of all other source variables and previously adjoined auxiliaries as the second. The product factorization makes $U_i-X_i-\text{(that tuple)}$ a Markov chain, and the independently generated $i$th codebook selection satisfies [F9]. Induction over the finite $k$ therefore shows that the selected full tuple $(X_1^n,\ldots,X_k^n,U_1^n,\ldots,U_k^n)$ is jointly typical with probability tending to one. [F1, F2, F3, F8, F9, F10, given, construct]

2.1 The decoder searches for a unique tuple of codewords in the received bins whose auxiliary sequences are jointly typical according to $P_{U_1\cdots U_k}$. The true tuple passes by step 1.2. For a nonempty subset $S$ of encoders whose candidate indices differ from the true indices, [F10] makes the expected number of false tuples on the typical-true-tuple event vanish if $\sum_{i\in S}(\widetilde R_i-R_i-\alpha)<\sum_{i\in S}H(U_i)-H(U_S|U_{S^c})-\eta$ for some $\eta>0$. The product test channel and [F6]–[F7] give $I(X_S;U_S|U_{S^c})=H(U_S|U_{S^c})-\sum_{i\in S}H(U_i|X_i),$ because $U_S$ is conditionally independent of $U_{S^c}$ given $X_S$ and the $U_i$ are conditionally independent given their source symbols. Consequently, $\sum_{i\in S}I(X_i;U_i)-I(X_S;U_S|U_{S^c})=\sum_{i\in S}H(U_i)-H(U_S|U_{S^c}).$ The ceiling inequalities $M_i\le2e^{n\widetilde R_i}$ and $B_i\ge e^{n(R_i+\alpha)}$ give $n^{-1}\ln(M_i/B_i)\le I(X_i;U_i)-R_i-3\alpha/4+n^{-1}\ln2$. For all sufficiently large $n$, this is at most $I(X_i;U_i)-R_i-\alpha/2$. The assumed subset inequality and the preceding entropy identity then leave at least $|S|\alpha/2$ of margin for every nonempty $S$; taking the packing slack $\eta=\alpha/3$ makes the strict hypothesis of [F10] hold for every subset. [F4, F5, F6, F7, F10, step 1.2, algebra]

3.1 On the event that the source and selected auxiliary tuple are jointly typical and the decoder has no false tuple, decoding succeeds and the relative empirical-frequency bounds give $\sum_a|\widehat P(a)-P(a)|\le\delta\sum_{a:P(a)>0}P(a)=\delta$; hence every empirical distortion differs from its test-channel expectation by at most $d_{i,\max}\delta$. The complement event has ensemble probability tending to zero by steps 1.2–1.3 and [F10]. For each fixed codebook and bin realization, let $p_n$ be the source probability of this complement event. Its ensemble average tends to zero, so there is a deterministic realization with $p_n$ no larger than that average; choose the first such realization in a fixed finite listing. For that one code, simultaneously for every $i$, expected distortion is at most $D_i+d_{i,\max}\delta+d_{i,\max}p_n$. Let $\alpha,\delta\downarrow0$ along increasing blocklengths to attain the closed subset inequalities. [F1, step 1.2, step 2.1, F10, choose, algebra]

4.1 A finite convex combination of fixed-test-channel rate-distortion operating points is achieved by splitting a long block into subblocks with integer lengths whose proportions converge to the combination weights, applying the corresponding code on each subblock, and concatenating their reconstructions and message indices. The rounding discrepancy in every rate and expected distortion is $O(1/n)$ because there are finitely many modes and all distortions are bounded. Hence the convex hull of the union of the fixed-test-channel inner regions is achievable. No step identifies this inner bound with the full region. [F1, step 3.1, construct, algebra] ∎

