---
id: def-downward-gradient-like-vector-field
kind: definition
title: "Downward gradient-like vector fields for a Morse function"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-morse-function-and-excellent-morse-function, def-smooth-vector-field-as-a-tangent-bundle-section]
justified_by: []
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Liviu I. Nicolaescu, An Invitation to Morse Theory, §2.4"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
---

## Definition

Let $f:M\to\mathbb R$ be Morse. A smooth vector field $X$ is **downward
gradient-like for $f$** if both conditions hold:

1. $df_x(X_x)<0$ at every $x\notin\operatorname{Crit}(f)$; and
2. for every $p\in\operatorname{Crit}(f)$ there are Morse coordinates
   $(u,v)$ centred at $p$, with
   $f=f(p)-|u|^2+|v|^2$, in which
   $$X=2\sum_i u_i\partial_{u_i}-2\sum_jv_j\partial_{v_j}.$$

Thus the field is the negative Euclidean gradient in the required local Morse
model, not merely a strictly descending field off the critical set.
