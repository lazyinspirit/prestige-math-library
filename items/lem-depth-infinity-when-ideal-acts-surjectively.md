---
id: lem-depth-infinity-when-ideal-acts-surjectively
title: Depth is infinite when the ideal acts surjectively
kind: lemma
status: draft
origin: pipeline
deps: [def-depth-with-respect-to-an-ideal, thm-nakayama-lemma]
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

Let $R$ be a commutative ring, $I\subseteq R$ an ideal, and $M$ a finite
$R$-module. If $IM=M$, then $\operatorname{depth}_I(M)=\infty$. If moreover
the Axiom of Choice holds, $(R,\mathfrak m)$ is local,
$I\subseteq\mathfrak m$, and $M\ne0$, then
$IM\ne M$.

## Facts & Assumptions

**Given:** The ring, ideal, and finite module in the statement; AC for the second assertion.

## Proof

**Proof technique:** direct.

1.1 The first assertion is exactly the exceptional convention in the definition of $I$-depth; it includes $M=0$. [given]

2.1 In the local case, $IM=M$ with $I\subseteq\mathfrak m$ would give $\mathfrak mM=M$. Under the stated AC hypothesis, `thm-nakayama-lemma` then forces $M=0$, contrary to the hypothesis. [step 1.1, algebra] ∎
