---
id: lem-null-homology-gives-the-plane-or-disc-alternative
kind: lemma
title: "A homologically simply connected plane domain is either the plane or conformally equivalent to the disc"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-homologically-simply-connected-complex-domain,
       thm-riemann-mapping-theorem]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 8"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
    - title: "Matthias Weber, Complex Analysis, Theorem 5.2.6"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
---

## Statement

Assume the Axiom of Choice. Let $\Omega\subseteq\mathbb C$ be a homologically
simply connected complex domain. Then either $\Omega=\mathbb C$, or there is a
biholomorphic map from $\Omega$ onto the unit disc $\mathbb D$.

## Facts & Assumptions

**Given:** The Axiom of Choice and a homologically simply connected complex domain $\Omega$.

[L1] A homologically simply connected complex domain is, in particular, a complex domain ([[def-homologically-simply-connected-complex-domain]]).

[L2] Under the Axiom of Choice, every proper homologically simply connected complex domain is conformally equivalent to the unit disc ([[thm-riemann-mapping-theorem]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $\Omega$ is a complex domain. If $\Omega=\mathbb C$, then the first alternative holds and there is nothing more to prove. [given, L1]

2.1 If $\Omega\ne\mathbb C$, then $\Omega\subsetneq\mathbb C$ is a proper homologically simply connected complex domain, so [L2] applies and gives a biholomorphic map $\Omega\to\mathbb D$. This is exactly the second alternative. [step 1.1, L2]

3.1 Steps 1.1 and 2.1 prove the dichotomy. [step 1.1, step 2.1] ∎
