---
id: "cex-a-proper-endpoint-homotopy-that-is-not-a-proper-combined-map"
kind: "counterexample"
title: "Proper endpoint maps joined by a nonproper combined homotopy"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-degree-is-invariant-under-proper-smooth-homotopy","thm-heine-borel-rn"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Robbin–Salamon, Introduction to Differential Topology, proper-homotopy clause following Theorem 5.4.1
      url: https://zaco.au/lib/math/text/differential-geometry/difftop.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement refuted

Properness of the endpoint maps does not imply properness of the combined homotopy. There are proper smooth maps $F_0,F_1:\mathbb R\to\mathbb R$ and a smooth homotopy between them whose combined map $\mathbb R\times[0,1]\to\mathbb R$ is not proper.

## Facts & Assumptions

**Given:** Define $H:\mathbb R\times[0,1]\to\mathbb R$ by $H(x,t)=(2t-1)^2x$, and write $F_t(x)=H(x,t)$.

[F1] [[thm-degree-is-invariant-under-proper-smooth-homotopy]] requires the combined map $H$ to be proper and explicitly warns that proper endpoint maps alone do not suffice.

[F2] [[thm-heine-borel-rn]] makes every singleton in $\mathbb R$ compact and the unbounded real line noncompact.

## Counterexample

1.1 The displayed polynomial formula is smooth. At both parameter endpoints, $$F_0(x)=H(x,0)=x=H(x,1)=F_1(x).$$ Thus both endpoint maps are the identity, and each is proper because its inverse image of any compact set is that same compact set. [given]

1.2 The compact singleton $\{0\}$ has inverse image $$H^{-1}(\{0\})=(\{0\}\times[0,1])\cup(\mathbb R\times\{1/2\}).$$ This inverse image is not compact: for $n\ge1$, let $U_n=H^{-1}(\{0\})\cap((-n,n)\times(1/4,3/4))$, and let $V=H^{-1}(\{0\})\cap(\mathbb R\times([0,1]\setminus\{1/2\}))$. These sets are open in the inverse-image subspace and $\{V,U_1,U_2,\ldots\}$ covers it, but any finite subfamily misses $(x,1/2)$ once $|x|$ exceeds every selected index. Hence $H$ is not proper. [F2, given]

2.1 The two proper endpoint maps are therefore joined by a nonproper combined homotopy, so the endpoint-only inference fails and [F1]'s hypothesis is indispensable. At $t=1/2$ the slice is the constant zero map, which pinpoints the degeneracy; at $t=0,1$ it is the identity. The source and compact test set are nonempty, all endpoints and the zero fibre are explicit, and the countable cover is specified by a formula rather than selected, so no choice principle is used. [F1, step 1.1, step 1.2] ∎
