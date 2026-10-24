---
id: "def-right-total-derived-functor-on-the-bounded-below-derived-category"
kind: "definition"
title: "Right total derived functor on the bounded below derived category"
deps: ["thm-injective-complexes-model-the-bounded-below-derived-category", "def-additive-functor"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf"
      title: "10.5.1–10.5.8, pp. 391–393; restrict to supplied replacement data"
provenance:
  statement: ai-altered
  proof: not-applicable
status: published
origin: "pipeline"
justified_by: ["thm-existence-of-the-bounded-below-right-total-derived-functor"]
---

## Definition

Let $F:\mathcal A\to\mathcal B$ be additive and supply bounded-below injective replacements $j_X:X\to I_X$ under the hypotheses of [[thm-injective-complexes-model-the-bounded-below-derived-category]]. Put $T=Q_{\mathcal B}K(F)$. The **right total derived functor** is $RF:D^+(\mathcal A)\to D^+(\mathcal B)$ with $RF(X)=Q_{\mathcal B}F(I_X)$ and maps induced by the injective model equivalence. It has coaugmentation $\eta:T\to RFQ_{\mathcal A}$ induced by $F(j_X)$.

Its universal property is initial: for every $G:D^+(\mathcal A)\to D^+(\mathcal B)$ and natural $\gamma:T\to GQ_{\mathcal A}$ there is a unique natural $\nu:RF\to G$ such that $(\nu Q_{\mathcal A})\eta=\gamma$. Here $F$ is additive in the sense of [[def-additive-functor]].
