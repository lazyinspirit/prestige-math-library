---
id: prop-fraction-field-dimension-recovers-pid-module-rank
kind: proposition
title: "Extension to the fraction field recovers the free rank of a finitely generated PID module"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-free-rank-of-a-finitely-generated-pid-module, def-field-of-fractions, thm-field-of-fractions-is-a-field-and-the-domain-embeds, def-restriction-and-extension-of-scalars, thm-unit-isomorphisms-for-module-tensor-products, thm-tensor-products-commute-with-arbitrary-direct-sums, def-dimension, thm-invariant-factor-decomposition-over-a-pid]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "K. Conrad, Modules over a PID, Lemma 1.2 and rank discussion"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/modulesoverPID.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a PID, $Q=\operatorname{Frac}(R)$, and $M$ a finitely generated $R$-module. Then

$$\dim_Q(Q\otimes_RM)=\operatorname{rank}_RM.$$

Thus $\dim_{\operatorname{Frac}(R)}(\operatorname{Frac}(R)\otimes_R M)$ equals the free rank of $M$.

## Facts & Assumptions

**Given:** The free-rank definition of [[def-free-rank-of-a-finitely-generated-pid-module]], fraction fields and extension of scalars ([[def-field-of-fractions]], [[def-restriction-and-extension-of-scalars]]), and vector-space dimension ([[def-dimension]]).

[L1] Every finitely generated module over a PID $R$ is isomorphic to $R^s\oplus R/(a_1)\oplus\cdots\oplus R/(a_t)$ with each $a_i$ a nonzero nonunit and $a_1\mid\cdots\mid a_t$ ([[thm-invariant-factor-decomposition-over-a-pid]]).

[L2] For every integral domain $D$, the localisation $\operatorname{Frac}(D)$ is a field and contains an embedded copy of $D$ ([[thm-field-of-fractions-is-a-field-and-the-domain-embeds]]).

[L3] The unit tensor maps are module isomorphisms and respect every displayed outer module structure ([[thm-unit-isomorphisms-for-module-tensor-products]]).

[L4] Tensor products commute with arbitrary direct sums in either variable, including the empty sum ([[thm-tensor-products-commute-with-arbitrary-direct-sums]]).

## Proof

**Proof technique:** direct.

1.1 Write $M\cong R^r\oplus T$ by [L1], with $T=\bigoplus_{i=1}^tR/(a_i)$ and each $a_i$ a nonzero nonunit. This is an invariant-factor decomposition, so $r=\operatorname{rank}_RM$ by the free-rank definition in the Given. Extension of scalars and [L4] give $Q\otimes_RM\cong(Q\otimes_RT)\oplus(Q\otimes_RR^r)$. [L1, L4, given]

2.1 Every $m\in T$ is killed by the nonzero product $a_1\cdots a_t\in R$; in $Q$ that scalar is invertible by [L2], so each simple tensor satisfies $q\otimes m=a^{-1}q\otimes am=0$ for that $a$. Simple tensors generate the tensor product, hence $Q\otimes_RT=0$. [step 1.1, L2, algebra]

3.1 By [L3] and [L4], $Q\otimes_RR^r\cong Q^r$. Therefore $Q\otimes_RM\cong Q^r$ and its $Q$-dimension is $r$, which step 1.1 identified with $\operatorname{rank}_RM$. This includes $r=0$, pure torsion, pure free, rank one, and the zero module, where $t=0$ makes $T$ the zero module. [step 1.1, step 2.1, L3, L4] ∎
