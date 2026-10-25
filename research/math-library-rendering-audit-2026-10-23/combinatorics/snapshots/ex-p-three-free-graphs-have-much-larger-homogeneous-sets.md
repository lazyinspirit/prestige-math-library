---
id: ex-p-three-free-graphs-have-much-larger-homogeneous-sets
kind: example
title: "The $P_3$-free case is much stronger than the general lower bounds"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-p3-free-graphs-have-square-root-homogeneous-sets,
       thm-classical-erdos-hajnal-bound,
       thm-loglog-erdos-hajnal-bound,
       def-logarithm-to-a-base]
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, The Erdős-Hajnal Conjecture: A Survey, sec. 2"
      url: "https://web.math.princeton.edu/~mchudnov/EHsurvey.pdf"
---

## Example

For $P_3$-free graphs the general lower bounds of this page are far from sharp.

## Facts & Assumptions

**Given:** A nonnull finite $P_3$-free graph $G$ with $n:=|V(G)|$.

[L1] Every $P_3$-free graph satisfies $\operatorname{hom}(G)\ge\sqrt n$ ([[thm-p3-free-graphs-have-square-root-homogeneous-sets]]).

[L2] For $n>1$, $\log_2 n$ is defined ([[def-logarithm-to-a-base]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], the $P_3$-free class admits the lower bound $\operatorname{hom}(G)\ge \sqrt n=2^{(\log_2 n)/2}$. [L1, L2, algebra]

2.1 The exponent $(\log_2 n)/2$ grows faster than every constant multiple of $\sqrt{\log_2 n}$, because if $L:=\log_2 n$ and $L\ge4a^2$, then $L/2\ge a\sqrt L$. Hence for all sufficiently large $n$, $2^{(\log_2 n)/2}\ge 2^{a\sqrt{\log_2 n}}$ for every fixed $a>0$. [step 1.1, algebra]

2.2 The same exponent $(\log_2 n)/2$ also grows faster than every constant multiple of $\sqrt{\log_2 n\,\log_2\log_2 n}$, because for $L\ge16$ one has $\log_2 L\le\sqrt L$, so $\sqrt{L\log_2 L}\le L^{3/4}$ and then $L/2\ge bL^{3/4}$ for all sufficiently large $L$. Thus for every fixed $b>0$ and all sufficiently large $n$, $2^{(\log_2 n)/2}\ge 2^{b\sqrt{\log_2 n\,\log_2\log_2 n}}$. [step 1.1, algebra]

3.1 So the square-root homogeneous-set bound for $P_3$-free graphs is much stronger than either general scale on this page. [step 2.1, step 2.2] ∎
