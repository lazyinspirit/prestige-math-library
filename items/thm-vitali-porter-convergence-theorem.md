---
id: thm-vitali-porter-convergence-theorem
kind: theorem
title: "Vitali-Porter convergence theorem for holomorphic functions"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-locally-bounded-family-on-a-plane-domain, thm-identity-theorem-holomorphic-functions, thm-montel-theorem-for-holomorphic-functions]
justified_by: []
aliases: []
landmark: true
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

## Statement

**Assume the Axiom of Choice.** Let $\Omega$ be a plane domain and let $(f_n)$ be a locally bounded sequence in
$H(\Omega)$. Suppose there is a set $E\subseteq\Omega$ with an accumulation point
in $\Omega$ such that $f_n(z)$ converges for every $z\in E$. Then $(f_n)$
converges locally uniformly on $\Omega$ to a holomorphic function.

## Facts & Assumptions

**Given:** Choice, a plane domain $\Omega$, a locally bounded holomorphic sequence $(f_n)$, and a set $E\subseteq\Omega$ on which the pointwise limit exists with an accumulation point in $\Omega$.

[L1] Locally bounded holomorphic families are normal ([[thm-montel-theorem-for-holomorphic-functions]]).

[L2] Two holomorphic functions that agree on a set with an accumulation point in the domain agree everywhere ([[thm-identity-theorem-holomorphic-functions]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], every subsequence of $(f_n)$ has a further subsequence converging locally uniformly to a holomorphic limit. Any two such subsequential limits agree on $E$, because the scalar sequence $f_n(z)$ has a fixed pointwise limit there, so [L2] makes them equal on all of $\Omega$. [L1, L2, given]

2.1 If the whole sequence did not converge locally uniformly to that common limit, then some subsequence would stay a definite distance away on a compact set. Applying [L1] again to that subsequence would produce a further subsequence converging locally uniformly to the same limit from step 1.1, which is impossible. [L1, given, assume-contra, discharge-contradiction]

3.1 Therefore the full sequence converges locally uniformly on $\Omega$ to a holomorphic function. [given] ∎
