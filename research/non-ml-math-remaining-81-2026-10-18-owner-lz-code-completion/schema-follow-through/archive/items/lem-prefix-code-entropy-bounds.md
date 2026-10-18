---
id: lem-prefix-code-entropy-bounds
kind: lemma
title: "Entropy lower and Shannon upper bounds for finite prefix codes"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-finite-block-information-and-entropy
  - def-finite-support-binary-prefix-code
  - thm-kraft-inequality
  - lem-finite-kl-nonnegative-choice-free
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; finite-alphabet sums and code constructions are explicit, and cited measure-theoretic results retain their stated hypotheses."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
---
## Statement

For a finite distribution, proves every binary prefix code has expected length at least H and constructs a prefix code with expected length less than H+1 bit.

## Facts & Assumptions

**Given:** A finite probability vector $p$ and a binary prefix code with lengths $\ell(x)$ on its positive support, describing one known source block.

[F1] [[def-finite-block-information-and-entropy]]: $H(p)=-\sum_{p(x)>0}p(x)\log_2p(x)$.

[F2] [[def-finite-support-binary-prefix-code]]: the codewords are prefix-free.

[F3] [[thm-kraft-inequality]]: binary prefix-free code lengths satisfy $K:=\sum_x2^{-\ell(x)}\le1$; conversely any finite computable list of positive lengths with Kraft sum at most one has a prefix-free allocation.

[F4] [[lem-finite-kl-nonnegative-choice-free]]: for probability weights $p$ and reference weights $r$ positive on their support with $\sum_x r(x)\le1$, the bit-log sum $\sum_xp(x)\log_2(p(x)/r(x))$ is nonnegative, without choice.

## Proof

**Given:** The source and code in the statement.

1.1 Put $r(x)=2^{-\ell(x)}>0$ on the positive support. By [F3], $\sum_xr(x)\le1$, so [F4] gives $0\le\sum_xp(x)\log_2(p(x)/r(x))=-H(p)+\sum_xp(x)\ell(x)$. Thus every such code has expected length at least $H(p)$. If the support has one point, one known block can be described by length zero and both entropy and optimal expected length are zero; no unknown message-count decoding is claimed. [F1, F2, F3, F4, given, algebra]

2.1 Assume now that the support has at least two points. Then every positive $p(x)<1$, so $\ell(x)=\lceil-\log_2p(x)\rceil$ is a positive integer. It satisfies $\sum_x2^{-\ell(x)}\le\sum_xp(x)=1$, so the finite binary Kraft criterion gives a prefix code. Also $\ell(x)<-\log_2p(x)+1$, hence its expected length is less than $H(p)+1$. [F1, F3, step 1.1, algebra]

3.1 For singleton support step 1.1 gives $L^*(p)=H(p)=0<H(p)+1$. For support of size at least two, taking the infimum over all prefix codes in step 1.1 and using the code constructed in step 2.1 proves $H(p)\le L^*(p)<H(p)+1$. Empty support cannot occur for a probability vector. [F1, F2, step 1.1, step 2.1, algebra] ∎
