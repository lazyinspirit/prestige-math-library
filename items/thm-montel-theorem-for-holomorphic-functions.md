---
id: thm-montel-theorem-for-holomorphic-functions
kind: theorem
title: "Montel's theorem: every locally bounded holomorphic family is normal"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-ascoli-arzela-for-compact-metric-domains, cor-holomorphic-functions-are-closed-for-local-uniform-convergence, def-normal-family-of-holomorphic-functions, lem-canonical-compact-exhaustion-of-a-plane-domain, lem-locally-bounded-holomorphic-families-are-locally-equicontinuous, thm-metric-compactness-equivalences]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
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

**Assume the Axiom of Choice, and therefore in particular Countable Choice and
Dependent Choice for the successive subsequence selections.** Let $\Omega$ be a
plane domain and let $\mathcal F\subseteq H(\Omega)$ be locally bounded. Then
$\mathcal F$ is a normal family.

## Facts & Assumptions

**Given:** Choice, a plane domain $\Omega$, and a locally bounded family $\mathcal F\subseteq H(\Omega)$.

[L1] On a compact metric domain, compactness of the uniform closure is equivalent to equicontinuity and pointwise relative compactness ([[cor-ascoli-arzela-for-compact-metric-domains]]).

[L2] Holomorphic functions are closed under locally uniform limits ([[cor-holomorphic-functions-are-closed-for-local-uniform-convergence]]).

[L3] The canonical exhaustion $(K_n)$ is compact, nested, and has interiors covering $\Omega$ ([[lem-canonical-compact-exhaustion-of-a-plane-domain]]).

[L4] Locally bounded holomorphic families are locally equicontinuous ([[lem-locally-bounded-holomorphic-families-are-locally-equicontinuous]]).

[L5] In a metric space, compactness is equivalent to sequential compactness under Countable Choice and Dependent Choice ([[thm-metric-compactness-equivalences]]).

## Proof

**Proof technique:** direct.

1.1 On each compact stage $K_n$ of [L3], local boundedness plus [L4] makes the restricted family equicontinuous and pointwise relatively compact; hence [L1] makes its uniform closure compact. [L1, L3, L4, given]

1.2 Using [L5], choose successively a subsequence converging uniformly on $K_1$, then a further subsequence converging uniformly on $K_2$, and so on, and take the diagonal subsequence. This is the explicit Choice step named in the Statement. [L5, given, choose]

1.3 For each fixed $m$, the diagonal subsequence eventually lies in the $m$th chosen subsequence, so it converges uniformly on $K_m$. Because the interiors of the $K_m$ cover $\Omega$ by [L3], this gives local uniform convergence on all of $\Omega$. [L3, given]

2.1 Fact [L2] makes the local uniform limit holomorphic, so every sequence in $\mathcal F$ has a locally uniformly convergent subsequence in $H(\Omega)$. That is exactly normality. [L2, given] ∎
