---
id: ex-first-hierarchy-stages-and-ranks
kind: example
title: "First hierarchy stages and their ranks"
status: published
origin: pipeline
deps: ["prop-ranks-of-ordinals-and-hierarchy-stages"]
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Marks, Set Theory, Berkeley edition \u2014 7.1 and 7.4 p.34."
      url: "https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf"
---

## Example

The first hierarchy stages are $V_0=\varnothing$, $V_1=\{\varnothing\}$ and $V_2=\{\varnothing,\{\varnothing\}\}$. Their ranks are respectively $0,1,2$. Also $\operatorname{rank}(\{\{\varnothing\}\})=2$, even though this last singleton is not the ordinal $2$.

## Facts & Assumptions

**Given:** Work in ZF unless the statement explicitly weakens or supplements it; fix the objects and hypotheses of the statement.

[F1] In ZF, for every ordinal $\alpha$, $\operatorname{rank}(\alpha)=\alpha$ and $\operatorname{rank}(V_\alpha)=\alpha$. ([[prop-ranks-of-ordinals-and-hierarchy-stages]])

## Verification

1.1 Unfolding the empty stage and two power sets gives the displayed sets. The rank-of-stages formula gives $\operatorname{rank}(V_i)=i$ for $i=0,1,2$. [F1]

2.1 The membership-rank equation gives $\operatorname{rank}(\{\{\varnothing\}\})=\operatorname{rank}(\{\varnothing\})+1=2$. This singleton omits $\varnothing$, while the ordinal $2=\{\varnothing,\{\varnothing\}\}$ contains it. Equal ranks therefore do not identify sets. [F1, step 1.1] ∎
