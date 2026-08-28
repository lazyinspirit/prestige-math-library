---
id: ex-the-unit-ball-family-is-normal-on-any-domain
kind: example
title: "The family of holomorphic functions bounded by one is normal on every plane domain"
status: draft
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

On any plane domain $\Omega$, the family
$$\mathcal B:=\{f\in H(\Omega):|f(z)|<1\text{ for every }z\in\Omega\}$$
is normal.

## Facts & Assumptions

**Given:** Choice, a plane domain $\Omega$, and the family $\mathcal B=\{f\in H(\Omega):|f(z)|<1\text{ for all }z\in\Omega\}$.

[L1] Every locally bounded holomorphic family is normal ([[thm-montel-theorem-for-holomorphic-functions]]).

## Verification

**Proof technique:** direct.

1.1 Around each point of $\Omega$, choose a closed disc still contained in $\Omega$. The uniform bound $|f|<1$ holds on that disc for every $f\in\mathcal B$, so the family is locally bounded. [given, choose]

2.1 Applying [L1] to the local boundedness from step 1.1 shows that $\mathcal B$ is normal. [L1, given] ∎
