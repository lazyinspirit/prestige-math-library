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

**Given:** A finite probability vector $p$ and a binary prefix code with lengths $\ell(x)$ on its positive support.

[F1] [[def-finite-block-information-and-entropy]]: $H(p)=-\sum_{p(x)>0}p(x)\log_2p(x)$.

[F2] [[def-finite-support-binary-prefix-code]]: the codewords are prefix-free.

[F3] [[thm-kraft-inequality]]: binary prefix-free code lengths satisfy $K:=\sum_x2^{-\ell(x)}\le1$.

## Proof

**Given:** The source and code in the statement.

1.1 If the support has one point, length zero is allowed and both entropy and optimal expected length are zero. Otherwise $K>0$. Jensen's inequality for the concave logarithm gives
$$\sum_xp(x)\log_2\frac{2^{-\ell(x)}}{p(x)}\le\log_2\sum_x2^{-\ell(x)}=\log_2K\le0.$$
Rearranging yields $H(p)\le\sum_xp(x)\ell(x)$. [F1, F2, F3, given, algebra]

1.2 Assume now that the support has at least two points. Then every positive $p(x)<1$, so $\ell(x)=\lceil-\log_2p(x)\rceil$ is a positive integer. It satisfies $\sum_x2^{-\ell(x)}\le\sum_xp(x)=1$, so the finite binary Kraft criterion gives a prefix code. Also $\ell(x)<-\log_2p(x)+1$, hence its expected length is less than $H(p)+1$. [F1, F3, step 1.1, algebra]

1.3 Taking the infimum over all prefix codes in step 1.1 and using the code constructed in step 1.2 proves $H(p)\le L^*(p)<H(p)+1$. Empty support cannot occur for a probability vector. [F1, F2, step 1.1, step 1.2, algebra] ∎
