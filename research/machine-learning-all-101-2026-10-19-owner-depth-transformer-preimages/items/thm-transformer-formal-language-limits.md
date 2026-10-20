---
id: thm-transformer-formal-language-limits
kind: theorem
title: "Hard and soft attention limits for formal-language prediction"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-hahn-hard-soft-attention-sequence-model
  - lem-hard-attention-depth-reduction
  - thm-hard-attention-languages
  - thm-soft-attention-parity-chance-limit
  - lem-soft-2dyck-crossentropy-gap-paired-prefixes
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Hahn, Theoretical Limitations of Self-Attention in Neural Sequence Models, §§5–6"
      url: "https://aclanthology.org/2020.tacl-1.11.pdf"
---

## Statement

For PARITY, whose members are the bit strings with an even number of $1$s, no fixed finite-depth hard-attention sequence model with fixed parameters recognizes every sufficiently long input exactly. For 2DYCK, whose words are correctly balanced and properly nested strings over two bracket types, no such hard-attention model recognizes the language. In both cases the model appends an end marker before classification.

For soft attention with fixed parameters and depth, uniformly bounded token and positional embeddings, Lipschitz positionwise maps, and a Lipschitz prediction map, the parity source process with fixed $p\in(0,1)$ has sharp unigram cross-entropy level
$$
H(u),\qquad u(\mathtt{eos})=p/2,\quad u(0)=u(1)=(2-p)/4.
$$
Every such predictor has limiting lower cross-entropy at least $H(u)$, and the constant predictor $u$ attains it.

For the 2DYCK PCFG with rules $S\to(S)S$ and $S\to[S]S$ each of probability $p/2$, and $S\to\epsilon$ of probability $1-p$, the following conditional conclusion holds. Let $0<p<1/2$, let $D_n$ be a family of laws on length-$(n-1)$ bracket prefixes, and let $E_n$ be disjoint equal-mass pairs of prefixes ending in a closing bracket at positive stack height, paired by changing the type of the top unmatched opening bracket before the final prefix symbol. Suppose the conditional next-symbol laws in each pair assign probability $p/2$ to each opening bracket and probability $1-p$ to the closing bracket matching the top unmatched opening, with the two closing types swapped across the pair. If $D_n(E_n)\ge P_0>0$ for all sufficiently large $n$, then every fixed soft-attention predictor satisfying the one-symbol influence assumptions has
$$
\liminf_{n\to\infty}(\mathcal L_n-\mathcal L_n^*)\ge P_0(1-p)\log 2,
$$
where $\mathcal L_n$ is its expected next-symbol cross-entropy and $\mathcal L_n^*$ is the optimal conditional cross-entropy. This is not an exact-classification impossibility theorem. The PCFG-specific assertion that its intended length-$n$ prefix laws satisfy the positive-mass pairing condition is a separate unresolved claim.

## Statement references

[Hahn, §§5–6: hard-attention language limits and soft-attention prediction bounds](https://aclanthology.org/2020.tacl-1.11.pdf)

[[lem-soft-2dyck-crossentropy-gap-paired-prefixes]]: the paired-prefix soft-attention gap under its stated mass hypothesis.

## Facts & Assumptions

**Given:** The formal-language definitions and model conventions in the Statement.

[F1] On a restriction leaving a positive fraction of input positions free, iterated hard-attention depth reduction makes the final output depend on only a bounded number of original positions ([[lem-hard-attention-depth-reduction]]).

[F2] For the stated parity source, every such soft predictor has limiting expected cross-entropy at least $H(u)$, and the constant predictor $u$ attains $H(u)$ ([[thm-soft-attention-parity-chance-limit]]).

[F3] Under a positive-mass disjoint equal-prefix pairing whose conditional closing targets are swapped, soft-attention next-token cross-entropy exceeds the conditional optimum by at least $P_0(1-p)\log 2$ in the limit ([[lem-soft-2dyck-crossentropy-gap-paired-prefixes]]).

## Proof

1.1 The hard-attention assertions are the two exact-recognition conclusions of [F1] after iterating the restriction reduction through the model's fixed finite depth. The end marker is fixed and the input alphabet is finite, so it does not alter the free-position argument. [given, F1, construct]

1.2 The parity cross-entropy lower bound and its sharpness are exactly [F2]. The probability vector $u$ is the equal mixture of the even-parity target $(p,(1-p)/2,(1-p)/2)$ and odd-parity target $(0,1/2,1/2)$ in coordinate order $(\mathtt{eos},0,1)$. [given, F2, algebra]

2.1 For the PCFG, one expansion of a nonterminal creates two nonterminal children with total probability $p$ and no children with probability $1-p$. If $Z_k$ is the number of nonterminals in generation $k$, then $\mathbb E Z_k=(2p)^k$ by induction on generations. Thus the expected total number of expansions is $\sum_{k\ge0}(2p)^k$, finite exactly when $p<1/2$. The extinction probabilities by generation satisfy $q_0=0$ and $q_{k+1}=1-p+pq_k^2$; their limit is the least fixed point of this equation. Its roots are $1$ and $(1-p)/p$. Hence extinction is certain for $p\le1/2$, while for $p>1/2$ the nonextinction probability is $(2p-1)/p>0$, so the grammar is not a probability law on finite strings. At $p=1/2$ it is proper but has infinite expected derivation size. [given, construct, algebra, induction]

2.2 Under the explicit paired-prefix and positive-mass hypotheses in the Statement, [F3] gives the displayed lower bound. This is conditional on the prefix-law hypothesis and does not establish that the PCFG supplies it. [given, F3] ∎

## Remarks

The proposed local supplier for the unresolved PCFG application is lem-2dyck-pcfg-prefix-mass-positive. It must specify the exact prefix-sampling law, define the paired event, and prove a uniform positive lower bound for its mass. Hahn's footnote 4 gives only a Markov-chain sketch without that conditioning and pair-mass argument. Also, for $p>1/2$ the grammar has positive probability of a nonterminating derivation, while $p=1/2$ is proper but has infinite expected derivation size; the source's finite-mean premise supports only $0<p<1/2$.
