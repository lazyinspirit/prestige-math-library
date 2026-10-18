---
id: thm-it-cover-el-gamal-salehi-correlated-source-mac-sufficient-condition
kind: theorem
title: Cover-El Gamal-Salehi sufficient condition for correlated sources over a DM-MAC
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps: [def-it-finite-conditional-entropy, def-it-finite-conditional-mutual-information, def-it-finite-mutual-information, def-it-two-correlated-iid-sources-over-dm-mac-code, def-it-two-user-discrete-memoryless-mac, lem-it-cover-elgamal-salehi-conditional-packing, thm-it-finite-conditional-mutual-information-identities-and-equality]
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; the source alphabets and every source-indexed random codebook are finite at each blocklength.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Abbas El Gamal and Thomas M. Cover, Multiple User Information Theory, Proceedings of the IEEE 68 (1980), §VII
      url: https://isl.stanford.edu/~cover/papers/paper51.pdf
    - title: Abbas El Gamal and Young-Han Kim, Network Information Theory, Lecture Notes 15, Joint Source–Channel Coding
      url: https://arxiv.org/pdf/1001.3404v3
---

## Statement

Let $(S_1,S_2)$ be finite and let its IID copies be transmitted losslessly over the DM-MAC of [[def-it-two-user-discrete-memoryless-mac]] using the separate encoders of [[def-it-two-correlated-iid-sources-over-dm-mac-code]]. If there is a finite $Q$ independent of $(S_1,S_2)$ and a law
$$P_QP_{S_1S_2}P_{X_1|S_1,Q}P_{X_2|S_2,Q}W_{Y|X_1X_2}$$
such that
$$\begin{aligned} H(S_1\mid S_2)&<I(X_1;Y\mid X_2,S_2,Q),\\ H(S_2\mid S_1)&<I(X_2;Y\mid X_1,S_1,Q),\\ H(S_1,S_2)&<I(X_1,X_2;Y\mid Q), \end{aligned}$$
then the two correlated IID sources can be transmitted with vanishing average joint error. This is a sufficient condition only; it is not a general capacity characterization for correlated sources over a DM-MAC.

## Facts & Assumptions

**Given:** Finite source and channel alphabets, IID source pair $(S_1,S_2)$, a memoryless DM-MAC, and a finite law of the displayed product-kernel form.

[F1] [[def-it-two-correlated-iid-sources-over-dm-mac-code]]: each encoder observes its own source block only, the common decoder reconstructs both blocks, and reliability means average joint error tends to zero.

[F2] [[def-it-two-user-discrete-memoryless-mac]]: conditional on both input words, the output law is the product of the kernel $W(y\mid x_1,x_2)$.

[F3] [[lem-it-cover-elgamal-salehi-conditional-packing]]: for the source-indexed conditional codebooks, the expected wrong single-source and wrong source-pair typical candidates vanish under the three strict conditional-entropy/mutual-information inequalities.

[F4] [[def-it-finite-conditional-entropy]]: conditional entropy is the finite average of the conditional entropies over positive-mass conditioning values.

[F5] [[def-it-finite-mutual-information]]: finite mutual information is the joint-to-product KL sum in nats.

[F6] [[def-it-finite-conditional-mutual-information]]: finite conditional mutual information averages the conditional informations over positive-mass conditioning values.

[F7] [[thm-it-finite-conditional-mutual-information-identities-and-equality]]: conditional mutual information is the corresponding conditional entropy difference for finite variables.

## Proof

1.1 Fix a law and a rate-independent public schedule $q^n$ whose empirical distribution tends to $P_Q$; choose symbol counts by rounding $nP_Q(q)$ and distributing the bounded remainder. For every $s_1^n$, independently draw a codeword with law $\prod_iP_{X_1|S_1,Q}(\cdot\mid s_{1i},q_i)$, and for every $s_2^n$ independently draw a codeword with law $\prod_iP_{X_2|S_2,Q}(\cdot\mid s_{2i},q_i)$. The two codebooks and all their indexed entries are independent. [given, F1, choose, construct]

2.1 Encoder $j$ observing $s_j^n$ sends the codeword indexed by that exact source sequence. The decoder declares the unique pair $(\hat s_1^n,\hat s_2^n)$ for which $(q^n,\hat s_1^n,\hat s_2^n,x_1^n(\hat s_1^n),x_2^n(\hat s_2^n),y^n)$ is jointly strongly typical for the displayed law; if there is no unique pair it declares an error. These maps have the interfaces in [F1] and the output law in [F2]. [F1, F2, step 1.1, construct]

2.2 Conditional on $q^n$, the random tuples $(S_{1i},S_{2i},X_{1i}(S_1^n),X_{2i}(S_2^n),Y_i)$ are independent across $i$ in the codebook ensemble. For each fixed joint letter, the empirical frequency has variance at most $1/(4n)$ and mean equal to the $q^n$-type average of its conditional probability. That mean tends to the target probability because the type of $q^n$ tends to $P_Q$. Chebyshev's inequality and a union bound over the finite alphabet show that the true tuple is support-restricted jointly typical with probability tending to one; target-zero letters never occur because every source, encoder and channel kernel is used only on its support. [F1, F2, step 1.1, algebra]

3.1 On the event that the true tuple is typical, a decoding error can occur only if some wrong candidate differs in source 1 alone, source 2 alone, or both. The strict hypotheses are finite conditional-entropy and mutual-information inequalities by [F4]–[F7]; they let us choose the typicality tolerance so that each exponent in [F3] is positive. Therefore the conditional expected number of wrong typical candidates tends to zero; Markov's inequality makes the probability of any such candidate tend to zero. Combining with step 2.2 proves that the ensemble-average source-block error tends to zero. [F3, F4, F5, F6, F7, step 2.2, algebra, algebra]

4.1 At each $n$ the alphabets and source-indexed codebooks are finite, so the random ensemble has finite support. At least one deterministic codebook realization has error no larger than the ensemble mean. Fixing such realizations along increasing blocklengths gives the deterministic reliable codes required by [F1]. Taking the closure of the strict region completes the sufficient-condition proof; no converse or necessity claim is made. [F1, step 3.1, choose] ∎

