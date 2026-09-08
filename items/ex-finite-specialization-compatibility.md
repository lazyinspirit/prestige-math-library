---
id: ex-finite-specialization-compatibility
kind: example
title: "Agreement on overlap is insufficient for specialization compatibility"
status: draft
origin: pipeline
deps: [def-finite-aronszajn-specialization-poset]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Monk, Set theory following Jech (2024), Lemma 16.37 defining condition (iii), printed p332; two singleton assignments calculated locally"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
justified_by: []
forward_refs: []
proof_strategy: direct
---

## Example

In an Aronszajn tree choose nodes $x<_Ty$. The singleton conditions $p=\{(x,0)\}$ and $q=\{(y,0)\}$ agree on their empty overlap but are incompatible in $P(T)$. Replacing $q$ by $q'=\{(y,1)\}$ makes them compatible, with common extension $\{(x,0),(y,1)\}$.

## Facts & Assumptions

**Given:** An Aronszajn tree $T$ and $x<_Ty$. Such a pair exists: height $\omega_1$ supplies a node with nonzero predecessor order type and hence a predecessor.

[F1] Singleton assignments are specializing conditions, and two conditions are compatible iff their union is a specializing function. [[def-finite-aronszajn-specialization-poset]]

## Verification

1.1 Each of $p,q,q'$ has one-node domain, so there is no distinct comparable pair within its domain and F1 makes it a condition. Since $x<_Ty$, the nodes are distinct; each intersection of the domain of $p$ with that of $q$ or $q'$ is empty, so the functions agree on overlap. But $(p\cup q)(x)=0=(p\cup q)(y)$ violates the required inequality on $x<_Ty$. Thus $p\cup q$ is not a condition and F1 makes $p,q$ incompatible. [F1, given]

2.1 The function $u=p\cup q'=\{(x,0),(y,1)\}$ has finite domain $\{x,y\}$ and its only unordered pair of distinct nodes has labels $0\ne1$. Therefore it is a specializing condition and $u\supseteq p,q'$, so $u\le p,q'$. This is the explicit common bound verifying compatibility. [F1, step 1.1] ∎
