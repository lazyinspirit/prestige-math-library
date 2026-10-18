---
id: lem-it-cover-elgamal-salehi-conditional-packing
kind: lemma
title: Conditional type packing bounds for source-indexed DM-MAC codebooks
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps: [def-it-finite-strongly-typical-set, lem-it-finite-type-class-cardinality-bounds, def-it-finite-conditional-entropy, def-it-finite-mutual-information, def-it-finite-conditional-mutual-information, thm-it-finite-entropy-chain-rule, thm-it-finite-conditional-mutual-information-identities-and-equality, def-it-two-user-discrete-memoryless-mac]
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; all alphabets, empirical types and source-indexed codebooks are finite at each blocklength.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Abbas El Gamal and Young-Han Kim, Network Information Theory, Lecture Notes 15, transmission of correlated sources over a DM-MAC
      url: https://arxiv.org/pdf/1001.3404v3
    - title: Abbas El Gamal and Thomas M. Cover, Multiple User Information Theory, Proceedings of the IEEE 68 (1980), §VII
      url: https://isl.stanford.edu/~cover/papers/paper51.pdf
---

## Statement

Let $Q,S_1,S_2,X_1,X_2,Y$ have the finite law
$$P_QP_{S_1S_2}P_{X_1|S_1Q}P_{X_2|S_2Q}W_{Y|X_1X_2}.$$
Fix a deterministic $q^n$ and a transmitted tuple $(s_1^n,s_2^n,x_1^n,x_2^n,y^n)$ such that $(q^n,s_1^n,s_2^n,x_1^n,x_2^n,y^n)$ is support-restricted strongly typical for this law within tolerance $\delta$. For every source sequence $s_j^n$, independently generate a user-$j$ codeword with law $\prod_iP_{X_j|S_jQ}(\cdot\mid s_{ji},q_i)$; all entries and both users' codebooks are independent. A decoder tests joint typicality at tolerance $\delta$.

There is a finite constant $K$ and a function $\omega(\delta)\downarrow0$ such that the conditional expected numbers $N_1,N_2,N_{12}$ of wrong typical candidates differing in source 1 only, source 2 only, and both sources, respectively, satisfy
$$\begin{aligned} \mathbb E N_1&\le(n+1)^K e^{-n[I(X_1;Y|X_2,S_2,Q)-H(S_1|S_2)-\omega(\delta)]},\\ \mathbb E N_2&\le(n+1)^K e^{-n[I(X_2;Y|X_1,S_1,Q)-H(S_2|S_1)-\omega(\delta)]},\\ \mathbb E N_{12}&\le(n+1)^K e^{-n[I(X_1,X_2;Y|Q)-H(S_1,S_2)-\omega(\delta)]}. \end{aligned}$$
The expectations are over the unexposed wrong source-indexed codebook entries. The constants depend only on the target law and alphabets, not on the particular typical transmitted tuple.

## Facts & Assumptions

**Given:** The stated finite law, source-indexed conditional codebooks, a typical transmitted tuple, and a finite DM-MAC.

[F1] [[def-it-finite-strongly-typical-set]]: support-restricted strong typicality bounds every positive empirical atom relative to its target probability and excludes zero-probability atoms.

[F2] [[lem-it-finite-type-class-cardinality-bounds]]: an empirical type class on an alphabet of size $m$ has at most $e^{nH(\widehat P)}$ elements, and at most $(n+1)^m$ types occur.

[F3] [[def-it-finite-conditional-entropy]]: conditional entropy is a finite weighted sum over positive-mass conditioning atoms.

[F4] [[thm-it-finite-entropy-chain-rule]]: finite conditional entropy obeys the chain rule.

[F5] [[thm-it-finite-conditional-mutual-information-identities-and-equality]]: finite conditional mutual information is nonnegative and equals the corresponding conditional entropy difference.

[F6] [[def-it-two-user-discrete-memoryless-mac]]: given the two inputs, the channel output law is $W(y\mid x_1,x_2)$.

[F7] [[def-it-finite-mutual-information]]: finite mutual information is defined by the joint-to-product KL sum in nats.

[F8] [[def-it-finite-conditional-mutual-information]]: finite conditional mutual information averages the conditional mutual information over positive-mass conditioning values.

## Proof

1.1 For a fixed conditioning block, group candidate tuples by their joint empirical type with that block. If the wrong set is $S=\{1\}$, the varying letters are $(S_1,X_1)$ and the fixed block is $(Q,S_2,X_2,Y)$; for $S=\{2\}$ interchange indices. The number of joint types is at most $(n+1)^K$ by [F2]. For any one type, splitting its positions according to the fixed conditioning letters gives a product of conditional type classes, each of size at most the exponential of its empirical conditional entropy by [F2]. Thus the candidate count is at most $(n+1)^K\exp[nH_{\widehat P}(S_S,X_S\mid Q,S_{S^c},X_{S^c},Y)]$. [F1, F2, construct]

2.1 For each such candidate, its codeword probability is the product of the conditional kernels $P_{X_j|S_jQ}$. On a support-restricted $\delta$-typical type, its negative log probability divided by $n$ differs from $\sum_{j\in S}H(X_j\mid S_j,Q)$ by at most $\omega_1(\delta)$: write the logarithm as the finite sum of empirical frequencies times $-\ln P_{X_j|S_jQ}(x_j|s_j,q)$; the summands are bounded on the finite positive support, and [F1] controls every frequency. Also $H_{\widehat P}(S_S,X_S\mid Q,S_{S^c},X_{S^c},Y)$ differs from the target conditional entropy by at most $\omega_2(\delta)$, because finite-alphabet entropy is continuous, including at zero via $-t\ln t\to0$. Multiplying the count from step 1.1 by the largest candidate probability gives exponent at most $$H_P(S_S,X_S\mid Q,S_{S^c},X_{S^c},Y)-\sum_{j\in S}H(X_j\mid S_j,Q)+\omega(\delta).$$ [F1, F2, F3, step 1.1, algebra]

3.1 For $S=\{1\}$, expand the conditional entropy in step 2.1 by [F4]. Since $X_2$ is conditionally independent of $S_1$ given $(S_2,Q)$, and $X_1$ is conditionally independent of $(S_2,X_2)$ given $(S_1,Q)$, the factorization in the Given law gives $$H(S_1,X_1\mid Q,S_2,X_2,Y)-H(X_1\mid S_1,Q)=H(S_1\mid S_2)-I(S_1,X_1;Y\mid X_2,S_2,Q).$$ The channel factorization [F6] implies $I(S_1;Y\mid X_1,X_2,S_2,Q)=0$, so the last mutual information is $I(X_1;Y\mid X_2,S_2,Q)$. Combining with step 2.1 proves the $N_1$ bound. Exchanging indices proves the $N_2$ bound. [F4, F5, F6, F7, F8, step 2.1, algebra]

4.1 For $S=\{1,2\}$, the same conditional entropy expansion gives $$H(S_1,S_2,X_1,X_2\mid Q,Y)-H(X_1\mid S_1,Q)-H(X_2\mid S_2,Q)=H(S_1,S_2)-I(X_1,X_2;Y\mid Q),$$ because $Q$ is independent of the source pair, the two codebook kernels factor given $(S_1,S_2,Q)$, and the channel depends on the source only through $(X_1,X_2)$. Substitution in step 2.1 proves the $N_{12}$ bound. [F4, F5, F6, F7, F8, step 2.1, algebra] ∎

