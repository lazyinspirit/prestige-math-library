---
id: ex-diagonal-extraction-on-a-disc-for-montels-theorem
kind: example
title: "Montel's diagonal extraction can be written out concretely on a disc"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-montel-theorem-for-holomorphic-functions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Matthias Weber, Complex Analysis, Ch. 5 §§5.1-5.2"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 2 §5.2 and Ch. 8 §3.2"
      url: "https://web.archive.org/web/20260305202510if_/https://studylib.net/doc/27609666/stein-complex-analysis"
    - title: "Sheldon Axler, Paul Bourdon, and Wade Ramey, Harmonic Function Theory, Ch. 2"
      url: "https://www.axler.net/HFT.pdf"
pipeline_run: frontier-22
---

## Example

**Assume the Axiom of Choice.**

On the unit disc, Montel's diagonal extraction can be written concretely by the
compact discs
$$K_n:=\{z:|z|\le1-1/(n+1)\}.$$
Given any locally bounded sequence in $H(\mathbb D)$, one may choose a subsequence
converging uniformly on each $K_n$, and the diagonal subsequence then converges
locally uniformly on all of $\mathbb D$.

## Facts & Assumptions

**Given:** Choice and a locally bounded sequence $(f_j)$ in $H(\mathbb D)$.

[L1] Montel's theorem supplies a uniformly convergent subsequence on each compact stage of the canonical exhaustion ([[thm-montel-theorem-for-holomorphic-functions]]).

## Verification

**Proof technique:** direct.

1.1 Apply [L1] to choose a subsequence converging uniformly on the first compact disc, then a further subsequence converging uniformly on the second compact disc, and continue stage by stage. [L1, given, choose]

2.1 The diagonal term at stage $n$ lies in every earlier chosen subsequence, so for each fixed compact stage the diagonal sequence eventually belongs to the corresponding uniformly convergent subsequence. Hence the diagonal sequence converges locally uniformly on the whole disc. [given] ∎
