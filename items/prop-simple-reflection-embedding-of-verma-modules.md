---
id: prop-simple-reflection-embedding-of-verma-modules
kind: proposition
title: "Simple-reflection embeddings of Verma modules"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-simple-root-singular-vector-in-a-verma-module, thm-universal-property-of-verma-modules]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Yiannis Sakellaridis, Verma Modules and the Category O, Proposition 3.2"
      url: "https://math.jhu.edu/~sakellar/automorphic-files/vermamodules.pdf"
---

## Statement

If $\langle\lambda+\rho,\alpha_i^\vee\rangle\in\mathbb Z_{>0}$, there is an embedding $M(s_i\mathbin\cdot\lambda)\hookrightarrow M(\lambda)$.

## Facts & Assumptions

**Given:** The singular vector [[lem-simple-root-singular-vector-in-a-verma-module]] and the universal property [[thm-universal-property-of-verma-modules]].

## Proof

**Proof technique:** direct.

1.1 The singular vector $f_i^m v_\lambda$ has weight $s_i\mathbin\cdot\lambda$, so the universal property gives a homomorphism $M(s_i\mathbin\cdot\lambda)\to M(\lambda)$ taking its highest vector to it. [given, construct]

2.1 In the PBW model the vector $f_i^m v_\lambda$ is nonzero. If $u v_{s_i\cdot\lambda}$ lay in the kernel, then $u f_i^m=0$ in $U(\mathfrak n^-)$. The PBW-degree associated graded is the domain $S(\mathfrak n^-)$, so $u=0$. Thus the nonzero homomorphism in step 1.1 is injective and is the asserted embedding. [step 1.1, algebra] ∎
