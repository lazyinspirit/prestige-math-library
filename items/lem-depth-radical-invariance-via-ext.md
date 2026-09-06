---
id: lem-depth-radical-invariance-via-ext
title: Radical invariance of first nonzero Ext
kind: lemma
status: draft
origin: pipeline
deps: [cor-depth-as-first-nonzero-ext]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://websites.umich.edu/~mmustata/CAnotes.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
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

1.1 Noetherianity gives $a,b>0$ with $I^a\subseteq J$ and $J^b\subseteq I$. The standard finite-filtration Ext devissage says that vanishing of $\operatorname{Ext}^i_R(R/I,M)$ for $i<d$ is equivalent to the same vanishing for every finite module annihilated by a power of $I$. [given, algebra]

2.1 Apply this first to $R/J$, annihilated by $I^a$, and then symmetrically to $R/I$. The two Ext families vanish through the same initial range, including the all-vanishing case. [step 1.1] ∎
