---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/cor-kronecker-coefficients-are-nonnegative-integers-and-s3-symmetric.json
  precheck: pass
id: cor-kronecker-coefficients-are-nonnegative-integers-and-s3-symmetric
kind: corollary
title: Kronecker coefficients are nonnegative integers with full $S_3$ and conjugation symmetries
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 2
deps: [prop-kronecker-coefficient-is-a-three-character-inner-product,
       prop-sign-twist-corresponds-to-the-omega-involution,
       def-kronecker-coefficient-and-internal-tensor-product]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Igor Pak and Greta Panova, Bounds on the Kronecker coefficients, arXiv:1406.2988v2 (2014)"
      url: "https://arxiv.org/pdf/1406.2988"
      locator: "§2.3, printed p. 4, display (2.3) and the following lines: full $S_3$ symmetry and the conjugation identities $g(\\lambda,\\mu,\\nu)=g(\\lambda',\\mu',\\nu)=g(\\lambda',\\mu,\\nu')=g(\\lambda,\\mu',\\nu')$"
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Oxford University Press 1995"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "Chapter I, §7, printed pp. 115–116: symmetry of the triple character average, and Example 2 on p. 116 for sign twist."
---

## Statement

For all partitions $\lambda,\mu,\nu\vdash n$:

(a) $g(\lambda,\mu,\nu)$ is a nonnegative integer;

(b) $g$ is invariant under every permutation of the three arguments, that is
$g(\lambda,\mu,\nu)=g(\mu,\lambda,\nu)=g(\lambda,\nu,\mu)=\cdots$ for all six
orderings;

(c) conjugating exactly two of the three partitions preserves the coefficient:
$$g(\lambda,\mu,\nu)=g(\lambda',\mu',\nu)=g(\lambda',\mu,\nu')=g(\lambda,\mu',\nu'),$$
where $\lambda'$ denotes the conjugate partition.

No positive combinatorial rule for the coefficients is asserted.

## Facts & Assumptions

**Given:** An integer $n\ge0$ and partitions $\lambda,\mu,\nu\vdash n$ with conjugates $\lambda',\mu',\nu'$.

[F1] $g(\lambda,\mu,\nu)$ is the multiplicity of $S^\nu$ in the completely reducible module $S^\lambda\otimes_{\mathbb C}S^\mu$, hence a nonnegative integer ([[def-kronecker-coefficient-and-internal-tensor-product]]).

[F2] $g(\lambda,\mu,\nu)=\frac1{n!}\sum_{\sigma\in S_n}\chi^\lambda(\sigma)\chi^\mu(\sigma)\chi^\nu(\sigma)$ ([[prop-kronecker-coefficient-is-a-three-character-inner-product]]).

[F3] For every $\rho\vdash n$ and $\sigma\in S_n$, $\chi^{\rho'}(\sigma)=\operatorname{sgn}(\sigma)\chi^\rho(\sigma)$, and $\operatorname{sgn}(\sigma)^2=1$ ([[prop-sign-twist-corresponds-to-the-omega-involution]]).

## Proof

**Proof technique:** direct.

1.1 Claim (a): by [F1], $g(\lambda,\mu,\nu)$ is the multiplicity of an irreducible summand in a completely reducible finite-dimensional module, so it is a nonnegative integer. [F1, given]

1.2 Claim (b): by [F2], $g(\lambda,\mu,\nu)$ is the average over $\sigma\in S_n$ of the product $\chi^\lambda(\sigma)\chi^\mu(\sigma)\chi^\nu(\sigma)$. Permuting the three arguments permutes the three factors of each summand, and complex multiplication is commutative, so every summand and hence the average is unchanged; this gives all six orderings. [F2, given, algebra]

2.1 Claim (c): by [F3], $\chi^{\lambda'}(\sigma)=\operatorname{sgn}(\sigma)\chi^\lambda(\sigma)$, $\chi^{\mu'}(\sigma)=\operatorname{sgn}(\sigma)\chi^\mu(\sigma)$ and $\chi^{\nu'}(\sigma)=\operatorname{sgn}(\sigma)\chi^\nu(\sigma)$ for every $\sigma\in S_n$. Substituting the first two of these into the formula [F2] for $g(\lambda',\mu',\nu)$ gives $\frac1{n!}\sum_\sigma\operatorname{sgn}(\sigma)^2\chi^\lambda(\sigma)\chi^\mu(\sigma)\chi^\nu(\sigma)=\frac1{n!}\sum_\sigma\chi^\lambda(\sigma)\chi^\mu(\sigma)\chi^\nu(\sigma)=g(\lambda,\mu,\nu)$, since $\operatorname{sgn}(\sigma)^2=1$ for every $\sigma$. The same computation with exactly two of the three substitutions gives $g(\lambda',\mu,\nu')=g(\lambda,\mu',\nu')=g(\lambda,\mu,\nu)$. [F2, F3, algebra] ∎
