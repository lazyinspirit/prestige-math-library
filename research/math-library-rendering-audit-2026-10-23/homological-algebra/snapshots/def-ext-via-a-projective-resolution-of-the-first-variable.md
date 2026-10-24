---
id: def-ext-via-a-projective-resolution-of-the-first-variable
kind: definition
title: "Ext via a projective resolution of the first variable"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-supplied-projective-resolution-datum]
verification:
  audited: 2026-09-06
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2"
      url: https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf
pipeline_run: frontier-31a
---
## Definition

Let $\mathcal A$ be abelian and let $P$ be supplied projective-resolution data, written homologically with $d_{P}:P_{q+1}(M)\to P_q(M)$. For $M,N$ in its domain, set
$$C_P^q(M,N)=\operatorname{Hom}_{\mathcal A}(P_q(M),N),\qquad d_P^q(f)=f\circ d_{P}^{q+1}.$$
Then $d_P^{q+1}d_P^q=0$ because consecutive differentials of $P(M)$ compose to zero. Define
$$\operatorname{Ext}_{P}^{n}(M,N):=H^n(C_P^\bullet(M,N))\quad(n\geq0).$$
The subscript $P$ records the supplied choice; no equality with the injective construction is being made here.
