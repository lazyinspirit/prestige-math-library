---
id: lem-depth-radical-invariance-via-ext
title: Radical invariance of first nonzero Ext
kind: lemma
status: published
origin: pipeline
deps: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://websites.umich.edu/~mmustata/CAnotes.pdf
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-02-maintenance-receipts.jsonl (lem-depth-radical-invariance-via-ext). No independent judge or whole-closure certification.
    delegated_by: owner
---
## Statement

Let $R$ be Noetherian, $M$ a finite $R$-module, and $I,J$ ideals with
$\sqrt I=\sqrt J$. Then the first nonzero degrees of
$\operatorname{Ext}^*_R(R/I,M)$ and $\operatorname{Ext}^*_R(R/J,M)$ are
equal, with simultaneous value $\infty$ if both families vanish.

## Facts & Assumptions

**Given:** The data in the statement.

## Proof

**Proof technique:** direct.

1.1 Since $I$ and $J$ are finitely generated and have equal radicals, some positive powers satisfy $I^a\subseteq J$ and $J^b\subseteq I$: take powers of each generator lying in the other ideal, then a sufficiently high power of the whole ideal lies there. Fix $d\ge0$ and suppose $\operatorname{Ext}^i_R(R/I,M)=0$ for $0\le i<d$. The same vanishing holds for every finite $R/I$-module $N$. Indeed, for each such $N$ choose a finite free $R/I$-module $F$ surjecting onto it, with finite kernel $K$. For $i=0$, $\operatorname{Hom}_R(N,M)$ injects into $\operatorname{Hom}_R(F,M)=0$. Inductively, for $1\le i<d$, the long exact Ext sequence places $\operatorname{Ext}^i_R(N,M)$ between $\operatorname{Ext}^{i-1}_R(K,M)=0$ and $\operatorname{Ext}^i_R(F,M)=0$. If a finite module $N$ is killed by $I^r$, its finite filtration $N\supseteq IN\supseteq\cdots\supseteq I^rN=0$ has finite $R/I$-module quotients, so the long exact sequences give the same vanishing for $N$. The converse follows by taking $N=R/I$. [given, algebra]

2.1 Apply this first to $R/J$, annihilated by $I^a$, and then symmetrically to $R/I$. The two Ext families vanish through the same initial range, including the all-vanishing case. [step 1.1] ∎
