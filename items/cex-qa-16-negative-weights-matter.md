---
id: cex-qa-16-negative-weights-matter
kind: counterexample
title: A nonnegative-only adversary estimate need not capture the general bound
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 26
deps:
  - def-qa-16-general-adversary-bound
  - def-qa-16-nonnegative-adversary-bound
  - prop-qa-16-general-versus-nonnegative-adversary
  - prop-qa-16-ambainis-base-separation
  - lem-qa-16-nonnegative-dual-overlap-upper-bound
  - thm-qa-16-adversary-composition-lower-bound
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: None; all spaces, matrices, decompositions and optimization variables are finite-dimensional.
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Høyer, Lee, and Špalek, Negative Weights Make Adversaries Stronger, Theory of Computing 3 (2007), §§6–7"
      url: "https://arxiv.org/pdf/quant-ph/0611054"
---

## Statement refuted

The assertion that nonnegative adversary weights always attain the general signed adversary bound is false. The following family supplies a strict separation.


For the partial iterates $f^{(1)}=f$ and $f^{(k+1)}=f\circ(f^{(k)},f^{(k)},f^{(k)},f^{(k)})$ of the sorted four-bit function,
$$\operatorname{Adv}^{\pm}(f^{(k)})>(2.511486)^k,\qquad \operatorname{Adv}(f^{(k)})\le(5/2)^k.$$
Thus signed adversary weights give a strict separation already at k=1 and an exponentially increasing ratio under iteration.

## Facts & Assumptions

**Given:** The sorted four-bit function, its base certificates, and its partial Boolean iterates.



[F1] [[prop-qa-16-ambainis-base-separation]]: the sorted four-bit f has Adv(f)=5/2 and Adv±(f)>2.511486, with explicit dual distributions and a signed matrix.

[F2] [[thm-qa-16-adversary-composition-lower-bound]]: both signed and nonnegative adversary values multiply as lower bounds when the composed block domain is nonempty.

[F3] [[lem-qa-16-nonnegative-dual-overlap-upper-bound]]: for a nonconstant Boolean function, coordinate distributions with cross-output mismatch overlap η>0 give Adv≤1/η.

## Counterexample

1.1 Let f be the sorted four-bit function and define $f^{(1)}=f$ and $f^{(k+1)}=f\circ(f^{(k)},f^{(k)},f^{(k)},f^{(k)})$ on their natural block domains. Since $f$ is total on $\{0,1\}^4$ and nonconstant, induction shows every $f^{(k)}$ is total on $\{0,1\}^{4^k}$ and nonconstant: each outer bit string is realized by independently choosing a preimage of each bit under $f^{(k)}$, and outer strings with either $f$-value lift in the same way. Thus every composition domain is nonempty and both adversary bounds in [F2] apply. The signed matrix in [F1] and repeated composition in [F2] give $\operatorname{Adv}^{\pm}(f^{(k)})\ge\operatorname{Adv}^{\pm}(f)^k>(2.511486)^k$. [given, F1, F2, construct, algebra]

1.2 The base coordinate distributions in [F1] have mismatch overlap at least $\eta=2/5$. If $P_X^{(k)}$ is a distribution over the $4^k$ input coordinates with cross-output overlap at least $\eta^k$, define for an input $X=(X_1,\ldots,X_4)$ to $f^{(k+1)}$ $P_X^{(k+1)}(j,r)=p_{\tilde X}(j)P_{X_j}^{(k)}(r),\quad \tilde X_j=f^{(k)}(X_j)$. For opposite outputs of $f^{(k+1)}$, the outer strings $\tilde X,\tilde Y$ have opposite $f$-values. For each $j$ with $\tilde X_j\ne\tilde Y_j$, the inner pair $X_j,Y_j$ has opposite $f^{(k)}$-values and contributes overlap at least $\eta^k$. Summing those $j$ gives total overlap at least $\eta\cdot\eta^k=\eta^{k+1}$; normalization follows by multiplying two probability distributions. [given, F1, F3, construct]

2.1 By induction and [F3], $\operatorname{Adv}(f^{(k)})\le\eta^{-k}=(5/2)^k$. Since $2.511486>2.5$, the signed lower bound grows strictly faster than this nonnegative upper bound for every $k\ge1$. Thus negative weights produce a strict adversary separation, and repeated composition amplifies it. [given, F1, F2, F3, step 1.1, step 1.2, algebra] ∎
