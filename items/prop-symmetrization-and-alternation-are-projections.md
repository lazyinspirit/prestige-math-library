---
id: prop-symmetrization-and-alternation-are-projections
kind: proposition
title: "Symmetrization and alternation are projections"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-symmetrization-and-alternation-operators]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

For each $k$, the operators $\operatorname{Sym}$ and $\operatorname{Alt}$ on
covariant $k$-tensors satisfy

$$ \operatorname{Sym}^2=\operatorname{Sym},\qquad \operatorname{Alt}^2=\operatorname{Alt}. $$

Their images are exactly the symmetric and alternating covariant tensors.

## Facts & Assumptions

**Given:** A covariant $k$-tensor $T$.

[F1] Symmetrization and alternation are the normalized averages over $S_k$, with and without the sign factor ([[def-symmetrization-and-alternation-operators]]).

## Proof
**Proof technique:** direct.

1.1 Applying $\operatorname{Sym}$ twice gives a double average over $S_k\times S_k$. Reindex by the product permutation $\rho=\sigma\tau$; each $\rho$ occurs exactly $k!$ times, so the second averaging changes nothing. Thus $\operatorname{Sym}(\operatorname{Sym}T)=\operatorname{Sym}T$. [F1, given, algebra]

1.2 The same reindexing works for $\operatorname{Alt}$, and the sign factors multiply to $\operatorname{sgn}(\sigma\tau)$. Hence $\operatorname{Alt}(\operatorname{Alt}T)=\operatorname{Alt}T$. [F1, given, algebra]

2.1 If $T$ is symmetric, every summand in [F1] equals $T$, so $\operatorname{Sym}T=T$. Conversely, $\operatorname{Sym}T$ is fixed by every permutation because averaging over the whole group is permutation-invariant. The alternating case is identical, with the sign picked up under permutation. [F1, step 1.1, step 1.2]

3.1 Therefore $\operatorname{Sym}$ and $\operatorname{Alt}$ are projections onto the symmetric and alternating tensors. [step 1.1, step 1.2, step 2.1] ∎