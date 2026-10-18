---
id: thm-lz78-individual-sequence-finite-state-optimality
kind: theorem
title: "LZ78 finite-state optimality for individual sequences"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - alg-lz78-incremental-prefix-code
  - thm-lz78-prefix-code-lossless
  - def-finite-state-compressibility
  - lem-finite-kl-nonnegative-choice-free
  - lem-finite-kl-nonnegative-choice-free
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; finite-alphabet sums and code constructions are explicit, and cited measure-theoretic results retain their stated hypotheses."
provenance:
  statement: ai-altered
  proof: ai-generated
---
## Statement

For each individual infinite sequence over an alphabet of size at least two, the limsup bit rate of the explicit block-reset LZ78 code is at most its finite-state compressibility.

## Facts & Assumptions

**Given:** A one-sided infinite sequence $x\in\mathcal A^{\mathbb N_0}$ over a finite alphabet of size $q\ge2$, and the block-reset LZ78 code of [[alg-lz78-incremental-prefix-code]].

[F1] [[alg-lz78-incremental-prefix-code]]: ordinary complete incremental phrases are distinct; the terminal phrase contains the unique marker $\#$.

[F2] [[thm-lz78-prefix-code-lossless]]: the explicit code has phrase-index cost $\log_2j+O(\log\log(j+2))$ plus a fixed symbol cost.

[F3] [[def-finite-state-compressibility]]: an information-lossless finite-state encoder injects each finite input word into its output and final state for a fixed initial state.

[F4] [[lem-finite-kl-nonnegative-choice-free]]: finite KL against any subprobability reference is nonnegative in bits, and $\ln t\le t-1$ for $t>0$.

## Proof

**Given:** The sequence, LZ78 parser and finite-state coding convention.

1.1 Parse $x_0^{n-1}\#$ into $N$ phrases. Let $c=N-1$ be the ordinary phrases inserted into the dictionary; they are distinct by [F1]. If the terminal phrase is $w\#$, its source portion $w$ is an existing dictionary word of depth at most $c$. For $r=\lfloor\frac12\log_q(n+1)\rfloor$, at most $\sum_{j=1}^r q^j=O(\sqrt n)$ distinct ordinary phrases have length at most $r$, while longer phrases consume at least $r+1$ source symbols each. Thus $c=O(n/\log n)$ and $|w|\le c=o(n)$. [F1, given, algebra]

2.1 Fix an information-lossless encoder $E$ with at most $s$ states. For each of the $c$ ordinary phrases $y_i$, record its starting state $S_i$, output word $W_i$, and ending state $S_{i+1}$. The tuples $(S_i,W_i,S_{i+1})$ are distinct: equality for two different phrase strings with the same initial state would contradict injectivity in [F3]. If $J$ is uniform on the $c$ phrases and $L=|W_J|$ has mean $\mu$, then $$\log_2c=H_2(S_J,W_J,S_{J+1})\le2\log_2s+H_2(L)+E L.$$ The two state entropies are at most $\log_2s$, by [F4] applied to the uniform law on each state set. Conditional on $L$, there are at most $2^L$ possible binary strings, so $H_2(W_J\mid L)\le E L$. [F1, F3, F4, step 1.1, algebra]

3.1 If $\mu=0$, then $H_2(L)=0$. If $\mu>0$, compare with the geometric law $r_j=(\mu+1)^{-1}(\mu/(\mu+1))^j$. Nonnegative relative entropy [F4] gives $$H_2(L)\le-E\log_2r_L=(\mu+1)\log_2(\mu+1)-\mu\log_2\mu\le\log_2(e(\mu+1)),$$ because $\ln(1+x)\le x$ for $x\ge0$, as the derivative of $x-\ln(1+x)$ is nonnegative. The same upper bound holds when $\mu=0$. Thus $\mu\ge\log_2c-2\log_2s-\log_2(e(\mu+1))$. If $\mu<\log_2c$, this error is $O_s(\log\log(c+2))$; if $\mu\ge\log_2c$, the same lower bound is immediate. The $E$ output on these $c$ phrases is at most its total block output, so $$c\log_2c\le L_E(x_0^{n-1})+O_s(c\log\log(c+2)).$$ [F3, F4, step 2.1, algebra]

4.1 By [F2], the LZ78 description length is at most $c\log_2c+O(c\log\log(c+2))+O(\log(c+2))$, including the terminal record. Since $c=O(n/\log n)$, step 3.1 yields $$\limsup_n L_{\rm LZ}(x_0^{n-1})/n\le\limsup_n L_E(x_0^{n-1})/n.$$ [F1, F2, F3, step 1.1, step 3.1, algebra]

5.1 The inequality holds for every fixed $s$-state information-lossless encoder. Taking the infimum over such encoders and then over $s$ proves that the LZ78 limsup rate is at most the finite-state compressibility $\rho_{\rm FS}(x)$. This is the one-sided individual-sequence optimality claim; equality or convergence of the LZ78 rate is not asserted. [F3, step 4.1, algebra] ∎
