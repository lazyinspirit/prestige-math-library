---
id: fs-every-connection-on-a-riemannian-vector-bundle-is-metric-compatible
kind: false-statement
title: "Every connection on a riemannian vector bundle is metric compatible"
status: published
origin: pipeline
deps: ["def-metric-compatible-connection-on-a-riemannian-vector-bundle","thm-local-connection-forms-glue-exactly-when-they-obey-the-transformation-law"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
---

## Statement

Every connection on a vector bundle equipped with a Riemannian bundle metric is compatible with that metric.

## Facts & Assumptions

**Given:** The asserted automatic compatibility with the supplied metric.

[F1] Compatibility requires $Xh(s,t)=h(\nabla_Xs,t)+h(s,\nabla_Xt)$ for all local sections ([[def-metric-compatible-connection-on-a-riemannian-vector-bundle]]).

[F2] A smooth matrix of one-forms in a global frame defines a connection ([[thm-local-connection-forms-glue-exactly-when-they-obey-the-transformation-law]]).

## Refutation

1.1 On $E=\mathbb R\times\mathbb R$ take the usual fibre metric $h(ue,ve)=uv$ for its constant unit frame $e$, and the connection $\nabla(ue)=(du+u\,dx)e$. Its coefficient $dx$ is smooth, so [F2] makes this a connection. It has $\nabla_{\partial_x}e=e$. [F2, given]

2.1 With $s=t=e$ and $X=\partial_x$, the left side of [F1] is $\partial_x1=0$ and the right side is $h(e,e)+h(e,e)=2$. Thus the equality fails at every point, even though the metric is positive definite. A zero section would give no discrepancy; the unit section is an explicit witness. Compatibility is a condition additional to the existence of a metric and a connection. [F1, step 1.1] ∎
