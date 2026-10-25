---
id: lem-hashing-commits-public-randomness
kind: lemma
title: "Pairwise-independent hashing controls fibre size"
status: published
verification:
  precheck: pass
  verified:
    model: "gpt-6-astra"
    verdict: pass
    date: 2026-09-08
    scope: "Local proof and prerequisite repair; not independent review or a whole-closure audit"
    delegated_by: owner
origin: session
deps: [def-expectation-on-a-finite-probability-space, def-variance-and-covariance]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Arora and Barak, §8.4.1"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

Let $U$ be a finite set with $|U|\ge2$, let $R$ be a nonempty finite set,
and let $\mathcal H$ be a nonempty finite family of maps from $U$ to $R$.
Assume pairwise independence: under a uniform choice of $h\in\mathcal H$,
for distinct $z,z'\in U$ and all $y,y'\in R$,
$$\Pr(h(z)=y,\ h(z')=y')=|R|^{-2}.$$
For $S\subseteq U$ and $y\in R$, put $N=|\{z\in S:h(z)=y\}|$.
Then $\mathbb E N=|S|/|R|$ and $\operatorname{Var}N\le\mathbb E N$.
Write $\mu=|S|/|R|$. The test $N>0$ has probability at most $1/4$ when
$\mu\le1/4$, and at least $3/4$ when $\mu\ge4$.

The corresponding public challenge announces $h$ (and the fixed target $y$), asks the prover for $z$, and accepts exactly when $z\in S$ and $h(z)=y$. Its optimal acceptance probability is $\Pr(N>0)$, giving the stated gap between these two promised size regimes. When elements and hashes have polynomial-length encodings, the uniform hash is sampled using polynomially many fair bits, and hash evaluation and membership in $S$ are polynomial-time decidable, this is a polynomial-time public-coin challenge: the verifier announces every sampling bit before receiving the response, then performs the stated deterministic checks.

## Proof

**Given:** $S\subseteq U$ with $|U|\ge2$, a pairwise-independent family, and $y\in R$.

[F1] Expectation is the finite weighted sum in [[def-expectation-on-a-finite-probability-space]], here with each hash of weight $1/|\mathcal H|$; variance is the squared-deviation expectation in [[def-variance-and-covariance]].

1.1 Write $N=\sum_{z\in S}I_z$, where $I_z$ indicates $h(z)=y$. Summing the assumed joint probabilities over outputs at any distinct input gives $\mathbb E I_z=1/|R|$. For distinct $z,z'$, $\mathbb E(I_zI_{z'})=|R|^{-2}$, so their covariance is zero by expansion of its defining finite sum. [given, F1, algebra]

2.1 Interchanging finite sums gives $\mathbb E N=|S|/|R|$. Expanding $(N-\mathbb EN)^2$ and using the zero cross terms gives $\operatorname{Var}N=\sum_z\operatorname{Var}I_z$. Since $I_z^2=I_z$, each summand is $|R|^{-1}(1-|R|^{-1})$. Thus $\operatorname{Var}N=\mu(1-1/|R|)\le\mu$. [F1, step 1.1, algebra]

3.1 Since $N$ is a nonnegative integer, $\mathbf 1_{\{N>0\}}\le N$, so $\Pr(N>0)\le\mu\le1/4$ in the small regime. For $\mu>0$, on $N=0$ one has $(N-\mu)^2=\mu^2$, hence $\mu^2\Pr(N=0)\le\mathbb E(N-\mu)^2\le\mu$. Therefore $\Pr(N>0)\ge1-1/\mu\ge3/4$ when $\mu\ge4$. [step 2.1, algebra]

4.1 If $N=0$, no prover response passes the stated checks. If $N>0$, an unrestricted prover can supply a valid preimage. Thus the optimal acceptance probability is exactly $\Pr(N>0)$. The checks are polynomial-time under the stated encoding and algorithmic hypotheses, and revealing every sampling bit before the response makes the protocol public-coin. This proves the quantitative challenge claim. [given, step 3.1] ∎
