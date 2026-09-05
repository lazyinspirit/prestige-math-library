---
id: ex-direct-image-open-immersion
kind: example
title: "Direct image along an open immersion is restriction-compatible intersection"
status: published
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-direct-image-sheaf, def-restriction-sheaf-open-subspace]
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 6.21"
      url: "https://stacks.math.columbia.edu/tag/008C"
    - title: "Ravi Vakil, The Rising Sea, Exercise 2.7.D"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGnov1817public.pdf"
---

## Example

Let $j:U\hookrightarrow X$ be an open immersion, and let $\mathcal F$ be a
sheaf on $U$. Then for every open set $V \subseteq X$ one has
$$
(j_*\mathcal F)(V)=\mathcal F(V\cap U).
$$

## Facts & Assumptions

**Given:** An open inclusion $j:U\hookrightarrow X$, a sheaf $\mathcal F$ on
$U$, and an open set $V \subseteq X$.

[F1] Direct image is computed by preimage opens:
$(j_*\mathcal F)(V)=\mathcal F(j^{-1}(V))$
([[def-direct-image-sheaf]]).

[F2] Restriction to an open subspace is inverse image along the inclusion
([[def-restriction-sheaf-open-subspace]]).

## Verification

**Proof technique:** direct.

1.1 Because $j$ is the inclusion of $U$ into $X$, one has $j^{-1}(V)=V\cap U$. [given]

2.1 Substituting step 1.1 into [F1] gives $$(j_*\mathcal F)(V)=\mathcal F(V\cap U).$$ This is exactly the announced formula, and it is compatible with the restriction interpretation in [F2]. [F1, F2, step 1.1] ∎
