---
id: lem-hashing-commits-public-randomness
kind: lemma
title: "Pairwise-independent hashing controls fibre size"
status: draft
origin: session
deps: [def-private-coin-public-coin-and-arthur-merlin-protocol, def-pairwise-independent-hash-family]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Arora and Barak, §8.4.1"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

Let $S\subseteq U$, where $|U|\ge2$, and let $h:U\to R$ be uniformly selected from a pairwise-independent family. For every $y\in R$, if $N=|\{z\in S:h(z)=y\}|$, then $\mathbb E N=|S|/|R|$ and $\operatorname{Var}N\le\mathbb E N$. Write $\mu=|S|/|R|$. The test $N>0$ has probability at most $1/4$ when $\mu\le1/4$, and at least $3/4$ when $\mu\ge4$.

The corresponding public challenge announces $h$ (and the fixed target $y$), asks the prover for $z$, and accepts exactly when $z\in S$ and $h(z)=y$. Its optimal acceptance probability is $\Pr(N>0)$, giving the stated gap between these two promised size regimes. When elements and hashes have polynomial-length encodings, the uniform hash is sampled using polynomially many fair bits, and hash evaluation and membership in $S$ are polynomial-time decidable, announcing the entire sampling string implements this as a polynomial-time public-coin protocol in the sense of [[def-private-coin-public-coin-and-arthur-merlin-protocol]].

## Proof

**Given:** $S\subseteq U$ with $|U|\ge2$, a pairwise-independent family, and $y\in R$.

1.1 Write $N=\sum_{z\in S}I_z$, where $I_z$ indicates $h(z)=y$. Since $|U|\ge2$, the pairwise-independence definition [[def-pairwise-independent-hash-family]] gives uniform marginals by summing the joint distribution over a distinct input; it also gives zero covariances for distinct $z$. Thus $\mathbb E I_z=1/|R|$. [given]

2.1 Hence $\mathbb E N=|S|/|R|$ and $\operatorname{Var}N=\sum_z\operatorname{Var}I_z\le\sum_z\mathbb EI_z=\mathbb EN$. More exactly, $\operatorname{Var}N=\mu(1-1/|R|)\le\mu$. [step 1.1, algebra]

3.1 Since $N$ is a nonnegative integer, $\mathbf 1_{\{N>0\}}\le N$, so $\Pr(N>0)\le\mu\le1/4$ in the small regime. For $\mu>0$, on $N=0$ one has $(N-\mu)^2=\mu^2$, hence $\mu^2\Pr(N=0)\le\mathbb E(N-\mu)^2\le\mu$. Therefore $\Pr(N>0)\ge1-1/\mu\ge3/4$ when $\mu\ge4$. [step 2.1, algebra]

4.1 If $N=0$, no prover response passes the stated checks. If $N>0$, an unrestricted prover can supply a valid preimage. Thus the optimal acceptance probability is exactly $\Pr(N>0)$. The checks are polynomial-time under the stated encoding and algorithmic hypotheses, and revealing every sampling bit before the response makes the protocol public-coin. This proves the quantitative challenge claim. [given, step 3.1] ∎
