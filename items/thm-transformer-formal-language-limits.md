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
  - lem-soft-attention-one-symbol-influence
  - lem-2dyck-pcfg-prefix-mass-positive
proof_strategy: direct
provenance:
  statement: ai-altered
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

For all soft-attention conclusions below, fix the parameter matrices, depth, and number of heads independently of length; use scaled dot-product scores with fixed linear query/key/value maps, uniformly bounded token and positional embeddings combined by addition, globally Lipschitz positionwise maps, and a fixed globally Lipschitz logit readout followed by softmax. Under these one-symbol influence assumptions, the parity source process with fixed $p\in(0,1)$ has sharp unigram cross-entropy level
$$
H(u),\qquad u(\mathtt{eos})=p/2,\quad u(0)=u(1)=(2-p)/4.
$$
Every such predictor has limiting lower cross-entropy at least $H(u)$, and the constant predictor $u$ attains it.

For the 2DYCK PCFG with rules $S\to(S)S$ and $S\to[S]S$ each of probability $p/2$, and $S\to\epsilon$ of probability $1-p$, fix any $p\in(0,1)$. Read its left-to-right output as a finite or infinite bracket stream; sample a length-$k$ prefix conditional on at least $k$ bracket tokens having been emitted, and predict the ordinary next token, without conditioning on exact total length. Every fixed soft-attention predictor satisfying these one-symbol influence assumptions has
$$
\liminf_{k\to\infty}(\mathcal L_{p,k}-\mathcal L_{p,k}^*)\ge p^2(1-p)^2\log 2>0,
$$
where $\mathcal L_{p,k}$ is its expected next-token cross-entropy under this prefix law and $\mathcal L_{p,k}^*$ is the corresponding optimal conditional cross-entropy.

The PCFG is a probability law on finite words precisely when $p\le1/2$. For all $p\in(0,1)$ its finite output can instead be conditioned on eventual termination. For that finite-word probability law, sample prefixes conditional on reaching length $k$ and predict the next token without any additional length conditioning. The same positive-gap conclusion holds with $p$ replaced by $a=\min(p,1-p)$:
$$
\liminf_{k\to\infty}(\mathcal L^{\mathrm{fin}}_{p,k}-(\mathcal L^{\mathrm{fin}}_{p,k})^*)\ge a^2(1-a)^2\log 2>0.
$$
For $p\le1/2$ these two prefix laws agree. At $p=1/2$ finite words have infinite expected length, but the prefix bounds still hold. For $p>1/2$ the first law includes nonterminating streams and the second conditions them away; neither is an unconditioned probability distribution on finite words with the original parameter $p$. These are cross-entropy limits, not exact-classification impossibility theorems.

## Statement references

[Hahn, §§5–6: hard-attention language limits and soft-attention prediction bounds](https://aclanthology.org/2020.tacl-1.11.pdf)

[[lem-soft-attention-one-symbol-influence]]: the precise bounded dot-product model and globally Lipschitz readout followed by softmax.

[[lem-soft-2dyck-crossentropy-gap-paired-prefixes]]: the paired-prefix soft-attention gap.

[[lem-2dyck-pcfg-prefix-mass-positive]]: exact stream and finite-word prefix laws and a uniform equal-mass pairing.

## Facts & Assumptions

**Given:** The formal-language definitions and model conventions in the Statement.

[F1] Fixed-depth hard attention cannot recognize PARITY or 2DYCK with the stated end-marker convention ([[thm-hard-attention-languages]]).

[F2] For the stated parity source, every such soft predictor has limiting expected cross-entropy at least $H(u)$, and the constant predictor $u$ attains $H(u)$ ([[thm-soft-attention-parity-chance-limit]]).

[F3] Under a positive-mass disjoint equal-prefix pairing whose conditional closing targets are swapped, soft-attention next-token cross-entropy exceeds the conditional optimum by at least $P_0(1-p)\log 2$ in the limit ([[lem-soft-2dyck-crossentropy-gap-paired-prefixes]]).

[F4] The stream prefix law has disjoint equal-mass pairs of mass at least $p^2(1-p)$, obtained by flipping the outer opening in a final three-token opening-opening-closing pattern. Conditioning on finite output replaces the parameter by $a=\min(p,1-p)$ and gives the same pairing with that parameter ([[lem-2dyck-pcfg-prefix-mass-positive]]).

## Proof

1.1 The hard-attention assertions are exactly [F1], proved by the iterated restriction reduction for the fixed finite depth and finite alphabet, with the end marker fixed. [given, F1, construct]

1.2 The parity cross-entropy lower bound and its sharpness are exactly [F2]. The probability vector $u$ is the equal mixture of the even-parity target $(p,(1-p)/2,(1-p)/2)$ and odd-parity target $(0,1/2,1/2)$ in coordinate order $(\mathtt{eos},0,1)$. [given, F2, algebra]

1.3 Put $n=k+1$ and append the fixed readout end marker to each sampled length-$k$ prefix. By [F4], every prefix in the paired event ends with a closing bracket and has positive stack height; the flipped opening at position $k-2$ is nonfinal. The pair members have equal probability and ordinary next-token laws assigning $p/2$ to each opening and $1-p$ to opposite matching closing types. Hence all hypotheses of [F3] hold with $P_0=p^2(1-p)$. It gives excess cross-entropy at least $p^2(1-p)^2\log2$ in the lower limit. The appended readout marker is an input convention and does not assert that the sampled source prefix terminates there. [given, F3, F4, construct, algebra]

2.1 Under conditioning on eventual termination, [F4] identifies the entire prefix and target process with parameter $a=\min(p,1-p)$. Repeat step 1.3 with $a$ to prove the finite-word bound. The finite-word mass and extinction calculation in [F4] give the stated distinction between the two laws. At $p=1/2$, let $G_j$ be the nodes in generation $j$ of the derivation tree. A finite-generation induction gives $\mathbb E|G_j|=(2p)^j=1$ for every $j$. Hence the number $Z_N=\sum_{j=0}^{N}|G_j|$ of nodes through generation $N$ has expectation $N+1$. The total node count $Z$ is at least $Z_N$, so monotonicity of expectation gives $\mathbb E Z\ge N+1$ for every $N$ and therefore $\mathbb E Z=\infty$, without interchanging an expectation with an infinite sum. Finite derivations are full binary trees, and their word length is their node count minus one; thus the finite-word law has infinite expected length. Neither pairing proof uses finite expected length. [given, F4, step 1.3, algebra, induction] ∎

## Remarks

The explicit prefix-sampling law resolves the conditioning left implicit in Hahn's Theorem 6. Its finite-mean Markov-chain sketch is unnecessary: extending any surviving prefix by two openings and the matching inner close supplies positive paired mass directly. Exact-total-length conditioning is a different prediction problem; its next-token probabilities are not generally $p/2,p/2,1-p$. The fixed-length universality theorem concerns a separate regime with resources allowed to grow.
